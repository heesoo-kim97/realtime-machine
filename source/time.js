

  const setTime = () => {
    const hr = document.getElementById("hour-box");
    const min = document.getElementById("min-box");
    const sec = document.getElementById("sec-box");
    const dateNum = document.getElementById('date-num');
    const dateText = document.getElementById('date-text');
      
    const time = new Date();
    
    var year = time.getFullYear();
   
    var initialMonth = time.getMonth();
    var months = initialMonth + 1;
    var newMonths;
   
    var date = time.getDate();
    var newDate;
    
    var day = time.getDay();
    var newDay;
   
    var hours = time.getHours();
    var newHours;
   
    var minutes = time.getMinutes();
    var newMinutes;
    
    
    var seconds = time.getSeconds();
    var newSeconds;
    
   if(months < 10) {
        newMonths = months.toString().padStart(2, "0");
    } else {
        newMonths = months;
    } 
   
    if(date < 10) {
        newDate = date.toString().padStart(2, "0");
    } else {
        newDate = date;
    } 
    
    if(hours < 10) {
        newHours = hours.toString().padStart(2, "0");
    } else {
        newHours = hours;
    } 
   
    
    if(minutes < 10) {
        newMinutes = minutes.toString().padStart(2, "0");
    } else {
        newMinutes = minutes;
    } 
   
    
    if(seconds < 10) {
        newSeconds = seconds.toString().padStart(2, "0");
    } else {
        newSeconds = seconds;
    } 
   
    if(day === 0) {
        newDay = "Sunday";
    } else if (day === 1) {
        newDay = "Monday";
    } else if (day === 2) {
        newDay = "Tuesday";
    } else if (day === 3) {
        newDay = "Wednesday";
    } else if (day === 4) {
        newDay = "Thursday";
    } else if (day === 5) {
        newDay = "Friday";
    } else {
        newDay = "Saturday";
    } 
    
   hr.textContent = newHours;
   min.textContent = newMinutes;
   sec.textContent = newSeconds;
   dateNum.textContent = year + "-" + newMonths + "-" + newDate;
   dateText.textContent = newDay;
       
  };

  const intervalTime = setInterval(setTime, 1000);


