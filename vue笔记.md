# Vue3

> 响应式 前端框架

## 1 安装

- 1. 直接引用全局js文件

```html
<script src="../js/vue3.245.js"></script>
```

- 2. npm

  需要用到node.js

## 2 基础

### 2.1 使用步骤

**1：在html中创建一个div或者其他容器对象**

```html
<!-- 这是一个包含Vue应用的容器，所有Vue应用的内容都将放在这个div中。 -->
<div id="dv">
    {{message}},{{age}}	//页面中直接输出这两个值(hello vue,12)
</div>
```

**2:创建创建vue实例，并绑定某个上面的容器**

```js
//创建一个app对象   
<script>
    const app = {
        data(){ //定义成员变量的地方
            return{
                message:"hello vue",
                age:12
            }
        },
        methods:{   //定义函数的区域
			method1(){},
            method2(){}
            ...
        }，
        computed:{	//计算属性声明区
        	money:{	//money是计算属性的名字
        		get:function(){
                      ...
                    return 值;
                }
    		}
    	}
    }
const vue = Vue.createApp(app);//创建一个vue实例
vue.mount("#dv");//让vue与div绑定
</script>
```

### 2.2 指令

> v-if，v-else，v-for
>
> v-model，v-bind，v-on，v-show

#### v-model

用于在表单元素和vue实例的数据之间实现双向绑定

```html
<input type="text" v-model="age">//在文本框中的值与age的值实时同步变化
```

#### v-bing

用于将vue实例的数据绑定到html标签的属性中（单项绑定）

比如<img>标签有src属性，width，heright属性
这些属性都可以从vue实例中取值

```html
//v-bind:是完整写法，缩写形式 :
<img v-bind:src="img" :width="width" :heigth="height"/>
```

#### v-on或者@

用于将html事件与vue实例的函数绑定

v-on是完整写法，缩写直接@符号

比如按钮绑定单击事件

```html
<button v-on:click="test()">按钮事件</button>
<input type="button" @click="test()"/>
```

比如select标签选项改变事件

```html
<select @change="change()">
    <option value="最强王者">最强王者</option>
	<option value="璀璨钻石">璀璨钻石</option>
	<option value="尊贵铂金">尊贵铂金</option>
	<option value="荣耀黄金">荣耀黄金</option>
</select>
```

#### v-show

控制标签是否显示

```html
//此处“”中的show是vue实例中的布尔类型属性变量
//如果show为false则span标签不显示
<span v-show="show">{{message}}</span>	
```

#### v-once

只会绑定变量的初始值，如果变量的值发生改变，{{内容不会发生改变}}

```html
//每次按按钮，只有第一行的num会一直+1，第二行的num始终是1
<span>最新num值:{{num}}</span><br>
<span v-once>初始值：{{num}}</span><br>
<button @click="num++">按钮</button>
```

#### v-if,v-else

```html
<h1>{{degree}}</h1>
<h3 v-if="degree >= 90">优秀</h3>
<h4 v-else-if="degree >= 80">良好</h4>
<h6 v-else>再接再厉</h6>
```

```js
data(){
    return{
        degree:parseInt(Math.random()*41)+60
    }
}
```

#### v-for

```html
<!-- 中国,cn,0
	 美国,usa,1
	 俄罗斯,rus,0 -->
<ul>
    <li v-for="cn in countries">
        {{cn.name}},{{cn.ename}},{{cn.status}}
    </li>
</ul>

//带下标的遍历
<!-- 0,中国,cn,0
	 1,美国,usa,1
	 2,俄罗斯,rus,0 -->
<ul>
    <li v-for="cn,index in countries">
        index,{{cn.name}},{{cn.ename}},{{cn.status}}
    </li>
</ul>

//配合v-show使用
<!-- 0,中国,cn,0
	 2,俄罗斯,rus,0 -->
<ul>
    <li v-for="cn,index in countries" v-show="cn.status == 0">
        {{index}},{{cn.name}},{{cn.ename}},{{cn.status}}
    </li>
</ul>

//配合v-if使用
<!-- 友好国家：0,中国,cn,0
	 敌对国家：1,美国,usa,1
	 友好国家：2,俄罗斯,rus,0 -->
<ul>
    <template v-for="cn,index in countries">
        <li v-if="cn.status == 0">
            友好国家：{{index}},{{cn.name}},{{cn.ename}},{{cn.status}}
        </li>
        <li v-else>
            敌对国家：{{index}},{{cn.name}},{{cn.ename}},{{cn.status}}
        </li>
    </template>
</ul>
```

```js
data(){
    return{
        countries:[
            {name:"中国",ename:"cn",status:0},
            {name:"美国",ename:"usa",status:1},
            {name:"俄罗斯",ename:"rus",status:0}
        ]
    }
}
```

## 3 使用node管理项目

#### 3.1 创建项目

> npm与pnpm创建运行项目一模一样

1. 在指定存放项目的文件夹下cmd，执行

```
pnpm create vite
```

2. 输入项目名
3. 按键盘上下键选择vue
4. 选择javascript

此时在指定文件夹下创建项目成功，项目中的package.json为项目的包管理文件

#### 3.2 运行项目

进入到项目下cmd

```
pnpm install
	根据package.json文件中的dependencies下载导入依赖
pupm run dev
	运行项目
```

#### 3.3 目录解析

目录：

- 



3：引入ElementPlus
用vscode 打开刚创建好的项目，打开命令行终端执行命令：

```
pnpm install element-plus --save
pnpm install @element-plus/icons-vue --save
```

4：引入路由

```
pnpm install vue-router --save
```

5：引入axios

```
pnpm install axios --save
```

6：把main.js改为如下代码：

```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  axios  from 'axios'
//导入ElementPlus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import locale from 'element-plus/es/locale/lang/zh-cn'
// 设置基础访问路径
axios.defaults.baseURL='http://127.0.0.1:88/'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {locale })
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.config.globalProperties.$axios = axios
```

7：运行项目

```
 pnpm install
 pnpm run dev
```

# 