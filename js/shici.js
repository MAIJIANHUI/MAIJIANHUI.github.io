var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v2.jinrishici.com/one.json');
  xhr.withCredentials = true;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var gushici = document.getElementById('shici');
       var shici = data.data.content;
    }
    var typed = new Typed('#shici', {
  strings: [shici],
  typeSpeed: 100
});
  };
  xhr.send();
