const burger = document.querySelector('.burger');
const banner = document.querySelector('.banner');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        banner.classList.toggle('active');
    });

function parallax(e){
    this.querySelectorAll('.design').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100;
        layer.style.transform = `translateX(${x}px)`;
    });
}

document.addEventListener('mousemove', parallax);