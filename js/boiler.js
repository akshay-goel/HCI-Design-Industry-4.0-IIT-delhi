

  //for the first one
  var missChance1=0;
  var wrongAttempt1=0;
  var responseTime1=[];
  var value1=0;//value of the slider
  function increase1()
  {
      value1++;
      document.getElementById('value1').innerHTML=value1;
      if(value1>=60)
      {
        document.getElementById("img1").src="png/red-dial.png";
      }
      if(value1>80)
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
    while(inc1<310)
    {
      //value++;
      inc1++;
      var delay;
      delay=inc1*900;
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
        responseTime1.push((value1-60)*900);
        for(var i=0;i<65;i++)
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
    value1-=21;
    for(var i=0;i<64;i++)
        {
          var delay;
          delay=i*100;
          setTimeout(decrease1,delay);
        }
    //start();
  }
