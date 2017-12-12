var button = document.getElementById('create')

button.addEventListener('click',(event)=>{
  var title = document.getElementById('Btitle').value;
  var author = document.getElementById('Bauthor').value;
  var edition = document.getElementById('Bedition').value;
  var puplisher = document.getElementById('Bpuplisher').value;
    var obj ={
      title:title,
      author:author,
      edition:edition,
      puplisher:puplisher
    };
  fetch('/getData',JSON.stringify(obj),(res)=>{

  });
});
