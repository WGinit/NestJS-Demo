export const GlobalMiddleWare = (req:any, res:any,next:any) => {
    console.log('全局中间件.....')
    next()
}