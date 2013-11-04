# grunt-confidence

> Compile confidence configuration files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-confidence --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-confidence');
```

## The "confidence" task

### Overview
In your project's Gruntfile, add a section named `confidence` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  confidence: {
    options: {
      criteria: {
        //Criteria to be used for compiling the final config
      }
    },
    files: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.criteria
Type: `Object`
Default value: `{}`

A criteria object used to compile the confidence config documents


### Usage Examples

#### Default Options

If master_config.json contains the following: 
```js
{
  "key1": {
    "$filter": "env",
    "production": {
      "$value": true
    },
    "$default": false
  }
}
```

running grunt-confidence with the following


```js
grunt.initConfig({
  confidence: {
    options: {
      criteria: { env: 'production' }
    },
    files: {
      'dest/production_config.json': 'src/master_config.json',
    },
  },
})
```
will produce

```js
{key1: true}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_v0.0.1_
