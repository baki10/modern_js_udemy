const posts = [
  { title: 'Post One', body: 'This is Post one' },
  { title: 'Post Two', body: 'This is Post two' }
];

function addPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false; // error when adding post

      if (error) {
        reject("Couldn't add post");
      } else {
        resolve();
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

addPost({ title: 'Post Three', body: '333' }).then(function () {
  console.log("... getting posts ...");
  getPosts();
}).catch(function (err) {
  console.log('Error:', err);
}).finally(function () {
  console.log("Finally...");
});