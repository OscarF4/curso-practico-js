function calculatePriceAfterDiscount(price, discount, coupon) {
    const priceAfterDiscount = (price * (100 - (discount + coupon))) / 100;

    return priceAfterDiscount;
}

const coupons = [
    {
        title: 'get15off',
        value: 15
    },
    {
        title: 'get20off',
        value: 20
    },
    {
        title: 'get25off',
        value: 25
    }
];

function couponSearch(couponQuery) {
    const userCoupon = coupons.find((coupon)=> {
        return coupon.title === couponQuery;
    })
    if (userCoupon !== undefined) {
        return Number(userCoupon.value);
    }
}

function onClickButtonPriceDiscount() {
    //Initial price
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;
    //Discount Decimal
    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = Number(inputDiscount.value);
    //Coupon for discount (String)
    const inputCoupon = document.getElementById('inputCoupon');
    const couponValue = inputCoupon.value;
    //Printing paragraph
    const resultP = document.getElementById('resultP');

    if (priceValue && discountValue && couponValue) {
        const couponDiscount = couponSearch(couponValue);
        const precioConDescuento = calculatePriceAfterDiscount(priceValue, discountValue, couponDiscount);
        resultP.innerHTML = `El precio con descuento es de <strong>${precioConDescuento}</strong>`;
    } else {
        resultP.innerHTML = `<strong>Faltan datos</strong>`
    }
}