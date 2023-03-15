let string = "";
let buttons = document.getElementsByClassName("button");

    Array.from(buttons).forEach((buttons)=>{
        buttons.addEventListener('click',(e)=>{
            if(e.target.innerHTML == '='){
                try {
                    string = eval(string);
                    document.getElementById("input").value = string;
                    
                } catch (error) {
                    string ="";
                    document.getElementById("input").value ="please enter a valid no."  
                }
               
            }
            else{
                console.log(e.target);
                string += e.target.innerHTML;
                document.getElementById("input").value = string; 
    
            }
        })
    })



    

let but = document.getElementById('but');
but.addEventListener('click',()=>{
    string = "";
    document.getElementById("input").value =string;
})
