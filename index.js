// Code your solution in this file!
function distanceFromHqInBlocks(d){
  return Math.abs(d - 42)
}

function distanceFromHqInFeet(d){
  return distanceFromHqInBlocks(d)*264
}

function distanceTravelledInFeet(startBlock,endBlock){
 return Math.abs(startBlock - endBlock)*264
}

function calculatesFarePrice(startBlock,endBlock){
   const d = distanceTravelledInFeet(startBlock,endBlock);
   let fare=0
   if(d > 2500){
     console.log("THERRE!!!")
     fare="cannot travel that far"
   }else if(d>400 && d<=2000){
     console.log("HERE")
     const priceFor400Feet=400*(0.02)
     fare=d*(0.02)
     fare-=priceFor400Feet
     fare=Math.round(fare*100)/100
   }else if(d >= 2000){
     console.log("THERE")
     fare=25
     fare=Math.round(fare*100)/100
   }else{
     fare=0
   }
  return fare;
}
