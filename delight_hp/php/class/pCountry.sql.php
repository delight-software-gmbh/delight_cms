<?php
/** $id$
 * SQL with all currently known countries
 * 
 * @version 1.0 - 2008-04-04
 * @author Lukas Zurschmiede <l.zurschmiede@delightsoftware.com>
 * @copyright 2008 (c) by delight software gmbh
 * @package delightWebProduct
 */


$sql = "INSERT INTO [table.country] ([field.country.short2], [field.country.short3], [field.country.currency], [field.country.symbol], [field.country.prefix], [field.country.name], [field.country.id])
VALUES
('AF', 'AFG', 'Afghani', 'AFA', '+93', 'Afghanistan', 1),
('AL', 'ALB', 'Lek', 'ALL', '+355', 'Albania', 2),
('DZ', 'DZA', 'Algerischer Dinar', 'DZD', '+213', 'Algeria', 3),
('AS', 'ASM', 'US Dollar', 'USD', '+685', 'American Samoa', 4),
('AD', 'AND', 'Franz�sischer Franc', 'FRF', '+376', 'Andorra', 5),
('AO', 'AGO', 'Kwanza', 'AOA', '+244', 'Angola', 6),
('AI', 'AIA', 'Ostkarib. Dollar', 'XCD', '+1264', 'Anguilla', 7),
('AQ', 'ATA', '', '', '+6721', 'Antarctica', 8),
('AG', 'ATG', 'Ostkarib. Dollar', 'XCD', '+1268', 'Antigua and Barbuda', 9),
('AR', 'ARG', 'Argentinischer Peso', 'ARS', '+54', 'Argentina', 10),
('AM', 'ARM', 'Dram', 'AMD', '+374', 'Armenia', 11),
('AW', 'ABW', 'Aruba Florin', 'AWG', '+2978', 'Aruba', 12),
('AU', 'AUS', 'Australische Dollar', 'AUD', '+61', 'Australia', 13),
('A', 'AUT', 'Euro', 'EUR', '+43', '�sterreich', 14),
('AZ', 'AZE', 'Aserbeidschan Manat', 'AZM', '+994', 'Azerbaijan', 15),
('BS', 'BHS', 'Bahama Dollar', 'BSD', '+1242', 'Bahamas', 16),
('BH', 'BHR', 'Bahrain Dinar', 'BHD', '+973', 'Bahrain', 17),
('BD', 'BGD', 'Taka', 'BDT', '+880', 'Bangladesh', 18),
('BB', 'BRB', 'Barbados Dollar', 'BBD', '+1246', 'Barbados', 19),
('BY', 'BLR', 'Belarus Rubel alt', 'BYB', '+375', 'Belarus', 20),
('BE', 'BEL', 'Euro', 'EUR', '+32', 'Belgium', 21),
('BZ', 'BLZ', 'Belize Dollar', 'BZD', '+501', 'Belize', 22),
('BJ', 'BEN', 'CFA Franc (West)', 'XOF', '+229', 'Benin', 23),
('BM', 'BMU', 'Bermuda Dollar', 'BMD', '+1441', 'Bermuda', 24),
('BT', 'BTN', 'Indische Rupie', 'INR', '+975', 'Bhutan', 25),
('BO', 'BOL', 'Boliviano', 'BOB', '+591', 'Bolivia', 26),
('BA', 'BIH', 'konvertierbare Mark', 'BAM', '+387', 'Bosnia and Herzegowina', 27),
('BW', 'BWA', 'Pula', 'BWP', '+267', 'Botswana', 28),
('BV', 'BVT', 'Norwegische Krone', 'NOK', '', 'Bouvet Island', 29),
('BR', 'BRA', 'Brasilien Real', 'BRL', '+55', 'Brazil', 30),
('IO', 'IOT', 'Mauritius Rupie', 'MUR', '', 'British Indian Ocean Territory', 31),
('BN', 'BRN', 'Brunei Dollar', 'BND', '+673', 'Brunei Darussalam', 32),
('BG', 'BGR', 'Bulgarian Lev', 'BGN', '+359', 'Bulgaria', 33),
('BF', 'BFA', 'CFA Franc (West)', 'XOF', '+226', 'Burkina Faso', 34),
('BI', 'BDI', 'Burundi Franc', 'BIF', '+257', 'Burundi', 35),
('KH', 'KHM', 'Riel', 'KHR', '+855', 'Cambodia', 36),
('CM', 'CMR', 'CFA Franc �quarorial', 'XAF', '+237', 'Cameroon', 37),
('CA', 'CAN', 'Canadische Dollar', 'CAD', '+1', 'Canada', 38),
('CV', 'CPV', 'Kap Verde Escudo', 'CVE', '+238', 'Cape Verde', 39),
('KY', 'CYM', 'Kaiman Dollar', 'KYD', '+1345', 'Cayman Islands', 40),
('CF', 'CAF', 'CFA Franc �quatorial', 'XAF', '+236', 'Central African Republic', 41),
('TD', 'TCD', 'CFA Franc �quatorial', 'XAF', '', 'Chad', 42),
('CL', 'CHL', 'Chilenischer Peso', 'CLP', '+56', 'Chile', 43),
('CN', 'CHN', 'China Yuan Renminbi', 'CNY', '+86', 'China', 44),
('CX', 'CXR', 'Australischer Dollar', 'AUD', '+61', 'Christmas Island', 45),
('CC', 'CCK', 'Australischer Dollar', 'AUD', '+61', 'Cocos (Keeling) Islands', 46),
('CO', 'COL', 'Kolumbianischer Peso', 'COP', '+91', 'Colombia', 47),
('KM', 'COM', 'Komoren Franc', 'KMF', '', 'Comoros', 48),
('CG', 'COG', 'CFA Franc �quatorial', 'XAF', '+243', 'Congo', 49),
('CD', 'COD', 'Franc congolais', 'CDF', '+242', 'Congo, The democratic republic of the', 50),
('CK', 'COK', 'Neuseeland Dollar', 'NZD', '+682', 'Cook Islands', 51),
('CR', 'CRI', 'Costa Rica Colon', 'CRC', '+506', 'Costa Rica', 52),
('CI', 'CIV', 'CFA Franc (West)', 'XOF', '+225', 'Cote D''Ivoire', 53),
('HR', 'HRV', 'Kroatien Kuna', 'HRK', '+385', 'Croatia', 54),
('CU', 'CUB', 'Kubanischer Peso', 'CUP', '+53', 'Cuba', 55),
('CY', 'CYP', 'Zypern-Pfund', 'CYP', '+357', 'Cyprus', 56),
('CZ', 'CZE', 'Tschech. Krone', 'CZK', '+420', 'Czech Republic', 57),
('DK', 'DNK', 'D�nische Krone', 'DKK', '+45', 'Denmark', 58),
('DJ', 'DJI', 'Dschibuti Franc', 'DIF', '+253', 'Djibouti', 59),
('DM', 'DMA', 'Ostkarib. Dollar', 'XCD', '+1767', 'Dominica', 60),
('DO', 'DOM', 'Dominikanischer Peso', 'DOP', '+1809', 'Dominican Republic', 61),
('TP', 'TMP', 'Timor Escudo', 'TPE', '', 'East Timor', 62),
('EC', 'ECU', 'Sucre', 'ECS', '+593', 'Ecuador', 63),
('EG', 'EGY', '�gyptisches Pfund', 'EGP', '+20', 'Egypt', 64),
('SV', 'SLV', 'El Salvador Colon', 'SVC', '+503', 'El Salvador', 65),
('GQ', 'GNQ', 'CFA Franc �quatorial', 'XAF', '+240', 'Equatorial Guinea', 66),
('ER', 'ERI', 'Nakfa', 'ERN', '+291', 'Eritrea', 67),
('EE', 'EST', 'Estnische Krone', 'EEK', '+34', 'Estonia', 68),
('ET', 'ETH', 'Birr', 'ETB', '+251', 'Ethiopia', 69),
('FK', 'FLK', 'Falkland Pfund', 'FKP', '+500', 'Falkland Islands', 70),
('FO', 'FRO', 'D�nische Krone', 'DKK', '+298', 'Faroe Islands', 71),
('FJ', 'FJI', 'Fidschi Dollar', 'FJD', '+679', 'Fiji', 72),
('FI', 'FIN', 'Euro', 'EUR', '+358', 'Finland', 73),
('FR', 'FRA', 'Euro', 'EUR', '+33', 'France', 74),
('FX', 'FXX', 'Franz�isscher Franc', 'FRF', '+33', 'France, Metropolitan', 75),
('GF', 'GUF', 'Franz�sischer Franc', 'FRF', '+594', 'French Guiana', 76),
('PF', 'PYF', 'CFP Franc', 'XPF', '+689', 'French Pollynesia', 77),
('TF', 'ATF', 'Franz�sischer Franc', 'FRF', '', 'French Southern Territories', 78),
('GA', 'GAB', 'CFA Franc �quatorial', 'XAF', '+241', 'Gabon', 79),
('GM', 'GMB', 'Dalasi', 'GMD', '+220', 'Gambia', 80),
('GE', 'GEO', 'Georgischer Lari', 'GEL', '+995', 'Georgia', 81),
('D', 'DEU', 'Euro', 'EUR', '+49', 'Deutschland', 82),
('GH', 'GHA', 'Cedi', 'GHC', '+233', 'Ghana', 83),
('GI', 'GIB', 'Gibraltar Pfund', 'GIP', '+350', 'Gibraltar', 84),
('GR', 'GRC', 'Euro', 'EUR', '+30', 'Greece', 85),
('GL', 'GRL', 'D�nische Krone', 'DKK', '+299', 'Greenland', 86),
('GD', 'GRD', 'Ostkarib. Dollar', 'XCD', '+1473', 'Grenada', 87),
('GP', 'GLP', 'Franz�sischer Franc', 'FRF', '+590', 'Guadeloupe', 88),
('GU', 'GUM', 'Guemsey Pfund', 'GUP', '+671', 'Guam', 89),
('GT', 'GTM', 'Quetzal', 'GTQ', '+502', 'Guatemala', 90),
('GN', 'GIN', 'Guinea Franc', 'GNF', '+224', 'Guinea', 91),
('GW', 'GNB', 'CFA Franc (West)', 'XOF', '+245', 'Guinea-Bissau', 92),
('GY', 'GUY', 'Guyana Dollar', 'GYD', '+592', 'Guyana', 93),
('HT', 'HTI', 'Gourde / US Dollar', 'HTG', '+509', 'Haiti', 94),
('HM', 'HMD', 'Australischer Dollar', 'AUD', '', 'Heard and Mc Donald Islands', 95),
('VA', 'VAT', 'Italienische Lira', 'ITL', '+39', 'Holy See', 96),
('HN', 'HND', 'Lempira', 'HNL', '+504', 'Honduras', 97),
('HK', 'HKG', 'Honkong Dollar', 'HKD', '+852', 'Hong Kong', 98),
('HU', 'HUN', 'Ungarische Forint', 'HUF', '+36', 'Hungary', 99),
('IS', 'ISL', 'Isl�n. Krone', 'ISK', '+354', 'Iceland', 100),
('IN', 'IND', 'Indische Rupie', 'INR', '+91', 'India', 101),
('ID', 'IDN', 'Indones. Rupiah', 'IDR', '+62', 'Indonesia', 102),
('IR', 'IRN', 'Rial', 'IRR', '+98', 'Iran', 103),
('IQ', 'IRQ', 'Irak Dinar', 'IQD', '+964', 'Iraq', 104),
('IE', 'IRL', 'Euro', 'EUR', '+353', 'Ireland', 105),
('IL', 'ISR', 'Israel Neuer Shekel', 'ILS', '+972', 'Israel', 106),
('I', 'ITA', 'Euro', 'EUR', '+39', 'Italy', 107),
('JM', 'JAM', 'Jamaika Dollar', 'JMD', '+1876', 'Jamaica', 108),
('JP', 'JPN', 'Japanischer Jen', 'JPY', '+81', 'Japan', 109),
('JO', 'JOR', 'Jordan Dinar', 'JOD', '+962', 'Jordan', 110),
('KZ', 'KAZ', 'Tenge', 'KZT', '+7', 'Kazakhstan', 111),
('KE', 'KEN', 'Kenia Schilling', 'KES', '+254', 'Kenya', 112),
('KI', 'KIR', 'Australischer Dollar', 'AUD', '+686', 'Kiribati', 113),
('KP', 'PRK', 'Nordkoreanischer Won', 'KPW', '+850', 'Korea, Democratic Peoples Republic of', 114),
('KR', 'KOR', 'S�dkoreanischer Wom', 'KRW', '+242', 'Korea, Republic of', 115),
('KW', 'KWT', 'Kuwait Dinar', 'KWD', '+965', 'Kuwait', 116),
('KG', 'KGZ', 'Som', 'KGS', '+996', 'Kyrgyzstan', 117),
('LA', 'LAO', 'Kip', 'LAK', '', 'Lao Peoples democratic republic', 118),
('LV', 'LVA', 'Lettischer Lats', 'LVL', '', 'Latvia', 119),
('LB', 'LBN', 'Libanesisches Pfund', 'LBP', '+961', 'Lebanon', 120),
('LS', 'LSO', 'Loti', 'LSL', '+266', 'Lesotho', 121),
('LR', 'LBR', 'Liberianischer Dolla', 'LRD', '+961', 'Liberia', 122),
('LY', 'LBY', 'libyscher Dinar', 'LYD', '+218', 'Libyan Arab Jamahiriya', 123),
('LI', 'LIE', 'Schweizer Franken', 'CHF', '+42', 'Liechtenstein', 124),
('LT', 'LTU', 'Litauischer Litas', 'LTL', '+370', 'Lithuania', 125),
('LU', 'LUX', 'Euro', 'EUR', '+352', 'Luxembourg', 126),
('MO', 'MAC', 'Macau Pataca', 'MOP', '+853', 'Macau', 127),
('MK', 'MKD', 'Denar', 'MKD', '+389', 'Macedonia', 128),
('MG', 'MDG', 'Madagaskar Franc', 'MGF', '+261', 'Madagascar', 129),
('MW', 'MWI', 'Malawi Kwacha', 'MWK', '+265', 'Malawi', 130),
('MY', 'MYS', 'Malayische Ringgit', 'MYR', '+60', 'Malaysia', 131),
('MV', 'MDV', 'Rufiyaa', 'MVR', '+960', 'Maldives', 132),
('ML', 'MLI', 'CFA Franc (West)', 'XOF', '+223', 'Mali', 133),
('MT', 'MLT', 'Maltesische Lira', 'MTL', '+356', 'Malta', 134),
('MH', 'MHL', 'US Dollar', 'USD', '', 'Marshall Islands', 135),
('MQ', 'MTQ', 'Franz�sischer Franc', 'FRF', '+596', 'Martinique', 136),
('MR', 'MRT', 'Ouguiya', 'MRO', '+222', 'Mauritania', 137),
('MU', 'MUS', 'Mauritius Rupie', 'MUR', '+230', 'Mauritius', 138),
('YT', 'MYT', 'Franc�sischer Franc', 'FRF', '+269', 'Mayotte', 139),
('MX', 'MEX', 'Mexikanischer Peso', 'MXN', '+52', 'Mexico', 140),
('FM', 'FSM', 'US Dollar', 'USD', '', 'Micronesia, Federated states of', 141),
('MD', 'MDA', 'Moldau Leu', 'MDL', '+373', 'Moldova, Republic of', 142),
('MC', 'MCO', 'Franz�sischer Franc', 'FRF', '+377', 'Monaco', 143),
('MN', 'MNG', 'Tugrik', 'MNT', '+976', 'Mongolia', 144),
('MS', 'MSR', 'Ostkarib. Dollar', 'XCD', '+1664', 'Montserrat', 145),
('MA', 'MAR', 'Marokkan Dirham', 'MAD', '+212', 'Morocco', 146),
('MZ', 'MOZ', 'Metical', 'MZM', '+258', 'Mozambique', 147),
('MM', 'MMR', 'Kyat', 'MMK', '+95', 'Myanmar', 148),
('NA', 'NAM', 'Namibia Dollar', 'NAD', '+264', 'Namibia', 149),
('NR', 'NRU', 'Australischer Dollar', 'AUD', '+674', 'Nauru', 150),
('NP', 'NPL', 'Nepalesische Rupie', 'NPR', '+977', 'Nepal', 151),
('NL', 'NLD', 'Euro', 'EUR', '+31', 'Netherlands', 152),
('AN', 'ANT', 'Niederl. Antillen Gu', 'ANG', '+599', 'Netherlands Antilles', 153),
('NC', 'NCL', 'CFP Franc', 'XPF', '+687', 'New Caledonia', 154),
('NZ', 'NZL', 'Neuseeland Dollar', 'NZD', '+64', 'New Zealand', 155),
('NI', 'NIC', 'Gold Cordoba', 'NIO', '+505', 'Nicaragua', 156),
('NE', 'NER', 'CFA Franc (West)', 'XOF', '+227', 'Niger', 157),
('NG', 'NGA', 'Naira', 'NGN', '+234', 'Nigeria', 158),
('NU', 'NIU', 'Neuseeland Dollar', 'NZD', '+683', 'Niue', 159),
('NF', 'NFK', 'Australischer Dollar', 'AUD', '+6723', 'Norfolk Island', 160),
('MP', 'MNP', 'US Dollar', 'USD', '+1670', 'Northern Mariana Islands', 161),
('NO', 'NOR', 'Norwegische Krone', 'NOK', '+47', 'Norway', 162),
('OM', 'OMN', 'Rial Omani', 'OMR', '+968', 'Oman', 163),
('PK', 'PAK', 'Pakistan. Rupie', 'PKR', '+92', 'Pakistan', 164),
('PW', 'PLW', 'US Dollar', 'USD', '', 'Palau', 165),
('PA', 'PAN', 'Balboa', 'PAB', '+507', 'Panama', 166),
('PG', 'PNG', 'Kina', 'PGK', '+675', 'Papua New Guinea', 167),
('PY', 'PRY', 'Guarani', 'PYG', '+595', 'Paraguay', 168),
('PE', 'PER', 'Neuer Sol', 'PEN', '+51', 'Peru', 169),
('PH', 'PHL', 'Philippinischer Peso', 'PHP', '+63', 'Philippines', 170),
('PN', 'PCN', 'Neuseeland Dollar', 'NZD', '', 'Pitcairn Inseln', 171),
('PL', 'POL', 'Polnische Zloty Neu', 'PLN', '+48', 'Poland', 172),
('PT', 'PRT', 'Euro', 'EUR', '+351', 'Portugal', 173),
('PR', 'PRI', 'US Dollar', 'USD', '+1787', 'Puerto Rico', 174),
('QA', 'QAT', 'Katar Riyal', 'QAR', '', 'Qatar', 175),
('RE', 'REU', 'Franc�sische Franc', 'FRF', '+262', 'Reunion', 176),
('RO', 'ROM', 'Rum�nische Leu', 'ROL', '+40', 'Romania', 177),
('RU', 'RUS', 'Russischer Rubel Neu', 'RUB', '+7', 'Russian Federation', 178),
('RW', 'RWA', 'Ruanda Franc', 'RWF', '+250', 'Rwanda', 179),
('KN', 'KNA', 'Ostkarib. Dollar', 'XCD', '+1869', 'Saint Kitts and Nevis', 180),
('LC', 'LCA', 'Ostkarib. Dollar', 'XCD', '+1758', 'Saint Lucia', 181),
('VC', 'VCT', 'Ostkarib. Dollar', 'XCD', '', 'Saint Vincent and the Grenadines', 182),
('WS', 'WSM', 'Tala', 'WST', '+685', 'Samoa', 183),
('SM', 'SMR', 'Italienische Lira', 'ITL', '+378', 'San Marino', 184),
('ST', 'STP', 'Dobra', 'STD', '+239', 'Sao Tome and Principe', 185),
('SA', 'SAU', 'Saudi Riyal', 'SAR', '+966', 'Saudi Arabia', 186),
('SN', 'SEN', 'CFA Franc (West)', 'XOF', '+221', 'Senegal', 187),
('SC', 'SYC', 'Seychellen Rupie', 'SCR', '+248', 'Seychelles', 188),
('SL', 'SLE', 'Leone', 'SLL', '+232', 'Sierra Leone', 189),
('SG', 'SGP', 'Sinagpur Dollar', 'SGD', '+65', 'Singapore', 190),
('SK', 'SVK', 'Slowakische Krone', 'SKK', '+421', 'Slovakia', 191),
('SI', 'SVN', 'Slowenien Tolar', 'SIT', '+386', 'Slovenia', 192),
('SB', 'SLB', 'Salomonen Dollar', 'SBD', '', 'Solomon Islands', 193),
('SO', 'SOM', 'Somalia Schilling', 'SOS', '+252', 'Somalia', 194),
('ZA', 'ZAF', 'S�dafrikan. Rand', 'ZAR', '+27', 'South Africa', 195),
('GS', 'SGS', '', '', '', 'South Georgia and the South Sandwich Islands', 196),
('ES', 'ESP', 'Euro', 'EUR', '+34', 'Spain', 197),
('LK', 'LKA', 'Sri Lanka Rupie', 'LKR', '+94', 'Sri Lanka', 198),
('SH', 'SHN', 'St. Helena Pfund', 'SHP', '+290', 'St. Helena', 199),
('PM', 'SPM', 'Franz�schische Franc', 'FRF', '+508', 'St. Pierre and Miquelon', 200),
('SD', 'SDN', 'Sudanesischer Dinar', 'SDD', '+249', 'Sudan', 201),
('SR', 'SUR', 'Suriname Gulden', 'SRG', '+597', 'Suriname', 202),
('SJ', 'SJM', 'Norwegische Krone', 'NOK', '', 'Svalbard and Jan Mayen Islands', 203),
('SZ', 'SWZ', 'Lilangeni', 'SZL', '+268', 'Swaziland', 204),
('SE', 'SWE', 'Schwedische Krone', 'SEK', '+46', 'Sweden', 205),
('CH', 'CHE', 'Schweizer Franken', 'CHF', '+41', 'Schweiz', 206),
('SY', 'SYR', 'Syrisches Pfund', 'SYP', '+963', 'Syrian Arab Republic', 207),
('TW', 'TWN', 'Neuer Taiwan Dollar', 'TWD', '+886', 'Taiwan', 208),
('TJ', 'TJK', 'Tadschikistan Rubel', 'TJR', '+992', 'Tajkistan', 209),
('TZ', 'TZA', 'Tansania Schilling', 'TZS', '+255', 'Tanzania, United Republic of', 210),
('TH', 'THA', 'Thailand Baht', 'THB', '+66', 'Thailand', 211),
('TG', 'TGO', 'CFA Franc (West)', 'XOF', '+228', 'Togo', 212),
('TK', 'TKL', 'Neuseeland Dollar', 'NZD', '', 'Tokelau', 213),
('TO', 'TON', 'Pa''anga', 'TOP', '+676', 'Tonga', 214),
('TT', 'TTO', 'Trindad u. Tobago $', 'TTD', '+1868', 'Trinidad and Tobago', 215),
('TN', 'TUN', 'Tunesischer Dinar', 'TND', '+216', 'Tunisia', 216),
('TR', 'TUR', 'T�rkische Lira', 'TRL', '+90', 'Turkey', 217),
('TM', 'TKM', 'Turkmenistan Manat', 'TMM', '+993', 'Turkmenistan', 218),
('TC', 'TCA', 'US Dollar', 'USD', '+1649', 'Turks and Caicos Islands', 219),
('TV', 'TUV', 'Australischer Dollar', 'AUD', '', 'Tuvalu', 220),
('UG', 'UGA', 'Uganda Schilling', 'UGX', '+256', 'Uganda', 221),
('UA', 'UKR', 'Hryvnia', 'UAH', '+380', 'Ukraine', 222),
('AE', 'ARE', 'V.A.E. Dirham', 'AED', '+971', 'United Arab Emirates', 223),
('GB', 'GBR', 'Pfund Sterling', 'GBP', '', 'United Kingdom', 224),
('US', 'USA', 'US Dollar', 'USD', '', 'United States', 225),
('UM', 'UMI', 'US Dollar', 'USD', '', 'United States Minor Outlying Islands', 226),
('UY', 'URY', 'Uruguayischer Peso', 'UYU', '+598', 'Uruguay', 227),
('UZ', 'UZB', 'Usbekistan Sum', 'UZS', '+998', 'Uzbekistan', 228),
('VU', 'VUT', 'Vatu', 'VUV', '+678', 'Vanuatu', 229),
('VE', 'VEN', 'Venezuela Bolivar', 'VEB', '+58', 'Venezuela', 230),
('VN', 'VNM', 'Dong', 'VND', '+84', 'Vietnam', 231),
('VG', 'VGB', 'US Dollar', 'USD', '', 'Virgin Islands (British)', 232),
('VI', 'VIR', 'US Dollar', 'USD', '', 'Virgin Islands (U.S.)', 233),
('WF', 'WLF', 'CFP Franc', 'XPF', '+681', 'Wallis and Futuna Islands', 234),
('EH', 'ESH', 'Marokanischer Dirham', 'MAD', '', 'Western Sahara', 235),
('YE', 'YEM', 'Jemen Rial', 'YER', '+967', 'Yemen', 236),
('YU', 'YUG', 'Neuer Dianr', 'YUM', '+381', 'Yugoslavia', 237),
('ZM', 'ZMB', 'Kwacha', 'ZMK', '+260', 'Zambia', 238),
('ZW', 'ZWE', 'Simbabwe Dollar', 'ZWD', '+263', 'Zimbabwe', 239);";
?>