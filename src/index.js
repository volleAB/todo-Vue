import Vue from 'vue'           //引用Vue库
import App from './app.vue'     //引用app文件

const root = document.createElement('div')  //节点
document.body.appendChild(root)             

new Vue({
    render: (h) => h(App)
}).$mount(root)             //mount节点