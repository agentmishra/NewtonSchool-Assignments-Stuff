const imageElement = document.getElementById('image');
const nameElement = document.getElementById('name');
const ageButton = document.getElementById('age');
const emailButton = document.getElementById('email');
const phoneButton = document.getElementById('phone');
const additionalInfoElement = document.getElementById('additional-info');
const getUserButton = document.getElementById('getUser');

const RANDOM_USER_API = "https://randomuser.me/api/";
let age = 24;
let email = "rainajavid15@gmail.com";
let phone = "(+91) 9797555369";

function getRandomUser(){
     return fetch(RANDOM_USER_API).then(res => res.json()).then(res => res.results[0]);
}

async function renderRandomUser(){
     let randomUser = await getRandomUser();
     imageElement.src = randomUser.picture.large;
     nameElement.innerText = `${randomUser.name.first} ${randomUser.name.last}`;
     age = randomUser.dob.age;
     email = randomUser.email;
     phone = randomUser.phone;
     console.log(randomUser);
}

renderRandomUser();

ageButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = age;
});
emailButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = email;
});
phoneButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = phone;
});

getUserButton.addEventListener('click', renderRandomUser);
