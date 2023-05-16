const varObj = require("./export"); // We are importing the required variables and method by using require and because it returns an object we are directly assigning that to a variable.
const exports_obj = require("./exports"); // We are importing the required variables and method by using require and because it returns an object we are directly assigning that to a variable.
require("./exportModule"); // Importing a function actually invokes all the function defined into the module

console.log("Printing in app.\n" + exports_obj.num);

exports_obj.fn(exports_obj.num);

console.log(exports_obj);

/*
Module: 
  Module is a global object and it contains:
    1. id:
    2. path: Path of the file
    3. exports: Is an object variable which is used to export items from the a file (Module)
    4. filename: Path of the file following the filename
    5. loaded: idk
    6. children: Lists the children
    7. Paths: An array of path tree

  How a module look like:
    Module {
      id: '.',
      path: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main',
      exports: {},
      filename: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main/app.js',
      loaded: false,
      children: [
        Module {
          id: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main/module.js',
          path: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main',
          exports: [Object],
          filename: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main/module.js',
          loaded: true,
          children: [],
          paths: [Array]
        },
        Module {
          id: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main/export.js',
          path: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main',
          exports: [Object],
          filename: '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main/export.js',
          loaded: true,
          children: [],
          paths: [Array]
        }
      ],
      paths: [
        '/Users/shubham/Documents/shubhampatel.co.in/nodejs/Main/node_modules',
        '/Users/shubham/Documents/shubhampatel.co.in/nodejs/node_modules',
        '/Users/shubham/Documents/shubhampatel.co.in/node_modules',
        '/Users/shubham/Documents/node_modules',
        '/Users/shubham/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    }
*/