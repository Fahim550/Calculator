const inpute=document.getElementById("result")
const button = document.querySelectorAll("button");
// console.log("lenght",button.length)
let string="";

   button.forEach(number => {
    
        number.addEventListener('click',(event)=>{
            // alert(event.target.innerText);
            let btntex=event.target.innerText;
            inpute.value += btntex;
            // console.log(inpute.value)

            if(btntex=="AC"){
                string="";
                inpute.value=string;

            }
            else if(btntex=="Sqrt"){
                string=Math.sqrt(string);
                inpute.value=string;
            }
            else if (btntex=="="){
                string=eval(string);
                inpute.value=string;
            }
            else if(btntex=="DEL"){
                string=string.toString().slice(0,-1);
                inpute.value=string;
            }
            else{
                string+=btntex;
                inpute.value=string
            }
        })
    
   });