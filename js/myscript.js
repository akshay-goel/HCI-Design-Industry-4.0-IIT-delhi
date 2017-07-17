// function updateSlider1(slideAmount) {
//   var display = document.getElementById("chosen1");
//   //show the amount
//   display.innerHTML=slideAmount;
// }
// function updateSlider2(slideAmount) {
//   var display = document.getElementById("chosen2");
//   //show the amount
//   display.innerHTML=slideAmount;
// }
// function updateSlider3(slideAmount) {
//   var display = document.getElementById("chosen3");
//   //show the amount
//   display.innerHTML=slideAmount;
// }
// function updateSlider4(slideAmount) {
//   var display = document.getElementById("chosen4");
//   //show the amount
//   display.innerHTML=slideAmount;
// }

function message1()
{

  alert("Boiler Temperature:-\n\n Reference Record:\n1)Average milling speed of last 2 hours: 147 RPM \n2) Last chemical level recorded: 8241 mm\n3)Noise level: 98 dB\n4)Current flow rate for INPUT material: 200 m3/sec\n5)Current flow rate for OUTPUT material: 400 m3/sec\n6)Optimum pressure calculated for boiler is 60 Pa\n \n Suggestions:\n1)For stable boiler temperature, you should lower down the boiler pressure. Control immediately the valve opening width (mm) and develop optimum pressure level.\n2)Level sensors are not functioning,inform maintenance engineer to troubleshoot the level sensor errors.\n3)Stop ‘milling phase’ machines for half an hour.");
}
function message2()
{

  alert("Boiler pressure:- \n \nReference Record:\n1)Average feed rate of last 2 hours: 128 m3/sec \n2)Last chemical level recorded: 8241 mm\n3)Noise level: 108 dB\n4)Vibration: 20.3 Hz\n5)Current flow rate for INPUT material: 150 m3/sec\n6)urrent flow rate for OUTPUT material: 300 m3/sec\n7)Optimum pressure calculated for boiler is 60 Pa\n \n Suggestions:\n1)For stable boiler pressure, you should lower down the flow rate of the input and output materials. Control immediately the valve opening width (mm).\n2)Keep valve opening such that the ratio of flow rate for input become 1/4 th of output flow rate.Try to keep pressure to an optimum level (60Pa).\n3)Level sensors are not functioning,inform maintenance engineer to troubleshoot the level sensor errors.\n4)Stop ‘milling phase’ machines for half an hour.");
}
function message3()
{

  alert("Motor Speed:- \n \nReference Record:\n1)Noise level: 108 dB \n2)Vibration: 20.3 Hz\n3)Stiller rotation speed: 150 rpm\n4)Current flow rate for OUTPUT material: 300 m3/sec\n5)Optimum pressure calculated for boiler is 60 Pa\n \n Suggestions:\n1)For stable boiler pressure, you should lower down the stiller motor speed.\n2)Keep valve opening such that the ratio of flow rate for input become 1/4 th of output flow rate.\n3)Try to keep pressure to an optimum level (60Pa).\n4)Level sensors are not functioning, inform maintenance engineer.");
}
function message4()
{

  alert("Station Voltage:- \n \nReference Record:\n1)Station load 1000-2000 M ohm.\n2)Noise level: 108 dB\n3)Vibration: 20.3 Hz\n4)Current flow rate for INPUT material: 150 m3/sec\n5)Current flow rate for OUTPUT material: 300 m3/sec\n6)Optimum pressure calculated for boiler is 60 Pan \n Suggestions:\n1)For stable blending phase, you should lower down the station load to minimum.\n2)Keep valve opening such that the ratio of flow rate for input become 1/4 th of output flow rate.\n3)Try to keep pressure to an optimum level (60Pa).")
}

function topError()
{
  alert("'Machine #627'\nGenerated Suggestion:\nError in Blending,Please do not move to other menus!");
}
