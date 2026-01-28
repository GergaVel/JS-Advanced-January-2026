
function sortArray(arr, op){
    //op === "asc" ? arr.sort(sortAsc) : arr.sort(sortDesc);
    op === "asc" ? arr.sort((a,b) => a - b) : arr.sort((a, b) => b - a);

    // function sortAsc(a,b){
    //     return a - b;
    // }

    // function sortDesc(a,b){
    //     return b - a;
    // }

    return arr;
}


sortArray([14, 7, 17, 6, 8], 'asc'); 
sortArray([14, 7, 17, 6, 8], 'desc'); 