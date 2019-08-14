'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const dayjs = require('dayjs');

class BlogController extends Controller {
    async blog_view(){
        let category =await this.service.blog.blog.findcategory()
            await  this.ctx.render('blog',{
                category,
                user:JSON.parse(this.ctx.cookies.get("user",{
                    encrypt:true
                })).id
            })
      
    }
    async blog_list(){
            let page=this.ctx.query.page;
            let info=await this.service.blog.blog.find(page)
        
            if(info){
                await  this.ctx.render('bloglist',{
                    info,
                    user:this.ctx.cookies.get("user",{encrypt:true})?JSON.parse(this.ctx.cookies.get("user",{encrypt:true})):""
                })
            }else{
                await this.ctx.redirect("/blog/blog_view")
            } 
    }
    async detail(){
      
        let id=  this.ctx.query.id
        await this.service.blog.blog.readnum(id)
        let info=await this.service.blog.blog.detail(id)
        let collection=await this.service.blog.blog.findcollection(id)

        let comment=await this.service.blog.blog.findComment(info.id)
        await  this.ctx.render('blogdetail',{
            info,
            comment,
            collection
        })
    }
    async add() {
        const stream = await this.ctx.getFileStream();
        let uplaodBasePath=this.config.uplaodBasePath;
      // 生成文件名
        const filename = `${Date.now()}${Number.parseInt(
            Math.random() * 1000,
        )}${path.extname(stream.filename).toLocaleLowerCase()}`;
        // 生成文件夹
        const dirname = dayjs(Date.now()).format('YYYY/MM/DD');
        function mkdirsSync(dirname) {
            if (fs.existsSync(dirname)) {
            return true;
            } else {
            if (mkdirsSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                return true;
            }
            }
        }
        mkdirsSync(path.join(uplaodBasePath, dirname));
        // 生成写入路径
        const target = path.join(uplaodBasePath, dirname, filename);
        // 写入流
        const writeStream = fs.createWriteStream(target);
        try {
            //异步把文件流 写入
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            //如果出现错误，关闭管道
      await sendToWormhole(stream);
      this.error();
  }
        let url= path.join('/public/upload', dirname, filename);

        let result= await this.service.blog.blog.add(stream.fields,url)
            this.ctx.body={
                 result
            }
     
    }

    async readnum(){
        let id=  this.ctx.query.id
        await this.service.blog.blog.readnum(id)
    }
  async find() {
    let info=await this.service.blog.blog.find()
    this.ctx.body={
        info
    }
 }
    async update() {
        await this.service.blog.blog.update()
    }
    async delete() {
        let id=  this.ctx.request.body.id
       let result= await this.service.blog.blog.delete(id)
        
       this.ctx.body={
        result
    }
    }
    async comment(){
        let comment=  this.ctx.request.body
   
        let result=await this.service.blog.blog.insertComment(comment)
        this.ctx.body={
            result
        }
    }
    async collection(){
        let id=  this.ctx.query.id;
        let result=await this.service.blog.blog.collection(id,JSON.parse(this.ctx.cookies.get("user",{
            encrypt:true
        })).id);
        this.ctx.body={
            result
        }
    }
    async cancelcollection(){
        let id=  this.ctx.query.id;
        let result=await this.service.blog.blog.cancelcollection(id);
        this.ctx.body={
            result
        }
    }
    async blog_collectionlist(){
        let info=await this.service.blog.blog.collectionlist(JSON.parse(this.ctx.cookies.get("user",{
            encrypt:true
        })).id);
     
        await  this.ctx.render('blog_collectionlist',{
            info
        })
    }
}

module.exports = BlogController;
