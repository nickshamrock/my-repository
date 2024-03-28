const numbers = [1, 2, 3, 3, 4, 4];
const results = numbers.map(number => number * 2); 
console.log(results);

//стрелочная функция 

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );

  const sum = function(a, b) {
    a + b;
  }

  console.log(sum); 