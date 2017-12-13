var button = document.getElementById('create');
var allBook = document.getElementById('allBook');
var addBook = document.getElementById('addBook');
var add = document.getElementById('add');
var table = document.getElementById('table');
addBook.addEventListener('click', () => {
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
  fetchPost('POST', '/insertData', (err, res) => {
    if (err) {} else {
      alert('Book added');
    }
  }, JSON.stringify(obj));
});

allBook.addEventListener('click', () => {
  add.style.display = 'none';
  table.style.display = 'block';
  fetchPost('GET', '/viewData', (err, res) => {
    if (err) {} else {
      var data = JSON.parse(res);
      data.forEach((item) => {
        var tr = document.createElement('tr');
        var ptitle = document.createElement('td');
        ptitle.innerHTML = item.title;
        var pauthor = document.createElement('td');
        pauthor.innerHTML = item.author;
        var pedition = document.createElement('td');
        pedition.innerHTML = item.edition;
        var ppublisher = document.createElement('td');
        ppublisher.innerHTML = item.publisher;
        var deleteBook = document.createElement('button');
        deleteBook.innerHTML = "DELETE";
        var editBook = document.createElement('button');
        editBook.innerHTML = "EDIT";
        // editBook.setAttribute("onclick", "functionEdit(" + item.id + "," + tr + ");");
        var option = document.createElement('td');

        tr.appendChild(ptitle);
        tr.appendChild(pauthor);
        tr.appendChild(pedition);
        tr.appendChild(ppublisher);
        option.appendChild(deleteBook);
        option.appendChild(editBook);
        tr.appendChild(option);
        table.appendChild(tr);
        deleteBook.addEventListener("click", function(event) {
          functionDelete(item.id, tr);
          event.preventDefault();
        });
        editBook.addEventListener("click", function(event) {
          functionEdit(item, tr);
          event.preventDefault();
        });
      });
    }
  });
});

function functionDelete(id, tr) {
  fetchPost('POST', '/deleteData', (err, res) => {
    if (err) {} else {
      tr.remove();
    }
  }, JSON.stringify(id));
}
function functionEdit(item, tr) {
  fetchPost('POST', '/editData', (err, res) => {
    if (err) {} else {
      
    }
  }, JSON.stringify(item));
}
