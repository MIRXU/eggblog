

'use strict';
const Service = require('egg').Service;
const cheerio = require('cheerio')
// import { Service } from 'egg';
class bookService extends Service {
	async getBooList(url){
		  let m=[
			{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"},
			{"User-Agent":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1"},
			{"User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0"},
			{"User-Agent":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"},
			{"User-Agent":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"}
		]
		var response = await this.ctx.curl(url,m[Math.round(Math.random()*4)]);
		let booklist=[]
		var ctxData = response.data;
		const $=cheerio.load(ctxData)
		let list=$(".ls_box>ul").find("li");
		for(var i=0;i<list.length;i++){
			if($(list[i]).find(".sp_01>a").text()){
				booklist.push({lab:$(list[i]).find(".sp_01>a").attr("href"),title:$(list[i]).find(".sp_01>a").text()})
			}
		}
		return booklist;
	}
  async getBookTitleList(url) {
    // var url = url|this.config.bookUrl 
	let m=[
		{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"},
		{"User-Agent":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1"},
		{"User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0"},
		{"User-Agent":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"},
		{"User-Agent":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"}
	]
    var response = await this.ctx.curl(url,m[Math.round(Math.random()*4)]);
		
    var ctxData = response.data.toString();
	let categoryData=[]
	const $=cheerio.load(ctxData)
	let category=$(".top_nav_cata>ul").find("li")
	for(var i=0;i<category.length;i++){
		categoryData.push({lab:$(category[i]).find("a").attr("href"),title:$(category[i]).find("a").text()})
	}

	var name=$(".mu_h1").text()
	var txt=$("ul.mulu_list").find("li")
	let bookData={}
	let bookDataList=[]
	bookData.name=name
	for(var i=0;i<txt.length;i++){
		bookDataList.push({lab:$(txt[i]).find("a").attr("href"),title:$(txt[i]).find("a").text()})
	}
	bookData.list=bookDataList
	bookData.category=categoryData
	
    return bookData;

  }
  async getBookDetail(url){
	  let m=[
	  	{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"},
	  	{"User-Agent":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1"},
	  	{"User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0"},
	  	{"User-Agent":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"},
	  	{"User-Agent":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"}
	  ]
	  var response = await this.ctx.curl(url,m[Math.round(Math.random()*4)]);
	  var ctxData = response.data;
	  const $=cheerio.load(ctxData)
	  let detail={}
	  
	  detail.title=$(".ydleft>h2").text()
	  detail.content= $(".yd_text2").html()

	  
	  return detail;
  }
}

module.exports = bookService;
