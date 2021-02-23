console.log('First')

setTimeout(function () {
  console.log('Second')
}, 0)

new Promise(function (res) {
  res('Third')
}).then(console.log)

console.log('Fourth')

/*
First
Fourth
Third
Second

Even though the setTimeout was 
before the Promise.then, because 
Promise jobs are put in the Job Queue 
which has a higher priority than the
 Task Queue, Third is logged to the 
 console before Second.
*/