"use strict";
let gulp = require("gulp");
// let jshint = require("gulp-jshint");
// let concat = require("gulp-concat");
// let uglify = require("gulp-uglify");
let htmlmin = require("gulp-htmlmin");
// let rename = require("gulp-rename");
let webpack = require("webpack");
let gutil = require("gulp-util");

let srcDir = "fsrc/";
let publicDir = "public/";
let appDir = publicDir + "app/";
// let assetsDir = publicDir + "assets/";
// let libDir = publicDir + "assets/lib/";
// gulp.task("lint", function () {
//     return gulp.src(publicDir + "app/**/*.js")
//         .pipe(jshint())
//         .pipe(jshint.reporter("default"));
// });

gulp.task("static", function () {
    let htmlminOption = {
        collapseWhitespace: true,
        minifyCSS: true
    };
    gulp.src(srcDir + "index.html")
        .pipe(htmlmin(htmlminOption))
        .pipe(gulp.dest(publicDir));
    return gulp.src(srcDir + "**/templates/**/*.html")
        .pipe(htmlmin(htmlminOption))
        .pipe(gulp.dest(appDir));
});

gulp.task("webpack", function () {
    let webpackConfig = require("./webpack.config");
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[Webpack]", stats.toString(webpackConfig));
    });
});

gulp.task("default", ["static", "webpack"]);