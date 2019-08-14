module.exports=(option,app)=>{
    return async function csrf_auth(ctx,next) {
       ctx.state.csrf =  ctx.csrf;
       await next();
    }
}