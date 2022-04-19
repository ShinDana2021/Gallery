let $ =  document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let close = $('.close')
let prev = $('.prev')
let next = $('.next')
let gallerys = $$('.wrapper__item img')
let gallery = $('.gallery')
let galleryItem = $('.gallery--img')
let currentIndex

function show(index) {
    switch(currentIndex) {
        case 0:
            prev.classList.add('hiden')
            next.classList.remove('hiden')
            console.log(prev)
            break;
        case 1:
        case 2:
        case 3:  
        case 3:
        case 4:
        case 5:
        case 6:
            prev.classList.remove('hiden')
            next.classList.remove('hiden')
            console.log(prev)
            break;
        case 7:
            prev.classList.remove('hiden')
            next.classList.add('hiden')
            
    }
    // i (currentIndex == 0) {
    //     prev.classList.add('hiden')
    //     console.log(prev)
    // } else if (currentIndex>0) {
    //     prev.classList.remove('hiden')
    // } else if (currentIndex == gallerys.length-1) {
    //     next.classList.add('hiden')
    // } else if (currentIndex  > 0 && currentIndex < gallerys.length-1) {
    //     next.classList.add('hiden')
    // }
    console.log(currentIndex == gallerys.length-1)
    galleryItem.src = gallerys[index].src
    gallery.classList.add('show')
}


gallerys.forEach( (item,index) => {
    item.addEventListener('click', function(e) {
        currentIndex = index
        show(index)
    })
})

prev.addEventListener('click',function() {
    if (currentIndex>0) {
        currentIndex--
        show(currentIndex)
    }
    console.log(currentIndex)
})

next.addEventListener('click',function() {
    if (currentIndex < gallerys.length -1) {
        currentIndex++
        show(currentIndex)
    } 
    console.log(gallerys)
})

close.addEventListener('click',function() {
    gallery.classList.remove('show')
})

document.onkeydown = function(e) {
    if (e.which = 27) {
        gallery.classList.remove('show')
    }
}





