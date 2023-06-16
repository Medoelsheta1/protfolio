
const bar_icon = document.querySelector('#bar-icon')
const alternative_links  = document.querySelector('.alternative-nav')
bar_icon.addEventListener('click' , () => {
    alternative_links.classList.toggle('view')
})

const protfolio_links = document.querySelectorAll('.protfolio-links li')
const projects = document.querySelectorAll('.projects .project')
protfolio_links.forEach((e) => {
    e.onclick = () => {
        protfolio_links.forEach((e)=>{
            e.classList.remove('active')
        })
        e.classList.add('active')
        const choosenType = e.attributes.type.value

        projects.forEach((e)=>{
            e.style.display = 'none'
        })
        projects.forEach((e)=> {
            if (choosenType === e.attributes.type.value) {
                e.style.display = 'block'
                
            }
        })
            if (choosenType === 'All') {
                projects.forEach((e) => {
                    e.style.display = 'block'
                })
                
            }
    }
})

const contactForm = document.querySelector('.contact-content')
const contactMsg = document.querySelector('.conact-message')

contactForm.onsubmit = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_b4xz0l9' , 'template_4m5os9b' , '.contact-content' , 'ogTA83kB95Vevyurv').then(()=>{
        contactMsg.innerHTML = 'message sent <span>successfully</span> '
    }, () => {
        contactMsg.textContent = 'Somthing error Message not sent'
    })
} 
var typed = new Typed('.typing' , {
    strings: [  'frontend Dev' , 'Wep designer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// const scrollButton = document.querySelector('.scroll-up')
// window.onscroll = (e) => {
//     // console.log(this.scrollY)
//     if (this.scrollY > 550) {
//         scrollButton.style.display = 'block'
//     }else {
//         scrollButton.style.display = 'none'
//     }
// }

// scrollButton.addEventListener('click' , () => {
//     window.scrollTo({
//         top: '0',
//         behavior: 'smooth'
//     })
// })

// scrollrevial
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: '2500',
    delay: 400,
    // reset: true 
})


const colorButton = document.querySelector('.color > i')
const colorsExitButton = document.querySelector('.colorsExitButton')
const colorsIcon = document.querySelectorAll('.colorsIcon i ')
const colorsIcon2 = document.querySelectorAll('.colorsIcon2 i ')
const colors = document.querySelector('.colors')
colorButton.onclick = () => {
    colors.classList.toggle('viewColors')
    colorButton.style.display = 'none'
}
colorsExitButton.onclick = () => {
    colors.classList.remove('viewColors')
    colorButton.style.display = 'block'
}


colorsIcon.forEach((e) => {
    e.style.color = `${e.dataset.color}`
    e.onclick = (e) => {
        document.documentElement.style.setProperty("--alternative-color", e.target.dataset.color)
    }
})
colorsIcon2.forEach((e) => {
    e.style.color = `${e.dataset.color}`
    e.onclick = (e) => {
        document.documentElement.style.setProperty("--alternative-color", e.target.dataset.color)
    }
})
// colorsIcon.onclick = (e) => {
//     document.documentElement.style.setProperty("--alternative-color", e.dataset.color)
// }
// colorsIcon2.onclick = (e) => {

// }


const mainPages = document.querySelectorAll('.App > .page')
const pageLinks = document.querySelectorAll('.links div')
const altLinks = document.querySelectorAll('.alternative-nav div')
pageLinks.forEach((e) => {
    e.onclick = (ele) => {
        let choosenPage = document.querySelector(`.${ele.currentTarget.dataset.page}`)
        mainPages.forEach((e)=> e.style.display = 'none')
        choosenPage.style.display = 'block'
    }
})
altLinks.forEach((e) => {
    e.onclick = (ele) => {
        alternative_links.classList.remove('view')
        let choosenPage = document.querySelector(`.${ele.currentTarget.dataset.page}`)
        mainPages.forEach((e)=> e.style.display = 'none')
        choosenPage.style.display = 'block'
    }

})



sr.reveal('.landing-text , .landing-social' )
sr.reveal('.landing-image' , {origin: 'bottom'})

sr.reveal('.links ' , {origin: 'right'})