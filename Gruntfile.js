// Обязательная обёртка
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      main: {
        src: [
          'js/*.js'  // Все JS-файлы в папке
        ],
        dest: 'js/production.js'
      }
    },
    uglify: {
      main: {
        files: {
          'js/production.min.js': '<%= concat.main.dest %>'
        }
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Задача по умолчанию
  grunt.registerTask('default', ['concat','uglify']);
  //grunt.registerTask('debug', ['uglify']);

};