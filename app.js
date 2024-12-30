const inputURL = document.querySelector(".url");
const shortBtn = document.querySelector(".url-short-btn");
const shortenedURL = document.querySelector(".shortened-url");
const copyBtn = document.querySelector(".copybtn");

const APIKey = '247f9f0b063b71729ac1f396649e4001';

async function shortURL(){
    try {
        const fetchUrlApi = await fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=${APIKey}&url=${inputURL.value}`);
        if(!fetchUrlApi.ok){
            throw new Error(`Parameter error: ${fetchUrlApi.status}`);
        };
        const data = await fetchUrlApi.json();
        shortenedURL.value = data.data;
    } catch (error) {
        console.log(inputURL.value);
        alert(`Something went wrong: ${error.message}`);
        window.location.reload();
    }
    
} 

function copyShortUrl(){
    navigator.clipboard.writeText(shortenedURL.value);
}

shortBtn.addEventListener('click',shortURL);
copyBtn.addEventListener('click', copyShortUrl);