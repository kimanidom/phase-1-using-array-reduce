const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

console.log(totalBatteries); // Output: 31
