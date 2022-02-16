function About() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'About';

  div.appendChild(h1);

  return div;
}

function setAbout() {
  let main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(About());
}

export default setAbout;