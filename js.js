/* const $ = document.querySelector.bind(document);
let closeOpFunc = () => {
    $('.nav-burger').classList.toggle('toggle');
}
$('.btn-nav').addEventListener("click", closeOpFunc); 
$('.nav-burger').addEventListener("click", closeOpFunc); */


document.querySelectorAll('.btn-nav, .nav-burger').forEach(e => {
    e.addEventListener("click", () => {
        document.querySelector('.nav-burger').classList.toggle('toggle');
    });
});


