const fetch = require('node-fetch');

const apiKey = 'feef50130a134336bddb388893092ea9';
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=${apiKey}`;

const headers = new fetch.Headers();
headers.append('Upgrade-Insecure-Requests', '1');

fetch(newsApiUrl, { headers })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.articles) {
            const latestNewsData = data.articles.map(article => ({ title: article.title }));
            renderLatestNews(latestNewsData);
        } else {
            console.error('Invalid response format:', data);
        }
    })
    .catch(error => console.error('Error fetching news:', error));
