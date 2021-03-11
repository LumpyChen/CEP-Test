# CEP-Test

一个运行于Adobe Photoshop里的CEP扩展实例。

## 进入开发者模式

- 首先，我们要获取自己当前机器上Adobe CEP的版是CEP几，关于Adobe不同应用的种类和版本的简称，我们可以看官方提供的对应： [Applications Integrated with CEP](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep)
- 得到当前CEP的版本后，我们可以通过下面的方法进入debug模式（记得将下列`CSXS.[n]`中的`[n]`用你目前的CEP版本替换）
    - 如果你是Windows用户，你需要：
        - 打开 regedit
        - 找到`HKEY_CURRENT_USER/Software/Adobe/CSXS.[n]`
        - 然后添加一个叫`PlayerDebugMode`的字段
        - 设置值为`string`类型的`"1"`
    - 如果你是macOS用户，你需要：
        - 打开终端输入： `defaults write com.adobe.CSXS.[n] PlayerDebugMode 1`
        - 你需要在终端输入`ps -axu $USER|grep cfprefsd`，找到`cfprefsd`这个进程的pid，然后用`kill`命令删掉它（或者你也可以直接重新启动你的机器）。

## 引入

执行：

```shell
yarn
yarn start
```

我们可以在项目目录内得到生成的CEP扩展目录：`com.cep.test`

为了引入CEP扩展，我们把build生成的CEP扩展的目录放到Photoshop指定的位置：

* mac：`~/Library/Application Support/Adobe/CEP/extensions/com.cep.test`
* win：`{Photoshop安装路径}\Required\CEP\extensions\com.cep.test`

## 运行

我们在Photoshop菜单栏的「窗口」-「扩展」中选择`CASE`，成功运行扩展。