// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  let hq = 42;
  const result = distance > hq ? (distance - hq) : (hq - distance);
  return result;
}

function distanceFromHqInFeet(distance){
  const block = distanceFromHqInBlocks(distance);
  const feet = block * 264;
  return feet;
}

function distanceTravelledInFeet(from,to){
  const block = from > to ? (from - to) : (to - from);
  const feet =  block * 264;
  return feet;
}

function calculatesFarePrice(start, destination){
  let result;
  const feet = distanceTravelledInFeet(start,destination);
  if (feet <= 400){
    result = 0;
  }else if (feet > 400 && feet <= 2000){
      const newFeet = feet - 400;
      result = newFeet * 0.02;
  }else if (feet > 2000 && feet <= 2500) {
    result = 25;
  }else {
    result = 'cannot travel that far';
  }
  return result;
}
