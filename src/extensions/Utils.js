/**
 * @method  $extend
 * 他のライブラリと競合しちゃうので extend -> $extend としました
 */
export function $extend() {
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
export function $safe(source) {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      if (this[property] === undefined) this[property] = source[property];
    }
  }, this);
  return this;
}
