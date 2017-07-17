

  //for the first one
  var missChance1=0;
  var wrongAttempt1=0;
  var responseTime1=[];
  var value1=55;//value of the slider
  var wrongPressCount=0;
  var myDate1;

// function for counting the wrong presses of side buttons
  function wrongPress()
  {
    wrongPressCount++;
  }
  function increase1()
  {
      value1++;
      document.getElementById('value1').innerHTML=value1;
      if(value1==60)
      {
        myDate1=new Date();
      }
      if(value1>=60)
      {
        document.getElementById("img1").src="png/red-dial.png";
      }
      if(value1>70)
      {
        updateSlider2();
        missChance1++;
      }
      //console.log(value);
  }
  function decrease1()
  {
    value1--;
    document.getElementById('value1').innerHTML=value1;
    if(value1<60) document.getElementById("img1").src="png/dial.png";
    //console.log(value);

  }
  //setTimeout(increase,1000);
  //setTimeout(increase,2000);

  var inc1=0;

  function start1()
  {
    //count++;
    while(inc1<245)
    {
      //value++;
      inc1++;
      var delay;
      delay=inc1*1000;
      console.log(delay);
      setTimeout(increase1,delay);

      //document.getElementById('value1').innerHTML=value;
    }
    inc1=0;
  }
  start1();
  function updateSlider1(v)
  {
    if(value1>=60)
    {
        var temp1;
        temp1= new Date();
        var diff = Math.abs(temp1 - myDate1);
        responseTime1.push(diff);
        //responseTime1.push((value1-60)*1000);
        for(var i=0;i<63;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease1,delay);
        }
    }
    else
    {
      wrongAttempt1++;
    }
    //start();
  }
  function updateSlider2()
  {
    value1-=11;
    for(var i=0;i<63;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease1,delay);
        }
    //start();
  }
  //secondDial();

//window.onload=firstDial;






  //for the second one
  var responseTime2=[];
  var missChance2=0;
  var wrongAttempt2=0;
  var value2=50;
  var myDate2;
  function increase2()
  {
      value2++;
      document.getElementById('value2').innerHTML=value2;
      if(value2==70)
      {
        myDate2=new Date();
      }
      if(value2>=70)
      {
        document.getElementById("img2").src="png/red-dial.png";
      }
      if(value2>81)
      {
        updateSlider4();
        missChance2++;
      }
      //console.log(value);
  }
  function decrease2()
  {
    value2--;
    if(value2<70)
    {
      document.getElementById("img2").src="png/dial.png";
    }
    document.getElementById('value2').innerHTML=value2;
    //console.log(value);

  }
  //setTimeout(increase,1000);
  //setTimeout(increase,2000);

  var inc2=0;

  function start2()
  {
    //count++;
    while(inc2<300)
    {
      //value++;
      inc2++;
      var delay;
      delay=inc2*900;
      //console.log(delay);
      setTimeout(increase2,delay);

      //document.getElementById('value2').innerHTML=value;
    }
    inc2=0;
  }
  start2();
  function updateSlider3(v)
  {
    if(value2>=70)
    {
      var temp2;
      temp2= new Date();
      var diff1 = Math.abs(temp2 - myDate2);
      responseTime2.push(diff1);
      //console.log(temp2);
      //console.log(myDate2);
      //console.log(diff1);
        //responseTime2.push((value2-70)*900);
        for(var i=0;i<78;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease2,delay);
        }
    }
    else
    {
      wrongAttempt2++;
    }
    //start();
  }
  function updateSlider4()
  {
    value2-=12;
    for(var i=0;i<68;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease2,delay);
        }
    //start();
  }






  //for the third one
  var missChance3=0;
  var wrongAttempt3=0;
  var value3=0;
  var responseTime3= [];
  var myDate3;
  function increase3()
  {
      value3++;
      document.getElementById('value3').innerHTML=value3;
      if(value3==100)
      {
        myDate3=new Date();
      }
      if(value3>=100)
      {
        document.getElementById("img3").src="png/red-dial.png";
      }
      if(value3>120)
      {
        updateSlider6();
        missChance3++;
      }
      //console.log(value);
  }
  function decrease3()
  {
    if(value3<100)
    {
      document.getElementById("img3").src="png/dial.png";
    }
    value3--;
    document.getElementById('value3').innerHTML=value3;
    //console.log(value);

  }
  //setTimeout(increase,1000);
  //setTimeout(increase,2000);

  var inc3=0;

  function start3()
  {
    //count++;
    while(inc3<560)
    {
      //value++;
      inc3++;
      var delay;
      delay=inc3*480;
      console.log(delay);
      setTimeout(increase3,delay);

      //document.getElementById('value2').innerHTML=value;
    }
    inc3=0;
  }
  start3();
  function updateSlider5(v)
  {
    if(value3>=100)
    {
      var temp1;
      temp1= new Date();
      var diff = Math.abs(temp1 - myDate3);
      responseTime3.push(diff);
        //responseTime3.push((value3-100)*500);
        for(var i=0;i<120;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease3,delay);
        }
    }
    else
    {
      wrongAttempt3++;
    }
    //start();
  }
  function updateSlider6()
  {
    value3-=21;
    for(var i=0;i<119;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease3,delay);
        }
  }





  //for the Fourth dial
  var missChance4=0;
  var wrongAttempt4=0;
  var value4=50;
  var responseTime4=[];
  var myDate4;
  function increase4()
  {
    if(value4==100)
    {
      myDate4=new Date();
    }
    if(value4>=100)
    {
      document.getElementById("img4").src="png/red-dial.png";
    }
      value4++;
      document.getElementById('value4').innerHTML=value4;

      if(value4>120)
      {
        updateSlider8();
        missChance4++;
      }
      //console.log(value);
  }
  function decrease4()
  {
    if(value4<100)
    {
      document.getElementById("img4").src="png/dial.png";
    }
    value4--;
    document.getElementById('value4').innerHTML=value4;
    //console.log(value);

  }
  //setTimeout(increase,1000);
  //setTimeout(increase,2000);

  var inc4=0;

  function start4()
  {
    //count++;
    while(inc4<515)
    {
      //value++;
      inc4++;
      var delay;
      delay=inc4*500;
      console.log(delay);
      setTimeout(increase4,delay);

      //document.getElementById('value2').innerHTML=value;
    }
    //inc4=0;
  }
  start4();
  function updateSlider7(v)
  {
    if(value4>=100)
    {
      var temp1;
      temp1= new Date();
      var diff = Math.abs(temp1 - myDate4);
      responseTime4.push(diff);
        //responseTime4.push((value4-100)*500);
        for(var i=0;i<120;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease4,delay);
        }
    }
    else
    {
      wrongAttempt4++;
    }
    //start();
  }
  function updateSlider8()
  {
    value4-=21;
    for(var i=0;i<120;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease4,delay);
        }
    //start();
  }


  // Code for the display of various values


  function Display() {
    console.log("I executed");
    document.body.innerHTML = '';
    document.write("Miss chance for first dial= " + missChance1);
    document.write("<br>Wrong Attempt for first dial= " + wrongAttempt1);
    document.write("<br>Response Times for first dial are: = ")
    for(var i=0;i<responseTime1.length;i++)
    {
      document.write(" " + responseTime1[i]);
    }
    document.write("<br>");
    //console.log("I executed");
    //document.body.innerHTML = '';
    document.write("Miss chance for Second dial= " + missChance2);
    document.write("<br>Wrong Attempt for Second dial= " + wrongAttempt2);
    document.write("<br>Response Times for Second dial are: = ")
    for(var i=0;i<responseTime2.length;i++)
    {
      document.write(" " + responseTime2[i]);
    }
    document.write("<br>");
    document.write("Miss chance for Third dial= " + missChance3);
    document.write("<br>Wrong Attempt for Third dial= " + wrongAttempt3);
    document.write("<br>Response Times for Third dial are: = ")
    for(var i=0;i<responseTime3.length;i++)
    {
      document.write(" " + responseTime3[i]);
    }
    document.write("<br>");
    document.write("Miss chance for Fouth dial= " + missChance4);
    document.write("<br>Wrong Attempt for Fourth dial= " + wrongAttempt4);
    document.write("<br>Response Times for Fourth dial are: = ")
    for(var i=0;i<responseTime4.length;i++)
    {
      document.write(" " + responseTime4[i]);
    }
    document.write("<br>No. of Wrong Attempt for Buttons= " + wrongPressCount);

  }

setTimeout(Display,270000);
