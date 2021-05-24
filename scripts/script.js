const contactid = document.querySelectorAll(".contactid");
const contactarea = document.querySelector(".contactMain");
const homeid = document.querySelectorAll(".homeid");
const homearea = document.querySelector(".homeMain");
const projectid = document.querySelectorAll(".projectid");
const projectarea = document.querySelector(".project");
const aboutid = document.querySelectorAll(".aboutid");
const aboutarea = document.querySelector(".aboutme");

const popup = document.querySelectorAll('.popup');
const popcls = document.querySelectorAll('.popcls');

const risccard = document.querySelector("#risccard");
const riscpop = document.querySelector("#riscpop");

const webcard = document.querySelector("#webcard");
const webpop = document.querySelector("#webpop");

const pecard = document.querySelector("#pecard");
const pepop = document.querySelector("#pepop");

const menu = document.querySelector(".menu");
const navMain = document.querySelector(".navMain");
const navItems = document.querySelectorAll(".menuitems");

menu.addEventListener('click', function (e) {
    menu.classList.toggle("change");
    navMain.classList.toggle("hidemenu");
});

navItems.forEach(function(item){
    item.addEventListener('click', function(e){
    menu.classList.toggle("change");
    navMain.classList.toggle("hidemenu");
})});


for(let i=0; i<contactid.length; i=i+1)
{
    contactid[i].addEventListener('click', function(e){
        contactarea.scrollIntoView({behaviour: 'smooth'});
    });
    
}

for(let i=0; i<homeid.length; i=i+1)
{
    homeid[i].addEventListener('click', function(e){
        homearea.scrollIntoView({behaviour: 'smooth'});
    });
}

for(let i=0; i<projectid.length; i=i+1)
{
    projectid[i].addEventListener('click', function(e){
        projectarea.scrollIntoView({behaviour: 'smooth'});
    });
}

for(let i=0; i<aboutid.length; i=i+1)
{
    aboutid[i].addEventListener('click', function(e){
        aboutarea.scrollIntoView({behaviour: 'smooth'});
    });
}

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
