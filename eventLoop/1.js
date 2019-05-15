const enterTime = Date.now();

function sleep(time) {
  for (const temp = Date.now(); Date.now() - temp <= time;) {
  }
}

setTimeout(function () {
  const exeTime = Date.now();
  console.log(exeTime - enterTime)
}, 300);

sleep(1000);