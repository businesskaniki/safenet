// toggle

const Humb = document.querySelector("#humb");
const Menu = document.querySelector('.nav-ul');

Humb.addEventListener('click', () => {
  Humb.classList.toggle('active');
  Menu.classList.toggle('active');
});
const teamSection = document.querySelector('.team-cont');

//dynamic  part

const person = [

  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
];

function addTechnology() {
  for (let i = 0; i < person.length; i += 1) {
    const divCard = document.createElement('div');
    divCard.classList.add('person');

    const image = document.createElement('img');
    const imagediv = document.createElement('div');
    imagediv.classList.add('img');
    image.setAttribute('src', `${person[i].imageSrc}`);
    image.setAttribute('alt', `${person[i].imageAlt}`);
    imagediv.appendChild(image);
    divCard.append(imagediv);

    const divDetails = document.createElement('div');
    divDetails.classList.add('team-text');
    divCard.appendChild(divDetails);

    const headTitle = document.createElement('h2');
    headTitle.textContent = `${person[i].title}`;
    divDetails.appendChild(headTitle);

    const h6 = document.createElement('h6');
    h6.textContent = `${person[i].titleDetail}`;
    divDetails.appendChild(h6);

    const para = document.createElement('p');
    para.textContent = `${person[i].description}`;
    divDetails.appendChild(para);

    teamSection.append(divCard);
    console.log(divCard);
  }
}

addTechnology();