import json from 'rollup-plugin-json';
export default {
  input: 'src/main.js',
  output: [
    // 文件输出配置
    {
        file: 'dist/index.es.js', 
        format: 'es',
    },
    {
        file: 'dist/index.cjs.js',
        format: 'cjs',
    }
  ],
  plugins: [json()],
};