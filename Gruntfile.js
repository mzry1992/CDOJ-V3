/**
 * Created by mzry1992 on 9/7/14.
 */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      files: ["polymer-element/*/*.less", "style/*.less"],
      tasks: ["compile"]
    },
    less: {
      all: {
        files: {
          "style/cdoj.css":
            "style/cdoj.less",
          "polymer-element/cdoj-card/cdoj-card.css":
            "polymer-element/cdoj-card/cdoj-card.less",
          "polymer-element/cdoj-skeleton/cdoj-skeleton.css":
            "polymer-element/cdoj-skeleton/cdoj-skeleton.less"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("compile", ["less:all"]);
  grunt.registerTask("default", ["compile"]);
  grunt.registerTask("build", ["compile"]);
};