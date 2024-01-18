document.addEventListener('DOMContentLoaded', function () {
    const articlesContainer = document.getElementById('articles');
    const codeForm = document.getElementById('code-form');
    const uploadForm = document.getElementById('upload-form');
    const articleForm = document.getElementById('article-form');

    // Secret code for demonstration purposes
    const secretCode = 'pogisiroger';

    function renderArticles(articlesData) {
        articlesContainer.innerHTML = '';
    
        articlesData.forEach(article => {
            const articleElement = document.createElement('article');
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p><strong>Author:</strong> ${article.author}</p>
                <p><strong>Publishing Date:</strong> ${formattedDate}</p>
                <p>${article.content}</p>
                <p><strong>References:</strong> ${createClickableLinks(article.references)}</p>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }    

    function checkSecretCode() {
        const enteredCode = document.getElementById('secret-code').value;

        if (enteredCode === secretCode) {
            codeForm.style.display = 'none';
            uploadForm.style.display = 'block';
        } else {
            alert('Incorrect secret code. Please try again.');
        }
    }

    function handleFormSubmission(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        const references = document.getElementById('references').value;

        const newArticle = { title, content, author, references };
        articlesData.push(newArticle);

        renderArticles(articlesData);

        articleForm.reset();
    }

    function createClickableLinks(references) {
        // Split references by newline
        const referencesArray = references.split('\n');

        // Convert each reference to a clickable link
        const clickableReferences = referencesArray.map(reference => {
            const trimmedReference = reference.trim();
            return `<a href="${trimmedReference}" target="_blank">${trimmedReference}</a>`;
        });

        // Join references back with newline
        return clickableReferences.join('<br>');
    }

    codeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        checkSecretCode();
    });

    articleForm.addEventListener('submit', handleFormSubmission);

    const articlesData = [];
    // Initially, no articles are loaded

    renderArticles(articlesData);
});
