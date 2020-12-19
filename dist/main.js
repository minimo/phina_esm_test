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
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/elements/GameObject.js");




class Player extends _GameObject__WEBPACK_IMPORTED_MODULE_2__.GameObject {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { width: 64, height: 64 });
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

    if (this.y > 640) {
      this.y = 640;
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
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, {
      width: 52,
      height: 320,
      isBottom: false,
    });
    super(options);
    this.sprite = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite(`tube${options.isBottom ? "2" : "1"}`).addChildTo(this);
    if (options.isBottom) {
      this.setOrigin(0.5, 0.0);
    } else {
      this.setOrigin(0.5, 1.0);
    }
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
    this.tubes = [];
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

    if(this.time % 120 == 0) this.enterTube();

    this.tubes.forEach(tube => {
      tube.x -= 3;
      if (tube.x < -50) {
        tube.remove();
      }
      if (tube.hitTestElement(this.player)) {
        this.player.flare('dead');
      }
    });


    this.time++;
  }

  enterTube() {
    const gap = 300;
    const offset = 0;
    const tube1 = new _elements_Tube__WEBPACK_IMPORTED_MODULE_3__.Tube({ isBottom: false });
    tube1.setPosition(this.width + 30, this.height / 2 - tube1.height / 2 - gap / 2 + offset).addChildTo(this.background);
    const tube2 = new _elements_Tube__WEBPACK_IMPORTED_MODULE_3__.Tube({ isBottom: true });
    tube2.setPosition(this.width + 30, this.height / 2 + tube2.height / 2 + gap / 2 + offset).addChildTo(this.background);
    this.tubes.push(tube1);
    this.tubes.push(tube2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL25vZGVfbW9kdWxlcy9waGluYS5qcy9idWlsZC9waGluYS5lc20uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvYXNzZXRzL0Fzc2V0Q2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9lbGVtZW50cy9Db3VudERvd24uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9lbGVtZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvZWxlbWVudHMvVHViZS5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9leHRlbnNpb25zL1V0aWxzLmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL3NjZW5lcy9NYWluU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvc2NlbmVzL1NjZW5lRmxvdy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9zdGFydHVw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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNI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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELDJEQUEyRDtBQUMzRCwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7OztBQUdKOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEU7O0FBRU4sSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQywrQkFBK0I7QUFDekUsK0NBQStDLG1DQUFtQztBQUNsRiw2Q0FBNkMsaUNBQWlDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBLFlBQVksc0JBQXNCOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQyxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjs7QUFFQSxnQ0FBZ0MsOEJBQThCO0FBQzlELCtCQUErQiw2QkFBNkI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRCwrQ0FBK0MsRUFBRTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVgsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUIsOEJBQThCOztBQUUvQyxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFO0FBQ3hFLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDBCQUEw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QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUMsb0JBQW9CLHFCQUFxQjs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUVBQXFFLHFDQUFxQztBQUMxRztBQUNBO0FBQ0EsMENBQTBDLCtGQUErRjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsVUFBVSxFQUFFO0FBQ1o7QUFDQSxhQUFhO0FBQ2IsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsNEJBQTRCLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTTtBQUNuRCxtQkFBbUIsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLDBCQUEwQiwwQ0FBMEMsR0FBRyw4Q0FBOEMsR0FBRyx5Q0FBeUM7QUFDaks7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QixjQUFjLElBQUk7QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0Isb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esc0NBQXNDLEVBQUUsR0FBRyxFQUFFO0FBQzdDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBwaGluYS5qcyB2MC4yLjNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgcGhpXHJcbiAqL1xyXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5PYmplY3RcclxuICogT2JqZWN044Gu5ouh5by1XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIOmWouaVsOOCkui/veWKoFxyXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBrZXkgbmFtZVxyXG4gKiBAcGFyYW0gICB7RnVuY3Rpb259IGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiAkbWV0aG9kKG5hbWUsIGZuKSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcclxuICAgIHZhbHVlOiBmbixcclxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgd3JpdGFibGU6IHRydWVcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgYWNjZXNzb3JcclxuICog44Ki44Kv44K744OD44K1KOOCu+ODg+OCv+ODvC/jgrLjg4Pjgr/jg7wp44KS5a6a576p44GZ44KLXHJcbiAqL1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoXCJhY2Nlc3NvclwiLCBmdW5jdGlvbihuYW1lLCBwYXJhbSkge1xyXG5mdW5jdGlvbiBhY2Nlc3NvcihuYW1lLCBwYXJhbSkge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCB7XHJcbiAgICBzZXQ6IHBhcmFtW1wic2V0XCJdLFxyXG4gICAgZ2V0OiBwYXJhbVtcImdldFwiXSxcclxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBmb3JJblxyXG4gKiDjgqrjg5bjgrjjgqfjgq/jg4jnlKjjg6vjg7zjg5flh6bnkIZcclxuICovXHJcbmZ1bmN0aW9uIGZvckluKGZuLCBzZWxmKSB7XHJcbiAgc2VsZiA9IHNlbGYgfHwgdGhpcztcclxuXHJcbiAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XHJcbiAgICB2YXIgdmFsdWUgPSB0aGlzW2tleV07XHJcblxyXG4gICAgZm4uY2FsbChzZWxmLCBrZXksIHZhbHVlLCBpbmRleCk7XHJcbiAgfSwgdGhpcyk7XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCAgJGV4dGVuZFxyXG4gKiDku5bjga7jg6njgqTjg5bjg6njg6rjgajnq7blkIjjgZfjgaHjgoPjgYbjga7jgacgZXh0ZW5kIC0+ICRleHRlbmQg44Go44GX44G+44GX44GfXHJcbiAqL1xyXG5mdW5jdGlvbiAkZXh0ZW5kKCkge1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoXCIkZXh0ZW5kXCIsIGZ1bmN0aW9uKCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgICB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfSwgdGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kICAkc2FmZVxyXG4gKiDlronlhajmi6HlvLVcclxuICog5LiK5pu444GN44GX44Gq44GEXHJcbiAqL1xyXG5mdW5jdGlvbiAkc2FmZShzb3VyY2UpIHtcclxuLy8gT2JqZWN0LnByb3RvdHlwZS4kbWV0aG9kKFwiJHNhZmVcIiwgZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XHJcbiAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfSwgdGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kICR3YXRjaFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFjayAgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiAkd2F0Y2goa2V5LCBjYWxsYmFjaykge1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoJyR3YXRjaCcsIGZ1bmN0aW9uKGtleSwgY2FsbGJhY2spIHtcclxuICB2YXIgdGFyZ2V0ID0gdGhpcztcclxuICB2YXIgZGVzY3JpcHRvciA9IG51bGw7XHJcblxyXG4gIHdoaWxlKHRhcmdldCkge1xyXG4gICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xyXG4gICAgaWYgKGRlc2NyaXB0b3IpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIC8vIOOBmeOBp+OBq+OCouOCr+OCu+ODg+OCteODvOOBqOOBl+OBpuWtmOWcqOOBmeOCi+WgtOWQiFxyXG4gIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAvLyDjg4fjg7zjgr/jg4fjgqPjgrnjgq/jg6rjg5fjgr/jga7loLTlkIhcclxuICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIHRlbXBLZXkgPSAnX18nICsga2V5O1xyXG4gICAgICB2YXIgdGVtcFZhbHVlID0gdGhpc1trZXldO1xyXG5cclxuICAgICAgdGhpc1t0ZW1wS2V5XSA9IHRlbXBWYWx1ZTtcclxuXHJcbiAgICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAgIC8vIHRoaXMuYWNjZXNzb3Ioa2V5LCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzW3RlbXBLZXldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICB2YXIgb2xkID0gdGhpc1t0ZW1wS2V5XTtcclxuICAgICAgICAgIHRoaXNbdGVtcEtleV0gPSB2O1xyXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2LCBvbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8g44Ki44Kv44K744K144OH44Kj44K544Kv44Oq44OX44K/44Gu5aC05ZCIXHJcbiAgICBlbHNlIHtcclxuICAgICAgYWNjZXNzb3IuY2FsbCh0aGlzLCBrZXksIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHZhciBvbGQgPSBkZXNjcmlwdG9yLmdldC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgdiwgb2xkKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgYWNjZXNza2V5ID0gJ19fJyArIGtleTtcclxuXHJcbiAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1thY2Nlc3NrZXldO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICB2YXIgb2xkID0gdGhpc1thY2Nlc3NrZXldO1xyXG4gICAgICAgIHRoaXNbYWNjZXNza2V5XSA9IHY7XHJcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2LCBvbGQpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBhcnJheS5qc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZmlyc3RcclxuICog5pyA5Yid44Gu6KaB57SgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbNiwgNSwgMiwgMywgMSwgNF07XHJcbiAqICAgICBhcnIuZmlyc3Q7IC8vID0+IDZcclxuICovXHJcbmNvbnN0IGZpcnN0ID0ge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuYWNjZXNzb3IoXCJmaXJzdFwiLCB7XHJcbiAgXCJnZXRcIjogZnVuY3Rpb24oKSAgIHsgcmV0dXJuIHRoaXNbMF07IH0sXHJcbiAgXCJzZXRcIjogZnVuY3Rpb24odikgIHsgdGhpc1swXSA9IHY7IH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbGFzdFxyXG4gKiDmnIDlvozjga7opoHntKBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFs2LCA1LCAyLCAzLCAxLCA0XTtcclxuICogICAgIGFyci5sYXN0OyAvLyA9PiA0XHJcbiAqL1xyXG5jb25zdCBsYXN0ID0ge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuYWNjZXNzb3IoXCJsYXN0XCIsIHtcclxuICBcImdldFwiOiBmdW5jdGlvbigpICAgeyByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aC0xXTsgfSxcclxuICBcInNldFwiOiBmdW5jdGlvbih2KSAgeyB0aGlzW3RoaXMubGVuZ3RoLTFdID0gdjsgfVxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGF0XHJcbiAqIOaMh+WumuOBl+OBn+OCpOODs+ODh+ODg+OCr+OCueOBruimgee0oOOCkui/lOOBl+OBvuOBme+8iOODq+ODvOODl+ODu+iyoOaVsOOBruaMh+WumuWPr++8ieOAglxyXG4gKlxyXG4gKiDmt7vlrZfjgYzosqDmlbDjga7loLTlkIjjga/mnKvlsL7jgYvjgonjga7jgqrjg5Xjgrvjg4Pjg4jjgajjgb/jgarjgZfjgb7jgZnjgILmnKvlsL7jga7opoHntKDjgYwgLTEg55Wq55uu44Gr44Gq44KK44G+44GZ44CCICBcclxuICog5re75a2X44Gu57W25a++5YCk44GMIEFycmF5Lmxlbmd0aCDku6XkuIrjga7loLTlkIjjga/jg6vjg7zjg5fjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnXTtcclxuICogICAgIGFyci5hdCgwKTsgIC8vID0+ICdhJ1xyXG4gKiAgICAgYXJyLmF0KDYpOyAgLy8gPT4gJ2EnXHJcbiAqICAgICBhcnIuYXQoMTMpOyAvLyA9PiAnYidcclxuICogICAgIGFyci5hdCgtMSk7IC8vID0+ICdmJ1xyXG4gKiAgICAgYXJyLmF0KC04KTsgLy8gPT4gJ2UnXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDmt7vlrZdcclxuICogQHJldHVybiB7T2JqZWN0fSDmt7vlrZfjgafmjIflrprjgZXjgozjgZ/opoHntKBcclxuICovXHJcbmZ1bmN0aW9uIGF0KGkpIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJhdFwiLCBmdW5jdGlvbihpKSB7XHJcbiAgaSU9dGhpcy5sZW5ndGg7XHJcbiAgaSs9dGhpcy5sZW5ndGg7XHJcbiAgaSU9dGhpcy5sZW5ndGg7XHJcbiAgcmV0dXJuIHRoaXNbaV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGVyYXNlXHJcbiAqIEBjaGFpbmFibGVcclxuICog5oyH5a6a44GX44Gf44Kq44OW44K444Kn44Kv44OI44Go5LiA6Ie044GX44Gf5pyA5Yid44Gu6KaB57Sg44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIxID0gWydhJywgJ2InLCAnYicsICdjJ107XHJcbiAqICAgICBhcnIyID0gYXJyMS5lcmFzZSgnYicpOyAvLyA9PiBbJ2EnLCAnYicsICdjJ11cclxuICogICAgIGFycjEgPT09IGFycjI7ICAgICAgICAgIC8vID0+IHRydWVcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGVsbSDliYrpmaTjgZfjgZ/jgYTjgqrjg5bjgrjjgqfjgq/jg4hcclxuICovXHJcbmZ1bmN0aW9uIGVyYXNlKGVsbSkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImVyYXNlXCIsIGZ1bmN0aW9uKGVsbSkge1xyXG4gIHZhciBpbmRleCAgPSB0aGlzLmluZGV4T2YoZWxtKTtcclxuICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNsZWFyXHJcbiAqIEBjaGFpbmFibGVcclxuICog6Ieq6Lqr44KS56m644Gu6YWN5YiX44Gr44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbMSwgMiwgWzMsIDRdXTtcclxuICogICAgIGFyci5jbGVhcigpOyAvLyA9PiBbXVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXIoZGVlcCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImNsZWFyXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMubGVuZ3RoID0gMDtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgY29udGFpbnNcclxuICog5oyH5a6a44GX44Gf6KaB57Sg44GM6YWN5YiX44Gr5ZCr44G+44KM44Gm44GE44KL44GL44KS44OB44Kn44OD44Kv44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOavlOi8g+OBq+OBr+WOs+WvhuOBquWQjOWApO+8iOS4iemHjeOCpOOCs+ODvOODq+a8lOeul+WtkCA9PT0g44Gn5L2/44KP44KM44KL44Gu44Go5ZCM44GY5pa55rOV77yJ44KS55So44GE44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbNiwgNSwgMiwgMywgMSwgNF07XHJcbiAqICAgICBhcnIuY29udGFpbnMoMyk7ICAgICAvLyA9PiB0cnVlXHJcbiAqICAgICBhcnIuY29udGFpbnMoMywgNCk7ICAvLyA9PiBmYWxzZVxyXG4gKiAgICAgYXJyLmNvbnRhaW5zKDMsIC00KTsgLy8gPT4gdHJ1ZVxyXG4gKiAgICAgYXJyLmNvbnRhaW5zKFwiNlwiKTsgICAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSDjg4Hjgqfjg4Pjgq/jgZnjgovjgqrjg5bjgrjjgqfjgq/jg4hcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtmcm9tSW5kZXg9MF0g5qSc57Si44KS5aeL44KB44KL5L2N572u44CC6LKg5pWw44KS5oyH5a6a44GX44Gf5aC05ZCI44Gv5pyr5bC+44GL44KJ44Gu44Kq44OV44K744OD44OI44Go6KaL44Gq44GX44G+44GZ44CCXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOODgeOCp+ODg+OCr+OBrue1kOaenFxyXG4gKi9cclxuZnVuY3Rpb24gY29udGFpbnMoaXRlbSwgZnJvbUluZGV4KSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiY29udGFpbnNcIiwgZnVuY3Rpb24oaXRlbSwgZnJvbUluZGV4KSB7XHJcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZihpdGVtLCBmcm9tSW5kZXgpICE9IC0xO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBjbG9uZVxyXG4gKiDoh6rouqvjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFycjEgPSBbMSwgMiwgWzMsIDRdXTtcclxuICogICAgIGFycjIgPSBhcnIxLmNsb25lKCk7ICAgICAgLy8gPT4gWzEsIDIsIFszLCA0XV1cclxuICogICAgIGFycjFbMl0gPT09IGFycjJbMl07ICAgICAgLy8gPT4gdHJ1ZVxyXG4gKiAgICAgYXJyMVsyXVswXSA9IDk7XHJcbiAqICAgICBhcnIyOyAgICAgICAgICAgICAgICAgICAgIC8vID0+IFsxLCAyLCBbOSwgNF1dXHJcbiAqICAgICBhcnIxID0gWzEsIDIsIFszLCA0XV07XHJcbiAqICAgICBhcnIyID0gYXJyMS5jbG9uZSh0cnVlKTsgIC8vID0+IFsxLCAyLCBbMywgNF1dXHJcbiAqICAgICBhcnIxWzJdID09PSBhcnIyWzJdOyAgICAgIC8vID0+IGZhbHNlXHJcbiAqICAgICBhcnIxWzJdWzBdID0gOTtcclxuICogICAgIGFycjI7ICAgICAgICAgICAgICAgICAgICAgLy8gPT4gWzEsIDIsIFszLCA0XV1cclxuICpcclxuICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0g6YWN5YiX44Gu44ON44K544OI44KS44Gf44Gp44Gj44Gm6KSH6KO944GZ44KL44GL44Gp44GG44GLXHJcbiAqIEByZXR1cm4ge09iamVjdH0g5paw44GX44GE6YWN5YiXXHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9uZShkZWVwKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiY2xvbmVcIiwgZnVuY3Rpb24oZGVlcCkge1xyXG4gIGlmIChkZWVwID09PSB0cnVlKSA7XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgcmFuZ2VcclxuICogQGNoYWluYWJsZVxyXG4gKiDoh6rouqvjgpLnrYnlt67mlbDliJfvvIjkuIDlrprplpPpmpTjga7mlbTmlbDlgKTjga7liJfvvInjgajjgZfjgb7jgZnjgIJcclxuICpcclxuICogLSDlvJXmlbDjgYwx44Gk44Gu5aC05ZCI44CBMO+9nmVuZO+8iGVuZOWQq+OBvuOBmu+8ieOBruaVtOaVsOOBrumFjeWIl+OBp+OBmeOAgiAgXHJcbiAqIC0g5byV5pWw44GMMuOBpOOBruWgtOWQiOOAgXN0YXJ0772eZW5k77yIZW5k5ZCr44G+44Ga77yJ44Gu5pW05pWw44Gu6YWN5YiX44Gn44GZ44CCICBcclxuICogLSDlvJXmlbDjgYwz44Gk44Gu5aC05ZCI44CBc3RhcnTvvZ5lbmTvvIhlbmTlkKvjgb7jgZrvvInjgYvjgaQgc3RhcnQgKyBuICogc3RlcCAobuOBr+aVtOaVsCnjgpLmuoDjgZ/jgZnmlbTmlbDjga7phY3liJfjgafjgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFtdO1xyXG4gKiAgICAgYXJyLnJhbmdlKDQpOyAgICAgICAgLy8gPT4gWzAsIDEsIDIsIDNdXHJcbiAqICAgICBhcnIucmFuZ2UoMiwgNSk7ICAgICAvLyA9PiBbMiwgMywgNF1cclxuICogICAgIGFyci5yYW5nZSgyLCAxNCwgNSk7IC8vID0+IFsyLCA3LCAxMl1cclxuICogICAgIGFyci5yYW5nZSgyLCAtMyk7ICAgIC8vID0+IFsyLCAxLCAwLCAtMSwgLTJdXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCDmnIDliJ3jga7lgKTvvIjjg4fjg5Xjgqnjg6vjg4jjga8gMO+8iVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kIOacgOW+jOOBruWApO+8iOecgeeVpeS4jeWPr++8iVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3N0ZXA9MeOBvuOBn+OBry0xXSDplpPpmpRcclxuICovXHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXApIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJyYW5nZVwiLCBmdW5jdGlvbihzdGFydCwgZW5kLCBzdGVwKSB7XHJcbiAgY2xlYXIuY2FsbCh0aGlzKTtcclxuICAvLyB0aGlzLmNsZWFyKCk7XHJcbiAgXHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgZm9yICh2YXIgaT0wOyBpPHN0YXJ0OyArK2kpIHRoaXNbaV0gPSBpO1xyXG4gIH1cclxuICBlbHNlIGlmIChzdGFydCA8IGVuZCkge1xyXG4gICAgc3RlcCA9IHN0ZXAgfHwgMTtcclxuICAgIGlmIChzdGVwID4gMCkge1xyXG4gICAgICBmb3IgKHZhciBpPXN0YXJ0LCBpbmRleD0wOyBpPGVuZDsgaSs9c3RlcCwgKytpbmRleCkge1xyXG4gICAgICAgIHRoaXNbaW5kZXhdID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHN0ZXAgPSBzdGVwIHx8IC0xO1xyXG4gICAgaWYgKHN0ZXAgPCAwKSB7XHJcbiAgICAgIGZvciAodmFyIGk9c3RhcnQsIGluZGV4PTA7IGk+ZW5kOyBpKz1zdGVwLCArK2luZGV4KSB7XHJcbiAgICAgICAgdGhpc1tpbmRleF0gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBlYWNoXHJcbiAqIEBjaGFpbmFibGVcclxuICog6KaB57Sg44KS6aCG55Wq44Gr5rih44GX44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOODoeOCveODg+ODieODgeOCp+ODvOODs+OBq+WvvuW/nOOBl+OBpuOBhOOBvuOBmeOBjOOAgeOBk+OBruODoeOCveODg+ODieOBq+OCiOOBo+OBpuiHquWIhuiHqui6q+OBr+WkieWMluOBl+OBvuOBm+OCk+OAglxyXG4gKlxyXG4gKiAjIyNSZWZlcmVuY2VcclxuICogLSBbQXJyYXkucHJvdG90eXBlLmZvckVhY2goKSAtIEphdmFTY3JpcHQgfCBNRE5dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2gpXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbMSwgMiwgM107XHJcbiAqICAgICBhcnIuZWFjaCggZnVuY3Rpb24oZWxtKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKGVsbSAqIGVsbSlcclxuICogICAgIH0pO1xyXG4gKiAgICAgLy8gPT4gMVxyXG4gKiAgICAgLy8gICAgNFxyXG4gKiAgICAgLy8gICAgOVxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApFxyXG4gKi9cclxuZnVuY3Rpb24gZWFjaCgpIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJlYWNoXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PVxyXG4vLyDku6XkuIvjga9lczIwMTXku6XpmY3jgavlrZjlnKjjgZnjgovjgZ/jgoHjgIHkv53nlZlcclxuLy8gPT09PT09PT09PVxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBAbWV0aG9kIGZpbmRcclxuLy8gICog5ZCE6KaB57Sg44KS5byV5pWw44Gr44GX44Gm6Zai5pWw44KS5a6f6KGM44GX44CB44Gd44Gu5YCk44GM55yf44Go44Gq44KL77yI77yd5p2h5Lu244Gr44Oe44OD44OB44GZ44KL77yJ5pyA5Yid44Gu6KaB57Sg44KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqIOOBqeOBruimgee0oOOCguODnuODg+ODgeOBl+OBquOBkeOCjOOBsCB1bmRlZmluZWQg44KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqICMjIyBFeGFtcGxlXHJcbi8vICAqICAgICBhcnIgPSBbJ2ZvbycsICdiYXInLCAnaG9nZScsICdmdWdhJ107XHJcbi8vICAqICAgICBhcnIuZmluZCggZnVuY3Rpb24oZWxtKSB7XHJcbi8vICAqICAgICAgIHJldHVybiBlbG0uaW5kZXhPZignYScpID49IDA7XHJcbi8vICAqICAgICB9KTtcclxuLy8gICogICAgIC8vID0+ICdiYXInXHJcbi8vICAqXHJcbi8vICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4vLyAgKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv5ZG844Gz5Ye644GX5pmC44GuIHRoaXPjgIJcclxuLy8gICogQHJldHVybiB7T2JqZWN0fSDmnaHku7bjgavjg57jg4Pjg4HjgZfjgZ/mnIDliJ3jga7opoHntKDjgIHjgb7jgZ/jga8gdW5kZWZpbmVkXHJcbi8vICAqL1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImZpbmRcIiwgZnVuY3Rpb24oZm4sIHNlbGYpIHtcclxuLy8gICB2YXIgdGFyZ2V0ID0gbnVsbDtcclxuXHJcbi8vICAgdGhpcy5zb21lKGZ1bmN0aW9uKGVsbSwgaSkge1xyXG4vLyAgICAgaWYgKGZuLmNhbGwoc2VsZiwgZWxtLCBpLCB0aGlzKSkge1xyXG4vLyAgICAgICB0YXJnZXQgPSBlbG07XHJcbi8vICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9KTtcclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBAbWV0aG9kIGZpbmRJbmRleFxyXG4vLyAgKiDlkITopoHntKDjgpLlvJXmlbDjgavjgZfjgabplqLmlbDjgpLlrp/ooYzjgZfjgIHjgZ3jga7lgKTjgYznnJ/jgajjgarjgovvvIjvvJ3mnaHku7bjgavjg57jg4Pjg4HjgZnjgovvvInmnIDliJ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICog44Gp44Gu6KaB57Sg44KC44Oe44OD44OB44GX44Gq44GR44KM44GwIC0xIOOCkui/lOOBl+OBvuOBmeOAglxyXG4vLyAgKlxyXG4vLyAgKiAjIyMgRXhhbXBsZVxyXG4vLyAgKiAgICAgYXJyID0gWydmb28nLCAnYmFyJywgJ2hvZ2UnLCAnZnVnYSddO1xyXG4vLyAgKiAgICAgYXJyLmZpbmRJbmRleCggZnVuY3Rpb24oZWxtKSB7XHJcbi8vICAqICAgICAgIHJldHVybiBlbG0uaW5kZXhPZignYScpID49IDA7XHJcbi8vICAqICAgICB9KTtcclxuLy8gICogICAgIC8vID0+IDFcclxuLy8gICpcclxuLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5ZCE6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/lkbzjgbPlh7rjgZfmmYLjga4gdGhpc+OAglxyXG4vLyAgKiBAcmV0dXJuIHtPYmplY3R9IOadoeS7tuOBq+ODnuODg+ODgeOBl+OBn+acgOWIneOBruOCpOODs+ODh+ODg+OCr+OCueOAgeOBvuOBn+OBryAtMVxyXG4vLyAgKi9cclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJmaW5kSW5kZXhcIiwgZnVuY3Rpb24oZm4sIHNlbGYpIHtcclxuLy8gICB2YXIgdGFyZ2V0ID0gLTE7XHJcblxyXG4vLyAgIHRoaXMuc29tZShmdW5jdGlvbihlbG0sIGkpIHtcclxuLy8gICAgIGlmIChmbi5jYWxsKHNlbGYsIGVsbSwgaSwgdGhpcykpIHtcclxuLy8gICAgICAgdGFyZ2V0ID0gaTtcclxuLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB0YXJnZXQ7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2Qgb2ZcclxuICogQHN0YXRpY1xyXG4gKiBFUzYg5rqW5oug44GuIG9mIOmWouaVsOOBp+OBmeOAguWPr+WkiemVt+W8leaVsOOCkuOBqOOBo+OBpiBBcnJheSDjgqrjg5bjgrjjgqfjgq/jg4jjgavjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIEFycmF5Lm9mKCk7ICAgICAgICAvLyA9PiBbXVxyXG4gKiAgICAgQXJyYXkub2YoMSwgMiwgMyk7IC8vID0+IFsxLCAyLCAzXVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudE4g55Sf5oiQ44GZ44KL6YWN5YiX44Gu6KaB57SgXHJcbiAqIEByZXR1cm4ge0FycmF5fSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICovXHJcbi8vIEFycmF5LiRtZXRob2QoXCJvZlwiLCBmdW5jdGlvbigpIHtcclxuLy8gICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBmcm9tXHJcbiAqIEBzdGF0aWNcclxuICogRVM2IOa6luaLoOOBriBmcm9tIOmWouaVsOOBp+OBmeOAgmFycmF5LWxpa2Ug44Kq44OW44K444Kn44Kv44OI44GLaXRlcmFibGUg44Kq44OW44K444Kn44Kv44OI44GL44KJ5paw44GX44GE6YWN5YiX44KS55Sf5oiQ44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIGFycmF5LWxpa2Ug44Kq44OW44K444Kn44Kv44OI44Go44Gv44CBbGVuZ3RoIOODl+ODreODkeODhuOCo+OCkuaMgeOBoeOAgeaVsOWtl+OBrua3u+Wtl+OBp+OCouOCr+OCu+OCueWPr+iDveOBquOCquODluOCuOOCp+OCr+ODiOOBruOBk+OBqOOBp+OBmeOAglxyXG4gKiDpgJrluLjjga7phY3liJfjga7jgbvjgYvjgIFTdHJpbmfjgIFhcmd1bWVudHPjgIFOb2RlTGlzdCDjgarjganjgoIgYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4jjgafjgZnjgIJcclxuICpcclxuICogaXRlcmFibGUg44Kq44OW44K444Kn44Kv44OI44Go44Gv44CBU3ltYm9sLml0ZXJhdG9yIOODl+ODreODkeODhuOCo+OCkuaMgeOBpOOCquODluOCuOOCp+OCr+ODiOOBruOBk+OBqOOBp+OBmeOAglxyXG4gKiDpgJrluLjjga7phY3liJfjga7jgbvjgYvjgIFTdHJpbmfjgIFhcmd1bWVudHPjgIFOb2RlTGlzdCDjgarjganjgoIgaXRlcmFibGUg44Kq44OW44K444Kn44Kv44OI44Gn44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBBcnJheS5mcm9tKFsxLCAyLCAzXSwgZnVuY3Rpb24oZWxtKXsgcmV0dXJuIGVsbSAqIGVsbX0gKTsgLy8gPT4gWzEsIDQsIDldXHJcbiAqICAgICBBcnJheS5mcm9tKFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA9PiBbXCJmXCIsIFwib1wiLCBcIm9cIl1cclxuICogICAgIEFycmF5LmZyb20oIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKSAgICAgICAgICAgIC8vID0+IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LC4uLl1cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGFycmF5TGlrZSDphY3liJfjgavlpInmj5vjgZnjgosgYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4hcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSBhcnJheUxpa2Ug44Gu44GZ44G544Gm44Gu6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Oe44OD44OX6Zai5pWwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCkXHJcbiAqIEByZXR1cm4ge0FycmF5fSDnlJ/miJDjgZfjgZ/phY3liJdcclxuICovXHJcbi8vIEFycmF5LiRtZXRob2QoXCJmcm9tXCIsIGZ1bmN0aW9uKGFycmF5TGlrZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuLy8gICBpZiAoIU9iamVjdChhcnJheUxpa2UpLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuLy8gICB2YXIgcmVzdWx0ID0gW107XHJcbi8vICAgaWYgKFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgJiYgYXJyYXlMaWtlW1N5bWJvbC5pdGVyYXRvcl0pIHtcclxuLy8gICAgICAgdmFyIGl0ZXJhdG9yID0gYXJyYXlMaWtlW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuLy8gICAgICAgd2hpbGUgKHRydWUpIHtcclxuLy8gICAgICAgICAgIHZhciBpdGVyYXRvclJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcclxuLy8gICAgICAgICAgIGlmIChpdGVyYXRvclJlc3VsdC5kb25lKSBicmVhaztcclxuXHJcbi8vICAgICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjay5iaW5kKGNvbnRleHQgfHwgdGhpcykoaXRlcmF0b3JSZXN1bHQudmFsdWUpIDogaXRlcmF0b3JSZXN1bHQudmFsdWU7XHJcbi8vICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheUxpa2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuLy8gICAgICAgcmVzdWx0LnB1c2goYXJyYXlMaWtlW2ldKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHJlc3VsdC5tYXAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuLy8gICAgIHJldHVybiBpdGVtO1xyXG4vLyAgIH0sIGNvbnRleHQpO1xyXG4vLyB9KTtcclxuXHJcbi8qXHJcbiAqIHBoaW5hLmpzIG5hbWVzcGFjZVxyXG4gKi9cclxudmFyIHBoaW5hJDEgPSBwaGluYSQxIHx8IHt9O1xyXG5cclxuLy8g5LiA5pem5ouh5by1XHJcbi8vICRtZXRob2QuY2FsbChwaGluYSwgXCJob2dlXCIsIC4uLinjgajjgZfjgabjgoLoia/jgYTjgYzjgIHmm7jjgY3mj5vjgYjjgYzlpKflpInjgarjgZ/jgoFcclxucGhpbmEkMS4kbWV0aG9kID0gZnVuY3Rpb24oLi4uYXJncykge1xyXG4vLyBwaGluYS5wcm90b3R5cGUuJG1ldGhvZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHsgLy8gbmdcclxuICByZXR1cm4gJG1ldGhvZC5jYWxsKHRoaXMsIC4uLmFyZ3MpXHJcbn07XHJcblxyXG4vLyA7KGZ1bmN0aW9uKCkge1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYVxyXG4gKiAjIHBoaW5hLmpzIG5hbWVzcGFjZVxyXG4gKiBwaGluYS5qcyDjga7jg43jg7zjg6Djgrnjg5rjg7zjgrnjgafjgZnjgIJwaGluYS5qcyDjga7mj5DkvpvjgZnjgovmqZ/og73jga/vvIjjgrPjgqLmi6HlvLXku6XlpJbvvInlhajjgabjgZPjga7jgqrjg5bjgrjjgqfjgq/jg4jjgavlhaXjgaPjgabjgYTjgb7jgZnjgIJcclxuICpcclxuICogIyMgcGhpbmEuanMg44Gu44Kv44Op44K55a6a576p44Gr44Gk44GE44GmXHJcbiAqXHJcbiAqIHBoaW5hLmpzIOOBp+OBr+eLrOiHquOBruOCr+ODqeOCueOCt+OCueODhuODoOOCkuWun+ijheOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKiBwaGluYS5qcyDjga7jgq/jg6njgrnjga7nibnlvrTjgajjgZfjgabjga8gbmV3IOani+aWh+OCkuS9v+eUqOOBl+OBquOBhOOBn+OCgeOAgeODoeOCveODg+ODieODgeOCp+ODvOODs+OBjOOBl+OChOOBmeOBhOOBk+OBqOOChOOAgeaWh+Wtl+WIl+OBp+OCr+ODqeOCueOCkuWumue+qeOBl+OBn+OCiuimquOCr+ODqeOCueOCkuaMh+WumuOBl+OBn+OCiuOBp+OBjeOCi+eCueOBjOaMmeOBkuOCieOCjOOBvuOBmeOAglxyXG4gKiDmloflrZfliJfjgpLkvb/nlKjjgafjgY3jgovjgZPjgajjgafjgIHjgq/jg6njgrnjgpLlrprnvqnjgZnjgovmrrXpmo7jgafopqrjgq/jg6njgrnjgYzmjIflrprjgZXjgozjgabjgYTjgarjgY/jgabjgoLjgIHjgq/jg6njgrnjgpLlkbzjgbPlh7rjgZnmrrXpmo7jgafopqrjgq/jg6njgrnjgYzlrprnvqnjgZXjgozjgabjgYTjgozjgbDjgYTjgYTjgajjgYTjgYbjg6Hjg6rjg4Pjg4jjgYzjgYLjgorjgb7jgZnjgIJcclxuICpcclxuICog44Kv44Op44K544Gu5a6a576p44Gr44GvIHtAbGluayAjY3JlYXRlQ2xhc3N9LCB7QGxpbmsgI2RlZmluZX0g44KS5L2/55So44GX44G+44GZ44CC6Kmz44GX44GE5L2/44GE5pa544Gv44Gd44KM44Ge44KM44Gu6Zai5pWw44Gu6aCF44KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAqXHJcbiAqICMjIOOCr+ODqeOCueOBq+OBpOOBhOOBpuOBruijnOi2s1xyXG4gKlxyXG4gKiBwaGluYS5qcyDjga7jgq/jg6njgrnjgafjga8gc3VwZXJDbGFzcyDjgpLmjIflrprjgZnjgovjgajku6XkuIvjga7jg6Hjgr3jg4Pjg4njgYzoh6rli5Xjgafov73liqDjgZXjgozjgb7jgZnjgIJcclxuICpcclxuICogLSBzdXBlckluaXQoKTog6Kaq44Kv44Op44K544Gu44Kz44Oz44K544OI44Op44Kv44K/44KS5ZG844Gz5Ye644GZ77yI5Yid5pyf5YyW77yJXHJcbiAqIC0gc3VwZXJNZXRob2QoKTog6Kaq44Kv44Op44K544Gu44Oh44K944OD44OJ44KS5ZG844Gz5Ye644GZXHJcbiAqXHJcbiAqIHN1cGVySW5pdCDjga/lvJXmlbDjgpLlpInjgYjjgovjgZPjgajjgafopqrjgq/jg6njgrnjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgpLlkbzjgbbjgajjgY3jga7lvJXmlbDjgpLlpInjgYjjgonjgozjgb7jgZnjgIJcclxuICogc3VwZXJNZXRob2Qg44Gv5LiA44Gk55uu44Gu5byV5pWw44Gr5ZG844Gz5Ye644GX44Gf44GE6Kaq44Kv44Op44K544Gu44Oh44K944OD44OJ5ZCN44KS5paH5a2X5YiX44Gn44CB5LqM44Gk55uu5Lul6ZmN44Gr5ZG844Gz5Ye644GX44Gf44GE44Oh44K944OD44OJ44Gu5byV5pWw44KS5rih44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOOBvuOBnyBwaGluYS5qcyDjga7jgq/jg6njgrnjgafjga/ku6XkuIvjga7nibnliKXjgarlvbnlibLjgpLjgoLjgaPjgZ/jg5fjg63jg5Hjg4bjgqPjgIHjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgb7jgZnjgIJcclxuICpcclxuICogLSBfYWNjZXNzb3I6IOOCouOCr+OCu+ODg+OCteODvO+8iOOCsuODg+OCv+ODvOOBqOOCu+ODg+OCv+ODvO+8ieOCkuWumue+qeOBmeOCi+OBn+OCgeOBruODl+ODreODkeODhuOCo1xyXG4gKiAtIF9zdGF0aWM6IHN0YXRpYyDjg6Hjg7Pjg5DjgpLlrprnvqnjgZnjgovjgZ/jgoHjga7jg5fjg63jg5Hjg4bjgqNcclxuICogLSBfZGVmaW5lZCgpOiDjgq/jg6njgrnjgYzlrprnvqnjgZXjgozjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjg6Hjgr3jg4Pjg4lcclxuICpcclxuICogIyMjIF9hY2Nlc3NvciDjga7kvb/nlKjkvotcclxuICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICogICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgLi4uXHJcbiAqICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgIF9hY2Nlc3NvcjogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgdmFsdWU6IHtcclxuICogICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICogICAgICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICogICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gKiAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWXjgYzjgrvjg4Pjg4jjgZXjgozjgb7jgZfjgZ/vvIEnKTtcclxuICogICAgICAgICAgIH1cclxuICogICAgICAgICB9XHJcbiAqICAgICAgIH1cclxuICogICAgIH0pO1xyXG4gKlxyXG4gKiAjIyMgX3N0YXRpYyDjga7kvb/nlKjkvotcclxuICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICogICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgLi4uXHJcbiAqICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgIF9zdGF0aWM6IHtcclxuICpcclxuICogICAgICAgICBzdGF0aWNQcm9wZXJ0eTE6IDEsXHJcbiAqICAgICAgICAgc3RhdGljUHJvcGVydHkyOiAyLFxyXG4gKlxyXG4gKiAgICAgICAgIHN0YXRpY01ldGhvZDE6IGZ1bmN0aW9uKCl7fSxcclxuICogICAgICAgICBzdGF0aWNNZXRob2QyOiBmdW5jdGlvbigpe31cclxuICpcclxuICogICAgICAgfVxyXG4gKiAgICAgfSk7XHJcbiAqXHJcbiAqICAgICBjb25zb2xlLmxvZyhDbGFzcy5zdGF0aWNQcm9wZXJ0eTEpOyAvLyA9PiAxXHJcbiAqXHJcbiAqICMjIyBfZGVmaW5lZCDjga7kvb/nlKjkvotcclxuICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICogICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgIF9kZWZpbmVkOiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICBjb25zb2xlLmxvZygnZGVmaW5lZCEnKTtcclxuICogICAgICAgfVxyXG4gKiAgICAgfSk7IC8vID0+IGRlZmluZWQhXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbVkVSU0lPTiA9IDwlPSB2ZXJzaW9uICU+XVxyXG4gKiBwaGluYS5qcyDjga7jg5Djg7zjgrjjg6fjg7PjgafjgZnjgIJcclxuICpcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLlZFUlNJT04gPSBcIjAuMi4zXCI7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc05vZGVcclxuICogTm9kZS5qcyDjga4gbW9kdWxlIOOBi+OBqeOBhuOBi+OCkuODgeOCp+ODg+OCr+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNOb2RlJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgbmFtZXNwYWNlXHJcbiAqIOW8leaVsOOBr+mWouaVsOOBp+OAgeOBneOBrumWouaVsOWGheOBp+OBriB0aGlzIOOBryBwaGluYSDjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6Zai5pWwXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCduYW1lc3BhY2UnLCBmdW5jdGlvbihmbikge1xyXG4gIGZuLmNhbGwodGhpcyk7XHJcbn0pO1xyXG5cclxudmFyIG5zID0gcGhpbmEkMS5pc05vZGUoKSA/IGdsb2JhbCA6IHdpbmRvdztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZ2xvYmFsXHJcbiAqIE5vZGUuanMg44Gq44KJIGdsb2JhbCDjg5bjg6njgqbjgrbjgarjgokgd2luZG93IOOCkui/lOOBl+OBvuOBmeOAglxyXG4gKiDjgrLjg4Pjgr/jg7zjga7jgb/lrprnvqnjgZXjgozjgabjgYTjgb7jgZnjgIJcclxuICpcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAcmVhZG9ubHlcclxuICogQHN0YXRpY1xyXG4gKi9cclxuLy8gcGhpbmEuYWNjZXNzb3IoJ2dsb2JhbCcsIHtcclxuYWNjZXNzb3IuY2FsbChwaGluYSQxLCAnZ2xvYmFsJywge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbnM7XHJcbiAgfSxcclxufSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgdGVzdFVBXHJcbiAqIOW8leaVsOOBriBSZWdFeHAg44Kq44OW44K444Kn44Kv44OI44Go44Om44O844K244O844Ko44O844K444Kn44Oz44OI44KS5q+U6LyD44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgndGVzdFVBJywgZnVuY3Rpb24ocmVnRXhwKSB7XHJcbiAgaWYgKCFwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuICB2YXIgdWEgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gIHJldHVybiByZWdFeHAudGVzdCh1YSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNBbmRyb2lkXHJcbiAqIEFuZHJvaWQg44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IEFuZHJvaWQg44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc0FuZHJvaWQnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL0FuZHJvaWQvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0lQaG9uZVxyXG4gKiBpUGhvbmUg44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlQaG9uZSDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzSVBob25lJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGhvbmUvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0lQYWRcclxuICogaVBhZCDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gaVBhZCDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzSVBhZCcsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBhZC8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzSU9TXHJcbiAqIGlPUyDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gaU9TIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNJT1MnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL2lQaG9uZXxpUGFkLyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNNb2JpbGVcclxuICog44Oi44OQ44Kk44Or44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CC5YW35L2T55qE44Gr44GvIEFuZHJvaWQsIGlQaG9uZSwgaVBhZCDjga7jgYTjgZrjgozjgYvjgaDjgaggdHJ1ZSDjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0g44Oi44OQ44Kk44Or44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc01vYmlsZScsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBob25lfGlQYWR8QW5kcm9pZC8pO1xyXG59KTtcclxuXHJcbi8vIC8vIHN1cHBvcnQgbm9kZS5qc1xyXG4vLyBpZiAocGhpbmEuaXNOb2RlKCkpIHtcclxuLy8gICBtb2R1bGUuZXhwb3J0cyA9IHBoaW5hO1xyXG4vLyB9XHJcblxyXG4vLyBucy5waGluYSA9IHBoaW5hO1xyXG5cclxuLy8gfSkodGhpcyk7XHJcblxyXG5cclxucGhpbmEkMS5uYW1lc3BhY2UoZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcclxuICAgKiDjgq/jg6njgrnjgpLkvZzmiJDjgZnjgovplqLmlbDjgafjgZnjgIJcclxuICAgKiDopqrjgq/jg6njgrnjga7mjIflrprjga/mloflrZfliJfjgafjgoLlj6/og73jgafjgZnjgIJcclxuICAgKiDkvZXjgoLntpnmib/jgZfjgarjgYTloLTlkIggc3VwZXJDbGFzcyDjga7mjIflrprjga/kuI3opoHjgafjgZnjgILjgb7jgZ/jgIHopqrjgq/jg6njgrnjgpLntpnmib/jgZfjgabjgYTjgovloLTlkIjjgIHjgrPjg7Pjgrnjg4jjg6njgq/jgr/lhoXjgacgdGhpcy5zdXBlckluaXQoKSDjgpLlrp/ooYzjgZfjgabopqrjgq/jg6njgrnjgpLliJ3mnJ/ljJbjgZnjgovjgZPjgajjgYzlv4XpoIjjgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICAgKiDjgIDjgIAgIHN1cGVyQ2xhc3M6ICduYW1lc3BhY2UuU3VwZXInLC8v6Kaq44Kv44Op44K557aZ5om/XHJcbiAgICpcclxuICAgKiDjgIDjgIAgIC8v44Oh44Oz44OQ5aSJ5pWwXHJcbiAgICog44CA44CAICBtZW1iZXIxOiAxMDAsXHJcbiAgICog44CA44CAICBtZW1iZXIyOiAndGVzdCcsXHJcbiAgICog44CA44CAICBtZW1iZXIzOiBudWxsLFxyXG4gICAqXHJcbiAgICpcclxuICAgKiDjgIDjgIAgIC8v44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICog44CA44CAICAvL0NsYXNzKCnjgpLlkbzjgbPlh7rjgZfjgZ/jgajjgY3lrp/ooYzjgZXjgozjgotcclxuICAgKiDjgIDjgIAgIGluaXQ6IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAqIOOAgOOAgCAgICAvL+OCueODvOODkeODvOOCr+ODqeOCuSjntpnmib/jgZfjgZ/jgq/jg6njgrkp44GuaW5pdFxyXG4gICAqIOOAgOOAgCAgICB0aGlzLnN1cGVySW5pdChhLCBiKTtcclxuICAgKiDjgIDjgIAgICAgdGhpcy5hID0gYTtcclxuICAgKiDjgIDjgIAgICAgdGhpcy5iID0gYjtcclxuICAgKiDjgIDjgIAgIH0sXHJcbiAgICog44CA44CAXHJcbiAgICog44CA44CAICAvL+ODoeOCveODg+ODiVxyXG4gICAqIOOAgOOAgCAgbWV0aG9kMTogZnVuY3Rpb24oKXt9LFxyXG4gICAqIOOAgOOAgCAgbWV0aG9kMjogZnVuY3Rpb24oKXt9LFxyXG4gICAqIOOAgOOAgFxyXG4gICAqIOOAgOOAgH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9XHJcbiAgICogQHJldHVybiB7RnVuY3Rpb259IOOCr+ODqeOCuVxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdjcmVhdGVDbGFzcycsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG5cclxuICAgIHZhciBfY2xhc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IF9jbGFzcy5wcm90b3R5cGUuX2NyZWF0b3IoKTtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xyXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChwYXJhbXMuc3VwZXJDbGFzcykge1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJhbXMuc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xyXG4gICAgICBwYXJhbXMuaW5pdC5vd25lciA9IF9jbGFzcztcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5zdXBlckluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9fY291bnRlciA9IHRoaXMuX19jb3VudGVyIHx8IDA7XHJcblxyXG4gICAgICAgIHZhciBzdXBlckNsYXNzID0gdGhpcy5faGllcmFyY2hpZXNbdGhpcy5fX2NvdW50ZXIrK107XHJcbiAgICAgICAgdmFyIHN1cGVySW5pdCA9IHN1cGVyQ2xhc3MucHJvdG90eXBlLmluaXQ7XHJcbiAgICAgICAgc3VwZXJJbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIHRoaXMuX19jb3VudGVyID0gMDtcclxuICAgICAgfTtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5zdXBlck1ldGhvZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICB2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLl9fY291bnRlcnMgPSB0aGlzLl9fY291bnRlcnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXJzW25hbWVdID0gdGhpcy5fX2NvdW50ZXJzW25hbWVdIHx8IDA7XHJcblxyXG4gICAgICAgIHZhciBzdXBlckNsYXNzID0gdGhpcy5faGllcmFyY2hpZXNbIHRoaXMuX19jb3VudGVyc1tuYW1lXSsrIF07XHJcbiAgICAgICAgdmFyIHN1cGVyTWV0aG9kID0gc3VwZXJDbGFzcy5wcm90b3R5cGVbbmFtZV07XHJcbiAgICAgICAgdmFyIHJzdCA9IHN1cGVyTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9fY291bnRlcnNbbmFtZV0gPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gcnN0O1xyXG4gICAgICB9O1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gX2NsYXNzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAvL1xyXG4gICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLy8gICAgIF9jbGFzcy4kbWV0aG9kKGtleSwgdmFsdWUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGVsc2Uge1xyXG4gICAgLy8gICAgIF9jbGFzcy5wcm90b3R5cGVba2V5XSA9IHZhbHVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIOe2meaJv1xyXG4gICAgJGV4dGVuZC5jYWxsKF9jbGFzcy5wcm90b3R5cGUsIHBhcmFtcyk7XHJcbiAgICAvLyBfY2xhc3MucHJvdG90eXBlLiRleHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyDntpnmib/nlKhcclxuICAgIF9jbGFzcy5wcm90b3R5cGUuX2hpZXJhcmNoaWVzID0gW107XHJcbiAgICB2YXIgX3N1cGVyID0gX2NsYXNzLnByb3RvdHlwZS5zdXBlckNsYXNzO1xyXG4gICAgd2hpbGUoX3N1cGVyKSB7XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuX2hpZXJhcmNoaWVzLnB1c2goX3N1cGVyKTtcclxuICAgICAgX3N1cGVyID0gX3N1cGVyLnByb3RvdHlwZS5zdXBlckNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjY2Vzc29yXHJcbiAgICBpZiAocGFyYW1zLl9hY2Nlc3Nvcikge1xyXG4gICAgICBmb3JJbi5jYWxsKHBhcmFtcy5fYWNjZXNzb3IsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gcGFyYW1zLl9hY2Nlc3Nvci5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgYWNjZXNzb3IuY2FsbChfY2xhc3MucHJvdG90eXBlLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAvLyBfY2xhc3MucHJvdG90eXBlLmFjY2Vzc29yKGtleSwgdmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gX2NsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoX2NsYXNzLnByb3RvdHlwZSwgcGFyYW1zLl9hY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsYXNzLnByb3RvdHlwZS5fY3JlYXRvciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcclxuICAgIF9jbGFzcy5wcm90b3R5cGUuX2NyZWF0b3IucHJvdG90eXBlID0gX2NsYXNzLnByb3RvdHlwZTtcclxuXHJcbiAgICAvLyBzdGF0aWMgcHJvcGVydHkvbWV0aG9kXHJcbiAgICBpZiAocGFyYW1zLl9zdGF0aWMpIHtcclxuICAgICAgJGV4dGVuZC5jYWxsKF9jbGFzcywgcGFyYW1zLl9zdGF0aWMpO1xyXG4gICAgICAvLyBfY2xhc3MuJGV4dGVuZChwYXJhbXMuX3N0YXRpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmFtcy5fZGVmaW5lZCkge1xyXG4gICAgICBwYXJhbXMuX2RlZmluZWQuY2FsbChfY2xhc3MsIF9jbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9jbGFzcztcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB1c2luZ1xyXG4gICAqIOaWh+Wtl+WIl+OBp+Wumue+qeOBl+OBn+ODkeOCueOCkuS9v+OBo+OBpuOCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBl+OBvuOBmeOAguODkeOCueOBryAsIC4gLyBcXCA6OiDjgafljLrliIfjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKiB7QGxpbmsgI3BoaW5hLnJlZ2lzdGVyfSDjgafnmbvpjLLjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5bjgorlh7rjgZnjgajjgY3jgarjganjgavkvb/jgYbjgajkvr/liKnjgarplqLmlbDjgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGhvZ2UgPSB7XHJcbiAgICogICAgICAgZm9vOiB7XHJcbiAgICogICAgICAgICBiYXI6IHtcclxuICAgKiAgICAgICAgICAgbnVtOiAxMDBcclxuICAgKiAgICAgICAgIH1cclxuICAgKiAgICAgICB9XHJcbiAgICogICAgIH07XHJcbiAgICogICAgIHZhciBiYXIgPSBwaGluYS51c2luZygnaG9nZS5mb28uYmFyJyk7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKGJhci5udW0pOyAvLyA9PiAxMDBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIOOCquODluOCuOOCp+OCr+ODiOOBuOOBruODkeOCuVxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g5Y+W44KK5Ye644GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ3VzaW5nJywgZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgIHJldHVybiBwaGluYSQxLmdsb2JhbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGF0aGVzID0gcGF0aC5zcGxpdCgvWywuXFwvIF18OjovKTtcclxuICAgIHZhciBjdXJyZW50ID0gcGhpbmEkMS5nbG9iYWw7XHJcblxyXG4gICAgcGF0aGVzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudFtwXSB8fCAoY3VycmVudFtwXT17fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudDtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByZWdpc3RlclxyXG4gICAqIOODkeOCueaMh+WumuOBp+OCquODluOCuOOCp+OCr+ODiOOCkueZu+mMsuOBmeOCi+mWouaVsOOBp+OBmeOAguODkeOCueOBryAsIC4gLyBcXCA6OiDjgafljLrliIfjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLnJlZ2lzdGVyKCdob2dlLmZvby5iYXInLCB7XHJcbiAgICogICAgICAgbnVtOiAxMDAsXHJcbiAgICogICAgIH0pO1xyXG4gICAqICAgICBjb25zb2xlLmxvZyhob2dlLmZvby5iYXIubnVtKTsgLy8gPT4gMTAwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCDnmbvpjLLjgZnjgovjgqrjg5bjgrjjgqfjgq/jg4jjga7jg5HjgrlcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX2NsYXNzIOeZu+mMsuOBmeOCi+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55m76Yyy44GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ3JlZ2lzdGVyJywgZnVuY3Rpb24ocGF0aCwgX2NsYXNzKSB7XHJcbiAgICB2YXIgcGF0aGVzID0gcGF0aC5zcGxpdCgvWywuXFwvIF18OjovKTtcclxuICAgIC8vIHZhciBjbGFzc05hbWUgPSBwYXRoZXMubGFzdDtcclxuICAgIHZhciBjbGFzc05hbWUgPSBsYXN0LmdldC5jYWxsKHBhdGhlcyk7XHJcbiAgICB2YXIgcGFyZW50UGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGFzdEluZGV4T2YoJy4nKSk7IC8vIOOBk+OBk+OCkuebtOOBleOBquOBhOOBqOODlOODquOCquODieWMuuWIh+OCiuS7peWkluOBr+eEoeWKue+8n1xyXG4gICAgdmFyIHBhcmVudCA9IHBoaW5hJDEudXNpbmcocGFyZW50UGF0aCk7XHJcblxyXG4gICAgcGFyZW50W2NsYXNzTmFtZV0gPSBfY2xhc3M7XHJcblxyXG4gICAgcmV0dXJuIF9jbGFzcztcclxuICB9KTtcclxuXHJcbiAgdmFyIF9jbGFzc0RlZmluZWRDYWxsYmFjayA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRlZmluZVxyXG4gICAqIOOCr+ODqeOCueOCkuWumue+qeOBmeOCi+mWouaVsOOBp+OBmeOAguS9v+OBhOaWueOBryB7QGxpbmsgI2NyZWF0ZUNsYXNzfSDjgajjgbvjgajjgpPjganlkIzjgZjjgafjgZnjgIJcclxuICAgKiDjgZ/jgaDjgZfjgIHlvJXmlbDjga8y44Gk44GC44KK44CB56ys5LiA5byV5pWw44Gv5a6a576p44GZ44KL44Kv44Op44K544Gu44OR44K544KS5paH5a2X5YiX44Gn5rih44GX44G+44GZ44CC56ys5LqM5byV5pWw44Gu44Kq44OW44K444Kn44Kv44OI44GvIHtAbGluayAjY3JlYXRlQ2xhc3N9IOOBruW8leaVsOOBqOWQjOOBmOOCiOOBhuOBq+OBl+OBvuOBmeOAglxyXG4gICAqIHtAbGluayAjY3JlYXRlQ2xhc3N9IOOBqOmBleOBhOOAgeWkieaVsOOBq+S7o+WFpeOBmeOCi+W/heeUqOOBjOOBquOBj+OAgeODkeOCueaMh+WumuOBp+OCr+ODqeOCueOCkuWumue+qeOBp+OBjeOBvuOBmeOAglxyXG4gICAqIOWGhemDqOeahOOBq+OBryB7QGxpbmsgI3JlZ2lzdGVyfSwge0BsaW5rICN1c2luZ30g44KS5L2/55So44GX44Gm44GE44KL44Gf44KB44CB44OR44K544GvICwgLiAvIFxcIDo6IOOBp+WMuuWIh+OCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZGVmaW5lKCduYW1lc3BhY2UuQ2xhc3MnLCB7XHJcbiAgICogICAgICAgc3VwZXJDbGFzczogJ25hbWVzcGFjZS5TdXBlcicsLy/opqrjgq/jg6njgrnntpnmib9cclxuICAgKlxyXG4gICAqICAgICAgIC8v44Oh44Oz44OQ5aSJ5pWwXHJcbiAgICogICAgICAgbWVtYmVyMTogMTAwLFxyXG4gICAqICAgICAgIG1lbWJlcjI6ICd0ZXN0JyxcclxuICAgKiAgICAgICBtZW1iZXIzOiBudWxsLFxyXG4gICAqXHJcbiAgICpcclxuICAgKiAgICAgICAvL+OCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAqICAgICAgIC8vQ2xhc3MoKeOCkuWRvOOBs+WHuuOBl+OBn+OBqOOBjeWun+ihjOOBleOCjOOCi1xyXG4gICAqICAgICAgIGluaXQ6IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAqICAgICAgICAgLy/jgrnjg7zjg5Hjg7zjgq/jg6njgrko57aZ5om/44GX44Gf44Kv44Op44K5KeOBrmluaXRcclxuICAgKiAgICAgICAgIHRoaXMuc3VwZXJJbml0KGEsIGIpO1xyXG4gICAqICAgICAgICAgdGhpcy5hID0gYTtcclxuICAgKiAgICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICogICAgICAgfSxcclxuICAgKlxyXG4gICAqICAgICAgIC8v44Oh44K944OD44OJXHJcbiAgICogICAgICAgbWV0aG9kMTogZnVuY3Rpb24oKXt9LFxyXG4gICAqICAgICAgIG1ldGhvZDI6IGZ1bmN0aW9uKCl7fSxcclxuICAgKlxyXG4gICAqICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIOODkeOCuVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMg44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7RnVuY3Rpb259IOWumue+qeOBl+OBn+OCr+ODqeOCuVxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdkZWZpbmUnLCBmdW5jdGlvbihwYXRoLCBwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMuc3VwZXJDbGFzcykge1xyXG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5zdXBlckNsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHZhciBfc3VwZXJDbGFzcyA9IHBoaW5hJDEudXNpbmcocGFyYW1zLnN1cGVyQ2xhc3MpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3N1cGVyQ2xhc3MgIT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgaWYgKCFfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGFyYW1zLnN1cGVyQ2xhc3NdKSB7XHJcbiAgICAgICAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXJhbXMuc3VwZXJDbGFzc10gPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXJhbXMuc3VwZXJDbGFzc10ucHVzaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGhpbmEkMS5kZWZpbmUocGF0aCwgcGFyYW1zKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcGFyYW1zLnN1cGVyQ2xhc3MgPSBfc3VwZXJDbGFzcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcGFyYW1zLnN1cGVyQ2xhc3MgPSBwYXJhbXMuc3VwZXJDbGFzcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfY2xhc3MgPSBwaGluYSQxLmNyZWF0ZUNsYXNzKHBhcmFtcyk7XHJcbiAgICBhY2Nlc3Nvci5jYWxsKF9jbGFzcy5wcm90b3R5cGUsICdjbGFzc05hbWUnLCB7XHJcbiAgICAvLyBfY2xhc3MucHJvdG90eXBlLmFjY2Vzc29yKCdjbGFzc05hbWUnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBwaGluYSQxLnJlZ2lzdGVyKHBhdGgsIF9jbGFzcyk7XHJcblxyXG4gICAgaWYgKF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXRoXSkge1xyXG4gICAgICBfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGF0aF0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGF0aF0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBfY2xhc3M7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2xvYmFsaXplXHJcbiAgICogcGhpbmEuanMg44GM55So5oSP44GX44Gm44GE44KL5YWo44Gm44Gu44Kv44Op44K544KS44Kw44Ot44O844OQ44Or44Gr5bGV6ZaL44GX44G+44GZ44CC77yI5YW35L2T55qE44Gr44GvIHBoaW5hIOOBjOaMgeOBpOOCquODluOCuOOCp+OCr+ODiOOBjOS4gOmAmuOCiuOCsOODreODvOODkOODq+OBq+WxlemWi+OBleOCjOOBvuOBmeOAgu+8iVxyXG4gICAqIOOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOBp+OAgeOBhOOBoeOBhOOBoSBnbG9iYWwg44GL44KJ44Gf44Gp44Gj44Gm44GE44GL44Gq44GP44Gm44KCIHBoaW5hLmpzIOOBrueUqOaEj+OBl+OBpuOBhOOCi+OCr+ODqeOCueOCkuOCr+ODqeOCueWQjeOBoOOBkeOBp+WRvOOBs+WHuuOBmeOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2xvYmFsaXplKCk7XHJcbiAgICpcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgnZ2xvYmFsaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICBmb3JJbi5jYWxsKHBoaW5hJDEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gO1xyXG5cclxuICAgICAgZm9ySW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyB2YWx1ZS5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gaWYgKHBoaW5hLmdsb2JhbFtrZXldKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhucywga2V5KTtcclxuICAgICAgICAvLyAgIHBoaW5hLmdsb2JhbFsnXycgKyBrZXldID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgcGhpbmEuZ2xvYmFsW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcGhpbmEkMS5nbG9iYWxba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBwaGluYSQxLl9tYWluTGlzdGVuZXJzID0gW107XHJcbiAgcGhpbmEkMS5fbWFpbkxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1haW5cclxuICAgKiBwaGluYS5qcyDjgafjg5fjg63jgrDjg6njg5/jg7PjgrDjgZnjgovpmpvjgIHjg6HjgqTjg7Pjga7lh6bnkIbjgpLoqJjov7DjgZnjgovjgZ/jgoHjga7plqLmlbDjgafjgZnjgILln7rmnKznmoTjgasgcGhpbmEuanMg44Gn44Gu44OX44Ot44Kw44Op44Of44Oz44Kw44Gn44Gv44GT44Gu5Lit44Gr44OX44Ot44Kw44Op44Og44KS5pu444GE44Gm44GE44GP44GT44Go44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5tYWluKGZ1bmN0aW9uKCkge1xyXG4gICAqICAgICAgIC8v44GT44GT44Gr44Oh44Kk44Oz44Gu5Yem55CG44KS5pu444GPXHJcbiAgICogICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyDjg6HjgqTjg7Pjga7lh6bnkIZcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgnbWFpbicsIGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgIGlmIChwaGluYSQxLl9tYWluTG9hZGVkKSB7XHJcbiAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwaGluYSQxLl9tYWluTGlzdGVuZXJzLnB1c2goZnVuYyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHZhciBkb2MgPSBwaGluYSQxLmdsb2JhbC5kb2N1bWVudDtcclxuICBpZiAocGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiBkb2MgJiYgZG9jLnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHJ1biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBjbG9uZS5jYWxsKHBoaW5hJDEuX21haW5MaXN0ZW5lcnMpO1xyXG4gICAgICAgIC8vIHZhciBsaXN0ZW5lcnMgPSBwaGluYS5fbWFpbkxpc3RlbmVycy5jbG9uZSgpO1xyXG4gICAgICAgIGNsZWFyLmNhbGwocGhpbmEkMS5fbWFpbkxpc3RlbmVycyk7XHJcbiAgICAgICAgLy8gcGhpbmEuX21haW5MaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgLy8gbGlzdGVuZXJzLmVhY2goZnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBtYWluIOWGheOBpyBtYWluIOOCkui/veWKoOOBl+OBpuOBhOOCi+WgtOWQiOOBjOOBguOCi+OBruOBp+OBneOBruODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmIChwaGluYSQxLl9tYWluTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHJ1bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHBoaW5hJDEuX21haW5Mb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgLy8g44Gh44KH44Gj44Go6YGF5bu244GV44Gb44KLKOeUu+mdouOCteOCpOOCuuWVj+mhjClcclxuICAgICAgc2V0VGltZW91dChydW4pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcGhpbmEkMS5fbWFpbkxvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICogIyDjgqTjg5njg7Pjg4jjgpLmibHjgYbjgZ/jgoHjga7jgq/jg6njgrlcclxuICog44Kk44OZ44Oz44OI44KS5omx44GG44Gf44KB44Gu44Oh44K944OD44OJ44KE44OX44Ot44OR44OG44Kj44KS5a6a576p44GX44Gm44GE44KL44Kv44Op44K544Gn44GZ44CCXHJcbiAqIHBoaW5hLmpzIOOBjOaPkOS+m+OBmeOCi+OCr+ODqeOCueOBruWkmuOBj+OBr+OBk+OBriBFdmVudERpc3BhdGNoZXIg44Kv44Op44K544Gu5a2Q5a2r44Go44Gq44Gj44Gm44GE44KL44Gf44KB44CBXHJcbiAqIOOBu+OBqOOCk+OBqeOBruOCquODluOCuOOCp+OCr+ODiOOBp+WuueaYk+OBq+OCpOODmeODs+ODiOOCkuaJseOBhuOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIOWwkeOBl+iqrOaYjlxyXG4gKiB0aGlzLm9ueHh4ID0gZnVuY3Rpb24oKXt9OyDjgafjgoLjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLoqK3lrprjgafjgY3jgovjgYzjgIHjgYLjgb7jgormjqjlpajjgZfjgarjgYTjgIJcclxuICog5ZG844Gz5Ye644GV44KM44KL6aCG5bqP44Gv44CB44G+44GaIHRoaXMub254eHh4IOOBjOWRvOOBs+WHuuOBleOCjOOAgeOBguOBqOOBryBvbigpIOOBp+eZu+mMsuOBl+OBn+mghueVquOAglxyXG4gKiBAbWVtYmVyb2YgcGhpbmFcclxuICovXHJcbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG9uXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMsuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog77yR44Gk44Gu44Kk44OZ44Oz44OI44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44Gv44GE44GP44Gk44Gn44KC55m76Yyy44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmqJnmupbjga7jgqTjg5njg7Pjg4jjgpLmpJznn6XjgZnjgovjgavjga/jgIHjgqrjg5bjgrjjgqfjgq/jg4jjga4ge0BsaW5rIE9iamVjdDJEI2ludGVyYWN0aXZlfSDjg5fjg63jg5Hjg4bjgqPjgYwgdHJ1ZSDjgafjgYLjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcclxuICAgKiB7QGxpbmsgT2JqZWN0MkQjaW50ZXJhY3RpdmV9IOODl+ODreODkeODhuOCo+OCkuioreWumuOBmeOCi+OBq+OBryB7QGxpbmsgT2JqZWN0MkQjc2V0SW50ZXJhY3RpdmV9IOODoeOCveODg+ODieOCkuWRvOOBs+WHuuOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICog44G+44Gf44CBe0BsaW5rICNmbGFyZX0g44KEIHtAbGluayAjZmlyZX0g44Gr44KI44Gj44Gm5a6a576p44GX44Gf44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44KC55m76Yyy44GZ44KL44GT44Go44GMXHJcbiAgICog44Gn44GN44G+44GZ44CC44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu44Kk44OZ44Oz44OI44Oq44K544OK44GvIHtAbGluayBPYmplY3QyRCNpbnRlcmFjdGl2ZX0g44OX44Ot44OR44OG44Kj44Gr44KI44KJ44Ga5ZG844Gz5Ye644GV44KM44G+44GZ44CCXHJcbiAgICog44Gq44GK44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu44Kq44OW44K444Kn44Kv44OI44GvIEV2ZW50IOOCquODluOCuOOCp+OCr+ODiOOBqOOBr+eVsOOBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjUmVmZXJlbmNlXHJcbiAgICog5qiZ5rqW44Gu44Kk44OZ44Oz44OI44Gu56iu6aGe44Gv5Lul5LiL44KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogLSBbRXZlbnQgcmVmZXJlbmNlIHwgTUROXSggaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzIClcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHZhciBzaGFwZSA9IENpcmNsZVNoYXBlKCkuYWRkQ2hpbGRUbyh0aGlzKS5zZXRJbnRlcmFjdGl2ZSh0cnVlKS5zZXRQb3NpdGlvbig1MCwgNTApO1xyXG4gICAqICAgICBzaGFwZS5vbihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICogICAgICAgdGhpcy5jb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAqICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiuOBqOOBquOCi+mWouaVsFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lci5ldmVudCBFdmVudCDjgqrjg5bjgrjjgqfjgq/jg4jjgIHjgb7jgZ/jga/jgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBvbih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBvZmZcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDjgYLjgovnqK7poZ7jga7jgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLjgZnjgbnjgabliYrpmaTjgZnjgovjgavjga8ge0BsaW5rICNjbGVhcn0g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDjgqTjg5njg7Pjg4jjg6rjgrnjg4rplqLmlbBcclxuICAgKi9cclxuICBvZmYodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XHJcbiAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XHJcbiAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmaXJlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkuihqOOBmeOCquODluOCuOOCp+OCr+ODiOOCkuaMh+WumuOBl+OBpuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkueZuueBq+OBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkuihqOOBmeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudC50eXBlIOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruWQjeWJjVxyXG4gICAqL1xyXG4gICBmaXJlKGUpIHtcclxuICAgIGUudGFyZ2V0ID0gdGhpcztcclxuICAgIHZhciBvbGRFdmVudE5hbWUgPSAnb24nICsgZS50eXBlO1xyXG4gICAgaWYgKHRoaXNbb2xkRXZlbnROYW1lXSkgdGhpc1tvbGRFdmVudE5hbWVdKGUpO1xyXG5cclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXTtcclxuICAgIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgICAgLy8gdmFyIHRlbXAgPSBsaXN0ZW5lcnMuY2xvbmUoKTtcclxuICAgICAgdmFyIHRlbXAgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XHJcbiAgICAgIGZvciAodmFyIGk9MCxsZW49dGVtcC5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICAgIHRlbXBbaV0uY2FsbCh0aGlzLCBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmbGFyZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgqTjg5njg7Pjg4jlkI3jgpLmjIflrprjgZfjgabjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgpLnmbrngavjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIHBhcmFtIOW8leaVsOOCkuaMh+WumuOBmeOCi+OBk+OBqOOBq+OCiOOCiuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBq+S7u+aEj+OBruODl+ODreODkeODhuOCo+OCkuioreWumuOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqIOOBk+OCjOOBq+OCiOOCiuOAgeWRvOOBs+WHuuOBl+WFg+OBjOOCpOODmeODs+ODiOODquOCueODiuOBq+S7u+aEj+OBruWApOOCkua4oeOBmeOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqIO+8iOOBn+OBoOOBlyB0YXJnZXQg44OX44Ot44OR44OG44Kj44Gr44Gv5b+F44Ga6Ieq5YiG6Ieq6Lqr44GM5qC857SN44GV44KM44G+44GZ44CC77yJXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICAvL1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu5ZCN5YmNXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbV0g44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gr44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KL44Gf44KB44Gu44Kq44OW44K444Kn44Kv44OIXHJcbiAgKi9cclxuICBmbGFyZSh0eXBlLCBwYXJhbSkge1xyXG4gICAgdmFyIGUgPSB7dHlwZTp0eXBlfTtcclxuICAgIGlmIChwYXJhbSkge1xyXG4gICAgICBmb3JJbi5jYWxsKHBhcmFtLCBmdW5jdGlvbihrZXksIHZhbCkge1xyXG4gICAgICAvLyBwYXJhbS5mb3JJbihmdW5jdGlvbihrZXksIHZhbCkge1xyXG4gICAgICAgIGVba2V5XSA9IHZhbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcmUoZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG9uZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDkuIDluqbjgaDjgZHlrp/ooYzjgZXjgozjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLnmbvpjLLjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOaMh+WumuOBl+OBn+OCpOODmeODs+ODiOODquOCueODiuOBjOS4gOW6puWun+ihjOOBleOCjOOCi+OBqOOAgeOBneOBruOCpOODmeODs+ODiOODquOCueODiuOBr+WJiumZpOOBleOCjOOBvuOBmeOAguOBneOCjOS7peWkluOBruaMmeWLleOBryB7QGxpbmsgI29ufSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiuOBqOOBquOCi+mWouaVsFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lci5ldmVudCBFdmVudCDjgqrjg5bjgrjjgqfjgq/jg4jjgIHjgb7jgZ/jga/jgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBvbmUodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gbGlzdGVuZXIuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuICAgICAgc2VsZi5vZmYodHlwZSwgZnVuYyk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub24odHlwZSwgZnVuYyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGhhc1xyXG4gICAqIOOCpOODmeODs+ODiOODquOCueODiuOBjOeZu+mMsuOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuiqv+OBueOBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5oyH5a6a44GX44Gf44Kk44OZ44Oz44OI44Gu56iu6aGe44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44GM55m76Yyy44GV44KM44Gm44GE44KL5aC05ZCI44GvIHRydWXjgIHjgZ3jgYbjgafjgarjgYTloLTlkIjjga8gZmFsc2Ug44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjgYznmbvpjLLjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBoYXModHlwZSkge1xyXG4gICAgcmV0dXJuICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ubGVuZ3RoICE9PSAwKSB8fCAhIXRoaXNbJ29uJyArIHR5cGVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbGVhclxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgYLjgovnqK7poZ7jga7jgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLjgZnjgbnjgabliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOeJueWumuOBruOCpOODmeODs+ODiOODquOCueODiuOBruOBv+OCkuWJiumZpOOBmeOCi+OBq+OBryB7QGxpbmsgI29mZn0g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKi9cclxuICBjbGVhcih0eXBlKSB7XHJcbiAgICB2YXIgb2xkRXZlbnROYW1lID0gJ29uJyArIHR5cGU7XHJcbiAgICBpZiAodGhpc1tvbGRFdmVudE5hbWVdKSBkZWxldGUgdGhpc1tvbGRFdmVudE5hbWVdO1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGFkZEV2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNvbn0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCByZW1vdmVFdmVudExpc3RlbmVyXHJcbiAqIHtAbGluayAjb2ZmfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNsZWFyRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI2NsZWFyfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGhhc0V2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNoYXN9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudFxyXG4gKiB7QGxpbmsgI2ZpcmV9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudEJ5VHlwZVxyXG4gKiB7QGxpbmsgI2ZsYXJlfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbmNvbnN0IG1ldGhvZE1hcCA9IHtcclxuICBhZGRFdmVudExpc3RlbmVyOiAnb24nLFxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6ICdvZmYnLFxyXG4gIGNsZWFyRXZlbnRMaXN0ZW5lcjogJ2NsZWFyJyxcclxuICBoYXNFdmVudExpc3RlbmVyOiAnaGFzJyxcclxuICBkaXNwYXRjaEV2ZW50OiAnZmlyZScsXHJcbiAgZGlzcGF0Y2hFdmVudEJ5VHlwZTogJ2ZsYXJlJyxcclxufTtcclxuLy8gbWV0aG9kTWFwLmZvckluKGZ1bmN0aW9uKG9sZCwgbmFtZSkge1xyXG5mb3JJbi5jYWxsKG1ldGhvZE1hcCwgZnVuY3Rpb24ob2xkLCBuYW1lKSB7XHJcbiAgLy8gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS4kbWV0aG9kKG9sZCwgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlW25hbWVdKTtcclxuICAkbWV0aG9kLmNhbGwoRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSwgb2xkLCBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlW25hbWVdKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuRmxvd1xyXG4gKiB0aWNrIG1hbmFnZW1lbnQgY2xhc3NcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEZsb3cgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihmdW5jLCB3YWl0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdHVzID0gJ3BlbmRpbmcnO1xyXG4gICAgdGhpcy5yZXN1bHRWYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5mdW5jID0gZnVuYztcclxuXHJcbiAgICBpZiAod2FpdCAhPT0gdHJ1ZSkge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5yZXNvbHZlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgc2VsZi5zdGF0dXMgPSAncmVzb2x2ZWQnO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5yZWplY3QuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuICAgICAgICBzZWxmLnN0YXR1cyA9ICdyZWplY3RlZCc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmZ1bmMocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog5oiQ5YqfXHJcbiAgICovXHJcbiAgcmVzb2x2ZShhcmcpIHtcclxuICAgIHRoaXMucmVzdWx0VmFsdWUgPSBhcmc7XHJcblxyXG4gICAgLy8g44Kt44Ol44O844Gr56mN44G+44KM44Gf6Zai5pWw44KS5a6f6KGMXHJcbiAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgZnVuYyh0aGlzLnJlc3VsdFZhbHVlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgLy8gdGhpcy5fcXVldWUuY2xlYXIoKTtcclxuICAgIGNsZWFyLmNhbGwodGhpcy5fcXVldWUpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDlpLHmlZdcclxuICAgKi9cclxuICByZWplY3QoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDpnZ7lkIzmnJ/ntYLkuobmmYLjga7lh6bnkIbjgpLnmbvpjLJcclxuICAgKi9cclxuICB0aGVuKGZ1bmMpIHtcclxuICAgIC8vIOaIkOWKn+OCueODhuODvOOCv+OCueOBoOOBo+OBn+WgtOWQiOOBr+WNs+Wun+ihjFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAncmVzb2x2ZWQnKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IGZ1bmModGhpcy5yZXN1bHRWYWx1ZSk7XHJcbiAgICAgIHJldHVybiBGbG93LnJlc29sdmUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBmbG93ID0gbmV3IEZsb3coZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLl9xdWV1ZS5wdXNoKGZ1bmN0aW9uKGFyZykge1xyXG4gICAgICAgIHZhciByZXN1bHRWYWx1ZSA9IGZ1bmMoYXJnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdFZhbHVlIGluc3RhbmNlb2YgRmxvdykge1xyXG4gICAgICAgICAgcmVzdWx0VmFsdWUudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBmbG93LnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZmxvdy5yZXNvbHZlKHJlc3VsdFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGZsb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzb2x2ZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmxvdykge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGZsb3cgPSBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmxvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhbGwoZmxvd3MpIHtcclxuICAgIHJldHVybiBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICB2YXIgYXJncyA9IFtdO1xyXG5cclxuICAgICAgZmxvd3MuZm9yRWFjaChmdW5jdGlvbihmbG93KSB7XHJcbiAgICAgICAgZmxvdy50aGVuKGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICsrY291bnQ7XHJcbiAgICAgICAgICBhcmdzLnB1c2goZCk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvdW50ID49IGZsb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5UaWNrZXJcclxuICogdGljayBtYW5hZ2VtZW50IGNsYXNzXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBUaWNrZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvLyAvKiog57WM6YGO44OV44Os44O844Og5pWwICovXHJcbiAgLy8gZnJhbWUgPSBudWxsXHJcblxyXG4gIC8vIC8qKiAx44OV44Os44O844Og44Gu57WM6YGO5pmC6ZaTICovXHJcbiAgLy8gZGVsdGFUaW1lID0gbnVsbFxyXG4gIFxyXG4gIC8vIC8qKiDlhajkvZPjga7ntYzpgY7mmYLplpMgKi9cclxuICAvLyBlbGFwc2VkVGltZSA9IG51bGxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZnBzID0gMzA7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMuZGVsdGFUaW1lID0gMDtcclxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5uZXIgPSBUaWNrZXIucnVubmVyO1xyXG4gIH1cclxuXHJcbiAgdGljayhmdW5jKSB7XHJcbiAgICB0aGlzLm9uKCd0aWNrJywgZnVuYyk7XHJcbiAgfVxyXG5cclxuICB1bnRpY2soZnVuYykge1xyXG4gICAgdGhpcy5vZmYoJ3RpY2snLCBmdW5jKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHZhciBub3cgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgLy8gMeODleODrOODvOODoOOBq+aOm+OBi+OBo+OBn+aZgumWk1xyXG4gICAgdGhpcy5kZWx0YVRpbWUgPSBub3cgLSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgLy8g5YWo5L2T44Gu57WM6YGO5pmC6ZaTXHJcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbm93IC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5jdXJyZW50VGltZSA9IG5vdztcclxuICAgIHRoaXMuZmxhcmUoJ3RpY2snKTtcclxuICAgIHZhciBlbmQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuICAgIC8vIOODleODrOODvOODoOOCkuabtOaWsFxyXG4gICAgdGhpcy5mcmFtZSArPSAxO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBlbGFwc2VkIHRpbWVcclxuICAgIHZhciBlbGFwc2VkID0gZW5kLXN0YXJ0O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBuZXh0IHdhaXRpbmcgdGltZVxyXG4gICAgdmFyIGRlbGF5ID0gTWF0aC5tYXgodGhpcy5mcmFtZVRpbWUtZWxhcHNlZCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGRlbGF5O1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuY3VycmVudFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChzZWxmLmlzUGxheWluZykge1xyXG4gICAgICAgIHZhciBkZWxheSA9IHNlbGYucnVuKCk7XHJcbiAgICAgICAgc2VsZi5ydW5uZXIoZm4sIGRlbGF5KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZuKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZXdpbmQoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIGdldCBmcHMoKSB7IHJldHVybiB0aGlzLl9mcHM7IH1cclxuICBzZXQgZnBzKHYpIHtcclxuICAgIHRoaXMuX2ZwcyA9IHY7XHJcbiAgICB0aGlzLmZyYW1lVGltZSA9IDEwMDAvdGhpcy5fZnBzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bm5lcihydW4sIGRlbGF5KSB7XHJcbiAgICBzZXRUaW1lb3V0KHJ1biwgZGVsYXkpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlJhbmRvbVxyXG4gKiAjIOS5seaVsOOCkuaJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxyXG4gKiDkubHmlbDjgpLmibHjgYbjgZ/jgoHjga7jg6Hjgr3jg4Pjg4njgoTjg5fjg63jg5Hjg4bjgqPjgpLlrprnvqnjgZfjgabjgYTjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFJhbmRvbSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbc2VlZCA9IDFdXHJcbiAgICog5Lmx5pWw44Gu44K344O844OJ44Gn44GZ44CCXHJcbiAgICovXHJcbiAgLy8gc2VlZCA9IDFcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CC5byV5pWw44GnIHtAbGluayAjc2VlZH0g44KS6Kit5a6a44Gn44GN44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzZWVkID0gKERhdGUubm93KCkpIHx8IDFdIOOCt+ODvOODiVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNlZWQpIHtcclxuICAgIHRoaXMuc2VlZCA9IHNlZWQgfHwgKERhdGUubm93KCkpIHx8IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIDB+MeOBruS5seaVsOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMH4xIOOBruS5seaVsFxyXG4gICAqL1xyXG4gIHJhbmRvbSgpIHtcclxuICAgIHZhciBzZWVkID0gdGhpcy5zZWVkO1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA8PCAxMyk7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkID4+PiAxNyk7XHJcbiAgICBzZWVkID0gKHNlZWQgXiAoc2VlZCA8PCA1KSk7XHJcblxyXG4gICAgdGhpcy5zZWVkID0gc2VlZDtcclxuXHJcbiAgICByZXR1cm4gKHNlZWQgPj4+IDApIC8gcGhpbmEudXRpbC5SYW5kb20uTUFYO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kaW50XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCkXHJcbiAgICovXHJcbiAgcmFuZGludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMucmFuZG9tKCkqKG1heC1taW4rMSkgKSArIG1pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGZsb2F0XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pWw5YCkXHJcbiAgICovXHJcbiAgcmFuZGZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oKSoobWF4LW1pbikrbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYm9vbFxyXG4gICAqIOODqeODs+ODgOODoOOBquecn+WBveWApOOCkui/lOOBl+OBvuOBmeOAguW8leaVsOOBp+eZvuWIhueOh+OCkuaMh+WumuOBp+OBjeOBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcGVyZWNlbnQgPSA1MF0g55yf44Gr44Gq44KL55m+5YiG546HXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g44Op44Oz44OA44Og44Gq55yf5YG95YCkXHJcbiAgICovXHJcbiAgcmFuZGJvb2wocGVyY2VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKCkgPCAocGVyY2VudCA9PT0gdW5kZWZpbmVkID8gNTAgOiBwZXJjZW50KSAvIDEwMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGFycmF5XHJcbiAgICog5Lu75oSP44Gu56+E5Zuy44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS5qC857SN44GX44Gf5Lu75oSP44Gu6ZW344GV44Gu6YWN5YiX44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW4gPSAxMDBdIOmFjeWIl+OBrumVt+OBlVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWluID0gMF0g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttYXggPSAxMDBdIOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCk44Gu5YWl44Gj44Gf6YWN5YiXXHJcbiAgICovXHJcbiAgcmFuZGFycmF5KGxlbiwgbWluLCBtYXgpIHtcclxuICAgIGxlbiA9IGxlbiB8fCAxMDA7XHJcbiAgICBtaW4gPSBtaW4gfHwgMDtcclxuICAgIG1heCA9IG1heCB8fCAxMDA7XHJcblxyXG4gICAgcmV0dXJuIChsZW4pLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmFuZGludChtaW4sIG1heCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWVkKCkgeyByZXR1cm4gdGhpcy5fc2VlZDsgfVxyXG4gIHNldCBzZWVkKHYpIHsgdGhpcy5fc2VlZCA9ICh2ID4+PiAwKSB8fCAxOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0U2VlZCBcclxuICAgKiB7QGxpbmsgI3NlZWR9IOOBruWApOOCkuWPluW+l+OBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44K344O844OJXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRTZWVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0U2VlZFxyXG4gICAqIHtAbGluayAjc2VlZH0g44Gu5YCk44KS44K744OD44OI44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzZWVkID0gMV0g44K344O844OJXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzdGF0aWMgc2V0U2VlZChzZWVkKSB7XHJcbiAgICB0aGlzLnNlZWQgPSAoc2VlZCA+Pj4gMCkgfHwgMTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiAwfjHjga7kubHmlbDjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kb219IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMH4xIOOBruS5seaVsFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZG9tKCkge1xyXG4gICAgdGhpcy5zZWVkID0gdGhpcy54b3IzMih0aGlzLnNlZWQpO1xyXG4gICAgcmV0dXJuICh0aGlzLnNlZWQgPj4+IDApIC8gcGhpbmEudXRpbC5SYW5kb20uTUFYO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kaW50XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGludH0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kaW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gcGhpbmEuZ2xvYmFsLk1hdGguZmxvb3IoIHRoaXMucmFuZG9tKCkqKG1heC1taW4rMSkgKSArIG1pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGZsb2F0XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGZsb2F0fSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbDlgKRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRmbG9hdChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKCkqKG1heC1taW4pK21pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGJvb2xcclxuICAgKiDjg6njg7Pjg4Djg6DjgarnnJ/lgb3lgKTjgpLov5TjgZfjgb7jgZnjgILlvJXmlbDjgafnmb7liIbnjofjgpLmjIflrprjgafjgY3jgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kYm9vbH0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwZXJlY2VudCA9IDUwXSDnnJ/jgavjgarjgovnmb7liIbnjodcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquecn+WBveWApFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGJvb2wocGVyZWNlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJhbmRpbnQoMCwgOTkpIDwgKHBlcmVjZW50IHx8IDUwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGFycmF5XHJcbiAgICog5Lu75oSP44Gu56+E5Zuy44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS5qC857SN44GX44Gf5Lu75oSP44Gu6ZW344GV44Gu6YWN5YiX44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGFycmF5fSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbiA9IDEwMF0g6YWN5YiX44Gu6ZW344GVXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW4gPSAwXSDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heCA9IDEwMF0g56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjga7lhaXjgaPjgZ/phY3liJdcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRhcnJheShsZW4sIG1pbiwgbWF4KSB7XHJcbiAgICBsZW4gPSBsZW4gfHwgMTAwO1xyXG4gICAgbWluID0gbWluIHx8IDA7XHJcbiAgICBtYXggPSBtYXggfHwgMTAwO1xyXG5cclxuICAgIHJldHVybiAobGVuKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJhbmRpbnQobWluLCBtYXgpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB4b3IzMlxyXG4gICAqIHhvcnNoaWZ0IOOCkueUqOOBhOOBpueWkeS8vOS5seaVsOWIl+OCkueUn+aIkOOBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzZWVkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDnlpHkvLzkubHmlbDliJdcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHhvcjMyKHNlZWQpIHtcclxuICAgIHNlZWQgPSBzZWVkIF4gKHNlZWQgPDwgMTMpO1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA+Pj4gMTcpO1xyXG4gICAgc2VlZCA9IChzZWVkIF4gKHNlZWQgPDwgNSkpO1xyXG5cclxuICAgIHJldHVybiBzZWVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB1dWlkXHJcbiAgICogdXVpZCDjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHV1aWRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcclxuICBzdGF0aWMgdXVpZCgpIHtcclxuICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBpZihwaGluYS5nbG9iYWwucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHBoaW5hLmdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgIH1cclxuICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcbiAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XHJcbiAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xyXG4gICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXVpZDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IE1BWFxyXG4gKiDlhoXpg6jnmoTjgavkvb/nlKjjgZXjgozjgovlrprmlbDjgafjgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblJhbmRvbS5NQVggPSA0Mjk0OTY3Mjk1O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbc2VlZCA9IChEYXRlLm5vdygpKV0g44K344O844OJXHJcbiAqIHN0YXRpYyDjg6Hjgr3jg4Pjg4njga7kubHmlbDjga7jgrfjg7zjg4njgafjgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblJhbmRvbS5zZWVkID0gKERhdGUubm93KCkpO1xyXG5cclxuXHJcbi8vIHByb3RvdHlwZeaLoeW8teOBr+OBl+OBquOBhFxyXG4vLyBNYXRoLiRtZXRob2QoXCJyYW5kaW50XCIsIGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbi8vICAgcmV0dXJuIHBoaW5hLnV0aWwuUmFuZG9tLnJhbmRpbnQobWluLCBtYXgpO1xyXG4vLyB9KTtcclxuXHJcbi8vIE1hdGguJG1ldGhvZChcInJhbmRmbG9hdFwiLCBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4vLyAgIHJldHVybiBwaGluYS51dGlsLlJhbmRvbS5yYW5kZmxvYXQobWluLCBtYXgpO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5TdXBwb3J0XHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgU3VwcG9ydCB7fVN1cHBvcnQuY2FudmFzID0gISFwaGluYSQxLmdsb2JhbC5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblN1cHBvcnQud2ViR0wgPSAoZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICEhcGhpbmEkMS5nbG9iYWwuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEICYmICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxufSkoKTtcclxuU3VwcG9ydC53ZWJBdWRpbyA9ICEhcGhpbmEkMS5nbG9iYWwuQXVkaW9Db250ZXh0IHx8ICEhcGhpbmEkMS5nbG9iYWwud2Via2l0QXVkaW9Db250ZXh0IHx8ICEhcGhpbmEkMS5nbG9iYWwubW96QXVkaW9Db250ZXh0O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkdyaWRcclxuICovXHJcbmNsYXNzIEdyaWQge1xyXG5cclxuICAvLyAvKiog5bmFICovXHJcbiAgLy8gd2lkdGg6IDY0MCxcclxuICAvLyAvKiog5YiX5pWwICovXHJcbiAgLy8gY29sdW1uczogMTIsXHJcbiAgLy8gLyoqIOODq+ODvOODlyAqL1xyXG4gIC8vIGxvb3A6IGZhbHNlLFxyXG4gIC8vIC8qKiDjgqrjg5Xjgrvjg4Pjg4jlgKQgKi9cclxuICAvLyBvZmZzZXQ6IDAsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHZhciBwYXJhbSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgdmFyIHdpZHRoID0gcGFyYW0ud2lkdGggfHwgNjQwO1xyXG4gICAgICB2YXIgY29sdW1ucyA9IHBhcmFtLmNvbHVtbnMgfHwgMTI7XHJcbiAgICAgIHZhciBsb29wID0gcGFyYW0ubG9vcCB8fCBmYWxzZTtcclxuICAgICAgdmFyIG9mZnNldCA9IHBhcmFtLm9mZnNldCB8fCAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciB3aWR0aCAgID0gYXJndW1lbnRzWzBdIHx8IDY0MDtcclxuICAgICAgdmFyIGNvbHVtbnMgPSBhcmd1bWVudHNbMV0gfHwgMTI7XHJcbiAgICAgIHZhciBsb29wICAgID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xyXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzWzNdIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcclxuICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgIHRoaXMudW5pdFdpZHRoID0gdGhpcy53aWR0aC90aGlzLmNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICAvLyDjgrnjg5Hjg7PmjIflrprjgaflgKTjgpLlj5blvpco6LKg5pWw44KCb2spXHJcbiAgc3BhbihpbmRleCkge1xyXG4gICAgaWYgKHRoaXMubG9vcCkge1xyXG4gICAgICBpbmRleCArPSB0aGlzLmNvbHVtbnM7XHJcbiAgICAgIGluZGV4ICU9IHRoaXMuY29sdW1ucztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRXaWR0aCAqIGluZGV4ICsgdGhpcy5vZmZzZXQ7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIHVuaXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bml0V2lkdGg7XHJcbiAgfVxyXG5cclxuICBjZW50ZXIob2Zmc2V0KSB7XHJcbiAgICB2YXIgaW5kZXggPSBvZmZzZXQgfHwgMDtcclxuICAgIHJldHVybiAodGhpcy53aWR0aC8yKSArICh0aGlzLnVuaXRXaWR0aCAqIGluZGV4KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5NYXRoXHJcbiAqICMg5ouh5by144GX44GfIE1hdGgg44Kv44Op44K5XHJcbiAqIOaVsOWtpueahOOBquWHpueQhuOCkuaJseOBhiBNYXRoIOOCr+ODqeOCueOCkuaLoeW8teOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKiBcclxuICog5YWo44Gmc3RhdGlj44Oh44Oz44OQ44O844Gn44GZ44CCXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICogQG1ldGhvZCBjbGFtcFxyXG4gKiDmjIflrprjgZfjgZ/lgKTjgpLmjIflrprjgZfjgZ/nr4Tlm7Ljgavlj47jgoHjgZ/ntZDmnpzjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIE1hdGguY2xhbXAoMTIwLCAwLCA2NDApOyAvLyA9PiAxMjBcclxuICogICAgIE1hdGguY2xhbXAoOTgwLCAwLCA2NDApOyAvLyA9PiA2NDBcclxuICogICAgIE1hdGguY2xhbXAoLTgwLCAwLCA2NDApOyAvLyA9PiAwXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSDlgKRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbiAg56+E5Zuy44Gu5LiL6ZmQXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggIOevhOWbsuOBruS4iumZkFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IOS4uOOCgeOBn+e1kOaenOOBruWApFxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuICh2YWx1ZSA8IG1pbikgPyBtaW4gOiAoICh2YWx1ZSA+IG1heCkgPyBtYXggOiB2YWx1ZSApO1xyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IERFR19UT19SQURcclxuICog5bqm44KS44Op44K444Ki44Oz44Gr5aSJ5o+b44GZ44KL44Gf44KB44Gu5a6a5pWw44Gn44GZ44CCXHJcbiAqL1xyXG52YXIgREVHX1RPX1JBRCA9IE1hdGguUEkvMTgwO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlR3ZWVuXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy50aW1lID0gMDtcclxuICB9XHJcblxyXG4gIGZyb21Ubyh0YXJnZXQsIGJlZ2luUHJvcHMsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMuYmVnaW5Qcm9wcyA9IGJlZ2luUHJvcHM7XHJcbiAgICB0aGlzLmZpbmlzaFByb3BzID0gZmluaXNoUHJvcHM7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTAwMDtcclxuICAgIHRoaXMuZWFzaW5nID0gZWFzaW5nO1xyXG5cclxuICAgIC8vIHNldHVwXHJcbiAgICB0aGlzLmNoYW5nZVByb3BzID0ge307XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gYmVnaW5Qcm9wcykge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUHJvcHNba2V5XSA9IGZpbmlzaFByb3BzW2tleV0gLSBiZWdpblByb3BzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0byh0YXJnZXQsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB2YXIgYmVnaW5Qcm9wcyA9IHt9O1xyXG5cclxuICAgIGZvciAodmFyIGtleSBpbiBmaW5pc2hQcm9wcykge1xyXG4gICAgICBiZWdpblByb3BzW2tleV0gPSB0YXJnZXRba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZyb21Ubyh0YXJnZXQsIGJlZ2luUHJvcHMsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGZyb20odGFyZ2V0LCBiZWdpblByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICAgIHZhciBmaW5pc2hQcm9wcyA9IHt9O1xyXG5cclxuICAgICAgZm9yICh2YXIga2V5IGluIGJlZ2luUHJvcHMpIHtcclxuICAgICAgICBmaW5pc2hQcm9wc1trZXldID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBiZWdpblByb3BzW2tleV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBieSh0YXJnZXQsIHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB2YXIgYmVnaW5Qcm9wcyA9IHt9O1xyXG4gICAgdmFyIGZpbmlzaFByb3BzID0ge307XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XHJcbiAgICAgIGJlZ2luUHJvcHNba2V5XSA9IHRhcmdldFtrZXldO1xyXG4gICAgICBmaW5pc2hQcm9wc1trZXldID0gdGFyZ2V0W2tleV0gKyBwcm9wc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgeW95bygpIHtcclxuICAgIHZhciB0ZW1wID0gdGhpcy5iZWdpblByb3BzO1xyXG4gICAgdGhpcy5iZWdpblByb3BzID0gdGhpcy5maW5pc2hQcm9wcztcclxuICAgIHRoaXMuZmluaXNoUHJvcHMgPSB0ZW1wO1xyXG4gICAgLy8gdGhpcy5jaGFuZ2VQcm9wcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlLCBpbmRleCkge1xyXG4gICAgZm9ySW4uY2FsbCh0aGlzLmNoYW5nZVByb3BzLCBmdW5jdGlvbihrZXksIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICB0aGlzLmNoYW5nZVByb3BzW2tleV0gPSAtdmFsdWU7XHJcbiAgICAgIHRoaXMudGFyZ2V0W2tleV0gPSB0aGlzLmJlZ2luUHJvcHNba2V5XTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgLy8gVE9ETzogZWFzaW5nIOOCguWPjei7ouOBleOBm+OCi1xyXG4gICAgLy8gdGhpcy5lYXNpbmcgPSBlYXNpbmc7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdhaW4odGltZSkge1xyXG4gICAgdGhpcy5zZWVrKHRoaXMudGltZSArIHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZm9yd2FyZCh0aW1lKSB7XHJcbiAgICB0aGlzLnNlZWsodGhpcy50aW1lICsgdGltZSk7XHJcbiAgfVxyXG5cclxuICBiYWNrd2FyZCh0aW1lKSB7XHJcbiAgICB0aGlzLnNlZWsodGhpcy50aW1lIC0gdGltZSk7XHJcbiAgfVxyXG5cclxuICBzZWVrKHRpbWUpIHtcclxuICAgIC8vIHRoaXMudGltZSA9IE1hdGguY2xhbXAodGltZSwgMCwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICB0aGlzLnRpbWUgPSBjbGFtcCh0aW1lLCAwLCB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgICAvLyB0aGlzLmJlZ2luUHJvcHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgZm9ySW4uY2FsbCh0aGlzLmJlZ2luUHJvcHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIHYgPSB0aGlzLmVhc2luZyh0aGlzLnRpbWUsIHZhbHVlLCB0aGlzLmNoYW5nZVByb3BzW2tleV0sIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgICB0aGlzLnRhcmdldFtrZXldID0gdjtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVhc2luZygpIHsgcmV0dXJuIHRoaXMuX2Vhc2luZzsgfVxyXG4gIHNldCBlYXNpbmcodikge1xyXG4gICAgdGhpcy5fZWFzaW5nID0gVHdlZW4uRUFTSU5HW3ZdIHx8IFR3ZWVuLkVBU0lORy5kZWZhdWx0O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIOOCpOODvOOCuOODs+OCsFxyXG4gKiAjIyMgUmVmZXJlbmNlXHJcbiAqIC0gPGh0dHA6Ly9jb2RlcmVwb3Mub3JnL3NoYXJlL3dpa2kvSlNUd2VlbmVyPlxyXG4gKiAtIDxodHRwOi8vY29kZXJlcG9zLm9yZy9zaGFyZS9icm93c2VyL2xhbmcvamF2YXNjcmlwdC9qc3R3ZWVuZXIvdHJ1bmsvc3JjL0pTVHdlZW5lci5qcz5cclxuICogLSA8aHR0cDovL2dzZ2QuY28udWsvc2FuZGJveC9qcXVlcnkvZWFzaW5nL2pxdWVyeS5lYXNpbmcuMS4zLmpzPlxyXG4gKiAtIDxodHRwOi8vaG9zdGVkLnplaC5jb20uYnIvdHdlZW5lci9kb2NzL2VuLXVzL21pc2MvdHJhbnNpdGlvbnMuaHRtbD5cclxuICovXHJcblR3ZWVuLkVBU0lORyA9IHtcclxuXHJcbiAgLyoqIGRlZmF1bHQgKi9cclxuICBcImRlZmF1bHRcIjogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqdC9kICsgYjtcclxuICB9LFxyXG4gIC8qKiBsaW5lYXIgKi9cclxuICBsaW5lYXI6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKnQvZCArIGI7XHJcbiAgfSxcclxuICAvKiogc3dpbmcgKi9cclxuICBzd2luZzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICoodC89ZCkqKHQtMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblF1YWQgKi9cclxuICBlYXNlSW5RdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFF1YWQgKi9cclxuICBlYXNlT3V0UXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICoodC89ZCkqKHQtMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dFF1YWQgKi9cclxuICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcclxuICAgIHJldHVybiAtYy8yICooKC0tdCkqKHQtMikgLSAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZGVmZUluQ3ViaWMgKi9cclxuICBlYXNlSW5DdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEN1YmljICovXHJcbiAgZWFzZU91dEN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRDdWJpYyAqL1xyXG4gIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQgKyBiO1xyXG4gICAgcmV0dXJuIGMvMiooKHQtPTIpKnQqdCArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5DdWJpYyAqL1xyXG4gIGVhc2VPdXRJbkN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRDdWJpYyh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkN1YmljKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblF1YXJ0ICovXHJcbiAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KnQqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFF1YXJ0ICovXHJcbiAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKigodD10L2QtMSkqdCp0KnQgLSAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0UXVhcnQgKi9cclxuICBlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQgKyBiO1xyXG4gICAgcmV0dXJuIC1jLzIgKigodC09MikqdCp0KnQgLSAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluUXVhcnQgKi9cclxuICBlYXNlT3V0SW5RdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0UXVhcnQodCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5RdWFydCgodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5RdWludCAqL1xyXG4gIGVhc2VJblF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCp0KnQqdCArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFF1aW50ICovXHJcbiAgZWFzZU91dFF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCp0KnQgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0UXVpbnQgKi9cclxuICBlYXNlSW5PdXRRdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQqdCArIGI7XHJcbiAgICByZXR1cm4gYy8yKigodC09MikqdCp0KnQqdCArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5RdWludCAqL1xyXG4gIGVhc2VPdXRJblF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRRdWludCh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJblF1aW50KCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblNpbmUgKi9cclxuICBlYXNlSW5TaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKiBNYXRoLmNvcyh0L2QgKihNYXRoLlBJLzIpKSArIGMgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRTaW5lICovXHJcbiAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjICogTWF0aC5zaW4odC9kICooTWF0aC5QSS8yKSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dFNpbmUgKi9cclxuICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMvMiAqKE1hdGguY29zKE1hdGguUEkqdC9kKSAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5TaW5lICovXHJcbiAgZWFzZU91dEluU2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0U2luZSh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJblNpbmUoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluRXhwbyAqL1xyXG4gIGVhc2VJbkV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAodD09MCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICoodC9kIC0gMSkpICsgYiAtIGMgKiAwLjAwMTtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0RXhwbyAqL1xyXG4gIGVhc2VPdXRFeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gKHQ9PWQpID8gYitjIDogYyAqIDEuMDAxICooLU1hdGgucG93KDIsIC0xMCAqIHQvZCkgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0RXhwbyAqL1xyXG4gIGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQ9PTApIHJldHVybiBiO1xyXG4gICAgaWYodD09ZCkgcmV0dXJuIGIrYztcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMiAqIE1hdGgucG93KDIsIDEwICoodCAtIDEpKSArIGIgLSBjICogMC4wMDA1O1xyXG4gICAgcmV0dXJuIGMvMiAqIDEuMDAwNSAqKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkV4cG8gKi9cclxuICBlYXNlT3V0SW5FeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRFeHBvKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluRXhwbygodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5DaXJjICovXHJcbiAgZWFzZUluQ2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICooTWF0aC5zcXJ0KDEgLSh0Lz1kKSp0KSAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0Q2lyYyAqL1xyXG4gIGVhc2VPdXRDaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0odD10L2QtMSkqdCkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dENpcmMgKi9cclxuICBlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiAtYy8yICooTWF0aC5zcXJ0KDEgLSB0KnQpIC0gMSkgKyBiO1xyXG4gICAgcmV0dXJuIGMvMiAqKE1hdGguc3FydCgxIC0odC09MikqdCkgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQ2lyYyAqL1xyXG4gIGVhc2VPdXRJbkNpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dENpcmModCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5DaXJjKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkVsYXN0aWMgKi9cclxuICBlYXNlSW5FbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGlmKHQ9PTApIHJldHVybiBiOyAgaWYoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYoIXApIHA9ZCouMztcclxuICAgIGlmKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHM9cC80OyB9IGVsc2UgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4oYy9hKTtcclxuICAgIHJldHVybiAtKGEqTWF0aC5wb3coMiwxMCoodC09MSkpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0RWxhc3RpYyAqL1xyXG4gIGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGlmKHQ9PTApIHJldHVybiBiOyAgaWYoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYoIXApIHA9ZCouMztcclxuICAgIGlmKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHM9cC80OyB9IGVsc2UgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4oYy9hKTtcclxuICAgIHJldHVybihhKk1hdGgucG93KDIsLTEwKnQpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkgKyBjICsgYik7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0RWxhc3RpYyAqL1xyXG4gIGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIHZhciBzO1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7ICBpZigodC89ZC8yKT09MikgcmV0dXJuIGIrYzsgIGlmKCFwKSBwPWQqKC4zKjEuNSk7XHJcbiAgICBpZighYSB8fCBhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyBzPXAvNDsgfSAgICAgICBlbHNlIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luKGMvYSk7XHJcbiAgICBpZih0IDwgMSkgcmV0dXJuIC0uNSooYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xyXG4gICAgcmV0dXJuIGEqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSAqIE1hdGguc2luKCh0KmQtcykqKDIqTWF0aC5QSSkvcCApKi41ICsgYyArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluRWxhc3RpYyAqL1xyXG4gIGVhc2VPdXRJbkVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEVsYXN0aWModCoyLCBiLCBjLzIsIGQsIGEsIHApO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5FbGFzdGljKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQsIGEsIHApO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkJhY2sgKi9cclxuICBlYXNlSW5CYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZihzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCooKHMrMSkqdCAtIHMpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0QmFjayAqL1xyXG4gIGVhc2VPdXRCYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZihzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcbiAgICByZXR1cm4gYyooKHQ9dC9kLTEpKnQqKChzKzEpKnQgKyBzKSArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRCYWNrICovXHJcbiAgZWFzZUluT3V0QmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xyXG4gICAgaWYocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKih0KnQqKCgocyo9KDEuNTI1KSkrMSkqdCAtIHMpKSArIGI7XHJcbiAgICByZXR1cm4gYy8yKigodC09MikqdCooKChzKj0oMS41MjUpKSsxKSp0ICsgcykgKyAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQmFjayAqL1xyXG4gIGVhc2VPdXRJbkJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEJhY2sodCoyLCBiLCBjLzIsIGQsIHMpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5CYWNrKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQsIHMpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkJvdW5jZSAqL1xyXG4gIGVhc2VJbkJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMgLSBUd2Vlbi5FQVNJTkcuZWFzZU91dEJvdW5jZShkLXQsIDAsIGMsIGQpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0Qm91bmNlICovXHJcbiAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQpIDwoMS8yLjc1KSkge1xyXG4gICAgICByZXR1cm4gYyooNy41NjI1KnQqdCkgKyBiO1xyXG4gICAgfSBlbHNlIGlmKHQgPCgyLzIuNzUpKSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgxLjUvMi43NSkpKnQgKyAuNzUpICsgYjtcclxuICAgIH0gZWxzZSBpZih0IDwoMi41LzIuNzUpKSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjI1LzIuNzUpKSp0ICsgLjkzNzUpICsgYjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqKHQtPSgyLjYyNS8yLjc1KSkqdCArIC45ODQzNzUpICsgYjtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRCb3VuY2UgKi9cclxuICBlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQm91bmNlKHQqMiwgMCwgYywgZCkgKiAuNSArIGI7XHJcbiAgICBlbHNlIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEJvdW5jZSh0KjItZCwgMCwgYywgZCkgKiAuNSArIGMqLjUgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkJvdW5jZSAqL1xyXG4gIGVhc2VPdXRJbkJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Qm91bmNlKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQm91bmNlKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuUXVlcnlTdHJpbmdcclxuICogXHJcbiAqL1xyXG5jbGFzcyBRdWVyeVN0cmluZyB7XHJcblxyXG4gIHN0YXRpYyBwYXJzZSh0ZXh0LCBzZXAsIGVxLCBpc0RlY29kZSkge1xyXG4gICAgdGV4dCA9IHRleHQgfHwgbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcclxuICAgIHNlcCA9IHNlcCB8fCAnJic7XHJcbiAgICBlcSA9IGVxIHx8ICc9JztcclxuICAgIHZhciBkZWNvZGUgPSAoaXNEZWNvZGUpID8gZGVjb2RlVVJJQ29tcG9uZW50IDogZnVuY3Rpb24oYSkgeyByZXR1cm4gYTsgfTtcclxuICAgIHJldHVybiB0ZXh0LnNwbGl0KHNlcCkucmVkdWNlKGZ1bmN0aW9uKG9iaiwgdikge1xyXG4gICAgICB2YXIgcGFpciA9IHYuc3BsaXQoZXEpO1xyXG4gICAgICBvYmpbcGFpclswXV0gPSBkZWNvZGUocGFpclsxXSk7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RyaW5naWZ5KHZhbHVlLCBzZXAsIGVxLCBpc0VuY29kZSkge1xyXG4gICAgc2VwID0gc2VwIHx8ICcmJztcclxuICAgIGVxID0gZXEgfHwgJz0nO1xyXG4gICAgdmFyIGVuY29kZSA9IChpc0VuY29kZSkgPyBlbmNvZGVVUklDb21wb25lbnQgOiBmdW5jdGlvbihhKSB7IHJldHVybiBhOyB9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgIHJldHVybiBrZXkgKyBlcSArIGVuY29kZSh2YWx1ZVtrZXldKTtcclxuICAgIH0pLmpvaW4oc2VwKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLlN0cmluZ1xyXG4gKiAjIOaLoeW8teOBl+OBnyBTdHJpbmcg44Kv44Op44K5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZm9ybWF0XHJcbiAqIOODleOCqeODvOODnuODg+ODiOOBq+W8leaVsOOCkumBqeeUqOOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDlvJXmlbDjgYzjgqrjg5bjgrjjgqfjgq/jg4jjga7loLTlkIjjgIFcInvjg5fjg63jg5Hjg4bjgqPlkI19XCIg44GM44Kq44OW44K444Kn44Kv44OI44Gu44OX44Ot44OR44OG44Kj44Gu5YCk44Gr572u44GN5o+b44KP44KK44G+44GZ44CCXHJcbiAqIOaMh+WumuOBl+OBn+ODl+ODreODkeODhuOCo+OBjOOCquODluOCuOOCp+OCr+ODiOOBq+OBquOBhOWgtOWQiOOBr+epuuaWh+Wtl+WIl+OBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiDnrKwx5byV5pWw44GM44Kq44OW44K444Kn44Kv44OI44Gn44Gq44GL44Gj44Gf5aC05ZCI44CBXCJ75pW05pWwfVwiIOOBjOWQhOW8leaVsOOBq+e9ruOBjeaPm+OCj+OCiuOBvuOBmeOAglxyXG4gKiDmjIflrprjgZfjgZ/lgKTjga7lvJXmlbDjgYzjgarjgYvjgaPjgZ/loLTlkIjjga/nqbrmloflrZfliJfjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIG9iaiA9IHtyOiAxMjgsIGc6IDAsIGI6IDI1NX07XHJcbiAqICAgICBcImNvbG9yOiByZ2Ioe3J9LCB7Z30sIHtifSk7XCIuZm9ybWF0KG9iaik7IC8vID0+IFwiY29sb3I6IHJnYigxMjgsIDAsIDI1NSk7XCJcclxuICpcclxuICogICAgIFwiezB9ICsgezF9ID0gezJ9XCIuZm9ybWF0KDUsIDgsICg1KzgpKTsgLy8gPT4gXCI1ICsgOCA9IDEzXCJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiDjg5Hjg6njg6Hjg7zjgr/jgajjgarjgovjgqrjg5bjgrjjgqfjgq/jg4hcclxuICogQHJldHVybiB7U3RyaW5nfSDnlJ/miJDjgZfjgZ/mloflrZfliJdcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdChhcmcpIHtcclxuLy8gU3RyaW5nLnByb3RvdHlwZS4kbWV0aG9kKFwiZm9ybWF0XCIsIGZ1bmN0aW9uKGFyZykge1xyXG4gIC8vIOe9ruaPm+ODleOCoeODs+OCr1xyXG4gIHZhciByZXBfZm4gPSB1bmRlZmluZWQ7XHJcbiAgXHJcbiAgLy8g44Kq44OW44K444Kn44Kv44OI44Gu5aC05ZCIXHJcbiAgaWYgKHR5cGVvZiBhcmcgPT0gXCJvYmplY3RcIikge1xyXG4gICAgLyoqIEBpZ25vcmUgKi9cclxuICAgIHJlcF9mbiA9IGZ1bmN0aW9uKG0sIGspIHtcclxuICAgICAgaWYgKGFyZ1trXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBhcmdba107XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIC8vIOikh+aVsOW8leaVsOOBoOOBo+OBn+WgtOWQiFxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAvKiogQGlnbm9yZSAqL1xyXG4gICAgcmVwX2ZuID0gZnVuY3Rpb24obSwgaykge1xyXG4gICAgICB2YXIgdiA9IGFyZ3NbIHBhcnNlSW50KGspIF07XHJcbiAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSggL1xceyhcXHcrKVxcfS9nLCByZXBfZm4gKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGVhY2hcclxuICog5ZCE5paH5a2X44KS6aCG55Wq44Gr5rih44GX44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBzdHIgPSAnYWJjJztcclxuICogICAgIHN0ci5lYWNoKGZ1bmN0aW9uKGNoKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKGNoKTtcclxuICogICAgIH0pO1xyXG4gKiAgICAgLy8gPT4gJ2EnXHJcbiAqICAgICAvLyAgICAnYidcclxuICogICAgIC8vICAgICdjJ1xyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApFxyXG4gKi9cclxuZnVuY3Rpb24gZWFjaCQxKCkge1xyXG4vLyBTdHJpbmcucHJvdG90eXBlLiRtZXRob2QoXCJlYWNoXCIsIGZ1bmN0aW9uKCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5Db2xvclxyXG4gKiDjgqvjg6njg7zjgq/jg6njgrlcclxuICovXHJcbmNsYXNzIENvbG9yIHtcclxuXHJcbiAgLy8gLyoqIFLlgKQgKi9cclxuICAvLyByOiAyNTUsXHJcbiAgLy8gLyoqIEflgKQgKi9cclxuICAvLyBnOiAyNTUsXHJcbiAgLy8gLyoqIELlgKQgKi9cclxuICAvLyBiOiAyNTUsXHJcbiAgLy8gLyoqIEHlgKQgKi9cclxuICAvLyBhOiAxLjAsXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIneacn+WMllxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHIsIGcsIGIsIGEpIHtcclxuICAgIHRoaXMuciA9IDI1NTtcclxuICAgIHRoaXMuZyA9IDI1NTtcclxuICAgIHRoaXMuYiA9IDI1NTtcclxuICAgIHRoaXMuYSA9IDEuMDtcclxuICAgIHRoaXMuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrvjg4Pjgr/jg7wuXHJcbiAgICovXHJcbiAgc2V0KHIsIGcsIGIsIGEpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuICAgIHRoaXMuYSA9IChhICE9PSB1bmRlZmluZWQpID8gYSA6IDEuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pWw5YCk44Gr44KI44KL44K744OD44K/44O8LlxyXG4gICAqL1xyXG4gIHNldEZyb21OdW1iZXIociwgZywgYiwgYSkge1xyXG4gICAgdGhpcy5yID0gcjtcclxuICAgIHRoaXMuZyA9IGc7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gICAgdGhpcy5hID0gKGEgIT09IHVuZGVmaW5lZCkgPyBhIDogMS4wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDphY3liJfjgavjgojjgovjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRGcm9tQXJyYXkoYXJyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQuYXBwbHkodGhpcywgYXJyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCquODluOCuOOCp+OCr+ODiOOBq+OCiOOCi+OCu+ODg+OCv+ODvFxyXG4gICAqL1xyXG4gIHNldEZyb21PYmplY3Qob2JqKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQob2JqLnIsIG9iai5nLCBvYmouYiwgb2JqLmEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5paH5a2X5YiX44Gr44KI44KL44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0RnJvbVN0cmluZyhzdHIpIHtcclxuICAgIHZhciBjb2xvciA9IENvbG9yLnN0cmluZ1RvTnVtYmVyKHN0cik7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgY29sb3JbM10pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6LOi44GE44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0U21hcnQoKSB7XHJcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzWzBdO1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykge1xyXG4gICAgICB0aGlzLnNldChhcmd1bWVudHMuciwgYXJndW1lbnRzLmcsIGFyZ3VtZW50cy5iLCBhcmd1bWVudHMuYSk7XHJcbiAgICB9IGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHRoaXMuc2V0RnJvbUFycmF5KGFyZyk7XHJcbiAgICB9IGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICB0aGlzLnNldEZyb21PYmplY3QoYXJnKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZykgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aGlzLnNldEZyb21TdHJpbmcoYXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCAxNumAsuaVsOaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGVBc0hleCgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcIiN7MH17MX17Mn1cIixcclxuICAgIC8vIHJldHVybiBcIiN7MH17MX17Mn1cIi5mb3JtYXQoXHJcbiAgICAgIHRoaXMuci50b1N0cmluZygxNikucGFkZGluZygyLCAnMCcpLFxyXG4gICAgICB0aGlzLmcudG9TdHJpbmcoMTYpLnBhZGRpbmcoMiwgJzAnKSxcclxuICAgICAgdGhpcy5iLnRvU3RyaW5nKDE2KS5wYWRkaW5nKDIsICcwJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDU1Mg55SoIFJHQuaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGVBc1JHQigpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInJnYih7cn0se2d9LHtifSlcIiwge1xyXG4gICAgLy8gcmV0dXJuIFwicmdiKHtyfSx7Z30se2J9KVwiLmZvcm1hdCh7XHJcbiAgICAgIHI6IH5+dGhpcy5yLFxyXG4gICAgICBnOiB+fnRoaXMuZyxcclxuICAgICAgYjogfn50aGlzLmJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggUkdCQeaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGVBc1JHQkEoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIiwge1xyXG4gICAgLy8gcmV0dXJuIFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIuZm9ybWF0KHtcclxuICAgICAgcjogfn50aGlzLnIsXHJcbiAgICAgIGc6IH5+dGhpcy5nLFxyXG4gICAgICBiOiB+fnRoaXMuYixcclxuICAgICAgYTogdGhpcy5hXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggUkdCQSDmloflrZfliJfjgavlpInmj5tcclxuICAgKi9cclxuICB0b1N0eWxlKCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIsIHtcclxuICAgIC8vIHJldHVybiBcInJnYmEoe3J9LHtnfSx7Yn0se2F9KVwiLmZvcm1hdCh7XHJcbiAgICAgIHI6IH5+dGhpcy5yLFxyXG4gICAgICBnOiB+fnRoaXMuZyxcclxuICAgICAgYjogfn50aGlzLmIsXHJcbiAgICAgIGE6IHRoaXMuYVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1lbWJlciBwaGluYS51dGlsLkNvbG9yXHJcbiAgICogQG1ldGhvZCBzdHJUb051bVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdHJUb051bShzdHIpIHtcclxuICAgIHJldHVybiB0aGlzLnN0cmluZ1RvTnVtYmVyKHN0cik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RyaW5nVG9OdW1iZXIoc3RyKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBudWxsO1xyXG4gICAgdmFyIHR5cGUgPSBudWxsO1xyXG5cclxuICAgIGlmIChzdHJbMF0gPT09ICcjJykge1xyXG4gICAgICB0eXBlID0gKHN0ci5sZW5ndGggPT0gNCkgPyBcImhleDExMVwiIDogXCJoZXgyMjJcIjtcclxuICAgIH0gZWxzZSBpZiAoc3RyWzBdID09PSAncicgJiYgc3RyWzFdID09PSAnZycgJiYgc3RyWzJdID09PSAnYicpIHtcclxuICAgICAgdHlwZSA9IChzdHJbM10gPT0gJ2EnKSA/IFwicmdiYVwiIDogXCJyZ2JcIjtcclxuICAgIH0gZWxzZSBpZiAoc3RyWzBdID09PSAnaCcgJiYgc3RyWzFdID09PSAncycgJiYgc3RyWzJdID09PSAnbCcpIHtcclxuICAgICAgdHlwZSA9IChzdHJbM10gPT0gJ2EnKSA/IFwiaHNsYVwiIDogXCJoc2xcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICB2YXIgbWF0Y2hfc2V0ID0gTUFUQ0hfU0VUX0xJU1RbdHlwZV07XHJcbiAgICAgIHZhciBtID0gc3RyLm1hdGNoKG1hdGNoX3NldC5yZWcpO1xyXG4gICAgICB2YWx1ZSA9IG1hdGNoX3NldC5leGVjKG0pO1xyXG4gICAgfSBlbHNlIGlmIChDb2xvci5DT0xPUl9MSVNUW3N0cl0pIHtcclxuICAgICAgdmFsdWUgPSBDb2xvci5DT0xPUl9MSVNUW3N0cl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiBoc2wg44KSIHJnYiDjgavlpInmj5tcclxuICAgKi9cclxuICBzdGF0aWMgSFNMdG9SR0IoaCwgcywgbCkge1xyXG4gICAgdmFyIHIsIGcsIGI7XHJcblxyXG4gICAgaCAlPSAzNjA7XHJcbiAgICBoICs9IDM2MDtcclxuICAgIGggJT0gMzYwO1xyXG4gICAgcyAqPSAwLjAxO1xyXG4gICAgbCAqPSAwLjAxO1xyXG5cclxuICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgIHZhciBsID0gTWF0aC5yb3VuZChsICogMjU1KTtcclxuICAgICAgcmV0dXJuIFtsLCBsLCBsXTtcclxuICAgIH1cclxuICAgIHZhciBtMiA9IChsIDwgMC41KSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgIHZhciBtMSA9IGwgKiAyIC0gbTI7XHJcblxyXG4gICAgLy8gcmVkXHJcbiAgICB2YXIgdGVtcCA9IChoICsgMTIwKSAlIDM2MDtcclxuICAgIGlmICh0ZW1wIDwgNjApIHtcclxuICAgICAgciA9IG0xICsgKG0yIC0gbTEpICogdGVtcCAvIDYwO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMTgwKSB7XHJcbiAgICAgIHIgPSBtMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHIgPSBtMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBncmVlblxyXG4gICAgdGVtcCA9IGg7XHJcbiAgICBpZiAodGVtcCA8IDYwKSB7XHJcbiAgICAgIGcgPSBtMSArIChtMiAtIG0xKSAqIHRlbXAgLyA2MDtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDE4MCkge1xyXG4gICAgICBnID0gbTI7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAyNDApIHtcclxuICAgICAgZyA9IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIHRlbXApIC8gNjA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnID0gbTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmx1ZVxyXG4gICAgdGVtcCA9ICgoaCAtIDEyMCkgKyAzNjApICUgMzYwO1xyXG4gICAgaWYgKHRlbXAgPCA2MCkge1xyXG4gICAgICBiID0gbTEgKyAobTIgLSBtMSkgKiB0ZW1wIC8gNjA7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAxODApIHtcclxuICAgICAgYiA9IG0yO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMjQwKSB7XHJcbiAgICAgIGIgPSBtMSArIChtMiAtIG0xKSAqICgyNDAgLSB0ZW1wKSAvIDYwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYiA9IG0xO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHBhcnNlSW50KHIgKiAyNTUpLFxyXG4gICAgICBwYXJzZUludChnICogMjU1KSxcclxuICAgICAgcGFyc2VJbnQoYiAqIDI1NSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbGEg44KSIHJnYmEg44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgc3RhdGljIEhTTEF0b1JHQkEoaCwgcywgbCwgYSkge1xyXG4gICAgdmFyIHRlbXAgPSBDb2xvci5IU0x0b1JHQihoLCBzLCBsKTtcclxuICAgIHRlbXBbM10gPSBhO1xyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIHJnYiDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVSR0IociwgZywgYikge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIilcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogcmdiYSDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVSR0JBKHIsIGcsIGIsIGEpIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbCDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVIU0woaCwgcywgbCkge1xyXG4gICAgcmV0dXJuIFwiaHNsKFwiICsgaCArIFwiLFwiICsgcyArIFwiJSxcIiArIGwgKyBcIiUpXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbGEg5YCk44KS5L2c5oiQXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZVN0eWxlSFNMQShoLCBzLCBsLCBhKSB7XHJcbiAgICByZXR1cm4gXCJoc2xhKFwiICsgaCArIFwiLFwiICsgcyArIFwiJSxcIiArIGwgKyBcIiUsXCIgKyBhICsgXCIpXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIOOCq+ODqeODvOODquOCueODiFxyXG4gKi9cclxuQ29sb3IuQ09MT1JfTElTVCA9IHtcclxuICAvKiogQHByb3BlcnR5IGJsYWNrICovXHJcbiAgXCJibGFja1wiOiBbMHgwMCwgMHgwMCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBzaWx2ZXIgKi9cclxuICBcInNpbHZlclwiOiBbMHhjMCwgMHhjMCwgMHhjMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBncmF5ICovXHJcbiAgXCJncmF5XCI6IFsweDgwLCAweDgwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IHdoaXRlICovXHJcbiAgXCJ3aGl0ZVwiOiBbMHhmZiwgMHhmZiwgMHhmZl0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBtYXJvb24gKi9cclxuICBcIm1hcm9vblwiOiBbMHg4MCwgMHgwMCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSByZWQgKi9cclxuICBcInJlZFwiOiBbMHhmZiwgMHgwMCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBwdXJwbGUgKi9cclxuICBcInB1cnBsZVwiOiBbMHg4MCwgMHgwMCwgMHg4MF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBmdWNoc2lhICovXHJcbiAgXCJmdWNoc2lhXCI6IFsweGZmLCAweDAwLCAweGZmXSxcclxuICAvKiogQHByb3BlcnR5IGdyZWVuICovXHJcbiAgXCJncmVlblwiOiBbMHgwMCwgMHg4MCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBsaW1lICovXHJcbiAgXCJsaW1lXCI6IFsweDAwLCAweGZmLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IG9saXZlICovXHJcbiAgXCJvbGl2ZVwiOiBbMHg4MCwgMHg4MCwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSB5ZWxsb3cgKi9cclxuICBcInllbGxvd1wiOiBbMHhmZiwgMHhmZiwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBuYXZ5ICovXHJcbiAgXCJuYXZ5XCI6IFsweDAwLCAweDAwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IGJsdWUgKi9cclxuICBcImJsdWVcIjogWzB4MDAsIDB4MDAsIDB4ZmZdLFxyXG4gIC8qKiBAcHJvcGVydHkgdGVhbCAqL1xyXG4gIFwidGVhbFwiOiBbMHgwMCwgMHg4MCwgMHg4MF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBhcXVhICovXHJcbiAgXCJhcXVhXCI6IFsweDAwLCAweGZmLCAweGZmXSxcclxufTtcclxuXHJcblxyXG52YXIgTUFUQ0hfU0VUX0xJU1QgPSB7XHJcbiAgXCJoZXgxMTFcIjoge1xyXG4gICAgcmVnOiAvXiMoXFx3ezF9KShcXHd7MX0pKFxcd3sxfSkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdICsgbVsxXSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KG1bMl0gKyBtWzJdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSArIG1bM10sIDE2KVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJoZXgyMjJcIjoge1xyXG4gICAgcmVnOiAvXiMoXFx3ezJ9KShcXHd7Mn0pKFxcd3syfSkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KG1bM10sIDE2KVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJyZ2JcIjoge1xyXG4gICAgcmVnOiAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdKSxcclxuICAgICAgICBwYXJzZUludChtWzJdKSxcclxuICAgICAgICBwYXJzZUludChtWzNdKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJyZ2JhXCI6IHtcclxuICAgIHJlZzogL15yZ2JhXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxfShcXC57MX1cXGQrKT8pXFwpJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcGFyc2VJbnQobVsxXSksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSksXHJcbiAgICAgICAgcGFyc2VGbG9hdChtWzRdKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJoc2xcIjoge1xyXG4gICAgcmVnOiAvXmhzbFxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSklLFxccyooXFxkezEsM30pJVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gQ29sb3IuSFNMdG9SR0IobVsxXSwgbVsyXSwgbVszXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImhzbGFcIjoge1xyXG4gICAgcmVnOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezF9KFxcLnsxfVxcZCspPylcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIENvbG9yLkhTTEF0b1JHQkEobVsxXSwgbVsyXSwgbVszXSwgbVs0XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g55uj6KaW44Kq44OW44K444Kn44Kv44OIXHJcbi8vIHJlZ2lzdGVyIOOBpyBrZXkg44KS55m76YyyICjjg4fjg5Xjgqnjg6vjg4jlgKTjgoLkuIDnt5LjgavvvJ8pXHJcbi8vIGV2ZW50IGRpc3BhdGNoZXIg44KS57aZ5om/XHJcbi8vIGV2ZW50IGRpc3BhdGNoZXIg44Gj44GmIHV0aWwg44GY44KD44Gt77yfXHJcbi8vIHJlZ2lzdGVyIOOBp+eZu+mMsuOBl+OBn+WApOOCkuWkieabtOOBl+OBn+OCiSBjaGFuZ2Ug44Kk44OZ44Oz44OI44GM6LWw44KLXHJcblxyXG5cclxuLy8g5ZCN5YmN5YCZ6KOcXHJcbi8vICBtaWRkbGVtYW4o5Luy56uL5Lq6KVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5DaGFuZ2VEaXNwYXRjaGVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBDaGFuZ2VEaXNwYXRjaGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuX29ic2VydmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbMF07XHJcbiAgICAgIGZvckluLmNhbGwob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIG9iai5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihrZXksIHZhbHVlKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIHRlbXBLZXkgPSAnX18nICsga2V5O1xyXG4gICAgICB0aGlzW3RlbXBLZXldID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpc1t0ZW1wS2V5XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgdGhpc1t0ZW1wS2V5XSA9IHY7XHJcbiAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYXJlKCdjaGFuZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgb2JzZXJ2ZSgpIHtcclxuICAgIHRoaXMuX29ic2VydmUgPSB0cnVlO1xyXG4gIH1cclxuICB1bm9ic2VydmUoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuQWpheFxyXG4gKiBcclxuICovXHJcbmNsYXNzIEFqYXgge1xyXG5cclxuICBzdGF0aWMgcmVxdWVzdChvcHRpb25zKSB7XHJcbiAgICB2YXIgZGF0YSA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIEFqYXguZGVmYXVsdHMpO1xyXG4gICAgLy8gdmFyIGRhdGEgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHZhciBmbG93ID0gbmV3IEZsb3coZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICBpZiAoWzIwMCwgMjAxLCAwXS5pbmRleE9mKHhoci5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgeGhyLm9wZW4oZGF0YS50eXBlLCBkYXRhLnVybCk7XHJcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBkYXRhLnJlc3BvbnNlVHlwZTtcclxuICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9XHJcbiAgc3RhdGljIGdldCh1cmwpIHtcclxuICAgIHJldHVybiBBamF4LnJlcXVlc3Qoe1xyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIHBvc3QodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgcHV0KHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdQVVQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgZGVsKHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKiBcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyb2YgQWpheFxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cclxuQWpheC5kZWZhdWx0cyA9IHtcclxuICB0eXBlOiAnR0VUJyxcclxuICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgcmVzcG9uc2VUeXBlOiAnanNvbicsXHJcbiAgZGF0YTogbnVsbCxcclxuICB1cmw6ICcnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBnbG9iYWwuTnVtYmVyXHJcbiAqICMg5ouh5by144GX44GfIE51bWJlciDjgq/jg6njgrlcclxuICog5pWw5YCk44KS5omx44GGIE51bWJlciDjgq/jg6njgrnjgpLmi6HlvLXjgZfjgabjgYTjgb7jgZnjgIJcclxuICovXHJcblxyXG4vKipcclxuICogQG1ldGhvZCB0aW1lc1xyXG4gKiAwIOOBi+OCieiHquWIhuiHqui6q+OBruaVsC0x44G+44Gn44CB44Kr44Km44Oz44K/44KS44Kk44Oz44Kv44Oq44Oh44Oz44OI44GX44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbXTtcclxuICogICAgICg1KS50aW1lcyhmdW5jdGlvbihpKXtcclxuICogICAgICAgYXJyLnB1c2goaSk7XHJcbiAqICAgICB9KTsgLy8gPT4gWzAsIDEsIDIsIDMsIDRdXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10g6Zai5pWw5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv6Ieq5YiG6Ieq6Lqr44CCXHJcbiAqL1xyXG5mdW5jdGlvbiB0aW1lcyhmbiwgc2VsZikge1xyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJ0aW1lc1wiLCAgZnVuY3Rpb24oZm4sIHNlbGYpIHtcclxuICBzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG4gIGZvciAodmFyIGk9MDsgaTx0aGlzOyArK2kpIHtcclxuICAgIGZuLmNhbGwoc2VsZiwgaSwgdGhpcyk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBzdGVwXHJcbiAqIOiHquWIhuiHqui6q+OBruWApOOBi+OCieaMh+WumuOBl+OBn+aVsOOBvuOBp+OAgeOCq+OCpuODs+OCv+OCkuWil+WIhuOBleOBm+OBquOBjOOCiemWouaVsOOCkue5sOOCiui/lOOBl+Wun+ihjOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDkuIrpmZDlgKTjgoTlopfliIblgKTjga8gZmxvYXQg5Z6L44KS5oyH5a6a44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICB2YXIgYXJyID0gW107XHJcbiAqICAgICAoMi40KS5zdGVwKDUuMywgMC44LCBmdW5jdGlvbihuKSB7XHJcbiAqICAgICAgIGFyci5wdXNoKG4pO1xyXG4gKiAgICAgIH0pOyAvLyA9PiBbMi40LCAzLjIsIDQuMCwgNC44XVxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbGltaXQg44Kr44Km44Oz44K/44Gu5LiK6ZmQ5YCkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIOOCq+OCpuODs+OCv+OCkuWil+WIhuOBmeOCi+mHj1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgILlvJXmlbDjgavjgqvjgqbjg7Pjgr/jgYzmuKHjgZXjgozjgovjgIJcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIOmWouaVsOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+iHquWIhuiHqui6q+OAglxyXG4gKi9cclxuZnVuY3Rpb24gc3RlcChsaW1pdCwgc3RlcCwgZm4sIHNlbGYpIHtcclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwic3RlcFwiLCAgZnVuY3Rpb24obGltaXQsIHN0ZXAsIGZuLCBzZWxmKSB7XHJcbiAgc2VsZiA9IHNlbGYgfHwgdGhpcztcclxuICBmb3IgKHZhciBpPSt0aGlzOyBpPD1saW1pdDsgaSs9c3RlcCkge1xyXG4gICAgZm4uY2FsbChzZWxmLCBpLCB0aGlzKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwidG9EZWdyZWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiAodGhpcypNYXRoLlJBRF9UT19ERUcpOyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHRvUmFkaWFuXHJcbiAqIOW6puOCkuODqeOCuOOCouODs+OBq+WkieaPm+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgKDE4MCkudG9SYWRpYW4oKTsgLy8gPT4gMy4xNDE1OTI2NTM1ODk3OTNcclxuICpcclxuICogQHJldHVybiB7TnVtYmVyfSDjg6njgrjjgqLjg7NcclxuICovXHJcbmZ1bmN0aW9uIHRvUmFkaWFuKCkgeyByZXR1cm4gdGhpcyAqIERFR19UT19SQUQ7IH1cclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwidG9SYWRpYW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzKk1hdGguREVHX1RPX1JBRDsgfSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uVmVjdG9yMlxyXG4gKiAjIDLmrKHlhYPjg5njgq/jg4jjg6vjgq/jg6njgrlcclxuICogMuasoeWFg+OBruODmeOCr+ODiOODq+OChOW6p+aomeOCkuihqOOBmeOCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgVmVjdG9yMiB7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIHjluqfmqJlcclxuICAvLyAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gIC8vICAqL1xyXG4gIC8vIHggPSAwXHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIHnluqfmqJlcclxuICAvLyAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gIC8vICAqL1xyXG4gIC8vIHkgPSAwXHJcblxyXG4gIC8qKlxyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6vjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3g9MF0g44OZ44Kv44OI44Or44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFt5PTBdIOODmeOCr+ODiOODq+OBriB5IOW6p+aomVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0gMuasoeWFg+ODmeOCr+ODiOODq+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHg9MCwgeT0wKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSB2LmNsb25lKCk7XHJcbiAgICogICAgIHYyLnggPT0gdi54OyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZXF1YWxzXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjgYzjgZnjgbnjgaYgb3RoZXIg44Go562J44GX44GE44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNSwgNik7XHJcbiAgICogICAgIHYxLmVxdWFscyh2Mik7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg5q+U6LyD44GZ44KL5a++6LGh44Gu44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g562J44GX44GE44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgZXF1YWxzKHYpIHtcclxuICAgIHJldHVybiAodGhpcy54ID09PSB2LnggJiYgdGhpcy55ID09PSB2LnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjga7lgKTjgpLlho3oqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYuc2V0KDUsIDYpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg44OZ44Kv44OI44Or44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg44OZ44Kv44OI44Or44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlho3oqK3lrprlvozjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzZXQoeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44GrIG90aGVyIOOCkuWKoOOBiOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDUsIDYpO1xyXG4gICAqICAgICB2MS5hZGQodjIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3Rvcig4LCAxMClcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWKoOeul+OBl+OBn+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGFkZCh2KSB7XHJcbiAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgdGhpcy55ICs9IHYueTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzdWJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgYvjgokgb3RoZXIg44KS5rib44GY44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDjg5njgq/jg4jjg6vjgYzluqfmqJnjgpLooajjgZnloLTlkIjjga/jgIHmjIflrprjgZfjgZ/luqfmqJnjgYvjgonoh6rliIboh6rouqvjgbjjgajlkJHjgYvjgYbjg5njgq/jg4jjg6vjgYzlvpfjgonjgozjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgNSk7XHJcbiAgICogICAgIHYxLnN1Yih2Mik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDIsIC0xKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5rib566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3ViKHYpIHtcclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG11bFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBq+aVsOWApCBuIOOCkuS5l+OBmOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLm11bCgzKSAvLyA9PiBwaGluYS5nZW9tLlZlY3Rvcig5LCAxMilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBuIOS5l+OBmOOCi+WApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5LmX566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbXVsKG4pIHtcclxuICAgIHRoaXMueCAqPSBuO1xyXG4gICAgdGhpcy55ICo9IG47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGl2XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44KS5pWw5YCkIG4g44Gn5Ymy44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMig4LCAxNik7XHJcbiAgICogICAgIHYxLmRpdigyKSAvLyA9PiBwaGluYS5nZW9tLlZlY3Rvcig0LCA4KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4g5Ymy44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDpmaTnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBkaXYobikge1xyXG4gICAgLy9jb25zb2xlLmFzc2VydChuICE9IDAsIFwiMCBkaXZpc2lvbiEhXCIpO1xyXG4gICAgbiA9IG4gfHwgMC4wMTtcclxuICAgIHRoaXMueCAvPSBuO1xyXG4gICAgdGhpcy55IC89IG47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBuZWdhdGVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjga7mraPosqDjgpLlj43ou6LjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIHRoaXMg44Go5ZCM44GY5aSn44GN44GV44Gn5pa55ZCR44GM6YCG44Gu44OZ44Kv44OI44Or44GM5b6X44KJ44KM44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAtNCk7XHJcbiAgICogICAgIHYxLm5lZ2F0ZSgpIC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKC0zLCA0KVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlj43ou6Llvozjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBuZWdhdGUoKSB7XHJcbiAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgdGhpcy55ID0gLXRoaXMueTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRvdFxyXG4gICAqIG90aGVyIOOBqOOBruWGheepjeOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5oqV5b2x44OZ44Kv44OI44Or44KS5rGC44KB44Gf44KK44CB6aGe5Ly85bqm44Gu6KiI566X44Gr5Yip55So44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDIpO1xyXG4gICAqICAgICB2MS5kb3QodjIpIC8vID0+IDJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWGheepjVxyXG4gICAqL1xyXG4gIGRvdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcm9zc1xyXG4gICAqIG90aGVyIOOBqOOBruWkluepje+8iOOCr+ODreOCueepje+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBp+OBruWkluepjeOBr+ODmeOCr+ODiOODq+OBp+OBquOBj+aVsOWApOOCkui/lOOBmeOBk+OBqOOBq+azqOaEj+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIG90aGVyIOOCiOOCiiB0aGlzIOaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+ato+OBruWApOOBq+OBquOCiuOAgeWPjeaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+iyoOOBruWApOOBq+OBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MS5jcm9zcyh2MikgLy8gPT4gLThcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWkluepjVxyXG4gICAqL1xyXG4gIGNyb3NzKHYpIHtcclxuICAgIHJldHVybiAodGhpcy54KnYueSkgLSAodGhpcy55KnYueCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGxlbmd0aFxyXG4gICAqIHRoaXMg44Gu5aSn44GN44GV44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAobWVtbykgbWFnbml0dWRlIOOBo+OBpuWQjeWJjeOBruaWueOBjOiJr+OBhOOBi+OCgi4g5qSc6KiO5LitLlxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLmxlbmd0aCgpOyAvLyA9PiA1XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruWkp+OBjeOBlVxyXG4gICAqL1xyXG4gIGxlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54KnRoaXMueCArIHRoaXMueSp0aGlzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGxlbmd0aFNxdWFyZWRcclxuICAgKiB0aGlzIOOBruWkp+OBjeOBleOBruiHquS5l+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQyMg44Gu5ZCN5YmN44KS5byV55So77yIb3IgbGVuZ3RoU3F1YXJlIG9yIGxlbmd0aFNxcnTvvIlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5sZW5ndGhTcXVhcmVkKCk7IC8vID0+IDI1XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruWkp+OBjeOBleOBruiHquS5l1xyXG4gICAqL1xyXG4gIGxlbmd0aFNxdWFyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy54KnRoaXMueCArIHRoaXMueSp0aGlzLnk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VcclxuICAgKiB0aGlzIOOBqCBvdGhlciDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHYxLmRpc3RhbmNlKHYyKTsgLy8gPT4gNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMueCuemWk+OBrui3nembolxyXG4gICAqL1xyXG4gIGRpc3RhbmNlKHYpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KHRoaXMueC12LngsIDIpICsgTWF0aC5wb3codGhpcy55LXYueSwgMikgKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVNxdWFyZWRcclxuICAgKiB0aGlzIOOBqCBvdGhlciDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHYxLmRpc3RhbmNlU3F1YXJlZCh2Mik7IC8vID0+IDI1XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmXXHJcbiAgICovXHJcbiAgZGlzdGFuY2VTcXVhcmVkKHYpIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLngtdi54LCAyKSArIE1hdGgucG93KHRoaXMueS12LnksIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6KeS5bqm44GMIG1pbiDjgYvjgokgbWF4IOOBruevhOWbsu+8iOW6puWNmOS9je+8ieOBp+Wkp+OBjeOBleOBjCBsZW4g44Gu44Op44Oz44OA44Og44Gq44OZ44Kv44OI44Or44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIoKS5yYW5kb20oOTAsIDE4MCwgMSk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigtMC41LCAwLjg2Nikg44Gq44GpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbj0wXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIvpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heD0zNjBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4iumZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuPTFdIOWkp+OBjeOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g44Op44Oz44OA44Og5YyW44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgcmFuZG9tKG1pbiwgbWF4LCBsZW4pIHtcclxuICAgIHZhciBkZWdyZWUgPSBSYW5kb20ucmFuZGZsb2F0KG1pbiB8fCAwLCBtYXggfHwgMzYwKTtcclxuICAgIHZhciByYWQgPSBkZWdyZWUqTWF0aC5ERUdfVE9fUkFEO1xyXG4gICAgdmFyIGxlbiA9IGxlbiB8fCAxO1xyXG5cclxuICAgIHRoaXMueCA9IE1hdGguY29zKHJhZCkqbGVuO1xyXG4gICAgdGhpcy55ID0gTWF0aC5zaW4ocmFkKSpsZW47XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgbm9ybWFsaXplXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44KS5q2j6KaP5YyW44GX44G+44GZ44CC44GZ44Gq44KP44Gh44CBdGhpcyDjgajlkIzjgZjmlrnlkJHjgaflpKfjgY3jgZXjgYwx44Gu44OZ44Kv44OI44Or44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubm9ybWFsaXplKCk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigwLjYsIDAuOClcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5q2j6KaP5YyW44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbm9ybWFsaXplKCkge1xyXG4gICAgdGhpcy5kaXYodGhpcy5sZW5ndGgoKSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9TdHJpbmdcclxuICAgKiB0aGlzIOOCkiBKU09OIOW9ouW8j+OBp+ihqOePvuOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLnRvU3RyaW5nKCk7IC8vID0+IFwie3g6MywgeTo0fVwiXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEpTT04g5paH5a2X5YiXXHJcbiAgICovXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJ7eDp7eH0sIHk6e3l9fVwiLCB0aGlzKTtcclxuICAgIC8vIHJldHVybiBcInt4Ont4fSwgeTp7eX19XCIuZm9ybWF0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXREaXJlY3Rpb25cclxuICAgKiB0aGlzIOOBruOBiuOBiuOCiOOBneOBruaWueWQkeOCkuekuuOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLmdldERpcmVjdGlvbigpOyAvLyA9PiBcInVwXCJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30g5pa55ZCR44KS6KGo44GZ5paH5a2X5YiX77yIXCJ1cFwiLCBcInJpZ2h0XCIsIFwiZG93blwiLCBcImxlZnRcIu+8iVxyXG4gICAqL1xyXG4gIGdldERpcmVjdGlvbigpIHtcclxuICAgIHZhciBhbmdsZSA9IHRoaXMudG9EZWdyZWUoKTtcclxuICAgIGlmIChhbmdsZSA8IDQ1KSB7XHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgMTM1KSB7XHJcbiAgICAgIHJldHVybiBcImRvd25cIjtcclxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAyMjUpIHtcclxuICAgICAgcmV0dXJuIFwibGVmdFwiXHJcbiAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgMzE1KSB7XHJcbiAgICAgIHJldHVybiBcInVwXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0FuZ2xlXHJcbiAgICogdGhpcyDjgaggeCDou7jjgajjga7op5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAwKTtcclxuICAgKiAgICAgdjEudG9BbmdsZSgpOyAvLyA9PiAzLjE0MTU5XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8iVxyXG4gICAqL1xyXG4gIHRvQW5nbGUoKSB7XHJcbiAgICB2YXIgcmFkID0gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICByZXR1cm4gKHJhZCArIE1hdGguUEkqMiklKE1hdGguUEkqMik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZnJvbUFuZ2xlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8ieOBqOWkp+OBjeOBleOCkuaMh+WumuOBl+OBpuODmeOCr+ODiOODq+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyKCkuZnJvbUFuZ2xlKE1hdGguUEkvNCwgMik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigxLjQxNDIsIDEuNDE0MilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWQg6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBmcm9tQW5nbGUocmFkLCBsZW4pIHtcclxuICAgIGxlbiA9IGxlbiB8fCAxO1xyXG4gICAgdGhpcy54ID0gTWF0aC5jb3MocmFkKSpsZW47XHJcbiAgICB0aGlzLnkgPSBNYXRoLnNpbihyYWQpKmxlbjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvRGVncmVlXHJcbiAgICogdGhpcyDjgaggeCDou7jjgajjga7op5LluqbvvIjluqbljZjkvY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAyKTtcclxuICAgKiAgICAgdjEudG9BbmdsZSgpOyAvLyA9PiAxMzVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu6KeS5bqm77yI5bqm5Y2Y5L2N77yJXHJcbiAgICovXHJcbiAgdG9EZWdyZWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0FuZ2xlKCkudG9EZWdyZWUoKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmcm9tRGVncmVlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOinkuW6pu+8iOW6puWNmOS9je+8ieOBqOWkp+OBjeOBleOCkuaMh+WumuOBl+OBpuODmeOCr+ODiOODq+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyKCkuZnJvbURlZ3JlZSg2MCwgMik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigxLCAxLjczMilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWcg6KeS5bqm77yI5bqm5Y2Y5L2N77yJXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBmcm9tRGVncmVlKGRlZywgbGVuKSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5mcm9tQW5nbGUoZGVnLnRvUmFkaWFuKCksIGxlbik7XHJcbiAgICByZXR1cm4gdGhpcy5mcm9tQW5nbGUodG9SYWRpYW4uY2FsbChkZWcpLCBsZW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByb3RhdGVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgpLlm57ou6LjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MS5yb3RhdGUoTWF0aC5QSS8yKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKC0xLCAzKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWQg6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtjZW50ZXI9KDAsIDApXSDlm57ou6Ljga7kuK3lv4PluqfmqJlcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWbnui7ouW+jOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHJvdGF0ZShyYWQsIGNlbnRlcikge1xyXG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHZhciB4MSA9IHRoaXMueCAtIGNlbnRlci54O1xyXG4gICAgdmFyIHkxID0gdGhpcy55IC0gY2VudGVyLnk7XHJcbiAgICB2YXIgeDIgPSB4MSAqIE1hdGguY29zKHJhZCkgLSB5MSAqIE1hdGguc2luKHJhZCk7XHJcbiAgICB2YXIgeTIgPSB4MSAqIE1hdGguc2luKHJhZCkgKyB5MSAqIE1hdGguY29zKHJhZCk7XHJcbiAgICB0aGlzLnNldCggY2VudGVyLnggKyB4MiwgY2VudGVyLnkgKyB5MiApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtaW5cclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOBruWQhOimgee0oOOBq+WvvuOBl+OAgeOCiOOCiuWwj+OBleOBhOaWueOCkuimgee0oOOBqOOBmeOCi+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm1pbih2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDEpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBtaW4oYSwgYikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICAoYS54IDwgYi54KSA/IGEueCA6IGIueCxcclxuICAgICAgKGEueSA8IGIueSkgPyBhLnkgOiBiLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1heFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBqCB2MiDjga7lkITopoHntKDjgavlr77jgZfjgIHjgojjgorlpKfjgY3jgYTmlrnjgpLopoHntKDjgajjgZnjgovmlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMywgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5tYXgodjEsIHYyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDIpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXgoYSwgYikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICAoYS54ID4gYi54KSA/IGEueCA6IGIueCxcclxuICAgICAgKGEueSA+IGIueSkgPyBhLnkgOiBiLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgasgdjIg44KS5Yqg566X44GX44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuYWRkKHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigwLCAzKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDliqDnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgYWRkKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIobGhzLngrcmhzLngsIGxocy55K3Jocy55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzdWJcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgYvjgokgdjIg44KS5rib44GY44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDjg5njgq/jg4jjg6vjgYzluqfmqJnjgpLooajjgZnloLTlkIjjgIEy44Gk55uu44Gu5bqn5qiZ44GL44KJMeOBpOebruOBruW6p+aomeOBuOOBqOWQkeOBi+OBhuODmeOCr+ODiOODq+OBjOW+l+OCieOCjOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLnN1Yih2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoNiwgLTEpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOa4m+eul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdWIobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihsaHMueC1yaHMueCwgbGhzLnktcmhzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG11bFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44Gu5ZCE6KaB57Sg44GrIG4g44KS5LmX44GY44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm11bCh2MSwgMik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMig2LCAyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG4g5LmX44GY44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDkuZfnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgbXVsKHYsIG4pIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2Lngqbiwgdi55Km4pO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpdlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44Gu5ZCE6KaB57Sg44KSIG4g44Gn5Ymy44Gj44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRpdih2MSwgMik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigxLjUsIDAuNSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBuIOWJsuOCi+WApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g6Zmk566X44GX44Gf57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIGRpdih2LCBuKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodi54L24sIHYueS9uKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBuZWdhdGVcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuWPjei7ouOBl+OBn+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5uZWdhdGUoKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAtMSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Y+N6Lui44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG5lZ2F0ZSh2KSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoLXYueCwgLXYueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZG90XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdjEg44GoIHYyIOOBruWGheepjeOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRvdCh2MSwgdjIpIC8vID0+IDJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlhoXnqY1cclxuICAgKi9cclxuICBzdGF0aWMgZG90KGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gbGhzLnggKiByaHMueCArIGxocy55ICogcmhzLnk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY3Jvc3NcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgaggdjIg44Gu5aSW56mN77yI44Kv44Ot44K556mN77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44Gn44Gu5aSW56mN44Gv44OZ44Kv44OI44Or44Gn44Gq44GP5pWw5YCk44KS6L+U44GZ44GT44Go44Gr5rOo5oSP44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogMeOBpOebruOBruODmeOCr+ODiOODq+OBjDLjgaTnm67jga7jg5njgq/jg4jjg6vjgojjgormmYLoqIjlm57jgorjgavjgYLjgovjgajjgY3jga/mraPjga7lgKTjgavjgarjgorjgIHlj43mmYLoqIjlm57jgorjgavjgYLjgovjgajjgY3jga/osqDjga7lgKTjgavjgarjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmNyb3NzKHYxLCB2Mik7IC8vID0+IC04XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5aSW56mNXHJcbiAgICovXHJcbiAgc3RhdGljIGNyb3NzKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gKGxocy54KnJocy55KSAtIChsaHMueSpyaHMueCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6LjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRpc3RhbmNlKHYxLCB2Mik7IC8vID0+IDVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6ZuiXHJcbiAgICovXHJcbiAgc3RhdGljIGRpc3RhbmNlKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyhsaHMueC1yaHMueCwgMikgKyBNYXRoLnBvdyhsaHMueS1yaHMueSwgMikgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VTcXVhcmVkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5kaXN0YW5jZVNxdWFyZWQodjEsIHYyKTsgLy8gPT4gMjVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmXXHJcbiAgICovXHJcbiAgc3RhdGljIGRpc3RhbmNlU3F1YXJlZChsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KGxocy54LXJocy54LCAyKSArIE1hdGgucG93KGxocy55LXJocy55LCAyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWFuaGF0dGFuRGlzdGFuY2VcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7jg57jg7Pjg4/jg4Pjgr/jg7Pot53pm6LvvIjou7jjgavlubPooYzjgavpgLLjgoDjgajjgY3jga7mnIDnn63ot53pm6LvvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm1hbmhhdHRhbkRpc3RhbmNlKHYxLCB2Mik7IC8vID0+IDdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu44Oe44Oz44OP44OD44K/44Oz6Led6ZuiXHJcbiAgICovXHJcbiAgc3RhdGljIG1hbmhhdHRhbkRpc3RhbmNlKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobGhzLngtcmhzLngpICsgTWF0aC5hYnMobGhzLnktcmhzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5vcm1hbFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44Gu44CBdjIg44GL44KJIHYxIOOBq+WQkeOBi+OBhuODmeOCr+ODiOODq+OBq+WvvuOBmeOCi+azlee3muODmeOCr+ODiOODq+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubm9ybWFsKHYxLCB2Mik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMig0LCAtMylcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDms5Xnt5rjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgbm9ybWFsKGEsIGIpIHtcclxuICAgIHZhciB0ZW1wID0gVmVjdG9yMi5zdWIoYSwgYik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKC10ZW1wLnksIHRlbXAueCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlZmxlY3RcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuWjgeOBuOOBruWFpeWwhOODmeOCr+ODiOODq+OBqOOBl+OBpuOAgeWjgeOBq+WPjeWwhOOBl+OBn+mam+OBruODmeOCr+ODiOODq++8iOWPjeWwhOODmeOCr+ODiOODq++8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5aOB44Gu5ZCR44GN44Gv5rOV57ea44OZ44Kv44OI44OrIG5vcm1hbCDjgavjgojjgaPjgabooajjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDMpO1xyXG4gICAqICAgICBub3JtYWwgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTEsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIucmVmbGVjdCh2MSwgbm9ybWFsKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDIsIDUpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDlhaXlsITjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbm9ybWFsIOWjgeOBruazlee3muODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Y+N5bCE44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIHJlZmxlY3Qodiwgbm9ybWFsKSB7XHJcbiAgICB2YXIgbGVuID0gVmVjdG9yMi5kb3Qodiwgbm9ybWFsKTtcclxuICAgIHZhciB0ZW1wPSBWZWN0b3IyLm11bChub3JtYWwsIDIqbGVuKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIFZlY3RvcjIuc3ViKHYsIHRlbXApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIHdhbGxcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuWjgeOBuOOBruWFpeWwhOODmeOCr+ODiOODq+OBqOOBl+OBpuOAgeWjgeOBq+ayv+OBo+OBn+ODmeOCr+ODiOODq++8iOWjgeOBmuOCiuOCr+ODiOODq++8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5aOB44Gu5ZCR44GN44Gv5rOV57ea44OZ44Kv44OI44OrIG5vcm1hbCDjgavjgojjgaPjgabooajjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDMpO1xyXG4gICAqICAgICBub3JtYWwgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTEsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIud2FsbCh2MSwgbm9ybWFsKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDlhaXlsITjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbm9ybWFsIOWjgeOBruazlee3muODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5aOB44Ga44KK44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIHdhbGwodiwgbm9ybWFsKSB7XHJcbiAgICB2YXIgbGVuID0gVmVjdG9yMi5kb3Qodiwgbm9ybWFsKTtcclxuICAgIHZhciB0ZW1wPSBWZWN0b3IyLm11bChub3JtYWwsIGxlbik7XHJcbiAgICBcclxuICAgIHJldHVybiBWZWN0b3IyLnN1Yih2LCB0ZW1wKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBsZXJwXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLlqpLku4vlpInmlbAgdCDjgafnt5rlvaLoo5zplpPjgZfjgb7jgZnjgIJcclxuICAgKiB0PTAuNSDjgacgdjEg44GoIHYyIOOBruS4remWk+ODmeOCr+ODiOODq+OCkuaxguOCgeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubGVycCh2MSwgdjIsIDAuNSk7IC8vID0+ICgyLjUsIDQpXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5sZXJwKHYxLCB2MiwgMCk7IC8vID0+ICgxLCAyKVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubGVycCh2MSwgdjIsIDEpOyAvLyA9PiAoNCwgNilcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0IOWqkuS7i+WkieaVsFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g57ea5b2i6KOc6ZaT44Gu57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIGxlcnAoYSwgYiwgdCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICBhLnggKyAoYi54LWEueCkqdCxcclxuICAgICAgYS55ICsgKGIueS1hLnkpKnRcclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2xlcnBcclxuICAgKiBAc3RhdGljXHJcbiAgICog6KOc6ZaT77yI5pyq5a6f6KOF77yJXHJcbiAgICovXHJcbiAgc3RhdGljIHNsZXJwKGxocywgcmhzLCB0KSB7XHJcbiAgICAgIC8vIFRPRE86XHJcbiAgICAgIC8vIGNvcy4uLlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiBAc3RhdGljXHJcbiAgICog6KeS5bqm44GMIG1pbiDjgYvjgokgbWF4IOOBruevhOWbsu+8iOW6puWNmOS9je+8ieOBp+Wkp+OBjeOBleOBjCBsZW4g44Gu44Op44Oz44OA44Og44Gq44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIucmFuZG9tKDkwLCAxODAsIDEpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoLTAuNSwgMC44NjYpIOOBquOBqVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW49MF0g6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Gu5LiL6ZmQ5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttYXg9MzYwXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIrpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gc3RhdGljIHJhbmRvbShtaW4sIG1heCwgbGVuKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoKS5yYW5kb20obWluLCBtYXgpLm11bChsZW58fDEpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IFpFUk8g44K844Ot44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5aRVJPID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IExFRlQg5bem5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5MRUZUID0gbmV3IFZlY3RvcjIoLTEsIDApO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBSSUdIVCDlj7PmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLlJJR0hUPSBuZXcgVmVjdG9yMigxLCAwKTtcclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gVVAg5LiK5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5VUCAgID0gbmV3IFZlY3RvcjIoMCwgLTEpO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBET1dOIOS4i+aWueWQkeOBruWNmOS9jeODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuRE9XTiA9IG5ldyBWZWN0b3IyKDAsIDEpO1xyXG5cclxuLy8gaW1wb3J0IHsgUmVjdCB9IGZyb20gXCIuL3JlY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5DaXJjbGVcclxuICogIyDlhobpoJjln5/jgpLooajjgZnjgq/jg6njgrlcclxuICog44Kt44Oj44Oz44OQ44K55LiK44Gu5YaG6aCY5Z+f44KS5omx44GG44Kv44Op44K544Gn44GZ44CCXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgQ2lyY2xlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHhcclxuICAgKiDlhobjga7kuK3lv4Pjga4geCDluqfmqJlcclxuICAgKi9cclxuICAvLyB4OiAwLFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB5XHJcbiAgICog5YaG44Gu5Lit5b+D44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgLy8geTogMCxcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gcmFkaXVzXHJcbiAgICog5YaG44Gu5Y2K5b6EXHJcbiAgICovXHJcbiAgLy8gcmFkaXVzOiAzMixcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbml0XHJcbiAgICog5YaG6aCY5Z+f44Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMiwgNjQsIDEyOCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDlhobjga7kuK3lv4Pjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDlhobjga7kuK3lv4Pjga4geSDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIOWNiuW+hFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uUmVjdH0g5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMzI7XHJcbiAgICB0aGlzLnNldCh4LCB5LCByYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITlgKTjgpLlho3oqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMyLCA2NCwgMTI4KTtcclxuICAgKiAgICAgY2lyY2xlLnNldCgxMDAsIDIwMCwgMzIpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5YaG44KS5Zuy44GG55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5YaG44KS5Zuy44GG55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1cyDljYrlvoRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLkNpcmNsZX0g5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgc2V0KHgsIHksIHJhZGl1cykge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZVRvXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOWGhumgmOWfn+OCkuW6p+aomSAoeCwgeSkg44Gr56e75YuV44GX44G+44GZ44CCKHgsIHkpIOOBr+WGhuOBruS4reW/g+OCkuihqOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzAwLCAzMDAsIDQwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDI2MFxyXG4gICAqICAgICBjaXJjbGUubW92ZVRvKDEwMCwgMTAwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDYwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5XlhYjjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5XlhYjjga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZUJ5XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOWGhumgmOWfn+OCkiAoeCwgeSkg44Gg44GR56e75YuV44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMDAsIDMwMCwgNDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gMjYwXHJcbiAgICogICAgIGNpcmNsZS5tb3ZlQnkoMTAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gNDYwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5Xph4/jga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5Xph4/jga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy54ICs9IHg7XHJcbiAgICB0aGlzLnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjb250YWluc1xyXG4gICAqIOW6p+aomSAoeCwgeSkg44GM5YaG6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMDAsIDMwMCwgMTAwKTtcclxuICAgKiAgICAgY2lyY2xlLmNvbnRhaW5zKDM1MCwgMzUwKTsgLy8gPT4gIHRydWVcclxuICAgKiAgICAgY2lyY2xlLmNvbnRhaW5zKDM1MCwgNDAwKTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOWIpOWumuOBmeOCi+WvvuixoeOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOWIpOWumuOBmeOCi+WvvuixoeOBriB5IOW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOaMh+WumuOBl+OBn+W6p+aomeOBjOWGhumgmOWfn+OBruS4reOBq+WQq+OBvuOCjOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHZhciBsZW5YID0gdGhpcy54LXg7XHJcbiAgICB2YXIgbGVuWSA9IHRoaXMueS15O1xyXG4gICAgdmFyIGxlblNxdWFyZWQgPSAobGVuWCpsZW5YKSsobGVuWSpsZW5ZKTtcclxuXHJcbiAgICByZXR1cm4gbGVuU3F1YXJlZCA8PSB0aGlzLnJhZGl1cyp0aGlzLnJhZGl1cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoNTAsIDEwMCwgNDApO1xyXG4gICAqICAgICBjaXJjbGUyID0gY2lyY2xlLmNsb25lKCk7XHJcbiAgICogICAgIGNpcmNsZTIueCA9PSBjaXJjbGUueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/lhobpoJjln59cclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgQ2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvUmVjdFxyXG4gICAqIOWGhuOBq+WkluaOpeOBmeOCi+ato+aWueW9ouOCkuihqOOBmeefqeW9oumgmOWfn+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoNTAsIDEwMCwgNDApO1xyXG4gICAqICAgICByZWN0ID0gY2lyY2xlLnRvUmVjdCgpO1xyXG4gICAqICAgICByZWN0Lng7IC8vID0+IDEwXHJcbiAgICogICAgIHJlY3QueTsgLy8gPT4gNjBcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gODBcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf55+p5b2i6aCY5Z+fXHJcbiAgICovXHJcbiAgdG9SZWN0KCkge1xyXG4gICAgLy8g5b6q55Kw5Y+C54Wn5Zue6YG/44Gu44Gf44KB44CBUmVjdOWBtOOBp+Wumue+qVxyXG4gICAgLy8gdmFyIHNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAvLyByZXR1cm4gbmV3IFJlY3QodGhpcy54IC0gdGhpcy5yYWRpdXMsIHRoaXMueSAtIHRoaXMucmFkaXVzLCBzaXplLCBzaXplKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9BcnJheVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS6KaB57Sg44Go44GZ44KL6YWN5YiX44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSg1MCwgMTAwLCA0MCk7XHJcbiAgICogICAgIHJlY3QudG9BcnJheSgpOyAvLyA9PiBbNTAsIDEwMCwgNDBdXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g55Sf5oiQ44GX44Gf6YWN5YiXXHJcbiAgICovXHJcbiAgdG9BcnJheSgpIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBsZWZ0XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55bem56uv44GL44KJ5YaG44Gu5bem56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDIwMCwgMzAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gMTAwXHJcbiAgICogICAgIGNpcmNsZS50b3A7IC8vID0+IDIwMFxyXG4gICAqICAgICBjaXJjbGUucmlnaHQ7IC8vID0+IDMwMFxyXG4gICAqICAgICBjaXJjbGUuYm90dG9tOyAvLyA9PiA0MDBcclxuICAgKi9cclxuICBnZXQgbGVmdCgpICAgeyByZXR1cm4gdGhpcy54IC0gdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgbGVmdCh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gdG9wXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55LiK56uv44GL44KJ5YaG44Gu5LiK56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgdG9wKCkgICB7IHJldHVybiB0aGlzLnkgLSB0aGlzLnJhZGl1czsgfVxyXG4gIHNldCB0b3AodikgIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJpZ2h0XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55Y+z56uv44GL44KJ5YaG44Gu5Y+z56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgcmlnaHQoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IHJpZ2h0KHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBib3R0b21cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIvnq6/jgYvjgonlhobjga7kuIvnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBib3R0b20oKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IGJvdHRvbSh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gICAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHNpemVcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDlhobjga7nm7TlvoRcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBzaXplKCkgICB7IHJldHVybiB0aGlzLnJhZGl1cyoyOyB9XHJcbiAgc2V0IHNpemUodikgIHtcclxuICAgIC8vIFRPRE86IOaknOiojuS4rVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLlJlY3RcclxuICogIyDnn6nlvaLpoJjln5/jgpLooajjgZnjgq/jg6njgrlcclxuICog44Kt44Oj44Oz44OQ44K55LiK44Gu55+p5b2i6aCY5Z+f44KS5omx44GG44Kv44Op44K544Gn44GZ44CCXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgUmVjdCB7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB4XHJcbiAgLy8gICog55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgLy8gICovXHJcbiAgLy8geDogMCxcclxuICAvLyAvKipcclxuICAvLyAgKiBAcHJvcGVydHkge051bWJlcn0geVxyXG4gIC8vICAqIOefqeW9ouOBruW3puS4iumggueCueOBriB5IOW6p+aomVxyXG4gIC8vICAqL1xyXG4gIC8vIHk6IDAsXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IHdpZHRoXHJcbiAgLy8gICog55+p5b2i44Gu5bmFXHJcbiAgLy8gICovXHJcbiAgLy8gd2lkdGg6IDMyLFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBoaWdodFxyXG4gIC8vICAqIOefqeW9ouOBrumrmOOBlVxyXG4gIC8vICAqL1xyXG4gIC8vIGhlaWdodDogMzIsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW5pdFxyXG4gICAqIOefqeW9oumgmOWfn+OBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOefqeW9ouOBruW3puS4iumggueCueOBriB5IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IOmrmOOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uUmVjdH0g55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICB0aGlzLndpZHRoID0gMzI7XHJcbiAgICB0aGlzLmhlaWdodCA9IDMyO1xyXG4gICAgdGhpcy5zZXQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKiAgICAgcmVjdC5zZXQoMCwgMTYsIDMyLCA2NCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geSDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGgg5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCDpq5jjgZVcclxuICAgKi9cclxuICBzZXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZVRvXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OCkuW6p+aomSAoeCwgeSkg44Gr56e75YuV44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0LmNlbnRlclg7IC8vID0+IDI0XHJcbiAgICogICAgIHJlY3QubW92ZVRvKDAsIDApO1xyXG4gICAqICAgICByZWN0LmNlbnRlclg7IC8vID0+IDE2XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5XlhYjjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5XlhYjjga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZUJ5XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OCkiAoeCwgeSkg44Gg44GR56e75YuV44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0Lm1vdmVCeSgxMCwgLTEwKTtcclxuICAgKiAgICAgcmVjdC54OyAvLyA9PiAxOFxyXG4gICAqICAgICByZWN0Lnk7IC8vID0+IDZcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLlemHj+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLlemHj+OBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLnggKz0geDtcclxuICAgIHRoaXMueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFNpenNlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OBruW5heOBqOmrmOOBleOCkuWkieabtOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKiAgICAgcmVjdC5zZXRTaXplKDEwLCAyMCk7XHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDEwXHJcbiAgICogICAgIHJlY3QuaGVpZ2h0OyAvLyA9PiAyMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQg6auY44GVXHJcbiAgICovXHJcbiAgc2V0U2l6ZSh3LCBoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gdztcclxuICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBwYWRkaW5nXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OBruS4reOBq+ODkeODh+OCo+ODs+OCsOmgmOWfn+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog55+p5b2i6aCY5Z+f6Ieq5L2T44Gu44K144Kk44K644Gv44OR44OH44Kj44Oz44Kw6aCY5Z+f44Gu5YiG44Gg44GR5bCP44GV44GP44Gq44KK44G+44GZ44CCICBcclxuICAgKiDluYXjga7mjIflrprmlrnms5Xjga8gQ1NTIOOBriBwYWRkaW5nIOaMh+WumuOBqOWQjOOBmOOCiOOBhuOBq+aZguioiOWbnuOCiuOBp+OBmeOAgiAgXHJcbiAgICog5byV5pWw44GMMeOBpOOBruWgtOWQiOOBr+S4iuS4i+W3puWPs+OBruWApOOAgeW8leaVsOOBjDLjgaTjga7loLTlkIjjga/kuIrkuIvjgajlt6blj7Pjga7lgKTjgIHlvJXmlbDjgYzvvJPjgaTjga7loLTlkIjjga/kuIrjgIHlt6blj7PjgIHkuIvjga7lgKTjgajop6Pph4jjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoNTAsIDEwMCwgMTUwLCAyMDApO1xyXG4gICAqICAgICByZWN0LnBhZGRpbmcoMTApO1xyXG4gICAqICAgICByZWN0Lng7IC8vID0+IDYwXHJcbiAgICogICAgIHJlY3QueTsgLy8gPT4gMTEwXHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDEzMFxyXG4gICAqICAgICByZWN0LmhlaWdodDsgLy8gPT4gMTgwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9wIOS4iui+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCDlj7Povrrjga7jg5Hjg4fjgqPjg7PjgrDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIOS4i+i+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IOW3pui+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqL1xyXG4gIHBhZGRpbmcodG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XHJcbiAgICAvLyBjc3Mg44GuIHBhZGRpbmcg44Gr5ZCI44KP44Gb44Gm5pmC6KiI5Zue44KK44Gr44OR44Op44Oh44O844K/6Kq/5pW0XHJcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRvcCA9IHJpZ2h0ID0gYm90dG9tID0gbGVmdCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRvcCAgICAgPSBib3R0b20gPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgcmlnaHQgICA9IGxlZnQgICA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRvcCAgICAgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgcmlnaHQgICA9IGxlZnQgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgYm90dG9tICA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy54ICs9IGxlZnQ7XHJcbiAgICB0aGlzLnkgKz0gdG9wO1xyXG4gICAgdGhpcy53aWR0aCAtPSBsZWZ0K3JpZ2h0O1xyXG4gICAgdGhpcy5oZWlnaHQtPSB0b3AgK2JvdHRvbTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNvbnRhaW5zXHJcbiAgICog5bqn5qiZICh4LCB5KSDjgYwg55+p5b2i6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDUwLCAxMDAsIDE1MCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC5jb250YWlucygzNSwgNjgpOyAvLyA9PiAgdHJ1ZVxyXG4gICAqICAgICByZWN0LmNvbnRhaW5zKDIwMCwgNjgpOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5Yik5a6a44GZ44KL5a++6LGh44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5Yik5a6a44GZ44KL5a++6LGh44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5oyH5a6a44GX44Gf5bqn5qiZ44GM55+p5b2i6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVmdCA8PSB4ICYmIHggPD0gdGhpcy5yaWdodCAmJiB0aGlzLnRvcCA8PSB5ICYmIHkgPD0gdGhpcy5ib3R0b207XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICogdGhpcyDjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoNTAsIDEwMCwgMTUwLCAyMDApO1xyXG4gICAqICAgICByZWN0MiA9IHJlY3QuY2xvbmUoKTtcclxuICAgKiAgICAgcmVjdDIueCA9PSByZWN0Lng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf55+p5b2i6aCY5Z+fXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9DaXJjbGVcclxuICAgKiDnn6nlvaLpoJjln5/lhoXjgavlj47jgb7jgovmnIDlpKfjga7lhobpoJjln5/jgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMzIsIDY0LCAxMDAsIDIwMCk7XHJcbiAgICogICAgIGNpcmNsZSA9IHJlY3QudG9DaXJjbGUoKTtcclxuICAgKiAgICAgY2lyY2xlLng7IC8vID0+IDgyXHJcbiAgICogICAgIGNpcmNsZS55OyAvLyA9PiAxNjRcclxuICAgKiAgICAgY2lyY2xlLnJhZGl1czsgLy8gPT4gNTBcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf5YaG6aCY5Z+fXHJcbiAgICovXHJcbiAgdG9DaXJjbGUoKSB7XHJcbiAgICB2YXIgcmFkaXVzID0gKCh0aGlzLndpZHRoIDwgdGhpcy5oZWlnaHQpID8gdGhpcy53aWR0aCA6IHRoaXMuaGVpZ2h0KS8yO1xyXG4gICAgcmV0dXJuIG5ldyBDaXJjbGUodGhpcy5jZW50ZXJYLCB0aGlzLmNlbnRlclksIHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvQXJyYXlcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuimgee0oOOBqOOBmeOCi+mFjeWIl+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgzMiwgNjQsIDEwMCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC50b0FycmF5KCk7IC8vID0+IFszMiwgNjQsIDEwMCwgMjAwXVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gICAqL1xyXG4gIHRvQXJyYXkoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gbGVmdFxyXG4gICAqIOOCreODo+ODs+ODkOOCueW3puerr+OBi+OCieefqeW9oumgmOWfn+OBruW3pui+uuOBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICogbGVmdCDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7luYXvvIh3aWR0aO+8ieOBjOiHquWLleeahOOBq+iqv+aVtOOBleOCjOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgzMiwgNjQsIDEwMCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC5sZWZ0OyAvLyA9PiAzMlxyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiAxMDBcclxuICAgKiAgICAgcmVjdC5yaWdodDsgLy8gPT4gMTMyXHJcbiAgICogICAgIFxyXG4gICAqICAgICByZWN0LmxlZnQgPSA0MjtcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gOTBcclxuICAgKi9cclxuICBnZXQgbGVmdCgpICAgeyByZXR1cm4gdGhpcy54OyB9XHJcbiAgc2V0IGxlZnQodikgIHsgdGhpcy53aWR0aCAtPSB2LXRoaXMueDsgdGhpcy54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gdG9wXHJcbiAgICog44Kt44Oj44Oz44OQ44K55LiK56uv44GL44KJ55+p5b2i6aCY5Z+f44Gu5LiK6L6644G+44Gn44Gu5L2N572uXHJcbiAgICpcclxuICAgKiB0b3Ag44KS5aSJ5pu044GZ44KL44Go55+p5b2i6aCY5Z+f44Gu6auY44GV77yIaGVpZ2h077yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHRvcCgpICAgeyByZXR1cm4gdGhpcy55OyB9XHJcbiAgc2V0IHRvcCh2KSAgeyB0aGlzLmhlaWdodCAtPSB2LXRoaXMueTsgdGhpcy55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gcmlnaHRcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlt6bnq6/jgYvjgonnn6nlvaLpoJjln5/jga7lj7Povrrjgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIHJpZ2h0IOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBruW5he+8iHdpZHRo77yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHJpZ2h0KCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoOyB9XHJcbiAgc2V0IHJpZ2h0KHYpICB7IHRoaXMud2lkdGggKz0gdi10aGlzLnJpZ2h0OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBib3R0b21cclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIrnq6/jgYvjgonnn6nlvaLpoJjln5/jga7kuIvovrrjgb7jgafjga7kvY3nva5cclxuICAgKlxyXG4gICAqIGJvdHRvbSDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7pq5jjgZXvvIhoZWlnaHTvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKi9cclxuICBnZXQgYm90dG9tKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDsgfVxyXG4gIHNldCBib3R0b20odikgIHsgdGhpcy5oZWlnaHQgKz0gdi10aGlzLmJvdHRvbTsgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjZW50ZXJYXHJcbiAgICog55+p5b2i6aCY5Z+f44GuIHgg5bqn5qiZXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgY2VudGVyWCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XHJcbiAgc2V0IGNlbnRlclgodikgIHtcclxuICAgIC8vIFRPRE86IOaknOiojuS4rVxyXG4gIH1cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gY2VudGVyWVxyXG4gICAqIOefqeW9oumgmOWfn+OBriB5IOW6p+aomVxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlclkoKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzI7IH1cclxuICBzZXQgY2VudGVyWSh2KSAge1xyXG4gICAgLy8gVE9ETzog5qSc6KiO5LitXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENpcmNsZS50b1JlY3RcclxuICog5b6q55Kw5Y+C54Wn44KS5Zue6YG/44GZ44KL44Gf44KB44CB44GT44GT44Gn5a6a576pXHJcbiAqL1xyXG5DaXJjbGUucHJvdG90eXBlLnRvUmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xyXG4gIHJldHVybiBuZXcgUmVjdCh0aGlzLnggLSB0aGlzLnJhZGl1cywgdGhpcy55IC0gdGhpcy5yYWRpdXMsIHNpemUsIHNpemUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLk1hdHJpeDMzXHJcbiAqICMg6KGM5YiX44Kv44Op44K5XHJcbiAqIDN4M+OBruihjOWIl+OCkuihqOOBmeOCr+ODqeOCueOBp+OBmeOAglxyXG4gKiBcclxuICogPHByZT5cclxuICogfCBtMDAgbTAxIG0wMiB8XHJcbiAqIHwgbTEwIG0xMSBtMTIgfFxyXG4gKiB8IG0yMCBtMjEgbTIyIHxcclxuICogPC9wcmU+XHJcbiAqL1xyXG5jbGFzcyBNYXRyaXgzMyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW5pdFxyXG4gICAqIOODnuODiOODquODg+OCr+OCueOCr+ODqeOCueOBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICog5byV5pWw44GvIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIg44Gu6aCG44Gr5oyH5a6a44GX44G+44GZ44CCXHJcbiAgICog5byV5pWw44GMOeWAi+OBq+a6gOOBn+OBquOBhOWgtOWQiOOBr+WNmOS9jeihjOWIl+OCkueUn+aIkOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKCk7XHJcbiAgICogICAgIG1hdDEubTAwICsgbWF0Mi5tMDA7IC8vID0+IDJcclxuICAgKiAgICAgbWF0MS5tMDEgLSBtYXQyLm0wMTsgLy8gPT4gMlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXIuLi59IG0wMCwgbTAxLC4uLiDlkITopoHntKDjga7lgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDooYzliJfjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDkpIHtcclxuICAgICAgdGhpcy5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmlkZW50aXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBruWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKCk7XHJcbiAgICogICAgIG1hdDIuc2V0KDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQxLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlci4uLn0gbTAwLCBtMDEsLi4uIOWQhOimgee0oOOBruWApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOihjOWIl+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIHNldChtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XHJcbiAgICB0aGlzLm0wMCA9IG0wMDsgdGhpcy5tMDEgPSBtMDE7IHRoaXMubTAyID0gbTAyO1xyXG4gICAgdGhpcy5tMTAgPSBtMTA7IHRoaXMubTExID0gbTExOyB0aGlzLm0xMiA9IG0xMjtcclxuICAgIHRoaXMubTIwID0gbTIwOyB0aGlzLm0yMSA9IG0yMTsgdGhpcy5tMjIgPSBtMjI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGlkZW50aXR5XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44KS5Y2Y5L2N6KGM5YiX44Gr44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoKTtcclxuICAgKiAgICAgbWF0MS5pZGVudGl0eSgpLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDljZjkvY3ooYzliJdcclxuICAgKi9cclxuICBpZGVudGl0eSgpIHtcclxuICAgIHRoaXMubTAwID0gMTsgdGhpcy5tMDEgPSAwOyB0aGlzLm0wMiA9IDA7XHJcbiAgICB0aGlzLm0xMCA9IDA7IHRoaXMubTExID0gMTsgdGhpcy5tMTIgPSAwO1xyXG4gICAgdGhpcy5tMjAgPSAwOyB0aGlzLm0yMSA9IDA7IHRoaXMubTIyID0gMTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbG9uZVxyXG4gICAqIHRoaXMg44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IG1hdDEuY2xvbmUoKTtcclxuICAgKiAgICAgbWF0MS50b1N0cmluZygpID09IG1hdDIudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqICAgICBtYXQxID09IG1hdDI7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDooYzliJfjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgTWF0cml4MzMoXHJcbiAgICAgIHRoaXMubTAwLCB0aGlzLm0wMSwgdGhpcy5tMDIsXHJcbiAgICAgIHRoaXMubTEwLCB0aGlzLm0xMSwgdGhpcy5tMTIsXHJcbiAgICAgIHRoaXMubTIwLCB0aGlzLm0yMSwgdGhpcy5tMjJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRldGVybWluYW50XHJcbiAgICog6KGM5YiX5byP44KS6L+U44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygwLCAtMiwgMCwgLTEsIDMsIDEsIDQsIDIsIDEpO1xyXG4gICAqICAgICBtYXQxLmRldGVybWluYW50KCk7IC8vID0+IC0xMFxyXG4gICAqICAgICBtYXQxLmlkZW50aXR5KCkuZGV0ZXJtaW5hbnQoKTsgLy8gPT4gMVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDooYzliJflvI9cclxuICAgKi9cclxuICBkZXRlcm1pbmFudCgpIHtcclxuICAgIHZhciBtMDAgPSB0aGlzLm0wMDsgdmFyIG0wMSA9IHRoaXMubTAxOyB2YXIgbTAyID0gdGhpcy5tMDI7XHJcbiAgICB2YXIgbTEwID0gdGhpcy5tMTA7IHZhciBtMTEgPSB0aGlzLm0xMTsgdmFyIG0xMiA9IHRoaXMubTEyO1xyXG4gICAgdmFyIG0yMCA9IHRoaXMubTIwOyB2YXIgbTIxID0gdGhpcy5tMjE7IHZhciBtMjIgPSB0aGlzLm0yMjtcclxuICAgIFxyXG4gICAgcmV0dXJuIG0wMCptMTEqbTIyICsgbTEwKm0yMSptMDIgKyBtMDEqbTEyKm0yMCAtIG0wMiptMTEqbTIwIC0gbTAxKm0xMCptMjIgLSBtMTIqbTIxKm0wMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdHJhbnNwb3NlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOi7oue9ruihjOWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDQsIDcsIDIsIDUsIDgsIDMsIDYsIDkpO1xyXG4gICAqICAgICBtYXQxLnRyYW5zcG9zZSgpLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDou6Lnva7ooYzliJdcclxuICAgKi9cclxuICB0cmFuc3Bvc2UoKSB7XHJcbiAgICB2YXIgc3dhcCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgdmFyIHRlbXAgPSB0aGlzW2FdO1xyXG4gICAgICB0aGlzW2FdID0gdGhpc1tiXTtcclxuICAgICAgdGhpc1tiXSA9IHRlbXA7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgc3dhcCgnbTAxJywgJ20xMCcpO1xyXG4gICAgc3dhcCgnbTAyJywgJ20yMCcpO1xyXG4gICAgc3dhcCgnbTEyJywgJ20yMScpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW52ZXJ0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOmAhuihjOWIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTEsIDEsIC0xLCA0LCAtMiwgMSwgMSwgMSk7XHJcbiAgICogICAgIG1hdDIgPSBtYXQxLmNsb25lKCkuaW52ZXJ0KCk7XHJcbiAgICogICAgIG1hdDMgPSBtYXQxLmNsb25lKCkubXVsdGlwbHkobWF0Mik7XHJcbiAgICogICAgIG1hdDMudG9TdHJpbmcoKSA9PSBwaGluYS5nZW9tLk1hdHJpeDMzLklERU5USVRZLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOmAhuihjOWIl1xyXG4gICAqL1xyXG4gIGludmVydCgpIHtcclxuICAgIHZhciBtMDAgPSB0aGlzLm0wMDsgdmFyIG0wMSA9IHRoaXMubTAxOyB2YXIgbTAyID0gdGhpcy5tMDI7XHJcbiAgICB2YXIgbTEwID0gdGhpcy5tMTA7IHZhciBtMTEgPSB0aGlzLm0xMTsgdmFyIG0xMiA9IHRoaXMubTEyO1xyXG4gICAgdmFyIG0yMCA9IHRoaXMubTIwOyB2YXIgbTIxID0gdGhpcy5tMjE7IHZhciBtMjIgPSB0aGlzLm0yMjtcclxuXHJcbiAgICB2YXIgZGV0ID0gdGhpcy5kZXRlcm1pbmFudCgpO1xyXG5cclxuICAgIC8vIHxtMDAsIG0wMSwgbTAyfFxyXG4gICAgLy8gfG0xMCwgbTExLCBtMTJ8XHJcbiAgICAvLyB8bTIwLCBtMjEsIG0yMnxcclxuICAgIHRoaXMubTAwID0gKG0xMSptMjItbTEyKm0yMSkvZGV0O1xyXG4gICAgdGhpcy5tMDEgPSAobTEwKm0yMi1tMTIqbTIwKS9kZXQqLTE7XHJcbiAgICB0aGlzLm0wMiA9IChtMTAqbTIxLW0xMSptMjApL2RldDtcclxuICAgIFxyXG4gICAgdGhpcy5tMTAgPSAobTAxKm0yMi1tMDIqbTIxKS9kZXQqLTE7XHJcbiAgICB0aGlzLm0xMSA9IChtMDAqbTIyLW0wMiptMjApL2RldDtcclxuICAgIHRoaXMubTEyID0gKG0wMCptMjEtbTAxKm0yMCkvZGV0Ki0xO1xyXG4gICAgXHJcbiAgICB0aGlzLm0yMCA9IChtMDEqbTEyLW0wMiptMTEpL2RldDtcclxuICAgIHRoaXMubTIxID0gKG0wMCptMTItbTAyKm0xMCkvZGV0Ki0xO1xyXG4gICAgdGhpcy5tMjIgPSAobTAwKm0xMS1tMDEqbTEwKS9kZXQ7XHJcbiAgICBcclxuICAgIHRoaXMudHJhbnNwb3NlKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsdGlwbHlcclxuICAgKiB0aGlzIOOBqyBvdGhlciDjgpLkuZfjgZjjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0xLCAxLCAtMSwgNCwgLTIsIDEsIDEsIDEpO1xyXG4gICAqICAgICBtYXQyID0gbWF0MS5jbG9uZSgpLmludmVydCgpO1xyXG4gICAqICAgICBtYXQzID0gbWF0MS5jbG9uZSgpLm11bHRpcGx5KG1hdDIpO1xyXG4gICAqICAgICBtYXQzLnRvU3RyaW5nKCkgPT0gcGhpbmEuZ2VvbS5NYXRyaXgzMy5JREVOVElUWS50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uTWF0cml4MzN9IG90aGVyIOS5l+OBmOOCi+ihjOWIl1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOS5l+eul+e1kOaenOOBruihjOWIl1xyXG4gICAqL1xyXG4gIG11bHRpcGx5KG1hdCkge1xyXG4gICAgdmFyIHRtID0gdGhpcy5tO1xyXG4gICAgdmFyIG9tID0gbWF0Lm07XHJcblxyXG4gICAgdmFyIGEwMCA9IHRoaXMubTAwLCBhMDEgPSB0aGlzLm0wMSwgYTAyID0gdGhpcy5tMDI7XHJcbiAgICB2YXIgYTEwID0gdGhpcy5tMTAsIGExMSA9IHRoaXMubTExLCBhMTIgPSB0aGlzLm0xMjtcclxuICAgIHZhciBhMjAgPSB0aGlzLm0yMCwgYTIxID0gdGhpcy5tMjEsIGEyMiA9IHRoaXMubTIyO1xyXG4gICAgdmFyIGIwMCA9IG1hdC5tMDAsIGIwMSA9IG1hdC5tMDEsIGIwMiA9IG1hdC5tMDI7XHJcbiAgICB2YXIgYjEwID0gbWF0Lm0xMCwgYjExID0gbWF0Lm0xMSwgYjEyID0gbWF0Lm0xMjtcclxuICAgIHZhciBiMjAgPSBtYXQubTIwLCBiMjEgPSBtYXQubTIxLCBiMjIgPSBtYXQubTIyO1xyXG5cclxuICAgIHRoaXMubTAwID0gYTAwKmIwMCArIGEwMSpiMTAgKyBhMDIqYjIwO1xyXG4gICAgdGhpcy5tMDEgPSBhMDAqYjAxICsgYTAxKmIxMSArIGEwMipiMjE7XHJcbiAgICB0aGlzLm0wMiA9IGEwMCpiMDIgKyBhMDEqYjEyICsgYTAyKmIyMjtcclxuXHJcbiAgICB0aGlzLm0xMCA9IGExMCpiMDAgKyBhMTEqYjEwICsgYTEyKmIyMDtcclxuICAgIHRoaXMubTExID0gYTEwKmIwMSArIGExMSpiMTEgKyBhMTIqYjIxO1xyXG4gICAgdGhpcy5tMTIgPSBhMTAqYjAyICsgYTExKmIxMiArIGExMipiMjI7XHJcblxyXG4gICAgdGhpcy5tMjAgPSBhMjAqYjAwICsgYTIxKmIxMCArIGEyMipiMjA7XHJcbiAgICB0aGlzLm0yMSA9IGEyMCpiMDEgKyBhMjEqYjExICsgYTIyKmIyMTtcclxuICAgIHRoaXMubTIyID0gYTIwKmIwMiArIGEyMSpiMTIgKyBhMjIqYjIyO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsdGlwbHlWZWN0b3IyXHJcbiAgICogdGhpcyDjgasy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5LmX44GY44G+44GZ44CCXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBryAoeCwgeSwgMSkg44Go44GX44Gm5LmX566X44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0xLCAxLCAtMSwgNCwgLTIsIDEsIDEsIDEpO1xyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIsIDQpXHJcbiAgICogICAgIG1hdC5tdWx0aXBseVZlY3RvcjIodikgLy8gPT4ge3g6IC0zLCB5OiAxMn1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOS5l+OBmOOCi+ODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5LmX566X57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbXVsdGlwbHlWZWN0b3IyKHYpIHtcclxuICAgIHZhciB2eCA9IHRoaXMubTAwKnYueCArIHRoaXMubTAxKnYueSArIHRoaXMubTAyO1xyXG4gICAgdmFyIHZ5ID0gdGhpcy5tMTAqdi54ICsgdGhpcy5tMTEqdi55ICsgdGhpcy5tMTI7XHJcbiAgICBcclxuICAgIC8vIHJldHVybiBwaGluYS5nZW9tLlZlY3RvcjIodngsIHZ5KTtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2eCwgdnkpO1xyXG4gIH1cclxuXHJcbiAgLy8g6KGMXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRSb3dcclxuICAgKiByb3cg55Wq55uu44Gu6KGM44KS6YWN5YiX44Gn6L+U44GX44G+44GZ44CCcm93IOOBjCAw44CBMeOAgTIg44Gu44GE44Ga44KM44GL44Gn44Gq44GR44KM44GwIG51bGwg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MS5nZXRSb3coMCk7IC8vIFsxLCAyLCAzXVxyXG4gICAqICAgICBtYXQxLmdldFJvdygxKTsgLy8gWzQsIDUsIDZdXHJcbiAgICogICAgIG1hdDEuZ2V0Um93KDkpOyAvLyBudWxsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gezAvMS8yfSByb3cg6KGM55Wq5Y+3XHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOihjOOCkuihqOOBmemFjeWIl1xyXG4gICAqL1xyXG4gIGdldFJvdyhyb3cpIHtcclxuICAgIGlmICggcm93ID09PSAwICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMCwgdGhpcy5tMDEsIHRoaXMubTAyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggcm93ID09PSAxICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0xMCwgdGhpcy5tMTEsIHRoaXMubTEyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggcm93ID09PSAyICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0yMCwgdGhpcy5tMjEsIHRoaXMubTIyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENvbFxyXG4gICAqIGNvbCDnlarnm67jga7liJfjgpLphY3liJfjgafov5TjgZfjgb7jgZnjgIJjb2wg44GMIDDjgIEx44CBMiDjga7jgYTjgZrjgozjgYvjgafjgarjgZHjgozjgbAgbnVsbCDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQxLmdldENvbCgwKTsgLy8gWzEsIDQsIDddXHJcbiAgICogICAgIG1hdDEuZ2V0Q29sKDEpOyAvLyBbMiwgNSwgOF1cclxuICAgKiAgICAgbWF0MS5nZXRSb3coLTEpOyAvLyBudWxsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gezAvMS8yfSBjb2wg5YiX55Wq5Y+3XHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOWIl+OCkuihqOOBmemFjeWIl1xyXG4gICAqL1xyXG4gIGdldENvbChjb2wpIHtcclxuICAgIGlmICggY29sID09PSAwICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMCwgdGhpcy5tMTAsIHRoaXMubTIwIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY29sID09PSAxICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMSwgdGhpcy5tMTEsIHRoaXMubTIxIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY29sID09PSAyICkge1xyXG4gICAgICByZXR1cm4gWyB0aGlzLm0wMiwgdGhpcy5tMTIsIHRoaXMubTIyIF07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvU3RyaW5nXHJcbiAgICog6KGM5YiX44KSIEpTT04g5b2i5byP44Gn6KGo54++44GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHYuY2xvbmUoKTtcclxuICAgKiAgICAgdjIueCA9PSB2Lng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gSlNPTiDmloflrZfliJdcclxuICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInx7bTAwfSwge20wMX0sIHttMDJ9fFxcbnx7bTEwfSwge20xMX0sIHttMTJ9fFxcbnx7bTIwfSwge20yMX0sIHttMjJ9fFwiLCB0aGlzKTtcclxuICAgIC8vIHJldHVybiBcInx7bTAwfSwge20wMX0sIHttMDJ9fFxcbnx7bTEwfSwge20xMX0sIHttMTJ9fFxcbnx7bTIwfSwge20yMX0sIHttMjJ9fFwiLmZvcm1hdCh0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtwaGluYS5nZW9tLk1hdHJpeDMzfSBJREVOVElUWSDljZjkvY3ooYzliJdcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5NYXRyaXgzMy5JREVOVElUWSA9IG5ldyBNYXRyaXgzMygpLmlkZW50aXR5KCk7XHJcblxyXG4vKipcclxuKiBAY2xhc3MgcGhpbmEuZ2VvbS5Db2xsaXNpb25cclxuKiAjIOihneeqgeWIpOWumueUqOOCr+ODqeOCuVxyXG4qIOihneeqgeWIpOWumuOBruOBn+OCgeOBruOCr+ODqeOCueOBp+OBmeOAguOBmeOBueOBpuOBruODoeOCveODg+ODieOBjOOCueOCv+ODhuOCo+ODg+OCr+ODoeOCveODg+ODieOBp+OBmeOAglxyXG4qIFxyXG4qL1xyXG5jbGFzcyBDb2xsaXNpb24ge1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RDaXJjbGVDaXJjbGVcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuOBpOOBruWGhumgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlMSA9IHBoaW5hLmdlb20uQ2lyY2xlKDEwMCwgMTAwLCAzMCk7XHJcbiAgICogICAgIGNpcmNsZTIgPSBwaGluYS5nZW9tLkNpcmNsZSgxMzAsIDE0MCwgMzApO1xyXG4gICAqIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RDaXJjbGVDaXJjbGUoY2lyY2xlMSwgY2lyY2xlMik7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZTEg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLkNpcmNsZX0gY2lyY2xlMiDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdENpcmNsZUNpcmNsZShjaXJjbGUwLCBjaXJjbGUxKSB7XHJcbiAgICB2YXIgZGlzdGFuY2VTcXVhcmVkID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmRpc3RhbmNlU3F1YXJlZChjaXJjbGUwLCBjaXJjbGUxKTtcclxuICAgIHJldHVybiBkaXN0YW5jZVNxdWFyZWQgPD0gTWF0aC5wb3coY2lyY2xlMC5yYWRpdXMgKyBjaXJjbGUxLnJhZGl1cywgMik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdFJlY3RSZWN0XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLjgaTjga7nn6nlvaLpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QxID0gcGhpbmEuZ2VvbS5SZWN0KDEwMCwgMTAwLCAzMCwgNDApO1xyXG4gICAqICAgICByZWN0MiA9IHBoaW5hLmdlb20uUmVjdCgyMDAsIDIwMCwgMTAsIDEwKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdFJlY3RSZWN0KHJlY3QxLCByZWN0Mik7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdDEg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3QyIOefqeW9oumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOmgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0UmVjdFJlY3QocmVjdDAsIHJlY3QxKSB7XHJcbiAgICByZXR1cm4gKHJlY3QwLmxlZnQgPCByZWN0MS5yaWdodCkgJiYgKHJlY3QwLnJpZ2h0ID4gcmVjdDEubGVmdCkgJiZcclxuICAgICAgKHJlY3QwLnRvcCA8IHJlY3QxLmJvdHRvbSkgJiYgKHJlY3QwLmJvdHRvbSA+IHJlY3QxLnRvcCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdENpcmNsZVJlY3RcclxuICAgKiBAc3RhdGljXHJcbiAgICog5YaG6aCY5Z+f44Go55+p5b2i6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgxMDAsIDEwMCwgMzApO1xyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDEwMCwgMTAwLCAzMCwgNDApO1xyXG4gICAqICAgICBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0Q2lyY2xlUmVjdChjaXJjbGUsIHJlY3QpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3Qg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RDaXJjbGVSZWN0KGNpcmNsZSwgcmVjdCkge1xyXG4gICAgLy8g44G+44Ga44Gv5aSn44GN44Gq55+p5b2i44Gn5Yik5a6aKOmrmOmAn+WMlilcclxuICAgIHZhciBiaWdSZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KHJlY3QubGVmdC1jaXJjbGUucmFkaXVzLCByZWN0LnRvcC1jaXJjbGUucmFkaXVzLCByZWN0LndpZHRoK2NpcmNsZS5yYWRpdXMqMiwgcmVjdC5oZWlnaHQrY2lyY2xlLnJhZGl1cyoyKTtcclxuICAgIGlmIChiaWdSZWN0LmNvbnRhaW5zKGNpcmNsZS54LCBjaXJjbGUueSkgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gMueorumhnuOBruefqeW9ouOBqOihneeqgeWIpOWumlxyXG4gICAgdmFyIHIgPSBwaGluYS5nZW9tLlJlY3QocmVjdC5sZWZ0LWNpcmNsZS5yYWRpdXMsIHJlY3QudG9wLCByZWN0LndpZHRoK2NpcmNsZS5yYWRpdXMqMiwgcmVjdC5oZWlnaHQpO1xyXG4gICAgaWYgKHIuY29udGFpbnMoY2lyY2xlLngsIGNpcmNsZS55KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHIuc2V0KHJlY3QubGVmdCwgcmVjdC50b3AtY2lyY2xlLnJhZGl1cywgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQrY2lyY2xlLnJhZGl1cyoyKTtcclxuICAgIGlmIChyLmNvbnRhaW5zKGNpcmNsZS54LCBjaXJjbGUueSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOWGhuOBqOefqeW9ouOBru+8lOeCueOBruWIpOWumlxyXG4gICAgdmFyIGMgPSBwaGluYS5nZW9tLkNpcmNsZShjaXJjbGUueCwgY2lyY2xlLnksIGNpcmNsZS5yYWRpdXMpO1xyXG4gICAgLy8gbGVmdCB0b3BcclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QubGVmdCwgcmVjdC50b3ApKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gcmlnaHQgdG9wXHJcbiAgICBpZiAoYy5jb250YWlucyhyZWN0LnJpZ2h0LCByZWN0LnRvcCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyByaWdodCBib3R0b21cclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QucmlnaHQsIHJlY3QuYm90dG9tKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGxlZnQgYm90dG9tXHJcbiAgICBpZiAoYy5jb250YWlucyhyZWN0LmxlZnQsIHJlY3QuYm90dG9tKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RDaXJjbGVMaW5lXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIOWGhumgmOWfn+OBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMTAwLCAxMDAsIDIwKTtcclxuICAgKiAgICAgcDEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMCwgMCk7XHJcbiAgICogICAgIHAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMwMCwgNDAwKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdENpcmNsZUxpbmUoY2lyY2xlLCBwMSwgcDIpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAxIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMiDnt5rliIbjga7nq6/jga7luqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDlhobpoJjln5/jgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdENpcmNsZUxpbmUgKGNpcmNsZSwgcDEsIHAyKSB7XHJcbiAgICAvLyDlhYjjgavnt5rliIbnq6/jgajjga7liKTlrppcclxuICAgIGlmIChjaXJjbGUuY29udGFpbnMocDEueCwgcDEueSkgfHwgY2lyY2xlLmNvbnRhaW5zKHAyLngsIHAyLnkpKSByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIOWNiuW+hOOBrjLkuZdcclxuICAgIHZhciByMiA9IGNpcmNsZS5yYWRpdXMgKiBjaXJjbGUucmFkaXVzO1xyXG4gICAgLy8g5YaG44Gu5Lit5b+D5bqn5qiZXHJcbiAgICB2YXIgcDMgPSBwaGluYS5nZW9tLlZlY3RvcjIoY2lyY2xlLngsIGNpcmNsZS55KTtcclxuICAgIC8vIOWQhOODmeOCr+ODiOODq1xyXG4gICAgdmFyIHAxcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHAxLCBwMik7XHJcbiAgICB2YXIgcDFwMyA9IHBoaW5hLmdlb20uVmVjdG9yMi5zdWIocDEsIHAzKTtcclxuICAgIHZhciBwMnAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyLnN1YihwMiwgcDMpO1xyXG4gICAgLy8g5aSW56mNXHJcbiAgICB2YXIgY3Jvc3MgPSBwaGluYS5nZW9tLlZlY3RvcjIuY3Jvc3MocDFwMiwgcDFwMyk7XHJcbiAgICAvLyDlpJbnqY3jga7ntbblr77lgKTjga4y5LmXXHJcbiAgICB2YXIgY3Jvc3MyID0gY3Jvc3MgKiBjcm9zcztcclxuICAgIC8vIHAxcDLjga7plbfjgZXjga4y5LmXXHJcbiAgICB2YXIgbGVuZ3RoMiA9IHAxcDIubGVuZ3RoU3F1YXJlZCgpO1xyXG4gICAgLy8g5YaG44Gu5Lit5b+D44GL44KJ57ea5YiG44G+44Gn44Gu5Z6C57ea44Gu6Led6Zui44GuMuS5l1xyXG4gICAgdmFyIGQyID0gY3Jvc3MyIC8gbGVuZ3RoMjtcclxuICAgIC8vIOWGhuOBruWNiuW+hOOBrjLkuZfjgojjgorlsI/jgZXjgYTjgarjgonph43opIdcclxuICAgIGlmIChkMiA8PSByMikge1xyXG4gICAgICB2YXIgZG90MSA9IHBoaW5hLmdlb20uVmVjdG9yMi5kb3QocDFwMywgcDFwMik7XHJcbiAgICAgIHZhciBkb3QyID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmRvdChwMnAzLCBwMXAyKTtcclxuICAgICAgLy8g6YCa5bi444Gv5YaF56mN44Gu5LmX566XXHJcbiAgICAgIGlmIChkb3QxICogZG90MiA8PSAwKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0TGluZUxpbmVcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuOBpOOBrue3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqIOWPguiAg++8mmh0dHA6Ly93d3c1ZC5iaWdsb2JlLm5lLmpwL350b21veWEwMy9zaHRtbC9hbGdvcml0aG0vSW50ZXJzZWN0aW9uLmh0bVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcDEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMTAwLCAxMDApO1xyXG4gICAqICAgICBwMiA9IHBoaW5hLmdlb20uVmVjdG9yMigyMDAsIDIwMCk7XHJcbiAgICogICAgIHAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDE1MCwgMjQwKTtcclxuICAgKiAgICAgcDQgPSBwaGluYS5nZW9tLlZlY3RvcjIoMjAwLCAxMDApO1xyXG4gICAqIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHAzLCBwNCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMSDnt5rliIYx44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAyIOe3muWIhjHjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDMg57ea5YiGMuOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwNCDnt5rliIYy44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g57ea5YiGMeOBqOe3muWIhjLjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdExpbmVMaW5lIChwMSwgcDIsIHAzLCBwNCkge1xyXG4gICAgLy/lkIzkuIDvvLjvvLnou7jkuIrjgavkuZfjgaPjgabjgovloLTlkIjjga7oqqTliKTlrprlm57pgb9cclxuICAgIGlmIChwMS54ID09IHAyLnggJiYgcDEueCA9PSBwMy54ICYmIHAxLnggPT0gcDQueCkge1xyXG4gICAgICB2YXIgbWluID0gTWF0aC5taW4ocDEueSwgcDIueSk7XHJcbiAgICAgIHZhciBtYXggPSBNYXRoLm1heChwMS55LCBwMi55KTtcclxuICAgICAgaWYgKG1pbiA8PSBwMy55ICYmIHAzLnkgPD0gbWF4IHx8IG1pbiA8PSBwNC55ICYmIHA0LnkgPD0gbWF4KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHAxLnkgPT0gcDIueSAmJiBwMS55ID09IHAzLnkgJiYgcDEueSA9PSBwNC55KSB7XHJcbiAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihwMS54LCBwMi54KTtcclxuICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHAxLngsIHAyLngpO1xyXG4gICAgICBpZiAobWluIDw9IHAzLnggJiYgcDMueCA8PSBtYXggfHwgbWluIDw9IHA0LnggJiYgcDQueCA8PSBtYXgpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL+mAmuW4uOWIpOWumlxyXG4gICAgdmFyIGEgPSAocDEueCAtIHAyLngpICogKHAzLnkgLSBwMS55KSArIChwMS55IC0gcDIueSkgKiAocDEueCAtIHAzLngpO1xyXG4gICAgdmFyIGIgPSAocDEueCAtIHAyLngpICogKHA0LnkgLSBwMS55KSArIChwMS55IC0gcDIueSkgKiAocDEueCAtIHA0LngpO1xyXG4gICAgdmFyIGMgPSAocDMueCAtIHA0LngpICogKHAxLnkgLSBwMy55KSArIChwMy55IC0gcDQueSkgKiAocDMueCAtIHAxLngpO1xyXG4gICAgdmFyIGQgPSAocDMueCAtIHA0LngpICogKHAyLnkgLSBwMy55KSArIChwMy55IC0gcDQueSkgKiAocDMueCAtIHAyLngpO1xyXG4gICAgcmV0dXJuIGEgKiBiIDw9IDAgJiYgYyAqIGQgPD0gMDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0UmVjdExpbmVcclxuICAgKiBAc3RhdGljXHJcbiAgICog55+p5b2i44Go57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDEyMCwgMTMwLCA0MCwgNTApO1xyXG4gICAqICAgICBwMSA9IHBoaW5hLmdlb20uVmVjdG9yMigxMDAsIDEwMCk7XHJcbiAgICogICAgIHAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIwMCwgMjAwKTtcclxuICAgKiBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0UmVjdExpbmUocmVjdCwgcDEsIHAyKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3Qg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAxIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMiDnt5rliIbjga7nq6/jga7luqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDnn6nlvaLjgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdFJlY3RMaW5lIChyZWN0LCBwMSwgcDIpIHtcclxuICAgICAgLy/ljIXlkKvliKTlrpoocDHjgYzlkKvjgb7jgozjgabjgozjgbDoia/jgYTjga7jgadwMuOBruWIpOWumuOBr+OBl+OBquOBhO+8iVxyXG4gICAgICBpZiAocmVjdC5sZWZ0IDw9IHAxLnggJiYgcDEueCA8PSByZWN0LnJpZ2h0ICYmIHJlY3QudG9wIDw9IHAxLnkgJiYgcDEueSA8PSByZWN0LmJvdHRvbSApIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgLy/nn6nlvaLjga7vvJTngrlcclxuICAgICAgdmFyIHIxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QubGVmdCwgcmVjdC50b3ApOyAgICAgLy/lt6bkuIpcclxuICAgICAgdmFyIHIyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QucmlnaHQsIHJlY3QudG9wKTsgICAgLy/lj7PkuIpcclxuICAgICAgdmFyIHIzID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QucmlnaHQsIHJlY3QuYm90dG9tKTsgLy/lj7PkuItcclxuICAgICAgdmFyIHI0ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QubGVmdCwgcmVjdC5ib3R0b20pOyAgLy/lt6bkuItcclxuXHJcbiAgICAgIC8v55+p5b2i44Gu77yU6L6644KS44Gq44GZ57ea5YiG44Go44Gu5o6l6Kem5Yik5a6aXHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMSwgcjIpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIyLCByMykpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAocGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcjMsIHI0KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMSwgcjQpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5WZWN0b3IzXHJcbiAqICMgM+asoeWFg+ODmeOCr+ODiOODq+OCr+ODqeOCue+8iOacquWun+ijhe+8iVxyXG4gKiAz5qyh5YWD44Gu44OZ44Kv44OI44Or44KE5bqn5qiZ44KS6KGo44GZ44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBWZWN0b3IzIHtcclxuXHJcbiAgLyoqIHjluqfmqJkgKi9cclxuICAvLyB4OiAwLFxyXG4gIC8qKiB55bqn5qiZICovXHJcbiAgLy8geTogMCxcclxuICAvKiogeuW6p+aomSAqL1xyXG4gIC8vIHo6IDAsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcclxuICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgIHRoaXMueiA9IHogfHwgMDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdyYXBoaWNzLkNhbnZhc1xyXG4gKiDjgq3jg6Pjg7Pjg5Djgrnmi6HlvLXjgq/jg6njgrlcclxuICovXHJcbmNsYXNzIENhbnZhcyB7XHJcbiAgLy8gZG9tRWxlbWVudDogbnVsbCxcclxuICAvLyBjYW52YXM6IG51bGwsXHJcbiAgLy8gY29udGV4dDogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5pyf5YyWXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICBpZiAodHlwZW9mIGNhbnZhcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNhbnZhcztcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K144Kk44K644KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmNhbnZhcy53aWR0aCAgID0gd2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRTaXplVG9TY3JlZW4oKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiAgPSBcImZpeGVkXCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5tYXJnaW4gICAgPSBcIjBweFwiO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUucGFkZGluZyAgID0gXCIwcHhcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgICAgICA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgICAgICAgPSBcIjBweFwiO1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZpdFNjcmVlbihpc0V2ZXIpIHtcclxuICAgIGlzRXZlciA9IGlzRXZlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzRXZlcjtcclxuXHJcbiAgICB2YXIgX2ZpdEZ1bmMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGUgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICAgIHZhciBzID0gZS5zdHlsZTtcclxuICAgICAgXHJcbiAgICAgIHMucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgIHMubWFyZ2luID0gXCJhdXRvXCI7XHJcbiAgICAgIHMubGVmdCA9IFwiMHB4XCI7XHJcbiAgICAgIHMudG9wICA9IFwiMHB4XCI7XHJcbiAgICAgIHMuYm90dG9tID0gXCIwcHhcIjtcclxuICAgICAgcy5yaWdodCA9IFwiMHB4XCI7XHJcblxyXG4gICAgICB2YXIgcmF0ZVdpZHRoID0gZS53aWR0aC93aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdmFyIHJhdGVIZWlnaHQ9IGUuaGVpZ2h0L3dpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgdmFyIHJhdGUgPSBlLmhlaWdodC9lLndpZHRoO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJhdGVXaWR0aCA+IHJhdGVIZWlnaHQpIHtcclxuICAgICAgICBzLndpZHRoICA9IE1hdGguZmxvb3IoaW5uZXJXaWR0aCkrXCJweFwiO1xyXG4gICAgICAgIHMuaGVpZ2h0ID0gTWF0aC5mbG9vcihpbm5lcldpZHRoKnJhdGUpK1wicHhcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzLndpZHRoICA9IE1hdGguZmxvb3IoaW5uZXJIZWlnaHQvcmF0ZSkrXCJweFwiO1xyXG4gICAgICAgIHMuaGVpZ2h0ID0gTWF0aC5mbG9vcihpbm5lckhlaWdodCkrXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBcclxuICAgIC8vIOS4gOW6puWun+ihjOOBl+OBpuOBiuOBj1xyXG4gICAgX2ZpdEZ1bmMoKTtcclxuXHJcbiAgICAvLyDjg6rjgrXjgqTjgrrmmYLjga7jg6rjgrnjg4rjgajjgZfjgabnmbvpjLLjgZfjgabjgYrjgY9cclxuICAgIGlmIChpc0V2ZXIpIHtcclxuICAgICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBfZml0RnVuYywgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kv44Oq44KiXHJcbiAgICovXHJcbiAgY2xlYXIoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgeCA9IHggfHwgMDtcclxuICAgIHkgPSB5IHx8IDA7XHJcbiAgICB3aWR0aCA9IHdpZHRoIHx8IHRoaXMud2lkdGg7XHJcbiAgICBoZWlnaHQ9IGhlaWdodHx8IHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDb2xvcihmaWxsU3R5bGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHggPSB4IHx8IDA7XHJcbiAgICB5ID0geSB8fCAwO1xyXG4gICAgd2lkdGggPSB3aWR0aCB8fCB0aGlzLndpZHRoO1xyXG4gICAgaGVpZ2h0PSBoZWlnaHR8fCB0aGlzLmhlaWdodDtcclxuXHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjApOyAvLyDooYzliJfliJ3mnJ/ljJZcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlOyAgICAgLy8g5aGX44KK44Gk44G244GX44K544K/44Kk44Or44K744OD44OIXHJcbiAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K544KS6ZaL5aeLKOODquOCu+ODg+ODiClcclxuICAgKi9cclxuICBiZWdpblBhdGgoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICDjg5HjgrnjgpLplonjgZjjgotcclxuICAgKi9cclxuICBjbG9zZVBhdGgoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiAg5paw6KaP44OR44K555Sf5oiQXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODkeOCueOBq+i/veWKoFxyXG4gICAqL1xyXG4gIGxpbmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBxdWFkcmF0aWNDdXJ2ZVRvKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBiZXppZXJDdXJ2ZVRvKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmJlemllckN1cnZlVG8uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5HjgrnlhoXjgpLloZfjgorjgaTjgbbjgZlcclxuICAgKi9cclxuICBmaWxsKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K55LiK44Gr44Op44Kk44Oz44KS5byV44GPXHJcbiAgICovXHJcbiAgc3Ryb2tlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq/jg6rjg4Pjg5dcclxuICAgKi9cclxuICBjbGlwKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmNsaXAoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgICAgIFxyXG4gIC8qKlxyXG4gICAqIOeCueaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdQb2ludCh4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJva2VSZWN0KHgsIHksIDEsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz44OR44K544KS5L2c5oiQXHJcbiAgICovXHJcbiAgbGluZSh4MCwgeTAsIHgxLCB5MSkge1xyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvKHgwLCB5MCkubGluZVRvKHgxLCB5MSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdMaW5lKHgwLCB5MCwgeDEsIHkxKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5saW5lKHgwLCB5MCwgeDEsIHkxKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODgOODg+OCt+ODpeODqeOCpOODs+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdEYXNoTGluZSh4MCwgeTAsIHgxLCB5MSwgcGF0dGVybikge1xyXG4gICAgdmFyIHBhdHRlcm5UYWJsZSA9IG51bGw7XHJcbiAgICBpZiAodHlwZW9mKHBhdHRlcm4pID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcGF0dGVyblRhYmxlID0gcGF0dGVybjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwYXR0ZXJuID0gcGF0dGVybiB8fCAweGYwZjA7XHJcbiAgICAgIHBhdHRlcm5UYWJsZSA9IHBhdHRlcm4udG9TdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICBwYXR0ZXJuVGFibGUgPSBwYXR0ZXJuVGFibGUucGFkZGluZygxNiwgJzEnKTtcclxuICAgIFxyXG4gICAgdmFyIHZ4ID0geDEteDA7XHJcbiAgICB2YXIgdnkgPSB5MS15MDtcclxuICAgIHZhciBsZW4gPSBNYXRoLnNxcnQodngqdnggKyB2eSp2eSk7XHJcbiAgICB2eC89bGVuOyB2eS89bGVuO1xyXG4gICAgXHJcbiAgICB2YXIgeCA9IHgwO1xyXG4gICAgdmFyIHkgPSB5MDtcclxuICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICBpZiAocGF0dGVyblRhYmxlW2klMTZdID09ICcxJykge1xyXG4gICAgICAgIHRoaXMuZHJhd1BvaW50KHgsIHkpO1xyXG4gICAgICAgIC8vIHRoaXMuZmlsbFJlY3QoeCwgeSwgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCwgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCk7XHJcbiAgICAgIH1cclxuICAgICAgeCArPSB2eDtcclxuICAgICAgeSArPSB2eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB2MCh4MCwgeTApLCB2MSh4MSwgeTEpIOOBi+OCieinkuW6puOCkuaxguOCgeOBpuefouWNsOOCkuaPj+eUu1xyXG4gICAqIGh0dHA6Ly9oYWt1aGluLmpwL2FzL3JvdGF0aW9uLmh0bWxcclxuICAgKi9cclxuICBkcmF3QXJyb3coeDAsIHkwLCB4MSwgeTEsIGFycm93UmFkaXVzKSB7XHJcbiAgICB2YXIgdnggPSB4MS14MDtcclxuICAgIHZhciB2eSA9IHkxLXkwO1xyXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMih2eSwgdngpKjE4MC9NYXRoLlBJO1xyXG4gICAgXHJcbiAgICB0aGlzLmRyYXdMaW5lKHgwLCB5MCwgeDEsIHkxKTtcclxuICAgIHRoaXMuZmlsbFBvbHlnb24oeDEsIHkxLCBhcnJvd1JhZGl1cyB8fCA1LCAzLCBhbmdsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIGxpbmVzXHJcbiAgICovXHJcbiAgbGluZXMoKSB7XHJcbiAgICB0aGlzLm1vdmVUbyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcbiAgICBmb3IgKHZhciBpPTEsbGVuPWFyZ3VtZW50cy5sZW5ndGgvMjsgaTxsZW47ICsraSkge1xyXG4gICAgICB0aGlzLmxpbmVUbyhhcmd1bWVudHNbaSoyXSwgYXJndW1lbnRzW2kqMisxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+OCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZUxpbmVzKCkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMubGluZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+Whl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxMaW5lcygpIHtcclxuICAgIHRoaXMuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmxpbmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm5vop5LlvaLjg5HjgrnjgpLkvZzmiJDjgZnjgotcclxuICAgKi9cclxuICByZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuY29udGV4dC5yZWN0LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm5vop5LlvaLloZfjgorjgaTjgbbjgZfmj4/nlLtcclxuICAgKi9cclxuICBmaWxsUmVjdCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Zub6KeS5b2i44Op44Kk44Oz5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlUmVjdCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDop5LkuLjlm5vop5LlvaLjg5HjgrlcclxuICAgKi9cclxuICByb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XHJcbiAgICB2YXIgbCA9IHggKyByYWRpdXM7XHJcbiAgICB2YXIgciA9IHggKyB3aWR0aCAtIHJhZGl1cztcclxuICAgIHZhciB0ID0geSArIHJhZGl1cztcclxuICAgIHZhciBiID0geSArIGhlaWdodCAtIHJhZGl1cztcclxuICAgIFxyXG4gICAgLypcclxuICAgIHZhciBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjdHgubW92ZVRvKGwsIHkpO1xyXG4gICAgY3R4LmxpbmVUbyhyLCB5KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgrd2lkdGgsIHksIHgrd2lkdGgsIHQpO1xyXG4gICAgY3R4LmxpbmVUbyh4K3dpZHRoLCBiKTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgrd2lkdGgsIHkraGVpZ2h0LCByLCB5K2hlaWdodCk7XHJcbiAgICBjdHgubGluZVRvKGwsIHkraGVpZ2h0KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkraGVpZ2h0LCB4LCBiKTtcclxuICAgIGN0eC5saW5lVG8oeCwgdCk7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCBsLCB5KTtcclxuICAgIC8qKi9cclxuICAgIFxyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhsLCB0LCByYWRpdXMsICAgICAtTWF0aC5QSSwgLU1hdGguUEkqMC41LCBmYWxzZSk7ICAvLyDlt6bkuIpcclxuICAgIHRoaXMuY29udGV4dC5hcmMociwgdCwgcmFkaXVzLCAtTWF0aC5QSSowLjUsICAgICAgICAgICAgMCwgZmFsc2UpOyAgLy8g5Y+z5LiKXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHIsIGIsIHJhZGl1cywgICAgICAgICAgICAwLCAgTWF0aC5QSSowLjUsIGZhbHNlKTsgIC8vIOWPs+S4i1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhsLCBiLCByYWRpdXMsICBNYXRoLlBJKjAuNSwgICAgICBNYXRoLlBJLCBmYWxzZSk7ICAvLyDlt6bkuItcclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KeS5Li45Zub6KeS5b2i5aGX44KK44Gk44G244GXXHJcbiAgICovXHJcbiAgZmlsbFJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpLmZpbGwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOinkuS4uOWbm+inkuW9ouOCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YaG44Gu44OR44K544KS6Kit5a6aXHJcbiAgICovXHJcbiAgY2lyY2xlKHgsIHksIHJhZGl1cykge1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWhl+OCiuOBpOOBtuOBl+WGhuOCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB2YXIgYyA9IHRoaXMuY29udGV4dDtcclxuICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICBjLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG4gICAgYy5jbG9zZVBhdGgoKTtcclxuICAgIGMuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCueODiOODreODvOOCr+WGhuOCkuaPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZUNpcmNsZSh4LCB5LCByYWRpdXMpIHtcclxuICAgIHZhciBjID0gdGhpcy5jb250ZXh0O1xyXG4gICAgYy5iZWdpblBhdGgoKTtcclxuICAgIGMuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XHJcbiAgICBjLmNsb3NlUGF0aCgpO1xyXG4gICAgYy5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YaG5byn44Gu44OR44K544KS6Kit5a6aXHJcbiAgICovXHJcbiAgYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5aGX44KK44Gk44G244GX5YaG5byn44KS5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbEFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuZmlsbCgpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrnjg4jjg63jg7zjgq/lhoblvKfjgpLmj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VBcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAwKTtcclxuICAgIGNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpO1xyXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBmaWxsUGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5maWxsKCk7XHJcbiAgfVxyXG4gIHN0cm9rZVBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5waWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBcclxuICAvKipcclxuICAgKiDjg53jg6rjgrTjg7Pjg5HjgrlcclxuICAgKi9cclxuICBwb2x5Z29uKHgsIHksIHNpemUsIHNpZGVzLCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdmFyIHJhZERpdiA9IChNYXRoLlBJKjIpL3NpZGVzO1xyXG4gICAgdmFyIHJhZE9mZnNldCA9IChvZmZzZXRBbmdsZSE9PXVuZGVmaW5lZCkgPyBvZmZzZXRBbmdsZSpNYXRoLlBJLzE4MCA6IC1NYXRoLlBJLzI7XHJcbiAgICBcclxuICAgIHRoaXMubW92ZVRvKHggKyBNYXRoLmNvcyhyYWRPZmZzZXQpKnNpemUsIHkgKyBNYXRoLnNpbihyYWRPZmZzZXQpKnNpemUpO1xyXG4gICAgZm9yICh2YXIgaT0xOyBpPHNpZGVzOyArK2kpIHtcclxuICAgICAgdmFyIHJhZCA9IHJhZERpdippK3JhZE9mZnNldDtcclxuICAgICAgdGhpcy5saW5lVG8oXHJcbiAgICAgICAgeCArIE1hdGguY29zKHJhZCkqc2l6ZSxcclxuICAgICAgICB5ICsgTWF0aC5zaW4ocmFkKSpzaXplXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOODneODquOCtOODs+Whl+OCiuOBpOOBtuOBl1xyXG4gICAqL1xyXG4gIGZpbGxQb2x5Z29uKHgsIHksIHJhZGl1cywgc2lkZXMsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5wb2x5Z29uKHgsIHksIHJhZGl1cywgc2lkZXMsIG9mZnNldEFuZ2xlKS5maWxsKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOODneODquOCtOODs+OCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpLnN0cm9rZSgpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBzdGFyXHJcbiAgICovXHJcbiAgc3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdmFyIHggPSB4IHx8IDA7XHJcbiAgICB2YXIgeSA9IHkgfHwgMDtcclxuICAgIHZhciByYWRpdXMgPSByYWRpdXMgfHwgNjQ7XHJcbiAgICB2YXIgc2lkZXMgPSBzaWRlcyB8fCA1O1xyXG4gICAgdmFyIHNpZGVJbmRlbnRSYWRpdXMgPSByYWRpdXMgKiAoc2lkZUluZGVudCB8fCAwLjM4KTtcclxuICAgIHZhciByYWRPZmZzZXQgPSAob2Zmc2V0QW5nbGUpID8gb2Zmc2V0QW5nbGUqTWF0aC5QSS8xODAgOiAtTWF0aC5QSS8yO1xyXG4gICAgdmFyIHJhZERpdiA9IChNYXRoLlBJKjIpL3NpZGVzLzI7XHJcblxyXG4gICAgdGhpcy5tb3ZlVG8oXHJcbiAgICAgIHggKyBNYXRoLmNvcyhyYWRPZmZzZXQpKnJhZGl1cyxcclxuICAgICAgeSArIE1hdGguc2luKHJhZE9mZnNldCkqcmFkaXVzXHJcbiAgICApO1xyXG4gICAgZm9yICh2YXIgaT0xOyBpPHNpZGVzKjI7ICsraSkge1xyXG4gICAgICB2YXIgcmFkID0gcmFkRGl2KmkgKyByYWRPZmZzZXQ7XHJcbiAgICAgIHZhciBsZW4gPSAoaSUyKSA/IHNpZGVJbmRlbnRSYWRpdXMgOiByYWRpdXM7XHJcbiAgICAgIHRoaXMubGluZVRvKFxyXG4gICAgICAgIHggKyBNYXRoLmNvcyhyYWQpKmxlbixcclxuICAgICAgICB5ICsgTWF0aC5zaW4ocmFkKSpsZW5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmmJ/jgpLloZfjgorjgaTjgbbjgZfmj4/nlLtcclxuICAgKi9cclxuICBmaWxsU3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKS5zdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKS5maWxsKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYn+OCkuOCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHRoaXMuYmVnaW5QYXRoKCkuc3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogaGVhcnRcclxuICAgKi9cclxuICBoZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKSB7XHJcbiAgICB2YXIgaGFsZl9yYWRpdXMgPSByYWRpdXMqMC41O1xyXG4gICAgdmFyIHJhZCA9IChhbmdsZSA9PT0gdW5kZWZpbmVkKSA/IE1hdGguUEkvNCA6IE1hdGguZGVnVG9SYWQoYW5nbGUpO1xyXG5cclxuICAgIC8vIOWNiuW+hCBoYWxmX3JhZGl1cyDjga7op5LluqYgYW5nbGUg5LiK44Gu54K544Go44Gu5o6l57ea44KS5rGC44KB44KLXHJcbiAgICB2YXIgcCA9IE1hdGguY29zKHJhZCkqaGFsZl9yYWRpdXM7XHJcbiAgICB2YXIgcSA9IE1hdGguc2luKHJhZCkqaGFsZl9yYWRpdXM7XHJcblxyXG4gICAgLy8g5YaG44Gu5o6l57ea44Gu5pa556iL5byPIHB4ICsgcXkgPSByXjIg44KI44KKIHkgPSAocl4yLXB4KS9xXHJcbiAgICB2YXIgeDIgPSAtaGFsZl9yYWRpdXM7XHJcbiAgICB2YXIgeTIgPSAoaGFsZl9yYWRpdXMqaGFsZl9yYWRpdXMtcCp4MikvcTtcclxuXHJcbiAgICAvLyDkuK3lv4PkvY3nva7oqr/mlbRcclxuICAgIHZhciBoZWlnaHQgPSB5MiArIGhhbGZfcmFkaXVzO1xyXG4gICAgdmFyIG9mZnNldFkgPSBoYWxmX3JhZGl1cy1oZWlnaHQvMjtcclxuXHJcbiAgICAvLyDjg5HjgrnjgpLjgrvjg4Pjg4hcclxuICAgIHRoaXMubW92ZVRvKDAreCwgeTIreStvZmZzZXRZKTtcclxuXHJcbiAgICB0aGlzLmFyYygtaGFsZl9yYWRpdXMreCwgMCt5K29mZnNldFksIGhhbGZfcmFkaXVzLCBNYXRoLlBJLXJhZCwgTWF0aC5QSSoyKTtcclxuICAgIHRoaXMuYXJjKGhhbGZfcmFkaXVzK3gsIDAreStvZmZzZXRZLCBoYWxmX3JhZGl1cywgTWF0aC5QSSwgcmFkKTtcclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGZpbGwgaGVhcnRcclxuICAgKi9cclxuICBmaWxsSGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuaGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBzdHJva2UgaGVhcnRcclxuICAgKi9cclxuICBzdHJva2VIZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5oZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDE2OTIzNC90aGUtcmVsYXRpb24tb2YtdGhlLWJlemllci1jdXJ2ZS1hbmQtZWxsaXBzZVxyXG4gICAqL1xyXG4gIGVsbGlwc2UoeCwgeSwgdywgaCkge1xyXG4gICAgdmFyIGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgIHZhciBrYXBwYSA9IDAuNTUyMjg0ODtcclxuXHJcbiAgICB2YXIgb3ggPSAodyAvIDIpICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcclxuICAgIHZhciBveSA9IChoIC8gMikgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgdmVydGljYWxcclxuICAgIHZhciB4ZSA9IHggKyB3OyAgICAgICAgICAgLy8geC1lbmRcclxuICAgIHZhciB5ZSA9IHkgKyBoOyAgICAgICAgICAgLy8geS1lbmRcclxuICAgIHZhciB4bSA9IHggKyB3IC8gMjsgICAgICAgLy8geC1taWRkbGVcclxuICAgIHZhciB5bSA9IHkgKyBoIC8gMjsgICAgICAgLy8geS1taWRkbGVcclxuXHJcbiAgICBjdHgubW92ZVRvKHgsIHltKTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHgsIHltIC0gb3ksIHhtIC0gb3gsIHksIHhtLCB5KTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHhtICsgb3gsIHksIHhlLCB5bSAtIG95LCB4ZSwgeW0pO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeGUsIHltICsgb3ksIHhtICsgb3gsIHllLCB4bSwgeWUpO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeG0gLSBveCwgeWUsIHgsIHltICsgb3ksIHgsIHltKTtcclxuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGZpbGxFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkuZmlsbCgpO1xyXG4gIH1cclxuICBzdHJva2VFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBmaWxsVGV4dCgpIHtcclxuICAgIHRoaXMuX2NvbnRleHQuZmlsbFRleHQuYXBwbHkodGhpcy5fY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3Ryb2tlVGV4dCgpIHtcclxuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlVGV4dC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOeUu+WDj+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGRyYXdJbWFnZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KGM5YiX44KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0VHJhbnNmb3JtKG0xMSwgbTEyLCBtMjEsIG0yMiwgZHgsIGR5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKG0xMSwgbTEyLCBtMjEsIG0yMiwgZHgsIGR5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KGM5YiX44KS44Oq44K744OD44OIXHJcbiAgICovXHJcbiAgcmVzZXRUcmFuc2Zvcm0oKSB7XHJcbiAgICB0aGlzLnNldFRyYW5zZm9ybSgxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDkuK3lv4Pjgavnp7vli5VcclxuICAgKi9cclxuICB0cmFuc2Zvcm1DZW50ZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQvMik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOenu+WLlVxyXG4gICAqL1xyXG4gIHRyYW5zbGF0ZSh4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbnui7olxyXG4gICAqL1xyXG4gIHJvdGF0ZShyb3RhdGlvbikge1xyXG4gICAgdGhpcy5jb250ZXh0LnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K544Kx44O844OrXHJcbiAgICovXHJcbiAgc2NhbGUoc2NhbGVYLCBzY2FsZVkpIHtcclxuICAgIHRoaXMuY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeKtuaFi+OCkuS/neWtmFxyXG4gICAqL1xyXG4gIHNhdmUoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnirbmhYvjgpLlvqnlhYNcclxuICAgKi9cclxuICByZXN0b3JlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55S75YOP44Go44GX44Gm5L+d5a2YXHJcbiAgICovXHJcbiAgc2F2ZUFzSW1hZ2UobWltZV90eXBlKSB7XHJcbiAgICBtaW1lX3R5cGUgPSBtaW1lX3R5cGUgfHwgXCJpbWFnZS9wbmdcIjtcclxuICAgIHZhciBkYXRhX3VybCA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTChtaW1lX3R5cGUpO1xyXG4gICAgLy8gZGF0YV91cmwgPSBkYXRhX3VybC5yZXBsYWNlKG1pbWVfdHlwZSwgXCJpbWFnZS9vY3RldC1zdHJlYW1cIik7XHJcbiAgICB3aW5kb3cub3BlbihkYXRhX3VybCwgXCJzYXZlXCIpO1xyXG4gICAgXHJcbiAgICAvLyB0b0RhdGFVUkwg44KS5L2/44GI44Gw5LiL6KiY44Gu44KI44GG44Gq44OE44O844Or44GM5L2c44KM44KL44GL44KCISFcclxuICAgIC8vIFRPRE86IOODl+ODreOCsOODqeODoOOBp+e1teOCkuOBi+OBhOOBpuS/neWtmOOBp+OBjeOCi+ODhOODvOODq1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5bmFXHJcbiAgICovXHJcbiAgZ2V0IHdpZHRoKCkgICB7IHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDsgfVxyXG4gIHNldCB3aWR0aCh2KSAgeyB0aGlzLmNhbnZhcy53aWR0aCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICog6auY44GVXHJcbiAgICovXHJcbiAgZ2V0IGhlaWdodCgpICAgeyByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0OyB9XHJcbiAgc2V0IGhlaWdodCh2KSAgeyB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2OyB9XHJcblxyXG4gIGdldCBmaWxsU3R5bGUoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maWxsU3R5bGU7IH1cclxuICBzZXQgZmlsbFN0eWxlKHYpICB7IHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB2OyB9XHJcblxyXG4gIGdldCBzdHJva2VTdHlsZSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlOyB9XHJcbiAgc2V0IHN0cm9rZVN0eWxlKHYpICB7IHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHY7IH1cclxuXHJcbiAgZ2V0IGdsb2JhbEFscGhhKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGE7IH1cclxuICBzZXQgZ2xvYmFsQWxwaGEodikgIHsgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gdjsgfVxyXG5cclxuICBnZXQgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uOyB9XHJcbiAgc2V0IGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbih2KSAgeyB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93Qmx1cigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd0JsdXI7IH1cclxuICBzZXQgc2hhZG93Qmx1cih2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93Qmx1ciA9IHY7IH1cclxuXHJcbiAgZ2V0IHNoYWRvd0NvbG9yKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3I7IH1cclxuICBzZXQgc2hhZG93Q29sb3IodikgIHsgdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93T2Zmc2V0WCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFg7IH1cclxuICBzZXQgc2hhZG93T2Zmc2V0WCh2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IHY7IH1cclxuXHJcbiAgZ2V0IHNoYWRvd09mZnNldFkoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZOyB9XHJcbiAgc2V0IHNoYWRvd09mZnNldFkodikgIHsgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSB2OyB9XHJcblxyXG4gIGdldCBsaW5lQ2FwKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubGluZUNhcDsgfVxyXG4gIHNldCBsaW5lQ2FwKHYpICB7IHRoaXMuY29udGV4dC5saW5lQ2FwID0gdjsgfVxyXG5cclxuICBnZXQgbGluZUpvaW4oKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lSm9pbjsgfVxyXG4gIHNldCBsaW5lSm9pbih2KSAgeyB0aGlzLmNvbnRleHQubGluZUpvaW4gPSB2OyB9XHJcblxyXG4gIGdldCBtaXRlckxpbWl0KCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubWl0ZXJMaW1pdDsgfVxyXG4gIHNldCBtaXRlckxpbWl0KHYpICB7IHRoaXMuY29udGV4dC5taXRlckxpbWl0ID0gdjsgfVxyXG5cclxuICBnZXQgbGluZVdpZHRoKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubGluZVdpZHRoOyB9XHJcbiAgc2V0IGxpbmVXaWR0aCh2KSAgeyB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdjsgfVxyXG5cclxuICBnZXQgZm9udCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZvbnQ7IH1cclxuICBzZXQgZm9udCh2KSAgeyB0aGlzLmNvbnRleHQuZm9udCA9IHY7IH1cclxuXHJcbiAgZ2V0IHRleHRBbGlnbigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRleHRBbGlnbjsgfVxyXG4gIHNldCB0ZXh0QWxpZ24odikgIHsgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IHY7IH1cclxuXHJcbiAgZ2V0IHRleHRCYXNlbGluZSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRleHRCYXNlbGluZTsgfVxyXG4gIHNldCB0ZXh0QmFzZWxpbmUodikgIHsgdGhpcy5jb250ZXh0LnRleHRCYXNlbGluZSA9IHY7IH1cclxuXHJcbiAgZ2V0IGltYWdlU21vb3RoaW5nRW5hYmxlZCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZDsgfVxyXG4gIHNldCBpbWFnZVNtb290aGluZ0VuYWJsZWQodikgIHtcclxuICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB2O1xyXG4gICAgdGhpcy5jb250ZXh0LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHY7XHJcbiAgICB0aGlzLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtZWFzdXJlVGV4dChmb250LCB0ZXh0KSB7XHJcbiAgICB0aGlzLl9jb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlTGluZWFyR3JhZGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVJhZGlhbEdyYWRpZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQuYXBwbHkodGhpcy5fY29udGV4dCwgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5DYW52YXMuX2NvbnRleHQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKFN1cHBvcnQuY2FudmFzKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vLyBpbXBvcnQgeyBmaXJzdCwgbGFzdCwgY2xlYXIgfSBmcm9tIFwiLi4vY29yZS9hcnJheVwiXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBJbnB1dCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIC8qKiBkb21FbGVtZW50ICovXHJcbiAgLy8gZG9tRWxlbWVudCA9IG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuZGVsdGFQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5wcmV2UG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuX3RlbXBQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHRoaXMubWF4Q2FjaGVOdW0gPSBJbnB1dC5kZWZhdWx0cy5tYXhDYWNoZU51bTtcclxuICAgIHRoaXMubWluRGlzdGFuY2UgPSBJbnB1dC5kZWZhdWx0cy5taW5EaXN0YW5jZTtcclxuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbnB1dC5kZWZhdWx0cy5tYXhEaXN0YW5jZTtcclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuZmxpY2tWZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHRoaXMuZmxhZ3MgPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5sYXN0ID0gdGhpcy5ub3c7XHJcbiAgICB0aGlzLm5vdyA9IHRoaXMuZmxhZ3M7XHJcbiAgICB0aGlzLnN0YXJ0ID0gKHRoaXMubm93IF4gdGhpcy5sYXN0KSAmIHRoaXMubm93O1xyXG4gICAgdGhpcy5lbmQgICA9ICh0aGlzLm5vdyBeIHRoaXMubGFzdCkgJiB0aGlzLmxhc3Q7XHJcblxyXG4gICAgLy8g5aSJ5YyW5YCk44KS5pu05pawXHJcbiAgICB0aGlzLmRlbHRhUG9zaXRpb24ueCA9IHRoaXMuX3RlbXBQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgdGhpcy5kZWx0YVBvc2l0aW9uLnkgPSB0aGlzLl90ZW1wUG9zaXRpb24ueSAtIHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWx0YVBvc2l0aW9uLnggPT09IDAgJiYgdGhpcy5kZWx0YVBvc2l0aW9uLnkgPT09IDApIHtcclxuICAgICAgdGhpcy5fbW92ZUZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9tb3ZlRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcclxuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YmN5Zue44Gu5bqn5qiZ44KS5pu05pawXHJcbiAgICB0aGlzLnByZXZQb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgIC8vIOePvuWcqOOBruS9jee9ruOCkuabtOaWsFxyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5fdGVtcFBvc2l0aW9uLngsIHRoaXMuX3RlbXBQb3NpdGlvbi55KTtcclxuXHJcbiAgICBpZiAodGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGggPiB0aGlzLm1heENhY2hlTnVtKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMuc2hpZnQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMucHVzaCh0aGlzLnBvc2l0aW9uLmNsb25lKCkpO1xyXG4gIH1cclxuXHJcbiAgX3N0YXJ0KHgsIHksIGZsYWcpIHtcclxuICAgIGZsYWcgPSAoZmxhZyAhPT0gdW5kZWZpbmVkKSA/IGZsYWcgOiAxO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0JywgeCwgeSk7XHJcbiAgICB0aGlzLl9tb3ZlKHgsIHkpO1xyXG5cclxuICAgIHRoaXMuZmxhZ3MgfD0gZmxhZztcclxuXHJcbiAgICB2YXIgeCA9IHRoaXMuX3RlbXBQb3NpdGlvbi54O1xyXG4gICAgdmFyIHkgPSB0aGlzLl90ZW1wUG9zaXRpb24ueTtcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgdGhpcy5wcmV2UG9zaXRpb24uc2V0KHgsIHkpO1xyXG5cclxuICAgIHRoaXMuZmxpY2tWZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICAvLyB0aGlzLmNhY2hlUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICB0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBfZW5kKGZsYWcpIHtcclxuICAgIGZsYWcgPSAoZmxhZyAhPT0gdW5kZWZpbmVkKSA/IGZsYWcgOiAxO1xyXG4gICAgdGhpcy5mbGFncyAmPSB+KGZsYWcpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAvLyB2YXIgZmlyc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zLmZpcnN0O1xyXG4gICAgLy8gdmFyIGxhc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zLmxhc3Q7XHJcbiAgICB2YXIgZmlyc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zWzBdO1xyXG4gICAgdmFyIGxhc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zW3RoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoLTFdO1xyXG5cclxuICAgIHZhciB2ID0gVmVjdG9yMi5zdWIobGFzdCwgZmlyc3QpO1xyXG5cclxuICAgIHZhciBsZW4gPSB2Lmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChsZW4gPiB0aGlzLm1pbkRpc3RhbmNlKSB7XHJcbiAgICAgIC8vIHZhciBub3JtYWxMZW4gPSBsZW4uY2xhbXAodGhpcy5taW5EaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSk7XHJcbiAgICAgIHZhciBub3JtYWxMZW4gPSBjbGFtcChsZW4sIHRoaXMubWluRGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UpO1xyXG4gICAgICB2LmRpdihsZW4pLm11bChub3JtYWxMZW4pO1xyXG4gICAgICB0aGlzLmZsaWNrVmVsb2NpdHkuc2V0KHYueCwgdi55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLmNhY2hlUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICB0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvLyDjgrnjgrHjg7zjg6vjgpLogIPmha5cclxuICBfbW92ZSh4LCB5KSB7XHJcbiAgICB0aGlzLl90ZW1wUG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLl90ZW1wUG9zaXRpb24ueSA9IHk7XHJcblxyXG4gICAgLy8gYWRqdXN0IHNjYWxlXHJcbiAgICB2YXIgZWxtID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgdmFyIHJlY3QgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAocmVjdC53aWR0aCkge1xyXG4gICAgICB0aGlzLl90ZW1wUG9zaXRpb24ueCAqPSBlbG0ud2lkdGggLyByZWN0LndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuX3RlbXBQb3NpdGlvbi55ICo9IGVsbS5oZWlnaHQgLyByZWN0LmhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB4XHJcbiAgICogeOW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB4KCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi54OyB9XHJcbiAgc2V0IHgodikgeyB0aGlzLnBvc2l0aW9uLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB5XHJcbiAgICogeeW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB5KCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi55OyB9XHJcbiAgc2V0IHkodikgeyB0aGlzLnBvc2l0aW9uLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBkeFxyXG4gICAqIGR45YCkXHJcbiAgICovXHJcbiAgZ2V0IGR4KCkgeyByZXR1cm4gdGhpcy5kZWx0YVBvc2l0aW9uLng7IH1cclxuICBzZXQgZHgodikgeyB0aGlzLmRlbHRhUG9zaXRpb24ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGR5XHJcbiAgICogZHnlgKRcclxuICAgKi9cclxuICBnZXQgZHkoKSB7IHJldHVybiB0aGlzLmRlbHRhUG9zaXRpb24ueTsgfVxyXG4gIHNldCBkeSh2KSB7IHRoaXMuZGVsdGFQb3NpdGlvbi55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgZnhcclxuICAgKiBmeOWApFxyXG4gICAqL1xyXG4gIGdldCBmeCgpIHsgcmV0dXJuIHRoaXMuZmxpY2tWZWxvY2l0eS54OyB9XHJcbiAgc2V0IGZ4KHYpIHsgdGhpcy5mbGlja1ZlbG9jaXR5LnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBmeVxyXG4gICAqIGZ55YCkXHJcbiAgICovXHJcbiAgZ2V0IGZ5KCkgeyByZXR1cm4gdGhpcy5mbGlja1ZlbG9jaXR5Lnk7IH1cclxuICBzZXQgZnkodikgeyB0aGlzLmZsaWNrVmVsb2NpdHkueSA9IHY7IH1cclxuXHJcbn1cclxuXHJcbklucHV0LmRlZmF1bHRzID0ge1xyXG4gIG1heENhY2hlTnVtOiAzLFxyXG4gIG1pbkRpc3RhbmNlOiAxMCxcclxuICBtYXhEaXN0YW5jZTogMTAwLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5LZXlib2FyZFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5pbnB1dC5JbnB1dFxyXG4gKi9cclxuY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBJbnB1dCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMua2V5ID0ge307XHJcbiAgICB0aGlzLnByZXNzICA9IHt9O1xyXG4gICAgdGhpcy5kb3duICAgPSB7fTtcclxuICAgIHRoaXMudXAgICAgID0ge307XHJcbiAgICB0aGlzLmxhc3QgICA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2tleWRvd24gPSBudWxsO1xyXG4gICAgdGhpcy5fa2V5dXAgPSBudWxsO1xyXG4gICAgdGhpcy5fa2V5cHJlc3MgPSBudWxsO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLmtleVtlLmtleUNvZGVdID0gdHJ1ZTtcclxuICAgICAgc2VsZi5fa2V5ZG93biA9IGUua2V5Q29kZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5rZXlbZS5rZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICBzZWxmLl9rZXl1cCA9IGUua2V5Q29kZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9rZXlwcmVzcyA9IGUua2V5Q29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oOF5aCx5pu05paw5Yem55CGXHJcbiAgICog44Oe44Kk44OV44Os44O844Og5ZG844KT44Gn5LiL44GV44GELlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gVE9ETzog5LiA5ous44OT44OD44OI5ryU566X44Gn6KGM44GG44KI44GG5L+u5q2j44GZ44KLXHJcbiAgICBmb3IgKHZhciBrIGluIHRoaXMua2V5KSB7XHJcbiAgICAgIHRoaXMubGFzdFtrXSAgICA9IHRoaXMucHJlc3Nba107XHJcbiAgICAgIHRoaXMucHJlc3Nba10gICA9IHRoaXMua2V5W2tdO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kb3duW2tdID0gKHRoaXMucHJlc3Nba10gXiB0aGlzLmxhc3Rba10pICYgdGhpcy5wcmVzc1trXTtcclxuICAgICAgdGhpcy51cFtrXSA9ICh0aGlzLnByZXNzW2tdIF4gdGhpcy5sYXN0W2tdKSAmIHRoaXMubGFzdFtrXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fa2V5ZG93bikge1xyXG4gICAgICB0aGlzLmZsYXJlKCdrZXlkb3duJywgeyBrZXlDb2RlOiB0aGlzLl9rZXlkb3duIH0pO1xyXG4gICAgICB0aGlzLl9rZXlkb3duID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9rZXl1cCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdrZXl1cCcsIHsga2V5Q29kZTogdGhpcy5fa2V5dXAgfSk7XHJcbiAgICAgIHRoaXMuX2tleXVwID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9rZXlwcmVzcykge1xyXG4gICAgICB0aGlzLmZsYXJlKCdrZXlwcmVzcycsIHsga2V5Q29kZTogdGhpcy5fa2V5cHJlc3MgfSk7XHJcbiAgICAgIHRoaXMuX2tleXByZXNzID0gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLmirzjgZfjgabjgYTjgovjgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKiBAcGFyYW0gICB7TnVtYmVyL1N0cmluZ30ga2V5IGtleUNvZGUgb3Iga2V5TmFtZVxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAqL1xyXG4gIGdldEtleShrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhdGhpcy5wcmVzc1trZXldID09PSB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLmirzjgZfjgZ/jgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKiBAcGFyYW0gICB7TnVtYmVyL1N0cmluZ30ga2V5IGtleUNvZGUgb3Iga2V5TmFtZVxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAqL1xyXG4gIGdldEtleURvd24oa2V5KSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZG93bltrZXldID09IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkumbouOBl+OBn+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqIEBwYXJhbSAgIHtOdW1iZXIvU3RyaW5nfSBrZXkga2V5Q29kZSBvciBrZXlOYW1lXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICovXHJcbiAgZ2V0S2V5VXAoa2V5KSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudXBba2V5XSA9PSB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjga7mlrnlkJHjgpIgQW5nbGUoRGVncmVlKSDjgaflj5blvpdcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gICDop5LluqYoRGVncmVlKVxyXG4gICAqL1xyXG4gIGdldEtleUFuZ2xlKCkge1xyXG4gICAgdmFyIGFuZ2xlID0gbnVsbDtcclxuICAgIHZhciBhcnJvd0JpdCA9XHJcbiAgICAgICh0aGlzLmdldEtleShcImxlZnRcIikgICA8PCAzKSB8IC8vIDEwMDBcclxuICAgICAgKHRoaXMuZ2V0S2V5KFwidXBcIikgICAgIDw8IDIpIHwgLy8gMDEwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoXCJyaWdodFwiKSAgPDwgMSkgfCAvLyAwMDEwXHJcbiAgICAgICh0aGlzLmdldEtleShcImRvd25cIikpOyAgICAgICAgIC8vIDAwMDFcclxuICAgIFxyXG4gICAgaWYgKGFycm93Qml0ICE9PSAwICYmIEtleWJvYXJkLkFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRS5oYXNPd25Qcm9wZXJ0eShhcnJvd0JpdCkpIHtcclxuICAgICAgYW5nbGUgPSBLZXlib2FyZC5BUlJPV19CSVRfVE9fQU5HTEVfVEFCTEVbYXJyb3dCaXRdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq3jg7zjga7mirzjgZfjgabjgYTjgovlkJHjgY3jgpLlj5blvpdcclxuICAgKiDmraPopo/ljJbjgZXjgozjgabjgYTjgotcclxuICAgKi9cclxuICBnZXRLZXlEaXJlY3Rpb24oKSB7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KFwibGVmdFwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueCA9IC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5nZXRLZXkoXCJyaWdodFwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueCA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRLZXkoXCJ1cFwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueSA9IC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5nZXRLZXkoXCJkb3duXCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uLnggJiYgZGlyZWN0aW9uLnkpIHtcclxuICAgICAgZGlyZWN0aW9uLmRpdihNYXRoLlNRUlQyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjga7nirbmhYvjgpLoqK3lrprjgZnjgotcclxuICAgKi9cclxuICBzZXRLZXkoa2V5LCBmbGFnKSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5rZXlba2V5XSA9IGZsYWc7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kt44O844KS5YWo44Gm6Zui44GX44Gf44GT44Go44Gr44GZ44KLXHJcbiAgICovXHJcbiAgY2xlYXJLZXkoKSB7XHJcbiAgICB0aGlzLmtleSA9IHt9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiBAZW51bSBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEVcclxuICog5pa55ZCR44Gu44Ki44Oz44Kw44OrIGpzZHVja+OBp+OBr+aVsOWtl+OCkuODl+ODreODkeODhuOCo+OBq+aMh+WumuOBp+OBjeOBquOBhO+8n1xyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuS2V5Ym9hcmQuQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFID0ge1xyXG4gIC8qIEBwcm9wZXJ0eSDkuIsgKi9cclxuICAweDAxOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOWPsyAqL1xyXG4gIDB4MDI6ICAgMCxcclxuICAvKiBAcHJvcGVydHkg5LiKICovXHJcbiAgMHgwNDogIDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6YgKi9cclxuICAweDA4OiAxODAsXHJcblxyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIogKi9cclxuICAweDA2OiAgNDUsXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iyAqL1xyXG4gIDB4MDM6IDMxNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiKICovXHJcbiAgMHgwYzogMTM1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIsgKi9cclxuICAweDA5OiAyMjUsXHJcblxyXG4gIC8vIOS4ieaWueWQkeWQjOaZguaKvOOBl+WvvuW/nFxyXG4gIC8vIOaDs+WumuWkluOBruaTjeS9nOOBoOOBjOWvvuW/nOOBl+OBqOOBhOOBn+OBu+OBhuOBjOeEoembo1xyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIrlt6YgKi9cclxuICAweDBlOiAgOTAsXHJcbiAgLyogQHByb3BlcnR5IOS4iuW3puS4iyAqL1xyXG4gIDB4MGQ6IDE4MCxcclxuICAvKiBAcHJvcGVydHkg5bem5LiL5Y+zICovXHJcbiAgMHgwYjogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIvlj7PkuIogKi9cclxuICAweDA3OiAgIDAsXHJcbn07XHJcblxyXG4vKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBlbnVtIEtFWV9DT0RFXHJcbiAqIOOCreODvOeVquWPt1xyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuS2V5Ym9hcmQuS0VZX0NPREUgPSB7XHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJiYWNrc3BhY2VcIiA6IDgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ0YWJcIiAgICAgICA6IDksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlbnRlclwiICAgICA6IDEzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicmV0dXJuXCIgICAgOiAxMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNoaWZ0XCIgICAgIDogMTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjdHJsXCIgICAgICA6IDE3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYWx0XCIgICAgICAgOiAxOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBhdXNlXCIgICAgIDogMTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjYXBzbG9ja1wiICA6IDIwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZXNjYXBlXCIgICAgOiAyNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBhZ2V1cFwiICAgIDogMzMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwYWdlZG93blwiICA6IDM0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZW5kXCIgICAgICAgOiAzNSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImhvbWVcIiAgICAgIDogMzYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJsZWZ0XCIgICAgICA6IDM3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidXBcIiAgICAgICAgOiAzOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInJpZ2h0XCIgICAgIDogMzksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkb3duXCIgICAgICA6IDQwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaW5zZXJ0XCIgICAgOiA0NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRlbGV0ZVwiICAgIDogNDYsXHJcbiAgXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIwXCIgOiA0OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjFcIiA6IDQ5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiMlwiIDogNTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIzXCIgOiA1MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjRcIiA6IDUyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiNVwiIDogNTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI2XCIgOiA1NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjdcIiA6IDU1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiOFwiIDogNTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI5XCIgOiA1NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcclxuICBcImFcIiA6IDY1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiQVwiIDogNjUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJiXCIgOiA2NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkJcIiA6IDY2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY1wiIDogNjcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJDXCIgOiA2NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRcIiA6IDY4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiRFwiIDogNjgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlXCIgOiA2OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkVcIiA6IDY5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZlwiIDogNzAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJGXCIgOiA3MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImdcIiA6IDcxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiR1wiIDogNzEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJoXCIgOiA3MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkhcIiA6IDcyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaVwiIDogNzMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJJXCIgOiA3MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImpcIiA6IDc0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiSlwiIDogNzQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJrXCIgOiA3NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIktcIiA6IDc1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibFwiIDogNzYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJMXCIgOiA3NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm1cIiA6IDc3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiTVwiIDogNzcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJuXCIgOiA3OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIk5cIiA6IDc4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwib1wiIDogNzksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJPXCIgOiA3OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBcIiA6IDgwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiUFwiIDogODAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJxXCIgOiA4MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlFcIiA6IDgxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiclwiIDogODIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJSXCIgOiA4MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNcIiA6IDgzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiU1wiIDogODMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ0XCIgOiA4NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlRcIiA6IDg0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidVwiIDogODUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJVXCIgOiA4NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInZcIiA6IDg2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiVlwiIDogODYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ3XCIgOiA4NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIldcIiA6IDg3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwieFwiIDogODgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJYXCIgOiA4OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInlcIiA6IDg5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiWVwiIDogODksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ6XCIgOiA5MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlpcIiA6IDkwLFxyXG4gIFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkMFwiIDogOTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQxXCIgOiA5NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDJcIiA6IDk4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkM1wiIDogOTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ0XCIgOiAxMDAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ1XCIgOiAxMDEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ2XCIgOiAxMDIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ3XCIgOiAxMDMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ4XCIgOiAxMDQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ5XCIgOiAxMDUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJtdWx0aXBseVwiICAgICAgOiAxMDYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJhZGRcIiAgICAgICAgICAgOiAxMDcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzdWJ0cmFjdFwiICAgICAgOiAxMDksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkZWNpbWFscG9pbnRcIiAgOiAxMTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkaXZpZGVcIiAgICAgICAgOiAxMTEsXHJcblxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjFcIiAgICA6IDExMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYyXCIgICAgOiAxMTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmM1wiICAgIDogMTE0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjRcIiAgICA6IDExNSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY1XCIgICAgOiAxMTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmNlwiICAgIDogMTE3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjdcIiAgICA6IDExOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY4XCIgICAgOiAxMTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmOVwiICAgIDogMTIwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjEwXCIgICA6IDEyMSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYxMVwiICAgOiAxMjIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMTJcIiAgIDogMTIzLFxyXG4gIFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtbG9ja1wiICAgOiAxNDQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzY3JvbGxsb2NrXCI6IDE0NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNlbWljb2xvblwiIDogMTg2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZXF1YWxzaWduXCIgOiAxODcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjb21tYVwiICAgICA6IDE4OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRhc2hcIiAgICAgIDogMTg5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGVyaW9kXCIgICAgOiAxOTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmb3J3YXJkIHNsYXNoXCIgOiAxOTEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIvXCI6IDE5MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImdyYXZlIGFjY2VudFwiICA6IDE5MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm9wZW4gYnJhY2tldFwiICA6IDIxOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImJhY2sgc2xhc2hcIiAgICA6IDIyMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNsb3NlIGJyYWNrZXRcIiAgOiAyMjEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzaW5nbGUgcXVvdGVcIiAgOiAyMjIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzcGFjZVwiICAgICAgICAgOiAzMlxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBNb3VzZUV2ZW50L1RvdWNo5ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRYXHJcbiAqIOODnuOCpuOCueOBrljluqfmqJkuXHJcbiAqL1xyXG52YXIgcG9pbnRYID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogTW91c2VFdmVudC9Ub3VjaOaLoeW8tVxyXG4gKiBAbWV0aG9kICAgIHBvaW50WFxyXG4gKiDjg57jgqbjgrnjga5Y5bqn5qiZLlxyXG4gKi9cclxudmFyIHBvaW50WSA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG91Y2hFdmVudOaLoeW8tVxyXG4gKiBAbWV0aG9kICAgIHBvaW50WFxyXG4gKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbiAqL1xyXG52YXIgdG91Y2hQb2ludFggPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAvLyByZXR1cm4gdGhpcy50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHRtLmdsb2JhbC5zY3JvbGxYO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb3VjaEV2ZW505ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRZXHJcbiAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuICovXHJcbnZhciB0b3VjaFBvaW50WSA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRtLmdsb2JhbC5zY3JvbGxZO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4vLyA7KGZ1bmN0aW9uKCkge1xyXG5cclxuICAvLyBpZiAoIXBoaW5hLmdsb2JhbC5FdmVudCkgcmV0dXJuIDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNsYXNzIGdsb2JhbC5FdmVudFxyXG4gICAqIOaXouWtmOOBrkV2ZW5044Kq44OW44K444Kn44Kv44OI5ouh5by1XHJcbiAgICovXHJcbiAgICBcclxuICAvLyAvKipcclxuICAvLyAgKiBAbWV0aG9kIHN0b3BcclxuICAvLyAgKiDjgqTjg5njg7Pjg4jjga7jg4fjg5Xjgqnjg6vjg4jlh6bnkIYgJiDkvJ3pgZTjgpLmraLjgoHjgotcclxuICAvLyAgKi9cclxuICAvLyBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgLy8g44Kk44OZ44Oz44OI44Kt44Oj44Oz44K744OrXHJcbiAgLy8gICB0aGlzLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAvLyDjgqTjg5njg7Pjg4jkvJ3pgZTjgpLmraLjgoHjgotcclxuICAvLyAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgLy8gfTtcclxuXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gICBpZiAoIXBoaW5hLmdsb2JhbC5Nb3VzZUV2ZW50KSByZXR1cm4gO1xyXG5cclxuLy8gICAvKipcclxuLy8gICAgKiBAY2xhc3MgZ2xvYmFsLk1vdXNlRXZlbnRcclxuLy8gICAgKiBNb3VzZUV2ZW50IOOCr+ODqeOCuVxyXG4vLyAgICAqL1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRYXHJcbi8vICAgICog44Oe44Km44K544GuWOW6p+aomS5cclxuLy8gICAgKi9cclxuLy8gICBNb3VzZUV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFhcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgIC8vIHJldHVybiB0aGlzLnBhZ2VYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHdpbmRvdy5zY3JvbGxYO1xyXG4vLyAgIH0pO1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRZXHJcbi8vICAgICog44Oe44Km44K544GuWeW6p+aomS5cclxuLy8gICAgKi9cclxuLy8gICBNb3VzZUV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFlcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4vLyAgICAgLy8gcmV0dXJuIHRoaXMucGFnZVkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB3aW5kb3cuc2Nyb2xsWTtcclxuLy8gICB9KTtcclxuICAgIFxyXG4vLyB9KSgpO1xyXG5cclxuXHJcbi8vIChmdW5jdGlvbigpIHtcclxuICAgIFxyXG4vLyAgIGlmICghcGhpbmEuZ2xvYmFsLlRvdWNoRXZlbnQpIHJldHVybiA7XHJcbiAgXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQGNsYXNzIGdsb2JhbC5Ub3VjaEV2ZW50XHJcbi8vICAgICogVG91Y2hFdmVudCDjgq/jg6njgrlcclxuLy8gICAgKi9cclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WFxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaEV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFhcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdG0uZ2xvYmFsLnNjcm9sbFg7XHJcbi8vICAgfSk7XHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFlcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2hFdmVudC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRZXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICByZXR1cm4gdGhpcy50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbi8vICAgICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0bS5nbG9iYWwuc2Nyb2xsWTtcclxuLy8gICB9KTsgIFxyXG4gICAgXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbi8vICAgaWYgKCFwaGluYS5nbG9iYWwuVG91Y2gpIHJldHVybiA7XHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQGNsYXNzIGdsb2JhbC5Ub3VjaFxyXG4vLyAgICAqIFRvdWNoRXZlbnQg44Kv44Op44K5XHJcbi8vICAgICovXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFhcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2gucHJvdG90eXBlLmdldHRlcihcInBvaW50WFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRZXHJcbi8vICAgICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4vLyAgICAqL1xyXG4vLyAgIFRvdWNoLnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFlcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbi8vICAgfSk7XHJcbiAgICBcclxuLy8gfSkoKTtcclxuXHJcbnZhciBCVVRUT05fTUFQO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5Nb3VzZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5pbnB1dC5JbnB1dFxyXG4gKi9cclxuY2xhc3MgTW91c2UgZXh0ZW5kcyBJbnB1dCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuaWQgPSAwO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX3N0YXJ0KHBvaW50WC5nZXQuY2FsbChlKSwgcG9pbnRZLmdldC5jYWxsKGUpLCAxPDxlLmJ1dHRvbik7XHJcbiAgICAgIC8vIHNlbGYuX3N0YXJ0KGUucG9pbnRYLCBlLnBvaW50WSwgMTw8ZS5idXR0b24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX2VuZCgxPDxlLmJ1dHRvbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX21vdmUocG9pbnRYLmdldC5jYWxsKGUpLCBwb2ludFkuZ2V0LmNhbGwoZSkpO1xyXG4gICAgICAvLyBzZWxmLl9tb3ZlKGUucG9pbnRYLCBlLnBvaW50WSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg57jgqbjgrnjgYzjgq3jg6Pjg7Pjg5DjgrnopoHntKDjga7lpJbjgavlh7rjgZ/loLTlkIjjga7lr77lv5xcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpICB7XHJcbiAgICAgIHNlbGYuX2VuZCgxKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgYnV0dG9uID0gQlVUVE9OX01BUFtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKHRoaXMubm93ICYgYnV0dG9uKSAhPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44OA44Km44Oz5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0QnV0dG9uRG93bihidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgYnV0dG9uID0gQlVUVE9OX01BUFtidXR0b25dO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodGhpcy5zdGFydCAmIGJ1dHRvbikgIT0gMDtcclxuICB9XHJcbiAgICAgIFxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OCouODg+ODl+WPluW+l1xyXG4gICAqL1xyXG4gIGdldEJ1dHRvblVwKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgYnV0dG9uID0gQlVUVE9OX01BUFtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKHRoaXMuZW5kICYgYnV0dG9uKSAhPSAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKiBAc3RhdGljIEBwcm9wZXJ0eSAqL1xyXG5Nb3VzZS5CVVRUT05fTEVGVCA9IDB4MTtcclxuLyoqIEBzdGF0aWMgQHByb3BlcnR5ICovXHJcbk1vdXNlLkJVVFRPTl9NSURETEUgPSAweDI7XHJcbi8qKiBAc3RhdGljIEBwcm9wZXJ0eSAqL1xyXG5Nb3VzZS5CVVRUT05fUklHSFQgPSAweDQ7XHJcblxyXG5CVVRUT05fTUFQID0ge1xyXG4gIFwibGVmdFwiICA6IE1vdXNlLkJVVFRPTl9MRUZULFxyXG4gIFwibWlkZGxlXCI6IE1vdXNlLkJVVFRPTl9NSURETEUsXHJcbiAgXCJyaWdodFwiIDogTW91c2UuQlVUVE9OX1JJR0hUXHJcbn07XHJcblxyXG5Nb3VzZS5wcm90b3R5cGUuZ2V0UG9pbnRpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZ2V0QnV0dG9uKFwibGVmdFwiKTsgfTtcclxuTW91c2UucHJvdG90eXBlLmdldFBvaW50aW5nU3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZ2V0QnV0dG9uRG93bihcImxlZnRcIik7IH07XHJcbk1vdXNlLnByb3RvdHlwZS5nZXRQb2ludGluZ0VuZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRCdXR0b25VcChcImxlZnRcIik7IH07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LlRvdWNoXHJcbiAqIEBleHRlbmRzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqL1xyXG5jbGFzcyBUb3VjaCBleHRlbmRzIElucHV0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgaXNNdWx0aSkge1xyXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5pZCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlzTXVsdGkgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fc3RhcnQodG91Y2hQb2ludFguZ2V0LmNhbGwoZSksIHRvdWNoUG9pbnRZLmdldC5jYWxsKGUpLCB0cnVlKTtcclxuICAgICAgLy8gc2VsZi5fc3RhcnQoZS5wb2ludFgsIGUucG9pbnRZLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fZW5kKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX21vdmUodG91Y2hQb2ludFguZ2V0LmNhbGwoZSksIHRvdWNoUG9pbnRZLmdldC5jYWxsKGUpKTtcclxuICAgICAgLy8gc2VsZi5fbW92ZShlLnBvaW50WCwgZS5wb2ludFkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgr/jg4Pjg4HjgZfjgabjgYTjgovjgYvjgpLliKTlrppcclxuICAgKi9cclxuICBnZXRUb3VjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vdyAhPSAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgr/jg4Pjg4Hplovlp4vmmYLjgasgdHJ1ZVxyXG4gICAqL1xyXG4gIGdldFRvdWNoU3RhcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydCAhPSAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgr/jg4Pjg4HntYLkuobmmYLjgasgdHJ1ZVxyXG4gICAqL1xyXG4gIGdldFRvdWNoRW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5kICE9IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2RcclxuICog44Od44Kk44Oz44OG44Kj44Oz44Kw54q25oWL5Y+W5b6XKG1vdXNlIOOBqOOBruW3rueVsOWvvuetlilcclxuICovXHJcblRvdWNoLnByb3RvdHlwZS5nZXRQb2ludGluZyAgICAgICAgPSBUb3VjaC5wcm90b3R5cGUuZ2V0VG91Y2g7XHJcbi8qKlxyXG4gKiBAbWV0aG9kXHJcbiAqIOODneOCpOODs+ODhuOCo+ODs+OCsOOCkumWi+Wni+OBl+OBn+OBi+OCkuWPluW+lyhtb3VzZSDjgajjga7lt67nlbDlr77nrZYpXHJcbiAqL1xyXG5Ub3VjaC5wcm90b3R5cGUuZ2V0UG9pbnRpbmdTdGFydCAgID0gVG91Y2gucHJvdG90eXBlLmdldFRvdWNoU3RhcnQ7XHJcbi8qKlxyXG4gKiBAbWV0aG9kXHJcbiAqIOODneOCpOODs+ODhuOCo+ODs+OCsOOCkue1guS6huOBl+OBn+OBi+OCkuWPluW+lyhtb3VzZSDjgajjga7lt67nlbDlr77nrZYpXHJcbiAqL1xyXG5Ub3VjaC5wcm90b3R5cGUuZ2V0UG9pbnRpbmdFbmQgICAgID0gVG91Y2gucHJvdG90eXBlLmdldFRvdWNoRW5kO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuVG91Y2hMaXN0XHJcbiAqL1xyXG5jbGFzcyBUb3VjaExpc3Qge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHRoaXMudG91Y2hlcyA9IFtdO1xyXG4gICAgdmFyIHRvdWNoTWFwID0gdGhpcy50b3VjaE1hcCA9IHt9O1xyXG5cclxuICAgIC8vIDMyYml0IOWRqOacn+OBp0lE44KS44Or44O844OX44GV44Gb44KLXHJcbiAgICB0aGlzLl9pZCA9IG5ldyBVaW50MzJBcnJheSgxKTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGVhY2guY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gc2VsZi5nZXRFbXB0eSgpO1xyXG4gICAgICAgIHRvdWNoTWFwW3QuaWRlbnRpZmllcl0gPSB0b3VjaDtcclxuICAgICAgICB0b3VjaC5fc3RhcnQocG9pbnRYLmdldC5jYWxsKHQpLCBwb2ludFkuZ2V0LmNhbGwodCkpO1xyXG4gICAgICAgIC8vIHRvdWNoLl9zdGFydCh0LnBvaW50WCwgdC5wb2ludFkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgaWQgPSB0LmlkZW50aWZpZXI7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hNYXBbaWRdO1xyXG4gICAgICAgIHRvdWNoLl9lbmQoKTtcclxuICAgICAgICBkZWxldGUgdG91Y2hNYXBbaWRdO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaE1hcFt0LmlkZW50aWZpZXJdO1xyXG4gICAgICAgIHRvdWNoLl9tb3ZlKHBvaW50WC5nZXQuY2FsbCh0KSwgcG9pbnRZLmdldC5jYWxsKHQpKTtcclxuICAgICAgICAvLyB0b3VjaC5fbW92ZSh0LnBvaW50WCwgdC5wb2ludFkpO1xyXG4gICAgICB9KTtcclxuICAgICAgZS5zdG9wKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpUGhvbmUg44Gn44GvIDbmnKzmjIfku6XkuIrjgr/jg4Pjg4HjgZnjgovjgajlvLfliLbnmoTjgavjgZnjgbnjgabjga7jgr/jg4Pjg4HjgYzop6PpmaTjgZXjgozjgotcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCfjgZPjga7nq6/mnKvjgafjga7lkIzmmYLjgr/jg4Pjg4HmlbDjga7liLbpmZDjgpLotoXjgYjjgb7jgZfjgZ/jgIInKTtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgaWQgPSB0LmlkZW50aWZpZXI7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hNYXBbaWRdO1xyXG4gICAgICAgIHRvdWNoLl9lbmQoKTtcclxuICAgICAgICBkZWxldGUgdG91Y2hNYXBbaWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgZS5zdG9wKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVtcHR5KCkge1xyXG4gICAgdmFyIHRvdWNoID0gbmV3IFRvdWNoKHRoaXMuZG9tRWxlbWVudCwgdHJ1ZSk7XHJcbiAgXHJcbiAgICB0b3VjaC5pZCA9IHRoaXMuaWQ7XHJcbiAgICB0aGlzLnRvdWNoZXMucHVzaCh0b3VjaCk7XHJcblxyXG4gICAgcmV0dXJuIHRvdWNoO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG91Y2goaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdWNoTWFwW2lkXTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvdWNoKHRvdWNoKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMudG91Y2hlcy5pbmRleE9mKHRvdWNoKTtcclxuICAgIHRoaXMudG91Y2hlcy5zcGxpY2UoaSwgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbih0b3VjaCkge1xyXG4gICAgICBpZiAoIXRvdWNoLnJlbGVhc2VkKSB7XHJcbiAgICAgICAgdG91Y2gudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGlmICh0b3VjaC5mbGFncyA9PT0gMCkge1xyXG4gICAgICAgICAgdG91Y2gucmVsZWFzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0b3VjaC5yZWxlYXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVG91Y2godG91Y2gpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZFswXSsrOyB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LkdhbWVwYWRNYW5hZ2VyXHJcbiAqIOOCsuODvOODoOODkeODg+ODieODnuODjeODvOOCuOODo+ODvC5cclxuICog44Ky44O844Og44OR44OD44OJ5o6l57aa54q25rOB44Gu55uj6KaW44CB5YCL44CF44Gu44Ky44O844Og44OR44OD44OJ44Gu5YWl5Yqb54q25oWL44Gu5pu05paw44KS6KGM44GGLlxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgR2FtZXBhZE1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiDkvZzmiJDmuIjjgb9waGluYS5pbnB1dC5HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44Gu44Oq44K544OIXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JqZWN0LjxudW1iZXIsIHBoaW5hLmlucHV0LkdhbWVwYWQ+fVxyXG4gICAqL1xyXG4gIC8vIGdhbWVwYWRzOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiDkvZzmiJDmuIjjgb/jgrLjg7zjg6Djg5Hjg4Pjg4njga5pbmRleOOBruODquOCueODiFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcltdfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgLy8gX2NyZWF0ZWQ6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeODg+ODl+WJjUdhbWVwYWTjga7jg6rjgrnjg4hcclxuICAgKiBAdHlwZSB7cGhpbmEuaW5wdXQuR2FtZXBhZFtdfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgLy8gX3Jhd2dhbWVwYWRzOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5nYW1lcGFkcyA9IHt9O1xyXG4gICAgdGhpcy5fY3JlYXRlZCA9IFtdO1xyXG4gICAgdGhpcy5fcmF3Z2FtZXBhZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLl9wcmV2VGltZXN0YW1wcyA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2dldEdhbWVwYWRzID0gbnVsbDtcclxuICAgIHZhciBuYXZpZ2F0b3IgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5nZXRHYW1lcGFkcykge1xyXG4gICAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcy5iaW5kKG5hdmlnYXRvcik7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3Iud2Via2l0R2V0R2FtZXBhZHMpIHtcclxuICAgICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBuYXZpZ2F0b3Iud2Via2l0R2V0R2FtZXBhZHMuYmluZChuYXZpZ2F0b3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRjb25uZWN0ZWQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBnYW1lcGFkID0gdGhpcy5nZXQoZS5nYW1lcGFkLmluZGV4KTtcclxuICAgICAgZ2FtZXBhZC5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmZsYXJlKCdjb25uZWN0ZWQnLCB7XHJcbiAgICAgICAgZ2FtZXBhZDogZ2FtZXBhZCxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRkaXNjb25uZWN0ZWQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBnYW1lcGFkID0gdGhpcy5nZXQoZS5nYW1lcGFkLmluZGV4KTtcclxuICAgICAgZ2FtZXBhZC5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5mbGFyZSgnZGlzY29ubmVjdGVkJywge1xyXG4gICAgICAgIGdhbWVwYWQ6IGdhbWVwYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaDheWgseabtOaWsOWHpueQhlxyXG4gICAqIOODnuOCpOODleODrOODvOODoOWRvOOCk+OBp+S4i+OBleOBhC5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLl9wb2xsKCk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IHRoaXMuX2NyZWF0ZWQubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5fY3JlYXRlZFtpXTtcclxuICAgICAgdmFyIHJhd2dhbWVwYWQgPSB0aGlzLl9yYXdnYW1lcGFkc1tpbmRleF07XHJcblxyXG4gICAgICBpZiAoIXJhd2dhbWVwYWQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJhd2dhbWVwYWQudGltZXN0YW1wICYmIChyYXdnYW1lcGFkLnRpbWVzdGFtcCA9PT0gdGhpcy5fcHJldlRpbWVzdGFtcHNbaV0pKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkc1tpbmRleF0uX3VwZGF0ZVN0YXRlRW1wdHkoKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fcHJldlRpbWVzdGFtcHNbaV0gPSByYXdnYW1lcGFkLnRpbWVzdGFtcDtcclxuICAgICAgdGhpcy5nYW1lcGFkc1tpbmRleF0uX3VwZGF0ZVN0YXRlKHJhd2dhbWVwYWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GV44KM44GfaW5kZXjjga5HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZLlxyXG4gICAqXHJcbiAgICog5pyq5L2c5oiQ44Gu5aC05ZCI44Gv5L2c5oiQ44GX44Gm6L+U44GZLlxyXG4gICAqL1xyXG4gIGdldChpbmRleCkge1xyXG4gICAgaW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuICAgIGlmICghdGhpcy5nYW1lcGFkc1tpbmRleF0pIHtcclxuICAgICAgdGhpcy5fY3JlYXRlZC5wdXNoKGluZGV4KTtcclxuICAgICAgdGhpcy5nYW1lcGFkc1tpbmRleF0gPSBuZXcgR2FtZXBhZChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZXBhZHNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GV44KM44GfaW5kZXjjga5HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44KS56C05qOE44GZ44KLLlxyXG4gICAqIOegtOajhOOBleOCjOOBn0dhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjga/ku6XpmY3mm7TmlrDjgZXjgozjgarjgYQuXHJcbiAgICovXHJcbiAgZGlzcG9zZShpbmRleCkge1xyXG4gICAgaWYgKGNvbnRhaW5zLmNhbGwodGhpcy5fY3JlYXRlZCwgaW5kZXgpKSB7XHJcbiAgICAvLyBpZiAodGhpcy5fY3JlYXRlZC5jb250YWlucyhpbmRleCkpIHtcclxuICAgICAgdmFyIGdhbWVwYWQgPSB0aGlzLmdldChpbmRleCk7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmdhbWVwYWRbZ2FtZXBhZF07XHJcbiAgICAgIGVyYXNlLmNhbGwodGhpcy5fY3JlYXRlZCwgaW5kZXgpO1xyXG4gICAgICAvLyB0aGlzLl9jcmVhdGVkLmVyYXNlKGluZGV4KTtcclxuXHJcbiAgICAgIGdhbWVwYWQuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZXjgozjgZ9pbmRleOOBruOCsuODvOODoOODkeODg+ODieOBjOaOpee2muS4reOBi+OBqeOBhuOBi+OCkui/lOOBmS5cclxuICAgKlxyXG4gICAqIEdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjgYzmnKrkvZzmiJDjga7loLTlkIjjgafjgoLli5XkvZzjgZnjgosuXHJcbiAgICovXHJcbiAgaXNDb25uZWN0ZWQoaW5kZXgpIHtcclxuICAgIGluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcmF3Z2FtZXBhZHNbaW5kZXhdICYmIHRoaXMuX3Jhd2dhbWVwYWRzW2luZGV4XS5jb25uZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9wb2xsKCkge1xyXG4gICAgdmFyIHJhd0dhbWVwYWRzID0gdGhpcy5fZ2V0R2FtZXBhZHMoKTtcclxuICAgIGlmIChyYXdHYW1lcGFkcykge1xyXG4gICAgICBjbGVhci5jYWxsKHRoaXMuX3Jhd2dhbWVwYWRzKTtcclxuICAgICAgLy8gdGhpcy5fcmF3Z2FtZXBhZHMuY2xlYXIoKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSByYXdHYW1lcGFkcy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIGlmIChyYXdHYW1lcGFkc1tpXSkge1xyXG4gICAgICAgICAgdGhpcy5fcmF3Z2FtZXBhZHMucHVzaChyYXdHYW1lcGFkc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBfc3RhdGljOiB7XHJcbiAgLy8gICAvKiog44OW44Op44Km44K244GMR2FtZXBhZCBBUEnjgavlr77lv5zjgZfjgabjgYTjgovjgYsuICovXHJcbiAgLy8gICBpc0F2YWlsYWJsZTogKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICB2YXIgbmF2ID0gcGhpbmEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICAvLyAgICAgaWYgKCFuYXYpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgLy8gICAgIHJldHVybiAoISFuYXYuZ2V0R2FtZXBhZHMpIHx8ICghIW5hdi53ZWJraXRHZXRHYW1lcGFkcyk7XHJcbiAgLy8gICB9KSgpLFxyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG4vKiog44OW44Op44Km44K244GMR2FtZXBhZCBBUEnjgavlr77lv5zjgZfjgabjgYTjgovjgYsuICovXHJcbkdhbWVwYWRNYW5hZ2VyLmlzQXZhaWxhYmxlID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBuYXYgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgaWYgKCFuYXYpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuICghIW5hdi5nZXRHYW1lcGFkcykgfHwgKCEhbmF2LndlYmtpdEdldEdhbWVwYWRzKTtcclxufSkoKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LkdhbWVwYWRcclxuICog44Ky44O844Og44OR44OD44OJXHJcbiAqXHJcbiAqIOebtOaOpeOCpOODs+OCueOCv+ODs+OCueWMluOBm+OBmuOAgXBoaW5hLmlucHV0LkdhbWVwYWRNYW5hZ2Vy44Kq44OW44K444Kn44Kv44OI44GL44KJ5Y+W5b6X44GX44Gm5L2/55So44GZ44KLLlxyXG4gKi9cclxuY2xhc3MgR2FtZXBhZCB7XHJcbi8vIHBoaW5hLmRlZmluZShcInBoaW5hLmlucHV0LkdhbWVwYWRcIiwge1xyXG5cclxuICAvLyBpbmRleDogbnVsbCxcclxuICAvLyBidXR0b25zOiBudWxsLFxyXG4gIC8vIC8qKiBAdHlwZSB7QXJyYXkuPHBoaW5hLmdlb20uVmVjdG9yMj59ICovXHJcbiAgLy8gc3RpY2tzOiBudWxsLFxyXG5cclxuICAvLyBpZDogbnVsbCxcclxuICAvLyBjb25uZWN0ZWQ6IGZhbHNlLFxyXG4gIC8vIG1hcHBpbmc6IG51bGwsXHJcbiAgLy8gdGltZXN0YW1wOiBudWxsLFxyXG5cclxuICBjb25zdHJ1Y3RvcihpbmRleCkge1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG4gICAgLy8gdGhpcy5idXR0b25zID0gQXJyYXkucmFuZ2UoMCwgMTYpLm1hcChmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IHJhbmdlLmNhbGwoW10sIDAsIDE2KS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgICAgICAgbGFzdDogZmFsc2UsXHJcbiAgICAgICAgZG93bjogZmFsc2UsXHJcbiAgICAgICAgdXA6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0aWNrcyA9IHJhbmdlLmNhbGwoW10sIDAsIDIpLm1hcChmdW5jdGlvbigpIHtcclxuICAgIC8vIHRoaXMuc3RpY2tzID0gQXJyYXkucmFuZ2UoMCwgMikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWFwcGluZyA9IG51bGw7XHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgYzmirzjgZXjgozjgabjgYTjgovjgYsuXHJcbiAgICovXHJcbiAgZ2V0S2V5KGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBHYW1lcGFkLkJVVFRPTl9DT0RFW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbl0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dLnByZXNzZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgpLmirzjgZfjgZ8uXHJcbiAgICovXHJcbiAgZ2V0S2V5RG93bihidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgYnV0dG9uID0gR2FtZXBhZC5CVVRUT05fQ09ERVtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnV0dG9uc1tidXR0b25dKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbYnV0dG9uXS5kb3duO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44KS6Zui44GX44GfLlxyXG4gICAqL1xyXG4gIGdldEtleVVwKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBHYW1lcGFkLkJVVFRPTl9DT0RFW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbl0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dLnVwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y2B5a2X44Kt44O844Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCRLlxyXG4gICAqL1xyXG4gIGdldEtleUFuZ2xlKCkge1xyXG4gICAgdmFyIGFuZ2xlID0gbnVsbDtcclxuICAgIHZhciBhcnJvd0JpdCA9XHJcbiAgICAgICh0aGlzLmdldEtleSgnbGVmdCcpIDw8IDMpIHwgLy8gMTAwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoJ3VwJykgPDwgMikgfCAvLyAwMTAwXHJcbiAgICAgICh0aGlzLmdldEtleSgncmlnaHQnKSA8PCAxKSB8IC8vIDAwMTBcclxuICAgICAgKHRoaXMuZ2V0S2V5KCdkb3duJykpOyAvLyAwMDAxXHJcblxyXG4gICAgaWYgKGFycm93Qml0ICE9PSAwICYmIEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRS5oYXNPd25Qcm9wZXJ0eShhcnJvd0JpdCkpIHtcclxuICAgICAgYW5nbGUgPSBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEVbYXJyb3dCaXRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhbmdsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWNgeWtl+OCreODvOOBruWFpeWKm+OBleOCjOOBpuOBhOOCi+aWueWQkeOCkuODmeOCr+ODiOODq+OBpy5cclxuICAgKiDmraPopo/ljJbjgZXjgozjgabjgYTjgosuXHJcbiAgICovXHJcbiAgZ2V0S2V5RGlyZWN0aW9uKCkge1xyXG4gICAgdmFyIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmdldEtleSgnbGVmdCcpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0S2V5KCdyaWdodCcpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldEtleSgndXAnKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueSA9IC0xO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEtleSgnZG93bicpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uLnggJiYgZGlyZWN0aW9uLnkpIHtcclxuICAgICAgZGlyZWN0aW9uLmRpdihNYXRoLlNRUlQyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K544OG44Kj44OD44Kv44Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCRLlxyXG4gICAqL1xyXG4gIGdldFN0aWNrQW5nbGUoc3RpY2tJZCkge1xyXG4gICAgc3RpY2tJZCA9IHN0aWNrSWQgfHwgMDtcclxuICAgIHZhciBzdGljayA9IHRoaXMuc3RpY2tzW3N0aWNrSWRdO1xyXG4gICAgcmV0dXJuIHN0aWNrID8gTWF0aC5hdGFuMigtc3RpY2sueSwgc3RpY2sueCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K544OG44Kj44OD44Kv44Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCR44KS44OZ44Kv44OI44Or44GnLlxyXG4gICAqL1xyXG4gIGdldFN0aWNrRGlyZWN0aW9uKHN0aWNrSWQpIHtcclxuICAgIHN0aWNrSWQgPSBzdGlja0lkIHx8IDA7XHJcbiAgICByZXR1cm4gdGhpcy5zdGlja3MgPyB0aGlzLnN0aWNrc1tzdGlja0lkXS5jbG9uZSgpIDogbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGF0ZShnYW1lcGFkKSB7XHJcbiAgICB0aGlzLmlkID0gZ2FtZXBhZC5pZDtcclxuICAgIHRoaXMuY29ubmVjdGVkID0gZ2FtZXBhZC5jb25uZWN0ZWQ7XHJcbiAgICB0aGlzLm1hcHBpbmcgPSBnYW1lcGFkLm1hcHBpbmc7XHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9IGdhbWVwYWQudGltZXN0YW1wO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBpZW5kID0gZ2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSA8IGllbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b24oZ2FtZXBhZC5idXR0b25zW2ldLCBpKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBqID0gMCwgamVuZCA9IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGogPCBqZW5kOyBqICs9IDIpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlU3RpY2soZ2FtZXBhZC5heGVzW2ogKyAwXSwgaiAvIDIsICd4Jyk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVN0aWNrKGdhbWVwYWQuYXhlc1tqICsgMV0sIGogLyAyLCAneScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlU3RhdGVFbXB0eSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpZW5kID0gdGhpcy5idXR0b25zLmxlbmd0aDsgaSA8IGllbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbaV0uZG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbaV0udXAgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZUJ1dHRvbih2YWx1ZSwgYnV0dG9uSWQpIHtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uSWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5idXR0b25zW2J1dHRvbklkXSA9IHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcclxuICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICBkb3duOiBmYWxzZSxcclxuICAgICAgICB1cDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBidXR0b24gPSB0aGlzLmJ1dHRvbnNbYnV0dG9uSWRdO1xyXG5cclxuICAgIGJ1dHRvbi5sYXN0ID0gYnV0dG9uLnByZXNzZWQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgYnV0dG9uLnZhbHVlID0gdmFsdWUudmFsdWU7XHJcbiAgICAgIGJ1dHRvbi5wcmVzc2VkID0gdmFsdWUucHJlc3NlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICBidXR0b24ucHJlc3NlZCA9IHZhbHVlID4gR2FtZXBhZC5BTkFMT0dVRV9CVVRUT05fVEhSRVNIT0xEO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5kb3duID0gKGJ1dHRvbi5wcmVzc2VkIF4gYnV0dG9uLmxhc3QpICYgYnV0dG9uLnByZXNzZWQ7XHJcbiAgICBidXR0b24udXAgPSAoYnV0dG9uLnByZXNzZWQgXiBidXR0b24ubGFzdCkgJiBidXR0b24ubGFzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVN0aWNrKHZhbHVlLCBzdGlja0lkLCBheGlzTmFtZSkge1xyXG4gICAgaWYgKHRoaXMuc3RpY2tzW3N0aWNrSWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zdGlja3Nbc3RpY2tJZF0gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RpY2tzW3N0aWNrSWRdW2F4aXNOYW1lXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKiDjg5bjg6njgqbjgrbjgYxHYW1lcGFkIEFQSeOBq+WvvuW/nOOBl+OBpuOBhOOCi+OBiy4gKi9cclxuR2FtZXBhZC5pc0F2YWlsYWJsZSA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgbmF2ID0gcGhpbmEkMS5nbG9iYWwubmF2aWdhdG9yO1xyXG4gIGlmICghbmF2KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiAoISFuYXYuZ2V0R2FtZXBhZHMpIHx8ICghIW5hdi53ZWJraXRHZXRHYW1lcGFkcyk7XHJcbn0pKCk7XHJcblxyXG4vKiog44Ki44OK44Ot44Kw5YWl5Yqb5a++5b+c44Gu44Oc44K/44Oz44Gu5aC05ZCI44CB44Gp44Gu56iL5bqm44G+44Gn5oq844GX6L6844KA44Gob27jgavjgarjgovjgYvjgpLooajjgZnjgZfjgY3jgYTlgKQuICovXHJcbkdhbWVwYWQuQU5BTE9HVUVfQlVUVE9OX1RIUkVTSE9MRCA9IDAuNTtcclxuXHJcbi8qKiDjg5zjgr/jg7PlkI3jgajjg5zjgr/jg7NJROOBruODnuODg+ODly4gKi9cclxuR2FtZXBhZC5CVVRUT05fQ09ERSA9IHtcclxuICAnYSc6IDAsXHJcbiAgJ2InOiAxLFxyXG4gICd4JzogMixcclxuICAneSc6IDMsXHJcblxyXG4gICdsMSc6IDQsXHJcbiAgJ3IxJzogNSxcclxuICAnbDInOiA2LFxyXG4gICdyMic6IDcsXHJcblxyXG4gICdzZWxlY3QnOiA4LFxyXG4gICdzdGFydCc6IDksXHJcblxyXG4gICdsMyc6IDEwLFxyXG4gICdyMyc6IDExLFxyXG5cclxuICAndXAnOiAxMixcclxuICAnZG93bic6IDEzLFxyXG4gICdsZWZ0JzogMTQsXHJcbiAgJ3JpZ2h0JzogMTUsXHJcblxyXG4gICdzcGVjaWFsJzogMTYsXHJcblxyXG4gICdBJzogMCxcclxuICAnQic6IDEsXHJcbiAgJ1gnOiAyLFxyXG4gICdZJzogMyxcclxuXHJcbiAgJ0wxJzogNCxcclxuICAnUjEnOiA1LFxyXG4gICdMMic6IDYsXHJcbiAgJ1IyJzogNyxcclxuXHJcbiAgJ1NFTEVDVCc6IDgsXHJcbiAgJ1NUQVJUJzogOSxcclxuXHJcbiAgJ0wzJzogMTAsXHJcbiAgJ1IzJzogMTEsXHJcblxyXG4gICdVUCc6IDEyLFxyXG4gICdET1dOJzogMTMsXHJcbiAgJ0xFRlQnOiAxNCxcclxuICAnUklHSFQnOiAxNSxcclxuXHJcbiAgJ1NQRUNJQUwnOiAxNixcclxufTtcclxuXHJcbnZhciBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEUgPSB7XHJcbiAgMHgwMDogbnVsbCxcclxuXHJcbiAgLyogQHByb3BlcnR5IOS4iyAqL1xyXG4gIDB4MDE6IDI3MCxcclxuICAvKiBAcHJvcGVydHkg5Y+zICovXHJcbiAgMHgwMjogMCxcclxuICAvKiBAcHJvcGVydHkg5LiKICovXHJcbiAgMHgwNDogOTAsXHJcbiAgLyogQHByb3BlcnR5IOW3piAqL1xyXG4gIDB4MDg6IDE4MCxcclxuXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iiAqL1xyXG4gIDB4MDY6IDQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIsgKi9cclxuICAweDAzOiAzMTUsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4iiAqL1xyXG4gIDB4MGM6IDEzNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiLICovXHJcbiAgMHgwOTogMjI1LFxyXG5cclxuICAvLyDkuInmlrnlkJHlkIzmmYLmirzjgZflr77lv5xcclxuICAvLyDmg7PlrprlpJbjga7mk43kvZzjgaDjgYzlr77lv5zjgZfjgajjgYTjgZ/jgbvjgYbjgYznhKHpm6NcclxuICAvKiBAcHJvcGVydHkg5Y+z5LiK5bemICovXHJcbiAgMHgwZTogOTAsXHJcbiAgLyogQHByb3BlcnR5IOS4iuW3puS4iyAqL1xyXG4gIDB4MGQ6IDE4MCxcclxuICAvKiBAcHJvcGVydHkg5bem5LiL5Y+zICovXHJcbiAgMHgwYjogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIvlj7PkuIogKi9cclxuICAweDA3OiAwLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5BY2NlbGVyb21ldGVyXHJcbiAqIOOCueODnuODvOODiOODleOCqeODs+OBruOCu+ODs+OCteODvOaDheWgsVxyXG4gKi9cclxuY2xhc3MgQWNjZWxlcm9tZXRlciB7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgIGdyYXZpdHkg6YeN5Yqb44K744Oz44K144O8ICovXHJcbiAgLyoqIEBwcm9wZXJ0eSAgYWNjZWxlcmF0aW9uIOWKoOmAn+W6puOCu+ODs+OCteODvCAqL1xyXG4gIC8qKiBAcHJvcGVydHkgIHJvdGF0aW9uIOWbnui7ouWKoOmAn+W6puOCu+ODs+OCteODvCAqL1xyXG4gIC8qKiBAcHJvcGVydHkgIG9yaWVudGF0aW9uIOOCueODnuODvOODiOODleOCqeODs+OBruWCvuOBjSAqL1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBcclxuICAgIHRoaXMuZ3Jhdml0eSAgICAgICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHRoaXMuYWNjZWxlcmF0aW9uICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHRoaXMucm90YXRpb24gICAgICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHRoaXMub3JpZW50YXRpb24gICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICBpZiAocGhpbmEkMS5pc01vYmlsZSgpKSB7XHJcbiAgICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2Vtb3Rpb25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBhY2NlbGVyYXRpb24gPSBzZWxmLmFjY2VsZXJhdGlvbjtcclxuICAgICAgICB2YXIgZ3Jhdml0eSA9IHNlbGYuZ3Jhdml0eTtcclxuICAgICAgICB2YXIgcm90YXRpb24gPSBzZWxmLnJvdGF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLmFjY2VsZXJhdGlvbikge1xyXG4gICAgICAgICAgYWNjZWxlcmF0aW9uLnggPSBlLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgYWNjZWxlcmF0aW9uLnkgPSBlLmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgYWNjZWxlcmF0aW9uLnogPSBlLmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5KSB7XHJcbiAgICAgICAgICBncmF2aXR5LnggPSBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueDtcclxuICAgICAgICAgIGdyYXZpdHkueSA9IGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55O1xyXG4gICAgICAgICAgZ3Jhdml0eS56ID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5Lno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnJvdGF0aW9uUmF0ZSkge1xyXG4gICAgICAgICAgcm90YXRpb24ueCA9IHJvdGF0aW9uLmJldGEgID0gZS5yb3RhdGlvblJhdGUuYmV0YTtcclxuICAgICAgICAgIHJvdGF0aW9uLnkgPSByb3RhdGlvbi5nYW1tYSA9IGUucm90YXRpb25SYXRlLmdhbW1hO1xyXG4gICAgICAgICAgcm90YXRpb24ueiA9IHJvdGF0aW9uLmFscGhhID0gZS5yb3RhdGlvblJhdGUuYWxwaGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gc2VsZi5vcmllbnRhdGlvbjtcclxuICAgICAgICBvcmllbnRhdGlvbi5hbHBoYSAgID0gZS5hbHBoYTsgIC8vIHooMH4zNjApXHJcbiAgICAgICAgb3JpZW50YXRpb24uYmV0YSAgICA9IGUuYmV0YTsgICAvLyB4KC0xODB+MTgwKVxyXG4gICAgICAgIG9yaWVudGF0aW9uLmdhbW1hICAgPSBlLmdhbW1hOyAgLy8geSgtOTB+OTApXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLlVwZGF0ZXJcclxuICovXHJcbmNsYXNzIFVwZGF0ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHJvb3QpIHtcclxuICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnQocm9vdCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICB2YXIgYXBwID0gdGhpcy5hcHA7XHJcblxyXG4gICAgLy8g5pu05paw44GZ44KL44GL44KS5Yik5a6aXHJcbiAgICBpZiAoZWxlbWVudC5hd2FrZSA9PT0gZmFsc2UpIHJldHVybiA7XHJcblxyXG4gICAgLy8g44Ko44Oz44K/44O844OV44Os44O844Og44Kk44OZ44Oz44OIXHJcbiAgICBpZiAoZWxlbWVudC5oYXMoJ2VudGVyZnJhbWUnKSkge1xyXG4gICAgICBlbGVtZW50LmZsYXJlKCdlbnRlcmZyYW1lJywge1xyXG4gICAgICAgIGFwcDogdGhpcy5hcHAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsFxyXG4gICAgaWYgKGVsZW1lbnQudXBkYXRlKSBlbGVtZW50LnVwZGF0ZShhcHApO1xyXG5cclxuICAgIC8vIOOCv+ODg+ODgeWIpOWumlxyXG4gICAgLy8gdGhpcy5fY2hlY2tQb2ludChlbGVtZW50KTtcclxuXHJcbiAgICAvLyDlrZDkvpvjgpLmm7TmlrBcclxuICAgIHZhciBsZW4gPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWxlbWVudCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hlY2tQb2ludChvYmopIHtcclxuICAgIHRoaXMuYXBwLnBvaW50ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICBpZiAocC5pZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX19jaGVja1BvaW50KG9iaiwgcCk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX19jaGVja1BvaW50KG9iaiwgcCkge1xyXG4gICAgaWYgKCFvYmouaW50ZXJhY3RpdmUpIHJldHVybiA7XHJcblxyXG4gICAgdmFyIHByZXZPdmVyRmxhZyA9IG9iai5fb3ZlckZsYWdzW3AuaWRdO1xyXG4gICAgdmFyIG92ZXJGbGFnID0gb2JqLmhpdFRlc3QyKHAueCwgcC55KTtcclxuICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gb3ZlckZsYWc7XHJcblxyXG4gICAgaWYgKCFwcmV2T3ZlckZsYWcgJiYgb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG92ZXInLCB7XHJcbiAgICAgICAgcG9pbnRlcjogcCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJldk92ZXJGbGFnICYmICFvdmVyRmxhZykge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50b3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG92ZXJGbGFnKSB7XHJcbiAgICAgIGlmIChwLmdldFBvaW50aW5nU3RhcnQoKSkge1xyXG4gICAgICAgIG9iai5fdG91Y2hGbGFnc1twLmlkXSA9IHRydWU7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludHN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRzdGF5Jyk7XHJcbiAgICAgIGlmIChwLl9tb3ZlRmxhZykge1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRtb3ZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdPT09dHJ1ZSAmJiBwLmdldFBvaW50aW5nRW5kKCkpIHtcclxuICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRlbmQnKTtcclxuXHJcbiAgICAgIGlmIChvYmouX292ZXJGbGFnc1twLmlkXSkge1xyXG4gICAgICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludG91dCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuSW50ZXJhY3RpdmVcclxuICovXHJcbmNsYXNzIEludGVyYWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLm11bHRpVG91Y2ggPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJzb3IgPSB7XHJcbiAgICAgIG5vcm1hbDogJycsXHJcbiAgICAgIGhvdmVyOiAncG9pbnRlcicsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2hvbGRzID0gW107XHJcbiAgICB0aGlzLmFwcC5vbignY2hhbmdlc2NlbmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgY2xlYXIuY2FsbCh0aGlzLl9ob2xkcyk7XHJcbiAgICAgIC8vIHRoaXMuX2hvbGRzLmNsZWFyKCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuX2VuYWJsZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjaGVjayhyb290KSB7XHJcbiAgICAvLyDjgqvjg7zjgr3jg6vjga7jgrnjgr/jgqTjg6vjgpLlj43mmKBcclxuICAgIGlmICh0aGlzLmFwcC5kb21FbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLl9ob2xkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvci5ob3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcC5kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuY3Vyc29yLm5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICF0aGlzLmFwcC5wb2ludGVycykgcmV0dXJuIDtcclxuICAgIHRoaXMuX2NoZWNrRWxlbWVudChyb290KTtcclxuICB9XHJcblxyXG4gIF9jaGVja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdmFyIGFwcCA9IHRoaXMuYXBwO1xyXG5cclxuICAgIC8vIOabtOaWsOOBmeOCi+OBi+OCkuWIpOWumlxyXG4gICAgaWYgKGVsZW1lbnQuYXdha2UgPT09IGZhbHNlKSByZXR1cm4gO1xyXG5cclxuICAgIC8vIOWtkOS+m+OCkuabtOaWsFxyXG4gICAgdmFyIGxlbiA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGVtcENoaWxkcmVuID0gZWxlbWVudC5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICB0aGlzLl9jaGVja0VsZW1lbnQodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOOCv+ODg+ODgeWIpOWumlxyXG4gICAgdGhpcy5fY2hlY2tQb2ludChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIF9jaGVja1BvaW50KG9iaikge1xyXG4gICAgaWYgKHRoaXMubXVsdGlUb3VjaCkge1xyXG4gICAgICB0aGlzLmFwcC5wb2ludGVycy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICBpZiAocC5pZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5fX2NoZWNrUG9pbnQob2JqLCBwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX19jaGVja1BvaW50KG9iaiwgdGhpcy5hcHAucG9pbnRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfX2NoZWNrUG9pbnQob2JqLCBwKSB7XHJcbiAgICBpZiAoIW9iai5pbnRlcmFjdGl2ZSkgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgcHJldk92ZXJGbGFnID0gb2JqLl9vdmVyRmxhZ3NbcC5pZF07XHJcbiAgICB2YXIgb3ZlckZsYWcgPSBvYmouaGl0VGVzdChwLngsIHAueSk7XHJcbiAgICBvYmouX292ZXJGbGFnc1twLmlkXSA9IG92ZXJGbGFnO1xyXG5cclxuICAgIHZhciBlID0ge1xyXG4gICAgICBwb2ludGVyOiBwLFxyXG4gICAgICBpbnRlcmFjdGl2ZTogdGhpcyxcclxuICAgICAgb3Zlcjogb3ZlckZsYWcsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcHJldk92ZXJGbGFnICYmIG92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdmVyJywgZSk7XHJcblxyXG4gICAgICBpZiAob2JqLmJvdW5kaW5nVHlwZSAmJiBvYmouYm91bmRpbmdUeXBlICE9PSAnbm9uZScpIHtcclxuICAgICAgICB0aGlzLl9ob2xkcy5wdXNoKG9iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmV2T3ZlckZsYWcgJiYgIW92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnLCBlKTtcclxuICAgICAgLy8gdGhpcy5faG9sZHMuZXJhc2Uob2JqKTtcclxuICAgICAgZXJhc2UuY2FsbCh0aGlzLl9ob2xkcywgb2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3ZlckZsYWcpIHtcclxuICAgICAgaWYgKHAuZ2V0UG9pbnRpbmdTdGFydCgpKSB7XHJcbiAgICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gdHJ1ZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50c3RhcnQnLCBlKTtcclxuICAgICAgICAvLyDjgq/jg6rjg4Pjgq/jg5Xjg6njgrDjgpLnq4vjgabjgotcclxuICAgICAgICBvYmouX2NsaWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fdG91Y2hGbGFnc1twLmlkXSkge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50c3RheScsIGUpO1xyXG4gICAgICBpZiAocC5fbW92ZUZsYWcpIHtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50bW92ZScsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5fdG91Y2hGbGFnc1twLmlkXT09PXRydWUgJiYgcC5nZXRQb2ludGluZ0VuZCgpKSB7XHJcbiAgICAgIG9iai5fdG91Y2hGbGFnc1twLmlkXSA9IGZhbHNlO1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50ZW5kJywgZSk7XHJcblxyXG4gICAgICBpZiAocGhpbmEkMS5pc01vYmlsZSgpICYmIG9iai5fb3ZlckZsYWdzW3AuaWRdKSB7XHJcbiAgICAgICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50b3V0JywgZSk7XHJcbiAgICAgICAgLy8gdGhpcy5faG9sZHMuZXJhc2Uob2JqKTtcclxuICAgICAgICBlcmFzZS5jYWxsKHRoaXMuX2hvbGRzLCBvYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9hcHAvZWxlbWVudFwiXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEFjY2Vzc29yeSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICB9XHJcblxyXG4gIHNldFRhcmdldCh0YXJnZXQpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCA9PT0gdGFyZ2V0KSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRUYXJnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBpc0F0dGFjaGVkKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hUbyhlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmF0dGFjaCh0aGlzKTtcclxuICAgIHRoaXMuc2V0VGFyZ2V0KGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5kZXRhY2godGhpcyk7XHJcbiAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gRWxlbWVudOWBtOOBp+aLoeW8tVxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuJG1ldGhvZCgnYXR0YWNoJywgZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbi8vICAgaWYgKCF0aGlzLmFjY2Vzc29yaWVzKSB7XHJcbi8vICAgICB0aGlzLmFjY2Vzc29yaWVzID0gW107XHJcbi8vICAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICB0aGlzLmFjY2Vzc29yaWVzLmVhY2goZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbi8vICAgICAgICAgYWNjZXNzb3J5LnVwZGF0ZSAmJiBhY2Nlc3NvcnkudXBkYXRlKGUuYXBwKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRoaXMuYWNjZXNzb3JpZXMucHVzaChhY2Nlc3NvcnkpO1xyXG4vLyAgIGFjY2Vzc29yeS5zZXRUYXJnZXQodGhpcyk7XHJcbi8vICAgYWNjZXNzb3J5LmZsYXJlKCdhdHRhY2hlZCcpO1xyXG5cclxuLy8gICByZXR1cm4gdGhpcztcclxuLy8gfSk7XHJcblxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuJG1ldGhvZCgnZGV0YWNoJywgZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbi8vICAgaWYgKHRoaXMuYWNjZXNzb3JpZXMpIHtcclxuLy8gICAgIHRoaXMuYWNjZXNzb3JpZXMuZXJhc2UoYWNjZXNzb3J5KTtcclxuLy8gICAgIGFjY2Vzc29yeS5zZXRUYXJnZXQobnVsbCk7XHJcbi8vICAgICBhY2Nlc3NvcnkuZmxhcmUoJ2RldGFjaGVkJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gdGhpcztcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5Ud2VlbmVyXHJcbiAqICMgVHdlZW5lclxyXG4gKiBUd2VlbmVy44Gv44Kq44OW44K444Kn44Kv44OI44Gu44OX44Ot44OR44OG44Kj44Gr5a++44GX44Gm44CBXHJcbiAqIFR3ZWVu44Ki44OL44Oh44O844K344On44Oz44Gu5Yq55p6c44KS5LiO44GI44KL44Kv44Op44K544Gn44GZ44CCICBcclxuICog5Li744GrIHtAbGluayBwaGluYS5hcHAuRWxlbWVudH0g44Go44Gd44Gu44K144OW44Kv44Op44K544Gn5L2/55So44GV44KM44G+44GZ44CCXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIFR3ZWVuZXIgZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLmm7TmlrDjgZnjgovmlrnms5XjgpLmjIflrprjgZfjgb7jgZnjgIIgIFxyXG4gICAqIOWkieabtOOBmeOCi+OBqGR1cmF0aW9u44Gr44KI44KL5pmC6ZaT44Gu6YCy44G/5pa544GM5aSJ44KP44KK44G+44GZ44CCICBcclxuICAgKiDoqbPjgZfjgY/jga97QGxpbmsgI1VQREFURV9NQVB944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICovXHJcbiAgLy8gdXBkYXRlVHlwZSA9ICdkZWx0YSdcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG4gICAgdGhpcy51cGRhdGVUeXBlID0gJ2RlbHRhJztcclxuXHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcclxuICAgIHRoaXMuX3Rhc2tzID0gW107XHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVGFzaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuYXBwLkJhc2VBcHB9IGFwcFxyXG4gICAqL1xyXG4gIHVwZGF0ZShhcHApIHtcclxuICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICoge0BsaW5rICN1cGRhdGVUeXBlfeOCkuWkieabtOOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOabtOaWsOaWueazleOCkuihqOOBmeaWh+Wtl+WIl1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzZXRVcGRhdGVUeXBlKHR5cGUpIHtcclxuICAgIHRoaXMudXBkYXRlVHlwZSA9IHR5cGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHByb3Bz44Gn5oyH5a6a44GX44Gf5YCk44Gr44Gq44KL44G+44Gn44CBZHVyYXRpb27jgafmjIflrprjgZfjgZ/mmYLplpPjgpLjgYvjgZHjgabjgIHjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMg5aSJ5pu044GX44Gf44GE44OX44Ot44OR44OG44Kj44KSa2V544Go44GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHRvKHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAndHdlZW4nLFxyXG4gICAgICBtb2RlOiAndG8nLFxyXG4gICAgICBwcm9wczogcHJvcHMsXHJcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiBlYXNpbmcsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz6ZaL5aeL5pmC44Gu5YCk44GocHJvcHPjgafmjIflrprjgZfjgZ/lgKTjgpLliqDnrpfjgZfjgZ/lgKTjgavjgarjgovjgb7jgafjgIFkdXJhdGlvbuOBp+aMh+WumuOBl+OBn+aZgumWk+OCkuOBi+OBkeOBpuOAgeOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgYnkocHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgIG1vZGU6ICdieScsXHJcbiAgICAgIHByb3BzOiBwcm9wcyxcclxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcHJvcHPjgafmjIflrprjgZfjgZ/lgKTjgYvjgonjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4vmmYLjga7lgKTjgavjgarjgovjgb7jgafjgIFkdXJhdGlvbuOBp+aMh+WumuOBl+OBn+aZgumWk+OCkuOBi+OBkeOBpuOAgeOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgZnJvbShwcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgbW9kZTogJ2Zyb20nLFxyXG4gICAgICBwcm9wczogcHJvcHMsXHJcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiBlYXNpbmcsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GX44Gf5pmC6ZaT44GM57WM6YGO44GZ44KL44G+44Gn5b6F5qmf44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgd2FpdOOBmeOCi+aZgumWk1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICB3YWl0KHRpbWUpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd3YWl0JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxpbWl0OiB0aW1lLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOePvuWcqOioreWumuOBleOCjOOBpuOBhOOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+aZguOBq+WRvOOBs+WHuuOBleOCjOOCi+mWouaVsOOCkuOCu+ODg+ODiOOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMg5ZG844Gz5Ye644GV44KM44KL6Zai5pWwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlbGYgKG9wdGlvbmFsKSBmdW5j5YaF44GndGhpc+OBq+OBl+OBn+OBhOOCquODluOCuOOCp+OCr+ODiOOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGFyZ3MgKG9wdGlvbmFsKSBmdW5j44Gu5byV5pWw44Gr44GX44Gf44GE5YCkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGNhbGwoZnVuYywgc2VsZiwgYXJncykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ2NhbGwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZnVuYzogZnVuYyxcclxuICAgICAgICBzZWxmOiBzZWxmIHx8IHRoaXMsXHJcbiAgICAgICAgYXJnczogYXJncyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnj77lnKjoqK3lrprjgZXjgozjgabjgYTjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/mmYLjgavjg5fjg63jg5Hjg4bjgqPjgpLjgrvjg4Pjg4jjgZfjgb7jgZnjgIIgIFxyXG4gICAqIOesrOS4gOW8leaVsOOBq+OCquODluOCuOOCp+OCr+ODiOOCkuOCu+ODg+ODiOOBmeOCi+OBk+OBqOOCguOBp+OBjeOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7U3RyaW5nIHwgT2JqZWN0fSBrZXkgdmFsdWXjgpLjgrvjg4Pjg4jjgZnjgovjg5fjg63jg5Hjg4bjgqPlkI3jgYvjgIHlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgKG9wdGlvbmFsKSDjgrvjg4Pjg4jjgZnjgovlgKRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgIHZhciB2YWx1ZXMgPSBudWxsO1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMikge1xyXG4gICAgICB2YWx1ZXMgPSB7fTtcclxuICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWx1ZXMgPSBrZXk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90YXNrcy5wdXNoKHtcclxuICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogeCwgeeOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI3RvfSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5LCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IHg6IHgsIHk6IHkgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHgsIHnjgavlr77jgZfjgabjgIEge0BsaW5rICNieX0g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBtb3ZlQnkoeCwgeSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYnkoeyB4OiB4LCB5OiB5IH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcm90YXRpb27jgavlr77jgZfjgabjgIEge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHJvdGF0ZVRvKHJvdGF0aW9uLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IHJvdGF0aW9uOiByb3RhdGlvbiB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogcm90YXRpb27jgavlr77jgZfjgabjgIEge0BsaW5rICNieX0g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHJvdGF0ZUJ5KHJvdGF0aW9uLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ieSh7IHJvdGF0aW9uOiByb3RhdGlvbiB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNjYWxlWCwgc2NhbGVZ44Gr5a++44GX44GmIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSBzY2FsZVjjgahzY2FsZVnjgavoqK3lrprjgZnjgovlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2NhbGVUbyhzY2FsZSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMudG8oeyBzY2FsZVg6IHNjYWxlLCBzY2FsZVk6IHNjYWxlIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBzY2FsZVgsIHNjYWxlWeOBq+WvvuOBl+OBpiB7QGxpbmsgI2J5fSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgc2NhbGVY44Goc2NhbGVZ44Gr6Kit5a6a44GZ44KL5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNjYWxlQnkoc2NhbGUsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJ5KHsgc2NhbGVYOiBzY2FsZSwgc2NhbGVZOiBzY2FsZSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFscGhh44Gr5a++44GX44GmIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBhbHBoYeOBq+ioreWumuOBmeOCi+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmYWRlKHZhbHVlLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IGFscGhhOiB2YWx1ZSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFscGhh44KSMOOBq+OBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmYWRlT3V0KGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmZhZGUoMC4wLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFscGhh44KSMeOBq+OBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmYWRlSW4oZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmFkZSgxLjAsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz6ZaL5aeLXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLkuIDmmYLlgZzmraJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS5YGc5q2i44GX44CB5pyA5Yid44G+44Gn5be744GN5oi744GX44G+44GZ44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMucmV3aW5kKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuW3u+OBjeaIu+OBmVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICByZXdpbmQoKSB7XHJcbiAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB5b3lvKCkge1xyXG4gICAgLy8gVE9ETzog5pyA5Yid44Gu5YCk44GM5YiG44GL44KJ44Gq44GE44Gu44Gn5Y+N6Lui44Gn44GN44Gq44GELi4uXHJcbiAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgdGhpcy5fdGFza3MuZWFjaChmdW5jdGlvbih0YXNrKSB7XHJcbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICd0d2VlbicpIDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbGF5KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5foqK3lrppcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWdcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2V0TG9vcChmbGFnKSB7XHJcbiAgICB0aGlzLl9sb29wID0gZmxhZztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS44Kv44Oq44KiXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBKU09O5b2i5byP44Gn44Ki44OL44Oh44O844K344On44Oz44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBqc29uLmxvb3AgKG9wdGlvbmFsKSDjg6vjg7zjg5fjgZnjgovloLTlkIh0cnVlXHJcbiAgICogQHBhcmFtIHtBcnJheVtdfSBqc29uLnR3ZWVucyDoqK3lrprjgZnjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7NcclxuICAgKiBcclxuICAgKiBgYGBcclxuICAgKiBbXHJcbiAgICogICBbbWV0aG9kLCBhcmcxLCBhcmcyLCwsXSxcclxuICAgKiAgIFsndG8nLCB7dmFsdWU6IDEwMH0sIDEwMDAsICdzd2luZyddLFxyXG4gICAqICAgWyd3YWl0JywgMTAwMF0sXHJcbiAgICogICBbJ3NldCcsICd0ZXh0JywgJ0VORCddXHJcbiAgICogXVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZyb21KU09OKGpzb24pIHtcclxuICAgIGlmIChqc29uLmxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNldExvb3AoanNvbi5sb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBqc29uLnR3ZWVucy5lYWNoKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgdCA9IHQuY2xvbmUoKTtcclxuICAgICAgdmFyIG1ldGhvZCA9IHQuc2hpZnQoKTtcclxuICAgICAgdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIHQpO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfYWRkKHBhcmFtcykge1xyXG4gICAgdGhpcy5fdGFza3MucHVzaChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVRhc2soYXBwKSB7XHJcbiAgICBpZiAoIXRoaXMucGxheWluZykgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgdGFzayA9IHRoaXMuX3Rhc2tzW3RoaXMuX2luZGV4XTtcclxuICAgIGlmICghdGFzaykge1xyXG4gICAgICBpZiAodGhpcy5fbG9vcCkge1xyXG4gICAgICAgIHRoaXMucmV3aW5kKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICArK3RoaXMuX2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXNrLnR5cGUgPT09ICd0d2VlbicpIHtcclxuICAgICAgLy8gdGhpcy5fdHdlZW4gPSBwaGluYS51dGlsLlR3ZWVuKCk7XHJcbiAgICAgIHRoaXMuX3R3ZWVuID0gbmV3IFR3ZWVuKCk7XHJcblxyXG4gICAgICB2YXIgZHVyYXRpb24gPSB0YXNrLmR1cmF0aW9uIHx8IHRoaXMuX2dldERlZmF1bHREdXJhdGlvbigpO1xyXG4gICAgICBpZiAodGFzay5tb2RlID09PSAndG8nKSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4udG8odGhpcy50YXJnZXQsIHRhc2sucHJvcHMsIGR1cmF0aW9uLCB0YXNrLmVhc2luZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGFzay5tb2RlID09PSAnYnknKSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4uYnkodGhpcy50YXJnZXQsIHRhc2sucHJvcHMsIGR1cmF0aW9uLCB0YXNrLmVhc2luZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4uZnJvbSh0aGlzLnRhcmdldCwgdGFzay5wcm9wcywgZHVyYXRpb24sIHRhc2suZWFzaW5nKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUd2VlbjtcclxuICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT09ICd3YWl0Jykge1xyXG4gICAgICB0aGlzLl93YWl0ID0ge1xyXG4gICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgbGltaXQ6IHRhc2suZGF0YS5saW1pdCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVdhaXQ7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFzay50eXBlID09PSAnY2FsbCcpIHtcclxuICAgICAgdGFzay5kYXRhLmZ1bmMuYXBwbHkodGFzay5kYXRhLnNlbGYsIHRhc2suZGF0YS5hcmdzKTtcclxuICAgICAgLy8gMeODleODrOODvOODoOa2iOiyu+OBl+OBquOBhOOCiOOBhuWGjeW4sFxyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ3NldCcpIHtcclxuICAgICAgJGV4dGVuZC5jYWxsKHRoaXMudGFyZ2V0LCB0YXNrLmRhdGEudmFsdWVzKTtcclxuICAgICAgLy8gdGhpcy50YXJnZXQuJGV4dGVuZCh0YXNrLmRhdGEudmFsdWVzKTtcclxuICAgICAgLy8gMeODleODrOODvOODoOa2iOiyu+OBl+OBquOBhOOCiOOBhuWGjeW4sFxyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF91cGRhdGVUd2VlbihhcHApIHtcclxuICAgIHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuO1xyXG4gICAgdmFyIHRpbWUgPSB0aGlzLl9nZXRVbml0VGltZShhcHApO1xyXG5cclxuICAgIHR3ZWVuLmZvcndhcmQodGltZSk7XHJcbiAgICB0aGlzLmZsYXJlKCd0d2VlbicpO1xyXG5cclxuICAgIGlmICh0d2Vlbi50aW1lID49IHR3ZWVuLmR1cmF0aW9uKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl90d2VlbjtcclxuICAgICAgdGhpcy5fdHdlZW4gPSBudWxsO1xyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVdhaXQoYXBwKSB7XHJcbiAgICB2YXIgd2FpdCA9IHRoaXMuX3dhaXQ7XHJcbiAgICB2YXIgdGltZSA9IHRoaXMuX2dldFVuaXRUaW1lKGFwcCk7XHJcbiAgICB3YWl0LnRpbWUgKz0gdGltZTtcclxuXHJcbiAgICBpZiAod2FpdC50aW1lID49IHdhaXQubGltaXQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX3dhaXQ7XHJcbiAgICAgIHRoaXMuX3dhaXQgPSBudWxsO1xyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldFVuaXRUaW1lKGFwcCkge1xyXG4gICAgdmFyIG9iaiA9IFVQREFURV9NQVBbdGhpcy51cGRhdGVUeXBlXTtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgcmV0dXJuIG9iai5mdW5jKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIDEwMDAgLyBhcHAuZnBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldERlZmF1bHREdXJhdGlvbigpIHtcclxuICAgIHZhciBvYmogPSBVUERBVEVfTUFQW3RoaXMudXBkYXRlVHlwZV07XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5kdXJhdGlvbjtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiB7QGxpbmsgI3VwZGF0ZVR5cGV944Gr6Kit5a6a44GZ44KL5pu05paw5pa55rOV44Gu5a6a576p44Gn44GZ44CCXHJcbiAqIOS4i+iomOOBruihqOOBq+Wumue+qea4iOOBv+OBruabtOaWsOaWueazleOCkntAbGluayAjdXBkYXRlVHlwZX3jgavoqK3lrprjgZnjgovjgZPjgajjgafjgIFcclxuICog44Ki44OL44Oh44O844K344On44Oz44Gu5pu05paw5pa55rOV44KS5aSJ5pu044GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAqIFxyXG4gKiB8IOabtOaWsOaWueazlSB8IOWNmOS9jSjjg4fjg5Xjgqnjg6vjg4jlgKQpIHwgMeODleODrOODvOODoOOBguOBn+OCiuOBruOCouODi+ODoeODvOOCt+ODp+ODs+mAn+W6piB8XHJcbiAqIHwtfC18LXxcclxuICogfCBub3JtYWwgfCDjg5/jg6rnp5IoMTAwMCkgfCBhcHAuZnBz44Gr44KI44Gj44Gm5aSJ5YyWIHxcclxuICogfCBkZWx0YSB8IOODn+ODquenkigxMDAwKSB8IOe1jOmBjuaZgumWk+OBq+OCiOOBo+OBpuWkieWMliB8XHJcbiAqIHwgZnBzIHwg44OV44Os44O844OgKDMwKSB8IOW/heOBmuWQjOOBmOmAn+W6puOBp+WkieWMliB8XHJcbiAqL1xyXG52YXIgVVBEQVRFX01BUCA9IFR3ZWVuZXIuVVBEQVRFX01BUCA9IHtcclxuICBub3JtYWw6IHtcclxuICAgIGZ1bmM6IGZ1bmN0aW9uKGFwcCkge1xyXG4gICAgICByZXR1cm4gMTAwMCAvIGFwcC5mcHM7XHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgfSxcclxuXHJcbiAgZGVsdGE6IHtcclxuICAgIGZ1bmM6IGZ1bmN0aW9uKGFwcCkge1xyXG4gICAgICByZXR1cm4gYXBwLnRpY2tlci5kZWx0YVRpbWU7XHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgfSxcclxuXHJcbiAgZnBzOiB7XHJcbiAgICBmdW5jOiBmdW5jdGlvbihhcHApIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IDMwLFxyXG4gIH0sXHJcblxyXG59O1xyXG5cclxuLy8gRWxlbWVudOWBtOOBp+aLoeW8tVxyXG4vLyAvKipcclxuLy8gICogQG1lbWJlciBwaGluYS5hcHAuRWxlbWVudFxyXG4vLyAgKiBAcHJvcGVydHkgdHdlZW5lclxyXG4vLyAgKiDoh6rouqvjgavjgqLjgr/jg4Pjg4HmuIjjgb/jga57QGxpbmsgcGhpbmEuYWNjZXNzb3J5LlR3ZWVuZXJ944Kq44OW44K444Kn44Kv44OI44CCXHJcbi8vICAqL1xyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCd0d2VlbmVyJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl90d2VlbmVyKSB7XHJcbi8vICAgICB0aGlzLl90d2VlbmVyID0gcGhpbmEuYWNjZXNzb3J5LlR3ZWVuZXIoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX3R3ZWVuZXI7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuRWxlbWVudFxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKiAjIOS4u+OBq+imgee0oOOBruimquWtkOmWouS/guOCkuaJseOBhuOCr+ODqeOCuVxyXG4gKiDkuLvjgavopqrlrZDplqLkv4LnrYnjgpLlrprnvqnjgZnjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgcGFyZW50XHJcbiAgICog6Kaq6KaB57SgXHJcbiAgICovXHJcbiAgLy8gcGFyZW50ID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IGNoaWxkcmVuXHJcbiAgICog5a2Q6KaB57SgXHJcbiAgICovXHJcbiAgLy8gY2hpbGRyZW4gPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgYXdha2VcclxuICAgKiDmnInlirnjgYvjganjgYbjgYtcclxuICAgKi9cclxuICAvLyBhd2FrZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZENoaWxkXHJcbiAgICog6Ieq6Lqr44Gr5a2Q6KaB57Sg44KS6L+95Yqg44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDoh6rouqvjgpLlrZDopoHntKDjgajjgZfjgablvJXmlbDjgafmjIflrprjgZfjgZ/opoHntKDjgavov73liqDjgZnjgovjgavjga8ge0BsaW5rICNhZGRDaGlsZFRvfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZCDov73liqDjgZnjgovlrZDopoHntKBcclxuICAgKi9cclxuICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgaWYgKGNoaWxkLnBhcmVudCkgY2hpbGQucmVtb3ZlKCk7XHJcblxyXG4gICAgY2hpbGQucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblxyXG4gICAgY2hpbGQuaGFzKCdhZGRlZCcpICYmIGNoaWxkLmZsYXJlKCdhZGRlZCcpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkQ2hpbGRUb1xyXG4gICAqIOiHqui6q+OCkuWtkOimgee0oOOBqOOBl+OBpuW8leaVsOOBp+aMh+WumuOBl+OBn+imgee0oOOBq+i/veWKoOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog6Ieq6Lqr44Gr5a2Q6KaB57Sg44KS6L+95Yqg44GZ44KL44Gr44GvIHtAbGluayAjYWRkQ2hpbGR9IOOCkuS9v+eUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmVudCDoh6rouqvjgpLlrZDopoHntKDjgajjgZfjgabov73liqDjgZnjgovopoHntKBcclxuICAgKi9cclxuICBhZGRDaGlsZFRvKHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRDaGlsZEF0XHJcbiAgICog6Ieq6Lqr44KS44CB5oyH5a6a44GX44Gf6KaB57Sg44Gu5a2Q6KaB57Sg44Gu5Lu75oSP44Gu6YWN5YiX44Kk44Oz44OH44OD44Kv44K544Gr6L+95Yqg44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg6L+95Yqg44GZ44KL5a2Q6KaB57SgXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOOCpOODs+ODh+ODg+OCr+OCueeVquWPt1xyXG4gICAqL1xyXG4gIGFkZENoaWxkQXQoY2hpbGQsIGluZGV4KSB7XHJcbiAgICBpZiAoY2hpbGQucGFyZW50KSBjaGlsZC5yZW1vdmUoKTtcclxuXHJcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcclxuXHJcbiAgICBjaGlsZC5oYXMoJ2FkZGVkJykgJiYgY2hpbGQuZmxhcmUoJ2FkZGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRDaGlsZEF0XHJcbiAgICog5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu5a2Q6KaB57Sg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K555Wq5Y+3XHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDmjIflrprjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lrZDopoHntKBcclxuICAgKi9cclxuICBnZXRDaGlsZEF0KGluZGV4KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5jaGlsZHJlbi5hdChpbmRleCk7XHJcbiAgICByZXR1cm4gYXQuY2FsbCh0aGlzLmNoaWxkcmVuLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENoaWxkQnlOYW1lXHJcbiAgICog5oyH5a6a44GX44Gf5ZCN5YmN44Gu5a2Q6KaB57Sg44KS6L+U44GX44G+44GZ44CC77yI5pyq5a6f6KOF77yJXHJcbiAgICovXHJcbiAgZ2V0Q2hpbGRCeU5hbWUobmFtZSkge1xyXG4gICAgLy8gVE9ETzpcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q2hpbGRJbmRleFxyXG4gICAqIOaMh+WumuOBl+OBn+WtkOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOWtkOimgee0oFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5oyH5a6a44GX44Gf5a2Q6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+3XHJcbiAgICovXHJcbiAgZ2V0Q2hpbGRJbmRleChjaGlsZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFBhcmVudFxyXG4gICAqIOaMh+WumuOBl+OBn+imgee0oOOBruimquimgee0oOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDmjIflrprjgZfjgZ/opoHntKDjga7opqropoHntKBcclxuICAgKi9cclxuICBnZXRQYXJlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFJvb3RcclxuICAgKiDmjIflrprjgZfjgZ/opoHntKDjga7pmo7lsaTjg4Tjg6rjg7zjga7jg6vjg7zjg4jjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g5oyH5a6a44GX44Gf6KaB57Sg44Gu6ZqO5bGk44OE44Oq44O844Gu44Or44O844OIXHJcbiAgICovXHJcbiAgZ2V0Um9vdCgpIHtcclxuICAgIHZhciBlbG0gPSB0aGlzO1xyXG4gICAgZm9yIChlbG09dGhpcy5wYXJlbnQ7IGVsbS5wYXJlbnQgIT0gbnVsbDsgZWxtID0gZWxtLnBhcmVudCkge1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBlbG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlbW92ZUNoaWxkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOaMh+WumuOBl+OBn+imgee0oOOCkuiHqui6q+OBruWtkOimgee0oOOBi+OCieWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOimgee0oFxyXG4gICAqL1xyXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGNoaWxkLmhhcygncmVtb3ZlZCcpICYmIGNoaWxkLmZsYXJlKCdyZW1vdmVkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVtb3ZlXHJcbiAgICog6Ieq6Lqr44KS6Kaq6KaB57Sg44Gu5a2Q6KaB57Sg44GL44KJ5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIDtcclxuXHJcbiAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaXNBd2FrZVxyXG4gICAqIOiHqui6q+OBjOacieWKueOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5pyJ5Yq544GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgaXNBd2FrZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmF3YWtlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB3YWtlVXBcclxuICAgKiDoh6rouqvjgpLmnInlirnjgavjgZfjgb7jgZnjgIJcclxuICAgKi9cclxuICB3YWtlVXAoKSB7XHJcbiAgICB0aGlzLmF3YWtlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzbGVlcFxyXG4gICAqIOiHqui6q+OCkueEoeWKueOBq+OBl+OBvuOBmeOAglxyXG4gICAqL1xyXG4gIHNsZWVwKCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZyb21KU09OXHJcbiAgICogSlNPTiDlvaLlvI/jgpLkvb/jgaPjgaboh6rouqvjgavlrZDopoHntKDjgpLov73liqDjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgICB0aGlzLmZyb21KU09OKHtcclxuICAgKiAgICAgICAgXCJjaGlsZHJlblwiOiB7XHJcbiAgICogICAgICAgICAgXCJsYWJlbFwiOiB7ICAgICAgICAgICAgICAgICAgLy/jgq3jg7zlkI3jgYzov73liqDjgZnjgovlrZDopoHntKDjga7lkI3liY3jgavjgarjgotcclxuICAgKiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiTGFiZWxcIiwgICAgIC8v44Kv44Op44K5XHJcbiAgICogICAgICAgICAgICBcImFyZ3VtZW50c1wiOiBbJ2hlbGxvISddLCAgLy/liJ3mnJ/ljJbmmYLjga7lvJXmlbBcclxuICAgKiAgICAgICAgICAgIFwieFwiOjMyMCwgICAgICAgICAgICAgICAgICAvL+OBneOBruS7luODl+ODreODkeODhuOCo1xyXG4gICAqICAgICAgICAgICAgXCJ5XCI6NDgwLFxyXG4gICAqICAgICAgICAgIH0sXHJcbiAgICogICAgICAgIH0sXHJcbiAgICogICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SlNPTn0ganNvbiBKU09OIOW9ouW8j1xyXG4gICAqL1xyXG4gIGZyb21KU09OKGpzb24pIHtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcbiAgICAgIHZhciBhcmdzID0gZGF0YS5hcmd1bWVudHM7XHJcbiAgICAgIGFyZ3MgPSAoYXJncyBpbnN0YW5jZW9mIEFycmF5KSA/IGFyZ3MgOiBbYXJnc107XHJcblxyXG4gICAgICB2YXIgX2NsYXNzO1xyXG4gICAgICB2YXIgZWxlbWVudDtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBpcyBwaGluYSBjbGFzc1xyXG4gICAgICAgIF9jbGFzcyA9IHBoaW5hJDEudXNpbmcoZGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICAgIGVsZW1lbnQgPSBfY2xhc3MuYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gaXMgRVMgY2xhc3NcclxuICAgICAgICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgavjgrnjg5fjg6zjg4Pjg4nmp4vmlofjgYzlv4XopoHjgarjgZ/jgoHjgIFlczXjgrXjg53jg7zjg4jjga7loLTlkIhiYWJlbOOBjOW/heimgVxyXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgZGF0YS5jbGFzc05hbWUoLi4uYXJncyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXNbbmFtZV0gPSBlbGVtZW50O1xyXG5cclxuICAgICAgZWxlbWVudC5mcm9tSlNPTihkYXRhKTtcclxuICAgICAgZWxlbWVudC5hZGRDaGlsZFRvKHRoaXMpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGZvckluLmNhbGwoanNvbiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8ganNvbi5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcclxuICAgICAgICBmb3JJbi5jYWxsKHZhbHVlLCBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgLy8gdmFsdWUuZm9ySW4oZnVuY3Rpb24obmFtZSwgZGF0YSkge1xyXG4gICAgICAgICAgY3JlYXRlQ2hpbGRyZW4obmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3R5cGUnICYmIGtleSAhPT0gJ2NsYXNzTmFtZScpIHtcclxuICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvSlNPTlxyXG4gICAqIOiHqui6q+OBruWtkOimgee0oOOCkiBKU09OIOW9ouW8j+OBp+i/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7SlNPTn0gSlNPTuW9ouW8j1xyXG4gICAqL1xyXG4gIHRvSlNPTigpIHtcclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocGhpbmEkMS51c2luZyh0aGlzLmNsYXNzTmFtZSkuZGVmYXVsdHMgfHwge30pO1xyXG5cclxuICAgIHRoaXMuX2hpZXJhcmNoaWVzLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgZCA9IGUuZGVmYXVsdHM7XHJcbiAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZCkuZm9yRWFjaChmdW5jdGlvbihrKSB7XHJcbiAgICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGspID09PSAtMSkge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2goayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGtleXMucHVzaCgnbmFtZScsICdjbGFzc05hbWUnKTtcclxuXHJcbiAgICB2YXIganNvbiA9IHt9O1xyXG4gICAgLy8ga2V5cy5lYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICBqc29uW2tleV0gPSB0aGlzW2tleV07XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGQudG9KU09OKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIGpzb24uY2hpbGRyZW4gPSB7fTtcclxuICAgICAgLy8gY2hpbGRyZW4uZWFjaChmdW5jdGlvbihjaGlsZCwgaSkge1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBpKSB7XHJcbiAgICAgICAganNvbi5jaGlsZHJlbltjaGlsZC5uYW1lIHx8IChjaGlsZC5jbGFzc05hbWUgKyAnXycgKyBpKV0gPSBjaGlsZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGpzb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhY2Nlc3NvcnnjgpLku5jkuI7jgZnjgotcclxuICAgKiBAcGFyYW0gIHtBY2Nlc3Nvcnl9IEFjY2Vzc29yeee2meaJv+OCr+ODqeOCuVxyXG4gICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICovXHJcbiAgYXR0YWNoKGFjY2Vzc29yeSkge1xyXG4gICAgaWYgKCF0aGlzLmFjY2Vzc29yaWVzKSB7XHJcbiAgICAgIHRoaXMuYWNjZXNzb3JpZXMgPSBbXTtcclxuICAgICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc29yaWVzLmZvckVhY2goZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbiAgICAgICAgICBhY2Nlc3NvcnkudXBkYXRlICYmIGFjY2Vzc29yeS51cGRhdGUoZS5hcHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjY2Vzc29yaWVzLnB1c2goYWNjZXNzb3J5KTtcclxuICAgIGFjY2Vzc29yeS5zZXRUYXJnZXQodGhpcyk7XHJcbiAgICBhY2Nlc3NvcnkuZmxhcmUoJ2F0dGFjaGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhY2Nlc3NvcnnjgpLliYrpmaRcclxuICAgKiBAcGFyYW0gIHtBY2Nlc3Nvcnl9IEFjY2Vzc29yeee2meaJv+OCr+ODqeOCuVxyXG4gICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICovXHJcbiAgZGV0YWNoKGFjY2Vzc29yeSkge1xyXG4gICAgaWYgKHRoaXMuYWNjZXNzb3JpZXMpIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3Nvcmllcy5lcmFzZShhY2Nlc3NvcnkpO1xyXG4gICAgICBlcmFzZS5jYWxsKHRoaXMuYWNjZXNzb3JpZXMsIGFjY2Vzc29yeSk7XHJcbiAgICAgIGFjY2Vzc29yeS5zZXRUYXJnZXQobnVsbCk7XHJcbiAgICAgIGFjY2Vzc29yeS5mbGFyZSgnZGV0YWNoZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCB0d2VlbmVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl90d2VlbmVyKSB7XHJcbiAgICAgIHRoaXMuX3R3ZWVuZXIgPSBuZXcgVHdlZW5lcigpLmF0dGFjaFRvKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3R3ZWVuZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5TY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuRWxlbWVudFxyXG4gKi9cclxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZXhpdChuZXh0TGFiZWwsIG5leHRBcmd1bWVudHMpIHtcclxuICAgIGlmICghdGhpcy5hcHApIHJldHVybiA7XHJcblxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG5leHRMYWJlbCA9IGFyZ3VtZW50c1swXS5uZXh0TGFiZWwgfHwgdGhpcy5uZXh0TGFiZWw7XHJcbiAgICAgICAgbmV4dEFyZ3VtZW50cyA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5uZXh0TGFiZWwgPSBuZXh0TGFiZWw7XHJcbiAgICAgIHRoaXMubmV4dEFyZ3VtZW50cyA9IG5leHRBcmd1bWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHAucG9wU2NlbmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5CYXNlQXBwXHJcbiAqIOODmeODvOOCueOBqOOBquOCi+OCouODl+ODquOCseODvOOCt+ODp+ODs+OCr+ODqeOCuVxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQmFzZUFwcCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIC8qKiBhd2FrZSAqL1xyXG4gIC8vIGF3YWtlID0gbnVsbFxyXG4gIC8vIC8qKiBmcHMgKi9cclxuICAvLyBmcHMgPSBudWxsXHJcbiAgLy8gLyoqIGZyYW1lICovXHJcbiAgLy8gZnJhbWUgPSBudWxsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX3NjZW5lcyA9IFtuZXcgU2NlbmUoKV07XHJcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gMDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzKTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBuZXcgSW50ZXJhY3RpdmUodGhpcyk7XHJcblxyXG4gICAgdGhpcy5hd2FrZSA9IHRydWU7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBUaWNrZXIoKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuX2xvb3BDYWxsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5fbG9vcCgpO1xyXG4gICAgfTtcclxuICAgIHRoaXMudGlja2VyLnRpY2sodGhpcy5fbG9vcENhbGxlcik7XHJcblxyXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGtpbGwoKSB7XHJcbiAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgICB0aGlzLnRpY2tlci51bnRpY2sodGhpcy5fbG9vcENhbGxlcik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlcGxhY2VTY2VuZShzY2VuZSkge1xyXG4gICAgdGhpcy5mbGFyZSgncmVwbGFjZScpO1xyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlc2NlbmUnKTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5hcHAgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmFwcCA9IHRoaXM7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgnZW50ZXInLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVzaFNjZW5lKHNjZW5lKSB7XHJcbiAgICB0aGlzLmZsYXJlKCdwdXNoJyk7XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2VzY2VuZScpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdwYXVzZScsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2NlbmVzLnB1c2goc2NlbmUpO1xyXG4gICAgKyt0aGlzLl9zY2VuZUluZGV4O1xyXG5cclxuICAgIHRoaXMuZmxhcmUoJ3B1c2hlZCcpO1xyXG5cclxuICAgIHNjZW5lLmFwcCA9IHRoaXM7XHJcbiAgICBzY2VuZS5mbGFyZSgnZW50ZXInLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44KS44Od44OD44OX44GZ44KLKOODneODvOOCuuOChOOCquODluOCt+ODp+ODs+eUu+mdouOBquOBqeOBp+S9v+eUqClcclxuICAgKi9cclxuICBwb3BTY2VuZSgpIHtcclxuICAgIHRoaXMuZmxhcmUoJ3BvcCcpO1xyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlc2NlbmUnKTtcclxuXHJcbiAgICB2YXIgc2NlbmUgPSB0aGlzLl9zY2VuZXMucG9wKCk7XHJcbiAgICAtLXRoaXMuX3NjZW5lSW5kZXg7XHJcblxyXG4gICAgc2NlbmUuZmxhcmUoJ2V4aXQnLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG4gICAgc2NlbmUuYXBwID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmZsYXJlKCdwb3BlZCcpO1xyXG5cclxuICAgIC8vXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgncmVzdW1lJywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICAgIHByZXZTY2VuZTogc2NlbmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7Pjga51cGRhdGXjgpLlrp/ooYzjgZnjgovjgojjgYbjgavjgZnjgotcclxuICAgKi9cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44GudXBkYXRl44KS5a6f6KGM44GX44Gq44GE44KI44GG44Gr44GZ44KLXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGVuYWJsZVN0YXRzKCkge1xyXG4gICAgaWYgKHBoaW5hJDEuZ2xvYmFsLlN0YXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUud2FybihcIm5vdCBkZWZpbmVkIHN0YXRzLlwiKTtcclxuICAgICAgdmFyIFNUQVRTX1VSTCA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zdGF0cy5qcy9yMTQvU3RhdHMuanMnO1xyXG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBTVEFUU19VUkw7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlU3RhdHMoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBlbmFibGVEYXRHVUkoY2FsbGJhY2spIHtcclxuICAgIGlmIChwaGluYSQxLmdsb2JhbC5kYXQpIHtcclxuICAgICAgdmFyIGd1aSA9IG5ldyBwaGluYSQxLmdsb2JhbC5kYXQuR1VJKCk7XHJcbiAgICAgIGNhbGxiYWNrKGd1aSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKFwibm90IGRlZmluZWQgZGF0LkdVSS5cIik7XHJcbiAgICAgIHZhciBVUkwgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZGF0LWd1aS8wLjUuMS9kYXQuZ3VpLmpzJztcclxuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gVVJMO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZ3VpID0gbmV3IHBoaW5hJDEuZ2xvYmFsLmRhdC5HVUkoKTtcclxuICAgICAgICBjYWxsYmFjayhndWkpO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9sb29wKCkge1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlLmNoZWNrKHRoaXMuY3VycmVudFNjZW5lKTtcclxuICAgIHRoaXMuX2RyYXcoKTtcclxuXHJcbiAgICAvLyBzdGF0cyB1cGRhdGVcclxuICAgIGlmICh0aGlzLnN0YXRzKSB0aGlzLnN0YXRzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmF3YWtlKSB7XHJcbiAgICAgIC8vIOOCqOODs+OCv+ODvOODleODrOODvOODoOOCpOODmeODs+ODiFxyXG4gICAgICBpZiAodGhpcy5oYXMoJ2VudGVyZnJhbWUnKSkge1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2VudGVyZnJhbWUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGUgJiYgdGhpcy51cGRhdGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVyLnVwZGF0ZSh0aGlzLmN1cnJlbnRTY2VuZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmj4/nlLvnlKjku67mg7PplqLmlbBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9kcmF3KCkge31cclxuXHJcbiAgZ2V0IGN1cnJlbnRTY2VuZSgpICAgeyByZXR1cm4gdGhpcy5fc2NlbmVzW3RoaXMuX3NjZW5lSW5kZXhdOyB9XHJcbiAgc2V0IGN1cnJlbnRTY2VuZSh2KSAgeyB0aGlzLl9zY2VuZXNbdGhpcy5fc2NlbmVJbmRleF0gPSB2OyB9XHJcblxyXG4gIGdldCByb290U2NlbmUoKSAgIHsgcmV0dXJuIHRoaXMuX3NjZW5lc1swXTsgfVxyXG4gIHNldCByb290U2NlbmUodikgIHsgdGhpcy5fc2NlbmVzWzBdID0gdjsgfVxyXG5cclxuICBnZXQgZnJhbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5mcmFtZTsgfVxyXG4gIHNldCBmcmFtZSh2KSB7IHRoaXMudGlja2VyLmZyYW1lID0gdjsgfVxyXG5cclxuICBnZXQgZnBzKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuZnBzOyB9XHJcbiAgc2V0IGZwcyh2KSB7IHRoaXMudGlja2VyLmZwcyA9IHY7IH1cclxuXHJcbiAgZ2V0IGRlbHRhVGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmRlbHRhVGltZTsgfVxyXG5cclxuICBnZXQgZWxhcHNlZFRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5lbGFwc2VkVGltZTsgfVxyXG5cclxuICBnZXQgY3VycmVudFRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5jdXJyZW50VGltZTsgfVxyXG5cclxuICBnZXQgc3RhcnRUaW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuc3RhcnRUaW1lOyB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5PYmplY3QyRFxyXG4gKiBPYmplY3QyRFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuRWxlbWVudFxyXG4gKi9cclxuY2xhc3MgT2JqZWN0MkQgZXh0ZW5kcyBFbGVtZW50IHtcclxuXHJcbiAgLy8gLyoqIOS9jee9riAqL1xyXG4gIC8vIHBvc2l0aW9uOiBudWxsLFxyXG4gIC8vIC8qKiDlm57ou6IgKi9cclxuICAvLyByb3RhdGlvbjogMCxcclxuICAvLyAvKiog44K544Kx44O844OrICovXHJcbiAgLy8gc2NhbGU6IG51bGwsXHJcbiAgLy8gLyoqIOWfuua6luS9jee9riAqL1xyXG4gIC8vIG9yaWdpbjogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgT2JqZWN0MkQuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywgcGhpbmEuYXBwLk9iamVjdDJELmRlZmF1bHRzKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjIob3B0aW9ucy54LCBvcHRpb25zLnkpO1xyXG4gICAgdGhpcy5zY2FsZSAgICA9IG5ldyBWZWN0b3IyKG9wdGlvbnMuc2NhbGVYLCBvcHRpb25zLnNjYWxlWSk7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gb3B0aW9ucy5yb3RhdGlvbjtcclxuICAgIHRoaXMub3JpZ2luICAgPSBuZXcgVmVjdG9yMihvcHRpb25zLm9yaWdpblgsIG9wdGlvbnMub3JpZ2luWSk7XHJcblxyXG4gICAgdGhpcy5fbWF0cml4ID0gbmV3IE1hdHJpeDMzKCkuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gbmV3IE1hdHJpeDMzKCkuaWRlbnRpdHkoKTtcclxuXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9vdmVyRmxhZ3MgPSB7fTtcclxuICAgIHRoaXMuX3RvdWNoRmxhZ3MgPSB7fTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xyXG4gICAgdGhpcy5ib3VuZGluZ1R5cGUgPSBvcHRpb25zLmJvdW5kaW5nVHlwZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeCueOBqOihneeqgeOBl+OBpuOBhOOCi+OBi+OCkuWIpOWumlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBoaXRUZXN0KHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpdFRlc3RSZWN0KHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdjaXJjbGUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpdFRlc3RDaXJjbGUoeCwgeSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gbm9uZSDjga7loLTlkIhcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXRUZXN0UmVjdCh4LCB5KSB7XHJcbiAgICB2YXIgcCA9IHRoaXMuZ2xvYmFsVG9Mb2NhbChuZXcgVmVjdG9yMih4LCB5KSk7XHJcblxyXG4gICAgdmFyIGxlZnQgICA9IC10aGlzLndpZHRoKnRoaXMub3JpZ2luWDtcclxuICAgIHZhciByaWdodCAgPSArdGhpcy53aWR0aCooMS10aGlzLm9yaWdpblgpO1xyXG4gICAgdmFyIHRvcCAgICA9IC10aGlzLmhlaWdodCp0aGlzLm9yaWdpblk7XHJcbiAgICB2YXIgYm90dG9tID0gK3RoaXMuaGVpZ2h0KigxLXRoaXMub3JpZ2luWSk7XHJcblxyXG4gICAgcmV0dXJuICggbGVmdCA8IHAueCAmJiBwLnggPCByaWdodCApICYmICggdG9wICA8IHAueSAmJiBwLnkgPCBib3R0b20gKTtcclxuICB9XHJcblxyXG4gIGhpdFRlc3RDaXJjbGUoeCwgeSkge1xyXG4gICAgLy8g5YaG5Yik5a6aXHJcbiAgICB2YXIgcCA9IHRoaXMuZ2xvYmFsVG9Mb2NhbChuZXcgVmVjdG9yMih4LCB5KSk7XHJcbiAgICBpZiAoKChwLngpKihwLngpKyhwLnkpKihwLnkpKSA8ICh0aGlzLnJhZGl1cyp0aGlzLnJhZGl1cykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOimgee0oOOBqOihneeqgeOBl+OBpuOBhOOCi+OBi+OCkuWIpOWumlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbG1cclxuICAgKi9cclxuICBoaXRUZXN0RWxlbWVudChlbG0pIHtcclxuICAgIHZhciByZWN0MCA9IHRoaXM7XHJcbiAgICB2YXIgcmVjdDEgPSBlbG07XHJcbiAgICByZXR1cm4gKHJlY3QwLmxlZnQgPCByZWN0MS5yaWdodCkgJiYgKHJlY3QwLnJpZ2h0ID4gcmVjdDEubGVmdCkgJiZcclxuICAgICAgICAgICAocmVjdDAudG9wIDwgcmVjdDEuYm90dG9tKSAmJiAocmVjdDAuYm90dG9tID4gcmVjdDEudG9wKTtcclxuICB9XHJcblxyXG5cclxuICBnbG9iYWxUb0xvY2FsKHApIHtcclxuICAgIHZhciBtYXRyaXggPSB0aGlzLl93b3JsZE1hdHJpeC5jbG9uZSgpO1xyXG4gICAgbWF0cml4LmludmVydCgpO1xyXG4gICAgLy8gbWF0cml4LnRyYW5zcG9zZSgpO1xyXG5cclxuICAgIHZhciB0ZW1wID0gbWF0cml4Lm11bHRpcGx5VmVjdG9yMihwKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIHNldEludGVyYWN0aXZlKGZsYWcsIHR5cGUpIHtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmbGFnO1xyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgdGhpcy5ib3VuZGluZ1R5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWCDluqfmqJnlgKTjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqL1xyXG4gIHNldFgoeCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBZIOW6p+aomeWApOOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0WSh5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFhZIOW6p+aomeOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Zue6Lui44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAgICovXHJcbiAgc2V0Um90YXRpb24ocm90YXRpb24pIHtcclxuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K544Kx44O844Or44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIHNldFNjYWxlKHgsIHkpIHtcclxuICAgIHRoaXMuc2NhbGUueCA9IHg7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS55ID0geDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS55ID0geTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDln7rmupbngrnjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0T3JpZ2luKHgsIHkpIHtcclxuICAgIHRoaXMub3JpZ2luLnggPSB4O1xyXG4gICAgdGhpcy5vcmlnaW4ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5bmF44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICovXHJcbiAgc2V0V2lkdGgod2lkdGgpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDpq5jjgZXjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K144Kk44K6KOW5hSwg6auY44GVKeOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0Qm91bmRpbmdUeXBlKHR5cGUpIHtcclxuICAgIHRoaXMuYm91bmRpbmdUeXBlID0gdHlwZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2NhbGNXb3JsZE1hdHJpeCgpIHtcclxuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybiA7XHJcblxyXG4gICAgLy8gY2FjaGUgY2hlY2tcclxuICAgIGlmICh0aGlzLnJvdGF0aW9uICE9IHRoaXMuX2NhY2hlZFJvdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2NhY2hlZFJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbjtcclxuXHJcbiAgICAgIHZhciByID0gdGhpcy5yb3RhdGlvbiooTWF0aC5QSS8xODApO1xyXG4gICAgICB0aGlzLl9zciA9IE1hdGguc2luKHIpO1xyXG4gICAgICB0aGlzLl9jciA9IE1hdGguY29zKHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2NhbCA9IHRoaXMuX21hdHJpeDtcclxuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudC5fd29ybGRNYXRyaXggfHwgTWF0cml4MzMuSURFTlRJVFk7XHJcbiAgICB2YXIgd29ybGQgPSB0aGlzLl93b3JsZE1hdHJpeDtcclxuXHJcbiAgICAvLyDjg63jg7zjgqvjg6vjga7ooYzliJfjgpLoqIjnrpdcclxuICAgIGxvY2FsLm0wMCA9IHRoaXMuX2NyICogdGhpcy5zY2FsZS54O1xyXG4gICAgbG9jYWwubTAxID0tdGhpcy5fc3IgKiB0aGlzLnNjYWxlLnk7XHJcbiAgICBsb2NhbC5tMTAgPSB0aGlzLl9zciAqIHRoaXMuc2NhbGUueDtcclxuICAgIGxvY2FsLm0xMSA9IHRoaXMuX2NyICogdGhpcy5zY2FsZS55O1xyXG4gICAgbG9jYWwubTAyID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgbG9jYWwubTEyID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgIC8vIGNhY2hlXHJcbiAgICB2YXIgYTAwID0gbG9jYWwubTAwOyB2YXIgYTAxID0gbG9jYWwubTAxOyB2YXIgYTAyID0gbG9jYWwubTAyO1xyXG4gICAgdmFyIGExMCA9IGxvY2FsLm0xMDsgdmFyIGExMSA9IGxvY2FsLm0xMTsgdmFyIGExMiA9IGxvY2FsLm0xMjtcclxuICAgIHZhciBiMDAgPSBwYXJlbnQubTAwOyB2YXIgYjAxID0gcGFyZW50Lm0wMTsgdmFyIGIwMiA9IHBhcmVudC5tMDI7XHJcbiAgICB2YXIgYjEwID0gcGFyZW50Lm0xMDsgdmFyIGIxMSA9IHBhcmVudC5tMTE7IHZhciBiMTIgPSBwYXJlbnQubTEyO1xyXG5cclxuICAgIC8vIOimquOBruihjOWIl+OBqOaOm+OBkeWQiOOCj+OBm+OCi1xyXG4gICAgd29ybGQubTAwID0gYjAwICogYTAwICsgYjAxICogYTEwO1xyXG4gICAgd29ybGQubTAxID0gYjAwICogYTAxICsgYjAxICogYTExO1xyXG4gICAgd29ybGQubTAyID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyO1xyXG5cclxuICAgIHdvcmxkLm0xMCA9IGIxMCAqIGEwMCArIGIxMSAqIGExMDtcclxuICAgIHdvcmxkLm0xMSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMTtcclxuICAgIHdvcmxkLm0xMiA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB4XHJcbiAgICogeOW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB4KCkgICB7IHJldHVybiB0aGlzLnBvc2l0aW9uLng7IH1cclxuICBzZXQgeCh2KSAgeyB0aGlzLnBvc2l0aW9uLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB5XHJcbiAgICogeeW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB5KCkgICB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnk7IH1cclxuICBzZXQgeSh2KSAgeyB0aGlzLnBvc2l0aW9uLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBvcmlnaW5YXHJcbiAgICogeOW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCBvcmlnaW5YKCkgICB7IHJldHVybiB0aGlzLm9yaWdpbi54OyB9XHJcbiAgc2V0IG9yaWdpblgodikgIHsgdGhpcy5vcmlnaW4ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIG9yaWdpbllcclxuICAgKiB55bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IG9yaWdpblkoKSAgIHsgcmV0dXJuIHRoaXMub3JpZ2luLnk7IH1cclxuICBzZXQgb3JpZ2luWSh2KSAgeyB0aGlzLm9yaWdpbi55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgc2NhbGVYXHJcbiAgICog44K544Kx44O844OrWOWApFxyXG4gICAqL1xyXG4gIGdldCBzY2FsZVgoKSAgIHsgcmV0dXJuIHRoaXMuc2NhbGUueDsgfVxyXG4gIHNldCBzY2FsZVgodikgIHsgdGhpcy5zY2FsZS54ID0gdjsgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBzY2FsZVlcclxuICAgKiDjgrnjgrHjg7zjg6tZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHNjYWxlWSgpICAgeyByZXR1cm4gdGhpcy5zY2FsZS55OyB9XHJcbiAgc2V0IHNjYWxlWSh2KSAgeyB0aGlzLnNjYWxlLnkgPSB2OyB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHdpZHRoXHJcbiAgICogd2lkdGhcclxuICAgKi9cclxuICBnZXQgd2lkdGgoKSAgIHtcclxuICAgIHJldHVybiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0JykgP1xyXG4gICAgICB0aGlzLl93aWR0aCA6IHRoaXMuX2RpYW1ldGVyO1xyXG4gIH1cclxuICBzZXQgd2lkdGgodikgIHsgdGhpcy5fd2lkdGggPSB2OyB9XHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGhlaWdodFxyXG4gICAqIGhlaWdodFxyXG4gICAqL1xyXG4gIGdldCBoZWlnaHQoKSAgIHtcclxuICAgIHJldHVybiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0JykgP1xyXG4gICAgICB0aGlzLl9oZWlnaHQgOiB0aGlzLl9kaWFtZXRlcjtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2KSAgeyB0aGlzLl9oZWlnaHQgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICByYWRpdXNcclxuICAgKiDljYrlvoRcclxuICAgKi9cclxuICBnZXQgcmFkaXVzKCkgICB7XHJcbiAgICByZXR1cm4gKHRoaXMuYm91bmRpbmdUeXBlID09PSAncmVjdCcpID9cclxuICAgICAgKHRoaXMud2lkdGgrdGhpcy5oZWlnaHQpLzQgOiB0aGlzLl9yYWRpdXM7XHJcbiAgfVxyXG4gIHNldCByYWRpdXModikgIHtcclxuICAgIHRoaXMuX3JhZGl1cyA9IHY7XHJcbiAgICB0aGlzLl9kaWFtZXRlciA9IHYqMjtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHRvcFxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCB0b3AoKSAgIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTsgfVxyXG4gIHNldCB0b3AodikgIHsgdGhpcy55ID0gdiArIHRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgcmlnaHRcclxuICAgKiDlt6ZcclxuICAgKi9cclxuICBnZXQgcmlnaHQoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgqKDEtdGhpcy5vcmlnaW5YKTsgfVxyXG4gIHNldCByaWdodCh2KSAgeyB0aGlzLnggPSB2IC0gdGhpcy53aWR0aCooMS10aGlzLm9yaWdpblgpOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBib3R0b21cclxuICAgKiDlt6ZcclxuICAgKi9cclxuICBnZXQgYm90dG9tKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCooMS10aGlzLm9yaWdpblkpOyB9XHJcbiAgc2V0IGJvdHRvbSh2KSAgeyB0aGlzLnkgPSB2IC0gdGhpcy5oZWlnaHQqKDEtdGhpcy5vcmlnaW5ZKTsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgbGVmdFxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCBsZWZ0KCkgICB7IHJldHVybiB0aGlzLnggLSB0aGlzLndpZHRoKnRoaXMub3JpZ2luWDsgfVxyXG4gIHNldCBsZWZ0KHYpICB7IHRoaXMueCA9IHYgKyB0aGlzLndpZHRoKnRoaXMub3JpZ2luWDsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgY2VudGVyWFxyXG4gICAqIGNlbnRlclhcclxuICAgKi9cclxuICBnZXQgY2VudGVyWCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yIC0gdGhpcy53aWR0aCp0aGlzLm9yaWdpblg7IH1cclxuICBzZXQgY2VudGVyWCh2KSAge1xyXG4gICAgLy8gVE9ETzog44Gp44GG44GX44KI44GG44GL44GqPz9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBjZW50ZXJZXHJcbiAgICogY2VudGVyWVxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJZKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZOyB9XHJcbiAgc2V0IGNlbnRlclkodikgIHtcclxuICAgIC8vIFRPRE86IOOBqeOBhuOBl+OCiOOBhuOBi+OBqj8/XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QyRC5kZWZhdWx0cyA9IHtcclxuICB4OiAwLFxyXG4gIHk6IDAsXHJcbiAgc2NhbGVYOiAxLFxyXG4gIHNjYWxlWTogMSxcclxuICByb3RhdGlvbjogMCxcclxuICBvcmlnaW5YOiAwLjUsXHJcbiAgb3JpZ2luWTogMC41LFxyXG4gIHdpZHRoOiA2NCxcclxuICBoZWlnaHQ6IDY0LFxyXG4gIHJhZGl1czogMzIsXHJcbiAgYm91bmRpbmdUeXBlOiAncmVjdCcsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuRG9tQXBwXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5CYXNlQXBwXHJcbiAqL1xyXG5jbGFzcyBEb21BcHAgZXh0ZW5kcyBCYXNlQXBwIHtcclxuXHJcbiAgLy8gZG9tRWxlbWVudDogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZG9tRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBvcHRpb25zLmRvbUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG9wdGlvbnMucXVlcnkpIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMucXVlcnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KCdlcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZnBzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mcHMgPSBvcHRpb25zLmZwcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYodHlwZW9mIG9wdGlvbnMucnVubmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMudGlja2VyLnJ1bm5lciA9IG9wdGlvbnMucnVubmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW91c2UgPSBuZXcgTW91c2UodGhpcy5kb21FbGVtZW50KTtcclxuICAgIHRoaXMudG91Y2ggPSBuZXcgVG91Y2godGhpcy5kb21FbGVtZW50KTtcclxuICAgIHRoaXMudG91Y2hMaXN0ID0gbmV3IFRvdWNoTGlzdCh0aGlzLmRvbUVsZW1lbnQsIDUpO1xyXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZChkb2N1bWVudCk7XHJcbiAgICAvLyAvLyDliqDpgJ/luqbjgrvjg7PjgrXjg7zjgpLnlJ/miJBcclxuICAgIC8vIHRoaXMuYWNjZWxlcm9tZXRlciA9IHBoaW5hLmlucHV0LkFjY2VsZXJvbWV0ZXIoKTtcclxuXHJcbiAgICAvLyDjg53jgqTjg7Pjgr/jgpLjgrvjg4Pjg4goUEMg44Gn44GvIE1vdXNlLCBNb2JpbGUg44Gn44GvIFRvdWNoKVxyXG4gICAgdGhpcy5wb2ludGVyID0gdGhpcy50b3VjaDtcclxuICAgIHRoaXMucG9pbnRlcnMgPSB0aGlzLnRvdWNoTGlzdC50b3VjaGVzO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucG9pbnRlciA9IHRoaXMudG91Y2g7XHJcbiAgICAgIHRoaXMucG9pbnRlcnMgPSB0aGlzLnRvdWNoTGlzdC50b3VjaGVzO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5wb2ludGVyID0gdGhpcy5tb3VzZTtcclxuICAgICAgdGhpcy5wb2ludGVycyA9IFt0aGlzLm1vdXNlXTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8ga2V5Ym9hcmQgZXZlbnRcclxuICAgIHRoaXMua2V5Ym9hcmQub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lICYmIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdrZXlkb3duJywge1xyXG4gICAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5rZXlib2FyZC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lICYmIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdrZXl1cCcsIHtcclxuICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMua2V5Ym9hcmQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSAmJiB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgna2V5cHJlc3MnLCB7XHJcbiAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gY2xpY2sg5a++5b+cXHJcbiAgICB2YXIgZXZlbnROYW1lID0gcGhpbmEkMS5pc01vYmlsZSgpID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5fY2hlY2tDbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyDmsbrlrprmmYLjga7lh6bnkIbjgpLjgqrjg5XjgavjgZnjgosoaVBob25lIOaZguOBruOBoeOCieOBpOOBjeWvvuetlilcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKSB7IGUuc3RvcCgpOyB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wKCk7IH0pO1xyXG5cclxuICAgIC8vIOOCpuOCo+ODs+ODieOCpuODleOCqeODvOOCq+OCueaZguOCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMslxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5mbGFyZSgnZm9jdXMnKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2ZvY3VzJyk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIC8vIOOCpuOCo+ODs+ODieOCpuODluODqeODvOaZguOCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMslxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdibHVyJyk7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdibHVyJyk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcclxuXHJcbiAgICAvLyDmm7TmlrDplqLmlbDjgpLnmbvpjLJcclxuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5tb3VzZS51cGRhdGUoKTtcclxuICAgICAgdGhpcy50b3VjaC51cGRhdGUoKTtcclxuICAgICAgdGhpcy50b3VjaExpc3QudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jaGVja0NsaWNrKGUpIHtcclxuICAgIHZhciBfY2hlY2sgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcclxuICAgICAgICAgIF9jaGVjayhjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsZW1lbnQuX2NsaWNrZWQgJiYgZWxlbWVudC5oYXMoJ2NsaWNrJykpIHtcclxuICAgICAgICBlbGVtZW50LmZsYXJlKCdjbGljaycpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuX2NsaWNrZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgX2NoZWNrKHRoaXMuY3VycmVudFNjZW5lKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuQ2FudmFzUmVuZGVyZXJcclxuICovXHJcbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHNjZW5lKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xyXG4gICAgaWYgKHNjZW5lLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmNhbnZhcy5jbGVhckNvbG9yKHNjZW5lLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29udGV4dC5zYXZlKCk7XHJcbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHNjZW5lKTtcclxuICAgIHRoaXMuX2NvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2hpbGRyZW4ob2JqKSB7XHJcbiAgICAvLyDlrZDkvpvjgZ/jgaHjgoLlrp/ooYxcclxuICAgIGlmIChvYmouY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGVtcENoaWxkcmVuID0gb2JqLmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgIGZvciAodmFyIGk9MCxsZW49dGVtcENoaWxkcmVuLmxlbmd0aDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck9iamVjdChvYmopIHtcclxuICAgIGlmIChvYmoudmlzaWJsZSA9PT0gZmFsc2UgJiYgIW9iai5pbnRlcmFjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgIG9iai5fY2FsY1dvcmxkTWF0cml4ICYmIG9iai5fY2FsY1dvcmxkTWF0cml4KCk7XHJcblxyXG4gICAgaWYgKG9iai52aXNpYmxlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIG9iai5fY2FsY1dvcmxkQWxwaGEgJiYgb2JqLl9jYWxjV29ybGRBbHBoYSgpO1xyXG5cclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYW52YXMuY29udGV4dDtcclxuXHJcbiAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gb2JqLl93b3JsZEFscGhhO1xyXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBvYmouYmxlbmRNb2RlO1xyXG5cclxuICAgIGlmIChvYmouX3dvcmxkTWF0cml4KSB7XHJcbiAgICAgIC8vIOihjOWIl+OCkuOCu+ODg+ODiFxyXG4gICAgICB2YXIgbSA9IG9iai5fd29ybGRNYXRyaXg7XHJcbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKCBtLm0wMCwgbS5tMTAsIG0ubTAxLCBtLm0xMSwgbS5tMDIsIG0ubTEyICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5jbGlwKSB7XHJcblxyXG4gICAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIG9iai5jbGlwKHRoaXMuY2FudmFzKTtcclxuICAgICAgY29udGV4dC5jbGlwKCk7XHJcblxyXG4gICAgICBpZiAob2JqLmRyYXcpIG9iai5kcmF3KHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIC8vIOWtkOS+m+OBn+OBoeOCguWun+ihjFxyXG4gICAgICBpZiAob2JqLnJlbmRlckNoaWxkQnlTZWxmID09PSBmYWxzZSAmJiBvYmouY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IG9iai5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wQ2hpbGRyZW4ubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJPYmplY3QodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG9iai5kcmF3KSBvYmouZHJhdyh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICAvLyDlrZDkvpvjgZ/jgaHjgoLlrp/ooYxcclxuICAgICAgaWYgKG9iai5yZW5kZXJDaGlsZEJ5U2VsZiA9PT0gZmFsc2UgJiYgb2JqLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgdGVtcENoaWxkcmVuID0gb2JqLmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wQ2hpbGRyZW4ubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlck9iamVjdCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5TY2VuZVxyXG4gKi9cclxuY2xhc3MgRGlzcGxheVNjZW5lIGV4dGVuZHMgU2NlbmUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBEaXNwbGF5U2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIERpc3BsYXlTY2VuZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRTaXplKHBhcmFtcy53aWR0aCwgcGFyYW1zLmhlaWdodCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gKHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3IpID8gcGFyYW1zLmJhY2tncm91bmRDb2xvciA6IG51bGw7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodDtcclxuICAgIHRoaXMuZ3JpZFggPSBuZXcgR3JpZChwYXJhbXMud2lkdGgsIDE2KTtcclxuICAgIHRoaXMuZ3JpZFkgPSBuZXcgR3JpZChwYXJhbXMuaGVpZ2h0LCAxNik7XHJcblxyXG4gICAgLy8gVE9ETzog5LiA5pem44KA44KK44KE44KK5a++5b+cXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUgPSBmdW5jdGlvbihmbGFnKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmbGFnO1xyXG4gICAgfTtcclxuICAgIHRoaXMuX292ZXJGbGFncyA9IHt9O1xyXG4gICAgdGhpcy5fdG91Y2hGbGFncyA9IHt9O1xyXG5cclxuICAgIHZhciBjdHggPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG4gICAgaWYgKHBhcmFtcy5pbWFnZVNtb290aGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBjdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIGN0eC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGl0VGVzdCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbmRlcigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpc3BsYXlTY2VuZS5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogNjQwLFxyXG4gIGhlaWdodDogOTYwLFxyXG4gIGltYWdlU21vb3RoaW5nOiB0cnVlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNhbnZhc0FwcFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRvbUFwcFxyXG4gKi9cclxuY2xhc3MgQ2FudmFzQXBwIGV4dGVuZHMgRG9tQXBwIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoKG9wdGlvbnMgfHwge30pLCBDYW52YXNBcHAuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZShDYW52YXNBcHAuZGVmYXVsdHMpO1xyXG4gICAgXHJcbiAgICBpZiAoIW9wdGlvbnMucXVlcnkgJiYgIW9wdGlvbnMuZG9tRWxlbWVudCkge1xyXG4gICAgICBvcHRpb25zLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvcHRpb25zLmRvbUVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmdyaWRYID0gbmV3IEdyaWQoe1xyXG4gICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgY29sdW1uczogb3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdyaWRZID0gbmV3IEdyaWQoe1xyXG4gICAgICB3aWR0aDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgIGNvbHVtbnM6IG9wdGlvbnMuY29sdW1ucyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0U2l6ZShvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmJhY2tncm91bmRDb2xvciA6ICd3aGl0ZSc7XHJcblxyXG4gICAgdGhpcy5yZXBsYWNlU2NlbmUobmV3IERpc3BsYXlTY2VuZSh7XHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmZpdCkge1xyXG4gICAgICB0aGlzLmZpdFNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLnBpeGVsYXRlZCkge1xyXG4gICAgICAvLyDjg4Hjg6njgaTjgY3pmLLmraJcclxuICAgICAgLy8g44OJ44OD44OI57W144Ky44O844Og44Gu44K144Od44O844OIXHJcbiAgICAgIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtaW1hZ2VzLyN0aGUtaW1hZ2UtcmVuZGVyaW5nXHJcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbWFnZS1yZW5kZXJpbmcjQnJvd3Nlcl9jb21wYXRpYmlsaXR5XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9GaXJlZm94XFwvXFxkKy8pKSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ2NyaXNwLWVkZ2VzJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1c2hTY2VuZSwgcG9wU2NlbmUg5a++562WXHJcbiAgICB0aGlzLm9uKCdwdXNoJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIG9uZW50ZXIg5a++562W44Gn5o+P55S744GX44Gm44GK44GPXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5jYW52YXMpIHtcclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2RyYXcoKSB7XHJcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgdGhpcy5jYW52YXMuY2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5jYW52YXMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuX3JlbmRlcigpO1xyXG5cclxuICAgICAgLy8gdGhpcy5fc2NlbmVzLmVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgdGhpcy5fc2NlbmVzLmZvckVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgICB2YXIgYyA9IHNjZW5lLmNhbnZhcztcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoYy5kb21FbGVtZW50LCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpdFNjcmVlbigpIHtcclxuICAgIHRoaXMuY2FudmFzLmZpdFNjcmVlbigpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpY1xyXG5DYW52YXNBcHAuZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDY0MCxcclxuICBoZWlnaHQ6IDk2MCxcclxuICBjb2x1bW5zOiAxMixcclxuICBmaXQ6IHRydWUsXHJcbiAgYXBwZW5kOiB0cnVlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5PYmplY3QyRFxyXG4gKi9cclxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBPYmplY3QyRCB7XHJcblxyXG4gIC8vIC8qKiDooajnpLrjg5Xjg6njgrAgKi9cclxuICAvLyB2aXNpYmxlOiB0cnVlLFxyXG4gIC8vIC8qKiDjgqLjg6vjg5XjgqEgKi9cclxuICAvLyBhbHBoYTogMS4wLFxyXG4gIC8vIC8qKiDjg5bjg6zjg7Pjg4njg6Ljg7zjg4kgKi9cclxuICAvLyBibGVuZE1vZGU6IFwic291cmNlLW92ZXJcIixcclxuXHJcbiAgLy8gLyoqIOWtkOS+m+OCkiDoh6rliIbjga5DYW52YXNSZW5kZXJlciDjgafmj4/nlLvjgZnjgovjgYsgKi9cclxuICAvLyByZW5kZXJDaGlsZEJ5U2VsZjogZmFsc2UsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgRGlzcGxheUVsZW1lbnQuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudC5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnZpc2libGUgPSAob3B0aW9ucy52aXNpYmxlICE9IG51bGwpID8gb3B0aW9ucy52aXNpYmxlIDogdHJ1ZTtcclxuICAgIHRoaXMuYWxwaGEgPSAob3B0aW9ucy5hbHBoYSAhPSBudWxsKSA/IG9wdGlvbnMuYWxwaGEgOiAxLjA7XHJcbiAgICB0aGlzLmJsZW5kTW9kZSA9IFwic291cmNlLW92ZXJcIjtcclxuICAgIHRoaXMucmVuZGVyQ2hpbGRCeVNlbGYgPSBmYWxzZTtcclxuICAgIHRoaXMuX3dvcmxkQWxwaGEgPSAxLjA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg6vjg5XjgqHlgKTjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRBbHBoYShhbHBoYSkge1xyXG4gICAgdGhpcy5hbHBoYSA9IGFscGhhO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooajnpLov6Z2e6KGo56S644KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0VmlzaWJsZShmbGFnKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmbGFnO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooajnpLpcclxuICAgKi9cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Z2e6KGo56S6XHJcbiAgICovXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9jYWxjV29ybGRBbHBoYSgpIHtcclxuICAgIGlmICh0aGlzLmFscGhhIDwgMCkge1xyXG4gICAgICB0aGlzLl93b3JsZEFscGhhID0gMDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkge1xyXG4gICAgICB0aGlzLl93b3JsZEFscGhhID0gdGhpcy5hbHBoYTtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgd29ybGRBbHBoYSA9ICh0aGlzLnBhcmVudC5fd29ybGRBbHBoYSAhPT0gdW5kZWZpbmVkKSA/IHRoaXMucGFyZW50Ll93b3JsZEFscGhhIDogMS4wO1xyXG4gICAgICAvLyBhbHBoYVxyXG4gICAgICB0aGlzLl93b3JsZEFscGhhID0gd29ybGRBbHBoYSAqIHRoaXMuYWxwaGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRGlzcGxheUVsZW1lbnQuZGVmYXVsdHMgPSB7XHJcbiAgYWxwaGE6IDEuMCxcclxuICB2aXNpYmxlOiB0cnVlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Bc3NldE1hbmFnZXJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBBc3NldE1hbmFnZXIge1xyXG5cclxuICBzdGF0aWMgZ2V0KHR5cGUsIGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzZXRzW3R5cGVdICYmIHRoaXMuYXNzZXRzW3R5cGVdW2tleV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0KHR5cGUsIGtleSwgYXNzZXQpIHtcclxuICAgIGlmICghdGhpcy5hc3NldHNbdHlwZV0pIHtcclxuICAgICAgdGhpcy5hc3NldHNbdHlwZV0gPSB7fTtcclxuICAgIH1cclxuICAgIHRoaXMuYXNzZXRzW3R5cGVdW2tleV0gPSBhc3NldDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250YWlucyh0eXBlLCBrZXkpIHtcclxuICAgIHJldHVybiA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQXNzZXRNYW5hZ2VyLmFzc2V0cyA9IHtcclxuICBpbWFnZToge30sXHJcbiAgc291bmQ6IHt9LFxyXG4gIHNwcml0ZXNoZWV0OiB7fSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5TcHJpdGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIGV4dGVuZHMgRGlzcGxheUVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnNyY1JlY3QgPSBuZXcgUmVjdCgpO1xyXG4gICAgdGhpcy5zZXRJbWFnZShpbWFnZSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZS5kb21FbGVtZW50O1xyXG5cclxuICAgIC8vIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgIC8vICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgIC8vICAgLXRoaXMud2lkdGgqdGhpcy5vcmlnaW4ueCwgLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgdmFyIHNyY1JlY3QgPSB0aGlzLnNyY1JlY3Q7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAgIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCxcclxuICAgICAgLXRoaXMuX3dpZHRoKnRoaXMub3JpZ2luWCwgLXRoaXMuX2hlaWdodCp0aGlzLm9yaWdpblksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHRcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHNldEltYWdlKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpbWFnZSA9IEFzc2V0TWFuYWdlci5nZXQoJ2ltYWdlJywgaW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faW1hZ2UgPSBpbWFnZTtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLl9pbWFnZS5kb21FbGVtZW50LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLl9pbWFnZS5kb21FbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICBpZiAod2lkdGgpIHsgdGhpcy53aWR0aCA9IHdpZHRoOyB9XHJcbiAgICBpZiAoaGVpZ2h0KSB7IHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyB9XHJcblxyXG4gICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEZyYW1lSW5kZXgoaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciB0dyAgPSB3aWR0aCB8fCB0aGlzLl93aWR0aDsgICAgICAvLyB0d1xyXG4gICAgdmFyIHRoICA9IGhlaWdodCB8fCB0aGlzLl9oZWlnaHQ7ICAgIC8vIHRoXHJcbiAgICB2YXIgcm93ID0gfn4odGhpcy5pbWFnZS5kb21FbGVtZW50LndpZHRoIC8gdHcpO1xyXG4gICAgdmFyIGNvbCA9IH5+KHRoaXMuaW1hZ2UuZG9tRWxlbWVudC5oZWlnaHQgLyB0aCk7XHJcbiAgICB2YXIgbWF4SW5kZXggPSByb3cqY29sO1xyXG4gICAgaW5kZXggPSBpbmRleCVtYXhJbmRleDtcclxuICAgIFxyXG4gICAgdmFyIHggPSBpbmRleCVyb3c7XHJcbiAgICB2YXIgeSA9IH5+KGluZGV4L3Jvdyk7XHJcbiAgICB0aGlzLnNyY1JlY3QueCA9IHgqdHc7XHJcbiAgICB0aGlzLnNyY1JlY3QueSA9IHkqdGg7XHJcbiAgICB0aGlzLnNyY1JlY3Qud2lkdGggID0gdHc7XHJcbiAgICB0aGlzLnNyY1JlY3QuaGVpZ2h0ID0gdGg7XHJcblxyXG4gICAgdGhpcy5fZnJhbWVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGltYWdlKCkge3JldHVybiB0aGlzLl9pbWFnZTt9XHJcbiAgc2V0IGltYWdlKHYpIHtcclxuICAgIHRoaXMuc2V0SW1hZ2Uodik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBmcmFtZUluZGV4KCkge3JldHVybiB0aGlzLl9mcmFtZUluZGV4O31cclxuICBzZXQgZnJhbWVJbmRleChpZHgpIHtcclxuICAgIHRoaXMuc2V0RnJhbWVJbmRleChpZHgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUGxhaW5FbGVtZW50XHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICovXHJcbmNsYXNzIFBsYWluRWxlbWVudCBleHRlbmRzIERpc3BsYXlFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHRoaXMuY2FudmFzLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgdyA9IGltYWdlLndpZHRoO1xyXG4gICAgdmFyIGggPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIHggPSAtdyp0aGlzLm9yaWdpbi54O1xyXG4gICAgdmFyIHkgPSAtaCp0aGlzLm9yaWdpbi55O1xyXG5cclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgMCwgMCwgdywgaCxcclxuICAgICAgeCwgeSwgdywgaFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkxheWVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICovXHJcbmNsYXNzIExheWVyIGV4dGVuZHMgRGlzcGxheUVsZW1lbnQge1xyXG5cclxuICAvKiog5a2Q5L6b44KSIOiHquWIhuOBriBDYW52YXNSZW5kZXJlciDjgafmj4/nlLvjgZnjgovjgYsgKi9cclxuICAvLyByZW5kZXJDaGlsZEJ5U2VsZjogdHJ1ZSxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zLCB7XHJcbiAgICAgIHdpZHRoOiA2NDAsXHJcbiAgICAgIGhlaWdodDogOTYwLFxyXG4gICAgfSk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMuZ3JpZFggPSBuZXcgR3JpZChvcHRpb25zLndpZHRoLCAxNik7XHJcbiAgICB0aGlzLmdyaWRZID0gbmV3IEdyaWQob3B0aW9ucy5oZWlnaHQsIDE2KTtcclxuICAgIHRoaXMucmVuZGVyQ2hpbGRCeVNlbGYgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIGlmICghdGhpcy5kb21FbGVtZW50KSByZXR1cm4gO1xyXG5cclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgICAgLXRoaXMud2lkdGgqdGhpcy5vcmlnaW5YLCAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DYW52YXNMYXllclxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkxheWVyXHJcbiAqL1xyXG5jbGFzcyBDYW52YXNMYXllciBleHRlbmRzIExheWVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoICA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY2FudmFzLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGVtcCA9IHRoaXMuX3dvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeCA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMpO1xyXG4gICAgICB0aGlzLl93b3JsZE1hdHJpeCA9IHRlbXA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAgIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsXHJcbiAgICAgIC10aGlzLndpZHRoKnRoaXMub3JpZ2luWCwgLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuVGhyZWVMYXllclxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkxheWVyXHJcbiAqL1xyXG5jbGFzcyBUaHJlZUxheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG5cclxuICAvLyBzY2VuZTogbnVsbCxcclxuICAvLyBjYW1lcmE6IG51bGwsXHJcbiAgLy8gbGlnaHQ6IG51bGwsXHJcbiAgLy8gcmVuZGVyZXI6IG51bGwsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIG9wdGlvbnMud2lkdGggLyBvcHRpb25zLmhlaWdodCwgMSwgMTAwMDAgKTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xyXG5cclxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDEgKTtcclxuICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KCAxLCAxLCAxICkubm9ybWFsaXplKCk7XHJcbiAgICB0aGlzLnNjZW5lLmFkZCggdGhpcy5saWdodCApO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweGYwZjBmMCApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCApO1xyXG5cclxuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5QbGFpbkVsZW1lbnRcclxuICovXHJcbmNsYXNzIFNoYXBlIGV4dGVuZHMgUGxhaW5FbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5TaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuZmlsbCA9IG9wdGlvbnMuZmlsbDtcclxuICAgIHRoaXMuc3Ryb2tlID0gb3B0aW9ucy5zdHJva2U7XHJcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gb3B0aW9ucy5zdHJva2VXaWR0aDtcclxuICAgIHRoaXMubGluZUNhcCA9IG9wdGlvbnMubGluZUNhcDtcclxuICAgIHRoaXMubGluZUpvaW4gPSBvcHRpb25zLmxpbmVKb2luO1xyXG5cclxuICAgIHRoaXMuc2hhZG93ID0gb3B0aW9ucy5zaGFkb3c7XHJcbiAgICB0aGlzLnNoYWRvd0JsdXIgPSBvcHRpb25zLnNoYWRvd0JsdXI7XHJcblxyXG4gICAgdGhpcy53YXRjaERyYXcgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICB2YXIgY2hlY2tSZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gcmVuZGVyXHJcbiAgICAgIGlmICh0aGlzLndhdGNoRHJhdyAmJiB0aGlzLl9kaXJ0eURyYXcgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5fZGlydHlEcmF3ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGNoZWNrUmVuZGVyKTtcclxuICAgIHRoaXMub24oJ2FkZGVkJywgY2hlY2tSZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNTaXplICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNhbGNDYW52YXNXaWR0aCgpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY2FsY0NhbnZhc0hlaWdodCgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlzU3Ryb2thYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlICYmIDAgPCB0aGlzLnN0cm9rZVdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHZpcnR1YWxcclxuICAgKiBAcGFyYW0gIHtwaGluYS5ncmFwaGljcy5DYW52YXN9IGNhbnZhcyBcclxuICAgKiBAcmV0dXJuIHthbnl9XHJcbiAgICovXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB2aXJ0dWFsXHJcbiAgICogQHBhcmFtICB7cGhpbmEuZ3JhcGhpY3MuQ2FudmFzfSBjYW52YXMgXHJcbiAgICogQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG4gIHBvc3RyZW5kZXIoY2FudmFzKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsbChjYW52YXMpIHtcclxuICAgIGNhbnZhcy5maWxsKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgLy8g44Oq44K144Kk44K6XHJcbiAgICB2YXIgc2l6ZSA9IHRoaXMuY2FsY0NhbnZhc1NpemUoKTtcclxuICAgIGNhbnZhcy5zZXRTaXplKHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuICAgIC8vIOOCr+ODquOCouOCq+ODqeODvFxyXG4gICAgY2FudmFzLmNsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgLy8g5Lit5b+D44Gr5bqn5qiZ44KS56e75YuVXHJcbiAgICBjYW52YXMudHJhbnNmb3JtQ2VudGVyKCk7XHJcblxyXG4gICAgLy8g5o+P55S75YmN5Yem55CGXHJcbiAgICB0aGlzLnByZXJlbmRlcih0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgLy8g44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICBpZiAodGhpcy5pc1N0cm9rYWJsZSgpKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcclxuICAgICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZVdpZHRoO1xyXG4gICAgICBjb250ZXh0LmxpbmVDYXAgPSB0aGlzLmxpbmVDYXA7XHJcbiAgICAgIGNvbnRleHQubGluZUpvaW4gPSB0aGlzLmxpbmVKb2luO1xyXG4gICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSAwO1xyXG4gICAgICB0aGlzLnJlbmRlclN0cm9rZShjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWhl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAgaWYgKHRoaXMuZmlsbCkge1xyXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbDtcclxuXHJcbiAgICAgIC8vIHNoYWRvdyDjga4gb24vb2ZmXHJcbiAgICAgIGlmICh0aGlzLnNoYWRvdykge1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvdztcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSB0aGlzLnNoYWRvd0JsdXI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZW5kZXJGaWxsKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5o+P55S75b6M5Yem55CGXHJcbiAgICB0aGlzLnBvc3RyZW5kZXIodGhpcy5jYW52YXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdhdGNoUmVuZGVyUHJvcGVydHkoa2V5KSB7XHJcbiAgICAvLyB0aGlzLnByb3RvdHlwZS4kd2F0Y2goa2V5LCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgJHdhdGNoLmNhbGwodGhpcy5wcm90b3R5cGUsIGtleSwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XHJcbiAgICAgICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd2F0Y2hSZW5kZXJQcm9wZXJ0aWVzKGtleXMpIHtcclxuICAgIHZhciB3YXRjaFJlbmRlclByb3BlcnR5ID0gdGhpcy53YXRjaFJlbmRlclByb3BlcnR5IHx8IFNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHk7XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgIHdhdGNoUmVuZGVyUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiA2NCxcclxuICBoZWlnaHQ6IDY0LFxyXG4gIHBhZGRpbmc6IDgsXHJcblxyXG4gIGJhY2tncm91bmRDb2xvcjogJyNhYWEnLFxyXG4gIGZpbGw6ICcjMDBhJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuICBsaW5lQ2FwOiAncm91bmQnLFxyXG4gIGxpbmVKb2luOiAncm91bmQnLFxyXG5cclxuICBzaGFkb3c6IGZhbHNlLFxyXG4gIHNoYWRvd0JsdXI6IDQsXHJcbn07XHJcblxyXG4vLyBfZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnRpZXMoW1xyXG4gICd3aWR0aCcsXHJcbiAgJ2hlaWdodCcsXHJcbiAgJ3JhZGl1cycsXHJcbiAgJ3BhZGRpbmcnLFxyXG4gICdiYWNrZ3JvdW5kQ29sb3InLFxyXG4gICdmaWxsJyxcclxuICAnc3Ryb2tlJyxcclxuICAnc3Ryb2tlV2lkdGgnLFxyXG4gICdsaW5lQ2FwJyxcclxuICAnbGluZUpvaW4nLFxyXG4gICdzaGFkb3cnLFxyXG4gICdzaGFkb3dCbHVyJyxcclxuXSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlJlY3RhbmdsZVNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFJlY3RhbmdsZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlJlY3RhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgUmVjdGFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gb3B0aW9ucy5jb3JuZXJSYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucm91bmRSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb3JuZXJSYWRpdXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5SZWN0YW5nbGVTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ2JsdWUnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIGNvcm5lclJhZGl1czogMCxcclxufTtcclxuXHJcbi8vIF9kZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChSZWN0YW5nbGVTaGFwZSwgJ2Nvcm5lclJhZGl1cycpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DaXJjbGVTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBDaXJjbGVTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5DaXJjbGVTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIENpcmNsZVNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuY2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuQ2lyY2xlU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdyZWQnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIHJhZGl1czogMzIsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlRyaWFuZ2xlU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgVHJpYW5nbGVTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5UcmlhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgVHJpYW5nbGVTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnBvbHlnb24oMCwgMCwgdGhpcy5yYWRpdXMsIDMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5UcmlhbmdsZVNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnZ3JlZW4nLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG5cclxuICByYWRpdXM6IDMyLFxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5TdGFyU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgU3RhclNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlN0YXJTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFN0YXJTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gICAgdGhpcy5zaWRlcyA9IG9wdGlvbnMuc2lkZXM7XHJcbiAgICB0aGlzLnNpZGVJbmRlbnQgPSBvcHRpb25zLnNpZGVJbmRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuc3RhcigwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5zaWRlcywgdGhpcy5zaWRlSW5kZW50KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuU3RhclNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAneWVsbG93JyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxuICBzaWRlczogNSxcclxuICBzaWRlSW5kZW50OiAwLjM4LFxyXG59O1xyXG5cclxuLy8gX2RlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFN0YXJTaGFwZSwgJ3NpZGVzJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChTdGFyU2hhcGUsICdzaWRlSW5kZW50Jyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlBvbHlnb25TaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBQb2x5Z29uU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuUG9seWdvblNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgUG9seWdvblNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgICB0aGlzLnNpZGVzID0gb3B0aW9ucy5zaWRlcztcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5wb2x5Z29uKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnNpZGVzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuUG9seWdvblNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnY3lhbicsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbiAgc2lkZXM6IDUsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChQb2x5Z29uU2hhcGUsICdzaWRlcycpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5IZWFydFNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIEhlYXJ0U2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuSGVhcnRTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIEhlYXJ0U2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICAgIHRoaXMuY29ybmVyQW5nbGUgPSBvcHRpb25zLmNvcm5lckFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmhlYXJ0KDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLmNvcm5lckFuZ2xlKTtcclxuICB9XHJcblxyXG59XHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5IZWFydFNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAncGluaycsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbiAgY29ybmVyQW5nbGU6IDQ1LFxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoSGVhcnRTaGFwZSwgJ2Nvcm5lckFuZ2xlJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlBhdGhTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBQYXRoU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcbiAgLy8gcGF0aHM6IG51bGwsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuUGF0aFNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgUGF0aFNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMucGF0aHMgPSBvcHRpb25zLnBhdGhzIHx8IFtdO1xyXG4gICAgdGhpcy5saW5lSm9pbiA9IG9wdGlvbnMubGluZUpvaW47XHJcbiAgICB0aGlzLmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXA7XHJcbiAgfVxyXG5cclxuICBzZXRQYXRocyAocGF0aHMpIHtcclxuICAgIHRoaXMucGF0aHMgPSBwYXRocztcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsZWFyICgpIHtcclxuICAgIHRoaXMucGF0aHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZFBhdGhzIChwYXRocykge1xyXG4gICAgW10ucHVzaC5hcHBseSh0aGlzLnBhdGhzLCBwYXRocyk7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRQYXRoICh4LCB5KSB7XHJcbiAgICB0aGlzLnBhdGhzLnB1c2gocGhpbmEuZ2VvbS5WZWN0b3IyKHgsIHkpKTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldFBhdGggKGkpIHtcclxuICAgIHJldHVybiB0aGlzLnBhdGhzW2ldO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF0aHMgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGF0aHM7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXRoIChpLCB4LCB5KSB7XHJcbiAgICB0aGlzLnBhdGhzW2ldLnNldCh4LCB5KTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNTaXplICgpIHtcclxuICAgIHZhciBwYXRocyA9IHRoaXMucGF0aHM7XHJcbiAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHRoaXMucGFkZGluZyAqIDIsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMucGFkZGluZyAqIDIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgbWF4WCA9IC1JbmZpbml0eTtcclxuICAgIHZhciBtYXhZID0gLUluZmluaXR5O1xyXG4gICAgdmFyIG1pblggPSBJbmZpbml0eTtcclxuICAgIHZhciBtaW5ZID0gSW5maW5pdHk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdGhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIHZhciBwYXRoID0gcGF0aHNbaV07XHJcbiAgICAgIGlmIChtYXhYIDwgcGF0aC54KSB7IG1heFggPSBwYXRoLng7IH1cclxuICAgICAgaWYgKG1pblggPiBwYXRoLngpIHsgbWluWCA9IHBhdGgueDsgfVxyXG4gICAgICBpZiAobWF4WSA8IHBhdGgueSkgeyBtYXhZID0gcGF0aC55OyB9XHJcbiAgICAgIGlmIChtaW5ZID4gcGF0aC55KSB7IG1pblkgPSBwYXRoLnk7IH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiBNYXRoLm1heChNYXRoLmFicyhtYXhYKSwgTWF0aC5hYnMobWluWCkpICogMiArIHRoaXMucGFkZGluZyAqIDIsXHJcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoTWF0aC5hYnMobWF4WSksIE1hdGguYWJzKG1pblkpKSAqIDIgKyB0aGlzLnBhZGRpbmcgKiAyLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxjQ2FudmFzU2l6ZSgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxjQ2FudmFzU2l6ZSgpLmhlaWdodDtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlciAoY2FudmFzKSB7XHJcbiAgICB2YXIgcGF0aHMgPSB0aGlzLnBhdGhzO1xyXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFyIGMgPSBjYW52YXMuY29udGV4dDtcclxuICAgICAgdmFyIHAgPSBwYXRoc1swXTtcclxuICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgYy5tb3ZlVG8ocC54LCBwLnkpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcGF0aHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICBwID0gcGF0aHNbaV07XHJcbiAgICAgICAgYy5saW5lVG8ocC54LCBwLnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblBhdGhTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBmaWxsOiBmYWxzZSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuTGFiZWxcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgTGFiZWwgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICBvcHRpb25zID0geyB0ZXh0OiBhcmd1bWVudHNbMF0sIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIExhYmVsLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHBoaW5hLmRpc3BsYXkuTGFiZWwuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgIHRoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xyXG4gICAgdGhpcy5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0O1xyXG4gICAgdGhpcy5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5O1xyXG4gICAgdGhpcy5hbGlnbiA9IG9wdGlvbnMuYWxpZ247XHJcbiAgICB0aGlzLmJhc2VsaW5lID0gb3B0aW9ucy5iYXNlbGluZTtcclxuICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodDtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCgpIHtcclxuICAgIHZhciB3aWR0aCA9IDA7XHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XHJcbiAgICBjYW52YXMuY29udGV4dC5mb250ID0gdGhpcy5mb250O1xyXG4gICAgdGhpcy5fbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XHJcbiAgICAgIHZhciB3ID0gY2FudmFzLmNvbnRleHQubWVhc3VyZVRleHQobGluZSkud2lkdGg7XHJcbiAgICAgIGlmICh3aWR0aCA8IHcpIHtcclxuICAgICAgICB3aWR0aCA9IHc7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMpO1xyXG4gICAgaWYgKHRoaXMuYWxpZ24gIT09ICdjZW50ZXInKSB3aWR0aCo9MjtcclxuXHJcbiAgICByZXR1cm4gd2lkdGggKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQoKSB7XHJcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5mb250U2l6ZSAqIHRoaXMuX2xpbmVzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmJhc2VsaW5lICE9PSAnbWlkZGxlJykgaGVpZ2h0Kj0yO1xyXG4gICAgcmV0dXJuIGhlaWdodCp0aGlzLmxpbmVIZWlnaHQgKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9IHRoaXMuYWxpZ247XHJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRoaXMuYmFzZWxpbmU7XHJcblxyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5fbGluZXM7XHJcbiAgICB0aGlzLmxpbmVTaXplID0gdGhpcy5mb250U2l6ZSp0aGlzLmxpbmVIZWlnaHQ7XHJcbiAgICB0aGlzLl9vZmZzZXQgPSAtTWF0aC5mbG9vcihsaW5lcy5sZW5ndGgvMikqdGhpcy5saW5lU2l6ZTtcclxuICAgIHRoaXMuX29mZnNldCArPSAoKGxpbmVzLmxlbmd0aCsxKSUyKSAqICh0aGlzLmxpbmVTaXplLzIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsbChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB0aGlzLl9saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUsIGkpIHtcclxuICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCAwLCBpKnRoaXMubGluZVNpemUrdGhpcy5fb2Zmc2V0KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Ryb2tlKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHRoaXMuX2xpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVRleHQobGluZSwgMCwgaSp0aGlzLmxpbmVTaXplK3RoaXMuX29mZnNldCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRleHRcclxuICAgKi9cclxuICBnZXQgdGV4dCgpIHsgcmV0dXJuIHRoaXMuX3RleHQ7IH1cclxuICBzZXQgdGV4dCh2KSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdjtcclxuICAgIHRoaXMuX2xpbmVzID0gKHRoaXMudGV4dCArICcnKS5zcGxpdCgnXFxuJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9udCgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIsIHRoaXMpO1xyXG4gICAgLy8gcmV0dXJuIFwie2ZvbnRXZWlnaHR9IHtmb250U2l6ZX1weCB7Zm9udEZhbWlseX1cIi5mb3JtYXQodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkxhYmVsLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuXHJcbiAgZmlsbDogJ2JsYWNrJyxcclxuICBzdHJva2U6IG51bGwsXHJcbiAgc3Ryb2tlV2lkdGg6IDIsXHJcblxyXG4gIC8vIFxyXG4gIHRleHQ6ICdIZWxsbywgd29ybGQhJyxcclxuICAvLyBcclxuICBmb250U2l6ZTogMzIsXHJcbiAgZm9udFdlaWdodDogJycsXHJcbiAgZm9udEZhbWlseTogXCInSGlyYUtha3VQcm9OLVczJ1wiLCAvLyBIaXJhZ2lubyBvciBIZWx2ZXRpY2EsXHJcbiAgLy8gXHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIGJhc2VsaW5lOiAnbWlkZGxlJyxcclxuICBsaW5lSGVpZ2h0OiAxLjIsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ3RleHQnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnZm9udFNpemUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnZm9udFdlaWdodCcpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdmb250RmFtaWx5Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2FsaWduJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2Jhc2VsaW5lJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2xpbmVIZWlnaHQnKTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkZyYW1lQW5pbWF0aW9uXHJcbiAqIEZyYW1lQW5pbWF0aW9uXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIEZyYW1lQW5pbWF0aW9uIGV4dGVuZHMgQWNjZXNzb3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3MpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zcyA9IEFzc2V0TWFuYWdlci5nZXQoJ3Nwcml0ZXNoZWV0Jywgc3MpO1xyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5maXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm4gO1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRBbmltYXRpb24pIHJldHVybiA7XHJcblxyXG4gICAgaWYgKHRoaXMuZmluaXNoZWQpIHtcclxuICAgICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuXHJcbiAgICArK3RoaXMuZnJhbWU7XHJcbiAgICBpZiAodGhpcy5mcmFtZSV0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJlcXVlbmN5ID09PSAwKSB7XHJcbiAgICAgICsrdGhpcy5jdXJyZW50RnJhbWVJbmRleDtcclxuICAgICAgdGhpcy5fdXBkYXRlRnJhbWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvdG9BbmRQbGF5KG5hbWUsIGtlZXApIHtcclxuICAgIGtlZXAgPSAoa2VlcCAhPT0gdW5kZWZpbmVkKSA/IGtlZXAgOiB0cnVlO1xyXG4gICAgaWYgKGtlZXAgJiYgbmFtZSA9PT0gdGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZVxyXG4gICAgICAgICAgICAgJiYgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA8IHRoaXMuY3VycmVudEFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAmJiAhdGhpcy5wYXVzZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25OYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLnNzLmdldEFuaW1hdGlvbihuYW1lKTtcclxuICAgIHRoaXMuX3VwZGF0ZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdvdG9BbmRTdG9wKG5hbWUpIHtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuc3MuZ2V0QW5pbWF0aW9uKG5hbWUpO1xyXG4gICAgdGhpcy5fdXBkYXRlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlRnJhbWUoKSB7XHJcbiAgICB2YXIgYW5pbSA9IHRoaXMuY3VycmVudEFuaW1hdGlvbjtcclxuICAgIGlmIChhbmltKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID49IGFuaW0uZnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChhbmltLm5leHQpIHtcclxuICAgICAgICAgIHRoaXMuZ290b0FuZFBsYXkoYW5pbS5uZXh0KTtcclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGFuaW0uZnJhbWVzW3RoaXMuY3VycmVudEZyYW1lSW5kZXhdO1xyXG4gICAgdmFyIGZyYW1lID0gdGhpcy5zcy5nZXRGcmFtZShpbmRleCk7XHJcbiAgICB0aGlzLnRhcmdldC5zcmNSZWN0LnNldChmcmFtZS54LCBmcmFtZS55LCBmcmFtZS53aWR0aCwgZnJhbWUuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy5maXQpIHtcclxuICAgICAgdGhpcy50YXJnZXQud2lkdGggPSBmcmFtZS53aWR0aDtcclxuICAgICAgdGhpcy50YXJnZXQuaGVpZ2h0ID0gZnJhbWUuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkRyYWdnYWJsZVxyXG4gKiBEcmFnZ2FibGVcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgQWNjZXNzb3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5vbignYXR0YWNoZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy50YXJnZXQuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLl9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50c3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKERyYWdnYWJsZS5fbG9jaykgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNlbGYuaW5pdGlhbFBvc2l0aW9uLnggPSB0aGlzLng7XHJcbiAgICAgICAgc2VsZi5pbml0aWFsUG9zaXRpb24ueSA9IHRoaXMueTtcclxuICAgICAgICBzZWxmLmZsYXJlKCdkcmFnc3RhcnQnKTtcclxuICAgICAgICB0aGlzLmZsYXJlKCdkcmFnc3RhcnQnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgdGhpcy54ICs9IGUucG9pbnRlci5keDtcclxuICAgICAgICB0aGlzLnkgKz0gZS5wb2ludGVyLmR5O1xyXG4gICAgICAgIHNlbGYuZmxhcmUoJ2RyYWcnKTtcclxuICAgICAgICB0aGlzLmZsYXJlKCdkcmFnJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZHJhZ2dpbmcpIHJldHVybiA7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc2VsZi5mbGFyZSgnZHJhZ2VuZCcpO1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2RyYWdlbmQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJhY2sodGltZSwgZWFzaW5nKSB7XHJcbiAgICBpZiAodGltZSkge1xyXG4gICAgICB2YXIgdCA9IHRoaXMudGFyZ2V0O1xyXG4gICAgICB0LnNldEludGVyYWN0aXZlKGZhbHNlKTtcclxuICAgICAgdmFyIHR3ZWVuZXIgPSBuZXcgVHdlZW5lcigpLmF0dGFjaFRvKHQpO1xyXG4gICAgICB0d2VlbmVyXHJcbiAgICAgICAgLnRvKHtcclxuICAgICAgICAgIHg6IHRoaXMuaW5pdGlhbFBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiB0aGlzLmluaXRpYWxQb3NpdGlvbi55LFxyXG4gICAgICAgIH0sIHRpbWUsIGVhc2luZyB8fCAnZWFzZU91dEVsYXN0aWMnKVxyXG4gICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdHdlZW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICB0LnNldEludGVyYWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5mbGFyZSgnYmFja2VuZCcpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnggPSB0aGlzLmluaXRpYWxQb3NpdGlvbi54O1xyXG4gICAgICB0aGlzLnRhcmdldC55ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueTtcclxuICAgICAgdGhpcy5mbGFyZSgnYmFja2VuZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2NrKCkge1xyXG4gICAgdGhpcy5fbG9jayA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdW5sb2NrKCkge1xyXG4gICAgdGhpcy5fbG9jayA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRyYWdnYWJsZS5fbG9jayA9IGZhbHNlO1xyXG5cclxuLy8g5ZG844Gz5Ye644GX44Gn5ouh5by144GZ44KL77yfIFR3ZWVuZXLjga9FbGVtZW505YG044Gn5a6a576pXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS5nZXR0ZXIoJ2RyYWdnYWJsZScsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmICghdGhpcy5fZHJhZ2dhYmxlKSB7XHJcbi8vICAgICB0aGlzLl9kcmFnZ2FibGUgPSBwaGluYS5hY2Nlc3NvcnkuRHJhZ2dhYmxlKCkuYXR0YWNoVG8odGhpcyk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGU7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuRmxpY2thYmxlXHJcbiAqIEZsaWNrYWJsZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBGbGlja2FibGUgZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMC45O1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICB0aGlzLmhvcml6b250YWwgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2FjaGVMaXN0ID0gW107XHJcblxyXG4gICAgdGhpcy5vbignYXR0YWNoZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy50YXJnZXQuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzZWxmLmluaXRpYWxQb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIHNlbGYudmVsb2NpdHkuc2V0KDAsIDApO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50c3RheScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICB0aGlzLnggKz0gZS5wb2ludGVyLmR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgdGhpcy55ICs9IGUucG9pbnRlci5keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLmNhY2hlTGlzdC5sZW5ndGggPiAzKSBzZWxmLmNhY2hlTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIHNlbGYuY2FjaGVMaXN0LnB1c2goZS5wb2ludGVyLmRlbHRhUG9zaXRpb24uY2xvbmUoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vIOWLleOBjeOBruOBguOCiyBkZWx0YSBwb3NpdGlvbiDjgpLlvozjgo3jgYvjgonmpJzntKLjgIBcclxuICAgICAgICB2YXIgZGVsdGEgPSBzZWxmLmNhY2hlTGlzdC5yZXZlcnNlKCkuZmluZChmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICByZXR1cm4gdi5sZW5ndGhTcXVhcmVkKCkgPiAxMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjbGVhci5jYWxsKHNlbGYuY2FjaGVMaXN0KTtcclxuICAgICAgICAvLyBzZWxmLmNhY2hlTGlzdC5jbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgIHNlbGYudmVsb2NpdHkueCA9IGRlbHRhLng7XHJcbiAgICAgICAgICBzZWxmLnZlbG9jaXR5LnkgPSBkZWx0YS55O1xyXG5cclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2ZsaWNrc3RhcnQnLCB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGVsdGEubm9ybWFsaXplKCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdmbGlja2NhbmNlbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2VsZi5mbGFyZSgnZmxpY2snKTtcclxuICAgICAgICAvLyBzZWxmLmZsYXJlKCdmbGlja2VuZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuIDtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5mcmljdGlvbjtcclxuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmZyaWN0aW9uO1xyXG5cclxuICAgIGlmICh0aGlzLmhvcml6b250YWwpIHtcclxuICAgICAgdGhpcy50YXJnZXQucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMudGFyZ2V0LnggPSB0aGlzLmluaXRpYWxQb3NpdGlvbi54O1xyXG4gICAgdGhpcy50YXJnZXQueSA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLnk7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldCgwLCAwKTtcclxuXHJcbiAgICAvLyBUT0RPOiBcclxuICAgIC8vIHRoaXMuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG4gICAgLy8gdGhpcy50d2VlbmVyLmNsZWFyKClcclxuICAgIC8vICAgICAubW92ZSh0aGlzLmluaXRpYWxYLCB0aGlzLmluaXRpYWxZLCA1MDAsIFwiZWFzZU91dEVsYXN0aWNcIilcclxuICAgIC8vICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyZSh0bS5ldmVudC5FdmVudChcImJhY2tlbmRcIikpO1xyXG4gICAgLy8gICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIFRPRE86IEVsZW1lbnTlgbTjgaflkbzjgbbvvJ9cclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcignZmxpY2thYmxlJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl9mbGlja2FibGUpIHtcclxuLy8gICAgIHRoaXMuX2ZsaWNrYWJsZSA9IHBoaW5hLmFjY2Vzc29yeS5GbGlja2FibGUoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX2ZsaWNrYWJsZTtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5QaHlzaWNhbFxyXG4gKiDmnKznianjgafjga/jgarjgYTjga7jgaflkI3liY3lpInjgYjjgovjgYvjgoJcclxuICogRmFrZVBoeXNpY2FsIG9yIE1hcmlvUGh5c2ljYWwgb3IgTGllUGh5c2ljYWxcclxuICogUmV0cm9QeXNpY2FsIG9yIFB5c2ljYUxpa2VcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgUGh5c2ljYWwgZXh0ZW5kcyBBY2Nlc3NvcnkgIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHRoaXMuZnJpY3Rpb24gPSAxLjA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB2YXIgdCA9IHRoaXMudGFyZ2V0O1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuZnJpY3Rpb247XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuZ3Jhdml0eS54O1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eS55O1xyXG5cclxuICAgIHQucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB0LnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gIH1cclxuXHJcbiAgZm9yY2UoeCwgeSkge1xyXG4gICAgdGhpcy52ZWxvY2l0eS5zZXQoeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZEZvcmNlKHgsIHkpIHtcclxuICAgIHRoaXMudmVsb2NpdHkueCArPSB4O1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEdyYXZpdHkoeCwgeSkge1xyXG4gICAgdGhpcy5ncmF2aXR5LnNldCh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RnJpY3Rpb24oZnIpIHtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSBmcjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcigncGh5c2ljYWwnLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX3BoeXNpY2FsKSB7XHJcbi8vICAgICB0aGlzLl9waHlzaWNhbCA9IHBoaW5hLmFjY2Vzc29yeS5QaHlzaWNhbCgpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fcGh5c2ljYWw7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQXNzZXQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvLyBzZXJ2ZXJFcnJvcjogZmFsc2UsXHJcbiAgLy8gbm90Rm91bmQ6IGZhbHNlLFxyXG4gIC8vIGxvYWRFcnJvcjogZmFsc2UsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNyYykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXJ2ZXJFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkRXJyb3IgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxvYWQoc3JjKSB7XHJcbiAgICB0aGlzLnNyYyA9IHNyYztcclxuICAgIHJldHVybiBuZXcgRmxvdyh0aGlzLl9sb2FkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICAvLyDjg63jg7zjg4nlpLHmlZfmmYLjgavjg4Djg5/jg7zjgpLjgrvjg4Pjg4jjgZnjgotcclxuICBsb2FkRHVtbXkoKSB7IH1cclxuXHJcbn1cclxuXHJcbnZhciBnZXRGaXJzdCA9IGZ1bmN0aW9uKGFycmF5KSB7IHJldHVybiBmaXJzdC5nZXQuY2FsbChhcnJheSk7IH07XHJcbnZhciBnZXRMYXN0ID0gZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGxhc3QuZ2V0LmNhbGwoYXJyYXkpOyB9O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5UZXh0dXJlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBUZXh0dXJlIGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICB2YXIgaXNMb2NhbCA9IChsb2NhdGlvbi5wcm90b2NvbCA9PSAnZmlsZTonKTtcclxuICAgIGlmICggIWlzTG9jYWwgJiYgISgvXmRhdGE6Ly50ZXN0KHRoaXMuc3JjKSkgKSA7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGZvcm1hdC5jYWxsKFwiW3BoaW5hLmpzXSBub3QgZm91bmQgYHswfWAhXCIsIHRoaXMuc3JjKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJbcGhpbmEuanNdIG5vdCBmb3VuZCBgezB9YCFcIi5mb3JtYXQodGhpcy5zcmMpKTtcclxuXHJcbiAgICAgIC8vIHZhciBrZXkgPSBzZWxmLnNyYy5zcGxpdCgnLycpLmxhc3QucmVwbGFjZSgnLnBuZycsICcnKS5zcGxpdCgnPycpLmZpcnN0LnNwbGl0KCcjJykuZmlyc3Q7XHJcbiAgICAgIHZhciBrZXkgPSBnZXRGaXJzdChcclxuICAgICAgICBnZXRGaXJzdChcclxuICAgICAgICAgIGdldExhc3QoXHJcbiAgICAgICAgICAgIHNlbGYuc3JjLnNwbGl0KCcvJylcclxuICAgICAgICAgICkucmVwbGFjZSgnLnBuZycsICcnKS5zcGxpdCgnPycpXHJcbiAgICAgICAgKS5zcGxpdCgnIycpXHJcbiAgICAgICk7XHJcbiAgICAgIGUudGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICBlLnRhcmdldC5zcmMgPSBcImh0dHA6Ly9kdW1teWltYWdlLmNvbS8xMjh4MTI4LzQ0NDQ0NC9lZWVlZWUmdGV4dD1cIiArIGtleTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpLnNldFNpemUoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgICB2YXIgdCA9IG5ldyBUZXh0dXJlKCk7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgdC5kb21FbGVtZW50ID0gY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gdDtcclxuICB9XHJcblxyXG4gIHRyYW5zbWl0KGNvbG9yKSB7XHJcbiAgICAvLyBpbWFnYeOCquODluOCuOOCp+OCr+ODiOOCkuOCsuODg+ODiFxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgLy8g5paw6KaPY2FudmFz5L2c5oiQXHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpLnNldFNpemUoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgICAvLyDmlrDopo9jYW52YXPjgavmj4/nlLtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICAvLyBjYW52YXPlhajkvZPjga7jgqTjg6Hjg7zjgrjjg4fjg7zjgr/phY3liJfjgpLjgrLjg4Pjg4hcclxuICAgIHZhciBpbWFnZURhdGEgPSBjYW52YXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHZhciBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XHJcbiAgICAvLyDpgI/pgY7oibLjga7mjIflrprjgYzjgarjgZHjgozjgbDlt6bkuIrjga5yZ2LlgKTjgpLmir3lh7pcclxuICAgIHZhciByID0gKGNvbG9yICE9PSB1bmRlZmluZWQpID8gY29sb3IuciA6IGRhdGFbMF07XHJcbiAgICB2YXIgZyA9IChjb2xvciAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yLmcgOiBkYXRhWzFdO1xyXG4gICAgdmFyIGIgPSAoY29sb3IgIT09IHVuZGVmaW5lZCkgPyBjb2xvci5iIDogZGF0YVsyXTtcclxuICAgIC8vIOmFjeWIl+OCkjTopoHntKDnm67jgYvjgok044Gk6aOb44Gz77yI44Ki44Or44OV44Kh5YCk77yJ44Gn44Or44O844OXXHJcbiAgICAvLyAoMykuc3RlcChkYXRhLmxlbmd0aCwgNCwgZnVuY3Rpb24oaSkge1xyXG4gICAgc3RlcC5jYWxsKDMsIGRhdGEubGVuZ3RoLCA0LCBmdW5jdGlvbihpKSB7XHJcbiAgICAgIC8vIHJnYuWApOOCkumAhueul+OBp+OCsuODg+ODiOOBl+OAgeW3puS4iuOBrnJnYuOBqOavlOi8g1xyXG4gICAgICBpZiAoZGF0YVtpIC0gM10gPT09IHIgJiYgZGF0YVtpIC0gMl0gPT09IGcgJiYgZGF0YVtpIC0gMV0gPT09IGIpIHtcclxuICAgICAgICAvLyDkuIDoh7TjgZfjgZ/loLTlkIjjga/jgqLjg6vjg5XjgqHlgKTjgpLmm7jjgY3mj5vjgYjjgotcclxuICAgICAgICBkYXRhW2ldID0gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDmm7jjgY3mj5vjgYjjgZ/jgqTjg6Hjg7zjgrjjg4fjg7zjgr/jgpJjYW52YXPjgavmiLvjgZlcclxuICAgIGNhbnZhcy5jb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGNhbnZhcy5kb21FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyKGZpbHRlcnMpIHtcclxuICAgIGlmICghZmlsdGVycykge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJzKSkge1xyXG4gICAgICBmaWx0ZXJzID0gW2ZpbHRlcnNdO1xyXG4gICAgfVxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgdmFyIHcgPSBpbWFnZS53aWR0aDtcclxuICAgIHZhciBoID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoKS5zZXRTaXplKHcsIGgpO1xyXG4gICAgdmFyIGltYWdlRGF0YSA9IG51bGw7XHJcblxyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIGltYWdlRGF0YSA9IGNhbnZhcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3LCBoKTtcclxuICAgIGZpbHRlcnMuZm9yRWFjaCggZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIGgudGltZXMoIGZ1bmN0aW9uICh5KSB7XHJcbiAgICAgICAgdGltZXMuY2FsbChoLCBmdW5jdGlvbiAoeSkge1xyXG4gICAgICAgICAgLy8gdy50aW1lcyggZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgIHRpbWVzKHcsIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gKHkgKiB3ICsgeCkgKiA0O1xyXG4gICAgICAgICAgICB2YXIgcGl4ZWwgPSBpbWFnZURhdGEuZGF0YS5zbGljZShpLCBpICsgNCk7XHJcbiAgICAgICAgICAgIGZuKHBpeGVsLCBpLCB4LCB5LCBpbWFnZURhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2FudmFzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBjYW52YXMuZG9tRWxlbWVudDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuU291bmRcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFNvdW5kIGV4dGVuZHMgQXNzZXQge1xyXG4gIFxyXG4gIC8vIF9sb29wOiBmYWxzZSxcclxuICAvLyBfbG9vcFN0YXJ0OiAwLFxyXG4gIC8vIF9sb29wRW5kOiAwLFxyXG4gIC8vIF9wbGF5YmFja1JhdGU6IDEsXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbG9vcFN0YXJ0ID0gMDtcclxuICAgIHRoaXMuX2xvb3BFbmQgPSAwO1xyXG4gICAgdGhpcy5fcGxheWJhY2tSYXRlID0gMTtcclxuICAgIHRoaXMuY29udGV4dCA9IFNvdW5kLmdldEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIHdoZW4gPSB3aGVuID8gd2hlbiArIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSA6IDA7XHJcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcclxuXHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIDtcclxuXHJcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XHJcbiAgICB2YXIgYnVmZmVyID0gc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xyXG4gICAgc291cmNlLmxvb3AgPSB0aGlzLl9sb29wO1xyXG4gICAgc291cmNlLmxvb3BTdGFydCA9IHRoaXMuX2xvb3BTdGFydDtcclxuICAgIHNvdXJjZS5sb29wRW5kID0gdGhpcy5fbG9vcEVuZDtcclxuICAgIHNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSB0aGlzLl9wbGF5YmFja1JhdGU7XHJcblxyXG4gICAgLy8gY29ubmVjdFxyXG4gICAgc291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XHJcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QoU291bmQuZ2V0TWFzdGVyR2FpbigpKTtcclxuICAgIC8vIHBsYXlcclxuICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNvdXJjZS5zdGFydCh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzb3VyY2Uuc3RhcnQod2hlbiwgb2Zmc2V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY2hlY2sgcGxheSBlbmRcclxuICAgIHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2VuZGVkJyk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIC8vIHN0b3BcclxuICAgIGlmICh0aGlzLnNvdXJjZSkge1xyXG4gICAgICAvLyBzdG9wIOOBmeOCi+OBqCBzb3VyY2UuZW5kZWTjgoLnmbrngavjgZnjgotcclxuICAgICAgdGhpcy5zb3VyY2Uuc3RvcCAmJiB0aGlzLnNvdXJjZS5zdG9wKDApO1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ3N0b3AnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHBhdXNlKCkge1xyXG4gICAgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gMDtcclxuICAgIHRoaXMuZmxhcmUoJ3BhdXNlJyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlc3VtZSgpIHtcclxuICAgIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHRoaXMuX3BsYXliYWNrUmF0ZTtcclxuICAgIHRoaXMuZmxhcmUoJ3Jlc3VtZScpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyDoqabjgZfjgabjgb/jgovjgarjgYZcclxuICBfb3NjaWxsYXRvcih0eXBlKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICB2YXIgb3NjaWxsYXRvciA9IGNvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xyXG5cclxuICAgIC8vIFNpbmUgd2F2ZSBpcyB0eXBlID0g4oCcc2luZeKAnVxyXG4gICAgLy8gU3F1YXJlIHdhdmUgaXMgdHlwZSA9IOKAnHNxdWFyZeKAnVxyXG4gICAgLy8gU2F3dG9vdGggd2F2ZSBpcyB0eXBlID0g4oCcc2F34oCdXHJcbiAgICAvLyBUcmlhbmdsZSB3YXZlIGlzIHR5cGUgPSDigJx0cmlhbmdsZeKAnVxyXG4gICAgLy8gQ3VzdG9tIHdhdmUgaXMgdHlwZSA9IOKAnGN1c3RvbeKAnSBcclxuICAgIG9zY2lsbGF0b3IudHlwZSA9IHR5cGUgfHwgJ3NpbmUnO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gb3NjaWxsYXRvcjtcclxuICAgIC8vIGNvbm5lY3RcclxuICAgIHRoaXMuc291cmNlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgfVxyXG5cclxuICBsb2FkRnJvbUJ1ZmZlcihidWZmZXIpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIC8vIHNldCBkZWZhdWx0IGJ1ZmZlclxyXG4gICAgaWYgKCFidWZmZXIpIHtcclxuICAgICAgYnVmZmVyID0gY29udGV4dC5jcmVhdGVCdWZmZXIoIDEsIDQ0MTAwLCA0NDEwMCApO1xyXG4gICAgICB2YXIgY2hhbm5lbCA9IGJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcclxuXHJcbiAgICAgIGZvciggdmFyIGk9MDsgaSA8IGNoYW5uZWwubGVuZ3RoOyBpKysgKVxyXG4gICAgICB7XHJcbiAgICAgICAgY2hhbm5lbFtpXSA9IE1hdGguc2luKCBpIC8gMTAwICogTWF0aC5QSSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzb3VyY2VcclxuICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9vcChsb29wKSB7XHJcbiAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRMb29wU3RhcnQobG9vcFN0YXJ0KSB7XHJcbiAgICB0aGlzLmxvb3BTdGFydCA9IGxvb3BTdGFydDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9vcEVuZChsb29wRW5kKSB7XHJcbiAgICB0aGlzLmxvb3BFbmQgPSBsb29wRW5kO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIHNldFBsYXliYWNrUmF0ZShwbGF5YmFja1JhdGUpIHtcclxuICAgIHRoaXMucGxheWJhY2tSYXRlID0gcGxheWJhY2tSYXRlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyKSB7XHJcbiAgICBpZiAoL15kYXRhOi8udGVzdCh0aGlzLnNyYykpIHtcclxuICAgICAgdGhpcy5fbG9hZEZyb21VUklTY2hlbWUocik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9hZEZyb21GaWxlKHIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvYWRGcm9tRmlsZShyKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1sLm9wZW4oJ0dFVCcsIHRoaXMuc3JjKTtcclxuICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHhtbC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4bWwuc3RhdHVzKSAhPT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAvLyDpn7Pmpb3jg5DjgqTjg4rjg6rjg7zjg4fjg7zjgr9cclxuICAgICAgICAgIHZhciBkYXRhID0geG1sLnJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgIC8vIHdlYmF1ZGlvIOeUqOOBq+WkieaPm1xyXG4gICAgICAgICAgc2VsZi5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShkYXRhLCBmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgICAgICAgc2VsZi5sb2FkRnJvbUJ1ZmZlcihidWZmZXIpO1xyXG4gICAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIumfs+WjsOODleOCoeOCpOODq+OBruODh+OCs+ODvOODieOBq+WkseaVl+OBl+OBvuOBl+OBn+OAgihcIiArIHNlbGYuc3JjICsgXCIpXCIpO1xyXG4gICAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgICBzZWxmLmZsYXJlKCdkZWNvZGVlcnJvcicpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoeG1sLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAvLyBub3QgZm91bmRcclxuXHJcbiAgICAgICAgICBzZWxmLmxvYWRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICBzZWxmLm5vdEZvdW5kPSB0cnVlO1xyXG4gICAgICAgICAgcihzZWxmKTtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2xvYWRlcnJvcicpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnbm90Zm91bmQnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOOCteODvOODkOODvOOCqOODqeODvFxyXG5cclxuICAgICAgICAgIHNlbGYubG9hZEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgIHNlbGYuc2VydmVyRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgcihzZWxmKTtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2xvYWRlcnJvcicpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnc2VydmVyZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgeG1sLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcblxyXG4gICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZEZyb21VUklTY2hlbWUocikge1xyXG4gICAgdmFyIGJ5dGVTdHJpbmcgPSAnJztcclxuICAgIGlmICh0aGlzLnNyYy5zcGxpdCgnLCcpWzBdLmluZGV4T2YoJ2Jhc2U2NCcpID49IDApIHtcclxuICAgICAgYnl0ZVN0cmluZyA9IGF0b2IodGhpcy5zcmMuc3BsaXQoJywnKVsxXSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYnl0ZVN0cmluZyA9IHVuZXNjYXBlKHRoaXMuc3JjLnNwbGl0KCcsJylbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBsZW4gPSBieXRlU3RyaW5nLmxlbmd0aDtcclxuICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheShsZW4pO1xyXG5cclxuICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICBidWZmZXJbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2ViYXVkaW8g55So44Gr5aSJ5o+bXHJcbiAgICB0aGlzLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlci5idWZmZXIsIGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG4gICAgICBzZWxmLmxvYWRGcm9tQnVmZmVyKGJ1ZmZlcik7XHJcbiAgICAgIHIoc2VsZik7XHJcbiAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwi6Z+z5aOw44OV44Kh44Kk44Or44Gu44OH44Kz44O844OJ44Gr5aSx5pWX44GX44G+44GX44Gf44CCKFwiICsgc2VsZi5zcmMgKyBcIilcIik7XHJcbiAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcihzZWxmKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZER1bW15KCkge1xyXG4gICAgdGhpcy5sb2FkRnJvbUJ1ZmZlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZvbHVtZSgpICB7IHJldHVybiB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWU7IH1cclxuICBzZXQgdm9sdW1lKHYpIHsgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdjsgfVxyXG5cclxuICBnZXQgbG9vcCgpICB7IHJldHVybiB0aGlzLl9sb29wOyB9XHJcbiAgc2V0IGxvb3Aodikge1xyXG4gICAgdGhpcy5fbG9vcCA9IHY7XHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIHRoaXMuc291cmNlLl9sb29wID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBsb29wU3RhcnQoKSAgeyByZXR1cm4gdGhpcy5fbG9vcFN0YXJ0OyB9XHJcbiAgc2V0IGxvb3BTdGFydCh2KSB7XHJcbiAgICB0aGlzLl9sb29wU3RhcnQgPSB2O1xyXG4gICAgaWYgKHRoaXMuc291cmNlKSB0aGlzLnNvdXJjZS5fbG9vcFN0YXJ0ID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBsb29wRW5kKCkgIHsgcmV0dXJuIHRoaXMuX2xvb3BFbmQ7IH1cclxuICBzZXQgbG9vcEVuZCh2KSB7XHJcbiAgICB0aGlzLl9sb29wRW5kID0gdjtcclxuICAgIGlmICh0aGlzLnNvdXJjZSkgdGhpcy5zb3VyY2UuX2xvb3BFbmQgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXliYWNrUmF0ZSgpIHsgcmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZTsgfVxyXG4gIHNldCBwbGF5YmFja1JhdGUodikge1xyXG4gICAgdGhpcy5fcGxheWJhY2tSYXRlID0gdjtcclxuICAgIGlmKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSAhPT0gMCl7XHJcbiAgICAgIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0TWFzdGVyR2FpbigpIHtcclxuICAgIGlmKCF0aGlzLl9tYXN0ZXJHYWluKSB7XHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5nZXRBdWRpb0NvbnRleHQoKTtcclxuICAgICAgdGhpcy5fbWFzdGVyR2FpbiA9IGNvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICB0aGlzLl9tYXN0ZXJHYWluLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbWFzdGVyR2FpbjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBdWRpb0NvbnRleHQoKSB7XHJcbiAgICBpZiAoIVN1cHBvcnQud2ViQXVkaW8pIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHQpIHJldHVybiB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgdmFyIGcgPSBwaGluYSQxLmdsb2JhbDtcclxuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZy5BdWRpb0NvbnRleHQpIHtcclxuICAgICAgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGcud2Via2l0QXVkaW9Db250ZXh0KSB7XHJcbiAgICAgIGNvbnRleHQgPSBuZXcgd2Via2l0QXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChnLm1vekF1ZGlvQ29udGV4dCkge1xyXG4gICAgICBjb250ZXh0ID0gbmV3IG1vekF1ZGlvQ29udGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gZGVmaW5lZFxyXG5hY2Nlc3Nvci5jYWxsKFNvdW5kLCAndm9sdW1lJywge1xyXG4vLyB0aGlzLmFjY2Vzc29yKCd2b2x1bWUnLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1hc3RlckdhaW4oKS5nYWluLnZhbHVlO1xyXG4gIH0sXHJcbiAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICB0aGlzLmdldE1hc3RlckdhaW4oKS5nYWluLnZhbHVlID0gdjtcclxuICB9LFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuU2NyaXB0XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBTY3JpcHQgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5TcHJpdGVTaGVldFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgU3ByaXRlU2hlZXQgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHNldHVwKHBhcmFtcykge1xyXG4gICAgdGhpcy5fc2V0dXBGcmFtZShwYXJhbXMuZnJhbWUpO1xyXG4gICAgdGhpcy5fc2V0dXBBbmltKHBhcmFtcy5hbmltYXRpb25zKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICB2YXIgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhtbC5vcGVuKCdHRVQnLCB0aGlzLnNyYyk7XHJcbiAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeG1sLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0geG1sLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zZXR1cChqc29uKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXR1cCh0aGlzLnNyYyk7XHJcbiAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgX3NldHVwRnJhbWUoZnJhbWUpIHtcclxuICAgIHZhciBmcmFtZXMgPSB0aGlzLmZyYW1lcyA9IFtdO1xyXG4gICAgdmFyIHVuaXRXaWR0aCA9IGZyYW1lLndpZHRoO1xyXG4gICAgdmFyIHVuaXRIZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIGNvdW50ID0gZnJhbWUucm93cyAqIGZyYW1lLmNvbHM7XHJcbiAgICB0aGlzLmZyYW1lID0gY291bnQ7XHJcblxyXG4gICAgdGltZXMuY2FsbChjb3VudCwgZnVuY3Rpb24oaSkge1xyXG4gICAgLy8gKGNvdW50KS50aW1lcyhmdW5jdGlvbihpKSB7XHJcbiAgICAgIHZhciB4SW5kZXggPSBpJWZyYW1lLmNvbHM7XHJcbiAgICAgIHZhciB5SW5kZXggPSAoaS9mcmFtZS5jb2xzKXwwO1xyXG5cclxuICAgICAgZnJhbWVzLnB1c2goe1xyXG4gICAgICAgIHg6IHhJbmRleCp1bml0V2lkdGgsXHJcbiAgICAgICAgeTogeUluZGV4KnVuaXRIZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6IHVuaXRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHVuaXRIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0dXBBbmltKGFuaW1hdGlvbnMpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xyXG5cclxuICAgIC8vIOODh+ODleOCqeODq+ODiOOCouODi+ODoeODvOOCt+ODp+ODs1xyXG4gICAgdGhpcy5hbmltYXRpb25zW1wiZGVmYXVsdFwiXSA9IHtcclxuICAgICAgICBmcmFtZXM6IHJhbmdlLmNhbGwoW10sIDAsIHRoaXMuZnJhbWUpLFxyXG4gICAgICAgIC8vIGZyYW1lczogW10ucmFuZ2UoMCwgdGhpcy5mcmFtZSksXHJcbiAgICAgICAgbmV4dDogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZnJlcXVlbmN5OiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICBmb3JJbi5jYWxsKGFuaW1hdGlvbnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vIGFuaW1hdGlvbnMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgYW5pbSA9IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKGFuaW0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1trZXldID0ge1xyXG4gICAgICAgICAgZnJhbWVzOiByYW5nZS5jYWxsKFtdLCBhbmltWzBdLCBhbmltWzFdKSxcclxuICAgICAgICAgIC8vIGZyYW1lczogW10ucmFuZ2UoYW5pbVswXSwgYW5pbVsxXSksXHJcbiAgICAgICAgICBuZXh0OiBhbmltWzJdLFxyXG4gICAgICAgICAgZnJlcXVlbmN5OiBhbmltWzNdIHx8IDEsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnNba2V5XSA9IHtcclxuICAgICAgICAgIGZyYW1lczogYW5pbS5mcmFtZXMsXHJcbiAgICAgICAgICBuZXh0OiBhbmltLm5leHQsXHJcbiAgICAgICAgICBmcmVxdWVuY3k6IGFuaW0uZnJlcXVlbmN5IHx8IDFcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5Xjg6zjg7zjg6DjgpLlj5blvpdcclxuICAgKi9cclxuICBnZXRGcmFtZShpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvbihuYW1lKSB7XHJcbiAgICBuYW1lID0gKG5hbWUgIT09IHVuZGVmaW5lZCkgPyBuYW1lIDogXCJkZWZhdWx0XCI7XHJcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW25hbWVdO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuRm9udFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgRm9udCBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5mb250TmFtZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBsb2FkKHBhdGgpIHtcclxuICAgIHRoaXMuc3JjID0gcGF0aDtcclxuXHJcbiAgICB2YXIgcmVnID0gLyguKikoPzpcXC4oW14uXSskKSkvO1xyXG4gICAgdmFyIGtleSA9IHRoaXMuZm9udE5hbWUgfHwgbGFzdC5jYWxsKHBhdGgubWF0Y2gocmVnKVsxXS5zcGxpdCgnLycpKTsgICAgLy/jg5Xjgqnjg7Pjg4jlkI3mjIflrprjgYznhKHjgYTloLTlkIjjga9wYXRo44Gu5ouh5by15a2Q5YmN44KS5L2/55SoXHJcbiAgICAvLyB2YXIga2V5ID0gdGhpcy5mb250TmFtZSB8fCBwYXRoLm1hdGNoKHJlZylbMV0uc3BsaXQoJy8nKS5sYXN0OyAgICAvL+ODleOCqeODs+ODiOWQjeaMh+WumuOBjOeEoeOBhOWgtOWQiOOBr3BhdGjjga7mi6HlvLXlrZDliY3jgpLkvb/nlKhcclxuICAgIHZhciB0eXBlID0gcGF0aC5tYXRjaChyZWcpWzJdO1xyXG4gICAgdmFyIGZvcm1hdCQxID0gXCJ1bmtub3duXCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInR0ZlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJ0cnVldHlwZVwiOyBicmVhaztcclxuICAgICAgY2FzZSBcIm90ZlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJvcGVudHlwZVwiOyBicmVhaztcclxuICAgICAgY2FzZSBcIndvZmZcIjpcclxuICAgICAgICBmb3JtYXQkMSA9IFwid29mZlwiOyBicmVhaztcclxuICAgICAgY2FzZSBcIndvZmYyXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcIndvZmYyXCI7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUud2FybihcIuOCteODneODvOODiOOBl+OBpuOBhOOBquOBhOODleOCqeODs+ODiOW9ouW8j+OBp+OBmeOAgihcIiArIHBhdGggKyBcIilcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdCQxO1xyXG4gICAgdGhpcy5mb250TmFtZSA9IGtleTtcclxuXHJcbiAgICBpZiAoZm9ybWF0JDEgIT09IFwidW5rbm93blwiKSB7XHJcbiAgICAgIHZhciB0ZXh0ID0gZm9ybWF0LmNhbGwoXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICd7MH0nOyBzcmM6IHVybCh7MX0pIGZvcm1hdCgnezJ9Jyk7IH1cIiwga2V5LCBwYXRoLCBmb3JtYXQkMSk7XHJcbiAgICAgIC8vIHZhciB0ZXh0ID0gXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICd7MH0nOyBzcmM6IHVybCh7MX0pIGZvcm1hdCgnezJ9Jyk7IH1cIi5mb3JtYXQoa2V5LCBwYXRoLCBmb3JtYXQpO1xyXG4gICAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xyXG4gICAgICB2YXIgZm9udEZhY2VTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgIGlmIChmb250RmFjZVN0eWxlRWxlbWVudC5pbm5lclRleHQpIHtcclxuICAgICAgICBmb250RmFjZVN0eWxlRWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvbnRGYWNlU3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgfVxyXG4gICAgICBlLmFwcGVuZENoaWxkKGZvbnRGYWNlU3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEZsb3codGhpcy5fbG9hZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdCAhPT0gXCJ1bmtub3duXCIpIHtcclxuICAgICAgdGhpcy5fY2hlY2tMb2FkZWQodGhpcy5mb250TmFtZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hlY2tMb2FkZWQgKGZvbnQsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdmFyIERFRkFVTFRfRk9OVCA9IGNhbnZhcy5jb250ZXh0LmZvbnQuc3BsaXQoJyAnKVsxXTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmZvbnQgPSAnNDBweCAnICsgREVGQVVMVF9GT05UO1xyXG5cclxuICAgIHZhciBjaGVja1RleHQgPSBcIjEyMzQ1Njc4OTAtXlxcXFxxd2VydHl1aW9wQFthc2RmZ2hqa2w7Ol16eGN2Ym5tLC4vXFwhXFxcIiMkJSYnKCk9fnxRV0VSVFlVSU9QYHtBU0RGR0hKS0wrKn1aWENWQk5NPD4/X++8ke+8ku+8k++8lO+8le+8lu+8l++8mO+8me+8kO+8je+8vu+/pe+9ke+9l++9he+9ku+9lO+9me+9le+9ie+9j++9kO+9ge+9k++9hO+9hu+9h++9iO+9iu+9i++9jO+9mu+9mO+9g++9lu+9gu+9ju+9je+8jO+8juOBguOBhOOBhuOBi+OBleOBn+OBquOCkuOCk+aZguOBr+mHkeOBquOCilwiO1xyXG4gICAgLy8g54m55q6K5paH5a2X5a++5b+cXHJcbiAgICBjaGVja1RleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcIjB4ZjA0YlwiKTtcclxuXHJcbiAgICB2YXIgYmVmb3JlID0gY2FudmFzLmNvbnRleHQubWVhc3VyZVRleHQoY2hlY2tUZXh0KS53aWR0aDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmZvbnQgPSAnNDBweCAnICsgZm9udCArICcsICcgKyBERUZBVUxUX0ZPTlQ7XHJcblxyXG4gICAgdmFyIHRpbWVvdXRDb3VudCA9IDMwO1xyXG4gICAgdmFyIGNoZWNrTG9hZEZvbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBhZnRlciA9IGNhbnZhcy5jb250ZXh0Lm1lYXN1cmVUZXh0KGNoZWNrVGV4dCkud2lkdGg7XHJcbiAgICAgIGlmIChhZnRlciAhPT0gYmVmb3JlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoLS10aW1lb3V0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrTG9hZEZvbnQsIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcInRpbWVvdXQgZm9udCBsb2FkaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNoZWNrTG9hZEZvbnQoKTtcclxuICB9XHJcblxyXG4gIHNldEZvbnROYW1lKG5hbWUpIHtcclxuICAgIGlmICh0aGlzLmxvYWRlZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCLjg5Xjgqnjg7Pjg4jlkI3jga9Mb2Fk5YmN44Gr44Gu44G/6Kit5a6a44GM5Ye65p2l44G+44GZKFwiICsgbmFtZSArIFwiKVwiKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvbnROYW1lID0gbmFtZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRGb250TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvbnROYW1lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuRmlsZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgRmlsZSBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAkZXh0ZW5kLmNhbGwocGFyYW1zLCB7XHJcbiAgICAgIC8vIHBhcmFtcy4kZXh0ZW5kKHtcclxuICAgICAgICBwYXRoOiB0aGlzLnNyYyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5zcmMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICRleHRlbmQuY2FsbChwYXJhbXMsIHRoaXMuc3JjKTtcclxuICAgICAgLy8gcGFyYW1zLiRleHRlbmQodGhpcy5zcmMpO1xyXG4gICAgfVxyXG5cclxuICAgICRzYWZlLmNhbGwocGFyYW1zLCB7XHJcbiAgICAvLyBwYXJhbXMuJHNhZmUoe1xyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgZGF0YVR5cGU6ICd0ZXh0JyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxvYWRcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhtbC5vcGVuKCdHRVQnLCBwYXJhbXMucGF0aCk7XHJcbiAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeG1sLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHhtbC5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgICAgaWYgKHBhcmFtcy5kYXRhVHlwZSA9PT0gJ2pzb24nKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZGF0YVR5cGUgPT09ICd4bWwnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGYuZGF0YVR5cGUgPSBwYXJhbXMuZGF0YVR5cGU7XHJcblxyXG4gICAgICAgICAgc2VsZi5kYXRhID0gZGF0YTtcclxuICAgICAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgLy8gdGhpcy5kb21FbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcblxyXG4gICAgLy8gdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gdGhpcy5kb21FbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAvLyAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAvLyB9O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuQXNzZXRMb2FkZXJcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEFzc2V0TG9hZGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIC8vIHBhcmFtcyA9IChwYXJhbXMgfHwge30pLiRzYWZlKHtcclxuICAgIC8vICAgY2FjaGU6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICAgIHBhcmFtcyA9ICRzYWZlLmNhbGwocGFyYW1zfHx7fSwgeyBjYWNoZTogdHJ1ZSB9KTtcclxuXHJcbiAgICB0aGlzLmFzc2V0cyA9IHt9O1xyXG4gICAgdGhpcy5jYWNoZSA9IHBhcmFtcy5jYWNoZTtcclxuICB9XHJcblxyXG4gIGxvYWQocGFyYW1zKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZmxvd3MgPSBbXTtcclxuXHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICB2YXIgbGVuZ3RoID0gMDtcclxuICAgIGZvckluLmNhbGwocGFyYW1zLCBmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgIC8vIHBhcmFtcy5mb3JJbihmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgICAgbGVuZ3RoICs9IE9iamVjdC5rZXlzKGFzc2V0cykubGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvckluLmNhbGwocGFyYW1zLCBmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgIC8vIHBhcmFtcy5mb3JJbihmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgICAgZm9ySW4uY2FsbChhc3NldHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gYXNzZXRzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgZnVuYyA9IEFzc2V0TG9hZGVyLmFzc2V0TG9hZEZ1bmN0aW9uc1t0eXBlXTtcclxuICAgICAgICB2YXIgZmxvdyA9IGZ1bmMoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgZmxvdy50aGVuKGZ1bmN0aW9uKGFzc2V0KSB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5jYWNoZSkge1xyXG4gICAgICAgICAgICBBc3NldE1hbmFnZXIuc2V0KHR5cGUsIGtleSwgYXNzZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5mbGFyZSgncHJvZ3Jlc3MnLCB7XHJcbiAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICBhc3NldDogYXNzZXQsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAoKytjb3VudGVyL2xlbmd0aCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmbG93cy5wdXNoKGZsb3cpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoc2VsZi5jYWNoZSkge1xyXG5cclxuICAgICAgc2VsZi5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUucHJvZ3Jlc3MgPj0gMS4wKSB7XHJcbiAgICAgICAgICAvLyBsb2Fk5aSx5pWX5pmC44CB5a++562WXHJcblxyXG4gICAgICAgICAgZm9ySW4uY2FsbChwYXJhbXMsIGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICAgICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICAgICAgICBmb3JJbi5jYWxsKGFzc2V0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBhc3NldHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHZhciBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXQodHlwZSwga2V5KTtcclxuICAgICAgICAgICAgICBpZiAoYXNzZXQubG9hZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVtbXkgPSBBc3NldE1hbmFnZXIuZ2V0KHR5cGUsICdkdW1teScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGR1bW15KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkdW1teS5sb2FkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkdW1teS5sb2FkRHVtbXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkdW1teS5sb2FkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBBc3NldE1hbmFnZXIuc2V0KHR5cGUsIGtleSwgZHVtbXkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgYXNzZXQubG9hZER1bW15KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxvdy5hbGwoZmxvd3MpLnRoZW4oZnVuY3Rpb24oYXJncykge1xyXG4gICAgICBzZWxmLmZsYXJlKCdsb2FkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZWdpc3RlcihrZXksIGZ1bmMpIHtcclxuICAgIHRoaXMuYXNzZXRMb2FkRnVuY3Rpb25zW2tleV0gPSBmdW5jO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQXNzZXRMb2FkZXIuYXNzZXRMb2FkRnVuY3Rpb25zID0ge1xyXG4gIGltYWdlOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRleHR1cmUoKTtcclxuICAgIHZhciBmbG93ID0gdGV4dHVyZS5sb2FkKHBhdGgpO1xyXG4gICAgcmV0dXJuIGZsb3c7XHJcbiAgfSxcclxuICBzb3VuZDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgc291bmQgPSBuZXcgU291bmQoKTtcclxuICAgIHZhciBmbG93ID0gc291bmQubG9hZChwYXRoKTtcclxuICAgIHJldHVybiBmbG93O1xyXG4gIH0sXHJcbiAgc3ByaXRlc2hlZXQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHNzID0gbmV3IFNwcml0ZVNoZWV0KCk7XHJcbiAgICB2YXIgZmxvdyA9IHNzLmxvYWQocGF0aCk7XHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9LFxyXG4gIHNjcmlwdDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgc2NyaXB0ID0gbmV3IFNjcmlwdCgpO1xyXG4gICAgcmV0dXJuIHNjcmlwdC5sb2FkKHBhdGgpO1xyXG4gIH0sXHJcbiAgZm9udDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgZm9udCA9IG5ldyBGb250KCk7XHJcbiAgICBmb250LnNldEZvbnROYW1lKGtleSk7XHJcbiAgICByZXR1cm4gZm9udC5sb2FkKHBhdGgpO1xyXG4gIH0sXHJcbiAganNvbjogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBGaWxlKCk7XHJcbiAgICByZXR1cm4gdGV4dC5sb2FkKHtcclxuICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bWw6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHQgPSBuZXcgRmlsZSgpO1xyXG4gICAgcmV0dXJuIHRleHQubG9hZCh7XHJcbiAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgIGRhdGFUeXBlOiBcInhtbFwiLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0ZXh0OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0ID0gbmV3IEZpbGUoKTtcclxuICAgIHJldHVybiB0ZXh0LmxvYWQocGF0aCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Tb3VuZE1hbmFnZXJcclxuICogIyMjIFJlZlxyXG4gKiAtIGh0dHA6Ly9ldm9sdmUucmVpbnRyb2R1Y2luZy5jb20vX3NvdXJjZS9jbGFzc2VzL2FzMy9Tb3VuZE1hbmFnZXIvU291bmRNYW5hZ2VyLmh0bWxcclxuICogLSBodHRwczovL2dpdGh1Yi5jb20vbmlja2xvY2t3b29kL1NvdW5kTWFuYWdlclxyXG4gKi9cclxuY2xhc3MgU291bmRNYW5hZ2VyIHtcclxuICAvLyB2b2x1bWU6IDAuOCxcclxuICAvLyBtdXNpY1ZvbHVtZTogMC44LFxyXG4gIC8vIG11dGVGbGFnOiBmYWxzZSxcclxuICAvLyBjdXJyZW50TXVzaWM6IG51bGwsXHJcblxyXG4gIHN0YXRpYyBwbGF5KG5hbWUsIHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIHZhciBzb3VuZCA9IEFzc2V0TWFuYWdlci5nZXQoJ3NvdW5kJywgbmFtZSk7XHJcblxyXG4gICAgc291bmQudm9sdW1lID0gdGhpcy5nZXRWb2x1bWUoKTtcclxuICAgIHNvdW5kLnBsYXkod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHNvdW5kO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3AoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgc3RhdGljIHBhdXNlKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gIHN0YXRpYyBmYWRlKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gIHN0YXRpYyBzZXRWb2x1bWUodm9sdW1lKSB7XHJcbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcclxuICB9XHJcbiAgc3RhdGljIGdldFZvbHVtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZvbHVtZTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog44Of44Ol44O844OIXHJcbiAgICovXHJcbiAgc3RhdGljIG11dGUoKSB7XHJcbiAgICB0aGlzLm11dGVGbGFnID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNdXNpYy52b2x1bWUgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog44Of44Ol44O844OI6Kej6ZmkXHJcbiAgICovXHJcbiAgc3RhdGljIHVubXV0ZSgpIHtcclxuICAgIHRoaXMubXV0ZUZsYWcgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNdXNpYy52b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc3RhdGljIGlzTXV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm11dGVGbGFnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBsYXlNdXNpYyhuYW1lLCBmYWRlVGltZSwgbG9vcCwgd2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgbG9vcCA9IChsb29wICE9PSB1bmRlZmluZWQpID8gbG9vcCA6IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuc3RvcE11c2ljKGZhZGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbXVzaWMgPSBBc3NldE1hbmFnZXIuZ2V0KCdzb3VuZCcsIG5hbWUpO1xyXG5cclxuICAgIG11c2ljLnNldExvb3AobG9vcCk7XHJcbiAgICBtdXNpYy5wbGF5KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pO1xyXG5cclxuICAgIGlmIChmYWRlVGltZSA+IDApIHtcclxuICAgICAgdmFyIGNvdW50ID0gMzI7XHJcbiAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgdmFyIHVuaXRUaW1lID0gZmFkZVRpbWUvY291bnQ7XHJcbiAgICAgIHZhciB2b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcblxyXG4gICAgICBtdXNpYy52b2x1bWUgPSAwO1xyXG4gICAgICB2YXIgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgdmFyIHJhdGUgPSBjb3VudGVyL2NvdW50O1xyXG4gICAgICAgIG11c2ljLnZvbHVtZSA9IHJhdGUqdm9sdW1lO1xyXG5cclxuICAgICAgICBpZiAocmF0ZSA+PSAxKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LCB1bml0VGltZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbXVzaWMudm9sdW1lID0gdGhpcy5nZXRWb2x1bWVNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudE11c2ljID0gbXVzaWM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE11c2ljO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0b3BNdXNpYyhmYWRlVGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRNdXNpYykgeyByZXR1cm4gOyB9XHJcblxyXG4gICAgdmFyIG11c2ljID0gdGhpcy5jdXJyZW50TXVzaWM7XHJcbiAgICB0aGlzLmN1cnJlbnRNdXNpYyA9IG51bGw7XHJcblxyXG4gICAgaWYgKGZhZGVUaW1lID4gMCkge1xyXG4gICAgICB2YXIgY291bnQgPSAzMjtcclxuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICB2YXIgdW5pdFRpbWUgPSBmYWRlVGltZS9jb3VudDtcclxuICAgICAgdmFyIHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuXHJcbiAgICAgIG11c2ljLnZvbHVtZSA9IDA7XHJcbiAgICAgIHZhciBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICB2YXIgcmF0ZSA9IGNvdW50ZXIvY291bnQ7XHJcbiAgICAgICAgbXVzaWMudm9sdW1lID0gdm9sdW1lKigxLXJhdGUpO1xyXG5cclxuICAgICAgICBpZiAocmF0ZSA+PSAxKSB7XHJcbiAgICAgICAgICBtdXNpYy5zdG9wKCk7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LCB1bml0VGltZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbXVzaWMuc3RvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDpn7Pmpb3jgpLkuIDmmYLlgZzmraJcclxuICAgKi9cclxuICBzdGF0aWMgcGF1c2VNdXNpYygpIHtcclxuICAgIGlmICghdGhpcy5jdXJyZW50TXVzaWMpIHsgcmV0dXJuIDsgfVxyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMucGF1c2UoKTtcclxuICB9XHJcbiAgLypcclxuICAgKiDpn7Pmpb3jgpLlho3plotcclxuICAgKi9cclxuICBzdGF0aWMgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudE11c2ljKSB7IHJldHVybiA7IH1cclxuICAgIHRoaXMuY3VycmVudE11c2ljLnJlc3VtZSgpO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOmfs+alveOBruODnOODquODpeODvOODoOOCkuioreWumlxyXG4gICAqL1xyXG4gIHN0YXRpYyBzZXRWb2x1bWVNdXNpYyh2b2x1bWUpIHtcclxuICAgIHRoaXMubXVzaWNWb2x1bWUgPSB2b2x1bWU7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TXVzaWMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TXVzaWMudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOmfs+alveOBruODnOODquODpeODvOODoOOCkuWPluW+l1xyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRWb2x1bWVNdXNpYygpIHtcclxuICAgIHJldHVybiB0aGlzLm11c2ljVm9sdW1lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5Tb3VuZE1hbmFnZXIudm9sdW1lID0gMC44O1xyXG5Tb3VuZE1hbmFnZXIubXVzaWNWb2x1bWUgPSAwLjg7XHJcblNvdW5kTWFuYWdlci5tdXRlRmxhZyA9IGZhbHNlO1xyXG5Tb3VuZE1hbmFnZXIuY3VycmVudE11c2ljID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuQnV0dG9uXHJcbiAqIEJ1dHRvblxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIEJ1dHRvbi5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHBoaW5hLnVpLkJ1dHRvbi5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IG9wdGlvbnMuY29ybmVyUmFkaXVzO1xyXG4gICAgdGhpcy50ZXh0ICAgICAgICAgPSBvcHRpb25zLnRleHQ7XHJcbiAgICB0aGlzLmZvbnRDb2xvciAgICA9IG9wdGlvbnMuZm9udENvbG9yO1xyXG4gICAgdGhpcy5mb250U2l6ZSAgICAgPSBvcHRpb25zLmZvbnRTaXplO1xyXG4gICAgdGhpcy5mb250V2VpZ2h0ICAgICA9IG9wdGlvbnMuZm9udFdlaWdodDtcclxuICAgIHRoaXMuZm9udEZhbWlseSAgID0gb3B0aW9ucy5mb250RmFtaWx5O1xyXG5cclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdwdXNoJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5yb3VuZFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvcm5lclJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBwb3N0cmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIC8vIHRleHRcclxuICAgIHZhciBmb250ID0gZm9ybWF0LmNhbGwoXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLCB0aGlzKTtcclxuICAgIC8vIHZhciBmb250ID0gXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLmZvcm1hdCh0aGlzKTtcclxuICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5mb250Q29sb3I7XHJcbiAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dCwgMCwgMCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkJ1dHRvbi5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogMjAwLFxyXG4gIGhlaWdodDogODAsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdoc2woMjAwLCA4MCUsIDYwJSknLFxyXG4gIHN0cm9rZTogbnVsbCxcclxuXHJcbiAgY29ybmVyUmFkaXVzOiA4LFxyXG4gIHRleHQ6ICdIZWxsbycsXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGZvbnRTaXplOiAzMixcclxuICBmb250V2VpZ2h0OiAnJyxcclxuICBmb250RmFtaWx5OiBcIidIaXJhS2FrdVByb04tVzMnXCIsIC8vIEhpcmFnaW5vIG9yIEhlbHZldGljYSxcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ2Nvcm5lclJhZGl1cycpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAndGV4dCcpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnZm9udENvbG9yJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdmb250U2l6ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnZm9udEZhbWlseScpO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5HYXVnZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBHYXVnZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMgfHwge30sIEdhdWdlLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLnVpLkdhdWdlLmRlZmF1bHRzKTtcclxuICAgIFxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSAob3B0aW9ucy52YWx1ZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMudmFsdWUgOiBvcHRpb25zLm1heFZhbHVlO1xyXG4gICAgdGhpcy5tYXhWYWx1ZSA9IG9wdGlvbnMubWF4VmFsdWU7XHJcbiAgICB0aGlzLmdhdWdlQ29sb3IgPSBvcHRpb25zLmdhdWdlQ29sb3I7XHJcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IG9wdGlvbnMuY29ybmVyUmFkaXVzO1xyXG5cclxuICAgIHRoaXMudmlzdWFsVmFsdWUgPSAob3B0aW9ucy52YWx1ZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMudmFsdWUgOiBvcHRpb25zLm1heFZhbHVlO1xyXG4gICAgdGhpcy5hbmltYXRpb24gPSBvcHRpb25zLmFuaW1hdGlvbjtcclxuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDEqMTAwMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa6gOOCv+ODs+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqL1xyXG4gIGlzRnVsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID09PSB0aGlzLm1heFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56m644Gj44G944GL44KS44OB44Kn44OD44KvXHJcbiAgICovXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID09PSAwO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgIHZhbHVlID0gY2xhbXAodmFsdWUsIDAsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgLy8gdmFsdWUgPSBNYXRoLmNsYW1wKHZhbHVlLCAwLCB0aGlzLm1heFZhbHVlKTtcclxuXHJcbiAgICAvLyBlbmQgd2hlbiBub3cgdmFsdWUgZXF1YWwgdmFsdWUgb2YgYXJndW1lbnRcclxuICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyBmaXJlIHZhbHVlIGNoYW5nZSBldmVudFxyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlJyk7XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdmFyIHJhbmdlID0gTWF0aC5hYnModGhpcy52aXN1YWxWYWx1ZS12YWx1ZSk7XHJcbiAgICAgIHZhciB0aW1lID0gKHJhbmdlL3RoaXMubWF4VmFsdWUpKnRoaXMuYW5pbWF0aW9uVGltZTtcclxuXHJcbiAgICAgIHRoaXMudHdlZW5lci5vbnR3ZWVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnR3ZWVuZXJcclxuICAgICAgICAuY2xlYXIoKVxyXG4gICAgICAgIC50byh7J3Zpc3VhbFZhbHVlJzogdmFsdWV9LCB0aW1lKVxyXG4gICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5mbGFyZSgnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhcmUoJ2VtcHR5Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzRnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhcmUoJ2Z1bGwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnZpc3VhbFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2NoYW5nZWQnKTtcclxuICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZW1wdHknKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmlzRnVsbCgpKSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZnVsbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSYXRlKCkge1xyXG4gICAgdmFyIHJhdGUgPSB0aGlzLnZpc3VhbFZhbHVlL3RoaXMubWF4VmFsdWU7XHJcbiAgICByZXR1cm4gcmF0ZTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5yb3VuZFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvcm5lclJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBwb3N0cmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIHJhdGUgPSB0aGlzLmdldFJhdGUoKTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZ2F1Z2VDb2xvcjtcclxuICAgIGNhbnZhcy5jb250ZXh0LnNhdmUoKTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmNsaXAoKTtcclxuICAgIGNhbnZhcy5maWxsUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCpyYXRlLCB0aGlzLmhlaWdodCk7XHJcbiAgICBjYW52YXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2KSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHYpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5HYXVnZS5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogMjU2LFxyXG4gIGhlaWdodDogMzIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICd3aGl0ZScsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgbWF4VmFsdWU6IDEwMCxcclxuICBnYXVnZUNvbG9yOiAnIzQ0ZicsXHJcbiAgY29ybmVyUmFkaXVzOiAwLFxyXG4gIGFuaW1hdGlvbjogdHJ1ZVxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICd2YWx1ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICdtYXhWYWx1ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICdnYXVnZUNvbG9yJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ2Nvcm5lclJhZGl1cycpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuQ2lyY2xlR2F1Z2VcclxuICogQGV4dGVuZHMgcGhpbmEudWkuR2F1Z2VcclxuICovXHJcbmNsYXNzIENpcmNsZUdhdWdlIGV4dGVuZHMgR2F1Z2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBmaWxsOiAnI2FhYScsXHJcbiAgICAgIHN0cm9rZTogJyMyMjInLFxyXG5cclxuICAgICAgcmFkaXVzOiA2NCxcclxuICAgICAgYW50aWNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgc2hvd1BlcmNlbnRhZ2U6IGZhbHNlLCAvLyBUT0RPXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcblxyXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcclxuICAgIHRoaXMuYW50aWNsb2Nrd2lzZSA9IG9wdGlvbnMuYW50aWNsb2Nrd2lzZTtcclxuICAgIHRoaXMuc2hvd1BlcmNlbnRhZ2UgPSBvcHRpb25zLnNob3dQZXJjZW50YWdlO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIHJhdGUgPSB0aGlzLmdldFJhdGUoKTtcclxuICAgIHZhciBlbmQgPSAoTWF0aC5QSSoyKSpyYXRlO1xyXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gMDtcclxuICAgIHRoaXMuZW5kQW5nbGUgPSBlbmQ7XHJcblxyXG4gICAgdGhpcy5jYW52YXMucm90YXRlKC1NYXRoLlBJKjAuNSk7XHJcbiAgICB0aGlzLmNhbnZhcy5zY2FsZSgxLCAtMSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmZpbGxQaWUoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc3RhcnRBbmdsZSwgdGhpcy5lbmRBbmdsZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuc3Ryb2tlQXJjKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnN0YXJ0QW5nbGUsIHRoaXMuZW5kQW5nbGUpO1xyXG4gIH1cclxuXHJcbiAgcG9zdHJlbmRlcigpIHtcclxuICAgIC8vIGlmICh0aGlzLnNob3dQZXJjZW50YWdlKSB7XHJcbiAgICAvLyAgIC8vIFRPRE86XHJcbiAgICAvLyAgIHZhciBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5saW1pdC10aGlzLnRpbWUpO1xyXG4gICAgLy8gICB0aGlzLmxhYmVsLnRleHQgPSBNYXRoLmNlaWwobGVmdC8xMDAwKSsnJztcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG59XHJcblxyXG52YXIgdGV4dFdpZHRoQ2FjaGUgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuTGFiZWxBcmVhXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuTGFiZWxcclxuICovXHJcbmNsYXNzIExhYmVsQXJlYSBleHRlbmRzIExhYmVsIHtcclxuXHJcbiAgLy8gX2xpbmVVcGRhdGU6IHRydWUsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBMYWJlbEFyZWEuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IHt9LiRzYWZlKG9wdGlvbnMsIExhYmVsQXJlYS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9saW5lVXBkYXRlID0gdHJ1ZTtcclxuICAgIHRoaXMudmVydGljYWxBbGlnbiA9IG9wdGlvbnMudmVydGljYWxBbGlnbjtcclxuICAgIHRoaXMuc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwgfHwgbmV3IFZlY3RvcjIoKTtcclxuICAgIHRoaXMuc2Nyb2xsWCA9IG9wdGlvbnMuc2Nyb2xsWDtcclxuICAgIHRoaXMuc2Nyb2xsWSA9IG9wdGlvbnMuc2Nyb2xsWTtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCArIHRoaXMucGFkZGluZyAqIDI7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzSGVpZ2h0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLmhlaWdodCArIHRoaXMucGFkZGluZyAqIDI7XHJcbiAgfVxyXG4gIGdldE9mZnNldFkgKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnZlcnRpY2FsQWxpZ24gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQWxpZ247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTGFiZWxBcmVhLnZlcnRpY2FsQWxpZ25Ub09mZnNldE1hcFt0aGlzLnZlcnRpY2FsQWxpZ25dIHx8IDA7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXRYICgpIHtcclxuICAgIHJldHVybiBMYWJlbEFyZWEuYWxpZ25Ub09mZnNldE1hcFt0aGlzLmFsaWduXSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dFdpZHRoQ2FjaGUgKCkge1xyXG4gICAgdmFyIGNhY2hlID0gdGV4dFdpZHRoQ2FjaGVbdGhpcy5mb250XTtcclxuICAgIHJldHVybiBjYWNoZSB8fCAodGV4dFdpZHRoQ2FjaGVbdGhpcy5mb250XSA9IHt9KTtcclxuICB9XHJcbiAgXHJcbiAgc3BsaWNlTGluZXMgKGxpbmVzKSB7XHJcbiAgICB2YXIgcm93V2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG4gICAgY29udGV4dC5mb250ID0gdGhpcy5mb250O1xyXG5cclxuICAgIHZhciBjYWNoZSA9IHRoaXMuZ2V0VGV4dFdpZHRoQ2FjaGUoKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgY2FjaGVcclxuICAgIGVhY2gkMS5jYWxsKHRoaXMuX3RleHQsIGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAvLyB0aGlzLl90ZXh0LmVhY2goZnVuY3Rpb24oY2gpIHtcclxuICAgICAgaWYgKCFjYWNoZVtjaF0pIHtcclxuICAgICAgICBjYWNoZVtjaF0gPSBjb250ZXh0Lm1lYXN1cmVUZXh0KGNoKS53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHZhciBsb2NhbExpbmVzID0gW107XHJcbiAgICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcclxuICAgICAgXHJcbiAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgdmFyIHRvdGFsV2lkdGggPSAwO1xyXG5cclxuICAgICAgLy8g44Gv44G/5Ye644Gm44GE44Gf44KJ5by35Yi255qE44Gr5pS56KGM44GZ44KLXHJcbiAgICAgIGVhY2gkMS5jYWxsKGxpbmUsIGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAgIC8vIGxpbmUuZWFjaChmdW5jdGlvbihjaCkge1xyXG4gICAgICAgIHZhciB3ID0gY2FjaGVbY2hdO1xyXG5cclxuICAgICAgICBpZiAoKHRvdGFsV2lkdGgrdykgPiByb3dXaWR0aCkge1xyXG4gICAgICAgICAgbG9jYWxMaW5lcy5wdXNoKHN0cik7XHJcbiAgICAgICAgICBzdHIgPSAnJztcclxuICAgICAgICAgIHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyICs9IGNoO1xyXG4gICAgICAgIHRvdGFsV2lkdGggKz0gdztcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDmrovjgorjgpIgcHVzaCDjgZnjgotcclxuICAgICAgbG9jYWxMaW5lcy5wdXNoKHN0cik7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gbG9jYWxMaW5lcztcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGluZXMgKCkge1xyXG4gICAgaWYgKHRoaXMuX2xpbmVVcGRhdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9saW5lcztcclxuICAgIH1cclxuICAgIHRoaXMuX2xpbmVVcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgbGluZXMgPSAodGhpcy50ZXh0ICsgJycpLnNwbGl0KCdcXG4nKTtcclxuICAgIGlmICh0aGlzLndpZHRoIDwgMSkge1xyXG4gICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpbmVzID0gdGhpcy5zcGxpY2VMaW5lcyhsaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2xpbmVzO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyIChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9IHRoaXMuYWxpZ247XHJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRoaXMuYmFzZWxpbmU7XHJcblxyXG4gICAgdmFyIHRleHQgPSB0aGlzLnRleHQgKyAnJztcclxuICAgIHZhciBsaW5lcyA9IHRoaXMuZ2V0TGluZXMoKTtcclxuICAgIHZhciBsZW5ndGggPSBsaW5lcy5sZW5ndGg7XHJcbiAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBmb250U2l6ZSA9IHRoaXMuZm9udFNpemU7XHJcbiAgICB2YXIgbGluZVNpemUgPSBmb250U2l6ZSAqIHRoaXMubGluZUhlaWdodDtcclxuICAgIHZhciBvZmZzZXRYID0gdGhpcy5nZXRPZmZzZXRYKCkgKiB3aWR0aDtcclxuICAgIHZhciBvZmZzZXRZID0gdGhpcy5nZXRPZmZzZXRZKCk7XHJcbiAgICBpZiAob2Zmc2V0WSA9PT0gMCkge1xyXG4gICAgICBvZmZzZXRZID0gLU1hdGguZmxvb3IobGVuZ3RoIC8gMikgKiBsaW5lU2l6ZTtcclxuICAgICAgb2Zmc2V0WSArPSAoKGxlbmd0aCArIDEpICUgMikgKiAobGluZVNpemUgLyAyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG9mZnNldFkgPCAwKSB7XHJcbiAgICAgIG9mZnNldFkgKj0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG9mZnNldFkgPSBvZmZzZXRZICogaGVpZ2h0IC0gbGVuZ3RoICogbGluZVNpemUgKyBsaW5lU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXRZIC09IHRoaXMuc2Nyb2xsWTtcclxuICAgIG9mZnNldFggLT0gdGhpcy5zY3JvbGxYO1xyXG4gICAgdmFyIHN0YXJ0ID0gKG9mZnNldFkgKyBoZWlnaHQgLyAyKSAvIC1saW5lU2l6ZSB8IDA7XHJcbiAgICBpZiAoc3RhcnQgPCAwKSB7IHN0YXJ0ID0gMDsgfVxyXG5cclxuICAgIHZhciBlbmQgPSAoaGVpZ2h0IC8gMiAtIG9mZnNldFkgKyBsaW5lU2l6ZSAqIDIpIC8gbGluZVNpemUgfCAwO1xyXG4gICAgbGluZXMgPSBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICByZXR1cm4gc3RhcnQgPD0gaSAmJiBlbmQgPiBpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB0aGlzLmxpbmVTaXplID0gbGluZVNpemU7XHJcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsIChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB2YXIgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcclxuICAgIHZhciBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xyXG4gICAgdmFyIGxpbmVTaXplID0gdGhpcy5saW5lU2l6ZTtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuc3RhcnQ7XHJcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIG9mZnNldFgsIChzdGFydCArIGkpICogbGluZVNpemUgKyBvZmZzZXRZKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Ryb2tlIChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB2YXIgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcclxuICAgIHZhciBvZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xyXG4gICAgdmFyIGxpbmVTaXplID0gdGhpcy5saW5lU2l6ZTtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuc3RhcnQ7XHJcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVRleHQobGluZSwgb2Zmc2V0WCwgKHN0YXJ0ICsgaSkgKiBsaW5lU2l6ZSArIG9mZnNldFkpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0O1xyXG4gIH1cclxuICBzZXQgdGV4dCh2KSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBzY3JvbGxYKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsLng7XHJcbiAgfVxyXG4gIHNldCBzY3JvbGxYKHYpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnggPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbFkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY3JvbGwueTtcclxuICB9XHJcbiAgc2V0IHNjcm9sbFkodikge1xyXG4gICAgdGhpcy5zY3JvbGwueSA9IHY7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIF9zdGF0aWM6IHtcclxuICAvLyAgIGRlZmF1bHRzOiB7XHJcbiAgLy8gICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gIC8vICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gIC8vICAgICBiYXNlbGluZTogJ3RvcCcsXHJcbiAgLy8gICAgIHdpZHRoOiAzMjAsXHJcbiAgLy8gICAgIGhlaWdodDogMzIwLFxyXG4gIC8vICAgICBzY3JvbGxYOiAwLFxyXG4gIC8vICAgICBzY3JvbGxZOiAwLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIGFsaWduVG9PZmZzZXRNYXA6IHtcclxuICAvLyAgICAgc3RhcnQ6IC0wLjUsXHJcbiAgLy8gICAgIGxlZnQ6IC0wLjUsXHJcbiAgLy8gICAgIGNlbnRlcjogMCxcclxuICAvLyAgICAgZW5kOiAwLjUsXHJcbiAgLy8gICAgIHJpZ2h0OiAwLjUsXHJcbiAgLy8gICB9LFxyXG5cclxuICAvLyAgIHZlcnRpY2FsQWxpZ25Ub09mZnNldE1hcDoge1xyXG4gIC8vICAgICB0b3A6IC0wLjUsXHJcbiAgLy8gICAgIGNlbnRlcjogMCxcclxuICAvLyAgICAgbWlkZGxlOiAwLFxyXG4gIC8vICAgICBib3R0b206IDAuNSxcclxuICAvLyAgIH0sXHJcbiAgLy8gfSxcclxuXHJcbiAgLy8gX2RlZmluZWQ6IGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgdmFyIGZ1bmMgPSBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG4gIC8vICAgICBpZigodGhpcy5fbGluZVVwZGF0ZSA9PT0gZmFsc2UpICYmIChuZXdWYWwgIT09IG9sZFZhbCkpe1xyXG4gIC8vICAgICAgIHRoaXMuX2xpbmVVcGRhdGUgPSB0cnVlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIFtcclxuICAvLyAgICAgJ3RleHQnLFxyXG4gIC8vICAgICAnd2lkdGgnLFxyXG4gIC8vICAgICAnZm9udFNpemUnLFxyXG4gIC8vICAgICAnZm9udFdlaWdodCcsXHJcbiAgLy8gICAgICdmb250RmFtaWx5J1xyXG4gIC8vICAgXS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gIC8vICAgICB0aGlzLiR3YXRjaChrZXksIGZ1bmMpO1xyXG4gIC8vICAgfSwgdGhpcy5wcm90b3R5cGUpO1xyXG5cclxuICAvLyAgIHBoaW5hLmRpc3BsYXkuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0aWVzLmNhbGwodGhpcyAsW1xyXG4gIC8vICAgICAndmVydGljYWxBbGlnbicsXHJcbiAgLy8gICAgICd0ZXh0JyxcclxuICAvLyAgICAgJ3Njcm9sbCcsXHJcbiAgLy8gICAgICdzY3JvbGxYJyxcclxuICAvLyAgICAgJ3Njcm9sbFknXHJcbiAgLy8gICBdKTtcclxuICAvLyB9LFxyXG5cclxuXHJcbiAgZW5hYmxlU2Nyb2xsKCkge1xyXG4gICAgLy8gICB0aGlzLnNldEludGVyYWN0aXZlKHRydWUpO1xyXG4gICAgLy8gICB2YXIgcGh5c2ljYWwgPSBwaGluYS5hY2Nlc3NvcnkuUGh5c2ljYWwoKTtcclxuICAgIC8vICAgcGh5c2ljYWwuYXR0YWNoVG8odGhpcyk7XHJcbiAgICAvLyAgIHBoeXNpY2FsLmZyaWN0aW9uID0gMC44O1xyXG4gICAgLy8gICB2YXIgbGFzdEZvcmNlID0gMDtcclxuICAgIC8vICAgdmFyIGxhc3RNb3ZlID0gMDtcclxuICAgIC8vICAgdGhpcy5vbigncG9pbnRzdGFydCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIGxhc3RGb3JjZSA9IHBoeXNpY2FsLnZlbG9jaXR5Lnk7XHJcbiAgICAvLyAgICAgbGFzdE1vdmUgPSAwO1xyXG4gICAgLy8gICAgIHBoeXNpY2FsLmZvcmNlKDAsIDApO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgdGhpcy5vbigncG9pbnRtb3ZlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyAgICAgdmFyIHAgPSBlLnBvaW50ZXIuZGVsdGFQb3NpdGlvbjtcclxuICAgIC8vICAgICBsYXN0TW92ZSA9IHAueTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbFkgKz0gbGFzdE1vdmU7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICBwaHlzaWNhbC5mb3JjZSgwLCBsYXN0Rm9yY2UgKyBsYXN0TW92ZSk7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5MYWJlbEFyZWEuZGVmYXVsdHMgPSB7XHJcbiAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBiYXNlbGluZTogJ3RvcCcsXHJcbiAgd2lkdGg6IDMyMCxcclxuICBoZWlnaHQ6IDMyMCxcclxuICBzY3JvbGxYOiAwLFxyXG4gIHNjcm9sbFk6IDAsXHJcbn07XHJcbkxhYmVsQXJlYS5hbGlnblRvT2Zmc2V0TWFwID0ge1xyXG4gIHN0YXJ0OiAtMC41LFxyXG4gIGxlZnQ6IC0wLjUsXHJcbiAgY2VudGVyOiAwLFxyXG4gIGVuZDogMC41LFxyXG4gIHJpZ2h0OiAwLjUsXHJcbn07XHJcbkxhYmVsQXJlYS52ZXJ0aWNhbEFsaWduVG9PZmZzZXRNYXAgPSB7XHJcbiAgdG9wOiAtMC41LFxyXG4gIGNlbnRlcjogMCxcclxuICBtaWRkbGU6IDAsXHJcbiAgYm90dG9tOiAwLjUsXHJcbn1cclxuXHJcbi8vIGRlZmluZWRcclxuO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnRpZXMuY2FsbChMYWJlbEFyZWEgLFtcclxuICAndmVydGljYWxBbGlnbicsXHJcbiAgJ3RleHQnLFxyXG4gICdzY3JvbGwnLFxyXG4gICdzY3JvbGxYJyxcclxuICAnc2Nyb2xsWSdcclxuXSk7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmVmZmVjdC5XYXZlXHJcbiAqIEJ1dHRvblxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkNpcmNsZVNoYXBlXHJcbiAqL1xyXG5jbGFzcyBXYXZlIGV4dGVuZHMgQ2lyY2xlU2hhcGUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHtcclxuICAgICAgZmlsbDogJ3doaXRlJyxcclxuICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciB0d2VlbmVyID0gbmV3IFR3ZWVuZXIoKS5hdHRhY2hUbyh0aGlzKTtcclxuICAgIHR3ZWVuZXJcclxuICAgICAgLnRvKHtzY2FsZVg6Miwgc2NhbGVZOjIsIGFscGhhOjB9LCA1MDApXHJcbiAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5zb2NpYWwuVHdpdHRlclxyXG4gKiAjIFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44Kv44KS55Sf5oiQ44GZ44KL44Kv44Op44K5XHJcbiAqIFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44Kv44GuIFVSTCDjgpLnlJ/miJDjgZfjgabjgY/jgozjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFR3aXR0ZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBcclxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr/jga/lrZjlnKjjgZfjgb7jgZnjgYzjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjg7Pjg5Djga/jgYLjgorjgb7jgZvjgpPjgIJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMXHJcbiAgICogVHdpdHRlcuOBruWFseacieODquODs+OCr+OCkueUn+aIkOOBl+OBvuOBmeOAguW8leaVsOOBq+OCquODluOCuOOCp+OCr+ODiOOCkua4oeOBmeOBk+OBqOOBp+anmOOAheOBquODkeODqeODoeODvOOCv+ODvOOCkuioreWumuWHuuadpeOBvuOBmeOAguW8leaVsOOBruOCquODluOCuOOCp+OCr+ODiOOBryB7QGxpbmsgI3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzfSDjgaflronlhajmi6HlvLXjgZXjgozjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoKTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PUhlbGxvJTJDJTIwd29ybGQhJmhhc2h0YWdzPWphdmFzY3JpcHQlMkNwaGluYSZ1cmw9e+ePvuWcqOOBrlVSTH1cclxuICAgKiBcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgKiAgICAgICB0ZXh0OiAnVGhpcyBpcyB0ZXh0JyxcclxuICAgKiAgICAgICBoYXNodGFnczogJ2hhc2h0YWcxLGhhc2h0YWcyJyxcclxuICAgKiAgICAgICB1cmw6ICdodHRwOi8vcGhpbmFqcy5jb20nXHJcbiAgICogICAgIH0pOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9VGhpcyUyMGlzJTIwdGV4dCZoYXNodGFncz1oYXNodGFnMSUyQ2hhc2h0YWcyJnVybD1odHRwJTNBJTJGJTJGcGhpbmFqcy5jb21cclxuICAgKiBcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgKiAgICAgICB0ZXh0OiAnVGhpcyBpcyB0ZXh0JyxcclxuICAgKiAgICAgICBoYXNodGFnczogJ2hhc2h0YWcxLGhhc2h0YWcyJyxcclxuICAgKiAgICAgICB1cmw6ICdodHRwOi8vcGhpbmFqcy5jb20nLFxyXG4gICAqICAgICAgIG90aGVyOiAnVGhpcyBpcyBvdGhlcicvL+ioreWumumgheebruOBr+mBqeW9k+OBq+Wil+OChOOBm+OCi1xyXG4gICAqICAgICB9KTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PVRoaXMlMjBpcyUyMHRleHQmaGFzaHRhZ3M9aGFzaHRhZzElMkNoYXNodGFnMiZ1cmw9aHR0cCUzQSUyRiUyRnBoaW5hanMuY29tJm90aGVyPVRoaXMlMjBpcyUyMG90aGVyXHJcbiAgICogXHJcbiAgICogICAgIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTCh7XHJcbiAgICogICAgICAgdXJsOiAnaHR0cDovL3BoaW5hanMuY29tJ1xyXG4gICAqICAgICB9KTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9aHR0cCUzQSUyRiUyRnBoaW5hanMuY29tJnRleHQ9SGVsbG8lMkMlMjB3b3JsZCEmaGFzaHRhZ3M9amF2YXNjcmlwdCUyQ3BoaW5hXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtPYmplY3R9XHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBUd2l0dGVyIOOBruWFseacieODquODs+OCr1xyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlVVJMIChvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCBUd2l0dGVyLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUodGhpcy5kZWZhdWx0cyk7XHJcblxyXG4gICAgdmFyIHF1ZXJpZXMgPSBbXTtcclxuICAgIHZhciBldWMgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICBmb3JJbi5jYWxsKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vIG9wdGlvbnMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgc3RyID0ga2V5ICsgJz0nICsgZXVjKHZhbHVlKTtcclxuICAgICAgcXVlcmllcy5wdXNoKHN0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdXJsID0gZm9ybWF0LmNhbGwoJ3tiYXNlVVJMfS97dHlwZX0/e3F1ZXJ5fScsIHtcclxuICAgIC8vIHZhciB1cmwgPSAne2Jhc2VVUkx9L3t0eXBlfT97cXVlcnl9Jy5mb3JtYXQoe1xyXG4gICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXHJcbiAgICAgIC8vIHR5cGU6IG9wdGlvbnMudHlwZSxcclxuICAgICAgdHlwZTogJ3R3ZWV0JyxcclxuICAgICAgcXVlcnk6IHF1ZXJpZXMuam9pbignJicpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuYmFzZVVSTCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudCddXHJcbiAqIFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44Kv44Gu44OZ44O844K544Go44Gq44KLIFVSTCDjgafjgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblR3aXR0ZXIuYmFzZVVSTCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudCc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzXHJcbiAqIOODh+ODleOCqeODq+ODiOWApOOCkuagvOe0jeOBl+OBpuOBhOOCi+OCquODluOCuOOCp+OCr+ODiOOBp+OBmeOAgntAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudGV4dH0sIHtAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMuaGFzaHRhZ3N9LCB7QGxpbmsgI3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLnVybH0g44KS5YaF5YyF44GX44Gm44GE44G+44GZ44CCXHJcbiAqIFxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5Ud2l0dGVyLmRlZmF1bHRzID0ge1xyXG4gIC8vIHR5cGU6ICd0d2VldCcsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudGV4dCA9ICdIZWxsbywgV29ybGQnXVxyXG4gICAqIOODh+ODleOCqeODq+ODiOOBp+ODhOOCpOODvOODiOOBq+WQq+OBvuOCjOOCi+aWh+Wtl+WIl+OBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICB0ZXh0OiAnSGVsbG8sIHdvcmxkIScsXHJcblxyXG4gIC8vIHNjcmVlbl9uYW1lOiAncGhpX2pwJyxcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy5oYXNodGFncyA9ICdqYXZhc2NyaXB0LCBwaGluYV9qcyddXHJcbiAgICog44OH44OV44Kp44Or44OI44Gn44OE44Kk44O844OI44Gr5ZCr44G+44KM44KL44OP44OD44K344Ol44K/44Kw44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIGhhc2h0YWdzOiAnamF2YXNjcmlwdCxwaGluYV9qcycsXHJcblxyXG4gIC8vIHVybDogJ2h0dHA6Ly9naXRodWIuY29tL3BoaS1qcC9waGluYS5qcycsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudXJsID0gcGhpbmEuZ2xvYmFsLmxvY2F0aW9uICYmIHBoaW5hLmdsb2JhbC5sb2NhdGlvbi5ocmVmXVxyXG4gICAqIOODh+ODleOCqeODq+ODiOOBp+ODhOOCpOODvOODiOOBq+WQq+OBvuOCjOOCiyBVUkwg44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHVybDogcGhpbmEkMS5nbG9iYWwubG9jYXRpb24gJiYgcGhpbmEkMS5nbG9iYWwubG9jYXRpb24uaHJlZlxyXG5cclxuICAvLyB2aWE6ICdwaGlfanAnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLk1hbmFnZXJTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuU2NlbmVcclxuICovXHJcbmNsYXNzIE1hbmFnZXJTY2VuZSBleHRlbmRzIFNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc2V0U2NlbmVzKHBhcmFtcy5zY2VuZXMpO1xyXG5cclxuICAgIHRoaXMub24oXCJlbnRlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5nb3RvU2NlbmUocGFyYW1zLnN0YXJ0TGFiZWwgfHwgMCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMub24oXCJyZXN1bWVcIiwgdGhpcy5vbm5leHQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5jb21tb25Bcmd1bWVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNjZW5lcyDjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRTY2VuZXMoc2NlbmVzKSB7XHJcbiAgICB0aGlzLnNjZW5lcyA9IHNjZW5lcztcclxuICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2VuZeOCr+ODqeOCueOCkuOCpOODs+OCueOCv+ODs+OCueWMluOBl+OBpui/lOOBmVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZGF0YSAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIF9pbnN0YW50aWF0ZVNjZW5lKGRhdGEsIGFyZ3MpIHtcclxuICAgIC8vIFNjZW5l5Yid5pyf5YyW5byV5pWwXHJcbiAgICB2YXIgaW5pdEFyZ3VtZW50cyA9ICRleHRlbmQuY2FsbCh7fSwgZGF0YS5hcmd1bWVudHMsIGFyZ3MpO1xyXG4gICAgLy8gdmFyIGluaXRBcmd1bWVudHMgPSB7fS4kZXh0ZW5kKGRhdGEuYXJndW1lbnRzLCBhcmdzKTtcclxuXHJcbiAgICB2YXIgc2NlbmUsIGtsYXNzO1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gcGhpbmEuZGVmaW5l44CB44GC44KL44GE44GvZ2xvYmFsKHdpbmRvdynjgavnm7TmjqXlrprnvqnjgZXjgozjgZ/jgq/jg6njgrnjga7mloflrZfliJdcclxuICAgICAga2xhc3MgPSBwaGluYSQxLnVzaW5nKGRhdGEuY2xhc3NOYW1lKTtcclxuICAgICAgaWYgKHR5cGVvZiBrbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGtsYXNzID0gcGhpbmEkMS51c2luZygncGhpbmEuZ2FtZS4nICsgZGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNjZW5lID0ga2xhc3MuY2FsbChudWxsLCBpbml0QXJndW1lbnRzKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIC8vIOmWouaVsOOBruWgtOWQiOOAgee0lOeyi+OBqmNsYXNz44Go6KaL44Gq44GZXHJcbiAgICAgIC8vIHNjZW5lID0gbmV3IGRhdGEuY2xhc3NOYW1lKGluaXRBcmd1bWVudHMpO1xyXG4gICAgICBrbGFzcyA9IGRhdGEuY2xhc3NOYW1lO1xyXG4gICAgfVxyXG4gICAgc2NlbmUgPSBuZXcga2xhc3MoaW5pdEFyZ3VtZW50cyk7XHJcblxyXG4gICAgaWYgKCFzY2VuZS5uZXh0TGFiZWwpIHtcclxuICAgICAgc2NlbmUubmV4dExhYmVsID0gZGF0YS5uZXh0TGFiZWw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNjZW5lLm5leHRBcmd1bWVudHMpIHtcclxuICAgICAgc2NlbmUubmV4dEFyZ3VtZW50cyA9IGRhdGEubmV4dEFyZ3VtZW50cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NlbmVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjZW5l44Kv44Op44K544KS44Kk44Oz44K544K/44Oz44K55YyW44GX44GmYXBw44GrcmVwbGFjZVNjZW5l44GV44Gb44KLXHJcbiAgICogXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfG51bWJlcn0gbGFiZWwg44K344O844Oz44Gu5a++5b+c44Op44OZ44OrXHJcbiAgICogQHBhcmFtICB7YW55fSBbYXJnc10gU2NlbmXjgavjgo/jgZ/jgZnlvJXmlbDjgYzjgYLjgovloLTlkIjjgavmjIflrppcclxuICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAqL1xyXG4gIHJlcGxhY2VTY2VuZShsYWJlbCwgYXJncykge1xyXG4gICAgdmFyIGluZGV4ID0gKHR5cGVvZiBsYWJlbCA9PSAnc3RyaW5nJykgPyB0aGlzLmxhYmVsVG9JbmRleChsYWJlbCkgOiBsYWJlbHx8MDtcclxuICAgIGlmICghdGhpcy5zY2VuZXNbaW5kZXhdKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0LmNhbGwoJ3BoaW5hLmpzIGVycm9yOiBgezB9YCDjgavlr77lv5zjgZnjgovjgrfjg7zjg7PjgYzjgYLjgorjgb7jgZvjgpMuJywgbGFiZWwpKTtcclxuICAgIH1cclxuICAgIHZhciBzY2VuZSA9IHRoaXMuX2luc3RhbnRpYXRlU2NlbmUodGhpcy5zY2VuZXNbaW5kZXhdLCBhcmdzKTtcclxuICAgIHRoaXMuYXBwLnJlcGxhY2VTY2VuZShzY2VuZSk7XHJcbiAgICB0aGlzLnNjZW5lSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGluZGV4KG9yIGxhYmVsKSDjga7jgrfjg7zjg7Pjgbjpo5vjgbZcclxuICAgKiByZXBsYWNlU2NlbmXjgajjga7pgZXjgYTjga9hcHAucmVwbGFjZVNjZW5l44Gn44Gv44Gq44GP44CBYXBwLnB1c2hTY2VuZeOCkuWun+ihjOOBmeOCi+eCuVxyXG4gICAqL1xyXG4gIGdvdG9TY2VuZShsYWJlbCwgYXJncykge1xyXG4gICAgdmFyIGluZGV4ID0gKHR5cGVvZiBsYWJlbCA9PSAnc3RyaW5nJykgPyB0aGlzLmxhYmVsVG9JbmRleChsYWJlbCkgOiBsYWJlbHx8MDtcclxuICAgIGlmICghdGhpcy5zY2VuZXNbaW5kZXhdKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0LmNhbGwoJ3BoaW5hLmpzIGVycm9yOiBgezB9YCDjgavlr77lv5zjgZnjgovjgrfjg7zjg7PjgYzjgYLjgorjgb7jgZvjgpMuJywgbGFiZWwpKTtcclxuICAgIH1cclxuICAgIHZhciBzY2VuZSA9IHRoaXMuX2luc3RhbnRpYXRlU2NlbmUodGhpcy5zY2VuZXNbaW5kZXhdLCBhcmdzKTtcclxuICAgIHRoaXMuYXBwLnB1c2hTY2VuZShzY2VuZSk7XHJcbiAgICB0aGlzLnNjZW5lSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOasoeOBruOCt+ODvOODs+OBuOmjm+OBtlxyXG4gICAqL1xyXG4gIGdvdG9OZXh0KGFyZ3MpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XTtcclxuICAgIHZhciBuZXh0SW5kZXggPSBudWxsO1xyXG5cclxuICAgIC8vIOasoeOBruODqeODmeODq+OBjOioreWumuOBleOCjOOBpuOBhOOBn+WgtOWQiFxyXG4gICAgaWYgKGRhdGEubmV4dExhYmVsKSB7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5sYWJlbFRvSW5kZXgoZGF0YS5uZXh0TGFiZWwpO1xyXG4gICAgfVxyXG4gICAgLy8g5qyh44Gu44K344O844Oz44Gr6YG356e7XHJcbiAgICBlbHNlIGlmICh0aGlzLnNjZW5lSW5kZXgrMSA8IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xyXG4gICAgICAgIG5leHRJbmRleCA9IHRoaXMuc2NlbmVJbmRleCsxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0SW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmdvdG9TY2VuZShuZXh0SW5kZXgsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZShcImZpbmlzaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+OCpOODs+ODh+ODg+OCr+OCueOCkuWPluW+l1xyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRJbmRleCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7Pjg6njg5njg6vjgpLlj5blvpdcclxuICAgKi9cclxuICBnZXRDdXJyZW50TGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5sYWJlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeODmeODq+OBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBq+WkieaPm1xyXG4gICAqL1xyXG4gIGxhYmVsVG9JbmRleChsYWJlbCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLnNjZW5lcy5maWx0ZXIoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICByZXR1cm4gZGF0YS5sYWJlbCA9PSBsYWJlbDtcclxuICAgIH0pWzBdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnNjZW5lcy5pbmRleE9mKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kk44Oz44OH44OD44Kv44K544GL44KJ44Op44OZ44Or44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgaW5kZXhUb0xhYmVsKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY2VuZXNbaW5kZXhdLmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgb25uZXh0KGUpIHtcclxuICAgIHZhciBuZXh0TGFiZWwgPSBlLnByZXZTY2VuZS5uZXh0TGFiZWw7XHJcbiAgICB2YXIgbmV4dEFyZ3VtZW50cyA9IGUucHJldlNjZW5lLm5leHRBcmd1bWVudHM7XHJcbiAgICBpZiAobmV4dExhYmVsKSB7XHJcbiAgICAgIHRoaXMuZ290b1NjZW5lKG5leHRMYWJlbCwgbmV4dEFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5nb3RvTmV4dChuZXh0QXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuTG9hZGluZ1NjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgTG9hZGluZ1NjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHBoaW5hLmdhbWUuTG9hZGluZ1NjZW5lLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZ2F1Z2UgPSBuZXcgR2F1Z2Uoe1xyXG4gICAgICB2YWx1ZTogMCxcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogMTIsXHJcbiAgICAgIGZpbGw6ICcjYWFhJyxcclxuICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgICAgZ2F1Z2VDb2xvcjogJ2hzbGEoMjAwLCAxMDAlLCA4MCUsIDAuOCknLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSkuYWRkQ2hpbGRUbyh0aGlzKVxyXG4gICAgICAuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAwLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRPcmlnaW4oXHJcbiAgICAgICAgMC41LCBcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAvLyB0aGlzLmZyb21KU09OKHtcclxuICAgIC8vICAgY2hpbGRyZW46IHtcclxuICAgIC8vICAgICBnYXVnZToge1xyXG4gICAgLy8gICAgICAgY2xhc3NOYW1lOiAncGhpbmEudWkuR2F1Z2UnLFxyXG4gICAgLy8gICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAvLyAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgLy8gICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgIC8vICAgICAgICAgaGVpZ2h0OiAxMixcclxuICAgIC8vICAgICAgICAgZmlsbDogJyNhYWEnLFxyXG4gICAgLy8gICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICBnYXVnZUNvbG9yOiAnaHNsYSgyMDAsIDEwMCUsIDgwJSwgMC44KScsXHJcbiAgICAvLyAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgIC8vICAgICAgIHk6IDAsXHJcbiAgICAvLyAgICAgICBvcmlnaW5ZOiAwLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgdmFyIGxvYWRlciA9IG5ldyBBc3NldExvYWRlcigpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmxpZSkge1xyXG4gICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblRpbWUgPSAxMCoxMDAwO1xyXG4gICAgICB0aGlzLmdhdWdlLnZhbHVlID0gOTA7XHJcblxyXG4gICAgICBsb2FkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25UaW1lID0gMDtcclxuICAgICAgICB0aGlzLmdhdWdlLnZhbHVlID0gMTAwO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25UaW1lID0gMTAwO1xyXG4gICAgICBsb2FkZXIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB0aGlzLmdhdWdlLnZhbHVlID0gZS5wcm9ncmVzcyAqIDEwMDtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2F1Z2Uub25mdWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmV4aXRUeXBlID09PSAnYXV0bycpIHtcclxuICAgICAgICB0aGlzLmFwcC5wb3BTY2VuZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2xvYWRlZCcpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGxvYWRlci5sb2FkKG9wdGlvbnMuYXNzZXRzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Mb2FkaW5nU2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgZXhpdFR5cGU6ICdhdXRvJyxcclxuICBsaWU6IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLlNwbGFzaFNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBTcGxhc2hTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IFNwbGFzaFNjZW5lLmRlZmF1bHRzO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVGV4dHVyZSgpO1xyXG4gICAgdGV4dHVyZS5sb2FkKGRlZmF1bHRzLmltYWdlVVJMKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZSkuYWRkQ2hpbGRUbyh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRQb3NpdGlvbih0aGlzLmdyaWRYLmNlbnRlcigpLCB0aGlzLmdyaWRZLmNlbnRlcigpKTtcclxuICAgIHRoaXMuc3ByaXRlLmFscGhhID0gMDtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS50d2VlbmVyXHJcbiAgICAgIC5jbGVhcigpXHJcbiAgICAgIC50byh7YWxwaGE6MX0sIDUwMCwgJ2Vhc2VPdXRDdWJpYycpXHJcbiAgICAgIC53YWl0KDEwMDApXHJcbiAgICAgIC50byh7YWxwaGE6MH0sIDUwMCwgJ2Vhc2VPdXRDdWJpYycpXHJcbiAgICAgIC53YWl0KDI1MClcclxuICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0sIHRoaXMpXHJcbiAgICAgIDtcclxuICB9XHJcblxyXG59XHJcblxyXG5TcGxhc2hTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBpbWFnZVVSTDogJ2h0dHA6Ly9jZG4ucmF3Z2l0LmNvbS9waGktanAvcGhpbmEuanMvZGV2ZWxvcC9sb2dvLnBuZycsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuVGl0bGVTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgVGl0bGVTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBUaXRsZVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBwaGluYS5nYW1lLlRpdGxlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgdGl0bGVMYWJlbDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHBhcmFtcy50aXRsZSxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IDY0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNCksXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmV4aXRUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgICB0b3VjaExhYmVsOiB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlRPVUNIIFNUQVJUXCIsXHJcbiAgICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDEyKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuVGl0bGVTY2VuZS5kZWZhdWx0cyA9IHtcclxuICB0aXRsZTogJ3BoaW5hLmpzIGdhbWVzJyxcclxuICBtZXNzYWdlOiAnJyxcclxuXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ2hzbCgyMDAsIDgwJSwgNjQlKScsXHJcbiAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxuXHJcbiAgZXhpdFR5cGU6ICd0b3VjaCcsXHJcbn07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuUGF1c2VTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgUGF1c2VTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBQYXVzZVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBwaGluYS5nYW1lLlBhdXNlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdQYXVzZScsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDQ4LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLmNlbnRlcigpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGF1c2VTY2VuZS5kZWZhdWx0cyA9ICB7XHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ2hzbGEoMCwgMCUsIDAlLCAwLjg1KScsXHJcblxyXG4gIGV4aXRUeXBlOiAndG91Y2gnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLlJlc3VsdFNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBSZXN1bHRTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBSZXN1bHRTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBwYXJhbXMgPSAoe30pLiRzYWZlKHBhcmFtcywgcGhpbmEuZ2FtZS5SZXN1bHRTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG5cclxuICAgIHZhciBtZXNzYWdlID0gZm9ybWF0LmNhbGwocGFyYW1zLm1lc3NhZ2UsIHBhcmFtcyk7XHJcbiAgICAvLyB2YXIgbWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlLmZvcm1hdChwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICBzY29yZVRleHQ6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnc2NvcmUnLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA0OCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLnNwYW4oOCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY29yZUxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLnNjb3JlKycnLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA3MixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLnNwYW4oOCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNiksXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWVzc2FnZUxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBudWxsLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig5KSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaGFyZUJ1dHRvbjoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBCdXR0b24sXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS51aS5CdXR0b24nLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiAn4piFJyxcclxuICAgICAgICAgICAgd2lkdGg6IDEyOCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjgsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IDUwLFxyXG4gICAgICAgICAgICBjb3JuZXJSYWRpdXM6IDY0LFxyXG4gICAgICAgICAgICBmaWxsOiAncmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnI2FhYScsXHJcbiAgICAgICAgICAgIC8vIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigtMyksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oMTIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxheUJ1dHRvbjoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBCdXR0b24sXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS51aS5CdXR0b24nLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiAn4pa2JyxcclxuICAgICAgICAgICAgd2lkdGg6IDEyOCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjgsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IDUwLFxyXG4gICAgICAgICAgICBjb3JuZXJSYWRpdXM6IDY0LFxyXG4gICAgICAgICAgICBmaWxsOiAncmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnI2FhYScsXHJcbiAgICAgICAgICAgIC8vIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigzKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3BhbigxMiksXHJcblxyXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBvbnB1c2g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmV4aXRUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hhcmVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGV4dCA9IGZvcm1hdC5jYWxsKCdTY29yZTogezB9XFxuezF9JywgcGFyYW1zLnNjb3JlLCBtZXNzYWdlKTtcclxuICAgICAgLy8gdmFyIHRleHQgPSAnU2NvcmU6IHswfVxcbnsxfScuZm9ybWF0KHBhcmFtcy5zY29yZSwgbWVzc2FnZSk7XHJcbiAgICAgIHZhciB1cmwgPSBUd2l0dGVyLmNyZWF0ZVVSTCh7XHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICBoYXNodGFnczogcGFyYW1zLmhhc2h0YWdzLFxyXG4gICAgICAgIHVybDogcGFyYW1zLnVybCxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ3NoYXJlIHdpbmRvdycsICd3aWR0aD00ODAsIGhlaWdodD0zMjAnKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUmVzdWx0U2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgc2NvcmU6IDE2LFxyXG5cclxuICBtZXNzYWdlOiAndGhpcyBpcyBwaGluYS5qcyBwcm9qZWN0LicsXHJcbiAgaGFzaHRhZ3M6ICdwaGluYV9qcyxnYW1lLGphdmFzY3JpcHQnLFxyXG4gIHVybDogcGhpbmEkMS5nbG9iYWwubG9jYXRpb24gJiYgcGhpbmEkMS5nbG9iYWwubG9jYXRpb24uaHJlZixcclxuXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ2hzbCgyMDAsIDgwJSwgNjQlKScsXHJcbiAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiDjg4fjg5Xjgqnjg6vjg4jjga5haW4gY2xhc3NcclxuICovXHJcbmNsYXNzIERlZmF1bHRNYWluU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgTWFpblNjZW5lJyk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiDjgq/jg6njgrnjgYxwaGluYS5kZWZpbmXjgavjgojjgaPjgablrprnvqnjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZlcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUg44Kv44Op44K55ZCN44CCcGhpbmEuZ2FtZVtjbGFzc05hbWVd44Gn5a6a576p44GV44KM44Gm44GE44KL44GL44KC6Kq/44G544KLXHJcbiAqIEByZXR1cm4ge3N0cmluZ3xib29sZWFufSDlrprnvqnjgZXjgozjgabjgozjgbDjgZ3jga7jgb7jgb7jgq/jg6njgrnlkI3mloflrZfliJfjgpLov5TjgZlcclxuICovXHJcbmZ1bmN0aW9uIGlzR2FtZUNsYXNzRGVmaW5lZChjbGFzc05hbWUpIHtcclxuICBpZiAoXHJcbiAgICB0eXBlb2YgcGhpbmEkMS51c2luZyhjbGFzc05hbWUpID09PSAnZnVuY3Rpb24nXHJcbiAgICB8fCB0eXBlb2YgcGhpbmEkMS51c2luZygncGhpbmEuZ2FtZS4nICsgY2xhc3NOYW1lKSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICkge1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5HYW1lQXBwXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuQ2FudmFzQXBwXHJcbiAqL1xyXG5jbGFzcyBHYW1lQXBwIGV4dGVuZHMgQ2FudmFzQXBwIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwge1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZSh7XHJcbiAgICAgIHN0YXJ0TGFiZWw6ICd0aXRsZScsXHJcbiAgICB9KTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciBzdGFydExhYmVsID0gb3B0aW9ucy5zdGFydExhYmVsIHx8ICd0aXRsZSc7XHJcblxyXG4gICAgdmFyIHNjZW5lcyA9IG9wdGlvbnMuc2NlbmVzIHx8IFtcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiU3BsYXNoU2NlbmVcIikgfHwgU3BsYXNoU2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICdzcGxhc2gnLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ3RpdGxlJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiVGl0bGVTY2VuZVwiKSB8fCBUaXRsZVNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAndGl0bGUnLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ21haW4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJNYWluU2NlbmVcIikgfHwgRGVmYXVsdE1haW5TY2VuZSxcclxuICAgICAgICBsYWJlbDogJ21haW4nLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ3Jlc3VsdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGlzR2FtZUNsYXNzRGVmaW5lZChcIlJlc3VsdFNjZW5lXCIpIHx8IFJlc3VsdFNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAncmVzdWx0JyxcclxuICAgICAgICBuZXh0TGFiZWw6ICd0aXRsZScsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHNjZW5lcyA9IGVhY2guY2FsbChzY2VuZXMsIGZ1bmN0aW9uKHMpIHtcclxuICAgICAgcy5hcmd1bWVudHMgPSBzLmFyZ3VtZW50cyB8fCBvcHRpb25zO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNjZW5lID0gbmV3IE1hbmFnZXJTY2VuZSh7XHJcbiAgICAgIHN0YXJ0TGFiZWw6IHN0YXJ0TGFiZWwsXHJcbiAgICAgIHNjZW5lczogc2NlbmVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuYXNzZXRzKSB7XHJcbiAgICAgIC8vIOODreODvOODh+OCo+ODs+OCsO+8mmVzbeeJiOOBp+OBr+eLrOiHquOBrkxvYWRpbmdTY2VuZeOBr+OCquODl+OCt+ODp+ODs+OBp+a4oeOBm+OCi+OCiOOBhuOBq+OBmeOCi1xyXG5cclxuICAgICAgdmFyIGxvYWRpbmdPcHRpb25zID0gJGV4dGVuZC5jYWxsKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgIC8vIHZhciBsb2FkaW5nT3B0aW9ucyA9ICh7fSkuJGV4dGVuZChvcHRpb25zLCB7XHJcbiAgICAgICAgZXhpdFR5cGU6ICcnLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8g44Kw44Ot44O844OQ44Or5a6a576p44GuTG9hZGluZ1NjZW5l44KS5o6i44GZ77yI5b6T5p2l77yJXHJcbiAgICAgIC8vIC0+IOOBquOBkeOCjOOBsOOCquODl+OCt+ODp+ODs+OCkuODgeOCp+ODg+OCryBcclxuICAgICAgLy8gLT4g44GT44KM44KC44Gq44GR44KM44Gw44OH44OV44Kp44Or44OI44GuTG9hZGluZ1NjZW5l44KS5L2/44GGXHJcbiAgICAgIHZhciBkZWZpbmVkTG9hZGluZ0NsYXNzID0gcGhpbmEkMS51c2luZyhcIkxvYWRpbmdTY2VuZVwiKSB8fCBwaGluYSQxLnVzaW5nKFwicGhpbmEuZ2FtZS5Mb2FkaW5nU2NlbmVcIik7XHJcbiAgICAgIHZhciBsb2FkaW5nID0gKHR5cGVvZiBkZWZpbmVkTG9hZGluZ0NsYXNzID09PSAnZnVuY3Rpb24nKSBcclxuICAgICAgICA/IGRlZmluZWRMb2FkaW5nQ2xhc3MobG9hZGluZ09wdGlvbnMpXHJcbiAgICAgICAgOiAob3B0aW9ucy5sb2FkaW5nU2NlbmUgIT0gbnVsbClcclxuICAgICAgICAgID8gbmV3IG9wdGlvbnMubG9hZGluZ1NjZW5lKGxvYWRpbmdPcHRpb25zKSBcclxuICAgICAgICAgIDogbmV3IExvYWRpbmdTY2VuZShsb2FkaW5nT3B0aW9ucylcclxuICAgICAgO1xyXG4gICAgICB0aGlzLnJlcGxhY2VTY2VuZShsb2FkaW5nKTtcclxuXHJcbiAgICAgIGxvYWRpbmcub25sb2FkZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnJlcGxhY2VTY2VuZShzY2VuZSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcclxuICAgICAgICAgIHRoaXMuX2VuYWJsZURlYnVnZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5yZXBsYWNlU2NlbmUoc2NlbmUpO1xyXG4gICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZURlYnVnZ2VyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDoh6rli5Xjgafjg53jg7zjgrrjgZnjgotcclxuICAgIC8vIGVzbeeJiOOBp+OBr+eLrOiHquOBruODneODvOOCuuOCt+ODvOODs+OBr+OCquODl+OCt+ODp+ODs+OBp+a4oeOBmVxyXG4gICAgLy8g5byV5pWw44GM5rih44Gb44Gq44GE44Gu44Gv5YWD44GL44KJXHJcbiAgICBpZiAob3B0aW9ucy5hdXRvUGF1c2UpIHtcclxuICAgICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkZWZpbmVkUGF1c2VTY2VuZSA9IHBoaW5hJDEudXNpbmcoXCJwaGluYS5nYW1lLlBhdXNlU2NlbmVcIik7XHJcbiAgICAgICAgdmFyIHBhdXNlU2NlbmUgPSAodHlwZW9mIGRlZmluZWRQYXVzZVNjZW5lID09PSAnZnVuY3Rpb24nKSBcclxuICAgICAgICAgID8gZGVmaW5lZFBhdXNlU2NlbmUoKSBcclxuICAgICAgICAgIDogKG9wdGlvbnMucGF1c2VTY2VuZSkgXHJcbiAgICAgICAgICAgID8gbmV3IG9wdGlvbnMucGF1c2VTY2VuZSgpIFxyXG4gICAgICAgICAgICA6IG5ldyBQYXVzZVNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5wdXNoU2NlbmUocGF1c2VTY2VuZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2VuYWJsZURlYnVnZ2VyKCkge1xyXG4gICAgaWYgKHRoaXMuZ3VpKSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMuZW5hYmxlRGF0R1VJKGZ1bmN0aW9uKGd1aSkge1xyXG4gICAgICB2YXIgZiA9IGd1aS5hZGRGb2xkZXIoJ3NjZW5lcycpO1xyXG4gICAgICB2YXIgZnVuY3MgPSB7fTtcclxuICAgICAgdGhpcy5yb290U2NlbmUuc2NlbmVzLmZvckVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgLy8gdGhpcy5yb290U2NlbmUuc2NlbmVzLmVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgICBmdW5jc1tzY2VuZS5sYWJlbF0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMucm9vdFNjZW5lLnJlcGxhY2VTY2VuZShzY2VuZS5sYWJlbCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zY2VuZXMubGVuZ3RoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIGZvckluLmNhbGwoZnVuY3MsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gZnVuY3MuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGYuYWRkKGZ1bmNzLCBrZXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgZi5vcGVuKCk7XHJcblxyXG4gICAgICB0aGlzLmd1aSA9IGd1aTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLkNvdW50U2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIENvdW50U2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCBDb3VudFNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUocGhpbmEuZ2FtZS5Db3VudFNjZW5lLmRlZmF1bHRzKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgZmlsbDogb3B0aW9ucy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBvcHRpb25zLmZvbnRTaXplLFxyXG4gICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLmNlbnRlcigpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmNvdW50IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGhpcy5jb3VudExpc3QgPSBjbG9uZS5jYWxsKG9wdGlvbnMuY291bnQpLnJldmVyc2UoKTtcclxuICAgICAgLy8gdGhpcy5jb3VudExpc3QgPSBvcHRpb25zLmNvdW50LmNsb25lKCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY291bnRMaXN0ID0gcmFuZ2UuY2FsbChbXSwgMSwgb3B0aW9ucy5jb3VudCsxKTtcclxuICAgICAgLy8gdGhpcy5jb3VudExpc3QgPSBBcnJheS5yYW5nZSgxLCBvcHRpb25zLmNvdW50KzEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudExpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5leGl0VHlwZSA9IG9wdGlvbnMuZXhpdFR5cGU7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlQ291bnQoKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVDb3VudCgpIHtcclxuICAgIHZhciBlbmRGbGFnID0gdGhpcy5jb3VudGVyIDw9IDA7XHJcbiAgICB2YXIgaW5kZXggPSAtLXRoaXMuY291bnRlcjtcclxuXHJcbiAgICB0aGlzLmxhYmVsLnRleHQgPSB0aGlzLmNvdW50TGlzdFtpbmRleF07XHJcblxyXG4gICAgdGhpcy5sYWJlbC5zY2FsZS5zZXQoMSwgMSk7XHJcbiAgICB0aGlzLmxhYmVsLnR3ZWVuZXJcclxuICAgICAgLmNsZWFyKClcclxuICAgICAgLnRvKHtcclxuICAgICAgICBzY2FsZVg6IDEsXHJcbiAgICAgICAgc2NhbGVZOiAxLFxyXG4gICAgICAgIGFscGhhOiAxLFxyXG4gICAgICB9LCAyNTApXHJcbiAgICAgIC53YWl0KDUwMClcclxuICAgICAgLnRvKHtcclxuICAgICAgICBzY2FsZVg6IDEuNSxcclxuICAgICAgICBzY2FsZVk6IDEuNSxcclxuICAgICAgICBhbHBoYTogMC4wXHJcbiAgICAgIH0sIDI1MClcclxuICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZsYXJlKCdmaW5pc2gnKTtcclxuICAgICAgICAgIGlmICh0aGlzLmV4aXRUeXBlID09PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAucG9wU2NlbmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQ291bnRTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBjb3VudDogMyxcclxuXHJcbiAgd2lkdGg6IDY0MCxcclxuICBoZWlnaHQ6IDk2MCxcclxuXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGZvbnRTaXplOiAxNjQsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MCwgNTAsIDUwLCAxKScsXHJcblxyXG4gIGV4aXRUeXBlOiAnYXV0bycsXHJcbn07XHJcblxyXG5leHBvcnQgeyBBY2NlbGVyb21ldGVyLCBBY2Nlc3NvcnksIEFqYXgsIEFzc2V0LCBBc3NldExvYWRlciwgQXNzZXRNYW5hZ2VyLCBCYXNlQXBwLCBCdXR0b24sIENhbnZhcywgQ2FudmFzQXBwLCBDYW52YXNMYXllciwgQ2FudmFzUmVuZGVyZXIsIENoYW5nZURpc3BhdGNoZXIsIENpcmNsZSwgQ2lyY2xlR2F1Z2UsIENpcmNsZVNoYXBlLCBDb2xsaXNpb24sIENvbG9yLCBDb3VudFNjZW5lLCBEaXNwbGF5RWxlbWVudCwgRGlzcGxheVNjZW5lLCBEb21BcHAsIERyYWdnYWJsZSwgRWxlbWVudCwgRXZlbnREaXNwYXRjaGVyLCBGaWxlLCBGbGlja2FibGUsIEZsb3csIEZvbnQsIEZyYW1lQW5pbWF0aW9uLCBHYW1lQXBwLCBHYW1lcGFkTWFuYWdlciwgR2F1Z2UsIEdyaWQsIEhlYXJ0U2hhcGUsIElucHV0LCBJbnRlcmFjdGl2ZSwgS2V5Ym9hcmQsIExhYmVsLCBMYWJlbEFyZWEsIExheWVyLCBMb2FkaW5nU2NlbmUsIE1hbmFnZXJTY2VuZSwgTWF0cml4MzMsIE1vdXNlLCBPYmplY3QyRCwgUGF0aFNoYXBlLCBQYXVzZVNjZW5lLCBQaHlzaWNhbCwgUGxhaW5FbGVtZW50LCBQb2x5Z29uU2hhcGUsIFF1ZXJ5U3RyaW5nLCBSYW5kb20sIFJlY3QsIFJlY3RhbmdsZVNoYXBlLCBSZXN1bHRTY2VuZSwgU2NlbmUsIFNjcmlwdCwgU2hhcGUsIFNvdW5kTWFuYWdlciwgU3BsYXNoU2NlbmUsIFNwcml0ZSwgU3ByaXRlU2hlZXQsIFN0YXJTaGFwZSwgU3VwcG9ydCwgVGV4dHVyZSwgVGhyZWVMYXllciwgVGlja2VyLCBUaXRsZVNjZW5lLCBUb3VjaCwgVG91Y2hMaXN0LCBUcmlhbmdsZVNoYXBlLCBUd2VlbiwgVHdlZW5lciwgVHdpdHRlciwgVXBkYXRlciwgVmVjdG9yMiwgVmVjdG9yMywgV2F2ZSwgcGhpbmEkMSBhcyBwaGluYSB9O1xyXG4iLCJleHBvcnQgY29uc3QgQXNzZXRDYXRhbG9nID0ge1xuICBpbWFnZToge1xuICAgIFwidG9tYXBpeW9cIjogXCIuL2Fzc2V0cy9pbWFnZXMvdG9tYXBpeW8ucG5nXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nXCIsXG4gICAgXCJ0dWJlMVwiOiBcIi4vYXNzZXRzL2ltYWdlcy90dWJlMS5wbmdcIixcbiAgICBcInR1YmUyXCI6IFwiLi9hc3NldHMvaW1hZ2VzL3R1YmUyLnBuZ1wiLFxuICB9XG59OyIsImltcG9ydCB7IExhYmVsIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgJHNhZmUsIHRpbWVzIH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvVXRpbHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBDb3VudERvd24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCB7IHN0YXJ0Q291bnQ6IDMsIGludGVydmFsOiAxMDAwLCBzdGFydFNjYWxlOiAxLCBlbmRTY2FsZTogMC41IH0pO1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5jb3VudCA9IG9wdGlvbnMuc3RhcnRDb3VudDtcblxuICAgIGNvbnN0IGxhYmVsT3B0aW9ucyA9IHtcbiAgICAgIHRleHQ6IGAke3RoaXMuY291bnR9YCxcbiAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgIGZvbnRTaXplOiAxMjgsXG4gICAgfVxuICAgIHRoaXMubGFiZWwgPSBuZXcgTGFiZWwobGFiZWxPcHRpb25zKVxuICAgICAgLnNldFNjYWxlKG9wdGlvbnMuc3RhcnRTY2FsZSlcbiAgICAgIC5hZGRDaGlsZFRvKHRoaXMpO1xuXG4gICAgdGhpcy5sYWJlbC50d2VlbmVyLmNsZWFyKCk7XG4gICAgdGltZXMuY2FsbChvcHRpb25zLnN0YXJ0Q291bnQsIGkgPT4ge1xuICAgICAgdGhpcy5sYWJlbC50d2VlbmVyXG4gICAgICAgIC50byh7IHNjYWxlWDogb3B0aW9ucy5lbmRTY2FsZSwgc2NhbGVZOiBvcHRpb25zLmVuZFNjYWxlLCBhbHBoYTogMCB9LCBvcHRpb25zLmludGVydmFsIClcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY291bnQtLTtcbiAgICAgICAgICBpZiAodGhpcy5jb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwudGV4dCA9IGAke3RoaXMuY291bnR9YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC50ZXh0ID0gXCJTVEFSVFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLndhaXQoMTAwKVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sYWJlbC5hbHBoYSA9IDEuMDtcbiAgICAgICAgICB0aGlzLmxhYmVsLnNldFNjYWxlKG9wdGlvbnMuc3RhcnRTY2FsZSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy5sYWJlbC50d2VlbmVyXG4gICAgICAud2FpdCgxMDAwKVxuICAgICAgLmNhbGwoKCkgPT4gdGhpcy5mbGFyZSgnY291bnRkb3duX2VuZCcpKVxuICAgICAgLnRvKHsgYWxwaGE6IDAgfSwgb3B0aW9ucy5pbnRlcnZhbCAvIDIgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlzcGxheUVsZW1lbnQsIFNwcml0ZSwgVmVjdG9yMiB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3QgZXh0ZW5kcyBEaXNwbGF5RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnRpbWUgPSAwO1xuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCAoKSA9PiB0aGlzLnRpbWUrKyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNwcml0ZSwgVmVjdG9yMiB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7ICRzYWZlIH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvVXRpbHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCB7IHdpZHRoOiA2NCwgaGVpZ2h0OiA2NCB9KTtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoXCJ0b21hcGl5b1wiLCA2NCwgNjQpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzKVxuICAgICAgLnNldEZyYW1lSW5kZXgoMSk7XG5cbiAgICB0aGlzLmFuaW1hdGlvblNlcSA9IFsxLCAyLCAzXTtcbiAgICB0aGlzLmFuaW1hdGlvblNlcUluZGV4ID0gMDtcblxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcbiAgICB0aGlzLmp1bXBQb3dlciA9IDEwO1xuXG4gICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcblxuICAgIHRoaXMub24oJ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuanVtcCgxNSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoYXBwKSB7XG4gICAgaWYgKHRoaXMudGltZSAlIDUgPT0gMCkge1xuICAgICAgdGhpcy5hbmltYXRpb25TZXFJbmRleCsrO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uU2VxSW5kZXggPT0gdGhpcy5hbmltYXRpb25TZXEubGVuZ3RoKSB0aGlzLmFuaW1hdGlvblNlcUluZGV4ID0gMDtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYW5pbWF0aW9uU2VxW3RoaXMuYW5pbWF0aW9uU2VxSW5kZXhdO1xuICAgICAgdGhpcy5zcHJpdGUuc2V0RnJhbWVJbmRleChpZHgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1N0YXJ0KSByZXR1cm47XG5cbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5KTtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gMC40OTtcblxuICAgIGlmICh0aGlzLnkgPiA2NDApIHtcbiAgICAgIHRoaXMueSA9IDY0MDtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICBpZiAoIXRoaXMuaXNEZWFkKSB7XG4gICAgICAgIHRoaXMuZmxhcmUoXCJkZWFkXCIpO1xuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50aW1lKys7XG4gIH1cblxuICBqdW1wKHBvd2VyKSB7XG4gICAgcG93ZXIgPSBwb3dlciB8fCB0aGlzLmp1bXBQb3dlcjtcbiAgICBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkgcmV0dXJuO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLmp1bXBQb3dlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ByaXRlLCBWZWN0b3IyIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgJHNhZmUgfSBmcm9tIFwiLi4vZXh0ZW5zaW9ucy9VdGlsc1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFR1YmUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCB7XG4gICAgICB3aWR0aDogNTIsXG4gICAgICBoZWlnaHQ6IDMyMCxcbiAgICAgIGlzQm90dG9tOiBmYWxzZSxcbiAgICB9KTtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoYHR1YmUke29wdGlvbnMuaXNCb3R0b20gPyBcIjJcIiA6IFwiMVwifWApLmFkZENoaWxkVG8odGhpcyk7XG4gICAgaWYgKG9wdGlvbnMuaXNCb3R0b20pIHtcbiAgICAgIHRoaXMuc2V0T3JpZ2luKDAuNSwgMC4wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRPcmlnaW4oMC41LCAxLjApO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbWV0aG9kICAkZXh0ZW5kXG4gKiDku5bjga7jg6njgqTjg5bjg6njg6rjgajnq7blkIjjgZfjgaHjgoPjgYbjga7jgacgZXh0ZW5kIC0+ICRleHRlbmQg44Go44GX44G+44GX44GfXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZXh0ZW5kKCkge1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4gIFxuLyoqXG4gKiBAbWV0aG9kICAkc2FmZVxuICog5a6J5YWo5ouh5by1XG4gKiDkuIrmm7jjgY3jgZfjgarjgYRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzYWZlKHNvdXJjZSkge1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICBpZiAodGhpc1twcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkgdGhpc1twcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfSwgdGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEBtZXRob2QgdGltZXNcbiAqIDAg44GL44KJ6Ieq5YiG6Ieq6Lqr44Gu5pWwLTHjgb7jgafjgIHjgqvjgqbjg7Pjgr/jgpLjgqTjg7Pjgq/jg6rjg6Hjg7Pjg4jjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogICAgIGFyciA9IFtdO1xuICogICAgICg1KS50aW1lcyhmdW5jdGlvbihpKXtcbiAqICAgICAgIGFyci5wdXNoKGkpO1xuICogICAgIH0pOyAvLyA9PiBbMCwgMSwgMiwgMywgNF1cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSDplqLmlbDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/oh6rliIboh6rouqvjgIJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzKGZuLCBzZWxmKSB7XG4gIHNlbGYgPSBzZWxmIHx8IHRoaXM7XG4gIGZvciAodmFyIGk9MDsgaTx0aGlzOyArK2kpIHtcbiAgICBmbi5jYWxsKHNlbGYsIGksIHRoaXMpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuICAiLCJpbXBvcnQgeyBwaGluYSwgQ2FudmFzQXBwLCBEaXNwbGF5U2NlbmUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyBTY2VuZUZsb3cgfSBmcm9tIFwiL3NyYy9zY2VuZXMvU2NlbmVGbG93XCJcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc29sZS5sb2coJyMjIyMjIERldmVsb3BtZW50IG1vZGUgIyMjIyMnKTtcbn1cblxuRGlzcGxheVNjZW5lLmRlZmF1bHRzLndpZHRoID0gOTYwO1xuRGlzcGxheVNjZW5lLmRlZmF1bHRzLmhlaWdodCA9IDY0MDtcblxucGhpbmEubWFpbigoKT0+IHtcbiAgY29uc3QgYXBwT3B0aW9uID0ge1xuICAgIHdpZHRoOiA5NjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZnBzOiA2MCxcbiAgfTtcbiAgY29uc3QgYXBwID0gbmV3IENhbnZhc0FwcChhcHBPcHRpb24pO1xuICBhcHAucmVwbGFjZVNjZW5lKG5ldyBTY2VuZUZsb3coKSk7XG4gIGFwcC5ydW4oKTtcbn0pO1xuIiwiaW1wb3J0IHsgRGlzcGxheUVsZW1lbnQsIERpc3BsYXlTY2VuZSwgU3ByaXRlIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgQ291bnREb3duIH0gZnJvbSBcIi4uL2VsZW1lbnRzL0NvdW50RG93blwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL1BsYXllclwiO1xuaW1wb3J0IHsgVHViZSB9IGZyb20gXCIuLi9lbGVtZW50cy9UdWJlXCI7XG5pbXBvcnQgeyAkc2FmZSB9IGZyb20gXCIuLi9leHRlbnNpb25zL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgeyBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycgfSk7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLnR1YmVzID0gW107XG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIC8v44OQ44OD44Kv44Kw44Op44Km44Oz44OJXG4gICAgdGhpcy5iZyA9IG5ldyBTcHJpdGUoXCJiYWNrZ3JvdW5kXCIpLmFkZENoaWxkVG8odGhpcykuc2V0T3JpZ2luKDAsIDApO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IERpc3BsYXlFbGVtZW50KCkuYWRkQ2hpbGRUbyh0aGlzKTtcbiAgICB0aGlzLmZvcmVncm91bmQgPSBuZXcgRGlzcGxheUVsZW1lbnQoKS5hZGRDaGlsZFRvKHRoaXMpO1xuXG4gICAgLy/jg5fjg6zjgqTjg6Tjg7xcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKVxuICAgICAgLnNldFBvc2l0aW9uKHRoaXMud2lkdGggLyA0LCB0aGlzLmhlaWdodCAvIDIpXG4gICAgICAuYWRkQ2hpbGRUbyh0aGlzLmZvcmVncm91bmQpO1xuXG4gICAgdGhpcy5wbGF5ZXIub24oJ2RlYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmdhbWVvdmVyKCk7XG4gICAgfSk7XG5cbiAgICAvL+OCq+OCpuODs+ODiOODgOOCpuODs1xuICAgIHRoaXMuY291bnREb3duID0gbmV3IENvdW50RG93bigpXG4gICAgICAuc2V0UG9zaXRpb24odGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hZGRDaGlsZFRvKHRoaXMpO1xuXG4gICAgdGhpcy5jb3VudERvd24ub24oJ2NvdW50ZG93bl9lbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5ZXIuZmxhcmUoJ3N0YXJ0Jyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoYXBwKSB7XG4gICAgaWYgKCF0aGlzLmlzU3RhcnQpIHJldHVybjtcbiAgICBpZiAoYXBwLnBvaW50ZXIuZ2V0UG9pbnRpbmcoKSkge1xuICAgICAgLy8gdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oYXBwLnBvaW50ZXIueCwgYXBwLnBvaW50ZXIueSlcbiAgICAgIHRoaXMucGxheWVyLmp1bXAoKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnRpbWUgJSAxMjAgPT0gMCkgdGhpcy5lbnRlclR1YmUoKTtcblxuICAgIHRoaXMudHViZXMuZm9yRWFjaCh0dWJlID0+IHtcbiAgICAgIHR1YmUueCAtPSAzO1xuICAgICAgaWYgKHR1YmUueCA8IC01MCkge1xuICAgICAgICB0dWJlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHR1YmUuaGl0VGVzdEVsZW1lbnQodGhpcy5wbGF5ZXIpKSB7XG4gICAgICAgIHRoaXMucGxheWVyLmZsYXJlKCdkZWFkJyk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIHRoaXMudGltZSsrO1xuICB9XG5cbiAgZW50ZXJUdWJlKCkge1xuICAgIGNvbnN0IGdhcCA9IDMwMDtcbiAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgIGNvbnN0IHR1YmUxID0gbmV3IFR1YmUoeyBpc0JvdHRvbTogZmFsc2UgfSk7XG4gICAgdHViZTEuc2V0UG9zaXRpb24odGhpcy53aWR0aCArIDMwLCB0aGlzLmhlaWdodCAvIDIgLSB0dWJlMS5oZWlnaHQgLyAyIC0gZ2FwIC8gMiArIG9mZnNldCkuYWRkQ2hpbGRUbyh0aGlzLmJhY2tncm91bmQpO1xuICAgIGNvbnN0IHR1YmUyID0gbmV3IFR1YmUoeyBpc0JvdHRvbTogdHJ1ZSB9KTtcbiAgICB0dWJlMi5zZXRQb3NpdGlvbih0aGlzLndpZHRoICsgMzAsIHRoaXMuaGVpZ2h0IC8gMiArIHR1YmUyLmhlaWdodCAvIDIgKyBnYXAgLyAyICsgb2Zmc2V0KS5hZGRDaGlsZFRvKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgdGhpcy50dWJlcy5wdXNoKHR1YmUxKTtcbiAgICB0aGlzLnR1YmVzLnB1c2godHViZTIpO1xuICB9XG5cbiAgZ2FtZW92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gIH1cbn1cblxuLy9NYW5hZ2VyU2NlbmXjgafkvb/nlKjlh7rmnaXjgovmp5jjgavjgZnjgovngrpcbi8vIHdpbmRvdy5NYWluU2NlbmUgPSBNYWluU2NlbmU7XG4iLCJpbXBvcnQgeyBMb2FkaW5nU2NlbmUsIE1hbmFnZXJTY2VuZSwgRGlzcGxheVNjZW5lLCBUaXRsZVNjZW5lIH0gZnJvbSBcInBoaW5hLmpzL2J1aWxkL3BoaW5hLmVzbVwiO1xuaW1wb3J0IHsgQXNzZXRDYXRhbG9nIH0gZnJvbSBcIi4uL2Fzc2V0cy9Bc3NldENhdGFsb2dcIjtcbmltcG9ydCB7IE1haW5TY2VuZSB9IGZyb20gXCIuL01haW5TY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVGbG93IGV4dGVuZHMgTWFuYWdlclNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc3RhcnRMYWJlbDogXCJsb2FkaW5nXCIsXG4gICAgICBzY2VuZXM6IFt7XG4gICAgICAgIGxhYmVsOiBcImxvYWRpbmdcIixcbiAgICAgICAgY2xhc3NOYW1lOiBMb2FkaW5nU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgICBhc3NldHM6IEFzc2V0Q2F0YWxvZyxcbiAgICAgICAgfSxcbiAgICAgIH0se1xuICAgICAgICBsYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgICBjbGFzc05hbWU6IFRpdGxlU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJtYWluXCIsXG4gICAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICAgIHRpdGxlOiBcIlBISU5BUFkgQklSRCFcIlxuICAgICAgICB9LFxuICAgICAgfSx7XG4gICAgICAgIGxhYmVsOiBcIm1haW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBNYWluU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9