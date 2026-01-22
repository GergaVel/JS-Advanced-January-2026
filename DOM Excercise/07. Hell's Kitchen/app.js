function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector('textarea');
   const bestRestaurant = document.querySelector('#bestRestaurant p'); // to return the <p><\p>
   const bestWorkers = document.querySelector('#workers p');

   function onClick () {
      const data = textAreaRef.value; //returns JSON Obj
      const restaurantData = JSON.parse(data); // returns an arr

      let result = {};

      for (let el of restaurantData){
         let [name, workersData] = el.split(' - ');

         if (!result.hasOwnProperty(name)){
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }

         const workers = workersData.split(', ');

      }

      
   }
}