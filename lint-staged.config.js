export default {
  '*.{js,cjs,mjs,ts,jsx,tsx,vue}': 'eslint --fix --cache',
  '**/*': 'prettier --write --ignore-unknown',
};
