const posts = [
  { title: 'Post One', body: 'This is Post one' },
  { title: 'Post Two', body: 'This is Post two' }
];

function addPost(post, callback) {
  setTimeout(function () { 
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

addPost({title:'Post Three', body: '333'}, getPosts);