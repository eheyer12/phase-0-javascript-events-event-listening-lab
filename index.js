const input = document.getElementById('button');
function clickAlert() {
  return alert('I was clicked!');
}

function addingEventListener() {
  input.addEventListener('click', clickAlert);
}

addingEventListener();