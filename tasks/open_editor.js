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

  var temp = require('temp');
  var editor = require('editor');

  temp.track();

  grunt.registerMultiTask('open_editor', 'Open editor and used generated content in your grunt configuration.', function () {
    var options = this.options({
      prefix: 'grunt-open-editor',
      suffix: '.txt'
    });

    var done = this.async();

    var tempName = temp.path({
      prefix: options.prefix,
      suffix: options.suffix
    });

    editor(tempName, options, function (code, sig) {
      if (code !== 0) {
        grunt.log.error('Editor exist with code:' + code + ' sig:' + sig);
      }

      var content = fs.readFileSync(tempName, 'utf8');
      grunt.config.set('editor', content);
      temp.cleanupSync();
      done();
    });
  });
};
