/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/phina.js/build/phina.esm.js":
/*!**************************************************!*
  !*** ./node_modules/phina.js/build/phina.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accelerometer": () => /* binding */ Accelerometer,
/* harmony export */   "Accessory": () => /* binding */ Accessory,
/* harmony export */   "Ajax": () => /* binding */ Ajax,
/* harmony export */   "Asset": () => /* binding */ Asset,
/* harmony export */   "AssetLoader": () => /* binding */ AssetLoader,
/* harmony export */   "AssetManager": () => /* binding */ AssetManager,
/* harmony export */   "BaseApp": () => /* binding */ BaseApp,
/* harmony export */   "Button": () => /* binding */ Button,
/* harmony export */   "Canvas": () => /* binding */ Canvas,
/* harmony export */   "CanvasApp": () => /* binding */ CanvasApp,
/* harmony export */   "CanvasLayer": () => /* binding */ CanvasLayer,
/* harmony export */   "CanvasRenderer": () => /* binding */ CanvasRenderer,
/* harmony export */   "ChangeDispatcher": () => /* binding */ ChangeDispatcher,
/* harmony export */   "Circle": () => /* binding */ Circle,
/* harmony export */   "CircleGauge": () => /* binding */ CircleGauge,
/* harmony export */   "CircleShape": () => /* binding */ CircleShape,
/* harmony export */   "Collision": () => /* binding */ Collision,
/* harmony export */   "Color": () => /* binding */ Color,
/* harmony export */   "CountScene": () => /* binding */ CountScene,
/* harmony export */   "DisplayElement": () => /* binding */ DisplayElement,
/* harmony export */   "DisplayScene": () => /* binding */ DisplayScene,
/* harmony export */   "DomApp": () => /* binding */ DomApp,
/* harmony export */   "Draggable": () => /* binding */ Draggable,
/* harmony export */   "Element": () => /* binding */ Element,
/* harmony export */   "EventDispatcher": () => /* binding */ EventDispatcher,
/* harmony export */   "File": () => /* binding */ File,
/* harmony export */   "Flickable": () => /* binding */ Flickable,
/* harmony export */   "Flow": () => /* binding */ Flow,
/* harmony export */   "Font": () => /* binding */ Font,
/* harmony export */   "FrameAnimation": () => /* binding */ FrameAnimation,
/* harmony export */   "GameApp": () => /* binding */ GameApp,
/* harmony export */   "GamepadManager": () => /* binding */ GamepadManager,
/* harmony export */   "Gauge": () => /* binding */ Gauge,
/* harmony export */   "Grid": () => /* binding */ Grid,
/* harmony export */   "HeartShape": () => /* binding */ HeartShape,
/* harmony export */   "Input": () => /* binding */ Input,
/* harmony export */   "Interactive": () => /* binding */ Interactive,
/* harmony export */   "Keyboard": () => /* binding */ Keyboard,
/* harmony export */   "Label": () => /* binding */ Label,
/* harmony export */   "LabelArea": () => /* binding */ LabelArea,
/* harmony export */   "Layer": () => /* binding */ Layer,
/* harmony export */   "LoadingScene": () => /* binding */ LoadingScene,
/* harmony export */   "ManagerScene": () => /* binding */ ManagerScene,
/* harmony export */   "Matrix33": () => /* binding */ Matrix33,
/* harmony export */   "Mouse": () => /* binding */ Mouse,
/* harmony export */   "Object2D": () => /* binding */ Object2D,
/* harmony export */   "PathShape": () => /* binding */ PathShape,
/* harmony export */   "PauseScene": () => /* binding */ PauseScene,
/* harmony export */   "Physical": () => /* binding */ Physical,
/* harmony export */   "PlainElement": () => /* binding */ PlainElement,
/* harmony export */   "PolygonShape": () => /* binding */ PolygonShape,
/* harmony export */   "QueryString": () => /* binding */ QueryString,
/* harmony export */   "Random": () => /* binding */ Random,
/* harmony export */   "Rect": () => /* binding */ Rect,
/* harmony export */   "RectangleShape": () => /* binding */ RectangleShape,
/* harmony export */   "ResultScene": () => /* binding */ ResultScene,
/* harmony export */   "Scene": () => /* binding */ Scene,
/* harmony export */   "Script": () => /* binding */ Script,
/* harmony export */   "Shape": () => /* binding */ Shape,
/* harmony export */   "SoundManager": () => /* binding */ SoundManager,
/* harmony export */   "SplashScene": () => /* binding */ SplashScene,
/* harmony export */   "Sprite": () => /* binding */ Sprite,
/* harmony export */   "SpriteSheet": () => /* binding */ SpriteSheet,
/* harmony export */   "StarShape": () => /* binding */ StarShape,
/* harmony export */   "Support": () => /* binding */ Support,
/* harmony export */   "Texture": () => /* binding */ Texture,
/* harmony export */   "ThreeLayer": () => /* binding */ ThreeLayer,
/* harmony export */   "Ticker": () => /* binding */ Ticker,
/* harmony export */   "TitleScene": () => /* binding */ TitleScene,
/* harmony export */   "Touch": () => /* binding */ Touch,
/* harmony export */   "TouchList": () => /* binding */ TouchList,
/* harmony export */   "TriangleShape": () => /* binding */ TriangleShape,
/* harmony export */   "Tween": () => /* binding */ Tween,
/* harmony export */   "Tweener": () => /* binding */ Tweener,
/* harmony export */   "Twitter": () => /* binding */ Twitter,
/* harmony export */   "Updater": () => /* binding */ Updater,
/* harmony export */   "Vector2": () => /* binding */ Vector2,
/* harmony export */   "Vector3": () => /* binding */ Vector3,
/* harmony export */   "Wave": () => /* binding */ Wave,
/* harmony export */   "phina": () => /* binding */ phina$1
/* harmony export */ });
/*!
 * phina.js v0.2.3
 * Released under the MIT license
 *
 * Copyright (C) phi
 */
/**
 * @class global.Object
 * Objectの拡張
 */

/**
 * 関数を追加
 * @param   {String} key name
 * @param   {Function} function
 */
function $method(name, fn) {
  Object.defineProperty(this, name, {
    value: fn,
    enumerable: false,
    writable: true
  });
}

/**
 * @method accessor
 * アクセッサ(セッター/ゲッター)を定義する
 */
// Object.prototype.$method("accessor", function(name, param) {
function accessor(name, param) {
  Object.defineProperty(this, name, {
    set: param["set"],
    get: param["get"],
    enumerable: false,
    configurable: true,
  });
}

/**
 * @method forIn
 * オブジェクト用ループ処理
 */
function forIn(fn, self) {
  self = self || this;

  Object.keys(this).forEach(function(key, index) {
    var value = this[key];

    fn.call(self, key, value, index);
  }, this);

  return this;
}

/**
 * @method  $extend
 * 他のライブラリと競合しちゃうので extend -> $extend としました
 */
function $extend() {
// Object.prototype.$method("$extend", function() {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method  $safe
 * 安全拡張
 * 上書きしない
 */
function $safe(source) {
// Object.prototype.$method("$safe", function(source) {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      if (this[property] === undefined) this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method $watch
 * @param  {string} key       [description]
 * @param  {function} callback  [description]
 * @return {[type]}           [description]
 */
function $watch(key, callback) {
// Object.prototype.$method('$watch', function(key, callback) {
  var target = this;
  var descriptor = null;

  while(target) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
    if (descriptor) {
      break;
    }
    target = Object.getPrototypeOf(target);
  }

  // すでにアクセッサーとして存在する場合
  if (descriptor) {
    // データディスクリプタの場合
    if (descriptor.value !== undefined) {
      var tempKey = '__' + key;
      var tempValue = this[key];

      this[tempKey] = tempValue;

      accessor.call(this, key, {
      // this.accessor(key, {
        get: function() {
          return this[tempKey];
        },
        set: function(v) {
          var old = this[tempKey];
          this[tempKey] = v;
          callback.call(this, v, old);
        },
      });
    }
    // アクセサディスクリプタの場合
    else {
      accessor.call(this, key, {
      // this.accessor(key, {
        get: function() {
          return descriptor.get.call(this);
        },
        set: function(v) {
          var old = descriptor.get.call(this);
          descriptor.set.call(this, v);
          callback.call(this, v, old);
        },
      });
    }
  }
  else {
    var accesskey = '__' + key;

    accessor.call(this, key, {
    // this.accessor(key, {
      get: function() {
        return this[accesskey];
      },
      set: function(v) {
        var old = this[accesskey];
        this[accesskey] = v;
        callback.call(this, v, old);
      },
    });
  }
}

/*
 * array.js
 */

/**
 * @property {Object} first
 * 最初の要素
 *
 * ### Example
 *     arr = [6, 5, 2, 3, 1, 4];
 *     arr.first; // => 6
 */
const first = {
// Array.prototype.accessor("first", {
  "get": function()   { return this[0]; },
  "set": function(v)  { this[0] = v; }
};

/**
 * @property {Object} last
 * 最後の要素
 *
 * ### Example
 *     arr = [6, 5, 2, 3, 1, 4];
 *     arr.last; // => 4
 */
const last = {
// Array.prototype.accessor("last", {
  "get": function()   { return this[this.length-1]; },
  "set": function(v)  { this[this.length-1] = v; }
};


/**
 * @method at
 * 指定したインデックスの要素を返します（ループ・負数の指定可）。
 *
 * 添字が負数の場合は末尾からのオフセットとみなします。末尾の要素が -1 番目になります。  
 * 添字の絶対値が Array.length 以上の場合はループします。
 *
 * ### Example
 *     arr = ['a', 'b', 'c', 'd', 'e', 'f'];
 *     arr.at(0);  // => 'a'
 *     arr.at(6);  // => 'a'
 *     arr.at(13); // => 'b'
 *     arr.at(-1); // => 'f'
 *     arr.at(-8); // => 'e'
 *
 * @param {Number} index 添字
 * @return {Object} 添字で指定された要素
 */
function at(i) {
// Array.prototype.$method("at", function(i) {
  i%=this.length;
  i+=this.length;
  i%=this.length;
  return this[i];
}

/**
 * @method erase
 * @chainable
 * 指定したオブジェクトと一致した最初の要素を削除します。
 *
 * ### Example
 *     arr1 = ['a', 'b', 'b', 'c'];
 *     arr2 = arr1.erase('b'); // => ['a', 'b', 'c']
 *     arr1 === arr2;          // => true
 *
 * @param {Object} elm 削除したいオブジェクト
 */
function erase(elm) {
// Array.prototype.$method("erase", function(elm) {
  var index  = this.indexOf(elm);
  if (index >= 0) {
    this.splice(index, 1);
  }
  return this;
}


/**
 * @method clear
 * @chainable
 * 自身を空の配列にします。
 *
 * ### Example
 *     arr = [1, 2, [3, 4]];
 *     arr.clear(); // => []
 */
function clear(deep) {
// Array.prototype.$method("clear", function() {
  this.length = 0;
  return this;
}

/**
 * @method contains
 * 指定した要素が配列に含まれているかをチェックします。
 *
 * 比較には厳密な同値（三重イコール演算子 === で使われるのと同じ方法）を用います。
 *
 * ### Example
 *     arr = [6, 5, 2, 3, 1, 4];
 *     arr.contains(3);     // => true
 *     arr.contains(3, 4);  // => false
 *     arr.contains(3, -4); // => true
 *     arr.contains("6");   // => false
 *
 * @param {Object} item チェックするオブジェクト
 * @param {Number} [fromIndex=0] 検索を始める位置。負数を指定した場合は末尾からのオフセットと見なします。
 * @return {Boolean} チェックの結果
 */
function contains(item, fromIndex) {
// Array.prototype.$method("contains", function(item, fromIndex) {
  return this.indexOf(item, fromIndex) != -1;
}

/**
 * @method clone
 * 自身のコピーを生成して返します。
 *
 * ### Example
 *     arr1 = [1, 2, [3, 4]];
 *     arr2 = arr1.clone();      // => [1, 2, [3, 4]]
 *     arr1[2] === arr2[2];      // => true
 *     arr1[2][0] = 9;
 *     arr2;                     // => [1, 2, [9, 4]]
 *     arr1 = [1, 2, [3, 4]];
 *     arr2 = arr1.clone(true);  // => [1, 2, [3, 4]]
 *     arr1[2] === arr2[2];      // => false
 *     arr1[2][0] = 9;
 *     arr2;                     // => [1, 2, [3, 4]]
 *
 * @param {Boolean} [deep=false] 配列のネストをたどって複製するかどうか
 * @return {Object} 新しい配列
 */
function clone(deep) {
// Array.prototype.$method("clone", function(deep) {
  if (deep === true) ;
  else {
    return Array.prototype.slice.apply(this);
  }
}

/**
 * @method range
 * @chainable
 * 自身を等差数列（一定間隔の整数値の列）とします。
 *
 * - 引数が1つの場合、0～end（end含まず）の整数の配列です。  
 * - 引数が2つの場合、start～end（end含まず）の整数の配列です。  
 * - 引数が3つの場合、start～end（end含まず）かつ start + n * step (nは整数)を満たす整数の配列です。
 *
 * ### Example
 *     arr = [];
 *     arr.range(4);        // => [0, 1, 2, 3]
 *     arr.range(2, 5);     // => [2, 3, 4]
 *     arr.range(2, 14, 5); // => [2, 7, 12]
 *     arr.range(2, -3);    // => [2, 1, 0, -1, -2]
 *
 * @param {Number} start 最初の値（デフォルトは 0）
 * @param {Number} end 最後の値（省略不可）
 * @param {Number} [step=1または-1] 間隔
 */
function range(start, end, step) {
// Array.prototype.$method("range", function(start, end, step) {
  clear.call(this);
  // this.clear();
  
  if (arguments.length == 1) {
    for (var i=0; i<start; ++i) this[i] = i;
  }
  else if (start < end) {
    step = step || 1;
    if (step > 0) {
      for (var i=start, index=0; i<end; i+=step, ++index) {
        this[index] = i;
      }
    }
  }
  else {
    step = step || -1;
    if (step < 0) {
      for (var i=start, index=0; i>end; i+=step, ++index) {
        this[index] = i;
      }
    }
  }
  
  return this;
}

/**
 * @method each
 * @chainable
 * 要素を順番に渡しながら関数を繰り返し実行します。
 *
 * メソッドチェーンに対応していますが、このメソッドによって自分自身は変化しません。
 *
 * ###Reference
 * - [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 *
 * ### Example
 *     arr = [1, 2, 3];
 *     arr.each( function(elm) {
 *       console.log(elm * elm)
 *     });
 *     // => 1
 *     //    4
 *     //    9
 *
 * @param {Function} callback 各要素に対して実行するコールバック関数
 * @param {Object} [self=this] callback 内で this として参照される値
 */
function each() {
// Array.prototype.$method("each", function() {
  this.forEach.apply(this, arguments);
  return this;
}


// ==========
// 以下はes2015以降に存在するため、保留
// ==========


// /**
//  * @method find
//  * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初の要素を返します。
//  *
//  * どの要素もマッチしなければ undefined を返します。
//  *
//  * ### Example
//  *     arr = ['foo', 'bar', 'hoge', 'fuga'];
//  *     arr.find( function(elm) {
//  *       return elm.indexOf('a') >= 0;
//  *     });
//  *     // => 'bar'
//  *
//  * @param {Function} callback 各要素に対して実行するコールバック関数
//  * @param {Object} [self=this] callback 内で this として参照される値。デフォルトは呼び出し時の this。
//  * @return {Object} 条件にマッチした最初の要素、または undefined
//  */
// Array.prototype.$method("find", function(fn, self) {
//   var target = null;

//   this.some(function(elm, i) {
//     if (fn.call(self, elm, i, this)) {
//       target = elm;
//       return true;
//     }
//   });

//   return target;
// });

// /**
//  * @method findIndex
//  * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初のインデックスを返します。
//  *
//  * どの要素もマッチしなければ -1 を返します。
//  *
//  * ### Example
//  *     arr = ['foo', 'bar', 'hoge', 'fuga'];
//  *     arr.findIndex( function(elm) {
//  *       return elm.indexOf('a') >= 0;
//  *     });
//  *     // => 1
//  *
//  * @param {Function} callback 各要素に対して実行するコールバック関数
//  * @param {Object} [self=this] callback 内で this として参照される値。デフォルトは呼び出し時の this。
//  * @return {Object} 条件にマッチした最初のインデックス、または -1
//  */
// Array.prototype.$method("findIndex", function(fn, self) {
//   var target = -1;

//   this.some(function(elm, i) {
//     if (fn.call(self, elm, i, this)) {
//       target = i;
//       return true;
//     }
//   });

//   return target;
// });

/**
 * @method of
 * @static
 * ES6 準拠の of 関数です。可変長引数をとって Array オブジェクトにして返します。
 *
 * ### Example
 *     Array.of();        // => []
 *     Array.of(1, 2, 3); // => [1, 2, 3]
 *
 * @param {Object} elementN 生成する配列の要素
 * @return {Array} 生成した配列
 */
// Array.$method("of", function() {
//   return Array.prototype.slice.call(arguments);
// });

/**
 * @method from
 * @static
 * ES6 準拠の from 関数です。array-like オブジェクトかiterable オブジェクトから新しい配列を生成します。
 *
 * array-like オブジェクトとは、length プロパティを持ち、数字の添字でアクセス可能なオブジェクトのことです。
 * 通常の配列のほか、String、arguments、NodeList なども array-like オブジェクトです。
 *
 * iterable オブジェクトとは、Symbol.iterator プロパティを持つオブジェクトのことです。
 * 通常の配列のほか、String、arguments、NodeList なども iterable オブジェクトです。
 *
 * ### Example
 *     Array.from([1, 2, 3], function(elm){ return elm * elm} ); // => [1, 4, 9]
 *     Array.from("foo");                                        // => ["f", "o", "o"]
 *     Array.from( document.querySelectorAll("span"))            // => [Element, Element, Element,...]
 *
 * @param {Object} arrayLike 配列に変換する array-like オブジェクト
 * @param {Function} [callback] arrayLike のすべての要素に対して実行するマップ関数
 * @param {Object} [context] callback 内で this として参照される値
 * @return {Array} 生成した配列
 */
// Array.$method("from", function(arrayLike, callback, context) {
//   if (!Object(arrayLike).length) return [];

//   var result = [];
//   if (Symbol && Symbol.iterator && arrayLike[Symbol.iterator]) {
//       var iterator = arrayLike[Symbol.iterator]();
//       while (true) {
//           var iteratorResult = iterator.next();
//           if (iteratorResult.done) break;

//           var value = typeof callback === 'function' ? callback.bind(context || this)(iteratorResult.value) : iteratorResult.value;
//           result.push(value);
//       }
//       return result;
//   }

//   for (var i = 0, len = arrayLike.length; i < len; i++) {
//       result.push(arrayLike[i]);
//   }
//   return result.map(typeof callback == 'function' ? callback : function(item) {
//     return item;
//   }, context);
// });

/*
 * phina.js namespace
 */
var phina$1 = phina$1 || {};

// 一旦拡張
// $method.call(phina, "hoge", ...)としても良いが、書き換えが大変なため
phina$1.$method = function(...args) {
// phina.prototype.$method = function(...args) { // ng
  return $method.call(this, ...args)
};

// ;(function() {

/**
 * @class phina
 * # phina.js namespace
 * phina.js のネームスペースです。phina.js の提供する機能は（コア拡張以外）全てこのオブジェクトに入っています。
 *
 * ## phina.js のクラス定義について
 *
 * phina.js では独自のクラスシステムを実装しています。
 * phina.js のクラスの特徴としては new 構文を使用しないため、メソッドチェーンがしやすいことや、文字列でクラスを定義したり親クラスを指定したりできる点が挙げられます。
 * 文字列を使用できることで、クラスを定義する段階で親クラスが指定されていなくても、クラスを呼び出す段階で親クラスが定義されていればいいというメリットがあります。
 *
 * クラスの定義には {@link #createClass}, {@link #define} を使用します。詳しい使い方はそれぞれの関数の項を参照してください。
 *
 * ## クラスについての補足
 *
 * phina.js のクラスでは superClass を指定すると以下のメソッドが自動で追加されます。
 *
 * - superInit(): 親クラスのコンストラクタを呼び出す（初期化）
 * - superMethod(): 親クラスのメソッドを呼び出す
 *
 * superInit は引数を変えることで親クラスのコンストラクタを呼ぶときの引数を変えられます。
 * superMethod は一つ目の引数に呼び出したい親クラスのメソッド名を文字列で、二つ目以降に呼び出したいメソッドの引数を渡します。
 *
 * また phina.js のクラスでは以下の特別な役割をもったプロパティ、メソッドが存在します。
 *
 * - _accessor: アクセッサー（ゲッターとセッター）を定義するためのプロパティ
 * - _static: static メンバを定義するためのプロパティ
 * - _defined(): クラスが定義されたときに呼ばれるメソッド
 *
 * ### _accessor の使用例
 *     var Class = phina.createClass({
 *       init: function() {
 *         ...
 *       },
 *
 *       _accessor: function() {
 *         value: {
 *           get: function() {
 *             return this._value;
 *           },
 *
 *           set: function(v) {
 *             this._value = v;
 *             console.log('valueがセットされました！');
 *           }
 *         }
 *       }
 *     });
 *
 * ### _static の使用例
 *     var Class = phina.createClass({
 *       init: function() {
 *         ...
 *       },
 *
 *       _static: {
 *
 *         staticProperty1: 1,
 *         staticProperty2: 2,
 *
 *         staticMethod1: function(){},
 *         staticMethod2: function(){}
 *
 *       }
 *     });
 *
 *     console.log(Class.staticProperty1); // => 1
 *
 * ### _defined の使用例
 *     var Class = phina.createClass({
 *       init: function() {
 *       },
 *
 *       _defined: function() {
 *         console.log('defined!');
 *       }
 *     }); // => defined!
 */

/**
 * @property {String} [VERSION = <%= version %>]
 * phina.js のバージョンです。
 *
 * @member phina
 * @static
 */
phina$1.VERSION = "0.2.3";

/**
 * @method isNode
 * Node.js の module かどうかをチェックします。
 *
 * @member phina
 * @static
 */
phina$1.$method('isNode', function() {
  return ("object" !== 'undefined');
});

/**
 * @method namespace
 * 引数は関数で、その関数内での this は phina になります。
 *
 * @param {Function} fn 関数
 * @member phina
 * @static
 */
phina$1.$method('namespace', function(fn) {
  fn.call(this);
});

var ns = phina$1.isNode() ? __webpack_require__.g : window;

/**
 * @property {Object} global
 * Node.js なら global ブラウザなら window を返します。
 * ゲッターのみ定義されています。
 *
 * @member phina
 * @readonly
 * @static
 */
// phina.accessor('global', {
accessor.call(phina$1, 'global', {
  get: function() {
    return ns;
  },
});


/**
 * @method testUA
 * 引数の RegExp オブジェクトとユーザーエージェントを比較して返します。
 *
 * @param {RegExp}
 * @return {Boolean}
 * @member phina
 * @static
 */
phina$1.$method('testUA', function(regExp) {
  if (!phina$1.global.navigator) return false;
  var ua = phina$1.global.navigator.userAgent;
  return regExp.test(ua);
});

/**
 * @method isAndroid
 * Android かどうかを返します。
 *
 * @return {Boolean} Android かどうか
 * @member phina
 * @static
 */
phina$1.$method('isAndroid', function() {
  return phina$1.testUA(/Android/);
});

/**
 * @method isIPhone
 * iPhone かどうかを返します。
 *
 * @return {Boolean} iPhone かどうか
 * @member phina
 * @static
 */
phina$1.$method('isIPhone', function() {
  return phina$1.testUA(/iPhone/);
});

/**
 * @method isIPad
 * iPad かどうかを返します。
 *
 * @return {Boolean} iPad かどうか
 * @member phina
 * @static
 */
phina$1.$method('isIPad', function() {
  return phina$1.testUA(/iPad/);
});

/**
 * @method isIOS
 * iOS かどうかを返します。
 *
 * @return {Boolean} iOS かどうか
 * @member phina
 * @static
 */
phina$1.$method('isIOS', function() {
  return phina$1.testUA(/iPhone|iPad/);
});

/**
 * @method isMobile
 * モバイルかどうかを返します。具体的には Android, iPhone, iPad のいずれかだと true になります。
 *
 * @return {Boolean} モバイルかどうか
 * @member phina
 * @static
 */
phina$1.$method('isMobile', function() {
  return phina$1.testUA(/iPhone|iPad|Android/);
});

// // support node.js
// if (phina.isNode()) {
//   module.exports = phina;
// }

// ns.phina = phina;

// })(this);


phina$1.namespace(function() {

  /**
   * @method createClass
   * クラスを作成する関数です。
   * 親クラスの指定は文字列でも可能です。
   * 何も継承しない場合 superClass の指定は不要です。また、親クラスを継承している場合、コンストラクタ内で this.superInit() を実行して親クラスを初期化することが必須です。
   *
   * ### Example
   *     var Class = phina.createClass({
   * 　　  superClass: 'namespace.Super',//親クラス継承
   *
   * 　　  //メンバ変数
   * 　　  member1: 100,
   * 　　  member2: 'test',
   * 　　  member3: null,
   *
   *
   * 　　  //コンストラクタ
   * 　　  //Class()を呼び出したとき実行される
   * 　　  init: function(a, b){
   * 　　    //スーパークラス(継承したクラス)のinit
   * 　　    this.superInit(a, b);
   * 　　    this.a = a;
   * 　　    this.b = b;
   * 　　  },
   * 　　
   * 　　  //メソッド
   * 　　  method1: function(){},
   * 　　  method2: function(){},
   * 　　
   * 　　});
   *
   * @param {Object}
   * @return {Function} クラス
   * @member phina
   * @static
   */
  phina$1.$method('createClass', function(params) {

    var _class = function() {
      var instance = new _class.prototype._creator();
      _class.prototype.init.apply(instance, arguments);
      return instance;
    };

    if (params.superClass) {
      _class.prototype = Object.create(params.superClass.prototype);
      params.init.owner = _class;
      _class.prototype.superInit = function() {
        this.__counter = this.__counter || 0;

        var superClass = this._hierarchies[this.__counter++];
        var superInit = superClass.prototype.init;
        superInit.apply(this, arguments);

        this.__counter = 0;
      };
      _class.prototype.superMethod = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var name = args.shift();
        this.__counters = this.__counters || {};
        this.__counters[name] = this.__counters[name] || 0;

        var superClass = this._hierarchies[ this.__counters[name]++ ];
        var superMethod = superClass.prototype[name];
        var rst = superMethod.apply(this, args);

        this.__counters[name] = 0;

        return rst;
      };
      _class.prototype.constructor = _class;
    }


    // //
    // params.forIn(function(key, value) {
    //   if (typeof value === 'function') {
    //     _class.$method(key, value);
    //   }
    //   else {
    //     _class.prototype[key] = value;
    //   }
    // });
    // 継承
    $extend.call(_class.prototype, params);
    // _class.prototype.$extend(params);

    // 継承用
    _class.prototype._hierarchies = [];
    var _super = _class.prototype.superClass;
    while(_super) {
      _class.prototype._hierarchies.push(_super);
      _super = _super.prototype.superClass;
    }

    // accessor
    if (params._accessor) {
      forIn.call(params._accessor, function(key, value) {
      // params._accessor.forIn(function(key, value) {
        accessor.call(_class.prototype, key, value);
        // _class.prototype.accessor(key, value);
      });
      // _class.prototype = Object.create(_class.prototype, params._accessor);
    }

    _class.prototype._creator = function() { return this; };
    _class.prototype._creator.prototype = _class.prototype;

    // static property/method
    if (params._static) {
      $extend.call(_class, params._static);
      // _class.$extend(params._static);
    }

    if (params._defined) {
      params._defined.call(_class, _class);
    }

    return _class;
  });

  /**
   * @method using
   * 文字列で定義したパスを使ってオブジェクトを取り出します。パスは , . / \ :: で区切ることができます。
   * {@link #phina.register} で登録したオブジェクトを取り出すときなどに使うと便利な関数です。
   *
   * ### Example
   *     hoge = {
   *       foo: {
   *         bar: {
   *           num: 100
   *         }
   *       }
   *     };
   *     var bar = phina.using('hoge.foo.bar');
   *     console.log(bar.num); // => 100
   *
   * @param {String} path オブジェクトへのパス
   * @return {Object} 取り出したオブジェクト
   * @member phina
   * @static
   */
  phina$1.$method('using', function(path) {
    if (!path) {
      return phina$1.global;
    }

    var pathes = path.split(/[,.\/ ]|::/);
    var current = phina$1.global;

    pathes.forEach(function(p) {
      current = current[p] || (current[p]={});
    });

    return current;
  });

  /**
   * @method register
   * パス指定でオブジェクトを登録する関数です。パスは , . / \ :: で区切ることができます。
   *
   * ### Example
   *     phina.register('hoge.foo.bar', {
   *       num: 100,
   *     });
   *     console.log(hoge.foo.bar.num); // => 100
   *
   * @param {String} path 登録するオブジェクトのパス
   * @param {Object} _class 登録するオブジェクト
   * @return {Object} 登録したオブジェクト
   * @member phina
   * @static
   */
  phina$1.$method('register', function(path, _class) {
    var pathes = path.split(/[,.\/ ]|::/);
    // var className = pathes.last;
    var className = last.get.call(pathes);
    var parentPath = path.substring(0, path.lastIndexOf('.')); // ここを直さないとピリオド区切り以外は無効？
    var parent = phina$1.using(parentPath);

    parent[className] = _class;

    return _class;
  });

  var _classDefinedCallback = {};

  /**
   * @method define
   * クラスを定義する関数です。使い方は {@link #createClass} とほとんど同じです。
   * ただし、引数は2つあり、第一引数は定義するクラスのパスを文字列で渡します。第二引数のオブジェクトは {@link #createClass} の引数と同じようにします。
   * {@link #createClass} と違い、変数に代入する必用がなく、パス指定でクラスを定義できます。
   * 内部的には {@link #register}, {@link #using} を使用しているため、パスは , . / \ :: で区切ることができます。
   *
   * ### Example
   *     phina.define('namespace.Class', {
   *       superClass: 'namespace.Super',//親クラス継承
   *
   *       //メンバ変数
   *       member1: 100,
   *       member2: 'test',
   *       member3: null,
   *
   *
   *       //コンストラクタ
   *       //Class()を呼び出したとき実行される
   *       init: function(a, b){
   *         //スーパークラス(継承したクラス)のinit
   *         this.superInit(a, b);
   *         this.a = a;
   *         this.b = b;
   *       },
   *
   *       //メソッド
   *       method1: function(){},
   *       method2: function(){},
   *
   *     });
   *
   * @param {String} path パス
   * @param {Object} params オブジェクト
   * @return {Function} 定義したクラス
   * @member phina
   * @static
   */
  phina$1.$method('define', function(path, params) {
    if (params.superClass) {
      if (typeof params.superClass === 'string') {
        var _superClass = phina$1.using(params.superClass);
        if (typeof _superClass != 'function') {
          if (!_classDefinedCallback[params.superClass]) {
            _classDefinedCallback[params.superClass] = [];
          }
          _classDefinedCallback[params.superClass].push(function() {
            phina$1.define(path, params);
          });

          return ;
        }
        else {
          params.superClass = _superClass;
        }
      }
      else {
        params.superClass = params.superClass;
      }
    }

    var _class = phina$1.createClass(params);
    accessor.call(_class.prototype, 'className', {
    // _class.prototype.accessor('className', {
      get: function() {
        return path;
      },
    });

    phina$1.register(path, _class);

    if (_classDefinedCallback[path]) {
      _classDefinedCallback[path].forEach(function(callback) {
        callback();
      });
      _classDefinedCallback[path] = null;
    }

    return _class;
  });

  /**
   * @method globalize
   * phina.js が用意している全てのクラスをグローバルに展開します。（具体的には phina が持つオブジェクトが一通りグローバルに展開されます。）
   * この関数を実行することで、いちいち global からたどっていかなくても phina.js の用意しているクラスをクラス名だけで呼び出すことができます。
   *
   * ### Example
   *     phina.globalize();
   *
   * @member phina
   * @static
   */
  phina$1.$method('globalize', function() {
    forIn.call(phina$1, function(key, value) {

      if (typeof value !== 'object') return ;

      forIn.call(value, function(key, value) {
      // value.forIn(function(key, value) {
        // if (phina.global[key]) {
        //   console.log(ns, key);
        //   phina.global['_' + key] = value;
        // }
        // else {
        //   phina.global[key] = value;
        // }
        phina$1.global[key] = value;
      });
    });
  });

  phina$1._mainListeners = [];
  phina$1._mainLoaded = false;

  /**
   * @method main
   * phina.js でプログラミングする際、メインの処理を記述するための関数です。基本的に phina.js でのプログラミングではこの中にプログラムを書いていくことになります。
   *
   * ### Example
   *     phina.main(function() {
   *       //ここにメインの処理を書く
   *     });
   *
   * @param {Function} func メインの処理
   * @member phina
   * @static
   */
  phina$1.$method('main', function(func) {
    if (phina$1._mainLoaded) {
      func();
    }
    else {
      phina$1._mainListeners.push(func);
    }
  });

  var doc = phina$1.global.document;
  if (phina$1.global.addEventListener && doc && doc.readyState !== 'complete') {
    phina$1.global.addEventListener('load', function() {
      var run = function() {
        var listeners = clone.call(phina$1._mainListeners);
        // var listeners = phina._mainListeners.clone();
        clear.call(phina$1._mainListeners);
        // phina._mainListeners.clear();
        listeners.forEach(function(func) {
        // listeners.each(function(func) {
          func();
        });

        // main 内で main を追加している場合があるのでそのチェック
        if (phina$1._mainListeners.length > 0) {
          run();
        }
        else {
          phina$1._mainLoaded = true;
        }
      };
      // ちょっと遅延させる(画面サイズ問題)
      setTimeout(run);
    });
  }
  else {
    phina$1._mainLoaded = true;
  }
});

/**
 * @class phina.util.EventDispatcher
 * # イベントを扱うためのクラス
 * イベントを扱うためのメソッドやプロパティを定義しているクラスです。
 * phina.js が提供するクラスの多くはこの EventDispatcher クラスの子孫となっているため、
 * ほとんどのオブジェクトで容易にイベントを扱うことができます。
 *
 * # 少し説明
 * this.onxxx = function(){}; でもイベントリスナを設定できるが、あまり推奨しない。
 * 呼び出される順序は、まず this.onxxxx が呼び出され、あとは on() で登録した順番。
 * @memberof phina
 */
class EventDispatcher {

  constructor() {
    this._listeners = {};
  }

  /**
   * @method on
   * @chainable
   * イベントリスナを登録します。
   *
   * １つのイベントに対するイベントリスナはいくつでも登録することができます。
   *
   * 標準のイベントを検知するには、オブジェクトの {@link Object2D#interactive} プロパティが true である必要があります。
   * {@link Object2D#interactive} プロパティを設定するには {@link Object2D#setInteractive} メソッドを呼び出してください。
   *
   * また、{@link #flare} や {@link #fire} によって定義したカスタムイベントに対するイベントリスナも登録することが
   * できます。カスタムイベントのイベントリスナは {@link Object2D#interactive} プロパティによらず呼び出されます。
   * なおカスタムイベントのオブジェクトは Event オブジェクトとは異なります。
   *
   * ###Reference
   * 標準のイベントの種類は以下を参照してください。
   * - [Event reference | MDN]( https://developer.mozilla.org/en-US/docs/Web/Events )
   *
   * ### Example
   *     var shape = CircleShape().addChildTo(this).setInteractive(true).setPosition(50, 50);
   *     shape.on("touchstart", function(e){
   *       this.color = "blue";
   *     });
   *
   * @param {String} type イベントの種類
   * @param {Function} listener イベントリスナとなる関数
   * @param {Object} listener.event Event オブジェクト、またはカスタムイベントのオブジェクト
   */
  on(type, listener) {
    if (this._listeners[type] === undefined) {
      this._listeners[type] = [];
    }

    this._listeners[type].push(listener);
    return this;
  }

  /**
   * @method off
   * @chainable
   * イベントリスナを削除します。
   *
   * ある種類のイベントに対するイベントリスナをすべて削除するには {@link #clear} を使用してください。
   *
   * @param {String} type イベントの種類
   * @param {Function} listener イベントリスナ関数
   */
  off(type, listener) {
    var listeners = this._listeners[type];
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index,1);
    }
    return this;
  }

  /**
   * @method fire
   * @chainable
   * カスタムイベントを表すオブジェクトを指定してカスタムイベントを発火します。
   *
   * @param {Object} event カスタムイベントを表すオブジェクト
   * @param {String} event.type カスタムイベントの名前
   */
   fire(e) {
    e.target = this;
    var oldEventName = 'on' + e.type;
    if (this[oldEventName]) this[oldEventName](e);

    var listeners = this._listeners[e.type];
    if (listeners) {
      // var temp = listeners.clone();
      var temp = listeners.slice(0);
      for (var i=0,len=temp.length; i<len; ++i) {
          temp[i].call(this, e);
      }
    }

    return this;
  }

  /**
   * @method flare
   * @chainable
   * イベント名を指定してカスタムイベントを発火します。
   *
   * param 引数を指定することによりカスタムイベントに任意のプロパティを設定することができます。
   * これにより、呼び出し元がイベントリスナに任意の値を渡すことができます。
   * （ただし target プロパティには必ず自分自身が格納されます。）
   *
   * ### Example
   *     //
   *
   * @param {String} type カスタムイベントの名前
   * @param {Object} [param] カスタムイベントにプロパティを設定するためのオブジェクト
  */
  flare(type, param) {
    var e = {type:type};
    if (param) {
      forIn.call(param, function(key, val) {
      // param.forIn(function(key, val) {
        e[key] = val;
      });
    }
    this.fire(e);

    return this;
  }

  /**
   * @method one
   * @chainable
   * 一度だけ実行されるイベントリスナを登録します。
   *
   * 指定したイベントリスナが一度実行されると、そのイベントリスナは削除されます。それ以外の挙動は {@link #on} と同じです。
   *
   * @param {String} type イベントの種類
   * @param {Function} listener イベントリスナとなる関数
   * @param {Object} listener.event Event オブジェクト、またはカスタムイベントのオブジェクト
   */
  one(type, listener) {
    var self = this;

    var func = function() {
      var result = listener.apply(self, arguments);
      self.off(type, func);
      return result;
    };

    this.on(type, func);

    return this;
  }

  /**
   * @method has
   * イベントリスナが登録されているかどうかを調べます。
   *
   * 指定したイベントの種類に対するイベントリスナが登録されている場合は true、そうでない場合は false を返します。
   *
   * @param {String} type イベントの種類
   * @return {Boolean} 指定したイベントのイベントリスナが登録されているかどうか
   */
  has(type) {
    return (this._listeners[type] !== undefined && this._listeners[type].length !== 0) || !!this['on' + type];
  }

  /**
   * @method clear
   * @chainable
   * ある種類のイベントに対するイベントリスナをすべて削除します。
   *
   * 特定のイベントリスナのみを削除するには {@link #off} を使用してください。
   *
   * @param {String} type イベントの種類
   */
  clear(type) {
    var oldEventName = 'on' + type;
    if (this[oldEventName]) delete this[oldEventName];
    this._listeners[type] = [];
    return this;
  }
}

/**
 * @method addEventListener
 * {@link #on} のエイリアスです。
 */
/**
 * @method removeEventListener
 * {@link #off} のエイリアスです。
 */
/**
 * @method clearEventListener
 * {@link #clear} のエイリアスです。
 */
/**
 * @method hasEventListener
 * {@link #has} のエイリアスです。
 */
/**
 * @method dispatchEvent
 * {@link #fire} のエイリアスです。
 */
/**
 * @method dispatchEventByType
 * {@link #flare} のエイリアスです。
 */
const methodMap = {
  addEventListener: 'on',
  removeEventListener: 'off',
  clearEventListener: 'clear',
  hasEventListener: 'has',
  dispatchEvent: 'fire',
  dispatchEventByType: 'flare',
};
// methodMap.forIn(function(old, name) {
forIn.call(methodMap, function(old, name) {
  // EventDispatcher.prototype.$method(old, phina.util.EventDispatcher.prototype[name]);
  $method.call(EventDispatcher.prototype, old, EventDispatcher.prototype[name]);
});

/**
 * @class phina.util.Flow
 * tick management class
 * @extends phina.util.EventDispatcher
 */
class Flow extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(func, wait) {
    super();

    this.status = 'pending';
    this.resultValue = null;
    this._queue = [];
    this.func = func;

    if (wait !== true) {
      var self = this;
      var resolve = function() {
        self.resolve.apply(self, arguments);
        self.status = 'resolved';
      };
      var reject = function() {
        self.reject.apply(self, arguments);
        self.status = 'rejected';
      };

      this.func(resolve, reject);
    }
  }

  /*
   * 成功
   */
  resolve(arg) {
    this.resultValue = arg;

    // キューに積まれた関数を実行
    this._queue.forEach(function(func) {
      func(this.resultValue);
    }, this);
    // this._queue.clear();
    clear.call(this._queue);
  }

  /*
   * 失敗
   */
  reject() {

  }

  /*
   * 非同期終了時の処理を登録
   */
  then(func) {
    // 成功ステータスだった場合は即実行
    if (this.status === 'resolved') {
      var value = func(this.resultValue);
      return Flow.resolve(value);
    }
    else {
      var flow = new Flow(function(resolve) {
        resolve();
      }, true);

      this._queue.push(function(arg) {
        var resultValue = func(arg);

        if (resultValue instanceof Flow) {
          resultValue.then(function(value) {
            flow.resolve(value);
          });
        }
        else {
          flow.resolve(resultValue);
        }
      });

      return flow;
    }
  }

  static resolve(value) {
    if (value instanceof Flow) {
      return value;
    }
    else {
      var flow = new Flow(function(resolve) {
        resolve(value);
      });
      return flow;
    }
  }

  static all(flows) {
    return new Flow(function(resolve) {
      var count = 0;

      var args = [];

      flows.forEach(function(flow) {
        flow.then(function(d) {
          ++count;
          args.push(d);

          if (count >= flows.length) {
            resolve(args);
          }
        });
      });
    });
  }

}

/**
 * @class phina.util.Ticker
 * tick management class
 * @extends phina.util.EventDispatcher
 */
class Ticker extends EventDispatcher {

  // /** 経過フレーム数 */
  // frame = null

  // /** 1フレームの経過時間 */
  // deltaTime = null
  
  // /** 全体の経過時間 */
  // elapsedTime = null

  /**
   * @constructor
   */
  constructor() {
    super();

    this.fps = 30;
    this.frame = 0;
    this.deltaTime = 0;
    this.elapsedTime = 0;
    this.isPlaying = true;
    this.runner = Ticker.runner;
  }

  tick(func) {
    this.on('tick', func);
  }

  untick(func) {
    this.off('tick', func);
  }

  run() {
    var now = (new Date()).getTime();
    // 1フレームに掛かった時間
    this.deltaTime = now - this.currentTime;
    // 全体の経過時間
    this.elapsedTime = now - this.startTime;

    var start = this.currentTime = now;
    this.flare('tick');
    var end = (new Date()).getTime();

    // フレームを更新
    this.frame += 1;

    // calculate elapsed time
    var elapsed = end-start;

    // calculate next waiting time
    var delay = Math.max(this.frameTime-elapsed, 0);

    return delay;
  }

  start() {
    var self = this;
    this.isPlaying = true;
    this.startTime = this.currentTime = (new Date()).getTime();
    var fn = function() {
      if (self.isPlaying) {
        var delay = self.run();
        self.runner(fn, delay);
      }
    };
    fn();

    return this;
  }

  resume() {
    // TODO: 
  }

  stop() {
    this.isPlaying = false;
    return this;
  }

  rewind() {
    // TODO: 
  }

  get fps() { return this._fps; }
  set fps(v) {
    this._fps = v;
    this.frameTime = 1000/this._fps;
  }

  static runner(run, delay) {
    setTimeout(run, delay);
  }
  
}

/**
 * @class phina.util.Random
 * # 乱数を扱うためのクラス
 * 乱数を扱うためのメソッドやプロパティを定義しているクラスです。
 */
class Random {

  /**
   * @property {Number} [seed = 1]
   * 乱数のシードです。
   */
  // seed = 1

  /**
   * @constructor
   * コンストラクタです。引数で {@link #seed} を設定できます。
   * 
   * @param {Number} [seed = (Date.now()) || 1] シード
   */
  constructor(seed) {
    this.seed = seed || (Date.now()) || 1;
  }

  /**
   * @method random
   * 0~1の乱数を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @return {Number} 0~1 の乱数
   */
  random() {
    var seed = this.seed;
    seed = seed ^ (seed << 13);
    seed = seed ^ (seed >>> 17);
    seed = (seed ^ (seed << 5));

    this.seed = seed;

    return (seed >>> 0) / phina.util.Random.MAX;
  }

  /**
   * @method randint
   * 指定された範囲内でランダムな整数値を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな整数値
   */
  randint(min, max) {
    return Math.floor( this.random()*(max-min+1) ) + min;
  }

  /**
   * @method randfloat
   * 指定された範囲内でランダムな数値を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな数値
   */
  randfloat(min, max) {
    return this.random()*(max-min)+min;
  }

  /**
   * @method randbool
   * ランダムな真偽値を返します。引数で百分率を指定できます。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} [perecent = 50] 真になる百分率
   * @return {Boolean} ランダムな真偽値
   */
  randbool(percent) {
    return this.random() < (percent === undefined ? 50 : percent) / 100;
  }

  /**
   * @method randarray
   * 任意の範囲でランダムな整数値を格納した任意の長さの配列を返します。実行すると {@link #seed} は変わってしまいます。
   * 
   * @param {Number} [len = 100] 配列の長さ
   * @param {Number} [min = 0] 範囲の最小値
   * @param {Number} [max = 100] 範囲の最大値
   * @return {Number} ランダムな整数値の入った配列
   */
  randarray(len, min, max) {
    len = len || 100;
    min = min || 0;
    max = max || 100;

    return (len).map(function() {
      return this.randint(min, max);
    }, this);
  }

  get seed() { return this._seed; }
  set seed(v) { this._seed = (v >>> 0) || 1; }

  /**
   * @method getSeed 
   * {@link #seed} の値を取得します。
   * 
   * @return {Number} シード
   * @static
   */
  static getSeed() {
    return this.seed;
  }

  /**
   * @method setSeed
   * {@link #seed} の値をセットします。
   * 
   * @param {Number} [seed = 1] シード
   * @static
   * @chainable
   */
  static setSeed(seed) {
    this.seed = (seed >>> 0) || 1;
    return this;
  }

  /**
   * @method random
   * 0~1の乱数を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #random} と同じです。
   * 
   * @return {Number} 0~1 の乱数
   * @static
   */
  static random() {
    this.seed = this.xor32(this.seed);
    return (this.seed >>> 0) / phina.util.Random.MAX;
  }

  /**
   * @method randint
   * 指定された範囲内でランダムな整数値を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randint} と同じです。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな整数値
   * @static
   */
  static randint(min, max) {
    return phina.global.Math.floor( this.random()*(max-min+1) ) + min;
  }

  /**
   * @method randfloat
   * 指定された範囲内でランダムな数値を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randfloat} と同じです。
   * 
   * @param {Number} min 範囲の最小値
   * @param {Number} max 範囲の最大値
   * @return {Number} ランダムな数値
   * @static
   */
  static randfloat(min, max) {
    return this.random()*(max-min)+min;
  }

  /**
   * @method randbool
   * ランダムな真偽値を返します。引数で百分率を指定できます。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randbool} と同じです。
   * 
   * @param {Number} [perecent = 50] 真になる百分率
   * @return {Number} ランダムな真偽値
   * @static
   */
  static randbool(perecent) {
    return this.randint(0, 99) < (perecent || 50);
  }

  /**
   * @method randarray
   * 任意の範囲でランダムな整数値を格納した任意の長さの配列を返します。実行すると {@link #seed} は変わってしまいます。
   * インスタンスメソッドの {@link #randarray} と同じです。
   * 
   * @param {Number} [len = 100] 配列の長さ
   * @param {Number} [min = 0] 範囲の最小値
   * @param {Number} [max = 100] 範囲の最大値
   * @return {Number} ランダムな整数値の入った配列
   * @static
   */
  static randarray(len, min, max) {
    len = len || 100;
    min = min || 0;
    max = max || 100;

    return (len).map(function() {
      return this.randint(min, max);
    }, this);
  }


  /**
   * @method xor32
   * xorshift を用いて疑似乱数列を生成します。
   * 
   * @param {Number} seed
   * @return {Number} 疑似乱数列
   * @static
   */
  static xor32(seed) {
    seed = seed ^ (seed << 13);
    seed = seed ^ (seed >>> 17);
    seed = (seed ^ (seed << 5));

    return seed;
  }

  /**
   * @method uuid
   * uuid を生成して返します。
   * 
   * @return {String} uuid
   * @static
   */
  //http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  static uuid() {
    var d = new Date().getTime();
    if(phina.global.performance && typeof phina.global.performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

}

/**
 * @property {Number} MAX
 * 内部的に使用される定数です。
 * 
 * @static
 */
Random.MAX = 4294967295;

/**
 * @property {Number} [seed = (Date.now())] シード
 * static メソッドの乱数のシードです。
 * 
 * @static
 */
Random.seed = (Date.now());


// prototype拡張はしない
// Math.$method("randint", function(min, max) {
//   return phina.util.Random.randint(min, max);
// });

// Math.$method("randfloat", function(min, max) {
//   return phina.util.Random.randfloat(min, max);
// });

/**
 * @class phina.util.Support
 * 
 */
class Support {}Support.canvas = !!phina$1.global.CanvasRenderingContext2D;
Support.webGL = (function() {
  return !!phina$1.global.CanvasRenderingContext2D && !!document.createElement('canvas').getContext('webgl');
})();
Support.webAudio = !!phina$1.global.AudioContext || !!phina$1.global.webkitAudioContext || !!phina$1.global.mozAudioContext;

/**
 * @class phina.util.Grid
 */
class Grid {

  // /** 幅 */
  // width: 640,
  // /** 列数 */
  // columns: 12,
  // /** ループ */
  // loop: false,
  // /** オフセット値 */
  // offset: 0,

  /**
   * @constructor
   */
  constructor() {
    if (typeof arguments[0] === 'object') {
      var param = arguments[0];
      var width = param.width || 640;
      var columns = param.columns || 12;
      var loop = param.loop || false;
      var offset = param.offset || 0;
    }
    else {
      var width   = arguments[0] || 640;
      var columns = arguments[1] || 12;
      var loop    = arguments[2] || false;
      var offset = arguments[3] || 0;
    }

    this.width = width;
    this.columns = columns;
    this.loop = loop;
    this.offset = offset;
    this.unitWidth = this.width/this.columns;
  }

  // スパン指定で値を取得(負数もok)
  span(index) {
    if (this.loop) {
      index += this.columns;
      index %= this.columns;
    }
    return this.unitWidth * index + this.offset;
  }

  //
  unit() {
    return this.unitWidth;
  }

  center(offset) {
    var index = offset || 0;
    return (this.width/2) + (this.unitWidth * index);
  }

}

/**
 * @class global.Math
 * # 拡張した Math クラス
 * 数学的な処理を扱う Math クラスを拡張しています。
 * 
 * 全てstaticメンバーです。
 */

/**
 * @static
 * @method clamp
 * 指定した値を指定した範囲に収めた結果を返します。
 *
 * ### Example
 *     Math.clamp(120, 0, 640); // => 120
 *     Math.clamp(980, 0, 640); // => 640
 *     Math.clamp(-80, 0, 640); // => 0
 *
 * @param {Number} value 値
 * @param {Number} min  範囲の下限
 * @param {Number} max  範囲の上限
 * @return {Number} 丸めた結果の値
 */
function clamp(value, min, max) {
  return (value < min) ? min : ( (value > max) ? max : value );
}

/**
 * @property DEG_TO_RAD
 * 度をラジアンに変換するための定数です。
 */
var DEG_TO_RAD = Math.PI/180;

/**
 * @class phina.util.Tween
 * @extends phina.util.EventDispatcher
 * 
 */
class Tween extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(target) {
    super();

    this.time = 0;
  }

  fromTo(target, beginProps, finishProps, duration, easing) {
    this.target = target;
    this.beginProps = beginProps;
    this.finishProps = finishProps;
    this.duration = duration || 1000;
    this.easing = easing;

    // setup
    this.changeProps = {};
    for (var key in beginProps) {
        this.changeProps[key] = finishProps[key] - beginProps[key];
    }

    return this;
  }

  to(target, finishProps, duration, easing) {
    var beginProps = {};

    for (var key in finishProps) {
      beginProps[key] = target[key];
    }

    this.fromTo(target, beginProps, finishProps, duration, easing);

    return this;
  }

  from(target, beginProps, duration, easing) {
      var finishProps = {};

      for (var key in beginProps) {
        finishProps[key] = target[key];
        target[key] = beginProps[key];
      }

      this.fromTo(target, beginProps, finishProps, duration, easing);

      return this;
  }

  by(target, props, duration, easing) {
    var beginProps = {};
    var finishProps = {};

    for (var key in props) {
      beginProps[key] = target[key];
      finishProps[key] = target[key] + props[key];
    }

    this.fromTo(target, beginProps, finishProps, duration, easing);

    return this;
  }

  yoyo() {
    var temp = this.beginProps;
    this.beginProps = this.finishProps;
    this.finishProps = temp;
    // this.changeProps.forIn(function(key, value, index) {
    forIn.call(this.changeProps, function(key, value, index) {
      this.changeProps[key] = -value;
      this.target[key] = this.beginProps[key];
    }, this);
    // TODO: easing も反転させる
    // this.easing = easing;
    return this;
  }

  gain(time) {
    this.seek(this.time + time);
  }

  forward(time) {
    this.seek(this.time + time);
  }

  backward(time) {
    this.seek(this.time - time);
  }

  seek(time) {
    // this.time = Math.clamp(time, 0, this.duration);
    this.time = clamp(time, 0, this.duration);

    // this.beginProps.forIn(function(key, value) {
    forIn.call(this.beginProps, function(key, value) {
      var v = this.easing(this.time, value, this.changeProps[key], this.duration);
      this.target[key] = v;
    }, this);

    return this;
  }

  get easing() { return this._easing; }
  set easing(v) {
    this._easing = Tween.EASING[v] || Tween.EASING.default;
  }

}

/**
 * @static
 * イージング
 * ### Reference
 * - <http://coderepos.org/share/wiki/JSTweener>
 * - <http://coderepos.org/share/browser/lang/javascript/jstweener/trunk/src/JSTweener.js>
 * - <http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js>
 * - <http://hosted.zeh.com.br/tweener/docs/en-us/misc/transitions.html>
 */
Tween.EASING = {

  /** default */
  "default": function(t, b, c, d) {
    return c*t/d + b;
  },
  /** linear */
  linear: function(t, b, c, d) {
    return c*t/d + b;
  },
  /** swing */
  swing: function(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  /** easeInQuad */
  easeInQuad: function(t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  /** easeOutQuad */
  easeOutQuad: function(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  /** easeInOutQuad */
  easeInOutQuad: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 *((--t)*(t-2) - 1) + b;
  },
  /** defeInCubic */
  easeInCubic: function(t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  /** easeOutCubic */
  easeOutCubic: function(t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  /** easeInOutCubic */
  easeInOutCubic: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  /** easeOutInCubic */
  easeOutInCubic: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutCubic(t*2, b, c/2, d);
    return Tween.EASING.easeInCubic((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInQuart */
  easeInQuart: function(t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  /** easeOutQuart */
  easeOutQuart: function(t, b, c, d) {
    return -c *((t=t/d-1)*t*t*t - 1) + b;
  },
  /** easeInOutQuart */
  easeInOutQuart: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 *((t-=2)*t*t*t - 2) + b;
  },
  /** easeOutInQuart */
  easeOutInQuart: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutQuart(t*2, b, c/2, d);
    return Tween.EASING.easeInQuart((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInQuint */
  easeInQuint: function(t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  /** easeOutQuint */
  easeOutQuint: function(t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  /** easeInOutQuint */
  easeInOutQuint: function(t, b, c, d) {
    if((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  /** easeOutInQuint */
  easeOutInQuint: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutQuint(t*2, b, c/2, d);
    return Tween.EASING.easeInQuint((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInSine */
  easeInSine: function(t, b, c, d) {
    return -c * Math.cos(t/d *(Math.PI/2)) + c + b;
  },
  /** easeOutSine */
  easeOutSine: function(t, b, c, d) {
    return c * Math.sin(t/d *(Math.PI/2)) + b;
  },
  /** easeInOutSine */
  easeInOutSine: function(t, b, c, d) {
    return -c/2 *(Math.cos(Math.PI*t/d) - 1) + b;
  },
  /** easeOutInSine */
  easeOutInSine: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutSine(t*2, b, c/2, d);
    return Tween.EASING.easeInSine((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInExpo */
  easeInExpo: function(t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 *(t/d - 1)) + b - c * 0.001;
  },
  /** easeOutExpo */
  easeOutExpo: function(t, b, c, d) {
    return (t==d) ? b+c : c * 1.001 *(-Math.pow(2, -10 * t/d) + 1) + b;
  },
  /** easeInOutExpo */
  easeInOutExpo: function(t, b, c, d) {
    if(t==0) return b;
    if(t==d) return b+c;
    if((t/=d/2) < 1) return c/2 * Math.pow(2, 10 *(t - 1)) + b - c * 0.0005;
    return c/2 * 1.0005 *(-Math.pow(2, -10 * --t) + 2) + b;
  },
  /** easeOutInExpo */
  easeOutInExpo: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutExpo(t*2, b, c/2, d);
    return Tween.EASING.easeInExpo((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInCirc */
  easeInCirc: function(t, b, c, d) {
    return -c *(Math.sqrt(1 -(t/=d)*t) - 1) + b;
  },
  /** easeOutCirc */
  easeOutCirc: function(t, b, c, d) {
    return c * Math.sqrt(1 -(t=t/d-1)*t) + b;
  },
  /** easeInOutCirc */
  easeInOutCirc: function(t, b, c, d) {
    if((t/=d/2) < 1) return -c/2 *(Math.sqrt(1 - t*t) - 1) + b;
    return c/2 *(Math.sqrt(1 -(t-=2)*t) + 1) + b;
  },
  /** easeOutInCirc */
  easeOutInCirc: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutCirc(t*2, b, c/2, d);
    return Tween.EASING.easeInCirc((t*2)-d, b+c/2, c/2, d);
  },
  /** easeInElastic */
  easeInElastic: function(t, b, c, d, a, p) {
    var s;
    if(t==0) return b;  if((t/=d)==1) return b+c;  if(!p) p=d*.3;
    if(!a || a < Math.abs(c)) { a=c; s=p/4; } else s = p/(2*Math.PI) * Math.asin(c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )) + b;
  },
  /** easeOutElastic */
  easeOutElastic: function(t, b, c, d, a, p) {
    var s;
    if(t==0) return b;  if((t/=d)==1) return b+c;  if(!p) p=d*.3;
    if(!a || a < Math.abs(c)) { a=c; s=p/4; } else s = p/(2*Math.PI) * Math.asin(c/a);
    return(a*Math.pow(2,-10*t) * Math.sin((t*d-s)*(2*Math.PI)/p ) + c + b);
  },
  /** easeInOutElastic */
  easeInOutElastic: function(t, b, c, d, a, p) {
    var s;
    if(t==0) return b;  if((t/=d/2)==2) return b+c;  if(!p) p=d*(.3*1.5);
    if(!a || a < Math.abs(c)) { a=c; s=p/4; }       else s = p/(2*Math.PI) * Math.asin(c/a);
    if(t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin((t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  /** easeOutInElastic */
  easeOutInElastic: function(t, b, c, d, a, p) {
    if(t < d/2) return Tween.EASING.easeOutElastic(t*2, b, c/2, d, a, p);
    return Tween.EASING.easeInElastic((t*2)-d, b+c/2, c/2, d, a, p);
  },
  /** easeInBack */
  easeInBack: function(t, b, c, d, s) {
    if(s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  /** easeOutBack */
  easeOutBack: function(t, b, c, d, s) {
    if(s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  /** easeInOutBack */
  easeInOutBack: function(t, b, c, d, s) {
    if(s == undefined) s = 1.70158;
    if((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  /** easeOutInBack */
  easeOutInBack: function(t, b, c, d, s) {
    if(t < d/2) return Tween.EASING.easeOutBack(t*2, b, c/2, d, s);
    return Tween.EASING.easeInBack((t*2)-d, b+c/2, c/2, d, s);
  },
  /** easeInBounce */
  easeInBounce: function(t, b, c, d) {
    return c - Tween.EASING.easeOutBounce(d-t, 0, c, d) + b;
  },
  /** easeOutBounce */
  easeOutBounce: function(t, b, c, d) {
    if((t/=d) <(1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if(t <(2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if(t <(2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  /** easeInOutBounce */
  easeInOutBounce: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeInBounce(t*2, 0, c, d) * .5 + b;
    else return Tween.EASING.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
  },
  /** easeOutInBounce */
  easeOutInBounce: function(t, b, c, d) {
    if(t < d/2) return Tween.EASING.easeOutBounce(t*2, b, c/2, d);
    return Tween.EASING.easeInBounce((t*2)-d, b+c/2, c/2, d);
  }

};

/**
 * @class phina.util.QueryString
 * 
 */
class QueryString {

  static parse(text, sep, eq, isDecode) {
    text = text || location.search.substr(1);
    sep = sep || '&';
    eq = eq || '=';
    var decode = (isDecode) ? decodeURIComponent : function(a) { return a; };
    return text.split(sep).reduce(function(obj, v) {
      var pair = v.split(eq);
      obj[pair[0]] = decode(pair[1]);
      return obj;
    }, {});
  }

  static stringify(value, sep, eq, isEncode) {
    sep = sep || '&';
    eq = eq || '=';
    var encode = (isEncode) ? encodeURIComponent : function(a) { return a; };
    return Object.keys(value).map(function(key) {
      return key + eq + encode(value[key]);
    }).join(sep);
  }
  
}

/**
 * @class global.String
 * # 拡張した String クラス
 */

/**
 * @method format
 * フォーマットに引数を適用した文字列を返します。
 *
 * 引数がオブジェクトの場合、"{プロパティ名}" がオブジェクトのプロパティの値に置き換わります。
 * 指定したプロパティがオブジェクトにない場合は空文字列になります。
 *
 * 第1引数がオブジェクトでなかった場合、"{整数}" が各引数に置き換わります。
 * 指定した値の引数がなかった場合は空文字列になります。
 *
 * ### Example
 *     obj = {r: 128, g: 0, b: 255};
 *     "color: rgb({r}, {g}, {b});".format(obj); // => "color: rgb(128, 0, 255);"
 *
 *     "{0} + {1} = {2}".format(5, 8, (5+8)); // => "5 + 8 = 13"
 *
 * @param {Object} obj パラメータとなるオブジェクト
 * @return {String} 生成した文字列
 */
function format(arg) {
// String.prototype.$method("format", function(arg) {
  // 置換ファンク
  var rep_fn = undefined;
  
  // オブジェクトの場合
  if (typeof arg == "object") {
    /** @ignore */
    rep_fn = function(m, k) {
      if (arg[k] === undefined) {
        return '';
      }
      else {
        return arg[k];
      }
    };
  }
  // 複数引数だった場合
  else {
    var args = arguments;
    /** @ignore */
    rep_fn = function(m, k) {
      var v = args[ parseInt(k) ];
      if (v !== undefined && v !== null) {
        return v;
      }
      else {
        return '';
      }
    };
  }
  
  return this.replace( /\{(\w+)\}/g, rep_fn );
}


/**
 * @method each
 * 各文字を順番に渡しながら関数を繰り返し実行します。
 *
 * ### Example
 *     str = 'abc';
 *     str.each(function(ch) {
 *       console.log(ch);
 *     });
 *     // => 'a'
 *     //    'b'
 *     //    'c'
 *
 * @param {Function} callback 各要素に対して実行するコールバック関数
 * @param {Object} [self=this] callback 内で this として参照される値
 */
function each$1() {
// String.prototype.$method("each", function() {
  Array.prototype.forEach.apply(this, arguments);
  return this;
}

/**
 * @class phina.util.Color
 * カラークラス
 */
class Color {

  // /** R値 */
  // r: 255,
  // /** G値 */
  // g: 255,
  // /** B値 */
  // b: 255,
  // /** A値 */
  // a: 1.0,

  /**
   * 初期化
   */
  constructor(r, g, b, a) {
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 1.0;
    this.set.apply(this, arguments);
  }

  /**
   * セッター.
   */
  set(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = (a !== undefined) ? a : 1.0;
    return this;
  }

  /**
   * 数値によるセッター.
   */
  setFromNumber(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = (a !== undefined) ? a : 1.0;
    return this;
  }

  /**
   * 配列によるセッター
   */
  setFromArray(arr) {
    return this.set.apply(this, arr);
  }

  /**
   * オブジェクトによるセッター
   */
  setFromObject(obj) {
    return this.set(obj.r, obj.g, obj.b, obj.a);
  }

  /**
   * 文字列によるセッター
   */
  setFromString(str) {
    var color = Color.stringToNumber(str);
    return this.set(color[0], color[1], color[2], color[3]);
  }

  /**
   * 賢いセッター
   */
  setSmart() {
    var arg = arguments[0];
    if (arguments.length >= 3) {
      this.set(arguments.r, arguments.g, arguments.b, arguments.a);
    } else if (arg instanceof Array) {
      this.setFromArray(arg);
    } else if (arg instanceof Object) {
      this.setFromObject(arg);
    } else if (typeof(arg) == "string") {
      this.setFromString(arg);
    }
    return this;
  }

  /**
   * CSS 用 16進数文字列に変換
   */
  toStyleAsHex() {
    return format.call("#{0}{1}{2}",
    // return "#{0}{1}{2}".format(
      this.r.toString(16).padding(2, '0'),
      this.g.toString(16).padding(2, '0'),
      this.b.toString(16).padding(2, '0')
    );
  }

  /**
   * CSS 用 RGB文字列に変換
   */
  toStyleAsRGB() {
    return format.call("rgb({r},{g},{b})", {
    // return "rgb({r},{g},{b})".format({
      r: ~~this.r,
      g: ~~this.g,
      b: ~~this.b
    });
  }


  /**
   * CSS 用 RGBA文字列に変換
   */
  toStyleAsRGBA() {
    return format.call("rgba({r},{g},{b},{a})", {
    // return "rgba({r},{g},{b},{a})".format({
      r: ~~this.r,
      g: ~~this.g,
      b: ~~this.b,
      a: this.a
    });
  }

  /**
   * CSS 用 RGBA 文字列に変換
   */
  toStyle() {
    return format.call("rgba({r},{g},{b},{a})", {
    // return "rgba({r},{g},{b},{a})".format({
      r: ~~this.r,
      g: ~~this.g,
      b: ~~this.b,
      a: this.a
    });
  }

  /**
   * @static
   * @member phina.util.Color
   * @method strToNum
   */
  static strToNum(str) {
    return this.stringToNumber(str);
  }

  static stringToNumber(str) {
    var value = null;
    var type = null;

    if (str[0] === '#') {
      type = (str.length == 4) ? "hex111" : "hex222";
    } else if (str[0] === 'r' && str[1] === 'g' && str[2] === 'b') {
      type = (str[3] == 'a') ? "rgba" : "rgb";
    } else if (str[0] === 'h' && str[1] === 's' && str[2] === 'l') {
      type = (str[3] == 'a') ? "hsla" : "hsl";
    }

    if (type) {
      var match_set = MATCH_SET_LIST[type];
      var m = str.match(match_set.reg);
      value = match_set.exec(m);
    } else if (Color.COLOR_LIST[str]) {
      value = Color.COLOR_LIST[str];
    }

    return value;
  }

  /**
   * @static
   * @method
   * hsl を rgb に変換
   */
  static HSLtoRGB(h, s, l) {
    var r, g, b;

    h %= 360;
    h += 360;
    h %= 360;
    s *= 0.01;
    l *= 0.01;

    if (s === 0) {
      var l = Math.round(l * 255);
      return [l, l, l];
    }
    var m2 = (l < 0.5) ? l * (1 + s) : l + s - l * s;
    var m1 = l * 2 - m2;

    // red
    var temp = (h + 120) % 360;
    if (temp < 60) {
      r = m1 + (m2 - m1) * temp / 60;
    } else if (temp < 180) {
      r = m2;
    } else {
      r = m1;
    }

    // green
    temp = h;
    if (temp < 60) {
      g = m1 + (m2 - m1) * temp / 60;
    } else if (temp < 180) {
      g = m2;
    } else if (temp < 240) {
      g = m1 + (m2 - m1) * (240 - temp) / 60;
    } else {
      g = m1;
    }

    // blue
    temp = ((h - 120) + 360) % 360;
    if (temp < 60) {
      b = m1 + (m2 - m1) * temp / 60;
    } else if (temp < 180) {
      b = m2;
    } else if (temp < 240) {
      b = m1 + (m2 - m1) * (240 - temp) / 60;
    } else {
      b = m1;
    }

    return [
      parseInt(r * 255),
      parseInt(g * 255),
      parseInt(b * 255)
    ];
  }

  /**
   * @static
   * @method
   * hsla を rgba に変換
   */
  static HSLAtoRGBA(h, s, l, a) {
    var temp = Color.HSLtoRGB(h, s, l);
    temp[3] = a;
    return temp;
  }

  /**
   * @static
   * @method
   * rgb 値を作成
   */
  static createStyleRGB(r, g, b) {
    return "rgba(" + r + "," + g + "," + b + ")";
  }

  /**
   * @static
   * @method
   * rgba 値を作成
   */
  static createStyleRGBA(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

  /**
   * @static
   * @method
   * hsl 値を作成
   */
  static createStyleHSL(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
  }

  /**
   * @static
   * @method
   * hsla 値を作成
   */
  static createStyleHSLA(h, s, l, a) {
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
  }

}

// static props
/**
 * @static
 * カラーリスト
 */
Color.COLOR_LIST = {
  /** @property black */
  "black": [0x00, 0x00, 0x00],
  /** @property silver */
  "silver": [0xc0, 0xc0, 0xc0],
  /** @property gray */
  "gray": [0x80, 0x80, 0x80],
  /** @property white */
  "white": [0xff, 0xff, 0xff],
  /** @property maroon */
  "maroon": [0x80, 0x00, 0x00],
  /** @property red */
  "red": [0xff, 0x00, 0x00],
  /** @property purple */
  "purple": [0x80, 0x00, 0x80],
  /** @property fuchsia */
  "fuchsia": [0xff, 0x00, 0xff],
  /** @property green */
  "green": [0x00, 0x80, 0x00],
  /** @property lime */
  "lime": [0x00, 0xff, 0x00],
  /** @property olive */
  "olive": [0x80, 0x80, 0x00],
  /** @property yellow */
  "yellow": [0xff, 0xff, 0x00],
  /** @property navy */
  "navy": [0x00, 0x00, 0x80],
  /** @property blue */
  "blue": [0x00, 0x00, 0xff],
  /** @property teal */
  "teal": [0x00, 0x80, 0x80],
  /** @property aqua */
  "aqua": [0x00, 0xff, 0xff],
};


var MATCH_SET_LIST = {
  "hex111": {
    reg: /^#(\w{1})(\w{1})(\w{1})$/,
    exec: function(m) {
      return [
        parseInt(m[1] + m[1], 16),
        parseInt(m[2] + m[2], 16),
        parseInt(m[3] + m[3], 16)
      ];
    }
  },
  "hex222": {
    reg: /^#(\w{2})(\w{2})(\w{2})$/,
    exec: function(m) {
      return [
        parseInt(m[1], 16),
        parseInt(m[2], 16),
        parseInt(m[3], 16)
      ];
    }
  },
  "rgb": {
    reg: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    exec: function(m) {
      return [
        parseInt(m[1]),
        parseInt(m[2]),
        parseInt(m[3])
      ];
    }
  },
  "rgba": {
    reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
    exec: function(m) {
      return [
        parseInt(m[1]),
        parseInt(m[2]),
        parseInt(m[3]),
        parseFloat(m[4])
      ];
    }
  },
  "hsl": {
    reg: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
    exec: function(m) {
      return Color.HSLtoRGB(m[1], m[2], m[3]);
    }
  },
  "hsla": {
    reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
    exec: function(m) {
      return Color.HSLAtoRGBA(m[1], m[2], m[3], m[4]);
    }
  }
};

// 監視オブジェクト
// register で key を登録 (デフォルト値も一緒に？)
// event dispatcher を継承
// event dispatcher って util じゃね？
// register で登録した値を変更したら change イベントが走る


// 名前候補
//  middleman(仲立人)


/**
 * @class phina.util.ChangeDispatcher
 * @extends phina.util.EventDispatcher
 */
class ChangeDispatcher extends EventDispatcher {

  constructor() {
    super();

    this._observe = true;
  }

  register(key, defaultValue) {
    if (arguments.length === 1) {
      var obj = arguments[0];
      forIn.call(obj, function(key, value) {
      // obj.forIn(function(key, value) {
        this.register(key, value);
      }, this);
    }
    else {
      var tempKey = '__' + key;
      this[tempKey] = defaultValue;
      accessor.call(this, key, {
      // this.accessor(key, {
        get: function() {
          return this[tempKey];
        },
        set: function(v) {
          this[tempKey] = v;
          if (this._observe) {
            this.flare('change');
          }
        },
      });
    }
    return this;
  }

  observe() {
    this._observe = true;
  }
  unobserve() {
    this._observe = false;
  }
}

/**
 * @class phina.util.Ajax
 * 
 */
class Ajax {

  static request(options) {
    var data = $safe.call({}, options, Ajax.defaults);
    // var data = ({}).$safe(options, this.defaults);

    var xhr = new XMLHttpRequest();
    var flow = new Flow(function(resolve) {
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if ([200, 201, 0].indexOf(xhr.status) !== -1) {
            resolve(xhr.response);
          }
        }
      };

      xhr.open(data.type, data.url);
      xhr.responseType = data.responseType;
      xhr.send(null);
    });

    return flow;
  }
  static get(url) {
    return Ajax.request({
      type: 'GET',
      url: url,
    });
  }
  static post(url) {
    return Ajax.request({
      type: 'POST',
      url: url,
    });
  }
  static put(url) {
    return Ajax.request({
      type: 'PUT',
      url: url,
    });
  }
  static del(url) {
    return Ajax.request({
      type: 'DELETE',
      url: url,
    });
  }

}

/** 
 * @static
 * @memberof Ajax
 * @type {Object}
 */
Ajax.defaults = {
  type: 'GET',
  contentType: 'application/x-www-form-urlencoded',
  responseType: 'json',
  data: null,
  url: '',
};

/**
 * @class global.Number
 * # 拡張した Number クラス
 * 数値を扱う Number クラスを拡張しています。
 */

/**
 * @method times
 * 0 から自分自身の数-1まで、カウンタをインクリメントしながら関数を繰り返し実行します。
 *
 * ### Example
 *     arr = [];
 *     (5).times(function(i){
 *       arr.push(i);
 *     }); // => [0, 1, 2, 3, 4]
 *
 * @param {Function} fn コールバック関数
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
function times(fn, self) {
// Number.prototype.$method("times",  function(fn, self) {
  self = self || this;
  for (var i=0; i<this; ++i) {
    fn.call(self, i, this);
  }
  return this;
}

/**
 * @method step
 * 自分自身の値から指定した数まで、カウンタを増分させながら関数を繰り返し実行します。
 *
 * 上限値や増分値は float 型を指定することができます。
 *
 * ### Example
 *     var arr = [];
 *     (2.4).step(5.3, 0.8, function(n) {
 *       arr.push(n);
 *      }); // => [2.4, 3.2, 4.0, 4.8]
 *
 * @param {Number} limit カウンタの上限値
 * @param {Number} step カウンタを増分する量
 * @param {Function} fn コールバック関数。引数にカウンタが渡される。
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
function step(limit, step, fn, self) {
// Number.prototype.$method("step",  function(limit, step, fn, self) {
  self = self || this;
  for (var i=+this; i<=limit; i+=step) {
    fn.call(self, i, this);
  }
  return this;
}
// Number.prototype.$method("toDegree", function() { return (this*Math.RAD_TO_DEG); });

/**
 * @method toRadian
 * 度をラジアンに変換します。
 *
 * ### Example
 *     (180).toRadian(); // => 3.141592653589793
 *
 * @return {Number} ラジアン
 */
function toRadian() { return this * DEG_TO_RAD; }
// Number.prototype.$method("toRadian", function() { return this*Math.DEG_TO_RAD; });

/**
 * @class phina.geom.Vector2
 * # 2次元ベクトルクラス
 * 2次元のベクトルや座標を表すクラスです。
 */
class Vector2 {

  // /**
  //  * x座標
  //  * @type {Number}
  //  */
  // x = 0

  // /**
  //  * y座標
  //  * @type {Number}
  //  */
  // y = 0

  /**
   * 2次元ベクトルのコンストラクタです。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *
   * @param {Number} [x=0] ベクトルの x 座標
   * @param {Number} [y=0] ベクトルの y 座標
   * @return {phina.geom.Vector2} 2次元ベクトルオブジェクト
   */
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *     v2 = v.clone();
   *     v2.x == v.x; // => true
   *
   * @return {Object} 生成したベクトル
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * @method equals
   * this の各要素がすべて other と等しいかどうかを返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(5, 6);
   *     v1.equals(v2); // => false
   *
   * @param {phina.geom.Vector2} other 比較する対象のベクトル
   * @return {Boolean} 等しいかどうか
   */
  equals(v) {
    return (this.x === v.x && this.y === v.y);
  }

  /**
   * @method set
   * @chainable
   * this の各要素の値を再設定します。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *     v.set(5, 6);
   *
   * @param {Number} x ベクトルの x 座標
   * @param {Number} y ベクトルの y 座標
   * @return {phina.geom.Vector2} 再設定後のベクトル
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @method add
   * @chainable
   * this に other を加えます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(5, 6);
   *     v1.add(v2); // => phina.geom.Vector(8, 10)
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {phina.geom.Vector2} 加算した結果のベクトル
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /**
   * @method sub
   * @chainable
   * this から other を減じます。
   *
   * ベクトルが座標を表す場合は、指定した座標から自分自身へと向かうベクトルが得られます。
   * 
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(1, 5);
   *     v1.sub(v2); // => phina.geom.Vector(2, -1)
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {phina.geom.Vector2} 減算した結果のベクトル
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /**
   * @method mul
   * @chainable
   * this の各要素に数値 n を乗じます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.mul(3) // => phina.geom.Vector(9, 12)
   *
   * @param {Number} n 乗じる値
   * @return {phina.geom.Vector2} 乗算した結果のベクトル
   */
  mul(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  /**
   * @method div
   * @chainable
   * this の各要素を数値 n で割ります。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(8, 16);
   *     v1.div(2) // => phina.geom.Vector(4, 8)
   *
   * @param {Number} n 割る値
   * @return {phina.geom.Vector2} 除算した結果のベクトル
   */
  div(n) {
    //console.assert(n != 0, "0 division!!");
    n = n || 0.01;
    this.x /= n;
    this.y /= n;
    return this;
  }
  /**
   * @method negate
   * @chainable
   * this の各要素の正負を反転します。
   *
   * this と同じ大きさで方向が逆のベクトルが得られます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, -4);
   *     v1.negate() // => phina.geom.Vector(-3, 4)
   *
   * @return {phina.geom.Vector2} 反転後のベクトル
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    
    return this;
  }

  /**
   * @method dot
   * other との内積を返します。
   *
   * 投影ベクトルを求めたり、類似度の計算に利用することができます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(-2, 2);
   *     v1.dot(v2) // => 2
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {Number} 内積
   */
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * @method cross
   * other との外積（クロス積）を返します。
   *
   * 2次元ベクトルでの外積はベクトルでなく数値を返すことに注意してください。
   * other より this 時計回りにあるときは正の値になり、反時計回りにあるときは負の値になります。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(3, 1);
   *     v1.cross(v2) // => -8
   *
   * @param {phina.geom.Vector2} other ベクトル
   * @return {Number} 外積
   */
  cross(v) {
    return (this.x*v.y) - (this.y*v.x);
  }

  /**
   * @method length
   * this の大きさを返します。
   *
   * (memo) magnitude って名前の方が良いかも. 検討中.
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.length(); // => 5
   *
   * @return {Number} ベクトルの大きさ
   */
  length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
  
  /**
   * @method lengthSquared
   * this の大きさの自乗を返します。
   *
   * C# の名前を引用（or lengthSquare or lengthSqrt）
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.lengthSquared(); // => 25
   *
   * @return {Number} ベクトルの大きさの自乗
   */
  lengthSquared() {
    return this.x*this.x + this.y*this.y;
  }
  
  /**
   * @method distance
   * this と other を座標とみなしたときの2点間の距離を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     v1.distance(v2); // => 5
   *
   * @param {phina.geom.Vector2} other 座標を表すベクトル
   * @return {Number} 2点間の距離
   */
  distance(v) {
    return Math.sqrt( Math.pow(this.x-v.x, 2) + Math.pow(this.y-v.y, 2) );
  }
  
  /**
   * @method distanceSquared
   * this と other を座標とみなしたときの2点間の距離の自乗を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     v1.distanceSquared(v2); // => 25
   *
   * @param {phina.geom.Vector2} other 座標を表すベクトル
   * @return {Number} 2点間の距離の自乗
   */
  distanceSquared(v) {
    return Math.pow(this.x-v.x, 2) + Math.pow(this.y-v.y, 2);
  }

  /**
   * @method random
   * @chainable
   * 角度が min から max の範囲（度単位）で大きさが len のランダムなベクトルを返します。
   *
   * ### Example
   *     phina.geom.Vector2().random(90, 180, 1); // => phina.geom.Vector2(-0.5, 0.866) など
   *
   * @param {Number} [min=0] 角度（度単位）の下限値
   * @param {Number} [max=360] 角度（度単位）の上限値
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} ランダム化したベクトル
   */
  random(min, max, len) {
    var degree = Random.randfloat(min || 0, max || 360);
    var rad = degree*Math.DEG_TO_RAD;
    var len = len || 1;

    this.x = Math.cos(rad)*len;
    this.y = Math.sin(rad)*len;

    return this;
  }
  
  /**
   * @method normalize
   * @chainable
   * this を正規化します。すなわち、this と同じ方向で大きさが1のベクトルを返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.normalize(); // => phina.geom.Vector2(0.6, 0.8)
   *
   * @return {phina.geom.Vector2} 正規化したベクトル
   */
  normalize() {
    this.div(this.length());
    return this;
  }

  /**
   * @method toString
   * this を JSON 形式で表現した文字列を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.toString(); // => "{x:3, y:4}"
   *
   * @return {String} JSON 文字列
   */
  toString() {
    return format.call("{x:{x}, y:{y}}", this);
    // return "{x:{x}, y:{y}}".format(this);
  }

  /**
   * @method getDirection
   * this のおおよその方向を示した文字列を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v1.getDirection(); // => "up"
   *
   * @return {String} 方向を表す文字列（"up", "right", "down", "left"）
   */
  getDirection() {
    var angle = this.toDegree();
    if (angle < 45) {
      return "right";
    } else if (angle < 135) {
      return "down";
    } else if (angle < 225) {
      return "left"
    } else if (angle < 315) {
      return "up";
    } else {
      return "right";
    }
  }

  /**
   * @method toAngle
   * this と x 軸との角度（ラジアン単位）を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(-2, 0);
   *     v1.toAngle(); // => 3.14159
   *
   * @return {Number} ベクトルの角度（ラジアン単位）
   */
  toAngle() {
    var rad = Math.atan2(this.y, this.x);
    return (rad + Math.PI*2)%(Math.PI*2);
  }
  
  /**
   * @method fromAngle
   * @chainable
   * 角度（ラジアン単位）と大きさを指定してベクトルを設定します。
   *
   * ### Example
   *     phina.geom.Vector2().fromAngle(Math.PI/4, 2); // => phina.geom.Vector2(1.4142, 1.4142)
   *
   * @param {Number} rad 角度（ラジアン単位）
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} ベクトル
   */
  fromAngle(rad, len) {
    len = len || 1;
    this.x = Math.cos(rad)*len;
    this.y = Math.sin(rad)*len;
    
    return this;
  }

  /**
   * @method toDegree
   * this と x 軸との角度（度単位）を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(-2, 2);
   *     v1.toAngle(); // => 135
   *
   * @return {Number} ベクトルの角度（度単位）
   */
  toDegree() {
    return this.toAngle().toDegree();
  }
  
  /**
   * @method fromDegree
   * @chainable
   * 角度（度単位）と大きさを指定してベクトルを設定します。
   *
   * ### Example
   *     phina.geom.Vector2().fromDegree(60, 2); // => phina.geom.Vector2(1, 1.732)
   *
   * @param {Number} deg 角度（度単位）
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} ベクトル
   */
  fromDegree(deg, len) {
    // return this.fromAngle(deg.toRadian(), len);
    return this.fromAngle(toRadian.call(deg), len);
  }

  /**
   * @method rotate
   * @chainable
   * this を回転します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v1.rotate(Math.PI/2); // => phina.geom.Vector2(-1, 3);
   *
   * @param {Number} rad 角度（ラジアン単位）
   * @param {Number} [center=(0, 0)] 回転の中心座標
   * @return {Number} 回転後のベクトル
   */
  rotate(rad, center) {
    center = center || new Vector2(0, 0);

    var x1 = this.x - center.x;
    var y1 = this.y - center.y;
    var x2 = x1 * Math.cos(rad) - y1 * Math.sin(rad);
    var y2 = x1 * Math.sin(rad) + y1 * Math.cos(rad);
    this.set( center.x + x2, center.y + y2 );

    return this;
  }

  /**
   * @method min
   * @static
   * v1 と v2 の各要素に対し、より小さい方を要素とする新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.min(v1, v2); // phina.geom.Vector2(-3, 1);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 生成したベクトル
   */
  static min(a, b) {
    return new Vector2(
      (a.x < b.x) ? a.x : b.x,
      (a.y < b.y) ? a.y : b.y
    );
  }

  /**
   * @method max
   * @static
   * 2次元ベクトル v1 と v2 の各要素に対し、より大きい方を要素とする新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.max(v1, v2); // phina.geom.Vector2(3, 2);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 生成したベクトル
   */
  static max(a, b) {
    return new Vector2(
      (a.x > b.x) ? a.x : b.x,
      (a.y > b.y) ? a.y : b.y
    );
  }

  /**
   * @method add
   * @static
   * v1 に v2 を加算した新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.add(v1, v2); // phina.geom.Vector2(0, 3);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 加算した結果
   */
  static add(lhs, rhs) {
    return new Vector2(lhs.x+rhs.x, lhs.y+rhs.y);
  }
  
  /**
   * @method sub
   * @static
   * 2次元ベクトル v1 から v2 を減じた新しいベクトルを生成して返します。
   *
   * ベクトルが座標を表す場合、2つ目の座標から1つ目の座標へと向かうベクトルが得られます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     v2 = phina.geom.Vector2(-3, 2);
   *     phina.geom.Vector2.sub(v1, v2); // phina.geom.Vector2(6, -1);
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 減算した結果
   */
  static sub(lhs, rhs) {
    return new Vector2(lhs.x-rhs.x, lhs.y-rhs.y);
  }
  
  /**
   * @method mul
   * @static
   * 2次元ベクトル v の各要素に n を乗じた新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.mul(v1, 2); // phina.geom.Vector2(6, 2)
   *
   * @param {phina.geom.Vector2} v ベクトル
   * @param {phina.geom.Vector2} n 乗じる値
   * @return {phina.geom.Vector2} 乗算した結果
   */
  static mul(v, n) {
    return new Vector2(v.x*n, v.y*n);
  }
  
  /**
   * @method div
   * @static
   * 2次元ベクトル v の各要素を n で割った新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.div(v1, 2); // phina.geom.Vector2(1.5, 0.5)
   *
   * @param {phina.geom.Vector2} v ベクトル
   * @param {phina.geom.Vector2} n 割る値
   * @return {phina.geom.Vector2} 除算した結果
   */
  static div(v, n) {
    return new Vector2(v.x/n, v.y/n);
  }
  
  /**
   * @method negate
   * @static
   * 2次元ベクトル v を反転した新しいベクトルを生成して返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.negate(); // phina.geom.Vector2(-3, -1)
   *
   * @param {phina.geom.Vector2} v ベクトル
   * @return {phina.geom.Vector2} 反転したベクトル
   */
  static negate(v) {
    return new Vector2(-v.x, -v.y);
  }
  
  /**
   * @method dot
   * @static
   * 2次元ベクトル v1 と v2 の内積を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(-2, 2);
   *     phina.geom.Vector2.dot(v1, v2) // => 2
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {phina.geom.Vector2} 内積
   */
  static dot(lhs, rhs) {
    return lhs.x * rhs.x + lhs.y * rhs.y;
  }
  
  /**
   * @method cross
   * @static
   * 2次元ベクトル v1 と v2 の外積（クロス積）を返します。
   *
   * 2次元ベクトルでの外積はベクトルでなく数値を返すことに注意してください。
   * 1つ目のベクトルが2つ目のベクトルより時計回りにあるときは正の値になり、反時計回りにあるときは負の値になります。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(3, 4);
   *     v2 = phina.geom.Vector2(3, 1);
   *     phina.geom.Vector2.cross(v1, v2); // => -8
   *
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @return {Number} 外積
   */
  static cross(lhs, rhs) {
    return (lhs.x*rhs.y) - (lhs.y*rhs.x);
  }
  
  /**
   * @method distance
   * @static
   * v1 と v2 を座標とみなしたときの2点間の距離を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.distance(v1, v2); // => 5
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {Number} 2点間の距離
   */
  static distance(lhs, rhs) {
    return Math.sqrt( Math.pow(lhs.x-rhs.x, 2) + Math.pow(lhs.y-rhs.y, 2) );
  }

  /**
   * @method distanceSquared
   * @static
   * v1 と v2 を座標とみなしたときの2点間の距離の自乗を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.distanceSquared(v1, v2); // => 25
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {Number} 2点間の距離の自乗
   */
  static distanceSquared(lhs, rhs) {
    return Math.pow(lhs.x-rhs.x, 2) + Math.pow(lhs.y-rhs.y, 2);
  }

  /**
   * @method manhattanDistance
   * @static
   * v1 と v2 を座標とみなしたときの2点間のマンハッタン距離（軸に平行に進むときの最短距離）を返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.manhattanDistance(v1, v2); // => 7
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {Number} 2点間のマンハッタン距離
   */
  static manhattanDistance(lhs, rhs) {
    return Math.abs(lhs.x-rhs.x) + Math.abs(lhs.y-rhs.y);
  }
  
  /**
   * @method normal
   * @static
   * v1 と v2 を座標とみなしたときの、v2 から v1 に向かうベクトルに対する法線ベクトルを返します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.normal(v1, v2); // => phina.geom.Vector2(4, -3)
   *
   * @param {phina.geom.Vector2} v1 座標を表すベクトル
   * @param {phina.geom.Vector2} v2 座標を表すベクトル
   * @return {phina.geom.Vector2} 法線ベクトル
   */
  static normal(a, b) {
    var temp = Vector2.sub(a, b);

    return new Vector2(-temp.y, temp.x);
  }

  /**
   * @method reflect
   * @static
   * 2次元ベクトル v を壁への入射ベクトルとして、壁に反射した際のベクトル（反射ベクトル）を返します。
   *
   * 壁の向きは法線ベクトル normal によって表します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(4, 3);
   *     normal = phina.geom.Vector2(-1, 1);
   *     phina.geom.Vector2.reflect(v1, normal); // => phina.geom.Vector2(2, 5)
   *
   * @param {phina.geom.Vector2} v 入射ベクトル
   * @param {phina.geom.Vector2} normal 壁の法線ベクトル
   * @return {phina.geom.Vector2} 反射ベクトル
   */
  static reflect(v, normal) {
    var len = Vector2.dot(v, normal);
    var temp= Vector2.mul(normal, 2*len);
    
    return Vector2.sub(v, temp);
  }
  
  /**
   * @method wall
   * @static
   * 2次元ベクトル v を壁への入射ベクトルとして、壁に沿ったベクトル（壁ずりクトル）を返します。
   *
   * 壁の向きは法線ベクトル normal によって表します。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(4, 3);
   *     normal = phina.geom.Vector2(-1, 1);
   *     phina.geom.Vector2.wall(v1, normal); // => phina.geom.Vector2(3, 4)
   *
   * @param {phina.geom.Vector2} v 入射ベクトル
   * @param {phina.geom.Vector2} normal 壁の法線ベクトル
   * @return {phina.geom.Vector2} 壁ずりベクトル
   */
  static wall(v, normal) {
    var len = Vector2.dot(v, normal);
    var temp= Vector2.mul(normal, len);
    
    return Vector2.sub(v, temp);
  }
  
  /**
   * @method lerp
   * @static
   * v1 と v2 を媒介変数 t で線形補間します。
   * t=0.5 で v1 と v2 の中間ベクトルを求めることができます。
   *
   * ### Example
   *     v1 = phina.geom.Vector2(1, 2);
   *     v2 = phina.geom.Vector2(4, 6);
   *     phina.geom.Vector2.lerp(v1, v2, 0.5); // => (2.5, 4)
   *     phina.geom.Vector2.lerp(v1, v2, 0); // => (1, 2)
   *     phina.geom.Vector2.lerp(v1, v2, 1); // => (4, 6)
   * 
   * @param {phina.geom.Vector2} v1 ベクトル
   * @param {phina.geom.Vector2} v2 ベクトル
   * @param {Number} t 媒介変数
   * @return {phina.geom.Vector2} 線形補間の結果
   */
  static lerp(a, b, t) {
    return new Vector2(
      a.x + (b.x-a.x)*t,
      a.y + (b.y-a.y)*t
    );
  }
  
  /**
   * @method slerp
   * @static
   * 補間（未実装）
   */
  static slerp(lhs, rhs, t) {
      // TODO:
      // cos...
  }

  /**
   * @method random
   * @static
   * 角度が min から max の範囲（度単位）で大きさが len のランダムなベクトルを生成して返します。
   *
   * ### Example
   *     phina.geom.Vector2.random(90, 180, 1); // => phina.geom.Vector2(-0.5, 0.866) など
   *
   * @param {Number} [min=0] 角度（度単位）の下限値
   * @param {Number} [max=360] 角度（度単位）の上限値
   * @param {Number} [len=1] 大きさ
   * @return {phina.geom.Vector2} 生成したベクトル
   */
 static random(min, max, len) {
    return new Vector2().random(min, max).mul(len||1);
  }

}

/**
 * @property {Vector2} ZERO ゼロベクトル
 * @readonly
 */
Vector2.ZERO = new Vector2(0, 0);
/**
 * @property {Vector2} LEFT 左方向の単位ベクトル
 * @readonly
 */
Vector2.LEFT = new Vector2(-1, 0);
/**
 * @property {Vector2} RIGHT 右方向の単位ベクトル
 * @readonly
 */
Vector2.RIGHT= new Vector2(1, 0);
/**
 * @property {Vector2} UP 上方向の単位ベクトル
 * @readonly
 */
Vector2.UP   = new Vector2(0, -1);
/**
 * @property {Vector2} DOWN 下方向の単位ベクトル
 * @readonly
 */
Vector2.DOWN = new Vector2(0, 1);

// import { Rect } from "./rect";

/**
 * @class phina.geom.Circle
 * # 円領域を表すクラス
 * キャンバス上の円領域を扱うクラスです。
 * 
 */
class Circle {

  /**
   * @property {Number} x
   * 円の中心の x 座標
   */
  // x: 0,
  /**
   * @property {Number} y
   * 円の中心の y 座標
   */
  // y: 0,
  /**
   * @property {Number} radius
   * 円の半径
   */
  // radius: 32,

  /**
   * @method init
   * 円領域のコンストラクタです。
   *
   * ### Example
   *     circle = phina.geom.Circle(32, 64, 128);
   *
   * @param {Number} x 円の中心の x 座標
   * @param {Number} y 円の中心の y 座標
   * @param {Number} radius 半径
   * @return {phina.geom.Rect} 円領域オブジェクト
   */
  constructor(x, y, radius) {
    this.x = 0;
    this.y = 0;
    this.radius = 32;
    this.set(x, y, radius);
  }

  /**
   * @method set
   * @chainable
   * this の各値を再設定します。
   *
   * ### Example
   *     circle = phina.geom.Circle(32, 64, 128);
   *     circle.set(100, 200, 32);
   *
   * @param {Number} x 円を囲う矩形の左上頂点の x 座標
   * @param {Number} y 円を囲う矩形の左上頂点の x 座標
   * @param {Number} radius 半径
   * @return {phina.geom.Circle} 円領域オブジェクト
   */
  set(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    return this;
  }

  /**
   * @method moveTo
   * @chainable
   * 円領域を座標 (x, y) に移動します。(x, y) は円の中心を表します。
   *
   * ### Example
   *     circle = phina.geom.Circle(300, 300, 40);
   *     circle.left; // => 260
   *     circle.moveTo(100, 100);
   *     circle.left; // => 60
   *
   * @param {Number} x 移動先の x 座標
   * @param {Number} y 移動先の y 座標
   */
  moveTo(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @method moveBy
   * @chainable
   * 円領域を (x, y) だけ移動します。
   *
   * ### Example
   *     circle = phina.geom.Circle(300, 300, 40);
   *     circle.left; // => 260
   *     circle.moveBy(100, 100);
   *     circle.left; // => 460
   *
   * @param {Number} x 移動量の x 座標
   * @param {Number} y 移動量の y 座標
   */
  moveBy(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  /**
   * @method contains
   * 座標 (x, y) が円領域の中に含まれるかどうかを返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(300, 300, 100);
   *     circle.contains(350, 350); // =>  true
   *     circle.contains(350, 400); // => false
   *
   * @param {Number} x 判定する対象の x 座標
   * @param {Number} y 判定する対象の y 座標
   * @return {Boolean} 指定した座標が円領域の中に含まれるかどうか
   */
  contains(x, y) {
    var lenX = this.x-x;
    var lenY = this.y-y;
    var lenSquared = (lenX*lenX)+(lenY*lenY);

    return lenSquared <= this.radius*this.radius;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(50, 100, 40);
   *     circle2 = circle.clone();
   *     circle2.x == circle.x; // => true
   *
   * @return {Object} 生成した円領域
   */
  clone() {
    return new Circle(this.x, this.y, this.radius);
  }

  /**
   * @method toRect
   * 円に外接する正方形を表す矩形領域を生成して返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(50, 100, 40);
   *     rect = circle.toRect();
   *     rect.x; // => 10
   *     rect.y; // => 60
   *     rect.width; // => 80
   *
   * @return {Object} 生成した矩形領域
   */
  toRect() {
    // 循環参照回避のため、Rect側で定義
    // var size = this.size;
    // return new Rect(this.x - this.radius, this.y - this.radius, size, size);
  }

  /**
   * @method toArray
   * this の各値を要素とする配列を生成して返します。
   *
   * ### Example
   *     circle = phina.geom.Circle(50, 100, 40);
   *     rect.toArray(); // => [50, 100, 40]
   *
   * @return {Number[]} 生成した配列
   */
  toArray() {
    return [this.x, this.y, this.radius];
  }

  /**
   * @property {Number} left
   * @readonly
   * キャンバス左端から円の左端までの距離
   *
   * 現時点では読み取り専用です。
   *
   * ### Example
   *     circle = phina.geom.Circle(200, 300, 100);
   *     circle.left; // => 100
   *     circle.top; // => 200
   *     circle.right; // => 300
   *     circle.bottom; // => 400
   */
  get left()   { return this.x - this.radius; }
  set left(v)  {
    // TODO: 
  }

  /**
   * @property {Number} top
   * @readonly
   * キャンバス上端から円の上端までの距離
   *
   * 現時点では読み取り専用です。
   */
  get top()   { return this.y - this.radius; }
  set top(v)  {
    // TODO: 
  }

  /**
   * @property {Number} right
   * @readonly
   * キャンバス右端から円の右端までの距離
   *
   * 現時点では読み取り専用です。
   */
  get right()   { return this.x + this.radius; }
  set right(v)  {
    // TODO: 
  }

  /**
   * @property {Number} bottom
   * @readonly
   * キャンバス下端から円の下端までの距離
   *
   * 現時点では読み取り専用です。
   */
  get bottom()   { return this.y + this.radius; }
  set bottom(v)  {
    // TODO: 
  }
    
  /**
   * @property {Number} size
   * @readonly
   * 円の直径
   *
   * 現時点では読み取り専用です。
   */
  get size()   { return this.radius*2; }
  set size(v)  {
    // TODO: 検討中
  }
}

/**
 * @class phina.geom.Rect
 * # 矩形領域を表すクラス
 * キャンバス上の矩形領域を扱うクラスです。
 * 
 */
class Rect {

  // /**
  //  * @property {Number} x
  //  * 矩形の左上頂点の x 座標
  //  */
  // x: 0,
  // /**
  //  * @property {Number} y
  //  * 矩形の左上頂点の y 座標
  //  */
  // y: 0,
  // /**
  //  * @property {Number} width
  //  * 矩形の幅
  //  */
  // width: 32,
  // /**
  //  * @property {Number} hight
  //  * 矩形の高さ
  //  */
  // height: 32,

  /**
   * @method init
   * 矩形領域のコンストラクタです。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *
   * @param {Number} x 矩形の左上頂点の x 座標
   * @param {Number} y 矩形の左上頂点の y 座標
   * @param {Number} width 幅
   * @param {Number} height 高さ
   * @return {phina.geom.Rect} 矩形領域オブジェクト
   */
  constructor(x, y, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
    this.set(x, y, width, height);
  }

  /**
   * @method set
   * @chainable
   * this の各値を再設定します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.set(0, 16, 32, 64);
   *
   * @param {Number} x 矩形の左上頂点の x 座標
   * @param {Number} y 矩形の左上頂点の y 座標
   * @param {Number} width 幅
   * @param {Number} height 高さ
   */
  set(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    return this;
  }

  /**
   * @method moveTo
   * @chainable
   * 矩形領域を座標 (x, y) に移動します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.centerX; // => 24
   *     rect.moveTo(0, 0);
   *     rect.centerX; // => 16
   *
   * @param {Number} x 移動先の x 座標
   * @param {Number} y 移動先の y 座標
   */
  moveTo(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @method moveBy
   * @chainable
   * 矩形領域を (x, y) だけ移動します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.moveBy(10, -10);
   *     rect.x; // => 18
   *     rect.y; // => 6
   *
   * @param {Number} x 移動量の x 座標
   * @param {Number} y 移動量の y 座標
   */
  moveBy(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  /**
   * @method setSizse
   * @chainable
   * 矩形領域の幅と高さを変更します。
   *
   * ### Example
   *     rect = phina.geom.Rect(8, 16, 32, 64);
   *     rect.setSize(10, 20);
   *     rect.width; // => 10
   *     rect.height; // => 20
   *
   * @param {Number} width 幅
   * @param {Number} height 高さ
   */
  setSize(w, h) {
    this.width = w;
    this.height = h;
    return this;
  }

  /**
   * @method padding
   * @chainable
   * 矩形領域の中にパディング領域を設定します。
   *
   * 矩形領域自体のサイズはパディング領域の分だけ小さくなります。  
   * 幅の指定方法は CSS の padding 指定と同じように時計回りです。  
   * 引数が1つの場合は上下左右の値、引数が2つの場合は上下と左右の値、引数が３つの場合は上、左右、下の値と解釈します。
   *
   * ### Example
   *     rect = phina.geom.Rect(50, 100, 150, 200);
   *     rect.padding(10);
   *     rect.x; // => 60
   *     rect.y; // => 110
   *     rect.width; // => 130
   *     rect.height; // => 180
   *
   * @param {Number} top 上辺のパディング幅
   * @param {Number} right 右辺のパディング幅
   * @param {Number} bottom 下辺のパディング幅
   * @param {Number} left 左辺のパディング幅
   */
  padding(top, right, bottom, left) {
    // css の padding に合わせて時計回りにパラメータ調整
    switch (arguments.length) {
      case 1:
        top = right = bottom = left = arguments[0];
        break;
      case 2:
        top     = bottom = arguments[0];
        right   = left   = arguments[1];
        break;
      case 3:
        top     = arguments[0];
        right   = left = arguments[1];
        bottom  = arguments[2];
        break;
    }
    
    this.x += left;
    this.y += top;
    this.width -= left+right;
    this.height-= top +bottom;
    
    return this;
  }

  /**
   * @method contains
   * 座標 (x, y) が 矩形領域の中に含まれるかどうかを返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(50, 100, 150, 200);
   *     rect.contains(35, 68); // =>  true
   *     rect.contains(200, 68); // => false
   *
   * @param {Number} x 判定する対象の x 座標
   * @param {Number} y 判定する対象の y 座標
   * @return {Boolean} 指定した座標が矩形領域の中に含まれるかどうか
   */
  contains(x, y) {
    return this.left <= x && x <= this.right && this.top <= y && y <= this.bottom;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(50, 100, 150, 200);
   *     rect2 = rect.clone();
   *     rect2.x == rect.x; // => true
   *
   * @return {Object} 生成した矩形領域
   */
  clone() {
    return new Rect(this.x, this.y, this.width, this.height);
  }

  /**
   * @method toCircle
   * 矩形領域内に収まる最大の円領域を生成して返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(32, 64, 100, 200);
   *     circle = rect.toCircle();
   *     circle.x; // => 82
   *     circle.y; // => 164
   *     circle.radius; // => 50
   *
   * @return {Object} 生成した円領域
   */
  toCircle() {
    var radius = ((this.width < this.height) ? this.width : this.height)/2;
    return new Circle(this.centerX, this.centerY, radius);
  }

  /**
   * @method toArray
   * this の各値を要素とする配列を生成して返します。
   *
   * ### Example
   *     rect = phina.geom.Rect(32, 64, 100, 200);
   *     rect.toArray(); // => [32, 64, 100, 200]
   *
   * @return {Number[]} 生成した配列
   */
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  /**
   * @property {Number} left
   * キャンバス左端から矩形領域の左辺までの距離
   *
   * left を変更すると矩形領域の幅（width）が自動的に調整されます。
   *
   * ### Example
   *     rect = phina.geom.Rect(32, 64, 100, 200);
   *     rect.left; // => 32
   *     rect.width; // => 100
   *     rect.right; // => 132
   *     
   *     rect.left = 42;
   *     rect.width; // => 90
   */
  get left()   { return this.x; }
  set left(v)  { this.width -= v-this.x; this.x = v; }

  /**
   * @property {Number} top
   * キャンバス上端から矩形領域の上辺までの位置
   *
   * top を変更すると矩形領域の高さ（height）が自動的に調整されます。
   */
  get top()   { return this.y; }
  set top(v)  { this.height -= v-this.y; this.y = v; }

  /**
   * @property {Number} right
   * キャンバス左端から矩形領域の右辺までの距離
   *
   * right を変更すると矩形領域の幅（width）が自動的に調整されます。
   */
  get right()   { return this.x + this.width; }
  set right(v)  { this.width += v-this.right; }

  /**
   * @property {Number} bottom
   * キャンバス上端から矩形領域の下辺までの位置
   *
   * bottom を変更すると矩形領域の高さ（height）が自動的に調整されます。
   */
  get bottom()   { return this.y + this.height; }
  set bottom(v)  { this.height += v-this.bottom; }
  
  /**
   * @property {Number} centerX
   * 矩形領域の x 座標
   *
   * 現時点では読み取り専用です。
   */
  get centerX()   { return this.x + this.width/2; }
  set centerX(v)  {
    // TODO: 検討中
  }
  /**
   * @property {Number} centerY
   * 矩形領域の y 座標
   *
   * 現時点では読み取り専用です。
   */
  get centerY()   { return this.y + this.height/2; }
  set centerY(v)  {
    // TODO: 検討中
  }

}

/**
 * Circle.toRect
 * 循環参照を回避するため、ここで定義
 */
Circle.prototype.toRect = function() {
  var size = this.size;
  return new Rect(this.x - this.radius, this.y - this.radius, size, size);
};

/**
 * @class phina.geom.Matrix33
 * # 行列クラス
 * 3x3の行列を表すクラスです。
 * 
 * <pre>
 * | m00 m01 m02 |
 * | m10 m11 m12 |
 * | m20 m21 m22 |
 * </pre>
 */
class Matrix33 {

  /**
   * @method init
   * マトリックスクラスのコンストラクタです。
   *
   * 引数は m00, m01, m02, m10, m11, m12, m20, m21, m22 の順に指定します。
   * 引数が9個に満たない場合は単位行列を生成します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33();
   *     mat1.m00 + mat2.m00; // => 2
   *     mat1.m01 - mat2.m01; // => 2
   *
   * @param {Number...} m00, m01,... 各要素の値
   * @return {phina.geom.Matrix33} 行列オブジェクト
   */
  constructor() {
    if (arguments.length >= 9) {
      this.set.apply(this, arguments);
    }
    else {
      this.identity();
    }
  }

  /**
   * @method set
   * @chainable
   * this の各要素の値を再設定します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33();
   *     mat2.set(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat1.toString() == mat2.toString(); // => true
   *
   * @param {Number...} m00, m01,... 各要素の値
   * @return {phina.geom.Matrix33} 行列オブジェクト
   */
  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    this.m00 = m00; this.m01 = m01; this.m02 = m02;
    this.m10 = m10; this.m11 = m11; this.m12 = m12;
    this.m20 = m20; this.m21 = m21; this.m22 = m22;

    return this;
  }

  /**
   * @method identity
   * @chainable
   * this を単位行列にします。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33();
   *     mat1.identity().toString() == mat2.toString(); // => true
   *
   * @return {phina.geom.Matrix33} 単位行列
   */
  identity() {
    this.m00 = 1; this.m01 = 0; this.m02 = 0;
    this.m10 = 0; this.m11 = 1; this.m12 = 0;
    this.m20 = 0; this.m21 = 0; this.m22 = 1;
    return this;
  }

  /**
   * @method clone
   * this のコピーを生成して返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = mat1.clone();
   *     mat1.toString() == mat2.toString(); // => true
   *     mat1 == mat2; // => false
   *
   * @return {phina.geom.Matrix33} 行列オブジェクト
   */
  clone() {
    return new Matrix33(
      this.m00, this.m01, this.m02,
      this.m10, this.m11, this.m12,
      this.m20, this.m21, this.m22
    );
  }

  /**
   * @method determinant
   * 行列式を返します
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(0, -2, 0, -1, 3, 1, 4, 2, 1);
   *     mat1.determinant(); // => -10
   *     mat1.identity().determinant(); // => 1
   *
   * @return {Number} 行列式
   */
  determinant() {
    var m00 = this.m00; var m01 = this.m01; var m02 = this.m02;
    var m10 = this.m10; var m11 = this.m11; var m12 = this.m12;
    var m20 = this.m20; var m21 = this.m21; var m22 = this.m22;
    
    return m00*m11*m22 + m10*m21*m02 + m01*m12*m20 - m02*m11*m20 - m01*m10*m22 - m12*m21*m00;
  }

  /**
   * @method transpose
   * @chainable
   * 転置行列を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat2 = phina.geom.Matrix33(1, 4, 7, 2, 5, 8, 3, 6, 9);
   *     mat1.transpose().toString() == mat2.toString(); // => true
   *
   * @return {phina.geom.Matrix33} 転置行列
   */
  transpose() {
    var swap = function(a, b) {
      var temp = this[a];
      this[a] = this[b];
      this[b] = temp;
    }.bind(this);

    swap('m01', 'm10');
    swap('m02', 'm20');
    swap('m12', 'm21');
    
    return this;
  }

  /**
   * @method invert
   * @chainable
   * 逆行列を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
   *     mat2 = mat1.clone().invert();
   *     mat3 = mat1.clone().multiply(mat2);
   *     mat3.toString() == phina.geom.Matrix33.IDENTITY.toString(); // => true
   *
   * @return {phina.geom.Matrix33} 逆行列
   */
  invert() {
    var m00 = this.m00; var m01 = this.m01; var m02 = this.m02;
    var m10 = this.m10; var m11 = this.m11; var m12 = this.m12;
    var m20 = this.m20; var m21 = this.m21; var m22 = this.m22;

    var det = this.determinant();

    // |m00, m01, m02|
    // |m10, m11, m12|
    // |m20, m21, m22|
    this.m00 = (m11*m22-m12*m21)/det;
    this.m01 = (m10*m22-m12*m20)/det*-1;
    this.m02 = (m10*m21-m11*m20)/det;
    
    this.m10 = (m01*m22-m02*m21)/det*-1;
    this.m11 = (m00*m22-m02*m20)/det;
    this.m12 = (m00*m21-m01*m20)/det*-1;
    
    this.m20 = (m01*m12-m02*m11)/det;
    this.m21 = (m00*m12-m02*m10)/det*-1;
    this.m22 = (m00*m11-m01*m10)/det;
    
    this.transpose();
    
    return this;

  }

  /**
   * @method multiply
   * this に other を乗じます。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
   *     mat2 = mat1.clone().invert();
   *     mat3 = mat1.clone().multiply(mat2);
   *     mat3.toString() == phina.geom.Matrix33.IDENTITY.toString(); // => true
   *
   * @param {phina.geom.Matrix33} other 乗じる行列
   * @return {phina.geom.Matrix33} 乗算結果の行列
   */
  multiply(mat) {
    var tm = this.m;
    var om = mat.m;

    var a00 = this.m00, a01 = this.m01, a02 = this.m02;
    var a10 = this.m10, a11 = this.m11, a12 = this.m12;
    var a20 = this.m20, a21 = this.m21, a22 = this.m22;
    var b00 = mat.m00, b01 = mat.m01, b02 = mat.m02;
    var b10 = mat.m10, b11 = mat.m11, b12 = mat.m12;
    var b20 = mat.m20, b21 = mat.m21, b22 = mat.m22;

    this.m00 = a00*b00 + a01*b10 + a02*b20;
    this.m01 = a00*b01 + a01*b11 + a02*b21;
    this.m02 = a00*b02 + a01*b12 + a02*b22;

    this.m10 = a10*b00 + a11*b10 + a12*b20;
    this.m11 = a10*b01 + a11*b11 + a12*b21;
    this.m12 = a10*b02 + a11*b12 + a12*b22;

    this.m20 = a20*b00 + a21*b10 + a22*b20;
    this.m21 = a20*b01 + a21*b11 + a22*b21;
    this.m22 = a20*b02 + a21*b12 + a22*b22;
    
    return this;
  }

  /**
   * @method multiplyVector2
   * this に2次元ベクトル v を乗じます。
   * 2次元ベクトルは (x, y, 1) として乗算します。
   *
   * ### Example
   *     mat = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
   *     v = phina.geom.Vector2(2, 4)
   *     mat.multiplyVector2(v) // => {x: -3, y: 12}
   *
   * @param {phina.geom.Vector2} v 乗じるベクトル
   * @return {phina.geom.Vector2} 乗算結果のベクトル
   */
  multiplyVector2(v) {
    var vx = this.m00*v.x + this.m01*v.y + this.m02;
    var vy = this.m10*v.x + this.m11*v.y + this.m12;
    
    // return phina.geom.Vector2(vx, vy);
    return new Vector2(vx, vy);
  }

  // 行
  /**
   * @method getRow
   * row 番目の行を配列で返します。row が 0、1、2 のいずれかでなければ null を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat1.getRow(0); // [1, 2, 3]
   *     mat1.getRow(1); // [4, 5, 6]
   *     mat1.getRow(9); // null
   *
   * @param {0/1/2} row 行番号
   * @return {Number[]} 行を表す配列
   */
  getRow(row) {
    if ( row === 0 ) {
      return [ this.m00, this.m01, this.m02 ];
    }
    else if ( row === 1 ) {
      return [ this.m10, this.m11, this.m12 ];
    }
    else if ( row === 2 ) {
      return [ this.m20, this.m21, this.m22 ];
    }
    else {
      return null;
    }
  }

  /**
   * @method getCol
   * col 番目の列を配列で返します。col が 0、1、2 のいずれかでなければ null を返します。
   *
   * ### Example
   *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
   *     mat1.getCol(0); // [1, 4, 7]
   *     mat1.getCol(1); // [2, 5, 8]
   *     mat1.getRow(-1); // null
   *
   * @param {0/1/2} col 列番号
   * @return {Number[]} 列を表す配列
   */
  getCol(col) {
    if ( col === 0 ) {
      return [ this.m00, this.m10, this.m20 ];
    }
    else if ( col === 1 ) {
      return [ this.m01, this.m11, this.m21 ];
    }
    else if ( col === 2 ) {
      return [ this.m02, this.m12, this.m22 ];
    }
    else {
      return null;
    }
  }

  /**
   * @method toString
   * 行列を JSON 形式で表現した文字列を返します。
   *
   * ### Example
   *     v = phina.geom.Vector2(3, 4);
   *     v2 = v.clone();
   *     v2.x == v.x; // => true
   *
   * @return {String} JSON 文字列
   */
  toString() {
    return format.call("|{m00}, {m01}, {m02}|\n|{m10}, {m11}, {m12}|\n|{m20}, {m21}, {m22}|", this);
    // return "|{m00}, {m01}, {m02}|\n|{m10}, {m11}, {m12}|\n|{m20}, {m21}, {m22}|".format(this);
  }

}

/**
 * @property {phina.geom.Matrix33} IDENTITY 単位行列
 * @readonly
 */
Matrix33.IDENTITY = new Matrix33().identity();

/**
* @class phina.geom.Collision
* # 衝突判定用クラス
* 衝突判定のためのクラスです。すべてのメソッドがスタティックメソッドです。
* 
*/
class Collision {

  /**
   * @method testCircleCircle
   * @static
   * 2つの円領域が重なっているかどうかを判定します
   *
   * ### Example
   *     circle1 = phina.geom.Circle(100, 100, 30);
   *     circle2 = phina.geom.Circle(130, 140, 30);
   * phina.geom.Collision.testCircleCircle(circle1, circle2); // => true
   *
   * @param {phina.geom.Circle} circle1 円領域オブジェクト
   * @param {phina.geom.Circle} circle2 円領域オブジェクト
   * @return {Boolean} 領域が重なっているかどうか
   */
  static testCircleCircle(circle0, circle1) {
    var distanceSquared = phina.geom.Vector2.distanceSquared(circle0, circle1);
    return distanceSquared <= Math.pow(circle0.radius + circle1.radius, 2);
  }
  /**
   * @method testRectRect
   * @static
   * 2つの矩形領域が重なっているかどうかを判定します
   *
   * ### Example
   *     rect1 = phina.geom.Rect(100, 100, 30, 40);
   *     rect2 = phina.geom.Rect(200, 200, 10, 10);
   *     phina.geom.Collision.testRectRect(rect1, rect2); // => false
   *
   * @param {phina.geom.Rect} rect1 矩形領域オブジェクト
   * @param {phina.geom.Rect} rect2 矩形領域オブジェクト
   * @return {Boolean} 領域が重なっているかどうか
   */
  static testRectRect(rect0, rect1) {
    return (rect0.left < rect1.right) && (rect0.right > rect1.left) &&
      (rect0.top < rect1.bottom) && (rect0.bottom > rect1.top);
  }
  /**
   * @method testCircleRect
   * @static
   * 円領域と矩形領域が重なっているかどうかかを判定します
   *
   * ### Example
   *     circle = phina.geom.Circle(100, 100, 30);
   *     rect = phina.geom.Rect(100, 100, 30, 40);
   *     phina.geom.Collision.testCircleRect(circle, rect); // => true
   *
   * @param {phina.geom.Circle} circle 円領域オブジェクト
   * @param {phina.geom.Rect} rect 矩形領域オブジェクト
   * @return {Boolean} 領域が重なっているかどうか
   */
  static testCircleRect(circle, rect) {
    // まずは大きな矩形で判定(高速化)
    var bigRect = phina.geom.Rect(rect.left-circle.radius, rect.top-circle.radius, rect.width+circle.radius*2, rect.height+circle.radius*2);
    if (bigRect.contains(circle.x, circle.y) === false) {
      return false;
    }
    
    // 2種類の矩形と衝突判定
    var r = phina.geom.Rect(rect.left-circle.radius, rect.top, rect.width+circle.radius*2, rect.height);
    if (r.contains(circle.x, circle.y)) {
      return true;
    }
    r.set(rect.left, rect.top-circle.radius, rect.width, rect.height+circle.radius*2);
    if (r.contains(circle.x, circle.y)) {
      return true;
    }
    
    // 円と矩形の４点の判定
    var c = phina.geom.Circle(circle.x, circle.y, circle.radius);
    // left top
    if (c.contains(rect.left, rect.top)) {
      return true;
    }
    // right top
    if (c.contains(rect.right, rect.top)) {
      return true;
    }
    // right bottom
    if (c.contains(rect.right, rect.bottom)) {
      return true;
    }
    // left bottom
    if (c.contains(rect.left, rect.bottom)) {
      return true;
    }
    
    return false;
  }
  /**
   * @method testCircleLine
   * @static
   * 円領域と線分が重なっているかどうかを判定します
   *
   * ### Example
   *     circle = phina.geom.Circle(100, 100, 20);
   *     p1 = phina.geom.Vector2(0, 0);
   *     p2 = phina.geom.Vector2(300, 400);
   *     phina.geom.Collision.testCircleLine(circle, p1, p2); // => true
   *
   * @param {phina.geom.Circle} circle 円領域オブジェクト
   * @param {phina.geom.Vector2} p1 線分の端の座標
   * @param {phina.geom.Vector2} p2 線分の端の座標
   * @return {Boolean} 円領域と線分が重なっているかどうか
   */
  static testCircleLine (circle, p1, p2) {
    // 先に線分端との判定
    if (circle.contains(p1.x, p1.y) || circle.contains(p2.x, p2.y)) return true;
    // 半径の2乗
    var r2 = circle.radius * circle.radius;
    // 円の中心座標
    var p3 = phina.geom.Vector2(circle.x, circle.y);
    // 各ベクトル
    var p1p2 = phina.geom.Vector2.sub(p1, p2);
    var p1p3 = phina.geom.Vector2.sub(p1, p3);
    var p2p3 = phina.geom.Vector2.sub(p2, p3);
    // 外積
    var cross = phina.geom.Vector2.cross(p1p2, p1p3);
    // 外積の絶対値の2乗
    var cross2 = cross * cross;
    // p1p2の長さの2乗
    var length2 = p1p2.lengthSquared();
    // 円の中心から線分までの垂線の距離の2乗
    var d2 = cross2 / length2;
    // 円の半径の2乗より小さいなら重複
    if (d2 <= r2) {
      var dot1 = phina.geom.Vector2.dot(p1p3, p1p2);
      var dot2 = phina.geom.Vector2.dot(p2p3, p1p2);
      // 通常は内積の乗算
      if (dot1 * dot2 <= 0) return true;
    }
    return false;
  }
  /**
   * @method testLineLine
   * @static
   * 2つの線分が重なっているかどうかを判定します
   * 参考：http://www5d.biglobe.ne.jp/~tomoya03/shtml/algorithm/Intersection.htm
   *
   * ### Example
   *     p1 = phina.geom.Vector2(100, 100);
   *     p2 = phina.geom.Vector2(200, 200);
   *     p3 = phina.geom.Vector2(150, 240);
   *     p4 = phina.geom.Vector2(200, 100);
   * phina.geom.Collision.testLineLine(p1, p2, p3, p4); // => true
   *
   * @param {phina.geom.Vector2} p1 線分1の端の座標
   * @param {phina.geom.Vector2} p2 線分1の端の座標
   * @param {phina.geom.Vector2} p3 線分2の端の座標
   * @param {phina.geom.Vector2} p4 線分2の端の座標
   * @return {Boolean} 線分1と線分2が重なっているかどうか
   */
  static testLineLine (p1, p2, p3, p4) {
    //同一ＸＹ軸上に乗ってる場合の誤判定回避
    if (p1.x == p2.x && p1.x == p3.x && p1.x == p4.x) {
      var min = Math.min(p1.y, p2.y);
      var max = Math.max(p1.y, p2.y);
      if (min <= p3.y && p3.y <= max || min <= p4.y && p4.y <= max) return true;
      return false;
    }
    if (p1.y == p2.y && p1.y == p3.y && p1.y == p4.y) {
      var min = Math.min(p1.x, p2.x);
      var max = Math.max(p1.x, p2.x);
      if (min <= p3.x && p3.x <= max || min <= p4.x && p4.x <= max) return true;
      return false;
    }
    //通常判定
    var a = (p1.x - p2.x) * (p3.y - p1.y) + (p1.y - p2.y) * (p1.x - p3.x);
    var b = (p1.x - p2.x) * (p4.y - p1.y) + (p1.y - p2.y) * (p1.x - p4.x);
    var c = (p3.x - p4.x) * (p1.y - p3.y) + (p3.y - p4.y) * (p3.x - p1.x);
    var d = (p3.x - p4.x) * (p2.y - p3.y) + (p3.y - p4.y) * (p3.x - p2.x);
    return a * b <= 0 && c * d <= 0;
  }
  /**
   * @method testRectLine
   * @static
   * 矩形と線分が重なっているかどうかを判定します
   *
   * ### Example
   *     rect = phina.geom.Rect(120, 130, 40, 50);
   *     p1 = phina.geom.Vector2(100, 100);
   *     p2 = phina.geom.Vector2(200, 200);
   * phina.geom.Collision.testRectLine(rect, p1, p2); // => true
   *
   * @param {phina.geom.Rect} rect 矩形領域オブジェクト
   * @param {phina.geom.Vector2} p1 線分の端の座標
   * @param {phina.geom.Vector2} p2 線分の端の座標
   * @return {Boolean} 矩形と線分が重なっているかどうか
   */
  static testRectLine (rect, p1, p2) {
      //包含判定(p1が含まれてれば良いのでp2の判定はしない）
      if (rect.left <= p1.x && p1.x <= rect.right && rect.top <= p1.y && p1.y <= rect.bottom ) return true;

      //矩形の４点
      var r1 = phina.geom.Vector2(rect.left, rect.top);     //左上
      var r2 = phina.geom.Vector2(rect.right, rect.top);    //右上
      var r3 = phina.geom.Vector2(rect.right, rect.bottom); //右下
      var r4 = phina.geom.Vector2(rect.left, rect.bottom);  //左下

      //矩形の４辺をなす線分との接触判定
      if (phina.geom.Collision.testLineLine(p1, p2, r1, r2)) return true;
      if (phina.geom.Collision.testLineLine(p1, p2, r2, r3)) return true;
      if (phina.geom.Collision.testLineLine(p1, p2, r3, r4)) return true;
      if (phina.geom.Collision.testLineLine(p1, p2, r1, r4)) return true;
      return false;
  }

}

/**
 * @class phina.geom.Vector3
 * # 3次元ベクトルクラス（未実装）
 * 3次元のベクトルや座標を表すクラスです。
 */
class Vector3 {

  /** x座標 */
  // x: 0,
  /** y座標 */
  // y: 0,
  /** z座標 */
  // z: 0,

  /**
   * @constructor
   */
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

}

/**
 * @class phina.graphics.Canvas
 * キャンバス拡張クラス
 */
class Canvas {
  // domElement: null,
  // canvas: null,
  // context: null,

  /**
   * 初期化
   */
  constructor(canvas) {
    if (typeof canvas === 'string') {
      this.canvas = document.querySelector(canvas);
    } else {
      this.canvas = canvas || document.createElement('canvas');
    }

    this.domElement = this.canvas;
    this.context = this.canvas.getContext('2d');
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
  }

  /**
   * サイズをセット
   */
  setSize(width, height) {
    this.canvas.width   = width;
    this.canvas.height  = height;
    return this;
  }

  setSizeToScreen() {
    this.canvas.style.position  = "fixed";
    this.canvas.style.margin    = "0px";
    this.canvas.style.padding   = "0px";
    this.canvas.style.left      = "0px";
    this.canvas.style.top       = "0px";
    return this.setSize(window.innerWidth, window.innerHeight);
  }

  fitScreen(isEver) {
    isEver = isEver === undefined ? true : isEver;

    var _fitFunc = function() {
      var e = this.domElement;
      var s = e.style;
      
      s.position = "absolute";
      s.margin = "auto";
      s.left = "0px";
      s.top  = "0px";
      s.bottom = "0px";
      s.right = "0px";

      var rateWidth = e.width/window.innerWidth;
      var rateHeight= e.height/window.innerHeight;
      var rate = e.height/e.width;
      
      if (rateWidth > rateHeight) {
        s.width  = Math.floor(innerWidth)+"px";
        s.height = Math.floor(innerWidth*rate)+"px";
      }
      else {
        s.width  = Math.floor(innerHeight/rate)+"px";
        s.height = Math.floor(innerHeight)+"px";
      }
    }.bind(this);
    
    // 一度実行しておく
    _fitFunc();

    // リサイズ時のリスナとして登録しておく
    if (isEver) {
      phina$1.global.addEventListener("resize", _fitFunc, false);
    }
  }

  /**
   * クリア
   */
  clear(x, y, width, height) {
    x = x || 0;
    y = y || 0;
    width = width || this.width;
    height= height|| this.height;
    this.context.clearRect(x, y, width, height);
    return this;
  }

  clearColor(fillStyle, x, y, width, height) {
    x = x || 0;
    y = y || 0;
    width = width || this.width;
    height= height|| this.height;

    var context = this.context;

    context.save();
    context.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0); // 行列初期化
    context.fillStyle = fillStyle;     // 塗りつぶしスタイルセット
    context.fillRect(x, y, width, height);
    context.restore();

    return this;
  }


  /**
   * パスを開始(リセット)
   */
  beginPath() {
    this.context.beginPath();
    return this;
  }

  /**
   *  パスを閉じる
   */
  closePath() {
    this.context.closePath();
    return this;
  }


  /**
   *  新規パス生成
   */
  moveTo(x, y) {
    this.context.moveTo(x, y);
    return this;
  }

  /**
   * パスに追加
   */
  lineTo(x, y) {
    this.context.lineTo(x, y);
    return this;
  }

  quadraticCurveTo() {
    this.context.quadraticCurveTo.apply(this.context, arguments);
    return this;
  }

  bezierCurveTo() {
    this.context.bezierCurveTo.apply(this.context, arguments);
    return this;
  }

  /**
   * パス内を塗りつぶす
   */
  fill() {
    this.context.fill();
    return this;
  }

  /**
   * パス上にラインを引く
   */
  stroke() {
    this.context.stroke();
    return this;
  }

  /**
   * クリップ
   */
  clip() {
    this.context.clip();
    return this;
  }

      
  /**
   * 点描画
   */
  drawPoint(x, y) {
    return this.strokeRect(x, y, 1, 1);
  }

  /**
   * ラインパスを作成
   */
  line(x0, y0, x1, y1) {
    return this.moveTo(x0, y0).lineTo(x1, y1);
  }
  
  /**
   * ラインを描画
   */
  drawLine(x0, y0, x1, y1) {
    return this.beginPath().line(x0, y0, x1, y1).stroke();
  }

  /**
   * ダッシュラインを描画
   */
  drawDashLine(x0, y0, x1, y1, pattern) {
    var patternTable = null;
    if (typeof(pattern) == "string") {
      patternTable = pattern;
    }
    else {
      pattern = pattern || 0xf0f0;
      patternTable = pattern.toString(2);
    }
    patternTable = patternTable.padding(16, '1');
    
    var vx = x1-x0;
    var vy = y1-y0;
    var len = Math.sqrt(vx*vx + vy*vy);
    vx/=len; vy/=len;
    
    var x = x0;
    var y = y0;
    for (var i=0; i<len; ++i) {
      if (patternTable[i%16] == '1') {
        this.drawPoint(x, y);
        // this.fillRect(x, y, this.context.lineWidth, this.context.lineWidth);
      }
      x += vx;
      y += vy;
    }
    
    return this;
  }

  /**
   * v0(x0, y0), v1(x1, y1) から角度を求めて矢印を描画
   * http://hakuhin.jp/as/rotation.html
   */
  drawArrow(x0, y0, x1, y1, arrowRadius) {
    var vx = x1-x0;
    var vy = y1-y0;
    var angle = Math.atan2(vy, vx)*180/Math.PI;
    
    this.drawLine(x0, y0, x1, y1);
    this.fillPolygon(x1, y1, arrowRadius || 5, 3, angle);
    
    return this;
  }


  /**
   * lines
   */
  lines() {
    this.moveTo(arguments[0], arguments[1]);
    for (var i=1,len=arguments.length/2; i<len; ++i) {
      this.lineTo(arguments[i*2], arguments[i*2+1]);
    }
    return this;
  }

  /**
   * ラインストローク描画
   */
  strokeLines() {
    this.beginPath();
    this.lines.apply(this, arguments);
    this.stroke();
    return this;
  }

  /**
   * ライン塗りつぶし描画
   */
  fillLines() {
    this.beginPath();
    this.lines.apply(this, arguments);
    this.fill();
    return this;
  }
  
  /**
   * 四角形パスを作成する
   */
  rect(x, y, width, height) {
    this.context.rect.apply(this.context, arguments);
    return this;
  }
  
  /**
   * 四角形塗りつぶし描画
   */
  fillRect() {
    this.context.fillRect.apply(this.context, arguments);
    return this;
  }
  
  /**
   * 四角形ライン描画
   */
  strokeRect() {
    this.context.strokeRect.apply(this.context, arguments);
    return this;
  }
  
  /**
   * 角丸四角形パス
   */
  roundRect(x, y, width, height, radius) {
    var l = x + radius;
    var r = x + width - radius;
    var t = y + radius;
    var b = y + height - radius;
    
    /*
    var ctx = this.context;
    ctx.moveTo(l, y);
    ctx.lineTo(r, y);
    ctx.quadraticCurveTo(x+width, y, x+width, t);
    ctx.lineTo(x+width, b);
    ctx.quadraticCurveTo(x+width, y+height, r, y+height);
    ctx.lineTo(l, y+height);
    ctx.quadraticCurveTo(x, y+height, x, b);
    ctx.lineTo(x, t);
    ctx.quadraticCurveTo(x, y, l, y);
    /**/
    
    this.context.arc(l, t, radius,     -Math.PI, -Math.PI*0.5, false);  // 左上
    this.context.arc(r, t, radius, -Math.PI*0.5,            0, false);  // 右上
    this.context.arc(r, b, radius,            0,  Math.PI*0.5, false);  // 右下
    this.context.arc(l, b, radius,  Math.PI*0.5,      Math.PI, false);  // 左下
    this.closePath();
    
    return this;
  }

  /**
   * 角丸四角形塗りつぶし
   */
  fillRoundRect(x, y, width, height, radius) {
    return this.beginPath().roundRect(x, y, width, height, radius).fill();
  }

  /**
   * 角丸四角形ストローク描画
   */
  strokeRoundRect(x, y, width, height, radius) {
    return this.beginPath().roundRect(x, y, width, height, radius).stroke();
  }

  /**
   * 円のパスを設定
   */
  circle(x, y, radius) {
    this.context.arc(x, y, radius, 0, Math.PI*2, false);
    return this;
  }
  
  /**
   * 塗りつぶし円を描画
   */
  fillCircle(x, y, radius) {
    var c = this.context;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, false);
    c.closePath();
    c.fill();
    return this;
  }
  
  /**
   * ストローク円を描画
   */
  strokeCircle(x, y, radius) {
    var c = this.context;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, false);
    c.closePath();
    c.stroke();
    return this;
  }

  /**
   * 円弧のパスを設定
   */
  arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  
  /**
   * 塗りつぶし円弧を描画
   */
  fillArc(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().arc(x, y, radius, startAngle, endAngle, anticlockwise).fill();
  }
  
  /**
   * ストローク円弧を描画
   */
  strokeArc(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().arc(x, y, radius, startAngle, endAngle, anticlockwise).stroke();
  }


  pie(x, y, radius, startAngle, endAngle, anticlockwise) {
    var context = this.context;
    context.beginPath();
    context.moveTo(0, 0);
    context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    context.closePath();
    return this;
  }
  fillPie(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().pie(x, y, radius, startAngle, endAngle, anticlockwise).fill();
  }
  strokePie(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.beginPath().pie(x, y, radius, startAngle, endAngle, anticlockwise).stroke();
  }

  
  /**
   * ポリゴンパス
   */
  polygon(x, y, size, sides, offsetAngle) {
    var radDiv = (Math.PI*2)/sides;
    var radOffset = (offsetAngle!==undefined) ? offsetAngle*Math.PI/180 : -Math.PI/2;
    
    this.moveTo(x + Math.cos(radOffset)*size, y + Math.sin(radOffset)*size);
    for (var i=1; i<sides; ++i) {
      var rad = radDiv*i+radOffset;
      this.lineTo(
        x + Math.cos(rad)*size,
        y + Math.sin(rad)*size
      );
    }
    this.closePath();
    return this;
  }
  /**
   * ポリゴン塗りつぶし
   */
  fillPolygon(x, y, radius, sides, offsetAngle) {
    return this.beginPath().polygon(x, y, radius, sides, offsetAngle).fill();
  }
  /**
   * ポリゴンストローク描画
   */
  strokePolygon(x, y, radius, sides, offsetAngle) {
    return this.beginPath().polygon(x, y, radius, sides, offsetAngle).stroke();
  }
  
  /**
   * star
   */
  star(x, y, radius, sides, sideIndent, offsetAngle) {
    var x = x || 0;
    var y = y || 0;
    var radius = radius || 64;
    var sides = sides || 5;
    var sideIndentRadius = radius * (sideIndent || 0.38);
    var radOffset = (offsetAngle) ? offsetAngle*Math.PI/180 : -Math.PI/2;
    var radDiv = (Math.PI*2)/sides/2;

    this.moveTo(
      x + Math.cos(radOffset)*radius,
      y + Math.sin(radOffset)*radius
    );
    for (var i=1; i<sides*2; ++i) {
      var rad = radDiv*i + radOffset;
      var len = (i%2) ? sideIndentRadius : radius;
      this.lineTo(
        x + Math.cos(rad)*len,
        y + Math.sin(rad)*len
      );
    }
    this.closePath();

    return this;
  }

  /**
   * 星を塗りつぶし描画
   */
  fillStar(x, y, radius, sides, sideIndent, offsetAngle) {
    this.beginPath().star(x, y, radius, sides, sideIndent, offsetAngle).fill();
    return this;
  }

  /**
   * 星をストローク描画
   */
  strokeStar(x, y, radius, sides, sideIndent, offsetAngle) {
    this.beginPath().star(x, y, radius, sides, sideIndent, offsetAngle).stroke();
    return this;
  }

  /*
   * heart
   */
  heart(x, y, radius, angle) {
    var half_radius = radius*0.5;
    var rad = (angle === undefined) ? Math.PI/4 : Math.degToRad(angle);

    // 半径 half_radius の角度 angle 上の点との接線を求める
    var p = Math.cos(rad)*half_radius;
    var q = Math.sin(rad)*half_radius;

    // 円の接線の方程式 px + qy = r^2 より y = (r^2-px)/q
    var x2 = -half_radius;
    var y2 = (half_radius*half_radius-p*x2)/q;

    // 中心位置調整
    var height = y2 + half_radius;
    var offsetY = half_radius-height/2;

    // パスをセット
    this.moveTo(0+x, y2+y+offsetY);

    this.arc(-half_radius+x, 0+y+offsetY, half_radius, Math.PI-rad, Math.PI*2);
    this.arc(half_radius+x, 0+y+offsetY, half_radius, Math.PI, rad);
    this.closePath();

    return this;
  }

  /*
   * fill heart
   */
  fillHeart(x, y, radius, angle) {
    return this.beginPath().heart(x, y, radius, angle).fill();
  }

  /*
   * stroke heart
   */
  strokeHeart(x, y, radius, angle) {
    return this.beginPath().heart(x, y, radius, angle).stroke();
  }

  /*
   * http://stackoverflow.com/questions/14169234/the-relation-of-the-bezier-curve-and-ellipse
   */
  ellipse(x, y, w, h) {
    var ctx = this.context;
    var kappa = 0.5522848;

    var ox = (w / 2) * kappa; // control point offset horizontal
    var oy = (h / 2) * kappa; // control point offset vertical
    var xe = x + w;           // x-end
    var ye = y + h;           // y-end
    var xm = x + w / 2;       // x-middle
    var ym = y + h / 2;       // y-middle

    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    // ctx.closePath();

    return this;
  }

  fillEllipse(x, y, width, height) {
    return this.beginPath().ellipse(x, y, width, height).fill();
  }
  strokeEllipse(x, y, width, height) {
    return this.beginPath().ellipse(x, y, width, height).stroke();
  }

  fillText() {
    this._context.fillText.apply(this._context, arguments);
    return this;
  }

  strokeText() {
    this._context.strokeText.apply(this._context, arguments);
    return this;
  }

  /*
   * 画像を描画
   */
  drawImage() {
    this.context.drawImage.apply(this.context, arguments);
  }

  /**
   * 行列をセット
   */
  setTransform(m11, m12, m21, m22, dx, dy) {
    this.context.setTransform(m11, m12, m21, m22, dx, dy);
    return this;
  }

  /**
   * 行列をリセット
   */
  resetTransform() {
    this.setTransform(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
    return this;
  }
  /**
   * 中心に移動
   */
  transformCenter() {
    this.context.setTransform(1, 0, 0, 1, this.width/2, this.height/2);
    return this;
  }

  /**
   * 移動
   */
  translate(x, y) {
    this.context.translate(x, y);
    return this;
  }
  
  /**
   * 回転
   */
  rotate(rotation) {
    this.context.rotate(rotation);
    return this;
  }
  
  /**
   * スケール
   */
  scale(scaleX, scaleY) {
    this.context.scale(scaleX, scaleY);
    return this;
  }

  /**
   * 状態を保存
   */
  save() {
    this.context.save();
    return this;
  }

  /**
   * 状態を復元
   */
  restore() {
    this.context.restore();
    return this;
  }

  /**
   * 画像として保存
   */
  saveAsImage(mime_type) {
    mime_type = mime_type || "image/png";
    var data_url = this.canvas.toDataURL(mime_type);
    // data_url = data_url.replace(mime_type, "image/octet-stream");
    window.open(data_url, "save");
    
    // toDataURL を使えば下記のようなツールが作れるかも!!
    // TODO: プログラムで絵をかいて保存できるツール
  }

  /**
   * 幅
   */
  get width()   { return this.canvas.width; }
  set width(v)  { this.canvas.width = v; }

  /**
   * 高さ
   */
  get height()   { return this.canvas.height; }
  set height(v)  { this.canvas.height = v; }

  get fillStyle()   { return this.context.fillStyle; }
  set fillStyle(v)  { this.context.fillStyle = v; }

  get strokeStyle()   { return this.context.strokeStyle; }
  set strokeStyle(v)  { this.context.strokeStyle = v; }

  get globalAlpha()   { return this.context.globalAlpha; }
  set globalAlpha(v)  { this.context.globalAlpha = v; }

  get globalCompositeOperation()   { return this.context.globalCompositeOperation; }
  set globalCompositeOperation(v)  { this.context.globalCompositeOperation = v; }

  get shadowBlur()   { return this.context.shadowBlur; }
  set shadowBlur(v)  { this.context.shadowBlur = v; }

  get shadowColor()   { return this.context.shadowColor; }
  set shadowColor(v)  { this.context.shadowColor = v; }

  get shadowOffsetX()   { return this.context.shadowOffsetX; }
  set shadowOffsetX(v)  { this.context.shadowOffsetX = v; }

  get shadowOffsetY()   { return this.context.shadowOffsetY; }
  set shadowOffsetY(v)  { this.context.shadowOffsetY = v; }

  get lineCap()   { return this.context.lineCap; }
  set lineCap(v)  { this.context.lineCap = v; }

  get lineJoin()   { return this.context.lineJoin; }
  set lineJoin(v)  { this.context.lineJoin = v; }

  get miterLimit()   { return this.context.miterLimit; }
  set miterLimit(v)  { this.context.miterLimit = v; }

  get lineWidth()   { return this.context.lineWidth; }
  set lineWidth(v)  { this.context.lineWidth = v; }

  get font()   { return this.context.font; }
  set font(v)  { this.context.font = v; }

  get textAlign()   { return this.context.textAlign; }
  set textAlign(v)  { this.context.textAlign = v; }

  get textBaseline()   { return this.context.textBaseline; }
  set textBaseline(v)  { this.context.textBaseline = v; }

  get imageSmoothingEnabled()   { return this.context.imageSmoothingEnabled; }
  set imageSmoothingEnabled(v)  {
    this.context.imageSmoothingEnabled = v;
    this.context.webkitImageSmoothingEnabled = v;
    this.context.mozImageSmoothingEnabled = v;
  }

  static measureText(font, text) {
    this._context.font = font;
    return this._context.measureText(text);
  }

  static createLinearGradient() {
    return this._context.createLinearGradient.apply(this._context, arguments);
  }

  static createRadialGradient() {
    return this._context.createRadialGradient.apply(this._context, arguments);
  }

}

Canvas._context = (function() {
  if (Support.canvas) {
    return document.createElement('canvas').getContext('2d');
  }
  else {
    return null;
  }
})();

// import { first, last, clear } from "../core/array"

/**
 * @class phina.input.Input
 * @extends phina.util.EventDispatcher
 */
class Input extends EventDispatcher {

  // /** domElement */
  // domElement = null

  constructor(domElement) {
    super();

    this.domElement = domElement || window.document;

    this.position = new Vector2(0, 0);
    this.startPosition = new Vector2(0, 0);
    this.deltaPosition = new Vector2(0, 0);
    this.prevPosition = new Vector2(0, 0);
    this._tempPosition = new Vector2(0, 0);

    this.maxCacheNum = Input.defaults.maxCacheNum;
    this.minDistance = Input.defaults.minDistance;
    this.maxDistance = Input.defaults.maxDistance;
    this.cachePositions = [];
    this.flickVelocity = new Vector2(0, 0);

    this.flags = 0;
  }

  update() {
    this.last = this.now;
    this.now = this.flags;
    this.start = (this.now ^ this.last) & this.now;
    this.end   = (this.now ^ this.last) & this.last;

    // 変化値を更新
    this.deltaPosition.x = this._tempPosition.x - this.position.x;
    this.deltaPosition.y = this._tempPosition.y - this.position.y;

    if (this.deltaPosition.x === 0 && this.deltaPosition.y === 0) {
      this._moveFlag = false;
    }
    else {
      this._moveFlag = true;
    }

    if (this.start) {
      this.startPosition.set(this.position.x, this.position.y);
    }

    // 前回の座標を更新
    this.prevPosition.set(this.position.x, this.position.y);

    // 現在の位置を更新
    this.position.set(this._tempPosition.x, this._tempPosition.y);

    if (this.cachePositions.length > this.maxCacheNum) {
      this.cachePositions.shift();
    }
    this.cachePositions.push(this.position.clone());
  }

  _start(x, y, flag) {
    flag = (flag !== undefined) ? flag : 1;
    // console.log('start', x, y);
    this._move(x, y);

    this.flags |= flag;

    var x = this._tempPosition.x;
    var y = this._tempPosition.y;
    this.position.set(x, y);
    this.prevPosition.set(x, y);

    this.flickVelocity.set(0, 0);
    // this.cachePositions.clear();
    this.cachePositions.length = 0;
  }

  _end(flag) {
    flag = (flag !== undefined) ? flag : 1;
    this.flags &= ~(flag);

    if (this.cachePositions.length < 2) return;

    // var first = this.cachePositions.first;
    // var last = this.cachePositions.last;
    var first = this.cachePositions[0];
    var last = this.cachePositions[this.cachePositions.length-1];

    var v = Vector2.sub(last, first);

    var len = v.length();

    if (len > this.minDistance) {
      // var normalLen = len.clamp(this.minDistance, this.maxDistance);
      var normalLen = clamp(len, this.minDistance, this.maxDistance);
      v.div(len).mul(normalLen);
      this.flickVelocity.set(v.x, v.y);
    }

    // this.cachePositions.clear();
    this.cachePositions.length = 0;
  }

  // スケールを考慮
  _move(x, y) {
    this._tempPosition.x = x;
    this._tempPosition.y = y;

    // adjust scale
    var elm = this.domElement;
    var rect = elm.getBoundingClientRect();
    if (rect.width) {
      this._tempPosition.x *= elm.width / rect.width;
    }
    if (rect.height) {
      this._tempPosition.y *= elm.height / rect.height;
    }
  }

  /**
   * @property    x
   * x座標値
   */
  get x() { return this.position.x; }
  set x(v) { this.position.x = v; }

  /**
   * @property    y
   * y座標値
   */
  get y() { return this.position.y; }
  set y(v) { this.position.y = v; }

  /**
   * @property    dx
   * dx値
   */
  get dx() { return this.deltaPosition.x; }
  set dx(v) { this.deltaPosition.x = v; }

  /**
   * @property    dy
   * dy値
   */
  get dy() { return this.deltaPosition.y; }
  set dy(v) { this.deltaPosition.y = v; }

  /**
   * @property    fx
   * fx値
   */
  get fx() { return this.flickVelocity.x; }
  set fx(v) { this.flickVelocity.x = v; }

  /**
   * @property    fy
   * fy値
   */
  get fy() { return this.flickVelocity.y; }
  set fy(v) { this.flickVelocity.y = v; }

}

Input.defaults = {
  maxCacheNum: 3,
  minDistance: 10,
  maxDistance: 100,
};

/**
 * @class phina.input.Keyboard
 * @extends phina.input.Input
 */
class Keyboard extends Input {

  /**
   * @constructor
   */
  constructor(domElement) {
    super(domElement);

    this.key = {};
    this.press  = {};
    this.down   = {};
    this.up     = {};
    this.last   = {};

    this._keydown = null;
    this._keyup = null;
    this._keypress = null;

    var self = this;
    this.domElement.addEventListener('keydown', function(e) {
      self.key[e.keyCode] = true;
      self._keydown = e.keyCode;
    });

    this.domElement.addEventListener('keyup', function(e) {
      self.key[e.keyCode] = false;
      self._keyup = e.keyCode;
    });
    this.domElement.addEventListener('keypress', function(e) {
      self._keypress = e.keyCode;
    });
  }

  /**
   * 情報更新処理
   * マイフレーム呼んで下さい.
   * @private
   */
  update() {
    // TODO: 一括ビット演算で行うよう修正する
    for (var k in this.key) {
      this.last[k]    = this.press[k];
      this.press[k]   = this.key[k];
      
      this.down[k] = (this.press[k] ^ this.last[k]) & this.press[k];
      this.up[k] = (this.press[k] ^ this.last[k]) & this.last[k];
    }

    if (this._keydown) {
      this.flare('keydown', { keyCode: this._keydown });
      this._keydown = null;
    }
    if (this._keyup) {
      this.flare('keyup', { keyCode: this._keyup });
      this._keyup = null;
    }
    if (this._keypress) {
      this.flare('keypress', { keyCode: this._keypress });
      this._keypress = null;
    }
    
    return this;
  }

  /**
   * キーを押しているかをチェック
   * @param   {Number/String} key keyCode or keyName
   * @returns {Boolean}   チェック結果
   */
  getKey(key) {
    if (typeof(key) === "string") {
      key = Keyboard.KEY_CODE[key];
    }
    return !!this.press[key] === true;
  }
  
  /**
   * キーを押したかをチェック
   * @param   {Number/String} key keyCode or keyName
   * @returns {Boolean}   チェック結果
   */
  getKeyDown(key) {
    if (typeof(key) == "string") {
      key = Keyboard.KEY_CODE[key];
    }
    return this.down[key] == true;
  }
  
  /**
   * キーを離したかをチェック
   * @param   {Number/String} key keyCode or keyName
   * @returns {Boolean}   チェック結果
   */
  getKeyUp(key) {
    if (typeof(key) == "string") {
      key = Keyboard.KEY_CODE[key];
    }
    return this.up[key] == true;
  }
  
  /**
   * キーの方向を Angle(Degree) で取得
   * @returns {Boolean}   角度(Degree)
   */
  getKeyAngle() {
    var angle = null;
    var arrowBit =
      (this.getKey("left")   << 3) | // 1000
      (this.getKey("up")     << 2) | // 0100
      (this.getKey("right")  << 1) | // 0010
      (this.getKey("down"));         // 0001
    
    if (arrowBit !== 0 && Keyboard.ARROW_BIT_TO_ANGLE_TABLE.hasOwnProperty(arrowBit)) {
      angle = Keyboard.ARROW_BIT_TO_ANGLE_TABLE[arrowBit];
    }
    
    return angle;
  }

  /**
   * キーの押している向きを取得
   * 正規化されている
   */
  getKeyDirection() {
    var direction = new Vector2(0, 0);

    if (this.getKey("left")) {
      direction.x = -1;
    }
    else if (this.getKey("right")) {
      direction.x = 1;
    }
    if (this.getKey("up")) {
      direction.y = -1;
    }
    else if (this.getKey("down")) {
      direction.y = 1;
    }

    if (direction.x && direction.y) {
      direction.div(Math.SQRT2);
    }

    return direction;
  }
  
  /**
   * キーの状態を設定する
   */
  setKey(key, flag) {
    if (typeof(key) == "string") {
      key = Keyboard.KEY_CODE[key];
    }
    this.key[key] = flag;
    
    return this;
  }

  /**
   * キーを全て離したことにする
   */
  clearKey() {
    this.key = {};
    
    return this;
  }

}

/**
 * @static
 * @enum ARROW_BIT_TO_ANGLE_TABLE
 * 方向のアングル jsduckでは数字をプロパティに指定できない？
 * @private
 */
Keyboard.ARROW_BIT_TO_ANGLE_TABLE = {
  /* @property 下 */
  0x01: 270,
  /* @property 右 */
  0x02:   0,
  /* @property 上 */
  0x04:  90,
  /* @property 左 */
  0x08: 180,

  /* @property 右上 */
  0x06:  45,
  /* @property 右下 */
  0x03: 315,
  /* @property 左上 */
  0x0c: 135,
  /* @property 左下 */
  0x09: 225,

  // 三方向同時押し対応
  // 想定外の操作だが対応しといたほうが無難
  /* @property 右上左 */
  0x0e:  90,
  /* @property 上左下 */
  0x0d: 180,
  /* @property 左下右 */
  0x0b: 270,
  /* @property 下右上 */
  0x07:   0,
};

/*
 * @static
 * @enum KEY_CODE
 * キー番号
 * @private
 */
Keyboard.KEY_CODE = {
  /* @property */
  "backspace" : 8,
  /* @property */
  "tab"       : 9,
  /* @property */
  "enter"     : 13,
  /* @property */
  "return"    : 13,
  /* @property */
  "shift"     : 16,
  /* @property */
  "ctrl"      : 17,
  /* @property */
  "alt"       : 18,
  /* @property */
  "pause"     : 19,
  /* @property */
  "capslock"  : 20,
  /* @property */
  "escape"    : 27,
  /* @property */
  "pageup"    : 33,
  /* @property */
  "pagedown"  : 34,
  /* @property */
  "end"       : 35,
  /* @property */
  "home"      : 36,
  /* @property */
  "left"      : 37,
  /* @property */
  "up"        : 38,
  /* @property */
  "right"     : 39,
  /* @property */
  "down"      : 40,
  /* @property */
  "insert"    : 45,
  /* @property */
  "delete"    : 46,
  
  /* @property */
  "0" : 48,
  /* @property */
  "1" : 49,
  /* @property */
  "2" : 50,
  /* @property */
  "3" : 51,
  /* @property */
  "4" : 52,
  /* @property */
  "5" : 53,
  /* @property */
  "6" : 54,
  /* @property */
  "7" : 55,
  /* @property */
  "8" : 56,
  /* @property */
  "9" : 57,
  /* @property */
  
  "a" : 65,
  /* @property */
  "A" : 65,
  /* @property */
  "b" : 66,
  /* @property */
  "B" : 66,
  /* @property */
  "c" : 67,
  /* @property */
  "C" : 67,
  /* @property */
  "d" : 68,
  /* @property */
  "D" : 68,
  /* @property */
  "e" : 69,
  /* @property */
  "E" : 69,
  /* @property */
  "f" : 70,
  /* @property */
  "F" : 70,
  /* @property */
  "g" : 71,
  /* @property */
  "G" : 71,
  /* @property */
  "h" : 72,
  /* @property */
  "H" : 72,
  /* @property */
  "i" : 73,
  /* @property */
  "I" : 73,
  /* @property */
  "j" : 74,
  /* @property */
  "J" : 74,
  /* @property */
  "k" : 75,
  /* @property */
  "K" : 75,
  /* @property */
  "l" : 76,
  /* @property */
  "L" : 76,
  /* @property */
  "m" : 77,
  /* @property */
  "M" : 77,
  /* @property */
  "n" : 78,
  /* @property */
  "N" : 78,
  /* @property */
  "o" : 79,
  /* @property */
  "O" : 79,
  /* @property */
  "p" : 80,
  /* @property */
  "P" : 80,
  /* @property */
  "q" : 81,
  /* @property */
  "Q" : 81,
  /* @property */
  "r" : 82,
  /* @property */
  "R" : 82,
  /* @property */
  "s" : 83,
  /* @property */
  "S" : 83,
  /* @property */
  "t" : 84,
  /* @property */
  "T" : 84,
  /* @property */
  "u" : 85,
  /* @property */
  "U" : 85,
  /* @property */
  "v" : 86,
  /* @property */
  "V" : 86,
  /* @property */
  "w" : 87,
  /* @property */
  "W" : 87,
  /* @property */
  "x" : 88,
  /* @property */
  "X" : 88,
  /* @property */
  "y" : 89,
  /* @property */
  "Y" : 89,
  /* @property */
  "z" : 90,
  /* @property */
  "Z" : 90,
  
  /* @property */
  "numpad0" : 96,
  /* @property */
  "numpad1" : 97,
  /* @property */
  "numpad2" : 98,
  /* @property */
  "numpad3" : 99,
  /* @property */
  "numpad4" : 100,
  /* @property */
  "numpad5" : 101,
  /* @property */
  "numpad6" : 102,
  /* @property */
  "numpad7" : 103,
  /* @property */
  "numpad8" : 104,
  /* @property */
  "numpad9" : 105,
  /* @property */
  "multiply"      : 106,
  /* @property */
  "add"           : 107,
  /* @property */
  "subtract"      : 109,
  /* @property */
  "decimalpoint"  : 110,
  /* @property */
  "divide"        : 111,

  /* @property */
  "f1"    : 112,
  /* @property */
  "f2"    : 113,
  /* @property */
  "f3"    : 114,
  /* @property */
  "f4"    : 115,
  /* @property */
  "f5"    : 116,
  /* @property */
  "f6"    : 117,
  /* @property */
  "f7"    : 118,
  /* @property */
  "f8"    : 119,
  /* @property */
  "f9"    : 120,
  /* @property */
  "f10"   : 121,
  /* @property */
  "f11"   : 122,
  /* @property */
  "f12"   : 123,
  
  /* @property */
  "numlock"   : 144,
  /* @property */
  "scrolllock": 145,
  /* @property */
  "semicolon" : 186,
  /* @property */
  "equalsign" : 187,
  /* @property */
  "comma"     : 188,
  /* @property */
  "dash"      : 189,
  /* @property */
  "period"    : 190,
  /* @property */
  "forward slash" : 191,
  /* @property */
  "/": 191,
  /* @property */
  "grave accent"  : 192,
  /* @property */
  "open bracket"  : 219,
  /* @property */
  "back slash"    : 220,
  /* @property */
  "close bracket"  : 221,
  /* @property */
  "single quote"  : 222,
  /* @property */
  "space"         : 32

};

/**
 * MouseEvent/Touch拡張
 * @method    pointX
 * マウスのX座標.
 */
var pointX = {
  get: function() {
    return this.clientX - this.target.getBoundingClientRect().left;
  }
};

/**
 * MouseEvent/Touch拡張
 * @method    pointX
 * マウスのX座標.
 */
var pointY = {
  get: function() {
    return this.clientY - this.target.getBoundingClientRect().top;
  }
};

/**
 * TouchEvent拡張
 * @method    pointX
 * タッチイベント.
 */
var touchPointX = {
  get: function() {
    return this.touches[0].clientX - this.target.getBoundingClientRect().left;
    // return this.touches[0].pageX - this.target.getBoundingClientRect().left - tm.global.scrollX;
  }
};

/**
 * TouchEvent拡張
 * @method    pointY
 * タッチイベント.
 */
var touchPointY = {
  get: function() {
    return this.touches[0].clientY - this.target.getBoundingClientRect().top;
    // return this.touches[0].pageY - this.target.getBoundingClientRect().top - tm.global.scrollY;
  }
};


// ;(function() {

  // if (!phina.global.Event) return ;

  /**
   * @class global.Event
   * 既存のEventオブジェクト拡張
   */
    
  // /**
  //  * @method stop
  //  * イベントのデフォルト処理 & 伝達を止める
  //  */
  // Event.prototype.stop = function() {
  //   // イベントキャンセル
  //   this.preventDefault();
  //   // イベント伝達を止める
  //   this.stopPropagation();
  // };

// })();


// (function() {

//   if (!phina.global.MouseEvent) return ;

//   /**
//    * @class global.MouseEvent
//    * MouseEvent クラス
//    */
  
//   /**
//    * @method    pointX
//    * マウスのX座標.
//    */
//   MouseEvent.prototype.getter("pointX", function() {
//     return this.clientX - this.target.getBoundingClientRect().left;
//     // return this.pageX - this.target.getBoundingClientRect().left - window.scrollX;
//   });
  
//   /**
//    * @method    pointY
//    * マウスのY座標.
//    */
//   MouseEvent.prototype.getter("pointY", function() {
//     return this.clientY - this.target.getBoundingClientRect().top;
//     // return this.pageY - this.target.getBoundingClientRect().top - window.scrollY;
//   });
    
// })();


// (function() {
    
//   if (!phina.global.TouchEvent) return ;
  
  
//   /**
//    * @class global.TouchEvent
//    * TouchEvent クラス
//    */
  
//   /**
//    * @method    pointX
//    * タッチイベント.
//    */
//   TouchEvent.prototype.getter("pointX", function() {
//       return this.touches[0].clientX - this.target.getBoundingClientRect().left;
//       // return this.touches[0].pageX - this.target.getBoundingClientRect().left - tm.global.scrollX;
//   });
  
//   /**
//    * @method    pointY
//    * タッチイベント.
//    */
//   TouchEvent.prototype.getter("pointY", function() {
//       return this.touches[0].clientY - this.target.getBoundingClientRect().top;
//       // return this.touches[0].pageY - this.target.getBoundingClientRect().top - tm.global.scrollY;
//   });  
    
// })();


// (function() {
    
//   if (!phina.global.Touch) return ;
  
//   /**
//    * @class global.Touch
//    * TouchEvent クラス
//    */
  
//   /**
//    * @method    pointX
//    * タッチイベント.
//    */
//   Touch.prototype.getter("pointX", function() {
//       return this.clientX - this.target.getBoundingClientRect().left;
//   });

//   /**
//    * @method    pointY
//    * タッチイベント.
//    */
//   Touch.prototype.getter("pointY", function() {
//       return this.clientY - this.target.getBoundingClientRect().top;
//   });
    
// })();

var BUTTON_MAP;

/**
 * @class phina.input.Mouse
 * @extends phina.input.Input
 */
class Mouse extends Input {

  /**
   * @constructor
   */
  constructor(domElement) {
    super(domElement);

    this.id = 0;

    var self = this;
    this.domElement.addEventListener('mousedown', function(e) {
      self._start(pointX.get.call(e), pointY.get.call(e), 1<<e.button);
      // self._start(e.pointX, e.pointY, 1<<e.button);
    });

    this.domElement.addEventListener('mouseup', function(e) {
      self._end(1<<e.button);
    });
    this.domElement.addEventListener('mousemove', function(e) {
      self._move(pointX.get.call(e), pointY.get.call(e));
      // self._move(e.pointX, e.pointY);
    });

    // マウスがキャンバス要素の外に出た場合の対応
    this.domElement.addEventListener('mouseout', function(e)  {
      self._end(1);
    });
  }

  /**
   * ボタン取得
   */
  getButton(button) {
    if (typeof(button) == "string") {
      button = BUTTON_MAP[button];
    }
    
    return (this.now & button) != 0;
  }

  /**
   * ボタンダウン取得
   */
  getButtonDown(button) {
    if (typeof(button) === 'string') {
      button = BUTTON_MAP[button];
    }

    return (this.start & button) != 0;
  }
      
  /**
   * ボタンアップ取得
   */
  getButtonUp(button) {
    if (typeof(button) == "string") {
      button = BUTTON_MAP[button];
    }
    
    return (this.end & button) != 0;
  }

}

/** @static @property */
Mouse.BUTTON_LEFT = 0x1;
/** @static @property */
Mouse.BUTTON_MIDDLE = 0x2;
/** @static @property */
Mouse.BUTTON_RIGHT = 0x4;

BUTTON_MAP = {
  "left"  : Mouse.BUTTON_LEFT,
  "middle": Mouse.BUTTON_MIDDLE,
  "right" : Mouse.BUTTON_RIGHT
};

Mouse.prototype.getPointing = function() { return this.getButton("left"); };
Mouse.prototype.getPointingStart = function() { return this.getButtonDown("left"); };
Mouse.prototype.getPointingEnd = function() { return this.getButtonUp("left"); };

/**
 * @class phina.input.Touch
 * @extends phina.input.Input
 */
class Touch extends Input {

  /**
   * @constructor
   */
  constructor(domElement, isMulti) {
    super(domElement);

    this.id = null;

    if (isMulti === true) {
      return ;
    }

    var self = this;
    this.domElement.addEventListener('touchstart', function(e) {
      self._start(touchPointX.get.call(e), touchPointY.get.call(e), true);
      // self._start(e.pointX, e.pointY, true);
    });

    this.domElement.addEventListener('touchend', function(e) {
      self._end();
    });
    this.domElement.addEventListener('touchmove', function(e) {
      self._move(touchPointX.get.call(e), touchPointY.get.call(e));
      // self._move(e.pointX, e.pointY);
    });
  }

  /**
   * タッチしているかを判定
   */
  getTouch() {
    return this.now != 0;
  }
  
  /**
   * タッチ開始時に true
   */
  getTouchStart() {
    return this.start != 0;
  }
  
  /**
   * タッチ終了時に true
   */
  getTouchEnd() {
    return this.end != 0;
  }

}

/**
 * @method
 * ポインティング状態取得(mouse との差異対策)
 */
Touch.prototype.getPointing        = Touch.prototype.getTouch;
/**
 * @method
 * ポインティングを開始したかを取得(mouse との差異対策)
 */
Touch.prototype.getPointingStart   = Touch.prototype.getTouchStart;
/**
 * @method
 * ポインティングを終了したかを取得(mouse との差異対策)
 */
Touch.prototype.getPointingEnd     = Touch.prototype.getTouchEnd;


/**
 * @class phina.input.TouchList
 */
class TouchList {

  constructor(domElement) {
    this.domElement = domElement;

    this.touches = [];
    var touchMap = this.touchMap = {};

    // 32bit 周期でIDをループさせる
    this._id = new Uint32Array(1);

    var self = this;
    var each = Array.prototype.forEach;
    this.domElement.addEventListener('touchstart', function(e) {
      each.call(e.changedTouches, function(t) {
        var touch = self.getEmpty();
        touchMap[t.identifier] = touch;
        touch._start(pointX.get.call(t), pointY.get.call(t));
        // touch._start(t.pointX, t.pointY);
      });
    });

    this.domElement.addEventListener('touchend', function(e) {
      each.call(e.changedTouches, function(t) {
        var id = t.identifier;
        var touch = touchMap[id];
        touch._end();
        delete touchMap[id];
      });
    });
    this.domElement.addEventListener('touchmove', function(e) {
      each.call(e.changedTouches, function(t) {
        var touch = touchMap[t.identifier];
        touch._move(pointX.get.call(t), pointY.get.call(t));
        // touch._move(t.pointX, t.pointY);
      });
      e.stop();
    });

    // iPhone では 6本指以上タッチすると強制的にすべてのタッチが解除される
    this.domElement.addEventListener('touchcancel', function(e) {
      console.warn('この端末での同時タッチ数の制限を超えました。');
      each.call(e.changedTouches, function(t) {
        var id = t.identifier;
        var touch = touchMap[id];
        touch._end();
        delete touchMap[id];
      });
      e.stop();
    });
  }

  getEmpty() {
    var touch = new Touch(this.domElement, true);
  
    touch.id = this.id;
    this.touches.push(touch);

    return touch;
  }

  getTouch(id) {
    return this.touchMap[id];
  }

  removeTouch(touch) {
    var i = this.touches.indexOf(touch);
    this.touches.splice(i, 1);
  }

  update() {
    this.touches.forEach(function(touch) {
      if (!touch.released) {
        touch.update();

        if (touch.flags === 0) {
          touch.released = true;
        }
      }
      else {
        touch.released = false;
        this.removeTouch(touch);
      }

    }, this);
  }

  get id() { return this._id[0]++; }

}

/**
 * @class phina.input.GamepadManager
 * ゲームパッドマネージャー.
 * ゲームパッド接続状況の監視、個々のゲームパッドの入力状態の更新を行う.
 * @extends phina.util.EventDispatcher
 */
class GamepadManager extends EventDispatcher {

  /**
   * 作成済みphina.input.Gamepadオブジェクトのリスト
   *
   * @type {Object.<number, phina.input.Gamepad>}
   */
  // gamepads: null,

  /**
   * 作成済みゲームパッドのindexのリスト
   *
   * @type {number[]}
   * @private
   */
  // _created: null,

  /**
   * ラップ前Gamepadのリスト
   * @type {phina.input.Gamepad[]}
   * @private
   */
  // _rawgamepads: null,

  /**
   * @constructor
   */
  constructor() {
    super();

    this.gamepads = {};
    this._created = [];
    this._rawgamepads = [];

    this._prevTimestamps = {};

    this._getGamepads = null;
    var navigator = phina$1.global.navigator;
    if (navigator && navigator.getGamepads) {
      this._getGamepads = navigator.getGamepads.bind(navigator);
    } else if (navigator && navigator.webkitGetGamepads) {
      this._getGamepads = navigator.webkitGetGamepads.bind(navigator);
    } else {
      this._getGamepads = function() {};
    }

    phina$1.global.addEventListener('gamepadconnected', function(e) {
      var gamepad = this.get(e.gamepad.index);
      gamepad.connected = true;
      this.flare('connected', {
        gamepad: gamepad,
      });
    }.bind(this));

    phina$1.global.addEventListener('gamepaddisconnected', function(e) {
      var gamepad = this.get(e.gamepad.index);
      gamepad.connected = false;
      this.flare('disconnected', {
        gamepad: gamepad,
      });
    }.bind(this));
  }

  /**
   * 情報更新処理
   * マイフレーム呼んで下さい.
   */
  update() {
    this._poll();

    for (var i = 0, end = this._created.length; i < end; i++) {
      var index = this._created[i];
      var rawgamepad = this._rawgamepads[index];

      if (!rawgamepad) {
        continue;
      }

      if (rawgamepad.timestamp && (rawgamepad.timestamp === this._prevTimestamps[i])) {
        this.gamepads[index]._updateStateEmpty();
        continue;
      }

      this._prevTimestamps[i] = rawgamepad.timestamp;
      this.gamepads[index]._updateState(rawgamepad);
    }
  }

  /**
   * 指定されたindexのGamepadオブジェクトを返す.
   *
   * 未作成の場合は作成して返す.
   */
  get(index) {
    index = index || 0;

    if (!this.gamepads[index]) {
      this._created.push(index);
      this.gamepads[index] = new Gamepad(index);
    }

    return this.gamepads[index];
  }

  /**
   * 指定されたindexのGamepadオブジェクトを破棄する.
   * 破棄されたGamepadオブジェクトは以降更新されない.
   */
  dispose(index) {
    if (contains.call(this._created, index)) {
    // if (this._created.contains(index)) {
      var gamepad = this.get(index);
      delete this.gamepad[gamepad];
      erase.call(this._created, index);
      // this._created.erase(index);

      gamepad.connected = false;
    }
  }

  /**
   * 指定されたindexのゲームパッドが接続中かどうかを返す.
   *
   * Gamepadオブジェクトが未作成の場合でも動作する.
   */
  isConnected(index) {
    index = index || 0;

    return this._rawgamepads[index] && this._rawgamepads[index].connected;
  }

  /**
   * @private
   */
  _poll() {
    var rawGamepads = this._getGamepads();
    if (rawGamepads) {
      clear.call(this._rawgamepads);
      // this._rawgamepads.clear();

      for (var i = 0, end = rawGamepads.length; i < end; i++) {
        if (rawGamepads[i]) {
          this._rawgamepads.push(rawGamepads[i]);
        }
      }
    }
  }

  // _static: {
  //   /** ブラウザがGamepad APIに対応しているか. */
  //   isAvailable: (function() {
  //     var nav = phina.global.navigator;
  //     if (!nav) return false;

  //     return (!!nav.getGamepads) || (!!nav.webkitGetGamepads);
  //   })(),
  // }

}

// static props
/** ブラウザがGamepad APIに対応しているか. */
GamepadManager.isAvailable = (function() {
  var nav = phina$1.global.navigator;
  if (!nav) return false;

  return (!!nav.getGamepads) || (!!nav.webkitGetGamepads);
})();


/**
 * @class phina.input.Gamepad
 * ゲームパッド
 *
 * 直接インスタンス化せず、phina.input.GamepadManagerオブジェクトから取得して使用する.
 */
class Gamepad {
// phina.define("phina.input.Gamepad", {

  // index: null,
  // buttons: null,
  // /** @type {Array.<phina.geom.Vector2>} */
  // sticks: null,

  // id: null,
  // connected: false,
  // mapping: null,
  // timestamp: null,

  constructor(index) {
    this.index = index || 0;

    // this.buttons = Array.range(0, 16).map(function() {
    this.buttons = range.call([], 0, 16).map(function() {
      return {
        value: 0,
        pressed: false,
        last: false,
        down: false,
        up: false,
      };
    });
    this.sticks = range.call([], 0, 2).map(function() {
    // this.sticks = Array.range(0, 2).map(function() {
      return new Vector2(0, 0);
    });
    this.id = null;
    this.connected = false;
    this.mapping = null;
    this.timestamp = null;
  }

  /**
   * ボタンが押されているか.
   */
  getKey(button) {
    if (typeof(button) === 'string') {
      button = Gamepad.BUTTON_CODE[button];
    }
    if (this.buttons[button]) {
      return this.buttons[button].pressed;
    } else {
      return false;
    }
  }

  /**
   * ボタンを押した.
   */
  getKeyDown(button) {
    if (typeof(button) === 'string') {
      button = Gamepad.BUTTON_CODE[button];
    }
    if (this.buttons[button]) {
      return this.buttons[button].down;
    } else {
      return false;
    }
  }

  /**
   * ボタンを離した.
   */
  getKeyUp(button) {
    if (typeof(button) === 'string') {
      button = Gamepad.BUTTON_CODE[button];
    }
    if (this.buttons[button]) {
      return this.buttons[button].up;
    } else {
      return false;
    }
  }

  /**
   * 十字キーの入力されている方向.
   */
  getKeyAngle() {
    var angle = null;
    var arrowBit =
      (this.getKey('left') << 3) | // 1000
      (this.getKey('up') << 2) | // 0100
      (this.getKey('right') << 1) | // 0010
      (this.getKey('down')); // 0001

    if (arrowBit !== 0 && ARROW_BIT_TO_ANGLE_TABLE.hasOwnProperty(arrowBit)) {
      angle = ARROW_BIT_TO_ANGLE_TABLE[arrowBit];
    }

    return angle;
  }

  /**
   * 十字キーの入力されている方向をベクトルで.
   * 正規化されている.
   */
  getKeyDirection() {
    var direction = new Vector2(0, 0);

    if (this.getKey('left')) {
      direction.x = -1;
    } else if (this.getKey('right')) {
      direction.x = 1;
    }
    if (this.getKey('up')) {
      direction.y = -1;
    } else if (this.getKey('down')) {
      direction.y = 1;
    }

    if (direction.x && direction.y) {
      direction.div(Math.SQRT2);
    }

    return direction;
  }

  /**
   * スティックの入力されている方向.
   */
  getStickAngle(stickId) {
    stickId = stickId || 0;
    var stick = this.sticks[stickId];
    return stick ? Math.atan2(-stick.y, stick.x) : null;
  }

  /**
   * スティックの入力されている方向をベクトルで.
   */
  getStickDirection(stickId) {
    stickId = stickId || 0;
    return this.sticks ? this.sticks[stickId].clone() : new Vector2(0, 0);
  }

  /**
   * @private
   */
  _updateState(gamepad) {
    this.id = gamepad.id;
    this.connected = gamepad.connected;
    this.mapping = gamepad.mapping;
    this.timestamp = gamepad.timestamp;

    for (var i = 0, iend = gamepad.buttons.length; i < iend; i++) {
      this._updateButton(gamepad.buttons[i], i);
    }

    for (var j = 0, jend = gamepad.axes.length; j < jend; j += 2) {
      this._updateStick(gamepad.axes[j + 0], j / 2, 'x');
      this._updateStick(gamepad.axes[j + 1], j / 2, 'y');
    }
  }

  /**
   * @private
   */
  _updateStateEmpty() {
    for (var i = 0, iend = this.buttons.length; i < iend; i++) {
      this.buttons[i].down = false;
      this.buttons[i].up = false;
    }
  }

  /**
   * @private
   */
  _updateButton(value, buttonId) {
    if (this.buttons[buttonId] === undefined) {
      this.buttons[buttonId] = {
        value: 0,
        pressed: false,
        last: false,
        down: false,
        up: false,
      };
    }
    
    var button = this.buttons[buttonId];

    button.last = button.pressed;

    if (typeof value === 'object') {
      button.value = value.value;
      button.pressed = value.pressed;
    } else {
      button.value = value;
      button.pressed = value > Gamepad.ANALOGUE_BUTTON_THRESHOLD;
    }

    button.down = (button.pressed ^ button.last) & button.pressed;
    button.up = (button.pressed ^ button.last) & button.last;
  }

  /**
   * @private
   */
  _updateStick(value, stickId, axisName) {
    if (this.sticks[stickId] === undefined) {
      this.sticks[stickId] = new Vector2(0, 0);
    }
    this.sticks[stickId][axisName] = value;
  }

}

/** ブラウザがGamepad APIに対応しているか. */
Gamepad.isAvailable = (function() {
  var nav = phina$1.global.navigator;
  if (!nav) return false;

  return (!!nav.getGamepads) || (!!nav.webkitGetGamepads);
})();

/** アナログ入力対応のボタンの場合、どの程度まで押し込むとonになるかを表すしきい値. */
Gamepad.ANALOGUE_BUTTON_THRESHOLD = 0.5;

/** ボタン名とボタンIDのマップ. */
Gamepad.BUTTON_CODE = {
  'a': 0,
  'b': 1,
  'x': 2,
  'y': 3,

  'l1': 4,
  'r1': 5,
  'l2': 6,
  'r2': 7,

  'select': 8,
  'start': 9,

  'l3': 10,
  'r3': 11,

  'up': 12,
  'down': 13,
  'left': 14,
  'right': 15,

  'special': 16,

  'A': 0,
  'B': 1,
  'X': 2,
  'Y': 3,

  'L1': 4,
  'R1': 5,
  'L2': 6,
  'R2': 7,

  'SELECT': 8,
  'START': 9,

  'L3': 10,
  'R3': 11,

  'UP': 12,
  'DOWN': 13,
  'LEFT': 14,
  'RIGHT': 15,

  'SPECIAL': 16,
};

var ARROW_BIT_TO_ANGLE_TABLE = {
  0x00: null,

  /* @property 下 */
  0x01: 270,
  /* @property 右 */
  0x02: 0,
  /* @property 上 */
  0x04: 90,
  /* @property 左 */
  0x08: 180,

  /* @property 右上 */
  0x06: 45,
  /* @property 右下 */
  0x03: 315,
  /* @property 左上 */
  0x0c: 135,
  /* @property 左下 */
  0x09: 225,

  // 三方向同時押し対応
  // 想定外の操作だが対応しといたほうが無難
  /* @property 右上左 */
  0x0e: 90,
  /* @property 上左下 */
  0x0d: 180,
  /* @property 左下右 */
  0x0b: 270,
  /* @property 下右上 */
  0x07: 0,
};

/**
 * @class phina.input.Accelerometer
 * スマートフォンのセンサー情報
 */
class Accelerometer {

  /** @property  gravity 重力センサー */
  /** @property  acceleration 加速度センサー */
  /** @property  rotation 回転加速度センサー */
  /** @property  orientation スマートフォンの傾き */

  /**
   * @constructor
   */
  constructor() {

    var self = this;
    
    this.gravity        = new Vector3(0, 0, 0);
    this.acceleration   = new Vector3(0, 0, 0);
    this.rotation       = new Vector3(0, 0, 0);
    this.orientation    = new Vector3(0, 0, 0);

    if (phina$1.isMobile()) {
      phina$1.global.addEventListener("devicemotion", function(e) {
        var acceleration = self.acceleration;
        var gravity = self.gravity;
        var rotation = self.rotation;
        
        if (e.acceleration) {
          acceleration.x = e.acceleration.x;
          acceleration.y = e.acceleration.y;
          acceleration.z = e.acceleration.z;
        }
        if (e.accelerationIncludingGravity) {
          gravity.x = e.accelerationIncludingGravity.x;
          gravity.y = e.accelerationIncludingGravity.y;
          gravity.z = e.accelerationIncludingGravity.z;
        }
        if (e.rotationRate) {
          rotation.x = rotation.beta  = e.rotationRate.beta;
          rotation.y = rotation.gamma = e.rotationRate.gamma;
          rotation.z = rotation.alpha = e.rotationRate.alpha;
        }
      });
      
      phina$1.global.addEventListener("deviceorientation", function(e) {
        var orientation = self.orientation;
        orientation.alpha   = e.alpha;  // z(0~360)
        orientation.beta    = e.beta;   // x(-180~180)
        orientation.gamma   = e.gamma;  // y(-90~90)
      });
    }
  }

}

/**
 * @class phina.app.Updater
 */
class Updater {

  constructor(app) {
    this.app = app;
  }

  update(root) {
    this._updateElement(root);
  }

  _updateElement(element) {
    var app = this.app;

    // 更新するかを判定
    if (element.awake === false) return ;

    // エンターフレームイベント
    if (element.has('enterframe')) {
      element.flare('enterframe', {
        app: this.app,
      });
    }

    // 更新
    if (element.update) element.update(app);

    // タッチ判定
    // this._checkPoint(element);

    // 子供を更新
    var len = element.children.length;
    if (element.children.length > 0) {
      var tempChildren = element.children.slice();
      for (var i=0; i<len; ++i) {
        this._updateElement(tempChildren[i]);
      }
    }
  }

  _checkPoint(obj) {
    this.app.pointers.forEach(function(p) {
      if (p.id !== null) {
        this.__checkPoint(obj, p);
      }
    }, this);
  }

  __checkPoint(obj, p) {
    if (!obj.interactive) return ;

    var prevOverFlag = obj._overFlags[p.id];
    var overFlag = obj.hitTest2(p.x, p.y);
    obj._overFlags[p.id] = overFlag;

    if (!prevOverFlag && overFlag) {
      obj.flare('pointover', {
        pointer: p,
      });
    }
    if (prevOverFlag && !overFlag) {
      obj.flare('pointout');
    }

    if (overFlag) {
      if (p.getPointingStart()) {
        obj._touchFlags[p.id] = true;
        obj.flare('pointstart');
      }
    }

    if (obj._touchFlags[p.id]) {
      obj.flare('pointstay');
      if (p._moveFlag) {
        obj.flare('pointmove');
      }
    }

    if (obj._touchFlags[p.id]===true && p.getPointingEnd()) {
      obj._touchFlags[p.id] = false;
      obj.flare('pointend');

      if (obj._overFlags[p.id]) {
        obj._overFlags[p.id] = false;
        obj.flare('pointout');
      }
    }
  }

}

/**
 * @class phina.app.Interactive
 */
class Interactive {

  constructor(app) {
    this.app = app;
    this._enable = true;
    this.multiTouch = true;
    this.cursor = {
      normal: '',
      hover: 'pointer',
    };

    this._holds = [];
    this.app.on('changescene', function() {
      clear.call(this._holds);
      // this._holds.clear();
    }.bind(this));
  }

  enable() {
    this._enable = true;
    return this;
  }

  disable() {
    this._enable = false;
    return this;
  }

  check(root) {
    // カーソルのスタイルを反映
    if (this.app.domElement) {
      if (this._holds.length > 0) {
        this.app.domElement.style.cursor = this.cursor.hover;
      }
      else {
        this.app.domElement.style.cursor = this.cursor.normal;
      }
    }

    if (!this._enable || !this.app.pointers) return ;
    this._checkElement(root);
  }

  _checkElement(element) {
    var app = this.app;

    // 更新するかを判定
    if (element.awake === false) return ;

    // 子供を更新
    var len = element.children.length;
    if (element.children.length > 0) {
      var tempChildren = element.children.slice();
      for (var i=0; i<len; ++i) {
        this._checkElement(tempChildren[i]);
      }
    }

    // タッチ判定
    this._checkPoint(element);
  }

  _checkPoint(obj) {
    if (this.multiTouch) {
      this.app.pointers.forEach(function(p) {
        if (p.id !== null) {
          this.__checkPoint(obj, p);
        }
      }, this);
    }
    else {
      this.__checkPoint(obj, this.app.pointer);
    }
  }

  __checkPoint(obj, p) {
    if (!obj.interactive) return ;

    var prevOverFlag = obj._overFlags[p.id];
    var overFlag = obj.hitTest(p.x, p.y);
    obj._overFlags[p.id] = overFlag;

    var e = {
      pointer: p,
      interactive: this,
      over: overFlag,
    };

    if (!prevOverFlag && overFlag) {
      obj.flare('pointover', e);

      if (obj.boundingType && obj.boundingType !== 'none') {
        this._holds.push(obj);
      }
    }
    if (prevOverFlag && !overFlag) {
      obj.flare('pointout', e);
      // this._holds.erase(obj);
      erase.call(this._holds, obj);
    }

    if (overFlag) {
      if (p.getPointingStart()) {
        obj._touchFlags[p.id] = true;
        obj.flare('pointstart', e);
        // クリックフラグを立てる
        obj._clicked = true;
      }
    }

    if (obj._touchFlags[p.id]) {
      obj.flare('pointstay', e);
      if (p._moveFlag) {
        obj.flare('pointmove', e);
      }
    }

    if (obj._touchFlags[p.id]===true && p.getPointingEnd()) {
      obj._touchFlags[p.id] = false;
      obj.flare('pointend', e);

      if (phina$1.isMobile() && obj._overFlags[p.id]) {
        obj._overFlags[p.id] = false;
        obj.flare('pointout', e);
        // this._holds.erase(obj);
        erase.call(this._holds, obj);
      }
    }
  }

}

// import { Element } from "../app/element"

/**
 * @class phina.accessory.Accessory
 * @extends phina.util.EventDispatcher
 */
class Accessory extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(target) {
    super();

    this.target = target;
  }

  setTarget(target) {
    if (this.target === target) return ;

    this.target = target;
    return this;
  }

  getTarget() {
    return this.target;
  }

  isAttached() {
    return !!this.target;
  }

  attachTo(element) {
    element.attach(this);
    this.setTarget(element);
    return this;
  }

  remove() {
    this.target.detach(this);
    this.target = null;
  }

}

// Element側で拡張
// phina.app.Element.prototype.$method('attach', function(accessory) {
//   if (!this.accessories) {
//     this.accessories = [];
//     this.on('enterframe', function(e) {
//       this.accessories.each(function(accessory) {
//         accessory.update && accessory.update(e.app);
//       });
//     });
//   }

//   this.accessories.push(accessory);
//   accessory.setTarget(this);
//   accessory.flare('attached');

//   return this;
// });

// phina.app.Element.prototype.$method('detach', function(accessory) {
//   if (this.accessories) {
//     this.accessories.erase(accessory);
//     accessory.setTarget(null);
//     accessory.flare('detached');
//   }

//   return this;
// });

/**
 * @class phina.accessory.Tweener
 * # Tweener
 * Tweenerはオブジェクトのプロパティに対して、
 * Tweenアニメーションの効果を与えるクラスです。  
 * 主に {@link phina.app.Element} とそのサブクラスで使用されます。
 * @extends phina.accessory.Accessory
 */
class Tweener extends Accessory {

  /**
   * アニメーションを更新する方法を指定します。  
   * 変更するとdurationによる時間の進み方が変わります。  
   * 詳しくは{@link #UPDATE_MAP}を参照してください。
   */
  // updateType = 'delta'

  /**
   * @constructor
   */
  constructor(target) {
    super(target);
    this.updateType = 'delta';

    this._init();
  }

  _init() {
    this._loop = false;
    this._tasks = [];
    this._index = 0;
    this.playing = true;
    this._update = this._updateTask;
  }

  /**
   * @param {phina.app.BaseApp} app
   */
  update(app) {
    this._update(app);
  }

  /**
   * {@link #updateType}を変更します。
   * @param {String} type 更新方法を表す文字列
   * @chainable
   */
  setUpdateType(type) {
    this.updateType = type;
    return this;
  }

  /**
   * propsで指定した値になるまで、durationで指定した時間をかけて、アニメーションさせます。
   * @param {Object} props 変更したいプロパティをkeyとしたオブジェクト
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   * 
   */
  to(props, duration, easing) {
    this._add({
      type: 'tween',
      mode: 'to',
      props: props,
      duration: duration,
      easing: easing,
    });
    return this;
  }

  /**
   * アニメーション開始時の値とpropsで指定した値を加算した値になるまで、durationで指定した時間をかけて、アニメーションさせます。
   * @param {Object} props 変更したいプロパティをkeyとしたオブジェクト
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  by(props, duration, easing) {
    this._add({
      type: 'tween',
      mode: 'by',
      props: props,
      duration: duration,
      easing: easing,
    });

    return this;
  }

  /**
   * propsで指定した値からアニメーション開始時の値になるまで、durationで指定した時間をかけて、アニメーションさせます。
   * @param {Object} props 変更したいプロパティをkeyとしたオブジェクト
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  from(props, duration, easing) {
    this._add({
      type: 'tween',
      mode: 'from',
      props: props,
      duration: duration,
      easing: easing,
    });
    return this;
  }

  /**
   * 指定した時間が経過するまで待機します。
   * @param {Number} time waitする時間
   * @chainable
   */
  wait(time) {
    this._add({
      type: 'wait',
      data: {
        limit: time,
      },
    });
    return this;
  }

  /**
   * 現在設定されているアニメーションが終了した時に呼び出される関数をセットします。
   * @param {Function} func 呼び出される関数
   * @param {Object} self (optional) func内でthisにしたいオブジェクト。
   * @param {Object[]} args (optional) funcの引数にしたい値
   * @chainable
   */
  call(func, self, args) {
    this._add({
      type: 'call',
      data: {
        func: func,
        self: self || this,
        args: args,
      },
    });
    return this;
  }

  /**
   * 現在設定されているアニメーションが終了した時にプロパティをセットします。  
   * 第一引数にオブジェクトをセットすることもできます。
   * @param {String | Object} key valueをセットするプロパティ名か、変更したいプロパティをkeyとしたオブジェクト。
   * @param {Object} value (optional) セットする値
   * @chainable
   */
  set(key, value) {
    var values = null;
    if (arguments.length == 2) {
      values = {};
      values[key] = value;
    }
    else {
      values = key;
    }
    this._tasks.push({
      type: "set",
      data: {
        values: values
      }
    });

    return this;
  }

  /**
   * x, yに対して、 {@link #to} の処理を行います。
   * @param {Number} x
   * @param {Number} y
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  moveTo(x, y, duration, easing) {
    return this.to({ x: x, y: y }, duration, easing);
  }
  
  /**
   * x, yに対して、 {@link #by} の処理を行います。
   * @param {Number} x
   * @param {Number} y
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  moveBy(x, y, duration, easing) {
    return this.by({ x: x, y: y }, duration, easing);
  }

  /**
   * rotationに対して、 {@link #to} の処理を行います。
   * @param {Number} rotation
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  rotateTo(rotation, duration, easing) {
    return this.to({ rotation: rotation }, duration, easing);
  }
  
  /**
   * rotationに対して、 {@link #by} の処理を行います。
   * @param {Number} rotation
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  rotateBy(rotation, duration, easing) {
    return this.by({ rotation: rotation }, duration, easing);
  }

  /**
   * scaleX, scaleYに対して {@link #to} の処理を行います。
   * @param {Number} scale scaleXとscaleYに設定する値
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  scaleTo(scale, duration, easing) {
    return this.to({ scaleX: scale, scaleY: scale }, duration, easing);
  }
  /**
   * scaleX, scaleYに対して {@link #by} の処理を行います。
   * @param {Number} scale scaleXとscaleYに設定する値
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  scaleBy(scale, duration, easing) {
    return this.by({ scaleX: scale, scaleY: scale }, duration, easing);
  }

  /**
   * alphaに対して {@link #to} の処理を行います。
   * @param {Number} value alphaに設定する値
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  fade(value, duration, easing) {
    return this.to({ alpha: value }, duration, easing);
  }

  /**
   * alphaを0にするアニメーションを設定します。
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  fadeOut(duration, easing) {
    return this.fade(0.0, duration, easing);
  }

  /**
   * alphaを1にするアニメーションを設定します。
   * @param {Number} duration (optional) アニメーションにかける時間
   * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
   * @chainable
   */
  fadeIn(duration, easing) {
    return this.fade(1.0, duration, easing);
  }

  /**
   * アニメーション開始
   * @chainable
   */
  play() {
    this.playing = true;
    return this;
  }

  /**
   * アニメーションを一時停止
   * @chainable
   */
  pause() {
    this.playing = false;
    return this;
  }

  /**
   * アニメーションを停止し、最初まで巻き戻します。
   * @chainable
   */
  stop() {
    this.playing = false;
    this.rewind();
    return this;
  }

  /**
   * アニメーションを巻き戻す
   * @chainable
   */
  rewind() {
    this._update = this._updateTask;
    this._index = 0;
    return this;
  }

  yoyo() {
    // TODO: 最初の値が分からないので反転できない...
    this._update = this._updateTask;
    this._index = 0;
    this._tasks.each(function(task) {
      if (task.type === 'tween') ;
    });
    this.play();

    return this;
  }

  /**
   * アニメーションループ設定
   * @param {Boolean} flag
   * @chainable
   */
  setLoop(flag) {
    this._loop = flag;
    return this;
  }

  /**
   * アニメーションをクリア
   * @chainable
   */
  clear() {
    this._init();
    return this;
  }

  /**
   * JSON形式でアニメーションを設定します。
   * @chainable
   * @param {Object} json
   * @param {Boolean} json.loop (optional) ループする場合true
   * @param {Array[]} json.tweens 設定するアニメーション
   * 
   * ```
   * [
   *   [method, arg1, arg2,,,],
   *   ['to', {value: 100}, 1000, 'swing'],
   *   ['wait', 1000],
   *   ['set', 'text', 'END']
   * ]
   * ```
   */
  fromJSON(json) {
    if (json.loop !== undefined) {
      this.setLoop(json.loop);
    }

    json.tweens.each(function(t) {
      t = t.clone();
      var method = t.shift();
      this[method].apply(this, t);
    }, this);

    return this;
  }

  _add(params) {
    this._tasks.push(params);
  }

  _updateTask(app) {
    if (!this.playing) return ;

    var task = this._tasks[this._index];
    if (!task) {
      if (this._loop) {
        this.rewind();
        this._update(app);
      }
      else {
        this.playing = false;
      }
      return ;
    }
    else {
      ++this._index;
    }

    if (task.type === 'tween') {
      // this._tween = phina.util.Tween();
      this._tween = new Tween();

      var duration = task.duration || this._getDefaultDuration();
      if (task.mode === 'to') {
        this._tween.to(this.target, task.props, duration, task.easing);
      }
      else if (task.mode === 'by') {
        this._tween.by(this.target, task.props, duration, task.easing);
      }
      else {
        this._tween.from(this.target, task.props, duration, task.easing);
      }
      this._update = this._updateTween;
      this._update(app);
    }
    else if (task.type === 'wait') {
      this._wait = {
        time: 0,
        limit: task.data.limit,
      };

      this._update = this._updateWait;
      this._update(app);
    }
    else if (task.type === 'call') {
      task.data.func.apply(task.data.self, task.data.args);
      // 1フレーム消費しないよう再帰
      this._update(app);
    }
    else if (task.type === 'set') {
      $extend.call(this.target, task.data.values);
      // this.target.$extend(task.data.values);
      // 1フレーム消費しないよう再帰
      this._update(app);
    }
  }

  _updateTween(app) {
    var tween = this._tween;
    var time = this._getUnitTime(app);

    tween.forward(time);
    this.flare('tween');

    if (tween.time >= tween.duration) {
      delete this._tween;
      this._tween = null;
      this._update = this._updateTask;
    }
  }

  _updateWait(app) {
    var wait = this._wait;
    var time = this._getUnitTime(app);
    wait.time += time;

    if (wait.time >= wait.limit) {
      delete this._wait;
      this._wait = null;
      this._update = this._updateTask;
    }
  }

  _getUnitTime(app) {
    var obj = UPDATE_MAP[this.updateType];
    if (obj) {
      return obj.func(app);
    }
    else {
      return 1000 / app.fps;
    }
  }

  _getDefaultDuration() {
    var obj = UPDATE_MAP[this.updateType];
    return obj && obj.duration;
  }

}

/**
 * @static
 * {@link #updateType}に設定する更新方法の定義です。
 * 下記の表に定義済みの更新方法を{@link #updateType}に設定することで、
 * アニメーションの更新方法を変更することができます。
 * 
 * | 更新方法 | 単位(デフォルト値) | 1フレームあたりのアニメーション速度 |
 * |-|-|-|
 * | normal | ミリ秒(1000) | app.fpsによって変化 |
 * | delta | ミリ秒(1000) | 経過時間によって変化 |
 * | fps | フレーム(30) | 必ず同じ速度で変化 |
 */
var UPDATE_MAP = Tweener.UPDATE_MAP = {
  normal: {
    func: function(app) {
      return 1000 / app.fps;
    },
    duration: 1000,
  },

  delta: {
    func: function(app) {
      return app.ticker.deltaTime;
    },
    duration: 1000,
  },

  fps: {
    func: function(app) {
      return 1;
    },
    duration: 30,
  },

};

// Element側で拡張
// /**
//  * @member phina.app.Element
//  * @property tweener
//  * 自身にアタッチ済みの{@link phina.accessory.Tweener}オブジェクト。
//  */
// phina.app.Element.prototype.getter('tweener', function() {
//   if (!this._tweener) {
//     this._tweener = phina.accessory.Tweener().attachTo(this);
//   }
//   return this._tweener;
// });

/**
 * @class phina.app.Element
 * @extends phina.util.EventDispatcher
 * # 主に要素の親子関係を扱うクラス
 * 主に親子関係等を定義するクラスです。
 */
class Element extends EventDispatcher {

  /**
   * @property parent
   * 親要素
   */
  // parent = null;

  /**
   * @property children
   * 子要素
   */
  // children = null;

  /**
   * @property awake
   * 有効かどうか
   */
  // awake = true;

  /**
   * @constructor
   */
  constructor() {
    super();

    this.children = [];
  }

  /**
   * @method addChild
   * 自身に子要素を追加します。
   *
   * 自身を子要素として引数で指定した要素に追加するには {@link #addChildTo} を使用してください。
   *
   * @param {Object} child 追加する子要素
   */
  addChild(child) {
    if (child.parent) child.remove();

    child.parent = this;
    this.children.push(child);

    child.has('added') && child.flare('added');

    return child;
  }

  /**
   * @method addChildTo
   * 自身を子要素として引数で指定した要素に追加します。
   *
   * 自身に子要素を追加するには {@link #addChild} を使用してください。
   *
   * @param {Object} parent 自身を子要素として追加する要素
   */
  addChildTo(parent) {
    parent.addChild(this);

    return this;
  }

  /**
   * @method addChildAt
   * 自身を、指定した要素の子要素の任意の配列インデックスに追加します。
   *
   * @param {Object} child 追加する子要素
   * @param {Number} index インデックス番号
   */
  addChildAt(child, index) {
    if (child.parent) child.remove();

    child.parent = this;
    this.children.splice(index, 0, child);

    child.has('added') && child.flare('added');

    return child;
  }

  /**
   * @method getChildAt
   * 指定したインデックスの子要素を返します。
   *
   * @param {Number} index インデックス番号
   * @return {Object} 指定したインデックスの子要素
   */
  getChildAt(index) {
    // return this.children.at(index);
    return at.call(this.children, index);
  }

  /**
   * @method getChildByName
   * 指定した名前の子要素を返します。（未実装）
   */
  getChildByName(name) {
    // TODO:
  }

  /**
   * @method getChildIndex
   * 指定した子要素のインデックス番号を返します。
   *
   * @param {Object} child 子要素
   * @return {Number} 指定した子要素のインデックス番号
   */
  getChildIndex(child) {
    return this.children.indexOf(child);
  }

  /**
   * @method getParent
   * 指定した要素の親要素を返します。
   *
   * @return {Object} 指定した要素の親要素
   */
  getParent() {
    return this.parent;
  }

  /**
   * @method getRoot
   * 指定した要素の階層ツリーのルートを返します。
   *
   * @return {Object} 指定した要素の階層ツリーのルート
   */
  getRoot() {
    var elm = this;
    for (elm=this.parent; elm.parent != null; elm = elm.parent) {

    }
    return elm;
  }

  /**
   * @method removeChild
   * @chainable
   * 指定した要素を自身の子要素から削除します。
   *
   * @param {Object} child 要素
   */
  removeChild(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.has('removed') && child.flare('removed');
    }
    return this;
  }

  /**
   * @method remove
   * 自身を親要素の子要素から削除します。
   */
  remove() {
    if (!this.parent) return ;

    this.parent.removeChild(this);
    this.parent = null;

    return this;
  }

  /**
   * @method isAwake
   * 自身が有効かどうかを返します。
   *
   * @return {Boolean} 有効かどうか
   */
  isAwake() {
    return this.awake;
  }

  /**
   * @method wakeUp
   * 自身を有効にします。
   */
  wakeUp() {
    this.awake = true;
    return this;
  }

  /**
   * @method sleep
   * 自身を無効にします。
   */
  sleep() {
    this.awake = false;
    return this;
  }

  /**
   * @method fromJSON
   * JSON 形式を使って自身に子要素を追加することができます。
   *
   * ### Example
   *      this.fromJSON({
   *        "children": {
   *          "label": {                  //キー名が追加する子要素の名前になる
   *            "className": "Label",     //クラス
   *            "arguments": ['hello!'],  //初期化時の引数
   *            "x":320,                  //その他プロパティ
   *            "y":480,
   *          },
   *        },
   *      });
   *
   * @param {JSON} json JSON 形式
   */
  fromJSON(json) {

    var createChildren = function(name, data) {
      var args = data.arguments;
      args = (args instanceof Array) ? args : [args];

      var _class;
      var element;
      if (typeof data.className === 'string') {
        // is phina class
        _class = phina$1.using(data.className);
        element = _class.apply(null, args);
      } else if (typeof data.className === 'function') {
        // is ES class
        // インスタンス化にスプレッド構文が必要なため、es5サポートの場合babelが必要
        element = new data.className(...args);
      }

      element.name = name;
      this[name] = element;

      element.fromJSON(data);
      element.addChildTo(this);
    }.bind(this);

    forIn.call(json, function(key, value) {
    // json.forIn(function(key, value) {
      if (key === 'children') {
        forIn.call(value, function(name, data) {
        // value.forIn(function(name, data) {
          createChildren(name, data);
        });
      }
      else {
        if (key !== 'type' && key !== 'className') {
          this[key] = value;
        }
      }
    }, this);

    return this;
  }

  /**
   * @method toJSON
   * 自身の子要素を JSON 形式で返します。
   *
   * @return {JSON} JSON形式
   */
  toJSON() {
    var keys = Object.keys(phina$1.using(this.className).defaults || {});

    this._hierarchies.forEach(function(e) {
      var d = e.defaults;
      if (d) {
        Object.keys(d).forEach(function(k) {
          if (keys.indexOf(k) === -1) {
            keys.push(k);
          }
        });
      }
    });

    keys.push('name', 'className');

    var json = {};
    // keys.each(function(key) {
    keys.forEach(function(key) {
      json[key] = this[key];
    }, this);

    var children = this.children.map(function(child) {
      return child.toJSON();
    });

    if (children.length) {
      json.children = {};
      // children.each(function(child, i) {
      children.forEach(function(child, i) {
        json.children[child.name || (child.className + '_' + i)] = child;
      });
    }

    return json;
  }

  /**
   * accessoryを付与する
   * @param  {Accessory} Accessory継承クラス
   * @return {this}
   */
  attach(accessory) {
    if (!this.accessories) {
      this.accessories = [];
      this.on('enterframe', function(e) {
        this.accessories.forEach(function(accessory) {
          accessory.update && accessory.update(e.app);
        });
      });
    }

    this.accessories.push(accessory);
    accessory.setTarget(this);
    accessory.flare('attached');

    return this;
  }

  /**
   * accessoryを削除
   * @param  {Accessory} Accessory継承クラス
   * @return {this}
   */
  detach(accessory) {
    if (this.accessories) {
      // this.accessories.erase(accessory);
      erase.call(this.accessories, accessory);
      accessory.setTarget(null);
      accessory.flare('detached');
    }

    return this;
  }

  get tweener() {
    if (!this._tweener) {
      this._tweener = new Tweener().attachTo(this);
    }
    return this._tweener;
  }
}

/**
 * @class phina.app.Scene
 * @extends phina.app.Element
 */
class Scene extends Element {

  constructor() {
    super();
  }

  exit(nextLabel, nextArguments) {
    if (!this.app) return ;

    if (arguments.length > 0) {
      if (typeof arguments[0] === 'object') {
        nextLabel = arguments[0].nextLabel || this.nextLabel;
        nextArguments = arguments[0];
      }

      this.nextLabel = nextLabel;
      this.nextArguments = nextArguments;
    }

    this.app.popScene();

    return this;
  }

}

/**
 * @class phina.app.BaseApp
 * ベースとなるアプリケーションクラス
 * @extends phina.util.EventDispatcher
 */
class BaseApp extends EventDispatcher {

  // /** awake */
  // awake = null
  // /** fps */
  // fps = null
  // /** frame */
  // frame = null

  /**
   * @constructor
   */
  constructor() {
    super();
    this._scenes = [new Scene()];
    this._sceneIndex = 0;

    this.updater = new Updater(this);
    this.interactive = new Interactive(this);

    this.awake = true;
    this.ticker = new Ticker();
  }

  run() {
    var self = this;
    this._loopCaller = function() {
      self._loop();
    };
    this.ticker.tick(this._loopCaller);

    this.ticker.start();

    return this;
  }

  kill() {
    this.ticker.stop();
    this.ticker.untick(this._loopCaller);
    return this;
  }

  replaceScene(scene) {
    this.flare('replace');
    this.flare('changescene');
    if (this.currentScene) {
      this.currentScene.app = null;
    }
    this.currentScene = scene;
    this.currentScene.app = this;
    this.currentScene.flare('enter', {
      app: this,
    });

    return this;
  }

  pushScene(scene) {
    this.flare('push');
    this.flare('changescene');

    this.currentScene.flare('pause', {
      app: this,
    });

    this._scenes.push(scene);
    ++this._sceneIndex;

    this.flare('pushed');

    scene.app = this;
    scene.flare('enter', {
      app: this,
    });

    return this;
  }

  /**
   * シーンをポップする(ポーズやオブション画面などで使用)
   */
  popScene() {
    this.flare('pop');
    this.flare('changescene');

    var scene = this._scenes.pop();
    --this._sceneIndex;

    scene.flare('exit', {
      app: this,
    });
    scene.app = null;

    this.flare('poped');

    //
    this.currentScene.flare('resume', {
      app: this,
      prevScene: scene,
    });

    return scene;
  }

  /**
   * シーンのupdateを実行するようにする
   */
  start() {
    this.awake = true;

    return this;
  }

  /**
   * シーンのupdateを実行しないようにする
   */
  stop() {
    this.awake = false;

    return this;
  }

  enableStats() {
    if (phina$1.global.Stats) {
      this.stats = new Stats();
      document.body.appendChild(this.stats.domElement);
    }
    else {
      // console.warn("not defined stats.");
      var STATS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r14/Stats.js';
      var script = document.createElement('script');
      script.src = STATS_URL;
      document.body.appendChild(script);
      script.onload = function() {
        this.enableStats();
      }.bind(this);
    }
    return this;
  }

  enableDatGUI(callback) {
    if (phina$1.global.dat) {
      var gui = new phina$1.global.dat.GUI();
      callback(gui);
    }
    else {
      // console.warn("not defined dat.GUI.");
      var URL = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5.1/dat.gui.js';
      var script = document.createElement('script');
      script.src = URL;
      document.body.appendChild(script);
      script.onload = function() {
        var gui = new phina$1.global.dat.GUI();
        callback(gui);
      }.bind(this);
    }
    return this;
  }

  _loop() {
    this._update();
    this.interactive.check(this.currentScene);
    this._draw();

    // stats update
    if (this.stats) this.stats.update();
  }

  _update() {
    if (this.awake) {
      // エンターフレームイベント
      if (this.has('enterframe')) {
        this.flare('enterframe');
      }

      this.update && this.update();
      this.updater.update(this.currentScene);
    }
  }

  /**
   * 描画用仮想関数
   * @private
   */
  _draw() {}

  get currentScene()   { return this._scenes[this._sceneIndex]; }
  set currentScene(v)  { this._scenes[this._sceneIndex] = v; }

  get rootScene()   { return this._scenes[0]; }
  set rootScene(v)  { this._scenes[0] = v; }

  get frame() { return this.ticker.frame; }
  set frame(v) { this.ticker.frame = v; }

  get fps() { return this.ticker.fps; }
  set fps(v) { this.ticker.fps = v; }

  get deltaTime() { return this.ticker.deltaTime; }

  get elapsedTime() { return this.ticker.elapsedTime; }

  get currentTime() { return this.ticker.currentTime; }

  get startTime() { return this.ticker.startTime; }

}

/**
 * @class phina.app.Object2D
 * Object2D
 * @extends phina.app.Element
 */
class Object2D extends Element {

  // /** 位置 */
  // position: null,
  // /** 回転 */
  // rotation: 0,
  // /** スケール */
  // scale: null,
  // /** 基準位置 */
  // origin: null,

  /**
   * @constructor
   */
  constructor(options) {
    super();

    options = $safe.call({}, options, Object2D.defaults);
    // options = ({}).$safe(options, phina.app.Object2D.defaults);

    this.position = new Vector2(options.x, options.y);
    this.scale    = new Vector2(options.scaleX, options.scaleY);
    this.rotation = options.rotation;
    this.origin   = new Vector2(options.originX, options.originY);

    this._matrix = new Matrix33().identity();
    this._worldMatrix = new Matrix33().identity();

    this.interactive = false;
    this._overFlags = {};
    this._touchFlags = {};

    this.width = options.width;
    this.height = options.height;
    this.radius = options.radius;
    this.boundingType = options.boundingType;
  }

  /**
   * 点と衝突しているかを判定
   * @param {Number} x
   * @param {Number} y
   */
  hitTest(x, y) {
    if (this.boundingType === 'rect') {
      return this.hitTestRect(x, y);
    }
    else if (this.boundingType === 'circle') {
      return this.hitTestCircle(x, y);
    }
    else {
      // none の場合
      return true;
    }
  }

  hitTestRect(x, y) {
    var p = this.globalToLocal(new Vector2(x, y));

    var left   = -this.width*this.originX;
    var right  = +this.width*(1-this.originX);
    var top    = -this.height*this.originY;
    var bottom = +this.height*(1-this.originY);

    return ( left < p.x && p.x < right ) && ( top  < p.y && p.y < bottom );
  }

  hitTestCircle(x, y) {
    // 円判定
    var p = this.globalToLocal(new Vector2(x, y));
    if (((p.x)*(p.x)+(p.y)*(p.y)) < (this.radius*this.radius)) {
        return true;
    }
    return false;
  }

  /**
   * 要素と衝突しているかを判定
   * @param {Object} elm
   */
  hitTestElement(elm) {
    var rect0 = this;
    var rect1 = elm;
    return (rect0.left < rect1.right) && (rect0.right > rect1.left) &&
           (rect0.top < rect1.bottom) && (rect0.bottom > rect1.top);
  }


  globalToLocal(p) {
    var matrix = this._worldMatrix.clone();
    matrix.invert();
    // matrix.transpose();

    var temp = matrix.multiplyVector2(p);

    return temp;
  }

  setInteractive(flag, type) {
    this.interactive = flag;
    if (type) {
      this.boundingType = type;
    }

    return this;
  }

  /**
   * X 座標値をセット
   * @param {Number} x
   */
  setX(x) {
    this.position.x = x;
    return this;
  }
  
  /**
   * Y 座標値をセット
   * @param {Number} y
   */
  setY(y) {
    this.position.y = y;
    return this;
  }
  
  /**
   * XY 座標をセット
   * @param {Number} x
   * @param {Number} y
   */
  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
    return this;
  }

  /**
   * 回転をセット
   * @param {Number} rotation
   */
  setRotation(rotation) {
    this.rotation = rotation;
    return this;
  }

  /**
   * スケールをセット
   * @param {Number} x
   * @param {Number} y
   */
  setScale(x, y) {
    this.scale.x = x;
    if (arguments.length <= 1) {
        this.scale.y = x;
    } else {
        this.scale.y = y;
    }
    return this;
  }
  
  /**
   * 基準点をセット
   * @param {Number} x
   * @param {Number} y
   */
  setOrigin(x, y) {
    this.origin.x = x;
    this.origin.y = y;
    return this;
  }
  
  /**
   * 幅をセット
   * @param {Number} width
   */
  setWidth(width) {
    this.width = width;
    return this;
  }
  
  /**
   * 高さをセット
   * @param {Number} height
   */
  setHeight(height) {
    this.height = height;
    return this;
  }
  
  /**
   * サイズ(幅, 高さ)をセット
   * @param {Number} width
   * @param {Number} height
   */
  setSize(width, height) {
    this.width  = width;
    this.height = height;
    return this;
  }

  setBoundingType(type) {
    this.boundingType = type;
    return this;
  }

  moveTo(x, y) {
    this.position.x = x;
    this.position.y = y;
    return this;
  }

  moveBy(x, y) {
    this.position.x += x;
    this.position.y += y;
    return this;
  }

  _calcWorldMatrix() {
    if (!this.parent) return ;

    // cache check
    if (this.rotation != this._cachedRotation) {
      this._cachedRotation = this.rotation;

      var r = this.rotation*(Math.PI/180);
      this._sr = Math.sin(r);
      this._cr = Math.cos(r);
    }

    var local = this._matrix;
    var parent = this.parent._worldMatrix || Matrix33.IDENTITY;
    var world = this._worldMatrix;

    // ローカルの行列を計算
    local.m00 = this._cr * this.scale.x;
    local.m01 =-this._sr * this.scale.y;
    local.m10 = this._sr * this.scale.x;
    local.m11 = this._cr * this.scale.y;
    local.m02 = this.position.x;
    local.m12 = this.position.y;

    // cache
    var a00 = local.m00; var a01 = local.m01; var a02 = local.m02;
    var a10 = local.m10; var a11 = local.m11; var a12 = local.m12;
    var b00 = parent.m00; var b01 = parent.m01; var b02 = parent.m02;
    var b10 = parent.m10; var b11 = parent.m11; var b12 = parent.m12;

    // 親の行列と掛け合わせる
    world.m00 = b00 * a00 + b01 * a10;
    world.m01 = b00 * a01 + b01 * a11;
    world.m02 = b00 * a02 + b01 * a12 + b02;

    world.m10 = b10 * a00 + b11 * a10;
    world.m11 = b10 * a01 + b11 * a11;
    world.m12 = b10 * a02 + b11 * a12 + b12;

    return this;
  }

  /**
   * @property    x
   * x座標値
   */
  get x()   { return this.position.x; }
  set x(v)  { this.position.x = v; }

  /**
   * @property    y
   * y座標値
   */
  get y()   { return this.position.y; }
  set y(v)  { this.position.y = v; }

  /**
   * @property    originX
   * x座標値
   */
  get originX()   { return this.origin.x; }
  set originX(v)  { this.origin.x = v; }

  /**
   * @property    originY
   * y座標値
   */
  get originY()   { return this.origin.y; }
  set originY(v)  { this.origin.y = v; }

  /**
   * @property    scaleX
   * スケールX値
   */
  get scaleX()   { return this.scale.x; }
  set scaleX(v)  { this.scale.x = v; }
  
  /**
   * @property    scaleY
   * スケールY値
   */
  get scaleY()   { return this.scale.y; }
  set scaleY(v)  { this.scale.y = v; }
  
  /**
   * @property    width
   * width
   */
  get width()   {
    return (this.boundingType === 'rect') ?
      this._width : this._diameter;
  }
  set width(v)  { this._width = v; }
  /**
   * @property    height
   * height
   */
  get height()   {
    return (this.boundingType === 'rect') ?
      this._height : this._diameter;
  }
  set height(v)  { this._height = v; }

  /**
   * @property    radius
   * 半径
   */
  get radius()   {
    return (this.boundingType === 'rect') ?
      (this.width+this.height)/4 : this._radius;
  }
  set radius(v)  {
    this._radius = v;
    this._diameter = v*2;
  }
  
  /**
   * @property    top
   * 左
   */
  get top()   { return this.y - this.height*this.originY; }
  set top(v)  { this.y = v + this.height*this.originY; }

  /**
   * @property    right
   * 左
   */
  get right()   { return this.x + this.width*(1-this.originX); }
  set right(v)  { this.x = v - this.width*(1-this.originX); }

  /**
   * @property    bottom
   * 左
   */
  get bottom()   { return this.y + this.height*(1-this.originY); }
  set bottom(v)  { this.y = v - this.height*(1-this.originY); }

  /**
   * @property    left
   * 左
   */
  get left()   { return this.x - this.width*this.originX; }
  set left(v)  { this.x = v + this.width*this.originX; }

  /**
   * @property    centerX
   * centerX
   */
  get centerX()   { return this.x + this.width/2 - this.width*this.originX; }
  set centerX(v)  {
    // TODO: どうしようかな??
  }

  /**
   * @property    centerY
   * centerY
   */
  get centerY()   { return this.y + this.height/2 - this.height*this.originY; }
  set centerY(v)  {
    // TODO: どうしようかな??
  }
}

Object2D.defaults = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
  rotation: 0,
  originX: 0.5,
  originY: 0.5,
  width: 64,
  height: 64,
  radius: 32,
  boundingType: 'rect',
};

/**
 * @class phina.display.DomApp
 * @extends phina.app.BaseApp
 */
class DomApp extends BaseApp {

  // domElement: null,

  /**
   * @constructor
   */
  constructor(options) {
    super(options);

    if (options.domElement) {
      this.domElement = options.domElement;
    }
    else {
      if (options.query) {
        this.domElement = document.querySelector(options.query);
      }
      else {
        console.assert('error');
      }
    }

    if (options.fps !== undefined) {
      this.fps = options.fps;
    }
    
    if(typeof options.runner === 'function') {
      this.ticker.runner = options.runner;
    }

    this.mouse = new Mouse(this.domElement);
    this.touch = new Touch(this.domElement);
    this.touchList = new TouchList(this.domElement, 5);
    this.keyboard = new Keyboard(document);
    // // 加速度センサーを生成
    // this.accelerometer = phina.input.Accelerometer();

    // ポインタをセット(PC では Mouse, Mobile では Touch)
    this.pointer = this.touch;
    this.pointers = this.touchList.touches;

    this.domElement.addEventListener("touchstart", function () {
      this.pointer = this.touch;
      this.pointers = this.touchList.touches;
    }.bind(this));
    this.domElement.addEventListener("mouseover", function () {
      this.pointer = this.mouse;
      this.pointers = [this.mouse];
    }.bind(this));

    // keyboard event
    this.keyboard.on('keydown', function(e) {
      this.currentScene && this.currentScene.flare('keydown', {
        keyCode: e.keyCode,
      });
    }.bind(this));
    this.keyboard.on('keyup', function(e) {
      this.currentScene && this.currentScene.flare('keyup', {
        keyCode: e.keyCode,
      });
    }.bind(this));
    this.keyboard.on('keypress', function(e) {
      this.currentScene && this.currentScene.flare('keypress', {
        keyCode: e.keyCode,
      });
    }.bind(this));

    // click 対応
    var eventName = phina$1.isMobile() ? 'touchend' : 'mouseup';
    this.domElement.addEventListener(eventName, this._checkClick.bind(this));

    // 決定時の処理をオフにする(iPhone 時のちらつき対策)
    this.domElement.addEventListener("touchstart", function(e) { e.stop(); });
    this.domElement.addEventListener("touchmove", function(e) { e.stop(); });

    // ウィンドウフォーカス時イベントリスナを登録
    phina$1.global.addEventListener('focus', function() {
      this.flare('focus');
      this.currentScene.flare('focus');
    }.bind(this), false);
    // ウィンドウブラー時イベントリスナを登録
    phina$1.global.addEventListener('blur', function() {
      this.flare('blur');
      this.currentScene.flare('blur');
    }.bind(this), false);

    // 更新関数を登録
    this.on('enterframe', function() {
      this.mouse.update();
      this.touch.update();
      this.touchList.update();
      this.keyboard.update();
    });
  }

  _checkClick(e) {
    var _check = function(element) {
      if (element.children.length > 0) {
        element.children.forEach(function(child) {
          _check(child);
        });
      }
      if (element._clicked && element.has('click')) {
        element.flare('click');
      }
      element._clicked = false;
    };

    _check(this.currentScene);
  }

}

/**
 * @class phina.display.CanvasRenderer
 */
class CanvasRenderer {

  constructor(canvas) {
    this.canvas = canvas;
    this._context = this.canvas.context;
  }

  render(scene) {
    this.canvas.clear();
    if (scene.backgroundColor) {
      this.canvas.clearColor(scene.backgroundColor);
    }

    this._context.save();
    this.renderChildren(scene);
    this._context.restore();
  }

  renderChildren(obj) {
    // 子供たちも実行
    if (obj.children.length > 0) {
      var tempChildren = obj.children.slice();
      for (var i=0,len=tempChildren.length; i<len; ++i) {
        this.renderObject(tempChildren[i]);
      }
    }
  }

  renderObject(obj) {
    if (obj.visible === false && !obj.interactive) return;

    obj._calcWorldMatrix && obj._calcWorldMatrix();

    if (obj.visible === false) return;

    obj._calcWorldAlpha && obj._calcWorldAlpha();

    var context = this.canvas.context;

    context.globalAlpha = obj._worldAlpha;
    context.globalCompositeOperation = obj.blendMode;

    if (obj._worldMatrix) {
      // 行列をセット
      var m = obj._worldMatrix;
      context.setTransform( m.m00, m.m10, m.m01, m.m11, m.m02, m.m12 );
    }

    if (obj.clip) {

      context.save();

      obj.clip(this.canvas);
      context.clip();

      if (obj.draw) obj.draw(this.canvas);

      // 子供たちも実行
      if (obj.renderChildBySelf === false && obj.children.length > 0) {
          var tempChildren = obj.children.slice();
          for (var i=0,len=tempChildren.length; i<len; ++i) {
              this.renderObject(tempChildren[i]);
          }
      }

      context.restore();
    }
    else {
      if (obj.draw) obj.draw(this.canvas);

      // 子供たちも実行
      if (obj.renderChildBySelf === false && obj.children.length > 0) {
        var tempChildren = obj.children.slice();
        for (var i=0,len=tempChildren.length; i<len; ++i) {
          this.renderObject(tempChildren[i]);
        }
      }

    }
  }

}

/**
 * @class phina.display.DisplayScene
 * @extends phina.app.Scene
 */
class DisplayScene extends Scene {

  constructor(params) {
    super();

    params = $safe.call({}, params, DisplayScene.defaults);
    // params = ({}).$safe(params, DisplayScene.defaults);

    this.canvas = new Canvas();
    this.canvas.setSize(params.width, params.height);
    this.renderer = new CanvasRenderer(this.canvas);
    this.backgroundColor = (params.backgroundColor) ? params.backgroundColor : null;

    this.width = params.width;
    this.height = params.height;
    this.gridX = new Grid(params.width, 16);
    this.gridY = new Grid(params.height, 16);

    // TODO: 一旦むりやり対応
    this.interactive = true;
    this.setInteractive = function(flag) {
      this.interactive = flag;
    };
    this._overFlags = {};
    this._touchFlags = {};

    var ctx = this.canvas.context;
    if (params.imageSmoothing === false) {
      ctx.imageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
    }
  }

  hitTest() {
    return true;
  }

  _update() {
    if (this.update) {
      this.update();
    }
  }

  _render() {
    this.renderer.render(this);
  }

}

DisplayScene.defaults = {
  width: 640,
  height: 960,
  imageSmoothing: true,
};

/**
 * @class phina.display.CanvasApp
 * @extends phina.display.DomApp
 */
class CanvasApp extends DomApp {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call((options || {}), CanvasApp.defaults);
    // options = (options || {}).$safe(CanvasApp.defaults);
    
    if (!options.query && !options.domElement) {
      options.domElement = document.createElement('canvas');
      if (options.append) {
        document.body.appendChild(options.domElement);
      }
    }
    super(options);

    this.gridX = new Grid({
      width: options.width,
      columns: options.columns,
    });
    this.gridY = new Grid({
      width: options.height,
      columns: options.columns,
    });

    this.canvas = new Canvas(this.domElement);
    this.canvas.setSize(options.width, options.height);

    this.backgroundColor = (options.backgroundColor !== undefined) ? options.backgroundColor : 'white';

    this.replaceScene(new DisplayScene({
      width: options.width,
      height: options.height,
    }));

    if (options.fit) {
      this.fitScreen();
    }

    if (options.pixelated) {
      // チラつき防止
      // ドット絵ゲームのサポート
      // https://drafts.csswg.org/css-images/#the-image-rendering
      // https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering#Browser_compatibility
      if (navigator.userAgent.match(/Firefox\/\d+/)) {
        this.domElement.style.imageRendering = 'crisp-edges';
      } else {
        this.domElement.style.imageRendering = 'pixelated';
      }
    }

    // pushScene, popScene 対策
    this.on('push', function() {
      // onenter 対策で描画しておく
      if (this.currentScene.canvas) {
        this._draw();
      }
    });
  }

  _draw() {
    if (this.backgroundColor) {
      this.canvas.clearColor(this.backgroundColor);
    } else {
      this.canvas.clear();
    }

    if (this.currentScene.canvas) {
      this.currentScene._render();

      // this._scenes.each(function(scene) {
      this._scenes.forEach(function(scene) {
        var c = scene.canvas;
        if (c) {
          this.canvas.context.drawImage(c.domElement, 0, 0, c.width, c.height);
        }
      }, this);
    }
  }

  fitScreen() {
    this.canvas.fitScreen();
  }

}

// static
CanvasApp.defaults = {
  width: 640,
  height: 960,
  columns: 12,
  fit: true,
  append: true,
};

/**
 * @class phina.display.DisplayElement
 * @extends phina.app.Object2D
 */
class DisplayElement extends Object2D {

  // /** 表示フラグ */
  // visible: true,
  // /** アルファ */
  // alpha: 1.0,
  // /** ブレンドモード */
  // blendMode: "source-over",

  // /** 子供を 自分のCanvasRenderer で描画するか */
  // renderChildBySelf: false,

  constructor(options) {
    options = $safe.call({}, options||{}, DisplayElement.defaults);
    // options = ({}).$safe(options || {}, phina.display.DisplayElement.defaults);

    super(options);
    this.visible = (options.visible != null) ? options.visible : true;
    this.alpha = (options.alpha != null) ? options.alpha : 1.0;
    this.blendMode = "source-over";
    this.renderChildBySelf = false;
    this._worldAlpha = 1.0;
  }

  /**
   * アルファ値をセット
   */
  setAlpha(alpha) {
    this.alpha = alpha;
    return this;
  }

  /**
   * 表示/非表示をセット
   */
  setVisible(flag) {
    this.visible = flag;
    return this;
  }

  /**
   * 表示
   */
  show() {
    this.visible = true;
    return this;
  }

  /**
   * 非表示
   */
  hide() {
    this.visible = false;
    return this;
  }

  /**
   * @private
   */
  _calcWorldAlpha() {
    if (this.alpha < 0) {
      this._worldAlpha = 0;
      return;
    }
    if (!this.parent) {
      this._worldAlpha = this.alpha;
      return ;
    }
    else {
      var worldAlpha = (this.parent._worldAlpha !== undefined) ? this.parent._worldAlpha : 1.0;
      // alpha
      this._worldAlpha = worldAlpha * this.alpha;
    }
  }

}

DisplayElement.defaults = {
  alpha: 1.0,
  visible: true,
};

/**
 * @class phina.asset.AssetManager
 * 
 */
class AssetManager {

  static get(type, key) {
    return this.assets[type] && this.assets[type][key];
  }

  static set(type, key, asset) {
    if (!this.assets[type]) {
      this.assets[type] = {};
    }
    this.assets[type][key] = asset;
  }

  static contains(type, key) {
    return ;
  }

}

AssetManager.assets = {
  image: {},
  sound: {},
  spritesheet: {},
};

/**
 * @class phina.display.Sprite
 * @extends phina.display.DisplayElement
 */
class Sprite extends DisplayElement {

  constructor(image, width, height) {
    super();

    this.srcRect = new Rect();
    this.setImage(image, width, height);
  }

  draw(canvas) {
    var image = this.image.domElement;

    // canvas.context.drawImage(image,
    //   0, 0, image.width, image.height,
    //   -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height
    //   );

    var srcRect = this.srcRect;
    canvas.context.drawImage(image,
      srcRect.x, srcRect.y, srcRect.width, srcRect.height,
      -this._width*this.originX, -this._height*this.originY, this._width, this._height
      );
  }

  setImage(image, width, height) {
    if (typeof image === 'string') {
      image = AssetManager.get('image', image);
    }
    this._image = image;
    this.width = this._image.domElement.width;
    this.height = this._image.domElement.height;

    if (width) { this.width = width; }
    if (height) { this.height = height; }

    this.frameIndex = 0;

    return this;
  }

  setFrameIndex(index, width, height) {
    var tw  = width || this._width;      // tw
    var th  = height || this._height;    // th
    var row = ~~(this.image.domElement.width / tw);
    var col = ~~(this.image.domElement.height / th);
    var maxIndex = row*col;
    index = index%maxIndex;
    
    var x = index%row;
    var y = ~~(index/row);
    this.srcRect.x = x*tw;
    this.srcRect.y = y*th;
    this.srcRect.width  = tw;
    this.srcRect.height = th;

    this._frameIndex = index;

    return this;
  }

  get image() {return this._image;}
  set image(v) {
    this.setImage(v);
    return this;
  }

  get frameIndex() {return this._frameIndex;}
  set frameIndex(idx) {
    this.setFrameIndex(idx);
    return this;
  }
}

/**
 * @class phina.display.PlainElement
 * @extends phina.display.DisplayElement
 */
class PlainElement extends DisplayElement {

  constructor(options) {
    super(options);
    this.canvas = new Canvas();
    this.canvas.setSize(this.width, this.height);
  }

  draw(canvas) {
    var image = this.canvas.domElement;
    var w = image.width;
    var h = image.height;

    var x = -w*this.origin.x;
    var y = -h*this.origin.y;

    canvas.context.drawImage(image,
      0, 0, w, h,
      x, y, w, h
      );
  }
}

/**
 * @class phina.display.Layer
 * @extends phina.display.DisplayElement
 */
class Layer extends DisplayElement {

  /** 子供を 自分の CanvasRenderer で描画するか */
  // renderChildBySelf: true,

  constructor(options) {
    options = $safe.call({}, options||{}, {
    // options = ({}).$safe(options, {
      width: 640,
      height: 960,
    });
    super(options);
    this.width = options.width;
    this.height = options.height;
    this.gridX = new Grid(options.width, 16);
    this.gridY = new Grid(options.height, 16);
    this.renderChildBySelf = true;
  }

  draw(canvas) {
    if (!this.domElement) return ;

    var image = this.domElement;
    canvas.context.drawImage(image,
      0, 0, image.width, image.height,
      -this.width*this.originX, -this.height*this.originY, this.width, this.height
      );
  }
}


/**
 * @class phina.display.CanvasLayer
 * @extends phina.display.Layer
 */
class CanvasLayer extends Layer {

  constructor(options) {
    super(options);
    this.canvas = new Canvas();
    this.canvas.width  = this.width;
    this.canvas.height = this.height;

    this.renderer = new CanvasRenderer(this.canvas);
    this.domElement = this.canvas.domElement;

    this.on('enterframe', function() {
      var temp = this._worldMatrix;
      this._worldMatrix = null;
      this.renderer.render(this);
      this._worldMatrix = temp;
    });
  }

  draw(canvas) {
    var image = this.domElement;
    canvas.context.drawImage(image,
      0, 0, image.width, image.height,
      -this.width*this.originX, -this.height*this.originY, this.width, this.height
      );
  }
}


/**
 * @class phina.display.ThreeLayer
 * @extends phina.display.Layer
 */
class ThreeLayer extends Layer {

  // scene: null,
  // camera: null,
  // light: null,
  // renderer: null,

  constructor(options) {
    super(options);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 75, options.width / options.height, 1, 10000 );
    this.camera.position.z = 1000;

    this.light = new THREE.DirectionalLight( 0xffffff, 1 );
    this.light.position.set( 1, 1, 1 ).normalize();
    this.scene.add( this.light );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor( 0xf0f0f0 );
    this.renderer.setSize( options.width, options.height );

    this.on('enterframe', function() {
      this.renderer.render( this.scene, this.camera );
    });

    this.domElement = this.renderer.domElement;
  }
}

/**
 * @class phina.display.Shape
 * @extends phina.display.PlainElement
 */
class Shape extends PlainElement {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.Shape.defaults);
    options = $safe.call({}, options||{}, Shape.defaults);

    super(options);

    this.padding = options.padding;

    this.backgroundColor = options.backgroundColor;
    this.fill = options.fill;
    this.stroke = options.stroke;
    this.strokeWidth = options.strokeWidth;
    this.lineCap = options.lineCap;
    this.lineJoin = options.lineJoin;

    this.shadow = options.shadow;
    this.shadowBlur = options.shadowBlur;

    this.watchDraw = true;
    this._dirtyDraw = true;

    var checkRender = function() {
      // render
      if (this.watchDraw && this._dirtyDraw === true) {
        this.render(this.canvas);
        this._dirtyDraw = false;
      }
    };

    this.on('enterframe', checkRender);
    this.on('added', checkRender);
  }

  calcCanvasWidth() {
    return this.width + this.padding*2;
  }

  calcCanvasHeight() {
    return this.height + this.padding*2;
  }

  calcCanvasSize () {
    return {
      width: this.calcCanvasWidth(),
      height: this.calcCanvasHeight(),
    };
  }

  isStrokable() {
    return this.stroke && 0 < this.strokeWidth;
  }

  /**
   * @virtual
   * @param  {phina.graphics.Canvas} canvas 
   * @return {any}
   */
  prerender(canvas) {

  }

  /**
   * @virtual
   * @param  {phina.graphics.Canvas} canvas 
   * @return {any}
   */
  postrender(canvas) {

  }

  renderFill(canvas) {
    canvas.fill();
  }

  renderStroke(canvas) {
    canvas.stroke();
  }

  render(canvas) {
    var context = canvas.context;
    // リサイズ
    var size = this.calcCanvasSize();
    canvas.setSize(size.width, size.height);
    // クリアカラー
    canvas.clearColor(this.backgroundColor);
    // 中心に座標を移動
    canvas.transformCenter();

    // 描画前処理
    this.prerender(this.canvas);

    // ストローク描画
    if (this.isStrokable()) {
      context.strokeStyle = this.stroke;
      context.lineWidth = this.strokeWidth;
      context.lineCap = this.lineCap;
      context.lineJoin = this.lineJoin;
      context.shadowBlur = 0;
      this.renderStroke(canvas);
    }

    // 塗りつぶし描画
    if (this.fill) {
      context.fillStyle = this.fill;

      // shadow の on/off
      if (this.shadow) {
        context.shadowColor = this.shadow;
        context.shadowBlur = this.shadowBlur;
      }
      else {
        context.shadowBlur = 0;
      }

      this.renderFill(canvas);
    }

    // 描画後処理
    this.postrender(this.canvas);

    return this;
  }

  static watchRenderProperty(key) {
    // this.prototype.$watch(key, function(newVal, oldVal) {
    $watch.call(this.prototype, key, function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this._dirtyDraw = true;
      }
    });
  }

  static watchRenderProperties(keys) {
    var watchRenderProperty = this.watchRenderProperty || Shape.watchRenderProperty;
    keys.forEach(function(key) {
      watchRenderProperty.call(this, key);
    }, this);
  }

}

// static props
Shape.defaults = {
  width: 64,
  height: 64,
  padding: 8,

  backgroundColor: '#aaa',
  fill: '#00a',
  stroke: '#aaa',
  strokeWidth: 4,
  lineCap: 'round',
  lineJoin: 'round',

  shadow: false,
  shadowBlur: 4,
};

// _defined
Shape.watchRenderProperties([
  'width',
  'height',
  'radius',
  'padding',
  'backgroundColor',
  'fill',
  'stroke',
  'strokeWidth',
  'lineCap',
  'lineJoin',
  'shadow',
  'shadowBlur',
]);


/**
 * @class phina.display.RectangleShape
 * @extends phina.display.Shape
 */
class RectangleShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.RectangleShape.defaults);
    options = $safe.call({}, options||{}, RectangleShape.defaults);

    super(options);

    this.cornerRadius = options.cornerRadius;
  }

  prerender(canvas) {
    canvas.roundRect(-this.width/2, -this.height/2, this.width, this.height, this.cornerRadius);
  }

}

// static props
RectangleShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'blue',
  stroke: '#aaa',
  strokeWidth: 4,
  cornerRadius: 0,
};

// _defined
Shape.watchRenderProperty.call(RectangleShape, 'cornerRadius');


/**
 * @class phina.display.CircleShape
 * @extends phina.display.Shape
 */
class CircleShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.CircleShape.defaults);
    options = $safe.call({}, options||{}, CircleShape.defaults);

    super(options);

    this.setBoundingType('circle');
  }

  prerender(canvas) {
    canvas.circle(0, 0, this.radius);
  }

}

// static props
CircleShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'red',
  stroke: '#aaa',
  strokeWidth: 4,
  radius: 32,
};


/**
 * @class phina.display.TriangleShape
 * @extends phina.display.Shape
 */
class TriangleShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.TriangleShape.defaults);
    options = $safe.call({}, options||{}, TriangleShape.defaults);

    super(options);

    this.setBoundingType('circle');
  }

  prerender(canvas) {
    canvas.polygon(0, 0, this.radius, 3);
  }

}

// static props
TriangleShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'green',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
};


/**
 * @class phina.display.StarShape
 * @extends phina.display.Shape
 */
class StarShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.StarShape.defaults);
    options = $safe.call({}, options||{}, StarShape.defaults);

    super(options);

    this.setBoundingType('circle');
    this.sides = options.sides;
    this.sideIndent = options.sideIndent;
  }

  prerender(canvas) {
    canvas.star(0, 0, this.radius, this.sides, this.sideIndent);
  }

}

// static props
StarShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'yellow',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
  sides: 5,
  sideIndent: 0.38,
};

// _defined
Shape.watchRenderProperty.call(StarShape, 'sides');
Shape.watchRenderProperty.call(StarShape, 'sideIndent');


/**
 * @class phina.display.PolygonShape
 * @extends phina.display.Shape
 */
class PolygonShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.PolygonShape.defaults);
    options = $safe.call({}, options||{}, PolygonShape.defaults);

    super(options);

    this.setBoundingType('circle');
    this.sides = options.sides;
  }

  prerender(canvas) {
    canvas.polygon(0, 0, this.radius, this.sides);
  }

}

// static props
PolygonShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'cyan',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
  sides: 5,
};

// defined
Shape.watchRenderProperty.call(PolygonShape, 'sides');


/**
 * @class phina.display.HeartShape
 * @extends phina.display.Shape
 */
class HeartShape extends Shape {

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.HeartShape.defaults);
    options = $safe.call({}, options||{}, HeartShape.defaults);

    super(options);

    this.setBoundingType('circle');
    this.cornerAngle = options.cornerAngle;
  }

  prerender(canvas) {
    canvas.heart(0, 0, this.radius, this.cornerAngle);
  }

}
// static props
HeartShape.defaults = {
  backgroundColor: 'transparent',
  fill: 'pink',
  stroke: '#aaa',
  strokeWidth: 4,

  radius: 32,
  cornerAngle: 45,
};

// defined
Shape.watchRenderProperty.call(HeartShape, 'cornerAngle');


/**
 * @class phina.display.PathShape
 * @extends phina.display.Shape
 */
class PathShape extends Shape {
  // paths: null,

  constructor(options) {
    // options = ({}).$safe(options || {}, phina.display.PathShape.defaults);
    options = $safe.call({}, options||{}, PathShape.defaults);

    super(options);
    this.paths = options.paths || [];
    this.lineJoin = options.lineJoin;
    this.lineCap = options.lineCap;
  }

  setPaths (paths) {
    this.paths = paths;
    this._dirtyDraw = true;
    return this;
  }

  clear () {
    this.paths.length = 0;
    this._dirtyDraw = true;
    return this;
  }

  addPaths (paths) {
    [].push.apply(this.paths, paths);
    this._dirtyDraw = true;
    return this;
  }

  addPath (x, y) {
    this.paths.push(phina.geom.Vector2(x, y));
    this._dirtyDraw = true;
    return this;
  }

  getPath (i) {
    return this.paths[i];
  }

  getPaths () {
    return this.paths;
  }

  changePath (i, x, y) {
    this.paths[i].set(x, y);
    this._dirtyDraw = true;
    return this;
  }

  calcCanvasSize () {
    var paths = this.paths;
    if (paths.length === 0) {
      return {
        width: this.padding * 2,
        height:this.padding * 2,
      };
    }
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;

    for (var i = 0, len = paths.length; i < len; ++i) {
      var path = paths[i];
      if (maxX < path.x) { maxX = path.x; }
      if (minX > path.x) { minX = path.x; }
      if (maxY < path.y) { maxY = path.y; }
      if (minY > path.y) { minY = path.y; }
    }
    return {
      width: Math.max(Math.abs(maxX), Math.abs(minX)) * 2 + this.padding * 2,
      height: Math.max(Math.abs(maxY), Math.abs(minY)) * 2 + this.padding * 2,
    };
  }

  calcCanvasWidth () {
    return this.calcCanvasSize().width;
  }

  calcCanvasHeight () {
    return this.calcCanvasSize().height;
  }

  prerender (canvas) {
    var paths = this.paths;
    if (paths.length > 1) {
      var c = canvas.context;
      var p = paths[0];
      c.beginPath();
      c.moveTo(p.x, p.y);
      for (var i = 1, len = paths.length; i < len; ++i) {
        p = paths[i];
        c.lineTo(p.x, p.y);
      }
    }
  }

}

// static props
PathShape.defaults = {
  fill: false,
  backgroundColor: 'transparent',
};

/**
 * @class phina.display.Label
 * @extends phina.display.Shape
 */
class Label extends Shape {

  /**
   * @constructor
   */
  constructor(options) {
    if (typeof arguments[0] !== 'object') {
      options = { text: arguments[0], };
    }
    else {
      options = arguments[0];
    }

    options = $safe.call({}, options||{}, Label.defaults);
    // options = ({}).$safe(options, phina.display.Label.defaults);

    super(options);

    this.text = options.text;
    this.fontSize = options.fontSize;
    this.fontWeight = options.fontWeight;
    this.fontFamily = options.fontFamily;
    this.align = options.align;
    this.baseline = options.baseline;
    this.lineHeight = options.lineHeight;
  }

  calcCanvasWidth() {
    var width = 0;
    var canvas = this.canvas;
    canvas.context.font = this.font;
    this._lines.forEach(function(line) {
      var w = canvas.context.measureText(line).width;
      if (width < w) {
        width = w;
      }
    }, this);
    if (this.align !== 'center') width*=2;

    return width + this.padding*2;
  }

  calcCanvasHeight() {
    var height = this.fontSize * this._lines.length;
    if (this.baseline !== 'middle') height*=2;
    return height*this.lineHeight + this.padding*2;
  }

  prerender(canvas) {
    var context = canvas.context;
    context.font = this.font;
    context.textAlign = this.align;
    context.textBaseline = this.baseline;

    var lines = this._lines;
    this.lineSize = this.fontSize*this.lineHeight;
    this._offset = -Math.floor(lines.length/2)*this.lineSize;
    this._offset += ((lines.length+1)%2) * (this.lineSize/2);
  }

  renderFill(canvas) {
    var context = canvas.context;
    this._lines.forEach(function(line, i) {
      context.fillText(line, 0, i*this.lineSize+this._offset);
    }, this);
  }

  renderStroke(canvas) {
    var context = canvas.context;
    this._lines.forEach(function(line, i) {
      context.strokeText(line, 0, i*this.lineSize+this._offset);
    }, this);
  }

  /**
   * text
   */
  get text() { return this._text; }
  set text(v) {
    this._text = v;
    this._lines = (this.text + '').split('\n');
  }

  get font() {
    return format.call("{fontWeight} {fontSize}px {fontFamily}", this);
    // return "{fontWeight} {fontSize}px {fontFamily}".format(this);
  }

}

// static props
Label.defaults = {
  backgroundColor: 'transparent',

  fill: 'black',
  stroke: null,
  strokeWidth: 2,

  // 
  text: 'Hello, world!',
  // 
  fontSize: 32,
  fontWeight: '',
  fontFamily: "'HiraKakuProN-W3'", // Hiragino or Helvetica,
  // 
  align: 'center',
  baseline: 'middle',
  lineHeight: 1.2,
};

// defined
Shape.watchRenderProperty.call(Label, 'text');
Shape.watchRenderProperty.call(Label, 'fontSize');
Shape.watchRenderProperty.call(Label, 'fontWeight');
Shape.watchRenderProperty.call(Label, 'fontFamily');
Shape.watchRenderProperty.call(Label, 'align');
Shape.watchRenderProperty.call(Label, 'baseline');
Shape.watchRenderProperty.call(Label, 'lineHeight');

/**
 * @class phina.accessory.FrameAnimation
 * FrameAnimation
 * @extends phina.accessory.Accessory
 */
class FrameAnimation extends Accessory {

  /**
   * @constructor
   */
  constructor(ss) {
    super();

    this.ss = AssetManager.get('spritesheet', ss);
    this.paused = true;
    this.finished = false;
    this.fit = true;
  }

  update() {
    if (this.paused) return ;
    if (!this.currentAnimation) return ;

    if (this.finished) {
      this.finished = false;
      this.currentFrameIndex = 0;
      return ;
    }

    ++this.frame;
    if (this.frame%this.currentAnimation.frequency === 0) {
      ++this.currentFrameIndex;
      this._updateFrame();
    }
  }

  gotoAndPlay(name, keep) {
    keep = (keep !== undefined) ? keep : true;
    if (keep && name === this.currentAnimationName
             && this.currentFrameIndex < this.currentAnimation.frames.length
             && !this.paused) {
      return this;
    }
    this.currentAnimationName = name;
    this.frame = 0;
    this.currentFrameIndex = 0;
    this.currentAnimation = this.ss.getAnimation(name);
    this._updateFrame();

    this.paused = false;

    return this;
  }

  gotoAndStop(name) {
    this.currentAnimationName = name;
    this.frame = 0;
    this.currentFrameIndex = 0;
    this.currentAnimation = this.ss.getAnimation(name);
    this._updateFrame();

    this.paused = true;

    return this;
  }

  _updateFrame() {
    var anim = this.currentAnimation;
    if (anim) {
      if (this.currentFrameIndex >= anim.frames.length) {
        if (anim.next) {
          this.gotoAndPlay(anim.next);
          return ;
        }
        else {
          this.paused = true;
          this.finished = true;
          return ;
        }
      }
    }

    var index = anim.frames[this.currentFrameIndex];
    var frame = this.ss.getFrame(index);
    this.target.srcRect.set(frame.x, frame.y, frame.width, frame.height);

    if (this.fit) {
      this.target.width = frame.width;
      this.target.height = frame.height;
    }
  }

}

/**
 * @class phina.accessory.Draggable
 * Draggable
 * @extends phina.accessory.Accessory
 */
class Draggable extends Accessory {

  /**
   * @constructor
   */
  constructor(target) {
    super(target);

    this.initialPosition = new Vector2(0, 0);
    var self = this;

    this.on('attached', function() {
      this.target.setInteractive(true);

      this._dragging = false;

      this.target.on('pointstart', function(e) {
        if (Draggable._lock) return ;

        this._dragging = true;
        self.initialPosition.x = this.x;
        self.initialPosition.y = this.y;
        self.flare('dragstart');
        this.flare('dragstart');
      });
      this.target.on('pointmove', function(e) {
        if (!this._dragging) return ;

        this.x += e.pointer.dx;
        this.y += e.pointer.dy;
        self.flare('drag');
        this.flare('drag');
      });

      this.target.on('pointend', function(e) {
        if (!this._dragging) return ;

        this._dragging = false;
        self.flare('dragend');
        this.flare('dragend');
      });
    });
  }

  back(time, easing) {
    if (time) {
      var t = this.target;
      t.setInteractive(false);
      var tweener = new Tweener().attachTo(t);
      tweener
        .to({
          x: this.initialPosition.x,
          y: this.initialPosition.y,
        }, time, easing || 'easeOutElastic')
        .call(function() {
          tweener.remove();

          t.setInteractive(true);
          this.flare('backend');
        }, this);
    }
    else {
      this.target.x = this.initialPosition.x;
      this.target.y = this.initialPosition.y;
      this.flare('backend');
    }
  }

  enable() {
    this._enable = true;
  }

  static lock() {
    this._lock = true;
  }

  static unlock() {
    this._lock = false;
  }

}

Draggable._lock = false;

// 呼び出しで拡張する？ TweenerはElement側で定義
// phina.app.Element.prototype.getter('draggable', function() {
//   if (!this._draggable) {
//     this._draggable = phina.accessory.Draggable().attachTo(this);
//   }
//   return this._draggable;
// });

/**
 * @class phina.accessory.Flickable
 * Flickable
 * @extends phina.accessory.Accessory
 */
class Flickable extends Accessory {

  /**
   * @constructor
   */
  constructor(target) {
    super(target);

    this.initialPosition = new Vector2(0, 0);
    var self = this;

    this.friction = 0.9;
    this.velocity = new Vector2(0, 0);
    this.vertical = true;
    this.horizontal = true;

    this.cacheList = [];

    this.on('attached', function() {
      this.target.setInteractive(true);

      this.target.on('pointstart', function(e) {
        self.initialPosition.set(this.x, this.y);
        self.velocity.set(0, 0);
      });
      this.target.on('pointstay', function(e) {
        if (self.horizontal) {
          this.x += e.pointer.dx;
        }
        if (self.vertical) {
          this.y += e.pointer.dy;
        }

        if (self.cacheList.length > 3) self.cacheList.shift();
        self.cacheList.push(e.pointer.deltaPosition.clone());
      });

      this.target.on('pointend', function(e) {
        // 動きのある delta position を後ろから検索　
        var delta = self.cacheList.reverse().find(function(v) {
          return v.lengthSquared() > 10;
        });
        clear.call(self.cacheList);
        // self.cacheList.clear();

        if (delta) {
          self.velocity.x = delta.x;
          self.velocity.y = delta.y;

          self.flare('flickstart', {
            direction: delta.normalize(),
          });
        }
        else {
          self.flare('flickcancel');
        }

        // self.flare('flick');
        // self.flare('flickend');
      });
    });
  }

  update() {
    if (!this.target) return ;

    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    if (this.horizontal) {
      this.target.position.x += this.velocity.x;
    }
    if (this.vertical) {
      this.target.position.y += this.velocity.y;
    }
  }

  cancel() {
    this.target.x = this.initialPosition.x;
    this.target.y = this.initialPosition.y;
    this.velocity.set(0, 0);

    // TODO: 
    // this.setInteractive(false);
    // this.tweener.clear()
    //     .move(this.initialX, this.initialY, 500, "easeOutElastic")
    //     .call(function () {
    //         this.setInteractive(true);
    //         this.fire(tm.event.Event("backend"));
    //     }.bind(this));
  }

  enable() {
    this._enable = true;
  }

}

// TODO: Element側で呼ぶ？
// phina.app.Element.prototype.getter('flickable', function() {
//   if (!this._flickable) {
//     this._flickable = phina.accessory.Flickable().attachTo(this);
//   }
//   return this._flickable;
// });

/**
 * @class phina.accessory.Physical
 * 本物ではないので名前変えるかも
 * FakePhysical or MarioPhysical or LiePhysical
 * RetroPysical or PysicaLike
 * @extends phina.accessory.Accessory
 */
class Physical extends Accessory  {

  /**
   * @constructor
   */
  constructor(target) {
    super(target);

    this.velocity = new Vector2(0, 0);
    this.gravity = new Vector2(0, 0);

    this.friction = 1.0;
  }

  update() {
    var t = this.target;

    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    this.velocity.x += this.gravity.x;
    this.velocity.y += this.gravity.y;

    t.position.x += this.velocity.x;
    t.position.y += this.velocity.y;
  }

  force(x, y) {
    this.velocity.set(x, y);
    return this;
  }

  addForce(x, y) {
    this.velocity.x += x;
    this.velocity.y += y;
    return this;
  }

  setGravity(x, y) {
    this.gravity.set(x, y);
    return this;
  }

  setFriction(fr) {
    this.friction = fr;
    return this;
  }
}

// phina.app.Element.prototype.getter('physical', function() {
//   if (!this._physical) {
//     this._physical = phina.accessory.Physical().attachTo(this);
//   }
//   return this._physical;
// });

/**
 * @class phina.asset.Asset
 * @extends phina.util.EventDispatcher
 */
class Asset extends EventDispatcher {

  // serverError: false,
  // notFound: false,
  // loadError: false,

  /**
   * @constructor
   */
  constructor(src) {
    super();

    this.loaded = false;
    this.serverError = false;
    this.notFound = false;
    this.loadError = false;
  }

  load(src) {
    this.src = src;
    return new Flow(this._load.bind(this));
  }

  isLoaded() {
    return this.loaded;
  }

  _load(resolve) {
    var self = this;
    setTimeout(function() {
      self.loaded = true;
      resolve();
    }, 100);
  }

  // ロード失敗時にダミーをセットする
  loadDummy() { }

}

var getFirst = function(array) { return first.get.call(array); };
var getLast = function(array) { return last.get.call(array); };

/**
 * @class phina.asset.Texture
 * @extends phina.asset.Asset
 */
class Texture extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  _load(resolve) {
    this.domElement = new Image();

    var isLocal = (location.protocol == 'file:');
    if ( !isLocal && !(/^data:/.test(this.src)) ) ;

    var self = this;
    this.domElement.onload = function(e) {
      self.loaded = true;
      resolve(self);
    };
    this.domElement.onerror = function(e) {
      console.error(format.call("[phina.js] not found `{0}`!", this.src));
      // console.error("[phina.js] not found `{0}`!".format(this.src));

      // var key = self.src.split('/').last.replace('.png', '').split('?').first.split('#').first;
      var key = getFirst(
        getFirst(
          getLast(
            self.src.split('/')
          ).replace('.png', '').split('?')
        ).split('#')
      );
      e.target.onerror = null;
      e.target.src = "http://dummyimage.com/128x128/444444/eeeeee&text=" + key;
    };

    this.domElement.src = this.src;
  }

  clone() {
    var image = this.domElement;
    var canvas = new Canvas().setSize(image.width, image.height);
    var t = new Texture();
    canvas.context.drawImage(image, 0, 0);
    t.domElement = canvas.domElement;
    return t;
  }

  transmit(color) {
    // imagaオブジェクトをゲット
    var image = this.domElement;
    // 新規canvas作成
    var canvas = new Canvas().setSize(image.width, image.height);
    // 新規canvasに描画
    canvas.context.drawImage(image, 0, 0);
    // canvas全体のイメージデータ配列をゲット
    var imageData = canvas.context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    // 透過色の指定がなければ左上のrgb値を抽出
    var r = (color !== undefined) ? color.r : data[0];
    var g = (color !== undefined) ? color.g : data[1];
    var b = (color !== undefined) ? color.b : data[2];
    // 配列を4要素目から4つ飛び（アルファ値）でループ
    // (3).step(data.length, 4, function(i) {
    step.call(3, data.length, 4, function(i) {
      // rgb値を逆算でゲットし、左上のrgbと比較
      if (data[i - 3] === r && data[i - 2] === g && data[i - 1] === b) {
        // 一致した場合はアルファ値を書き換える
        data[i] = 0;
      }
    });
    // 書き換えたイメージデータをcanvasに戻す
    canvas.context.putImageData(imageData, 0, 0);

    this.domElement = canvas.domElement;
  }

  filter(filters) {
    if (!filters) {
      return this;
    }
    if (!Array.isArray(filters)) {
      filters = [filters];
    }
    var image = this.domElement;
    var w = image.width;
    var h = image.height;
    var canvas = new Canvas().setSize(w, h);
    var imageData = null;

    canvas.context.drawImage(image, 0, 0);
    imageData = canvas.context.getImageData(0, 0, w, h);
    filters.forEach( function (fn) {
      if (typeof fn == 'function') {
        // h.times( function (y) {
        times.call(h, function (y) {
          // w.times( function (x) {
          times(w, function (x) {
            var i = (y * w + x) * 4;
            var pixel = imageData.data.slice(i, i + 4);
            fn(pixel, i, x, y, imageData);
          });
        });
      }
    });
    canvas.context.putImageData(imageData, 0, 0);
    this.domElement = canvas.domElement;
    return this;
  }

}

/**
 * @class phina.asset.Sound
 * @extends phina.asset.Asset
 */
class Sound extends Asset {
  
  // _loop: false,
  // _loopStart: 0,
  // _loopEnd: 0,
  // _playbackRate: 1,
  
  /**
   * @constructor
   */
  constructor() {
    super();
    this._loop = false;
    this._loopStart = 0;
    this._loopEnd = 0;
    this._playbackRate = 1;
    this.context = Sound.getAudioContext();
    this.gainNode = this.context.createGain();
  }

  play(when, offset, duration) {
    when = when ? when + this.context.currentTime : 0;
    offset = offset || 0;

    if (this.source) ;

    var source = this.source = this.context.createBufferSource();
    var buffer = source.buffer = this.buffer;
    source.loop = this._loop;
    source.loopStart = this._loopStart;
    source.loopEnd = this._loopEnd;
    source.playbackRate.value = this._playbackRate;

    // connect
    source.connect(this.gainNode);
    this.gainNode.connect(Sound.getMasterGain());
    // play
    if (duration !== undefined) {
      source.start(when, offset, duration);
    }
    else {
      source.start(when, offset);
    }
    
    // check play end
    source.addEventListener('ended', function(){
      this.flare('ended');
    }.bind(this));

    return this;
  }

  stop() {
    // stop
    if (this.source) {
      // stop すると source.endedも発火する
      this.source.stop && this.source.stop(0);
      this.source = null;
      this.flare('stop');
    }

    return this;
  }

  pause() {
    this.source.playbackRate.value = 0;
    this.flare('pause');
    return this;
  }

  resume() {
    this.source.playbackRate.value = this._playbackRate;
    this.flare('resume');
    return this;
  }

  // 試してみるなう
  _oscillator(type) {
    var context = this.context;

    var oscillator = context.createOscillator();

    // Sine wave is type = “sine”
    // Square wave is type = “square”
    // Sawtooth wave is type = “saw”
    // Triangle wave is type = “triangle”
    // Custom wave is type = “custom” 
    oscillator.type = type || 'sine';

    this.source = oscillator;
    // connect
    this.source.connect(context.destination);
  }

  loadFromBuffer(buffer) {
    var context = this.context;

    // set default buffer
    if (!buffer) {
      buffer = context.createBuffer( 1, 44100, 44100 );
      var channel = buffer.getChannelData(0);

      for( var i=0; i < channel.length; i++ )
      {
        channel[i] = Math.sin( i / 100 * Math.PI);
      }
    }

    // source
    this.buffer = buffer;
  }

  setLoop(loop) {
    this.loop = loop;
    return this;
  }

  setLoopStart(loopStart) {
    this.loopStart = loopStart;
    return this;
  }

  setLoopEnd(loopEnd) {
    this.loopEnd = loopEnd;
    return this;
  }
  
  setPlaybackRate(playbackRate) {
    this.playbackRate = playbackRate;
    return this;
  }

  _load(r) {
    if (/^data:/.test(this.src)) {
      this._loadFromURIScheme(r);
    }
    else {
      this._loadFromFile(r);
    }
  }

  _loadFromFile(r) {
    var self = this;

    var xml = new XMLHttpRequest();
    xml.open('GET', this.src);
    xml.onreadystatechange = function() {
      if (xml.readyState === 4) {
        if ([200, 201, 0].indexOf(xml.status) !== -1) {

          // 音楽バイナリーデータ
          var data = xml.response;

          // webaudio 用に変換
          self.context.decodeAudioData(data, function(buffer) {
            self.loadFromBuffer(buffer);
            r(self);
          }, function() {
            console.warn("音声ファイルのデコードに失敗しました。(" + self.src + ")");
            r(self);
            self.flare('decodeerror');
          });

        } else if (xml.status === 404) {
          // not found

          self.loadError = true;
          self.notFound= true;
          r(self);
          self.flare('loaderror');
          self.flare('notfound');

        } else {
          // サーバーエラー

          self.loadError = true;
          self.serverError = true;
          r(self);
          self.flare('loaderror');
          self.flare('servererror');
        }
      }
    };

    xml.responseType = 'arraybuffer';

    xml.send(null);
  }

  _loadFromURIScheme(r) {
    var byteString = '';
    if (this.src.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(this.src.split(',')[1]);
    }
    else {
      byteString = unescape(this.src.split(',')[1]);
    }

    var self = this;
    var len = byteString.length;
    var buffer = new Uint8Array(len);

    for (var i=0; i<len; ++i) {
      buffer[i] = byteString.charCodeAt(i);
    }

    // webaudio 用に変換
    this.context.decodeAudioData(buffer.buffer, function(buffer) {
      self.loadFromBuffer(buffer);
      r(self);
    }, function() {
      console.warn("音声ファイルのデコードに失敗しました。(" + self.src + ")");
      self.loaded = true;
      r(self);
    });
  }

  loadDummy() {
    this.loadFromBuffer();
  }

  get volume()  { return this.gainNode.gain.value; }
  set volume(v) { this.gainNode.gain.value = v; }

  get loop()  { return this._loop; }
  set loop(v) {
    this._loop = v;
    if (this.source) this.source._loop = v;
  }

  get loopStart()  { return this._loopStart; }
  set loopStart(v) {
    this._loopStart = v;
    if (this.source) this.source._loopStart = v;
  }

  get loopEnd()  { return this._loopEnd; }
  set loopEnd(v) {
    this._loopEnd = v;
    if (this.source) this.source._loopEnd = v;
  }

  get playbackRate() { return this._playbackRate; }
  set playbackRate(v) {
    this._playbackRate = v;
    if(this.source && this.source.playbackRate.value !== 0){
      this.source.playbackRate.value = v;
    }
  }

  static getMasterGain() {
    if(!this._masterGain) {
      var context = this.getAudioContext();
      this._masterGain = context.createGain();
      this._masterGain.connect(context.destination);
    }
    return this._masterGain;
  }

  static getAudioContext() {
    if (!Support.webAudio) return null;

    if (this.context) return this.context;

    var g = phina$1.global;
    var context = null;

    if (g.AudioContext) {
      context = new AudioContext();
    }
    else if (g.webkitAudioContext) {
      context = new webkitAudioContext();
    }
    else if (g.mozAudioContext) {
      context = new mozAudioContext();
    }

    this.context = context;

    return context;
  }

}

// defined
accessor.call(Sound, 'volume', {
// this.accessor('volume', {
  get: function() {
    return this.getMasterGain().gain.value;
  },
  set: function(v) {
    this.getMasterGain().gain.value = v;
  },
});

/**
 * @class phina.asset.Script
 * @extends phina.asset.Asset
 */
class Script extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  _load(resolve) {
    var self = this;
    this.domElement = document.createElement('script');
    this.domElement.src = this.src;

    this.domElement.onload = function() {
      resolve(self);
    }.bind(this);

    document.body.appendChild(this.domElement);
  }

}

/**
 * @class phina.asset.SpriteSheet
 * @extends phina.asset.Asset
 */
class SpriteSheet extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  setup(params) {
    this._setupFrame(params.frame);
    this._setupAnim(params.animations);
    return this;
  }

  _load(resolve) {

    var self = this;

    if (typeof this.src === 'string') {
      var xml = new XMLHttpRequest();
      xml.open('GET', this.src);
      xml.onreadystatechange = function() {
        if (xml.readyState === 4) {
          if ([200, 201, 0].indexOf(xml.status) !== -1) {
            var data = xml.responseText;
            var json = JSON.parse(data);

            self.setup(json);

            resolve(self);
          }
        }
      };

      xml.send(null);
    }
    else {
      this.setup(this.src);
      resolve(self);
    }

  }

  _setupFrame(frame) {
    var frames = this.frames = [];
    var unitWidth = frame.width;
    var unitHeight = frame.height;

    var count = frame.rows * frame.cols;
    this.frame = count;

    times.call(count, function(i) {
    // (count).times(function(i) {
      var xIndex = i%frame.cols;
      var yIndex = (i/frame.cols)|0;

      frames.push({
        x: xIndex*unitWidth,
        y: yIndex*unitHeight,
        width: unitWidth,
        height: unitHeight,
      });
    });
  }

  _setupAnim(animations) {
    this.animations = {};

    // デフォルトアニメーション
    this.animations["default"] = {
        frames: range.call([], 0, this.frame),
        // frames: [].range(0, this.frame),
        next: "default",
        frequency: 1,
    };

    forIn.call(animations, function(key, value) {
    // animations.forIn(function(key, value) {
      var anim = value;

      if (anim instanceof Array) {
        this.animations[key] = {
          frames: range.call([], anim[0], anim[1]),
          // frames: [].range(anim[0], anim[1]),
          next: anim[2],
          frequency: anim[3] || 1,
        };
      }
      else {
        this.animations[key] = {
          frames: anim.frames,
          next: anim.next,
          frequency: anim.frequency || 1
        };
      }

    }, this);
  }

  /**
   * フレームを取得
   */
  getFrame(index) {
    return this.frames[index];
  }

  getAnimation(name) {
    name = (name !== undefined) ? name : "default";
    return this.animations[name];
  }

}

/**
 * @class phina.asset.Font
 * @extends phina.asset.Asset
 */
class Font extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
    this.fontName = null;
  }

  load(path) {
    this.src = path;

    var reg = /(.*)(?:\.([^.]+$))/;
    var key = this.fontName || last.call(path.match(reg)[1].split('/'));    //フォント名指定が無い場合はpathの拡張子前を使用
    // var key = this.fontName || path.match(reg)[1].split('/').last;    //フォント名指定が無い場合はpathの拡張子前を使用
    var type = path.match(reg)[2];
    var format$1 = "unknown";
    switch (type) {
      case "ttf":
        format$1 = "truetype"; break;
      case "otf":
        format$1 = "opentype"; break;
      case "woff":
        format$1 = "woff"; break;
      case "woff2":
        format$1 = "woff2"; break;
      default:
        console.warn("サポートしていないフォント形式です。(" + path + ")");
    }
    this.format = format$1;
    this.fontName = key;

    if (format$1 !== "unknown") {
      var text = format.call("@font-face { font-family: '{0}'; src: url({1}) format('{2}'); }", key, path, format$1);
      // var text = "@font-face { font-family: '{0}'; src: url({1}) format('{2}'); }".format(key, path, format);
      var e = document.querySelector("head");
      var fontFaceStyleElement = document.createElement("style");
      if (fontFaceStyleElement.innerText) {
        fontFaceStyleElement.innerText = text;
      } else {
        fontFaceStyleElement.textContent = text;
      }
      e.appendChild(fontFaceStyleElement);
    }

    return new Flow(this._load.bind(this));
  }

  _load(resolve) {
    if (this.format !== "unknown") {
      this._checkLoaded(this.fontName, function() {
        this.loaded = true;
        resolve(this);
      }.bind(this));
    } else {
      this.loaded = true;
      resolve(this);
    }
  }

  _checkLoaded (font, callback) {
    var canvas = new Canvas();
    var DEFAULT_FONT = canvas.context.font.split(' ')[1];
    canvas.context.font = '40px ' + DEFAULT_FONT;

    var checkText = "1234567890-^\\qwertyuiop@[asdfghjkl;:]zxcvbnm,./\!\"#$%&'()=~|QWERTYUIOP`{ASDFGHJKL+*}ZXCVBNM<>?_１２３４５６７８９０－＾￥ｑｗｅｒｔｙｕｉｏｐａｓｄｆｇｈｊｋｌｚｘｃｖｂｎｍ，．あいうかさたなをん時は金なり";
    // 特殊文字対応
    checkText += String.fromCharCode("0xf04b");

    var before = canvas.context.measureText(checkText).width;
    canvas.context.font = '40px ' + font + ', ' + DEFAULT_FONT;

    var timeoutCount = 30;
    var checkLoadFont = function () {
      var after = canvas.context.measureText(checkText).width;
      if (after !== before) {
        setTimeout(function() {
          callback && callback();
        }, 100);
      } else {
        if (--timeoutCount > 0) {
          setTimeout(checkLoadFont, 100);
        }
        else {
          callback && callback();
          console.warn("timeout font loading");
        }
      }
    };
    checkLoadFont();
  }

  setFontName(name) {
    if (this.loaded) {
      console.warn("フォント名はLoad前にのみ設定が出来ます(" + name + ")");
      return this;
    }
    this.fontName = name;
    
    return this;
  }

  getFontName() {
    return this.fontName;
  }

}

/**
 * @class phina.asset.File
 * @extends phina.asset.Asset
 */
class File extends Asset {

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  _load(resolve) {

    var params = {};

    if (typeof this.src === 'string') {
      $extend.call(params, {
      // params.$extend({
        path: this.src,
      });
    }
    else if (typeof this.src === 'object') {
      $extend.call(params, this.src);
      // params.$extend(this.src);
    }

    $safe.call(params, {
    // params.$safe({
      path: '',
      dataType: 'text',
    });

    // load
    var self = this;
    var xml = new XMLHttpRequest();
    xml.open('GET', params.path);
    xml.onreadystatechange = function() {
      if (xml.readyState === 4) {
        if ([200, 201, 0].indexOf(xml.status) !== -1) {
          var data = xml.responseText;

          if (params.dataType === 'json') {
            data = JSON.parse(data);
          } else if (params.dataType === 'xml') {
            data = (new DOMParser()).parseFromString(data, "text/xml");
          }
          self.dataType = params.dataType;

          self.data = data;
          resolve(self);
        }
      }
    };

    xml.send(null);
    // this.domElement = new Image();
    // this.domElement.src = this.src;

    // var self = this;
    // this.domElement.onload = function() {
    //   self.loaded = true;
    //   resolve(self);
    // };
  }

}

/**
 * @class phina.asset.AssetLoader
 * @extends phina.util.EventDispatcher
 */
class AssetLoader extends EventDispatcher {

  /**
   * @constructor
   */
  constructor(params) {
    super();

    // params = (params || {}).$safe({
    //   cache: true,
    // });
    params = $safe.call(params||{}, { cache: true });

    this.assets = {};
    this.cache = params.cache;
  }

  load(params) {
    var self = this;
    var flows = [];

    var counter = 0;
    var length = 0;
    forIn.call(params, function(type, assets) {
    // params.forIn(function(type, assets) {
      length += Object.keys(assets).length;
    });
    
    forIn.call(params, function(type, assets) {
    // params.forIn(function(type, assets) {
      forIn.call(assets, function(key, value) {
      // assets.forIn(function(key, value) {
        var func = AssetLoader.assetLoadFunctions[type];
        var flow = func(key, value);
        flow.then(function(asset) {
          if (self.cache) {
            AssetManager.set(type, key, asset);
          }
          self.flare('progress', {
            key: key,
            asset: asset,
            progress: (++counter/length),
          });
        });
        flows.push(flow);
      });
    });


    if (self.cache) {

      self.on('progress', function(e) {
        if (e.progress >= 1.0) {
          // load失敗時、対策

          forIn.call(params, function(type, assets) {
          // params.forIn(function(type, assets) {
            forIn.call(assets, function(key, value) {
            // assets.forIn(function(key, value) {
              var asset = AssetManager.get(type, key);
              if (asset.loadError) {
                var dummy = AssetManager.get(type, 'dummy');
                if (dummy) {
                  if (dummy.loadError) {
                    dummy.loadDummy();
                    dummy.loadError = false;
                  }
                  AssetManager.set(type, key, dummy);
                } else {
                  asset.loadDummy();
                }
              }
            });
          });
        }
      });
    }
    return Flow.all(flows).then(function(args) {
      self.flare('load');
    });
  }

  static register(key, func) {
    this.assetLoadFunctions[key] = func;
    return this;
  }

}

AssetLoader.assetLoadFunctions = {
  image: function(key, path) {
    var texture = new Texture();
    var flow = texture.load(path);
    return flow;
  },
  sound: function(key, path) {
    var sound = new Sound();
    var flow = sound.load(path);
    return flow;
  },
  spritesheet: function(key, path) {
    var ss = new SpriteSheet();
    var flow = ss.load(path);
    return flow;
  },
  script: function(key, path) {
    var script = new Script();
    return script.load(path);
  },
  font: function(key, path) {
    var font = new Font();
    font.setFontName(key);
    return font.load(path);
  },
  json: function(key, path) {
    var text = new File();
    return text.load({
      path: path,
      dataType: "json",
    });
  },
  xml: function(key, path) {
    var text = new File();
    return text.load({
      path: path,
      dataType: "xml",
    });
  },
  text: function(key, path) {
    var text = new File();
    return text.load(path);
  }
};

/**
 * @class phina.asset.SoundManager
 * ### Ref
 * - http://evolve.reintroducing.com/_source/classes/as3/SoundManager/SoundManager.html
 * - https://github.com/nicklockwood/SoundManager
 */
class SoundManager {
  // volume: 0.8,
  // musicVolume: 0.8,
  // muteFlag: false,
  // currentMusic: null,

  static play(name, when, offset, duration) {
    var sound = AssetManager.get('sound', name);

    sound.volume = this.getVolume();
    sound.play(when, offset, duration);

    return sound;
  }

  static stop() {
    // TODO: 
  }
  static pause() {
    // TODO: 
  }
  static fade() {
    // TODO: 
  }
  static setVolume(volume) {
    this.volume = volume;
  }
  static getVolume() {
    return this.volume;
  }

  /*
   * ミュート
   */
  static mute() {
    this.muteFlag = true;
    if (this.currentMusic) {
      this.currentMusic.volume = 0;
    }
    return this;
  }
  /*
   * ミュート解除
   */
  static unmute() {
    this.muteFlag = false;
    if (this.currentMusic) {
      this.currentMusic.volume = this.getVolumeMusic();
    }
    return this;
  }
  static isMute() {
    return this.muteFlag;
  }

  static playMusic(name, fadeTime, loop, when, offset, duration) {
    loop = (loop !== undefined) ? loop : true;

    if (this.currentMusic) {
      this.stopMusic(fadeTime);
    }

    var music = AssetManager.get('sound', name);

    music.setLoop(loop);
    music.play(when, offset, duration);

    if (fadeTime > 0) {
      var count = 32;
      var counter = 0;
      var unitTime = fadeTime/count;
      var volume = this.getVolumeMusic();

      music.volume = 0;
      var id = setInterval(function() {
        counter += 1;
        var rate = counter/count;
        music.volume = rate*volume;

        if (rate >= 1) {
          clearInterval(id);
          return false;
        }

        return true;
      }, unitTime);
    }
    else {
      music.volume = this.getVolumeMusic();
    }

    this.currentMusic = music;

    return this.currentMusic;
  }

  static stopMusic(fadeTime) {
    if (!this.currentMusic) { return ; }

    var music = this.currentMusic;
    this.currentMusic = null;

    if (fadeTime > 0) {
      var count = 32;
      var counter = 0;
      var unitTime = fadeTime/count;
      var volume = this.getVolumeMusic();

      music.volume = 0;
      var id = setInterval(function() {
        counter += 1;
        var rate = counter/count;
        music.volume = volume*(1-rate);

        if (rate >= 1) {
          music.stop();
          clearInterval(id);
          return false;
        }

        return true;
      }, unitTime);
    }
    else {
      music.stop();
    }
  }

  /*
   * 音楽を一時停止
   */
  static pauseMusic() {
    if (!this.currentMusic) { return ; }
    this.currentMusic.pause();
  }
  /*
   * 音楽を再開
   */
  static resumeMusic() {
    if (!this.currentMusic) { return ; }
    this.currentMusic.resume();
  }
  /*
   * 音楽のボリュームを設定
   */
  static setVolumeMusic(volume) {
    this.musicVolume = volume;
    if (this.currentMusic) {
      this.currentMusic.volume = volume;
    }

    return this;
  }
  /*
   * 音楽のボリュームを取得
   */
  static getVolumeMusic() {
    return this.musicVolume;
  }

}

// static props
SoundManager.volume = 0.8;
SoundManager.musicVolume = 0.8;
SoundManager.muteFlag = false;
SoundManager.currentMusic = null;

/**
 * @class phina.ui.Button
 * Button
 * @extends phina.display.Shape
 */
class Button extends Shape {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call(options || {}, Button.defaults);
    // options = (options || {}).$safe(phina.ui.Button.defaults);
    super(options);

    this.cornerRadius = options.cornerRadius;
    this.text         = options.text;
    this.fontColor    = options.fontColor;
    this.fontSize     = options.fontSize;
    this.fontWeight     = options.fontWeight;
    this.fontFamily   = options.fontFamily;

    this.setInteractive(true);
    this.on('pointend', function() {
      this.flare('push');
    });
  }

  prerender(canvas) {
    canvas.roundRect(-this.width/2, -this.height/2, this.width, this.height, this.cornerRadius);
  }

  postrender(canvas) {
    var context = canvas.context;
    // text
    var font = format.call("{fontWeight} {fontSize}px {fontFamily}", this);
    // var font = "{fontWeight} {fontSize}px {fontFamily}".format(this);
    context.font = font;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = this.fontColor;
    context.fillText(this.text, 0, 0);
  }

}

// static props
Button.defaults = {
  width: 200,
  height: 80,
  backgroundColor: 'transparent',
  fill: 'hsl(200, 80%, 60%)',
  stroke: null,

  cornerRadius: 8,
  text: 'Hello',
  fontColor: 'white',
  fontSize: 32,
  fontWeight: '',
  fontFamily: "'HiraKakuProN-W3'", // Hiragino or Helvetica,
};

// defined
Shape.watchRenderProperty.call(Button, 'cornerRadius');
Shape.watchRenderProperty.call(Button, 'text');
Shape.watchRenderProperty.call(Button, 'fontColor');
Shape.watchRenderProperty.call(Button, 'fontSize');
Shape.watchRenderProperty.call(Button, 'fontFamily');

/**
 * @class phina.ui.Gauge
 * @extends phina.display.Shape
 */
class Gauge extends Shape {

  constructor(options) {
    options = $safe.call({}, options || {}, Gauge.defaults);
    // options = ({}).$safe(options || {}, phina.ui.Gauge.defaults);
    
    super(options);

    this._value = (options.value !== undefined) ? options.value : options.maxValue;
    this.maxValue = options.maxValue;
    this.gaugeColor = options.gaugeColor;
    this.cornerRadius = options.cornerRadius;

    this.visualValue = (options.value !== undefined) ? options.value : options.maxValue;
    this.animation = options.animation;
    this.animationTime = 1*1000;
  }

  /**
   * 満タンかをチェック
   */
  isFull() {
    return this.value === this.maxValue;
  }

  /**
   * 空っぽかをチェック
   */
  isEmpty() {
    return this.value === 0;
  }

  setValue(value) {
    value = clamp(value, 0, this.maxValue);
    // value = Math.clamp(value, 0, this.maxValue);

    // end when now value equal value of argument
    if (this.value === value) return ;

    // fire value change event
    this.flare('change');

    this._value = value;

    if (this.animation) {
      var range = Math.abs(this.visualValue-value);
      var time = (range/this.maxValue)*this.animationTime;

      this.tweener.ontween = function() {
        this._dirtyDraw = true;
      }.bind(this);
      this.tweener
        .clear()
        .to({'visualValue': value}, time)
        .call(function() {
          this.flare('changed');
          if (this.isEmpty()) {
            this.flare('empty');
          }
          else if (this.isFull()) {
            this.flare('full');
          }
        }, this);
    }
    else {
      this.visualValue = value;
      this.flare('changed');
      if (this.isEmpty()) {
        this.flare('empty');
      }
      else if (this.isFull()) {
        this.flare('full');
      }
    }
  }

  getRate() {
    var rate = this.visualValue/this.maxValue;
    return rate;
  }

  prerender(canvas) {
    canvas.roundRect(-this.width/2, -this.height/2, this.width, this.height, this.cornerRadius);
  }

  postrender(canvas) {
    var rate = this.getRate();
    canvas.context.fillStyle = this.gaugeColor;
    canvas.context.save();
    canvas.context.clip();
    canvas.fillRect(-this.width/2, -this.height/2, this.width*rate, this.height);
    canvas.context.restore();
  }

  get value() {
    return this._value;
  }
  set value(v) {
    this.setValue(v);
  }

}

// static props
Gauge.defaults = {
  width: 256,
  height: 32,
  backgroundColor: 'transparent',
  fill: 'white',
  stroke: '#aaa',
  strokeWidth: 4,
  maxValue: 100,
  gaugeColor: '#44f',
  cornerRadius: 0,
  animation: true
};

// defined
Shape.watchRenderProperty.call(Gauge, 'value');
Shape.watchRenderProperty.call(Gauge, 'maxValue');
Shape.watchRenderProperty.call(Gauge, 'gaugeColor');
Shape.watchRenderProperty.call(Gauge, 'cornerRadius');


/**
 * @class phina.ui.CircleGauge
 * @extends phina.ui.Gauge
 */
class CircleGauge extends Gauge {

  constructor(options) {
    options = $safe.call(options || {}, {
    // options = (options || {}).$safe({
      backgroundColor: 'transparent',
      fill: '#aaa',
      stroke: '#222',

      radius: 64,
      anticlockwise: true,
      showPercentage: false, // TODO
    });

    super(options);

    this.setBoundingType('circle');

    this.radius = options.radius;
    this.anticlockwise = options.anticlockwise;
    this.showPercentage = options.showPercentage;
  }

  prerender(canvas) {
    var rate = this.getRate();
    var end = (Math.PI*2)*rate;
    this.startAngle = 0;
    this.endAngle = end;

    this.canvas.rotate(-Math.PI*0.5);
    this.canvas.scale(1, -1);
  }

  renderFill(canvas) {
    canvas.fillPie(0, 0, this.radius, this.startAngle, this.endAngle);
  }

  renderStroke(canvas) {
    canvas.strokeArc(0, 0, this.radius, this.startAngle, this.endAngle);
  }

  postrender() {
    // if (this.showPercentage) {
    //   // TODO:
    //   var left = Math.max(0, this.limit-this.time);
    //   this.label.text = Math.ceil(left/1000)+'';
    // }
  }

}

var textWidthCache = {};

/**
 * @class phina.ui.LabelArea
 * @extends phina.display.Label
 */
class LabelArea extends Label {

  // _lineUpdate: true,

  constructor(options) {
    options = $safe.call({}, options, LabelArea.defaults);
    // options = {}.$safe(options, LabelArea.defaults);
    super(options);

    this._lineUpdate = true;
    this.verticalAlign = options.verticalAlign;
    this.scroll = options.scroll || new Vector2();
    this.scrollX = options.scrollX;
    this.scrollY = options.scrollY;
  }

  calcCanvasWidth () {
    return this.width + this.padding * 2;
  }

  calcCanvasHeight () {
    return this.height + this.padding * 2;
  }
  getOffsetY () {
    if (typeof this.verticalAlign === 'number') {
      return this.verticalAlign;
    }
    return LabelArea.verticalAlignToOffsetMap[this.verticalAlign] || 0;
  }

  getOffsetX () {
    return LabelArea.alignToOffsetMap[this.align] || 0;
  }

  getTextWidthCache () {
    var cache = textWidthCache[this.font];
    return cache || (textWidthCache[this.font] = {});
  }
  
  spliceLines (lines) {
    var rowWidth = this.width;
    var context = this.canvas.context;
    context.font = this.font;

    var cache = this.getTextWidthCache();

    // update cache
    each$1.call(this._text, function(ch) {
    // this._text.each(function(ch) {
      if (!cache[ch]) {
        cache[ch] = context.measureText(ch).width;
      }
    });
    
    var localLines = [];
    lines.forEach(function(line) {
      
      var str = '';
      var totalWidth = 0;

      // はみ出ていたら強制的に改行する
      each$1.call(line, function(ch) {
      // line.each(function(ch) {
        var w = cache[ch];

        if ((totalWidth+w) > rowWidth) {
          localLines.push(str);
          str = '';
          totalWidth = 0;
        }

        str += ch;
        totalWidth += w;
      });

      // 残りを push する
      localLines.push(str);

    });
    

    return localLines;
  }
  
  getLines () {
    if (this._lineUpdate === false) {
      return this._lines;
    }
    this._lineUpdate = false;

    var lines = (this.text + '').split('\n');
    if (this.width < 1) {
      this._lines = lines;
    }
    else {
      this._lines = this.spliceLines(lines);
    }

    return this._lines;
  }

  prerender (canvas) {
    var context = canvas.context;
    context.font = this.font;
    context.textAlign = this.align;
    context.textBaseline = this.baseline;

    var text = this.text + '';
    var lines = this.getLines();
    var length = lines.length;
    var width = this.width;
    var height = this.height;

    var fontSize = this.fontSize;
    var lineSize = fontSize * this.lineHeight;
    var offsetX = this.getOffsetX() * width;
    var offsetY = this.getOffsetY();
    if (offsetY === 0) {
      offsetY = -Math.floor(length / 2) * lineSize;
      offsetY += ((length + 1) % 2) * (lineSize / 2);
    }
    else if (offsetY < 0) {
      offsetY *= height;
    }
    else {
      offsetY = offsetY * height - length * lineSize + lineSize;
    }

    offsetY -= this.scrollY;
    offsetX -= this.scrollX;
    var start = (offsetY + height / 2) / -lineSize | 0;
    if (start < 0) { start = 0; }

    var end = (height / 2 - offsetY + lineSize * 2) / lineSize | 0;
    lines = lines.filter(function(line, i) {
      return start <= i && end > i;
    });

    this.lines = lines;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.lineSize = lineSize;
    this.start = start;
  }

  renderFill (canvas) {
    var context = canvas.context;
    var offsetX = this.offsetX;
    var offsetY = this.offsetY;
    var lineSize = this.lineSize;
    var start = this.start;
    this.lines.forEach(function(line, i) {
      context.fillText(line, offsetX, (start + i) * lineSize + offsetY);
    }, this);
  }

  renderStroke (canvas) {
    var context = canvas.context;
    var offsetX = this.offsetX;
    var offsetY = this.offsetY;
    var lineSize = this.lineSize;
    var start = this.start;
    this.lines.forEach(function(line, i) {
      context.strokeText(line, offsetX, (start + i) * lineSize + offsetY);
    }, this);
  }

  get text() {
    return this._text;
  }
  set text(v) {
    this._text = v;
  }

  get scrollX() {
    return this.scroll.x;
  }
  set scrollX(v) {
    this.scroll.x = v;
  }

  get scrollY() {
    return this.scroll.y;
  }
  set scrollY(v) {
    this.scroll.y = v;
  }
  
  // _static: {
  //   defaults: {
  //     verticalAlign: 'top',
  //     align: 'left',
  //     baseline: 'top',
  //     width: 320,
  //     height: 320,
  //     scrollX: 0,
  //     scrollY: 0,
  //   },
  //   alignToOffsetMap: {
  //     start: -0.5,
  //     left: -0.5,
  //     center: 0,
  //     end: 0.5,
  //     right: 0.5,
  //   },

  //   verticalAlignToOffsetMap: {
  //     top: -0.5,
  //     center: 0,
  //     middle: 0,
  //     bottom: 0.5,
  //   },
  // },

  // _defined: function() {
  //   var func = function(newVal, oldVal) {
  //     if((this._lineUpdate === false) && (newVal !== oldVal)){
  //       this._lineUpdate = true;
  //     }
  //   };

  //   [
  //     'text',
  //     'width',
  //     'fontSize',
  //     'fontWeight',
  //     'fontFamily'
  //   ].forEach(function(key) {
  //     this.$watch(key, func);
  //   }, this.prototype);

  //   phina.display.Shape.watchRenderProperties.call(this ,[
  //     'verticalAlign',
  //     'text',
  //     'scroll',
  //     'scrollX',
  //     'scrollY'
  //   ]);
  // },


  enableScroll() {
    //   this.setInteractive(true);
    //   var physical = phina.accessory.Physical();
    //   physical.attachTo(this);
    //   physical.friction = 0.8;
    //   var lastForce = 0;
    //   var lastMove = 0;
    //   this.on('pointstart', function(e){
    //     lastForce = physical.velocity.y;
    //     lastMove = 0;
    //     physical.force(0, 0);
    //   });
    //   this.on('pointmove', function(e){
    //     var p = e.pointer.deltaPosition;
    //     lastMove = p.y;
    //     this.scrollY += lastMove;
    //   });

    //   this.on('pointend', function(e){
    //     physical.force(0, lastForce + lastMove);
    //   });

    return this;
  }

}

// static props
LabelArea.defaults = {
  verticalAlign: 'top',
  align: 'left',
  baseline: 'top',
  width: 320,
  height: 320,
  scrollX: 0,
  scrollY: 0,
};
LabelArea.alignToOffsetMap = {
  start: -0.5,
  left: -0.5,
  center: 0,
  end: 0.5,
  right: 0.5,
};
LabelArea.verticalAlignToOffsetMap = {
  top: -0.5,
  center: 0,
  middle: 0,
  bottom: 0.5,
}

// defined
;
Shape.watchRenderProperties.call(LabelArea ,[
  'verticalAlign',
  'text',
  'scroll',
  'scrollX',
  'scrollY'
]);

/**
 * @class phina.effect.Wave
 * Button
 * @extends phina.display.CircleShape
 */
class Wave extends CircleShape {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call(options || {}, {
    // options = (options || {}).$safe({
      fill: 'white',
      stroke: false,
    });

    super(options);

    var tweener = new Tweener().attachTo(this);
    tweener
      .to({scaleX:2, scaleY:2, alpha:0}, 500)
      .call(function() {
        this.remove();
      }, this);
  }
}

/**
 * @class phina.social.Twitter
 * # Twitter の共有リンクを生成するクラス
 * Twitter の共有リンクの URL を生成してくれるクラスです。
 */
class Twitter {

  /**
   * @constructor
   * 
   * コンストラクタは存在しますがインスタンスメンバはありません。
   */
  constructor() {}

  /**
   * @method phina.social.Twitter.createURL
   * Twitterの共有リンクを生成します。引数にオブジェクトを渡すことで様々なパラメーターを設定出来ます。引数のオブジェクトは {@link #phina.social.Twitter.defaults} で安全拡張されます。
   * 
   * ### Example
   *     phina.social.Twitter.createURL(); // => http://twitter.com/intent/tweet?text=Hello%2C%20world!&hashtags=javascript%2Cphina&url={現在のURL}
   * 
   *     phina.social.Twitter.createURL({
   *       text: 'This is text',
   *       hashtags: 'hashtag1,hashtag2',
   *       url: 'http://phinajs.com'
   *     }); // => http://twitter.com/intent/tweet?text=This%20is%20text&hashtags=hashtag1%2Chashtag2&url=http%3A%2F%2Fphinajs.com
   * 
   *     phina.social.Twitter.createURL({
   *       text: 'This is text',
   *       hashtags: 'hashtag1,hashtag2',
   *       url: 'http://phinajs.com',
   *       other: 'This is other'//設定項目は適当に増やせる
   *     }); // => http://twitter.com/intent/tweet?text=This%20is%20text&hashtags=hashtag1%2Chashtag2&url=http%3A%2F%2Fphinajs.com&other=This%20is%20other
   * 
   *     phina.social.Twitter.createURL({
   *       url: 'http://phinajs.com'
   *     }); // => http://twitter.com/intent/tweet?url=http%3A%2F%2Fphinajs.com&text=Hello%2C%20world!&hashtags=javascript%2Cphina
   * 
   * @param {Object}
   * @return {String} Twitter の共有リンク
   * @static
   */
  static createURL (options) {
    options = $safe.call(options || {}, Twitter.defaults);
    // options = (options || {}).$safe(this.defaults);

    var queries = [];
    var euc = encodeURIComponent;
    forIn.call(options, function(key, value) {
    // options.forIn(function(key, value) {
      var str = key + '=' + euc(value);
      queries.push(str);
    });

    var url = format.call('{baseURL}/{type}?{query}', {
    // var url = '{baseURL}/{type}?{query}'.format({
      baseURL: this.baseURL,
      // type: options.type,
      type: 'tweet',
      query: queries.join('&'),
    });

    return url;
  }

}


/**
 * @property {String} [phina.social.Twitter.baseURL = 'https://twitter.com/intent']
 * Twitter の共有リンクのベースとなる URL です。
 * 
 * @static
 */
Twitter.baseURL = 'https://twitter.com/intent';

/**
 * @property {Object} phina.social.Twitter.defaults
 * デフォルト値を格納しているオブジェクトです。{@link #phina.social.Twitter.defaults.text}, {@link #phina.social.Twitter.defaults.hashtags}, {@link #phina.social.Twitter.defaults.url} を内包しています。
 * 
 * @static
 */
Twitter.defaults = {
  // type: 'tweet',

  /**
   * @property {String} [phina.social.Twitter.defaults.text = 'Hello, World']
   * デフォルトでツイートに含まれる文字列です。
   * 
   * @static
   */
  text: 'Hello, world!',

  // screen_name: 'phi_jp',

  /**
   * @property {String} [phina.social.Twitter.defaults.hashtags = 'javascript, phina_js']
   * デフォルトでツイートに含まれるハッシュタグです。
   * 
   * @static
   */
  hashtags: 'javascript,phina_js',

  // url: 'http://github.com/phi-jp/phina.js',

  /**
   * @property {String} [phina.social.Twitter.defaults.url = phina.global.location && phina.global.location.href]
   * デフォルトでツイートに含まれる URL です。
   * 
   * @static
   */
  url: phina$1.global.location && phina$1.global.location.href

  // via: 'phi_jp',
};

/**
 * @class phina.game.ManagerScene
 * @extends phina.app.Scene
 */
class ManagerScene extends Scene {

  /**
   * @constructor
   */
  constructor(params) {
    super();

    this.setScenes(params.scenes);

    this.on("enter", function() {
      this.gotoScene(params.startLabel || 0);
    }.bind(this));

    this.on("resume", this.onnext.bind(this));

    this.commonArguments = {};
  }

  /**
   * scenes をセット
   */
  setScenes(scenes) {
    this.scenes = scenes;
    this.sceneIndex = 0;

    return this;
  }

  /**
   * Sceneクラスをインスタンス化して返す
   * 
   * @param  {[type]} data  [description]
   * @return {[type]}       [description]
   */
  _instantiateScene(data, args) {
    // Scene初期化引数
    var initArguments = $extend.call({}, data.arguments, args);
    // var initArguments = {}.$extend(data.arguments, args);

    var scene, klass;
    if (typeof data.className === 'string') {
      // phina.define、あるいはglobal(window)に直接定義されたクラスの文字列
      klass = phina$1.using(data.className);
      if (typeof klass !== 'function') {
        klass = phina$1.using('phina.game.' + data.className);
      }
      // scene = klass.call(null, initArguments);
    } else if (typeof data.className === 'function') {
      // 関数の場合、純粋なclassと見なす
      // scene = new data.className(initArguments);
      klass = data.className;
    }
    scene = new klass(initArguments);

    if (!scene.nextLabel) {
      scene.nextLabel = data.nextLabel;
    }
    if (!scene.nextArguments) {
      scene.nextArguments = data.nextArguments;
    }

    return scene
  }

  /**
   * Sceneクラスをインスタンス化してappにreplaceSceneさせる
   * 
   * @param  {string|number} label シーンの対応ラベル
   * @param  {any} [args] Sceneにわたす引数がある場合に指定
   * @return {this}
   */
  replaceScene(label, args) {
    var index = (typeof label == 'string') ? this.labelToIndex(label) : label||0;
    if (!this.scenes[index]) {
      console.error(format.call('phina.js error: `{0}` に対応するシーンがありません.', label));
    }
    var scene = this._instantiateScene(this.scenes[index], args);
    this.app.replaceScene(scene);
    this.sceneIndex = index;

    return this;
  }

  /**
   * index(or label) のシーンへ飛ぶ
   * replaceSceneとの違いはapp.replaceSceneではなく、app.pushSceneを実行する点
   */
  gotoScene(label, args) {
    var index = (typeof label == 'string') ? this.labelToIndex(label) : label||0;
    if (!this.scenes[index]) {
      console.error(format.call('phina.js error: `{0}` に対応するシーンがありません.', label));
    }
    var scene = this._instantiateScene(this.scenes[index], args);
    this.app.pushScene(scene);
    this.sceneIndex = index;

    return this;
  }

  /**
   * 次のシーンへ飛ぶ
   */
  gotoNext(args) {
    var data = this.scenes[this.sceneIndex];
    var nextIndex = null;

    // 次のラベルが設定されていた場合
    if (data.nextLabel) {
        nextIndex = this.labelToIndex(data.nextLabel);
    }
    // 次のシーンに遷移
    else if (this.sceneIndex+1 < this.scenes.length) {
        nextIndex = this.sceneIndex+1;
    }

    if (nextIndex !== null) {
        this.gotoScene(nextIndex, args);
    }
    else {
        this.flare("finish");
    }

    return this;
  }

  /**
   * シーンインデックスを取得
   */
  getCurrentIndex() {
    return this.sceneIndex;
  }

  /**
   * シーンラベルを取得
   */
  getCurrentLabel() {
    return this.scenes[this.sceneIndex].label;
  }

  /**
   * ラベルからインデックスに変換
   */
  labelToIndex(label) {
    var data = this.scenes.filter(function(data) {
      return data.label == label;
    })[0];

    return this.scenes.indexOf(data);
  }

  /**
   * インデックスからラベルに変換
   */
  indexToLabel(index) {
    return this.scenes[index].label;
  }

  onnext(e) {
    var nextLabel = e.prevScene.nextLabel;
    var nextArguments = e.prevScene.nextArguments;
    if (nextLabel) {
      this.gotoScene(nextLabel, nextArguments);
    }
    else {
      this.gotoNext(nextArguments);
    }
  }

}

/**
 * @class phina.game.LoadingScene
 * @extends phina.display.DisplayScene
 */
class LoadingScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(options) {
    options = $safe.call({}, options, LoadingScene.defaults);
    // options = ({}).$safe(options, phina.game.LoadingScene.defaults);
    super(options);

    this.gauge = new Gauge({
      value: 0,
      width: this.width,
      height: 12,
      fill: '#aaa',
      stroke: false,
      gaugeColor: 'hsla(200, 100%, 80%, 0.8)',
      padding: 0,
    }).addChildTo(this)
      .setPosition(
        this.gridX.center(),
        0,
      )
      .setOrigin(
        0.5, 
        0
      );
    // this.fromJSON({
    //   children: {
    //     gauge: {
    //       className: 'phina.ui.Gauge',
    //       arguments: {
    //         value: 0,
    //         width: this.width,
    //         height: 12,
    //         fill: '#aaa',
    //         stroke: false,
    //         gaugeColor: 'hsla(200, 100%, 80%, 0.8)',
    //         padding: 0,
    //       },
    //       x: this.gridX.center(),
    //       y: 0,
    //       originY: 0,
    //     }
    //   }
    // });

    var loader = new AssetLoader();

    if (options.lie) {
      this.gauge.animationTime = 10*1000;
      this.gauge.value = 90;

      loader.onload = function() {
        this.gauge.animationTime = 0;
        this.gauge.value = 100;
      }.bind(this);
    }
    else {
      this.gauge.animationTime = 100;
      loader.onprogress = function(e) {
        this.gauge.value = e.progress * 100;
      }.bind(this);
    }

    this.gauge.onfull = function() {
      if (options.exitType === 'auto') {
        this.app.popScene();
      }
      this.flare('loaded');
    }.bind(this);

    loader.load(options.assets);
  }

}

LoadingScene.defaults = {
  exitType: 'auto',
  lie: false,
};

/**
 * @class phina.game.SplashScene
 * @extends phina.display.DisplayScene
 */
class SplashScene extends DisplayScene {

  constructor(options) {
    var defaults = SplashScene.defaults;
    super(options);

    var texture = new Texture();
    texture.load(defaults.imageURL).then(function() {
      this._init();
    }.bind(this));
    this.texture = texture;
  }

  _init() {
    this.sprite = new Sprite(this.texture).addChildTo(this);

    this.sprite.setPosition(this.gridX.center(), this.gridY.center());
    this.sprite.alpha = 0;

    this.sprite.tweener
      .clear()
      .to({alpha:1}, 500, 'easeOutCubic')
      .wait(1000)
      .to({alpha:0}, 500, 'easeOutCubic')
      .wait(250)
      .call(function() {
        this.exit();
      }, this)
      ;
  }

}

SplashScene.defaults = {
  imageURL: 'http://cdn.rawgit.com/phi-jp/phina.js/develop/logo.png',
};

/**
 * @class phina.game.TitleScene
 * @extends phina.display.DisplayScene
 */
class TitleScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(params) {
    params = $safe.call({}, params, TitleScene.defaults);
    // params = ({}).$safe(params, phina.game.TitleScene.defaults);
    super(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        titleLabel: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: params.title,
            fill: params.fontColor,
            stroke: false,
            fontSize: 64,
          },
          x: this.gridX.center(),
          y: this.gridY.span(4),
        }
      }
    });

    if (params.exitType === 'touch') {
      this.fromJSON({
        children: {
          touchLabel: {
            className: Label,
            // className: 'phina.display.Label',
            arguments: {
              text: "TOUCH START",
              fill: params.fontColor,
              stroke: false,
              fontSize: 32,
            },
            x: this.gridX.center(),
            y: this.gridY.span(12),
          },
        },
      });

      this.on('pointend', function() {
        this.exit();
      });
    }
  }

}

// static props
TitleScene.defaults = {
  title: 'phina.js games',
  message: '',

  fontColor: 'white',
  backgroundColor: 'hsl(200, 80%, 64%)',
  backgroundImage: '',

  exitType: 'touch',
};

/**
 * @class phina.game.PauseScene
 * @extends phina.display.DisplayScene
 */
class PauseScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(params) {
    params = $safe.call({}, params, PauseScene.defaults);
    // params = ({}).$safe(params, phina.game.PauseScene.defaults);
    super(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        text: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: 'Pause',
            fill: params.fontColor,
            stroke: null,
            fontSize: 48,
          },
          x: this.gridX.center(),
          y: this.gridY.center(),
        },
      }
    });

    if (params.exitType === 'touch') {
      this.on('pointend', function() {
        this.exit();
      });
    }
  }

}

PauseScene.defaults =  {
  fontColor: 'white',
  backgroundColor: 'hsla(0, 0%, 0%, 0.85)',

  exitType: 'touch',
};

/**
 * @class phina.game.ResultScene
 * @extends phina.display.DisplayScene
 */
class ResultScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(params) {
    params = $safe.call({}, params, ResultScene.defaults);
    // params = ({}).$safe(params, phina.game.ResultScene.defaults);
    super(params);

    var message = format.call(params.message, params);
    // var message = params.message.format(params);

    this.backgroundColor = params.backgroundColor;

    this.fromJSON({
      children: {
        scoreText: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: 'score',
            fill: params.fontColor,
            stroke: null,
            fontSize: 48,
          },
          x: this.gridX.span(8),
          y: this.gridY.span(4),
        },
        scoreLabel: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: params.score+'',
            fill: params.fontColor,
            stroke: null,
            fontSize: 72,
          },
          x: this.gridX.span(8),
          y: this.gridY.span(6),
        },

        messageLabel: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            text: message,
            fill: params.fontColor,
            stroke: null,
            fontSize: 32,
          },
          x: this.gridX.center(),
          y: this.gridY.span(9),
        },

        shareButton: {
          className: Button,
          // className: 'phina.ui.Button',
          arguments: [{
            text: '★',
            width: 128,
            height: 128,
            fontColor: params.fontColor,
            fontSize: 50,
            cornerRadius: 64,
            fill: 'rgba(240, 240, 240, 0.5)',
            // stroke: '#aaa',
            // strokeWidth: 2,
          }],
          x: this.gridX.center(-3),
          y: this.gridY.span(12),
        },
        playButton: {
          className: Button,
          // className: 'phina.ui.Button',
          arguments: [{
            text: '▶',
            width: 128,
            height: 128,
            fontColor: params.fontColor,
            fontSize: 50,
            cornerRadius: 64,
            fill: 'rgba(240, 240, 240, 0.5)',
            // stroke: '#aaa',
            // strokeWidth: 2,
          }],
          x: this.gridX.center(3),
          y: this.gridY.span(12),

          interactive: true,
          onpush: function() {
            this.exit();
          }.bind(this),
        },
      }
    });

    if (params.exitType === 'touch') {
      this.on('pointend', function() {
        this.exit();
      });
    }

    this.shareButton.onclick = function() {
      var text = format.call('Score: {0}\n{1}', params.score, message);
      // var text = 'Score: {0}\n{1}'.format(params.score, message);
      var url = Twitter.createURL({
        text: text,
        hashtags: params.hashtags,
        url: params.url,
      });
      window.open(url, 'share window', 'width=480, height=320');
    };
  }

}

ResultScene.defaults = {
  score: 16,

  message: 'this is phina.js project.',
  hashtags: 'phina_js,game,javascript',
  url: phina$1.global.location && phina$1.global.location.href,

  fontColor: 'white',
  backgroundColor: 'hsl(200, 80%, 64%)',
  backgroundImage: '',
};

/**
 * デフォルトのain class
 */
class DefaultMainScene extends DisplayScene {
  constructor(options) {
    super(options);
    console.log('This is MainScene');
  }
}
/**
 * クラスがphina.defineによって定義されているかどうかを返します
 * 
 * @param {string} className クラス名。phina.game[className]で定義されているかも調べる
 * @return {string|boolean} 定義されてればそのままクラス名文字列を返す
 */
function isGameClassDefined(className) {
  if (
    typeof phina$1.using(className) === 'function'
    || typeof phina$1.using('phina.game.' + className) === 'function'
  ) {
    return className
  }
  return false;
}

/**
 * @class phina.game.GameApp
 * @extends phina.display.CanvasApp
 */
class GameApp extends CanvasApp {

  constructor(options) {
    options = $safe.call(options || {}, {
    // options = (options || {}).$safe({
      startLabel: 'title',
    });
    super(options);

    var startLabel = options.startLabel || 'title';

    var scenes = options.scenes || [
      {
        className: isGameClassDefined("SplashScene") || SplashScene,
        label: 'splash',
        nextLabel: 'title',
      },
      {
        className: isGameClassDefined("TitleScene") || TitleScene,
        label: 'title',
        nextLabel: 'main',
      },
      {
        className: isGameClassDefined("MainScene") || DefaultMainScene,
        label: 'main',
        nextLabel: 'result',
      },
      {
        className: isGameClassDefined("ResultScene") || ResultScene,
        label: 'result',
        nextLabel: 'title',
      },
    ];

    scenes = each.call(scenes, function(s) {
      s.arguments = s.arguments || options;
    });

    var scene = new ManagerScene({
      startLabel: startLabel,
      scenes: scenes,
    });

    if (options.assets) {
      // ローディング：esm版では独自のLoadingSceneはオプションで渡せるようにする

      var loadingOptions = $extend.call({}, options, {
      // var loadingOptions = ({}).$extend(options, {
        exitType: '',
      });
      // グローバル定義のLoadingSceneを探す（従来）
      // -> なければオプションをチェック 
      // -> これもなければデフォルトのLoadingSceneを使う
      var definedLoadingClass = phina$1.using("LoadingScene") || phina$1.using("phina.game.LoadingScene");
      var loading = (typeof definedLoadingClass === 'function') 
        ? definedLoadingClass(loadingOptions)
        : (options.loadingScene != null)
          ? new options.loadingScene(loadingOptions) 
          : new LoadingScene(loadingOptions)
      ;
      this.replaceScene(loading);

      loading.onloaded = function() {
        this.replaceScene(scene);
        if (options.debug) {
          this._enableDebugger();
        }
      }.bind(this);
    }
    else {
      this.replaceScene(scene);
      if (options.debug) {
        this._enableDebugger();
      }
    }

    // 自動でポーズする
    // esm版では独自のポーズシーンはオプションで渡す
    // 引数が渡せないのは元から
    if (options.autoPause) {
      this.on('blur', function() {
        var definedPauseScene = phina$1.using("phina.game.PauseScene");
        var pauseScene = (typeof definedPauseScene === 'function') 
          ? definedPauseScene() 
          : (options.pauseScene) 
            ? new options.pauseScene() 
            : new PauseScene();
        this.pushScene(pauseScene);
      });
    }
  }

  _enableDebugger() {
    if (this.gui) return ;

    this.enableDatGUI(function(gui) {
      var f = gui.addFolder('scenes');
      var funcs = {};
      this.rootScene.scenes.forEach(function(scene) {
      // this.rootScene.scenes.each(function(scene) {
        funcs[scene.label] = function() {
          this.rootScene.replaceScene(scene.label);
          console.log(this._scenes.length);
        }.bind(this);
        return scene;
      }, this);

      forIn.call(funcs, function(key, value) {
      // funcs.forIn(function(key, value) {
        f.add(funcs, key);
      });
      f.open();

      this.gui = gui;
    }.bind(this));
  }

}

/**
 * @class phina.game.CountScene
 * @extends phina.display.DisplayScene
 */
class CountScene extends DisplayScene {

  /**
   * @constructor
   */
  constructor(options) {
    super(options);

    options = $safe.call(options || {}, CountScene.defaults);
    // options = (options || {}).$safe(phina.game.CountScene.defaults);

    this.backgroundColor = options.backgroundColor;

    this.fromJSON({
      children: {
        label: {
          className: Label,
          // className: 'phina.display.Label',
          arguments: {
            fill: options.fontColor,
            fontSize: options.fontSize,
            stroke: false,
          },
          x: this.gridX.center(),
          y: this.gridY.center(),
        },
      }
    });

    if (options.count instanceof Array) {
      this.countList = clone.call(options.count).reverse();
      // this.countList = options.count.clone().reverse();
    }
    else {
      this.countList = range.call([], 1, options.count+1);
      // this.countList = Array.range(1, options.count+1);
    }
    this.counter = this.countList.length;
    this.exitType = options.exitType;

    this._updateCount();
  }

  _updateCount() {
    var endFlag = this.counter <= 0;
    var index = --this.counter;

    this.label.text = this.countList[index];

    this.label.scale.set(1, 1);
    this.label.tweener
      .clear()
      .to({
        scaleX: 1,
        scaleY: 1,
        alpha: 1,
      }, 250)
      .wait(500)
      .to({
        scaleX: 1.5,
        scaleY: 1.5,
        alpha: 0.0
      }, 250)
      .call(function() {
        if (this.counter <= 0) {
          this.flare('finish');
          if (this.exitType === 'auto') {
            this.app.popScene();
          }
        }
        else {
          this._updateCount();
        }
      }, this);
  }

}

CountScene.defaults = {
  count: 3,

  width: 640,
  height: 960,

  fontColor: 'white',
  fontSize: 164,
  backgroundColor: 'rgba(50, 50, 50, 1)',

  exitType: 'auto',
};




/***/ }),

/***/ "./src/assets/AssetCatalog.js":
/*!************************************!*
  !*** ./src/assets/AssetCatalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetCatalog": () => /* binding */ AssetCatalog
/* harmony export */ });
const AssetCatalog = {
  image: {
    "tomapiyo": "./assets/images/tomapiyo.png",
    "background": "./assets/images/background.png",
    "tube1": "./assets/images/tube1.png",
    "tube2": "./assets/images/tube2.png",
  }
};

/***/ }),

/***/ "./src/elements/CountDown.js":
/*!***********************************!*
  !*** ./src/elements/CountDown.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountDown": () => /* binding */ CountDown
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class CountDown extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { startCount: 3, interval: 1000, startScale: 1, endScale: 0.5 });
    super(options);

    this.count = options.startCount;

    const labelOptions = {
      text: `${this.count}`,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 2,
      fontSize: 128,
    }
    this.label = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Label(labelOptions)
      .setScale(options.startScale)
      .addChildTo(this);

    this.label.tweener.clear();
    _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.times.call(options.startCount, i => {
      this.label.tweener
        .to({ scaleX: options.endScale, scaleY: options.endScale, alpha: 0 }, options.interval )
        .call(() => {
          this.count--;
          if (this.count > 0) {
            this.label.text = `${this.count}`;
          } else {
            this.label.text = "START";
          }
        })
        .wait(100)
        .call(() => {
          this.label.alpha = 1.0;
          this.label.setScale(options.startScale);
        })
    });
    this.label.tweener
      .wait(1000)
      .call(() => this.flare('countdown_end'))
      .to({ alpha: 0 }, options.interval / 2 );
  }
}


/***/ }),

/***/ "./src/elements/GameObject.js":
/*!************************************!*
  !*** ./src/elements/GameObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameObject": () => /* binding */ GameObject
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");


class GameObject extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayElement {
  constructor(options) {
    super(options);
    this.time = 0;
    this.on('enterframe', () => this.time++);
  }
}


/***/ }),

/***/ "./src/elements/Player.js":
/*!********************************!*
  !*** ./src/elements/Player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");



class Player extends _GameObject__WEBPACK_IMPORTED_MODULE_1__.GameObject {
  constructor(options) {
    super(options);
    this.sprite = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("tomapiyo", 64, 64)
      .addChildTo(this)
      .setFrameIndex(1);

    this.animationSeq = [1, 2, 3];
    this.animationSeqIndex = 0;

    this.velocity = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);
    this.jumpPower = 10;

    this.isStart = false;
    this.isDead = false;

    this.on('start', () => {
      this.isStart = true;
      this.jump(15);
    });
  }

  update(app) {
    if (this.time % 5 == 0) {
      this.animationSeqIndex++;
      if (this.animationSeqIndex == this.animationSeq.length) this.animationSeqIndex = 0;
      const idx = this.animationSeq[this.animationSeqIndex];
      this.sprite.setFrameIndex(idx);
    }

    if (!this.isStart) return;

    this.position.add(this.velocity);
    this.velocity.y += 0.49;

    if (this.y > 480) {
      this.y = 480;
      this.velocity.y = 0;
      if (!this.isDead) {
        this.flare("dead");
        this.isDead = true;
      }
    }

    this.time++;
  }

  jump(power) {
    power = power || this.jumpPower;
    if (this.velocity.y < 0) return;
    this.velocity.y = -this.jumpPower;
    return this;
  }
}


/***/ }),

/***/ "./src/elements/Tube.js":
/*!******************************!*
  !*** ./src/elements/Tube.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tube": () => /* binding */ Tube
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class Tube extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { gap: 100 });
    super(options);
    this.upper = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("tube1")
      .setOrigin(0.5, 1.0)
      .setPosition(0, -options.gap / 2)
      .addChildTo(this);
    this.bottom = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("tube2")
      .setOrigin(0.5, 0.0)
      .setPosition(0, options.gap / 2)
      .addChildTo(this);
  }
}


/***/ }),

/***/ "./src/extensions/Utils.js":
/*!*********************************!*
  !*** ./src/extensions/Utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$extend": () => /* binding */ $extend,
/* harmony export */   "$safe": () => /* binding */ $safe,
/* harmony export */   "times": () => /* binding */ times
/* harmony export */ });
/**
 * @method  $extend
 * 他のライブラリと競合しちゃうので extend -> $extend としました
 */
function $extend() {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      this[property] = source[property];
    }
  }, this);
  return this;
}
  
/**
 * @method  $safe
 * 安全拡張
 * 上書きしない
 */
function $safe(source) {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      if (this[property] === undefined) this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method times
 * 0 から自分自身の数-1まで、カウンタをインクリメントしながら関数を繰り返し実行します。
 *
 * ### Example
 *     arr = [];
 *     (5).times(function(i){
 *       arr.push(i);
 *     }); // => [0, 1, 2, 3, 4]
 *
 * @param {Function} fn コールバック関数
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
function times(fn, self) {
  self = self || this;
  for (var i=0; i<this; ++i) {
    fn.call(self, i, this);
  }
  return this;
}
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _src_scenes_SceneFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/scenes/SceneFlow */ "./src/scenes/SceneFlow.js");



if (true) {
  console.log('##### Development mode #####');
}

phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene.defaults.width = 960;
phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene.defaults.height = 640;

phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.phina.main(()=> {
  const appOption = {
    width: 960,
    height: 640,
    fps: 60,
  };
  const app = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.CanvasApp(appOption);
  app.replaceScene(new _src_scenes_SceneFlow__WEBPACK_IMPORTED_MODULE_1__.SceneFlow());
  app.run();
});


/***/ }),

/***/ "./src/scenes/MainScene.js":
/*!*********************************!*
  !*** ./src/scenes/MainScene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainScene": () => /* binding */ MainScene
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _elements_CountDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/CountDown */ "./src/elements/CountDown.js");
/* harmony import */ var _elements_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Player */ "./src/elements/Player.js");
/* harmony import */ var _elements_Tube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Tube */ "./src/elements/Tube.js");
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");






class MainScene extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene {

  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_4__.$safe.call({}, options, { backgroundColor: 'black' });
    super(options);

    this.isStart = false;
    this.time = 0;

    //バックグラウンド
    this.bg = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("background").addChildTo(this).setOrigin(0, 0);

    this.background = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayElement().addChildTo(this);
    this.foreground = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayElement().addChildTo(this);

    //プレイヤー
    this.player = new _elements_Player__WEBPACK_IMPORTED_MODULE_2__.Player()
      .setPosition(this.width / 4, this.height / 2)
      .addChildTo(this.foreground);

    this.player.on('dead', () => {
      this.gameover();
    });

    //カウントダウン
    this.countDown = new _elements_CountDown__WEBPACK_IMPORTED_MODULE_1__.CountDown()
      .setPosition(this.width / 2, this.height / 2)
      .addChildTo(this);

    this.countDown.on('countdown_end', () => {
      this.isStart = true;
      this.player.flare('start');
    });
  }

  update(app) {
    if (!this.isStart) return;
    if (app.pointer.getPointing()) {
      // this.player.setPosition(app.pointer.x, app.pointer.y)
      this.player.jump();
    }

    if(this.time % 120) this.enterTube();

    this.time++;
  }

  enterTube() {
    const tube = new _elements_Tube__WEBPACK_IMPORTED_MODULE_3__.Tube();
    tube.setPosition(this.width / 2, this.height / 2).addChildTo(this.background);
  }

  gameover() {
    console.log("game over");
  }
}

//ManagerSceneで使用出来る様にする為
// window.MainScene = MainScene;


/***/ }),

/***/ "./src/scenes/SceneFlow.js":
/*!*********************************!*
  !*** ./src/scenes/SceneFlow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneFlow": () => /* binding */ SceneFlow
/* harmony export */ });
/* harmony import */ var phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js/build/phina.esm */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _assets_AssetCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/AssetCatalog */ "./src/assets/AssetCatalog.js");
/* harmony import */ var _MainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainScene */ "./src/scenes/MainScene.js");




class SceneFlow extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.ManagerScene {
  constructor() {
    super({
      startLabel: "loading",
      scenes: [{
        label: "loading",
        className: phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.LoadingScene,
        nextLabel: "title",
        arguments: {
          assets: _assets_AssetCatalog__WEBPACK_IMPORTED_MODULE_1__.AssetCatalog,
        },
      },{
        label: "title",
        className: phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.TitleScene,
        nextLabel: "main",
        arguments: {
          title: "PHINAPY BIRD!"
        },
      },{
        label: "main",
        className: _MainScene__WEBPACK_IMPORTED_MODULE_2__.MainScene,
        nextLabel: "title",
      }],
    });
  }
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL25vZGVfbW9kdWxlcy9waGluYS5qcy9idWlsZC9waGluYS5lc20uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvYXNzZXRzL0Fzc2V0Q2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9lbGVtZW50cy9Db3VudERvd24uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9lbGVtZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvVHViZS5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9leHRlbnNpb25zL1V0aWxzLmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL3NjZW5lcy9NYWluU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvc2NlbmVzL1NjZW5lRmxvdy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9zdGFydHVw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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNI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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELDJEQUEyRDtBQUMzRCwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQyxpQkFBaUIsdUJBQXVCOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkJBQTJCO0FBQzdDLGtCQUFrQix3QkFBd0I7O0FBRTFDLHFCQUFxQiwrQkFBK0I7QUFDcEQscUJBQXFCLDRCQUE0Qjs7QUFFakQsdUJBQXVCLGlDQUFpQztBQUN4RCx1QkFBdUIsOEJBQThCOztBQUVyRCx1QkFBdUIsaUNBQWlDO0FBQ3hELHVCQUF1Qiw4QkFBOEI7O0FBRXJELG9DQUFvQyw4Q0FBOEM7QUFDbEYsb0NBQW9DLDJDQUEyQzs7QUFFL0Usc0JBQXNCLGdDQUFnQztBQUN0RCxzQkFBc0IsNkJBQTZCOztBQUVuRCx1QkFBdUIsaUNBQWlDO0FBQ3hELHVCQUF1Qiw4QkFBOEI7O0FBRXJELHlCQUF5QixtQ0FBbUM7QUFDNUQseUJBQXlCLGdDQUFnQzs7QUFFekQseUJBQXlCLG1DQUFtQztBQUM1RCx5QkFBeUIsZ0NBQWdDOztBQUV6RCxtQkFBbUIsNkJBQTZCO0FBQ2hELG1CQUFtQiwwQkFBMEI7O0FBRTdDLG9CQUFvQiw4QkFBOEI7QUFDbEQsb0JBQW9CLDJCQUEyQjs7QUFFL0Msc0JBQXNCLGdDQUFnQztBQUN0RCxzQkFBc0IsNkJBQTZCOztBQUVuRCxxQkFBcUIsK0JBQStCO0FBQ3BELHFCQUFxQiw0QkFBNEI7O0FBRWpELGdCQUFnQiwwQkFBMEI7QUFDMUMsZ0JBQWdCLHVCQUF1Qjs7QUFFdkMscUJBQXFCLCtCQUErQjtBQUNwRCxxQkFBcUIsNEJBQTRCOztBQUVqRCx3QkFBd0Isa0NBQWtDO0FBQzFELHdCQUF3QiwrQkFBK0I7O0FBRXZELGlDQUFpQywyQ0FBMkM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxXQUFXLHFCQUFxQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DLFlBQVkscUJBQXFCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DLFlBQVkscUJBQXFCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDLGFBQWEsMEJBQTBCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDLGFBQWEsMEJBQTBCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDLGFBQWEsMEJBQTBCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDLGFBQWEsMEJBQTBCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7OztBQUdKOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEU7O0FBRU4sSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQywrQkFBK0I7QUFDekUsK0NBQStDLG1DQUFtQztBQUNsRiw2Q0FBNkMsaUNBQWlDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBLFlBQVksc0JBQXNCOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQyxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjs7QUFFQSxnQ0FBZ0MsOEJBQThCO0FBQzlELCtCQUErQiw2QkFBNkI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRCwrQ0FBK0MsRUFBRTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVgsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUIsOEJBQThCOztBQUUvQyxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFO0FBQ3hFLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEw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QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUMsb0JBQW9CLHFCQUFxQjs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUVBQXFFLHFDQUFxQztBQUMxRztBQUNBO0FBQ0EsMENBQTBDLCtGQUErRjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQSxhQUFhO0FBQ2IsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsNEJBQTRCLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTTtBQUNuRCxtQkFBbUIsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLDBCQUEwQiwwQ0FBMEMsR0FBRyw4Q0FBOEMsR0FBRyx5Q0FBeUM7QUFDaks7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QixjQUFjLElBQUk7QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0Isb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esc0NBQXNDLEVBQUUsR0FBRyxFQUFFO0FBQzdDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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c0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIHBoaW5hLmpzIHYwLjIuM1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBwaGlcclxuICovXHJcbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLk9iamVjdFxyXG4gKiBPYmplY3Tjga7mi6HlvLVcclxuICovXHJcblxyXG4vKipcclxuICog6Zai5pWw44KS6L+95YqgXHJcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IGtleSBuYW1lXHJcbiAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uICRtZXRob2QobmFtZSwgZm4pIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwge1xyXG4gICAgdmFsdWU6IGZuLFxyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICB3cml0YWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBhY2Nlc3NvclxyXG4gKiDjgqLjgq/jgrvjg4PjgrUo44K744OD44K/44O8L+OCsuODg+OCv+ODvCnjgpLlrprnvqnjgZnjgotcclxuICovXHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZChcImFjY2Vzc29yXCIsIGZ1bmN0aW9uKG5hbWUsIHBhcmFtKSB7XHJcbmZ1bmN0aW9uIGFjY2Vzc29yKG5hbWUsIHBhcmFtKSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcclxuICAgIHNldDogcGFyYW1bXCJzZXRcIl0sXHJcbiAgICBnZXQ6IHBhcmFtW1wiZ2V0XCJdLFxyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGZvckluXHJcbiAqIOOCquODluOCuOOCp+OCr+ODiOeUqOODq+ODvOODl+WHpueQhlxyXG4gKi9cclxuZnVuY3Rpb24gZm9ySW4oZm4sIHNlbGYpIHtcclxuICBzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG5cclxuICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXNba2V5XTtcclxuXHJcbiAgICBmbi5jYWxsKHNlbGYsIGtleSwgdmFsdWUsIGluZGV4KTtcclxuICB9LCB0aGlzKTtcclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kICAkZXh0ZW5kXHJcbiAqIOS7luOBruODqeOCpOODluODqeODquOBqOertuWQiOOBl+OBoeOCg+OBhuOBruOBpyBleHRlbmQgLT4gJGV4dGVuZCDjgajjgZfjgb7jgZfjgZ9cclxuICovXHJcbmZ1bmN0aW9uICRleHRlbmQoKSB7XHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZChcIiRleHRlbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XHJcbiAgICAgIHRoaXNbcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9LCB0aGlzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgICRzYWZlXHJcbiAqIOWuieWFqOaLoeW8tVxyXG4gKiDkuIrmm7jjgY3jgZfjgarjgYRcclxuICovXHJcbmZ1bmN0aW9uICRzYWZlKHNvdXJjZSkge1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoXCIkc2FmZVwiLCBmdW5jdGlvbihzb3VyY2UpIHtcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKHRoaXNbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHRoaXNbcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9LCB0aGlzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgJHdhdGNoXHJcbiAqIEBwYXJhbSAge3N0cmluZ30ga2V5ICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrICBbZGVzY3JpcHRpb25dXHJcbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICovXHJcbmZ1bmN0aW9uICR3YXRjaChrZXksIGNhbGxiYWNrKSB7XHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZCgnJHdhdGNoJywgZnVuY3Rpb24oa2V5LCBjYWxsYmFjaykge1xyXG4gIHZhciB0YXJnZXQgPSB0aGlzO1xyXG4gIHZhciBkZXNjcmlwdG9yID0gbnVsbDtcclxuXHJcbiAgd2hpbGUodGFyZ2V0KSB7XHJcbiAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XHJcbiAgICBpZiAoZGVzY3JpcHRvcikge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRhcmdldCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgLy8g44GZ44Gn44Gr44Ki44Kv44K744OD44K144O844Go44GX44Gm5a2Y5Zyo44GZ44KL5aC05ZCIXHJcbiAgaWYgKGRlc2NyaXB0b3IpIHtcclxuICAgIC8vIOODh+ODvOOCv+ODh+OCo+OCueOCr+ODquODl+OCv+OBruWgtOWQiFxyXG4gICAgaWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YXIgdGVtcEtleSA9ICdfXycgKyBrZXk7XHJcbiAgICAgIHZhciB0ZW1wVmFsdWUgPSB0aGlzW2tleV07XHJcblxyXG4gICAgICB0aGlzW3RlbXBLZXldID0gdGVtcFZhbHVlO1xyXG5cclxuICAgICAgYWNjZXNzb3IuY2FsbCh0aGlzLCBrZXksIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXNbdGVtcEtleV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHZhciBvbGQgPSB0aGlzW3RlbXBLZXldO1xyXG4gICAgICAgICAgdGhpc1t0ZW1wS2V5XSA9IHY7XHJcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHYsIG9sZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyDjgqLjgq/jgrvjgrXjg4fjgqPjgrnjgq/jg6rjg5fjgr/jga7loLTlkIhcclxuICAgIGVsc2Uge1xyXG4gICAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgdmFyIG9sZCA9IGRlc2NyaXB0b3IuZ2V0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2LCBvbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBhY2Nlc3NrZXkgPSAnX18nICsga2V5O1xyXG5cclxuICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW2FjY2Vzc2tleV07XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgIHZhciBvbGQgPSB0aGlzW2FjY2Vzc2tleV07XHJcbiAgICAgICAgdGhpc1thY2Nlc3NrZXldID0gdjtcclxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHYsIG9sZCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIGFycmF5LmpzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBmaXJzdFxyXG4gKiDmnIDliJ3jga7opoHntKBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFs2LCA1LCAyLCAzLCAxLCA0XTtcclxuICogICAgIGFyci5maXJzdDsgLy8gPT4gNlxyXG4gKi9cclxuY29uc3QgZmlyc3QgPSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS5hY2Nlc3NvcihcImZpcnN0XCIsIHtcclxuICBcImdldFwiOiBmdW5jdGlvbigpICAgeyByZXR1cm4gdGhpc1swXTsgfSxcclxuICBcInNldFwiOiBmdW5jdGlvbih2KSAgeyB0aGlzWzBdID0gdjsgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBsYXN0XHJcbiAqIOacgOW+jOOBruimgee0oFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWzYsIDUsIDIsIDMsIDEsIDRdO1xyXG4gKiAgICAgYXJyLmxhc3Q7IC8vID0+IDRcclxuICovXHJcbmNvbnN0IGxhc3QgPSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS5hY2Nlc3NvcihcImxhc3RcIiwge1xyXG4gIFwiZ2V0XCI6IGZ1bmN0aW9uKCkgICB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLTFdOyB9LFxyXG4gIFwic2V0XCI6IGZ1bmN0aW9uKHYpICB7IHRoaXNbdGhpcy5sZW5ndGgtMV0gPSB2OyB9XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgYXRcclxuICog5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu6KaB57Sg44KS6L+U44GX44G+44GZ77yI44Or44O844OX44O76LKg5pWw44Gu5oyH5a6a5Y+v77yJ44CCXHJcbiAqXHJcbiAqIOa3u+Wtl+OBjOiyoOaVsOOBruWgtOWQiOOBr+acq+WwvuOBi+OCieOBruOCquODleOCu+ODg+ODiOOBqOOBv+OBquOBl+OBvuOBmeOAguacq+WwvuOBruimgee0oOOBjCAtMSDnlarnm67jgavjgarjgorjgb7jgZnjgIIgIFxyXG4gKiDmt7vlrZfjga7ntbblr77lgKTjgYwgQXJyYXkubGVuZ3RoIOS7peS4iuOBruWgtOWQiOOBr+ODq+ODvOODl+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG4gKiAgICAgYXJyLmF0KDApOyAgLy8gPT4gJ2EnXHJcbiAqICAgICBhcnIuYXQoNik7ICAvLyA9PiAnYSdcclxuICogICAgIGFyci5hdCgxMyk7IC8vID0+ICdiJ1xyXG4gKiAgICAgYXJyLmF0KC0xKTsgLy8gPT4gJ2YnXHJcbiAqICAgICBhcnIuYXQoLTgpOyAvLyA9PiAnZSdcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOa3u+Wtl1xyXG4gKiBAcmV0dXJuIHtPYmplY3R9IOa3u+Wtl+OBp+aMh+WumuOBleOCjOOBn+imgee0oFxyXG4gKi9cclxuZnVuY3Rpb24gYXQoaSkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImF0XCIsIGZ1bmN0aW9uKGkpIHtcclxuICBpJT10aGlzLmxlbmd0aDtcclxuICBpKz10aGlzLmxlbmd0aDtcclxuICBpJT10aGlzLmxlbmd0aDtcclxuICByZXR1cm4gdGhpc1tpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZXJhc2VcclxuICogQGNoYWluYWJsZVxyXG4gKiDmjIflrprjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjgajkuIDoh7TjgZfjgZ/mnIDliJ3jga7opoHntKDjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFycjEgPSBbJ2EnLCAnYicsICdiJywgJ2MnXTtcclxuICogICAgIGFycjIgPSBhcnIxLmVyYXNlKCdiJyk7IC8vID0+IFsnYScsICdiJywgJ2MnXVxyXG4gKiAgICAgYXJyMSA9PT0gYXJyMjsgICAgICAgICAgLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZWxtIOWJiumZpOOBl+OBn+OBhOOCquODluOCuOOCp+OCr+ODiFxyXG4gKi9cclxuZnVuY3Rpb24gZXJhc2UoZWxtKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiZXJhc2VcIiwgZnVuY3Rpb24oZWxtKSB7XHJcbiAgdmFyIGluZGV4ICA9IHRoaXMuaW5kZXhPZihlbG0pO1xyXG4gIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgY2xlYXJcclxuICogQGNoYWluYWJsZVxyXG4gKiDoh6rouqvjgpLnqbrjga7phY3liJfjgavjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFsxLCAyLCBbMywgNF1dO1xyXG4gKiAgICAgYXJyLmNsZWFyKCk7IC8vID0+IFtdXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGVhcihkZWVwKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiY2xlYXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5sZW5ndGggPSAwO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBjb250YWluc1xyXG4gKiDmjIflrprjgZfjgZ/opoHntKDjgYzphY3liJfjgavlkKvjgb7jgozjgabjgYTjgovjgYvjgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZnjgIJcclxuICpcclxuICog5q+U6LyD44Gr44Gv5Y6z5a+G44Gq5ZCM5YCk77yI5LiJ6YeN44Kk44Kz44O844Or5ryU566X5a2QID09PSDjgafkvb/jgo/jgozjgovjga7jgajlkIzjgZjmlrnms5XvvInjgpLnlKjjgYTjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFs2LCA1LCAyLCAzLCAxLCA0XTtcclxuICogICAgIGFyci5jb250YWlucygzKTsgICAgIC8vID0+IHRydWVcclxuICogICAgIGFyci5jb250YWlucygzLCA0KTsgIC8vID0+IGZhbHNlXHJcbiAqICAgICBhcnIuY29udGFpbnMoMywgLTQpOyAvLyA9PiB0cnVlXHJcbiAqICAgICBhcnIuY29udGFpbnMoXCI2XCIpOyAgIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIOODgeOCp+ODg+OCr+OBmeOCi+OCquODluOCuOOCp+OCr+ODiFxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2Zyb21JbmRleD0wXSDmpJzntKLjgpLlp4vjgoHjgovkvY3nva7jgILosqDmlbDjgpLmjIflrprjgZfjgZ/loLTlkIjjga/mnKvlsL7jgYvjgonjga7jgqrjg5Xjgrvjg4Pjg4jjgajopovjgarjgZfjgb7jgZnjgIJcclxuICogQHJldHVybiB7Qm9vbGVhbn0g44OB44Kn44OD44Kv44Gu57WQ5p6cXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250YWlucyhpdGVtLCBmcm9tSW5kZXgpIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJjb250YWluc1wiLCBmdW5jdGlvbihpdGVtLCBmcm9tSW5kZXgpIHtcclxuICByZXR1cm4gdGhpcy5pbmRleE9mKGl0ZW0sIGZyb21JbmRleCkgIT0gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNsb25lXHJcbiAqIOiHqui6q+OBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyMSA9IFsxLCAyLCBbMywgNF1dO1xyXG4gKiAgICAgYXJyMiA9IGFycjEuY2xvbmUoKTsgICAgICAvLyA9PiBbMSwgMiwgWzMsIDRdXVxyXG4gKiAgICAgYXJyMVsyXSA9PT0gYXJyMlsyXTsgICAgICAvLyA9PiB0cnVlXHJcbiAqICAgICBhcnIxWzJdWzBdID0gOTtcclxuICogICAgIGFycjI7ICAgICAgICAgICAgICAgICAgICAgLy8gPT4gWzEsIDIsIFs5LCA0XV1cclxuICogICAgIGFycjEgPSBbMSwgMiwgWzMsIDRdXTtcclxuICogICAgIGFycjIgPSBhcnIxLmNsb25lKHRydWUpOyAgLy8gPT4gWzEsIDIsIFszLCA0XV1cclxuICogICAgIGFycjFbMl0gPT09IGFycjJbMl07ICAgICAgLy8gPT4gZmFsc2VcclxuICogICAgIGFycjFbMl1bMF0gPSA5O1xyXG4gKiAgICAgYXJyMjsgICAgICAgICAgICAgICAgICAgICAvLyA9PiBbMSwgMiwgWzMsIDRdXVxyXG4gKlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtkZWVwPWZhbHNlXSDphY3liJfjga7jg43jgrnjg4jjgpLjgZ/jganjgaPjgabopIfoo73jgZnjgovjgYvjganjgYbjgYtcclxuICogQHJldHVybiB7T2JqZWN0fSDmlrDjgZfjgYTphY3liJdcclxuICovXHJcbmZ1bmN0aW9uIGNsb25lKGRlZXApIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJjbG9uZVwiLCBmdW5jdGlvbihkZWVwKSB7XHJcbiAgaWYgKGRlZXAgPT09IHRydWUpIDtcclxuICBlbHNlIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCByYW5nZVxyXG4gKiBAY2hhaW5hYmxlXHJcbiAqIOiHqui6q+OCkuetieW3ruaVsOWIl++8iOS4gOWumumWk+malOOBruaVtOaVsOWApOOBruWIl++8ieOBqOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAtIOW8leaVsOOBjDHjgaTjga7loLTlkIjjgIEw772eZW5k77yIZW5k5ZCr44G+44Ga77yJ44Gu5pW05pWw44Gu6YWN5YiX44Gn44GZ44CCICBcclxuICogLSDlvJXmlbDjgYwy44Gk44Gu5aC05ZCI44CBc3RhcnTvvZ5lbmTvvIhlbmTlkKvjgb7jgZrvvInjga7mlbTmlbDjga7phY3liJfjgafjgZnjgIIgIFxyXG4gKiAtIOW8leaVsOOBjDPjgaTjga7loLTlkIjjgIFzdGFydO+9nmVuZO+8iGVuZOWQq+OBvuOBmu+8ieOBi+OBpCBzdGFydCArIG4gKiBzdGVwIChu44Gv5pW05pWwKeOCkua6gOOBn+OBmeaVtOaVsOOBrumFjeWIl+OBp+OBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gW107XHJcbiAqICAgICBhcnIucmFuZ2UoNCk7ICAgICAgICAvLyA9PiBbMCwgMSwgMiwgM11cclxuICogICAgIGFyci5yYW5nZSgyLCA1KTsgICAgIC8vID0+IFsyLCAzLCA0XVxyXG4gKiAgICAgYXJyLnJhbmdlKDIsIDE0LCA1KTsgLy8gPT4gWzIsIDcsIDEyXVxyXG4gKiAgICAgYXJyLnJhbmdlKDIsIC0zKTsgICAgLy8gPT4gWzIsIDEsIDAsIC0xLCAtMl1cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IOacgOWIneOBruWApO+8iOODh+ODleOCqeODq+ODiOOBryAw77yJXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmQg5pyA5b6M44Gu5YCk77yI55yB55Wl5LiN5Y+v77yJXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RlcD0x44G+44Gf44GvLTFdIOmWk+malFxyXG4gKi9cclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcInJhbmdlXCIsIGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHN0ZXApIHtcclxuICBjbGVhci5jYWxsKHRoaXMpO1xyXG4gIC8vIHRoaXMuY2xlYXIoKTtcclxuICBcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICBmb3IgKHZhciBpPTA7IGk8c3RhcnQ7ICsraSkgdGhpc1tpXSA9IGk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHN0YXJ0IDwgZW5kKSB7XHJcbiAgICBzdGVwID0gc3RlcCB8fCAxO1xyXG4gICAgaWYgKHN0ZXAgPiAwKSB7XHJcbiAgICAgIGZvciAodmFyIGk9c3RhcnQsIGluZGV4PTA7IGk8ZW5kOyBpKz1zdGVwLCArK2luZGV4KSB7XHJcbiAgICAgICAgdGhpc1tpbmRleF0gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgc3RlcCA9IHN0ZXAgfHwgLTE7XHJcbiAgICBpZiAoc3RlcCA8IDApIHtcclxuICAgICAgZm9yICh2YXIgaT1zdGFydCwgaW5kZXg9MDsgaT5lbmQ7IGkrPXN0ZXAsICsraW5kZXgpIHtcclxuICAgICAgICB0aGlzW2luZGV4XSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGVhY2hcclxuICogQGNoYWluYWJsZVxyXG4gKiDopoHntKDjgpLpoIbnlarjgavmuKHjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICog44Oh44K944OD44OJ44OB44Kn44O844Oz44Gr5a++5b+c44GX44Gm44GE44G+44GZ44GM44CB44GT44Gu44Oh44K944OD44OJ44Gr44KI44Gj44Gm6Ieq5YiG6Ieq6Lqr44Gv5aSJ5YyW44GX44G+44Gb44KT44CCXHJcbiAqXHJcbiAqICMjI1JlZmVyZW5jZVxyXG4gKiAtIFtBcnJheS5wcm90b3R5cGUuZm9yRWFjaCgpIC0gSmF2YVNjcmlwdCB8IE1ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvamEvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZm9yRWFjaClcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFsxLCAyLCAzXTtcclxuICogICAgIGFyci5lYWNoKCBmdW5jdGlvbihlbG0pIHtcclxuICogICAgICAgY29uc29sZS5sb2coZWxtICogZWxtKVxyXG4gKiAgICAgfSk7XHJcbiAqICAgICAvLyA9PiAxXHJcbiAqICAgICAvLyAgICA0XHJcbiAqICAgICAvLyAgICA5XHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCkXHJcbiAqL1xyXG5mdW5jdGlvbiBlYWNoKCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImVhY2hcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5mb3JFYWNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09XHJcbi8vIOS7peS4i+OBr2VzMjAxNeS7pemZjeOBq+WtmOWcqOOBmeOCi+OBn+OCgeOAgeS/neeVmVxyXG4vLyA9PT09PT09PT09XHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEBtZXRob2QgZmluZFxyXG4vLyAgKiDlkITopoHntKDjgpLlvJXmlbDjgavjgZfjgabplqLmlbDjgpLlrp/ooYzjgZfjgIHjgZ3jga7lgKTjgYznnJ/jgajjgarjgovvvIjvvJ3mnaHku7bjgavjg57jg4Pjg4HjgZnjgovvvInmnIDliJ3jga7opoHntKDjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICog44Gp44Gu6KaB57Sg44KC44Oe44OD44OB44GX44Gq44GR44KM44GwIHVuZGVmaW5lZCDjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICogIyMjIEV4YW1wbGVcclxuLy8gICogICAgIGFyciA9IFsnZm9vJywgJ2JhcicsICdob2dlJywgJ2Z1Z2EnXTtcclxuLy8gICogICAgIGFyci5maW5kKCBmdW5jdGlvbihlbG0pIHtcclxuLy8gICogICAgICAgcmV0dXJuIGVsbS5pbmRleE9mKCdhJykgPj0gMDtcclxuLy8gICogICAgIH0pO1xyXG4vLyAgKiAgICAgLy8gPT4gJ2JhcidcclxuLy8gICpcclxuLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5ZCE6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/lkbzjgbPlh7rjgZfmmYLjga4gdGhpc+OAglxyXG4vLyAgKiBAcmV0dXJuIHtPYmplY3R9IOadoeS7tuOBq+ODnuODg+ODgeOBl+OBn+acgOWIneOBruimgee0oOOAgeOBvuOBn+OBryB1bmRlZmluZWRcclxuLy8gICovXHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiZmluZFwiLCBmdW5jdGlvbihmbiwgc2VsZikge1xyXG4vLyAgIHZhciB0YXJnZXQgPSBudWxsO1xyXG5cclxuLy8gICB0aGlzLnNvbWUoZnVuY3Rpb24oZWxtLCBpKSB7XHJcbi8vICAgICBpZiAoZm4uY2FsbChzZWxmLCBlbG0sIGksIHRoaXMpKSB7XHJcbi8vICAgICAgIHRhcmdldCA9IGVsbTtcclxuLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB0YXJnZXQ7XHJcbi8vIH0pO1xyXG5cclxuLy8gLyoqXHJcbi8vICAqIEBtZXRob2QgZmluZEluZGV4XHJcbi8vICAqIOWQhOimgee0oOOCkuW8leaVsOOBq+OBl+OBpumWouaVsOOCkuWun+ihjOOBl+OAgeOBneOBruWApOOBjOecn+OBqOOBquOCi++8iO+8neadoeS7tuOBq+ODnuODg+ODgeOBmeOCi++8ieacgOWIneOBruOCpOODs+ODh+ODg+OCr+OCueOCkui/lOOBl+OBvuOBmeOAglxyXG4vLyAgKlxyXG4vLyAgKiDjganjga7opoHntKDjgoLjg57jg4Pjg4HjgZfjgarjgZHjgozjgbAgLTEg44KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqICMjIyBFeGFtcGxlXHJcbi8vICAqICAgICBhcnIgPSBbJ2ZvbycsICdiYXInLCAnaG9nZScsICdmdWdhJ107XHJcbi8vICAqICAgICBhcnIuZmluZEluZGV4KCBmdW5jdGlvbihlbG0pIHtcclxuLy8gICogICAgICAgcmV0dXJuIGVsbS5pbmRleE9mKCdhJykgPj0gMDtcclxuLy8gICogICAgIH0pO1xyXG4vLyAgKiAgICAgLy8gPT4gMVxyXG4vLyAgKlxyXG4vLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuLy8gICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+WRvOOBs+WHuuOBl+aZguOBriB0aGlz44CCXHJcbi8vICAqIEByZXR1cm4ge09iamVjdH0g5p2h5Lu244Gr44Oe44OD44OB44GX44Gf5pyA5Yid44Gu44Kk44Oz44OH44OD44Kv44K544CB44G+44Gf44GvIC0xXHJcbi8vICAqL1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImZpbmRJbmRleFwiLCBmdW5jdGlvbihmbiwgc2VsZikge1xyXG4vLyAgIHZhciB0YXJnZXQgPSAtMTtcclxuXHJcbi8vICAgdGhpcy5zb21lKGZ1bmN0aW9uKGVsbSwgaSkge1xyXG4vLyAgICAgaWYgKGZuLmNhbGwoc2VsZiwgZWxtLCBpLCB0aGlzKSkge1xyXG4vLyAgICAgICB0YXJnZXQgPSBpO1xyXG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBvZlxyXG4gKiBAc3RhdGljXHJcbiAqIEVTNiDmupbmi6Djga4gb2Yg6Zai5pWw44Gn44GZ44CC5Y+v5aSJ6ZW35byV5pWw44KS44Go44Gj44GmIEFycmF5IOOCquODluOCuOOCp+OCr+ODiOOBq+OBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgQXJyYXkub2YoKTsgICAgICAgIC8vID0+IFtdXHJcbiAqICAgICBBcnJheS5vZigxLCAyLCAzKTsgLy8gPT4gWzEsIDIsIDNdXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50TiDnlJ/miJDjgZnjgovphY3liJfjga7opoHntKBcclxuICogQHJldHVybiB7QXJyYXl9IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gKi9cclxuLy8gQXJyYXkuJG1ldGhvZChcIm9mXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGZyb21cclxuICogQHN0YXRpY1xyXG4gKiBFUzYg5rqW5oug44GuIGZyb20g6Zai5pWw44Gn44GZ44CCYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4jjgYtpdGVyYWJsZSDjgqrjg5bjgrjjgqfjgq/jg4jjgYvjgonmlrDjgZfjgYTphY3liJfjgpLnlJ/miJDjgZfjgb7jgZnjgIJcclxuICpcclxuICogYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4jjgajjga/jgIFsZW5ndGgg44OX44Ot44OR44OG44Kj44KS5oyB44Gh44CB5pWw5a2X44Gu5re75a2X44Gn44Ki44Kv44K744K55Y+v6IO944Gq44Kq44OW44K444Kn44Kv44OI44Gu44GT44Go44Gn44GZ44CCXHJcbiAqIOmAmuW4uOOBrumFjeWIl+OBruOBu+OBi+OAgVN0cmluZ+OAgWFyZ3VtZW50c+OAgU5vZGVMaXN0IOOBquOBqeOCgiBhcnJheS1saWtlIOOCquODluOCuOOCp+OCr+ODiOOBp+OBmeOAglxyXG4gKlxyXG4gKiBpdGVyYWJsZSDjgqrjg5bjgrjjgqfjgq/jg4jjgajjga/jgIFTeW1ib2wuaXRlcmF0b3Ig44OX44Ot44OR44OG44Kj44KS5oyB44Gk44Kq44OW44K444Kn44Kv44OI44Gu44GT44Go44Gn44GZ44CCXHJcbiAqIOmAmuW4uOOBrumFjeWIl+OBruOBu+OBi+OAgVN0cmluZ+OAgWFyZ3VtZW50c+OAgU5vZGVMaXN0IOOBquOBqeOCgiBpdGVyYWJsZSDjgqrjg5bjgrjjgqfjgq/jg4jjgafjgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIEFycmF5LmZyb20oWzEsIDIsIDNdLCBmdW5jdGlvbihlbG0peyByZXR1cm4gZWxtICogZWxtfSApOyAvLyA9PiBbMSwgNCwgOV1cclxuICogICAgIEFycmF5LmZyb20oXCJmb29cIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID0+IFtcImZcIiwgXCJvXCIsIFwib1wiXVxyXG4gKiAgICAgQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpICAgICAgICAgICAgLy8gPT4gW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsLi4uXVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyYXlMaWtlIOmFjeWIl+OBq+WkieaPm+OBmeOCiyBhcnJheS1saWtlIOOCquODluOCuOOCp+OCr+ODiFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIGFycmF5TGlrZSDjga7jgZnjgbnjgabjga7opoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjg57jg4Pjg5fplqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKRcclxuICogQHJldHVybiB7QXJyYXl9IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gKi9cclxuLy8gQXJyYXkuJG1ldGhvZChcImZyb21cIiwgZnVuY3Rpb24oYXJyYXlMaWtlLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4vLyAgIGlmICghT2JqZWN0KGFycmF5TGlrZSkubGVuZ3RoKSByZXR1cm4gW107XHJcblxyXG4vLyAgIHZhciByZXN1bHQgPSBbXTtcclxuLy8gICBpZiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciAmJiBhcnJheUxpa2VbU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4vLyAgICAgICB2YXIgaXRlcmF0b3IgPSBhcnJheUxpa2VbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4vLyAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgICAgdmFyIGl0ZXJhdG9yUmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xyXG4vLyAgICAgICAgICAgaWYgKGl0ZXJhdG9yUmVzdWx0LmRvbmUpIGJyZWFrO1xyXG5cclxuLy8gICAgICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrLmJpbmQoY29udGV4dCB8fCB0aGlzKShpdGVyYXRvclJlc3VsdC52YWx1ZSkgOiBpdGVyYXRvclJlc3VsdC52YWx1ZTtcclxuLy8gICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5TGlrZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4vLyAgICAgICByZXN1bHQucHVzaChhcnJheUxpa2VbaV0pO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gcmVzdWx0Lm1hcCh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogZnVuY3Rpb24oaXRlbSkge1xyXG4vLyAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgfSwgY29udGV4dCk7XHJcbi8vIH0pO1xyXG5cclxuLypcclxuICogcGhpbmEuanMgbmFtZXNwYWNlXHJcbiAqL1xyXG52YXIgcGhpbmEkMSA9IHBoaW5hJDEgfHwge307XHJcblxyXG4vLyDkuIDml6bmi6HlvLVcclxuLy8gJG1ldGhvZC5jYWxsKHBoaW5hLCBcImhvZ2VcIiwgLi4uKeOBqOOBl+OBpuOCguiJr+OBhOOBjOOAgeabuOOBjeaPm+OBiOOBjOWkp+WkieOBquOBn+OCgVxyXG5waGluYSQxLiRtZXRob2QgPSBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbi8vIHBoaW5hLnByb3RvdHlwZS4kbWV0aG9kID0gZnVuY3Rpb24oLi4uYXJncykgeyAvLyBuZ1xyXG4gIHJldHVybiAkbWV0aG9kLmNhbGwodGhpcywgLi4uYXJncylcclxufTtcclxuXHJcbi8vIDsoZnVuY3Rpb24oKSB7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hXHJcbiAqICMgcGhpbmEuanMgbmFtZXNwYWNlXHJcbiAqIHBoaW5hLmpzIOOBruODjeODvOODoOOCueODmuODvOOCueOBp+OBmeOAgnBoaW5hLmpzIOOBruaPkOS+m+OBmeOCi+apn+iDveOBr++8iOOCs+OCouaLoeW8teS7peWklu+8ieWFqOOBpuOBk+OBruOCquODluOCuOOCp+OCr+ODiOOBq+WFpeOBo+OBpuOBhOOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyBwaGluYS5qcyDjga7jgq/jg6njgrnlrprnvqnjgavjgaTjgYTjgaZcclxuICpcclxuICogcGhpbmEuanMg44Gn44Gv54us6Ieq44Gu44Kv44Op44K544K344K544OG44Og44KS5a6f6KOF44GX44Gm44GE44G+44GZ44CCXHJcbiAqIHBoaW5hLmpzIOOBruOCr+ODqeOCueOBrueJueW+tOOBqOOBl+OBpuOBryBuZXcg5qeL5paH44KS5L2/55So44GX44Gq44GE44Gf44KB44CB44Oh44K944OD44OJ44OB44Kn44O844Oz44GM44GX44KE44GZ44GE44GT44Go44KE44CB5paH5a2X5YiX44Gn44Kv44Op44K544KS5a6a576p44GX44Gf44KK6Kaq44Kv44Op44K544KS5oyH5a6a44GX44Gf44KK44Gn44GN44KL54K544GM5oyZ44GS44KJ44KM44G+44GZ44CCXHJcbiAqIOaWh+Wtl+WIl+OCkuS9v+eUqOOBp+OBjeOCi+OBk+OBqOOBp+OAgeOCr+ODqeOCueOCkuWumue+qeOBmeOCi+autemajuOBp+imquOCr+ODqeOCueOBjOaMh+WumuOBleOCjOOBpuOBhOOBquOBj+OBpuOCguOAgeOCr+ODqeOCueOCkuWRvOOBs+WHuuOBmeautemajuOBp+imquOCr+ODqeOCueOBjOWumue+qeOBleOCjOOBpuOBhOOCjOOBsOOBhOOBhOOBqOOBhOOBhuODoeODquODg+ODiOOBjOOBguOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiDjgq/jg6njgrnjga7lrprnvqnjgavjga8ge0BsaW5rICNjcmVhdGVDbGFzc30sIHtAbGluayAjZGVmaW5lfSDjgpLkvb/nlKjjgZfjgb7jgZnjgILoqbPjgZfjgYTkvb/jgYTmlrnjga/jgZ3jgozjgZ7jgozjga7plqLmlbDjga7poIXjgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICpcclxuICogIyMg44Kv44Op44K544Gr44Gk44GE44Gm44Gu6KOc6LazXHJcbiAqXHJcbiAqIHBoaW5hLmpzIOOBruOCr+ODqeOCueOBp+OBryBzdXBlckNsYXNzIOOCkuaMh+WumuOBmeOCi+OBqOS7peS4i+OBruODoeOCveODg+ODieOBjOiHquWLleOBp+i/veWKoOOBleOCjOOBvuOBmeOAglxyXG4gKlxyXG4gKiAtIHN1cGVySW5pdCgpOiDopqrjgq/jg6njgrnjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgpLlkbzjgbPlh7rjgZnvvIjliJ3mnJ/ljJbvvIlcclxuICogLSBzdXBlck1ldGhvZCgpOiDopqrjgq/jg6njgrnjga7jg6Hjgr3jg4Pjg4njgpLlkbzjgbPlh7rjgZlcclxuICpcclxuICogc3VwZXJJbml0IOOBr+W8leaVsOOCkuWkieOBiOOCi+OBk+OBqOOBp+imquOCr+ODqeOCueOBruOCs+ODs+OCueODiOODqeOCr+OCv+OCkuWRvOOBtuOBqOOBjeOBruW8leaVsOOCkuWkieOBiOOCieOCjOOBvuOBmeOAglxyXG4gKiBzdXBlck1ldGhvZCDjga/kuIDjgaTnm67jga7lvJXmlbDjgavlkbzjgbPlh7rjgZfjgZ/jgYTopqrjgq/jg6njgrnjga7jg6Hjgr3jg4Pjg4nlkI3jgpLmloflrZfliJfjgafjgIHkuozjgaTnm67ku6XpmY3jgavlkbzjgbPlh7rjgZfjgZ/jgYTjg6Hjgr3jg4Pjg4njga7lvJXmlbDjgpLmuKHjgZfjgb7jgZnjgIJcclxuICpcclxuICog44G+44GfIHBoaW5hLmpzIOOBruOCr+ODqeOCueOBp+OBr+S7peS4i+OBrueJueWIpeOBquW9ueWJsuOCkuOCguOBo+OBn+ODl+ODreODkeODhuOCo+OAgeODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAtIF9hY2Nlc3Nvcjog44Ki44Kv44K744OD44K144O877yI44Ky44OD44K/44O844Go44K744OD44K/44O877yJ44KS5a6a576p44GZ44KL44Gf44KB44Gu44OX44Ot44OR44OG44KjXHJcbiAqIC0gX3N0YXRpYzogc3RhdGljIOODoeODs+ODkOOCkuWumue+qeOBmeOCi+OBn+OCgeOBruODl+ODreODkeODhuOCo1xyXG4gKiAtIF9kZWZpbmVkKCk6IOOCr+ODqeOCueOBjOWumue+qeOBleOCjOOBn+OBqOOBjeOBq+WRvOOBsOOCjOOCi+ODoeOCveODg+ODiVxyXG4gKlxyXG4gKiAjIyMgX2FjY2Vzc29yIOOBruS9v+eUqOS+i1xyXG4gKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gKiAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICAuLi5cclxuICogICAgICAgfSxcclxuICpcclxuICogICAgICAgX2FjY2Vzc29yOiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICB2YWx1ZToge1xyXG4gKiAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gKiAgICAgICAgICAgfSxcclxuICpcclxuICogICAgICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gKiAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZeOBjOOCu+ODg+ODiOOBleOCjOOBvuOBl+OBn++8gScpO1xyXG4gKiAgICAgICAgICAgfVxyXG4gKiAgICAgICAgIH1cclxuICogICAgICAgfVxyXG4gKiAgICAgfSk7XHJcbiAqXHJcbiAqICMjIyBfc3RhdGljIOOBruS9v+eUqOS+i1xyXG4gKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gKiAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICAuLi5cclxuICogICAgICAgfSxcclxuICpcclxuICogICAgICAgX3N0YXRpYzoge1xyXG4gKlxyXG4gKiAgICAgICAgIHN0YXRpY1Byb3BlcnR5MTogMSxcclxuICogICAgICAgICBzdGF0aWNQcm9wZXJ0eTI6IDIsXHJcbiAqXHJcbiAqICAgICAgICAgc3RhdGljTWV0aG9kMTogZnVuY3Rpb24oKXt9LFxyXG4gKiAgICAgICAgIHN0YXRpY01ldGhvZDI6IGZ1bmN0aW9uKCl7fVxyXG4gKlxyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTtcclxuICpcclxuICogICAgIGNvbnNvbGUubG9nKENsYXNzLnN0YXRpY1Byb3BlcnR5MSk7IC8vID0+IDFcclxuICpcclxuICogIyMjIF9kZWZpbmVkIOOBruS9v+eUqOS+i1xyXG4gKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gKiAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICogICAgICAgfSxcclxuICpcclxuICogICAgICAgX2RlZmluZWQ6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZpbmVkIScpO1xyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTsgLy8gPT4gZGVmaW5lZCFcclxuICovXHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtWRVJTSU9OID0gPCU9IHZlcnNpb24gJT5dXHJcbiAqIHBoaW5hLmpzIOOBruODkOODvOOCuOODp+ODs+OBp+OBmeOAglxyXG4gKlxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuVkVSU0lPTiA9IFwiMC4yLjNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzTm9kZVxyXG4gKiBOb2RlLmpzIOOBriBtb2R1bGUg44GL44Gp44GG44GL44KS44OB44Kn44OD44Kv44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc05vZGUnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBuYW1lc3BhY2VcclxuICog5byV5pWw44Gv6Zai5pWw44Gn44CB44Gd44Gu6Zai5pWw5YaF44Gn44GuIHRoaXMg44GvIHBoaW5hIOOBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDplqLmlbBcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ25hbWVzcGFjZScsIGZ1bmN0aW9uKGZuKSB7XHJcbiAgZm4uY2FsbCh0aGlzKTtcclxufSk7XHJcblxyXG52YXIgbnMgPSBwaGluYSQxLmlzTm9kZSgpID8gZ2xvYmFsIDogd2luZG93O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBnbG9iYWxcclxuICogTm9kZS5qcyDjgarjgokgZ2xvYmFsIOODluODqeOCpuOCtuOBquOCiSB3aW5kb3cg44KS6L+U44GX44G+44GZ44CCXHJcbiAqIOOCsuODg+OCv+ODvOOBruOBv+Wumue+qeOBleOCjOOBpuOBhOOBvuOBmeOAglxyXG4gKlxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEByZWFkb25seVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG4vLyBwaGluYS5hY2Nlc3NvcignZ2xvYmFsJywge1xyXG5hY2Nlc3Nvci5jYWxsKHBoaW5hJDEsICdnbG9iYWwnLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBucztcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG4vKipcclxuICogQG1ldGhvZCB0ZXN0VUFcclxuICog5byV5pWw44GuIFJlZ0V4cCDjgqrjg5bjgrjjgqfjgq/jg4jjgajjg6bjg7zjgrbjg7zjgqjjg7zjgrjjgqfjg7Pjg4jjgpLmr5TovIPjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHBhcmFtIHtSZWdFeHB9XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCd0ZXN0VUEnLCBmdW5jdGlvbihyZWdFeHApIHtcclxuICBpZiAoIXBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG4gIHZhciB1YSA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgcmV0dXJuIHJlZ0V4cC50ZXN0KHVhKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0FuZHJvaWRcclxuICogQW5kcm9pZCDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gQW5kcm9pZCDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzQW5kcm9pZCcsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvQW5kcm9pZC8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzSVBob25lXHJcbiAqIGlQaG9uZSDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gaVBob25lIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNJUGhvbmUnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL2lQaG9uZS8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzSVBhZFxyXG4gKiBpUGFkIOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpUGFkIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNJUGFkJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGFkLyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNJT1NcclxuICogaU9TIOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpT1Mg44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc0lPUycsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBob25lfGlQYWQvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc01vYmlsZVxyXG4gKiDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgILlhbfkvZPnmoTjgavjga8gQW5kcm9pZCwgaVBob25lLCBpUGFkIOOBruOBhOOBmuOCjOOBi+OBoOOBqCB0cnVlIOOBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzTW9iaWxlJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGhvbmV8aVBhZHxBbmRyb2lkLyk7XHJcbn0pO1xyXG5cclxuLy8gLy8gc3VwcG9ydCBub2RlLmpzXHJcbi8vIGlmIChwaGluYS5pc05vZGUoKSkge1xyXG4vLyAgIG1vZHVsZS5leHBvcnRzID0gcGhpbmE7XHJcbi8vIH1cclxuXHJcbi8vIG5zLnBoaW5hID0gcGhpbmE7XHJcblxyXG4vLyB9KSh0aGlzKTtcclxuXHJcblxyXG5waGluYSQxLm5hbWVzcGFjZShmdW5jdGlvbigpIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcmVhdGVDbGFzc1xyXG4gICAqIOOCr+ODqeOCueOCkuS9nOaIkOOBmeOCi+mWouaVsOOBp+OBmeOAglxyXG4gICAqIOimquOCr+ODqeOCueOBruaMh+WumuOBr+aWh+Wtl+WIl+OBp+OCguWPr+iDveOBp+OBmeOAglxyXG4gICAqIOS9leOCgue2meaJv+OBl+OBquOBhOWgtOWQiCBzdXBlckNsYXNzIOOBruaMh+WumuOBr+S4jeimgeOBp+OBmeOAguOBvuOBn+OAgeimquOCr+ODqeOCueOCkue2meaJv+OBl+OBpuOBhOOCi+WgtOWQiOOAgeOCs+ODs+OCueODiOODqeOCr+OCv+WGheOBpyB0aGlzLnN1cGVySW5pdCgpIOOCkuWun+ihjOOBl+OBpuimquOCr+ODqeOCueOCkuWIneacn+WMluOBmeOCi+OBk+OBqOOBjOW/hemgiOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdmFyIENsYXNzID0gcGhpbmEuY3JlYXRlQ2xhc3Moe1xyXG4gICAqIOOAgOOAgCAgc3VwZXJDbGFzczogJ25hbWVzcGFjZS5TdXBlcicsLy/opqrjgq/jg6njgrnntpnmib9cclxuICAgKlxyXG4gICAqIOOAgOOAgCAgLy/jg6Hjg7Pjg5DlpInmlbBcclxuICAgKiDjgIDjgIAgIG1lbWJlcjE6IDEwMCxcclxuICAgKiDjgIDjgIAgIG1lbWJlcjI6ICd0ZXN0JyxcclxuICAgKiDjgIDjgIAgIG1lbWJlcjM6IG51bGwsXHJcbiAgICpcclxuICAgKlxyXG4gICAqIOOAgOOAgCAgLy/jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgKiDjgIDjgIAgIC8vQ2xhc3MoKeOCkuWRvOOBs+WHuuOBl+OBn+OBqOOBjeWun+ihjOOBleOCjOOCi1xyXG4gICAqIOOAgOOAgCAgaW5pdDogZnVuY3Rpb24oYSwgYil7XHJcbiAgICog44CA44CAICAgIC8v44K544O844OR44O844Kv44Op44K5KOe2meaJv+OBl+OBn+OCr+ODqeOCuSnjga5pbml0XHJcbiAgICog44CA44CAICAgIHRoaXMuc3VwZXJJbml0KGEsIGIpO1xyXG4gICAqIOOAgOOAgCAgICB0aGlzLmEgPSBhO1xyXG4gICAqIOOAgOOAgCAgICB0aGlzLmIgPSBiO1xyXG4gICAqIOOAgOOAgCAgfSxcclxuICAgKiDjgIDjgIBcclxuICAgKiDjgIDjgIAgIC8v44Oh44K944OD44OJXHJcbiAgICog44CA44CAICBtZXRob2QxOiBmdW5jdGlvbigpe30sXHJcbiAgICog44CA44CAICBtZXRob2QyOiBmdW5jdGlvbigpe30sXHJcbiAgICog44CA44CAXHJcbiAgICog44CA44CAfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH1cclxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0g44Kv44Op44K5XHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ2NyZWF0ZUNsYXNzJywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcblxyXG4gICAgdmFyIF9jbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgX2NsYXNzLnByb3RvdHlwZS5fY3JlYXRvcigpO1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHBhcmFtcy5zdXBlckNsYXNzKSB7XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmFtcy5zdXBlckNsYXNzLnByb3RvdHlwZSk7XHJcbiAgICAgIHBhcmFtcy5pbml0Lm93bmVyID0gX2NsYXNzO1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLnN1cGVySW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX19jb3VudGVyID0gdGhpcy5fX2NvdW50ZXIgfHwgMDtcclxuXHJcbiAgICAgICAgdmFyIHN1cGVyQ2xhc3MgPSB0aGlzLl9oaWVyYXJjaGllc1t0aGlzLl9fY291bnRlcisrXTtcclxuICAgICAgICB2YXIgc3VwZXJJbml0ID0gc3VwZXJDbGFzcy5wcm90b3R5cGUuaW5pdDtcclxuICAgICAgICBzdXBlckluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXIgPSAwO1xyXG4gICAgICB9O1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLnN1cGVyTWV0aG9kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHZhciBuYW1lID0gYXJncy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuX19jb3VudGVycyA9IHRoaXMuX19jb3VudGVycyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9fY291bnRlcnNbbmFtZV0gPSB0aGlzLl9fY291bnRlcnNbbmFtZV0gfHwgMDtcclxuXHJcbiAgICAgICAgdmFyIHN1cGVyQ2xhc3MgPSB0aGlzLl9oaWVyYXJjaGllc1sgdGhpcy5fX2NvdW50ZXJzW25hbWVdKysgXTtcclxuICAgICAgICB2YXIgc3VwZXJNZXRob2QgPSBzdXBlckNsYXNzLnByb3RvdHlwZVtuYW1lXTtcclxuICAgICAgICB2YXIgcnN0ID0gc3VwZXJNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XHJcblxyXG4gICAgICAgIHRoaXMuX19jb3VudGVyc1tuYW1lXSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiByc3Q7XHJcbiAgICAgIH07XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBfY2xhc3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIC8vXHJcbiAgICAvLyBwYXJhbXMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAvLyAgICAgX2NsYXNzLiRtZXRob2Qoa2V5LCB2YWx1ZSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSB7XHJcbiAgICAvLyAgICAgX2NsYXNzLnByb3RvdHlwZVtrZXldID0gdmFsdWU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8g57aZ5om/XHJcbiAgICAkZXh0ZW5kLmNhbGwoX2NsYXNzLnByb3RvdHlwZSwgcGFyYW1zKTtcclxuICAgIC8vIF9jbGFzcy5wcm90b3R5cGUuJGV4dGVuZChwYXJhbXMpO1xyXG5cclxuICAgIC8vIOe2meaJv+eUqFxyXG4gICAgX2NsYXNzLnByb3RvdHlwZS5faGllcmFyY2hpZXMgPSBbXTtcclxuICAgIHZhciBfc3VwZXIgPSBfY2xhc3MucHJvdG90eXBlLnN1cGVyQ2xhc3M7XHJcbiAgICB3aGlsZShfc3VwZXIpIHtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5faGllcmFyY2hpZXMucHVzaChfc3VwZXIpO1xyXG4gICAgICBfc3VwZXIgPSBfc3VwZXIucHJvdG90eXBlLnN1cGVyQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWNjZXNzb3JcclxuICAgIGlmIChwYXJhbXMuX2FjY2Vzc29yKSB7XHJcbiAgICAgIGZvckluLmNhbGwocGFyYW1zLl9hY2Nlc3NvciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBwYXJhbXMuX2FjY2Vzc29yLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBhY2Nlc3Nvci5jYWxsKF9jbGFzcy5wcm90b3R5cGUsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIC8vIF9jbGFzcy5wcm90b3R5cGUuYWNjZXNzb3Ioa2V5LCB2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBfY2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShfY2xhc3MucHJvdG90eXBlLCBwYXJhbXMuX2FjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xhc3MucHJvdG90eXBlLl9jcmVhdG9yID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9O1xyXG4gICAgX2NsYXNzLnByb3RvdHlwZS5fY3JlYXRvci5wcm90b3R5cGUgPSBfY2xhc3MucHJvdG90eXBlO1xyXG5cclxuICAgIC8vIHN0YXRpYyBwcm9wZXJ0eS9tZXRob2RcclxuICAgIGlmIChwYXJhbXMuX3N0YXRpYykge1xyXG4gICAgICAkZXh0ZW5kLmNhbGwoX2NsYXNzLCBwYXJhbXMuX3N0YXRpYyk7XHJcbiAgICAgIC8vIF9jbGFzcy4kZXh0ZW5kKHBhcmFtcy5fc3RhdGljKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyYW1zLl9kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmFtcy5fZGVmaW5lZC5jYWxsKF9jbGFzcywgX2NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2NsYXNzO1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHVzaW5nXHJcbiAgICog5paH5a2X5YiX44Gn5a6a576p44GX44Gf44OR44K544KS5L2/44Gj44Gm44Kq44OW44K444Kn44Kv44OI44KS5Y+W44KK5Ye644GX44G+44GZ44CC44OR44K544GvICwgLiAvIFxcIDo6IOOBp+WMuuWIh+OCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqIHtAbGluayAjcGhpbmEucmVnaXN0ZXJ9IOOBp+eZu+mMsuOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBmeOBqOOBjeOBquOBqeOBq+S9v+OBhuOBqOS+v+WIqeOBqumWouaVsOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgaG9nZSA9IHtcclxuICAgKiAgICAgICBmb286IHtcclxuICAgKiAgICAgICAgIGJhcjoge1xyXG4gICAqICAgICAgICAgICBudW06IDEwMFxyXG4gICAqICAgICAgICAgfVxyXG4gICAqICAgICAgIH1cclxuICAgKiAgICAgfTtcclxuICAgKiAgICAgdmFyIGJhciA9IHBoaW5hLnVzaW5nKCdob2dlLmZvby5iYXInKTtcclxuICAgKiAgICAgY29uc29sZS5sb2coYmFyLm51bSk7IC8vID0+IDEwMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGgg44Kq44OW44K444Kn44Kv44OI44G444Gu44OR44K5XHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDlj5bjgorlh7rjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgndXNpbmcnLCBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgcmV0dXJuIHBoaW5hJDEuZ2xvYmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXRoZXMgPSBwYXRoLnNwbGl0KC9bLC5cXC8gXXw6Oi8pO1xyXG4gICAgdmFyIGN1cnJlbnQgPSBwaGluYSQxLmdsb2JhbDtcclxuXHJcbiAgICBwYXRoZXMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BdIHx8IChjdXJyZW50W3BdPXt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50O1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAgICog44OR44K55oyH5a6a44Gn44Kq44OW44K444Kn44Kv44OI44KS55m76Yyy44GZ44KL6Zai5pWw44Gn44GZ44CC44OR44K544GvICwgLiAvIFxcIDo6IOOBp+WMuuWIh+OCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEucmVnaXN0ZXIoJ2hvZ2UuZm9vLmJhcicsIHtcclxuICAgKiAgICAgICBudW06IDEwMCxcclxuICAgKiAgICAgfSk7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKGhvZ2UuZm9vLmJhci5udW0pOyAvLyA9PiAxMDBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIOeZu+mMsuOBmeOCi+OCquODluOCuOOCp+OCr+ODiOOBruODkeOCuVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfY2xhc3Mg55m76Yyy44GZ44KL44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnmbvpjLLjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgncmVnaXN0ZXInLCBmdW5jdGlvbihwYXRoLCBfY2xhc3MpIHtcclxuICAgIHZhciBwYXRoZXMgPSBwYXRoLnNwbGl0KC9bLC5cXC8gXXw6Oi8pO1xyXG4gICAgLy8gdmFyIGNsYXNzTmFtZSA9IHBhdGhlcy5sYXN0O1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IGxhc3QuZ2V0LmNhbGwocGF0aGVzKTtcclxuICAgIHZhciBwYXJlbnRQYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZignLicpKTsgLy8g44GT44GT44KS55u044GV44Gq44GE44Go44OU44Oq44Kq44OJ5Yy65YiH44KK5Lul5aSW44Gv54Sh5Yq577yfXHJcbiAgICB2YXIgcGFyZW50ID0gcGhpbmEkMS51c2luZyhwYXJlbnRQYXRoKTtcclxuXHJcbiAgICBwYXJlbnRbY2xhc3NOYW1lXSA9IF9jbGFzcztcclxuXHJcbiAgICByZXR1cm4gX2NsYXNzO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgX2NsYXNzRGVmaW5lZENhbGxiYWNrID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGVmaW5lXHJcbiAgICog44Kv44Op44K544KS5a6a576p44GZ44KL6Zai5pWw44Gn44GZ44CC5L2/44GE5pa544GvIHtAbGluayAjY3JlYXRlQ2xhc3N9IOOBqOOBu+OBqOOCk+OBqeWQjOOBmOOBp+OBmeOAglxyXG4gICAqIOOBn+OBoOOBl+OAgeW8leaVsOOBrzLjgaTjgYLjgorjgIHnrKzkuIDlvJXmlbDjga/lrprnvqnjgZnjgovjgq/jg6njgrnjga7jg5HjgrnjgpLmloflrZfliJfjgafmuKHjgZfjgb7jgZnjgILnrKzkuozlvJXmlbDjga7jgqrjg5bjgrjjgqfjgq/jg4jjga8ge0BsaW5rICNjcmVhdGVDbGFzc30g44Gu5byV5pWw44Go5ZCM44GY44KI44GG44Gr44GX44G+44GZ44CCXHJcbiAgICoge0BsaW5rICNjcmVhdGVDbGFzc30g44Go6YGV44GE44CB5aSJ5pWw44Gr5Luj5YWl44GZ44KL5b+F55So44GM44Gq44GP44CB44OR44K55oyH5a6a44Gn44Kv44Op44K544KS5a6a576p44Gn44GN44G+44GZ44CCXHJcbiAgICog5YaF6YOo55qE44Gr44GvIHtAbGluayAjcmVnaXN0ZXJ9LCB7QGxpbmsgI3VzaW5nfSDjgpLkvb/nlKjjgZfjgabjgYTjgovjgZ/jgoHjgIHjg5Hjgrnjga8gLCAuIC8gXFwgOjog44Gn5Yy65YiH44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5kZWZpbmUoJ25hbWVzcGFjZS5DbGFzcycsIHtcclxuICAgKiAgICAgICBzdXBlckNsYXNzOiAnbmFtZXNwYWNlLlN1cGVyJywvL+imquOCr+ODqeOCuee2meaJv1xyXG4gICAqXHJcbiAgICogICAgICAgLy/jg6Hjg7Pjg5DlpInmlbBcclxuICAgKiAgICAgICBtZW1iZXIxOiAxMDAsXHJcbiAgICogICAgICAgbWVtYmVyMjogJ3Rlc3QnLFxyXG4gICAqICAgICAgIG1lbWJlcjM6IG51bGwsXHJcbiAgICpcclxuICAgKlxyXG4gICAqICAgICAgIC8v44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICogICAgICAgLy9DbGFzcygp44KS5ZG844Gz5Ye644GX44Gf44Go44GN5a6f6KGM44GV44KM44KLXHJcbiAgICogICAgICAgaW5pdDogZnVuY3Rpb24oYSwgYil7XHJcbiAgICogICAgICAgICAvL+OCueODvOODkeODvOOCr+ODqeOCuSjntpnmib/jgZfjgZ/jgq/jg6njgrkp44GuaW5pdFxyXG4gICAqICAgICAgICAgdGhpcy5zdXBlckluaXQoYSwgYik7XHJcbiAgICogICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAqICAgICAgICAgdGhpcy5iID0gYjtcclxuICAgKiAgICAgICB9LFxyXG4gICAqXHJcbiAgICogICAgICAgLy/jg6Hjgr3jg4Pjg4lcclxuICAgKiAgICAgICBtZXRob2QxOiBmdW5jdGlvbigpe30sXHJcbiAgICogICAgICAgbWV0aG9kMjogZnVuY3Rpb24oKXt9LFxyXG4gICAqXHJcbiAgICogICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGgg44OR44K5XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyDjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0g5a6a576p44GX44Gf44Kv44Op44K5XHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ2RlZmluZScsIGZ1bmN0aW9uKHBhdGgsIHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcy5zdXBlckNsYXNzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnN1cGVyQ2xhc3MgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdmFyIF9zdXBlckNsYXNzID0gcGhpbmEkMS51c2luZyhwYXJhbXMuc3VwZXJDbGFzcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfc3VwZXJDbGFzcyAhPSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBpZiAoIV9jbGFzc0RlZmluZWRDYWxsYmFja1twYXJhbXMuc3VwZXJDbGFzc10pIHtcclxuICAgICAgICAgICAgX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhcmFtcy5zdXBlckNsYXNzXSA9IFtdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhcmFtcy5zdXBlckNsYXNzXS5wdXNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwaGluYSQxLmRlZmluZShwYXRoLCBwYXJhbXMpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwYXJhbXMuc3VwZXJDbGFzcyA9IF9zdXBlckNsYXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBwYXJhbXMuc3VwZXJDbGFzcyA9IHBhcmFtcy5zdXBlckNsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9jbGFzcyA9IHBoaW5hJDEuY3JlYXRlQ2xhc3MocGFyYW1zKTtcclxuICAgIGFjY2Vzc29yLmNhbGwoX2NsYXNzLnByb3RvdHlwZSwgJ2NsYXNzTmFtZScsIHtcclxuICAgIC8vIF9jbGFzcy5wcm90b3R5cGUuYWNjZXNzb3IoJ2NsYXNzTmFtZScsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHBoaW5hJDEucmVnaXN0ZXIocGF0aCwgX2NsYXNzKTtcclxuXHJcbiAgICBpZiAoX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhdGhdKSB7XHJcbiAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXRoXS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfSk7XHJcbiAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXRoXSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9jbGFzcztcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnbG9iYWxpemVcclxuICAgKiBwaGluYS5qcyDjgYznlKjmhI/jgZfjgabjgYTjgovlhajjgabjga7jgq/jg6njgrnjgpLjgrDjg63jg7zjg5Djg6vjgavlsZXplovjgZfjgb7jgZnjgILvvIjlhbfkvZPnmoTjgavjga8gcGhpbmEg44GM5oyB44Gk44Kq44OW44K444Kn44Kv44OI44GM5LiA6YCa44KK44Kw44Ot44O844OQ44Or44Gr5bGV6ZaL44GV44KM44G+44GZ44CC77yJXHJcbiAgICog44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44Gn44CB44GE44Gh44GE44GhIGdsb2JhbCDjgYvjgonjgZ/jganjgaPjgabjgYTjgYvjgarjgY/jgabjgoIgcGhpbmEuanMg44Gu55So5oSP44GX44Gm44GE44KL44Kv44Op44K544KS44Kv44Op44K55ZCN44Gg44GR44Gn5ZG844Gz5Ye644GZ44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nbG9iYWxpemUoKTtcclxuICAgKlxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdnbG9iYWxpemUnLCBmdW5jdGlvbigpIHtcclxuICAgIGZvckluLmNhbGwocGhpbmEkMSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiA7XHJcblxyXG4gICAgICBmb3JJbi5jYWxsKHZhbHVlLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIHZhbHVlLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAvLyBpZiAocGhpbmEuZ2xvYmFsW2tleV0pIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKG5zLCBrZXkpO1xyXG4gICAgICAgIC8vICAgcGhpbmEuZ2xvYmFsWydfJyArIGtleV0gPSB2YWx1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICBwaGluYS5nbG9iYWxba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBwaGluYSQxLmdsb2JhbFtrZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHBoaW5hJDEuX21haW5MaXN0ZW5lcnMgPSBbXTtcclxuICBwaGluYSQxLl9tYWluTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWFpblxyXG4gICAqIHBoaW5hLmpzIOOBp+ODl+ODreOCsOODqeODn+ODs+OCsOOBmeOCi+mam+OAgeODoeOCpOODs+OBruWHpueQhuOCkuiomOi/sOOBmeOCi+OBn+OCgeOBrumWouaVsOOBp+OBmeOAguWfuuacrOeahOOBqyBwaGluYS5qcyDjgafjga7jg5fjg63jgrDjg6njg5/jg7PjgrDjgafjga/jgZPjga7kuK3jgavjg5fjg63jgrDjg6njg6DjgpLmm7jjgYTjgabjgYTjgY/jgZPjgajjgavjgarjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLm1haW4oZnVuY3Rpb24oKSB7XHJcbiAgICogICAgICAgLy/jgZPjgZPjgavjg6HjgqTjg7Pjga7lh6bnkIbjgpLmm7jjgY9cclxuICAgKiAgICAgfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIOODoeOCpOODs+OBruWHpueQhlxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdtYWluJywgZnVuY3Rpb24oZnVuYykge1xyXG4gICAgaWYgKHBoaW5hJDEuX21haW5Mb2FkZWQpIHtcclxuICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBoaW5hJDEuX21haW5MaXN0ZW5lcnMucHVzaChmdW5jKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIGRvYyA9IHBoaW5hJDEuZ2xvYmFsLmRvY3VtZW50O1xyXG4gIGlmIChwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIGRvYyAmJiBkb2MucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcnVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGNsb25lLmNhbGwocGhpbmEkMS5fbWFpbkxpc3RlbmVycyk7XHJcbiAgICAgICAgLy8gdmFyIGxpc3RlbmVycyA9IHBoaW5hLl9tYWluTGlzdGVuZXJzLmNsb25lKCk7XHJcbiAgICAgICAgY2xlYXIuY2FsbChwaGluYSQxLl9tYWluTGlzdGVuZXJzKTtcclxuICAgICAgICAvLyBwaGluYS5fbWFpbkxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICAvLyBsaXN0ZW5lcnMuZWFjaChmdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgICBmdW5jKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG1haW4g5YaF44GnIG1haW4g44KS6L+95Yqg44GX44Gm44GE44KL5aC05ZCI44GM44GC44KL44Gu44Gn44Gd44Gu44OB44Kn44OD44KvXHJcbiAgICAgICAgaWYgKHBoaW5hJDEuX21haW5MaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcGhpbmEkMS5fbWFpbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAvLyDjgaHjgofjgaPjgajpgYXlu7bjgZXjgZvjgoso55S76Z2i44K144Kk44K65ZWP6aGMKVxyXG4gICAgICBzZXRUaW1lb3V0KHJ1bik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBwaGluYSQxLl9tYWluTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKiAjIOOCpOODmeODs+ODiOOCkuaJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxyXG4gKiDjgqTjg5njg7Pjg4jjgpLmibHjgYbjgZ/jgoHjga7jg6Hjgr3jg4Pjg4njgoTjg5fjg63jg5Hjg4bjgqPjgpLlrprnvqnjgZfjgabjgYTjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICogcGhpbmEuanMg44GM5o+Q5L6b44GZ44KL44Kv44Op44K544Gu5aSa44GP44Gv44GT44GuIEV2ZW50RGlzcGF0Y2hlciDjgq/jg6njgrnjga7lrZDlravjgajjgarjgaPjgabjgYTjgovjgZ/jgoHjgIFcclxuICog44G744Go44KT44Gp44Gu44Kq44OW44K444Kn44Kv44OI44Gn5a655piT44Gr44Kk44OZ44Oz44OI44KS5omx44GG44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAqXHJcbiAqICMg5bCR44GX6Kqs5piOXHJcbiAqIHRoaXMub254eHggPSBmdW5jdGlvbigpe307IOOBp+OCguOCpOODmeODs+ODiOODquOCueODiuOCkuioreWumuOBp+OBjeOCi+OBjOOAgeOBguOBvuOCiuaOqOWlqOOBl+OBquOBhOOAglxyXG4gKiDlkbzjgbPlh7rjgZXjgozjgovpoIbluo/jga/jgIHjgb7jgZogdGhpcy5vbnh4eHgg44GM5ZG844Gz5Ye644GV44KM44CB44GC44Go44GvIG9uKCkg44Gn55m76Yyy44GX44Gf6aCG55Wq44CCXHJcbiAqIEBtZW1iZXJvZiBwaGluYVxyXG4gKi9cclxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgb25cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76Yyy44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDvvJHjgaTjga7jgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjga/jgYTjgY/jgaTjgafjgoLnmbvpjLLjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOaomea6luOBruOCpOODmeODs+ODiOOCkuaknOefpeOBmeOCi+OBq+OBr+OAgeOCquODluOCuOOCp+OCr+ODiOOBriB7QGxpbmsgT2JqZWN0MkQjaW50ZXJhY3RpdmV9IOODl+ODreODkeODhuOCo+OBjCB0cnVlIOOBp+OBguOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxyXG4gICAqIHtAbGluayBPYmplY3QyRCNpbnRlcmFjdGl2ZX0g44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KL44Gr44GvIHtAbGluayBPYmplY3QyRCNzZXRJbnRlcmFjdGl2ZX0g44Oh44K944OD44OJ44KS5ZG844Gz5Ye644GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiDjgb7jgZ/jgIF7QGxpbmsgI2ZsYXJlfSDjgoQge0BsaW5rICNmaXJlfSDjgavjgojjgaPjgablrprnvqnjgZfjgZ/jgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgoLnmbvpjLLjgZnjgovjgZPjgajjgYxcclxuICAgKiDjgafjgY3jgb7jgZnjgILjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjga8ge0BsaW5rIE9iamVjdDJEI2ludGVyYWN0aXZlfSDjg5fjg63jg5Hjg4bjgqPjgavjgojjgonjgZrlkbzjgbPlh7rjgZXjgozjgb7jgZnjgIJcclxuICAgKiDjgarjgYrjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqrjg5bjgrjjgqfjgq/jg4jjga8gRXZlbnQg44Kq44OW44K444Kn44Kv44OI44Go44Gv55Ww44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyNSZWZlcmVuY2VcclxuICAgKiDmqJnmupbjga7jgqTjg5njg7Pjg4jjga7nqK7poZ7jga/ku6XkuIvjgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiAtIFtFdmVudCByZWZlcmVuY2UgfCBNRE5dKCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMgKVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdmFyIHNoYXBlID0gQ2lyY2xlU2hhcGUoKS5hZGRDaGlsZFRvKHRoaXMpLnNldEludGVyYWN0aXZlKHRydWUpLnNldFBvc2l0aW9uKDUwLCA1MCk7XHJcbiAgICogICAgIHNoYXBlLm9uKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKXtcclxuICAgKiAgICAgICB0aGlzLmNvbG9yID0gXCJibHVlXCI7XHJcbiAgICogICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg44Kk44OZ44Oz44OI44Oq44K544OK44Go44Gq44KL6Zai5pWwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyLmV2ZW50IEV2ZW50IOOCquODluOCuOOCp+OCr+ODiOOAgeOBvuOBn+OBr+OCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIG9uKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG9mZlxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOOBguOCi+eorumhnuOBruOCpOODmeODs+ODiOOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOCkuOBmeOBueOBpuWJiumZpOOBmeOCi+OBq+OBryB7QGxpbmsgI2NsZWFyfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiumWouaVsFxyXG4gICAqL1xyXG4gIG9mZih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcclxuICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZpcmVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS6KGo44GZ44Kq44OW44K444Kn44Kv44OI44KS5oyH5a6a44GX44Gm44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS55m654Gr44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQg44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS6KGo44GZ44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50LnR5cGUg44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu5ZCN5YmNXHJcbiAgICovXHJcbiAgIGZpcmUoZSkge1xyXG4gICAgZS50YXJnZXQgPSB0aGlzO1xyXG4gICAgdmFyIG9sZEV2ZW50TmFtZSA9ICdvbicgKyBlLnR5cGU7XHJcbiAgICBpZiAodGhpc1tvbGRFdmVudE5hbWVdKSB0aGlzW29sZEV2ZW50TmFtZV0oZSk7XHJcblxyXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdO1xyXG4gICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICAvLyB2YXIgdGVtcCA9IGxpc3RlbmVycy5jbG9uZSgpO1xyXG4gICAgICB2YXIgdGVtcCA9IGxpc3RlbmVycy5zbGljZSgwKTtcclxuICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wLmxlbmd0aDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgICAgdGVtcFtpXS5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZsYXJlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCpOODmeODs+ODiOWQjeOCkuaMh+WumuOBl+OBpuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkueZuueBq+OBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogcGFyYW0g5byV5pWw44KS5oyH5a6a44GZ44KL44GT44Go44Gr44KI44KK44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gr5Lu75oSP44Gu44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICog44GT44KM44Gr44KI44KK44CB5ZG844Gz5Ye644GX5YWD44GM44Kk44OZ44Oz44OI44Oq44K544OK44Gr5Lu75oSP44Gu5YCk44KS5rih44GZ44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICog77yI44Gf44Gg44GXIHRhcmdldCDjg5fjg63jg5Hjg4bjgqPjgavjga/lv4XjgZroh6rliIboh6rouqvjgYzmoLzntI3jgZXjgozjgb7jgZnjgILvvIlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIC8vXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7lkI3liY1cclxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtXSDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgavjg5fjg63jg5Hjg4bjgqPjgpLoqK3lrprjgZnjgovjgZ/jgoHjga7jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAqL1xyXG4gIGZsYXJlKHR5cGUsIHBhcmFtKSB7XHJcbiAgICB2YXIgZSA9IHt0eXBlOnR5cGV9O1xyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgIGZvckluLmNhbGwocGFyYW0sIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcbiAgICAgIC8vIHBhcmFtLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcbiAgICAgICAgZVtrZXldID0gdmFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlyZShlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgb25lXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOS4gOW6puOBoOOBkeWun+ihjOOBleOCjOOCi+OCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMsuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5oyH5a6a44GX44Gf44Kk44OZ44Oz44OI44Oq44K544OK44GM5LiA5bqm5a6f6KGM44GV44KM44KL44Go44CB44Gd44Gu44Kk44OZ44Oz44OI44Oq44K544OK44Gv5YmK6Zmk44GV44KM44G+44GZ44CC44Gd44KM5Lul5aSW44Gu5oyZ5YuV44GvIHtAbGluayAjb259IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg44Kk44OZ44Oz44OI44Oq44K544OK44Go44Gq44KL6Zai5pWwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyLmV2ZW50IEV2ZW50IOOCquODluOCuOOCp+OCr+ODiOOAgeOBvuOBn+OBr+OCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIG9uZSh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciBmdW5jID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBsaXN0ZW5lci5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xyXG4gICAgICBzZWxmLm9mZih0eXBlLCBmdW5jKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbih0eXBlLCBmdW5jKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaGFzXHJcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44GM55m76Yyy44GV44KM44Gm44GE44KL44GL44Gp44GG44GL44KS6Kq/44G544G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjga7nqK7poZ7jgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgYznmbvpjLLjgZXjgozjgabjgYTjgovloLTlkIjjga8gdHJ1ZeOAgeOBneOBhuOBp+OBquOBhOWgtOWQiOOBryBmYWxzZSDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOaMh+WumuOBl+OBn+OCpOODmeODs+ODiOOBruOCpOODmeODs+ODiOODquOCueODiuOBjOeZu+mMsuOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGhhcyh0eXBlKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5sZW5ndGggIT09IDApIHx8ICEhdGhpc1snb24nICsgdHlwZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsZWFyXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOBguOCi+eorumhnuOBruOCpOODmeODs+ODiOOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOCkuOBmeOBueOBpuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog54m55a6a44Gu44Kk44OZ44Oz44OI44Oq44K544OK44Gu44G/44KS5YmK6Zmk44GZ44KL44Gr44GvIHtAbGluayAjb2ZmfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqL1xyXG4gIGNsZWFyKHR5cGUpIHtcclxuICAgIHZhciBvbGRFdmVudE5hbWUgPSAnb24nICsgdHlwZTtcclxuICAgIGlmICh0aGlzW29sZEV2ZW50TmFtZV0pIGRlbGV0ZSB0aGlzW29sZEV2ZW50TmFtZV07XHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgYWRkRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI29ufSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHJlbW92ZUV2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNvZmZ9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgY2xlYXJFdmVudExpc3RlbmVyXHJcbiAqIHtAbGluayAjY2xlYXJ9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgaGFzRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI2hhc30g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCBkaXNwYXRjaEV2ZW50XHJcbiAqIHtAbGluayAjZmlyZX0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCBkaXNwYXRjaEV2ZW50QnlUeXBlXHJcbiAqIHtAbGluayAjZmxhcmV9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuY29uc3QgbWV0aG9kTWFwID0ge1xyXG4gIGFkZEV2ZW50TGlzdGVuZXI6ICdvbicsXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogJ29mZicsXHJcbiAgY2xlYXJFdmVudExpc3RlbmVyOiAnY2xlYXInLFxyXG4gIGhhc0V2ZW50TGlzdGVuZXI6ICdoYXMnLFxyXG4gIGRpc3BhdGNoRXZlbnQ6ICdmaXJlJyxcclxuICBkaXNwYXRjaEV2ZW50QnlUeXBlOiAnZmxhcmUnLFxyXG59O1xyXG4vLyBtZXRob2RNYXAuZm9ySW4oZnVuY3Rpb24ob2xkLCBuYW1lKSB7XHJcbmZvckluLmNhbGwobWV0aG9kTWFwLCBmdW5jdGlvbihvbGQsIG5hbWUpIHtcclxuICAvLyBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLiRtZXRob2Qob2xkLCBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGVbbmFtZV0pO1xyXG4gICRtZXRob2QuY2FsbChFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLCBvbGQsIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGVbbmFtZV0pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5GbG93XHJcbiAqIHRpY2sgbWFuYWdlbWVudCBjbGFzc1xyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgRmxvdyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGZ1bmMsIHdhaXQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0dXMgPSAncGVuZGluZyc7XHJcbiAgICB0aGlzLnJlc3VsdFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuX3F1ZXVlID0gW107XHJcbiAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuICAgIGlmICh3YWl0ICE9PSB0cnVlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLnJlc29sdmUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuICAgICAgICBzZWxmLnN0YXR1cyA9ICdyZXNvbHZlZCc7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLnJlamVjdC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHNlbGYuc3RhdHVzID0gJ3JlamVjdGVkJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuZnVuYyhyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDmiJDlip9cclxuICAgKi9cclxuICByZXNvbHZlKGFyZykge1xyXG4gICAgdGhpcy5yZXN1bHRWYWx1ZSA9IGFyZztcclxuXHJcbiAgICAvLyDjgq3jg6Xjg7zjgavnqY3jgb7jgozjgZ/plqLmlbDjgpLlrp/ooYxcclxuICAgIHRoaXMuX3F1ZXVlLmZvckVhY2goZnVuY3Rpb24oZnVuYykge1xyXG4gICAgICBmdW5jKHRoaXMucmVzdWx0VmFsdWUpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICAvLyB0aGlzLl9xdWV1ZS5jbGVhcigpO1xyXG4gICAgY2xlYXIuY2FsbCh0aGlzLl9xdWV1ZSk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOWkseaVl1xyXG4gICAqL1xyXG4gIHJlamVjdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOmdnuWQjOacn+e1guS6huaZguOBruWHpueQhuOCkueZu+mMslxyXG4gICAqL1xyXG4gIHRoZW4oZnVuYykge1xyXG4gICAgLy8g5oiQ5Yqf44K544OG44O844K/44K544Gg44Gj44Gf5aC05ZCI44Gv5Y2z5a6f6KGMXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdyZXNvbHZlZCcpIHtcclxuICAgICAgdmFyIHZhbHVlID0gZnVuYyh0aGlzLnJlc3VsdFZhbHVlKTtcclxuICAgICAgcmV0dXJuIEZsb3cucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGZsb3cgPSBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuX3F1ZXVlLnB1c2goZnVuY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdFZhbHVlID0gZnVuYyhhcmcpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0VmFsdWUgaW5zdGFuY2VvZiBGbG93KSB7XHJcbiAgICAgICAgICByZXN1bHRWYWx1ZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZsb3cucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBmbG93LnJlc29sdmUocmVzdWx0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZmxvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXNvbHZlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGbG93KSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgZmxvdyA9IG5ldyBGbG93KGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmbG93O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFsbChmbG93cykge1xyXG4gICAgcmV0dXJuIG5ldyBGbG93KGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgIHZhciBhcmdzID0gW107XHJcblxyXG4gICAgICBmbG93cy5mb3JFYWNoKGZ1bmN0aW9uKGZsb3cpIHtcclxuICAgICAgICBmbG93LnRoZW4oZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgKytjb3VudDtcclxuICAgICAgICAgIGFyZ3MucHVzaChkKTtcclxuXHJcbiAgICAgICAgICBpZiAoY291bnQgPj0gZmxvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlRpY2tlclxyXG4gKiB0aWNrIG1hbmFnZW1lbnQgY2xhc3NcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIFRpY2tlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIC8qKiDntYzpgY7jg5Xjg6zjg7zjg6DmlbAgKi9cclxuICAvLyBmcmFtZSA9IG51bGxcclxuXHJcbiAgLy8gLyoqIDHjg5Xjg6zjg7zjg6Djga7ntYzpgY7mmYLplpMgKi9cclxuICAvLyBkZWx0YVRpbWUgPSBudWxsXHJcbiAgXHJcbiAgLy8gLyoqIOWFqOS9k+OBrue1jOmBjuaZgumWkyAqL1xyXG4gIC8vIGVsYXBzZWRUaW1lID0gbnVsbFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5mcHMgPSAzMDtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5kZWx0YVRpbWUgPSAwO1xyXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB0aGlzLnJ1bm5lciA9IFRpY2tlci5ydW5uZXI7XHJcbiAgfVxyXG5cclxuICB0aWNrKGZ1bmMpIHtcclxuICAgIHRoaXMub24oJ3RpY2snLCBmdW5jKTtcclxuICB9XHJcblxyXG4gIHVudGljayhmdW5jKSB7XHJcbiAgICB0aGlzLm9mZigndGljaycsIGZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdmFyIG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAvLyAx44OV44Os44O844Og44Gr5o6b44GL44Gj44Gf5pmC6ZaTXHJcbiAgICB0aGlzLmRlbHRhVGltZSA9IG5vdyAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAvLyDlhajkvZPjga7ntYzpgY7mmYLplpNcclxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBub3cgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmN1cnJlbnRUaW1lID0gbm93O1xyXG4gICAgdGhpcy5mbGFyZSgndGljaycpO1xyXG4gICAgdmFyIGVuZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgLy8g44OV44Os44O844Og44KS5pu05pawXHJcbiAgICB0aGlzLmZyYW1lICs9IDE7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIGVsYXBzZWQgdGltZVxyXG4gICAgdmFyIGVsYXBzZWQgPSBlbmQtc3RhcnQ7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIG5leHQgd2FpdGluZyB0aW1lXHJcbiAgICB2YXIgZGVsYXkgPSBNYXRoLm1heCh0aGlzLmZyYW1lVGltZS1lbGFwc2VkLCAwKTtcclxuXHJcbiAgICByZXR1cm4gZGVsYXk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZm4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHNlbGYuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gc2VsZi5ydW4oKTtcclxuICAgICAgICBzZWxmLnJ1bm5lcihmbiwgZGVsYXkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm4oKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJld2luZCgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgZ2V0IGZwcygpIHsgcmV0dXJuIHRoaXMuX2ZwczsgfVxyXG4gIHNldCBmcHModikge1xyXG4gICAgdGhpcy5fZnBzID0gdjtcclxuICAgIHRoaXMuZnJhbWVUaW1lID0gMTAwMC90aGlzLl9mcHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVubmVyKHJ1biwgZGVsYXkpIHtcclxuICAgIHNldFRpbWVvdXQocnVuLCBkZWxheSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuUmFuZG9tXHJcbiAqICMg5Lmx5pWw44KS5omx44GG44Gf44KB44Gu44Kv44Op44K5XHJcbiAqIOS5seaVsOOCkuaJseOBhuOBn+OCgeOBruODoeOCveODg+ODieOChOODl+ODreODkeODhuOCo+OCkuWumue+qeOBl+OBpuOBhOOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgUmFuZG9tIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IFtzZWVkID0gMV1cclxuICAgKiDkubHmlbDjga7jgrfjg7zjg4njgafjgZnjgIJcclxuICAgKi9cclxuICAvLyBzZWVkID0gMVxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgILlvJXmlbDjgacge0BsaW5rICNzZWVkfSDjgpLoqK3lrprjgafjgY3jgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NlZWQgPSAoRGF0ZS5ub3coKSkgfHwgMV0g44K344O844OJXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc2VlZCkge1xyXG4gICAgdGhpcy5zZWVkID0gc2VlZCB8fCAoRGF0ZS5ub3coKSkgfHwgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZG9tXHJcbiAgICogMH4x44Gu5Lmx5pWw44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAwfjEg44Gu5Lmx5pWwXHJcbiAgICovXHJcbiAgcmFuZG9tKCkge1xyXG4gICAgdmFyIHNlZWQgPSB0aGlzLnNlZWQ7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkIDw8IDEzKTtcclxuICAgIHNlZWQgPSBzZWVkIF4gKHNlZWQgPj4+IDE3KTtcclxuICAgIHNlZWQgPSAoc2VlZCBeIChzZWVkIDw8IDUpKTtcclxuXHJcbiAgICB0aGlzLnNlZWQgPSBzZWVkO1xyXG5cclxuICAgIHJldHVybiAoc2VlZCA+Pj4gMCkgLyBwaGluYS51dGlsLlJhbmRvbS5NQVg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRpbnRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKRcclxuICAgKi9cclxuICByYW5kaW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5yYW5kb20oKSoobWF4LW1pbisxKSApICsgbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kZmxvYXRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbDlgKRcclxuICAgKi9cclxuICByYW5kZmxvYXQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgpKihtYXgtbWluKSttaW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRib29sXHJcbiAgICog44Op44Oz44OA44Og44Gq55yf5YG95YCk44KS6L+U44GX44G+44GZ44CC5byV5pWw44Gn55m+5YiG546H44KS5oyH5a6a44Gn44GN44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwZXJlY2VudCA9IDUwXSDnnJ/jgavjgarjgovnmb7liIbnjodcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDjg6njg7Pjg4Djg6DjgarnnJ/lgb3lgKRcclxuICAgKi9cclxuICByYW5kYm9vbChwZXJjZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oKSA8IChwZXJjZW50ID09PSB1bmRlZmluZWQgPyA1MCA6IHBlcmNlbnQpIC8gMTAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYXJyYXlcclxuICAgKiDku7vmhI/jga7nr4Tlm7Ljgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLmoLzntI3jgZfjgZ/ku7vmhI/jga7plbfjgZXjga7phY3liJfjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbiA9IDEwMF0g6YWN5YiX44Gu6ZW344GVXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW4gPSAwXSDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heCA9IDEwMF0g56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjga7lhaXjgaPjgZ/phY3liJdcclxuICAgKi9cclxuICByYW5kYXJyYXkobGVuLCBtaW4sIG1heCkge1xyXG4gICAgbGVuID0gbGVuIHx8IDEwMDtcclxuICAgIG1pbiA9IG1pbiB8fCAwO1xyXG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcclxuXHJcbiAgICByZXR1cm4gKGxlbikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yYW5kaW50KG1pbiwgbWF4KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlZWQoKSB7IHJldHVybiB0aGlzLl9zZWVkOyB9XHJcbiAgc2V0IHNlZWQodikgeyB0aGlzLl9zZWVkID0gKHYgPj4+IDApIHx8IDE7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRTZWVkIFxyXG4gICAqIHtAbGluayAjc2VlZH0g44Gu5YCk44KS5Y+W5b6X44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjgrfjg7zjg4lcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIGdldFNlZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRTZWVkXHJcbiAgICoge0BsaW5rICNzZWVkfSDjga7lgKTjgpLjgrvjg4Pjg4jjgZfjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NlZWQgPSAxXSDjgrfjg7zjg4lcclxuICAgKiBAc3RhdGljXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzZXRTZWVkKHNlZWQpIHtcclxuICAgIHRoaXMuc2VlZCA9IChzZWVkID4+PiAwKSB8fCAxO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIDB+MeOBruS5seaVsOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRvbX0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAwfjEg44Gu5Lmx5pWwXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kb20oKSB7XHJcbiAgICB0aGlzLnNlZWQgPSB0aGlzLnhvcjMyKHRoaXMuc2VlZCk7XHJcbiAgICByZXR1cm4gKHRoaXMuc2VlZCA+Pj4gMCkgLyBwaGluYS51dGlsLlJhbmRvbS5NQVg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRpbnRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kaW50fSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRpbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBwaGluYS5nbG9iYWwuTWF0aC5mbG9vciggdGhpcy5yYW5kb20oKSoobWF4LW1pbisxKSApICsgbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kZmxvYXRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kZmxvYXR9IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVsOWApFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oKSoobWF4LW1pbikrbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYm9vbFxyXG4gICAqIOODqeODs+ODgOODoOOBquecn+WBveWApOOCkui/lOOBl+OBvuOBmeOAguW8leaVsOOBp+eZvuWIhueOh+OCkuaMh+WumuOBp+OBjeOBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRib29sfSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3BlcmVjZW50ID0gNTBdIOecn+OBq+OBquOCi+eZvuWIhueOh1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq55yf5YG95YCkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kYm9vbChwZXJlY2VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZGludCgwLCA5OSkgPCAocGVyZWNlbnQgfHwgNTApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYXJyYXlcclxuICAgKiDku7vmhI/jga7nr4Tlm7Ljgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLmoLzntI3jgZfjgZ/ku7vmhI/jga7plbfjgZXjga7phY3liJfjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kYXJyYXl9IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuID0gMTAwXSDphY3liJfjga7plbfjgZVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbiA9IDBdIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4ID0gMTAwXSDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVtOaVsOWApOOBruWFpeOBo+OBn+mFjeWIl1xyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGFycmF5KGxlbiwgbWluLCBtYXgpIHtcclxuICAgIGxlbiA9IGxlbiB8fCAxMDA7XHJcbiAgICBtaW4gPSBtaW4gfHwgMDtcclxuICAgIG1heCA9IG1heCB8fCAxMDA7XHJcblxyXG4gICAgcmV0dXJuIChsZW4pLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmFuZGludChtaW4sIG1heCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHhvcjMyXHJcbiAgICogeG9yc2hpZnQg44KS55So44GE44Gm55aR5Ly85Lmx5pWw5YiX44KS55Sf5oiQ44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNlZWRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOeWkeS8vOS5seaVsOWIl1xyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgeG9yMzIoc2VlZCkge1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA8PCAxMyk7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkID4+PiAxNyk7XHJcbiAgICBzZWVkID0gKHNlZWQgXiAoc2VlZCA8PCA1KSk7XHJcblxyXG4gICAgcmV0dXJuIHNlZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHV1aWRcclxuICAgKiB1dWlkIOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gdXVpZFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxyXG4gIHN0YXRpYyB1dWlkKCkge1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmKHBoaW5hLmdsb2JhbC5wZXJmb3JtYW5jZSAmJiB0eXBlb2YgcGhpbmEuZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgfVxyXG4gICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcclxuICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XHJcbiAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1dWlkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gTUFYXHJcbiAqIOWGhemDqOeahOOBq+S9v+eUqOOBleOCjOOCi+WumuaVsOOBp+OBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuUmFuZG9tLk1BWCA9IDQyOTQ5NjcyOTU7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtzZWVkID0gKERhdGUubm93KCkpXSDjgrfjg7zjg4lcclxuICogc3RhdGljIOODoeOCveODg+ODieOBruS5seaVsOOBruOCt+ODvOODieOBp+OBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuUmFuZG9tLnNlZWQgPSAoRGF0ZS5ub3coKSk7XHJcblxyXG5cclxuLy8gcHJvdG90eXBl5ouh5by144Gv44GX44Gq44GEXHJcbi8vIE1hdGguJG1ldGhvZChcInJhbmRpbnRcIiwgZnVuY3Rpb24obWluLCBtYXgpIHtcclxuLy8gICByZXR1cm4gcGhpbmEudXRpbC5SYW5kb20ucmFuZGludChtaW4sIG1heCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gTWF0aC4kbWV0aG9kKFwicmFuZGZsb2F0XCIsIGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbi8vICAgcmV0dXJuIHBoaW5hLnV0aWwuUmFuZG9tLnJhbmRmbG9hdChtaW4sIG1heCk7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlN1cHBvcnRcclxuICogXHJcbiAqL1xyXG5jbGFzcyBTdXBwb3J0IHt9U3VwcG9ydC5jYW52YXMgPSAhIXBoaW5hJDEuZ2xvYmFsLkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuU3VwcG9ydC53ZWJHTCA9IChmdW5jdGlvbigpIHtcclxuICByZXR1cm4gISFwaGluYSQxLmdsb2JhbC5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgJiYgISFkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCd3ZWJnbCcpO1xyXG59KSgpO1xyXG5TdXBwb3J0LndlYkF1ZGlvID0gISFwaGluYSQxLmdsb2JhbC5BdWRpb0NvbnRleHQgfHwgISFwaGluYSQxLmdsb2JhbC53ZWJraXRBdWRpb0NvbnRleHQgfHwgISFwaGluYSQxLmdsb2JhbC5tb3pBdWRpb0NvbnRleHQ7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuR3JpZFxyXG4gKi9cclxuY2xhc3MgR3JpZCB7XHJcblxyXG4gIC8vIC8qKiDluYUgKi9cclxuICAvLyB3aWR0aDogNjQwLFxyXG4gIC8vIC8qKiDliJfmlbAgKi9cclxuICAvLyBjb2x1bW5zOiAxMixcclxuICAvLyAvKiog44Or44O844OXICovXHJcbiAgLy8gbG9vcDogZmFsc2UsXHJcbiAgLy8gLyoqIOOCquODleOCu+ODg+ODiOWApCAqL1xyXG4gIC8vIG9mZnNldDogMCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdmFyIHBhcmFtID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICB2YXIgd2lkdGggPSBwYXJhbS53aWR0aCB8fCA2NDA7XHJcbiAgICAgIHZhciBjb2x1bW5zID0gcGFyYW0uY29sdW1ucyB8fCAxMjtcclxuICAgICAgdmFyIGxvb3AgPSBwYXJhbS5sb29wIHx8IGZhbHNlO1xyXG4gICAgICB2YXIgb2Zmc2V0ID0gcGFyYW0ub2Zmc2V0IHx8IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIHdpZHRoICAgPSBhcmd1bWVudHNbMF0gfHwgNjQwO1xyXG4gICAgICB2YXIgY29sdW1ucyA9IGFyZ3VtZW50c1sxXSB8fCAxMjtcclxuICAgICAgdmFyIGxvb3AgICAgPSBhcmd1bWVudHNbMl0gfHwgZmFsc2U7XHJcbiAgICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHNbM10gfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgdGhpcy51bml0V2lkdGggPSB0aGlzLndpZHRoL3RoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIC8vIOOCueODkeODs+aMh+WumuOBp+WApOOCkuWPluW+lyjosqDmlbDjgoJvaylcclxuICBzcGFuKGluZGV4KSB7XHJcbiAgICBpZiAodGhpcy5sb29wKSB7XHJcbiAgICAgIGluZGV4ICs9IHRoaXMuY29sdW1ucztcclxuICAgICAgaW5kZXggJT0gdGhpcy5jb2x1bW5zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdFdpZHRoICogaW5kZXggKyB0aGlzLm9mZnNldDtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgdW5pdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnVuaXRXaWR0aDtcclxuICB9XHJcblxyXG4gIGNlbnRlcihvZmZzZXQpIHtcclxuICAgIHZhciBpbmRleCA9IG9mZnNldCB8fCAwO1xyXG4gICAgcmV0dXJuICh0aGlzLndpZHRoLzIpICsgKHRoaXMudW5pdFdpZHRoICogaW5kZXgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLk1hdGhcclxuICogIyDmi6HlvLXjgZfjgZ8gTWF0aCDjgq/jg6njgrlcclxuICog5pWw5a2m55qE44Gq5Yem55CG44KS5omx44GGIE1hdGgg44Kv44Op44K544KS5ouh5by144GX44Gm44GE44G+44GZ44CCXHJcbiAqIFxyXG4gKiDlhajjgaZzdGF0aWPjg6Hjg7Pjg5Djg7zjgafjgZnjgIJcclxuICovXHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiBAbWV0aG9kIGNsYW1wXHJcbiAqIOaMh+WumuOBl+OBn+WApOOCkuaMh+WumuOBl+OBn+evhOWbsuOBq+WPjuOCgeOBn+e1kOaenOOCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgTWF0aC5jbGFtcCgxMjAsIDAsIDY0MCk7IC8vID0+IDEyMFxyXG4gKiAgICAgTWF0aC5jbGFtcCg5ODAsIDAsIDY0MCk7IC8vID0+IDY0MFxyXG4gKiAgICAgTWF0aC5jbGFtcCgtODAsIDAsIDY0MCk7IC8vID0+IDBcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIOWApFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbWluICDnr4Tlm7Ljga7kuIvpmZBcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1heCAg56+E5Zuy44Gu5LiK6ZmQXHJcbiAqIEByZXR1cm4ge051bWJlcn0g5Li444KB44Gf57WQ5p6c44Gu5YCkXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICByZXR1cm4gKHZhbHVlIDwgbWluKSA/IG1pbiA6ICggKHZhbHVlID4gbWF4KSA/IG1heCA6IHZhbHVlICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkgREVHX1RPX1JBRFxyXG4gKiDluqbjgpLjg6njgrjjgqLjg7PjgavlpInmj5vjgZnjgovjgZ/jgoHjga7lrprmlbDjgafjgZnjgIJcclxuICovXHJcbnZhciBERUdfVE9fUkFEID0gTWF0aC5QSS8xODA7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuVHdlZW5cclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBUd2VlbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5iZWdpblByb3BzID0gYmVnaW5Qcm9wcztcclxuICAgIHRoaXMuZmluaXNoUHJvcHMgPSBmaW5pc2hQcm9wcztcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxMDAwO1xyXG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmc7XHJcblxyXG4gICAgLy8gc2V0dXBcclxuICAgIHRoaXMuY2hhbmdlUHJvcHMgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBiZWdpblByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQcm9wc1trZXldID0gZmluaXNoUHJvcHNba2V5XSAtIGJlZ2luUHJvcHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvKHRhcmdldCwgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHZhciBiZWdpblByb3BzID0ge307XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGZpbmlzaFByb3BzKSB7XHJcbiAgICAgIGJlZ2luUHJvcHNba2V5XSA9IHRhcmdldFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZnJvbSh0YXJnZXQsIGJlZ2luUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgICAgdmFyIGZpbmlzaFByb3BzID0ge307XHJcblxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYmVnaW5Qcm9wcykge1xyXG4gICAgICAgIGZpbmlzaFByb3BzW2tleV0gPSB0YXJnZXRba2V5XTtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IGJlZ2luUHJvcHNba2V5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5mcm9tVG8odGFyZ2V0LCBiZWdpblByb3BzLCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZyk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGJ5KHRhcmdldCwgcHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHZhciBiZWdpblByb3BzID0ge307XHJcbiAgICB2YXIgZmluaXNoUHJvcHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcclxuICAgICAgYmVnaW5Qcm9wc1trZXldID0gdGFyZ2V0W2tleV07XHJcbiAgICAgIGZpbmlzaFByb3BzW2tleV0gPSB0YXJnZXRba2V5XSArIHByb3BzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mcm9tVG8odGFyZ2V0LCBiZWdpblByb3BzLCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB5b3lvKCkge1xyXG4gICAgdmFyIHRlbXAgPSB0aGlzLmJlZ2luUHJvcHM7XHJcbiAgICB0aGlzLmJlZ2luUHJvcHMgPSB0aGlzLmZpbmlzaFByb3BzO1xyXG4gICAgdGhpcy5maW5pc2hQcm9wcyA9IHRlbXA7XHJcbiAgICAvLyB0aGlzLmNoYW5nZVByb3BzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICBmb3JJbi5jYWxsKHRoaXMuY2hhbmdlUHJvcHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlUHJvcHNba2V5XSA9IC12YWx1ZTtcclxuICAgICAgdGhpcy50YXJnZXRba2V5XSA9IHRoaXMuYmVnaW5Qcm9wc1trZXldO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICAvLyBUT0RPOiBlYXNpbmcg44KC5Y+N6Lui44GV44Gb44KLXHJcbiAgICAvLyB0aGlzLmVhc2luZyA9IGVhc2luZztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2Fpbih0aW1lKSB7XHJcbiAgICB0aGlzLnNlZWsodGhpcy50aW1lICsgdGltZSk7XHJcbiAgfVxyXG5cclxuICBmb3J3YXJkKHRpbWUpIHtcclxuICAgIHRoaXMuc2Vlayh0aGlzLnRpbWUgKyB0aW1lKTtcclxuICB9XHJcblxyXG4gIGJhY2t3YXJkKHRpbWUpIHtcclxuICAgIHRoaXMuc2Vlayh0aGlzLnRpbWUgLSB0aW1lKTtcclxuICB9XHJcblxyXG4gIHNlZWsodGltZSkge1xyXG4gICAgLy8gdGhpcy50aW1lID0gTWF0aC5jbGFtcCh0aW1lLCAwLCB0aGlzLmR1cmF0aW9uKTtcclxuICAgIHRoaXMudGltZSA9IGNsYW1wKHRpbWUsIDAsIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIC8vIHRoaXMuYmVnaW5Qcm9wcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICBmb3JJbi5jYWxsKHRoaXMuYmVnaW5Qcm9wcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgdiA9IHRoaXMuZWFzaW5nKHRoaXMudGltZSwgdmFsdWUsIHRoaXMuY2hhbmdlUHJvcHNba2V5XSwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICAgIHRoaXMudGFyZ2V0W2tleV0gPSB2O1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgZWFzaW5nKCkgeyByZXR1cm4gdGhpcy5fZWFzaW5nOyB9XHJcbiAgc2V0IGVhc2luZyh2KSB7XHJcbiAgICB0aGlzLl9lYXNpbmcgPSBUd2Vlbi5FQVNJTkdbdl0gfHwgVHdlZW4uRUFTSU5HLmRlZmF1bHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICog44Kk44O844K444Oz44KwXHJcbiAqICMjIyBSZWZlcmVuY2VcclxuICogLSA8aHR0cDovL2NvZGVyZXBvcy5vcmcvc2hhcmUvd2lraS9KU1R3ZWVuZXI+XHJcbiAqIC0gPGh0dHA6Ly9jb2RlcmVwb3Mub3JnL3NoYXJlL2Jyb3dzZXIvbGFuZy9qYXZhc2NyaXB0L2pzdHdlZW5lci90cnVuay9zcmMvSlNUd2VlbmVyLmpzPlxyXG4gKiAtIDxodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvanF1ZXJ5LmVhc2luZy4xLjMuanM+XHJcbiAqIC0gPGh0dHA6Ly9ob3N0ZWQuemVoLmNvbS5ici90d2VlbmVyL2RvY3MvZW4tdXMvbWlzYy90cmFuc2l0aW9ucy5odG1sPlxyXG4gKi9cclxuVHdlZW4uRUFTSU5HID0ge1xyXG5cclxuICAvKiogZGVmYXVsdCAqL1xyXG4gIFwiZGVmYXVsdFwiOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyp0L2QgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGxpbmVhciAqL1xyXG4gIGxpbmVhcjogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqdC9kICsgYjtcclxuICB9LFxyXG4gIC8qKiBzd2luZyAqL1xyXG4gIHN3aW5nOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKih0Lz1kKSoodC0yKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluUXVhZCAqL1xyXG4gIGVhc2VJblF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0UXVhZCAqL1xyXG4gIGVhc2VPdXRRdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKih0Lz1kKSoodC0yKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0UXVhZCAqL1xyXG4gIGVhc2VJbk91dFF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQgKyBiO1xyXG4gICAgcmV0dXJuIC1jLzIgKigoLS10KSoodC0yKSAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBkZWZlSW5DdWJpYyAqL1xyXG4gIGVhc2VJbkN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0Q3ViaWMgKi9cclxuICBlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKigodD10L2QtMSkqdCp0ICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEN1YmljICovXHJcbiAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCArIGI7XHJcbiAgICByZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkN1YmljICovXHJcbiAgZWFzZU91dEluQ3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEN1YmljKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQ3ViaWMoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluUXVhcnQgKi9cclxuICBlYXNlSW5RdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQqdCp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0UXVhcnQgKi9cclxuICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqKCh0PXQvZC0xKSp0KnQqdCAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRRdWFydCAqL1xyXG4gIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XHJcbiAgICByZXR1cm4gLWMvMiAqKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5RdWFydCAqL1xyXG4gIGVhc2VPdXRJblF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRRdWFydCh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJblF1YXJ0KCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblF1aW50ICovXHJcbiAgZWFzZUluUXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KnQqdCp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0UXVpbnQgKi9cclxuICBlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKigodD10L2QtMSkqdCp0KnQqdCArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRRdWludCAqL1xyXG4gIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCp0ICsgYjtcclxuICAgIHJldHVybiBjLzIqKCh0LT0yKSp0KnQqdCp0ICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJblF1aW50ICovXHJcbiAgZWFzZU91dEluUXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dFF1aW50KHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluUXVpbnQoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluU2luZSAqL1xyXG4gIGVhc2VJblNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQvZCAqKE1hdGguUEkvMikpICsgYyArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFNpbmUgKi9cclxuICBlYXNlT3V0U2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0L2QgKihNYXRoLlBJLzIpKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0U2luZSAqL1xyXG4gIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYy8yICooTWF0aC5jb3MoTWF0aC5QSSp0L2QpIC0gMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJblNpbmUgKi9cclxuICBlYXNlT3V0SW5TaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRTaW5lKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluU2luZSgodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5FeHBvICovXHJcbiAgZWFzZUluRXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuICh0PT0wKSA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKih0L2QgLSAxKSkgKyBiIC0gYyAqIDAuMDAxO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRFeHBvICovXHJcbiAgZWFzZU91dEV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAodD09ZCkgPyBiK2MgOiBjICogMS4wMDEgKigtTWF0aC5wb3coMiwgLTEwICogdC9kKSArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRFeHBvICovXHJcbiAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7XHJcbiAgICBpZih0PT1kKSByZXR1cm4gYitjO1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yICogTWF0aC5wb3coMiwgMTAgKih0IC0gMSkpICsgYiAtIGMgKiAwLjAwMDU7XHJcbiAgICByZXR1cm4gYy8yICogMS4wMDA1ICooLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluRXhwbyAqL1xyXG4gIGVhc2VPdXRJbkV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEV4cG8odCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5FeHBvKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkNpcmMgKi9cclxuICBlYXNlSW5DaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKihNYXRoLnNxcnQoMSAtKHQvPWQpKnQpIC0gMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRDaXJjICovXHJcbiAgZWFzZU91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSh0PXQvZC0xKSp0KSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0Q2lyYyAqL1xyXG4gIGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIC1jLzIgKihNYXRoLnNxcnQoMSAtIHQqdCkgLSAxKSArIGI7XHJcbiAgICByZXR1cm4gYy8yICooTWF0aC5zcXJ0KDEgLSh0LT0yKSp0KSArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5DaXJjICovXHJcbiAgZWFzZU91dEluQ2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Q2lyYyh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkNpcmMoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluRWxhc3RpYyAqL1xyXG4gIGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIHZhciBzO1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7ICBpZigodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZighcCkgcD1kKi4zO1xyXG4gICAgaWYoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7IGE9Yzsgcz1wLzQ7IH0gZWxzZSBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbihjL2EpO1xyXG4gICAgcmV0dXJuIC0oYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRFbGFzdGljICovXHJcbiAgZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIHZhciBzO1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7ICBpZigodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZighcCkgcD1kKi4zO1xyXG4gICAgaWYoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7IGE9Yzsgcz1wLzQ7IH0gZWxzZSBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbihjL2EpO1xyXG4gICAgcmV0dXJuKGEqTWF0aC5wb3coMiwtMTAqdCkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSArIGMgKyBiKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRFbGFzdGljICovXHJcbiAgZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgdmFyIHM7XHJcbiAgICBpZih0PT0wKSByZXR1cm4gYjsgIGlmKCh0Lz1kLzIpPT0yKSByZXR1cm4gYitjOyAgaWYoIXApIHA9ZCooLjMqMS41KTtcclxuICAgIGlmKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHM9cC80OyB9ICAgICAgIGVsc2UgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4oYy9hKTtcclxuICAgIGlmKHQgPCAxKSByZXR1cm4gLS41KihhKk1hdGgucG93KDIsMTAqKHQtPTEpKSAqIE1hdGguc2luKCh0KmQtcykqKDIqTWF0aC5QSSkvcCApKSArIGI7XHJcbiAgICByZXR1cm4gYSpNYXRoLnBvdygyLC0xMCoodC09MSkpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkqLjUgKyBjICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5FbGFzdGljICovXHJcbiAgZWFzZU91dEluRWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0RWxhc3RpYyh0KjIsIGIsIGMvMiwgZCwgYSwgcCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkVsYXN0aWMoKHQqMiktZCwgYitjLzIsIGMvMiwgZCwgYSwgcCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluQmFjayAqL1xyXG4gIGVhc2VJbkJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KigocysxKSp0IC0gcykgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRCYWNrICovXHJcbiAgZWFzZU91dEJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcclxuICAgIHJldHVybiBjKigodD10L2QtMSkqdCooKHMrMSkqdCArIHMpICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEJhY2sgKi9cclxuICBlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZihzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqKHQqdCooKChzKj0oMS41MjUpKSsxKSp0IC0gcykpICsgYjtcclxuICAgIHJldHVybiBjLzIqKCh0LT0yKSp0KigoKHMqPSgxLjUyNSkpKzEpKnQgKyBzKSArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5CYWNrICovXHJcbiAgZWFzZU91dEluQmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0QmFjayh0KjIsIGIsIGMvMiwgZCwgcyk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkJhY2soKHQqMiktZCwgYitjLzIsIGMvMiwgZCwgcyk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluQm91bmNlICovXHJcbiAgZWFzZUluQm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyAtIFR3ZWVuLkVBU0lORy5lYXNlT3V0Qm91bmNlKGQtdCwgMCwgYywgZCkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRCb3VuY2UgKi9cclxuICBlYXNlT3V0Qm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZCkgPCgxLzIuNzUpKSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqdCp0KSArIGI7XHJcbiAgICB9IGVsc2UgaWYodCA8KDIvMi43NSkpIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDEuNS8yLjc1KSkqdCArIC43NSkgKyBiO1xyXG4gICAgfSBlbHNlIGlmKHQgPCgyLjUvMi43NSkpIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDIuMjUvMi43NSkpKnQgKyAuOTM3NSkgKyBiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDIuNjI1LzIuNzUpKSp0ICsgLjk4NDM3NSkgKyBiO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEJvdW5jZSAqL1xyXG4gIGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5Cb3VuY2UodCoyLCAwLCBjLCBkKSAqIC41ICsgYjtcclxuICAgIGVsc2UgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Qm91bmNlKHQqMi1kLCAwLCBjLCBkKSAqIC41ICsgYyouNSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQm91bmNlICovXHJcbiAgZWFzZU91dEluQm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRCb3VuY2UodCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5Cb3VuY2UoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5RdWVyeVN0cmluZ1xyXG4gKiBcclxuICovXHJcbmNsYXNzIFF1ZXJ5U3RyaW5nIHtcclxuXHJcbiAgc3RhdGljIHBhcnNlKHRleHQsIHNlcCwgZXEsIGlzRGVjb2RlKSB7XHJcbiAgICB0ZXh0ID0gdGV4dCB8fCBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xyXG4gICAgc2VwID0gc2VwIHx8ICcmJztcclxuICAgIGVxID0gZXEgfHwgJz0nO1xyXG4gICAgdmFyIGRlY29kZSA9IChpc0RlY29kZSkgPyBkZWNvZGVVUklDb21wb25lbnQgOiBmdW5jdGlvbihhKSB7IHJldHVybiBhOyB9O1xyXG4gICAgcmV0dXJuIHRleHQuc3BsaXQoc2VwKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCB2KSB7XHJcbiAgICAgIHZhciBwYWlyID0gdi5zcGxpdChlcSk7XHJcbiAgICAgIG9ialtwYWlyWzBdXSA9IGRlY29kZShwYWlyWzFdKTtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0sIHt9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHNlcCwgZXEsIGlzRW5jb2RlKSB7XHJcbiAgICBzZXAgPSBzZXAgfHwgJyYnO1xyXG4gICAgZXEgPSBlcSB8fCAnPSc7XHJcbiAgICB2YXIgZW5jb2RlID0gKGlzRW5jb2RlKSA/IGVuY29kZVVSSUNvbXBvbmVudCA6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGE7IH07XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgcmV0dXJuIGtleSArIGVxICsgZW5jb2RlKHZhbHVlW2tleV0pO1xyXG4gICAgfSkuam9pbihzZXApO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBnbG9iYWwuU3RyaW5nXHJcbiAqICMg5ouh5by144GX44GfIFN0cmluZyDjgq/jg6njgrlcclxuICovXHJcblxyXG4vKipcclxuICogQG1ldGhvZCBmb3JtYXRcclxuICog44OV44Kp44O844Oe44OD44OI44Gr5byV5pWw44KS6YGp55So44GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOW8leaVsOOBjOOCquODluOCuOOCp+OCr+ODiOOBruWgtOWQiOOAgVwie+ODl+ODreODkeODhuOCo+WQjX1cIiDjgYzjgqrjg5bjgrjjgqfjgq/jg4jjga7jg5fjg63jg5Hjg4bjgqPjga7lgKTjgavnva7jgY3mj5vjgo/jgorjgb7jgZnjgIJcclxuICog5oyH5a6a44GX44Gf44OX44Ot44OR44OG44Kj44GM44Kq44OW44K444Kn44Kv44OI44Gr44Gq44GE5aC05ZCI44Gv56m65paH5a2X5YiX44Gr44Gq44KK44G+44GZ44CCXHJcbiAqXHJcbiAqIOesrDHlvJXmlbDjgYzjgqrjg5bjgrjjgqfjgq/jg4jjgafjgarjgYvjgaPjgZ/loLTlkIjjgIFcInvmlbTmlbB9XCIg44GM5ZCE5byV5pWw44Gr572u44GN5o+b44KP44KK44G+44GZ44CCXHJcbiAqIOaMh+WumuOBl+OBn+WApOOBruW8leaVsOOBjOOBquOBi+OBo+OBn+WgtOWQiOOBr+epuuaWh+Wtl+WIl+OBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgb2JqID0ge3I6IDEyOCwgZzogMCwgYjogMjU1fTtcclxuICogICAgIFwiY29sb3I6IHJnYih7cn0sIHtnfSwge2J9KTtcIi5mb3JtYXQob2JqKTsgLy8gPT4gXCJjb2xvcjogcmdiKDEyOCwgMCwgMjU1KTtcIlxyXG4gKlxyXG4gKiAgICAgXCJ7MH0gKyB7MX0gPSB7Mn1cIi5mb3JtYXQoNSwgOCwgKDUrOCkpOyAvLyA9PiBcIjUgKyA4ID0gMTNcIlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIOODkeODqeODoeODvOOCv+OBqOOBquOCi+OCquODluOCuOOCp+OCr+ODiFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IOeUn+aIkOOBl+OBn+aWh+Wtl+WIl1xyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0KGFyZykge1xyXG4vLyBTdHJpbmcucHJvdG90eXBlLiRtZXRob2QoXCJmb3JtYXRcIiwgZnVuY3Rpb24oYXJnKSB7XHJcbiAgLy8g572u5o+b44OV44Kh44Oz44KvXHJcbiAgdmFyIHJlcF9mbiA9IHVuZGVmaW5lZDtcclxuICBcclxuICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7loLTlkIhcclxuICBpZiAodHlwZW9mIGFyZyA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAvKiogQGlnbm9yZSAqL1xyXG4gICAgcmVwX2ZuID0gZnVuY3Rpb24obSwgaykge1xyXG4gICAgICBpZiAoYXJnW2tdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ1trXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgLy8g6KSH5pWw5byV5pWw44Gg44Gj44Gf5aC05ZCIXHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIC8qKiBAaWdub3JlICovXHJcbiAgICByZXBfZm4gPSBmdW5jdGlvbihtLCBrKSB7XHJcbiAgICAgIHZhciB2ID0gYXJnc1sgcGFyc2VJbnQoaykgXTtcclxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gdGhpcy5yZXBsYWNlKCAvXFx7KFxcdyspXFx9L2csIHJlcF9mbiApO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZWFjaFxyXG4gKiDlkITmloflrZfjgpLpoIbnlarjgavmuKHjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIHN0ciA9ICdhYmMnO1xyXG4gKiAgICAgc3RyLmVhY2goZnVuY3Rpb24oY2gpIHtcclxuICogICAgICAgY29uc29sZS5sb2coY2gpO1xyXG4gKiAgICAgfSk7XHJcbiAqICAgICAvLyA9PiAnYSdcclxuICogICAgIC8vICAgICdiJ1xyXG4gKiAgICAgLy8gICAgJ2MnXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCkXHJcbiAqL1xyXG5mdW5jdGlvbiBlYWNoJDEoKSB7XHJcbi8vIFN0cmluZy5wcm90b3R5cGUuJG1ldGhvZChcImVhY2hcIiwgZnVuY3Rpb24oKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkNvbG9yXHJcbiAqIOOCq+ODqeODvOOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgQ29sb3Ige1xyXG5cclxuICAvLyAvKiogUuWApCAqL1xyXG4gIC8vIHI6IDI1NSxcclxuICAvLyAvKiogR+WApCAqL1xyXG4gIC8vIGc6IDI1NSxcclxuICAvLyAvKiogQuWApCAqL1xyXG4gIC8vIGI6IDI1NSxcclxuICAvLyAvKiogQeWApCAqL1xyXG4gIC8vIGE6IDEuMCxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5pyf5YyWXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IociwgZywgYiwgYSkge1xyXG4gICAgdGhpcy5yID0gMjU1O1xyXG4gICAgdGhpcy5nID0gMjU1O1xyXG4gICAgdGhpcy5iID0gMjU1O1xyXG4gICAgdGhpcy5hID0gMS4wO1xyXG4gICAgdGhpcy5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCu+ODg+OCv+ODvC5cclxuICAgKi9cclxuICBzZXQociwgZywgYiwgYSkge1xyXG4gICAgdGhpcy5yID0gcjtcclxuICAgIHRoaXMuZyA9IGc7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gICAgdGhpcy5hID0gKGEgIT09IHVuZGVmaW5lZCkgPyBhIDogMS4wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmlbDlgKTjgavjgojjgovjgrvjg4Pjgr/jg7wuXHJcbiAgICovXHJcbiAgc2V0RnJvbU51bWJlcihyLCBnLCBiLCBhKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcbiAgICB0aGlzLmEgPSAoYSAhPT0gdW5kZWZpbmVkKSA/IGEgOiAxLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmFjeWIl+OBq+OCiOOCi+OCu+ODg+OCv+ODvFxyXG4gICAqL1xyXG4gIHNldEZyb21BcnJheShhcnIpIHtcclxuICAgIHJldHVybiB0aGlzLnNldC5hcHBseSh0aGlzLCBhcnIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kq44OW44K444Kn44Kv44OI44Gr44KI44KL44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0RnJvbU9iamVjdChvYmopIHtcclxuICAgIHJldHVybiB0aGlzLnNldChvYmouciwgb2JqLmcsIG9iai5iLCBvYmouYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmloflrZfliJfjgavjgojjgovjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRGcm9tU3RyaW5nKHN0cikge1xyXG4gICAgdmFyIGNvbG9yID0gQ29sb3Iuc3RyaW5nVG9OdW1iZXIoc3RyKTtcclxuICAgIHJldHVybiB0aGlzLnNldChjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjb2xvclszXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDos6LjgYTjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRTbWFydCgpIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbMF07XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgIHRoaXMuc2V0KGFyZ3VtZW50cy5yLCBhcmd1bWVudHMuZywgYXJndW1lbnRzLmIsIGFyZ3VtZW50cy5hKTtcclxuICAgIH0gZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGhpcy5zZXRGcm9tQXJyYXkoYXJnKTtcclxuICAgIH0gZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIHRoaXMuc2V0RnJvbU9iamVjdChhcmcpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMuc2V0RnJvbVN0cmluZyhhcmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDU1Mg55SoIDE26YCy5pWw5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZUFzSGV4KCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwiI3swfXsxfXsyfVwiLFxyXG4gICAgLy8gcmV0dXJuIFwiI3swfXsxfXsyfVwiLmZvcm1hdChcclxuICAgICAgdGhpcy5yLnRvU3RyaW5nKDE2KS5wYWRkaW5nKDIsICcwJyksXHJcbiAgICAgIHRoaXMuZy50b1N0cmluZygxNikucGFkZGluZygyLCAnMCcpLFxyXG4gICAgICB0aGlzLmIudG9TdHJpbmcoMTYpLnBhZGRpbmcoMiwgJzAnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggUkdC5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZUFzUkdCKCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwicmdiKHtyfSx7Z30se2J9KVwiLCB7XHJcbiAgICAvLyByZXR1cm4gXCJyZ2Ioe3J9LHtnfSx7Yn0pXCIuZm9ybWF0KHtcclxuICAgICAgcjogfn50aGlzLnIsXHJcbiAgICAgIGc6IH5+dGhpcy5nLFxyXG4gICAgICBiOiB+fnRoaXMuYlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCBSR0JB5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZUFzUkdCQSgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInJnYmEoe3J9LHtnfSx7Yn0se2F9KVwiLCB7XHJcbiAgICAvLyByZXR1cm4gXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIi5mb3JtYXQoe1xyXG4gICAgICByOiB+fnRoaXMucixcclxuICAgICAgZzogfn50aGlzLmcsXHJcbiAgICAgIGI6IH5+dGhpcy5iLFxyXG4gICAgICBhOiB0aGlzLmFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCBSR0JBIOaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGUoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIiwge1xyXG4gICAgLy8gcmV0dXJuIFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIuZm9ybWF0KHtcclxuICAgICAgcjogfn50aGlzLnIsXHJcbiAgICAgIGc6IH5+dGhpcy5nLFxyXG4gICAgICBiOiB+fnRoaXMuYixcclxuICAgICAgYTogdGhpcy5hXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWVtYmVyIHBoaW5hLnV0aWwuQ29sb3JcclxuICAgKiBAbWV0aG9kIHN0clRvTnVtXHJcbiAgICovXHJcbiAgc3RhdGljIHN0clRvTnVtKHN0cikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9OdW1iZXIoc3RyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdHJpbmdUb051bWJlcihzdHIpIHtcclxuICAgIHZhciB2YWx1ZSA9IG51bGw7XHJcbiAgICB2YXIgdHlwZSA9IG51bGw7XHJcblxyXG4gICAgaWYgKHN0clswXSA9PT0gJyMnKSB7XHJcbiAgICAgIHR5cGUgPSAoc3RyLmxlbmd0aCA9PSA0KSA/IFwiaGV4MTExXCIgOiBcImhleDIyMlwiO1xyXG4gICAgfSBlbHNlIGlmIChzdHJbMF0gPT09ICdyJyAmJiBzdHJbMV0gPT09ICdnJyAmJiBzdHJbMl0gPT09ICdiJykge1xyXG4gICAgICB0eXBlID0gKHN0clszXSA9PSAnYScpID8gXCJyZ2JhXCIgOiBcInJnYlwiO1xyXG4gICAgfSBlbHNlIGlmIChzdHJbMF0gPT09ICdoJyAmJiBzdHJbMV0gPT09ICdzJyAmJiBzdHJbMl0gPT09ICdsJykge1xyXG4gICAgICB0eXBlID0gKHN0clszXSA9PSAnYScpID8gXCJoc2xhXCIgOiBcImhzbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgIHZhciBtYXRjaF9zZXQgPSBNQVRDSF9TRVRfTElTVFt0eXBlXTtcclxuICAgICAgdmFyIG0gPSBzdHIubWF0Y2gobWF0Y2hfc2V0LnJlZyk7XHJcbiAgICAgIHZhbHVlID0gbWF0Y2hfc2V0LmV4ZWMobSk7XHJcbiAgICB9IGVsc2UgaWYgKENvbG9yLkNPTE9SX0xJU1Rbc3RyXSkge1xyXG4gICAgICB2YWx1ZSA9IENvbG9yLkNPTE9SX0xJU1Rbc3RyXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbCDjgpIgcmdiIOOBq+WkieaPm1xyXG4gICAqL1xyXG4gIHN0YXRpYyBIU0x0b1JHQihoLCBzLCBsKSB7XHJcbiAgICB2YXIgciwgZywgYjtcclxuXHJcbiAgICBoICU9IDM2MDtcclxuICAgIGggKz0gMzYwO1xyXG4gICAgaCAlPSAzNjA7XHJcbiAgICBzICo9IDAuMDE7XHJcbiAgICBsICo9IDAuMDE7XHJcblxyXG4gICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgdmFyIGwgPSBNYXRoLnJvdW5kKGwgKiAyNTUpO1xyXG4gICAgICByZXR1cm4gW2wsIGwsIGxdO1xyXG4gICAgfVxyXG4gICAgdmFyIG0yID0gKGwgPCAwLjUpID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgdmFyIG0xID0gbCAqIDIgLSBtMjtcclxuXHJcbiAgICAvLyByZWRcclxuICAgIHZhciB0ZW1wID0gKGggKyAxMjApICUgMzYwO1xyXG4gICAgaWYgKHRlbXAgPCA2MCkge1xyXG4gICAgICByID0gbTEgKyAobTIgLSBtMSkgKiB0ZW1wIC8gNjA7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAxODApIHtcclxuICAgICAgciA9IG0yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgciA9IG0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdyZWVuXHJcbiAgICB0ZW1wID0gaDtcclxuICAgIGlmICh0ZW1wIDwgNjApIHtcclxuICAgICAgZyA9IG0xICsgKG0yIC0gbTEpICogdGVtcCAvIDYwO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMTgwKSB7XHJcbiAgICAgIGcgPSBtMjtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDI0MCkge1xyXG4gICAgICBnID0gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gdGVtcCkgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGcgPSBtMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBibHVlXHJcbiAgICB0ZW1wID0gKChoIC0gMTIwKSArIDM2MCkgJSAzNjA7XHJcbiAgICBpZiAodGVtcCA8IDYwKSB7XHJcbiAgICAgIGIgPSBtMSArIChtMiAtIG0xKSAqIHRlbXAgLyA2MDtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDE4MCkge1xyXG4gICAgICBiID0gbTI7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAyNDApIHtcclxuICAgICAgYiA9IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIHRlbXApIC8gNjA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiID0gbTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgcGFyc2VJbnQociAqIDI1NSksXHJcbiAgICAgIHBhcnNlSW50KGcgKiAyNTUpLFxyXG4gICAgICBwYXJzZUludChiICogMjU1KVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsYSDjgpIgcmdiYSDjgavlpInmj5tcclxuICAgKi9cclxuICBzdGF0aWMgSFNMQXRvUkdCQShoLCBzLCBsLCBhKSB7XHJcbiAgICB2YXIgdGVtcCA9IENvbG9yLkhTTHRvUkdCKGgsIHMsIGwpO1xyXG4gICAgdGVtcFszXSA9IGE7XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogcmdiIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZVJHQihyLCBnLCBiKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiByZ2JhIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZVJHQkEociwgZywgYiwgYSkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZUhTTChoLCBzLCBsKSB7XHJcbiAgICByZXR1cm4gXCJoc2woXCIgKyBoICsgXCIsXCIgKyBzICsgXCIlLFwiICsgbCArIFwiJSlcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsYSDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVIU0xBKGgsIHMsIGwsIGEpIHtcclxuICAgIHJldHVybiBcImhzbGEoXCIgKyBoICsgXCIsXCIgKyBzICsgXCIlLFwiICsgbCArIFwiJSxcIiArIGEgKyBcIilcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICog44Kr44Op44O844Oq44K544OIXHJcbiAqL1xyXG5Db2xvci5DT0xPUl9MSVNUID0ge1xyXG4gIC8qKiBAcHJvcGVydHkgYmxhY2sgKi9cclxuICBcImJsYWNrXCI6IFsweDAwLCAweDAwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHNpbHZlciAqL1xyXG4gIFwic2lsdmVyXCI6IFsweGMwLCAweGMwLCAweGMwXSxcclxuICAvKiogQHByb3BlcnR5IGdyYXkgKi9cclxuICBcImdyYXlcIjogWzB4ODAsIDB4ODAsIDB4ODBdLFxyXG4gIC8qKiBAcHJvcGVydHkgd2hpdGUgKi9cclxuICBcIndoaXRlXCI6IFsweGZmLCAweGZmLCAweGZmXSxcclxuICAvKiogQHByb3BlcnR5IG1hcm9vbiAqL1xyXG4gIFwibWFyb29uXCI6IFsweDgwLCAweDAwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHJlZCAqL1xyXG4gIFwicmVkXCI6IFsweGZmLCAweDAwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHB1cnBsZSAqL1xyXG4gIFwicHVycGxlXCI6IFsweDgwLCAweDAwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IGZ1Y2hzaWEgKi9cclxuICBcImZ1Y2hzaWFcIjogWzB4ZmYsIDB4MDAsIDB4ZmZdLFxyXG4gIC8qKiBAcHJvcGVydHkgZ3JlZW4gKi9cclxuICBcImdyZWVuXCI6IFsweDAwLCAweDgwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IGxpbWUgKi9cclxuICBcImxpbWVcIjogWzB4MDAsIDB4ZmYsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgb2xpdmUgKi9cclxuICBcIm9saXZlXCI6IFsweDgwLCAweDgwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHllbGxvdyAqL1xyXG4gIFwieWVsbG93XCI6IFsweGZmLCAweGZmLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IG5hdnkgKi9cclxuICBcIm5hdnlcIjogWzB4MDAsIDB4MDAsIDB4ODBdLFxyXG4gIC8qKiBAcHJvcGVydHkgYmx1ZSAqL1xyXG4gIFwiYmx1ZVwiOiBbMHgwMCwgMHgwMCwgMHhmZl0sXHJcbiAgLyoqIEBwcm9wZXJ0eSB0ZWFsICovXHJcbiAgXCJ0ZWFsXCI6IFsweDAwLCAweDgwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IGFxdWEgKi9cclxuICBcImFxdWFcIjogWzB4MDAsIDB4ZmYsIDB4ZmZdLFxyXG59O1xyXG5cclxuXHJcbnZhciBNQVRDSF9TRVRfTElTVCA9IHtcclxuICBcImhleDExMVwiOiB7XHJcbiAgICByZWc6IC9eIyhcXHd7MX0pKFxcd3sxfSkoXFx3ezF9KSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0gKyBtWzFdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSArIG1bMl0sIDE2KSxcclxuICAgICAgICBwYXJzZUludChtWzNdICsgbVszXSwgMTYpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImhleDIyMlwiOiB7XHJcbiAgICByZWc6IC9eIyhcXHd7Mn0pKFxcd3syfSkoXFx3ezJ9KSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0sIDE2KSxcclxuICAgICAgICBwYXJzZUludChtWzJdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSwgMTYpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInJnYlwiOiB7XHJcbiAgICByZWc6IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0pLFxyXG4gICAgICAgIHBhcnNlSW50KG1bMl0pLFxyXG4gICAgICAgIHBhcnNlSW50KG1bM10pXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInJnYmFcIjoge1xyXG4gICAgcmVnOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezF9KFxcLnsxfVxcZCspPylcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdKSxcclxuICAgICAgICBwYXJzZUludChtWzJdKSxcclxuICAgICAgICBwYXJzZUludChtWzNdKSxcclxuICAgICAgICBwYXJzZUZsb2F0KG1bNF0pXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImhzbFwiOiB7XHJcbiAgICByZWc6IC9eaHNsXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSUsXFxzKihcXGR7MSwzfSklXFwpJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBDb2xvci5IU0x0b1JHQihtWzFdLCBtWzJdLCBtWzNdKTtcclxuICAgIH1cclxuICB9LFxyXG4gIFwiaHNsYVwiOiB7XHJcbiAgICByZWc6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MX0oXFwuezF9XFxkKyk/KVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gQ29sb3IuSFNMQXRvUkdCQShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyDnm6Poppbjgqrjg5bjgrjjgqfjgq/jg4hcclxuLy8gcmVnaXN0ZXIg44GnIGtleSDjgpLnmbvpjLIgKOODh+ODleOCqeODq+ODiOWApOOCguS4gOe3kuOBq++8nylcclxuLy8gZXZlbnQgZGlzcGF0Y2hlciDjgpLntpnmib9cclxuLy8gZXZlbnQgZGlzcGF0Y2hlciDjgaPjgaYgdXRpbCDjgZjjgoPjga3vvJ9cclxuLy8gcmVnaXN0ZXIg44Gn55m76Yyy44GX44Gf5YCk44KS5aSJ5pu044GX44Gf44KJIGNoYW5nZSDjgqTjg5njg7Pjg4jjgYzotbDjgotcclxuXHJcblxyXG4vLyDlkI3liY3lgJnoo5xcclxuLy8gIG1pZGRsZW1hbijku7Lnq4vkuropXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkNoYW5nZURpc3BhdGNoZXJcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIENoYW5nZURpc3BhdGNoZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5fb2JzZXJ2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlcihrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgZm9ySW4uY2FsbChvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gb2JqLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKGtleSwgdmFsdWUpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgdGVtcEtleSA9ICdfXycgKyBrZXk7XHJcbiAgICAgIHRoaXNbdGVtcEtleV0gPSBkZWZhdWx0VmFsdWU7XHJcbiAgICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAgIC8vIHRoaXMuYWNjZXNzb3Ioa2V5LCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzW3RlbXBLZXldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICB0aGlzW3RlbXBLZXldID0gdjtcclxuICAgICAgICAgIGlmICh0aGlzLl9vYnNlcnZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhcmUoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBvYnNlcnZlKCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZSA9IHRydWU7XHJcbiAgfVxyXG4gIHVub2JzZXJ2ZSgpIHtcclxuICAgIHRoaXMuX29ic2VydmUgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5BamF4XHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgQWpheCB7XHJcblxyXG4gIHN0YXRpYyByZXF1ZXN0KG9wdGlvbnMpIHtcclxuICAgIHZhciBkYXRhID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgQWpheC5kZWZhdWx0cyk7XHJcbiAgICAvLyB2YXIgZGF0YSA9ICh7fSkuJHNhZmUob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XHJcblxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIGZsb3cgPSBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeGhyLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB4aHIub3BlbihkYXRhLnR5cGUsIGRhdGEudXJsKTtcclxuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IGRhdGEucmVzcG9uc2VUeXBlO1xyXG4gICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmbG93O1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0KHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgcG9zdCh1cmwpIHtcclxuICAgIHJldHVybiBBamF4LnJlcXVlc3Qoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBwdXQodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ1BVVCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBkZWwodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIFxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJvZiBBamF4XHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG5BamF4LmRlZmF1bHRzID0ge1xyXG4gIHR5cGU6ICdHRVQnLFxyXG4gIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICByZXNwb25zZVR5cGU6ICdqc29uJyxcclxuICBkYXRhOiBudWxsLFxyXG4gIHVybDogJycsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5OdW1iZXJcclxuICogIyDmi6HlvLXjgZfjgZ8gTnVtYmVyIOOCr+ODqeOCuVxyXG4gKiDmlbDlgKTjgpLmibHjgYYgTnVtYmVyIOOCr+ODqeOCueOCkuaLoeW8teOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHRpbWVzXHJcbiAqIDAg44GL44KJ6Ieq5YiG6Ieq6Lqr44Gu5pWwLTHjgb7jgafjgIHjgqvjgqbjg7Pjgr/jgpLjgqTjg7Pjgq/jg6rjg6Hjg7Pjg4jjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFtdO1xyXG4gKiAgICAgKDUpLnRpbWVzKGZ1bmN0aW9uKGkpe1xyXG4gKiAgICAgICBhcnIucHVzaChpKTtcclxuICogICAgIH0pOyAvLyA9PiBbMCwgMSwgMiwgMywgNF1cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSDplqLmlbDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/oh6rliIboh6rouqvjgIJcclxuICovXHJcbmZ1bmN0aW9uIHRpbWVzKGZuLCBzZWxmKSB7XHJcbi8vIE51bWJlci5wcm90b3R5cGUuJG1ldGhvZChcInRpbWVzXCIsICBmdW5jdGlvbihmbiwgc2VsZikge1xyXG4gIHNlbGYgPSBzZWxmIHx8IHRoaXM7XHJcbiAgZm9yICh2YXIgaT0wOyBpPHRoaXM7ICsraSkge1xyXG4gICAgZm4uY2FsbChzZWxmLCBpLCB0aGlzKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHN0ZXBcclxuICog6Ieq5YiG6Ieq6Lqr44Gu5YCk44GL44KJ5oyH5a6a44GX44Gf5pWw44G+44Gn44CB44Kr44Km44Oz44K/44KS5aKX5YiG44GV44Gb44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOS4iumZkOWApOOChOWil+WIhuWApOOBryBmbG9hdCDlnovjgpLmjIflrprjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIHZhciBhcnIgPSBbXTtcclxuICogICAgICgyLjQpLnN0ZXAoNS4zLCAwLjgsIGZ1bmN0aW9uKG4pIHtcclxuICogICAgICAgYXJyLnB1c2gobik7XHJcbiAqICAgICAgfSk7IC8vID0+IFsyLjQsIDMuMiwgNC4wLCA0LjhdXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBsaW1pdCDjgqvjgqbjg7Pjgr/jga7kuIrpmZDlgKRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAg44Kr44Km44Oz44K/44KS5aKX5YiG44GZ44KL6YePXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOOCs+ODvOODq+ODkOODg+OCr+mWouaVsOOAguW8leaVsOOBq+OCq+OCpuODs+OCv+OBjOa4oeOBleOCjOOCi+OAglxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10g6Zai5pWw5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv6Ieq5YiG6Ieq6Lqr44CCXHJcbiAqL1xyXG5mdW5jdGlvbiBzdGVwKGxpbWl0LCBzdGVwLCBmbiwgc2VsZikge1xyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJzdGVwXCIsICBmdW5jdGlvbihsaW1pdCwgc3RlcCwgZm4sIHNlbGYpIHtcclxuICBzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG4gIGZvciAodmFyIGk9K3RoaXM7IGk8PWxpbWl0OyBpKz1zdGVwKSB7XHJcbiAgICBmbi5jYWxsKHNlbGYsIGksIHRoaXMpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufVxyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJ0b0RlZ3JlZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuICh0aGlzKk1hdGguUkFEX1RPX0RFRyk7IH0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgdG9SYWRpYW5cclxuICog5bqm44KS44Op44K444Ki44Oz44Gr5aSJ5o+b44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICAoMTgwKS50b1JhZGlhbigpOyAvLyA9PiAzLjE0MTU5MjY1MzU4OTc5M1xyXG4gKlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeOCuOOCouODs1xyXG4gKi9cclxuZnVuY3Rpb24gdG9SYWRpYW4oKSB7IHJldHVybiB0aGlzICogREVHX1RPX1JBRDsgfVxyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJ0b1JhZGlhblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMqTWF0aC5ERUdfVE9fUkFEOyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5WZWN0b3IyXHJcbiAqICMgMuasoeWFg+ODmeOCr+ODiOODq+OCr+ODqeOCuVxyXG4gKiAy5qyh5YWD44Gu44OZ44Kv44OI44Or44KE5bqn5qiZ44KS6KGo44GZ44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBWZWN0b3IyIHtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogeOW6p+aomVxyXG4gIC8vICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgLy8gICovXHJcbiAgLy8geCA9IDBcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogeeW6p+aomVxyXG4gIC8vICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgLy8gICovXHJcbiAgLy8geSA9IDBcclxuXHJcbiAgLyoqXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbeD0wXSDjg5njgq/jg4jjg6vjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3k9MF0g44OZ44Kv44OI44Or44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSAy5qyh5YWD44OZ44Kv44OI44Or44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeD0wLCB5PTApIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHYuY2xvbmUoKTtcclxuICAgKiAgICAgdjIueCA9PSB2Lng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBlcXVhbHNcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBjOOBmeOBueOBpiBvdGhlciDjgajnrYnjgZfjgYTjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig1LCA2KTtcclxuICAgKiAgICAgdjEuZXF1YWxzKHYyKTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDmr5TovIPjgZnjgovlr77osaHjga7jg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDnrYnjgZfjgYTjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBlcXVhbHModikge1xyXG4gICAgcmV0dXJuICh0aGlzLnggPT09IHYueCAmJiB0aGlzLnkgPT09IHYueSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBruWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdi5zZXQoNSwgNik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDjg5njgq/jg4jjg6vjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDjg5njgq/jg4jjg6vjga4geSDluqfmqJlcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWGjeioreWumuW+jOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHNldCh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgasgb3RoZXIg44KS5Yqg44GI44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNSwgNik7XHJcbiAgICogICAgIHYxLmFkZCh2Mik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDgsIDEwKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Yqg566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgYWRkKHYpIHtcclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHN1YlxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBi+OCiSBvdGhlciDjgpLmuJvjgZjjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOODmeOCr+ODiOODq+OBjOW6p+aomeOCkuihqOOBmeWgtOWQiOOBr+OAgeaMh+WumuOBl+OBn+W6p+aomeOBi+OCieiHquWIhuiHqui6q+OBuOOBqOWQkeOBi+OBhuODmeOCr+ODiOODq+OBjOW+l+OCieOCjOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCA1KTtcclxuICAgKiAgICAgdjEuc3ViKHYyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoMiwgLTEpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDmuJvnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdWIodikge1xyXG4gICAgdGhpcy54IC09IHYueDtcclxuICAgIHRoaXMueSAtPSB2Lnk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44Gr5pWw5YCkIG4g44KS5LmX44GY44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubXVsKDMpIC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDksIDEyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4g5LmX44GY44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDkuZfnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBtdWwobikge1xyXG4gICAgdGhpcy54ICo9IG47XHJcbiAgICB0aGlzLnkgKj0gbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXZcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjgpLmlbDlgKQgbiDjgaflibLjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDgsIDE2KTtcclxuICAgKiAgICAgdjEuZGl2KDIpIC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDQsIDgpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbiDlibLjgovlgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOmZpOeul+OBl+OBn+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGRpdihuKSB7XHJcbiAgICAvL2NvbnNvbGUuYXNzZXJ0KG4gIT0gMCwgXCIwIGRpdmlzaW9uISFcIik7XHJcbiAgICBuID0gbiB8fCAwLjAxO1xyXG4gICAgdGhpcy54IC89IG47XHJcbiAgICB0aGlzLnkgLz0gbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5lZ2F0ZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBruato+iyoOOCkuWPjei7ouOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogdGhpcyDjgajlkIzjgZjlpKfjgY3jgZXjgafmlrnlkJHjgYzpgIbjga7jg5njgq/jg4jjg6vjgYzlvpfjgonjgozjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIC00KTtcclxuICAgKiAgICAgdjEubmVnYXRlKCkgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoLTMsIDQpXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWPjei7ouW+jOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIG5lZ2F0ZSgpIHtcclxuICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICB0aGlzLnkgPSAtdGhpcy55O1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZG90XHJcbiAgICogb3RoZXIg44Go44Gu5YaF56mN44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmipXlvbHjg5njgq/jg4jjg6vjgpLmsYLjgoHjgZ/jgorjgIHpoZ7kvLzluqbjga7oqIjnrpfjgavliKnnlKjjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMiwgMik7XHJcbiAgICogICAgIHYxLmRvdCh2MikgLy8gPT4gMlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5YaF56mNXHJcbiAgICovXHJcbiAgZG90KHYpIHtcclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNyb3NzXHJcbiAgICogb3RoZXIg44Go44Gu5aSW56mN77yI44Kv44Ot44K556mN77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44Gn44Gu5aSW56mN44Gv44OZ44Kv44OI44Or44Gn44Gq44GP5pWw5YCk44KS6L+U44GZ44GT44Go44Gr5rOo5oSP44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogb3RoZXIg44KI44KKIHRoaXMg5pmC6KiI5Zue44KK44Gr44GC44KL44Go44GN44Gv5q2j44Gu5YCk44Gr44Gq44KK44CB5Y+N5pmC6KiI5Zue44KK44Gr44GC44KL44Go44GN44Gv6LKg44Gu5YCk44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYxLmNyb3NzKHYyKSAvLyA9PiAtOFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5aSW56mNXHJcbiAgICovXHJcbiAgY3Jvc3Modikge1xyXG4gICAgcmV0dXJuICh0aGlzLngqdi55KSAtICh0aGlzLnkqdi54KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbGVuZ3RoXHJcbiAgICogdGhpcyDjga7lpKfjgY3jgZXjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIChtZW1vKSBtYWduaXR1ZGUg44Gj44Gm5ZCN5YmN44Gu5pa544GM6Imv44GE44GL44KCLiDmpJzoqI7kuK0uXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubGVuZ3RoKCk7IC8vID0+IDVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu5aSn44GN44GVXHJcbiAgICovXHJcbiAgbGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbGVuZ3RoU3F1YXJlZFxyXG4gICAqIHRoaXMg44Gu5aSn44GN44GV44Gu6Ieq5LmX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBDIyDjga7lkI3liY3jgpLlvJXnlKjvvIhvciBsZW5ndGhTcXVhcmUgb3IgbGVuZ3RoU3FydO+8iVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLmxlbmd0aFNxdWFyZWQoKTsgLy8gPT4gMjVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu5aSn44GN44GV44Gu6Ieq5LmXXHJcbiAgICovXHJcbiAgbGVuZ3RoU3F1YXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVxyXG4gICAqIHRoaXMg44GoIG90aGVyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6LjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgdjEuZGlzdGFuY2UodjIpOyAvLyA9PiA1XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6ZuiXHJcbiAgICovXHJcbiAgZGlzdGFuY2Uodikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3codGhpcy54LXYueCwgMikgKyBNYXRoLnBvdyh0aGlzLnktdi55LCAyKSApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpc3RhbmNlU3F1YXJlZFxyXG4gICAqIHRoaXMg44GoIG90aGVyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6Ljga7oh6rkuZfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgdjEuZGlzdGFuY2VTcXVhcmVkKHYyKTsgLy8gPT4gMjVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6Ljga7oh6rkuZdcclxuICAgKi9cclxuICBkaXN0YW5jZVNxdWFyZWQodikge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KHRoaXMueC12LngsIDIpICsgTWF0aC5wb3codGhpcy55LXYueSwgMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDop5LluqbjgYwgbWluIOOBi+OCiSBtYXgg44Gu56+E5Zuy77yI5bqm5Y2Y5L2N77yJ44Gn5aSn44GN44GV44GMIGxlbiDjga7jg6njg7Pjg4Djg6Djgarjg5njgq/jg4jjg6vjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMigpLnJhbmRvbSg5MCwgMTgwLCAxKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKC0wLjUsIDAuODY2KSDjgarjgalcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPTBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4i+mZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4PTM2MF0g6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Gu5LiK6ZmQ5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDjg6njg7Pjg4Djg6DljJbjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICByYW5kb20obWluLCBtYXgsIGxlbikge1xyXG4gICAgdmFyIGRlZ3JlZSA9IFJhbmRvbS5yYW5kZmxvYXQobWluIHx8IDAsIG1heCB8fCAzNjApO1xyXG4gICAgdmFyIHJhZCA9IGRlZ3JlZSpNYXRoLkRFR19UT19SQUQ7XHJcbiAgICB2YXIgbGVuID0gbGVuIHx8IDE7XHJcblxyXG4gICAgdGhpcy54ID0gTWF0aC5jb3MocmFkKSpsZW47XHJcbiAgICB0aGlzLnkgPSBNYXRoLnNpbihyYWQpKmxlbjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBub3JtYWxpemVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgpLmraPopo/ljJbjgZfjgb7jgZnjgILjgZnjgarjgo/jgaHjgIF0aGlzIOOBqOWQjOOBmOaWueWQkeOBp+Wkp+OBjeOBleOBjDHjga7jg5njgq/jg4jjg6vjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5ub3JtYWxpemUoKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDAuNiwgMC44KVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDmraPopo/ljJbjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBub3JtYWxpemUoKSB7XHJcbiAgICB0aGlzLmRpdih0aGlzLmxlbmd0aCgpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b1N0cmluZ1xyXG4gICAqIHRoaXMg44KSIEpTT04g5b2i5byP44Gn6KGo54++44GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEudG9TdHJpbmcoKTsgLy8gPT4gXCJ7eDozLCB5OjR9XCJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gSlNPTiDmloflrZfliJdcclxuICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInt4Ont4fSwgeTp7eX19XCIsIHRoaXMpO1xyXG4gICAgLy8gcmV0dXJuIFwie3g6e3h9LCB5Ont5fX1cIi5mb3JtYXQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldERpcmVjdGlvblxyXG4gICAqIHRoaXMg44Gu44GK44GK44KI44Gd44Gu5pa55ZCR44KS56S644GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEuZ2V0RGlyZWN0aW9uKCk7IC8vID0+IFwidXBcIlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSDmlrnlkJHjgpLooajjgZnmloflrZfliJfvvIhcInVwXCIsIFwicmlnaHRcIiwgXCJkb3duXCIsIFwibGVmdFwi77yJXHJcbiAgICovXHJcbiAgZ2V0RGlyZWN0aW9uKCkge1xyXG4gICAgdmFyIGFuZ2xlID0gdGhpcy50b0RlZ3JlZSgpO1xyXG4gICAgaWYgKGFuZ2xlIDwgNDUpIHtcclxuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAxMzUpIHtcclxuICAgICAgcmV0dXJuIFwiZG93blwiO1xyXG4gICAgfSBlbHNlIGlmIChhbmdsZSA8IDIyNSkge1xyXG4gICAgICByZXR1cm4gXCJsZWZ0XCJcclxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAzMTUpIHtcclxuICAgICAgcmV0dXJuIFwidXBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvQW5nbGVcclxuICAgKiB0aGlzIOOBqCB4IOi7uOOBqOOBruinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDApO1xyXG4gICAqICAgICB2MS50b0FuZ2xlKCk7IC8vID0+IDMuMTQxNTlcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJXHJcbiAgICovXHJcbiAgdG9BbmdsZSgpIHtcclxuICAgIHZhciByYWQgPSBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIHJldHVybiAocmFkICsgTWF0aC5QSSoyKSUoTWF0aC5QSSoyKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmcm9tQW5nbGVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJ44Go5aSn44GN44GV44KS5oyH5a6a44GX44Gm44OZ44Kv44OI44Or44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIoKS5mcm9tQW5nbGUoTWF0aC5QSS80LCAyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDEuNDE0MiwgMS40MTQyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZCDop5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvIlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGZyb21BbmdsZShyYWQsIGxlbikge1xyXG4gICAgbGVuID0gbGVuIHx8IDE7XHJcbiAgICB0aGlzLnggPSBNYXRoLmNvcyhyYWQpKmxlbjtcclxuICAgIHRoaXMueSA9IE1hdGguc2luKHJhZCkqbGVuO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9EZWdyZWVcclxuICAgKiB0aGlzIOOBqCB4IOi7uOOBqOOBruinkuW6pu+8iOW6puWNmOS9je+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDIpO1xyXG4gICAqICAgICB2MS50b0FuZ2xlKCk7IC8vID0+IDEzNVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg5njgq/jg4jjg6vjga7op5LluqbvvIjluqbljZjkvY3vvIlcclxuICAgKi9cclxuICB0b0RlZ3JlZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvQW5nbGUoKS50b0RlZ3JlZSgpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZyb21EZWdyZWVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Go5aSn44GN44GV44KS5oyH5a6a44GX44Gm44OZ44Kv44OI44Or44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIoKS5mcm9tRGVncmVlKDYwLCAyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDEuNzMyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlZyDop5LluqbvvIjluqbljZjkvY3vvIlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGZyb21EZWdyZWUoZGVnLCBsZW4pIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmZyb21BbmdsZShkZWcudG9SYWRpYW4oKSwgbGVuKTtcclxuICAgIHJldHVybiB0aGlzLmZyb21BbmdsZSh0b1JhZGlhbi5jYWxsKGRlZyksIGxlbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJvdGF0ZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOCkuWbnui7ouOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYxLnJvdGF0ZShNYXRoLlBJLzIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoLTEsIDMpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZCDop5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvIlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2NlbnRlcj0oMCwgMCldIOWbnui7ouOBruS4reW/g+W6p+aomVxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5Zue6Lui5b6M44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgcm90YXRlKHJhZCwgY2VudGVyKSB7XHJcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdmFyIHgxID0gdGhpcy54IC0gY2VudGVyLng7XHJcbiAgICB2YXIgeTEgPSB0aGlzLnkgLSBjZW50ZXIueTtcclxuICAgIHZhciB4MiA9IHgxICogTWF0aC5jb3MocmFkKSAtIHkxICogTWF0aC5zaW4ocmFkKTtcclxuICAgIHZhciB5MiA9IHgxICogTWF0aC5zaW4ocmFkKSArIHkxICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuc2V0KCBjZW50ZXIueCArIHgyLCBjZW50ZXIueSArIHkyICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1pblxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44Gu5ZCE6KaB57Sg44Gr5a++44GX44CB44KI44KK5bCP44GV44GE5pa544KS6KaB57Sg44Go44GZ44KL5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubWluKHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigtMywgMSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG1pbihhLCBiKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIChhLnggPCBiLngpID8gYS54IDogYi54LFxyXG4gICAgICAoYS55IDwgYi55KSA/IGEueSA6IGIueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWF4XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdjEg44GoIHYyIOOBruWQhOimgee0oOOBq+WvvuOBl+OAgeOCiOOCiuWkp+OBjeOBhOaWueOCkuimgee0oOOBqOOBmeOCi+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm1heCh2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoMywgMik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG1heChhLCBiKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIChhLnggPiBiLngpID8gYS54IDogYi54LFxyXG4gICAgICAoYS55ID4gYi55KSA/IGEueSA6IGIueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqyB2MiDjgpLliqDnrpfjgZfjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMywgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5hZGQodjEsIHYyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDAsIDMpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWKoOeul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGQobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihsaHMueCtyaHMueCwgbGhzLnkrcmhzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIHN1YlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBi+OCiSB2MiDjgpLmuJvjgZjjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOODmeOCr+ODiOODq+OBjOW6p+aomeOCkuihqOOBmeWgtOWQiOOAgTLjgaTnm67jga7luqfmqJnjgYvjgokx44Gk55uu44Gu5bqn5qiZ44G444Go5ZCR44GL44GG44OZ44Kv44OI44Or44GM5b6X44KJ44KM44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMig2LCAtMSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5rib566X44GX44Gf57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIHN1YihsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKGxocy54LXJocy54LCBsaHMueS1yaHMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjga7lkITopoHntKDjgasgbiDjgpLkuZfjgZjjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubXVsKHYxLCAyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDYsIDIpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbiDkuZfjgZjjgovlgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOS5l+eul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtdWwodiwgbikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHYueCpuLCB2Lnkqbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGl2XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjga7lkITopoHntKDjgpIgbiDjgaflibLjgaPjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZGl2KHYxLCAyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDEuNSwgMC41KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG4g5Ymy44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDpmaTnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgZGl2KHYsIG4pIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2Lngvbiwgdi55L24pO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5lZ2F0ZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5Y+N6Lui44GX44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm5lZ2F0ZSgpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIC0xKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlj43ou6LjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgbmVnYXRlKHYpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigtdi54LCAtdi55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkb3RcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgaggdjIg44Gu5YaF56mN44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZG90KHYxLCB2MikgLy8gPT4gMlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWGheepjVxyXG4gICAqL1xyXG4gIHN0YXRpYyBkb3QobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBsaHMueCAqIHJocy54ICsgbGhzLnkgKiByaHMueTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcm9zc1xyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBqCB2MiDjga7lpJbnqY3vvIjjgq/jg63jgrnnqY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6vjgafjga7lpJbnqY3jga/jg5njgq/jg4jjg6vjgafjgarjgY/mlbDlgKTjgpLov5TjgZnjgZPjgajjgavms6jmhI/jgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiAx44Gk55uu44Gu44OZ44Kv44OI44Or44GMMuOBpOebruOBruODmeOCr+ODiOODq+OCiOOCiuaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+ato+OBruWApOOBq+OBquOCiuOAgeWPjeaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+iyoOOBruWApOOBq+OBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuY3Jvc3ModjEsIHYyKTsgLy8gPT4gLThcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDlpJbnqY1cclxuICAgKi9cclxuICBzdGF0aWMgY3Jvc3MobGhzLCByaHMpIHtcclxuICAgIHJldHVybiAobGhzLngqcmhzLnkpIC0gKGxocy55KnJocy54KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBrui3nembouOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZGlzdGFuY2UodjEsIHYyKTsgLy8gPT4gNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6JcclxuICAgKi9cclxuICBzdGF0aWMgZGlzdGFuY2UobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KGxocy54LXJocy54LCAyKSArIE1hdGgucG93KGxocy55LXJocy55LCAyKSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVNxdWFyZWRcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6Ljga7oh6rkuZfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRpc3RhbmNlU3F1YXJlZCh2MSwgdjIpOyAvLyA9PiAyNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6Ljga7oh6rkuZdcclxuICAgKi9cclxuICBzdGF0aWMgZGlzdGFuY2VTcXVhcmVkKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3cobGhzLngtcmhzLngsIDIpICsgTWF0aC5wb3cobGhzLnktcmhzLnksIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtYW5oYXR0YW5EaXN0YW5jZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBruODnuODs+ODj+ODg+OCv+ODs+i3nembou+8iOi7uOOBq+W5s+ihjOOBq+mAsuOCgOOBqOOBjeOBruacgOefrei3nembou+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubWFuaGF0dGFuRGlzdGFuY2UodjEsIHYyKTsgLy8gPT4gN1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7jg57jg7Pjg4/jg4Pjgr/jg7Pot53pm6JcclxuICAgKi9cclxuICBzdGF0aWMgbWFuaGF0dGFuRGlzdGFuY2UobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhsaHMueC1yaHMueCkgKyBNYXRoLmFicyhsaHMueS1yaHMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgbm9ybWFsXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga7jgIF2MiDjgYvjgokgdjEg44Gr5ZCR44GL44GG44OZ44Kv44OI44Or44Gr5a++44GZ44KL5rOV57ea44OZ44Kv44OI44Or44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5ub3JtYWwodjEsIHYyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIC0zKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOazlee3muODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBub3JtYWwoYSwgYikge1xyXG4gICAgdmFyIHRlbXAgPSBWZWN0b3IyLnN1YihhLCBiKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoLXRlbXAueSwgdGVtcC54KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVmbGVjdFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5aOB44G444Gu5YWl5bCE44OZ44Kv44OI44Or44Go44GX44Gm44CB5aOB44Gr5Y+N5bCE44GX44Gf6Zqb44Gu44OZ44Kv44OI44Or77yI5Y+N5bCE44OZ44Kv44OI44Or77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDlo4Hjga7lkJHjgY3jga/ms5Xnt5rjg5njgq/jg4jjg6sgbm9ybWFsIOOBq+OCiOOBo+OBpuihqOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgMyk7XHJcbiAgICogICAgIG5vcm1hbCA9IHBoaW5hLmdlb20uVmVjdG9yMigtMSwgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5yZWZsZWN0KHYxLCBub3JtYWwpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMiwgNSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOWFpeWwhOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBub3JtYWwg5aOB44Gu5rOV57ea44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlj43lsITjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgcmVmbGVjdCh2LCBub3JtYWwpIHtcclxuICAgIHZhciBsZW4gPSBWZWN0b3IyLmRvdCh2LCBub3JtYWwpO1xyXG4gICAgdmFyIHRlbXA9IFZlY3RvcjIubXVsKG5vcm1hbCwgMipsZW4pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gVmVjdG9yMi5zdWIodiwgdGVtcCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgd2FsbFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5aOB44G444Gu5YWl5bCE44OZ44Kv44OI44Or44Go44GX44Gm44CB5aOB44Gr5rK/44Gj44Gf44OZ44Kv44OI44Or77yI5aOB44Ga44KK44Kv44OI44Or77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDlo4Hjga7lkJHjgY3jga/ms5Xnt5rjg5njgq/jg4jjg6sgbm9ybWFsIOOBq+OCiOOBo+OBpuihqOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgMyk7XHJcbiAgICogICAgIG5vcm1hbCA9IHBoaW5hLmdlb20uVmVjdG9yMigtMSwgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi53YWxsKHYxLCBub3JtYWwpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMywgNClcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOWFpeWwhOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBub3JtYWwg5aOB44Gu5rOV57ea44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlo4HjgZrjgorjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgd2FsbCh2LCBub3JtYWwpIHtcclxuICAgIHZhciBsZW4gPSBWZWN0b3IyLmRvdCh2LCBub3JtYWwpO1xyXG4gICAgdmFyIHRlbXA9IFZlY3RvcjIubXVsKG5vcm1hbCwgbGVuKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIFZlY3RvcjIuc3ViKHYsIHRlbXApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGxlcnBcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuWqkuS7i+WkieaVsCB0IOOBp+e3muW9ouijnOmWk+OBl+OBvuOBmeOAglxyXG4gICAqIHQ9MC41IOOBpyB2MSDjgaggdjIg44Gu5Lit6ZaT44OZ44Kv44OI44Or44KS5rGC44KB44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5sZXJwKHYxLCB2MiwgMC41KTsgLy8gPT4gKDIuNSwgNClcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmxlcnAodjEsIHYyLCAwKTsgLy8gPT4gKDEsIDIpXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5sZXJwKHYxLCB2MiwgMSk7IC8vID0+ICg0LCA2KVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHQg5aqS5LuL5aSJ5pWwXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDnt5rlvaLoo5zplpPjga7ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgbGVycChhLCBiLCB0KSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIGEueCArIChiLngtYS54KSp0LFxyXG4gICAgICBhLnkgKyAoYi55LWEueSkqdFxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzbGVycFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDoo5zplpPvvIjmnKrlrp/oo4XvvIlcclxuICAgKi9cclxuICBzdGF0aWMgc2xlcnAobGhzLCByaHMsIHQpIHtcclxuICAgICAgLy8gVE9ETzpcclxuICAgICAgLy8gY29zLi4uXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDop5LluqbjgYwgbWluIOOBi+OCiSBtYXgg44Gu56+E5Zuy77yI5bqm5Y2Y5L2N77yJ44Gn5aSn44GN44GV44GMIGxlbiDjga7jg6njg7Pjg4Djg6Djgarjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5yYW5kb20oOTAsIDE4MCwgMSk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigtMC41LCAwLjg2Nikg44Gq44GpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbj0wXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIvpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heD0zNjBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4iumZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuPTFdIOWkp+OBjeOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiBzdGF0aWMgcmFuZG9tKG1pbiwgbWF4LCBsZW4pIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigpLnJhbmRvbShtaW4sIG1heCkubXVsKGxlbnx8MSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gWkVSTyDjgrzjg63jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLlpFUk8gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gTEVGVCDlt6bmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLkxFRlQgPSBuZXcgVmVjdG9yMigtMSwgMCk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IFJJR0hUIOWPs+aWueWQkeOBruWNmOS9jeODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuUklHSFQ9IG5ldyBWZWN0b3IyKDEsIDApO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBVUCDkuIrmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLlVQICAgPSBuZXcgVmVjdG9yMigwLCAtMSk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IERPV04g5LiL5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5ET1dOID0gbmV3IFZlY3RvcjIoMCwgMSk7XHJcblxyXG4vLyBpbXBvcnQgeyBSZWN0IH0gZnJvbSBcIi4vcmVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLkNpcmNsZVxyXG4gKiAjIOWGhumgmOWfn+OCkuihqOOBmeOCr+ODqeOCuVxyXG4gKiDjgq3jg6Pjg7Pjg5DjgrnkuIrjga7lhobpoJjln5/jgpLmibHjgYbjgq/jg6njgrnjgafjgZnjgIJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBDaXJjbGUge1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0geFxyXG4gICAqIOWGhuOBruS4reW/g+OBriB4IOW6p+aomVxyXG4gICAqL1xyXG4gIC8vIHg6IDAsXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHlcclxuICAgKiDlhobjga7kuK3lv4Pjga4geSDluqfmqJlcclxuICAgKi9cclxuICAvLyB5OiAwLFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByYWRpdXNcclxuICAgKiDlhobjga7ljYrlvoRcclxuICAgKi9cclxuICAvLyByYWRpdXM6IDMyLFxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGluaXRcclxuICAgKiDlhobpoJjln5/jga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMyLCA2NCwgMTI4KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOWGhuOBruS4reW/g+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOWGhuOBruS4reW/g+OBriB5IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXMg5Y2K5b6EXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5SZWN0fSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAzMjtcclxuICAgIHRoaXMuc2V0KHgsIHksIHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzIsIDY0LCAxMjgpO1xyXG4gICAqICAgICBjaXJjbGUuc2V0KDEwMCwgMjAwLCAzMik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDlhobjgpLlm7LjgYbnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDlhobjgpLlm7LjgYbnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIOWNiuW+hFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uQ2lyY2xlfSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBzZXQoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlVG9cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5YaG6aCY5Z+f44KS5bqn5qiZICh4LCB5KSDjgavnp7vli5XjgZfjgb7jgZnjgIIoeCwgeSkg44Gv5YaG44Gu5Lit5b+D44KS6KGo44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMDAsIDMwMCwgNDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gMjYwXHJcbiAgICogICAgIGNpcmNsZS5tb3ZlVG8oMTAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gNjBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLleWFiOOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLleWFiOOBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlQnlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5YaG6aCY5Z+f44KSICh4LCB5KSDjgaDjgZHnp7vli5XjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMwMCwgMzAwLCA0MCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiAyNjBcclxuICAgKiAgICAgY2lyY2xlLm1vdmVCeSgxMDAsIDEwMCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiA0NjBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLlemHj+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLlemHj+OBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLnggKz0geDtcclxuICAgIHRoaXMueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNvbnRhaW5zXHJcbiAgICog5bqn5qiZICh4LCB5KSDjgYzlhobpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMwMCwgMzAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUuY29udGFpbnMoMzUwLCAzNTApOyAvLyA9PiAgdHJ1ZVxyXG4gICAqICAgICBjaXJjbGUuY29udGFpbnMoMzUwLCA0MDApOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5Yik5a6a44GZ44KL5a++6LGh44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5Yik5a6a44GZ44KL5a++6LGh44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5oyH5a6a44GX44Gf5bqn5qiZ44GM5YaG6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgdmFyIGxlblggPSB0aGlzLngteDtcclxuICAgIHZhciBsZW5ZID0gdGhpcy55LXk7XHJcbiAgICB2YXIgbGVuU3F1YXJlZCA9IChsZW5YKmxlblgpKyhsZW5ZKmxlblkpO1xyXG5cclxuICAgIHJldHVybiBsZW5TcXVhcmVkIDw9IHRoaXMucmFkaXVzKnRoaXMucmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSg1MCwgMTAwLCA0MCk7XHJcbiAgICogICAgIGNpcmNsZTIgPSBjaXJjbGUuY2xvbmUoKTtcclxuICAgKiAgICAgY2lyY2xlMi54ID09IGNpcmNsZS54OyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+WGhumgmOWfn1xyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBDaXJjbGUodGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9SZWN0XHJcbiAgICog5YaG44Gr5aSW5o6l44GZ44KL5q2j5pa55b2i44KS6KGo44GZ55+p5b2i6aCY5Z+f44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSg1MCwgMTAwLCA0MCk7XHJcbiAgICogICAgIHJlY3QgPSBjaXJjbGUudG9SZWN0KCk7XHJcbiAgICogICAgIHJlY3QueDsgLy8gPT4gMTBcclxuICAgKiAgICAgcmVjdC55OyAvLyA9PiA2MFxyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiA4MFxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/nn6nlvaLpoJjln59cclxuICAgKi9cclxuICB0b1JlY3QoKSB7XHJcbiAgICAvLyDlvqrnkrDlj4Lnhaflm57pgb/jga7jgZ/jgoHjgIFSZWN05YG044Gn5a6a576pXHJcbiAgICAvLyB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcclxuICAgIC8vIHJldHVybiBuZXcgUmVjdCh0aGlzLnggLSB0aGlzLnJhZGl1cywgdGhpcy55IC0gdGhpcy5yYWRpdXMsIHNpemUsIHNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0FycmF5XHJcbiAgICogdGhpcyDjga7lkITlgKTjgpLopoHntKDjgajjgZnjgovphY3liJfjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDUwLCAxMDAsIDQwKTtcclxuICAgKiAgICAgcmVjdC50b0FycmF5KCk7IC8vID0+IFs1MCwgMTAwLCA0MF1cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcltdfSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICAgKi9cclxuICB0b0FycmF5KCkge1xyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXNdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlZnRcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlt6bnq6/jgYvjgonlhobjga7lt6bnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMjAwLCAzMDAsIDEwMCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiAxMDBcclxuICAgKiAgICAgY2lyY2xlLnRvcDsgLy8gPT4gMjAwXHJcbiAgICogICAgIGNpcmNsZS5yaWdodDsgLy8gPT4gMzAwXHJcbiAgICogICAgIGNpcmNsZS5ib3R0b207IC8vID0+IDQwMFxyXG4gICAqL1xyXG4gIGdldCBsZWZ0KCkgICB7IHJldHVybiB0aGlzLnggLSB0aGlzLnJhZGl1czsgfVxyXG4gIHNldCBsZWZ0KHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3BcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIrnq6/jgYvjgonlhobjga7kuIrnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCB0b3AoKSAgIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IHRvcCh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gcmlnaHRcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlj7Pnq6/jgYvjgonlhobjga7lj7Pnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCByaWdodCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgcmlnaHQodikgIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGJvdHRvbVxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOOCreODo+ODs+ODkOOCueS4i+err+OBi+OCieWGhuOBruS4i+err+OBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IGJvdHRvbSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgYm90dG9tKHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gc2l6ZVxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOWGhuOBruebtOW+hFxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHNpemUoKSAgIHsgcmV0dXJuIHRoaXMucmFkaXVzKjI7IH1cclxuICBzZXQgc2l6ZSh2KSAge1xyXG4gICAgLy8gVE9ETzog5qSc6KiO5LitXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uUmVjdFxyXG4gKiAjIOefqeW9oumgmOWfn+OCkuihqOOBmeOCr+ODqeOCuVxyXG4gKiDjgq3jg6Pjg7Pjg5DjgrnkuIrjga7nn6nlvaLpoJjln5/jgpLmibHjgYbjgq/jg6njgrnjgafjgZnjgIJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBSZWN0IHtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IHhcclxuICAvLyAgKiDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAvLyAgKi9cclxuICAvLyB4OiAwLFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB5XHJcbiAgLy8gICog55+p5b2i44Gu5bem5LiK6aCC54K544GuIHkg5bqn5qiZXHJcbiAgLy8gICovXHJcbiAgLy8geTogMCxcclxuICAvLyAvKipcclxuICAvLyAgKiBAcHJvcGVydHkge051bWJlcn0gd2lkdGhcclxuICAvLyAgKiDnn6nlvaLjga7luYVcclxuICAvLyAgKi9cclxuICAvLyB3aWR0aDogMzIsXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IGhpZ2h0XHJcbiAgLy8gICog55+p5b2i44Gu6auY44GVXHJcbiAgLy8gICovXHJcbiAgLy8gaGVpZ2h0OiAzMixcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbml0XHJcbiAgICog55+p5b2i6aCY5Z+f44Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg55+p5b2i44Gu5bem5LiK6aCC54K544GuIHkg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQg6auY44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5SZWN0fSDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSAzMjtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XHJcbiAgICB0aGlzLnNldCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS5YaN6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0LnNldCgwLCAxNiwgMzIsIDY0KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOefqeW9ouOBruW3puS4iumggueCueOBriB5IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IOmrmOOBlVxyXG4gICAqL1xyXG4gIHNldCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlVG9cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44KS5bqn5qiZICh4LCB5KSDjgavnp7vli5XjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICogICAgIHJlY3QuY2VudGVyWDsgLy8gPT4gMjRcclxuICAgKiAgICAgcmVjdC5tb3ZlVG8oMCwgMCk7XHJcbiAgICogICAgIHJlY3QuY2VudGVyWDsgLy8gPT4gMTZcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLleWFiOOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLleWFiOOBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlQnlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44KSICh4LCB5KSDjgaDjgZHnp7vli5XjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICogICAgIHJlY3QubW92ZUJ5KDEwLCAtMTApO1xyXG4gICAqICAgICByZWN0Lng7IC8vID0+IDE4XHJcbiAgICogICAgIHJlY3QueTsgLy8gPT4gNlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg56e75YuV6YeP44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg56e75YuV6YeP44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgbW92ZUJ5KHgsIHkpIHtcclxuICAgIHRoaXMueCArPSB4O1xyXG4gICAgdGhpcy55ICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0U2l6c2VcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44Gu5bmF44Go6auY44GV44KS5aSJ5pu044GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0LnNldFNpemUoMTAsIDIwKTtcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gMTBcclxuICAgKiAgICAgcmVjdC5oZWlnaHQ7IC8vID0+IDIwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGgg5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCDpq5jjgZVcclxuICAgKi9cclxuICBzZXRTaXplKHcsIGgpIHtcclxuICAgIHRoaXMud2lkdGggPSB3O1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHBhZGRpbmdcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44Gu5Lit44Gr44OR44OH44Kj44Oz44Kw6aCY5Z+f44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDnn6nlvaLpoJjln5/oh6rkvZPjga7jgrXjgqTjgrrjga/jg5Hjg4fjgqPjg7PjgrDpoJjln5/jga7liIbjgaDjgZHlsI/jgZXjgY/jgarjgorjgb7jgZnjgIIgIFxyXG4gICAqIOW5heOBruaMh+WumuaWueazleOBryBDU1Mg44GuIHBhZGRpbmcg5oyH5a6a44Go5ZCM44GY44KI44GG44Gr5pmC6KiI5Zue44KK44Gn44GZ44CCICBcclxuICAgKiDlvJXmlbDjgYwx44Gk44Gu5aC05ZCI44Gv5LiK5LiL5bem5Y+z44Gu5YCk44CB5byV5pWw44GMMuOBpOOBruWgtOWQiOOBr+S4iuS4i+OBqOW3puWPs+OBruWApOOAgeW8leaVsOOBjO+8k+OBpOOBruWgtOWQiOOBr+S4iuOAgeW3puWPs+OAgeS4i+OBruWApOOBqOino+mHiOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg1MCwgMTAwLCAxNTAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QucGFkZGluZygxMCk7XHJcbiAgICogICAgIHJlY3QueDsgLy8gPT4gNjBcclxuICAgKiAgICAgcmVjdC55OyAvLyA9PiAxMTBcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gMTMwXHJcbiAgICogICAgIHJlY3QuaGVpZ2h0OyAvLyA9PiAxODBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3Ag5LiK6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IOWPs+i+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20g5LiL6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQg5bem6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICovXHJcbiAgcGFkZGluZyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcclxuICAgIC8vIGNzcyDjga4gcGFkZGluZyDjgavlkIjjgo/jgZvjgabmmYLoqIjlm57jgorjgavjg5Hjg6njg6Hjg7zjgr/oqr/mlbRcclxuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdG9wID0gcmlnaHQgPSBib3R0b20gPSBsZWZ0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgdG9wICAgICA9IGJvdHRvbSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICByaWdodCAgID0gbGVmdCAgID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdG9wICAgICA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICByaWdodCAgID0gbGVmdCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICBib3R0b20gID0gYXJndW1lbnRzWzJdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnggKz0gbGVmdDtcclxuICAgIHRoaXMueSArPSB0b3A7XHJcbiAgICB0aGlzLndpZHRoIC09IGxlZnQrcmlnaHQ7XHJcbiAgICB0aGlzLmhlaWdodC09IHRvcCArYm90dG9tO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY29udGFpbnNcclxuICAgKiDluqfmqJkgKHgsIHkpIOOBjCDnn6nlvaLpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoNTAsIDEwMCwgMTUwLCAyMDApO1xyXG4gICAqICAgICByZWN0LmNvbnRhaW5zKDM1LCA2OCk7IC8vID0+ICB0cnVlXHJcbiAgICogICAgIHJlY3QuY29udGFpbnMoMjAwLCA2OCk7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDliKTlrprjgZnjgovlr77osaHjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDliKTlrprjgZnjgovlr77osaHjga4geSDluqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmjIflrprjgZfjgZ/luqfmqJnjgYznn6nlvaLpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5sZWZ0IDw9IHggJiYgeCA8PSB0aGlzLnJpZ2h0ICYmIHRoaXMudG9wIDw9IHkgJiYgeSA8PSB0aGlzLmJvdHRvbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg1MCwgMTAwLCAxNTAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QyID0gcmVjdC5jbG9uZSgpO1xyXG4gICAqICAgICByZWN0Mi54ID09IHJlY3QueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/nn6nlvaLpoJjln59cclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0NpcmNsZVxyXG4gICAqIOefqeW9oumgmOWfn+WGheOBq+WPjuOBvuOCi+acgOWkp+OBruWGhumgmOWfn+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgzMiwgNjQsIDEwMCwgMjAwKTtcclxuICAgKiAgICAgY2lyY2xlID0gcmVjdC50b0NpcmNsZSgpO1xyXG4gICAqICAgICBjaXJjbGUueDsgLy8gPT4gODJcclxuICAgKiAgICAgY2lyY2xlLnk7IC8vID0+IDE2NFxyXG4gICAqICAgICBjaXJjbGUucmFkaXVzOyAvLyA9PiA1MFxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/lhobpoJjln59cclxuICAgKi9cclxuICB0b0NpcmNsZSgpIHtcclxuICAgIHZhciByYWRpdXMgPSAoKHRoaXMud2lkdGggPCB0aGlzLmhlaWdodCkgPyB0aGlzLndpZHRoIDogdGhpcy5oZWlnaHQpLzI7XHJcbiAgICByZXR1cm4gbmV3IENpcmNsZSh0aGlzLmNlbnRlclgsIHRoaXMuY2VudGVyWSwgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9BcnJheVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS6KaB57Sg44Go44GZ44KL6YWN5YiX44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDMyLCA2NCwgMTAwLCAyMDApO1xyXG4gICAqICAgICByZWN0LnRvQXJyYXkoKTsgLy8gPT4gWzMyLCA2NCwgMTAwLCAyMDBdXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g55Sf5oiQ44GX44Gf6YWN5YiXXHJcbiAgICovXHJcbiAgdG9BcnJheSgpIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBsZWZ0XHJcbiAgICog44Kt44Oj44Oz44OQ44K55bem56uv44GL44KJ55+p5b2i6aCY5Z+f44Gu5bem6L6644G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiBsZWZ0IOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBruW5he+8iHdpZHRo77yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDMyLCA2NCwgMTAwLCAyMDApO1xyXG4gICAqICAgICByZWN0LmxlZnQ7IC8vID0+IDMyXHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDEwMFxyXG4gICAqICAgICByZWN0LnJpZ2h0OyAvLyA9PiAxMzJcclxuICAgKiAgICAgXHJcbiAgICogICAgIHJlY3QubGVmdCA9IDQyO1xyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiA5MFxyXG4gICAqL1xyXG4gIGdldCBsZWZ0KCkgICB7IHJldHVybiB0aGlzLng7IH1cclxuICBzZXQgbGVmdCh2KSAgeyB0aGlzLndpZHRoIC09IHYtdGhpcy54OyB0aGlzLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3BcclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIrnq6/jgYvjgonnn6nlvaLpoJjln5/jga7kuIrovrrjgb7jgafjga7kvY3nva5cclxuICAgKlxyXG4gICAqIHRvcCDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7pq5jjgZXvvIhoZWlnaHTvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKi9cclxuICBnZXQgdG9wKCkgICB7IHJldHVybiB0aGlzLnk7IH1cclxuICBzZXQgdG9wKHYpICB7IHRoaXMuaGVpZ2h0IC09IHYtdGhpcy55OyB0aGlzLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByaWdodFxyXG4gICAqIOOCreODo+ODs+ODkOOCueW3puerr+OBi+OCieefqeW9oumgmOWfn+OBruWPs+i+uuOBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICogcmlnaHQg44KS5aSJ5pu044GZ44KL44Go55+p5b2i6aCY5Z+f44Gu5bmF77yId2lkdGjvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKi9cclxuICBnZXQgcmlnaHQoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7IH1cclxuICBzZXQgcmlnaHQodikgIHsgdGhpcy53aWR0aCArPSB2LXRoaXMucmlnaHQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGJvdHRvbVxyXG4gICAqIOOCreODo+ODs+ODkOOCueS4iuerr+OBi+OCieefqeW9oumgmOWfn+OBruS4i+i+uuOBvuOBp+OBruS9jee9rlxyXG4gICAqXHJcbiAgICogYm90dG9tIOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBrumrmOOBle+8iGhlaWdodO+8ieOBjOiHquWLleeahOOBq+iqv+aVtOOBleOCjOOBvuOBmeOAglxyXG4gICAqL1xyXG4gIGdldCBib3R0b20oKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0OyB9XHJcbiAgc2V0IGJvdHRvbSh2KSAgeyB0aGlzLmhlaWdodCArPSB2LXRoaXMuYm90dG9tOyB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNlbnRlclhcclxuICAgKiDnn6nlvaLpoJjln5/jga4geCDluqfmqJlcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJYKCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cclxuICBzZXQgY2VudGVyWCh2KSAge1xyXG4gICAgLy8gVE9ETzog5qSc6KiO5LitXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjZW50ZXJZXHJcbiAgICog55+p5b2i6aCY5Z+f44GuIHkg5bqn5qiZXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgY2VudGVyWSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxyXG4gIHNldCBjZW50ZXJZKHYpICB7XHJcbiAgICAvLyBUT0RPOiDmpJzoqI7kuK1cclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2lyY2xlLnRvUmVjdFxyXG4gKiDlvqrnkrDlj4LnhafjgpLlm57pgb/jgZnjgovjgZ/jgoHjgIHjgZPjgZPjgaflrprnvqlcclxuICovXHJcbkNpcmNsZS5wcm90b3R5cGUudG9SZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHNpemUgPSB0aGlzLnNpemU7XHJcbiAgcmV0dXJuIG5ldyBSZWN0KHRoaXMueCAtIHRoaXMucmFkaXVzLCB0aGlzLnkgLSB0aGlzLnJhZGl1cywgc2l6ZSwgc2l6ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uTWF0cml4MzNcclxuICogIyDooYzliJfjgq/jg6njgrlcclxuICogM3gz44Gu6KGM5YiX44KS6KGo44GZ44Kv44Op44K544Gn44GZ44CCXHJcbiAqIFxyXG4gKiA8cHJlPlxyXG4gKiB8IG0wMCBtMDEgbTAyIHxcclxuICogfCBtMTAgbTExIG0xMiB8XHJcbiAqIHwgbTIwIG0yMSBtMjIgfFxyXG4gKiA8L3ByZT5cclxuICovXHJcbmNsYXNzIE1hdHJpeDMzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbml0XHJcbiAgICog44Oe44OI44Oq44OD44Kv44K544Kv44Op44K544Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiDlvJXmlbDjga8gbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMiDjga7poIbjgavmjIflrprjgZfjgb7jgZnjgIJcclxuICAgKiDlvJXmlbDjgYw55YCL44Gr5rqA44Gf44Gq44GE5aC05ZCI44Gv5Y2Y5L2N6KGM5YiX44KS55Sf5oiQ44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoKTtcclxuICAgKiAgICAgbWF0MS5tMDAgKyBtYXQyLm0wMDsgLy8gPT4gMlxyXG4gICAqICAgICBtYXQxLm0wMSAtIG1hdDIubTAxOyAvLyA9PiAyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlci4uLn0gbTAwLCBtMDEsLi4uIOWQhOimgee0oOOBruWApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOihjOWIl+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gOSkge1xyXG4gICAgICB0aGlzLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaWRlbnRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44Gu5YCk44KS5YaN6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoKTtcclxuICAgKiAgICAgbWF0Mi5zZXQoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDEudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyLi4ufSBtMDAsIG0wMSwuLi4g5ZCE6KaB57Sg44Gu5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6KGM5YiX44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgc2V0KG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcclxuICAgIHRoaXMubTAwID0gbTAwOyB0aGlzLm0wMSA9IG0wMTsgdGhpcy5tMDIgPSBtMDI7XHJcbiAgICB0aGlzLm0xMCA9IG0xMDsgdGhpcy5tMTEgPSBtMTE7IHRoaXMubTEyID0gbTEyO1xyXG4gICAgdGhpcy5tMjAgPSBtMjA7IHRoaXMubTIxID0gbTIxOyB0aGlzLm0yMiA9IG0yMjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaWRlbnRpdHlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgpLljZjkvY3ooYzliJfjgavjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygpO1xyXG4gICAqICAgICBtYXQxLmlkZW50aXR5KCkudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOWNmOS9jeihjOWIl1xyXG4gICAqL1xyXG4gIGlkZW50aXR5KCkge1xyXG4gICAgdGhpcy5tMDAgPSAxOyB0aGlzLm0wMSA9IDA7IHRoaXMubTAyID0gMDtcclxuICAgIHRoaXMubTEwID0gMDsgdGhpcy5tMTEgPSAxOyB0aGlzLm0xMiA9IDA7XHJcbiAgICB0aGlzLm0yMCA9IDA7IHRoaXMubTIxID0gMDsgdGhpcy5tMjIgPSAxO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICogdGhpcyDjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gbWF0MS5jbG9uZSgpO1xyXG4gICAqICAgICBtYXQxLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICogICAgIG1hdDEgPT0gbWF0MjsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOihjOWIl+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXgzMyhcclxuICAgICAgdGhpcy5tMDAsIHRoaXMubTAxLCB0aGlzLm0wMixcclxuICAgICAgdGhpcy5tMTAsIHRoaXMubTExLCB0aGlzLm0xMixcclxuICAgICAgdGhpcy5tMjAsIHRoaXMubTIxLCB0aGlzLm0yMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGV0ZXJtaW5hbnRcclxuICAgKiDooYzliJflvI/jgpLov5TjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0yLCAwLCAtMSwgMywgMSwgNCwgMiwgMSk7XHJcbiAgICogICAgIG1hdDEuZGV0ZXJtaW5hbnQoKTsgLy8gPT4gLTEwXHJcbiAgICogICAgIG1hdDEuaWRlbnRpdHkoKS5kZXRlcm1pbmFudCgpOyAvLyA9PiAxXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOihjOWIl+W8j1xyXG4gICAqL1xyXG4gIGRldGVybWluYW50KCkge1xyXG4gICAgdmFyIG0wMCA9IHRoaXMubTAwOyB2YXIgbTAxID0gdGhpcy5tMDE7IHZhciBtMDIgPSB0aGlzLm0wMjtcclxuICAgIHZhciBtMTAgPSB0aGlzLm0xMDsgdmFyIG0xMSA9IHRoaXMubTExOyB2YXIgbTEyID0gdGhpcy5tMTI7XHJcbiAgICB2YXIgbTIwID0gdGhpcy5tMjA7IHZhciBtMjEgPSB0aGlzLm0yMTsgdmFyIG0yMiA9IHRoaXMubTIyO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbTAwKm0xMSptMjIgKyBtMTAqbTIxKm0wMiArIG0wMSptMTIqbTIwIC0gbTAyKm0xMSptMjAgLSBtMDEqbTEwKm0yMiAtIG0xMiptMjEqbTAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0cmFuc3Bvc2VcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6Lui572u6KGM5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgNCwgNywgMiwgNSwgOCwgMywgNiwgOSk7XHJcbiAgICogICAgIG1hdDEudHJhbnNwb3NlKCkudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOi7oue9ruihjOWIl1xyXG4gICAqL1xyXG4gIHRyYW5zcG9zZSgpIHtcclxuICAgIHZhciBzd2FwID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICB2YXIgdGVtcCA9IHRoaXNbYV07XHJcbiAgICAgIHRoaXNbYV0gPSB0aGlzW2JdO1xyXG4gICAgICB0aGlzW2JdID0gdGVtcDtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBzd2FwKCdtMDEnLCAnbTEwJyk7XHJcbiAgICBzd2FwKCdtMDInLCAnbTIwJyk7XHJcbiAgICBzd2FwKCdtMTInLCAnbTIxJyk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbnZlcnRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6YCG6KGM5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygwLCAtMSwgMSwgLTEsIDQsIC0yLCAxLCAxLCAxKTtcclxuICAgKiAgICAgbWF0MiA9IG1hdDEuY2xvbmUoKS5pbnZlcnQoKTtcclxuICAgKiAgICAgbWF0MyA9IG1hdDEuY2xvbmUoKS5tdWx0aXBseShtYXQyKTtcclxuICAgKiAgICAgbWF0My50b1N0cmluZygpID09IHBoaW5hLmdlb20uTWF0cml4MzMuSURFTlRJVFkudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6YCG6KGM5YiXXHJcbiAgICovXHJcbiAgaW52ZXJ0KCkge1xyXG4gICAgdmFyIG0wMCA9IHRoaXMubTAwOyB2YXIgbTAxID0gdGhpcy5tMDE7IHZhciBtMDIgPSB0aGlzLm0wMjtcclxuICAgIHZhciBtMTAgPSB0aGlzLm0xMDsgdmFyIG0xMSA9IHRoaXMubTExOyB2YXIgbTEyID0gdGhpcy5tMTI7XHJcbiAgICB2YXIgbTIwID0gdGhpcy5tMjA7IHZhciBtMjEgPSB0aGlzLm0yMTsgdmFyIG0yMiA9IHRoaXMubTIyO1xyXG5cclxuICAgIHZhciBkZXQgPSB0aGlzLmRldGVybWluYW50KCk7XHJcblxyXG4gICAgLy8gfG0wMCwgbTAxLCBtMDJ8XHJcbiAgICAvLyB8bTEwLCBtMTEsIG0xMnxcclxuICAgIC8vIHxtMjAsIG0yMSwgbTIyfFxyXG4gICAgdGhpcy5tMDAgPSAobTExKm0yMi1tMTIqbTIxKS9kZXQ7XHJcbiAgICB0aGlzLm0wMSA9IChtMTAqbTIyLW0xMiptMjApL2RldCotMTtcclxuICAgIHRoaXMubTAyID0gKG0xMCptMjEtbTExKm0yMCkvZGV0O1xyXG4gICAgXHJcbiAgICB0aGlzLm0xMCA9IChtMDEqbTIyLW0wMiptMjEpL2RldCotMTtcclxuICAgIHRoaXMubTExID0gKG0wMCptMjItbTAyKm0yMCkvZGV0O1xyXG4gICAgdGhpcy5tMTIgPSAobTAwKm0yMS1tMDEqbTIwKS9kZXQqLTE7XHJcbiAgICBcclxuICAgIHRoaXMubTIwID0gKG0wMSptMTItbTAyKm0xMSkvZGV0O1xyXG4gICAgdGhpcy5tMjEgPSAobTAwKm0xMi1tMDIqbTEwKS9kZXQqLTE7XHJcbiAgICB0aGlzLm0yMiA9IChtMDAqbTExLW0wMSptMTApL2RldDtcclxuICAgIFxyXG4gICAgdGhpcy50cmFuc3Bvc2UoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtdWx0aXBseVxyXG4gICAqIHRoaXMg44GrIG90aGVyIOOCkuS5l+OBmOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTEsIDEsIC0xLCA0LCAtMiwgMSwgMSwgMSk7XHJcbiAgICogICAgIG1hdDIgPSBtYXQxLmNsb25lKCkuaW52ZXJ0KCk7XHJcbiAgICogICAgIG1hdDMgPSBtYXQxLmNsb25lKCkubXVsdGlwbHkobWF0Mik7XHJcbiAgICogICAgIG1hdDMudG9TdHJpbmcoKSA9PSBwaGluYS5nZW9tLk1hdHJpeDMzLklERU5USVRZLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5NYXRyaXgzM30gb3RoZXIg5LmX44GY44KL6KGM5YiXXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g5LmX566X57WQ5p6c44Gu6KGM5YiXXHJcbiAgICovXHJcbiAgbXVsdGlwbHkobWF0KSB7XHJcbiAgICB2YXIgdG0gPSB0aGlzLm07XHJcbiAgICB2YXIgb20gPSBtYXQubTtcclxuXHJcbiAgICB2YXIgYTAwID0gdGhpcy5tMDAsIGEwMSA9IHRoaXMubTAxLCBhMDIgPSB0aGlzLm0wMjtcclxuICAgIHZhciBhMTAgPSB0aGlzLm0xMCwgYTExID0gdGhpcy5tMTEsIGExMiA9IHRoaXMubTEyO1xyXG4gICAgdmFyIGEyMCA9IHRoaXMubTIwLCBhMjEgPSB0aGlzLm0yMSwgYTIyID0gdGhpcy5tMjI7XHJcbiAgICB2YXIgYjAwID0gbWF0Lm0wMCwgYjAxID0gbWF0Lm0wMSwgYjAyID0gbWF0Lm0wMjtcclxuICAgIHZhciBiMTAgPSBtYXQubTEwLCBiMTEgPSBtYXQubTExLCBiMTIgPSBtYXQubTEyO1xyXG4gICAgdmFyIGIyMCA9IG1hdC5tMjAsIGIyMSA9IG1hdC5tMjEsIGIyMiA9IG1hdC5tMjI7XHJcblxyXG4gICAgdGhpcy5tMDAgPSBhMDAqYjAwICsgYTAxKmIxMCArIGEwMipiMjA7XHJcbiAgICB0aGlzLm0wMSA9IGEwMCpiMDEgKyBhMDEqYjExICsgYTAyKmIyMTtcclxuICAgIHRoaXMubTAyID0gYTAwKmIwMiArIGEwMSpiMTIgKyBhMDIqYjIyO1xyXG5cclxuICAgIHRoaXMubTEwID0gYTEwKmIwMCArIGExMSpiMTAgKyBhMTIqYjIwO1xyXG4gICAgdGhpcy5tMTEgPSBhMTAqYjAxICsgYTExKmIxMSArIGExMipiMjE7XHJcbiAgICB0aGlzLm0xMiA9IGExMCpiMDIgKyBhMTEqYjEyICsgYTEyKmIyMjtcclxuXHJcbiAgICB0aGlzLm0yMCA9IGEyMCpiMDAgKyBhMjEqYjEwICsgYTIyKmIyMDtcclxuICAgIHRoaXMubTIxID0gYTIwKmIwMSArIGEyMSpiMTEgKyBhMjIqYjIxO1xyXG4gICAgdGhpcy5tMjIgPSBhMjAqYjAyICsgYTIxKmIxMiArIGEyMipiMjI7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtdWx0aXBseVZlY3RvcjJcclxuICAgKiB0aGlzIOOBqzLmrKHlhYPjg5njgq/jg4jjg6sgdiDjgpLkuZfjgZjjgb7jgZnjgIJcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44GvICh4LCB5LCAxKSDjgajjgZfjgabkuZfnrpfjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdCA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTEsIDEsIC0xLCA0LCAtMiwgMSwgMSwgMSk7XHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMiwgNClcclxuICAgKiAgICAgbWF0Lm11bHRpcGx5VmVjdG9yMih2KSAvLyA9PiB7eDogLTMsIHk6IDEyfVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg5LmX44GY44KL44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDkuZfnrpfntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBtdWx0aXBseVZlY3RvcjIodikge1xyXG4gICAgdmFyIHZ4ID0gdGhpcy5tMDAqdi54ICsgdGhpcy5tMDEqdi55ICsgdGhpcy5tMDI7XHJcbiAgICB2YXIgdnkgPSB0aGlzLm0xMCp2LnggKyB0aGlzLm0xMSp2LnkgKyB0aGlzLm0xMjtcclxuICAgIFxyXG4gICAgLy8gcmV0dXJuIHBoaW5hLmdlb20uVmVjdG9yMih2eCwgdnkpO1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZ4LCB2eSk7XHJcbiAgfVxyXG5cclxuICAvLyDooYxcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFJvd1xyXG4gICAqIHJvdyDnlarnm67jga7ooYzjgpLphY3liJfjgafov5TjgZfjgb7jgZnjgIJyb3cg44GMIDDjgIEx44CBMiDjga7jgYTjgZrjgozjgYvjgafjgarjgZHjgozjgbAgbnVsbCDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQxLmdldFJvdygwKTsgLy8gWzEsIDIsIDNdXHJcbiAgICogICAgIG1hdDEuZ2V0Um93KDEpOyAvLyBbNCwgNSwgNl1cclxuICAgKiAgICAgbWF0MS5nZXRSb3coOSk7IC8vIG51bGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7MC8xLzJ9IHJvdyDooYznlarlj7dcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g6KGM44KS6KGo44GZ6YWN5YiXXHJcbiAgICovXHJcbiAgZ2V0Um93KHJvdykge1xyXG4gICAgaWYgKCByb3cgPT09IDAgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAwLCB0aGlzLm0wMSwgdGhpcy5tMDIgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCByb3cgPT09IDEgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTEwLCB0aGlzLm0xMSwgdGhpcy5tMTIgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCByb3cgPT09IDIgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTIwLCB0aGlzLm0yMSwgdGhpcy5tMjIgXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q29sXHJcbiAgICogY29sIOeVquebruOBruWIl+OCkumFjeWIl+OBp+i/lOOBl+OBvuOBmeOAgmNvbCDjgYwgMOOAgTHjgIEyIOOBruOBhOOBmuOCjOOBi+OBp+OBquOBkeOCjOOBsCBudWxsIOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDEuZ2V0Q29sKDApOyAvLyBbMSwgNCwgN11cclxuICAgKiAgICAgbWF0MS5nZXRDb2woMSk7IC8vIFsyLCA1LCA4XVxyXG4gICAqICAgICBtYXQxLmdldFJvdygtMSk7IC8vIG51bGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7MC8xLzJ9IGNvbCDliJfnlarlj7dcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g5YiX44KS6KGo44GZ6YWN5YiXXHJcbiAgICovXHJcbiAgZ2V0Q29sKGNvbCkge1xyXG4gICAgaWYgKCBjb2wgPT09IDAgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAwLCB0aGlzLm0xMCwgdGhpcy5tMjAgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjb2wgPT09IDEgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAxLCB0aGlzLm0xMSwgdGhpcy5tMjEgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjb2wgPT09IDIgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAyLCB0aGlzLm0xMiwgdGhpcy5tMjIgXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9TdHJpbmdcclxuICAgKiDooYzliJfjgpIgSlNPTiDlvaLlvI/jgafooajnj77jgZfjgZ/mloflrZfliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gdi5jbG9uZSgpO1xyXG4gICAqICAgICB2Mi54ID09IHYueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBKU09OIOaWh+Wtl+WIl1xyXG4gICAqL1xyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwifHttMDB9LCB7bTAxfSwge20wMn18XFxufHttMTB9LCB7bTExfSwge20xMn18XFxufHttMjB9LCB7bTIxfSwge20yMn18XCIsIHRoaXMpO1xyXG4gICAgLy8gcmV0dXJuIFwifHttMDB9LCB7bTAxfSwge20wMn18XFxufHttMTB9LCB7bTExfSwge20xMn18XFxufHttMjB9LCB7bTIxfSwge20yMn18XCIuZm9ybWF0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge3BoaW5hLmdlb20uTWF0cml4MzN9IElERU5USVRZIOWNmOS9jeihjOWIl1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcbk1hdHJpeDMzLklERU5USVRZID0gbmV3IE1hdHJpeDMzKCkuaWRlbnRpdHkoKTtcclxuXHJcbi8qKlxyXG4qIEBjbGFzcyBwaGluYS5nZW9tLkNvbGxpc2lvblxyXG4qICMg6KGd56qB5Yik5a6a55So44Kv44Op44K5XHJcbiog6KGd56qB5Yik5a6a44Gu44Gf44KB44Gu44Kv44Op44K544Gn44GZ44CC44GZ44G544Gm44Gu44Oh44K944OD44OJ44GM44K544K/44OG44Kj44OD44Kv44Oh44K944OD44OJ44Gn44GZ44CCXHJcbiogXHJcbiovXHJcbmNsYXNzIENvbGxpc2lvbiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdENpcmNsZUNpcmNsZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy44Gk44Gu5YaG6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUxID0gcGhpbmEuZ2VvbS5DaXJjbGUoMTAwLCAxMDAsIDMwKTtcclxuICAgKiAgICAgY2lyY2xlMiA9IHBoaW5hLmdlb20uQ2lyY2xlKDEzMCwgMTQwLCAzMCk7XHJcbiAgICogcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdENpcmNsZUNpcmNsZShjaXJjbGUxLCBjaXJjbGUyKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLkNpcmNsZX0gY2lyY2xlMSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUyIOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOmgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0Q2lyY2xlQ2lyY2xlKGNpcmNsZTAsIGNpcmNsZTEpIHtcclxuICAgIHZhciBkaXN0YW5jZVNxdWFyZWQgPSBwaGluYS5nZW9tLlZlY3RvcjIuZGlzdGFuY2VTcXVhcmVkKGNpcmNsZTAsIGNpcmNsZTEpO1xyXG4gICAgcmV0dXJuIGRpc3RhbmNlU3F1YXJlZCA8PSBNYXRoLnBvdyhjaXJjbGUwLnJhZGl1cyArIGNpcmNsZTEucmFkaXVzLCAyKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0UmVjdFJlY3RcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuOBpOOBruefqeW9oumgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdDEgPSBwaGluYS5nZW9tLlJlY3QoMTAwLCAxMDAsIDMwLCA0MCk7XHJcbiAgICogICAgIHJlY3QyID0gcGhpbmEuZ2VvbS5SZWN0KDIwMCwgMjAwLCAxMCwgMTApO1xyXG4gICAqICAgICBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0UmVjdFJlY3QocmVjdDEsIHJlY3QyKTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5SZWN0fSByZWN0MSDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdDIg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RSZWN0UmVjdChyZWN0MCwgcmVjdDEpIHtcclxuICAgIHJldHVybiAocmVjdDAubGVmdCA8IHJlY3QxLnJpZ2h0KSAmJiAocmVjdDAucmlnaHQgPiByZWN0MS5sZWZ0KSAmJlxyXG4gICAgICAocmVjdDAudG9wIDwgcmVjdDEuYm90dG9tKSAmJiAocmVjdDAuYm90dG9tID4gcmVjdDEudG9wKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0Q2lyY2xlUmVjdFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDlhobpoJjln5/jgajnn6nlvaLpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDEwMCwgMTAwLCAzMCk7XHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMTAwLCAxMDAsIDMwLCA0MCk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RDaXJjbGVSZWN0KGNpcmNsZSwgcmVjdCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdCDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdENpcmNsZVJlY3QoY2lyY2xlLCByZWN0KSB7XHJcbiAgICAvLyDjgb7jgZrjga/lpKfjgY3jgarnn6nlvaLjgafliKTlrpoo6auY6YCf5YyWKVxyXG4gICAgdmFyIGJpZ1JlY3QgPSBwaGluYS5nZW9tLlJlY3QocmVjdC5sZWZ0LWNpcmNsZS5yYWRpdXMsIHJlY3QudG9wLWNpcmNsZS5yYWRpdXMsIHJlY3Qud2lkdGgrY2lyY2xlLnJhZGl1cyoyLCByZWN0LmhlaWdodCtjaXJjbGUucmFkaXVzKjIpO1xyXG4gICAgaWYgKGJpZ1JlY3QuY29udGFpbnMoY2lyY2xlLngsIGNpcmNsZS55KSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAy56iu6aGe44Gu55+p5b2i44Go6KGd56qB5Yik5a6aXHJcbiAgICB2YXIgciA9IHBoaW5hLmdlb20uUmVjdChyZWN0LmxlZnQtY2lyY2xlLnJhZGl1cywgcmVjdC50b3AsIHJlY3Qud2lkdGgrY2lyY2xlLnJhZGl1cyoyLCByZWN0LmhlaWdodCk7XHJcbiAgICBpZiAoci5jb250YWlucyhjaXJjbGUueCwgY2lyY2xlLnkpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgci5zZXQocmVjdC5sZWZ0LCByZWN0LnRvcC1jaXJjbGUucmFkaXVzLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCtjaXJjbGUucmFkaXVzKjIpO1xyXG4gICAgaWYgKHIuY29udGFpbnMoY2lyY2xlLngsIGNpcmNsZS55KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5YaG44Go55+p5b2i44Gu77yU54K544Gu5Yik5a6aXHJcbiAgICB2YXIgYyA9IHBoaW5hLmdlb20uQ2lyY2xlKGNpcmNsZS54LCBjaXJjbGUueSwgY2lyY2xlLnJhZGl1cyk7XHJcbiAgICAvLyBsZWZ0IHRvcFxyXG4gICAgaWYgKGMuY29udGFpbnMocmVjdC5sZWZ0LCByZWN0LnRvcCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyByaWdodCB0b3BcclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QucmlnaHQsIHJlY3QudG9wKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIHJpZ2h0IGJvdHRvbVxyXG4gICAgaWYgKGMuY29udGFpbnMocmVjdC5yaWdodCwgcmVjdC5ib3R0b20pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gbGVmdCBib3R0b21cclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QubGVmdCwgcmVjdC5ib3R0b20pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdENpcmNsZUxpbmVcclxuICAgKiBAc3RhdGljXHJcbiAgICog5YaG6aCY5Z+f44Go57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgxMDAsIDEwMCwgMjApO1xyXG4gICAqICAgICBwMSA9IHBoaW5hLmdlb20uVmVjdG9yMigwLCAwKTtcclxuICAgKiAgICAgcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMzAwLCA0MDApO1xyXG4gICAqICAgICBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0Q2lyY2xlTGluZShjaXJjbGUsIHAxLCBwMik7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZSDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDEg57ea5YiG44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAyIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOWGhumgmOWfn+OBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0Q2lyY2xlTGluZSAoY2lyY2xlLCBwMSwgcDIpIHtcclxuICAgIC8vIOWFiOOBq+e3muWIhuerr+OBqOOBruWIpOWumlxyXG4gICAgaWYgKGNpcmNsZS5jb250YWlucyhwMS54LCBwMS55KSB8fCBjaXJjbGUuY29udGFpbnMocDIueCwgcDIueSkpIHJldHVybiB0cnVlO1xyXG4gICAgLy8g5Y2K5b6E44GuMuS5l1xyXG4gICAgdmFyIHIyID0gY2lyY2xlLnJhZGl1cyAqIGNpcmNsZS5yYWRpdXM7XHJcbiAgICAvLyDlhobjga7kuK3lv4PluqfmqJlcclxuICAgIHZhciBwMyA9IHBoaW5hLmdlb20uVmVjdG9yMihjaXJjbGUueCwgY2lyY2xlLnkpO1xyXG4gICAgLy8g5ZCE44OZ44Kv44OI44OrXHJcbiAgICB2YXIgcDFwMiA9IHBoaW5hLmdlb20uVmVjdG9yMi5zdWIocDEsIHAyKTtcclxuICAgIHZhciBwMXAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyLnN1YihwMSwgcDMpO1xyXG4gICAgdmFyIHAycDMgPSBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHAyLCBwMyk7XHJcbiAgICAvLyDlpJbnqY1cclxuICAgIHZhciBjcm9zcyA9IHBoaW5hLmdlb20uVmVjdG9yMi5jcm9zcyhwMXAyLCBwMXAzKTtcclxuICAgIC8vIOWkluepjeOBrue1tuWvvuWApOOBrjLkuZdcclxuICAgIHZhciBjcm9zczIgPSBjcm9zcyAqIGNyb3NzO1xyXG4gICAgLy8gcDFwMuOBrumVt+OBleOBrjLkuZdcclxuICAgIHZhciBsZW5ndGgyID0gcDFwMi5sZW5ndGhTcXVhcmVkKCk7XHJcbiAgICAvLyDlhobjga7kuK3lv4PjgYvjgonnt5rliIbjgb7jgafjga7lnoLnt5rjga7ot53pm6Ljga4y5LmXXHJcbiAgICB2YXIgZDIgPSBjcm9zczIgLyBsZW5ndGgyO1xyXG4gICAgLy8g5YaG44Gu5Y2K5b6E44GuMuS5l+OCiOOCiuWwj+OBleOBhOOBquOCiemHjeikh1xyXG4gICAgaWYgKGQyIDw9IHIyKSB7XHJcbiAgICAgIHZhciBkb3QxID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmRvdChwMXAzLCBwMXAyKTtcclxuICAgICAgdmFyIGRvdDIgPSBwaGluYS5nZW9tLlZlY3RvcjIuZG90KHAycDMsIHAxcDIpO1xyXG4gICAgICAvLyDpgJrluLjjga/lhoXnqY3jga7kuZfnrpdcclxuICAgICAgaWYgKGRvdDEgKiBkb3QyIDw9IDApIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RMaW5lTGluZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy44Gk44Gu57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICog5Y+C6ICD77yaaHR0cDovL3d3dzVkLmJpZ2xvYmUubmUuanAvfnRvbW95YTAzL3NodG1sL2FsZ29yaXRobS9JbnRlcnNlY3Rpb24uaHRtXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwMSA9IHBoaW5hLmdlb20uVmVjdG9yMigxMDAsIDEwMCk7XHJcbiAgICogICAgIHAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIwMCwgMjAwKTtcclxuICAgKiAgICAgcDMgPSBwaGluYS5nZW9tLlZlY3RvcjIoMTUwLCAyNDApO1xyXG4gICAqICAgICBwNCA9IHBoaW5hLmdlb20uVmVjdG9yMigyMDAsIDEwMCk7XHJcbiAgICogcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcDMsIHA0KTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAxIOe3muWIhjHjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDIg57ea5YiGMeOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMyDnt5rliIYy44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHA0IOe3muWIhjLjga7nq6/jga7luqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDnt5rliIYx44Go57ea5YiGMuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0TGluZUxpbmUgKHAxLCBwMiwgcDMsIHA0KSB7XHJcbiAgICAvL+WQjOS4gO+8uO+8uei7uOS4iuOBq+S5l+OBo+OBpuOCi+WgtOWQiOOBruiqpOWIpOWumuWbnumBv1xyXG4gICAgaWYgKHAxLnggPT0gcDIueCAmJiBwMS54ID09IHAzLnggJiYgcDEueCA9PSBwNC54KSB7XHJcbiAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihwMS55LCBwMi55KTtcclxuICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHAxLnksIHAyLnkpO1xyXG4gICAgICBpZiAobWluIDw9IHAzLnkgJiYgcDMueSA8PSBtYXggfHwgbWluIDw9IHA0LnkgJiYgcDQueSA8PSBtYXgpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocDEueSA9PSBwMi55ICYmIHAxLnkgPT0gcDMueSAmJiBwMS55ID09IHA0LnkpIHtcclxuICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHAxLngsIHAyLngpO1xyXG4gICAgICB2YXIgbWF4ID0gTWF0aC5tYXgocDEueCwgcDIueCk7XHJcbiAgICAgIGlmIChtaW4gPD0gcDMueCAmJiBwMy54IDw9IG1heCB8fCBtaW4gPD0gcDQueCAmJiBwNC54IDw9IG1heCkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8v6YCa5bi45Yik5a6aXHJcbiAgICB2YXIgYSA9IChwMS54IC0gcDIueCkgKiAocDMueSAtIHAxLnkpICsgKHAxLnkgLSBwMi55KSAqIChwMS54IC0gcDMueCk7XHJcbiAgICB2YXIgYiA9IChwMS54IC0gcDIueCkgKiAocDQueSAtIHAxLnkpICsgKHAxLnkgLSBwMi55KSAqIChwMS54IC0gcDQueCk7XHJcbiAgICB2YXIgYyA9IChwMy54IC0gcDQueCkgKiAocDEueSAtIHAzLnkpICsgKHAzLnkgLSBwNC55KSAqIChwMy54IC0gcDEueCk7XHJcbiAgICB2YXIgZCA9IChwMy54IC0gcDQueCkgKiAocDIueSAtIHAzLnkpICsgKHAzLnkgLSBwNC55KSAqIChwMy54IC0gcDIueCk7XHJcbiAgICByZXR1cm4gYSAqIGIgPD0gMCAmJiBjICogZCA8PSAwO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RSZWN0TGluZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDnn6nlvaLjgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMTIwLCAxMzAsIDQwLCA1MCk7XHJcbiAgICogICAgIHAxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEwMCwgMTAwKTtcclxuICAgKiAgICAgcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMjAwLCAyMDApO1xyXG4gICAqIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RSZWN0TGluZShyZWN0LCBwMSwgcDIpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdCDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDEg57ea5YiG44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAyIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOefqeW9ouOBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0UmVjdExpbmUgKHJlY3QsIHAxLCBwMikge1xyXG4gICAgICAvL+WMheWQq+WIpOWumihwMeOBjOWQq+OBvuOCjOOBpuOCjOOBsOiJr+OBhOOBruOBp3Ay44Gu5Yik5a6a44Gv44GX44Gq44GE77yJXHJcbiAgICAgIGlmIChyZWN0LmxlZnQgPD0gcDEueCAmJiBwMS54IDw9IHJlY3QucmlnaHQgJiYgcmVjdC50b3AgPD0gcDEueSAmJiBwMS55IDw9IHJlY3QuYm90dG9tICkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAvL+efqeW9ouOBru+8lOeCuVxyXG4gICAgICB2YXIgcjEgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5sZWZ0LCByZWN0LnRvcCk7ICAgICAvL+W3puS4ilxyXG4gICAgICB2YXIgcjIgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5yaWdodCwgcmVjdC50b3ApOyAgICAvL+WPs+S4ilxyXG4gICAgICB2YXIgcjMgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5yaWdodCwgcmVjdC5ib3R0b20pOyAvL+WPs+S4i1xyXG4gICAgICB2YXIgcjQgPSBwaGluYS5nZW9tLlZlY3RvcjIocmVjdC5sZWZ0LCByZWN0LmJvdHRvbSk7ICAvL+W3puS4i1xyXG5cclxuICAgICAgLy/nn6nlvaLjga7vvJTovrrjgpLjgarjgZnnt5rliIbjgajjga7mjqXop6bliKTlrppcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIxLCByMikpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAocGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcjIsIHIzKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMywgcjQpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIxLCByNCkpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLlZlY3RvcjNcclxuICogIyAz5qyh5YWD44OZ44Kv44OI44Or44Kv44Op44K577yI5pyq5a6f6KOF77yJXHJcbiAqIDPmrKHlhYPjga7jg5njgq/jg4jjg6vjgoTluqfmqJnjgpLooajjgZnjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFZlY3RvcjMge1xyXG5cclxuICAvKiogeOW6p+aomSAqL1xyXG4gIC8vIHg6IDAsXHJcbiAgLyoqIHnluqfmqJkgKi9cclxuICAvLyB5OiAwLFxyXG4gIC8qKiB65bqn5qiZICovXHJcbiAgLy8gejogMCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgdGhpcy56ID0geiB8fCAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ3JhcGhpY3MuQ2FudmFzXHJcbiAqIOOCreODo+ODs+ODkOOCueaLoeW8teOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgQ2FudmFzIHtcclxuICAvLyBkb21FbGVtZW50OiBudWxsLFxyXG4gIC8vIGNhbnZhczogbnVsbCxcclxuICAvLyBjb250ZXh0OiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiDliJ3mnJ/ljJZcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIGlmICh0eXBlb2YgY2FudmFzID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY2FudmFzO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgIHRoaXMuY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrXjgqTjgrrjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoICAgPSB3aWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCAgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldFNpemVUb1NjcmVlbigpIHtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uICA9IFwiZml4ZWRcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpbiAgICA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wYWRkaW5nICAgPSBcIjBweFwiO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCAgICAgID0gXCIwcHhcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCAgICAgICA9IFwiMHB4XCI7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZml0U2NyZWVuKGlzRXZlcikge1xyXG4gICAgaXNFdmVyID0gaXNFdmVyID09PSB1bmRlZmluZWQgPyB0cnVlIDogaXNFdmVyO1xyXG5cclxuICAgIHZhciBfZml0RnVuYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgICAgdmFyIHMgPSBlLnN0eWxlO1xyXG4gICAgICBcclxuICAgICAgcy5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgcy5tYXJnaW4gPSBcImF1dG9cIjtcclxuICAgICAgcy5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgcy50b3AgID0gXCIwcHhcIjtcclxuICAgICAgcy5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgICBzLnJpZ2h0ID0gXCIwcHhcIjtcclxuXHJcbiAgICAgIHZhciByYXRlV2lkdGggPSBlLndpZHRoL3dpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB2YXIgcmF0ZUhlaWdodD0gZS5oZWlnaHQvd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB2YXIgcmF0ZSA9IGUuaGVpZ2h0L2Uud2lkdGg7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocmF0ZVdpZHRoID4gcmF0ZUhlaWdodCkge1xyXG4gICAgICAgIHMud2lkdGggID0gTWF0aC5mbG9vcihpbm5lcldpZHRoKStcInB4XCI7XHJcbiAgICAgICAgcy5oZWlnaHQgPSBNYXRoLmZsb29yKGlubmVyV2lkdGgqcmF0ZSkrXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHMud2lkdGggID0gTWF0aC5mbG9vcihpbm5lckhlaWdodC9yYXRlKStcInB4XCI7XHJcbiAgICAgICAgcy5oZWlnaHQgPSBNYXRoLmZsb29yKGlubmVySGVpZ2h0KStcInB4XCI7XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIFxyXG4gICAgLy8g5LiA5bqm5a6f6KGM44GX44Gm44GK44GPXHJcbiAgICBfZml0RnVuYygpO1xyXG5cclxuICAgIC8vIOODquOCteOCpOOCuuaZguOBruODquOCueODiuOBqOOBl+OBpueZu+mMsuOBl+OBpuOBiuOBj1xyXG4gICAgaWYgKGlzRXZlcikge1xyXG4gICAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIF9maXRGdW5jLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq/jg6rjgqJcclxuICAgKi9cclxuICBjbGVhcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB4ID0geCB8fCAwO1xyXG4gICAgeSA9IHkgfHwgMDtcclxuICAgIHdpZHRoID0gd2lkdGggfHwgdGhpcy53aWR0aDtcclxuICAgIGhlaWdodD0gaGVpZ2h0fHwgdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbGVhckNvbG9yKGZpbGxTdHlsZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgeCA9IHggfHwgMDtcclxuICAgIHkgPSB5IHx8IDA7XHJcbiAgICB3aWR0aCA9IHdpZHRoIHx8IHRoaXMud2lkdGg7XHJcbiAgICBoZWlnaHQ9IGhlaWdodHx8IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCk7IC8vIOihjOWIl+WIneacn+WMllxyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7ICAgICAvLyDloZfjgorjgaTjgbbjgZfjgrnjgr/jgqTjg6vjgrvjg4Pjg4hcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiDjg5HjgrnjgpLplovlp4so44Oq44K744OD44OIKVxyXG4gICAqL1xyXG4gIGJlZ2luUGF0aCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIOODkeOCueOCkumWieOBmOOCi1xyXG4gICAqL1xyXG4gIGNsb3NlUGF0aCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqICDmlrDopo/jg5HjgrnnlJ/miJBcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K544Gr6L+95YqgXHJcbiAgICovXHJcbiAgbGluZVRvKHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHF1YWRyYXRpY0N1cnZlVG8oKSB7XHJcbiAgICB0aGlzLmNvbnRleHQucXVhZHJhdGljQ3VydmVUby5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGJlemllckN1cnZlVG8oKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYmV6aWVyQ3VydmVUby5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODkeOCueWGheOCkuWhl+OCiuOBpOOBtuOBmVxyXG4gICAqL1xyXG4gIGZpbGwoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5HjgrnkuIrjgavjg6njgqTjg7PjgpLlvJXjgY9cclxuICAgKi9cclxuICBzdHJva2UoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCr+ODquODg+ODl1xyXG4gICAqL1xyXG4gIGNsaXAoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xpcCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAgICAgXHJcbiAgLyoqXHJcbiAgICog54K55o+P55S7XHJcbiAgICovXHJcbiAgZHJhd1BvaW50KHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLnN0cm9rZVJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg6njgqTjg7Pjg5HjgrnjgpLkvZzmiJBcclxuICAgKi9cclxuICBsaW5lKHgwLCB5MCwgeDEsIHkxKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG8oeDAsIHkwKS5saW5lVG8oeDEsIHkxKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz44KS5o+P55S7XHJcbiAgICovXHJcbiAgZHJhd0xpbmUoeDAsIHkwLCB4MSwgeTEpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmxpbmUoeDAsIHkwLCB4MSwgeTEpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OA44OD44K344Ol44Op44Kk44Oz44KS5o+P55S7XHJcbiAgICovXHJcbiAgZHJhd0Rhc2hMaW5lKHgwLCB5MCwgeDEsIHkxLCBwYXR0ZXJuKSB7XHJcbiAgICB2YXIgcGF0dGVyblRhYmxlID0gbnVsbDtcclxuICAgIGlmICh0eXBlb2YocGF0dGVybikgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBwYXR0ZXJuVGFibGUgPSBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuIHx8IDB4ZjBmMDtcclxuICAgICAgcGF0dGVyblRhYmxlID0gcGF0dGVybi50b1N0cmluZygyKTtcclxuICAgIH1cclxuICAgIHBhdHRlcm5UYWJsZSA9IHBhdHRlcm5UYWJsZS5wYWRkaW5nKDE2LCAnMScpO1xyXG4gICAgXHJcbiAgICB2YXIgdnggPSB4MS14MDtcclxuICAgIHZhciB2eSA9IHkxLXkwO1xyXG4gICAgdmFyIGxlbiA9IE1hdGguc3FydCh2eCp2eCArIHZ5KnZ5KTtcclxuICAgIHZ4Lz1sZW47IHZ5Lz1sZW47XHJcbiAgICBcclxuICAgIHZhciB4ID0geDA7XHJcbiAgICB2YXIgeSA9IHkwO1xyXG4gICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgIGlmIChwYXR0ZXJuVGFibGVbaSUxNl0gPT0gJzEnKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UG9pbnQoeCwgeSk7XHJcbiAgICAgICAgLy8gdGhpcy5maWxsUmVjdCh4LCB5LCB0aGlzLmNvbnRleHQubGluZVdpZHRoLCB0aGlzLmNvbnRleHQubGluZVdpZHRoKTtcclxuICAgICAgfVxyXG4gICAgICB4ICs9IHZ4O1xyXG4gICAgICB5ICs9IHZ5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHYwKHgwLCB5MCksIHYxKHgxLCB5MSkg44GL44KJ6KeS5bqm44KS5rGC44KB44Gm55+i5Y2w44KS5o+P55S7XHJcbiAgICogaHR0cDovL2hha3VoaW4uanAvYXMvcm90YXRpb24uaHRtbFxyXG4gICAqL1xyXG4gIGRyYXdBcnJvdyh4MCwgeTAsIHgxLCB5MSwgYXJyb3dSYWRpdXMpIHtcclxuICAgIHZhciB2eCA9IHgxLXgwO1xyXG4gICAgdmFyIHZ5ID0geTEteTA7XHJcbiAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHZ5LCB2eCkqMTgwL01hdGguUEk7XHJcbiAgICBcclxuICAgIHRoaXMuZHJhd0xpbmUoeDAsIHkwLCB4MSwgeTEpO1xyXG4gICAgdGhpcy5maWxsUG9seWdvbih4MSwgeTEsIGFycm93UmFkaXVzIHx8IDUsIDMsIGFuZ2xlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogbGluZXNcclxuICAgKi9cclxuICBsaW5lcygpIHtcclxuICAgIHRoaXMubW92ZVRvKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuICAgIGZvciAodmFyIGk9MSxsZW49YXJndW1lbnRzLmxlbmd0aC8yOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgIHRoaXMubGluZVRvKGFyZ3VtZW50c1tpKjJdLCBhcmd1bWVudHNbaSoyKzFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlTGluZXMoKSB7XHJcbiAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5saW5lcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz5aGX44KK44Gk44G244GX5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbExpbmVzKCkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMubGluZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbm+inkuW9ouODkeOCueOCkuS9nOaIkOOBmeOCi1xyXG4gICAqL1xyXG4gIHJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnJlY3QuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbm+inkuW9ouWhl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxSZWN0KCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm5vop5LlvaLjg6njgqTjg7Pmj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VSZWN0KCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOinkuS4uOWbm+inkuW9ouODkeOCuVxyXG4gICAqL1xyXG4gIHJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcclxuICAgIHZhciBsID0geCArIHJhZGl1cztcclxuICAgIHZhciByID0geCArIHdpZHRoIC0gcmFkaXVzO1xyXG4gICAgdmFyIHQgPSB5ICsgcmFkaXVzO1xyXG4gICAgdmFyIGIgPSB5ICsgaGVpZ2h0IC0gcmFkaXVzO1xyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgdmFyIGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgIGN0eC5tb3ZlVG8obCwgeSk7XHJcbiAgICBjdHgubGluZVRvKHIsIHkpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCt3aWR0aCwgeSwgeCt3aWR0aCwgdCk7XHJcbiAgICBjdHgubGluZVRvKHgrd2lkdGgsIGIpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCt3aWR0aCwgeStoZWlnaHQsIHIsIHkraGVpZ2h0KTtcclxuICAgIGN0eC5saW5lVG8obCwgeStoZWlnaHQpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeStoZWlnaHQsIHgsIGIpO1xyXG4gICAgY3R4LmxpbmVUbyh4LCB0KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIGwsIHkpO1xyXG4gICAgLyoqL1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKGwsIHQsIHJhZGl1cywgICAgIC1NYXRoLlBJLCAtTWF0aC5QSSowLjUsIGZhbHNlKTsgIC8vIOW3puS4ilxyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhyLCB0LCByYWRpdXMsIC1NYXRoLlBJKjAuNSwgICAgICAgICAgICAwLCBmYWxzZSk7ICAvLyDlj7PkuIpcclxuICAgIHRoaXMuY29udGV4dC5hcmMociwgYiwgcmFkaXVzLCAgICAgICAgICAgIDAsICBNYXRoLlBJKjAuNSwgZmFsc2UpOyAgLy8g5Y+z5LiLXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKGwsIGIsIHJhZGl1cywgIE1hdGguUEkqMC41LCAgICAgIE1hdGguUEksIGZhbHNlKTsgIC8vIOW3puS4i1xyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDop5LkuLjlm5vop5LlvaLloZfjgorjgaTjgbbjgZdcclxuICAgKi9cclxuICBmaWxsUm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KeS5Li45Zub6KeS5b2i44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlUm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhobjga7jg5HjgrnjgpLoqK3lrppcclxuICAgKi9cclxuICBjaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5aGX44KK44Gk44G244GX5YaG44KS5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbENpcmNsZSh4LCB5LCByYWRpdXMpIHtcclxuICAgIHZhciBjID0gdGhpcy5jb250ZXh0O1xyXG4gICAgYy5iZWdpblBhdGgoKTtcclxuICAgIGMuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XHJcbiAgICBjLmNsb3NlUGF0aCgpO1xyXG4gICAgYy5maWxsKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K544OI44Ot44O844Kv5YaG44KS5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlQ2lyY2xlKHgsIHksIHJhZGl1cykge1xyXG4gICAgdmFyIGMgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgYy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIGZhbHNlKTtcclxuICAgIGMuY2xvc2VQYXRoKCk7XHJcbiAgICBjLnN0cm9rZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhoblvKfjga7jg5HjgrnjgpLoqK3lrppcclxuICAgKi9cclxuICBhcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDloZfjgorjgaTjgbbjgZflhoblvKfjgpLmj4/nlLtcclxuICAgKi9cclxuICBmaWxsQXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5maWxsKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCueODiOODreODvOOCr+WGhuW8p+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZUFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQubW92ZVRvKDAsIDApO1xyXG4gICAgY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSk7XHJcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGZpbGxQaWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpLmZpbGwoKTtcclxuICB9XHJcbiAgc3Ryb2tlUGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOODneODquOCtOODs+ODkeOCuVxyXG4gICAqL1xyXG4gIHBvbHlnb24oeCwgeSwgc2l6ZSwgc2lkZXMsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB2YXIgcmFkRGl2ID0gKE1hdGguUEkqMikvc2lkZXM7XHJcbiAgICB2YXIgcmFkT2Zmc2V0ID0gKG9mZnNldEFuZ2xlIT09dW5kZWZpbmVkKSA/IG9mZnNldEFuZ2xlKk1hdGguUEkvMTgwIDogLU1hdGguUEkvMjtcclxuICAgIFxyXG4gICAgdGhpcy5tb3ZlVG8oeCArIE1hdGguY29zKHJhZE9mZnNldCkqc2l6ZSwgeSArIE1hdGguc2luKHJhZE9mZnNldCkqc2l6ZSk7XHJcbiAgICBmb3IgKHZhciBpPTE7IGk8c2lkZXM7ICsraSkge1xyXG4gICAgICB2YXIgcmFkID0gcmFkRGl2KmkrcmFkT2Zmc2V0O1xyXG4gICAgICB0aGlzLmxpbmVUbyhcclxuICAgICAgICB4ICsgTWF0aC5jb3MocmFkKSpzaXplLFxyXG4gICAgICAgIHkgKyBNYXRoLnNpbihyYWQpKnNpemVcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICog44Od44Oq44K044Oz5aGX44KK44Gk44G244GXXHJcbiAgICovXHJcbiAgZmlsbFBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpLmZpbGwoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog44Od44Oq44K044Oz44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlUG9seWdvbih4LCB5LCByYWRpdXMsIHNpZGVzLCBvZmZzZXRBbmdsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucG9seWdvbih4LCB5LCByYWRpdXMsIHNpZGVzLCBvZmZzZXRBbmdsZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHN0YXJcclxuICAgKi9cclxuICBzdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB2YXIgeCA9IHggfHwgMDtcclxuICAgIHZhciB5ID0geSB8fCAwO1xyXG4gICAgdmFyIHJhZGl1cyA9IHJhZGl1cyB8fCA2NDtcclxuICAgIHZhciBzaWRlcyA9IHNpZGVzIHx8IDU7XHJcbiAgICB2YXIgc2lkZUluZGVudFJhZGl1cyA9IHJhZGl1cyAqIChzaWRlSW5kZW50IHx8IDAuMzgpO1xyXG4gICAgdmFyIHJhZE9mZnNldCA9IChvZmZzZXRBbmdsZSkgPyBvZmZzZXRBbmdsZSpNYXRoLlBJLzE4MCA6IC1NYXRoLlBJLzI7XHJcbiAgICB2YXIgcmFkRGl2ID0gKE1hdGguUEkqMikvc2lkZXMvMjtcclxuXHJcbiAgICB0aGlzLm1vdmVUbyhcclxuICAgICAgeCArIE1hdGguY29zKHJhZE9mZnNldCkqcmFkaXVzLFxyXG4gICAgICB5ICsgTWF0aC5zaW4ocmFkT2Zmc2V0KSpyYWRpdXNcclxuICAgICk7XHJcbiAgICBmb3IgKHZhciBpPTE7IGk8c2lkZXMqMjsgKytpKSB7XHJcbiAgICAgIHZhciByYWQgPSByYWREaXYqaSArIHJhZE9mZnNldDtcclxuICAgICAgdmFyIGxlbiA9IChpJTIpID8gc2lkZUluZGVudFJhZGl1cyA6IHJhZGl1cztcclxuICAgICAgdGhpcy5saW5lVG8oXHJcbiAgICAgICAgeCArIE1hdGguY29zKHJhZCkqbGVuLFxyXG4gICAgICAgIHkgKyBNYXRoLnNpbihyYWQpKmxlblxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYn+OCkuWhl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxTdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB0aGlzLmJlZ2luUGF0aCgpLnN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpLmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pif44KS44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlU3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKS5zdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKS5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBoZWFydFxyXG4gICAqL1xyXG4gIGhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpIHtcclxuICAgIHZhciBoYWxmX3JhZGl1cyA9IHJhZGl1cyowLjU7XHJcbiAgICB2YXIgcmFkID0gKGFuZ2xlID09PSB1bmRlZmluZWQpID8gTWF0aC5QSS80IDogTWF0aC5kZWdUb1JhZChhbmdsZSk7XHJcblxyXG4gICAgLy8g5Y2K5b6EIGhhbGZfcmFkaXVzIOOBruinkuW6piBhbmdsZSDkuIrjga7ngrnjgajjga7mjqXnt5rjgpLmsYLjgoHjgotcclxuICAgIHZhciBwID0gTWF0aC5jb3MocmFkKSpoYWxmX3JhZGl1cztcclxuICAgIHZhciBxID0gTWF0aC5zaW4ocmFkKSpoYWxmX3JhZGl1cztcclxuXHJcbiAgICAvLyDlhobjga7mjqXnt5rjga7mlrnnqIvlvI8gcHggKyBxeSA9IHJeMiDjgojjgoogeSA9IChyXjItcHgpL3FcclxuICAgIHZhciB4MiA9IC1oYWxmX3JhZGl1cztcclxuICAgIHZhciB5MiA9IChoYWxmX3JhZGl1cypoYWxmX3JhZGl1cy1wKngyKS9xO1xyXG5cclxuICAgIC8vIOS4reW/g+S9jee9ruiqv+aVtFxyXG4gICAgdmFyIGhlaWdodCA9IHkyICsgaGFsZl9yYWRpdXM7XHJcbiAgICB2YXIgb2Zmc2V0WSA9IGhhbGZfcmFkaXVzLWhlaWdodC8yO1xyXG5cclxuICAgIC8vIOODkeOCueOCkuOCu+ODg+ODiFxyXG4gICAgdGhpcy5tb3ZlVG8oMCt4LCB5Mit5K29mZnNldFkpO1xyXG5cclxuICAgIHRoaXMuYXJjKC1oYWxmX3JhZGl1cyt4LCAwK3krb2Zmc2V0WSwgaGFsZl9yYWRpdXMsIE1hdGguUEktcmFkLCBNYXRoLlBJKjIpO1xyXG4gICAgdGhpcy5hcmMoaGFsZl9yYWRpdXMreCwgMCt5K29mZnNldFksIGhhbGZfcmFkaXVzLCBNYXRoLlBJLCByYWQpO1xyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZmlsbCBoZWFydFxyXG4gICAqL1xyXG4gIGZpbGxIZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5oZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKS5maWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIHN0cm9rZSBoZWFydFxyXG4gICAqL1xyXG4gIHN0cm9rZUhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0MTY5MjM0L3RoZS1yZWxhdGlvbi1vZi10aGUtYmV6aWVyLWN1cnZlLWFuZC1lbGxpcHNlXHJcbiAgICovXHJcbiAgZWxsaXBzZSh4LCB5LCB3LCBoKSB7XHJcbiAgICB2YXIgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgdmFyIGthcHBhID0gMC41NTIyODQ4O1xyXG5cclxuICAgIHZhciBveCA9ICh3IC8gMikgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgaG9yaXpvbnRhbFxyXG4gICAgdmFyIG95ID0gKGggLyAyKSAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCB2ZXJ0aWNhbFxyXG4gICAgdmFyIHhlID0geCArIHc7ICAgICAgICAgICAvLyB4LWVuZFxyXG4gICAgdmFyIHllID0geSArIGg7ICAgICAgICAgICAvLyB5LWVuZFxyXG4gICAgdmFyIHhtID0geCArIHcgLyAyOyAgICAgICAvLyB4LW1pZGRsZVxyXG4gICAgdmFyIHltID0geSArIGggLyAyOyAgICAgICAvLyB5LW1pZGRsZVxyXG5cclxuICAgIGN0eC5tb3ZlVG8oeCwgeW0pO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeCwgeW0gLSBveSwgeG0gLSBveCwgeSwgeG0sIHkpO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeG0gKyBveCwgeSwgeGUsIHltIC0gb3ksIHhlLCB5bSk7XHJcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ZSwgeW0gKyBveSwgeG0gKyBveCwgeWUsIHhtLCB5ZSk7XHJcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4bSAtIG94LCB5ZSwgeCwgeW0gKyBveSwgeCwgeW0pO1xyXG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZmlsbEVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KS5maWxsKCk7XHJcbiAgfVxyXG4gIHN0cm9rZUVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGZpbGxUZXh0KCkge1xyXG4gICAgdGhpcy5fY29udGV4dC5maWxsVGV4dC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdHJva2VUZXh0KCkge1xyXG4gICAgdGhpcy5fY29udGV4dC5zdHJva2VUZXh0LmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog55S75YOP44KS5o+P55S7XHJcbiAgICovXHJcbiAgZHJhd0ltYWdlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooYzliJfjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRUcmFuc2Zvcm0obTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0obTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooYzliJfjgpLjg6rjgrvjg4Pjg4hcclxuICAgKi9cclxuICByZXNldFRyYW5zZm9ybSgpIHtcclxuICAgIHRoaXMuc2V0VHJhbnNmb3JtKDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOS4reW/g+OBq+enu+WLlVxyXG4gICAqL1xyXG4gIHRyYW5zZm9ybUNlbnRlcigpIHtcclxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodC8yKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e75YuVXHJcbiAgICovXHJcbiAgdHJhbnNsYXRlKHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Zue6LuiXHJcbiAgICovXHJcbiAgcm90YXRlKHJvdGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbnRleHQucm90YXRlKHJvdGF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrnjgrHjg7zjg6tcclxuICAgKi9cclxuICBzY2FsZShzY2FsZVgsIHNjYWxlWSkge1xyXG4gICAgdGhpcy5jb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54q25oWL44KS5L+d5a2YXHJcbiAgICovXHJcbiAgc2F2ZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeKtuaFi+OCkuW+qeWFg1xyXG4gICAqL1xyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlLvlg4/jgajjgZfjgabkv53lrZhcclxuICAgKi9cclxuICBzYXZlQXNJbWFnZShtaW1lX3R5cGUpIHtcclxuICAgIG1pbWVfdHlwZSA9IG1pbWVfdHlwZSB8fCBcImltYWdlL3BuZ1wiO1xyXG4gICAgdmFyIGRhdGFfdXJsID0gdGhpcy5jYW52YXMudG9EYXRhVVJMKG1pbWVfdHlwZSk7XHJcbiAgICAvLyBkYXRhX3VybCA9IGRhdGFfdXJsLnJlcGxhY2UobWltZV90eXBlLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTtcclxuICAgIHdpbmRvdy5vcGVuKGRhdGFfdXJsLCBcInNhdmVcIik7XHJcbiAgICBcclxuICAgIC8vIHRvRGF0YVVSTCDjgpLkvb/jgYjjgbDkuIvoqJjjga7jgojjgYbjgarjg4Tjg7zjg6vjgYzkvZzjgozjgovjgYvjgoIhIVxyXG4gICAgLy8gVE9ETzog44OX44Ot44Kw44Op44Og44Gn57W144KS44GL44GE44Gm5L+d5a2Y44Gn44GN44KL44OE44O844OrXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDluYVcclxuICAgKi9cclxuICBnZXQgd2lkdGgoKSAgIHsgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoOyB9XHJcbiAgc2V0IHdpZHRoKHYpICB7IHRoaXMuY2FudmFzLndpZHRoID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiDpq5jjgZVcclxuICAgKi9cclxuICBnZXQgaGVpZ2h0KCkgICB7IHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7IH1cclxuICBzZXQgaGVpZ2h0KHYpICB7IHRoaXMuY2FudmFzLmhlaWdodCA9IHY7IH1cclxuXHJcbiAgZ2V0IGZpbGxTdHlsZSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTsgfVxyXG4gIHNldCBmaWxsU3R5bGUodikgIHsgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHY7IH1cclxuXHJcbiAgZ2V0IHN0cm9rZVN0eWxlKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGU7IH1cclxuICBzZXQgc3Ryb2tlU3R5bGUodikgIHsgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdjsgfVxyXG5cclxuICBnZXQgZ2xvYmFsQWxwaGEoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYTsgfVxyXG4gIHNldCBnbG9iYWxBbHBoYSh2KSAgeyB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSB2OyB9XHJcblxyXG4gIGdldCBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24oKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb247IH1cclxuICBzZXQgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKHYpICB7IHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB2OyB9XHJcblxyXG4gIGdldCBzaGFkb3dCbHVyKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93Qmx1cjsgfVxyXG4gIHNldCBzaGFkb3dCbHVyKHYpICB7IHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93Q29sb3IoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zaGFkb3dDb2xvcjsgfVxyXG4gIHNldCBzaGFkb3dDb2xvcih2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSB2OyB9XHJcblxyXG4gIGdldCBzaGFkb3dPZmZzZXRYKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WDsgfVxyXG4gIHNldCBzaGFkb3dPZmZzZXRYKHYpICB7IHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93T2Zmc2V0WSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFk7IH1cclxuICBzZXQgc2hhZG93T2Zmc2V0WSh2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHY7IH1cclxuXHJcbiAgZ2V0IGxpbmVDYXAoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lQ2FwOyB9XHJcbiAgc2V0IGxpbmVDYXAodikgIHsgdGhpcy5jb250ZXh0LmxpbmVDYXAgPSB2OyB9XHJcblxyXG4gIGdldCBsaW5lSm9pbigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmxpbmVKb2luOyB9XHJcbiAgc2V0IGxpbmVKb2luKHYpICB7IHRoaXMuY29udGV4dC5saW5lSm9pbiA9IHY7IH1cclxuXHJcbiAgZ2V0IG1pdGVyTGltaXQoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5taXRlckxpbWl0OyB9XHJcbiAgc2V0IG1pdGVyTGltaXQodikgIHsgdGhpcy5jb250ZXh0Lm1pdGVyTGltaXQgPSB2OyB9XHJcblxyXG4gIGdldCBsaW5lV2lkdGgoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lV2lkdGg7IH1cclxuICBzZXQgbGluZVdpZHRoKHYpICB7IHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB2OyB9XHJcblxyXG4gIGdldCBmb250KCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZm9udDsgfVxyXG4gIHNldCBmb250KHYpICB7IHRoaXMuY29udGV4dC5mb250ID0gdjsgfVxyXG5cclxuICBnZXQgdGV4dEFsaWduKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQudGV4dEFsaWduOyB9XHJcbiAgc2V0IHRleHRBbGlnbih2KSAgeyB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gdjsgfVxyXG5cclxuICBnZXQgdGV4dEJhc2VsaW5lKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lOyB9XHJcbiAgc2V0IHRleHRCYXNlbGluZSh2KSAgeyB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lID0gdjsgfVxyXG5cclxuICBnZXQgaW1hZ2VTbW9vdGhpbmdFbmFibGVkKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkOyB9XHJcbiAgc2V0IGltYWdlU21vb3RoaW5nRW5hYmxlZCh2KSAge1xyXG4gICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHY7XHJcbiAgICB0aGlzLmNvbnRleHQud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdjtcclxuICAgIHRoaXMuY29udGV4dC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSB2O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1lYXN1cmVUZXh0KGZvbnQsIHRleHQpIHtcclxuICAgIHRoaXMuX2NvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVMaW5lYXJHcmFkaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50LmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlUmFkaWFsR3JhZGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkNhbnZhcy5fY29udGV4dCA9IChmdW5jdGlvbigpIHtcclxuICBpZiAoU3VwcG9ydC5jYW52YXMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8vIGltcG9ydCB7IGZpcnN0LCBsYXN0LCBjbGVhciB9IGZyb20gXCIuLi9jb3JlL2FycmF5XCJcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuSW5wdXRcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLy8gLyoqIGRvbUVsZW1lbnQgKi9cclxuICAvLyBkb21FbGVtZW50ID0gbnVsbFxyXG5cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQgfHwgd2luZG93LmRvY3VtZW50O1xyXG5cclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5kZWx0YVBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnByZXZQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5fdGVtcFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdGhpcy5tYXhDYWNoZU51bSA9IElucHV0LmRlZmF1bHRzLm1heENhY2hlTnVtO1xyXG4gICAgdGhpcy5taW5EaXN0YW5jZSA9IElucHV0LmRlZmF1bHRzLm1pbkRpc3RhbmNlO1xyXG4gICAgdGhpcy5tYXhEaXN0YW5jZSA9IElucHV0LmRlZmF1bHRzLm1heERpc3RhbmNlO1xyXG4gICAgdGhpcy5jYWNoZVBvc2l0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5mbGlja1ZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdGhpcy5mbGFncyA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmxhc3QgPSB0aGlzLm5vdztcclxuICAgIHRoaXMubm93ID0gdGhpcy5mbGFncztcclxuICAgIHRoaXMuc3RhcnQgPSAodGhpcy5ub3cgXiB0aGlzLmxhc3QpICYgdGhpcy5ub3c7XHJcbiAgICB0aGlzLmVuZCAgID0gKHRoaXMubm93IF4gdGhpcy5sYXN0KSAmIHRoaXMubGFzdDtcclxuXHJcbiAgICAvLyDlpInljJblgKTjgpLmm7TmlrBcclxuICAgIHRoaXMuZGVsdGFQb3NpdGlvbi54ID0gdGhpcy5fdGVtcFBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICB0aGlzLmRlbHRhUG9zaXRpb24ueSA9IHRoaXMuX3RlbXBQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgIGlmICh0aGlzLmRlbHRhUG9zaXRpb24ueCA9PT0gMCAmJiB0aGlzLmRlbHRhUG9zaXRpb24ueSA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9tb3ZlRmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX21vdmVGbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGFydCkge1xyXG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliY3lm57jga7luqfmqJnjgpLmm7TmlrBcclxuICAgIHRoaXMucHJldlBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcblxyXG4gICAgLy8g54++5Zyo44Gu5L2N572u44KS5pu05pawXHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLl90ZW1wUG9zaXRpb24ueCwgdGhpcy5fdGVtcFBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA+IHRoaXMubWF4Q2FjaGVOdW0pIHtcclxuICAgICAgdGhpcy5jYWNoZVBvc2l0aW9ucy5zaGlmdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWNoZVBvc2l0aW9ucy5wdXNoKHRoaXMucG9zaXRpb24uY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBfc3RhcnQoeCwgeSwgZmxhZykge1xyXG4gICAgZmxhZyA9IChmbGFnICE9PSB1bmRlZmluZWQpID8gZmxhZyA6IDE7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnQnLCB4LCB5KTtcclxuICAgIHRoaXMuX21vdmUoeCwgeSk7XHJcblxyXG4gICAgdGhpcy5mbGFncyB8PSBmbGFnO1xyXG5cclxuICAgIHZhciB4ID0gdGhpcy5fdGVtcFBvc2l0aW9uLng7XHJcbiAgICB2YXIgeSA9IHRoaXMuX3RlbXBQb3NpdGlvbi55O1xyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICB0aGlzLnByZXZQb3NpdGlvbi5zZXQoeCwgeSk7XHJcblxyXG4gICAgdGhpcy5mbGlja1ZlbG9jaXR5LnNldCgwLCAwKTtcclxuICAgIC8vIHRoaXMuY2FjaGVQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIF9lbmQoZmxhZykge1xyXG4gICAgZmxhZyA9IChmbGFnICE9PSB1bmRlZmluZWQpID8gZmxhZyA6IDE7XHJcbiAgICB0aGlzLmZsYWdzICY9IH4oZmxhZyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgIC8vIHZhciBmaXJzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnMuZmlyc3Q7XHJcbiAgICAvLyB2YXIgbGFzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnMubGFzdDtcclxuICAgIHZhciBmaXJzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnNbMF07XHJcbiAgICB2YXIgbGFzdCA9IHRoaXMuY2FjaGVQb3NpdGlvbnNbdGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGgtMV07XHJcblxyXG4gICAgdmFyIHYgPSBWZWN0b3IyLnN1YihsYXN0LCBmaXJzdCk7XHJcblxyXG4gICAgdmFyIGxlbiA9IHYubGVuZ3RoKCk7XHJcblxyXG4gICAgaWYgKGxlbiA+IHRoaXMubWluRGlzdGFuY2UpIHtcclxuICAgICAgLy8gdmFyIG5vcm1hbExlbiA9IGxlbi5jbGFtcCh0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlKTtcclxuICAgICAgdmFyIG5vcm1hbExlbiA9IGNsYW1wKGxlbiwgdGhpcy5taW5EaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSk7XHJcbiAgICAgIHYuZGl2KGxlbikubXVsKG5vcm1hbExlbik7XHJcbiAgICAgIHRoaXMuZmxpY2tWZWxvY2l0eS5zZXQodi54LCB2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMuY2FjaGVQb3NpdGlvbnMuY2xlYXIoKTtcclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIC8vIOOCueOCseODvOODq+OCkuiAg+aFrlxyXG4gIF9tb3ZlKHgsIHkpIHtcclxuICAgIHRoaXMuX3RlbXBQb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMuX3RlbXBQb3NpdGlvbi55ID0geTtcclxuXHJcbiAgICAvLyBhZGp1c3Qgc2NhbGVcclxuICAgIHZhciBlbG0gPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgcmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChyZWN0LndpZHRoKSB7XHJcbiAgICAgIHRoaXMuX3RlbXBQb3NpdGlvbi54ICo9IGVsbS53aWR0aCAvIHJlY3Qud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAocmVjdC5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5fdGVtcFBvc2l0aW9uLnkgKj0gZWxtLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHhcclxuICAgKiB45bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHgoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLng7IH1cclxuICBzZXQgeCh2KSB7IHRoaXMucG9zaXRpb24ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHlcclxuICAgKiB55bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHkoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnk7IH1cclxuICBzZXQgeSh2KSB7IHRoaXMucG9zaXRpb24ueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGR4XHJcbiAgICogZHjlgKRcclxuICAgKi9cclxuICBnZXQgZHgoKSB7IHJldHVybiB0aGlzLmRlbHRhUG9zaXRpb24ueDsgfVxyXG4gIHNldCBkeCh2KSB7IHRoaXMuZGVsdGFQb3NpdGlvbi54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgZHlcclxuICAgKiBkeeWApFxyXG4gICAqL1xyXG4gIGdldCBkeSgpIHsgcmV0dXJuIHRoaXMuZGVsdGFQb3NpdGlvbi55OyB9XHJcbiAgc2V0IGR5KHYpIHsgdGhpcy5kZWx0YVBvc2l0aW9uLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBmeFxyXG4gICAqIGZ45YCkXHJcbiAgICovXHJcbiAgZ2V0IGZ4KCkgeyByZXR1cm4gdGhpcy5mbGlja1ZlbG9jaXR5Lng7IH1cclxuICBzZXQgZngodikgeyB0aGlzLmZsaWNrVmVsb2NpdHkueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGZ5XHJcbiAgICogZnnlgKRcclxuICAgKi9cclxuICBnZXQgZnkoKSB7IHJldHVybiB0aGlzLmZsaWNrVmVsb2NpdHkueTsgfVxyXG4gIHNldCBmeSh2KSB7IHRoaXMuZmxpY2tWZWxvY2l0eS55ID0gdjsgfVxyXG5cclxufVxyXG5cclxuSW5wdXQuZGVmYXVsdHMgPSB7XHJcbiAgbWF4Q2FjaGVOdW06IDMsXHJcbiAgbWluRGlzdGFuY2U6IDEwLFxyXG4gIG1heERpc3RhbmNlOiAxMDAsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LktleWJvYXJkXHJcbiAqIEBleHRlbmRzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqL1xyXG5jbGFzcyBLZXlib2FyZCBleHRlbmRzIElucHV0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5rZXkgPSB7fTtcclxuICAgIHRoaXMucHJlc3MgID0ge307XHJcbiAgICB0aGlzLmRvd24gICA9IHt9O1xyXG4gICAgdGhpcy51cCAgICAgPSB7fTtcclxuICAgIHRoaXMubGFzdCAgID0ge307XHJcblxyXG4gICAgdGhpcy5fa2V5ZG93biA9IG51bGw7XHJcbiAgICB0aGlzLl9rZXl1cCA9IG51bGw7XHJcbiAgICB0aGlzLl9rZXlwcmVzcyA9IG51bGw7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYua2V5W2Uua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICBzZWxmLl9rZXlkb3duID0gZS5rZXlDb2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLmtleVtlLmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICAgIHNlbGYuX2tleXVwID0gZS5rZXlDb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX2tleXByZXNzID0gZS5rZXlDb2RlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmg4XloLHmm7TmlrDlh6bnkIZcclxuICAgKiDjg57jgqTjg5Xjg6zjg7zjg6DlkbzjgpPjgafkuIvjgZXjgYQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBUT0RPOiDkuIDmi6zjg5Pjg4Pjg4jmvJTnrpfjgafooYzjgYbjgojjgYbkv67mraPjgZnjgotcclxuICAgIGZvciAodmFyIGsgaW4gdGhpcy5rZXkpIHtcclxuICAgICAgdGhpcy5sYXN0W2tdICAgID0gdGhpcy5wcmVzc1trXTtcclxuICAgICAgdGhpcy5wcmVzc1trXSAgID0gdGhpcy5rZXlba107XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmRvd25ba10gPSAodGhpcy5wcmVzc1trXSBeIHRoaXMubGFzdFtrXSkgJiB0aGlzLnByZXNzW2tdO1xyXG4gICAgICB0aGlzLnVwW2tdID0gKHRoaXMucHJlc3Nba10gXiB0aGlzLmxhc3Rba10pICYgdGhpcy5sYXN0W2tdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9rZXlkb3duKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2tleWRvd24nLCB7IGtleUNvZGU6IHRoaXMuX2tleWRvd24gfSk7XHJcbiAgICAgIHRoaXMuX2tleWRvd24gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2tleXVwKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2tleXVwJywgeyBrZXlDb2RlOiB0aGlzLl9rZXl1cCB9KTtcclxuICAgICAgdGhpcy5fa2V5dXAgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2tleXByZXNzKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2tleXByZXNzJywgeyBrZXlDb2RlOiB0aGlzLl9rZXlwcmVzcyB9KTtcclxuICAgICAgdGhpcy5fa2V5cHJlc3MgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkuaKvOOBl+OBpuOBhOOCi+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqIEBwYXJhbSAgIHtOdW1iZXIvU3RyaW5nfSBrZXkga2V5Q29kZSBvciBrZXlOYW1lXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICovXHJcbiAgZ2V0S2V5KGtleSkge1xyXG4gICAgaWYgKHR5cGVvZihrZXkpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISF0aGlzLnByZXNzW2tleV0gPT09IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkuaKvOOBl+OBn+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqIEBwYXJhbSAgIHtOdW1iZXIvU3RyaW5nfSBrZXkga2V5Q29kZSBvciBrZXlOYW1lXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICovXHJcbiAgZ2V0S2V5RG93bihrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kb3duW2tleV0gPT0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Kt44O844KS6Zui44GX44Gf44GL44KS44OB44Kn44OD44KvXHJcbiAgICogQHBhcmFtICAge051bWJlci9TdHJpbmd9IGtleSBrZXlDb2RlIG9yIGtleU5hbWVcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gICDjg4Hjgqfjg4Pjgq/ntZDmnpxcclxuICAgKi9cclxuICBnZXRLZXlVcChrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51cFtrZXldID09IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOBruaWueWQkeOCkiBBbmdsZShEZWdyZWUpIOOBp+WPluW+l1xyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOinkuW6pihEZWdyZWUpXHJcbiAgICovXHJcbiAgZ2V0S2V5QW5nbGUoKSB7XHJcbiAgICB2YXIgYW5nbGUgPSBudWxsO1xyXG4gICAgdmFyIGFycm93Qml0ID1cclxuICAgICAgKHRoaXMuZ2V0S2V5KFwibGVmdFwiKSAgIDw8IDMpIHwgLy8gMTAwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoXCJ1cFwiKSAgICAgPDwgMikgfCAvLyAwMTAwXHJcbiAgICAgICh0aGlzLmdldEtleShcInJpZ2h0XCIpICA8PCAxKSB8IC8vIDAwMTBcclxuICAgICAgKHRoaXMuZ2V0S2V5KFwiZG93blwiKSk7ICAgICAgICAgLy8gMDAwMVxyXG4gICAgXHJcbiAgICBpZiAoYXJyb3dCaXQgIT09IDAgJiYgS2V5Ym9hcmQuQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFLmhhc093blByb3BlcnR5KGFycm93Qml0KSkge1xyXG4gICAgICBhbmdsZSA9IEtleWJvYXJkLkFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRVthcnJvd0JpdF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBhbmdsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOBruaKvOOBl+OBpuOBhOOCi+WQkeOBjeOCkuWPluW+l1xyXG4gICAqIOato+imj+WMluOBleOCjOOBpuOBhOOCi1xyXG4gICAqL1xyXG4gIGdldEtleURpcmVjdGlvbigpIHtcclxuICAgIHZhciBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRLZXkoXCJsZWZ0XCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmdldEtleShcInJpZ2h0XCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldEtleShcInVwXCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmdldEtleShcImRvd25cIikpIHtcclxuICAgICAgZGlyZWN0aW9uLnkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24ueCAmJiBkaXJlY3Rpb24ueSkge1xyXG4gICAgICBkaXJlY3Rpb24uZGl2KE1hdGguU1FSVDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOBrueKtuaFi+OCkuioreWumuOBmeOCi1xyXG4gICAqL1xyXG4gIHNldEtleShrZXksIGZsYWcpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICB0aGlzLmtleVtrZXldID0gZmxhZztcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLlhajjgabpm6LjgZfjgZ/jgZPjgajjgavjgZnjgotcclxuICAgKi9cclxuICBjbGVhcktleSgpIHtcclxuICAgIHRoaXMua2V5ID0ge307XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBlbnVtIEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRVxyXG4gKiDmlrnlkJHjga7jgqLjg7PjgrDjg6sganNkdWNr44Gn44Gv5pWw5a2X44KS44OX44Ot44OR44OG44Kj44Gr5oyH5a6a44Gn44GN44Gq44GE77yfXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5LZXlib2FyZC5BUlJPV19CSVRfVE9fQU5HTEVfVEFCTEUgPSB7XHJcbiAgLyogQHByb3BlcnR5IOS4iyAqL1xyXG4gIDB4MDE6IDI3MCxcclxuICAvKiBAcHJvcGVydHkg5Y+zICovXHJcbiAgMHgwMjogICAwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIogKi9cclxuICAweDA0OiAgOTAsXHJcbiAgLyogQHByb3BlcnR5IOW3piAqL1xyXG4gIDB4MDg6IDE4MCxcclxuXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iiAqL1xyXG4gIDB4MDY6ICA0NSxcclxuICAvKiBAcHJvcGVydHkg5Y+z5LiLICovXHJcbiAgMHgwMzogMzE1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIogKi9cclxuICAweDBjOiAxMzUsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4iyAqL1xyXG4gIDB4MDk6IDIyNSxcclxuXHJcbiAgLy8g5LiJ5pa55ZCR5ZCM5pmC5oq844GX5a++5b+cXHJcbiAgLy8g5oOz5a6a5aSW44Gu5pON5L2c44Gg44GM5a++5b+c44GX44Go44GE44Gf44G744GG44GM54Sh6ZujXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iuW3piAqL1xyXG4gIDB4MGU6ICA5MCxcclxuICAvKiBAcHJvcGVydHkg5LiK5bem5LiLICovXHJcbiAgMHgwZDogMTgwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIvlj7MgKi9cclxuICAweDBiOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOS4i+WPs+S4iiAqL1xyXG4gIDB4MDc6ICAgMCxcclxufTtcclxuXHJcbi8qXHJcbiAqIEBzdGF0aWNcclxuICogQGVudW0gS0VZX0NPREVcclxuICog44Kt44O855Wq5Y+3XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5LZXlib2FyZC5LRVlfQ09ERSA9IHtcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImJhY2tzcGFjZVwiIDogOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInRhYlwiICAgICAgIDogOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVudGVyXCIgICAgIDogMTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJyZXR1cm5cIiAgICA6IDEzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic2hpZnRcIiAgICAgOiAxNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImN0cmxcIiAgICAgIDogMTcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJhbHRcIiAgICAgICA6IDE4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGF1c2VcIiAgICAgOiAxOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNhcHNsb2NrXCIgIDogMjAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlc2NhcGVcIiAgICA6IDI3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGFnZXVwXCIgICAgOiAzMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBhZ2Vkb3duXCIgIDogMzQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlbmRcIiAgICAgICA6IDM1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaG9tZVwiICAgICAgOiAzNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImxlZnRcIiAgICAgIDogMzcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ1cFwiICAgICAgICA6IDM4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicmlnaHRcIiAgICAgOiAzOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRvd25cIiAgICAgIDogNDAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJpbnNlcnRcIiAgICA6IDQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZGVsZXRlXCIgICAgOiA0NixcclxuICBcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjBcIiA6IDQ4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiMVwiIDogNDksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIyXCIgOiA1MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjNcIiA6IDUxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiNFwiIDogNTIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI1XCIgOiA1MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjZcIiA6IDU0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiN1wiIDogNTUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI4XCIgOiA1NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjlcIiA6IDU3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFxyXG4gIFwiYVwiIDogNjUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJBXCIgOiA2NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImJcIiA6IDY2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiQlwiIDogNjYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjXCIgOiA2NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkNcIiA6IDY3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZFwiIDogNjgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJEXCIgOiA2OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVcIiA6IDY5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiRVwiIDogNjksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmXCIgOiA3MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkZcIiA6IDcwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZ1wiIDogNzEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJHXCIgOiA3MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImhcIiA6IDcyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiSFwiIDogNzIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJpXCIgOiA3MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIklcIiA6IDczLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwialwiIDogNzQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJKXCIgOiA3NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImtcIiA6IDc1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiS1wiIDogNzUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJsXCIgOiA3NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkxcIiA6IDc2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibVwiIDogNzcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJNXCIgOiA3NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm5cIiA6IDc4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiTlwiIDogNzgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJvXCIgOiA3OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIk9cIiA6IDc5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicFwiIDogODAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJQXCIgOiA4MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInFcIiA6IDgxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiUVwiIDogODEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJyXCIgOiA4MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlJcIiA6IDgyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic1wiIDogODMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJTXCIgOiA4MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInRcIiA6IDg0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiVFwiIDogODQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ1XCIgOiA4NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlVcIiA6IDg1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidlwiIDogODYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJWXCIgOiA4NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIndcIiA6IDg3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiV1wiIDogODcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ4XCIgOiA4OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlhcIiA6IDg4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwieVwiIDogODksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJZXCIgOiA4OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInpcIiA6IDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiWlwiIDogOTAsXHJcbiAgXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQwXCIgOiA5NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDFcIiA6IDk3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkMlwiIDogOTgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQzXCIgOiA5OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDRcIiA6IDEwMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDVcIiA6IDEwMSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDZcIiA6IDEwMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDdcIiA6IDEwMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDhcIiA6IDEwNCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDlcIiA6IDEwNSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm11bHRpcGx5XCIgICAgICA6IDEwNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImFkZFwiICAgICAgICAgICA6IDEwNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInN1YnRyYWN0XCIgICAgICA6IDEwOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRlY2ltYWxwb2ludFwiICA6IDExMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRpdmlkZVwiICAgICAgICA6IDExMSxcclxuXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMVwiICAgIDogMTEyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjJcIiAgICA6IDExMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYzXCIgICAgOiAxMTQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmNFwiICAgIDogMTE1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjVcIiAgICA6IDExNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY2XCIgICAgOiAxMTcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmN1wiICAgIDogMTE4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjhcIiAgICA6IDExOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY5XCIgICAgOiAxMjAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMTBcIiAgIDogMTIxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjExXCIgICA6IDEyMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYxMlwiICAgOiAxMjMsXHJcbiAgXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1sb2NrXCIgICA6IDE0NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNjcm9sbGxvY2tcIjogMTQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic2VtaWNvbG9uXCIgOiAxODYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlcXVhbHNpZ25cIiA6IDE4NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNvbW1hXCIgICAgIDogMTg4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZGFzaFwiICAgICAgOiAxODksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwZXJpb2RcIiAgICA6IDE5MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImZvcndhcmQgc2xhc2hcIiA6IDE5MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIi9cIjogMTkxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZ3JhdmUgYWNjZW50XCIgIDogMTkyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwib3BlbiBicmFja2V0XCIgIDogMjE5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYmFjayBzbGFzaFwiICAgIDogMjIwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY2xvc2UgYnJhY2tldFwiICA6IDIyMSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNpbmdsZSBxdW90ZVwiICA6IDIyMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNwYWNlXCIgICAgICAgICA6IDMyXHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1vdXNlRXZlbnQvVG91Y2jmi6HlvLVcclxuICogQG1ldGhvZCAgICBwb2ludFhcclxuICog44Oe44Km44K544GuWOW6p+aomS5cclxuICovXHJcbnZhciBwb2ludFggPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBNb3VzZUV2ZW50L1RvdWNo5ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRYXHJcbiAqIOODnuOCpuOCueOBrljluqfmqJkuXHJcbiAqL1xyXG52YXIgcG9pbnRZID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb3VjaEV2ZW505ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRYXHJcbiAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuICovXHJcbnZhciB0b3VjaFBvaW50WCA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdG0uZ2xvYmFsLnNjcm9sbFg7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvdWNoRXZlbnTmi6HlvLVcclxuICogQG1ldGhvZCAgICBwb2ludFlcclxuICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4gKi9cclxudmFyIHRvdWNoUG9pbnRZID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAvLyByZXR1cm4gdGhpcy50b3VjaGVzWzBdLnBhZ2VZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG0uZ2xvYmFsLnNjcm9sbFk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbi8vIDsoZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vIGlmICghcGhpbmEuZ2xvYmFsLkV2ZW50KSByZXR1cm4gO1xyXG5cclxuICAvKipcclxuICAgKiBAY2xhc3MgZ2xvYmFsLkV2ZW50XHJcbiAgICog5pei5a2Y44GuRXZlbnTjgqrjg5bjgrjjgqfjgq/jg4jmi6HlvLVcclxuICAgKi9cclxuICAgIFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBtZXRob2Qgc3RvcFxyXG4gIC8vICAqIOOCpOODmeODs+ODiOOBruODh+ODleOCqeODq+ODiOWHpueQhiAmIOS8nemBlOOCkuatouOCgeOCi1xyXG4gIC8vICAqL1xyXG4gIC8vIEV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAvLyDjgqTjg5njg7Pjg4jjgq3jg6Pjg7Pjgrvjg6tcclxuICAvLyAgIHRoaXMucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIC8vIOOCpOODmeODs+ODiOS8nemBlOOCkuatouOCgeOCi1xyXG4gIC8vICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAvLyB9O1xyXG5cclxuLy8gfSkoKTtcclxuXHJcblxyXG4vLyAoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAgIGlmICghcGhpbmEuZ2xvYmFsLk1vdXNlRXZlbnQpIHJldHVybiA7XHJcblxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBjbGFzcyBnbG9iYWwuTW91c2VFdmVudFxyXG4vLyAgICAqIE1vdXNlRXZlbnQg44Kv44Op44K5XHJcbi8vICAgICovXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFhcclxuLy8gICAgKiDjg57jgqbjgrnjga5Y5bqn5qiZLlxyXG4vLyAgICAqL1xyXG4vLyAgIE1vdXNlRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHJldHVybiB0aGlzLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgLy8gcmV0dXJuIHRoaXMucGFnZVggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gd2luZG93LnNjcm9sbFg7XHJcbi8vICAgfSk7XHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFlcclxuLy8gICAgKiDjg57jgqbjgrnjga5Z5bqn5qiZLlxyXG4vLyAgICAqL1xyXG4vLyAgIE1vdXNlRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WVwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHJldHVybiB0aGlzLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbi8vICAgICAvLyByZXR1cm4gdGhpcy5wYWdlWSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHdpbmRvdy5zY3JvbGxZO1xyXG4vLyAgIH0pO1xyXG4gICAgXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbi8vICAgaWYgKCFwaGluYS5nbG9iYWwuVG91Y2hFdmVudCkgcmV0dXJuIDtcclxuICBcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAY2xhc3MgZ2xvYmFsLlRvdWNoRXZlbnRcclxuLy8gICAgKiBUb3VjaEV2ZW50IOOCr+ODqeOCuVxyXG4vLyAgICAqL1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRYXHJcbi8vICAgICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4vLyAgICAqL1xyXG4vLyAgIFRvdWNoRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0bS5nbG9iYWwuc2Nyb2xsWDtcclxuLy8gICB9KTtcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WVxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaEV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFlcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuLy8gICAgICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRtLmdsb2JhbC5zY3JvbGxZO1xyXG4vLyAgIH0pOyAgXHJcbiAgICBcclxuLy8gfSkoKTtcclxuXHJcblxyXG4vLyAoZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuLy8gICBpZiAoIXBoaW5hLmdsb2JhbC5Ub3VjaCkgcmV0dXJuIDtcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAY2xhc3MgZ2xvYmFsLlRvdWNoXHJcbi8vICAgICogVG91Y2hFdmVudCDjgq/jg6njgrlcclxuLy8gICAgKi9cclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WFxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRYXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICB9KTtcclxuXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFlcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2gucHJvdG90eXBlLmdldHRlcihcInBvaW50WVwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuLy8gICB9KTtcclxuICAgIFxyXG4vLyB9KSgpO1xyXG5cclxudmFyIEJVVFRPTl9NQVA7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0Lk1vdXNlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqL1xyXG5jbGFzcyBNb3VzZSBleHRlbmRzIElucHV0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5pZCA9IDA7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fc3RhcnQocG9pbnRYLmdldC5jYWxsKGUpLCBwb2ludFkuZ2V0LmNhbGwoZSksIDE8PGUuYnV0dG9uKTtcclxuICAgICAgLy8gc2VsZi5fc3RhcnQoZS5wb2ludFgsIGUucG9pbnRZLCAxPDxlLmJ1dHRvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fZW5kKDE8PGUuYnV0dG9uKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fbW92ZShwb2ludFguZ2V0LmNhbGwoZSksIHBvaW50WS5nZXQuY2FsbChlKSk7XHJcbiAgICAgIC8vIHNlbGYuX21vdmUoZS5wb2ludFgsIGUucG9pbnRZKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOODnuOCpuOCueOBjOOCreODo+ODs+ODkOOCueimgee0oOOBruWkluOBq+WHuuOBn+WgtOWQiOOBruWvvuW/nFxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oZSkgIHtcclxuICAgICAgc2VsZi5fZW5kKDEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7Plj5blvpdcclxuICAgKi9cclxuICBnZXRCdXR0b24oYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBidXR0b24gPSBCVVRUT05fTUFQW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAodGhpcy5ub3cgJiBidXR0b24pICE9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7Pjg4Djgqbjg7Plj5blvpdcclxuICAgKi9cclxuICBnZXRCdXR0b25Eb3duKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBCVVRUT05fTUFQW2J1dHRvbl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICh0aGlzLnN0YXJ0ICYgYnV0dG9uKSAhPSAwO1xyXG4gIH1cclxuICAgICAgXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44Ki44OD44OX5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0QnV0dG9uVXAoYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBidXR0b24gPSBCVVRUT05fTUFQW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAodGhpcy5lbmQgJiBidXR0b24pICE9IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIEBzdGF0aWMgQHByb3BlcnR5ICovXHJcbk1vdXNlLkJVVFRPTl9MRUZUID0gMHgxO1xyXG4vKiogQHN0YXRpYyBAcHJvcGVydHkgKi9cclxuTW91c2UuQlVUVE9OX01JRERMRSA9IDB4MjtcclxuLyoqIEBzdGF0aWMgQHByb3BlcnR5ICovXHJcbk1vdXNlLkJVVFRPTl9SSUdIVCA9IDB4NDtcclxuXHJcbkJVVFRPTl9NQVAgPSB7XHJcbiAgXCJsZWZ0XCIgIDogTW91c2UuQlVUVE9OX0xFRlQsXHJcbiAgXCJtaWRkbGVcIjogTW91c2UuQlVUVE9OX01JRERMRSxcclxuICBcInJpZ2h0XCIgOiBNb3VzZS5CVVRUT05fUklHSFRcclxufTtcclxuXHJcbk1vdXNlLnByb3RvdHlwZS5nZXRQb2ludGluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRCdXR0b24oXCJsZWZ0XCIpOyB9O1xyXG5Nb3VzZS5wcm90b3R5cGUuZ2V0UG9pbnRpbmdTdGFydCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRCdXR0b25Eb3duKFwibGVmdFwiKTsgfTtcclxuTW91c2UucHJvdG90eXBlLmdldFBvaW50aW5nRW5kID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmdldEJ1dHRvblVwKFwibGVmdFwiKTsgfTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuVG91Y2hcclxuICogQGV4dGVuZHMgcGhpbmEuaW5wdXQuSW5wdXRcclxuICovXHJcbmNsYXNzIFRvdWNoIGV4dGVuZHMgSW5wdXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBpc011bHRpKSB7XHJcbiAgICBzdXBlcihkb21FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmlkID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaXNNdWx0aSA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9zdGFydCh0b3VjaFBvaW50WC5nZXQuY2FsbChlKSwgdG91Y2hQb2ludFkuZ2V0LmNhbGwoZSksIHRydWUpO1xyXG4gICAgICAvLyBzZWxmLl9zdGFydChlLnBvaW50WCwgZS5wb2ludFksIHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9lbmQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fbW92ZSh0b3VjaFBvaW50WC5nZXQuY2FsbChlKSwgdG91Y2hQb2ludFkuZ2V0LmNhbGwoZSkpO1xyXG4gICAgICAvLyBzZWxmLl9tb3ZlKGUucG9pbnRYLCBlLnBvaW50WSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCv+ODg+ODgeOBl+OBpuOBhOOCi+OBi+OCkuWIpOWumlxyXG4gICAqL1xyXG4gIGdldFRvdWNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm93ICE9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCv+ODg+ODgemWi+Wni+aZguOBqyB0cnVlXHJcbiAgICovXHJcbiAgZ2V0VG91Y2hTdGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0ICE9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCv+ODg+ODgee1guS6huaZguOBqyB0cnVlXHJcbiAgICovXHJcbiAgZ2V0VG91Y2hFbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmQgIT0gMDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZFxyXG4gKiDjg53jgqTjg7Pjg4bjgqPjg7PjgrDnirbmhYvlj5blvpcobW91c2Ug44Go44Gu5beu55Ww5a++562WKVxyXG4gKi9cclxuVG91Y2gucHJvdG90eXBlLmdldFBvaW50aW5nICAgICAgICA9IFRvdWNoLnByb3RvdHlwZS5nZXRUb3VjaDtcclxuLyoqXHJcbiAqIEBtZXRob2RcclxuICog44Od44Kk44Oz44OG44Kj44Oz44Kw44KS6ZaL5aeL44GX44Gf44GL44KS5Y+W5b6XKG1vdXNlIOOBqOOBruW3rueVsOWvvuetlilcclxuICovXHJcblRvdWNoLnByb3RvdHlwZS5nZXRQb2ludGluZ1N0YXJ0ICAgPSBUb3VjaC5wcm90b3R5cGUuZ2V0VG91Y2hTdGFydDtcclxuLyoqXHJcbiAqIEBtZXRob2RcclxuICog44Od44Kk44Oz44OG44Kj44Oz44Kw44KS57WC5LqG44GX44Gf44GL44KS5Y+W5b6XKG1vdXNlIOOBqOOBruW3rueVsOWvvuetlilcclxuICovXHJcblRvdWNoLnByb3RvdHlwZS5nZXRQb2ludGluZ0VuZCAgICAgPSBUb3VjaC5wcm90b3R5cGUuZ2V0VG91Y2hFbmQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5Ub3VjaExpc3RcclxuICovXHJcbmNsYXNzIFRvdWNoTGlzdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b3VjaGVzID0gW107XHJcbiAgICB2YXIgdG91Y2hNYXAgPSB0aGlzLnRvdWNoTWFwID0ge307XHJcblxyXG4gICAgLy8gMzJiaXQg5ZGo5pyf44GnSUTjgpLjg6vjg7zjg5fjgZXjgZvjgotcclxuICAgIHRoaXMuX2lkID0gbmV3IFVpbnQzMkFycmF5KDEpO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBlYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgdG91Y2ggPSBzZWxmLmdldEVtcHR5KCk7XHJcbiAgICAgICAgdG91Y2hNYXBbdC5pZGVudGlmaWVyXSA9IHRvdWNoO1xyXG4gICAgICAgIHRvdWNoLl9zdGFydChwb2ludFguZ2V0LmNhbGwodCksIHBvaW50WS5nZXQuY2FsbCh0KSk7XHJcbiAgICAgICAgLy8gdG91Y2guX3N0YXJ0KHQucG9pbnRYLCB0LnBvaW50WSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciBpZCA9IHQuaWRlbnRpZmllcjtcclxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaE1hcFtpZF07XHJcbiAgICAgICAgdG91Y2guX2VuZCgpO1xyXG4gICAgICAgIGRlbGV0ZSB0b3VjaE1hcFtpZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciB0b3VjaCA9IHRvdWNoTWFwW3QuaWRlbnRpZmllcl07XHJcbiAgICAgICAgdG91Y2guX21vdmUocG9pbnRYLmdldC5jYWxsKHQpLCBwb2ludFkuZ2V0LmNhbGwodCkpO1xyXG4gICAgICAgIC8vIHRvdWNoLl9tb3ZlKHQucG9pbnRYLCB0LnBvaW50WSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlLnN0b3AoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlQaG9uZSDjgafjga8gNuacrOaMh+S7peS4iuOCv+ODg+ODgeOBmeOCi+OBqOW8t+WItueahOOBq+OBmeOBueOBpuOBruOCv+ODg+ODgeOBjOino+mZpOOBleOCjOOCi1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+OBk+OBruerr+acq+OBp+OBruWQjOaZguOCv+ODg+ODgeaVsOOBruWItumZkOOCkui2heOBiOOBvuOBl+OBn+OAgicpO1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciBpZCA9IHQuaWRlbnRpZmllcjtcclxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaE1hcFtpZF07XHJcbiAgICAgICAgdG91Y2guX2VuZCgpO1xyXG4gICAgICAgIGRlbGV0ZSB0b3VjaE1hcFtpZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICBlLnN0b3AoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW1wdHkoKSB7XHJcbiAgICB2YXIgdG91Y2ggPSBuZXcgVG91Y2godGhpcy5kb21FbGVtZW50LCB0cnVlKTtcclxuICBcclxuICAgIHRvdWNoLmlkID0gdGhpcy5pZDtcclxuICAgIHRoaXMudG91Y2hlcy5wdXNoKHRvdWNoKTtcclxuXHJcbiAgICByZXR1cm4gdG91Y2g7XHJcbiAgfVxyXG5cclxuICBnZXRUb3VjaChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG91Y2hNYXBbaWRdO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG91Y2godG91Y2gpIHtcclxuICAgIHZhciBpID0gdGhpcy50b3VjaGVzLmluZGV4T2YodG91Y2gpO1xyXG4gICAgdGhpcy50b3VjaGVzLnNwbGljZShpLCAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uKHRvdWNoKSB7XHJcbiAgICAgIGlmICghdG91Y2gucmVsZWFzZWQpIHtcclxuICAgICAgICB0b3VjaC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRvdWNoLmZsYWdzID09PSAwKSB7XHJcbiAgICAgICAgICB0b3VjaC5yZWxlYXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRvdWNoLnJlbGVhc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUb3VjaCh0b3VjaCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBpZCgpIHsgcmV0dXJuIHRoaXMuX2lkWzBdKys7IH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuR2FtZXBhZE1hbmFnZXJcclxuICog44Ky44O844Og44OR44OD44OJ44Oe44ON44O844K444Oj44O8LlxyXG4gKiDjgrLjg7zjg6Djg5Hjg4Pjg4nmjqXntprnirbms4Hjga7nm6PoppbjgIHlgIvjgIXjga7jgrLjg7zjg6Djg5Hjg4Pjg4njga7lhaXlipvnirbmhYvjga7mm7TmlrDjgpLooYzjgYYuXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBHYW1lcGFkTWFuYWdlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOS9nOaIkOa4iOOBv3BoaW5hLmlucHV0LkdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjga7jg6rjgrnjg4hcclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3QuPG51bWJlciwgcGhpbmEuaW5wdXQuR2FtZXBhZD59XHJcbiAgICovXHJcbiAgLy8gZ2FtZXBhZHM6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIOS9nOaIkOa4iOOBv+OCsuODvOODoOODkeODg+ODieOBrmluZGV444Gu44Oq44K544OIXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICAvLyBfY3JlYXRlZDogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICog44Op44OD44OX5YmNR2FtZXBhZOOBruODquOCueODiFxyXG4gICAqIEB0eXBlIHtwaGluYS5pbnB1dC5HYW1lcGFkW119XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICAvLyBfcmF3Z2FtZXBhZHM6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmdhbWVwYWRzID0ge307XHJcbiAgICB0aGlzLl9jcmVhdGVkID0gW107XHJcbiAgICB0aGlzLl9yYXdnYW1lcGFkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuX3ByZXZUaW1lc3RhbXBzID0ge307XHJcblxyXG4gICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBudWxsO1xyXG4gICAgdmFyIG5hdmlnYXRvciA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmdldEdhbWVwYWRzKSB7XHJcbiAgICAgIHRoaXMuX2dldEdhbWVwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzLmJpbmQobmF2aWdhdG9yKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcykge1xyXG4gICAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcy5iaW5kKG5hdmlnYXRvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IGZ1bmN0aW9uKCkge307XHJcbiAgICB9XHJcblxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGNvbm5lY3RlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGdhbWVwYWQgPSB0aGlzLmdldChlLmdhbWVwYWQuaW5kZXgpO1xyXG4gICAgICBnYW1lcGFkLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2Nvbm5lY3RlZCcsIHtcclxuICAgICAgICBnYW1lcGFkOiBnYW1lcGFkLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGRpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGdhbWVwYWQgPSB0aGlzLmdldChlLmdhbWVwYWQuaW5kZXgpO1xyXG4gICAgICBnYW1lcGFkLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZsYXJlKCdkaXNjb25uZWN0ZWQnLCB7XHJcbiAgICAgICAgZ2FtZXBhZDogZ2FtZXBhZCxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oOF5aCx5pu05paw5Yem55CGXHJcbiAgICog44Oe44Kk44OV44Os44O844Og5ZG844KT44Gn5LiL44GV44GELlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX3BvbGwoKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gdGhpcy5fY3JlYXRlZC5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLl9jcmVhdGVkW2ldO1xyXG4gICAgICB2YXIgcmF3Z2FtZXBhZCA9IHRoaXMuX3Jhd2dhbWVwYWRzW2luZGV4XTtcclxuXHJcbiAgICAgIGlmICghcmF3Z2FtZXBhZCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmF3Z2FtZXBhZC50aW1lc3RhbXAgJiYgKHJhd2dhbWVwYWQudGltZXN0YW1wID09PSB0aGlzLl9wcmV2VGltZXN0YW1wc1tpXSkpIHtcclxuICAgICAgICB0aGlzLmdhbWVwYWRzW2luZGV4XS5fdXBkYXRlU3RhdGVFbXB0eSgpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9wcmV2VGltZXN0YW1wc1tpXSA9IHJhd2dhbWVwYWQudGltZXN0YW1wO1xyXG4gICAgICB0aGlzLmdhbWVwYWRzW2luZGV4XS5fdXBkYXRlU3RhdGUocmF3Z2FtZXBhZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZXjgozjgZ9pbmRleOOBrkdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZkuXHJcbiAgICpcclxuICAgKiDmnKrkvZzmiJDjga7loLTlkIjjga/kvZzmiJDjgZfjgabov5TjgZkuXHJcbiAgICovXHJcbiAgZ2V0KGluZGV4KSB7XHJcbiAgICBpbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmdhbWVwYWRzW2luZGV4XSkge1xyXG4gICAgICB0aGlzLl9jcmVhdGVkLnB1c2goaW5kZXgpO1xyXG4gICAgICB0aGlzLmdhbWVwYWRzW2luZGV4XSA9IG5ldyBHYW1lcGFkKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nYW1lcGFkc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZXjgozjgZ9pbmRleOOBrkdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjgpLnoLTmo4TjgZnjgosuXHJcbiAgICog56C05qOE44GV44KM44GfR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOBr+S7pemZjeabtOaWsOOBleOCjOOBquOBhC5cclxuICAgKi9cclxuICBkaXNwb3NlKGluZGV4KSB7XHJcbiAgICBpZiAoY29udGFpbnMuY2FsbCh0aGlzLl9jcmVhdGVkLCBpbmRleCkpIHtcclxuICAgIC8vIGlmICh0aGlzLl9jcmVhdGVkLmNvbnRhaW5zKGluZGV4KSkge1xyXG4gICAgICB2YXIgZ2FtZXBhZCA9IHRoaXMuZ2V0KGluZGV4KTtcclxuICAgICAgZGVsZXRlIHRoaXMuZ2FtZXBhZFtnYW1lcGFkXTtcclxuICAgICAgZXJhc2UuY2FsbCh0aGlzLl9jcmVhdGVkLCBpbmRleCk7XHJcbiAgICAgIC8vIHRoaXMuX2NyZWF0ZWQuZXJhc2UoaW5kZXgpO1xyXG5cclxuICAgICAgZ2FtZXBhZC5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaMh+WumuOBleOCjOOBn2luZGV444Gu44Ky44O844Og44OR44OD44OJ44GM5o6l57aa5Lit44GL44Gp44GG44GL44KS6L+U44GZLlxyXG4gICAqXHJcbiAgICogR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOBjOacquS9nOaIkOOBruWgtOWQiOOBp+OCguWLleS9nOOBmeOCiy5cclxuICAgKi9cclxuICBpc0Nvbm5lY3RlZChpbmRleCkge1xyXG4gICAgaW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9yYXdnYW1lcGFkc1tpbmRleF0gJiYgdGhpcy5fcmF3Z2FtZXBhZHNbaW5kZXhdLmNvbm5lY3RlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3BvbGwoKSB7XHJcbiAgICB2YXIgcmF3R2FtZXBhZHMgPSB0aGlzLl9nZXRHYW1lcGFkcygpO1xyXG4gICAgaWYgKHJhd0dhbWVwYWRzKSB7XHJcbiAgICAgIGNsZWFyLmNhbGwodGhpcy5fcmF3Z2FtZXBhZHMpO1xyXG4gICAgICAvLyB0aGlzLl9yYXdnYW1lcGFkcy5jbGVhcigpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IHJhd0dhbWVwYWRzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHJhd0dhbWVwYWRzW2ldKSB7XHJcbiAgICAgICAgICB0aGlzLl9yYXdnYW1lcGFkcy5wdXNoKHJhd0dhbWVwYWRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIF9zdGF0aWM6IHtcclxuICAvLyAgIC8qKiDjg5bjg6njgqbjgrbjgYxHYW1lcGFkIEFQSeOBq+WvvuW/nOOBl+OBpuOBhOOCi+OBiy4gKi9cclxuICAvLyAgIGlzQXZhaWxhYmxlOiAoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgIHZhciBuYXYgPSBwaGluYS5nbG9iYWwubmF2aWdhdG9yO1xyXG4gIC8vICAgICBpZiAoIW5hdikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAvLyAgICAgcmV0dXJuICghIW5hdi5nZXRHYW1lcGFkcykgfHwgKCEhbmF2LndlYmtpdEdldEdhbWVwYWRzKTtcclxuICAvLyAgIH0pKCksXHJcbiAgLy8gfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbi8qKiDjg5bjg6njgqbjgrbjgYxHYW1lcGFkIEFQSeOBq+WvvuW/nOOBl+OBpuOBhOOCi+OBiy4gKi9cclxuR2FtZXBhZE1hbmFnZXIuaXNBdmFpbGFibGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5hdiA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICBpZiAoIW5hdikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICByZXR1cm4gKCEhbmF2LmdldEdhbWVwYWRzKSB8fCAoISFuYXYud2Via2l0R2V0R2FtZXBhZHMpO1xyXG59KSgpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuR2FtZXBhZFxyXG4gKiDjgrLjg7zjg6Djg5Hjg4Pjg4lcclxuICpcclxuICog55u05o6l44Kk44Oz44K544K/44Oz44K55YyW44Gb44Ga44CBcGhpbmEuaW5wdXQuR2FtZXBhZE1hbmFnZXLjgqrjg5bjgrjjgqfjgq/jg4jjgYvjgonlj5blvpfjgZfjgabkvb/nlKjjgZnjgosuXHJcbiAqL1xyXG5jbGFzcyBHYW1lcGFkIHtcclxuLy8gcGhpbmEuZGVmaW5lKFwicGhpbmEuaW5wdXQuR2FtZXBhZFwiLCB7XHJcblxyXG4gIC8vIGluZGV4OiBudWxsLFxyXG4gIC8vIGJ1dHRvbnM6IG51bGwsXHJcbiAgLy8gLyoqIEB0eXBlIHtBcnJheS48cGhpbmEuZ2VvbS5WZWN0b3IyPn0gKi9cclxuICAvLyBzdGlja3M6IG51bGwsXHJcblxyXG4gIC8vIGlkOiBudWxsLFxyXG4gIC8vIGNvbm5lY3RlZDogZmFsc2UsXHJcbiAgLy8gbWFwcGluZzogbnVsbCxcclxuICAvLyB0aW1lc3RhbXA6IG51bGwsXHJcblxyXG4gIGNvbnN0cnVjdG9yKGluZGV4KSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcbiAgICAvLyB0aGlzLmJ1dHRvbnMgPSBBcnJheS5yYW5nZSgwLCAxNikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5idXR0b25zID0gcmFuZ2UuY2FsbChbXSwgMCwgMTYpLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcclxuICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICBkb3duOiBmYWxzZSxcclxuICAgICAgICB1cDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RpY2tzID0gcmFuZ2UuY2FsbChbXSwgMCwgMikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gdGhpcy5zdGlja3MgPSBBcnJheS5yYW5nZSgwLCAyKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYXBwaW5nID0gbnVsbDtcclxuICAgIHRoaXMudGltZXN0YW1wID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OBjOaKvOOBleOCjOOBpuOBhOOCi+OBiy5cclxuICAgKi9cclxuICBnZXRLZXkoYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEdhbWVwYWQuQlVUVE9OX0NPREVbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl0ucHJlc3NlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OCkuaKvOOBl+OBny5cclxuICAgKi9cclxuICBnZXRLZXlEb3duKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBHYW1lcGFkLkJVVFRPTl9DT0RFW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbl0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dLmRvd247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgpLpm6LjgZfjgZ8uXHJcbiAgICovXHJcbiAgZ2V0S2V5VXAoYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEdhbWVwYWQuQlVUVE9OX0NPREVbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl0udXA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDljYHlrZfjgq3jg7zjga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJEuXHJcbiAgICovXHJcbiAgZ2V0S2V5QW5nbGUoKSB7XHJcbiAgICB2YXIgYW5nbGUgPSBudWxsO1xyXG4gICAgdmFyIGFycm93Qml0ID1cclxuICAgICAgKHRoaXMuZ2V0S2V5KCdsZWZ0JykgPDwgMykgfCAvLyAxMDAwXHJcbiAgICAgICh0aGlzLmdldEtleSgndXAnKSA8PCAyKSB8IC8vIDAxMDBcclxuICAgICAgKHRoaXMuZ2V0S2V5KCdyaWdodCcpIDw8IDEpIHwgLy8gMDAxMFxyXG4gICAgICAodGhpcy5nZXRLZXkoJ2Rvd24nKSk7IC8vIDAwMDFcclxuXHJcbiAgICBpZiAoYXJyb3dCaXQgIT09IDAgJiYgQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFLmhhc093blByb3BlcnR5KGFycm93Qml0KSkge1xyXG4gICAgICBhbmdsZSA9IEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRVthcnJvd0JpdF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y2B5a2X44Kt44O844Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCR44KS44OZ44Kv44OI44Or44GnLlxyXG4gICAqIOato+imj+WMluOBleOCjOOBpuOBhOOCiy5cclxuICAgKi9cclxuICBnZXRLZXlEaXJlY3Rpb24oKSB7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KCdsZWZ0JykpIHtcclxuICAgICAgZGlyZWN0aW9uLnggPSAtMTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRLZXkoJ3JpZ2h0JykpIHtcclxuICAgICAgZGlyZWN0aW9uLnggPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KCd1cCcpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0S2V5KCdkb3duJykpIHtcclxuICAgICAgZGlyZWN0aW9uLnkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24ueCAmJiBkaXJlY3Rpb24ueSkge1xyXG4gICAgICBkaXJlY3Rpb24uZGl2KE1hdGguU1FSVDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrnjg4bjgqPjg4Pjgq/jga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJEuXHJcbiAgICovXHJcbiAgZ2V0U3RpY2tBbmdsZShzdGlja0lkKSB7XHJcbiAgICBzdGlja0lkID0gc3RpY2tJZCB8fCAwO1xyXG4gICAgdmFyIHN0aWNrID0gdGhpcy5zdGlja3Nbc3RpY2tJZF07XHJcbiAgICByZXR1cm4gc3RpY2sgPyBNYXRoLmF0YW4yKC1zdGljay55LCBzdGljay54KSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrnjg4bjgqPjg4Pjgq/jga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJHjgpLjg5njgq/jg4jjg6vjgacuXHJcbiAgICovXHJcbiAgZ2V0U3RpY2tEaXJlY3Rpb24oc3RpY2tJZCkge1xyXG4gICAgc3RpY2tJZCA9IHN0aWNrSWQgfHwgMDtcclxuICAgIHJldHVybiB0aGlzLnN0aWNrcyA/IHRoaXMuc3RpY2tzW3N0aWNrSWRdLmNsb25lKCkgOiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVN0YXRlKGdhbWVwYWQpIHtcclxuICAgIHRoaXMuaWQgPSBnYW1lcGFkLmlkO1xyXG4gICAgdGhpcy5jb25uZWN0ZWQgPSBnYW1lcGFkLmNvbm5lY3RlZDtcclxuICAgIHRoaXMubWFwcGluZyA9IGdhbWVwYWQubWFwcGluZztcclxuICAgIHRoaXMudGltZXN0YW1wID0gZ2FtZXBhZC50aW1lc3RhbXA7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGllbmQgPSBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpIDwgaWVuZDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbihnYW1lcGFkLmJ1dHRvbnNbaV0sIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGogPSAwLCBqZW5kID0gZ2FtZXBhZC5heGVzLmxlbmd0aDsgaiA8IGplbmQ7IGogKz0gMikge1xyXG4gICAgICB0aGlzLl91cGRhdGVTdGljayhnYW1lcGFkLmF4ZXNbaiArIDBdLCBqIC8gMiwgJ3gnKTtcclxuICAgICAgdGhpcy5fdXBkYXRlU3RpY2soZ2FtZXBhZC5heGVzW2ogKyAxXSwgaiAvIDIsICd5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGF0ZUVtcHR5KCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGllbmQgPSB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpIDwgaWVuZDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS5kb3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS51cCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlQnV0dG9uKHZhbHVlLCBidXR0b25JZCkge1xyXG4gICAgaWYgKHRoaXMuYnV0dG9uc1tidXR0b25JZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbYnV0dG9uSWRdID0ge1xyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHByZXNzZWQ6IGZhbHNlLFxyXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxyXG4gICAgICAgIGRvd246IGZhbHNlLFxyXG4gICAgICAgIHVwOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tidXR0b25JZF07XHJcblxyXG4gICAgYnV0dG9uLmxhc3QgPSBidXR0b24ucHJlc3NlZDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBidXR0b24udmFsdWUgPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgYnV0dG9uLnByZXNzZWQgPSB2YWx1ZS5wcmVzc2VkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGJ1dHRvbi5wcmVzc2VkID0gdmFsdWUgPiBHYW1lcGFkLkFOQUxPR1VFX0JVVFRPTl9USFJFU0hPTEQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmRvd24gPSAoYnV0dG9uLnByZXNzZWQgXiBidXR0b24ubGFzdCkgJiBidXR0b24ucHJlc3NlZDtcclxuICAgIGJ1dHRvbi51cCA9IChidXR0b24ucHJlc3NlZCBeIGJ1dHRvbi5sYXN0KSAmIGJ1dHRvbi5sYXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlU3RpY2sodmFsdWUsIHN0aWNrSWQsIGF4aXNOYW1lKSB7XHJcbiAgICBpZiAodGhpcy5zdGlja3Nbc3RpY2tJZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0aWNrc1tzdGlja0lkXSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGlja3Nbc3RpY2tJZF1bYXhpc05hbWVdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIOODluODqeOCpuOCtuOBjEdhbWVwYWQgQVBJ44Gr5a++5b+c44GX44Gm44GE44KL44GLLiAqL1xyXG5HYW1lcGFkLmlzQXZhaWxhYmxlID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBuYXYgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgaWYgKCFuYXYpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuICghIW5hdi5nZXRHYW1lcGFkcykgfHwgKCEhbmF2LndlYmtpdEdldEdhbWVwYWRzKTtcclxufSkoKTtcclxuXHJcbi8qKiDjgqLjg4rjg63jgrDlhaXlipvlr77lv5zjga7jg5zjgr/jg7Pjga7loLTlkIjjgIHjganjga7nqIvluqbjgb7jgafmirzjgZfovrzjgoDjgahvbuOBq+OBquOCi+OBi+OCkuihqOOBmeOBl+OBjeOBhOWApC4gKi9cclxuR2FtZXBhZC5BTkFMT0dVRV9CVVRUT05fVEhSRVNIT0xEID0gMC41O1xyXG5cclxuLyoqIOODnOOCv+ODs+WQjeOBqOODnOOCv+ODs0lE44Gu44Oe44OD44OXLiAqL1xyXG5HYW1lcGFkLkJVVFRPTl9DT0RFID0ge1xyXG4gICdhJzogMCxcclxuICAnYic6IDEsXHJcbiAgJ3gnOiAyLFxyXG4gICd5JzogMyxcclxuXHJcbiAgJ2wxJzogNCxcclxuICAncjEnOiA1LFxyXG4gICdsMic6IDYsXHJcbiAgJ3IyJzogNyxcclxuXHJcbiAgJ3NlbGVjdCc6IDgsXHJcbiAgJ3N0YXJ0JzogOSxcclxuXHJcbiAgJ2wzJzogMTAsXHJcbiAgJ3IzJzogMTEsXHJcblxyXG4gICd1cCc6IDEyLFxyXG4gICdkb3duJzogMTMsXHJcbiAgJ2xlZnQnOiAxNCxcclxuICAncmlnaHQnOiAxNSxcclxuXHJcbiAgJ3NwZWNpYWwnOiAxNixcclxuXHJcbiAgJ0EnOiAwLFxyXG4gICdCJzogMSxcclxuICAnWCc6IDIsXHJcbiAgJ1knOiAzLFxyXG5cclxuICAnTDEnOiA0LFxyXG4gICdSMSc6IDUsXHJcbiAgJ0wyJzogNixcclxuICAnUjInOiA3LFxyXG5cclxuICAnU0VMRUNUJzogOCxcclxuICAnU1RBUlQnOiA5LFxyXG5cclxuICAnTDMnOiAxMCxcclxuICAnUjMnOiAxMSxcclxuXHJcbiAgJ1VQJzogMTIsXHJcbiAgJ0RPV04nOiAxMyxcclxuICAnTEVGVCc6IDE0LFxyXG4gICdSSUdIVCc6IDE1LFxyXG5cclxuICAnU1BFQ0lBTCc6IDE2LFxyXG59O1xyXG5cclxudmFyIEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRSA9IHtcclxuICAweDAwOiBudWxsLFxyXG5cclxuICAvKiBAcHJvcGVydHkg5LiLICovXHJcbiAgMHgwMTogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlj7MgKi9cclxuICAweDAyOiAwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIogKi9cclxuICAweDA0OiA5MCxcclxuICAvKiBAcHJvcGVydHkg5bemICovXHJcbiAgMHgwODogMTgwLFxyXG5cclxuICAvKiBAcHJvcGVydHkg5Y+z5LiKICovXHJcbiAgMHgwNjogNDUsXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iyAqL1xyXG4gIDB4MDM6IDMxNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiKICovXHJcbiAgMHgwYzogMTM1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIsgKi9cclxuICAweDA5OiAyMjUsXHJcblxyXG4gIC8vIOS4ieaWueWQkeWQjOaZguaKvOOBl+WvvuW/nFxyXG4gIC8vIOaDs+WumuWkluOBruaTjeS9nOOBoOOBjOWvvuW/nOOBl+OBqOOBhOOBn+OBu+OBhuOBjOeEoembo1xyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIrlt6YgKi9cclxuICAweDBlOiA5MCxcclxuICAvKiBAcHJvcGVydHkg5LiK5bem5LiLICovXHJcbiAgMHgwZDogMTgwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIvlj7MgKi9cclxuICAweDBiOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOS4i+WPs+S4iiAqL1xyXG4gIDB4MDc6IDAsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LkFjY2VsZXJvbWV0ZXJcclxuICog44K544Oe44O844OI44OV44Kp44Oz44Gu44K744Oz44K144O85oOF5aCxXHJcbiAqL1xyXG5jbGFzcyBBY2NlbGVyb21ldGVyIHtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSAgZ3Jhdml0eSDph43lipvjgrvjg7PjgrXjg7wgKi9cclxuICAvKiogQHByb3BlcnR5ICBhY2NlbGVyYXRpb24g5Yqg6YCf5bqm44K744Oz44K144O8ICovXHJcbiAgLyoqIEBwcm9wZXJ0eSAgcm90YXRpb24g5Zue6Lui5Yqg6YCf5bqm44K744Oz44K144O8ICovXHJcbiAgLyoqIEBwcm9wZXJ0eSAgb3JpZW50YXRpb24g44K544Oe44O844OI44OV44Kp44Oz44Gu5YK+44GNICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIFxyXG4gICAgdGhpcy5ncmF2aXR5ICAgICAgICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgdGhpcy5yb3RhdGlvbiAgICAgICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgdGhpcy5vcmllbnRhdGlvbiAgICA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuICAgIGlmIChwaGluYSQxLmlzTW9iaWxlKCkpIHtcclxuICAgICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW1vdGlvblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGFjY2VsZXJhdGlvbiA9IHNlbGYuYWNjZWxlcmF0aW9uO1xyXG4gICAgICAgIHZhciBncmF2aXR5ID0gc2VsZi5ncmF2aXR5O1xyXG4gICAgICAgIHZhciByb3RhdGlvbiA9IHNlbGYucm90YXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGUuYWNjZWxlcmF0aW9uKSB7XHJcbiAgICAgICAgICBhY2NlbGVyYXRpb24ueCA9IGUuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICBhY2NlbGVyYXRpb24ueSA9IGUuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgICBhY2NlbGVyYXRpb24ueiA9IGUuYWNjZWxlcmF0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkpIHtcclxuICAgICAgICAgIGdyYXZpdHkueCA9IGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54O1xyXG4gICAgICAgICAgZ3Jhdml0eS55ID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5Lnk7XHJcbiAgICAgICAgICBncmF2aXR5LnogPSBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkuejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUucm90YXRpb25SYXRlKSB7XHJcbiAgICAgICAgICByb3RhdGlvbi54ID0gcm90YXRpb24uYmV0YSAgPSBlLnJvdGF0aW9uUmF0ZS5iZXRhO1xyXG4gICAgICAgICAgcm90YXRpb24ueSA9IHJvdGF0aW9uLmdhbW1hID0gZS5yb3RhdGlvblJhdGUuZ2FtbWE7XHJcbiAgICAgICAgICByb3RhdGlvbi56ID0gcm90YXRpb24uYWxwaGEgPSBlLnJvdGF0aW9uUmF0ZS5hbHBoYTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSBzZWxmLm9yaWVudGF0aW9uO1xyXG4gICAgICAgIG9yaWVudGF0aW9uLmFscGhhICAgPSBlLmFscGhhOyAgLy8geigwfjM2MClcclxuICAgICAgICBvcmllbnRhdGlvbi5iZXRhICAgID0gZS5iZXRhOyAgIC8vIHgoLTE4MH4xODApXHJcbiAgICAgICAgb3JpZW50YXRpb24uZ2FtbWEgICA9IGUuZ2FtbWE7ICAvLyB5KC05MH45MClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuVXBkYXRlclxyXG4gKi9cclxuY2xhc3MgVXBkYXRlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUocm9vdCkge1xyXG4gICAgdGhpcy5fdXBkYXRlRWxlbWVudChyb290KTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIHZhciBhcHAgPSB0aGlzLmFwcDtcclxuXHJcbiAgICAvLyDmm7TmlrDjgZnjgovjgYvjgpLliKTlrppcclxuICAgIGlmIChlbGVtZW50LmF3YWtlID09PSBmYWxzZSkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyDjgqjjg7Pjgr/jg7zjg5Xjg6zjg7zjg6DjgqTjg5njg7Pjg4hcclxuICAgIGlmIChlbGVtZW50LmhhcygnZW50ZXJmcmFtZScpKSB7XHJcbiAgICAgIGVsZW1lbnQuZmxhcmUoJ2VudGVyZnJhbWUnLCB7XHJcbiAgICAgICAgYXBwOiB0aGlzLmFwcCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawXHJcbiAgICBpZiAoZWxlbWVudC51cGRhdGUpIGVsZW1lbnQudXBkYXRlKGFwcCk7XHJcblxyXG4gICAgLy8g44K/44OD44OB5Yik5a6aXHJcbiAgICAvLyB0aGlzLl9jaGVja1BvaW50KGVsZW1lbnQpO1xyXG5cclxuICAgIC8vIOWtkOS+m+OCkuabtOaWsFxyXG4gICAgdmFyIGxlbiA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGVtcENoaWxkcmVuID0gZWxlbWVudC5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVFbGVtZW50KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja1BvaW50KG9iaikge1xyXG4gICAgdGhpcy5hcHAucG9pbnRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgIGlmIChwLmlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fX2NoZWNrUG9pbnQob2JqLCBwKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBfX2NoZWNrUG9pbnQob2JqLCBwKSB7XHJcbiAgICBpZiAoIW9iai5pbnRlcmFjdGl2ZSkgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgcHJldk92ZXJGbGFnID0gb2JqLl9vdmVyRmxhZ3NbcC5pZF07XHJcbiAgICB2YXIgb3ZlckZsYWcgPSBvYmouaGl0VGVzdDIocC54LCBwLnkpO1xyXG4gICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBvdmVyRmxhZztcclxuXHJcbiAgICBpZiAoIXByZXZPdmVyRmxhZyAmJiBvdmVyRmxhZykge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50b3ZlcicsIHtcclxuICAgICAgICBwb2ludGVyOiBwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChwcmV2T3ZlckZsYWcgJiYgIW92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3ZlckZsYWcpIHtcclxuICAgICAgaWYgKHAuZ2V0UG9pbnRpbmdTdGFydCgpKSB7XHJcbiAgICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gdHJ1ZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50c3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX3RvdWNoRmxhZ3NbcC5pZF0pIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludHN0YXknKTtcclxuICAgICAgaWYgKHAuX21vdmVGbGFnKSB7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludG1vdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX3RvdWNoRmxhZ3NbcC5pZF09PT10cnVlICYmIHAuZ2V0UG9pbnRpbmdFbmQoKSkge1xyXG4gICAgICBvYmouX3RvdWNoRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludGVuZCcpO1xyXG5cclxuICAgICAgaWYgKG9iai5fb3ZlckZsYWdzW3AuaWRdKSB7XHJcbiAgICAgICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50b3V0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5JbnRlcmFjdGl2ZVxyXG4gKi9cclxuY2xhc3MgSW50ZXJhY3RpdmUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMubXVsdGlUb3VjaCA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnNvciA9IHtcclxuICAgICAgbm9ybWFsOiAnJyxcclxuICAgICAgaG92ZXI6ICdwb2ludGVyJyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5faG9sZHMgPSBbXTtcclxuICAgIHRoaXMuYXBwLm9uKCdjaGFuZ2VzY2VuZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhci5jYWxsKHRoaXMuX2hvbGRzKTtcclxuICAgICAgLy8gdGhpcy5faG9sZHMuY2xlYXIoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNoZWNrKHJvb3QpIHtcclxuICAgIC8vIOOCq+ODvOOCveODq+OBruOCueOCv+OCpOODq+OCkuWPjeaYoFxyXG4gICAgaWYgKHRoaXMuYXBwLmRvbUVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuX2hvbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmFwcC5kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuY3Vyc29yLmhvdmVyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwLmRvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gdGhpcy5jdXJzb3Iubm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgIXRoaXMuYXBwLnBvaW50ZXJzKSByZXR1cm4gO1xyXG4gICAgdGhpcy5fY2hlY2tFbGVtZW50KHJvb3QpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICB2YXIgYXBwID0gdGhpcy5hcHA7XHJcblxyXG4gICAgLy8g5pu05paw44GZ44KL44GL44KS5Yik5a6aXHJcbiAgICBpZiAoZWxlbWVudC5hd2FrZSA9PT0gZmFsc2UpIHJldHVybiA7XHJcblxyXG4gICAgLy8g5a2Q5L6b44KS5pu05pawXHJcbiAgICB2YXIgbGVuID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrRWxlbWVudCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44K/44OD44OB5Yik5a6aXHJcbiAgICB0aGlzLl9jaGVja1BvaW50KGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrUG9pbnQob2JqKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aVRvdWNoKSB7XHJcbiAgICAgIHRoaXMuYXBwLnBvaW50ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICAgIGlmIChwLmlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLl9fY2hlY2tQb2ludChvYmosIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fX2NoZWNrUG9pbnQob2JqLCB0aGlzLmFwcC5wb2ludGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9fY2hlY2tQb2ludChvYmosIHApIHtcclxuICAgIGlmICghb2JqLmludGVyYWN0aXZlKSByZXR1cm4gO1xyXG5cclxuICAgIHZhciBwcmV2T3ZlckZsYWcgPSBvYmouX292ZXJGbGFnc1twLmlkXTtcclxuICAgIHZhciBvdmVyRmxhZyA9IG9iai5oaXRUZXN0KHAueCwgcC55KTtcclxuICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gb3ZlckZsYWc7XHJcblxyXG4gICAgdmFyIGUgPSB7XHJcbiAgICAgIHBvaW50ZXI6IHAsXHJcbiAgICAgIGludGVyYWN0aXZlOiB0aGlzLFxyXG4gICAgICBvdmVyOiBvdmVyRmxhZyxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFwcmV2T3ZlckZsYWcgJiYgb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG92ZXInLCBlKTtcclxuXHJcbiAgICAgIGlmIChvYmouYm91bmRpbmdUeXBlICYmIG9iai5ib3VuZGluZ1R5cGUgIT09ICdub25lJykge1xyXG4gICAgICAgIHRoaXMuX2hvbGRzLnB1c2gob2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByZXZPdmVyRmxhZyAmJiAhb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG91dCcsIGUpO1xyXG4gICAgICAvLyB0aGlzLl9ob2xkcy5lcmFzZShvYmopO1xyXG4gICAgICBlcmFzZS5jYWxsKHRoaXMuX2hvbGRzLCBvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdmVyRmxhZykge1xyXG4gICAgICBpZiAocC5nZXRQb2ludGluZ1N0YXJ0KCkpIHtcclxuICAgICAgICBvYmouX3RvdWNoRmxhZ3NbcC5pZF0gPSB0cnVlO1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRzdGFydCcsIGUpO1xyXG4gICAgICAgIC8vIOOCr+ODquODg+OCr+ODleODqeOCsOOCkueri+OBpuOCi1xyXG4gICAgICAgIG9iai5fY2xpY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRzdGF5JywgZSk7XHJcbiAgICAgIGlmIChwLl9tb3ZlRmxhZykge1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRtb3ZlJywgZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdPT09dHJ1ZSAmJiBwLmdldFBvaW50aW5nRW5kKCkpIHtcclxuICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRlbmQnLCBlKTtcclxuXHJcbiAgICAgIGlmIChwaGluYSQxLmlzTW9iaWxlKCkgJiYgb2JqLl9vdmVyRmxhZ3NbcC5pZF0pIHtcclxuICAgICAgICBvYmouX292ZXJGbGFnc1twLmlkXSA9IGZhbHNlO1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnLCBlKTtcclxuICAgICAgICAvLyB0aGlzLl9ob2xkcy5lcmFzZShvYmopO1xyXG4gICAgICAgIGVyYXNlLmNhbGwodGhpcy5faG9sZHMsIG9iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL2FwcC9lbGVtZW50XCJcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQWNjZXNzb3J5IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQpIHJldHVybiA7XHJcblxyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldFRhcmdldCgpIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldDtcclxuICB9XHJcblxyXG4gIGlzQXR0YWNoZWQoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnRhcmdldDtcclxuICB9XHJcblxyXG4gIGF0dGFjaFRvKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYXR0YWNoKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRUYXJnZXQoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMudGFyZ2V0LmRldGFjaCh0aGlzKTtcclxuICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBFbGVtZW505YG044Gn5ouh5by1XHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS4kbWV0aG9kKCdhdHRhY2gnLCBmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuLy8gICBpZiAoIXRoaXMuYWNjZXNzb3JpZXMpIHtcclxuLy8gICAgIHRoaXMuYWNjZXNzb3JpZXMgPSBbXTtcclxuLy8gICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgIHRoaXMuYWNjZXNzb3JpZXMuZWFjaChmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuLy8gICAgICAgICBhY2Nlc3NvcnkudXBkYXRlICYmIGFjY2Vzc29yeS51cGRhdGUoZS5hcHApO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdGhpcy5hY2Nlc3Nvcmllcy5wdXNoKGFjY2Vzc29yeSk7XHJcbi8vICAgYWNjZXNzb3J5LnNldFRhcmdldCh0aGlzKTtcclxuLy8gICBhY2Nlc3NvcnkuZmxhcmUoJ2F0dGFjaGVkJyk7XHJcblxyXG4vLyAgIHJldHVybiB0aGlzO1xyXG4vLyB9KTtcclxuXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS4kbWV0aG9kKCdkZXRhY2gnLCBmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuLy8gICBpZiAodGhpcy5hY2Nlc3Nvcmllcykge1xyXG4vLyAgICAgdGhpcy5hY2Nlc3Nvcmllcy5lcmFzZShhY2Nlc3NvcnkpO1xyXG4vLyAgICAgYWNjZXNzb3J5LnNldFRhcmdldChudWxsKTtcclxuLy8gICAgIGFjY2Vzc29yeS5mbGFyZSgnZGV0YWNoZWQnKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiB0aGlzO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LlR3ZWVuZXJcclxuICogIyBUd2VlbmVyXHJcbiAqIFR3ZWVuZXLjga/jgqrjg5bjgrjjgqfjgq/jg4jjga7jg5fjg63jg5Hjg4bjgqPjgavlr77jgZfjgabjgIFcclxuICogVHdlZW7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7lirnmnpzjgpLkuI7jgYjjgovjgq/jg6njgrnjgafjgZnjgIIgIFxyXG4gKiDkuLvjgasge0BsaW5rIHBoaW5hLmFwcC5FbGVtZW50fSDjgajjgZ3jga7jgrXjg5bjgq/jg6njgrnjgafkvb/nlKjjgZXjgozjgb7jgZnjgIJcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgVHdlZW5lciBleHRlbmRzIEFjY2Vzc29yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuabtOaWsOOBmeOCi+aWueazleOCkuaMh+WumuOBl+OBvuOBmeOAgiAgXHJcbiAgICog5aSJ5pu044GZ44KL44GoZHVyYXRpb27jgavjgojjgovmmYLplpPjga7pgLLjgb/mlrnjgYzlpInjgo/jgorjgb7jgZnjgIIgIFxyXG4gICAqIOips+OBl+OBj+OBr3tAbGluayAjVVBEQVRFX01BUH3jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKi9cclxuICAvLyB1cGRhdGVUeXBlID0gJ2RlbHRhJ1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcbiAgICB0aGlzLnVwZGF0ZVR5cGUgPSAnZGVsdGEnO1xyXG5cclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fdGFza3MgPSBbXTtcclxuICAgIHRoaXMuX2luZGV4ID0gMDtcclxuICAgIHRoaXMucGxheWluZyA9IHRydWU7XHJcbiAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtwaGluYS5hcHAuQmFzZUFwcH0gYXBwXHJcbiAgICovXHJcbiAgdXBkYXRlKGFwcCkge1xyXG4gICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB7QGxpbmsgI3VwZGF0ZVR5cGV944KS5aSJ5pu044GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg5pu05paw5pa55rOV44KS6KGo44GZ5paH5a2X5YiXXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNldFVwZGF0ZVR5cGUodHlwZSkge1xyXG4gICAgdGhpcy51cGRhdGVUeXBlID0gdHlwZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcHJvcHPjgafmjIflrprjgZfjgZ/lgKTjgavjgarjgovjgb7jgafjgIFkdXJhdGlvbuOBp+aMh+WumuOBl+OBn+aZgumWk+OCkuOBi+OBkeOBpuOAgeOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogXHJcbiAgICovXHJcbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgIG1vZGU6ICd0bycsXHJcbiAgICAgIHByb3BzOiBwcm9wcyxcclxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4vmmYLjga7lgKTjgahwcm9wc+OBp+aMh+WumuOBl+OBn+WApOOCkuWKoOeul+OBl+OBn+WApOOBq+OBquOCi+OBvuOBp+OAgWR1cmF0aW9u44Gn5oyH5a6a44GX44Gf5pmC6ZaT44KS44GL44GR44Gm44CB44Ki44OL44Oh44O844K344On44Oz44GV44Gb44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBieShwcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgbW9kZTogJ2J5JyxcclxuICAgICAgcHJvcHM6IHByb3BzLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgIGVhc2luZzogZWFzaW5nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBwcm9wc+OBp+aMh+WumuOBl+OBn+WApOOBi+OCieOCouODi+ODoeODvOOCt+ODp+ODs+mWi+Wni+aZguOBruWApOOBq+OBquOCi+OBvuOBp+OAgWR1cmF0aW9u44Gn5oyH5a6a44GX44Gf5pmC6ZaT44KS44GL44GR44Gm44CB44Ki44OL44Oh44O844K344On44Oz44GV44Gb44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmcm9tKHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAndHdlZW4nLFxyXG4gICAgICBtb2RlOiAnZnJvbScsXHJcbiAgICAgIHByb3BzOiBwcm9wcyxcclxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZfjgZ/mmYLplpPjgYzntYzpgY7jgZnjgovjgb7jgaflvoXmqZ/jgZfjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gdGltZSB3YWl044GZ44KL5pmC6ZaTXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHdhaXQodGltZSkge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3dhaXQnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGltaXQ6IHRpbWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54++5Zyo6Kit5a6a44GV44KM44Gm44GE44KL44Ki44OL44Oh44O844K344On44Oz44GM57WC5LqG44GX44Gf5pmC44Gr5ZG844Gz5Ye644GV44KM44KL6Zai5pWw44KS44K744OD44OI44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyDlkbzjgbPlh7rjgZXjgozjgovplqLmlbBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZiAob3B0aW9uYWwpIGZ1bmPlhoXjgad0aGlz44Gr44GX44Gf44GE44Kq44OW44K444Kn44Kv44OI44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gYXJncyAob3B0aW9uYWwpIGZ1bmPjga7lvJXmlbDjgavjgZfjgZ/jgYTlgKRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgY2FsbChmdW5jLCBzZWxmLCBhcmdzKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAnY2FsbCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmdW5jOiBmdW5jLFxyXG4gICAgICAgIHNlbGY6IHNlbGYgfHwgdGhpcyxcclxuICAgICAgICBhcmdzOiBhcmdzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOePvuWcqOioreWumuOBleOCjOOBpuOBhOOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+aZguOBq+ODl+ODreODkeODhuOCo+OCkuOCu+ODg+ODiOOBl+OBvuOBmeOAgiAgXHJcbiAgICog56ys5LiA5byV5pWw44Gr44Kq44OW44K444Kn44Kv44OI44KS44K744OD44OI44GZ44KL44GT44Go44KC44Gn44GN44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtTdHJpbmcgfCBPYmplY3R9IGtleSB2YWx1ZeOCkuOCu+ODg+ODiOOBmeOCi+ODl+ODreODkeODhuOCo+WQjeOBi+OAgeWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAob3B0aW9uYWwpIOOCu+ODg+ODiOOBmeOCi+WApFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgdmFyIHZhbHVlcyA9IG51bGw7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgIHZhbHVlcyA9IHt9O1xyXG4gICAgICB2YWx1ZXNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbHVlcyA9IGtleTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Rhc2tzLnB1c2goe1xyXG4gICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB4LCB544Gr5a++44GX44Gm44CBIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIHksIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgeDogeCwgeTogeSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogeCwgeeOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI2J5fSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIG1vdmVCeSh4LCB5LCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ieSh7IHg6IHgsIHk6IHkgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByb3RhdGlvbuOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI3RvfSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcm90YXRlVG8ocm90YXRpb24sIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgcm90YXRpb246IHJvdGF0aW9uIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiByb3RhdGlvbuOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI2J5fSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcm90YXRlQnkocm90YXRpb24sIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJ5KHsgcm90YXRpb246IHJvdGF0aW9uIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2NhbGVYLCBzY2FsZVnjgavlr77jgZfjgaYge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHNjYWxlWOOBqHNjYWxlWeOBq+ioreWumuOBmeOCi+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzY2FsZVRvKHNjYWxlLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IHNjYWxlWDogc2NhbGUsIHNjYWxlWTogc2NhbGUgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHNjYWxlWCwgc2NhbGVZ44Gr5a++44GX44GmIHtAbGluayAjYnl9IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSBzY2FsZVjjgahzY2FsZVnjgavoqK3lrprjgZnjgovlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2NhbGVCeShzY2FsZSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYnkoeyBzY2FsZVg6IHNjYWxlLCBzY2FsZVk6IHNjYWxlIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWxwaGHjgavlr77jgZfjgaYge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGFscGhh44Gr6Kit5a6a44GZ44KL5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZhZGUodmFsdWUsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgYWxwaGE6IHZhbHVlIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWxwaGHjgpIw44Gr44GZ44KL44Ki44OL44Oh44O844K344On44Oz44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZhZGVPdXQoZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmFkZSgwLjAsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWxwaGHjgpIx44Gr44GZ44KL44Ki44OL44Oh44O844K344On44Oz44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZhZGVJbihkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mYWRlKDEuMCwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4tcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcGxheSgpIHtcclxuICAgIHRoaXMucGxheWluZyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuS4gOaZguWBnOatolxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLlgZzmraLjgZfjgIHmnIDliJ3jgb7jgaflt7vjgY3miLvjgZfjgb7jgZnjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXdpbmQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS5be744GN5oi744GZXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHJld2luZCgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHlveW8oKSB7XHJcbiAgICAvLyBUT0RPOiDmnIDliJ3jga7lgKTjgYzliIbjgYvjgonjgarjgYTjga7jgaflj43ou6LjgafjgY3jgarjgYQuLi5cclxuICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICB0aGlzLl90YXNrcy5lYWNoKGZ1bmN0aW9uKHRhc2spIHtcclxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ3R3ZWVuJykgO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBsYXkoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+ioreWumlxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzZXRMb29wKGZsYWcpIHtcclxuICAgIHRoaXMuX2xvb3AgPSBmbGFnO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLjgq/jg6rjgqJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEpTT07lvaLlvI/jgafjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGpzb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGpzb24ubG9vcCAob3B0aW9uYWwpIOODq+ODvOODl+OBmeOCi+WgtOWQiHRydWVcclxuICAgKiBAcGFyYW0ge0FycmF5W119IGpzb24udHdlZW5zIOioreWumuOBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs1xyXG4gICAqIFxyXG4gICAqIGBgYFxyXG4gICAqIFtcclxuICAgKiAgIFttZXRob2QsIGFyZzEsIGFyZzIsLCxdLFxyXG4gICAqICAgWyd0bycsIHt2YWx1ZTogMTAwfSwgMTAwMCwgJ3N3aW5nJ10sXHJcbiAgICogICBbJ3dhaXQnLCAxMDAwXSxcclxuICAgKiAgIFsnc2V0JywgJ3RleHQnLCAnRU5EJ11cclxuICAgKiBdXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgZnJvbUpTT04oanNvbikge1xyXG4gICAgaWYgKGpzb24ubG9vcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc2V0TG9vcChqc29uLmxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGpzb24udHdlZW5zLmVhY2goZnVuY3Rpb24odCkge1xyXG4gICAgICB0ID0gdC5jbG9uZSgpO1xyXG4gICAgICB2YXIgbWV0aG9kID0gdC5zaGlmdCgpO1xyXG4gICAgICB0aGlzW21ldGhvZF0uYXBwbHkodGhpcywgdCk7XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9hZGQocGFyYW1zKSB7XHJcbiAgICB0aGlzLl90YXNrcy5wdXNoKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVGFzayhhcHApIHtcclxuICAgIGlmICghdGhpcy5wbGF5aW5nKSByZXR1cm4gO1xyXG5cclxuICAgIHZhciB0YXNrID0gdGhpcy5fdGFza3NbdGhpcy5faW5kZXhdO1xyXG4gICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb29wKSB7XHJcbiAgICAgICAgdGhpcy5yZXdpbmQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICsrdGhpcy5faW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhc2sudHlwZSA9PT0gJ3R3ZWVuJykge1xyXG4gICAgICAvLyB0aGlzLl90d2VlbiA9IHBoaW5hLnV0aWwuVHdlZW4oKTtcclxuICAgICAgdGhpcy5fdHdlZW4gPSBuZXcgVHdlZW4oKTtcclxuXHJcbiAgICAgIHZhciBkdXJhdGlvbiA9IHRhc2suZHVyYXRpb24gfHwgdGhpcy5fZ2V0RGVmYXVsdER1cmF0aW9uKCk7XHJcbiAgICAgIGlmICh0YXNrLm1vZGUgPT09ICd0bycpIHtcclxuICAgICAgICB0aGlzLl90d2Vlbi50byh0aGlzLnRhcmdldCwgdGFzay5wcm9wcywgZHVyYXRpb24sIHRhc2suZWFzaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0YXNrLm1vZGUgPT09ICdieScpIHtcclxuICAgICAgICB0aGlzLl90d2Vlbi5ieSh0aGlzLnRhcmdldCwgdGFzay5wcm9wcywgZHVyYXRpb24sIHRhc2suZWFzaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLl90d2Vlbi5mcm9tKHRoaXMudGFyZ2V0LCB0YXNrLnByb3BzLCBkdXJhdGlvbiwgdGFzay5lYXNpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVR3ZWVuO1xyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ3dhaXQnKSB7XHJcbiAgICAgIHRoaXMuX3dhaXQgPSB7XHJcbiAgICAgICAgdGltZTogMCxcclxuICAgICAgICBsaW1pdDogdGFzay5kYXRhLmxpbWl0LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlV2FpdDtcclxuICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT09ICdjYWxsJykge1xyXG4gICAgICB0YXNrLmRhdGEuZnVuYy5hcHBseSh0YXNrLmRhdGEuc2VsZiwgdGFzay5kYXRhLmFyZ3MpO1xyXG4gICAgICAvLyAx44OV44Os44O844Og5raI6LK744GX44Gq44GE44KI44GG5YaN5biwXHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFzay50eXBlID09PSAnc2V0Jykge1xyXG4gICAgICAkZXh0ZW5kLmNhbGwodGhpcy50YXJnZXQsIHRhc2suZGF0YS52YWx1ZXMpO1xyXG4gICAgICAvLyB0aGlzLnRhcmdldC4kZXh0ZW5kKHRhc2suZGF0YS52YWx1ZXMpO1xyXG4gICAgICAvLyAx44OV44Os44O844Og5raI6LK744GX44Gq44GE44KI44GG5YaN5biwXHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVR3ZWVuKGFwcCkge1xyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fdHdlZW47XHJcbiAgICB2YXIgdGltZSA9IHRoaXMuX2dldFVuaXRUaW1lKGFwcCk7XHJcblxyXG4gICAgdHdlZW4uZm9yd2FyZCh0aW1lKTtcclxuICAgIHRoaXMuZmxhcmUoJ3R3ZWVuJyk7XHJcblxyXG4gICAgaWYgKHR3ZWVuLnRpbWUgPj0gdHdlZW4uZHVyYXRpb24pIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX3R3ZWVuO1xyXG4gICAgICB0aGlzLl90d2VlbiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlV2FpdChhcHApIHtcclxuICAgIHZhciB3YWl0ID0gdGhpcy5fd2FpdDtcclxuICAgIHZhciB0aW1lID0gdGhpcy5fZ2V0VW5pdFRpbWUoYXBwKTtcclxuICAgIHdhaXQudGltZSArPSB0aW1lO1xyXG5cclxuICAgIGlmICh3YWl0LnRpbWUgPj0gd2FpdC5saW1pdCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5fd2FpdDtcclxuICAgICAgdGhpcy5fd2FpdCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0VW5pdFRpbWUoYXBwKSB7XHJcbiAgICB2YXIgb2JqID0gVVBEQVRFX01BUFt0aGlzLnVwZGF0ZVR5cGVdO1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqLmZ1bmMoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTAwMCAvIGFwcC5mcHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0RGVmYXVsdER1cmF0aW9uKCkge1xyXG4gICAgdmFyIG9iaiA9IFVQREFURV9NQVBbdGhpcy51cGRhdGVUeXBlXTtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLmR1cmF0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIHtAbGluayAjdXBkYXRlVHlwZX3jgavoqK3lrprjgZnjgovmm7TmlrDmlrnms5Xjga7lrprnvqnjgafjgZnjgIJcclxuICog5LiL6KiY44Gu6KGo44Gr5a6a576p5riI44G/44Gu5pu05paw5pa55rOV44KSe0BsaW5rICN1cGRhdGVUeXBlfeOBq+ioreWumuOBmeOCi+OBk+OBqOOBp+OAgVxyXG4gKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7mm7TmlrDmlrnms5XjgpLlpInmm7TjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICogXHJcbiAqIHwg5pu05paw5pa55rOVIHwg5Y2Y5L2NKOODh+ODleOCqeODq+ODiOWApCkgfCAx44OV44Os44O844Og44GC44Gf44KK44Gu44Ki44OL44Oh44O844K344On44Oz6YCf5bqmIHxcclxuICogfC18LXwtfFxyXG4gKiB8IG5vcm1hbCB8IOODn+ODquenkigxMDAwKSB8IGFwcC5mcHPjgavjgojjgaPjgablpInljJYgfFxyXG4gKiB8IGRlbHRhIHwg44Of44Oq56eSKDEwMDApIHwg57WM6YGO5pmC6ZaT44Gr44KI44Gj44Gm5aSJ5YyWIHxcclxuICogfCBmcHMgfCDjg5Xjg6zjg7zjg6AoMzApIHwg5b+F44Ga5ZCM44GY6YCf5bqm44Gn5aSJ5YyWIHxcclxuICovXHJcbnZhciBVUERBVEVfTUFQID0gVHdlZW5lci5VUERBVEVfTUFQID0ge1xyXG4gIG5vcm1hbDoge1xyXG4gICAgZnVuYzogZnVuY3Rpb24oYXBwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwIC8gYXBwLmZwcztcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICB9LFxyXG5cclxuICBkZWx0YToge1xyXG4gICAgZnVuYzogZnVuY3Rpb24oYXBwKSB7XHJcbiAgICAgIHJldHVybiBhcHAudGlja2VyLmRlbHRhVGltZTtcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICB9LFxyXG5cclxuICBmcHM6IHtcclxuICAgIGZ1bmM6IGZ1bmN0aW9uKGFwcCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjogMzAsXHJcbiAgfSxcclxuXHJcbn07XHJcblxyXG4vLyBFbGVtZW505YG044Gn5ouh5by1XHJcbi8vIC8qKlxyXG4vLyAgKiBAbWVtYmVyIHBoaW5hLmFwcC5FbGVtZW50XHJcbi8vICAqIEBwcm9wZXJ0eSB0d2VlbmVyXHJcbi8vICAqIOiHqui6q+OBq+OCouOCv+ODg+ODgea4iOOBv+OBrntAbGluayBwaGluYS5hY2Nlc3NvcnkuVHdlZW5lcn3jgqrjg5bjgrjjgqfjgq/jg4jjgIJcclxuLy8gICovXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS5nZXR0ZXIoJ3R3ZWVuZXInLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX3R3ZWVuZXIpIHtcclxuLy8gICAgIHRoaXMuX3R3ZWVuZXIgPSBwaGluYS5hY2Nlc3NvcnkuVHdlZW5lcigpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fdHdlZW5lcjtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5FbGVtZW50XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqICMg5Li744Gr6KaB57Sg44Gu6Kaq5a2Q6Zai5L+C44KS5omx44GG44Kv44Op44K5XHJcbiAqIOS4u+OBq+imquWtkOmWouS/guetieOCkuWumue+qeOBmeOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgRWxlbWVudCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBwYXJlbnRcclxuICAgKiDopqropoHntKBcclxuICAgKi9cclxuICAvLyBwYXJlbnQgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgY2hpbGRyZW5cclxuICAgKiDlrZDopoHntKBcclxuICAgKi9cclxuICAvLyBjaGlsZHJlbiA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBhd2FrZVxyXG4gICAqIOacieWKueOBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIC8vIGF3YWtlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkQ2hpbGRcclxuICAgKiDoh6rouqvjgavlrZDopoHntKDjgpLov73liqDjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOiHqui6q+OCkuWtkOimgee0oOOBqOOBl+OBpuW8leaVsOOBp+aMh+WumuOBl+OBn+imgee0oOOBq+i/veWKoOOBmeOCi+OBq+OBryB7QGxpbmsgI2FkZENoaWxkVG99IOOCkuS9v+eUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOi/veWKoOOBmeOCi+WtkOimgee0oFxyXG4gICAqL1xyXG4gIGFkZENoaWxkKGNoaWxkKSB7XHJcbiAgICBpZiAoY2hpbGQucGFyZW50KSBjaGlsZC5yZW1vdmUoKTtcclxuXHJcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuXHJcbiAgICBjaGlsZC5oYXMoJ2FkZGVkJykgJiYgY2hpbGQuZmxhcmUoJ2FkZGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRDaGlsZFRvXHJcbiAgICog6Ieq6Lqr44KS5a2Q6KaB57Sg44Go44GX44Gm5byV5pWw44Gn5oyH5a6a44GX44Gf6KaB57Sg44Gr6L+95Yqg44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDoh6rouqvjgavlrZDopoHntKDjgpLov73liqDjgZnjgovjgavjga8ge0BsaW5rICNhZGRDaGlsZH0g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50IOiHqui6q+OCkuWtkOimgee0oOOBqOOBl+OBpui/veWKoOOBmeOCi+imgee0oFxyXG4gICAqL1xyXG4gIGFkZENoaWxkVG8ocGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZENoaWxkQXRcclxuICAgKiDoh6rouqvjgpLjgIHmjIflrprjgZfjgZ/opoHntKDjga7lrZDopoHntKDjga7ku7vmhI/jga7phY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnjgavov73liqDjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZCDov73liqDjgZnjgovlrZDopoHntKBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K555Wq5Y+3XHJcbiAgICovXHJcbiAgYWRkQ2hpbGRBdChjaGlsZCwgaW5kZXgpIHtcclxuICAgIGlmIChjaGlsZC5wYXJlbnQpIGNoaWxkLnJlbW92ZSgpO1xyXG5cclxuICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xyXG5cclxuICAgIGNoaWxkLmhhcygnYWRkZWQnKSAmJiBjaGlsZC5mbGFyZSgnYWRkZWQnKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENoaWxkQXRcclxuICAgKiDmjIflrprjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lrZDopoHntKDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7dcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOaMh+WumuOBl+OBn+OCpOODs+ODh+ODg+OCr+OCueOBruWtkOimgee0oFxyXG4gICAqL1xyXG4gIGdldENoaWxkQXQoaW5kZXgpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmNoaWxkcmVuLmF0KGluZGV4KTtcclxuICAgIHJldHVybiBhdC5jYWxsKHRoaXMuY2hpbGRyZW4sIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q2hpbGRCeU5hbWVcclxuICAgKiDmjIflrprjgZfjgZ/lkI3liY3jga7lrZDopoHntKDjgpLov5TjgZfjgb7jgZnjgILvvIjmnKrlrp/oo4XvvIlcclxuICAgKi9cclxuICBnZXRDaGlsZEJ5TmFtZShuYW1lKSB7XHJcbiAgICAvLyBUT0RPOlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRDaGlsZEluZGV4XHJcbiAgICog5oyH5a6a44GX44Gf5a2Q6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg5a2Q6KaB57SgXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDmjIflrprjgZfjgZ/lrZDopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7dcclxuICAgKi9cclxuICBnZXRDaGlsZEluZGV4KGNoaWxkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0UGFyZW50XHJcbiAgICog5oyH5a6a44GX44Gf6KaB57Sg44Gu6Kaq6KaB57Sg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOaMh+WumuOBl+OBn+imgee0oOOBruimquimgee0oFxyXG4gICAqL1xyXG4gIGdldFBhcmVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Um9vdFxyXG4gICAqIOaMh+WumuOBl+OBn+imgee0oOOBrumajuWxpOODhOODquODvOOBruODq+ODvOODiOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDmjIflrprjgZfjgZ/opoHntKDjga7pmo7lsaTjg4Tjg6rjg7zjga7jg6vjg7zjg4hcclxuICAgKi9cclxuICBnZXRSb290KCkge1xyXG4gICAgdmFyIGVsbSA9IHRoaXM7XHJcbiAgICBmb3IgKGVsbT10aGlzLnBhcmVudDsgZWxtLnBhcmVudCAhPSBudWxsOyBlbG0gPSBlbG0ucGFyZW50KSB7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQ2hpbGRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5oyH5a6a44GX44Gf6KaB57Sg44KS6Ieq6Lqr44Gu5a2Q6KaB57Sg44GL44KJ5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg6KaB57SgXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgY2hpbGQuaGFzKCdyZW1vdmVkJykgJiYgY2hpbGQuZmxhcmUoJ3JlbW92ZWQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByZW1vdmVcclxuICAgKiDoh6rouqvjgpLopqropoHntKDjga7lrZDopoHntKDjgYvjgonliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpc0F3YWtlXHJcbiAgICog6Ieq6Lqr44GM5pyJ5Yq544GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmnInlirnjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBpc0F3YWtlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXdha2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHdha2VVcFxyXG4gICAqIOiHqui6q+OCkuacieWKueOBq+OBl+OBvuOBmeOAglxyXG4gICAqL1xyXG4gIHdha2VVcCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNsZWVwXHJcbiAgICog6Ieq6Lqr44KS54Sh5Yq544Gr44GX44G+44GZ44CCXHJcbiAgICovXHJcbiAgc2xlZXAoKSB7XHJcbiAgICB0aGlzLmF3YWtlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZnJvbUpTT05cclxuICAgKiBKU09OIOW9ouW8j+OCkuS9v+OBo+OBpuiHqui6q+OBq+WtkOimgee0oOOCkui/veWKoOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAqICAgICAgICBcImNoaWxkcmVuXCI6IHtcclxuICAgKiAgICAgICAgICBcImxhYmVsXCI6IHsgICAgICAgICAgICAgICAgICAvL+OCreODvOWQjeOBjOi/veWKoOOBmeOCi+WtkOimgee0oOOBruWQjeWJjeOBq+OBquOCi1xyXG4gICAqICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJMYWJlbFwiLCAgICAgLy/jgq/jg6njgrlcclxuICAgKiAgICAgICAgICAgIFwiYXJndW1lbnRzXCI6IFsnaGVsbG8hJ10sICAvL+WIneacn+WMluaZguOBruW8leaVsFxyXG4gICAqICAgICAgICAgICAgXCJ4XCI6MzIwLCAgICAgICAgICAgICAgICAgIC8v44Gd44Gu5LuW44OX44Ot44OR44OG44KjXHJcbiAgICogICAgICAgICAgICBcInlcIjo0ODAsXHJcbiAgICogICAgICAgICAgfSxcclxuICAgKiAgICAgICAgfSxcclxuICAgKiAgICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtKU09OfSBqc29uIEpTT04g5b2i5byPXHJcbiAgICovXHJcbiAgZnJvbUpTT04oanNvbikge1xyXG5cclxuICAgIHZhciBjcmVhdGVDaGlsZHJlbiA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuICAgICAgdmFyIGFyZ3MgPSBkYXRhLmFyZ3VtZW50cztcclxuICAgICAgYXJncyA9IChhcmdzIGluc3RhbmNlb2YgQXJyYXkpID8gYXJncyA6IFthcmdzXTtcclxuXHJcbiAgICAgIHZhciBfY2xhc3M7XHJcbiAgICAgIHZhciBlbGVtZW50O1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGlzIHBoaW5hIGNsYXNzXHJcbiAgICAgICAgX2NsYXNzID0gcGhpbmEkMS51c2luZyhkYXRhLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgZWxlbWVudCA9IF9jbGFzcy5hcHBseShudWxsLCBhcmdzKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5jbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBpcyBFUyBjbGFzc1xyXG4gICAgICAgIC8vIOOCpOODs+OCueOCv+ODs+OCueWMluOBq+OCueODl+ODrOODg+ODieani+aWh+OBjOW/heimgeOBquOBn+OCgeOAgWVzNeOCteODneODvOODiOOBruWgtOWQiGJhYmVs44GM5b+F6KaBXHJcbiAgICAgICAgZWxlbWVudCA9IG5ldyBkYXRhLmNsYXNzTmFtZSguLi5hcmdzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpc1tuYW1lXSA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICBlbGVtZW50LmZyb21KU09OKGRhdGEpO1xyXG4gICAgICBlbGVtZW50LmFkZENoaWxkVG8odGhpcyk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgZm9ySW4uY2FsbChqc29uLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAvLyBqc29uLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ2NoaWxkcmVuJykge1xyXG4gICAgICAgIGZvckluLmNhbGwodmFsdWUsIGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuICAgICAgICAvLyB2YWx1ZS5mb3JJbihmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgICBjcmVhdGVDaGlsZHJlbihuYW1lLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoa2V5ICE9PSAndHlwZScgJiYga2V5ICE9PSAnY2xhc3NOYW1lJykge1xyXG4gICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9KU09OXHJcbiAgICog6Ieq6Lqr44Gu5a2Q6KaB57Sg44KSIEpTT04g5b2i5byP44Gn6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtKU09OfSBKU09O5b2i5byPXHJcbiAgICovXHJcbiAgdG9KU09OKCkge1xyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwaGluYSQxLnVzaW5nKHRoaXMuY2xhc3NOYW1lKS5kZWZhdWx0cyB8fCB7fSk7XHJcblxyXG4gICAgdGhpcy5faGllcmFyY2hpZXMuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBkID0gZS5kZWZhdWx0cztcclxuICAgICAgaWYgKGQpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhkKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcclxuICAgICAgICAgIGlmIChrZXlzLmluZGV4T2YoaykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGtleXMucHVzaChrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAga2V5cy5wdXNoKCduYW1lJywgJ2NsYXNzTmFtZScpO1xyXG5cclxuICAgIHZhciBqc29uID0ge307XHJcbiAgICAvLyBrZXlzLmVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgIGpzb25ba2V5XSA9IHRoaXNba2V5XTtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZC50b0pTT04oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAganNvbi5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAvLyBjaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGNoaWxkLCBpKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQsIGkpIHtcclxuICAgICAgICBqc29uLmNoaWxkcmVuW2NoaWxkLm5hbWUgfHwgKGNoaWxkLmNsYXNzTmFtZSArICdfJyArIGkpXSA9IGNoaWxkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFjY2Vzc29yeeOCkuS7mOS4juOBmeOCi1xyXG4gICAqIEBwYXJhbSAge0FjY2Vzc29yeX0gQWNjZXNzb3J557aZ5om/44Kv44Op44K5XHJcbiAgICogQHJldHVybiB7dGhpc31cclxuICAgKi9cclxuICBhdHRhY2goYWNjZXNzb3J5KSB7XHJcbiAgICBpZiAoIXRoaXMuYWNjZXNzb3JpZXMpIHtcclxuICAgICAgdGhpcy5hY2Nlc3NvcmllcyA9IFtdO1xyXG4gICAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzb3JpZXMuZm9yRWFjaChmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuICAgICAgICAgIGFjY2Vzc29yeS51cGRhdGUgJiYgYWNjZXNzb3J5LnVwZGF0ZShlLmFwcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWNjZXNzb3JpZXMucHVzaChhY2Nlc3NvcnkpO1xyXG4gICAgYWNjZXNzb3J5LnNldFRhcmdldCh0aGlzKTtcclxuICAgIGFjY2Vzc29yeS5mbGFyZSgnYXR0YWNoZWQnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFjY2Vzc29yeeOCkuWJiumZpFxyXG4gICAqIEBwYXJhbSAge0FjY2Vzc29yeX0gQWNjZXNzb3J557aZ5om/44Kv44Op44K5XHJcbiAgICogQHJldHVybiB7dGhpc31cclxuICAgKi9cclxuICBkZXRhY2goYWNjZXNzb3J5KSB7XHJcbiAgICBpZiAodGhpcy5hY2Nlc3Nvcmllcykge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yaWVzLmVyYXNlKGFjY2Vzc29yeSk7XHJcbiAgICAgIGVyYXNlLmNhbGwodGhpcy5hY2Nlc3NvcmllcywgYWNjZXNzb3J5KTtcclxuICAgICAgYWNjZXNzb3J5LnNldFRhcmdldChudWxsKTtcclxuICAgICAgYWNjZXNzb3J5LmZsYXJlKCdkZXRhY2hlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR3ZWVuZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3R3ZWVuZXIpIHtcclxuICAgICAgdGhpcy5fdHdlZW5lciA9IG5ldyBUd2VlbmVyKCkuYXR0YWNoVG8odGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdHdlZW5lcjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLlNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5FbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBleGl0KG5leHRMYWJlbCwgbmV4dEFyZ3VtZW50cykge1xyXG4gICAgaWYgKCF0aGlzLmFwcCkgcmV0dXJuIDtcclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbmV4dExhYmVsID0gYXJndW1lbnRzWzBdLm5leHRMYWJlbCB8fCB0aGlzLm5leHRMYWJlbDtcclxuICAgICAgICBuZXh0QXJndW1lbnRzID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm5leHRMYWJlbCA9IG5leHRMYWJlbDtcclxuICAgICAgdGhpcy5uZXh0QXJndW1lbnRzID0gbmV4dEFyZ3VtZW50cztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcC5wb3BTY2VuZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLkJhc2VBcHBcclxuICog44OZ44O844K544Go44Gq44KL44Ki44OX44Oq44Kx44O844K344On44Oz44Kv44Op44K5XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBCYXNlQXBwIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLy8gLyoqIGF3YWtlICovXHJcbiAgLy8gYXdha2UgPSBudWxsXHJcbiAgLy8gLyoqIGZwcyAqL1xyXG4gIC8vIGZwcyA9IG51bGxcclxuICAvLyAvKiogZnJhbWUgKi9cclxuICAvLyBmcmFtZSA9IG51bGxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fc2NlbmVzID0gW25ldyBTY2VuZSgpXTtcclxuICAgIHRoaXMuX3NjZW5lSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKHRoaXMpO1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IG5ldyBJbnRlcmFjdGl2ZSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmF3YWtlID0gdHJ1ZTtcclxuICAgIHRoaXMudGlja2VyID0gbmV3IFRpY2tlcigpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5fbG9vcENhbGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLl9sb29wKCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy50aWNrZXIudGljayh0aGlzLl9sb29wQ2FsbGVyKTtcclxuXHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgIHRoaXMudGlja2VyLnVudGljayh0aGlzLl9sb29wQ2FsbGVyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZVNjZW5lKHNjZW5lKSB7XHJcbiAgICB0aGlzLmZsYXJlKCdyZXBsYWNlJyk7XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2VzY2VuZScpO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmFwcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuYXBwID0gdGhpcztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdlbnRlcicsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdXNoU2NlbmUoc2NlbmUpIHtcclxuICAgIHRoaXMuZmxhcmUoJ3B1c2gnKTtcclxuICAgIHRoaXMuZmxhcmUoJ2NoYW5nZXNjZW5lJyk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ3BhdXNlJywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9zY2VuZXMucHVzaChzY2VuZSk7XHJcbiAgICArK3RoaXMuX3NjZW5lSW5kZXg7XHJcblxyXG4gICAgdGhpcy5mbGFyZSgncHVzaGVkJyk7XHJcblxyXG4gICAgc2NlbmUuYXBwID0gdGhpcztcclxuICAgIHNjZW5lLmZsYXJlKCdlbnRlcicsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7PjgpLjg53jg4Pjg5fjgZnjgoso44Od44O844K644KE44Kq44OW44K344On44Oz55S76Z2i44Gq44Gp44Gn5L2/55SoKVxyXG4gICAqL1xyXG4gIHBvcFNjZW5lKCkge1xyXG4gICAgdGhpcy5mbGFyZSgncG9wJyk7XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2VzY2VuZScpO1xyXG5cclxuICAgIHZhciBzY2VuZSA9IHRoaXMuX3NjZW5lcy5wb3AoKTtcclxuICAgIC0tdGhpcy5fc2NlbmVJbmRleDtcclxuXHJcbiAgICBzY2VuZS5mbGFyZSgnZXhpdCcsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcbiAgICBzY2VuZS5hcHAgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZmxhcmUoJ3BvcGVkJyk7XHJcblxyXG4gICAgLy9cclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdyZXN1bWUnLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgICAgcHJldlNjZW5lOiBzY2VuZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzY2VuZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+OBrnVwZGF0ZeOCkuWun+ihjOOBmeOCi+OCiOOBhuOBq+OBmeOCi1xyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7Pjga51cGRhdGXjgpLlrp/ooYzjgZfjgarjgYTjgojjgYbjgavjgZnjgotcclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlU3RhdHMoKSB7XHJcbiAgICBpZiAocGhpbmEkMS5nbG9iYWwuU3RhdHMpIHtcclxuICAgICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKFwibm90IGRlZmluZWQgc3RhdHMuXCIpO1xyXG4gICAgICB2YXIgU1RBVFNfVVJMID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3N0YXRzLmpzL3IxNC9TdGF0cy5qcyc7XHJcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0LnNyYyA9IFNUQVRTX1VSTDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVTdGF0cygpO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGVuYWJsZURhdEdVSShjYWxsYmFjaykge1xyXG4gICAgaWYgKHBoaW5hJDEuZ2xvYmFsLmRhdCkge1xyXG4gICAgICB2YXIgZ3VpID0gbmV3IHBoaW5hJDEuZ2xvYmFsLmRhdC5HVUkoKTtcclxuICAgICAgY2FsbGJhY2soZ3VpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLndhcm4oXCJub3QgZGVmaW5lZCBkYXQuR1VJLlwiKTtcclxuICAgICAgdmFyIFVSTCA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kYXQtZ3VpLzAuNS4xL2RhdC5ndWkuanMnO1xyXG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBVUkw7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBndWkgPSBuZXcgcGhpbmEkMS5nbG9iYWwuZGF0LkdVSSgpO1xyXG4gICAgICAgIGNhbGxiYWNrKGd1aSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2xvb3AoKSB7XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUuY2hlY2sodGhpcy5jdXJyZW50U2NlbmUpO1xyXG4gICAgdGhpcy5fZHJhdygpO1xyXG5cclxuICAgIC8vIHN0YXRzIHVwZGF0ZVxyXG4gICAgaWYgKHRoaXMuc3RhdHMpIHRoaXMuc3RhdHMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuYXdha2UpIHtcclxuICAgICAgLy8g44Ko44Oz44K/44O844OV44Os44O844Og44Kk44OZ44Oz44OIXHJcbiAgICAgIGlmICh0aGlzLmhhcygnZW50ZXJmcmFtZScpKSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZW50ZXJmcmFtZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSAmJiB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZXIudXBkYXRlKHRoaXMuY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaPj+eUu+eUqOS7ruaDs+mWouaVsFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2RyYXcoKSB7fVxyXG5cclxuICBnZXQgY3VycmVudFNjZW5lKCkgICB7IHJldHVybiB0aGlzLl9zY2VuZXNbdGhpcy5fc2NlbmVJbmRleF07IH1cclxuICBzZXQgY3VycmVudFNjZW5lKHYpICB7IHRoaXMuX3NjZW5lc1t0aGlzLl9zY2VuZUluZGV4XSA9IHY7IH1cclxuXHJcbiAgZ2V0IHJvb3RTY2VuZSgpICAgeyByZXR1cm4gdGhpcy5fc2NlbmVzWzBdOyB9XHJcbiAgc2V0IHJvb3RTY2VuZSh2KSAgeyB0aGlzLl9zY2VuZXNbMF0gPSB2OyB9XHJcblxyXG4gIGdldCBmcmFtZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmZyYW1lOyB9XHJcbiAgc2V0IGZyYW1lKHYpIHsgdGhpcy50aWNrZXIuZnJhbWUgPSB2OyB9XHJcblxyXG4gIGdldCBmcHMoKSB7IHJldHVybiB0aGlzLnRpY2tlci5mcHM7IH1cclxuICBzZXQgZnBzKHYpIHsgdGhpcy50aWNrZXIuZnBzID0gdjsgfVxyXG5cclxuICBnZXQgZGVsdGFUaW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuZGVsdGFUaW1lOyB9XHJcblxyXG4gIGdldCBlbGFwc2VkVGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmVsYXBzZWRUaW1lOyB9XHJcblxyXG4gIGdldCBjdXJyZW50VGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmN1cnJlbnRUaW1lOyB9XHJcblxyXG4gIGdldCBzdGFydFRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5zdGFydFRpbWU7IH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLk9iamVjdDJEXHJcbiAqIE9iamVjdDJEXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5FbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBPYmplY3QyRCBleHRlbmRzIEVsZW1lbnQge1xyXG5cclxuICAvLyAvKiog5L2N572uICovXHJcbiAgLy8gcG9zaXRpb246IG51bGwsXHJcbiAgLy8gLyoqIOWbnui7oiAqL1xyXG4gIC8vIHJvdGF0aW9uOiAwLFxyXG4gIC8vIC8qKiDjgrnjgrHjg7zjg6sgKi9cclxuICAvLyBzY2FsZTogbnVsbCxcclxuICAvLyAvKiog5Z+65rqW5L2N572uICovXHJcbiAgLy8gb3JpZ2luOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBPYmplY3QyRC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zLCBwaGluYS5hcHAuT2JqZWN0MkQuZGVmYXVsdHMpO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMihvcHRpb25zLngsIG9wdGlvbnMueSk7XHJcbiAgICB0aGlzLnNjYWxlICAgID0gbmV3IFZlY3RvcjIob3B0aW9ucy5zY2FsZVgsIG9wdGlvbnMuc2NhbGVZKTtcclxuICAgIHRoaXMucm90YXRpb24gPSBvcHRpb25zLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5vcmlnaW4gICA9IG5ldyBWZWN0b3IyKG9wdGlvbnMub3JpZ2luWCwgb3B0aW9ucy5vcmlnaW5ZKTtcclxuXHJcbiAgICB0aGlzLl9tYXRyaXggPSBuZXcgTWF0cml4MzMoKS5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5fd29ybGRNYXRyaXggPSBuZXcgTWF0cml4MzMoKS5pZGVudGl0eSgpO1xyXG5cclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuX292ZXJGbGFncyA9IHt9O1xyXG4gICAgdGhpcy5fdG91Y2hGbGFncyA9IHt9O1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XHJcbiAgICB0aGlzLmJvdW5kaW5nVHlwZSA9IG9wdGlvbnMuYm91bmRpbmdUeXBlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54K544Go6KGd56qB44GX44Gm44GE44KL44GL44KS5Yik5a6aXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIGhpdFRlc3QoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuYm91bmRpbmdUeXBlID09PSAncmVjdCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0VGVzdFJlY3QoeCwgeSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ2NpcmNsZScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0VGVzdENpcmNsZSh4LCB5KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBub25lIOOBruWgtOWQiFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpdFRlc3RSZWN0KHgsIHkpIHtcclxuICAgIHZhciBwID0gdGhpcy5nbG9iYWxUb0xvY2FsKG5ldyBWZWN0b3IyKHgsIHkpKTtcclxuXHJcbiAgICB2YXIgbGVmdCAgID0gLXRoaXMud2lkdGgqdGhpcy5vcmlnaW5YO1xyXG4gICAgdmFyIHJpZ2h0ICA9ICt0aGlzLndpZHRoKigxLXRoaXMub3JpZ2luWCk7XHJcbiAgICB2YXIgdG9wICAgID0gLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTtcclxuICAgIHZhciBib3R0b20gPSArdGhpcy5oZWlnaHQqKDEtdGhpcy5vcmlnaW5ZKTtcclxuXHJcbiAgICByZXR1cm4gKCBsZWZ0IDwgcC54ICYmIHAueCA8IHJpZ2h0ICkgJiYgKCB0b3AgIDwgcC55ICYmIHAueSA8IGJvdHRvbSApO1xyXG4gIH1cclxuXHJcbiAgaGl0VGVzdENpcmNsZSh4LCB5KSB7XHJcbiAgICAvLyDlhobliKTlrppcclxuICAgIHZhciBwID0gdGhpcy5nbG9iYWxUb0xvY2FsKG5ldyBWZWN0b3IyKHgsIHkpKTtcclxuICAgIGlmICgoKHAueCkqKHAueCkrKHAueSkqKHAueSkpIDwgKHRoaXMucmFkaXVzKnRoaXMucmFkaXVzKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KaB57Sg44Go6KGd56qB44GX44Gm44GE44KL44GL44KS5Yik5a6aXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsbVxyXG4gICAqL1xyXG4gIGhpdFRlc3RFbGVtZW50KGVsbSkge1xyXG4gICAgdmFyIHJlY3QwID0gdGhpcztcclxuICAgIHZhciByZWN0MSA9IGVsbTtcclxuICAgIHJldHVybiAocmVjdDAubGVmdCA8IHJlY3QxLnJpZ2h0KSAmJiAocmVjdDAucmlnaHQgPiByZWN0MS5sZWZ0KSAmJlxyXG4gICAgICAgICAgIChyZWN0MC50b3AgPCByZWN0MS5ib3R0b20pICYmIChyZWN0MC5ib3R0b20gPiByZWN0MS50b3ApO1xyXG4gIH1cclxuXHJcblxyXG4gIGdsb2JhbFRvTG9jYWwocCkge1xyXG4gICAgdmFyIG1hdHJpeCA9IHRoaXMuX3dvcmxkTWF0cml4LmNsb25lKCk7XHJcbiAgICBtYXRyaXguaW52ZXJ0KCk7XHJcbiAgICAvLyBtYXRyaXgudHJhbnNwb3NlKCk7XHJcblxyXG4gICAgdmFyIHRlbXAgPSBtYXRyaXgubXVsdGlwbHlWZWN0b3IyKHApO1xyXG5cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJhY3RpdmUoZmxhZywgdHlwZSkge1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZsYWc7XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICB0aGlzLmJvdW5kaW5nVHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBYIOW6p+aomeWApOOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICovXHJcbiAgc2V0WCh4KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFkg5bqn5qiZ5YCk44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRZKHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogWFkg5bqn5qiZ44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlm57ou6LjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICAgKi9cclxuICBzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrnjgrHjg7zjg6vjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0U2NhbGUoeCwgeSkge1xyXG4gICAgdGhpcy5zY2FsZS54ID0geDtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnkgPSB4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWfuua6lueCueOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRPcmlnaW4oeCwgeSkge1xyXG4gICAgdGhpcy5vcmlnaW4ueCA9IHg7XHJcbiAgICB0aGlzLm9yaWdpbi55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDluYXjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcclxuICAgKi9cclxuICBzZXRXaWR0aCh3aWR0aCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOmrmOOBleOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrXjgqTjgroo5bmFLCDpq5jjgZUp44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRCb3VuZGluZ1R5cGUodHlwZSkge1xyXG4gICAgdGhpcy5ib3VuZGluZ1R5cGUgPSB0eXBlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0geDtcclxuICAgIHRoaXMucG9zaXRpb24ueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfY2FsY1dvcmxkTWF0cml4KCkge1xyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyBjYWNoZSBjaGVja1xyXG4gICAgaWYgKHRoaXMucm90YXRpb24gIT0gdGhpcy5fY2FjaGVkUm90YXRpb24pIHtcclxuICAgICAgdGhpcy5fY2FjaGVkUm90YXRpb24gPSB0aGlzLnJvdGF0aW9uO1xyXG5cclxuICAgICAgdmFyIHIgPSB0aGlzLnJvdGF0aW9uKihNYXRoLlBJLzE4MCk7XHJcbiAgICAgIHRoaXMuX3NyID0gTWF0aC5zaW4ocik7XHJcbiAgICAgIHRoaXMuX2NyID0gTWF0aC5jb3Mocik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvY2FsID0gdGhpcy5fbWF0cml4O1xyXG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Ll93b3JsZE1hdHJpeCB8fCBNYXRyaXgzMy5JREVOVElUWTtcclxuICAgIHZhciB3b3JsZCA9IHRoaXMuX3dvcmxkTWF0cml4O1xyXG5cclxuICAgIC8vIOODreODvOOCq+ODq+OBruihjOWIl+OCkuioiOeul1xyXG4gICAgbG9jYWwubTAwID0gdGhpcy5fY3IgKiB0aGlzLnNjYWxlLng7XHJcbiAgICBsb2NhbC5tMDEgPS10aGlzLl9zciAqIHRoaXMuc2NhbGUueTtcclxuICAgIGxvY2FsLm0xMCA9IHRoaXMuX3NyICogdGhpcy5zY2FsZS54O1xyXG4gICAgbG9jYWwubTExID0gdGhpcy5fY3IgKiB0aGlzLnNjYWxlLnk7XHJcbiAgICBsb2NhbC5tMDIgPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICBsb2NhbC5tMTIgPSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgLy8gY2FjaGVcclxuICAgIHZhciBhMDAgPSBsb2NhbC5tMDA7IHZhciBhMDEgPSBsb2NhbC5tMDE7IHZhciBhMDIgPSBsb2NhbC5tMDI7XHJcbiAgICB2YXIgYTEwID0gbG9jYWwubTEwOyB2YXIgYTExID0gbG9jYWwubTExOyB2YXIgYTEyID0gbG9jYWwubTEyO1xyXG4gICAgdmFyIGIwMCA9IHBhcmVudC5tMDA7IHZhciBiMDEgPSBwYXJlbnQubTAxOyB2YXIgYjAyID0gcGFyZW50Lm0wMjtcclxuICAgIHZhciBiMTAgPSBwYXJlbnQubTEwOyB2YXIgYjExID0gcGFyZW50Lm0xMTsgdmFyIGIxMiA9IHBhcmVudC5tMTI7XHJcblxyXG4gICAgLy8g6Kaq44Gu6KGM5YiX44Go5o6b44GR5ZCI44KP44Gb44KLXHJcbiAgICB3b3JsZC5tMDAgPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTA7XHJcbiAgICB3b3JsZC5tMDEgPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTE7XHJcbiAgICB3b3JsZC5tMDIgPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDI7XHJcblxyXG4gICAgd29ybGQubTEwID0gYjEwICogYTAwICsgYjExICogYTEwO1xyXG4gICAgd29ybGQubTExID0gYjEwICogYTAxICsgYjExICogYTExO1xyXG4gICAgd29ybGQubTEyID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHhcclxuICAgKiB45bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHgoKSAgIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueDsgfVxyXG4gIHNldCB4KHYpICB7IHRoaXMucG9zaXRpb24ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHlcclxuICAgKiB55bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHkoKSAgIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueTsgfVxyXG4gIHNldCB5KHYpICB7IHRoaXMucG9zaXRpb24ueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIG9yaWdpblhcclxuICAgKiB45bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IG9yaWdpblgoKSAgIHsgcmV0dXJuIHRoaXMub3JpZ2luLng7IH1cclxuICBzZXQgb3JpZ2luWCh2KSAgeyB0aGlzLm9yaWdpbi54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgb3JpZ2luWVxyXG4gICAqIHnluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgb3JpZ2luWSgpICAgeyByZXR1cm4gdGhpcy5vcmlnaW4ueTsgfVxyXG4gIHNldCBvcmlnaW5ZKHYpICB7IHRoaXMub3JpZ2luLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBzY2FsZVhcclxuICAgKiDjgrnjgrHjg7zjg6tY5YCkXHJcbiAgICovXHJcbiAgZ2V0IHNjYWxlWCgpICAgeyByZXR1cm4gdGhpcy5zY2FsZS54OyB9XHJcbiAgc2V0IHNjYWxlWCh2KSAgeyB0aGlzLnNjYWxlLnggPSB2OyB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHNjYWxlWVxyXG4gICAqIOOCueOCseODvOODq1nlgKRcclxuICAgKi9cclxuICBnZXQgc2NhbGVZKCkgICB7IHJldHVybiB0aGlzLnNjYWxlLnk7IH1cclxuICBzZXQgc2NhbGVZKHYpICB7IHRoaXMuc2NhbGUueSA9IHY7IH1cclxuICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgd2lkdGhcclxuICAgKiB3aWR0aFxyXG4gICAqL1xyXG4gIGdldCB3aWR0aCgpICAge1xyXG4gICAgcmV0dXJuICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSA/XHJcbiAgICAgIHRoaXMuX3dpZHRoIDogdGhpcy5fZGlhbWV0ZXI7XHJcbiAgfVxyXG4gIHNldCB3aWR0aCh2KSAgeyB0aGlzLl93aWR0aCA9IHY7IH1cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgaGVpZ2h0XHJcbiAgICogaGVpZ2h0XHJcbiAgICovXHJcbiAgZ2V0IGhlaWdodCgpICAge1xyXG4gICAgcmV0dXJuICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSA/XHJcbiAgICAgIHRoaXMuX2hlaWdodCA6IHRoaXMuX2RpYW1ldGVyO1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHYpICB7IHRoaXMuX2hlaWdodCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHJhZGl1c1xyXG4gICAqIOWNiuW+hFxyXG4gICAqL1xyXG4gIGdldCByYWRpdXMoKSAgIHtcclxuICAgIHJldHVybiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0JykgP1xyXG4gICAgICAodGhpcy53aWR0aCt0aGlzLmhlaWdodCkvNCA6IHRoaXMuX3JhZGl1cztcclxuICB9XHJcbiAgc2V0IHJhZGl1cyh2KSAge1xyXG4gICAgdGhpcy5fcmFkaXVzID0gdjtcclxuICAgIHRoaXMuX2RpYW1ldGVyID0gdioyO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgdG9wXHJcbiAgICog5bemXHJcbiAgICovXHJcbiAgZ2V0IHRvcCgpICAgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZOyB9XHJcbiAgc2V0IHRvcCh2KSAgeyB0aGlzLnkgPSB2ICsgdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICByaWdodFxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCByaWdodCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCooMS10aGlzLm9yaWdpblgpOyB9XHJcbiAgc2V0IHJpZ2h0KHYpICB7IHRoaXMueCA9IHYgLSB0aGlzLndpZHRoKigxLXRoaXMub3JpZ2luWCk7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGJvdHRvbVxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCBib3R0b20oKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0KigxLXRoaXMub3JpZ2luWSk7IH1cclxuICBzZXQgYm90dG9tKHYpICB7IHRoaXMueSA9IHYgLSB0aGlzLmhlaWdodCooMS10aGlzLm9yaWdpblkpOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBsZWZ0XHJcbiAgICog5bemXHJcbiAgICovXHJcbiAgZ2V0IGxlZnQoKSAgIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgqdGhpcy5vcmlnaW5YOyB9XHJcbiAgc2V0IGxlZnQodikgIHsgdGhpcy54ID0gdiArIHRoaXMud2lkdGgqdGhpcy5vcmlnaW5YOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBjZW50ZXJYXHJcbiAgICogY2VudGVyWFxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJYKCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzIgLSB0aGlzLndpZHRoKnRoaXMub3JpZ2luWDsgfVxyXG4gIHNldCBjZW50ZXJYKHYpICB7XHJcbiAgICAvLyBUT0RPOiDjganjgYbjgZfjgojjgYbjgYvjgao/P1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGNlbnRlcllcclxuICAgKiBjZW50ZXJZXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlclkoKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmhlaWdodCp0aGlzLm9yaWdpblk7IH1cclxuICBzZXQgY2VudGVyWSh2KSAge1xyXG4gICAgLy8gVE9ETzog44Gp44GG44GX44KI44GG44GL44GqPz9cclxuICB9XHJcbn1cclxuXHJcbk9iamVjdDJELmRlZmF1bHRzID0ge1xyXG4gIHg6IDAsXHJcbiAgeTogMCxcclxuICBzY2FsZVg6IDEsXHJcbiAgc2NhbGVZOiAxLFxyXG4gIHJvdGF0aW9uOiAwLFxyXG4gIG9yaWdpblg6IDAuNSxcclxuICBvcmlnaW5ZOiAwLjUsXHJcbiAgd2lkdGg6IDY0LFxyXG4gIGhlaWdodDogNjQsXHJcbiAgcmFkaXVzOiAzMixcclxuICBib3VuZGluZ1R5cGU6ICdyZWN0JyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5Eb21BcHBcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLkJhc2VBcHBcclxuICovXHJcbmNsYXNzIERvbUFwcCBleHRlbmRzIEJhc2VBcHAge1xyXG5cclxuICAvLyBkb21FbGVtZW50OiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5kb21FbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IG9wdGlvbnMuZG9tRWxlbWVudDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAob3B0aW9ucy5xdWVyeSkge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5xdWVyeSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoJ2Vycm9yJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5mcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZwcyA9IG9wdGlvbnMuZnBzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih0eXBlb2Ygb3B0aW9ucy5ydW5uZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy50aWNrZXIucnVubmVyID0gb3B0aW9ucy5ydW5uZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBNb3VzZSh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy50b3VjaCA9IG5ldyBUb3VjaCh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy50b3VjaExpc3QgPSBuZXcgVG91Y2hMaXN0KHRoaXMuZG9tRWxlbWVudCwgNSk7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKGRvY3VtZW50KTtcclxuICAgIC8vIC8vIOWKoOmAn+W6puOCu+ODs+OCteODvOOCkueUn+aIkFxyXG4gICAgLy8gdGhpcy5hY2NlbGVyb21ldGVyID0gcGhpbmEuaW5wdXQuQWNjZWxlcm9tZXRlcigpO1xyXG5cclxuICAgIC8vIOODneOCpOODs+OCv+OCkuOCu+ODg+ODiChQQyDjgafjga8gTW91c2UsIE1vYmlsZSDjgafjga8gVG91Y2gpXHJcbiAgICB0aGlzLnBvaW50ZXIgPSB0aGlzLnRvdWNoO1xyXG4gICAgdGhpcy5wb2ludGVycyA9IHRoaXMudG91Y2hMaXN0LnRvdWNoZXM7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5wb2ludGVyID0gdGhpcy50b3VjaDtcclxuICAgICAgdGhpcy5wb2ludGVycyA9IHRoaXMudG91Y2hMaXN0LnRvdWNoZXM7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnBvaW50ZXIgPSB0aGlzLm1vdXNlO1xyXG4gICAgICB0aGlzLnBvaW50ZXJzID0gW3RoaXMubW91c2VdO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBrZXlib2FyZCBldmVudFxyXG4gICAgdGhpcy5rZXlib2FyZC5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgJiYgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2tleWRvd24nLCB7XHJcbiAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmtleWJvYXJkLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgJiYgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2tleXVwJywge1xyXG4gICAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5rZXlib2FyZC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lICYmIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdrZXlwcmVzcycsIHtcclxuICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBjbGljayDlr77lv5xcclxuICAgIHZhciBldmVudE5hbWUgPSBwaGluYSQxLmlzTW9iaWxlKCkgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLl9jaGVja0NsaWNrLmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIOaxuuWumuaZguOBruWHpueQhuOCkuOCquODleOBq+OBmeOCiyhpUGhvbmUg5pmC44Gu44Gh44KJ44Gk44GN5a++562WKVxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wKCk7IH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSkgeyBlLnN0b3AoKTsgfSk7XHJcblxyXG4gICAgLy8g44Km44Kj44Oz44OJ44Km44OV44Kp44O844Kr44K55pmC44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76YyyXHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdmb2N1cycpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgnZm9jdXMnKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgLy8g44Km44Kj44Oz44OJ44Km44OW44Op44O85pmC44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76YyyXHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2JsdXInKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2JsdXInKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIOabtOaWsOmWouaVsOOCkueZu+mMslxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLm1vdXNlLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRvdWNoLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRvdWNoTGlzdC51cGRhdGUoKTtcclxuICAgICAgdGhpcy5rZXlib2FyZC51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrQ2xpY2soZSkge1xyXG4gICAgdmFyIF9jaGVjayA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICAgICAgX2NoZWNrKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWxlbWVudC5fY2xpY2tlZCAmJiBlbGVtZW50LmhhcygnY2xpY2snKSkge1xyXG4gICAgICAgIGVsZW1lbnQuZmxhcmUoJ2NsaWNrJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxlbWVudC5fY2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBfY2hlY2sodGhpcy5jdXJyZW50U2NlbmUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DYW52YXNSZW5kZXJlclxyXG4gKi9cclxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc2NlbmUpIHtcclxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XHJcbiAgICBpZiAoc2NlbmUuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLmNsZWFyQ29sb3Ioc2NlbmUuYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jb250ZXh0LnNhdmUoKTtcclxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oc2NlbmUpO1xyXG4gICAgdGhpcy5fY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDaGlsZHJlbihvYmopIHtcclxuICAgIC8vIOWtkOS+m+OBn+OBoeOCguWun+ihjFxyXG4gICAgaWYgKG9iai5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBvYmouY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wQ2hpbGRyZW4ubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJPYmplY3QodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyT2JqZWN0KG9iaikge1xyXG4gICAgaWYgKG9iai52aXNpYmxlID09PSBmYWxzZSAmJiAhb2JqLmludGVyYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgb2JqLl9jYWxjV29ybGRNYXRyaXggJiYgb2JqLl9jYWxjV29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICBpZiAob2JqLnZpc2libGUgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgb2JqLl9jYWxjV29ybGRBbHBoYSAmJiBvYmouX2NhbGNXb3JsZEFscGhhKCk7XHJcblxyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBvYmouX3dvcmxkQWxwaGE7XHJcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IG9iai5ibGVuZE1vZGU7XHJcblxyXG4gICAgaWYgKG9iai5fd29ybGRNYXRyaXgpIHtcclxuICAgICAgLy8g6KGM5YiX44KS44K744OD44OIXHJcbiAgICAgIHZhciBtID0gb2JqLl93b3JsZE1hdHJpeDtcclxuICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oIG0ubTAwLCBtLm0xMCwgbS5tMDEsIG0ubTExLCBtLm0wMiwgbS5tMTIgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLmNsaXApIHtcclxuXHJcbiAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgICAgb2JqLmNsaXAodGhpcy5jYW52YXMpO1xyXG4gICAgICBjb250ZXh0LmNsaXAoKTtcclxuXHJcbiAgICAgIGlmIChvYmouZHJhdykgb2JqLmRyYXcodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgLy8g5a2Q5L6b44Gf44Gh44KC5a6f6KGMXHJcbiAgICAgIGlmIChvYmoucmVuZGVyQ2hpbGRCeVNlbGYgPT09IGZhbHNlICYmIG9iai5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB2YXIgdGVtcENoaWxkcmVuID0gb2JqLmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgICAgICBmb3IgKHZhciBpPTAsbGVuPXRlbXBDaGlsZHJlbi5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlck9iamVjdCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAob2JqLmRyYXcpIG9iai5kcmF3KHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIC8vIOWtkOS+m+OBn+OBoeOCguWun+ihjFxyXG4gICAgICBpZiAob2JqLnJlbmRlckNoaWxkQnlTZWxmID09PSBmYWxzZSAmJiBvYmouY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBvYmouY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgICBmb3IgKHZhciBpPTAsbGVuPXRlbXBDaGlsZHJlbi5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLlNjZW5lXHJcbiAqL1xyXG5jbGFzcyBEaXNwbGF5U2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIERpc3BsYXlTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBwYXJhbXMgPSAoe30pLiRzYWZlKHBhcmFtcywgRGlzcGxheVNjZW5lLmRlZmF1bHRzKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHRoaXMuY2FudmFzLnNldFNpemUocGFyYW1zLndpZHRoLCBwYXJhbXMuaGVpZ2h0KTtcclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAocGFyYW1zLmJhY2tncm91bmRDb2xvcikgPyBwYXJhbXMuYmFja2dyb3VuZENvbG9yIDogbnVsbDtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gcGFyYW1zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5ncmlkWCA9IG5ldyBHcmlkKHBhcmFtcy53aWR0aCwgMTYpO1xyXG4gICAgdGhpcy5ncmlkWSA9IG5ldyBHcmlkKHBhcmFtcy5oZWlnaHQsIDE2KTtcclxuXHJcbiAgICAvLyBUT0RPOiDkuIDml6bjgoDjgorjgoTjgorlr77lv5xcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSA9IGZ1bmN0aW9uKGZsYWcpIHtcclxuICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZsYWc7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3ZlckZsYWdzID0ge307XHJcbiAgICB0aGlzLl90b3VjaEZsYWdzID0ge307XHJcblxyXG4gICAgdmFyIGN0eCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcbiAgICBpZiAocGFyYW1zLmltYWdlU21vb3RoaW5nID09PSBmYWxzZSkge1xyXG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIGN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgY3R4Lm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXRUZXN0KCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRGlzcGxheVNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiA2NDAsXHJcbiAgaGVpZ2h0OiA5NjAsXHJcbiAgaW1hZ2VTbW9vdGhpbmc6IHRydWUsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuQ2FudmFzQXBwXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRG9tQXBwXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNBcHAgZXh0ZW5kcyBEb21BcHAge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCgob3B0aW9ucyB8fCB7fSksIENhbnZhc0FwcC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKENhbnZhc0FwcC5kZWZhdWx0cyk7XHJcbiAgICBcclxuICAgIGlmICghb3B0aW9ucy5xdWVyeSAmJiAhb3B0aW9ucy5kb21FbGVtZW50KSB7XHJcbiAgICAgIG9wdGlvbnMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBpZiAob3B0aW9ucy5hcHBlbmQpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9wdGlvbnMuZG9tRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZ3JpZFggPSBuZXcgR3JpZCh7XHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICBjb2x1bW5zOiBvcHRpb25zLmNvbHVtbnMsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ3JpZFkgPSBuZXcgR3JpZCh7XHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgY29sdW1uczogb3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMuZG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRTaXplKG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IChvcHRpb25zLmJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIDogJ3doaXRlJztcclxuXHJcbiAgICB0aGlzLnJlcGxhY2VTY2VuZShuZXcgRGlzcGxheVNjZW5lKHtcclxuICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZml0KSB7XHJcbiAgICAgIHRoaXMuZml0U2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMucGl4ZWxhdGVkKSB7XHJcbiAgICAgIC8vIOODgeODqeOBpOOBjemYsuatolxyXG4gICAgICAvLyDjg4njg4Pjg4jntbXjgrLjg7zjg6Djga7jgrXjg53jg7zjg4hcclxuICAgICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy1pbWFnZXMvI3RoZS1pbWFnZS1yZW5kZXJpbmdcclxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ltYWdlLXJlbmRlcmluZyNCcm93c2VyX2NvbXBhdGliaWxpdHlcclxuICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcXC9cXGQrLykpIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAnY3Jpc3AtZWRnZXMnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVzaFNjZW5lLCBwb3BTY2VuZSDlr77nrZZcclxuICAgIHRoaXMub24oJ3B1c2gnLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gb25lbnRlciDlr77nrZbjgafmj4/nlLvjgZfjgabjgYrjgY9cclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLmNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuX2RyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZHJhdygpIHtcclxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmNhbnZhcy5jbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLmNhbnZhcykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5fcmVuZGVyKCk7XHJcblxyXG4gICAgICAvLyB0aGlzLl9zY2VuZXMuZWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICB0aGlzLl9zY2VuZXMuZm9yRWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAgIHZhciBjID0gc2NlbmUuY2FudmFzO1xyXG4gICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShjLmRvbUVsZW1lbnQsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZml0U2NyZWVuKCkge1xyXG4gICAgdGhpcy5jYW52YXMuZml0U2NyZWVuKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljXHJcbkNhbnZhc0FwcC5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogNjQwLFxyXG4gIGhlaWdodDogOTYwLFxyXG4gIGNvbHVtbnM6IDEyLFxyXG4gIGZpdDogdHJ1ZSxcclxuICBhcHBlbmQ6IHRydWUsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLk9iamVjdDJEXHJcbiAqL1xyXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIE9iamVjdDJEIHtcclxuXHJcbiAgLy8gLyoqIOihqOekuuODleODqeOCsCAqL1xyXG4gIC8vIHZpc2libGU6IHRydWUsXHJcbiAgLy8gLyoqIOOCouODq+ODleOCoSAqL1xyXG4gIC8vIGFscGhhOiAxLjAsXHJcbiAgLy8gLyoqIOODluODrOODs+ODieODouODvOODiSAqL1xyXG4gIC8vIGJsZW5kTW9kZTogXCJzb3VyY2Utb3ZlclwiLFxyXG5cclxuICAvLyAvKiog5a2Q5L6b44KSIOiHquWIhuOBrkNhbnZhc1JlbmRlcmVyIOOBp+aPj+eUu+OBmeOCi+OBiyAqL1xyXG4gIC8vIHJlbmRlckNoaWxkQnlTZWxmOiBmYWxzZSxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBEaXNwbGF5RWxlbWVudC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50LmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMudmlzaWJsZSA9IChvcHRpb25zLnZpc2libGUgIT0gbnVsbCkgPyBvcHRpb25zLnZpc2libGUgOiB0cnVlO1xyXG4gICAgdGhpcy5hbHBoYSA9IChvcHRpb25zLmFscGhhICE9IG51bGwpID8gb3B0aW9ucy5hbHBoYSA6IDEuMDtcclxuICAgIHRoaXMuYmxlbmRNb2RlID0gXCJzb3VyY2Utb3ZlclwiO1xyXG4gICAgdGhpcy5yZW5kZXJDaGlsZEJ5U2VsZiA9IGZhbHNlO1xyXG4gICAgdGhpcy5fd29ybGRBbHBoYSA9IDEuMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODq+ODleOCoeWApOOCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldEFscGhhKGFscGhhKSB7XHJcbiAgICB0aGlzLmFscGhhID0gYWxwaGE7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOihqOekui/pnZ7ooajnpLrjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRWaXNpYmxlKGZsYWcpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZsYWc7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOihqOekulxyXG4gICAqL1xyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpnZ7ooajnpLpcclxuICAgKi9cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NhbGNXb3JsZEFscGhhKCkge1xyXG4gICAgaWYgKHRoaXMuYWxwaGEgPCAwKSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkQWxwaGEgPSAwO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucGFyZW50KSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciB3b3JsZEFscGhhID0gKHRoaXMucGFyZW50Ll93b3JsZEFscGhhICE9PSB1bmRlZmluZWQpID8gdGhpcy5wYXJlbnQuX3dvcmxkQWxwaGEgOiAxLjA7XHJcbiAgICAgIC8vIGFscGhhXHJcbiAgICAgIHRoaXMuX3dvcmxkQWxwaGEgPSB3b3JsZEFscGhhICogdGhpcy5hbHBoYTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5EaXNwbGF5RWxlbWVudC5kZWZhdWx0cyA9IHtcclxuICBhbHBoYTogMS4wLFxyXG4gIHZpc2libGU6IHRydWUsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkFzc2V0TWFuYWdlclxyXG4gKiBcclxuICovXHJcbmNsYXNzIEFzc2V0TWFuYWdlciB7XHJcblxyXG4gIHN0YXRpYyBnZXQodHlwZSwga2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NldHNbdHlwZV0gJiYgdGhpcy5hc3NldHNbdHlwZV1ba2V5XTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQodHlwZSwga2V5LCBhc3NldCkge1xyXG4gICAgaWYgKCF0aGlzLmFzc2V0c1t0eXBlXSkge1xyXG4gICAgICB0aGlzLmFzc2V0c1t0eXBlXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5hc3NldHNbdHlwZV1ba2V5XSA9IGFzc2V0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRhaW5zKHR5cGUsIGtleSkge1xyXG4gICAgcmV0dXJuIDtcclxuICB9XHJcblxyXG59XHJcblxyXG5Bc3NldE1hbmFnZXIuYXNzZXRzID0ge1xyXG4gIGltYWdlOiB7fSxcclxuICBzb3VuZDoge30sXHJcbiAgc3ByaXRlc2hlZXQ6IHt9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlNwcml0ZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBEaXNwbGF5RWxlbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3JjUmVjdCA9IG5ldyBSZWN0KCk7XHJcbiAgICB0aGlzLnNldEltYWdlKGltYWdlLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgLy8gICAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgLy8gICAtdGhpcy53aWR0aCp0aGlzLm9yaWdpbi54LCAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW4ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgIC8vICAgKTtcclxuXHJcbiAgICB2YXIgc3JjUmVjdCA9IHRoaXMuc3JjUmVjdDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qud2lkdGgsIHNyY1JlY3QuaGVpZ2h0LFxyXG4gICAgICAtdGhpcy5fd2lkdGgqdGhpcy5vcmlnaW5YLCAtdGhpcy5faGVpZ2h0KnRoaXMub3JpZ2luWSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGltYWdlID0gQXNzZXRNYW5hZ2VyLmdldCgnaW1hZ2UnLCBpbWFnZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuX2ltYWdlLmRvbUVsZW1lbnQud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuX2ltYWdlLmRvbUVsZW1lbnQuaGVpZ2h0O1xyXG5cclxuICAgIGlmICh3aWR0aCkgeyB0aGlzLndpZHRoID0gd2lkdGg7IH1cclxuICAgIGlmIChoZWlnaHQpIHsgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IH1cclxuXHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJhbWVJbmRleChpbmRleCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIHR3ICA9IHdpZHRoIHx8IHRoaXMuX3dpZHRoOyAgICAgIC8vIHR3XHJcbiAgICB2YXIgdGggID0gaGVpZ2h0IHx8IHRoaXMuX2hlaWdodDsgICAgLy8gdGhcclxuICAgIHZhciByb3cgPSB+fih0aGlzLmltYWdlLmRvbUVsZW1lbnQud2lkdGggLyB0dyk7XHJcbiAgICB2YXIgY29sID0gfn4odGhpcy5pbWFnZS5kb21FbGVtZW50LmhlaWdodCAvIHRoKTtcclxuICAgIHZhciBtYXhJbmRleCA9IHJvdypjb2w7XHJcbiAgICBpbmRleCA9IGluZGV4JW1heEluZGV4O1xyXG4gICAgXHJcbiAgICB2YXIgeCA9IGluZGV4JXJvdztcclxuICAgIHZhciB5ID0gfn4oaW5kZXgvcm93KTtcclxuICAgIHRoaXMuc3JjUmVjdC54ID0geCp0dztcclxuICAgIHRoaXMuc3JjUmVjdC55ID0geSp0aDtcclxuICAgIHRoaXMuc3JjUmVjdC53aWR0aCAgPSB0dztcclxuICAgIHRoaXMuc3JjUmVjdC5oZWlnaHQgPSB0aDtcclxuXHJcbiAgICB0aGlzLl9mcmFtZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgaW1hZ2UoKSB7cmV0dXJuIHRoaXMuX2ltYWdlO31cclxuICBzZXQgaW1hZ2Uodikge1xyXG4gICAgdGhpcy5zZXRJbWFnZSh2KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZyYW1lSW5kZXgoKSB7cmV0dXJuIHRoaXMuX2ZyYW1lSW5kZXg7fVxyXG4gIHNldCBmcmFtZUluZGV4KGlkeCkge1xyXG4gICAgdGhpcy5zZXRGcmFtZUluZGV4KGlkeCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5QbGFpbkVsZW1lbnRcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKi9cclxuY2xhc3MgUGxhaW5FbGVtZW50IGV4dGVuZHMgRGlzcGxheUVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgdmFyIGltYWdlID0gdGhpcy5jYW52YXMuZG9tRWxlbWVudDtcclxuICAgIHZhciB3ID0gaW1hZ2Uud2lkdGg7XHJcbiAgICB2YXIgaCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICB2YXIgeCA9IC13KnRoaXMub3JpZ2luLng7XHJcbiAgICB2YXIgeSA9IC1oKnRoaXMub3JpZ2luLnk7XHJcblxyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgICAwLCAwLCB3LCBoLFxyXG4gICAgICB4LCB5LCB3LCBoXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuTGF5ZXJcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKi9cclxuY2xhc3MgTGF5ZXIgZXh0ZW5kcyBEaXNwbGF5RWxlbWVudCB7XHJcblxyXG4gIC8qKiDlrZDkvpvjgpIg6Ieq5YiG44GuIENhbnZhc1JlbmRlcmVyIOOBp+aPj+eUu+OBmeOCi+OBiyAqL1xyXG4gIC8vIHJlbmRlckNoaWxkQnlTZWxmOiB0cnVlLFxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHtcclxuICAgICAgd2lkdGg6IDY0MCxcclxuICAgICAgaGVpZ2h0OiA5NjAsXHJcbiAgICB9KTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgdGhpcy5ncmlkWCA9IG5ldyBHcmlkKG9wdGlvbnMud2lkdGgsIDE2KTtcclxuICAgIHRoaXMuZ3JpZFkgPSBuZXcgR3JpZChvcHRpb25zLmhlaWdodCwgMTYpO1xyXG4gICAgdGhpcy5yZW5kZXJDaGlsZEJ5U2VsZiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgaWYgKCF0aGlzLmRvbUVsZW1lbnQpIHJldHVybiA7XHJcblxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgICAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAtdGhpcy53aWR0aCp0aGlzLm9yaWdpblgsIC10aGlzLmhlaWdodCp0aGlzLm9yaWdpblksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNhbnZhc0xheWVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuTGF5ZXJcclxuICovXHJcbmNsYXNzIENhbnZhc0xheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jYW52YXMuZG9tRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0ZW1wID0gdGhpcy5fd29ybGRNYXRyaXg7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcyk7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gdGVtcDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgICAgLXRoaXMud2lkdGgqdGhpcy5vcmlnaW5YLCAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5UaHJlZUxheWVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuTGF5ZXJcclxuICovXHJcbmNsYXNzIFRocmVlTGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcblxyXG4gIC8vIHNjZW5lOiBudWxsLFxyXG4gIC8vIGNhbWVyYTogbnVsbCxcclxuICAvLyBsaWdodDogbnVsbCxcclxuICAvLyByZW5kZXJlcjogbnVsbCxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgb3B0aW9ucy53aWR0aCAvIG9wdGlvbnMuaGVpZ2h0LCAxLCAxMDAwMCApO1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMSApO1xyXG4gICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQoIDEsIDEsIDEgKS5ub3JtYWxpemUoKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKCB0aGlzLmxpZ2h0ICk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4ZjBmMGYwICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0ICk7XHJcblxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlBsYWluRWxlbWVudFxyXG4gKi9cclxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBQbGFpbkVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5maWxsID0gb3B0aW9ucy5maWxsO1xyXG4gICAgdGhpcy5zdHJva2UgPSBvcHRpb25zLnN0cm9rZTtcclxuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBvcHRpb25zLnN0cm9rZVdpZHRoO1xyXG4gICAgdGhpcy5saW5lQ2FwID0gb3B0aW9ucy5saW5lQ2FwO1xyXG4gICAgdGhpcy5saW5lSm9pbiA9IG9wdGlvbnMubGluZUpvaW47XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSBvcHRpb25zLnNoYWRvdztcclxuICAgIHRoaXMuc2hhZG93Qmx1ciA9IG9wdGlvbnMuc2hhZG93Qmx1cjtcclxuXHJcbiAgICB0aGlzLndhdGNoRHJhdyA9IHRydWU7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG5cclxuICAgIHZhciBjaGVja1JlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyByZW5kZXJcclxuICAgICAgaWYgKHRoaXMud2F0Y2hEcmF3ICYmIHRoaXMuX2RpcnR5RHJhdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLl9kaXJ0eURyYXcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgY2hlY2tSZW5kZXIpO1xyXG4gICAgdGhpcy5vbignYWRkZWQnLCBjaGVja1JlbmRlcik7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLmhlaWdodCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1NpemUgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IHRoaXMuY2FsY0NhbnZhc1dpZHRoKCksXHJcbiAgICAgIGhlaWdodDogdGhpcy5jYWxjQ2FudmFzSGVpZ2h0KCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaXNTdHJva2FibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJva2UgJiYgMCA8IHRoaXMuc3Ryb2tlV2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdmlydHVhbFxyXG4gICAqIEBwYXJhbSAge3BoaW5hLmdyYXBoaWNzLkNhbnZhc30gY2FudmFzIFxyXG4gICAqIEByZXR1cm4ge2FueX1cclxuICAgKi9cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHZpcnR1YWxcclxuICAgKiBAcGFyYW0gIHtwaGluYS5ncmFwaGljcy5DYW52YXN9IGNhbnZhcyBcclxuICAgKiBAcmV0dXJuIHthbnl9XHJcbiAgICovXHJcbiAgcG9zdHJlbmRlcihjYW52YXMpIHtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmZpbGwoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN0cm9rZShjYW52YXMpIHtcclxuICAgIGNhbnZhcy5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICAvLyDjg6rjgrXjgqTjgrpcclxuICAgIHZhciBzaXplID0gdGhpcy5jYWxjQ2FudmFzU2l6ZSgpO1xyXG4gICAgY2FudmFzLnNldFNpemUoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gICAgLy8g44Kv44Oq44Ki44Kr44Op44O8XHJcbiAgICBjYW52YXMuY2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICAvLyDkuK3lv4PjgavluqfmqJnjgpLnp7vli5VcclxuICAgIGNhbnZhcy50cmFuc2Zvcm1DZW50ZXIoKTtcclxuXHJcbiAgICAvLyDmj4/nlLvliY3lh6bnkIZcclxuICAgIHRoaXMucHJlcmVuZGVyKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAvLyDjgrnjg4jjg63jg7zjgq/mj4/nlLtcclxuICAgIGlmICh0aGlzLmlzU3Ryb2thYmxlKCkpIHtcclxuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlO1xyXG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc3Ryb2tlV2lkdGg7XHJcbiAgICAgIGNvbnRleHQubGluZUNhcCA9IHRoaXMubGluZUNhcDtcclxuICAgICAgY29udGV4dC5saW5lSm9pbiA9IHRoaXMubGluZUpvaW47XHJcbiAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IDA7XHJcbiAgICAgIHRoaXMucmVuZGVyU3Ryb2tlKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aGX44KK44Gk44G244GX5o+P55S7XHJcbiAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsO1xyXG5cclxuICAgICAgLy8gc2hhZG93IOOBriBvbi9vZmZcclxuICAgICAgaWYgKHRoaXMuc2hhZG93KSB7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93O1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IHRoaXMuc2hhZG93Qmx1cjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlbmRlckZpbGwoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmj4/nlLvlvozlh6bnkIZcclxuICAgIHRoaXMucG9zdHJlbmRlcih0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd2F0Y2hSZW5kZXJQcm9wZXJ0eShrZXkpIHtcclxuICAgIC8vIHRoaXMucHJvdG90eXBlLiR3YXRjaChrZXksIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAkd2F0Y2guY2FsbCh0aGlzLnByb3RvdHlwZSwga2V5LCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcclxuICAgICAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB3YXRjaFJlbmRlclByb3BlcnRpZXMoa2V5cykge1xyXG4gICAgdmFyIHdhdGNoUmVuZGVyUHJvcGVydHkgPSB0aGlzLndhdGNoUmVuZGVyUHJvcGVydHkgfHwgU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eTtcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgd2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDY0LFxyXG4gIGhlaWdodDogNjQsXHJcbiAgcGFkZGluZzogOCxcclxuXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2FhYScsXHJcbiAgZmlsbDogJyMwMGEnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIGxpbmVDYXA6ICdyb3VuZCcsXHJcbiAgbGluZUpvaW46ICdyb3VuZCcsXHJcblxyXG4gIHNoYWRvdzogZmFsc2UsXHJcbiAgc2hhZG93Qmx1cjogNCxcclxufTtcclxuXHJcbi8vIF9kZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydGllcyhbXHJcbiAgJ3dpZHRoJyxcclxuICAnaGVpZ2h0JyxcclxuICAncmFkaXVzJyxcclxuICAncGFkZGluZycsXHJcbiAgJ2JhY2tncm91bmRDb2xvcicsXHJcbiAgJ2ZpbGwnLFxyXG4gICdzdHJva2UnLFxyXG4gICdzdHJva2VXaWR0aCcsXHJcbiAgJ2xpbmVDYXAnLFxyXG4gICdsaW5lSm9pbicsXHJcbiAgJ3NoYWRvdycsXHJcbiAgJ3NoYWRvd0JsdXInLFxyXG5dKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUmVjdGFuZ2xlU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgUmVjdGFuZ2xlU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuUmVjdGFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBSZWN0YW5nbGVTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5jb3JuZXJSYWRpdXMgPSBvcHRpb25zLmNvcm5lclJhZGl1cztcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5yb3VuZFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvcm5lclJhZGl1cyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblJlY3RhbmdsZVNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnYmx1ZScsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgY29ybmVyUmFkaXVzOiAwLFxyXG59O1xyXG5cclxuLy8gX2RlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFJlY3RhbmdsZVNoYXBlLCAnY29ybmVyUmFkaXVzJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNpcmNsZVNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIENpcmNsZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LkNpcmNsZVNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgQ2lyY2xlU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5jaXJjbGUoMCwgMCwgdGhpcy5yYWRpdXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5DaXJjbGVTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ3JlZCcsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgcmFkaXVzOiAzMixcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuVHJpYW5nbGVTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBUcmlhbmdsZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlRyaWFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBUcmlhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucG9seWdvbigwLCAwLCB0aGlzLnJhZGl1cywgMyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblRyaWFuZ2xlU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdncmVlbicsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlN0YXJTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBTdGFyU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuU3RhclNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgU3RhclNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgICB0aGlzLnNpZGVzID0gb3B0aW9ucy5zaWRlcztcclxuICAgIHRoaXMuc2lkZUluZGVudCA9IG9wdGlvbnMuc2lkZUluZGVudDtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5zdGFyKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnNpZGVzLCB0aGlzLnNpZGVJbmRlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5TdGFyU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICd5ZWxsb3cnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG5cclxuICByYWRpdXM6IDMyLFxyXG4gIHNpZGVzOiA1LFxyXG4gIHNpZGVJbmRlbnQ6IDAuMzgsXHJcbn07XHJcblxyXG4vLyBfZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoU3RhclNoYXBlLCAnc2lkZXMnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFN0YXJTaGFwZSwgJ3NpZGVJbmRlbnQnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUG9seWdvblNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFBvbHlnb25TaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5Qb2x5Z29uU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBQb2x5Z29uU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICAgIHRoaXMuc2lkZXMgPSBvcHRpb25zLnNpZGVzO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnBvbHlnb24oMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc2lkZXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5Qb2x5Z29uU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdjeWFuJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxuICBzaWRlczogNSxcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFBvbHlnb25TaGFwZSwgJ3NpZGVzJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkhlYXJ0U2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgSGVhcnRTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5IZWFydFNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgSGVhcnRTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gICAgdGhpcy5jb3JuZXJBbmdsZSA9IG9wdGlvbnMuY29ybmVyQW5nbGU7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuaGVhcnQoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuY29ybmVyQW5nbGUpO1xyXG4gIH1cclxuXHJcbn1cclxuLy8gc3RhdGljIHByb3BzXHJcbkhlYXJ0U2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdwaW5rJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxuICBjb3JuZXJBbmdsZTogNDUsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChIZWFydFNoYXBlLCAnY29ybmVyQW5nbGUnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUGF0aFNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFBhdGhTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuICAvLyBwYXRoczogbnVsbCxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5QYXRoU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBQYXRoU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5wYXRocyA9IG9wdGlvbnMucGF0aHMgfHwgW107XHJcbiAgICB0aGlzLmxpbmVKb2luID0gb3B0aW9ucy5saW5lSm9pbjtcclxuICAgIHRoaXMubGluZUNhcCA9IG9wdGlvbnMubGluZUNhcDtcclxuICB9XHJcblxyXG4gIHNldFBhdGhzIChwYXRocykge1xyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIgKCkge1xyXG4gICAgdGhpcy5wYXRocy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF0aHMgKHBhdGhzKSB7XHJcbiAgICBbXS5wdXNoLmFwcGx5KHRoaXMucGF0aHMsIHBhdGhzKTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZFBhdGggKHgsIHkpIHtcclxuICAgIHRoaXMucGF0aHMucHVzaChwaGluYS5nZW9tLlZlY3RvcjIoeCwgeSkpO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF0aCAoaSkge1xyXG4gICAgcmV0dXJuIHRoaXMucGF0aHNbaV07XHJcbiAgfVxyXG5cclxuICBnZXRQYXRocyAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXRocztcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhdGggKGksIHgsIHkpIHtcclxuICAgIHRoaXMucGF0aHNbaV0uc2V0KHgsIHkpO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1NpemUgKCkge1xyXG4gICAgdmFyIHBhdGhzID0gdGhpcy5wYXRocztcclxuICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogdGhpcy5wYWRkaW5nICogMixcclxuICAgICAgICBoZWlnaHQ6dGhpcy5wYWRkaW5nICogMixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHZhciBtYXhYID0gLUluZmluaXR5O1xyXG4gICAgdmFyIG1heFkgPSAtSW5maW5pdHk7XHJcbiAgICB2YXIgbWluWCA9IEluZmluaXR5O1xyXG4gICAgdmFyIG1pblkgPSBJbmZpbml0eTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0aHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgdmFyIHBhdGggPSBwYXRoc1tpXTtcclxuICAgICAgaWYgKG1heFggPCBwYXRoLngpIHsgbWF4WCA9IHBhdGgueDsgfVxyXG4gICAgICBpZiAobWluWCA+IHBhdGgueCkgeyBtaW5YID0gcGF0aC54OyB9XHJcbiAgICAgIGlmIChtYXhZIDwgcGF0aC55KSB7IG1heFkgPSBwYXRoLnk7IH1cclxuICAgICAgaWYgKG1pblkgPiBwYXRoLnkpIHsgbWluWSA9IHBhdGgueTsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IE1hdGgubWF4KE1hdGguYWJzKG1heFgpLCBNYXRoLmFicyhtaW5YKSkgKiAyICsgdGhpcy5wYWRkaW5nICogMixcclxuICAgICAgaGVpZ2h0OiBNYXRoLm1heChNYXRoLmFicyhtYXhZKSwgTWF0aC5hYnMobWluWSkpICogMiArIHRoaXMucGFkZGluZyAqIDIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGNDYW52YXNTaXplKCkud2lkdGg7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzSGVpZ2h0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhbGNDYW52YXNTaXplKCkuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyIChjYW52YXMpIHtcclxuICAgIHZhciBwYXRocyA9IHRoaXMucGF0aHM7XHJcbiAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xyXG4gICAgICB2YXIgYyA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgICB2YXIgcCA9IHBhdGhzWzBdO1xyXG4gICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICBjLm1vdmVUbyhwLngsIHAueSk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHAgPSBwYXRoc1tpXTtcclxuICAgICAgICBjLmxpbmVUbyhwLngsIHAueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuUGF0aFNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGZpbGw6IGZhbHNlLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5MYWJlbFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBMYWJlbCBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIG9wdGlvbnMgPSB7IHRleHQ6IGFyZ3VtZW50c1swXSwgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBvcHRpb25zID0gYXJndW1lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgTGFiZWwuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywgcGhpbmEuZGlzcGxheS5MYWJlbC5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemU7XHJcbiAgICB0aGlzLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHQ7XHJcbiAgICB0aGlzLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHk7XHJcbiAgICB0aGlzLmFsaWduID0gb3B0aW9ucy5hbGlnbjtcclxuICAgIHRoaXMuYmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xyXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoKCkge1xyXG4gICAgdmFyIHdpZHRoID0gMDtcclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcztcclxuICAgIGNhbnZhcy5jb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICB0aGlzLl9saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcclxuICAgICAgdmFyIHcgPSBjYW52YXMuY29udGV4dC5tZWFzdXJlVGV4dChsaW5lKS53aWR0aDtcclxuICAgICAgaWYgKHdpZHRoIDwgdykge1xyXG4gICAgICAgIHdpZHRoID0gdztcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgICBpZiAodGhpcy5hbGlnbiAhPT0gJ2NlbnRlcicpIHdpZHRoKj0yO1xyXG5cclxuICAgIHJldHVybiB3aWR0aCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCgpIHtcclxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmZvbnRTaXplICogdGhpcy5fbGluZXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuYmFzZWxpbmUgIT09ICdtaWRkbGUnKSBoZWlnaHQqPTI7XHJcbiAgICByZXR1cm4gaGVpZ2h0KnRoaXMubGluZUhlaWdodCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuZm9udCA9IHRoaXMuZm9udDtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gdGhpcy5hbGlnbjtcclxuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gdGhpcy5iYXNlbGluZTtcclxuXHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLl9saW5lcztcclxuICAgIHRoaXMubGluZVNpemUgPSB0aGlzLmZvbnRTaXplKnRoaXMubGluZUhlaWdodDtcclxuICAgIHRoaXMuX29mZnNldCA9IC1NYXRoLmZsb29yKGxpbmVzLmxlbmd0aC8yKSp0aGlzLmxpbmVTaXplO1xyXG4gICAgdGhpcy5fb2Zmc2V0ICs9ICgobGluZXMubGVuZ3RoKzEpJTIpICogKHRoaXMubGluZVNpemUvMik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHRoaXMuX2xpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIDAsIGkqdGhpcy5saW5lU2l6ZSt0aGlzLl9vZmZzZXQpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgdGhpcy5fbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlVGV4dChsaW5lLCAwLCBpKnRoaXMubGluZVNpemUrdGhpcy5fb2Zmc2V0KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGV4dFxyXG4gICAqL1xyXG4gIGdldCB0ZXh0KCkgeyByZXR1cm4gdGhpcy5fdGV4dDsgfVxyXG4gIHNldCB0ZXh0KHYpIHtcclxuICAgIHRoaXMuX3RleHQgPSB2O1xyXG4gICAgdGhpcy5fbGluZXMgPSAodGhpcy50ZXh0ICsgJycpLnNwbGl0KCdcXG4nKTtcclxuICB9XHJcblxyXG4gIGdldCBmb250KCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwie2ZvbnRXZWlnaHR9IHtmb250U2l6ZX1weCB7Zm9udEZhbWlseX1cIiwgdGhpcyk7XHJcbiAgICAvLyByZXR1cm4gXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLmZvcm1hdCh0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuTGFiZWwuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG5cclxuICBmaWxsOiAnYmxhY2snLFxyXG4gIHN0cm9rZTogbnVsbCxcclxuICBzdHJva2VXaWR0aDogMixcclxuXHJcbiAgLy8gXHJcbiAgdGV4dDogJ0hlbGxvLCB3b3JsZCEnLFxyXG4gIC8vIFxyXG4gIGZvbnRTaXplOiAzMixcclxuICBmb250V2VpZ2h0OiAnJyxcclxuICBmb250RmFtaWx5OiBcIidIaXJhS2FrdVByb04tVzMnXCIsIC8vIEhpcmFnaW5vIG9yIEhlbHZldGljYSxcclxuICAvLyBcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgYmFzZWxpbmU6ICdtaWRkbGUnLFxyXG4gIGxpbmVIZWlnaHQ6IDEuMixcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAndGV4dCcpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdmb250U2l6ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdmb250V2VpZ2h0Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2ZvbnRGYW1pbHknKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnYWxpZ24nKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnYmFzZWxpbmUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnbGluZUhlaWdodCcpO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuRnJhbWVBbmltYXRpb25cclxuICogRnJhbWVBbmltYXRpb25cclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgRnJhbWVBbmltYXRpb24gZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnNzID0gQXNzZXRNYW5hZ2VyLmdldCgnc3ByaXRlc2hlZXQnLCBzcyk7XHJcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmZpdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybiA7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudEFuaW1hdGlvbikgcmV0dXJuIDtcclxuXHJcbiAgICBpZiAodGhpcy5maW5pc2hlZCkge1xyXG4gICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG5cclxuICAgICsrdGhpcy5mcmFtZTtcclxuICAgIGlmICh0aGlzLmZyYW1lJXRoaXMuY3VycmVudEFuaW1hdGlvbi5mcmVxdWVuY3kgPT09IDApIHtcclxuICAgICAgKyt0aGlzLmN1cnJlbnRGcmFtZUluZGV4O1xyXG4gICAgICB0aGlzLl91cGRhdGVGcmFtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ290b0FuZFBsYXkobmFtZSwga2VlcCkge1xyXG4gICAga2VlcCA9IChrZWVwICE9PSB1bmRlZmluZWQpID8ga2VlcCA6IHRydWU7XHJcbiAgICBpZiAoa2VlcCAmJiBuYW1lID09PSB0aGlzLmN1cnJlbnRBbmltYXRpb25OYW1lXHJcbiAgICAgICAgICAgICAmJiB0aGlzLmN1cnJlbnRGcmFtZUluZGV4IDwgdGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgICYmICF0aGlzLnBhdXNlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuc3MuZ2V0QW5pbWF0aW9uKG5hbWUpO1xyXG4gICAgdGhpcy5fdXBkYXRlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ290b0FuZFN0b3AobmFtZSkge1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5zcy5nZXRBbmltYXRpb24obmFtZSk7XHJcbiAgICB0aGlzLl91cGRhdGVGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF91cGRhdGVGcmFtZSgpIHtcclxuICAgIHZhciBhbmltID0gdGhpcy5jdXJyZW50QW5pbWF0aW9uO1xyXG4gICAgaWYgKGFuaW0pIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudEZyYW1lSW5kZXggPj0gYW5pbS5mcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGFuaW0ubmV4dCkge1xyXG4gICAgICAgICAgdGhpcy5nb3RvQW5kUGxheShhbmltLm5leHQpO1xyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gYW5pbS5mcmFtZXNbdGhpcy5jdXJyZW50RnJhbWVJbmRleF07XHJcbiAgICB2YXIgZnJhbWUgPSB0aGlzLnNzLmdldEZyYW1lKGluZGV4KTtcclxuICAgIHRoaXMudGFyZ2V0LnNyY1JlY3Quc2V0KGZyYW1lLngsIGZyYW1lLnksIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmZpdCkge1xyXG4gICAgICB0aGlzLnRhcmdldC53aWR0aCA9IGZyYW1lLndpZHRoO1xyXG4gICAgICB0aGlzLnRhcmdldC5oZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuRHJhZ2dhYmxlXHJcbiAqIERyYWdnYWJsZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLm9uKCdhdHRhY2hlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoRHJhZ2dhYmxlLl9sb2NrKSByZXR1cm4gO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgc2VsZi5pbml0aWFsUG9zaXRpb24ueCA9IHRoaXMueDtcclxuICAgICAgICBzZWxmLmluaXRpYWxQb3NpdGlvbi55ID0gdGhpcy55O1xyXG4gICAgICAgIHNlbGYuZmxhcmUoJ2RyYWdzdGFydCcpO1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2RyYWdzdGFydCcpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50bW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSByZXR1cm4gO1xyXG5cclxuICAgICAgICB0aGlzLnggKz0gZS5wb2ludGVyLmR4O1xyXG4gICAgICAgIHRoaXMueSArPSBlLnBvaW50ZXIuZHk7XHJcbiAgICAgICAgc2VsZi5mbGFyZSgnZHJhZycpO1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2RyYWcnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRlbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBzZWxmLmZsYXJlKCdkcmFnZW5kJyk7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZHJhZ2VuZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmFjayh0aW1lLCBlYXNpbmcpIHtcclxuICAgIGlmICh0aW1lKSB7XHJcbiAgICAgIHZhciB0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgIHQuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG4gICAgICB2YXIgdHdlZW5lciA9IG5ldyBUd2VlbmVyKCkuYXR0YWNoVG8odCk7XHJcbiAgICAgIHR3ZWVuZXJcclxuICAgICAgICAudG8oe1xyXG4gICAgICAgICAgeDogdGhpcy5pbml0aWFsUG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6IHRoaXMuaW5pdGlhbFBvc2l0aW9uLnksXHJcbiAgICAgICAgfSwgdGltZSwgZWFzaW5nIHx8ICdlYXNlT3V0RWxhc3RpYycpXHJcbiAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0d2VlbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgIHQuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLmZsYXJlKCdiYWNrZW5kJyk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy50YXJnZXQueCA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLng7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnkgPSB0aGlzLmluaXRpYWxQb3NpdGlvbi55O1xyXG4gICAgICB0aGlzLmZsYXJlKCdiYWNrZW5kJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvY2soKSB7XHJcbiAgICB0aGlzLl9sb2NrID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1bmxvY2soKSB7XHJcbiAgICB0aGlzLl9sb2NrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRHJhZ2dhYmxlLl9sb2NrID0gZmFsc2U7XHJcblxyXG4vLyDlkbzjgbPlh7rjgZfjgafmi6HlvLXjgZnjgovvvJ8gVHdlZW5lcuOBr0VsZW1lbnTlgbTjgaflrprnvqlcclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcignZHJhZ2dhYmxlJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl9kcmFnZ2FibGUpIHtcclxuLy8gICAgIHRoaXMuX2RyYWdnYWJsZSA9IHBoaW5hLmFjY2Vzc29yeS5EcmFnZ2FibGUoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX2RyYWdnYWJsZTtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5GbGlja2FibGVcclxuICogRmxpY2thYmxlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIEZsaWNrYWJsZSBleHRlbmRzIEFjY2Vzc29yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIodGFyZ2V0KTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jYWNoZUxpc3QgPSBbXTtcclxuXHJcbiAgICB0aGlzLm9uKCdhdHRhY2hlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHNlbGYuaW5pdGlhbFBvc2l0aW9uLnNldCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgc2VsZi52ZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRzdGF5JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmhvcml6b250YWwpIHtcclxuICAgICAgICAgIHRoaXMueCArPSBlLnBvaW50ZXIuZHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICB0aGlzLnkgKz0gZS5wb2ludGVyLmR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuY2FjaGVMaXN0Lmxlbmd0aCA+IDMpIHNlbGYuY2FjaGVMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgc2VsZi5jYWNoZUxpc3QucHVzaChlLnBvaW50ZXIuZGVsdGFQb3NpdGlvbi5jbG9uZSgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRlbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8g5YuV44GN44Gu44GC44KLIGRlbHRhIHBvc2l0aW9uIOOCkuW+jOOCjeOBi+OCieaknOe0ouOAgFxyXG4gICAgICAgIHZhciBkZWx0YSA9IHNlbGYuY2FjaGVMaXN0LnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHJldHVybiB2Lmxlbmd0aFNxdWFyZWQoKSA+IDEwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsZWFyLmNhbGwoc2VsZi5jYWNoZUxpc3QpO1xyXG4gICAgICAgIC8vIHNlbGYuY2FjaGVMaXN0LmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmIChkZWx0YSkge1xyXG4gICAgICAgICAgc2VsZi52ZWxvY2l0eS54ID0gZGVsdGEueDtcclxuICAgICAgICAgIHNlbGYudmVsb2NpdHkueSA9IGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnZmxpY2tzdGFydCcsIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkZWx0YS5ub3JtYWxpemUoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2ZsaWNrY2FuY2VsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZWxmLmZsYXJlKCdmbGljaycpO1xyXG4gICAgICAgIC8vIHNlbGYuZmxhcmUoJ2ZsaWNrZW5kJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuZnJpY3Rpb247XHJcblxyXG4gICAgaWYgKHRoaXMuaG9yaXpvbnRhbCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy50YXJnZXQueCA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLng7XHJcbiAgICB0aGlzLnRhcmdldC55ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueTtcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0KDAsIDApO1xyXG5cclxuICAgIC8vIFRPRE86IFxyXG4gICAgLy8gdGhpcy5zZXRJbnRlcmFjdGl2ZShmYWxzZSk7XHJcbiAgICAvLyB0aGlzLnR3ZWVuZXIuY2xlYXIoKVxyXG4gICAgLy8gICAgIC5tb3ZlKHRoaXMuaW5pdGlhbFgsIHRoaXMuaW5pdGlhbFksIDUwMCwgXCJlYXNlT3V0RWxhc3RpY1wiKVxyXG4gICAgLy8gICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5maXJlKHRtLmV2ZW50LkV2ZW50KFwiYmFja2VuZFwiKSk7XHJcbiAgICAvLyAgICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gVE9ETzogRWxlbWVudOWBtOOBp+WRvOOBtu+8n1xyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCdmbGlja2FibGUnLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX2ZsaWNrYWJsZSkge1xyXG4vLyAgICAgdGhpcy5fZmxpY2thYmxlID0gcGhpbmEuYWNjZXNzb3J5LkZsaWNrYWJsZSgpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fZmxpY2thYmxlO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LlBoeXNpY2FsXHJcbiAqIOacrOeJqeOBp+OBr+OBquOBhOOBruOBp+WQjeWJjeWkieOBiOOCi+OBi+OCglxyXG4gKiBGYWtlUGh5c2ljYWwgb3IgTWFyaW9QaHlzaWNhbCBvciBMaWVQaHlzaWNhbFxyXG4gKiBSZXRyb1B5c2ljYWwgb3IgUHlzaWNhTGlrZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBQaHlzaWNhbCBleHRlbmRzIEFjY2Vzc29yeSAge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdGhpcy5mcmljdGlvbiA9IDEuMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHZhciB0ID0gdGhpcy50YXJnZXQ7XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuZnJpY3Rpb247XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5mcmljdGlvbjtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5ncmF2aXR5Lng7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5Lnk7XHJcblxyXG4gICAgdC5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgIHQucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgfVxyXG5cclxuICBmb3JjZSh4LCB5KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldCh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkRm9yY2UoeCwgeSkge1xyXG4gICAgdGhpcy52ZWxvY2l0eS54ICs9IHg7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0R3Jhdml0eSh4LCB5KSB7XHJcbiAgICB0aGlzLmdyYXZpdHkuc2V0KHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRGcmljdGlvbihmcikge1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IGZyO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCdwaHlzaWNhbCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmICghdGhpcy5fcGh5c2ljYWwpIHtcclxuLy8gICAgIHRoaXMuX3BoeXNpY2FsID0gcGhpbmEuYWNjZXNzb3J5LlBoeXNpY2FsKCkuYXR0YWNoVG8odGhpcyk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0aGlzLl9waHlzaWNhbDtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBBc3NldCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIHNlcnZlckVycm9yOiBmYWxzZSxcclxuICAvLyBub3RGb3VuZDogZmFsc2UsXHJcbiAgLy8gbG9hZEVycm9yOiBmYWxzZSxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3JjKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlcnZlckVycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLmxvYWRFcnJvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9hZChzcmMpIHtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgcmV0dXJuIG5ldyBGbG93KHRoaXMuX2xvYWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBpc0xvYWRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRlZDtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIC8vIOODreODvOODieWkseaVl+aZguOBq+ODgOODn+ODvOOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gIGxvYWREdW1teSgpIHsgfVxyXG5cclxufVxyXG5cclxudmFyIGdldEZpcnN0ID0gZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGZpcnN0LmdldC5jYWxsKGFycmF5KTsgfTtcclxudmFyIGdldExhc3QgPSBmdW5jdGlvbihhcnJheSkgeyByZXR1cm4gbGFzdC5nZXQuY2FsbChhcnJheSk7IH07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlRleHR1cmVcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFRleHR1cmUgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIHZhciBpc0xvY2FsID0gKGxvY2F0aW9uLnByb3RvY29sID09ICdmaWxlOicpO1xyXG4gICAgaWYgKCAhaXNMb2NhbCAmJiAhKC9eZGF0YTovLnRlc3QodGhpcy5zcmMpKSApIDtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kb21FbGVtZW50Lm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0LmNhbGwoXCJbcGhpbmEuanNdIG5vdCBmb3VuZCBgezB9YCFcIiwgdGhpcy5zcmMpKTtcclxuICAgICAgLy8gY29uc29sZS5lcnJvcihcIltwaGluYS5qc10gbm90IGZvdW5kIGB7MH1gIVwiLmZvcm1hdCh0aGlzLnNyYykpO1xyXG5cclxuICAgICAgLy8gdmFyIGtleSA9IHNlbGYuc3JjLnNwbGl0KCcvJykubGFzdC5yZXBsYWNlKCcucG5nJywgJycpLnNwbGl0KCc/JykuZmlyc3Quc3BsaXQoJyMnKS5maXJzdDtcclxuICAgICAgdmFyIGtleSA9IGdldEZpcnN0KFxyXG4gICAgICAgIGdldEZpcnN0KFxyXG4gICAgICAgICAgZ2V0TGFzdChcclxuICAgICAgICAgICAgc2VsZi5zcmMuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgKS5yZXBsYWNlKCcucG5nJywgJycpLnNwbGl0KCc/JylcclxuICAgICAgICApLnNwbGl0KCcjJylcclxuICAgICAgKTtcclxuICAgICAgZS50YXJnZXQub25lcnJvciA9IG51bGw7XHJcbiAgICAgIGUudGFyZ2V0LnNyYyA9IFwiaHR0cDovL2R1bW15aW1hZ2UuY29tLzEyOHgxMjgvNDQ0NDQ0L2VlZWVlZSZ0ZXh0PVwiICsga2V5O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCkuc2V0U2l6ZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgIHZhciB0ID0gbmV3IFRleHR1cmUoKTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICB0LmRvbUVsZW1lbnQgPSBjYW52YXMuZG9tRWxlbWVudDtcclxuICAgIHJldHVybiB0O1xyXG4gIH1cclxuXHJcbiAgdHJhbnNtaXQoY29sb3IpIHtcclxuICAgIC8vIGltYWdh44Kq44OW44K444Kn44Kv44OI44KS44Ky44OD44OIXHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICAvLyDmlrDopo9jYW52YXPkvZzmiJBcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCkuc2V0U2l6ZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgIC8vIOaWsOimj2NhbnZhc+OBq+aPj+eUu1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIC8vIGNhbnZhc+WFqOS9k+OBruOCpOODoeODvOOCuOODh+ODvOOCv+mFjeWIl+OCkuOCsuODg+ODiFxyXG4gICAgdmFyIGltYWdlRGF0YSA9IGNhbnZhcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdmFyIGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgIC8vIOmAj+mBjuiJsuOBruaMh+WumuOBjOOBquOBkeOCjOOBsOW3puS4iuOBrnJnYuWApOOCkuaKveWHulxyXG4gICAgdmFyIHIgPSAoY29sb3IgIT09IHVuZGVmaW5lZCkgPyBjb2xvci5yIDogZGF0YVswXTtcclxuICAgIHZhciBnID0gKGNvbG9yICE9PSB1bmRlZmluZWQpID8gY29sb3IuZyA6IGRhdGFbMV07XHJcbiAgICB2YXIgYiA9IChjb2xvciAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yLmIgOiBkYXRhWzJdO1xyXG4gICAgLy8g6YWN5YiX44KSNOimgee0oOebruOBi+OCiTTjgaTpo5vjgbPvvIjjgqLjg6vjg5XjgqHlgKTvvInjgafjg6vjg7zjg5dcclxuICAgIC8vICgzKS5zdGVwKGRhdGEubGVuZ3RoLCA0LCBmdW5jdGlvbihpKSB7XHJcbiAgICBzdGVwLmNhbGwoMywgZGF0YS5sZW5ndGgsIDQsIGZ1bmN0aW9uKGkpIHtcclxuICAgICAgLy8gcmdi5YCk44KS6YCG566X44Gn44Ky44OD44OI44GX44CB5bem5LiK44Gucmdi44Go5q+U6LyDXHJcbiAgICAgIGlmIChkYXRhW2kgLSAzXSA9PT0gciAmJiBkYXRhW2kgLSAyXSA9PT0gZyAmJiBkYXRhW2kgLSAxXSA9PT0gYikge1xyXG4gICAgICAgIC8vIOS4gOiHtOOBl+OBn+WgtOWQiOOBr+OCouODq+ODleOCoeWApOOCkuabuOOBjeaPm+OBiOOCi1xyXG4gICAgICAgIGRhdGFbaV0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOabuOOBjeaPm+OBiOOBn+OCpOODoeODvOOCuOODh+ODvOOCv+OCkmNhbnZhc+OBq+aIu+OBmVxyXG4gICAgY2FudmFzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXIoZmlsdGVycykge1xyXG4gICAgaWYgKCFmaWx0ZXJzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbHRlcnMpKSB7XHJcbiAgICAgIGZpbHRlcnMgPSBbZmlsdGVyc107XHJcbiAgICB9XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgdyA9IGltYWdlLndpZHRoO1xyXG4gICAgdmFyIGggPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpLnNldFNpemUodywgaCk7XHJcbiAgICB2YXIgaW1hZ2VEYXRhID0gbnVsbDtcclxuXHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgaW1hZ2VEYXRhID0gY2FudmFzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpO1xyXG4gICAgZmlsdGVycy5mb3JFYWNoKCBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgaWYgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gaC50aW1lcyggZnVuY3Rpb24gKHkpIHtcclxuICAgICAgICB0aW1lcy5jYWxsKGgsIGZ1bmN0aW9uICh5KSB7XHJcbiAgICAgICAgICAvLyB3LnRpbWVzKCBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgdGltZXModywgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAoeSAqIHcgKyB4KSAqIDQ7XHJcbiAgICAgICAgICAgIHZhciBwaXhlbCA9IGltYWdlRGF0YS5kYXRhLnNsaWNlKGksIGkgKyA0KTtcclxuICAgICAgICAgICAgZm4ocGl4ZWwsIGksIHgsIHksIGltYWdlRGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjYW52YXMuY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGNhbnZhcy5kb21FbGVtZW50O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Tb3VuZFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgU291bmQgZXh0ZW5kcyBBc3NldCB7XHJcbiAgXHJcbiAgLy8gX2xvb3A6IGZhbHNlLFxyXG4gIC8vIF9sb29wU3RhcnQ6IDAsXHJcbiAgLy8gX2xvb3BFbmQ6IDAsXHJcbiAgLy8gX3BsYXliYWNrUmF0ZTogMSxcclxuICBcclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sb29wU3RhcnQgPSAwO1xyXG4gICAgdGhpcy5fbG9vcEVuZCA9IDA7XHJcbiAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSAxO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gU291bmQuZ2V0QXVkaW9Db250ZXh0KCk7XHJcbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICB9XHJcblxyXG4gIHBsYXkod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgd2hlbiA9IHdoZW4gPyB3aGVuICsgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lIDogMDtcclxuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSkgO1xyXG5cclxuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZSA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgIHZhciBidWZmZXIgPSBzb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XHJcbiAgICBzb3VyY2UubG9vcCA9IHRoaXMuX2xvb3A7XHJcbiAgICBzb3VyY2UubG9vcFN0YXJ0ID0gdGhpcy5fbG9vcFN0YXJ0O1xyXG4gICAgc291cmNlLmxvb3BFbmQgPSB0aGlzLl9sb29wRW5kO1xyXG4gICAgc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHRoaXMuX3BsYXliYWNrUmF0ZTtcclxuXHJcbiAgICAvLyBjb25uZWN0XHJcbiAgICBzb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcclxuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdChTb3VuZC5nZXRNYXN0ZXJHYWluKCkpO1xyXG4gICAgLy8gcGxheVxyXG4gICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc291cmNlLnN0YXJ0KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNvdXJjZS5zdGFydCh3aGVuLCBvZmZzZXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBjaGVjayBwbGF5IGVuZFxyXG4gICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5mbGFyZSgnZW5kZWQnKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgLy8gc3RvcFxyXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgIC8vIHN0b3Ag44GZ44KL44GoIHNvdXJjZS5lbmRlZOOCgueZuueBq+OBmeOCi1xyXG4gICAgICB0aGlzLnNvdXJjZS5zdG9wICYmIHRoaXMuc291cmNlLnN0b3AoMCk7XHJcbiAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcclxuICAgICAgdGhpcy5mbGFyZSgnc3RvcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLnNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSAwO1xyXG4gICAgdGhpcy5mbGFyZSgncGF1c2UnKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgdGhpcy5mbGFyZSgncmVzdW1lJyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIOippuOBl+OBpuOBv+OCi+OBquOBhlxyXG4gIF9vc2NpbGxhdG9yKHR5cGUpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIHZhciBvc2NpbGxhdG9yID0gY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XHJcblxyXG4gICAgLy8gU2luZSB3YXZlIGlzIHR5cGUgPSDigJxzaW5l4oCdXHJcbiAgICAvLyBTcXVhcmUgd2F2ZSBpcyB0eXBlID0g4oCcc3F1YXJl4oCdXHJcbiAgICAvLyBTYXd0b290aCB3YXZlIGlzIHR5cGUgPSDigJxzYXfigJ1cclxuICAgIC8vIFRyaWFuZ2xlIHdhdmUgaXMgdHlwZSA9IOKAnHRyaWFuZ2xl4oCdXHJcbiAgICAvLyBDdXN0b20gd2F2ZSBpcyB0eXBlID0g4oCcY3VzdG9t4oCdIFxyXG4gICAgb3NjaWxsYXRvci50eXBlID0gdHlwZSB8fCAnc2luZSc7XHJcblxyXG4gICAgdGhpcy5zb3VyY2UgPSBvc2NpbGxhdG9yO1xyXG4gICAgLy8gY29ubmVjdFxyXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGxvYWRGcm9tQnVmZmVyKGJ1ZmZlcikge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgLy8gc2V0IGRlZmF1bHQgYnVmZmVyXHJcbiAgICBpZiAoIWJ1ZmZlcikge1xyXG4gICAgICBidWZmZXIgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlciggMSwgNDQxMDAsIDQ0MTAwICk7XHJcbiAgICAgIHZhciBjaGFubmVsID0gYnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgY2hhbm5lbC5sZW5ndGg7IGkrKyApXHJcbiAgICAgIHtcclxuICAgICAgICBjaGFubmVsW2ldID0gTWF0aC5zaW4oIGkgLyAxMDAgKiBNYXRoLlBJKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvdXJjZVxyXG4gICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XHJcbiAgfVxyXG5cclxuICBzZXRMb29wKGxvb3ApIHtcclxuICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldExvb3BTdGFydChsb29wU3RhcnQpIHtcclxuICAgIHRoaXMubG9vcFN0YXJ0ID0gbG9vcFN0YXJ0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRMb29wRW5kKGxvb3BFbmQpIHtcclxuICAgIHRoaXMubG9vcEVuZCA9IGxvb3BFbmQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgc2V0UGxheWJhY2tSYXRlKHBsYXliYWNrUmF0ZSkge1xyXG4gICAgdGhpcy5wbGF5YmFja1JhdGUgPSBwbGF5YmFja1JhdGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9sb2FkKHIpIHtcclxuICAgIGlmICgvXmRhdGE6Ly50ZXN0KHRoaXMuc3JjKSkge1xyXG4gICAgICB0aGlzLl9sb2FkRnJvbVVSSVNjaGVtZShyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2FkRnJvbUZpbGUocik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9hZEZyb21GaWxlKHIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4bWwub3BlbignR0VUJywgdGhpcy5zcmMpO1xyXG4gICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICBpZiAoWzIwMCwgMjAxLCAwXS5pbmRleE9mKHhtbC5zdGF0dXMpICE9PSAtMSkge1xyXG5cclxuICAgICAgICAgIC8vIOmfs+alveODkOOCpOODiuODquODvOODh+ODvOOCv1xyXG4gICAgICAgICAgdmFyIGRhdGEgPSB4bWwucmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgLy8gd2ViYXVkaW8g55So44Gr5aSJ5o+bXHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGRhdGEsIGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICBzZWxmLmxvYWRGcm9tQnVmZmVyKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHIoc2VsZik7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z+z5aOw44OV44Kh44Kk44Or44Gu44OH44Kz44O844OJ44Gr5aSx5pWX44GX44G+44GX44Gf44CCKFwiICsgc2VsZi5zcmMgKyBcIilcIik7XHJcbiAgICAgICAgICAgIHIoc2VsZik7XHJcbiAgICAgICAgICAgIHNlbGYuZmxhcmUoJ2RlY29kZWVycm9yJyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh4bWwuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIC8vIG5vdCBmb3VuZFxyXG5cclxuICAgICAgICAgIHNlbGYubG9hZEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgIHNlbGYubm90Rm91bmQ9IHRydWU7XHJcbiAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnbG9hZGVycm9yJyk7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdub3Rmb3VuZCcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g44K144O844OQ44O844Ko44Op44O8XHJcblxyXG4gICAgICAgICAgc2VsZi5sb2FkRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgc2VsZi5zZXJ2ZXJFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnbG9hZGVycm9yJyk7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdzZXJ2ZXJlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB4bWwucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuXHJcbiAgICB4bWwuc2VuZChudWxsKTtcclxuICB9XHJcblxyXG4gIF9sb2FkRnJvbVVSSVNjaGVtZShyKSB7XHJcbiAgICB2YXIgYnl0ZVN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMuc3JjLnNwbGl0KCcsJylbMF0uaW5kZXhPZignYmFzZTY0JykgPj0gMCkge1xyXG4gICAgICBieXRlU3RyaW5nID0gYXRvYih0aGlzLnNyYy5zcGxpdCgnLCcpWzFdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBieXRlU3RyaW5nID0gdW5lc2NhcGUodGhpcy5zcmMuc3BsaXQoJywnKVsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGxlbiA9IGJ5dGVTdHJpbmcubGVuZ3RoO1xyXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcblxyXG4gICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgIGJ1ZmZlcltpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZWJhdWRpbyDnlKjjgavlpInmj5tcclxuICAgIHRoaXMuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyLmJ1ZmZlciwgZnVuY3Rpb24oYnVmZmVyKSB7XHJcbiAgICAgIHNlbGYubG9hZEZyb21CdWZmZXIoYnVmZmVyKTtcclxuICAgICAgcihzZWxmKTtcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCLpn7Plo7Djg5XjgqHjgqTjg6vjga7jg4fjgrPjg7zjg4njgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIIoXCIgKyBzZWxmLnNyYyArIFwiKVwiKTtcclxuICAgICAgc2VsZi5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICByKHNlbGYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRHVtbXkoKSB7XHJcbiAgICB0aGlzLmxvYWRGcm9tQnVmZmVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdm9sdW1lKCkgIHsgcmV0dXJuIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZTsgfVxyXG4gIHNldCB2b2x1bWUodikgeyB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB2OyB9XHJcblxyXG4gIGdldCBsb29wKCkgIHsgcmV0dXJuIHRoaXMuX2xvb3A7IH1cclxuICBzZXQgbG9vcCh2KSB7XHJcbiAgICB0aGlzLl9sb29wID0gdjtcclxuICAgIGlmICh0aGlzLnNvdXJjZSkgdGhpcy5zb3VyY2UuX2xvb3AgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvb3BTdGFydCgpICB7IHJldHVybiB0aGlzLl9sb29wU3RhcnQ7IH1cclxuICBzZXQgbG9vcFN0YXJ0KHYpIHtcclxuICAgIHRoaXMuX2xvb3BTdGFydCA9IHY7XHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIHRoaXMuc291cmNlLl9sb29wU3RhcnQgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvb3BFbmQoKSAgeyByZXR1cm4gdGhpcy5fbG9vcEVuZDsgfVxyXG4gIHNldCBsb29wRW5kKHYpIHtcclxuICAgIHRoaXMuX2xvb3BFbmQgPSB2O1xyXG4gICAgaWYgKHRoaXMuc291cmNlKSB0aGlzLnNvdXJjZS5fbG9vcEVuZCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWJhY2tSYXRlKCkgeyByZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlOyB9XHJcbiAgc2V0IHBsYXliYWNrUmF0ZSh2KSB7XHJcbiAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSB2O1xyXG4gICAgaWYodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlICE9PSAwKXtcclxuICAgICAgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gdjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRNYXN0ZXJHYWluKCkge1xyXG4gICAgaWYoIXRoaXMuX21hc3RlckdhaW4pIHtcclxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmdldEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICB0aGlzLl9tYXN0ZXJHYWluID0gY29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgICAgIHRoaXMuX21hc3RlckdhaW4uY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJHYWluO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEF1ZGlvQ29udGV4dCgpIHtcclxuICAgIGlmICghU3VwcG9ydC53ZWJBdWRpbykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dCkgcmV0dXJuIHRoaXMuY29udGV4dDtcclxuXHJcbiAgICB2YXIgZyA9IHBoaW5hJDEuZ2xvYmFsO1xyXG4gICAgdmFyIGNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIGlmIChnLkF1ZGlvQ29udGV4dCkge1xyXG4gICAgICBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZy53ZWJraXRBdWRpb0NvbnRleHQpIHtcclxuICAgICAgY29udGV4dCA9IG5ldyB3ZWJraXRBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGcubW96QXVkaW9Db250ZXh0KSB7XHJcbiAgICAgIGNvbnRleHQgPSBuZXcgbW96QXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHJcbiAgICByZXR1cm4gY29udGV4dDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBkZWZpbmVkXHJcbmFjY2Vzc29yLmNhbGwoU291bmQsICd2b2x1bWUnLCB7XHJcbi8vIHRoaXMuYWNjZXNzb3IoJ3ZvbHVtZScsIHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWFzdGVyR2FpbigpLmdhaW4udmFsdWU7XHJcbiAgfSxcclxuICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgIHRoaXMuZ2V0TWFzdGVyR2FpbigpLmdhaW4udmFsdWUgPSB2O1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5TY3JpcHRcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFNjcmlwdCBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlNwcml0ZVNoZWV0XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBTcHJpdGVTaGVldCBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAocGFyYW1zKSB7XHJcbiAgICB0aGlzLl9zZXR1cEZyYW1lKHBhcmFtcy5mcmFtZSk7XHJcbiAgICB0aGlzLl9zZXR1cEFuaW0ocGFyYW1zLmFuaW1hdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhciB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgeG1sLm9wZW4oJ0dFVCcsIHRoaXMuc3JjKTtcclxuICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4bWwuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB4bWwucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnNldHVwKGpzb24pO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB4bWwuc2VuZChudWxsKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNldHVwKHRoaXMuc3JjKTtcclxuICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBfc2V0dXBGcmFtZShmcmFtZSkge1xyXG4gICAgdmFyIGZyYW1lcyA9IHRoaXMuZnJhbWVzID0gW107XHJcbiAgICB2YXIgdW5pdFdpZHRoID0gZnJhbWUud2lkdGg7XHJcbiAgICB2YXIgdW5pdEhlaWdodCA9IGZyYW1lLmhlaWdodDtcclxuXHJcbiAgICB2YXIgY291bnQgPSBmcmFtZS5yb3dzICogZnJhbWUuY29scztcclxuICAgIHRoaXMuZnJhbWUgPSBjb3VudDtcclxuXHJcbiAgICB0aW1lcy5jYWxsKGNvdW50LCBmdW5jdGlvbihpKSB7XHJcbiAgICAvLyAoY291bnQpLnRpbWVzKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgdmFyIHhJbmRleCA9IGklZnJhbWUuY29scztcclxuICAgICAgdmFyIHlJbmRleCA9IChpL2ZyYW1lLmNvbHMpfDA7XHJcblxyXG4gICAgICBmcmFtZXMucHVzaCh7XHJcbiAgICAgICAgeDogeEluZGV4KnVuaXRXaWR0aCxcclxuICAgICAgICB5OiB5SW5kZXgqdW5pdEhlaWdodCxcclxuICAgICAgICB3aWR0aDogdW5pdFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdW5pdEhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXR1cEFuaW0oYW5pbWF0aW9ucykge1xyXG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XHJcblxyXG4gICAgLy8g44OH44OV44Kp44Or44OI44Ki44OL44Oh44O844K344On44OzXHJcbiAgICB0aGlzLmFuaW1hdGlvbnNbXCJkZWZhdWx0XCJdID0ge1xyXG4gICAgICAgIGZyYW1lczogcmFuZ2UuY2FsbChbXSwgMCwgdGhpcy5mcmFtZSksXHJcbiAgICAgICAgLy8gZnJhbWVzOiBbXS5yYW5nZSgwLCB0aGlzLmZyYW1lKSxcclxuICAgICAgICBuZXh0OiBcImRlZmF1bHRcIixcclxuICAgICAgICBmcmVxdWVuY3k6IDEsXHJcbiAgICB9O1xyXG5cclxuICAgIGZvckluLmNhbGwoYW5pbWF0aW9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gYW5pbWF0aW9ucy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciBhbmltID0gdmFsdWU7XHJcblxyXG4gICAgICBpZiAoYW5pbSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW2tleV0gPSB7XHJcbiAgICAgICAgICBmcmFtZXM6IHJhbmdlLmNhbGwoW10sIGFuaW1bMF0sIGFuaW1bMV0pLFxyXG4gICAgICAgICAgLy8gZnJhbWVzOiBbXS5yYW5nZShhbmltWzBdLCBhbmltWzFdKSxcclxuICAgICAgICAgIG5leHQ6IGFuaW1bMl0sXHJcbiAgICAgICAgICBmcmVxdWVuY3k6IGFuaW1bM10gfHwgMSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1trZXldID0ge1xyXG4gICAgICAgICAgZnJhbWVzOiBhbmltLmZyYW1lcyxcclxuICAgICAgICAgIG5leHQ6IGFuaW0ubmV4dCxcclxuICAgICAgICAgIGZyZXF1ZW5jeTogYW5pbS5mcmVxdWVuY3kgfHwgMVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODleODrOODvOODoOOCkuWPluW+l1xyXG4gICAqL1xyXG4gIGdldEZyYW1lKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5mcmFtZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5pbWF0aW9uKG5hbWUpIHtcclxuICAgIG5hbWUgPSAobmFtZSAhPT0gdW5kZWZpbmVkKSA/IG5hbWUgOiBcImRlZmF1bHRcIjtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbnNbbmFtZV07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Gb250XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBGb250IGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmZvbnROYW1lID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGxvYWQocGF0aCkge1xyXG4gICAgdGhpcy5zcmMgPSBwYXRoO1xyXG5cclxuICAgIHZhciByZWcgPSAvKC4qKSg/OlxcLihbXi5dKyQpKS87XHJcbiAgICB2YXIga2V5ID0gdGhpcy5mb250TmFtZSB8fCBsYXN0LmNhbGwocGF0aC5tYXRjaChyZWcpWzFdLnNwbGl0KCcvJykpOyAgICAvL+ODleOCqeODs+ODiOWQjeaMh+WumuOBjOeEoeOBhOWgtOWQiOOBr3BhdGjjga7mi6HlvLXlrZDliY3jgpLkvb/nlKhcclxuICAgIC8vIHZhciBrZXkgPSB0aGlzLmZvbnROYW1lIHx8IHBhdGgubWF0Y2gocmVnKVsxXS5zcGxpdCgnLycpLmxhc3Q7ICAgIC8v44OV44Kp44Oz44OI5ZCN5oyH5a6a44GM54Sh44GE5aC05ZCI44GvcGF0aOOBruaLoeW8teWtkOWJjeOCkuS9v+eUqFxyXG4gICAgdmFyIHR5cGUgPSBwYXRoLm1hdGNoKHJlZylbMl07XHJcbiAgICB2YXIgZm9ybWF0JDEgPSBcInVua25vd25cIjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwidHRmXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcInRydWV0eXBlXCI7IGJyZWFrO1xyXG4gICAgICBjYXNlIFwib3RmXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcIm9wZW50eXBlXCI7IGJyZWFrO1xyXG4gICAgICBjYXNlIFwid29mZlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJ3b2ZmXCI7IGJyZWFrO1xyXG4gICAgICBjYXNlIFwid29mZjJcIjpcclxuICAgICAgICBmb3JtYXQkMSA9IFwid29mZjJcIjsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi44K144Od44O844OI44GX44Gm44GE44Gq44GE44OV44Kp44Oz44OI5b2i5byP44Gn44GZ44CCKFwiICsgcGF0aCArIFwiKVwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0JDE7XHJcbiAgICB0aGlzLmZvbnROYW1lID0ga2V5O1xyXG5cclxuICAgIGlmIChmb3JtYXQkMSAhPT0gXCJ1bmtub3duXCIpIHtcclxuICAgICAgdmFyIHRleHQgPSBmb3JtYXQuY2FsbChcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ3swfSc7IHNyYzogdXJsKHsxfSkgZm9ybWF0KCd7Mn0nKTsgfVwiLCBrZXksIHBhdGgsIGZvcm1hdCQxKTtcclxuICAgICAgLy8gdmFyIHRleHQgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ3swfSc7IHNyYzogdXJsKHsxfSkgZm9ybWF0KCd7Mn0nKTsgfVwiLmZvcm1hdChrZXksIHBhdGgsIGZvcm1hdCk7XHJcbiAgICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XHJcbiAgICAgIHZhciBmb250RmFjZVN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgaWYgKGZvbnRGYWNlU3R5bGVFbGVtZW50LmlubmVyVGV4dCkge1xyXG4gICAgICAgIGZvbnRGYWNlU3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9udEZhY2VTdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIGUuYXBwZW5kQ2hpbGQoZm9udEZhY2VTdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRmxvdyh0aGlzLl9sb2FkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0ICE9PSBcInVua25vd25cIikge1xyXG4gICAgICB0aGlzLl9jaGVja0xvYWRlZCh0aGlzLmZvbnROYW1lLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja0xvYWRlZCAoZm9udCwgY2FsbGJhY2spIHtcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB2YXIgREVGQVVMVF9GT05UID0gY2FudmFzLmNvbnRleHQuZm9udC5zcGxpdCgnICcpWzFdO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZm9udCA9ICc0MHB4ICcgKyBERUZBVUxUX0ZPTlQ7XHJcblxyXG4gICAgdmFyIGNoZWNrVGV4dCA9IFwiMTIzNDU2Nzg5MC1eXFxcXHF3ZXJ0eXVpb3BAW2FzZGZnaGprbDs6XXp4Y3Zibm0sLi9cXCFcXFwiIyQlJicoKT1+fFFXRVJUWVVJT1Bge0FTREZHSEpLTCsqfVpYQ1ZCTk08Pj9f77yR77yS77yT77yU77yV77yW77yX77yY77yZ77yQ77yN77y+77+l772R772X772F772S772U772Z772V772J772P772Q772B772T772E772G772H772I772K772L772M772a772Y772D772W772C772O772N77yM77yO44GC44GE44GG44GL44GV44Gf44Gq44KS44KT5pmC44Gv6YeR44Gq44KKXCI7XHJcbiAgICAvLyDnibnmrormloflrZflr77lv5xcclxuICAgIGNoZWNrVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFwiMHhmMDRiXCIpO1xyXG5cclxuICAgIHZhciBiZWZvcmUgPSBjYW52YXMuY29udGV4dC5tZWFzdXJlVGV4dChjaGVja1RleHQpLndpZHRoO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZm9udCA9ICc0MHB4ICcgKyBmb250ICsgJywgJyArIERFRkFVTFRfRk9OVDtcclxuXHJcbiAgICB2YXIgdGltZW91dENvdW50ID0gMzA7XHJcbiAgICB2YXIgY2hlY2tMb2FkRm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGFmdGVyID0gY2FudmFzLmNvbnRleHQubWVhc3VyZVRleHQoY2hlY2tUZXh0KS53aWR0aDtcclxuICAgICAgaWYgKGFmdGVyICE9PSBiZWZvcmUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgtLXRpbWVvdXRDb3VudCA+IDApIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tMb2FkRm9udCwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwidGltZW91dCBmb250IGxvYWRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2hlY2tMb2FkRm9udCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9udE5hbWUobmFtZSkge1xyXG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIuODleOCqeODs+ODiOWQjeOBr0xvYWTliY3jgavjga7jgb/oqK3lrprjgYzlh7rmnaXjgb7jgZkoXCIgKyBuYW1lICsgXCIpXCIpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuZm9udE5hbWUgPSBuYW1lO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldEZvbnROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9udE5hbWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5GaWxlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBGaWxlIGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICRleHRlbmQuY2FsbChwYXJhbXMsIHtcclxuICAgICAgLy8gcGFyYW1zLiRleHRlbmQoe1xyXG4gICAgICAgIHBhdGg6IHRoaXMuc3JjLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLnNyYyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgJGV4dGVuZC5jYWxsKHBhcmFtcywgdGhpcy5zcmMpO1xyXG4gICAgICAvLyBwYXJhbXMuJGV4dGVuZCh0aGlzLnNyYyk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNhZmUuY2FsbChwYXJhbXMsIHtcclxuICAgIC8vIHBhcmFtcy4kc2FmZSh7XHJcbiAgICAgIHBhdGg6ICcnLFxyXG4gICAgICBkYXRhVHlwZTogJ3RleHQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbG9hZFxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1sLm9wZW4oJ0dFVCcsIHBhcmFtcy5wYXRoKTtcclxuICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHhtbC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4bWwuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHZhciBkYXRhID0geG1sLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgICBpZiAocGFyYW1zLmRhdGFUeXBlID09PSAnanNvbicpIHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5kYXRhVHlwZSA9PT0gJ3htbCcpIHtcclxuICAgICAgICAgICAgZGF0YSA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5kYXRhVHlwZSA9IHBhcmFtcy5kYXRhVHlwZTtcclxuXHJcbiAgICAgICAgICBzZWxmLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIC8vIHRoaXMuZG9tRWxlbWVudC5zcmMgPSB0aGlzLnNyYztcclxuXHJcbiAgICAvLyB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgIC8vICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIC8vIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Bc3NldExvYWRlclxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQXNzZXRMb2FkZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgLy8gcGFyYW1zID0gKHBhcmFtcyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgLy8gICBjYWNoZTogdHJ1ZSxcclxuICAgIC8vIH0pO1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbChwYXJhbXN8fHt9LCB7IGNhY2hlOiB0cnVlIH0pO1xyXG5cclxuICAgIHRoaXMuYXNzZXRzID0ge307XHJcbiAgICB0aGlzLmNhY2hlID0gcGFyYW1zLmNhY2hlO1xyXG4gIH1cclxuXHJcbiAgbG9hZChwYXJhbXMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBmbG93cyA9IFtdO1xyXG5cclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHZhciBsZW5ndGggPSAwO1xyXG4gICAgZm9ySW4uY2FsbChwYXJhbXMsIGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICBsZW5ndGggKz0gT2JqZWN0LmtleXMoYXNzZXRzKS5sZW5ndGg7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZm9ySW4uY2FsbChwYXJhbXMsIGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICBmb3JJbi5jYWxsKGFzc2V0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBhc3NldHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBmdW5jID0gQXNzZXRMb2FkZXIuYXNzZXRMb2FkRnVuY3Rpb25zW3R5cGVdO1xyXG4gICAgICAgIHZhciBmbG93ID0gZnVuYyhrZXksIHZhbHVlKTtcclxuICAgICAgICBmbG93LnRoZW4oZnVuY3Rpb24oYXNzZXQpIHtcclxuICAgICAgICAgIGlmIChzZWxmLmNhY2hlKSB7XHJcbiAgICAgICAgICAgIEFzc2V0TWFuYWdlci5zZXQodHlwZSwga2V5LCBhc3NldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdwcm9ncmVzcycsIHtcclxuICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6ICgrK2NvdW50ZXIvbGVuZ3RoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZsb3dzLnB1c2goZmxvdyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmIChzZWxmLmNhY2hlKSB7XHJcblxyXG4gICAgICBzZWxmLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5wcm9ncmVzcyA+PSAxLjApIHtcclxuICAgICAgICAgIC8vIGxvYWTlpLHmlZfmmYLjgIHlr77nrZZcclxuXHJcbiAgICAgICAgICBmb3JJbi5jYWxsKHBhcmFtcywgZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAgICAgICAvLyBwYXJhbXMuZm9ySW4oZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAgICAgICAgIGZvckluLmNhbGwoYXNzZXRzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIGFzc2V0cy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gQXNzZXRNYW5hZ2VyLmdldCh0eXBlLCBrZXkpO1xyXG4gICAgICAgICAgICAgIGlmIChhc3NldC5sb2FkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdW1teSA9IEFzc2V0TWFuYWdlci5nZXQodHlwZSwgJ2R1bW15Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVtbXkpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGR1bW15LmxvYWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1bW15LmxvYWREdW1teSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGR1bW15LmxvYWRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEFzc2V0TWFuYWdlci5zZXQodHlwZSwga2V5LCBkdW1teSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBhc3NldC5sb2FkRHVtbXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBGbG93LmFsbChmbG93cykudGhlbihmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgIHNlbGYuZmxhcmUoJ2xvYWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlZ2lzdGVyKGtleSwgZnVuYykge1xyXG4gICAgdGhpcy5hc3NldExvYWRGdW5jdGlvbnNba2V5XSA9IGZ1bmM7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcblxyXG5Bc3NldExvYWRlci5hc3NldExvYWRGdW5jdGlvbnMgPSB7XHJcbiAgaW1hZ2U6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVGV4dHVyZSgpO1xyXG4gICAgdmFyIGZsb3cgPSB0ZXh0dXJlLmxvYWQocGF0aCk7XHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9LFxyXG4gIHNvdW5kOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZCgpO1xyXG4gICAgdmFyIGZsb3cgPSBzb3VuZC5sb2FkKHBhdGgpO1xyXG4gICAgcmV0dXJuIGZsb3c7XHJcbiAgfSxcclxuICBzcHJpdGVzaGVldDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgc3MgPSBuZXcgU3ByaXRlU2hlZXQoKTtcclxuICAgIHZhciBmbG93ID0gc3MubG9hZChwYXRoKTtcclxuICAgIHJldHVybiBmbG93O1xyXG4gIH0sXHJcbiAgc2NyaXB0OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBzY3JpcHQgPSBuZXcgU2NyaXB0KCk7XHJcbiAgICByZXR1cm4gc2NyaXB0LmxvYWQocGF0aCk7XHJcbiAgfSxcclxuICBmb250OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBmb250ID0gbmV3IEZvbnQoKTtcclxuICAgIGZvbnQuc2V0Rm9udE5hbWUoa2V5KTtcclxuICAgIHJldHVybiBmb250LmxvYWQocGF0aCk7XHJcbiAgfSxcclxuICBqc29uOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0ID0gbmV3IEZpbGUoKTtcclxuICAgIHJldHVybiB0ZXh0LmxvYWQoe1xyXG4gICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHhtbDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBGaWxlKCk7XHJcbiAgICByZXR1cm4gdGV4dC5sb2FkKHtcclxuICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHRleHQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHQgPSBuZXcgRmlsZSgpO1xyXG4gICAgcmV0dXJuIHRleHQubG9hZChwYXRoKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlNvdW5kTWFuYWdlclxyXG4gKiAjIyMgUmVmXHJcbiAqIC0gaHR0cDovL2V2b2x2ZS5yZWludHJvZHVjaW5nLmNvbS9fc291cmNlL2NsYXNzZXMvYXMzL1NvdW5kTWFuYWdlci9Tb3VuZE1hbmFnZXIuaHRtbFxyXG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrbG9ja3dvb2QvU291bmRNYW5hZ2VyXHJcbiAqL1xyXG5jbGFzcyBTb3VuZE1hbmFnZXIge1xyXG4gIC8vIHZvbHVtZTogMC44LFxyXG4gIC8vIG11c2ljVm9sdW1lOiAwLjgsXHJcbiAgLy8gbXV0ZUZsYWc6IGZhbHNlLFxyXG4gIC8vIGN1cnJlbnRNdXNpYzogbnVsbCxcclxuXHJcbiAgc3RhdGljIHBsYXkobmFtZSwgd2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgdmFyIHNvdW5kID0gQXNzZXRNYW5hZ2VyLmdldCgnc291bmQnLCBuYW1lKTtcclxuXHJcbiAgICBzb3VuZC52b2x1bWUgPSB0aGlzLmdldFZvbHVtZSgpO1xyXG4gICAgc291bmQucGxheSh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gc291bmQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RvcCgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuICBzdGF0aWMgcGF1c2UoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgc3RhdGljIGZhZGUoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgc3RhdGljIHNldFZvbHVtZSh2b2x1bWUpIHtcclxuICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0Vm9sdW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudm9sdW1lO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDjg5/jg6Xjg7zjg4hcclxuICAgKi9cclxuICBzdGF0aWMgbXV0ZSgpIHtcclxuICAgIHRoaXMubXV0ZUZsYWcgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE11c2ljLnZvbHVtZSA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLypcclxuICAgKiDjg5/jg6Xjg7zjg4jop6PpmaRcclxuICAgKi9cclxuICBzdGF0aWMgdW5tdXRlKCkge1xyXG4gICAgdGhpcy5tdXRlRmxhZyA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE11c2ljLnZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzdGF0aWMgaXNNdXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubXV0ZUZsYWc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGxheU11c2ljKG5hbWUsIGZhZGVUaW1lLCBsb29wLCB3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICBsb29wID0gKGxvb3AgIT09IHVuZGVmaW5lZCkgPyBsb29wIDogdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50TXVzaWMpIHtcclxuICAgICAgdGhpcy5zdG9wTXVzaWMoZmFkZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtdXNpYyA9IEFzc2V0TWFuYWdlci5nZXQoJ3NvdW5kJywgbmFtZSk7XHJcblxyXG4gICAgbXVzaWMuc2V0TG9vcChsb29wKTtcclxuICAgIG11c2ljLnBsYXkod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKGZhZGVUaW1lID4gMCkge1xyXG4gICAgICB2YXIgY291bnQgPSAzMjtcclxuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICB2YXIgdW5pdFRpbWUgPSBmYWRlVGltZS9jb3VudDtcclxuICAgICAgdmFyIHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuXHJcbiAgICAgIG11c2ljLnZvbHVtZSA9IDA7XHJcbiAgICAgIHZhciBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICB2YXIgcmF0ZSA9IGNvdW50ZXIvY291bnQ7XHJcbiAgICAgICAgbXVzaWMudm9sdW1lID0gcmF0ZSp2b2x1bWU7XHJcblxyXG4gICAgICAgIGlmIChyYXRlID49IDEpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sIHVuaXRUaW1lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtdXNpYy52b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMgPSBtdXNpYztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TXVzaWM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RvcE11c2ljKGZhZGVUaW1lKSB7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudE11c2ljKSB7IHJldHVybiA7IH1cclxuXHJcbiAgICB2YXIgbXVzaWMgPSB0aGlzLmN1cnJlbnRNdXNpYztcclxuICAgIHRoaXMuY3VycmVudE11c2ljID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZmFkZVRpbWUgPiAwKSB7XHJcbiAgICAgIHZhciBjb3VudCA9IDMyO1xyXG4gICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgIHZhciB1bml0VGltZSA9IGZhZGVUaW1lL2NvdW50O1xyXG4gICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWVNdXNpYygpO1xyXG5cclxuICAgICAgbXVzaWMudm9sdW1lID0gMDtcclxuICAgICAgdmFyIGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICAgIHZhciByYXRlID0gY291bnRlci9jb3VudDtcclxuICAgICAgICBtdXNpYy52b2x1bWUgPSB2b2x1bWUqKDEtcmF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChyYXRlID49IDEpIHtcclxuICAgICAgICAgIG11c2ljLnN0b3AoKTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sIHVuaXRUaW1lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtdXNpYy5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOmfs+alveOCkuS4gOaZguWBnOatolxyXG4gICAqL1xyXG4gIHN0YXRpYyBwYXVzZU11c2ljKCkge1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRNdXNpYykgeyByZXR1cm4gOyB9XHJcbiAgICB0aGlzLmN1cnJlbnRNdXNpYy5wYXVzZSgpO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOmfs+alveOCkuWGjemWi1xyXG4gICAqL1xyXG4gIHN0YXRpYyByZXN1bWVNdXNpYygpIHtcclxuICAgIGlmICghdGhpcy5jdXJyZW50TXVzaWMpIHsgcmV0dXJuIDsgfVxyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMucmVzdW1lKCk7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog6Z+z5qW944Gu44Oc44Oq44Ol44O844Og44KS6Kit5a6aXHJcbiAgICovXHJcbiAgc3RhdGljIHNldFZvbHVtZU11c2ljKHZvbHVtZSkge1xyXG4gICAgdGhpcy5tdXNpY1ZvbHVtZSA9IHZvbHVtZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNdXNpYy52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog6Z+z5qW944Gu44Oc44Oq44Ol44O844Og44KS5Y+W5b6XXHJcbiAgICovXHJcbiAgc3RhdGljIGdldFZvbHVtZU11c2ljKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubXVzaWNWb2x1bWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblNvdW5kTWFuYWdlci52b2x1bWUgPSAwLjg7XHJcblNvdW5kTWFuYWdlci5tdXNpY1ZvbHVtZSA9IDAuODtcclxuU291bmRNYW5hZ2VyLm11dGVGbGFnID0gZmFsc2U7XHJcblNvdW5kTWFuYWdlci5jdXJyZW50TXVzaWMgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5CdXR0b25cclxuICogQnV0dG9uXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwgQnV0dG9uLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUocGhpbmEudWkuQnV0dG9uLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gb3B0aW9ucy5jb3JuZXJSYWRpdXM7XHJcbiAgICB0aGlzLnRleHQgICAgICAgICA9IG9wdGlvbnMudGV4dDtcclxuICAgIHRoaXMuZm9udENvbG9yICAgID0gb3B0aW9ucy5mb250Q29sb3I7XHJcbiAgICB0aGlzLmZvbnRTaXplICAgICA9IG9wdGlvbnMuZm9udFNpemU7XHJcbiAgICB0aGlzLmZvbnRXZWlnaHQgICAgID0gb3B0aW9ucy5mb250V2VpZ2h0O1xyXG4gICAgdGhpcy5mb250RmFtaWx5ICAgPSBvcHRpb25zLmZvbnRGYW1pbHk7XHJcblxyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ3B1c2gnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnJvdW5kUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29ybmVyUmFkaXVzKTtcclxuICB9XHJcblxyXG4gIHBvc3RyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgLy8gdGV4dFxyXG4gICAgdmFyIGZvbnQgPSBmb3JtYXQuY2FsbChcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIsIHRoaXMpO1xyXG4gICAgLy8gdmFyIGZvbnQgPSBcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIuZm9ybWF0KHRoaXMpO1xyXG4gICAgY29udGV4dC5mb250ID0gZm9udDtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZvbnRDb2xvcjtcclxuICAgIGNvbnRleHQuZmlsbFRleHQodGhpcy50ZXh0LCAwLCAwKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuQnV0dG9uLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiAyMDAsXHJcbiAgaGVpZ2h0OiA4MCxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ2hzbCgyMDAsIDgwJSwgNjAlKScsXHJcbiAgc3Ryb2tlOiBudWxsLFxyXG5cclxuICBjb3JuZXJSYWRpdXM6IDgsXHJcbiAgdGV4dDogJ0hlbGxvJyxcclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgZm9udFNpemU6IDMyLFxyXG4gIGZvbnRXZWlnaHQ6ICcnLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ0hpcmFLYWt1UHJvTi1XMydcIiwgLy8gSGlyYWdpbm8gb3IgSGVsdmV0aWNhLFxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnY29ybmVyUmFkaXVzJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICd0ZXh0Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdmb250Q29sb3InKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ2ZvbnRTaXplJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdmb250RmFtaWx5Jyk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnVpLkdhdWdlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIEdhdWdlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucyB8fCB7fSwgR2F1Z2UuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEudWkuR2F1Z2UuZGVmYXVsdHMpO1xyXG4gICAgXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IChvcHRpb25zLnZhbHVlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy52YWx1ZSA6IG9wdGlvbnMubWF4VmFsdWU7XHJcbiAgICB0aGlzLm1heFZhbHVlID0gb3B0aW9ucy5tYXhWYWx1ZTtcclxuICAgIHRoaXMuZ2F1Z2VDb2xvciA9IG9wdGlvbnMuZ2F1Z2VDb2xvcjtcclxuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gb3B0aW9ucy5jb3JuZXJSYWRpdXM7XHJcblxyXG4gICAgdGhpcy52aXN1YWxWYWx1ZSA9IChvcHRpb25zLnZhbHVlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy52YWx1ZSA6IG9wdGlvbnMubWF4VmFsdWU7XHJcbiAgICB0aGlzLmFuaW1hdGlvbiA9IG9wdGlvbnMuYW5pbWF0aW9uO1xyXG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMSoxMDAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rqA44K/44Oz44GL44KS44OB44Kn44OD44KvXHJcbiAgICovXHJcbiAgaXNGdWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IHRoaXMubWF4VmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnqbrjgaPjgb3jgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKi9cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IDA7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgdmFsdWUgPSBjbGFtcCh2YWx1ZSwgMCwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAvLyB2YWx1ZSA9IE1hdGguY2xhbXAodmFsdWUsIDAsIHRoaXMubWF4VmFsdWUpO1xyXG5cclxuICAgIC8vIGVuZCB3aGVuIG5vdyB2YWx1ZSBlcXVhbCB2YWx1ZSBvZiBhcmd1bWVudFxyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gO1xyXG5cclxuICAgIC8vIGZpcmUgdmFsdWUgY2hhbmdlIGV2ZW50XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2UnKTtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICB2YXIgcmFuZ2UgPSBNYXRoLmFicyh0aGlzLnZpc3VhbFZhbHVlLXZhbHVlKTtcclxuICAgICAgdmFyIHRpbWUgPSAocmFuZ2UvdGhpcy5tYXhWYWx1ZSkqdGhpcy5hbmltYXRpb25UaW1lO1xyXG5cclxuICAgICAgdGhpcy50d2VlbmVyLm9udHdlZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMudHdlZW5lclxyXG4gICAgICAgIC5jbGVhcigpXHJcbiAgICAgICAgLnRvKHsndmlzdWFsVmFsdWUnOiB2YWx1ZX0sIHRpbWUpXHJcbiAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmZsYXJlKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFyZSgnZW1wdHknKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNGdWxsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFyZSgnZnVsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzdWFsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5mbGFyZSgnY2hhbmdlZCcpO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICB0aGlzLmZsYXJlKCdlbXB0eScpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuaXNGdWxsKCkpIHtcclxuICAgICAgICB0aGlzLmZsYXJlKCdmdWxsJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJhdGUoKSB7XHJcbiAgICB2YXIgcmF0ZSA9IHRoaXMudmlzdWFsVmFsdWUvdGhpcy5tYXhWYWx1ZTtcclxuICAgIHJldHVybiByYXRlO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnJvdW5kUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29ybmVyUmFkaXVzKTtcclxuICB9XHJcblxyXG4gIHBvc3RyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgcmF0ZSA9IHRoaXMuZ2V0UmF0ZSgpO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5nYXVnZUNvbG9yO1xyXG4gICAgY2FudmFzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgY2FudmFzLmNvbnRleHQuY2xpcCgpO1xyXG4gICAgY2FudmFzLmZpbGxSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoKnJhdGUsIHRoaXMuaGVpZ2h0KTtcclxuICAgIGNhbnZhcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgc2V0IHZhbHVlKHYpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkdhdWdlLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiAyNTYsXHJcbiAgaGVpZ2h0OiAzMixcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ3doaXRlJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuICBtYXhWYWx1ZTogMTAwLFxyXG4gIGdhdWdlQ29sb3I6ICcjNDRmJyxcclxuICBjb3JuZXJSYWRpdXM6IDAsXHJcbiAgYW5pbWF0aW9uOiB0cnVlXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ3ZhbHVlJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ21heFZhbHVlJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ2dhdWdlQ29sb3InKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEdhdWdlLCAnY29ybmVyUmFkaXVzJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5DaXJjbGVHYXVnZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS51aS5HYXVnZVxyXG4gKi9cclxuY2xhc3MgQ2lyY2xlR2F1Z2UgZXh0ZW5kcyBHYXVnZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGZpbGw6ICcjYWFhJyxcclxuICAgICAgc3Ryb2tlOiAnIzIyMicsXHJcblxyXG4gICAgICByYWRpdXM6IDY0LFxyXG4gICAgICBhbnRpY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICBzaG93UGVyY2VudGFnZTogZmFsc2UsIC8vIFRPRE9cclxuICAgIH0pO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuXHJcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xyXG4gICAgdGhpcy5hbnRpY2xvY2t3aXNlID0gb3B0aW9ucy5hbnRpY2xvY2t3aXNlO1xyXG4gICAgdGhpcy5zaG93UGVyY2VudGFnZSA9IG9wdGlvbnMuc2hvd1BlcmNlbnRhZ2U7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgcmF0ZSA9IHRoaXMuZ2V0UmF0ZSgpO1xyXG4gICAgdmFyIGVuZCA9IChNYXRoLlBJKjIpKnJhdGU7XHJcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgdGhpcy5lbmRBbmdsZSA9IGVuZDtcclxuXHJcbiAgICB0aGlzLmNhbnZhcy5yb3RhdGUoLU1hdGguUEkqMC41KTtcclxuICAgIHRoaXMuY2FudmFzLnNjYWxlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGwoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuZmlsbFBpZSgwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5zdGFydEFuZ2xlLCB0aGlzLmVuZEFuZ2xlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN0cm9rZShjYW52YXMpIHtcclxuICAgIGNhbnZhcy5zdHJva2VBcmMoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc3RhcnRBbmdsZSwgdGhpcy5lbmRBbmdsZSk7XHJcbiAgfVxyXG5cclxuICBwb3N0cmVuZGVyKCkge1xyXG4gICAgLy8gaWYgKHRoaXMuc2hvd1BlcmNlbnRhZ2UpIHtcclxuICAgIC8vICAgLy8gVE9ETzpcclxuICAgIC8vICAgdmFyIGxlZnQgPSBNYXRoLm1heCgwLCB0aGlzLmxpbWl0LXRoaXMudGltZSk7XHJcbiAgICAvLyAgIHRoaXMubGFiZWwudGV4dCA9IE1hdGguY2VpbChsZWZ0LzEwMDApKycnO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbnZhciB0ZXh0V2lkdGhDYWNoZSA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5MYWJlbEFyZWFcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5MYWJlbFxyXG4gKi9cclxuY2xhc3MgTGFiZWxBcmVhIGV4dGVuZHMgTGFiZWwge1xyXG5cclxuICAvLyBfbGluZVVwZGF0ZTogdHJ1ZSxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIExhYmVsQXJlYS5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0ge30uJHNhZmUob3B0aW9ucywgTGFiZWxBcmVhLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuX2xpbmVVcGRhdGUgPSB0cnVlO1xyXG4gICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gb3B0aW9ucy52ZXJ0aWNhbEFsaWduO1xyXG4gICAgdGhpcy5zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCB8fCBuZXcgVmVjdG9yMigpO1xyXG4gICAgdGhpcy5zY3JvbGxYID0gb3B0aW9ucy5zY3JvbGxYO1xyXG4gICAgdGhpcy5zY3JvbGxZID0gb3B0aW9ucy5zY3JvbGxZO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoICgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoICsgdGhpcy5wYWRkaW5nICogMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nICogMjtcclxuICB9XHJcbiAgZ2V0T2Zmc2V0WSAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljYWxBbGlnbjtcclxuICAgIH1cclxuICAgIHJldHVybiBMYWJlbEFyZWEudmVydGljYWxBbGlnblRvT2Zmc2V0TWFwW3RoaXMudmVydGljYWxBbGlnbl0gfHwgMDtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldFggKCkge1xyXG4gICAgcmV0dXJuIExhYmVsQXJlYS5hbGlnblRvT2Zmc2V0TWFwW3RoaXMuYWxpZ25dIHx8IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0V2lkdGhDYWNoZSAoKSB7XHJcbiAgICB2YXIgY2FjaGUgPSB0ZXh0V2lkdGhDYWNoZVt0aGlzLmZvbnRdO1xyXG4gICAgcmV0dXJuIGNhY2hlIHx8ICh0ZXh0V2lkdGhDYWNoZVt0aGlzLmZvbnRdID0ge30pO1xyXG4gIH1cclxuICBcclxuICBzcGxpY2VMaW5lcyAobGluZXMpIHtcclxuICAgIHZhciByb3dXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcblxyXG4gICAgdmFyIGNhY2hlID0gdGhpcy5nZXRUZXh0V2lkdGhDYWNoZSgpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBjYWNoZVxyXG4gICAgZWFjaCQxLmNhbGwodGhpcy5fdGV4dCwgZnVuY3Rpb24oY2gpIHtcclxuICAgIC8vIHRoaXMuX3RleHQuZWFjaChmdW5jdGlvbihjaCkge1xyXG4gICAgICBpZiAoIWNhY2hlW2NoXSkge1xyXG4gICAgICAgIGNhY2hlW2NoXSA9IGNvbnRleHQubWVhc3VyZVRleHQoY2gpLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdmFyIGxvY2FsTGluZXMgPSBbXTtcclxuICAgIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xyXG4gICAgICBcclxuICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICB2YXIgdG90YWxXaWR0aCA9IDA7XHJcblxyXG4gICAgICAvLyDjga/jgb/lh7rjgabjgYTjgZ/jgonlvLfliLbnmoTjgavmlLnooYzjgZnjgotcclxuICAgICAgZWFjaCQxLmNhbGwobGluZSwgZnVuY3Rpb24oY2gpIHtcclxuICAgICAgLy8gbGluZS5lYWNoKGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAgICAgdmFyIHcgPSBjYWNoZVtjaF07XHJcblxyXG4gICAgICAgIGlmICgodG90YWxXaWR0aCt3KSA+IHJvd1dpZHRoKSB7XHJcbiAgICAgICAgICBsb2NhbExpbmVzLnB1c2goc3RyKTtcclxuICAgICAgICAgIHN0ciA9ICcnO1xyXG4gICAgICAgICAgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHIgKz0gY2g7XHJcbiAgICAgICAgdG90YWxXaWR0aCArPSB3O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOaui+OCiuOCkiBwdXNoIOOBmeOCi1xyXG4gICAgICBsb2NhbExpbmVzLnB1c2goc3RyKTtcclxuXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBsb2NhbExpbmVzO1xyXG4gIH1cclxuICBcclxuICBnZXRMaW5lcyAoKSB7XHJcbiAgICBpZiAodGhpcy5fbGluZVVwZGF0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGluZVVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBsaW5lcyA9ICh0aGlzLnRleHQgKyAnJykuc3BsaXQoJ1xcbicpO1xyXG4gICAgaWYgKHRoaXMud2lkdGggPCAxKSB7XHJcbiAgICAgIHRoaXMuX2xpbmVzID0gbGluZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fbGluZXMgPSB0aGlzLnNwbGljZUxpbmVzKGxpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbGluZXM7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIgKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuZm9udCA9IHRoaXMuZm9udDtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gdGhpcy5hbGlnbjtcclxuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gdGhpcy5iYXNlbGluZTtcclxuXHJcbiAgICB2YXIgdGV4dCA9IHRoaXMudGV4dCArICcnO1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5nZXRMaW5lcygpO1xyXG4gICAgdmFyIGxlbmd0aCA9IGxpbmVzLmxlbmd0aDtcclxuICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIGZvbnRTaXplID0gdGhpcy5mb250U2l6ZTtcclxuICAgIHZhciBsaW5lU2l6ZSA9IGZvbnRTaXplICogdGhpcy5saW5lSGVpZ2h0O1xyXG4gICAgdmFyIG9mZnNldFggPSB0aGlzLmdldE9mZnNldFgoKSAqIHdpZHRoO1xyXG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLmdldE9mZnNldFkoKTtcclxuICAgIGlmIChvZmZzZXRZID09PSAwKSB7XHJcbiAgICAgIG9mZnNldFkgPSAtTWF0aC5mbG9vcihsZW5ndGggLyAyKSAqIGxpbmVTaXplO1xyXG4gICAgICBvZmZzZXRZICs9ICgobGVuZ3RoICsgMSkgJSAyKSAqIChsaW5lU2l6ZSAvIDIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAob2Zmc2V0WSA8IDApIHtcclxuICAgICAgb2Zmc2V0WSAqPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgb2Zmc2V0WSA9IG9mZnNldFkgKiBoZWlnaHQgLSBsZW5ndGggKiBsaW5lU2l6ZSArIGxpbmVTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldFkgLT0gdGhpcy5zY3JvbGxZO1xyXG4gICAgb2Zmc2V0WCAtPSB0aGlzLnNjcm9sbFg7XHJcbiAgICB2YXIgc3RhcnQgPSAob2Zmc2V0WSArIGhlaWdodCAvIDIpIC8gLWxpbmVTaXplIHwgMDtcclxuICAgIGlmIChzdGFydCA8IDApIHsgc3RhcnQgPSAwOyB9XHJcblxyXG4gICAgdmFyIGVuZCA9IChoZWlnaHQgLyAyIC0gb2Zmc2V0WSArIGxpbmVTaXplICogMikgLyBsaW5lU2l6ZSB8IDA7XHJcbiAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIHJldHVybiBzdGFydCA8PSBpICYmIGVuZCA+IGk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIHRoaXMubGluZVNpemUgPSBsaW5lU2l6ZTtcclxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGwgKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHZhciBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xyXG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XHJcbiAgICB2YXIgbGluZVNpemUgPSB0aGlzLmxpbmVTaXplO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydDtcclxuICAgIHRoaXMubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgb2Zmc2V0WCwgKHN0YXJ0ICsgaSkgKiBsaW5lU2l6ZSArIG9mZnNldFkpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UgKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHZhciBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xyXG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XHJcbiAgICB2YXIgbGluZVNpemUgPSB0aGlzLmxpbmVTaXplO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydDtcclxuICAgIHRoaXMubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlVGV4dChsaW5lLCBvZmZzZXRYLCAoc3RhcnQgKyBpKSAqIGxpbmVTaXplICsgb2Zmc2V0WSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHYpIHtcclxuICAgIHRoaXMuX3RleHQgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbFgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY3JvbGwueDtcclxuICB9XHJcbiAgc2V0IHNjcm9sbFgodikge1xyXG4gICAgdGhpcy5zY3JvbGwueCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgc2Nyb2xsWSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbC55O1xyXG4gIH1cclxuICBzZXQgc2Nyb2xsWSh2KSB7XHJcbiAgICB0aGlzLnNjcm9sbC55ID0gdjtcclxuICB9XHJcbiAgXHJcbiAgLy8gX3N0YXRpYzoge1xyXG4gIC8vICAgZGVmYXVsdHM6IHtcclxuICAvLyAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgLy8gICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgLy8gICAgIGJhc2VsaW5lOiAndG9wJyxcclxuICAvLyAgICAgd2lkdGg6IDMyMCxcclxuICAvLyAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgLy8gICAgIHNjcm9sbFg6IDAsXHJcbiAgLy8gICAgIHNjcm9sbFk6IDAsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYWxpZ25Ub09mZnNldE1hcDoge1xyXG4gIC8vICAgICBzdGFydDogLTAuNSxcclxuICAvLyAgICAgbGVmdDogLTAuNSxcclxuICAvLyAgICAgY2VudGVyOiAwLFxyXG4gIC8vICAgICBlbmQ6IDAuNSxcclxuICAvLyAgICAgcmlnaHQ6IDAuNSxcclxuICAvLyAgIH0sXHJcblxyXG4gIC8vICAgdmVydGljYWxBbGlnblRvT2Zmc2V0TWFwOiB7XHJcbiAgLy8gICAgIHRvcDogLTAuNSxcclxuICAvLyAgICAgY2VudGVyOiAwLFxyXG4gIC8vICAgICBtaWRkbGU6IDAsXHJcbiAgLy8gICAgIGJvdHRvbTogMC41LFxyXG4gIC8vICAgfSxcclxuICAvLyB9LFxyXG5cclxuICAvLyBfZGVmaW5lZDogZnVuY3Rpb24oKSB7XHJcbiAgLy8gICB2YXIgZnVuYyA9IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgLy8gICAgIGlmKCh0aGlzLl9saW5lVXBkYXRlID09PSBmYWxzZSkgJiYgKG5ld1ZhbCAhPT0gb2xkVmFsKSl7XHJcbiAgLy8gICAgICAgdGhpcy5fbGluZVVwZGF0ZSA9IHRydWU7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgW1xyXG4gIC8vICAgICAndGV4dCcsXHJcbiAgLy8gICAgICd3aWR0aCcsXHJcbiAgLy8gICAgICdmb250U2l6ZScsXHJcbiAgLy8gICAgICdmb250V2VpZ2h0JyxcclxuICAvLyAgICAgJ2ZvbnRGYW1pbHknXHJcbiAgLy8gICBdLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgLy8gICAgIHRoaXMuJHdhdGNoKGtleSwgZnVuYyk7XHJcbiAgLy8gICB9LCB0aGlzLnByb3RvdHlwZSk7XHJcblxyXG4gIC8vICAgcGhpbmEuZGlzcGxheS5TaGFwZS53YXRjaFJlbmRlclByb3BlcnRpZXMuY2FsbCh0aGlzICxbXHJcbiAgLy8gICAgICd2ZXJ0aWNhbEFsaWduJyxcclxuICAvLyAgICAgJ3RleHQnLFxyXG4gIC8vICAgICAnc2Nyb2xsJyxcclxuICAvLyAgICAgJ3Njcm9sbFgnLFxyXG4gIC8vICAgICAnc2Nyb2xsWSdcclxuICAvLyAgIF0pO1xyXG4gIC8vIH0sXHJcblxyXG5cclxuICBlbmFibGVTY3JvbGwoKSB7XHJcbiAgICAvLyAgIHRoaXMuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICAvLyAgIHZhciBwaHlzaWNhbCA9IHBoaW5hLmFjY2Vzc29yeS5QaHlzaWNhbCgpO1xyXG4gICAgLy8gICBwaHlzaWNhbC5hdHRhY2hUbyh0aGlzKTtcclxuICAgIC8vICAgcGh5c2ljYWwuZnJpY3Rpb24gPSAwLjg7XHJcbiAgICAvLyAgIHZhciBsYXN0Rm9yY2UgPSAwO1xyXG4gICAgLy8gICB2YXIgbGFzdE1vdmUgPSAwO1xyXG4gICAgLy8gICB0aGlzLm9uKCdwb2ludHN0YXJ0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyAgICAgbGFzdEZvcmNlID0gcGh5c2ljYWwudmVsb2NpdHkueTtcclxuICAgIC8vICAgICBsYXN0TW92ZSA9IDA7XHJcbiAgICAvLyAgICAgcGh5c2ljYWwuZm9yY2UoMCwgMCk7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICB0aGlzLm9uKCdwb2ludG1vdmUnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICB2YXIgcCA9IGUucG9pbnRlci5kZWx0YVBvc2l0aW9uO1xyXG4gICAgLy8gICAgIGxhc3RNb3ZlID0gcC55O1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsWSArPSBsYXN0TW92ZTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIHBoeXNpY2FsLmZvcmNlKDAsIGxhc3RGb3JjZSArIGxhc3RNb3ZlKTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkxhYmVsQXJlYS5kZWZhdWx0cyA9IHtcclxuICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICBhbGlnbjogJ2xlZnQnLFxyXG4gIGJhc2VsaW5lOiAndG9wJyxcclxuICB3aWR0aDogMzIwLFxyXG4gIGhlaWdodDogMzIwLFxyXG4gIHNjcm9sbFg6IDAsXHJcbiAgc2Nyb2xsWTogMCxcclxufTtcclxuTGFiZWxBcmVhLmFsaWduVG9PZmZzZXRNYXAgPSB7XHJcbiAgc3RhcnQ6IC0wLjUsXHJcbiAgbGVmdDogLTAuNSxcclxuICBjZW50ZXI6IDAsXHJcbiAgZW5kOiAwLjUsXHJcbiAgcmlnaHQ6IDAuNSxcclxufTtcclxuTGFiZWxBcmVhLnZlcnRpY2FsQWxpZ25Ub09mZnNldE1hcCA9IHtcclxuICB0b3A6IC0wLjUsXHJcbiAgY2VudGVyOiAwLFxyXG4gIG1pZGRsZTogMCxcclxuICBib3R0b206IDAuNSxcclxufVxyXG5cclxuLy8gZGVmaW5lZFxyXG47XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydGllcy5jYWxsKExhYmVsQXJlYSAsW1xyXG4gICd2ZXJ0aWNhbEFsaWduJyxcclxuICAndGV4dCcsXHJcbiAgJ3Njcm9sbCcsXHJcbiAgJ3Njcm9sbFgnLFxyXG4gICdzY3JvbGxZJ1xyXG5dKTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZWZmZWN0LldhdmVcclxuICogQnV0dG9uXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuQ2lyY2xlU2hhcGVcclxuICovXHJcbmNsYXNzIFdhdmUgZXh0ZW5kcyBDaXJjbGVTaGFwZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgICBmaWxsOiAnd2hpdGUnLFxyXG4gICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHR3ZWVuZXIgPSBuZXcgVHdlZW5lcigpLmF0dGFjaFRvKHRoaXMpO1xyXG4gICAgdHdlZW5lclxyXG4gICAgICAudG8oe3NjYWxlWDoyLCBzY2FsZVk6MiwgYWxwaGE6MH0sIDUwMClcclxuICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnNvY2lhbC5Ud2l0dGVyXHJcbiAqICMgVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq/jgpLnlJ/miJDjgZnjgovjgq/jg6njgrlcclxuICogVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq/jga4gVVJMIOOCkueUn+aIkOOBl+OBpuOBj+OCjOOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgVHdpdHRlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIFxyXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv+OBr+WtmOWcqOOBl+OBvuOBmeOBjOOCpOODs+OCueOCv+ODs+OCueODoeODs+ODkOOBr+OBguOCiuOBvuOBm+OCk+OAglxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkxcclxuICAgKiBUd2l0dGVy44Gu5YWx5pyJ44Oq44Oz44Kv44KS55Sf5oiQ44GX44G+44GZ44CC5byV5pWw44Gr44Kq44OW44K444Kn44Kv44OI44KS5rih44GZ44GT44Go44Gn5qeY44CF44Gq44OR44Op44Oh44O844K/44O844KS6Kit5a6a5Ye65p2l44G+44GZ44CC5byV5pWw44Gu44Kq44OW44K444Kn44Kv44OI44GvIHtAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHN9IOOBp+WuieWFqOaLoeW8teOBleOCjOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTCgpOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9SGVsbG8lMkMlMjB3b3JsZCEmaGFzaHRhZ3M9amF2YXNjcmlwdCUyQ3BoaW5hJnVybD1754++5Zyo44GuVVJMfVxyXG4gICAqIFxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoe1xyXG4gICAqICAgICAgIHRleHQ6ICdUaGlzIGlzIHRleHQnLFxyXG4gICAqICAgICAgIGhhc2h0YWdzOiAnaGFzaHRhZzEsaGFzaHRhZzInLFxyXG4gICAqICAgICAgIHVybDogJ2h0dHA6Ly9waGluYWpzLmNvbSdcclxuICAgKiAgICAgfSk7IC8vID0+IGh0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1UaGlzJTIwaXMlMjB0ZXh0Jmhhc2h0YWdzPWhhc2h0YWcxJTJDaGFzaHRhZzImdXJsPWh0dHAlM0ElMkYlMkZwaGluYWpzLmNvbVxyXG4gICAqIFxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoe1xyXG4gICAqICAgICAgIHRleHQ6ICdUaGlzIGlzIHRleHQnLFxyXG4gICAqICAgICAgIGhhc2h0YWdzOiAnaGFzaHRhZzEsaGFzaHRhZzInLFxyXG4gICAqICAgICAgIHVybDogJ2h0dHA6Ly9waGluYWpzLmNvbScsXHJcbiAgICogICAgICAgb3RoZXI6ICdUaGlzIGlzIG90aGVyJy8v6Kit5a6a6aCF55uu44Gv6YGp5b2T44Gr5aKX44KE44Gb44KLXHJcbiAgICogICAgIH0pOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9VGhpcyUyMGlzJTIwdGV4dCZoYXNodGFncz1oYXNodGFnMSUyQ2hhc2h0YWcyJnVybD1odHRwJTNBJTJGJTJGcGhpbmFqcy5jb20mb3RoZXI9VGhpcyUyMGlzJTIwb3RoZXJcclxuICAgKiBcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgKiAgICAgICB1cmw6ICdodHRwOi8vcGhpbmFqcy5jb20nXHJcbiAgICogICAgIH0pOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD1odHRwJTNBJTJGJTJGcGhpbmFqcy5jb20mdGV4dD1IZWxsbyUyQyUyMHdvcmxkISZoYXNodGFncz1qYXZhc2NyaXB0JTJDcGhpbmFcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge09iamVjdH1cclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44KvXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVVUkwgKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIFR3aXR0ZXIuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZSh0aGlzLmRlZmF1bHRzKTtcclxuXHJcbiAgICB2YXIgcXVlcmllcyA9IFtdO1xyXG4gICAgdmFyIGV1YyA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgIGZvckluLmNhbGwob3B0aW9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gb3B0aW9ucy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciBzdHIgPSBrZXkgKyAnPScgKyBldWModmFsdWUpO1xyXG4gICAgICBxdWVyaWVzLnB1c2goc3RyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB1cmwgPSBmb3JtYXQuY2FsbCgne2Jhc2VVUkx9L3t0eXBlfT97cXVlcnl9Jywge1xyXG4gICAgLy8gdmFyIHVybCA9ICd7YmFzZVVSTH0ve3R5cGV9P3txdWVyeX0nLmZvcm1hdCh7XHJcbiAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcclxuICAgICAgLy8gdHlwZTogb3B0aW9ucy50eXBlLFxyXG4gICAgICB0eXBlOiAndHdlZXQnLFxyXG4gICAgICBxdWVyeTogcXVlcmllcy5qb2luKCcmJyksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5iYXNlVVJMID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50J11cclxuICogVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq/jga7jg5njg7zjgrnjgajjgarjgosgVVJMIOOBp+OBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuVHdpdHRlci5iYXNlVVJMID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50JztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHNcclxuICog44OH44OV44Kp44Or44OI5YCk44KS5qC857SN44GX44Gm44GE44KL44Kq44OW44K444Kn44Kv44OI44Gn44GZ44CCe0BsaW5rICNwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy50ZXh0fSwge0BsaW5rICNwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy5oYXNodGFnc30sIHtAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudXJsfSDjgpLlhoXljIXjgZfjgabjgYTjgb7jgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblR3aXR0ZXIuZGVmYXVsdHMgPSB7XHJcbiAgLy8gdHlwZTogJ3R3ZWV0JyxcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy50ZXh0ID0gJ0hlbGxvLCBXb3JsZCddXHJcbiAgICog44OH44OV44Kp44Or44OI44Gn44OE44Kk44O844OI44Gr5ZCr44G+44KM44KL5paH5a2X5YiX44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHRleHQ6ICdIZWxsbywgd29ybGQhJyxcclxuXHJcbiAgLy8gc2NyZWVuX25hbWU6ICdwaGlfanAnLFxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gW3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLmhhc2h0YWdzID0gJ2phdmFzY3JpcHQsIHBoaW5hX2pzJ11cclxuICAgKiDjg4fjg5Xjgqnjg6vjg4jjgafjg4TjgqTjg7zjg4jjgavlkKvjgb7jgozjgovjg4/jg4Pjgrfjg6Xjgr/jgrDjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgaGFzaHRhZ3M6ICdqYXZhc2NyaXB0LHBoaW5hX2pzJyxcclxuXHJcbiAgLy8gdXJsOiAnaHR0cDovL2dpdGh1Yi5jb20vcGhpLWpwL3BoaW5hLmpzJyxcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy51cmwgPSBwaGluYS5nbG9iYWwubG9jYXRpb24gJiYgcGhpbmEuZ2xvYmFsLmxvY2F0aW9uLmhyZWZdXHJcbiAgICog44OH44OV44Kp44Or44OI44Gn44OE44Kk44O844OI44Gr5ZCr44G+44KM44KLIFVSTCDjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgdXJsOiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbiAmJiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbi5ocmVmXHJcblxyXG4gIC8vIHZpYTogJ3BoaV9qcCcsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuTWFuYWdlclNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5TY2VuZVxyXG4gKi9cclxuY2xhc3MgTWFuYWdlclNjZW5lIGV4dGVuZHMgU2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zZXRTY2VuZXMocGFyYW1zLnNjZW5lcyk7XHJcblxyXG4gICAgdGhpcy5vbihcImVudGVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmdvdG9TY2VuZShwYXJhbXMuc3RhcnRMYWJlbCB8fCAwKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5vbihcInJlc3VtZVwiLCB0aGlzLm9ubmV4dC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmNvbW1vbkFyZ3VtZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2NlbmVzIOOCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldFNjZW5lcyhzY2VuZXMpIHtcclxuICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjZW5l44Kv44Op44K544KS44Kk44Oz44K544K/44Oz44K55YyW44GX44Gm6L+U44GZXHJcbiAgICogXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXHJcbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgX2luc3RhbnRpYXRlU2NlbmUoZGF0YSwgYXJncykge1xyXG4gICAgLy8gU2NlbmXliJ3mnJ/ljJblvJXmlbBcclxuICAgIHZhciBpbml0QXJndW1lbnRzID0gJGV4dGVuZC5jYWxsKHt9LCBkYXRhLmFyZ3VtZW50cywgYXJncyk7XHJcbiAgICAvLyB2YXIgaW5pdEFyZ3VtZW50cyA9IHt9LiRleHRlbmQoZGF0YS5hcmd1bWVudHMsIGFyZ3MpO1xyXG5cclxuICAgIHZhciBzY2VuZSwga2xhc3M7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyBwaGluYS5kZWZpbmXjgIHjgYLjgovjgYTjga9nbG9iYWwod2luZG93KeOBq+ebtOaOpeWumue+qeOBleOCjOOBn+OCr+ODqeOCueOBruaWh+Wtl+WIl1xyXG4gICAgICBrbGFzcyA9IHBoaW5hJDEudXNpbmcoZGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAodHlwZW9mIGtsYXNzICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAga2xhc3MgPSBwaGluYSQxLnVzaW5nKCdwaGluYS5nYW1lLicgKyBkYXRhLmNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2NlbmUgPSBrbGFzcy5jYWxsKG51bGwsIGluaXRBcmd1bWVudHMpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5jbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8g6Zai5pWw44Gu5aC05ZCI44CB57SU57KL44GqY2xhc3PjgajopovjgarjgZlcclxuICAgICAgLy8gc2NlbmUgPSBuZXcgZGF0YS5jbGFzc05hbWUoaW5pdEFyZ3VtZW50cyk7XHJcbiAgICAgIGtsYXNzID0gZGF0YS5jbGFzc05hbWU7XHJcbiAgICB9XHJcbiAgICBzY2VuZSA9IG5ldyBrbGFzcyhpbml0QXJndW1lbnRzKTtcclxuXHJcbiAgICBpZiAoIXNjZW5lLm5leHRMYWJlbCkge1xyXG4gICAgICBzY2VuZS5uZXh0TGFiZWwgPSBkYXRhLm5leHRMYWJlbDtcclxuICAgIH1cclxuICAgIGlmICghc2NlbmUubmV4dEFyZ3VtZW50cykge1xyXG4gICAgICBzY2VuZS5uZXh0QXJndW1lbnRzID0gZGF0YS5uZXh0QXJndW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzY2VuZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NlbmXjgq/jg6njgrnjgpLjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZfjgaZhcHDjgatyZXBsYWNlU2NlbmXjgZXjgZvjgotcclxuICAgKiBcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd8bnVtYmVyfSBsYWJlbCDjgrfjg7zjg7Pjga7lr77lv5zjg6njg5njg6tcclxuICAgKiBAcGFyYW0gIHthbnl9IFthcmdzXSBTY2VuZeOBq+OCj+OBn+OBmeW8leaVsOOBjOOBguOCi+WgtOWQiOOBq+aMh+WumlxyXG4gICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICovXHJcbiAgcmVwbGFjZVNjZW5lKGxhYmVsLCBhcmdzKSB7XHJcbiAgICB2YXIgaW5kZXggPSAodHlwZW9mIGxhYmVsID09ICdzdHJpbmcnKSA/IHRoaXMubGFiZWxUb0luZGV4KGxhYmVsKSA6IGxhYmVsfHwwO1xyXG4gICAgaWYgKCF0aGlzLnNjZW5lc1tpbmRleF0pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQuY2FsbCgncGhpbmEuanMgZXJyb3I6IGB7MH1gIOOBq+WvvuW/nOOBmeOCi+OCt+ODvOODs+OBjOOBguOCiuOBvuOBm+OCky4nLCBsYWJlbCkpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNjZW5lID0gdGhpcy5faW5zdGFudGlhdGVTY2VuZSh0aGlzLnNjZW5lc1tpbmRleF0sIGFyZ3MpO1xyXG4gICAgdGhpcy5hcHAucmVwbGFjZVNjZW5lKHNjZW5lKTtcclxuICAgIHRoaXMuc2NlbmVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5kZXgob3IgbGFiZWwpIOOBruOCt+ODvOODs+OBuOmjm+OBtlxyXG4gICAqIHJlcGxhY2VTY2VuZeOBqOOBrumBleOBhOOBr2FwcC5yZXBsYWNlU2NlbmXjgafjga/jgarjgY/jgIFhcHAucHVzaFNjZW5l44KS5a6f6KGM44GZ44KL54K5XHJcbiAgICovXHJcbiAgZ290b1NjZW5lKGxhYmVsLCBhcmdzKSB7XHJcbiAgICB2YXIgaW5kZXggPSAodHlwZW9mIGxhYmVsID09ICdzdHJpbmcnKSA/IHRoaXMubGFiZWxUb0luZGV4KGxhYmVsKSA6IGxhYmVsfHwwO1xyXG4gICAgaWYgKCF0aGlzLnNjZW5lc1tpbmRleF0pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQuY2FsbCgncGhpbmEuanMgZXJyb3I6IGB7MH1gIOOBq+WvvuW/nOOBmeOCi+OCt+ODvOODs+OBjOOBguOCiuOBvuOBm+OCky4nLCBsYWJlbCkpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNjZW5lID0gdGhpcy5faW5zdGFudGlhdGVTY2VuZSh0aGlzLnNjZW5lc1tpbmRleF0sIGFyZ3MpO1xyXG4gICAgdGhpcy5hcHAucHVzaFNjZW5lKHNjZW5lKTtcclxuICAgIHRoaXMuc2NlbmVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qyh44Gu44K344O844Oz44G46aOb44G2XHJcbiAgICovXHJcbiAgZ290b05leHQoYXJncykge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdO1xyXG4gICAgdmFyIG5leHRJbmRleCA9IG51bGw7XHJcblxyXG4gICAgLy8g5qyh44Gu44Op44OZ44Or44GM6Kit5a6a44GV44KM44Gm44GE44Gf5aC05ZCIXHJcbiAgICBpZiAoZGF0YS5uZXh0TGFiZWwpIHtcclxuICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmxhYmVsVG9JbmRleChkYXRhLm5leHRMYWJlbCk7XHJcbiAgICB9XHJcbiAgICAvLyDmrKHjga7jgrfjg7zjg7Pjgavpgbfnp7tcclxuICAgIGVsc2UgaWYgKHRoaXMuc2NlbmVJbmRleCsxIDwgdGhpcy5zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5zY2VuZUluZGV4KzE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZ290b1NjZW5lKG5leHRJbmRleCwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmZsYXJlKFwiZmluaXNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44Kk44Oz44OH44OD44Kv44K544KS5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+ODqeODmeODq+OCkuWPluW+l1xyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRMYWJlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44OZ44Or44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgbGFiZWxUb0luZGV4KGxhYmVsKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuc2NlbmVzLmZpbHRlcihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIHJldHVybiBkYXRhLmxhYmVsID09IGxhYmVsO1xyXG4gICAgfSlbMF07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2NlbmVzLmluZGV4T2YoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqTjg7Pjg4fjg4Pjgq/jgrnjgYvjgonjg6njg5njg6vjgavlpInmj5tcclxuICAgKi9cclxuICBpbmRleFRvTGFiZWwoaW5kZXgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjZW5lc1tpbmRleF0ubGFiZWw7XHJcbiAgfVxyXG5cclxuICBvbm5leHQoZSkge1xyXG4gICAgdmFyIG5leHRMYWJlbCA9IGUucHJldlNjZW5lLm5leHRMYWJlbDtcclxuICAgIHZhciBuZXh0QXJndW1lbnRzID0gZS5wcmV2U2NlbmUubmV4dEFyZ3VtZW50cztcclxuICAgIGlmIChuZXh0TGFiZWwpIHtcclxuICAgICAgdGhpcy5nb3RvU2NlbmUobmV4dExhYmVsLCBuZXh0QXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmdvdG9OZXh0KG5leHRBcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5Mb2FkaW5nU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBMb2FkaW5nU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywgcGhpbmEuZ2FtZS5Mb2FkaW5nU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5nYXVnZSA9IG5ldyBHYXVnZSh7XHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiAxMixcclxuICAgICAgZmlsbDogJyNhYWEnLFxyXG4gICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICBnYXVnZUNvbG9yOiAnaHNsYSgyMDAsIDEwMCUsIDgwJSwgMC44KScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9KS5hZGRDaGlsZFRvKHRoaXMpXHJcbiAgICAgIC5zZXRQb3NpdGlvbihcclxuICAgICAgICB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgIDAsXHJcbiAgICAgIClcclxuICAgICAgLnNldE9yaWdpbihcclxuICAgICAgICAwLjUsIFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgIC8vIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgLy8gICBjaGlsZHJlbjoge1xyXG4gICAgLy8gICAgIGdhdWdlOiB7XHJcbiAgICAvLyAgICAgICBjbGFzc05hbWU6ICdwaGluYS51aS5HYXVnZScsXHJcbiAgICAvLyAgICAgICBhcmd1bWVudHM6IHtcclxuICAgIC8vICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAvLyAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgLy8gICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgLy8gICAgICAgICBmaWxsOiAnI2FhYScsXHJcbiAgICAvLyAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgIGdhdWdlQ29sb3I6ICdoc2xhKDIwMCwgMTAwJSwgODAlLCAwLjgpJyxcclxuICAgIC8vICAgICAgICAgcGFkZGluZzogMCxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgLy8gICAgICAgeTogMCxcclxuICAgIC8vICAgICAgIG9yaWdpblk6IDAsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICB2YXIgbG9hZGVyID0gbmV3IEFzc2V0TG9hZGVyKCk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubGllKSB7XHJcbiAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uVGltZSA9IDEwKjEwMDA7XHJcbiAgICAgIHRoaXMuZ2F1Z2UudmFsdWUgPSA5MDtcclxuXHJcbiAgICAgIGxvYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2F1Z2UudmFsdWUgPSAxMDA7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblRpbWUgPSAxMDA7XHJcbiAgICAgIGxvYWRlci5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHRoaXMuZ2F1Z2UudmFsdWUgPSBlLnByb2dyZXNzICogMTAwO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYXVnZS5vbmZ1bGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuZXhpdFR5cGUgPT09ICdhdXRvJykge1xyXG4gICAgICAgIHRoaXMuYXBwLnBvcFNjZW5lKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mbGFyZSgnbG9hZGVkJyk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgbG9hZGVyLmxvYWQob3B0aW9ucy5hc3NldHMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkxvYWRpbmdTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBleGl0VHlwZTogJ2F1dG8nLFxyXG4gIGxpZTogZmFsc2UsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuU3BsYXNoU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIFNwbGFzaFNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gU3BsYXNoU2NlbmUuZGVmYXVsdHM7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKCk7XHJcbiAgICB0ZXh0dXJlLmxvYWQoZGVmYXVsdHMuaW1hZ2VVUkwpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgX2luaXQoKSB7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlKS5hZGRDaGlsZFRvKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldFBvc2l0aW9uKHRoaXMuZ3JpZFguY2VudGVyKCksIHRoaXMuZ3JpZFkuY2VudGVyKCkpO1xyXG4gICAgdGhpcy5zcHJpdGUuYWxwaGEgPSAwO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnR3ZWVuZXJcclxuICAgICAgLmNsZWFyKClcclxuICAgICAgLnRvKHthbHBoYToxfSwgNTAwLCAnZWFzZU91dEN1YmljJylcclxuICAgICAgLndhaXQoMTAwMClcclxuICAgICAgLnRvKHthbHBoYTowfSwgNTAwLCAnZWFzZU91dEN1YmljJylcclxuICAgICAgLndhaXQoMjUwKVxyXG4gICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSwgdGhpcylcclxuICAgICAgO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblNwbGFzaFNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIGltYWdlVVJMOiAnaHR0cDovL2Nkbi5yYXdnaXQuY29tL3BoaS1qcC9waGluYS5qcy9kZXZlbG9wL2xvZ28ucG5nJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5UaXRsZVNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBUaXRsZVNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIFRpdGxlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIHBoaW5hLmdhbWUuVGl0bGVTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICB0aXRsZUxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNjQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig0KSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICAgIHRvdWNoTGFiZWw6IHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVE9VQ0ggU1RBUlRcIixcclxuICAgICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oMTIpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5UaXRsZVNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIHRpdGxlOiAncGhpbmEuanMgZ2FtZXMnLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG5cclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDIwMCwgODAlLCA2NCUpJyxcclxuICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxyXG5cclxuICBleGl0VHlwZTogJ3RvdWNoJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5QYXVzZVNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBQYXVzZVNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIFBhdXNlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIHBoaW5hLmdhbWUuUGF1c2VTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogJ1BhdXNlJyxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBudWxsLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNDgsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuY2VudGVyKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHBhcmFtcy5leGl0VHlwZSA9PT0gJ3RvdWNoJykge1xyXG4gICAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5QYXVzZVNjZW5lLmRlZmF1bHRzID0gIHtcclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsYSgwLCAwJSwgMCUsIDAuODUpJyxcclxuXHJcbiAgZXhpdFR5cGU6ICd0b3VjaCcsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuUmVzdWx0U2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIFJlc3VsdFNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIFJlc3VsdFNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBwaGluYS5nYW1lLlJlc3VsdFNjZW5lLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKHBhcmFtcyk7XHJcblxyXG4gICAgdmFyIG1lc3NhZ2UgPSBmb3JtYXQuY2FsbChwYXJhbXMubWVzc2FnZSwgcGFyYW1zKTtcclxuICAgIC8vIHZhciBtZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UuZm9ybWF0KHBhcmFtcyk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIHNjb3JlVGV4dDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdzY29yZScsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDQ4LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguc3Bhbig4KSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig0KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjb3JlTGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiBwYXJhbXMuc2NvcmUrJycsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDcyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguc3Bhbig4KSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig2KSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXNzYWdlTGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDkpLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNoYXJlQnV0dG9uOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IEJ1dHRvbixcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLnVpLkJ1dHRvbicsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICfimIUnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTI4LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOCxcclxuICAgICAgICAgICAgZm9udENvbG9yOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNTAsXHJcbiAgICAgICAgICAgIGNvcm5lclJhZGl1czogNjQsXHJcbiAgICAgICAgICAgIGZpbGw6ICdyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSknLFxyXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjYWFhJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKC0zKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3BhbigxMiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5QnV0dG9uOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IEJ1dHRvbixcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLnVpLkJ1dHRvbicsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICfilrYnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTI4LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOCxcclxuICAgICAgICAgICAgZm9udENvbG9yOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNTAsXHJcbiAgICAgICAgICAgIGNvcm5lclJhZGl1czogNjQsXHJcbiAgICAgICAgICAgIGZpbGw6ICdyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSknLFxyXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjYWFhJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKDMpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDEyKSxcclxuXHJcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIG9ucHVzaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGFyZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0ZXh0ID0gZm9ybWF0LmNhbGwoJ1Njb3JlOiB7MH1cXG57MX0nLCBwYXJhbXMuc2NvcmUsIG1lc3NhZ2UpO1xyXG4gICAgICAvLyB2YXIgdGV4dCA9ICdTY29yZTogezB9XFxuezF9Jy5mb3JtYXQocGFyYW1zLnNjb3JlLCBtZXNzYWdlKTtcclxuICAgICAgdmFyIHVybCA9IFR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgIGhhc2h0YWdzOiBwYXJhbXMuaGFzaHRhZ3MsXHJcbiAgICAgICAgdXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICB9KTtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCAnc2hhcmUgd2luZG93JywgJ3dpZHRoPTQ4MCwgaGVpZ2h0PTMyMCcpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5SZXN1bHRTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBzY29yZTogMTYsXHJcblxyXG4gIG1lc3NhZ2U6ICd0aGlzIGlzIHBoaW5hLmpzIHByb2plY3QuJyxcclxuICBoYXNodGFnczogJ3BoaW5hX2pzLGdhbWUsamF2YXNjcmlwdCcsXHJcbiAgdXJsOiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbiAmJiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbi5ocmVmLFxyXG5cclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDIwMCwgODAlLCA2NCUpJyxcclxuICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOODh+ODleOCqeODq+ODiOOBrmFpbiBjbGFzc1xyXG4gKi9cclxuY2xhc3MgRGVmYXVsdE1haW5TY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBNYWluU2NlbmUnKTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIOOCr+ODqeOCueOBjHBoaW5hLmRlZmluZeOBq+OCiOOBo+OBpuWumue+qeOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmVxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSDjgq/jg6njgrnlkI3jgIJwaGluYS5nYW1lW2NsYXNzTmFtZV3jgaflrprnvqnjgZXjgozjgabjgYTjgovjgYvjgoLoqr/jgbnjgotcclxuICogQHJldHVybiB7c3RyaW5nfGJvb2xlYW59IOWumue+qeOBleOCjOOBpuOCjOOBsOOBneOBruOBvuOBvuOCr+ODqeOCueWQjeaWh+Wtl+WIl+OCkui/lOOBmVxyXG4gKi9cclxuZnVuY3Rpb24gaXNHYW1lQ2xhc3NEZWZpbmVkKGNsYXNzTmFtZSkge1xyXG4gIGlmIChcclxuICAgIHR5cGVvZiBwaGluYSQxLnVzaW5nKGNsYXNzTmFtZSkgPT09ICdmdW5jdGlvbidcclxuICAgIHx8IHR5cGVvZiBwaGluYSQxLnVzaW5nKCdwaGluYS5nYW1lLicgKyBjbGFzc05hbWUpID09PSAnZnVuY3Rpb24nXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLkdhbWVBcHBcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5DYW52YXNBcHBcclxuICovXHJcbmNsYXNzIEdhbWVBcHAgZXh0ZW5kcyBDYW52YXNBcHAge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHtcclxuICAgICAgc3RhcnRMYWJlbDogJ3RpdGxlJyxcclxuICAgIH0pO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHN0YXJ0TGFiZWwgPSBvcHRpb25zLnN0YXJ0TGFiZWwgfHwgJ3RpdGxlJztcclxuXHJcbiAgICB2YXIgc2NlbmVzID0gb3B0aW9ucy5zY2VuZXMgfHwgW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJTcGxhc2hTY2VuZVwiKSB8fCBTcGxhc2hTY2VuZSxcclxuICAgICAgICBsYWJlbDogJ3NwbGFzaCcsXHJcbiAgICAgICAgbmV4dExhYmVsOiAndGl0bGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJUaXRsZVNjZW5lXCIpIHx8IFRpdGxlU2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICd0aXRsZScsXHJcbiAgICAgICAgbmV4dExhYmVsOiAnbWFpbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGlzR2FtZUNsYXNzRGVmaW5lZChcIk1haW5TY2VuZVwiKSB8fCBEZWZhdWx0TWFpblNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAnbWFpbicsXHJcbiAgICAgICAgbmV4dExhYmVsOiAncmVzdWx0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiUmVzdWx0U2NlbmVcIikgfHwgUmVzdWx0U2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICdyZXN1bHQnLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ3RpdGxlJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgc2NlbmVzID0gZWFjaC5jYWxsKHNjZW5lcywgZnVuY3Rpb24ocykge1xyXG4gICAgICBzLmFyZ3VtZW50cyA9IHMuYXJndW1lbnRzIHx8IG9wdGlvbnM7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc2NlbmUgPSBuZXcgTWFuYWdlclNjZW5lKHtcclxuICAgICAgc3RhcnRMYWJlbDogc3RhcnRMYWJlbCxcclxuICAgICAgc2NlbmVzOiBzY2VuZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5hc3NldHMpIHtcclxuICAgICAgLy8g44Ot44O844OH44Kj44Oz44Kw77yaZXNt54mI44Gn44Gv54us6Ieq44GuTG9hZGluZ1NjZW5l44Gv44Kq44OX44K344On44Oz44Gn5rih44Gb44KL44KI44GG44Gr44GZ44KLXHJcblxyXG4gICAgICB2YXIgbG9hZGluZ09wdGlvbnMgPSAkZXh0ZW5kLmNhbGwoe30sIG9wdGlvbnMsIHtcclxuICAgICAgLy8gdmFyIGxvYWRpbmdPcHRpb25zID0gKHt9KS4kZXh0ZW5kKG9wdGlvbnMsIHtcclxuICAgICAgICBleGl0VHlwZTogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyDjgrDjg63jg7zjg5Djg6vlrprnvqnjga5Mb2FkaW5nU2NlbmXjgpLmjqLjgZnvvIjlvpPmnaXvvIlcclxuICAgICAgLy8gLT4g44Gq44GR44KM44Gw44Kq44OX44K344On44Oz44KS44OB44Kn44OD44KvIFxyXG4gICAgICAvLyAtPiDjgZPjgozjgoLjgarjgZHjgozjgbDjg4fjg5Xjgqnjg6vjg4jjga5Mb2FkaW5nU2NlbmXjgpLkvb/jgYZcclxuICAgICAgdmFyIGRlZmluZWRMb2FkaW5nQ2xhc3MgPSBwaGluYSQxLnVzaW5nKFwiTG9hZGluZ1NjZW5lXCIpIHx8IHBoaW5hJDEudXNpbmcoXCJwaGluYS5nYW1lLkxvYWRpbmdTY2VuZVwiKTtcclxuICAgICAgdmFyIGxvYWRpbmcgPSAodHlwZW9mIGRlZmluZWRMb2FkaW5nQ2xhc3MgPT09ICdmdW5jdGlvbicpIFxyXG4gICAgICAgID8gZGVmaW5lZExvYWRpbmdDbGFzcyhsb2FkaW5nT3B0aW9ucylcclxuICAgICAgICA6IChvcHRpb25zLmxvYWRpbmdTY2VuZSAhPSBudWxsKVxyXG4gICAgICAgICAgPyBuZXcgb3B0aW9ucy5sb2FkaW5nU2NlbmUobG9hZGluZ09wdGlvbnMpIFxyXG4gICAgICAgICAgOiBuZXcgTG9hZGluZ1NjZW5lKGxvYWRpbmdPcHRpb25zKVxyXG4gICAgICA7XHJcbiAgICAgIHRoaXMucmVwbGFjZVNjZW5lKGxvYWRpbmcpO1xyXG5cclxuICAgICAgbG9hZGluZy5vbmxvYWRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucmVwbGFjZVNjZW5lKHNjZW5lKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xyXG4gICAgICAgICAgdGhpcy5fZW5hYmxlRGVidWdnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJlcGxhY2VTY2VuZShzY2VuZSk7XHJcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlRGVidWdnZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiHquWLleOBp+ODneODvOOCuuOBmeOCi1xyXG4gICAgLy8gZXNt54mI44Gn44Gv54us6Ieq44Gu44Od44O844K644K344O844Oz44Gv44Kq44OX44K344On44Oz44Gn5rih44GZXHJcbiAgICAvLyDlvJXmlbDjgYzmuKHjgZvjgarjgYTjga7jga/lhYPjgYvjgolcclxuICAgIGlmIChvcHRpb25zLmF1dG9QYXVzZSkge1xyXG4gICAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRlZmluZWRQYXVzZVNjZW5lID0gcGhpbmEkMS51c2luZyhcInBoaW5hLmdhbWUuUGF1c2VTY2VuZVwiKTtcclxuICAgICAgICB2YXIgcGF1c2VTY2VuZSA9ICh0eXBlb2YgZGVmaW5lZFBhdXNlU2NlbmUgPT09ICdmdW5jdGlvbicpIFxyXG4gICAgICAgICAgPyBkZWZpbmVkUGF1c2VTY2VuZSgpIFxyXG4gICAgICAgICAgOiAob3B0aW9ucy5wYXVzZVNjZW5lKSBcclxuICAgICAgICAgICAgPyBuZXcgb3B0aW9ucy5wYXVzZVNjZW5lKCkgXHJcbiAgICAgICAgICAgIDogbmV3IFBhdXNlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnB1c2hTY2VuZShwYXVzZVNjZW5lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZW5hYmxlRGVidWdnZXIoKSB7XHJcbiAgICBpZiAodGhpcy5ndWkpIHJldHVybiA7XHJcblxyXG4gICAgdGhpcy5lbmFibGVEYXRHVUkoZnVuY3Rpb24oZ3VpKSB7XHJcbiAgICAgIHZhciBmID0gZ3VpLmFkZEZvbGRlcignc2NlbmVzJyk7XHJcbiAgICAgIHZhciBmdW5jcyA9IHt9O1xyXG4gICAgICB0aGlzLnJvb3RTY2VuZS5zY2VuZXMuZm9yRWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAvLyB0aGlzLnJvb3RTY2VuZS5zY2VuZXMuZWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAgIGZ1bmNzW3NjZW5lLmxhYmVsXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5yb290U2NlbmUucmVwbGFjZVNjZW5lKHNjZW5lLmxhYmVsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3NjZW5lcy5sZW5ndGgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gc2NlbmU7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgZm9ySW4uY2FsbChmdW5jcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBmdW5jcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgZi5hZGQoZnVuY3MsIGtleSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmLm9wZW4oKTtcclxuXHJcbiAgICAgIHRoaXMuZ3VpID0gZ3VpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuQ291bnRTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgQ291bnRTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIENvdW50U2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZShwaGluYS5nYW1lLkNvdW50U2NlbmUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICBmaWxsOiBvcHRpb25zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IG9wdGlvbnMuZm9udFNpemUsXHJcbiAgICAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuY2VudGVyKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuY291bnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICB0aGlzLmNvdW50TGlzdCA9IGNsb25lLmNhbGwob3B0aW9ucy5jb3VudCkucmV2ZXJzZSgpO1xyXG4gICAgICAvLyB0aGlzLmNvdW50TGlzdCA9IG9wdGlvbnMuY291bnQuY2xvbmUoKS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jb3VudExpc3QgPSByYW5nZS5jYWxsKFtdLCAxLCBvcHRpb25zLmNvdW50KzEpO1xyXG4gICAgICAvLyB0aGlzLmNvdW50TGlzdCA9IEFycmF5LnJhbmdlKDEsIG9wdGlvbnMuY291bnQrMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmNvdW50TGlzdC5sZW5ndGg7XHJcbiAgICB0aGlzLmV4aXRUeXBlID0gb3B0aW9ucy5leGl0VHlwZTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUNvdW50KCkge1xyXG4gICAgdmFyIGVuZEZsYWcgPSB0aGlzLmNvdW50ZXIgPD0gMDtcclxuICAgIHZhciBpbmRleCA9IC0tdGhpcy5jb3VudGVyO1xyXG5cclxuICAgIHRoaXMubGFiZWwudGV4dCA9IHRoaXMuY291bnRMaXN0W2luZGV4XTtcclxuXHJcbiAgICB0aGlzLmxhYmVsLnNjYWxlLnNldCgxLCAxKTtcclxuICAgIHRoaXMubGFiZWwudHdlZW5lclxyXG4gICAgICAuY2xlYXIoKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHNjYWxlWDogMSxcclxuICAgICAgICBzY2FsZVk6IDEsXHJcbiAgICAgICAgYWxwaGE6IDEsXHJcbiAgICAgIH0sIDI1MClcclxuICAgICAgLndhaXQoNTAwKVxyXG4gICAgICAudG8oe1xyXG4gICAgICAgIHNjYWxlWDogMS41LFxyXG4gICAgICAgIHNjYWxlWTogMS41LFxyXG4gICAgICAgIGFscGhhOiAwLjBcclxuICAgICAgfSwgMjUwKVxyXG4gICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgIHRoaXMuZmxhcmUoJ2ZpbmlzaCcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZXhpdFR5cGUgPT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5wb3BTY2VuZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Db3VudFNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIGNvdW50OiAzLFxyXG5cclxuICB3aWR0aDogNjQwLFxyXG4gIGhlaWdodDogOTYwLFxyXG5cclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgZm9udFNpemU6IDE2NCxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUwLCA1MCwgNTAsIDEpJyxcclxuXHJcbiAgZXhpdFR5cGU6ICdhdXRvJyxcclxufTtcclxuXHJcbmV4cG9ydCB7IEFjY2VsZXJvbWV0ZXIsIEFjY2Vzc29yeSwgQWpheCwgQXNzZXQsIEFzc2V0TG9hZGVyLCBBc3NldE1hbmFnZXIsIEJhc2VBcHAsIEJ1dHRvbiwgQ2FudmFzLCBDYW52YXNBcHAsIENhbnZhc0xheWVyLCBDYW52YXNSZW5kZXJlciwgQ2hhbmdlRGlzcGF0Y2hlciwgQ2lyY2xlLCBDaXJjbGVHYXVnZSwgQ2lyY2xlU2hhcGUsIENvbGxpc2lvbiwgQ29sb3IsIENvdW50U2NlbmUsIERpc3BsYXlFbGVtZW50LCBEaXNwbGF5U2NlbmUsIERvbUFwcCwgRHJhZ2dhYmxlLCBFbGVtZW50LCBFdmVudERpc3BhdGNoZXIsIEZpbGUsIEZsaWNrYWJsZSwgRmxvdywgRm9udCwgRnJhbWVBbmltYXRpb24sIEdhbWVBcHAsIEdhbWVwYWRNYW5hZ2VyLCBHYXVnZSwgR3JpZCwgSGVhcnRTaGFwZSwgSW5wdXQsIEludGVyYWN0aXZlLCBLZXlib2FyZCwgTGFiZWwsIExhYmVsQXJlYSwgTGF5ZXIsIExvYWRpbmdTY2VuZSwgTWFuYWdlclNjZW5lLCBNYXRyaXgzMywgTW91c2UsIE9iamVjdDJELCBQYXRoU2hhcGUsIFBhdXNlU2NlbmUsIFBoeXNpY2FsLCBQbGFpbkVsZW1lbnQsIFBvbHlnb25TaGFwZSwgUXVlcnlTdHJpbmcsIFJhbmRvbSwgUmVjdCwgUmVjdGFuZ2xlU2hhcGUsIFJlc3VsdFNjZW5lLCBTY2VuZSwgU2NyaXB0LCBTaGFwZSwgU291bmRNYW5hZ2VyLCBTcGxhc2hTY2VuZSwgU3ByaXRlLCBTcHJpdGVTaGVldCwgU3RhclNoYXBlLCBTdXBwb3J0LCBUZXh0dXJlLCBUaHJlZUxheWVyLCBUaWNrZXIsIFRpdGxlU2NlbmUsIFRvdWNoLCBUb3VjaExpc3QsIFRyaWFuZ2xlU2hhcGUsIFR3ZWVuLCBUd2VlbmVyLCBUd2l0dGVyLCBVcGRhdGVyLCBWZWN0b3IyLCBWZWN0b3IzLCBXYXZlLCBwaGluYSQxIGFzIHBoaW5hIH07XHJcbiIsImV4cG9ydCBjb25zdCBBc3NldENhdGFsb2cgPSB7XG4gIGltYWdlOiB7XG4gICAgXCJ0b21hcGl5b1wiOiBcIi4vYXNzZXRzL2ltYWdlcy90b21hcGl5by5wbmdcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIixcbiAgICBcInR1YmUxXCI6IFwiLi9hc3NldHMvaW1hZ2VzL3R1YmUxLnBuZ1wiLFxuICAgIFwidHViZTJcIjogXCIuL2Fzc2V0cy9pbWFnZXMvdHViZTIucG5nXCIsXG4gIH1cbn07IiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyAkc2FmZSwgdGltZXMgfSBmcm9tIFwiLi4vZXh0ZW5zaW9ucy9VdGlsc1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIENvdW50RG93biBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIHsgc3RhcnRDb3VudDogMywgaW50ZXJ2YWw6IDEwMDAsIHN0YXJ0U2NhbGU6IDEsIGVuZFNjYWxlOiAwLjUgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLmNvdW50ID0gb3B0aW9ucy5zdGFydENvdW50O1xuXG4gICAgY29uc3QgbGFiZWxPcHRpb25zID0ge1xuICAgICAgdGV4dDogYCR7dGhpcy5jb3VudH1gLFxuICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgZm9udFNpemU6IDEyOCxcbiAgICB9XG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChsYWJlbE9wdGlvbnMpXG4gICAgICAuc2V0U2NhbGUob3B0aW9ucy5zdGFydFNjYWxlKVxuICAgICAgLmFkZENoaWxkVG8odGhpcyk7XG5cbiAgICB0aGlzLmxhYmVsLnR3ZWVuZXIuY2xlYXIoKTtcbiAgICB0aW1lcy5jYWxsKG9wdGlvbnMuc3RhcnRDb3VudCwgaSA9PiB7XG4gICAgICB0aGlzLmxhYmVsLnR3ZWVuZXJcbiAgICAgICAgLnRvKHsgc2NhbGVYOiBvcHRpb25zLmVuZFNjYWxlLCBzY2FsZVk6IG9wdGlvbnMuZW5kU2NhbGUsIGFscGhhOiAwIH0sIG9wdGlvbnMuaW50ZXJ2YWwgKVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICAgIGlmICh0aGlzLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC50ZXh0ID0gYCR7dGhpcy5jb3VudH1gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnRleHQgPSBcIlNUQVJUXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAud2FpdCgxMDApXG4gICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxhYmVsLmFscGhhID0gMS4wO1xuICAgICAgICAgIHRoaXMubGFiZWwuc2V0U2NhbGUob3B0aW9ucy5zdGFydFNjYWxlKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLmxhYmVsLnR3ZWVuZXJcbiAgICAgIC53YWl0KDEwMDApXG4gICAgICAuY2FsbCgoKSA9PiB0aGlzLmZsYXJlKCdjb3VudGRvd25fZW5kJykpXG4gICAgICAudG8oeyBhbHBoYTogMCB9LCBvcHRpb25zLmludGVydmFsIC8gMiApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwbGF5RWxlbWVudCwgU3ByaXRlLCBWZWN0b3IyIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCBleHRlbmRzIERpc3BsYXlFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMudGltZSA9IDA7XG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsICgpID0+IHRoaXMudGltZSsrKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ByaXRlLCBWZWN0b3IyIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKFwidG9tYXBpeW9cIiwgNjQsIDY0KVxuICAgICAgLmFkZENoaWxkVG8odGhpcylcbiAgICAgIC5zZXRGcmFtZUluZGV4KDEpO1xuXG4gICAgdGhpcy5hbmltYXRpb25TZXEgPSBbMSwgMiwgM107XG4gICAgdGhpcy5hbmltYXRpb25TZXFJbmRleCA9IDA7XG5cbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XG4gICAgdGhpcy5qdW1wUG93ZXIgPSAxMDtcblxuICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKCdzdGFydCcsICgpID0+IHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgICB0aGlzLmp1bXAoMTUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKGFwcCkge1xuICAgIGlmICh0aGlzLnRpbWUgJSA1ID09IDApIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU2VxSW5kZXgrKztcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvblNlcUluZGV4ID09IHRoaXMuYW5pbWF0aW9uU2VxLmxlbmd0aCkgdGhpcy5hbmltYXRpb25TZXFJbmRleCA9IDA7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFuaW1hdGlvblNlcVt0aGlzLmFuaW1hdGlvblNlcUluZGV4XTtcbiAgICAgIHRoaXMuc3ByaXRlLnNldEZyYW1lSW5kZXgoaWR4KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTdGFydCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eSk7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IDAuNDk7XG5cbiAgICBpZiAodGhpcy55ID4gNDgwKSB7XG4gICAgICB0aGlzLnkgPSA0ODA7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICB0aGlzLmZsYXJlKFwiZGVhZFwiKTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGltZSsrO1xuICB9XG5cbiAganVtcChwb3dlcikge1xuICAgIHBvd2VyID0gcG93ZXIgfHwgdGhpcy5qdW1wUG93ZXI7XG4gICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHJldHVybjtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy5qdW1wUG93ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNwcml0ZSwgVmVjdG9yMiB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7ICRzYWZlIH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvVXRpbHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBUdWJlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgeyBnYXA6IDEwMCB9KTtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnVwcGVyID0gbmV3IFNwcml0ZShcInR1YmUxXCIpXG4gICAgICAuc2V0T3JpZ2luKDAuNSwgMS4wKVxuICAgICAgLnNldFBvc2l0aW9uKDAsIC1vcHRpb25zLmdhcCAvIDIpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzKTtcbiAgICB0aGlzLmJvdHRvbSA9IG5ldyBTcHJpdGUoXCJ0dWJlMlwiKVxuICAgICAgLnNldE9yaWdpbigwLjUsIDAuMClcbiAgICAgIC5zZXRQb3NpdGlvbigwLCBvcHRpb25zLmdhcCAvIDIpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbWV0aG9kICAkZXh0ZW5kXG4gKiDku5bjga7jg6njgqTjg5bjg6njg6rjgajnq7blkIjjgZfjgaHjgoPjgYbjga7jgacgZXh0ZW5kIC0+ICRleHRlbmQg44Go44GX44G+44GX44GfXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZXh0ZW5kKCkge1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4gIFxuLyoqXG4gKiBAbWV0aG9kICAkc2FmZVxuICog5a6J5YWo5ouh5by1XG4gKiDkuIrmm7jjgY3jgZfjgarjgYRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzYWZlKHNvdXJjZSkge1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICBpZiAodGhpc1twcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkgdGhpc1twcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfSwgdGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEBtZXRob2QgdGltZXNcbiAqIDAg44GL44KJ6Ieq5YiG6Ieq6Lqr44Gu5pWwLTHjgb7jgafjgIHjgqvjgqbjg7Pjgr/jgpLjgqTjg7Pjgq/jg6rjg6Hjg7Pjg4jjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogICAgIGFyciA9IFtdO1xuICogICAgICg1KS50aW1lcyhmdW5jdGlvbihpKXtcbiAqICAgICAgIGFyci5wdXNoKGkpO1xuICogICAgIH0pOyAvLyA9PiBbMCwgMSwgMiwgMywgNF1cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSDplqLmlbDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/oh6rliIboh6rouqvjgIJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzKGZuLCBzZWxmKSB7XG4gIHNlbGYgPSBzZWxmIHx8IHRoaXM7XG4gIGZvciAodmFyIGk9MDsgaTx0aGlzOyArK2kpIHtcbiAgICBmbi5jYWxsKHNlbGYsIGksIHRoaXMpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuICAiLCJpbXBvcnQgeyBwaGluYSwgQ2FudmFzQXBwLCBEaXNwbGF5U2NlbmUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyBTY2VuZUZsb3cgfSBmcm9tIFwiL3NyYy9zY2VuZXMvU2NlbmVGbG93XCJcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc29sZS5sb2coJyMjIyMjIERldmVsb3BtZW50IG1vZGUgIyMjIyMnKTtcbn1cblxuRGlzcGxheVNjZW5lLmRlZmF1bHRzLndpZHRoID0gOTYwO1xuRGlzcGxheVNjZW5lLmRlZmF1bHRzLmhlaWdodCA9IDY0MDtcblxucGhpbmEubWFpbigoKT0+IHtcbiAgY29uc3QgYXBwT3B0aW9uID0ge1xuICAgIHdpZHRoOiA5NjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZnBzOiA2MCxcbiAgfTtcbiAgY29uc3QgYXBwID0gbmV3IENhbnZhc0FwcChhcHBPcHRpb24pO1xuICBhcHAucmVwbGFjZVNjZW5lKG5ldyBTY2VuZUZsb3coKSk7XG4gIGFwcC5ydW4oKTtcbn0pO1xuIiwiaW1wb3J0IHsgRGlzcGxheUVsZW1lbnQsIERpc3BsYXlTY2VuZSwgU3ByaXRlIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgQ291bnREb3duIH0gZnJvbSBcIi4uL2VsZW1lbnRzL0NvdW50RG93blwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL1BsYXllclwiO1xuaW1wb3J0IHsgVHViZSB9IGZyb20gXCIuLi9lbGVtZW50cy9UdWJlXCI7XG5pbXBvcnQgeyAkc2FmZSB9IGZyb20gXCIuLi9leHRlbnNpb25zL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgeyBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgLy/jg5Djg4Pjgq/jgrDjg6njgqbjg7Pjg4lcbiAgICB0aGlzLmJnID0gbmV3IFNwcml0ZShcImJhY2tncm91bmRcIikuYWRkQ2hpbGRUbyh0aGlzKS5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgRGlzcGxheUVsZW1lbnQoKS5hZGRDaGlsZFRvKHRoaXMpO1xuICAgIHRoaXMuZm9yZWdyb3VuZCA9IG5ldyBEaXNwbGF5RWxlbWVudCgpLmFkZENoaWxkVG8odGhpcyk7XG5cbiAgICAvL+ODl+ODrOOCpOODpOODvFxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpXG4gICAgICAuc2V0UG9zaXRpb24odGhpcy53aWR0aCAvIDQsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hZGRDaGlsZFRvKHRoaXMuZm9yZWdyb3VuZCk7XG5cbiAgICB0aGlzLnBsYXllci5vbignZGVhZCcsICgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZW92ZXIoKTtcbiAgICB9KTtcblxuICAgIC8v44Kr44Km44Oz44OI44OA44Km44OzXG4gICAgdGhpcy5jb3VudERvd24gPSBuZXcgQ291bnREb3duKClcbiAgICAgIC5zZXRQb3NpdGlvbih0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKVxuICAgICAgLmFkZENoaWxkVG8odGhpcyk7XG5cbiAgICB0aGlzLmNvdW50RG93bi5vbignY291bnRkb3duX2VuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllci5mbGFyZSgnc3RhcnQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShhcHApIHtcbiAgICBpZiAoIXRoaXMuaXNTdGFydCkgcmV0dXJuO1xuICAgIGlmIChhcHAucG9pbnRlci5nZXRQb2ludGluZygpKSB7XG4gICAgICAvLyB0aGlzLnBsYXllci5zZXRQb3NpdGlvbihhcHAucG9pbnRlci54LCBhcHAucG9pbnRlci55KVxuICAgICAgdGhpcy5wbGF5ZXIuanVtcCgpO1xuICAgIH1cblxuICAgIGlmKHRoaXMudGltZSAlIDEyMCkgdGhpcy5lbnRlclR1YmUoKTtcblxuICAgIHRoaXMudGltZSsrO1xuICB9XG5cbiAgZW50ZXJUdWJlKCkge1xuICAgIGNvbnN0IHR1YmUgPSBuZXcgVHViZSgpO1xuICAgIHR1YmUuc2V0UG9zaXRpb24odGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMikuYWRkQ2hpbGRUbyh0aGlzLmJhY2tncm91bmQpO1xuICB9XG5cbiAgZ2FtZW92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gIH1cbn1cblxuLy9NYW5hZ2VyU2NlbmXjgafkvb/nlKjlh7rmnaXjgovmp5jjgavjgZnjgovngrpcbi8vIHdpbmRvdy5NYWluU2NlbmUgPSBNYWluU2NlbmU7XG4iLCJpbXBvcnQgeyBMb2FkaW5nU2NlbmUsIE1hbmFnZXJTY2VuZSwgRGlzcGxheVNjZW5lLCBUaXRsZVNjZW5lIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgQXNzZXRDYXRhbG9nIH0gZnJvbSBcIi4uL2Fzc2V0cy9Bc3NldENhdGFsb2dcIjtcbmltcG9ydCB7IE1haW5TY2VuZSB9IGZyb20gXCIuL01haW5TY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVGbG93IGV4dGVuZHMgTWFuYWdlclNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc3RhcnRMYWJlbDogXCJsb2FkaW5nXCIsXG4gICAgICBzY2VuZXM6IFt7XG4gICAgICAgIGxhYmVsOiBcImxvYWRpbmdcIixcbiAgICAgICAgY2xhc3NOYW1lOiBMb2FkaW5nU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgICBhc3NldHM6IEFzc2V0Q2F0YWxvZyxcbiAgICAgICAgfSxcbiAgICAgIH0se1xuICAgICAgICBsYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICBjbGFzc05hbWU6IFRpdGxlU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJtYWluXCIsXG4gICAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICAgIHRpdGxlOiBcIlBISU5BUFkgQklSRCFcIlxuICAgICAgICB9LFxuICAgICAgfSx7XG4gICAgICAgIGxhYmVsOiBcIm1haW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBNYWluU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9