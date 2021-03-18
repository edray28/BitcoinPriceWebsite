const bitTitle = document.querySelector('h1');
const myDiv = document.querySelector('.container-sm');
const myLink = document.querySelector('.gitico');
const createdBy = document.createElement('h5');
const myDataCol = document.querySelectorAll('td');

// API 
const fetchBitcoinAPI = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        const finalobj = [
            BitcoinBase = data.ticker.base,
            BitcoinTarget = data.ticker.target,
            BitcoinPrice = data.ticker.price,
            BitcoinVolume = data.ticker.volume,
            BitcoinChange= data.ticker.change]    
        myDataCol[0].innerHTML = finalobj[0]; 
        myDataCol[1].innerHTML = finalobj[1] +"$";  
        myDataCol[2].innerHTML = "$"+finalobj[2]; 
        myDataCol[3].innerHTML = finalobj[3]; 
        myDataCol[4].innerHTML = finalobj[4]; 
    } catch (e) {
        bitTitle.innerText = "BITCOIN API NOT AVAILABLE RIGHT NOW!";
        console.log(e);
    }
}


//Other Dev
const showDev = () => {
    styleh5();
    myDiv.append(createdBy);
}

const styleh5 = () => {
    createdBy.innerText = "Bitcoin Cryptocurrency Price!"
    createdBy.style.position = "absolute";
    createdBy.style.fontFamily = "Jura";
    createdBy.style.textAlign = "center";
    createdBy.style.color = "white";
    createdBy.style.marginTop = "15px";
}

fetchBitcoinAPI();
myLink.addEventListener('mouseover', showDev);
