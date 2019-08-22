// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}
  
function distanceTravelledInFeet (start, end) {
  //returns the number of blocks given a value
  return (Math.abs(start - end) * 264);
}

function calculatesFarePrice (start, end) {
  
}