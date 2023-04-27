const myname = "Andy";
localStorage.setItem("name", myname);

const userName = {name: "Tresor"};
localStorage.setItem("user", userName);

// Converting to JSON
const user = {name: "Tresor"};
localStorage.setItem("user", JSON.stringify(user));

localStorage.getItem("user");

console.log(user);