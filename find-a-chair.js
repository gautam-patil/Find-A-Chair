let coWorkingSpace = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]]
let chairs = []
let sumOfChairs = 0;

const CalculateChairsAvailable = (coWorkingSpace,chairNeeded) => {

    if(chairNeeded === 0) {
        return 1
    }
  
  for(let space of coWorkingSpace) {
     let peoples = space[0].length
     let totalChairs = space[1]

    if(sumOfChairs < chairNeeded) {
      
      if(peoples >= totalChairs) {
        chairs.push(0)
      }
      
      if(peoples < totalChairs) {
        chairs.push(totalChairs - peoples)
        sumOfChairs += (totalChairs - peoples)
      }
    }
    
  }
      if(sumOfChairs < chairNeeded) {
        return 0
      } else {
        return chairs
      }
}

console.log(CalculateChairsAvailable(coWorkingSpace,4))