'use strict';

const Service = require('egg').Service;
class HomeService extends Service {
  async insertUser() {
    // 插入
    const result = await this.app.mysql.insert('user', {username:"张三",password:"e10adc3949ba59abbe56e057f20f883e"});  
    return result.affectedRows === 1;
  }
  async findUser(){
    const results = await this.app.mysql.select('user');
    return results;
  }
  async updateUser(){
    const row = {
        id:1,
        username: '李四',    // any other fields u want to update
        password: 'c33367701511b4f6020ec61ded352059', // `now()` on db server
      };
      const results = await this.app.mysql.update('user', row); // 更新 posts 表中的记录
      
    return results;
  }
  async deleteUser(){
    const results = await this.app.mysql.delete('user', {
       id:1
      });
    return results;
  }
}

module.exports = HomeService;
