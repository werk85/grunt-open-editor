# grunt-open-editor

> Open editor and use generated content in your grunt configuration.

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-open-editor --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-open-editor');
```

## The "open_editor" task

### Overview
In your project's Gruntfile, add a section named `open_editor` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  open_editor: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.prefix
Type: `String`
Default value: `'grunt-open-editor'`

Temporary file prefix.

#### options.suffix
Type: `String`
Default value: `'.txt'`

Temporary file suffix.

#### options.configVariable
Type: `String`
Default value: 'editor'

The variable inside the grunt configuration that should be used.

#### options.keepPrevious
Type: `Boolean`
Default value: `false`

If the previous editor content should be keeped when running the task again.

#### options.keepPreviousFileName
Type: `String`
Default value: `'.tmp/grunt-open-editor.txt'`

If `keepPrevious` is set to `true` this is the filepath that is used for storing the content. The default value is concatinated by using the `prefix` and `suffix` values in the configuration.

### Usage

Run the task and use the `<%= editor %>` (or the value defined in `options.configVariable`) grunt template variable some where in your configuration.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
