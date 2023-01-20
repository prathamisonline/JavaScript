const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

// const newTemps = temperatures.map((temperature) => {
//   temperature.isHigh = true;
//   return temperature;
// });

// const conditonalMap = temperatures.map((temperature) => {
//   if (temperature.degrees > 70) {
//     temperature.isHigh = true;
//   } else {
//     temperature.isHigh = false;
//   }
//   return temperatures;
// });

// Better way

const newTemps = temperatures.map((temperature) =>
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);
console.log(newTemps);

newTemps.forEach((temperature) => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was record high last week`);
  }
});

// By channing map and foreach

// temperatures
//   .map((temperature) =>
//     temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
//   )
//   .forEach((temperature) => {
//     temperature.isHigh
//       ? console.log(
//           `temerature ${temperature.degrees} was very high on last week`
//         )
//       : temperature;
//   });
