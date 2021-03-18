const bitTitle = document.querySelector('h1');
const fetchBitcoinAPI = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        const BitcoinPrice = data.ticker.price;
    } catch (e) {
        bitTitle.innerText = "BITCOIN API NOT AVAILABLE RIGHT NOW!";
        console.log(e);
    }
}