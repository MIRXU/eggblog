/* eslint valid-jsdoc: "off" */
'use strict';
const Controller = require('egg').Controller;

class ImgController extends Controller {
  async index() {
	var page = await this.ctx.query.page|1;
	var search = await this.ctx.query.search;
	console.log(this.ctx.query.search)
    var list = await this.service.img.getImgList(page,search);
	
	// var list1=[]
	// for(var i=0 ; i<list.length;i++){
	// 	for(var j=0 ; j<list.[i].replaceUrl.length;j++){
	// 		list1.push(list.[i].replaceUrl[j].ObjURL)
	// 	}
	// }

    await this.ctx.render('img', { list ,search});
  }
}

module.exports = ImgController;
