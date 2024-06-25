import React, { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
import { formatMoney } from "../utils";
import ordersApi from "../api/order";

function Cart() {
    const [isShowCart, setIsShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const calculateTotal = (foods) => {
        const total = foods.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
        );
        setTotal(total);
    };

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart && cart.foods) {
            setCart(cart.foods);
            calculateTotal(cart.foods);
        }
    }, [total]);

    const handleOrder = () => {
        // Load cart from local storage
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart || !cart.foods) {
            alert("Giỏ hàng trống");
            return;
        }
        const urlParams = new URLSearchParams(window.location.search);
        const idRestaurant = urlParams.get("b");
        const idTable = urlParams.get("c");
        const idBill = localStorage.getItem("idBill");
        const foods = []
        cart.foods.forEach(item => {
            const obj = {
                idFood: item.idFood,
                quantity: item.quantity
            }
            foods.push(obj)
        });
        // Send payment request to server
        // If payment success, show success message
        // Else show error message
        const fetchOrder = async () => {
            const res = await ordersApi.orderPaymentBefore({
                idTable: idTable,
                idRestaurant: idRestaurant,
                idBill: idBill,
                foods: foods,
            });
            if (res) {
                const idBill = res.idBill;
                localStorage.setItem("idBill", idBill);
                const idOrders = res.idOrder;
                // payment
                const resPayment = await ordersApi.payment({
                    idRestaurant: idRestaurant,
                    idBill: idBill,
                    idOrder: idOrders,
                });
                if (resPayment) {
                    console.log(resPayment);
                    window.open(resPayment.url, "_blank");
                    alert("Vui lòng đảm bảo bạn đã thanh toán, nếu không món sẽ không được thông báo đến bếp!");
                    localStorage.removeItem("cart");
                } else {
                    alert("Thanh toán thất bại");
                }
            } else {
                alert("Thanh toán thất bại");
            }
        };
        fetchOrder();
    };

    return (
        <>
            <div
                className={`wrap-header-cart js-panel-cart relative ${
                    isShowCart ? "show-header-cart" : ""
                }`}
            >
                <div className="s-full js-hide-cart"></div>
                <div className="header-cart flex-col-l p-10">
                    <div className="flex flex-row justify-between px-2 items-center cursor-pointer">
                        <span className="text-2xl">Giỏ hàng</span>

                        <div
                            className="js-hide-cart text-4xl"
                            onClick={() => setIsShowCart(false)}
                        >
                            <span>&times;</span>
                        </div>
                    </div>

                    <div className="header-cart-content">
                        <ul className="w-full my-10 pl-0">
                            {cart.map((item) => (
                                <ItemCart
                                    key={item.idFood}
                                    name={item.name}
                                    image={item.image}
                                    quantity={item.quantity}
                                    price={item.price}
                                    unit={"món"}
                                />
                            ))}
                        </ul>

                        <div className="w-full ">
                            <div className="header-cart-total w-full p-tb-40 total-cart-n">
                                Tổng tiền: {formatMoney(total)}
                            </div>

                            <button
                                onClick={handleOrder}
                                className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-md"
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className=" fixed bottom-10 right-10 cursor-pointer py-2 px-3 rounded-xl z-30 bg-primary text-white"
                onClick={() => setIsShowCart(!isShowCart)}
            >
                <i className="fa fa-shopping-cart"></i>
            </div>
        </>
    );
}

export default Cart;
