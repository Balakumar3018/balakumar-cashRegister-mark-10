const billAmount=document.querySelector("#bill-amount");
const givenAmount=document.querySelector("#cash-given-amount");
const btnCheck=document.querySelector("#btn-check");
const message=document.querySelector("#message-display")
const NotesCountElement=document.querySelectorAll(".NotesCount");

const availableNotesList=["2000","500","100","20","10","5","1"]

btnCheck.addEventListener("click", function CalculateCashReg(){
            message.style.display="none";
            if (billAmount.value > 0) {
                if (billAmount.value <=  givenAmount.value) {

                    let remainingAmount=givenAmount.value - billAmount.value;
                    CalculateNotes(remainingAmount);
                    
                }
                else messageDisplay("Cash given is less than bill amount") ;
            }
            else messageDisplay("Invalid Enter valid bill amount") ;

});

function messageDisplay(msg){
    message.style.display="block";
    message.innerText=msg;
}
function CalculateNotes(remainingAmount){

    for(let i=0;i<availableNotesList.length ;i++){
        console.log("remainingAmount"+availableNotesList[i])
        const NumberOfNotesAdd=Math.trunc(remainingAmount / availableNotesList[i]);
        remainingAmount=remainingAmount % availableNotesList[i];
        NotesCountElement[i].innerText=NumberOfNotesAdd;
    }
}