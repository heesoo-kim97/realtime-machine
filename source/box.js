
  const factoryDataBoxHandler = (e) => {
  	
    for(let i = 0; i < machineArray.length; i++) {
        let thisID = machineArray[i];

        let conditionTextType = 'conditionText' + thisID;
        let sensorBox1Type = 'sensor-box1' + thisID;
        let sensorBox2Type = 'sensor-box2' + thisID;
        let sensorBox3Type = 'sensor-box3' + thisID;
        let sensorBox4Type = 'sensor-box4' + thisID;
        let sensorTextType = 'sensor-cond-text' + thisID;
        let svgColorType = 'svg-color' + thisID;

        let conditionText = document.getElementById(conditionTextType);
        let sensorBox1 = document.getElementById(sensorBox1Type);
        let sensorBox2 = document.getElementById(sensorBox2Type);
        let sensorBox3 = document.getElementById(sensorBox3Type);
        let sensorBox4 = document.getElementById(sensorBox4Type);
        let sensorText = document.getElementById(sensorTextType);
        let svgColor = document.getElementById(svgColorType);

        let dataObj = factoryData[thisID];

        let red = false;
        let yellow = false;

    
        if(dataObj.operationRate < 60) { 
            red = true;
            sensorBox1.className = "red-box";                             	
        } else if (dataObj.operationRate < 80) {
            yellow = true;
              sensorBox1.className = "yellow-box";
        } else {
            sensorBox1.className = "green-box";
        }
        
        if(dataObj.productionRate < 60) {
            red = true;	
            sensorBox2.className = "red-box";
        } else if (dataObj.productionRate < 80) {
            yellow = true;
              sensorBox2.className = "yellow-box";
        }  else {
            sensorBox2.className = "green-box";
        }
        
        if(thisID === 'A') {
            if(dataObj.machineTemp >= 41.5) {
                red = true;
                sensorBox3.className = "red-box";
            } else if (dataObj.machineTemp >= 25.5) {
                yellow = true;
                sensorBox3.className = "yellow-box";
            } else {
                sensorBox3.className = "green-box";
            }
        } else if (thisID === 'B') {
            if(dataObj.machineTemp >= 61) {
                red = true;
                sensorBox3.className = "red-box";
            } else if (dataObj.machineTemp >= 48) {
                yellow = true;
                sensorBox3.className = "yellow-box";
            } else {
                sensorBox3.className = "green-box";
            }
        } else if (thisID === 'C') {
            if(dataObj.machineTemp >= 179) {
                red = true;
                sensorBox3.className = "red-box";
            } else if (dataObj.machineTemp >= 165) {
                yellow = true;
                sensorBox3.className = "yellow-box";
            } else {
                sensorBox3.className = "green-box";
            }
        } else if (thisID === 'D') {
            if(dataObj.machineTemp >= 11.1) {
                red = true;
                sensorBox3.className = "red-box";
            } else if (dataObj.machineTemp >= 7.4) {
                yellow = true;
                sensorBox3.className = "yellow-box";
            } else {
                sensorBox3.className = "green-box";
            }
        } else if (thisID === 'E') {
            if(dataObj.machineTemp >= 89.5) {
                red = true;
                sensorBox3.className = "red-box";
            } else if (dataObj.machineTemp >= 85.7) {
                yellow = true;
                sensorBox3.className = "yellow-box";
            } else {
                sensorBox3.className = "green-box";
            }
        } else if (thisID === 'F') {
            if(dataObj.machineTemp >= 35.5) {
                red = true;
                sensorBox3.className = "red-box";
            } else if (dataObj.machineTemp >= 29.1) {
                yellow = true;
                sensorBox3.className = "yellow-box";
            } else {
                sensorBox3.className = "green-box";
            }
        }
        
        
         if(dataObj.pressureLevel >= 80) {
            red = true;
            sensorBox4.className = "red-box";
            
        } else if (dataObj.pressureLevel >= 65) {
            yellow = true;
            sensorBox4.className = "yellow-box";
        } else {
            sensorBox4.className = "green-box";
        }
        
        if (yellow === true && red === false) {
              conditionText.style.color = "rgb(255, 255, 0)";
              conditionText.textContent = "Caution";
              sensorText.style.color = "rgb(255, 255, 0)";
              svgColor.style.fill = "rgb(255, 255, 0)";
        } else if (red) {
            conditionText.style.color = "rgb(255, 0, 0)"; 
            conditionText.textContent = "Danger";
              sensorText.style.color = "rgb(255, 0, 0)";
              svgColor.style.fill = "rgb(255, 0, 0)";
        } else {
            conditionText.style.color = "rgb(0, 255, 0)";
              conditionText.textContent = "Normal";
              sensorText.style.color = "rgb(0, 255, 0)";
              svgColor.style.fill = "rgb(0, 255, 0)";
              //"fill: rgb(0, 255, 0)"
        }

    }
	
  }
  

  document.addEventListener('factoryDataReady', factoryDataBoxHandler); 
  
  
 