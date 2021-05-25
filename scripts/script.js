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

const errname = document.querySelector(".errname");
const errmail = document.querySelector(".errmail");
const errmssg = document.querySelector(".errmssg");
const succmssg = document.querySelector(".succmssg");

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

var firebaseConfig = {
    apiKey: "AIzaSyDyW-clO2Hq6HxDVI0j4wOkz8wcGR-lGlY",
    authDomain: "portfolio-7a692.firebaseapp.com",
    projectId: "portfolio-7a692",
    storageBucket: "portfolio-7a692.appspot.com",
    messagingSenderId: "1024397748571",
    appId: "1:1024397748571:web:35f6ff7dbd7f741b25127e"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference contactInfo collections

let contactInfo = firebase.database().ref("contact_infos");

const sendmssg = document.querySelector(".sendmssg");

sendmssg.addEventListener('click', getdata);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  

function getdata(e){
    sendername = document.querySelector(".sendername").value;
    sendermail = document.querySelector(".sendermail").value;
    sendermssg = document.querySelector(".sendermssg").value;

    let f=0;
    let valid = validateEmail(sendermail); 

    if(sendername != '')
    {
        errname.innerHTML = "";
    }

    if(sendermail != '')
    {
        if(valid)
            errmail.innerHTML = "";
        else
        {
            f = 1;
            errmail.innerHTML = "please enter valid email address";
        }
    }

    if(sendermssg != '')
    {
        errmssg.innerHTML = "";
    }

    if(sendername === '')
    {
        f = 1;
        errname.innerHTML = "please enter your name"
    }

    if(sendermail === '')
    {
        f = 1;
        errmail.innerHTML = "please enter your email address"
    }

    if(sendermssg === '')
    {
        f = 1;
        errmssg.innerHTML = "please write a message"
    }

    //save info to firebase storage

    if(f == 0)
    {
        console.log(sendername, sendermail, sendermssg);
        saveContactInfo(sendername, sendermail, sendermssg);

        document.querySelector(".sendername").value = '';
        document.querySelector(".sendermail").value = '';
        document.querySelector(".sendermssg").value = '';

        succmssg.innerHTML = "&#x1F389 Your message sent successfully";

        setTimeout(function(){ succmssg.innerHTML = ""; }, 10000);    
    }
}

function saveContactInfo(name, email, mssg)
{
    console.log(name, email, mssg);
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Name: name,
        Email: email,
        Message: mssg
    });
}