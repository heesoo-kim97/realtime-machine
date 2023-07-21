
const factoryDataPressureHandler = (e) => {
  	
    for(let i = 0; i < machineArray.length; i++) {
        let thisID = machineArray[i];

        let pressureLayoutType = 'pressure-layout' + thisID;
        let pressureType = 'pressure' + thisID;
        let pressureUnitType = 'pressure-unit' + thisID;
        
        let pressureLayout = document.getElementById(pressureLayoutType);
        let pressure = document.getElementById(pressureType);
        let pressureUnit = document.getElementById(pressureUnitType);
        let pressureData;

        let dataObj = factoryData[thisID];

        if(dataObj.pressureLevel % 1 === 0) {
        	pressureData = dataObj.pressureLevel + ".0";
        } else {
        	pressureData = dataObj.pressureLevel;
        }

        pressure.textContent = pressureData;
    
        
        if(dataObj.pressureLevel >= 80) {
            pressureLayout.style.border = "5px solid darkred";
            pressure.style.color = "rgb(255, 0, 0)";
            pressureUnit.style.color = "rgb(255, 0, 0)";
            
        } else if (dataObj.pressureLevel >= 65) {
            pressureLayout.style.border = "5px solid #8B8000";
            pressure.style.color = "rgb(255, 255, 0)";
            pressureUnit.style.color = "rgb(255, 255, 0)";
        } else {
            pressureLayout.style.border = "5px solid darkgreen";
            pressure.style.color = "rgb(0, 255, 0)";
            pressureUnit.style.color = "rgb(0, 255, 0)";
        }
    }
	
  }
  

  document.addEventListener('factoryDataReady', factoryDataPressureHandler); 
  
  
 