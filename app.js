const menu = document.querySelector(".menu");
const navbar = document.querySelector(".ulNav");


menu.addEventListener("click" , ()=>{
    menu.classList.toggle("active")
    navbar.classList.toggle("active")
})



const DataServes =[
    {
        "icons":`<svg  style="padding: 5px;"xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
                </svg>`,
        "title":"Web Design" ,
        "desc": "Beautiful and elegant designs with interfaces that are intuitive, efficient and pleasant to use the user." ,
    },
    {
        "icons":`<svg style="padding: 5px;" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>`,
        "title":"Devlopment" ,
        "desc": "Custom web development tailored to your specifications, designed to provide a flawless user experience." ,
    },
    {
        "icons":`<svg style="padding: 5px;" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>`,
        "title":"Mobile App" ,
        "desc": "Design and transform website projects into mobile apps to provide a seamless user experience." ,
    }
]

for(let S of DataServes){
    const Serves = document.querySelector(".Serves");
    Serves.innerHTML +=`
                        <div class="divServes">
                            <div>
                                ${S.icons}
                            </div>
                            <h2>${S.title}</h2>
                            <p>${S.desc}</p>
                        </div>
`
}

const DataProjets = [
    {
        "title":"Skills Website",
        "type":"Website",
        "image":"https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1247&q=80",
        "disc":"A project is a site for a Prof in a subject Soft Skills , the site is an article and a summary of the subject.",
        "link":"https://rahouihamza.github.io/SoftSkills/"
    },
    {
        "title":"Weather App",
        "type":"App",
        "image":"https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "disc":"A project is an application to know the weather by location or by searching for the place you want, Api Project.",
        "link":"https://rahouihamza.github.io/Weather-App/"
    },
    {
        "title":"School Website",
        "type":"Website",
        "image":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "disc":"This project is a website of an educational institution as requested by the Client .",
        "link":"https://rahouihamza.github.io/CenterALnajah/"
    },
    {
        "title":"Movies & Tv Shows",
        "type":"Website",
        "image":"https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "disc":"This project is a website dedicated to streaming movies and TV shows .",
        "link":"https://rahouihamza.github.io/Movies_TV/"
    }
]

for(let Projet of DataProjets){
    const section4 = document.querySelector(".DivProjet");
    section4.innerHTML+= `
                    <div class="divpp">
                        <img src="${Projet.image}" alt="desc">
                        <div>
                            <span  class="typePr">— ${Projet.type}</span>
                            <button class="btnArrow">
                                <a href="${Projet.link}" target="_blank">
                                    <img src="Data/Icons/arrow right.png" alt="arrow">
                                </a>
                            </button>
                        </div>
                        <h3>${Projet.title}</h3>
                        <p>${Projet.disc}</p>
                    </div>
    `
}
