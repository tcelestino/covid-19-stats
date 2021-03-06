const countries = [
  { id: 0, name: 'Albania', value: 'AL' },
  { id: 1, name: 'Afghanistan', value: 'AF' },
  { id: 2, name: 'Algeria', value: 'DZ' },
  { id: 3, name: 'Angola', value: 'AO' },
  { id: 4, name: 'Argentina', value: 'AR' },
  { id: 5, name: 'Armenia', value: 'AM' },
  { id: 6, name: 'Australia', value: 'AU' },
  { id: 7, name: 'Austria', value: 'AT' },
  { id: 8, name: 'Azerbaijan', value: 'AZ' },
  { id: 9, name: 'Bahamas', value: 'BS' },
  { id: 10, name: 'Bangladesh', value: 'BD' },
  { id: 11, name: 'Belarus', value: 'BY' },
  { id: 12, name: 'Belgium', value: 'BE' },
  { id: 13, name: 'Belize', value: 'BZ' },
  { id: 14, name: 'Benin', value: 'BJ' },
  { id: 15, name: 'Bhutan', value: 'BT' },
  { id: 16, name: 'Bolivia', value: 'BO' },
  { id: 17, name: 'Bosnia and Herzegovina', value: 'BA' },
  { id: 18, name: 'Botswana', value: 'BW' },
  { id: 19, name: 'Brazil', value: 'BR' },
  { id: 20, name: 'Brunei Darussalam', value: 'BN' },
  { id: 21, name: 'Bulgaria', value: 'BG' },
  { id: 22, name: 'Burkina Faso', value: 'BF' },
  { id: 23, name: 'Burundi', value: 'BI' },
  { id: 24, name: 'Cambodia', value: 'KH' },
  { id: 25, name: 'Cameroon', value: 'CM' },
  { id: 26, name: 'Canada', value: 'CA' },
  { id: 27, name: 'Ivory Coast ', value: 'CI' },
  { id: 28, name: 'Central African Republic ', value: 'CF' },
  { id: 29, name: 'Chad ', value: 'TD' },
  { id: 30, name: 'Chile ', value: 'CL' },
  { id: 31, name: 'China ', value: 'CN' },
  { id: 32, name: 'Colombia ', value: 'CO' },
  { id: 33, name: 'Congo ', value: 'CG' },
  { id: 34, name: 'Democratic Republic of Congo', value: 'CD' },
  { id: 35, name: 'Costa Rica ', value: 'CR' },
  { id: 36, name: 'Croatia ', value: 'HR' },
  { id: 37, name: 'Cuba ', value: 'CU' },
  { id: 38, name: 'Cyprus ', value: 'CY' },
  { id: 39, name: 'Czechia ', value: 'CZ' },
  { id: 40, name: 'Denmark ', value: 'DK' },
  { id: 41, name: 'Diamond Princess ', value: 'DP' },
  { id: 42, name: 'Djibouti ', value: 'DJ' },
  { id: 43, name: 'Dominican Republic ', value: 'DO' },
  { id: 44, name: 'DR Congo ', value: 'CD' },
  { id: 45, name: 'Ecuador ', value: 'EC' },
  { id: 46, name: 'Egypt ', value: 'EG' },
  { id: 47, name: 'El Salvador ', value: 'SV' },
  { id: 48, name: 'Equatorial Guinea', value: 'GQ' },
  { id: 49, name: 'Eritrea', value: 'ER' },
  { id: 50, name: 'Estonia', value: 'EE' },
  { id: 51, name: 'Ethiopia', value: 'ET' },
  { id: 52, name: 'Falkland Islands', value: 'FK' },
  { id: 53, name: 'Fiji', value: 'FJ' },
  { id: 54, name: 'Finland', value: 'FI' },
  { id: 55, name: 'France', value: 'FR' },
  { id: 56, name: 'French Guiana', value: 'GF' },
  { id: 57, name: 'French Southern Territories', value: 'TF' },
  { id: 58, name: 'Gabon', value: 'GA' },
  { id: 59, name: 'Gambia', value: 'GM' },
  { id: 60, name: 'Georgia', value: 'GE' },
  { id: 61, name: 'Germany', value: 'DE' },
  { id: 62, name: 'Ghana', value: 'GH' },
  { id: 63, name: 'Greece', value: 'GR' },
  { id: 64, name: 'Greenland', value: 'GL' },
  { id: 65, name: 'Guatemala', value: 'GT' },
  { id: 66, name: 'Guinea', value: 'GN' },
  { id: 67, name: 'Guinea-Bissau', value: 'GW' },
  { id: 68, name: 'Guyana', value: 'GY' },
  { id: 69, name: 'Haiti', value: 'HT' },
  { id: 70, name: 'Honduras', value: 'HN' },
  { id: 71, name: 'Hong Kong', value: 'HK' },
  { id: 72, name: 'Hungary', value: 'HU' },
  { id: 73, name: 'Iceland', value: 'IS' },
  { id: 74, name: 'India', value: 'IN' },
  { id: 75, name: 'Indonesia', value: 'ID' },
  { id: 76, name: 'Iran', value: 'IR' },
  { id: 77, name: 'Iraq', value: 'IQ' },
  { id: 78, name: 'Ireland', value: 'IE' },
  { id: 79, name: 'Israel', value: 'IL' },
  { id: 80, name: 'Italy', value: 'IT' },
  { id: 81, name: 'Jamaica', value: 'JM' },
  { id: 82, name: 'Japan', value: 'JP' },
  { id: 83, name: 'Jordan', value: 'JO' },
  { id: 84, name: 'Kazakhstan', value: 'KZ' },
  { id: 85, name: 'Kenya', value: 'KE' },
  { id: 86, name: 'Korea', value: 'KP' },
  { id: 87, name: 'Kosovo', value: 'XK' },
  { id: 88, name: 'Kuwait', value: 'KW' },
  { id: 89, name: 'Kyrgyzstan', value: 'KG' },
  { id: 90, name: 'Lao', value: 'LA' },
  { id: 91, name: 'Latvia', value: 'LV' },
  { id: 92, name: 'Lebanon', value: 'LB' },
  { id: 93, name: 'Lesotho', value: 'LS' },
  { id: 94, name: 'Liberia', value: 'LR' },
  { id: 95, name: 'Libya', value: 'LY' },
  { id: 96, name: 'Lithuania', value: 'LT' },
  { id: 97, name: 'Luxembourg', value: 'LU' },
  { id: 98, name: 'Macedonia', value: 'MK' },
  { id: 99, name: 'Madagascar', value: 'MG' },
  { id: 100, name: 'Malawi', value: 'MW' },
  { id: 101, name: 'Malaysia', value: 'MY' },
  { id: 102, name: 'Mali', value: 'ML' },
  { id: 103, name: 'Mauritania', value: 'MR' },
  { id: 104, name: 'Mexico', value: 'MX' },
  { id: 105, name: 'Moldova', value: 'MD' },
  { id: 106, name: 'Mongolia', value: 'MN' },
  { id: 107, name: 'Montenegro', value: 'ME' },
  { id: 108, name: 'Morocco', value: 'MA' },
  { id: 109, name: 'Mozambique', value: 'MZ' },
  { id: 110, name: 'Myanmar', value: 'MM' },
  { id: 111, name: 'Namibia', value: 'NA' },
  { id: 112, name: 'Nepal', value: 'NP' },
  { id: 113, name: 'Netherlands', value: 'NL' },
  { id: 114, name: 'New Caledonia', value: 'NC' },
  { id: 115, name: 'New Zealand', value: 'NZ' },
  { id: 116, name: 'Nicaragua', value: 'NI' },
  { id: 117, name: 'Niger', value: 'NE' },
  { id: 118, name: 'Nigeria', value: 'NG' },
  { id: 119, name: 'North Korea', value: 'KP' },
  { id: 120, name: 'Norway', value: 'NO' },
  { id: 121, name: 'Oman', value: 'OM' },
  { id: 122, name: 'Pakistan', value: 'PK' },
  { id: 123, name: 'Palestine', value: 'PS' },
  { id: 124, name: 'Panama', value: 'PA' },
  { id: 125, name: 'Papua New Guinea', value: 'PG' },
  { id: 126, name: 'Paraguay', value: 'PY' },
  { id: 127, name: 'Peru', value: 'PE' },
  { id: 128, name: 'Philippines', value: 'PH' },
  { id: 129, name: 'Poland', value: 'PL' },
  { id: 130, name: 'Portugal', value: 'PT' },
  { id: 131, name: 'Puerto Rico', value: 'PR' },
  { id: 132, name: 'Qatar', value: 'QA' },
  { id: 133, name: 'Republic of Kosovo', value: 'XK' },
  { id: 134, name: 'Romania', value: 'RO' },
  { id: 135, name: 'Russia', value: 'RU' },
  { id: 136, name: 'Rwanda', value: 'RW' },
  { id: 137, name: 'Saudi Arabia', value: 'SA' },
  { id: 138, name: 'Senegal', value: 'SN' },
  { id: 139, name: 'Serbia', value: 'RS' },
  { id: 140, name: 'Sierra Leone', value: 'SL' },
  { id: 141, name: 'Singapore', value: 'SG' },
  { id: 142, name: 'Slovakia', value: 'SK' },
  { id: 143, name: 'Slovenia', value: 'SI' },
  { id: 144, name: 'Solomon Islands', value: 'SB' },
  { id: 145, name: 'Somalia', value: 'SO' },
  { id: 146, name: 'South Africa', value: 'ZA' },
  { id: 147, name: 'South Korea', value: 'KR' },
  { id: 148, name: 'South Sudan', value: 'SS' },
  { id: 149, name: 'Spain', value: 'ES' },
  { id: 150, name: 'Sri Lanka', value: 'LK' },
  { id: 151, name: 'Sudan', value: 'SD' },
  { id: 152, name: 'Suriname', value: 'SR' },
  { id: 153, name: 'Svalbard and Jan Mayen', value: 'SJ' },
  { id: 154, name: 'Swaziland', value: 'SZ' },
  { id: 155, name: 'Sweden', value: 'SE' },
  { id: 156, name: 'Switzerland', value: 'CH' },
  { id: 157, name: 'Syrian Arab Republic', value: 'SY' },
  { id: 158, name: 'Taiwan', value: 'TW' },
  { id: 159, name: 'Tajikistan', value: 'TJ' },
  { id: 160, name: 'Tanzania', value: 'TZ' },
  { id: 161, name: 'Thailand', value: 'TH' },
  { id: 162, name: 'Timor-Leste', value: 'TL' },
  { id: 163, name: 'Togo', value: 'TG' },
  { id: 164, name: 'Trinidad and Tobago', value: 'TT' },
  { id: 165, name: 'Tunisia', value: 'TN' },
  { id: 166, name: 'Turkey', value: 'TR' },
  { id: 167, name: 'Turkmenistan', value: 'TM' },
  { id: 168, name: 'UAE', value: 'AE' },
  { id: 169, name: 'Uganda', value: 'UG' },
  { id: 170, name: 'United Kingdom', value: 'GB' },
  { id: 171, name: 'Ukraine', value: 'UA' },
  { id: 172, name: 'USA', value: 'US' },
  { id: 173, name: 'Uruguay', value: 'UY' },
  { id: 174, name: 'Uzbekistan', value: 'UZ' },
  { id: 175, name: 'Vanuatu', value: 'VU' },
  { id: 176, name: 'Venezuela', value: 'VE' },
  { id: 177, name: 'Vietnam', value: 'VN' },
  { id: 178, name: 'Western Sahara', value: 'EH' },
  { id: 179, name: 'Yemen', value: 'YE' },
  { id: 180, name: 'Zambia', value: 'ZM' },
  { id: 181, name: 'Zimbabwe', value: 'ZW' },
];

export { countries as default };
