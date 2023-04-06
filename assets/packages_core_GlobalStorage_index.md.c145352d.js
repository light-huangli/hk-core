import{_ as s,c as a,o as n,N as l}from"./chunks/framework.673b144a.js";const C=JSON.parse('{"title":"GlobalStorage","description":"","frontmatter":{},"headers":[],"relativePath":"packages/core/GlobalStorage/index.md"}'),o={name:"packages/core/GlobalStorage/index.md"},p=l(`<h1 id="globalstorage" tabindex="-1">GlobalStorage <a class="header-anchor" href="#globalstorage" aria-label="Permalink to &quot;GlobalStorage&quot;">​</a></h1><p>GlobalStorage全局缓存事件封装</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GlobalStorage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@hk-core/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 单例模式，传入缓存前缀 初始化</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Storage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GlobalStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">instance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hk-core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123123123</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 移除单个缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 清楚所有缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,4),e=[p];function t(c,r,D,y,i,F){return n(),a("div",null,e)}const g=s(o,[["render",t]]);export{C as __pageData,g as default};
