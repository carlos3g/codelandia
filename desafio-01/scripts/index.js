const postsContainer = document.getElementById('posts');
const postsData = [
  {
    createdAt: '02 de jul, 2021',
    title: 'Agora é oficial: o Windows 11 está vindo',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  },
  {
    createdAt: '02 de jul, 2021',
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
  },
  {
    createdAt: '02 de jul, 2021',
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
  },
  {
    createdAt: '02 de jul, 2021',
    title: 'John McAfee, criador do antivírus McAfee, morre',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
  },
];

function renderPost(post) {
  const html = `
  <article class="post">
    <header>
      <span class="post-date">${post.createdAt}</span>
      <button class="post-like-button">
        <img src="./assets/images/heart.svg" alt="" />
      </button>
    </header>

    <h1>${post.title}</h1>
    <p>${post.desc}</p>
  </article>
  `;

  return html;
}

function populatePosts(posts) {
  return posts.map(renderPost).join('');
}

window.addEventListener('load', () => {
  postsContainer.innerHTML = populatePosts(postsData);
});
