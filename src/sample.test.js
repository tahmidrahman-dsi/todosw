/***********************************************   Test Promise **********************************************************/
var fetchData = () => {
  return new Promise((resolved, rejected) => {
    let a = 10;
    setTimeout(a+=10,2000);

   if(a===25) {
     resolved('Promise Fulfilled!');
   } else {
     rejected('Promise did not fulfill!');
   }
});
}

test('Promise Test with Timeout', async () => {
  expect.assertions(1);
  try {
    const data = await fetchData();
  } catch(e) {
    expect(e).toBe('Promise did not fulfill!');
  }

});

/***********************************************   Test Async **********************************************************/

var asyncFunction = (callback,timeInterval) => {
    setTimeout(()=> callback(),timeInterval);
}

test('AyncCallBack Test', done => {
  function callback(data) {
    expect(data).toBe('Async Passed');
    done();
  }
  asyncFunction(callback('Async Passed'),2000);
});


beforeEach(() => console.log('TEST WILL START'));
afterEach(() => console.log('TEST FINISHED'));
