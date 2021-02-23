// price is required so it has to throw an error if there is no price input
function isRequired (name){
        throw new Error(name + ' is required')
}

// undefined values
function calculatePayment(price, salesTax, discount){
    // math
    salesTax = salesTax || 0.047
    discount = discount || 0

    console.log('tax', salesTax)
    console.log('discount', discount)
}

// fixed the defined values to return the correct amount
function calculatePayment(price, salesTax, discount){
    // math
    salesTax = typeof salesTax === 'undefined' ? 0.047 : salesTax
    discount = typeof discount === 'undefined' ? 0 : discount 

    console.log('tax', salesTax)
    console.log('discount', discount)
}
// looks cleaner
function calculatePayment(price = isRequired('price'), salesTax = 0.047, discount = 0){
    console.log('tax', salesTax)
    console.log('discount', discount)
}

calculatePayment(100, 0, 0)