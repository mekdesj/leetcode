function sleep(millis) {
  return new Promise(resolve => {
    setTimeout(resolve, millis);
  });
}

// Example usage
async function main() {
  let t = Date.now();

  await sleep(100);  // sleep for 100 ms

  console.log(Date.now() - t); // ~100
}

main();