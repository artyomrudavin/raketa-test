var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify"),
		rsync          = require('gulp-rsync');

// Пользовательские скрипты проекта

gulp.task('common-js', function() {
	return gulp.src([
		'app/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('ua.common-js', function() {
	return gulp.src([
		'app/js/ua.common.js',
		])
	.pipe(concat('ua.common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('sps.common-js', function() {
	return gulp.src([
		'app/js/sps.common.js',
		])
	.pipe(concat('sps.common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/js/modules/min/phoneMask.min.js',
		'app/libs/swipe/jquery.touchSwipe.js',
		'app/js/common.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('js-ua', ['ua.common-js'], function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/js/modules/min/phoneMask.min.js',
		'app/libs/swipe/jquery.touchSwipe.js',
		'app/js/ua.common.min.js', // Всегда в конце
		])
	.pipe(concat('ua.scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('js-sps', ['sps.common-js'], function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/js/modules/min/phoneMask.min.js',
		'app/js/sps.common.min.js', // Всегда в конце
		])
	.pipe(concat('sps.scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'js-ua', 'js-sps', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch(['libs/**/*.js', 'app/js/ua.common.js'], ['js-ua']);
	gulp.watch(['libs/**/*.js', 'app/js/sps.common.js'], ['js-sps']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin())) // Cache Images
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js', 'js-ua', 'js-sps'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		'app/robots.txt',
		'app/*.php',
		]).pipe(gulp.dest('dist'));

	var buildFilesSps = gulp.src([
		'app/sps/*.html',
		]).pipe(gulp.dest('dist/sps'));

	var buildFilesSpsYouTube = gulp.src([
		'app/sps-youtube/*.html',
		]).pipe(gulp.dest('dist/sps-youtube'));

	var buildFilesUA = gulp.src([
		'app/ua/*.html',
		]).pipe(gulp.dest('dist/ua'));

	var buildFilesPc = gulp.src([
		'app/politika-konfidencialnosti/*.html',
		]).pipe(gulp.dest('dist/politika-konfidencialnosti'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		'app/css/sps.min.css',
		'app/css/ua.min.css',
		'app/css/pc.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildJsUa = gulp.src([
		'app/js/ua.scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildJsSps = gulp.src([
		'app/js/sps.scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      '51.15.19.20',
		user:      'aquagradususer',
		password:  'JqD9F2dF9J41SoN',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/www/standart.aquagradus.com/'));
	// .pipe(conn.dest('/www/www.standart.aquagradus.com/'));

});

gulp.task('rsync', function() {
	return gulp.src('dist/**')
	.pipe(rsync({
		root: 'dist/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Скрытые файлы, которые необходимо включить в деплой
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}));
});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
