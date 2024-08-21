let box =$("#box")
let input=$("input")
let submitButton =$("#submit")
let resetBtn = $("#reset")
let heading = $("h1")
heading.css("backgroundColor","white")
const Input = $("#input");
function userInputText(){
  const userInput = input.val();
  if(userInput!=""){
    box.css("backgroundColor", userInput)
    heading.text(userInput)
    heading.css("color",userInput)
  }
  else{
    heading.text("User type in your favourite to appear in this box!")
  }
   
}
submitButton.on("click",function(){
    userInputText()

})
resetBtn.on("click", function(){
    input.val("")
    box.css("backgroundColor","")
    heading.text("");
    heading.css("color","")

})
