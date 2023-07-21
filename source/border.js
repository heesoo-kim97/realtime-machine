
const factoryDataBorderHandler = (e) => {
  	
    for(let i = 0; i < machineArray.length; i++) {
        let thisID = machineArray[i];

        let conditionBoxType = 'sensor-condition-box' + thisID;
        let tempBoxType = 'temperature-condition-box' + thisID;
        let pressureBox2Type = 'pressure-condition-box' + thisID;

        let conditionBox = document.getElementById(conditionBoxType);
        let tempBox = document.getElementById(tempBoxType);
        let pressureBox = document.getElementById(pressureBox2Type);

        let dataObj = factoryData[thisID];

        let red = false;
        let yellow = false;

    
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
        
        if(thisID === 'A') {
            if(dataObj.machineTemp >= 41.5) {
                red = true;
                tempBox.style.border = "1px solid rgb(255, 0, 0)";
                tempBox.style.animation = "blinkingBorderRed 2s infinite";
            } else if (dataObj.machineTemp >= 25.5) {
                yellow = true;
                tempBox.style.border = "1px solid rgb(255, 255, 0)";
      	        tempBox.style.animation = "";
            } else {
                tempBox.style.border = "1px solid #63d4ff";
      	        tempBox.style.animation = "";
            }
        } else if (thisID === 'B') {
            if(dataObj.machineTemp >= 61) {
                red = true;
                tempBox.style.border = "1px solid rgb(255, 0, 0)";
                tempBox.style.animation = "blinkingBorderRed 2s infinite";
            } else if (dataObj.machineTemp >= 48) {
                yellow = true;
                tempBox.style.border = "1px solid rgb(255, 255, 0)";
      	        tempBox.style.animation = "";
            } else {
                tempBox.style.border = "1px solid #63d4ff";
      	        tempBox.style.animation = "";
            }
        } else if (thisID === 'C') {
            if(dataObj.machineTemp >= 179) {
                red = true;
                tempBox.style.border = "1px solid rgb(255, 0, 0)";
                tempBox.style.animation = "blinkingBorderRed 2s infinite";
            } else if (dataObj.machineTemp >= 165) {
                yellow = true;
                tempBox.style.border = "1px solid rgb(255, 255, 0)";
      	        tempBox.style.animation = "";
            } else {
                tempBox.style.border = "1px solid #63d4ff";
      	        tempBox.style.animation = "";
            }
        } else if (thisID === 'D') {
            if(dataObj.machineTemp >= 11.1) {
                red = true;
                tempBox.style.border = "1px solid rgb(255, 0, 0)";
                tempBox.style.animation = "blinkingBorderRed 2s infinite";
            } else if (dataObj.machineTemp >= 7.4) {
                yellow = true;
                tempBox.style.border = "1px solid rgb(255, 255, 0)";
      	        tempBox.style.animation = "";
            } else {
                tempBox.style.border = "1px solid #63d4ff";
      	        tempBox.style.animation = "";
            }
        } else if (thisID === 'E') {
            if(dataObj.machineTemp >= 89.5) {
                red = true;
                tempBox.style.border = "1px solid rgb(255, 0, 0)";
                tempBox.style.animation = "blinkingBorderRed 2s infinite";
            } else if (dataObj.machineTemp >= 85.7) {
                yellow = true;
                tempBox.style.border = "1px solid rgb(255, 255, 0)";
      	        tempBox.style.animation = "";
            } else {
                tempBox.style.border = "1px solid #63d4ff";
      	        tempBox.style.animation = "";
            }
        } else if (thisID === 'F') {
            if(dataObj.machineTemp >= 35.5) {
                red = true;
                tempBox.style.border = "1px solid rgb(255, 0, 0)";
                tempBox.style.animation = "blinkingBorderRed 2s infinite";
            } else if (dataObj.machineTemp >= 29.1) {
                yellow = true;
                tempBox.style.border = "1px solid rgb(255, 255, 0)";
      	        tempBox.style.animation = "";
            } else {
                tempBox.style.border = "1px solid #63d4ff";
      	        tempBox.style.animation = "";
            }
        }
        
        
         if(dataObj.pressureLevel >= 80) {
            red = true;
            pressureBox.style.border = "1px solid rgb(0, 255, 0)";
      	    pressureBox.style.animation = "blinkingBorderRed 2s infinite";
            
        } else if (dataObj.pressureLevel >= 65) {
            yellow = true;
            pressureBox.style.border = "1px solid rgb(255, 255, 0)";
      	    pressureBox.style.animation = "";
        } else {
            pressureBox.style.border = "1px solid #63d4ff";
      	    pressureBox.style.animation = "";  
        }
        
        if (yellow === true && red === false) {
            conditionBox.style.border = "1px solid rgb(255, 255, 0)";
            conditionBox.style.animation = "";
        } else if (red) {
            conditionBox.style.border = "1px solid rgb(255, 0, 0)";
            conditionBox.style.animation = "blinkingBorderRed 2s infinite";
        } else {
            conditionBox.style.border = "1px solid #63d4ff";
            conditionBox.style.animation = "";
        }

    }
	
  }
  

  document.addEventListener('factoryDataReady', factoryDataBorderHandler); 
  
  
 