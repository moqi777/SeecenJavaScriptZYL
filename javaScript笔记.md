# 理论

javascript:是主要用来完成客户端的页面交互	
html css:只能完成静态页面

交互效果：
	客户端交互：不需要通过网络，本地也能完成
	服务器交互：需要依赖网络实现数据传输

javascript的组成
	语法：书写代码的规则和方式
	DOM：提供访问和操作网页内容的方法和接口
	 BOM：提供了与浏览器交互的方法和接口

程序运行的时候会出现两种错误
	语法错误，编译错误
	程序错误：只有在程序运行时才会发现

# 语法

> 语法：书写代码的规则和方式

## 变量

变量：在内存中开辟一段存储数据的空间
内存：在系统中临时存储数据的设备
硬盘：在系统中永久存储数据的设备

var 关键字：有标色，有功能，且由官方命名的符号,在内存中开辟空间
num 标识符：由开发时临时取的标识符
js的分号";"可以省略不写，但是建议养成良好的习惯

```js
var num;
num = 12; //= 赋值号：把符号右侧的数据放入到左侧变量中
```

#### 变量的声明方式

```js
//1 先声明后赋值
//2 声明同时赋值
var num1 = 12;
//3 一次声明多个变量且赋值
var num2, num3, num4 = 15; //只有num4有值

//局部变量:声明变量的大括号中有效	全局变量:全部有效
var	全局变量声明
let	局部变量声明
const	常量声明
```

#### 数据类型

> 变量的两种特性：数据值、数据类型

六大数据类型

- number	数字类型
- string    字符串类型
- undefined    未定义
- null    空类型
- boolean    判断类型
- object    对象类型

js的特殊值

- undefined
- null
- NaN    无法用数字表示的number类型

## 运算符表达式与结构

#### 运算符

```js
= 赋值
== 只比价值
=== 比较数值和类型
|| 或者
&& 与
条件?true:false	三目运算
```

#### 分支结构

if分支

```js
if(条件){
    执行体
}else if(条件){
    执行体
}else{
    执行体
}
```

switch分支

```js
switch(a){
    case '符合a的值':
        执行体
        break;
    case '符合a的值':
        执行体
        break;
        ...
    default:
    	全部case都不符合最后执行此
}
```

#### 循环结构

> break;	终止循环
> continue;	跳过此次循环执行下一次循环
>
> 冒泡排序口诀：外层循环N-1，内层循环N - i - 1

while循环

```js
while(循环条件){
    循环体
    //a++
}
```

for循环

嵌套循环从内往外执行

```js
for(表达式1;表达式2;表达式3){循环体结构}                          
//循环算法（将一段代码执行指定的次数）
//		表达式1:一般作为循环变量赋初始值
//		表达式2:循环继续的条件,即能判断真假的条件,一般作为关系表达式
//		表达式3:用于循环变量的改变,可做加减法
```

#### 函数

> 使用函数：函数名(实参);
> 	实参多于形参,多余的实参无用;
> 	形参多于实参,多余的形参显示未定义(undefined).
>
> 函数的参数没有限制,但是返回只能有一个

##### 函数的声明

```js
function 函数名(形参){
    函数体
    return 返回值;
}
```

##### 函数表达式

```js
var 函数名 = function(形参){
    函数体
    return 返回值;
}
```

## 类型转换

> typeof()	获取变量的数据类型

##### 非number转换为number

```js
Number()
	碰到非字符显示NaN，不好用不建议使用。此方法常常被系统默认调用
parseInt()
	从第一个字符开始解析每个字符，直至遇见一个非数字值字符为止
parseFloat()
	从第一个字符开始解析每个字符，直至遇见一个非数字值字符为止或者第二个小数点为止
    该方法不能做到对number进行取整
```

##### 非字符串转换为字符串

```js
//一般建议使用第一种String进行转换，toString可能会导致程序错误
String()
.toStrinng()

//Uncaught TypeError: Cannot read properties of undefined (reading 'toString')
undefined.toString()
```

## 常用方法

```js
多行注释	/*	*/
单行注释	//
前台显示	alert("弹窗");
后台显示	console.log('内容');
弹出输入框	var 变量接受输入内容 = prompt("弹窗输入提示");
```

##### 小数

````js
.toFixed([保留小数的位数])
	设置小数位数，四舍五入
````

##### 字母

```js
.toUpperCase()
	所有字母转大写
.toLowerCase()
	所有字母转小写
```

##### 空格

```js
.trim()
	去前后空格
.trimLeft()
	去前空格
.trimRight()
	去后空格
```

##### 字符串

```js
.split("[分隔点]")
	分隔字符串，返回一个数组，不包括分隔点。
    如果没有参数只有""每个字符串都分隔，没有""返回一个长度为1的数组
.length()
	查看字符串长度    
.reverse()
	颠倒字符串
//截取字符串    
.substring([首位下标],[末尾下标])
	截取字符串，前闭后开，会自动调整前后位，但不能接受负数
    如果只有一个参数，从参数截取到最后一位
.slice([首位下标],[末尾下标])
	截取字符串或/数组，与substring相似
.substr([首位下标],[个数])
	截取字符串/数组，从首位下标开始截取指定个数
//查找字符串
.indexOf("[需要查找的单词]",[index])
	只有第一个参数：查找字符串，输出需要查找的单词下标位置   
    两个参数：从index下标位置开始查找单词下标
.lastIndexOf("[需要查找的字符串]")
	从后往前找
.charAt([index])
	查找指定下标位置的字符
```

##### 数组

```js
.concat([arr1],[arr2])
	合并数组。需先创建一个空数组接收合并后的数据。
    var a=[];var a=a.concat([arr1],[arr2])
.join("[分隔符]")
    数组转换成字符串，将所有数组成员穿插分隔符返还字符串，没有参数默认逗号分隔
//删除与添加
var a=['a','b','c']    
.push('[value1]','[value2]'...)
	a.push('d','e','f');向a添加数据
.pop()
	删除最后一个数组元素，返回删除的元素
.unshift('[value1]','[value2]'...)
	前增加：a.unshift('d','e','f');按顺序将数据添加到数组前面
.shift()
	删除第一个数组元素，返回删除的元素
.splic([index],[number],[value])
	删除与插入：返回包含删除元素的数组
     只有第一个参数：删除index下标位置开始到数组末尾所有元素
     只有前两个参数：删除index下标位置开始后面number个元素
     三个参数都有：在前面的基础上并在index位置插入value
     提示：只插入的话可以：var b = a.splic(1,0,"apple");//a=['a','value','b','c']
```

# DOM

> 提供访问和操作网页内容的方法和接口

## 获取到Dom元素

> 问题：js文件的导入或者书写在html前面会出现获取不到DOM元素的情况
> 原因：html文件是从上而下扫的，浏览器先识别到js代码便会如此
> 解决方法
>
> - 一是将js文件的导入书写放在文件末尾
> - 二是在js代码中获取Dom元素步骤写在window.onload方法（窗口加载完成后的事件）中

```js
window.onload=()=>{
 	document.getElementByld();
    ...
}
```

以下方法均是**document**开头，获取到元素

```js
.write();
	向文档写入HTML表达式或js代码
.getElementByld("id名");
	返回带有指定id的元素
.getElementsTagName；
	返回包含带有指定标签名称的所有元素的节点列表
.getElementsByClassName("类名");
	包含带有指定类名的所有元素的节点列表
```

一下方法均是  **元素**  开头

~~~js
.getAttrlbute("[属性名]");
	获取到指定的属性值
.setAttrilbute("[属性名]","[属性值]");
	给元素赋值
    
.innerText;
	设置或返回元素标签中间的文本值
    //document.getElementByld("form").lnnerText;
    //document.getElementByld("form").lnnerText=需要设置放在元素标签中间的文本值
.lnnerHTML;
	设置或返回元素标签中间的html标签
    //同上
    
.style
	设置页面元素的样式
	//document.getElementByld("id名").style.backgroundColor = "black";
.className
	获取或设置html元素的class属性
    //document.getElementByld("id名").className;	返回类名
    //document.getElementByld("id名").className = "类名";	设置类名

.parentNode
	返回元素节点的父节点
.childNodes
.children
	返回元素节点的子节点集合，使用下标访问到具体节点，前者包含空白节点(回车、空格、制表符)
.fistChild
.firstElementChild
	返回元素节点的第一个子节点,前者可能会获取到空节点，不建议使用
.lastChild
.lastElementChild
	返回元素节点的最后一个子节点,前者可能会获取到空节点，不建议使用
.nextSibling
.nextElementSibling
	返回下一个兄弟节点，前者可能会获取到空节点，不建议使用
.previousSibing
.previousElementSibling
	返回上一个兄弟节点，前者可能会获取到空节点，不建议使用
~~~

