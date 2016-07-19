// Обязательная обёртка
module.exports = function(grunt) {


  grunt.initConfig({

    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'cssmin'],
      }
    },

    sass: {
      dist: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },

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
    },
    cssmin: {
      my_target: {
        files: [{
          expand:true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Задача по умолчанию
  grunt.registerTask('default', ['watch']);
  //grunt.registerTask('debug', ['uglify']);

};