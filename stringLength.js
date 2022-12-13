const stringLength = (str) => {
  if (str.length <= 0 || str.length > 10) {
    throw new Error('Invalid string!');
  } else return str.length;
};

module.exports = stringLength;
