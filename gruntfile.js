var grunt = require("grunt"); // npm install --save-dev load-grunt-tasks
require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  "babel": {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        "build/assets/js/app.js": "_src/jsx/app.jsx"
      }
    }
  },
  "concat": {
    jsx: {
      src: ['_src/jsx/_*.jsx'],
      dest: '_src/jsx/app.jsx'
    }
  },
  "watch": {
    jsx: {
      files: ['_src/jsx/_*.jsx'],
      tasks: ['jsx'],
      options: {
        spawn: false,
      }
    }
  }
});

grunt.registerTask("default", ["jsx","watch"]);
grunt.registerTask("jsx", ["concat","babel"]);
