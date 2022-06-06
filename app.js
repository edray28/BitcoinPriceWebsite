const bitTitle = document.querySelector('h1');
const myDiv = document.querySelector('.container-sm');
const myLink = document.querySelector('.gitico');
const createdBy = document.createElement('h5');
const myDataCol = document.querySelectorAll('td');

//API
const fetchBitcoinAPI = async () => {
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true");
        const data = await res.json();
        myDataCol[0].innerHTML = "$"+ data.bitcoin.usd;
        myDataCol[1].innerHTML = "$"+ data.bitcoin.usd_market_cap;
        myDataCol[2].innerHTML = "$"+ data.bitcoin.usd_24h_vol;
        myDataCol[3].innerHTML = "$"+ data.bitcoin.usd_24h_change; 
        myDataCol[4].innerHTML = data.bitcoin.last_updated_at; 
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
