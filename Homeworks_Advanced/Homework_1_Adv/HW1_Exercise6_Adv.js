function updateString(str) {
  let rightStr = str.substring(0, str.length - Math.floor(str.length % 3))
  let nStr = ''
  for (let i = 0; i <= rightStr.length - 2; i += 3) {
    nStr += rightStr[i + 1] + rightStr[i + 2] + rightStr[i]
  }
  return nStr
}
console.log(updateString('dfgjkloyp'))
