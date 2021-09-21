let toggleShown = false;
let btn = document.querySelector('.btn')
let modalOpen = document.querySelector('.Modal-window') // This class needs to be add so the modal window can be show
let modalClose = document.querySelector('.close-btn')// This will add the class back on so the toggle class will hidden the modal window again


btn.addEventListener('click', function() {
    modalOpen.classList.add('toggle');
});

modalClose.addEventListener('click', function() {
    modalOpen.classList.remove('toggle');
})

