// Challenge:
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
  music: "jazz",
  name: "Paris House",
};

const newMap = new Map([
  ["music", "jazz"],
  ["name", "Paris House"],
]);

newMap.set("visited", true);
newMap.set("average ", 500);
console.log(newMap);

console.log(newMap.get("name"));
