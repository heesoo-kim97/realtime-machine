
const machineArray = ['A', 'B', 'C', 'D', 'E', 'F'];
let sensorType = {};
const factoryData = {};

   const setFactoryData = () => {
    for(let i = 0; i < machineArray.length; i++) {
        let machineId = machineArray[i];
        setMachineData(machineId);

        factoryData[machineId] = sensorType;
    }


    const event = new Event('factoryDataReady');
    event.detail = { data: true};
    document.dispatchEvent(event);
   }

const setMachineData = (id) => {

    sensorType = {'operationRate': 0, 'productionRate': 0, 'machineTemp': 0, 'pressureLevel': 0}

    for(let key in sensorType) {

        var sensorLevel = Math.round((Math.random() * 10000))/100;

        if (key === 'operationRate') {
            // 레벨별 가동률 정하기 - 퍼센티지
           var opRate = (Math.round(Math.random() * 150) + 850) / 10;  // 85.0 ~ 100.0%
           var opRateCaution = (Math.round(Math.random() * 199) + 600) / 10; // 60.0 ~ 79.9%
           var opRateError = (Math.round(Math.random() * 250) + 300) / 10; // 30.0 ~ 55.0%
          
           if (sensorLevel > 90) {
                   sensorType[key] = opRateError;
           } else if (sensorLevel > 80) {
                    sensorType[key] = opRateCaution;
           } else {
                    sensorType[key] = opRate;
                } 
        } else if (key === 'productionRate') {
            // 생산율 정하기 - %
           var proRate = (Math.round(Math.random() * 150) + 850) / 10;  // 85.0 ~ 100.0%
           var proRateCaution = (Math.round(Math.random() * 199) + 600) / 10; // 60.0 ~ 79.9%
           var proRateError = (Math.round(Math.random() * 250) + 300) / 10; // 30.0 ~ 55.0%
          
           if (sensorLevel > 90) {
                   sensorType[key] = proRateError;
           } else if (sensorLevel > 80) {
                   sensorType[key] = proRateCaution;
           } else {
                   sensorType[key] = proRate;
                } 
        } else if (key === 'machineTemp') {
            // 머신 온도 정하기 - 섭씨
           var temp;
           var tempCaution;
           var tempError;
             if(id === 'A') {
               temp = (Math.round(Math.random() * 10) + 195) / 10;
                 tempCaution = (Math.round(Math.random() * 20) + 255) / 10;
                 tempError = (Math.round(Math.random() * 30) + 415) / 10;
           } else if (id === 'B') {
               temp =  (Math.round(Math.random() * 10) + 420) / 10;
                 tempCaution = (Math.round(Math.random() * 20) + 480) / 10;
                 tempError = (Math.round(Math.random() * 30) + 610) / 10;
           } else if (id === 'C') {
               temp =  (Math.round(Math.random() * 10) + 1600) / 10;
                 tempCaution = (Math.round(Math.random() * 20) + 1650) / 10;
                 tempError = (Math.round(Math.random() * 30) + 1790) / 10;
           } else if (id === 'D') {
               temp =  (Math.round(Math.random() * 10) + 36) / 10;
                 tempCaution = (Math.round(Math.random() * 20) + 74) / 10;
                 tempError = (Math.round(Math.random() * 30) + 111) / 10;
           } else if (id === 'E') {
               temp =  (Math.round(Math.random() * 10) + 821) / 10;
                 tempCaution = (Math.round(Math.random() * 20) + 857) / 10;
                 tempError = (Math.round(Math.random() * 30) + 895) / 10;
           } else if (id === 'F') {
               temp =  (Math.round(Math.random() * 10) + 250) / 10;
                 tempCaution = (Math.round(Math.random() * 20) + 291) / 10;
                 tempError = (Math.round(Math.random() * 30) + 355) / 10;
           } 
          
           if (sensorLevel > 90) {
                   sensorType[key] = tempError;
           } else if (sensorLevel > 80) {
                   sensorType[key] = tempCaution;
           } else {
                   sensorType[key] = temp;
                } 
        } else if (key === 'pressureLevel') {
            // 머신 기내압력 정하기 - Pa 
           var pressure =  (Math.round(Math.random() * 30) + 500) / 10;  // 50.0 ~ 53.0
           var pressureCaution = (Math.round(Math.random() * 50) + 650) / 10;  // 65.0 ~ 70.0
           var pressureError = (Math.round(Math.random() * 100) + 800) / 10;  // 80.0 ~ 90.0
          
           if (sensorLevel > 90) {
                   sensorType[key] = pressureError;
           } else if (sensorLevel > 80) {
                   sensorType[key] = pressureCaution;
           } else {
                   sensorType[key] = pressure;
                } 
        }
    }
   }

   
    const intervalData = setInterval(setFactoryData, 5000);



  
  
 