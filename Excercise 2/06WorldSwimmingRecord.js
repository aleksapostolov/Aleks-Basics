function swimmingRecord(input) {
const worldRecordInSeconds = Number(input[0]);
const distanceInMeters = Number(input[1]);
const timeInSecondsPerMeter = Number(input[2]);

const timePerDistance = distanceInMeters * timeInSecondsPerMeter;
const additionalTime = Math.floor (distanceInMeters / 15) * 12.5;
const totalTime = timePerDistance + additionalTime;
const timeDifference = Math.abs (worldRecordInSeconds - totalTime);
if (totalTime < worldRecordInSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`)
    }
}
swimmingRecord(["55555.67","3017","5.03"]);
