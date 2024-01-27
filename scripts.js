const elements = document.querySelector('.grid__line'); 
const box = document.querySelectorAll('.grid__element'); 
let win;
let flag = 0, rowCount = 0, colCount = 0, ldCount = 0, rdCount = 0;
let arr = [[4,3,0],[0,7,5],[0,3,0]]; 
let losLeftCount, losRightCount, losCol, losRow;
 
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
        arr[x][y] = (flag % 2) + 1; 
        console.log('Цвет ',arr[x][y]); 
        // Вызвать функцию которая будет проверять победу перебор данных массива  
    }; 
 
    if(flag > 4){ 
        checkRow(); 
        checkColumn();
        checkDiagonals();
        animatedFinish();
    }; 

}); 
 
 
function checkRow(){ 
    // console.log(arr); 
    console.log('FinishString'); 
    for(let i = 0; i < 3; i++){ 
        for (let j = 0; j < 1; j++){ 
            if(arr[i][j] == arr[i][j+1] && arr[i][j] == arr[i][j+2]){
                console.log('Строка равна ПОБЕДА');
                win = true;
            }
            else{
                console.log('Строка разная');
                rowCount++;
            };
        }; 
    }; 
    // if(rowCount == 3 ){losRow = rowCount};
}
function checkColumn(){
    for(let j = 0; j < 3; j++){ 
        for (let i = 0; i < 1; i++){ 
            if(arr[i][j] == arr[i+1][j] && arr[i+2][j] == arr[i][j+2]){
                console.log('Столбец одинаквый ПОБЕДА');
                win = true;
            }
            else{
                console.log('Столбец разный');
                colCount++;
            };
        }; 
    };  
    // if(colCount == 3 ){losCol = colCount};
};
function checkDiagonals(){
    for(let i = 0; i < 1; i++){ 
        for(let j = i; j < 1; j++){
            if(arr[i][j] == arr[i+1][j+1] && arr[i][j] == arr[i+2][j+2]){
                console.log('Левая диагональ равна ПОБЕДА');
                win = true;
            }
            else{
                console.log('Левая диагональ не равна');
                ldCount++;
            };
        };

        for (let j = 2; j > 1; j--){
            if(arr[i][j] == arr[i+1][j-1] && arr[i][j] == arr[i+2][j-2]){
                console.log('Правая диагональ равна ПОБЕДА');
                win = true;
            }
            else{
                console.log('Правая диагональ не равна');
                rdCount++;
            };
        };
    };
    // if(ldCount == 1 ){losLeftCount = ldCount};
    // if(rdCount == 1 ){losRightCount = rdCount};
};


function animatedFinish(){
    if(win == true){
        for(let item of box) {
            item.classList.remove('red', 'white');
            item.classList.add("winner");
        };
    }
    // else
    // if(losLeftCount == losRightCount){
    //     for(let item of box) {
    //         item.classList.remove('red', 'white');
    //         item.classList.add("losser");
    //     };
    // };
};