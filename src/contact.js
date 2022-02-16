function Contact() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact';

  div.appendChild(h1);

  return div;
}

function setContact() {
  let main = document.querySelector('main');
  main.textContent = '';
  main.appendChild(Contact());
}

export default setContact;