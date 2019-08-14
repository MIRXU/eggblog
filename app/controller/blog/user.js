'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        await this.ctx.render("register");
  }
  async register() {
    let user= this.ctx.request.body; 
    const result=await  this.service.blog.user.register(user)
    
    this.ctx.body={
        result,
        // csrf:this.ctx.csrf 
    }
  }
  async login() {
    let user= this.ctx.request.body;
    const result= await this.service.blog.user.login(user)

    if(result){
        this.ctx.cookies.set('user',JSON.stringify(result.results),{
            httpOnly:true,
            signed:true,
            encrypt:true
        })
    }
    this.ctx.body={
        result
    }
    }
    async login_view(){

        await this.ctx.render("login");
    }
    async logout() {
        this.ctx.cookies.set("user",'');
        await this.ctx.render("login");
    }
}

module.exports = UserController;
