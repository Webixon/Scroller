document.addEventListener('DOMContentLoaded', function (){
    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');

    document.addEventListener('mousewheel', function (event) {
        console.log(event.wheelDelta)
    })
})