const subBtn = document.querySelector('button[type=submit]');
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
})
subBtn.addEventListener('click', function(e){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${document.querySelector('input').value}`));
  document.querySelector('#cats').appendChild(li);
})