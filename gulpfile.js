const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');


//var themeLocation = './public/wp-content/themes/NorthSidePrinting';
var themeLocation = './dev';

// .scss > .css
gulp.task('sass', ()=>
    gulp.src(themeLocation + '/assets/css/sass/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(themeLocation +'/assets/css'))
);

gulp.task('watch', ()=> {
	
	  browserSync.init({
	    "proxy": 'localhost/hitech/html/dev',
		"live":true
	  });		

	
	
    gulp.watch([
        themeLocation +'/*.html',
    ], gulp.series(['html']));
	
    gulp.watch([
        themeLocation +'/assets/css/sass/*.scss',
        themeLocation +'/assets/css/sass/**/*.scss',
    ], gulp.series(['sass','inject',]));

			
    gulp.watch([
        themeLocation +'/assets/js/scripts/**/*.js',
    ], gulp.series(['scriptsRefresh']));
			
    gulp.watch([
        themeLocation +'/assets/css/vendor/*.css',
    ], gulp.series(['styleConcat']));

	
});


gulp.task('inject', ()=>{

	return gulp.src(themeLocation +'/assets/css/styles.css')
	.pipe(browserSync.stream());


});



gulp.task('html', (callback)=>{
	
	browserSync.reload();
	callback();

});

gulp.task('scripts', (callback)=>{

	webpack(require('./webpack.config.js'), function(){
		console.log('webpack completed');
		callback();
	});

});

gulp.task('scriptsRefresh', gulp.series('scripts',function(callback){
	browserSync.reload();
	callback();
}));


gulp.task('default', gulp.series('sass', 'watch'));


// Manual 
// Vendors scripts
gulp.task('scriptConcat', function() {
    return gulp.src(themeLocation + '/assets/js/vendors/*.js')
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest(themeLocation + '/assets/js/'));
});

// Vendor styles
gulp.task('styleConcat', function() {
    return gulp.src(themeLocation + '/assets/css/vendors/*.css')
		.pipe(sourcemaps.init())
        .pipe(concat('vendors.css'))
		.pipe(sourcemaps.write())
        .pipe(gulp.dest(themeLocation + '/assets/css/'));
});
