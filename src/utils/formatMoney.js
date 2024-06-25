function formatMoney(money) {
    return money.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });
}

export default formatMoney;