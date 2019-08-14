const url = require('url')
module.exports = (options, app) => {
   
    return async function testMiddleware(ctx, next) {
        var pathname = url.parse(ctx.request.url).pathname;
       if(ctx.cookies.get("user",{encrypt:true})){
          await next();
       }else{
        if(pathname == '/blog/login_view'||pathname == '/blog/login'||pathname=='blog/list'||pathname=='/'||pathname=='/blog/'
        ||pathname=='/blog/register'){
            await next()
        }else{
            ctx.redirect('/blog/login_view');   // 让用户去登录
        }
       
       }
    };
  };