async function fetchQuoteData() {
var apiUrl = "https://api.quotable.io/quotes"; 
    
try {
    var response = await fetch(apiUrl);
    var data = await response.json();
    return data;
    } catch (error) {
    console.log("Error fetching quote data:", error);
    return null;
    }
    }
    
    var quotes = [
        {
        text: "Hello, there are no rules here-- we're trying to accomplish something.",
        author: "Thomas Edison"
        },
        {
        text: "I do not know the American gentleman, god forgive me for putting two such words together.",
        author: "Charles Dickens"
        },
        {
        text: "As a cure for worrying, work is better than whisky.",
        author: "Thomas Edison"
        },
        {
        text: "Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.",
        author: "Charles Dickens"
        }
    ];
    

    async function displayRandomQuote() {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        var quoteTextElement = document.getElementById("quoteText");
        quoteTextElement.textContent = randomQuote.text;
    
        var quoteAuthorElement = document.getElementById("quoteAuthor");
        quoteAuthorElement.textContent = "- " + randomQuote.author;
    
        var quoteData = await fetchQuoteData();
    
        if (quoteData) {
        var quoteCategoryElement = document.getElementById("quoteCategory");
        var quoteCategory = quoteData[randomQuote.text]; 

        quoteCategoryElement.textContent = "Category: " + quoteCategory;
        } else {
        var quoteCategoryElement = document.getElementById("quoteCategory");
        quoteCategoryElement.textContent = "Category: Unknown";
        }

        var authorQuotesList = document.getElementById("authorQuotesList");
        authorQuotesList.innerHTML = "";
    
        var authorQuotes = quotes.filter(function(quote) {
        return quote.author === randomQuote.author;
        });
    
        if (authorQuotes.length > 1) {
        authorQuotes.forEach(function(quote) {
            var listItem = document.createElement("li");
            var quoteText = document.createElement("p");
            quoteText.textContent = quote.text;
            listItem.appendChild(quoteText);
            authorQuotesList.appendChild(listItem);
        });
        }
    }
    
    var randomButton = document.getElementById("randomButton");
    randomButton.addEventListener("click", displayRandomQuote);
    
    displayRandomQuote();