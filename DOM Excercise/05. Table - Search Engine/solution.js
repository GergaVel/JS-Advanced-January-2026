function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
// references is better to put here

const searchFieldRef = document.getElementById('searchField'); // ref to DOM element, no ref = value
const tableRowRef = document.querySelectorAll('tbody tr');

   function onClick() {
   //two options: 
   // -- text filled in the field Yes: search in the tb
   // -- text filled in the fiels No: early return

   let searchText = searchFieldRef.value;
      if (!searchText){
         return; //if there is nothing in the search field -> early return
      }
   searchFieldRef.value = ""; // to empty the field after each search
   // extract correct info from table (skip 1st and last row aka header & footer) we need only info from table body
   // we include also tr so the calculation is more precise
   // for loop to take out each tr. When you open it it has td (table data -> each ) 

   for (let i = 0; i < tableRowRef.length; i++){
      const tdRef = tableRowRef[i].querySelectorAll('td'); 
         for (let col = 0; col < tdRef.length; col++){
            const tdText = tdRef[col].textContent; //returns name, email, course under one another 3 rows groups
            
            if (tdText.includes(searchText)){ //inclides is case sensitive
               tableRowRef[i].classList.add('select'); //to match (yellow)
               break;
            } else {
               tableRowRef[i].classList.remove('select');
            }
         }
   }
}
}
