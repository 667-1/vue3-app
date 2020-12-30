const toString = Object.prototype.toString;

export function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

export function isString(val) {
  return is(val, 'String');
}

export const isObject = val => {
  return val !== null && is(val, 'object')
}

export const isFunction = val => typeof val === 'function';