/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function createElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type: type,
    props: _objectSpread(_objectSpread({}, props), {}, {
      children: children.map(function (child) {
        return _typeof(child) === 'object' ? child : createTextElement(child);
      })
    })
  };
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 //alternate 这个桥接属性是全体fiber 都用的一个属性，保存了fiber更新前的fiber tree

window.GReact = {
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__.createElement,
  render: render,
  useState: useState
};

function createDom(fiber) {
  var dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type); // const isProperty = (key) => key !== "children";
  // Object.keys(fiber.props)
  //     .filter(isProperty)
  //     .forEach((name) => {
  //         dom[name] = fiber.props[name];
  //     });

  updateDom(dom, {}, fiber.props);
  return dom;
} //根节点，跟踪当前准备渲染的节点


var vipRoot = null; //下一个工作单元

var nextUnitOfWork = null; //当前渲染树 最后准备提交的渲染树

var currentRoot = null; // domdiff 要删除的节点

var deletions = null;

function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(vipRoot.child);
  currentRoot = vipRoot;
  vipRoot = null;
} //属性的更新


var isProperty = function isProperty(key) {
  return key !== 'children';
}; //是否是新属性


var isNew = function isNew(prev, next) {
  return function (key) {
    return prev[key] !== next[key];
  };
}; //是否是旧属性


var isGone = function isGone(next) {
  return function (key) {
    return !(key in next);
  };
}; //是否是事件


var isEvent = function isEvent(key) {
  return key.startsWith('on');
};

function updateDom(dom, prevProps, nextProps) {
  Object.keys(prevProps).filter(isProperty).filter(isGone(nextProps)).forEach(function (key) {
    dom[key] = '';
  });
  Object.keys(nextProps).filter(isProperty).filter(isNew(prevProps, nextProps)).forEach(function (key) {
    dom[key] = nextProps[key];
  });
  Object.keys(prevProps).filter(isEvent).filter(function (key) {
    return !(key in nextProps) || isNew(prevProps, nextProps)(key);
  }).forEach(function (key) {
    var eventType = key.toLowerCase().substring(2);
    dom.removeEventListener(eventType, prevProps[key]);
  });
  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(function (key) {
    var eventType = key.toLowerCase().substring(2);
    dom.addEventListener(eventType, nextProps[key]);
  });
} //删除节点


function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
} //更新渲染节点


function commitWork(fiber) {
  //effectTag 判断节点是不是需要删除的节点
  if (!fiber) {
    return;
  } //考虑到函数组件没有dom节点，所以要一直向上找到循环找到有dom节点的fiber


  var domParentFiber = fiber.parent;

  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }

  var domParent = domParentFiber.dom;

  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === 'DELETION') {
    commitDeletion(fiber, domParent);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function render(element, container) {
  //第一个工作单元
  vipRoot = {
    dom: container,
    props: {
      children: [element]
    },
    alternate: currentRoot
  };
  deletions = []; //下一个fiber节点（工作单元）跟节点

  nextUnitOfWork = vipRoot;
}

function workLoop(deadline) {
  //判断是否应该停止循环
  var shuoldYield = false; //如果存在下一个工作单元，且没有更高优先级得其它工作，执行循环
  //如果存在上述得情况，直接打断渲染

  while (nextUnitOfWork && !shuoldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork); //如果截止时间到了，停止工作循环，更高优先级得任务来了

    shuoldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && vipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
} //告知浏览器空闲时间执行workLoop


requestIdleCallback(workLoop); //新增全局变量 vipFiber

var vipFiber = null;

function useState(initial) {
  //是否有旧钩子，旧钩子存储了上一次更新的hook
  var oldHooks = vipFiber.alternate && vipFiber.alternate.hooks;
  var hookNum = vipFiber.alternate.hookNum;
  var oldHook = oldHooks && oldHooks.length > 0 && oldHooks[hookNum]; //初始化钩子，钩子的状态是旧钩子的状态或者初始状态

  var hook = {
    state: oldHook ? oldHook.state : initial,
    queue: []
  }; //从旧的钩子队列中获取所有动作，然后将它们一一应用到新的钩子状态

  var actions = oldHook ? oldHook.queue : [];
  actions.forEach(function (action) {
    hook.state = action(hook.state);
  });

  var setState = function setState(action) {
    hook.queue.push(action); //更新渲染

    vipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot
    };
    nextUnitOfWork = vipRoot;
    deletions = [];
  };

  vipFiber.hooks.push(hook);
  vipFiber.hookNum++;
  return [hook.state, setState];
} //更新函数组件


function updateFunctionComponent(fiber) {
  vipFiber = fiber;
  vipFiber.hooks = [];
  vipFiber.hookNum = 0;
  var children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
} //更新原生组件


function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  var elements = fiber.props.children;
  reconcileChildren(fiber, elements);
} //承载了下一个得工作单元


function performUnitOfWork(fiber) {
  var isFunctionComponent = fiber && fiber.type instanceof Function;

  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  } // if (!fiber.dom) {
  //     fiber.dom = createDom(fiber);
  // }
  // const elements = fiber.props.children
  // reconcileChildren(fiber, elements)
  //如果有子节点，返回子节点


  if (fiber.child) {
    return fiber.child;
  }

  var nextFiber = fiber; //这儿是重点，如果没有子节点，则判断有没有兄弟节点
  //如果没有判断父节点有没有兄弟节点，直至找到第一个有兄弟节点的父节点

  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }

    nextFiber = nextFiber.parent;
  }
} //这里对比新旧的fiber


function reconcileChildren(vipFiber, elements) {
  //如果fiber没有dom节点，创建一个dom节点
  // if(fiber.parent){
  //     fiber.parent.dom.appendChild(fiber.dom);
  // }
  //处理children节点
  var index = 0; //起始节点

  var oldFiber = vipFiber.alternate && vipFiber.alternate.child;
  var prevSibling = null; //兄弟节点

  while (index < elements.length || !!oldFiber) {
    // while (index < elements.length)
    var _element = elements[index];
    var newFiber = null; //判断fiber的类型是否一致

    var sameType = oldFiber && _element && _element.type === oldFiber.type;

    if (sameType) {
      //如果类型一致 仅仅去更新props
      newFiber = {
        type: oldFiber.type,
        props: _element.props,
        dom: oldFiber.dom,
        parent: vipFiber,
        alternate: oldFiber,
        effectTag: 'UPDATE'
      };
    } //添加新节点


    if (_element && !sameType) {
      newFiber = {
        type: _element.type,
        props: _element.props,
        dom: null,
        parent: vipFiber,
        alternate: null,
        effectTag: 'PLACEMENT'
      };
    } //删除老节点


    if (oldFiber && !sameType) {
      oldFiber.effectTag = 'DELETION';
      deletions.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index === 0) {
      vipFiber.child = newFiber;
    } else {
      //这儿通过链把兄弟节点依次挂载到父节点下面的第一个子节点上
      //用于后面找到兄弟节点
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
}

var style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
};
/* @jsx GReact.createElement */
// function App(props){
//     return <div style = {style}>
//         <h1>{props.name}</h1>
//     </div>
// }
// const element = <App name='foo'/>
// const root = document.getElementById("root");
// GReact.render(element, root);

function Counter() {
  var _GReact$useState = GReact.useState(0),
      _GReact$useState2 = _slicedToArray(_GReact$useState, 2),
      count = _GReact$useState2[0],
      setCount = _GReact$useState2[1];

  var _GReact$useState3 = GReact.useState(2),
      _GReact$useState4 = _slicedToArray(_GReact$useState3, 2),
      count1 = _GReact$useState4[0],
      setCount1 = _GReact$useState4[1];

  return GReact.createElement("h1", {
    onClick: function onClick() {
      setCount(function (c) {
        return c + 1;
      });
      setCount1(function (c) {
        return c + 1;
      });
    }
  }, "Count:", count, "--", count1);
}

var element = GReact.createElement(Counter, null);
var root = document.getElementById("root");
GReact.render(element, root);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map