export default {
  '*.{js,ts,jsx,tsx,vue}': 'eslint --fix --cache',
  '**/*': 'prettier --write --ignore-unknown',
};
