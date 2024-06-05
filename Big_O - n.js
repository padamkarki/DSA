const nemo = ["nemo"];
const everyone = ["dory", "nemo", "mory"];
const largeArr = new Array(100000).fill("nemo");

function findNemo(arr) {
  let t0 = performance.now(); //time taken till now
  for (let i = 0; i < arr.length; i++) {
    console.log("running");
    if (arr[i] === "nemo") {
      console.log("Found Nemo!");
      break; //if not used, it will even check after finding nemo for more nemo
    }
  }
  let t1 = performance.now();
  console.log("Time Took " + (t1 - t0) + " miliseconds");
}

findNemo(everyone);
