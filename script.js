const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


$(".sir").hide();
$(".sir1").hide();

setTimeout(() => {
    $(".sir").slideDown("slow");
    $(".sir1").fadeIn("slow");
    
}, 600)








