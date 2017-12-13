var button = document.getElementById('create');
var allBook = document.getElementById('allBook');
var addBook = document.getElementById('addBook');
var add = document.getElementById('add');
var table = document.getElementById('table');
addBook.addEventListener('click',()=>{
add.style.display = 'block';
table.style.display = 'none';

});
button.addEventListener('click', () => {
  var title = document.getElementById('Btitle').value;
  var author = document.getElementById('Bauthor').value;
  var edition = document.getElementById('Bedition').value;
  var publisher = document.getElementById('Bpublisher').value;
  var obj = {
    title: title,
    author: author,
    edition: edition,
    publisher: publisher
  };
  fetchPost('POST', '/insertData', (err,res) => {
    if (err) {

    }else{
      alert('Book added');

    }
  }, JSON.stringify(obj));
});
allBook.addEventListener('click',()=>{
  add.style.display = 'none';
  table.style.display = 'block';
  fetchPost('GET', '/viewData', (err,res) => {
    if (err) {

    }else{
var data = JSON.parse(res);
console.log(typeof data[0].title);
console.log( data[0].title);
    }
  });
});
