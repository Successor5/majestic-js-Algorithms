function reverseString(input) {
    let reversed = "";
    
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
  
    return reversed;
  }
  let str = "Hello";
  let result = reverseString(str);
  console.log(result);