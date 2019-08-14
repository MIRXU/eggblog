'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
    async add(info,url) {
        info.img=url;
        const result = await this.app.mysql.insert('bloginfo',info);  
        if(result.affectedRows === 1){
            return {msg:'添加成功！',success:1};
        }else{
            return {msg:'添加失败！',success:0};
        }
    }
    async detail(id){
        const result = await this.app.mysql.get('bloginfo',{id:id});
        const category = await this.app.mysql.get('category',{id:result.category_id});  
        result.category=category
     
        return result;
    }
    async find(page) {
        // { 
        //     limit: 10,
        //     offset: page, 
        //   }
        let data=[]
        let result = await this.app.mysql.select('bloginfo');  
        for (let item in result) {
            let category =await  this.app.mysql.get('category',{id:result[item].category_id});  
            result[item].category=category
            data.push(result[item])
        }
       
        // console.log(result)
        return data;
    }
    async readnum(id){
        const result = await this.app.mysql.get('bloginfo',{id:id});
        result.readnum++;
        await this.app.mysql.update('bloginfo',result);  
    }
    async update() {
        
    }
    async delete(id) {
        const result = await this.app.mysql.delete('bloginfo', {id:id});
          if(result.affectedRows === 1){
            return {msg:'删除成功！',success:1};
        }else{
            return {msg:'删除失败！',success:0};
        }
          
    }
    async findcategory(){
        const result = await this.app.mysql.select('category');  
     
        return result;
    }
    async insertComment(comment){
        const result = await this.app.mysql.insert('comment',comment);  
        if(result.affectedRows === 1){
            return {msg:'添加成功！',success:1};
        }else{
            return {msg:'添加失败！',success:0};
        }
    }
    async findComment(id){
        const result = await this.app.mysql.select('comment', {
            where:{blog_id:id}, 
          });  
      
        return result;
    }
    async findcollection(blog_id){
       
        const result = await this.app.mysql.get('collection',{blog_id:blog_id});
       
    
        return  result;
    }
    async collection(id,user_id){

        let result1=await this.app.mysql.insert('collection',{blog_id:id,user_id:user_id}); 
      
        if(result1.affectedRows === 1){
            return {msg:'收藏成功！',success:1};
        }else{
            return {msg:'收藏失败！',success:0};
        }
    }
    async cancelcollection(id){
        const collection = await this.app.mysql.get('collection',{blog_id:id});
        let result1=await this.app.mysql.delete('collection',{id:collection.id});  
        if(result1.affectedRows === 1){
            return {msg:'取消成功！',success:1};
        }else{
            return {msg:'取消失败！',success:0};
        }
    }
    async collectionlist(id){
        let data=[]
        const result = await this.app.mysql.select('collection', {user_id:id});
        for(var  i=0;i<result.length;i++){
            const result1 = await this.app.mysql.get('bloginfo',{id:result[i].blog_id});  
            
            data.push(result1)
        }
       
        return data;
    }
}

module.exports = BlogService;
