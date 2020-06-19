'use strict';

module.exports= function(grunt){

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

	grunt.initConfig({
		sass:{
			dist:{
				files:{
					'F:/sublime files/front end ui/scss/css/styles/style.css'	'F:/sublime files/front end ui/scss/sass/styles/style.scss'
				}
			}
		}

	});
	grunt.registerTask('css',['sass']);
};