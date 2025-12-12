function getDaysInMonth(month, year) {
   let lastDay = new Date(year, month, 0);
   return lastDay.getDate();
}
