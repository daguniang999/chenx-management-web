function toHexArray(number, hex, type = 0, length=0) {
  let str = Number(number).toString(hex);
  let array = str.split("");
  if (type == 1) {
    // 返回指定位数的二进制数
    while(array.length < length) {
      array.splice(0, 0, "0");
    }
  } else if (type == 2) {

  }

  return array;
}

function numberToBool(list) {
  // for () {
    
  // }
}

export default {
  toHexArray,
}