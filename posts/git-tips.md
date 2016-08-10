#git-tips

#### git step

git add -A
git commit -m"message"
git push

#### _ssh免账号密码上传github_

1.在命令行中到用户主目录下 (~)

2.运行命令 ssh-keygen

3.产生.ssh隐藏文件夹，在 ~/.ssh 中看到这公共 key 了。

4.cat (id-rsa.pub)复制粘贴

5.到github上设置栏里找到 SSH and GPG keys

6.新建 new SSH key

8.到本地仓库git/config/下，将远程终端地址复制下来（ssh方式 ）
