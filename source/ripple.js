

const factoryDataRippleHandler = () => {
    const numArray = [1, 2, 3, 4, 5, 6];

    for(let i = 0; i < numArray.length; i++) {
        const rippleSensorType = "ripple-sensor" + numArray[i];
        const thisID = machineArray[i];
        const rippleSensor = document.getElementById(rippleSensorType);
        const dataObj = factoryData[thisID];

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
            } else if (dataObj.machineTemp >= 25.5) {
                yellow = true;
            } else {
            }
        } else if (thisID === 'B') {
            if(dataObj.machineTemp >= 61) {
                red = true;
            } else if (dataObj.machineTemp >= 48) {
                yellow = true;
            } else {
            }
        } else if (thisID === 'C') {
            if(dataObj.machineTemp >= 179) {
                red = true;
            } else if (dataObj.machineTemp >= 165) {
                yellow = true;
            } else {
            }
        } else if (thisID === 'D') {
            if(dataObj.machineTemp >= 11.1) {
                red = true;
            } else if (dataObj.machineTemp >= 7.4) {
                yellow = true;
            } else {
            }
        } else if (thisID === 'E') {
            if(dataObj.machineTemp >= 89.5) {
                red = true;
            } else if (dataObj.machineTemp >= 85.7) {
                yellow = true;
            } else {
            }
        } else if (thisID === 'F') {
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
        
        if (yellow === true && red === false) {
              rippleSensor.className = "ripple-sensor ripple-sensor-yellow"
        } else if (red) {
            rippleSensor.className = "ripple-sensor ripple-sensor-red"
        } else {
            rippleSensor.className = "ripple-sensor ripple-sensor-green"
        }

    }
    
}

document.addEventListener('factoryDataReady', factoryDataRippleHandler);