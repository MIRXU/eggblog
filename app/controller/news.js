/* eslint valid-jsdoc: "off" */
'use strict';
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
	var page = await this.ctx.query.page|1;
    var list = await this.service.news.getNewsList(page);
    await this.ctx.render('news', { list });
  }

  async content() {
    var aid = await this.ctx.query.aid;

    var list = await this.service.news.getNewsContent(aid);

    await this.ctx.render('newsContent', { data: list[0] });
  }
}

module.exports = NewsController;
