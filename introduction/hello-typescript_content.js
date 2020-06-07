
import React from 'https://dev.jspm.io/react@16.13.1';
export default function() {
  return React.createElement('article', {"dangerouslySetInnerHTML":{"__html":"<h1 id=\"hello-typescript\">Hello TypeScript <a class=\"header-anchor\" href=\"#hello-typescript\">§</a></h1>\n<p>我们从一个简单的例子开始。</p>\n<p>将以下代码复制到 <code>hello.ts</code> 中：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span>person<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'Hello, '</span> <span class=\"token operator\">+</span> person<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> user <span class=\"token operator\">=</span> <span class=\"token string\">'Tom'</span><span class=\"token punctuation\">;</span>\n<span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span>user<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>然后执行</p>\n<pre class=\"language-bash\"><code class=\"language-bash\">tsc hello.ts\n</code></pre>\n<p>这时候会生成一个编译好的文件 <code>hello.js</code>：</p>\n<pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">person</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'Hello, '</span> <span class=\"token operator\">+</span> person<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">var</span> user <span class=\"token operator\">=</span> <span class=\"token string\">'Tom'</span><span class=\"token punctuation\">;</span>\n<span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span>user<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>TypeScript 中，使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p>\n<p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p>\n<p><strong>TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。</strong></p>\n<blockquote>\n<p><code>let</code> 是 ES6 中的关键字，和 <code>var</code> 类似，用于定义一个局部变量，可以参阅 <a href=\"http://es6.ruanyifeng.com/#docs/let\">let 和 const 命令</a>。</p>\n</blockquote>\n<p>下面尝试把这段代码编译一下：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span>person<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'Hello, '</span> <span class=\"token operator\">+</span> person<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> user <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span>user<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>编辑器中会提示错误，编译的时候也会出错：</p>\n<pre class=\"language-bash\"><code class=\"language-bash\">index.ts<span class=\"token punctuation\">(</span><span class=\"token number\">6,22</span><span class=\"token punctuation\">)</span>: error TS2345: Argument of <span class=\"token builtin class-name\">type</span> <span class=\"token string\">'number[]'</span> is not assignable to parameter of <span class=\"token builtin class-name\">type</span> <span class=\"token string\">'string'</span><span class=\"token builtin class-name\">.</span>\n</code></pre>\n<p>但是还是生成了 js 文件：</p>\n<pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">function</span> <span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">person</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'Hello, '</span> <span class=\"token operator\">+</span> person<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">var</span> user <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">sayHello</span><span class=\"token punctuation\">(</span>user<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p><strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p>\n<p>如果要在报错的时候终止 js 文件的生成，可以在 <code>tsconfig.json</code> 中配置 <code>noEmitOnError</code> 即可。关于 <code>tsconfig.json</code>，请参阅<a href=\"http://www.typescriptlang.org/docs/handbook/tsconfig-json.html\">官方手册</a>（<a href=\"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html\">中文版</a>）。</p>\n<hr>\n<ul>\n<li><a href=\"get-typescript.html\">上一章：安装 TypeScript</a></li>\n<li><a href=\"../basics/index.html\">下一章：基础</a></li>\n</ul>\n"}})
};