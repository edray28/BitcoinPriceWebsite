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
        myDataCol[0].innerHTML = data.ticker.base; 
        myDataCol[1].innerHTML = data.ticker.target +"$";  
        myDataCol[2].innerHTML = "$"+data.ticker.price; 
        myDataCol[3].innerHTML = data.ticker.volume; 
        myDataCol[4].innerHTML = data.ticker.change; 
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
