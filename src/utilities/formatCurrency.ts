const localCurrency= new Intl.NumberFormat(undefined, {
    currency: "EUR", 
    style: "currency"
})


export function formatCurrency(number: number) {
    return localCurrency.format(number)
}