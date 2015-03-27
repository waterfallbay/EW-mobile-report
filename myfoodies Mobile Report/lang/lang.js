var zh = {
    texttitle1 : "一日營業總結",
    selectRestaurant : "選擇餐廳",
    changelang : "轉換語言",
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
    tableno: "檯號",
    intime: "入座",
    outtime: "結賬",
    ttamount: "金額",
    cashierstaff: "員工",
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

var en = {};
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
    
    //dashboard page
    
    $('#menu1').html(currentlang.menu.AllTransactions);
    $('#menu2').html(currentlang.menu.CancelItems);
    $('#menu3').html(currentlang.menu.SplitSales);
    $('#menu4').html(currentlang.menu.SplitSales);
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
    if(lang=="en")
        {
            currentlang = en;
        }
    else if(lang=="zh"){
        currentlang = zh;
    }
    else{
         currentlang = zh;
    }
    
    return currentlang;
}