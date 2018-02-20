function solution(input, markers){
  let splitInput = input.split('\n')

  for(let i = 0; i < splitInput.length; i++){
    for(let j = 0; j < splitInput[i].length; j++){
      debugger
      if(markers.indexOf(splitInput[i][j]) != -1){
       splitInput[i] = splitInput[i].substring(0, j).trim()
      }
    }
  }
  return splitInput.join('\n')
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
