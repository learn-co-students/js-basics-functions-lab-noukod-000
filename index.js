// Code your solution in this file!
function distanceFromHqInBlocks(bl) {
    if (bl > 42) {
        return (bl - 42);
    } else {
        return (42 - bl);
    }
}

function distanceFromHqInFeet(bl) {
    return (distanceFromHqInBlocks(bl) * 264);
}

function distanceTravelledInFeet(a, b) {
    distance = (a >= b)? a - b : b - a;
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let cost;

  switch(true) {
    case (distance <= 400):
      cost = 0
      break;
    case (distance > 400 && distance <= 2000):
      cost = ((distance - 400) * 0.02)
      break;
    case (distance > 2000 && distance <= 2500):
      cost = 25
      break;
    default:
      return "cannot travel that far"
  };

  return cost;
}
