'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    await this.ctx.render("register");
    // const result=await this.service.home.insertUser();
    // this.ctx.body={
    //  data:result?"添加成功":"添加失败"
    // }
    // this.ctx.body = {
    //   name: 'basil',
    //   age: 29,
    //   sub: 'Debugger listening on ws://127.0.0.1:9229/f8258ca6-d5ac-467d-bbb1-03f59bcce85b'
    // }
  }
  async findUser(){
    const result=await this.service.home.findUser();
    this.ctx.body={
      result
     }
  }
  async home() {
    const result=await this.service.home.findUser();
    this.ctx.body={
      result
     }
  }
  async update() {
    const result=await this.service.home.updateUser();
    this.ctx.body={
      data:result?"添加成功":"添加失败"
     }
  }
  async delete() {
    const result=await this.service.home.deleteUser();
    this.ctx.body={
      data:result?"添加成功":"添加失败"
     }
  }
}

module.exports = HomeController;
