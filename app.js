var quoteBank = [];


$(document).ready(function(){    

    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(response => response.json())
    .then(data=> {
        quoteBank = data;
        console.log(quoteBank);
    })

    function getQuote(){

    let randomNum = Math.floor((Math.random()*quoteBank.length));
    let randomQuote = quoteBank[randomNum].quote;
    let randomAuthor = quoteBank[randomNum].author;

        $(".quote").text(randomQuote);
        $(".author").text("-" + randomAuthor);
    }

    function colorFlip() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    let hexRandom = Math.floor((Math.random()*hex.length));

        for(let i = 0; i < 6; i++) {
            hexColor += hex[hexRandom];
         }
         document.body.style.backgroundColor = hexColor;
    }

    $('#new-quote').on('click',function(){
        getQuote();
        colorFlip();
    })

    let tweetQuote = document.getElementById("quote").innerHTML
    let tweetAuthor = document.getElementById("author").innerHTML
    let tweetLink = document.getElementById('tweet-quote');
    tweetLink.href= "https://twitter.com/intent/tweet?url="+ tweetQuote +" "+ tweetAuthor +"&hashtags=neverGiveUp";
})
