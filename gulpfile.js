var del = require("del");
var gulp = require("gulp");
var packager = require("electron-packager");

gulp.task("release", function() {
  del(["release/**"], function() {
    del(["release"], function() {
      console.log("Finished Cleaning.");
    });
  });

  var opts = {
    "arch": "all",
    "dir": "./",
    "platform": "all",
    "app-bundle-id": "xyz.miinc.yaawdesktop",
    "app-version": "1.0",
    "asar": true,
    "build-version": "1",
    "name": "YAAW-Desktop",
    "prune": true,
    "version": "0.36.8",
    "out": "./release",
    "overwrite": true
  };

  packager(opts, function done(err) {
    if (err) console.log(err);
  });
});
