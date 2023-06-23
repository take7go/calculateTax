// 月収から年収を計算
function calculateAnnualIncome(){
    var mIncome = parseFloat(document.getElementById('monthlyIncome').value);
    var Bonus = parseFloat(document.getElementById('Bonus').value);
    var Allowance = parseFloat(document.getElementById('Allowance').value);
    var aIncome = mIncome * 12 + Bonus + Allowance;
    document.getElementById('annualIncome').value = aIncome.toFixed(4);
}
// 年収から月収を計算
function calculateMonthlyIncome(){
    var aIncome = parseFloat(document.getElementById('annualIncome').value);
    var Bonus = parseFloat(document.getElementById('Bonus').value);
    var Allowance = parseFloat(document.getElementById('Allowance').value);
    var mIncome = (aIncome - Bonus - Allowance) / 12;
    document.getElementById('monthlyIncome').value = mIncome.toFixed(4);
}
// 所得から所得税を計算
function calculateIncomeTax() {
    var income = parseFloat(document.getElementById('income').value);
    var incomeD = parseFloat(document.getElementById('incomeDeduction').value);
    var tax = 0;
    if (income <= 195.0) {
      tax = income * 0.05;
    } else if (income <= 1000000) {
      tax = 25000 + (income - 500000) * 0.1;
    } else if (income <= 1500000) {
      tax = 75000 + (income - 1000000) * 0.15;
    } else {
      tax = 150000 + (income - 1500000) * 0.2;
    }

    // 結果を表示
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '所得税：' + tax.toFixed(2) + '円';
}
// 所得税から所得を逆計算
function calculateIncomeTaxReverse() {
    var income = parseInt(document.getElementById('income').value);

    // 所得税の計算ロジック
    var tax = 0;
    if (income <= 500000) {
      tax = income * 0.05;
    } else if (income <= 1000000) {
      tax = 25000 + (income - 500000) * 0.1;
    } else if (income <= 1500000) {
      tax = 75000 + (income - 1000000) * 0.15;
    } else {
      tax = 150000 + (income - 1500000) * 0.2;
    }

    // 結果を表示
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '所得税：' + tax.toFixed(2) + '円';
}

function calculateTax() {
    var income = parseInt(document.getElementById('income').value);

    // 所得税の計算ロジック
    var tax = 0;
    if (income <= 500000) {
      tax = income * 0.05;
    } else if (income <= 1000000) {
      tax = 25000 + (income - 500000) * 0.1;
    } else if (income <= 1500000) {
      tax = 75000 + (income - 1000000) * 0.15;
    } else {
      tax = 150000 + (income - 1500000) * 0.2;
    }

    // 結果を表示
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '所得税：' + tax.toFixed(2) + '円';
}