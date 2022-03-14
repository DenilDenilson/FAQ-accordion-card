//const arrowsDown = document.querySelectorAll('.arrow_down');
const arrowsDownDiv = document.querySelectorAll('.arrow_down--div');
//const questions = document.querySelectorAll('.questions');


arrowsDownDiv.forEach(arrowDownDiv => {
    arrowDownDiv.addEventListener('click', () => {
        let ques = arrowDownDiv.firstElementChild;
        ques.classList.toggle('text-Very-dark-grayish-blue');
        ques.classList.toggle('text-Very-dark-desaturated-blue');
        ques.classList.toggle('font-normal');
        ques.classList.toggle('font-bold');

        let arrowDown = arrowDownDiv.lastElementChild;
        arrowDown.classList.toggle('rotate-180');

        let parrafo = arrowDownDiv.nextElementSibling;
        let height = 0;
        if(parrafo.clientHeight == "0"){
            height = parrafo.scrollHeight;
        }
        parrafo.style.height = `${height}px`;
    });
});


// D E S K T O P


