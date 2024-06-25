import ordersApi from "../../api/order";
import { useState } from "react";
import { formatMoney } from "../../utils";

function FoodItemPaymentAfter(props) {
    const { idFood, idBill, idRestaurant, name, image, price, idTable } = props;

    const [quantity, setQuantity] = useState(1);

    const handleOrder = async () => {
        const data = {
            idBill: idBill,
            idFood: idFood,
            quantity: quantity,
            idRestaurant: idRestaurant,
            idTable: idTable,
        };
        // console.log("Send data: ", data);
        try {
            const res = await ordersApi.order(data);
            if (res) {
                localStorage.setItem("idBill", res.idBill);
                alert("Đã đặt món")
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlePlus = () => {
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            alert("Số lượng phải lớn hơn 0");
        }
    };

    return (
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <span data-id={idFood} id={idFood}></span>
                <img
                    className="flex-shrink-0 img-fluid rounded"
                    src={image}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                        <h5 style={{ fontSize: "1.1rem" }}>{name}</h5>
                        <span className="text-primary">
                            {formatMoney(price)}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-2">
                        <span>Số lượng: </span>
                        <div>
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={handleMinus}
                            >
                                -
                            </span>
                            <span className="mx-3">{quantity}</span>
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={handlePlus}
                            >
                                +
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        id="btnOrder"
                        className="btn btn-warning align-self-end mt-2"
                        onClick={() => handleOrder()}
                    >
                        Gọi món
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodItemPaymentAfter;
