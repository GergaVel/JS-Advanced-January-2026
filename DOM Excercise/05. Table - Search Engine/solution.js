function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick); //input field: search field
// references is better to put here, ref to DOM element, no ref = value

const searchFieldRef = document.getElementById('searchField'); // ref to the searchField so we can manipulate it (take value, add value, remove value)
const tableRowRef = document.querySelectorAll('tbody tr'); // ref to the rows: body (excl Header & Footer)

   function onClick() {
   let searchText = searchFieldRef.value; //takes the word we look for 
      if (!searchText){
         return; //if there is nothing in the search field -> early return
      }
   searchFieldRef.value = ""; // to empty the field after each search
   
   
   // extract correct info from table (skip 1st and last row aka header & footer) we need only info from table body
   // we include also tr so the calculation is more precise
   // for loop to take out each tr. When you open it it has td (table data -> each ) 

   for (let i = 0; i < tableRowRef.length; i++){
      const tdRef = tableRowRef[i].querySelectorAll('td'); //on this row, give me all td's, vsichki kletki
         for (let col = 0; col < tdRef.length; col++){
            const tdText = tdRef[col].textContent; //returns name, email, course under one another 3 rows groups, 3 kletki
            
            if (tdText.includes(searchText)){ //includes is case sensitive. checks if the cell incliudes the searched word, if yes, add class and break (don;t look further)
               tableRowRef[i].classList.add('select'); //to match (yellow)
               break;

            } else {
               tableRowRef[i].classList.remove('select'); //in case there is no match, remove the select
            }
         }
      }
   }
}


// input & text area --> value (kutiika da pishesh neshto)
// anything else --> textContent 
