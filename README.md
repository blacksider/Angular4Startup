# 基于 Angular CLI 快速构建 Angular4 项目

> 单独通过webpack搭建一个angular4的项目是一个很痛苦的事，但是现在大部分前端框架都提供了CLI功能帮助快速构建相对应的项目，所以通过Angular CLI搭建项目会很轻松，大部分的时间可能关注在对应的特性和语法上即可。

## 一、准备环境
	
- 首先在你的机器上安装好nodejs和npm环境，请安装6.9.x版本的nodejs和3.x.x的npm环境
- 运行以下命令安装angular-cli

<pre><code>
	npm install -g @angular/cli

</code></pre>

## 二、创建项目

- 选择一个目录，在该目录下执行以下命令初始化项目：

<pre><code>
	ng new angular4startup --style=less # 因为我喜欢使用less作为css文件，所以使用less作为默认css文件

</code></pre>


- 然后在该目录下即会有一个angular4startup的项目。
- 然后用IDE打开该项目即可看到一个完整的项目如下：
<pre><code>
e2e
  ...
node_modules
  ...
src
  -app
    -app.component.css
    -app.component.html
    -app.component.spec.ts
    -app.component.ts
    -app.module.ts
  -assets
    -.gitkeep
  -environments
    -environment.prod.ts
    -environment.ts
  -favicon.ico
  -index.html
  -main.ts
  -polyfills.ts
  -styles.css
  -test.ts
  -tsconfig.app.json
  -tsconfig.spec.json
.angular-cli.json
karma.conf.js
package.json
protractor.conf.js
README.md
tsconfig.json
tslint.json

</code></pre>


> 说明： <br>
> 文件夹e2e是一些端对端测试的样例，karma.conf.js 和 protractor.conf.js是关于UT的相关内容，当前文章无视这些内容。<br>
> .angular-cli.json是angular-cli的配置文件，里面的内容就是webpack的一些配置。<br>
> src目录即为我们的工作目录，放的是所有和项目有关的内容。<br>
> src/assets 目录下是放一些静态资源，如图片。<br>
> src/environments 目录下放的是关于环境的配置，这些配置的引用可以在.angular-cli.json中找到。<br>
> index.html为整个应用程序html页面的入口，配置是在.angular-cli.json中的apps.index指定的。<br>
> main.ts是装载项目的入口，在这里装载项目中的所有模块。<br>
> polyfills.ts是存放一些不同的兼容性的代码的第三方库，比如默认会加入的core-js和zone.js。<br>
> tsconfig.json 和 tsconfig.app.json 是用来编译typescript为js的配置文件，浏览器并不认识typescript，所有代码都需要被重新编译成js代码以供浏览器认知。<br>
> 其他的还有一些文件查询一些相关资料即可，README.md里面有一些关于项目的说明，可能会对你有所帮助。

# CLI生成的说明：Angular4Startup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
