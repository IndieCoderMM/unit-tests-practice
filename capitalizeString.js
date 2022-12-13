const capitalize = (str) => {
  const arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
};

module.exports = capitalize;
