
const soundOn = document.getElementById("sound-on");
const soundOff = document.getElementById("sound-off");
const audio = document.getElementById('alarm-audio');
audio.muted = true;


const factoryDataAlarmHandler = () => {
  const idArray = machineArray;
  let red = false;
  let yellow = false;
  let alarm = false;

  for(let i = 0; i < idArray.length; i++) {
        const thisID = idArray[i];
        const dataObj = factoryData[thisID];

        if(dataObj.operationRate < 60) { 
          red = true;
        } else if (dataObj.operationRate < 80) {
          yellow = true;
        } else {
        
        }
      
        if(dataObj.productionRate < 60) {
          red = true;	
        } else if (dataObj.productionRate < 80) {
          yellow = true;
        }  else {
        
        }
      
        if(i === 0) {
              
              if(dataObj.machineTemp >= 41.5) {
            red = true;
          } else if (dataObj.machineTemp >= 25.5) {
            yellow = true;
          } else {
      
          }
          } else if (i === 1) {
            if(dataObj.machineTemp >= 61) {
            red = true;
          } else if (dataObj.machineTemp >= 48) {
            yellow = true;
          } else {
      
          }
          } else if (i === 2) {
            if(dataObj.machineTemp >= 179) {
            red = true;
          } else if (dataObj.machineTemp >= 165) {
            yellow = true;
          } else {
      
          }
          } else if (i === 3) {
            if(dataObj.machineTemp >= 11.1) {
            red = true;
          } else if (dataObj.machineTemp >= 7.4) {
            yellow = true;
          } else {
      
          }
          }  else if (i === 4) {
            if(dataObj.machineTemp >= 89.5) {
            red = true;
          } else if (dataObj.machineTemp >= 85.7) {
            yellow = true;
          } else {
      
          }
          } else {
            if(dataObj.machineTemp >= 35.5) {
            red = true;
          } else if (dataObj.machineTemp >= 29.1) {
            yellow = true;
          } else {
      
          }
          }
          
         if(dataObj.pressureLevel >= 80) {
          red = true;
        } else if (dataObj.pressureLevel >= 65) {
          yellow = true;
        } else {
      
        }
      
        if (red) {
            alarm = true;
          } else {
            alarm = false;
          }
      }
      
      
      if (alarm) {
          audio.muted = false;
          
        audio.play();
          /* widget.audio.oncanplaythrough = function(){
                  widget.audio.play().catch(function(){
                });
          }; */
      } else {
        audio.pause();
      }
}

soundOffHandler = () => {
  audio.pause();
  soundOff.className = "alarm";
  soundOn.className = "alarm  hide-alarm";
  document.removeEventListener('factoryDataReady', factoryDataAlarmHandler); 
}

soundOnHandler = () => {
  soundOff.className = "alarm  hide-alarm";
  soundOn.className = "alarm";
  audio.play();
  factoryDataAlarmHandler();
  document.addEventListener('factoryDataReady', factoryDataAlarmHandler); 
}


document.addEventListener('factoryDataReady', factoryDataAlarmHandler); 
