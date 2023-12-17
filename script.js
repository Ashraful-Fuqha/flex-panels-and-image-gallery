const panels = document.querySelectorAll('.panel');

function toggelOpen(){
    console.log('Changa!')
    this.classList.toggle('open')
}

function toggleActive(e){
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active')
}

panels.forEach(panel => panel.addEventListener('click', toggelOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

// ontransitionend = (e) => {
//     if(e.propertyName.includes('flex'))
//         panels.forEach(panel => panel.classList.toggle('open-active'))
// }