/*
 * grunt-open-editor
 * https://github.com/mlegenhausen/grunt-open-editor
 *
 * Copyright (c) 2015 Malte Legenhausen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var fs = require('fs');
  var path = require('path');

  var editor = require('editor');
  var temp = require('temp');

  temp.track();

  grunt.registerMultiTask('open_editor', 'Open editor and use generated content in your grunt configuration.', function () {
    var options = this.options({
      prefix: 'grunt-open-editor',
      suffix: '.txt',
      configVariable: 'editor',
      keepPrevious: false,
      keepPreviousFilename: null
    });

    var done = this.async();

    var fileName = options.keepPrevious
      ? createKeepName(options)
      : createTempName(options);

    editor(fileName, options, function (code, sig) {
      if (code !== 0) {
        grunt.log.error('Editor exist with code:' + code + ' sig:' + sig);
      }

      var content = fs.readFileSync(fileName, 'utf8');
      grunt.config.set(options.configVariable, content);
      if (!options.keepPrevious) {
        temp.cleanupSync();
      }
      done();
    });

    
  });

  function createTempName(options) {
    return temp.path({
      prefix: options.prefix,
      suffix: options.suffix
    });
  }

  function createKeepName(options) {
    return options.keepPreviousFilename || path.join('.tmp', options.prefix + options.suffix);
  }
};
