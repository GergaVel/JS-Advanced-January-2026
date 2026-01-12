function solve (commands){
   let currentNum = 1;
   let result = [];

   for (let command of commands){
        if (command === 'add'){
            result.push(currentNum);
            currentNum++;

        } else if (command === 'remove'){
            result.pop();
            currentNum++;   
        }         
    }

   if (result.length === 0) {
        console.log('Empty');
   } else {      
        for (el of result){
        console.log(el);    
        }
    }
}

solve(['add', 'add', 'add', 'add']);
// 1 2 3 4		
solve(['add', 'add', 'remove', 'add', 'add'])	
//1 4 5		
solve(['remove', 'remove', 'remove'])	
//Empty