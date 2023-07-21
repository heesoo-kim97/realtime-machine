
const factoryDataTempHandler = function(e) {
  	
    for(let i = 0; i < machineArray.length; i++) {
        let thisID = machineArray[i];

        let tempLayoutType = 'temp-layout' + thisID;
        let temperatureType = 'temperature' + thisID;
        let tempUnitType = 'tempUnit' + thisID;
        
        let tempLayout = document.getElementById(tempLayoutType);
  	    let temperature = document.getElementById(temperatureType);
        let tempUnit = document.getElementById(tempUnitType);
        let tempData;

        let dataObj = factoryData[thisID];

        if(dataObj.machineTemp % 1 === 0) {
        	tempData = dataObj.machineTemp + ".0";
        } else {
        	tempData = dataObj.machineTemp;
        }

        temperature.textContent = tempData;
    
        if(thisID === 'A') {
            if(dataObj.machineTemp >= 41.5) {
                tempLayout.style.border = "5px solid darkred";
                temperature.style.color = "rgb(255, 0, 0)";
                tempUnit.style.color = "rgb(255, 0, 0)";
            } else if (dataObj.machineTemp >= 25.5) {
                tempLayout.style.border = "5px solid #8B8000";
                temperature.style.color = "rgb(255, 255, 0)";
                tempUnit.style.color = "rgb(255, 255, 0)";
            } else {
                tempLayout.style.border = "5px solid darkgreen";
                temperature.style.color = "rgb(0, 255, 0)";
                tempUnit.style.color = "rgb(0, 255, 0)";
            }
        } else if (thisID === 'B') {
            if(dataObj.machineTemp >= 61) {
                tempLayout.style.border = "5px solid darkred";
                temperature.style.color = "rgb(255, 0, 0)";
                tempUnit.style.color = "rgb(255, 0, 0)";
            } else if (dataObj.machineTemp >= 48) {
                tempLayout.style.border = "5px solid #8B8000";
                temperature.style.color = "rgb(255, 255, 0)";
                tempUnit.style.color = "rgb(255, 255, 0)";
            } else {
                tempLayout.style.border = "5px solid darkgreen";
                temperature.style.color = "rgb(0, 255, 0)";
                tempUnit.style.color = "rgb(0, 255, 0)";
            }
        } else if (thisID === 'C') {
            if(dataObj.machineTemp >= 179) {
                tempLayout.style.border = "5px solid darkred";
                temperature.style.color = "rgb(255, 0, 0)";
                tempUnit.style.color = "rgb(255, 0, 0)";
            } else if (dataObj.machineTemp >= 165) {
                tempLayout.style.border = "5px solid #8B8000";
                temperature.style.color = "rgb(255, 255, 0)";
                tempUnit.style.color = "rgb(255, 255, 0)";
            } else {
                tempLayout.style.border = "5px solid darkgreen";
                temperature.style.color = "rgb(0, 255, 0)";
                tempUnit.style.color = "rgb(0, 255, 0)";
            }
        } else if (thisID === 'D') {
            if(dataObj.machineTemp >= 11.1) {
                tempLayout.style.border = "5px solid darkred";
                temperature.style.color = "rgb(255, 0, 0)";
                tempUnit.style.color = "rgb(255, 0, 0)";
            } else if (dataObj.machineTemp >= 7.4) {
                tempLayout.style.border = "5px solid #8B8000";
                temperature.style.color = "rgb(255, 255, 0)";
                tempUnit.style.color = "rgb(255, 255, 0)";
            } else {
                tempLayout.style.border = "5px solid darkgreen";
                temperature.style.color = "rgb(0, 255, 0)";
                tempUnit.style.color = "rgb(0, 255, 0)";
            }
        } else if (thisID === 'E') {
            if(dataObj.machineTemp >= 89.5) {
                tempLayout.style.border = "5px solid darkred";
                temperature.style.color = "rgb(255, 0, 0)";
                tempUnit.style.color = "rgb(255, 0, 0)";
            } else if (dataObj.machineTemp >= 85.7) {
                tempLayout.style.border = "5px solid #8B8000";
                temperature.style.color = "rgb(255, 255, 0)";
                tempUnit.style.color = "rgb(255, 255, 0)";
            } else {
                tempLayout.style.border = "5px solid darkgreen";
                temperature.style.color = "rgb(0, 255, 0)";
                tempUnit.style.color = "rgb(0, 255, 0)";
            }
        } else if (thisID === 'F') {
            if(dataObj.machineTemp >= 35.5) {
                tempLayout.style.border = "5px solid darkred";
                temperature.style.color = "rgb(255, 0, 0)";
                tempUnit.style.color = "rgb(255, 0, 0)";
            } else if (dataObj.machineTemp >= 29.1) {
                tempLayout.style.border = "5px solid #8B8000";
                temperature.style.color = "rgb(255, 255, 0)";
                tempUnit.style.color = "rgb(255, 255, 0)";
            } else {
                tempLayout.style.border = "5px solid darkgreen";
                temperature.style.color = "rgb(0, 255, 0)";
                tempUnit.style.color = "rgb(0, 255, 0)";
            }
        }

    }
	
  }
  

  document.addEventListener('factoryDataReady', factoryDataTempHandler); 
  
  
 