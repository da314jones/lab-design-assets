document.addEventListener("DOMContentLoaded", function() {
    const parentDiv = document.querySelector('.div1');
  
    const textElement = document.createElement('h2');
    textElement.classList.add('scroll-text');
    textElement.innerText = 'I build it so you don\'t have to';
    parentDiv.appendChild(textElement);
  
    const logoImage = document.querySelector('.logo-img');
    let isVisible = false;
  
    logoImage.addEventListener('click', function() {
      if (isVisible) {
        textElement.style.animation = 'fade-out 2s forwards';
        isVisible = false;
      } else {
        textElement.style.animation = 'scroll 3s linear';
        isVisible = true;
      }
    });
  });
  

document.body.style.overflow = 'hidden';

document.body.style.overflow = 'auto';
