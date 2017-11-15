
import React from 'react';
import ReactDOM from 'react-dom';


function timeout(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, amount);
  });
}


export async function main() {
  console.log('before');
  await timeout(2000);
  console.log('after');
}

console.log('hello test');

