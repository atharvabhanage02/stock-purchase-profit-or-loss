const inputValue = document.querySelector("#initial-input")
const quantityStk = document.querySelector("#quantity-of-stocks")
const currentPrice = document.querySelector("#current-price")
const btnCheck = document.querySelector("#btn-check")
const output = document.querySelector("#output")


function calculateProfitOrLoss(initial,qty,current){
    if(initial>current){
        var loss = (initial-current)*qty;
        var lossPercent = (loss/(initial*qty))*100;
        output.innerText = `You are in loss ${loss} with ${lossPercent}%`; 
    }else if(current>initial){
        var profit = (current-initial)*qty;
        var profitPercent = (profit/(initial*qty))*100;
        output.innerText = `You are in profit ${profit} with ${profitPercent}%`;
    }else{
        output.innerText ="No Pain No Gain , No Gain No Pain"
    }
}
function clickHandler(){
    var initialPrice = inputValue.value;
    var quantity = quantityStk.value;
    var currentVal = currentPrice.value;
    calculateProfitOrLoss(initialPrice,quantity,currentVal)
}

btnCheck.addEventListener('click',clickHandler)
