const controller = new AbortController();
const signal = controller.signal;

function handleAbortedClick() {
  console.log('Button clicked!');
}

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', handleAbortedClick, { signal });

// To "disable" and remove the listener
controller.abort();