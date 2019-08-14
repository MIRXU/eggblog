'use strict';
const Service = require('egg').Service;
// import { Service } from 'egg';
class ImgService extends Service {
  async getImgList(page,search) {

    var url = this.config.baseImgUrl+'?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord='+search+'&cl='+page+'&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word='+search+'&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&cg=girl&pn='+page+'&rn=1000&gsm=3c&1565240436151=';                                             
	let m=[
		{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"},
		{"User-Agent":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1"},
		{"User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0"},
		{"User-Agent":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"},
		{"User-Agent":"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"}
	]
    var response = await this.ctx.curl(url,m[Math.round(Math.random()*4)]);
		
    var ctxData = JSON.parse(response.data.toString());

    return ctxData.data;

  }
}

module.exports = ImgService;
