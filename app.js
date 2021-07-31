//Selectors
const purchasePrice=document.getElementById("purchase-price");
const numOfStocks=document.getElementById("num-of-stocks");
const currentPrice=document.getElementById("current-price");
const checkBtn=document.getElementById("check-btn");
const show=document.querySelector(".show");
const illustrate=document.querySelector(".illustrate");
const container=document.querySelector(".container");

// Event listeners
checkBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(purchasePrice.value<=0 || currentPrice.value<=0 ||purchasePrice.value=="" || currentPrice.value<=0 || numOfStocks.value<=0 || numOfStocks.value==""){
        show.style.color="red";
        show.innerText="Please enter price greater than 0";
        container.style.background="#abe9cd";
        container.style.backgroundImage="linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);"
        show.textContent="";
        illustrate.textContent="";
    }
    else{
        container.style.background="#abe9cd";
        container.style.backgroundImage="linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);"
        checkPL();
    }
})
// Calculate profit andd loss
function checkPL(){
    let CP=Number(purchasePrice.value);
    let SP=Number(currentPrice.value);
    let stocks=Number(numOfStocks.value);
    if(CP>SP){
        let loss=((CP-SP)/CP)*100;   //checks loss
        //console.log(loss);
        if(loss>=50){
            //console.log(loss);
            changeTheme();
        }
        show.style.color="black";
        show.textContent=`You lost ${loss.toFixed(2)}%. Your total loss is ₹${(CP-SP)*stocks}`
        illustrate.innerHTML='<img width="100%" src="loss.svg">'
        
    }
    else if(CP<SP){
        let profit=((SP-CP)/CP)*100;    // Checks profit
        show.style.color="black";
        show.textContent=`You gained ${profit.toFixed(2)}%. Your total profit is ₹${(SP-CP)*stocks}`
        illustrate.innerHTML='<img width="100%" src="profit.svg">'
    }
    else if(CP===SP){
        show.style.color="black";
        show.textContent=`You have made no profit no loss!`;
        illustrate.innerHTML='<img width="100%" src="noprofitnoloss.svg">'

        
    }
    
}
//Change the theme if loss is  greater than 50%
function changeTheme(){                         
    container.style.background='#7f5a83';
    
   
    
} 