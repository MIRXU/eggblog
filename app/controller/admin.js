'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async bloglist() {
      
    let info=await this.service.blog.blog.find(JSON.parse(this.ctx.cookies.get("user",{
        encrypt:true
    })))
    await this.ctx.render("/admin/bolglist",{
        info
    });
  }

  async categorylist(){
    let category =await this.service.blog.blog.findcategory()
    await this.ctx.render("/admin/categorylist",{
      category
  });
  }
  async categoryadd() {
    let info=this.ctx.request.body;
    let result=await this.service.blog.admin.add(info)
    this.ctx.body={
    result
    }
  }
  async adminmanager(){
    let info=await this.service.blog.admin.findadmin()
    await this.ctx.render("/admin/admin",{
      info
  });
  }
  async delete(){
   let id= this.ctx.request.body.id;
   let result=await this.service.blog.admin.delete(id)
   this.ctx.body={
     result
   }
  }
  async stop(){
    let id= this.ctx.request.body.id;
    let result=await this.service.blog.admin.stop(id)
    this.ctx.body={
      result
    }
  }
}

module.exports = AdminController;
