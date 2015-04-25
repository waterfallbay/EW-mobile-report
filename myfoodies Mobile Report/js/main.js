$(document).ready(function(){
    
    $("#navbarcontent").append('<li><a href="dashboard.html" id="AllTransactions"></a></li>');
    $("#navbarcontent").append('<li><a href="hourly.html" id="ReportHourlySales"></a></li>');
    $("#navbarcontent").append('<li><a href="byitem.html" id="ReportSalesItemList"></a></li>');
    $("#navbarcontent").append('<li><a href="summary.html" id="ReportSales"></a></li>');
    $("#navbarcontent").append('<li><a href="cancel.html" id="CancelItems"></a></li>');
    $("#navbarcontent").append('<li><a href="chase.html" id="ChaseItem"></a></li>');
    $("#navbarcontent").append('<li><a href="discount.html" id="ReportDiscountSales"></a></li>');
    $("#navbarcontent").append('<li><a href="payment.html" id="PaymentMethods"></a></li>');
});