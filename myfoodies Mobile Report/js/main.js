$(document).ready(function(){
    
    $("#navbarcontent").append('<li><a href="dashboard.html" id="AllTransactions"></a></li>');
    $("#navbarcontent").append('<li><a href="hourly.html" id="ReportHourlySales"></a></li>');
    $("#navbarcontent").append('<li><a href="byitem.html" id="ReportSalesItemList"></a></li>');
    $("#navbarcontent").append('<li><a href="summary.html" id="ReportSales"></a></li>');
    $("#navbarcontent").append('<li><a href="#" id="CancelItems"></a></li>');
    $("#navbarcontent").append('<li><a href="#" id="ChaseItem"></a></li>');
    $("#navbarcontent").append('<li><a href="#" id="ReportDiscountSales"></a></li>');
    $("#navbarcontent").append('<li><a href="#" id="PaymentMethods"></a></li>');
});