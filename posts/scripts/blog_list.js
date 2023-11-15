const apiUrl = 'http://localhost:8000/';

function fetchBlogList() {
    fetch(apiUrl + "api/posts/").then(response => response.json()).then(data => {
        displayData(data);
    })
}

function displayData (data) {
    const dataList = document.getElementById("blog-list");
    dataList.innerHTML = '';

    // looping data data dari API
    data.forEach(element => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style = 'width: 18rem;';
    
        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        // Add title to the card
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = element.title;
    
        // Add subtitle to the card
        const subtitle = document.createElement('h6');
        subtitle.className = 'card-subtitle mb-2 text-muted';
        subtitle.textContent = element.description;
    
        // Add text content to the card
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = `Created At: ${element.created_at}`;
    
        // Append elements to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(subtitle);
        cardBody.appendChild(cardText);
    
        // Append card body to the card
        card.appendChild(cardBody);
    
        // Append the card to the container
        dataList.appendChild(card);
    });
}

//  panggil fungsi saat halaman dimuat
fetchBlogList();