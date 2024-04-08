let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset_btn");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector(".msg");
let gamenew=document.querySelector("#new_game");
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;
let turn_O=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn_O){
            box.innerHTML="O";
            turn_O=false;
        }else{
            box.innerHTML="X";
            turn_O=true;
        }
        count++;
        checkWinner();
        box.disabled=true;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
        draw_msg();
}
    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const draw_msg=()=>{
    msg.innerText=`It's a draw!!`;
    msg_container.classList.remove("hide");
    disableboxes();
}

function checkWinner(){
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                 msg_container.classList.remove("hide");
                 msg.innerText=`Congratulations!! the winner is ${pos1}`;
                 return true;
                disableboxes();
            }
        }
         
    }
}
const reset_game=()=>{
    turn_O=true;
    enableboxes();
    count=0;
    msg_container.classList.add("hide");
}
reset.addEventListener("click",reset_game);
gamenew.addEventListener("click",reset_game);