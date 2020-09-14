// import {sum} from './js/math'
import logo from './assets/imgs/logo.png'
import  './assets/css/my.css'

const image = new Image()  //  图片放到一个对象中
image.src = logo   // 图片路径
document.body.appendChild(image)
document.getElementById('root').innerHTML = '<h1>Hello222</h1>'

// console.log('Hello Webpack!444', sum(2,3))
// document.getElementById('root').innerHTML = '<h1>Hello</h1>'