// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) *264;
}

function distanceTravelledInFeet (uptown, downtown) {
  return Math.abs(downtown - uptown)  * 264
}
