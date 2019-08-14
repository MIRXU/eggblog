'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async add(info) {
    const result = await this.app.mysql.insert('category',info);  
    if(result.affectedRows === 1){
        return {msg:'添加成功！',success:1};
    }else{
        return {msg:'添加失败！',success:0};
    }
  }
  async findadmin(){
    const result = await this.app.mysql.select('user');  
    
    return result;
  }
  async delete(id){
    
    let result=await this.app.mysql.delete('user',{id:id}); 
    console.log(result)
    if(result.affectedRows === 1){
      return {msg:'删除成功！',success:1};
    }else{
        return {msg:'删除失败！',success:0};
    }
    }
    async stop(id){
      let result=await this.app.mysql.get('user',{id:id}); 
      if(result.isstop==0){
        result.isstop=1;
      }else{
        result.isstop=0;
      }
      let result1=await this.app.mysql.update('user',result); 
      if(result1.affectedRows === 1){
        return {msg:'禁用成功！',success:1};
      }else{
          return {msg:'禁用失败！',success:0};
      }
    }
}

module.exports = AdminService;
