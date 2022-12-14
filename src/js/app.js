import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

// Auxiliar events

window.addEventListener('DOMContentLoaded',() => {
  window.addEventListener('click', (event) => {
    //Drawer Menu
    // console.log(event.target)
    // if(event.target.matches('.drawer-menu')) event.target.classList.toggle('active');
  })
})