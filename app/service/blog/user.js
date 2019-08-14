'use strict';

const Service = require('egg').Service;
 
class UserService extends Service {
    async register(user) {
       
        const results = await this.app.mysql.get('user',{username:user.username});
        if(results){
            return {msg:'该用户已存在！',success:0};
        }else{
            user.password= this.ctx.helper.md5_password(user.password)
            const result = await this.app.mysql.insert('user',user);  
            if(result.affectedRows === 1){
                return {msg:'注册成功！',success:1};
            }else{
                return {msg:'注册失败！',success:0};
            }
        }
       
    }
    async login(user) {
        user.password= this.ctx.helper.md5_password(user.password)
        const results = await this.app.mysql.get('user',user);
        if(results){
            if(results.isstop==0){
                return {msg:"您已被锁定",success:0,results};
            }else{
                
                return  {msg:"登录成功",success:1,results};
            }
        }else{
            return  {msg:"登录失败",success:0,results};
        }
      
       
    }
    async logout() {
       
    }
}

module.exports = UserService;
