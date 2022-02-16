import setHome from "./home";
import setAbout from "./about";
import setContact from "./contact";

function Header() {
  const header = document.createElement('header');
  const nav = Nav();

  header.appendChild(nav);

  return header;
}

function Nav() {
  const nav = document.createElement('nav');
  const homeBtn = document.createElement('button');
  const aboutBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.textContent = 'Home';
  homeBtn.onclick = function(event) {
    if(event.target.classList.contains('is-active'))
      return;
    setHome();
  }

  
  aboutBtn.textContent = 'Home';
  aboutBtn.onclick = function(event) {
    if(event.target.classList.contains('is-active'))
      return;
    setAbout();
  }

  contactBtn.textContent = 'Home';
  contactBtn.onclick = function(event) {
    if(event.target.classList.contains('is-active'))
      return;
    setContact();
  }

  nav.appendChild(homeBtn);
  nav.appendChild(aboutBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function Main() {
  const main = document.createElement('main');
  main.textContent = 'I am the main';

  return main;
}

function init() {
  const app = document.querySelector('#content');
  app.appendChild(Header());
  app.appendChild(Main());
  setHome();
}

export default init;