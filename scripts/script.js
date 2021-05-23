const contactid = document.querySelector("#contactid");
const contactarea = document.querySelector(".contactMain");
const homeid = document.querySelector("#homeid");
const homearea = document.querySelector(".homeMain");
const projectid = document.querySelector("#projectid");
const projectarea = document.querySelector(".project");
const aboutid = document.querySelector("#aboutid");
const aboutarea = document.querySelector(".aboutme");

const popup = document.querySelectorAll('.popup');
const popcls = document.querySelectorAll('.popcls');

const risccard = document.querySelector("#risccard");
const riscpop = document.querySelector("#riscpop");

const webcard = document.querySelector("#webcard");
const webpop = document.querySelector("#webpop");

const pecard = document.querySelector("#pecard");
const pepop = document.querySelector("#pepop");


contactid.addEventListener('click', function(e){
    contactarea.scrollIntoView({behaviour: 'smooth'});
});

homeid.addEventListener('click', function(e){
    homearea.scrollIntoView({behaviour: 'smooth'});
});

projectid.addEventListener('click', function(e){
    projectarea.scrollIntoView({behaviour: 'smooth'});
});

aboutid.addEventListener('click', function(e){
    aboutarea.scrollIntoView({behaviour: 'smooth'});
});


risccard.addEventListener('click', function(e){
    riscpop.classList.remove('hide');
});

webcard.addEventListener('click', function(e){
    webpop.classList.remove('hide');
});

pecard.addEventListener('click', function(e){
    pepop.classList.remove('hide');
});

for(let i=0; i<popcls.length; i=i+1)
{
    popcls[i].addEventListener('click', function(){
        popup[i].classList.add('hide');
    });
}
