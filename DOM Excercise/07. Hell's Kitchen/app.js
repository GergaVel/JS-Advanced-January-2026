function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector('textarea');
   const bestRestaurantRef = document.querySelector('#bestRestaurant p'); // to return the <p><\p>
   const bestWorkersRef = document.querySelector('#workers p');

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
         const newWorkerList = createWorkerList(workers); //helper function - see down
         result[name].workers = concatWorkerList(result[name].workers, newWorkerList); //helper function - see down
         const salaryData = calculateRestaurantData(result[name].workers);
         result[name].avgSalary = salaryData.avgSalary;
         result[name].bestSalary = salaryData.bestSalary;
      }      

      const bestRestaurant = findBestRestaurant(result)
   }

   function findBestRestaurant(restaurants){
      
   }

   function calculateRestaurantData(workers) {
      const salaryData = {
         avgSalary: 0,
         bestSalary: 0
      }

      let sum = 0;

      for (let worker of workers){
         let salary = worker.salary;
         sum += salary;

         if (salaryData.bestSalary < salary){
            salaryData.bestSalary = salary;
         }         
      }

      salaryData.avgSalary = sum / workers.length;
      return salaryData;

   }
   function concatWorkerList(oldList, newList){
      return oldList.concat(newList);
   }

   function createWorkerList(workers) {
      const result = [];

      for (let el of workers){
         let [name, salary] = el.split(' ');
         salary = Number(salary);
         
         result.push({
            name,
            salary
         });
      }
      return result;
   }
}