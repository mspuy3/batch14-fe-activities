// <!-- Script for the date -->
   let dateElement = document.getElementById('date');
   
   window.onload = displayDate();

   function displayDate() {
      
      let dateGet = new Date();

      const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let dayToday = dayOfTheWeek[dateGet.getDay()];
      let monthToday = dateGet.toLocaleString('default', { month: 'long' });
      let dateToday = dateGet.getDate();
      let yearToday = dateGet.getFullYear();

      dateElement.textContent = dayToday + ", " + monthToday + " " + dateToday + "," + " " + yearToday;
       
   }
// <!-- End of script for the date -->


// <!-- Script for the clock -->
   let clockElement = document.getElementById('clock');
   
   window.onload = displayClock();

   function displayClock() {
      let clockProper = new Date().toLocaleTimeString();
      clockElement.textContent = clockProper;
      setTimeout(displayClock, 1000); 
   }
// <!-- End of script for the clock -->