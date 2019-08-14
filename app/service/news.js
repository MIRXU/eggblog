'use strict';
const Service = require('egg').Service;
// import { Service } from 'egg';
class NewsService extends Service {
  async getNewsList(page) {

    var url = this.config.baseUrl + '/appapi.php?a=getPortalList&catid=20&page='+page;

    var response = await this.ctx.curl(url);

    var ctxData = JSON.parse(response.data);

    console.log(ctxData)

    return ctxData.result;

  }

  async  getNewsContent(aid) {

    var url = this.config.baseUrl + '/appapi.php?a=getPortalArticle&aid=' + aid;
	let m=[
		{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"},
		{"User-Agent":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1"},
		{"User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0"},
		{"User-Agent":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"},
		{"User-Agent":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"}
	]
    var response = await this.ctx.curl(url,m[Math.round(Math.random()*4)]);

    var ctxData = JSON.parse(response.data);

    console.log('getNewsContent ', ctxData)

    return ctxData.result;
  }
}

module.exports = NewsService;
