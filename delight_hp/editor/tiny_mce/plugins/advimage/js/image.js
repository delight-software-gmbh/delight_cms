var ImageDialog = {
	preInit : function() {
		var url;

		tinyMCEPopup.requireLangPack();

		if (url = tinyMCEPopup.getParam("external_image_list_url"))
			document.write('<script language="javascript" type="text/javascript" src="' + tinyMCEPopup.editor.documentBaseURI.toAbsolute(url) + '"></script>');
	},
	
	init : function(ed) {
		var f = document.forms[0], nl = f.elements, ed = tinyMCEPopup.editor, dom = ed.dom, n = ed.selection.getNode();

		tinyMCEPopup.resizeToInnerSize();
		this.fillClassList('class_list');
		this.fillFileList('src_list', 'tinyMCEImageList');
		this.fillFileList('over_list', 'tinyMCEImageList');
		this.fillFileList('out_list', 'tinyMCEImageList');
		TinyMCE_EditableSelects.init();

		if (n.nodeName == 'IMG') {
			nl.src.value = dom.getAttrib(n, 'src');
			nl.width.value = dom.getAttrib(n, 'width');
			nl.height.value = dom.getAttrib(n, 'height');
			nl.alt.value = dom.getAttrib(n, 'alt');
			nl.title.value = dom.getAttrib(n, 'title');
			nl.vspace.value = this.getAttrib(n, 'vspace');
			nl.hspace.value = this.getAttrib(n, 'hspace');
			nl.border.value = this.getAttrib(n, 'border');
			selectByValue(f, 'align', this.getAttrib(n, 'align'));
			selectByValue(f, 'class_list', dom.getAttrib(n, 'class'), true, true);
			nl.style.value = dom.getAttrib(n, 'style');
			nl.id.value = dom.getAttrib(n, 'id');
			nl.dir.value = dom.getAttrib(n, 'dir');
			nl.lang.value = dom.getAttrib(n, 'lang');
			nl.usemap.value = dom.getAttrib(n, 'usemap');
			nl.longdesc.value = dom.getAttrib(n, 'longdesc');
			nl.insert.value = ed.getLang('update');
			
			/* BEGIN: delight lukas */
			nl.dedtparams.value = dom.getAttrib(n, 'dedtparams');
			if (/\#title\#/.test(nl.dedtparams.value)) {
				nl.showtitlecheck.checked = true;
			}
			if (/\#biglink\#/.test(nl.dedtparams.value)) {
				nl.showbiglinkcheck.checked = true;
			}
			if (/^\s*openWindow\s*\(\s*'[^\']+'\s*,\s*\d+\s*,\s*\d+\s*\);?\s*$/.test(dom.getAttrib(n, 'onclick'))) {
				nl.dedtopen.value = dom.getAttrib(n, 'onclick').replace(/^\s*openWindow\s*\(\s*'([^\']+)'\s*,\s*\d+\s*,\s*\d+\s*\);?\s*$/, '$1');
				this.setShowBigImage(true);
			}
			nl.src.value = '/delight_hp/images/page/' + nl.src.value.replace(/^(.*)\/([a-z0-9\.-]+)$/, '$2');
			/* END: delight lukas */

			if (/^\s*this.src\s*=\s*\'([^\']+)\';?\s*$/.test(dom.getAttrib(n, 'onmouseover')))
				nl.onmouseoversrc.value = dom.getAttrib(n, 'onmouseover').replace(/^\s*this.src\s*=\s*\'([^\']+)\';?\s*$/, '$1');

			if (/^\s*this.src\s*=\s*\'([^\']+)\';?\s*$/.test(dom.getAttrib(n, 'onmouseout')))
				nl.onmouseoutsrc.value = dom.getAttrib(n, 'onmouseout').replace(/^\s*this.src\s*=\s*\'([^\']+)\';?\s*$/, '$1');

			if (ed.settings.inline_styles) {
				// Move attribs to styles
				if (dom.getAttrib(n, 'align'))
					this.updateStyle('align');

				if (dom.getAttrib(n, 'hspace'))
					this.updateStyle('hspace');

				if (dom.getAttrib(n, 'border'))
					this.updateStyle('border');

				if (dom.getAttrib(n, 'vspace'))
					this.updateStyle('vspace');
			}
		}
		
		/* BEGIN: delight lukas, ImageList */
		this.loadSectionList();
		/* END: delight lukas, ImageList */

		// Setup browse button
		document.getElementById('srcbrowsercontainer').innerHTML = getBrowserHTML('srcbrowser','src','image','theme_advanced_image');
		if (isVisible('srcbrowser'))
			document.getElementById('src').style.width = '260px';

		// Setup browse button
		document.getElementById('onmouseoversrccontainer').innerHTML = getBrowserHTML('overbrowser','onmouseoversrc','image','theme_advanced_image');
		if (isVisible('overbrowser'))
			document.getElementById('onmouseoversrc').style.width = '260px';

		// Setup browse button
		document.getElementById('onmouseoutsrccontainer').innerHTML = getBrowserHTML('outbrowser','onmouseoutsrc','image','theme_advanced_image');
		if (isVisible('outbrowser'))
			document.getElementById('onmouseoutsrc').style.width = '260px';

		// If option enabled default contrain proportions to checked
		if (ed.getParam("advimage_constrain_proportions", true))
			f.constrain.checked = true;

		// Check swap image if valid data
		if (nl.onmouseoversrc.value || nl.onmouseoutsrc.value)
			this.setSwapImage(true);
		else
			this.setSwapImage(false);

		this.changeAppearance();
		this.showPreviewImage(nl.src.value, 1);
	},

	insert : function(file, title) {
		var ed = tinyMCEPopup.editor, t = this, f = document.forms[0];

		if (f.src.value === '') {
			if (ed.selection.getNode().nodeName == 'IMG') {
				ed.dom.remove(ed.selection.getNode());
				ed.execCommand('mceRepaint');
			}

			tinyMCEPopup.close();
			return;
		}

		if (tinyMCEPopup.getParam("accessibility_warnings", 1)) {
			if (!f.alt.value) {
				tinyMCEPopup.confirm(tinyMCEPopup.getLang('advimage_dlg.missing_alt'), function(s) {
					if (s)
						t.insertAndClose();
				});

				return;
			}
		}

		t.insertAndClose();
	},

	insertAndClose : function() {
		var ed = tinyMCEPopup.editor, f = document.forms[0], nl = f.elements, v, args = {}, el;

		tinyMCEPopup.restoreSelection();

		// Fixes crash in Safari
		if (tinymce.isWebKit)
			ed.getWin().focus();

		if (!ed.settings.inline_styles) {
			args = {
				vspace : nl.vspace.value,
				hspace : nl.hspace.value,
				border : nl.border.value,
				align : getSelectValue(f, 'align')
			};
		} else {
			// Remove deprecated values
			args = {
				vspace : '',
				hspace : '',
				border : '',
				align : ''
			};
		}

		tinymce.extend(args, {
			src : nl.src.value,
			width : nl.width.value,
			height : nl.height.value,
			alt : nl.alt.value,
			title : nl.title.value,
			'class' : getSelectValue(f, 'class_list'),
			style : nl.style.value,
			id : nl.id.value,
			dir : nl.dir.value,
			lang : nl.lang.value,
			usemap : nl.usemap.value,
			longdesc : nl.longdesc.value
		});

		args.onmouseover = args.onmouseout = '';

		if (f.onmousemovecheck.checked) {
			if (nl.onmouseoversrc.value)
				args.onmouseover = "this.src='" + nl.onmouseoversrc.value + "';";

			if (nl.onmouseoutsrc.value)
				args.onmouseout = "this.src='" + nl.onmouseoutsrc.value + "';";
		}
		
		/* BEGIN: delight lukas */
		args['class'] = args['class'].replace(/showBig/, '');
		args.onclick = '';
		if (f.showbigimagecheck.checked && $('previewImg')) {
			var img = $('previewImg');
			if (nl.dedtopen.value.length > 0) {
				args.onclick = "openWindow('" + nl.dedtopen.value + "',"+img.width+","+img.height+");";
			} else {
				args.onclick = "openWindow('/" + nl.src.value.replace(/small\//, '') + "',"+img.width+","+img.height+");";
			}
			args['class'] += ' showBig';
		}
		args.dedtopen = nl.dedtopen.value;
		args.dedtparams = nl.dedtparams.value;
		showTitle = 0;
		if (/\#title\#/.test(nl.dedtparams.value)) {
			showTitle = 1;
		}
		if (!nl.width.value) {
			nl.width.value = $('previewImg').width;
		}
		if (!nl.height.value) {
			nl.height.value = $('previewImg').height;
		}
		args.src = '/image/' + tinymce.EditorManager.settings.language + '/' + nl.width.value + 'x' + nl.height.value + '/' + showTitle + '/' + nl.src.value.replace(/[\/]+delight_hp[\/]+images[\/]+page[\/]+/, '');
		
		// We have to preload the image to create it first serverside - we can load the Image in the Editor only after this because the otherway the image is not displayed
		var imageload = new Image();
		imageload.src = args.src + '/rc=true';
		imageload.onload = function(e) {
		/* END: delight lukas */

		el = ed.selection.getNode();

		if (el && el.nodeName == 'IMG') {
			ed.dom.setAttribs(el, args);
		} else {
			ed.execCommand('mceInsertContent', false, '<img id="__mce_tmp" />', {skip_undo : 1});
			ed.dom.setAttribs('__mce_tmp', args);
			ed.dom.setAttrib('__mce_tmp', 'id', '');
			ed.undoManager.add();
		}

		tinyMCEPopup.close();
		/* BEGIN: delight lukas */
		};
		/* END: delight lukas */
	},

	getAttrib : function(e, at) {
		var ed = tinyMCEPopup.editor, dom = ed.dom, v, v2;

		if (ed.settings.inline_styles) {
			switch (at) {
				case 'align':
					if (v = dom.getStyle(e, 'float'))
						return v;

					if (v = dom.getStyle(e, 'vertical-align'))
						return v;

					break;

				case 'hspace':
					v = dom.getStyle(e, 'margin-left')
					v2 = dom.getStyle(e, 'margin-right');

					if (v && v == v2)
						return parseInt(v.replace(/[^0-9]/g, ''));

					break;

				case 'vspace':
					v = dom.getStyle(e, 'margin-top')
					v2 = dom.getStyle(e, 'margin-bottom');
					if (v && v == v2)
						return parseInt(v.replace(/[^0-9]/g, ''));

					break;

				case 'border':
					v = 0;

					tinymce.each(['top', 'right', 'bottom', 'left'], function(sv) {
						sv = dom.getStyle(e, 'border-' + sv + '-width');

						// False or not the same as prev
						if (!sv || (sv != v && v !== 0)) {
							v = 0;
							return false;
						}

						if (sv)
							v = sv;
					});

					if (v)
						return parseInt(v.replace(/[^0-9]/g, ''));

					break;
			}
		}

		if (v = dom.getAttrib(e, at))
			return v;

		return '';
	},

	setSwapImage : function(st) {
		var f = document.forms[0];

		f.onmousemovecheck.checked = st;
		setBrowserDisabled('overbrowser', !st);
		setBrowserDisabled('outbrowser', !st);

		if (f.over_list)
			f.over_list.disabled = !st;

		if (f.out_list)
			f.out_list.disabled = !st;

		f.onmouseoversrc.disabled = !st;
		f.onmouseoutsrc.disabled  = !st;
	},

	fillClassList : function(id) {
		var dom = tinyMCEPopup.dom, lst = dom.get(id), v, cl;

		if (v = tinyMCEPopup.getParam('theme_advanced_styles')) {
			cl = [];

			tinymce.each(v.split(';'), function(v) {
				var p = v.split('=');

				cl.push({'title' : p[0], 'class' : p[1]});
			});
		} else
			cl = tinyMCEPopup.editor.dom.getClasses();

		if (cl.length > 0) {
			lst.options.length = 0;
			lst.options[lst.options.length] = new Option(tinyMCEPopup.getLang('not_set'), '');

			tinymce.each(cl, function(o) {
				lst.options[lst.options.length] = new Option(o.title || o['class'], o['class']);
			});
		} else
			dom.remove(dom.getParent(id, 'tr'));
	},

	fillFileList : function(id, l) {
		var dom = tinyMCEPopup.dom, lst = dom.get(id), v, cl;

		l = window[l];
		lst.options.length = 0;

		if (l && l.length > 0) {
			lst.options[lst.options.length] = new Option('', '');

			tinymce.each(l, function(o) {
				lst.options[lst.options.length] = new Option(o[0], o[1]);
			});
		} else
			dom.remove(dom.getParent(id, 'tr'));
	},

	resetImageData : function() {
		var f = document.forms[0];

		f.elements.width.value = f.elements.height.value = '';
	},

	updateImageData : function(img, st) {
		var f = document.forms[0];

		if (!st) {
			f.elements.width.value = img.width;
			f.elements.height.value = img.height;
		}

		this.preloadImg = img;
	},

	changeAppearance : function() {
		var ed = tinyMCEPopup.editor, f = document.forms[0], img = document.getElementById('alignSampleImg');

		if (img) {
			if (ed.getParam('inline_styles')) {
				ed.dom.setAttrib(img, 'style', f.style.value);
			} else {
				img.align = f.align.value;
				img.border = f.border.value;
				img.hspace = f.hspace.value;
				img.vspace = f.vspace.value;
			}
		}
	},

	changeHeight : function() {
		var f = document.forms[0], tp, t = this;

		if (!f.constrain.checked || !t.preloadImg) {
			return;
		}

		if (f.width.value == "" || f.height.value == "")
			return;

		tp = (parseInt(f.width.value) / parseInt(t.preloadImg.width)) * t.preloadImg.height;
		f.height.value = tp.toFixed(0);
	},

	changeWidth : function() {
		var f = document.forms[0], tp, t = this;

		if (!f.constrain.checked || !t.preloadImg) {
			return;
		}

		if (f.width.value == "" || f.height.value == "")
			return;

		tp = (parseInt(f.height.value) / parseInt(t.preloadImg.height)) * t.preloadImg.width;
		f.width.value = tp.toFixed(0);
	},

	updateStyle : function(ty) {
		var dom = tinyMCEPopup.dom, st, v, f = document.forms[0], img = dom.create('img', {style : dom.get('style').value});

		if (tinyMCEPopup.editor.settings.inline_styles) {
			// Handle align
			if (ty == 'align') {
				dom.setStyle(img, 'float', '');
				dom.setStyle(img, 'vertical-align', '');

				v = getSelectValue(f, 'align');
				if (v) {
					if (v == 'left' || v == 'right')
						dom.setStyle(img, 'float', v);
					else
						img.style.verticalAlign = v;
				}
			}

			// Handle border
			if (ty == 'border') {
				dom.setStyle(img, 'border', '');

				v = f.border.value;
				if (v || v == '0') {
					if (v == '0')
						img.style.border = '0';
					else
						img.style.border = v + 'px solid black';
				}
			}

			// Handle hspace
			if (ty == 'hspace') {
				dom.setStyle(img, 'marginLeft', '');
				dom.setStyle(img, 'marginRight', '');

				v = f.hspace.value;
				if (v) {
					img.style.marginLeft = v + 'px';
					img.style.marginRight = v + 'px';
				}
			}

			// Handle vspace
			if (ty == 'vspace') {
				dom.setStyle(img, 'marginTop', '');
				dom.setStyle(img, 'marginBottom', '');

				v = f.vspace.value;
				if (v) {
					img.style.marginTop = v + 'px';
					img.style.marginBottom = v + 'px';
				}
			}

			// Merge
			dom.get('style').value = dom.serializeStyle(dom.parseStyle(img.style.cssText), 'img');
		}
	},

	changeMouseMove : function() {
	},

	showPreviewImage : function(u, st) {
		if (!u) {
			tinyMCEPopup.dom.setHTML('prev', '');
			return;
		}

		if (!st && tinyMCEPopup.getParam("advimage_update_dimensions_onchange", true))
			this.resetImageData();

		u = tinyMCEPopup.editor.documentBaseURI.toAbsolute(u);

		if (!st)
			tinyMCEPopup.dom.setHTML('prev', '<img id="previewImg" src="' + u + '" border="0" onload="ImageDialog.updateImageData(this);" onerror="ImageDialog.resetImageData();" />');
		else
			tinyMCEPopup.dom.setHTML('prev', '<img id="previewImg" src="' + u + '" border="0" onload="ImageDialog.updateImageData(this, 1);" />');
	},
	
	// BEGIN: delight lukas
	// The Queue we need because sometimes not all picures where loaded. no idea why...
	_queueImage : function(src, id) {
		if (!this.imageQueue) {
			this.imageQueue = [];
		}
		this.imageQueue.reverse();
		this.imageQueue.push({src:src, id:id});
		this.imageQueue.reverse();
	},
	_processImageQueue : function() {
		var t = this, img;
		if (!t.imageQueue) {
			t.imageQueue = [];
		}
		if (t.imageQueue.length > 0) {
			img = t.imageQueue.pop();
			t._preloadImage(img.src, img.id);
		} else {
			window.setTimeout(function() {t._processImageQueue();}, 500);
		}
	},
	_preloadImage : function(src, id) {
		var t = this, img = new Image();
		t.imageLoaded = false;
		img.src = src;
		img.onload = function(e) {
			if (id && $(id)) {
				$(id).src = src;
			}
			t._processImageQueue();
		};
	},
	
	// Options
	setShowBigImage : function(st) {
		var f = document.forms[0];
		f.showbigimagecheck.checked = st;
	},
	setShowBigImageLink : function(st) {
		var f = document.forms[0];
		f.showbiglinkcheck.checked = st;
		f.dedtparams.value = f.dedtparams.value.replace(/\#biglink\#/, '');
		if (st) {
			f.dedtparams.value += '#biglink#';
		}
	},
	setShowTitleImage : function(st) {
		var f = document.forms[0];
		f.showtitlecheck.checked = st;
		f.dedtparams.value = f.dedtparams.value.replace(/\#title\#/, '');
		if (st) {
			f.dedtparams.value += '#title#';
		}
	},
	
	// Section- and Image-List functions
	getSelectedSection : function() {
		var l = $('delightimagesections'), i, li;
		if (l) {
			li = l.getElementsByTagName('span');
			for (i = 0; i < li.length; i++) {
				if (Element.hasClassName(li[i], 'selected')) {
					return li[i].id.replace(/tsc/, '');
				}
			}
		}
		return false;
	},
	getSelectedEntry : function() {
		var l,i;
		if ($('delightimagelist')) {
			l = $('delightimagelist').getElementsByTagName('li');
			for (i = 0; i < l.length; i++) {
				if (Element.hasClassName(l[i], 'selected')) {
					return l[i].id.replace(/imageEntry_/, '');
				}
			}
		}
		return false;
	},
	
	// ImageList
	loadImageList : function(id) {
		if ($('delightimagelist')) {
			var t = this;
			$('delightimagelist').innerHTML = '<p style="text-align:center;"><img src="/delight_hp/data/loading.gif" alt="Loading..." title="Loading..." style="width:220px;height:19px;" /></p>';
			new Ajax.Request('/delight_hp/index.php', {
				method : 'post',
				parameters : {adm:1000, section:id, action:'content'},
				onSuccess : function(transport) {
					var cont = transport.responseText.evalJSON();
					t._drawImagesList($('delightimagelist'), cont.list);
				}
			});
		}
	},
	_drawImagesList : function(p, o) {
		var i,li,cl,c, t = this;
		var adminUrl = tinymce.baseURL.replace(/editor\/.*$/gi, '');
		p.innerHTML = '';
		if (p && p.nodeName.toLowerCase() != 'ul') {
			c = document.createElement('ul');
			Element.addClassName(c, 'table');
			c.setAttribute('id', 'scmain');
			p.appendChild(c);
		}
		if (!p && !c) {
			return;
		}
		
		for (i = 0; i < o.length; i++) {
			cl = (i%2) ? 'odd' : 'even';
			li = this._createImageLine(o[i], cl);
			if (li) {
				c.appendChild(li);
			}
		}
	},
	_createImageLine : function(o, cl) {
		var t=this, img,d,el,tbl,tr,td,dt=new Date();
		el = document.createElement('li');
		el.setAttribute('id', 'imageEntry_'+o.id); // For FF3.+ the ID mus be in Format "string_identifier"
		el.setAttribute('class', 'sortable '+cl);
		
		el.onclick = function(e) {
			var id = t.getSelectedEntry('imageEntry_'), f = document.forms[0], nl = f.elements;
			if (id) {
				$('imageEntry_'+id).removeClassName('selected');
			}
			this.addClassName('selected');
			id = t.getSelectedEntry();
			nl.src.value = $('image'+id).getAttribute('_src').replace(/\/\//gi, '/');
			if (nl.alt.value == '') {
				nl.alt.value = $('image'+id).getAttribute('alt');
			}
			if (nl.title.value == '') {
				nl.title.value = $('image'+id).getAttribute('title');
			}
			t.showPreviewImage(nl.src.value);
		};
		
		//tbl = document.createElement('table');
		//tbl.style.width = '100%';
		//el.appendChild(tbl);
		
		//tr = document.createElement('tr');
		//tbl.appendChild(tr);
		
		//td = document.createElement('td');
		td = document.createElement('div');
		td.setAttribute('class', 'image');
		el.appendChild(td);
		//tr.appendChild(td);
		
		d = t._calcDimension({width:o.dimension[0], height:o.dimension[1]}, {width:100, height:80});
		img = document.createElement('img');
		img.setAttribute('id', 'image'+o.id);
		img.setAttribute('alt', o.name);
		img.setAttribute('title', o.title);
		//img.setAttribute('src', '/image/de/'+d.width+'x'+d.height+'/0/'+o.file);
		img.setAttribute('_src', o.src);
		img.style.width = d.width+'px';
		img.style.height = d.height+'px';
		td.appendChild(img);
		
		// Queue the Image instead of loading it right now
		t._queueImage('/image/de/'+d.width+'x'+d.height+'/0/'+o.file, 'image'+o.id);
		
		//td = document.createElement('td');
		td = document.createElement('div');
		td.setAttribute('class', 'data');
		td.setAttribute('class', 'content');
		td.innerHTML = '<span class="title">'+(o.title.length ? o.title : o.name)+'</span><br/>'+
                        '<span class="identifier">Name:</span><span class="value">'+o.name+'</span><br/>'+
                        '<span class="identifier">Dimension:</span><span class="value">'+o.dimension[0]+'x'+o.dimension[1]+'</span><br/>'+
                        '<span class="identifier">Date:</span><span class="value">'+o.date+'</span><br/>'+
		                '<span class="identifier">Size:</span><span class="value">'+t._getHRSize(o.size)+'</span><br/>'+
		                o.text;
		el.appendChild(td);
		//tr.appendChild(td);
		
		return el;
	},
	_calcDimension : function(o, m) {
		var dim = {width:o.width, height:o.height};
		if (dim.height > m.height) {
			dim.width = Math.round((m.height * o.width) / o.height);
			dim.height = m.height;
		}
		if (dim.width > m.width) {
			dim.width = m.width;
			dim.height = Math.round((o.height * m.width) / o.width);
		}
		return dim;
	},
	_getHRSize : function(size) {
		if (size > 1048576) { // MB = 1024*1024
			size = (Math.round( (size / 1048576) * 100 ) / 100) + ' MiB';
		} else if (size > 1024) { // KB = 1024
			size = (Math.round( (size / 1024) * 100 ) / 100) + ' KiB';
		} else {
			size = (Math.round( size * 100 ) / 100) + ' Byte';
		}
		return size;
	},
	
	// SectionList
	loadSectionList : function() {
		if ($('delightimagesections')) {
			var f = document.forms[0], s = f.src.value, t = this;
			new Ajax.Request('/delight_hp/index.php', {
				method : 'post',
				parameters : {adm:1000, selected:s, action:'sectiontree'},
				onSuccess : function(transport) {
					var cont = transport.responseText.evalJSON();
					if (cont && (cont.length > 0) && cont[0].id) {
						t._drawSectionList($('delightimagesections'), cont)
						t.loadImageList(cont[0].id);
						t._processImageQueue(); // We start the Process here so we have not to change the source above too much
					}
				}
			});
		}
	},
	_drawSectionList : function(p, o) {
		var i,li,st,sl,c, t = this;
		var adminUrl = tinymce.baseURL.replace(/editor\/.*$/gi, '');
		p.innerHTML = '';
		if (p && p.nodeName.toLowerCase() != 'ul') {
			c = document.createElement('ul');
			Element.addClassName(c, 'sectionlist');
			c.setAttribute('id', 'scmain');
			p.appendChild(c);
		}
		if (!p && !c) {
			return;
		}
		for (i = 0; i < o.length; i++) {
			li = document.createElement('li');
			li.setAttribute('id', 'lsc'+o[i].id);
			Element.addClassName(li, 'sectionlist');
			
			// Expand-Image
			li.appendChild(this._getSectionExpandImage(o[i].id, (o[i].sub && (o[i].sub.length>0)) ));
			
			// Folder/Icon
			if (typeof(o[i].icon) == 'undefined') {
				li.appendChild(this._getSectionFolderImage(o[i].id));
			} else {
				li.appendChild(this._getSectionIconImage(o[i].id, o[i].icon));
			}
			
			st = document.createElement('span');
			Element.addClassName(st, 'sectionlist');
			st.setAttribute('id', 'tsc'+o[i].id);
			st.appendChild(document.createTextNode(o[i].name));
			st.onclick = function(e) {
				var s = t.getSelectedSection(),tid = this.id.replace(/tsc/,'');
				if (s) {
					Element.removeClassName($('tsc'+s), 'selected');
					if ($('fsc'+s)) {
						$('fsc'+s).setAttribute('src', adminUrl+'editor/admin_editor/css/folder_close.png');
					}
				}
				t._sectionClick(tid, true);
				Element.addClassName($(this.id), 'selected');
				if ($('fsc'+s)) {
					$('fsc'+tid).setAttribute('src', adminUrl+'editor/admin_editor/css/folder_open.png');
				}
				t.loadImageList(tid);
			};
			li.appendChild(st);
			if (c) {
				c.appendChild(li);
			} else {
				p.appendChild(li);
			}
			
			if (o[i].sub && o[i].sub.length) {
				sl = document.createElement('ul');
				Element.addClassName(sl, 'sectionlist');
				sl.setAttribute('id', 'sc'+o[i].id);
				sl.style.display = 'none';
				this._drawSectionList(sl, o[i].sub);
				li.appendChild(sl);
			}
		}
	},
	_getSectionExpandImage: function(id, sub) {
		var img = document.createElement('img'), t = this;
		var adminUrl = tinymce.baseURL.replace(/editor\/.*$/gi, '');
		img.setAttribute('id', 'isc'+id);
		img.setAttribute('class', 'expand');
		img.setAttribute('alt', 'Expand');
		if (sub) {
			img.setAttribute('src', adminUrl+'editor/admin_editor/css/section_expand.gif');
		} else {
			img.setAttribute('src', adminUrl+'editor/admin_editor/css/section_none.gif');
		}
		img.onclick = function(e) {
			t._sectionClick(this.id.replace(/isc/,''));
		};
		return img;
	},
	_getSectionFolderImage: function(id) {
		var img = document.createElement('img'), t = this;
		var adminUrl = tinymce.baseURL.replace(/editor\/.*$/gi, '');
		img.setAttribute('id', 'fsc'+id);
		img.setAttribute('class', 'folder');
		img.setAttribute('alt', 'Folder');
		img.setAttribute('src', adminUrl+'editor/admin_editor/css/folder_close.png');
		img.onclick = function(e) {
			t._sectionClick(this.id.replace(/fsc/,''));
		};
		return img;
	},
	_getSectionIconImage : function(id, icon) {
		var img = document.createElement('img'), t = this;
		var adminUrl = tinymce.baseURL.replace(/editor\/.*$/gi, '');
		img.setAttribute('id', 'icosc'+id);
		img.setAttribute('class', 'sectionimage');
		img.setAttribute('alt', 'Icon');
		img.setAttribute('src', icon);
		img.onclick = function(e) {
			t._sectionClick(this.id.replace(/icosc/,''));
		};
		return img;
	},
	_sectionClick : function(id, label) {
		var el = $('sc'+id),img = $('isc'+id);
		var adminUrl = tinymce.baseURL.replace(/editor\/.*$/gi, '');
		if (!el) {
			return;
		}
		if (label || el.style.display == 'none') {
			img.setAttribute('src', adminUrl+'editor/admin_editor/css/section_collapse.gif');
			el.style.display = 'block';
		} else {
			img.setAttribute('src', adminUrl+'editor/admin_editor/css/section_expand.gif');
			el.style.display = 'none';
		}
	},
	
	nonsens:null
	// END: delight lukas
};

ImageDialog.preInit();
tinyMCEPopup.onInit.add(ImageDialog.init, ImageDialog);
