
console.log('hello world');

require('./build/asdf.js').main().then((result) => {
  console.log('run.js done', result);
});
