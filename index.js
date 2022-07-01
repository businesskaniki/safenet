// toggle

const Humb = document.querySelector('#humb');
const Menu = document.querySelector('.nav-ul');

Humb.addEventListener('click', () => {
  Humb.classList.toggle('active');
  Menu.classList.toggle('active');
});
const teamSection = document.querySelector('.team-cont');
const person = [

  {
    title: 'reagan clinton',
    titleDetail: 'senior software engeneer',
    description: 'Prepares and installs solutions by rds, and programming',
    imageSrc: './images/pexels-pixabay-354951.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'nicholas maina',
    titleDetail: 'cyber security expert',
    description: ' determining and designing system specifications, standards, and programming',
    imageSrc: './images/image1.jpeg',
    imageAlt: 'first person',
  },
  {
    title: 'david brown',
    titleDetail: 'senior engeneer',
    description: 'Prepares and installs solutions by determining and designing system specifications, standards, and programming',
    imageSrc: './images/image2.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'dom west',
    titleDetail: 'server expert',
    description: 'Prepares and installs  standards, and programming',
    imageSrc: './images/image3.jpeg',
    imageAlt: 'first person',
  },
  {
    title: 'bridget safe',
    titleDetail: 'network manager',
    description: ' determining and designing system specifications, standards, and programming',
    imageSrc: './images/image4.jpg',
    imageAlt: 'first person',
  },
  {
    title: 'hull next',
    titleDetail: 'senior software developer',
    description: 'Prepares and installs solutions by determining and designing system',
    imageSrc: './images/image5.jpg',
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