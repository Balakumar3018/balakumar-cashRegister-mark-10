const billAmount=document.querySelector("#bill-amount");
const givenAmount=document.querySelector("#cash-given-amount");
const btnCheck=document.querySelector("#btn-check");
const message=document.querySelector("#message-display")
const NotesCountElement=document.querySelectorAll(".NotesCount");

const availableNotesList=["2000","500","100","20","10","5","1"]

btnCheck.addEventListener("click", function CalculateCashReg(){
            message.style.display="none";
            const billamnt=Number(billAmount.value);
            const givenamnt=Number(givenAmount.value);
            if(billamnt >0 && givenamnt >0){
            if (billamnt> 0) {
                if (billamnt <= givenamnt) {

                    let remainingAmount=givenamnt - billamnt;
                    CalculateNotes(remainingAmount);
                    
                }
                else messageDisplay("Cash given is less than bill amount") ;
            }
            else messageDisplay("Invalid Enter valid bill amount") ;
        }
        else{
            messageDisplay("please enter positve inputs") ;
        }

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