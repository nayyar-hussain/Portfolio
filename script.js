

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  
  // logo scroll
  



let projects = [
      {
        href : "https://vera-mart.vercel.app/",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnN1uPHhpfSOZUr5bt8ISb6nTfB0eLDdTQ1Q&s",
        heading : "Vera Mart",
        para : "Next js NextAuth Cloudinary Ecommerce"
    },
    {
        href : "https://github.com/nayyar-hussain/DocCare",
        img :"https://mir-s3-cdn-cf.behance.net/projects/404/3c0902235714309.Y3JvcCwxNjE2LDEyNjQsMCww.png",
        heading : "DocCare",
        para : "Next js Clerk Auth Cloudinary Doctor"
    },
    {
        href : "https://github.com/nayyar-hussain/ChatApp",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQtbNFhLZ0r0TTIVRoVxv6UTExZlGcfFjlg&s",
        heading : "Chat App",
        para : "Next js Clerk Auth Cloudinary ChatApp"
    },
    {
        href : "https://github.com/nayyar-hussain/BlogApp",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnN1uPHhpfSOZUr5bt8ISb6nTfB0eLDdTQ1Q&s",
        heading : "Blog App",
        para : "Next js NextAuth Cloudinary BlogApp"
    },
    {
        href : "https://github.com/nayyar-hussain/jobPortal",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnN1uPHhpfSOZUr5bt8ISb6nTfB0eLDdTQ1Q&s",
        heading : "Job Portal",
        para : "Next js Clerk Cloudinary Job Portal"
    },
    {   href : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/Netflix%20Original",
        img : "https://i.pinimg.com/564x/d2/1e/95/d21e955782392ca12fff2e14b82d5854.jpg",
        heading : "NetFlix Clone",
        para : "Fully NetFlix Clone HTML,CSS and JS"
    },
    {   href : "https://github.com/nayyarhussain/Amazon",
        img : "https://i.pinimg.com/564x/56/a5/b1/56a5b1a9700d15fe6c5b8aa6ab83a656.jpg",
        heading : "Amazon Clone",
        para : "Fully Amazon Clone HTML,CSS and JS"
    },
    {   href : "https://github.com/nayyarhussain/animated-web",
        img : "https://i.pinimg.com/originals/43/79/da/4379daa03042b6a9ae80b0b16a71b695.gif",
        heading : "Animated Website",
        para : "Fully Amazon Clone HTML,CSS , JsGsap and locomotive"
    },
    {   
        href : "https://github.com/nayyarhussain/animated-web",
        img : "https://i.pinimg.com/564x/39/48/44/39484457cf9ce146454a8da97f6f6648.jpg",
        heading : "Animated Website",
        para : "Fully Amazon Clone HTML,CSS , JsGsap and locomotive"
    },
    {   
        href : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/tik%20tok%20web",
        img :"https://i.pinimg.com/564x/a9/7f/e6/a97fe6daf575a5eb00db4d91c332f604.jpg",
        heading : "Tik Tok Clone",
        para : "Fully Amazon Clone HTML,CSS and JS"
    },
    {
        href : "https://keansburg.netlify.app/",
        img :"https://i.pinimg.com/564x/dc/5b/89/dc5b89a6b1d62829d029a704b4fe6ae4.jpg",
        heading : "Park Website",
        para : "Fully Amazon Clone HTML,CSS and JS"
    },
    {
        href : "https://nayyarr.netlify.app/",
        img :"https://i.pinimg.com/564x/d1/69/9e/d1699e2e6c13e1f19c5a9d48cf589a4a.jpg",
        heading : "PortFolio Website",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
   
  
    {
        href : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/whether",
        img :"https://i.pinimg.com/564x/d2/b1/ee/d2b1ee4cb66441c440f61ddc1eb1a465.jpg",
        heading : "Whether App",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/ABLFAZZ/JavaScript-Projects/tree/main/Javascript%20Projects/text%20to%20speach",
        img :"https://i.pinimg.com/564x/ca/2a/7d/ca2a7d3994e3cdb8dda853737f71f9bd.jpg",
        heading : "Text to Speach",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/nayyarhussain/shozzee/tree/main/shozee",
        img :"https://i.pinimg.com/564x/32/61/e1/3261e18303d3844f03b03579151f5568.jpg",
        heading : "eCommerce Website",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/youtubemusic",
        img :"https://i.pinimg.com/564x/b5/f6/1a/b5f61af1a124be3837bbb089c70a0eef.jpg",
        heading : "Song App",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/ABLFAZZ/code_alpha-todo-app/tree/main/TodoApp",
        img :"https://i.pinimg.com/564x/34/8d/bf/348dbf3bf629d6732b074a6fc34fe353.jpg",
        heading : "ToDo App",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/nayyarhussain/Frontend-Projectss/tree/main/Calculator",
        img :"https://i.pinimg.com/564x/39/62/3a/39623acb003aa0ed543e1f66407bcd89.jpg",
        heading : "Calculator",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/ABLFAZZ/JavaScript-Projects/tree/main/Javascript%20Projects/analog%20clock/clock.html",
        img :"https://i.pinimg.com/originals/c9/ba/d3/c9bad3f881f80e53b779000abbc24f54.gif",
        heading : "Clock",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/ABLFAZZ/JavaScript-Projects",
        img :"https://i.pinimg.com/564x/f5/f2/dc/f5f2dc23f323398ba577fb2f13b6c2f9.jpg",
        heading : "Tick Cross Game",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
    {
        href : "https://github.com/nayyarhussain/Frontend-Projects/tree/main/JS%20Projects/Gradindt%20color%20generate",
        img :"https://i.pinimg.com/564x/ca/3c/81/ca3c81804d9b256235b161d253d76f50.jpg",
        heading : "Gradient Color Generate",
        para : "Fully PortFolio Clone HTML,CSS and JS"
    },
  
]

const cards = document.querySelector(".cards");

let clutter = "";

let printProjects = () => {
   projects.map((val , idx) => {
    clutter += `<div class="items">
    <div class="get-code">
        <a  href="${val.href}" target="_blank">Get Code</a>
    </div>
    <div class="img-con">
        <img src="${val.img}" alt="">
    </div>
    <div class="item-dets">

        <h2>${val.heading}</h2>
        <p>${val.para}</p>
    </div>
</div>`;
   })

   cards.innerHTML = clutter;
}

printProjects()



// for phone


const phoneMessage = document.querySelector(".phone-mess");
const phone = document.querySelector(".phone");

phone.addEventListener("mouseenter", () => {
    phoneMessage.style.display = "block"
})
phone.addEventListener("mouseleave", () => {
    phoneMessage.style.display = "none"
})


const body = document.querySelector("body");
const cursor = document.querySelector(".cursor")


// for cursor




// humberger

let navbar = document.querySelector("header nav")

let humberger = document.querySelector(".hamburger").addEventListener("click",() => {
    navbar.classList.toggle("js-nav");
})

// humberger


// theme
const theme = document.querySelector(".theme i");






theme.addEventListener("click", () => {
    document.body.classList.toggle("body-js")

})


// theme

let  header = document.querySelector(".header")
let cardsCon =  document.querySelector(".cards-con");
let hiring =  document.querySelector(".hiring");



header.addEventListener("click", (e) => {
    if(e.target.classList.contains("skill")){
       

           document.querySelector(".skill-active").classList.remove("skill-active")
           e.target.classList.add("skill-active")

           if(e.target.classList.contains("backend")){
            cardsCon.innerHTML = `${backendDev}`
            hiring.innerHTML = ` <h1 class="hiring"><span>Hire me</span> as a Backend Developer</h1>`

           } else if (e.target.classList.contains("frontend")){
            cardsCon.innerHTML = `${frontendCards}`;
            hiring.innerHTML = ` <h1 class="hiring"><span>Hire me</span> as a Frontend Developer</h1>`

           } else if(e.target.classList.contains("ui")){
            cardsCon.innerHTML = `${uiTemplates}`;
            hiring.innerHTML = ` <h1 class="hiring"><span>Hire me</span> as a UI & UX Designer</h1>`

           }
       
    } 
   
})

window.addEventListener("load", () => {
    document.querySelector(".loder").style.display = "none"
})

body.addEventListener("mousemove" , (e) => {
    gsap.to(cursor,{
        y : e.y ,
        x : e.x,
        duration : 1,
        ease :"back.out"
    })


})



gsap.from("header .logo ,nav a , .theme ",{
    y : 40,
    duration : .5,
    opacity : 0,
    stagger : .4
})

gsap.from(".home",{
    y : 100,
    duration :1.5,
    opacity : 0
})


gsap.from(".about .about-left img" ,{
    scale : 0,
    duration : 1,
    opacity : 0,

   
    scrollTrigger: {
        trigger : ".about",
        scroller : ".container",

    }
})
gsap.from(".projects-cards .cards .items" ,{
    scale : 0,
    duration : 1,
    opacity : 0,

   
    scrollTrigger: {
        trigger : ".projects",
        scroller : ".container",

    }
})
gsap.from(".html-item" ,{
    scale : 0,
    duration : 1,
    opacity : 0,

   
    scrollTrigger: {
        trigger : ".service",
        scroller : ".container",

    }
})

