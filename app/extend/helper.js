'use strict';
const moment = require('moment');
var crypto = require('crypto'); //加载加密文件

var sd = require('silly-datetime');

// exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
module.exports = {
    relativeTime(time) {
        moment(new Date(time * 1000)).fromNow();
    },
    formatTime(params){
        return sd.format(new Date(params),'YYYY-MM-DD HH:mm:ss')
    },
    md5_password(password){
        var md5 = crypto.createHash('md5');
        md5.update(password); 
        let str = md5.digest('hex'); 
        return str;
    }
  };