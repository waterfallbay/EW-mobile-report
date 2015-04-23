var zh = {
    dashboardtexttitle : "一日營業總結",
    hourlytablesectiontotal : "營業額",
    hourlytablediscount : "- 折扣",
    hourlytablememberdiscount : "- 會員折扣",
    hourlytableservicecharge : "+ 服務費",
    hourlytabledecimal : "- 小數約數",
    hourlytablenet : "= 營業淨額",
    hourlytableunbilled : "未結賬單",
    hourlytexttitle : "每小時報表",
    byitemtexttitle : "銷貨情況",
    selectRestaurant : "選擇分店",
    changelang : "English",
    logout : "登出",
    remembernme : "記住我",
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
    timesection: "時",
    tableno: "檯號",
    intime: "入座",
    outtime: "結賬",
    ttamount: "金額",
    itemname: "名稱",
    itemcode: "編碼",
    itemcount: "數量",
    cashierstaff: "員工",
    todaytext: "今天",
    yesterdaytext: "昨天",
    dayb4yesterdaytext: "前天",
    customedatetext: "自訂日期",
    pleaseselectdate: "請選擇日期",
    chartnotrans:  "交易宗數",
    charthourlyamt: "每小時金額",
    chartsalestext: "營業額",
    salesitembyqty: "銷售項目 (按銷售數量)",
    salesitembyamt: "銷售項目 (按銷售金額)",
    dinein: "堂食",
    takeaway: "外賣",
    catperformance: "分類銷售表現",
    chartitemamt: "銷售金額",
    chartitemno: "銷售數量",
    nodata: "沒有數據，請檢查店舖的網絡連線。",
    nodata2: "不能連接服務器，請檢查你的網連線。",
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
        menuheader1 : "總銷售報表",
        menuheader2 : "每小時報表",
        menuheader3 : "鎖貨報表",
        menuheader4 : "營業報表"
    }
};

var en = {
    dashboardtexttitle : "All Day Sales",
    hourlytexttitle : "Hourly Sales",
    hourlytablesectiontotal : "Total Sales",
    hourlytablediscount : "- Discount",
    hourlytablememberdiscount : "- Member Dis.",
    hourlytableservicecharge : "+ Service Fee",
    hourlytabledecimal : "- Roundings",
    hourlytablenet : "= Net Sales",
    hourlytableunbilled : "Unbilled",
    byitemtexttitle : "Sales by Item",
    selectRestaurant : "Select Store",
    changelang : "中文",
    logout : "Logout",
    remembernme : "Remember Me",
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
    timesection: "Hour",
    tableno: "Table",
    intime: "In",
    outtime: "Out",
    ttamount: "Amt.",
    itemname: "Name",
    itemcode: "Code",
    itemcount: "Qty.",
    cashierstaff: "Staff.",
    todaytext: "Today",
    yesterdaytext: "Yesterday",
    dayb4yesterdaytext: "Day Before",
    customedatetext: "Custom Date",
    pleaseselectdate: "Select a Date",
    chartnotrans:  "no. of transactions",
    charthourlyamt: "hourly amount",
    chartsalestext: "Sales",
    salesitembyqty: "Sales Items (by quantity)",
    salesitembyamt: "Sales Items (by amount)",
    dinein: "Dinein",
    takeaway: "Takeaway",
    catperformance: "Sales by Category",
    chartitemamt: "amount",
    chartitemno: "quantity",
    nodata: "No data retrieved, please check the internet connection of this store.",
    nodata2: "Cannot connect to remote service, please check your internet connection.",
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
        menuheader1 : "All Day Sales",
        menuheader2 : "Houly Sales",
        menuheader3 : "Sales by Item",
        menuheader4 : "Summary"
    }
    
};

var currentlang;
var loginerror;
var yeartext;
var monthtext;
var daytext;
var whodaytext;
var invoiceno;
var timesection;
var tableno;
var intime;
var outtime;
var ttamount;
var iteamname;
var itemcode;
var itemcount;
var cashierstaff;
var chartnotrans;
var charthourlyamt;
var salesitembyamttext;
var salesitembyqtytext;
var dinein;
var takeaway;
var catperformance;
var chartitemamt;
var chartitemno;
var nodata;

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
    $('#menuheader2').html(currentlang.menu.menuheader2);
    $('#menuheader3').html(currentlang.menu.menuheader3);
    $('#menuheader4').html(currentlang.menu.menuheader4);
    $('#dashboardtexttitle1').html(currentlang.dashboardtexttitle);
    $('#dashboardtexttitle2').html(currentlang.dashboardtexttitle);
    $('#hourlytexttitle1').html(currentlang.hourlytexttitle);
    $('#hourlytexttitle2').html(currentlang.hourlytexttitle);
    $('#byitemtexttitle1').html(currentlang.byitemtexttitle);
    $('#byitemtexttitle2').html(currentlang.byitemtexttitle);
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
    chartsalestext = currentlang.chartsalestext;

    // hourly page
    $('#hourly-table-section-total').html(currentlang.hourlytablesectiontotal);
    $('#hourly-table-discount').html(currentlang.hourlytablediscount);
    $('#hourly-table-memberdiscount').html(currentlang.hourlytablememberdiscount); 
    $('#hourly-table-servicecharge').html(currentlang.hourlytableservicecharge);
    $('#hourly-table-decimal').html(currentlang.hourlytabledecimal);
    $('#hourly-table-net').html(currentlang.hourlytablenet);
    $('#hourly-table-unbilled').html(currentlang.hourlytableunbilled);
    
    timesection = currentlang.timesection;
    chartnotrans = currentlang.chartnotrans;
    charthourlyamt = currentlang.charthourlyamt;
    
    //byitem page
    salesitembyamttext = currentlang.salesitembyamt;
    salesitembyqtytext = currentlang.salesitembyqty;
    itemname = currentlang.itemname;
    itemcode = currentlang.itemcode;
    itemcount = currentlang.itemcount;
    
    //summary page
    dinein = currentlang.dinein;
    takeaway = currentlang.takeaway;
    catperformance = currentlang.catperformance;
    chartitemamt = currentlang.chartitemamt;
    chartitemno = currentlang.chartitemno;
    
    //nodata
    $('#nodata').html(currentlang.nodata);
    $('#nodata2').html(currentlang.nodata2);
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
        window.localStorage.setItem("storagelang", "en");
    }
    else if(lang === "en"){
        window.localStorage.setItem("storagelang", "zh");
    }
    else{
        window.localStorage.setItem("storagelang", "zh");
    }
    
    window.location.replace(getCurrentHTMLFile());
}