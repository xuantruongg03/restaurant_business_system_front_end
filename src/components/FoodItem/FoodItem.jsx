import { useState } from "react";
import { formatMoney } from "../../utils";

function FoodItem(props) {
    const { idFood, name, image, price } = props;

    const [quantity, setQuantity] = useState(1);

    const handleOrder = async () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || { foods: [] };
        const foods = cart.foods;
        
        const existingFoodIndex = foods.findIndex(food => food.idFood === idFood);
        
        if (existingFoodIndex !== -1) {
            foods[existingFoodIndex].quantity += quantity;
        } else {
            foods.push({
                image: image,
                idFood: idFood,
                quantity: quantity,
                price: price,
            });
        }

        // Save in local storage
        localStorage.setItem(
            "cart",
            JSON.stringify({
                foods: foods
            })
        );
        alert("Đã thêm món, kiểm tra giỏ hàng của bạn!");
        window.location.reload();
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

export default FoodItem;
