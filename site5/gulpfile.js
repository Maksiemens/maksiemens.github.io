const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const browserSync = require('browser-sync');
const reload = browserSync.reload;

//browserSync 
gulp.task('browserSync', () => {
	browserSync({
		server: {
			baseDir: './prod/'
		},
		port: 8080,
		open: true,
		notify: false
	});
});

//html
const htmlmin = require('gulp-htmlmin');
const htmlpImport = require('gulp-html-import');

gulp.task('template', () => {
	gulp.src('dev/*.html')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(htmlpImport('./dev/html/'))
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(gulp.dest('prod'))
		.pipe(reload({stream:true}));
});

//style
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('style', () => {
	gulp.src('dev/scss/style.scss')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))		
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('prod/css'))
			.pipe(reload({stream:true}));
});

//image
const imagemin = require('gulp-imagemin');

gulp.task('image', () =>
    gulp.src('dev/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('prod/images'))
);

//fonts
gulp.task('fonts', () =>
    gulp.src('dev/fonts/**/*.*')
        .pipe(gulp.dest('prod/fonts'))
);

//js
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
	gulp.src(['dev/js/clearz.js', 'dev/js/*.js'])
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))	
			.pipe(sourcemaps.init())	
			.pipe(babel({presets: ['env']}))
			.pipe(concat('script.js'))
			.pipe(uglify())	
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('prod/script'))
			.pipe(reload({stream:true}));
});

//watcher
gulp.task('watcher', () => {
	gulp.watch('dev/**/*.html', ['template']);
	gulp.watch('dev/scss/**/*.scss', ['style']);
	gulp.watch('dev/js/**/*.js', ['js']);
});

// default
gulp.task('default', ['template', 'style', 'js', 'image', 'fonts']);
gulp.task('dev', ['default', 'watcher', 'browserSync']);