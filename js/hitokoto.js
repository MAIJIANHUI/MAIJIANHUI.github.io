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
    typeSpeed: 150
    });
};
xhr.send();


 var typed = new Typed('#text-404', {
    strings: ["&#12300;知不可乎骤得，托遗响于悲风&#12300;"],
    cursorChar: '',
    typeSpeed: 150
    });

