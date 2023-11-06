const RangeForm = document.querySelector("#input-number");
const RangeNumber = document.querySelector("#input-number input");
const YourForm = document.querySelector("#your-number");
const YourNumber = document.querySelector("#your-number input");
const playBtn = document.querySelector(".play")
const select = document.querySelector("#select");
const result = document.querySelector("#result");

document.querySelector("body").style.fontFamily = "Times New Roman";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("#result").style.fontWeight = "bold";

function NumSubmit(event){
    event.preventDefault();
    select.innerText = "";
    result.innerText = "";
    
    
    const MachineNum = RangeNumber.value;
    const UserNum = YourNumber.value;
    console.log(MachineNum);
    console.log(UserNum)
    if (MachineNum == "" || UserNum ==""){
        alert("Please enter all values!");
    }
    else if (MachineNum < UserNum){
        alert("Do not enter values that are out of range.")
    }
    else {
    const RandomNum = Math.round(Math.random()*MachineNum);
    select.innerText = `You chose: ${UserNum}, the machine chose: ${RandomNum}.`;

        if (RandomNum == UserNum){
            result.style.color = "red";
            result.innerText = "You win!";
        }
        else {
            result.style.color = "grey";
            result.innerText = "You lost!";
            
        }
    }   
    MachineNum == null;
    UserNum == null; 
}
playBtn.addEventListener("click", NumSubmit);

