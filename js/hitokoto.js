var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    const hitokoto = document.querySelector('#hitokoto_text');
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    var hitokoto_text = data.hitokoto;
  }
    var typed = new Typed('#hitokoto_text', {
    strings: [hitokoto_text],
    cursorChar: '',
    typeSpeed: 300
    });
};
xhr.send();


 
