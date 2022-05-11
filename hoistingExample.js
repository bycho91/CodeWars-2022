function x() {
  for (var i = 0; i <= 5; i++) {
    function closure(num) {
      setTimeout(() => {
        console.log(num);
      }, num * 1000);
    }
    closure(i);
  }

  console.log("this will run first");
}

x();
