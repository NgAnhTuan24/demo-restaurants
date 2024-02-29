let section=document.querySelectorAll('section');
let navlink=document.querySelectorAll('.navbar a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top > offset && top < offset + height){
            navlink.forEach(Links=>{
                Links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
}
