/* eslint valid-jsdoc: "off" */
'use strict';
const Controller = require('egg').Controller;

class bookController extends Controller {
 async booklist() {
	   var name=await this.ctx.query.name;
    var list = await this.service.book.getBooList(name);
    await this.ctx.render('booklist', { list});
	// this.ctx.body={
	// 	list
	// }
  }	
  async index() {
	   var url=await this.ctx.query.url;
	   if(!url){
		   url="http://www.zshu.net/zshu/article-7828-c/"
	   }else{
		   url=url.substring(0,url.length-1)+"-c/"
	   }

    var list = await this.service.book.getBookTitleList(url);
    await this.ctx.render('book', { list});
  }
  
  async bookDetail(){
	  var contentUrl=await this.ctx.query.content;
	  var content=await this.service.book.getBookDetail(contentUrl)
	  // await this.ctx.render('bookDetail', { content});
	  this.ctx.body={
		  content
	  }
  }
   async bookDetail1(){
  	  var contentUrl=await this.ctx.query.content;
  	  await this.ctx.render('bookDetail',{contentUrl});
  	  // this.ctx.body={
  		 //  content
  	  // }
  }
}

module.exports = bookController;
