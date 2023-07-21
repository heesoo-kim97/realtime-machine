
  
const factoryDataReadyHandler = (e) => {
    const idArray = ['A', 'B', 'C', 'D', 'E', 'F'];
  	const statusBoxA = document.getElementById('status-boxA');
    const statusBoxB = document.getElementById('status-boxB');
    const statusBoxC = document.getElementById('status-boxC');
    const statusBoxD = document.getElementById('status-boxD');
    const statusBoxE = document.getElementById('status-boxE');
    const statusBoxF = document.getElementById('status-boxF');
    
    const opNumA = document.getElementById('op-numA');
    const opNumB = document.getElementById('op-numB');
    const opNumC = document.getElementById('op-numC');
    const opNumD = document.getElementById('op-numD');
    const opNumE = document.getElementById('op-numE');
    const opNumF = document.getElementById('op-numF');
    
    const prodNumA = document.getElementById('prod-numA');
    const prodNumB = document.getElementById('prod-numB');
    const prodNumC = document.getElementById('prod-numC');
    const prodNumD = document.getElementById('prod-numD');
    const prodNumE = document.getElementById('prod-numE');
    const prodNumF = document.getElementById('prod-numF');
    
    for(let i = 0; i < idArray.length; i++) {
        let thisID = idArray[i];

      	let dataObj = factoryData[thisID];
      
      	let operationRate;
        let productionRate;
      
      	if(dataObj.operationRate % 1 === 0) {
        	operationRate = dataObj.operationRate + ".0";
        } else {
        	operationRate = dataObj.operationRate;
        }
      
      if(dataObj.productionRate % 1 === 0) {
      		productionRate = dataObj.productionRate + ".0";
      } else {
      		productionRate = dataObj.productionRate;
      }
      
      	let opConcat = operationRate + " %";
      	let prodConcat = productionRate + " %";
      
      	let red = false;
      	let yellow = false;
      
        if(operationRate < 60) { 
    		red = true;
          	concatOPRed = operationRate + " %";
    	} else if (operationRate < 80) {
    		yellow = true;
            concatOPYellow = operationRate + " %";
    	} else {
    		concatOP = operationRate + " %";
   	 	}

    	if(productionRate < 60) {
    		red = true;
          	concatProdRed = productionRate + " %";
    	} else if (productionRate < 80) {
    		yellow = true;
          	concatProdYellow = productionRate + " %";
    	}  else {
    		concatProd = productionRate + " %";
    	}
    
    
     	if(dataObj.pressureLevel >= 80) {
    		red = true;
    	} else if (dataObj.pressureLevel >= 65) {
    		yellow = true;
    	} else {
    
    	}
      	
      
		if(i === 0) {
        	opNumA.textContent = opConcat;
          	prodNumA.textContent = prodConcat;
          	
          	if(dataObj.machineTemp >= 41.5) {
    			red = true;
    		} else if (dataObj.machineTemp >= 25.5) {
    			yellow = true;
    		} else {
    
    		}
          
          	if(yellow === true && red === false) {
            	statusBoxA.style.background = "rgb(255, 255, 0)";
            } else if (red) {
            	statusBoxA.style.background = "rgb(255, 0, 0)";
            } else {
            	statusBoxA.style.background = "rgb(0, 255, 0)";
            }
        } else if (i === 1) {
        	opNumB.textContent = opConcat;
          	prodNumB.textContent = prodConcat;
          	
          	if(dataObj.machineTemp >= 61) {
    			red = true;
    		} else if (dataObj.machineTemp >= 48) {
    			yellow = true;
    		} else {
    
    		}
          
          	if(yellow === true && red === false) {
            	statusBoxB.style.background = "rgb(255, 255, 0)";
            } else if (red) {
            	statusBoxB.style.background = "rgb(255, 0, 0)";
            } else {
            	statusBoxB.style.background = "rgb(0, 255, 0)";
            }
        } else if (i === 2) {
        	opNumC.textContent = opConcat;
          	prodNumC.textContent = prodConcat;
          	
          	if(dataObj.machineTemp >= 179) {
    			red = true;
    		} else if (dataObj.machineTemp >= 165) {
    			yellow = true;
    		} else {
    
    		}
          	
          	if(yellow === true && red === false) {
            	statusBoxC.style.background = "rgb(255, 255, 0)";
            } else if (red) {
            	statusBoxC.style.background = "rgb(255, 0, 0)";
            } else {
            	statusBoxC.style.background = "rgb(0, 255, 0)";
            }
        } else if (i === 3) {
        	opNumD.textContent = opConcat;
          	prodNumD.textContent = prodConcat;
          
          	if(dataObj.machineTemp >= 11.1) {
    			red = true;
    		} else if (dataObj.machineTemp >= 7.4) {
    			yellow = true;
    		} else {
    
    		}	
          
          	if(yellow === true && red === false) {
            	statusBoxD.style.background = "rgb(255, 255, 0)";
            } else if (red) {
            	statusBoxD.style.background = "rgb(255, 0, 0)";
            } else {
            	statusBoxD.style.background = "rgb(0, 255, 0)";
            }
        } else if (i === 4) {
        	opNumE.textContent = opConcat;
          	prodNumE.textContent = prodConcat;
          
          	if(dataObj.machineTemp >= 89.5) {
    			red = true;
    		} else if (dataObj.machineTemp >= 85.7) {
    			yellow = true;
    		} else {
    
    		}
          
          	if(yellow === true && red === false) {
            	statusBoxE.style.background = "rgb(255, 255, 0)";
            } else if (red) {
            	statusBoxE.style.background = "rgb(255, 0, 0)";
            } else {
            	statusBoxE.style.background = "rgb(0, 255, 0)";
            }
        } else {
        	opNumF.textContent = opConcat;
          	prodNumF.textContent = prodConcat;
          
          	if(dataObj.machineTemp >= 35.5) {
    			red = true;
    		} else if (dataObj.machineTemp >= 29.1) {
    			yellow = true;
    		} else {
    
    		}
          
          	if(yellow === true && red === false) {
            	statusBoxF.style.background = "rgb(255, 255, 0)";
            } else if (red) {
            	statusBoxF.style.background = "rgb(255, 0, 0)";
            } else {
            	statusBoxF.style.background = "rgb(0, 255, 0)";
            }
        }    
    
    }
   
  }
  

  document.addEventListener('factoryDataReady', factoryDataReadyHandler); 
  
  
  
  