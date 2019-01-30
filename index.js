
function distanceFromHqInBlocks(block){
  if (block > 42){
    return block - 42
    }
  else {
   return 42 - block
   }
 }
 function distanceFromHqInFeet(amountOfBlocks){
     return distanceFromHqInBlocks(amountOfBlocks) * 264;
 }

 function distanceTravelledInFeet (pointBlockA, pointBlockB){
     return pointBlockA > pointBlockB ? (pointBlockA - pointBlockB) * 264 : (pointBlockB - pointBlockA) * 264
  }
  function calculatesFarePrice (pointBlockA, pointBlockB){
      const amountOfFeet = distanceTravelledInFeet(pointBlockA, pointBlockB)
      if (amountOfFeet <= 400) {
          return 0;
        } else if (amountOfFeet > 400 && amountOfFeet <= 2000) {
          return 0.02 * (amountOfFeet - 400);
        } else if (amountOfFeet > 2000 && amountOfFeet < 2500) {
          return 25;
        } else {
          return 'cannot travel that far';
      }
  }
