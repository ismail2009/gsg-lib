const fetch = (url,val,cb) =>{
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
  console.log(xhr.readyState,xhr.status);
  if (xhr.readyState === 4 && xhr.status === 200) {
    cb(xhr.responseText);
  }
}
xhr.open('POST',url,true);
xhr.send(val);
}
