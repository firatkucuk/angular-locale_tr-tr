/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */

'use strict';


// #####################################################################################################################

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // -------------------------------------------

    // Project settings
    'dist': 'dist',

    // -------------------------------------------

    // Empties folders to start fresh
    'clean': {
      'dist': {
        'files': [{
          'dot': true,
          'src': [
            '<%= dist %>/{,*/}*',
            '!<%= dist %>/.git{,*/}*'
          ]
        }]
      }
    },

    // -------------------------------------------

    // Minifies the js file
    'uglify': {
      'dist': {
        'files': [{
          '<%= dist %>/angular-locale_tr-tr.min.js': ['angular-locale_tr-tr.js']
        }]
      }
    }
  });


  // -------------------------------------------------------------------------------------------------------------------

  grunt.registerTask('build', [
    'clean:dist',
    'uglify'
  ]);


  // -------------------------------------------------------------------------------------------------------------------

  grunt.registerTask('default', [
    'build'
  ]);
};
