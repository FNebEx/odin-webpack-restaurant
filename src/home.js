function Home() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Home';

  div.appendChild(h1);

  return div;
}

function setHome() {
  let main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(Home());
}

export default setHome;