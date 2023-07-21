
factoryDataTextHandler = (e) => {
    

    for(let i = 0; i < machineArray.length; i++) {
        const thisID = machineArray[i];
        const dataObj = factoryData[thisID];
        const textColorType = 'textColor' + thisID;
        const pressureTextType = "pressureText" + thisID;

        const textColor = document.getElementById(textColorType);
        const pressureText = document.getElementById(pressureTextType);


      if(thisID === 'A') {
        if(dataObj.machineTemp >= 41.5) {
            textColor.style.color = "rgb(255, 0, 0)";
      } else if (dataObj.machineTemp >= 25.5) {
            textColor.style.color = "rgb(255, 255, 0)";
      } else {
            textColor.style.color = "rgb(0, 255, 0)";
      }          
    } else if (thisID === 'B') {
        if(dataObj.machineTemp >= 61) {
            textColor.style.color = "rgb(255, 0, 0)";
      } else if (dataObj.machineTemp >= 48) {
            textColor.style.color = "rgb(255, 255, 0)";
      } else {
            textColor.style.color = "rgb(0, 255, 0)";
      }    
    } else if (thisID === 'C') {
        if(dataObj.machineTemp >= 179) {
            textColor.style.color = "rgb(255, 0, 0)";
      } else if (dataObj.machineTemp >= 165) {
            textColor.style.color = "rgb(255, 255, 0)";
      } else {
            textColor.style.color = "rgb(0, 255, 0)";
      }    
    } else if (thisID === 'D') {
        if(dataObj.machineTemp >= 11.1) {
            textColor.style.color = "rgb(255, 0, 0)";
      } else if (dataObj.machineTemp >= 7.4) {
            textColor.style.color = "rgb(255, 255, 0)";
      } else {
            textColor.style.color = "rgb(0, 255, 0)";
      }    
    } else if (thisID === 'E') {
        if(dataObj.machineTemp >= 89.5) {
            textColor.style.color = "rgb(255, 0, 0)";
      } else if (dataObj.machineTemp >= 85.7) {
            textColor.style.color = "rgb(255, 255, 0)";
      } else {
            textColor.style.color = "rgb(0, 255, 0)";
      }    
    } else if (thisID === 'F') {
        if(dataObj.machineTemp >= 35.5) {
            textColor.style.color = "rgb(255, 0, 0)";
      } else if (dataObj.machineTemp >= 29.1) {
            textColor.style.color = "rgb(255, 255, 0)";
      } else {
            textColor.style.color = "rgb(0, 255, 0)";
      }    
    }

    if(dataObj.pressureLevel >= 80) {
            pressureText.style.color = "rgb(255, 0, 0)";
        } else if (dataObj.pressureLevel >= 65) {
                pressureText.style.color = "rgb(255, 255, 0)";
        } else {
                pressureText.style.color = "rgb(0, 255 , 0)";
        }  
    }

}
    

   
    
  


document.addEventListener('factoryDataReady', factoryDataTextHandler); 