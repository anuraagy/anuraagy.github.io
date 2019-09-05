const projects = [
    {
        name: "Automailer",
        description: "Built an email automation system for my clubs to send email blasts with templates, variables, and files",
        status: "Built",
        image: "assets/img/automailer.png",
        link: "https://github.com/anuraagy/Automailer",
        border: true
    },
    {
        name: "Podium",
        description: "An online platform that gives citizens the opportunity to donate to political campaigns in groups on an issue basis. We allow people to advocate for causes they care about to their politicians. Think change.org for politics",
        status: "In Progress",
        image: "assets/img/podium.png",
        link: "https://ourpodium.org",
        border: true
    },
    {
        name: "BoilerKey - Chrome",
        description: "I built a chrome extension that allows Purdue University students to register and use their chrome browser as a device for 2FA to login to various school services and portals.",
        status: "Launched",
        image: "assets/img/boilerkey.png",
        link: "https://chrome.google.com/webstore/detail/boilerkey-chrome/iffgcddljpnfeknpdidnemgifdfaamei/",
        border: true
    },
    {
        name: "PayUp",
        description: "An iPhone application that streamlines the process of sharing your Netflix or Spotify account with friends and charging them for their usage. I worked on the Ruby on Rails backend.",
        status: "In Progress",
        image: "https://blog.noveogroup.com/app/uploads/2017/10/1.png",
        link: "#",
        border: false
    },
    {
        name: "Pick Up Games Finder", 
        description: "A simple web application that allows people to create/join pick up basketball games that are going on in their area and neighborhood. I orginally built this for my CS252: Systems class.",
        status: "Built",
        image: "assets/img/pickup.png",
        link: "https://github.com/anuraagy/Pickup-Games-Finder",
        border: true
    },
    {
        name: "FIFA Stat Tracker",
        description: "A Ruby on Rails web application that I built to help friends keep track of their win/loss record when playing online video games. Currently hosted on Heroku.",
        status: "Launched",
        image: "assets/img/fifa.png",
        link: "http://fifatracker.herokuapp.com",
        border: true
    },
    {
        name: "Ask Mitch!",
        description: "An amazon echo application that allows Purdue students to voice query the Purdue dining hall api and figure out what dining halls are open, what food is available at these dining halls, and more.",
        status: "Built",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2017/ECHO/FSCompProd/cc-ra-360x240v2._CB515844478_.png",
        link: "https://github.com/anuraagy/EchoDining",
        border: false
    }
]

projects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    let left = "";
    let right = ""

    if(index % 2 === 0) {
        left = "left";
        right = "right";
    }

    projectElement.innerHTML =
        `
        <div class="project-content ">
          <div class="preview ${right}" style="background: linear-gradient(180deg, rgba(46, 204, 113, 0.59) 0%, rgba(46, 49, 146, 0.4661) 100%), url(${project.image}); background-size: cover; background-position: center center;">
           
          </div>
          <div class="info ${left}">
            <a href="${project.link}" target="_blank"><i class="fas fa-external-link-alt" style="position: absolute; right: 20px; top: 20px;"></i></a>
            <p class="project-type" >Web Application</p>
            <h2 class="project-name">${project.name}</h2>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
              <p class="tag">${project.status}</p>
            </div>
          </div>
        </div>
    `;

    const projectList = document.getElementById("projects-container");
    projectList.appendChild(projectElement);
})