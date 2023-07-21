
let operationData = [
   {name: 'A', percent: 88.2},
   {name: 'B', percent: 92.2},
   {name: 'C', percent: 91.1},
   {name: 'D', percent: 84.2},
   {name: 'E', percent: 94.6},
   {name: 'F', percent: 90.2}
];

let productionData = [
   {name: 'A', percent: 98.2},
   {name: 'B', percent: 86.2},
   {name: 'C', percent: 94.1},
   {name: 'D', percent: 83.2},
   {name: 'E', percent: 89.6},
   {name: 'F', percent: 92.2}
];


   const width = 420;
   const height = 190;
   const margin = {top: 3, bottom: 23, right: 3, left: 3};

   const operation = d3.select("#d3-op-container")
                 .append('svg')
                 .attr('height', height - margin.top - margin.bottom)
                 .attr('width', width - margin.right - margin.left)
                 .attr('viewBox', [0, 0, width, height]);
   
   const production = d3.select("#d3-prod-container")
                 .append('svg')
                 .attr('height', height - margin.top - margin.bottom)
                 .attr('width', width - margin.right - margin.left)
                 .attr('viewBox', [0, 0, width, height]);
   
   const x = d3.scaleBand()
               .domain(d3.range(operationData.length))
               .range([margin.left, width - margin.right])
               .padding(0.4);
   
   const y = d3.scaleLinear()
               .domain([0, 100])
               .range([height - margin.bottom, margin.top])
               

   const colorScale = d3.scaleLinear()
                        .domain([0, 55, 80, 100])
                        .range(["rgb(255, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)"])
   
   const opData = operation.append('g')
            .attr('fill', 'rgb(0, 255, 0)')
            .selectAll('rect')
            .data(operationData)
             .on("mouseover", function() {
               d3.select(this)
                 .transition()
                 .duration(200)
                 .style("opacity", 0.5) 
               })
             .on("mouseout", function() {
                  d3.select(this)
                    .transition()
                    .duration(200)
                    .style("opacity", 1);
                })
            .join('rect')
            .attr('x', (d, i) => x(i))
            .attr('y', (d) => y(d.percent))
            .attr('height', d => y(0) - y(d.percent))
            .attr('width', x.bandwidth())
   
   const prodData = production.append('g')
      .attr('fill', 'rgb(0, 255, 0)')
      .selectAll('rect')
      .data(productionData)
      .join('rect')
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.percent))
      .attr('height', d => y(0) - y(d.percent))
      .attr('width', x.bandwidth())
   
   const xAxis = (g) => {
      g.attr('transform', `translate(0, ${height - margin.bottom})`)
       .call(d3.axisBottom(x).tickFormat(i => operationData[i].name))
       .attr('font-size', '20px')
   }
   
   
   const yAxis = (g) => {
      g.attr('transform', `translate(${margin.left}, 0)`)
       .call(d3.axisLeft(y).ticks(null, operationData.format))
       .attr('font-size', '10px')
   }

   const tooltip = d3.select('#tooltip');
   

   operation.append('g').call(yAxis);
   operation.append('g').call(xAxis);
   operation.node();

   production.append('g').call(yAxis);
   production.append('g').call(xAxis);
   production.node(); 


   const factoryDataChartHandler = () => {

   
      for(var i = 0; i < machineArray.length; i++) {
   
         const thisID = machineArray[i];
         const opRate = factoryData[thisID].operationRate;
         const prodRate = factoryData[thisID].productionRate;
   
         operationData[i].percent = opRate;
         productionData[i].percent = prodRate;
     }

    opData.data(operationData)
          .attr("fill", (d) => {
            if(d.percent >= 0 && d.percent <= 55) {
               return "rgb(255, 0, 0)";
            } else if(d.percent > 55 && d.percent <= 80) {
               return "rgb(255, 255, 0)";
            } else if (d.percent > 80 && d.percent <= 100) {
               return "rgb(0, 255, 0)";
            }
          })
          .on("mouseover", function(d) {
            d3.select(this)
              .transition()
              .duration(200)
              .style("opacity", 0.5)

              //tooltip.style("display", "block")
            })
          .on("mouseout", function() {
               d3.select(this)
                 .transition()
                 .duration(200)
                 .style("opacity", 1);
               
               //tooltip.style("display", "none")
             })
          .join('rect')
          .attr('x', (d, i) => x(i))
          .attr('y', (d) => y(d.percent))
          .attr('height', d => y(0) - y(d.percent))
          .attr('width', x.bandwidth())
   
    
    prodData.data(productionData)
            .attr("fill", (d) => {
               if(d.percent >= 0 && d.percent <= 55) {
                  return "rgb(255, 0, 0)";
               } else if(d.percent > 55 && d.percent <= 80) {
                  return "rgb(255, 255, 0)";
               } else if (d.percent > 80 && d.percent <= 100) {
                  return "rgb(0, 255, 0)";
               }
            })
            .on("mouseover", function() {
               d3.select(this)
               .transition()
               .duration(200)
               .style("opacity", 0.5) 
               })
            .on("mouseout", function() {
                  d3.select(this)
                  .transition()
                  .duration(200)
                  .style("opacity", 1);
               })
            .join('rect')
            .attr('x', (d, i) => x(i))
            .attr('y', (d) => y(d.percent))
            .attr('height', d => y(0) - y(d.percent))
            .attr('width', x.bandwidth())

     //opData.attr('fill', colorScale(yValue))

     operation.append('g').call(yAxis);
     operation.append('g').call(xAxis);
     operation.node();
   
   }
   
     
   


document.addEventListener('factoryDataReady', factoryDataChartHandler); 
