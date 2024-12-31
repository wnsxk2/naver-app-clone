module.exports = {
  root: true,
  extends: '@react-native',
  // window, prettier의 개행문자가 다르기 때문에 auto 옵션 추가
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
