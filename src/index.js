module.exports = function check(str, bracketsConfig) {
  if (arguments.length == 0) return false;
  let a = [];
  for (let i = 0; i < str.length; i++) {
    a.push(str[i]);
    if (a.length > 0) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (
          a[a.length - 1] == bracketsConfig[j][1] &&
          a[a.length - 2] == bracketsConfig[j][0]
        ) {
          a.pop();
          a.pop();
        }
      }
    }
  }
  if (a.length == 0) return true;
  return false;
};
