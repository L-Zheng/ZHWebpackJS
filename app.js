
/** 打包js
  npm install -g webpack
  npm install -g webpack-cli
 1、 命令行直接打包
    webpack app.js -o min.js 直接输出min.js
    webpack app.js min.js  生成dist文件夹
    webpack app.js  生成dist文件夹
 2、 借助配置文件打包
    webpack --config webpack.conf.js  生成dist文件夹
 */

import Parse from "./src/parse.js";

FundPrivate.parseToHtml((params) => {
   try {
      return Parse.parseToHtml(params); 
   } catch (error) {
       console.log('parseToHtml-error');
       console.log(error);
   }   
})

