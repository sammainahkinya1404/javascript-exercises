let time3=3;
let word1="hey";
 function  repeatString (word, times) {
  word=word1;
  times=time3;


  if (times < 0){
    return "ERROR";
  }
  else{
    let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  
  return string;
  }
  
};
}
module.exports = repeatString;
