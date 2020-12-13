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

/***/ "./src/extensions/Utils.js":
/*!*********************************!*
  !*** ./src/extensions/Utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$safe": () => /* binding */ $safe
/* harmony export */ });

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
/* harmony import */ var _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/Utils */ "./src/extensions/Utils.js");



class MainScene extends phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.DisplayScene {
  constructor(options) {
    options = _extensions_Utils__WEBPACK_IMPORTED_MODULE_1__.$safe.call({}, options, { backgroundColor: 'black' });
    super(options);
    this.player = new phina_js_build_phina_esm__WEBPACK_IMPORTED_MODULE_0__.Sprite("tomapiyo", 64, 64)
      .addChildTo(this)
      .setFrameIndex(0)
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
        nextLabel: "title",
        arguments: {
          assets: _assets_AssetCatalog__WEBPACK_IMPORTED_MODULE_1__.AssetCatalog,
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL25vZGVfbW9kdWxlcy9waGluYS5qcy9idWlsZC9waGluYS5lc20uanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvYXNzZXRzL0Fzc2V0Q2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC8uL3NyYy9leHRlbnNpb25zL1V0aWxzLmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0Ly4vc3JjL3NjZW5lcy9NYWluU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3QvLi9zcmMvc2NlbmVzL1NjZW5lRmxvdy5qcyIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waGluYV9lc21fdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BoaW5hX2VzbV90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhpbmFfZXNtX3Rlc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FB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QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRCwrQkFBK0IsS0FBSyxPQUFPLEVBQUU7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRCwrQkFBK0IsS0FBSyxPQUFPLEVBQUU7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRCwrQkFBK0IsS0FBSyxPQUFPLEVBQUU7QUFDN0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxVQUFVO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVU7QUFDMUU7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSx3QkFBd0IsR0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLGNBQWMsZ0NBQWdDO0FBQ2hGO0FBQ0EsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsc0JBQXNCO0FBQzdDO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLE9BQU87QUFDakM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixHQUFHLEdBQUcsRUFBRTtBQUNsQyxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDdkMsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDNUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM1QyxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0JBQW9CLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFLElBQUksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0JBQW9CLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUIsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRSxJQUFJLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEVBQUU7QUFDVjtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELCtCQUErQixFQUFFOztBQUVyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQyxvREFBb0QsNkJBQTZCLEVBQUU7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFNBQVM7QUFDekM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLGFBQWEsR0FBRyxFQUFFLEtBQUssR0FBRztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLE9BQU87QUFDcEIsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLE9BQU87O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQztBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QjtBQUNBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQztBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0IsZ0JBQWdCLHdCQUF3QixZQUFZOztBQUVwRDtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGVBQWUseUJBQXlCLFlBQVk7O0FBRXBEO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDLGlCQUFpQiw0QkFBNEI7O0FBRTdDO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DLGtCQUFrQiw4QkFBOEI7O0FBRWhEO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQSxhQUFhLFVBQVU7QUFDdkIsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLGFBQWEsVUFBVTtBQUN2QixjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQyxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1CQUFtQixnQkFBZ0I7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQixpQkFBaUIsY0FBYztBQUMvQixpQkFBaUIsY0FBYztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLHNCQUFzQjtBQUN0QjtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHVDQUF1QztBQUN2QztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQyx1QkFBdUIsb0JBQW9CO0FBQzNDLHVCQUF1QixvQkFBb0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0MsdUJBQXVCLG9CQUFvQjtBQUMzQyx1QkFBdUIsb0JBQW9COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakMsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekI7QUFDQSxhQUFhLE1BQU07QUFDbkIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsY0FBYyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDOUU7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CLGFBQWEsa0JBQWtCO0FBQy9CLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsZ0JBQWdCO0FBQzdCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CLGFBQWEsZ0JBQWdCO0FBQzdCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQixhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELDJEQUEyRDtBQUMzRCwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7OztBQUdKOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEU7O0FBRU4sSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQywrQkFBK0I7QUFDekUsK0NBQStDLG1DQUFtQztBQUNsRiw2Q0FBNkMsaUNBQWlDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBLFlBQVksc0JBQXNCOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtB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QUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix1Q0FBdUM7QUFDL0Qsd0JBQXdCLG9DQUFvQzs7QUFFNUQscUJBQXFCLHdCQUF3QjtBQUM3QyxxQkFBcUIscUJBQXFCOztBQUUxQyxlQUFlLDBCQUEwQjtBQUN6QyxnQkFBZ0IsdUJBQXVCOztBQUV2QyxhQUFhLHdCQUF3QjtBQUNyQyxjQUFjLHFCQUFxQjs7QUFFbkMsbUJBQW1CLDhCQUE4Qjs7QUFFakQscUJBQXFCLGdDQUFnQzs7QUFFckQscUJBQXFCLGdDQUFnQzs7QUFFckQsbUJBQW1CLDhCQUE4Qjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0Isb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QywrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QyxvQkFBb0IscUJBQXFCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9CQUFvQjtBQUNwQyxpQkFBaUIsc0JBQXNCOztBQUV2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QywyQkFBMkIsYUFBYTs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDLDJCQUEyQixhQUFhOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsMkJBQTJCLGFBQWE7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekMsMEJBQTBCLGVBQWU7QUFDekMsMEJBQTBCLGVBQWU7QUFDekMsMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixhQUFhO0FBQ3hDLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixXQUFXLEVBQUUsU0FBUyxJQUFJLFdBQVc7QUFDOUQsZ0JBQWdCLFdBQVcsRUFBRSxTQUFTLElBQUksV0FBVztBQUNyRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUEsZ0NBQWdDLDhCQUE4QjtBQUM5RCwrQkFBK0IsNkJBQTZCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQsK0NBQStDLEVBQUU7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQSxRQUFRO0FBQ1Isa0NBQWtDLEdBQUcsY0FBYzs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsU0FBUzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVcsRUFBRSxTQUFTLElBQUksV0FBVztBQUNsRSxvQkFBb0IsV0FBVyxFQUFFLFNBQVMsSUFBSSxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDLG9CQUFvQixxQkFBcUI7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFD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QUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogcGhpbmEuanMgdjAuMi4zXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIHBoaVxuICovXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5PYmplY3RcclxuICogT2JqZWN044Gu5ouh5by1XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIOmWouaVsOOCkui/veWKoFxyXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBrZXkgbmFtZVxyXG4gKiBAcGFyYW0gICB7RnVuY3Rpb259IGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiAkbWV0aG9kKG5hbWUsIGZuKSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcclxuICAgIHZhbHVlOiBmbixcclxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgd3JpdGFibGU6IHRydWVcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgYWNjZXNzb3JcclxuICog44Ki44Kv44K744OD44K1KOOCu+ODg+OCv+ODvC/jgrLjg4Pjgr/jg7wp44KS5a6a576p44GZ44KLXHJcbiAqL1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoXCJhY2Nlc3NvclwiLCBmdW5jdGlvbihuYW1lLCBwYXJhbSkge1xyXG5mdW5jdGlvbiBhY2Nlc3NvcihuYW1lLCBwYXJhbSkge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCB7XHJcbiAgICBzZXQ6IHBhcmFtW1wic2V0XCJdLFxyXG4gICAgZ2V0OiBwYXJhbVtcImdldFwiXSxcclxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBmb3JJblxyXG4gKiDjgqrjg5bjgrjjgqfjgq/jg4jnlKjjg6vjg7zjg5flh6bnkIZcclxuICovXHJcbmZ1bmN0aW9uIGZvckluKGZuLCBzZWxmKSB7XHJcbiAgc2VsZiA9IHNlbGYgfHwgdGhpcztcclxuXHJcbiAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XHJcbiAgICB2YXIgdmFsdWUgPSB0aGlzW2tleV07XHJcblxyXG4gICAgZm4uY2FsbChzZWxmLCBrZXksIHZhbHVlLCBpbmRleCk7XHJcbiAgfSwgdGhpcyk7XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCAgJGV4dGVuZFxyXG4gKiDku5bjga7jg6njgqTjg5bjg6njg6rjgajnq7blkIjjgZfjgaHjgoPjgYbjga7jgacgZXh0ZW5kIC0+ICRleHRlbmQg44Go44GX44G+44GX44GfXHJcbiAqL1xyXG5mdW5jdGlvbiAkZXh0ZW5kKCkge1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoXCIkZXh0ZW5kXCIsIGZ1bmN0aW9uKCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgICB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfSwgdGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kICAkc2FmZVxyXG4gKiDlronlhajmi6HlvLVcclxuICog5LiK5pu444GN44GX44Gq44GEXHJcbiAqL1xyXG5mdW5jdGlvbiAkc2FmZShzb3VyY2UpIHtcclxuLy8gT2JqZWN0LnByb3RvdHlwZS4kbWV0aG9kKFwiJHNhZmVcIiwgZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XHJcbiAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB0aGlzW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfSwgdGhpcyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kICR3YXRjaFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFjayAgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiAkd2F0Y2goa2V5LCBjYWxsYmFjaykge1xyXG4vLyBPYmplY3QucHJvdG90eXBlLiRtZXRob2QoJyR3YXRjaCcsIGZ1bmN0aW9uKGtleSwgY2FsbGJhY2spIHtcclxuICB2YXIgdGFyZ2V0ID0gdGhpcztcclxuICB2YXIgZGVzY3JpcHRvciA9IG51bGw7XHJcblxyXG4gIHdoaWxlKHRhcmdldCkge1xyXG4gICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xyXG4gICAgaWYgKGRlc2NyaXB0b3IpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIC8vIOOBmeOBp+OBq+OCouOCr+OCu+ODg+OCteODvOOBqOOBl+OBpuWtmOWcqOOBmeOCi+WgtOWQiFxyXG4gIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAvLyDjg4fjg7zjgr/jg4fjgqPjgrnjgq/jg6rjg5fjgr/jga7loLTlkIhcclxuICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIHRlbXBLZXkgPSAnX18nICsga2V5O1xyXG4gICAgICB2YXIgdGVtcFZhbHVlID0gdGhpc1trZXldO1xyXG5cclxuICAgICAgdGhpc1t0ZW1wS2V5XSA9IHRlbXBWYWx1ZTtcclxuXHJcbiAgICAgIGFjY2Vzc29yLmNhbGwodGhpcywga2V5LCB7XHJcbiAgICAgIC8vIHRoaXMuYWNjZXNzb3Ioa2V5LCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzW3RlbXBLZXldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICB2YXIgb2xkID0gdGhpc1t0ZW1wS2V5XTtcclxuICAgICAgICAgIHRoaXNbdGVtcEtleV0gPSB2O1xyXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2LCBvbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8g44Ki44Kv44K744K144OH44Kj44K544Kv44Oq44OX44K/44Gu5aC05ZCIXHJcbiAgICBlbHNlIHtcclxuICAgICAgYWNjZXNzb3IuY2FsbCh0aGlzLCBrZXksIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHZhciBvbGQgPSBkZXNjcmlwdG9yLmdldC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgdiwgb2xkKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgYWNjZXNza2V5ID0gJ19fJyArIGtleTtcclxuXHJcbiAgICBhY2Nlc3Nvci5jYWxsKHRoaXMsIGtleSwge1xyXG4gICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1thY2Nlc3NrZXldO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICB2YXIgb2xkID0gdGhpc1thY2Nlc3NrZXldO1xyXG4gICAgICAgIHRoaXNbYWNjZXNza2V5XSA9IHY7XHJcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB2LCBvbGQpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XG5cbi8qXHJcbiAqIGFycmF5LmpzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBmaXJzdFxyXG4gKiDmnIDliJ3jga7opoHntKBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFs2LCA1LCAyLCAzLCAxLCA0XTtcclxuICogICAgIGFyci5maXJzdDsgLy8gPT4gNlxyXG4gKi9cclxuY29uc3QgZmlyc3QgPSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS5hY2Nlc3NvcihcImZpcnN0XCIsIHtcclxuICBcImdldFwiOiBmdW5jdGlvbigpICAgeyByZXR1cm4gdGhpc1swXTsgfSxcclxuICBcInNldFwiOiBmdW5jdGlvbih2KSAgeyB0aGlzWzBdID0gdjsgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBsYXN0XHJcbiAqIOacgOW+jOOBruimgee0oFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWzYsIDUsIDIsIDMsIDEsIDRdO1xyXG4gKiAgICAgYXJyLmxhc3Q7IC8vID0+IDRcclxuICovXHJcbmNvbnN0IGxhc3QgPSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS5hY2Nlc3NvcihcImxhc3RcIiwge1xyXG4gIFwiZ2V0XCI6IGZ1bmN0aW9uKCkgICB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLTFdOyB9LFxyXG4gIFwic2V0XCI6IGZ1bmN0aW9uKHYpICB7IHRoaXNbdGhpcy5sZW5ndGgtMV0gPSB2OyB9XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgYXRcclxuICog5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu6KaB57Sg44KS6L+U44GX44G+44GZ77yI44Or44O844OX44O76LKg5pWw44Gu5oyH5a6a5Y+v77yJ44CCXHJcbiAqXHJcbiAqIOa3u+Wtl+OBjOiyoOaVsOOBruWgtOWQiOOBr+acq+WwvuOBi+OCieOBruOCquODleOCu+ODg+ODiOOBqOOBv+OBquOBl+OBvuOBmeOAguacq+WwvuOBruimgee0oOOBjCAtMSDnlarnm67jgavjgarjgorjgb7jgZnjgIIgIFxyXG4gKiDmt7vlrZfjga7ntbblr77lgKTjgYwgQXJyYXkubGVuZ3RoIOS7peS4iuOBruWgtOWQiOOBr+ODq+ODvOODl+OBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG4gKiAgICAgYXJyLmF0KDApOyAgLy8gPT4gJ2EnXHJcbiAqICAgICBhcnIuYXQoNik7ICAvLyA9PiAnYSdcclxuICogICAgIGFyci5hdCgxMyk7IC8vID0+ICdiJ1xyXG4gKiAgICAgYXJyLmF0KC0xKTsgLy8gPT4gJ2YnXHJcbiAqICAgICBhcnIuYXQoLTgpOyAvLyA9PiAnZSdcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOa3u+Wtl1xyXG4gKiBAcmV0dXJuIHtPYmplY3R9IOa3u+Wtl+OBp+aMh+WumuOBleOCjOOBn+imgee0oFxyXG4gKi9cclxuZnVuY3Rpb24gYXQoaSkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImF0XCIsIGZ1bmN0aW9uKGkpIHtcclxuICBpJT10aGlzLmxlbmd0aDtcclxuICBpKz10aGlzLmxlbmd0aDtcclxuICBpJT10aGlzLmxlbmd0aDtcclxuICByZXR1cm4gdGhpc1tpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZXJhc2VcclxuICogQGNoYWluYWJsZVxyXG4gKiDmjIflrprjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjgajkuIDoh7TjgZfjgZ/mnIDliJ3jga7opoHntKDjgpLliYrpmaTjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFycjEgPSBbJ2EnLCAnYicsICdiJywgJ2MnXTtcclxuICogICAgIGFycjIgPSBhcnIxLmVyYXNlKCdiJyk7IC8vID0+IFsnYScsICdiJywgJ2MnXVxyXG4gKiAgICAgYXJyMSA9PT0gYXJyMjsgICAgICAgICAgLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZWxtIOWJiumZpOOBl+OBn+OBhOOCquODluOCuOOCp+OCr+ODiFxyXG4gKi9cclxuZnVuY3Rpb24gZXJhc2UoZWxtKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiZXJhc2VcIiwgZnVuY3Rpb24oZWxtKSB7XHJcbiAgdmFyIGluZGV4ICA9IHRoaXMuaW5kZXhPZihlbG0pO1xyXG4gIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgY2xlYXJcclxuICogQGNoYWluYWJsZVxyXG4gKiDoh6rouqvjgpLnqbrjga7phY3liJfjgavjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFsxLCAyLCBbMywgNF1dO1xyXG4gKiAgICAgYXJyLmNsZWFyKCk7IC8vID0+IFtdXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGVhcihkZWVwKSB7XHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiY2xlYXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5sZW5ndGggPSAwO1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBjb250YWluc1xyXG4gKiDmjIflrprjgZfjgZ/opoHntKDjgYzphY3liJfjgavlkKvjgb7jgozjgabjgYTjgovjgYvjgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZnjgIJcclxuICpcclxuICog5q+U6LyD44Gr44Gv5Y6z5a+G44Gq5ZCM5YCk77yI5LiJ6YeN44Kk44Kz44O844Or5ryU566X5a2QID09PSDjgafkvb/jgo/jgozjgovjga7jgajlkIzjgZjmlrnms5XvvInjgpLnlKjjgYTjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFs2LCA1LCAyLCAzLCAxLCA0XTtcclxuICogICAgIGFyci5jb250YWlucygzKTsgICAgIC8vID0+IHRydWVcclxuICogICAgIGFyci5jb250YWlucygzLCA0KTsgIC8vID0+IGZhbHNlXHJcbiAqICAgICBhcnIuY29udGFpbnMoMywgLTQpOyAvLyA9PiB0cnVlXHJcbiAqICAgICBhcnIuY29udGFpbnMoXCI2XCIpOyAgIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIOODgeOCp+ODg+OCr+OBmeOCi+OCquODluOCuOOCp+OCr+ODiFxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2Zyb21JbmRleD0wXSDmpJzntKLjgpLlp4vjgoHjgovkvY3nva7jgILosqDmlbDjgpLmjIflrprjgZfjgZ/loLTlkIjjga/mnKvlsL7jgYvjgonjga7jgqrjg5Xjgrvjg4Pjg4jjgajopovjgarjgZfjgb7jgZnjgIJcclxuICogQHJldHVybiB7Qm9vbGVhbn0g44OB44Kn44OD44Kv44Gu57WQ5p6cXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250YWlucyhpdGVtLCBmcm9tSW5kZXgpIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJjb250YWluc1wiLCBmdW5jdGlvbihpdGVtLCBmcm9tSW5kZXgpIHtcclxuICByZXR1cm4gdGhpcy5pbmRleE9mKGl0ZW0sIGZyb21JbmRleCkgIT0gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNsb25lXHJcbiAqIOiHqui6q+OBruOCs+ODlOODvOOCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyMSA9IFsxLCAyLCBbMywgNF1dO1xyXG4gKiAgICAgYXJyMiA9IGFycjEuY2xvbmUoKTsgICAgICAvLyA9PiBbMSwgMiwgWzMsIDRdXVxyXG4gKiAgICAgYXJyMVsyXSA9PT0gYXJyMlsyXTsgICAgICAvLyA9PiB0cnVlXHJcbiAqICAgICBhcnIxWzJdWzBdID0gOTtcclxuICogICAgIGFycjI7ICAgICAgICAgICAgICAgICAgICAgLy8gPT4gWzEsIDIsIFs5LCA0XV1cclxuICogICAgIGFycjEgPSBbMSwgMiwgWzMsIDRdXTtcclxuICogICAgIGFycjIgPSBhcnIxLmNsb25lKHRydWUpOyAgLy8gPT4gWzEsIDIsIFszLCA0XV1cclxuICogICAgIGFycjFbMl0gPT09IGFycjJbMl07ICAgICAgLy8gPT4gZmFsc2VcclxuICogICAgIGFycjFbMl1bMF0gPSA5O1xyXG4gKiAgICAgYXJyMjsgICAgICAgICAgICAgICAgICAgICAvLyA9PiBbMSwgMiwgWzMsIDRdXVxyXG4gKlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtkZWVwPWZhbHNlXSDphY3liJfjga7jg43jgrnjg4jjgpLjgZ/jganjgaPjgabopIfoo73jgZnjgovjgYvjganjgYbjgYtcclxuICogQHJldHVybiB7T2JqZWN0fSDmlrDjgZfjgYTphY3liJdcclxuICovXHJcbmZ1bmN0aW9uIGNsb25lKGRlZXApIHtcclxuLy8gQXJyYXkucHJvdG90eXBlLiRtZXRob2QoXCJjbG9uZVwiLCBmdW5jdGlvbihkZWVwKSB7XHJcbiAgaWYgKGRlZXAgPT09IHRydWUpIDtcclxuICBlbHNlIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQG1ldGhvZCByYW5nZVxyXG4gKiBAY2hhaW5hYmxlXHJcbiAqIOiHqui6q+OCkuetieW3ruaVsOWIl++8iOS4gOWumumWk+malOOBruaVtOaVsOWApOOBruWIl++8ieOBqOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAtIOW8leaVsOOBjDHjgaTjga7loLTlkIjjgIEw772eZW5k77yIZW5k5ZCr44G+44Ga77yJ44Gu5pW05pWw44Gu6YWN5YiX44Gn44GZ44CCICBcclxuICogLSDlvJXmlbDjgYwy44Gk44Gu5aC05ZCI44CBc3RhcnTvvZ5lbmTvvIhlbmTlkKvjgb7jgZrvvInjga7mlbTmlbDjga7phY3liJfjgafjgZnjgIIgIFxyXG4gKiAtIOW8leaVsOOBjDPjgaTjga7loLTlkIjjgIFzdGFydO+9nmVuZO+8iGVuZOWQq+OBvuOBmu+8ieOBi+OBpCBzdGFydCArIG4gKiBzdGVwIChu44Gv5pW05pWwKeOCkua6gOOBn+OBmeaVtOaVsOOBrumFjeWIl+OBp+OBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgYXJyID0gW107XHJcbiAqICAgICBhcnIucmFuZ2UoNCk7ICAgICAgICAvLyA9PiBbMCwgMSwgMiwgM11cclxuICogICAgIGFyci5yYW5nZSgyLCA1KTsgICAgIC8vID0+IFsyLCAzLCA0XVxyXG4gKiAgICAgYXJyLnJhbmdlKDIsIDE0LCA1KTsgLy8gPT4gWzIsIDcsIDEyXVxyXG4gKiAgICAgYXJyLnJhbmdlKDIsIC0zKTsgICAgLy8gPT4gWzIsIDEsIDAsIC0xLCAtMl1cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IOacgOWIneOBruWApO+8iOODh+ODleOCqeODq+ODiOOBryAw77yJXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmQg5pyA5b6M44Gu5YCk77yI55yB55Wl5LiN5Y+v77yJXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RlcD0x44G+44Gf44GvLTFdIOmWk+malFxyXG4gKi9cclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcInJhbmdlXCIsIGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHN0ZXApIHtcclxuICBjbGVhci5jYWxsKHRoaXMpO1xyXG4gIC8vIHRoaXMuY2xlYXIoKTtcclxuICBcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICBmb3IgKHZhciBpPTA7IGk8c3RhcnQ7ICsraSkgdGhpc1tpXSA9IGk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHN0YXJ0IDwgZW5kKSB7XHJcbiAgICBzdGVwID0gc3RlcCB8fCAxO1xyXG4gICAgaWYgKHN0ZXAgPiAwKSB7XHJcbiAgICAgIGZvciAodmFyIGk9c3RhcnQsIGluZGV4PTA7IGk8ZW5kOyBpKz1zdGVwLCArK2luZGV4KSB7XHJcbiAgICAgICAgdGhpc1tpbmRleF0gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgc3RlcCA9IHN0ZXAgfHwgLTE7XHJcbiAgICBpZiAoc3RlcCA8IDApIHtcclxuICAgICAgZm9yICh2YXIgaT1zdGFydCwgaW5kZXg9MDsgaT5lbmQ7IGkrPXN0ZXAsICsraW5kZXgpIHtcclxuICAgICAgICB0aGlzW2luZGV4XSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGVhY2hcclxuICogQGNoYWluYWJsZVxyXG4gKiDopoHntKDjgpLpoIbnlarjgavmuKHjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICog44Oh44K944OD44OJ44OB44Kn44O844Oz44Gr5a++5b+c44GX44Gm44GE44G+44GZ44GM44CB44GT44Gu44Oh44K944OD44OJ44Gr44KI44Gj44Gm6Ieq5YiG6Ieq6Lqr44Gv5aSJ5YyW44GX44G+44Gb44KT44CCXHJcbiAqXHJcbiAqICMjI1JlZmVyZW5jZVxyXG4gKiAtIFtBcnJheS5wcm90b3R5cGUuZm9yRWFjaCgpIC0gSmF2YVNjcmlwdCB8IE1ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvamEvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZm9yRWFjaClcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFsxLCAyLCAzXTtcclxuICogICAgIGFyci5lYWNoKCBmdW5jdGlvbihlbG0pIHtcclxuICogICAgICAgY29uc29sZS5sb2coZWxtICogZWxtKVxyXG4gKiAgICAgfSk7XHJcbiAqICAgICAvLyA9PiAxXHJcbiAqICAgICAvLyAgICA0XHJcbiAqICAgICAvLyAgICA5XHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIOWQhOimgee0oOOBq+WvvuOBl+OBpuWun+ihjOOBmeOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10gY2FsbGJhY2sg5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCkXHJcbiAqL1xyXG5mdW5jdGlvbiBlYWNoKCkge1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImVhY2hcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5mb3JFYWNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09XHJcbi8vIOS7peS4i+OBr2VzMjAxNeS7pemZjeOBq+WtmOWcqOOBmeOCi+OBn+OCgeOAgeS/neeVmVxyXG4vLyA9PT09PT09PT09XHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEBtZXRob2QgZmluZFxyXG4vLyAgKiDlkITopoHntKDjgpLlvJXmlbDjgavjgZfjgabplqLmlbDjgpLlrp/ooYzjgZfjgIHjgZ3jga7lgKTjgYznnJ/jgajjgarjgovvvIjvvJ3mnaHku7bjgavjg57jg4Pjg4HjgZnjgovvvInmnIDliJ3jga7opoHntKDjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICog44Gp44Gu6KaB57Sg44KC44Oe44OD44OB44GX44Gq44GR44KM44GwIHVuZGVmaW5lZCDjgpLov5TjgZfjgb7jgZnjgIJcclxuLy8gICpcclxuLy8gICogIyMjIEV4YW1wbGVcclxuLy8gICogICAgIGFyciA9IFsnZm9vJywgJ2JhcicsICdob2dlJywgJ2Z1Z2EnXTtcclxuLy8gICogICAgIGFyci5maW5kKCBmdW5jdGlvbihlbG0pIHtcclxuLy8gICogICAgICAgcmV0dXJuIGVsbS5pbmRleE9mKCdhJykgPj0gMDtcclxuLy8gICogICAgIH0pO1xyXG4vLyAgKiAgICAgLy8gPT4gJ2JhcidcclxuLy8gICpcclxuLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5ZCE6KaB57Sg44Gr5a++44GX44Gm5a6f6KGM44GZ44KL44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/lkbzjgbPlh7rjgZfmmYLjga4gdGhpc+OAglxyXG4vLyAgKiBAcmV0dXJuIHtPYmplY3R9IOadoeS7tuOBq+ODnuODg+ODgeOBl+OBn+acgOWIneOBruimgee0oOOAgeOBvuOBn+OBryB1bmRlZmluZWRcclxuLy8gICovXHJcbi8vIEFycmF5LnByb3RvdHlwZS4kbWV0aG9kKFwiZmluZFwiLCBmdW5jdGlvbihmbiwgc2VsZikge1xyXG4vLyAgIHZhciB0YXJnZXQgPSBudWxsO1xyXG5cclxuLy8gICB0aGlzLnNvbWUoZnVuY3Rpb24oZWxtLCBpKSB7XHJcbi8vICAgICBpZiAoZm4uY2FsbChzZWxmLCBlbG0sIGksIHRoaXMpKSB7XHJcbi8vICAgICAgIHRhcmdldCA9IGVsbTtcclxuLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgICB9XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB0YXJnZXQ7XHJcbi8vIH0pO1xyXG5cclxuLy8gLyoqXHJcbi8vICAqIEBtZXRob2QgZmluZEluZGV4XHJcbi8vICAqIOWQhOimgee0oOOCkuW8leaVsOOBq+OBl+OBpumWouaVsOOCkuWun+ihjOOBl+OAgeOBneOBruWApOOBjOecn+OBqOOBquOCi++8iO+8neadoeS7tuOBq+ODnuODg+ODgeOBmeOCi++8ieacgOWIneOBruOCpOODs+ODh+ODg+OCr+OCueOCkui/lOOBl+OBvuOBmeOAglxyXG4vLyAgKlxyXG4vLyAgKiDjganjga7opoHntKDjgoLjg57jg4Pjg4HjgZfjgarjgZHjgozjgbAgLTEg44KS6L+U44GX44G+44GZ44CCXHJcbi8vICAqXHJcbi8vICAqICMjIyBFeGFtcGxlXHJcbi8vICAqICAgICBhcnIgPSBbJ2ZvbycsICdiYXInLCAnaG9nZScsICdmdWdhJ107XHJcbi8vICAqICAgICBhcnIuZmluZEluZGV4KCBmdW5jdGlvbihlbG0pIHtcclxuLy8gICogICAgICAgcmV0dXJuIGVsbS5pbmRleE9mKCdhJykgPj0gMDtcclxuLy8gICogICAgIH0pO1xyXG4vLyAgKiAgICAgLy8gPT4gMVxyXG4vLyAgKlxyXG4vLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuLy8gICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApOOAguODh+ODleOCqeODq+ODiOOBr+WRvOOBs+WHuuOBl+aZguOBriB0aGlz44CCXHJcbi8vICAqIEByZXR1cm4ge09iamVjdH0g5p2h5Lu244Gr44Oe44OD44OB44GX44Gf5pyA5Yid44Gu44Kk44Oz44OH44OD44Kv44K544CB44G+44Gf44GvIC0xXHJcbi8vICAqL1xyXG4vLyBBcnJheS5wcm90b3R5cGUuJG1ldGhvZChcImZpbmRJbmRleFwiLCBmdW5jdGlvbihmbiwgc2VsZikge1xyXG4vLyAgIHZhciB0YXJnZXQgPSAtMTtcclxuXHJcbi8vICAgdGhpcy5zb21lKGZ1bmN0aW9uKGVsbSwgaSkge1xyXG4vLyAgICAgaWYgKGZuLmNhbGwoc2VsZiwgZWxtLCBpLCB0aGlzKSkge1xyXG4vLyAgICAgICB0YXJnZXQgPSBpO1xyXG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIHRhcmdldDtcclxuLy8gfSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBvZlxyXG4gKiBAc3RhdGljXHJcbiAqIEVTNiDmupbmi6Djga4gb2Yg6Zai5pWw44Gn44GZ44CC5Y+v5aSJ6ZW35byV5pWw44KS44Go44Gj44GmIEFycmF5IOOCquODluOCuOOCp+OCr+ODiOOBq+OBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiAgICAgQXJyYXkub2YoKTsgICAgICAgIC8vID0+IFtdXHJcbiAqICAgICBBcnJheS5vZigxLCAyLCAzKTsgLy8gPT4gWzEsIDIsIDNdXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50TiDnlJ/miJDjgZnjgovphY3liJfjga7opoHntKBcclxuICogQHJldHVybiB7QXJyYXl9IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gKi9cclxuLy8gQXJyYXkuJG1ldGhvZChcIm9mXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4vLyB9KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGZyb21cclxuICogQHN0YXRpY1xyXG4gKiBFUzYg5rqW5oug44GuIGZyb20g6Zai5pWw44Gn44GZ44CCYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4jjgYtpdGVyYWJsZSDjgqrjg5bjgrjjgqfjgq/jg4jjgYvjgonmlrDjgZfjgYTphY3liJfjgpLnlJ/miJDjgZfjgb7jgZnjgIJcclxuICpcclxuICogYXJyYXktbGlrZSDjgqrjg5bjgrjjgqfjgq/jg4jjgajjga/jgIFsZW5ndGgg44OX44Ot44OR44OG44Kj44KS5oyB44Gh44CB5pWw5a2X44Gu5re75a2X44Gn44Ki44Kv44K744K55Y+v6IO944Gq44Kq44OW44K444Kn44Kv44OI44Gu44GT44Go44Gn44GZ44CCXHJcbiAqIOmAmuW4uOOBrumFjeWIl+OBruOBu+OBi+OAgVN0cmluZ+OAgWFyZ3VtZW50c+OAgU5vZGVMaXN0IOOBquOBqeOCgiBhcnJheS1saWtlIOOCquODluOCuOOCp+OCr+ODiOOBp+OBmeOAglxyXG4gKlxyXG4gKiBpdGVyYWJsZSDjgqrjg5bjgrjjgqfjgq/jg4jjgajjga/jgIFTeW1ib2wuaXRlcmF0b3Ig44OX44Ot44OR44OG44Kj44KS5oyB44Gk44Kq44OW44K444Kn44Kv44OI44Gu44GT44Go44Gn44GZ44CCXHJcbiAqIOmAmuW4uOOBrumFjeWIl+OBruOBu+OBi+OAgVN0cmluZ+OAgWFyZ3VtZW50c+OAgU5vZGVMaXN0IOOBquOBqeOCgiBpdGVyYWJsZSDjgqrjg5bjgrjjgqfjgq/jg4jjgafjgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIEFycmF5LmZyb20oWzEsIDIsIDNdLCBmdW5jdGlvbihlbG0peyByZXR1cm4gZWxtICogZWxtfSApOyAvLyA9PiBbMSwgNCwgOV1cclxuICogICAgIEFycmF5LmZyb20oXCJmb29cIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID0+IFtcImZcIiwgXCJvXCIsIFwib1wiXVxyXG4gKiAgICAgQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpICAgICAgICAgICAgLy8gPT4gW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsLi4uXVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyYXlMaWtlIOmFjeWIl+OBq+WkieaPm+OBmeOCiyBhcnJheS1saWtlIOOCquODluOCuOOCp+OCr+ODiFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIGFycmF5TGlrZSDjga7jgZnjgbnjgabjga7opoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjg57jg4Pjg5fplqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBjYWxsYmFjayDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKRcclxuICogQHJldHVybiB7QXJyYXl9IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gKi9cclxuLy8gQXJyYXkuJG1ldGhvZChcImZyb21cIiwgZnVuY3Rpb24oYXJyYXlMaWtlLCBjYWxsYmFjaywgY29udGV4dCkge1xyXG4vLyAgIGlmICghT2JqZWN0KGFycmF5TGlrZSkubGVuZ3RoKSByZXR1cm4gW107XHJcblxyXG4vLyAgIHZhciByZXN1bHQgPSBbXTtcclxuLy8gICBpZiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciAmJiBhcnJheUxpa2VbU3ltYm9sLml0ZXJhdG9yXSkge1xyXG4vLyAgICAgICB2YXIgaXRlcmF0b3IgPSBhcnJheUxpa2VbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4vLyAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgICAgdmFyIGl0ZXJhdG9yUmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xyXG4vLyAgICAgICAgICAgaWYgKGl0ZXJhdG9yUmVzdWx0LmRvbmUpIGJyZWFrO1xyXG5cclxuLy8gICAgICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrLmJpbmQoY29udGV4dCB8fCB0aGlzKShpdGVyYXRvclJlc3VsdC52YWx1ZSkgOiBpdGVyYXRvclJlc3VsdC52YWx1ZTtcclxuLy8gICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5TGlrZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4vLyAgICAgICByZXN1bHQucHVzaChhcnJheUxpa2VbaV0pO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gcmVzdWx0Lm1hcCh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogZnVuY3Rpb24oaXRlbSkge1xyXG4vLyAgICAgcmV0dXJuIGl0ZW07XHJcbi8vICAgfSwgY29udGV4dCk7XHJcbi8vIH0pO1xuXG4vKlxyXG4gKiBwaGluYS5qcyBuYW1lc3BhY2VcclxuICovXHJcbnZhciBwaGluYSQxID0gcGhpbmEkMSB8fCB7fTtcclxuXHJcbi8vIOS4gOaXpuaLoeW8tVxyXG4vLyAkbWV0aG9kLmNhbGwocGhpbmEsIFwiaG9nZVwiLCAuLi4p44Go44GX44Gm44KC6Imv44GE44GM44CB5pu444GN5o+b44GI44GM5aSn5aSJ44Gq44Gf44KBXHJcbnBoaW5hJDEuJG1ldGhvZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcclxuLy8gcGhpbmEucHJvdG90eXBlLiRtZXRob2QgPSBmdW5jdGlvbiguLi5hcmdzKSB7IC8vIG5nXHJcbiAgcmV0dXJuICRtZXRob2QuY2FsbCh0aGlzLCAuLi5hcmdzKVxyXG59O1xyXG5cclxuLy8gOyhmdW5jdGlvbigpIHtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmFcclxuICogIyBwaGluYS5qcyBuYW1lc3BhY2VcclxuICogcGhpbmEuanMg44Gu44ON44O844Og44K544Oa44O844K544Gn44GZ44CCcGhpbmEuanMg44Gu5o+Q5L6b44GZ44KL5qmf6IO944Gv77yI44Kz44Ki5ouh5by15Lul5aSW77yJ5YWo44Gm44GT44Gu44Kq44OW44K444Kn44Kv44OI44Gr5YWl44Gj44Gm44GE44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIHBoaW5hLmpzIOOBruOCr+ODqeOCueWumue+qeOBq+OBpOOBhOOBplxyXG4gKlxyXG4gKiBwaGluYS5qcyDjgafjga/ni6zoh6rjga7jgq/jg6njgrnjgrfjgrnjg4bjg6DjgpLlrp/oo4XjgZfjgabjgYTjgb7jgZnjgIJcclxuICogcGhpbmEuanMg44Gu44Kv44Op44K544Gu54m55b6044Go44GX44Gm44GvIG5ldyDmp4vmlofjgpLkvb/nlKjjgZfjgarjgYTjgZ/jgoHjgIHjg6Hjgr3jg4Pjg4njg4Hjgqfjg7zjg7PjgYzjgZfjgoTjgZnjgYTjgZPjgajjgoTjgIHmloflrZfliJfjgafjgq/jg6njgrnjgpLlrprnvqnjgZfjgZ/jgoropqrjgq/jg6njgrnjgpLmjIflrprjgZfjgZ/jgorjgafjgY3jgovngrnjgYzmjJnjgZLjgonjgozjgb7jgZnjgIJcclxuICog5paH5a2X5YiX44KS5L2/55So44Gn44GN44KL44GT44Go44Gn44CB44Kv44Op44K544KS5a6a576p44GZ44KL5q616ZqO44Gn6Kaq44Kv44Op44K544GM5oyH5a6a44GV44KM44Gm44GE44Gq44GP44Gm44KC44CB44Kv44Op44K544KS5ZG844Gz5Ye644GZ5q616ZqO44Gn6Kaq44Kv44Op44K544GM5a6a576p44GV44KM44Gm44GE44KM44Gw44GE44GE44Go44GE44GG44Oh44Oq44OD44OI44GM44GC44KK44G+44GZ44CCXHJcbiAqXHJcbiAqIOOCr+ODqeOCueOBruWumue+qeOBq+OBryB7QGxpbmsgI2NyZWF0ZUNsYXNzfSwge0BsaW5rICNkZWZpbmV9IOOCkuS9v+eUqOOBl+OBvuOBmeOAguips+OBl+OBhOS9v+OBhOaWueOBr+OBneOCjOOBnuOCjOOBrumWouaVsOOBrumgheOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gKlxyXG4gKiAjIyDjgq/jg6njgrnjgavjgaTjgYTjgabjga7oo5zotrNcclxuICpcclxuICogcGhpbmEuanMg44Gu44Kv44Op44K544Gn44GvIHN1cGVyQ2xhc3Mg44KS5oyH5a6a44GZ44KL44Go5Lul5LiL44Gu44Oh44K944OD44OJ44GM6Ieq5YuV44Gn6L+95Yqg44GV44KM44G+44GZ44CCXHJcbiAqXHJcbiAqIC0gc3VwZXJJbml0KCk6IOimquOCr+ODqeOCueOBruOCs+ODs+OCueODiOODqeOCr+OCv+OCkuWRvOOBs+WHuuOBme+8iOWIneacn+WMlu+8iVxyXG4gKiAtIHN1cGVyTWV0aG9kKCk6IOimquOCr+ODqeOCueOBruODoeOCveODg+ODieOCkuWRvOOBs+WHuuOBmVxyXG4gKlxyXG4gKiBzdXBlckluaXQg44Gv5byV5pWw44KS5aSJ44GI44KL44GT44Go44Gn6Kaq44Kv44Op44K544Gu44Kz44Oz44K544OI44Op44Kv44K/44KS5ZG844G244Go44GN44Gu5byV5pWw44KS5aSJ44GI44KJ44KM44G+44GZ44CCXHJcbiAqIHN1cGVyTWV0aG9kIOOBr+S4gOOBpOebruOBruW8leaVsOOBq+WRvOOBs+WHuuOBl+OBn+OBhOimquOCr+ODqeOCueOBruODoeOCveODg+ODieWQjeOCkuaWh+Wtl+WIl+OBp+OAgeS6jOOBpOebruS7pemZjeOBq+WRvOOBs+WHuuOBl+OBn+OBhOODoeOCveODg+ODieOBruW8leaVsOOCkua4oeOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDjgb7jgZ8gcGhpbmEuanMg44Gu44Kv44Op44K544Gn44Gv5Lul5LiL44Gu54m55Yil44Gq5b255Ymy44KS44KC44Gj44Gf44OX44Ot44OR44OG44Kj44CB44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIC0gX2FjY2Vzc29yOiDjgqLjgq/jgrvjg4PjgrXjg7zvvIjjgrLjg4Pjgr/jg7zjgajjgrvjg4Pjgr/jg7zvvInjgpLlrprnvqnjgZnjgovjgZ/jgoHjga7jg5fjg63jg5Hjg4bjgqNcclxuICogLSBfc3RhdGljOiBzdGF0aWMg44Oh44Oz44OQ44KS5a6a576p44GZ44KL44Gf44KB44Gu44OX44Ot44OR44OG44KjXHJcbiAqIC0gX2RlZmluZWQoKTog44Kv44Op44K544GM5a6a576p44GV44KM44Gf44Go44GN44Gr5ZG844Gw44KM44KL44Oh44K944OD44OJXHJcbiAqXHJcbiAqICMjIyBfYWNjZXNzb3Ig44Gu5L2/55So5L6LXHJcbiAqICAgICB2YXIgQ2xhc3MgPSBwaGluYS5jcmVhdGVDbGFzcyh7XHJcbiAqICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAgIC4uLlxyXG4gKiAgICAgICB9LFxyXG4gKlxyXG4gKiAgICAgICBfYWNjZXNzb3I6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAgIHZhbHVlOiB7XHJcbiAqICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAqICAgICAgICAgICB9LFxyXG4gKlxyXG4gKiAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XHJcbiAqICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcclxuICogICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVl44GM44K744OD44OI44GV44KM44G+44GX44Gf77yBJyk7XHJcbiAqICAgICAgICAgICB9XHJcbiAqICAgICAgICAgfVxyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTtcclxuICpcclxuICogIyMjIF9zdGF0aWMg44Gu5L2/55So5L6LXHJcbiAqICAgICB2YXIgQ2xhc3MgPSBwaGluYS5jcmVhdGVDbGFzcyh7XHJcbiAqICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAgIC4uLlxyXG4gKiAgICAgICB9LFxyXG4gKlxyXG4gKiAgICAgICBfc3RhdGljOiB7XHJcbiAqXHJcbiAqICAgICAgICAgc3RhdGljUHJvcGVydHkxOiAxLFxyXG4gKiAgICAgICAgIHN0YXRpY1Byb3BlcnR5MjogMixcclxuICpcclxuICogICAgICAgICBzdGF0aWNNZXRob2QxOiBmdW5jdGlvbigpe30sXHJcbiAqICAgICAgICAgc3RhdGljTWV0aG9kMjogZnVuY3Rpb24oKXt9XHJcbiAqXHJcbiAqICAgICAgIH1cclxuICogICAgIH0pO1xyXG4gKlxyXG4gKiAgICAgY29uc29sZS5sb2coQ2xhc3Muc3RhdGljUHJvcGVydHkxKTsgLy8gPT4gMVxyXG4gKlxyXG4gKiAjIyMgX2RlZmluZWQg44Gu5L2/55So5L6LXHJcbiAqICAgICB2YXIgQ2xhc3MgPSBwaGluYS5jcmVhdGVDbGFzcyh7XHJcbiAqICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICB9LFxyXG4gKlxyXG4gKiAgICAgICBfZGVmaW5lZDogZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2RlZmluZWQhJyk7XHJcbiAqICAgICAgIH1cclxuICogICAgIH0pOyAvLyA9PiBkZWZpbmVkIVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW1ZFUlNJT04gPSA8JT0gdmVyc2lvbiAlPl1cclxuICogcGhpbmEuanMg44Gu44OQ44O844K444On44Oz44Gn44GZ44CCXHJcbiAqXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS5WRVJTSU9OID0gXCIwLjIuM1wiO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNOb2RlXHJcbiAqIE5vZGUuanMg44GuIG1vZHVsZSDjgYvjganjgYbjgYvjgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZnjgIJcclxuICpcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzTm9kZScsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIG5hbWVzcGFjZVxyXG4gKiDlvJXmlbDjga/plqLmlbDjgafjgIHjgZ3jga7plqLmlbDlhoXjgafjga4gdGhpcyDjga8gcGhpbmEg44Gr44Gq44KK44G+44GZ44CCXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOmWouaVsFxyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnbmFtZXNwYWNlJywgZnVuY3Rpb24oZm4pIHtcclxuICBmbi5jYWxsKHRoaXMpO1xyXG59KTtcclxuXHJcbnZhciBucyA9IHBoaW5hJDEuaXNOb2RlKCkgPyBnbG9iYWwgOiB3aW5kb3c7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtPYmplY3R9IGdsb2JhbFxyXG4gKiBOb2RlLmpzIOOBquOCiSBnbG9iYWwg44OW44Op44Km44K244Gq44KJIHdpbmRvdyDjgpLov5TjgZfjgb7jgZnjgIJcclxuICog44Ky44OD44K/44O844Gu44G/5a6a576p44GV44KM44Gm44GE44G+44GZ44CCXHJcbiAqXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHJlYWRvbmx5XHJcbiAqIEBzdGF0aWNcclxuICovXHJcbi8vIHBoaW5hLmFjY2Vzc29yKCdnbG9iYWwnLCB7XHJcbmFjY2Vzc29yLmNhbGwocGhpbmEkMSwgJ2dsb2JhbCcsIHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5zO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHRlc3RVQVxyXG4gKiDlvJXmlbDjga4gUmVnRXhwIOOCquODluOCuOOCp+OCr+ODiOOBqOODpuODvOOCtuODvOOCqOODvOOCuOOCp+ODs+ODiOOCkuavlOi8g+OBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlZ0V4cH1cclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ3Rlc3RVQScsIGZ1bmN0aW9uKHJlZ0V4cCkge1xyXG4gIGlmICghcGhpbmEkMS5nbG9iYWwubmF2aWdhdG9yKSByZXR1cm4gZmFsc2U7XHJcbiAgdmFyIHVhID0gcGhpbmEkMS5nbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICByZXR1cm4gcmVnRXhwLnRlc3QodWEpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzQW5kcm9pZFxyXG4gKiBBbmRyb2lkIOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBBbmRyb2lkIOOBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNBbmRyb2lkJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9BbmRyb2lkLyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNJUGhvbmVcclxuICogaVBob25lIOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBpUGhvbmUg44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc0lQaG9uZScsIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBwaGluYSQxLnRlc3RVQSgvaVBob25lLyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgaXNJUGFkXHJcbiAqIGlQYWQg44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlQYWQg44GL44Gp44GG44GLXHJcbiAqIEBtZW1iZXIgcGhpbmFcclxuICogQHN0YXRpY1xyXG4gKi9cclxucGhpbmEkMS4kbWV0aG9kKCdpc0lQYWQnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL2lQYWQvKTtcclxufSk7XHJcblxyXG4vKipcclxuICogQG1ldGhvZCBpc0lPU1xyXG4gKiBpT1Mg44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlPUyDjgYvjganjgYbjgYtcclxuICogQG1lbWJlciBwaGluYVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5waGluYSQxLiRtZXRob2QoJ2lzSU9TJywgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHBoaW5hJDEudGVzdFVBKC9pUGhvbmV8aVBhZC8pO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGlzTW9iaWxlXHJcbiAqIOODouODkOOCpOODq+OBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAguWFt+S9k+eahOOBq+OBryBBbmRyb2lkLCBpUGhvbmUsIGlQYWQg44Gu44GE44Ga44KM44GL44Gg44GoIHRydWUg44Gr44Gq44KK44G+44GZ44CCXHJcbiAqXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOODouODkOOCpOODq+OBi+OBqeOBhuOBi1xyXG4gKiBAbWVtYmVyIHBoaW5hXHJcbiAqIEBzdGF0aWNcclxuICovXHJcbnBoaW5hJDEuJG1ldGhvZCgnaXNNb2JpbGUnLCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gcGhpbmEkMS50ZXN0VUEoL2lQaG9uZXxpUGFkfEFuZHJvaWQvKTtcclxufSk7XHJcblxyXG4vLyAvLyBzdXBwb3J0IG5vZGUuanNcclxuLy8gaWYgKHBoaW5hLmlzTm9kZSgpKSB7XHJcbi8vICAgbW9kdWxlLmV4cG9ydHMgPSBwaGluYTtcclxuLy8gfVxyXG5cclxuLy8gbnMucGhpbmEgPSBwaGluYTtcclxuXHJcbi8vIH0pKHRoaXMpO1xyXG5cclxuXHJcbnBoaW5hJDEubmFtZXNwYWNlKGZ1bmN0aW9uKCkge1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXHJcbiAgICog44Kv44Op44K544KS5L2c5oiQ44GZ44KL6Zai5pWw44Gn44GZ44CCXHJcbiAgICog6Kaq44Kv44Op44K544Gu5oyH5a6a44Gv5paH5a2X5YiX44Gn44KC5Y+v6IO944Gn44GZ44CCXHJcbiAgICog5L2V44KC57aZ5om/44GX44Gq44GE5aC05ZCIIHN1cGVyQ2xhc3Mg44Gu5oyH5a6a44Gv5LiN6KaB44Gn44GZ44CC44G+44Gf44CB6Kaq44Kv44Op44K544KS57aZ5om/44GX44Gm44GE44KL5aC05ZCI44CB44Kz44Oz44K544OI44Op44Kv44K/5YaF44GnIHRoaXMuc3VwZXJJbml0KCkg44KS5a6f6KGM44GX44Gm6Kaq44Kv44Op44K544KS5Yid5pyf5YyW44GZ44KL44GT44Go44GM5b+F6aCI44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2YXIgQ2xhc3MgPSBwaGluYS5jcmVhdGVDbGFzcyh7XHJcbiAgICog44CA44CAICBzdXBlckNsYXNzOiAnbmFtZXNwYWNlLlN1cGVyJywvL+imquOCr+ODqeOCuee2meaJv1xyXG4gICAqXHJcbiAgICog44CA44CAICAvL+ODoeODs+ODkOWkieaVsFxyXG4gICAqIOOAgOOAgCAgbWVtYmVyMTogMTAwLFxyXG4gICAqIOOAgOOAgCAgbWVtYmVyMjogJ3Rlc3QnLFxyXG4gICAqIOOAgOOAgCAgbWVtYmVyMzogbnVsbCxcclxuICAgKlxyXG4gICAqXHJcbiAgICog44CA44CAICAvL+OCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAqIOOAgOOAgCAgLy9DbGFzcygp44KS5ZG844Gz5Ye644GX44Gf44Go44GN5a6f6KGM44GV44KM44KLXHJcbiAgICog44CA44CAICBpbml0OiBmdW5jdGlvbihhLCBiKXtcclxuICAgKiDjgIDjgIAgICAgLy/jgrnjg7zjg5Hjg7zjgq/jg6njgrko57aZ5om/44GX44Gf44Kv44Op44K5KeOBrmluaXRcclxuICAgKiDjgIDjgIAgICAgdGhpcy5zdXBlckluaXQoYSwgYik7XHJcbiAgICog44CA44CAICAgIHRoaXMuYSA9IGE7XHJcbiAgICog44CA44CAICAgIHRoaXMuYiA9IGI7XHJcbiAgICog44CA44CAICB9LFxyXG4gICAqIOOAgOOAgFxyXG4gICAqIOOAgOOAgCAgLy/jg6Hjgr3jg4Pjg4lcclxuICAgKiDjgIDjgIAgIG1ldGhvZDE6IGZ1bmN0aW9uKCl7fSxcclxuICAgKiDjgIDjgIAgIG1ldGhvZDI6IGZ1bmN0aW9uKCl7fSxcclxuICAgKiDjgIDjgIBcclxuICAgKiDjgIDjgIB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSDjgq/jg6njgrlcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgnY3JlYXRlQ2xhc3MnLCBmdW5jdGlvbihwYXJhbXMpIHtcclxuXHJcbiAgICB2YXIgX2NsYXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBfY2xhc3MucHJvdG90eXBlLl9jcmVhdG9yKCk7XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcclxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAocGFyYW1zLnN1cGVyQ2xhc3MpIHtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyYW1zLnN1cGVyQ2xhc3MucHJvdG90eXBlKTtcclxuICAgICAgcGFyYW1zLmluaXQub3duZXIgPSBfY2xhc3M7XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuc3VwZXJJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXIgPSB0aGlzLl9fY291bnRlciB8fCAwO1xyXG5cclxuICAgICAgICB2YXIgc3VwZXJDbGFzcyA9IHRoaXMuX2hpZXJhcmNoaWVzW3RoaXMuX19jb3VudGVyKytdO1xyXG4gICAgICAgIHZhciBzdXBlckluaXQgPSBzdXBlckNsYXNzLnByb3RvdHlwZS5pbml0O1xyXG4gICAgICAgIHN1cGVySW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICB0aGlzLl9fY291bnRlciA9IDA7XHJcbiAgICAgIH07XHJcbiAgICAgIF9jbGFzcy5wcm90b3R5cGUuc3VwZXJNZXRob2QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBhcmdzLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXJzID0gdGhpcy5fX2NvdW50ZXJzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX19jb3VudGVyc1tuYW1lXSA9IHRoaXMuX19jb3VudGVyc1tuYW1lXSB8fCAwO1xyXG5cclxuICAgICAgICB2YXIgc3VwZXJDbGFzcyA9IHRoaXMuX2hpZXJhcmNoaWVzWyB0aGlzLl9fY291bnRlcnNbbmFtZV0rKyBdO1xyXG4gICAgICAgIHZhciBzdXBlck1ldGhvZCA9IHN1cGVyQ2xhc3MucHJvdG90eXBlW25hbWVdO1xyXG4gICAgICAgIHZhciByc3QgPSBzdXBlck1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fX2NvdW50ZXJzW25hbWVdID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJzdDtcclxuICAgICAgfTtcclxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IF9jbGFzcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gLy9cclxuICAgIC8vIHBhcmFtcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAvLyAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIC8vICAgICBfY2xhc3MuJG1ldGhvZChrZXksIHZhbHVlKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBlbHNlIHtcclxuICAgIC8vICAgICBfY2xhc3MucHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyDntpnmib9cclxuICAgICRleHRlbmQuY2FsbChfY2xhc3MucHJvdG90eXBlLCBwYXJhbXMpO1xyXG4gICAgLy8gX2NsYXNzLnByb3RvdHlwZS4kZXh0ZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgLy8g57aZ5om/55SoXHJcbiAgICBfY2xhc3MucHJvdG90eXBlLl9oaWVyYXJjaGllcyA9IFtdO1xyXG4gICAgdmFyIF9zdXBlciA9IF9jbGFzcy5wcm90b3R5cGUuc3VwZXJDbGFzcztcclxuICAgIHdoaWxlKF9zdXBlcikge1xyXG4gICAgICBfY2xhc3MucHJvdG90eXBlLl9oaWVyYXJjaGllcy5wdXNoKF9zdXBlcik7XHJcbiAgICAgIF9zdXBlciA9IF9zdXBlci5wcm90b3R5cGUuc3VwZXJDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY2Nlc3NvclxyXG4gICAgaWYgKHBhcmFtcy5fYWNjZXNzb3IpIHtcclxuICAgICAgZm9ySW4uY2FsbChwYXJhbXMuX2FjY2Vzc29yLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgIC8vIHBhcmFtcy5fYWNjZXNzb3IuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGFjY2Vzc29yLmNhbGwoX2NsYXNzLnByb3RvdHlwZSwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gX2NsYXNzLnByb3RvdHlwZS5hY2Nlc3NvcihrZXksIHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIF9jbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKF9jbGFzcy5wcm90b3R5cGUsIHBhcmFtcy5fYWNjZXNzb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGFzcy5wcm90b3R5cGUuX2NyZWF0b3IgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH07XHJcbiAgICBfY2xhc3MucHJvdG90eXBlLl9jcmVhdG9yLnByb3RvdHlwZSA9IF9jbGFzcy5wcm90b3R5cGU7XHJcblxyXG4gICAgLy8gc3RhdGljIHByb3BlcnR5L21ldGhvZFxyXG4gICAgaWYgKHBhcmFtcy5fc3RhdGljKSB7XHJcbiAgICAgICRleHRlbmQuY2FsbChfY2xhc3MsIHBhcmFtcy5fc3RhdGljKTtcclxuICAgICAgLy8gX2NsYXNzLiRleHRlbmQocGFyYW1zLl9zdGF0aWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJhbXMuX2RlZmluZWQpIHtcclxuICAgICAgcGFyYW1zLl9kZWZpbmVkLmNhbGwoX2NsYXNzLCBfY2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBfY2xhc3M7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdXNpbmdcclxuICAgKiDmloflrZfliJfjgaflrprnvqnjgZfjgZ/jg5HjgrnjgpLkvb/jgaPjgabjgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5bjgorlh7rjgZfjgb7jgZnjgILjg5Hjgrnjga8gLCAuIC8gXFwgOjog44Gn5Yy65YiH44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICoge0BsaW5rICNwaGluYS5yZWdpc3Rlcn0g44Gn55m76Yyy44GX44Gf44Kq44OW44K444Kn44Kv44OI44KS5Y+W44KK5Ye644GZ44Go44GN44Gq44Gp44Gr5L2/44GG44Go5L6/5Yip44Gq6Zai5pWw44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBob2dlID0ge1xyXG4gICAqICAgICAgIGZvbzoge1xyXG4gICAqICAgICAgICAgYmFyOiB7XHJcbiAgICogICAgICAgICAgIG51bTogMTAwXHJcbiAgICogICAgICAgICB9XHJcbiAgICogICAgICAgfVxyXG4gICAqICAgICB9O1xyXG4gICAqICAgICB2YXIgYmFyID0gcGhpbmEudXNpbmcoJ2hvZ2UuZm9vLmJhcicpO1xyXG4gICAqICAgICBjb25zb2xlLmxvZyhiYXIubnVtKTsgLy8gPT4gMTAwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCDjgqrjg5bjgrjjgqfjgq/jg4jjgbjjga7jg5HjgrlcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOWPluOCiuWHuuOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCd1c2luZycsIGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgIGlmICghcGF0aCkge1xyXG4gICAgICByZXR1cm4gcGhpbmEkMS5nbG9iYWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhdGhlcyA9IHBhdGguc3BsaXQoL1ssLlxcLyBdfDo6Lyk7XHJcbiAgICB2YXIgY3VycmVudCA9IHBoaW5hJDEuZ2xvYmFsO1xyXG5cclxuICAgIHBhdGhlcy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnRbcF0gfHwgKGN1cnJlbnRbcF09e30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVnaXN0ZXJcclxuICAgKiDjg5HjgrnmjIflrprjgafjgqrjg5bjgrjjgqfjgq/jg4jjgpLnmbvpjLLjgZnjgovplqLmlbDjgafjgZnjgILjg5Hjgrnjga8gLCAuIC8gXFwgOjog44Gn5Yy65YiH44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5yZWdpc3RlcignaG9nZS5mb28uYmFyJywge1xyXG4gICAqICAgICAgIG51bTogMTAwLFxyXG4gICAqICAgICB9KTtcclxuICAgKiAgICAgY29uc29sZS5sb2coaG9nZS5mb28uYmFyLm51bSk7IC8vID0+IDEwMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGgg55m76Yyy44GZ44KL44Kq44OW44K444Kn44Kv44OI44Gu44OR44K5XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IF9jbGFzcyDnmbvpjLLjgZnjgovjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeZu+mMsuOBl+OBn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBtZW1iZXIgcGhpbmFcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgcGhpbmEkMS4kbWV0aG9kKCdyZWdpc3RlcicsIGZ1bmN0aW9uKHBhdGgsIF9jbGFzcykge1xyXG4gICAgdmFyIHBhdGhlcyA9IHBhdGguc3BsaXQoL1ssLlxcLyBdfDo6Lyk7XHJcbiAgICAvLyB2YXIgY2xhc3NOYW1lID0gcGF0aGVzLmxhc3Q7XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gbGFzdC5nZXQuY2FsbChwYXRoZXMpO1xyXG4gICAgdmFyIHBhcmVudFBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxhc3RJbmRleE9mKCcuJykpOyAvLyDjgZPjgZPjgpLnm7TjgZXjgarjgYTjgajjg5Tjg6rjgqrjg4nljLrliIfjgorku6XlpJbjga/nhKHlirnvvJ9cclxuICAgIHZhciBwYXJlbnQgPSBwaGluYSQxLnVzaW5nKHBhcmVudFBhdGgpO1xyXG5cclxuICAgIHBhcmVudFtjbGFzc05hbWVdID0gX2NsYXNzO1xyXG5cclxuICAgIHJldHVybiBfY2xhc3M7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBfY2xhc3NEZWZpbmVkQ2FsbGJhY2sgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkZWZpbmVcclxuICAgKiDjgq/jg6njgrnjgpLlrprnvqnjgZnjgovplqLmlbDjgafjgZnjgILkvb/jgYTmlrnjga8ge0BsaW5rICNjcmVhdGVDbGFzc30g44Go44G744Go44KT44Gp5ZCM44GY44Gn44GZ44CCXHJcbiAgICog44Gf44Gg44GX44CB5byV5pWw44GvMuOBpOOBguOCiuOAgeesrOS4gOW8leaVsOOBr+Wumue+qeOBmeOCi+OCr+ODqeOCueOBruODkeOCueOCkuaWh+Wtl+WIl+OBp+a4oeOBl+OBvuOBmeOAguesrOS6jOW8leaVsOOBruOCquODluOCuOOCp+OCr+ODiOOBryB7QGxpbmsgI2NyZWF0ZUNsYXNzfSDjga7lvJXmlbDjgajlkIzjgZjjgojjgYbjgavjgZfjgb7jgZnjgIJcclxuICAgKiB7QGxpbmsgI2NyZWF0ZUNsYXNzfSDjgajpgZXjgYTjgIHlpInmlbDjgavku6PlhaXjgZnjgovlv4XnlKjjgYzjgarjgY/jgIHjg5HjgrnmjIflrprjgafjgq/jg6njgrnjgpLlrprnvqnjgafjgY3jgb7jgZnjgIJcclxuICAgKiDlhoXpg6jnmoTjgavjga8ge0BsaW5rICNyZWdpc3Rlcn0sIHtAbGluayAjdXNpbmd9IOOCkuS9v+eUqOOBl+OBpuOBhOOCi+OBn+OCgeOAgeODkeOCueOBryAsIC4gLyBcXCA6OiDjgafljLrliIfjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmRlZmluZSgnbmFtZXNwYWNlLkNsYXNzJywge1xyXG4gICAqICAgICAgIHN1cGVyQ2xhc3M6ICduYW1lc3BhY2UuU3VwZXInLC8v6Kaq44Kv44Op44K557aZ5om/XHJcbiAgICpcclxuICAgKiAgICAgICAvL+ODoeODs+ODkOWkieaVsFxyXG4gICAqICAgICAgIG1lbWJlcjE6IDEwMCxcclxuICAgKiAgICAgICBtZW1iZXIyOiAndGVzdCcsXHJcbiAgICogICAgICAgbWVtYmVyMzogbnVsbCxcclxuICAgKlxyXG4gICAqXHJcbiAgICogICAgICAgLy/jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgKiAgICAgICAvL0NsYXNzKCnjgpLlkbzjgbPlh7rjgZfjgZ/jgajjgY3lrp/ooYzjgZXjgozjgotcclxuICAgKiAgICAgICBpbml0OiBmdW5jdGlvbihhLCBiKXtcclxuICAgKiAgICAgICAgIC8v44K544O844OR44O844Kv44Op44K5KOe2meaJv+OBl+OBn+OCr+ODqeOCuSnjga5pbml0XHJcbiAgICogICAgICAgICB0aGlzLnN1cGVySW5pdChhLCBiKTtcclxuICAgKiAgICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICogICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAqICAgICAgIH0sXHJcbiAgICpcclxuICAgKiAgICAgICAvL+ODoeOCveODg+ODiVxyXG4gICAqICAgICAgIG1ldGhvZDE6IGZ1bmN0aW9uKCl7fSxcclxuICAgKiAgICAgICBtZXRob2QyOiBmdW5jdGlvbigpe30sXHJcbiAgICpcclxuICAgKiAgICAgfSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCDjg5HjgrlcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSDlrprnvqnjgZfjgZ/jgq/jg6njgrlcclxuICAgKiBAbWVtYmVyIHBoaW5hXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHBoaW5hJDEuJG1ldGhvZCgnZGVmaW5lJywgZnVuY3Rpb24ocGF0aCwgcGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zLnN1cGVyQ2xhc3MpIHtcclxuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuc3VwZXJDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB2YXIgX3N1cGVyQ2xhc3MgPSBwaGluYSQxLnVzaW5nKHBhcmFtcy5zdXBlckNsYXNzKTtcclxuICAgICAgICBpZiAodHlwZW9mIF9zdXBlckNsYXNzICE9ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIGlmICghX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhcmFtcy5zdXBlckNsYXNzXSkge1xyXG4gICAgICAgICAgICBfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGFyYW1zLnN1cGVyQ2xhc3NdID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGFyYW1zLnN1cGVyQ2xhc3NdLnB1c2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBoaW5hJDEuZGVmaW5lKHBhdGgsIHBhcmFtcyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHBhcmFtcy5zdXBlckNsYXNzID0gX3N1cGVyQ2xhc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHBhcmFtcy5zdXBlckNsYXNzID0gcGFyYW1zLnN1cGVyQ2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2NsYXNzID0gcGhpbmEkMS5jcmVhdGVDbGFzcyhwYXJhbXMpO1xyXG4gICAgYWNjZXNzb3IuY2FsbChfY2xhc3MucHJvdG90eXBlLCAnY2xhc3NOYW1lJywge1xyXG4gICAgLy8gX2NsYXNzLnByb3RvdHlwZS5hY2Nlc3NvcignY2xhc3NOYW1lJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGhpbmEkMS5yZWdpc3RlcihwYXRoLCBfY2xhc3MpO1xyXG5cclxuICAgIGlmIChfY2xhc3NEZWZpbmVkQ2FsbGJhY2tbcGF0aF0pIHtcclxuICAgICAgX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhdGhdLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9KTtcclxuICAgICAgX2NsYXNzRGVmaW5lZENhbGxiYWNrW3BhdGhdID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2NsYXNzO1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdsb2JhbGl6ZVxyXG4gICAqIHBoaW5hLmpzIOOBjOeUqOaEj+OBl+OBpuOBhOOCi+WFqOOBpuOBruOCr+ODqeOCueOCkuOCsOODreODvOODkOODq+OBq+WxlemWi+OBl+OBvuOBmeOAgu+8iOWFt+S9k+eahOOBq+OBryBwaGluYSDjgYzmjIHjgaTjgqrjg5bjgrjjgqfjgq/jg4jjgYzkuIDpgJrjgorjgrDjg63jg7zjg5Djg6vjgavlsZXplovjgZXjgozjgb7jgZnjgILvvIlcclxuICAgKiDjgZPjga7plqLmlbDjgpLlrp/ooYzjgZnjgovjgZPjgajjgafjgIHjgYTjgaHjgYTjgaEgZ2xvYmFsIOOBi+OCieOBn+OBqeOBo+OBpuOBhOOBi+OBquOBj+OBpuOCgiBwaGluYS5qcyDjga7nlKjmhI/jgZfjgabjgYTjgovjgq/jg6njgrnjgpLjgq/jg6njgrnlkI3jgaDjgZHjgaflkbzjgbPlh7rjgZnjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdsb2JhbGl6ZSgpO1xyXG4gICAqXHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ2dsb2JhbGl6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgZm9ySW4uY2FsbChwaGluYSQxLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIDtcclxuXHJcbiAgICAgIGZvckluLmNhbGwodmFsdWUsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gdmFsdWUuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIC8vIGlmIChwaGluYS5nbG9iYWxba2V5XSkge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2cobnMsIGtleSk7XHJcbiAgICAgICAgLy8gICBwaGluYS5nbG9iYWxbJ18nICsga2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgIHBoaW5hLmdsb2JhbFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHBoaW5hJDEuZ2xvYmFsW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcGhpbmEkMS5fbWFpbkxpc3RlbmVycyA9IFtdO1xyXG4gIHBoaW5hJDEuX21haW5Mb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtYWluXHJcbiAgICogcGhpbmEuanMg44Gn44OX44Ot44Kw44Op44Of44Oz44Kw44GZ44KL6Zqb44CB44Oh44Kk44Oz44Gu5Yem55CG44KS6KiY6L+w44GZ44KL44Gf44KB44Gu6Zai5pWw44Gn44GZ44CC5Z+65pys55qE44GrIHBoaW5hLmpzIOOBp+OBruODl+ODreOCsOODqeODn+ODs+OCsOOBp+OBr+OBk+OBruS4reOBq+ODl+ODreOCsOODqeODoOOCkuabuOOBhOOBpuOBhOOBj+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEubWFpbihmdW5jdGlvbigpIHtcclxuICAgKiAgICAgICAvL+OBk+OBk+OBq+ODoeOCpOODs+OBruWHpueQhuOCkuabuOOBj1xyXG4gICAqICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMg44Oh44Kk44Oz44Gu5Yem55CGXHJcbiAgICogQG1lbWJlciBwaGluYVxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBwaGluYSQxLiRtZXRob2QoJ21haW4nLCBmdW5jdGlvbihmdW5jKSB7XHJcbiAgICBpZiAocGhpbmEkMS5fbWFpbkxvYWRlZCkge1xyXG4gICAgICBmdW5jKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcGhpbmEkMS5fbWFpbkxpc3RlbmVycy5wdXNoKGZ1bmMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgZG9jID0gcGhpbmEkMS5nbG9iYWwuZG9jdW1lbnQ7XHJcbiAgaWYgKHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgZG9jICYmIGRvYy5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBydW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gY2xvbmUuY2FsbChwaGluYSQxLl9tYWluTGlzdGVuZXJzKTtcclxuICAgICAgICAvLyB2YXIgbGlzdGVuZXJzID0gcGhpbmEuX21haW5MaXN0ZW5lcnMuY2xvbmUoKTtcclxuICAgICAgICBjbGVhci5jYWxsKHBoaW5hJDEuX21haW5MaXN0ZW5lcnMpO1xyXG4gICAgICAgIC8vIHBoaW5hLl9tYWluTGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZnVuYykge1xyXG4gICAgICAgIC8vIGxpc3RlbmVycy5lYWNoKGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAgICAgICAgIGZ1bmMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbWFpbiDlhoXjgacgbWFpbiDjgpLov73liqDjgZfjgabjgYTjgovloLTlkIjjgYzjgYLjgovjga7jgafjgZ3jga7jg4Hjgqfjg4Pjgq9cclxuICAgICAgICBpZiAocGhpbmEkMS5fbWFpbkxpc3RlbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwaGluYSQxLl9tYWluTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIC8vIOOBoeOCh+OBo+OBqOmBheW7tuOBleOBm+OCiyjnlLvpnaLjgrXjgqTjgrrllY/poYwpXHJcbiAgICAgIHNldFRpbWVvdXQocnVuKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHBoaW5hJDEuX21haW5Mb2FkZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICogIyDjgqTjg5njg7Pjg4jjgpLmibHjgYbjgZ/jgoHjga7jgq/jg6njgrlcclxuICog44Kk44OZ44Oz44OI44KS5omx44GG44Gf44KB44Gu44Oh44K944OD44OJ44KE44OX44Ot44OR44OG44Kj44KS5a6a576p44GX44Gm44GE44KL44Kv44Op44K544Gn44GZ44CCXHJcbiAqIHBoaW5hLmpzIOOBjOaPkOS+m+OBmeOCi+OCr+ODqeOCueOBruWkmuOBj+OBr+OBk+OBriBFdmVudERpc3BhdGNoZXIg44Kv44Op44K544Gu5a2Q5a2r44Go44Gq44Gj44Gm44GE44KL44Gf44KB44CBXHJcbiAqIOOBu+OBqOOCk+OBqeOBruOCquODluOCuOOCp+OCr+ODiOOBp+WuueaYk+OBq+OCpOODmeODs+ODiOOCkuaJseOBhuOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gKlxyXG4gKiAjIOWwkeOBl+iqrOaYjlxyXG4gKiB0aGlzLm9ueHh4ID0gZnVuY3Rpb24oKXt9OyDjgafjgoLjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLoqK3lrprjgafjgY3jgovjgYzjgIHjgYLjgb7jgormjqjlpajjgZfjgarjgYTjgIJcclxuICog5ZG844Gz5Ye644GV44KM44KL6aCG5bqP44Gv44CB44G+44GaIHRoaXMub254eHh4IOOBjOWRvOOBs+WHuuOBleOCjOOAgeOBguOBqOOBryBvbigpIOOBp+eZu+mMsuOBl+OBn+mghueVquOAglxyXG4gKiBAbWVtYmVyb2YgcGhpbmFcclxuICovXHJcbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG9uXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCpOODmeODs+ODiOODquOCueODiuOCkueZu+mMsuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog77yR44Gk44Gu44Kk44OZ44Oz44OI44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44Gv44GE44GP44Gk44Gn44KC55m76Yyy44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDmqJnmupbjga7jgqTjg5njg7Pjg4jjgpLmpJznn6XjgZnjgovjgavjga/jgIHjgqrjg5bjgrjjgqfjgq/jg4jjga4ge0BsaW5rIE9iamVjdDJEI2ludGVyYWN0aXZlfSDjg5fjg63jg5Hjg4bjgqPjgYwgdHJ1ZSDjgafjgYLjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcclxuICAgKiB7QGxpbmsgT2JqZWN0MkQjaW50ZXJhY3RpdmV9IOODl+ODreODkeODhuOCo+OCkuioreWumuOBmeOCi+OBq+OBryB7QGxpbmsgT2JqZWN0MkQjc2V0SW50ZXJhY3RpdmV9IOODoeOCveODg+ODieOCkuWRvOOBs+WHuuOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICog44G+44Gf44CBe0BsaW5rICNmbGFyZX0g44KEIHtAbGluayAjZmlyZX0g44Gr44KI44Gj44Gm5a6a576p44GX44Gf44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44KC55m76Yyy44GZ44KL44GT44Go44GMXHJcbiAgICog44Gn44GN44G+44GZ44CC44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu44Kk44OZ44Oz44OI44Oq44K544OK44GvIHtAbGluayBPYmplY3QyRCNpbnRlcmFjdGl2ZX0g44OX44Ot44OR44OG44Kj44Gr44KI44KJ44Ga5ZG844Gz5Ye644GV44KM44G+44GZ44CCXHJcbiAgICog44Gq44GK44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu44Kq44OW44K444Kn44Kv44OI44GvIEV2ZW50IOOCquODluOCuOOCp+OCr+ODiOOBqOOBr+eVsOOBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjUmVmZXJlbmNlXHJcbiAgICog5qiZ5rqW44Gu44Kk44OZ44Oz44OI44Gu56iu6aGe44Gv5Lul5LiL44KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogLSBbRXZlbnQgcmVmZXJlbmNlIHwgTUROXSggaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzIClcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHZhciBzaGFwZSA9IENpcmNsZVNoYXBlKCkuYWRkQ2hpbGRUbyh0aGlzKS5zZXRJbnRlcmFjdGl2ZSh0cnVlKS5zZXRQb3NpdGlvbig1MCwgNTApO1xyXG4gICAqICAgICBzaGFwZS5vbihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICogICAgICAgdGhpcy5jb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAqICAgICB9KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiuOBqOOBquOCi+mWouaVsFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lci5ldmVudCBFdmVudCDjgqrjg5bjgrjjgqfjgq/jg4jjgIHjgb7jgZ/jga/jgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBvbih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBvZmZcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44KS5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDjgYLjgovnqK7poZ7jga7jgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLjgZnjgbnjgabliYrpmaTjgZnjgovjgavjga8ge0BsaW5rICNjbGVhcn0g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDjgqTjg5njg7Pjg4jjg6rjgrnjg4rplqLmlbBcclxuICAgKi9cclxuICBvZmYodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XHJcbiAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XHJcbiAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmaXJlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkuihqOOBmeOCquODluOCuOOCp+OCr+ODiOOCkuaMh+WumuOBl+OBpuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkueZuueBq+OBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOCkuihqOOBmeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudC50eXBlIOOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBruWQjeWJjVxyXG4gICAqL1xyXG4gICBmaXJlKGUpIHtcclxuICAgIGUudGFyZ2V0ID0gdGhpcztcclxuICAgIHZhciBvbGRFdmVudE5hbWUgPSAnb24nICsgZS50eXBlO1xyXG4gICAgaWYgKHRoaXNbb2xkRXZlbnROYW1lXSkgdGhpc1tvbGRFdmVudE5hbWVdKGUpO1xyXG5cclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXTtcclxuICAgIGlmIChsaXN0ZW5lcnMpIHtcclxuICAgICAgLy8gdmFyIHRlbXAgPSBsaXN0ZW5lcnMuY2xvbmUoKTtcclxuICAgICAgdmFyIHRlbXAgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XHJcbiAgICAgIGZvciAodmFyIGk9MCxsZW49dGVtcC5sZW5ndGg7IGk8bGVuOyArK2kpIHtcclxuICAgICAgICAgIHRlbXBbaV0uY2FsbCh0aGlzLCBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmbGFyZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgqTjg5njg7Pjg4jlkI3jgpLmjIflrprjgZfjgabjgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjgpLnmbrngavjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIHBhcmFtIOW8leaVsOOCkuaMh+WumuOBmeOCi+OBk+OBqOOBq+OCiOOCiuOCq+OCueOCv+ODoOOCpOODmeODs+ODiOOBq+S7u+aEj+OBruODl+ODreODkeODhuOCo+OCkuioreWumuOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqIOOBk+OCjOOBq+OCiOOCiuOAgeWRvOOBs+WHuuOBl+WFg+OBjOOCpOODmeODs+ODiOODquOCueODiuOBq+S7u+aEj+OBruWApOOCkua4oeOBmeOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqIO+8iOOBn+OBoOOBlyB0YXJnZXQg44OX44Ot44OR44OG44Kj44Gr44Gv5b+F44Ga6Ieq5YiG6Ieq6Lqr44GM5qC857SN44GV44KM44G+44GZ44CC77yJXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICAvL1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gu5ZCN5YmNXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbV0g44Kr44K544K/44Og44Kk44OZ44Oz44OI44Gr44OX44Ot44OR44OG44Kj44KS6Kit5a6a44GZ44KL44Gf44KB44Gu44Kq44OW44K444Kn44Kv44OIXHJcbiAgKi9cclxuICBmbGFyZSh0eXBlLCBwYXJhbSkge1xyXG4gICAgdmFyIGUgPSB7dHlwZTp0eXBlfTtcclxuICAgIGlmIChwYXJhbSkge1xyXG4gICAgICBmb3JJbi5jYWxsKHBhcmFtLCBmdW5jdGlvbihrZXksIHZhbCkge1xyXG4gICAgICAvLyBwYXJhbS5mb3JJbihmdW5jdGlvbihrZXksIHZhbCkge1xyXG4gICAgICAgIGVba2V5XSA9IHZhbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcmUoZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG9uZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDkuIDluqbjgaDjgZHlrp/ooYzjgZXjgozjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLnmbvpjLLjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOaMh+WumuOBl+OBn+OCpOODmeODs+ODiOODquOCueODiuOBjOS4gOW6puWun+ihjOOBleOCjOOCi+OBqOOAgeOBneOBruOCpOODmeODs+ODiOODquOCueODiuOBr+WJiumZpOOBleOCjOOBvuOBmeOAguOBneOCjOS7peWkluOBruaMmeWLleOBryB7QGxpbmsgI29ufSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOOCpOODmeODs+ODiOOBrueorumhnlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOOCpOODmeODs+ODiOODquOCueODiuOBqOOBquOCi+mWouaVsFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lci5ldmVudCBFdmVudCDjgqrjg5bjgrjjgqfjgq/jg4jjgIHjgb7jgZ/jga/jgqvjgrnjgr/jg6DjgqTjg5njg7Pjg4jjga7jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBvbmUodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gbGlzdGVuZXIuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuICAgICAgc2VsZi5vZmYodHlwZSwgZnVuYyk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub24odHlwZSwgZnVuYyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGhhc1xyXG4gICAqIOOCpOODmeODs+ODiOODquOCueODiuOBjOeZu+mMsuOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuiqv+OBueOBvuOBmeOAglxyXG4gICAqXHJcbiAgICog5oyH5a6a44GX44Gf44Kk44OZ44Oz44OI44Gu56iu6aGe44Gr5a++44GZ44KL44Kk44OZ44Oz44OI44Oq44K544OK44GM55m76Yyy44GV44KM44Gm44GE44KL5aC05ZCI44GvIHRydWXjgIHjgZ3jgYbjgafjgarjgYTloLTlkIjjga8gZmFsc2Ug44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmjIflrprjgZfjgZ/jgqTjg5njg7Pjg4jjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjgYznmbvpjLLjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBoYXModHlwZSkge1xyXG4gICAgcmV0dXJuICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ubGVuZ3RoICE9PSAwKSB8fCAhIXRoaXNbJ29uJyArIHR5cGVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjbGVhclxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDjgYLjgovnqK7poZ7jga7jgqTjg5njg7Pjg4jjgavlr77jgZnjgovjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLjgZnjgbnjgabliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOeJueWumuOBruOCpOODmeODs+ODiOODquOCueODiuOBruOBv+OCkuWJiumZpOOBmeOCi+OBq+OBryB7QGxpbmsgI29mZn0g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDjgqTjg5njg7Pjg4jjga7nqK7poZ5cclxuICAgKi9cclxuICBjbGVhcih0eXBlKSB7XHJcbiAgICB2YXIgb2xkRXZlbnROYW1lID0gJ29uJyArIHR5cGU7XHJcbiAgICBpZiAodGhpc1tvbGRFdmVudE5hbWVdKSBkZWxldGUgdGhpc1tvbGRFdmVudE5hbWVdO1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGFkZEV2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNvbn0g44Gu44Ko44Kk44Oq44Ki44K544Gn44GZ44CCXHJcbiAqL1xyXG4vKipcclxuICogQG1ldGhvZCByZW1vdmVFdmVudExpc3RlbmVyXHJcbiAqIHtAbGluayAjb2ZmfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGNsZWFyRXZlbnRMaXN0ZW5lclxyXG4gKiB7QGxpbmsgI2NsZWFyfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGhhc0V2ZW50TGlzdGVuZXJcclxuICoge0BsaW5rICNoYXN9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudFxyXG4gKiB7QGxpbmsgI2ZpcmV9IOOBruOCqOOCpOODquOCouOCueOBp+OBmeOAglxyXG4gKi9cclxuLyoqXHJcbiAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudEJ5VHlwZVxyXG4gKiB7QGxpbmsgI2ZsYXJlfSDjga7jgqjjgqTjg6rjgqLjgrnjgafjgZnjgIJcclxuICovXHJcbmNvbnN0IG1ldGhvZE1hcCA9IHtcclxuICBhZGRFdmVudExpc3RlbmVyOiAnb24nLFxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6ICdvZmYnLFxyXG4gIGNsZWFyRXZlbnRMaXN0ZW5lcjogJ2NsZWFyJyxcclxuICBoYXNFdmVudExpc3RlbmVyOiAnaGFzJyxcclxuICBkaXNwYXRjaEV2ZW50OiAnZmlyZScsXHJcbiAgZGlzcGF0Y2hFdmVudEJ5VHlwZTogJ2ZsYXJlJyxcclxufTtcclxuLy8gbWV0aG9kTWFwLmZvckluKGZ1bmN0aW9uKG9sZCwgbmFtZSkge1xyXG5mb3JJbi5jYWxsKG1ldGhvZE1hcCwgZnVuY3Rpb24ob2xkLCBuYW1lKSB7XHJcbiAgLy8gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS4kbWV0aG9kKG9sZCwgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlW25hbWVdKTtcclxuICAkbWV0aG9kLmNhbGwoRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSwgb2xkLCBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlW25hbWVdKTtcclxufSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5GbG93XHJcbiAqIHRpY2sgbWFuYWdlbWVudCBjbGFzc1xyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgRmxvdyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGZ1bmMsIHdhaXQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0dXMgPSAncGVuZGluZyc7XHJcbiAgICB0aGlzLnJlc3VsdFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuX3F1ZXVlID0gW107XHJcbiAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuICAgIGlmICh3YWl0ICE9PSB0cnVlKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLnJlc29sdmUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcclxuICAgICAgICBzZWxmLnN0YXR1cyA9ICdyZXNvbHZlZCc7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLnJlamVjdC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHNlbGYuc3RhdHVzID0gJ3JlamVjdGVkJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuZnVuYyhyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDmiJDlip9cclxuICAgKi9cclxuICByZXNvbHZlKGFyZykge1xyXG4gICAgdGhpcy5yZXN1bHRWYWx1ZSA9IGFyZztcclxuXHJcbiAgICAvLyDjgq3jg6Xjg7zjgavnqY3jgb7jgozjgZ/plqLmlbDjgpLlrp/ooYxcclxuICAgIHRoaXMuX3F1ZXVlLmZvckVhY2goZnVuY3Rpb24oZnVuYykge1xyXG4gICAgICBmdW5jKHRoaXMucmVzdWx0VmFsdWUpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICAvLyB0aGlzLl9xdWV1ZS5jbGVhcigpO1xyXG4gICAgY2xlYXIuY2FsbCh0aGlzLl9xdWV1ZSk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOWkseaVl1xyXG4gICAqL1xyXG4gIHJlamVjdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOmdnuWQjOacn+e1guS6huaZguOBruWHpueQhuOCkueZu+mMslxyXG4gICAqL1xyXG4gIHRoZW4oZnVuYykge1xyXG4gICAgLy8g5oiQ5Yqf44K544OG44O844K/44K544Gg44Gj44Gf5aC05ZCI44Gv5Y2z5a6f6KGMXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdyZXNvbHZlZCcpIHtcclxuICAgICAgdmFyIHZhbHVlID0gZnVuYyh0aGlzLnJlc3VsdFZhbHVlKTtcclxuICAgICAgcmV0dXJuIEZsb3cucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGZsb3cgPSBuZXcgRmxvdyhmdW5jdGlvbihyZXNvbHZlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuX3F1ZXVlLnB1c2goZnVuY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdFZhbHVlID0gZnVuYyhhcmcpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0VmFsdWUgaW5zdGFuY2VvZiBGbG93KSB7XHJcbiAgICAgICAgICByZXN1bHRWYWx1ZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZsb3cucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBmbG93LnJlc29sdmUocmVzdWx0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZmxvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXNvbHZlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGbG93KSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgZmxvdyA9IG5ldyBGbG93KGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmbG93O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFsbChmbG93cykge1xyXG4gICAgcmV0dXJuIG5ldyBGbG93KGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgIHZhciBhcmdzID0gW107XHJcblxyXG4gICAgICBmbG93cy5mb3JFYWNoKGZ1bmN0aW9uKGZsb3cpIHtcclxuICAgICAgICBmbG93LnRoZW4oZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgKytjb3VudDtcclxuICAgICAgICAgIGFyZ3MucHVzaChkKTtcclxuXHJcbiAgICAgICAgICBpZiAoY291bnQgPj0gZmxvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuVGlja2VyXHJcbiAqIHRpY2sgbWFuYWdlbWVudCBjbGFzc1xyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgVGlja2VyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLy8gLyoqIOe1jOmBjuODleODrOODvOODoOaVsCAqL1xyXG4gIC8vIGZyYW1lID0gbnVsbFxyXG5cclxuICAvLyAvKiogMeODleODrOODvOODoOOBrue1jOmBjuaZgumWkyAqL1xyXG4gIC8vIGRlbHRhVGltZSA9IG51bGxcclxuICBcclxuICAvLyAvKiog5YWo5L2T44Gu57WM6YGO5pmC6ZaTICovXHJcbiAgLy8gZWxhcHNlZFRpbWUgPSBudWxsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmZwcyA9IDMwO1xyXG4gICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICB0aGlzLmRlbHRhVGltZSA9IDA7XHJcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcclxuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIHRoaXMucnVubmVyID0gVGlja2VyLnJ1bm5lcjtcclxuICB9XHJcblxyXG4gIHRpY2soZnVuYykge1xyXG4gICAgdGhpcy5vbigndGljaycsIGZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgdW50aWNrKGZ1bmMpIHtcclxuICAgIHRoaXMub2ZmKCd0aWNrJywgZnVuYyk7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB2YXIgbm93ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIC8vIDHjg5Xjg6zjg7zjg6DjgavmjpvjgYvjgaPjgZ/mmYLplpNcclxuICAgIHRoaXMuZGVsdGFUaW1lID0gbm93IC0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgIC8vIOWFqOS9k+OBrue1jOmBjuaZgumWk1xyXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG5vdyAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuICAgIHZhciBzdGFydCA9IHRoaXMuY3VycmVudFRpbWUgPSBub3c7XHJcbiAgICB0aGlzLmZsYXJlKCd0aWNrJyk7XHJcbiAgICB2YXIgZW5kID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcbiAgICAvLyDjg5Xjg6zjg7zjg6DjgpLmm7TmlrBcclxuICAgIHRoaXMuZnJhbWUgKz0gMTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgZWxhcHNlZCB0aW1lXHJcbiAgICB2YXIgZWxhcHNlZCA9IGVuZC1zdGFydDtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgbmV4dCB3YWl0aW5nIHRpbWVcclxuICAgIHZhciBkZWxheSA9IE1hdGgubWF4KHRoaXMuZnJhbWVUaW1lLWVsYXBzZWQsIDApO1xyXG5cclxuICAgIHJldHVybiBkZWxheTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgIHZhciBmbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoc2VsZi5pc1BsYXlpbmcpIHtcclxuICAgICAgICB2YXIgZGVsYXkgPSBzZWxmLnJ1bigpO1xyXG4gICAgICAgIHNlbGYucnVubmVyKGZuLCBkZWxheSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmbigpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmV3aW5kKCkge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICBnZXQgZnBzKCkgeyByZXR1cm4gdGhpcy5fZnBzOyB9XHJcbiAgc2V0IGZwcyh2KSB7XHJcbiAgICB0aGlzLl9mcHMgPSB2O1xyXG4gICAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwL3RoaXMuX2ZwcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydW5uZXIocnVuLCBkZWxheSkge1xyXG4gICAgc2V0VGltZW91dChydW4sIGRlbGF5KTtcclxuICB9XHJcbiAgXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlJhbmRvbVxyXG4gKiAjIOS5seaVsOOCkuaJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxyXG4gKiDkubHmlbDjgpLmibHjgYbjgZ/jgoHjga7jg6Hjgr3jg4Pjg4njgoTjg5fjg63jg5Hjg4bjgqPjgpLlrprnvqnjgZfjgabjgYTjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFJhbmRvbSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbc2VlZCA9IDFdXHJcbiAgICog5Lmx5pWw44Gu44K344O844OJ44Gn44GZ44CCXHJcbiAgICovXHJcbiAgLy8gc2VlZCA9IDFcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CC5byV5pWw44GnIHtAbGluayAjc2VlZH0g44KS6Kit5a6a44Gn44GN44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzZWVkID0gKERhdGUubm93KCkpIHx8IDFdIOOCt+ODvOODiVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNlZWQpIHtcclxuICAgIHRoaXMuc2VlZCA9IHNlZWQgfHwgKERhdGUubm93KCkpIHx8IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIDB+MeOBruS5seaVsOOCkui/lOOBl+OBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMH4xIOOBruS5seaVsFxyXG4gICAqL1xyXG4gIHJhbmRvbSgpIHtcclxuICAgIHZhciBzZWVkID0gdGhpcy5zZWVkO1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA8PCAxMyk7XHJcbiAgICBzZWVkID0gc2VlZCBeIChzZWVkID4+PiAxNyk7XHJcbiAgICBzZWVkID0gKHNlZWQgXiAoc2VlZCA8PCA1KSk7XHJcblxyXG4gICAgdGhpcy5zZWVkID0gc2VlZDtcclxuXHJcbiAgICByZXR1cm4gKHNlZWQgPj4+IDApIC8gcGhpbmEudXRpbC5SYW5kb20uTUFYO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kaW50XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCkXHJcbiAgICovXHJcbiAgcmFuZGludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMucmFuZG9tKCkqKG1heC1taW4rMSkgKSArIG1pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGZsb2F0XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pWw5YCkXHJcbiAgICovXHJcbiAgcmFuZGZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5kb20oKSoobWF4LW1pbikrbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kYm9vbFxyXG4gICAqIOODqeODs+ODgOODoOOBquecn+WBveWApOOCkui/lOOBl+OBvuOBmeOAguW8leaVsOOBp+eZvuWIhueOh+OCkuaMh+WumuOBp+OBjeOBvuOBmeOAguWun+ihjOOBmeOCi+OBqCB7QGxpbmsgI3NlZWR9IOOBr+WkieOCj+OBo+OBpuOBl+OBvuOBhOOBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcGVyZWNlbnQgPSA1MF0g55yf44Gr44Gq44KL55m+5YiG546HXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g44Op44Oz44OA44Og44Gq55yf5YG95YCkXHJcbiAgICovXHJcbiAgcmFuZGJvb2wocGVyY2VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKCkgPCAocGVyY2VudCA9PT0gdW5kZWZpbmVkID8gNTAgOiBwZXJjZW50KSAvIDEwMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGFycmF5XHJcbiAgICog5Lu75oSP44Gu56+E5Zuy44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS5qC857SN44GX44Gf5Lu75oSP44Gu6ZW344GV44Gu6YWN5YiX44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsZW4gPSAxMDBdIOmFjeWIl+OBrumVt+OBlVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbWluID0gMF0g56+E5Zuy44Gu5pyA5bCP5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttYXggPSAxMDBdIOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCk44Gu5YWl44Gj44Gf6YWN5YiXXHJcbiAgICovXHJcbiAgcmFuZGFycmF5KGxlbiwgbWluLCBtYXgpIHtcclxuICAgIGxlbiA9IGxlbiB8fCAxMDA7XHJcbiAgICBtaW4gPSBtaW4gfHwgMDtcclxuICAgIG1heCA9IG1heCB8fCAxMDA7XHJcblxyXG4gICAgcmV0dXJuIChsZW4pLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmFuZGludChtaW4sIG1heCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWVkKCkgeyByZXR1cm4gdGhpcy5fc2VlZDsgfVxyXG4gIHNldCBzZWVkKHYpIHsgdGhpcy5fc2VlZCA9ICh2ID4+PiAwKSB8fCAxOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0U2VlZCBcclxuICAgKiB7QGxpbmsgI3NlZWR9IOOBruWApOOCkuWPluW+l+OBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44K344O844OJXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRTZWVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0U2VlZFxyXG4gICAqIHtAbGluayAjc2VlZH0g44Gu5YCk44KS44K744OD44OI44GX44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzZWVkID0gMV0g44K344O844OJXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzdGF0aWMgc2V0U2VlZChzZWVkKSB7XHJcbiAgICB0aGlzLnNlZWQgPSAoc2VlZCA+Pj4gMCkgfHwgMTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kb21cclxuICAgKiAwfjHjga7kubHmlbDjgpLov5TjgZfjgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kb219IOOBqOWQjOOBmOOBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMH4xIOOBruS5seaVsFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZG9tKCkge1xyXG4gICAgdGhpcy5zZWVkID0gdGhpcy54b3IzMih0aGlzLnNlZWQpO1xyXG4gICAgcmV0dXJuICh0aGlzLnNlZWQgPj4+IDApIC8gcGhpbmEudXRpbC5SYW5kb20uTUFYO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByYW5kaW50XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGludH0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbiDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IOevhOWbsuOBruacgOWkp+WApFxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44Op44Oz44OA44Og44Gq5pW05pWw5YCkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyByYW5kaW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gcGhpbmEuZ2xvYmFsLk1hdGguZmxvb3IoIHRoaXMucmFuZG9tKCkqKG1heC1taW4rMSkgKSArIG1pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGZsb2F0XHJcbiAgICog5oyH5a6a44GV44KM44Gf56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pWw5YCk44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGZsb2F0fSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXgg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbDlgKRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRmbG9hdChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKCkqKG1heC1taW4pK21pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGJvb2xcclxuICAgKiDjg6njg7Pjg4Djg6DjgarnnJ/lgb3lgKTjgpLov5TjgZfjgb7jgZnjgILlvJXmlbDjgafnmb7liIbnjofjgpLmjIflrprjgafjgY3jgb7jgZnjgILlrp/ooYzjgZnjgovjgagge0BsaW5rICNzZWVkfSDjga/lpInjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcclxuICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjgr3jg4Pjg4njga4ge0BsaW5rICNyYW5kYm9vbH0g44Go5ZCM44GY44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwZXJlY2VudCA9IDUwXSDnnJ/jgavjgarjgovnmb7liIbnjodcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeODs+ODgOODoOOBquecn+WBveWApFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgcmFuZGJvb2wocGVyZWNlbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJhbmRpbnQoMCwgOTkpIDwgKHBlcmVjZW50IHx8IDUwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZGFycmF5XHJcbiAgICog5Lu75oSP44Gu56+E5Zuy44Gn44Op44Oz44OA44Og44Gq5pW05pWw5YCk44KS5qC857SN44GX44Gf5Lu75oSP44Gu6ZW344GV44Gu6YWN5YiX44KS6L+U44GX44G+44GZ44CC5a6f6KGM44GZ44KL44GoIHtAbGluayAjc2VlZH0g44Gv5aSJ44KP44Gj44Gm44GX44G+44GE44G+44GZ44CCXHJcbiAgICog44Kk44Oz44K544K/44Oz44K544Oh44K944OD44OJ44GuIHtAbGluayAjcmFuZGFycmF5fSDjgajlkIzjgZjjgafjgZnjgIJcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbiA9IDEwMF0g6YWN5YiX44Gu6ZW344GVXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW4gPSAwXSDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heCA9IDEwMF0g56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg6njg7Pjg4Djg6DjgarmlbTmlbDlgKTjga7lhaXjgaPjgZ/phY3liJdcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmRhcnJheShsZW4sIG1pbiwgbWF4KSB7XHJcbiAgICBsZW4gPSBsZW4gfHwgMTAwO1xyXG4gICAgbWluID0gbWluIHx8IDA7XHJcbiAgICBtYXggPSBtYXggfHwgMTAwO1xyXG5cclxuICAgIHJldHVybiAobGVuKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJhbmRpbnQobWluLCBtYXgpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB4b3IzMlxyXG4gICAqIHhvcnNoaWZ0IOOCkueUqOOBhOOBpueWkeS8vOS5seaVsOWIl+OCkueUn+aIkOOBl+OBvuOBmeOAglxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzZWVkXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDnlpHkvLzkubHmlbDliJdcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIHhvcjMyKHNlZWQpIHtcclxuICAgIHNlZWQgPSBzZWVkIF4gKHNlZWQgPDwgMTMpO1xyXG4gICAgc2VlZCA9IHNlZWQgXiAoc2VlZCA+Pj4gMTcpO1xyXG4gICAgc2VlZCA9IChzZWVkIF4gKHNlZWQgPDwgNSkpO1xyXG5cclxuICAgIHJldHVybiBzZWVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB1dWlkXHJcbiAgICogdXVpZCDjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHV1aWRcclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcclxuICBzdGF0aWMgdXVpZCgpIHtcclxuICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBpZihwaGluYS5nbG9iYWwucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHBoaW5hLmdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgIH1cclxuICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcbiAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XHJcbiAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xyXG4gICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXVpZDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IE1BWFxyXG4gKiDlhoXpg6jnmoTjgavkvb/nlKjjgZXjgozjgovlrprmlbDjgafjgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblJhbmRvbS5NQVggPSA0Mjk0OTY3Mjk1O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbc2VlZCA9IChEYXRlLm5vdygpKV0g44K344O844OJXHJcbiAqIHN0YXRpYyDjg6Hjgr3jg4Pjg4njga7kubHmlbDjga7jgrfjg7zjg4njgafjgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblJhbmRvbS5zZWVkID0gKERhdGUubm93KCkpO1xyXG5cclxuXHJcbi8vIHByb3RvdHlwZeaLoeW8teOBr+OBl+OBquOBhFxyXG4vLyBNYXRoLiRtZXRob2QoXCJyYW5kaW50XCIsIGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbi8vICAgcmV0dXJuIHBoaW5hLnV0aWwuUmFuZG9tLnJhbmRpbnQobWluLCBtYXgpO1xyXG4vLyB9KTtcclxuXHJcbi8vIE1hdGguJG1ldGhvZChcInJhbmRmbG9hdFwiLCBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4vLyAgIHJldHVybiBwaGluYS51dGlsLlJhbmRvbS5yYW5kZmxvYXQobWluLCBtYXgpO1xyXG4vLyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlN1cHBvcnRcclxuICogXHJcbiAqL1xyXG5jbGFzcyBTdXBwb3J0IHt9U3VwcG9ydC5jYW52YXMgPSAhIXBoaW5hJDEuZ2xvYmFsLkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuU3VwcG9ydC53ZWJHTCA9IChmdW5jdGlvbigpIHtcclxuICByZXR1cm4gISFwaGluYSQxLmdsb2JhbC5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgJiYgISFkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCd3ZWJnbCcpO1xyXG59KSgpO1xyXG5TdXBwb3J0LndlYkF1ZGlvID0gISFwaGluYSQxLmdsb2JhbC5BdWRpb0NvbnRleHQgfHwgISFwaGluYSQxLmdsb2JhbC53ZWJraXRBdWRpb0NvbnRleHQgfHwgISFwaGluYSQxLmdsb2JhbC5tb3pBdWRpb0NvbnRleHQ7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudXRpbC5HcmlkXHJcbiAqL1xyXG5jbGFzcyBHcmlkIHtcclxuXHJcbiAgLy8gLyoqIOW5hSAqL1xyXG4gIC8vIHdpZHRoOiA2NDAsXHJcbiAgLy8gLyoqIOWIl+aVsCAqL1xyXG4gIC8vIGNvbHVtbnM6IDEyLFxyXG4gIC8vIC8qKiDjg6vjg7zjg5cgKi9cclxuICAvLyBsb29wOiBmYWxzZSxcclxuICAvLyAvKiog44Kq44OV44K744OD44OI5YCkICovXHJcbiAgLy8gb2Zmc2V0OiAwLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB2YXIgcGFyYW0gPSBhcmd1bWVudHNbMF07XHJcbiAgICAgIHZhciB3aWR0aCA9IHBhcmFtLndpZHRoIHx8IDY0MDtcclxuICAgICAgdmFyIGNvbHVtbnMgPSBwYXJhbS5jb2x1bW5zIHx8IDEyO1xyXG4gICAgICB2YXIgbG9vcCA9IHBhcmFtLmxvb3AgfHwgZmFsc2U7XHJcbiAgICAgIHZhciBvZmZzZXQgPSBwYXJhbS5vZmZzZXQgfHwgMDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgd2lkdGggICA9IGFyZ3VtZW50c1swXSB8fCA2NDA7XHJcbiAgICAgIHZhciBjb2x1bW5zID0gYXJndW1lbnRzWzFdIHx8IDEyO1xyXG4gICAgICB2YXIgbG9vcCAgICA9IGFyZ3VtZW50c1syXSB8fCBmYWxzZTtcclxuICAgICAgdmFyIG9mZnNldCA9IGFyZ3VtZW50c1szXSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB0aGlzLnVuaXRXaWR0aCA9IHRoaXMud2lkdGgvdGhpcy5jb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgLy8g44K544OR44Oz5oyH5a6a44Gn5YCk44KS5Y+W5b6XKOiyoOaVsOOCgm9rKVxyXG4gIHNwYW4oaW5kZXgpIHtcclxuICAgIGlmICh0aGlzLmxvb3ApIHtcclxuICAgICAgaW5kZXggKz0gdGhpcy5jb2x1bW5zO1xyXG4gICAgICBpbmRleCAlPSB0aGlzLmNvbHVtbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bml0V2lkdGggKiBpbmRleCArIHRoaXMub2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICB1bml0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5pdFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgY2VudGVyKG9mZnNldCkge1xyXG4gICAgdmFyIGluZGV4ID0gb2Zmc2V0IHx8IDA7XHJcbiAgICByZXR1cm4gKHRoaXMud2lkdGgvMikgKyAodGhpcy51bml0V2lkdGggKiBpbmRleCk7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5NYXRoXHJcbiAqICMg5ouh5by144GX44GfIE1hdGgg44Kv44Op44K5XHJcbiAqIOaVsOWtpueahOOBquWHpueQhuOCkuaJseOBhiBNYXRoIOOCr+ODqeOCueOCkuaLoeW8teOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKiBcclxuICog5YWo44Gmc3RhdGlj44Oh44Oz44OQ44O844Gn44GZ44CCXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICogQG1ldGhvZCBjbGFtcFxyXG4gKiDmjIflrprjgZfjgZ/lgKTjgpLmjIflrprjgZfjgZ/nr4Tlm7Ljgavlj47jgoHjgZ/ntZDmnpzjgpLov5TjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIE1hdGguY2xhbXAoMTIwLCAwLCA2NDApOyAvLyA9PiAxMjBcclxuICogICAgIE1hdGguY2xhbXAoOTgwLCAwLCA2NDApOyAvLyA9PiA2NDBcclxuICogICAgIE1hdGguY2xhbXAoLTgwLCAwLCA2NDApOyAvLyA9PiAwXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSDlgKRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbiAg56+E5Zuy44Gu5LiL6ZmQXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggIOevhOWbsuOBruS4iumZkFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IOS4uOOCgeOBn+e1kOaenOOBruWApFxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuICh2YWx1ZSA8IG1pbikgPyBtaW4gOiAoICh2YWx1ZSA+IG1heCkgPyBtYXggOiB2YWx1ZSApO1xyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IERFR19UT19SQURcclxuICog5bqm44KS44Op44K444Ki44Oz44Gr5aSJ5o+b44GZ44KL44Gf44KB44Gu5a6a5pWw44Gn44GZ44CCXHJcbiAqL1xyXG52YXIgREVHX1RPX1JBRCA9IE1hdGguUEkvMTgwO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuVHdlZW5cclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICogXHJcbiAqL1xyXG5jbGFzcyBUd2VlbiBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5iZWdpblByb3BzID0gYmVnaW5Qcm9wcztcclxuICAgIHRoaXMuZmluaXNoUHJvcHMgPSBmaW5pc2hQcm9wcztcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxMDAwO1xyXG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmc7XHJcblxyXG4gICAgLy8gc2V0dXBcclxuICAgIHRoaXMuY2hhbmdlUHJvcHMgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBiZWdpblByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQcm9wc1trZXldID0gZmluaXNoUHJvcHNba2V5XSAtIGJlZ2luUHJvcHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvKHRhcmdldCwgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHZhciBiZWdpblByb3BzID0ge307XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGZpbmlzaFByb3BzKSB7XHJcbiAgICAgIGJlZ2luUHJvcHNba2V5XSA9IHRhcmdldFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZnJvbVRvKHRhcmdldCwgYmVnaW5Qcm9wcywgZmluaXNoUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZnJvbSh0YXJnZXQsIGJlZ2luUHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgICAgdmFyIGZpbmlzaFByb3BzID0ge307XHJcblxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYmVnaW5Qcm9wcykge1xyXG4gICAgICAgIGZpbmlzaFByb3BzW2tleV0gPSB0YXJnZXRba2V5XTtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IGJlZ2luUHJvcHNba2V5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5mcm9tVG8odGFyZ2V0LCBiZWdpblByb3BzLCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZyk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGJ5KHRhcmdldCwgcHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHZhciBiZWdpblByb3BzID0ge307XHJcbiAgICB2YXIgZmluaXNoUHJvcHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcclxuICAgICAgYmVnaW5Qcm9wc1trZXldID0gdGFyZ2V0W2tleV07XHJcbiAgICAgIGZpbmlzaFByb3BzW2tleV0gPSB0YXJnZXRba2V5XSArIHByb3BzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mcm9tVG8odGFyZ2V0LCBiZWdpblByb3BzLCBmaW5pc2hQcm9wcywgZHVyYXRpb24sIGVhc2luZyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB5b3lvKCkge1xyXG4gICAgdmFyIHRlbXAgPSB0aGlzLmJlZ2luUHJvcHM7XHJcbiAgICB0aGlzLmJlZ2luUHJvcHMgPSB0aGlzLmZpbmlzaFByb3BzO1xyXG4gICAgdGhpcy5maW5pc2hQcm9wcyA9IHRlbXA7XHJcbiAgICAvLyB0aGlzLmNoYW5nZVByb3BzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICBmb3JJbi5jYWxsKHRoaXMuY2hhbmdlUHJvcHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlUHJvcHNba2V5XSA9IC12YWx1ZTtcclxuICAgICAgdGhpcy50YXJnZXRba2V5XSA9IHRoaXMuYmVnaW5Qcm9wc1trZXldO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICAvLyBUT0RPOiBlYXNpbmcg44KC5Y+N6Lui44GV44Gb44KLXHJcbiAgICAvLyB0aGlzLmVhc2luZyA9IGVhc2luZztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2Fpbih0aW1lKSB7XHJcbiAgICB0aGlzLnNlZWsodGhpcy50aW1lICsgdGltZSk7XHJcbiAgfVxyXG5cclxuICBmb3J3YXJkKHRpbWUpIHtcclxuICAgIHRoaXMuc2Vlayh0aGlzLnRpbWUgKyB0aW1lKTtcclxuICB9XHJcblxyXG4gIGJhY2t3YXJkKHRpbWUpIHtcclxuICAgIHRoaXMuc2Vlayh0aGlzLnRpbWUgLSB0aW1lKTtcclxuICB9XHJcblxyXG4gIHNlZWsodGltZSkge1xyXG4gICAgLy8gdGhpcy50aW1lID0gTWF0aC5jbGFtcCh0aW1lLCAwLCB0aGlzLmR1cmF0aW9uKTtcclxuICAgIHRoaXMudGltZSA9IGNsYW1wKHRpbWUsIDAsIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICAgIC8vIHRoaXMuYmVnaW5Qcm9wcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICBmb3JJbi5jYWxsKHRoaXMuYmVnaW5Qcm9wcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgdiA9IHRoaXMuZWFzaW5nKHRoaXMudGltZSwgdmFsdWUsIHRoaXMuY2hhbmdlUHJvcHNba2V5XSwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICAgIHRoaXMudGFyZ2V0W2tleV0gPSB2O1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgZWFzaW5nKCkgeyByZXR1cm4gdGhpcy5fZWFzaW5nOyB9XHJcbiAgc2V0IGVhc2luZyh2KSB7XHJcbiAgICB0aGlzLl9lYXNpbmcgPSBUd2Vlbi5FQVNJTkdbdl0gfHwgVHdlZW4uRUFTSU5HLmRlZmF1bHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICog44Kk44O844K444Oz44KwXHJcbiAqICMjIyBSZWZlcmVuY2VcclxuICogLSA8aHR0cDovL2NvZGVyZXBvcy5vcmcvc2hhcmUvd2lraS9KU1R3ZWVuZXI+XHJcbiAqIC0gPGh0dHA6Ly9jb2RlcmVwb3Mub3JnL3NoYXJlL2Jyb3dzZXIvbGFuZy9qYXZhc2NyaXB0L2pzdHdlZW5lci90cnVuay9zcmMvSlNUd2VlbmVyLmpzPlxyXG4gKiAtIDxodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvanF1ZXJ5LmVhc2luZy4xLjMuanM+XHJcbiAqIC0gPGh0dHA6Ly9ob3N0ZWQuemVoLmNvbS5ici90d2VlbmVyL2RvY3MvZW4tdXMvbWlzYy90cmFuc2l0aW9ucy5odG1sPlxyXG4gKi9cclxuVHdlZW4uRUFTSU5HID0ge1xyXG5cclxuICAvKiogZGVmYXVsdCAqL1xyXG4gIFwiZGVmYXVsdFwiOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyp0L2QgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGxpbmVhciAqL1xyXG4gIGxpbmVhcjogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqdC9kICsgYjtcclxuICB9LFxyXG4gIC8qKiBzd2luZyAqL1xyXG4gIHN3aW5nOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKih0Lz1kKSoodC0yKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluUXVhZCAqL1xyXG4gIGVhc2VJblF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0UXVhZCAqL1xyXG4gIGVhc2VPdXRRdWFkOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKih0Lz1kKSoodC0yKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0UXVhZCAqL1xyXG4gIGVhc2VJbk91dFF1YWQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQgKyBiO1xyXG4gICAgcmV0dXJuIC1jLzIgKigoLS10KSoodC0yKSAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBkZWZlSW5DdWJpYyAqL1xyXG4gIGVhc2VJbkN1YmljOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyoodC89ZCkqdCp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0Q3ViaWMgKi9cclxuICBlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKigodD10L2QtMSkqdCp0ICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEN1YmljICovXHJcbiAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCArIGI7XHJcbiAgICByZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJbkN1YmljICovXHJcbiAgZWFzZU91dEluQ3ViaWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEN1YmljKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluQ3ViaWMoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluUXVhcnQgKi9cclxuICBlYXNlSW5RdWFydDogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMqKHQvPWQpKnQqdCp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0UXVhcnQgKi9cclxuICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqKCh0PXQvZC0xKSp0KnQqdCAtIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRRdWFydCAqL1xyXG4gIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XHJcbiAgICByZXR1cm4gLWMvMiAqKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5RdWFydCAqL1xyXG4gIGVhc2VPdXRJblF1YXJ0OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRRdWFydCh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJblF1YXJ0KCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJblF1aW50ICovXHJcbiAgZWFzZUluUXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KnQqdCp0ICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0UXVpbnQgKi9cclxuICBlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjKigodD10L2QtMSkqdCp0KnQqdCArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRRdWludCAqL1xyXG4gIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCp0ICsgYjtcclxuICAgIHJldHVybiBjLzIqKCh0LT0yKSp0KnQqdCp0ICsgMikgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJblF1aW50ICovXHJcbiAgZWFzZU91dEluUXVpbnQ6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dFF1aW50KHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluUXVpbnQoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluU2luZSAqL1xyXG4gIGVhc2VJblNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYyAqIE1hdGguY29zKHQvZCAqKE1hdGguUEkvMikpICsgYyArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dFNpbmUgKi9cclxuICBlYXNlT3V0U2luZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0L2QgKihNYXRoLlBJLzIpKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0U2luZSAqL1xyXG4gIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAtYy8yICooTWF0aC5jb3MoTWF0aC5QSSp0L2QpIC0gMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRJblNpbmUgKi9cclxuICBlYXNlT3V0SW5TaW5lOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRTaW5lKHQqMiwgYiwgYy8yLCBkKTtcclxuICAgIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZUluU2luZSgodCoyKS1kLCBiK2MvMiwgYy8yLCBkKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5FeHBvICovXHJcbiAgZWFzZUluRXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgcmV0dXJuICh0PT0wKSA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKih0L2QgLSAxKSkgKyBiIC0gYyAqIDAuMDAxO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRFeHBvICovXHJcbiAgZWFzZU91dEV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiAodD09ZCkgPyBiK2MgOiBjICogMS4wMDEgKigtTWF0aC5wb3coMiwgLTEwICogdC9kKSArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRFeHBvICovXHJcbiAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7XHJcbiAgICBpZih0PT1kKSByZXR1cm4gYitjO1xyXG4gICAgaWYoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yICogTWF0aC5wb3coMiwgMTAgKih0IC0gMSkpICsgYiAtIGMgKiAwLjAwMDU7XHJcbiAgICByZXR1cm4gYy8yICogMS4wMDA1ICooLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluRXhwbyAqL1xyXG4gIGVhc2VPdXRJbkV4cG86IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKHQgPCBkLzIpIHJldHVybiBUd2Vlbi5FQVNJTkcuZWFzZU91dEV4cG8odCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5FeHBvKCh0KjIpLWQsIGIrYy8yLCBjLzIsIGQpO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbkNpcmMgKi9cclxuICBlYXNlSW5DaXJjOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gLWMgKihNYXRoLnNxcnQoMSAtKHQvPWQpKnQpIC0gMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRDaXJjICovXHJcbiAgZWFzZU91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSh0PXQvZC0xKSp0KSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZUluT3V0Q2lyYyAqL1xyXG4gIGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcclxuICAgIGlmKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIC1jLzIgKihNYXRoLnNxcnQoMSAtIHQqdCkgLSAxKSArIGI7XHJcbiAgICByZXR1cm4gYy8yICooTWF0aC5zcXJ0KDEgLSh0LT0yKSp0KSArIDEpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5DaXJjICovXHJcbiAgZWFzZU91dEluQ2lyYzogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Q2lyYyh0KjIsIGIsIGMvMiwgZCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkNpcmMoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluRWxhc3RpYyAqL1xyXG4gIGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIHZhciBzO1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7ICBpZigodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZighcCkgcD1kKi4zO1xyXG4gICAgaWYoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7IGE9Yzsgcz1wLzQ7IH0gZWxzZSBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbihjL2EpO1xyXG4gICAgcmV0dXJuIC0oYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRFbGFzdGljICovXHJcbiAgZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIGEsIHApIHtcclxuICAgIHZhciBzO1xyXG4gICAgaWYodD09MCkgcmV0dXJuIGI7ICBpZigodC89ZCk9PTEpIHJldHVybiBiK2M7ICBpZighcCkgcD1kKi4zO1xyXG4gICAgaWYoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7IGE9Yzsgcz1wLzQ7IH0gZWxzZSBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbihjL2EpO1xyXG4gICAgcmV0dXJuKGEqTWF0aC5wb3coMiwtMTAqdCkgKiBNYXRoLnNpbigodCpkLXMpKigyKk1hdGguUEkpL3AgKSArIGMgKyBiKTtcclxuICB9LFxyXG4gIC8qKiBlYXNlSW5PdXRFbGFzdGljICovXHJcbiAgZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgdmFyIHM7XHJcbiAgICBpZih0PT0wKSByZXR1cm4gYjsgIGlmKCh0Lz1kLzIpPT0yKSByZXR1cm4gYitjOyAgaWYoIXApIHA9ZCooLjMqMS41KTtcclxuICAgIGlmKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHM9cC80OyB9ICAgICAgIGVsc2UgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4oYy9hKTtcclxuICAgIGlmKHQgPCAxKSByZXR1cm4gLS41KihhKk1hdGgucG93KDIsMTAqKHQtPTEpKSAqIE1hdGguc2luKCh0KmQtcykqKDIqTWF0aC5QSSkvcCApKSArIGI7XHJcbiAgICByZXR1cm4gYSpNYXRoLnBvdygyLC0xMCoodC09MSkpICogTWF0aC5zaW4oKHQqZC1zKSooMipNYXRoLlBJKS9wICkqLjUgKyBjICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5FbGFzdGljICovXHJcbiAgZWFzZU91dEluRWxhc3RpYzogZnVuY3Rpb24odCwgYiwgYywgZCwgYSwgcCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0RWxhc3RpYyh0KjIsIGIsIGMvMiwgZCwgYSwgcCk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkVsYXN0aWMoKHQqMiktZCwgYitjLzIsIGMvMiwgZCwgYSwgcCk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluQmFjayAqL1xyXG4gIGVhc2VJbkJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcclxuICAgIHJldHVybiBjKih0Lz1kKSp0KigocysxKSp0IC0gcykgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRCYWNrICovXHJcbiAgZWFzZU91dEJhY2s6IGZ1bmN0aW9uKHQsIGIsIGMsIGQsIHMpIHtcclxuICAgIGlmKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcclxuICAgIHJldHVybiBjKigodD10L2QtMSkqdCooKHMrMSkqdCArIHMpICsgMSkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEJhY2sgKi9cclxuICBlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbih0LCBiLCBjLCBkLCBzKSB7XHJcbiAgICBpZihzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcbiAgICBpZigodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqKHQqdCooKChzKj0oMS41MjUpKSsxKSp0IC0gcykpICsgYjtcclxuICAgIHJldHVybiBjLzIqKCh0LT0yKSp0KigoKHMqPSgxLjUyNSkpKzEpKnQgKyBzKSArIDIpICsgYjtcclxuICB9LFxyXG4gIC8qKiBlYXNlT3V0SW5CYWNrICovXHJcbiAgZWFzZU91dEluQmFjazogZnVuY3Rpb24odCwgYiwgYywgZCwgcykge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0QmFjayh0KjIsIGIsIGMvMiwgZCwgcyk7XHJcbiAgICByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VJbkJhY2soKHQqMiktZCwgYitjLzIsIGMvMiwgZCwgcyk7XHJcbiAgfSxcclxuICAvKiogZWFzZUluQm91bmNlICovXHJcbiAgZWFzZUluQm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICByZXR1cm4gYyAtIFR3ZWVuLkVBU0lORy5lYXNlT3V0Qm91bmNlKGQtdCwgMCwgYywgZCkgKyBiO1xyXG4gIH0sXHJcbiAgLyoqIGVhc2VPdXRCb3VuY2UgKi9cclxuICBlYXNlT3V0Qm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZigodC89ZCkgPCgxLzIuNzUpKSB7XHJcbiAgICAgIHJldHVybiBjKig3LjU2MjUqdCp0KSArIGI7XHJcbiAgICB9IGVsc2UgaWYodCA8KDIvMi43NSkpIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDEuNS8yLjc1KSkqdCArIC43NSkgKyBiO1xyXG4gICAgfSBlbHNlIGlmKHQgPCgyLjUvMi43NSkpIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDIuMjUvMi43NSkpKnQgKyAuOTM3NSkgKyBiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGMqKDcuNTYyNSoodC09KDIuNjI1LzIuNzUpKSp0ICsgLjk4NDM3NSkgKyBiO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqIGVhc2VJbk91dEJvdW5jZSAqL1xyXG4gIGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24odCwgYiwgYywgZCkge1xyXG4gICAgaWYodCA8IGQvMikgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5Cb3VuY2UodCoyLCAwLCBjLCBkKSAqIC41ICsgYjtcclxuICAgIGVsc2UgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlT3V0Qm91bmNlKHQqMi1kLCAwLCBjLCBkKSAqIC41ICsgYyouNSArIGI7XHJcbiAgfSxcclxuICAvKiogZWFzZU91dEluQm91bmNlICovXHJcbiAgZWFzZU91dEluQm91bmNlOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XHJcbiAgICBpZih0IDwgZC8yKSByZXR1cm4gVHdlZW4uRUFTSU5HLmVhc2VPdXRCb3VuY2UodCoyLCBiLCBjLzIsIGQpO1xyXG4gICAgcmV0dXJuIFR3ZWVuLkVBU0lORy5lYXNlSW5Cb3VuY2UoKHQqMiktZCwgYitjLzIsIGMvMiwgZCk7XHJcbiAgfVxyXG5cclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLlF1ZXJ5U3RyaW5nXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgUXVlcnlTdHJpbmcge1xyXG5cclxuICBzdGF0aWMgcGFyc2UodGV4dCwgc2VwLCBlcSwgaXNEZWNvZGUpIHtcclxuICAgIHRleHQgPSB0ZXh0IHx8IGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSk7XHJcbiAgICBzZXAgPSBzZXAgfHwgJyYnO1xyXG4gICAgZXEgPSBlcSB8fCAnPSc7XHJcbiAgICB2YXIgZGVjb2RlID0gKGlzRGVjb2RlKSA/IGRlY29kZVVSSUNvbXBvbmVudCA6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGE7IH07XHJcbiAgICByZXR1cm4gdGV4dC5zcGxpdChzZXApLnJlZHVjZShmdW5jdGlvbihvYmosIHYpIHtcclxuICAgICAgdmFyIHBhaXIgPSB2LnNwbGl0KGVxKTtcclxuICAgICAgb2JqW3BhaXJbMF1dID0gZGVjb2RlKHBhaXJbMV0pO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0cmluZ2lmeSh2YWx1ZSwgc2VwLCBlcSwgaXNFbmNvZGUpIHtcclxuICAgIHNlcCA9IHNlcCB8fCAnJic7XHJcbiAgICBlcSA9IGVxIHx8ICc9JztcclxuICAgIHZhciBlbmNvZGUgPSAoaXNFbmNvZGUpID8gZW5jb2RlVVJJQ29tcG9uZW50IDogZnVuY3Rpb24oYSkgeyByZXR1cm4gYTsgfTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICByZXR1cm4ga2V5ICsgZXEgKyBlbmNvZGUodmFsdWVba2V5XSk7XHJcbiAgICB9KS5qb2luKHNlcCk7XHJcbiAgfVxyXG4gIFxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgZ2xvYmFsLlN0cmluZ1xyXG4gKiAjIOaLoeW8teOBl+OBnyBTdHJpbmcg44Kv44Op44K5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgZm9ybWF0XHJcbiAqIOODleOCqeODvOODnuODg+ODiOOBq+W8leaVsOOCkumBqeeUqOOBl+OBn+aWh+Wtl+WIl+OCkui/lOOBl+OBvuOBmeOAglxyXG4gKlxyXG4gKiDlvJXmlbDjgYzjgqrjg5bjgrjjgqfjgq/jg4jjga7loLTlkIjjgIFcInvjg5fjg63jg5Hjg4bjgqPlkI19XCIg44GM44Kq44OW44K444Kn44Kv44OI44Gu44OX44Ot44OR44OG44Kj44Gu5YCk44Gr572u44GN5o+b44KP44KK44G+44GZ44CCXHJcbiAqIOaMh+WumuOBl+OBn+ODl+ODreODkeODhuOCo+OBjOOCquODluOCuOOCp+OCr+ODiOOBq+OBquOBhOWgtOWQiOOBr+epuuaWh+Wtl+WIl+OBq+OBquOCiuOBvuOBmeOAglxyXG4gKlxyXG4gKiDnrKwx5byV5pWw44GM44Kq44OW44K444Kn44Kv44OI44Gn44Gq44GL44Gj44Gf5aC05ZCI44CBXCJ75pW05pWwfVwiIOOBjOWQhOW8leaVsOOBq+e9ruOBjeaPm+OCj+OCiuOBvuOBmeOAglxyXG4gKiDmjIflrprjgZfjgZ/lgKTjga7lvJXmlbDjgYzjgarjgYvjgaPjgZ/loLTlkIjjga/nqbrmloflrZfliJfjgavjgarjgorjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIG9iaiA9IHtyOiAxMjgsIGc6IDAsIGI6IDI1NX07XHJcbiAqICAgICBcImNvbG9yOiByZ2Ioe3J9LCB7Z30sIHtifSk7XCIuZm9ybWF0KG9iaik7IC8vID0+IFwiY29sb3I6IHJnYigxMjgsIDAsIDI1NSk7XCJcclxuICpcclxuICogICAgIFwiezB9ICsgezF9ID0gezJ9XCIuZm9ybWF0KDUsIDgsICg1KzgpKTsgLy8gPT4gXCI1ICsgOCA9IDEzXCJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiDjg5Hjg6njg6Hjg7zjgr/jgajjgarjgovjgqrjg5bjgrjjgqfjgq/jg4hcclxuICogQHJldHVybiB7U3RyaW5nfSDnlJ/miJDjgZfjgZ/mloflrZfliJdcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdChhcmcpIHtcclxuLy8gU3RyaW5nLnByb3RvdHlwZS4kbWV0aG9kKFwiZm9ybWF0XCIsIGZ1bmN0aW9uKGFyZykge1xyXG4gIC8vIOe9ruaPm+ODleOCoeODs+OCr1xyXG4gIHZhciByZXBfZm4gPSB1bmRlZmluZWQ7XHJcbiAgXHJcbiAgLy8g44Kq44OW44K444Kn44Kv44OI44Gu5aC05ZCIXHJcbiAgaWYgKHR5cGVvZiBhcmcgPT0gXCJvYmplY3RcIikge1xyXG4gICAgLyoqIEBpZ25vcmUgKi9cclxuICAgIHJlcF9mbiA9IGZ1bmN0aW9uKG0sIGspIHtcclxuICAgICAgaWYgKGFyZ1trXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBhcmdba107XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG4gIC8vIOikh+aVsOW8leaVsOOBoOOBo+OBn+WgtOWQiFxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAvKiogQGlnbm9yZSAqL1xyXG4gICAgcmVwX2ZuID0gZnVuY3Rpb24obSwgaykge1xyXG4gICAgICB2YXIgdiA9IGFyZ3NbIHBhcnNlSW50KGspIF07XHJcbiAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSggL1xceyhcXHcrKVxcfS9nLCByZXBfZm4gKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIGVhY2hcclxuICog5ZCE5paH5a2X44KS6aCG55Wq44Gr5rih44GX44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICBzdHIgPSAnYWJjJztcclxuICogICAgIHN0ci5lYWNoKGZ1bmN0aW9uKGNoKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKGNoKTtcclxuICogICAgIH0pO1xyXG4gKiAgICAgLy8gPT4gJ2EnXHJcbiAqICAgICAvLyAgICAnYidcclxuICogICAgIC8vICAgICdjJ1xyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayDlkITopoHntKDjgavlr77jgZfjgablrp/ooYzjgZnjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcclxuICogQHBhcmFtIHtPYmplY3R9IFtzZWxmPXRoaXNdIGNhbGxiYWNrIOWGheOBpyB0aGlzIOOBqOOBl+OBpuWPgueFp+OBleOCjOOCi+WApFxyXG4gKi9cclxuZnVuY3Rpb24gZWFjaCQxKCkge1xyXG4vLyBTdHJpbmcucHJvdG90eXBlLiRtZXRob2QoXCJlYWNoXCIsIGZ1bmN0aW9uKCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51dGlsLkNvbG9yXHJcbiAqIOOCq+ODqeODvOOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgQ29sb3Ige1xyXG5cclxuICAvLyAvKiogUuWApCAqL1xyXG4gIC8vIHI6IDI1NSxcclxuICAvLyAvKiogR+WApCAqL1xyXG4gIC8vIGc6IDI1NSxcclxuICAvLyAvKiogQuWApCAqL1xyXG4gIC8vIGI6IDI1NSxcclxuICAvLyAvKiogQeWApCAqL1xyXG4gIC8vIGE6IDEuMCxcclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5pyf5YyWXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IociwgZywgYiwgYSkge1xyXG4gICAgdGhpcy5yID0gMjU1O1xyXG4gICAgdGhpcy5nID0gMjU1O1xyXG4gICAgdGhpcy5iID0gMjU1O1xyXG4gICAgdGhpcy5hID0gMS4wO1xyXG4gICAgdGhpcy5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCu+ODg+OCv+ODvC5cclxuICAgKi9cclxuICBzZXQociwgZywgYiwgYSkge1xyXG4gICAgdGhpcy5yID0gcjtcclxuICAgIHRoaXMuZyA9IGc7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG4gICAgdGhpcy5hID0gKGEgIT09IHVuZGVmaW5lZCkgPyBhIDogMS4wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmlbDlgKTjgavjgojjgovjgrvjg4Pjgr/jg7wuXHJcbiAgICovXHJcbiAgc2V0RnJvbU51bWJlcihyLCBnLCBiLCBhKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcbiAgICB0aGlzLmEgPSAoYSAhPT0gdW5kZWZpbmVkKSA/IGEgOiAxLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmFjeWIl+OBq+OCiOOCi+OCu+ODg+OCv+ODvFxyXG4gICAqL1xyXG4gIHNldEZyb21BcnJheShhcnIpIHtcclxuICAgIHJldHVybiB0aGlzLnNldC5hcHBseSh0aGlzLCBhcnIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kq44OW44K444Kn44Kv44OI44Gr44KI44KL44K744OD44K/44O8XHJcbiAgICovXHJcbiAgc2V0RnJvbU9iamVjdChvYmopIHtcclxuICAgIHJldHVybiB0aGlzLnNldChvYmouciwgb2JqLmcsIG9iai5iLCBvYmouYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmloflrZfliJfjgavjgojjgovjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRGcm9tU3RyaW5nKHN0cikge1xyXG4gICAgdmFyIGNvbG9yID0gQ29sb3Iuc3RyaW5nVG9OdW1iZXIoc3RyKTtcclxuICAgIHJldHVybiB0aGlzLnNldChjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBjb2xvclszXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDos6LjgYTjgrvjg4Pjgr/jg7xcclxuICAgKi9cclxuICBzZXRTbWFydCgpIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbMF07XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgIHRoaXMuc2V0KGFyZ3VtZW50cy5yLCBhcmd1bWVudHMuZywgYXJndW1lbnRzLmIsIGFyZ3VtZW50cy5hKTtcclxuICAgIH0gZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGhpcy5zZXRGcm9tQXJyYXkoYXJnKTtcclxuICAgIH0gZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgIHRoaXMuc2V0RnJvbU9iamVjdChhcmcpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMuc2V0RnJvbVN0cmluZyhhcmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDU1Mg55SoIDE26YCy5pWw5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZUFzSGV4KCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwiI3swfXsxfXsyfVwiLFxyXG4gICAgLy8gcmV0dXJuIFwiI3swfXsxfXsyfVwiLmZvcm1hdChcclxuICAgICAgdGhpcy5yLnRvU3RyaW5nKDE2KS5wYWRkaW5nKDIsICcwJyksXHJcbiAgICAgIHRoaXMuZy50b1N0cmluZygxNikucGFkZGluZygyLCAnMCcpLFxyXG4gICAgICB0aGlzLmIudG9TdHJpbmcoMTYpLnBhZGRpbmcoMiwgJzAnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENTUyDnlKggUkdC5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZUFzUkdCKCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdC5jYWxsKFwicmdiKHtyfSx7Z30se2J9KVwiLCB7XHJcbiAgICAvLyByZXR1cm4gXCJyZ2Ioe3J9LHtnfSx7Yn0pXCIuZm9ybWF0KHtcclxuICAgICAgcjogfn50aGlzLnIsXHJcbiAgICAgIGc6IH5+dGhpcy5nLFxyXG4gICAgICBiOiB+fnRoaXMuYlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCBSR0JB5paH5a2X5YiX44Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgdG9TdHlsZUFzUkdCQSgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcInJnYmEoe3J9LHtnfSx7Yn0se2F9KVwiLCB7XHJcbiAgICAvLyByZXR1cm4gXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIi5mb3JtYXQoe1xyXG4gICAgICByOiB+fnRoaXMucixcclxuICAgICAgZzogfn50aGlzLmcsXHJcbiAgICAgIGI6IH5+dGhpcy5iLFxyXG4gICAgICBhOiB0aGlzLmFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ1NTIOeUqCBSR0JBIOaWh+Wtl+WIl+OBq+WkieaPm1xyXG4gICAqL1xyXG4gIHRvU3R5bGUoKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0LmNhbGwoXCJyZ2JhKHtyfSx7Z30se2J9LHthfSlcIiwge1xyXG4gICAgLy8gcmV0dXJuIFwicmdiYSh7cn0se2d9LHtifSx7YX0pXCIuZm9ybWF0KHtcclxuICAgICAgcjogfn50aGlzLnIsXHJcbiAgICAgIGc6IH5+dGhpcy5nLFxyXG4gICAgICBiOiB+fnRoaXMuYixcclxuICAgICAgYTogdGhpcy5hXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWVtYmVyIHBoaW5hLnV0aWwuQ29sb3JcclxuICAgKiBAbWV0aG9kIHN0clRvTnVtXHJcbiAgICovXHJcbiAgc3RhdGljIHN0clRvTnVtKHN0cikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9OdW1iZXIoc3RyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdHJpbmdUb051bWJlcihzdHIpIHtcclxuICAgIHZhciB2YWx1ZSA9IG51bGw7XHJcbiAgICB2YXIgdHlwZSA9IG51bGw7XHJcblxyXG4gICAgaWYgKHN0clswXSA9PT0gJyMnKSB7XHJcbiAgICAgIHR5cGUgPSAoc3RyLmxlbmd0aCA9PSA0KSA/IFwiaGV4MTExXCIgOiBcImhleDIyMlwiO1xyXG4gICAgfSBlbHNlIGlmIChzdHJbMF0gPT09ICdyJyAmJiBzdHJbMV0gPT09ICdnJyAmJiBzdHJbMl0gPT09ICdiJykge1xyXG4gICAgICB0eXBlID0gKHN0clszXSA9PSAnYScpID8gXCJyZ2JhXCIgOiBcInJnYlwiO1xyXG4gICAgfSBlbHNlIGlmIChzdHJbMF0gPT09ICdoJyAmJiBzdHJbMV0gPT09ICdzJyAmJiBzdHJbMl0gPT09ICdsJykge1xyXG4gICAgICB0eXBlID0gKHN0clszXSA9PSAnYScpID8gXCJoc2xhXCIgOiBcImhzbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgIHZhciBtYXRjaF9zZXQgPSBNQVRDSF9TRVRfTElTVFt0eXBlXTtcclxuICAgICAgdmFyIG0gPSBzdHIubWF0Y2gobWF0Y2hfc2V0LnJlZyk7XHJcbiAgICAgIHZhbHVlID0gbWF0Y2hfc2V0LmV4ZWMobSk7XHJcbiAgICB9IGVsc2UgaWYgKENvbG9yLkNPTE9SX0xJU1Rbc3RyXSkge1xyXG4gICAgICB2YWx1ZSA9IENvbG9yLkNPTE9SX0xJU1Rbc3RyXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1ldGhvZFxyXG4gICAqIGhzbCDjgpIgcmdiIOOBq+WkieaPm1xyXG4gICAqL1xyXG4gIHN0YXRpYyBIU0x0b1JHQihoLCBzLCBsKSB7XHJcbiAgICB2YXIgciwgZywgYjtcclxuXHJcbiAgICBoICU9IDM2MDtcclxuICAgIGggKz0gMzYwO1xyXG4gICAgaCAlPSAzNjA7XHJcbiAgICBzICo9IDAuMDE7XHJcbiAgICBsICo9IDAuMDE7XHJcblxyXG4gICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgdmFyIGwgPSBNYXRoLnJvdW5kKGwgKiAyNTUpO1xyXG4gICAgICByZXR1cm4gW2wsIGwsIGxdO1xyXG4gICAgfVxyXG4gICAgdmFyIG0yID0gKGwgPCAwLjUpID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgdmFyIG0xID0gbCAqIDIgLSBtMjtcclxuXHJcbiAgICAvLyByZWRcclxuICAgIHZhciB0ZW1wID0gKGggKyAxMjApICUgMzYwO1xyXG4gICAgaWYgKHRlbXAgPCA2MCkge1xyXG4gICAgICByID0gbTEgKyAobTIgLSBtMSkgKiB0ZW1wIC8gNjA7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAxODApIHtcclxuICAgICAgciA9IG0yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgciA9IG0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdyZWVuXHJcbiAgICB0ZW1wID0gaDtcclxuICAgIGlmICh0ZW1wIDwgNjApIHtcclxuICAgICAgZyA9IG0xICsgKG0yIC0gbTEpICogdGVtcCAvIDYwO1xyXG4gICAgfSBlbHNlIGlmICh0ZW1wIDwgMTgwKSB7XHJcbiAgICAgIGcgPSBtMjtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDI0MCkge1xyXG4gICAgICBnID0gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gdGVtcCkgLyA2MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGcgPSBtMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBibHVlXHJcbiAgICB0ZW1wID0gKChoIC0gMTIwKSArIDM2MCkgJSAzNjA7XHJcbiAgICBpZiAodGVtcCA8IDYwKSB7XHJcbiAgICAgIGIgPSBtMSArIChtMiAtIG0xKSAqIHRlbXAgLyA2MDtcclxuICAgIH0gZWxzZSBpZiAodGVtcCA8IDE4MCkge1xyXG4gICAgICBiID0gbTI7XHJcbiAgICB9IGVsc2UgaWYgKHRlbXAgPCAyNDApIHtcclxuICAgICAgYiA9IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIHRlbXApIC8gNjA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiID0gbTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgcGFyc2VJbnQociAqIDI1NSksXHJcbiAgICAgIHBhcnNlSW50KGcgKiAyNTUpLFxyXG4gICAgICBwYXJzZUludChiICogMjU1KVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsYSDjgpIgcmdiYSDjgavlpInmj5tcclxuICAgKi9cclxuICBzdGF0aWMgSFNMQXRvUkdCQShoLCBzLCBsLCBhKSB7XHJcbiAgICB2YXIgdGVtcCA9IENvbG9yLkhTTHRvUkdCKGgsIHMsIGwpO1xyXG4gICAgdGVtcFszXSA9IGE7XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogcmdiIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZVJHQihyLCBnLCBiKSB7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZXRob2RcclxuICAgKiByZ2JhIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZVJHQkEociwgZywgYiwgYSkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsIOWApOOCkuS9nOaIkFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGVTdHlsZUhTTChoLCBzLCBsKSB7XHJcbiAgICByZXR1cm4gXCJoc2woXCIgKyBoICsgXCIsXCIgKyBzICsgXCIlLFwiICsgbCArIFwiJSlcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kXHJcbiAgICogaHNsYSDlgKTjgpLkvZzmiJBcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlU3R5bGVIU0xBKGgsIHMsIGwsIGEpIHtcclxuICAgIHJldHVybiBcImhzbGEoXCIgKyBoICsgXCIsXCIgKyBzICsgXCIlLFwiICsgbCArIFwiJSxcIiArIGEgKyBcIilcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuLyoqXHJcbiAqIEBzdGF0aWNcclxuICog44Kr44Op44O844Oq44K544OIXHJcbiAqL1xyXG5Db2xvci5DT0xPUl9MSVNUID0ge1xyXG4gIC8qKiBAcHJvcGVydHkgYmxhY2sgKi9cclxuICBcImJsYWNrXCI6IFsweDAwLCAweDAwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHNpbHZlciAqL1xyXG4gIFwic2lsdmVyXCI6IFsweGMwLCAweGMwLCAweGMwXSxcclxuICAvKiogQHByb3BlcnR5IGdyYXkgKi9cclxuICBcImdyYXlcIjogWzB4ODAsIDB4ODAsIDB4ODBdLFxyXG4gIC8qKiBAcHJvcGVydHkgd2hpdGUgKi9cclxuICBcIndoaXRlXCI6IFsweGZmLCAweGZmLCAweGZmXSxcclxuICAvKiogQHByb3BlcnR5IG1hcm9vbiAqL1xyXG4gIFwibWFyb29uXCI6IFsweDgwLCAweDAwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHJlZCAqL1xyXG4gIFwicmVkXCI6IFsweGZmLCAweDAwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHB1cnBsZSAqL1xyXG4gIFwicHVycGxlXCI6IFsweDgwLCAweDAwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IGZ1Y2hzaWEgKi9cclxuICBcImZ1Y2hzaWFcIjogWzB4ZmYsIDB4MDAsIDB4ZmZdLFxyXG4gIC8qKiBAcHJvcGVydHkgZ3JlZW4gKi9cclxuICBcImdyZWVuXCI6IFsweDAwLCAweDgwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IGxpbWUgKi9cclxuICBcImxpbWVcIjogWzB4MDAsIDB4ZmYsIDB4MDBdLFxyXG4gIC8qKiBAcHJvcGVydHkgb2xpdmUgKi9cclxuICBcIm9saXZlXCI6IFsweDgwLCAweDgwLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IHllbGxvdyAqL1xyXG4gIFwieWVsbG93XCI6IFsweGZmLCAweGZmLCAweDAwXSxcclxuICAvKiogQHByb3BlcnR5IG5hdnkgKi9cclxuICBcIm5hdnlcIjogWzB4MDAsIDB4MDAsIDB4ODBdLFxyXG4gIC8qKiBAcHJvcGVydHkgYmx1ZSAqL1xyXG4gIFwiYmx1ZVwiOiBbMHgwMCwgMHgwMCwgMHhmZl0sXHJcbiAgLyoqIEBwcm9wZXJ0eSB0ZWFsICovXHJcbiAgXCJ0ZWFsXCI6IFsweDAwLCAweDgwLCAweDgwXSxcclxuICAvKiogQHByb3BlcnR5IGFxdWEgKi9cclxuICBcImFxdWFcIjogWzB4MDAsIDB4ZmYsIDB4ZmZdLFxyXG59O1xyXG5cclxuXHJcbnZhciBNQVRDSF9TRVRfTElTVCA9IHtcclxuICBcImhleDExMVwiOiB7XHJcbiAgICByZWc6IC9eIyhcXHd7MX0pKFxcd3sxfSkoXFx3ezF9KSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0gKyBtWzFdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVsyXSArIG1bMl0sIDE2KSxcclxuICAgICAgICBwYXJzZUludChtWzNdICsgbVszXSwgMTYpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImhleDIyMlwiOiB7XHJcbiAgICByZWc6IC9eIyhcXHd7Mn0pKFxcd3syfSkoXFx3ezJ9KSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0sIDE2KSxcclxuICAgICAgICBwYXJzZUludChtWzJdLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQobVszXSwgMTYpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInJnYlwiOiB7XHJcbiAgICByZWc6IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHBhcnNlSW50KG1bMV0pLFxyXG4gICAgICAgIHBhcnNlSW50KG1bMl0pLFxyXG4gICAgICAgIHBhcnNlSW50KG1bM10pXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInJnYmFcIjoge1xyXG4gICAgcmVnOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezF9KFxcLnsxfVxcZCspPylcXCkkLyxcclxuICAgIGV4ZWM6IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwYXJzZUludChtWzFdKSxcclxuICAgICAgICBwYXJzZUludChtWzJdKSxcclxuICAgICAgICBwYXJzZUludChtWzNdKSxcclxuICAgICAgICBwYXJzZUZsb2F0KG1bNF0pXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImhzbFwiOiB7XHJcbiAgICByZWc6IC9eaHNsXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSUsXFxzKihcXGR7MSwzfSklXFwpJC8sXHJcbiAgICBleGVjOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHJldHVybiBDb2xvci5IU0x0b1JHQihtWzFdLCBtWzJdLCBtWzNdKTtcclxuICAgIH1cclxuICB9LFxyXG4gIFwiaHNsYVwiOiB7XHJcbiAgICByZWc6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MX0oXFwuezF9XFxkKyk/KVxcKSQvLFxyXG4gICAgZXhlYzogZnVuY3Rpb24obSkge1xyXG4gICAgICByZXR1cm4gQ29sb3IuSFNMQXRvUkdCQShtWzFdLCBtWzJdLCBtWzNdLCBtWzRdKTtcclxuICAgIH1cclxuICB9XHJcbn07XG5cbi8vIOebo+imluOCquODluOCuOOCp+OCr+ODiFxyXG4vLyByZWdpc3RlciDjgacga2V5IOOCkueZu+mMsiAo44OH44OV44Kp44Or44OI5YCk44KC5LiA57eS44Gr77yfKVxyXG4vLyBldmVudCBkaXNwYXRjaGVyIOOCkue2meaJv1xyXG4vLyBldmVudCBkaXNwYXRjaGVyIOOBo+OBpiB1dGlsIOOBmOOCg+OBre+8n1xyXG4vLyByZWdpc3RlciDjgafnmbvpjLLjgZfjgZ/lgKTjgpLlpInmm7TjgZfjgZ/jgokgY2hhbmdlIOOCpOODmeODs+ODiOOBjOi1sOOCi1xyXG5cclxuXHJcbi8vIOWQjeWJjeWAmeijnFxyXG4vLyAgbWlkZGxlbWFuKOS7sueri+S6uilcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuQ2hhbmdlRGlzcGF0Y2hlclxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQ2hhbmdlRGlzcGF0Y2hlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLl9vYnNlcnZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB2YXIgb2JqID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICBmb3JJbi5jYWxsKG9iaiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBvYmouZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciB0ZW1wS2V5ID0gJ19fJyArIGtleTtcclxuICAgICAgdGhpc1t0ZW1wS2V5XSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgYWNjZXNzb3IuY2FsbCh0aGlzLCBrZXksIHtcclxuICAgICAgLy8gdGhpcy5hY2Nlc3NvcihrZXksIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXNbdGVtcEtleV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIHRoaXNbdGVtcEtleV0gPSB2O1xyXG4gICAgICAgICAgaWYgKHRoaXMuX29ic2VydmUpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFyZSgnY2hhbmdlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIG9ic2VydmUoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlID0gdHJ1ZTtcclxuICB9XHJcbiAgdW5vYnNlcnZlKCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZSA9IGZhbHNlO1xyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnV0aWwuQWpheFxyXG4gKiBcclxuICovXHJcbmNsYXNzIEFqYXgge1xyXG5cclxuICBzdGF0aWMgcmVxdWVzdChvcHRpb25zKSB7XHJcbiAgICB2YXIgZGF0YSA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIEFqYXguZGVmYXVsdHMpO1xyXG4gICAgLy8gdmFyIGRhdGEgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHZhciBmbG93ID0gbmV3IEZsb3coZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICBpZiAoWzIwMCwgMjAxLCAwXS5pbmRleE9mKHhoci5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgeGhyLm9wZW4oZGF0YS50eXBlLCBkYXRhLnVybCk7XHJcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBkYXRhLnJlc3BvbnNlVHlwZTtcclxuICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9XHJcbiAgc3RhdGljIGdldCh1cmwpIHtcclxuICAgIHJldHVybiBBamF4LnJlcXVlc3Qoe1xyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIHBvc3QodXJsKSB7XHJcbiAgICByZXR1cm4gQWpheC5yZXF1ZXN0KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgcHV0KHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdQVVQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0aWMgZGVsKHVybCkge1xyXG4gICAgcmV0dXJuIEFqYXgucmVxdWVzdCh7XHJcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKiBcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyb2YgQWpheFxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cclxuQWpheC5kZWZhdWx0cyA9IHtcclxuICB0eXBlOiAnR0VUJyxcclxuICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgcmVzcG9uc2VUeXBlOiAnanNvbicsXHJcbiAgZGF0YTogbnVsbCxcclxuICB1cmw6ICcnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIGdsb2JhbC5OdW1iZXJcclxuICogIyDmi6HlvLXjgZfjgZ8gTnVtYmVyIOOCr+ODqeOCuVxyXG4gKiDmlbDlgKTjgpLmibHjgYYgTnVtYmVyIOOCr+ODqeOCueOCkuaLoeW8teOBl+OBpuOBhOOBvuOBmeOAglxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHRpbWVzXHJcbiAqIDAg44GL44KJ6Ieq5YiG6Ieq6Lqr44Gu5pWwLTHjgb7jgafjgIHjgqvjgqbjg7Pjgr/jgpLjgqTjg7Pjgq/jg6rjg6Hjg7Pjg4jjgZfjgarjgYzjgonplqLmlbDjgpLnubDjgorov5TjgZflrp/ooYzjgZfjgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIGFyciA9IFtdO1xyXG4gKiAgICAgKDUpLnRpbWVzKGZ1bmN0aW9uKGkpe1xyXG4gKiAgICAgICBhcnIucHVzaChpKTtcclxuICogICAgIH0pOyAvLyA9PiBbMCwgMSwgMiwgMywgNF1cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2VsZj10aGlzXSDplqLmlbDlhoXjgacgdGhpcyDjgajjgZfjgablj4LnhafjgZXjgozjgovlgKTjgILjg4fjg5Xjgqnjg6vjg4jjga/oh6rliIboh6rouqvjgIJcclxuICovXHJcbmZ1bmN0aW9uIHRpbWVzKGZuLCBzZWxmKSB7XHJcbi8vIE51bWJlci5wcm90b3R5cGUuJG1ldGhvZChcInRpbWVzXCIsICBmdW5jdGlvbihmbiwgc2VsZikge1xyXG4gIHNlbGYgPSBzZWxmIHx8IHRoaXM7XHJcbiAgZm9yICh2YXIgaT0wOyBpPHRoaXM7ICsraSkge1xyXG4gICAgZm4uY2FsbChzZWxmLCBpLCB0aGlzKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbWV0aG9kIHN0ZXBcclxuICog6Ieq5YiG6Ieq6Lqr44Gu5YCk44GL44KJ5oyH5a6a44GX44Gf5pWw44G+44Gn44CB44Kr44Km44Oz44K/44KS5aKX5YiG44GV44Gb44Gq44GM44KJ6Zai5pWw44KS57mw44KK6L+U44GX5a6f6KGM44GX44G+44GZ44CCXHJcbiAqXHJcbiAqIOS4iumZkOWApOOChOWil+WIhuWApOOBryBmbG9hdCDlnovjgpLmjIflrprjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICogICAgIHZhciBhcnIgPSBbXTtcclxuICogICAgICgyLjQpLnN0ZXAoNS4zLCAwLjgsIGZ1bmN0aW9uKG4pIHtcclxuICogICAgICAgYXJyLnB1c2gobik7XHJcbiAqICAgICAgfSk7IC8vID0+IFsyLjQsIDMuMiwgNC4wLCA0LjhdXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBsaW1pdCDjgqvjgqbjg7Pjgr/jga7kuIrpmZDlgKRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAg44Kr44Km44Oz44K/44KS5aKX5YiG44GZ44KL6YePXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOOCs+ODvOODq+ODkOODg+OCr+mWouaVsOOAguW8leaVsOOBq+OCq+OCpuODs+OCv+OBjOa4oeOBleOCjOOCi+OAglxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3NlbGY9dGhpc10g6Zai5pWw5YaF44GnIHRoaXMg44Go44GX44Gm5Y+C54Wn44GV44KM44KL5YCk44CC44OH44OV44Kp44Or44OI44Gv6Ieq5YiG6Ieq6Lqr44CCXHJcbiAqL1xyXG5mdW5jdGlvbiBzdGVwKGxpbWl0LCBzdGVwLCBmbiwgc2VsZikge1xyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJzdGVwXCIsICBmdW5jdGlvbihsaW1pdCwgc3RlcCwgZm4sIHNlbGYpIHtcclxuICBzZWxmID0gc2VsZiB8fCB0aGlzO1xyXG4gIGZvciAodmFyIGk9K3RoaXM7IGk8PWxpbWl0OyBpKz1zdGVwKSB7XHJcbiAgICBmbi5jYWxsKHNlbGYsIGksIHRoaXMpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufVxyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJ0b0RlZ3JlZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuICh0aGlzKk1hdGguUkFEX1RPX0RFRyk7IH0pO1xyXG5cclxuLyoqXHJcbiAqIEBtZXRob2QgdG9SYWRpYW5cclxuICog5bqm44KS44Op44K444Ki44Oz44Gr5aSJ5o+b44GX44G+44GZ44CCXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqICAgICAoMTgwKS50b1JhZGlhbigpOyAvLyA9PiAzLjE0MTU5MjY1MzU4OTc5M1xyXG4gKlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IOODqeOCuOOCouODs1xyXG4gKi9cclxuZnVuY3Rpb24gdG9SYWRpYW4oKSB7IHJldHVybiB0aGlzICogREVHX1RPX1JBRDsgfVxyXG4vLyBOdW1iZXIucHJvdG90eXBlLiRtZXRob2QoXCJ0b1JhZGlhblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMqTWF0aC5ERUdfVE9fUkFEOyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLlZlY3RvcjJcclxuICogIyAy5qyh5YWD44OZ44Kv44OI44Or44Kv44Op44K5XHJcbiAqIDLmrKHlhYPjga7jg5njgq/jg4jjg6vjgoTluqfmqJnjgpLooajjgZnjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFZlY3RvcjIge1xyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiB45bqn5qiZXHJcbiAgLy8gICogQHR5cGUge051bWJlcn1cclxuICAvLyAgKi9cclxuICAvLyB4ID0gMFxyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiB55bqn5qiZXHJcbiAgLy8gICogQHR5cGUge051bWJlcn1cclxuICAvLyAgKi9cclxuICAvLyB5ID0gMFxyXG5cclxuICAvKipcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFt4PTBdIOODmeOCr+ODiOODq+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbeT0wXSDjg5njgq/jg4jjg6vjga4geSDluqfmqJlcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IDLmrKHlhYPjg5njgq/jg4jjg6vjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4PTAsIHk9MCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICogdGhpcyDjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gdi5jbG9uZSgpO1xyXG4gICAqICAgICB2Mi54ID09IHYueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDnlJ/miJDjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGVxdWFsc1xyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44GM44GZ44G544GmIG90aGVyIOOBqOetieOBl+OBhOOBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDUsIDYpO1xyXG4gICAqICAgICB2MS5lcXVhbHModjIpOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOavlOi8g+OBmeOCi+WvvuixoeOBruODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOetieOBl+OBhOOBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIGVxdWFscyh2KSB7XHJcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gdi54ICYmIHRoaXMueSA9PT0gdi55KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44Gu5YCk44KS5YaN6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2LnNldCg1LCA2KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOODmeOCr+ODiOODq+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOODmeOCr+ODiOODq+OBriB5IOW6p+aomVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5YaN6Kit5a6a5b6M44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc2V0KHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBqyBvdGhlciDjgpLliqDjgYjjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig1LCA2KTtcclxuICAgKiAgICAgdjEuYWRkKHYyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoOCwgMTApXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDliqDnrpfjgZfjgZ/ntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBhZGQodikge1xyXG4gICAgdGhpcy54ICs9IHYueDtcclxuICAgIHRoaXMueSArPSB2Lnk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc3ViXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44GL44KJIG90aGVyIOOCkua4m+OBmOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICog44OZ44Kv44OI44Or44GM5bqn5qiZ44KS6KGo44GZ5aC05ZCI44Gv44CB5oyH5a6a44GX44Gf5bqn5qiZ44GL44KJ6Ieq5YiG6Ieq6Lqr44G444Go5ZCR44GL44GG44OZ44Kv44OI44Or44GM5b6X44KJ44KM44G+44GZ44CCXHJcbiAgICogXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDUpO1xyXG4gICAqICAgICB2MS5zdWIodjIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcigyLCAtMSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOa4m+eul+OBl+OBn+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN1Yih2KSB7XHJcbiAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgdGhpcy55IC09IHYueTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtdWxcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjga7lkITopoHntKDjgavmlbDlgKQgbiDjgpLkuZfjgZjjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5tdWwoMykgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoOSwgMTIpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gbiDkuZfjgZjjgovlgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOS5l+eul+OBl+OBn+e1kOaenOOBruODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIG11bChuKSB7XHJcbiAgICB0aGlzLnggKj0gbjtcclxuICAgIHRoaXMueSAqPSBuO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpdlxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOimgee0oOOCkuaVsOWApCBuIOOBp+WJsuOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoOCwgMTYpO1xyXG4gICAqICAgICB2MS5kaXYoMikgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IoNCwgOClcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBuIOWJsuOCi+WApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g6Zmk566X44GX44Gf57WQ5p6c44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgZGl2KG4pIHtcclxuICAgIC8vY29uc29sZS5hc3NlcnQobiAhPSAwLCBcIjAgZGl2aXNpb24hIVwiKTtcclxuICAgIG4gPSBuIHx8IDAuMDE7XHJcbiAgICB0aGlzLnggLz0gbjtcclxuICAgIHRoaXMueSAvPSBuO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbmVnYXRlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44Gu5q2j6LKg44KS5Y+N6Lui44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiB0aGlzIOOBqOWQjOOBmOWkp+OBjeOBleOBp+aWueWQkeOBjOmAhuOBruODmeOCr+ODiOODq+OBjOW+l+OCieOCjOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgLTQpO1xyXG4gICAqICAgICB2MS5uZWdhdGUoKSAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcigtMywgNClcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5Y+N6Lui5b6M44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgbmVnYXRlKCkge1xyXG4gICAgdGhpcy54ID0gLXRoaXMueDtcclxuICAgIHRoaXMueSA9IC10aGlzLnk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkb3RcclxuICAgKiBvdGhlciDjgajjga7lhoXnqY3jgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOaKleW9seODmeOCr+ODiOODq+OCkuaxguOCgeOBn+OCiuOAgemhnuS8vOW6puOBruioiOeul+OBq+WIqeeUqOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0yLCAyKTtcclxuICAgKiAgICAgdjEuZG90KHYyKSAvLyA9PiAyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDlhoXnqY1cclxuICAgKi9cclxuICBkb3Qodikge1xyXG4gICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY3Jvc3NcclxuICAgKiBvdGhlciDjgajjga7lpJbnqY3vvIjjgq/jg63jgrnnqY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6vjgafjga7lpJbnqY3jga/jg5njgq/jg4jjg6vjgafjgarjgY/mlbDlgKTjgpLov5TjgZnjgZPjgajjgavms6jmhI/jgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBvdGhlciDjgojjgoogdGhpcyDmmYLoqIjlm57jgorjgavjgYLjgovjgajjgY3jga/mraPjga7lgKTjgavjgarjgorjgIHlj43mmYLoqIjlm57jgorjgavjgYLjgovjgajjgY3jga/osqDjga7lgKTjgavjgarjgorjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjEuY3Jvc3ModjIpIC8vID0+IC04XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gb3RoZXIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDlpJbnqY1cclxuICAgKi9cclxuICBjcm9zcyh2KSB7XHJcbiAgICByZXR1cm4gKHRoaXMueCp2LnkpIC0gKHRoaXMueSp2LngpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBsZW5ndGhcclxuICAgKiB0aGlzIOOBruWkp+OBjeOBleOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogKG1lbW8pIG1hZ25pdHVkZSDjgaPjgablkI3liY3jga7mlrnjgYzoia/jgYTjgYvjgoIuIOaknOiojuS4rS5cclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS5sZW5ndGgoKTsgLy8gPT4gNVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg5njgq/jg4jjg6vjga7lpKfjgY3jgZVcclxuICAgKi9cclxuICBsZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCp0aGlzLnggKyB0aGlzLnkqdGhpcy55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBsZW5ndGhTcXVhcmVkXHJcbiAgICogdGhpcyDjga7lpKfjgY3jgZXjga7oh6rkuZfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEMjIOOBruWQjeWJjeOCkuW8leeUqO+8iG9yIGxlbmd0aFNxdWFyZSBvciBsZW5ndGhTcXJ077yJXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEubGVuZ3RoU3F1YXJlZCgpOyAvLyA9PiAyNVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg5njgq/jg4jjg6vjga7lpKfjgY3jgZXjga7oh6rkuZdcclxuICAgKi9cclxuICBsZW5ndGhTcXVhcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMueCp0aGlzLnggKyB0aGlzLnkqdGhpcy55O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGRpc3RhbmNlXHJcbiAgICogdGhpcyDjgaggb3RoZXIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBrui3nembouOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICB2MS5kaXN0YW5jZSh2Mik7IC8vID0+IDVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBvdGhlciDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6JcclxuICAgKi9cclxuICBkaXN0YW5jZSh2KSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyh0aGlzLngtdi54LCAyKSArIE1hdGgucG93KHRoaXMueS12LnksIDIpICk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGlzdGFuY2VTcXVhcmVkXHJcbiAgICogdGhpcyDjgaggb3RoZXIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBrui3nembouOBruiHquS5l+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICB2MS5kaXN0YW5jZVNxdWFyZWQodjIpOyAvLyA9PiAyNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG90aGVyIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge051bWJlcn0gMueCuemWk+OBrui3nembouOBruiHquS5l1xyXG4gICAqL1xyXG4gIGRpc3RhbmNlU3F1YXJlZCh2KSB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3codGhpcy54LXYueCwgMikgKyBNYXRoLnBvdyh0aGlzLnktdi55LCAyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmFuZG9tXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOinkuW6puOBjCBtaW4g44GL44KJIG1heCDjga7nr4Tlm7LvvIjluqbljZjkvY3vvInjgaflpKfjgY3jgZXjgYwgbGVuIOOBruODqeODs+ODgOODoOOBquODmeOCr+ODiOODq+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyKCkucmFuZG9tKDkwLCAxODAsIDEpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoLTAuNSwgMC44NjYpIOOBquOBqVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttaW49MF0g6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Gu5LiL6ZmQ5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFttYXg9MzYwXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIrpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOODqeODs+ODgOODoOWMluOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHJhbmRvbShtaW4sIG1heCwgbGVuKSB7XHJcbiAgICB2YXIgZGVncmVlID0gUmFuZG9tLnJhbmRmbG9hdChtaW4gfHwgMCwgbWF4IHx8IDM2MCk7XHJcbiAgICB2YXIgcmFkID0gZGVncmVlKk1hdGguREVHX1RPX1JBRDtcclxuICAgIHZhciBsZW4gPSBsZW4gfHwgMTtcclxuXHJcbiAgICB0aGlzLnggPSBNYXRoLmNvcyhyYWQpKmxlbjtcclxuICAgIHRoaXMueSA9IE1hdGguc2luKHJhZCkqbGVuO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5vcm1hbGl6ZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOCkuato+imj+WMluOBl+OBvuOBmeOAguOBmeOBquOCj+OBoeOAgXRoaXMg44Go5ZCM44GY5pa55ZCR44Gn5aSn44GN44GV44GMMeOBruODmeOCr+ODiOODq+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYxLm5vcm1hbGl6ZSgpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMC42LCAwLjgpXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOato+imj+WMluOBl+OBn+ODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIG5vcm1hbGl6ZSgpIHtcclxuICAgIHRoaXMuZGl2KHRoaXMubGVuZ3RoKCkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvU3RyaW5nXHJcbiAgICogdGhpcyDjgpIgSlNPTiDlvaLlvI/jgafooajnj77jgZfjgZ/mloflrZfliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDQpO1xyXG4gICAqICAgICB2MS50b1N0cmluZygpOyAvLyA9PiBcInt4OjMsIHk6NH1cIlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBKU09OIOaWh+Wtl+WIl1xyXG4gICAqL1xyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIFwie3g6e3h9LCB5Ont5fX1cIi5mb3JtYXQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldERpcmVjdGlvblxyXG4gICAqIHRoaXMg44Gu44GK44GK44KI44Gd44Gu5pa55ZCR44KS56S644GX44Gf5paH5a2X5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjEuZ2V0RGlyZWN0aW9uKCk7IC8vID0+IFwidXBcIlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSDmlrnlkJHjgpLooajjgZnmloflrZfliJfvvIhcInVwXCIsIFwicmlnaHRcIiwgXCJkb3duXCIsIFwibGVmdFwi77yJXHJcbiAgICovXHJcbiAgZ2V0RGlyZWN0aW9uKCkge1xyXG4gICAgdmFyIGFuZ2xlID0gdGhpcy50b0RlZ3JlZSgpO1xyXG4gICAgaWYgKGFuZ2xlIDwgNDUpIHtcclxuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAxMzUpIHtcclxuICAgICAgcmV0dXJuIFwiZG93blwiO1xyXG4gICAgfSBlbHNlIGlmIChhbmdsZSA8IDIyNSkge1xyXG4gICAgICByZXR1cm4gXCJsZWZ0XCJcclxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPCAzMTUpIHtcclxuICAgICAgcmV0dXJuIFwidXBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcInJpZ2h0XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvQW5nbGVcclxuICAgKiB0aGlzIOOBqCB4IOi7uOOBqOOBruinkuW6pu+8iOODqeOCuOOCouODs+WNmOS9je+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDApO1xyXG4gICAqICAgICB2MS50b0FuZ2xlKCk7IC8vID0+IDMuMTQxNTlcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g44OZ44Kv44OI44Or44Gu6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJXHJcbiAgICovXHJcbiAgdG9BbmdsZSgpIHtcclxuICAgIHZhciByYWQgPSBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIHJldHVybiAocmFkICsgTWF0aC5QSSoyKSUoTWF0aC5QSSoyKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBmcm9tQW5nbGVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6KeS5bqm77yI44Op44K444Ki44Oz5Y2Y5L2N77yJ44Go5aSn44GN44GV44KS5oyH5a6a44GX44Gm44OZ44Kv44OI44Or44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIoKS5mcm9tQW5nbGUoTWF0aC5QSS80LCAyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDEuNDE0MiwgMS40MTQyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZCDop5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvIlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGZyb21BbmdsZShyYWQsIGxlbikge1xyXG4gICAgbGVuID0gbGVuIHx8IDE7XHJcbiAgICB0aGlzLnggPSBNYXRoLmNvcyhyYWQpKmxlbjtcclxuICAgIHRoaXMueSA9IE1hdGguc2luKHJhZCkqbGVuO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9EZWdyZWVcclxuICAgKiB0aGlzIOOBqCB4IOi7uOOBqOOBruinkuW6pu+8iOW6puWNmOS9je+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDIpO1xyXG4gICAqICAgICB2MS50b0FuZ2xlKCk7IC8vID0+IDEzNVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDjg5njgq/jg4jjg6vjga7op5LluqbvvIjluqbljZjkvY3vvIlcclxuICAgKi9cclxuICB0b0RlZ3JlZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvQW5nbGUoKS50b0RlZ3JlZSgpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGZyb21EZWdyZWVcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6KeS5bqm77yI5bqm5Y2Y5L2N77yJ44Go5aSn44GN44GV44KS5oyH5a6a44GX44Gm44OZ44Kv44OI44Or44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIoKS5mcm9tRGVncmVlKDYwLCAyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDEuNzMyKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlZyDop5LluqbvvIjluqbljZjkvY3vvIlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xlbj0xXSDlpKfjgY3jgZVcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIGZyb21EZWdyZWUoZGVnLCBsZW4pIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmZyb21BbmdsZShkZWcudG9SYWRpYW4oKSwgbGVuKTtcclxuICAgIHJldHVybiB0aGlzLmZyb21BbmdsZSh0b1JhZGlhbi5jYWxsKGRlZyksIGxlbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJvdGF0ZVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOCkuWbnui7ouOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYxLnJvdGF0ZShNYXRoLlBJLzIpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoLTEsIDMpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZCDop5LluqbvvIjjg6njgrjjgqLjg7PljZjkvY3vvIlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2NlbnRlcj0oMCwgMCldIOWbnui7ouOBruS4reW/g+W6p+aomVxyXG4gICAqIEByZXR1cm4ge051bWJlcn0g5Zue6Lui5b6M44Gu44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgcm90YXRlKHJhZCwgY2VudGVyKSB7XHJcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdmFyIHgxID0gdGhpcy54IC0gY2VudGVyLng7XHJcbiAgICB2YXIgeTEgPSB0aGlzLnkgLSBjZW50ZXIueTtcclxuICAgIHZhciB4MiA9IHgxICogTWF0aC5jb3MocmFkKSAtIHkxICogTWF0aC5zaW4ocmFkKTtcclxuICAgIHZhciB5MiA9IHgxICogTWF0aC5zaW4ocmFkKSArIHkxICogTWF0aC5jb3MocmFkKTtcclxuICAgIHRoaXMuc2V0KCBjZW50ZXIueCArIHgyLCBjZW50ZXIueSArIHkyICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1pblxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44Gu5ZCE6KaB57Sg44Gr5a++44GX44CB44KI44KK5bCP44GV44GE5pa544KS6KaB57Sg44Go44GZ44KL5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubWluKHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMigtMywgMSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG1pbihhLCBiKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIChhLnggPCBiLngpID8gYS54IDogYi54LFxyXG4gICAgICAoYS55IDwgYi55KSA/IGEueSA6IGIueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbWF4XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdjEg44GoIHYyIOOBruWQhOimgee0oOOBq+WvvuOBl+OAgeOCiOOCiuWkp+OBjeOBhOaWueOCkuimgee0oOOBqOOBmeOCi+aWsOOBl+OBhOODmeOCr+ODiOODq+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgMSk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKC0zLCAyKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm1heCh2MSwgdjIpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoMywgMik7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiAgc3RhdGljIG1heChhLCBiKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIChhLnggPiBiLngpID8gYS54IDogYi54LFxyXG4gICAgICAoYS55ID4gYi55KSA/IGEueSA6IGIueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqyB2MiDjgpLliqDnrpfjgZfjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMigtMywgMik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5hZGQodjEsIHYyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDAsIDMpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWKoOeul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGQobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMihsaHMueCtyaHMueCwgbGhzLnkrcmhzLnkpO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIHN1YlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBi+OCiSB2MiDjgpLmuJvjgZjjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOODmeOCr+ODiOODq+OBjOW6p+aomeOCkuihqOOBmeWgtOWQiOOAgTLjgaTnm67jga7luqfmqJnjgYvjgokx44Gk55uu44Gu5bqn5qiZ44G444Go5ZCR44GL44GG44OZ44Kv44OI44Or44GM5b6X44KJ44KM44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHYxLCB2Mik7IC8vIHBoaW5hLmdlb20uVmVjdG9yMig2LCAtMSk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjEg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYyIOODmeOCr+ODiOODq1xyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g5rib566X44GX44Gf57WQ5p6cXHJcbiAgICovXHJcbiAgc3RhdGljIHN1YihsaHMsIHJocykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKGxocy54LXJocy54LCBsaHMueS1yaHMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbXVsXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjga7lkITopoHntKDjgasgbiDjgpLkuZfjgZjjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubXVsKHYxLCAyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDYsIDIpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdiDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gbiDkuZfjgZjjgovlgKRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOS5l+eul+OBl+OBn+e1kOaenFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtdWwodiwgbikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHYueCpuLCB2Lnkqbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGl2XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6sgdiDjga7lkITopoHntKDjgpIgbiDjgaflibLjgaPjgZ/mlrDjgZfjgYTjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZGl2KHYxLCAyKTsgLy8gcGhpbmEuZ2VvbS5WZWN0b3IyKDEuNSwgMC41KVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IG4g5Ymy44KL5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDpmaTnrpfjgZfjgZ/ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgZGl2KHYsIG4pIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2Lngvbiwgdi55L24pO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIG5lZ2F0ZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5Y+N6Lui44GX44Gf5paw44GX44GE44OZ44Kv44OI44Or44KS55Sf5oiQ44GX44Gm6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCAxKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLm5lZ2F0ZSgpOyAvLyBwaGluYS5nZW9tLlZlY3RvcjIoLTMsIC0xKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlj43ou6LjgZfjgZ/jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgbmVnYXRlKHYpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigtdi54LCAtdi55KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkb3RcclxuICAgKiBAc3RhdGljXHJcbiAgICogMuasoeWFg+ODmeOCr+ODiOODqyB2MSDjgaggdjIg44Gu5YaF56mN44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigzLCA0KTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoLTIsIDIpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZG90KHYxLCB2MikgLy8gPT4gMlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOWGheepjVxyXG4gICAqL1xyXG4gIHN0YXRpYyBkb3QobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBsaHMueCAqIHJocy54ICsgbGhzLnkgKiByaHMueTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBjcm9zc1xyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYxIOOBqCB2MiDjga7lpJbnqY3vvIjjgq/jg63jgrnnqY3vvInjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIDLmrKHlhYPjg5njgq/jg4jjg6vjgafjga7lpJbnqY3jga/jg5njgq/jg4jjg6vjgafjgarjgY/mlbDlgKTjgpLov5TjgZnjgZPjgajjgavms6jmhI/jgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiAx44Gk55uu44Gu44OZ44Kv44OI44Or44GMMuOBpOebruOBruODmeOCr+ODiOODq+OCiOOCiuaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+ato+OBruWApOOBq+OBquOCiuOAgeWPjeaZguioiOWbnuOCiuOBq+OBguOCi+OBqOOBjeOBr+iyoOOBruWApOOBq+OBquOCiuOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDMsIDEpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuY3Jvc3ModjEsIHYyKTsgLy8gPT4gLThcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDlpJbnqY1cclxuICAgKi9cclxuICBzdGF0aWMgY3Jvc3MobGhzLCByaHMpIHtcclxuICAgIHJldHVybiAobGhzLngqcmhzLnkpIC0gKGxocy55KnJocy54KTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBrui3nembouOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIuZGlzdGFuY2UodjEsIHYyKTsgLy8gPT4gNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6JcclxuICAgKi9cclxuICBzdGF0aWMgZGlzdGFuY2UobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KGxocy54LXJocy54LCAyKSArIE1hdGgucG93KGxocy55LXJocy55LCAyKSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBkaXN0YW5jZVNxdWFyZWRcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuW6p+aomeOBqOOBv+OBquOBl+OBn+OBqOOBjeOBrjLngrnplpPjga7ot53pm6Ljga7oh6rkuZfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEsIDIpO1xyXG4gICAqICAgICB2MiA9IHBoaW5hLmdlb20uVmVjdG9yMig0LCA2KTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmRpc3RhbmNlU3F1YXJlZCh2MSwgdjIpOyAvLyA9PiAyNVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7ot53pm6Ljga7oh6rkuZdcclxuICAgKi9cclxuICBzdGF0aWMgZGlzdGFuY2VTcXVhcmVkKGxocywgcmhzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3cobGhzLngtcmhzLngsIDIpICsgTWF0aC5wb3cobGhzLnktcmhzLnksIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtYW5oYXR0YW5EaXN0YW5jZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiB2MSDjgaggdjIg44KS5bqn5qiZ44Go44G/44Gq44GX44Gf44Go44GN44GuMueCuemWk+OBruODnuODs+ODj+ODg+OCv+ODs+i3nembou+8iOi7uOOBq+W5s+ihjOOBq+mAsuOCgOOBqOOBjeOBruacgOefrei3nembou+8ieOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMSwgMik7XHJcbiAgICogICAgIHYyID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIDYpO1xyXG4gICAqICAgICBwaGluYS5nZW9tLlZlY3RvcjIubWFuaGF0dGFuRGlzdGFuY2UodjEsIHYyKTsgLy8gPT4gN1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IDLngrnplpPjga7jg57jg7Pjg4/jg4Pjgr/jg7Pot53pm6JcclxuICAgKi9cclxuICBzdGF0aWMgbWFuaGF0dGFuRGlzdGFuY2UobGhzLCByaHMpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhsaHMueC1yaHMueCkgKyBNYXRoLmFicyhsaHMueS1yaHMueSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgbm9ybWFsXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIHYxIOOBqCB2MiDjgpLluqfmqJnjgajjgb/jgarjgZfjgZ/jgajjgY3jga7jgIF2MiDjgYvjgokgdjEg44Gr5ZCR44GL44GG44OZ44Kv44OI44Or44Gr5a++44GZ44KL5rOV57ea44OZ44Kv44OI44Or44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5ub3JtYWwodjEsIHYyKTsgLy8gPT4gcGhpbmEuZ2VvbS5WZWN0b3IyKDQsIC0zKVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYxIOW6p+aomeOCkuihqOOBmeODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MiDluqfmqJnjgpLooajjgZnjg5njgq/jg4jjg6tcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlZlY3RvcjJ9IOazlee3muODmeOCr+ODiOODq1xyXG4gICAqL1xyXG4gIHN0YXRpYyBub3JtYWwoYSwgYikge1xyXG4gICAgdmFyIHRlbXAgPSBWZWN0b3IyLnN1YihhLCBiKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoLXRlbXAueSwgdGVtcC54KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVmbGVjdFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5aOB44G444Gu5YWl5bCE44OZ44Kv44OI44Or44Go44GX44Gm44CB5aOB44Gr5Y+N5bCE44GX44Gf6Zqb44Gu44OZ44Kv44OI44Or77yI5Y+N5bCE44OZ44Kv44OI44Or77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDlo4Hjga7lkJHjgY3jga/ms5Xnt5rjg5njgq/jg4jjg6sgbm9ybWFsIOOBq+OCiOOBo+OBpuihqOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgMyk7XHJcbiAgICogICAgIG5vcm1hbCA9IHBoaW5hLmdlb20uVmVjdG9yMigtMSwgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5yZWZsZWN0KHYxLCBub3JtYWwpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMiwgNSlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOWFpeWwhOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBub3JtYWwg5aOB44Gu5rOV57ea44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlj43lsITjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgcmVmbGVjdCh2LCBub3JtYWwpIHtcclxuICAgIHZhciBsZW4gPSBWZWN0b3IyLmRvdCh2LCBub3JtYWwpO1xyXG4gICAgdmFyIHRlbXA9IFZlY3RvcjIubXVsKG5vcm1hbCwgMipsZW4pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gVmVjdG9yMi5zdWIodiwgdGVtcCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgd2FsbFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44OrIHYg44KS5aOB44G444Gu5YWl5bCE44OZ44Kv44OI44Or44Go44GX44Gm44CB5aOB44Gr5rK/44Gj44Gf44OZ44Kv44OI44Or77yI5aOB44Ga44KK44Kv44OI44Or77yJ44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDlo4Hjga7lkJHjgY3jga/ms5Xnt5rjg5njgq/jg4jjg6sgbm9ybWFsIOOBq+OCiOOBo+OBpuihqOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgdjEgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgMyk7XHJcbiAgICogICAgIG5vcm1hbCA9IHBoaW5hLmdlb20uVmVjdG9yMigtMSwgMSk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi53YWxsKHYxLCBub3JtYWwpOyAvLyA9PiBwaGluYS5nZW9tLlZlY3RvcjIoMywgNClcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2IOWFpeWwhOODmeOCr+ODiOODq1xyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBub3JtYWwg5aOB44Gu5rOV57ea44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDlo4HjgZrjgorjg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBzdGF0aWMgd2FsbCh2LCBub3JtYWwpIHtcclxuICAgIHZhciBsZW4gPSBWZWN0b3IyLmRvdCh2LCBub3JtYWwpO1xyXG4gICAgdmFyIHRlbXA9IFZlY3RvcjIubXVsKG5vcm1hbCwgbGVuKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIFZlY3RvcjIuc3ViKHYsIHRlbXApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGxlcnBcclxuICAgKiBAc3RhdGljXHJcbiAgICogdjEg44GoIHYyIOOCkuWqkuS7i+WkieaVsCB0IOOBp+e3muW9ouijnOmWk+OBl+OBvuOBmeOAglxyXG4gICAqIHQ9MC41IOOBpyB2MSDjgaggdjIg44Gu5Lit6ZaT44OZ44Kv44OI44Or44KS5rGC44KB44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICB2MSA9IHBoaW5hLmdlb20uVmVjdG9yMigxLCAyKTtcclxuICAgKiAgICAgdjIgPSBwaGluYS5nZW9tLlZlY3RvcjIoNCwgNik7XHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5sZXJwKHYxLCB2MiwgMC41KTsgLy8gPT4gKDIuNSwgNClcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5WZWN0b3IyLmxlcnAodjEsIHYyLCAwKTsgLy8gPT4gKDEsIDIpXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5sZXJwKHYxLCB2MiwgMSk7IC8vID0+ICg0LCA2KVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSB2MSDjg5njgq/jg4jjg6tcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gdjIg44OZ44Kv44OI44OrXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHQg5aqS5LuL5aSJ5pWwXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDnt5rlvaLoo5zplpPjga7ntZDmnpxcclxuICAgKi9cclxuICBzdGF0aWMgbGVycChhLCBiLCB0KSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgIGEueCArIChiLngtYS54KSp0LFxyXG4gICAgICBhLnkgKyAoYi55LWEueSkqdFxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBzbGVycFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDoo5zplpPvvIjmnKrlrp/oo4XvvIlcclxuICAgKi9cclxuICBzdGF0aWMgc2xlcnAobGhzLCByaHMsIHQpIHtcclxuICAgICAgLy8gVE9ETzpcclxuICAgICAgLy8gY29zLi4uXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHJhbmRvbVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDop5LluqbjgYwgbWluIOOBi+OCiSBtYXgg44Gu56+E5Zuy77yI5bqm5Y2Y5L2N77yJ44Gn5aSn44GN44GV44GMIGxlbiDjga7jg6njg7Pjg4Djg6Djgarjg5njgq/jg4jjg6vjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHBoaW5hLmdlb20uVmVjdG9yMi5yYW5kb20oOTAsIDE4MCwgMSk7IC8vID0+IHBoaW5hLmdlb20uVmVjdG9yMigtMC41LCAwLjg2Nikg44Gq44GpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21pbj0wXSDop5LluqbvvIjluqbljZjkvY3vvInjga7kuIvpmZDlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW21heD0zNjBdIOinkuW6pu+8iOW6puWNmOS9je+8ieOBruS4iumZkOWApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuPTFdIOWkp+OBjeOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uVmVjdG9yMn0g55Sf5oiQ44GX44Gf44OZ44Kv44OI44OrXHJcbiAgICovXHJcbiBzdGF0aWMgcmFuZG9tKG1pbiwgbWF4LCBsZW4pIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMigpLnJhbmRvbShtaW4sIG1heCkubXVsKGxlbnx8MSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gWkVSTyDjgrzjg63jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLlpFUk8gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7VmVjdG9yMn0gTEVGVCDlt6bmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLkxFRlQgPSBuZXcgVmVjdG9yMigtMSwgMCk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IFJJR0hUIOWPs+aWueWQkeOBruWNmOS9jeODmeOCr+ODiOODq1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcblZlY3RvcjIuUklHSFQ9IG5ldyBWZWN0b3IyKDEsIDApO1xyXG4vKipcclxuICogQHByb3BlcnR5IHtWZWN0b3IyfSBVUCDkuIrmlrnlkJHjga7ljZjkvY3jg5njgq/jg4jjg6tcclxuICogQHJlYWRvbmx5XHJcbiAqL1xyXG5WZWN0b3IyLlVQICAgPSBuZXcgVmVjdG9yMigwLCAtMSk7XHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1ZlY3RvcjJ9IERPV04g5LiL5pa55ZCR44Gu5Y2Y5L2N44OZ44Kv44OI44OrXHJcbiAqIEByZWFkb25seVxyXG4gKi9cclxuVmVjdG9yMi5ET1dOID0gbmV3IFZlY3RvcjIoMCwgMSk7XG5cbi8vIGltcG9ydCB7IFJlY3QgfSBmcm9tIFwiLi9yZWN0XCI7XHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uQ2lyY2xlXHJcbiAqICMg5YaG6aCY5Z+f44KS6KGo44GZ44Kv44Op44K5XHJcbiAqIOOCreODo+ODs+ODkOOCueS4iuOBruWGhumgmOWfn+OCkuaJseOBhuOCr+ODqeOCueOBp+OBmeOAglxyXG4gKiBcclxuICovXHJcbmNsYXNzIENpcmNsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB4XHJcbiAgICog5YaG44Gu5Lit5b+D44GuIHgg5bqn5qiZXHJcbiAgICovXHJcbiAgLy8geDogMCxcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0geVxyXG4gICAqIOWGhuOBruS4reW/g+OBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIC8vIHk6IDAsXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJhZGl1c1xyXG4gICAqIOWGhuOBruWNiuW+hFxyXG4gICAqL1xyXG4gIC8vIHJhZGl1czogMzIsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW5pdFxyXG4gICAqIOWGhumgmOWfn+OBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzIsIDY0LCAxMjgpO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5YaG44Gu5Lit5b+D44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5YaG44Gu5Lit5b+D44GuIHkg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJhZGl1cyDljYrlvoRcclxuICAgKiBAcmV0dXJuIHtwaGluYS5nZW9tLlJlY3R9IOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHJhZGl1cykge1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDMyO1xyXG4gICAgdGhpcy5zZXQoeCwgeSwgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE5YCk44KS5YaN6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgzMiwgNjQsIDEyOCk7XHJcbiAgICogICAgIGNpcmNsZS5zZXQoMTAwLCAyMDAsIDMyKTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOWGhuOCkuWbsuOBhuefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOWGhuOCkuWbsuOBhuefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByYWRpdXMg5Y2K5b6EXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5DaXJjbGV9IOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIHNldCh4LCB5LCByYWRpdXMpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1vdmVUb1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDlhobpoJjln5/jgpLluqfmqJkgKHgsIHkpIOOBq+enu+WLleOBl+OBvuOBmeOAgih4LCB5KSDjga/lhobjga7kuK3lv4PjgpLooajjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDMwMCwgMzAwLCA0MCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiAyNjBcclxuICAgKiAgICAgY2lyY2xlLm1vdmVUbygxMDAsIDEwMCk7XHJcbiAgICogICAgIGNpcmNsZS5sZWZ0OyAvLyA9PiA2MFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg56e75YuV5YWI44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg56e75YuV5YWI44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIG1vdmVCeVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiDlhobpoJjln5/jgpIgKHgsIHkpIOOBoOOBkeenu+WLleOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzAwLCAzMDAsIDQwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDI2MFxyXG4gICAqICAgICBjaXJjbGUubW92ZUJ5KDEwMCwgMTAwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDQ2MFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg56e75YuV6YeP44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg56e75YuV6YeP44GuIHkg5bqn5qiZXHJcbiAgICovXHJcbiAgbW92ZUJ5KHgsIHkpIHtcclxuICAgIHRoaXMueCArPSB4O1xyXG4gICAgdGhpcy55ICs9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgY29udGFpbnNcclxuICAgKiDluqfmqJkgKHgsIHkpIOOBjOWGhumgmOWfn+OBruS4reOBq+WQq+OBvuOCjOOCi+OBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMzAwLCAzMDAsIDEwMCk7XHJcbiAgICogICAgIGNpcmNsZS5jb250YWlucygzNTAsIDM1MCk7IC8vID0+ICB0cnVlXHJcbiAgICogICAgIGNpcmNsZS5jb250YWlucygzNTAsIDQwMCk7IC8vID0+IGZhbHNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDliKTlrprjgZnjgovlr77osaHjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDliKTlrprjgZnjgovlr77osaHjga4geSDluqfmqJlcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmjIflrprjgZfjgZ/luqfmqJnjgYzlhobpoJjln5/jga7kuK3jgavlkKvjgb7jgozjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICB2YXIgbGVuWCA9IHRoaXMueC14O1xyXG4gICAgdmFyIGxlblkgPSB0aGlzLnkteTtcclxuICAgIHZhciBsZW5TcXVhcmVkID0gKGxlblgqbGVuWCkrKGxlblkqbGVuWSk7XHJcblxyXG4gICAgcmV0dXJuIGxlblNxdWFyZWQgPD0gdGhpcy5yYWRpdXMqdGhpcy5yYWRpdXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICogdGhpcyDjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDUwLCAxMDAsIDQwKTtcclxuICAgKiAgICAgY2lyY2xlMiA9IGNpcmNsZS5jbG9uZSgpO1xyXG4gICAqICAgICBjaXJjbGUyLnggPT0gY2lyY2xlLng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf5YaG6aCY5Z+fXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IENpcmNsZSh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0b1JlY3RcclxuICAgKiDlhobjgavlpJbmjqXjgZnjgovmraPmlrnlvaLjgpLooajjgZnnn6nlvaLpoJjln5/jgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDUwLCAxMDAsIDQwKTtcclxuICAgKiAgICAgcmVjdCA9IGNpcmNsZS50b1JlY3QoKTtcclxuICAgKiAgICAgcmVjdC54OyAvLyA9PiAxMFxyXG4gICAqICAgICByZWN0Lnk7IC8vID0+IDYwXHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDgwXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOeUn+aIkOOBl+OBn+efqeW9oumgmOWfn1xyXG4gICAqL1xyXG4gIHRvUmVjdCgpIHtcclxuICAgIC8vIOW+queSsOWPgueFp+WbnumBv+OBruOBn+OCgeOAgVJlY3TlgbTjgaflrprnvqlcclxuICAgIC8vIHZhciBzaXplID0gdGhpcy5zaXplO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBSZWN0KHRoaXMueCAtIHRoaXMucmFkaXVzLCB0aGlzLnkgLSB0aGlzLnJhZGl1cywgc2l6ZSwgc2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvQXJyYXlcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuimgee0oOOBqOOBmeOCi+mFjeWIl+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoNTAsIDEwMCwgNDApO1xyXG4gICAqICAgICByZWN0LnRvQXJyYXkoKTsgLy8gPT4gWzUwLCAxMDAsIDQwXVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gICAqL1xyXG4gIHRvQXJyYXkoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1c107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gbGVmdFxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOOCreODo+ODs+ODkOOCueW3puerr+OBi+OCieWGhuOBruW3puerr+OBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBjaXJjbGUgPSBwaGluYS5nZW9tLkNpcmNsZSgyMDAsIDMwMCwgMTAwKTtcclxuICAgKiAgICAgY2lyY2xlLmxlZnQ7IC8vID0+IDEwMFxyXG4gICAqICAgICBjaXJjbGUudG9wOyAvLyA9PiAyMDBcclxuICAgKiAgICAgY2lyY2xlLnJpZ2h0OyAvLyA9PiAzMDBcclxuICAgKiAgICAgY2lyY2xlLmJvdHRvbTsgLy8gPT4gNDAwXHJcbiAgICovXHJcbiAgZ2V0IGxlZnQoKSAgIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMucmFkaXVzOyB9XHJcbiAgc2V0IGxlZnQodikgIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcFxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOOCreODo+ODs+ODkOOCueS4iuerr+OBi+OCieWGhuOBruS4iuerr+OBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHRvcCgpICAgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5yYWRpdXM7IH1cclxuICBzZXQgdG9wKHYpICB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByaWdodFxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIOOCreODo+ODs+ODkOOCueWPs+err+OBi+OCieWGhuOBruWPs+err+OBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHJpZ2h0KCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLnJhZGl1czsgfVxyXG4gIHNldCByaWdodCh2KSAge1xyXG4gICAgLy8gVE9ETzogXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gYm90dG9tXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog44Kt44Oj44Oz44OQ44K55LiL56uv44GL44KJ5YaG44Gu5LiL56uv44G+44Gn44Gu6Led6ZuiXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgYm90dG9tKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLnJhZGl1czsgfVxyXG4gIHNldCBib3R0b20odikgIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuICAgIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzaXplXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICog5YaG44Gu55u05b6EXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgc2l6ZSgpICAgeyByZXR1cm4gdGhpcy5yYWRpdXMqMjsgfVxyXG4gIHNldCBzaXplKHYpICB7XHJcbiAgICAvLyBUT0RPOiDmpJzoqI7kuK1cclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nZW9tLlJlY3RcclxuICogIyDnn6nlvaLpoJjln5/jgpLooajjgZnjgq/jg6njgrlcclxuICog44Kt44Oj44Oz44OQ44K55LiK44Gu55+p5b2i6aCY5Z+f44KS5omx44GG44Kv44Op44K544Gn44GZ44CCXHJcbiAqIFxyXG4gKi9cclxuY2xhc3MgUmVjdCB7XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB4XHJcbiAgLy8gICog55+p5b2i44Gu5bem5LiK6aCC54K544GuIHgg5bqn5qiZXHJcbiAgLy8gICovXHJcbiAgLy8geDogMCxcclxuICAvLyAvKipcclxuICAvLyAgKiBAcHJvcGVydHkge051bWJlcn0geVxyXG4gIC8vICAqIOefqeW9ouOBruW3puS4iumggueCueOBriB5IOW6p+aomVxyXG4gIC8vICAqL1xyXG4gIC8vIHk6IDAsXHJcbiAgLy8gLyoqXHJcbiAgLy8gICogQHByb3BlcnR5IHtOdW1iZXJ9IHdpZHRoXHJcbiAgLy8gICog55+p5b2i44Gu5bmFXHJcbiAgLy8gICovXHJcbiAgLy8gd2lkdGg6IDMyLFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBoaWdodFxyXG4gIC8vICAqIOefqeW9ouOBrumrmOOBlVxyXG4gIC8vICAqL1xyXG4gIC8vIGhlaWdodDogMzIsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaW5pdFxyXG4gICAqIOefqeW9oumgmOWfn+OBruOCs+ODs+OCueODiOODqeOCr+OCv+OBp+OBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOefqeW9ouOBruW3puS4iumggueCueOBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOefqeW9ouOBruW3puS4iumggueCueOBriB5IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0IOmrmOOBlVxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uUmVjdH0g55+p5b2i6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy54ID0gMDtcclxuICAgIHRoaXMueSA9IDA7XHJcbiAgICB0aGlzLndpZHRoID0gMzI7XHJcbiAgICB0aGlzLmhlaWdodCA9IDMyO1xyXG4gICAgdGhpcy5zZXQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuWGjeioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKiAgICAgcmVjdC5zZXQoMCwgMTYsIDMyLCA2NCk7XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnn6nlvaLjga7lt6bkuIrpoILngrnjga4geSDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGgg5bmFXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCDpq5jjgZVcclxuICAgKi9cclxuICBzZXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZVRvXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OCkuW6p+aomSAoeCwgeSkg44Gr56e75YuV44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0LmNlbnRlclg7IC8vID0+IDI0XHJcbiAgICogICAgIHJlY3QubW92ZVRvKDAsIDApO1xyXG4gICAqICAgICByZWN0LmNlbnRlclg7IC8vID0+IDE2XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0geCDnp7vli5XlhYjjga4geCDluqfmqJlcclxuICAgKiBAcGFyYW0ge051bWJlcn0geSDnp7vli5XlhYjjga4geSDluqfmqJlcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgbW92ZUJ5XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OCkiAoeCwgeSkg44Gg44GR56e75YuV44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDgsIDE2LCAzMiwgNjQpO1xyXG4gICAqICAgICByZWN0Lm1vdmVCeSgxMCwgLTEwKTtcclxuICAgKiAgICAgcmVjdC54OyAvLyA9PiAxOFxyXG4gICAqICAgICByZWN0Lnk7IC8vID0+IDZcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IOenu+WLlemHj+OBriB4IOW6p+aomVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IOenu+WLlemHj+OBriB5IOW6p+aomVxyXG4gICAqL1xyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLnggKz0geDtcclxuICAgIHRoaXMueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNldFNpenNlXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OBruW5heOBqOmrmOOBleOCkuWkieabtOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCg4LCAxNiwgMzIsIDY0KTtcclxuICAgKiAgICAgcmVjdC5zZXRTaXplKDEwLCAyMCk7XHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDEwXHJcbiAgICogICAgIHJlY3QuaGVpZ2h0OyAvLyA9PiAyMFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQg6auY44GVXHJcbiAgICovXHJcbiAgc2V0U2l6ZSh3LCBoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gdztcclxuICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBwYWRkaW5nXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIOefqeW9oumgmOWfn+OBruS4reOBq+ODkeODh+OCo+ODs+OCsOmgmOWfn+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICog55+p5b2i6aCY5Z+f6Ieq5L2T44Gu44K144Kk44K644Gv44OR44OH44Kj44Oz44Kw6aCY5Z+f44Gu5YiG44Gg44GR5bCP44GV44GP44Gq44KK44G+44GZ44CCICBcclxuICAgKiDluYXjga7mjIflrprmlrnms5Xjga8gQ1NTIOOBriBwYWRkaW5nIOaMh+WumuOBqOWQjOOBmOOCiOOBhuOBq+aZguioiOWbnuOCiuOBp+OBmeOAgiAgXHJcbiAgICog5byV5pWw44GMMeOBpOOBruWgtOWQiOOBr+S4iuS4i+W3puWPs+OBruWApOOAgeW8leaVsOOBjDLjgaTjga7loLTlkIjjga/kuIrkuIvjgajlt6blj7Pjga7lgKTjgIHlvJXmlbDjgYzvvJPjgaTjga7loLTlkIjjga/kuIrjgIHlt6blj7PjgIHkuIvjga7lgKTjgajop6Pph4jjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoNTAsIDEwMCwgMTUwLCAyMDApO1xyXG4gICAqICAgICByZWN0LnBhZGRpbmcoMTApO1xyXG4gICAqICAgICByZWN0Lng7IC8vID0+IDYwXHJcbiAgICogICAgIHJlY3QueTsgLy8gPT4gMTEwXHJcbiAgICogICAgIHJlY3Qud2lkdGg7IC8vID0+IDEzMFxyXG4gICAqICAgICByZWN0LmhlaWdodDsgLy8gPT4gMTgwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gdG9wIOS4iui+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCDlj7Povrrjga7jg5Hjg4fjgqPjg7PjgrDluYVcclxuICAgKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIOS4i+i+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IOW3pui+uuOBruODkeODh+OCo+ODs+OCsOW5hVxyXG4gICAqL1xyXG4gIHBhZGRpbmcodG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XHJcbiAgICAvLyBjc3Mg44GuIHBhZGRpbmcg44Gr5ZCI44KP44Gb44Gm5pmC6KiI5Zue44KK44Gr44OR44Op44Oh44O844K/6Kq/5pW0XHJcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRvcCA9IHJpZ2h0ID0gYm90dG9tID0gbGVmdCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRvcCAgICAgPSBib3R0b20gPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgcmlnaHQgICA9IGxlZnQgICA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRvcCAgICAgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgcmlnaHQgICA9IGxlZnQgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgYm90dG9tICA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy54ICs9IGxlZnQ7XHJcbiAgICB0aGlzLnkgKz0gdG9wO1xyXG4gICAgdGhpcy53aWR0aCAtPSBsZWZ0K3JpZ2h0O1xyXG4gICAgdGhpcy5oZWlnaHQtPSB0b3AgK2JvdHRvbTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNvbnRhaW5zXHJcbiAgICog5bqn5qiZICh4LCB5KSDjgYwg55+p5b2i6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0ID0gcGhpbmEuZ2VvbS5SZWN0KDUwLCAxMDAsIDE1MCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC5jb250YWlucygzNSwgNjgpOyAvLyA9PiAgdHJ1ZVxyXG4gICAqICAgICByZWN0LmNvbnRhaW5zKDIwMCwgNjgpOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgg5Yik5a6a44GZ44KL5a++6LGh44GuIHgg5bqn5qiZXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkg5Yik5a6a44GZ44KL5a++6LGh44GuIHkg5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5oyH5a6a44GX44Gf5bqn5qiZ44GM55+p5b2i6aCY5Z+f44Gu5Lit44Gr5ZCr44G+44KM44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVmdCA8PSB4ICYmIHggPD0gdGhpcy5yaWdodCAmJiB0aGlzLnRvcCA8PSB5ICYmIHkgPD0gdGhpcy5ib3R0b207XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICogdGhpcyDjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoNTAsIDEwMCwgMTUwLCAyMDApO1xyXG4gICAqICAgICByZWN0MiA9IHJlY3QuY2xvbmUoKTtcclxuICAgKiAgICAgcmVjdDIueCA9PSByZWN0Lng7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf55+p5b2i6aCY5Z+fXHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9DaXJjbGVcclxuICAgKiDnn6nlvaLpoJjln5/lhoXjgavlj47jgb7jgovmnIDlpKfjga7lhobpoJjln5/jgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHJlY3QgPSBwaGluYS5nZW9tLlJlY3QoMzIsIDY0LCAxMDAsIDIwMCk7XHJcbiAgICogICAgIGNpcmNsZSA9IHJlY3QudG9DaXJjbGUoKTtcclxuICAgKiAgICAgY2lyY2xlLng7IC8vID0+IDgyXHJcbiAgICogICAgIGNpcmNsZS55OyAvLyA9PiAxNjRcclxuICAgKiAgICAgY2lyY2xlLnJhZGl1czsgLy8gPT4gNTBcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0g55Sf5oiQ44GX44Gf5YaG6aCY5Z+fXHJcbiAgICovXHJcbiAgdG9DaXJjbGUoKSB7XHJcbiAgICB2YXIgcmFkaXVzID0gKCh0aGlzLndpZHRoIDwgdGhpcy5oZWlnaHQpID8gdGhpcy53aWR0aCA6IHRoaXMuaGVpZ2h0KS8yO1xyXG4gICAgcmV0dXJuIG5ldyBDaXJjbGUodGhpcy5jZW50ZXJYLCB0aGlzLmNlbnRlclksIHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRvQXJyYXlcclxuICAgKiB0aGlzIOOBruWQhOWApOOCkuimgee0oOOBqOOBmeOCi+mFjeWIl+OCkueUn+aIkOOBl+OBpui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgzMiwgNjQsIDEwMCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC50b0FycmF5KCk7IC8vID0+IFszMiwgNjQsIDEwMCwgMjAwXVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7TnVtYmVyW119IOeUn+aIkOOBl+OBn+mFjeWIl1xyXG4gICAqL1xyXG4gIHRvQXJyYXkoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gbGVmdFxyXG4gICAqIOOCreODo+ODs+ODkOOCueW3puerr+OBi+OCieefqeW9oumgmOWfn+OBruW3pui+uuOBvuOBp+OBrui3nembolxyXG4gICAqXHJcbiAgICogbGVmdCDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7luYXvvIh3aWR0aO+8ieOBjOiHquWLleeahOOBq+iqv+aVtOOBleOCjOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgzMiwgNjQsIDEwMCwgMjAwKTtcclxuICAgKiAgICAgcmVjdC5sZWZ0OyAvLyA9PiAzMlxyXG4gICAqICAgICByZWN0LndpZHRoOyAvLyA9PiAxMDBcclxuICAgKiAgICAgcmVjdC5yaWdodDsgLy8gPT4gMTMyXHJcbiAgICogICAgIFxyXG4gICAqICAgICByZWN0LmxlZnQgPSA0MjtcclxuICAgKiAgICAgcmVjdC53aWR0aDsgLy8gPT4gOTBcclxuICAgKi9cclxuICBnZXQgbGVmdCgpICAgeyByZXR1cm4gdGhpcy54OyB9XHJcbiAgc2V0IGxlZnQodikgIHsgdGhpcy53aWR0aCAtPSB2LXRoaXMueDsgdGhpcy54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gdG9wXHJcbiAgICog44Kt44Oj44Oz44OQ44K55LiK56uv44GL44KJ55+p5b2i6aCY5Z+f44Gu5LiK6L6644G+44Gn44Gu5L2N572uXHJcbiAgICpcclxuICAgKiB0b3Ag44KS5aSJ5pu044GZ44KL44Go55+p5b2i6aCY5Z+f44Gu6auY44GV77yIaGVpZ2h077yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHRvcCgpICAgeyByZXR1cm4gdGhpcy55OyB9XHJcbiAgc2V0IHRvcCh2KSAgeyB0aGlzLmhlaWdodCAtPSB2LXRoaXMueTsgdGhpcy55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gcmlnaHRcclxuICAgKiDjgq3jg6Pjg7Pjg5Djgrnlt6bnq6/jgYvjgonnn6nlvaLpoJjln5/jga7lj7Povrrjgb7jgafjga7ot53pm6JcclxuICAgKlxyXG4gICAqIHJpZ2h0IOOCkuWkieabtOOBmeOCi+OBqOefqeW9oumgmOWfn+OBruW5he+8iHdpZHRo77yJ44GM6Ieq5YuV55qE44Gr6Kq/5pW044GV44KM44G+44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IHJpZ2h0KCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoOyB9XHJcbiAgc2V0IHJpZ2h0KHYpICB7IHRoaXMud2lkdGggKz0gdi10aGlzLnJpZ2h0OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBib3R0b21cclxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnkuIrnq6/jgYvjgonnn6nlvaLpoJjln5/jga7kuIvovrrjgb7jgafjga7kvY3nva5cclxuICAgKlxyXG4gICAqIGJvdHRvbSDjgpLlpInmm7TjgZnjgovjgajnn6nlvaLpoJjln5/jga7pq5jjgZXvvIhoZWlnaHTvvInjgYzoh6rli5XnmoTjgavoqr/mlbTjgZXjgozjgb7jgZnjgIJcclxuICAgKi9cclxuICBnZXQgYm90dG9tKCkgICB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDsgfVxyXG4gIHNldCBib3R0b20odikgIHsgdGhpcy5oZWlnaHQgKz0gdi10aGlzLmJvdHRvbTsgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjZW50ZXJYXHJcbiAgICog55+p5b2i6aCY5Z+f44GuIHgg5bqn5qiZXHJcbiAgICpcclxuICAgKiDnj77mmYLngrnjgafjga/oqq3jgb/lj5bjgorlsILnlKjjgafjgZnjgIJcclxuICAgKi9cclxuICBnZXQgY2VudGVyWCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XHJcbiAgc2V0IGNlbnRlclgodikgIHtcclxuICAgIC8vIFRPRE86IOaknOiojuS4rVxyXG4gIH1cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gY2VudGVyWVxyXG4gICAqIOefqeW9oumgmOWfn+OBriB5IOW6p+aomVxyXG4gICAqXHJcbiAgICog54++5pmC54K544Gn44Gv6Kqt44G/5Y+W44KK5bCC55So44Gn44GZ44CCXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlclkoKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzI7IH1cclxuICBzZXQgY2VudGVyWSh2KSAge1xyXG4gICAgLy8gVE9ETzog5qSc6KiO5LitXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENpcmNsZS50b1JlY3RcclxuICog5b6q55Kw5Y+C54Wn44KS5Zue6YG/44GZ44KL44Gf44KB44CB44GT44GT44Gn5a6a576pXHJcbiAqL1xyXG5DaXJjbGUucHJvdG90eXBlLnRvUmVjdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xyXG4gIHJldHVybiBuZXcgUmVjdCh0aGlzLnggLSB0aGlzLnJhZGl1cywgdGhpcy55IC0gdGhpcy5yYWRpdXMsIHNpemUsIHNpemUpO1xyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdlb20uTWF0cml4MzNcclxuICogIyDooYzliJfjgq/jg6njgrlcclxuICogM3gz44Gu6KGM5YiX44KS6KGo44GZ44Kv44Op44K544Gn44GZ44CCXHJcbiAqIFxyXG4gKiA8cHJlPlxyXG4gKiB8IG0wMCBtMDEgbTAyIHxcclxuICogfCBtMTAgbTExIG0xMiB8XHJcbiAqIHwgbTIwIG0yMSBtMjIgfFxyXG4gKiA8L3ByZT5cclxuICovXHJcbmNsYXNzIE1hdHJpeDMzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbml0XHJcbiAgICog44Oe44OI44Oq44OD44Kv44K544Kv44Op44K544Gu44Kz44Oz44K544OI44Op44Kv44K/44Gn44GZ44CCXHJcbiAgICpcclxuICAgKiDlvJXmlbDjga8gbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMiDjga7poIbjgavmjIflrprjgZfjgb7jgZnjgIJcclxuICAgKiDlvJXmlbDjgYw55YCL44Gr5rqA44Gf44Gq44GE5aC05ZCI44Gv5Y2Y5L2N6KGM5YiX44KS55Sf5oiQ44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoKTtcclxuICAgKiAgICAgbWF0MS5tMDAgKyBtYXQyLm0wMDsgLy8gPT4gMlxyXG4gICAqICAgICBtYXQxLm0wMSAtIG1hdDIubTAxOyAvLyA9PiAyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlci4uLn0gbTAwLCBtMDEsLi4uIOWQhOimgee0oOOBruWApFxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOihjOWIl+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gOSkge1xyXG4gICAgICB0aGlzLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaWRlbnRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2Qgc2V0XHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIHRoaXMg44Gu5ZCE6KaB57Sg44Gu5YCk44KS5YaN6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoKTtcclxuICAgKiAgICAgbWF0Mi5zZXQoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDEudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyLi4ufSBtMDAsIG0wMSwuLi4g5ZCE6KaB57Sg44Gu5YCkXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6KGM5YiX44Kq44OW44K444Kn44Kv44OIXHJcbiAgICovXHJcbiAgc2V0KG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcclxuICAgIHRoaXMubTAwID0gbTAwOyB0aGlzLm0wMSA9IG0wMTsgdGhpcy5tMDIgPSBtMDI7XHJcbiAgICB0aGlzLm0xMCA9IG0xMDsgdGhpcy5tMTEgPSBtMTE7IHRoaXMubTEyID0gbTEyO1xyXG4gICAgdGhpcy5tMjAgPSBtMjA7IHRoaXMubTIxID0gbTIxOyB0aGlzLm0yMiA9IG0yMjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgaWRlbnRpdHlcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICogdGhpcyDjgpLljZjkvY3ooYzliJfjgavjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygpO1xyXG4gICAqICAgICBtYXQxLmlkZW50aXR5KCkudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOWNmOS9jeihjOWIl1xyXG4gICAqL1xyXG4gIGlkZW50aXR5KCkge1xyXG4gICAgdGhpcy5tMDAgPSAxOyB0aGlzLm0wMSA9IDA7IHRoaXMubTAyID0gMDtcclxuICAgIHRoaXMubTEwID0gMDsgdGhpcy5tMTEgPSAxOyB0aGlzLm0xMiA9IDA7XHJcbiAgICB0aGlzLm0yMCA9IDA7IHRoaXMubTIxID0gMDsgdGhpcy5tMjIgPSAxO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGNsb25lXHJcbiAgICogdGhpcyDjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZfjgabov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQyID0gbWF0MS5jbG9uZSgpO1xyXG4gICAqICAgICBtYXQxLnRvU3RyaW5nKCkgPT0gbWF0Mi50b1N0cmluZygpOyAvLyA9PiB0cnVlXHJcbiAgICogICAgIG1hdDEgPT0gbWF0MjsgLy8gPT4gZmFsc2VcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOihjOWIl+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXgzMyhcclxuICAgICAgdGhpcy5tMDAsIHRoaXMubTAxLCB0aGlzLm0wMixcclxuICAgICAgdGhpcy5tMTAsIHRoaXMubTExLCB0aGlzLm0xMixcclxuICAgICAgdGhpcy5tMjAsIHRoaXMubTIxLCB0aGlzLm0yMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZGV0ZXJtaW5hbnRcclxuICAgKiDooYzliJflvI/jgpLov5TjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDAsIC0yLCAwLCAtMSwgMywgMSwgNCwgMiwgMSk7XHJcbiAgICogICAgIG1hdDEuZGV0ZXJtaW5hbnQoKTsgLy8gPT4gLTEwXHJcbiAgICogICAgIG1hdDEuaWRlbnRpdHkoKS5kZXRlcm1pbmFudCgpOyAvLyA9PiAxXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOihjOWIl+W8j1xyXG4gICAqL1xyXG4gIGRldGVybWluYW50KCkge1xyXG4gICAgdmFyIG0wMCA9IHRoaXMubTAwOyB2YXIgbTAxID0gdGhpcy5tMDE7IHZhciBtMDIgPSB0aGlzLm0wMjtcclxuICAgIHZhciBtMTAgPSB0aGlzLm0xMDsgdmFyIG0xMSA9IHRoaXMubTExOyB2YXIgbTEyID0gdGhpcy5tMTI7XHJcbiAgICB2YXIgbTIwID0gdGhpcy5tMjA7IHZhciBtMjEgPSB0aGlzLm0yMTsgdmFyIG0yMiA9IHRoaXMubTIyO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbTAwKm0xMSptMjIgKyBtMTAqbTIxKm0wMiArIG0wMSptMTIqbTIwIC0gbTAyKm0xMSptMjAgLSBtMDEqbTEwKm0yMiAtIG0xMiptMjEqbTAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0cmFuc3Bvc2VcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6Lui572u6KGM5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5KTtcclxuICAgKiAgICAgbWF0MiA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgNCwgNywgMiwgNSwgOCwgMywgNiwgOSk7XHJcbiAgICogICAgIG1hdDEudHJhbnNwb3NlKCkudG9TdHJpbmcoKSA9PSBtYXQyLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3BoaW5hLmdlb20uTWF0cml4MzN9IOi7oue9ruihjOWIl1xyXG4gICAqL1xyXG4gIHRyYW5zcG9zZSgpIHtcclxuICAgIHZhciBzd2FwID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICB2YXIgdGVtcCA9IHRoaXNbYV07XHJcbiAgICAgIHRoaXNbYV0gPSB0aGlzW2JdO1xyXG4gICAgICB0aGlzW2JdID0gdGVtcDtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBzd2FwKCdtMDEnLCAnbTEwJyk7XHJcbiAgICBzd2FwKCdtMDInLCAnbTIwJyk7XHJcbiAgICBzd2FwKCdtMTInLCAnbTIxJyk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpbnZlcnRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog6YCG6KGM5YiX44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBtYXQxID0gcGhpbmEuZ2VvbS5NYXRyaXgzMygwLCAtMSwgMSwgLTEsIDQsIC0yLCAxLCAxLCAxKTtcclxuICAgKiAgICAgbWF0MiA9IG1hdDEuY2xvbmUoKS5pbnZlcnQoKTtcclxuICAgKiAgICAgbWF0MyA9IG1hdDEuY2xvbmUoKS5tdWx0aXBseShtYXQyKTtcclxuICAgKiAgICAgbWF0My50b1N0cmluZygpID09IHBoaW5hLmdlb20uTWF0cml4MzMuSURFTlRJVFkudG9TdHJpbmcoKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g6YCG6KGM5YiXXHJcbiAgICovXHJcbiAgaW52ZXJ0KCkge1xyXG4gICAgdmFyIG0wMCA9IHRoaXMubTAwOyB2YXIgbTAxID0gdGhpcy5tMDE7IHZhciBtMDIgPSB0aGlzLm0wMjtcclxuICAgIHZhciBtMTAgPSB0aGlzLm0xMDsgdmFyIG0xMSA9IHRoaXMubTExOyB2YXIgbTEyID0gdGhpcy5tMTI7XHJcbiAgICB2YXIgbTIwID0gdGhpcy5tMjA7IHZhciBtMjEgPSB0aGlzLm0yMTsgdmFyIG0yMiA9IHRoaXMubTIyO1xyXG5cclxuICAgIHZhciBkZXQgPSB0aGlzLmRldGVybWluYW50KCk7XHJcblxyXG4gICAgLy8gfG0wMCwgbTAxLCBtMDJ8XHJcbiAgICAvLyB8bTEwLCBtMTEsIG0xMnxcclxuICAgIC8vIHxtMjAsIG0yMSwgbTIyfFxyXG4gICAgdGhpcy5tMDAgPSAobTExKm0yMi1tMTIqbTIxKS9kZXQ7XHJcbiAgICB0aGlzLm0wMSA9IChtMTAqbTIyLW0xMiptMjApL2RldCotMTtcclxuICAgIHRoaXMubTAyID0gKG0xMCptMjEtbTExKm0yMCkvZGV0O1xyXG4gICAgXHJcbiAgICB0aGlzLm0xMCA9IChtMDEqbTIyLW0wMiptMjEpL2RldCotMTtcclxuICAgIHRoaXMubTExID0gKG0wMCptMjItbTAyKm0yMCkvZGV0O1xyXG4gICAgdGhpcy5tMTIgPSAobTAwKm0yMS1tMDEqbTIwKS9kZXQqLTE7XHJcbiAgICBcclxuICAgIHRoaXMubTIwID0gKG0wMSptMTItbTAyKm0xMSkvZGV0O1xyXG4gICAgdGhpcy5tMjEgPSAobTAwKm0xMi1tMDIqbTEwKS9kZXQqLTE7XHJcbiAgICB0aGlzLm0yMiA9IChtMDAqbTExLW0wMSptMTApL2RldDtcclxuICAgIFxyXG4gICAgdGhpcy50cmFuc3Bvc2UoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtdWx0aXBseVxyXG4gICAqIHRoaXMg44GrIG90aGVyIOOCkuS5l+OBmOOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTEsIDEsIC0xLCA0LCAtMiwgMSwgMSwgMSk7XHJcbiAgICogICAgIG1hdDIgPSBtYXQxLmNsb25lKCkuaW52ZXJ0KCk7XHJcbiAgICogICAgIG1hdDMgPSBtYXQxLmNsb25lKCkubXVsdGlwbHkobWF0Mik7XHJcbiAgICogICAgIG1hdDMudG9TdHJpbmcoKSA9PSBwaGluYS5nZW9tLk1hdHJpeDMzLklERU5USVRZLnRvU3RyaW5nKCk7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5NYXRyaXgzM30gb3RoZXIg5LmX44GY44KL6KGM5YiXXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5NYXRyaXgzM30g5LmX566X57WQ5p6c44Gu6KGM5YiXXHJcbiAgICovXHJcbiAgbXVsdGlwbHkobWF0KSB7XHJcbiAgICB2YXIgdG0gPSB0aGlzLm07XHJcbiAgICB2YXIgb20gPSBtYXQubTtcclxuXHJcbiAgICB2YXIgYTAwID0gdGhpcy5tMDAsIGEwMSA9IHRoaXMubTAxLCBhMDIgPSB0aGlzLm0wMjtcclxuICAgIHZhciBhMTAgPSB0aGlzLm0xMCwgYTExID0gdGhpcy5tMTEsIGExMiA9IHRoaXMubTEyO1xyXG4gICAgdmFyIGEyMCA9IHRoaXMubTIwLCBhMjEgPSB0aGlzLm0yMSwgYTIyID0gdGhpcy5tMjI7XHJcbiAgICB2YXIgYjAwID0gbWF0Lm0wMCwgYjAxID0gbWF0Lm0wMSwgYjAyID0gbWF0Lm0wMjtcclxuICAgIHZhciBiMTAgPSBtYXQubTEwLCBiMTEgPSBtYXQubTExLCBiMTIgPSBtYXQubTEyO1xyXG4gICAgdmFyIGIyMCA9IG1hdC5tMjAsIGIyMSA9IG1hdC5tMjEsIGIyMiA9IG1hdC5tMjI7XHJcblxyXG4gICAgdGhpcy5tMDAgPSBhMDAqYjAwICsgYTAxKmIxMCArIGEwMipiMjA7XHJcbiAgICB0aGlzLm0wMSA9IGEwMCpiMDEgKyBhMDEqYjExICsgYTAyKmIyMTtcclxuICAgIHRoaXMubTAyID0gYTAwKmIwMiArIGEwMSpiMTIgKyBhMDIqYjIyO1xyXG5cclxuICAgIHRoaXMubTEwID0gYTEwKmIwMCArIGExMSpiMTAgKyBhMTIqYjIwO1xyXG4gICAgdGhpcy5tMTEgPSBhMTAqYjAxICsgYTExKmIxMSArIGExMipiMjE7XHJcbiAgICB0aGlzLm0xMiA9IGExMCpiMDIgKyBhMTEqYjEyICsgYTEyKmIyMjtcclxuXHJcbiAgICB0aGlzLm0yMCA9IGEyMCpiMDAgKyBhMjEqYjEwICsgYTIyKmIyMDtcclxuICAgIHRoaXMubTIxID0gYTIwKmIwMSArIGEyMSpiMTEgKyBhMjIqYjIxO1xyXG4gICAgdGhpcy5tMjIgPSBhMjAqYjAyICsgYTIxKmIxMiArIGEyMipiMjI7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBtdWx0aXBseVZlY3RvcjJcclxuICAgKiB0aGlzIOOBqzLmrKHlhYPjg5njgq/jg4jjg6sgdiDjgpLkuZfjgZjjgb7jgZnjgIJcclxuICAgKiAy5qyh5YWD44OZ44Kv44OI44Or44GvICh4LCB5LCAxKSDjgajjgZfjgabkuZfnrpfjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdCA9IHBoaW5hLmdlb20uTWF0cml4MzMoMCwgLTEsIDEsIC0xLCA0LCAtMiwgMSwgMSwgMSk7XHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMiwgNClcclxuICAgKiAgICAgbWF0Lm11bHRpcGx5VmVjdG9yMih2KSAvLyA9PiB7eDogLTMsIHk6IDEyfVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHYg5LmX44GY44KL44OZ44Kv44OI44OrXHJcbiAgICogQHJldHVybiB7cGhpbmEuZ2VvbS5WZWN0b3IyfSDkuZfnrpfntZDmnpzjga7jg5njgq/jg4jjg6tcclxuICAgKi9cclxuICBtdWx0aXBseVZlY3RvcjIodikge1xyXG4gICAgdmFyIHZ4ID0gdGhpcy5tMDAqdi54ICsgdGhpcy5tMDEqdi55ICsgdGhpcy5tMDI7XHJcbiAgICB2YXIgdnkgPSB0aGlzLm0xMCp2LnggKyB0aGlzLm0xMSp2LnkgKyB0aGlzLm0xMjtcclxuICAgIFxyXG4gICAgLy8gcmV0dXJuIHBoaW5hLmdlb20uVmVjdG9yMih2eCwgdnkpO1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZ4LCB2eSk7XHJcbiAgfVxyXG5cclxuICAvLyDooYxcclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldFJvd1xyXG4gICAqIHJvdyDnlarnm67jga7ooYzjgpLphY3liJfjgafov5TjgZfjgb7jgZnjgIJyb3cg44GMIDDjgIEx44CBMiDjga7jgYTjgZrjgozjgYvjgafjgarjgZHjgozjgbAgbnVsbCDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIG1hdDEgPSBwaGluYS5nZW9tLk1hdHJpeDMzKDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkpO1xyXG4gICAqICAgICBtYXQxLmdldFJvdygwKTsgLy8gWzEsIDIsIDNdXHJcbiAgICogICAgIG1hdDEuZ2V0Um93KDEpOyAvLyBbNCwgNSwgNl1cclxuICAgKiAgICAgbWF0MS5nZXRSb3coOSk7IC8vIG51bGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7MC8xLzJ9IHJvdyDooYznlarlj7dcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g6KGM44KS6KGo44GZ6YWN5YiXXHJcbiAgICovXHJcbiAgZ2V0Um93KHJvdykge1xyXG4gICAgaWYgKCByb3cgPT09IDAgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAwLCB0aGlzLm0wMSwgdGhpcy5tMDIgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCByb3cgPT09IDEgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTEwLCB0aGlzLm0xMSwgdGhpcy5tMTIgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCByb3cgPT09IDIgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTIwLCB0aGlzLm0yMSwgdGhpcy5tMjIgXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q29sXHJcbiAgICogY29sIOeVquebruOBruWIl+OCkumFjeWIl+OBp+i/lOOBl+OBvuOBmeOAgmNvbCDjgYwgMOOAgTHjgIEyIOOBruOBhOOBmuOCjOOBi+OBp+OBquOBkeOCjOOBsCBudWxsIOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgbWF0MSA9IHBoaW5hLmdlb20uTWF0cml4MzMoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSk7XHJcbiAgICogICAgIG1hdDEuZ2V0Q29sKDApOyAvLyBbMSwgNCwgN11cclxuICAgKiAgICAgbWF0MS5nZXRDb2woMSk7IC8vIFsyLCA1LCA4XVxyXG4gICAqICAgICBtYXQxLmdldFJvdygtMSk7IC8vIG51bGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7MC8xLzJ9IGNvbCDliJfnlarlj7dcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0g5YiX44KS6KGo44GZ6YWN5YiXXHJcbiAgICovXHJcbiAgZ2V0Q29sKGNvbCkge1xyXG4gICAgaWYgKCBjb2wgPT09IDAgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAwLCB0aGlzLm0xMCwgdGhpcy5tMjAgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjb2wgPT09IDEgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAxLCB0aGlzLm0xMSwgdGhpcy5tMjEgXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjb2wgPT09IDIgKSB7XHJcbiAgICAgIHJldHVybiBbIHRoaXMubTAyLCB0aGlzLm0xMiwgdGhpcy5tMjIgXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9TdHJpbmdcclxuICAgKiDooYzliJfjgpIgSlNPTiDlvaLlvI/jgafooajnj77jgZfjgZ/mloflrZfliJfjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHYgPSBwaGluYS5nZW9tLlZlY3RvcjIoMywgNCk7XHJcbiAgICogICAgIHYyID0gdi5jbG9uZSgpO1xyXG4gICAqICAgICB2Mi54ID09IHYueDsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBKU09OIOaWh+Wtl+WIl1xyXG4gICAqL1xyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIFwifHttMDB9LCB7bTAxfSwge20wMn18XFxufHttMTB9LCB7bTExfSwge20xMn18XFxufHttMjB9LCB7bTIxfSwge20yMn18XCIuZm9ybWF0KHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge3BoaW5hLmdlb20uTWF0cml4MzN9IElERU5USVRZIOWNmOS9jeihjOWIl1xyXG4gKiBAcmVhZG9ubHlcclxuICovXHJcbk1hdHJpeDMzLklERU5USVRZID0gbmV3IE1hdHJpeDMzKCkuaWRlbnRpdHkoKTtcblxuLyoqXHJcbiogQGNsYXNzIHBoaW5hLmdlb20uQ29sbGlzaW9uXHJcbiogIyDooZ3nqoHliKTlrprnlKjjgq/jg6njgrlcclxuKiDooZ3nqoHliKTlrprjga7jgZ/jgoHjga7jgq/jg6njgrnjgafjgZnjgILjgZnjgbnjgabjga7jg6Hjgr3jg4Pjg4njgYzjgrnjgr/jg4bjgqPjg4Pjgq/jg6Hjgr3jg4Pjg4njgafjgZnjgIJcclxuKiBcclxuKi9cclxuY2xhc3MgQ29sbGlzaW9uIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0Q2lyY2xlQ2lyY2xlXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLjgaTjga7lhobpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZTEgPSBwaGluYS5nZW9tLkNpcmNsZSgxMDAsIDEwMCwgMzApO1xyXG4gICAqICAgICBjaXJjbGUyID0gcGhpbmEuZ2VvbS5DaXJjbGUoMTMwLCAxNDAsIDMwKTtcclxuICAgKiBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0Q2lyY2xlQ2lyY2xlKGNpcmNsZTEsIGNpcmNsZTIpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uQ2lyY2xlfSBjaXJjbGUxIOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5DaXJjbGV9IGNpcmNsZTIg5YaG6aCY5Z+f44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RDaXJjbGVDaXJjbGUoY2lyY2xlMCwgY2lyY2xlMSkge1xyXG4gICAgdmFyIGRpc3RhbmNlU3F1YXJlZCA9IHBoaW5hLmdlb20uVmVjdG9yMi5kaXN0YW5jZVNxdWFyZWQoY2lyY2xlMCwgY2lyY2xlMSk7XHJcbiAgICByZXR1cm4gZGlzdGFuY2VTcXVhcmVkIDw9IE1hdGgucG93KGNpcmNsZTAucmFkaXVzICsgY2lyY2xlMS5yYWRpdXMsIDIpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RSZWN0UmVjdFxyXG4gICAqIEBzdGF0aWNcclxuICAgKiAy44Gk44Gu55+p5b2i6aCY5Z+f44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GL44KS5Yik5a6a44GX44G+44GZXHJcbiAgICpcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICByZWN0MSA9IHBoaW5hLmdlb20uUmVjdCgxMDAsIDEwMCwgMzAsIDQwKTtcclxuICAgKiAgICAgcmVjdDIgPSBwaGluYS5nZW9tLlJlY3QoMjAwLCAyMDAsIDEwLCAxMCk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RSZWN0UmVjdChyZWN0MSwgcmVjdDIpOyAvLyA9PiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlJlY3R9IHJlY3QxIOefqeW9oumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5SZWN0fSByZWN0MiDnn6nlvaLpoJjln5/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDpoJjln5/jgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBzdGF0aWMgdGVzdFJlY3RSZWN0KHJlY3QwLCByZWN0MSkge1xyXG4gICAgcmV0dXJuIChyZWN0MC5sZWZ0IDwgcmVjdDEucmlnaHQpICYmIChyZWN0MC5yaWdodCA+IHJlY3QxLmxlZnQpICYmXHJcbiAgICAgIChyZWN0MC50b3AgPCByZWN0MS5ib3R0b20pICYmIChyZWN0MC5ib3R0b20gPiByZWN0MS50b3ApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHRlc3RDaXJjbGVSZWN0XHJcbiAgICogQHN0YXRpY1xyXG4gICAqIOWGhumgmOWfn+OBqOefqeW9oumgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgY2lyY2xlID0gcGhpbmEuZ2VvbS5DaXJjbGUoMTAwLCAxMDAsIDMwKTtcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgxMDAsIDEwMCwgMzAsIDQwKTtcclxuICAgKiAgICAgcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdENpcmNsZVJlY3QoY2lyY2xlLCByZWN0KTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLkNpcmNsZX0gY2lyY2xlIOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5SZWN0fSByZWN0IOefqeW9oumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOmgmOWfn+OBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIHN0YXRpYyB0ZXN0Q2lyY2xlUmVjdChjaXJjbGUsIHJlY3QpIHtcclxuICAgIC8vIOOBvuOBmuOBr+Wkp+OBjeOBquefqeW9ouOBp+WIpOWumijpq5jpgJ/ljJYpXHJcbiAgICB2YXIgYmlnUmVjdCA9IHBoaW5hLmdlb20uUmVjdChyZWN0LmxlZnQtY2lyY2xlLnJhZGl1cywgcmVjdC50b3AtY2lyY2xlLnJhZGl1cywgcmVjdC53aWR0aCtjaXJjbGUucmFkaXVzKjIsIHJlY3QuaGVpZ2h0K2NpcmNsZS5yYWRpdXMqMik7XHJcbiAgICBpZiAoYmlnUmVjdC5jb250YWlucyhjaXJjbGUueCwgY2lyY2xlLnkpID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIDLnqK7poZ7jga7nn6nlvaLjgajooZ3nqoHliKTlrppcclxuICAgIHZhciByID0gcGhpbmEuZ2VvbS5SZWN0KHJlY3QubGVmdC1jaXJjbGUucmFkaXVzLCByZWN0LnRvcCwgcmVjdC53aWR0aCtjaXJjbGUucmFkaXVzKjIsIHJlY3QuaGVpZ2h0KTtcclxuICAgIGlmIChyLmNvbnRhaW5zKGNpcmNsZS54LCBjaXJjbGUueSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByLnNldChyZWN0LmxlZnQsIHJlY3QudG9wLWNpcmNsZS5yYWRpdXMsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0K2NpcmNsZS5yYWRpdXMqMik7XHJcbiAgICBpZiAoci5jb250YWlucyhjaXJjbGUueCwgY2lyY2xlLnkpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDlhobjgajnn6nlvaLjga7vvJTngrnjga7liKTlrppcclxuICAgIHZhciBjID0gcGhpbmEuZ2VvbS5DaXJjbGUoY2lyY2xlLngsIGNpcmNsZS55LCBjaXJjbGUucmFkaXVzKTtcclxuICAgIC8vIGxlZnQgdG9wXHJcbiAgICBpZiAoYy5jb250YWlucyhyZWN0LmxlZnQsIHJlY3QudG9wKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIHJpZ2h0IHRvcFxyXG4gICAgaWYgKGMuY29udGFpbnMocmVjdC5yaWdodCwgcmVjdC50b3ApKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gcmlnaHQgYm90dG9tXHJcbiAgICBpZiAoYy5jb250YWlucyhyZWN0LnJpZ2h0LCByZWN0LmJvdHRvbSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBsZWZ0IGJvdHRvbVxyXG4gICAgaWYgKGMuY29udGFpbnMocmVjdC5sZWZ0LCByZWN0LmJvdHRvbSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCB0ZXN0Q2lyY2xlTGluZVxyXG4gICAqIEBzdGF0aWNcclxuICAgKiDlhobpoJjln5/jgajnt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIGNpcmNsZSA9IHBoaW5hLmdlb20uQ2lyY2xlKDEwMCwgMTAwLCAyMCk7XHJcbiAgICogICAgIHAxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDAsIDApO1xyXG4gICAqICAgICBwMiA9IHBoaW5hLmdlb20uVmVjdG9yMigzMDAsIDQwMCk7XHJcbiAgICogICAgIHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RDaXJjbGVMaW5lKGNpcmNsZSwgcDEsIHAyKTsgLy8gPT4gdHJ1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLkNpcmNsZX0gY2lyY2xlIOWGhumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMSDnt5rliIbjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDIg57ea5YiG44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g5YaG6aCY5Z+f44Go57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RDaXJjbGVMaW5lIChjaXJjbGUsIHAxLCBwMikge1xyXG4gICAgLy8g5YWI44Gr57ea5YiG56uv44Go44Gu5Yik5a6aXHJcbiAgICBpZiAoY2lyY2xlLmNvbnRhaW5zKHAxLngsIHAxLnkpIHx8IGNpcmNsZS5jb250YWlucyhwMi54LCBwMi55KSkgcmV0dXJuIHRydWU7XHJcbiAgICAvLyDljYrlvoTjga4y5LmXXHJcbiAgICB2YXIgcjIgPSBjaXJjbGUucmFkaXVzICogY2lyY2xlLnJhZGl1cztcclxuICAgIC8vIOWGhuOBruS4reW/g+W6p+aomVxyXG4gICAgdmFyIHAzID0gcGhpbmEuZ2VvbS5WZWN0b3IyKGNpcmNsZS54LCBjaXJjbGUueSk7XHJcbiAgICAvLyDlkITjg5njgq/jg4jjg6tcclxuICAgIHZhciBwMXAyID0gcGhpbmEuZ2VvbS5WZWN0b3IyLnN1YihwMSwgcDIpO1xyXG4gICAgdmFyIHAxcDMgPSBwaGluYS5nZW9tLlZlY3RvcjIuc3ViKHAxLCBwMyk7XHJcbiAgICB2YXIgcDJwMyA9IHBoaW5hLmdlb20uVmVjdG9yMi5zdWIocDIsIHAzKTtcclxuICAgIC8vIOWkluepjVxyXG4gICAgdmFyIGNyb3NzID0gcGhpbmEuZ2VvbS5WZWN0b3IyLmNyb3NzKHAxcDIsIHAxcDMpO1xyXG4gICAgLy8g5aSW56mN44Gu57W25a++5YCk44GuMuS5l1xyXG4gICAgdmFyIGNyb3NzMiA9IGNyb3NzICogY3Jvc3M7XHJcbiAgICAvLyBwMXAy44Gu6ZW344GV44GuMuS5l1xyXG4gICAgdmFyIGxlbmd0aDIgPSBwMXAyLmxlbmd0aFNxdWFyZWQoKTtcclxuICAgIC8vIOWGhuOBruS4reW/g+OBi+OCiee3muWIhuOBvuOBp+OBruWegue3muOBrui3nembouOBrjLkuZdcclxuICAgIHZhciBkMiA9IGNyb3NzMiAvIGxlbmd0aDI7XHJcbiAgICAvLyDlhobjga7ljYrlvoTjga4y5LmX44KI44KK5bCP44GV44GE44Gq44KJ6YeN6KSHXHJcbiAgICBpZiAoZDIgPD0gcjIpIHtcclxuICAgICAgdmFyIGRvdDEgPSBwaGluYS5nZW9tLlZlY3RvcjIuZG90KHAxcDMsIHAxcDIpO1xyXG4gICAgICB2YXIgZG90MiA9IHBoaW5hLmdlb20uVmVjdG9yMi5kb3QocDJwMywgcDFwMik7XHJcbiAgICAgIC8vIOmAmuW4uOOBr+WGheepjeOBruS5l+eul1xyXG4gICAgICBpZiAoZG90MSAqIGRvdDIgPD0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdExpbmVMaW5lXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIDLjgaTjga7nt5rliIbjgYzph43jgarjgaPjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZfjgb7jgZlcclxuICAgKiDlj4LogIPvvJpodHRwOi8vd3d3NWQuYmlnbG9iZS5uZS5qcC9+dG9tb3lhMDMvc2h0bWwvYWxnb3JpdGhtL0ludGVyc2VjdGlvbi5odG1cclxuICAgKlxyXG4gICAqICMjIyBFeGFtcGxlXHJcbiAgICogICAgIHAxID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDEwMCwgMTAwKTtcclxuICAgKiAgICAgcDIgPSBwaGluYS5nZW9tLlZlY3RvcjIoMjAwLCAyMDApO1xyXG4gICAqICAgICBwMyA9IHBoaW5hLmdlb20uVmVjdG9yMigxNTAsIDI0MCk7XHJcbiAgICogICAgIHA0ID0gcGhpbmEuZ2VvbS5WZWN0b3IyKDIwMCwgMTAwKTtcclxuICAgKiBwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCBwMywgcDQpOyAvLyA9PiB0cnVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDEg57ea5YiGMeOBruerr+OBruW6p+aomVxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMiDnt5rliIYx44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHBhcmFtIHtwaGluYS5nZW9tLlZlY3RvcjJ9IHAzIOe3muWIhjLjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDQg57ea5YiGMuOBruerr+OBruW6p+aomVxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IOe3muWIhjHjgajnt5rliIYy44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RMaW5lTGluZSAocDEsIHAyLCBwMywgcDQpIHtcclxuICAgIC8v5ZCM5LiA77y477y56Lu45LiK44Gr5LmX44Gj44Gm44KL5aC05ZCI44Gu6Kqk5Yik5a6a5Zue6YG/XHJcbiAgICBpZiAocDEueCA9PSBwMi54ICYmIHAxLnggPT0gcDMueCAmJiBwMS54ID09IHA0LngpIHtcclxuICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHAxLnksIHAyLnkpO1xyXG4gICAgICB2YXIgbWF4ID0gTWF0aC5tYXgocDEueSwgcDIueSk7XHJcbiAgICAgIGlmIChtaW4gPD0gcDMueSAmJiBwMy55IDw9IG1heCB8fCBtaW4gPD0gcDQueSAmJiBwNC55IDw9IG1heCkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChwMS55ID09IHAyLnkgJiYgcDEueSA9PSBwMy55ICYmIHAxLnkgPT0gcDQueSkge1xyXG4gICAgICB2YXIgbWluID0gTWF0aC5taW4ocDEueCwgcDIueCk7XHJcbiAgICAgIHZhciBtYXggPSBNYXRoLm1heChwMS54LCBwMi54KTtcclxuICAgICAgaWYgKG1pbiA8PSBwMy54ICYmIHAzLnggPD0gbWF4IHx8IG1pbiA8PSBwNC54ICYmIHA0LnggPD0gbWF4KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/pgJrluLjliKTlrppcclxuICAgIHZhciBhID0gKHAxLnggLSBwMi54KSAqIChwMy55IC0gcDEueSkgKyAocDEueSAtIHAyLnkpICogKHAxLnggLSBwMy54KTtcclxuICAgIHZhciBiID0gKHAxLnggLSBwMi54KSAqIChwNC55IC0gcDEueSkgKyAocDEueSAtIHAyLnkpICogKHAxLnggLSBwNC54KTtcclxuICAgIHZhciBjID0gKHAzLnggLSBwNC54KSAqIChwMS55IC0gcDMueSkgKyAocDMueSAtIHA0LnkpICogKHAzLnggLSBwMS54KTtcclxuICAgIHZhciBkID0gKHAzLnggLSBwNC54KSAqIChwMi55IC0gcDMueSkgKyAocDMueSAtIHA0LnkpICogKHAzLnggLSBwMi54KTtcclxuICAgIHJldHVybiBhICogYiA8PSAwICYmIGMgKiBkIDw9IDA7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdGVzdFJlY3RMaW5lXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIOefqeW9ouOBqOe3muWIhuOBjOmHjeOBquOBo+OBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkuWIpOWumuOBl+OBvuOBmVxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgcmVjdCA9IHBoaW5hLmdlb20uUmVjdCgxMjAsIDEzMCwgNDAsIDUwKTtcclxuICAgKiAgICAgcDEgPSBwaGluYS5nZW9tLlZlY3RvcjIoMTAwLCAxMDApO1xyXG4gICAqICAgICBwMiA9IHBoaW5hLmdlb20uVmVjdG9yMigyMDAsIDIwMCk7XHJcbiAgICogcGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdFJlY3RMaW5lKHJlY3QsIHAxLCBwMik7IC8vID0+IHRydWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5SZWN0fSByZWN0IOefqeW9oumgmOWfn+OCquODluOCuOOCp+OCr+ODiFxyXG4gICAqIEBwYXJhbSB7cGhpbmEuZ2VvbS5WZWN0b3IyfSBwMSDnt5rliIbjga7nq6/jga7luqfmqJlcclxuICAgKiBAcGFyYW0ge3BoaW5hLmdlb20uVmVjdG9yMn0gcDIg57ea5YiG44Gu56uv44Gu5bqn5qiZXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g55+p5b2i44Go57ea5YiG44GM6YeN44Gq44Gj44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICovXHJcbiAgc3RhdGljIHRlc3RSZWN0TGluZSAocmVjdCwgcDEsIHAyKSB7XHJcbiAgICAgIC8v5YyF5ZCr5Yik5a6aKHAx44GM5ZCr44G+44KM44Gm44KM44Gw6Imv44GE44Gu44GncDLjga7liKTlrprjga/jgZfjgarjgYTvvIlcclxuICAgICAgaWYgKHJlY3QubGVmdCA8PSBwMS54ICYmIHAxLnggPD0gcmVjdC5yaWdodCAmJiByZWN0LnRvcCA8PSBwMS55ICYmIHAxLnkgPD0gcmVjdC5ib3R0b20gKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgIC8v55+p5b2i44Gu77yU54K5XHJcbiAgICAgIHZhciByMSA9IHBoaW5hLmdlb20uVmVjdG9yMihyZWN0LmxlZnQsIHJlY3QudG9wKTsgICAgIC8v5bem5LiKXHJcbiAgICAgIHZhciByMiA9IHBoaW5hLmdlb20uVmVjdG9yMihyZWN0LnJpZ2h0LCByZWN0LnRvcCk7ICAgIC8v5Y+z5LiKXHJcbiAgICAgIHZhciByMyA9IHBoaW5hLmdlb20uVmVjdG9yMihyZWN0LnJpZ2h0LCByZWN0LmJvdHRvbSk7IC8v5Y+z5LiLXHJcbiAgICAgIHZhciByNCA9IHBoaW5hLmdlb20uVmVjdG9yMihyZWN0LmxlZnQsIHJlY3QuYm90dG9tKTsgIC8v5bem5LiLXHJcblxyXG4gICAgICAvL+efqeW9ouOBru+8lOi+uuOCkuOBquOBmee3muWIhuOBqOOBruaOpeinpuWIpOWumlxyXG4gICAgICBpZiAocGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcjEsIHIyKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChwaGluYS5nZW9tLkNvbGxpc2lvbi50ZXN0TGluZUxpbmUocDEsIHAyLCByMiwgcjMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKHBoaW5hLmdlb20uQ29sbGlzaW9uLnRlc3RMaW5lTGluZShwMSwgcDIsIHIzLCByNCkpIHJldHVybiB0cnVlO1xyXG4gICAgICBpZiAocGhpbmEuZ2VvbS5Db2xsaXNpb24udGVzdExpbmVMaW5lKHAxLCBwMiwgcjEsIHI0KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2VvbS5WZWN0b3IzXHJcbiAqICMgM+asoeWFg+ODmeOCr+ODiOODq+OCr+ODqeOCue+8iOacquWun+ijhe+8iVxyXG4gKiAz5qyh5YWD44Gu44OZ44Kv44OI44Or44KE5bqn5qiZ44KS6KGo44GZ44Kv44Op44K544Gn44GZ44CCXHJcbiAqL1xyXG5jbGFzcyBWZWN0b3IzIHtcclxuXHJcbiAgLyoqIHjluqfmqJkgKi9cclxuICAvLyB4OiAwLFxyXG4gIC8qKiB55bqn5qiZICovXHJcbiAgLy8geTogMCxcclxuICAvKiogeuW6p+aomSAqL1xyXG4gIC8vIHo6IDAsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcclxuICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgIHRoaXMueiA9IHogfHwgMDtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ3JhcGhpY3MuQ2FudmFzXHJcbiAqIOOCreODo+ODs+ODkOOCueaLoeW8teOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgQ2FudmFzIHtcclxuICAvLyBkb21FbGVtZW50OiBudWxsLFxyXG4gIC8vIGNhbnZhczogbnVsbCxcclxuICAvLyBjb250ZXh0OiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiDliJ3mnJ/ljJZcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIGlmICh0eXBlb2YgY2FudmFzID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY2FudmFzO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgIHRoaXMuY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrXjgqTjgrrjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoICAgPSB3aWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCAgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldFNpemVUb1NjcmVlbigpIHtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uICA9IFwiZml4ZWRcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpbiAgICA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wYWRkaW5nICAgPSBcIjBweFwiO1xyXG4gICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCAgICAgID0gXCIwcHhcIjtcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCAgICAgICA9IFwiMHB4XCI7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZml0U2NyZWVuKGlzRXZlcikge1xyXG4gICAgaXNFdmVyID0gaXNFdmVyID09PSB1bmRlZmluZWQgPyB0cnVlIDogaXNFdmVyO1xyXG5cclxuICAgIHZhciBfZml0RnVuYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgICAgdmFyIHMgPSBlLnN0eWxlO1xyXG4gICAgICBcclxuICAgICAgcy5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgcy5tYXJnaW4gPSBcImF1dG9cIjtcclxuICAgICAgcy5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgcy50b3AgID0gXCIwcHhcIjtcclxuICAgICAgcy5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgICBzLnJpZ2h0ID0gXCIwcHhcIjtcclxuXHJcbiAgICAgIHZhciByYXRlV2lkdGggPSBlLndpZHRoL3dpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB2YXIgcmF0ZUhlaWdodD0gZS5oZWlnaHQvd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB2YXIgcmF0ZSA9IGUuaGVpZ2h0L2Uud2lkdGg7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocmF0ZVdpZHRoID4gcmF0ZUhlaWdodCkge1xyXG4gICAgICAgIHMud2lkdGggID0gTWF0aC5mbG9vcihpbm5lcldpZHRoKStcInB4XCI7XHJcbiAgICAgICAgcy5oZWlnaHQgPSBNYXRoLmZsb29yKGlubmVyV2lkdGgqcmF0ZSkrXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHMud2lkdGggID0gTWF0aC5mbG9vcihpbm5lckhlaWdodC9yYXRlKStcInB4XCI7XHJcbiAgICAgICAgcy5oZWlnaHQgPSBNYXRoLmZsb29yKGlubmVySGVpZ2h0KStcInB4XCI7XHJcbiAgICAgIH1cclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIFxyXG4gICAgLy8g5LiA5bqm5a6f6KGM44GX44Gm44GK44GPXHJcbiAgICBfZml0RnVuYygpO1xyXG5cclxuICAgIC8vIOODquOCteOCpOOCuuaZguOBruODquOCueODiuOBqOOBl+OBpueZu+mMsuOBl+OBpuOBiuOBj1xyXG4gICAgaWYgKGlzRXZlcikge1xyXG4gICAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIF9maXRGdW5jLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq/jg6rjgqJcclxuICAgKi9cclxuICBjbGVhcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB4ID0geCB8fCAwO1xyXG4gICAgeSA9IHkgfHwgMDtcclxuICAgIHdpZHRoID0gd2lkdGggfHwgdGhpcy53aWR0aDtcclxuICAgIGhlaWdodD0gaGVpZ2h0fHwgdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbGVhckNvbG9yKGZpbGxTdHlsZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgeCA9IHggfHwgMDtcclxuICAgIHkgPSB5IHx8IDA7XHJcbiAgICB3aWR0aCA9IHdpZHRoIHx8IHRoaXMud2lkdGg7XHJcbiAgICBoZWlnaHQ9IGhlaWdodHx8IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCk7IC8vIOihjOWIl+WIneacn+WMllxyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7ICAgICAvLyDloZfjgorjgaTjgbbjgZfjgrnjgr/jgqTjg6vjgrvjg4Pjg4hcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiDjg5HjgrnjgpLplovlp4so44Oq44K744OD44OIKVxyXG4gICAqL1xyXG4gIGJlZ2luUGF0aCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIOODkeOCueOCkumWieOBmOOCi1xyXG4gICAqL1xyXG4gIGNsb3NlUGF0aCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqICDmlrDopo/jg5HjgrnnlJ/miJBcclxuICAgKi9cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OR44K544Gr6L+95YqgXHJcbiAgICovXHJcbiAgbGluZVRvKHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHF1YWRyYXRpY0N1cnZlVG8oKSB7XHJcbiAgICB0aGlzLmNvbnRleHQucXVhZHJhdGljQ3VydmVUby5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGJlemllckN1cnZlVG8oKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYmV6aWVyQ3VydmVUby5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODkeOCueWGheOCkuWhl+OCiuOBpOOBtuOBmVxyXG4gICAqL1xyXG4gIGZpbGwoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5HjgrnkuIrjgavjg6njgqTjg7PjgpLlvJXjgY9cclxuICAgKi9cclxuICBzdHJva2UoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCr+ODquODg+ODl1xyXG4gICAqL1xyXG4gIGNsaXAoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xpcCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAgICAgXHJcbiAgLyoqXHJcbiAgICog54K55o+P55S7XHJcbiAgICovXHJcbiAgZHJhd1BvaW50KHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLnN0cm9rZVJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg6njgqTjg7Pjg5HjgrnjgpLkvZzmiJBcclxuICAgKi9cclxuICBsaW5lKHgwLCB5MCwgeDEsIHkxKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG8oeDAsIHkwKS5saW5lVG8oeDEsIHkxKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz44KS5o+P55S7XHJcbiAgICovXHJcbiAgZHJhd0xpbmUoeDAsIHkwLCB4MSwgeTEpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmxpbmUoeDAsIHkwLCB4MSwgeTEpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44OA44OD44K344Ol44Op44Kk44Oz44KS5o+P55S7XHJcbiAgICovXHJcbiAgZHJhd0Rhc2hMaW5lKHgwLCB5MCwgeDEsIHkxLCBwYXR0ZXJuKSB7XHJcbiAgICB2YXIgcGF0dGVyblRhYmxlID0gbnVsbDtcclxuICAgIGlmICh0eXBlb2YocGF0dGVybikgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBwYXR0ZXJuVGFibGUgPSBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuIHx8IDB4ZjBmMDtcclxuICAgICAgcGF0dGVyblRhYmxlID0gcGF0dGVybi50b1N0cmluZygyKTtcclxuICAgIH1cclxuICAgIHBhdHRlcm5UYWJsZSA9IHBhdHRlcm5UYWJsZS5wYWRkaW5nKDE2LCAnMScpO1xyXG4gICAgXHJcbiAgICB2YXIgdnggPSB4MS14MDtcclxuICAgIHZhciB2eSA9IHkxLXkwO1xyXG4gICAgdmFyIGxlbiA9IE1hdGguc3FydCh2eCp2eCArIHZ5KnZ5KTtcclxuICAgIHZ4Lz1sZW47IHZ5Lz1sZW47XHJcbiAgICBcclxuICAgIHZhciB4ID0geDA7XHJcbiAgICB2YXIgeSA9IHkwO1xyXG4gICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgIGlmIChwYXR0ZXJuVGFibGVbaSUxNl0gPT0gJzEnKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UG9pbnQoeCwgeSk7XHJcbiAgICAgICAgLy8gdGhpcy5maWxsUmVjdCh4LCB5LCB0aGlzLmNvbnRleHQubGluZVdpZHRoLCB0aGlzLmNvbnRleHQubGluZVdpZHRoKTtcclxuICAgICAgfVxyXG4gICAgICB4ICs9IHZ4O1xyXG4gICAgICB5ICs9IHZ5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHYwKHgwLCB5MCksIHYxKHgxLCB5MSkg44GL44KJ6KeS5bqm44KS5rGC44KB44Gm55+i5Y2w44KS5o+P55S7XHJcbiAgICogaHR0cDovL2hha3VoaW4uanAvYXMvcm90YXRpb24uaHRtbFxyXG4gICAqL1xyXG4gIGRyYXdBcnJvdyh4MCwgeTAsIHgxLCB5MSwgYXJyb3dSYWRpdXMpIHtcclxuICAgIHZhciB2eCA9IHgxLXgwO1xyXG4gICAgdmFyIHZ5ID0geTEteTA7XHJcbiAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHZ5LCB2eCkqMTgwL01hdGguUEk7XHJcbiAgICBcclxuICAgIHRoaXMuZHJhd0xpbmUoeDAsIHkwLCB4MSwgeTEpO1xyXG4gICAgdGhpcy5maWxsUG9seWdvbih4MSwgeTEsIGFycm93UmFkaXVzIHx8IDUsIDMsIGFuZ2xlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogbGluZXNcclxuICAgKi9cclxuICBsaW5lcygpIHtcclxuICAgIHRoaXMubW92ZVRvKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuICAgIGZvciAodmFyIGk9MSxsZW49YXJndW1lbnRzLmxlbmd0aC8yOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgIHRoaXMubGluZVRvKGFyZ3VtZW50c1tpKjJdLCBhcmd1bWVudHNbaSoyKzFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlTGluZXMoKSB7XHJcbiAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5saW5lcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44Kk44Oz5aGX44KK44Gk44G244GX5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbExpbmVzKCkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMubGluZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbm+inkuW9ouODkeOCueOCkuS9nOaIkOOBmeOCi1xyXG4gICAqL1xyXG4gIHJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnJlY3QuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWbm+inkuW9ouWhl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxSZWN0KCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDlm5vop5LlvaLjg6njgqTjg7Pmj4/nlLtcclxuICAgKi9cclxuICBzdHJva2VSZWN0KCkge1xyXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOinkuS4uOWbm+inkuW9ouODkeOCuVxyXG4gICAqL1xyXG4gIHJvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpIHtcclxuICAgIHZhciBsID0geCArIHJhZGl1cztcclxuICAgIHZhciByID0geCArIHdpZHRoIC0gcmFkaXVzO1xyXG4gICAgdmFyIHQgPSB5ICsgcmFkaXVzO1xyXG4gICAgdmFyIGIgPSB5ICsgaGVpZ2h0IC0gcmFkaXVzO1xyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgdmFyIGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgIGN0eC5tb3ZlVG8obCwgeSk7XHJcbiAgICBjdHgubGluZVRvKHIsIHkpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCt3aWR0aCwgeSwgeCt3aWR0aCwgdCk7XHJcbiAgICBjdHgubGluZVRvKHgrd2lkdGgsIGIpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCt3aWR0aCwgeStoZWlnaHQsIHIsIHkraGVpZ2h0KTtcclxuICAgIGN0eC5saW5lVG8obCwgeStoZWlnaHQpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeStoZWlnaHQsIHgsIGIpO1xyXG4gICAgY3R4LmxpbmVUbyh4LCB0KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIGwsIHkpO1xyXG4gICAgLyoqL1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKGwsIHQsIHJhZGl1cywgICAgIC1NYXRoLlBJLCAtTWF0aC5QSSowLjUsIGZhbHNlKTsgIC8vIOW3puS4ilxyXG4gICAgdGhpcy5jb250ZXh0LmFyYyhyLCB0LCByYWRpdXMsIC1NYXRoLlBJKjAuNSwgICAgICAgICAgICAwLCBmYWxzZSk7ICAvLyDlj7PkuIpcclxuICAgIHRoaXMuY29udGV4dC5hcmMociwgYiwgcmFkaXVzLCAgICAgICAgICAgIDAsICBNYXRoLlBJKjAuNSwgZmFsc2UpOyAgLy8g5Y+z5LiLXHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKGwsIGIsIHJhZGl1cywgIE1hdGguUEkqMC41LCAgICAgIE1hdGguUEksIGZhbHNlKTsgIC8vIOW3puS4i1xyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDop5LkuLjlm5vop5LlvaLloZfjgorjgaTjgbbjgZdcclxuICAgKi9cclxuICBmaWxsUm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KeS5Li45Zub6KeS5b2i44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlUm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhobjga7jg5HjgrnjgpLoqK3lrppcclxuICAgKi9cclxuICBjaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5aGX44KK44Gk44G244GX5YaG44KS5o+P55S7XHJcbiAgICovXHJcbiAgZmlsbENpcmNsZSh4LCB5LCByYWRpdXMpIHtcclxuICAgIHZhciBjID0gdGhpcy5jb250ZXh0O1xyXG4gICAgYy5iZWdpblBhdGgoKTtcclxuICAgIGMuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XHJcbiAgICBjLmNsb3NlUGF0aCgpO1xyXG4gICAgYy5maWxsKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog44K544OI44Ot44O844Kv5YaG44KS5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlQ2lyY2xlKHgsIHksIHJhZGl1cykge1xyXG4gICAgdmFyIGMgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgYy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIGZhbHNlKTtcclxuICAgIGMuY2xvc2VQYXRoKCk7XHJcbiAgICBjLnN0cm9rZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhoblvKfjga7jg5HjgrnjgpLoqK3lrppcclxuICAgKi9cclxuICBhcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDloZfjgorjgaTjgbbjgZflhoblvKfjgpLmj4/nlLtcclxuICAgKi9cclxuICBmaWxsQXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5maWxsKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCueODiOODreODvOOCr+WGhuW8p+OCkuaPj+eUu1xyXG4gICAqL1xyXG4gIHN0cm9rZUFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQubW92ZVRvKDAsIDApO1xyXG4gICAgY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSk7XHJcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGZpbGxQaWUoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpLmZpbGwoKTtcclxuICB9XHJcbiAgc3Ryb2tlUGllKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBpZSh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOODneODquOCtOODs+ODkeOCuVxyXG4gICAqL1xyXG4gIHBvbHlnb24oeCwgeSwgc2l6ZSwgc2lkZXMsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB2YXIgcmFkRGl2ID0gKE1hdGguUEkqMikvc2lkZXM7XHJcbiAgICB2YXIgcmFkT2Zmc2V0ID0gKG9mZnNldEFuZ2xlIT09dW5kZWZpbmVkKSA/IG9mZnNldEFuZ2xlKk1hdGguUEkvMTgwIDogLU1hdGguUEkvMjtcclxuICAgIFxyXG4gICAgdGhpcy5tb3ZlVG8oeCArIE1hdGguY29zKHJhZE9mZnNldCkqc2l6ZSwgeSArIE1hdGguc2luKHJhZE9mZnNldCkqc2l6ZSk7XHJcbiAgICBmb3IgKHZhciBpPTE7IGk8c2lkZXM7ICsraSkge1xyXG4gICAgICB2YXIgcmFkID0gcmFkRGl2KmkrcmFkT2Zmc2V0O1xyXG4gICAgICB0aGlzLmxpbmVUbyhcclxuICAgICAgICB4ICsgTWF0aC5jb3MocmFkKSpzaXplLFxyXG4gICAgICAgIHkgKyBNYXRoLnNpbihyYWQpKnNpemVcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICog44Od44Oq44K044Oz5aGX44KK44Gk44G244GXXHJcbiAgICovXHJcbiAgZmlsbFBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLnBvbHlnb24oeCwgeSwgcmFkaXVzLCBzaWRlcywgb2Zmc2V0QW5nbGUpLmZpbGwoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog44Od44Oq44K044Oz44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlUG9seWdvbih4LCB5LCByYWRpdXMsIHNpZGVzLCBvZmZzZXRBbmdsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkucG9seWdvbih4LCB5LCByYWRpdXMsIHNpZGVzLCBvZmZzZXRBbmdsZSkuc3Ryb2tlKCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHN0YXJcclxuICAgKi9cclxuICBzdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB2YXIgeCA9IHggfHwgMDtcclxuICAgIHZhciB5ID0geSB8fCAwO1xyXG4gICAgdmFyIHJhZGl1cyA9IHJhZGl1cyB8fCA2NDtcclxuICAgIHZhciBzaWRlcyA9IHNpZGVzIHx8IDU7XHJcbiAgICB2YXIgc2lkZUluZGVudFJhZGl1cyA9IHJhZGl1cyAqIChzaWRlSW5kZW50IHx8IDAuMzgpO1xyXG4gICAgdmFyIHJhZE9mZnNldCA9IChvZmZzZXRBbmdsZSkgPyBvZmZzZXRBbmdsZSpNYXRoLlBJLzE4MCA6IC1NYXRoLlBJLzI7XHJcbiAgICB2YXIgcmFkRGl2ID0gKE1hdGguUEkqMikvc2lkZXMvMjtcclxuXHJcbiAgICB0aGlzLm1vdmVUbyhcclxuICAgICAgeCArIE1hdGguY29zKHJhZE9mZnNldCkqcmFkaXVzLFxyXG4gICAgICB5ICsgTWF0aC5zaW4ocmFkT2Zmc2V0KSpyYWRpdXNcclxuICAgICk7XHJcbiAgICBmb3IgKHZhciBpPTE7IGk8c2lkZXMqMjsgKytpKSB7XHJcbiAgICAgIHZhciByYWQgPSByYWREaXYqaSArIHJhZE9mZnNldDtcclxuICAgICAgdmFyIGxlbiA9IChpJTIpID8gc2lkZUluZGVudFJhZGl1cyA6IHJhZGl1cztcclxuICAgICAgdGhpcy5saW5lVG8oXHJcbiAgICAgICAgeCArIE1hdGguY29zKHJhZCkqbGVuLFxyXG4gICAgICAgIHkgKyBNYXRoLnNpbihyYWQpKmxlblxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYn+OCkuWhl+OCiuOBpOOBtuOBl+aPj+eUu1xyXG4gICAqL1xyXG4gIGZpbGxTdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKSB7XHJcbiAgICB0aGlzLmJlZ2luUGF0aCgpLnN0YXIoeCwgeSwgcmFkaXVzLCBzaWRlcywgc2lkZUluZGVudCwgb2Zmc2V0QW5nbGUpLmZpbGwoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pif44KS44K544OI44Ot44O844Kv5o+P55S7XHJcbiAgICovXHJcbiAgc3Ryb2tlU3Rhcih4LCB5LCByYWRpdXMsIHNpZGVzLCBzaWRlSW5kZW50LCBvZmZzZXRBbmdsZSkge1xyXG4gICAgdGhpcy5iZWdpblBhdGgoKS5zdGFyKHgsIHksIHJhZGl1cywgc2lkZXMsIHNpZGVJbmRlbnQsIG9mZnNldEFuZ2xlKS5zdHJva2UoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBoZWFydFxyXG4gICAqL1xyXG4gIGhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpIHtcclxuICAgIHZhciBoYWxmX3JhZGl1cyA9IHJhZGl1cyowLjU7XHJcbiAgICB2YXIgcmFkID0gKGFuZ2xlID09PSB1bmRlZmluZWQpID8gTWF0aC5QSS80IDogTWF0aC5kZWdUb1JhZChhbmdsZSk7XHJcblxyXG4gICAgLy8g5Y2K5b6EIGhhbGZfcmFkaXVzIOOBruinkuW6piBhbmdsZSDkuIrjga7ngrnjgajjga7mjqXnt5rjgpLmsYLjgoHjgotcclxuICAgIHZhciBwID0gTWF0aC5jb3MocmFkKSpoYWxmX3JhZGl1cztcclxuICAgIHZhciBxID0gTWF0aC5zaW4ocmFkKSpoYWxmX3JhZGl1cztcclxuXHJcbiAgICAvLyDlhobjga7mjqXnt5rjga7mlrnnqIvlvI8gcHggKyBxeSA9IHJeMiDjgojjgoogeSA9IChyXjItcHgpL3FcclxuICAgIHZhciB4MiA9IC1oYWxmX3JhZGl1cztcclxuICAgIHZhciB5MiA9IChoYWxmX3JhZGl1cypoYWxmX3JhZGl1cy1wKngyKS9xO1xyXG5cclxuICAgIC8vIOS4reW/g+S9jee9ruiqv+aVtFxyXG4gICAgdmFyIGhlaWdodCA9IHkyICsgaGFsZl9yYWRpdXM7XHJcbiAgICB2YXIgb2Zmc2V0WSA9IGhhbGZfcmFkaXVzLWhlaWdodC8yO1xyXG5cclxuICAgIC8vIOODkeOCueOCkuOCu+ODg+ODiFxyXG4gICAgdGhpcy5tb3ZlVG8oMCt4LCB5Mit5K29mZnNldFkpO1xyXG5cclxuICAgIHRoaXMuYXJjKC1oYWxmX3JhZGl1cyt4LCAwK3krb2Zmc2V0WSwgaGFsZl9yYWRpdXMsIE1hdGguUEktcmFkLCBNYXRoLlBJKjIpO1xyXG4gICAgdGhpcy5hcmMoaGFsZl9yYWRpdXMreCwgMCt5K29mZnNldFksIGhhbGZfcmFkaXVzLCBNYXRoLlBJLCByYWQpO1xyXG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogZmlsbCBoZWFydFxyXG4gICAqL1xyXG4gIGZpbGxIZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iZWdpblBhdGgoKS5oZWFydCh4LCB5LCByYWRpdXMsIGFuZ2xlKS5maWxsKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIHN0cm9rZSBoZWFydFxyXG4gICAqL1xyXG4gIHN0cm9rZUhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmJlZ2luUGF0aCgpLmhlYXJ0KHgsIHksIHJhZGl1cywgYW5nbGUpLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0MTY5MjM0L3RoZS1yZWxhdGlvbi1vZi10aGUtYmV6aWVyLWN1cnZlLWFuZC1lbGxpcHNlXHJcbiAgICovXHJcbiAgZWxsaXBzZSh4LCB5LCB3LCBoKSB7XHJcbiAgICB2YXIgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgdmFyIGthcHBhID0gMC41NTIyODQ4O1xyXG5cclxuICAgIHZhciBveCA9ICh3IC8gMikgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgaG9yaXpvbnRhbFxyXG4gICAgdmFyIG95ID0gKGggLyAyKSAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCB2ZXJ0aWNhbFxyXG4gICAgdmFyIHhlID0geCArIHc7ICAgICAgICAgICAvLyB4LWVuZFxyXG4gICAgdmFyIHllID0geSArIGg7ICAgICAgICAgICAvLyB5LWVuZFxyXG4gICAgdmFyIHhtID0geCArIHcgLyAyOyAgICAgICAvLyB4LW1pZGRsZVxyXG4gICAgdmFyIHltID0geSArIGggLyAyOyAgICAgICAvLyB5LW1pZGRsZVxyXG5cclxuICAgIGN0eC5tb3ZlVG8oeCwgeW0pO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeCwgeW0gLSBveSwgeG0gLSBveCwgeSwgeG0sIHkpO1xyXG4gICAgY3R4LmJlemllckN1cnZlVG8oeG0gKyBveCwgeSwgeGUsIHltIC0gb3ksIHhlLCB5bSk7XHJcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ZSwgeW0gKyBveSwgeG0gKyBveCwgeWUsIHhtLCB5ZSk7XHJcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4bSAtIG94LCB5ZSwgeCwgeW0gKyBveSwgeCwgeW0pO1xyXG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZmlsbEVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KS5maWxsKCk7XHJcbiAgfVxyXG4gIHN0cm9rZUVsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmVnaW5QYXRoKCkuZWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KS5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGZpbGxUZXh0KCkge1xyXG4gICAgdGhpcy5fY29udGV4dC5maWxsVGV4dC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdHJva2VUZXh0KCkge1xyXG4gICAgdGhpcy5fY29udGV4dC5zdHJva2VUZXh0LmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICog55S75YOP44KS5o+P55S7XHJcbiAgICovXHJcbiAgZHJhd0ltYWdlKCkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooYzliJfjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRUcmFuc2Zvcm0obTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0obTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooYzliJfjgpLjg6rjgrvjg4Pjg4hcclxuICAgKi9cclxuICByZXNldFRyYW5zZm9ybSgpIHtcclxuICAgIHRoaXMuc2V0VHJhbnNmb3JtKDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOS4reW/g+OBq+enu+WLlVxyXG4gICAqL1xyXG4gIHRyYW5zZm9ybUNlbnRlcigpIHtcclxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgdGhpcy53aWR0aC8yLCB0aGlzLmhlaWdodC8yKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e75YuVXHJcbiAgICovXHJcbiAgdHJhbnNsYXRlKHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICog5Zue6LuiXHJcbiAgICovXHJcbiAgcm90YXRlKHJvdGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbnRleHQucm90YXRlKHJvdGF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrnjgrHjg7zjg6tcclxuICAgKi9cclxuICBzY2FsZShzY2FsZVgsIHNjYWxlWSkge1xyXG4gICAgdGhpcy5jb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54q25oWL44KS5L+d5a2YXHJcbiAgICovXHJcbiAgc2F2ZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeKtuaFi+OCkuW+qeWFg1xyXG4gICAqL1xyXG4gIHJlc3RvcmUoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlLvlg4/jgajjgZfjgabkv53lrZhcclxuICAgKi9cclxuICBzYXZlQXNJbWFnZShtaW1lX3R5cGUpIHtcclxuICAgIG1pbWVfdHlwZSA9IG1pbWVfdHlwZSB8fCBcImltYWdlL3BuZ1wiO1xyXG4gICAgdmFyIGRhdGFfdXJsID0gdGhpcy5jYW52YXMudG9EYXRhVVJMKG1pbWVfdHlwZSk7XHJcbiAgICAvLyBkYXRhX3VybCA9IGRhdGFfdXJsLnJlcGxhY2UobWltZV90eXBlLCBcImltYWdlL29jdGV0LXN0cmVhbVwiKTtcclxuICAgIHdpbmRvdy5vcGVuKGRhdGFfdXJsLCBcInNhdmVcIik7XHJcbiAgICBcclxuICAgIC8vIHRvRGF0YVVSTCDjgpLkvb/jgYjjgbDkuIvoqJjjga7jgojjgYbjgarjg4Tjg7zjg6vjgYzkvZzjgozjgovjgYvjgoIhIVxyXG4gICAgLy8gVE9ETzog44OX44Ot44Kw44Op44Og44Gn57W144KS44GL44GE44Gm5L+d5a2Y44Gn44GN44KL44OE44O844OrXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDluYVcclxuICAgKi9cclxuICBnZXQgd2lkdGgoKSAgIHsgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoOyB9XHJcbiAgc2V0IHdpZHRoKHYpICB7IHRoaXMuY2FudmFzLndpZHRoID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiDpq5jjgZVcclxuICAgKi9cclxuICBnZXQgaGVpZ2h0KCkgICB7IHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7IH1cclxuICBzZXQgaGVpZ2h0KHYpICB7IHRoaXMuY2FudmFzLmhlaWdodCA9IHY7IH1cclxuXHJcbiAgZ2V0IGZpbGxTdHlsZSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTsgfVxyXG4gIHNldCBmaWxsU3R5bGUodikgIHsgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHY7IH1cclxuXHJcbiAgZ2V0IHN0cm9rZVN0eWxlKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGU7IH1cclxuICBzZXQgc3Ryb2tlU3R5bGUodikgIHsgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdjsgfVxyXG5cclxuICBnZXQgZ2xvYmFsQWxwaGEoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYTsgfVxyXG4gIHNldCBnbG9iYWxBbHBoYSh2KSAgeyB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSB2OyB9XHJcblxyXG4gIGdldCBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24oKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb247IH1cclxuICBzZXQgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKHYpICB7IHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB2OyB9XHJcblxyXG4gIGdldCBzaGFkb3dCbHVyKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93Qmx1cjsgfVxyXG4gIHNldCBzaGFkb3dCbHVyKHYpICB7IHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93Q29sb3IoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5zaGFkb3dDb2xvcjsgfVxyXG4gIHNldCBzaGFkb3dDb2xvcih2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSB2OyB9XHJcblxyXG4gIGdldCBzaGFkb3dPZmZzZXRYKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WDsgfVxyXG4gIHNldCBzaGFkb3dPZmZzZXRYKHYpICB7IHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gdjsgfVxyXG5cclxuICBnZXQgc2hhZG93T2Zmc2V0WSgpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFk7IH1cclxuICBzZXQgc2hhZG93T2Zmc2V0WSh2KSAgeyB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHY7IH1cclxuXHJcbiAgZ2V0IGxpbmVDYXAoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lQ2FwOyB9XHJcbiAgc2V0IGxpbmVDYXAodikgIHsgdGhpcy5jb250ZXh0LmxpbmVDYXAgPSB2OyB9XHJcblxyXG4gIGdldCBsaW5lSm9pbigpICAgeyByZXR1cm4gdGhpcy5jb250ZXh0LmxpbmVKb2luOyB9XHJcbiAgc2V0IGxpbmVKb2luKHYpICB7IHRoaXMuY29udGV4dC5saW5lSm9pbiA9IHY7IH1cclxuXHJcbiAgZ2V0IG1pdGVyTGltaXQoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5taXRlckxpbWl0OyB9XHJcbiAgc2V0IG1pdGVyTGltaXQodikgIHsgdGhpcy5jb250ZXh0Lm1pdGVyTGltaXQgPSB2OyB9XHJcblxyXG4gIGdldCBsaW5lV2lkdGgoKSAgIHsgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lV2lkdGg7IH1cclxuICBzZXQgbGluZVdpZHRoKHYpICB7IHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB2OyB9XHJcblxyXG4gIGdldCBmb250KCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuZm9udDsgfVxyXG4gIHNldCBmb250KHYpICB7IHRoaXMuY29udGV4dC5mb250ID0gdjsgfVxyXG5cclxuICBnZXQgdGV4dEFsaWduKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQudGV4dEFsaWduOyB9XHJcbiAgc2V0IHRleHRBbGlnbih2KSAgeyB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gdjsgfVxyXG5cclxuICBnZXQgdGV4dEJhc2VsaW5lKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lOyB9XHJcbiAgc2V0IHRleHRCYXNlbGluZSh2KSAgeyB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lID0gdjsgfVxyXG5cclxuICBnZXQgaW1hZ2VTbW9vdGhpbmdFbmFibGVkKCkgICB7IHJldHVybiB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkOyB9XHJcbiAgc2V0IGltYWdlU21vb3RoaW5nRW5hYmxlZCh2KSAge1xyXG4gICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHY7XHJcbiAgICB0aGlzLmNvbnRleHQud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdjtcclxuICAgIHRoaXMuY29udGV4dC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSB2O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1lYXN1cmVUZXh0KGZvbnQsIHRleHQpIHtcclxuICAgIHRoaXMuX2NvbnRleHQuZm9udCA9IGZvbnQ7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVMaW5lYXJHcmFkaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50LmFwcGx5KHRoaXMuX2NvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlUmFkaWFsR3JhZGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudC5hcHBseSh0aGlzLl9jb250ZXh0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkNhbnZhcy5fY29udGV4dCA9IChmdW5jdGlvbigpIHtcclxuICBpZiAoU3VwcG9ydC5jYW52YXMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufSkoKTtcblxuLy8gaW1wb3J0IHsgZmlyc3QsIGxhc3QsIGNsZWFyIH0gZnJvbSBcIi4uL2NvcmUvYXJyYXlcIlxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5JbnB1dFxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvLyAvKiogZG9tRWxlbWVudCAqL1xyXG4gIC8vIGRvbUVsZW1lbnQgPSBudWxsXHJcblxyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLmRlbHRhUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMucHJldlBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLl90ZW1wUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICB0aGlzLm1heENhY2hlTnVtID0gSW5wdXQuZGVmYXVsdHMubWF4Q2FjaGVOdW07XHJcbiAgICB0aGlzLm1pbkRpc3RhbmNlID0gSW5wdXQuZGVmYXVsdHMubWluRGlzdGFuY2U7XHJcbiAgICB0aGlzLm1heERpc3RhbmNlID0gSW5wdXQuZGVmYXVsdHMubWF4RGlzdGFuY2U7XHJcbiAgICB0aGlzLmNhY2hlUG9zaXRpb25zID0gW107XHJcbiAgICB0aGlzLmZsaWNrVmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICB0aGlzLmZsYWdzID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubGFzdCA9IHRoaXMubm93O1xyXG4gICAgdGhpcy5ub3cgPSB0aGlzLmZsYWdzO1xyXG4gICAgdGhpcy5zdGFydCA9ICh0aGlzLm5vdyBeIHRoaXMubGFzdCkgJiB0aGlzLm5vdztcclxuICAgIHRoaXMuZW5kICAgPSAodGhpcy5ub3cgXiB0aGlzLmxhc3QpICYgdGhpcy5sYXN0O1xyXG5cclxuICAgIC8vIOWkieWMluWApOOCkuabtOaWsFxyXG4gICAgdGhpcy5kZWx0YVBvc2l0aW9uLnggPSB0aGlzLl90ZW1wUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueDtcclxuICAgIHRoaXMuZGVsdGFQb3NpdGlvbi55ID0gdGhpcy5fdGVtcFBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGVsdGFQb3NpdGlvbi54ID09PSAwICYmIHRoaXMuZGVsdGFQb3NpdGlvbi55ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX21vdmVGbGFnID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fbW92ZUZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXJ0KSB7XHJcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWJjeWbnuOBruW6p+aomeOCkuabtOaWsFxyXG4gICAgdGhpcy5wcmV2UG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAvLyDnj77lnKjjga7kvY3nva7jgpLmm7TmlrBcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMuX3RlbXBQb3NpdGlvbi54LCB0aGlzLl90ZW1wUG9zaXRpb24ueSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2FjaGVQb3NpdGlvbnMubGVuZ3RoID4gdGhpcy5tYXhDYWNoZU51bSkge1xyXG4gICAgICB0aGlzLmNhY2hlUG9zaXRpb25zLnNoaWZ0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhY2hlUG9zaXRpb25zLnB1c2godGhpcy5wb3NpdGlvbi5jbG9uZSgpKTtcclxuICB9XHJcblxyXG4gIF9zdGFydCh4LCB5LCBmbGFnKSB7XHJcbiAgICBmbGFnID0gKGZsYWcgIT09IHVuZGVmaW5lZCkgPyBmbGFnIDogMTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCcsIHgsIHkpO1xyXG4gICAgdGhpcy5fbW92ZSh4LCB5KTtcclxuXHJcbiAgICB0aGlzLmZsYWdzIHw9IGZsYWc7XHJcblxyXG4gICAgdmFyIHggPSB0aGlzLl90ZW1wUG9zaXRpb24ueDtcclxuICAgIHZhciB5ID0gdGhpcy5fdGVtcFBvc2l0aW9uLnk7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgIHRoaXMucHJldlBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHJcbiAgICB0aGlzLmZsaWNrVmVsb2NpdHkuc2V0KDAsIDApO1xyXG4gICAgLy8gdGhpcy5jYWNoZVBvc2l0aW9ucy5jbGVhcigpO1xyXG4gICAgdGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgX2VuZChmbGFnKSB7XHJcbiAgICBmbGFnID0gKGZsYWcgIT09IHVuZGVmaW5lZCkgPyBmbGFnIDogMTtcclxuICAgIHRoaXMuZmxhZ3MgJj0gfihmbGFnKTtcclxuXHJcbiAgICBpZiAodGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgLy8gdmFyIGZpcnN0ID0gdGhpcy5jYWNoZVBvc2l0aW9ucy5maXJzdDtcclxuICAgIC8vIHZhciBsYXN0ID0gdGhpcy5jYWNoZVBvc2l0aW9ucy5sYXN0O1xyXG4gICAgdmFyIGZpcnN0ID0gdGhpcy5jYWNoZVBvc2l0aW9uc1swXTtcclxuICAgIHZhciBsYXN0ID0gdGhpcy5jYWNoZVBvc2l0aW9uc1t0aGlzLmNhY2hlUG9zaXRpb25zLmxlbmd0aC0xXTtcclxuXHJcbiAgICB2YXIgdiA9IFZlY3RvcjIuc3ViKGxhc3QsIGZpcnN0KTtcclxuXHJcbiAgICB2YXIgbGVuID0gdi5sZW5ndGgoKTtcclxuXHJcbiAgICBpZiAobGVuID4gdGhpcy5taW5EaXN0YW5jZSkge1xyXG4gICAgICAvLyB2YXIgbm9ybWFsTGVuID0gbGVuLmNsYW1wKHRoaXMubWluRGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UpO1xyXG4gICAgICB2YXIgbm9ybWFsTGVuID0gY2xhbXAobGVuLCB0aGlzLm1pbkRpc3RhbmNlLCB0aGlzLm1heERpc3RhbmNlKTtcclxuICAgICAgdi5kaXYobGVuKS5tdWwobm9ybWFsTGVuKTtcclxuICAgICAgdGhpcy5mbGlja1ZlbG9jaXR5LnNldCh2LngsIHYueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5jYWNoZVBvc2l0aW9ucy5jbGVhcigpO1xyXG4gICAgdGhpcy5jYWNoZVBvc2l0aW9ucy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8g44K544Kx44O844Or44KS6ICD5oWuXHJcbiAgX21vdmUoeCwgeSkge1xyXG4gICAgdGhpcy5fdGVtcFBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5fdGVtcFBvc2l0aW9uLnkgPSB5O1xyXG5cclxuICAgIC8vIGFkanVzdCBzY2FsZVxyXG4gICAgdmFyIGVsbSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIHZhciByZWN0ID0gZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHJlY3Qud2lkdGgpIHtcclxuICAgICAgdGhpcy5fdGVtcFBvc2l0aW9uLnggKj0gZWxtLndpZHRoIC8gcmVjdC53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChyZWN0LmhlaWdodCkge1xyXG4gICAgICB0aGlzLl90ZW1wUG9zaXRpb24ueSAqPSBlbG0uaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgeFxyXG4gICAqIHjluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueDsgfVxyXG4gIHNldCB4KHYpIHsgdGhpcy5wb3NpdGlvbi54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgeVxyXG4gICAqIHnluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueTsgfVxyXG4gIHNldCB5KHYpIHsgdGhpcy5wb3NpdGlvbi55ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgZHhcclxuICAgKiBkeOWApFxyXG4gICAqL1xyXG4gIGdldCBkeCgpIHsgcmV0dXJuIHRoaXMuZGVsdGFQb3NpdGlvbi54OyB9XHJcbiAgc2V0IGR4KHYpIHsgdGhpcy5kZWx0YVBvc2l0aW9uLnggPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBkeVxyXG4gICAqIGR55YCkXHJcbiAgICovXHJcbiAgZ2V0IGR5KCkgeyByZXR1cm4gdGhpcy5kZWx0YVBvc2l0aW9uLnk7IH1cclxuICBzZXQgZHkodikgeyB0aGlzLmRlbHRhUG9zaXRpb24ueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGZ4XHJcbiAgICogZnjlgKRcclxuICAgKi9cclxuICBnZXQgZngoKSB7IHJldHVybiB0aGlzLmZsaWNrVmVsb2NpdHkueDsgfVxyXG4gIHNldCBmeCh2KSB7IHRoaXMuZmxpY2tWZWxvY2l0eS54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgZnlcclxuICAgKiBmeeWApFxyXG4gICAqL1xyXG4gIGdldCBmeSgpIHsgcmV0dXJuIHRoaXMuZmxpY2tWZWxvY2l0eS55OyB9XHJcbiAgc2V0IGZ5KHYpIHsgdGhpcy5mbGlja1ZlbG9jaXR5LnkgPSB2OyB9XHJcblxyXG59XHJcblxyXG5JbnB1dC5kZWZhdWx0cyA9IHtcclxuICBtYXhDYWNoZU51bTogMyxcclxuICBtaW5EaXN0YW5jZTogMTAsXHJcbiAgbWF4RGlzdGFuY2U6IDEwMCxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5pbnB1dC5LZXlib2FyZFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5pbnB1dC5JbnB1dFxyXG4gKi9cclxuY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBJbnB1dCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMua2V5ID0ge307XHJcbiAgICB0aGlzLnByZXNzICA9IHt9O1xyXG4gICAgdGhpcy5kb3duICAgPSB7fTtcclxuICAgIHRoaXMudXAgICAgID0ge307XHJcbiAgICB0aGlzLmxhc3QgICA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2tleWRvd24gPSBudWxsO1xyXG4gICAgdGhpcy5fa2V5dXAgPSBudWxsO1xyXG4gICAgdGhpcy5fa2V5cHJlc3MgPSBudWxsO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLmtleVtlLmtleUNvZGVdID0gdHJ1ZTtcclxuICAgICAgc2VsZi5fa2V5ZG93biA9IGUua2V5Q29kZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5rZXlbZS5rZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICBzZWxmLl9rZXl1cCA9IGUua2V5Q29kZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9rZXlwcmVzcyA9IGUua2V5Q29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oOF5aCx5pu05paw5Yem55CGXHJcbiAgICog44Oe44Kk44OV44Os44O844Og5ZG844KT44Gn5LiL44GV44GELlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gVE9ETzog5LiA5ous44OT44OD44OI5ryU566X44Gn6KGM44GG44KI44GG5L+u5q2j44GZ44KLXHJcbiAgICBmb3IgKHZhciBrIGluIHRoaXMua2V5KSB7XHJcbiAgICAgIHRoaXMubGFzdFtrXSAgICA9IHRoaXMucHJlc3Nba107XHJcbiAgICAgIHRoaXMucHJlc3Nba10gICA9IHRoaXMua2V5W2tdO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kb3duW2tdID0gKHRoaXMucHJlc3Nba10gXiB0aGlzLmxhc3Rba10pICYgdGhpcy5wcmVzc1trXTtcclxuICAgICAgdGhpcy51cFtrXSA9ICh0aGlzLnByZXNzW2tdIF4gdGhpcy5sYXN0W2tdKSAmIHRoaXMubGFzdFtrXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fa2V5ZG93bikge1xyXG4gICAgICB0aGlzLmZsYXJlKCdrZXlkb3duJywgeyBrZXlDb2RlOiB0aGlzLl9rZXlkb3duIH0pO1xyXG4gICAgICB0aGlzLl9rZXlkb3duID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9rZXl1cCkge1xyXG4gICAgICB0aGlzLmZsYXJlKCdrZXl1cCcsIHsga2V5Q29kZTogdGhpcy5fa2V5dXAgfSk7XHJcbiAgICAgIHRoaXMuX2tleXVwID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9rZXlwcmVzcykge1xyXG4gICAgICB0aGlzLmZsYXJlKCdrZXlwcmVzcycsIHsga2V5Q29kZTogdGhpcy5fa2V5cHJlc3MgfSk7XHJcbiAgICAgIHRoaXMuX2tleXByZXNzID0gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLmirzjgZfjgabjgYTjgovjgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKiBAcGFyYW0gICB7TnVtYmVyL1N0cmluZ30ga2V5IGtleUNvZGUgb3Iga2V5TmFtZVxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAqL1xyXG4gIGdldEtleShrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yoa2V5KSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhdGhpcy5wcmVzc1trZXldID09PSB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjgpLmirzjgZfjgZ/jgYvjgpLjg4Hjgqfjg4Pjgq9cclxuICAgKiBAcGFyYW0gICB7TnVtYmVyL1N0cmluZ30ga2V5IGtleUNvZGUgb3Iga2V5TmFtZVxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAgIOODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAqL1xyXG4gIGdldEtleURvd24oa2V5KSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZG93bltrZXldID09IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOOCreODvOOCkumbouOBl+OBn+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqIEBwYXJhbSAgIHtOdW1iZXIvU3RyaW5nfSBrZXkga2V5Q29kZSBvciBrZXlOYW1lXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59ICAg44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICovXHJcbiAgZ2V0S2V5VXAoa2V5KSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudXBba2V5XSA9PSB0cnVlO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjga7mlrnlkJHjgpIgQW5nbGUoRGVncmVlKSDjgaflj5blvpdcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gICDop5LluqYoRGVncmVlKVxyXG4gICAqL1xyXG4gIGdldEtleUFuZ2xlKCkge1xyXG4gICAgdmFyIGFuZ2xlID0gbnVsbDtcclxuICAgIHZhciBhcnJvd0JpdCA9XHJcbiAgICAgICh0aGlzLmdldEtleShcImxlZnRcIikgICA8PCAzKSB8IC8vIDEwMDBcclxuICAgICAgKHRoaXMuZ2V0S2V5KFwidXBcIikgICAgIDw8IDIpIHwgLy8gMDEwMFxyXG4gICAgICAodGhpcy5nZXRLZXkoXCJyaWdodFwiKSAgPDwgMSkgfCAvLyAwMDEwXHJcbiAgICAgICh0aGlzLmdldEtleShcImRvd25cIikpOyAgICAgICAgIC8vIDAwMDFcclxuICAgIFxyXG4gICAgaWYgKGFycm93Qml0ICE9PSAwICYmIEtleWJvYXJkLkFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRS5oYXNPd25Qcm9wZXJ0eShhcnJvd0JpdCkpIHtcclxuICAgICAgYW5nbGUgPSBLZXlib2FyZC5BUlJPV19CSVRfVE9fQU5HTEVfVEFCTEVbYXJyb3dCaXRdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgq3jg7zjga7mirzjgZfjgabjgYTjgovlkJHjgY3jgpLlj5blvpdcclxuICAgKiDmraPopo/ljJbjgZXjgozjgabjgYTjgotcclxuICAgKi9cclxuICBnZXRLZXlEaXJlY3Rpb24oKSB7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KFwibGVmdFwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueCA9IC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5nZXRLZXkoXCJyaWdodFwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueCA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXRLZXkoXCJ1cFwiKSkge1xyXG4gICAgICBkaXJlY3Rpb24ueSA9IC0xO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5nZXRLZXkoXCJkb3duXCIpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uLnggJiYgZGlyZWN0aW9uLnkpIHtcclxuICAgICAgZGlyZWN0aW9uLmRpdihNYXRoLlNRUlQyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgq3jg7zjga7nirbmhYvjgpLoqK3lrprjgZnjgotcclxuICAgKi9cclxuICBzZXRLZXkoa2V5LCBmbGFnKSB7XHJcbiAgICBpZiAodHlwZW9mKGtleSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBrZXkgPSBLZXlib2FyZC5LRVlfQ09ERVtrZXldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5rZXlba2V5XSA9IGZsYWc7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Kt44O844KS5YWo44Gm6Zui44GX44Gf44GT44Go44Gr44GZ44KLXHJcbiAgICovXHJcbiAgY2xlYXJLZXkoKSB7XHJcbiAgICB0aGlzLmtleSA9IHt9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiBAZW51bSBBUlJPV19CSVRfVE9fQU5HTEVfVEFCTEVcclxuICog5pa55ZCR44Gu44Ki44Oz44Kw44OrIGpzZHVja+OBp+OBr+aVsOWtl+OCkuODl+ODreODkeODhuOCo+OBq+aMh+WumuOBp+OBjeOBquOBhO+8n1xyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuS2V5Ym9hcmQuQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFID0ge1xyXG4gIC8qIEBwcm9wZXJ0eSDkuIsgKi9cclxuICAweDAxOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOWPsyAqL1xyXG4gIDB4MDI6ICAgMCxcclxuICAvKiBAcHJvcGVydHkg5LiKICovXHJcbiAgMHgwNDogIDkwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6YgKi9cclxuICAweDA4OiAxODAsXHJcblxyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIogKi9cclxuICAweDA2OiAgNDUsXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iyAqL1xyXG4gIDB4MDM6IDMxNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiKICovXHJcbiAgMHgwYzogMTM1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIsgKi9cclxuICAweDA5OiAyMjUsXHJcblxyXG4gIC8vIOS4ieaWueWQkeWQjOaZguaKvOOBl+WvvuW/nFxyXG4gIC8vIOaDs+WumuWkluOBruaTjeS9nOOBoOOBjOWvvuW/nOOBl+OBqOOBhOOBn+OBu+OBhuOBjOeEoembo1xyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIrlt6YgKi9cclxuICAweDBlOiAgOTAsXHJcbiAgLyogQHByb3BlcnR5IOS4iuW3puS4iyAqL1xyXG4gIDB4MGQ6IDE4MCxcclxuICAvKiBAcHJvcGVydHkg5bem5LiL5Y+zICovXHJcbiAgMHgwYjogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIvlj7PkuIogKi9cclxuICAweDA3OiAgIDAsXHJcbn07XHJcblxyXG4vKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBlbnVtIEtFWV9DT0RFXHJcbiAqIOOCreODvOeVquWPt1xyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuS2V5Ym9hcmQuS0VZX0NPREUgPSB7XHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJiYWNrc3BhY2VcIiA6IDgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ0YWJcIiAgICAgICA6IDksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlbnRlclwiICAgICA6IDEzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicmV0dXJuXCIgICAgOiAxMyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNoaWZ0XCIgICAgIDogMTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjdHJsXCIgICAgICA6IDE3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiYWx0XCIgICAgICAgOiAxOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBhdXNlXCIgICAgIDogMTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjYXBzbG9ja1wiICA6IDIwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZXNjYXBlXCIgICAgOiAyNyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBhZ2V1cFwiICAgIDogMzMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJwYWdlZG93blwiICA6IDM0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZW5kXCIgICAgICAgOiAzNSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImhvbWVcIiAgICAgIDogMzYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJsZWZ0XCIgICAgICA6IDM3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidXBcIiAgICAgICAgOiAzOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInJpZ2h0XCIgICAgIDogMzksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkb3duXCIgICAgICA6IDQwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaW5zZXJ0XCIgICAgOiA0NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRlbGV0ZVwiICAgIDogNDYsXHJcbiAgXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIwXCIgOiA0OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjFcIiA6IDQ5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiMlwiIDogNTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIzXCIgOiA1MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjRcIiA6IDUyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiNVwiIDogNTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI2XCIgOiA1NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIjdcIiA6IDU1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiOFwiIDogNTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCI5XCIgOiA1NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcclxuICBcImFcIiA6IDY1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiQVwiIDogNjUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJiXCIgOiA2NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkJcIiA6IDY2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiY1wiIDogNjcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJDXCIgOiA2NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRcIiA6IDY4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiRFwiIDogNjgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJlXCIgOiA2OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkVcIiA6IDY5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZlwiIDogNzAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJGXCIgOiA3MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImdcIiA6IDcxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiR1wiIDogNzEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJoXCIgOiA3MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIkhcIiA6IDcyLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiaVwiIDogNzMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJJXCIgOiA3MyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImpcIiA6IDc0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiSlwiIDogNzQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJrXCIgOiA3NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIktcIiA6IDc1LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibFwiIDogNzYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJMXCIgOiA3NixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm1cIiA6IDc3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiTVwiIDogNzcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJuXCIgOiA3OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIk5cIiA6IDc4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwib1wiIDogNzksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJPXCIgOiA3OSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInBcIiA6IDgwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiUFwiIDogODAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJxXCIgOiA4MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlFcIiA6IDgxLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiclwiIDogODIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJSXCIgOiA4MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNcIiA6IDgzLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiU1wiIDogODMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ0XCIgOiA4NCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlRcIiA6IDg0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwidVwiIDogODUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJVXCIgOiA4NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInZcIiA6IDg2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiVlwiIDogODYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ3XCIgOiA4NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIldcIiA6IDg3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwieFwiIDogODgsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJYXCIgOiA4OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInlcIiA6IDg5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiWVwiIDogODksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJ6XCIgOiA5MCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIlpcIiA6IDkwLFxyXG4gIFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkMFwiIDogOTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQxXCIgOiA5NyxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm51bXBhZDJcIiA6IDk4LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtcGFkM1wiIDogOTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ0XCIgOiAxMDAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ1XCIgOiAxMDEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ2XCIgOiAxMDIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ3XCIgOiAxMDMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ4XCIgOiAxMDQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJudW1wYWQ5XCIgOiAxMDUsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJtdWx0aXBseVwiICAgICAgOiAxMDYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJhZGRcIiAgICAgICAgICAgOiAxMDcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzdWJ0cmFjdFwiICAgICAgOiAxMDksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkZWNpbWFscG9pbnRcIiAgOiAxMTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJkaXZpZGVcIiAgICAgICAgOiAxMTEsXHJcblxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjFcIiAgICA6IDExMixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYyXCIgICAgOiAxMTMsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmM1wiICAgIDogMTE0LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjRcIiAgICA6IDExNSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY1XCIgICAgOiAxMTYsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmNlwiICAgIDogMTE3LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjdcIiAgICA6IDExOCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImY4XCIgICAgOiAxMTksXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmOVwiICAgIDogMTIwLFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZjEwXCIgICA6IDEyMSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImYxMVwiICAgOiAxMjIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmMTJcIiAgIDogMTIzLFxyXG4gIFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwibnVtbG9ja1wiICAgOiAxNDQsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzY3JvbGxsb2NrXCI6IDE0NSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcInNlbWljb2xvblwiIDogMTg2LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwiZXF1YWxzaWduXCIgOiAxODcsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJjb21tYVwiICAgICA6IDE4OCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImRhc2hcIiAgICAgIDogMTg5LFxyXG4gIC8qIEBwcm9wZXJ0eSAqL1xyXG4gIFwicGVyaW9kXCIgICAgOiAxOTAsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJmb3J3YXJkIHNsYXNoXCIgOiAxOTEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCIvXCI6IDE5MSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImdyYXZlIGFjY2VudFwiICA6IDE5MixcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcIm9wZW4gYnJhY2tldFwiICA6IDIxOSxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImJhY2sgc2xhc2hcIiAgICA6IDIyMCxcclxuICAvKiBAcHJvcGVydHkgKi9cclxuICBcImNsb3NlIGJyYWNrZXRcIiAgOiAyMjEsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzaW5nbGUgcXVvdGVcIiAgOiAyMjIsXHJcbiAgLyogQHByb3BlcnR5ICovXHJcbiAgXCJzcGFjZVwiICAgICAgICAgOiAzMlxyXG5cclxufTtcblxuLyoqXHJcbiAqIE1vdXNlRXZlbnQvVG91Y2jmi6HlvLVcclxuICogQG1ldGhvZCAgICBwb2ludFhcclxuICog44Oe44Km44K544GuWOW6p+aomS5cclxuICovXHJcbnZhciBwb2ludFggPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBNb3VzZUV2ZW50L1RvdWNo5ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRYXHJcbiAqIOODnuOCpuOCueOBrljluqfmqJkuXHJcbiAqL1xyXG52YXIgcG9pbnRZID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnRZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUb3VjaEV2ZW505ouh5by1XHJcbiAqIEBtZXRob2QgICAgcG9pbnRYXHJcbiAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuICovXHJcbnZhciB0b3VjaFBvaW50WCA9IHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIC8vIHJldHVybiB0aGlzLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdG0uZ2xvYmFsLnNjcm9sbFg7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRvdWNoRXZlbnTmi6HlvLVcclxuICogQG1ldGhvZCAgICBwb2ludFlcclxuICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4gKi9cclxudmFyIHRvdWNoUG9pbnRZID0ge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAvLyByZXR1cm4gdGhpcy50b3VjaGVzWzBdLnBhZ2VZIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG0uZ2xvYmFsLnNjcm9sbFk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbi8vIDsoZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vIGlmICghcGhpbmEuZ2xvYmFsLkV2ZW50KSByZXR1cm4gO1xyXG5cclxuICAvKipcclxuICAgKiBAY2xhc3MgZ2xvYmFsLkV2ZW50XHJcbiAgICog5pei5a2Y44GuRXZlbnTjgqrjg5bjgrjjgqfjgq/jg4jmi6HlvLVcclxuICAgKi9cclxuICAgIFxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIEBtZXRob2Qgc3RvcFxyXG4gIC8vICAqIOOCpOODmeODs+ODiOOBruODh+ODleOCqeODq+ODiOWHpueQhiAmIOS8nemBlOOCkuatouOCgeOCi1xyXG4gIC8vICAqL1xyXG4gIC8vIEV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAvLyDjgqTjg5njg7Pjg4jjgq3jg6Pjg7Pjgrvjg6tcclxuICAvLyAgIHRoaXMucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIC8vIOOCpOODmeODs+ODiOS8nemBlOOCkuatouOCgeOCi1xyXG4gIC8vICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAvLyB9O1xyXG5cclxuLy8gfSkoKTtcclxuXHJcblxyXG4vLyAoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAgIGlmICghcGhpbmEuZ2xvYmFsLk1vdXNlRXZlbnQpIHJldHVybiA7XHJcblxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBjbGFzcyBnbG9iYWwuTW91c2VFdmVudFxyXG4vLyAgICAqIE1vdXNlRXZlbnQg44Kv44Op44K5XHJcbi8vICAgICovXHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFhcclxuLy8gICAgKiDjg57jgqbjgrnjga5Y5bqn5qiZLlxyXG4vLyAgICAqL1xyXG4vLyAgIE1vdXNlRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHJldHVybiB0aGlzLmNsaWVudFggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgLy8gcmV0dXJuIHRoaXMucGFnZVggLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gd2luZG93LnNjcm9sbFg7XHJcbi8vICAgfSk7XHJcbiAgXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFlcclxuLy8gICAgKiDjg57jgqbjgrnjga5Z5bqn5qiZLlxyXG4vLyAgICAqL1xyXG4vLyAgIE1vdXNlRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WVwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHJldHVybiB0aGlzLmNsaWVudFkgLSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbi8vICAgICAvLyByZXR1cm4gdGhpcy5wYWdlWSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHdpbmRvdy5zY3JvbGxZO1xyXG4vLyAgIH0pO1xyXG4gICAgXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbi8vICAgaWYgKCFwaGluYS5nbG9iYWwuVG91Y2hFdmVudCkgcmV0dXJuIDtcclxuICBcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAY2xhc3MgZ2xvYmFsLlRvdWNoRXZlbnRcclxuLy8gICAgKiBUb3VjaEV2ZW50IOOCr+ODqeOCuVxyXG4vLyAgICAqL1xyXG4gIFxyXG4vLyAgIC8qKlxyXG4vLyAgICAqIEBtZXRob2QgICAgcG9pbnRYXHJcbi8vICAgICog44K/44OD44OB44Kk44OZ44Oz44OILlxyXG4vLyAgICAqL1xyXG4vLyAgIFRvdWNoRXZlbnQucHJvdG90eXBlLmdldHRlcihcInBvaW50WFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0bS5nbG9iYWwuc2Nyb2xsWDtcclxuLy8gICB9KTtcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WVxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaEV2ZW50LnByb3RvdHlwZS5nZXR0ZXIoXCJwb2ludFlcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHJldHVybiB0aGlzLnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuLy8gICAgICAgLy8gcmV0dXJuIHRoaXMudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRtLmdsb2JhbC5zY3JvbGxZO1xyXG4vLyAgIH0pOyAgXHJcbiAgICBcclxuLy8gfSkoKTtcclxuXHJcblxyXG4vLyAoZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuLy8gICBpZiAoIXBoaW5hLmdsb2JhbC5Ub3VjaCkgcmV0dXJuIDtcclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAY2xhc3MgZ2xvYmFsLlRvdWNoXHJcbi8vICAgICogVG91Y2hFdmVudCDjgq/jg6njgrlcclxuLy8gICAgKi9cclxuICBcclxuLy8gICAvKipcclxuLy8gICAgKiBAbWV0aG9kICAgIHBvaW50WFxyXG4vLyAgICAqIOOCv+ODg+ODgeOCpOODmeODs+ODiC5cclxuLy8gICAgKi9cclxuLy8gICBUb3VjaC5wcm90b3R5cGUuZ2V0dGVyKFwicG9pbnRYXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnRYIC0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICB9KTtcclxuXHJcbi8vICAgLyoqXHJcbi8vICAgICogQG1ldGhvZCAgICBwb2ludFlcclxuLy8gICAgKiDjgr/jg4Pjg4HjgqTjg5njg7Pjg4guXHJcbi8vICAgICovXHJcbi8vICAgVG91Y2gucHJvdG90eXBlLmdldHRlcihcInBvaW50WVwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50WSAtIHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuLy8gICB9KTtcclxuICAgIFxyXG4vLyB9KSgpO1xuXG52YXIgQlVUVE9OX01BUDtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuTW91c2VcclxuICogQGV4dGVuZHMgcGhpbmEuaW5wdXQuSW5wdXRcclxuICovXHJcbmNsYXNzIE1vdXNlIGV4dGVuZHMgSW5wdXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XHJcbiAgICBzdXBlcihkb21FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmlkID0gMDtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9zdGFydChwb2ludFguZ2V0LmNhbGwoZSksIHBvaW50WS5nZXQuY2FsbChlKSwgMTw8ZS5idXR0b24pO1xyXG4gICAgICAvLyBzZWxmLl9zdGFydChlLnBvaW50WCwgZS5wb2ludFksIDE8PGUuYnV0dG9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9lbmQoMTw8ZS5idXR0b24pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBzZWxmLl9tb3ZlKHBvaW50WC5nZXQuY2FsbChlKSwgcG9pbnRZLmdldC5jYWxsKGUpKTtcclxuICAgICAgLy8gc2VsZi5fbW92ZShlLnBvaW50WCwgZS5wb2ludFkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44Oe44Km44K544GM44Kt44Oj44Oz44OQ44K56KaB57Sg44Gu5aSW44Gr5Ye644Gf5aC05ZCI44Gu5a++5b+cXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbihlKSAge1xyXG4gICAgICBzZWxmLl9lbmQoMSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+WPluW+l1xyXG4gICAqL1xyXG4gIGdldEJ1dHRvbihidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEJVVFRPTl9NQVBbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuICh0aGlzLm5vdyAmIGJ1dHRvbikgIT0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+ODgOOCpuODs+WPluW+l1xyXG4gICAqL1xyXG4gIGdldEJ1dHRvbkRvd24oYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEJVVFRPTl9NQVBbYnV0dG9uXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKHRoaXMuc3RhcnQgJiBidXR0b24pICE9IDA7XHJcbiAgfVxyXG4gICAgICBcclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgqLjg4Pjg5flj5blvpdcclxuICAgKi9cclxuICBnZXRCdXR0b25VcChidXR0b24pIHtcclxuICAgIGlmICh0eXBlb2YoYnV0dG9uKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEJVVFRPTl9NQVBbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuICh0aGlzLmVuZCAmIGJ1dHRvbikgIT0gMDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiogQHN0YXRpYyBAcHJvcGVydHkgKi9cclxuTW91c2UuQlVUVE9OX0xFRlQgPSAweDE7XHJcbi8qKiBAc3RhdGljIEBwcm9wZXJ0eSAqL1xyXG5Nb3VzZS5CVVRUT05fTUlERExFID0gMHgyO1xyXG4vKiogQHN0YXRpYyBAcHJvcGVydHkgKi9cclxuTW91c2UuQlVUVE9OX1JJR0hUID0gMHg0O1xyXG5cclxuQlVUVE9OX01BUCA9IHtcclxuICBcImxlZnRcIiAgOiBNb3VzZS5CVVRUT05fTEVGVCxcclxuICBcIm1pZGRsZVwiOiBNb3VzZS5CVVRUT05fTUlERExFLFxyXG4gIFwicmlnaHRcIiA6IE1vdXNlLkJVVFRPTl9SSUdIVFxyXG59O1xyXG5cclxuTW91c2UucHJvdG90eXBlLmdldFBvaW50aW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmdldEJ1dHRvbihcImxlZnRcIik7IH07XHJcbk1vdXNlLnByb3RvdHlwZS5nZXRQb2ludGluZ1N0YXJ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmdldEJ1dHRvbkRvd24oXCJsZWZ0XCIpOyB9O1xyXG5Nb3VzZS5wcm90b3R5cGUuZ2V0UG9pbnRpbmdFbmQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZ2V0QnV0dG9uVXAoXCJsZWZ0XCIpOyB9O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmlucHV0LlRvdWNoXHJcbiAqIEBleHRlbmRzIHBoaW5hLmlucHV0LklucHV0XHJcbiAqL1xyXG5jbGFzcyBUb3VjaCBleHRlbmRzIElucHV0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgaXNNdWx0aSkge1xyXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5pZCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlzTXVsdGkgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fc3RhcnQodG91Y2hQb2ludFguZ2V0LmNhbGwoZSksIHRvdWNoUG9pbnRZLmdldC5jYWxsKGUpLCB0cnVlKTtcclxuICAgICAgLy8gc2VsZi5fc3RhcnQoZS5wb2ludFgsIGUucG9pbnRZLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5fZW5kKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHNlbGYuX21vdmUodG91Y2hQb2ludFguZ2V0LmNhbGwoZSksIHRvdWNoUG9pbnRZLmdldC5jYWxsKGUpKTtcclxuICAgICAgLy8gc2VsZi5fbW92ZShlLnBvaW50WCwgZS5wb2ludFkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgr/jg4Pjg4HjgZfjgabjgYTjgovjgYvjgpLliKTlrppcclxuICAgKi9cclxuICBnZXRUb3VjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vdyAhPSAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgr/jg4Pjg4Hplovlp4vmmYLjgasgdHJ1ZVxyXG4gICAqL1xyXG4gIGdldFRvdWNoU3RhcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydCAhPSAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgr/jg4Pjg4HntYLkuobmmYLjgasgdHJ1ZVxyXG4gICAqL1xyXG4gIGdldFRvdWNoRW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5kICE9IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBtZXRob2RcclxuICog44Od44Kk44Oz44OG44Kj44Oz44Kw54q25oWL5Y+W5b6XKG1vdXNlIOOBqOOBruW3rueVsOWvvuetlilcclxuICovXHJcblRvdWNoLnByb3RvdHlwZS5nZXRQb2ludGluZyAgICAgICAgPSBUb3VjaC5wcm90b3R5cGUuZ2V0VG91Y2g7XHJcbi8qKlxyXG4gKiBAbWV0aG9kXHJcbiAqIOODneOCpOODs+ODhuOCo+ODs+OCsOOCkumWi+Wni+OBl+OBn+OBi+OCkuWPluW+lyhtb3VzZSDjgajjga7lt67nlbDlr77nrZYpXHJcbiAqL1xyXG5Ub3VjaC5wcm90b3R5cGUuZ2V0UG9pbnRpbmdTdGFydCAgID0gVG91Y2gucHJvdG90eXBlLmdldFRvdWNoU3RhcnQ7XHJcbi8qKlxyXG4gKiBAbWV0aG9kXHJcbiAqIOODneOCpOODs+ODhuOCo+ODs+OCsOOCkue1guS6huOBl+OBn+OBi+OCkuWPluW+lyhtb3VzZSDjgajjga7lt67nlbDlr77nrZYpXHJcbiAqL1xyXG5Ub3VjaC5wcm90b3R5cGUuZ2V0UG9pbnRpbmdFbmQgICAgID0gVG91Y2gucHJvdG90eXBlLmdldFRvdWNoRW5kO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuVG91Y2hMaXN0XHJcbiAqL1xyXG5jbGFzcyBUb3VjaExpc3Qge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50KSB7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHRoaXMudG91Y2hlcyA9IFtdO1xyXG4gICAgdmFyIHRvdWNoTWFwID0gdGhpcy50b3VjaE1hcCA9IHt9O1xyXG5cclxuICAgIC8vIDMyYml0IOWRqOacn+OBp0lE44KS44Or44O844OX44GV44Gb44KLXHJcbiAgICB0aGlzLl9pZCA9IG5ldyBVaW50MzJBcnJheSgxKTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGVhY2guY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gc2VsZi5nZXRFbXB0eSgpO1xyXG4gICAgICAgIHRvdWNoTWFwW3QuaWRlbnRpZmllcl0gPSB0b3VjaDtcclxuICAgICAgICB0b3VjaC5fc3RhcnQocG9pbnRYLmdldC5jYWxsKHQpLCBwb2ludFkuZ2V0LmNhbGwodCkpO1xyXG4gICAgICAgIC8vIHRvdWNoLl9zdGFydCh0LnBvaW50WCwgdC5wb2ludFkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgaWQgPSB0LmlkZW50aWZpZXI7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hNYXBbaWRdO1xyXG4gICAgICAgIHRvdWNoLl9lbmQoKTtcclxuICAgICAgICBkZWxldGUgdG91Y2hNYXBbaWRdO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgdG91Y2ggPSB0b3VjaE1hcFt0LmlkZW50aWZpZXJdO1xyXG4gICAgICAgIHRvdWNoLl9tb3ZlKHBvaW50WC5nZXQuY2FsbCh0KSwgcG9pbnRZLmdldC5jYWxsKHQpKTtcclxuICAgICAgICAvLyB0b3VjaC5fbW92ZSh0LnBvaW50WCwgdC5wb2ludFkpO1xyXG4gICAgICB9KTtcclxuICAgICAgZS5zdG9wKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpUGhvbmUg44Gn44GvIDbmnKzmjIfku6XkuIrjgr/jg4Pjg4HjgZnjgovjgajlvLfliLbnmoTjgavjgZnjgbnjgabjga7jgr/jg4Pjg4HjgYzop6PpmaTjgZXjgozjgotcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCfjgZPjga7nq6/mnKvjgafjga7lkIzmmYLjgr/jg4Pjg4HmlbDjga7liLbpmZDjgpLotoXjgYjjgb7jgZfjgZ/jgIInKTtcclxuICAgICAgZWFjaC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgaWQgPSB0LmlkZW50aWZpZXI7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gdG91Y2hNYXBbaWRdO1xyXG4gICAgICAgIHRvdWNoLl9lbmQoKTtcclxuICAgICAgICBkZWxldGUgdG91Y2hNYXBbaWRdO1xyXG4gICAgICB9KTtcclxuICAgICAgZS5zdG9wKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVtcHR5KCkge1xyXG4gICAgdmFyIHRvdWNoID0gbmV3IFRvdWNoKHRoaXMuZG9tRWxlbWVudCwgdHJ1ZSk7XHJcbiAgXHJcbiAgICB0b3VjaC5pZCA9IHRoaXMuaWQ7XHJcbiAgICB0aGlzLnRvdWNoZXMucHVzaCh0b3VjaCk7XHJcblxyXG4gICAgcmV0dXJuIHRvdWNoO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG91Y2goaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdWNoTWFwW2lkXTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvdWNoKHRvdWNoKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMudG91Y2hlcy5pbmRleE9mKHRvdWNoKTtcclxuICAgIHRoaXMudG91Y2hlcy5zcGxpY2UoaSwgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbih0b3VjaCkge1xyXG4gICAgICBpZiAoIXRvdWNoLnJlbGVhc2VkKSB7XHJcbiAgICAgICAgdG91Y2gudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGlmICh0b3VjaC5mbGFncyA9PT0gMCkge1xyXG4gICAgICAgICAgdG91Y2gucmVsZWFzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0b3VjaC5yZWxlYXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVG91Y2godG91Y2gpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZFswXSsrOyB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuR2FtZXBhZE1hbmFnZXJcclxuICog44Ky44O844Og44OR44OD44OJ44Oe44ON44O844K444Oj44O8LlxyXG4gKiDjgrLjg7zjg6Djg5Hjg4Pjg4nmjqXntprnirbms4Hjga7nm6PoppbjgIHlgIvjgIXjga7jgrLjg7zjg6Djg5Hjg4Pjg4njga7lhaXlipvnirbmhYvjga7mm7TmlrDjgpLooYzjgYYuXHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBHYW1lcGFkTWFuYWdlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIOS9nOaIkOa4iOOBv3BoaW5hLmlucHV0LkdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjga7jg6rjgrnjg4hcclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYmplY3QuPG51bWJlciwgcGhpbmEuaW5wdXQuR2FtZXBhZD59XHJcbiAgICovXHJcbiAgLy8gZ2FtZXBhZHM6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIOS9nOaIkOa4iOOBv+OCsuODvOODoOODkeODg+ODieOBrmluZGV444Gu44Oq44K544OIXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICAvLyBfY3JlYXRlZDogbnVsbCxcclxuXHJcbiAgLyoqXHJcbiAgICog44Op44OD44OX5YmNR2FtZXBhZOOBruODquOCueODiFxyXG4gICAqIEB0eXBlIHtwaGluYS5pbnB1dC5HYW1lcGFkW119XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICAvLyBfcmF3Z2FtZXBhZHM6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmdhbWVwYWRzID0ge307XHJcbiAgICB0aGlzLl9jcmVhdGVkID0gW107XHJcbiAgICB0aGlzLl9yYXdnYW1lcGFkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuX3ByZXZUaW1lc3RhbXBzID0ge307XHJcblxyXG4gICAgdGhpcy5fZ2V0R2FtZXBhZHMgPSBudWxsO1xyXG4gICAgdmFyIG5hdmlnYXRvciA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmdldEdhbWVwYWRzKSB7XHJcbiAgICAgIHRoaXMuX2dldEdhbWVwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzLmJpbmQobmF2aWdhdG9yKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcykge1xyXG4gICAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcy5iaW5kKG5hdmlnYXRvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9nZXRHYW1lcGFkcyA9IGZ1bmN0aW9uKCkge307XHJcbiAgICB9XHJcblxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGNvbm5lY3RlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGdhbWVwYWQgPSB0aGlzLmdldChlLmdhbWVwYWQuaW5kZXgpO1xyXG4gICAgICBnYW1lcGFkLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2Nvbm5lY3RlZCcsIHtcclxuICAgICAgICBnYW1lcGFkOiBnYW1lcGFkLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcGhpbmEkMS5nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGRpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGdhbWVwYWQgPSB0aGlzLmdldChlLmdhbWVwYWQuaW5kZXgpO1xyXG4gICAgICBnYW1lcGFkLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZsYXJlKCdkaXNjb25uZWN0ZWQnLCB7XHJcbiAgICAgICAgZ2FtZXBhZDogZ2FtZXBhZCxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oOF5aCx5pu05paw5Yem55CGXHJcbiAgICog44Oe44Kk44OV44Os44O844Og5ZG844KT44Gn5LiL44GV44GELlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX3BvbGwoKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gdGhpcy5fY3JlYXRlZC5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLl9jcmVhdGVkW2ldO1xyXG4gICAgICB2YXIgcmF3Z2FtZXBhZCA9IHRoaXMuX3Jhd2dhbWVwYWRzW2luZGV4XTtcclxuXHJcbiAgICAgIGlmICghcmF3Z2FtZXBhZCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmF3Z2FtZXBhZC50aW1lc3RhbXAgJiYgKHJhd2dhbWVwYWQudGltZXN0YW1wID09PSB0aGlzLl9wcmV2VGltZXN0YW1wc1tpXSkpIHtcclxuICAgICAgICB0aGlzLmdhbWVwYWRzW2luZGV4XS5fdXBkYXRlU3RhdGVFbXB0eSgpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9wcmV2VGltZXN0YW1wc1tpXSA9IHJhd2dhbWVwYWQudGltZXN0YW1wO1xyXG4gICAgICB0aGlzLmdhbWVwYWRzW2luZGV4XS5fdXBkYXRlU3RhdGUocmF3Z2FtZXBhZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZXjgozjgZ9pbmRleOOBrkdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZkuXHJcbiAgICpcclxuICAgKiDmnKrkvZzmiJDjga7loLTlkIjjga/kvZzmiJDjgZfjgabov5TjgZkuXHJcbiAgICovXHJcbiAgZ2V0KGluZGV4KSB7XHJcbiAgICBpbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmdhbWVwYWRzW2luZGV4XSkge1xyXG4gICAgICB0aGlzLl9jcmVhdGVkLnB1c2goaW5kZXgpO1xyXG4gICAgICB0aGlzLmdhbWVwYWRzW2luZGV4XSA9IG5ldyBHYW1lcGFkKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nYW1lcGFkc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjIflrprjgZXjgozjgZ9pbmRleOOBrkdhbWVwYWTjgqrjg5bjgrjjgqfjgq/jg4jjgpLnoLTmo4TjgZnjgosuXHJcbiAgICog56C05qOE44GV44KM44GfR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOBr+S7pemZjeabtOaWsOOBleOCjOOBquOBhC5cclxuICAgKi9cclxuICBkaXNwb3NlKGluZGV4KSB7XHJcbiAgICBpZiAoY29udGFpbnMuY2FsbCh0aGlzLl9jcmVhdGVkLCBpbmRleCkpIHtcclxuICAgIC8vIGlmICh0aGlzLl9jcmVhdGVkLmNvbnRhaW5zKGluZGV4KSkge1xyXG4gICAgICB2YXIgZ2FtZXBhZCA9IHRoaXMuZ2V0KGluZGV4KTtcclxuICAgICAgZGVsZXRlIHRoaXMuZ2FtZXBhZFtnYW1lcGFkXTtcclxuICAgICAgZXJhc2UuY2FsbCh0aGlzLl9jcmVhdGVkLCBpbmRleCk7XHJcbiAgICAgIC8vIHRoaXMuX2NyZWF0ZWQuZXJhc2UoaW5kZXgpO1xyXG5cclxuICAgICAgZ2FtZXBhZC5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaMh+WumuOBleOCjOOBn2luZGV444Gu44Ky44O844Og44OR44OD44OJ44GM5o6l57aa5Lit44GL44Gp44GG44GL44KS6L+U44GZLlxyXG4gICAqXHJcbiAgICogR2FtZXBhZOOCquODluOCuOOCp+OCr+ODiOOBjOacquS9nOaIkOOBruWgtOWQiOOBp+OCguWLleS9nOOBmeOCiy5cclxuICAgKi9cclxuICBpc0Nvbm5lY3RlZChpbmRleCkge1xyXG4gICAgaW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9yYXdnYW1lcGFkc1tpbmRleF0gJiYgdGhpcy5fcmF3Z2FtZXBhZHNbaW5kZXhdLmNvbm5lY3RlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3BvbGwoKSB7XHJcbiAgICB2YXIgcmF3R2FtZXBhZHMgPSB0aGlzLl9nZXRHYW1lcGFkcygpO1xyXG4gICAgaWYgKHJhd0dhbWVwYWRzKSB7XHJcbiAgICAgIGNsZWFyLmNhbGwodGhpcy5fcmF3Z2FtZXBhZHMpO1xyXG4gICAgICAvLyB0aGlzLl9yYXdnYW1lcGFkcy5jbGVhcigpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IHJhd0dhbWVwYWRzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHJhd0dhbWVwYWRzW2ldKSB7XHJcbiAgICAgICAgICB0aGlzLl9yYXdnYW1lcGFkcy5wdXNoKHJhd0dhbWVwYWRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIF9zdGF0aWM6IHtcclxuICAvLyAgIC8qKiDjg5bjg6njgqbjgrbjgYxHYW1lcGFkIEFQSeOBq+WvvuW/nOOBl+OBpuOBhOOCi+OBiy4gKi9cclxuICAvLyAgIGlzQXZhaWxhYmxlOiAoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgIHZhciBuYXYgPSBwaGluYS5nbG9iYWwubmF2aWdhdG9yO1xyXG4gIC8vICAgICBpZiAoIW5hdikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAvLyAgICAgcmV0dXJuICghIW5hdi5nZXRHYW1lcGFkcykgfHwgKCEhbmF2LndlYmtpdEdldEdhbWVwYWRzKTtcclxuICAvLyAgIH0pKCksXHJcbiAgLy8gfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbi8qKiDjg5bjg6njgqbjgrbjgYxHYW1lcGFkIEFQSeOBq+WvvuW/nOOBl+OBpuOBhOOCi+OBiy4gKi9cclxuR2FtZXBhZE1hbmFnZXIuaXNBdmFpbGFibGUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG5hdiA9IHBoaW5hJDEuZ2xvYmFsLm5hdmlnYXRvcjtcclxuICBpZiAoIW5hdikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICByZXR1cm4gKCEhbmF2LmdldEdhbWVwYWRzKSB8fCAoISFuYXYud2Via2l0R2V0R2FtZXBhZHMpO1xyXG59KSgpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuR2FtZXBhZFxyXG4gKiDjgrLjg7zjg6Djg5Hjg4Pjg4lcclxuICpcclxuICog55u05o6l44Kk44Oz44K544K/44Oz44K55YyW44Gb44Ga44CBcGhpbmEuaW5wdXQuR2FtZXBhZE1hbmFnZXLjgqrjg5bjgrjjgqfjgq/jg4jjgYvjgonlj5blvpfjgZfjgabkvb/nlKjjgZnjgosuXHJcbiAqL1xyXG5jbGFzcyBHYW1lcGFkIHtcclxuLy8gcGhpbmEuZGVmaW5lKFwicGhpbmEuaW5wdXQuR2FtZXBhZFwiLCB7XHJcblxyXG4gIC8vIGluZGV4OiBudWxsLFxyXG4gIC8vIGJ1dHRvbnM6IG51bGwsXHJcbiAgLy8gLyoqIEB0eXBlIHtBcnJheS48cGhpbmEuZ2VvbS5WZWN0b3IyPn0gKi9cclxuICAvLyBzdGlja3M6IG51bGwsXHJcblxyXG4gIC8vIGlkOiBudWxsLFxyXG4gIC8vIGNvbm5lY3RlZDogZmFsc2UsXHJcbiAgLy8gbWFwcGluZzogbnVsbCxcclxuICAvLyB0aW1lc3RhbXA6IG51bGwsXHJcblxyXG4gIGNvbnN0cnVjdG9yKGluZGV4KSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcbiAgICAvLyB0aGlzLmJ1dHRvbnMgPSBBcnJheS5yYW5nZSgwLCAxNikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5idXR0b25zID0gcmFuZ2UuY2FsbChbXSwgMCwgMTYpLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcclxuICAgICAgICBsYXN0OiBmYWxzZSxcclxuICAgICAgICBkb3duOiBmYWxzZSxcclxuICAgICAgICB1cDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RpY2tzID0gcmFuZ2UuY2FsbChbXSwgMCwgMikubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gdGhpcy5zdGlja3MgPSBBcnJheS5yYW5nZSgwLCAyKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYXBwaW5nID0gbnVsbDtcclxuICAgIHRoaXMudGltZXN0YW1wID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OBjOaKvOOBleOCjOOBpuOBhOOCi+OBiy5cclxuICAgKi9cclxuICBnZXRLZXkoYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEdhbWVwYWQuQlVUVE9OX0NPREVbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl0ucHJlc3NlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOODnOOCv+ODs+OCkuaKvOOBl+OBny5cclxuICAgKi9cclxuICBnZXRLZXlEb3duKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZihidXR0b24pID09PSAnc3RyaW5nJykge1xyXG4gICAgICBidXR0b24gPSBHYW1lcGFkLkJVVFRPTl9DT0RFW2J1dHRvbl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5idXR0b25zW2J1dHRvbl0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dLmRvd247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5zjgr/jg7PjgpLpm6LjgZfjgZ8uXHJcbiAgICovXHJcbiAgZ2V0S2V5VXAoYnV0dG9uKSB7XHJcbiAgICBpZiAodHlwZW9mKGJ1dHRvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGJ1dHRvbiA9IEdhbWVwYWQuQlVUVE9OX0NPREVbYnV0dG9uXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJ1dHRvbnNbYnV0dG9uXSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl0udXA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDljYHlrZfjgq3jg7zjga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJEuXHJcbiAgICovXHJcbiAgZ2V0S2V5QW5nbGUoKSB7XHJcbiAgICB2YXIgYW5nbGUgPSBudWxsO1xyXG4gICAgdmFyIGFycm93Qml0ID1cclxuICAgICAgKHRoaXMuZ2V0S2V5KCdsZWZ0JykgPDwgMykgfCAvLyAxMDAwXHJcbiAgICAgICh0aGlzLmdldEtleSgndXAnKSA8PCAyKSB8IC8vIDAxMDBcclxuICAgICAgKHRoaXMuZ2V0S2V5KCdyaWdodCcpIDw8IDEpIHwgLy8gMDAxMFxyXG4gICAgICAodGhpcy5nZXRLZXkoJ2Rvd24nKSk7IC8vIDAwMDFcclxuXHJcbiAgICBpZiAoYXJyb3dCaXQgIT09IDAgJiYgQVJST1dfQklUX1RPX0FOR0xFX1RBQkxFLmhhc093blByb3BlcnR5KGFycm93Qml0KSkge1xyXG4gICAgICBhbmdsZSA9IEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRVthcnJvd0JpdF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y2B5a2X44Kt44O844Gu5YWl5Yqb44GV44KM44Gm44GE44KL5pa55ZCR44KS44OZ44Kv44OI44Or44GnLlxyXG4gICAqIOato+imj+WMluOBleOCjOOBpuOBhOOCiy5cclxuICAgKi9cclxuICBnZXRLZXlEaXJlY3Rpb24oKSB7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KCdsZWZ0JykpIHtcclxuICAgICAgZGlyZWN0aW9uLnggPSAtMTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nZXRLZXkoJ3JpZ2h0JykpIHtcclxuICAgICAgZGlyZWN0aW9uLnggPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0S2V5KCd1cCcpKSB7XHJcbiAgICAgIGRpcmVjdGlvbi55ID0gLTE7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0S2V5KCdkb3duJykpIHtcclxuICAgICAgZGlyZWN0aW9uLnkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXJlY3Rpb24ueCAmJiBkaXJlY3Rpb24ueSkge1xyXG4gICAgICBkaXJlY3Rpb24uZGl2KE1hdGguU1FSVDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrnjg4bjgqPjg4Pjgq/jga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJEuXHJcbiAgICovXHJcbiAgZ2V0U3RpY2tBbmdsZShzdGlja0lkKSB7XHJcbiAgICBzdGlja0lkID0gc3RpY2tJZCB8fCAwO1xyXG4gICAgdmFyIHN0aWNrID0gdGhpcy5zdGlja3Nbc3RpY2tJZF07XHJcbiAgICByZXR1cm4gc3RpY2sgPyBNYXRoLmF0YW4yKC1zdGljay55LCBzdGljay54KSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrnjg4bjgqPjg4Pjgq/jga7lhaXlipvjgZXjgozjgabjgYTjgovmlrnlkJHjgpLjg5njgq/jg4jjg6vjgacuXHJcbiAgICovXHJcbiAgZ2V0U3RpY2tEaXJlY3Rpb24oc3RpY2tJZCkge1xyXG4gICAgc3RpY2tJZCA9IHN0aWNrSWQgfHwgMDtcclxuICAgIHJldHVybiB0aGlzLnN0aWNrcyA/IHRoaXMuc3RpY2tzW3N0aWNrSWRdLmNsb25lKCkgOiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX3VwZGF0ZVN0YXRlKGdhbWVwYWQpIHtcclxuICAgIHRoaXMuaWQgPSBnYW1lcGFkLmlkO1xyXG4gICAgdGhpcy5jb25uZWN0ZWQgPSBnYW1lcGFkLmNvbm5lY3RlZDtcclxuICAgIHRoaXMubWFwcGluZyA9IGdhbWVwYWQubWFwcGluZztcclxuICAgIHRoaXMudGltZXN0YW1wID0gZ2FtZXBhZC50aW1lc3RhbXA7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGllbmQgPSBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpIDwgaWVuZDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbihnYW1lcGFkLmJ1dHRvbnNbaV0sIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGogPSAwLCBqZW5kID0gZ2FtZXBhZC5heGVzLmxlbmd0aDsgaiA8IGplbmQ7IGogKz0gMikge1xyXG4gICAgICB0aGlzLl91cGRhdGVTdGljayhnYW1lcGFkLmF4ZXNbaiArIDBdLCBqIC8gMiwgJ3gnKTtcclxuICAgICAgdGhpcy5fdXBkYXRlU3RpY2soZ2FtZXBhZC5heGVzW2ogKyAxXSwgaiAvIDIsICd5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF91cGRhdGVTdGF0ZUVtcHR5KCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGllbmQgPSB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpIDwgaWVuZDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS5kb3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tpXS51cCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlQnV0dG9uKHZhbHVlLCBidXR0b25JZCkge1xyXG4gICAgaWYgKHRoaXMuYnV0dG9uc1tidXR0b25JZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbYnV0dG9uSWRdID0ge1xyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHByZXNzZWQ6IGZhbHNlLFxyXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxyXG4gICAgICAgIGRvd246IGZhbHNlLFxyXG4gICAgICAgIHVwOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tidXR0b25JZF07XHJcblxyXG4gICAgYnV0dG9uLmxhc3QgPSBidXR0b24ucHJlc3NlZDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBidXR0b24udmFsdWUgPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgYnV0dG9uLnByZXNzZWQgPSB2YWx1ZS5wcmVzc2VkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGJ1dHRvbi5wcmVzc2VkID0gdmFsdWUgPiBHYW1lcGFkLkFOQUxPR1VFX0JVVFRPTl9USFJFU0hPTEQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmRvd24gPSAoYnV0dG9uLnByZXNzZWQgXiBidXR0b24ubGFzdCkgJiBidXR0b24ucHJlc3NlZDtcclxuICAgIGJ1dHRvbi51cCA9IChidXR0b24ucHJlc3NlZCBeIGJ1dHRvbi5sYXN0KSAmIGJ1dHRvbi5sYXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfdXBkYXRlU3RpY2sodmFsdWUsIHN0aWNrSWQsIGF4aXNOYW1lKSB7XHJcbiAgICBpZiAodGhpcy5zdGlja3Nbc3RpY2tJZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnN0aWNrc1tzdGlja0lkXSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGlja3Nbc3RpY2tJZF1bYXhpc05hbWVdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqIOODluODqeOCpuOCtuOBjEdhbWVwYWQgQVBJ44Gr5a++5b+c44GX44Gm44GE44KL44GLLiAqL1xyXG5HYW1lcGFkLmlzQXZhaWxhYmxlID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBuYXYgPSBwaGluYSQxLmdsb2JhbC5uYXZpZ2F0b3I7XHJcbiAgaWYgKCFuYXYpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuICghIW5hdi5nZXRHYW1lcGFkcykgfHwgKCEhbmF2LndlYmtpdEdldEdhbWVwYWRzKTtcclxufSkoKTtcclxuXHJcbi8qKiDjgqLjg4rjg63jgrDlhaXlipvlr77lv5zjga7jg5zjgr/jg7Pjga7loLTlkIjjgIHjganjga7nqIvluqbjgb7jgafmirzjgZfovrzjgoDjgahvbuOBq+OBquOCi+OBi+OCkuihqOOBmeOBl+OBjeOBhOWApC4gKi9cclxuR2FtZXBhZC5BTkFMT0dVRV9CVVRUT05fVEhSRVNIT0xEID0gMC41O1xyXG5cclxuLyoqIOODnOOCv+ODs+WQjeOBqOODnOOCv+ODs0lE44Gu44Oe44OD44OXLiAqL1xyXG5HYW1lcGFkLkJVVFRPTl9DT0RFID0ge1xyXG4gICdhJzogMCxcclxuICAnYic6IDEsXHJcbiAgJ3gnOiAyLFxyXG4gICd5JzogMyxcclxuXHJcbiAgJ2wxJzogNCxcclxuICAncjEnOiA1LFxyXG4gICdsMic6IDYsXHJcbiAgJ3IyJzogNyxcclxuXHJcbiAgJ3NlbGVjdCc6IDgsXHJcbiAgJ3N0YXJ0JzogOSxcclxuXHJcbiAgJ2wzJzogMTAsXHJcbiAgJ3IzJzogMTEsXHJcblxyXG4gICd1cCc6IDEyLFxyXG4gICdkb3duJzogMTMsXHJcbiAgJ2xlZnQnOiAxNCxcclxuICAncmlnaHQnOiAxNSxcclxuXHJcbiAgJ3NwZWNpYWwnOiAxNixcclxuXHJcbiAgJ0EnOiAwLFxyXG4gICdCJzogMSxcclxuICAnWCc6IDIsXHJcbiAgJ1knOiAzLFxyXG5cclxuICAnTDEnOiA0LFxyXG4gICdSMSc6IDUsXHJcbiAgJ0wyJzogNixcclxuICAnUjInOiA3LFxyXG5cclxuICAnU0VMRUNUJzogOCxcclxuICAnU1RBUlQnOiA5LFxyXG5cclxuICAnTDMnOiAxMCxcclxuICAnUjMnOiAxMSxcclxuXHJcbiAgJ1VQJzogMTIsXHJcbiAgJ0RPV04nOiAxMyxcclxuICAnTEVGVCc6IDE0LFxyXG4gICdSSUdIVCc6IDE1LFxyXG5cclxuICAnU1BFQ0lBTCc6IDE2LFxyXG59O1xyXG5cclxudmFyIEFSUk9XX0JJVF9UT19BTkdMRV9UQUJMRSA9IHtcclxuICAweDAwOiBudWxsLFxyXG5cclxuICAvKiBAcHJvcGVydHkg5LiLICovXHJcbiAgMHgwMTogMjcwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlj7MgKi9cclxuICAweDAyOiAwLFxyXG4gIC8qIEBwcm9wZXJ0eSDkuIogKi9cclxuICAweDA0OiA5MCxcclxuICAvKiBAcHJvcGVydHkg5bemICovXHJcbiAgMHgwODogMTgwLFxyXG5cclxuICAvKiBAcHJvcGVydHkg5Y+z5LiKICovXHJcbiAgMHgwNjogNDUsXHJcbiAgLyogQHByb3BlcnR5IOWPs+S4iyAqL1xyXG4gIDB4MDM6IDMxNSxcclxuICAvKiBAcHJvcGVydHkg5bem5LiKICovXHJcbiAgMHgwYzogMTM1LFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIsgKi9cclxuICAweDA5OiAyMjUsXHJcblxyXG4gIC8vIOS4ieaWueWQkeWQjOaZguaKvOOBl+WvvuW/nFxyXG4gIC8vIOaDs+WumuWkluOBruaTjeS9nOOBoOOBjOWvvuW/nOOBl+OBqOOBhOOBn+OBu+OBhuOBjOeEoembo1xyXG4gIC8qIEBwcm9wZXJ0eSDlj7PkuIrlt6YgKi9cclxuICAweDBlOiA5MCxcclxuICAvKiBAcHJvcGVydHkg5LiK5bem5LiLICovXHJcbiAgMHgwZDogMTgwLFxyXG4gIC8qIEBwcm9wZXJ0eSDlt6bkuIvlj7MgKi9cclxuICAweDBiOiAyNzAsXHJcbiAgLyogQHByb3BlcnR5IOS4i+WPs+S4iiAqL1xyXG4gIDB4MDc6IDAsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuaW5wdXQuQWNjZWxlcm9tZXRlclxyXG4gKiDjgrnjg57jg7zjg4jjg5Xjgqnjg7Pjga7jgrvjg7PjgrXjg7zmg4XloLFcclxuICovXHJcbmNsYXNzIEFjY2VsZXJvbWV0ZXIge1xyXG5cclxuICAvKiogQHByb3BlcnR5ICBncmF2aXR5IOmHjeWKm+OCu+ODs+OCteODvCAqL1xyXG4gIC8qKiBAcHJvcGVydHkgIGFjY2VsZXJhdGlvbiDliqDpgJ/luqbjgrvjg7PjgrXjg7wgKi9cclxuICAvKiogQHByb3BlcnR5ICByb3RhdGlvbiDlm57ou6LliqDpgJ/luqbjgrvjg7PjgrXjg7wgKi9cclxuICAvKiogQHByb3BlcnR5ICBvcmllbnRhdGlvbiDjgrnjg57jg7zjg4jjg5Xjgqnjg7Pjga7lgr7jgY0gKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgXHJcbiAgICB0aGlzLmdyYXZpdHkgICAgICAgID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiAgID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uICAgICAgID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB0aGlzLm9yaWVudGF0aW9uICAgID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG4gICAgaWYgKHBoaW5hJDEuaXNNb2JpbGUoKSkge1xyXG4gICAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlbW90aW9uXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgYWNjZWxlcmF0aW9uID0gc2VsZi5hY2NlbGVyYXRpb247XHJcbiAgICAgICAgdmFyIGdyYXZpdHkgPSBzZWxmLmdyYXZpdHk7XHJcbiAgICAgICAgdmFyIHJvdGF0aW9uID0gc2VsZi5yb3RhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZS5hY2NlbGVyYXRpb24pIHtcclxuICAgICAgICAgIGFjY2VsZXJhdGlvbi54ID0gZS5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAgIGFjY2VsZXJhdGlvbi55ID0gZS5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgIGFjY2VsZXJhdGlvbi56ID0gZS5hY2NlbGVyYXRpb24uejtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSkge1xyXG4gICAgICAgICAgZ3Jhdml0eS54ID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5Lng7XHJcbiAgICAgICAgICBncmF2aXR5LnkgPSBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueTtcclxuICAgICAgICAgIGdyYXZpdHkueiA9IGUuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5yb3RhdGlvblJhdGUpIHtcclxuICAgICAgICAgIHJvdGF0aW9uLnggPSByb3RhdGlvbi5iZXRhICA9IGUucm90YXRpb25SYXRlLmJldGE7XHJcbiAgICAgICAgICByb3RhdGlvbi55ID0gcm90YXRpb24uZ2FtbWEgPSBlLnJvdGF0aW9uUmF0ZS5nYW1tYTtcclxuICAgICAgICAgIHJvdGF0aW9uLnogPSByb3RhdGlvbi5hbHBoYSA9IGUucm90YXRpb25SYXRlLmFscGhhO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBwaGluYSQxLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHNlbGYub3JpZW50YXRpb247XHJcbiAgICAgICAgb3JpZW50YXRpb24uYWxwaGEgICA9IGUuYWxwaGE7ICAvLyB6KDB+MzYwKVxyXG4gICAgICAgIG9yaWVudGF0aW9uLmJldGEgICAgPSBlLmJldGE7ICAgLy8geCgtMTgwfjE4MClcclxuICAgICAgICBvcmllbnRhdGlvbi5nYW1tYSAgID0gZS5nYW1tYTsgIC8vIHkoLTkwfjkwKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLlVwZGF0ZXJcclxuICovXHJcbmNsYXNzIFVwZGF0ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHJvb3QpIHtcclxuICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnQocm9vdCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICB2YXIgYXBwID0gdGhpcy5hcHA7XHJcblxyXG4gICAgLy8g5pu05paw44GZ44KL44GL44KS5Yik5a6aXHJcbiAgICBpZiAoZWxlbWVudC5hd2FrZSA9PT0gZmFsc2UpIHJldHVybiA7XHJcblxyXG4gICAgLy8g44Ko44Oz44K/44O844OV44Os44O844Og44Kk44OZ44Oz44OIXHJcbiAgICBpZiAoZWxlbWVudC5oYXMoJ2VudGVyZnJhbWUnKSkge1xyXG4gICAgICBlbGVtZW50LmZsYXJlKCdlbnRlcmZyYW1lJywge1xyXG4gICAgICAgIGFwcDogdGhpcy5hcHAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsFxyXG4gICAgaWYgKGVsZW1lbnQudXBkYXRlKSBlbGVtZW50LnVwZGF0ZShhcHApO1xyXG5cclxuICAgIC8vIOOCv+ODg+ODgeWIpOWumlxyXG4gICAgLy8gdGhpcy5fY2hlY2tQb2ludChlbGVtZW50KTtcclxuXHJcbiAgICAvLyDlrZDkvpvjgpLmm7TmlrBcclxuICAgIHZhciBsZW4gPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW4uc2xpY2UoKTtcclxuICAgICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWxlbWVudCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hlY2tQb2ludChvYmopIHtcclxuICAgIHRoaXMuYXBwLnBvaW50ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICBpZiAocC5pZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX19jaGVja1BvaW50KG9iaiwgcCk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX19jaGVja1BvaW50KG9iaiwgcCkge1xyXG4gICAgaWYgKCFvYmouaW50ZXJhY3RpdmUpIHJldHVybiA7XHJcblxyXG4gICAgdmFyIHByZXZPdmVyRmxhZyA9IG9iai5fb3ZlckZsYWdzW3AuaWRdO1xyXG4gICAgdmFyIG92ZXJGbGFnID0gb2JqLmhpdFRlc3QyKHAueCwgcC55KTtcclxuICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gb3ZlckZsYWc7XHJcblxyXG4gICAgaWYgKCFwcmV2T3ZlckZsYWcgJiYgb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG92ZXInLCB7XHJcbiAgICAgICAgcG9pbnRlcjogcCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJldk92ZXJGbGFnICYmICFvdmVyRmxhZykge1xyXG4gICAgICBvYmouZmxhcmUoJ3BvaW50b3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG92ZXJGbGFnKSB7XHJcbiAgICAgIGlmIChwLmdldFBvaW50aW5nU3RhcnQoKSkge1xyXG4gICAgICAgIG9iai5fdG91Y2hGbGFnc1twLmlkXSA9IHRydWU7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludHN0YXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRzdGF5Jyk7XHJcbiAgICAgIGlmIChwLl9tb3ZlRmxhZykge1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRtb3ZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdPT09dHJ1ZSAmJiBwLmdldFBvaW50aW5nRW5kKCkpIHtcclxuICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRlbmQnKTtcclxuXHJcbiAgICAgIGlmIChvYmouX292ZXJGbGFnc1twLmlkXSkge1xyXG4gICAgICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgICAgb2JqLmZsYXJlKCdwb2ludG91dCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5JbnRlcmFjdGl2ZVxyXG4gKi9cclxuY2xhc3MgSW50ZXJhY3RpdmUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMubXVsdGlUb3VjaCA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnNvciA9IHtcclxuICAgICAgbm9ybWFsOiAnJyxcclxuICAgICAgaG92ZXI6ICdwb2ludGVyJyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5faG9sZHMgPSBbXTtcclxuICAgIHRoaXMuYXBwLm9uKCdjaGFuZ2VzY2VuZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhci5jYWxsKHRoaXMuX2hvbGRzKTtcclxuICAgICAgLy8gdGhpcy5faG9sZHMuY2xlYXIoKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5fZW5hYmxlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNoZWNrKHJvb3QpIHtcclxuICAgIC8vIOOCq+ODvOOCveODq+OBruOCueOCv+OCpOODq+OCkuWPjeaYoFxyXG4gICAgaWYgKHRoaXMuYXBwLmRvbUVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuX2hvbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmFwcC5kb21FbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuY3Vyc29yLmhvdmVyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwLmRvbUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gdGhpcy5jdXJzb3Iubm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgIXRoaXMuYXBwLnBvaW50ZXJzKSByZXR1cm4gO1xyXG4gICAgdGhpcy5fY2hlY2tFbGVtZW50KHJvb3QpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICB2YXIgYXBwID0gdGhpcy5hcHA7XHJcblxyXG4gICAgLy8g5pu05paw44GZ44KL44GL44KS5Yik5a6aXHJcbiAgICBpZiAoZWxlbWVudC5hd2FrZSA9PT0gZmFsc2UpIHJldHVybiA7XHJcblxyXG4gICAgLy8g5a2Q5L6b44KS5pu05pawXHJcbiAgICB2YXIgbGVuID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciB0ZW1wQ2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgIGZvciAodmFyIGk9MDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrRWxlbWVudCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44K/44OD44OB5Yik5a6aXHJcbiAgICB0aGlzLl9jaGVja1BvaW50KGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrUG9pbnQob2JqKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aVRvdWNoKSB7XHJcbiAgICAgIHRoaXMuYXBwLnBvaW50ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICAgIGlmIChwLmlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLl9fY2hlY2tQb2ludChvYmosIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fX2NoZWNrUG9pbnQob2JqLCB0aGlzLmFwcC5wb2ludGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9fY2hlY2tQb2ludChvYmosIHApIHtcclxuICAgIGlmICghb2JqLmludGVyYWN0aXZlKSByZXR1cm4gO1xyXG5cclxuICAgIHZhciBwcmV2T3ZlckZsYWcgPSBvYmouX292ZXJGbGFnc1twLmlkXTtcclxuICAgIHZhciBvdmVyRmxhZyA9IG9iai5oaXRUZXN0KHAueCwgcC55KTtcclxuICAgIG9iai5fb3ZlckZsYWdzW3AuaWRdID0gb3ZlckZsYWc7XHJcblxyXG4gICAgdmFyIGUgPSB7XHJcbiAgICAgIHBvaW50ZXI6IHAsXHJcbiAgICAgIGludGVyYWN0aXZlOiB0aGlzLFxyXG4gICAgICBvdmVyOiBvdmVyRmxhZyxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFwcmV2T3ZlckZsYWcgJiYgb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG92ZXInLCBlKTtcclxuXHJcbiAgICAgIGlmIChvYmouYm91bmRpbmdUeXBlICYmIG9iai5ib3VuZGluZ1R5cGUgIT09ICdub25lJykge1xyXG4gICAgICAgIHRoaXMuX2hvbGRzLnB1c2gob2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByZXZPdmVyRmxhZyAmJiAhb3ZlckZsYWcpIHtcclxuICAgICAgb2JqLmZsYXJlKCdwb2ludG91dCcsIGUpO1xyXG4gICAgICAvLyB0aGlzLl9ob2xkcy5lcmFzZShvYmopO1xyXG4gICAgICBlcmFzZS5jYWxsKHRoaXMuX2hvbGRzLCBvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdmVyRmxhZykge1xyXG4gICAgICBpZiAocC5nZXRQb2ludGluZ1N0YXJ0KCkpIHtcclxuICAgICAgICBvYmouX3RvdWNoRmxhZ3NbcC5pZF0gPSB0cnVlO1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRzdGFydCcsIGUpO1xyXG4gICAgICAgIC8vIOOCr+ODquODg+OCr+ODleODqeOCsOOCkueri+OBpuOCi1xyXG4gICAgICAgIG9iai5fY2xpY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdKSB7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRzdGF5JywgZSk7XHJcbiAgICAgIGlmIChwLl9tb3ZlRmxhZykge1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRtb3ZlJywgZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLl90b3VjaEZsYWdzW3AuaWRdPT09dHJ1ZSAmJiBwLmdldFBvaW50aW5nRW5kKCkpIHtcclxuICAgICAgb2JqLl90b3VjaEZsYWdzW3AuaWRdID0gZmFsc2U7XHJcbiAgICAgIG9iai5mbGFyZSgncG9pbnRlbmQnLCBlKTtcclxuXHJcbiAgICAgIGlmIChwaGluYSQxLmlzTW9iaWxlKCkgJiYgb2JqLl9vdmVyRmxhZ3NbcC5pZF0pIHtcclxuICAgICAgICBvYmouX292ZXJGbGFnc1twLmlkXSA9IGZhbHNlO1xyXG4gICAgICAgIG9iai5mbGFyZSgncG9pbnRvdXQnLCBlKTtcclxuICAgICAgICAvLyB0aGlzLl9ob2xkcy5lcmFzZShvYmopO1xyXG4gICAgICAgIGVyYXNlLmNhbGwodGhpcy5faG9sZHMsIG9iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cbi8vIGltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vYXBwL2VsZW1lbnRcIlxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqL1xyXG5jbGFzcyBBY2Nlc3NvcnkgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBzZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCkgcmV0dXJuIDtcclxuXHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFyZ2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgaXNBdHRhY2hlZCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMudGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoVG8oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hdHRhY2godGhpcyk7XHJcbiAgICB0aGlzLnNldFRhcmdldChlbGVtZW50KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy50YXJnZXQuZGV0YWNoKHRoaXMpO1xyXG4gICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEVsZW1lbnTlgbTjgafmi6HlvLVcclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLiRtZXRob2QoJ2F0dGFjaCcsIGZ1bmN0aW9uKGFjY2Vzc29yeSkge1xyXG4vLyAgIGlmICghdGhpcy5hY2Nlc3Nvcmllcykge1xyXG4vLyAgICAgdGhpcy5hY2Nlc3NvcmllcyA9IFtdO1xyXG4vLyAgICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgICAgdGhpcy5hY2Nlc3Nvcmllcy5lYWNoKGZ1bmN0aW9uKGFjY2Vzc29yeSkge1xyXG4vLyAgICAgICAgIGFjY2Vzc29yeS51cGRhdGUgJiYgYWNjZXNzb3J5LnVwZGF0ZShlLmFwcCk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0aGlzLmFjY2Vzc29yaWVzLnB1c2goYWNjZXNzb3J5KTtcclxuLy8gICBhY2Nlc3Nvcnkuc2V0VGFyZ2V0KHRoaXMpO1xyXG4vLyAgIGFjY2Vzc29yeS5mbGFyZSgnYXR0YWNoZWQnKTtcclxuXHJcbi8vICAgcmV0dXJuIHRoaXM7XHJcbi8vIH0pO1xyXG5cclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLiRtZXRob2QoJ2RldGFjaCcsIGZ1bmN0aW9uKGFjY2Vzc29yeSkge1xyXG4vLyAgIGlmICh0aGlzLmFjY2Vzc29yaWVzKSB7XHJcbi8vICAgICB0aGlzLmFjY2Vzc29yaWVzLmVyYXNlKGFjY2Vzc29yeSk7XHJcbi8vICAgICBhY2Nlc3Nvcnkuc2V0VGFyZ2V0KG51bGwpO1xyXG4vLyAgICAgYWNjZXNzb3J5LmZsYXJlKCdkZXRhY2hlZCcpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHRoaXM7XHJcbi8vIH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5Ud2VlbmVyXHJcbiAqICMgVHdlZW5lclxyXG4gKiBUd2VlbmVy44Gv44Kq44OW44K444Kn44Kv44OI44Gu44OX44Ot44OR44OG44Kj44Gr5a++44GX44Gm44CBXHJcbiAqIFR3ZWVu44Ki44OL44Oh44O844K344On44Oz44Gu5Yq55p6c44KS5LiO44GI44KL44Kv44Op44K544Gn44GZ44CCICBcclxuICog5Li744GrIHtAbGluayBwaGluYS5hcHAuRWxlbWVudH0g44Go44Gd44Gu44K144OW44Kv44Op44K544Gn5L2/55So44GV44KM44G+44GZ44CCXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIFR3ZWVuZXIgZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLmm7TmlrDjgZnjgovmlrnms5XjgpLmjIflrprjgZfjgb7jgZnjgIIgIFxyXG4gICAqIOWkieabtOOBmeOCi+OBqGR1cmF0aW9u44Gr44KI44KL5pmC6ZaT44Gu6YCy44G/5pa544GM5aSJ44KP44KK44G+44GZ44CCICBcclxuICAgKiDoqbPjgZfjgY/jga97QGxpbmsgI1VQREFURV9NQVB944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICovXHJcbiAgLy8gdXBkYXRlVHlwZSA9ICdkZWx0YSdcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICBzdXBlcih0YXJnZXQpO1xyXG4gICAgdGhpcy51cGRhdGVUeXBlID0gJ2RlbHRhJztcclxuXHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2xvb3AgPSBmYWxzZTtcclxuICAgIHRoaXMuX3Rhc2tzID0gW107XHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fdXBkYXRlID0gdGhpcy5fdXBkYXRlVGFzaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7cGhpbmEuYXBwLkJhc2VBcHB9IGFwcFxyXG4gICAqL1xyXG4gIHVwZGF0ZShhcHApIHtcclxuICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICoge0BsaW5rICN1cGRhdGVUeXBlfeOCkuWkieabtOOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOabtOaWsOaWueazleOCkuihqOOBmeaWh+Wtl+WIl1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBzZXRVcGRhdGVUeXBlKHR5cGUpIHtcclxuICAgIHRoaXMudXBkYXRlVHlwZSA9IHR5cGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHByb3Bz44Gn5oyH5a6a44GX44Gf5YCk44Gr44Gq44KL44G+44Gn44CBZHVyYXRpb27jgafmjIflrprjgZfjgZ/mmYLplpPjgpLjgYvjgZHjgabjgIHjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMg5aSJ5pu044GX44Gf44GE44OX44Ot44OR44OG44Kj44KSa2V544Go44GX44Gf44Kq44OW44K444Kn44Kv44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIFxyXG4gICAqL1xyXG4gIHRvKHByb3BzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICB0aGlzLl9hZGQoe1xyXG4gICAgICB0eXBlOiAndHdlZW4nLFxyXG4gICAgICBtb2RlOiAndG8nLFxyXG4gICAgICBwcm9wczogcHJvcHMsXHJcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiBlYXNpbmcsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz6ZaL5aeL5pmC44Gu5YCk44GocHJvcHPjgafmjIflrprjgZfjgZ/lgKTjgpLliqDnrpfjgZfjgZ/lgKTjgavjgarjgovjgb7jgafjgIFkdXJhdGlvbuOBp+aMh+WumuOBl+OBn+aZgumWk+OCkuOBi+OBkeOBpuOAgeOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgYnkocHJvcHMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgIG1vZGU6ICdieScsXHJcbiAgICAgIHByb3BzOiBwcm9wcyxcclxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcHJvcHPjgafmjIflrprjgZfjgZ/lgKTjgYvjgonjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4vmmYLjga7lgKTjgavjgarjgovjgb7jgafjgIFkdXJhdGlvbuOBp+aMh+WumuOBl+OBn+aZgumWk+OCkuOBi+OBkeOBpuOAgeOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyDlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgZnJvbShwcm9wcywgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgbW9kZTogJ2Zyb20nLFxyXG4gICAgICBwcm9wczogcHJvcHMsXHJcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgZWFzaW5nOiBlYXNpbmcsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5oyH5a6a44GX44Gf5pmC6ZaT44GM57WM6YGO44GZ44KL44G+44Gn5b6F5qmf44GX44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgd2FpdOOBmeOCi+aZgumWk1xyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICB3YWl0KHRpbWUpIHtcclxuICAgIHRoaXMuX2FkZCh7XHJcbiAgICAgIHR5cGU6ICd3YWl0JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxpbWl0OiB0aW1lLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOePvuWcqOioreWumuOBleOCjOOBpuOBhOOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+aZguOBq+WRvOOBs+WHuuOBleOCjOOCi+mWouaVsOOCkuOCu+ODg+ODiOOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMg5ZG844Gz5Ye644GV44KM44KL6Zai5pWwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlbGYgKG9wdGlvbmFsKSBmdW5j5YaF44GndGhpc+OBq+OBl+OBn+OBhOOCquODluOCuOOCp+OCr+ODiOOAglxyXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGFyZ3MgKG9wdGlvbmFsKSBmdW5j44Gu5byV5pWw44Gr44GX44Gf44GE5YCkXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGNhbGwoZnVuYywgc2VsZiwgYXJncykge1xyXG4gICAgdGhpcy5fYWRkKHtcclxuICAgICAgdHlwZTogJ2NhbGwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZnVuYzogZnVuYyxcclxuICAgICAgICBzZWxmOiBzZWxmIHx8IHRoaXMsXHJcbiAgICAgICAgYXJnczogYXJncyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnj77lnKjoqK3lrprjgZXjgozjgabjgYTjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/mmYLjgavjg5fjg63jg5Hjg4bjgqPjgpLjgrvjg4Pjg4jjgZfjgb7jgZnjgIIgIFxyXG4gICAqIOesrOS4gOW8leaVsOOBq+OCquODluOCuOOCp+OCr+ODiOOCkuOCu+ODg+ODiOOBmeOCi+OBk+OBqOOCguOBp+OBjeOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7U3RyaW5nIHwgT2JqZWN0fSBrZXkgdmFsdWXjgpLjgrvjg4Pjg4jjgZnjgovjg5fjg63jg5Hjg4bjgqPlkI3jgYvjgIHlpInmm7TjgZfjgZ/jgYTjg5fjg63jg5Hjg4bjgqPjgpJrZXnjgajjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjgIJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgKG9wdGlvbmFsKSDjgrvjg4Pjg4jjgZnjgovlgKRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgIHZhciB2YWx1ZXMgPSBudWxsO1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMikge1xyXG4gICAgICB2YWx1ZXMgPSB7fTtcclxuICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWx1ZXMgPSBrZXk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90YXNrcy5wdXNoKHtcclxuICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogeCwgeeOBq+WvvuOBl+OBpuOAgSB7QGxpbmsgI3RvfSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIG1vdmVUbyh4LCB5LCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IHg6IHgsIHk6IHkgfSwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHgsIHnjgavlr77jgZfjgabjgIEge0BsaW5rICNieX0g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBtb3ZlQnkoeCwgeSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYnkoeyB4OiB4LCB5OiB5IH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcm90YXRpb27jgavlr77jgZfjgabjgIEge0BsaW5rICN0b30g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHJvdGF0ZVRvKHJvdGF0aW9uLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IHJvdGF0aW9uOiByb3RhdGlvbiB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogcm90YXRpb27jgavlr77jgZfjgabjgIEge0BsaW5rICNieX0g44Gu5Yem55CG44KS6KGM44GE44G+44GZ44CCXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHJvdGF0ZUJ5KHJvdGF0aW9uLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ieSh7IHJvdGF0aW9uOiByb3RhdGlvbiB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNjYWxlWCwgc2NhbGVZ44Gr5a++44GX44GmIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSBzY2FsZVjjgahzY2FsZVnjgavoqK3lrprjgZnjgovlgKRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gKG9wdGlvbmFsKSDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgavjgYvjgZHjgovmmYLplpNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIChvcHRpb25hbCkgZWFzaW5nIHtAbGluayBwaGluYS51dGlsLlR3ZWVuI0VBU0lOR33jgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2NhbGVUbyhzY2FsZSwgZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMudG8oeyBzY2FsZVg6IHNjYWxlLCBzY2FsZVk6IHNjYWxlIH0sIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBzY2FsZVgsIHNjYWxlWeOBq+WvvuOBl+OBpiB7QGxpbmsgI2J5fSDjga7lh6bnkIbjgpLooYzjgYTjgb7jgZnjgIJcclxuICAgKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgc2NhbGVY44Goc2NhbGVZ44Gr6Kit5a6a44GZ44KL5YCkXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIChvcHRpb25hbCkg44Ki44OL44Oh44O844K344On44Oz44Gr44GL44GR44KL5pmC6ZaTXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyAob3B0aW9uYWwpIGVhc2luZyB7QGxpbmsgcGhpbmEudXRpbC5Ud2VlbiNFQVNJTkd944KS5Y+C54Wn44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHNjYWxlQnkoc2NhbGUsIGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJ5KHsgc2NhbGVYOiBzY2FsZSwgc2NhbGVZOiBzY2FsZSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFscGhh44Gr5a++44GX44GmIHtAbGluayAjdG99IOOBruWHpueQhuOCkuihjOOBhOOBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBhbHBoYeOBq+ioreWumuOBmeOCi+WApFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmYWRlKHZhbHVlLCBkdXJhdGlvbiwgZWFzaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50byh7IGFscGhhOiB2YWx1ZSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFscGhh44KSMOOBq+OBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmYWRlT3V0KGR1cmF0aW9uLCBlYXNpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmZhZGUoMC4wLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFscGhh44KSMeOBq+OBmeOCi+OCouODi+ODoeODvOOCt+ODp+ODs+OCkuioreWumuOBl+OBvuOBmeOAglxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiAob3B0aW9uYWwpIOOCouODi+ODoeODvOOCt+ODp+ODs+OBq+OBi+OBkeOCi+aZgumWk1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcgKG9wdGlvbmFsKSBlYXNpbmcge0BsaW5rIHBoaW5hLnV0aWwuVHdlZW4jRUFTSU5HfeOCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICBmYWRlSW4oZHVyYXRpb24sIGVhc2luZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmFkZSgxLjAsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz6ZaL5aeLXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgpLkuIDmmYLlgZzmraJcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS5YGc5q2i44GX44CB5pyA5Yid44G+44Gn5be744GN5oi744GX44G+44GZ44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIHN0b3AoKSB7XHJcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMucmV3aW5kKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuW3u+OBjeaIu+OBmVxyXG4gICAqIEBjaGFpbmFibGVcclxuICAgKi9cclxuICByZXdpbmQoKSB7XHJcbiAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB5b3lvKCkge1xyXG4gICAgLy8gVE9ETzog5pyA5Yid44Gu5YCk44GM5YiG44GL44KJ44Gq44GE44Gu44Gn5Y+N6Lui44Gn44GN44Gq44GELi4uXHJcbiAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgdGhpcy5fdGFza3MuZWFjaChmdW5jdGlvbih0YXNrKSB7XHJcbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICd0d2VlbicpIDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbGF5KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5foqK3lrppcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWdcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICovXHJcbiAgc2V0TG9vcChmbGFnKSB7XHJcbiAgICB0aGlzLl9sb29wID0gZmxhZztcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Ki44OL44Oh44O844K344On44Oz44KS44Kv44Oq44KiXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBKU09O5b2i5byP44Gn44Ki44OL44Oh44O844K344On44Oz44KS6Kit5a6a44GX44G+44GZ44CCXHJcbiAgICogQGNoYWluYWJsZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBqc29uLmxvb3AgKG9wdGlvbmFsKSDjg6vjg7zjg5fjgZnjgovloLTlkIh0cnVlXHJcbiAgICogQHBhcmFtIHtBcnJheVtdfSBqc29uLnR3ZWVucyDoqK3lrprjgZnjgovjgqLjg4vjg6Hjg7zjgrfjg6fjg7NcclxuICAgKiBcclxuICAgKiBgYGBcclxuICAgKiBbXHJcbiAgICogICBbbWV0aG9kLCBhcmcxLCBhcmcyLCwsXSxcclxuICAgKiAgIFsndG8nLCB7dmFsdWU6IDEwMH0sIDEwMDAsICdzd2luZyddLFxyXG4gICAqICAgWyd3YWl0JywgMTAwMF0sXHJcbiAgICogICBbJ3NldCcsICd0ZXh0JywgJ0VORCddXHJcbiAgICogXVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZyb21KU09OKGpzb24pIHtcclxuICAgIGlmIChqc29uLmxvb3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNldExvb3AoanNvbi5sb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBqc29uLnR3ZWVucy5lYWNoKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgdCA9IHQuY2xvbmUoKTtcclxuICAgICAgdmFyIG1ldGhvZCA9IHQuc2hpZnQoKTtcclxuICAgICAgdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIHQpO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfYWRkKHBhcmFtcykge1xyXG4gICAgdGhpcy5fdGFza3MucHVzaChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVRhc2soYXBwKSB7XHJcbiAgICBpZiAoIXRoaXMucGxheWluZykgcmV0dXJuIDtcclxuXHJcbiAgICB2YXIgdGFzayA9IHRoaXMuX3Rhc2tzW3RoaXMuX2luZGV4XTtcclxuICAgIGlmICghdGFzaykge1xyXG4gICAgICBpZiAodGhpcy5fbG9vcCkge1xyXG4gICAgICAgIHRoaXMucmV3aW5kKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICArK3RoaXMuX2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXNrLnR5cGUgPT09ICd0d2VlbicpIHtcclxuICAgICAgLy8gdGhpcy5fdHdlZW4gPSBwaGluYS51dGlsLlR3ZWVuKCk7XHJcbiAgICAgIHRoaXMuX3R3ZWVuID0gbmV3IFR3ZWVuKCk7XHJcblxyXG4gICAgICB2YXIgZHVyYXRpb24gPSB0YXNrLmR1cmF0aW9uIHx8IHRoaXMuX2dldERlZmF1bHREdXJhdGlvbigpO1xyXG4gICAgICBpZiAodGFzay5tb2RlID09PSAndG8nKSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4udG8odGhpcy50YXJnZXQsIHRhc2sucHJvcHMsIGR1cmF0aW9uLCB0YXNrLmVhc2luZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGFzay5tb2RlID09PSAnYnknKSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4uYnkodGhpcy50YXJnZXQsIHRhc2sucHJvcHMsIGR1cmF0aW9uLCB0YXNrLmVhc2luZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4uZnJvbSh0aGlzLnRhcmdldCwgdGFzay5wcm9wcywgZHVyYXRpb24sIHRhc2suZWFzaW5nKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUd2VlbjtcclxuICAgICAgdGhpcy5fdXBkYXRlKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT09ICd3YWl0Jykge1xyXG4gICAgICB0aGlzLl93YWl0ID0ge1xyXG4gICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgbGltaXQ6IHRhc2suZGF0YS5saW1pdCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZVdhaXQ7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZShhcHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFzay50eXBlID09PSAnY2FsbCcpIHtcclxuICAgICAgdGFzay5kYXRhLmZ1bmMuYXBwbHkodGFzay5kYXRhLnNlbGYsIHRhc2suZGF0YS5hcmdzKTtcclxuICAgICAgLy8gMeODleODrOODvOODoOa2iOiyu+OBl+OBquOBhOOCiOOBhuWGjeW4sFxyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ3NldCcpIHtcclxuICAgICAgdGhpcy50YXJnZXQuJGV4dGVuZCh0YXNrLmRhdGEudmFsdWVzKTtcclxuICAgICAgLy8gMeODleODrOODvOODoOa2iOiyu+OBl+OBquOBhOOCiOOBhuWGjeW4sFxyXG4gICAgICB0aGlzLl91cGRhdGUoYXBwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF91cGRhdGVUd2VlbihhcHApIHtcclxuICAgIHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuO1xyXG4gICAgdmFyIHRpbWUgPSB0aGlzLl9nZXRVbml0VGltZShhcHApO1xyXG5cclxuICAgIHR3ZWVuLmZvcndhcmQodGltZSk7XHJcbiAgICB0aGlzLmZsYXJlKCd0d2VlbicpO1xyXG5cclxuICAgIGlmICh0d2Vlbi50aW1lID49IHR3ZWVuLmR1cmF0aW9uKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl90d2VlbjtcclxuICAgICAgdGhpcy5fdHdlZW4gPSBudWxsO1xyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVdhaXQoYXBwKSB7XHJcbiAgICB2YXIgd2FpdCA9IHRoaXMuX3dhaXQ7XHJcbiAgICB2YXIgdGltZSA9IHRoaXMuX2dldFVuaXRUaW1lKGFwcCk7XHJcbiAgICB3YWl0LnRpbWUgKz0gdGltZTtcclxuXHJcbiAgICBpZiAod2FpdC50aW1lID49IHdhaXQubGltaXQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX3dhaXQ7XHJcbiAgICAgIHRoaXMuX3dhaXQgPSBudWxsO1xyXG4gICAgICB0aGlzLl91cGRhdGUgPSB0aGlzLl91cGRhdGVUYXNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldFVuaXRUaW1lKGFwcCkge1xyXG4gICAgdmFyIG9iaiA9IFVQREFURV9NQVBbdGhpcy51cGRhdGVUeXBlXTtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgcmV0dXJuIG9iai5mdW5jKGFwcCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIDEwMDAgLyBhcHAuZnBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldERlZmF1bHREdXJhdGlvbigpIHtcclxuICAgIHZhciBvYmogPSBVUERBVEVfTUFQW3RoaXMudXBkYXRlVHlwZV07XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5kdXJhdGlvbjtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHN0YXRpY1xyXG4gKiB7QGxpbmsgI3VwZGF0ZVR5cGV944Gr6Kit5a6a44GZ44KL5pu05paw5pa55rOV44Gu5a6a576p44Gn44GZ44CCXHJcbiAqIOS4i+iomOOBruihqOOBq+Wumue+qea4iOOBv+OBruabtOaWsOaWueazleOCkntAbGluayAjdXBkYXRlVHlwZX3jgavoqK3lrprjgZnjgovjgZPjgajjgafjgIFcclxuICog44Ki44OL44Oh44O844K344On44Oz44Gu5pu05paw5pa55rOV44KS5aSJ5pu044GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCXHJcbiAqIFxyXG4gKiB8IOabtOaWsOaWueazlSB8IOWNmOS9jSjjg4fjg5Xjgqnjg6vjg4jlgKQpIHwgMeODleODrOODvOODoOOBguOBn+OCiuOBruOCouODi+ODoeODvOOCt+ODp+ODs+mAn+W6piB8XHJcbiAqIHwtfC18LXxcclxuICogfCBub3JtYWwgfCDjg5/jg6rnp5IoMTAwMCkgfCBhcHAuZnBz44Gr44KI44Gj44Gm5aSJ5YyWIHxcclxuICogfCBkZWx0YSB8IOODn+ODquenkigxMDAwKSB8IOe1jOmBjuaZgumWk+OBq+OCiOOBo+OBpuWkieWMliB8XHJcbiAqIHwgZnBzIHwg44OV44Os44O844OgKDMwKSB8IOW/heOBmuWQjOOBmOmAn+W6puOBp+WkieWMliB8XHJcbiAqL1xyXG52YXIgVVBEQVRFX01BUCA9IFR3ZWVuZXIuVVBEQVRFX01BUCA9IHtcclxuICBub3JtYWw6IHtcclxuICAgIGZ1bmM6IGZ1bmN0aW9uKGFwcCkge1xyXG4gICAgICByZXR1cm4gMTAwMCAvIGFwcC5mcHM7XHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgfSxcclxuXHJcbiAgZGVsdGE6IHtcclxuICAgIGZ1bmM6IGZ1bmN0aW9uKGFwcCkge1xyXG4gICAgICByZXR1cm4gYXBwLnRpY2tlci5kZWx0YVRpbWU7XHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgfSxcclxuXHJcbiAgZnBzOiB7XHJcbiAgICBmdW5jOiBmdW5jdGlvbihhcHApIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IDMwLFxyXG4gIH0sXHJcblxyXG59O1xyXG5cclxuLy8gRWxlbWVudOWBtOOBp+aLoeW8tVxyXG4vLyAvKipcclxuLy8gICogQG1lbWJlciBwaGluYS5hcHAuRWxlbWVudFxyXG4vLyAgKiBAcHJvcGVydHkgdHdlZW5lclxyXG4vLyAgKiDoh6rouqvjgavjgqLjgr/jg4Pjg4HmuIjjgb/jga57QGxpbmsgcGhpbmEuYWNjZXNzb3J5LlR3ZWVuZXJ944Kq44OW44K444Kn44Kv44OI44CCXHJcbi8vICAqL1xyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCd0d2VlbmVyJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl90d2VlbmVyKSB7XHJcbi8vICAgICB0aGlzLl90d2VlbmVyID0gcGhpbmEuYWNjZXNzb3J5LlR3ZWVuZXIoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX3R3ZWVuZXI7XHJcbi8vIH0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5FbGVtZW50XHJcbiAqIEBleHRlbmRzIHBoaW5hLnV0aWwuRXZlbnREaXNwYXRjaGVyXHJcbiAqICMg5Li744Gr6KaB57Sg44Gu6Kaq5a2Q6Zai5L+C44KS5omx44GG44Kv44Op44K5XHJcbiAqIOS4u+OBq+imquWtkOmWouS/guetieOCkuWumue+qeOBmeOCi+OCr+ODqeOCueOBp+OBmeOAglxyXG4gKi9cclxuY2xhc3MgRWxlbWVudCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBwYXJlbnRcclxuICAgKiDopqropoHntKBcclxuICAgKi9cclxuICAvLyBwYXJlbnQgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgY2hpbGRyZW5cclxuICAgKiDlrZDopoHntKBcclxuICAgKi9cclxuICAvLyBjaGlsZHJlbiA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSBhd2FrZVxyXG4gICAqIOacieWKueOBi+OBqeOBhuOBi1xyXG4gICAqL1xyXG4gIC8vIGF3YWtlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgYWRkQ2hpbGRcclxuICAgKiDoh6rouqvjgavlrZDopoHntKDjgpLov73liqDjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIOiHqui6q+OCkuWtkOimgee0oOOBqOOBl+OBpuW8leaVsOOBp+aMh+WumuOBl+OBn+imgee0oOOBq+i/veWKoOOBmeOCi+OBq+OBryB7QGxpbmsgI2FkZENoaWxkVG99IOOCkuS9v+eUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIOi/veWKoOOBmeOCi+WtkOimgee0oFxyXG4gICAqL1xyXG4gIGFkZENoaWxkKGNoaWxkKSB7XHJcbiAgICBpZiAoY2hpbGQucGFyZW50KSBjaGlsZC5yZW1vdmUoKTtcclxuXHJcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuXHJcbiAgICBjaGlsZC5oYXMoJ2FkZGVkJykgJiYgY2hpbGQuZmxhcmUoJ2FkZGVkJyk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBhZGRDaGlsZFRvXHJcbiAgICog6Ieq6Lqr44KS5a2Q6KaB57Sg44Go44GX44Gm5byV5pWw44Gn5oyH5a6a44GX44Gf6KaB57Sg44Gr6L+95Yqg44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiDoh6rouqvjgavlrZDopoHntKDjgpLov73liqDjgZnjgovjgavjga8ge0BsaW5rICNhZGRDaGlsZH0g44KS5L2/55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50IOiHqui6q+OCkuWtkOimgee0oOOBqOOBl+OBpui/veWKoOOBmeOCi+imgee0oFxyXG4gICAqL1xyXG4gIGFkZENoaWxkVG8ocGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGFkZENoaWxkQXRcclxuICAgKiDoh6rouqvjgpLjgIHmjIflrprjgZfjgZ/opoHntKDjga7lrZDopoHntKDjga7ku7vmhI/jga7phY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnjgavov73liqDjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZCDov73liqDjgZnjgovlrZDopoHntKBcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K555Wq5Y+3XHJcbiAgICovXHJcbiAgYWRkQ2hpbGRBdChjaGlsZCwgaW5kZXgpIHtcclxuICAgIGlmIChjaGlsZC5wYXJlbnQpIGNoaWxkLnJlbW92ZSgpO1xyXG5cclxuICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xyXG5cclxuICAgIGNoaWxkLmhhcygnYWRkZWQnKSAmJiBjaGlsZC5mbGFyZSgnYWRkZWQnKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIGdldENoaWxkQXRcclxuICAgKiDmjIflrprjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lrZDopoHntKDjgpLov5TjgZfjgb7jgZnjgIJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7dcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOaMh+WumuOBl+OBn+OCpOODs+ODh+ODg+OCr+OCueOBruWtkOimgee0oFxyXG4gICAqL1xyXG4gIGdldENoaWxkQXQoaW5kZXgpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmNoaWxkcmVuLmF0KGluZGV4KTtcclxuICAgIHJldHVybiBhdC5jYWxsKHRoaXMuY2hpbGRyZW4sIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Q2hpbGRCeU5hbWVcclxuICAgKiDmjIflrprjgZfjgZ/lkI3liY3jga7lrZDopoHntKDjgpLov5TjgZfjgb7jgZnjgILvvIjmnKrlrp/oo4XvvIlcclxuICAgKi9cclxuICBnZXRDaGlsZEJ5TmFtZShuYW1lKSB7XHJcbiAgICAvLyBUT0RPOlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBnZXRDaGlsZEluZGV4XHJcbiAgICog5oyH5a6a44GX44Gf5a2Q6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg5a2Q6KaB57SgXHJcbiAgICogQHJldHVybiB7TnVtYmVyfSDmjIflrprjgZfjgZ/lrZDopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7dcclxuICAgKi9cclxuICBnZXRDaGlsZEluZGV4KGNoaWxkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0UGFyZW50XHJcbiAgICog5oyH5a6a44GX44Gf6KaB57Sg44Gu6Kaq6KaB57Sg44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IOaMh+WumuOBl+OBn+imgee0oOOBruimquimgee0oFxyXG4gICAqL1xyXG4gIGdldFBhcmVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZ2V0Um9vdFxyXG4gICAqIOaMh+WumuOBl+OBn+imgee0oOOBrumajuWxpOODhOODquODvOOBruODq+ODvOODiOOCkui/lOOBl+OBvuOBmeOAglxyXG4gICAqXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSDmjIflrprjgZfjgZ/opoHntKDjga7pmo7lsaTjg4Tjg6rjg7zjga7jg6vjg7zjg4hcclxuICAgKi9cclxuICBnZXRSb290KCkge1xyXG4gICAgdmFyIGVsbSA9IHRoaXM7XHJcbiAgICBmb3IgKGVsbT10aGlzLnBhcmVudDsgZWxtLnBhcmVudCAhPSBudWxsOyBlbG0gPSBlbG0ucGFyZW50KSB7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQ2hpbGRcclxuICAgKiBAY2hhaW5hYmxlXHJcbiAgICog5oyH5a6a44GX44Gf6KaB57Sg44KS6Ieq6Lqr44Gu5a2Q6KaB57Sg44GL44KJ5YmK6Zmk44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hpbGQg6KaB57SgXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgY2hpbGQuaGFzKCdyZW1vdmVkJykgJiYgY2hpbGQuZmxhcmUoJ3JlbW92ZWQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCByZW1vdmVcclxuICAgKiDoh6rouqvjgpLopqropoHntKDjga7lrZDopoHntKDjgYvjgonliYrpmaTjgZfjgb7jgZnjgIJcclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gO1xyXG5cclxuICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG1ldGhvZCBpc0F3YWtlXHJcbiAgICog6Ieq6Lqr44GM5pyJ5Yq544GL44Gp44GG44GL44KS6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufSDmnInlirnjgYvjganjgYbjgYtcclxuICAgKi9cclxuICBpc0F3YWtlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXdha2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHdha2VVcFxyXG4gICAqIOiHqui6q+OCkuacieWKueOBq+OBl+OBvuOBmeOAglxyXG4gICAqL1xyXG4gIHdha2VVcCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAbWV0aG9kIHNsZWVwXHJcbiAgICog6Ieq6Lqr44KS54Sh5Yq544Gr44GX44G+44GZ44CCXHJcbiAgICovXHJcbiAgc2xlZXAoKSB7XHJcbiAgICB0aGlzLmF3YWtlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgZnJvbUpTT05cclxuICAgKiBKU09OIOW9ouW8j+OCkuS9v+OBo+OBpuiHqui6q+OBq+WtkOimgee0oOOCkui/veWKoOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxyXG4gICAqXHJcbiAgICogIyMjIEV4YW1wbGVcclxuICAgKiAgICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAqICAgICAgICBcImNoaWxkcmVuXCI6IHtcclxuICAgKiAgICAgICAgICBcImxhYmVsXCI6IHsgICAgICAgICAgICAgICAgICAvL+OCreODvOWQjeOBjOi/veWKoOOBmeOCi+WtkOimgee0oOOBruWQjeWJjeOBq+OBquOCi1xyXG4gICAqICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJMYWJlbFwiLCAgICAgLy/jgq/jg6njgrlcclxuICAgKiAgICAgICAgICAgIFwiYXJndW1lbnRzXCI6IFsnaGVsbG8hJ10sICAvL+WIneacn+WMluaZguOBruW8leaVsFxyXG4gICAqICAgICAgICAgICAgXCJ4XCI6MzIwLCAgICAgICAgICAgICAgICAgIC8v44Gd44Gu5LuW44OX44Ot44OR44OG44KjXHJcbiAgICogICAgICAgICAgICBcInlcIjo0ODAsXHJcbiAgICogICAgICAgICAgfSxcclxuICAgKiAgICAgICAgfSxcclxuICAgKiAgICAgIH0pO1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtKU09OfSBqc29uIEpTT04g5b2i5byPXHJcbiAgICovXHJcbiAgZnJvbUpTT04oanNvbikge1xyXG5cclxuICAgIHZhciBjcmVhdGVDaGlsZHJlbiA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuICAgICAgdmFyIGFyZ3MgPSBkYXRhLmFyZ3VtZW50cztcclxuICAgICAgYXJncyA9IChhcmdzIGluc3RhbmNlb2YgQXJyYXkpID8gYXJncyA6IFthcmdzXTtcclxuXHJcbiAgICAgIHZhciBfY2xhc3M7XHJcbiAgICAgIHZhciBlbGVtZW50O1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGlzIHBoaW5hIGNsYXNzXHJcbiAgICAgICAgX2NsYXNzID0gcGhpbmEkMS51c2luZyhkYXRhLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgZWxlbWVudCA9IF9jbGFzcy5hcHBseShudWxsLCBhcmdzKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5jbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBpcyBFUyBjbGFzc1xyXG4gICAgICAgIC8vIOOCpOODs+OCueOCv+ODs+OCueWMluOBq+OCueODl+ODrOODg+ODieani+aWh+OBjOW/heimgeOBquOBn+OCgeOAgWVzNeOCteODneODvOODiOOBruWgtOWQiGJhYmVs44GM5b+F6KaBXHJcbiAgICAgICAgZWxlbWVudCA9IG5ldyBkYXRhLmNsYXNzTmFtZSguLi5hcmdzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpc1tuYW1lXSA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICBlbGVtZW50LmZyb21KU09OKGRhdGEpO1xyXG4gICAgICBlbGVtZW50LmFkZENoaWxkVG8odGhpcyk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgZm9ySW4uY2FsbChqc29uLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAvLyBqc29uLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ2NoaWxkcmVuJykge1xyXG4gICAgICAgIGZvckluLmNhbGwodmFsdWUsIGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuICAgICAgICAvLyB2YWx1ZS5mb3JJbihmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgICBjcmVhdGVDaGlsZHJlbihuYW1lLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoa2V5ICE9PSAndHlwZScgJiYga2V5ICE9PSAnY2xhc3NOYW1lJykge1xyXG4gICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgdG9KU09OXHJcbiAgICog6Ieq6Lqr44Gu5a2Q6KaB57Sg44KSIEpTT04g5b2i5byP44Gn6L+U44GX44G+44GZ44CCXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtKU09OfSBKU09O5b2i5byPXHJcbiAgICovXHJcbiAgdG9KU09OKCkge1xyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwaGluYSQxLnVzaW5nKHRoaXMuY2xhc3NOYW1lKS5kZWZhdWx0cyB8fCB7fSk7XHJcblxyXG4gICAgdGhpcy5faGllcmFyY2hpZXMuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBkID0gZS5kZWZhdWx0cztcclxuICAgICAgaWYgKGQpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhkKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcclxuICAgICAgICAgIGlmIChrZXlzLmluZGV4T2YoaykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGtleXMucHVzaChrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAga2V5cy5wdXNoKCduYW1lJywgJ2NsYXNzTmFtZScpO1xyXG5cclxuICAgIHZhciBqc29uID0ge307XHJcbiAgICAvLyBrZXlzLmVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgIGpzb25ba2V5XSA9IHRoaXNba2V5XTtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZC50b0pTT04oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAganNvbi5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAvLyBjaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGNoaWxkLCBpKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQsIGkpIHtcclxuICAgICAgICBqc29uLmNoaWxkcmVuW2NoaWxkLm5hbWUgfHwgKGNoaWxkLmNsYXNzTmFtZSArICdfJyArIGkpXSA9IGNoaWxkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFjY2Vzc29yeeOCkuS7mOS4juOBmeOCi1xyXG4gICAqIEBwYXJhbSAge0FjY2Vzc29yeX0gQWNjZXNzb3J557aZ5om/44Kv44Op44K5XHJcbiAgICogQHJldHVybiB7dGhpc31cclxuICAgKi9cclxuICBhdHRhY2goYWNjZXNzb3J5KSB7XHJcbiAgICBpZiAoIXRoaXMuYWNjZXNzb3JpZXMpIHtcclxuICAgICAgdGhpcy5hY2Nlc3NvcmllcyA9IFtdO1xyXG4gICAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzb3JpZXMuZm9yRWFjaChmdW5jdGlvbihhY2Nlc3NvcnkpIHtcclxuICAgICAgICAgIGFjY2Vzc29yeS51cGRhdGUgJiYgYWNjZXNzb3J5LnVwZGF0ZShlLmFwcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWNjZXNzb3JpZXMucHVzaChhY2Nlc3NvcnkpO1xyXG4gICAgYWNjZXNzb3J5LnNldFRhcmdldCh0aGlzKTtcclxuICAgIGFjY2Vzc29yeS5mbGFyZSgnYXR0YWNoZWQnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFjY2Vzc29yeeOCkuWJiumZpFxyXG4gICAqIEBwYXJhbSAge0FjY2Vzc29yeX0gQWNjZXNzb3J557aZ5om/44Kv44Op44K5XHJcbiAgICogQHJldHVybiB7dGhpc31cclxuICAgKi9cclxuICBkZXRhY2goYWNjZXNzb3J5KSB7XHJcbiAgICBpZiAodGhpcy5hY2Nlc3Nvcmllcykge1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc29yaWVzLmVyYXNlKGFjY2Vzc29yeSk7XHJcbiAgICAgIGVyYXNlLmNhbGwodGhpcy5hY2Nlc3NvcmllcywgYWNjZXNzb3J5KTtcclxuICAgICAgYWNjZXNzb3J5LnNldFRhcmdldChudWxsKTtcclxuICAgICAgYWNjZXNzb3J5LmZsYXJlKCdkZXRhY2hlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR3ZWVuZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3R3ZWVuZXIpIHtcclxuICAgICAgdGhpcy5fdHdlZW5lciA9IG5ldyBUd2VlbmVyKCkuYXR0YWNoVG8odGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdHdlZW5lcjtcclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hcHAuU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLkVsZW1lbnRcclxuICovXHJcbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGV4aXQobmV4dExhYmVsLCBuZXh0QXJndW1lbnRzKSB7XHJcbiAgICBpZiAoIXRoaXMuYXBwKSByZXR1cm4gO1xyXG5cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBuZXh0TGFiZWwgPSBhcmd1bWVudHNbMF0ubmV4dExhYmVsIHx8IHRoaXMubmV4dExhYmVsO1xyXG4gICAgICAgIG5leHRBcmd1bWVudHMgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubmV4dExhYmVsID0gbmV4dExhYmVsO1xyXG4gICAgICB0aGlzLm5leHRBcmd1bWVudHMgPSBuZXh0QXJndW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwLnBvcFNjZW5lKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFwcC5CYXNlQXBwXHJcbiAqIOODmeODvOOCueOBqOOBquOCi+OCouODl+ODquOCseODvOOCt+ODp+ODs+OCr+ODqeOCuVxyXG4gKiBAZXh0ZW5kcyBwaGluYS51dGlsLkV2ZW50RGlzcGF0Y2hlclxyXG4gKi9cclxuY2xhc3MgQmFzZUFwcCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIC8vIC8qKiBhd2FrZSAqL1xyXG4gIC8vIGF3YWtlID0gbnVsbFxyXG4gIC8vIC8qKiBmcHMgKi9cclxuICAvLyBmcHMgPSBudWxsXHJcbiAgLy8gLyoqIGZyYW1lICovXHJcbiAgLy8gZnJhbWUgPSBudWxsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX3NjZW5lcyA9IFtuZXcgU2NlbmUoKV07XHJcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gMDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzKTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBuZXcgSW50ZXJhY3RpdmUodGhpcyk7XHJcblxyXG4gICAgdGhpcy5hd2FrZSA9IHRydWU7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBUaWNrZXIoKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuX2xvb3BDYWxsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5fbG9vcCgpO1xyXG4gICAgfTtcclxuICAgIHRoaXMudGlja2VyLnRpY2sodGhpcy5fbG9vcENhbGxlcik7XHJcblxyXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGtpbGwoKSB7XHJcbiAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgICB0aGlzLnRpY2tlci51bnRpY2sodGhpcy5fbG9vcENhbGxlcik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlcGxhY2VTY2VuZShzY2VuZSkge1xyXG4gICAgdGhpcy5mbGFyZSgncmVwbGFjZScpO1xyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlc2NlbmUnKTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTY2VuZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5hcHAgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmFwcCA9IHRoaXM7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgnZW50ZXInLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVzaFNjZW5lKHNjZW5lKSB7XHJcbiAgICB0aGlzLmZsYXJlKCdwdXNoJyk7XHJcbiAgICB0aGlzLmZsYXJlKCdjaGFuZ2VzY2VuZScpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdwYXVzZScsIHtcclxuICAgICAgYXBwOiB0aGlzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2NlbmVzLnB1c2goc2NlbmUpO1xyXG4gICAgKyt0aGlzLl9zY2VuZUluZGV4O1xyXG5cclxuICAgIHRoaXMuZmxhcmUoJ3B1c2hlZCcpO1xyXG5cclxuICAgIHNjZW5lLmFwcCA9IHRoaXM7XHJcbiAgICBzY2VuZS5mbGFyZSgnZW50ZXInLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44KS44Od44OD44OX44GZ44KLKOODneODvOOCuuOChOOCquODluOCt+ODp+ODs+eUu+mdouOBquOBqeOBp+S9v+eUqClcclxuICAgKi9cclxuICBwb3BTY2VuZSgpIHtcclxuICAgIHRoaXMuZmxhcmUoJ3BvcCcpO1xyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlc2NlbmUnKTtcclxuXHJcbiAgICB2YXIgc2NlbmUgPSB0aGlzLl9zY2VuZXMucG9wKCk7XHJcbiAgICAtLXRoaXMuX3NjZW5lSW5kZXg7XHJcblxyXG4gICAgc2NlbmUuZmxhcmUoJ2V4aXQnLCB7XHJcbiAgICAgIGFwcDogdGhpcyxcclxuICAgIH0pO1xyXG4gICAgc2NlbmUuYXBwID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmZsYXJlKCdwb3BlZCcpO1xyXG5cclxuICAgIC8vXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgncmVzdW1lJywge1xyXG4gICAgICBhcHA6IHRoaXMsXHJcbiAgICAgIHByZXZTY2VuZTogc2NlbmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrfjg7zjg7Pjga51cGRhdGXjgpLlrp/ooYzjgZnjgovjgojjgYbjgavjgZnjgotcclxuICAgKi9cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44GudXBkYXRl44KS5a6f6KGM44GX44Gq44GE44KI44GG44Gr44GZ44KLXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMuYXdha2UgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGVuYWJsZVN0YXRzKCkge1xyXG4gICAgaWYgKHBoaW5hJDEuZ2xvYmFsLlN0YXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUud2FybihcIm5vdCBkZWZpbmVkIHN0YXRzLlwiKTtcclxuICAgICAgdmFyIFNUQVRTX1VSTCA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zdGF0cy5qcy9yMTQvU3RhdHMuanMnO1xyXG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBTVEFUU19VUkw7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlU3RhdHMoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBlbmFibGVEYXRHVUkoY2FsbGJhY2spIHtcclxuICAgIGlmIChwaGluYSQxLmdsb2JhbC5kYXQpIHtcclxuICAgICAgdmFyIGd1aSA9IG5ldyBwaGluYSQxLmdsb2JhbC5kYXQuR1VJKCk7XHJcbiAgICAgIGNhbGxiYWNrKGd1aSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKFwibm90IGRlZmluZWQgZGF0LkdVSS5cIik7XHJcbiAgICAgIHZhciBVUkwgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZGF0LWd1aS8wLjUuMS9kYXQuZ3VpLmpzJztcclxuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gVVJMO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZ3VpID0gbmV3IHBoaW5hJDEuZ2xvYmFsLmRhdC5HVUkoKTtcclxuICAgICAgICBjYWxsYmFjayhndWkpO1xyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9sb29wKCkge1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlLmNoZWNrKHRoaXMuY3VycmVudFNjZW5lKTtcclxuICAgIHRoaXMuX2RyYXcoKTtcclxuXHJcbiAgICAvLyBzdGF0cyB1cGRhdGVcclxuICAgIGlmICh0aGlzLnN0YXRzKSB0aGlzLnN0YXRzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmF3YWtlKSB7XHJcbiAgICAgIC8vIOOCqOODs+OCv+ODvOODleODrOODvOODoOOCpOODmeODs+ODiFxyXG4gICAgICBpZiAodGhpcy5oYXMoJ2VudGVyZnJhbWUnKSkge1xyXG4gICAgICAgIHRoaXMuZmxhcmUoJ2VudGVyZnJhbWUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGUgJiYgdGhpcy51cGRhdGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVyLnVwZGF0ZSh0aGlzLmN1cnJlbnRTY2VuZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmj4/nlLvnlKjku67mg7PplqLmlbBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9kcmF3KCkge31cclxuXHJcbiAgZ2V0IGN1cnJlbnRTY2VuZSgpICAgeyByZXR1cm4gdGhpcy5fc2NlbmVzW3RoaXMuX3NjZW5lSW5kZXhdOyB9XHJcbiAgc2V0IGN1cnJlbnRTY2VuZSh2KSAgeyB0aGlzLl9zY2VuZXNbdGhpcy5fc2NlbmVJbmRleF0gPSB2OyB9XHJcblxyXG4gIGdldCByb290U2NlbmUoKSAgIHsgcmV0dXJuIHRoaXMuX3NjZW5lc1swXTsgfVxyXG4gIHNldCByb290U2NlbmUodikgIHsgdGhpcy5fc2NlbmVzWzBdID0gdjsgfVxyXG5cclxuICBnZXQgZnJhbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5mcmFtZTsgfVxyXG4gIHNldCBmcmFtZSh2KSB7IHRoaXMudGlja2VyLmZyYW1lID0gdjsgfVxyXG5cclxuICBnZXQgZnBzKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuZnBzOyB9XHJcbiAgc2V0IGZwcyh2KSB7IHRoaXMudGlja2VyLmZwcyA9IHY7IH1cclxuXHJcbiAgZ2V0IGRlbHRhVGltZSgpIHsgcmV0dXJuIHRoaXMudGlja2VyLmRlbHRhVGltZTsgfVxyXG5cclxuICBnZXQgZWxhcHNlZFRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5lbGFwc2VkVGltZTsgfVxyXG5cclxuICBnZXQgY3VycmVudFRpbWUoKSB7IHJldHVybiB0aGlzLnRpY2tlci5jdXJyZW50VGltZTsgfVxyXG5cclxuICBnZXQgc3RhcnRUaW1lKCkgeyByZXR1cm4gdGhpcy50aWNrZXIuc3RhcnRUaW1lOyB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXBwLk9iamVjdDJEXHJcbiAqIE9iamVjdDJEXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5FbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBPYmplY3QyRCBleHRlbmRzIEVsZW1lbnQge1xyXG5cclxuICAvLyAvKiog5L2N572uICovXHJcbiAgLy8gcG9zaXRpb246IG51bGwsXHJcbiAgLy8gLyoqIOWbnui7oiAqL1xyXG4gIC8vIHJvdGF0aW9uOiAwLFxyXG4gIC8vIC8qKiDjgrnjgrHjg7zjg6sgKi9cclxuICAvLyBzY2FsZTogbnVsbCxcclxuICAvLyAvKiog5Z+65rqW5L2N572uICovXHJcbiAgLy8gb3JpZ2luOiBudWxsLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zLCBPYmplY3QyRC5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zLCBwaGluYS5hcHAuT2JqZWN0MkQuZGVmYXVsdHMpO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMihvcHRpb25zLngsIG9wdGlvbnMueSk7XHJcbiAgICB0aGlzLnNjYWxlICAgID0gbmV3IFZlY3RvcjIob3B0aW9ucy5zY2FsZVgsIG9wdGlvbnMuc2NhbGVZKTtcclxuICAgIHRoaXMucm90YXRpb24gPSBvcHRpb25zLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5vcmlnaW4gICA9IG5ldyBWZWN0b3IyKG9wdGlvbnMub3JpZ2luWCwgb3B0aW9ucy5vcmlnaW5ZKTtcclxuXHJcbiAgICB0aGlzLl9tYXRyaXggPSBuZXcgTWF0cml4MzMoKS5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5fd29ybGRNYXRyaXggPSBuZXcgTWF0cml4MzMoKS5pZGVudGl0eSgpO1xyXG5cclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuX292ZXJGbGFncyA9IHt9O1xyXG4gICAgdGhpcy5fdG91Y2hGbGFncyA9IHt9O1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XHJcbiAgICB0aGlzLmJvdW5kaW5nVHlwZSA9IG9wdGlvbnMuYm91bmRpbmdUeXBlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog54K544Go6KGd56qB44GX44Gm44GE44KL44GL44KS5Yik5a6aXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIGhpdFRlc3QoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuYm91bmRpbmdUeXBlID09PSAncmVjdCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0VGVzdFJlY3QoeCwgeSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ2NpcmNsZScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0VGVzdENpcmNsZSh4LCB5KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBub25lIOOBruWgtOWQiFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpdFRlc3RSZWN0KHgsIHkpIHtcclxuICAgIHZhciBwID0gdGhpcy5nbG9iYWxUb0xvY2FsKG5ldyBWZWN0b3IyKHgsIHkpKTtcclxuXHJcbiAgICB2YXIgbGVmdCAgID0gLXRoaXMud2lkdGgqdGhpcy5vcmlnaW5YO1xyXG4gICAgdmFyIHJpZ2h0ICA9ICt0aGlzLndpZHRoKigxLXRoaXMub3JpZ2luWCk7XHJcbiAgICB2YXIgdG9wICAgID0gLXRoaXMuaGVpZ2h0KnRoaXMub3JpZ2luWTtcclxuICAgIHZhciBib3R0b20gPSArdGhpcy5oZWlnaHQqKDEtdGhpcy5vcmlnaW5ZKTtcclxuXHJcbiAgICByZXR1cm4gKCBsZWZ0IDwgcC54ICYmIHAueCA8IHJpZ2h0ICkgJiYgKCB0b3AgIDwgcC55ICYmIHAueSA8IGJvdHRvbSApO1xyXG4gIH1cclxuXHJcbiAgaGl0VGVzdENpcmNsZSh4LCB5KSB7XHJcbiAgICAvLyDlhobliKTlrppcclxuICAgIHZhciBwID0gdGhpcy5nbG9iYWxUb0xvY2FsKG5ldyBWZWN0b3IyKHgsIHkpKTtcclxuICAgIGlmICgoKHAueCkqKHAueCkrKHAueSkqKHAueSkpIDwgKHRoaXMucmFkaXVzKnRoaXMucmFkaXVzKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6KaB57Sg44Go6KGd56qB44GX44Gm44GE44KL44GL44KS5Yik5a6aXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsbVxyXG4gICAqL1xyXG4gIGhpdFRlc3RFbGVtZW50KGVsbSkge1xyXG4gICAgdmFyIHJlY3QwID0gdGhpcztcclxuICAgIHZhciByZWN0MSA9IGVsbTtcclxuICAgIHJldHVybiAocmVjdDAubGVmdCA8IHJlY3QxLnJpZ2h0KSAmJiAocmVjdDAucmlnaHQgPiByZWN0MS5sZWZ0KSAmJlxyXG4gICAgICAgICAgIChyZWN0MC50b3AgPCByZWN0MS5ib3R0b20pICYmIChyZWN0MC5ib3R0b20gPiByZWN0MS50b3ApO1xyXG4gIH1cclxuXHJcblxyXG4gIGdsb2JhbFRvTG9jYWwocCkge1xyXG4gICAgdmFyIG1hdHJpeCA9IHRoaXMuX3dvcmxkTWF0cml4LmNsb25lKCk7XHJcbiAgICBtYXRyaXguaW52ZXJ0KCk7XHJcbiAgICAvLyBtYXRyaXgudHJhbnNwb3NlKCk7XHJcblxyXG4gICAgdmFyIHRlbXAgPSBtYXRyaXgubXVsdGlwbHlWZWN0b3IyKHApO1xyXG5cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJhY3RpdmUoZmxhZywgdHlwZSkge1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZsYWc7XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICB0aGlzLmJvdW5kaW5nVHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBYIOW6p+aomeWApOOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICovXHJcbiAgc2V0WCh4KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFkg5bqn5qiZ5YCk44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRZKHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogWFkg5bqn5qiZ44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqL1xyXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlm57ou6LjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICAgKi9cclxuICBzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgrnjgrHjg7zjg6vjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICovXHJcbiAgc2V0U2NhbGUoeCwgeSkge1xyXG4gICAgdGhpcy5zY2FsZS54ID0geDtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnkgPSB4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOWfuua6lueCueOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICAgKi9cclxuICBzZXRPcmlnaW4oeCwgeSkge1xyXG4gICAgdGhpcy5vcmlnaW4ueCA9IHg7XHJcbiAgICB0aGlzLm9yaWdpbi55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDluYXjgpLjgrvjg4Pjg4hcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcclxuICAgKi9cclxuICBzZXRXaWR0aCh3aWR0aCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIOmrmOOBleOCkuOCu+ODg+ODiFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcclxuICAgKi9cclxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiDjgrXjgqTjgroo5bmFLCDpq5jjgZUp44KS44K744OD44OIXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodFxyXG4gICAqL1xyXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRCb3VuZGluZ1R5cGUodHlwZSkge1xyXG4gICAgdGhpcy5ib3VuZGluZ1R5cGUgPSB0eXBlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0geDtcclxuICAgIHRoaXMucG9zaXRpb24ueSArPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBfY2FsY1dvcmxkTWF0cml4KCkge1xyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyBjYWNoZSBjaGVja1xyXG4gICAgaWYgKHRoaXMucm90YXRpb24gIT0gdGhpcy5fY2FjaGVkUm90YXRpb24pIHtcclxuICAgICAgdGhpcy5fY2FjaGVkUm90YXRpb24gPSB0aGlzLnJvdGF0aW9uO1xyXG5cclxuICAgICAgdmFyIHIgPSB0aGlzLnJvdGF0aW9uKihNYXRoLlBJLzE4MCk7XHJcbiAgICAgIHRoaXMuX3NyID0gTWF0aC5zaW4ocik7XHJcbiAgICAgIHRoaXMuX2NyID0gTWF0aC5jb3Mocik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvY2FsID0gdGhpcy5fbWF0cml4O1xyXG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Ll93b3JsZE1hdHJpeCB8fCBNYXRyaXgzMy5JREVOVElUWTtcclxuICAgIHZhciB3b3JsZCA9IHRoaXMuX3dvcmxkTWF0cml4O1xyXG5cclxuICAgIC8vIOODreODvOOCq+ODq+OBruihjOWIl+OCkuioiOeul1xyXG4gICAgbG9jYWwubTAwID0gdGhpcy5fY3IgKiB0aGlzLnNjYWxlLng7XHJcbiAgICBsb2NhbC5tMDEgPS10aGlzLl9zciAqIHRoaXMuc2NhbGUueTtcclxuICAgIGxvY2FsLm0xMCA9IHRoaXMuX3NyICogdGhpcy5zY2FsZS54O1xyXG4gICAgbG9jYWwubTExID0gdGhpcy5fY3IgKiB0aGlzLnNjYWxlLnk7XHJcbiAgICBsb2NhbC5tMDIgPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICBsb2NhbC5tMTIgPSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgLy8gY2FjaGVcclxuICAgIHZhciBhMDAgPSBsb2NhbC5tMDA7IHZhciBhMDEgPSBsb2NhbC5tMDE7IHZhciBhMDIgPSBsb2NhbC5tMDI7XHJcbiAgICB2YXIgYTEwID0gbG9jYWwubTEwOyB2YXIgYTExID0gbG9jYWwubTExOyB2YXIgYTEyID0gbG9jYWwubTEyO1xyXG4gICAgdmFyIGIwMCA9IHBhcmVudC5tMDA7IHZhciBiMDEgPSBwYXJlbnQubTAxOyB2YXIgYjAyID0gcGFyZW50Lm0wMjtcclxuICAgIHZhciBiMTAgPSBwYXJlbnQubTEwOyB2YXIgYjExID0gcGFyZW50Lm0xMTsgdmFyIGIxMiA9IHBhcmVudC5tMTI7XHJcblxyXG4gICAgLy8g6Kaq44Gu6KGM5YiX44Go5o6b44GR5ZCI44KP44Gb44KLXHJcbiAgICB3b3JsZC5tMDAgPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTA7XHJcbiAgICB3b3JsZC5tMDEgPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTE7XHJcbiAgICB3b3JsZC5tMDIgPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDI7XHJcblxyXG4gICAgd29ybGQubTEwID0gYjEwICogYTAwICsgYjExICogYTEwO1xyXG4gICAgd29ybGQubTExID0gYjEwICogYTAxICsgYjExICogYTExO1xyXG4gICAgd29ybGQubTEyID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHhcclxuICAgKiB45bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHgoKSAgIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueDsgfVxyXG4gIHNldCB4KHYpICB7IHRoaXMucG9zaXRpb24ueCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHlcclxuICAgKiB55bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IHkoKSAgIHsgcmV0dXJuIHRoaXMucG9zaXRpb24ueTsgfVxyXG4gIHNldCB5KHYpICB7IHRoaXMucG9zaXRpb24ueSA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIG9yaWdpblhcclxuICAgKiB45bqn5qiZ5YCkXHJcbiAgICovXHJcbiAgZ2V0IG9yaWdpblgoKSAgIHsgcmV0dXJuIHRoaXMub3JpZ2luLng7IH1cclxuICBzZXQgb3JpZ2luWCh2KSAgeyB0aGlzLm9yaWdpbi54ID0gdjsgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgb3JpZ2luWVxyXG4gICAqIHnluqfmqJnlgKRcclxuICAgKi9cclxuICBnZXQgb3JpZ2luWSgpICAgeyByZXR1cm4gdGhpcy5vcmlnaW4ueTsgfVxyXG4gIHNldCBvcmlnaW5ZKHYpICB7IHRoaXMub3JpZ2luLnkgPSB2OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBzY2FsZVhcclxuICAgKiDjgrnjgrHjg7zjg6tY5YCkXHJcbiAgICovXHJcbiAgZ2V0IHNjYWxlWCgpICAgeyByZXR1cm4gdGhpcy5zY2FsZS54OyB9XHJcbiAgc2V0IHNjYWxlWCh2KSAgeyB0aGlzLnNjYWxlLnggPSB2OyB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHNjYWxlWVxyXG4gICAqIOOCueOCseODvOODq1nlgKRcclxuICAgKi9cclxuICBnZXQgc2NhbGVZKCkgICB7IHJldHVybiB0aGlzLnNjYWxlLnk7IH1cclxuICBzZXQgc2NhbGVZKHYpICB7IHRoaXMuc2NhbGUueSA9IHY7IH1cclxuICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgd2lkdGhcclxuICAgKiB3aWR0aFxyXG4gICAqL1xyXG4gIGdldCB3aWR0aCgpICAge1xyXG4gICAgcmV0dXJuICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSA/XHJcbiAgICAgIHRoaXMuX3dpZHRoIDogdGhpcy5fZGlhbWV0ZXI7XHJcbiAgfVxyXG4gIHNldCB3aWR0aCh2KSAgeyB0aGlzLl93aWR0aCA9IHY7IH1cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgaGVpZ2h0XHJcbiAgICogaGVpZ2h0XHJcbiAgICovXHJcbiAgZ2V0IGhlaWdodCgpICAge1xyXG4gICAgcmV0dXJuICh0aGlzLmJvdW5kaW5nVHlwZSA9PT0gJ3JlY3QnKSA/XHJcbiAgICAgIHRoaXMuX2hlaWdodCA6IHRoaXMuX2RpYW1ldGVyO1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHYpICB7IHRoaXMuX2hlaWdodCA9IHY7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIHJhZGl1c1xyXG4gICAqIOWNiuW+hFxyXG4gICAqL1xyXG4gIGdldCByYWRpdXMoKSAgIHtcclxuICAgIHJldHVybiAodGhpcy5ib3VuZGluZ1R5cGUgPT09ICdyZWN0JykgP1xyXG4gICAgICAodGhpcy53aWR0aCt0aGlzLmhlaWdodCkvNCA6IHRoaXMuX3JhZGl1cztcclxuICB9XHJcbiAgc2V0IHJhZGl1cyh2KSAge1xyXG4gICAgdGhpcy5fcmFkaXVzID0gdjtcclxuICAgIHRoaXMuX2RpYW1ldGVyID0gdioyO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAcHJvcGVydHkgICAgdG9wXHJcbiAgICog5bemXHJcbiAgICovXHJcbiAgZ2V0IHRvcCgpICAgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZOyB9XHJcbiAgc2V0IHRvcCh2KSAgeyB0aGlzLnkgPSB2ICsgdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICByaWdodFxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCByaWdodCgpICAgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCooMS10aGlzLm9yaWdpblgpOyB9XHJcbiAgc2V0IHJpZ2h0KHYpICB7IHRoaXMueCA9IHYgLSB0aGlzLndpZHRoKigxLXRoaXMub3JpZ2luWCk7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGJvdHRvbVxyXG4gICAqIOW3plxyXG4gICAqL1xyXG4gIGdldCBib3R0b20oKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0KigxLXRoaXMub3JpZ2luWSk7IH1cclxuICBzZXQgYm90dG9tKHYpICB7IHRoaXMueSA9IHYgLSB0aGlzLmhlaWdodCooMS10aGlzLm9yaWdpblkpOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBsZWZ0XHJcbiAgICog5bemXHJcbiAgICovXHJcbiAgZ2V0IGxlZnQoKSAgIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgqdGhpcy5vcmlnaW5YOyB9XHJcbiAgc2V0IGxlZnQodikgIHsgdGhpcy54ID0gdiArIHRoaXMud2lkdGgqdGhpcy5vcmlnaW5YOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSAgICBjZW50ZXJYXHJcbiAgICogY2VudGVyWFxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXJYKCkgICB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzIgLSB0aGlzLndpZHRoKnRoaXMub3JpZ2luWDsgfVxyXG4gIHNldCBjZW50ZXJYKHYpICB7XHJcbiAgICAvLyBUT0RPOiDjganjgYbjgZfjgojjgYbjgYvjgao/P1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5ICAgIGNlbnRlcllcclxuICAgKiBjZW50ZXJZXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlclkoKSAgIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmhlaWdodCp0aGlzLm9yaWdpblk7IH1cclxuICBzZXQgY2VudGVyWSh2KSAge1xyXG4gICAgLy8gVE9ETzog44Gp44GG44GX44KI44GG44GL44GqPz9cclxuICB9XHJcbn1cclxuXHJcbk9iamVjdDJELmRlZmF1bHRzID0ge1xyXG4gIHg6IDAsXHJcbiAgeTogMCxcclxuICBzY2FsZVg6IDEsXHJcbiAgc2NhbGVZOiAxLFxyXG4gIHJvdGF0aW9uOiAwLFxyXG4gIG9yaWdpblg6IDAuNSxcclxuICBvcmlnaW5ZOiAwLjUsXHJcbiAgd2lkdGg6IDY0LFxyXG4gIGhlaWdodDogNjQsXHJcbiAgcmFkaXVzOiAzMixcclxuICBib3VuZGluZ1R5cGU6ICdyZWN0JyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkRvbUFwcFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hcHAuQmFzZUFwcFxyXG4gKi9cclxuY2xhc3MgRG9tQXBwIGV4dGVuZHMgQmFzZUFwcCB7XHJcblxyXG4gIC8vIGRvbUVsZW1lbnQ6IG51bGwsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmRvbUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gb3B0aW9ucy5kb21FbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnF1ZXJ5KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCgnZXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmZwcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZnBzID0gb3B0aW9ucy5mcHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHR5cGVvZiBvcHRpb25zLnJ1bm5lciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnRpY2tlci5ydW5uZXIgPSBvcHRpb25zLnJ1bm5lcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vdXNlID0gbmV3IE1vdXNlKHRoaXMuZG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLnRvdWNoID0gbmV3IFRvdWNoKHRoaXMuZG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLnRvdWNoTGlzdCA9IG5ldyBUb3VjaExpc3QodGhpcy5kb21FbGVtZW50LCA1KTtcclxuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoZG9jdW1lbnQpO1xyXG4gICAgLy8gLy8g5Yqg6YCf5bqm44K744Oz44K144O844KS55Sf5oiQXHJcbiAgICAvLyB0aGlzLmFjY2VsZXJvbWV0ZXIgPSBwaGluYS5pbnB1dC5BY2NlbGVyb21ldGVyKCk7XHJcblxyXG4gICAgLy8g44Od44Kk44Oz44K/44KS44K744OD44OIKFBDIOOBp+OBryBNb3VzZSwgTW9iaWxlIOOBp+OBryBUb3VjaClcclxuICAgIHRoaXMucG9pbnRlciA9IHRoaXMudG91Y2g7XHJcbiAgICB0aGlzLnBvaW50ZXJzID0gdGhpcy50b3VjaExpc3QudG91Y2hlcztcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnBvaW50ZXIgPSB0aGlzLnRvdWNoO1xyXG4gICAgICB0aGlzLnBvaW50ZXJzID0gdGhpcy50b3VjaExpc3QudG91Y2hlcztcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucG9pbnRlciA9IHRoaXMubW91c2U7XHJcbiAgICAgIHRoaXMucG9pbnRlcnMgPSBbdGhpcy5tb3VzZV07XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIGtleWJvYXJkIGV2ZW50XHJcbiAgICB0aGlzLmtleWJvYXJkLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSAmJiB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgna2V5ZG93bicsIHtcclxuICAgICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMua2V5Ym9hcmQub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSAmJiB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgna2V5dXAnLCB7XHJcbiAgICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmtleWJvYXJkLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgJiYgdGhpcy5jdXJyZW50U2NlbmUuZmxhcmUoJ2tleXByZXNzJywge1xyXG4gICAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIGNsaWNrIOWvvuW/nFxyXG4gICAgdmFyIGV2ZW50TmFtZSA9IHBoaW5hJDEuaXNNb2JpbGUoKSA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMuX2NoZWNrQ2xpY2suYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8g5rG65a6a5pmC44Gu5Yem55CG44KS44Kq44OV44Gr44GZ44KLKGlQaG9uZSDmmYLjga7jgaHjgonjgaTjgY3lr77nrZYpXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSkgeyBlLnN0b3AoKTsgfSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKSB7IGUuc3RvcCgpOyB9KTtcclxuXHJcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjg5Xjgqnjg7zjgqvjgrnmmYLjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLnmbvpjLJcclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2ZvY3VzJyk7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmZsYXJlKCdmb2N1cycpO1xyXG4gICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjg5bjg6njg7zmmYLjgqTjg5njg7Pjg4jjg6rjgrnjg4rjgpLnmbvpjLJcclxuICAgIHBoaW5hJDEuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5mbGFyZSgnYmx1cicpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5mbGFyZSgnYmx1cicpO1xyXG4gICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgLy8g5pu05paw6Zai5pWw44KS55m76YyyXHJcbiAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubW91c2UudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMudG91Y2gudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMudG91Y2hMaXN0LnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmtleWJvYXJkLnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tDbGljayhlKSB7XHJcbiAgICB2YXIgX2NoZWNrID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgICAgICBfY2hlY2soY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbGVtZW50Ll9jbGlja2VkICYmIGVsZW1lbnQuaGFzKCdjbGljaycpKSB7XHJcbiAgICAgICAgZWxlbWVudC5mbGFyZSgnY2xpY2snKTtcclxuICAgICAgfVxyXG4gICAgICBlbGVtZW50Ll9jbGlja2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIF9jaGVjayh0aGlzLmN1cnJlbnRTY2VuZSk7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuQ2FudmFzUmVuZGVyZXJcclxuICovXHJcbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLmNhbnZhcy5jb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHNjZW5lKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xyXG4gICAgaWYgKHNjZW5lLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmNhbnZhcy5jbGVhckNvbG9yKHNjZW5lLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29udGV4dC5zYXZlKCk7XHJcbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHNjZW5lKTtcclxuICAgIHRoaXMuX2NvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2hpbGRyZW4ob2JqKSB7XHJcbiAgICAvLyDlrZDkvpvjgZ/jgaHjgoLlrp/ooYxcclxuICAgIGlmIChvYmouY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgdGVtcENoaWxkcmVuID0gb2JqLmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgIGZvciAodmFyIGk9MCxsZW49dGVtcENoaWxkcmVuLmxlbmd0aDsgaTxsZW47ICsraSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KHRlbXBDaGlsZHJlbltpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck9iamVjdChvYmopIHtcclxuICAgIGlmIChvYmoudmlzaWJsZSA9PT0gZmFsc2UgJiYgIW9iai5pbnRlcmFjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgIG9iai5fY2FsY1dvcmxkTWF0cml4ICYmIG9iai5fY2FsY1dvcmxkTWF0cml4KCk7XHJcblxyXG4gICAgaWYgKG9iai52aXNpYmxlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIG9iai5fY2FsY1dvcmxkQWxwaGEgJiYgb2JqLl9jYWxjV29ybGRBbHBoYSgpO1xyXG5cclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jYW52YXMuY29udGV4dDtcclxuXHJcbiAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gb2JqLl93b3JsZEFscGhhO1xyXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBvYmouYmxlbmRNb2RlO1xyXG5cclxuICAgIGlmIChvYmouX3dvcmxkTWF0cml4KSB7XHJcbiAgICAgIC8vIOihjOWIl+OCkuOCu+ODg+ODiFxyXG4gICAgICB2YXIgbSA9IG9iai5fd29ybGRNYXRyaXg7XHJcbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKCBtLm0wMCwgbS5tMTAsIG0ubTAxLCBtLm0xMSwgbS5tMDIsIG0ubTEyICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9iai5jbGlwKSB7XHJcblxyXG4gICAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIG9iai5jbGlwKHRoaXMuY2FudmFzKTtcclxuICAgICAgY29udGV4dC5jbGlwKCk7XHJcblxyXG4gICAgICBpZiAob2JqLmRyYXcpIG9iai5kcmF3KHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIC8vIOWtkOS+m+OBn+OBoeOCguWun+ihjFxyXG4gICAgICBpZiAob2JqLnJlbmRlckNoaWxkQnlTZWxmID09PSBmYWxzZSAmJiBvYmouY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdmFyIHRlbXBDaGlsZHJlbiA9IG9iai5jaGlsZHJlbi5zbGljZSgpO1xyXG4gICAgICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wQ2hpbGRyZW4ubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJPYmplY3QodGVtcENoaWxkcmVuW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKG9iai5kcmF3KSBvYmouZHJhdyh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICAvLyDlrZDkvpvjgZ/jgaHjgoLlrp/ooYxcclxuICAgICAgaWYgKG9iai5yZW5kZXJDaGlsZEJ5U2VsZiA9PT0gZmFsc2UgJiYgb2JqLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgdGVtcENoaWxkcmVuID0gb2JqLmNoaWxkcmVuLnNsaWNlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wLGxlbj10ZW1wQ2hpbGRyZW4ubGVuZ3RoOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlck9iamVjdCh0ZW1wQ2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuYXBwLlNjZW5lXHJcbiAqL1xyXG5jbGFzcyBEaXNwbGF5U2NlbmUgZXh0ZW5kcyBTY2VuZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIERpc3BsYXlTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBwYXJhbXMgPSAoe30pLiRzYWZlKHBhcmFtcywgRGlzcGxheVNjZW5lLmRlZmF1bHRzKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHRoaXMuY2FudmFzLnNldFNpemUocGFyYW1zLndpZHRoLCBwYXJhbXMuaGVpZ2h0KTtcclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAocGFyYW1zLmJhY2tncm91bmRDb2xvcikgPyBwYXJhbXMuYmFja2dyb3VuZENvbG9yIDogbnVsbDtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gcGFyYW1zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5ncmlkWCA9IG5ldyBHcmlkKHBhcmFtcy53aWR0aCwgMTYpO1xyXG4gICAgdGhpcy5ncmlkWSA9IG5ldyBHcmlkKHBhcmFtcy5oZWlnaHQsIDE2KTtcclxuXHJcbiAgICAvLyBUT0RPOiDkuIDml6bjgoDjgorjgoTjgorlr77lv5xcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSA9IGZ1bmN0aW9uKGZsYWcpIHtcclxuICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZsYWc7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3ZlckZsYWdzID0ge307XHJcbiAgICB0aGlzLl90b3VjaEZsYWdzID0ge307XHJcblxyXG4gICAgdmFyIGN0eCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcbiAgICBpZiAocGFyYW1zLmltYWdlU21vb3RoaW5nID09PSBmYWxzZSkge1xyXG4gICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIGN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgY3R4Lm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaXRUZXN0KCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRGlzcGxheVNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiA2NDAsXHJcbiAgaGVpZ2h0OiA5NjAsXHJcbiAgaW1hZ2VTbW9vdGhpbmc6IHRydWUsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5DYW52YXNBcHBcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5Eb21BcHBcclxuICovXHJcbmNsYXNzIENhbnZhc0FwcCBleHRlbmRzIERvbUFwcCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKChvcHRpb25zIHx8IHt9KSwgQ2FudmFzQXBwLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUoQ2FudmFzQXBwLmRlZmF1bHRzKTtcclxuICAgIFxyXG4gICAgaWYgKCFvcHRpb25zLnF1ZXJ5ICYmICFvcHRpb25zLmRvbUVsZW1lbnQpIHtcclxuICAgICAgb3B0aW9ucy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGlmIChvcHRpb25zLmFwcGVuZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3B0aW9ucy5kb21FbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5ncmlkWCA9IG5ldyBHcmlkKHtcclxuICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgIGNvbHVtbnM6IG9wdGlvbnMuY29sdW1ucyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ncmlkWSA9IG5ldyBHcmlkKHtcclxuICAgICAgd2lkdGg6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgICBjb2x1bW5zOiBvcHRpb25zLmNvbHVtbnMsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5kb21FbGVtZW50KTtcclxuICAgIHRoaXMuY2FudmFzLnNldFNpemUob3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgOiAnd2hpdGUnO1xyXG5cclxuICAgIHRoaXMucmVwbGFjZVNjZW5lKG5ldyBEaXNwbGF5U2NlbmUoe1xyXG4gICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgIH0pKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5maXQpIHtcclxuICAgICAgdGhpcy5maXRTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5waXhlbGF0ZWQpIHtcclxuICAgICAgLy8g44OB44Op44Gk44GN6Ziy5q2iXHJcbiAgICAgIC8vIOODieODg+ODiOe1teOCsuODvOODoOOBruOCteODneODvOODiFxyXG4gICAgICAvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLWltYWdlcy8jdGhlLWltYWdlLXJlbmRlcmluZ1xyXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW1hZ2UtcmVuZGVyaW5nI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxyXG4gICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRmlyZWZveFxcL1xcZCsvKSkge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdjcmlzcC1lZGdlcyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwdXNoU2NlbmUsIHBvcFNjZW5lIOWvvuetllxyXG4gICAgdGhpcy5vbigncHVzaCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBvbmVudGVyIOWvvuetluOBp+aPj+eUu+OBl+OBpuOBiuOBj1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9kcmF3KCkge1xyXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLmNsZWFyQ29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2NlbmUuY2FudmFzKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLl9yZW5kZXIoKTtcclxuXHJcbiAgICAgIC8vIHRoaXMuX3NjZW5lcy5lYWNoKGZ1bmN0aW9uKHNjZW5lKSB7XHJcbiAgICAgIHRoaXMuX3NjZW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHNjZW5lKSB7XHJcbiAgICAgICAgdmFyIGMgPSBzY2VuZS5jYW52YXM7XHJcbiAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGMuZG9tRWxlbWVudCwgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaXRTY3JlZW4oKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5maXRTY3JlZW4oKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWNcclxuQ2FudmFzQXBwLmRlZmF1bHRzID0ge1xyXG4gIHdpZHRoOiA2NDAsXHJcbiAgaGVpZ2h0OiA5NjAsXHJcbiAgY29sdW1uczogMTIsXHJcbiAgZml0OiB0cnVlLFxyXG4gIGFwcGVuZDogdHJ1ZSxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlFbGVtZW50XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5PYmplY3QyRFxyXG4gKi9cclxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBPYmplY3QyRCB7XHJcblxyXG4gIC8vIC8qKiDooajnpLrjg5Xjg6njgrAgKi9cclxuICAvLyB2aXNpYmxlOiB0cnVlLFxyXG4gIC8vIC8qKiDjgqLjg6vjg5XjgqEgKi9cclxuICAvLyBhbHBoYTogMS4wLFxyXG4gIC8vIC8qKiDjg5bjg6zjg7Pjg4njg6Ljg7zjg4kgKi9cclxuICAvLyBibGVuZE1vZGU6IFwic291cmNlLW92ZXJcIixcclxuXHJcbiAgLy8gLyoqIOWtkOS+m+OCkiDoh6rliIbjga5DYW52YXNSZW5kZXJlciDjgafmj4/nlLvjgZnjgovjgYsgKi9cclxuICAvLyByZW5kZXJDaGlsZEJ5U2VsZjogZmFsc2UsXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSAkc2FmZS5jYWxsKHt9LCBvcHRpb25zfHx7fSwgRGlzcGxheUVsZW1lbnQuZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudC5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnZpc2libGUgPSAob3B0aW9ucy52aXNpYmxlICE9IG51bGwpID8gb3B0aW9ucy52aXNpYmxlIDogdHJ1ZTtcclxuICAgIHRoaXMuYWxwaGEgPSAob3B0aW9ucy5hbHBoYSAhPSBudWxsKSA/IG9wdGlvbnMuYWxwaGEgOiAxLjA7XHJcbiAgICB0aGlzLmJsZW5kTW9kZSA9IFwic291cmNlLW92ZXJcIjtcclxuICAgIHRoaXMucmVuZGVyQ2hpbGRCeVNlbGYgPSBmYWxzZTtcclxuICAgIHRoaXMuX3dvcmxkQWxwaGEgPSAxLjA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqLjg6vjg5XjgqHlgKTjgpLjgrvjg4Pjg4hcclxuICAgKi9cclxuICBzZXRBbHBoYShhbHBoYSkge1xyXG4gICAgdGhpcy5hbHBoYSA9IGFscGhhO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooajnpLov6Z2e6KGo56S644KS44K744OD44OIXHJcbiAgICovXHJcbiAgc2V0VmlzaWJsZShmbGFnKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmbGFnO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDooajnpLpcclxuICAgKi9cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Z2e6KGo56S6XHJcbiAgICovXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9jYWxjV29ybGRBbHBoYSgpIHtcclxuICAgIGlmICh0aGlzLmFscGhhIDwgMCkge1xyXG4gICAgICB0aGlzLl93b3JsZEFscGhhID0gMDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkge1xyXG4gICAgICB0aGlzLl93b3JsZEFscGhhID0gdGhpcy5hbHBoYTtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgd29ybGRBbHBoYSA9ICh0aGlzLnBhcmVudC5fd29ybGRBbHBoYSAhPT0gdW5kZWZpbmVkKSA/IHRoaXMucGFyZW50Ll93b3JsZEFscGhhIDogMS4wO1xyXG4gICAgICAvLyBhbHBoYVxyXG4gICAgICB0aGlzLl93b3JsZEFscGhhID0gd29ybGRBbHBoYSAqIHRoaXMuYWxwaGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRGlzcGxheUVsZW1lbnQuZGVmYXVsdHMgPSB7XHJcbiAgYWxwaGE6IDEuMCxcclxuICB2aXNpYmxlOiB0cnVlLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkFzc2V0TWFuYWdlclxyXG4gKiBcclxuICovXHJcbmNsYXNzIEFzc2V0TWFuYWdlciB7XHJcblxyXG4gIHN0YXRpYyBnZXQodHlwZSwga2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NldHNbdHlwZV0gJiYgdGhpcy5hc3NldHNbdHlwZV1ba2V5XTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQodHlwZSwga2V5LCBhc3NldCkge1xyXG4gICAgaWYgKCF0aGlzLmFzc2V0c1t0eXBlXSkge1xyXG4gICAgICB0aGlzLmFzc2V0c1t0eXBlXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5hc3NldHNbdHlwZV1ba2V5XSA9IGFzc2V0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRhaW5zKHR5cGUsIGtleSkge1xyXG4gICAgcmV0dXJuIDtcclxuICB9XHJcblxyXG59XHJcblxyXG5Bc3NldE1hbmFnZXIuYXNzZXRzID0ge1xyXG4gIGltYWdlOiB7fSxcclxuICBzb3VuZDoge30sXHJcbiAgc3ByaXRlc2hlZXQ6IHt9LFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuU3ByaXRlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICovXHJcbmNsYXNzIFNwcml0ZSBleHRlbmRzIERpc3BsYXlFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zcmNSZWN0ID0gbmV3IFJlY3QoKTtcclxuICAgIHRoaXMuc2V0SW1hZ2UoaW1hZ2UsIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2UuZG9tRWxlbWVudDtcclxuXHJcbiAgICAvLyBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsXHJcbiAgICAvLyAgIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsXHJcbiAgICAvLyAgIC10aGlzLndpZHRoKnRoaXMub3JpZ2luLngsIC10aGlzLmhlaWdodCp0aGlzLm9yaWdpbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgLy8gICApO1xyXG5cclxuICAgIHZhciBzcmNSZWN0ID0gdGhpcy5zcmNSZWN0O1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgICBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53aWR0aCwgc3JjUmVjdC5oZWlnaHQsXHJcbiAgICAgIC10aGlzLl93aWR0aCp0aGlzLm9yaWdpblgsIC10aGlzLl9oZWlnaHQqdGhpcy5vcmlnaW5ZLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRJbWFnZShpbWFnZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaW1hZ2UgPSBBc3NldE1hbmFnZXIuZ2V0KCdpbWFnZScsIGltYWdlKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2ltYWdlID0gaW1hZ2U7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5faW1hZ2UuZG9tRWxlbWVudC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5faW1hZ2UuZG9tRWxlbWVudC5oZWlnaHQ7XHJcblxyXG4gICAgaWYgKHdpZHRoKSB7IHRoaXMud2lkdGggPSB3aWR0aDsgfVxyXG4gICAgaWYgKGhlaWdodCkgeyB0aGlzLmhlaWdodCA9IGhlaWdodDsgfVxyXG5cclxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRGcmFtZUluZGV4KGluZGV4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgdHcgID0gd2lkdGggfHwgdGhpcy5fd2lkdGg7ICAgICAgLy8gdHdcclxuICAgIHZhciB0aCAgPSBoZWlnaHQgfHwgdGhpcy5faGVpZ2h0OyAgICAvLyB0aFxyXG4gICAgdmFyIHJvdyA9IH5+KHRoaXMuaW1hZ2UuZG9tRWxlbWVudC53aWR0aCAvIHR3KTtcclxuICAgIHZhciBjb2wgPSB+fih0aGlzLmltYWdlLmRvbUVsZW1lbnQuaGVpZ2h0IC8gdGgpO1xyXG4gICAgdmFyIG1heEluZGV4ID0gcm93KmNvbDtcclxuICAgIGluZGV4ID0gaW5kZXglbWF4SW5kZXg7XHJcbiAgICBcclxuICAgIHZhciB4ID0gaW5kZXglcm93O1xyXG4gICAgdmFyIHkgPSB+fihpbmRleC9yb3cpO1xyXG4gICAgdGhpcy5zcmNSZWN0LnggPSB4KnR3O1xyXG4gICAgdGhpcy5zcmNSZWN0LnkgPSB5KnRoO1xyXG4gICAgdGhpcy5zcmNSZWN0LndpZHRoICA9IHR3O1xyXG4gICAgdGhpcy5zcmNSZWN0LmhlaWdodCA9IHRoO1xyXG5cclxuICAgIHRoaXMuX2ZyYW1lSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBpbWFnZSgpIHtyZXR1cm4gdGhpcy5faW1hZ2U7fVxyXG4gIHNldCBpbWFnZSh2KSB7XHJcbiAgICB0aGlzLnNldEltYWdlKHYpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgZnJhbWVJbmRleCgpIHtyZXR1cm4gdGhpcy5fZnJhbWVJbmRleDt9XHJcbiAgc2V0IGZyYW1lSW5kZXgoaWR4KSB7XHJcbiAgICB0aGlzLnNldEZyYW1lSW5kZXgoaWR4KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuUGxhaW5FbGVtZW50XHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheUVsZW1lbnRcclxuICovXHJcbmNsYXNzIFBsYWluRWxlbWVudCBleHRlbmRzIERpc3BsYXlFbGVtZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgIHRoaXMuY2FudmFzLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgdyA9IGltYWdlLndpZHRoO1xyXG4gICAgdmFyIGggPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIHggPSAtdyp0aGlzLm9yaWdpbi54O1xyXG4gICAgdmFyIHkgPSAtaCp0aGlzLm9yaWdpbi55O1xyXG5cclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgMCwgMCwgdywgaCxcclxuICAgICAgeCwgeSwgdywgaFxyXG4gICAgICApO1xyXG4gIH1cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuTGF5ZXJcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5RWxlbWVudFxyXG4gKi9cclxuY2xhc3MgTGF5ZXIgZXh0ZW5kcyBEaXNwbGF5RWxlbWVudCB7XHJcblxyXG4gIC8qKiDlrZDkvpvjgpIg6Ieq5YiG44GuIENhbnZhc1JlbmRlcmVyIOOBp+aPj+eUu+OBmeOCi+OBiyAqL1xyXG4gIC8vIHJlbmRlckNoaWxkQnlTZWxmOiB0cnVlLFxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHtcclxuICAgICAgd2lkdGg6IDY0MCxcclxuICAgICAgaGVpZ2h0OiA5NjAsXHJcbiAgICB9KTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgdGhpcy5ncmlkWCA9IG5ldyBHcmlkKG9wdGlvbnMud2lkdGgsIDE2KTtcclxuICAgIHRoaXMuZ3JpZFkgPSBuZXcgR3JpZChvcHRpb25zLmhlaWdodCwgMTYpO1xyXG4gICAgdGhpcy5yZW5kZXJDaGlsZEJ5U2VsZiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmF3KGNhbnZhcykge1xyXG4gICAgaWYgKCF0aGlzLmRvbUVsZW1lbnQpIHJldHVybiA7XHJcblxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLFxyXG4gICAgICAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAtdGhpcy53aWR0aCp0aGlzLm9yaWdpblgsIC10aGlzLmhlaWdodCp0aGlzLm9yaWdpblksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LkNhbnZhc0xheWVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuTGF5ZXJcclxuICovXHJcbmNsYXNzIENhbnZhc0xheWVyIGV4dGVuZHMgTGF5ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jYW52YXMuZG9tRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLm9uKCdlbnRlcmZyYW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0ZW1wID0gdGhpcy5fd29ybGRNYXRyaXg7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcyk7XHJcbiAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gdGVtcDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjYW52YXMpIHtcclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZG9tRWxlbWVudDtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSxcclxuICAgICAgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCxcclxuICAgICAgLXRoaXMud2lkdGgqdGhpcy5vcmlnaW5YLCAtdGhpcy5oZWlnaHQqdGhpcy5vcmlnaW5ZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5UaHJlZUxheWVyXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuTGF5ZXJcclxuICovXHJcbmNsYXNzIFRocmVlTGF5ZXIgZXh0ZW5kcyBMYXllciB7XHJcblxyXG4gIC8vIHNjZW5lOiBudWxsLFxyXG4gIC8vIGNhbWVyYTogbnVsbCxcclxuICAvLyBsaWdodDogbnVsbCxcclxuICAvLyByZW5kZXJlcjogbnVsbCxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgb3B0aW9ucy53aWR0aCAvIG9wdGlvbnMuaGVpZ2h0LCAxLCAxMDAwMCApO1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XHJcblxyXG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMSApO1xyXG4gICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQoIDEsIDEsIDEgKS5ub3JtYWxpemUoKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKCB0aGlzLmxpZ2h0ICk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4ZjBmMGYwICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0ICk7XHJcblxyXG4gICAgdGhpcy5vbignZW50ZXJmcmFtZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuUGxhaW5FbGVtZW50XHJcbiAqL1xyXG5jbGFzcyBTaGFwZSBleHRlbmRzIFBsYWluRWxlbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5wYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmZpbGwgPSBvcHRpb25zLmZpbGw7XHJcbiAgICB0aGlzLnN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlO1xyXG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IG9wdGlvbnMuc3Ryb2tlV2lkdGg7XHJcbiAgICB0aGlzLmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXA7XHJcbiAgICB0aGlzLmxpbmVKb2luID0gb3B0aW9ucy5saW5lSm9pbjtcclxuXHJcbiAgICB0aGlzLnNoYWRvdyA9IG9wdGlvbnMuc2hhZG93O1xyXG4gICAgdGhpcy5zaGFkb3dCbHVyID0gb3B0aW9ucy5zaGFkb3dCbHVyO1xyXG5cclxuICAgIHRoaXMud2F0Y2hEcmF3ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcblxyXG4gICAgdmFyIGNoZWNrUmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHJlbmRlclxyXG4gICAgICBpZiAodGhpcy53YXRjaERyYXcgJiYgdGhpcy5fZGlydHlEcmF3ID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICAgIHRoaXMuX2RpcnR5RHJhdyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub24oJ2VudGVyZnJhbWUnLCBjaGVja1JlbmRlcik7XHJcbiAgICB0aGlzLm9uKCdhZGRlZCcsIGNoZWNrUmVuZGVyKTtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoICsgdGhpcy5wYWRkaW5nKjI7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzSGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nKjI7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzU2l6ZSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogdGhpcy5jYWxjQ2FudmFzV2lkdGgoKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNhbGNDYW52YXNIZWlnaHQoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpc1N0cm9rYWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0cm9rZSAmJiAwIDwgdGhpcy5zdHJva2VXaWR0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB2aXJ0dWFsXHJcbiAgICogQHBhcmFtICB7cGhpbmEuZ3JhcGhpY3MuQ2FudmFzfSBjYW52YXMgXHJcbiAgICogQHJldHVybiB7YW55fVxyXG4gICAqL1xyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdmlydHVhbFxyXG4gICAqIEBwYXJhbSAge3BoaW5hLmdyYXBoaWNzLkNhbnZhc30gY2FudmFzIFxyXG4gICAqIEByZXR1cm4ge2FueX1cclxuICAgKi9cclxuICBwb3N0cmVuZGVyKGNhbnZhcykge1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGwoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Ryb2tlKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIC8vIOODquOCteOCpOOCulxyXG4gICAgdmFyIHNpemUgPSB0aGlzLmNhbGNDYW52YXNTaXplKCk7XHJcbiAgICBjYW52YXMuc2V0U2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAvLyDjgq/jg6rjgqLjgqvjg6njg7xcclxuICAgIGNhbnZhcy5jbGVhckNvbG9yKHRoaXMuYmFja2dyb3VuZENvbG9yKTtcclxuICAgIC8vIOS4reW/g+OBq+W6p+aomeOCkuenu+WLlVxyXG4gICAgY2FudmFzLnRyYW5zZm9ybUNlbnRlcigpO1xyXG5cclxuICAgIC8vIOaPj+eUu+WJjeWHpueQhlxyXG4gICAgdGhpcy5wcmVyZW5kZXIodGhpcy5jYW52YXMpO1xyXG5cclxuICAgIC8vIOOCueODiOODreODvOOCr+aPj+eUu1xyXG4gICAgaWYgKHRoaXMuaXNTdHJva2FibGUoKSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2U7XHJcbiAgICAgIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5zdHJva2VXaWR0aDtcclxuICAgICAgY29udGV4dC5saW5lQ2FwID0gdGhpcy5saW5lQ2FwO1xyXG4gICAgICBjb250ZXh0LmxpbmVKb2luID0gdGhpcy5saW5lSm9pbjtcclxuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gMDtcclxuICAgICAgdGhpcy5yZW5kZXJTdHJva2UoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDloZfjgorjgaTjgbbjgZfmj4/nlLtcclxuICAgIGlmICh0aGlzLmZpbGwpIHtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGw7XHJcblxyXG4gICAgICAvLyBzaGFkb3cg44GuIG9uL29mZlxyXG4gICAgICBpZiAodGhpcy5zaGFkb3cpIHtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3c7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy5zaGFkb3dCbHVyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVuZGVyRmlsbChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaPj+eUu+W+jOWHpueQhlxyXG4gICAgdGhpcy5wb3N0cmVuZGVyKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyB3YXRjaFJlbmRlclByb3BlcnR5KGtleSkge1xyXG4gICAgLy8gdGhpcy5wcm90b3R5cGUuJHdhdGNoKGtleSwgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICR3YXRjaC5jYWxsKHRoaXMucHJvdG90eXBlLCBrZXksIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xyXG4gICAgICAgIHRoaXMuX2RpcnR5RHJhdyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdhdGNoUmVuZGVyUHJvcGVydGllcyhrZXlzKSB7XHJcbiAgICB2YXIgd2F0Y2hSZW5kZXJQcm9wZXJ0eSA9IHRoaXMud2F0Y2hSZW5kZXJQcm9wZXJ0eSB8fCBTaGFwZS53YXRjaFJlbmRlclByb3BlcnR5O1xyXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICB3YXRjaFJlbmRlclByb3BlcnR5LmNhbGwodGhpcywga2V5KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5TaGFwZS5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogNjQsXHJcbiAgaGVpZ2h0OiA2NCxcclxuICBwYWRkaW5nOiA4LFxyXG5cclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjYWFhJyxcclxuICBmaWxsOiAnIzAwYScsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgbGluZUNhcDogJ3JvdW5kJyxcclxuICBsaW5lSm9pbjogJ3JvdW5kJyxcclxuXHJcbiAgc2hhZG93OiBmYWxzZSxcclxuICBzaGFkb3dCbHVyOiA0LFxyXG59O1xyXG5cclxuLy8gX2RlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0aWVzKFtcclxuICAnd2lkdGgnLFxyXG4gICdoZWlnaHQnLFxyXG4gICdyYWRpdXMnLFxyXG4gICdwYWRkaW5nJyxcclxuICAnYmFja2dyb3VuZENvbG9yJyxcclxuICAnZmlsbCcsXHJcbiAgJ3N0cm9rZScsXHJcbiAgJ3N0cm9rZVdpZHRoJyxcclxuICAnbGluZUNhcCcsXHJcbiAgJ2xpbmVKb2luJyxcclxuICAnc2hhZG93JyxcclxuICAnc2hhZG93Qmx1cicsXHJcbl0pO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5SZWN0YW5nbGVTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBSZWN0YW5nbGVTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5SZWN0YW5nbGVTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFJlY3RhbmdsZVNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IG9wdGlvbnMuY29ybmVyUmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnJvdW5kUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29ybmVyUmFkaXVzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuUmVjdGFuZ2xlU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICdibHVlJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuICBjb3JuZXJSYWRpdXM6IDAsXHJcbn07XHJcblxyXG4vLyBfZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoUmVjdGFuZ2xlU2hhcGUsICdjb3JuZXJSYWRpdXMnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuQ2lyY2xlU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgQ2lyY2xlU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuQ2lyY2xlU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBDaXJjbGVTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmNpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkNpcmNsZVNoYXBlLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAncmVkJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuICByYWRpdXM6IDMyLFxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5UcmlhbmdsZVNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFRyaWFuZ2xlU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLmRpc3BsYXkuVHJpYW5nbGVTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFRyaWFuZ2xlU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5wb2x5Z29uKDAsIDAsIHRoaXMucmFkaXVzLCAzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBzdGF0aWMgcHJvcHNcclxuVHJpYW5nbGVTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ2dyZWVuJyxcclxuICBzdHJva2U6ICcjYWFhJyxcclxuICBzdHJva2VXaWR0aDogNCxcclxuXHJcbiAgcmFkaXVzOiAzMixcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuU3RhclNoYXBlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuU2hhcGVcclxuICovXHJcbmNsYXNzIFN0YXJTaGFwZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy8gb3B0aW9ucyA9ICh7fSkuJHNhZmUob3B0aW9ucyB8fCB7fSwgcGhpbmEuZGlzcGxheS5TdGFyU2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBTdGFyU2hhcGUuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0Qm91bmRpbmdUeXBlKCdjaXJjbGUnKTtcclxuICAgIHRoaXMuc2lkZXMgPSBvcHRpb25zLnNpZGVzO1xyXG4gICAgdGhpcy5zaWRlSW5kZW50ID0gb3B0aW9ucy5zaWRlSW5kZW50O1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgY2FudmFzLnN0YXIoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc2lkZXMsIHRoaXMuc2lkZUluZGVudCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblN0YXJTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ3llbGxvdycsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcblxyXG4gIHJhZGl1czogMzIsXHJcbiAgc2lkZXM6IDUsXHJcbiAgc2lkZUluZGVudDogMC4zOCxcclxufTtcclxuXHJcbi8vIF9kZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChTdGFyU2hhcGUsICdzaWRlcycpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoU3RhclNoYXBlLCAnc2lkZUluZGVudCcpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5Qb2x5Z29uU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgUG9seWdvblNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlBvbHlnb25TaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFBvbHlnb25TaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXRCb3VuZGluZ1R5cGUoJ2NpcmNsZScpO1xyXG4gICAgdGhpcy5zaWRlcyA9IG9wdGlvbnMuc2lkZXM7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucG9seWdvbigwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5zaWRlcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblBvbHlnb25TaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ2N5YW4nLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG5cclxuICByYWRpdXM6IDMyLFxyXG4gIHNpZGVzOiA1LFxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoUG9seWdvblNoYXBlLCAnc2lkZXMnKTtcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuSGVhcnRTaGFwZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBIZWFydFNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LkhlYXJ0U2hhcGUuZGVmYXVsdHMpO1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnN8fHt9LCBIZWFydFNoYXBlLmRlZmF1bHRzKTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcbiAgICB0aGlzLmNvcm5lckFuZ2xlID0gb3B0aW9ucy5jb3JuZXJBbmdsZTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5oZWFydCgwLCAwLCB0aGlzLnJhZGl1cywgdGhpcy5jb3JuZXJBbmdsZSk7XHJcbiAgfVxyXG5cclxufVxyXG4vLyBzdGF0aWMgcHJvcHNcclxuSGVhcnRTaGFwZS5kZWZhdWx0cyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZmlsbDogJ3BpbmsnLFxyXG4gIHN0cm9rZTogJyNhYWEnLFxyXG4gIHN0cm9rZVdpZHRoOiA0LFxyXG5cclxuICByYWRpdXM6IDMyLFxyXG4gIGNvcm5lckFuZ2xlOiA0NSxcclxufTtcclxuXHJcbi8vIGRlZmluZWRcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEhlYXJ0U2hhcGUsICdjb3JuZXJBbmdsZScpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZGlzcGxheS5QYXRoU2hhcGVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgUGF0aFNoYXBlIGV4dGVuZHMgU2hhcGUge1xyXG4gIC8vIHBhdGhzOiBudWxsLFxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zIHx8IHt9LCBwaGluYS5kaXNwbGF5LlBhdGhTaGFwZS5kZWZhdWx0cyk7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIFBhdGhTaGFwZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnBhdGhzID0gb3B0aW9ucy5wYXRocyB8fCBbXTtcclxuICAgIHRoaXMubGluZUpvaW4gPSBvcHRpb25zLmxpbmVKb2luO1xyXG4gICAgdGhpcy5saW5lQ2FwID0gb3B0aW9ucy5saW5lQ2FwO1xyXG4gIH1cclxuXHJcbiAgc2V0UGF0aHMgKHBhdGhzKSB7XHJcbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbGVhciAoKSB7XHJcbiAgICB0aGlzLnBhdGhzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRQYXRocyAocGF0aHMpIHtcclxuICAgIFtdLnB1c2guYXBwbHkodGhpcy5wYXRocywgcGF0aHMpO1xyXG4gICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkUGF0aCAoeCwgeSkge1xyXG4gICAgdGhpcy5wYXRocy5wdXNoKHBoaW5hLmdlb20uVmVjdG9yMih4LCB5KSk7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRQYXRoIChpKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXRoc1tpXTtcclxuICB9XHJcblxyXG4gIGdldFBhdGhzICgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhdGhzO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGF0aCAoaSwgeCwgeSkge1xyXG4gICAgdGhpcy5wYXRoc1tpXS5zZXQoeCwgeSk7XHJcbiAgICB0aGlzLl9kaXJ0eURyYXcgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzU2l6ZSAoKSB7XHJcbiAgICB2YXIgcGF0aHMgPSB0aGlzLnBhdGhzO1xyXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLnBhZGRpbmcgKiAyLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLnBhZGRpbmcgKiAyLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdmFyIG1heFggPSAtSW5maW5pdHk7XHJcbiAgICB2YXIgbWF4WSA9IC1JbmZpbml0eTtcclxuICAgIHZhciBtaW5YID0gSW5maW5pdHk7XHJcbiAgICB2YXIgbWluWSA9IEluZmluaXR5O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICB2YXIgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgICBpZiAobWF4WCA8IHBhdGgueCkgeyBtYXhYID0gcGF0aC54OyB9XHJcbiAgICAgIGlmIChtaW5YID4gcGF0aC54KSB7IG1pblggPSBwYXRoLng7IH1cclxuICAgICAgaWYgKG1heFkgPCBwYXRoLnkpIHsgbWF4WSA9IHBhdGgueTsgfVxyXG4gICAgICBpZiAobWluWSA+IHBhdGgueSkgeyBtaW5ZID0gcGF0aC55OyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogTWF0aC5tYXgoTWF0aC5hYnMobWF4WCksIE1hdGguYWJzKG1pblgpKSAqIDIgKyB0aGlzLnBhZGRpbmcgKiAyLFxyXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KE1hdGguYWJzKG1heFkpLCBNYXRoLmFicyhtaW5ZKSkgKiAyICsgdGhpcy5wYWRkaW5nICogMixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjYWxjQ2FudmFzV2lkdGggKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsY0NhbnZhc1NpemUoKS53aWR0aDtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FsY0NhbnZhc1NpemUoKS5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIgKGNhbnZhcykge1xyXG4gICAgdmFyIHBhdGhzID0gdGhpcy5wYXRocztcclxuICAgIGlmIChwYXRocy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHZhciBjID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICAgIHZhciBwID0gcGF0aHNbMF07XHJcbiAgICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICAgIGMubW92ZVRvKHAueCwgcC55KTtcclxuICAgICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHBhdGhzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgcCA9IHBhdGhzW2ldO1xyXG4gICAgICAgIGMubGluZVRvKHAueCwgcC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5QYXRoU2hhcGUuZGVmYXVsdHMgPSB7XHJcbiAgZmlsbDogZmFsc2UsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmRpc3BsYXkuTGFiZWxcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgTGFiZWwgZXh0ZW5kcyBTaGFwZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICBvcHRpb25zID0geyB0ZXh0OiBhcmd1bWVudHNbMF0sIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbCh7fSwgb3B0aW9uc3x8e30sIExhYmVsLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMsIHBoaW5hLmRpc3BsYXkuTGFiZWwuZGVmYXVsdHMpO1xyXG5cclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgIHRoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xyXG4gICAgdGhpcy5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0O1xyXG4gICAgdGhpcy5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5O1xyXG4gICAgdGhpcy5hbGlnbiA9IG9wdGlvbnMuYWxpZ247XHJcbiAgICB0aGlzLmJhc2VsaW5lID0gb3B0aW9ucy5iYXNlbGluZTtcclxuICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodDtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNXaWR0aCgpIHtcclxuICAgIHZhciB3aWR0aCA9IDA7XHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XHJcbiAgICBjYW52YXMuY29udGV4dC5mb250ID0gdGhpcy5mb250O1xyXG4gICAgdGhpcy5fbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XHJcbiAgICAgIHZhciB3ID0gY2FudmFzLmNvbnRleHQubWVhc3VyZVRleHQobGluZSkud2lkdGg7XHJcbiAgICAgIGlmICh3aWR0aCA8IHcpIHtcclxuICAgICAgICB3aWR0aCA9IHc7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMpO1xyXG4gICAgaWYgKHRoaXMuYWxpZ24gIT09ICdjZW50ZXInKSB3aWR0aCo9MjtcclxuXHJcbiAgICByZXR1cm4gd2lkdGggKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQoKSB7XHJcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5mb250U2l6ZSAqIHRoaXMuX2xpbmVzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmJhc2VsaW5lICE9PSAnbWlkZGxlJykgaGVpZ2h0Kj0yO1xyXG4gICAgcmV0dXJuIGhlaWdodCp0aGlzLmxpbmVIZWlnaHQgKyB0aGlzLnBhZGRpbmcqMjtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9IHRoaXMuYWxpZ247XHJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRoaXMuYmFzZWxpbmU7XHJcblxyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5fbGluZXM7XHJcbiAgICB0aGlzLmxpbmVTaXplID0gdGhpcy5mb250U2l6ZSp0aGlzLmxpbmVIZWlnaHQ7XHJcbiAgICB0aGlzLl9vZmZzZXQgPSAtTWF0aC5mbG9vcihsaW5lcy5sZW5ndGgvMikqdGhpcy5saW5lU2l6ZTtcclxuICAgIHRoaXMuX29mZnNldCArPSAoKGxpbmVzLmxlbmd0aCsxKSUyKSAqICh0aGlzLmxpbmVTaXplLzIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsbChjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICB0aGlzLl9saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUsIGkpIHtcclxuICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCAwLCBpKnRoaXMubGluZVNpemUrdGhpcy5fb2Zmc2V0KTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3Ryb2tlKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHRoaXMuX2xpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSwgaSkge1xyXG4gICAgICBjb250ZXh0LnN0cm9rZVRleHQobGluZSwgMCwgaSp0aGlzLmxpbmVTaXplK3RoaXMuX29mZnNldCk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRleHRcclxuICAgKi9cclxuICBnZXQgdGV4dCgpIHsgcmV0dXJuIHRoaXMuX3RleHQ7IH1cclxuICBzZXQgdGV4dCh2KSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdjtcclxuICAgIHRoaXMuX2xpbmVzID0gKHRoaXMudGV4dCArICcnKS5zcGxpdCgnXFxuJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9udCgpIHtcclxuICAgIHJldHVybiBmb3JtYXQuY2FsbChcIntmb250V2VpZ2h0fSB7Zm9udFNpemV9cHgge2ZvbnRGYW1pbHl9XCIsIHRoaXMpO1xyXG4gICAgLy8gcmV0dXJuIFwie2ZvbnRXZWlnaHR9IHtmb250U2l6ZX1weCB7Zm9udEZhbWlseX1cIi5mb3JtYXQodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkxhYmVsLmRlZmF1bHRzID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuXHJcbiAgZmlsbDogJ2JsYWNrJyxcclxuICBzdHJva2U6IG51bGwsXHJcbiAgc3Ryb2tlV2lkdGg6IDIsXHJcblxyXG4gIC8vIFxyXG4gIHRleHQ6ICdIZWxsbywgd29ybGQhJyxcclxuICAvLyBcclxuICBmb250U2l6ZTogMzIsXHJcbiAgZm9udFdlaWdodDogJycsXHJcbiAgZm9udEZhbWlseTogXCInSGlyYUtha3VQcm9OLVczJ1wiLCAvLyBIaXJhZ2lubyBvciBIZWx2ZXRpY2EsXHJcbiAgLy8gXHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIGJhc2VsaW5lOiAnbWlkZGxlJyxcclxuICBsaW5lSGVpZ2h0OiAxLjIsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ3RleHQnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnZm9udFNpemUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKExhYmVsLCAnZm9udFdlaWdodCcpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoTGFiZWwsICdmb250RmFtaWx5Jyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2FsaWduJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2Jhc2VsaW5lJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChMYWJlbCwgJ2xpbmVIZWlnaHQnKTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuRnJhbWVBbmltYXRpb25cclxuICogRnJhbWVBbmltYXRpb25cclxuICogQGV4dGVuZHMgcGhpbmEuYWNjZXNzb3J5LkFjY2Vzc29yeVxyXG4gKi9cclxuY2xhc3MgRnJhbWVBbmltYXRpb24gZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnNzID0gQXNzZXRNYW5hZ2VyLmdldCgnc3ByaXRlc2hlZXQnLCBzcyk7XHJcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmZpdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybiA7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudEFuaW1hdGlvbikgcmV0dXJuIDtcclxuXHJcbiAgICBpZiAodGhpcy5maW5pc2hlZCkge1xyXG4gICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG5cclxuICAgICsrdGhpcy5mcmFtZTtcclxuICAgIGlmICh0aGlzLmZyYW1lJXRoaXMuY3VycmVudEFuaW1hdGlvbi5mcmVxdWVuY3kgPT09IDApIHtcclxuICAgICAgKyt0aGlzLmN1cnJlbnRGcmFtZUluZGV4O1xyXG4gICAgICB0aGlzLl91cGRhdGVGcmFtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ290b0FuZFBsYXkobmFtZSwga2VlcCkge1xyXG4gICAga2VlcCA9IChrZWVwICE9PSB1bmRlZmluZWQpID8ga2VlcCA6IHRydWU7XHJcbiAgICBpZiAoa2VlcCAmJiBuYW1lID09PSB0aGlzLmN1cnJlbnRBbmltYXRpb25OYW1lXHJcbiAgICAgICAgICAgICAmJiB0aGlzLmN1cnJlbnRGcmFtZUluZGV4IDwgdGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgICYmICF0aGlzLnBhdXNlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZUluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuc3MuZ2V0QW5pbWF0aW9uKG5hbWUpO1xyXG4gICAgdGhpcy5fdXBkYXRlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ290b0FuZFN0b3AobmFtZSkge1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgIHRoaXMuY3VycmVudEZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5zcy5nZXRBbmltYXRpb24obmFtZSk7XHJcbiAgICB0aGlzLl91cGRhdGVGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF91cGRhdGVGcmFtZSgpIHtcclxuICAgIHZhciBhbmltID0gdGhpcy5jdXJyZW50QW5pbWF0aW9uO1xyXG4gICAgaWYgKGFuaW0pIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudEZyYW1lSW5kZXggPj0gYW5pbS5mcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGFuaW0ubmV4dCkge1xyXG4gICAgICAgICAgdGhpcy5nb3RvQW5kUGxheShhbmltLm5leHQpO1xyXG4gICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gYW5pbS5mcmFtZXNbdGhpcy5jdXJyZW50RnJhbWVJbmRleF07XHJcbiAgICB2YXIgZnJhbWUgPSB0aGlzLnNzLmdldEZyYW1lKGluZGV4KTtcclxuICAgIHRoaXMudGFyZ2V0LnNyY1JlY3Quc2V0KGZyYW1lLngsIGZyYW1lLnksIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpO1xyXG5cclxuICAgIGlmICh0aGlzLmZpdCkge1xyXG4gICAgICB0aGlzLnRhcmdldC53aWR0aCA9IGZyYW1lLndpZHRoO1xyXG4gICAgICB0aGlzLnRhcmdldC5oZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFjY2Vzc29yeS5EcmFnZ2FibGVcclxuICogRHJhZ2dhYmxlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFjY2Vzc29yeS5BY2Nlc3NvcnlcclxuICovXHJcbmNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEFjY2Vzc29yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgc3VwZXIodGFyZ2V0KTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMub24oJ2F0dGFjaGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0LnNldEludGVyYWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludHN0YXJ0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChEcmFnZ2FibGUuX2xvY2spIHJldHVybiA7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZWxmLmluaXRpYWxQb3NpdGlvbi54ID0gdGhpcy54O1xyXG4gICAgICAgIHNlbGYuaW5pdGlhbFBvc2l0aW9uLnkgPSB0aGlzLnk7XHJcbiAgICAgICAgc2VsZi5mbGFyZSgnZHJhZ3N0YXJ0Jyk7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZHJhZ3N0YXJ0Jyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZHJhZ2dpbmcpIHJldHVybiA7XHJcblxyXG4gICAgICAgIHRoaXMueCArPSBlLnBvaW50ZXIuZHg7XHJcbiAgICAgICAgdGhpcy55ICs9IGUucG9pbnRlci5keTtcclxuICAgICAgICBzZWxmLmZsYXJlKCdkcmFnJyk7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZHJhZycpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0Lm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSByZXR1cm4gO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHNlbGYuZmxhcmUoJ2RyYWdlbmQnKTtcclxuICAgICAgICB0aGlzLmZsYXJlKCdkcmFnZW5kJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBiYWNrKHRpbWUsIGVhc2luZykge1xyXG4gICAgaWYgKHRpbWUpIHtcclxuICAgICAgdmFyIHQgPSB0aGlzLnRhcmdldDtcclxuICAgICAgdC5zZXRJbnRlcmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgIHZhciB0d2VlbmVyID0gbmV3IFR3ZWVuZXIoKS5hdHRhY2hUbyh0KTtcclxuICAgICAgdHdlZW5lclxyXG4gICAgICAgIC50byh7XHJcbiAgICAgICAgICB4OiB0aGlzLmluaXRpYWxQb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTogdGhpcy5pbml0aWFsUG9zaXRpb24ueSxcclxuICAgICAgICB9LCB0aW1lLCBlYXNpbmcgfHwgJ2Vhc2VPdXRFbGFzdGljJylcclxuICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHR3ZWVuZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgdC5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgIHRoaXMuZmxhcmUoJ2JhY2tlbmQnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnRhcmdldC54ID0gdGhpcy5pbml0aWFsUG9zaXRpb24ueDtcclxuICAgICAgdGhpcy50YXJnZXQueSA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLnk7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2JhY2tlbmQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9jaygpIHtcclxuICAgIHRoaXMuX2xvY2sgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVubG9jaygpIHtcclxuICAgIHRoaXMuX2xvY2sgPSBmYWxzZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5EcmFnZ2FibGUuX2xvY2sgPSBmYWxzZTtcclxuXHJcbi8vIOWRvOOBs+WHuuOBl+OBp+aLoeW8teOBmeOCi++8nyBUd2VlbmVy44GvRWxlbWVudOWBtOOBp+Wumue+qVxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCdkcmFnZ2FibGUnLCBmdW5jdGlvbigpIHtcclxuLy8gICBpZiAoIXRoaXMuX2RyYWdnYWJsZSkge1xyXG4vLyAgICAgdGhpcy5fZHJhZ2dhYmxlID0gcGhpbmEuYWNjZXNzb3J5LkRyYWdnYWJsZSgpLmF0dGFjaFRvKHRoaXMpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdGhpcy5fZHJhZ2dhYmxlO1xyXG4vLyB9KTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hY2Nlc3NvcnkuRmxpY2thYmxlXHJcbiAqIEZsaWNrYWJsZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBGbGlja2FibGUgZXh0ZW5kcyBBY2Nlc3Nvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMC45O1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICB0aGlzLmhvcml6b250YWwgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2FjaGVMaXN0ID0gW107XHJcblxyXG4gICAgdGhpcy5vbignYXR0YWNoZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy50YXJnZXQuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLnRhcmdldC5vbigncG9pbnRzdGFydCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzZWxmLmluaXRpYWxQb3NpdGlvbi5zZXQodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIHNlbGYudmVsb2NpdHkuc2V0KDAsIDApO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50c3RheScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICB0aGlzLnggKz0gZS5wb2ludGVyLmR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgdGhpcy55ICs9IGUucG9pbnRlci5keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLmNhY2hlTGlzdC5sZW5ndGggPiAzKSBzZWxmLmNhY2hlTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIHNlbGYuY2FjaGVMaXN0LnB1c2goZS5wb2ludGVyLmRlbHRhUG9zaXRpb24uY2xvbmUoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vIOWLleOBjeOBruOBguOCiyBkZWx0YSBwb3NpdGlvbiDjgpLlvozjgo3jgYvjgonmpJzntKLjgIBcclxuICAgICAgICB2YXIgZGVsdGEgPSBzZWxmLmNhY2hlTGlzdC5yZXZlcnNlKCkuZmluZChmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICByZXR1cm4gdi5sZW5ndGhTcXVhcmVkKCkgPiAxMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjbGVhci5jYWxsKHNlbGYuY2FjaGVMaXN0KTtcclxuICAgICAgICAvLyBzZWxmLmNhY2hlTGlzdC5jbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgIHNlbGYudmVsb2NpdHkueCA9IGRlbHRhLng7XHJcbiAgICAgICAgICBzZWxmLnZlbG9jaXR5LnkgPSBkZWx0YS55O1xyXG5cclxuICAgICAgICAgIHNlbGYuZmxhcmUoJ2ZsaWNrc3RhcnQnLCB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGVsdGEubm9ybWFsaXplKCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdmbGlja2NhbmNlbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2VsZi5mbGFyZSgnZmxpY2snKTtcclxuICAgICAgICAvLyBzZWxmLmZsYXJlKCdmbGlja2VuZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuIDtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5mcmljdGlvbjtcclxuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmZyaWN0aW9uO1xyXG5cclxuICAgIGlmICh0aGlzLmhvcml6b250YWwpIHtcclxuICAgICAgdGhpcy50YXJnZXQucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMudGFyZ2V0LnggPSB0aGlzLmluaXRpYWxQb3NpdGlvbi54O1xyXG4gICAgdGhpcy50YXJnZXQueSA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uLnk7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldCgwLCAwKTtcclxuXHJcbiAgICAvLyBUT0RPOiBcclxuICAgIC8vIHRoaXMuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG4gICAgLy8gdGhpcy50d2VlbmVyLmNsZWFyKClcclxuICAgIC8vICAgICAubW92ZSh0aGlzLmluaXRpYWxYLCB0aGlzLmluaXRpYWxZLCA1MDAsIFwiZWFzZU91dEVsYXN0aWNcIilcclxuICAgIC8vICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyZSh0bS5ldmVudC5FdmVudChcImJhY2tlbmRcIikpO1xyXG4gICAgLy8gICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIFRPRE86IEVsZW1lbnTlgbTjgaflkbzjgbbvvJ9cclxuLy8gcGhpbmEuYXBwLkVsZW1lbnQucHJvdG90eXBlLmdldHRlcignZmxpY2thYmxlJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgaWYgKCF0aGlzLl9mbGlja2FibGUpIHtcclxuLy8gICAgIHRoaXMuX2ZsaWNrYWJsZSA9IHBoaW5hLmFjY2Vzc29yeS5GbGlja2FibGUoKS5hdHRhY2hUbyh0aGlzKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHRoaXMuX2ZsaWNrYWJsZTtcclxuLy8gfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYWNjZXNzb3J5LlBoeXNpY2FsXHJcbiAqIOacrOeJqeOBp+OBr+OBquOBhOOBruOBp+WQjeWJjeWkieOBiOOCi+OBi+OCglxyXG4gKiBGYWtlUGh5c2ljYWwgb3IgTWFyaW9QaHlzaWNhbCBvciBMaWVQaHlzaWNhbFxyXG4gKiBSZXRyb1B5c2ljYWwgb3IgUHlzaWNhTGlrZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hY2Nlc3NvcnkuQWNjZXNzb3J5XHJcbiAqL1xyXG5jbGFzcyBQaHlzaWNhbCBleHRlbmRzIEFjY2Vzc29yeSAge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHN1cGVyKHRhcmdldCk7XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5ncmF2aXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgdGhpcy5mcmljdGlvbiA9IDEuMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHZhciB0ID0gdGhpcy50YXJnZXQ7XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuZnJpY3Rpb247XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5mcmljdGlvbjtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5ncmF2aXR5Lng7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5Lnk7XHJcblxyXG4gICAgdC5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgIHQucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgfVxyXG5cclxuICBmb3JjZSh4LCB5KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnNldCh4LCB5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkRm9yY2UoeCwgeSkge1xyXG4gICAgdGhpcy52ZWxvY2l0eS54ICs9IHg7XHJcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0R3Jhdml0eSh4LCB5KSB7XHJcbiAgICB0aGlzLmdyYXZpdHkuc2V0KHgsIHkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRGcmljdGlvbihmcikge1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IGZyO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBwaGluYS5hcHAuRWxlbWVudC5wcm90b3R5cGUuZ2V0dGVyKCdwaHlzaWNhbCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGlmICghdGhpcy5fcGh5c2ljYWwpIHtcclxuLy8gICAgIHRoaXMuX3BoeXNpY2FsID0gcGhpbmEuYWNjZXNzb3J5LlBoeXNpY2FsKCkuYXR0YWNoVG8odGhpcyk7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB0aGlzLl9waHlzaWNhbDtcclxuLy8gfSk7XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuQXNzZXRcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEFzc2V0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLy8gc2VydmVyRXJyb3I6IGZhbHNlLFxyXG4gIC8vIG5vdEZvdW5kOiBmYWxzZSxcclxuICAvLyBsb2FkRXJyb3I6IGZhbHNlLFxyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihzcmMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VydmVyRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMubG9hZEVycm9yID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBsb2FkKHNyYykge1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICByZXR1cm4gbmV3IEZsb3codGhpcy5fbG9hZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGlzTG9hZGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2VsZi5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgLy8g44Ot44O844OJ5aSx5pWX5pmC44Gr44OA44Of44O844KS44K744OD44OI44GZ44KLXHJcbiAgbG9hZER1bW15KCkgeyB9XHJcblxyXG59XG5cbnZhciBnZXRGaXJzdCA9IGZ1bmN0aW9uKGFycmF5KSB7IHJldHVybiBmaXJzdC5nZXQuY2FsbChhcnJheSk7IH07XHJcbnZhciBnZXRMYXN0ID0gZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGxhc3QuZ2V0LmNhbGwoYXJyYXkpOyB9O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5UZXh0dXJlXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBUZXh0dXJlIGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICB2YXIgaXNMb2NhbCA9IChsb2NhdGlvbi5wcm90b2NvbCA9PSAnZmlsZTonKTtcclxuICAgIGlmICggIWlzTG9jYWwgJiYgISgvXmRhdGE6Ly50ZXN0KHRoaXMuc3JjKSkgKSA7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5kb21FbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgc2VsZi5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGZvcm1hdC5jYWxsKFwiW3BoaW5hLmpzXSBub3QgZm91bmQgYHswfWAhXCIsIHRoaXMuc3JjKSk7XHJcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJbcGhpbmEuanNdIG5vdCBmb3VuZCBgezB9YCFcIi5mb3JtYXQodGhpcy5zcmMpKTtcclxuXHJcbiAgICAgIC8vIHZhciBrZXkgPSBzZWxmLnNyYy5zcGxpdCgnLycpLmxhc3QucmVwbGFjZSgnLnBuZycsICcnKS5zcGxpdCgnPycpLmZpcnN0LnNwbGl0KCcjJykuZmlyc3Q7XHJcbiAgICAgIHZhciBrZXkgPSBnZXRGaXJzdChcclxuICAgICAgICBnZXRGaXJzdChcclxuICAgICAgICAgIGdldExhc3QoXHJcbiAgICAgICAgICAgIHNlbGYuc3JjLnNwbGl0KCcvJylcclxuICAgICAgICAgICkucmVwbGFjZSgnLnBuZycsICcnKS5zcGxpdCgnPycpXHJcbiAgICAgICAgKS5zcGxpdCgnIycpXHJcbiAgICAgICk7XHJcbiAgICAgIGUudGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICBlLnRhcmdldC5zcmMgPSBcImh0dHA6Ly9kdW1teWltYWdlLmNvbS8xMjh4MTI4LzQ0NDQ0NC9lZWVlZWUmdGV4dD1cIiArIGtleTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRvbUVsZW1lbnQ7XHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpLnNldFNpemUoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgICB2YXIgdCA9IG5ldyBUZXh0dXJlKCk7XHJcbiAgICBjYW52YXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgdC5kb21FbGVtZW50ID0gY2FudmFzLmRvbUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gdDtcclxuICB9XHJcblxyXG4gIHRyYW5zbWl0KGNvbG9yKSB7XHJcbiAgICAvLyBpbWFnYeOCquODluOCuOOCp+OCr+ODiOOCkuOCsuODg+ODiFxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgLy8g5paw6KaPY2FudmFz5L2c5oiQXHJcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcygpLnNldFNpemUoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgICAvLyDmlrDopo9jYW52YXPjgavmj4/nlLtcclxuICAgIGNhbnZhcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICAvLyBjYW52YXPlhajkvZPjga7jgqTjg6Hjg7zjgrjjg4fjg7zjgr/phY3liJfjgpLjgrLjg4Pjg4hcclxuICAgIHZhciBpbWFnZURhdGEgPSBjYW52YXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHZhciBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XHJcbiAgICAvLyDpgI/pgY7oibLjga7mjIflrprjgYzjgarjgZHjgozjgbDlt6bkuIrjga5yZ2LlgKTjgpLmir3lh7pcclxuICAgIHZhciByID0gKGNvbG9yICE9PSB1bmRlZmluZWQpID8gY29sb3IuciA6IGRhdGFbMF07XHJcbiAgICB2YXIgZyA9IChjb2xvciAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yLmcgOiBkYXRhWzFdO1xyXG4gICAgdmFyIGIgPSAoY29sb3IgIT09IHVuZGVmaW5lZCkgPyBjb2xvci5iIDogZGF0YVsyXTtcclxuICAgIC8vIOmFjeWIl+OCkjTopoHntKDnm67jgYvjgok044Gk6aOb44Gz77yI44Ki44Or44OV44Kh5YCk77yJ44Gn44Or44O844OXXHJcbiAgICAvLyAoMykuc3RlcChkYXRhLmxlbmd0aCwgNCwgZnVuY3Rpb24oaSkge1xyXG4gICAgc3RlcC5jYWxsKDMsIGRhdGEubGVuZ3RoLCA0LCBmdW5jdGlvbihpKSB7XHJcbiAgICAgIC8vIHJnYuWApOOCkumAhueul+OBp+OCsuODg+ODiOOBl+OAgeW3puS4iuOBrnJnYuOBqOavlOi8g1xyXG4gICAgICBpZiAoZGF0YVtpIC0gM10gPT09IHIgJiYgZGF0YVtpIC0gMl0gPT09IGcgJiYgZGF0YVtpIC0gMV0gPT09IGIpIHtcclxuICAgICAgICAvLyDkuIDoh7TjgZfjgZ/loLTlkIjjga/jgqLjg6vjg5XjgqHlgKTjgpLmm7jjgY3mj5vjgYjjgotcclxuICAgICAgICBkYXRhW2ldID0gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDmm7jjgY3mj5vjgYjjgZ/jgqTjg6Hjg7zjgrjjg4fjg7zjgr/jgpJjYW52YXPjgavmiLvjgZlcclxuICAgIGNhbnZhcy5jb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGNhbnZhcy5kb21FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyKGZpbHRlcnMpIHtcclxuICAgIGlmICghZmlsdGVycykge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJzKSkge1xyXG4gICAgICBmaWx0ZXJzID0gW2ZpbHRlcnNdO1xyXG4gICAgfVxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kb21FbGVtZW50O1xyXG4gICAgdmFyIHcgPSBpbWFnZS53aWR0aDtcclxuICAgIHZhciBoID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoKS5zZXRTaXplKHcsIGgpO1xyXG4gICAgdmFyIGltYWdlRGF0YSA9IG51bGw7XHJcblxyXG4gICAgY2FudmFzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuICAgIGltYWdlRGF0YSA9IGNhbnZhcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3LCBoKTtcclxuICAgIGZpbHRlcnMuZm9yRWFjaCggZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIGgudGltZXMoIGZ1bmN0aW9uICh5KSB7XHJcbiAgICAgICAgdGltZXMuY2FsbChoLCBmdW5jdGlvbiAoeSkge1xyXG4gICAgICAgICAgLy8gdy50aW1lcyggZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgIHRpbWVzKHcsIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gKHkgKiB3ICsgeCkgKiA0O1xyXG4gICAgICAgICAgICB2YXIgcGl4ZWwgPSBpbWFnZURhdGEuZGF0YS5zbGljZShpLCBpICsgNCk7XHJcbiAgICAgICAgICAgIGZuKHBpeGVsLCBpLCB4LCB5LCBpbWFnZURhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2FudmFzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBjYW52YXMuZG9tRWxlbWVudDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Tb3VuZFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgU291bmQgZXh0ZW5kcyBBc3NldCB7XHJcbiAgXHJcbiAgLy8gX2xvb3A6IGZhbHNlLFxyXG4gIC8vIF9sb29wU3RhcnQ6IDAsXHJcbiAgLy8gX2xvb3BFbmQ6IDAsXHJcbiAgLy8gX3BsYXliYWNrUmF0ZTogMSxcclxuICBcclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9sb29wID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sb29wU3RhcnQgPSAwO1xyXG4gICAgdGhpcy5fbG9vcEVuZCA9IDA7XHJcbiAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSAxO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gU291bmQuZ2V0QXVkaW9Db250ZXh0KCk7XHJcbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICB9XHJcblxyXG4gIHBsYXkod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgd2hlbiA9IHdoZW4gPyB3aGVuICsgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lIDogMDtcclxuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSkgO1xyXG5cclxuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZSA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgIHZhciBidWZmZXIgPSBzb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XHJcbiAgICBzb3VyY2UubG9vcCA9IHRoaXMuX2xvb3A7XHJcbiAgICBzb3VyY2UubG9vcFN0YXJ0ID0gdGhpcy5fbG9vcFN0YXJ0O1xyXG4gICAgc291cmNlLmxvb3BFbmQgPSB0aGlzLl9sb29wRW5kO1xyXG4gICAgc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHRoaXMuX3BsYXliYWNrUmF0ZTtcclxuXHJcbiAgICAvLyBjb25uZWN0XHJcbiAgICBzb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcclxuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdChTb3VuZC5nZXRNYXN0ZXJHYWluKCkpO1xyXG4gICAgLy8gcGxheVxyXG4gICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc291cmNlLnN0YXJ0KHdoZW4sIG9mZnNldCwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNvdXJjZS5zdGFydCh3aGVuLCBvZmZzZXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBjaGVjayBwbGF5IGVuZFxyXG4gICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5mbGFyZSgnZW5kZWQnKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgLy8gc3RvcFxyXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgIC8vIHN0b3Ag44GZ44KL44GoIHNvdXJjZS5lbmRlZOOCgueZuueBq+OBmeOCi1xyXG4gICAgICB0aGlzLnNvdXJjZS5zdG9wICYmIHRoaXMuc291cmNlLnN0b3AoMCk7XHJcbiAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcclxuICAgICAgdGhpcy5mbGFyZSgnc3RvcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLnNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSAwO1xyXG4gICAgdGhpcy5mbGFyZSgncGF1c2UnKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgdGhpcy5mbGFyZSgncmVzdW1lJyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIOippuOBl+OBpuOBv+OCi+OBquOBhlxyXG4gIF9vc2NpbGxhdG9yKHR5cGUpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgIHZhciBvc2NpbGxhdG9yID0gY29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XHJcblxyXG4gICAgLy8gU2luZSB3YXZlIGlzIHR5cGUgPSDigJxzaW5l4oCdXHJcbiAgICAvLyBTcXVhcmUgd2F2ZSBpcyB0eXBlID0g4oCcc3F1YXJl4oCdXHJcbiAgICAvLyBTYXd0b290aCB3YXZlIGlzIHR5cGUgPSDigJxzYXfigJ1cclxuICAgIC8vIFRyaWFuZ2xlIHdhdmUgaXMgdHlwZSA9IOKAnHRyaWFuZ2xl4oCdXHJcbiAgICAvLyBDdXN0b20gd2F2ZSBpcyB0eXBlID0g4oCcY3VzdG9t4oCdIFxyXG4gICAgb3NjaWxsYXRvci50eXBlID0gdHlwZSB8fCAnc2luZSc7XHJcblxyXG4gICAgdGhpcy5zb3VyY2UgPSBvc2NpbGxhdG9yO1xyXG4gICAgLy8gY29ubmVjdFxyXG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGxvYWRGcm9tQnVmZmVyKGJ1ZmZlcikge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgLy8gc2V0IGRlZmF1bHQgYnVmZmVyXHJcbiAgICBpZiAoIWJ1ZmZlcikge1xyXG4gICAgICBidWZmZXIgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlciggMSwgNDQxMDAsIDQ0MTAwICk7XHJcbiAgICAgIHZhciBjaGFubmVsID0gYnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgY2hhbm5lbC5sZW5ndGg7IGkrKyApXHJcbiAgICAgIHtcclxuICAgICAgICBjaGFubmVsW2ldID0gTWF0aC5zaW4oIGkgLyAxMDAgKiBNYXRoLlBJKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvdXJjZVxyXG4gICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XHJcbiAgfVxyXG5cclxuICBzZXRMb29wKGxvb3ApIHtcclxuICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldExvb3BTdGFydChsb29wU3RhcnQpIHtcclxuICAgIHRoaXMubG9vcFN0YXJ0ID0gbG9vcFN0YXJ0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRMb29wRW5kKGxvb3BFbmQpIHtcclxuICAgIHRoaXMubG9vcEVuZCA9IGxvb3BFbmQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgXHJcbiAgc2V0UGxheWJhY2tSYXRlKHBsYXliYWNrUmF0ZSkge1xyXG4gICAgdGhpcy5wbGF5YmFja1JhdGUgPSBwbGF5YmFja1JhdGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIF9sb2FkKHIpIHtcclxuICAgIGlmICgvXmRhdGE6Ly50ZXN0KHRoaXMuc3JjKSkge1xyXG4gICAgICB0aGlzLl9sb2FkRnJvbVVSSVNjaGVtZShyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2FkRnJvbUZpbGUocik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9hZEZyb21GaWxlKHIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4bWwub3BlbignR0VUJywgdGhpcy5zcmMpO1xyXG4gICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICBpZiAoWzIwMCwgMjAxLCAwXS5pbmRleE9mKHhtbC5zdGF0dXMpICE9PSAtMSkge1xyXG5cclxuICAgICAgICAgIC8vIOmfs+alveODkOOCpOODiuODquODvOODh+ODvOOCv1xyXG4gICAgICAgICAgdmFyIGRhdGEgPSB4bWwucmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgLy8gd2ViYXVkaW8g55So44Gr5aSJ5o+bXHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGRhdGEsIGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICBzZWxmLmxvYWRGcm9tQnVmZmVyKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHIoc2VsZik7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi6Z+z5aOw44OV44Kh44Kk44Or44Gu44OH44Kz44O844OJ44Gr5aSx5pWX44GX44G+44GX44Gf44CCKFwiICsgc2VsZi5zcmMgKyBcIilcIik7XHJcbiAgICAgICAgICAgIHIoc2VsZik7XHJcbiAgICAgICAgICAgIHNlbGYuZmxhcmUoJ2RlY29kZWVycm9yJyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh4bWwuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIC8vIG5vdCBmb3VuZFxyXG5cclxuICAgICAgICAgIHNlbGYubG9hZEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgIHNlbGYubm90Rm91bmQ9IHRydWU7XHJcbiAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnbG9hZGVycm9yJyk7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdub3Rmb3VuZCcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g44K144O844OQ44O844Ko44Op44O8XHJcblxyXG4gICAgICAgICAgc2VsZi5sb2FkRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgc2VsZi5zZXJ2ZXJFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICByKHNlbGYpO1xyXG4gICAgICAgICAgc2VsZi5mbGFyZSgnbG9hZGVycm9yJyk7XHJcbiAgICAgICAgICBzZWxmLmZsYXJlKCdzZXJ2ZXJlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB4bWwucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuXHJcbiAgICB4bWwuc2VuZChudWxsKTtcclxuICB9XHJcblxyXG4gIF9sb2FkRnJvbVVSSVNjaGVtZShyKSB7XHJcbiAgICB2YXIgYnl0ZVN0cmluZyA9ICcnO1xyXG4gICAgaWYgKHRoaXMuc3JjLnNwbGl0KCcsJylbMF0uaW5kZXhPZignYmFzZTY0JykgPj0gMCkge1xyXG4gICAgICBieXRlU3RyaW5nID0gYXRvYih0aGlzLnNyYy5zcGxpdCgnLCcpWzFdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBieXRlU3RyaW5nID0gdW5lc2NhcGUodGhpcy5zcmMuc3BsaXQoJywnKVsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGxlbiA9IGJ5dGVTdHJpbmcubGVuZ3RoO1xyXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcblxyXG4gICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgKytpKSB7XHJcbiAgICAgIGJ1ZmZlcltpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZWJhdWRpbyDnlKjjgavlpInmj5tcclxuICAgIHRoaXMuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyLmJ1ZmZlciwgZnVuY3Rpb24oYnVmZmVyKSB7XHJcbiAgICAgIHNlbGYubG9hZEZyb21CdWZmZXIoYnVmZmVyKTtcclxuICAgICAgcihzZWxmKTtcclxuICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCLpn7Plo7Djg5XjgqHjgqTjg6vjga7jg4fjgrPjg7zjg4njgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIIoXCIgKyBzZWxmLnNyYyArIFwiKVwiKTtcclxuICAgICAgc2VsZi5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICByKHNlbGYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRHVtbXkoKSB7XHJcbiAgICB0aGlzLmxvYWRGcm9tQnVmZmVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdm9sdW1lKCkgIHsgcmV0dXJuIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZTsgfVxyXG4gIHNldCB2b2x1bWUodikgeyB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB2OyB9XHJcblxyXG4gIGdldCBsb29wKCkgIHsgcmV0dXJuIHRoaXMuX2xvb3A7IH1cclxuICBzZXQgbG9vcCh2KSB7XHJcbiAgICB0aGlzLl9sb29wID0gdjtcclxuICAgIGlmICh0aGlzLnNvdXJjZSkgdGhpcy5zb3VyY2UuX2xvb3AgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvb3BTdGFydCgpICB7IHJldHVybiB0aGlzLl9sb29wU3RhcnQ7IH1cclxuICBzZXQgbG9vcFN0YXJ0KHYpIHtcclxuICAgIHRoaXMuX2xvb3BTdGFydCA9IHY7XHJcbiAgICBpZiAodGhpcy5zb3VyY2UpIHRoaXMuc291cmNlLl9sb29wU3RhcnQgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvb3BFbmQoKSAgeyByZXR1cm4gdGhpcy5fbG9vcEVuZDsgfVxyXG4gIHNldCBsb29wRW5kKHYpIHtcclxuICAgIHRoaXMuX2xvb3BFbmQgPSB2O1xyXG4gICAgaWYgKHRoaXMuc291cmNlKSB0aGlzLnNvdXJjZS5fbG9vcEVuZCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWJhY2tSYXRlKCkgeyByZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlOyB9XHJcbiAgc2V0IHBsYXliYWNrUmF0ZSh2KSB7XHJcbiAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSB2O1xyXG4gICAgaWYodGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlICE9PSAwKXtcclxuICAgICAgdGhpcy5zb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gdjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRNYXN0ZXJHYWluKCkge1xyXG4gICAgaWYoIXRoaXMuX21hc3RlckdhaW4pIHtcclxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmdldEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICB0aGlzLl9tYXN0ZXJHYWluID0gY29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgICAgIHRoaXMuX21hc3RlckdhaW4uY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJHYWluO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEF1ZGlvQ29udGV4dCgpIHtcclxuICAgIGlmICghU3VwcG9ydC53ZWJBdWRpbykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dCkgcmV0dXJuIHRoaXMuY29udGV4dDtcclxuXHJcbiAgICB2YXIgZyA9IHBoaW5hJDEuZ2xvYmFsO1xyXG4gICAgdmFyIGNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgIGlmIChnLkF1ZGlvQ29udGV4dCkge1xyXG4gICAgICBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZy53ZWJraXRBdWRpb0NvbnRleHQpIHtcclxuICAgICAgY29udGV4dCA9IG5ldyB3ZWJraXRBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGcubW96QXVkaW9Db250ZXh0KSB7XHJcbiAgICAgIGNvbnRleHQgPSBuZXcgbW96QXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHJcbiAgICByZXR1cm4gY29udGV4dDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBkZWZpbmVkXHJcbmFjY2Vzc29yLmNhbGwoU291bmQsICd2b2x1bWUnLCB7XHJcbi8vIHRoaXMuYWNjZXNzb3IoJ3ZvbHVtZScsIHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWFzdGVyR2FpbigpLmdhaW4udmFsdWU7XHJcbiAgfSxcclxuICBzZXQ6IGZ1bmN0aW9uKHYpIHtcclxuICAgIHRoaXMuZ2V0TWFzdGVyR2FpbigpLmdhaW4udmFsdWUgPSB2O1xyXG4gIH0sXHJcbn0pO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlNjcmlwdFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgU2NyaXB0IGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBfbG9hZChyZXNvbHZlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5zcmMgPSB0aGlzLnNyYztcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5TcHJpdGVTaGVldFxyXG4gKiBAZXh0ZW5kcyBwaGluYS5hc3NldC5Bc3NldFxyXG4gKi9cclxuY2xhc3MgU3ByaXRlU2hlZXQgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHNldHVwKHBhcmFtcykge1xyXG4gICAgdGhpcy5fc2V0dXBGcmFtZShwYXJhbXMuZnJhbWUpO1xyXG4gICAgdGhpcy5fc2V0dXBBbmltKHBhcmFtcy5hbmltYXRpb25zKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICB2YXIgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhtbC5vcGVuKCdHRVQnLCB0aGlzLnNyYyk7XHJcbiAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgIGlmIChbMjAwLCAyMDEsIDBdLmluZGV4T2YoeG1sLnN0YXR1cykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0geG1sLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zZXR1cChqc29uKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXR1cCh0aGlzLnNyYyk7XHJcbiAgICAgIHJlc29sdmUoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgX3NldHVwRnJhbWUoZnJhbWUpIHtcclxuICAgIHZhciBmcmFtZXMgPSB0aGlzLmZyYW1lcyA9IFtdO1xyXG4gICAgdmFyIHVuaXRXaWR0aCA9IGZyYW1lLndpZHRoO1xyXG4gICAgdmFyIHVuaXRIZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIGNvdW50ID0gZnJhbWUucm93cyAqIGZyYW1lLmNvbHM7XHJcbiAgICB0aGlzLmZyYW1lID0gY291bnQ7XHJcblxyXG4gICAgdGltZXMuY2FsbChjb3VudCwgZnVuY3Rpb24oaSkge1xyXG4gICAgLy8gKGNvdW50KS50aW1lcyhmdW5jdGlvbihpKSB7XHJcbiAgICAgIHZhciB4SW5kZXggPSBpJWZyYW1lLmNvbHM7XHJcbiAgICAgIHZhciB5SW5kZXggPSAoaS9mcmFtZS5jb2xzKXwwO1xyXG5cclxuICAgICAgZnJhbWVzLnB1c2goe1xyXG4gICAgICAgIHg6IHhJbmRleCp1bml0V2lkdGgsXHJcbiAgICAgICAgeTogeUluZGV4KnVuaXRIZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6IHVuaXRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHVuaXRIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0dXBBbmltKGFuaW1hdGlvbnMpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xyXG5cclxuICAgIC8vIOODh+ODleOCqeODq+ODiOOCouODi+ODoeODvOOCt+ODp+ODs1xyXG4gICAgdGhpcy5hbmltYXRpb25zW1wiZGVmYXVsdFwiXSA9IHtcclxuICAgICAgICBmcmFtZXM6IHJhbmdlLmNhbGwoW10sIDAsIHRoaXMuZnJhbWUpLFxyXG4gICAgICAgIC8vIGZyYW1lczogW10ucmFuZ2UoMCwgdGhpcy5mcmFtZSksXHJcbiAgICAgICAgbmV4dDogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZnJlcXVlbmN5OiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICBmb3JJbi5jYWxsKGFuaW1hdGlvbnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vIGFuaW1hdGlvbnMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgYW5pbSA9IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKGFuaW0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1trZXldID0ge1xyXG4gICAgICAgICAgZnJhbWVzOiByYW5nZS5jYWxsKFtdLCBhbmltWzBdLCBhbmltWzFdKSxcclxuICAgICAgICAgIC8vIGZyYW1lczogW10ucmFuZ2UoYW5pbVswXSwgYW5pbVsxXSksXHJcbiAgICAgICAgICBuZXh0OiBhbmltWzJdLFxyXG4gICAgICAgICAgZnJlcXVlbmN5OiBhbmltWzNdIHx8IDEsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnNba2V5XSA9IHtcclxuICAgICAgICAgIGZyYW1lczogYW5pbS5mcmFtZXMsXHJcbiAgICAgICAgICBuZXh0OiBhbmltLm5leHQsXHJcbiAgICAgICAgICBmcmVxdWVuY3k6IGFuaW0uZnJlcXVlbmN5IHx8IDFcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjg5Xjg6zjg7zjg6DjgpLlj5blvpdcclxuICAgKi9cclxuICBnZXRGcmFtZShpbmRleCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGdldEFuaW1hdGlvbihuYW1lKSB7XHJcbiAgICBuYW1lID0gKG5hbWUgIT09IHVuZGVmaW5lZCkgPyBuYW1lIDogXCJkZWZhdWx0XCI7XHJcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW25hbWVdO1xyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5hc3NldC5Gb250XHJcbiAqIEBleHRlbmRzIHBoaW5hLmFzc2V0LkFzc2V0XHJcbiAqL1xyXG5jbGFzcyBGb250IGV4dGVuZHMgQXNzZXQge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmZvbnROYW1lID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGxvYWQocGF0aCkge1xyXG4gICAgdGhpcy5zcmMgPSBwYXRoO1xyXG5cclxuICAgIHZhciByZWcgPSAvKC4qKSg/OlxcLihbXi5dKyQpKS87XHJcbiAgICB2YXIga2V5ID0gdGhpcy5mb250TmFtZSB8fCBsYXN0LmNhbGwocGF0aC5tYXRjaChyZWcpWzFdLnNwbGl0KCcvJykpOyAgICAvL+ODleOCqeODs+ODiOWQjeaMh+WumuOBjOeEoeOBhOWgtOWQiOOBr3BhdGjjga7mi6HlvLXlrZDliY3jgpLkvb/nlKhcclxuICAgIC8vIHZhciBrZXkgPSB0aGlzLmZvbnROYW1lIHx8IHBhdGgubWF0Y2gocmVnKVsxXS5zcGxpdCgnLycpLmxhc3Q7ICAgIC8v44OV44Kp44Oz44OI5ZCN5oyH5a6a44GM54Sh44GE5aC05ZCI44GvcGF0aOOBruaLoeW8teWtkOWJjeOCkuS9v+eUqFxyXG4gICAgdmFyIHR5cGUgPSBwYXRoLm1hdGNoKHJlZylbMl07XHJcbiAgICB2YXIgZm9ybWF0JDEgPSBcInVua25vd25cIjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwidHRmXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcInRydWV0eXBlXCI7IGJyZWFrO1xyXG4gICAgICBjYXNlIFwib3RmXCI6XHJcbiAgICAgICAgZm9ybWF0JDEgPSBcIm9wZW50eXBlXCI7IGJyZWFrO1xyXG4gICAgICBjYXNlIFwid29mZlwiOlxyXG4gICAgICAgIGZvcm1hdCQxID0gXCJ3b2ZmXCI7IGJyZWFrO1xyXG4gICAgICBjYXNlIFwid29mZjJcIjpcclxuICAgICAgICBmb3JtYXQkMSA9IFwid29mZjJcIjsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwi44K144Od44O844OI44GX44Gm44GE44Gq44GE44OV44Kp44Oz44OI5b2i5byP44Gn44GZ44CCKFwiICsgcGF0aCArIFwiKVwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0JDE7XHJcbiAgICB0aGlzLmZvbnROYW1lID0ga2V5O1xyXG5cclxuICAgIGlmIChmb3JtYXQkMSAhPT0gXCJ1bmtub3duXCIpIHtcclxuICAgICAgdmFyIHRleHQgPSBmb3JtYXQuY2FsbChcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ3swfSc7IHNyYzogdXJsKHsxfSkgZm9ybWF0KCd7Mn0nKTsgfVwiLCBrZXksIHBhdGgsIGZvcm1hdCQxKTtcclxuICAgICAgLy8gdmFyIHRleHQgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ3swfSc7IHNyYzogdXJsKHsxfSkgZm9ybWF0KCd7Mn0nKTsgfVwiLmZvcm1hdChrZXksIHBhdGgsIGZvcm1hdCk7XHJcbiAgICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XHJcbiAgICAgIHZhciBmb250RmFjZVN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgaWYgKGZvbnRGYWNlU3R5bGVFbGVtZW50LmlubmVyVGV4dCkge1xyXG4gICAgICAgIGZvbnRGYWNlU3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9udEZhY2VTdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIGUuYXBwZW5kQ2hpbGQoZm9udEZhY2VTdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRmxvdyh0aGlzLl9sb2FkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgX2xvYWQocmVzb2x2ZSkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0ICE9PSBcInVua25vd25cIikge1xyXG4gICAgICB0aGlzLl9jaGVja0xvYWRlZCh0aGlzLmZvbnROYW1lLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja0xvYWRlZCAoZm9udCwgY2FsbGJhY2spIHtcclxuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICB2YXIgREVGQVVMVF9GT05UID0gY2FudmFzLmNvbnRleHQuZm9udC5zcGxpdCgnICcpWzFdO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZm9udCA9ICc0MHB4ICcgKyBERUZBVUxUX0ZPTlQ7XHJcblxyXG4gICAgdmFyIGNoZWNrVGV4dCA9IFwiMTIzNDU2Nzg5MC1eXFxcXHF3ZXJ0eXVpb3BAW2FzZGZnaGprbDs6XXp4Y3Zibm0sLi9cXCFcXFwiIyQlJicoKT1+fFFXRVJUWVVJT1Bge0FTREZHSEpLTCsqfVpYQ1ZCTk08Pj9f77yR77yS77yT77yU77yV77yW77yX77yY77yZ77yQ77yN77y+77+l772R772X772F772S772U772Z772V772J772P772Q772B772T772E772G772H772I772K772L772M772a772Y772D772W772C772O772N77yM77yO44GC44GE44GG44GL44GV44Gf44Gq44KS44KT5pmC44Gv6YeR44Gq44KKXCI7XHJcbiAgICAvLyDnibnmrormloflrZflr77lv5xcclxuICAgIGNoZWNrVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFwiMHhmMDRiXCIpO1xyXG5cclxuICAgIHZhciBiZWZvcmUgPSBjYW52YXMuY29udGV4dC5tZWFzdXJlVGV4dChjaGVja1RleHQpLndpZHRoO1xyXG4gICAgY2FudmFzLmNvbnRleHQuZm9udCA9ICc0MHB4ICcgKyBmb250ICsgJywgJyArIERFRkFVTFRfRk9OVDtcclxuXHJcbiAgICB2YXIgdGltZW91dENvdW50ID0gMzA7XHJcbiAgICB2YXIgY2hlY2tMb2FkRm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGFmdGVyID0gY2FudmFzLmNvbnRleHQubWVhc3VyZVRleHQoY2hlY2tUZXh0KS53aWR0aDtcclxuICAgICAgaWYgKGFmdGVyICE9PSBiZWZvcmUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgtLXRpbWVvdXRDb3VudCA+IDApIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tMb2FkRm9udCwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwidGltZW91dCBmb250IGxvYWRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2hlY2tMb2FkRm9udCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9udE5hbWUobmFtZSkge1xyXG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIuODleOCqeODs+ODiOWQjeOBr0xvYWTliY3jgavjga7jgb/oqK3lrprjgYzlh7rmnaXjgb7jgZkoXCIgKyBuYW1lICsgXCIpXCIpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuZm9udE5hbWUgPSBuYW1lO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldEZvbnROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9udE5hbWU7XHJcbiAgfVxyXG5cclxufVxuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LkZpbGVcclxuICogQGV4dGVuZHMgcGhpbmEuYXNzZXQuQXNzZXRcclxuICovXHJcbmNsYXNzIEZpbGUgZXh0ZW5kcyBBc3NldCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIF9sb2FkKHJlc29sdmUpIHtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNyYyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgJGV4dGVuZC5jYWxsKHBhcmFtcywge1xyXG4gICAgICAvLyBwYXJhbXMuJGV4dGVuZCh7XHJcbiAgICAgICAgcGF0aDogdGhpcy5zcmMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaXMuc3JjID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAkZXh0ZW5kLmNhbGwocGFyYW1zLCB0aGlzLnNyYyk7XHJcbiAgICAgIC8vIHBhcmFtcy4kZXh0ZW5kKHRoaXMuc3JjKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2FmZS5jYWxsKHBhcmFtcywge1xyXG4gICAgLy8gcGFyYW1zLiRzYWZlKHtcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIGRhdGFUeXBlOiAndGV4dCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsb2FkXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4bWwub3BlbignR0VUJywgcGFyYW1zLnBhdGgpO1xyXG4gICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICBpZiAoWzIwMCwgMjAxLCAwXS5pbmRleE9mKHhtbC5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgICAgdmFyIGRhdGEgPSB4bWwucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICAgIGlmIChwYXJhbXMuZGF0YVR5cGUgPT09ICdqc29uJykge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmRhdGFUeXBlID09PSAneG1sJykge1xyXG4gICAgICAgICAgICBkYXRhID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWxmLmRhdGFUeXBlID0gcGFyYW1zLmRhdGFUeXBlO1xyXG5cclxuICAgICAgICAgIHNlbGYuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICByZXNvbHZlKHNlbGYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB4bWwuc2VuZChudWxsKTtcclxuICAgIC8vIHRoaXMuZG9tRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgLy8gdGhpcy5kb21FbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG5cclxuICAgIC8vIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vIHRoaXMuZG9tRWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgc2VsZi5sb2FkZWQgPSB0cnVlO1xyXG4gICAgLy8gICByZXNvbHZlKHNlbGYpO1xyXG4gICAgLy8gfTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuYXNzZXQuQXNzZXRMb2FkZXJcclxuICogQGV4dGVuZHMgcGhpbmEudXRpbC5FdmVudERpc3BhdGNoZXJcclxuICovXHJcbmNsYXNzIEFzc2V0TG9hZGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIC8vIHBhcmFtcyA9IChwYXJhbXMgfHwge30pLiRzYWZlKHtcclxuICAgIC8vICAgY2FjaGU6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICAgIHBhcmFtcyA9ICRzYWZlLmNhbGwocGFyYW1zfHx7fSwgeyBjYWNoZTogdHJ1ZSB9KTtcclxuXHJcbiAgICB0aGlzLmFzc2V0cyA9IHt9O1xyXG4gICAgdGhpcy5jYWNoZSA9IHBhcmFtcy5jYWNoZTtcclxuICB9XHJcblxyXG4gIGxvYWQocGFyYW1zKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZmxvd3MgPSBbXTtcclxuXHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICB2YXIgbGVuZ3RoID0gMDtcclxuICAgIGZvckluLmNhbGwocGFyYW1zLCBmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgIC8vIHBhcmFtcy5mb3JJbihmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgICAgbGVuZ3RoICs9IE9iamVjdC5rZXlzKGFzc2V0cykubGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvckluLmNhbGwocGFyYW1zLCBmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgIC8vIHBhcmFtcy5mb3JJbihmdW5jdGlvbih0eXBlLCBhc3NldHMpIHtcclxuICAgICAgZm9ySW4uY2FsbChhc3NldHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgLy8gYXNzZXRzLmZvckluKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgZnVuYyA9IEFzc2V0TG9hZGVyLmFzc2V0TG9hZEZ1bmN0aW9uc1t0eXBlXTtcclxuICAgICAgICB2YXIgZmxvdyA9IGZ1bmMoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgZmxvdy50aGVuKGZ1bmN0aW9uKGFzc2V0KSB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5jYWNoZSkge1xyXG4gICAgICAgICAgICBBc3NldE1hbmFnZXIuc2V0KHR5cGUsIGtleSwgYXNzZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5mbGFyZSgncHJvZ3Jlc3MnLCB7XHJcbiAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICBhc3NldDogYXNzZXQsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAoKytjb3VudGVyL2xlbmd0aCksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmbG93cy5wdXNoKGZsb3cpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoc2VsZi5jYWNoZSkge1xyXG5cclxuICAgICAgc2VsZi5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUucHJvZ3Jlc3MgPj0gMS4wKSB7XHJcbiAgICAgICAgICAvLyBsb2Fk5aSx5pWX5pmC44CB5a++562WXHJcblxyXG4gICAgICAgICAgZm9ySW4uY2FsbChwYXJhbXMsIGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICAgICAgLy8gcGFyYW1zLmZvckluKGZ1bmN0aW9uKHR5cGUsIGFzc2V0cykge1xyXG4gICAgICAgICAgICBmb3JJbi5jYWxsKGFzc2V0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBhc3NldHMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHZhciBhc3NldCA9IEFzc2V0TWFuYWdlci5nZXQodHlwZSwga2V5KTtcclxuICAgICAgICAgICAgICBpZiAoYXNzZXQubG9hZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVtbXkgPSBBc3NldE1hbmFnZXIuZ2V0KHR5cGUsICdkdW1teScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGR1bW15KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkdW1teS5sb2FkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkdW1teS5sb2FkRHVtbXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkdW1teS5sb2FkRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBBc3NldE1hbmFnZXIuc2V0KHR5cGUsIGtleSwgZHVtbXkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgYXNzZXQubG9hZER1bW15KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmxvdy5hbGwoZmxvd3MpLnRoZW4oZnVuY3Rpb24oYXJncykge1xyXG4gICAgICBzZWxmLmZsYXJlKCdsb2FkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZWdpc3RlcihrZXksIGZ1bmMpIHtcclxuICAgIHRoaXMuYXNzZXRMb2FkRnVuY3Rpb25zW2tleV0gPSBmdW5jO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQXNzZXRMb2FkZXIuYXNzZXRMb2FkRnVuY3Rpb25zID0ge1xyXG4gIGltYWdlOiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRleHR1cmUoKTtcclxuICAgIHZhciBmbG93ID0gdGV4dHVyZS5sb2FkKHBhdGgpO1xyXG4gICAgcmV0dXJuIGZsb3c7XHJcbiAgfSxcclxuICBzb3VuZDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgc291bmQgPSBuZXcgU291bmQoKTtcclxuICAgIHZhciBmbG93ID0gc291bmQubG9hZChwYXRoKTtcclxuICAgIHJldHVybiBmbG93O1xyXG4gIH0sXHJcbiAgc3ByaXRlc2hlZXQ6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHNzID0gbmV3IFNwcml0ZVNoZWV0KCk7XHJcbiAgICB2YXIgZmxvdyA9IHNzLmxvYWQocGF0aCk7XHJcbiAgICByZXR1cm4gZmxvdztcclxuICB9LFxyXG4gIHNjcmlwdDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgc2NyaXB0ID0gbmV3IFNjcmlwdCgpO1xyXG4gICAgcmV0dXJuIHNjcmlwdC5sb2FkKHBhdGgpO1xyXG4gIH0sXHJcbiAgZm9udDogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgZm9udCA9IG5ldyBGb250KCk7XHJcbiAgICBmb250LnNldEZvbnROYW1lKGtleSk7XHJcbiAgICByZXR1cm4gZm9udC5sb2FkKHBhdGgpO1xyXG4gIH0sXHJcbiAganNvbjogZnVuY3Rpb24oa2V5LCBwYXRoKSB7XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBGaWxlKCk7XHJcbiAgICByZXR1cm4gdGV4dC5sb2FkKHtcclxuICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB4bWw6IGZ1bmN0aW9uKGtleSwgcGF0aCkge1xyXG4gICAgdmFyIHRleHQgPSBuZXcgRmlsZSgpO1xyXG4gICAgcmV0dXJuIHRleHQubG9hZCh7XHJcbiAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgIGRhdGFUeXBlOiBcInhtbFwiLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICB0ZXh0OiBmdW5jdGlvbihrZXksIHBhdGgpIHtcclxuICAgIHZhciB0ZXh0ID0gbmV3IEZpbGUoKTtcclxuICAgIHJldHVybiB0ZXh0LmxvYWQocGF0aCk7XHJcbiAgfVxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmFzc2V0LlNvdW5kTWFuYWdlclxyXG4gKiAjIyMgUmVmXHJcbiAqIC0gaHR0cDovL2V2b2x2ZS5yZWludHJvZHVjaW5nLmNvbS9fc291cmNlL2NsYXNzZXMvYXMzL1NvdW5kTWFuYWdlci9Tb3VuZE1hbmFnZXIuaHRtbFxyXG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrbG9ja3dvb2QvU291bmRNYW5hZ2VyXHJcbiAqL1xyXG5jbGFzcyBTb3VuZE1hbmFnZXIge1xyXG4gIC8vIHZvbHVtZTogMC44LFxyXG4gIC8vIG11c2ljVm9sdW1lOiAwLjgsXHJcbiAgLy8gbXV0ZUZsYWc6IGZhbHNlLFxyXG4gIC8vIGN1cnJlbnRNdXNpYzogbnVsbCxcclxuXHJcbiAgc3RhdGljIHBsYXkobmFtZSwgd2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgdmFyIHNvdW5kID0gQXNzZXRNYW5hZ2VyLmdldCgnc291bmQnLCBuYW1lKTtcclxuXHJcbiAgICBzb3VuZC52b2x1bWUgPSB0aGlzLmdldFZvbHVtZSgpO1xyXG4gICAgc291bmQucGxheSh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gc291bmQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RvcCgpIHtcclxuICAgIC8vIFRPRE86IFxyXG4gIH1cclxuICBzdGF0aWMgcGF1c2UoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgc3RhdGljIGZhZGUoKSB7XHJcbiAgICAvLyBUT0RPOiBcclxuICB9XHJcbiAgc3RhdGljIHNldFZvbHVtZSh2b2x1bWUpIHtcclxuICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0Vm9sdW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudm9sdW1lO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiDjg5/jg6Xjg7zjg4hcclxuICAgKi9cclxuICBzdGF0aWMgbXV0ZSgpIHtcclxuICAgIHRoaXMubXV0ZUZsYWcgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE11c2ljLnZvbHVtZSA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgLypcclxuICAgKiDjg5/jg6Xjg7zjg4jop6PpmaRcclxuICAgKi9cclxuICBzdGF0aWMgdW5tdXRlKCkge1xyXG4gICAgdGhpcy5tdXRlRmxhZyA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudE11c2ljKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE11c2ljLnZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzdGF0aWMgaXNNdXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubXV0ZUZsYWc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGxheU11c2ljKG5hbWUsIGZhZGVUaW1lLCBsb29wLCB3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICBsb29wID0gKGxvb3AgIT09IHVuZGVmaW5lZCkgPyBsb29wIDogdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50TXVzaWMpIHtcclxuICAgICAgdGhpcy5zdG9wTXVzaWMoZmFkZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtdXNpYyA9IEFzc2V0TWFuYWdlci5nZXQoJ3NvdW5kJywgbmFtZSk7XHJcblxyXG4gICAgbXVzaWMuc2V0TG9vcChsb29wKTtcclxuICAgIG11c2ljLnBsYXkod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKGZhZGVUaW1lID4gMCkge1xyXG4gICAgICB2YXIgY291bnQgPSAzMjtcclxuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICB2YXIgdW5pdFRpbWUgPSBmYWRlVGltZS9jb3VudDtcclxuICAgICAgdmFyIHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lTXVzaWMoKTtcclxuXHJcbiAgICAgIG11c2ljLnZvbHVtZSA9IDA7XHJcbiAgICAgIHZhciBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICB2YXIgcmF0ZSA9IGNvdW50ZXIvY291bnQ7XHJcbiAgICAgICAgbXVzaWMudm9sdW1lID0gcmF0ZSp2b2x1bWU7XHJcblxyXG4gICAgICAgIGlmIChyYXRlID49IDEpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sIHVuaXRUaW1lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtdXNpYy52b2x1bWUgPSB0aGlzLmdldFZvbHVtZU11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMgPSBtdXNpYztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TXVzaWM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RvcE11c2ljKGZhZGVUaW1lKSB7XHJcbiAgICBpZiAoIXRoaXMuY3VycmVudE11c2ljKSB7IHJldHVybiA7IH1cclxuXHJcbiAgICB2YXIgbXVzaWMgPSB0aGlzLmN1cnJlbnRNdXNpYztcclxuICAgIHRoaXMuY3VycmVudE11c2ljID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZmFkZVRpbWUgPiAwKSB7XHJcbiAgICAgIHZhciBjb3VudCA9IDMyO1xyXG4gICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgIHZhciB1bml0VGltZSA9IGZhZGVUaW1lL2NvdW50O1xyXG4gICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWVNdXNpYygpO1xyXG5cclxuICAgICAgbXVzaWMudm9sdW1lID0gMDtcclxuICAgICAgdmFyIGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICAgIHZhciByYXRlID0gY291bnRlci9jb3VudDtcclxuICAgICAgICBtdXNpYy52b2x1bWUgPSB2b2x1bWUqKDEtcmF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChyYXRlID49IDEpIHtcclxuICAgICAgICAgIG11c2ljLnN0b3AoKTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sIHVuaXRUaW1lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtdXNpYy5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIOmfs+alveOCkuS4gOaZguWBnOatolxyXG4gICAqL1xyXG4gIHN0YXRpYyBwYXVzZU11c2ljKCkge1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRNdXNpYykgeyByZXR1cm4gOyB9XHJcbiAgICB0aGlzLmN1cnJlbnRNdXNpYy5wYXVzZSgpO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIOmfs+alveOCkuWGjemWi1xyXG4gICAqL1xyXG4gIHN0YXRpYyByZXN1bWVNdXNpYygpIHtcclxuICAgIGlmICghdGhpcy5jdXJyZW50TXVzaWMpIHsgcmV0dXJuIDsgfVxyXG4gICAgdGhpcy5jdXJyZW50TXVzaWMucmVzdW1lKCk7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog6Z+z5qW944Gu44Oc44Oq44Ol44O844Og44KS6Kit5a6aXHJcbiAgICovXHJcbiAgc3RhdGljIHNldFZvbHVtZU11c2ljKHZvbHVtZSkge1xyXG4gICAgdGhpcy5tdXNpY1ZvbHVtZSA9IHZvbHVtZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRNdXNpYykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNdXNpYy52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qXHJcbiAgICog6Z+z5qW944Gu44Oc44Oq44Ol44O844Og44KS5Y+W5b6XXHJcbiAgICovXHJcbiAgc3RhdGljIGdldFZvbHVtZU11c2ljKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubXVzaWNWb2x1bWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcblNvdW5kTWFuYWdlci52b2x1bWUgPSAwLjg7XHJcblNvdW5kTWFuYWdlci5tdXNpY1ZvbHVtZSA9IDAuODtcclxuU291bmRNYW5hZ2VyLm11dGVGbGFnID0gZmFsc2U7XHJcblNvdW5kTWFuYWdlci5jdXJyZW50TXVzaWMgPSBudWxsO1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLnVpLkJ1dHRvblxyXG4gKiBCdXR0b25cclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5TaGFwZVxyXG4gKi9cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgU2hhcGUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCBCdXR0b24uZGVmYXVsdHMpO1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZShwaGluYS51aS5CdXR0b24uZGVmYXVsdHMpO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5jb3JuZXJSYWRpdXMgPSBvcHRpb25zLmNvcm5lclJhZGl1cztcclxuICAgIHRoaXMudGV4dCAgICAgICAgID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgdGhpcy5mb250Q29sb3IgICAgPSBvcHRpb25zLmZvbnRDb2xvcjtcclxuICAgIHRoaXMuZm9udFNpemUgICAgID0gb3B0aW9ucy5mb250U2l6ZTtcclxuICAgIHRoaXMuZm9udFdlaWdodCAgICAgPSBvcHRpb25zLmZvbnRXZWlnaHQ7XHJcbiAgICB0aGlzLmZvbnRGYW1pbHkgICA9IG9wdGlvbnMuZm9udEZhbWlseTtcclxuXHJcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHRydWUpO1xyXG4gICAgdGhpcy5vbigncG9pbnRlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5mbGFyZSgncHVzaCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIoY2FudmFzKSB7XHJcbiAgICBjYW52YXMucm91bmRSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb3JuZXJSYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgcG9zdHJlbmRlcihjYW52YXMpIHtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmNvbnRleHQ7XHJcbiAgICAvLyB0ZXh0XHJcbiAgICB2YXIgZm9udCA9IGZvcm1hdC5jYWxsKFwie2ZvbnRXZWlnaHR9IHtmb250U2l6ZX1weCB7Zm9udEZhbWlseX1cIiwgdGhpcyk7XHJcbiAgICAvLyB2YXIgZm9udCA9IFwie2ZvbnRXZWlnaHR9IHtmb250U2l6ZX1weCB7Zm9udEZhbWlseX1cIi5mb3JtYXQodGhpcyk7XHJcbiAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZm9udENvbG9yO1xyXG4gICAgY29udGV4dC5maWxsVGV4dCh0aGlzLnRleHQsIDAsIDApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5CdXR0b24uZGVmYXVsdHMgPSB7XHJcbiAgd2lkdGg6IDIwMCxcclxuICBoZWlnaHQ6IDgwLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICBmaWxsOiAnaHNsKDIwMCwgODAlLCA2MCUpJyxcclxuICBzdHJva2U6IG51bGwsXHJcblxyXG4gIGNvcm5lclJhZGl1czogOCxcclxuICB0ZXh0OiAnSGVsbG8nLFxyXG4gIGZvbnRDb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogMzIsXHJcbiAgZm9udFdlaWdodDogJycsXHJcbiAgZm9udEZhbWlseTogXCInSGlyYUtha3VQcm9OLVczJ1wiLCAvLyBIaXJhZ2lubyBvciBIZWx2ZXRpY2EsXHJcbn07XHJcblxyXG4vLyBkZWZpbmVkXHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChCdXR0b24sICdjb3JuZXJSYWRpdXMnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ3RleHQnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ2ZvbnRDb2xvcicpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoQnV0dG9uLCAnZm9udFNpemUnKTtcclxuU2hhcGUud2F0Y2hSZW5kZXJQcm9wZXJ0eS5jYWxsKEJ1dHRvbiwgJ2ZvbnRGYW1pbHknKTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5HYXVnZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LlNoYXBlXHJcbiAqL1xyXG5jbGFzcyBHYXVnZSBleHRlbmRzIFNoYXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMgfHwge30sIEdhdWdlLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAoe30pLiRzYWZlKG9wdGlvbnMgfHwge30sIHBoaW5hLnVpLkdhdWdlLmRlZmF1bHRzKTtcclxuICAgIFxyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSAob3B0aW9ucy52YWx1ZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMudmFsdWUgOiBvcHRpb25zLm1heFZhbHVlO1xyXG4gICAgdGhpcy5tYXhWYWx1ZSA9IG9wdGlvbnMubWF4VmFsdWU7XHJcbiAgICB0aGlzLmdhdWdlQ29sb3IgPSBvcHRpb25zLmdhdWdlQ29sb3I7XHJcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IG9wdGlvbnMuY29ybmVyUmFkaXVzO1xyXG5cclxuICAgIHRoaXMudmlzdWFsVmFsdWUgPSAob3B0aW9ucy52YWx1ZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMudmFsdWUgOiBvcHRpb25zLm1heFZhbHVlO1xyXG4gICAgdGhpcy5hbmltYXRpb24gPSBvcHRpb25zLmFuaW1hdGlvbjtcclxuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDEqMTAwMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa6gOOCv+ODs+OBi+OCkuODgeOCp+ODg+OCr1xyXG4gICAqL1xyXG4gIGlzRnVsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID09PSB0aGlzLm1heFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56m644Gj44G944GL44KS44OB44Kn44OD44KvXHJcbiAgICovXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID09PSAwO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgIHZhbHVlID0gY2xhbXAodmFsdWUsIDAsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgLy8gdmFsdWUgPSBNYXRoLmNsYW1wKHZhbHVlLCAwLCB0aGlzLm1heFZhbHVlKTtcclxuXHJcbiAgICAvLyBlbmQgd2hlbiBub3cgdmFsdWUgZXF1YWwgdmFsdWUgb2YgYXJndW1lbnRcclxuICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIDtcclxuXHJcbiAgICAvLyBmaXJlIHZhbHVlIGNoYW5nZSBldmVudFxyXG4gICAgdGhpcy5mbGFyZSgnY2hhbmdlJyk7XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdmFyIHJhbmdlID0gTWF0aC5hYnModGhpcy52aXN1YWxWYWx1ZS12YWx1ZSk7XHJcbiAgICAgIHZhciB0aW1lID0gKHJhbmdlL3RoaXMubWF4VmFsdWUpKnRoaXMuYW5pbWF0aW9uVGltZTtcclxuXHJcbiAgICAgIHRoaXMudHdlZW5lci5vbnR3ZWVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fZGlydHlEcmF3ID0gdHJ1ZTtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnR3ZWVuZXJcclxuICAgICAgICAuY2xlYXIoKVxyXG4gICAgICAgIC50byh7J3Zpc3VhbFZhbHVlJzogdmFsdWV9LCB0aW1lKVxyXG4gICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5mbGFyZSgnY2hhbmdlZCcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhcmUoJ2VtcHR5Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzRnVsbCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhcmUoJ2Z1bGwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnZpc3VhbFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZmxhcmUoJ2NoYW5nZWQnKTtcclxuICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZW1wdHknKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmlzRnVsbCgpKSB7XHJcbiAgICAgICAgdGhpcy5mbGFyZSgnZnVsbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSYXRlKCkge1xyXG4gICAgdmFyIHJhdGUgPSB0aGlzLnZpc3VhbFZhbHVlL3RoaXMubWF4VmFsdWU7XHJcbiAgICByZXR1cm4gcmF0ZTtcclxuICB9XHJcblxyXG4gIHByZXJlbmRlcihjYW52YXMpIHtcclxuICAgIGNhbnZhcy5yb3VuZFJlY3QoLXRoaXMud2lkdGgvMiwgLXRoaXMuaGVpZ2h0LzIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvcm5lclJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBwb3N0cmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIHJhdGUgPSB0aGlzLmdldFJhdGUoKTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZ2F1Z2VDb2xvcjtcclxuICAgIGNhbnZhcy5jb250ZXh0LnNhdmUoKTtcclxuICAgIGNhbnZhcy5jb250ZXh0LmNsaXAoKTtcclxuICAgIGNhbnZhcy5maWxsUmVjdCgtdGhpcy53aWR0aC8yLCAtdGhpcy5oZWlnaHQvMiwgdGhpcy53aWR0aCpyYXRlLCB0aGlzLmhlaWdodCk7XHJcbiAgICBjYW52YXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2KSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHYpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5HYXVnZS5kZWZhdWx0cyA9IHtcclxuICB3aWR0aDogMjU2LFxyXG4gIGhlaWdodDogMzIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGZpbGw6ICd3aGl0ZScsXHJcbiAgc3Ryb2tlOiAnI2FhYScsXHJcbiAgc3Ryb2tlV2lkdGg6IDQsXHJcbiAgbWF4VmFsdWU6IDEwMCxcclxuICBnYXVnZUNvbG9yOiAnIzQ0ZicsXHJcbiAgY29ybmVyUmFkaXVzOiAwLFxyXG4gIGFuaW1hdGlvbjogdHJ1ZVxyXG59O1xyXG5cclxuLy8gZGVmaW5lZFxyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICd2YWx1ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICdtYXhWYWx1ZScpO1xyXG5TaGFwZS53YXRjaFJlbmRlclByb3BlcnR5LmNhbGwoR2F1Z2UsICdnYXVnZUNvbG9yJyk7XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydHkuY2FsbChHYXVnZSwgJ2Nvcm5lclJhZGl1cycpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEudWkuQ2lyY2xlR2F1Z2VcclxuICogQGV4dGVuZHMgcGhpbmEudWkuR2F1Z2VcclxuICovXHJcbmNsYXNzIENpcmNsZUdhdWdlIGV4dGVuZHMgR2F1Z2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBmaWxsOiAnI2FhYScsXHJcbiAgICAgIHN0cm9rZTogJyMyMjInLFxyXG5cclxuICAgICAgcmFkaXVzOiA2NCxcclxuICAgICAgYW50aWNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgc2hvd1BlcmNlbnRhZ2U6IGZhbHNlLCAvLyBUT0RPXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nVHlwZSgnY2lyY2xlJyk7XHJcblxyXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcclxuICAgIHRoaXMuYW50aWNsb2Nrd2lzZSA9IG9wdGlvbnMuYW50aWNsb2Nrd2lzZTtcclxuICAgIHRoaXMuc2hvd1BlcmNlbnRhZ2UgPSBvcHRpb25zLnNob3dQZXJjZW50YWdlO1xyXG4gIH1cclxuXHJcbiAgcHJlcmVuZGVyKGNhbnZhcykge1xyXG4gICAgdmFyIHJhdGUgPSB0aGlzLmdldFJhdGUoKTtcclxuICAgIHZhciBlbmQgPSAoTWF0aC5QSSoyKSpyYXRlO1xyXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gMDtcclxuICAgIHRoaXMuZW5kQW5nbGUgPSBlbmQ7XHJcblxyXG4gICAgdGhpcy5jYW52YXMucm90YXRlKC1NYXRoLlBJKjAuNSk7XHJcbiAgICB0aGlzLmNhbnZhcy5zY2FsZSgxLCAtMSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWxsKGNhbnZhcykge1xyXG4gICAgY2FudmFzLmZpbGxQaWUoMCwgMCwgdGhpcy5yYWRpdXMsIHRoaXMuc3RhcnRBbmdsZSwgdGhpcy5lbmRBbmdsZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UoY2FudmFzKSB7XHJcbiAgICBjYW52YXMuc3Ryb2tlQXJjKDAsIDAsIHRoaXMucmFkaXVzLCB0aGlzLnN0YXJ0QW5nbGUsIHRoaXMuZW5kQW5nbGUpO1xyXG4gIH1cclxuXHJcbiAgcG9zdHJlbmRlcigpIHtcclxuICAgIC8vIGlmICh0aGlzLnNob3dQZXJjZW50YWdlKSB7XHJcbiAgICAvLyAgIC8vIFRPRE86XHJcbiAgICAvLyAgIHZhciBsZWZ0ID0gTWF0aC5tYXgoMCwgdGhpcy5saW1pdC10aGlzLnRpbWUpO1xyXG4gICAgLy8gICB0aGlzLmxhYmVsLnRleHQgPSBNYXRoLmNlaWwobGVmdC8xMDAwKSsnJztcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG59XG5cbnZhciB0ZXh0V2lkdGhDYWNoZSA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS51aS5MYWJlbEFyZWFcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5MYWJlbFxyXG4gKi9cclxuY2xhc3MgTGFiZWxBcmVhIGV4dGVuZHMgTGFiZWwge1xyXG5cclxuICAvLyBfbGluZVVwZGF0ZTogdHJ1ZSxcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIExhYmVsQXJlYS5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0ge30uJHNhZmUob3B0aW9ucywgTGFiZWxBcmVhLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuX2xpbmVVcGRhdGUgPSB0cnVlO1xyXG4gICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gb3B0aW9ucy52ZXJ0aWNhbEFsaWduO1xyXG4gICAgdGhpcy5zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCB8fCBuZXcgVmVjdG9yMigpO1xyXG4gICAgdGhpcy5zY3JvbGxYID0gb3B0aW9ucy5zY3JvbGxYO1xyXG4gICAgdGhpcy5zY3JvbGxZID0gb3B0aW9ucy5zY3JvbGxZO1xyXG4gIH1cclxuXHJcbiAgY2FsY0NhbnZhc1dpZHRoICgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoICsgdGhpcy5wYWRkaW5nICogMjtcclxuICB9XHJcblxyXG4gIGNhbGNDYW52YXNIZWlnaHQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nICogMjtcclxuICB9XHJcbiAgZ2V0T2Zmc2V0WSAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljYWxBbGlnbjtcclxuICAgIH1cclxuICAgIHJldHVybiBMYWJlbEFyZWEudmVydGljYWxBbGlnblRvT2Zmc2V0TWFwW3RoaXMudmVydGljYWxBbGlnbl0gfHwgMDtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldFggKCkge1xyXG4gICAgcmV0dXJuIExhYmVsQXJlYS5hbGlnblRvT2Zmc2V0TWFwW3RoaXMuYWxpZ25dIHx8IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0V2lkdGhDYWNoZSAoKSB7XHJcbiAgICB2YXIgY2FjaGUgPSB0ZXh0V2lkdGhDYWNoZVt0aGlzLmZvbnRdO1xyXG4gICAgcmV0dXJuIGNhY2hlIHx8ICh0ZXh0V2lkdGhDYWNoZVt0aGlzLmZvbnRdID0ge30pO1xyXG4gIH1cclxuICBcclxuICBzcGxpY2VMaW5lcyAobGluZXMpIHtcclxuICAgIHZhciByb3dXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzLmNvbnRleHQ7XHJcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmZvbnQ7XHJcblxyXG4gICAgdmFyIGNhY2hlID0gdGhpcy5nZXRUZXh0V2lkdGhDYWNoZSgpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBjYWNoZVxyXG4gICAgZWFjaCQxLmNhbGwodGhpcy5fdGV4dCwgZnVuY3Rpb24oY2gpIHtcclxuICAgIC8vIHRoaXMuX3RleHQuZWFjaChmdW5jdGlvbihjaCkge1xyXG4gICAgICBpZiAoIWNhY2hlW2NoXSkge1xyXG4gICAgICAgIGNhY2hlW2NoXSA9IGNvbnRleHQubWVhc3VyZVRleHQoY2gpLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdmFyIGxvY2FsTGluZXMgPSBbXTtcclxuICAgIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xyXG4gICAgICBcclxuICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICB2YXIgdG90YWxXaWR0aCA9IDA7XHJcblxyXG4gICAgICAvLyDjga/jgb/lh7rjgabjgYTjgZ/jgonlvLfliLbnmoTjgavmlLnooYzjgZnjgotcclxuICAgICAgZWFjaCQxLmNhbGwobGluZSwgZnVuY3Rpb24oY2gpIHtcclxuICAgICAgLy8gbGluZS5lYWNoKGZ1bmN0aW9uKGNoKSB7XHJcbiAgICAgICAgdmFyIHcgPSBjYWNoZVtjaF07XHJcblxyXG4gICAgICAgIGlmICgodG90YWxXaWR0aCt3KSA+IHJvd1dpZHRoKSB7XHJcbiAgICAgICAgICBsb2NhbExpbmVzLnB1c2goc3RyKTtcclxuICAgICAgICAgIHN0ciA9ICcnO1xyXG4gICAgICAgICAgdG90YWxXaWR0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHIgKz0gY2g7XHJcbiAgICAgICAgdG90YWxXaWR0aCArPSB3O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOaui+OCiuOCkiBwdXNoIOOBmeOCi1xyXG4gICAgICBsb2NhbExpbmVzLnB1c2goc3RyKTtcclxuXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBsb2NhbExpbmVzO1xyXG4gIH1cclxuICBcclxuICBnZXRMaW5lcyAoKSB7XHJcbiAgICBpZiAodGhpcy5fbGluZVVwZGF0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGluZVVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBsaW5lcyA9ICh0aGlzLnRleHQgKyAnJykuc3BsaXQoJ1xcbicpO1xyXG4gICAgaWYgKHRoaXMud2lkdGggPCAxKSB7XHJcbiAgICAgIHRoaXMuX2xpbmVzID0gbGluZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fbGluZXMgPSB0aGlzLnNwbGljZUxpbmVzKGxpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbGluZXM7XHJcbiAgfVxyXG5cclxuICBwcmVyZW5kZXIgKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIGNvbnRleHQuZm9udCA9IHRoaXMuZm9udDtcclxuICAgIGNvbnRleHQudGV4dEFsaWduID0gdGhpcy5hbGlnbjtcclxuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gdGhpcy5iYXNlbGluZTtcclxuXHJcbiAgICB2YXIgdGV4dCA9IHRoaXMudGV4dCArICcnO1xyXG4gICAgdmFyIGxpbmVzID0gdGhpcy5nZXRMaW5lcygpO1xyXG4gICAgdmFyIGxlbmd0aCA9IGxpbmVzLmxlbmd0aDtcclxuICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIGZvbnRTaXplID0gdGhpcy5mb250U2l6ZTtcclxuICAgIHZhciBsaW5lU2l6ZSA9IGZvbnRTaXplICogdGhpcy5saW5lSGVpZ2h0O1xyXG4gICAgdmFyIG9mZnNldFggPSB0aGlzLmdldE9mZnNldFgoKSAqIHdpZHRoO1xyXG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLmdldE9mZnNldFkoKTtcclxuICAgIGlmIChvZmZzZXRZID09PSAwKSB7XHJcbiAgICAgIG9mZnNldFkgPSAtTWF0aC5mbG9vcihsZW5ndGggLyAyKSAqIGxpbmVTaXplO1xyXG4gICAgICBvZmZzZXRZICs9ICgobGVuZ3RoICsgMSkgJSAyKSAqIChsaW5lU2l6ZSAvIDIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAob2Zmc2V0WSA8IDApIHtcclxuICAgICAgb2Zmc2V0WSAqPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgb2Zmc2V0WSA9IG9mZnNldFkgKiBoZWlnaHQgLSBsZW5ndGggKiBsaW5lU2l6ZSArIGxpbmVTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldFkgLT0gdGhpcy5zY3JvbGxZO1xyXG4gICAgb2Zmc2V0WCAtPSB0aGlzLnNjcm9sbFg7XHJcbiAgICB2YXIgc3RhcnQgPSAob2Zmc2V0WSArIGhlaWdodCAvIDIpIC8gLWxpbmVTaXplIHwgMDtcclxuICAgIGlmIChzdGFydCA8IDApIHsgc3RhcnQgPSAwOyB9XHJcblxyXG4gICAgdmFyIGVuZCA9IChoZWlnaHQgLyAyIC0gb2Zmc2V0WSArIGxpbmVTaXplICogMikgLyBsaW5lU2l6ZSB8IDA7XHJcbiAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIHJldHVybiBzdGFydCA8PSBpICYmIGVuZCA+IGk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIHRoaXMubGluZVNpemUgPSBsaW5lU2l6ZTtcclxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGwgKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHZhciBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xyXG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XHJcbiAgICB2YXIgbGluZVNpemUgPSB0aGlzLmxpbmVTaXplO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydDtcclxuICAgIHRoaXMubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgb2Zmc2V0WCwgKHN0YXJ0ICsgaSkgKiBsaW5lU2l6ZSArIG9mZnNldFkpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTdHJva2UgKGNhbnZhcykge1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcclxuICAgIHZhciBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xyXG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLm9mZnNldFk7XHJcbiAgICB2YXIgbGluZVNpemUgPSB0aGlzLmxpbmVTaXplO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydDtcclxuICAgIHRoaXMubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLCBpKSB7XHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlVGV4dChsaW5lLCBvZmZzZXRYLCAoc3RhcnQgKyBpKSAqIGxpbmVTaXplICsgb2Zmc2V0WSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgfVxyXG4gIHNldCB0ZXh0KHYpIHtcclxuICAgIHRoaXMuX3RleHQgPSB2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbFgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zY3JvbGwueDtcclxuICB9XHJcbiAgc2V0IHNjcm9sbFgodikge1xyXG4gICAgdGhpcy5zY3JvbGwueCA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXQgc2Nyb2xsWSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbC55O1xyXG4gIH1cclxuICBzZXQgc2Nyb2xsWSh2KSB7XHJcbiAgICB0aGlzLnNjcm9sbC55ID0gdjtcclxuICB9XHJcbiAgXHJcbiAgLy8gX3N0YXRpYzoge1xyXG4gIC8vICAgZGVmYXVsdHM6IHtcclxuICAvLyAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgLy8gICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgLy8gICAgIGJhc2VsaW5lOiAndG9wJyxcclxuICAvLyAgICAgd2lkdGg6IDMyMCxcclxuICAvLyAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgLy8gICAgIHNjcm9sbFg6IDAsXHJcbiAgLy8gICAgIHNjcm9sbFk6IDAsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYWxpZ25Ub09mZnNldE1hcDoge1xyXG4gIC8vICAgICBzdGFydDogLTAuNSxcclxuICAvLyAgICAgbGVmdDogLTAuNSxcclxuICAvLyAgICAgY2VudGVyOiAwLFxyXG4gIC8vICAgICBlbmQ6IDAuNSxcclxuICAvLyAgICAgcmlnaHQ6IDAuNSxcclxuICAvLyAgIH0sXHJcblxyXG4gIC8vICAgdmVydGljYWxBbGlnblRvT2Zmc2V0TWFwOiB7XHJcbiAgLy8gICAgIHRvcDogLTAuNSxcclxuICAvLyAgICAgY2VudGVyOiAwLFxyXG4gIC8vICAgICBtaWRkbGU6IDAsXHJcbiAgLy8gICAgIGJvdHRvbTogMC41LFxyXG4gIC8vICAgfSxcclxuICAvLyB9LFxyXG5cclxuICAvLyBfZGVmaW5lZDogZnVuY3Rpb24oKSB7XHJcbiAgLy8gICB2YXIgZnVuYyA9IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgLy8gICAgIGlmKCh0aGlzLl9saW5lVXBkYXRlID09PSBmYWxzZSkgJiYgKG5ld1ZhbCAhPT0gb2xkVmFsKSl7XHJcbiAgLy8gICAgICAgdGhpcy5fbGluZVVwZGF0ZSA9IHRydWU7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgW1xyXG4gIC8vICAgICAndGV4dCcsXHJcbiAgLy8gICAgICd3aWR0aCcsXHJcbiAgLy8gICAgICdmb250U2l6ZScsXHJcbiAgLy8gICAgICdmb250V2VpZ2h0JyxcclxuICAvLyAgICAgJ2ZvbnRGYW1pbHknXHJcbiAgLy8gICBdLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgLy8gICAgIHRoaXMuJHdhdGNoKGtleSwgZnVuYyk7XHJcbiAgLy8gICB9LCB0aGlzLnByb3RvdHlwZSk7XHJcblxyXG4gIC8vICAgcGhpbmEuZGlzcGxheS5TaGFwZS53YXRjaFJlbmRlclByb3BlcnRpZXMuY2FsbCh0aGlzICxbXHJcbiAgLy8gICAgICd2ZXJ0aWNhbEFsaWduJyxcclxuICAvLyAgICAgJ3RleHQnLFxyXG4gIC8vICAgICAnc2Nyb2xsJyxcclxuICAvLyAgICAgJ3Njcm9sbFgnLFxyXG4gIC8vICAgICAnc2Nyb2xsWSdcclxuICAvLyAgIF0pO1xyXG4gIC8vIH0sXHJcblxyXG5cclxuICBlbmFibGVTY3JvbGwoKSB7XHJcbiAgICAvLyAgIHRoaXMuc2V0SW50ZXJhY3RpdmUodHJ1ZSk7XHJcbiAgICAvLyAgIHZhciBwaHlzaWNhbCA9IHBoaW5hLmFjY2Vzc29yeS5QaHlzaWNhbCgpO1xyXG4gICAgLy8gICBwaHlzaWNhbC5hdHRhY2hUbyh0aGlzKTtcclxuICAgIC8vICAgcGh5c2ljYWwuZnJpY3Rpb24gPSAwLjg7XHJcbiAgICAvLyAgIHZhciBsYXN0Rm9yY2UgPSAwO1xyXG4gICAgLy8gICB2YXIgbGFzdE1vdmUgPSAwO1xyXG4gICAgLy8gICB0aGlzLm9uKCdwb2ludHN0YXJ0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyAgICAgbGFzdEZvcmNlID0gcGh5c2ljYWwudmVsb2NpdHkueTtcclxuICAgIC8vICAgICBsYXN0TW92ZSA9IDA7XHJcbiAgICAvLyAgICAgcGh5c2ljYWwuZm9yY2UoMCwgMCk7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICB0aGlzLm9uKCdwb2ludG1vdmUnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICB2YXIgcCA9IGUucG9pbnRlci5kZWx0YVBvc2l0aW9uO1xyXG4gICAgLy8gICAgIGxhc3RNb3ZlID0gcC55O1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsWSArPSBsYXN0TW92ZTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gICB0aGlzLm9uKCdwb2ludGVuZCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIHBoeXNpY2FsLmZvcmNlKDAsIGxhc3RGb3JjZSArIGxhc3RNb3ZlKTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gc3RhdGljIHByb3BzXHJcbkxhYmVsQXJlYS5kZWZhdWx0cyA9IHtcclxuICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICBhbGlnbjogJ2xlZnQnLFxyXG4gIGJhc2VsaW5lOiAndG9wJyxcclxuICB3aWR0aDogMzIwLFxyXG4gIGhlaWdodDogMzIwLFxyXG4gIHNjcm9sbFg6IDAsXHJcbiAgc2Nyb2xsWTogMCxcclxufTtcclxuTGFiZWxBcmVhLmFsaWduVG9PZmZzZXRNYXAgPSB7XHJcbiAgc3RhcnQ6IC0wLjUsXHJcbiAgbGVmdDogLTAuNSxcclxuICBjZW50ZXI6IDAsXHJcbiAgZW5kOiAwLjUsXHJcbiAgcmlnaHQ6IDAuNSxcclxufTtcclxuTGFiZWxBcmVhLnZlcnRpY2FsQWxpZ25Ub09mZnNldE1hcCA9IHtcclxuICB0b3A6IC0wLjUsXHJcbiAgY2VudGVyOiAwLFxyXG4gIG1pZGRsZTogMCxcclxuICBib3R0b206IDAuNSxcclxufVxyXG5cclxuLy8gZGVmaW5lZFxyXG47XHJcblNoYXBlLndhdGNoUmVuZGVyUHJvcGVydGllcy5jYWxsKExhYmVsQXJlYSAsW1xyXG4gICd2ZXJ0aWNhbEFsaWduJyxcclxuICAndGV4dCcsXHJcbiAgJ3Njcm9sbCcsXHJcbiAgJ3Njcm9sbFgnLFxyXG4gICdzY3JvbGxZJ1xyXG5dKTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5lZmZlY3QuV2F2ZVxyXG4gKiBCdXR0b25cclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5DaXJjbGVTaGFwZVxyXG4gKi9cclxuY2xhc3MgV2F2ZSBleHRlbmRzIENpcmNsZVNoYXBlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwge1xyXG4gICAgLy8gb3B0aW9ucyA9IChvcHRpb25zIHx8IHt9KS4kc2FmZSh7XHJcbiAgICAgIGZpbGw6ICd3aGl0ZScsXHJcbiAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB2YXIgdHdlZW5lciA9IG5ldyBUd2VlbmVyKCkuYXR0YWNoVG8odGhpcyk7XHJcbiAgICB0d2VlbmVyXHJcbiAgICAgIC50byh7c2NhbGVYOjIsIHNjYWxlWToyLCBhbHBoYTowfSwgNTAwKVxyXG4gICAgICAuY2FsbChmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICB9XHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5zb2NpYWwuVHdpdHRlclxyXG4gKiAjIFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44Kv44KS55Sf5oiQ44GZ44KL44Kv44Op44K5XHJcbiAqIFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44Kv44GuIFVSTCDjgpLnlJ/miJDjgZfjgabjgY/jgozjgovjgq/jg6njgrnjgafjgZnjgIJcclxuICovXHJcbmNsYXNzIFR3aXR0ZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBcclxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr/jga/lrZjlnKjjgZfjgb7jgZnjgYzjgqTjg7Pjgrnjgr/jg7Pjgrnjg6Hjg7Pjg5Djga/jgYLjgorjgb7jgZvjgpPjgIJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZXRob2QgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMXHJcbiAgICogVHdpdHRlcuOBruWFseacieODquODs+OCr+OCkueUn+aIkOOBl+OBvuOBmeOAguW8leaVsOOBq+OCquODluOCuOOCp+OCr+ODiOOCkua4oeOBmeOBk+OBqOOBp+anmOOAheOBquODkeODqeODoeODvOOCv+ODvOOCkuioreWumuWHuuadpeOBvuOBmeOAguW8leaVsOOBruOCquODluOCuOOCp+OCr+ODiOOBryB7QGxpbmsgI3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzfSDjgaflronlhajmi6HlvLXjgZXjgozjgb7jgZnjgIJcclxuICAgKiBcclxuICAgKiAjIyMgRXhhbXBsZVxyXG4gICAqICAgICBwaGluYS5zb2NpYWwuVHdpdHRlci5jcmVhdGVVUkwoKTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PUhlbGxvJTJDJTIwd29ybGQhJmhhc2h0YWdzPWphdmFzY3JpcHQlMkNwaGluYSZ1cmw9e+ePvuWcqOOBrlVSTH1cclxuICAgKiBcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgKiAgICAgICB0ZXh0OiAnVGhpcyBpcyB0ZXh0JyxcclxuICAgKiAgICAgICBoYXNodGFnczogJ2hhc2h0YWcxLGhhc2h0YWcyJyxcclxuICAgKiAgICAgICB1cmw6ICdodHRwOi8vcGhpbmFqcy5jb20nXHJcbiAgICogICAgIH0pOyAvLyA9PiBodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9VGhpcyUyMGlzJTIwdGV4dCZoYXNodGFncz1oYXNodGFnMSUyQ2hhc2h0YWcyJnVybD1odHRwJTNBJTJGJTJGcGhpbmFqcy5jb21cclxuICAgKiBcclxuICAgKiAgICAgcGhpbmEuc29jaWFsLlR3aXR0ZXIuY3JlYXRlVVJMKHtcclxuICAgKiAgICAgICB0ZXh0OiAnVGhpcyBpcyB0ZXh0JyxcclxuICAgKiAgICAgICBoYXNodGFnczogJ2hhc2h0YWcxLGhhc2h0YWcyJyxcclxuICAgKiAgICAgICB1cmw6ICdodHRwOi8vcGhpbmFqcy5jb20nLFxyXG4gICAqICAgICAgIG90aGVyOiAnVGhpcyBpcyBvdGhlcicvL+ioreWumumgheebruOBr+mBqeW9k+OBq+Wil+OChOOBm+OCi1xyXG4gICAqICAgICB9KTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PVRoaXMlMjBpcyUyMHRleHQmaGFzaHRhZ3M9aGFzaHRhZzElMkNoYXNodGFnMiZ1cmw9aHR0cCUzQSUyRiUyRnBoaW5hanMuY29tJm90aGVyPVRoaXMlMjBpcyUyMG90aGVyXHJcbiAgICogXHJcbiAgICogICAgIHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmNyZWF0ZVVSTCh7XHJcbiAgICogICAgICAgdXJsOiAnaHR0cDovL3BoaW5hanMuY29tJ1xyXG4gICAqICAgICB9KTsgLy8gPT4gaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9aHR0cCUzQSUyRiUyRnBoaW5hanMuY29tJnRleHQ9SGVsbG8lMkMlMjB3b3JsZCEmaGFzaHRhZ3M9amF2YXNjcmlwdCUyQ3BoaW5hXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtPYmplY3R9XHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBUd2l0dGVyIOOBruWFseacieODquODs+OCr1xyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlVVJMIChvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCBUd2l0dGVyLmRlZmF1bHRzKTtcclxuICAgIC8vIG9wdGlvbnMgPSAob3B0aW9ucyB8fCB7fSkuJHNhZmUodGhpcy5kZWZhdWx0cyk7XHJcblxyXG4gICAgdmFyIHF1ZXJpZXMgPSBbXTtcclxuICAgIHZhciBldWMgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICBmb3JJbi5jYWxsKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgIC8vIG9wdGlvbnMuZm9ySW4oZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgc3RyID0ga2V5ICsgJz0nICsgZXVjKHZhbHVlKTtcclxuICAgICAgcXVlcmllcy5wdXNoKHN0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdXJsID0gZm9ybWF0LmNhbGwoJ3tiYXNlVVJMfS97dHlwZX0/e3F1ZXJ5fScsIHtcclxuICAgIC8vIHZhciB1cmwgPSAne2Jhc2VVUkx9L3t0eXBlfT97cXVlcnl9Jy5mb3JtYXQoe1xyXG4gICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXHJcbiAgICAgIC8vIHR5cGU6IG9wdGlvbnMudHlwZSxcclxuICAgICAgdHlwZTogJ3R3ZWV0JyxcclxuICAgICAgcXVlcnk6IHF1ZXJpZXMuam9pbignJicpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuYmFzZVVSTCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudCddXHJcbiAqIFR3aXR0ZXIg44Gu5YWx5pyJ44Oq44Oz44Kv44Gu44OZ44O844K544Go44Gq44KLIFVSTCDjgafjgZnjgIJcclxuICogXHJcbiAqIEBzdGF0aWNcclxuICovXHJcblR3aXR0ZXIuYmFzZVVSTCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudCc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtPYmplY3R9IHBoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzXHJcbiAqIOODh+ODleOCqeODq+ODiOWApOOCkuagvOe0jeOBl+OBpuOBhOOCi+OCquODluOCuOOCp+OCr+ODiOOBp+OBmeOAgntAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudGV4dH0sIHtAbGluayAjcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMuaGFzaHRhZ3N9LCB7QGxpbmsgI3BoaW5hLnNvY2lhbC5Ud2l0dGVyLmRlZmF1bHRzLnVybH0g44KS5YaF5YyF44GX44Gm44GE44G+44GZ44CCXHJcbiAqIFxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5Ud2l0dGVyLmRlZmF1bHRzID0ge1xyXG4gIC8vIHR5cGU6ICd0d2VldCcsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudGV4dCA9ICdIZWxsbywgV29ybGQnXVxyXG4gICAqIOODh+ODleOCqeODq+ODiOOBp+ODhOOCpOODvOODiOOBq+WQq+OBvuOCjOOCi+aWh+Wtl+WIl+OBp+OBmeOAglxyXG4gICAqIFxyXG4gICAqIEBzdGF0aWNcclxuICAgKi9cclxuICB0ZXh0OiAnSGVsbG8sIHdvcmxkIScsXHJcblxyXG4gIC8vIHNjcmVlbl9uYW1lOiAncGhpX2pwJyxcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwaGluYS5zb2NpYWwuVHdpdHRlci5kZWZhdWx0cy5oYXNodGFncyA9ICdqYXZhc2NyaXB0LCBwaGluYV9qcyddXHJcbiAgICog44OH44OV44Kp44Or44OI44Gn44OE44Kk44O844OI44Gr5ZCr44G+44KM44KL44OP44OD44K344Ol44K/44Kw44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIGhhc2h0YWdzOiAnamF2YXNjcmlwdCxwaGluYV9qcycsXHJcblxyXG4gIC8vIHVybDogJ2h0dHA6Ly9naXRodWIuY29tL3BoaS1qcC9waGluYS5qcycsXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcGhpbmEuc29jaWFsLlR3aXR0ZXIuZGVmYXVsdHMudXJsID0gcGhpbmEuZ2xvYmFsLmxvY2F0aW9uICYmIHBoaW5hLmdsb2JhbC5sb2NhdGlvbi5ocmVmXVxyXG4gICAqIOODh+ODleOCqeODq+ODiOOBp+ODhOOCpOODvOODiOOBq+WQq+OBvuOCjOOCiyBVUkwg44Gn44GZ44CCXHJcbiAgICogXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHVybDogcGhpbmEkMS5nbG9iYWwubG9jYXRpb24gJiYgcGhpbmEkMS5nbG9iYWwubG9jYXRpb24uaHJlZlxyXG5cclxuICAvLyB2aWE6ICdwaGlfanAnLFxyXG59O1xuXG4vKipcclxuICogQGNsYXNzIHBoaW5hLmdhbWUuTWFuYWdlclNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmFwcC5TY2VuZVxyXG4gKi9cclxuY2xhc3MgTWFuYWdlclNjZW5lIGV4dGVuZHMgU2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zZXRTY2VuZXMocGFyYW1zLnNjZW5lcyk7XHJcblxyXG4gICAgdGhpcy5vbihcImVudGVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmdvdG9TY2VuZShwYXJhbXMuc3RhcnRMYWJlbCB8fCAwKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5vbihcInJlc3VtZVwiLCB0aGlzLm9ubmV4dC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmNvbW1vbkFyZ3VtZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2NlbmVzIOOCkuOCu+ODg+ODiFxyXG4gICAqL1xyXG4gIHNldFNjZW5lcyhzY2VuZXMpIHtcclxuICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjZW5l44Kv44Op44K544KS44Kk44Oz44K544K/44Oz44K55YyW44GX44Gm6L+U44GZXHJcbiAgICogXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXHJcbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgX2luc3RhbnRpYXRlU2NlbmUoZGF0YSwgYXJncykge1xyXG4gICAgLy8gU2NlbmXliJ3mnJ/ljJblvJXmlbBcclxuICAgIHZhciBpbml0QXJndW1lbnRzID0gJGV4dGVuZC5jYWxsKHt9LCBkYXRhLmFyZ3VtZW50cywgYXJncyk7XHJcbiAgICAvLyB2YXIgaW5pdEFyZ3VtZW50cyA9IHt9LiRleHRlbmQoZGF0YS5hcmd1bWVudHMsIGFyZ3MpO1xyXG5cclxuICAgIHZhciBzY2VuZSwga2xhc3M7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAvLyBwaGluYS5kZWZpbmXjgIHjgYLjgovjgYTjga9nbG9iYWwod2luZG93KeOBq+ebtOaOpeWumue+qeOBleOCjOOBn+OCr+ODqeOCueOBruaWh+Wtl+WIl1xyXG4gICAgICBrbGFzcyA9IHBoaW5hJDEudXNpbmcoZGF0YS5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAodHlwZW9mIGtsYXNzICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAga2xhc3MgPSBwaGluYSQxLnVzaW5nKCdwaGluYS5nYW1lLicgKyBkYXRhLmNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2NlbmUgPSBrbGFzcy5jYWxsKG51bGwsIGluaXRBcmd1bWVudHMpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5jbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8g6Zai5pWw44Gu5aC05ZCI44CB57SU57KL44GqY2xhc3PjgajopovjgarjgZlcclxuICAgICAgLy8gc2NlbmUgPSBuZXcgZGF0YS5jbGFzc05hbWUoaW5pdEFyZ3VtZW50cyk7XHJcbiAgICAgIGtsYXNzID0gZGF0YS5jbGFzc05hbWU7XHJcbiAgICB9XHJcbiAgICBzY2VuZSA9IG5ldyBrbGFzcyhpbml0QXJndW1lbnRzKTtcclxuXHJcbiAgICBpZiAoIXNjZW5lLm5leHRMYWJlbCkge1xyXG4gICAgICBzY2VuZS5uZXh0TGFiZWwgPSBkYXRhLm5leHRMYWJlbDtcclxuICAgIH1cclxuICAgIGlmICghc2NlbmUubmV4dEFyZ3VtZW50cykge1xyXG4gICAgICBzY2VuZS5uZXh0QXJndW1lbnRzID0gZGF0YS5uZXh0QXJndW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzY2VuZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NlbmXjgq/jg6njgrnjgpLjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZfjgaZhcHDjgatyZXBsYWNlU2NlbmXjgZXjgZvjgotcclxuICAgKiBcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd8bnVtYmVyfSBsYWJlbCDjgrfjg7zjg7Pjga7lr77lv5zjg6njg5njg6tcclxuICAgKiBAcGFyYW0gIHthbnl9IFthcmdzXSBTY2VuZeOBq+OCj+OBn+OBmeW8leaVsOOBjOOBguOCi+WgtOWQiOOBq+aMh+WumlxyXG4gICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICovXHJcbiAgcmVwbGFjZVNjZW5lKGxhYmVsLCBhcmdzKSB7XHJcbiAgICB2YXIgaW5kZXggPSAodHlwZW9mIGxhYmVsID09ICdzdHJpbmcnKSA/IHRoaXMubGFiZWxUb0luZGV4KGxhYmVsKSA6IGxhYmVsfHwwO1xyXG4gICAgaWYgKCF0aGlzLnNjZW5lc1tpbmRleF0pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQuY2FsbCgncGhpbmEuanMgZXJyb3I6IGB7MH1gIOOBq+WvvuW/nOOBmeOCi+OCt+ODvOODs+OBjOOBguOCiuOBvuOBm+OCky4nLCBsYWJlbCkpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNjZW5lID0gdGhpcy5faW5zdGFudGlhdGVTY2VuZSh0aGlzLnNjZW5lc1tpbmRleF0sIGFyZ3MpO1xyXG4gICAgdGhpcy5hcHAucmVwbGFjZVNjZW5lKHNjZW5lKTtcclxuICAgIHRoaXMuc2NlbmVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5kZXgob3IgbGFiZWwpIOOBruOCt+ODvOODs+OBuOmjm+OBtlxyXG4gICAqIHJlcGxhY2VTY2VuZeOBqOOBrumBleOBhOOBr2FwcC5yZXBsYWNlU2NlbmXjgafjga/jgarjgY/jgIFhcHAucHVzaFNjZW5l44KS5a6f6KGM44GZ44KL54K5XHJcbiAgICovXHJcbiAgZ290b1NjZW5lKGxhYmVsLCBhcmdzKSB7XHJcbiAgICB2YXIgaW5kZXggPSAodHlwZW9mIGxhYmVsID09ICdzdHJpbmcnKSA/IHRoaXMubGFiZWxUb0luZGV4KGxhYmVsKSA6IGxhYmVsfHwwO1xyXG4gICAgaWYgKCF0aGlzLnNjZW5lc1tpbmRleF0pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQuY2FsbCgncGhpbmEuanMgZXJyb3I6IGB7MH1gIOOBq+WvvuW/nOOBmeOCi+OCt+ODvOODs+OBjOOBguOCiuOBvuOBm+OCky4nLCBsYWJlbCkpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNjZW5lID0gdGhpcy5faW5zdGFudGlhdGVTY2VuZSh0aGlzLnNjZW5lc1tpbmRleF0sIGFyZ3MpO1xyXG4gICAgdGhpcy5hcHAucHVzaFNjZW5lKHNjZW5lKTtcclxuICAgIHRoaXMuc2NlbmVJbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qyh44Gu44K344O844Oz44G46aOb44G2XHJcbiAgICovXHJcbiAgZ290b05leHQoYXJncykge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdO1xyXG4gICAgdmFyIG5leHRJbmRleCA9IG51bGw7XHJcblxyXG4gICAgLy8g5qyh44Gu44Op44OZ44Or44GM6Kit5a6a44GV44KM44Gm44GE44Gf5aC05ZCIXHJcbiAgICBpZiAoZGF0YS5uZXh0TGFiZWwpIHtcclxuICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmxhYmVsVG9JbmRleChkYXRhLm5leHRMYWJlbCk7XHJcbiAgICB9XHJcbiAgICAvLyDmrKHjga7jgrfjg7zjg7Pjgavpgbfnp7tcclxuICAgIGVsc2UgaWYgKHRoaXMuc2NlbmVJbmRleCsxIDwgdGhpcy5zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5zY2VuZUluZGV4KzE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZ290b1NjZW5lKG5leHRJbmRleCwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmZsYXJlKFwiZmluaXNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44K344O844Oz44Kk44Oz44OH44OD44Kv44K544KS5Y+W5b6XXHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOOCt+ODvOODs+ODqeODmeODq+OCkuWPluW+l1xyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRMYWJlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog44Op44OZ44Or44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gr5aSJ5o+bXHJcbiAgICovXHJcbiAgbGFiZWxUb0luZGV4KGxhYmVsKSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuc2NlbmVzLmZpbHRlcihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIHJldHVybiBkYXRhLmxhYmVsID09IGxhYmVsO1xyXG4gICAgfSlbMF07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2NlbmVzLmluZGV4T2YoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDjgqTjg7Pjg4fjg4Pjgq/jgrnjgYvjgonjg6njg5njg6vjgavlpInmj5tcclxuICAgKi9cclxuICBpbmRleFRvTGFiZWwoaW5kZXgpIHtcclxuICAgIHJldHVybiB0aGlzLnNjZW5lc1tpbmRleF0ubGFiZWw7XHJcbiAgfVxyXG5cclxuICBvbm5leHQoZSkge1xyXG4gICAgdmFyIG5leHRMYWJlbCA9IGUucHJldlNjZW5lLm5leHRMYWJlbDtcclxuICAgIHZhciBuZXh0QXJndW1lbnRzID0gZS5wcmV2U2NlbmUubmV4dEFyZ3VtZW50cztcclxuICAgIGlmIChuZXh0TGFiZWwpIHtcclxuICAgICAgdGhpcy5nb3RvU2NlbmUobmV4dExhYmVsLCBuZXh0QXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmdvdG9OZXh0KG5leHRBcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLkxvYWRpbmdTY2VuZVxyXG4gKiBAZXh0ZW5kcyBwaGluYS5kaXNwbGF5LkRpc3BsYXlTY2VuZVxyXG4gKi9cclxuY2xhc3MgTG9hZGluZ1NjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIExvYWRpbmdTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKHt9KS4kc2FmZShvcHRpb25zLCBwaGluYS5nYW1lLkxvYWRpbmdTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmdhdWdlID0gbmV3IEdhdWdlKHtcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgICBmaWxsOiAnI2FhYScsXHJcbiAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAgIGdhdWdlQ29sb3I6ICdoc2xhKDIwMCwgMTAwJSwgODAlLCAwLjgpJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgIH0pLmFkZENoaWxkVG8odGhpcylcclxuICAgICAgLnNldFBvc2l0aW9uKFxyXG4gICAgICAgIHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAgICAgMCxcclxuICAgICAgKVxyXG4gICAgICAuc2V0T3JpZ2luKFxyXG4gICAgICAgIDAuNSwgXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgLy8gdGhpcy5mcm9tSlNPTih7XHJcbiAgICAvLyAgIGNoaWxkcmVuOiB7XHJcbiAgICAvLyAgICAgZ2F1Z2U6IHtcclxuICAgIC8vICAgICAgIGNsYXNzTmFtZTogJ3BoaW5hLnVpLkdhdWdlJyxcclxuICAgIC8vICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgLy8gICAgICAgICB2YWx1ZTogMCxcclxuICAgIC8vICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogMTIsXHJcbiAgICAvLyAgICAgICAgIGZpbGw6ICcjYWFhJyxcclxuICAgIC8vICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgIC8vICAgICAgICAgZ2F1Z2VDb2xvcjogJ2hzbGEoMjAwLCAxMDAlLCA4MCUsIDAuOCknLFxyXG4gICAgLy8gICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHg6IHRoaXMuZ3JpZFguY2VudGVyKCksXHJcbiAgICAvLyAgICAgICB5OiAwLFxyXG4gICAgLy8gICAgICAgb3JpZ2luWTogMCxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHZhciBsb2FkZXIgPSBuZXcgQXNzZXRMb2FkZXIoKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5saWUpIHtcclxuICAgICAgdGhpcy5nYXVnZS5hbmltYXRpb25UaW1lID0gMTAqMTAwMDtcclxuICAgICAgdGhpcy5nYXVnZS52YWx1ZSA9IDkwO1xyXG5cclxuICAgICAgbG9hZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5nYXVnZS52YWx1ZSA9IDEwMDtcclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2F1Z2UuYW5pbWF0aW9uVGltZSA9IDEwMDtcclxuICAgICAgbG9hZGVyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdGhpcy5nYXVnZS52YWx1ZSA9IGUucHJvZ3Jlc3MgKiAxMDA7XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdhdWdlLm9uZnVsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAob3B0aW9ucy5leGl0VHlwZSA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgdGhpcy5hcHAucG9wU2NlbmUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZsYXJlKCdsb2FkZWQnKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBsb2FkZXIubG9hZChvcHRpb25zLmFzc2V0cyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTG9hZGluZ1NjZW5lLmRlZmF1bHRzID0ge1xyXG4gIGV4aXRUeXBlOiAnYXV0bycsXHJcbiAgbGllOiBmYWxzZSxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLlNwbGFzaFNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBTcGxhc2hTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IFNwbGFzaFNjZW5lLmRlZmF1bHRzO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVGV4dHVyZSgpO1xyXG4gICAgdGV4dHVyZS5sb2FkKGRlZmF1bHRzLmltYWdlVVJMKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZSkuYWRkQ2hpbGRUbyh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS5zZXRQb3NpdGlvbih0aGlzLmdyaWRYLmNlbnRlcigpLCB0aGlzLmdyaWRZLmNlbnRlcigpKTtcclxuICAgIHRoaXMuc3ByaXRlLmFscGhhID0gMDtcclxuXHJcbiAgICB0aGlzLnNwcml0ZS50d2VlbmVyXHJcbiAgICAgIC5jbGVhcigpXHJcbiAgICAgIC50byh7YWxwaGE6MX0sIDUwMCwgJ2Vhc2VPdXRDdWJpYycpXHJcbiAgICAgIC53YWl0KDEwMDApXHJcbiAgICAgIC50byh7YWxwaGE6MH0sIDUwMCwgJ2Vhc2VPdXRDdWJpYycpXHJcbiAgICAgIC53YWl0KDI1MClcclxuICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0sIHRoaXMpXHJcbiAgICAgIDtcclxuICB9XHJcblxyXG59XHJcblxyXG5TcGxhc2hTY2VuZS5kZWZhdWx0cyA9IHtcclxuICBpbWFnZVVSTDogJ2h0dHA6Ly9jZG4ucmF3Z2l0LmNvbS9waGktanAvcGhpbmEuanMvZGV2ZWxvcC9sb2dvLnBuZycsXHJcbn07XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5UaXRsZVNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBUaXRsZVNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSAkc2FmZS5jYWxsKHt9LCBwYXJhbXMsIFRpdGxlU2NlbmUuZGVmYXVsdHMpO1xyXG4gICAgLy8gcGFyYW1zID0gKHt9KS4kc2FmZShwYXJhbXMsIHBoaW5hLmdhbWUuVGl0bGVTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICB0aXRsZUxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogNjQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig0KSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwYXJhbXMuZXhpdFR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgdGhpcy5mcm9tSlNPTih7XHJcbiAgICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICAgIHRvdWNoTGFiZWw6IHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVE9VQ0ggU1RBUlRcIixcclxuICAgICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICAgIHN0cm9rZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oMTIpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIHN0YXRpYyBwcm9wc1xyXG5UaXRsZVNjZW5lLmRlZmF1bHRzID0ge1xyXG4gIHRpdGxlOiAncGhpbmEuanMgZ2FtZXMnLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG5cclxuICBmb250Q29sb3I6ICd3aGl0ZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnaHNsKDIwMCwgODAlLCA2NCUpJyxcclxuICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxyXG5cclxuICBleGl0VHlwZTogJ3RvdWNoJyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLlBhdXNlU2NlbmVcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5EaXNwbGF5U2NlbmVcclxuICovXHJcbmNsYXNzIFBhdXNlU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9ICRzYWZlLmNhbGwoe30sIHBhcmFtcywgUGF1c2VTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBwYXJhbXMgPSAoe30pLiRzYWZlKHBhcmFtcywgcGhpbmEuZ2FtZS5QYXVzZVNjZW5lLmRlZmF1bHRzKTtcclxuICAgIHN1cGVyKHBhcmFtcyk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIHRoaXMuZnJvbUpTT04oe1xyXG4gICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnUGF1c2UnLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA0OCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5jZW50ZXIoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmV4aXRUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblBhdXNlU2NlbmUuZGVmYXVsdHMgPSAge1xyXG4gIGZvbnRDb2xvcjogJ3doaXRlJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdoc2xhKDAsIDAlLCAwJSwgMC44NSknLFxyXG5cclxuICBleGl0VHlwZTogJ3RvdWNoJyxcclxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLlJlc3VsdFNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBSZXN1bHRTY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gJHNhZmUuY2FsbCh7fSwgcGFyYW1zLCBSZXN1bHRTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBwYXJhbXMgPSAoe30pLiRzYWZlKHBhcmFtcywgcGhpbmEuZ2FtZS5SZXN1bHRTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICBzdXBlcihwYXJhbXMpO1xyXG5cclxuICAgIHZhciBtZXNzYWdlID0gZm9ybWF0LmNhbGwocGFyYW1zLm1lc3NhZ2UsIHBhcmFtcyk7XHJcbiAgICAvLyB2YXIgbWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlLmZvcm1hdChwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICBzY29yZVRleHQ6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogTGFiZWwsXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS5kaXNwbGF5LkxhYmVsJyxcclxuICAgICAgICAgIGFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnc2NvcmUnLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA0OCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLnNwYW4oOCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY29yZUxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLnNjb3JlKycnLFxyXG4gICAgICAgICAgICBmaWxsOiBwYXJhbXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBzdHJva2U6IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA3MixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLnNwYW4oOCksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oNiksXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWVzc2FnZUxhYmVsOiB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IExhYmVsLFxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lOiAncGhpbmEuZGlzcGxheS5MYWJlbCcsXHJcbiAgICAgICAgICBhcmd1bWVudHM6IHtcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgICAgZmlsbDogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgc3Ryb2tlOiBudWxsLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDogdGhpcy5ncmlkWC5jZW50ZXIoKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3Bhbig5KSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaGFyZUJ1dHRvbjoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBCdXR0b24sXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS51aS5CdXR0b24nLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiAn4piFJyxcclxuICAgICAgICAgICAgd2lkdGg6IDEyOCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjgsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IDUwLFxyXG4gICAgICAgICAgICBjb3JuZXJSYWRpdXM6IDY0LFxyXG4gICAgICAgICAgICBmaWxsOiAncmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnI2FhYScsXHJcbiAgICAgICAgICAgIC8vIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigtMyksXHJcbiAgICAgICAgICB5OiB0aGlzLmdyaWRZLnNwYW4oMTIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxheUJ1dHRvbjoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBCdXR0b24sXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU6ICdwaGluYS51aS5CdXR0b24nLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiAn4pa2JyxcclxuICAgICAgICAgICAgd2lkdGg6IDEyOCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjgsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogcGFyYW1zLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IDUwLFxyXG4gICAgICAgICAgICBjb3JuZXJSYWRpdXM6IDY0LFxyXG4gICAgICAgICAgICBmaWxsOiAncmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpJyxcclxuICAgICAgICAgICAgLy8gc3Ryb2tlOiAnI2FhYScsXHJcbiAgICAgICAgICAgIC8vIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigzKSxcclxuICAgICAgICAgIHk6IHRoaXMuZ3JpZFkuc3BhbigxMiksXHJcblxyXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBvbnB1c2g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGFyYW1zLmV4aXRUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHRoaXMub24oJ3BvaW50ZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5leGl0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hhcmVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGV4dCA9IGZvcm1hdC5jYWxsKCdTY29yZTogezB9XFxuezF9JywgcGFyYW1zLnNjb3JlLCBtZXNzYWdlKTtcclxuICAgICAgLy8gdmFyIHRleHQgPSAnU2NvcmU6IHswfVxcbnsxfScuZm9ybWF0KHBhcmFtcy5zY29yZSwgbWVzc2FnZSk7XHJcbiAgICAgIHZhciB1cmwgPSBUd2l0dGVyLmNyZWF0ZVVSTCh7XHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICBoYXNodGFnczogcGFyYW1zLmhhc2h0YWdzLFxyXG4gICAgICAgIHVybDogcGFyYW1zLnVybCxcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ3NoYXJlIHdpbmRvdycsICd3aWR0aD00ODAsIGhlaWdodD0zMjAnKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUmVzdWx0U2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgc2NvcmU6IDE2LFxyXG5cclxuICBtZXNzYWdlOiAndGhpcyBpcyBwaGluYS5qcyBwcm9qZWN0LicsXHJcbiAgaGFzaHRhZ3M6ICdwaGluYV9qcyxnYW1lLGphdmFzY3JpcHQnLFxyXG4gIHVybDogcGhpbmEkMS5nbG9iYWwubG9jYXRpb24gJiYgcGhpbmEkMS5nbG9iYWwubG9jYXRpb24uaHJlZixcclxuXHJcbiAgZm9udENvbG9yOiAnd2hpdGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ2hzbCgyMDAsIDgwJSwgNjQlKScsXHJcbiAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxufTtcblxuLyoqXHJcbiAqIOODh+ODleOCqeODq+ODiOOBrmFpbiBjbGFzc1xyXG4gKi9cclxuY2xhc3MgRGVmYXVsdE1haW5TY2VuZSBleHRlbmRzIERpc3BsYXlTY2VuZSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBNYWluU2NlbmUnKTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIOOCr+ODqeOCueOBjHBoaW5hLmRlZmluZeOBq+OCiOOBo+OBpuWumue+qeOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi+OCkui/lOOBl+OBvuOBmVxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSDjgq/jg6njgrnlkI3jgIJwaGluYS5nYW1lW2NsYXNzTmFtZV3jgaflrprnvqnjgZXjgozjgabjgYTjgovjgYvjgoLoqr/jgbnjgotcclxuICogQHJldHVybiB7c3RyaW5nfGJvb2xlYW59IOWumue+qeOBleOCjOOBpuOCjOOBsOOBneOBruOBvuOBvuOCr+ODqeOCueWQjeaWh+Wtl+WIl+OCkui/lOOBmVxyXG4gKi9cclxuZnVuY3Rpb24gaXNHYW1lQ2xhc3NEZWZpbmVkKGNsYXNzTmFtZSkge1xyXG4gIGlmIChcclxuICAgIHR5cGVvZiBwaGluYSQxLnVzaW5nKGNsYXNzTmFtZSkgPT09ICdmdW5jdGlvbidcclxuICAgIHx8IHR5cGVvZiBwaGluYSQxLnVzaW5nKCdwaGluYS5nYW1lLicgKyBjbGFzc05hbWUpID09PSAnZnVuY3Rpb24nXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lXHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBwaGluYS5nYW1lLkdhbWVBcHBcclxuICogQGV4dGVuZHMgcGhpbmEuZGlzcGxheS5DYW52YXNBcHBcclxuICovXHJcbmNsYXNzIEdhbWVBcHAgZXh0ZW5kcyBDYW52YXNBcHAge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gJHNhZmUuY2FsbChvcHRpb25zIHx8IHt9LCB7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHtcclxuICAgICAgc3RhcnRMYWJlbDogJ3RpdGxlJyxcclxuICAgIH0pO1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIHN0YXJ0TGFiZWwgPSBvcHRpb25zLnN0YXJ0TGFiZWwgfHwgJ3RpdGxlJztcclxuXHJcbiAgICB2YXIgc2NlbmVzID0gb3B0aW9ucy5zY2VuZXMgfHwgW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJTcGxhc2hTY2VuZVwiKSB8fCBTcGxhc2hTY2VuZSxcclxuICAgICAgICBsYWJlbDogJ3NwbGFzaCcsXHJcbiAgICAgICAgbmV4dExhYmVsOiAndGl0bGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBpc0dhbWVDbGFzc0RlZmluZWQoXCJUaXRsZVNjZW5lXCIpIHx8IFRpdGxlU2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICd0aXRsZScsXHJcbiAgICAgICAgbmV4dExhYmVsOiAnbWFpbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGlzR2FtZUNsYXNzRGVmaW5lZChcIk1haW5TY2VuZVwiKSB8fCBEZWZhdWx0TWFpblNjZW5lLFxyXG4gICAgICAgIGxhYmVsOiAnbWFpbicsXHJcbiAgICAgICAgbmV4dExhYmVsOiAncmVzdWx0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNsYXNzTmFtZTogaXNHYW1lQ2xhc3NEZWZpbmVkKFwiUmVzdWx0U2NlbmVcIikgfHwgUmVzdWx0U2NlbmUsXHJcbiAgICAgICAgbGFiZWw6ICdyZXN1bHQnLFxyXG4gICAgICAgIG5leHRMYWJlbDogJ3RpdGxlJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgc2NlbmVzID0gZWFjaC5jYWxsKHNjZW5lcywgZnVuY3Rpb24ocykge1xyXG4gICAgICBzLmFyZ3VtZW50cyA9IHMuYXJndW1lbnRzIHx8IG9wdGlvbnM7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc2NlbmUgPSBuZXcgTWFuYWdlclNjZW5lKHtcclxuICAgICAgc3RhcnRMYWJlbDogc3RhcnRMYWJlbCxcclxuICAgICAgc2NlbmVzOiBzY2VuZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5hc3NldHMpIHtcclxuICAgICAgLy8g44Ot44O844OH44Kj44Oz44Kw77yaZXNt54mI44Gn44Gv54us6Ieq44GuTG9hZGluZ1NjZW5l44Gv44Kq44OX44K344On44Oz44Gn5rih44Gb44KL44KI44GG44Gr44GZ44KLXHJcblxyXG4gICAgICB2YXIgbG9hZGluZ09wdGlvbnMgPSAkZXh0ZW5kLmNhbGwoe30sIG9wdGlvbnMsIHtcclxuICAgICAgLy8gdmFyIGxvYWRpbmdPcHRpb25zID0gKHt9KS4kZXh0ZW5kKG9wdGlvbnMsIHtcclxuICAgICAgICBleGl0VHlwZTogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyDjgrDjg63jg7zjg5Djg6vlrprnvqnjga5Mb2FkaW5nU2NlbmXjgpLmjqLjgZnvvIjlvpPmnaXvvIlcclxuICAgICAgLy8gLT4g44Gq44GR44KM44Gw44Kq44OX44K344On44Oz44KS44OB44Kn44OD44KvIFxyXG4gICAgICAvLyAtPiDjgZPjgozjgoLjgarjgZHjgozjgbDjg4fjg5Xjgqnjg6vjg4jjga5Mb2FkaW5nU2NlbmXjgpLkvb/jgYZcclxuICAgICAgdmFyIGRlZmluZWRMb2FkaW5nQ2xhc3MgPSBwaGluYSQxLnVzaW5nKFwiTG9hZGluZ1NjZW5lXCIpIHx8IHBoaW5hJDEudXNpbmcoXCJwaGluYS5nYW1lLkxvYWRpbmdTY2VuZVwiKTtcclxuICAgICAgdmFyIGxvYWRpbmcgPSAodHlwZW9mIGRlZmluZWRMb2FkaW5nQ2xhc3MgPT09ICdmdW5jdGlvbicpIFxyXG4gICAgICAgID8gZGVmaW5lZExvYWRpbmdDbGFzcyhsb2FkaW5nT3B0aW9ucylcclxuICAgICAgICA6IChvcHRpb25zLmxvYWRpbmdTY2VuZSAhPSBudWxsKVxyXG4gICAgICAgICAgPyBuZXcgb3B0aW9ucy5sb2FkaW5nU2NlbmUobG9hZGluZ09wdGlvbnMpIFxyXG4gICAgICAgICAgOiBuZXcgTG9hZGluZ1NjZW5lKGxvYWRpbmdPcHRpb25zKVxyXG4gICAgICA7XHJcbiAgICAgIHRoaXMucmVwbGFjZVNjZW5lKGxvYWRpbmcpO1xyXG5cclxuICAgICAgbG9hZGluZy5vbmxvYWRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucmVwbGFjZVNjZW5lKHNjZW5lKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xyXG4gICAgICAgICAgdGhpcy5fZW5hYmxlRGVidWdnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJlcGxhY2VTY2VuZShzY2VuZSk7XHJcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlRGVidWdnZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiHquWLleOBp+ODneODvOOCuuOBmeOCi1xyXG4gICAgLy8gZXNt54mI44Gn44Gv54us6Ieq44Gu44Od44O844K644K344O844Oz44Gv44Kq44OX44K344On44Oz44Gn5rih44GZXHJcbiAgICAvLyDlvJXmlbDjgYzmuKHjgZvjgarjgYTjga7jga/lhYPjgYvjgolcclxuICAgIGlmIChvcHRpb25zLmF1dG9QYXVzZSkge1xyXG4gICAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRlZmluZWRQYXVzZVNjZW5lID0gcGhpbmEkMS51c2luZyhcInBoaW5hLmdhbWUuUGF1c2VTY2VuZVwiKTtcclxuICAgICAgICB2YXIgcGF1c2VTY2VuZSA9ICh0eXBlb2YgZGVmaW5lZFBhdXNlU2NlbmUgPT09ICdmdW5jdGlvbicpIFxyXG4gICAgICAgICAgPyBkZWZpbmVkUGF1c2VTY2VuZSgpIFxyXG4gICAgICAgICAgOiAob3B0aW9ucy5wYXVzZVNjZW5lKSBcclxuICAgICAgICAgICAgPyBuZXcgb3B0aW9ucy5wYXVzZVNjZW5lKCkgXHJcbiAgICAgICAgICAgIDogbmV3IFBhdXNlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnB1c2hTY2VuZShwYXVzZVNjZW5lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZW5hYmxlRGVidWdnZXIoKSB7XHJcbiAgICBpZiAodGhpcy5ndWkpIHJldHVybiA7XHJcblxyXG4gICAgdGhpcy5lbmFibGVEYXRHVUkoZnVuY3Rpb24oZ3VpKSB7XHJcbiAgICAgIHZhciBmID0gZ3VpLmFkZEZvbGRlcignc2NlbmVzJyk7XHJcbiAgICAgIHZhciBmdW5jcyA9IHt9O1xyXG4gICAgICB0aGlzLnJvb3RTY2VuZS5zY2VuZXMuZm9yRWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAvLyB0aGlzLnJvb3RTY2VuZS5zY2VuZXMuZWFjaChmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAgIGZ1bmNzW3NjZW5lLmxhYmVsXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5yb290U2NlbmUucmVwbGFjZVNjZW5lKHNjZW5lLmxhYmVsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3NjZW5lcy5sZW5ndGgpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gc2NlbmU7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgZm9ySW4uY2FsbChmdW5jcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAvLyBmdW5jcy5mb3JJbihmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgZi5hZGQoZnVuY3MsIGtleSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmLm9wZW4oKTtcclxuXHJcbiAgICAgIHRoaXMuZ3VpID0gZ3VpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG59XG5cbi8qKlxyXG4gKiBAY2xhc3MgcGhpbmEuZ2FtZS5Db3VudFNjZW5lXHJcbiAqIEBleHRlbmRzIHBoaW5hLmRpc3BsYXkuRGlzcGxheVNjZW5lXHJcbiAqL1xyXG5jbGFzcyBDb3VudFNjZW5lIGV4dGVuZHMgRGlzcGxheVNjZW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwob3B0aW9ucyB8fCB7fSwgQ291bnRTY2VuZS5kZWZhdWx0cyk7XHJcbiAgICAvLyBvcHRpb25zID0gKG9wdGlvbnMgfHwge30pLiRzYWZlKHBoaW5hLmdhbWUuQ291bnRTY2VuZS5kZWZhdWx0cyk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aGlzLmZyb21KU09OKHtcclxuICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBMYWJlbCxcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZTogJ3BoaW5hLmRpc3BsYXkuTGFiZWwnLFxyXG4gICAgICAgICAgYXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IG9wdGlvbnMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogb3B0aW9ucy5mb250U2l6ZSxcclxuICAgICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiB0aGlzLmdyaWRYLmNlbnRlcigpLFxyXG4gICAgICAgICAgeTogdGhpcy5ncmlkWS5jZW50ZXIoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5jb3VudCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHRoaXMuY291bnRMaXN0ID0gY2xvbmUuY2FsbChvcHRpb25zLmNvdW50KS5yZXZlcnNlKCk7XHJcbiAgICAgIC8vIHRoaXMuY291bnRMaXN0ID0gb3B0aW9ucy5jb3VudC5jbG9uZSgpLnJldmVyc2UoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmNvdW50TGlzdCA9IHJhbmdlLmNhbGwoW10sIDEsIG9wdGlvbnMuY291bnQrMSk7XHJcbiAgICAgIC8vIHRoaXMuY291bnRMaXN0ID0gQXJyYXkucmFuZ2UoMSwgb3B0aW9ucy5jb3VudCsxKTtcclxuICAgIH1cclxuICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRMaXN0Lmxlbmd0aDtcclxuICAgIHRoaXMuZXhpdFR5cGUgPSBvcHRpb25zLmV4aXRUeXBlO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZUNvdW50KCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlQ291bnQoKSB7XHJcbiAgICB2YXIgZW5kRmxhZyA9IHRoaXMuY291bnRlciA8PSAwO1xyXG4gICAgdmFyIGluZGV4ID0gLS10aGlzLmNvdW50ZXI7XHJcblxyXG4gICAgdGhpcy5sYWJlbC50ZXh0ID0gdGhpcy5jb3VudExpc3RbaW5kZXhdO1xyXG5cclxuICAgIHRoaXMubGFiZWwuc2NhbGUuc2V0KDEsIDEpO1xyXG4gICAgdGhpcy5sYWJlbC50d2VlbmVyXHJcbiAgICAgIC5jbGVhcigpXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgc2NhbGVYOiAxLFxyXG4gICAgICAgIHNjYWxlWTogMSxcclxuICAgICAgICBhbHBoYTogMSxcclxuICAgICAgfSwgMjUwKVxyXG4gICAgICAud2FpdCg1MDApXHJcbiAgICAgIC50byh7XHJcbiAgICAgICAgc2NhbGVYOiAxLjUsXHJcbiAgICAgICAgc2NhbGVZOiAxLjUsXHJcbiAgICAgICAgYWxwaGE6IDAuMFxyXG4gICAgICB9LCAyNTApXHJcbiAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgdGhpcy5mbGFyZSgnZmluaXNoJyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5leGl0VHlwZSA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnBvcFNjZW5lKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkNvdW50U2NlbmUuZGVmYXVsdHMgPSB7XHJcbiAgY291bnQ6IDMsXHJcblxyXG4gIHdpZHRoOiA2NDAsXHJcbiAgaGVpZ2h0OiA5NjAsXHJcblxyXG4gIGZvbnRDb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogMTY0LFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTAsIDUwLCA1MCwgMSknLFxyXG5cclxuICBleGl0VHlwZTogJ2F1dG8nLFxyXG59O1xuXG5leHBvcnQgeyBBY2NlbGVyb21ldGVyLCBBY2Nlc3NvcnksIEFqYXgsIEFzc2V0LCBBc3NldExvYWRlciwgQXNzZXRNYW5hZ2VyLCBCYXNlQXBwLCBCdXR0b24sIENhbnZhcywgQ2FudmFzQXBwLCBDYW52YXNMYXllciwgQ2FudmFzUmVuZGVyZXIsIENoYW5nZURpc3BhdGNoZXIsIENpcmNsZSwgQ2lyY2xlR2F1Z2UsIENpcmNsZVNoYXBlLCBDb2xsaXNpb24sIENvbG9yLCBDb3VudFNjZW5lLCBEaXNwbGF5RWxlbWVudCwgRGlzcGxheVNjZW5lLCBEb21BcHAsIERyYWdnYWJsZSwgRWxlbWVudCwgRXZlbnREaXNwYXRjaGVyLCBGaWxlLCBGbGlja2FibGUsIEZsb3csIEZvbnQsIEZyYW1lQW5pbWF0aW9uLCBHYW1lQXBwLCBHYW1lcGFkTWFuYWdlciwgR2F1Z2UsIEdyaWQsIEhlYXJ0U2hhcGUsIElucHV0LCBJbnRlcmFjdGl2ZSwgS2V5Ym9hcmQsIExhYmVsLCBMYWJlbEFyZWEsIExheWVyLCBMb2FkaW5nU2NlbmUsIE1hbmFnZXJTY2VuZSwgTWF0cml4MzMsIE1vdXNlLCBPYmplY3QyRCwgUGF0aFNoYXBlLCBQYXVzZVNjZW5lLCBQaHlzaWNhbCwgUGxhaW5FbGVtZW50LCBQb2x5Z29uU2hhcGUsIFF1ZXJ5U3RyaW5nLCBSYW5kb20sIFJlY3QsIFJlY3RhbmdsZVNoYXBlLCBSZXN1bHRTY2VuZSwgU2NlbmUsIFNjcmlwdCwgU2hhcGUsIFNvdW5kTWFuYWdlciwgU3BsYXNoU2NlbmUsIFNwcml0ZSwgU3ByaXRlU2hlZXQsIFN0YXJTaGFwZSwgU3VwcG9ydCwgVGV4dHVyZSwgVGhyZWVMYXllciwgVGlja2VyLCBUaXRsZVNjZW5lLCBUb3VjaCwgVG91Y2hMaXN0LCBUcmlhbmdsZVNoYXBlLCBUd2VlbiwgVHdlZW5lciwgVHdpdHRlciwgVXBkYXRlciwgVmVjdG9yMiwgVmVjdG9yMywgV2F2ZSwgcGhpbmEkMSBhcyBwaGluYSB9O1xuIiwiZXhwb3J0IGNvbnN0IEFzc2V0Q2F0YWxvZyA9IHtcbiAgaW1hZ2U6IHtcbiAgICBcInRvbWFwaXlvXCI6IFwiLi9hc3NldHMvaW1hZ2VzL3RvbWFwaXlvLnBuZ1wiLFxuICB9XG59OyIsIlxuLyoqXG4gKiBAbWV0aG9kICAkc2FmZVxuICog5a6J5YWo5ouh5by1XG4gKiDkuIrmm7jjgY3jgZfjgarjgYRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzYWZlKHNvdXJjZSkge1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICBpZiAodGhpc1twcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkgdGhpc1twcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfSwgdGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuICAiLCJpbXBvcnQgeyBwaGluYSwgQ2FudmFzQXBwLCBEaXNwbGF5U2NlbmUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyBTY2VuZUZsb3cgfSBmcm9tIFwiL3NyYy9zY2VuZXMvU2NlbmVGbG93XCJcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgY29uc29sZS5sb2coJyMjIyMjIERldmVsb3BtZW50IG1vZGUgIyMjIyMnKTtcbn1cblxuRGlzcGxheVNjZW5lLmRlZmF1bHRzLndpZHRoID0gOTYwO1xuRGlzcGxheVNjZW5lLmRlZmF1bHRzLmhlaWdodCA9IDY0MDtcblxucGhpbmEubWFpbigoKT0+IHtcbiAgY29uc3QgYXBwT3B0aW9uID0ge1xuICAgIHdpZHRoOiA5NjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZnBzOiA2MCxcbiAgfTtcbiAgY29uc3QgYXBwID0gbmV3IENhbnZhc0FwcChhcHBPcHRpb24pO1xuICBhcHAucmVwbGFjZVNjZW5lKG5ldyBTY2VuZUZsb3coKSk7XG4gIGFwcC5ydW4oKTtcbn0pO1xuIiwiaW1wb3J0IHsgRGlzcGxheVNjZW5lLCBTcHJpdGUgfSBmcm9tIFwicGhpbmEuanMvYnVpbGQvcGhpbmEuZXNtXCI7XG5pbXBvcnQgeyAkc2FmZSB9IGZyb20gXCIuLi9leHRlbnNpb25zL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBEaXNwbGF5U2NlbmUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICRzYWZlLmNhbGwoe30sIG9wdGlvbnMsIHsgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snIH0pO1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFNwcml0ZShcInRvbWFwaXlvXCIsIDY0LCA2NClcbiAgICAgIC5hZGRDaGlsZFRvKHRoaXMpXG4gICAgICAuc2V0RnJhbWVJbmRleCgwKVxuICAgICAgLnNldFBvc2l0aW9uKHRoaXMud2lkdGgvMiwgdGhpcy5oZWlnaHQvMik7XG4gIH1cblxuICB1cGRhdGUoYXBwKSB7XG4gICAgaWYgKGFwcC5wb2ludGVyLmdldFBvaW50aW5nKCkpIHtcbiAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKGFwcC5wb2ludGVyLngsIGFwcC5wb2ludGVyLnkpXG4gICAgfVxuICB9XG59XG5cbi8vTWFuYWdlclNjZW5l44Gn5L2/55So5Ye65p2l44KL5qeY44Gr44GZ44KL54K6XG4vLyB3aW5kb3cuTWFpblNjZW5lID0gTWFpblNjZW5lO1xuIiwiaW1wb3J0IHsgTG9hZGluZ1NjZW5lLCBNYW5hZ2VyU2NlbmUsIERpc3BsYXlTY2VuZSwgVGl0bGVTY2VuZSB9IGZyb20gXCJwaGluYS5qcy9idWlsZC9waGluYS5lc21cIjtcbmltcG9ydCB7IEFzc2V0Q2F0YWxvZyB9IGZyb20gXCIuLi9hc3NldHMvQXNzZXRDYXRhbG9nXCI7XG5pbXBvcnQgeyBNYWluU2NlbmUgfSBmcm9tIFwiLi9NYWluU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFNjZW5lRmxvdyBleHRlbmRzIE1hbmFnZXJTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIHN0YXJ0TGFiZWw6IFwibG9hZGluZ1wiLFxuICAgICAgc2NlbmVzOiBbe1xuICAgICAgICBsYWJlbDogXCJsb2FkaW5nXCIsXG4gICAgICAgIGNsYXNzTmFtZTogTG9hZGluZ1NjZW5lLFxuICAgICAgICBuZXh0TGFiZWw6IFwidGl0bGVcIixcbiAgICAgICAgYXJndW1lbnRzOiB7XG4gICAgICAgICAgYXNzZXRzOiBBc3NldENhdGFsb2csXG4gICAgICAgIH0sXG4gICAgICB9LHtcbiAgICAgICAgbGFiZWw6IFwidGl0bGVcIixcbiAgICAgICAgY2xhc3NOYW1lOiBUaXRsZVNjZW5lLFxuICAgICAgICBuZXh0TGFiZWw6IFwibWFpblwiLFxuICAgICAgfSx7XG4gICAgICAgIGxhYmVsOiBcIm1haW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBNYWluU2NlbmUsXG4gICAgICAgIG5leHRMYWJlbDogXCJ0aXRsZVwiLFxuICAgICAgfV0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9