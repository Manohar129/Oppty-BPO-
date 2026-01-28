document.addEventListener('mousemove', (e) => {
    const stack = document.querySelector('.hero-3d-stack');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    stack.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});