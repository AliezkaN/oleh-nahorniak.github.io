const greetingTextContainer = document.querySelector('.greetingTextContainer');
const greetingImgContainer = document.querySelector('.greetingImgContainer');
const nameContainer = document.querySelector('.nameContainer');
const authorName = document.querySelector('.name');
const jobTitleContainer = document.querySelector('.jobTitleContainer');
const jobTitle = document.querySelector('.jobTitle');
const projectsTitle = document.querySelector('.projectsTitle');
const laptop = document.querySelector('.laptop');
const projectDetail = document.querySelector('.projectDetail');


window.addEventListener("scroll", () => {
    let offsetY = window.scrollY; 
    greetingTextContainer.style.transform = `translateY(${offsetY}px)`;
    greetingImgContainer.style.transform = `translate(${offsetY * 0.3 }px , ${offsetY}px)`;
    nameContainer.style.backgroundPositionY = `${offsetY * 0.5}px`;
    authorName.style.transform = `translateX(${offsetY * 0.2}px)`;
    jobTitleContainer.style.backgroundPositionY = `${-offsetY * 0.5}px`;
    jobTitle.style.transform= `translateX(calc(200vh - ${offsetY}px))`;
    projectsTitle.style.transform= `translateY(calc(300vh - ${offsetY}px))`;
    laptop.style.transform= `translateX(calc(400vh - ${offsetY}px))`;
    
});