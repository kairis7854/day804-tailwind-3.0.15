# Tailwind 3.0.15

## DEMO
連結：https://kairis7854.github.io/day804-tailwind-3.0.15/
![image](Readme.png)
<br>

## 筆記：Tailwind 3.0.15

官網：https://tailwindcss.com/

## 目錄
入門\
0.[安裝](#安裝)\
1.[編輯器設置](#編輯器設置)\
2.[預處理相關](#預處理相關)\
3.[生產優化](#生產優化)\
4.[瀏覽器相容性](#瀏覽器相容性)

核心觀念\
0.[開始](#開始)\
1.[常用狀態](#常用狀態)\
&nbsp; &nbsp; &nbsp; [偽類](#偽類)\
&nbsp; &nbsp; &nbsp; [偽元素](#偽元素)\
&nbsp; &nbsp; &nbsp; [媒體查詢](#媒體查詢)\
&nbsp; &nbsp; &nbsp; [主題](#主題)

2.[響應設計](#響應設計)\
3.[夜間模式](#夜間模式)\
4.[主題樣式](#主題樣式)\
5.[自訂義主題](#自訂義主題)

參考\
[react搭配tailwind](#react聲明式搭配tailwind)\
[Icons for Tailwind CSS](#Icons-for-Tailwind-CSS)



## 入門
## 安裝
npx create-react-app day804-tailwind-3.0.15\
npm install -D tailwindcss postcss autoprefixer\
npx tailwindcss init -p
```js
//tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
↑ 修改 tailwind.config.js 與 index.css

## 編輯器設置
VSCode 建議安裝官方插件 Tailwind CSS IntelliSense 

## 預處理相關
強烈建議僅使用 PostCSS，並且不要在 Tailwind 項目中使用 Sass 或 Less 等預處理器。

## 生產優化
如果您使用的是框架，請查看文檔，因為這通常會在生產中自動為您處理，您甚至不需要配置它。

## 瀏覽器相容性
相容性查詢 https://caniuse.com/?search=focus-visible

## 核心觀念
## 開始
```js
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```
↑ you have to actually try it.\
優點：不需去想css類名、極輕量css、減少css命名汙染可能、比 inline styles 功能多、更容易維護

## 常用狀態
偽類， :hover, :focus,:first-child和:required\
偽元素， ::before, ::after, ::placeholder, 和::selection\
媒體查詢，例如響應式斷點、夜間模式和prefers-reduced-motion\
屬性選擇器，例如[dir="rtl"]和[open]
## 偽類
```js
<button class="bg-sky-600 hover:bg-sky-700 ...">
  Save changes
</button>
```
↑鼠標移入改變按紐顏色
```js
<button class="dark:md:hover:bg-fuchsia-600 ...">
  Save changes
</button>
```
↑可以堆疊，在夜間模式、中等斷點處、懸停時更改背景顏色
```js
<button class="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
```
↑複合使用\
:visited、:focus-within、:focus-visible等。\
更多請參考 https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference
```js
<ul role="list" class="p-6 divide-y divide-slate-200">
  {#each people as person}
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">{person.name}</p>
        <p class="text-sm text-slate-500 truncate">{person.email}</p>
      </div>
    </li>
  {/each}
</ul>
```
↑ first、last 使用
```js
<table>
  <!-- ... -->
  <tbody>
    {#each people as person}
      <!-- Use a white background for odd rows, and slate-100 for even rows -->
      <tr class="odd:bg-white even:bg-slate-100">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table>
```
↑ odd、even 使用
:only-child、:first-of-type、:empty等。更多請參考官網
```js
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Username</span>
    <!-- Using form state modifers, the classes can be identical for every input -->
    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
  <!-- ... -->
</form>
```
↑表單狀態 required invalid disabled 設置\
:read-only、:indeterminate、:checked等。\
更多請參考 https://tailwindcss.com/docs/hover-focus-and-other-states#disabled
```js
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
```
↑外層定義 group ，內層定義 group-hover(任一偽類)來達到外層控制內層\
使用場景，如 card 修改樣式
```js
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
//注意：peer 必須在 peer-invalid 先前定義之上
```
↑兄定義 peer，弟定義 peer-invalid:visible(表單狀態)\
使用場景，如 Form 表單提示文字 
## 偽元素
```js
<label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
```
↑ Before and after。並不建議使用 before 與 after，直接寫 html 標籤更快更直觀些
```js
<label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
```
↑ placeholder 使用
```js
<form class="flex items-center space-x-6">
  <div class="shrink-0">
    <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
  </div>
  <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form>
```
↑ Tailwind 的 border reset 不會作用於 input 的 button 上，故 border 需自己在寫
```js
<ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```
↑ marker 用來修改列表開頭符號，只需要在父級定義即可 
```js
<div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
  <p>
    So I started to walk into the water. I won't lie to you boys, I was
    terrified. But I pressed on, and as I made my way past the breakers
    a strange calm came over me. I don't know if it was divine intervention
    or the kinship of all living things but I tell you Jerry at that moment,
    I <em>was</em> a marine biologist.
  </p>
</div>
```
↑ selection  用來修改選中的文本樣式，只需要在父級定義即可 
```js
<p class="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left
">
  Well, let me tell you something, funny boy. You know that little stamp, the one
  that says "New York Public Library"? Well that may not mean anything to you,
  but that means a lot to me. One whole hell of a lot.
</p>
```
↑ first-line 操控首行， first-letter 操控首字\
## 媒體查詢
```js
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  <!-- ... -->
</div>
```
↑ 響應樣式。更多請參考：2.[響應設計](#響應設計)
```js
<div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```
↑ 夜間模式。請參考：3.[夜間模式](#夜間模式)
```js
<div>
  <div class="portrait:hidden">
    111
  </div>
  <div class="landscape:hidden">
    <p>
      This experience is designed to be viewed in landscape. Please rotate your
      device to view the site.
    </p>
  </div>
</div>
```
↑ 視口方向，portrait:hidden 垂直時隱藏，landscape:hidden橫向時隱藏
```js
<div>
  <article class="print:hidden">
    <h1>My Secret Pizza Recipe</h1>
    <p>This recipe is a secret, and must not be shared with anyone</p>
  </article>
  <div class="hidden print:block">
    Are you seriously trying to print this? It's secret!
  </div>
</div>
```
↑ 列印，print:hidden 列印時隱藏，print:block 列印時顯示
## 主題
```js
//index.js
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
    .content-auto {
        content-visibility: auto;
    }
}


//目標組件
function App() {
	return (
		<div className="App">
			<div class="content-auto">...</div>
		</div>
	);
}
```
↑  @layer utilities{...} 定義全局樣式\
相關類似請參考，4.[主題樣式](#主題樣式)



## 響應設計
分辨率\
sm	640px	@media (min-width: 640px) { ... }\
md	768px	@media (min-width: 768px) { ... }\
lg	1024px	@media (min-width: 1024px) { ... }\
xl	1280px	@media (min-width: 1280px) { ... }\
2xl	1536px	@media (min-width: 1536px) { ... }

```js
<div className=' sm:bg-green-500 sm:font-bold'>111</div>
//注意：默认情况下，Tailwind 使用移动优先的断点系统
```
↑基本使用，分辨率640px以上屏幕，背景綠色，字重700

```js
//tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {},
  },
  plugins: [],
}
//現在 sm 只作用在 640px~767px 區間
```
↑ 設置範圍為固定區間
```js
//tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

//my components
<div className=' sm:bg-green-500 sm:font-bold'>111</div>
```
↑ 與默認相反的設置，640px以下屏幕，背景綠色，字重700\
更多請參考：https://tailwindcss.com/docs/screens

## 夜間模式
```js
//tailwind.config.js
module.exports = {
  darkMode: 'class',
}
//添加 darkMode ，設置以 class 來開關夜間模式

//組件頂層
function App() {
	return ( 
		<div className="App dark">
			<div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
				<div>
					<span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
						<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">123</svg>
					</span>
				</div>
				<h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
				<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
					The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
				</p>
			</div>
		</div>
	);
}
```
↑ 以 class 來控制夜間模式的開啟與關閉

## 主題樣式
```js
//index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
	.myComponents{ @apply
		bg-green-500
	}
}
//注意 @apply 不可缺少

//目標組件
function App() {
	return ( 
		<div className="App ">
			<div className='myComponents'>111</div>
		</div>
	);
}
```
↑ 用來定義主題樣式，使用場景如 primaryButton、secondButton、table 等等

## 自訂義主題
```js
//tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```
↑ 由 tailwind.config.js 中 theme 控制自訂義主題
```js
<div class="bg-[#bada55] text-[22px] before:content-['Festivus']">
  111
</div>
```
↑ 由 [ ] 輸入自選值
```js
	<div className='[color:red]'>111</div>
```
↑ 由 [ ] 輸入原生css
```js
	<button className='[border:5px_solid_black]'>111</button>
```
↑ 以 "_" 下滑線代替空格

## 參考
## react聲明式搭配tailwind
聲明式中的狀態搭配 tailwind 方法
```js
//classNames.js
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default classNames

//my components
import classNames from '../utils/classNames';

function Topbar({ toggleState, setToggleState }) {

    return (
        <div className={classNames(toggleState? 'bg-white' : 'bg-red-500',
        'px-[10px] py-[5px] ')}>
              {/* ... */}
        </div>
    )
}

export default Topbar;
```
參考 https://tailwindcss.com/blog/tailwind-ui-now-with-react-and-vue-support

## Icons-for-Tailwind-CSS
Tailwind Toolbox 裡的 Icon\
參考 https://www.tailwindtoolbox.com/icons