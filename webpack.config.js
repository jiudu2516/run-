// __dirname  node里面内置的对象：代表当前文件所在目录的绝对路径  E:\BaiduNetdiskDownload\09.张晓飞vue谷粒外卖19——12\day01\02day-study
const path = require('path')  // 用来解析路径相关信息的模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口  xxx: index的路径
  entry: {
    xxx: path.resolve(__dirname, 'src/index.js')
  },
  // 出口(打包生成js)
  output: {
    filename: 'static/js/[name].bundle.js',  //  [name] 是入口中的xxx
    path: path.resolve(__dirname, 'dist')
  },
  // 模块加载器
  module: {
    rules: [
      // 处理 ES6 转 ES5
      {
        test: /\.js$/,  //  用于匹配文件（对哪些文件进行处理）
        //exclude: /node_modules/,  //  排除哪些文件
        include: [path.resolve(__dirname, 'src')], //  只针对哪些文件处理
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  //  包含了多个常用的插件的大包
          }
        }
      },
      // 处理 CSS
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]  //  执行顺序是先执行右边css-loader，在执行style-loader
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ]
  },
  // 插件
  plugins: [
    // 创建一个插件就是创建一个实例
    new HtmlWebpackPlugin({
      template: 'index.html',  // 以哪个页面作为模板页面打包（在根目录查找）
      filename: 'index.html'  //  生成页面(在output指定的path下)
    })
  ],
  // 配置开发服务器
    devServer: {
      open: true, // 自动打开浏览器
      quiet: true, // 不做太多日志输出
    },
    // 配置开启source-map调试
    devtool: 'cheap-module-eval-source-map',
}