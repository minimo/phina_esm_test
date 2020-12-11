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
    return "{x:{x}, y:{y}}".format(this);
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
    return "|{m00}, {m01}, {m02}|\n|{m10}, {m11}, {m12}|\n|{m20}, {m21}, {m22}|".format(this);
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
      this.target.$extend(task.data.values);
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
  }
};

/***/ }),

/***/ "./src/extensions/SpriteEx.js":
/*!************************************!*
  !*** ./src/extensions/SpriteEx.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpriteEx": () => /* binding */ SpriteEx
/* harmony export */ });
/* harmony import */ var phina_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js */ "./node_modules/phina.js/build/phina.esm.js");


class SpriteEx extends phina_js__WEBPACK_IMPORTED_MODULE_0__.Sprite {
  constructor(options) {
    super(options);
  }

  setFrameTrimming(x, y, width, height) {
    this._frameTrimX = x || 0;
    this._frameTrimY = y || 0;
    this._frameTrimWidth = width || this.image.domElement.width - this._frameTrimX;
    this._frameTrimHeight = height || this.image.domElement.height - this._frameTrimY;
    return this;
  }
  
  setFrameIndex(index, width, height) {
    var sx = this._frameTrimX || 0;
    var sy = this._frameTrimY || 0;
    var sw = this._frameTrimWidth  || (this.image.domElement.width-sx);
    var sh = this._frameTrimHeight || (this.image.domElement.height-sy);
  
    var tw  = width || this.width;      // tw
    var th  = height || this.height;    // th
    var row = ~~(sw / tw);
    var col = ~~(sh / th);
    var maxIndex = row*col;
    index = index%maxIndex;
  
    var x   = index%row;
    var y   = ~~(index/row);
    this.srcRect.x = sx+x*tw;
    this.srcRect.y = sy+y*th;
    this.srcRect.width  = tw;
    this.srcRect.height = th;
  
    this._frameIndex = index;
  
    return this;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phina_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phina.js */ "./node_modules/phina.js/build/phina.esm.js");
/* harmony import */ var _src_scenes_SceneFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/scenes/SceneFlow */ "./src/scenes/SceneFlow.js");



if (true) {
  console.log('##### Development mode #####');
}
  
phina_js__WEBPACK_IMPORTED_MODULE_0__.phina.main(()=> {
  const appOption = {
    fps: 60,
  };
  const app = new phina_js__WEBPACK_IMPORTED_MODULE_0__.CanvasApp(appOption);
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
/* harmony import */ var _extensions_SpriteEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/SpriteEx */ "./src/extensions/SpriteEx.js");



class MainScene extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene {
  constructor() {
    super({
      backgroundColor: 'black',
    });
    this.player = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("tomapiyo", 64, 64)
      .addChildTo(this)
      .setPosition(this.width/2, this.height/2);
  }

  update(app) {
    if (app.pointer.getPointing()) {
      this.player.setPosition(app.pointer.x, app.pointer.y)
    }
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
        arguments: {
          assets: _assets_AssetCatalog__WEBPACK_IMPORTED_MODULE_1__.AssetCatalog,
        },
        nextLabel: "title",
      },{
        label: "title",
        className: phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.TitleScene,
        nextLabel: "main",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL25vZGVfbW9kdWxlcy9waGluYS5qcy9idWlsZC9waGluYS5lc20uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvYXNzZXRzL0Fzc2V0Q2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9leHRlbnNpb25zL1Nwcml0ZUV4LmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL3NjZW5lcy9NYWluU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvc2NlbmVzL1NjZW5lRmxvdy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFT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QTs7QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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dEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELDJEQUEyRDtBQUMzRCwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7OztBQUdKOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEU7O0FBRU4sSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQywrQkFBK0I7QUFDekUsK0NBQStDLG1DQUFtQztBQUNsRiw2Q0FBNkMsaUNBQWlDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBLFlBQVksc0JBQXNCOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVcsVUFBVTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0JBQXdCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGtCQUFrQjtBQUN4QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTywyQkFBMkIsOEJBQThCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPLDJCQUEyQiw4QkFBOEI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTywyQkFBMkIsOEJBQThCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU8sMkJBQTJCLDhCQUE4QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQzs7QUFFQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTywyQkFBMkIsOEJBQThCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDOztBQUVBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU8sMkJBQTJCLDhCQUE4QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU8sMkJBQTJCLDhCQUE4QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkMsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU8sMkJBQTJCLDhCQUE4QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQyxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTywyQkFBMkIsOEJBQThCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTywyQkFBMkIsOEJBQThCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPLDJCQUEyQiw4QkFBOEI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTywyQkFBMkIsOEJBQThCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCLG1CQUFtQixrQkFBa0I7QUFDckM7QUFD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QSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix1Q0FBdUM7QUFDL0Qsd0JBQXdCLG9DQUFvQzs7QUFFNUQscUJBQXFCLHdCQUF3QjtBQUM3QyxxQkFBcUIscUJBQXFCOztBQUUxQyxlQUFlLDBCQUEwQjtBQUN6QyxnQkFBZ0IsdUJBQXVCOztBQUV2QyxhQUFhLHdCQUF3QjtBQUNyQyxjQUFjLHFCQUFxQjs7QUFFbkMsbUJBQW1CLDhCQUE4Qjs7QUFFakQscUJBQXFCLGdDQUFnQzs7QUFFckQscUJBQXFCLGdDQUFnQzs7QUFFckQsbUJBQW1CLDhCQUE4Qjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0Isb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDLDJCQUEyQixhQUFhOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekMsMEJBQTBCLGVBQWU7QUFDekMsMEJBQTBCLGVBQWU7QUFDekMsMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixhQUFhO0FBQ3hDLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixXQUFXLEVBQUUsU0FBUyxJQUFJLFdBQVc7QUFDOUQsZ0JBQWdCLFdBQVcsRUFBRSxTQUFTLElBQUksV0FBVztBQUNyRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUEsZ0NBQWdDLDhCQUE4QjtBQUM5RCwrQkFBK0IsNkJBQTZCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQsK0NBQStDLEVBQUU7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNB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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQSxRQUFRO0FBQ1Isa0NBQWtDLEdBQUcsY0FBYzs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsU0FBUzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVcsRUFBRSxTQUFTLElBQUksV0FBVztBQUNsRSxvQkFBb0IsV0FBVyxFQUFFLFNBQVMsSUFBSSxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDLG9CQUFvQixxQkFBcUI7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7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QSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBwaGluYS5qcyB2MC4yLjNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoQykgcGhpXG4gKi9cbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLk9iamVjdFxyXG4gKiBPYmplY3Tjga7mi6HlvLVcclxuICovXHJcblxyXG4vKipcclxuICog6Zai5pWw44KS6L+95YqgXHJcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IGtleSBuYW1lXHJcbiAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uICRtZXRob2QobmFtZSwgZm4pIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwge1xyXG4gICAgdmFsdWU6IGZuLFxyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICB3cml0YWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBhY2Nlc3NvclxyXG4gKiDjgqLjgq/jgrvjg4PjgrUo44K744OD44K/44O8L+OCsuODg+OCv+ODvCnjgpLlrprnvqnjgZnjgotcclxuICovXHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZChcImFjY2Vzc29yXCIsIGZ1bmN0aW9uKG5hbWUsIHBhcmFtKSB7XHJcbmZ1bmN0aW9uIGFjY2Vzc29yKG5hbWUsIHBhcmFtKSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcclxuICAgIHNldDogcGFyYW1bXCJzZXRcIl0sXHJcbiAgICBnZXQ6IHBhcmFtW1wiZ2V0XCJdLFxyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGZvckluXHJcbiAqIOOCquODluOCuOOCp+OCr+ODiOeUqOODq+ODvOODl+WHpueQhlxyXG4gKi9cclxuZnVuY3Rpb24gZm9ySW4oZm4sIHNlbGYpIHtcclxuICBzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG5cclxuICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXNba2V5XTtcclxuXHJcbiAgICBmbi5jYWxsKHNlbGYsIGtleSwgdmFsdWUsIGluZGV4KTtcclxuICB9LCB0aGlzKTtcclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kICAkZXh0ZW5kXHJcbiAqIOS7luOBruODqeOCpOODluODqeODquOBqOertuWQiOOBl+OBoeOCg+OBhuOBruOBpyBleHRlbmQgLT4gJGV4dGVuZCDjgajjgZfjgb7jgZfjgZ9cclxuICovXHJcbmZ1bmN0aW9uICRleHRlbmQoKSB7XHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZChcIiRleHRlbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XHJcbiAgICAgIHRoaXNbcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9LCB0aGlzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgICRzYWZlXHJcbiAqIOWuieWFqOaLoeW8tVxyXG4gKiDkuIrmm7jjgY3jgZfjgarjgYRcclxuICovXHJcbmZ1bmN0aW9uICRzYWZlKHNvdXJjZSkge1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoXCIkc2FmZVwiLCBmdW5jdGlvbihzb3VyY2UpIHtcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKHRoaXNbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHRoaXNbcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9LCB0aGlzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgJHdhdGNoXHJcbiAqIEBwYXJhbSAge3N0cmluZ30ga2V5ICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrICBbZGVzY3JpcHRpb25dXHJcbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICovXHJcbmZ1bmN0aW9uICR3YXRjaChrZXksIGNhbGxiYWNrKSB7XHJcbi8vIE9iamVjdC5wcm90b3R5cGUuJG1ldGhvZCgnJHdhdGNoJywgZnVuY3Rpb24oa2V5LCBjYWxsYmFjaykge1xyXG4gIHZhciB0YXJnZXQgPSB0aGlzO1xyXG4gIHZhciBkZXNjcmlwdG9yID0gbnVsbDtcclxuXHJcbiAgd2hpbGUodGFyZ2V0KSB7XHJcbiAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XHJcbiAgICBpZiAoZGVzY3JpcHRvcikge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRhcmdldCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgLy8g44GZ44Gn44Gr44Ki44Kv44K744OD44K144O844Go44GX44Gm5a2Y5Zyo44GZ44KL5aC05ZCIXHJcbiAgaWYgKGRlc2NyaXB0b3IpIHtcclxuICAgIC8vIOODh+ODvOOCv+ODh+OCo+OCueOCr+ODquODl+OCv+OBruWgtOWQiFxyXG4gICAgaWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YXIgdGVtcEtleSA9ICdfXycgKyBrZXk7XHJcbiAgICAgIHZhciB0ZW1wVmFsdWUgPSB0aGlzW2tleV07XHJcblxyXG4gICAgICB0aGlzW3RlbXBLZXldID0gdGVtcFZhbHVlO1xyXG5cclxuICAgICAgYWNjZXNzb3IuY2FsbCh0aGlzLCBrZXksIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXNbdGVtcEtleV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHZhciBvbGQgPSB0aGlzW3RlbXBLZXldO1xyXG4gICAgICAgICAgdGhpc1t0ZW1wS2V5XSA9IHY7XHJcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHYsIG9sZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyDjgqLjgq/jgrvjgrXjg4fjgqPjgrnjgq/jg6rjg5fjgr/jga7loLTlkIhcclxuICAgIGVsc2Uge1xyXG4gICAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgdmFyIG9sZCA9IGRlc2NyaXB0b3IuZ2V0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2LCBvbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBhY2Nlc3NrZXkgPSAnX18nICsga2V5O1xyXG5cclxuICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW2FjY2Vzc2tleV07XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgIHZhciBvbGQgPSB0aGlzW2FjY2Vzc2tleV07XHJcbiAgICAgICAgdGhpc1thY2Nlc3NrZXldID0gdjtcclxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHYsIG9sZCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cblxuLypcclxuICogYXJyYXkuanNcclxuICovXHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGZpcnN0XHJcbiAqIOacgOWIneOBruimgee0oFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWzYsIDUsIDIsIDMsIDEsIDRdO1xyXG4gKiAgICAgYXJyLmZpcnN0OyAvLyA9PiA2XHJcbiAqL1xyXG5jb25zdCBmaXJzdCA9IHtcclxuLy8gQXJyYXkucHJvdG90eXBlLmFjY2Vzc29yKFwiZmlyc3RcIiwge1xyXG4gIFwiZ2V0XCI6IGZ1bmN0aW9uKCkgICB7IHJldHVybiB0aGlzWzBdOyB9LFxyXG4gIFwic2V0XCI6IGZ1bmN0aW9uKHYpICB7IHRoaXNbMF0gPSB2OyB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGxhc3RcclxuICog5pyA5b6M44Gu6KaB57SgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbNiwgNSwgMiwgMywgMSwgNF07XHJcbiAqICAgICBhcnIubGFzdDsgLy8gPT4gNFxyXG4gKi9cclxuY29uc3QgbGFzdCA9IHtcclxuLy8gQXJyYXkucHJvdG90eXBlLmFjY2Vzc29yKFwibGFzdFwiLCB7XHJcbiAgXCJnZXRcIjogZnVuY3Rpb24oKSAgIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGgtMV07IH0sXHJcbiAgXCJzZXRcIjogZnVuY3Rpb24odikgIHsgdGhpc1t0aGlzLmxlbmd0aC0xXSA9IHY7IH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogQG1ldGhvZCBhdFxyXG4gKiDmjIflrprjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7opoHntKDjgpLov5TjgZfjgb7jgZnvvIjjg6vjg7zjg5fjg7vosqDmlbDjga7mjIflrprlj6/vvInjgIJcclxuICpcclxuICog5re75a2X44GM6LKg5pWw44Gu5aC05ZCI44Gv5pyr5bC+44GL44KJ44Gu44Kq44OV44K744OD44OI44Go44G/44Gq44GX44G+44GZ44CC5pyr5bC+44Gu6KaB57Sg44GMIC0xIOeVquebruOBq+OBquOCiuOBvuOBmeOAgiAgXHJcbiAqIOa3u+Wtl+OBrue1tuWvvuWApOOBjCBBcnJheS5sZW5ndGgg5Lul5LiK44Gu5aC05ZCI44Gv44Or44O844OX44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJ107XHJcbiAqICAgICBhcnIuYXQoMCk7ICAvLyA9PiAnYSdcclxuICogICAgIGFyci5hdCg2KTsgIC8vID0+ICdhJ1xyXG4gKiAgICAgYXJyLmF0KDEzKTsgLy8gPT4gJ2InXHJcbiAqICAgICBhcnIuYXQoLTEpOyAvLyA9PiAnZidcclxuICogICAgIGFyci5hdCgtOCk7IC8vID0+ICdlJ1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg5re75a2XXHJcbiAqIEByZXR1cm4ge09iamVjdH0g5re75a2X44Gn5oyH5a6a44GV44KM44Gf6KaB57SgXHJcbiAqL1xyXG5mdW5jdGlvbiBhdChpKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiYXRcIiwgZnVuY3Rpb24oaSkge1xyXG4gIGklPXRoaXMubGVuZ3RoO1xyXG4gIGkrPXRoaXMubGVuZ3RoO1xyXG4gIGklPXRoaXMubGVuZ3RoO1xyXG4gIHJldHVybiB0aGlzW2ldO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBlcmFzZVxyXG4gKiBAY2hhaW5hYmxlXHJcbiAqIOaMh+WumuOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBqOS4gOiHtOOBl+OBn+acgOWIneOBruimgee0oOOCkuWJiumZpOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyMSA9IFsnYScsICdiJywgJ2InLCAnYyddO1xyXG4gKiAgICAgYXJyMiA9IGFycjEuZXJhc2UoJ2InKTsgLy8gPT4gWydhJywgJ2InLCAnYyddXHJcbiAqICAgICBhcnIxID09PSBhcnIyOyAgICAgICAgICAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbG0g5YmK6Zmk44GX44Gf44GE44Kq44OW44K444Kn44Kv44OIXHJcbiAqL1xyXG5mdW5jdGlvbiBlcmFzZShlbG0pIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJlcmFzZVwiLCBmdW5jdGlvbihlbG0pIHtcclxuICB2YXIgaW5kZXggID0gdGhpcy5pbmRleE9mKGVsbSk7XHJcbiAgaWYgKGluZGV4ID49IDApIHtcclxuICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQG1ldGhvZCBjbGVhclxyXG4gKiBAY2hhaW5hYmxlXHJcbiAqIOiHqui6q+OCkuepuuOBrumFjeWIl+OBq+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWzEsIDIsIFszLCA0XV07XHJcbiAqICAgICBhcnIuY2xlYXIoKTsgLy8gPT4gW11cclxuICovXHJcbmZ1bmN0aW9uIGNsZWFyKGRlZXApIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJjbGVhclwiLCBmdW5jdGlvbigpIHtcclxuICB0aGlzLmxlbmd0aCA9IDA7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNvbnRhaW5zXHJcbiAqIOaMh+WumuOBl+OBn+imgee0oOOBjOmFjeWIl+OBq+WQq+OBvuOCjOOBpuOBhOOCi+OBi+OCkuODgeOCp+ODg+OCr+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDmr5TovIPjgavjga/ljrPlr4bjgarlkIzlgKTvvIjkuInph43jgqTjgrPjg7zjg6vmvJTnrpflrZAgPT09IOOBp+S9v+OCj+OCjOOCi+OBruOBqOWQjOOBmOaWueazle+8ieOCkueUqOOBhOOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWzYsIDUsIDIsIDMsIDEsIDRdO1xyXG4gKiAgICAgYXJyLmNvbnRhaW5zKDMpOyAgICAgLy8gPT4gdHJ1ZVxyXG4gKiAgICAgYXJyLmNvbnRhaW5zKDMsIDQpOyAgLy8gPT4gZmFsc2VcclxuICogICAgIGFyci5jb250YWlucygzLCAtNCk7IC8vID0+IHRydWVcclxuICogICAgIGFyci5jb250YWlucyhcIjZcIik7ICAgLy8gPT4gZmFsc2VcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0g44OB44Kn44OD44Kv44GZ44KL44Kq44OW44K444Kn44Kv44OIXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbZnJvbUluZGV4PTBdIOaknOe0ouOCkuWni+OCgeOCi+S9jee9ruOAguiyoOaVsOOCkuaMh+WumuOBl+OBn+WgtOWQiOOBr+acq+WwvuOBi+OCieOBruOCquODleOCu+ODg+ODiOOBqOimi+OBquOBl+OBvuOBmeOAglxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDjg4Hjgqfjg4Pjgq/jga7ntZDmnpxcclxuICovXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKGl0ZW0sIGZyb21JbmRleCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImNvbnRhaW5zXCIsIGZ1bmN0aW9uKGl0ZW0sIGZyb21JbmRleCkge1xyXG4gIHJldHVybiB0aGlzLmluZGV4T2YoaXRlbSwgZnJvbUluZGV4KSAhPSAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgY2xvbmVcclxuICog6Ieq6Lqr44Gu44Kz44OU44O844KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIxID0gWzEsIDIsIFszLCA0XV07XHJcbiAqICAgICBhcnIyID0gYXJyMS5jbG9uZSgpOyAgICAgIC8vID0+IFsxLCAyLCBbMywgNF1dXHJcbiAqICAgICBhcnIxWzJdID09PSBhcnIyWzJdOyAgICAgIC8vID0+IHRydWVcclxuICogICAgIGFycjFbMl1bMF0gPSA5O1xyXG4gKiAgICAgYXJyMjsgICAgICAgICAgICAgICAgICAgICAvLyA9PiBbMSwgMiwgWzksIDRdXVxyXG4gKiAgICAgYXJyMSA9IFsxLCAyLCBbMywgNF1dO1xyXG4gKiAgICAgYXJyMiA9IGFycjEuY2xvbmUodHJ1ZSk7ICAvLyA9PiBbMSwgMiwgWzMsIDRdXVxyXG4gKiAgICAgYXJyMVsyXSA9PT0gYXJyMlsyXTsgICAgICAvLyA9PiBmYWxzZVxyXG4gKiAgICAgYXJyMVsyXVswXSA9IDk7XHJcbiAqICAgICBhcnIyOyAgICAgICAgICAgICAgICAgICAgIC8vID0+IFsxLCAyLCBbMywgNF1dXHJcbiAqXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIOmFjeWIl+OBruODjeOCueODiOOCkuOBn+OBqeOBo+OBpuikh+ijveOBmeOCi+OBi+OBqeOBhuOBi1xyXG4gKiBAcmV0dXJuIHtPYmplY3R9IOaWsOOBl+OBhOmFjeWIl1xyXG4gKi9cclxuZnVuY3Rpb24gY2xvbmUoZGVlcCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImNsb25lXCIsIGZ1bmN0aW9uKGRlZXApIHtcclxuICBpZiAoZGVlcCA9PT0gdHJ1ZSkgO1xyXG4gIGVsc2Uge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseSh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHJhbmdlXHJcbiAqIEBjaGFpbmFibGVcclxuICog6Ieq6Lqr44KS562J5beu5pWw5YiX77yI5LiA5a6a6ZaT6ZqU44Gu5pW05pWw5YCk44Gu5YiX77yJ44Go44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIC0g5byV5pWw44GMMeOBpOOBruWgtOWQiOOAgTDvvZ5lbmTvvIhlbmTlkKvjgb7jgZrvvInjga7mlbTmlbDjga7phY3liJfjgafjgZnjgIIgIFxyXG4gKiAtIOW8leaVsOOBjDLjgaTjga7loLTlkIjjgIFzdGFydO+9nmVuZO+8iGVuZOWQq+OBvuOBmu+8ieOBruaVtOaVsOOBrumFjeWIl+OBp+OBmeOAgiAgXHJcbiAqIC0g5byV5pWw44GMM+OBpOOBruWgtOWQiOOAgXN0YXJ0772eZW5k77yIZW5k5ZCr44G+44Ga77yJ44GL44GkIHN0YXJ0ICsgbiAqIHN0ZXAgKG7jga/mlbTmlbAp44KS5rqA44Gf44GZ5pW05pWw44Gu6YWN5YiX44Gn44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBhcnIgPSBbXTtcclxuICogICAgIGFyci5yYW5nZSg0KTsgICAgICAgIC8vID0+IFswLCAxLCAyLCAzXVxyXG4gKiAgICAgYXJyLnJhbmdlKDIsIDUpOyAgICAgLy8gPT4gWzIsIDMsIDRdXHJcbiAqICAgICBhcnIucmFuZ2UoMiwgMTQsIDUpOyAvLyA9PiBbMiwgNywgMTJdXHJcbiAqICAgICBhcnIucmFuZ2UoMiwgLTMpOyAgICAvLyA9PiBbMiwgMSwgMCwgLTEsIC0yXVxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQg5pyA5Yid44Gu5YCk77yI44OH44OV44Kp44Or44OI44GvIDDvvIlcclxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZCDmnIDlvozjga7lgKTvvIjnnIHnlaXkuI3lj6/vvIlcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGVwPTHjgb7jgZ/jga8tMV0g6ZaT6ZqUXHJcbiAqL1xyXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZW5kLCBzdGVwKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwicmFuZ2VcIiwgZnVuY3Rpb24oc3RhcnQsIGVuZCwgc3RlcCkge1xyXG4gIGNsZWFyLmNhbGwodGhpcyk7XHJcbiAgLy8gdGhpcy5jbGVhcigpO1xyXG4gIFxyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuICAgIGZvciAodmFyIGk9MDsgaTxzdGFydDsgKytpKSB0aGlzW2ldID0gaTtcclxuICB9XHJcbiAgZWxzZSBpZiAoc3RhcnQgPCBlbmQpIHtcclxuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XHJcbiAgICBpZiAoc3RlcCA+IDApIHtcclxuICAgICAgZm9yICh2YXIgaT1zdGFydCwgaW5kZXg9MDsgaTxlbmQ7IGkrPXN0ZXAsICsraW5kZXgpIHtcclxuICAgICAgICB0aGlzW2luZGV4XSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBzdGVwID0gc3RlcCB8fCAtMTtcclxuICAgIGlmIChzdGVwIDwgMCkge1xyXG4gICAgICBmb3IgKHZhciBpPXN0YXJ0LCBpbmRleD0wOyBpPmVuZDsgaSs9c3RlcCwgKytpbmRleCkge1xyXG4gICAgICAgIHRoaXNbaW5kZXhdID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZWFjaFxyXG4gKiBAY2hhaW5hYmxlXHJcbiAqIOimgee0oOOCkumghueVquOBq+a4oeOBl+OBquOBjOOCiemWouaVsOOCkue5sOOCiui/lOOBl+Wun+ihjOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDjg6Hjgr3jg4Pjg4njg4Hjgqfjg7zjg7Pjgavlr77lv5zjgZfjgabjgYTjgb7jgZnjgYzjgIHjgZPjga7jg6Hjgr3jg4Pjg4njgavjgojjgaPjgaboh6rliIboh6rouqvjga/lpInljJbjgZfjgb7jgZvjgpPjgIJcclxuICpcclxuICogIyMjUmVmZXJlbmNlXHJcbiAqIC0gW0FycmF5LnByb3RvdHlwZS5mb3JFYWNoKCkgLSBKYXZhU2NyaXB0IHwgTUROXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoKVxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWzEsIDIsIDNdO1xyXG4gKiAgICAgYXJyLmVhY2goIGZ1bmN0aW9uKGVsbSkge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhlbG0gKiBlbG0pXHJcbiAqICAgICB9KTtcclxuICogICAgIC8vID0+IDFcclxuICogICAgIC8vICAgIDRcclxuICogICAgIC8vICAgIDlcclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5ZCE6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKRcclxuICovXHJcbmZ1bmN0aW9uIGVhY2goKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiZWFjaFwiLCBmdW5jdGlvbigpIHtcclxuICB0aGlzLmZvckVhY2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT1cclxuLy8g5Lul5LiL44GvZXMyMDE15Lul6ZmN44Gr5a2Y5Zyo44GZ44KL44Gf44KB44CB5L+d55WZXHJcbi8vID09PT09PT09PT1cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogQG1ldGhvZCBmaW5kXHJcbi8vICAqIOWQhOimgee0oOOCkuW8leaVsOOBq+OBl+OBpumWouaVsOOCkuWun+ihjOOBl+OAgeOBneOBruWApOOBjOecn+OBqOOBquOCi++8iO+8neadoeS7tuOBq+ODnuODg+ODgeOBmeOCi++8ieacgOWIneOBruimgee0oOOCkui/lOOBl+OBvuOBmeOAglxyXG4vLyAgKlxyXG4vLyAgKiDjganjga7opoHntKDjgoLjg57jg4Pjg4HjgZfjgarjgZHjgozjgbAgdW5kZWZpbmVkIOOCkui/lOOBl+OBvuOBmeOAglxyXG4vLyAgKlxyXG4vLyAgKiAjIyMgRXhhbXBsZVxyXG4vLyAgKiAgICAgYXJyID0gWydmb28nLCAnYmFyJywgJ2hvZ2UnLCAnZnVnYSddO1xyXG4vLyAgKiAgICAgYXJyLmZpbmQoIGZ1bmN0aW9uKGVsbSkge1xyXG4vLyAgKiAgICAgICByZXR1cm4gZWxtLmluZGV4T2YoJ2EnKSA+PSAwO1xyXG4vLyAgKiAgICAgfSk7XHJcbi8vICAqICAgICAvLyA9PiAnYmFyJ1xyXG4vLyAgKlxyXG4vLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuLy8gICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+WRvOOBs+WHuuOBl+aZguOBriB0aGlz44CCXHJcbi8vICAqIEByZXR1cm4ge09iamVjdH0g5p2h5Lu244Gr44Oe44OD44OB44GX44Gf5pyA5Yid44Gu6KaB57Sg44CB44G+44Gf44GvIHVuZGVmaW5lZFxyXG4vLyAgKi9cclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJmaW5kXCIsIGZ1bmN0aW9uKGZuLCBzZWxmKSB7XHJcbi8vICAgdmFyIHRhcmdldCA9IG51bGw7XHJcblxyXG4vLyAgIHRoaXMuc29tZShmdW5jdGlvbihlbG0sIGkpIHtcclxuLy8gICAgIGlmIChmbi5jYWxsKHNlbGYsIGVsbSwgaSwgdGhpcykpIHtcclxuLy8gICAgICAgdGFyZ2V0ID0gZWxtO1xyXG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfSk7XHJcblxyXG4vLyAvKipcclxuLy8gICogQG1ldGhvZCBmaW5kSW5kZXhcclxuLy8gICog5ZCE6KaB57Sg44KS5byV5pWw44Gr44GX44Gm6Zai5pWw44KS5a6f6KGM44GX44CB44Gd44Gu5YCk44GM55yf44Go44Gq44KL77yI77yd5p2h5Lu244Gr44Oe44OD44OB44GZ44KL77yJ5pyA5Yid44Gu44Kk44Oz44OH44OD44Kv44K544KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqIOOBqeOBruimgee0oOOCguODnuODg+ODgeOBl+OBquOBkeOCjOOBsCAtMSDjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICogIyMjIEV4YW1wbGVcclxuLy8gICogICAgIGFyciA9IFsnZm9vJywgJ2JhcicsICdob2dlJywgJ2Z1Z2EnXTtcclxuLy8gICogICAgIGFyci5maW5kSW5kZXgoIGZ1bmN0aW9uKGVsbSkge1xyXG4vLyAgKiAgICAgICByZXR1cm4gZWxtLmluZGV4T2YoJ2EnKSA+PSAwO1xyXG4vLyAgKiAgICAgfSk7XHJcbi8vICAqICAgICAvLyA9PiAxXHJcbi8vICAqXHJcbi8vICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4vLyAgKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv5ZG844Gz5Ye644GX5pmC44GuIHRoaXPjgIJcclxuLy8gICogQHJldHVybiB7T2JqZWN0fSDmnaHku7bjgavjg57jg4Pjg4HjgZfjgZ/mnIDliJ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgIHjgb7jgZ/jga8gLTFcclxuLy8gICovXHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiZmluZEluZGV4XCIsIGZ1bmN0aW9uKGZuLCBzZWxmKSB7XHJcbi8vICAgdmFyIHRhcmdldCA9IC0xO1xyXG5cclxuLy8gICB0aGlzLnNvbWUoZnVuY3Rpb24oZWxtLCBpKSB7XHJcbi8vICAgICBpZiAoZm4uY2FsbChzZWxmLCBlbG0sIGksIHRoaXMpKSB7XHJcbi8vICAgICAgIHRhcmdldCA9IGk7XHJcbi8vICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4gdGFyZ2V0O1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIG9mXHJcbiAqIEBzdGF0aWNcclxuICogRVM2IOa6luaLoOOBriBvZiDplqLmlbDjgafjgZnjgILlj6/lpInplbflvJXmlbDjgpLjgajjgaPjgaYgQXJyYXkg44Kq44OW44K444Kn44Kv44OI44Gr44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBBcnJheS5vZigpOyAgICAgICAgLy8gPT4gW11cclxuICogICAgIEFycmF5Lm9mKDEsIDIsIDMpOyAvLyA9PiBbMSwgMiwgM11cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnROIOeUn+aIkOOBmeOCi+mFjeWIl+OBruimgee0oFxyXG4gKiBAcmV0dXJuIHtBcnJheX0g55Sf5oiQ44GX44Gf6YWN5YiXXHJcbiAqL1xyXG4vLyBBcnJheS4kbWV0aG9kKFwib2ZcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbi8vIH0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZnJvbVxyXG4gKiBAc3RhdGljXHJcbiAqIEVTNiDmupbmi6Djga4gZnJvbSDplqLmlbDjgafjgZnjgIJhcnJheS1saWtlIOOCquODluOCuOOCp+OCr+ODiOOBi2l0ZXJhYmxlIOOCquODluOCuOOCp+OCr+ODiOOBi+OCieaWsOOBl+OBhOmFjeWIl+OCkueUn+aIkOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBhcnJheS1saWtlIOOCquODluOCuOOCp+OCr+ODiOOBqOOBr+OAgWxlbmd0aCDjg5fjg63jg5Hjg4bjgqPjgpLmjIHjgaHjgIHmlbDlrZfjga7mt7vlrZfjgafjgqLjgq/jgrvjgrnlj6/og73jgarjgqrjg5bjgrjjgqfjgq/jg4jjga7jgZPjgajjgafjgZnjgIJcclxuICog6YCa5bi444Gu6YWN5YiX44Gu44G744GL44CBU3RyaW5n44CBYXJndW1lbnRz44CBTm9kZUxpc3Qg44Gq44Gp44KCIGFycmF5LWxpa2Ug44Kq44OW44K444Kn44Kv44OI44Gn44GZ44CCXHJcbiAqXHJcbiAqIGl0ZXJhYmxlIOOCquODluOCuOOCp+OCr+ODiOOBqOOBr+OAgVN5bWJvbC5pdGVyYXRvciDjg5fjg63jg5Hjg4bjgqPjgpLmjIHjgaTjgqrjg5bjgrjjgqfjgq/jg4jjga7jgZPjgajjgafjgZnjgIJcclxuICog6YCa5bi444Gu6YWN5YiX44Gu44G744GL44CBU3RyaW5n44CBYXJndW1lbnRz44CBTm9kZUxpc3Qg44Gq44Gp44KCIGl0ZXJhYmxlIOOCquODluOCuOOCp+OCr+ODiOOBp+OBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgQXJyYXkuZnJvbShbMSwgMiwgM10sIGZ1bmN0aW9uKGVsbSl7IHJldHVybiBlbG0gKiBlbG19ICk7IC8vID0+IFsxLCA0LCA5XVxyXG4gKiAgICAgQXJyYXkuZnJvbShcImZvb1wiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPT4gW1wiZlwiLCBcIm9cIiwgXCJvXCJdXHJcbiAqICAgICBBcnJheS5mcm9tKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSkgICAgICAgICAgICAvLyA9PiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwuLi5dXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhcnJheUxpa2Ug6YWN5YiX44Gr5aSJ5o+b44GZ44KLIGFycmF5LWxpa2Ug44Kq44OW44K444Kn44Kv44OIXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gYXJyYXlMaWtlIOOBruOBmeOBueOBpuOBruimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+ODnuODg+ODl+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApFxyXG4gKiBAcmV0dXJuIHtBcnJheX0g55Sf5oiQ44GX44Gf6YWN5YiXXHJcbiAqL1xyXG4vLyBBcnJheS4kbWV0aG9kKFwiZnJvbVwiLCBmdW5jdGlvbihhcnJheUxpa2UsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbi8vICAgaWYgKCFPYmplY3QoYXJyYXlMaWtlKS5sZW5ndGgpIHJldHVybiBbXTtcclxuXHJcbi8vICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4vLyAgIGlmIChTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yICYmIGFycmF5TGlrZVtTeW1ib2wuaXRlcmF0b3JdKSB7XHJcbi8vICAgICAgIHZhciBpdGVyYXRvciA9IGFycmF5TGlrZVtTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbi8vICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbi8vICAgICAgICAgICB2YXIgaXRlcmF0b3JSZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XHJcbi8vICAgICAgICAgICBpZiAoaXRlcmF0b3JSZXN1bHQuZG9uZSkgYnJlYWs7XHJcblxyXG4vLyAgICAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2suYmluZChjb250ZXh0IHx8IHRoaXMpKGl0ZXJhdG9yUmVzdWx0LnZhbHVlKSA6IGl0ZXJhdG9yUmVzdWx0LnZhbHVlO1xyXG4vLyAgICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG5cclxuLy8gICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXlMaWtlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbi8vICAgICAgIHJlc3VsdC5wdXNoKGFycmF5TGlrZVtpXSk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiByZXN1bHQubWFwKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBmdW5jdGlvbihpdGVtKSB7XHJcbi8vICAgICByZXR1cm4gaXRlbTtcclxuLy8gICB9LCBjb250ZXh0KTtcclxuLy8gfSk7XG5cbi8qXHJcbiAqIHBoaW5hLmpzIG5hbWVzcGFjZVxyXG4gKi9cclxudmFyIHBoaW5hJDEgPSBwaGluYSQxIHx8IHt9O1xyXG5cclxuLy8g5LiA5pem5ouh5by1XHJcbi8vICRtZXRob2QuY2FsbChwaGluYSwgXCJob2dlXCIsIC4uLinjgajjgZfjgabjgoLoia/jgYTjgYzjgIHmm7jjgY3mj5vjgYjjgYzlpKflpInjgarjgZ/jgoFcclxucGhpbmEkMS4kbWV0aG9kID0gZnVuY3Rpb24oLi4uYXJncykge1xyXG4vLyBwaGluYS5wcm90b3R5cGUuJG1ldGhvZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHsgLy8gbmdcclxuICByZXR1cm4gJG1ldGhvZC5jYWxsKHRoaXMsIC4uLmFyZ3MpXHJcbn07XHJcblxyXG4vLyA7KGZ1bmN0aW9uKCkge1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYVxyXG4gKiAjIHBoaW5hLmpzIG5hbWVzcGFjZVxyXG4gKiBwaGluYS5qcyDjga7jg43jg7zjg6Djgrnjg5rjg7zjgrnjgafjgZnjgIJwaGluYS5qcyDjga7mj5DkvpvjgZnjgovmqZ/og73jga/vvIjjgrPjgqLmi6HlvLXku6XlpJbvvInlhajjgabjgZPjga7jgqrjg5bjgrjjgqfjgq/jg4jjgavlhaXjgaPjgabjgYTjgb7jgZnjgIJcclxuICpcclxuICogIyMgcGhpbmEuanMg44Gu44Kv44Op44K55a6a576p44Gr44Gk44GE44GmXHJcbiAqXHJcbiAqIHBoaW5hLmpzIOOBp+OBr+eLrOiHquOBruOCr+ODqeOCueOCt+OCueODhuODoOOCkuWun+ijheOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKiBwaGluYS5qcyDjga7jgq/jg6njgrnjga7nibnlvrTjgajjgZfjgabjga8gbmV3IOani+aWh+OCkuS9v+eUqOOBl+OBquOBhOOBn+OCgeOAgeODoeOCveODg+ODieODgeOCp+ODvOODs+OBjOOBl+OChOOBmeOBhOOBk+OBqOOChOOAgeaWh+Wtl+WIl+OBp+OCr+ODqeOCueOCkuWumue+qeOBl+OBn+OCiuimquOCr+ODqeOCueOCkuaMh+WumuOBl+OBn+OCiuOBp+OBjeOCi+eCueOBjOaMmeOBkuOCieOCjOOBvuOBmeOAglxyXG4gKiDmloflrZfliJfjgpLkvb/nlKjjgafjgY3jgovjgZPjgajjgafjgIHjgq/jg6njgrnjgpLlrprnvqnjgZnjgovmrrXpmo7jgafopqrjgq/jg6njgrnjgYzmjIflrprjgZXjgozjgabjgYTjgarjgY/jgabjgoLjgIHjgq/jg6njgrnjgpLlkbzjgbPlh7rjgZnmrrXpmo7jgafopqrjgq/jg6njgrnjgYzlrprnvqnjgZXjgozjgabjgYTjgozjgbDjgYTjgYTjgajjgYTjgYbjg6Hjg6rjg4Pjg4jjgYzjgYLjgorjgb7jgZnjgIJcclxuICpcclxuICog44Kv44Op44K544Gu5a6a576p44Gr44GvIHtAbGluayAjY3JlYXRlQ2xhc3N9LCB7QGxpbmsgI2RlZmluZX0g44KS5L2/55So44GX44G+44GZ44CC6Kmz44GX44GE5L2/44GE5pa544Gv44Gd44KM44Ge44KM44Gu6Zai5pWw44Gu6aCF44KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAqXHJcbiAqICMjIOOCr+ODqeOCueOBq+OBpOOBhOOBpuOBruijnOi2s1xyXG4gKlxyXG4gKiBwaGluYS5qcyDjga7jgq/jg6njgrnjgafjga8gc3VwZXJDbGFzcyDjgpLmjIflrprjgZnjgovjgajku6XkuIvjga7jg6Hjgr3jg4Pjg4njgYzoh6rli5Xjgafov73liqDjgZXjgozjgb7jgZnjgIJcclxuICpcclxuICogLSBzdXBlckluaXQoKTog6Kaq44Kv44Op44K544Gu44Kz44Oz44K544OI44Op44Kv44K/44KS5ZG844Gz5Ye644GZ77yI5Yid5pyf5YyW77yJXHJcbiAqIC0gc3VwZXJNZXRob2QoKTog6Kaq44Kv44Op44K544Gu44Oh44K944OD44OJ44KS5ZG844Gz5Ye644GZXHJcbiAqXHJcbiAqIHN1cGVySW5pdCDjga/lvJXmlbDjgpLlpInjgYjjgovjgZPjgajjgafopqrjgq/jg6njgrnjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgpLlkbzjgbbjgajjgY3jga7lvJXmlbDjgpLlpInjgYjjgonjgozjgb7jgZnjgIJcclxuICogc3VwZXJNZXRob2Qg44Gv5LiA44Gk55uu44Gu5byV5pWw44Gr5ZG844Gz5Ye644GX44Gf44GE6Kaq44Kv44Op44K544Gu44Oh44K944OD44OJ5ZCN44KS5paH5a2X5YiX44Gn44CB5LqM44Gk55uu5Lul6ZmN44Gr5ZG844Gz5Ye644GX44Gf44GE44Oh44K944OD44OJ44Gu5byV5pWw44KS5rih44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOOBvuOBnyBwaGluYS5qcyDjga7jgq/jg6njgrnjgafjga/ku6XkuIvjga7nibnliKXjgarlvbnlibLjgpLjgoLjgaPjgZ/jg5fjg63jg5Hjg4bjgqPjgIHjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgb7jgZnjgIJcclxuICpcclxuICogLSBfYWNjZXNzb3I6IOOCouOCr+OCu+ODg+OCteODvO+8iOOCsuODg+OCv+ODvOOBqOOCu+ODg+OCv+ODvO+8ieOCkuWumue+qeOBmeOCi+OBn+OCgeOBruODl+ODreODkeODhuOCo1xyXG4gKiAtIF9zdGF0aWM6IHN0YXRpYyDjg6Hjg7Pjg5DjgpLlrprnvqnjgZnjgovjgZ/jgoHjga7jg5fjg63jg5Hjg4bjgqNcclxuICogLSBfZGVmaW5lZCgpOiDjgq/jg6njgrnjgYzlrprnvqnjgZXjgozjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjg6Hjgr3jg4Pjg4lcclxuICpcclxuICogIyMjIF9hY2Nlc3NvciDjga7kvb/nlKjkvotcclxuICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICogICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgLi4uXHJcbiAqICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgIF9hY2Nlc3NvcjogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgdmFsdWU6IHtcclxuICogICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICogICAgICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICogICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gKiAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWXjgYzjgrvjg4Pjg4jjgZXjgozjgb7jgZfjgZ/vvIEnKTtcclxuICogICAgICAgICAgIH1cclxuICogICAgICAgICB9XHJcbiAqICAgICAgIH1cclxuICogICAgIH0pO1xyXG4gKlxyXG4gKiAjIyMgX3N0YXRpYyDjga7kvb/nlKjkvotcclxuICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICogICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgLi4uXHJcbiAqICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgIF9zdGF0aWM6IHtcclxuICpcclxuICogICAgICAgICBzdGF0aWNQcm9wZXJ0eTE6IDEsXHJcbiAqICAgICAgICAgc3RhdGljUHJvcGVydHkyOiAyLFxyXG4gKlxyXG4gKiAgICAgICAgIHN0YXRpY01ldGhvZDE6IGZ1bmN0aW9uKCl7fSxcclxuICogICAgICAgICBzdGF0aWNNZXRob2QyOiBmdW5jdGlvbigpe31cclxuICpcclxuICogICAgICAgfVxyXG4gKiAgICAgfSk7XHJcbiAqXHJcbiAqICAgICBjb25zb2xlLmxvZyhDbGFzcy5zdGF0aWNQcm9wZXJ0eTEpOyAvLyA9PiAxXHJcbiAqXHJcbiAqICMjIyBfZGVmaW5lZCDjga7kvb/nlKjkvotcclxuICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICogICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgIH0sXHJcbiAqXHJcbiAqICAgICAgIF9kZWZpbmVkOiBmdW5jdGlvbigpIHtcclxuICogICAgICAgICBjb25zb2xlLmxvZygnZGVmaW5lZCEnKTtcclxuICogICAgICAgfVxyXG4gKiAgICAgfSk7IC8vID0+IGRlZmluZWQhXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbVkVSU0lPTiA9IDwlPSB2ZXJzaW9uICU+XVxyXG4gKiBwaGluYS5qcyDjga7jg5Djg7zjgrjjg6fjg7PjgafjgZnjgIJcclxuICpcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLlZFUlNJT04gPSBcIjAuMi4zXCI7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc05vZGVcclxuICogTm9kZS5qcyDjga4gbW9kdWxlIOOBi+OBqeOBhuOBi+OCkuODgeOCp+ODg+OCr+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNOb2RlJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgbmFtZXNwYWNlXHJcbiAqIOW8leaVsOOBr+mWouaVsOOBp+OAgeOBneOBrumWouaVsOWGheOBp+OBriB0aGlzIOOBryBwaGluYSDjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6Zai5pWwXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCduYW1lc3BhY2UnLCBmdW5jdGlvbihmbikge1xyXG4gIGZuLmNhbGwodGhpcyk7XHJcbn0pO1xyXG5cclxudmFyIG5zID0gcGhpbmEkMS5pc05vZGUoKSA/IGdsb2JhbCA6IHdpbmRvdztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZ2xvYmFsXHJcbiAqIE5vZGUuanMg44Gq44KJIGdsb2JhbCDjg5bjg6njgqbjgrbjgarjgokgd2luZG93IOOCkui/lOOBl+OBvuOBmeOAglxyXG4gKiDjgrLjg4Pjgr/jg7zjga7jgb/lrprnvqnjgZXjgozjgabjgYTjgb7jgZnjgIJcclxuICpcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAcmVhZG9ubHlcclxuICogQHN0YXRpY1xyXG4gKi9cclxuLy8gcGhpbmEuYWNjZXNzb3IoJ2dsb2JhbCcsIHtcclxuYWNjZXNzb3IuY2FsbChwaGluYSQxLCAnZ2xvYmFsJywge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbnM7XHJcbiAgfSxcclxufSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgdGVzdFVBXHJcbiAqIOW8leaVsOOBriBSZWdFeHAg44Kq44OW44K444Kn44Kv44OI44Go44Om44O844K244O844Ko44O844K444Kn44Oz44OI44KS5q+U6LyD44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgndGVzdFVBJywgZnVuY3Rpb24ocmVnRXhwKSB7XHJcbiAgaWYgKCFwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuICB2YXIgdWEgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gIHJldHVybiByZWdFeHAudGVzdCh1YSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNBbmRyb2lkXHJcbiAqIEFuZHJvaWQg44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IEFuZHJvaWQg44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc0FuZHJvaWQnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL0FuZHJvaWQvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0lQaG9uZVxyXG4gKiBpUGhvbmUg44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlQaG9uZSDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzSVBob25lJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGhvbmUvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0lQYWRcclxuICogaVBhZCDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gaVBhZCDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzSVBhZCcsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBhZC8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzSU9TXHJcbiAqIGlPUyDjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0gaU9TIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNJT1MnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL2lQaG9uZXxpUGFkLyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNNb2JpbGVcclxuICog44Oi44OQ44Kk44Or44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CC5YW35L2T55qE44Gr44GvIEFuZHJvaWQsIGlQaG9uZSwgaVBhZCDjga7jgYTjgZrjgozjgYvjgaDjgaggdHJ1ZSDjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0g44Oi44OQ44Kk44Or44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc01vYmlsZScsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBob25lfGlQYWR8QW5kcm9pZC8pO1xyXG59KTtcclxuXHJcbi8vIC8vIHN1cHBvcnQgbm9kZS5qc1xyXG4vLyBpZiAocGhpbmEuaXNOb2RlKCkpIHtcclxuLy8gICBtb2R1bGUuZXhwb3J0cyA9IHBoaW5hO1xyXG4vLyB9XHJcblxyXG4vLyBucy5waGluYSA9IHBoaW5hO1xyXG5cclxuLy8gfSkodGhpcyk7XHJcblxyXG5cclxucGhpbmEkMS5uYW1lc3BhY2UoZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcclxuICAgKiDjgq/jg6njgrnjgpLkvZzmiJDjgZnjgovplqLmlbDjgafjgZnjgIJcclxuICAgKiDopqrjgq/jg6njgrnjga7mjIflrprjga/mloflrZfliJfjgafjgoLlj6/og73jgafjgZnjgIJcclxuICAgKiDkvZXjgoLntpnmib/jgZfjgarjgYTloLTlkIggc3VwZXJDbGFzcyDjga7mjIflrprjga/kuI3opoHjgafjgZnjgILjgb7jgZ/jgIHopqrjgq/jg6njgrnjgpLntpnmib/jgZfjgabjgYTjgovloLTlkIjjgIHjgrPjg7Pjgrnjg4jjg6njgq/jgr/lhoXjgacgdGhpcy5zdXBlckluaXQoKSDjgpLlrp/ooYzjgZfjgabopqrjgq/jg6njgrnjgpLliJ3mnJ/ljJbjgZnjgovjgZPjgajjgYzlv4XpoIjjgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHZhciBDbGFzcyA9IHBoaW5hLmNyZWF0ZUNsYXNzKHtcclxuICAgKiDjgIDjgIAgIHN1cGVyQ2xhc3M6ICduYW1lc3BhY2UuU3VwZXInLC8v6Kaq44Kv44Op44K557aZ5om/XHJcbiAgICpcclxuICAgKiDjgIDjgIAgIC8v44Oh44Oz44OQ5aSJ5pWwXHJcbiAgICog44CA44CAICBtZW1iZXIxOiAxMDAsXHJcbiAgICog44CA44CAICBtZW1iZXIyOiAndGVzdCcsXHJcbiAgICog44CA44CAICBtZW1iZXIzOiBudWxsLFxyXG4gICAqXHJcbiAgICpcclxuICAgKiDjgIDjgIAgIC8v44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICog44CA44CAICAvL0NsYXNzKCnjgpLlkbzjgbPlh7rjgZfjgZ/jgajjgY3lrp/ooYzjgZXjgozjgotcclxuICAgKiDjgIDjgIAgIGluaXQ6IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAqIOOAgOOAgCAgICAvL+OCueODvOODkeODvOOCr+ODqeOCuSjntpnmib/jgZfjgZ/jgq/jg6njgrkp44GuaW5pdFxyXG4gICAqIOOAgOOAgCAgICB0aGlzLnN1cGVySW5pdChhLCBiKTtcclxuICAgKiDjgIDjgIAgICAgdGhpcy5hID0gYTtcclxuICAgKiDjgIDjgIAgICAgdGhpcy5iID0gYjtcclxuICAgKiDjgIDjgIAgIH0sXHJcbiAgICog44CA44CAXHJcbiAgICog44CA44CAICAvL+ODoeOCveODg+ODiVxyXG4gICAqIOOAgOOAgCAgbWV0aG9kMTogZnVuY3Rpb24oKXt9LFxyXG4gICAqIOOAgOOAgCAgbWV0aG9kMjogZnVuY3Rpb24oKXt9LFxyXG4gICAqIOOAgOOAgFxyXG4gICAqIOOAgOOAgH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9XHJcbiAgICogQHJldHVybiB7RnVuY3Rpb259IOOCr+ODqeOCuVxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdjcmVhdGVDbGFzcycsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG5cclxuICAgIHZhciBfY2xhc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IF9jbGFzcy5wcm90b3R5cGUuX2NyZWF0b3IoKTtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xyXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChwYXJhbXMuc3VwZXJDbGFzcykge1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJhbXMuc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xyXG4gICAgICBwYXJhbXMuaW5pdC5vd25lciA9IF9jbGFzcztcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5zdXBlckluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9fY291bnRlciA9IHRoaXMuX19jb3VudGVyIHx8IDA7XHJcblxyXG4gICAgICAgIHZhciBzdXBlckNsYXNzID0gdGhpcy5faGllcmFyY2hpZXNbdGhpcy5fX2NvdW50ZXIrK107XHJcbiAgICAgICAgdmFyIHN1cGVySW5pdCA9IHN1cGVyQ2xhc3MucHJvdG90eXBlLmluaXQ7XHJcbiAgICAgICAgc3VwZXJJbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIHRoaXMuX19jb3VudGVyID0gMDtcclxuICAgICAgfTtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5zdXBlck1ldGhvZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICB2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLl9fY291bnRlcnMgPSB0aGlzLl9fY291bnRlcnMgfHwge307XHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXJzW25hbWVdID0gdGhpcy5fX2NvdW50ZXJzW25hbWVdIHx8IDA7XHJcblxyXG4gICAgICAgIHZhciBzdXBlckNsYXNzID0gdGhpcy5faGllcmFyY2hpZXNbIHRoaXMuX19jb3VudGVyc1tuYW1lXSsrIF07XHJcbiAgICAgICAgdmFyIHN1cGVyTWV0aG9kID0gc3VwZXJDbGFzcy5wcm90b3R5cGVbbmFtZV07XHJcbiAgICAgICAgdmFyIHJzdCA9IHN1cGVyTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9fY291bnRlcnNbbmFtZV0gPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gcnN0O1xyXG4gICAgICB9O1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gX2NsYXNzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAvL1xyXG4gICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLy8gICAgIF9jbGFzcy4kbWV0aG9kKGtleSwgdmFsdWUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGVsc2Uge1xyXG4gICAgLy8gICAgIF9jbGFzcy5wcm90b3R5cGVba2V5XSA9IHZhbHVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIOe2meaJv1xyXG4gICAgJGV4dGVuZC5jYWxsKF9jbGFzcy5wcm90b3R5cGUsIHBhcmFtcyk7XHJcbiAgICAvLyBfY2xhc3MucHJvdG90eXBlLiRleHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyDntpnmib/nlKhcclxuICAgIF9jbGFzcy5wcm90b3R5cGUuX2hpZXJhcmNoaWVzID0gW107XHJcbiAgICB2YXIgX3N1cGVyID0gX2NsYXNzLnByb3RvdHlwZS5zdXBlckNsYXNzO1xyXG4gICAgd2hpbGUoX3N1cGVyKSB7XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuX2hpZXJhcmNoaWVzLnB1c2goX3N1cGVyKTtcclxuICAgICAgX3N1cGVyID0gX3N1cGVyLnByb3RvdHlwZS5zdXBlckNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjY2Vzc29yXHJcbiAgICBpZiAocGFyYW1zLl9hY2Nlc3Nvcikge1xyXG4gICAgICBmb3JJbi5jYWxsKHBhcmFtcy5fYWNjZXNzb3IsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gcGFyYW1zLl9hY2Nlc3Nvci5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgYWNjZXNzb3IuY2FsbChfY2xhc3MucHJvdG90eXBlLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAvLyBfY2xhc3MucHJvdG90eXBlLmFjY2Vzc29yKGtleSwgdmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gX2NsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoX2NsYXNzLnByb3RvdHlwZSwgcGFyYW1zLl9hY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsYXNzLnByb3RvdHlwZS5fY3JlYXRvciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcclxuICAgIF9jbGFzcy5wcm90b3R5cGUuX2NyZWF0b3IucHJvdG90eXBlID0gX2NsYXNzLnByb3RvdHlwZTtcclxuXHJcbiAgICAvLyBzdGF0aWMgcHJvcGVydHkvbWV0aG9kXHJcbiAgICBpZiAocGFyYW1zLl9zdGF0aWMpIHtcclxuICAgICAgJGV4dGVuZC5jYWxsKF9jbGFzcywgcGFyYW1zLl9zdGF0aWMpO1xyXG4gICAgICAvLyBfY2xhc3MuJGV4dGVuZChwYXJhbXMuX3N0YXRpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmFtcy5fZGVmaW5lZCkge1xyXG4gICAgICBwYXJhbXMuX2RlZmluZWQuY2FsbChfY2xhc3MsIF9jbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9jbGFzcztcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB1c2luZ1xyXG4gICAqIOaWh+Wtl+WIl+OBp+Wumue+qeOBl+OBn+ODkeOCueOCkuS9v+OBo+OBpuOCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBl+OBvuOBmeOAguODkeOCueOBryAsIC4gLyBcXCA6OiDjgafljLrliIfjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKiB7QGxpbmsgI3BoaW5hLnJlZ2lzdGVyfSDjgafnmbvpjLLjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5bjgorlh7rjgZnjgajjgY3jgarjganjgavkvb/jgYbjgajkvr/liKnjgarplqLmlbDjgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGhvZ2UgPSB7XHJcbiAgICogICAgICAgZm9vOiB7XHJcbiAgICogICAgICAgICBiYXI6IHtcclxuICAgKiAgICAgICAgICAgbnVtOiAxMDBcclxuICAgKiAgICAgICAgIH1cclxuICAgKiAgICAgICB9XHJcbiAgICogICAgIH07XHJcbiAgICogICAgIHZhciBiYXIgPSBwaGluYS51c2luZygnaG9nZS5mb28uYmFyJyk7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKGJhci5udW0pOyAvLyA9PiAxMDBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIOOCquODluOCuOOCp+OCr+ODiOOBuOOBruODkeOCuVxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g5Y+W44KK5Ye644GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ3VzaW5nJywgZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgIHJldHVybiBwaGluYSQxLmdsb2JhbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGF0aGVzID0gcGF0aC5zcGxpdCgvWywuXFwvIF18OjovKTtcclxuICAgIHZhciBjdXJyZW50ID0gcGhpbmEkMS5nbG9iYWw7XHJcblxyXG4gICAgcGF0aGVzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudFtwXSB8fCAoY3VycmVudFtwXT17fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudDtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByZWdpc3RlclxyXG4gICAqIOODkeOCueaMh+WumuOBp+OCquODluOCuOOCp+OCr+ODiOOCkueZu+mMsuOBmeOCi+mWouaVsOOBp+OBmeOAguODkeOCueOBryAsIC4gLyBcXCA6OiDjgafljLrliIfjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLnJlZ2lzdGVyKCdob2dlLmZvby5iYXInLCB7XHJcbiAgICogICAgICAgbnVtOiAxMDAsXHJcbiAgICogICAgIH0pO1xyXG4gICAqICAgICBjb25zb2xlLmxvZyhob2dlLmZvby5iYXIubnVtKTsgLy8gPT4gMTAwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCDnmbvpjLLjgZnjgovjgqrjg5bjgrjjgqfjgq/jg4jjga7jg5HjgrlcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX2NsYXNzIOeZu+mMsuOBmeOCi+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55m76Yyy44GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ3JlZ2lzdGVyJywgZnVuY3Rpb24ocGF0aCwgX2NsYXNzKSB7XHJcbiAgICB2YXIgcGF0aGVzID0gcGF0aC5zcGxpdCgvWywuXFwvIF18OjovKTtcclxuICAgIC8vIHZhciBjbGFzc05hbWUgPSBwYXRoZXMubGFzdDtcclxuICAgIHZhciBjbGFzc05hbWUgPSBsYXN0LmdldC5jYWxsKHBhdGhlcyk7XHJcbiAgICB2YXIgcGFyZW50UGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGFzdEluZGV4T2YoJy4nKSk7IC8vIOOBk+OBk+OCkuebtOOBleOBquOBhOOBqOODlOODquOCquODieWMuuWIh+OCiuS7peWkluOBr+eEoeWKue+8n1xyXG4gICAgdmFyIHBhcmVudCA9IHBoaW5hJDEudXNpbmcocGFyZW50UGF0aCk7XHJcblxyXG4gICAgcGFyZW50W2NsYXNzTmFtZV0gPSBfY2xhc3M7XHJcblxyXG4gICAgcmV0dXJuIF9jbGFzcztcclxuICB9KTtcclxuXHJcbiAgdmFyIF9jbGFzc0RlZmluZWRDYWxsYmFjayA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRlZmluZVxyXG4gICAqIOOCr+ODqeOCueOCkuWumue+qeOBmeOCi+mWouaVsOOBp+OBmeOAguS9v+OBhOaWueOBryB7QGxpbmsgI2NyZWF0ZUNsYXNzfSDjgajjgbvjgajjgpPjganlkIzjgZjjgafjgZnjgIJcclxuICAgKiDjgZ/jgaDjgZfjgIHlvJXmlbDjga8y44Gk44GC44KK44CB56ys5LiA5byV5pWw44Gv5a6a576p44GZ44KL44Kv44Op44K544Gu44OR44K544KS5paH5a2X5YiX44Gn5rih44GX44G+44GZ44CC56ys5LqM5byV5pWw44Gu44Kq44OW44K444Kn44Kv44OI44GvIHtAbGluayAjY3JlYXRlQ2xhc3N9IOOBruW8leaVsOOBqOWQjOOBmOOCiOOBhuOBq+OBl+OBvuOBmeOAglxyXG4gICAqIHtAbGluayAjY3JlYXRlQ2xhc3N9IOOBqOmBleOBhOOAgeWkieaVsOOBq+S7o+WFpeOBmeOCi+W/heeUqOOBjOOBquOBj+OAgeODkeOCueaMh+WumuOBp+OCr+ODqeOCueOCkuWumue+qeOBp+OBjeOBvuOBmeOAglxyXG4gICAqIOWGhemDqOeahOOBq+OBryB7QGxpbmsgI3JlZ2lzdGVyfSwge0BsaW5rICN1c2luZ30g44KS5L2/55So44GX44Gm44GE44KL44Gf44KB44CB44OR44K544GvICwgLiAvIFxcIDo6IOOBp+WMuuWIh+OCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZGVmaW5lKCduYW1lc3BhY2UuQ2xhc3MnLCB7XHJcbiAgICogICAgICAgc3VwZXJDbGFzczogJ25hbWVzcGFjZS5TdXBlcicsLy/opqrjgq/jg6njgrnntpnmib9cclxuICAgKlxyXG4gICAqICAgICAgIC8v44Oh44Oz44OQ5aSJ5pWwXHJcbiAgICogICAgICAgbWVtYmVyMTogMTAwLFxyXG4gICAqICAgICAgIG1lbWJlcjI6ICd0ZXN0JyxcclxuICAgKiAgICAgICBtZW1iZXIzOiBudWxsLFxyXG4gICAqXHJcbiAgICpcclxuICAgKiAgICAgICAvL+OCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAqICAgICAgIC8vQ2xhc3MoKeOCkuWRvOOBs+WHuuOBl+OBn+OBqOOBjeWun+ihjOOBleOCjOOCi1xyXG4gICAqICAgICAgIGluaXQ6IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAqICAgICAgICAgLy/jgrnjg7zjg5Hjg7zjgq/jg6njgrko57aZ5om/44GX44Gf44Kv44Op44K5KeOBrmluaXRcclxuICAgKiAgICAgICAgIHRoaXMuc3VwZXJJbml0KGEsIGIpO1xyXG4gICAqICAgICAgICAgdGhpcy5hID0gYTtcclxuICAgKiAgICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICogICAgICAgfSxcclxuICAgKlxyXG4gICAqICAgICAgIC8v44Oh44K944OD44OJXHJcbiAgICogICAgICAgbWV0aG9kMTogZnVuY3Rpb24oKXt9LFxyXG4gICAqICAgICAgIG1ldGhvZDI6IGZ1bmN0aW9uKCl7fSxcclxuICAgKlxyXG4gICAqICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIOODkeOCuVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMg44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7RnVuY3Rpb259IOWumue+qeOBl+OBn+OCr+ODqeOCuVxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdkZWZpbmUnLCBmdW5jdGlvbihwYXRoLCBwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMuc3VwZXJDbGFzcykge1xyXG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5zdXBlckNsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHZhciBfc3VwZXJDbGFzcyA9IHBoaW5hJDEudXNpbmcocGFyYW1zLnN1cGVyQ2xhc3MpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3N1cGVyQ2xhc3MgIT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgaWYgKCFfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGFyYW1zLnN1cGVyQ2xhc3NdKSB7XHJcbiAgICAgICAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXJhbXMuc3VwZXJDbGFzc10gPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXJhbXMuc3VwZXJDbGFzc10ucHVzaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGhpbmEkMS5kZWZpbmUocGF0aCwgcGFyYW1zKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcGFyYW1zLnN1cGVyQ2xhc3MgPSBfc3VwZXJDbGFzcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcGFyYW1zLnN1cGVyQ2xhc3MgPSBwYXJhbXMuc3VwZXJDbGFzcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfY2xhc3MgPSBwaGluYSQxLmNyZWF0ZUNsYXNzKHBhcmFtcyk7XHJcbiAgICBhY2Nlc3Nvci5jYWxsKF9jbGFzcy5wcm90b3R5cGUsICdjbGFzc05hbWUnLCB7XHJcbiAgICAvLyBfY2xhc3MucHJvdG90eXBlLmFjY2Vzc29yKCdjbGFzc05hbWUnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBwaGluYSQxLnJlZ2lzdGVyKHBhdGgsIF9jbGFzcyk7XHJcblxyXG4gICAgaWYgKF9jbGFzc0RlZmluZWRDYWxsYmFja1twYXRoXSkge1xyXG4gICAgICBfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGF0aF0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGF0aF0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBfY2xhc3M7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2xvYmFsaXplXHJcbiAgICogcGhpbmEuanMg44GM55So5oSP44GX44Gm44GE44KL5YWo44Gm44Gu44Kv44Op44K544KS44Kw44Ot44O844OQ44Or44Gr5bGV6ZaL44GX44G+44GZ44CC77yI5YW35L2T55qE44Gr44GvIHBoaW5hIOOBjOaMgeOBpOOCquODluOCuOOCp+OCr+ODiOOBjOS4gOmAmuOCiuOCsOODreODvOODkOODq+OBq+WxlemWi+OBleOCjOOBvuOBmeOAgu+8iVxyXG4gICAqIOOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOBp+OAgeOBhOOBoeOBhOOBoSBnbG9iYWwg44GL44KJ44Gf44Gp44Gj44Gm44GE44GL44Gq44GP44Gm44KCIHBoaW5hLmpzIOOBrueUqOaEj+OBl+OBpuOBhOOCi+OCr+ODqeOCueOCkuOCr+ODqeOCueWQjeOBoOOBkeOBp+WRvOOBs+WHuuOBmeOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2xvYmFsaXplKCk7XHJcbiAgICpcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgnZ2xvYmFsaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICBmb3JJbi5jYWxsKHBoaW5hJDEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm4gO1xyXG5cclxuICAgICAgZm9ySW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyB2YWx1ZS5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgLy8gaWYgKHBoaW5hLmdsb2JhbFtrZXldKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhucywga2V5KTtcclxuICAgICAgICAvLyAgIHBoaW5hLmdsb2JhbFsnXycgKyBrZXldID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgcGhpbmEuZ2xvYmFsW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcGhpbmEkMS5nbG9iYWxba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBwaGluYSQxLl9tYWluTGlzdGVuZXJzID0gW107XHJcbiAgcGhpbmEkMS5fbWFpbkxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1haW5cclxuICAgKiBwaGluYS5qcyDjgafjg5fjg63jgrDjg6njg5/jg7PjgrDjgZnjgovpmpvjgIHjg6HjgqTjg7Pjga7lh6bnkIbjgpLoqJjov7DjgZnjgovjgZ/jgoHjga7plqLmlbDjgafjgZnjgILln7rmnKznmoTjgasgcGhpbmEuanMg44Gn44Gu44OX44Ot44Kw44Op44Of44Oz44Kw44Gn44Gv44GT44Gu5Lit44Gr44OX44Ot44Kw44Op44Og44KS5pu444GE44Gm44GE44GP44GT44Go44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5tYWluKGZ1bmN0aW9uKCkge1xyXG4gICAqICAgICAgIC8v44GT44GT44Gr44Oh44Kk44Oz44Gu5Yem55CG44KS5pu444GPXHJcbiAgICogICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyDjg6HjgqTjg7Pjga7lh6bnkIZcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgnbWFpbicsIGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgIGlmIChwaGluYSQxLl9tYWluTG9hZGVkKSB7XHJcbiAgICAgIGZ1bmMoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwaGluYSQxLl9tYWluTGlzdGVuZXJzLnB1c2goZnVuYyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHZhciBkb2MgPSBwaGluYSQxLmdsb2JhbC5kb2N1bWVudDtcclxuICBpZiAocGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiBkb2MgJiYgZG9jLnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHJ1biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBjbG9uZS5jYWxsKHBoaW5hJDEuX21haW5MaXN0ZW5lcnMpO1xyXG4gICAgICAgIC8vIHZhciBsaXN0ZW5lcnMgPSBwaGluYS5fbWFpbkxpc3RlbmVycy5jbG9uZSgpO1xyXG4gICAgICAgIGNsZWFyLmNhbGwocGhpbmEkMS5fbWFpbkxpc3RlbmVycyk7XHJcbiAgICAgICAgLy8gcGhpbmEuX21haW5MaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgICAgLy8gbGlzdGVuZXJzLmVhY2goZnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBtYWluIOWGheOBpyBtYWluIOOCkui/veWKoOOBl+OBpuOBhOOCi+WgtOWQiOOBjOOBguOCi+OBruOBp+OBneOBruODgeOCp+ODg+OCr1xyXG4gICAgICAgIGlmIChwaGluYSQxLl9tYWluTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHJ1bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHBoaW5hJDEuX21haW5Mb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgLy8g44Gh44KH44Gj44Go6YGF5bu244GV44Gb44KLKOeUu+mdouOCteOCpOOCuuWVj+mhjClcclxuICAgICAgc2V0VGltZW91dChydW4pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcGhpbmEkMS5fbWFpbkxvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG59KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKiAjIOOCpOODmeODs+ODiOOCkuaJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxyXG4gKiDjgqTjg5njg7Pjg4jjgpLmibHjgYbjgZ/jgoHjga7jg6Hjgr3jg4Pjg4njgoTjg5fjg63jg5Hjg4bjgqPjgpLlrprnvqnjgZfjgabjgYTjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICogcGhpbmEuanMg44GM5o+Q5L6b44GZ44KL44Kv44Op44K544Gu5aSa44GP44Gv44GT44GuIEV2ZW50RGlzcGF0Y2hlciDjgq/jg6njgrnjga7lrZDlravjgajjgarjgaPjgabjgYTjgovjgZ/jgoHjgIFcclxuICog44G744Go44KT44Gp44Gu44Kq44OW44K444Kn44Kv44OI44Gn5a655piT44Gr44Kk44OZ44Oz44OI44KS5omx44GG44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAqXHJcbiAqICMg5bCR44GX6Kqs5piOXHJcbiAqIHRoaXMub254eHggPSBmdW5jdGlvbigpe307IOOBp+OCguOCpOODmeODs+ODiOODquOCueODiuOCkuioreWumuOBp+OBjeOCi+OBjOOAgeOBguOBvuOCiuaOqOWlqOOBl+OBquOBhOOAglxyXG4gKiDlkbzjgbPlh7rjgZXjgozjgovpoIbluo/jga/jgIHjgb7jgZogdGhpcy5vbnh4eHgg44GM5ZG844Gz5Ye644GV44KM44CB44GC44Go44GvIG9uKCkg44Gn55m76Yyy44GX44Gf6aCG55Wq44CCXHJcbiAqIEBtZW1iZXJvZiBwaGluYVxyXG4gKi9cclxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgb25cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44KS55m76Yyy44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDvvJHjgaTjga7jgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjga/jgYTjgY/jgaTjgafjgoLnmbvpjLLjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOaomea6luOBruOCpOODmeODs+ODiOOCkuaknOefpeOBmeOCi+OBq+OBr+OAgeOCquODluOCuOOCp+OCr+ODiOOBriB7QGxpbmsgT2JqZWN0MkQjaW50ZXJhY3RpdmV9IOODl+ODreODkeODhuOCo+OBjCB0cnVlIOOBp+OBguOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxyXG4gICAqIHtAbGluayBPYmplY3QyRCNpbnRlcmFjdGl2ZX0g44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KL44Gr44GvIHtAbGluayBPYmplY3QyRCNzZXRJbnRlcmFjdGl2ZX0g44Oh44K944OD44OJ44KS5ZG844Gz5Ye644GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiDjgb7jgZ/jgIF7QGxpbmsgI2ZsYXJlfSDjgoQge0BsaW5rICNmaXJlfSDjgavjgojjgaPjgablrprnvqnjgZfjgZ/jgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgoLnmbvpjLLjgZnjgovjgZPjgajjgYxcclxuICAgKiDjgafjgY3jgb7jgZnjgILjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjga8ge0BsaW5rIE9iamVjdDJEI2ludGVyYWN0aXZlfSDjg5fjg63jg5Hjg4bjgqPjgavjgojjgonjgZrlkbzjgbPlh7rjgZXjgozjgb7jgZnjgIJcclxuICAgKiDjgarjgYrjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqrjg5bjgrjjgqfjgq/jg4jjga8gRXZlbnQg44Kq44OW44K444Kn44Kv44OI44Go44Gv55Ww44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyNSZWZlcmVuY2VcclxuICAgKiDmqJnmupbjga7jgqTjg5njg7Pjg4jjga7nqK7poZ7jga/ku6XkuIvjgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiAtIFtFdmVudCByZWZlcmVuY2UgfCBNRE5dKCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMgKVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdmFyIHNoYXBlID0gQ2lyY2xlU2hhcGUoKS5hZGRDaGlsZFRvKHRoaXMpLnNldEludGVyYWN0aXZlKHRydWUpLnNldFBvc2l0aW9uKDUwLCA1MCk7XHJcbiAgICogICAgIHNoYXBlLm9uKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKXtcclxuICAgKiAgICAgICB0aGlzLmNvbG9yID0gXCJibHVlXCI7XHJcbiAgICogICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg44Kk44OZ44Oz44OI44Oq44K544OK44Go44Gq44KL6Zai5pWwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyLmV2ZW50IEV2ZW50IOOCquODluOCuOOCp+OCr+ODiOOAgeOBvuOBn+OBr+OCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIG9uKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG9mZlxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOOBguOCi+eorumhnuOBruOCpOODmeODs+ODiOOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOCkuOBmeOBueOBpuWJiumZpOOBmeOCi+OBq+OBryB7QGxpbmsgI2NsZWFyfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiumWouaVsFxyXG4gICAqL1xyXG4gIG9mZih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcclxuICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZpcmVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS6KGo44GZ44Kq44OW44K444Kn44Kv44OI44KS5oyH5a6a44GX44Gm44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS55m654Gr44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQg44Kr44K544K/44Og44Kk44OZ44Oz44OI44KS6KGo44GZ44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50LnR5cGUg44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu5ZCN5YmNXHJcbiAgICovXHJcbiAgIGZpcmUoZSkge1xyXG4gICAgZS50YXJnZXQgPSB0aGlzO1xyXG4gICAgdmFyIG9sZEV2ZW50TmFtZSA9ICdvbicgKyBlLnR5cGU7XHJcbiAgICBpZiAodGhpc1tvbGRFdmVudE5hbWVdKSB0aGlzW29sZEV2ZW50TmFtZV0oZSk7XHJcblxyXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdO1xyXG4gICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICAvLyB2YXIgdGVtcCA9IGxpc3RlbmVycy5jbG9uZSgpO1xyXG4gICAgICB2YXIgdGVtcCA9IGxpc3RlbmVycy5zbGljZSgwKTtcclxuICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wLmxlbmd0aDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgICAgdGVtcFtpXS5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZsYXJlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCpOODmeODs+ODiOWQjeOCkuaMh+WumuOBl+OBpuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkueZuueBq+OBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogcGFyYW0g5byV5pWw44KS5oyH5a6a44GZ44KL44GT44Go44Gr44KI44KK44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gr5Lu75oSP44Gu44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICog44GT44KM44Gr44KI44KK44CB5ZG844Gz5Ye644GX5YWD44GM44Kk44OZ44Oz44OI44Oq44K544OK44Gr5Lu75oSP44Gu5YCk44KS5rih44GZ44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICog77yI44Gf44Gg44GXIHRhcmdldCDjg5fjg63jg5Hjg4bjgqPjgavjga/lv4XjgZroh6rliIboh6rouqvjgYzmoLzntI3jgZXjgozjgb7jgZnjgILvvIlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIC8vXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7lkI3liY1cclxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtXSDjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgavjg5fjg63jg5Hjg4bjgqPjgpLoqK3lrprjgZnjgovjgZ/jgoHjga7jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAqL1xyXG4gIGZsYXJlKHR5cGUsIHBhcmFtKSB7XHJcbiAgICB2YXIgZSA9IHt0eXBlOnR5cGV9O1xyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgIGZvckluLmNhbGwocGFyYW0sIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcbiAgICAgIC8vIHBhcmFtLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcbiAgICAgICAgZVtrZXldID0gdmFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlyZShlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgb25lXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOS4gOW6puOBoOOBkeWun+ihjOOBleOCjOOCi+OCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMsuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5oyH5a6a44GX44Gf44Kk44OZ44Oz44OI44Oq44K544OK44GM5LiA5bqm5a6f6KGM44GV44KM44KL44Go44CB44Gd44Gu44Kk44OZ44Oz44OI44Oq44K544OK44Gv5YmK6Zmk44GV44KM44G+44GZ44CC44Gd44KM5Lul5aSW44Gu5oyZ5YuV44GvIHtAbGluayAjb259IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kk44OZ44Oz44OI44Gu56iu6aGeXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg44Kk44OZ44Oz44OI44Oq44K544OK44Go44Gq44KL6Zai5pWwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyLmV2ZW50IEV2ZW50IOOCquODluOCuOOCp+OCr+ODiOOAgeOBvuOBn+OBr+OCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIG9uZSh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciBmdW5jID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBsaXN0ZW5lci5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xyXG4gICAgICBzZWxmLm9mZih0eXBlLCBmdW5jKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbih0eXBlLCBmdW5jKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaGFzXHJcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44GM55m76Yyy44GV44KM44Gm44GE44KL44GL44Gp44GG44GL44KS6Kq/44G544G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjga7nqK7poZ7jgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgYznmbvpjLLjgZXjgozjgabjgYTjgovloLTlkIjjga8gdHJ1ZeOAgeOBneOBhuOBp+OBquOBhOWgtOWQiOOBryBmYWxzZSDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOaMh+WumuOBl+OBn+OCpOODmeODs+ODiOOBruOCpOODmeODs+ODiOODquOCueODiuOBjOeZu+mMsuOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGhhcyh0eXBlKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5sZW5ndGggIT09IDApIHx8ICEhdGhpc1snb24nICsgdHlwZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsZWFyXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOBguOCi+eorumhnuOBruOCpOODmeODs+ODiOOBq+WvvuOBmeOCi+OCpOODmeODs+ODiOODquOCueODiuOCkuOBmeOBueOBpuWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog54m55a6a44Gu44Kk44OZ44Oz44OI44Oq44K544OK44Gu44G/44KS5YmK6Zmk44GZ44KL44Gr44GvIHtAbGluayAjb2ZmfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqL1xyXG4gIGNsZWFyKHR5cGUpIHtcclxuICAgIHZhciBvbGRFdmVudE5hbWUgPSAnb24nICsgdHlwZTtcclxuICAgIGlmICh0aGlzW29sZEV2ZW50TmFtZV0pIGRlbGV0ZSB0aGlzW29sZEV2ZW50TmFtZV07XHJcbiAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgYWRkRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI29ufSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHJlbW92ZUV2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNvZmZ9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgY2xlYXJFdmVudExpc3RlbmVyXHJcbiAqIHtAbGluayAjY2xlYXJ9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgaGFzRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI2hhc30g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCBkaXNwYXRjaEV2ZW50XHJcbiAqIHtAbGluayAjZmlyZX0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCBkaXNwYXRjaEV2ZW50QnlUeXBlXHJcbiAqIHtAbGluayAjZmxhcmV9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuY29uc3QgbWV0aG9kTWFwID0ge1xyXG4gIGFkZEV2ZW50TGlzdGVuZXI6ICdvbicsXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogJ29mZicsXHJcbiAgY2xlYXJFdmVudExpc3RlbmVyOiAnY2xlYXInLFxyXG4gIGhhc0V2ZW50TGlzdGVuZXI6ICdoYXMnLFxyXG4gIGRpc3BhdGNoRXZlbnQ6ICdmaXJlJyxcclxuICBkaXNwYXRjaEV2ZW50QnlUeXBlOiAnZmxhcmUnLFxyXG59O1xyXG4vLyBtZXRob2RNYXAuZm9ySW4oZnVuY3Rpb24ob2xkLCBuYW1lKSB7XHJcbmZvckluLmNhbGwobWV0aG9kTWFwLCBmdW5jdGlvbihvbGQsIG5hbWUpIHtcclxuICAvLyBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLiRtZXRob2Qob2xkLCBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGVbbmFtZV0pO1xyXG4gICRtZXRob2QuY2FsbChFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLCBvbGQsIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGVbbmFtZV0pO1xyXG59KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkZsb3dcclxuICogdGljayBtYW5hZ2VtZW50IGNsYXNzXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBGbG93IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZnVuYywgd2FpdCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXR1cyA9ICdwZW5kaW5nJztcclxuICAgIHRoaXMucmVzdWx0VmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5fcXVldWUgPSBbXTtcclxuICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG4gICAgaWYgKHdhaXQgIT09IHRydWUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlbGYucmVzb2x2ZS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHNlbGYuc3RhdHVzID0gJ3Jlc29sdmVkJztcclxuICAgICAgfTtcclxuICAgICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlbGYucmVqZWN0LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgc2VsZi5zdGF0dXMgPSAncmVqZWN0ZWQnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5mdW5jKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOaIkOWKn1xyXG4gICAqL1xyXG4gIHJlc29sdmUoYXJnKSB7XHJcbiAgICB0aGlzLnJlc3VsdFZhbHVlID0gYXJnO1xyXG5cclxuICAgIC8vIOOCreODpeODvOOBq+epjeOBvuOCjOOBn+mWouaVsOOCkuWun+ihjFxyXG4gICAgdGhpcy5fcXVldWUuZm9yRWFjaChmdW5jdGlvbihmdW5jKSB7XHJcbiAgICAgIGZ1bmModGhpcy5yZXN1bHRWYWx1ZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICAgIC8vIHRoaXMuX3F1ZXVlLmNsZWFyKCk7XHJcbiAgICBjbGVhci5jYWxsKHRoaXMuX3F1ZXVlKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog5aSx5pWXXHJcbiAgICovXHJcbiAgcmVqZWN0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog6Z2e5ZCM5pyf57WC5LqG5pmC44Gu5Yem55CG44KS55m76YyyXHJcbiAgICovXHJcbiAgdGhlbihmdW5jKSB7XHJcbiAgICAvLyDmiJDlip/jgrnjg4bjg7zjgr/jgrnjgaDjgaPjgZ/loLTlkIjjga/ljbPlrp/ooYxcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3Jlc29sdmVkJykge1xyXG4gICAgICB2YXIgdmFsdWUgPSBmdW5jKHRoaXMucmVzdWx0VmFsdWUpO1xyXG4gICAgICByZXR1cm4gRmxvdy5yZXNvbHZlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgZmxvdyA9IG5ldyBGbG93KGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5fcXVldWUucHVzaChmdW5jdGlvbihhcmcpIHtcclxuICAgICAgICB2YXIgcmVzdWx0VmFsdWUgPSBmdW5jKGFyZyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRWYWx1ZSBpbnN0YW5jZW9mIEZsb3cpIHtcclxuICAgICAgICAgIHJlc3VsdFZhbHVlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgZmxvdy5yZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGZsb3cucmVzb2x2ZShyZXN1bHRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBmbG93O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlc29sdmUodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZsb3cpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBmbG93ID0gbmV3IEZsb3coZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZsb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWxsKGZsb3dzKSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb3coZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuXHJcbiAgICAgIGZsb3dzLmZvckVhY2goZnVuY3Rpb24oZmxvdykge1xyXG4gICAgICAgIGZsb3cudGhlbihmdW5jdGlvbihkKSB7XHJcbiAgICAgICAgICArK2NvdW50O1xyXG4gICAgICAgICAgYXJncy5wdXNoKGQpO1xyXG5cclxuICAgICAgICAgIGlmIChjb3VudCA+PSBmbG93cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5UaWNrZXJcclxuICogdGljayBtYW5hZ2VtZW50IGNsYXNzXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBUaWNrZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvLyAvKiog57WM6YGO44OV44Os44O844Og5pWwICovXHJcbiAgLy8gZnJhbWUgPSBudWxsXHJcblxyXG4gIC8vIC8qKiAx44OV44Os44O844Og44Gu57WM6YGO5pmC6ZaTICovXHJcbiAgLy8gZGVsdGFUaW1lID0gbnVsbFxyXG4gIFxyXG4gIC8vIC8qKiDlhajkvZPjga7ntYzpgY7mmYLplpMgKi9cclxuICAvLyBlbGFwc2VkVGltZSA9IG51bGxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZnBzID0gMzA7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMuZGVsdGFUaW1lID0gMDtcclxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5uZXIgPSBUaWNrZXIucnVubmVyO1xyXG4gIH1cclxuXHJcbiAgdGljayhmdW5jKSB7XHJcbiAgICB0aGlzLm9uKCd0aWNrJywgZnVuYyk7XHJcbiAgfVxyXG5cclxuICB1bnRpY2soZnVuYykge1xyXG4gICAgdGhpcy5vZmYoJ3RpY2snLCBmdW5jKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHZhciBub3cgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgLy8gMeODleODrOODvOODoOOBq+aOm+OBi+OBo+OBn+aZgumWk1xyXG4gICAgdGhpcy5kZWx0YVRpbWUgPSBub3cgLSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgLy8g5YWo5L2T44Gu57WM6YGO5pmC6ZaTXHJcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbm93IC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5jdXJyZW50VGltZSA9IG5vdztcclxuICAgIHRoaXMuZmxhcmUoJ3RpY2snKTtcclxuICAgIHZhciBlbmQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuICAgIC8vIOODleODrOODvOODoOOCkuabtOaWsFxyXG4gICAgdGhpcy5mcmFtZSArPSAxO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBlbGFwc2VkIHRpbWVcclxuICAgIHZhciBlbGFwc2VkID0gZW5kLXN0YXJ0O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBuZXh0IHdhaXRpbmcgdGltZVxyXG4gICAgdmFyIGRlbGF5ID0gTWF0aC5tYXgodGhpcy5mcmFtZVRpbWUtZWxhcHNlZCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGRlbGF5O1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuY3VycmVudFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGZuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChzZWxmLmlzUGxheWluZykge1xyXG4gICAgICAgIHZhciBkZWxheSA9IHNlbGYucnVuKCk7XHJcbiAgICAgICAgc2VsZi5ydW5uZXIoZm4sIGRlbGF5KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZuKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZXdpbmQoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIGdldCBmcHMoKSB7IHJldHVybiB0aGlzLl9mcHM7IH1cclxuICBzZXQgZnBzKHYpIHtcclxuICAgIHRoaXMuX2ZwcyA9IHY7XHJcbiAgICB0aGlzLmZyYW1lVGltZSA9IDEwMDAvdGhpcy5fZnBzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bm5lcihydW4sIGRlbGF5KSB7XHJcbiAgICBzZXRUaW1lb3V0KHJ1biwgZGVsYXkpO1xyXG4gIH1cclxuICBcclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuUmFuZG9tXHJcbiAqICMg5Lmx5pWw44KS5omx44GG44Gf44KB44Gu44Kv44Op44K5XHJcbiAqIOS5seaVsOOCkuaJseOBhuOBn+OCgeOBruODoeOCveODg+ODieOChOODl+ODreODkeODhuOCo+OCkuWumue+qeOBl+OBpuOBhOOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgUmFuZG9tIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IFtzZWVkID0gMV1cclxuICAgKiDkubHmlbDjga7jgrfjg7zjg4njgafjgZnjgIJcclxuICAgKi9cclxuICAvLyBzZWVkID0gMVxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgILlvJXmlbDjgacge0BsaW5rICNzZWVkfSDjgpLoqK3lrprjgafjgY3jgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NlZWQgPSAoRGF0ZS5ub3coKSkgfHwgMV0g44K344O844OJXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc2VlZCkge1xyXG4gICAgdGhpcy5zZWVkID0gc2VlZCB8fCAoRGF0ZS5ub3coKSkgfHwgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZG9tXHJcbiAgICogMH4x44Gu5Lmx5pWw44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAwfjEg44Gu5Lmx5pWwXHJcbiAgICovXHJcbiAgcmFuZG9tKCkge1xyXG4gICAgdmFyIHNlZWQgPSB0aGlzLnNlZWQ7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkIDw8IDEzKTtcclxuICAgIHNlZWQgPSBzZWVkIF4gKHNlZWQgPj4+IDE3KTtcclxuICAgIHNlZWQgPSAoc2VlZCBeIChzZWVkIDw8IDUpKTtcclxuXHJcbiAgICB0aGlzLnNlZWQgPSBzZWVkO1xyXG5cclxuICAgIHJldHVybiAoc2VlZCA+Pj4gMCkgLyBwaGluYS51dGlsLlJhbmRvbS5NQVg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRpbnRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKRcclxuICAgKi9cclxuICByYW5kaW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5yYW5kb20oKSoobWF4LW1pbisxKSApICsgbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kZmxvYXRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbDlgKRcclxuICAgKi9cclxuICByYW5kZmxvYXQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgpKihtYXgtbWluKSttaW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRib29sXHJcbiAgICog44Op44Oz44OA44Og44Gq55yf5YG95YCk44KS6L+U44GX44G+44GZ44CC5byV5pWw44Gn55m+5YiG546H44KS5oyH5a6a44Gn44GN44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwZXJlY2VudCA9IDUwXSDnnJ/jgavjgarjgovnmb7liIbnjodcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDjg6njg7Pjg4Djg6DjgarnnJ/lgb3lgKRcclxuICAgKi9cclxuICByYW5kYm9vbChwZXJjZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oKSA8IChwZXJjZW50ID09PSB1bmRlZmluZWQgPyA1MCA6IHBlcmNlbnQpIC8gMTAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYXJyYXlcclxuICAgKiDku7vmhI/jga7nr4Tlm7Ljgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLmoLzntI3jgZfjgZ/ku7vmhI/jga7plbfjgZXjga7phY3liJfjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbiA9IDEwMF0g6YWN5YiX44Gu6ZW344GVXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW4gPSAwXSDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heCA9IDEwMF0g56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjga7lhaXjgaPjgZ/phY3liJdcclxuICAgKi9cclxuICByYW5kYXJyYXkobGVuLCBtaW4sIG1heCkge1xyXG4gICAgbGVuID0gbGVuIHx8IDEwMDtcclxuICAgIG1pbiA9IG1pbiB8fCAwO1xyXG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcclxuXHJcbiAgICByZXR1cm4gKGxlbikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yYW5kaW50KG1pbiwgbWF4KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlZWQoKSB7IHJldHVybiB0aGlzLl9zZWVkOyB9XHJcbiAgc2V0IHNlZWQodikgeyB0aGlzLl9zZWVkID0gKHYgPj4+IDApIHx8IDE7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRTZWVkIFxyXG4gICAqIHtAbGluayAjc2VlZH0g44Gu5YCk44KS5Y+W5b6X44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjgrfjg7zjg4lcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIGdldFNlZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRTZWVkXHJcbiAgICoge0BsaW5rICNzZWVkfSDjga7lgKTjgpLjgrvjg4Pjg4jjgZfjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NlZWQgPSAxXSDjgrfjg7zjg4lcclxuICAgKiBAc3RhdGljXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzZXRTZWVkKHNlZWQpIHtcclxuICAgIHRoaXMuc2VlZCA9IChzZWVkID4+PiAwKSB8fCAxO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIDB+MeOBruS5seaVsOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRvbX0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAwfjEg44Gu5Lmx5pWwXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kb20oKSB7XHJcbiAgICB0aGlzLnNlZWQgPSB0aGlzLnhvcjMyKHRoaXMuc2VlZCk7XHJcbiAgICByZXR1cm4gKHRoaXMuc2VlZCA+Pj4gMCkgLyBwaGluYS51dGlsLlJhbmRvbS5NQVg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRpbnRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kaW50fSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRpbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBwaGluYS5nbG9iYWwuTWF0aC5mbG9vciggdGhpcy5yYW5kb20oKSoobWF4LW1pbisxKSApICsgbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kZmxvYXRcclxuICAgKiDmjIflrprjgZXjgozjgZ/nr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kZmxvYXR9IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVsOWApFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oKSoobWF4LW1pbikrbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYm9vbFxyXG4gICAqIOODqeODs+ODgOODoOOBquecn+WBveWApOOCkui/lOOBl+OBvuOBmeOAguW8leaVsOOBp+eZvuWIhueOh+OCkuaMh+WumuOBp+OBjeOBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueODoeOCveODg+ODieOBriB7QGxpbmsgI3JhbmRib29sfSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3BlcmVjZW50ID0gNTBdIOecn+OBq+OBquOCi+eZvuWIhueOh1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq55yf5YG95YCkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kYm9vbChwZXJlY2VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZGludCgwLCA5OSkgPCAocGVyZWNlbnQgfHwgNTApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYXJyYXlcclxuICAgKiDku7vmhI/jga7nr4Tlm7Ljgafjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjgpLmoLzntI3jgZfjgZ/ku7vmhI/jga7plbfjgZXjga7phY3liJfjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kYXJyYXl9IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuID0gMTAwXSDphY3liJfjga7plbfjgZVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbiA9IDBdIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4ID0gMTAwXSDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquaVtOaVsOWApOOBruWFpeOBo+OBn+mFjeWIl1xyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGFycmF5KGxlbiwgbWluLCBtYXgpIHtcclxuICAgIGxlbiA9IGxlbiB8fCAxMDA7XHJcbiAgICBtaW4gPSBtaW4gfHwgMDtcclxuICAgIG1heCA9IG1heCB8fCAxMDA7XHJcblxyXG4gICAgcmV0dXJuIChsZW4pLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmFuZGludChtaW4sIG1heCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHhvcjMyXHJcbiAgICogeG9yc2hpZnQg44KS55So44GE44Gm55aR5Ly85Lmx5pWw5YiX44KS55Sf5oiQ44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNlZWRcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOeWkeS8vOS5seaVsOWIl1xyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgeG9yMzIoc2VlZCkge1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA8PCAxMyk7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkID4+PiAxNyk7XHJcbiAgICBzZWVkID0gKHNlZWQgXiAoc2VlZCA8PCA1KSk7XHJcblxyXG4gICAgcmV0dXJuIHNlZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHV1aWRcclxuICAgKiB1dWlkIOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gdXVpZFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxyXG4gIHN0YXRpYyB1dWlkKCkge1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmKHBoaW5hLmdsb2JhbC5wZXJmb3JtYW5jZSAmJiB0eXBlb2YgcGhpbmEuZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgfVxyXG4gICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcclxuICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XHJcbiAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1dWlkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gTUFYXHJcbiAqIOWGhemDqOeahOOBq+S9v+eUqOOBleOCjOOCi+WumuaVsOOBp+OBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuUmFuZG9tLk1BWCA9IDQyOTQ5NjcyOTU7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtzZWVkID0gKERhdGUubm93KCkpXSDjgrfjg7zjg4lcclxuICogc3RhdGljIOODoeOCveODg+ODieOBruS5seaVsOOBruOCt+ODvOODieOBp+OBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuUmFuZG9tLnNlZWQgPSAoRGF0ZS5ub3coKSk7XHJcblxyXG5cclxuLy8gcHJvdG90eXBl5ouh5by144Gv44GX44Gq44GEXHJcbi8vIE1hdGguJG1ldGhvZChcInJhbmRpbnRcIiwgZnVuY3Rpb24obWluLCBtYXgpIHtcclxuLy8gICByZXR1cm4gcGhpbmEudXRpbC5SYW5kb20ucmFuZGludChtaW4sIG1heCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gTWF0aC4kbWV0aG9kKFwicmFuZGZsb2F0XCIsIGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbi8vICAgcmV0dXJuIHBoaW5hLnV0aWwuUmFuZG9tLnJhbmRmbG9hdChtaW4sIG1heCk7XHJcbi8vIH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuU3VwcG9ydFxyXG4gKiBcclxuICovXHJcbmNsYXNzIFN1cHBvcnQge31TdXBwb3J0LmNhbnZhcyA9ICEhcGhpbmEkMS5nbG9iYWwuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5TdXBwb3J0LndlYkdMID0gKGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAhIXBoaW5hJDEuZ2xvYmFsLkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCAmJiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJ3dlYmdsJyk7XHJcbn0pKCk7XHJcblN1cHBvcnQud2ViQXVkaW8gPSAhIXBoaW5hJDEuZ2xvYmFsLkF1ZGlvQ29udGV4dCB8fCAhIXBoaW5hJDEuZ2xvYmFsLndlYmtpdEF1ZGlvQ29udGV4dCB8fCAhIXBoaW5hJDEuZ2xvYmFsLm1vekF1ZGlvQ29udGV4dDtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkdyaWRcclxuICovXHJcbmNsYXNzIEdyaWQge1xyXG5cclxuICAvLyAvKiog5bmFICovXHJcbiAgLy8gd2lkdGg6IDY0MCxcclxuICAvLyAvKiog5YiX5pWwICovXHJcbiAgLy8gY29sdW1uczogMTIsXHJcbiAgLy8gLyoqIOODq+ODvOODlyAqL1xyXG4gIC8vIGxvb3A6IGZhbHNlLFxyXG4gIC8vIC8qKiDjgqrjg5Xjgrvjg4Pjg4jlgKQgKi9cclxuICAvLyBvZmZzZXQ6IDAsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHZhciBwYXJhbSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgdmFyIHdpZHRoID0gcGFyYW0ud2lkdGggfHwgNjQwO1xyXG4gICAgICB2YXIgY29sdW1ucyA9IHBhcmFtLmNvbHVtbnMgfHwgMTI7XHJcbiAgICAgIHZhciBsb29wID0gcGFyYW0ubG9vcCB8fCBmYWxzZTtcclxuICAgICAgdmFyIG9mZnNldCA9IHBhcmFtLm9mZnNldCB8fCAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciB3aWR0aCAgID0gYXJndW1lbnRzWzBdIHx8IDY0MDtcclxuICAgICAgdmFyIGNvbHVtbnMgPSBhcmd1bWVudHNbMV0gfHwgMTI7XHJcbiAgICAgIHZhciBsb29wICAgID0gYXJndW1lbnRzWzJdIHx8IGZhbHNlO1xyXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzWzNdIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcclxuICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgIHRoaXMudW5pdFdpZHRoID0gdGhpcy53aWR0aC90aGlzLmNvbHVtbnM7XHJcbiAgfVxyXG5cclxuICAvLyDjgrnjg5Hjg7PmjIflrprjgaflgKTjgpLlj5blvpco6LKg5pWw44KCb2spXHJcbiAgc3BhbihpbmRleCkge1xyXG4gICAgaWYgKHRoaXMubG9vcCkge1xyXG4gICAgICBpbmRleCArPSB0aGlzLmNvbHVtbnM7XHJcbiAgICAgIGluZGV4ICU9IHRoaXMuY29sdW1ucztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRXaWR0aCAqIGluZGV4ICsgdGhpcy5vZmZzZXQ7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIHVuaXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bml0V2lkdGg7XHJcbiAgfVxyXG5cclxuICBjZW50ZXIob2Zmc2V0KSB7XHJcbiAgICB2YXIgaW5kZXggPSBvZmZzZXQgfHwgMDtcclxuICAgIHJldHVybiAodGhpcy53aWR0aC8yKSArICh0aGlzLnVuaXRXaWR0aCAqIGluZGV4KTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLk1hdGhcclxuICogIyDmi6HlvLXjgZfjgZ8gTWF0aCDjgq/jg6njgrlcclxuICog5pWw5a2m55qE44Gq5Yem55CG44KS5omx44GGIE1hdGgg44Kv44Op44K544KS5ouh5by144GX44Gm44GE44G+44GZ44CCXHJcbiAqIFxyXG4gKiDlhajjgaZzdGF0aWPjg6Hjg7Pjg5Djg7zjgafjgZnjgIJcclxuICovXHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiBAbWV0aG9kIGNsYW1wXHJcbiAqIOaMh+WumuOBl+OBn+WApOOCkuaMh+WumuOBl+OBn+evhOWbsuOBq+WPjuOCgeOBn+e1kOaenOOCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgTWF0aC5jbGFtcCgxMjAsIDAsIDY0MCk7IC8vID0+IDEyMFxyXG4gKiAgICAgTWF0aC5jbGFtcCg5ODAsIDAsIDY0MCk7IC8vID0+IDY0MFxyXG4gKiAgICAgTWF0aC5jbGFtcCgtODAsIDAsIDY0MCk7IC8vID0+IDBcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIOWApFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbWluICDnr4Tlm7Ljga7kuIvpmZBcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1heCAg56+E5Zuy44Gu5LiK6ZmQXHJcbiAqIEByZXR1cm4ge051bWJlcn0g5Li444KB44Gf57WQ5p6c44Gu5YCkXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICByZXR1cm4gKHZhbHVlIDwgbWluKSA/IG1pbiA6ICggKHZhbHVlID4gbWF4KSA/IG1heCA6IHZhbHVlICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkgREVHX1RPX1JBRFxyXG4gKiDluqbjgpLjg6njgrjjgqLjg7PjgavlpInmj5vjgZnjgovjgZ/jgoHjga7lrprmlbDjgafjgZnjgIJcclxuICovXHJcbnZhciBERUdfVE9fUkFEID0gTWF0aC5QSS8xODA7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5Ud2VlblxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKiBcclxuICovXHJcbmNsYXNzIFR3ZWVuIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMudGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICBmcm9tVG8odGFyZ2V0LCBiZWdpblByb3BzLCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLmJlZ2luUHJvcHMgPSBiZWdpblByb3BzO1xyXG4gICAgdGhpcy5maW5pc2hQcm9wcyA9IGZpbmlzaFByb3BzO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDEwMDA7XHJcbiAgICB0aGlzLmVhc2luZyA9IGVhc2luZztcclxuXHJcbiAgICAvLyBzZXR1cFxyXG4gICAgdGhpcy5jaGFuZ2VQcm9wcyA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIGJlZ2luUHJvcHMpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVByb3BzW2tleV0gPSBmaW5pc2hQcm9wc1trZXldIC0gYmVnaW5Qcm9wc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG8odGFyZ2V0LCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdmFyIGJlZ2luUHJvcHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gZmluaXNoUHJvcHMpIHtcclxuICAgICAgYmVnaW5Qcm9wc1trZXldID0gdGFyZ2V0W2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mcm9tVG8odGFyZ2V0LCBiZWdpblByb3BzLCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBmcm9tKHRhcmdldCwgYmVnaW5Qcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgICB2YXIgZmluaXNoUHJvcHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBiZWdpblByb3BzKSB7XHJcbiAgICAgICAgZmluaXNoUHJvcHNba2V5XSA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gYmVnaW5Qcm9wc1trZXldO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZyb21Ubyh0YXJnZXQsIGJlZ2luUHJvcHMsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYnkodGFyZ2V0LCBwcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdmFyIGJlZ2luUHJvcHMgPSB7fTtcclxuICAgIHZhciBmaW5pc2hQcm9wcyA9IHt9O1xyXG5cclxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xyXG4gICAgICBiZWdpblByb3BzW2tleV0gPSB0YXJnZXRba2V5XTtcclxuICAgICAgZmluaXNoUHJvcHNba2V5XSA9IHRhcmdldFtrZXldICsgcHJvcHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZyb21Ubyh0YXJnZXQsIGJlZ2luUHJvcHMsIGZpbmlzaFByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHlveW8oKSB7XHJcbiAgICB2YXIgdGVtcCA9IHRoaXMuYmVnaW5Qcm9wcztcclxuICAgIHRoaXMuYmVnaW5Qcm9wcyA9IHRoaXMuZmluaXNoUHJvcHM7XHJcbiAgICB0aGlzLmZpbmlzaFByb3BzID0gdGVtcDtcclxuICAgIC8vIHRoaXMuY2hhbmdlUHJvcHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgIGZvckluLmNhbGwodGhpcy5jaGFuZ2VQcm9wcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VQcm9wc1trZXldID0gLXZhbHVlO1xyXG4gICAgICB0aGlzLnRhcmdldFtrZXldID0gdGhpcy5iZWdpblByb3BzW2tleV07XHJcbiAgICB9LCB0aGlzKTtcclxuICAgIC8vIFRPRE86IGVhc2luZyDjgoLlj43ou6LjgZXjgZvjgotcclxuICAgIC8vIHRoaXMuZWFzaW5nID0gZWFzaW5nO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnYWluKHRpbWUpIHtcclxuICAgIHRoaXMuc2Vlayh0aGlzLnRpbWUgKyB0aW1lKTtcclxuICB9XHJcblxyXG4gIGZvcndhcmQodGltZSkge1xyXG4gICAgdGhpcy5zZWVrKHRoaXMudGltZSArIHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgYmFja3dhcmQodGltZSkge1xyXG4gICAgdGhpcy5zZWVrKHRoaXMudGltZSAtIHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgc2Vlayh0aW1lKSB7XHJcbiAgICAvLyB0aGlzLnRpbWUgPSBNYXRoLmNsYW1wKHRpbWUsIDAsIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgdGhpcy50aW1lID0gY2xhbXAodGltZSwgMCwgdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gICAgLy8gdGhpcy5iZWdpblByb3BzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIGZvckluLmNhbGwodGhpcy5iZWdpblByb3BzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciB2ID0gdGhpcy5lYXNpbmcodGhpcy50aW1lLCB2YWx1ZSwgdGhpcy5jaGFuZ2VQcm9wc1trZXldLCB0aGlzLmR1cmF0aW9uKTtcclxuICAgICAgdGhpcy50YXJnZXRba2V5XSA9IHY7XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBlYXNpbmcoKSB7IHJldHVybiB0aGlzLl9lYXNpbmc7IH1cclxuICBzZXQgZWFzaW5nKHYpIHtcclxuICAgIHRoaXMuX2Vhc2luZyA9IFR3ZWVuLkVBU0lOR1t2XSB8fCBUd2Vlbi5FQVNJTkcuZGVmYXVsdDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiDjgqTjg7zjgrjjg7PjgrBcclxuICogIyMjIFJlZmVyZW5jZVxyXG4gKiAtIDxodHRwOi8vY29kZXJlcG9zLm9yZy9zaGFyZS93aWtpL0pTVHdlZW5lcj5cclxuICogLSA8aHR0cDovL2NvZGVyZXBvcy5vcmcvc2hhcmUvYnJvd3Nlci9sYW5nL2phdmFzY3JpcHQvanN0d2VlbmVyL3RydW5rL3NyYy9KU1R3ZWVuZXIuanM+XHJcbiAqIC0gPGh0dHA6Ly9nc2dkLmNvLnVrL3NhbmRib3gvanF1ZXJ5L2Vhc2luZy9qcXVlcnkuZWFzaW5nLjEuMy5qcz5cclxuICogLSA8aHR0cDovL2hvc3RlZC56ZWguY29tLmJyL3R3ZWVuZXIvZG9jcy9lbi11cy9taXNjL3RyYW5zaXRpb25zLmh0bWw+XHJcbiAqL1xyXG5Ud2Vlbi5FQVNJTkcgPSB7XHJcblxyXG4gIC8qKiBkZWZhdWx0ICovXHJcbiAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKnQvZCArIGI7XHJcbiAgfSxcclxuICAvKiogbGluZWFyICovXHJcbiAgbGluZWFyOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyp0L2QgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIHN3aW5nICovXHJcbiAgc3dpbmc6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqKHQvPWQpKih0LTIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5RdWFkICovXHJcbiAgZWFzZUluUXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRRdWFkICovXHJcbiAgZWFzZU91dFF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqKHQvPWQpKih0LTIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRRdWFkICovXHJcbiAgZWFzZUluT3V0UXVhZDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCArIGI7XHJcbiAgICByZXR1cm4gLWMvMiAqKCgtLXQpKih0LTIpIC0gMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGRlZmVJbkN1YmljICovXHJcbiAgZWFzZUluQ3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KnQgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRDdWJpYyAqL1xyXG4gIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKCh0PXQvZC0xKSp0KnQgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0Q3ViaWMgKi9cclxuICBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtcclxuICAgIHJldHVybiBjLzIqKCh0LT0yKSp0KnQgKyAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQ3ViaWMgKi9cclxuICBlYXNlT3V0SW5DdWJpYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Q3ViaWModCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5DdWJpYygodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5RdWFydCAqL1xyXG4gIGVhc2VJblF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCp0KnQgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRRdWFydCAqL1xyXG4gIGVhc2VPdXRRdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICooKHQ9dC9kLTEpKnQqdCp0IC0gMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dFF1YXJ0ICovXHJcbiAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcclxuICAgIHJldHVybiAtYy8yICooKHQtPTIpKnQqdCp0IC0gMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJblF1YXJ0ICovXHJcbiAgZWFzZU91dEluUXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dFF1YXJ0KHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluUXVhcnQoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluUXVpbnQgKi9cclxuICBlYXNlSW5RdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQqdCp0KnQgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRRdWludCAqL1xyXG4gIGVhc2VPdXRRdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKCh0PXQvZC0xKSp0KnQqdCp0ICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dFF1aW50ICovXHJcbiAgZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0KnQgKyBiO1xyXG4gICAgcmV0dXJuIGMvMiooKHQtPTIpKnQqdCp0KnQgKyAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluUXVpbnQgKi9cclxuICBlYXNlT3V0SW5RdWludDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0UXVpbnQodCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5RdWludCgodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5TaW5lICovXHJcbiAgZWFzZUluU2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jICogTWF0aC5jb3ModC9kICooTWF0aC5QSS8yKSkgKyBjICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0U2luZSAqL1xyXG4gIGVhc2VPdXRTaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyAqIE1hdGguc2luKHQvZCAqKE1hdGguUEkvMikpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRTaW5lICovXHJcbiAgZWFzZUluT3V0U2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIC1jLzIgKihNYXRoLmNvcyhNYXRoLlBJKnQvZCkgLSAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluU2luZSAqL1xyXG4gIGVhc2VPdXRJblNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dFNpbmUodCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5TaW5lKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkV4cG8gKi9cclxuICBlYXNlSW5FeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gKHQ9PTApID8gYiA6IGMgKiBNYXRoLnBvdygyLCAxMCAqKHQvZCAtIDEpKSArIGIgLSBjICogMC4wMDE7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEV4cG8gKi9cclxuICBlYXNlT3V0RXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuICh0PT1kKSA/IGIrYyA6IGMgKiAxLjAwMSAqKC1NYXRoLnBvdygyLCAtMTAgKiB0L2QpICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEV4cG8gKi9cclxuICBlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0PT0wKSByZXR1cm4gYjtcclxuICAgIGlmKHQ9PWQpIHJldHVybiBiK2M7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIgKiBNYXRoLnBvdygyLCAxMCAqKHQgLSAxKSkgKyBiIC0gYyAqIDAuMDAwNTtcclxuICAgIHJldHVybiBjLzIgKiAxLjAwMDUgKigtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5FeHBvICovXHJcbiAgZWFzZU91dEluRXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0RXhwbyh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkV4cG8oKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluQ2lyYyAqL1xyXG4gIGVhc2VJbkNpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqKE1hdGguc3FydCgxIC0odC89ZCkqdCkgLSAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dENpcmMgKi9cclxuICBlYXNlT3V0Q2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtKHQ9dC9kLTEpKnQpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRDaXJjICovXHJcbiAgZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gLWMvMiAqKE1hdGguc3FydCgxIC0gdCp0KSAtIDEpICsgYjtcclxuICAgIHJldHVybiBjLzIgKihNYXRoLnNxcnQoMSAtKHQtPTIpKnQpICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkNpcmMgKi9cclxuICBlYXNlT3V0SW5DaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRDaXJjKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQ2lyYygodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5FbGFzdGljICovXHJcbiAgZWFzZUluRWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgdmFyIHM7XHJcbiAgICBpZih0PT0wKSByZXR1cm4gYjsgIGlmKCh0Lz1kKT09MSkgcmV0dXJuIGIrYzsgIGlmKCFwKSBwPWQqLjM7XHJcbiAgICBpZighYSB8fCBhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyBzPXAvNDsgfSBlbHNlIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luKGMvYSk7XHJcbiAgICByZXR1cm4gLShhKk1hdGgucG93KDIsMTAqKHQtPTEpKSAqIE1hdGguc2luKCh0KmQtcykqKDIqTWF0aC5QSSkvcCApKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEVsYXN0aWMgKi9cclxuICBlYXNlT3V0RWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgdmFyIHM7XHJcbiAgICBpZih0PT0wKSByZXR1cm4gYjsgIGlmKCh0Lz1kKT09MSkgcmV0dXJuIGIrYzsgIGlmKCFwKSBwPWQqLjM7XHJcbiAgICBpZighYSB8fCBhIDwgTWF0aC5hYnMoYykpIHsgYT1jOyBzPXAvNDsgfSBlbHNlIHMgPSBwLygyKk1hdGguUEkpICogTWF0aC5hc2luKGMvYSk7XHJcbiAgICByZXR1cm4oYSpNYXRoLnBvdygyLC0xMCp0KSAqIE1hdGguc2luKCh0KmQtcykqKDIqTWF0aC5QSSkvcCApICsgYyArIGIpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEVsYXN0aWMgKi9cclxuICBlYXNlSW5PdXRFbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICB2YXIgcztcclxuICAgIGlmKHQ9PTApIHJldHVybiBiOyAgaWYoKHQvPWQvMik9PTIpIHJldHVybiBiK2M7ICBpZighcCkgcD1kKiguMyoxLjUpO1xyXG4gICAgaWYoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7IGE9Yzsgcz1wLzQ7IH0gICAgICAgZWxzZSBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbihjL2EpO1xyXG4gICAgaWYodCA8IDEpIHJldHVybiAtLjUqKGEqTWF0aC5wb3coMiwxMCoodC09MSkpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcclxuICAgIHJldHVybiBhKk1hdGgucG93KDIsLTEwKih0LT0xKSkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSouNSArIGMgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkVsYXN0aWMgKi9cclxuICBlYXNlT3V0SW5FbGFzdGljOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBhLCBwKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRFbGFzdGljKHQqMiwgYiwgYy8yLCBkLCBhLCBwKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluRWxhc3RpYygodCoyKS1kLCBiK2MvMiwgYy8yLCBkLCBhLCBwKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5CYWNrICovXHJcbiAgZWFzZUluQmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xyXG4gICAgaWYocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQqKChzKzEpKnQgLSBzKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEJhY2sgKi9cclxuICBlYXNlT3V0QmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xyXG4gICAgaWYocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xyXG4gICAgcmV0dXJuIGMqKCh0PXQvZC0xKSp0KigocysxKSp0ICsgcykgKyAxKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0QmFjayAqL1xyXG4gIGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMioodCp0KigoKHMqPSgxLjUyNSkpKzEpKnQgLSBzKSkgKyBiO1xyXG4gICAgcmV0dXJuIGMvMiooKHQtPTIpKnQqKCgocyo9KDEuNTI1KSkrMSkqdCArIHMpICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkJhY2sgKi9cclxuICBlYXNlT3V0SW5CYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRCYWNrKHQqMiwgYiwgYy8yLCBkLCBzKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQmFjaygodCoyKS1kLCBiK2MvMiwgYy8yLCBkLCBzKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5Cb3VuY2UgKi9cclxuICBlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjIC0gVHdlZW4uRUFTSU5HLmVhc2VPdXRCb3VuY2UoZC10LCAwLCBjLCBkKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEJvdW5jZSAqL1xyXG4gIGVhc2VPdXRCb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kKSA8KDEvMi43NSkpIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSp0KnQpICsgYjtcclxuICAgIH0gZWxzZSBpZih0IDwoMi8yLjc1KSkge1xyXG4gICAgICByZXR1cm4gYyooNy41NjI1Kih0LT0oMS41LzIuNzUpKSp0ICsgLjc1KSArIGI7XHJcbiAgICB9IGVsc2UgaWYodCA8KDIuNS8yLjc1KSkge1xyXG4gICAgICByZXR1cm4gYyooNy41NjI1Kih0LT0oMi4yNS8yLjc1KSkqdCArIC45Mzc1KSArIGI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYyooNy41NjI1Kih0LT0oMi42MjUvMi43NSkpKnQgKyAuOTg0Mzc1KSArIGI7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0Qm91bmNlICovXHJcbiAgZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkJvdW5jZSh0KjIsIDAsIGMsIGQpICogLjUgKyBiO1xyXG4gICAgZWxzZSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRCb3VuY2UodCoyLWQsIDAsIGMsIGQpICogLjUgKyBjKi41ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5Cb3VuY2UgKi9cclxuICBlYXNlT3V0SW5Cb3VuY2U6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEJvdW5jZSh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkJvdW5jZSgodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9XHJcblxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuUXVlcnlTdHJpbmdcclxuICogXHJcbiAqL1xyXG5jbGFzcyBRdWVyeVN0cmluZyB7XHJcblxyXG4gIHN0YXRpYyBwYXJzZSh0ZXh0LCBzZXAsIGVxLCBpc0RlY29kZSkge1xyXG4gICAgdGV4dCA9IHRleHQgfHwgbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcclxuICAgIHNlcCA9IHNlcCB8fCAnJic7XHJcbiAgICBlcSA9IGVxIHx8ICc9JztcclxuICAgIHZhciBkZWNvZGUgPSAoaXNEZWNvZGUpID8gZGVjb2RlVVJJQ29tcG9uZW50IDogZnVuY3Rpb24oYSkgeyByZXR1cm4gYTsgfTtcclxuICAgIHJldHVybiB0ZXh0LnNwbGl0KHNlcCkucmVkdWNlKGZ1bmN0aW9uKG9iaiwgdikge1xyXG4gICAgICB2YXIgcGFpciA9IHYuc3BsaXQoZXEpO1xyXG4gICAgICBvYmpbcGFpclswXV0gPSBkZWNvZGUocGFpclsxXSk7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RyaW5naWZ5KHZhbHVlLCBzZXAsIGVxLCBpc0VuY29kZSkge1xyXG4gICAgc2VwID0gc2VwIHx8ICcmJztcclxuICAgIGVxID0gZXEgfHwgJz0nO1xyXG4gICAgdmFyIGVuY29kZSA9IChpc0VuY29kZSkgPyBlbmNvZGVVUklDb21wb25lbnQgOiBmdW5jdGlvbihhKSB7IHJldHVybiBhOyB9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgIHJldHVybiBrZXkgKyBlcSArIGVuY29kZSh2YWx1ZVtrZXldKTtcclxuICAgIH0pLmpvaW4oc2VwKTtcclxuICB9XHJcbiAgXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBnbG9iYWwuU3RyaW5nXHJcbiAqICMg5ouh5by144GX44GfIFN0cmluZyDjgq/jg6njgrlcclxuICovXHJcblxyXG4vKipcclxuICogQG1ldGhvZCBmb3JtYXRcclxuICog44OV44Kp44O844Oe44OD44OI44Gr5byV5pWw44KS6YGp55So44GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOW8leaVsOOBjOOCquODluOCuOOCp+OCr+ODiOOBruWgtOWQiOOAgVwie+ODl+ODreODkeODhuOCo+WQjX1cIiDjgYzjgqrjg5bjgrjjgqfjgq/jg4jjga7jg5fjg63jg5Hjg4bjgqPjga7lgKTjgavnva7jgY3mj5vjgo/jgorjgb7jgZnjgIJcclxuICog5oyH5a6a44GX44Gf44OX44Ot44OR44OG44Kj44GM44Kq44OW44K444Kn44Kv44OI44Gr44Gq44GE5aC05ZCI44Gv56m65paH5a2X5YiX44Gr44Gq44KK44G+44GZ44CCXHJcbiAqXHJcbiAqIOesrDHlvJXmlbDjgYzjgqrjg5bjgrjjgqfjgq/jg4jjgafjgarjgYvjgaPjgZ/loLTlkIjjgIFcInvmlbTmlbB9XCIg44GM5ZCE5byV5pWw44Gr572u44GN5o+b44KP44KK44G+44GZ44CCXHJcbiAqIOaMh+WumuOBl+OBn+WApOOBruW8leaVsOOBjOOBquOBi+OBo+OBn+WgtOWQiOOBr+epuuaWh+Wtl+WIl+OBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgb2JqID0ge3I6IDEyOCwgZzogMCwgYjogMjU1fTtcclxuICogICAgIFwiY29sb3I6IHJnYih7cn0sIHtnfSwge2J9KTtcIi5mb3JtYXQob2JqKTsgLy8gPT4gXCJjb2xvcjogcmdiKDEyOCwgMCwgMjU1KTtcIlxyXG4gKlxyXG4gKiAgICAgXCJ7MH0gKyB7MX0gPSB7Mn1cIi5mb3JtYXQoNSwgOCwgKDUrOCkpOyAvLyA9PiBcIjUgKyA4ID0gMTNcIlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIOODkeODqeODoeODvOOCv+OBqOOBquOCi+OCquODluOCuOOCp+OCr+ODiFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IOeUn+aIkOOBl+OBn+aWh+Wtl+WIl1xyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0KGFyZykge1xyXG4vLyBTdHJpbmcucHJvdG90eXBlLiRtZXRob2QoXCJmb3JtYXRcIiwgZnVuY3Rpb24oYXJnKSB7XHJcbiAgLy8g572u5o+b44OV44Kh44Oz44KvXHJcbiAgdmFyIHJlcF9mbiA9IHVuZGVmaW5lZDtcclxuICBcclxuICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjga7loLTlkIhcclxuICBpZiAodHlwZW9mIGFyZyA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAvKiogQGlnbm9yZSAqL1xyXG4gICAgcmVwX2ZuID0gZnVuY3Rpb24obSwgaykge1xyXG4gICAgICBpZiAoYXJnW2tdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ1trXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgLy8g6KSH5pWw5byV5pWw44Gg44Gj44Gf5aC05ZCIXHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIC8qKiBAaWdub3JlICovXHJcbiAgICByZXBfZm4gPSBmdW5jdGlvbihtLCBrKSB7XHJcbiAgICAgIHZhciB2ID0gYXJnc1sgcGFyc2VJbnQoaykgXTtcclxuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gdGhpcy5yZXBsYWNlKCAvXFx7KFxcdyspXFx9L2csIHJlcF9mbiApO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZWFjaFxyXG4gKiDlkITmloflrZfjgpLpoIbnlarjgavmuKHjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIHN0ciA9ICdhYmMnO1xyXG4gKiAgICAgc3RyLmVhY2goZnVuY3Rpb24oY2gpIHtcclxuICogICAgICAgY29uc29sZS5sb2coY2gpO1xyXG4gKiAgICAgfSk7XHJcbiAqICAgICAvLyA9PiAnYSdcclxuICogICAgIC8vICAgICdiJ1xyXG4gKiAgICAgLy8gICAgJ2MnXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCkXHJcbiAqL1xyXG5mdW5jdGlvbiBlYWNoJDEoKSB7XHJcbi8vIFN0cmluZy5wcm90b3R5cGUuJG1ldGhvZChcImVhY2hcIiwgZnVuY3Rpb24oKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICByZXR1cm4gdGhpcztcclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuQ29sb3JcclxuICog44Kr44Op44O844Kv44Op44K5XHJcbiAqL1xyXG5jbGFzcyBDb2xvciB7XHJcblxyXG4gIC8vIC8qKiBS5YCkICovXHJcbiAgLy8gcjogMjU1LFxyXG4gIC8vIC8qKiBH5YCkICovXHJcbiAgLy8gZzogMjU1LFxyXG4gIC8vIC8qKiBC5YCkICovXHJcbiAgLy8gYjogMjU1LFxyXG4gIC8vIC8qKiBB5YCkICovXHJcbiAgLy8gYTogMS4wLFxyXG5cclxuICAvKipcclxuICAgKiDliJ3mnJ/ljJZcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihyLCBnLCBiLCBhKSB7XHJcbiAgICB0aGlzLnIgPSAyNTU7XHJcbiAgICB0aGlzLmcgPSAyNTU7XHJcbiAgICB0aGlzLmIgPSAyNTU7XHJcbiAgICB0aGlzLmEgPSAxLjA7XHJcbiAgICB0aGlzLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K744OD44K/44O8LlxyXG4gICAqL1xyXG4gIHNldChyLCBnLCBiLCBhKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcbiAgICB0aGlzLmEgPSAoYSAhPT0gdW5kZWZpbmVkKSA/IGEgOiAxLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaVsOWApOOBq+OCiOOCi+OCu+ODg+OCv+ODvC5cclxuICAgKi9cclxuICBzZXRGcm9tTnVtYmVyKHIsIGcsIGIsIGEpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuICAgIHRoaXMuYSA9IChhICE9PSB1bmRlZmluZWQpID8gYSA6IDEuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6YWN5YiX44Gr44KI44KL44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0RnJvbUFycmF5KGFycikge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0LmFwcGx5KHRoaXMsIGFycik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqrjg5bjgrjjgqfjgq/jg4jjgavjgojjgovjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRGcm9tT2JqZWN0KG9iaikge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0KG9iai5yLCBvYmouZywgb2JqLmIsIG9iai5hKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaWh+Wtl+WIl+OBq+OCiOOCi+OCu+ODg+OCv+ODvFxyXG4gICAqL1xyXG4gIHNldEZyb21TdHJpbmcoc3RyKSB7XHJcbiAgICB2YXIgY29sb3IgPSBDb2xvci5zdHJpbmdUb051bWJlcihzdHIpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0KGNvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGNvbG9yWzNdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOizouOBhOOCu+ODg+OCv+ODvFxyXG4gICAqL1xyXG4gIHNldFNtYXJ0KCkge1xyXG4gICAgdmFyIGFyZyA9IGFyZ3VtZW50c1swXTtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIHtcclxuICAgICAgdGhpcy5zZXQoYXJndW1lbnRzLnIsIGFyZ3VtZW50cy5nLCBhcmd1bWVudHMuYiwgYXJndW1lbnRzLmEpO1xyXG4gICAgfSBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICB0aGlzLnNldEZyb21BcnJheShhcmcpO1xyXG4gICAgfSBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgdGhpcy5zZXRGcm9tT2JqZWN0KGFyZyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmcpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhpcy5zZXRGcm9tU3RyaW5nKGFyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggMTbpgLLmlbDmloflrZfliJfjgavlpInmj5tcclxuICAgKi9cclxuICB0b1N0eWxlQXNIZXgoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCIjezB9ezF9ezJ9XCIsXHJcbiAgICAvLyByZXR1cm4gXCIjezB9ezF9ezJ9XCIuZm9ybWF0KFxyXG4gICAgICB0aGlzLnIudG9TdHJpbmcoMTYpLnBhZGRpbmcoMiwgJzAnKSxcclxuICAgICAgdGhpcy5nLnRvU3RyaW5nKDE2KS5wYWRkaW5nKDIsICcwJyksXHJcbiAgICAgIHRoaXMuYi50b1N0cmluZygxNikucGFkZGluZygyLCAnMCcpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCBSR0LmloflrZfliJfjgavlpInmj5tcclxuICAgKi9cclxuICB0b1N0eWxlQXNSR0IoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJyZ2Ioe3J9LHtnfSx7Yn0pXCIsIHtcclxuICAgIC8vIHJldHVybiBcInJnYih7cn0se2d9LHtifSlcIi5mb3JtYXQoe1xyXG4gICAgICByOiB+fnRoaXMucixcclxuICAgICAgZzogfn50aGlzLmcsXHJcbiAgICAgIGI6IH5+dGhpcy5iXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBDU1Mg55SoIFJHQkHmloflrZfliJfjgavlpInmj5tcclxuICAgKi9cclxuICB0b1N0eWxlQXNSR0JBKCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIsIHtcclxuICAgIC8vIHJldHVybiBcInJnYmEoe3J9LHtnfSx7Yn0se2F9KVwiLmZvcm1hdCh7XHJcbiAgICAgIHI6IH5+dGhpcy5yLFxyXG4gICAgICBnOiB+fnRoaXMuZyxcclxuICAgICAgYjogfn50aGlzLmIsXHJcbiAgICAgIGE6IHRoaXMuYVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDU1Mg55SoIFJHQkEg5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZSgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInJnYmEoe3J9LHtnfSx7Yn0se2F9KVwiLCB7XHJcbiAgICAvLyByZXR1cm4gXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIi5mb3JtYXQoe1xyXG4gICAgICByOiB+fnRoaXMucixcclxuICAgICAgZzogfn50aGlzLmcsXHJcbiAgICAgIGI6IH5+dGhpcy5iLFxyXG4gICAgICBhOiB0aGlzLmFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZW1iZXIgcGhpbmEudXRpbC5Db2xvclxyXG4gICAqIEBtZXRob2Qgc3RyVG9OdW1cclxuICAgKi9cclxuICBzdGF0aWMgc3RyVG9OdW0oc3RyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdUb051bWJlcihzdHIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0cmluZ1RvTnVtYmVyKHN0cikge1xyXG4gICAgdmFyIHZhbHVlID0gbnVsbDtcclxuICAgIHZhciB0eXBlID0gbnVsbDtcclxuXHJcbiAgICBpZiAoc3RyWzBdID09PSAnIycpIHtcclxuICAgICAgdHlwZSA9IChzdHIubGVuZ3RoID09IDQpID8gXCJoZXgxMTFcIiA6IFwiaGV4MjIyXCI7XHJcbiAgICB9IGVsc2UgaWYgKHN0clswXSA9PT0gJ3InICYmIHN0clsxXSA9PT0gJ2cnICYmIHN0clsyXSA9PT0gJ2InKSB7XHJcbiAgICAgIHR5cGUgPSAoc3RyWzNdID09ICdhJykgPyBcInJnYmFcIiA6IFwicmdiXCI7XHJcbiAgICB9IGVsc2UgaWYgKHN0clswXSA9PT0gJ2gnICYmIHN0clsxXSA9PT0gJ3MnICYmIHN0clsyXSA9PT0gJ2wnKSB7XHJcbiAgICAgIHR5cGUgPSAoc3RyWzNdID09ICdhJykgPyBcImhzbGFcIiA6IFwiaHNsXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgdmFyIG1hdGNoX3NldCA9IE1BVENIX1NFVF9MSVNUW3R5cGVdO1xyXG4gICAgICB2YXIgbSA9IHN0ci5tYXRjaChtYXRjaF9zZXQucmVnKTtcclxuICAgICAgdmFsdWUgPSBtYXRjaF9zZXQuZXhlYyhtKTtcclxuICAgIH0gZWxzZSBpZiAoQ29sb3IuQ09MT1JfTElTVFtzdHJdKSB7XHJcbiAgICAgIHZhbHVlID0gQ29sb3IuQ09MT1JfTElTVFtzdHJdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsIOOCkiByZ2Ig44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgc3RhdGljIEhTTHRvUkdCKGgsIHMsIGwpIHtcclxuICAgIHZhciByLCBnLCBiO1xyXG5cclxuICAgIGggJT0gMzYwO1xyXG4gICAgaCArPSAzNjA7XHJcbiAgICBoICU9IDM2MDtcclxuICAgIHMgKj0gMC4wMTtcclxuICAgIGwgKj0gMC4wMTtcclxuXHJcbiAgICBpZiAocyA9PT0gMCkge1xyXG4gICAgICB2YXIgbCA9IE1hdGgucm91bmQobCAqIDI1NSk7XHJcbiAgICAgIHJldHVybiBbbCwgbCwgbF07XHJcbiAgICB9XHJcbiAgICB2YXIgbTIgPSAobCA8IDAuNSkgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XHJcbiAgICB2YXIgbTEgPSBsICogMiAtIG0yO1xyXG5cclxuICAgIC8vIHJlZFxyXG4gICAgdmFyIHRlbXAgPSAoaCArIDEyMCkgJSAzNjA7XHJcbiAgICBpZiAodGVtcCA8IDYwKSB7XHJcbiAgICAgIHIgPSBtMSArIChtMiAtIG0xKSAqIHRlbXAgLyA2MDtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDE4MCkge1xyXG4gICAgICByID0gbTI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByID0gbTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ3JlZW5cclxuICAgIHRlbXAgPSBoO1xyXG4gICAgaWYgKHRlbXAgPCA2MCkge1xyXG4gICAgICBnID0gbTEgKyAobTIgLSBtMSkgKiB0ZW1wIC8gNjA7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAxODApIHtcclxuICAgICAgZyA9IG0yO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMjQwKSB7XHJcbiAgICAgIGcgPSBtMSArIChtMiAtIG0xKSAqICgyNDAgLSB0ZW1wKSAvIDYwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZyA9IG0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJsdWVcclxuICAgIHRlbXAgPSAoKGggLSAxMjApICsgMzYwKSAlIDM2MDtcclxuICAgIGlmICh0ZW1wIDwgNjApIHtcclxuICAgICAgYiA9IG0xICsgKG0yIC0gbTEpICogdGVtcCAvIDYwO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMTgwKSB7XHJcbiAgICAgIGIgPSBtMjtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDI0MCkge1xyXG4gICAgICBiID0gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gdGVtcCkgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGIgPSBtMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBwYXJzZUludChyICogMjU1KSxcclxuICAgICAgcGFyc2VJbnQoZyAqIDI1NSksXHJcbiAgICAgIHBhcnNlSW50KGIgKiAyNTUpXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiBoc2xhIOOCkiByZ2JhIOOBq+WkieaPm1xyXG4gICAqL1xyXG4gIHN0YXRpYyBIU0xBdG9SR0JBKGgsIHMsIGwsIGEpIHtcclxuICAgIHZhciB0ZW1wID0gQ29sb3IuSFNMdG9SR0IoaCwgcywgbCk7XHJcbiAgICB0ZW1wWzNdID0gYTtcclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiByZ2Ig5YCk44KS5L2c5oiQXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZVN0eWxlUkdCKHIsIGcsIGIpIHtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIHJnYmEg5YCk44KS5L2c5oiQXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZVN0eWxlUkdCQShyLCBnLCBiLCBhKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiBoc2wg5YCk44KS5L2c5oiQXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZVN0eWxlSFNMKGgsIHMsIGwpIHtcclxuICAgIHJldHVybiBcImhzbChcIiArIGggKyBcIixcIiArIHMgKyBcIiUsXCIgKyBsICsgXCIlKVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiBoc2xhIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZUhTTEEoaCwgcywgbCwgYSkge1xyXG4gICAgcmV0dXJuIFwiaHNsYShcIiArIGggKyBcIixcIiArIHMgKyBcIiUsXCIgKyBsICsgXCIlLFwiICsgYSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiDjgqvjg6njg7zjg6rjgrnjg4hcclxuICovXHJcbkNvbG9yLkNPTE9SX0xJU1QgPSB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBibGFjayAqL1xyXG4gIFwiYmxhY2tcIjogWzB4MDAsIDB4MDAsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgc2lsdmVyICovXHJcbiAgXCJzaWx2ZXJcIjogWzB4YzAsIDB4YzAsIDB4YzBdLFxyXG4gIC8qKiBAcHJvcGVydHkgZ3JheSAqL1xyXG4gIFwiZ3JheVwiOiBbMHg4MCwgMHg4MCwgMHg4MF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSB3aGl0ZSAqL1xyXG4gIFwid2hpdGVcIjogWzB4ZmYsIDB4ZmYsIDB4ZmZdLFxyXG4gIC8qKiBAcHJvcGVydHkgbWFyb29uICovXHJcbiAgXCJtYXJvb25cIjogWzB4ODAsIDB4MDAsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgcmVkICovXHJcbiAgXCJyZWRcIjogWzB4ZmYsIDB4MDAsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgcHVycGxlICovXHJcbiAgXCJwdXJwbGVcIjogWzB4ODAsIDB4MDAsIDB4ODBdLFxyXG4gIC8qKiBAcHJvcGVydHkgZnVjaHNpYSAqL1xyXG4gIFwiZnVjaHNpYVwiOiBbMHhmZiwgMHgwMCwgMHhmZl0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBncmVlbiAqL1xyXG4gIFwiZ3JlZW5cIjogWzB4MDAsIDB4ODAsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgbGltZSAqL1xyXG4gIFwibGltZVwiOiBbMHgwMCwgMHhmZiwgMHgwMF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBvbGl2ZSAqL1xyXG4gIFwib2xpdmVcIjogWzB4ODAsIDB4ODAsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgeWVsbG93ICovXHJcbiAgXCJ5ZWxsb3dcIjogWzB4ZmYsIDB4ZmYsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgbmF2eSAqL1xyXG4gIFwibmF2eVwiOiBbMHgwMCwgMHgwMCwgMHg4MF0sXHJcbiAgLyoqIEBwcm9wZXJ0eSBibHVlICovXHJcbiAgXCJibHVlXCI6IFsweDAwLCAweDAwLCAweGZmXSxcclxuICAvKiogQHByb3BlcnR5IHRlYWwgKi9cclxuICBcInRlYWxcIjogWzB4MDAsIDB4ODAsIDB4ODBdLFxyXG4gIC8qKiBAcHJvcGVydHkgYXF1YSAqL1xyXG4gIFwiYXF1YVwiOiBbMHgwMCwgMHhmZiwgMHhmZl0sXHJcbn07XHJcblxyXG5cclxudmFyIE1BVENIX1NFVF9MSVNUID0ge1xyXG4gIFwiaGV4MTExXCI6IHtcclxuICAgIHJlZzogL14jKFxcd3sxfSkoXFx3ezF9KShcXHd7MX0pJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcGFyc2VJbnQobVsxXSArIG1bMV0sIDE2KSxcclxuICAgICAgICBwYXJzZUludChtWzJdICsgbVsyXSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KG1bM10gKyBtWzNdLCAxNilcclxuICAgICAgXTtcclxuICAgIH1cclxuICB9LFxyXG4gIFwiaGV4MjIyXCI6IHtcclxuICAgIHJlZzogL14jKFxcd3syfSkoXFx3ezJ9KShcXHd7Mn0pJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcGFyc2VJbnQobVsxXSwgMTYpLFxyXG4gICAgICAgIHBhcnNlSW50KG1bMl0sIDE2KSxcclxuICAgICAgICBwYXJzZUludChtWzNdLCAxNilcclxuICAgICAgXTtcclxuICAgIH1cclxuICB9LFxyXG4gIFwicmdiXCI6IHtcclxuICAgIHJlZzogL15yZ2JcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pXFwpJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcGFyc2VJbnQobVsxXSksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSlcclxuICAgICAgXTtcclxuICAgIH1cclxuICB9LFxyXG4gIFwicmdiYVwiOiB7XHJcbiAgICByZWc6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MX0oXFwuezF9XFxkKyk/KVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0pLFxyXG4gICAgICAgIHBhcnNlSW50KG1bMl0pLFxyXG4gICAgICAgIHBhcnNlSW50KG1bM10pLFxyXG4gICAgICAgIHBhcnNlRmxvYXQobVs0XSlcclxuICAgICAgXTtcclxuICAgIH1cclxuICB9LFxyXG4gIFwiaHNsXCI6IHtcclxuICAgIHJlZzogL15oc2xcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pJSxcXHMqKFxcZHsxLDN9KSVcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIENvbG9yLkhTTHRvUkdCKG1bMV0sIG1bMl0sIG1bM10pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJoc2xhXCI6IHtcclxuICAgIHJlZzogL15yZ2JhXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxfShcXC57MX1cXGQrKT8pXFwpJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBDb2xvci5IU0xBdG9SR0JBKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcblxuLy8g55uj6KaW44Kq44OW44K444Kn44Kv44OIXHJcbi8vIHJlZ2lzdGVyIOOBpyBrZXkg44KS55m76YyyICjjg4fjg5Xjgqnjg6vjg4jlgKTjgoLkuIDnt5LjgavvvJ8pXHJcbi8vIGV2ZW50IGRpc3BhdGNoZXIg44KS57aZ5om/XHJcbi8vIGV2ZW50IGRpc3BhdGNoZXIg44Gj44GmIHV0aWwg44GY44KD44Gt77yfXHJcbi8vIHJlZ2lzdGVyIOOBp+eZu+mMsuOBl+OBn+WApOOCkuWkieabtOOBl+OBn+OCiSBjaGFuZ2Ug44Kk44OZ44Oz44OI44GM6LWw44KLXHJcblxyXG5cclxuLy8g5ZCN5YmN5YCZ6KOcXHJcbi8vICBtaWRkbGVtYW4o5Luy56uL5Lq6KVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5DaGFuZ2VEaXNwYXRjaGVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBDaGFuZ2VEaXNwYXRjaGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuX29ic2VydmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbMF07XHJcbiAgICAgIGZvckluLmNhbGwob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIG9iai5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcihrZXksIHZhbHVlKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIHRlbXBLZXkgPSAnX18nICsga2V5O1xyXG4gICAgICB0aGlzW3RlbXBLZXldID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yKGtleSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpc1t0ZW1wS2V5XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgdGhpc1t0ZW1wS2V5XSA9IHY7XHJcbiAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYXJlKCdjaGFuZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgb2JzZXJ2ZSgpIHtcclxuICAgIHRoaXMuX29ic2VydmUgPSB0cnVlO1xyXG4gIH1cclxuICB1bm9ic2VydmUoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlID0gZmFsc2U7XHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5BamF4XHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgQWpheCB7XHJcblxyXG4gIHN0YXRpYyByZXF1ZXN0KG9wdGlvbnMpIHtcclxuICAgIHZhciBkYXRhID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgQWpheC5kZWZhdWx0cyk7XHJcbiAgICAvLyB2YXIgZGF0YSA9ICh7fSkuJHNhZmUob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XHJcblxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIGZsb3cgPSBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeGhyLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB4aHIub3BlbihkYXRhLnR5cGUsIGRhdGEudXJsKTtcclxuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IGRhdGEucmVzcG9uc2VUeXBlO1xyXG4gICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmbG93O1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0KHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgcG9zdCh1cmwpIHtcclxuICAgIHJldHVybiBBamF4LnJlcXVlc3Qoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBwdXQodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ1BVVCcsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBkZWwodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIFxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJvZiBBamF4XHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG5BamF4LmRlZmF1bHRzID0ge1xyXG4gIHR5cGU6ICdHRVQnLFxyXG4gIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICByZXNwb25zZVR5cGU6ICdqc29uJyxcclxuICBkYXRhOiBudWxsLFxyXG4gIHVybDogJycsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLk51bWJlclxyXG4gKiAjIOaLoeW8teOBl+OBnyBOdW1iZXIg44Kv44Op44K5XHJcbiAqIOaVsOWApOOCkuaJseOBhiBOdW1iZXIg44Kv44Op44K544KS5ouh5by144GX44Gm44GE44G+44GZ44CCXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgdGltZXNcclxuICogMCDjgYvjgonoh6rliIboh6rouqvjga7mlbAtMeOBvuOBp+OAgeOCq+OCpuODs+OCv+OCkuOCpOODs+OCr+ODquODoeODs+ODiOOBl+OBquOBjOOCiemWouaVsOOCkue5sOOCiui/lOOBl+Wun+ihjOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gW107XHJcbiAqICAgICAoNSkudGltZXMoZnVuY3Rpb24oaSl7XHJcbiAqICAgICAgIGFyci5wdXNoKGkpO1xyXG4gKiAgICAgfSk7IC8vID0+IFswLCAxLCAyLCAzLCA0XVxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIOmWouaVsOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+iHquWIhuiHqui6q+OAglxyXG4gKi9cclxuZnVuY3Rpb24gdGltZXMoZm4sIHNlbGYpIHtcclxuLy8gTnVtYmVyLnByb3RvdHlwZS4kbWV0aG9kKFwidGltZXNcIiwgIGZ1bmN0aW9uKGZuLCBzZWxmKSB7XHJcbiAgc2VsZiA9IHNlbGYgfHwgdGhpcztcclxuICBmb3IgKHZhciBpPTA7IGk8dGhpczsgKytpKSB7XHJcbiAgICBmbi5jYWxsKHNlbGYsIGksIHRoaXMpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2Qgc3RlcFxyXG4gKiDoh6rliIboh6rouqvjga7lgKTjgYvjgonmjIflrprjgZfjgZ/mlbDjgb7jgafjgIHjgqvjgqbjg7Pjgr/jgpLlopfliIbjgZXjgZvjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICog5LiK6ZmQ5YCk44KE5aKX5YiG5YCk44GvIGZsb2F0IOWei+OCkuaMh+WumuOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgdmFyIGFyciA9IFtdO1xyXG4gKiAgICAgKDIuNCkuc3RlcCg1LjMsIDAuOCwgZnVuY3Rpb24obikge1xyXG4gKiAgICAgICBhcnIucHVzaChuKTtcclxuICogICAgICB9KTsgLy8gPT4gWzIuNCwgMy4yLCA0LjAsIDQuOF1cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGxpbWl0IOOCq+OCpuODs+OCv+OBruS4iumZkOWApFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RlcCDjgqvjgqbjg7Pjgr/jgpLlopfliIbjgZnjgovph49cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g44Kz44O844Or44OQ44OD44Kv6Zai5pWw44CC5byV5pWw44Gr44Kr44Km44Oz44K/44GM5rih44GV44KM44KL44CCXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSDplqLmlbDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/oh6rliIboh6rouqvjgIJcclxuICovXHJcbmZ1bmN0aW9uIHN0ZXAobGltaXQsIHN0ZXAsIGZuLCBzZWxmKSB7XHJcbi8vIE51bWJlci5wcm90b3R5cGUuJG1ldGhvZChcInN0ZXBcIiwgIGZ1bmN0aW9uKGxpbWl0LCBzdGVwLCBmbiwgc2VsZikge1xyXG4gIHNlbGYgPSBzZWxmIHx8IHRoaXM7XHJcbiAgZm9yICh2YXIgaT0rdGhpczsgaTw9bGltaXQ7IGkrPXN0ZXApIHtcclxuICAgIGZuLmNhbGwoc2VsZiwgaSwgdGhpcyk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcbi8vIE51bWJlci5wcm90b3R5cGUuJG1ldGhvZChcInRvRGVncmVlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gKHRoaXMqTWF0aC5SQURfVE9fREVHKTsgfSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCB0b1JhZGlhblxyXG4gKiDluqbjgpLjg6njgrjjgqLjg7PjgavlpInmj5vjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgICgxODApLnRvUmFkaWFuKCk7IC8vID0+IDMuMTQxNTkyNjUzNTg5NzkzXHJcbiAqXHJcbiAqIEByZXR1cm4ge051bWJlcn0g44Op44K444Ki44OzXHJcbiAqL1xyXG5mdW5jdGlvbiB0b1JhZGlhbigpIHsgcmV0dXJuIHRoaXMgKiBERUdfVE9fUkFEOyB9XHJcbi8vIE51bWJlci5wcm90b3R5cGUuJG1ldGhvZChcInRvUmFkaWFuXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcypNYXRoLkRFR19UT19SQUQ7IH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uVmVjdG9yMlxyXG4gKiAjIDLmrKHlhYPjg5njgq/jg4jjg6vjgq/jg6njgrlcclxuICogMuasoeWFg+OBruODmeOCr+ODiOODq+OChOW6p+aomeOCkuihqOOBmeOCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgVmVjdG9yMiB7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIHjluqfmqJlcclxuICAvLyAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gIC8vICAqL1xyXG4gIC8vIHggPSAwXHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIHnluqfmqJlcclxuICAvLyAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gIC8vICAqL1xyXG4gIC8vIHkgPSAwXHJcblxyXG4gIC8qKlxyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6vjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3g9MF0g44OZ44Kv44OI44Or44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFt5PTBdIOODmeOCr+ODiOODq+OBriB5IOW6p+aomVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0gMuasoeWFg+ODmeOCr+ODiOODq+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHg9MCwgeT0wKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSB2LmNsb25lKCk7XHJcbiAgICogICAgIHYyLnggPT0gdi54OyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZXF1YWxzXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjgYzjgZnjgbnjgaYgb3RoZXIg44Go562J44GX44GE44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNSwgNik7XHJcbiAgICogICAgIHYxLmVxdWFscyh2Mik7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg5q+U6LyD44GZ44KL5a++6LGh44Gu44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g562J44GX44GE44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgZXF1YWxzKHYpIHtcclxuICAgIHJldHVybiAodGhpcy54ID09PSB2LnggJiYgdGhpcy55ID09PSB2LnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjga7lgKTjgpLlho3oqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYuc2V0KDUsIDYpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg44OZ44Kv44OI44Or44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg44OZ44Kv44OI44Or44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlho3oqK3lrprlvozjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzZXQoeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44GrIG90aGVyIOOCkuWKoOOBiOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDUsIDYpO1xyXG4gICAqICAgICB2MS5hZGQodjIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3Rvcig4LCAxMClcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWKoOeul+OBl+OBn+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGFkZCh2KSB7XHJcbiAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgdGhpcy55ICs9IHYueTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzdWJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgYvjgokgb3RoZXIg44KS5rib44GY44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDjg5njgq/jg4jjg6vjgYzluqfmqJnjgpLooajjgZnloLTlkIjjga/jgIHmjIflrprjgZfjgZ/luqfmqJnjgYvjgonoh6rliIboh6rouqvjgbjjgajlkJHjgYvjgYbjg5njgq/jg4jjg6vjgYzlvpfjgonjgozjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgNSk7XHJcbiAgICogICAgIHYxLnN1Yih2Mik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKDIsIC0xKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5rib566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3ViKHYpIHtcclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG11bFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOBq+aVsOWApCBuIOOCkuS5l+OBmOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLm11bCgzKSAvLyA9PiBwaGluYS5nZW9tLlZlY3Rvcig5LCAxMilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBuIOS5l+OBmOOCi+WApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5LmX566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbXVsKG4pIHtcclxuICAgIHRoaXMueCAqPSBuO1xyXG4gICAgdGhpcy55ICo9IG47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGl2XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44KS5pWw5YCkIG4g44Gn5Ymy44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMig4LCAxNik7XHJcbiAgICogICAgIHYxLmRpdigyKSAvLyA9PiBwaGluYS5nZW9tLlZlY3Rvcig0LCA4KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG4g5Ymy44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDpmaTnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBkaXYobikge1xyXG4gICAgLy9jb25zb2xlLmFzc2VydChuICE9IDAsIFwiMCBkaXZpc2lvbiEhXCIpO1xyXG4gICAgbiA9IG4gfHwgMC4wMTtcclxuICAgIHRoaXMueCAvPSBuO1xyXG4gICAgdGhpcy55IC89IG47XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBuZWdhdGVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjga7mraPosqDjgpLlj43ou6LjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIHRoaXMg44Go5ZCM44GY5aSn44GN44GV44Gn5pa55ZCR44GM6YCG44Gu44OZ44Kv44OI44Or44GM5b6X44KJ44KM44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAtNCk7XHJcbiAgICogICAgIHYxLm5lZ2F0ZSgpIC8vID0+IHBoaW5hLmdlb20uVmVjdG9yKC0zLCA0KVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlj43ou6Llvozjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBuZWdhdGUoKSB7XHJcbiAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgdGhpcy55ID0gLXRoaXMueTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRvdFxyXG4gICAqIG90aGVyIOOBqOOBruWGheepjeOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5oqV5b2x44OZ44Kv44OI44Or44KS5rGC44KB44Gf44KK44CB6aGe5Ly85bqm44Gu6KiI566X44Gr5Yip55So44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDIpO1xyXG4gICAqICAgICB2MS5kb3QodjIpIC8vID0+IDJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWGheepjVxyXG4gICAqL1xyXG4gIGRvdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcm9zc1xyXG4gICAqIG90aGVyIOOBqOOBruWkluepje+8iOOCr+ODreOCueepje+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBp+OBruWkluepjeOBr+ODmeOCr+ODiOODq+OBp+OBquOBj+aVsOWApOOCkui/lOOBmeOBk+OBqOOBq+azqOaEj+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIG90aGVyIOOCiOOCiiB0aGlzIOaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+ato+OBruWApOOBq+OBquOCiuOAgeWPjeaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+iyoOOBruWApOOBq+OBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MS5jcm9zcyh2MikgLy8gPT4gLThcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWkluepjVxyXG4gICAqL1xyXG4gIGNyb3NzKHYpIHtcclxuICAgIHJldHVybiAodGhpcy54KnYueSkgLSAodGhpcy55KnYueCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGxlbmd0aFxyXG4gICAqIHRoaXMg44Gu5aSn44GN44GV44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAobWVtbykgbWFnbml0dWRlIOOBo+OBpuWQjeWJjeOBruaWueOBjOiJr+OBhOOBi+OCgi4g5qSc6KiO5LitLlxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLmxlbmd0aCgpOyAvLyA9PiA1XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruWkp+OBjeOBlVxyXG4gICAqL1xyXG4gIGxlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54KnRoaXMueCArIHRoaXMueSp0aGlzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGxlbmd0aFNxdWFyZWRcclxuICAgKiB0aGlzIOOBruWkp+OBjeOBleOBruiHquS5l+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQyMg44Gu5ZCN5YmN44KS5byV55So77yIb3IgbGVuZ3RoU3F1YXJlIG9yIGxlbmd0aFNxcnTvvIlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5sZW5ndGhTcXVhcmVkKCk7IC8vID0+IDI1XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruWkp+OBjeOBleOBruiHquS5l1xyXG4gICAqL1xyXG4gIGxlbmd0aFNxdWFyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy54KnRoaXMueCArIHRoaXMueSp0aGlzLnk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VcclxuICAgKiB0aGlzIOOBqCBvdGhlciDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHYxLmRpc3RhbmNlKHYyKTsgLy8gPT4gNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMueCuemWk+OBrui3nembolxyXG4gICAqL1xyXG4gIGRpc3RhbmNlKHYpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KHRoaXMueC12LngsIDIpICsgTWF0aC5wb3codGhpcy55LXYueSwgMikgKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVNxdWFyZWRcclxuICAgKiB0aGlzIOOBqCBvdGhlciDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHYxLmRpc3RhbmNlU3F1YXJlZCh2Mik7IC8vID0+IDI1XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSAy54K56ZaT44Gu6Led6Zui44Gu6Ieq5LmXXHJcbiAgICovXHJcbiAgZGlzdGFuY2VTcXVhcmVkKHYpIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyh0aGlzLngtdi54LCAyKSArIE1hdGgucG93KHRoaXMueS12LnksIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6KeS5bqm44GMIG1pbiDjgYvjgokgbWF4IOOBruevhOWbsu+8iOW6puWNmOS9je+8ieOBp+Wkp+OBjeOBleOBjCBsZW4g44Gu44Op44Oz44OA44Og44Gq44OZ44Kv44OI44Or44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIoKS5yYW5kb20oOTAsIDE4MCwgMSk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigtMC41LCAwLjg2Nikg44Gq44GpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbj0wXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIvpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heD0zNjBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4iumZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuPTFdIOWkp+OBjeOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g44Op44Oz44OA44Og5YyW44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgcmFuZG9tKG1pbiwgbWF4LCBsZW4pIHtcclxuICAgIHZhciBkZWdyZWUgPSBSYW5kb20ucmFuZGZsb2F0KG1pbiB8fCAwLCBtYXggfHwgMzYwKTtcclxuICAgIHZhciByYWQgPSBkZWdyZWUqTWF0aC5ERUdfVE9fUkFEO1xyXG4gICAgdmFyIGxlbiA9IGxlbiB8fCAxO1xyXG5cclxuICAgIHRoaXMueCA9IE1hdGguY29zKHJhZCkqbGVuO1xyXG4gICAgdGhpcy55ID0gTWF0aC5zaW4ocmFkKSpsZW47XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgbm9ybWFsaXplXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44KS5q2j6KaP5YyW44GX44G+44GZ44CC44GZ44Gq44KP44Gh44CBdGhpcyDjgajlkIzjgZjmlrnlkJHjgaflpKfjgY3jgZXjgYwx44Gu44OZ44Kv44OI44Or44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubm9ybWFsaXplKCk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigwLjYsIDAuOClcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5q2j6KaP5YyW44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbm9ybWFsaXplKCkge1xyXG4gICAgdGhpcy5kaXYodGhpcy5sZW5ndGgoKSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9TdHJpbmdcclxuICAgKiB0aGlzIOOCkiBKU09OIOW9ouW8j+OBp+ihqOePvuOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLnRvU3RyaW5nKCk7IC8vID0+IFwie3g6MywgeTo0fVwiXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEpTT04g5paH5a2X5YiXXHJcbiAgICovXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gXCJ7eDp7eH0sIHk6e3l9fVwiLmZvcm1hdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0RGlyZWN0aW9uXHJcbiAgICogdGhpcyDjga7jgYrjgYrjgojjgZ3jga7mlrnlkJHjgpLnpLrjgZfjgZ/mloflrZfliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5nZXREaXJlY3Rpb24oKTsgLy8gPT4gXCJ1cFwiXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IOaWueWQkeOCkuihqOOBmeaWh+Wtl+WIl++8iFwidXBcIiwgXCJyaWdodFwiLCBcImRvd25cIiwgXCJsZWZ0XCLvvIlcclxuICAgKi9cclxuICBnZXREaXJlY3Rpb24oKSB7XHJcbiAgICB2YXIgYW5nbGUgPSB0aGlzLnRvRGVncmVlKCk7XHJcbiAgICBpZiAoYW5nbGUgPCA0NSkge1xyXG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xyXG4gICAgfSBlbHNlIGlmIChhbmdsZSA8IDEzNSkge1xyXG4gICAgICByZXR1cm4gXCJkb3duXCI7XHJcbiAgICB9IGVsc2UgaWYgKGFuZ2xlIDwgMjI1KSB7XHJcbiAgICAgIHJldHVybiBcImxlZnRcIlxyXG4gICAgfSBlbHNlIGlmIChhbmdsZSA8IDMxNSkge1xyXG4gICAgICByZXR1cm4gXCJ1cFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9BbmdsZVxyXG4gICAqIHRoaXMg44GoIHgg6Lu444Go44Gu6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigtMiwgMCk7XHJcbiAgICogICAgIHYxLnRvQW5nbGUoKTsgLy8gPT4gMy4xNDE1OVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg5njgq/jg4jjg6vjga7op5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvIlcclxuICAgKi9cclxuICB0b0FuZ2xlKCkge1xyXG4gICAgdmFyIHJhZCA9IE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgcmV0dXJuIChyYWQgKyBNYXRoLlBJKjIpJShNYXRoLlBJKjIpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZyb21BbmdsZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDop5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvInjgajlpKfjgY3jgZXjgpLmjIflrprjgZfjgabjg5njgq/jg4jjg6vjgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMigpLmZyb21BbmdsZShNYXRoLlBJLzQsIDIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMS40MTQyLCAxLjQxNDIpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkIOinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8iVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuPTFdIOWkp+OBjeOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgZnJvbUFuZ2xlKHJhZCwgbGVuKSB7XHJcbiAgICBsZW4gPSBsZW4gfHwgMTtcclxuICAgIHRoaXMueCA9IE1hdGguY29zKHJhZCkqbGVuO1xyXG4gICAgdGhpcy55ID0gTWF0aC5zaW4ocmFkKSpsZW47XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0RlZ3JlZVxyXG4gICAqIHRoaXMg44GoIHgg6Lu444Go44Gu6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigtMiwgMik7XHJcbiAgICogICAgIHYxLnRvQW5nbGUoKTsgLy8gPT4gMTM1XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODmeOCr+ODiOODq+OBruinkuW6pu+8iOW6puWNmOS9je+8iVxyXG4gICAqL1xyXG4gIHRvRGVncmVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9BbmdsZSgpLnRvRGVncmVlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZnJvbURlZ3JlZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDop5LluqbvvIjluqbljZjkvY3vvInjgajlpKfjgY3jgZXjgpLmjIflrprjgZfjgabjg5njgq/jg4jjg6vjgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMigpLmZyb21EZWdyZWUoNjAsIDIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMS43MzIpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVnIOinkuW6pu+8iOW6puWNmOS9je+8iVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuPTFdIOWkp+OBjeOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgZnJvbURlZ3JlZShkZWcsIGxlbikge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuZnJvbUFuZ2xlKGRlZy50b1JhZGlhbigpLCBsZW4pO1xyXG4gICAgcmV0dXJuIHRoaXMuZnJvbUFuZ2xlKHRvUmFkaWFuLmNhbGwoZGVnKSwgbGVuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgcm90YXRlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44KS5Zue6Lui44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjEucm90YXRlKE1hdGguUEkvMik7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigtMSwgMyk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkIOinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8iVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbY2VudGVyPSgwLCAwKV0g5Zue6Lui44Gu5Lit5b+D5bqn5qiZXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDlm57ou6Llvozjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICByb3RhdGUocmFkLCBjZW50ZXIpIHtcclxuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICB2YXIgeDEgPSB0aGlzLnggLSBjZW50ZXIueDtcclxuICAgIHZhciB5MSA9IHRoaXMueSAtIGNlbnRlci55O1xyXG4gICAgdmFyIHgyID0geDEgKiBNYXRoLmNvcyhyYWQpIC0geTEgKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgdmFyIHkyID0geDEgKiBNYXRoLnNpbihyYWQpICsgeTEgKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgdGhpcy5zZXQoIGNlbnRlci54ICsgeDIsIGNlbnRlci55ICsgeTIgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWluXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjga7lkITopoHntKDjgavlr77jgZfjgIHjgojjgorlsI/jgZXjgYTmlrnjgpLopoHntKDjgajjgZnjgovmlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMywgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5taW4odjEsIHYyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAxKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDnlJ/miJDjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgbWluKGEsIGIpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgKGEueCA8IGIueCkgPyBhLnggOiBiLngsXHJcbiAgICAgIChhLnkgPCBiLnkpID8gYS55IDogYi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtYXhcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgaggdjIg44Gu5ZCE6KaB57Sg44Gr5a++44GX44CB44KI44KK5aSn44GN44GE5pa544KS6KaB57Sg44Go44GZ44KL5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubWF4KHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigzLCAyKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDnlJ/miJDjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgbWF4KGEsIGIpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgKGEueCA+IGIueCkgPyBhLnggOiBiLngsXHJcbiAgICAgIChhLnkgPiBiLnkpID8gYS55IDogYi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GrIHYyIOOCkuWKoOeul+OBl+OBn+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmFkZCh2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoMCwgMyk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Yqg566X44GX44Gf57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIGFkZChsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKGxocy54K3Jocy54LCBsaHMueStyaHMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc3ViXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdjEg44GL44KJIHYyIOOCkua4m+OBmOOBn+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog44OZ44Kv44OI44Or44GM5bqn5qiZ44KS6KGo44GZ5aC05ZCI44CBMuOBpOebruOBruW6p+aomeOBi+OCiTHjgaTnm67jga7luqfmqJnjgbjjgajlkJHjgYvjgYbjg5njgq/jg4jjg6vjgYzlvpfjgonjgozjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMywgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5zdWIodjEsIHYyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDYsIC0xKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDmuJvnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgc3ViKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIobGhzLngtcmhzLngsIGxocy55LXJocy55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtdWxcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOBruWQhOimgee0oOOBqyBuIOOCkuS5l+OBmOOBn+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5tdWwodjEsIDIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoNiwgMilcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBuIOS5l+OBmOOCi+WApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5LmX566X44GX44Gf57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIG11bCh2LCBuKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodi54Km4sIHYueSpuKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXZcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2IOOBruWQhOimgee0oOOCkiBuIOOBp+WJsuOBo+OBn+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5kaXYodjEsIDIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoMS41LCAwLjUpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbiDlibLjgovlgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOmZpOeul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaXYodiwgbikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHYueC9uLCB2Lnkvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbmVnYXRlXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjgpLlj43ou6LjgZfjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubmVnYXRlKCk7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigtMywgLTEpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWPjei7ouOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBuZWdhdGUodikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKC12LngsIC12LnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRvdFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBqCB2MiDjga7lhoXnqY3jgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMiwgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5kb3QodjEsIHYyKSAvLyA9PiAyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5YaF56mNXHJcbiAgICovXHJcbiAgc3RhdGljIGRvdChsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIGxocy54ICogcmhzLnggKyBsaHMueSAqIHJocy55O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNyb3NzXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdjEg44GoIHYyIOOBruWkluepje+8iOOCr+ODreOCueepje+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODq+OBp+OBruWkluepjeOBr+ODmeOCr+ODiOODq+OBp+OBquOBj+aVsOWApOOCkui/lOOBmeOBk+OBqOOBq+azqOaEj+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIDHjgaTnm67jga7jg5njgq/jg4jjg6vjgYwy44Gk55uu44Gu44OZ44Kv44OI44Or44KI44KK5pmC6KiI5Zue44KK44Gr44GC44KL44Go44GN44Gv5q2j44Gu5YCk44Gr44Gq44KK44CB5Y+N5pmC6KiI5Zue44KK44Gr44GC44KL44Go44GN44Gv6LKg44Gu5YCk44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5jcm9zcyh2MSwgdjIpOyAvLyA9PiAtOFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOWkluepjVxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcm9zcyhsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIChsaHMueCpyaHMueSkgLSAobGhzLnkqcmhzLngpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpc3RhbmNlXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu6Led6Zui44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5kaXN0YW5jZSh2MSwgdjIpOyAvLyA9PiA1XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMueCuemWk+OBrui3nembolxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaXN0YW5jZShsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3cobGhzLngtcmhzLngsIDIpICsgTWF0aC5wb3cobGhzLnktcmhzLnksIDIpICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpc3RhbmNlU3F1YXJlZFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBrui3nembouOBruiHquS5l+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZGlzdGFuY2VTcXVhcmVkKHYxLCB2Mik7IC8vID0+IDI1XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMueCuemWk+OBrui3nembouOBruiHquS5l1xyXG4gICAqL1xyXG4gIHN0YXRpYyBkaXN0YW5jZVNxdWFyZWQobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyhsaHMueC1yaHMueCwgMikgKyBNYXRoLnBvdyhsaHMueS1yaHMueSwgMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1hbmhhdHRhbkRpc3RhbmNlXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga4y54K56ZaT44Gu44Oe44Oz44OP44OD44K/44Oz6Led6Zui77yI6Lu444Gr5bmz6KGM44Gr6YCy44KA44Go44GN44Gu5pyA55+t6Led6Zui77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5tYW5oYXR0YW5EaXN0YW5jZSh2MSwgdjIpOyAvLyA9PiA3XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMueCuemWk+OBruODnuODs+ODj+ODg+OCv+ODs+i3nembolxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYW5oYXR0YW5EaXN0YW5jZShsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKGxocy54LXJocy54KSArIE1hdGguYWJzKGxocy55LXJocy55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBub3JtYWxcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBruOAgXYyIOOBi+OCiSB2MSDjgavlkJHjgYvjgYbjg5njgq/jg4jjg6vjgavlr77jgZnjgovms5Xnt5rjg5njgq/jg4jjg6vjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm5vcm1hbCh2MSwgdjIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoNCwgLTMpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg5bqn5qiZ44KS6KGo44GZ44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5rOV57ea44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG5vcm1hbChhLCBiKSB7XHJcbiAgICB2YXIgdGVtcCA9IFZlY3RvcjIuc3ViKGEsIGIpO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigtdGVtcC55LCB0ZW1wLngpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByZWZsZWN0XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjgpLlo4Hjgbjjga7lhaXlsITjg5njgq/jg4jjg6vjgajjgZfjgabjgIHlo4Hjgavlj43lsITjgZfjgZ/pmpvjga7jg5njgq/jg4jjg6vvvIjlj43lsITjg5njgq/jg4jjg6vvvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOWjgeOBruWQkeOBjeOBr+azlee3muODmeOCr+ODiOODqyBub3JtYWwg44Gr44KI44Gj44Gm6KGo44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCAzKTtcclxuICAgKiAgICAgbm9ybWFsID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0xLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLnJlZmxlY3QodjEsIG5vcm1hbCk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigyLCA1KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg5YWl5bCE44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG5vcm1hbCDlo4Hjga7ms5Xnt5rjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWPjeWwhOODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyByZWZsZWN0KHYsIG5vcm1hbCkge1xyXG4gICAgdmFyIGxlbiA9IFZlY3RvcjIuZG90KHYsIG5vcm1hbCk7XHJcbiAgICB2YXIgdGVtcD0gVmVjdG9yMi5tdWwobm9ybWFsLCAyKmxlbik7XHJcbiAgICBcclxuICAgIHJldHVybiBWZWN0b3IyLnN1Yih2LCB0ZW1wKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB3YWxsXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjgpLlo4Hjgbjjga7lhaXlsITjg5njgq/jg4jjg6vjgajjgZfjgabjgIHlo4Hjgavmsr/jgaPjgZ/jg5njgq/jg4jjg6vvvIjlo4HjgZrjgorjgq/jg4jjg6vvvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOWjgeOBruWQkeOBjeOBr+azlee3muODmeOCr+ODiOODqyBub3JtYWwg44Gr44KI44Gj44Gm6KGo44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCAzKTtcclxuICAgKiAgICAgbm9ybWFsID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0xLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLndhbGwodjEsIG5vcm1hbCk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg5YWl5bCE44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG5vcm1hbCDlo4Hjga7ms5Xnt5rjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWjgeOBmuOCiuODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyB3YWxsKHYsIG5vcm1hbCkge1xyXG4gICAgdmFyIGxlbiA9IFZlY3RvcjIuZG90KHYsIG5vcm1hbCk7XHJcbiAgICB2YXIgdGVtcD0gVmVjdG9yMi5tdWwobm9ybWFsLCBsZW4pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gVmVjdG9yMi5zdWIodiwgdGVtcCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbGVycFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5aqS5LuL5aSJ5pWwIHQg44Gn57ea5b2i6KOc6ZaT44GX44G+44GZ44CCXHJcbiAgICogdD0wLjUg44GnIHYxIOOBqCB2MiDjga7kuK3plpPjg5njgq/jg4jjg6vjgpLmsYLjgoHjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmxlcnAodjEsIHYyLCAwLjUpOyAvLyA9PiAoMi41LCA0KVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubGVycCh2MSwgdjIsIDApOyAvLyA9PiAoMSwgMilcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmxlcnAodjEsIHYyLCAxKTsgLy8gPT4gKDQsIDYpXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge051bWJlcn0gdCDlqpLku4vlpInmlbBcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOe3muW9ouijnOmWk+OBrue1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBsZXJwKGEsIGIsIHQpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgYS54ICsgKGIueC1hLngpKnQsXHJcbiAgICAgIGEueSArIChiLnktYS55KSp0XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNsZXJwXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIOijnOmWk++8iOacquWun+ijhe+8iVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzbGVycChsaHMsIHJocywgdCkge1xyXG4gICAgICAvLyBUT0RPOlxyXG4gICAgICAvLyBjb3MuLi5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZG9tXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIOinkuW6puOBjCBtaW4g44GL44KJIG1heCDjga7nr4Tlm7LvvIjluqbljZjkvY3vvInjgaflpKfjgY3jgZXjgYwgbGVuIOOBruODqeODs+ODgOODoOOBquODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLnJhbmRvbSg5MCwgMTgwLCAxKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKC0wLjUsIDAuODY2KSDjgarjgalcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPTBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4i+mZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWF4PTM2MF0g6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Gu5LiK6ZmQ5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW49MV0g5aSn44GN44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDnlJ/miJDjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuIHN0YXRpYyByYW5kb20obWluLCBtYXgsIGxlbikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKCkucmFuZG9tKG1pbiwgbWF4KS5tdWwobGVufHwxKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBaRVJPIOOCvOODreODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuWkVSTyA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBMRUZUIOW3puaWueWQkeOBruWNmOS9jeODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuTEVGVCA9IG5ldyBWZWN0b3IyKC0xLCAwKTtcclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gUklHSFQg5Y+z5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5SSUdIVD0gbmV3IFZlY3RvcjIoMSwgMCk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IFVQIOS4iuaWueWQkeOBruWNmOS9jeODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuVVAgICA9IG5ldyBWZWN0b3IyKDAsIC0xKTtcclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gRE9XTiDkuIvmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLkRPV04gPSBuZXcgVmVjdG9yMigwLCAxKTtcblxuLy8gaW1wb3J0IHsgUmVjdCB9IGZyb20gXCIuL3JlY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5DaXJjbGVcclxuICogIyDlhobpoJjln5/jgpLooajjgZnjgq/jg6njgrlcclxuICog44Kt44Oj44Oz44OQ44K55LiK44Gu5YaG6aCY5Z+f44KS5omx44GG44Kv44Op44K544Gn44GZ44CCXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgQ2lyY2xlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHhcclxuICAgKiDlhobjga7kuK3lv4Pjga4geCDluqfmqJlcclxuICAgKi9cclxuICAvLyB4OiAwLFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB5XHJcbiAgICog5YaG44Gu5Lit5b+D44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgLy8geTogMCxcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gcmFkaXVzXHJcbiAgICog5YaG44Gu5Y2K5b6EXHJcbiAgICovXHJcbiAgLy8gcmFkaXVzOiAzMixcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbml0XHJcbiAgICog5YaG6aCY5Z+f44Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMiwgNjQsIDEyOCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDlhobjga7kuK3lv4Pjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDlhobjga7kuK3lv4Pjga4geSDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIOWNiuW+hFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uUmVjdH0g5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMzI7XHJcbiAgICB0aGlzLnNldCh4LCB5LCByYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITlgKTjgpLlho3oqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMyLCA2NCwgMTI4KTtcclxuICAgKiAgICAgY2lyY2xlLnNldCgxMDAsIDIwMCwgMzIpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5YaG44KS5Zuy44GG55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5YaG44KS5Zuy44GG55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1cyDljYrlvoRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLkNpcmNsZX0g5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgc2V0KHgsIHksIHJhZGl1cykge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZVRvXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOWGhumgmOWfn+OCkuW6p+aomSAoeCwgeSkg44Gr56e75YuV44GX44G+44GZ44CCKHgsIHkpIOOBr+WGhuOBruS4reW/g+OCkuihqOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzAwLCAzMDAsIDQwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDI2MFxyXG4gICAqICAgICBjaXJjbGUubW92ZVRvKDEwMCwgMTAwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDYwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5XlhYjjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5XlhYjjga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZUJ5XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOWGhumgmOWfn+OCkiAoeCwgeSkg44Gg44GR56e75YuV44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMDAsIDMwMCwgNDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gMjYwXHJcbiAgICogICAgIGNpcmNsZS5tb3ZlQnkoMTAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gNDYwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5Xph4/jga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5Xph4/jga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy54ICs9IHg7XHJcbiAgICB0aGlzLnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjb250YWluc1xyXG4gICAqIOW6p+aomSAoeCwgeSkg44GM5YaG6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMDAsIDMwMCwgMTAwKTtcclxuICAgKiAgICAgY2lyY2xlLmNvbnRhaW5zKDM1MCwgMzUwKTsgLy8gPT4gIHRydWVcclxuICAgKiAgICAgY2lyY2xlLmNvbnRhaW5zKDM1MCwgNDAwKTsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOWIpOWumuOBmeOCi+WvvuixoeOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOWIpOWumuOBmeOCi+WvvuixoeOBriB5IOW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOaMh+WumuOBl+OBn+W6p+aomeOBjOWGhumgmOWfn+OBruS4reOBq+WQq+OBvuOCjOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHZhciBsZW5YID0gdGhpcy54LXg7XHJcbiAgICB2YXIgbGVuWSA9IHRoaXMueS15O1xyXG4gICAgdmFyIGxlblNxdWFyZWQgPSAobGVuWCpsZW5YKSsobGVuWSpsZW5ZKTtcclxuXHJcbiAgICByZXR1cm4gbGVuU3F1YXJlZCA8PSB0aGlzLnJhZGl1cyp0aGlzLnJhZGl1cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoNTAsIDEwMCwgNDApO1xyXG4gICAqICAgICBjaXJjbGUyID0gY2lyY2xlLmNsb25lKCk7XHJcbiAgICogICAgIGNpcmNsZTIueCA9PSBjaXJjbGUueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/lhobpoJjln59cclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgQ2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvUmVjdFxyXG4gICAqIOWGhuOBq+WkluaOpeOBmeOCi+ato+aWueW9ouOCkuihqOOBmeefqeW9oumgmOWfn+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoNTAsIDEwMCwgNDApO1xyXG4gICAqICAgICByZWN0ID0gY2lyY2xlLnRvUmVjdCgpO1xyXG4gICAqICAgICByZWN0Lng7IC8vID0+IDEwXHJcbiAgICogICAgIHJlY3QueTsgLy8gPT4gNjBcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gODBcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf55+p5b2i6aCY5Z+fXHJcbiAgICovXHJcbiAgdG9SZWN0KCkge1xyXG4gICAgLy8g5b6q55Kw5Y+C54Wn5Zue6YG/44Gu44Gf44KB44CBUmVjdOWBtOOBp+Wumue+qVxyXG4gICAgLy8gdmFyIHNpemUgPSB0aGlzLnNpemU7XHJcbiAgICAvLyByZXR1cm4gbmV3IFJlY3QodGhpcy54IC0gdGhpcy5yYWRpdXMsIHRoaXMueSAtIHRoaXMucmFkaXVzLCBzaXplLCBzaXplKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9BcnJheVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS6KaB57Sg44Go44GZ44KL6YWN5YiX44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSg1MCwgMTAwLCA0MCk7XHJcbiAgICogICAgIHJlY3QudG9BcnJheSgpOyAvLyA9PiBbNTAsIDEwMCwgNDBdXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g55Sf5oiQ44GX44Gf6YWN5YiXXHJcbiAgICovXHJcbiAgdG9BcnJheSgpIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBsZWZ0XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55bem56uv44GL44KJ5YaG44Gu5bem56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDIwMCwgMzAwLCAxMDApO1xyXG4gICAqICAgICBjaXJjbGUubGVmdDsgLy8gPT4gMTAwXHJcbiAgICogICAgIGNpcmNsZS50b3A7IC8vID0+IDIwMFxyXG4gICAqICAgICBjaXJjbGUucmlnaHQ7IC8vID0+IDMwMFxyXG4gICAqICAgICBjaXJjbGUuYm90dG9tOyAvLyA9PiA0MDBcclxuICAgKi9cclxuICBnZXQgbGVmdCgpICAgeyByZXR1cm4gdGhpcy54IC0gdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgbGVmdCh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gdG9wXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55LiK56uv44GL44KJ5YaG44Gu5LiK56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgdG9wKCkgICB7IHJldHVybiB0aGlzLnkgLSB0aGlzLnJhZGl1czsgfVxyXG4gIHNldCB0b3AodikgIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJpZ2h0XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55Y+z56uv44GL44KJ5YaG44Gu5Y+z56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgcmlnaHQoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IHJpZ2h0KHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBib3R0b21cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIvnq6/jgYvjgonlhobjga7kuIvnq6/jgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBib3R0b20oKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IGJvdHRvbSh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gICAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHNpemVcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiDlhobjga7nm7TlvoRcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBzaXplKCkgICB7IHJldHVybiB0aGlzLnJhZGl1cyoyOyB9XHJcbiAgc2V0IHNpemUodikgIHtcclxuICAgIC8vIFRPRE86IOaknOiojuS4rVxyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uUmVjdFxyXG4gKiAjIOefqeW9oumgmOWfn+OCkuihqOOBmeOCr+ODqeOCuVxyXG4gKiDjgq3jg6Pjg7Pjg5DjgrnkuIrjga7nn6nlvaLpoJjln5/jgpLmibHjgYbjgq/jg6njgrnjgafjgZnjgIJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBSZWN0IHtcclxuXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IHhcclxuICAvLyAgKiDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAvLyAgKi9cclxuICAvLyB4OiAwLFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB5XHJcbiAgLy8gICog55+p5b2i44Gu5bem5LiK6aCC54K544GuIHkg5bqn5qiZXHJcbiAgLy8gICovXHJcbiAgLy8geTogMCxcclxuICAvLyAvKipcclxuICAvLyAgKiBAcHJvcGVydHkge051bWJlcn0gd2lkdGhcclxuICAvLyAgKiDnn6nlvaLjga7luYVcclxuICAvLyAgKi9cclxuICAvLyB3aWR0aDogMzIsXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IGhpZ2h0XHJcbiAgLy8gICog55+p5b2i44Gu6auY44GVXHJcbiAgLy8gICovXHJcbiAgLy8gaGVpZ2h0OiAzMixcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbml0XHJcbiAgICog55+p5b2i6aCY5Z+f44Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg55+p5b2i44Gu5bem5LiK6aCC54K544GuIHkg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQg6auY44GVXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5SZWN0fSDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMud2lkdGggPSAzMjtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XHJcbiAgICB0aGlzLnNldCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS5YaN6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0LnNldCgwLCAxNiwgMzIsIDY0KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOefqeW9ouOBruW3puS4iumggueCueOBriB5IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IOmrmOOBlVxyXG4gICAqL1xyXG4gIHNldCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlVG9cclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44KS5bqn5qiZICh4LCB5KSDjgavnp7vli5XjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICogICAgIHJlY3QuY2VudGVyWDsgLy8gPT4gMjRcclxuICAgKiAgICAgcmVjdC5tb3ZlVG8oMCwgMCk7XHJcbiAgICogICAgIHJlY3QuY2VudGVyWDsgLy8gPT4gMTZcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLleWFiOOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLleWFiOOBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtb3ZlQnlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44KSICh4LCB5KSDjgaDjgZHnp7vli5XjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoOCwgMTYsIDMyLCA2NCk7XHJcbiAgICogICAgIHJlY3QubW92ZUJ5KDEwLCAtMTApO1xyXG4gICAqICAgICByZWN0Lng7IC8vID0+IDE4XHJcbiAgICogICAgIHJlY3QueTsgLy8gPT4gNlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg56e75YuV6YeP44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg56e75YuV6YeP44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgbW92ZUJ5KHgsIHkpIHtcclxuICAgIHRoaXMueCArPSB4O1xyXG4gICAgdGhpcy55ICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0U2l6c2VcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44Gu5bmF44Go6auY44GV44KS5aSJ5pu044GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0LnNldFNpemUoMTAsIDIwKTtcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gMTBcclxuICAgKiAgICAgcmVjdC5oZWlnaHQ7IC8vID0+IDIwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGgg5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCDpq5jjgZVcclxuICAgKi9cclxuICBzZXRTaXplKHcsIGgpIHtcclxuICAgIHRoaXMud2lkdGggPSB3O1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHBhZGRpbmdcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog55+p5b2i6aCY5Z+f44Gu5Lit44Gr44OR44OH44Kj44Oz44Kw6aCY5Z+f44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDnn6nlvaLpoJjln5/oh6rkvZPjga7jgrXjgqTjgrrjga/jg5Hjg4fjgqPjg7PjgrDpoJjln5/jga7liIbjgaDjgZHlsI/jgZXjgY/jgarjgorjgb7jgZnjgIIgIFxyXG4gICAqIOW5heOBruaMh+WumuaWueazleOBryBDU1Mg44GuIHBhZGRpbmcg5oyH5a6a44Go5ZCM44GY44KI44GG44Gr5pmC6KiI5Zue44KK44Gn44GZ44CCICBcclxuICAgKiDlvJXmlbDjgYwx44Gk44Gu5aC05ZCI44Gv5LiK5LiL5bem5Y+z44Gu5YCk44CB5byV5pWw44GMMuOBpOOBruWgtOWQiOOBr+S4iuS4i+OBqOW3puWPs+OBruWApOOAgeW8leaVsOOBjO+8k+OBpOOBruWgtOWQiOOBr+S4iuOAgeW3puWPs+OAgeS4i+OBruWApOOBqOino+mHiOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg1MCwgMTAwLCAxNTAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QucGFkZGluZygxMCk7XHJcbiAgICogICAgIHJlY3QueDsgLy8gPT4gNjBcclxuICAgKiAgICAgcmVjdC55OyAvLyA9PiAxMTBcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gMTMwXHJcbiAgICogICAgIHJlY3QuaGVpZ2h0OyAvLyA9PiAxODBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3Ag5LiK6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IOWPs+i+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20g5LiL6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQg5bem6L6644Gu44OR44OH44Kj44Oz44Kw5bmFXHJcbiAgICovXHJcbiAgcGFkZGluZyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcclxuICAgIC8vIGNzcyDjga4gcGFkZGluZyDjgavlkIjjgo/jgZvjgabmmYLoqIjlm57jgorjgavjg5Hjg6njg6Hjg7zjgr/oqr/mlbRcclxuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdG9wID0gcmlnaHQgPSBib3R0b20gPSBsZWZ0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgdG9wICAgICA9IGJvdHRvbSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICByaWdodCAgID0gbGVmdCAgID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdG9wICAgICA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICByaWdodCAgID0gbGVmdCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICBib3R0b20gID0gYXJndW1lbnRzWzJdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnggKz0gbGVmdDtcclxuICAgIHRoaXMueSArPSB0b3A7XHJcbiAgICB0aGlzLndpZHRoIC09IGxlZnQrcmlnaHQ7XHJcbiAgICB0aGlzLmhlaWdodC09IHRvcCArYm90dG9tO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY29udGFpbnNcclxuICAgKiDluqfmqJkgKHgsIHkpIOOBjCDnn6nlvaLpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoNTAsIDEwMCwgMTUwLCAyMDApO1xyXG4gICAqICAgICByZWN0LmNvbnRhaW5zKDM1LCA2OCk7IC8vID0+ICB0cnVlXHJcbiAgICogICAgIHJlY3QuY29udGFpbnMoMjAwLCA2OCk7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDliKTlrprjgZnjgovlr77osaHjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDliKTlrprjgZnjgovlr77osaHjga4geSDluqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmjIflrprjgZfjgZ/luqfmqJnjgYznn6nlvaLpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5sZWZ0IDw9IHggJiYgeCA8PSB0aGlzLnJpZ2h0ICYmIHRoaXMudG9wIDw9IHkgJiYgeSA8PSB0aGlzLmJvdHRvbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg1MCwgMTAwLCAxNTAsIDIwMCk7XHJcbiAgICogICAgIHJlY3QyID0gcmVjdC5jbG9uZSgpO1xyXG4gICAqICAgICByZWN0Mi54ID09IHJlY3QueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/nn6nlvaLpoJjln59cclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0NpcmNsZVxyXG4gICAqIOefqeW9oumgmOWfn+WGheOBq+WPjuOBvuOCi+acgOWkp+OBruWGhumgmOWfn+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgzMiwgNjQsIDEwMCwgMjAwKTtcclxuICAgKiAgICAgY2lyY2xlID0gcmVjdC50b0NpcmNsZSgpO1xyXG4gICAqICAgICBjaXJjbGUueDsgLy8gPT4gODJcclxuICAgKiAgICAgY2lyY2xlLnk7IC8vID0+IDE2NFxyXG4gICAqICAgICBjaXJjbGUucmFkaXVzOyAvLyA9PiA1MFxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/lhobpoJjln59cclxuICAgKi9cclxuICB0b0NpcmNsZSgpIHtcclxuICAgIHZhciByYWRpdXMgPSAoKHRoaXMud2lkdGggPCB0aGlzLmhlaWdodCkgPyB0aGlzLndpZHRoIDogdGhpcy5oZWlnaHQpLzI7XHJcbiAgICByZXR1cm4gbmV3IENpcmNsZSh0aGlzLmNlbnRlclgsIHRoaXMuY2VudGVyWSwgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9BcnJheVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS6KaB57Sg44Go44GZ44KL6YWN5YiX44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDMyLCA2NCwgMTAwLCAyMDApO1xyXG4gICAqICAgICByZWN0LnRvQXJyYXkoKTsgLy8gPT4gWzMyLCA2NCwgMTAwLCAyMDBdXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g55Sf5oiQ44GX44Gf6YWN5YiXXHJcbiAgICovXHJcbiAgdG9BcnJheSgpIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBsZWZ0XHJcbiAgICog44Kt44Oj44Oz44OQ44K55bem56uv44GL44KJ55+p5b2i6aCY5Z+f44Gu5bem6L6644G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiBsZWZ0IOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBruW5he+8iHdpZHRo77yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDMyLCA2NCwgMTAwLCAyMDApO1xyXG4gICAqICAgICByZWN0LmxlZnQ7IC8vID0+IDMyXHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDEwMFxyXG4gICAqICAgICByZWN0LnJpZ2h0OyAvLyA9PiAxMzJcclxuICAgKiAgICAgXHJcbiAgICogICAgIHJlY3QubGVmdCA9IDQyO1xyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiA5MFxyXG4gICAqL1xyXG4gIGdldCBsZWZ0KCkgICB7IHJldHVybiB0aGlzLng7IH1cclxuICBzZXQgbGVmdCh2KSAgeyB0aGlzLndpZHRoIC09IHYtdGhpcy54OyB0aGlzLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3BcclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIrnq6/jgYvjgonnn6nlvaLpoJjln5/jga7kuIrovrrjgb7jgafjga7kvY3nva5cclxuICAgKlxyXG4gICAqIHRvcCDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7pq5jjgZXvvIhoZWlnaHTvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKi9cclxuICBnZXQgdG9wKCkgICB7IHJldHVybiB0aGlzLnk7IH1cclxuICBzZXQgdG9wKHYpICB7IHRoaXMuaGVpZ2h0IC09IHYtdGhpcy55OyB0aGlzLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByaWdodFxyXG4gICAqIOOCreODo+ODs+ODkOOCueW3puerr+OBi+OCieefqeW9oumgmOWfn+OBruWPs+i+uuOBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICogcmlnaHQg44KS5aSJ5pu044GZ44KL44Go55+p5b2i6aCY5Z+f44Gu5bmF77yId2lkdGjvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKi9cclxuICBnZXQgcmlnaHQoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7IH1cclxuICBzZXQgcmlnaHQodikgIHsgdGhpcy53aWR0aCArPSB2LXRoaXMucmlnaHQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGJvdHRvbVxyXG4gICAqIOOCreODo+ODs+ODkOOCueS4iuerr+OBi+OCieefqeW9oumgmOWfn+OBruS4i+i+uuOBvuOBp+OBruS9jee9rlxyXG4gICAqXHJcbiAgICogYm90dG9tIOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBrumrmOOBle+8iGhlaWdodO+8ieOBjOiHquWLleeahOOBq+iqv+aVtOOBleOCjOOBvuOBmeOAglxyXG4gICAqL1xyXG4gIGdldCBib3R0b20oKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0OyB9XHJcbiAgc2V0IGJvdHRvbSh2KSAgeyB0aGlzLmhlaWdodCArPSB2LXRoaXMuYm90dG9tOyB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGNlbnRlclhcclxuICAgKiDnn6nlvaLpoJjln5/jga4geCDluqfmqJlcclxuICAgKlxyXG4gICAqIOePvuaZgueCueOBp+OBr+iqreOBv+WPluOCiuWwgueUqOOBp+OBmeOAglxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJYKCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cclxuICBzZXQgY2VudGVyWCh2KSAge1xyXG4gICAgLy8gVE9ETzog5qSc6KiO5LitXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjZW50ZXJZXHJcbiAgICog55+p5b2i6aCY5Z+f44GuIHkg5bqn5qiZXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgY2VudGVyWSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxyXG4gIHNldCBjZW50ZXJZKHYpICB7XHJcbiAgICAvLyBUT0RPOiDmpJzoqI7kuK1cclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2lyY2xlLnRvUmVjdFxyXG4gKiDlvqrnkrDlj4LnhafjgpLlm57pgb/jgZnjgovjgZ/jgoHjgIHjgZPjgZPjgaflrprnvqlcclxuICovXHJcbkNpcmNsZS5wcm90b3R5cGUudG9SZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHNpemUgPSB0aGlzLnNpemU7XHJcbiAgcmV0dXJuIG5ldyBSZWN0KHRoaXMueCAtIHRoaXMucmFkaXVzLCB0aGlzLnkgLSB0aGlzLnJhZGl1cywgc2l6ZSwgc2l6ZSk7XHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5NYXRyaXgzM1xyXG4gKiAjIOihjOWIl+OCr+ODqeOCuVxyXG4gKiAzeDPjga7ooYzliJfjgpLooajjgZnjgq/jg6njgrnjgafjgZnjgIJcclxuICogXHJcbiAqIDxwcmU+XHJcbiAqIHwgbTAwIG0wMSBtMDIgfFxyXG4gKiB8IG0xMCBtMTEgbTEyIHxcclxuICogfCBtMjAgbTIxIG0yMiB8XHJcbiAqIDwvcHJlPlxyXG4gKi9cclxuY2xhc3MgTWF0cml4MzMge1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGluaXRcclxuICAgKiDjg57jg4jjg6rjg4Pjgq/jgrnjgq/jg6njgrnjga7jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafjgZnjgIJcclxuICAgKlxyXG4gICAqIOW8leaVsOOBryBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyIOOBrumghuOBq+aMh+WumuOBl+OBvuOBmeOAglxyXG4gICAqIOW8leaVsOOBjDnlgIvjgavmuoDjgZ/jgarjgYTloLTlkIjjga/ljZjkvY3ooYzliJfjgpLnlJ/miJDjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygpO1xyXG4gICAqICAgICBtYXQxLm0wMCArIG1hdDIubTAwOyAvLyA9PiAyXHJcbiAgICogICAgIG1hdDEubTAxIC0gbWF0Mi5tMDE7IC8vID0+IDJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyLi4ufSBtMDAsIG0wMSwuLi4g5ZCE6KaB57Sg44Gu5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6KGM5YiX44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA5KSB7XHJcbiAgICAgIHRoaXMuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5pZGVudGl0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzZXRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjga7lgKTjgpLlho3oqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygpO1xyXG4gICAqICAgICBtYXQyLnNldCgxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MS50b1N0cmluZygpID09IG1hdDIudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXIuLi59IG0wMCwgbTAxLC4uLiDlkITopoHntKDjga7lgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDooYzliJfjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBzZXQobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xyXG4gICAgdGhpcy5tMDAgPSBtMDA7IHRoaXMubTAxID0gbTAxOyB0aGlzLm0wMiA9IG0wMjtcclxuICAgIHRoaXMubTEwID0gbTEwOyB0aGlzLm0xMSA9IG0xMTsgdGhpcy5tMTIgPSBtMTI7XHJcbiAgICB0aGlzLm0yMCA9IG0yMDsgdGhpcy5tMjEgPSBtMjE7IHRoaXMubTIyID0gbTIyO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpZGVudGl0eVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOCkuWNmOS9jeihjOWIl+OBq+OBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBwaGluYS5nZW9tLk1hdHJpeDMzKCk7XHJcbiAgICogICAgIG1hdDEuaWRlbnRpdHkoKS50b1N0cmluZygpID09IG1hdDIudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g5Y2Y5L2N6KGM5YiXXHJcbiAgICovXHJcbiAgaWRlbnRpdHkoKSB7XHJcbiAgICB0aGlzLm0wMCA9IDE7IHRoaXMubTAxID0gMDsgdGhpcy5tMDIgPSAwO1xyXG4gICAgdGhpcy5tMTAgPSAwOyB0aGlzLm0xMSA9IDE7IHRoaXMubTEyID0gMDtcclxuICAgIHRoaXMubTIwID0gMDsgdGhpcy5tMjEgPSAwOyB0aGlzLm0yMiA9IDE7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY2xvbmVcclxuICAgKiB0aGlzIOOBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDIgPSBtYXQxLmNsb25lKCk7XHJcbiAgICogICAgIG1hdDEudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKiAgICAgbWF0MSA9PSBtYXQyOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6KGM5YiX44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IE1hdHJpeDMzKFxyXG4gICAgICB0aGlzLm0wMCwgdGhpcy5tMDEsIHRoaXMubTAyLFxyXG4gICAgICB0aGlzLm0xMCwgdGhpcy5tMTEsIHRoaXMubTEyLFxyXG4gICAgICB0aGlzLm0yMCwgdGhpcy5tMjEsIHRoaXMubTIyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkZXRlcm1pbmFudFxyXG4gICAqIOihjOWIl+W8j+OCkui/lOOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTIsIDAsIC0xLCAzLCAxLCA0LCAyLCAxKTtcclxuICAgKiAgICAgbWF0MS5kZXRlcm1pbmFudCgpOyAvLyA9PiAtMTBcclxuICAgKiAgICAgbWF0MS5pZGVudGl0eSgpLmRldGVybWluYW50KCk7IC8vID0+IDFcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g6KGM5YiX5byPXHJcbiAgICovXHJcbiAgZGV0ZXJtaW5hbnQoKSB7XHJcbiAgICB2YXIgbTAwID0gdGhpcy5tMDA7IHZhciBtMDEgPSB0aGlzLm0wMTsgdmFyIG0wMiA9IHRoaXMubTAyO1xyXG4gICAgdmFyIG0xMCA9IHRoaXMubTEwOyB2YXIgbTExID0gdGhpcy5tMTE7IHZhciBtMTIgPSB0aGlzLm0xMjtcclxuICAgIHZhciBtMjAgPSB0aGlzLm0yMDsgdmFyIG0yMSA9IHRoaXMubTIxOyB2YXIgbTIyID0gdGhpcy5tMjI7XHJcbiAgICBcclxuICAgIHJldHVybiBtMDAqbTExKm0yMiArIG0xMCptMjEqbTAyICsgbTAxKm0xMiptMjAgLSBtMDIqbTExKm0yMCAtIG0wMSptMTAqbTIyIC0gbTEyKm0yMSptMDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRyYW5zcG9zZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDou6Lnva7ooYzliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCA0LCA3LCAyLCA1LCA4LCAzLCA2LCA5KTtcclxuICAgKiAgICAgbWF0MS50cmFuc3Bvc2UoKS50b1N0cmluZygpID09IG1hdDIudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6Lui572u6KGM5YiXXHJcbiAgICovXHJcbiAgdHJhbnNwb3NlKCkge1xyXG4gICAgdmFyIHN3YXAgPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgIHZhciB0ZW1wID0gdGhpc1thXTtcclxuICAgICAgdGhpc1thXSA9IHRoaXNbYl07XHJcbiAgICAgIHRoaXNbYl0gPSB0ZW1wO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHN3YXAoJ20wMScsICdtMTAnKTtcclxuICAgIHN3YXAoJ20wMicsICdtMjAnKTtcclxuICAgIHN3YXAoJ20xMicsICdtMjEnKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGludmVydFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDpgIbooYzliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0xLCAxLCAtMSwgNCwgLTIsIDEsIDEsIDEpO1xyXG4gICAqICAgICBtYXQyID0gbWF0MS5jbG9uZSgpLmludmVydCgpO1xyXG4gICAqICAgICBtYXQzID0gbWF0MS5jbG9uZSgpLm11bHRpcGx5KG1hdDIpO1xyXG4gICAqICAgICBtYXQzLnRvU3RyaW5nKCkgPT0gcGhpbmEuZ2VvbS5NYXRyaXgzMy5JREVOVElUWS50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDpgIbooYzliJdcclxuICAgKi9cclxuICBpbnZlcnQoKSB7XHJcbiAgICB2YXIgbTAwID0gdGhpcy5tMDA7IHZhciBtMDEgPSB0aGlzLm0wMTsgdmFyIG0wMiA9IHRoaXMubTAyO1xyXG4gICAgdmFyIG0xMCA9IHRoaXMubTEwOyB2YXIgbTExID0gdGhpcy5tMTE7IHZhciBtMTIgPSB0aGlzLm0xMjtcclxuICAgIHZhciBtMjAgPSB0aGlzLm0yMDsgdmFyIG0yMSA9IHRoaXMubTIxOyB2YXIgbTIyID0gdGhpcy5tMjI7XHJcblxyXG4gICAgdmFyIGRldCA9IHRoaXMuZGV0ZXJtaW5hbnQoKTtcclxuXHJcbiAgICAvLyB8bTAwLCBtMDEsIG0wMnxcclxuICAgIC8vIHxtMTAsIG0xMSwgbTEyfFxyXG4gICAgLy8gfG0yMCwgbTIxLCBtMjJ8XHJcbiAgICB0aGlzLm0wMCA9IChtMTEqbTIyLW0xMiptMjEpL2RldDtcclxuICAgIHRoaXMubTAxID0gKG0xMCptMjItbTEyKm0yMCkvZGV0Ki0xO1xyXG4gICAgdGhpcy5tMDIgPSAobTEwKm0yMS1tMTEqbTIwKS9kZXQ7XHJcbiAgICBcclxuICAgIHRoaXMubTEwID0gKG0wMSptMjItbTAyKm0yMSkvZGV0Ki0xO1xyXG4gICAgdGhpcy5tMTEgPSAobTAwKm0yMi1tMDIqbTIwKS9kZXQ7XHJcbiAgICB0aGlzLm0xMiA9IChtMDAqbTIxLW0wMSptMjApL2RldCotMTtcclxuICAgIFxyXG4gICAgdGhpcy5tMjAgPSAobTAxKm0xMi1tMDIqbTExKS9kZXQ7XHJcbiAgICB0aGlzLm0yMSA9IChtMDAqbTEyLW0wMiptMTApL2RldCotMTtcclxuICAgIHRoaXMubTIyID0gKG0wMCptMTEtbTAxKm0xMCkvZGV0O1xyXG4gICAgXHJcbiAgICB0aGlzLnRyYW5zcG9zZSgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG11bHRpcGx5XHJcbiAgICogdGhpcyDjgasgb3RoZXIg44KS5LmX44GY44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygwLCAtMSwgMSwgLTEsIDQsIC0yLCAxLCAxLCAxKTtcclxuICAgKiAgICAgbWF0MiA9IG1hdDEuY2xvbmUoKS5pbnZlcnQoKTtcclxuICAgKiAgICAgbWF0MyA9IG1hdDEuY2xvbmUoKS5tdWx0aXBseShtYXQyKTtcclxuICAgKiAgICAgbWF0My50b1N0cmluZygpID09IHBoaW5hLmdlb20uTWF0cml4MzMuSURFTlRJVFkudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLk1hdHJpeDMzfSBvdGhlciDkuZfjgZjjgovooYzliJdcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLk1hdHJpeDMzfSDkuZfnrpfntZDmnpzjga7ooYzliJdcclxuICAgKi9cclxuICBtdWx0aXBseShtYXQpIHtcclxuICAgIHZhciB0bSA9IHRoaXMubTtcclxuICAgIHZhciBvbSA9IG1hdC5tO1xyXG5cclxuICAgIHZhciBhMDAgPSB0aGlzLm0wMCwgYTAxID0gdGhpcy5tMDEsIGEwMiA9IHRoaXMubTAyO1xyXG4gICAgdmFyIGExMCA9IHRoaXMubTEwLCBhMTEgPSB0aGlzLm0xMSwgYTEyID0gdGhpcy5tMTI7XHJcbiAgICB2YXIgYTIwID0gdGhpcy5tMjAsIGEyMSA9IHRoaXMubTIxLCBhMjIgPSB0aGlzLm0yMjtcclxuICAgIHZhciBiMDAgPSBtYXQubTAwLCBiMDEgPSBtYXQubTAxLCBiMDIgPSBtYXQubTAyO1xyXG4gICAgdmFyIGIxMCA9IG1hdC5tMTAsIGIxMSA9IG1hdC5tMTEsIGIxMiA9IG1hdC5tMTI7XHJcbiAgICB2YXIgYjIwID0gbWF0Lm0yMCwgYjIxID0gbWF0Lm0yMSwgYjIyID0gbWF0Lm0yMjtcclxuXHJcbiAgICB0aGlzLm0wMCA9IGEwMCpiMDAgKyBhMDEqYjEwICsgYTAyKmIyMDtcclxuICAgIHRoaXMubTAxID0gYTAwKmIwMSArIGEwMSpiMTEgKyBhMDIqYjIxO1xyXG4gICAgdGhpcy5tMDIgPSBhMDAqYjAyICsgYTAxKmIxMiArIGEwMipiMjI7XHJcblxyXG4gICAgdGhpcy5tMTAgPSBhMTAqYjAwICsgYTExKmIxMCArIGExMipiMjA7XHJcbiAgICB0aGlzLm0xMSA9IGExMCpiMDEgKyBhMTEqYjExICsgYTEyKmIyMTtcclxuICAgIHRoaXMubTEyID0gYTEwKmIwMiArIGExMSpiMTIgKyBhMTIqYjIyO1xyXG5cclxuICAgIHRoaXMubTIwID0gYTIwKmIwMCArIGEyMSpiMTAgKyBhMjIqYjIwO1xyXG4gICAgdGhpcy5tMjEgPSBhMjAqYjAxICsgYTIxKmIxMSArIGEyMipiMjE7XHJcbiAgICB0aGlzLm0yMiA9IGEyMCpiMDIgKyBhMjEqYjEyICsgYTIyKmIyMjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG11bHRpcGx5VmVjdG9yMlxyXG4gICAqIHRoaXMg44GrMuasoeWFg+ODmeOCr+ODiOODqyB2IOOCkuS5l+OBmOOBvuOBmeOAglxyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6vjga8gKHgsIHksIDEpIOOBqOOBl+OBpuS5l+eul+OBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0ID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygwLCAtMSwgMSwgLTEsIDQsIC0yLCAxLCAxLCAxKTtcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigyLCA0KVxyXG4gICAqICAgICBtYXQubXVsdGlwbHlWZWN0b3IyKHYpIC8vID0+IHt4OiAtMywgeTogMTJ9XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDkuZfjgZjjgovjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOS5l+eul+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIG11bHRpcGx5VmVjdG9yMih2KSB7XHJcbiAgICB2YXIgdnggPSB0aGlzLm0wMCp2LnggKyB0aGlzLm0wMSp2LnkgKyB0aGlzLm0wMjtcclxuICAgIHZhciB2eSA9IHRoaXMubTEwKnYueCArIHRoaXMubTExKnYueSArIHRoaXMubTEyO1xyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gcGhpbmEuZ2VvbS5WZWN0b3IyKHZ4LCB2eSk7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodngsIHZ5KTtcclxuICB9XHJcblxyXG4gIC8vIOihjFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Um93XHJcbiAgICogcm93IOeVquebruOBruihjOOCkumFjeWIl+OBp+i/lOOBl+OBvuOBmeOAgnJvdyDjgYwgMOOAgTHjgIEyIOOBruOBhOOBmuOCjOOBi+OBp+OBquOBkeOCjOOBsCBudWxsIOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDEuZ2V0Um93KDApOyAvLyBbMSwgMiwgM11cclxuICAgKiAgICAgbWF0MS5nZXRSb3coMSk7IC8vIFs0LCA1LCA2XVxyXG4gICAqICAgICBtYXQxLmdldFJvdyg5KTsgLy8gbnVsbFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHswLzEvMn0gcm93IOihjOeVquWPt1xyXG4gICAqIEByZXR1cm4ge051bWJlcltdfSDooYzjgpLooajjgZnphY3liJdcclxuICAgKi9cclxuICBnZXRSb3cocm93KSB7XHJcbiAgICBpZiAoIHJvdyA9PT0gMCApIHtcclxuICAgICAgcmV0dXJuIFsgdGhpcy5tMDAsIHRoaXMubTAxLCB0aGlzLm0wMiBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHJvdyA9PT0gMSApIHtcclxuICAgICAgcmV0dXJuIFsgdGhpcy5tMTAsIHRoaXMubTExLCB0aGlzLm0xMiBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHJvdyA9PT0gMiApIHtcclxuICAgICAgcmV0dXJuIFsgdGhpcy5tMjAsIHRoaXMubTIxLCB0aGlzLm0yMiBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRDb2xcclxuICAgKiBjb2wg55Wq55uu44Gu5YiX44KS6YWN5YiX44Gn6L+U44GX44G+44GZ44CCY29sIOOBjCAw44CBMeOAgTIg44Gu44GE44Ga44KM44GL44Gn44Gq44GR44KM44GwIG51bGwg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MS5nZXRDb2woMCk7IC8vIFsxLCA0LCA3XVxyXG4gICAqICAgICBtYXQxLmdldENvbCgxKTsgLy8gWzIsIDUsIDhdXHJcbiAgICogICAgIG1hdDEuZ2V0Um93KC0xKTsgLy8gbnVsbFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHswLzEvMn0gY29sIOWIl+eVquWPt1xyXG4gICAqIEByZXR1cm4ge051bWJlcltdfSDliJfjgpLooajjgZnphY3liJdcclxuICAgKi9cclxuICBnZXRDb2woY29sKSB7XHJcbiAgICBpZiAoIGNvbCA9PT0gMCApIHtcclxuICAgICAgcmV0dXJuIFsgdGhpcy5tMDAsIHRoaXMubTEwLCB0aGlzLm0yMCBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIGNvbCA9PT0gMSApIHtcclxuICAgICAgcmV0dXJuIFsgdGhpcy5tMDEsIHRoaXMubTExLCB0aGlzLm0yMSBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIGNvbCA9PT0gMiApIHtcclxuICAgICAgcmV0dXJuIFsgdGhpcy5tMDIsIHRoaXMubTEyLCB0aGlzLm0yMiBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b1N0cmluZ1xyXG4gICAqIOihjOWIl+OCkiBKU09OIOW9ouW8j+OBp+ihqOePvuOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSB2LmNsb25lKCk7XHJcbiAgICogICAgIHYyLnggPT0gdi54OyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEpTT04g5paH5a2X5YiXXHJcbiAgICovXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gXCJ8e20wMH0sIHttMDF9LCB7bTAyfXxcXG58e20xMH0sIHttMTF9LCB7bTEyfXxcXG58e20yMH0sIHttMjF9LCB7bTIyfXxcIi5mb3JtYXQodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7cGhpbmEuZ2VvbS5NYXRyaXgzM30gSURFTlRJVFkg5Y2Y5L2N6KGM5YiXXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuTWF0cml4MzMuSURFTlRJVFkgPSBuZXcgTWF0cml4MzMoKS5pZGVudGl0eSgpO1xuXG4vKipcclxuKiBAY2xhc3MgcGhpbmEuZ2VvbS5Db2xsaXNpb25cclxuKiAjIOihneeqgeWIpOWumueUqOOCr+ODqeOCuVxyXG4qIOihneeqgeWIpOWumuOBruOBn+OCgeOBruOCr+ODqeOCueOBp+OBmeOAguOBmeOBueOBpuOBruODoeOCveODg+ODieOBjOOCueOCv+ODhuOCo+ODg+OCr+ODoeOCveODg+ODieOBp+OBmeOAglxyXG4qIFxyXG4qL1xyXG5jbGFzcyBDb2xsaXNpb24ge1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RDaXJjbGVDaXJjbGVcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuOBpOOBruWGhumgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlMSA9IHBoaW5hLmdlb20uQ2lyY2xlKDEwMCwgMTAwLCAzMCk7XHJcbiAgICogICAgIGNpcmNsZTIgPSBwaGluYS5nZW9tLkNpcmNsZSgxMzAsIDE0MCwgMzApO1xyXG4gICAqIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RDaXJjbGVDaXJjbGUoY2lyY2xlMSwgY2lyY2xlMik7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZTEg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLkNpcmNsZX0gY2lyY2xlMiDlhobpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdENpcmNsZUNpcmNsZShjaXJjbGUwLCBjaXJjbGUxKSB7XHJcbiAgICB2YXIgZGlzdGFuY2VTcXVhcmVkID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmRpc3RhbmNlU3F1YXJlZChjaXJjbGUwLCBjaXJjbGUxKTtcclxuICAgIHJldHVybiBkaXN0YW5jZVNxdWFyZWQgPD0gTWF0aC5wb3coY2lyY2xlMC5yYWRpdXMgKyBjaXJjbGUxLnJhZGl1cywgMik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdFJlY3RSZWN0XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLjgaTjga7nn6nlvaLpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QxID0gcGhpbmEuZ2VvbS5SZWN0KDEwMCwgMTAwLCAzMCwgNDApO1xyXG4gICAqICAgICByZWN0MiA9IHBoaW5hLmdlb20uUmVjdCgyMDAsIDIwMCwgMTAsIDEwKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdFJlY3RSZWN0KHJlY3QxLCByZWN0Mik7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uUmVjdH0gcmVjdDEg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3QyIOefqeW9oumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOmgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0UmVjdFJlY3QocmVjdDAsIHJlY3QxKSB7XHJcbiAgICByZXR1cm4gKHJlY3QwLmxlZnQgPCByZWN0MS5yaWdodCkgJiYgKHJlY3QwLnJpZ2h0ID4gcmVjdDEubGVmdCkgJiZcclxuICAgICAgKHJlY3QwLnRvcCA8IHJlY3QxLmJvdHRvbSkgJiYgKHJlY3QwLmJvdHRvbSA+IHJlY3QxLnRvcCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdENpcmNsZVJlY3RcclxuICAgKiBAc3RhdGljXHJcbiAgICog5YaG6aCY5Z+f44Go55+p5b2i6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgxMDAsIDEwMCwgMzApO1xyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDEwMCwgMTAwLCAzMCwgNDApO1xyXG4gICAqICAgICBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0Q2lyY2xlUmVjdChjaXJjbGUsIHJlY3QpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3Qg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RDaXJjbGVSZWN0KGNpcmNsZSwgcmVjdCkge1xyXG4gICAgLy8g44G+44Ga44Gv5aSn44GN44Gq55+p5b2i44Gn5Yik5a6aKOmrmOmAn+WMlilcclxuICAgIHZhciBiaWdSZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KHJlY3QubGVmdC1jaXJjbGUucmFkaXVzLCByZWN0LnRvcC1jaXJjbGUucmFkaXVzLCByZWN0LndpZHRoK2NpcmNsZS5yYWRpdXMqMiwgcmVjdC5oZWlnaHQrY2lyY2xlLnJhZGl1cyoyKTtcclxuICAgIGlmIChiaWdSZWN0LmNvbnRhaW5zKGNpcmNsZS54LCBjaXJjbGUueSkgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gMueorumhnuOBruefqeW9ouOBqOihneeqgeWIpOWumlxyXG4gICAgdmFyIHIgPSBwaGluYS5nZW9tLlJlY3QocmVjdC5sZWZ0LWNpcmNsZS5yYWRpdXMsIHJlY3QudG9wLCByZWN0LndpZHRoK2NpcmNsZS5yYWRpdXMqMiwgcmVjdC5oZWlnaHQpO1xyXG4gICAgaWYgKHIuY29udGFpbnMoY2lyY2xlLngsIGNpcmNsZS55KSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHIuc2V0KHJlY3QubGVmdCwgcmVjdC50b3AtY2lyY2xlLnJhZGl1cywgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQrY2lyY2xlLnJhZGl1cyoyKTtcclxuICAgIGlmIChyLmNvbnRhaW5zKGNpcmNsZS54LCBjaXJjbGUueSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOWGhuOBqOefqeW9ouOBru+8lOeCueOBruWIpOWumlxyXG4gICAgdmFyIGMgPSBwaGluYS5nZW9tLkNpcmNsZShjaXJjbGUueCwgY2lyY2xlLnksIGNpcmNsZS5yYWRpdXMpO1xyXG4gICAgLy8gbGVmdCB0b3BcclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QubGVmdCwgcmVjdC50b3ApKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gcmlnaHQgdG9wXHJcbiAgICBpZiAoYy5jb250YWlucyhyZWN0LnJpZ2h0LCByZWN0LnRvcCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyByaWdodCBib3R0b21cclxuICAgIGlmIChjLmNvbnRhaW5zKHJlY3QucmlnaHQsIHJlY3QuYm90dG9tKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGxlZnQgYm90dG9tXHJcbiAgICBpZiAoYy5jb250YWlucyhyZWN0LmxlZnQsIHJlY3QuYm90dG9tKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RDaXJjbGVMaW5lXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIOWGhumgmOWfn+OBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMTAwLCAxMDAsIDIwKTtcclxuICAgKiAgICAgcDEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMCwgMCk7XHJcbiAgICogICAgIHAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMwMCwgNDAwKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdENpcmNsZUxpbmUoY2lyY2xlLCBwMSwgcDIpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAxIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMiDnt5rliIbjga7nq6/jga7luqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDlhobpoJjln5/jgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdENpcmNsZUxpbmUgKGNpcmNsZSwgcDEsIHAyKSB7XHJcbiAgICAvLyDlhYjjgavnt5rliIbnq6/jgajjga7liKTlrppcclxuICAgIGlmIChjaXJjbGUuY29udGFpbnMocDEueCwgcDEueSkgfHwgY2lyY2xlLmNvbnRhaW5zKHAyLngsIHAyLnkpKSByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIOWNiuW+hOOBrjLkuZdcclxuICAgIHZhciByMiA9IGNpcmNsZS5yYWRpdXMgKiBjaXJjbGUucmFkaXVzO1xyXG4gICAgLy8g5YaG44Gu5Lit5b+D5bqn5qiZXHJcbiAgICB2YXIgcDMgPSBwaGluYS5nZW9tLlZlY3RvcjIoY2lyY2xlLngsIGNpcmNsZS55KTtcclxuICAgIC8vIOWQhOODmeOCr+ODiOODq1xyXG4gICAgdmFyIHAxcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHAxLCBwMik7XHJcbiAgICB2YXIgcDFwMyA9IHBoaW5hLmdlb20uVmVjdG9yMi5zdWIocDEsIHAzKTtcclxuICAgIHZhciBwMnAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyLnN1YihwMiwgcDMpO1xyXG4gICAgLy8g5aSW56mNXHJcbiAgICB2YXIgY3Jvc3MgPSBwaGluYS5nZW9tLlZlY3RvcjIuY3Jvc3MocDFwMiwgcDFwMyk7XHJcbiAgICAvLyDlpJbnqY3jga7ntbblr77lgKTjga4y5LmXXHJcbiAgICB2YXIgY3Jvc3MyID0gY3Jvc3MgKiBjcm9zcztcclxuICAgIC8vIHAxcDLjga7plbfjgZXjga4y5LmXXHJcbiAgICB2YXIgbGVuZ3RoMiA9IHAxcDIubGVuZ3RoU3F1YXJlZCgpO1xyXG4gICAgLy8g5YaG44Gu5Lit5b+D44GL44KJ57ea5YiG44G+44Gn44Gu5Z6C57ea44Gu6Led6Zui44GuMuS5l1xyXG4gICAgdmFyIGQyID0gY3Jvc3MyIC8gbGVuZ3RoMjtcclxuICAgIC8vIOWGhuOBruWNiuW+hOOBrjLkuZfjgojjgorlsI/jgZXjgYTjgarjgonph43opIdcclxuICAgIGlmIChkMiA8PSByMikge1xyXG4gICAgICB2YXIgZG90MSA9IHBoaW5hLmdlb20uVmVjdG9yMi5kb3QocDFwMywgcDFwMik7XHJcbiAgICAgIHZhciBkb3QyID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmRvdChwMnAzLCBwMXAyKTtcclxuICAgICAgLy8g6YCa5bi444Gv5YaF56mN44Gu5LmX566XXHJcbiAgICAgIGlmIChkb3QxICogZG90MiA8PSAwKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0TGluZUxpbmVcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuOBpOOBrue3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqIOWPguiAg++8mmh0dHA6Ly93d3c1ZC5iaWdsb2JlLm5lLmpwL350b21veWEwMy9zaHRtbC9hbGdvcml0aG0vSW50ZXJzZWN0aW9uLmh0bVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcDEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMTAwLCAxMDApO1xyXG4gICAqICAgICBwMiA9IHBoaW5hLmdlb20uVmVjdG9yMigyMDAsIDIwMCk7XHJcbiAgICogICAgIHAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDE1MCwgMjQwKTtcclxuICAgKiAgICAgcDQgPSBwaGluYS5nZW9tLlZlY3RvcjIoMjAwLCAxMDApO1xyXG4gICAqIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHAzLCBwNCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMSDnt5rliIYx44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAyIOe3muWIhjHjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDMg57ea5YiGMuOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwNCDnt5rliIYy44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g57ea5YiGMeOBqOe3muWIhjLjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdExpbmVMaW5lIChwMSwgcDIsIHAzLCBwNCkge1xyXG4gICAgLy/lkIzkuIDvvLjvvLnou7jkuIrjgavkuZfjgaPjgabjgovloLTlkIjjga7oqqTliKTlrprlm57pgb9cclxuICAgIGlmIChwMS54ID09IHAyLnggJiYgcDEueCA9PSBwMy54ICYmIHAxLnggPT0gcDQueCkge1xyXG4gICAgICB2YXIgbWluID0gTWF0aC5taW4ocDEueSwgcDIueSk7XHJcbiAgICAgIHZhciBtYXggPSBNYXRoLm1heChwMS55LCBwMi55KTtcclxuICAgICAgaWYgKG1pbiA8PSBwMy55ICYmIHAzLnkgPD0gbWF4IHx8IG1pbiA8PSBwNC55ICYmIHA0LnkgPD0gbWF4KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHAxLnkgPT0gcDIueSAmJiBwMS55ID09IHAzLnkgJiYgcDEueSA9PSBwNC55KSB7XHJcbiAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihwMS54LCBwMi54KTtcclxuICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHAxLngsIHAyLngpO1xyXG4gICAgICBpZiAobWluIDw9IHAzLnggJiYgcDMueCA8PSBtYXggfHwgbWluIDw9IHA0LnggJiYgcDQueCA8PSBtYXgpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL+mAmuW4uOWIpOWumlxyXG4gICAgdmFyIGEgPSAocDEueCAtIHAyLngpICogKHAzLnkgLSBwMS55KSArIChwMS55IC0gcDIueSkgKiAocDEueCAtIHAzLngpO1xyXG4gICAgdmFyIGIgPSAocDEueCAtIHAyLngpICogKHA0LnkgLSBwMS55KSArIChwMS55IC0gcDIueSkgKiAocDEueCAtIHA0LngpO1xyXG4gICAgdmFyIGMgPSAocDMueCAtIHA0LngpICogKHAxLnkgLSBwMy55KSArIChwMy55IC0gcDQueSkgKiAocDMueCAtIHAxLngpO1xyXG4gICAgdmFyIGQgPSAocDMueCAtIHA0LngpICogKHAyLnkgLSBwMy55KSArIChwMy55IC0gcDQueSkgKiAocDMueCAtIHAyLngpO1xyXG4gICAgcmV0dXJuIGEgKiBiIDw9IDAgJiYgYyAqIGQgPD0gMDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0UmVjdExpbmVcclxuICAgKiBAc3RhdGljXHJcbiAgICog55+p5b2i44Go57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDEyMCwgMTMwLCA0MCwgNTApO1xyXG4gICAqICAgICBwMSA9IHBoaW5hLmdlb20uVmVjdG9yMigxMDAsIDEwMCk7XHJcbiAgICogICAgIHAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIwMCwgMjAwKTtcclxuICAgKiBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0UmVjdExpbmUocmVjdCwgcDEsIHAyKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3Qg55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAxIOe3muWIhuOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMiDnt5rliIbjga7nq6/jga7luqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDnn6nlvaLjgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdFJlY3RMaW5lIChyZWN0LCBwMSwgcDIpIHtcclxuICAgICAgLy/ljIXlkKvliKTlrpoocDHjgYzlkKvjgb7jgozjgabjgozjgbDoia/jgYTjga7jgadwMuOBruWIpOWumuOBr+OBl+OBquOBhO+8iVxyXG4gICAgICBpZiAocmVjdC5sZWZ0IDw9IHAxLnggJiYgcDEueCA8PSByZWN0LnJpZ2h0ICYmIHJlY3QudG9wIDw9IHAxLnkgJiYgcDEueSA8PSByZWN0LmJvdHRvbSApIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgLy/nn6nlvaLjga7vvJTngrlcclxuICAgICAgdmFyIHIxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QubGVmdCwgcmVjdC50b3ApOyAgICAgLy/lt6bkuIpcclxuICAgICAgdmFyIHIyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QucmlnaHQsIHJlY3QudG9wKTsgICAgLy/lj7PkuIpcclxuICAgICAgdmFyIHIzID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QucmlnaHQsIHJlY3QuYm90dG9tKTsgLy/lj7PkuItcclxuICAgICAgdmFyIHI0ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKHJlY3QubGVmdCwgcmVjdC5ib3R0b20pOyAgLy/lt6bkuItcclxuXHJcbiAgICAgIC8v55+p5b2i44Gu77yU6L6644KS44Gq44GZ57ea5YiG44Go44Gu5o6l6Kem5Yik5a6aXHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMSwgcjIpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIyLCByMykpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAocGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcjMsIHI0KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMSwgcjQpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLlZlY3RvcjNcclxuICogIyAz5qyh5YWD44OZ44Kv44OI44Or44Kv44Op44K577yI5pyq5a6f6KOF77yJXHJcbiAqIDPmrKHlhYPjga7jg5njgq/jg4jjg6vjgoTluqfmqJnjgpLooajjgZnjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFZlY3RvcjMge1xyXG5cclxuICAvKiogeOW6p+aomSAqL1xyXG4gIC8vIHg6IDAsXHJcbiAgLyoqIHnluqfmqJkgKi9cclxuICAvLyB5OiAwLFxyXG4gIC8qKiB65bqn5qiZICovXHJcbiAgLy8gejogMCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgdGhpcy56ID0geiB8fCAwO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5ncmFwaGljcy5DYW52YXNcclxuICog44Kt44Oj44Oz44OQ44K55ouh5by144Kv44Op44K5XHJcbiAqL1xyXG5jbGFzcyBDYW52YXMge1xyXG4gIC8vIGRvbUVsZW1lbnQ6IG51bGwsXHJcbiAgLy8gY2FudmFzOiBudWxsLFxyXG4gIC8vIGNvbnRleHQ6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIneacn+WMllxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgaWYgKHR5cGVvZiBjYW52YXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYW52YXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jYW52YXM7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCteOCpOOCuuOCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggICA9IHdpZHRoO1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ICA9IGhlaWdodDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZVRvU2NyZWVuKCkge1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gID0gXCJmaXhlZFwiO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUubWFyZ2luICAgID0gXCIwcHhcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBhZGRpbmcgICA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ICAgICAgPSBcIjBweFwiO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUudG9wICAgICAgID0gXCIwcHhcIjtcclxuICAgIHJldHVybiB0aGlzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBmaXRTY3JlZW4oaXNFdmVyKSB7XHJcbiAgICBpc0V2ZXIgPSBpc0V2ZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBpc0V2ZXI7XHJcblxyXG4gICAgdmFyIF9maXRGdW5jID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgICB2YXIgcyA9IGUuc3R5bGU7XHJcbiAgICAgIFxyXG4gICAgICBzLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICBzLm1hcmdpbiA9IFwiYXV0b1wiO1xyXG4gICAgICBzLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgICBzLnRvcCAgPSBcIjBweFwiO1xyXG4gICAgICBzLmJvdHRvbSA9IFwiMHB4XCI7XHJcbiAgICAgIHMucmlnaHQgPSBcIjBweFwiO1xyXG5cclxuICAgICAgdmFyIHJhdGVXaWR0aCA9IGUud2lkdGgvd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIHZhciByYXRlSGVpZ2h0PSBlLmhlaWdodC93aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHZhciByYXRlID0gZS5oZWlnaHQvZS53aWR0aDtcclxuICAgICAgXHJcbiAgICAgIGlmIChyYXRlV2lkdGggPiByYXRlSGVpZ2h0KSB7XHJcbiAgICAgICAgcy53aWR0aCAgPSBNYXRoLmZsb29yKGlubmVyV2lkdGgpK1wicHhcIjtcclxuICAgICAgICBzLmhlaWdodCA9IE1hdGguZmxvb3IoaW5uZXJXaWR0aCpyYXRlKStcInB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcy53aWR0aCAgPSBNYXRoLmZsb29yKGlubmVySGVpZ2h0L3JhdGUpK1wicHhcIjtcclxuICAgICAgICBzLmhlaWdodCA9IE1hdGguZmxvb3IoaW5uZXJIZWlnaHQpK1wicHhcIjtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgXHJcbiAgICAvLyDkuIDluqblrp/ooYzjgZfjgabjgYrjgY9cclxuICAgIF9maXRGdW5jKCk7XHJcblxyXG4gICAgLy8g44Oq44K144Kk44K65pmC44Gu44Oq44K544OK44Go44GX44Gm55m76Yyy44GX44Gm44GK44GPXHJcbiAgICBpZiAoaXNFdmVyKSB7XHJcbiAgICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgX2ZpdEZ1bmMsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCr+ODquOColxyXG4gICAqL1xyXG4gIGNsZWFyKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHggPSB4IHx8IDA7XHJcbiAgICB5ID0geSB8fCAwO1xyXG4gICAgd2lkdGggPSB3aWR0aCB8fCB0aGlzLndpZHRoO1xyXG4gICAgaGVpZ2h0PSBoZWlnaHR8fCB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsZWFyQ29sb3IoZmlsbFN0eWxlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB4ID0geCB8fCAwO1xyXG4gICAgeSA9IHkgfHwgMDtcclxuICAgIHdpZHRoID0gd2lkdGggfHwgdGhpcy53aWR0aDtcclxuICAgIGhlaWdodD0gaGVpZ2h0fHwgdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wKTsgLy8g6KGM5YiX5Yid5pyf5YyWXHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTsgICAgIC8vIOWhl+OCiuOBpOOBtuOBl+OCueOCv+OCpOODq+OCu+ODg+ODiFxyXG4gICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIOODkeOCueOCkumWi+Wniyjjg6rjgrvjg4Pjg4gpXHJcbiAgICovXHJcbiAgYmVnaW5QYXRoKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAg44OR44K544KS6ZaJ44GY44KLXHJcbiAgICovXHJcbiAgY2xvc2VQYXRoKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogIOaWsOimj+ODkeOCueeUn+aIkFxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5Hjgrnjgavov73liqBcclxuICAgKi9cclxuICBsaW5lVG8oeCwgeSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcXVhZHJhdGljQ3VydmVUbygpIHtcclxuICAgIHRoaXMuY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYmV6aWVyQ3VydmVUbygpIHtcclxuICAgIHRoaXMuY29udGV4dC5iZXppZXJDdXJ2ZVRvLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K55YaF44KS5aGX44KK44Gk44G244GZXHJcbiAgICovXHJcbiAgZmlsbCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODkeOCueS4iuOBq+ODqeOCpOODs+OCkuW8leOBj1xyXG4gICAqL1xyXG4gIHN0cm9rZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kv44Oq44OD44OXXHJcbiAgICovXHJcbiAgY2xpcCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5jbGlwKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gICAgICBcclxuICAvKipcclxuICAgKiDngrnmj4/nlLtcclxuICAgKi9cclxuICBkcmF3UG9pbnQoeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlUmVjdCh4LCB5LCAxLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODqeOCpOODs+ODkeOCueOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIGxpbmUoeDAsIHkwLCB4MSwgeTEpIHtcclxuICAgIHJldHVybiB0aGlzLm1vdmVUbyh4MCwgeTApLmxpbmVUbyh4MSwgeTEpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjg6njgqTjg7PjgpLmj4/nlLtcclxuICAgKi9cclxuICBkcmF3TGluZSh4MCwgeTAsIHgxLCB5MSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkubGluZSh4MCwgeTAsIHgxLCB5MSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg4Djg4Pjgrfjg6Xjg6njgqTjg7PjgpLmj4/nlLtcclxuICAgKi9cclxuICBkcmF3RGFzaExpbmUoeDAsIHkwLCB4MSwgeTEsIHBhdHRlcm4pIHtcclxuICAgIHZhciBwYXR0ZXJuVGFibGUgPSBudWxsO1xyXG4gICAgaWYgKHR5cGVvZihwYXR0ZXJuKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHBhdHRlcm5UYWJsZSA9IHBhdHRlcm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcGF0dGVybiA9IHBhdHRlcm4gfHwgMHhmMGYwO1xyXG4gICAgICBwYXR0ZXJuVGFibGUgPSBwYXR0ZXJuLnRvU3RyaW5nKDIpO1xyXG4gICAgfVxyXG4gICAgcGF0dGVyblRhYmxlID0gcGF0dGVyblRhYmxlLnBhZGRpbmcoMTYsICcxJyk7XHJcbiAgICBcclxuICAgIHZhciB2eCA9IHgxLXgwO1xyXG4gICAgdmFyIHZ5ID0geTEteTA7XHJcbiAgICB2YXIgbGVuID0gTWF0aC5zcXJ0KHZ4KnZ4ICsgdnkqdnkpO1xyXG4gICAgdngvPWxlbjsgdnkvPWxlbjtcclxuICAgIFxyXG4gICAgdmFyIHggPSB4MDtcclxuICAgIHZhciB5ID0geTA7XHJcbiAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyArK2kpIHtcclxuICAgICAgaWYgKHBhdHRlcm5UYWJsZVtpJTE2XSA9PSAnMScpIHtcclxuICAgICAgICB0aGlzLmRyYXdQb2ludCh4LCB5KTtcclxuICAgICAgICAvLyB0aGlzLmZpbGxSZWN0KHgsIHksIHRoaXMuY29udGV4dC5saW5lV2lkdGgsIHRoaXMuY29udGV4dC5saW5lV2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIHggKz0gdng7XHJcbiAgICAgIHkgKz0gdnk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdjAoeDAsIHkwKSwgdjEoeDEsIHkxKSDjgYvjgonop5LluqbjgpLmsYLjgoHjgabnn6LljbDjgpLmj4/nlLtcclxuICAgKiBodHRwOi8vaGFrdWhpbi5qcC9hcy9yb3RhdGlvbi5odG1sXHJcbiAgICovXHJcbiAgZHJhd0Fycm93KHgwLCB5MCwgeDEsIHkxLCBhcnJvd1JhZGl1cykge1xyXG4gICAgdmFyIHZ4ID0geDEteDA7XHJcbiAgICB2YXIgdnkgPSB5MS15MDtcclxuICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIodnksIHZ4KSoxODAvTWF0aC5QSTtcclxuICAgIFxyXG4gICAgdGhpcy5kcmF3TGluZSh4MCwgeTAsIHgxLCB5MSk7XHJcbiAgICB0aGlzLmZpbGxQb2x5Z29uKHgxLCB5MSwgYXJyb3dSYWRpdXMgfHwgNSwgMywgYW5nbGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBsaW5lc1xyXG4gICAqL1xyXG4gIGxpbmVzKCkge1xyXG4gICAgdGhpcy5tb3ZlVG8oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG4gICAgZm9yICh2YXIgaT0xLGxlbj1hcmd1bWVudHMubGVuZ3RoLzI7IGk8bGVuOyArK2kpIHtcclxuICAgICAgdGhpcy5saW5lVG8oYXJndW1lbnRzW2kqMl0sIGFyZ3VtZW50c1tpKjIrMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg6njgqTjg7Pjgrnjg4jjg63jg7zjgq/mj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VMaW5lcygpIHtcclxuICAgIHRoaXMuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmxpbmVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLnN0cm9rZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg6njgqTjg7PloZfjgorjgaTjgbbjgZfmj4/nlLtcclxuICAgKi9cclxuICBmaWxsTGluZXMoKSB7XHJcbiAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5saW5lcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5maWxsKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Zub6KeS5b2i44OR44K544KS5L2c5oiQ44GZ44KLXHJcbiAgICovXHJcbiAgcmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmNvbnRleHQucmVjdC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Zub6KeS5b2i5aGX44KK44Gk44G244GX5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbFJlY3QoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbm+inkuW9ouODqeOCpOODs+aPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZVJlY3QoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog6KeS5Li45Zub6KeS5b2i44OR44K5XHJcbiAgICovXHJcbiAgcm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xyXG4gICAgdmFyIGwgPSB4ICsgcmFkaXVzO1xyXG4gICAgdmFyIHIgPSB4ICsgd2lkdGggLSByYWRpdXM7XHJcbiAgICB2YXIgdCA9IHkgKyByYWRpdXM7XHJcbiAgICB2YXIgYiA9IHkgKyBoZWlnaHQgLSByYWRpdXM7XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICB2YXIgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY3R4Lm1vdmVUbyhsLCB5KTtcclxuICAgIGN0eC5saW5lVG8ociwgeSk7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4K3dpZHRoLCB5LCB4K3dpZHRoLCB0KTtcclxuICAgIGN0eC5saW5lVG8oeCt3aWR0aCwgYik7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4K3dpZHRoLCB5K2hlaWdodCwgciwgeStoZWlnaHQpO1xyXG4gICAgY3R4LmxpbmVUbyhsLCB5K2hlaWdodCk7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5K2hlaWdodCwgeCwgYik7XHJcbiAgICBjdHgubGluZVRvKHgsIHQpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgbCwgeSk7XHJcbiAgICAvKiovXHJcbiAgICBcclxuICAgIHRoaXMuY29udGV4dC5hcmMobCwgdCwgcmFkaXVzLCAgICAgLU1hdGguUEksIC1NYXRoLlBJKjAuNSwgZmFsc2UpOyAgLy8g5bem5LiKXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHIsIHQsIHJhZGl1cywgLU1hdGguUEkqMC41LCAgICAgICAgICAgIDAsIGZhbHNlKTsgIC8vIOWPs+S4ilxyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhyLCBiLCByYWRpdXMsICAgICAgICAgICAgMCwgIE1hdGguUEkqMC41LCBmYWxzZSk7ICAvLyDlj7PkuItcclxuICAgIHRoaXMuY29udGV4dC5hcmMobCwgYiwgcmFkaXVzLCAgTWF0aC5QSSowLjUsICAgICAgTWF0aC5QSSwgZmFsc2UpOyAgLy8g5bem5LiLXHJcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOinkuS4uOWbm+inkuW9ouWhl+OCiuOBpOOBtuOBl1xyXG4gICAqL1xyXG4gIGZpbGxSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5yb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKS5maWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDop5LkuLjlm5vop5LlvaLjgrnjg4jjg63jg7zjgq/mj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5yb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWGhuOBruODkeOCueOCkuioreWumlxyXG4gICAqL1xyXG4gIGNpcmNsZSh4LCB5LCByYWRpdXMpIHtcclxuICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDloZfjgorjgaTjgbbjgZflhobjgpLmj4/nlLtcclxuICAgKi9cclxuICBmaWxsQ2lyY2xlKHgsIHksIHJhZGl1cykge1xyXG4gICAgdmFyIGMgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgYy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIGZhbHNlKTtcclxuICAgIGMuY2xvc2VQYXRoKCk7XHJcbiAgICBjLmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrnjg4jjg63jg7zjgq/lhobjgpLmj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB2YXIgYyA9IHRoaXMuY29udGV4dDtcclxuICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICBjLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xyXG4gICAgYy5jbG9zZVBhdGgoKTtcclxuICAgIGMuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWGhuW8p+OBruODkeOCueOCkuioreWumlxyXG4gICAqL1xyXG4gIGFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWhl+OCiuOBpOOBtuOBl+WGhuW8p+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxBcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpLmZpbGwoKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K544OI44Ot44O844Kv5YaG5byn44KS5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlQXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG5cclxuICBwaWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5tb3ZlVG8oMCwgMCk7XHJcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKTtcclxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZmlsbFBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5waWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuZmlsbCgpO1xyXG4gIH1cclxuICBzdHJva2VQaWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Od44Oq44K044Oz44OR44K5XHJcbiAgICovXHJcbiAgcG9seWdvbih4LCB5LCBzaXplLCBzaWRlcywgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHZhciByYWREaXYgPSAoTWF0aC5QSSoyKS9zaWRlcztcclxuICAgIHZhciByYWRPZmZzZXQgPSAob2Zmc2V0QW5nbGUhPT11bmRlZmluZWQpID8gb2Zmc2V0QW5nbGUqTWF0aC5QSS8xODAgOiAtTWF0aC5QSS8yO1xyXG4gICAgXHJcbiAgICB0aGlzLm1vdmVUbyh4ICsgTWF0aC5jb3MocmFkT2Zmc2V0KSpzaXplLCB5ICsgTWF0aC5zaW4ocmFkT2Zmc2V0KSpzaXplKTtcclxuICAgIGZvciAodmFyIGk9MTsgaTxzaWRlczsgKytpKSB7XHJcbiAgICAgIHZhciByYWQgPSByYWREaXYqaStyYWRPZmZzZXQ7XHJcbiAgICAgIHRoaXMubGluZVRvKFxyXG4gICAgICAgIHggKyBNYXRoLmNvcyhyYWQpKnNpemUsXHJcbiAgICAgICAgeSArIE1hdGguc2luKHJhZCkqc2l6ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDjg53jg6rjgrTjg7PloZfjgorjgaTjgbbjgZdcclxuICAgKi9cclxuICBmaWxsUG9seWdvbih4LCB5LCByYWRpdXMsIHNpZGVzLCBvZmZzZXRBbmdsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucG9seWdvbih4LCB5LCByYWRpdXMsIHNpZGVzLCBvZmZzZXRBbmdsZSkuZmlsbCgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDjg53jg6rjgrTjg7Pjgrnjg4jjg63jg7zjgq/mj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VQb2x5Z29uKHgsIHksIHJhZGl1cywgc2lkZXMsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5wb2x5Z29uKHgsIHksIHJhZGl1cywgc2lkZXMsIG9mZnNldEFuZ2xlKS5zdHJva2UoKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogc3RhclxyXG4gICAqL1xyXG4gIHN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHZhciB4ID0geCB8fCAwO1xyXG4gICAgdmFyIHkgPSB5IHx8IDA7XHJcbiAgICB2YXIgcmFkaXVzID0gcmFkaXVzIHx8IDY0O1xyXG4gICAgdmFyIHNpZGVzID0gc2lkZXMgfHwgNTtcclxuICAgIHZhciBzaWRlSW5kZW50UmFkaXVzID0gcmFkaXVzICogKHNpZGVJbmRlbnQgfHwgMC4zOCk7XHJcbiAgICB2YXIgcmFkT2Zmc2V0ID0gKG9mZnNldEFuZ2xlKSA/IG9mZnNldEFuZ2xlKk1hdGguUEkvMTgwIDogLU1hdGguUEkvMjtcclxuICAgIHZhciByYWREaXYgPSAoTWF0aC5QSSoyKS9zaWRlcy8yO1xyXG5cclxuICAgIHRoaXMubW92ZVRvKFxyXG4gICAgICB4ICsgTWF0aC5jb3MocmFkT2Zmc2V0KSpyYWRpdXMsXHJcbiAgICAgIHkgKyBNYXRoLnNpbihyYWRPZmZzZXQpKnJhZGl1c1xyXG4gICAgKTtcclxuICAgIGZvciAodmFyIGk9MTsgaTxzaWRlcyoyOyArK2kpIHtcclxuICAgICAgdmFyIHJhZCA9IHJhZERpdippICsgcmFkT2Zmc2V0O1xyXG4gICAgICB2YXIgbGVuID0gKGklMikgPyBzaWRlSW5kZW50UmFkaXVzIDogcmFkaXVzO1xyXG4gICAgICB0aGlzLmxpbmVUbyhcclxuICAgICAgICB4ICsgTWF0aC5jb3MocmFkKSpsZW4sXHJcbiAgICAgICAgeSArIE1hdGguc2luKHJhZCkqbGVuXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pif44KS5aGX44KK44Gk44G244GX5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbFN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHRoaXMuYmVnaW5QYXRoKCkuc3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmmJ/jgpLjgrnjg4jjg63jg7zjgq/mj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VTdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB0aGlzLmJlZ2luUGF0aCgpLnN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpLnN0cm9rZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGhlYXJ0XHJcbiAgICovXHJcbiAgaGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkge1xyXG4gICAgdmFyIGhhbGZfcmFkaXVzID0gcmFkaXVzKjAuNTtcclxuICAgIHZhciByYWQgPSAoYW5nbGUgPT09IHVuZGVmaW5lZCkgPyBNYXRoLlBJLzQgOiBNYXRoLmRlZ1RvUmFkKGFuZ2xlKTtcclxuXHJcbiAgICAvLyDljYrlvoQgaGFsZl9yYWRpdXMg44Gu6KeS5bqmIGFuZ2xlIOS4iuOBrueCueOBqOOBruaOpee3muOCkuaxguOCgeOCi1xyXG4gICAgdmFyIHAgPSBNYXRoLmNvcyhyYWQpKmhhbGZfcmFkaXVzO1xyXG4gICAgdmFyIHEgPSBNYXRoLnNpbihyYWQpKmhhbGZfcmFkaXVzO1xyXG5cclxuICAgIC8vIOWGhuOBruaOpee3muOBruaWueeoi+W8jyBweCArIHF5ID0gcl4yIOOCiOOCiiB5ID0gKHJeMi1weCkvcVxyXG4gICAgdmFyIHgyID0gLWhhbGZfcmFkaXVzO1xyXG4gICAgdmFyIHkyID0gKGhhbGZfcmFkaXVzKmhhbGZfcmFkaXVzLXAqeDIpL3E7XHJcblxyXG4gICAgLy8g5Lit5b+D5L2N572u6Kq/5pW0XHJcbiAgICB2YXIgaGVpZ2h0ID0geTIgKyBoYWxmX3JhZGl1cztcclxuICAgIHZhciBvZmZzZXRZID0gaGFsZl9yYWRpdXMtaGVpZ2h0LzI7XHJcblxyXG4gICAgLy8g44OR44K544KS44K744OD44OIXHJcbiAgICB0aGlzLm1vdmVUbygwK3gsIHkyK3krb2Zmc2V0WSk7XHJcblxyXG4gICAgdGhpcy5hcmMoLWhhbGZfcmFkaXVzK3gsIDAreStvZmZzZXRZLCBoYWxmX3JhZGl1cywgTWF0aC5QSS1yYWQsIE1hdGguUEkqMik7XHJcbiAgICB0aGlzLmFyYyhoYWxmX3JhZGl1cyt4LCAwK3krb2Zmc2V0WSwgaGFsZl9yYWRpdXMsIE1hdGguUEksIHJhZCk7XHJcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBmaWxsIGhlYXJ0XHJcbiAgICovXHJcbiAgZmlsbEhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpLmZpbGwoKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogc3Ryb2tlIGhlYXJ0XHJcbiAgICovXHJcbiAgc3Ryb2tlSGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuaGVhcnQoeCwgeSwgcmFkaXVzLCBhbmdsZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQxNjkyMzQvdGhlLXJlbGF0aW9uLW9mLXRoZS1iZXppZXItY3VydmUtYW5kLWVsbGlwc2VcclxuICAgKi9cclxuICBlbGxpcHNlKHgsIHksIHcsIGgpIHtcclxuICAgIHZhciBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICB2YXIga2FwcGEgPSAwLjU1MjI4NDg7XHJcblxyXG4gICAgdmFyIG94ID0gKHcgLyAyKSAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCBob3Jpem9udGFsXHJcbiAgICB2YXIgb3kgPSAoaCAvIDIpICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IHZlcnRpY2FsXHJcbiAgICB2YXIgeGUgPSB4ICsgdzsgICAgICAgICAgIC8vIHgtZW5kXHJcbiAgICB2YXIgeWUgPSB5ICsgaDsgICAgICAgICAgIC8vIHktZW5kXHJcbiAgICB2YXIgeG0gPSB4ICsgdyAvIDI7ICAgICAgIC8vIHgtbWlkZGxlXHJcbiAgICB2YXIgeW0gPSB5ICsgaCAvIDI7ICAgICAgIC8vIHktbWlkZGxlXHJcblxyXG4gICAgY3R4Lm1vdmVUbyh4LCB5bSk7XHJcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4LCB5bSAtIG95LCB4bSAtIG94LCB5LCB4bSwgeSk7XHJcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4bSArIG94LCB5LCB4ZSwgeW0gLSBveSwgeGUsIHltKTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHhlLCB5bSArIG95LCB4bSArIG94LCB5ZSwgeG0sIHllKTtcclxuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHhtIC0gb3gsIHllLCB4LCB5bSArIG95LCB4LCB5bSk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBmaWxsRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpLmZpbGwoKTtcclxuICB9XHJcbiAgc3Ryb2tlRWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5lbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsbFRleHQoKSB7XHJcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxUZXh0LmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHN0cm9rZVRleHQoKSB7XHJcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVRleHQuYXBwbHkodGhpcy5fY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDnlLvlg4/jgpLmj4/nlLtcclxuICAgKi9cclxuICBkcmF3SW1hZ2UoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOihjOWIl+OCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldFRyYW5zZm9ybShtMTEsIG0xMiwgbTIxLCBtMjIsIGR4LCBkeSkge1xyXG4gICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybShtMTEsIG0xMiwgbTIxLCBtMjIsIGR4LCBkeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOihjOWIl+OCkuODquOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHJlc2V0VHJhbnNmb3JtKCkge1xyXG4gICAgdGhpcy5zZXRUcmFuc2Zvcm0oMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5Lit5b+D44Gr56e75YuVXHJcbiAgICovXHJcbiAgdHJhbnNmb3JtQ2VudGVyKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCB0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0LzIpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnp7vli5VcclxuICAgKi9cclxuICB0cmFuc2xhdGUoeCwgeSkge1xyXG4gICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm57ou6JcclxuICAgKi9cclxuICByb3RhdGUocm90YXRpb24pIHtcclxuICAgIHRoaXMuY29udGV4dC5yb3RhdGUocm90YXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCueOCseODvOODq1xyXG4gICAqL1xyXG4gIHNjYWxlKHNjYWxlWCwgc2NhbGVZKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnirbmhYvjgpLkv53lrZhcclxuICAgKi9cclxuICBzYXZlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54q25oWL44KS5b6p5YWDXHJcbiAgICovXHJcbiAgcmVzdG9yZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeUu+WDj+OBqOOBl+OBpuS/neWtmFxyXG4gICAqL1xyXG4gIHNhdmVBc0ltYWdlKG1pbWVfdHlwZSkge1xyXG4gICAgbWltZV90eXBlID0gbWltZV90eXBlIHx8IFwiaW1hZ2UvcG5nXCI7XHJcbiAgICB2YXIgZGF0YV91cmwgPSB0aGlzLmNhbnZhcy50b0RhdGFVUkwobWltZV90eXBlKTtcclxuICAgIC8vIGRhdGFfdXJsID0gZGF0YV91cmwucmVwbGFjZShtaW1lX3R5cGUsIFwiaW1hZ2Uvb2N0ZXQtc3RyZWFtXCIpO1xyXG4gICAgd2luZG93Lm9wZW4oZGF0YV91cmwsIFwic2F2ZVwiKTtcclxuICAgIFxyXG4gICAgLy8gdG9EYXRhVVJMIOOCkuS9v+OBiOOBsOS4i+iomOOBruOCiOOBhuOBquODhOODvOODq+OBjOS9nOOCjOOCi+OBi+OCgiEhXHJcbiAgICAvLyBUT0RPOiDjg5fjg63jgrDjg6njg6DjgafntbXjgpLjgYvjgYTjgabkv53lrZjjgafjgY3jgovjg4Tjg7zjg6tcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW5hVxyXG4gICAqL1xyXG4gIGdldCB3aWR0aCgpICAgeyByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7IH1cclxuICBzZXQgd2lkdGgodikgIHsgdGhpcy5jYW52YXMud2lkdGggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmrmOOBlVxyXG4gICAqL1xyXG4gIGdldCBoZWlnaHQoKSAgIHsgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDsgfVxyXG4gIHNldCBoZWlnaHQodikgIHsgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdjsgfVxyXG5cclxuICBnZXQgZmlsbFN0eWxlKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZmlsbFN0eWxlOyB9XHJcbiAgc2V0IGZpbGxTdHlsZSh2KSAgeyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdjsgfVxyXG5cclxuICBnZXQgc3Ryb2tlU3R5bGUoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZTsgfVxyXG4gIHNldCBzdHJva2VTdHlsZSh2KSAgeyB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB2OyB9XHJcblxyXG4gIGdldCBnbG9iYWxBbHBoYSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhOyB9XHJcbiAgc2V0IGdsb2JhbEFscGhhKHYpICB7IHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IHY7IH1cclxuXHJcbiAgZ2V0IGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjsgfVxyXG4gIHNldCBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24odikgIHsgdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHY7IH1cclxuXHJcbiAgZ2V0IHNoYWRvd0JsdXIoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyOyB9XHJcbiAgc2V0IHNoYWRvd0JsdXIodikgIHsgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSB2OyB9XHJcblxyXG4gIGdldCBzaGFkb3dDb2xvcigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd0NvbG9yOyB9XHJcbiAgc2V0IHNoYWRvd0NvbG9yKHYpICB7IHRoaXMuY29udGV4dC5zaGFkb3dDb2xvciA9IHY7IH1cclxuXHJcbiAgZ2V0IHNoYWRvd09mZnNldFgoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYOyB9XHJcbiAgc2V0IHNoYWRvd09mZnNldFgodikgIHsgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSB2OyB9XHJcblxyXG4gIGdldCBzaGFkb3dPZmZzZXRZKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WTsgfVxyXG4gIHNldCBzaGFkb3dPZmZzZXRZKHYpICB7IHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gdjsgfVxyXG5cclxuICBnZXQgbGluZUNhcCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmxpbmVDYXA7IH1cclxuICBzZXQgbGluZUNhcCh2KSAgeyB0aGlzLmNvbnRleHQubGluZUNhcCA9IHY7IH1cclxuXHJcbiAgZ2V0IGxpbmVKb2luKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQubGluZUpvaW47IH1cclxuICBzZXQgbGluZUpvaW4odikgIHsgdGhpcy5jb250ZXh0LmxpbmVKb2luID0gdjsgfVxyXG5cclxuICBnZXQgbWl0ZXJMaW1pdCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm1pdGVyTGltaXQ7IH1cclxuICBzZXQgbWl0ZXJMaW1pdCh2KSAgeyB0aGlzLmNvbnRleHQubWl0ZXJMaW1pdCA9IHY7IH1cclxuXHJcbiAgZ2V0IGxpbmVXaWR0aCgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmxpbmVXaWR0aDsgfVxyXG4gIHNldCBsaW5lV2lkdGgodikgIHsgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHY7IH1cclxuXHJcbiAgZ2V0IGZvbnQoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5mb250OyB9XHJcbiAgc2V0IGZvbnQodikgIHsgdGhpcy5jb250ZXh0LmZvbnQgPSB2OyB9XHJcblxyXG4gIGdldCB0ZXh0QWxpZ24oKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC50ZXh0QWxpZ247IH1cclxuICBzZXQgdGV4dEFsaWduKHYpICB7IHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSB2OyB9XHJcblxyXG4gIGdldCB0ZXh0QmFzZWxpbmUoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC50ZXh0QmFzZWxpbmU7IH1cclxuICBzZXQgdGV4dEJhc2VsaW5lKHYpICB7IHRoaXMuY29udGV4dC50ZXh0QmFzZWxpbmUgPSB2OyB9XHJcblxyXG4gIGdldCBpbWFnZVNtb290aGluZ0VuYWJsZWQoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQ7IH1cclxuICBzZXQgaW1hZ2VTbW9vdGhpbmdFbmFibGVkKHYpICB7XHJcbiAgICB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdjtcclxuICAgIHRoaXMuY29udGV4dC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSB2O1xyXG4gICAgdGhpcy5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHY7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWVhc3VyZVRleHQoZm9udCwgdGV4dCkge1xyXG4gICAgdGhpcy5fY29udGV4dC5mb250ID0gZm9udDtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUxpbmVhckdyYWRpZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQuYXBwbHkodGhpcy5fY29udGV4dCwgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVSYWRpYWxHcmFkaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50LmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQ2FudmFzLl9jb250ZXh0ID0gKGZ1bmN0aW9uKCkge1xyXG4gIGlmIChTdXBwb3J0LmNhbnZhcykge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59KSgpO1xuXG4vLyBpbXBvcnQgeyBmaXJzdCwgbGFzdCwgY2xlYXIgfSBmcm9tIFwiLi4vY29yZS9hcnJheVwiXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBJbnB1dCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIC8qKiBkb21FbGVtZW50ICovXHJcbiAgLy8gZG9tRWxlbWVudCA9IG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuZGVsdGFQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5wcmV2UG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMuX3RlbXBQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHRoaXMubWF4Q2FjaGVOdW0gPSBJbnB1dC5kZWZhdWx0cy5tYXhDYWNoZU51bTtcclxuICAgIHRoaXMubWluRGlzdGFuY2UgPSBJbnB1dC5kZWZhdWx0cy5taW5EaXN0YW5jZTtcclxuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbnB1dC5kZWZhdWx0cy5tYXhEaXN0YW5jZTtcclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuZmxpY2tWZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgIHRoaXMuZmxhZ3MgPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5sYXN0ID0gdGhpcy5ub3c7XHJcbiAgICB0aGlzLm5vdyA9IHRoaXMuZmxhZ3M7XHJcbiAgICB0aGlzLnN0YXJ0ID0gKHRoaXMubm93IF4gdGhpcy5sYXN0KSAmIHRoaXMubm93O1xyXG4gICAgdGhpcy5lbmQgICA9ICh0aGlzLm5vdyBeIHRoaXMubGFzdCkgJiB0aGlzLmxhc3Q7XHJcblxyXG4gICAgLy8g5aSJ5YyW5YCk44KS5pu05pawXHJcbiAgICB0aGlzLmRlbHRhUG9zaXRpb24ueCA9IHRoaXMuX3RlbXBQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgdGhpcy5kZWx0YVBvc2l0aW9uLnkgPSB0aGlzLl90ZW1wUG9zaXRpb24ueSAtIHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICBpZiAodGhpcy5kZWx0YVBvc2l0aW9uLnggPT09IDAgJiYgdGhpcy5kZWx0YVBvc2l0aW9uLnkgPT09IDApIHtcclxuICAgICAgdGhpcy5fbW92ZUZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9tb3ZlRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcclxuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YmN5Zue44Gu5bqn5qiZ44KS5pu05pawXHJcbiAgICB0aGlzLnByZXZQb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgIC8vIOePvuWcqOOBruS9jee9ruOCkuabtOaWsFxyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5fdGVtcFBvc2l0aW9uLngsIHRoaXMuX3RlbXBQb3NpdGlvbi55KTtcclxuXHJcbiAgICBpZiAodGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGggPiB0aGlzLm1heENhY2hlTnVtKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMuc2hpZnQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FjaGVQb3NpdGlvbnMucHVzaCh0aGlzLnBvc2l0aW9uLmNsb25lKCkpO1xyXG4gIH1cclxuXHJcbiAgX3N0YXJ0KHgsIHksIGZsYWcpIHtcclxuICAgIGZsYWcgPSAoZmxhZyAhPT0gdW5kZWZpbmVkKSA/IGZsYWcgOiAxO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0JywgeCwgeSk7XHJcbiAgICB0aGlzLl9tb3ZlKHgsIHkpO1xyXG5cclxuICAgIHRoaXMuZmxhZ3MgfD0gZmxhZztcclxuXHJcbiAgICB2YXIgeCA9IHRoaXMuX3RlbXBQb3NpdGlvbi54O1xyXG4gICAgdmFyIHkgPSB0aGlzLl90ZW1wUG9zaXRpb24ueTtcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgdGhpcy5wcmV2UG9zaXRpb24uc2V0KHgsIHkpO1xyXG5cclxuICAgIHRoaXMuZmxpY2tWZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICAvLyB0aGlzLmNhY2hlUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICB0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBfZW5kKGZsYWcpIHtcclxuICAgIGZsYWcgPSAoZmxhZyAhPT0gdW5kZWZpbmVkKSA/IGZsYWcgOiAxO1xyXG4gICAgdGhpcy5mbGFncyAmPSB+KGZsYWcpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAvLyB2YXIgZmlyc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zLmZpcnN0O1xyXG4gICAgLy8gdmFyIGxhc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zLmxhc3Q7XHJcbiAgICB2YXIgZmlyc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zWzBdO1xyXG4gICAgdmFyIGxhc3QgPSB0aGlzLmNhY2hlUG9zaXRpb25zW3RoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoLTFdO1xyXG5cclxuICAgIHZhciB2ID0gVmVjdG9yMi5zdWIobGFzdCwgZmlyc3QpO1xyXG5cclxuICAgIHZhciBsZW4gPSB2Lmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChsZW4gPiB0aGlzLm1pbkRpc3RhbmNlKSB7XHJcbiAgICAgIC8vIHZhciBub3JtYWxMZW4gPSBsZW4uY2xhbXAodGhpcy5taW5EaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSk7XHJcbiAgICAgIHZhciBub3JtYWxMZW4gPSBjbGFtcChsZW4sIHRoaXMubWluRGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UpO1xyXG4gICAgICB2LmRpdihsZW4pLm11bChub3JtYWxMZW4pO1xyXG4gICAgICB0aGlzLmZsaWNrVmVsb2NpdHkuc2V0KHYueCwgdi55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLmNhY2hlUG9zaXRpb25zLmNsZWFyKCk7XHJcbiAgICB0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvLyDjgrnjgrHjg7zjg6vjgpLogIPmha5cclxuICBfbW92ZSh4LCB5KSB7XHJcbiAgICB0aGlzLl90ZW1wUG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLl90ZW1wUG9zaXRpb24ueSA9IHk7XHJcblxyXG4gICAgLy8gYWRqdXN0IHNjYWxlXHJcbiAgICB2YXIgZWxtID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgdmFyIHJlY3QgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAocmVjdC53aWR0aCkge1xyXG4gICAgICB0aGlzLl90ZW1wUG9zaXRpb24ueCAqPSBlbG0ud2lkdGggLyByZWN0LndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuX3RlbXBQb3NpdGlvbi55ICo9IGVsbS5oZWlnaHQgLyByZWN0LmhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB4XHJcbiAgICogeOW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB4KCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi54OyB9XHJcbiAgc2V0IHgodikgeyB0aGlzLnBvc2l0aW9uLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB5XHJcbiAgICogeeW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCB5KCkgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi55OyB9XHJcbiAgc2V0IHkodikgeyB0aGlzLnBvc2l0aW9uLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBkeFxyXG4gICAqIGR45YCkXHJcbiAgICovXHJcbiAgZ2V0IGR4KCkgeyByZXR1cm4gdGhpcy5kZWx0YVBvc2l0aW9uLng7IH1cclxuICBzZXQgZHgodikgeyB0aGlzLmRlbHRhUG9zaXRpb24ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGR5XHJcbiAgICogZHnlgKRcclxuICAgKi9cclxuICBnZXQgZHkoKSB7IHJldHVybiB0aGlzLmRlbHRhUG9zaXRpb24ueTsgfVxyXG4gIHNldCBkeSh2KSB7IHRoaXMuZGVsdGFQb3NpdGlvbi55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgZnhcclxuICAgKiBmeOWApFxyXG4gICAqL1xyXG4gIGdldCBmeCgpIHsgcmV0dXJuIHRoaXMuZmxpY2tWZWxvY2l0eS54OyB9XHJcbiAgc2V0IGZ4KHYpIHsgdGhpcy5mbGlja1ZlbG9jaXR5LnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBmeVxyXG4gICAqIGZ55YCkXHJcbiAgICovXHJcbiAgZ2V0IGZ5KCkgeyByZXR1cm4gdGhpcy5mbGlja1ZlbG9jaXR5Lnk7IH1cclxuICBzZXQgZnkodikgeyB0aGlzLmZsaWNrVmVsb2NpdHkueSA9IHY7IH1cclxuXHJcbn1cclxuXHJcbklucHV0LmRlZmF1bHRzID0ge1xyXG4gIG1heENhY2hlTnVtOiAzLFxyXG4gIG1pbkRpc3RhbmNlOiAxMCxcclxuICBtYXhEaXN0YW5jZTogMTAwLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LktleWJvYXJkXHJcbiAqIEBleHRlbmRzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqL1xyXG5jbGFzcyBLZXlib2FyZCBleHRlbmRzIElucHV0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5rZXkgPSB7fTtcclxuICAgIHRoaXMucHJlc3MgID0ge307XHJcbiAgICB0aGlzLmRvd24gICA9IHt9O1xyXG4gICAgdGhpcy51cCAgICAgPSB7fTtcclxuICAgIHRoaXMubGFzdCAgID0ge307XHJcblxyXG4gICAgdGhpcy5fa2V5ZG93biA9IG51bGw7XHJcbiAgICB0aGlzLl9rZXl1cCA9IG51bGw7XHJcbiAgICB0aGlzLl9rZXlwcmVzcyA9IG51bGw7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYua2V5W2Uua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICBzZWxmLl9rZXlkb3duID0gZS5rZXlDb2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLmtleVtlLmtleUNvZGVdID0gZmFsc2U7XHJcbiAgICAgIHNlbGYuX2tleXVwID0gZS5rZXlDb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX2tleXByZXNzID0gZS5rZXlDb2RlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmg4XloLHmm7TmlrDlh6bnkIZcclxuICAgKiDjg57jgqTjg5Xjg6zjg7zjg6DlkbzjgpPjgafkuIvjgZXjgYQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBUT0RPOiDkuIDmi6zjg5Pjg4Pjg4jmvJTnrpfjgafooYzjgYbjgojjgYbkv67mraPjgZnjgotcclxuICAgIGZvciAodmFyIGsgaW4gdGhpcy5rZXkpIHtcclxuICAgICAgdGhpcy5sYXN0W2tdICAgID0gdGhpcy5wcmVzc1trXTtcclxuICAgICAgdGhpcy5wcmVzc1trXSAgID0gdGhpcy5rZXlba107XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmRvd25ba10gPSAodGhpcy5wcmVzc1trXSBeIHRoaXMubGFzdFtrXSkgJiB0aGlzLnByZXNzW2tdO1xyXG4gICAgICB0aGlzLnVwW2tdID0gKHRoaXMucHJlc3Nba10gXiB0aGlzLmxhc3Rba10pICYgdGhpcy5sYXN0W2tdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9rZXlkb3duKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2tleWRvd24nLCB7IGtleUNvZGU6IHRoaXMuX2tleWRvd24gfSk7XHJcbiAgICAgIHRoaXMuX2tleWRvd24gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2tleXVwKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2tleXVwJywgeyBrZXlDb2RlOiB0aGlzLl9rZXl1cCB9KTtcclxuICAgICAgdGhpcy5fa2V5dXAgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2tleXByZXNzKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2tleXByZXNzJywgeyBrZXlDb2RlOiB0aGlzLl9rZXlwcmVzcyB9KTtcclxuICAgICAgdGhpcy5fa2V5cHJlc3MgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkuaKvOOBl+OBpuOBhOOCi+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqIEBwYXJhbSAgIHtOdW1iZXIvU3RyaW5nfSBrZXkga2V5Q29kZSBvciBrZXlOYW1lXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICovXHJcbiAgZ2V0S2V5KGtleSkge1xyXG4gICAgaWYgKHR5cGVvZihrZXkpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISF0aGlzLnByZXNzW2tleV0gPT09IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkuaKvOOBl+OBn+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqIEBwYXJhbSAgIHtOdW1iZXIvU3RyaW5nfSBrZXkga2V5Q29kZSBvciBrZXlOYW1lXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICovXHJcbiAgZ2V0S2V5RG93bihrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kb3duW2tleV0gPT0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Kt44O844KS6Zui44GX44Gf44GL44KS44OB44Kn44OD44KvXHJcbiAgICogQHBhcmFtICAge051bWJlci9TdHJpbmd9IGtleSBrZXlDb2RlIG9yIGtleU5hbWVcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gICDjg4Hjgqfjg4Pjgq/ntZDmnpxcclxuICAgKi9cclxuICBnZXRLZXlVcChrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51cFtrZXldID09IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOBruaWueWQkeOCkiBBbmdsZShEZWdyZWUpIOOBp+WPluW+l1xyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOinkuW6pihEZWdyZWUpXHJcbiAgICovXHJcbiAgZ2V0S2V5QW5nbGUoKSB7XHJcbiAgICB2YXIgYW5nbGUgPSBudWxsO1xyXG4gICAgdmFyIGFycm93Qml0ID1cclxuICAgICAgKHRoaXMuZ2V0S2V5KFwibGVmdFwiKSAgIDw8IDMpIHwgLy8gMTAwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoXCJ1cFwiKSAgICAgPDwgMikgfCAvLyAwMTAwXHJcbiAgICAgICh0aGlzLmdldEtleShcInJpZ2h0XCIpICA8PCAxKSB8IC8vIDAwMTBcclxuICAgICAgKHRoaXMuZ2V0S2V5KFwiZG93blwiKSk7ICAgICAgICAgLy8gMDAwMVxyXG4gICAgXHJcbiAgICBpZiAoYXJyb3dCaXQgIT09IDAgJiYgS2V5Ym9hcmQuQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFLmhhc093blByb3BlcnR5KGFycm93Qml0KSkge1xyXG4gICAgICBhbmdsZSA9IEtleWJvYXJkLkFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRVthcnJvd0JpdF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBhbmdsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOBruaKvOOBl+OBpuOBhOOCi+WQkeOBjeOCkuWPluW+l1xyXG4gICAqIOato+imj+WMluOBleOCjOOBpuOBhOOCi1xyXG4gICAqL1xyXG4gIGdldEtleURpcmVjdGlvbigpIHtcclxuICAgIHZhciBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRLZXkoXCJsZWZ0XCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmdldEtleShcInJpZ2h0XCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi54ID0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldEtleShcInVwXCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmdldEtleShcImRvd25cIikpIHtcclxuICAgICAgZGlyZWN0aW9uLnkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24ueCAmJiBkaXJlY3Rpb24ueSkge1xyXG4gICAgICBkaXJlY3Rpb24uZGl2KE1hdGguU1FSVDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOBrueKtuaFi+OCkuioreWumuOBmeOCi1xyXG4gICAqL1xyXG4gIHNldEtleShrZXksIGZsYWcpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGtleSA9IEtleWJvYXJkLktFWV9DT0RFW2tleV07XHJcbiAgICB9XHJcbiAgICB0aGlzLmtleVtrZXldID0gZmxhZztcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLlhajjgabpm6LjgZfjgZ/jgZPjgajjgavjgZnjgotcclxuICAgKi9cclxuICBjbGVhcktleSgpIHtcclxuICAgIHRoaXMua2V5ID0ge307XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBlbnVtIEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRVxyXG4gKiDmlrnlkJHjga7jgqLjg7PjgrDjg6sganNkdWNr44Gn44Gv5pWw5a2X44KS44OX44Ot44OR44OG44Kj44Gr5oyH5a6a44Gn44GN44Gq44GE77yfXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5LZXlib2FyZC5BUlJPV19CSVRfVE9fQU5HTEVfVEFCTEUgPSB7XHJcbiAgLyogQHByb3BlcnR5IOS4iyAqL1xyXG4gIDB4MDE6IDI3MCxcclxuICAvKiBAcHJvcGVydHkg5Y+zICovXHJcbiAgMHgwMjogICAwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIogKi9cclxuICAweDA0OiAgOTAsXHJcbiAgLyogQHByb3BlcnR5IOW3piAqL1xyXG4gIDB4MDg6IDE4MCxcclxuXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iiAqL1xyXG4gIDB4MDY6ICA0NSxcclxuICAvKiBAcHJvcGVydHkg5Y+z5LiLICovXHJcbiAgMHgwMzogMzE1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIogKi9cclxuICAweDBjOiAxMzUsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4iyAqL1xyXG4gIDB4MDk6IDIyNSxcclxuXHJcbiAgLy8g5LiJ5pa55ZCR5ZCM5pmC5oq844GX5a++5b+cXHJcbiAgLy8g5oOz5a6a5aSW44Gu5pON5L2c44Gg44GM5a++5b+c44GX44Go44GE44Gf44G744GG44GM54Sh6ZujXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iuW3piAqL1xyXG4gIDB4MGU6ICA5MCxcclxuICAvKiBAcHJvcGVydHkg5LiK5bem5LiLICovXHJcbiAgMHgwZDogMTgwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIvlj7MgKi9cclxuICAweDBiOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOS4i+WPs+S4iiAqL1xyXG4gIDB4MDc6ICAgMCxcclxufTtcclxuXHJcbi8qXHJcbiAqIEBzdGF0aWNcclxuICogQGVudW0gS0VZX0NPREVcclxuICog44Kt44O855Wq5Y+3XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5LZXlib2FyZC5LRVlfQ09ERSA9IHtcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImJhY2tzcGFjZVwiIDogOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInRhYlwiICAgICAgIDogOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVudGVyXCIgICAgIDogMTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJyZXR1cm5cIiAgICA6IDEzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic2hpZnRcIiAgICAgOiAxNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImN0cmxcIiAgICAgIDogMTcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJhbHRcIiAgICAgICA6IDE4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGF1c2VcIiAgICAgOiAxOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNhcHNsb2NrXCIgIDogMjAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlc2NhcGVcIiAgICA6IDI3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGFnZXVwXCIgICAgOiAzMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBhZ2Vkb3duXCIgIDogMzQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlbmRcIiAgICAgICA6IDM1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaG9tZVwiICAgICAgOiAzNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImxlZnRcIiAgICAgIDogMzcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ1cFwiICAgICAgICA6IDM4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicmlnaHRcIiAgICAgOiAzOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRvd25cIiAgICAgIDogNDAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJpbnNlcnRcIiAgICA6IDQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZGVsZXRlXCIgICAgOiA0NixcclxuICBcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjBcIiA6IDQ4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiMVwiIDogNDksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIyXCIgOiA1MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjNcIiA6IDUxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiNFwiIDogNTIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI1XCIgOiA1MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjZcIiA6IDU0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiN1wiIDogNTUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI4XCIgOiA1NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjlcIiA6IDU3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFxyXG4gIFwiYVwiIDogNjUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJBXCIgOiA2NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImJcIiA6IDY2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiQlwiIDogNjYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjXCIgOiA2NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkNcIiA6IDY3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZFwiIDogNjgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJEXCIgOiA2OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImVcIiA6IDY5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiRVwiIDogNjksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmXCIgOiA3MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkZcIiA6IDcwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZ1wiIDogNzEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJHXCIgOiA3MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImhcIiA6IDcyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiSFwiIDogNzIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJpXCIgOiA3MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIklcIiA6IDczLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwialwiIDogNzQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJKXCIgOiA3NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImtcIiA6IDc1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiS1wiIDogNzUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJsXCIgOiA3NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkxcIiA6IDc2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibVwiIDogNzcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJNXCIgOiA3NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm5cIiA6IDc4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiTlwiIDogNzgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJvXCIgOiA3OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIk9cIiA6IDc5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicFwiIDogODAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJQXCIgOiA4MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInFcIiA6IDgxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiUVwiIDogODEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJyXCIgOiA4MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlJcIiA6IDgyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic1wiIDogODMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJTXCIgOiA4MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInRcIiA6IDg0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiVFwiIDogODQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ1XCIgOiA4NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlVcIiA6IDg1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidlwiIDogODYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJWXCIgOiA4NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIndcIiA6IDg3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiV1wiIDogODcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ4XCIgOiA4OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlhcIiA6IDg4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwieVwiIDogODksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJZXCIgOiA4OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInpcIiA6IDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiWlwiIDogOTAsXHJcbiAgXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQwXCIgOiA5NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDFcIiA6IDk3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkMlwiIDogOTgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQzXCIgOiA5OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDRcIiA6IDEwMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDVcIiA6IDEwMSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDZcIiA6IDEwMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDdcIiA6IDEwMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDhcIiA6IDEwNCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDlcIiA6IDEwNSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm11bHRpcGx5XCIgICAgICA6IDEwNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImFkZFwiICAgICAgICAgICA6IDEwNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInN1YnRyYWN0XCIgICAgICA6IDEwOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRlY2ltYWxwb2ludFwiICA6IDExMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRpdmlkZVwiICAgICAgICA6IDExMSxcclxuXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMVwiICAgIDogMTEyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjJcIiAgICA6IDExMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYzXCIgICAgOiAxMTQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmNFwiICAgIDogMTE1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjVcIiAgICA6IDExNixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY2XCIgICAgOiAxMTcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmN1wiICAgIDogMTE4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjhcIiAgICA6IDExOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY5XCIgICAgOiAxMjAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMTBcIiAgIDogMTIxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjExXCIgICA6IDEyMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYxMlwiICAgOiAxMjMsXHJcbiAgXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1sb2NrXCIgICA6IDE0NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNjcm9sbGxvY2tcIjogMTQ1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwic2VtaWNvbG9uXCIgOiAxODYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlcXVhbHNpZ25cIiA6IDE4NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNvbW1hXCIgICAgIDogMTg4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZGFzaFwiICAgICAgOiAxODksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwZXJpb2RcIiAgICA6IDE5MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImZvcndhcmQgc2xhc2hcIiA6IDE5MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIi9cIjogMTkxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZ3JhdmUgYWNjZW50XCIgIDogMTkyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwib3BlbiBicmFja2V0XCIgIDogMjE5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYmFjayBzbGFzaFwiICAgIDogMjIwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY2xvc2UgYnJhY2tldFwiICA6IDIyMSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNpbmdsZSBxdW90ZVwiICA6IDIyMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNwYWNlXCIgICAgICAgICA6IDMyXHJcblxyXG59O1xuXG4vKipcclxuICogTW91c2VFdmVudC9Ub3VjaOaLoeW8tVxyXG4gKiBAbWV0aG9kICAgIHBvaW50WFxyXG4gKiDjg57jgqbjgrnjga5Y5bqn5qiZLlxyXG4gKi9cclxudmFyIHBvaW50WCA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1vdXNlRXZlbnQvVG91Y2jmi6HlvLVcclxuICogQG1ldGhvZCAgICBwb2ludFhcclxuICog44Oe44Km44K544GuWOW6p+aomS5cclxuICovXHJcbnZhciBwb2ludFkgPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvdWNoRXZlbnTmi6HlvLVcclxuICogQG1ldGhvZCAgICBwb2ludFhcclxuICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4gKi9cclxudmFyIHRvdWNoUG9pbnRYID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0bS5nbG9iYWwuc2Nyb2xsWDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVG91Y2hFdmVudOaLoeW8tVxyXG4gKiBAbWV0aG9kICAgIHBvaW50WVxyXG4gKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbiAqL1xyXG52YXIgdG91Y2hQb2ludFkgPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0bS5nbG9iYWwuc2Nyb2xsWTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuLy8gOyhmdW5jdGlvbigpIHtcclxuXHJcbiAgLy8gaWYgKCFwaGluYS5nbG9iYWwuRXZlbnQpIHJldHVybiA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjbGFzcyBnbG9iYWwuRXZlbnRcclxuICAgKiDml6LlrZjjga5FdmVudOOCquODluOCuOOCp+OCr+ODiOaLoeW8tVxyXG4gICAqL1xyXG4gICAgXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQG1ldGhvZCBzdG9wXHJcbiAgLy8gICog44Kk44OZ44Oz44OI44Gu44OH44OV44Kp44Or44OI5Yem55CGICYg5Lyd6YGU44KS5q2i44KB44KLXHJcbiAgLy8gICovXHJcbiAgLy8gRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuICAvLyAgIC8vIOOCpOODmeODs+ODiOOCreODo+ODs+OCu+ODq1xyXG4gIC8vICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgLy8g44Kk44OZ44Oz44OI5Lyd6YGU44KS5q2i44KB44KLXHJcbiAgLy8gICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIC8vIH07XHJcblxyXG4vLyB9KSgpO1xyXG5cclxuXHJcbi8vIChmdW5jdGlvbigpIHtcclxuXHJcbi8vICAgaWYgKCFwaGluYS5nbG9iYWwuTW91c2VFdmVudCkgcmV0dXJuIDtcclxuXHJcbi8vICAgLyoqXHJcbi8vICAgICogQGNsYXNzIGdsb2JhbC5Nb3VzZUV2ZW50XHJcbi8vICAgICogTW91c2VFdmVudCDjgq/jg6njgrlcclxuLy8gICAgKi9cclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WFxyXG4vLyAgICAqIOODnuOCpuOCueOBrljluqfmqJkuXHJcbi8vICAgICovXHJcbi8vICAgTW91c2VFdmVudC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRYXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgcmV0dXJuIHRoaXMuY2xpZW50WCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAvLyByZXR1cm4gdGhpcy5wYWdlWCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB3aW5kb3cuc2Nyb2xsWDtcclxuLy8gICB9KTtcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WVxyXG4vLyAgICAqIOODnuOCpuOCueOBrlnluqfmqJkuXHJcbi8vICAgICovXHJcbi8vICAgTW91c2VFdmVudC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRZXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgcmV0dXJuIHRoaXMuY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuLy8gICAgIC8vIHJldHVybiB0aGlzLnBhZ2VZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gd2luZG93LnNjcm9sbFk7XHJcbi8vICAgfSk7XHJcbiAgICBcclxuLy8gfSkoKTtcclxuXHJcblxyXG4vLyAoZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuLy8gICBpZiAoIXBoaW5hLmdsb2JhbC5Ub3VjaEV2ZW50KSByZXR1cm4gO1xyXG4gIFxyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBjbGFzcyBnbG9iYWwuVG91Y2hFdmVudFxyXG4vLyAgICAqIFRvdWNoRXZlbnQg44Kv44Op44K5XHJcbi8vICAgICovXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFhcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2hFdmVudC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRYXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICByZXR1cm4gdGhpcy50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgICAvLyByZXR1cm4gdGhpcy50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHRtLmdsb2JhbC5zY3JvbGxYO1xyXG4vLyAgIH0pO1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRZXHJcbi8vICAgICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4vLyAgICAqL1xyXG4vLyAgIFRvdWNoRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WVwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4vLyAgICAgICAvLyByZXR1cm4gdGhpcy50b3VjaGVzWzBdLnBhZ2VZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG0uZ2xvYmFsLnNjcm9sbFk7XHJcbi8vICAgfSk7ICBcclxuICAgIFxyXG4vLyB9KSgpO1xyXG5cclxuXHJcbi8vIChmdW5jdGlvbigpIHtcclxuICAgIFxyXG4vLyAgIGlmICghcGhpbmEuZ2xvYmFsLlRvdWNoKSByZXR1cm4gO1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBjbGFzcyBnbG9iYWwuVG91Y2hcclxuLy8gICAgKiBUb3VjaEV2ZW50IOOCr+ODqeOCuVxyXG4vLyAgICAqL1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRYXHJcbi8vICAgICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4vLyAgICAqL1xyXG4vLyAgIFRvdWNoLnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFhcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WVxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRZXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4vLyAgIH0pO1xyXG4gICAgXHJcbi8vIH0pKCk7XG5cbnZhciBCVVRUT05fTUFQO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5Nb3VzZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5pbnB1dC5JbnB1dFxyXG4gKi9cclxuY2xhc3MgTW91c2UgZXh0ZW5kcyBJbnB1dCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuaWQgPSAwO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX3N0YXJ0KHBvaW50WC5nZXQuY2FsbChlKSwgcG9pbnRZLmdldC5jYWxsKGUpLCAxPDxlLmJ1dHRvbik7XHJcbiAgICAgIC8vIHNlbGYuX3N0YXJ0KGUucG9pbnRYLCBlLnBvaW50WSwgMTw8ZS5idXR0b24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX2VuZCgxPDxlLmJ1dHRvbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX21vdmUocG9pbnRYLmdldC5jYWxsKGUpLCBwb2ludFkuZ2V0LmNhbGwoZSkpO1xyXG4gICAgICAvLyBzZWxmLl9tb3ZlKGUucG9pbnRYLCBlLnBvaW50WSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg57jgqbjgrnjgYzjgq3jg6Pjg7Pjg5DjgrnopoHntKDjga7lpJbjgavlh7rjgZ/loLTlkIjjga7lr77lv5xcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpICB7XHJcbiAgICAgIHNlbGYuX2VuZCgxKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgYnV0dG9uID0gQlVUVE9OX01BUFtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKHRoaXMubm93ICYgYnV0dG9uKSAhPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44OA44Km44Oz5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0QnV0dG9uRG93bihidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgYnV0dG9uID0gQlVUVE9OX01BUFtidXR0b25dO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodGhpcy5zdGFydCAmIGJ1dHRvbikgIT0gMDtcclxuICB9XHJcbiAgICAgIFxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OCouODg+ODl+WPluW+l1xyXG4gICAqL1xyXG4gIGdldEJ1dHRvblVwKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgYnV0dG9uID0gQlVUVE9OX01BUFtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKHRoaXMuZW5kICYgYnV0dG9uKSAhPSAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKiBAc3RhdGljIEBwcm9wZXJ0eSAqL1xyXG5Nb3VzZS5CVVRUT05fTEVGVCA9IDB4MTtcclxuLyoqIEBzdGF0aWMgQHByb3BlcnR5ICovXHJcbk1vdXNlLkJVVFRPTl9NSURETEUgPSAweDI7XHJcbi8qKiBAc3RhdGljIEBwcm9wZXJ0eSAqL1xyXG5Nb3VzZS5CVVRUT05fUklHSFQgPSAweDQ7XHJcblxyXG5CVVRUT05fTUFQID0ge1xyXG4gIFwibGVmdFwiICA6IE1vdXNlLkJVVFRPTl9MRUZULFxyXG4gIFwibWlkZGxlXCI6IE1vdXNlLkJVVFRPTl9NSURETEUsXHJcbiAgXCJyaWdodFwiIDogTW91c2UuQlVUVE9OX1JJR0hUXHJcbn07XHJcblxyXG5Nb3VzZS5wcm90b3R5cGUuZ2V0UG9pbnRpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZ2V0QnV0dG9uKFwibGVmdFwiKTsgfTtcclxuTW91c2UucHJvdG90eXBlLmdldFBvaW50aW5nU3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZ2V0QnV0dG9uRG93bihcImxlZnRcIik7IH07XHJcbk1vdXNlLnByb3RvdHlwZS5nZXRQb2ludGluZ0VuZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRCdXR0b25VcChcImxlZnRcIik7IH07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuVG91Y2hcclxuICogQGV4dGVuZHMgcGhpbmEuaW5wdXQuSW5wdXRcclxuICovXHJcbmNsYXNzIFRvdWNoIGV4dGVuZHMgSW5wdXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBpc011bHRpKSB7XHJcbiAgICBzdXBlcihkb21FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmlkID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaXNNdWx0aSA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9zdGFydCh0b3VjaFBvaW50WC5nZXQuY2FsbChlKSwgdG91Y2hQb2ludFkuZ2V0LmNhbGwoZSksIHRydWUpO1xyXG4gICAgICAvLyBzZWxmLl9zdGFydChlLnBvaW50WCwgZS5wb2ludFksIHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9lbmQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fbW92ZSh0b3VjaFBvaW50WC5nZXQuY2FsbChlKSwgdG91Y2hQb2ludFkuZ2V0LmNhbGwoZSkpO1xyXG4gICAgICAvLyBzZWxmLl9tb3ZlKGUucG9pbnRYLCBlLnBvaW50WSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCv+ODg+ODgeOBl+OBpuOBhOOCi+OBi+OCkuWIpOWumlxyXG4gICAqL1xyXG4gIGdldFRvdWNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm93ICE9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCv+ODg+ODgemWi+Wni+aZguOBqyB0cnVlXHJcbiAgICovXHJcbiAgZ2V0VG91Y2hTdGFydCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0ICE9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCv+ODg+ODgee1guS6huaZguOBqyB0cnVlXHJcbiAgICovXHJcbiAgZ2V0VG91Y2hFbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmQgIT0gMDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZFxyXG4gKiDjg53jgqTjg7Pjg4bjgqPjg7PjgrDnirbmhYvlj5blvpcobW91c2Ug44Go44Gu5beu55Ww5a++562WKVxyXG4gKi9cclxuVG91Y2gucHJvdG90eXBlLmdldFBvaW50aW5nICAgICAgICA9IFRvdWNoLnByb3RvdHlwZS5nZXRUb3VjaDtcclxuLyoqXHJcbiAqIEBtZXRob2RcclxuICog44Od44Kk44Oz44OG44Kj44Oz44Kw44KS6ZaL5aeL44GX44Gf44GL44KS5Y+W5b6XKG1vdXNlIOOBqOOBruW3rueVsOWvvuetlilcclxuICovXHJcblRvdWNoLnByb3RvdHlwZS5nZXRQb2ludGluZ1N0YXJ0ICAgPSBUb3VjaC5wcm90b3R5cGUuZ2V0VG91Y2hTdGFydDtcclxuLyoqXHJcbiAqIEBtZXRob2RcclxuICog44Od44Kk44Oz44OG44Kj44Oz44Kw44KS57WC5LqG44GX44Gf44GL44KS5Y+W5b6XKG1vdXNlIOOBqOOBruW3rueVsOWvvuetlilcclxuICovXHJcblRvdWNoLnByb3RvdHlwZS5nZXRQb2ludGluZ0VuZCAgICAgPSBUb3VjaC5wcm90b3R5cGUuZ2V0VG91Y2hFbmQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5Ub3VjaExpc3RcclxuICovXHJcbmNsYXNzIFRvdWNoTGlzdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b3VjaGVzID0gW107XHJcbiAgICB2YXIgdG91Y2hNYXAgPSB0aGlzLnRvdWNoTWFwID0ge307XHJcblxyXG4gICAgLy8gMzJiaXQg5ZGo5pyf44GnSUTjgpLjg6vjg7zjg5fjgZXjgZvjgotcclxuICAgIHRoaXMuX2lkID0gbmV3IFVpbnQzMkFycmF5KDEpO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBlYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgdG91Y2ggPSBzZWxmLmdldEVtcHR5KCk7XHJcbiAgICAgICAgdG91Y2hNYXBbdC5pZGVudGlmaWVyXSA9IHRvdWNoO1xyXG4gICAgICAgIHRvdWNoLl9zdGFydChwb2ludFguZ2V0LmNhbGwodCksIHBvaW50WS5nZXQuY2FsbCh0KSk7XHJcbiAgICAgICAgLy8gdG91Y2guX3N0YXJ0KHQucG9pbnRYLCB0LnBvaW50WSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciBpZCA9IHQuaWRlbnRpZmllcjtcclxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaE1hcFtpZF07XHJcbiAgICAgICAgdG91Y2guX2VuZCgpO1xyXG4gICAgICAgIGRlbGV0ZSB0b3VjaE1hcFtpZF07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciB0b3VjaCA9IHRvdWNoTWFwW3QuaWRlbnRpZmllcl07XHJcbiAgICAgICAgdG91Y2guX21vdmUocG9pbnRYLmdldC5jYWxsKHQpLCBwb2ludFkuZ2V0LmNhbGwodCkpO1xyXG4gICAgICAgIC8vIHRvdWNoLl9tb3ZlKHQucG9pbnRYLCB0LnBvaW50WSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlLnN0b3AoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlQaG9uZSDjgafjga8gNuacrOaMh+S7peS4iuOCv+ODg+ODgeOBmeOCi+OBqOW8t+WItueahOOBq+OBmeOBueOBpuOBruOCv+ODg+ODgeOBjOino+mZpOOBleOCjOOCi1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+OBk+OBruerr+acq+OBp+OBruWQjOaZguOCv+ODg+ODgeaVsOOBruWItumZkOOCkui2heOBiOOBvuOBl+OBn+OAgicpO1xyXG4gICAgICBlYWNoLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciBpZCA9IHQuaWRlbnRpZmllcjtcclxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaE1hcFtpZF07XHJcbiAgICAgICAgdG91Y2guX2VuZCgpO1xyXG4gICAgICAgIGRlbGV0ZSB0b3VjaE1hcFtpZF07XHJcbiAgICAgIH0pO1xyXG4gICAgICBlLnN0b3AoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW1wdHkoKSB7XHJcbiAgICB2YXIgdG91Y2ggPSBuZXcgVG91Y2godGhpcy5kb21FbGVtZW50LCB0cnVlKTtcclxuICBcclxuICAgIHRvdWNoLmlkID0gdGhpcy5pZDtcclxuICAgIHRoaXMudG91Y2hlcy5wdXNoKHRvdWNoKTtcclxuXHJcbiAgICByZXR1cm4gdG91Y2g7XHJcbiAgfVxyXG5cclxuICBnZXRUb3VjaChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG91Y2hNYXBbaWRdO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG91Y2godG91Y2gpIHtcclxuICAgIHZhciBpID0gdGhpcy50b3VjaGVzLmluZGV4T2YodG91Y2gpO1xyXG4gICAgdGhpcy50b3VjaGVzLnNwbGljZShpLCAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uKHRvdWNoKSB7XHJcbiAgICAgIGlmICghdG91Y2gucmVsZWFzZWQpIHtcclxuICAgICAgICB0b3VjaC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRvdWNoLmZsYWdzID09PSAwKSB7XHJcbiAgICAgICAgICB0b3VjaC5yZWxlYXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRvdWNoLnJlbGVhc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUb3VjaCh0b3VjaCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBpZCgpIHsgcmV0dXJuIHRoaXMuX2lkWzBdKys7IH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5HYW1lcGFkTWFuYWdlclxyXG4gKiDjgrLjg7zjg6Djg5Hjg4Pjg4njg57jg43jg7zjgrjjg6Pjg7wuXHJcbiAqIOOCsuODvOODoOODkeODg+ODieaOpee2mueKtuazgeOBruebo+imluOAgeWAi+OAheOBruOCsuODvOODoOODkeODg+ODieOBruWFpeWKm+eKtuaFi+OBruabtOaWsOOCkuihjOOBhi5cclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEdhbWVwYWRNYW5hZ2VyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICog5L2c5oiQ5riI44G/cGhpbmEuaW5wdXQuR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOBruODquOCueODiFxyXG4gICAqXHJcbiAgICogQHR5cGUge09iamVjdC48bnVtYmVyLCBwaGluYS5pbnB1dC5HYW1lcGFkPn1cclxuICAgKi9cclxuICAvLyBnYW1lcGFkczogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICog5L2c5oiQ5riI44G/44Ky44O844Og44OR44OD44OJ44GuaW5kZXjjga7jg6rjgrnjg4hcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIC8vIF9jcmVhdGVkOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiDjg6njg4Pjg5fliY1HYW1lcGFk44Gu44Oq44K544OIXHJcbiAgICogQHR5cGUge3BoaW5hLmlucHV0LkdhbWVwYWRbXX1cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIC8vIF9yYXdnYW1lcGFkczogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZ2FtZXBhZHMgPSB7fTtcclxuICAgIHRoaXMuX2NyZWF0ZWQgPSBbXTtcclxuICAgIHRoaXMuX3Jhd2dhbWVwYWRzID0gW107XHJcblxyXG4gICAgdGhpcy5fcHJldlRpbWVzdGFtcHMgPSB7fTtcclxuXHJcbiAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IG51bGw7XHJcbiAgICB2YXIgbmF2aWdhdG9yID0gcGhpbmEkMS5nbG9iYWwubmF2aWdhdG9yO1xyXG4gICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMpIHtcclxuICAgICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMuYmluZChuYXZpZ2F0b3IpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLndlYmtpdEdldEdhbWVwYWRzKSB7XHJcbiAgICAgIHRoaXMuX2dldEdhbWVwYWRzID0gbmF2aWdhdG9yLndlYmtpdEdldEdhbWVwYWRzLmJpbmQobmF2aWdhdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2dldEdhbWVwYWRzID0gZnVuY3Rpb24oKSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkY29ubmVjdGVkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgZ2FtZXBhZCA9IHRoaXMuZ2V0KGUuZ2FtZXBhZC5pbmRleCk7XHJcbiAgICAgIGdhbWVwYWQuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5mbGFyZSgnY29ubmVjdGVkJywge1xyXG4gICAgICAgIGdhbWVwYWQ6IGdhbWVwYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkZGlzY29ubmVjdGVkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgZ2FtZXBhZCA9IHRoaXMuZ2V0KGUuZ2FtZXBhZC5pbmRleCk7XHJcbiAgICAgIGdhbWVwYWQuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2Rpc2Nvbm5lY3RlZCcsIHtcclxuICAgICAgICBnYW1lcGFkOiBnYW1lcGFkLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmg4XloLHmm7TmlrDlh6bnkIZcclxuICAgKiDjg57jgqTjg5Xjg6zjg7zjg6DlkbzjgpPjgafkuIvjgZXjgYQuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5fcG9sbCgpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSB0aGlzLl9jcmVhdGVkLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NyZWF0ZWRbaV07XHJcbiAgICAgIHZhciByYXdnYW1lcGFkID0gdGhpcy5fcmF3Z2FtZXBhZHNbaW5kZXhdO1xyXG5cclxuICAgICAgaWYgKCFyYXdnYW1lcGFkKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyYXdnYW1lcGFkLnRpbWVzdGFtcCAmJiAocmF3Z2FtZXBhZC50aW1lc3RhbXAgPT09IHRoaXMuX3ByZXZUaW1lc3RhbXBzW2ldKSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZXBhZHNbaW5kZXhdLl91cGRhdGVTdGF0ZUVtcHR5KCk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ByZXZUaW1lc3RhbXBzW2ldID0gcmF3Z2FtZXBhZC50aW1lc3RhbXA7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHNbaW5kZXhdLl91cGRhdGVTdGF0ZShyYXdnYW1lcGFkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaMh+WumuOBleOCjOOBn2luZGV444GuR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOCkui/lOOBmS5cclxuICAgKlxyXG4gICAqIOacquS9nOaIkOOBruWgtOWQiOOBr+S9nOaIkOOBl+OBpui/lOOBmS5cclxuICAgKi9cclxuICBnZXQoaW5kZXgpIHtcclxuICAgIGluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZ2FtZXBhZHNbaW5kZXhdKSB7XHJcbiAgICAgIHRoaXMuX2NyZWF0ZWQucHVzaChpbmRleCk7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHNbaW5kZXhdID0gbmV3IEdhbWVwYWQoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdhbWVwYWRzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaMh+WumuOBleOCjOOBn2luZGV444GuR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOCkuegtOajhOOBmeOCiy5cclxuICAgKiDnoLTmo4TjgZXjgozjgZ9HYW1lcGFk44Kq44OW44K444Kn44Kv44OI44Gv5Lul6ZmN5pu05paw44GV44KM44Gq44GELlxyXG4gICAqL1xyXG4gIGRpc3Bvc2UoaW5kZXgpIHtcclxuICAgIGlmIChjb250YWlucy5jYWxsKHRoaXMuX2NyZWF0ZWQsIGluZGV4KSkge1xyXG4gICAgLy8gaWYgKHRoaXMuX2NyZWF0ZWQuY29udGFpbnMoaW5kZXgpKSB7XHJcbiAgICAgIHZhciBnYW1lcGFkID0gdGhpcy5nZXQoaW5kZXgpO1xyXG4gICAgICBkZWxldGUgdGhpcy5nYW1lcGFkW2dhbWVwYWRdO1xyXG4gICAgICBlcmFzZS5jYWxsKHRoaXMuX2NyZWF0ZWQsIGluZGV4KTtcclxuICAgICAgLy8gdGhpcy5fY3JlYXRlZC5lcmFzZShpbmRleCk7XHJcblxyXG4gICAgICBnYW1lcGFkLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GV44KM44GfaW5kZXjjga7jgrLjg7zjg6Djg5Hjg4Pjg4njgYzmjqXntprkuK3jgYvjganjgYbjgYvjgpLov5TjgZkuXHJcbiAgICpcclxuICAgKiBHYW1lcGFk44Kq44OW44K444Kn44Kv44OI44GM5pyq5L2c5oiQ44Gu5aC05ZCI44Gn44KC5YuV5L2c44GZ44KLLlxyXG4gICAqL1xyXG4gIGlzQ29ubmVjdGVkKGluZGV4KSB7XHJcbiAgICBpbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3Jhd2dhbWVwYWRzW2luZGV4XSAmJiB0aGlzLl9yYXdnYW1lcGFkc1tpbmRleF0uY29ubmVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfcG9sbCgpIHtcclxuICAgIHZhciByYXdHYW1lcGFkcyA9IHRoaXMuX2dldEdhbWVwYWRzKCk7XHJcbiAgICBpZiAocmF3R2FtZXBhZHMpIHtcclxuICAgICAgY2xlYXIuY2FsbCh0aGlzLl9yYXdnYW1lcGFkcyk7XHJcbiAgICAgIC8vIHRoaXMuX3Jhd2dhbWVwYWRzLmNsZWFyKCk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gcmF3R2FtZXBhZHMubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICBpZiAocmF3R2FtZXBhZHNbaV0pIHtcclxuICAgICAgICAgIHRoaXMuX3Jhd2dhbWVwYWRzLnB1c2gocmF3R2FtZXBhZHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gX3N0YXRpYzoge1xyXG4gIC8vICAgLyoqIOODluODqeOCpuOCtuOBjEdhbWVwYWQgQVBJ44Gr5a++5b+c44GX44Gm44GE44KL44GLLiAqL1xyXG4gIC8vICAgaXNBdmFpbGFibGU6IChmdW5jdGlvbigpIHtcclxuICAvLyAgICAgdmFyIG5hdiA9IHBoaW5hLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgLy8gICAgIGlmICghbmF2KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIC8vICAgICByZXR1cm4gKCEhbmF2LmdldEdhbWVwYWRzKSB8fCAoISFuYXYud2Via2l0R2V0R2FtZXBhZHMpO1xyXG4gIC8vICAgfSkoKSxcclxuICAvLyB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuLyoqIOODluODqeOCpuOCtuOBjEdhbWVwYWQgQVBJ44Gr5a++5b+c44GX44Gm44GE44KL44GLLiAqL1xyXG5HYW1lcGFkTWFuYWdlci5pc0F2YWlsYWJsZSA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgbmF2ID0gcGhpbmEkMS5nbG9iYWwubmF2aWdhdG9yO1xyXG4gIGlmICghbmF2KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiAoISFuYXYuZ2V0R2FtZXBhZHMpIHx8ICghIW5hdi53ZWJraXRHZXRHYW1lcGFkcyk7XHJcbn0pKCk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5HYW1lcGFkXHJcbiAqIOOCsuODvOODoOODkeODg+ODiVxyXG4gKlxyXG4gKiDnm7TmjqXjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZvjgZrjgIFwaGluYS5pbnB1dC5HYW1lcGFkTWFuYWdlcuOCquODluOCuOOCp+OCr+ODiOOBi+OCieWPluW+l+OBl+OBpuS9v+eUqOOBmeOCiy5cclxuICovXHJcbmNsYXNzIEdhbWVwYWQge1xyXG4vLyBwaGluYS5kZWZpbmUoXCJwaGluYS5pbnB1dC5HYW1lcGFkXCIsIHtcclxuXHJcbiAgLy8gaW5kZXg6IG51bGwsXHJcbiAgLy8gYnV0dG9uczogbnVsbCxcclxuICAvLyAvKiogQHR5cGUge0FycmF5LjxwaGluYS5nZW9tLlZlY3RvcjI+fSAqL1xyXG4gIC8vIHN0aWNrczogbnVsbCxcclxuXHJcbiAgLy8gaWQ6IG51bGwsXHJcbiAgLy8gY29ubmVjdGVkOiBmYWxzZSxcclxuICAvLyBtYXBwaW5nOiBudWxsLFxyXG4gIC8vIHRpbWVzdGFtcDogbnVsbCxcclxuXHJcbiAgY29uc3RydWN0b3IoaW5kZXgpIHtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuICAgIC8vIHRoaXMuYnV0dG9ucyA9IEFycmF5LnJhbmdlKDAsIDE2KS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSByYW5nZS5jYWxsKFtdLCAwLCAxNikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHByZXNzZWQ6IGZhbHNlLFxyXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxyXG4gICAgICAgIGRvd246IGZhbHNlLFxyXG4gICAgICAgIHVwOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGlja3MgPSByYW5nZS5jYWxsKFtdLCAwLCAyKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyB0aGlzLnN0aWNrcyA9IEFycmF5LnJhbmdlKDAsIDIpLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hcHBpbmcgPSBudWxsO1xyXG4gICAgdGhpcy50aW1lc3RhbXAgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44GM5oq844GV44KM44Gm44GE44KL44GLLlxyXG4gICAqL1xyXG4gIGdldEtleShidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgYnV0dG9uID0gR2FtZXBhZC5CVVRUT05fQ09ERVtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnV0dG9uc1tidXR0b25dKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbYnV0dG9uXS5wcmVzc2VkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Oc44K/44Oz44KS5oq844GX44GfLlxyXG4gICAqL1xyXG4gIGdldEtleURvd24oYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEdhbWVwYWQuQlVUVE9OX0NPREVbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl0uZG93bjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OCkumbouOBl+OBny5cclxuICAgKi9cclxuICBnZXRLZXlVcChidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgYnV0dG9uID0gR2FtZXBhZC5CVVRUT05fQ09ERVtidXR0b25dO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnV0dG9uc1tidXR0b25dKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbYnV0dG9uXS51cDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWNgeWtl+OCreODvOOBruWFpeWKm+OBleOCjOOBpuOBhOOCi+aWueWQkS5cclxuICAgKi9cclxuICBnZXRLZXlBbmdsZSgpIHtcclxuICAgIHZhciBhbmdsZSA9IG51bGw7XHJcbiAgICB2YXIgYXJyb3dCaXQgPVxyXG4gICAgICAodGhpcy5nZXRLZXkoJ2xlZnQnKSA8PCAzKSB8IC8vIDEwMDBcclxuICAgICAgKHRoaXMuZ2V0S2V5KCd1cCcpIDw8IDIpIHwgLy8gMDEwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoJ3JpZ2h0JykgPDwgMSkgfCAvLyAwMDEwXHJcbiAgICAgICh0aGlzLmdldEtleSgnZG93bicpKTsgLy8gMDAwMVxyXG5cclxuICAgIGlmIChhcnJvd0JpdCAhPT0gMCAmJiBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEUuaGFzT3duUHJvcGVydHkoYXJyb3dCaXQpKSB7XHJcbiAgICAgIGFuZ2xlID0gQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFW2Fycm93Qml0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDljYHlrZfjgq3jg7zjga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJHjgpLjg5njgq/jg4jjg6vjgacuXHJcbiAgICog5q2j6KaP5YyW44GV44KM44Gm44GE44KLLlxyXG4gICAqL1xyXG4gIGdldEtleURpcmVjdGlvbigpIHtcclxuICAgIHZhciBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRLZXkoJ2xlZnQnKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueCA9IC0xO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEtleSgncmlnaHQnKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueCA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRLZXkoJ3VwJykpIHtcclxuICAgICAgZGlyZWN0aW9uLnkgPSAtMTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRLZXkoJ2Rvd24nKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbi54ICYmIGRpcmVjdGlvbi55KSB7XHJcbiAgICAgIGRpcmVjdGlvbi5kaXYoTWF0aC5TUVJUMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCueODhuOCo+ODg+OCr+OBruWFpeWKm+OBleOCjOOBpuOBhOOCi+aWueWQkS5cclxuICAgKi9cclxuICBnZXRTdGlja0FuZ2xlKHN0aWNrSWQpIHtcclxuICAgIHN0aWNrSWQgPSBzdGlja0lkIHx8IDA7XHJcbiAgICB2YXIgc3RpY2sgPSB0aGlzLnN0aWNrc1tzdGlja0lkXTtcclxuICAgIHJldHVybiBzdGljayA/IE1hdGguYXRhbjIoLXN0aWNrLnksIHN0aWNrLngpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCueODhuOCo+ODg+OCr+OBruWFpeWKm+OBleOCjOOBpuOBhOOCi+aWueWQkeOCkuODmeOCr+ODiOODq+OBpy5cclxuICAgKi9cclxuICBnZXRTdGlja0RpcmVjdGlvbihzdGlja0lkKSB7XHJcbiAgICBzdGlja0lkID0gc3RpY2tJZCB8fCAwO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RpY2tzID8gdGhpcy5zdGlja3Nbc3RpY2tJZF0uY2xvbmUoKSA6IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlU3RhdGUoZ2FtZXBhZCkge1xyXG4gICAgdGhpcy5pZCA9IGdhbWVwYWQuaWQ7XHJcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGdhbWVwYWQuY29ubmVjdGVkO1xyXG4gICAgdGhpcy5tYXBwaW5nID0gZ2FtZXBhZC5tYXBwaW5nO1xyXG4gICAgdGhpcy50aW1lc3RhbXAgPSBnYW1lcGFkLnRpbWVzdGFtcDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWVuZCA9IGdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkgPCBpZW5kOyBpKyspIHtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9uKGdhbWVwYWQuYnV0dG9uc1tpXSwgaSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDAsIGplbmQgPSBnYW1lcGFkLmF4ZXMubGVuZ3RoOyBqIDwgamVuZDsgaiArPSAyKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVN0aWNrKGdhbWVwYWQuYXhlc1tqICsgMF0sIGogLyAyLCAneCcpO1xyXG4gICAgICB0aGlzLl91cGRhdGVTdGljayhnYW1lcGFkLmF4ZXNbaiArIDFdLCBqIC8gMiwgJ3knKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVN0YXRlRW1wdHkoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWVuZCA9IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGkgPCBpZW5kOyBpKyspIHtcclxuICAgICAgdGhpcy5idXR0b25zW2ldLmRvd24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5idXR0b25zW2ldLnVwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVCdXR0b24odmFsdWUsIGJ1dHRvbklkKSB7XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbklkXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tidXR0b25JZF0gPSB7XHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgcHJlc3NlZDogZmFsc2UsXHJcbiAgICAgICAgbGFzdDogZmFsc2UsXHJcbiAgICAgICAgZG93bjogZmFsc2UsXHJcbiAgICAgICAgdXA6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgYnV0dG9uID0gdGhpcy5idXR0b25zW2J1dHRvbklkXTtcclxuXHJcbiAgICBidXR0b24ubGFzdCA9IGJ1dHRvbi5wcmVzc2VkO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICBidXR0b24ucHJlc3NlZCA9IHZhbHVlLnByZXNzZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b24udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgYnV0dG9uLnByZXNzZWQgPSB2YWx1ZSA+IEdhbWVwYWQuQU5BTE9HVUVfQlVUVE9OX1RIUkVTSE9MRDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uZG93biA9IChidXR0b24ucHJlc3NlZCBeIGJ1dHRvbi5sYXN0KSAmIGJ1dHRvbi5wcmVzc2VkO1xyXG4gICAgYnV0dG9uLnVwID0gKGJ1dHRvbi5wcmVzc2VkIF4gYnV0dG9uLmxhc3QpICYgYnV0dG9uLmxhc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGljayh2YWx1ZSwgc3RpY2tJZCwgYXhpc05hbWUpIHtcclxuICAgIGlmICh0aGlzLnN0aWNrc1tzdGlja0lkXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc3RpY2tzW3N0aWNrSWRdID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0aWNrc1tzdGlja0lkXVtheGlzTmFtZV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiog44OW44Op44Km44K244GMR2FtZXBhZCBBUEnjgavlr77lv5zjgZfjgabjgYTjgovjgYsuICovXHJcbkdhbWVwYWQuaXNBdmFpbGFibGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5hdiA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICBpZiAoIW5hdikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICByZXR1cm4gKCEhbmF2LmdldEdhbWVwYWRzKSB8fCAoISFuYXYud2Via2l0R2V0R2FtZXBhZHMpO1xyXG59KSgpO1xyXG5cclxuLyoqIOOCouODiuODreOCsOWFpeWKm+WvvuW/nOOBruODnOOCv+ODs+OBruWgtOWQiOOAgeOBqeOBrueoi+W6puOBvuOBp+aKvOOBl+i+vOOCgOOBqG9u44Gr44Gq44KL44GL44KS6KGo44GZ44GX44GN44GE5YCkLiAqL1xyXG5HYW1lcGFkLkFOQUxPR1VFX0JVVFRPTl9USFJFU0hPTEQgPSAwLjU7XHJcblxyXG4vKiog44Oc44K/44Oz5ZCN44Go44Oc44K/44OzSUTjga7jg57jg4Pjg5cuICovXHJcbkdhbWVwYWQuQlVUVE9OX0NPREUgPSB7XHJcbiAgJ2EnOiAwLFxyXG4gICdiJzogMSxcclxuICAneCc6IDIsXHJcbiAgJ3knOiAzLFxyXG5cclxuICAnbDEnOiA0LFxyXG4gICdyMSc6IDUsXHJcbiAgJ2wyJzogNixcclxuICAncjInOiA3LFxyXG5cclxuICAnc2VsZWN0JzogOCxcclxuICAnc3RhcnQnOiA5LFxyXG5cclxuICAnbDMnOiAxMCxcclxuICAncjMnOiAxMSxcclxuXHJcbiAgJ3VwJzogMTIsXHJcbiAgJ2Rvd24nOiAxMyxcclxuICAnbGVmdCc6IDE0LFxyXG4gICdyaWdodCc6IDE1LFxyXG5cclxuICAnc3BlY2lhbCc6IDE2LFxyXG5cclxuICAnQSc6IDAsXHJcbiAgJ0InOiAxLFxyXG4gICdYJzogMixcclxuICAnWSc6IDMsXHJcblxyXG4gICdMMSc6IDQsXHJcbiAgJ1IxJzogNSxcclxuICAnTDInOiA2LFxyXG4gICdSMic6IDcsXHJcblxyXG4gICdTRUxFQ1QnOiA4LFxyXG4gICdTVEFSVCc6IDksXHJcblxyXG4gICdMMyc6IDEwLFxyXG4gICdSMyc6IDExLFxyXG5cclxuICAnVVAnOiAxMixcclxuICAnRE9XTic6IDEzLFxyXG4gICdMRUZUJzogMTQsXHJcbiAgJ1JJR0hUJzogMTUsXHJcblxyXG4gICdTUEVDSUFMJzogMTYsXHJcbn07XHJcblxyXG52YXIgQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFID0ge1xyXG4gIDB4MDA6IG51bGwsXHJcblxyXG4gIC8qIEBwcm9wZXJ0eSDkuIsgKi9cclxuICAweDAxOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOWPsyAqL1xyXG4gIDB4MDI6IDAsXHJcbiAgLyogQHByb3BlcnR5IOS4iiAqL1xyXG4gIDB4MDQ6IDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6YgKi9cclxuICAweDA4OiAxODAsXHJcblxyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIogKi9cclxuICAweDA2OiA0NSxcclxuICAvKiBAcHJvcGVydHkg5Y+z5LiLICovXHJcbiAgMHgwMzogMzE1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIogKi9cclxuICAweDBjOiAxMzUsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4iyAqL1xyXG4gIDB4MDk6IDIyNSxcclxuXHJcbiAgLy8g5LiJ5pa55ZCR5ZCM5pmC5oq844GX5a++5b+cXHJcbiAgLy8g5oOz5a6a5aSW44Gu5pON5L2c44Gg44GM5a++5b+c44GX44Go44GE44Gf44G744GG44GM54Sh6ZujXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iuW3piAqL1xyXG4gIDB4MGU6IDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIrlt6bkuIsgKi9cclxuICAweDBkOiAxODAsXHJcbiAgLyogQHByb3BlcnR5IOW3puS4i+WPsyAqL1xyXG4gIDB4MGI6IDI3MCxcclxuICAvKiBAcHJvcGVydHkg5LiL5Y+z5LiKICovXHJcbiAgMHgwNzogMCxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5BY2NlbGVyb21ldGVyXHJcbiAqIOOCueODnuODvOODiOODleOCqeODs+OBruOCu+ODs+OCteODvOaDheWgsVxyXG4gKi9cclxuY2xhc3MgQWNjZWxlcm9tZXRlciB7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgIGdyYXZpdHkg6YeN5Yqb44K744Oz44K144O8ICovXHJcbiAgLyoqIEBwcm9wZXJ0eSAgYWNjZWxlcmF0aW9uIOWKoOmAn+W6puOCu+ODs+OCteODvCAqL1xyXG4gIC8qKiBAcHJvcGVydHkgIHJvdGF0aW9uIOWbnui7ouWKoOmAn+W6puOCu+ODs+OCteODvCAqL1xyXG4gIC8qKiBAcHJvcGVydHkgIG9yaWVudGF0aW9uIOOCueODnuODvOODiOODleOCqeODs+OBruWCvuOBjSAqL1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBcclxuICAgIHRoaXMuZ3Jhdml0eSAgICAgICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHRoaXMuYWNjZWxlcmF0aW9uICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHRoaXMucm90YXRpb24gICAgICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHRoaXMub3JpZW50YXRpb24gICAgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICBpZiAocGhpbmEkMS5pc01vYmlsZSgpKSB7XHJcbiAgICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2Vtb3Rpb25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBhY2NlbGVyYXRpb24gPSBzZWxmLmFjY2VsZXJhdGlvbjtcclxuICAgICAgICB2YXIgZ3Jhdml0eSA9IHNlbGYuZ3Jhdml0eTtcclxuICAgICAgICB2YXIgcm90YXRpb24gPSBzZWxmLnJvdGF0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLmFjY2VsZXJhdGlvbikge1xyXG4gICAgICAgICAgYWNjZWxlcmF0aW9uLnggPSBlLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgYWNjZWxlcmF0aW9uLnkgPSBlLmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgYWNjZWxlcmF0aW9uLnogPSBlLmFjY2VsZXJhdGlvbi56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5KSB7XHJcbiAgICAgICAgICBncmF2aXR5LnggPSBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueDtcclxuICAgICAgICAgIGdyYXZpdHkueSA9IGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55O1xyXG4gICAgICAgICAgZ3Jhdml0eS56ID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5Lno7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnJvdGF0aW9uUmF0ZSkge1xyXG4gICAgICAgICAgcm90YXRpb24ueCA9IHJvdGF0aW9uLmJldGEgID0gZS5yb3RhdGlvblJhdGUuYmV0YTtcclxuICAgICAgICAgIHJvdGF0aW9uLnkgPSByb3RhdGlvbi5nYW1tYSA9IGUucm90YXRpb25SYXRlLmdhbW1hO1xyXG4gICAgICAgICAgcm90YXRpb24ueiA9IHJvdGF0aW9uLmFscGhhID0gZS5yb3RhdGlvblJhdGUuYWxwaGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gc2VsZi5vcmllbnRhdGlvbjtcclxuICAgICAgICBvcmllbnRhdGlvbi5hbHBoYSAgID0gZS5hbHBoYTsgIC8vIHooMH4zNjApXHJcbiAgICAgICAgb3JpZW50YXRpb24uYmV0YSAgICA9IGUuYmV0YTsgICAvLyB4KC0xODB+MTgwKVxyXG4gICAgICAgIG9yaWVudGF0aW9uLmdhbW1hICAgPSBlLmdhbW1hOyAgLy8geSgtOTB+OTApXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuVXBkYXRlclxyXG4gKi9cclxuY2xhc3MgVXBkYXRlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUocm9vdCkge1xyXG4gICAgdGhpcy5fdXBkYXRlRWxlbWVudChyb290KTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIHZhciBhcHAgPSB0aGlzLmFwcDtcclxuXHJcbiAgICAvLyDmm7TmlrDjgZnjgovjgYvjgpLliKTlrppcclxuICAgIGlmIChlbGVtZW50LmF3YWtlID09PSBmYWxzZSkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyDjgqjjg7Pjgr/jg7zjg5Xjg6zjg7zjg6DjgqTjg5njg7Pjg4hcclxuICAgIGlmIChlbGVtZW50LmhhcygnZW50ZXJmcmFtZScpKSB7XHJcbiAgICAgIGVsZW1lbnQuZmxhcmUoJ2VudGVyZnJhbWUnLCB7XHJcbiAgICAgICAgYXBwOiB0aGlzLmFwcCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawXHJcbiAgICBpZiAoZWxlbWVudC51cGRhdGUpIGVsZW1lbnQudXBkYXRlKGFwcCk7XHJcblxyXG4gICAgLy8g44K/44OD44OB5Yik5a6aXHJcbiAgICAvLyB0aGlzLl9jaGVja1BvaW50KGVsZW1lbnQpO1xyXG5cclxuICAgIC8vIOWtkOS+m+OCkuabtOaWsFxyXG4gICAgdmFyIGxlbiA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGVtcENoaWxkcmVuID0gZWxlbWVudC5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVFbGVtZW50KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja1BvaW50KG9iaikge1xyXG4gICAgdGhpcy5hcHAucG9pbnRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgIGlmIChwLmlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fX2NoZWNrUG9pbnQob2JqLCBwKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBfX2NoZWNrUG9pbnQob2JqLCBwKSB7XHJcbiAgICBpZiAoIW9iai5pbnRlcmFjdGl2ZSkgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgcHJldk92ZXJGbGFnID0gb2JqLl9vdmVyRmxhZ3NbcC5pZF07XHJcbiAgICB2YXIgb3ZlckZsYWcgPSBvYmouaGl0VGVzdDIocC54LCBwLnkpO1xyXG4gICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBvdmVyRmxhZztcclxuXHJcbiAgICBpZiAoIXByZXZPdmVyRmxhZyAmJiBvdmVyRmxhZykge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50b3ZlcicsIHtcclxuICAgICAgICBwb2ludGVyOiBwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChwcmV2T3ZlckZsYWcgJiYgIW92ZXJGbGFnKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3ZlckZsYWcpIHtcclxuICAgICAgaWYgKHAuZ2V0UG9pbnRpbmdTdGFydCgpKSB7XHJcbiAgICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gdHJ1ZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50c3RhcnQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX3RvdWNoRmxhZ3NbcC5pZF0pIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludHN0YXknKTtcclxuICAgICAgaWYgKHAuX21vdmVGbGFnKSB7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludG1vdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX3RvdWNoRmxhZ3NbcC5pZF09PT10cnVlICYmIHAuZ2V0UG9pbnRpbmdFbmQoKSkge1xyXG4gICAgICBvYmouX3RvdWNoRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludGVuZCcpO1xyXG5cclxuICAgICAgaWYgKG9iai5fb3ZlckZsYWdzW3AuaWRdKSB7XHJcbiAgICAgICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgICBvYmouZmxhcmUoJ3BvaW50b3V0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLkludGVyYWN0aXZlXHJcbiAqL1xyXG5jbGFzcyBJbnRlcmFjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcCkge1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5tdWx0aVRvdWNoID0gdHJ1ZTtcclxuICAgIHRoaXMuY3Vyc29yID0ge1xyXG4gICAgICBub3JtYWw6ICcnLFxyXG4gICAgICBob3ZlcjogJ3BvaW50ZXInLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9ob2xkcyA9IFtdO1xyXG4gICAgdGhpcy5hcHAub24oJ2NoYW5nZXNjZW5lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNsZWFyLmNhbGwodGhpcy5faG9sZHMpO1xyXG4gICAgICAvLyB0aGlzLl9ob2xkcy5jbGVhcigpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2hlY2socm9vdCkge1xyXG4gICAgLy8g44Kr44O844K944Or44Gu44K544K/44Kk44Or44KS5Y+N5pigXHJcbiAgICBpZiAodGhpcy5hcHAuZG9tRWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5faG9sZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmRvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gdGhpcy5jdXJzb3IuaG92ZXI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHAuZG9tRWxlbWVudC5zdHlsZS5jdXJzb3IgPSB0aGlzLmN1cnNvci5ub3JtYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAhdGhpcy5hcHAucG9pbnRlcnMpIHJldHVybiA7XHJcbiAgICB0aGlzLl9jaGVja0VsZW1lbnQocm9vdCk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIHZhciBhcHAgPSB0aGlzLmFwcDtcclxuXHJcbiAgICAvLyDmm7TmlrDjgZnjgovjgYvjgpLliKTlrppcclxuICAgIGlmIChlbGVtZW50LmF3YWtlID09PSBmYWxzZSkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyDlrZDkvpvjgpLmm7TmlrBcclxuICAgIHZhciBsZW4gPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tFbGVtZW50KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDjgr/jg4Pjg4HliKTlrppcclxuICAgIHRoaXMuX2NoZWNrUG9pbnQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tQb2ludChvYmopIHtcclxuICAgIGlmICh0aGlzLm11bHRpVG91Y2gpIHtcclxuICAgICAgdGhpcy5hcHAucG9pbnRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgaWYgKHAuaWQgIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuX19jaGVja1BvaW50KG9iaiwgcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9fY2hlY2tQb2ludChvYmosIHRoaXMuYXBwLnBvaW50ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX19jaGVja1BvaW50KG9iaiwgcCkge1xyXG4gICAgaWYgKCFvYmouaW50ZXJhY3RpdmUpIHJldHVybiA7XHJcblxyXG4gICAgdmFyIHByZXZPdmVyRmxhZyA9IG9iai5fb3ZlckZsYWdzW3AuaWRdO1xyXG4gICAgdmFyIG92ZXJGbGFnID0gb2JqLmhpdFRlc3QocC54LCBwLnkpO1xyXG4gICAgb2JqLl9vdmVyRmxhZ3NbcC5pZF0gPSBvdmVyRmxhZztcclxuXHJcbiAgICB2YXIgZSA9IHtcclxuICAgICAgcG9pbnRlcjogcCxcclxuICAgICAgaW50ZXJhY3RpdmU6IHRoaXMsXHJcbiAgICAgIG92ZXI6IG92ZXJGbGFnLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXByZXZPdmVyRmxhZyAmJiBvdmVyRmxhZykge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50b3ZlcicsIGUpO1xyXG5cclxuICAgICAgaWYgKG9iai5ib3VuZGluZ1R5cGUgJiYgb2JqLmJvdW5kaW5nVHlwZSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgdGhpcy5faG9sZHMucHVzaChvYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocHJldk92ZXJGbGFnICYmICFvdmVyRmxhZykge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50b3V0JywgZSk7XHJcbiAgICAgIC8vIHRoaXMuX2hvbGRzLmVyYXNlKG9iaik7XHJcbiAgICAgIGVyYXNlLmNhbGwodGhpcy5faG9sZHMsIG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG92ZXJGbGFnKSB7XHJcbiAgICAgIGlmIChwLmdldFBvaW50aW5nU3RhcnQoKSkge1xyXG4gICAgICAgIG9iai5fdG91Y2hGbGFnc1twLmlkXSA9IHRydWU7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludHN0YXJ0JywgZSk7XHJcbiAgICAgICAgLy8g44Kv44Oq44OD44Kv44OV44Op44Kw44KS56uL44Gm44KLXHJcbiAgICAgICAgb2JqLl9jbGlja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX3RvdWNoRmxhZ3NbcC5pZF0pIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludHN0YXknLCBlKTtcclxuICAgICAgaWYgKHAuX21vdmVGbGFnKSB7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludG1vdmUnLCBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmouX3RvdWNoRmxhZ3NbcC5pZF09PT10cnVlICYmIHAuZ2V0UG9pbnRpbmdFbmQoKSkge1xyXG4gICAgICBvYmouX3RvdWNoRmxhZ3NbcC5pZF0gPSBmYWxzZTtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludGVuZCcsIGUpO1xyXG5cclxuICAgICAgaWYgKHBoaW5hJDEuaXNNb2JpbGUoKSAmJiBvYmouX292ZXJGbGFnc1twLmlkXSkge1xyXG4gICAgICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludG91dCcsIGUpO1xyXG4gICAgICAgIC8vIHRoaXMuX2hvbGRzLmVyYXNlKG9iaik7XHJcbiAgICAgICAgZXJhc2UuY2FsbCh0aGlzLl9ob2xkcywgb2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuLy8gaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9hcHAvZWxlbWVudFwiXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEFjY2Vzc29yeSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICB9XHJcblxyXG4gIHNldFRhcmdldCh0YXJnZXQpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCA9PT0gdGFyZ2V0KSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRUYXJnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBpc0F0dGFjaGVkKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hUbyhlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmF0dGFjaCh0aGlzKTtcclxuICAgIHRoaXMuc2V0VGFyZ2V0KGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5kZXRhY2godGhpcyk7XHJcbiAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gRWxlbWVudOWBtOOBp+aLoeW8tVxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuJG1ldGhvZCgnYXR0YWNoJywgZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbi8vICAgaWYgKCF0aGlzLmFjY2Vzc29yaWVzKSB7XHJcbi8vICAgICB0aGlzLmFjY2Vzc29yaWVzID0gW107XHJcbi8vICAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICB0aGlzLmFjY2Vzc29yaWVzLmVhY2goZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbi8vICAgICAgICAgYWNjZXNzb3J5LnVwZGF0ZSAmJiBhY2Nlc3NvcnkudXBkYXRlKGUuYXBwKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRoaXMuYWNjZXNzb3JpZXMucHVzaChhY2Nlc3NvcnkpO1xyXG4vLyAgIGFjY2Vzc29yeS5zZXRUYXJnZXQodGhpcyk7XHJcbi8vICAgYWNjZXNzb3J5LmZsYXJlKCdhdHRhY2hlZCcpO1xyXG5cclxuLy8gICByZXR1cm4gdGhpcztcclxuLy8gfSk7XHJcblxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuJG1ldGhvZCgnZGV0YWNoJywgZnVuY3Rpb24oYWNjZXNzb3J5KSB7XHJcbi8vICAgaWYgKHRoaXMuYWNjZXNzb3JpZXMpIHtcclxuLy8gICAgIHRoaXMuYWNjZXNzb3JpZXMuZXJhc2UoYWNjZXNzb3J5KTtcclxuLy8gICAgIGFjY2Vzc29yeS5zZXRUYXJnZXQobnVsbCk7XHJcbi8vICAgICBhY2Nlc3NvcnkuZmxhcmUoJ2RldGFjaGVkJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gdGhpcztcclxuLy8gfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LlR3ZWVuZXJcclxuICogIyBUd2VlbmVyXHJcbiAqIFR3ZWVuZXLjga/jgqrjg5bjgrjjgqfjgq/jg4jjga7jg5fjg63jg5Hjg4bjgqPjgavlr77jgZfjgabjgIFcclxuICogVHdlZW7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7lirnmnpzjgpLkuI7jgYjjgovjgq/jg6njgrnjgafjgZnjgIIgIFxyXG4gKiDkuLvjgasge0BsaW5rIHBoaW5hLmFwcC5FbGVtZW50fSDjgajjgZ3jga7jgrXjg5bjgq/jg6njgrnjgafkvb/nlKjjgZXjgozjgb7jgZnjgIJcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgVHdlZW5lciBleHRlbmRzIEFjY2Vzc29yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuabtOaWsOOBmeOCi+aWueazleOCkuaMh+WumuOBl+OBvuOBmeOAgiAgXHJcbiAgICog5aSJ5pu044GZ44KL44GoZHVyYXRpb27jgavjgojjgovmmYLplpPjga7pgLLjgb/mlrnjgYzlpInjgo/jgorjgb7jgZnjgIIgIFxyXG4gICAqIOips+OBl+OBj+OBr3tAbGluayAjVVBEQVRFX01BUH3jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKi9cclxuICAvLyB1cGRhdGVUeXBlID0gJ2RlbHRhJ1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcbiAgICB0aGlzLnVwZGF0ZVR5cGUgPSAnZGVsdGEnO1xyXG5cclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gICAgdGhpcy5fbG9vcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fdGFza3MgPSBbXTtcclxuICAgIHRoaXMuX2luZGV4ID0gMDtcclxuICAgIHRoaXMucGxheWluZyA9IHRydWU7XHJcbiAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtwaGluYS5hcHAuQmFzZUFwcH0gYXBwXHJcbiAgICovXHJcbiAgdXBkYXRlKGFwcCkge1xyXG4gICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB7QGxpbmsgI3VwZGF0ZVR5cGV944KS5aSJ5pu044GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg5pu05paw5pa55rOV44KS6KGo44GZ5paH5a2X5YiXXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNldFVwZGF0ZVR5cGUodHlwZSkge1xyXG4gICAgdGhpcy51cGRhdGVUeXBlID0gdHlwZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcHJvcHPjgafmjIflrprjgZfjgZ/lgKTjgavjgarjgovjgb7jgafjgIFkdXJhdGlvbuOBp+aMh+WumuOBl+OBn+aZgumWk+OCkuOBi+OBkeOBpuOAgeOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogXHJcbiAgICovXHJcbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgIG1vZGU6ICd0bycsXHJcbiAgICAgIHByb3BzOiBwcm9wcyxcclxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4vmmYLjga7lgKTjgahwcm9wc+OBp+aMh+WumuOBl+OBn+WApOOCkuWKoOeul+OBl+OBn+WApOOBq+OBquOCi+OBvuOBp+OAgWR1cmF0aW9u44Gn5oyH5a6a44GX44Gf5pmC6ZaT44KS44GL44GR44Gm44CB44Ki44OL44Oh44O844K344On44Oz44GV44Gb44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBieShwcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgbW9kZTogJ2J5JyxcclxuICAgICAgcHJvcHM6IHByb3BzLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgIGVhc2luZzogZWFzaW5nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBwcm9wc+OBp+aMh+WumuOBl+OBn+WApOOBi+OCieOCouODi+ODoeODvOOCt+ODp+ODs+mWi+Wni+aZguOBruWApOOBq+OBquOCi+OBvuOBp+OAgWR1cmF0aW9u44Gn5oyH5a6a44GX44Gf5pmC6ZaT44KS44GL44GR44Gm44CB44Ki44OL44Oh44O844K344On44Oz44GV44Gb44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIOWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmcm9tKHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAndHdlZW4nLFxyXG4gICAgICBtb2RlOiAnZnJvbScsXHJcbiAgICAgIHByb3BzOiBwcm9wcyxcclxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZfjgZ/mmYLplpPjgYzntYzpgY7jgZnjgovjgb7jgaflvoXmqZ/jgZfjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gdGltZSB3YWl044GZ44KL5pmC6ZaTXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHdhaXQodGltZSkge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3dhaXQnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGltaXQ6IHRpbWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54++5Zyo6Kit5a6a44GV44KM44Gm44GE44KL44Ki44OL44Oh44O844K344On44Oz44GM57WC5LqG44GX44Gf5pmC44Gr5ZG844Gz5Ye644GV44KM44KL6Zai5pWw44KS44K744OD44OI44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyDlkbzjgbPlh7rjgZXjgozjgovplqLmlbBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZiAob3B0aW9uYWwpIGZ1bmPlhoXjgad0aGlz44Gr44GX44Gf44GE44Kq44OW44K444Kn44Kv44OI44CCXHJcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gYXJncyAob3B0aW9uYWwpIGZ1bmPjga7lvJXmlbDjgavjgZfjgZ/jgYTlgKRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgY2FsbChmdW5jLCBzZWxmLCBhcmdzKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAnY2FsbCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmdW5jOiBmdW5jLFxyXG4gICAgICAgIHNlbGY6IHNlbGYgfHwgdGhpcyxcclxuICAgICAgICBhcmdzOiBhcmdzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOePvuWcqOioreWumuOBleOCjOOBpuOBhOOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+aZguOBq+ODl+ODreODkeODhuOCo+OCkuOCu+ODg+ODiOOBl+OBvuOBmeOAgiAgXHJcbiAgICog56ys5LiA5byV5pWw44Gr44Kq44OW44K444Kn44Kv44OI44KS44K744OD44OI44GZ44KL44GT44Go44KC44Gn44GN44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtTdHJpbmcgfCBPYmplY3R9IGtleSB2YWx1ZeOCkuOCu+ODg+ODiOOBmeOCi+ODl+ODreODkeODhuOCo+WQjeOBi+OAgeWkieabtOOBl+OBn+OBhOODl+ODreODkeODhuOCo+OCkmtleeOBqOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAob3B0aW9uYWwpIOOCu+ODg+ODiOOBmeOCi+WApFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgdmFyIHZhbHVlcyA9IG51bGw7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgIHZhbHVlcyA9IHt9O1xyXG4gICAgICB2YWx1ZXNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbHVlcyA9IGtleTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Rhc2tzLnB1c2goe1xyXG4gICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB4LCB544Gr5a++44GX44Gm44CBIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIHksIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgeDogeCwgeTogeSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogeCwgeeOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI2J5fSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIG1vdmVCeSh4LCB5LCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ieSh7IHg6IHgsIHk6IHkgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByb3RhdGlvbuOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI3RvfSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcm90YXRlVG8ocm90YXRpb24sIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgcm90YXRpb246IHJvdGF0aW9uIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiByb3RhdGlvbuOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI2J5fSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcm90YXRlQnkocm90YXRpb24sIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJ5KHsgcm90YXRpb246IHJvdGF0aW9uIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2NhbGVYLCBzY2FsZVnjgavlr77jgZfjgaYge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHNjYWxlWOOBqHNjYWxlWeOBq+ioreWumuOBmeOCi+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzY2FsZVRvKHNjYWxlLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IHNjYWxlWDogc2NhbGUsIHNjYWxlWTogc2NhbGUgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHNjYWxlWCwgc2NhbGVZ44Gr5a++44GX44GmIHtAbGluayAjYnl9IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSBzY2FsZVjjgahzY2FsZVnjgavoqK3lrprjgZnjgovlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2NhbGVCeShzY2FsZSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYnkoeyBzY2FsZVg6IHNjYWxlLCBzY2FsZVk6IHNjYWxlIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWxwaGHjgavlr77jgZfjgaYge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGFscGhh44Gr6Kit5a6a44GZ44KL5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZhZGUodmFsdWUsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRvKHsgYWxwaGE6IHZhbHVlIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWxwaGHjgpIw44Gr44GZ44KL44Ki44OL44Oh44O844K344On44Oz44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZhZGVPdXQoZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmFkZSgwLjAsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWxwaGHjgpIx44Gr44GZ44KL44Ki44OL44Oh44O844K344On44Oz44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGZhZGVJbihkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mYWRlKDEuMCwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4tcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcGxheSgpIHtcclxuICAgIHRoaXMucGxheWluZyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuS4gOaZguWBnOatolxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLlgZzmraLjgZfjgIHmnIDliJ3jgb7jgaflt7vjgY3miLvjgZfjgb7jgZnjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXdpbmQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS5be744GN5oi744GZXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHJld2luZCgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHlveW8oKSB7XHJcbiAgICAvLyBUT0RPOiDmnIDliJ3jga7lgKTjgYzliIbjgYvjgonjgarjgYTjga7jgaflj43ou6LjgafjgY3jgarjgYQuLi5cclxuICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICB0aGlzLl90YXNrcy5lYWNoKGZ1bmN0aW9uKHRhc2spIHtcclxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ3R3ZWVuJykgO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBsYXkoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+ioreWumlxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzZXRMb29wKGZsYWcpIHtcclxuICAgIHRoaXMuX2xvb3AgPSBmbGFnO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLjgq/jg6rjgqJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEpTT07lvaLlvI/jgafjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLoqK3lrprjgZfjgb7jgZnjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGpzb25cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGpzb24ubG9vcCAob3B0aW9uYWwpIOODq+ODvOODl+OBmeOCi+WgtOWQiHRydWVcclxuICAgKiBAcGFyYW0ge0FycmF5W119IGpzb24udHdlZW5zIOioreWumuOBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs1xyXG4gICAqIFxyXG4gICAqIGBgYFxyXG4gICAqIFtcclxuICAgKiAgIFttZXRob2QsIGFyZzEsIGFyZzIsLCxdLFxyXG4gICAqICAgWyd0bycsIHt2YWx1ZTogMTAwfSwgMTAwMCwgJ3N3aW5nJ10sXHJcbiAgICogICBbJ3dhaXQnLCAxMDAwXSxcclxuICAgKiAgIFsnc2V0JywgJ3RleHQnLCAnRU5EJ11cclxuICAgKiBdXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgZnJvbUpTT04oanNvbikge1xyXG4gICAgaWYgKGpzb24ubG9vcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc2V0TG9vcChqc29uLmxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGpzb24udHdlZW5zLmVhY2goZnVuY3Rpb24odCkge1xyXG4gICAgICB0ID0gdC5jbG9uZSgpO1xyXG4gICAgICB2YXIgbWV0aG9kID0gdC5zaGlmdCgpO1xyXG4gICAgICB0aGlzW21ldGhvZF0uYXBwbHkodGhpcywgdCk7XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9hZGQocGFyYW1zKSB7XHJcbiAgICB0aGlzLl90YXNrcy5wdXNoKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVGFzayhhcHApIHtcclxuICAgIGlmICghdGhpcy5wbGF5aW5nKSByZXR1cm4gO1xyXG5cclxuICAgIHZhciB0YXNrID0gdGhpcy5fdGFza3NbdGhpcy5faW5kZXhdO1xyXG4gICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb29wKSB7XHJcbiAgICAgICAgdGhpcy5yZXdpbmQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICsrdGhpcy5faW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhc2sudHlwZSA9PT0gJ3R3ZWVuJykge1xyXG4gICAgICAvLyB0aGlzLl90d2VlbiA9IHBoaW5hLnV0aWwuVHdlZW4oKTtcclxuICAgICAgdGhpcy5fdHdlZW4gPSBuZXcgVHdlZW4oKTtcclxuXHJcbiAgICAgIHZhciBkdXJhdGlvbiA9IHRhc2suZHVyYXRpb24gfHwgdGhpcy5fZ2V0RGVmYXVsdER1cmF0aW9uKCk7XHJcbiAgICAgIGlmICh0YXNrLm1vZGUgPT09ICd0bycpIHtcclxuICAgICAgICB0aGlzLl90d2Vlbi50byh0aGlzLnRhcmdldCwgdGFzay5wcm9wcywgZHVyYXRpb24sIHRhc2suZWFzaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0YXNrLm1vZGUgPT09ICdieScpIHtcclxuICAgICAgICB0aGlzLl90d2Vlbi5ieSh0aGlzLnRhcmdldCwgdGFzay5wcm9wcywgZHVyYXRpb24sIHRhc2suZWFzaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLl90d2Vlbi5mcm9tKHRoaXMudGFyZ2V0LCB0YXNrLnByb3BzLCBkdXJhdGlvbiwgdGFzay5lYXNpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVR3ZWVuO1xyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ3dhaXQnKSB7XHJcbiAgICAgIHRoaXMuX3dhaXQgPSB7XHJcbiAgICAgICAgdGltZTogMCxcclxuICAgICAgICBsaW1pdDogdGFzay5kYXRhLmxpbWl0LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlV2FpdDtcclxuICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT09ICdjYWxsJykge1xyXG4gICAgICB0YXNrLmRhdGEuZnVuYy5hcHBseSh0YXNrLmRhdGEuc2VsZiwgdGFzay5kYXRhLmFyZ3MpO1xyXG4gICAgICAvLyAx44OV44Os44O844Og5raI6LK744GX44Gq44GE44KI44GG5YaN5biwXHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFzay50eXBlID09PSAnc2V0Jykge1xyXG4gICAgICB0aGlzLnRhcmdldC4kZXh0ZW5kKHRhc2suZGF0YS52YWx1ZXMpO1xyXG4gICAgICAvLyAx44OV44Os44O844Og5raI6LK744GX44Gq44GE44KI44GG5YaN5biwXHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVR3ZWVuKGFwcCkge1xyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fdHdlZW47XHJcbiAgICB2YXIgdGltZSA9IHRoaXMuX2dldFVuaXRUaW1lKGFwcCk7XHJcblxyXG4gICAgdHdlZW4uZm9yd2FyZCh0aW1lKTtcclxuICAgIHRoaXMuZmxhcmUoJ3R3ZWVuJyk7XHJcblxyXG4gICAgaWYgKHR3ZWVuLnRpbWUgPj0gdHdlZW4uZHVyYXRpb24pIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX3R3ZWVuO1xyXG4gICAgICB0aGlzLl90d2VlbiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlV2FpdChhcHApIHtcclxuICAgIHZhciB3YWl0ID0gdGhpcy5fd2FpdDtcclxuICAgIHZhciB0aW1lID0gdGhpcy5fZ2V0VW5pdFRpbWUoYXBwKTtcclxuICAgIHdhaXQudGltZSArPSB0aW1lO1xyXG5cclxuICAgIGlmICh3YWl0LnRpbWUgPj0gd2FpdC5saW1pdCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5fd2FpdDtcclxuICAgICAgdGhpcy5fd2FpdCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVRhc2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0VW5pdFRpbWUoYXBwKSB7XHJcbiAgICB2YXIgb2JqID0gVVBEQVRFX01BUFt0aGlzLnVwZGF0ZVR5cGVdO1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqLmZ1bmMoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gMTAwMCAvIGFwcC5mcHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0RGVmYXVsdER1cmF0aW9uKCkge1xyXG4gICAgdmFyIG9iaiA9IFVQREFURV9NQVBbdGhpcy51cGRhdGVUeXBlXTtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLmR1cmF0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc3RhdGljXHJcbiAqIHtAbGluayAjdXBkYXRlVHlwZX3jgavoqK3lrprjgZnjgovmm7TmlrDmlrnms5Xjga7lrprnvqnjgafjgZnjgIJcclxuICog5LiL6KiY44Gu6KGo44Gr5a6a576p5riI44G/44Gu5pu05paw5pa55rOV44KSe0BsaW5rICN1cGRhdGVUeXBlfeOBq+ioreWumuOBmeOCi+OBk+OBqOOBp+OAgVxyXG4gKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7mm7TmlrDmlrnms5XjgpLlpInmm7TjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICogXHJcbiAqIHwg5pu05paw5pa55rOVIHwg5Y2Y5L2NKOODh+ODleOCqeODq+ODiOWApCkgfCAx44OV44Os44O844Og44GC44Gf44KK44Gu44Ki44OL44Oh44O844K344On44Oz6YCf5bqmIHxcclxuICogfC18LXwtfFxyXG4gKiB8IG5vcm1hbCB8IOODn+ODquenkigxMDAwKSB8IGFwcC5mcHPjgavjgojjgaPjgablpInljJYgfFxyXG4gKiB8IGRlbHRhIHwg44Of44Oq56eSKDEwMDApIHwg57WM6YGO5pmC6ZaT44Gr44KI44Gj44Gm5aSJ5YyWIHxcclxuICogfCBmcHMgfCDjg5Xjg6zjg7zjg6AoMzApIHwg5b+F44Ga5ZCM44GY6YCf5bqm44Gn5aSJ5YyWIHxcclxuICovXHJcbnZhciBVUERBVEVfTUFQID0gVHdlZW5lci5VUERBVEVfTUFQID0ge1xyXG4gIG5vcm1hbDoge1xyXG4gICAgZnVuYzogZnVuY3Rpb24oYXBwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwIC8gYXBwLmZwcztcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICB9LFxyXG5cclxuICBkZWx0YToge1xyXG4gICAgZnVuYzogZnVuY3Rpb24oYXBwKSB7XHJcbiAgICAgIHJldHVybiBhcHAudGlja2VyLmRlbHRhVGltZTtcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICB9LFxyXG5cclxuICBmcHM6IHtcclxuICAgIGZ1bmM6IGZ1bmN0aW9uKGFwcCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjogMzAsXHJcbiAgfSxcclxuXHJcbn07XHJcblxyXG4vLyBFbGVtZW505YG044Gn5ouh5by1XHJcbi8vIC8qKlxyXG4vLyAgKiBAbWVtYmVyIHBoaW5hLmFwcC5FbGVtZW50XHJcbi8vICAqIEBwcm9wZXJ0eSB0d2VlbmVyXHJcbi8vICAqIOiHqui6q+OBq+OCouOCv+ODg+ODgea4iOOBv+OBrntAbGluayBwaGluYS5hY2Nlc3NvcnkuVHdlZW5lcn3jgqrjg5bjgrjjgqfjgq/jg4jjgIJcclxuLy8gICovXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS5nZXR0ZXIoJ3R3ZWVuZXInLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX3R3ZWVuZXIpIHtcclxuLy8gICAgIHRoaXMuX3R3ZWVuZXIgPSBwaGluYS5hY2Nlc3NvcnkuVHdlZW5lcigpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fdHdlZW5lcjtcclxuLy8gfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLkVsZW1lbnRcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICogIyDkuLvjgavopoHntKDjga7opqrlrZDplqLkv4LjgpLmibHjgYbjgq/jg6njgrlcclxuICog5Li744Gr6Kaq5a2Q6Zai5L+C562J44KS5a6a576p44GZ44KL44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHBhcmVudFxyXG4gICAqIOimquimgee0oFxyXG4gICAqL1xyXG4gIC8vIHBhcmVudCA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBjaGlsZHJlblxyXG4gICAqIOWtkOimgee0oFxyXG4gICAqL1xyXG4gIC8vIGNoaWxkcmVuID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IGF3YWtlXHJcbiAgICog5pyJ5Yq544GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgLy8gYXdha2UgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRDaGlsZFxyXG4gICAqIOiHqui6q+OBq+WtkOimgee0oOOCkui/veWKoOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog6Ieq6Lqr44KS5a2Q6KaB57Sg44Go44GX44Gm5byV5pWw44Gn5oyH5a6a44GX44Gf6KaB57Sg44Gr6L+95Yqg44GZ44KL44Gr44GvIHtAbGluayAjYWRkQ2hpbGRUb30g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg6L+95Yqg44GZ44KL5a2Q6KaB57SgXHJcbiAgICovXHJcbiAgYWRkQ2hpbGQoY2hpbGQpIHtcclxuICAgIGlmIChjaGlsZC5wYXJlbnQpIGNoaWxkLnJlbW92ZSgpO1xyXG5cclxuICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cclxuICAgIGNoaWxkLmhhcygnYWRkZWQnKSAmJiBjaGlsZC5mbGFyZSgnYWRkZWQnKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZENoaWxkVG9cclxuICAgKiDoh6rouqvjgpLlrZDopoHntKDjgajjgZfjgablvJXmlbDjgafmjIflrprjgZfjgZ/opoHntKDjgavov73liqDjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOiHqui6q+OBq+WtkOimgee0oOOCkui/veWKoOOBmeOCi+OBq+OBryB7QGxpbmsgI2FkZENoaWxkfSDjgpLkvb/nlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnQg6Ieq6Lqr44KS5a2Q6KaB57Sg44Go44GX44Gm6L+95Yqg44GZ44KL6KaB57SgXHJcbiAgICovXHJcbiAgYWRkQ2hpbGRUbyhwYXJlbnQpIHtcclxuICAgIHBhcmVudC5hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkQ2hpbGRBdFxyXG4gICAqIOiHqui6q+OCkuOAgeaMh+WumuOBl+OBn+imgee0oOOBruWtkOimgee0oOOBruS7u+aEj+OBrumFjeWIl+OCpOODs+ODh+ODg+OCr+OCueOBq+i/veWKoOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOi/veWKoOOBmeOCi+WtkOimgee0oFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7dcclxuICAgKi9cclxuICBhZGRDaGlsZEF0KGNoaWxkLCBpbmRleCkge1xyXG4gICAgaWYgKGNoaWxkLnBhcmVudCkgY2hpbGQucmVtb3ZlKCk7XHJcblxyXG4gICAgY2hpbGQucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XHJcblxyXG4gICAgY2hpbGQuaGFzKCdhZGRlZCcpICYmIGNoaWxkLmZsYXJlKCdhZGRlZCcpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q2hpbGRBdFxyXG4gICAqIOaMh+WumuOBl+OBn+OCpOODs+ODh+ODg+OCr+OCueOBruWtkOimgee0oOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOOCpOODs+ODh+ODg+OCr+OCueeVquWPt1xyXG4gICAqIEByZXR1cm4ge09iamVjdH0g5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu5a2Q6KaB57SgXHJcbiAgICovXHJcbiAgZ2V0Q2hpbGRBdChpbmRleCkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuY2hpbGRyZW4uYXQoaW5kZXgpO1xyXG4gICAgcmV0dXJuIGF0LmNhbGwodGhpcy5jaGlsZHJlbiwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRDaGlsZEJ5TmFtZVxyXG4gICAqIOaMh+WumuOBl+OBn+WQjeWJjeOBruWtkOimgee0oOOCkui/lOOBl+OBvuOBmeOAgu+8iOacquWun+ijhe+8iVxyXG4gICAqL1xyXG4gIGdldENoaWxkQnlOYW1lKG5hbWUpIHtcclxuICAgIC8vIFRPRE86XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENoaWxkSW5kZXhcclxuICAgKiDmjIflrprjgZfjgZ/lrZDopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZCDlrZDopoHntKBcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOaMh+WumuOBl+OBn+WtkOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt1xyXG4gICAqL1xyXG4gIGdldENoaWxkSW5kZXgoY2hpbGQpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRQYXJlbnRcclxuICAgKiDmjIflrprjgZfjgZ/opoHntKDjga7opqropoHntKDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g5oyH5a6a44GX44Gf6KaB57Sg44Gu6Kaq6KaB57SgXHJcbiAgICovXHJcbiAgZ2V0UGFyZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRSb290XHJcbiAgICog5oyH5a6a44GX44Gf6KaB57Sg44Gu6ZqO5bGk44OE44Oq44O844Gu44Or44O844OI44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOaMh+WumuOBl+OBn+imgee0oOOBrumajuWxpOODhOODquODvOOBruODq+ODvOODiFxyXG4gICAqL1xyXG4gIGdldFJvb3QoKSB7XHJcbiAgICB2YXIgZWxtID0gdGhpcztcclxuICAgIGZvciAoZWxtPXRoaXMucGFyZW50OyBlbG0ucGFyZW50ICE9IG51bGw7IGVsbSA9IGVsbS5wYXJlbnQpIHtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByZW1vdmVDaGlsZFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDmjIflrprjgZfjgZ/opoHntKDjgpLoh6rouqvjga7lrZDopoHntKDjgYvjgonliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZCDopoHntKBcclxuICAgKi9cclxuICByZW1vdmVDaGlsZChjaGlsZCkge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBjaGlsZC5oYXMoJ3JlbW92ZWQnKSAmJiBjaGlsZC5mbGFyZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJlbW92ZVxyXG4gICAqIOiHqui6q+OCkuimquimgee0oOOBruWtkOimgee0oOOBi+OCieWJiumZpOOBl+OBvuOBmeOAglxyXG4gICAqL1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybiA7XHJcblxyXG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGlzQXdha2VcclxuICAgKiDoh6rouqvjgYzmnInlirnjgYvjganjgYbjgYvjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOacieWKueOBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGlzQXdha2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hd2FrZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgd2FrZVVwXHJcbiAgICog6Ieq6Lqr44KS5pyJ5Yq544Gr44GX44G+44GZ44CCXHJcbiAgICovXHJcbiAgd2FrZVVwKCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2xlZXBcclxuICAgKiDoh6rouqvjgpLnhKHlirnjgavjgZfjgb7jgZnjgIJcclxuICAgKi9cclxuICBzbGVlcCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmcm9tSlNPTlxyXG4gICAqIEpTT04g5b2i5byP44KS5L2/44Gj44Gm6Ieq6Lqr44Gr5a2Q6KaB57Sg44KS6L+95Yqg44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICogICAgICAgIFwiY2hpbGRyZW5cIjoge1xyXG4gICAqICAgICAgICAgIFwibGFiZWxcIjogeyAgICAgICAgICAgICAgICAgIC8v44Kt44O85ZCN44GM6L+95Yqg44GZ44KL5a2Q6KaB57Sg44Gu5ZCN5YmN44Gr44Gq44KLXHJcbiAgICogICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcIkxhYmVsXCIsICAgICAvL+OCr+ODqeOCuVxyXG4gICAqICAgICAgICAgICAgXCJhcmd1bWVudHNcIjogWydoZWxsbyEnXSwgIC8v5Yid5pyf5YyW5pmC44Gu5byV5pWwXHJcbiAgICogICAgICAgICAgICBcInhcIjozMjAsICAgICAgICAgICAgICAgICAgLy/jgZ3jga7ku5bjg5fjg63jg5Hjg4bjgqNcclxuICAgKiAgICAgICAgICAgIFwieVwiOjQ4MCxcclxuICAgKiAgICAgICAgICB9LFxyXG4gICAqICAgICAgICB9LFxyXG4gICAqICAgICAgfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0pTT059IGpzb24gSlNPTiDlvaLlvI9cclxuICAgKi9cclxuICBmcm9tSlNPTihqc29uKSB7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNoaWxkcmVuID0gZnVuY3Rpb24obmFtZSwgZGF0YSkge1xyXG4gICAgICB2YXIgYXJncyA9IGRhdGEuYXJndW1lbnRzO1xyXG4gICAgICBhcmdzID0gKGFyZ3MgaW5zdGFuY2VvZiBBcnJheSkgPyBhcmdzIDogW2FyZ3NdO1xyXG5cclxuICAgICAgdmFyIF9jbGFzcztcclxuICAgICAgdmFyIGVsZW1lbnQ7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gaXMgcGhpbmEgY2xhc3NcclxuICAgICAgICBfY2xhc3MgPSBwaGluYSQxLnVzaW5nKGRhdGEuY2xhc3NOYW1lKTtcclxuICAgICAgICBlbGVtZW50ID0gX2NsYXNzLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLmNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIGlzIEVTIGNsYXNzXHJcbiAgICAgICAgLy8g44Kk44Oz44K544K/44Oz44K55YyW44Gr44K544OX44Os44OD44OJ5qeL5paH44GM5b+F6KaB44Gq44Gf44KB44CBZXM144K144Od44O844OI44Gu5aC05ZCIYmFiZWzjgYzlv4XopoFcclxuICAgICAgICBlbGVtZW50ID0gbmV3IGRhdGEuY2xhc3NOYW1lKC4uLmFyZ3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzW25hbWVdID0gZWxlbWVudDtcclxuXHJcbiAgICAgIGVsZW1lbnQuZnJvbUpTT04oZGF0YSk7XHJcbiAgICAgIGVsZW1lbnQuYWRkQ2hpbGRUbyh0aGlzKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBmb3JJbi5jYWxsKGpzb24sIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vIGpzb24uZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICBpZiAoa2V5ID09PSAnY2hpbGRyZW4nKSB7XHJcbiAgICAgICAgZm9ySW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24obmFtZSwgZGF0YSkge1xyXG4gICAgICAgIC8vIHZhbHVlLmZvckluKGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuICAgICAgICAgIGNyZWF0ZUNoaWxkcmVuKG5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChrZXkgIT09ICd0eXBlJyAmJiBrZXkgIT09ICdjbGFzc05hbWUnKSB7XHJcbiAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b0pTT05cclxuICAgKiDoh6rouqvjga7lrZDopoHntKDjgpIgSlNPTiDlvaLlvI/jgafov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0pTT059IEpTT07lvaLlvI9cclxuICAgKi9cclxuICB0b0pTT04oKSB7XHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBoaW5hJDEudXNpbmcodGhpcy5jbGFzc05hbWUpLmRlZmF1bHRzIHx8IHt9KTtcclxuXHJcbiAgICB0aGlzLl9oaWVyYXJjaGllcy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGQgPSBlLmRlZmF1bHRzO1xyXG4gICAgICBpZiAoZCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGQpLmZvckVhY2goZnVuY3Rpb24oaykge1xyXG4gICAgICAgICAgaWYgKGtleXMuaW5kZXhPZihrKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBrZXlzLnB1c2goJ25hbWUnLCAnY2xhc3NOYW1lJyk7XHJcblxyXG4gICAgdmFyIGpzb24gPSB7fTtcclxuICAgIC8vIGtleXMuZWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAganNvbltrZXldID0gdGhpc1trZXldO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkLnRvSlNPTigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICBqc29uLmNoaWxkcmVuID0ge307XHJcbiAgICAgIC8vIGNoaWxkcmVuLmVhY2goZnVuY3Rpb24oY2hpbGQsIGkpIHtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCwgaSkge1xyXG4gICAgICAgIGpzb24uY2hpbGRyZW5bY2hpbGQubmFtZSB8fCAoY2hpbGQuY2xhc3NOYW1lICsgJ18nICsgaSldID0gY2hpbGQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWNjZXNzb3J544KS5LuY5LiO44GZ44KLXHJcbiAgICogQHBhcmFtICB7QWNjZXNzb3J5fSBBY2Nlc3Nvcnnntpnmib/jgq/jg6njgrlcclxuICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAqL1xyXG4gIGF0dGFjaChhY2Nlc3NvcnkpIHtcclxuICAgIGlmICghdGhpcy5hY2Nlc3Nvcmllcykge1xyXG4gICAgICB0aGlzLmFjY2Vzc29yaWVzID0gW107XHJcbiAgICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3Nvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGFjY2Vzc29yeSkge1xyXG4gICAgICAgICAgYWNjZXNzb3J5LnVwZGF0ZSAmJiBhY2Nlc3NvcnkudXBkYXRlKGUuYXBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY2Nlc3Nvcmllcy5wdXNoKGFjY2Vzc29yeSk7XHJcbiAgICBhY2Nlc3Nvcnkuc2V0VGFyZ2V0KHRoaXMpO1xyXG4gICAgYWNjZXNzb3J5LmZsYXJlKCdhdHRhY2hlZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWNjZXNzb3J544KS5YmK6ZmkXHJcbiAgICogQHBhcmFtICB7QWNjZXNzb3J5fSBBY2Nlc3Nvcnnntpnmib/jgq/jg6njgrlcclxuICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAqL1xyXG4gIGRldGFjaChhY2Nlc3NvcnkpIHtcclxuICAgIGlmICh0aGlzLmFjY2Vzc29yaWVzKSB7XHJcbiAgICAgIC8vIHRoaXMuYWNjZXNzb3JpZXMuZXJhc2UoYWNjZXNzb3J5KTtcclxuICAgICAgZXJhc2UuY2FsbCh0aGlzLmFjY2Vzc29yaWVzLCBhY2Nlc3NvcnkpO1xyXG4gICAgICBhY2Nlc3Nvcnkuc2V0VGFyZ2V0KG51bGwpO1xyXG4gICAgICBhY2Nlc3NvcnkuZmxhcmUoJ2RldGFjaGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgdHdlZW5lcigpIHtcclxuICAgIGlmICghdGhpcy5fdHdlZW5lcikge1xyXG4gICAgICB0aGlzLl90d2VlbmVyID0gbmV3IFR3ZWVuZXIoKS5hdHRhY2hUbyh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl90d2VlbmVyO1xyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5TY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuRWxlbWVudFxyXG4gKi9cclxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZXhpdChuZXh0TGFiZWwsIG5leHRBcmd1bWVudHMpIHtcclxuICAgIGlmICghdGhpcy5hcHApIHJldHVybiA7XHJcblxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG5leHRMYWJlbCA9IGFyZ3VtZW50c1swXS5uZXh0TGFiZWwgfHwgdGhpcy5uZXh0TGFiZWw7XHJcbiAgICAgICAgbmV4dEFyZ3VtZW50cyA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5uZXh0TGFiZWwgPSBuZXh0TGFiZWw7XHJcbiAgICAgIHRoaXMubmV4dEFyZ3VtZW50cyA9IG5leHRBcmd1bWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHAucG9wU2NlbmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLkJhc2VBcHBcclxuICog44OZ44O844K544Go44Gq44KL44Ki44OX44Oq44Kx44O844K344On44Oz44Kv44Op44K5XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBCYXNlQXBwIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLy8gLyoqIGF3YWtlICovXHJcbiAgLy8gYXdha2UgPSBudWxsXHJcbiAgLy8gLyoqIGZwcyAqL1xyXG4gIC8vIGZwcyA9IG51bGxcclxuICAvLyAvKiogZnJhbWUgKi9cclxuICAvLyBmcmFtZSA9IG51bGxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fc2NlbmVzID0gW25ldyBTY2VuZSgpXTtcclxuICAgIHRoaXMuX3NjZW5lSW5kZXggPSAwO1xyXG5cclxuICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKHRoaXMpO1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IG5ldyBJbnRlcmFjdGl2ZSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmF3YWtlID0gdHJ1ZTtcclxuICAgIHRoaXMudGlja2VyID0gbmV3IFRpY2tlcigpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5fbG9vcENhbGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLl9sb29wKCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy50aWNrZXIudGljayh0aGlzLl9sb29wQ2FsbGVyKTtcclxuXHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAga2lsbCgpIHtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgIHRoaXMudGlja2VyLnVudGljayh0aGlzLl9sb29wQ2FsbGVyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZVNjZW5lKHNjZW5lKSB7XHJcbiAgICB0aGlzLmZsYXJlKCdyZXBsYWNlJyk7XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2VzY2VuZScpO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmFwcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuYXBwID0gdGhpcztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdlbnRlcicsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdXNoU2NlbmUoc2NlbmUpIHtcclxuICAgIHRoaXMuZmxhcmUoJ3B1c2gnKTtcclxuICAgIHRoaXMuZmxhcmUoJ2NoYW5nZXNjZW5lJyk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ3BhdXNlJywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9zY2VuZXMucHVzaChzY2VuZSk7XHJcbiAgICArK3RoaXMuX3NjZW5lSW5kZXg7XHJcblxyXG4gICAgdGhpcy5mbGFyZSgncHVzaGVkJyk7XHJcblxyXG4gICAgc2NlbmUuYXBwID0gdGhpcztcclxuICAgIHNjZW5lLmZsYXJlKCdlbnRlcicsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7PjgpLjg53jg4Pjg5fjgZnjgoso44Od44O844K644KE44Kq44OW44K344On44Oz55S76Z2i44Gq44Gp44Gn5L2/55SoKVxyXG4gICAqL1xyXG4gIHBvcFNjZW5lKCkge1xyXG4gICAgdGhpcy5mbGFyZSgncG9wJyk7XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2VzY2VuZScpO1xyXG5cclxuICAgIHZhciBzY2VuZSA9IHRoaXMuX3NjZW5lcy5wb3AoKTtcclxuICAgIC0tdGhpcy5fc2NlbmVJbmRleDtcclxuXHJcbiAgICBzY2VuZS5mbGFyZSgnZXhpdCcsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcbiAgICBzY2VuZS5hcHAgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZmxhcmUoJ3BvcGVkJyk7XHJcblxyXG4gICAgLy9cclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdyZXN1bWUnLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgICAgcHJldlNjZW5lOiBzY2VuZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzY2VuZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+OBrnVwZGF0ZeOCkuWun+ihjOOBmeOCi+OCiOOBhuOBq+OBmeOCi1xyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7Pjga51cGRhdGXjgpLlrp/ooYzjgZfjgarjgYTjgojjgYbjgavjgZnjgotcclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5hd2FrZSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlU3RhdHMoKSB7XHJcbiAgICBpZiAocGhpbmEkMS5nbG9iYWwuU3RhdHMpIHtcclxuICAgICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKFwibm90IGRlZmluZWQgc3RhdHMuXCIpO1xyXG4gICAgICB2YXIgU1RBVFNfVVJMID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3N0YXRzLmpzL3IxNC9TdGF0cy5qcyc7XHJcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0LnNyYyA9IFNUQVRTX1VSTDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVTdGF0cygpO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGVuYWJsZURhdEdVSShjYWxsYmFjaykge1xyXG4gICAgaWYgKHBoaW5hJDEuZ2xvYmFsLmRhdCkge1xyXG4gICAgICB2YXIgZ3VpID0gbmV3IHBoaW5hJDEuZ2xvYmFsLmRhdC5HVUkoKTtcclxuICAgICAgY2FsbGJhY2soZ3VpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLndhcm4oXCJub3QgZGVmaW5lZCBkYXQuR1VJLlwiKTtcclxuICAgICAgdmFyIFVSTCA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kYXQtZ3VpLzAuNS4xL2RhdC5ndWkuanMnO1xyXG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBVUkw7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBndWkgPSBuZXcgcGhpbmEkMS5nbG9iYWwuZGF0LkdVSSgpO1xyXG4gICAgICAgIGNhbGxiYWNrKGd1aSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2xvb3AoKSB7XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUuY2hlY2sodGhpcy5jdXJyZW50U2NlbmUpO1xyXG4gICAgdGhpcy5fZHJhdygpO1xyXG5cclxuICAgIC8vIHN0YXRzIHVwZGF0ZVxyXG4gICAgaWYgKHRoaXMuc3RhdHMpIHRoaXMuc3RhdHMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuYXdha2UpIHtcclxuICAgICAgLy8g44Ko44Oz44K/44O844OV44Os44O844Og44Kk44OZ44Oz44OIXHJcbiAgICAgIGlmICh0aGlzLmhhcygnZW50ZXJmcmFtZScpKSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZW50ZXJmcmFtZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSAmJiB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZXIudXBkYXRlKHRoaXMuY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaPj+eUu+eUqOS7ruaDs+mWouaVsFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2RyYXcoKSB7fVxyXG5cclxuICBnZXQgY3VycmVudFNjZW5lKCkgICB7IHJldHVybiB0aGlzLl9zY2VuZXNbdGhpcy5fc2NlbmVJbmRleF07IH1cclxuICBzZXQgY3VycmVudFNjZW5lKHYpICB7IHRoaXMuX3NjZW5lc1t0aGlzLl9zY2VuZUluZGV4XSA9IHY7IH1cclxuXHJcbiAgZ2V0IHJvb3RTY2VuZSgpICAgeyByZXR1cm4gdGhpcy5fc2NlbmVzWzBdOyB9XHJcbiAgc2V0IHJvb3RTY2VuZSh2KSAgeyB0aGlzLl9zY2VuZXNbMF0gPSB2OyB9XHJcblxyXG4gIGdldCBmcmFtZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmZyYW1lOyB9XHJcbiAgc2V0IGZyYW1lKHYpIHsgdGhpcy50aWNrZXIuZnJhbWUgPSB2OyB9XHJcblxyXG4gIGdldCBmcHMoKSB7IHJldHVybiB0aGlzLnRpY2tlci5mcHM7IH1cclxuICBzZXQgZnBzKHYpIHsgdGhpcy50aWNrZXIuZnBzID0gdjsgfVxyXG5cclxuICBnZXQgZGVsdGFUaW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuZGVsdGFUaW1lOyB9XHJcblxyXG4gIGdldCBlbGFwc2VkVGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmVsYXBzZWRUaW1lOyB9XHJcblxyXG4gIGdldCBjdXJyZW50VGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmN1cnJlbnRUaW1lOyB9XHJcblxyXG4gIGdldCBzdGFydFRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5zdGFydFRpbWU7IH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuT2JqZWN0MkRcclxuICogT2JqZWN0MkRcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLkVsZW1lbnRcclxuICovXHJcbmNsYXNzIE9iamVjdDJEIGV4dGVuZHMgRWxlbWVudCB7XHJcblxyXG4gIC8vIC8qKiDkvY3nva4gKi9cclxuICAvLyBwb3NpdGlvbjogbnVsbCxcclxuICAvLyAvKiog5Zue6LuiICovXHJcbiAgLy8gcm90YXRpb246IDAsXHJcbiAgLy8gLyoqIOOCueOCseODvOODqyAqL1xyXG4gIC8vIHNjYWxlOiBudWxsLFxyXG4gIC8vIC8qKiDln7rmupbkvY3nva4gKi9cclxuICAvLyBvcmlnaW46IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIE9iamVjdDJELmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHBoaW5hLmFwcC5PYmplY3QyRC5kZWZhdWx0cyk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyKG9wdGlvbnMueCwgb3B0aW9ucy55KTtcclxuICAgIHRoaXMuc2NhbGUgICAgPSBuZXcgVmVjdG9yMihvcHRpb25zLnNjYWxlWCwgb3B0aW9ucy5zY2FsZVkpO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IG9wdGlvbnMucm90YXRpb247XHJcbiAgICB0aGlzLm9yaWdpbiAgID0gbmV3IFZlY3RvcjIob3B0aW9ucy5vcmlnaW5YLCBvcHRpb25zLm9yaWdpblkpO1xyXG5cclxuICAgIHRoaXMuX21hdHJpeCA9IG5ldyBNYXRyaXgzMygpLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLl93b3JsZE1hdHJpeCA9IG5ldyBNYXRyaXgzMygpLmlkZW50aXR5KCk7XHJcblxyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fb3ZlckZsYWdzID0ge307XHJcbiAgICB0aGlzLl90b3VjaEZsYWdzID0ge307XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcclxuICAgIHRoaXMuYm91bmRpbmdUeXBlID0gb3B0aW9ucy5ib3VuZGluZ1R5cGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDngrnjgajooZ3nqoHjgZfjgabjgYTjgovjgYvjgpLliKTlrppcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgaGl0VGVzdCh4LCB5KSB7XHJcbiAgICBpZiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0Jykge1xyXG4gICAgICByZXR1cm4gdGhpcy5oaXRUZXN0UmVjdCh4LCB5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYm91bmRpbmdUeXBlID09PSAnY2lyY2xlJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5oaXRUZXN0Q2lyY2xlKHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIG5vbmUg44Gu5aC05ZCIXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGl0VGVzdFJlY3QoeCwgeSkge1xyXG4gICAgdmFyIHAgPSB0aGlzLmdsb2JhbFRvTG9jYWwobmV3IFZlY3RvcjIoeCwgeSkpO1xyXG5cclxuICAgIHZhciBsZWZ0ICAgPSAtdGhpcy53aWR0aCp0aGlzLm9yaWdpblg7XHJcbiAgICB2YXIgcmlnaHQgID0gK3RoaXMud2lkdGgqKDEtdGhpcy5vcmlnaW5YKTtcclxuICAgIHZhciB0b3AgICAgPSAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZO1xyXG4gICAgdmFyIGJvdHRvbSA9ICt0aGlzLmhlaWdodCooMS10aGlzLm9yaWdpblkpO1xyXG5cclxuICAgIHJldHVybiAoIGxlZnQgPCBwLnggJiYgcC54IDwgcmlnaHQgKSAmJiAoIHRvcCAgPCBwLnkgJiYgcC55IDwgYm90dG9tICk7XHJcbiAgfVxyXG5cclxuICBoaXRUZXN0Q2lyY2xlKHgsIHkpIHtcclxuICAgIC8vIOWGhuWIpOWumlxyXG4gICAgdmFyIHAgPSB0aGlzLmdsb2JhbFRvTG9jYWwobmV3IFZlY3RvcjIoeCwgeSkpO1xyXG4gICAgaWYgKCgocC54KSoocC54KSsocC55KSoocC55KSkgPCAodGhpcy5yYWRpdXMqdGhpcy5yYWRpdXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDopoHntKDjgajooZ3nqoHjgZfjgabjgYTjgovjgYvjgpLliKTlrppcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxtXHJcbiAgICovXHJcbiAgaGl0VGVzdEVsZW1lbnQoZWxtKSB7XHJcbiAgICB2YXIgcmVjdDAgPSB0aGlzO1xyXG4gICAgdmFyIHJlY3QxID0gZWxtO1xyXG4gICAgcmV0dXJuIChyZWN0MC5sZWZ0IDwgcmVjdDEucmlnaHQpICYmIChyZWN0MC5yaWdodCA+IHJlY3QxLmxlZnQpICYmXHJcbiAgICAgICAgICAgKHJlY3QwLnRvcCA8IHJlY3QxLmJvdHRvbSkgJiYgKHJlY3QwLmJvdHRvbSA+IHJlY3QxLnRvcCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2xvYmFsVG9Mb2NhbChwKSB7XHJcbiAgICB2YXIgbWF0cml4ID0gdGhpcy5fd29ybGRNYXRyaXguY2xvbmUoKTtcclxuICAgIG1hdHJpeC5pbnZlcnQoKTtcclxuICAgIC8vIG1hdHJpeC50cmFuc3Bvc2UoKTtcclxuXHJcbiAgICB2YXIgdGVtcCA9IG1hdHJpeC5tdWx0aXBseVZlY3RvcjIocCk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcmFjdGl2ZShmbGFnLCB0eXBlKSB7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmxhZztcclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgIHRoaXMuYm91bmRpbmdUeXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFgg5bqn5qiZ5YCk44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKi9cclxuICBzZXRYKHgpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogWSDluqfmqJnlgKTjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIHNldFkoeSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBYWSDluqfmqJnjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWbnui7ouOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3RhdGlvblxyXG4gICAqL1xyXG4gIHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCueOCseODvOODq+OCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRTY2FsZSh4LCB5KSB7XHJcbiAgICB0aGlzLnNjYWxlLnggPSB4O1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIHRoaXMuc2NhbGUueSA9IHg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2NhbGUueSA9IHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Z+65rqW54K544KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIHNldE9yaWdpbih4LCB5KSB7XHJcbiAgICB0aGlzLm9yaWdpbi54ID0geDtcclxuICAgIHRoaXMub3JpZ2luLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOW5heOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxyXG4gICAqL1xyXG4gIHNldFdpZHRoKHdpZHRoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog6auY44GV44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldEhlaWdodChoZWlnaHQpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCteOCpOOCuijluYUsIOmrmOOBlSnjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XHJcbiAgICovXHJcbiAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoICA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEJvdW5kaW5nVHlwZSh0eXBlKSB7XHJcbiAgICB0aGlzLmJvdW5kaW5nVHlwZSA9IHR5cGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgbW92ZUJ5KHgsIHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCArPSB4O1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9jYWxjV29ybGRNYXRyaXgoKSB7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gO1xyXG5cclxuICAgIC8vIGNhY2hlIGNoZWNrXHJcbiAgICBpZiAodGhpcy5yb3RhdGlvbiAhPSB0aGlzLl9jYWNoZWRSb3RhdGlvbikge1xyXG4gICAgICB0aGlzLl9jYWNoZWRSb3RhdGlvbiA9IHRoaXMucm90YXRpb247XHJcblxyXG4gICAgICB2YXIgciA9IHRoaXMucm90YXRpb24qKE1hdGguUEkvMTgwKTtcclxuICAgICAgdGhpcy5fc3IgPSBNYXRoLnNpbihyKTtcclxuICAgICAgdGhpcy5fY3IgPSBNYXRoLmNvcyhyKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9jYWwgPSB0aGlzLl9tYXRyaXg7XHJcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQuX3dvcmxkTWF0cml4IHx8IE1hdHJpeDMzLklERU5USVRZO1xyXG4gICAgdmFyIHdvcmxkID0gdGhpcy5fd29ybGRNYXRyaXg7XHJcblxyXG4gICAgLy8g44Ot44O844Kr44Or44Gu6KGM5YiX44KS6KiI566XXHJcbiAgICBsb2NhbC5tMDAgPSB0aGlzLl9jciAqIHRoaXMuc2NhbGUueDtcclxuICAgIGxvY2FsLm0wMSA9LXRoaXMuX3NyICogdGhpcy5zY2FsZS55O1xyXG4gICAgbG9jYWwubTEwID0gdGhpcy5fc3IgKiB0aGlzLnNjYWxlLng7XHJcbiAgICBsb2NhbC5tMTEgPSB0aGlzLl9jciAqIHRoaXMuc2NhbGUueTtcclxuICAgIGxvY2FsLm0wMiA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgIGxvY2FsLm0xMiA9IHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAvLyBjYWNoZVxyXG4gICAgdmFyIGEwMCA9IGxvY2FsLm0wMDsgdmFyIGEwMSA9IGxvY2FsLm0wMTsgdmFyIGEwMiA9IGxvY2FsLm0wMjtcclxuICAgIHZhciBhMTAgPSBsb2NhbC5tMTA7IHZhciBhMTEgPSBsb2NhbC5tMTE7IHZhciBhMTIgPSBsb2NhbC5tMTI7XHJcbiAgICB2YXIgYjAwID0gcGFyZW50Lm0wMDsgdmFyIGIwMSA9IHBhcmVudC5tMDE7IHZhciBiMDIgPSBwYXJlbnQubTAyO1xyXG4gICAgdmFyIGIxMCA9IHBhcmVudC5tMTA7IHZhciBiMTEgPSBwYXJlbnQubTExOyB2YXIgYjEyID0gcGFyZW50Lm0xMjtcclxuXHJcbiAgICAvLyDopqrjga7ooYzliJfjgajmjpvjgZHlkIjjgo/jgZvjgotcclxuICAgIHdvcmxkLm0wMCA9IGIwMCAqIGEwMCArIGIwMSAqIGExMDtcclxuICAgIHdvcmxkLm0wMSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMTtcclxuICAgIHdvcmxkLm0wMiA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMjtcclxuXHJcbiAgICB3b3JsZC5tMTAgPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTA7XHJcbiAgICB3b3JsZC5tMTEgPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTE7XHJcbiAgICB3b3JsZC5tMTIgPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgeFxyXG4gICAqIHjluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgeCgpICAgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi54OyB9XHJcbiAgc2V0IHgodikgIHsgdGhpcy5wb3NpdGlvbi54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgeVxyXG4gICAqIHnluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgeSgpICAgeyByZXR1cm4gdGhpcy5wb3NpdGlvbi55OyB9XHJcbiAgc2V0IHkodikgIHsgdGhpcy5wb3NpdGlvbi55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgb3JpZ2luWFxyXG4gICAqIHjluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgb3JpZ2luWCgpICAgeyByZXR1cm4gdGhpcy5vcmlnaW4ueDsgfVxyXG4gIHNldCBvcmlnaW5YKHYpICB7IHRoaXMub3JpZ2luLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBvcmlnaW5ZXHJcbiAgICogeeW6p+aomeWApFxyXG4gICAqL1xyXG4gIGdldCBvcmlnaW5ZKCkgICB7IHJldHVybiB0aGlzLm9yaWdpbi55OyB9XHJcbiAgc2V0IG9yaWdpblkodikgIHsgdGhpcy5vcmlnaW4ueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHNjYWxlWFxyXG4gICAqIOOCueOCseODvOODq1jlgKRcclxuICAgKi9cclxuICBnZXQgc2NhbGVYKCkgICB7IHJldHVybiB0aGlzLnNjYWxlLng7IH1cclxuICBzZXQgc2NhbGVYKHYpICB7IHRoaXMuc2NhbGUueCA9IHY7IH1cclxuICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgc2NhbGVZXHJcbiAgICog44K544Kx44O844OrWeWApFxyXG4gICAqL1xyXG4gIGdldCBzY2FsZVkoKSAgIHsgcmV0dXJuIHRoaXMuc2NhbGUueTsgfVxyXG4gIHNldCBzY2FsZVkodikgIHsgdGhpcy5zY2FsZS55ID0gdjsgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB3aWR0aFxyXG4gICAqIHdpZHRoXHJcbiAgICovXHJcbiAgZ2V0IHdpZHRoKCkgICB7XHJcbiAgICByZXR1cm4gKHRoaXMuYm91bmRpbmdUeXBlID09PSAncmVjdCcpID9cclxuICAgICAgdGhpcy5fd2lkdGggOiB0aGlzLl9kaWFtZXRlcjtcclxuICB9XHJcbiAgc2V0IHdpZHRoKHYpICB7IHRoaXMuX3dpZHRoID0gdjsgfVxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBoZWlnaHRcclxuICAgKiBoZWlnaHRcclxuICAgKi9cclxuICBnZXQgaGVpZ2h0KCkgICB7XHJcbiAgICByZXR1cm4gKHRoaXMuYm91bmRpbmdUeXBlID09PSAncmVjdCcpID9cclxuICAgICAgdGhpcy5faGVpZ2h0IDogdGhpcy5fZGlhbWV0ZXI7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodikgIHsgdGhpcy5faGVpZ2h0ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgcmFkaXVzXHJcbiAgICog5Y2K5b6EXHJcbiAgICovXHJcbiAgZ2V0IHJhZGl1cygpICAge1xyXG4gICAgcmV0dXJuICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSA/XHJcbiAgICAgICh0aGlzLndpZHRoK3RoaXMuaGVpZ2h0KS80IDogdGhpcy5fcmFkaXVzO1xyXG4gIH1cclxuICBzZXQgcmFkaXVzKHYpICB7XHJcbiAgICB0aGlzLl9yYWRpdXMgPSB2O1xyXG4gICAgdGhpcy5fZGlhbWV0ZXIgPSB2KjI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICB0b3BcclxuICAgKiDlt6ZcclxuICAgKi9cclxuICBnZXQgdG9wKCkgICB7IHJldHVybiB0aGlzLnkgLSB0aGlzLmhlaWdodCp0aGlzLm9yaWdpblk7IH1cclxuICBzZXQgdG9wKHYpICB7IHRoaXMueSA9IHYgKyB0aGlzLmhlaWdodCp0aGlzLm9yaWdpblk7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHJpZ2h0XHJcbiAgICog5bemXHJcbiAgICovXHJcbiAgZ2V0IHJpZ2h0KCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoKigxLXRoaXMub3JpZ2luWCk7IH1cclxuICBzZXQgcmlnaHQodikgIHsgdGhpcy54ID0gdiAtIHRoaXMud2lkdGgqKDEtdGhpcy5vcmlnaW5YKTsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgYm90dG9tXHJcbiAgICog5bemXHJcbiAgICovXHJcbiAgZ2V0IGJvdHRvbSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQqKDEtdGhpcy5vcmlnaW5ZKTsgfVxyXG4gIHNldCBib3R0b20odikgIHsgdGhpcy55ID0gdiAtIHRoaXMuaGVpZ2h0KigxLXRoaXMub3JpZ2luWSk7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGxlZnRcclxuICAgKiDlt6ZcclxuICAgKi9cclxuICBnZXQgbGVmdCgpICAgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aCp0aGlzLm9yaWdpblg7IH1cclxuICBzZXQgbGVmdCh2KSAgeyB0aGlzLnggPSB2ICsgdGhpcy53aWR0aCp0aGlzLm9yaWdpblg7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGNlbnRlclhcclxuICAgKiBjZW50ZXJYXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlclgoKSAgIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMiAtIHRoaXMud2lkdGgqdGhpcy5vcmlnaW5YOyB9XHJcbiAgc2V0IGNlbnRlclgodikgIHtcclxuICAgIC8vIFRPRE86IOOBqeOBhuOBl+OCiOOBhuOBi+OBqj8/XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgY2VudGVyWVxyXG4gICAqIGNlbnRlcllcclxuICAgKi9cclxuICBnZXQgY2VudGVyWSgpICAgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTsgfVxyXG4gIHNldCBjZW50ZXJZKHYpICB7XHJcbiAgICAvLyBUT0RPOiDjganjgYbjgZfjgojjgYbjgYvjgao/P1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0MkQuZGVmYXVsdHMgPSB7XHJcbiAgeDogMCxcclxuICB5OiAwLFxyXG4gIHNjYWxlWDogMSxcclxuICBzY2FsZVk6IDEsXHJcbiAgcm90YXRpb246IDAsXHJcbiAgb3JpZ2luWDogMC41LFxyXG4gIG9yaWdpblk6IDAuNSxcclxuICB3aWR0aDogNjQsXHJcbiAgaGVpZ2h0OiA2NCxcclxuICByYWRpdXM6IDMyLFxyXG4gIGJvdW5kaW5nVHlwZTogJ3JlY3QnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuRG9tQXBwXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5CYXNlQXBwXHJcbiAqL1xyXG5jbGFzcyBEb21BcHAgZXh0ZW5kcyBCYXNlQXBwIHtcclxuXHJcbiAgLy8gZG9tRWxlbWVudDogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZG9tRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBvcHRpb25zLmRvbUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG9wdGlvbnMucXVlcnkpIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMucXVlcnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KCdlcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZnBzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mcHMgPSBvcHRpb25zLmZwcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYodHlwZW9mIG9wdGlvbnMucnVubmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMudGlja2VyLnJ1bm5lciA9IG9wdGlvbnMucnVubmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW91c2UgPSBuZXcgTW91c2UodGhpcy5kb21FbGVtZW50KTtcclxuICAgIHRoaXMudG91Y2ggPSBuZXcgVG91Y2godGhpcy5kb21FbGVtZW50KTtcclxuICAgIHRoaXMudG91Y2hMaXN0ID0gbmV3IFRvdWNoTGlzdCh0aGlzLmRvbUVsZW1lbnQsIDUpO1xyXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZChkb2N1bWVudCk7XHJcbiAgICAvLyAvLyDliqDpgJ/luqbjgrvjg7PjgrXjg7zjgpLnlJ/miJBcclxuICAgIC8vIHRoaXMuYWNjZWxlcm9tZXRlciA9IHBoaW5hLmlucHV0LkFjY2VsZXJvbWV0ZXIoKTtcclxuXHJcbiAgICAvLyDjg53jgqTjg7Pjgr/jgpLjgrvjg4Pjg4goUEMg44Gn44GvIE1vdXNlLCBNb2JpbGUg44Gn44GvIFRvdWNoKVxyXG4gICAgdGhpcy5wb2ludGVyID0gdGhpcy50b3VjaDtcclxuICAgIHRoaXMucG9pbnRlcnMgPSB0aGlzLnRvdWNoTGlzdC50b3VjaGVzO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucG9pbnRlciA9IHRoaXMudG91Y2g7XHJcbiAgICAgIHRoaXMucG9pbnRlcnMgPSB0aGlzLnRvdWNoTGlzdC50b3VjaGVzO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5wb2ludGVyID0gdGhpcy5tb3VzZTtcclxuICAgICAgdGhpcy5wb2ludGVycyA9IFt0aGlzLm1vdXNlXTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8ga2V5Ym9hcmQgZXZlbnRcclxuICAgIHRoaXMua2V5Ym9hcmQub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lICYmIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdrZXlkb3duJywge1xyXG4gICAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5rZXlib2FyZC5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lICYmIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdrZXl1cCcsIHtcclxuICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMua2V5Ym9hcmQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSAmJiB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgna2V5cHJlc3MnLCB7XHJcbiAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gY2xpY2sg5a++5b+cXHJcbiAgICB2YXIgZXZlbnROYW1lID0gcGhpbmEkMS5pc01vYmlsZSgpID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5fY2hlY2tDbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyDmsbrlrprmmYLjga7lh6bnkIbjgpLjgqrjg5XjgavjgZnjgosoaVBob25lIOaZguOBruOBoeOCieOBpOOBjeWvvuetlilcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKSB7IGUuc3RvcCgpOyB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpIHsgZS5zdG9wKCk7IH0pO1xyXG5cclxuICAgIC8vIOOCpuOCo+ODs+ODieOCpuODleOCqeODvOOCq+OCueaZguOCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMslxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5mbGFyZSgnZm9jdXMnKTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2ZvY3VzJyk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIC8vIOOCpuOCo+ODs+ODieOCpuODluODqeODvOaZguOCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMslxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdibHVyJyk7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdibHVyJyk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcclxuXHJcbiAgICAvLyDmm7TmlrDplqLmlbDjgpLnmbvpjLJcclxuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5tb3VzZS51cGRhdGUoKTtcclxuICAgICAgdGhpcy50b3VjaC51cGRhdGUoKTtcclxuICAgICAgdGhpcy50b3VjaExpc3QudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jaGVja0NsaWNrKGUpIHtcclxuICAgIHZhciBfY2hlY2sgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcclxuICAgICAgICAgIF9jaGVjayhjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsZW1lbnQuX2NsaWNrZWQgJiYgZWxlbWVudC5oYXMoJ2NsaWNrJykpIHtcclxuICAgICAgICBlbGVtZW50LmZsYXJlKCdjbGljaycpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuX2NsaWNrZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgX2NoZWNrKHRoaXMuY3VycmVudFNjZW5lKTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DYW52YXNSZW5kZXJlclxyXG4gKi9cclxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc2NlbmUpIHtcclxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XHJcbiAgICBpZiAoc2NlbmUuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLmNsZWFyQ29sb3Ioc2NlbmUuYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jb250ZXh0LnNhdmUoKTtcclxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oc2NlbmUpO1xyXG4gICAgdGhpcy5fY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDaGlsZHJlbihvYmopIHtcclxuICAgIC8vIOWtkOS+m+OBn+OBoeOCguWun+ihjFxyXG4gICAgaWYgKG9iai5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBvYmouY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wQ2hpbGRyZW4ubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJPYmplY3QodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyT2JqZWN0KG9iaikge1xyXG4gICAgaWYgKG9iai52aXNpYmxlID09PSBmYWxzZSAmJiAhb2JqLmludGVyYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgb2JqLl9jYWxjV29ybGRNYXRyaXggJiYgb2JqLl9jYWxjV29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICBpZiAob2JqLnZpc2libGUgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgb2JqLl9jYWxjV29ybGRBbHBoYSAmJiBvYmouX2NhbGNXb3JsZEFscGhhKCk7XHJcblxyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBvYmouX3dvcmxkQWxwaGE7XHJcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IG9iai5ibGVuZE1vZGU7XHJcblxyXG4gICAgaWYgKG9iai5fd29ybGRNYXRyaXgpIHtcclxuICAgICAgLy8g6KGM5YiX44KS44K744OD44OIXHJcbiAgICAgIHZhciBtID0gb2JqLl93b3JsZE1hdHJpeDtcclxuICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oIG0ubTAwLCBtLm0xMCwgbS5tMDEsIG0ubTExLCBtLm0wMiwgbS5tMTIgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLmNsaXApIHtcclxuXHJcbiAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgICAgb2JqLmNsaXAodGhpcy5jYW52YXMpO1xyXG4gICAgICBjb250ZXh0LmNsaXAoKTtcclxuXHJcbiAgICAgIGlmIChvYmouZHJhdykgb2JqLmRyYXcodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgLy8g5a2Q5L6b44Gf44Gh44KC5a6f6KGMXHJcbiAgICAgIGlmIChvYmoucmVuZGVyQ2hpbGRCeVNlbGYgPT09IGZhbHNlICYmIG9iai5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB2YXIgdGVtcENoaWxkcmVuID0gb2JqLmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgICAgICBmb3IgKHZhciBpPTAsbGVuPXRlbXBDaGlsZHJlbi5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlck9iamVjdCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAob2JqLmRyYXcpIG9iai5kcmF3KHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIC8vIOWtkOS+m+OBn+OBoeOCguWun+ihjFxyXG4gICAgICBpZiAob2JqLnJlbmRlckNoaWxkQnlTZWxmID09PSBmYWxzZSAmJiBvYmouY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBvYmouY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgICBmb3IgKHZhciBpPTAsbGVuPXRlbXBDaGlsZHJlbi5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuU2NlbmVcclxuICovXHJcbmNsYXNzIERpc3BsYXlTY2VuZSBleHRlbmRzIFNjZW5lIHtcclxuXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHBhcmFtcyA9ICRzYWZlLmNhbGwoe30sIHBhcmFtcywgRGlzcGxheVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBEaXNwbGF5U2NlbmUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0U2l6ZShwYXJhbXMud2lkdGgsIHBhcmFtcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcih0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IChwYXJhbXMuYmFja2dyb3VuZENvbG9yKSA/IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3IgOiBudWxsO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBwYXJhbXMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQ7XHJcbiAgICB0aGlzLmdyaWRYID0gbmV3IEdyaWQocGFyYW1zLndpZHRoLCAxNik7XHJcbiAgICB0aGlzLmdyaWRZID0gbmV3IEdyaWQocGFyYW1zLmhlaWdodCwgMTYpO1xyXG5cclxuICAgIC8vIFRPRE86IOS4gOaXpuOCgOOCiuOChOOCiuWvvuW/nFxyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlID0gZnVuY3Rpb24oZmxhZykge1xyXG4gICAgICB0aGlzLmludGVyYWN0aXZlID0gZmxhZztcclxuICAgIH07XHJcbiAgICB0aGlzLl9vdmVyRmxhZ3MgPSB7fTtcclxuICAgIHRoaXMuX3RvdWNoRmxhZ3MgPSB7fTtcclxuXHJcbiAgICB2YXIgY3R4ID0gdGhpcy5jYW52YXMuY29udGV4dDtcclxuICAgIGlmIChwYXJhbXMuaW1hZ2VTbW9vdGhpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBjdHgubXNJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpdFRlc3QoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF91cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy51cGRhdGUpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9yZW5kZXIoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5EaXNwbGF5U2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDY0MCxcclxuICBoZWlnaHQ6IDk2MCxcclxuICBpbWFnZVNtb290aGluZzogdHJ1ZSxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNhbnZhc0FwcFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRvbUFwcFxyXG4gKi9cclxuY2xhc3MgQ2FudmFzQXBwIGV4dGVuZHMgRG9tQXBwIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoKG9wdGlvbnMgfHwge30pLCBDYW52YXNBcHAuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZShDYW52YXNBcHAuZGVmYXVsdHMpO1xyXG4gICAgXHJcbiAgICBpZiAoIW9wdGlvbnMucXVlcnkgJiYgIW9wdGlvbnMuZG9tRWxlbWVudCkge1xyXG4gICAgICBvcHRpb25zLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvcHRpb25zLmRvbUVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmdyaWRYID0gbmV3IEdyaWQoe1xyXG4gICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgY29sdW1uczogb3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdyaWRZID0gbmV3IEdyaWQoe1xyXG4gICAgICB3aWR0aDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICAgIGNvbHVtbnM6IG9wdGlvbnMuY29sdW1ucyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0U2l6ZShvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCkgPyBvcHRpb25zLmJhY2tncm91bmRDb2xvciA6ICd3aGl0ZSc7XHJcblxyXG4gICAgdGhpcy5yZXBsYWNlU2NlbmUobmV3IERpc3BsYXlTY2VuZSh7XHJcbiAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmZpdCkge1xyXG4gICAgICB0aGlzLmZpdFNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLnBpeGVsYXRlZCkge1xyXG4gICAgICAvLyDjg4Hjg6njgaTjgY3pmLLmraJcclxuICAgICAgLy8g44OJ44OD44OI57W144Ky44O844Og44Gu44K144Od44O844OIXHJcbiAgICAgIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtaW1hZ2VzLyN0aGUtaW1hZ2UtcmVuZGVyaW5nXHJcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbWFnZS1yZW5kZXJpbmcjQnJvd3Nlcl9jb21wYXRpYmlsaXR5XHJcbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9GaXJlZm94XFwvXFxkKy8pKSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ2NyaXNwLWVkZ2VzJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1c2hTY2VuZSwgcG9wU2NlbmUg5a++562WXHJcbiAgICB0aGlzLm9uKCdwdXNoJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIG9uZW50ZXIg5a++562W44Gn5o+P55S744GX44Gm44GK44GPXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5jYW52YXMpIHtcclxuICAgICAgICB0aGlzLl9kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2RyYXcoKSB7XHJcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgdGhpcy5jYW52YXMuY2xlYXJDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZS5jYW52YXMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuX3JlbmRlcigpO1xyXG5cclxuICAgICAgLy8gdGhpcy5fc2NlbmVzLmVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgdGhpcy5fc2NlbmVzLmZvckVhY2goZnVuY3Rpb24oc2NlbmUpIHtcclxuICAgICAgICB2YXIgYyA9IHNjZW5lLmNhbnZhcztcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgdGhpcy5jYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoYy5kb21FbGVtZW50LCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpdFNjcmVlbigpIHtcclxuICAgIHRoaXMuY2FudmFzLmZpdFNjcmVlbigpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpY1xyXG5DYW52YXNBcHAuZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDY0MCxcclxuICBoZWlnaHQ6IDk2MCxcclxuICBjb2x1bW5zOiAxMixcclxuICBmaXQ6IHRydWUsXHJcbiAgYXBwZW5kOiB0cnVlLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLk9iamVjdDJEXHJcbiAqL1xyXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIE9iamVjdDJEIHtcclxuXHJcbiAgLy8gLyoqIOihqOekuuODleODqeOCsCAqL1xyXG4gIC8vIHZpc2libGU6IHRydWUsXHJcbiAgLy8gLyoqIOOCouODq+ODleOCoSAqL1xyXG4gIC8vIGFscGhhOiAxLjAsXHJcbiAgLy8gLyoqIOODluODrOODs+ODieODouODvOODiSAqL1xyXG4gIC8vIGJsZW5kTW9kZTogXCJzb3VyY2Utb3ZlclwiLFxyXG5cclxuICAvLyAvKiog5a2Q5L6b44KSIOiHquWIhuOBrkNhbnZhc1JlbmRlcmVyIOOBp+aPj+eUu+OBmeOCi+OBiyAqL1xyXG4gIC8vIHJlbmRlckNoaWxkQnlTZWxmOiBmYWxzZSxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBEaXNwbGF5RWxlbWVudC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50LmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMudmlzaWJsZSA9IChvcHRpb25zLnZpc2libGUgIT0gbnVsbCkgPyBvcHRpb25zLnZpc2libGUgOiB0cnVlO1xyXG4gICAgdGhpcy5hbHBoYSA9IChvcHRpb25zLmFscGhhICE9IG51bGwpID8gb3B0aW9ucy5hbHBoYSA6IDEuMDtcclxuICAgIHRoaXMuYmxlbmRNb2RlID0gXCJzb3VyY2Utb3ZlclwiO1xyXG4gICAgdGhpcy5yZW5kZXJDaGlsZEJ5U2VsZiA9IGZhbHNlO1xyXG4gICAgdGhpcy5fd29ybGRBbHBoYSA9IDEuMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODq+ODleOCoeWApOOCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldEFscGhhKGFscGhhKSB7XHJcbiAgICB0aGlzLmFscGhhID0gYWxwaGE7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOihqOekui/pnZ7ooajnpLrjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRWaXNpYmxlKGZsYWcpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZsYWc7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOihqOekulxyXG4gICAqL1xyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpnZ7ooajnpLpcclxuICAgKi9cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2NhbGNXb3JsZEFscGhhKCkge1xyXG4gICAgaWYgKHRoaXMuYWxwaGEgPCAwKSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkQWxwaGEgPSAwO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucGFyZW50KSB7XHJcbiAgICAgIHRoaXMuX3dvcmxkQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciB3b3JsZEFscGhhID0gKHRoaXMucGFyZW50Ll93b3JsZEFscGhhICE9PSB1bmRlZmluZWQpID8gdGhpcy5wYXJlbnQuX3dvcmxkQWxwaGEgOiAxLjA7XHJcbiAgICAgIC8vIGFscGhhXHJcbiAgICAgIHRoaXMuX3dvcmxkQWxwaGEgPSB3b3JsZEFscGhhICogdGhpcy5hbHBoYTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5EaXNwbGF5RWxlbWVudC5kZWZhdWx0cyA9IHtcclxuICBhbHBoYTogMS4wLFxyXG4gIHZpc2libGU6IHRydWUsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuQXNzZXRNYW5hZ2VyXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgQXNzZXRNYW5hZ2VyIHtcclxuXHJcbiAgc3RhdGljIGdldCh0eXBlLCBrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmFzc2V0c1t0eXBlXSAmJiB0aGlzLmFzc2V0c1t0eXBlXVtrZXldO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCh0eXBlLCBrZXksIGFzc2V0KSB7XHJcbiAgICBpZiAoIXRoaXMuYXNzZXRzW3R5cGVdKSB7XHJcbiAgICAgIHRoaXMuYXNzZXRzW3R5cGVdID0ge307XHJcbiAgICB9XHJcbiAgICB0aGlzLmFzc2V0c1t0eXBlXVtrZXldID0gYXNzZXQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29udGFpbnModHlwZSwga2V5KSB7XHJcbiAgICByZXR1cm4gO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkFzc2V0TWFuYWdlci5hc3NldHMgPSB7XHJcbiAgaW1hZ2U6IHt9LFxyXG4gIHNvdW5kOiB7fSxcclxuICBzcHJpdGVzaGVldDoge30sXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5TcHJpdGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKi9cclxuY2xhc3MgU3ByaXRlIGV4dGVuZHMgRGlzcGxheUVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnNyY1JlY3QgPSBuZXcgUmVjdCgpO1xyXG4gICAgdGhpcy5zZXRJbWFnZShpbWFnZSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZS5kb21FbGVtZW50O1xyXG5cclxuICAgIC8vIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgIC8vICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgIC8vICAgLXRoaXMud2lkdGgqdGhpcy5vcmlnaW4ueCwgLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgdmFyIHNyY1JlY3QgPSB0aGlzLnNyY1JlY3Q7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAgIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCxcclxuICAgICAgLXRoaXMuX3dpZHRoKnRoaXMub3JpZ2luWCwgLXRoaXMuX2hlaWdodCp0aGlzLm9yaWdpblksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHRcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHNldEltYWdlKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpbWFnZSA9IEFzc2V0TWFuYWdlci5nZXQoJ2ltYWdlJywgaW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faW1hZ2UgPSBpbWFnZTtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLl9pbWFnZS5kb21FbGVtZW50LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLl9pbWFnZS5kb21FbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICBpZiAod2lkdGgpIHsgdGhpcy53aWR0aCA9IHdpZHRoOyB9XHJcbiAgICBpZiAoaGVpZ2h0KSB7IHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OyB9XHJcblxyXG4gICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEZyYW1lSW5kZXgoaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciB0dyAgPSB3aWR0aCB8fCB0aGlzLl93aWR0aDsgICAgICAvLyB0d1xyXG4gICAgdmFyIHRoICA9IGhlaWdodCB8fCB0aGlzLl9oZWlnaHQ7ICAgIC8vIHRoXHJcbiAgICB2YXIgcm93ID0gfn4odGhpcy5pbWFnZS5kb21FbGVtZW50LndpZHRoIC8gdHcpO1xyXG4gICAgdmFyIGNvbCA9IH5+KHRoaXMuaW1hZ2UuZG9tRWxlbWVudC5oZWlnaHQgLyB0aCk7XHJcbiAgICB2YXIgbWF4SW5kZXggPSByb3cqY29sO1xyXG4gICAgaW5kZXggPSBpbmRleCVtYXhJbmRleDtcclxuICAgIFxyXG4gICAgdmFyIHggPSBpbmRleCVyb3c7XHJcbiAgICB2YXIgeSA9IH5+KGluZGV4L3Jvdyk7XHJcbiAgICB0aGlzLnNyY1JlY3QueCA9IHgqdHc7XHJcbiAgICB0aGlzLnNyY1JlY3QueSA9IHkqdGg7XHJcbiAgICB0aGlzLnNyY1JlY3Qud2lkdGggID0gdHc7XHJcbiAgICB0aGlzLnNyY1JlY3QuaGVpZ2h0ID0gdGg7XHJcblxyXG4gICAgdGhpcy5fZnJhbWVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGltYWdlKCkge3JldHVybiB0aGlzLl9pbWFnZTt9XHJcbiAgc2V0IGltYWdlKHYpIHtcclxuICAgIHRoaXMuc2V0SW1hZ2Uodik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBmcmFtZUluZGV4KCkge3JldHVybiB0aGlzLl9mcmFtZUluZGV4O31cclxuICBzZXQgZnJhbWVJbmRleChpZHgpIHtcclxuICAgIHRoaXMuc2V0RnJhbWVJbmRleChpZHgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5QbGFpbkVsZW1lbnRcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKi9cclxuY2xhc3MgUGxhaW5FbGVtZW50IGV4dGVuZHMgRGlzcGxheUVsZW1lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgdmFyIGltYWdlID0gdGhpcy5jYW52YXMuZG9tRWxlbWVudDtcclxuICAgIHZhciB3ID0gaW1hZ2Uud2lkdGg7XHJcbiAgICB2YXIgaCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICB2YXIgeCA9IC13KnRoaXMub3JpZ2luLng7XHJcbiAgICB2YXIgeSA9IC1oKnRoaXMub3JpZ2luLnk7XHJcblxyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgICAwLCAwLCB3LCBoLFxyXG4gICAgICB4LCB5LCB3LCBoXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5MYXllclxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBMYXllciBleHRlbmRzIERpc3BsYXlFbGVtZW50IHtcclxuXHJcbiAgLyoqIOWtkOS+m+OCkiDoh6rliIbjga4gQ2FudmFzUmVuZGVyZXIg44Gn5o+P55S744GZ44KL44GLICovXHJcbiAgLy8gcmVuZGVyQ2hpbGRCeVNlbGY6IHRydWUsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywge1xyXG4gICAgICB3aWR0aDogNjQwLFxyXG4gICAgICBoZWlnaHQ6IDk2MCxcclxuICAgIH0pO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICB0aGlzLmdyaWRYID0gbmV3IEdyaWQob3B0aW9ucy53aWR0aCwgMTYpO1xyXG4gICAgdGhpcy5ncmlkWSA9IG5ldyBHcmlkKG9wdGlvbnMuaGVpZ2h0LCAxNik7XHJcbiAgICB0aGlzLnJlbmRlckNoaWxkQnlTZWxmID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRyYXcoY2FudmFzKSB7XHJcbiAgICBpZiAoIXRoaXMuZG9tRWxlbWVudCkgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAgIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsXHJcbiAgICAgIC10aGlzLndpZHRoKnRoaXMub3JpZ2luWCwgLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuQ2FudmFzTGF5ZXJcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5MYXllclxyXG4gKi9cclxuY2xhc3MgQ2FudmFzTGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB0aGlzLmNhbnZhcy53aWR0aCAgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcih0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNhbnZhcy5kb21FbGVtZW50O1xyXG5cclxuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRlbXAgPSB0aGlzLl93b3JsZE1hdHJpeDtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBudWxsO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzKTtcclxuICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSB0ZW1wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgICAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAtdGhpcy53aWR0aCp0aGlzLm9yaWdpblgsIC10aGlzLmhlaWdodCp0aGlzLm9yaWdpblksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlRocmVlTGF5ZXJcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5MYXllclxyXG4gKi9cclxuY2xhc3MgVGhyZWVMYXllciBleHRlbmRzIExheWVyIHtcclxuXHJcbiAgLy8gc2NlbmU6IG51bGwsXHJcbiAgLy8gY2FtZXJhOiBudWxsLFxyXG4gIC8vIGxpZ2h0OiBudWxsLFxyXG4gIC8vIHJlbmRlcmVyOiBudWxsLFxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDc1LCBvcHRpb25zLndpZHRoIC8gb3B0aW9ucy5oZWlnaHQsIDEsIDEwMDAwICk7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuXHJcbiAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZmZmZmZmLCAxICk7XHJcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldCggMSwgMSwgMSApLm5vcm1hbGl6ZSgpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQoIHRoaXMubGlnaHQgKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHhmMGYwZjAgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQgKTtcclxuXHJcbiAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5QbGFpbkVsZW1lbnRcclxuICovXHJcbmNsYXNzIFNoYXBlIGV4dGVuZHMgUGxhaW5FbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5TaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuZmlsbCA9IG9wdGlvbnMuZmlsbDtcclxuICAgIHRoaXMuc3Ryb2tlID0gb3B0aW9ucy5zdHJva2U7XHJcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gb3B0aW9ucy5zdHJva2VXaWR0aDtcclxuICAgIHRoaXMubGluZUNhcCA9IG9wdGlvbnMubGluZUNhcDtcclxuICAgIHRoaXMubGluZUpvaW4gPSBvcHRpb25zLmxpbmVKb2luO1xyXG5cclxuICAgIHRoaXMuc2hhZG93ID0gb3B0aW9ucy5zaGFkb3c7XHJcbiAgICB0aGlzLnNoYWRvd0JsdXIgPSBvcHRpb25zLnNoYWRvd0JsdXI7XHJcblxyXG4gICAgdGhpcy53YXRjaERyYXcgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICB2YXIgY2hlY2tSZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gcmVuZGVyXHJcbiAgICAgIGlmICh0aGlzLndhdGNoRHJhdyAmJiB0aGlzLl9kaXJ0eURyYXcgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5fZGlydHlEcmF3ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGNoZWNrUmVuZGVyKTtcclxuICAgIHRoaXMub24oJ2FkZGVkJywgY2hlY2tSZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNTaXplICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNhbGNDYW52YXNXaWR0aCgpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY2FsY0NhbnZhc0hlaWdodCgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlzU3Ryb2thYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlICYmIDAgPCB0aGlzLnN0cm9rZVdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHZpcnR1YWxcclxuICAgKiBAcGFyYW0gIHtwaGluYS5ncmFwaGljcy5DYW52YXN9IGNhbnZhcyBcclxuICAgKiBAcmV0dXJuIHthbnl9XHJcbiAgICovXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB2aXJ0dWFsXHJcbiAgICogQHBhcmFtICB7cGhpbmEuZ3JhcGhpY3MuQ2FudmFzfSBjYW52YXMgXHJcbiAgICogQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG4gIHBvc3RyZW5kZXIoY2FudmFzKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsbChjYW52YXMpIHtcclxuICAgIGNhbnZhcy5maWxsKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgLy8g44Oq44K144Kk44K6XHJcbiAgICB2YXIgc2l6ZSA9IHRoaXMuY2FsY0NhbnZhc1NpemUoKTtcclxuICAgIGNhbnZhcy5zZXRTaXplKHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuICAgIC8vIOOCr+ODquOCouOCq+ODqeODvFxyXG4gICAgY2FudmFzLmNsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgLy8g5Lit5b+D44Gr5bqn5qiZ44KS56e75YuVXHJcbiAgICBjYW52YXMudHJhbnNmb3JtQ2VudGVyKCk7XHJcblxyXG4gICAgLy8g5o+P55S75YmN5Yem55CGXHJcbiAgICB0aGlzLnByZXJlbmRlcih0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgLy8g44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICBpZiAodGhpcy5pc1N0cm9rYWJsZSgpKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcclxuICAgICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZVdpZHRoO1xyXG4gICAgICBjb250ZXh0LmxpbmVDYXAgPSB0aGlzLmxpbmVDYXA7XHJcbiAgICAgIGNvbnRleHQubGluZUpvaW4gPSB0aGlzLmxpbmVKb2luO1xyXG4gICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSAwO1xyXG4gICAgICB0aGlzLnJlbmRlclN0cm9rZShjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWhl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAgaWYgKHRoaXMuZmlsbCkge1xyXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbDtcclxuXHJcbiAgICAgIC8vIHNoYWRvdyDjga4gb24vb2ZmXHJcbiAgICAgIGlmICh0aGlzLnNoYWRvdykge1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvdztcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSB0aGlzLnNoYWRvd0JsdXI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZW5kZXJGaWxsKGNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5o+P55S75b6M5Yem55CGXHJcbiAgICB0aGlzLnBvc3RyZW5kZXIodGhpcy5jYW52YXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdhdGNoUmVuZGVyUHJvcGVydHkoa2V5KSB7XHJcbiAgICAvLyB0aGlzLnByb3RvdHlwZS4kd2F0Y2goa2V5LCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgJHdhdGNoLmNhbGwodGhpcy5wcm90b3R5cGUsIGtleSwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XHJcbiAgICAgICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd2F0Y2hSZW5kZXJQcm9wZXJ0aWVzKGtleXMpIHtcclxuICAgIHZhciB3YXRjaFJlbmRlclByb3BlcnR5ID0gdGhpcy53YXRjaFJlbmRlclByb3BlcnR5IHx8IFNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHk7XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgIHdhdGNoUmVuZGVyUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiA2NCxcclxuICBoZWlnaHQ6IDY0LFxyXG4gIHBhZGRpbmc6IDgsXHJcblxyXG4gIGJhY2tncm91bmRDb2xvcjogJyNhYWEnLFxyXG4gIGZpbGw6ICcjMDBhJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuICBsaW5lQ2FwOiAncm91bmQnLFxyXG4gIGxpbmVKb2luOiAncm91bmQnLFxyXG5cclxuICBzaGFkb3c6IGZhbHNlLFxyXG4gIHNoYWRvd0JsdXI6IDQsXHJcbn07XHJcblxyXG4vLyBfZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnRpZXMoW1xyXG4gICd3aWR0aCcsXHJcbiAgJ2hlaWdodCcsXHJcbiAgJ3JhZGl1cycsXHJcbiAgJ3BhZGRpbmcnLFxyXG4gICdiYWNrZ3JvdW5kQ29sb3InLFxyXG4gICdmaWxsJyxcclxuICAnc3Ryb2tlJyxcclxuICAnc3Ryb2tlV2lkdGgnLFxyXG4gICdsaW5lQ2FwJyxcclxuICAnbGluZUpvaW4nLFxyXG4gICdzaGFkb3cnLFxyXG4gICdzaGFkb3dCbHVyJyxcclxuXSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlJlY3RhbmdsZVNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFJlY3RhbmdsZVNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlJlY3RhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgUmVjdGFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gb3B0aW9ucy5jb3JuZXJSYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucm91bmRSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb3JuZXJSYWRpdXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5SZWN0YW5nbGVTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ2JsdWUnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIGNvcm5lclJhZGl1czogMCxcclxufTtcclxuXHJcbi8vIF9kZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChSZWN0YW5nbGVTaGFwZSwgJ2Nvcm5lclJhZGl1cycpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DaXJjbGVTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBDaXJjbGVTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5DaXJjbGVTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIENpcmNsZVNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuY2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuQ2lyY2xlU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdyZWQnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG4gIHJhZGl1czogMzIsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlRyaWFuZ2xlU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgVHJpYW5nbGVTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5UcmlhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgVHJpYW5nbGVTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnBvbHlnb24oMCwgMCwgdGhpcy5yYWRpdXMsIDMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5UcmlhbmdsZVNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnZ3JlZW4nLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG5cclxuICByYWRpdXM6IDMyLFxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5TdGFyU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgU3RhclNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlN0YXJTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFN0YXJTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gICAgdGhpcy5zaWRlcyA9IG9wdGlvbnMuc2lkZXM7XHJcbiAgICB0aGlzLnNpZGVJbmRlbnQgPSBvcHRpb25zLnNpZGVJbmRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuc3RhcigwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5zaWRlcywgdGhpcy5zaWRlSW5kZW50KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuU3RhclNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAneWVsbG93JyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxuICBzaWRlczogNSxcclxuICBzaWRlSW5kZW50OiAwLjM4LFxyXG59O1xyXG5cclxuLy8gX2RlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKFN0YXJTaGFwZSwgJ3NpZGVzJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChTdGFyU2hhcGUsICdzaWRlSW5kZW50Jyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlBvbHlnb25TaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBQb2x5Z29uU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuUG9seWdvblNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgUG9seWdvblNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgICB0aGlzLnNpZGVzID0gb3B0aW9ucy5zaWRlcztcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5wb2x5Z29uKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnNpZGVzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuUG9seWdvblNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnY3lhbicsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbiAgc2lkZXM6IDUsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChQb2x5Z29uU2hhcGUsICdzaWRlcycpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5IZWFydFNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIEhlYXJ0U2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuSGVhcnRTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIEhlYXJ0U2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICAgIHRoaXMuY29ybmVyQW5nbGUgPSBvcHRpb25zLmNvcm5lckFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmhlYXJ0KDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLmNvcm5lckFuZ2xlKTtcclxuICB9XHJcblxyXG59XHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5IZWFydFNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAncGluaycsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbiAgY29ybmVyQW5nbGU6IDQ1LFxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoSGVhcnRTaGFwZSwgJ2Nvcm5lckFuZ2xlJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlBhdGhTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBQYXRoU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcbiAgLy8gcGF0aHM6IG51bGwsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuUGF0aFNoYXBlLmRlZmF1bHRzKTtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgUGF0aFNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMucGF0aHMgPSBvcHRpb25zLnBhdGhzIHx8IFtdO1xyXG4gICAgdGhpcy5saW5lSm9pbiA9IG9wdGlvbnMubGluZUpvaW47XHJcbiAgICB0aGlzLmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXA7XHJcbiAgfVxyXG5cclxuICBzZXRQYXRocyAocGF0aHMpIHtcclxuICAgIHRoaXMucGF0aHMgPSBwYXRocztcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsZWFyICgpIHtcclxuICAgIHRoaXMucGF0aHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZFBhdGhzIChwYXRocykge1xyXG4gICAgW10ucHVzaC5hcHBseSh0aGlzLnBhdGhzLCBwYXRocyk7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRQYXRoICh4LCB5KSB7XHJcbiAgICB0aGlzLnBhdGhzLnB1c2gocGhpbmEuZ2VvbS5WZWN0b3IyKHgsIHkpKTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldFBhdGggKGkpIHtcclxuICAgIHJldHVybiB0aGlzLnBhdGhzW2ldO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF0aHMgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGF0aHM7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXRoIChpLCB4LCB5KSB7XHJcbiAgICB0aGlzLnBhdGhzW2ldLnNldCh4LCB5KTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNTaXplICgpIHtcclxuICAgIHZhciBwYXRocyA9IHRoaXMucGF0aHM7XHJcbiAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHRoaXMucGFkZGluZyAqIDIsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMucGFkZGluZyAqIDIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgbWF4WCA9IC1JbmZpbml0eTtcclxuICAgIHZhciBtYXhZID0gLUluZmluaXR5O1xyXG4gICAgdmFyIG1pblggPSBJbmZpbml0eTtcclxuICAgIHZhciBtaW5ZID0gSW5maW5pdHk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdGhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIHZhciBwYXRoID0gcGF0aHNbaV07XHJcbiAgICAgIGlmIChtYXhYIDwgcGF0aC54KSB7IG1heFggPSBwYXRoLng7IH1cclxuICAgICAgaWYgKG1pblggPiBwYXRoLngpIHsgbWluWCA9IHBhdGgueDsgfVxyXG4gICAgICBpZiAobWF4WSA8IHBhdGgueSkgeyBtYXhZID0gcGF0aC55OyB9XHJcbiAgICAgIGlmIChtaW5ZID4gcGF0aC55KSB7IG1pblkgPSBwYXRoLnk7IH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiBNYXRoLm1heChNYXRoLmFicyhtYXhYKSwgTWF0aC5hYnMobWluWCkpICogMiArIHRoaXMucGFkZGluZyAqIDIsXHJcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoTWF0aC5hYnMobWF4WSksIE1hdGguYWJzKG1pblkpKSAqIDIgKyB0aGlzLnBhZGRpbmcgKiAyLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxjQ2FudmFzU2l6ZSgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxjQ2FudmFzU2l6ZSgpLmhlaWdodDtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlciAoY2FudmFzKSB7XHJcbiAgICB2YXIgcGF0aHMgPSB0aGlzLnBhdGhzO1xyXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFyIGMgPSBjYW52YXMuY29udGV4dDtcclxuICAgICAgdmFyIHAgPSBwYXRoc1swXTtcclxuICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgYy5tb3ZlVG8ocC54LCBwLnkpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcGF0aHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICBwID0gcGF0aHNbaV07XHJcbiAgICAgICAgYy5saW5lVG8ocC54LCBwLnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblBhdGhTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBmaWxsOiBmYWxzZSxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5MYWJlbFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBMYWJlbCBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIG9wdGlvbnMgPSB7IHRleHQ6IGFyZ3VtZW50c1swXSwgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBvcHRpb25zID0gYXJndW1lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgTGFiZWwuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucywgcGhpbmEuZGlzcGxheS5MYWJlbC5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemU7XHJcbiAgICB0aGlzLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHQ7XHJcbiAgICB0aGlzLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHk7XHJcbiAgICB0aGlzLmFsaWduID0gb3B0aW9ucy5hbGlnbjtcclxuICAgIHRoaXMuYmFzZWxpbmUgPSBvcHRpb25zLmJhc2VsaW5lO1xyXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoKCkge1xyXG4gICAgdmFyIHdpZHRoID0gMDtcclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcztcclxuICAgIGNhbnZhcy5jb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICB0aGlzLl9saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcclxuICAgICAgdmFyIHcgPSBjYW52YXMuY29udGV4dC5tZWFzdXJlVGV4dChsaW5lKS53aWR0aDtcclxuICAgICAgaWYgKHdpZHRoIDwgdykge1xyXG4gICAgICAgIHdpZHRoID0gdztcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcyk7XHJcbiAgICBpZiAodGhpcy5hbGlnbiAhPT0gJ2NlbnRlcicpIHdpZHRoKj0yO1xyXG5cclxuICAgIHJldHVybiB3aWR0aCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCgpIHtcclxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmZvbnRTaXplICogdGhpcy5fbGluZXMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuYmFzZWxpbmUgIT09ICdtaWRkbGUnKSBoZWlnaHQqPTI7XHJcbiAgICByZXR1cm4gaGVpZ2h0KnRoaXMubGluZUhlaWdodCArIHRoaXMucGFkZGluZyoyO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuZm9udCA9IHRoaXMuZm9udDtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gdGhpcy5hbGlnbjtcclxuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gdGhpcy5iYXNlbGluZTtcclxuXHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLl9saW5lcztcclxuICAgIHRoaXMubGluZVNpemUgPSB0aGlzLmZvbnRTaXplKnRoaXMubGluZUhlaWdodDtcclxuICAgIHRoaXMuX29mZnNldCA9IC1NYXRoLmZsb29yKGxpbmVzLmxlbmd0aC8yKSp0aGlzLmxpbmVTaXplO1xyXG4gICAgdGhpcy5fb2Zmc2V0ICs9ICgobGluZXMubGVuZ3RoKzEpJTIpICogKHRoaXMubGluZVNpemUvMik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHRoaXMuX2xpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIDAsIGkqdGhpcy5saW5lU2l6ZSt0aGlzLl9vZmZzZXQpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgdGhpcy5fbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlVGV4dChsaW5lLCAwLCBpKnRoaXMubGluZVNpemUrdGhpcy5fb2Zmc2V0KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGV4dFxyXG4gICAqL1xyXG4gIGdldCB0ZXh0KCkgeyByZXR1cm4gdGhpcy5fdGV4dDsgfVxyXG4gIHNldCB0ZXh0KHYpIHtcclxuICAgIHRoaXMuX3RleHQgPSB2O1xyXG4gICAgdGhpcy5fbGluZXMgPSAodGhpcy50ZXh0ICsgJycpLnNwbGl0KCdcXG4nKTtcclxuICB9XHJcblxyXG4gIGdldCBmb250KCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwie2ZvbnRXZWlnaHR9IHtmb250U2l6ZX1weCB7Zm9udEZhbWlseX1cIiwgdGhpcyk7XHJcbiAgICAvLyByZXR1cm4gXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLmZvcm1hdCh0aGlzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuTGFiZWwuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG5cclxuICBmaWxsOiAnYmxhY2snLFxyXG4gIHN0cm9rZTogbnVsbCxcclxuICBzdHJva2VXaWR0aDogMixcclxuXHJcbiAgLy8gXHJcbiAgdGV4dDogJ0hlbGxvLCB3b3JsZCEnLFxyXG4gIC8vIFxyXG4gIGZvbnRTaXplOiAzMixcclxuICBmb250V2VpZ2h0OiAnJyxcclxuICBmb250RmFtaWx5OiBcIidIaXJhS2FrdVByb04tVzMnXCIsIC8vIEhpcmFnaW5vIG9yIEhlbHZldGljYSxcclxuICAvLyBcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgYmFzZWxpbmU6ICdtaWRkbGUnLFxyXG4gIGxpbmVIZWlnaHQ6IDEuMixcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAndGV4dCcpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdmb250U2l6ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdmb250V2VpZ2h0Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2ZvbnRGYW1pbHknKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnYWxpZ24nKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnYmFzZWxpbmUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnbGluZUhlaWdodCcpO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5GcmFtZUFuaW1hdGlvblxyXG4gKiBGcmFtZUFuaW1hdGlvblxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBGcmFtZUFuaW1hdGlvbiBleHRlbmRzIEFjY2Vzc29yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3MgPSBBc3NldE1hbmFnZXIuZ2V0KCdzcHJpdGVzaGVldCcsIHNzKTtcclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnBhdXNlZCkgcmV0dXJuIDtcclxuICAgIGlmICghdGhpcy5jdXJyZW50QW5pbWF0aW9uKSByZXR1cm4gO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbmlzaGVkKSB7XHJcbiAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcblxyXG4gICAgKyt0aGlzLmZyYW1lO1xyXG4gICAgaWYgKHRoaXMuZnJhbWUldGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyZXF1ZW5jeSA9PT0gMCkge1xyXG4gICAgICArK3RoaXMuY3VycmVudEZyYW1lSW5kZXg7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUZyYW1lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb3RvQW5kUGxheShuYW1lLCBrZWVwKSB7XHJcbiAgICBrZWVwID0gKGtlZXAgIT09IHVuZGVmaW5lZCkgPyBrZWVwIDogdHJ1ZTtcclxuICAgIGlmIChrZWVwICYmIG5hbWUgPT09IHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWVcclxuICAgICAgICAgICAgICYmIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPCB0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgJiYgIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5zcy5nZXRBbmltYXRpb24obmFtZSk7XHJcbiAgICB0aGlzLl91cGRhdGVGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnb3RvQW5kU3RvcChuYW1lKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25OYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50RnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLnNzLmdldEFuaW1hdGlvbihuYW1lKTtcclxuICAgIHRoaXMuX3VwZGF0ZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUZyYW1lKCkge1xyXG4gICAgdmFyIGFuaW0gPSB0aGlzLmN1cnJlbnRBbmltYXRpb247XHJcbiAgICBpZiAoYW5pbSkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50RnJhbWVJbmRleCA+PSBhbmltLmZyYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoYW5pbS5uZXh0KSB7XHJcbiAgICAgICAgICB0aGlzLmdvdG9BbmRQbGF5KGFuaW0ubmV4dCk7XHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBhbmltLmZyYW1lc1t0aGlzLmN1cnJlbnRGcmFtZUluZGV4XTtcclxuICAgIHZhciBmcmFtZSA9IHRoaXMuc3MuZ2V0RnJhbWUoaW5kZXgpO1xyXG4gICAgdGhpcy50YXJnZXQuc3JjUmVjdC5zZXQoZnJhbWUueCwgZnJhbWUueSwgZnJhbWUud2lkdGgsIGZyYW1lLmhlaWdodCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZml0KSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LndpZHRoID0gZnJhbWUud2lkdGg7XHJcbiAgICAgIHRoaXMudGFyZ2V0LmhlaWdodCA9IGZyYW1lLmhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LkRyYWdnYWJsZVxyXG4gKiBEcmFnZ2FibGVcclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgQWNjZXNzb3J5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5vbignYXR0YWNoZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy50YXJnZXQuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLl9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50c3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKERyYWdnYWJsZS5fbG9jaykgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNlbGYuaW5pdGlhbFBvc2l0aW9uLnggPSB0aGlzLng7XHJcbiAgICAgICAgc2VsZi5pbml0aWFsUG9zaXRpb24ueSA9IHRoaXMueTtcclxuICAgICAgICBzZWxmLmZsYXJlKCdkcmFnc3RhcnQnKTtcclxuICAgICAgICB0aGlzLmZsYXJlKCdkcmFnc3RhcnQnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgdGhpcy54ICs9IGUucG9pbnRlci5keDtcclxuICAgICAgICB0aGlzLnkgKz0gZS5wb2ludGVyLmR5O1xyXG4gICAgICAgIHNlbGYuZmxhcmUoJ2RyYWcnKTtcclxuICAgICAgICB0aGlzLmZsYXJlKCdkcmFnJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZHJhZ2dpbmcpIHJldHVybiA7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc2VsZi5mbGFyZSgnZHJhZ2VuZCcpO1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2RyYWdlbmQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJhY2sodGltZSwgZWFzaW5nKSB7XHJcbiAgICBpZiAodGltZSkge1xyXG4gICAgICB2YXIgdCA9IHRoaXMudGFyZ2V0O1xyXG4gICAgICB0LnNldEludGVyYWN0aXZlKGZhbHNlKTtcclxuICAgICAgdmFyIHR3ZWVuZXIgPSBuZXcgVHdlZW5lcigpLmF0dGFjaFRvKHQpO1xyXG4gICAgICB0d2VlbmVyXHJcbiAgICAgICAgLnRvKHtcclxuICAgICAgICAgIHg6IHRoaXMuaW5pdGlhbFBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiB0aGlzLmluaXRpYWxQb3NpdGlvbi55LFxyXG4gICAgICAgIH0sIHRpbWUsIGVhc2luZyB8fCAnZWFzZU91dEVsYXN0aWMnKVxyXG4gICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdHdlZW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICB0LnNldEludGVyYWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5mbGFyZSgnYmFja2VuZCcpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnggPSB0aGlzLmluaXRpYWxQb3NpdGlvbi54O1xyXG4gICAgICB0aGlzLnRhcmdldC55ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueTtcclxuICAgICAgdGhpcy5mbGFyZSgnYmFja2VuZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2NrKCkge1xyXG4gICAgdGhpcy5fbG9jayA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdW5sb2NrKCkge1xyXG4gICAgdGhpcy5fbG9jayA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRyYWdnYWJsZS5fbG9jayA9IGZhbHNlO1xyXG5cclxuLy8g5ZG844Gz5Ye644GX44Gn5ouh5by144GZ44KL77yfIFR3ZWVuZXLjga9FbGVtZW505YG044Gn5a6a576pXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS5nZXR0ZXIoJ2RyYWdnYWJsZScsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmICghdGhpcy5fZHJhZ2dhYmxlKSB7XHJcbi8vICAgICB0aGlzLl9kcmFnZ2FibGUgPSBwaGluYS5hY2Nlc3NvcnkuRHJhZ2dhYmxlKCkuYXR0YWNoVG8odGhpcyk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGU7XHJcbi8vIH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5GbGlja2FibGVcclxuICogRmxpY2thYmxlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIEZsaWNrYWJsZSBleHRlbmRzIEFjY2Vzc29yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIodGFyZ2V0KTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jYWNoZUxpc3QgPSBbXTtcclxuXHJcbiAgICB0aGlzLm9uKCdhdHRhY2hlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHNlbGYuaW5pdGlhbFBvc2l0aW9uLnNldCh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgc2VsZi52ZWxvY2l0eS5zZXQoMCwgMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRzdGF5JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmhvcml6b250YWwpIHtcclxuICAgICAgICAgIHRoaXMueCArPSBlLnBvaW50ZXIuZHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICB0aGlzLnkgKz0gZS5wb2ludGVyLmR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuY2FjaGVMaXN0Lmxlbmd0aCA+IDMpIHNlbGYuY2FjaGVMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgc2VsZi5jYWNoZUxpc3QucHVzaChlLnBvaW50ZXIuZGVsdGFQb3NpdGlvbi5jbG9uZSgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRlbmQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8g5YuV44GN44Gu44GC44KLIGRlbHRhIHBvc2l0aW9uIOOCkuW+jOOCjeOBi+OCieaknOe0ouOAgFxyXG4gICAgICAgIHZhciBkZWx0YSA9IHNlbGYuY2FjaGVMaXN0LnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHJldHVybiB2Lmxlbmd0aFNxdWFyZWQoKSA+IDEwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsZWFyLmNhbGwoc2VsZi5jYWNoZUxpc3QpO1xyXG4gICAgICAgIC8vIHNlbGYuY2FjaGVMaXN0LmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmIChkZWx0YSkge1xyXG4gICAgICAgICAgc2VsZi52ZWxvY2l0eS54ID0gZGVsdGEueDtcclxuICAgICAgICAgIHNlbGYudmVsb2NpdHkueSA9IGRlbHRhLnk7XHJcblxyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnZmxpY2tzdGFydCcsIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkZWx0YS5ub3JtYWxpemUoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2ZsaWNrY2FuY2VsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZWxmLmZsYXJlKCdmbGljaycpO1xyXG4gICAgICAgIC8vIHNlbGYuZmxhcmUoJ2ZsaWNrZW5kJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuZnJpY3Rpb247XHJcblxyXG4gICAgaWYgKHRoaXMuaG9yaXpvbnRhbCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy50YXJnZXQueCA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLng7XHJcbiAgICB0aGlzLnRhcmdldC55ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueTtcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0KDAsIDApO1xyXG5cclxuICAgIC8vIFRPRE86IFxyXG4gICAgLy8gdGhpcy5zZXRJbnRlcmFjdGl2ZShmYWxzZSk7XHJcbiAgICAvLyB0aGlzLnR3ZWVuZXIuY2xlYXIoKVxyXG4gICAgLy8gICAgIC5tb3ZlKHRoaXMuaW5pdGlhbFgsIHRoaXMuaW5pdGlhbFksIDUwMCwgXCJlYXNlT3V0RWxhc3RpY1wiKVxyXG4gICAgLy8gICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5maXJlKHRtLmV2ZW50LkV2ZW50KFwiYmFja2VuZFwiKSk7XHJcbiAgICAvLyAgICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gVE9ETzogRWxlbWVudOWBtOOBp+WRvOOBtu+8n1xyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCdmbGlja2FibGUnLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX2ZsaWNrYWJsZSkge1xyXG4vLyAgICAgdGhpcy5fZmxpY2thYmxlID0gcGhpbmEuYWNjZXNzb3J5LkZsaWNrYWJsZSgpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fZmxpY2thYmxlO1xyXG4vLyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuUGh5c2ljYWxcclxuICog5pys54mp44Gn44Gv44Gq44GE44Gu44Gn5ZCN5YmN5aSJ44GI44KL44GL44KCXHJcbiAqIEZha2VQaHlzaWNhbCBvciBNYXJpb1BoeXNpY2FsIG9yIExpZVBoeXNpY2FsXHJcbiAqIFJldHJvUHlzaWNhbCBvciBQeXNpY2FMaWtlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIFBoeXNpY2FsIGV4dGVuZHMgQWNjZXNzb3J5ICB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIodGFyZ2V0KTtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMS4wO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdmFyIHQgPSB0aGlzLnRhcmdldDtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5mcmljdGlvbjtcclxuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmZyaWN0aW9uO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmdyYXZpdHkueDtcclxuICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHkueTtcclxuXHJcbiAgICB0LnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgdC5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcclxuICB9XHJcblxyXG4gIGZvcmNlKHgsIHkpIHtcclxuICAgIHRoaXMudmVsb2NpdHkuc2V0KHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRGb3JjZSh4LCB5KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKz0geDtcclxuICAgIHRoaXMudmVsb2NpdHkueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRHcmF2aXR5KHgsIHkpIHtcclxuICAgIHRoaXMuZ3Jhdml0eS5zZXQoeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEZyaWN0aW9uKGZyKSB7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gZnI7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbi8vIHBoaW5hLmFwcC5FbGVtZW50LnByb3RvdHlwZS5nZXR0ZXIoJ3BoeXNpY2FsJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl9waHlzaWNhbCkge1xyXG4vLyAgICAgdGhpcy5fcGh5c2ljYWwgPSBwaGluYS5hY2Nlc3NvcnkuUGh5c2ljYWwoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsO1xyXG4vLyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQXNzZXQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvLyBzZXJ2ZXJFcnJvcjogZmFsc2UsXHJcbiAgLy8gbm90Rm91bmQ6IGZhbHNlLFxyXG4gIC8vIGxvYWRFcnJvcjogZmFsc2UsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNyYykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXJ2ZXJFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2FkRXJyb3IgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxvYWQoc3JjKSB7XHJcbiAgICB0aGlzLnNyYyA9IHNyYztcclxuICAgIHJldHVybiBuZXcgRmxvdyh0aGlzLl9sb2FkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICAvLyDjg63jg7zjg4nlpLHmlZfmmYLjgavjg4Djg5/jg7zjgpLjgrvjg4Pjg4jjgZnjgotcclxuICBsb2FkRHVtbXkoKSB7IH1cclxuXHJcbn1cblxudmFyIGdldEZpcnN0ID0gZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGZpcnN0LmdldC5jYWxsKGFycmF5KTsgfTtcclxudmFyIGdldExhc3QgPSBmdW5jdGlvbihhcnJheSkgeyByZXR1cm4gbGFzdC5nZXQuY2FsbChhcnJheSk7IH07XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlRleHR1cmVcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIFRleHR1cmUgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIHZhciBpc0xvY2FsID0gKGxvY2F0aW9uLnByb3RvY29sID09ICdmaWxlOicpO1xyXG4gICAgaWYgKCAhaXNMb2NhbCAmJiAhKC9eZGF0YTovLnRlc3QodGhpcy5zcmMpKSApIDtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kb21FbGVtZW50Lm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0LmNhbGwoXCJbcGhpbmEuanNdIG5vdCBmb3VuZCBgezB9YCFcIiwgdGhpcy5zcmMpKTtcclxuICAgICAgLy8gY29uc29sZS5lcnJvcihcIltwaGluYS5qc10gbm90IGZvdW5kIGB7MH1gIVwiLmZvcm1hdCh0aGlzLnNyYykpO1xyXG5cclxuICAgICAgLy8gdmFyIGtleSA9IHNlbGYuc3JjLnNwbGl0KCcvJykubGFzdC5yZXBsYWNlKCcucG5nJywgJycpLnNwbGl0KCc/JykuZmlyc3Quc3BsaXQoJyMnKS5maXJzdDtcclxuICAgICAgdmFyIGtleSA9IGdldEZpcnN0KFxyXG4gICAgICAgIGdldEZpcnN0KFxyXG4gICAgICAgICAgZ2V0TGFzdChcclxuICAgICAgICAgICAgc2VsZi5zcmMuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgKS5yZXBsYWNlKCcucG5nJywgJycpLnNwbGl0KCc/JylcclxuICAgICAgICApLnNwbGl0KCcjJylcclxuICAgICAgKTtcclxuICAgICAgZS50YXJnZXQub25lcnJvciA9IG51bGw7XHJcbiAgICAgIGUudGFyZ2V0LnNyYyA9IFwiaHR0cDovL2R1bW15aW1hZ2UuY29tLzEyOHgxMjgvNDQ0NDQ0L2VlZWVlZSZ0ZXh0PVwiICsga2V5O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCkuc2V0U2l6ZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgIHZhciB0ID0gbmV3IFRleHR1cmUoKTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICB0LmRvbUVsZW1lbnQgPSBjYW52YXMuZG9tRWxlbWVudDtcclxuICAgIHJldHVybiB0O1xyXG4gIH1cclxuXHJcbiAgdHJhbnNtaXQoY29sb3IpIHtcclxuICAgIC8vIGltYWdh44Kq44OW44K444Kn44Kv44OI44KS44Ky44OD44OIXHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICAvLyDmlrDopo9jYW52YXPkvZzmiJBcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCkuc2V0U2l6ZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgIC8vIOaWsOimj2NhbnZhc+OBq+aPj+eUu1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIC8vIGNhbnZhc+WFqOS9k+OBruOCpOODoeODvOOCuOODh+ODvOOCv+mFjeWIl+OCkuOCsuODg+ODiFxyXG4gICAgdmFyIGltYWdlRGF0YSA9IGNhbnZhcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdmFyIGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgIC8vIOmAj+mBjuiJsuOBruaMh+WumuOBjOOBquOBkeOCjOOBsOW3puS4iuOBrnJnYuWApOOCkuaKveWHulxyXG4gICAgdmFyIHIgPSAoY29sb3IgIT09IHVuZGVmaW5lZCkgPyBjb2xvci5yIDogZGF0YVswXTtcclxuICAgIHZhciBnID0gKGNvbG9yICE9PSB1bmRlZmluZWQpID8gY29sb3IuZyA6IGRhdGFbMV07XHJcbiAgICB2YXIgYiA9IChjb2xvciAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yLmIgOiBkYXRhWzJdO1xyXG4gICAgLy8g6YWN5YiX44KSNOimgee0oOebruOBi+OCiTTjgaTpo5vjgbPvvIjjgqLjg6vjg5XjgqHlgKTvvInjgafjg6vjg7zjg5dcclxuICAgIC8vICgzKS5zdGVwKGRhdGEubGVuZ3RoLCA0LCBmdW5jdGlvbihpKSB7XHJcbiAgICBzdGVwLmNhbGwoMywgZGF0YS5sZW5ndGgsIDQsIGZ1bmN0aW9uKGkpIHtcclxuICAgICAgLy8gcmdi5YCk44KS6YCG566X44Gn44Ky44OD44OI44GX44CB5bem5LiK44Gucmdi44Go5q+U6LyDXHJcbiAgICAgIGlmIChkYXRhW2kgLSAzXSA9PT0gciAmJiBkYXRhW2kgLSAyXSA9PT0gZyAmJiBkYXRhW2kgLSAxXSA9PT0gYikge1xyXG4gICAgICAgIC8vIOS4gOiHtOOBl+OBn+WgtOWQiOOBr+OCouODq+ODleOCoeWApOOCkuabuOOBjeaPm+OBiOOCi1xyXG4gICAgICAgIGRhdGFbaV0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOabuOOBjeaPm+OBiOOBn+OCpOODoeODvOOCuOODh+ODvOOCv+OCkmNhbnZhc+OBq+aIu+OBmVxyXG4gICAgY2FudmFzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXIoZmlsdGVycykge1xyXG4gICAgaWYgKCFmaWx0ZXJzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbHRlcnMpKSB7XHJcbiAgICAgIGZpbHRlcnMgPSBbZmlsdGVyc107XHJcbiAgICB9XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgdyA9IGltYWdlLndpZHRoO1xyXG4gICAgdmFyIGggPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpLnNldFNpemUodywgaCk7XHJcbiAgICB2YXIgaW1hZ2VEYXRhID0gbnVsbDtcclxuXHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgaW1hZ2VEYXRhID0gY2FudmFzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpO1xyXG4gICAgZmlsdGVycy5mb3JFYWNoKCBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgaWYgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gaC50aW1lcyggZnVuY3Rpb24gKHkpIHtcclxuICAgICAgICB0aW1lcy5jYWxsKGgsIGZ1bmN0aW9uICh5KSB7XHJcbiAgICAgICAgICAvLyB3LnRpbWVzKCBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgdGltZXModywgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAoeSAqIHcgKyB4KSAqIDQ7XHJcbiAgICAgICAgICAgIHZhciBwaXhlbCA9IGltYWdlRGF0YS5kYXRhLnNsaWNlKGksIGkgKyA0KTtcclxuICAgICAgICAgICAgZm4ocGl4ZWwsIGksIHgsIHksIGltYWdlRGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjYW52YXMuY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGNhbnZhcy5kb21FbGVtZW50O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlNvdW5kXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBTb3VuZCBleHRlbmRzIEFzc2V0IHtcclxuICBcclxuICAvLyBfbG9vcDogZmFsc2UsXHJcbiAgLy8gX2xvb3BTdGFydDogMCxcclxuICAvLyBfbG9vcEVuZDogMCxcclxuICAvLyBfcGxheWJhY2tSYXRlOiAxLFxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xvb3BTdGFydCA9IDA7XHJcbiAgICB0aGlzLl9sb29wRW5kID0gMDtcclxuICAgIHRoaXMuX3BsYXliYWNrUmF0ZSA9IDE7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBTb3VuZC5nZXRBdWRpb0NvbnRleHQoKTtcclxuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gIH1cclxuXHJcbiAgcGxheSh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICB3aGVuID0gd2hlbiA/IHdoZW4gKyB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgOiAwO1xyXG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XHJcblxyXG4gICAgaWYgKHRoaXMuc291cmNlKSA7XHJcblxyXG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgdmFyIGJ1ZmZlciA9IHNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcclxuICAgIHNvdXJjZS5sb29wID0gdGhpcy5fbG9vcDtcclxuICAgIHNvdXJjZS5sb29wU3RhcnQgPSB0aGlzLl9sb29wU3RhcnQ7XHJcbiAgICBzb3VyY2UubG9vcEVuZCA9IHRoaXMuX2xvb3BFbmQ7XHJcbiAgICBzb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG5cclxuICAgIC8vIGNvbm5lY3RcclxuICAgIHNvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xyXG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KFNvdW5kLmdldE1hc3RlckdhaW4oKSk7XHJcbiAgICAvLyBwbGF5XHJcbiAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBzb3VyY2Uuc3RhcnQod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc291cmNlLnN0YXJ0KHdoZW4sIG9mZnNldCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNoZWNrIHBsYXkgZW5kXHJcbiAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmZsYXJlKCdlbmRlZCcpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICAvLyBzdG9wXHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIHtcclxuICAgICAgLy8gc3RvcCDjgZnjgovjgaggc291cmNlLmVuZGVk44KC55m654Gr44GZ44KLXHJcbiAgICAgIHRoaXMuc291cmNlLnN0b3AgJiYgdGhpcy5zb3VyY2Uuc3RvcCgwKTtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xyXG4gICAgICB0aGlzLmZsYXJlKCdzdG9wJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IDA7XHJcbiAgICB0aGlzLmZsYXJlKCdwYXVzZScpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLnNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSB0aGlzLl9wbGF5YmFja1JhdGU7XHJcbiAgICB0aGlzLmZsYXJlKCdyZXN1bWUnKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8g6Kmm44GX44Gm44G/44KL44Gq44GGXHJcbiAgX29zY2lsbGF0b3IodHlwZSkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgdmFyIG9zY2lsbGF0b3IgPSBjb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcclxuXHJcbiAgICAvLyBTaW5lIHdhdmUgaXMgdHlwZSA9IOKAnHNpbmXigJ1cclxuICAgIC8vIFNxdWFyZSB3YXZlIGlzIHR5cGUgPSDigJxzcXVhcmXigJ1cclxuICAgIC8vIFNhd3Rvb3RoIHdhdmUgaXMgdHlwZSA9IOKAnHNhd+KAnVxyXG4gICAgLy8gVHJpYW5nbGUgd2F2ZSBpcyB0eXBlID0g4oCcdHJpYW5nbGXigJ1cclxuICAgIC8vIEN1c3RvbSB3YXZlIGlzIHR5cGUgPSDigJxjdXN0b23igJ0gXHJcbiAgICBvc2NpbGxhdG9yLnR5cGUgPSB0eXBlIHx8ICdzaW5lJztcclxuXHJcbiAgICB0aGlzLnNvdXJjZSA9IG9zY2lsbGF0b3I7XHJcbiAgICAvLyBjb25uZWN0XHJcbiAgICB0aGlzLnNvdXJjZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZyb21CdWZmZXIoYnVmZmVyKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAvLyBzZXQgZGVmYXVsdCBidWZmZXJcclxuICAgIGlmICghYnVmZmVyKSB7XHJcbiAgICAgIGJ1ZmZlciA9IGNvbnRleHQuY3JlYXRlQnVmZmVyKCAxLCA0NDEwMCwgNDQxMDAgKTtcclxuICAgICAgdmFyIGNoYW5uZWwgPSBidWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XHJcblxyXG4gICAgICBmb3IoIHZhciBpPTA7IGkgPCBjaGFubmVsLmxlbmd0aDsgaSsrIClcclxuICAgICAge1xyXG4gICAgICAgIGNoYW5uZWxbaV0gPSBNYXRoLnNpbiggaSAvIDEwMCAqIE1hdGguUEkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc291cmNlXHJcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcclxuICB9XHJcblxyXG4gIHNldExvb3AobG9vcCkge1xyXG4gICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9vcFN0YXJ0KGxvb3BTdGFydCkge1xyXG4gICAgdGhpcy5sb29wU3RhcnQgPSBsb29wU3RhcnQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldExvb3BFbmQobG9vcEVuZCkge1xyXG4gICAgdGhpcy5sb29wRW5kID0gbG9vcEVuZDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICBzZXRQbGF5YmFja1JhdGUocGxheWJhY2tSYXRlKSB7XHJcbiAgICB0aGlzLnBsYXliYWNrUmF0ZSA9IHBsYXliYWNrUmF0ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocikge1xyXG4gICAgaWYgKC9eZGF0YTovLnRlc3QodGhpcy5zcmMpKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRGcm9tVVJJU2NoZW1lKHIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRGcm9tRmlsZShyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2FkRnJvbUZpbGUocikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhtbC5vcGVuKCdHRVQnLCB0aGlzLnNyYyk7XHJcbiAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeG1sLnN0YXR1cykgIT09IC0xKSB7XHJcblxyXG4gICAgICAgICAgLy8g6Z+z5qW944OQ44Kk44OK44Oq44O844OH44O844K/XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHhtbC5yZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAvLyB3ZWJhdWRpbyDnlKjjgavlpInmj5tcclxuICAgICAgICAgIHNlbGYuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoZGF0YSwgZnVuY3Rpb24oYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHNlbGYubG9hZEZyb21CdWZmZXIoYnVmZmVyKTtcclxuICAgICAgICAgICAgcihzZWxmKTtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCLpn7Plo7Djg5XjgqHjgqTjg6vjga7jg4fjgrPjg7zjg4njgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIIoXCIgKyBzZWxmLnNyYyArIFwiKVwiKTtcclxuICAgICAgICAgICAgcihzZWxmKTtcclxuICAgICAgICAgICAgc2VsZi5mbGFyZSgnZGVjb2RlZXJyb3InKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHhtbC5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgLy8gbm90IGZvdW5kXHJcblxyXG4gICAgICAgICAgc2VsZi5sb2FkRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgc2VsZi5ub3RGb3VuZD0gdHJ1ZTtcclxuICAgICAgICAgIHIoc2VsZik7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdsb2FkZXJyb3InKTtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ25vdGZvdW5kJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyDjgrXjg7zjg5Djg7zjgqjjg6njg7xcclxuXHJcbiAgICAgICAgICBzZWxmLmxvYWRFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICBzZWxmLnNlcnZlckVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgIHIoc2VsZik7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdsb2FkZXJyb3InKTtcclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ3NlcnZlcmVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHhtbC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG5cclxuICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWRGcm9tVVJJU2NoZW1lKHIpIHtcclxuICAgIHZhciBieXRlU3RyaW5nID0gJyc7XHJcbiAgICBpZiAodGhpcy5zcmMuc3BsaXQoJywnKVswXS5pbmRleE9mKCdiYXNlNjQnKSA+PSAwKSB7XHJcbiAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKHRoaXMuc3JjLnNwbGl0KCcsJylbMV0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJ5dGVTdHJpbmcgPSB1bmVzY2FwZSh0aGlzLnNyYy5zcGxpdCgnLCcpWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgbGVuID0gYnl0ZVN0cmluZy5sZW5ndGg7XHJcbiAgICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuXHJcbiAgICBmb3IgKHZhciBpPTA7IGk8bGVuOyArK2kpIHtcclxuICAgICAgYnVmZmVyW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlYmF1ZGlvIOeUqOOBq+WkieaPm1xyXG4gICAgdGhpcy5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShidWZmZXIuYnVmZmVyLCBmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgc2VsZi5sb2FkRnJvbUJ1ZmZlcihidWZmZXIpO1xyXG4gICAgICByKHNlbGYpO1xyXG4gICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIumfs+WjsOODleOCoeOCpOODq+OBruODh+OCs+ODvOODieOBq+WkseaVl+OBl+OBvuOBl+OBn+OAgihcIiArIHNlbGYuc3JjICsgXCIpXCIpO1xyXG4gICAgICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHIoc2VsZik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWREdW1teSgpIHtcclxuICAgIHRoaXMubG9hZEZyb21CdWZmZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCB2b2x1bWUoKSAgeyByZXR1cm4gdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlOyB9XHJcbiAgc2V0IHZvbHVtZSh2KSB7IHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHY7IH1cclxuXHJcbiAgZ2V0IGxvb3AoKSAgeyByZXR1cm4gdGhpcy5fbG9vcDsgfVxyXG4gIHNldCBsb29wKHYpIHtcclxuICAgIHRoaXMuX2xvb3AgPSB2O1xyXG4gICAgaWYgKHRoaXMuc291cmNlKSB0aGlzLnNvdXJjZS5fbG9vcCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9vcFN0YXJ0KCkgIHsgcmV0dXJuIHRoaXMuX2xvb3BTdGFydDsgfVxyXG4gIHNldCBsb29wU3RhcnQodikge1xyXG4gICAgdGhpcy5fbG9vcFN0YXJ0ID0gdjtcclxuICAgIGlmICh0aGlzLnNvdXJjZSkgdGhpcy5zb3VyY2UuX2xvb3BTdGFydCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9vcEVuZCgpICB7IHJldHVybiB0aGlzLl9sb29wRW5kOyB9XHJcbiAgc2V0IGxvb3BFbmQodikge1xyXG4gICAgdGhpcy5fbG9vcEVuZCA9IHY7XHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIHRoaXMuc291cmNlLl9sb29wRW5kID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBwbGF5YmFja1JhdGUoKSB7IHJldHVybiB0aGlzLl9wbGF5YmFja1JhdGU7IH1cclxuICBzZXQgcGxheWJhY2tSYXRlKHYpIHtcclxuICAgIHRoaXMuX3BsYXliYWNrUmF0ZSA9IHY7XHJcbiAgICBpZih0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgIT09IDApe1xyXG4gICAgICB0aGlzLnNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSB2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE1hc3RlckdhaW4oKSB7XHJcbiAgICBpZighdGhpcy5fbWFzdGVyR2Fpbikge1xyXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMuZ2V0QXVkaW9Db250ZXh0KCk7XHJcbiAgICAgIHRoaXMuX21hc3RlckdhaW4gPSBjb250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgdGhpcy5fbWFzdGVyR2Fpbi5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX21hc3RlckdhaW47XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0QXVkaW9Db250ZXh0KCkge1xyXG4gICAgaWYgKCFTdXBwb3J0LndlYkF1ZGlvKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIHZhciBnID0gcGhpbmEkMS5nbG9iYWw7XHJcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGcuQXVkaW9Db250ZXh0KSB7XHJcbiAgICAgIGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChnLndlYmtpdEF1ZGlvQ29udGV4dCkge1xyXG4gICAgICBjb250ZXh0ID0gbmV3IHdlYmtpdEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZy5tb3pBdWRpb0NvbnRleHQpIHtcclxuICAgICAgY29udGV4dCA9IG5ldyBtb3pBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIGRlZmluZWRcclxuYWNjZXNzb3IuY2FsbChTb3VuZCwgJ3ZvbHVtZScsIHtcclxuLy8gdGhpcy5hY2Nlc3Nvcigndm9sdW1lJywge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNYXN0ZXJHYWluKCkuZ2Fpbi52YWx1ZTtcclxuICB9LFxyXG4gIHNldDogZnVuY3Rpb24odikge1xyXG4gICAgdGhpcy5nZXRNYXN0ZXJHYWluKCkuZ2Fpbi52YWx1ZSA9IHY7XHJcbiAgfSxcclxufSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuU2NyaXB0XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBTY3JpcHQgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlNwcml0ZVNoZWV0XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBTcHJpdGVTaGVldCBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAocGFyYW1zKSB7XHJcbiAgICB0aGlzLl9zZXR1cEZyYW1lKHBhcmFtcy5mcmFtZSk7XHJcbiAgICB0aGlzLl9zZXR1cEFuaW0ocGFyYW1zLmFuaW1hdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhciB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgeG1sLm9wZW4oJ0dFVCcsIHRoaXMuc3JjKTtcclxuICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgaWYgKFsyMDAsIDIwMSwgMF0uaW5kZXhPZih4bWwuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB4bWwucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnNldHVwKGpzb24pO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB4bWwuc2VuZChudWxsKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNldHVwKHRoaXMuc3JjKTtcclxuICAgICAgcmVzb2x2ZShzZWxmKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBfc2V0dXBGcmFtZShmcmFtZSkge1xyXG4gICAgdmFyIGZyYW1lcyA9IHRoaXMuZnJhbWVzID0gW107XHJcbiAgICB2YXIgdW5pdFdpZHRoID0gZnJhbWUud2lkdGg7XHJcbiAgICB2YXIgdW5pdEhlaWdodCA9IGZyYW1lLmhlaWdodDtcclxuXHJcbiAgICB2YXIgY291bnQgPSBmcmFtZS5yb3dzICogZnJhbWUuY29scztcclxuICAgIHRoaXMuZnJhbWUgPSBjb3VudDtcclxuXHJcbiAgICB0aW1lcy5jYWxsKGNvdW50LCBmdW5jdGlvbihpKSB7XHJcbiAgICAvLyAoY291bnQpLnRpbWVzKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgdmFyIHhJbmRleCA9IGklZnJhbWUuY29scztcclxuICAgICAgdmFyIHlJbmRleCA9IChpL2ZyYW1lLmNvbHMpfDA7XHJcblxyXG4gICAgICBmcmFtZXMucHVzaCh7XHJcbiAgICAgICAgeDogeEluZGV4KnVuaXRXaWR0aCxcclxuICAgICAgICB5OiB5SW5kZXgqdW5pdEhlaWdodCxcclxuICAgICAgICB3aWR0aDogdW5pdFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdW5pdEhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXR1cEFuaW0oYW5pbWF0aW9ucykge1xyXG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XHJcblxyXG4gICAgLy8g44OH44OV44Kp44Or44OI44Ki44OL44Oh44O844K344On44OzXHJcbiAgICB0aGlzLmFuaW1hdGlvbnNbXCJkZWZhdWx0XCJdID0ge1xyXG4gICAgICAgIGZyYW1lczogcmFuZ2UuY2FsbChbXSwgMCwgdGhpcy5mcmFtZSksXHJcbiAgICAgICAgLy8gZnJhbWVzOiBbXS5yYW5nZSgwLCB0aGlzLmZyYW1lKSxcclxuICAgICAgICBuZXh0OiBcImRlZmF1bHRcIixcclxuICAgICAgICBmcmVxdWVuY3k6IDEsXHJcbiAgICB9O1xyXG5cclxuICAgIGZvckluLmNhbGwoYW5pbWF0aW9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gYW5pbWF0aW9ucy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciBhbmltID0gdmFsdWU7XHJcblxyXG4gICAgICBpZiAoYW5pbSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW2tleV0gPSB7XHJcbiAgICAgICAgICBmcmFtZXM6IHJhbmdlLmNhbGwoW10sIGFuaW1bMF0sIGFuaW1bMV0pLFxyXG4gICAgICAgICAgLy8gZnJhbWVzOiBbXS5yYW5nZShhbmltWzBdLCBhbmltWzFdKSxcclxuICAgICAgICAgIG5leHQ6IGFuaW1bMl0sXHJcbiAgICAgICAgICBmcmVxdWVuY3k6IGFuaW1bM10gfHwgMSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1trZXldID0ge1xyXG4gICAgICAgICAgZnJhbWVzOiBhbmltLmZyYW1lcyxcclxuICAgICAgICAgIG5leHQ6IGFuaW0ubmV4dCxcclxuICAgICAgICAgIGZyZXF1ZW5jeTogYW5pbS5mcmVxdWVuY3kgfHwgMVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODleODrOODvOODoOOCkuWPluW+l1xyXG4gICAqL1xyXG4gIGdldEZyYW1lKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5mcmFtZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0QW5pbWF0aW9uKG5hbWUpIHtcclxuICAgIG5hbWUgPSAobmFtZSAhPT0gdW5kZWZpbmVkKSA/IG5hbWUgOiBcImRlZmF1bHRcIjtcclxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbnNbbmFtZV07XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkZvbnRcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIEZvbnQgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZm9udE5hbWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgbG9hZChwYXRoKSB7XHJcbiAgICB0aGlzLnNyYyA9IHBhdGg7XHJcblxyXG4gICAgdmFyIHJlZyA9IC8oLiopKD86XFwuKFteLl0rJCkpLztcclxuICAgIHZhciBrZXkgPSB0aGlzLmZvbnROYW1lIHx8IGxhc3QuY2FsbChwYXRoLm1hdGNoKHJlZylbMV0uc3BsaXQoJy8nKSk7ICAgIC8v44OV44Kp44Oz44OI5ZCN5oyH5a6a44GM54Sh44GE5aC05ZCI44GvcGF0aOOBruaLoeW8teWtkOWJjeOCkuS9v+eUqFxyXG4gICAgLy8gdmFyIGtleSA9IHRoaXMuZm9udE5hbWUgfHwgcGF0aC5tYXRjaChyZWcpWzFdLnNwbGl0KCcvJykubGFzdDsgICAgLy/jg5Xjgqnjg7Pjg4jlkI3mjIflrprjgYznhKHjgYTloLTlkIjjga9wYXRo44Gu5ouh5by15a2Q5YmN44KS5L2/55SoXHJcbiAgICB2YXIgdHlwZSA9IHBhdGgubWF0Y2gocmVnKVsyXTtcclxuICAgIHZhciBmb3JtYXQkMSA9IFwidW5rbm93blwiO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJ0dGZcIjpcclxuICAgICAgICBmb3JtYXQkMSA9IFwidHJ1ZXR5cGVcIjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJvdGZcIjpcclxuICAgICAgICBmb3JtYXQkMSA9IFwib3BlbnR5cGVcIjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ3b2ZmXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcIndvZmZcIjsgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ3b2ZmMlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJ3b2ZmMlwiOyBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLjgrXjg53jg7zjg4jjgZfjgabjgYTjgarjgYTjg5Xjgqnjg7Pjg4jlvaLlvI/jgafjgZnjgIIoXCIgKyBwYXRoICsgXCIpXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQkMTtcclxuICAgIHRoaXMuZm9udE5hbWUgPSBrZXk7XHJcblxyXG4gICAgaWYgKGZvcm1hdCQxICE9PSBcInVua25vd25cIikge1xyXG4gICAgICB2YXIgdGV4dCA9IGZvcm1hdC5jYWxsKFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAnezB9Jzsgc3JjOiB1cmwoezF9KSBmb3JtYXQoJ3syfScpOyB9XCIsIGtleSwgcGF0aCwgZm9ybWF0JDEpO1xyXG4gICAgICAvLyB2YXIgdGV4dCA9IFwiQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAnezB9Jzsgc3JjOiB1cmwoezF9KSBmb3JtYXQoJ3syfScpOyB9XCIuZm9ybWF0KGtleSwgcGF0aCwgZm9ybWF0KTtcclxuICAgICAgdmFyIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcclxuICAgICAgdmFyIGZvbnRGYWNlU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICBpZiAoZm9udEZhY2VTdHlsZUVsZW1lbnQuaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgZm9udEZhY2VTdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb250RmFjZVN0eWxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgZS5hcHBlbmRDaGlsZChmb250RmFjZVN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGbG93KHRoaXMuX2xvYWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXQgIT09IFwidW5rbm93blwiKSB7XHJcbiAgICAgIHRoaXMuX2NoZWNrTG9hZGVkKHRoaXMuZm9udE5hbWUsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NoZWNrTG9hZGVkIChmb250LCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHZhciBERUZBVUxUX0ZPTlQgPSBjYW52YXMuY29udGV4dC5mb250LnNwbGl0KCcgJylbMV07XHJcbiAgICBjYW52YXMuY29udGV4dC5mb250ID0gJzQwcHggJyArIERFRkFVTFRfRk9OVDtcclxuXHJcbiAgICB2YXIgY2hlY2tUZXh0ID0gXCIxMjM0NTY3ODkwLV5cXFxccXdlcnR5dWlvcEBbYXNkZmdoamtsOzpdenhjdmJubSwuL1xcIVxcXCIjJCUmJygpPX58UVdFUlRZVUlPUGB7QVNERkdISktMKyp9WlhDVkJOTTw+P1/vvJHvvJLvvJPvvJTvvJXvvJbvvJfvvJjvvJnvvJDvvI3vvL7vv6XvvZHvvZfvvYXvvZLvvZTvvZnvvZXvvYnvvY/vvZDvvYHvvZPvvYTvvYbvvYfvvYjvvYrvvYvvvYzvvZrvvZjvvYPvvZbvvYLvvY7vvY3vvIzvvI7jgYLjgYTjgYbjgYvjgZXjgZ/jgarjgpLjgpPmmYLjga/ph5HjgarjgopcIjtcclxuICAgIC8vIOeJueauiuaWh+Wtl+WvvuW/nFxyXG4gICAgY2hlY2tUZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXCIweGYwNGJcIik7XHJcblxyXG4gICAgdmFyIGJlZm9yZSA9IGNhbnZhcy5jb250ZXh0Lm1lYXN1cmVUZXh0KGNoZWNrVGV4dCkud2lkdGg7XHJcbiAgICBjYW52YXMuY29udGV4dC5mb250ID0gJzQwcHggJyArIGZvbnQgKyAnLCAnICsgREVGQVVMVF9GT05UO1xyXG5cclxuICAgIHZhciB0aW1lb3V0Q291bnQgPSAzMDtcclxuICAgIHZhciBjaGVja0xvYWRGb250ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYWZ0ZXIgPSBjYW52YXMuY29udGV4dC5tZWFzdXJlVGV4dChjaGVja1RleHQpLndpZHRoO1xyXG4gICAgICBpZiAoYWZ0ZXIgIT09IGJlZm9yZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKC0tdGltZW91dENvdW50ID4gMCkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChjaGVja0xvYWRGb250LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJ0aW1lb3V0IGZvbnQgbG9hZGluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjaGVja0xvYWRGb250KCk7XHJcbiAgfVxyXG5cclxuICBzZXRGb250TmFtZShuYW1lKSB7XHJcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwi44OV44Kp44Oz44OI5ZCN44GvTG9hZOWJjeOBq+OBruOBv+ioreWumuOBjOWHuuadpeOBvuOBmShcIiArIG5hbWUgKyBcIilcIik7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb250TmFtZSA9IG5hbWU7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9udE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb250TmFtZTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuRmlsZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgRmlsZSBleHRlbmRzIEFzc2V0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAkZXh0ZW5kLmNhbGwocGFyYW1zLCB7XHJcbiAgICAgIC8vIHBhcmFtcy4kZXh0ZW5kKHtcclxuICAgICAgICBwYXRoOiB0aGlzLnNyYyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5zcmMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICRleHRlbmQuY2FsbChwYXJhbXMsIHRoaXMuc3JjKTtcclxuICAgICAgLy8gcGFyYW1zLiRleHRlbmQodGhpcy5zcmMpO1xyXG4gICAgfVxyXG5cclxuICAgICRzYWZlLmNhbGwocGFyYW1zLCB7XHJcbiAgICAvLyBwYXJhbXMuJHNhZmUoe1xyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgZGF0YVR5cGU6ICd0ZXh0JyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxvYWRcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhtbC5vcGVuKCdHRVQnLCBwYXJhbXMucGF0aCk7XHJcbiAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeG1sLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHhtbC5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgICAgaWYgKHBhcmFtcy5kYXRhVHlwZSA9PT0gJ2pzb24nKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZGF0YVR5cGUgPT09ICd4bWwnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGYuZGF0YVR5cGUgPSBwYXJhbXMuZGF0YVR5cGU7XHJcblxyXG4gICAgICAgICAgc2VsZi5kYXRhID0gZGF0YTtcclxuICAgICAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgLy8gdGhpcy5kb21FbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcblxyXG4gICAgLy8gdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gdGhpcy5kb21FbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICBzZWxmLmxvYWRlZCA9IHRydWU7XHJcbiAgICAvLyAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAvLyB9O1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Bc3NldExvYWRlclxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQXNzZXRMb2FkZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgLy8gcGFyYW1zID0gKHBhcmFtcyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgLy8gICBjYWNoZTogdHJ1ZSxcclxuICAgIC8vIH0pO1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbChwYXJhbXN8fHt9LCB7IGNhY2hlOiB0cnVlIH0pO1xyXG5cclxuICAgIHRoaXMuYXNzZXRzID0ge307XHJcbiAgICB0aGlzLmNhY2hlID0gcGFyYW1zLmNhY2hlO1xyXG4gIH1cclxuXHJcbiAgbG9hZChwYXJhbXMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBmbG93cyA9IFtdO1xyXG5cclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHZhciBsZW5ndGggPSAwO1xyXG4gICAgZm9ySW4uY2FsbChwYXJhbXMsIGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICBsZW5ndGggKz0gT2JqZWN0LmtleXMoYXNzZXRzKS5sZW5ndGg7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZm9ySW4uY2FsbChwYXJhbXMsIGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICBmb3JJbi5jYWxsKGFzc2V0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBhc3NldHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBmdW5jID0gQXNzZXRMb2FkZXIuYXNzZXRMb2FkRnVuY3Rpb25zW3R5cGVdO1xyXG4gICAgICAgIHZhciBmbG93ID0gZnVuYyhrZXksIHZhbHVlKTtcclxuICAgICAgICBmbG93LnRoZW4oZnVuY3Rpb24oYXNzZXQpIHtcclxuICAgICAgICAgIGlmIChzZWxmLmNhY2hlKSB7XHJcbiAgICAgICAgICAgIEFzc2V0TWFuYWdlci5zZXQodHlwZSwga2V5LCBhc3NldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdwcm9ncmVzcycsIHtcclxuICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6ICgrK2NvdW50ZXIvbGVuZ3RoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZsb3dzLnB1c2goZmxvdyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmIChzZWxmLmNhY2hlKSB7XHJcblxyXG4gICAgICBzZWxmLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5wcm9ncmVzcyA+PSAxLjApIHtcclxuICAgICAgICAgIC8vIGxvYWTlpLHmlZfmmYLjgIHlr77nrZZcclxuXHJcbiAgICAgICAgICBmb3JJbi5jYWxsKHBhcmFtcywgZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAgICAgICAvLyBwYXJhbXMuZm9ySW4oZnVuY3Rpb24odHlwZSwgYXNzZXRzKSB7XHJcbiAgICAgICAgICAgIGZvckluLmNhbGwoYXNzZXRzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIGFzc2V0cy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gQXNzZXRNYW5hZ2VyLmdldCh0eXBlLCBrZXkpO1xyXG4gICAgICAgICAgICAgIGlmIChhc3NldC5sb2FkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdW1teSA9IEFzc2V0TWFuYWdlci5nZXQodHlwZSwgJ2R1bW15Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVtbXkpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGR1bW15LmxvYWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1bW15LmxvYWREdW1teSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGR1bW15LmxvYWRFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEFzc2V0TWFuYWdlci5zZXQodHlwZSwga2V5LCBkdW1teSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBhc3NldC5sb2FkRHVtbXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBGbG93LmFsbChmbG93cykudGhlbihmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgIHNlbGYuZmxhcmUoJ2xvYWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlZ2lzdGVyKGtleSwgZnVuYykge1xyXG4gICAgdGhpcy5hc3NldExvYWRGdW5jdGlvbnNba2V5XSA9IGZ1bmM7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcblxyXG5Bc3NldExvYWRlci5hc3NldExvYWRGdW5jdGlvbnMgPSB7XHJcbiAgaW1hZ2U6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVGV4dHVyZSgpO1xyXG4gICAgdmFyIGZsb3cgPSB0ZXh0dXJlLmxvYWQocGF0aCk7XHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9LFxyXG4gIHNvdW5kOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBzb3VuZCA9IG5ldyBTb3VuZCgpO1xyXG4gICAgdmFyIGZsb3cgPSBzb3VuZC5sb2FkKHBhdGgpO1xyXG4gICAgcmV0dXJuIGZsb3c7XHJcbiAgfSxcclxuICBzcHJpdGVzaGVldDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgc3MgPSBuZXcgU3ByaXRlU2hlZXQoKTtcclxuICAgIHZhciBmbG93ID0gc3MubG9hZChwYXRoKTtcclxuICAgIHJldHVybiBmbG93O1xyXG4gIH0sXHJcbiAgc2NyaXB0OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBzY3JpcHQgPSBuZXcgU2NyaXB0KCk7XHJcbiAgICByZXR1cm4gc2NyaXB0LmxvYWQocGF0aCk7XHJcbiAgfSxcclxuICBmb250OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciBmb250ID0gbmV3IEZvbnQoKTtcclxuICAgIGZvbnQuc2V0Rm9udE5hbWUoa2V5KTtcclxuICAgIHJldHVybiBmb250LmxvYWQocGF0aCk7XHJcbiAgfSxcclxuICBqc29uOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0ID0gbmV3IEZpbGUoKTtcclxuICAgIHJldHVybiB0ZXh0LmxvYWQoe1xyXG4gICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHhtbDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBGaWxlKCk7XHJcbiAgICByZXR1cm4gdGV4dC5sb2FkKHtcclxuICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgZGF0YVR5cGU6IFwieG1sXCIsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHRleHQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHQgPSBuZXcgRmlsZSgpO1xyXG4gICAgcmV0dXJuIHRleHQubG9hZChwYXRoKTtcclxuICB9XHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuU291bmRNYW5hZ2VyXHJcbiAqICMjIyBSZWZcclxuICogLSBodHRwOi8vZXZvbHZlLnJlaW50cm9kdWNpbmcuY29tL19zb3VyY2UvY2xhc3Nlcy9hczMvU291bmRNYW5hZ2VyL1NvdW5kTWFuYWdlci5odG1sXHJcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2tsb2Nrd29vZC9Tb3VuZE1hbmFnZXJcclxuICovXHJcbmNsYXNzIFNvdW5kTWFuYWdlciB7XHJcbiAgLy8gdm9sdW1lOiAwLjgsXHJcbiAgLy8gbXVzaWNWb2x1bWU6IDAuOCxcclxuICAvLyBtdXRlRmxhZzogZmFsc2UsXHJcbiAgLy8gY3VycmVudE11c2ljOiBudWxsLFxyXG5cclxuICBzdGF0aWMgcGxheShuYW1lLCB3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICB2YXIgc291bmQgPSBBc3NldE1hbmFnZXIuZ2V0KCdzb3VuZCcsIG5hbWUpO1xyXG5cclxuICAgIHNvdW5kLnZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lKCk7XHJcbiAgICBzb3VuZC5wbGF5KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pO1xyXG5cclxuICAgIHJldHVybiBzb3VuZDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdG9wKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG4gIHN0YXRpYyBwYXVzZSgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuICBzdGF0aWMgZmFkZSgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuICBzdGF0aWMgc2V0Vm9sdW1lKHZvbHVtZSkge1xyXG4gICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRWb2x1bWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52b2x1bWU7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOODn+ODpeODvOODiFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtdXRlKCkge1xyXG4gICAgdGhpcy5tdXRlRmxhZyA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TXVzaWMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TXVzaWMudm9sdW1lID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOODn+ODpeODvOODiOino+mZpFxyXG4gICAqL1xyXG4gIHN0YXRpYyB1bm11dGUoKSB7XHJcbiAgICB0aGlzLm11dGVGbGFnID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50TXVzaWMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TXVzaWMudm9sdW1lID0gdGhpcy5nZXRWb2x1bWVNdXNpYygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHN0YXRpYyBpc011dGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tdXRlRmxhZztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwbGF5TXVzaWMobmFtZSwgZmFkZVRpbWUsIGxvb3AsIHdoZW4sIG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIGxvb3AgPSAobG9vcCAhPT0gdW5kZWZpbmVkKSA/IGxvb3AgOiB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLnN0b3BNdXNpYyhmYWRlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG11c2ljID0gQXNzZXRNYW5hZ2VyLmdldCgnc291bmQnLCBuYW1lKTtcclxuXHJcbiAgICBtdXNpYy5zZXRMb29wKGxvb3ApO1xyXG4gICAgbXVzaWMucGxheSh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKTtcclxuXHJcbiAgICBpZiAoZmFkZVRpbWUgPiAwKSB7XHJcbiAgICAgIHZhciBjb3VudCA9IDMyO1xyXG4gICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgIHZhciB1bml0VGltZSA9IGZhZGVUaW1lL2NvdW50O1xyXG4gICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWVNdXNpYygpO1xyXG5cclxuICAgICAgbXVzaWMudm9sdW1lID0gMDtcclxuICAgICAgdmFyIGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICAgIHZhciByYXRlID0gY291bnRlci9jb3VudDtcclxuICAgICAgICBtdXNpYy52b2x1bWUgPSByYXRlKnZvbHVtZTtcclxuXHJcbiAgICAgICAgaWYgKHJhdGUgPj0gMSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSwgdW5pdFRpbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG11c2ljLnZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRNdXNpYyA9IG11c2ljO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNdXNpYztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdG9wTXVzaWMoZmFkZVRpbWUpIHtcclxuICAgIGlmICghdGhpcy5jdXJyZW50TXVzaWMpIHsgcmV0dXJuIDsgfVxyXG5cclxuICAgIHZhciBtdXNpYyA9IHRoaXMuY3VycmVudE11c2ljO1xyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMgPSBudWxsO1xyXG5cclxuICAgIGlmIChmYWRlVGltZSA+IDApIHtcclxuICAgICAgdmFyIGNvdW50ID0gMzI7XHJcbiAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgdmFyIHVuaXRUaW1lID0gZmFkZVRpbWUvY291bnQ7XHJcbiAgICAgIHZhciB2b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcblxyXG4gICAgICBtdXNpYy52b2x1bWUgPSAwO1xyXG4gICAgICB2YXIgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgdmFyIHJhdGUgPSBjb3VudGVyL2NvdW50O1xyXG4gICAgICAgIG11c2ljLnZvbHVtZSA9IHZvbHVtZSooMS1yYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHJhdGUgPj0gMSkge1xyXG4gICAgICAgICAgbXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSwgdW5pdFRpbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG11c2ljLnN0b3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog6Z+z5qW944KS5LiA5pmC5YGc5q2iXHJcbiAgICovXHJcbiAgc3RhdGljIHBhdXNlTXVzaWMoKSB7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudE11c2ljKSB7IHJldHVybiA7IH1cclxuICAgIHRoaXMuY3VycmVudE11c2ljLnBhdXNlKCk7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog6Z+z5qW944KS5YaN6ZaLXHJcbiAgICovXHJcbiAgc3RhdGljIHJlc3VtZU11c2ljKCkge1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRNdXNpYykgeyByZXR1cm4gOyB9XHJcbiAgICB0aGlzLmN1cnJlbnRNdXNpYy5yZXN1bWUoKTtcclxuICB9XHJcbiAgLypcclxuICAgKiDpn7Pmpb3jga7jg5zjg6rjg6Xjg7zjg6DjgpLoqK3lrppcclxuICAgKi9cclxuICBzdGF0aWMgc2V0Vm9sdW1lTXVzaWModm9sdW1lKSB7XHJcbiAgICB0aGlzLm11c2ljVm9sdW1lID0gdm9sdW1lO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE11c2ljLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLypcclxuICAgKiDpn7Pmpb3jga7jg5zjg6rjg6Xjg7zjg6DjgpLlj5blvpdcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0Vm9sdW1lTXVzaWMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tdXNpY1ZvbHVtZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuU291bmRNYW5hZ2VyLnZvbHVtZSA9IDAuODtcclxuU291bmRNYW5hZ2VyLm11c2ljVm9sdW1lID0gMC44O1xyXG5Tb3VuZE1hbmFnZXIubXV0ZUZsYWcgPSBmYWxzZTtcclxuU291bmRNYW5hZ2VyLmN1cnJlbnRNdXNpYyA9IG51bGw7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuQnV0dG9uXHJcbiAqIEJ1dHRvblxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIEJ1dHRvbi5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHBoaW5hLnVpLkJ1dHRvbi5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IG9wdGlvbnMuY29ybmVyUmFkaXVzO1xyXG4gICAgdGhpcy50ZXh0ICAgICAgICAgPSBvcHRpb25zLnRleHQ7XHJcbiAgICB0aGlzLmZvbnRDb2xvciAgICA9IG9wdGlvbnMuZm9udENvbG9yO1xyXG4gICAgdGhpcy5mb250U2l6ZSAgICAgPSBvcHRpb25zLmZvbnRTaXplO1xyXG4gICAgdGhpcy5mb250V2VpZ2h0ICAgICA9IG9wdGlvbnMuZm9udFdlaWdodDtcclxuICAgIHRoaXMuZm9udEZhbWlseSAgID0gb3B0aW9ucy5mb250RmFtaWx5O1xyXG5cclxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdwdXNoJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5yb3VuZFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvcm5lclJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBwb3N0cmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIC8vIHRleHRcclxuICAgIHZhciBmb250ID0gZm9ybWF0LmNhbGwoXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLCB0aGlzKTtcclxuICAgIC8vIHZhciBmb250ID0gXCJ7Zm9udFdlaWdodH0ge2ZvbnRTaXplfXB4IHtmb250RmFtaWx5fVwiLmZvcm1hdCh0aGlzKTtcclxuICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5mb250Q29sb3I7XHJcbiAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dCwgMCwgMCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkJ1dHRvbi5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogMjAwLFxyXG4gIGhlaWdodDogODAsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdoc2woMjAwLCA4MCUsIDYwJSknLFxyXG4gIHN0cm9rZTogbnVsbCxcclxuXHJcbiAgY29ybmVyUmFkaXVzOiA4LFxyXG4gIHRleHQ6ICdIZWxsbycsXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGZvbnRTaXplOiAzMixcclxuICBmb250V2VpZ2h0OiAnJyxcclxuICBmb250RmFtaWx5OiBcIidIaXJhS2FrdVByb04tVzMnXCIsIC8vIEhpcmFnaW5vIG9yIEhlbHZldGljYSxcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ2Nvcm5lclJhZGl1cycpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAndGV4dCcpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnZm9udENvbG9yJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdmb250U2l6ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnZm9udEZhbWlseScpO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnVpLkdhdWdlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIEdhdWdlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucyB8fCB7fSwgR2F1Z2UuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEudWkuR2F1Z2UuZGVmYXVsdHMpO1xyXG4gICAgXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IChvcHRpb25zLnZhbHVlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy52YWx1ZSA6IG9wdGlvbnMubWF4VmFsdWU7XHJcbiAgICB0aGlzLm1heFZhbHVlID0gb3B0aW9ucy5tYXhWYWx1ZTtcclxuICAgIHRoaXMuZ2F1Z2VDb2xvciA9IG9wdGlvbnMuZ2F1Z2VDb2xvcjtcclxuICAgIHRoaXMuY29ybmVyUmFkaXVzID0gb3B0aW9ucy5jb3JuZXJSYWRpdXM7XHJcblxyXG4gICAgdGhpcy52aXN1YWxWYWx1ZSA9IChvcHRpb25zLnZhbHVlICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy52YWx1ZSA6IG9wdGlvbnMubWF4VmFsdWU7XHJcbiAgICB0aGlzLmFuaW1hdGlvbiA9IG9wdGlvbnMuYW5pbWF0aW9uO1xyXG4gICAgdGhpcy5hbmltYXRpb25UaW1lID0gMSoxMDAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rqA44K/44Oz44GL44KS44OB44Kn44OD44KvXHJcbiAgICovXHJcbiAgaXNGdWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IHRoaXMubWF4VmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnqbrjgaPjgb3jgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKi9cclxuICBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IDA7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgdmFsdWUgPSBjbGFtcCh2YWx1ZSwgMCwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAvLyB2YWx1ZSA9IE1hdGguY2xhbXAodmFsdWUsIDAsIHRoaXMubWF4VmFsdWUpO1xyXG5cclxuICAgIC8vIGVuZCB3aGVuIG5vdyB2YWx1ZSBlcXVhbCB2YWx1ZSBvZiBhcmd1bWVudFxyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gO1xyXG5cclxuICAgIC8vIGZpcmUgdmFsdWUgY2hhbmdlIGV2ZW50XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2UnKTtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICB2YXIgcmFuZ2UgPSBNYXRoLmFicyh0aGlzLnZpc3VhbFZhbHVlLXZhbHVlKTtcclxuICAgICAgdmFyIHRpbWUgPSAocmFuZ2UvdGhpcy5tYXhWYWx1ZSkqdGhpcy5hbmltYXRpb25UaW1lO1xyXG5cclxuICAgICAgdGhpcy50d2VlbmVyLm9udHdlZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMudHdlZW5lclxyXG4gICAgICAgIC5jbGVhcigpXHJcbiAgICAgICAgLnRvKHsndmlzdWFsVmFsdWUnOiB2YWx1ZX0sIHRpbWUpXHJcbiAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmZsYXJlKCdjaGFuZ2VkJyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFyZSgnZW1wdHknKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNGdWxsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFyZSgnZnVsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzdWFsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5mbGFyZSgnY2hhbmdlZCcpO1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgICB0aGlzLmZsYXJlKCdlbXB0eScpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuaXNGdWxsKCkpIHtcclxuICAgICAgICB0aGlzLmZsYXJlKCdmdWxsJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJhdGUoKSB7XHJcbiAgICB2YXIgcmF0ZSA9IHRoaXMudmlzdWFsVmFsdWUvdGhpcy5tYXhWYWx1ZTtcclxuICAgIHJldHVybiByYXRlO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnJvdW5kUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29ybmVyUmFkaXVzKTtcclxuICB9XHJcblxyXG4gIHBvc3RyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgcmF0ZSA9IHRoaXMuZ2V0UmF0ZSgpO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5nYXVnZUNvbG9yO1xyXG4gICAgY2FudmFzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgY2FudmFzLmNvbnRleHQuY2xpcCgpO1xyXG4gICAgY2FudmFzLmZpbGxSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoKnJhdGUsIHRoaXMuaGVpZ2h0KTtcclxuICAgIGNhbnZhcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgc2V0IHZhbHVlKHYpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkdhdWdlLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiAyNTYsXHJcbiAgaGVpZ2h0OiAzMixcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ3doaXRlJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuICBtYXhWYWx1ZTogMTAwLFxyXG4gIGdhdWdlQ29sb3I6ICcjNDRmJyxcclxuICBjb3JuZXJSYWRpdXM6IDAsXHJcbiAgYW5pbWF0aW9uOiB0cnVlXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ3ZhbHVlJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ21heFZhbHVlJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ2dhdWdlQ29sb3InKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEdhdWdlLCAnY29ybmVyUmFkaXVzJyk7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5DaXJjbGVHYXVnZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS51aS5HYXVnZVxyXG4gKi9cclxuY2xhc3MgQ2lyY2xlR2F1Z2UgZXh0ZW5kcyBHYXVnZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGZpbGw6ICcjYWFhJyxcclxuICAgICAgc3Ryb2tlOiAnIzIyMicsXHJcblxyXG4gICAgICByYWRpdXM6IDY0LFxyXG4gICAgICBhbnRpY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICBzaG93UGVyY2VudGFnZTogZmFsc2UsIC8vIFRPRE9cclxuICAgIH0pO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuXHJcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xyXG4gICAgdGhpcy5hbnRpY2xvY2t3aXNlID0gb3B0aW9ucy5hbnRpY2xvY2t3aXNlO1xyXG4gICAgdGhpcy5zaG93UGVyY2VudGFnZSA9IG9wdGlvbnMuc2hvd1BlcmNlbnRhZ2U7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICB2YXIgcmF0ZSA9IHRoaXMuZ2V0UmF0ZSgpO1xyXG4gICAgdmFyIGVuZCA9IChNYXRoLlBJKjIpKnJhdGU7XHJcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgdGhpcy5lbmRBbmdsZSA9IGVuZDtcclxuXHJcbiAgICB0aGlzLmNhbnZhcy5yb3RhdGUoLU1hdGguUEkqMC41KTtcclxuICAgIHRoaXMuY2FudmFzLnNjYWxlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGwoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuZmlsbFBpZSgwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5zdGFydEFuZ2xlLCB0aGlzLmVuZEFuZ2xlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN0cm9rZShjYW52YXMpIHtcclxuICAgIGNhbnZhcy5zdHJva2VBcmMoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc3RhcnRBbmdsZSwgdGhpcy5lbmRBbmdsZSk7XHJcbiAgfVxyXG5cclxuICBwb3N0cmVuZGVyKCkge1xyXG4gICAgLy8gaWYgKHRoaXMuc2hvd1BlcmNlbnRhZ2UpIHtcclxuICAgIC8vICAgLy8gVE9ETzpcclxuICAgIC8vICAgdmFyIGxlZnQgPSBNYXRoLm1heCgwLCB0aGlzLmxpbWl0LXRoaXMudGltZSk7XHJcbiAgICAvLyAgIHRoaXMubGFiZWwudGV4dCA9IE1hdGguY2VpbChsZWZ0LzEwMDApKycnO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbn1cblxudmFyIHRleHRXaWR0aENhY2hlID0ge307XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnVpLkxhYmVsQXJlYVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkxhYmVsXHJcbiAqL1xyXG5jbGFzcyBMYWJlbEFyZWEgZXh0ZW5kcyBMYWJlbCB7XHJcblxyXG4gIC8vIF9saW5lVXBkYXRlOiB0cnVlLFxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgTGFiZWxBcmVhLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSB7fS4kc2FmZShvcHRpb25zLCBMYWJlbEFyZWEuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5fbGluZVVwZGF0ZSA9IHRydWU7XHJcbiAgICB0aGlzLnZlcnRpY2FsQWxpZ24gPSBvcHRpb25zLnZlcnRpY2FsQWxpZ247XHJcbiAgICB0aGlzLnNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsIHx8IG5ldyBWZWN0b3IyKCk7XHJcbiAgICB0aGlzLnNjcm9sbFggPSBvcHRpb25zLnNjcm9sbFg7XHJcbiAgICB0aGlzLnNjcm9sbFkgPSBvcHRpb25zLnNjcm9sbFk7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzV2lkdGggKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggKyB0aGlzLnBhZGRpbmcgKiAyO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc0hlaWdodCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgKyB0aGlzLnBhZGRpbmcgKiAyO1xyXG4gIH1cclxuICBnZXRPZmZzZXRZICgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy52ZXJ0aWNhbEFsaWduID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEFsaWduO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhYmVsQXJlYS52ZXJ0aWNhbEFsaWduVG9PZmZzZXRNYXBbdGhpcy52ZXJ0aWNhbEFsaWduXSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0WCAoKSB7XHJcbiAgICByZXR1cm4gTGFiZWxBcmVhLmFsaWduVG9PZmZzZXRNYXBbdGhpcy5hbGlnbl0gfHwgMDtcclxuICB9XHJcblxyXG4gIGdldFRleHRXaWR0aENhY2hlICgpIHtcclxuICAgIHZhciBjYWNoZSA9IHRleHRXaWR0aENhY2hlW3RoaXMuZm9udF07XHJcbiAgICByZXR1cm4gY2FjaGUgfHwgKHRleHRXaWR0aENhY2hlW3RoaXMuZm9udF0gPSB7fSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNwbGljZUxpbmVzIChsaW5lcykge1xyXG4gICAgdmFyIHJvd1dpZHRoID0gdGhpcy53aWR0aDtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYW52YXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuZm9udCA9IHRoaXMuZm9udDtcclxuXHJcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmdldFRleHRXaWR0aENhY2hlKCk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGNhY2hlXHJcbiAgICBlYWNoJDEuY2FsbCh0aGlzLl90ZXh0LCBmdW5jdGlvbihjaCkge1xyXG4gICAgLy8gdGhpcy5fdGV4dC5lYWNoKGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAgIGlmICghY2FjaGVbY2hdKSB7XHJcbiAgICAgICAgY2FjaGVbY2hdID0gY29udGV4dC5tZWFzdXJlVGV4dChjaCkud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB2YXIgbG9jYWxMaW5lcyA9IFtdO1xyXG4gICAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgIHZhciB0b3RhbFdpZHRoID0gMDtcclxuXHJcbiAgICAgIC8vIOOBr+OBv+WHuuOBpuOBhOOBn+OCieW8t+WItueahOOBq+aUueihjOOBmeOCi1xyXG4gICAgICBlYWNoJDEuY2FsbChsaW5lLCBmdW5jdGlvbihjaCkge1xyXG4gICAgICAvLyBsaW5lLmVhY2goZnVuY3Rpb24oY2gpIHtcclxuICAgICAgICB2YXIgdyA9IGNhY2hlW2NoXTtcclxuXHJcbiAgICAgICAgaWYgKCh0b3RhbFdpZHRoK3cpID4gcm93V2lkdGgpIHtcclxuICAgICAgICAgIGxvY2FsTGluZXMucHVzaChzdHIpO1xyXG4gICAgICAgICAgc3RyID0gJyc7XHJcbiAgICAgICAgICB0b3RhbFdpZHRoID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0ciArPSBjaDtcclxuICAgICAgICB0b3RhbFdpZHRoICs9IHc7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g5q6L44KK44KSIHB1c2gg44GZ44KLXHJcbiAgICAgIGxvY2FsTGluZXMucHVzaChzdHIpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGxvY2FsTGluZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGdldExpbmVzICgpIHtcclxuICAgIGlmICh0aGlzLl9saW5lVXBkYXRlID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbGluZXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9saW5lVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGxpbmVzID0gKHRoaXMudGV4dCArICcnKS5zcGxpdCgnXFxuJyk7XHJcbiAgICBpZiAodGhpcy53aWR0aCA8IDEpIHtcclxuICAgICAgdGhpcy5fbGluZXMgPSBsaW5lcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9saW5lcyA9IHRoaXMuc3BsaWNlTGluZXMobGluZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9saW5lcztcclxuICB9XHJcblxyXG4gIHByZXJlbmRlciAoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgY29udGV4dC5mb250ID0gdGhpcy5mb250O1xyXG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSB0aGlzLmFsaWduO1xyXG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSB0aGlzLmJhc2VsaW5lO1xyXG5cclxuICAgIHZhciB0ZXh0ID0gdGhpcy50ZXh0ICsgJyc7XHJcbiAgICB2YXIgbGluZXMgPSB0aGlzLmdldExpbmVzKCk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGluZXMubGVuZ3RoO1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICB2YXIgZm9udFNpemUgPSB0aGlzLmZvbnRTaXplO1xyXG4gICAgdmFyIGxpbmVTaXplID0gZm9udFNpemUgKiB0aGlzLmxpbmVIZWlnaHQ7XHJcbiAgICB2YXIgb2Zmc2V0WCA9IHRoaXMuZ2V0T2Zmc2V0WCgpICogd2lkdGg7XHJcbiAgICB2YXIgb2Zmc2V0WSA9IHRoaXMuZ2V0T2Zmc2V0WSgpO1xyXG4gICAgaWYgKG9mZnNldFkgPT09IDApIHtcclxuICAgICAgb2Zmc2V0WSA9IC1NYXRoLmZsb29yKGxlbmd0aCAvIDIpICogbGluZVNpemU7XHJcbiAgICAgIG9mZnNldFkgKz0gKChsZW5ndGggKyAxKSAlIDIpICogKGxpbmVTaXplIC8gMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvZmZzZXRZIDwgMCkge1xyXG4gICAgICBvZmZzZXRZICo9IGhlaWdodDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBvZmZzZXRZID0gb2Zmc2V0WSAqIGhlaWdodCAtIGxlbmd0aCAqIGxpbmVTaXplICsgbGluZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0WSAtPSB0aGlzLnNjcm9sbFk7XHJcbiAgICBvZmZzZXRYIC09IHRoaXMuc2Nyb2xsWDtcclxuICAgIHZhciBzdGFydCA9IChvZmZzZXRZICsgaGVpZ2h0IC8gMikgLyAtbGluZVNpemUgfCAwO1xyXG4gICAgaWYgKHN0YXJ0IDwgMCkgeyBzdGFydCA9IDA7IH1cclxuXHJcbiAgICB2YXIgZW5kID0gKGhlaWdodCAvIDIgLSBvZmZzZXRZICsgbGluZVNpemUgKiAyKSAvIGxpbmVTaXplIHwgMDtcclxuICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKGZ1bmN0aW9uKGxpbmUsIGkpIHtcclxuICAgICAgcmV0dXJuIHN0YXJ0IDw9IGkgJiYgZW5kID4gaTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubGluZXMgPSBsaW5lcztcclxuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gICAgdGhpcy5saW5lU2l6ZSA9IGxpbmVTaXplO1xyXG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsbCAoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgdmFyIG9mZnNldFggPSB0aGlzLm9mZnNldFg7XHJcbiAgICB2YXIgb2Zmc2V0WSA9IHRoaXMub2Zmc2V0WTtcclxuICAgIHZhciBsaW5lU2l6ZSA9IHRoaXMubGluZVNpemU7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0O1xyXG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUsIGkpIHtcclxuICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCBvZmZzZXRYLCAoc3RhcnQgKyBpKSAqIGxpbmVTaXplICsgb2Zmc2V0WSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclN0cm9rZSAoY2FudmFzKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5jb250ZXh0O1xyXG4gICAgdmFyIG9mZnNldFggPSB0aGlzLm9mZnNldFg7XHJcbiAgICB2YXIgb2Zmc2V0WSA9IHRoaXMub2Zmc2V0WTtcclxuICAgIHZhciBsaW5lU2l6ZSA9IHRoaXMubGluZVNpemU7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0O1xyXG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUsIGkpIHtcclxuICAgICAgY29udGV4dC5zdHJva2VUZXh0KGxpbmUsIG9mZnNldFgsIChzdGFydCArIGkpICogbGluZVNpemUgKyBvZmZzZXRZKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcclxuICB9XHJcbiAgc2V0IHRleHQodikge1xyXG4gICAgdGhpcy5fdGV4dCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgc2Nyb2xsWCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbC54O1xyXG4gIH1cclxuICBzZXQgc2Nyb2xsWCh2KSB7XHJcbiAgICB0aGlzLnNjcm9sbC54ID0gdjtcclxuICB9XHJcblxyXG4gIGdldCBzY3JvbGxZKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsLnk7XHJcbiAgfVxyXG4gIHNldCBzY3JvbGxZKHYpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnkgPSB2O1xyXG4gIH1cclxuICBcclxuICAvLyBfc3RhdGljOiB7XHJcbiAgLy8gICBkZWZhdWx0czoge1xyXG4gIC8vICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAvLyAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAvLyAgICAgYmFzZWxpbmU6ICd0b3AnLFxyXG4gIC8vICAgICB3aWR0aDogMzIwLFxyXG4gIC8vICAgICBoZWlnaHQ6IDMyMCxcclxuICAvLyAgICAgc2Nyb2xsWDogMCxcclxuICAvLyAgICAgc2Nyb2xsWTogMCxcclxuICAvLyAgIH0sXHJcbiAgLy8gICBhbGlnblRvT2Zmc2V0TWFwOiB7XHJcbiAgLy8gICAgIHN0YXJ0OiAtMC41LFxyXG4gIC8vICAgICBsZWZ0OiAtMC41LFxyXG4gIC8vICAgICBjZW50ZXI6IDAsXHJcbiAgLy8gICAgIGVuZDogMC41LFxyXG4gIC8vICAgICByaWdodDogMC41LFxyXG4gIC8vICAgfSxcclxuXHJcbiAgLy8gICB2ZXJ0aWNhbEFsaWduVG9PZmZzZXRNYXA6IHtcclxuICAvLyAgICAgdG9wOiAtMC41LFxyXG4gIC8vICAgICBjZW50ZXI6IDAsXHJcbiAgLy8gICAgIG1pZGRsZTogMCxcclxuICAvLyAgICAgYm90dG9tOiAwLjUsXHJcbiAgLy8gICB9LFxyXG4gIC8vIH0sXHJcblxyXG4gIC8vIF9kZWZpbmVkOiBmdW5jdGlvbigpIHtcclxuICAvLyAgIHZhciBmdW5jID0gZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcclxuICAvLyAgICAgaWYoKHRoaXMuX2xpbmVVcGRhdGUgPT09IGZhbHNlKSAmJiAobmV3VmFsICE9PSBvbGRWYWwpKXtcclxuICAvLyAgICAgICB0aGlzLl9saW5lVXBkYXRlID0gdHJ1ZTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBbXHJcbiAgLy8gICAgICd0ZXh0JyxcclxuICAvLyAgICAgJ3dpZHRoJyxcclxuICAvLyAgICAgJ2ZvbnRTaXplJyxcclxuICAvLyAgICAgJ2ZvbnRXZWlnaHQnLFxyXG4gIC8vICAgICAnZm9udEZhbWlseSdcclxuICAvLyAgIF0uZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAvLyAgICAgdGhpcy4kd2F0Y2goa2V5LCBmdW5jKTtcclxuICAvLyAgIH0sIHRoaXMucHJvdG90eXBlKTtcclxuXHJcbiAgLy8gICBwaGluYS5kaXNwbGF5LlNoYXBlLndhdGNoUmVuZGVyUHJvcGVydGllcy5jYWxsKHRoaXMgLFtcclxuICAvLyAgICAgJ3ZlcnRpY2FsQWxpZ24nLFxyXG4gIC8vICAgICAndGV4dCcsXHJcbiAgLy8gICAgICdzY3JvbGwnLFxyXG4gIC8vICAgICAnc2Nyb2xsWCcsXHJcbiAgLy8gICAgICdzY3JvbGxZJ1xyXG4gIC8vICAgXSk7XHJcbiAgLy8gfSxcclxuXHJcblxyXG4gIGVuYWJsZVNjcm9sbCgpIHtcclxuICAgIC8vICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgIC8vICAgdmFyIHBoeXNpY2FsID0gcGhpbmEuYWNjZXNzb3J5LlBoeXNpY2FsKCk7XHJcbiAgICAvLyAgIHBoeXNpY2FsLmF0dGFjaFRvKHRoaXMpO1xyXG4gICAgLy8gICBwaHlzaWNhbC5mcmljdGlvbiA9IDAuODtcclxuICAgIC8vICAgdmFyIGxhc3RGb3JjZSA9IDA7XHJcbiAgICAvLyAgIHZhciBsYXN0TW92ZSA9IDA7XHJcbiAgICAvLyAgIHRoaXMub24oJ3BvaW50c3RhcnQnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICBsYXN0Rm9yY2UgPSBwaHlzaWNhbC52ZWxvY2l0eS55O1xyXG4gICAgLy8gICAgIGxhc3RNb3ZlID0gMDtcclxuICAgIC8vICAgICBwaHlzaWNhbC5mb3JjZSgwLCAwKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHRoaXMub24oJ3BvaW50bW92ZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIHZhciBwID0gZS5wb2ludGVyLmRlbHRhUG9zaXRpb247XHJcbiAgICAvLyAgICAgbGFzdE1vdmUgPSBwLnk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxZICs9IGxhc3RNb3ZlO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyAgICAgcGh5c2ljYWwuZm9yY2UoMCwgbGFzdEZvcmNlICsgbGFzdE1vdmUpO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuTGFiZWxBcmVhLmRlZmF1bHRzID0ge1xyXG4gIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG4gIGFsaWduOiAnbGVmdCcsXHJcbiAgYmFzZWxpbmU6ICd0b3AnLFxyXG4gIHdpZHRoOiAzMjAsXHJcbiAgaGVpZ2h0OiAzMjAsXHJcbiAgc2Nyb2xsWDogMCxcclxuICBzY3JvbGxZOiAwLFxyXG59O1xyXG5MYWJlbEFyZWEuYWxpZ25Ub09mZnNldE1hcCA9IHtcclxuICBzdGFydDogLTAuNSxcclxuICBsZWZ0OiAtMC41LFxyXG4gIGNlbnRlcjogMCxcclxuICBlbmQ6IDAuNSxcclxuICByaWdodDogMC41LFxyXG59O1xyXG5MYWJlbEFyZWEudmVydGljYWxBbGlnblRvT2Zmc2V0TWFwID0ge1xyXG4gIHRvcDogLTAuNSxcclxuICBjZW50ZXI6IDAsXHJcbiAgbWlkZGxlOiAwLFxyXG4gIGJvdHRvbTogMC41LFxyXG59XHJcblxyXG4vLyBkZWZpbmVkXHJcbjtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0aWVzLmNhbGwoTGFiZWxBcmVhICxbXHJcbiAgJ3ZlcnRpY2FsQWxpZ24nLFxyXG4gICd0ZXh0JyxcclxuICAnc2Nyb2xsJyxcclxuICAnc2Nyb2xsWCcsXHJcbiAgJ3Njcm9sbFknXHJcbl0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmVmZmVjdC5XYXZlXHJcbiAqIEJ1dHRvblxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkNpcmNsZVNoYXBlXHJcbiAqL1xyXG5jbGFzcyBXYXZlIGV4dGVuZHMgQ2lyY2xlU2hhcGUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHtcclxuICAgICAgZmlsbDogJ3doaXRlJyxcclxuICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciB0d2VlbmVyID0gbmV3IFR3ZWVuZXIoKS5hdHRhY2hUbyh0aGlzKTtcclxuICAgIHR3ZWVuZXJcclxuICAgICAgLnRvKHtzY2FsZVg6Miwgc2NhbGVZOjIsIGFscGhhOjB9LCA1MDApXHJcbiAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnNvY2lhbC5Ud2l0dGVyXHJcbiAqICMgVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq/jgpLnlJ/miJDjgZnjgovjgq/jg6njgrlcclxuICogVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq/jga4gVVJMIOOCkueUn+aIkOOBl+OBpuOBj+OCjOOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgVHdpdHRlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIFxyXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv+OBr+WtmOWcqOOBl+OBvuOBmeOBjOOCpOODs+OCueOCv+ODs+OCueODoeODs+ODkOOBr+OBguOCiuOBvuOBm+OCk+OAglxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkxcclxuICAgKiBUd2l0dGVy44Gu5YWx5pyJ44Oq44Oz44Kv44KS55Sf5oiQ44GX44G+44GZ44CC5byV5pWw44Gr44Kq44OW44K444Kn44Kv44OI44KS5rih44GZ44GT44Go44Gn5qeY44CF44Gq44OR44Op44Oh44O844K/44O844KS6Kit5a6a5Ye65p2l44G+44GZ44CC5byV5pWw44Gu44Kq44OW44K444Kn44Kv44OI44GvIHtAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHN9IOOBp+WuieWFqOaLoeW8teOBleOCjOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTCgpOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9SGVsbG8lMkMlMjB3b3JsZCEmaGFzaHRhZ3M9amF2YXNjcmlwdCUyQ3BoaW5hJnVybD1754++5Zyo44GuVVJMfVxyXG4gICAqIFxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoe1xyXG4gICAqICAgICAgIHRleHQ6ICdUaGlzIGlzIHRleHQnLFxyXG4gICAqICAgICAgIGhhc2h0YWdzOiAnaGFzaHRhZzEsaGFzaHRhZzInLFxyXG4gICAqICAgICAgIHVybDogJ2h0dHA6Ly9waGluYWpzLmNvbSdcclxuICAgKiAgICAgfSk7IC8vID0+IGh0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1UaGlzJTIwaXMlMjB0ZXh0Jmhhc2h0YWdzPWhhc2h0YWcxJTJDaGFzaHRhZzImdXJsPWh0dHAlM0ElMkYlMkZwaGluYWpzLmNvbVxyXG4gICAqIFxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoe1xyXG4gICAqICAgICAgIHRleHQ6ICdUaGlzIGlzIHRleHQnLFxyXG4gICAqICAgICAgIGhhc2h0YWdzOiAnaGFzaHRhZzEsaGFzaHRhZzInLFxyXG4gICAqICAgICAgIHVybDogJ2h0dHA6Ly9waGluYWpzLmNvbScsXHJcbiAgICogICAgICAgb3RoZXI6ICdUaGlzIGlzIG90aGVyJy8v6Kit5a6a6aCF55uu44Gv6YGp5b2T44Gr5aKX44KE44Gb44KLXHJcbiAgICogICAgIH0pOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9VGhpcyUyMGlzJTIwdGV4dCZoYXNodGFncz1oYXNodGFnMSUyQ2hhc2h0YWcyJnVybD1odHRwJTNBJTJGJTJGcGhpbmFqcy5jb20mb3RoZXI9VGhpcyUyMGlzJTIwb3RoZXJcclxuICAgKiBcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgKiAgICAgICB1cmw6ICdodHRwOi8vcGhpbmFqcy5jb20nXHJcbiAgICogICAgIH0pOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD1odHRwJTNBJTJGJTJGcGhpbmFqcy5jb20mdGV4dD1IZWxsbyUyQyUyMHdvcmxkISZoYXNodGFncz1qYXZhc2NyaXB0JTJDcGhpbmFcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge09iamVjdH1cclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44KvXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVVUkwgKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIFR3aXR0ZXIuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZSh0aGlzLmRlZmF1bHRzKTtcclxuXHJcbiAgICB2YXIgcXVlcmllcyA9IFtdO1xyXG4gICAgdmFyIGV1YyA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgIGZvckluLmNhbGwob3B0aW9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8gb3B0aW9ucy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciBzdHIgPSBrZXkgKyAnPScgKyBldWModmFsdWUpO1xyXG4gICAgICBxdWVyaWVzLnB1c2goc3RyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB1cmwgPSBmb3JtYXQuY2FsbCgne2Jhc2VVUkx9L3t0eXBlfT97cXVlcnl9Jywge1xyXG4gICAgLy8gdmFyIHVybCA9ICd7YmFzZVVSTH0ve3R5cGV9P3txdWVyeX0nLmZvcm1hdCh7XHJcbiAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcclxuICAgICAgLy8gdHlwZTogb3B0aW9ucy50eXBlLFxyXG4gICAgICB0eXBlOiAndHdlZXQnLFxyXG4gICAgICBxdWVyeTogcXVlcmllcy5qb2luKCcmJyksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5iYXNlVVJMID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50J11cclxuICogVHdpdHRlciDjga7lhbHmnInjg6rjg7Pjgq/jga7jg5njg7zjgrnjgajjgarjgosgVVJMIOOBp+OBmeOAglxyXG4gKiBcclxuICogQHN0YXRpY1xyXG4gKi9cclxuVHdpdHRlci5iYXNlVVJMID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50JztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHNcclxuICog44OH44OV44Kp44Or44OI5YCk44KS5qC857SN44GX44Gm44GE44KL44Kq44OW44K444Kn44Kv44OI44Gn44GZ44CCe0BsaW5rICNwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy50ZXh0fSwge0BsaW5rICNwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy5oYXNodGFnc30sIHtAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudXJsfSDjgpLlhoXljIXjgZfjgabjgYTjgb7jgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblR3aXR0ZXIuZGVmYXVsdHMgPSB7XHJcbiAgLy8gdHlwZTogJ3R3ZWV0JyxcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy50ZXh0ID0gJ0hlbGxvLCBXb3JsZCddXHJcbiAgICog44OH44OV44Kp44Or44OI44Gn44OE44Kk44O844OI44Gr5ZCr44G+44KM44KL5paH5a2X5YiX44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHRleHQ6ICdIZWxsbywgd29ybGQhJyxcclxuXHJcbiAgLy8gc2NyZWVuX25hbWU6ICdwaGlfanAnLFxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gW3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLmhhc2h0YWdzID0gJ2phdmFzY3JpcHQsIHBoaW5hX2pzJ11cclxuICAgKiDjg4fjg5Xjgqnjg6vjg4jjgafjg4TjgqTjg7zjg4jjgavlkKvjgb7jgozjgovjg4/jg4Pjgrfjg6Xjgr/jgrDjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgaGFzaHRhZ3M6ICdqYXZhc2NyaXB0LHBoaW5hX2pzJyxcclxuXHJcbiAgLy8gdXJsOiAnaHR0cDovL2dpdGh1Yi5jb20vcGhpLWpwL3BoaW5hLmpzJyxcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy51cmwgPSBwaGluYS5nbG9iYWwubG9jYXRpb24gJiYgcGhpbmEuZ2xvYmFsLmxvY2F0aW9uLmhyZWZdXHJcbiAgICog44OH44OV44Kp44Or44OI44Gn44OE44Kk44O844OI44Gr5ZCr44G+44KM44KLIFVSTCDjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgdXJsOiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbiAmJiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbi5ocmVmXHJcblxyXG4gIC8vIHZpYTogJ3BoaV9qcCcsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5NYW5hZ2VyU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLlNjZW5lXHJcbiAqL1xyXG5jbGFzcyBNYW5hZ2VyU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnNldFNjZW5lcyhwYXJhbXMuc2NlbmVzKTtcclxuXHJcbiAgICB0aGlzLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZ290b1NjZW5lKHBhcmFtcy5zdGFydExhYmVsIHx8IDApO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLm9uKFwicmVzdW1lXCIsIHRoaXMub25uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuY29tbW9uQXJndW1lbnRzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzY2VuZXMg44KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0U2NlbmVzKHNjZW5lcykge1xyXG4gICAgdGhpcy5zY2VuZXMgPSBzY2VuZXM7XHJcbiAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NlbmXjgq/jg6njgrnjgpLjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZfjgabov5TjgZlcclxuICAgKiBcclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGRhdGEgIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBfaW5zdGFudGlhdGVTY2VuZShkYXRhLCBhcmdzKSB7XHJcbiAgICAvLyBTY2VuZeWIneacn+WMluW8leaVsFxyXG4gICAgdmFyIGluaXRBcmd1bWVudHMgPSAkZXh0ZW5kLmNhbGwoe30sIGRhdGEuYXJndW1lbnRzLCBhcmdzKTtcclxuICAgIC8vIHZhciBpbml0QXJndW1lbnRzID0ge30uJGV4dGVuZChkYXRhLmFyZ3VtZW50cywgYXJncyk7XHJcblxyXG4gICAgdmFyIHNjZW5lLCBrbGFzcztcclxuICAgIGlmICh0eXBlb2YgZGF0YS5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIC8vIHBoaW5hLmRlZmluZeOAgeOBguOCi+OBhOOBr2dsb2JhbCh3aW5kb3cp44Gr55u05o6l5a6a576p44GV44KM44Gf44Kv44Op44K544Gu5paH5a2X5YiXXHJcbiAgICAgIGtsYXNzID0gcGhpbmEkMS51c2luZyhkYXRhLmNsYXNzTmFtZSk7XHJcbiAgICAgIGlmICh0eXBlb2Yga2xhc3MgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBrbGFzcyA9IHBoaW5hJDEudXNpbmcoJ3BoaW5hLmdhbWUuJyArIGRhdGEuY2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzY2VuZSA9IGtsYXNzLmNhbGwobnVsbCwgaW5pdEFyZ3VtZW50cyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLmNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAvLyDplqLmlbDjga7loLTlkIjjgIHntJTnsovjgapjbGFzc+OBqOimi+OBquOBmVxyXG4gICAgICAvLyBzY2VuZSA9IG5ldyBkYXRhLmNsYXNzTmFtZShpbml0QXJndW1lbnRzKTtcclxuICAgICAga2xhc3MgPSBkYXRhLmNsYXNzTmFtZTtcclxuICAgIH1cclxuICAgIHNjZW5lID0gbmV3IGtsYXNzKGluaXRBcmd1bWVudHMpO1xyXG5cclxuICAgIGlmICghc2NlbmUubmV4dExhYmVsKSB7XHJcbiAgICAgIHNjZW5lLm5leHRMYWJlbCA9IGRhdGEubmV4dExhYmVsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzY2VuZS5uZXh0QXJndW1lbnRzKSB7XHJcbiAgICAgIHNjZW5lLm5leHRBcmd1bWVudHMgPSBkYXRhLm5leHRBcmd1bWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjZW5lXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2VuZeOCr+ODqeOCueOCkuOCpOODs+OCueOCv+ODs+OCueWMluOBl+OBpmFwcOOBq3JlcGxhY2VTY2VuZeOBleOBm+OCi1xyXG4gICAqIFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ3xudW1iZXJ9IGxhYmVsIOOCt+ODvOODs+OBruWvvuW/nOODqeODmeODq1xyXG4gICAqIEBwYXJhbSAge2FueX0gW2FyZ3NdIFNjZW5l44Gr44KP44Gf44GZ5byV5pWw44GM44GC44KL5aC05ZCI44Gr5oyH5a6aXHJcbiAgICogQHJldHVybiB7dGhpc31cclxuICAgKi9cclxuICByZXBsYWNlU2NlbmUobGFiZWwsIGFyZ3MpIHtcclxuICAgIHZhciBpbmRleCA9ICh0eXBlb2YgbGFiZWwgPT0gJ3N0cmluZycpID8gdGhpcy5sYWJlbFRvSW5kZXgobGFiZWwpIDogbGFiZWx8fDA7XHJcbiAgICBpZiAoIXRoaXMuc2NlbmVzW2luZGV4XSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGZvcm1hdC5jYWxsKCdwaGluYS5qcyBlcnJvcjogYHswfWAg44Gr5a++5b+c44GZ44KL44K344O844Oz44GM44GC44KK44G+44Gb44KTLicsIGxhYmVsKSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2NlbmUgPSB0aGlzLl9pbnN0YW50aWF0ZVNjZW5lKHRoaXMuc2NlbmVzW2luZGV4XSwgYXJncyk7XHJcbiAgICB0aGlzLmFwcC5yZXBsYWNlU2NlbmUoc2NlbmUpO1xyXG4gICAgdGhpcy5zY2VuZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbmRleChvciBsYWJlbCkg44Gu44K344O844Oz44G46aOb44G2XHJcbiAgICogcmVwbGFjZVNjZW5l44Go44Gu6YGV44GE44GvYXBwLnJlcGxhY2VTY2VuZeOBp+OBr+OBquOBj+OAgWFwcC5wdXNoU2NlbmXjgpLlrp/ooYzjgZnjgovngrlcclxuICAgKi9cclxuICBnb3RvU2NlbmUobGFiZWwsIGFyZ3MpIHtcclxuICAgIHZhciBpbmRleCA9ICh0eXBlb2YgbGFiZWwgPT0gJ3N0cmluZycpID8gdGhpcy5sYWJlbFRvSW5kZXgobGFiZWwpIDogbGFiZWx8fDA7XHJcbiAgICBpZiAoIXRoaXMuc2NlbmVzW2luZGV4XSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGZvcm1hdC5jYWxsKCdwaGluYS5qcyBlcnJvcjogYHswfWAg44Gr5a++5b+c44GZ44KL44K344O844Oz44GM44GC44KK44G+44Gb44KTLicsIGxhYmVsKSk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2NlbmUgPSB0aGlzLl9pbnN0YW50aWF0ZVNjZW5lKHRoaXMuc2NlbmVzW2luZGV4XSwgYXJncyk7XHJcbiAgICB0aGlzLmFwcC5wdXNoU2NlbmUoc2NlbmUpO1xyXG4gICAgdGhpcy5zY2VuZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmrKHjga7jgrfjg7zjg7Pjgbjpo5vjgbZcclxuICAgKi9cclxuICBnb3RvTmV4dChhcmdzKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF07XHJcbiAgICB2YXIgbmV4dEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAvLyDmrKHjga7jg6njg5njg6vjgYzoqK3lrprjgZXjgozjgabjgYTjgZ/loLTlkIhcclxuICAgIGlmIChkYXRhLm5leHRMYWJlbCkge1xyXG4gICAgICAgIG5leHRJbmRleCA9IHRoaXMubGFiZWxUb0luZGV4KGRhdGEubmV4dExhYmVsKTtcclxuICAgIH1cclxuICAgIC8vIOasoeOBruOCt+ODvOODs+OBq+mBt+enu1xyXG4gICAgZWxzZSBpZiAodGhpcy5zY2VuZUluZGV4KzEgPCB0aGlzLnNjZW5lcy5sZW5ndGgpIHtcclxuICAgICAgICBuZXh0SW5kZXggPSB0aGlzLnNjZW5lSW5kZXgrMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV4dEluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvU2NlbmUobmV4dEluZGV4LCBhcmdzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmxhcmUoXCJmaW5pc2hcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7PjgqTjg7Pjg4fjg4Pjgq/jgrnjgpLlj5blvpdcclxuICAgKi9cclxuICBnZXRDdXJyZW50SW5kZXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY2VuZUluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44Op44OZ44Or44KS5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudExhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ubGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg6njg5njg6vjgYvjgonjgqTjg7Pjg4fjg4Pjgq/jgrnjgavlpInmj5tcclxuICAgKi9cclxuICBsYWJlbFRvSW5kZXgobGFiZWwpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5zY2VuZXMuZmlsdGVyKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIGRhdGEubGFiZWwgPT0gbGFiZWw7XHJcbiAgICB9KVswXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5zY2VuZXMuaW5kZXhPZihkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCpOODs+ODh+ODg+OCr+OCueOBi+OCieODqeODmeODq+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIGluZGV4VG9MYWJlbChpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2NlbmVzW2luZGV4XS5sYWJlbDtcclxuICB9XHJcblxyXG4gIG9ubmV4dChlKSB7XHJcbiAgICB2YXIgbmV4dExhYmVsID0gZS5wcmV2U2NlbmUubmV4dExhYmVsO1xyXG4gICAgdmFyIG5leHRBcmd1bWVudHMgPSBlLnByZXZTY2VuZS5uZXh0QXJndW1lbnRzO1xyXG4gICAgaWYgKG5leHRMYWJlbCkge1xyXG4gICAgICB0aGlzLmdvdG9TY2VuZShuZXh0TGFiZWwsIG5leHRBcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZ290b05leHQobmV4dEFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuTG9hZGluZ1NjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9ucywgTG9hZGluZ1NjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHBoaW5hLmdhbWUuTG9hZGluZ1NjZW5lLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZ2F1Z2UgPSBuZXcgR2F1Z2Uoe1xyXG4gICAgICB2YWx1ZTogMCxcclxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogMTIsXHJcbiAgICAgIGZpbGw6ICcjYWFhJyxcclxuICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgICAgZ2F1Z2VDb2xvcjogJ2hzbGEoMjAwLCAxMDAlLCA4MCUsIDAuOCknLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSkuYWRkQ2hpbGRUbyh0aGlzKVxyXG4gICAgICAuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAwLFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRPcmlnaW4oXHJcbiAgICAgICAgMC41LCBcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAvLyB0aGlzLmZyb21KU09OKHtcclxuICAgIC8vICAgY2hpbGRyZW46IHtcclxuICAgIC8vICAgICBnYXVnZToge1xyXG4gICAgLy8gICAgICAgY2xhc3NOYW1lOiAncGhpbmEudWkuR2F1Z2UnLFxyXG4gICAgLy8gICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAvLyAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgLy8gICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgIC8vICAgICAgICAgaGVpZ2h0OiAxMixcclxuICAgIC8vICAgICAgICAgZmlsbDogJyNhYWEnLFxyXG4gICAgLy8gICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICBnYXVnZUNvbG9yOiAnaHNsYSgyMDAsIDEwMCUsIDgwJSwgMC44KScsXHJcbiAgICAvLyAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgIC8vICAgICAgIHk6IDAsXHJcbiAgICAvLyAgICAgICBvcmlnaW5ZOiAwLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgdmFyIGxvYWRlciA9IG5ldyBBc3NldExvYWRlcigpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmxpZSkge1xyXG4gICAgICB0aGlzLmdhdWdlLmFuaW1hdGlvblRpbWUgPSAxMCoxMDAwO1xyXG4gICAgICB0aGlzLmdhdWdlLnZhbHVlID0gOTA7XHJcblxyXG4gICAgICBsb2FkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25UaW1lID0gMDtcclxuICAgICAgICB0aGlzLmdhdWdlLnZhbHVlID0gMTAwO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25UaW1lID0gMTAwO1xyXG4gICAgICBsb2FkZXIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB0aGlzLmdhdWdlLnZhbHVlID0gZS5wcm9ncmVzcyAqIDEwMDtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2F1Z2Uub25mdWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmV4aXRUeXBlID09PSAnYXV0bycpIHtcclxuICAgICAgICB0aGlzLmFwcC5wb3BTY2VuZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2xvYWRlZCcpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGxvYWRlci5sb2FkKG9wdGlvbnMuYXNzZXRzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Mb2FkaW5nU2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgZXhpdFR5cGU6ICdhdXRvJyxcclxuICBsaWU6IGZhbHNlLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuU3BsYXNoU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIFNwbGFzaFNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gU3BsYXNoU2NlbmUuZGVmYXVsdHM7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKCk7XHJcbiAgICB0ZXh0dXJlLmxvYWQoZGVmYXVsdHMuaW1hZ2VVUkwpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgX2luaXQoKSB7XHJcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlKS5hZGRDaGlsZFRvKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNldFBvc2l0aW9uKHRoaXMuZ3JpZFguY2VudGVyKCksIHRoaXMuZ3JpZFkuY2VudGVyKCkpO1xyXG4gICAgdGhpcy5zcHJpdGUuYWxwaGEgPSAwO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnR3ZWVuZXJcclxuICAgICAgLmNsZWFyKClcclxuICAgICAgLnRvKHthbHBoYToxfSwgNTAwLCAnZWFzZU91dEN1YmljJylcclxuICAgICAgLndhaXQoMTAwMClcclxuICAgICAgLnRvKHthbHBoYTowfSwgNTAwLCAnZWFzZU91dEN1YmljJylcclxuICAgICAgLndhaXQoMjUwKVxyXG4gICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSwgdGhpcylcclxuICAgICAgO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblNwbGFzaFNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIGltYWdlVVJMOiAnaHR0cDovL2Nkbi5yYXdnaXQuY29tL3BoaS1qcC9waGluYS5qcy9kZXZlbG9wL2xvZ28ucG5nJyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLlRpdGxlU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIFRpdGxlU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9ICRzYWZlLmNhbGwoe30sIHBhcmFtcywgVGl0bGVTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBwYXJhbXMgPSAoe30pLiRzYWZlKHBhcmFtcywgcGhpbmEuZ2FtZS5UaXRsZVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKHBhcmFtcyk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIHRpdGxlTGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiBwYXJhbXMudGl0bGUsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA2NCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDQpLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHBhcmFtcy5leGl0VHlwZSA9PT0gJ3RvdWNoJykge1xyXG4gICAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgICAgdG91Y2hMYWJlbDoge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJUT1VDSCBTVEFSVFwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3BhbigxMiksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblRpdGxlU2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgdGl0bGU6ICdwaGluYS5qcyBnYW1lcycsXHJcbiAgbWVzc2FnZTogJycsXHJcblxyXG4gIGZvbnRDb2xvcjogJ3doaXRlJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdoc2woMjAwLCA4MCUsIDY0JSknLFxyXG4gIGJhY2tncm91bmRJbWFnZTogJycsXHJcblxyXG4gIGV4aXRUeXBlOiAndG91Y2gnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuUGF1c2VTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgUGF1c2VTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBQYXVzZVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBwaGluYS5nYW1lLlBhdXNlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdQYXVzZScsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDQ4LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLmNlbnRlcigpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGF1c2VTY2VuZS5kZWZhdWx0cyA9ICB7XHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ2hzbGEoMCwgMCUsIDAlLCAwLjg1KScsXHJcblxyXG4gIGV4aXRUeXBlOiAndG91Y2gnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuUmVzdWx0U2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIFJlc3VsdFNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIFJlc3VsdFNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIHBhcmFtcyA9ICh7fSkuJHNhZmUocGFyYW1zLCBwaGluYS5nYW1lLlJlc3VsdFNjZW5lLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKHBhcmFtcyk7XHJcblxyXG4gICAgdmFyIG1lc3NhZ2UgPSBmb3JtYXQuY2FsbChwYXJhbXMubWVzc2FnZSwgcGFyYW1zKTtcclxuICAgIC8vIHZhciBtZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UuZm9ybWF0KHBhcmFtcyk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIHNjb3JlVGV4dDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdzY29yZScsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDQ4LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguc3Bhbig4KSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig0KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjb3JlTGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiBwYXJhbXMuc2NvcmUrJycsXHJcbiAgICAgICAgICAgIGZpbGw6IHBhcmFtcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIHN0cm9rZTogbnVsbCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDcyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguc3Bhbig4KSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig2KSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXNzYWdlTGFiZWw6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDkpLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNoYXJlQnV0dG9uOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IEJ1dHRvbixcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLnVpLkJ1dHRvbicsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICfimIUnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTI4LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOCxcclxuICAgICAgICAgICAgZm9udENvbG9yOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNTAsXHJcbiAgICAgICAgICAgIGNvcm5lclJhZGl1czogNjQsXHJcbiAgICAgICAgICAgIGZpbGw6ICdyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSknLFxyXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjYWFhJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKC0zKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3BhbigxMiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5QnV0dG9uOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IEJ1dHRvbixcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLnVpLkJ1dHRvbicsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICfilrYnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTI4LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyOCxcclxuICAgICAgICAgICAgZm9udENvbG9yOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNTAsXHJcbiAgICAgICAgICAgIGNvcm5lclJhZGl1czogNjQsXHJcbiAgICAgICAgICAgIGZpbGw6ICdyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSknLFxyXG4gICAgICAgICAgICAvLyBzdHJva2U6ICcjYWFhJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKDMpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5zcGFuKDEyKSxcclxuXHJcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIG9ucHVzaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xyXG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaGFyZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0ZXh0ID0gZm9ybWF0LmNhbGwoJ1Njb3JlOiB7MH1cXG57MX0nLCBwYXJhbXMuc2NvcmUsIG1lc3NhZ2UpO1xyXG4gICAgICAvLyB2YXIgdGV4dCA9ICdTY29yZTogezB9XFxuezF9Jy5mb3JtYXQocGFyYW1zLnNjb3JlLCBtZXNzYWdlKTtcclxuICAgICAgdmFyIHVybCA9IFR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgIGhhc2h0YWdzOiBwYXJhbXMuaGFzaHRhZ3MsXHJcbiAgICAgICAgdXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICB9KTtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCAnc2hhcmUgd2luZG93JywgJ3dpZHRoPTQ4MCwgaGVpZ2h0PTMyMCcpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5SZXN1bHRTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBzY29yZTogMTYsXHJcblxyXG4gIG1lc3NhZ2U6ICd0aGlzIGlzIHBoaW5hLmpzIHByb2plY3QuJyxcclxuICBoYXNodGFnczogJ3BoaW5hX2pzLGdhbWUsamF2YXNjcmlwdCcsXHJcbiAgdXJsOiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbiAmJiBwaGluYSQxLmdsb2JhbC5sb2NhdGlvbi5ocmVmLFxyXG5cclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDIwMCwgODAlLCA2NCUpJyxcclxuICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxyXG59O1xuXG4vKipcclxuICog44OH44OV44Kp44Or44OI44GuYWluIGNsYXNzXHJcbiAqL1xyXG5jbGFzcyBEZWZhdWx0TWFpblNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIE1haW5TY2VuZScpO1xyXG4gIH1cclxufVxyXG4vKipcclxuICog44Kv44Op44K544GMcGhpbmEuZGVmaW5l44Gr44KI44Gj44Gm5a6a576p44GV44KM44Gm44GE44KL44GL44Gp44GG44GL44KS6L+U44GX44G+44GZXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIOOCr+ODqeOCueWQjeOAgnBoaW5hLmdhbWVbY2xhc3NOYW1lXeOBp+Wumue+qeOBleOCjOOBpuOBhOOCi+OBi+OCguiqv+OBueOCi1xyXG4gKiBAcmV0dXJuIHtzdHJpbmd8Ym9vbGVhbn0g5a6a576p44GV44KM44Gm44KM44Gw44Gd44Gu44G+44G+44Kv44Op44K55ZCN5paH5a2X5YiX44KS6L+U44GZXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0dhbWVDbGFzc0RlZmluZWQoY2xhc3NOYW1lKSB7XHJcbiAgaWYgKFxyXG4gICAgdHlwZW9mIHBoaW5hJDEudXNpbmcoY2xhc3NOYW1lKSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgfHwgdHlwZW9mIHBoaW5hJDEudXNpbmcoJ3BoaW5hLmdhbWUuJyArIGNsYXNzTmFtZSkgPT09ICdmdW5jdGlvbidcclxuICApIHtcclxuICAgIHJldHVybiBjbGFzc05hbWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuR2FtZUFwcFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkNhbnZhc0FwcFxyXG4gKi9cclxuY2xhc3MgR2FtZUFwcCBleHRlbmRzIENhbnZhc0FwcCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKG9wdGlvbnMgfHwge30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUoe1xyXG4gICAgICBzdGFydExhYmVsOiAndGl0bGUnLFxyXG4gICAgfSk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB2YXIgc3RhcnRMYWJlbCA9IG9wdGlvbnMuc3RhcnRMYWJlbCB8fCAndGl0bGUnO1xyXG5cclxuICAgIHZhciBzY2VuZXMgPSBvcHRpb25zLnNjZW5lcyB8fCBbXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGlzR2FtZUNsYXNzRGVmaW5lZChcIlNwbGFzaFNjZW5lXCIpIHx8IFNwbGFzaFNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAnc3BsYXNoJyxcclxuICAgICAgICBuZXh0TGFiZWw6ICd0aXRsZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGlzR2FtZUNsYXNzRGVmaW5lZChcIlRpdGxlU2NlbmVcIikgfHwgVGl0bGVTY2VuZSxcclxuICAgICAgICBsYWJlbDogJ3RpdGxlJyxcclxuICAgICAgICBuZXh0TGFiZWw6ICdtYWluJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiTWFpblNjZW5lXCIpIHx8IERlZmF1bHRNYWluU2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICdtYWluJyxcclxuICAgICAgICBuZXh0TGFiZWw6ICdyZXN1bHQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJSZXN1bHRTY2VuZVwiKSB8fCBSZXN1bHRTY2VuZSxcclxuICAgICAgICBsYWJlbDogJ3Jlc3VsdCcsXHJcbiAgICAgICAgbmV4dExhYmVsOiAndGl0bGUnLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBzY2VuZXMgPSBlYWNoLmNhbGwoc2NlbmVzLCBmdW5jdGlvbihzKSB7XHJcbiAgICAgIHMuYXJndW1lbnRzID0gcy5hcmd1bWVudHMgfHwgb3B0aW9ucztcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzY2VuZSA9IG5ldyBNYW5hZ2VyU2NlbmUoe1xyXG4gICAgICBzdGFydExhYmVsOiBzdGFydExhYmVsLFxyXG4gICAgICBzY2VuZXM6IHNjZW5lcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmFzc2V0cykge1xyXG4gICAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDvvJplc23niYjjgafjga/ni6zoh6rjga5Mb2FkaW5nU2NlbmXjga/jgqrjg5fjgrfjg6fjg7PjgafmuKHjgZvjgovjgojjgYbjgavjgZnjgotcclxuXHJcbiAgICAgIHZhciBsb2FkaW5nT3B0aW9ucyA9ICRleHRlbmQuY2FsbCh7fSwgb3B0aW9ucywge1xyXG4gICAgICAvLyB2YXIgbG9hZGluZ09wdGlvbnMgPSAoe30pLiRleHRlbmQob3B0aW9ucywge1xyXG4gICAgICAgIGV4aXRUeXBlOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIOOCsOODreODvOODkOODq+Wumue+qeOBrkxvYWRpbmdTY2VuZeOCkuaOouOBme+8iOW+k+adpe+8iVxyXG4gICAgICAvLyAtPiDjgarjgZHjgozjgbDjgqrjg5fjgrfjg6fjg7PjgpLjg4Hjgqfjg4Pjgq8gXHJcbiAgICAgIC8vIC0+IOOBk+OCjOOCguOBquOBkeOCjOOBsOODh+ODleOCqeODq+ODiOOBrkxvYWRpbmdTY2VuZeOCkuS9v+OBhlxyXG4gICAgICB2YXIgZGVmaW5lZExvYWRpbmdDbGFzcyA9IHBoaW5hJDEudXNpbmcoXCJMb2FkaW5nU2NlbmVcIikgfHwgcGhpbmEkMS51c2luZyhcInBoaW5hLmdhbWUuTG9hZGluZ1NjZW5lXCIpO1xyXG4gICAgICB2YXIgbG9hZGluZyA9ICh0eXBlb2YgZGVmaW5lZExvYWRpbmdDbGFzcyA9PT0gJ2Z1bmN0aW9uJykgXHJcbiAgICAgICAgPyBkZWZpbmVkTG9hZGluZ0NsYXNzKGxvYWRpbmdPcHRpb25zKVxyXG4gICAgICAgIDogKG9wdGlvbnMubG9hZGluZ1NjZW5lICE9IG51bGwpXHJcbiAgICAgICAgICA/IG5ldyBvcHRpb25zLmxvYWRpbmdTY2VuZShsb2FkaW5nT3B0aW9ucykgXHJcbiAgICAgICAgICA6IG5ldyBMb2FkaW5nU2NlbmUobG9hZGluZ09wdGlvbnMpXHJcbiAgICAgIDtcclxuICAgICAgdGhpcy5yZXBsYWNlU2NlbmUobG9hZGluZyk7XHJcblxyXG4gICAgICBsb2FkaW5nLm9ubG9hZGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlU2NlbmUoc2NlbmUpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XHJcbiAgICAgICAgICB0aGlzLl9lbmFibGVEZWJ1Z2dlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMucmVwbGFjZVNjZW5lKHNjZW5lKTtcclxuICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcclxuICAgICAgICB0aGlzLl9lbmFibGVEZWJ1Z2dlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Ieq5YuV44Gn44Od44O844K644GZ44KLXHJcbiAgICAvLyBlc23niYjjgafjga/ni6zoh6rjga7jg53jg7zjgrrjgrfjg7zjg7Pjga/jgqrjg5fjgrfjg6fjg7PjgafmuKHjgZlcclxuICAgIC8vIOW8leaVsOOBjOa4oeOBm+OBquOBhOOBruOBr+WFg+OBi+OCiVxyXG4gICAgaWYgKG9wdGlvbnMuYXV0b1BhdXNlKSB7XHJcbiAgICAgIHRoaXMub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGVmaW5lZFBhdXNlU2NlbmUgPSBwaGluYSQxLnVzaW5nKFwicGhpbmEuZ2FtZS5QYXVzZVNjZW5lXCIpO1xyXG4gICAgICAgIHZhciBwYXVzZVNjZW5lID0gKHR5cGVvZiBkZWZpbmVkUGF1c2VTY2VuZSA9PT0gJ2Z1bmN0aW9uJykgXHJcbiAgICAgICAgICA/IGRlZmluZWRQYXVzZVNjZW5lKCkgXHJcbiAgICAgICAgICA6IChvcHRpb25zLnBhdXNlU2NlbmUpIFxyXG4gICAgICAgICAgICA/IG5ldyBvcHRpb25zLnBhdXNlU2NlbmUoKSBcclxuICAgICAgICAgICAgOiBuZXcgUGF1c2VTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMucHVzaFNjZW5lKHBhdXNlU2NlbmUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9lbmFibGVEZWJ1Z2dlcigpIHtcclxuICAgIGlmICh0aGlzLmd1aSkgcmV0dXJuIDtcclxuXHJcbiAgICB0aGlzLmVuYWJsZURhdEdVSShmdW5jdGlvbihndWkpIHtcclxuICAgICAgdmFyIGYgPSBndWkuYWRkRm9sZGVyKCdzY2VuZXMnKTtcclxuICAgICAgdmFyIGZ1bmNzID0ge307XHJcbiAgICAgIHRoaXMucm9vdFNjZW5lLnNjZW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHNjZW5lKSB7XHJcbiAgICAgIC8vIHRoaXMucm9vdFNjZW5lLnNjZW5lcy5lYWNoKGZ1bmN0aW9uKHNjZW5lKSB7XHJcbiAgICAgICAgZnVuY3Nbc2NlbmUubGFiZWxdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLnJvb3RTY2VuZS5yZXBsYWNlU2NlbmUoc2NlbmUubGFiZWwpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc2NlbmVzLmxlbmd0aCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBzY2VuZTtcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICBmb3JJbi5jYWxsKGZ1bmNzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIGZ1bmNzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBmLmFkZChmdW5jcywga2V5KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGYub3BlbigpO1xyXG5cclxuICAgICAgdGhpcy5ndWkgPSBndWk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLkNvdW50U2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIENvdW50U2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCBDb3VudFNjZW5lLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUocGhpbmEuZ2FtZS5Db3VudFNjZW5lLmRlZmF1bHRzKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgZmlsbDogb3B0aW9ucy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBvcHRpb25zLmZvbnRTaXplLFxyXG4gICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLmNlbnRlcigpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmNvdW50IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGhpcy5jb3VudExpc3QgPSBjbG9uZS5jYWxsKG9wdGlvbnMuY291bnQpLnJldmVyc2UoKTtcclxuICAgICAgLy8gdGhpcy5jb3VudExpc3QgPSBvcHRpb25zLmNvdW50LmNsb25lKCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY291bnRMaXN0ID0gcmFuZ2UuY2FsbChbXSwgMSwgb3B0aW9ucy5jb3VudCsxKTtcclxuICAgICAgLy8gdGhpcy5jb3VudExpc3QgPSBBcnJheS5yYW5nZSgxLCBvcHRpb25zLmNvdW50KzEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudExpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5leGl0VHlwZSA9IG9wdGlvbnMuZXhpdFR5cGU7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlQ291bnQoKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVDb3VudCgpIHtcclxuICAgIHZhciBlbmRGbGFnID0gdGhpcy5jb3VudGVyIDw9IDA7XHJcbiAgICB2YXIgaW5kZXggPSAtLXRoaXMuY291bnRlcjtcclxuXHJcbiAgICB0aGlzLmxhYmVsLnRleHQgPSB0aGlzLmNvdW50TGlzdFtpbmRleF07XHJcblxyXG4gICAgdGhpcy5sYWJlbC5zY2FsZS5zZXQoMSwgMSk7XHJcbiAgICB0aGlzLmxhYmVsLnR3ZWVuZXJcclxuICAgICAgLmNsZWFyKClcclxuICAgICAgLnRvKHtcclxuICAgICAgICBzY2FsZVg6IDEsXHJcbiAgICAgICAgc2NhbGVZOiAxLFxyXG4gICAgICAgIGFscGhhOiAxLFxyXG4gICAgICB9LCAyNTApXHJcbiAgICAgIC53YWl0KDUwMClcclxuICAgICAgLnRvKHtcclxuICAgICAgICBzY2FsZVg6IDEuNSxcclxuICAgICAgICBzY2FsZVk6IDEuNSxcclxuICAgICAgICBhbHBoYTogMC4wXHJcbiAgICAgIH0sIDI1MClcclxuICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZsYXJlKCdmaW5pc2gnKTtcclxuICAgICAgICAgIGlmICh0aGlzLmV4aXRUeXBlID09PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAucG9wU2NlbmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQ291bnRTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBjb3VudDogMyxcclxuXHJcbiAgd2lkdGg6IDY0MCxcclxuICBoZWlnaHQ6IDk2MCxcclxuXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGZvbnRTaXplOiAxNjQsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MCwgNTAsIDUwLCAxKScsXHJcblxyXG4gIGV4aXRUeXBlOiAnYXV0bycsXHJcbn07XG5cbmV4cG9ydCB7IEFjY2VsZXJvbWV0ZXIsIEFjY2Vzc29yeSwgQWpheCwgQXNzZXQsIEFzc2V0TG9hZGVyLCBBc3NldE1hbmFnZXIsIEJhc2VBcHAsIEJ1dHRvbiwgQ2FudmFzLCBDYW52YXNBcHAsIENhbnZhc0xheWVyLCBDYW52YXNSZW5kZXJlciwgQ2hhbmdlRGlzcGF0Y2hlciwgQ2lyY2xlLCBDaXJjbGVHYXVnZSwgQ2lyY2xlU2hhcGUsIENvbGxpc2lvbiwgQ29sb3IsIENvdW50U2NlbmUsIERpc3BsYXlFbGVtZW50LCBEaXNwbGF5U2NlbmUsIERvbUFwcCwgRHJhZ2dhYmxlLCBFbGVtZW50LCBFdmVudERpc3BhdGNoZXIsIEZpbGUsIEZsaWNrYWJsZSwgRmxvdywgRm9udCwgRnJhbWVBbmltYXRpb24sIEdhbWVBcHAsIEdhbWVwYWRNYW5hZ2VyLCBHYXVnZSwgR3JpZCwgSGVhcnRTaGFwZSwgSW5wdXQsIEludGVyYWN0aXZlLCBLZXlib2FyZCwgTGFiZWwsIExhYmVsQXJlYSwgTGF5ZXIsIExvYWRpbmdTY2VuZSwgTWFuYWdlclNjZW5lLCBNYXRyaXgzMywgTW91c2UsIE9iamVjdDJELCBQYXRoU2hhcGUsIFBhdXNlU2NlbmUsIFBoeXNpY2FsLCBQbGFpbkVsZW1lbnQsIFBvbHlnb25TaGFwZSwgUXVlcnlTdHJpbmcsIFJhbmRvbSwgUmVjdCwgUmVjdGFuZ2xlU2hhcGUsIFJlc3VsdFNjZW5lLCBTY2VuZSwgU2NyaXB0LCBTaGFwZSwgU291bmRNYW5hZ2VyLCBTcGxhc2hTY2VuZSwgU3ByaXRlLCBTcHJpdGVTaGVldCwgU3RhclNoYXBlLCBTdXBwb3J0LCBUZXh0dXJlLCBUaHJlZUxheWVyLCBUaWNrZXIsIFRpdGxlU2NlbmUsIFRvdWNoLCBUb3VjaExpc3QsIFRyaWFuZ2xlU2hhcGUsIFR3ZWVuLCBUd2VlbmVyLCBUd2l0dGVyLCBVcGRhdGVyLCBWZWN0b3IyLCBWZWN0b3IzLCBXYXZlLCBwaGluYSQxIGFzIHBoaW5hIH07XG4iLCJleHBvcnQgY29uc3QgQXNzZXRDYXRhbG9nID0ge1xuICBpbWFnZToge1xuICAgIFwidG9tYXBpeW9cIjogXCIuL2Fzc2V0cy9pbWFnZXMvdG9tYXBpeW8ucG5nXCIsXG4gIH1cbn07IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcInBoaW5hLmpzXCJcblxuZXhwb3J0IGNsYXNzIFNwcml0ZUV4IGV4dGVuZHMgU3ByaXRlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0RnJhbWVUcmltbWluZyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5fZnJhbWVUcmltWCA9IHggfHwgMDtcbiAgICB0aGlzLl9mcmFtZVRyaW1ZID0geSB8fCAwO1xuICAgIHRoaXMuX2ZyYW1lVHJpbVdpZHRoID0gd2lkdGggfHwgdGhpcy5pbWFnZS5kb21FbGVtZW50LndpZHRoIC0gdGhpcy5fZnJhbWVUcmltWDtcbiAgICB0aGlzLl9mcmFtZVRyaW1IZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5pbWFnZS5kb21FbGVtZW50LmhlaWdodCAtIHRoaXMuX2ZyYW1lVHJpbVk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgXG4gIHNldEZyYW1lSW5kZXgoaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgc3ggPSB0aGlzLl9mcmFtZVRyaW1YIHx8IDA7XG4gICAgdmFyIHN5ID0gdGhpcy5fZnJhbWVUcmltWSB8fCAwO1xuICAgIHZhciBzdyA9IHRoaXMuX2ZyYW1lVHJpbVdpZHRoICB8fCAodGhpcy5pbWFnZS5kb21FbGVtZW50LndpZHRoLXN4KTtcbiAgICB2YXIgc2ggPSB0aGlzLl9mcmFtZVRyaW1IZWlnaHQgfHwgKHRoaXMuaW1hZ2UuZG9tRWxlbWVudC5oZWlnaHQtc3kpO1xuICBcbiAgICB2YXIgdHcgID0gd2lkdGggfHwgdGhpcy53aWR0aDsgICAgICAvLyB0d1xuICAgIHZhciB0aCAgPSBoZWlnaHQgfHwgdGhpcy5oZWlnaHQ7ICAgIC8vIHRoXG4gICAgdmFyIHJvdyA9IH5+KHN3IC8gdHcpO1xuICAgIHZhciBjb2wgPSB+fihzaCAvIHRoKTtcbiAgICB2YXIgbWF4SW5kZXggPSByb3cqY29sO1xuICAgIGluZGV4ID0gaW5kZXglbWF4SW5kZXg7XG4gIFxuICAgIHZhciB4ICAgPSBpbmRleCVyb3c7XG4gICAgdmFyIHkgICA9IH5+KGluZGV4L3Jvdyk7XG4gICAgdGhpcy5zcmNSZWN0LnggPSBzeCt4KnR3O1xuICAgIHRoaXMuc3JjUmVjdC55ID0gc3kreSp0aDtcbiAgICB0aGlzLnNyY1JlY3Qud2lkdGggID0gdHc7XG4gICAgdGhpcy5zcmNSZWN0LmhlaWdodCA9IHRoO1xuICBcbiAgICB0aGlzLl9mcmFtZUluZGV4ID0gaW5kZXg7XG4gIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwaGluYSwgQ2FudmFzQXBwIH0gZnJvbSBcInBoaW5hLmpzXCJcbmltcG9ydCB7IFNjZW5lRmxvdyB9IGZyb20gXCIvc3JjL3NjZW5lcy9TY2VuZUZsb3dcIlxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBjb25zb2xlLmxvZygnIyMjIyMgRGV2ZWxvcG1lbnQgbW9kZSAjIyMjIycpO1xufVxuICBcbnBoaW5hLm1haW4oKCk9PiB7XG4gIGNvbnN0IGFwcE9wdGlvbiA9IHtcbiAgICBmcHM6IDYwLFxuICB9O1xuICBjb25zdCBhcHAgPSBuZXcgQ2FudmFzQXBwKGFwcE9wdGlvbik7XG4gIGFwcC5yZXBsYWNlU2NlbmUobmV3IFNjZW5lRmxvdygpKTtcbiAgYXBwLnJ1bigpO1xufSk7XG4iLCJpbXBvcnQgeyBEaXNwbGF5U2NlbmUsIFNwcml0ZSB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7IFNwcml0ZUV4IH0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvU3ByaXRlRXhcIlxuXG5leHBvcnQgY2xhc3MgTWFpblNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgIH0pO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFNwcml0ZShcInRvbWFwaXlvXCIsIDY0LCA2NClcbiAgICAgIC5hZGRDaGlsZFRvKHRoaXMpXG4gICAgICAuc2V0UG9zaXRpb24odGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodC8yKTtcbiAgfVxuXG4gIHVwZGF0ZShhcHApIHtcbiAgICBpZiAoYXBwLnBvaW50ZXIuZ2V0UG9pbnRpbmcoKSkge1xuICAgICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oYXBwLnBvaW50ZXIueCwgYXBwLnBvaW50ZXIueSlcbiAgICB9XG4gIH1cbn1cblxuLy9NYW5hZ2VyU2NlbmXjgafkvb/nlKjlh7rmnaXjgovmp5jjgavjgZnjgovngrpcbi8vIHdpbmRvdy5NYWluU2NlbmUgPSBNYWluU2NlbmU7XG4iLCJpbXBvcnQgeyBMb2FkaW5nU2NlbmUsIE1hbmFnZXJTY2VuZSwgVGl0bGVTY2VuZSB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7IEFzc2V0Q2F0YWxvZyB9IGZyb20gXCIuLi9hc3NldHMvQXNzZXRDYXRhbG9nXCI7XG5pbXBvcnQgeyBNYWluU2NlbmUgfSBmcm9tIFwiLi9NYWluU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFNjZW5lRmxvdyBleHRlbmRzIE1hbmFnZXJTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIHN0YXJ0TGFiZWw6IFwibG9hZGluZ1wiLFxuICAgICAgc2NlbmVzOiBbe1xuICAgICAgICBsYWJlbDogXCJsb2FkaW5nXCIsXG4gICAgICAgIGNsYXNzTmFtZTogTG9hZGluZ1NjZW5lLFxuICAgICAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgICBhc3NldHM6IEFzc2V0Q2F0YWxvZyxcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dExhYmVsOiBcInRpdGxlXCIsXG4gICAgICB9LHtcbiAgICAgICAgbGFiZWw6IFwidGl0bGVcIixcbiAgICAgICAgY2xhc3NOYW1lOiBUaXRsZVNjZW5lLFxuICAgICAgICBuZXh0TGFiZWw6IFwibWFpblwiLFxuICAgICAgfSx7XG4gICAgICAgIGxhYmVsOiBcIm1haW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBNYWluU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9