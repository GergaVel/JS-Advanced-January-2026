function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textAreaRef = document.querySelector('textarea');
   const bestRestaurantRef = document.querySelector('#bestRestaurant p');
   const bestWorkersRef = document.querySelector('#workers p');

   function onClick () {
      const restaurantData = JSON.parse(textAreaRef.value);
      let result = {};

      for (let el of restaurantData) {
         let [name, workersData] = el.split(' - ');

         if (!result[name]) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            };
         }

         const workers = workersData.split(', ');
         const newWorkers = createWorkerList(workers);

         result[name].workers = result[name].workers.concat(newWorkers);

         const salaryData = calculateRestaurantData(result[name].workers);
         result[name].avgSalary = salaryData.avgSalary;
         result[name].bestSalary = salaryData.bestSalary;
      }

      const [bestName, bestRestaurant] = findBestRestaurant(result);

      bestRestaurantRef.textContent =
         `Name: ${bestName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let buff = '';

      bestRestaurant.workers
         .sort((a, b) => b.salary - a.salary)
         .forEach(w => buff += `Name: ${w.name} With Salary: ${w.salary} `);

      bestWorkersRef.textContent = buff.trim();
   }

   function findBestRestaurant(restaurants) {
      return Object.entries(restaurants)
         .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
   }

   function calculateRestaurantData(workers) {
      let sum = 0;
      let bestSalary = 0;

      for (let w of workers) {
         sum += w.salary;
         if (w.salary > bestSalary) {
            bestSalary = w.salary;
         }
      }

      return {
         avgSalary: sum / workers.length,
         bestSalary
      };
   }

   function createWorkerList(workers) {
      return workers.map(w => {
         let [name, salary] = w.split(' ');
         return { name, salary: Number(salary) };
      });
   }
}
