const api_url = "https://api.quotable.io/random";
const showQuote = document.getElementById("showQuote");
const auther =document.getElementById("auther");
const newQuates = document.getElementById("new-Quates");
const Tweet = document.getElementById("Tweet");

newQuates.addEventListener("click", async ()=>{
    const response = await fetch(api_url);
    const data = await response.json();
    showQuote.innerHTML = data.content;
    auther.innerHTML = data.author;

})

Tweet.addEventListener("click", ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + showQuote.innerHTML + "----by" + auther.innerHTML, "Tweet Window", "width=600 height=300")
})