var version = "1.0.0";

// import foo from './foo.js';
function test1() {
  console.log('version：' + version );
}

export { test1 as default };
