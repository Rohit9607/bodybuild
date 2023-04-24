burger = document.querySelector('.burger')
navlist = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')

burger.addEventlistener('click',()=>{
    rightNav.classlist.toggle('v-class-resp')
    navList.classlist.toggle('v-class-resp')
    navbar.classlist.toggle('h-nav-resp')
})