## Markdown 使用方法：http://sspai.com/25137


#### 项目运行步骤

 npm start

localhost:3000

#### 将项目上传到github

mkdir big-demo

npm init            //将项目变成仓库   (npm init 是配置package.json的)

npm i -D React     //安装react包

配置gitignore      //不让git跟踪node_modules build(最终编译出来的代码，放bundle.js)

git add -A//
如果出错，修改远端地址：在git/config中，删除以[remote "origin"]开头的三句话

git commit -m"first commit"  //在本地做版本  

git remote add origin "https://github.com/MOMO-0902/big-demo" 保存地址

git push -u origin master 推送/上传 版本（只需第一次)以后只需用 git push

#### 热模块加载(webpack hot reload)

热模块加载，把webpack环境改变，配置devServer,保存后网页自动更新


#### 安装material-ui

npm install material-ui -D
npm insrall -D react-tap-event-plugin

#### 关于package.json

babel组件就是放在 devDependencies (开发模式)中，编译我们所写代码。

react,react-dom应放在dependencies（产品模式）中


#### lodash 模式化加载

这是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库。

安装lodash:   npm i --save lodash

导入map，操作数组   import 'map' from 'lodash/fp/map'

调用map接口，数组作为它的第二个参数,=>(箭头函数)es6语法,相当于function

map((b) => {
  AllCards.push(
      <CardList title={b.title} date={b.date} index={b.index} key={Math.random()}/>//key 独立标识符，提供给react 系统用
    );
},
 Cards
);


#### 定义行内样式

1.getstyles(){
  root:{}
}

const styles =this.getstyles();

<h1 style={styles.root}


2.let styles={
  root:{}
}

<h1 style={styles.root}

####  解决图标方案：

1.字体图标

2.SVG 缩放矢量化图形  

#### 谷歌翻墙

修改host文件

~ sudo atom / etc/hosts

修改hosts后生效的方法：

sudo rcnscd restart

通用方法  拔网线(断网) -> 插网线(重新连接网络)

#### 安装react-developer Tools Chrome 插件

添加react调试工具到Chrome开发者工具，能看到代码层级结构和组件关系。

#### 使用谷歌

#### Icon-button
