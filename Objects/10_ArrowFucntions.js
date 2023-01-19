const userData = {
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    // let that = this;
    setTimeout(() => {
      console.log(`would you like to be friend of ${this.username}`);
    });
  },
};

// userData.getBio();
userData.askToFriend();
