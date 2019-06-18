let timeout = () => {
  setTimeout(() => {
    console.log("executed after 2sec");
  }, 2000);
};
timeout();
console.log("Executed before the timeout function")