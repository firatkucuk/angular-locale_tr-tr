/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */
/*global angular: false */

'use strict';

angular.module('ngLocale', [], ['$provide', function ($provide) {

  $provide.value('$locale', {
    'id'              : 'tr-tr',
    'DATETIME_FORMATS': {
      'AMPMS'         : [
        'ÖÖ',
        'ÖS'
      ],
      'DAY'           : [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
      ],
      'ERAS'          : [
        'MÖ',
        'MS'
      ],
      'ERANAMES'      : [
        'Miltattan Önce',
        'Milattan Sonra'
      ],
      'FIRSTDAYOFWEEK': 1,
      'MONTH'         : [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
      ],
      'SHORTDAY'      : [
        'Paz',
        'Pzt',
        'Sal',
        'Çar',
        'Per',
        'Cum',
        'Cmt'
      ],
      'SHORTMONTH'    : [
        'Oca',
        'Şub',
        'Mar',
        'Nis',
        'May',
        'Haz',
        'Tem',
        'Ağu',
        'Eyl',
        'Ekm',
        'Kas',
        'Ara'
      ],
      'fullDate'      : 'EEEE, dd MMMM y',
      'longDate'      : 'dd MMMM y',
      'medium'        : 'dd MMM y hh:mm:ss',
      'mediumDate'    : 'dd MMM y',
      'mediumTime'    : 'hh:mm:ss',
      'short'         : 'dd/MM/yy hh:mm',
      'shortDate'     : 'dd/MM/yy',
      'shortTime'     : 'hh:mm'
    },
    'NUMBER_FORMATS'  : {
      'CURRENCY_SYM': '\u20BA',
      'DECIMAL_SEP' : ',',
      'GROUP_SEP'   : '.',
      'PATTERNS'    : [
        { // Ondalık Örüntüsü (Decimal Pattern)
          'gSize'  : 3,
          'lgSize' : 3,
          'maxFrac': 3,
          'minFrac': 0,
          'minInt' : 1,
          'negPre' : '-',
          'negSuf' : '',
          'posPre' : '',
          'posSuf' : ''
        },
        { // Para Birimi Örüntüsü (Currency Pattern)
          'gSize'  : 3,
          'lgSize' : 3,
          'maxFrac': 2,
          'minFrac': 2,
          'minInt' : 1,
          'negPre' : '-',
          'negSuf' : '\u00a0\u00a4',
          'posPre' : '',
          'posSuf' : '\u00a0\u00a4'
        }
      ]
    },
    'pluralCat'       : function (num) {

      if (num === 0) {
        return 'hiç';
      } else if (num === 1) {
        return 'bir';
      }

      return 'birçok';
    }
  });
}]);
