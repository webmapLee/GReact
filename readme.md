# react mini版实现

1.createElement
2.render
3.Concurrent mode  FID
    3-1 允许中断渲染 优先级更高优先执行 暂时中断浏览器渲染
    3-2 将渲染工作进行分解 分解成一个个小的fiber task
    3-3 requestIdleCallback (mock 模拟)api 支持的不太好
    messageChannel + requestaAnimationFrame()，调度fibertask 队列
4.Fibers
    4-1 小单元  fibertask(虚拟dom+状态) ---》 fibertree  --》 将要被渲染的tree 双缓存
    4-2 fiber是一种数据结构  也是一种工作单元
    4-3 每一个fiber 都有一个链指向第一个子节点，下一个兄弟节点  链条
    nextUnitOfWOrk = {
        parent:'',
        dom:'',
        props:{
            children:[],
        }
    }
5.Render and Commit Phases
6.Reconciliation
7.Function Components
8.hooks


while 解决得问题：
async await
停止得方式    throw error  捕获代码错误  babel-runtime[error ...]
    goto  break continue 
libuv [while + 观察者 + 生命周期]
最早期的vue2  双指针   react15 while
蹦床函数 解决  尾调用  递归的问题
熟悉babel原理（ast + 错误捕获机制）
熟悉libuv(babel-loader ast+magicstring+walk ast + buffer)
熟悉vue早期、vue2、vue3 原理机制，早期的dom diff 
熟悉React原理，能够实现简版的React 包含fiber机制   atom+gpu.js+wasm
了解tenserflow.js/Python three.js  xeogl  bayblon/phaser/webgl/webGPU

线程锁atom + gpu.js + wasm
函数  函子


