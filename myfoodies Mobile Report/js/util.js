function writeNewShopIDCookie(ShopID){
    localStorage.setItem('storageshop' , ShopID);
    console.log("cookie is chaing to: " + localStorage.getItem('storageshop'));
    window.location.replace(getCurrentHTMLFile());
}

function getCurrentShopID()
{
    currentShopID = localStorage.getItem('storageshop');
    
    if (currentShopID === null){
        
        currentShopID = "";
    }
    
    return currentShopID;
}
    
function getSelectedWorkDay()
{
    currentSelectedWorkday = localStorage.getItem('storageworkday');
    
     if (currentSelectedWorkday === null){
        
        currentSelectedWorkday = "";
    }
    
    return currentSelectedWorkday;
}

function getCurrentHTMLFile(){
    
    var currenthtmlfile;
    currenthtmlfile = document.location.pathname.match(/[^\/]+$/)[0];
    return currenthtmlfile;
    
}

function formatMonth(month){
    if(month<10) {
        month='0'+month;
    }
    
    return month;
}

function formatDay(day){
    if(day<10) {
        day='0'+day;
    }
    
    return day;
}

function getEmptyTimeArr(){
    timeArr = [];
    timeArr.push(new Date("2012/02/01 07:00:00"));
    timeArr.push(new Date("2012/02/01 08:00:00"));
    timeArr.push(new Date("2012/02/01 09:00:00"));
    timeArr.push(new Date("2012/02/01 10:00:00"));
    timeArr.push(new Date("2012/02/01 11:00:00"));
    timeArr.push(new Date("2012/02/01 12:00:00"));
    timeArr.push(new Date("2012/02/01 13:00:00"));
    timeArr.push(new Date("2012/02/01 14:00:00"));
    timeArr.push(new Date("2012/02/01 15:00:00"));
    timeArr.push(new Date("2012/02/01 16:00:00"));
    timeArr.push(new Date("2012/02/01 17:00:00"));
    timeArr.push(new Date("2012/02/01 18:00:00"));
    timeArr.push(new Date("2012/02/01 19:00:00"));
    timeArr.push(new Date("2012/02/01 20:00:00"));
    
    return timeArr;
}

function getEmptyTimeHourlArr(){
    timeArr = [];
    timeArr.push('8');
    timeArr.push('9');
    timeArr.push('10');
    timeArr.push('11');
    timeArr.push('12');
    timeArr.push('13');
    timeArr.push('14');
    timeArr.push('15');
    timeArr.push('16');
    timeArr.push('17');
    timeArr.push('18');
    timeArr.push('19');
    timeArr.push('20');
    
    return timeArr;
}

function changedisplaydate(page, day)
{
    console.log("enter function");
    var formattedrequestedday;
    var formattedrequesteddayforchart;
    var today;
    var yesterday;
    var dayb4yesterday;
    var dd;
    var mm;
    var yyyy;
    
    today = new Date();
    yesterday = new Date();
    dayb4yesterday = new Date();
    
    console.log("today: "+today);
    yesterday.setDate(today.getDate()-1);
    console.log("yesterday: "+yesterday);
    dayb4yesterday.setDate(today.getDate()-2);
    console.log("dayb4yesterday: "+dayb4yesterday);
    console.log("requested day string: "+ day);
    
    if (day == "today"){
        dd = today.getDate();
        mm = jsMonthtoNumbermonth(today.getMonth());
        yyyy = today.getFullYear();
    }
    else if(day == "yesterday"){
        dd = yesterday.getDate();
        mm = jsMonthtoNumbermonth(yesterday.getMonth());
        yyyy = yesterday.getFullYear();
    }
    else if (day == "dayb4yesterday"){
        dd = dayb4yesterday.getDate();
        mm = jsMonthtoNumbermonth(dayb4yesterday.getMonth());
        yyyy = dayb4yesterday.getFullYear();
    }

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    formattedrequestedday = dd+'/'+mm+'/'+yyyy;
    formattedrequesteddayforchart = yyyy+'/'+mm+'/'+dd;
    console.log("formmatted requestd day: "+formattedrequestedday);
    
    //$.cookie('SelectedWorkday', formattedrequestedday, {expires:7, path:'/'});
    localStorage.setItem('storageworkday', formattedrequestedday); 
    console.log("SelectedWorkday cookie is chaing to: " + localStorage.getItem('storageworkday'));
    window.location.replace(page);
}

function jsMonthtoNumbermonth(num){
    
    var month = [];
    
    month[0] = "1";
    month[1] = "2";
    month[2] = "3";
    month[3] = "4";
    month[4] = "5";
    month[5] = "6";
    month[6] = "7";
    month[7] = "8";
    month[8] = "9";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";
    realnummonth = month[num];
    
    return realnummonth; 
}

function logout()
{
     $.ajax(
    { 
      type: "GET",
      url: "http://ewpos.io/Account/LogOffRest/",
      dataType: 'jsonp',
      xhrFields: {
           withCredentials: true
      },
      crossDomain: true,
      success: function(data){
          localStorage.removeItem('storageshop');
          localStorage.removeItem('storageworkday');
          console.log ("selected workday: "+localStorage.getItem('storageworkday'))
          window.location.replace("index.html");

      },
      error: function (xhr) {
          console.log("logout error");
          window.location.replace("index.html");
      }
    });
    
    
    
}

function forgeteverything()
{
    localStorage.setItem('storagerememberme', 'no');
    localStorage.removeItem('storageusername');
    localStorage.removeItem('storagepw');
}

function getUserNameFromCookies()
{
    var usernamefromcookies;
    
    console.log("remember me?: " + localStorage.getItem('storagerememberme'));
    
    if(localStorage.getItem('storagerememberme') === "yes"){
         usernamefromcookies = localStorage.getItem('storageusername');
    }
    else
    {
        usernamefromcookies = "";
    }
    
    return usernamefromcookies;
}

function getPWFromCookies()
{
    var PWfromcookies;
    
    if(localStorage.getItem('storagerememberme') === "yes"){
         PWfromcookies = localStorage.getItem('storagepw');
    }
    else
    {
        PWfromcookies = "";
    }
    
    return PWfromcookies;
}

function getPieChartPadding(num)
{
    var padding;
    
    if(num <= 3)
    {
        padding = 30;     
    }
    else if(num > 3 && num <=6)
    {
        padding = 60;
    }
    else if (num > 6)
    {
        padding = 70;
    }
    
    return padding;
}

function jsonDatetimetoDataTableTime(datetimestr)
{    
    var formattedcheckoutdatetime;
    var finalcheckoutdatetimeminute;
    var finalcheckoutdatetimehour;
    var finalcheckoutdatetime;
    
      formattedcheckoutdatetime = new Date(parseInt(datetimestr.replace("/Date(", "").replace(")/",""), 10)- 1000*3600*8);
    
      if(parseInt(formattedcheckoutdatetime.getMinutes()) <10 ){
          finalcheckoutdatetimeminute = "0"+formattedcheckoutdatetime.getMinutes();
      }
      else{

          finalcheckoutdatetimeminute = formattedcheckoutdatetime.getMinutes();
      }
      if(parseInt(formattedcheckoutdatetime.getHours()) <10 ){
          finalcheckoutdatetimehour = "0"+formattedcheckoutdatetime.getHours();
      }
      else{

          finalcheckoutdatetimehour = formattedcheckoutdatetime.getHours();
      }
    finalcheckoutdatetime = finalcheckoutdatetimehour+":"+finalcheckoutdatetimeminute;
    
    return finalcheckoutdatetime;
    
}