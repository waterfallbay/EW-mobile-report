function writeNewShopIDCookie(ShopID){
    $.cookie('shopId', ShopID, {expires:7, path:'/'});
    console.log("cookie is chaing to: " + $.cookie('shopId'));
    window.location.replace("dashboard.html");
}

function getCurrentShopID()
{
    currentShopID = $.cookie('shopId');
    
    return currentShopID;
}
    
function getSelectedWorkDay()
{
    currentSelectedWorkday = $.cookie('SelectedWorkday');
    
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
    
    $.cookie('SelectedWorkday', formattedrequestedday, {expires:7, path:'/'});
    console.log("SelectedWorkday cookie is chaing to: " + $.cookie('SelectedWorkday'));
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
    window.location.replace("index.html");   
}

function forgeteverything()
{
    $.cookie('rememberme', 'no', {expires:365, path:'/'});
    $.removeCookie("username");
}

function getUserNameFromCookies()
{
    var usernamefromcookies;
    
    console.log("remember me?: " + $.cookie('rememberme'));
    
    if($.cookie('rememberme') === "yes"){
         usernamefromcookies = $.cookie("username");
    }
    else
    {
        usernamefromcookies = "";
    }
    
    return usernamefromcookies;
}