## TASK010: webpack hot reload


#### 项目运行步骤

 npm start




mkdir big-demo
npm init            //将项目变成仓库   (npm init 是配置package.json的)
npm i -D React     //安装react包
配置gitignore      //不让git跟踪node_modules build(最终编译出来的代码，放bundle.js)

git add -A
git commit -m"first commit"  //在本地做版本  

git remote add origin "https://github.com/MOMO-0902/big-demo" 保存地址

git push -u origin master 推送/上传 版本（只需第一次)以后只需用 git push


热模块加载，把webpack环境改变，配置devServer,保存后网页自动更新


npm install material-ui -D
npm insrall -D react-tap-event-plugin

定义行内样式
1.getstyles(){
  root:{}
}

const styles =this.getstyles();

<h1 style={styles.root}


2.let styles={
  root:{}
}

<h1 style={styles.root}
