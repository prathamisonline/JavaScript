const todos = [];

const todos1 = {
  task: "dishes",
  completed: true,
};

const todos2 = {
  task: "laundry",
  completed: false,
};
todos.push(todos1, todos2);
console.log(todos);
