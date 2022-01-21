'use strict'

var initData =
[ 
  {x: 0, y: "OFF"},
  {x: 15, y: "OFF"},
  {x: 30, y: "OFF"},
  {x: 45, y: "OFF"},
  {x: 60, y: "OFF"},
  {x: 75, y: "OFF"},
  {x: 90, y: "OFF"},
  {x: 105, y: "OFF"},
  {x: 120, y: "OFF"},
  {x: 135, y: "OFF"},
  {x: 150, y: "OFF"},
  {x: 165, y: "OFF"},
  {x: 180, y: "OFF"},
  {x: 195, y: "OFF"},
  {x: 210, y: "OFF"},
  {x: 225, y: "OFF"},
  {x: 240, y: "OFF"},
  {x: 255, y: "ON"},
  {x: 270, y: "ON"},
  {x: 285, y: "D"},
  {x: 300, y: "D"},
  {x: 315, y: "D"},
  {x: 330, y: "D"},
  {x: 345, y: "D"},
  {x: 360, y: "D"},
  {x: 375, y: "D"},
  {x: 390, y: "D"},
  {x: 405, y: "D"},
  {x: 420, y: "D"},
  {x: 435, y: "D"},
  {x: 450, y: "D"},
  {x: 465, y: "D"},
  {x: 480, y: "D"},
  {x: 495, y: "D"},
  {x: 510, y: "D"},
  {x: 525, y: "D"},
  {x: 540, y: "D"},
  {x: 555, y: "D"},
  {x: 570, y: "D"},
  {x: 585, y: "D"},
  {x: 600, y: "D"},
  {x: 615, y: "D"},
  {x: 630, y: "D"},
  {x: 645, y: "D"},
  {x: 660, y: "D"},
  {x: 675, y: "D"},
  {x: 690, y: "D"},
  {x: 705, y: "D"},
  {x: 720, y: "D"},
  {x: 735, y: "D"},
  {x: 750, y: "D"},
  {x: 765, y: "D"},
  {x: 780, y: "D"},
  {x: 795, y: "D"},
  {x: 810, y: "D"},
  {x: 825, y: "D"},
  {x: 840, y: "D"},
  {x: 855, y: "D"},
  {x: 870, y: "D"},
  {x: 885, y: "OFF"},
  {x: 900, y: "OFF"},
  {x: 915, y: "OFF"},
  {x: 930, y: "OFF"},
  {x: 945, y: "OFF"},
  {x: 960, y: "OFF"},
  {x: 975, y: "ON"},
  {x: 990, y: "ON"},
  {x: 1005, y: "ON"},
  {x: 1020, y: "ON"},
  {x: 1035, y: "D"},
  {x: 1050, y: "D"},
  {x: 1065, y: "D"},
  {x: 1080, y: "D"},
  {x: 1095, y: "OFF"},
  {x: 1110, y: "OFF"},
  {x: 1125, y: "OFF"},
  {x: 1140, y: "OFF"},
  {x: 1155, y: "OFF"},
  {x: 1170, y: "OFF"},
  {x: 1185, y: "OFF"},
  {x: 1200, y: "OFF"},
  {x: 1215, y: "OFF"},
  {x: 1230, y: "OFF"},
  {x: 1245, y: "OFF"},
  {x: 1260, y: "OFF"},
  {x: 1275, y: "OFF"},
  {x: 1290, y: "OFF"},
  {x: 1305, y: "OFF"},
  {x: 1320, y: "OFF"},
  {x: 1335, y: "OFF"},
  {x: 1350, y: "OFF"},
  {x: 1365, y: "OFF"},
  {x: 1380, y: "OFF"},
  {x: 1395, y: "OFF"},
  {x: 1410, y: "OFF"},
  {x: 1425, y: "OFF"},
  {x: 1440, y: "OFF"},
];





  // if( !prev[curr.y] ) {
  //   prev[curr.y] = 0;
  // }

  // prev[curr.y] += 15;

  // return prev;



var obj = {name: null, value: null };
var arr = [];
// var arrindex = 0;

var texts = initData.reduce((prev, curr, index, array) => {
  // var obj = {name: null, value: null };
  
  if ( !prev[curr.y] ) {

    prev[curr.y] = 0;
     
    arr.push({name: curr.y, value: prev[curr.y] = 0});

    // obj['name'] = curr.y;
    // obj['value'] = prev[curr.y];
    
    // arr.push(obj);
   
  }
  // arrindex++;
  // console.log(arrindex);

  // prev[curr.y] += 15;
   prev[curr.y] += 15;


   arr.map(item => {

    if(item.name === curr.y ) {
      item.value = prev[curr.y];
    }

   
   });

  //  obj['value'] = prev[curr.y];
  //  arr.push(obj);
  //  obj['value'] = prev[curr.y] +=15;

  // console.log(obj);


  // console.log( obj['value'] );
  // console.log( obj['value'] = prev[curr.y] );

  // if(arr[0]['name'] === 'OFF' ) {
  //   arr[0]['value'] = prev[curr.y];
  // }
  // if( arr[1]['name'] === 'ON' ) {
  //   arr[1]['value'] = prev[curr.y];
  // }


  // arr[arrindex]['value'] = prev[curr.y];
//  console.log( arrindex );


  // obj[value] = prev[curr.y];

  // obj.value = prev[curr.y] += 15;
  // {name: curr.y, value: prev[curr.y] = 0}

  // prev.map[curr.y]

  // prev.map[curr.y] = 0;
  // prev.map[curr.x] = 0;

  // prev.map[curr.y] = true; // помечаем город, как обработанный
  // prev.map[curr.y] = curr.y;


  // console.log(curr);


  // prev.push(curr); // добавляем объект в массив городов

  return prev;
}, {});

console.log(texts);
console.log(arr);




/*
Почтииииииии
var obj = {};
var arr = [];
var texts = initData.reduce((prev, curr) => {

  console.log(prev[curr.x]);

  if ( !prev[curr.y] ) {

    arr.push({name: curr.y, value: curr.x = 0});

    prev[curr.y] = 0;

  }
 
  prev[curr.y] += 15;

  // prev.map[curr.y]

  // prev.map[curr.y] = 0;
  // prev.map[curr.x] = 0;

  // prev.map[curr.y] = true; // помечаем город, как обработанный
  // prev.map[curr.y] = curr.y;


  // console.log(curr);


  // prev.push(curr); // добавляем объект в массив городов

  return prev;
}, {});

console.log(texts);
console.log(arr);
*/

























// var items = [
//   { 'lightBlue': 4, 'darkBlue': 2, 'red': 4, 'orange': 6, 'purple': 7 },
//   { 'lightBlue': 6, 'darkBlue': 5, 'red': 1, 'orange': 2, 'purple': 3 },
//   { 'lightBlue': 2, 'darkBlue': 4, 'red': 3, 'orange': 4, 'purple': 9 }
// ], userSelectedColors = ['lightBlue', 'darkBlue'];

// var totalCount = items.reduce(function(total, obj) {
//     return total + userSelectedColors.reduce(function(total, prop) {
//         return total + obj[prop];
//     }, 0);
// }, 0);

// console.log(totalCount);

// var a = [
//   {val1: 1, val2: 1},
//   {val1: 2, val2: 2},
//   {val1: 3, val2: 3}
//   ];
  
//   function sumProps (arr) {
//     var out = {};
//     arr.forEach(function(i) {
//       for (var p in i) {
//         if (i.hasOwnProperty(p)) {
//           out[p] = out[p] || 0;
//           out[p] += i[p];
//         }
//       }
//     });
//     return out;
//   }
//   console.log(sumProps (initData));

//   var items = [
//     { 'lightBlue': 4, 'darkBlue': 2, 'red': 4, 'orange': 6, 'purple': 7 },
//     { 'lightBlue': 6, 'darkBlue': 5, 'red': 1, 'orange': 2, 'purple': 3 },
//     { 'lightBlue': 2, 'darkBlue': 4, 'red': 3, 'orange': 4, 'purple': 9 }
//   ], userSelectedColors = ['lightBlue', 'darkBlue'];
  
//   var totalCount = items.reduce(function(total, obj) {
//       return total + userSelectedColors.reduce(function(total, prop) {
//           return total + obj[prop];
//       }, 0);
//   }, 0);
  
//   console.log(totalCount);







  
//   let object3 = {};
  
//   // Создаём цикл с массивом, в который вводим массивы, которые нужно сложить
//   for(var i = 0,  initData; i < initData.length; i++){
//     for(key in initData[i]){
//       if(object3[key] == undefined){
//         object3[key] = initData[i][key];
//       }else{
//         object3[key] = parseFloat(object3[key]) + parseFloat(initData[i][key]);
//       };
//     };
//   };
  
//   console.log(object3);









/*

let cities = citiesArray.reduce((acc, city) => {
  if (acc.map[city.VALUE]) // если данный город уже был
    return acc; // ничего не делаем, возвращаем уже собранное

  acc.map[city.VALUE] = true; // помечаем город, как обработанный
  acc.cities.push(city); // добавляем объект в массив городов
  return acc; // возвращаем собранное
}, {
  map: {}, // здесь будут отмечаться обработанные города
  cities: [] // здесь конечный массив уникальных городов
})
.cities; // получаем конечный массив

console.log(cities);
*/


// initData.forEach(element => {

    
//   // for (var key in element) {
//   //   console.log(element[key]);



//   // }

  
// });







  // if( !prev[curr.y] ) {
  //   prev[curr.y] = 0;
  // }

  // prev[curr.y] += 15;

  // return prev;

// var texts = initData.reduce((prev, curr) => {
//   console.log(prev.map[curr.y] );
//   console.log(prev.map[curr.x] );
//   console.log(curr.x);

//   if ( prev.map[curr.y] ) { // если данный город уже был

//     // prev.map[curr.x] += 15;

   

//     // return prev; // ничего не делаем, возвращаем уже собранное
//   }

//   // prev.map[curr.y] = 0;
//   // prev.map[curr.x] = 0;

//   // prev.map[curr.y] = true; // помечаем город, как обработанный
//   // prev.map[curr.y] = curr.y;


//   console.log(curr);


//   prev.texts.push(curr); // добавляем объект в массив городов


//   return prev; // возвращаем собранное
// }, {
//   map: {n:null, v: null}, // здесь будут отмечаться обработанные города
//   texts: [] // здесь конечный массив уникальных городов
// })
// .texts; // получаем конечный массив

// console.log(texts);







// var array = [];
// var texta = initData.reduce((prev, curr) => {
   

//   // if( !prev[curr.y] ) {
//   //   prev[curr.y] = 0;
//   // }

//   // prev[curr.y] += 15;

//   // return prev;

//     if( !prev[curr.y] ) {
//     prev[curr.y] = 0;
//   }

//   prev[curr.y] += 15;

//   return prev;



//   console.log(  prev );




// }, {name: null, val: null});
// console.log(texta);
// console.log(array);



// // Delete repeated elements in array
// async function noRepeatArray(arr) {

//   return arr.reduce((prev, curr) => {
    
//     if( prev.indexOf(curr) < 0 ) {
//       prev.push(curr);
//     }

//     return prev;

//   }, []);
// }



// function filterArray(arr) {

//   const uniq = {};

//   return arr.filter(obj => {			
        
//     return !uniq[obj.Emails] && (uniq[obj.Emails] = true);
        
//   });
// }


// var arr = [];
// var reversedObject = {};

// var textRightData = initData.reduce((prev, curr, index) => {


//   // for (var key in prev) {

//   //   reversedObject[ obj[key] ] = key;

//   // }



//   if( !prev[curr.y]) {
   
//     prev[curr.y] = 0;

//     // prev[0][curr.y] = 0;

//     arr.push( prev );
    
//   }

//   prev[curr.y] += 15;

//   return prev;

// }, {});
// console.log(textRightData);



/*
var textRightData = initData.reduce((prev, curr) => {

  if( !prev[curr.y] ) {
    prev[curr.y] = 0;
  }

  prev[curr.y] += 15;

  return prev;

  // if(curr.y === 'OFF') {

  //     item.x = item.x;

  //     return {x: item.x, y: item.y};
  //   }

  //   else if(item.y === 'SB') {

  //     item.y = 3;

  //     return {x: item.x, y: item.y};
  //   }

  //   else if(item.y === 'D') {
  //     item.y = 2;

  //     return {x: item.x, y: item.y};
  //   }

  //   else if(item.y === 'ON') {
  //     item.y = 1;

  //     return {x: item.x, y: item.y};
  //   }

  //   else {
  //     item.y = null;

  //     return {x: item.x, y: item.y};
  //   }

    

  
}, {});
console.log(textRightData);
*/



const parsedData = initData.map((item) => {

  if(item.y === 'OFF') {

    item.y = 4;

    return {x: item.x, y: item.y};
  }

  else if(item.y === 'SB') {

    item.y = 3;

    return {x: item.x, y: item.y};
  }

  else if(item.y === 'D') {
    item.y = 2;

    return {x: item.x, y: item.y};
  }

  else if(item.y === 'ON') {
    item.y = 1;

    return {x: item.x, y: item.y};
  }

  else {
    item.y = null;

    return {x: item.x, y: item.y};
  }
});
console.log(parsedData);







//Отступы
var margin = {
  top: 50,
  right: 80,
  bottom: 30,
  left: 50
};

//Ширина и высота
var width = 600 - margin.left - margin.right; 
var height = 140 - margin.top - margin.bottom;

// Масштабирование SVG
var xCoordinate = d3.scaleLinear().range([0, width]);
var yCoordinate = d3.scaleLinear().range([height, 0]);
xCoordinate.domain(d3.extent(parsedData, function(d) { return d.x; }));
yCoordinate.domain([0, d3.max(parsedData, function(d) { return d.y; }) ] );

//Создаем ось X с кол-вом делений
//Создаем массив для оси Х
var tickValuesXArray = [];

parsedData.forEach((item) => {

  if(item.x % 60 === 0) {
    tickValuesXArray.push(item.x);
  }

});


var xAxis = d3
  .axisTop(xCoordinate)

  .tickValues(tickValuesXArray)

  .tickSize(-height)

  .tickFormat((item) => {
    var result = item / 60;
    var resultMax = 12;

    if(result === 0 || result === 24) {
      return item = 'M';
    }
    else if(result === 12) {
      return item = 'N';
    }
    else if(resultMax < result) {
      var difference = result - resultMax;
      return difference;
    }
    else {
      return result;
    }     
  })
;


//Создаем ось Y с кол-вом делений
var tickValuesYArray = [0, 1, 2, 3, 4];

var yAxis = d3
  .axisLeft(yCoordinate)

  .tickValues(tickValuesYArray)

  .tickSize(-width)

  .tickFormat((item) => {

    if(item === 4) {
      return item = 'OFF';
    }
    else if(item === 3) {
      return item = 'SB';
    }
    else if(item === 2) {  
      return item = 'D';
    }
    else if(item === 1) {  
      return item = 'ON';
    }
    else {
      return item = '';
    }
  })
;

//Функция, создающая по массиву точек линию
var line = d3.line()

  .defined(function (d) {
    return d.y !== null;
  })

  .curve(d3.curveStepBefore)

  .x(function(d){
    return xCoordinate(d.x);
  })

  .y(function(d){
    return yCoordinate(d.y);
	})
;

// Добавляем SVG на страницу
var svg = d3.select(".app")
						.append("svg")
						.attr("class", "axis")
						.attr("viewBox", "0 0 540 90")
;

//Добавляем g контейнер на страницу
//Смещение контейнера
var container = svg.append("g")
                   .attr("class", "container")
                   .attr("transform", "translate(20, 20)") 
;





drawAxisMinors(width, 0);
drawAxisMinors(width, 15);

drawAxisMinors(width, 45);
drawAxisMinors(width, 60);

function drawAxisMinors(width, xMinorAxisPosition) {

  var maxValueXAxis = d3.max(parsedData, function(d) { return d.x; }); //1440
  var stepValueXAxis = 15;

  var tickValues = [];
  for (var i = 0; i <= maxValueXAxis; i += stepValueXAxis) {
    tickValues.push(i);
  }

  var xMinorCoordinate = d3.scaleLinear()
    .domain([tickValues[0], tickValues[tickValues.length - 1]])
    .range([0, width])
  ;

  var xMinorAxis = d3
    .axisBottom(xMinorCoordinate)
    .tickValues(tickValues)
    .tickFormat('')
  ;

  var xMinorAxisSvg = container
    .append("g")
    .attr("class", "x-axis-division")
    .attr("transform", "translate(0, " + xMinorAxisPosition + ")")
    .call(xMinorAxis)
  ;

  xMinorAxisSvg.selectAll(".tick")
    .filter(function (d) {
      return (d % 30 === 0);
    })
    .classed("middle-minor", true)
  ;

  xMinorAxisSvg.selectAll(".tick")
    .filter(function (d) {
      return !(d % 30 === 0);
    })
    .classed("small-minor", true)
  ;


  if(xMinorAxisPosition > stepValueXAxis) {
      
    xMinorAxisSvg
    .selectAll(".small-minor line")
    .attr("y2", "-5")
    ;

    xMinorAxisSvg
    .selectAll(".middle-minor line")
    .attr("y2", "-7")
    ;

  }
  else {

    xMinorAxisSvg
    .selectAll(".small-minor line")
    .attr("y2", "5")
    ;

    xMinorAxisSvg
    .selectAll(".middle-minor line")
    .attr("y2", "7")
    ;

  }

  xMinorAxisSvg
    .selectAll("path")
    .classed("x-axis-division-path", true)
  ;
}

//Отрисовка оси Х             
container.append("g")       
	       .attr("class", "x-axis")
	      //  .attr("transform", "translate(0," + 0 + ")")
         .call(xAxis)
;

//Отрисовка оси Y
container.append("g")       
         .attr("class", "y-axis")
	       .call(yAxis)
;

//Добавляем график в контейнер на страницу
var shedule = container.append("g")
                       .attr("class", "shedule")
                       .attr("transform", "translate(0.5, 8)")
;

// Функция, создающая по массиву точек линию
shedule.append("path")
       .attr("d", line(parsedData))
       .attr("class", "border-line")
;

d3.selectAll(".y-axis .tick text")
  .attr("y", 8)
  .classed("y-axis-left-text", true)
;

var dataset = [10,21,32,43];
var dataset = [
  {x: 0, y: "OFF"},
  {x: 15, y: "OFF"},
  {x: 30, y: "OFF"},

];

var a = [];
// a.push(textRightData);

// console.log(textRightData.OFF / 60 );
// console.log(textRightData.ON / 60 );
// console.log(textRightData.D / 60 );
// console.log(textRightData.SB / 60 );

// console.log(1440 / 60 );


d3.selectAll(".y-axis .tick")
  .append("text")
  .attr("x", 475)
  .attr("y", 10)
  .attr("text-anchor", "start")
  .data(dataset)
  .text(function(d) {
    // console.log(d);

    if(d.y === 'OFF') {
      return d.x;
    }
    // else if(d === 3) {
    //   return d = '11.50';
    // }
    // else if(d === 2) {  
    //   return d = '11.50';
    // }
    // else if(d === 1) {  
    //   return d = '11.50';
    // }
    // else {
    //   return d = '';
    // }



  })
  .classed("y-axis-right-text", true)
;





