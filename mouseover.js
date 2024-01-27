// При наведении мыши 
elements.addEventListener('mouseover', function(event){
    if (event.target.classList.contains('grid__element')){
        console.log('Flag: ', flag);
        if (flag % 2 == 1){
            event.target.classList.add('red');
        }else{
            event.target.classList.add('white');
        }
        event.target.classList.add('event-none');
        flag++;
        console.log('Flag++: ', flag);
    };
});