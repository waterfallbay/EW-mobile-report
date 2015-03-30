var zh = {
    texttitle1 : "一日營業總結",
    selectRestaurant : "選擇分店",
    changelang : "English",
    logout : "登出",
    remembernme : "記住用戶名稱",
    mobilereport : "流動報表",
    username : "用戶名稱",
    password : "密碼",
    loginerror: "登入失敗: 輸入的用戶名稱或密碼無效！",
    languagebar : "ENG",
    loginnow : "登入",
    year : "年",
    month : "月",
    day: "日",
    wholeday: "全日",
    invoiceno: "單號",
    tableno: "檯號",
    intime: "入座",
    outtime: "結賬",
    ttamount: "金額",
    cashierstaff: "員工",
    todaytext: "今天",
    yesterdaytext: "昨天",
    dayb4yesterdaytext: "前天",
    customedatetext: "自訂日期",
    pleaseselectdate: "請選擇日期",
    menu : {
        AllTransactions : "總銷售報表",
        CancelItems : "取消項目報表",
        SplitSales : "分單報表",
        ChangeTable : "轉檯報表",
        ChaseItem : "追單報表",
        ReportSalesHeaderList : "賬單列表",
        ReportSalesItemList : "鎖貨報表",
        ReportDiscountSales : "折扣報表",
        ReportHourlySales : "每小時報表",
        ReportSales : "營業報表",
        CashierReport : "收銀員報表",
        menuheader1 : "總銷售報表"
    }
};

var en = {
    texttitle1 : "All Day Sales",
    selectRestaurant : "Select Store",
    changelang : "中文",
    logout : "Logout",
    remembernme : "Save Username",
    mobilereport : "Mobile Report",
    username : "Username",
    password : "Password",
    loginerror: "Login failed: Invalid Username or Password!",
    languagebar : "中文",
    loginnow : "Login",
    year : "-",
    month : "-",
    day: "",
    wholeday: "All Day",
    invoiceno: "No.",
    tableno: "Table",
    intime: "In",
    outtime: "Out",
    ttamount: "Amt.",
    cashierstaff: "Staff.",
    todaytext: "Today",
    yesterdaytext: "Yesterday",
    dayb4yesterdaytext: "Day Before",
    customedatetext: "Custom Date",
    pleaseselectdate: "Select a Date",
    menu : {
        AllTransactions : "All Day Sales",
        CancelItems : "Cancelled Item Log",
        SplitSales : "Split Table Log",
        ChangeTable : "Change Table Log",
        ChaseItem : "Chase Order Log",
        ReportSalesHeaderList : "Transaction List",
        ReportSalesItemList : "Sales by Item",
        ReportDiscountSales : "Bill Discount Log",
        ReportHourlySales : "Hourly Sales",
        ReportSales : "Summary",
        CashierReport : "Cashier Log",
        menuheader1 : "All Day Sales"
    }
    
};

var currentlang;
var loginerror;
var yeartext;
var monthtext;
var daytext;
var whodaytext;
var invoiceno;
var tableno;
var intime;
var outtime;
var ttamount;
var cashierstaff;

function getLangText(lang){

    currentlang = decidecurrentlang(lang);
    console.log ("current lang"+lang);
    //dashboard page
    
    $('#menu1').html(currentlang.menu.AllTransactions);
    $('#menu2').html(currentlang.menu.CancelItems);
    $('#menu3').html(currentlang.menu.SplitSales);
    $('#menu4').html(currentlang.menu.ChangeTable);
    $('#menu5').html(currentlang.menu.ChaseItem);
    $('#menu6').html(currentlang.menu.ReportSalesHeaderList);
    $('#menu7').html(currentlang.menu.ReportSalesItemList);
    $('#menu8').html(currentlang.menu.ReportHourlySales);
    $('#menu9').html(currentlang.menu.ReportDiscountSales);
    $('#menu10').html(currentlang.menu.ReportSales);
    $('#menu11').html(currentlang.menu.CashierReport);
    $('#menuheader1').html(currentlang.menu.menuheader1);
    $('#texttitle1').html(currentlang.texttitle1);
    $('#texttitle2').html(currentlang.texttitle1);
    $('#selectRestaurant').html(currentlang.selectRestaurant);
    $('#changelang').html(currentlang.changelang);
    $('#logout').html(currentlang.logout);
    $('#todaytext').html(currentlang.todaytext);
    $('#yesterdaytext').html(currentlang.yesterdaytext);
    $('#dayb4yesterdaytext').html(currentlang.dayb4yesterdaytext);
    $('#customedatetext').html(currentlang.customedatetext);
    $('#pleaseselectdate').html(currentlang.pleaseselectdate);

    //login page
    $('#languagebar').html(currentlang.languagebar);
    $('#mobilereport').html(currentlang.mobilereport);
    $('#rememberme').html(currentlang.remembernme);
    $('#loginusername').attr("placeholder" , currentlang.username);
    $('#loginpassword').attr("placeholder" , currentlang.password);
    $('#submit').attr("value" , currentlang.loginnow);
    loginerror = currentlang.loginerror;
    yeartext = currentlang.year;
    monthtext = currentlang.month;
    daytext = currentlang.day;
    whodaytext = currentlang.wholeday;
    invoiceno = currentlang.invoiceno;
    tableno = currentlang.tableno;
    intime = currentlang.intime;
    outtime = currentlang.outtime;
    ttamount = currentlang.ttamount;
    cashierstaff = currentlang.cashierstaff;
}

function decidecurrentlang(lang)
{
    if(lang==="en")
    {
        currentlang = en;
        kendo.culture("en-US");
    }
    else if(lang==="zh"){
        currentlang = zh;
        kendo.culture("zh-HK");
    }
    else{
         currentlang = zh;
         kendo.culture("zh-HK");
    }
        
    return currentlang;
}

function setlang(lang)
{
    var page = document.location.pathname.match(/[^\/]+$/)[0];
    
    if (lang === "zh"){
        $.cookie('lang', "en" , {expires:365, path:'/'});
    }
    else if(lang === "en"){
        $.cookie('lang', "zh" , {expires:365, path:'/'});
    }
    else{
        $.cookie('lang', "zh" , {expires:365, path:'/'});
    }
    
    window.location.replace(getCurrentHTMLFile());
}