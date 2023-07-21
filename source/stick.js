
const factoryDataStickHandler = (e) => {

    for(let i = 0; i < machineArray.length; i++) {
        const thisID = machineArray[i];
        const tempCirType = "tempCir" + thisID;
        const tempCir = document.getElementById(tempCirType);

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
              tempCir.className = "temp-circle temp-circle-yellow";
        } else if (red) {
            tempCir.className = "temp-circle temp-circle-red";
        } else {
            tempCir.className = "temp-circle temp-circle-normal";
        }
        
    }
  
}

document.addEventListener('factoryDataReady', factoryDataStickHandler);
