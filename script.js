
//SCRIPT MADE BY YOURLOCALINDIAN 

function cloakTitle() {
    const title = document.getElementById('cloakable');
    const favicon = document.getElementById('cloak');
    const titleselect = document.getElementById('titleselect');
    const status = localStorage.getItem('cloak');
    console.log('Cloak function started');

    
    if (status === 'google') {
      console.log('Cloak status succesfully loaded');
      console.log('Cloak succesfully loaded (GOOGLE)');
      title.textContent="Google";
      favicon.href="images/Tab cloaks/google-logo-hd.png"
    } else if (status === 'youtube') {
      console.log('Cloak status succesfully loaded');
      console.log('Cloak succesfully loaded (YOUTUBE)');
      title.textContent="Youtube";
      favicon.href="images/Tab cloaks/yt2.png"
      
    } else if (status === 'newtab') {
      console.log('Cloak status succesfully loaded');
      console.log('Cloak succesfully loaded (NEWTAB)');
      title.textContent="New Tab";
      favicon.href="images/Tab cloaks/newtab.png"
    } else {
      console.log('No current cloak detected')
    }
      
    
  }
  window.onload = function() {
    cloakTitle();
  }