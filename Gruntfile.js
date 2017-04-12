/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

module.exports = function (grunt) {
	// window = {};

	var json = {
		pkg: grunt.file.readJSON('package.json'),

		/*
		 *	 Clean folders before copying.
		 */
		clean: {
			www: ['./src/www/public'],
			tmp: ['./tmp']
		},

		copy: {
			options: {
				noProcess: ['**/*.{eot,woff2,woff,ttf,svg,dae,tga}']
			},
			fonts: {
				files: [
					{
						expand: true,
						cwd: './node_modules/open-sans-fontface/fonts',
						src: '**/*.{eot,woff2,woff,ttf,svg}',
						dest: './src/www/public/fonts',
						filter: 'isFile'
					}
				]
			},
			icons: {
				files: [
					{
						expand: true,
						cwd: './node_modules/font-awesome/fonts',
						src: '**/*.{eot,woff2,woff,ttf,svg}',
						dest: './src/www/public/fonts',
						filter: 'isFile'
					}
				]
			},
			images: {
				files: [
					{
						expand: true,
						cwd: './src/app/images',
						src: '**/*.*',
						dest: './src/www/public/images'
					}
				]
			}
		},

		/*
		 * Concatenate Javascript files
		 */
		concat: {
			js: {
				options: {
					separator: ';\n',
					stripBanners: true,
					banner: '/*! This code was created for Printr B.V. \n Copyright (c) 2017, All rights reserved, http://printr.nl */\n\n' +
						'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */\n\n\n\n',
					process: function (src, filepath) {
						return '// Source: ' + filepath + '\n' +
							src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
					}
				},
				src: [
					"./node_modules/angular/angular.min.js",
					"./node_modules/angular-new-router/dist/router.es5.min.js",
					"./node_modules/angular-animate/angular-animate.min.js",
					"./node_modules/angular-sanitize/angular-sanitize.min.js",
					"./node_modules/angular-touch/angular-touch.min.js",
					"./node_modules/angular-resource/angular-resource.min.js",
					"./node_modules/socket.io-client/dist/socket.io.js",
					"./node_modules/moment/moment.js",
					"./node_modules/moment-duration-format/lib/moment-duration-format.js",
					"./node_modules/lodash/lodash.min.js",
					"./node_modules/angular-filter/dist/angular-filter.min.js",
					"./node_modules/ng-file-upload/dist/ng-file-upload.min.js",
					"./node_modules/angular-socket-io/socket.min.js",
					"./node_modules/ng-dialog/js/ngDialog.min.js",
					"./node_modules/angular-ui-select3/src/select3.js",
					"./node_modules/angular-paginate-anything/dist/paginate-anything-tpls.js",
					"./node_modules/angular-ui-select/dist/select.min.js",
					"./node_modules/ng-sortable/dist/ng-sortable.min.js",
					"./node_modules/chart.js/dist/Chart.min.js",
					"./node_modules/angular-chart.js/dist/angular-chart.min.js",
					
					"./src/app/js/modules/AngularModule.js",
					"./src/app/js/modules/VendorModule.js",
					"./src/app/js/modules/FiltersModule.js",
					"./src/app/js/modules/TemplateCacheModule.js",
					"./src/app/js/modules/ServicesModule.js",
					"./src/app/js/modules/SharedModule.js",
					"./src/app/js/modules/ComponentsModule.js",
					"./src/app/js/modules/CoreModule.js",
					"./src/app/js/modules/Modules.js",
					"./src/app/js/config/helpers.js",
					"./src/app/js/config/environment.js",
					"./src/app/js/config/auth.js",
					"./src/app/js/config/path.js",
					"./src/app/js/config/include.js",
					"./src/app/js/config/debug.js",
					"./src/app/js/filters/**/*.js",
					"./src/app/js/services/**/*.js",
					"./src/app/js/core/**/*.js",
					"./src/app/js/shared/**/*.js",
					"./src/app/js/components/**/*.js",
					"./src/app/js/app.js"
				],
				dest: './tmp/application.js'
			},
			scss: {
				src: [
					'./src/app/sass/settings/_defaults.scss',
					
					"./node_modules/angular-ui-select/dist/select.min.css",
					"./node_modules/animate.css/animate.min.css",
					"./node_modules/open-sans-fontface/scss/_*.scss",
					"./node_modules/font-awesome/scss/_variables.scss",
					"./node_modules/font-awesome/scss/_mixins.scss",
					"./node_modules/font-awesome/scss/_path.scss",
					"./node_modules/font-awesome/scss/_core.scss",
					"./node_modules/font-awesome/scss/_larger.scss",
					"./node_modules/font-awesome/scss/_animated.scss",
					"./node_modules/font-awesome/scss/_rotated-flipped.scss",
					"./node_modules/font-awesome/scss/_icons.scss",
					"./node_modules/angular-ui-select/dist/select.min.css",
					"./node_modules/ng-sortable/dist/ng-sortable.min.css",
					
					"./node_modules/suitcss-base/node_modules/normalize.css/normalize.css",
					"./node_modules/suitcss-base/lib/base.css",
					"./node_modules/suitcss-utils/node_modules/suitcss-utils-display/lib/display.css",
					"./node_modules/suitcss-utils/node_modules/suitcss-utils-layout/lib/layout.css",
					"./node_modules/suitcss-utils/node_modules/suitcss-utils-position/lib/position.css",
					"./node_modules/suitcss-utils/node_modules/suitcss-utils-text/lib/text.css",
					
					"./src/app/sass/formide/formide-tools/*.scss",
					"./src/app/sass/formide/formide-base/*.scss",
					"./src/app/sass/formide/formide-alert/*.scss",
					"./src/app/sass/formide/formide-anchors/*.scss",
					"./src/app/sass/formide/formide-block/*.scss",
					"./src/app/sass/formide/formide-content/*.scss",
					"./src/app/sass/formide/formide-forms/*.scss",
					"./src/app/sass/formide/formide-icons/*.scss",
					"./src/app/sass/formide/formide-loading/*.scss",
					"./src/app/sass/formide/formide-logo/*.scss",
					"./src/app/sass/formide/formide-lozenges/*.scss",
					"./src/app/sass/formide/formide-modal/*.scss",
					"./src/app/sass/formide/formide-rules/*.scss",
					"./src/app/sass/formide/formide-select/*.scss",
					"./src/app/sass/formide/formide-table/*.scss",
					"./src/app/sass/formide/formide-text/*.scss",
					"./src/app/sass/formide/formide-list/*.scss",
					"./src/app/sass/formide/formide-tooltip/*.scss",
					"./src/app/sass/formide/formide-spacing/*.scss",
					"./src/app/sass/formide/formide-button/*.scss",
					"./src/app/sass/formide/formide-typography/*.scss",
					"./src/app/sass/formide/formide-layout/*.scss",
					
					"./src/app/js/filters/**/*.scss",
					"./src/app/js/services/**/*.scss",
					"./src/app/js/core/**/*.scss",
					"./src/app/js/shared/**/*.scss",
					"./src/app/js/components/**/*.scss"
				],
				dest: './tmp/application.scss'
			},
			html: {
				src: './tmp/templateCache/**/*.js',
				dest: './tmp/templateCache.js'
			},
			jsdist: {
				src: [
					'./tmp/application.js',
					'./tmp/templateCache.js'
				],
				dest: './src/www/public/javascripts/application.js'
			}
		},

		uglify: {
			js: {
				options: {
					mangle: false,
					compress: false,
					preserveComments: false,
					quoteStyle: 0
				},
				files: {
					'./src/www/public/javascripts/application.min.js': './src/www/public/javascripts/application.js'
				}
			}
		},

		/*
		 * Initialise SASS
		 */
		sass: {
			options: {
				outputStyle: 'expanded',
				sourceComments: true
			},
			dist: {
				files: {
					'./src/www/public/stylesheets/application.css': './tmp/application.scss'
				}
			}
		},

		cssmin: {
			options: {
				sourceMap: true,
				keepSpecialComments: 1,
				roundingPrecision: -1
			},
			target: {
				files: [{
					expand: true,
					cwd: './src/www/public/stylesheets',
					src: ['*.css', '!*.min.css'],
					dest: './src/www/public/stylesheets',
					ext: '.min.css'
				}]
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions'],
				map: {
					inline: false
				}
			},
			dist: {
				src: './src/www/public/stylesheets/application.css' // globbing is also possible here
			}
		},

		ngtemplates: {
			options: {
				htmlmin: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeComments: true, // Only if you don't use comment directives!
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				},
				bootstrap: function (module, script) {
					return '(function () { angular.module(\'' + module +
						'\', []).run([\'$templateCache\', function($templateCache) {\'use strict\';' +
						script + '}]); })();';
				}
			},
			shared: {
				options: {
					module: 'templateCache.shared'
				},
				cwd: './src/app/js/shared/',
				src: '**/*.html',
				dest: './tmp/templateCache/templateCacheShared.js'
			},
			components: {
				options: {
					module: 'templateCache.components'
				},
				cwd: './src/app/js/components/',
				src: '**/*.html',
				dest: './tmp/templateCache/templateCacheComponents.js'
			},
			core: {
				options: {
					module: 'templateCache.core'
				},
				cwd: './src/app/js/core/',
				src: '**/*.html',
				dest: './tmp/templateCache/templateCacheCore.js'
			}
		},

		/*
		 * Watch for changes in directories
		 */
		watch: {
			javascripts: {
				files: './src/app/js/**/*.js',
				tasks: ['build:js']
			},
			html: {
				files: './src/app/js/**/*.html',
				tasks: ['build:html', 'build:js']
			},
			sass: {
				files: [
					'./src/app/sass/**/*.scss',
					'./src/app/js/**/*.scss'
				],
				tasks: ['build:sass']
			}
		}
	};

	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	grunt.initConfig();
	grunt.config.merge(json);

	/*
	 * Load NPM Plugins
	 */
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-angular-templates');

	/*
	 * Register Tasks
	 */
	
	// partial tasks
	grunt.registerTask('build:fonts', ['copy:fonts', 'copy:icons']);
	grunt.registerTask('build:images', ['copy:images']);
	grunt.registerTask('build:js', ['concat:js', 'concat:jsdist']);
	grunt.registerTask('build:html', ['ngtemplates', 'concat:html']);
	grunt.registerTask('build:sass', ['concat:scss', 'sass', 'autoprefixer', 'cssmin']);

	// dist builds
	grunt.registerTask('default', ['clean:www', 'build:fonts', 'build:images', 'build:html', 'build:js', 'build:sass', 'uglify:js']);
};
