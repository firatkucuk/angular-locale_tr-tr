/*jslint indent: 2, maxerr: 50, maxlen: 120, node: true, nomen: true, plusplus: true, vars: true */

'use strict';


// #####################################################################################################################

module.exports = function (grunt) {

  // Define the configuration for all the tasks
  grunt.initConfig({

    // -------------------------------------------

    // Minifies the js file
    'uglify': {
      'dist': {
        'files': [{
          'angular-locale_tr-tr.min.js': ['angular-locale_tr-tr.js']
        }]
      }
    }
  });


  // -------------------------------------------------------------------------------------------------------------------

  grunt.loadNpmTasks('grunt-contrib-uglify');


  // -------------------------------------------------------------------------------------------------------------------

  grunt.registerTask('build', [
    'uglify'
  ]);


  // -------------------------------------------------------------------------------------------------------------------

  grunt.registerTask('default', [
    'build'
  ]);
};
