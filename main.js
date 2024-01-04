var elForm = document.querySelector(".game-from");
var elAfterPrice = document.querySelector(".js-afterPriceInp");
var elBeforePrice = document.querySelector(".js-beforePriceInp");
var elBtnPrice = document.querySelector(".js-btnPrice");
var elSelectPrice =document.querySelector(".js-selectPrice");
var elPriceType = document.querySelector("option");
var priceDollar = 0.0001;
var priceRubl = 0.0073;
var priceDirxam = 0.0003;

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    priceValue = Number(elAfterPrice.value)
    if( elSelectPrice.value == "dollar") {
        elBeforePrice.value = priceValue * priceDollar;
    }else if (elSelectPrice.value == "rubl"){
        elBeforePrice.value = priceValue * priceRubl;
    }else if (elSelectPrice.value == "dirxam"){
        elBeforePrice.value = priceValue * priceDirxam;
    }
    
})
