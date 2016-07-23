// Обязательная обёртка
module.exports = function(grunt) {


  grunt.initConfig({
  	pkg: grunt.file.readJSON("package.json"),

    autoprefixer: {
        prefixMe: {
            options: {
                browsers: ["last 6 version", "> 1%", "ie 8"]
            },
            files: {
                'css/style.css': ['css/style.css'],   
            }
        }
    },

    sass: {
      	dist: {
      		options: {                     
			    style: 'expanded'
		    },
		    
        	files: {
          	'css/style.css' : 'sass/style.scss'
        	}
      	}
    },

    concat: {
      	main: {
	        src: ['js/*.js'],
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
    },

    copy: {
            /*lib: {
                expand: true,
                cwd: 'src/lib/',
                src: '**',
                dest: 'public/lib/'
            },*/
            img: {
                expand: true,
                cwd: 'img/',
                src: '**',
                dest: 'public/img/'
            }
    },

    watch: {
	    sass: {
    	    files: ['sass/*.scss'],
        	tasks: ['sass', 'autoprefixer', 'cssmin'],
     	}
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Задача по умолчанию
  //grunt.registerTask('default', ['watch']);
  //grunt.registerTask('debug', ['uglify']);

  // Задача по умолчанию
  grunt.registerTask('default', ['autoprefixer', 'sass', 'cssmin', 'copy:img', 'watch']);
  // Просто сборка без watch
  grunt.registerTask('nowatch', ['autoprefixer', 'sass', 'concat', 'uglify', 'cssmin', 'copy:img']);

};