const gulp = require('gulp');
const ftp = require('gulp-fez-sftp');

// 是上传地址配置，可以在.gitignore中忽略此文件上传，为了安全本地拥有就可以了
const gulpConfig = require('./gulp-config.js');

/**
 * 编译代码，自动部署到服务器
 */
gulp.task('upload', function (callback) {
    console.log('## 正在部署到服务器上')
    gulp.src('.' + gulpConfig.publicPath + '**')
        .pipe(ftp(Object.assign(gulpConfig.devDist, {
            callback
        })))
});
