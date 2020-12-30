import { isObject } from '@/utils/is';

export function deepMerg(src, target) {
  let key;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerg(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}