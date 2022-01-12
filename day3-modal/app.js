var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')


function toggleModal(e) {
    modal.classList.toggle('hide')
}
btnOpen.addEventListener("click", toggleModal)

modal.addEventListener("click", function(e){
    if (e.target == e.currentTarget){
        toggleModal()
    }
})

