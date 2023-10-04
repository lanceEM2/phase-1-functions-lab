// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if(block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
      } else {
        return (start - destination) * 264;
      }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400) {
        return 0;
    } else if (400 <= distance && distance <= 2000) {
        return 0.02 * (distance - 400);
    } else if (2000 <= distance && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}