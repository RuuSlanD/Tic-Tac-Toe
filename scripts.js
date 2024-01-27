const elements = document.querySelector('.grid__line');
const box = document.querySelectorAll('.grid__element');
let flag = 1;


let arr = [[0,0,0],
        [0,0,0],
         [0,0,0]];

// По клику
elements.addEventListener('click', function(event){
    if (event.target.classList.contains('grid__element')){
        console.log('Flag: ', flag);
        if( flag % 2 == 1){
            event.target.classList.add('red');
        }else{
            event.target.classList.add('white');
        }
        flag++;
        console.log('Flag++: ', flag);
        event.target.classList.add('event-none');
        const x = event.target.dataset.position[0];
        const y = event.target.dataset.position[2];
        console.log(`Координаты ${x}, ${y}`);
        arr[x][y] = (flag % 2) + 1
        console.log('Цвет ',arr[x][y]);
        // Вызвать функцию которая будет проверять победу перебор данных массива 
    };

    if(flag > 4){
        finishString();
    };
});

// function finish(){
//     if(elements.classList.contains('red')){
//         if (elements.classList.contains('i11' && 'i12' && 'i13')){
//             console.log('FINISHED');
//         };  
//     };
// };



// При наведении мыши 
// elements.addEventListener('mouseover', function(event){
//     if (event.target.classList.contains('grid__element')){
//         console.log('Flag: ', flag);
//         if (flag % 2 == 1){
//             event.target.classList.add('red');
//         }else{
//             event.target.classList.add('white');
//         }
//         event.target.classList.add('event-none');
//         flag++;
//         console.log('Flag++: ', flag);
//     };
// });
