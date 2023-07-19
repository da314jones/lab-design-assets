document.addEventListener("DOMContentLoaded", function() {
  const parentDiv = document.querySelector('.div1');

  const welcomeElement = document.createElement('h1');
  welcomeElement.classList.add('welcome');
  welcomeElement.innerText = 'Welcome';
  parentDiv.appendChild(welcomeElement);

  const hiImElement = document.createElement('h2');
  hiImElement.classList.add('hi-im');
  hiImElement.innerText = 'Hi, I\'m';
  hiImElement.style.display = 'none';
  parentDiv.appendChild(hiImElement);

  const nameElement = document.createElement('h2');
  nameElement.classList.add('name');
  nameElement.innerText = 'Dwayne Andre Jones';
  nameElement.style.display = 'none';
  parentDiv.appendChild(nameElement);

  const animateWelcome = () => {
    welcomeElement.style.animation = 'scaleAndFadeIn 3s forwards';
    setTimeout(() => {
      welcomeElement.style.display = 'none';
      animateHiIm(); 
    }, 3000); 
  }

  const animateHiIm = () => {
    hiImElement.style.display = 'block';
    hiImElement.style.animation = 'slideFromRight 1s forwards';
    setTimeout(() => {
      hiImElement.style.display = 'none';
      animateName();
    }, 3000); 
  }


  const animateName = () => {
    nameElement.style.display = 'block';
    nameElement.style.animation = 'slideFromRightAndGrowName 3s forwards';
  }

  animateWelcome();
});


