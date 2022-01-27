const heading = document.getElementById('heading');
const next = document.getElementById('load_next');
const prev = document.getElementById('load_prev');
const list = document.getElementById('list');
let pageNumber = 1;

function getIssues(pageNumber) {
     return fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
          .then(res => res.json()).then(res => res);
}

async function renderIssues(pageNumber) {
     let issues = await getIssues(pageNumber);
     list.innerHTML = '';
     heading.innerHTML = `Page number ${pageNumber}`;
     issues.forEach(issue => {
          let li = document.createElement('li');
          li.innerHTML = issue.node_id;
          list.appendChild(li);
     });
}
renderIssues(1);

next.addEventListener('click', () => {
     pageNumber++;
     renderIssues(pageNumber);
})
prev.addEventListener('click', () => {
     if (pageNumber > 1) {
          pageNumber--;
          renderIssues(pageNumber);
     }
})
