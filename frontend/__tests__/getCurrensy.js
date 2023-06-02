function getCurrency(count, words = ["рублей", "рубль", "рубля"]) {
  if (count % 100 > 5 && count % 100 <= 20) {
    return `${count} ${words[0]}`;
  }
  if (count % 10 > 1 && count % 10 < 5) {
    return `${count} ${words[2]}`;
  }
  if (count % 10 == 1) {
    return `${count} ${words[1]}`;
  }
  return `${count} ${words[0]}`;
}

module.exports = getCurrency;
