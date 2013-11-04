/*
 * grunt-confidence
 * http://asilluron.github.io/grunt-confidence
 *
 * Copyright (c) 2013 Andrew Gonzalez-Silluron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var Confidence = require('confidence');

  var store = new Confidence.Store();

  grunt.registerMultiTask('confidence', 'Compile confidence configuration files', function () {
    var options = this.options({
      criteria: {}
    });

    var output = {};

    var criteria = options.criteria;

    this.files.forEach(function (f) {
      f.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var configDocument = grunt.file.readJSON(filepath),
          err = Confidence.Store.validate(configDocument);

        if (err == null) {
          store.load(configDocument);
          output = store.get("/", criteria);
        } else {
          grunt.log.warn('Could not validate document as a valid confidence document');
        }


      });

      var compiledConfig = JSON.stringify(output);

      grunt.file.write(f.dest, compiledConfig);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};