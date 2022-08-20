/**
 * 
 * @param {Number} money 
 * @param {String} split 
 * @returns 
 */
export function formatMoney(money, split = ",", fixedDight = 2) {
  var str = money.toFixed(fixedDight).toString();
  const parts = str.split(".");
  let part1 = parts[0]; // 左边整数
  const part2 = parts[1]; // 右边小数
  part1 = part1.replace(/(?=(\d{3})+$)/g, split);
  return `${part1}.${part2}`;
} 