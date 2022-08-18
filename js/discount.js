document.getElementById('apply-button').addEventListener('click', function () {
    
    const cuponeText = document.getElementById('copne-code');
    const coupneString = cuponeText.value;
    cuponeText.value = '';
   
    if (coupneString == 'DOM') {

        cuponeText.setAttribute('disabled', true);
        
    }
    else if (coupneString !== 'DOM') {
        return alert('coupne code doesnt match') 
    }

    
  
    const allPrice = document.getElementsByClassName('price');
    for (const price of allPrice) {
        
        const previousPrice = parseFloat(price.innerText);

        const discountPrice = previousPrice * (30 / 100);
        price.innerText = previousPrice - discountPrice;
     
    }
    
})