// Dummy data for articles (in a real app, fetch from API)
const articles = {
    1: {
        title: "National Politics Update",
        image: "https://source.unsplash.com/featured/?politics",
        content: "Full details on the national politics update. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    2: {
        title: "International Conflict Resolved",
        image: "https://source.unsplash.com/featured/?world",
        content: "Full details on the international conflict resolution. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    3: {
        title: "Economic Growth Surges",
        image: "https://source.unsplash.com/featured/?economy",
        content: "Full details on the economic growth surge. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    4: {
        title: "New Tech Breakthrough",
        image: "https://source.unsplash.com/featured/?technology",
        content: "Full details on the new tech breakthrough. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    5: {
        title: "Championship Finals",
        image: "https://source.unsplash.com/featured/?sports",
        content: "Full details on the championship finals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    6: {
        title: "Celebrity Scandal",
        image: "https://source.unsplash.com/featured/?entertainment",
        content: "Full details on the celebrity scandal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
};

// Handle "Read More" clicks on index.html
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const articleId = e.target.closest('.news-card').dataset.id;
            window.location.href = `article.html?id=${articleId}`;
        });
    });

    // Load article on article.html
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    if (articleId && articles[articleId]) {
        const article = articles[articleId];
        document.getElementById('article-title').textContent = article.title;
        document.getElementById('article-image').src = article.image;
        document.getElementById('article-content').textContent = article.content;
    }
});
