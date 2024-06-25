import { formatMoney } from "../../utils/index";

function FoodItem2(props) {
    const { idFood, name, image, price, quantity, paid } = props;

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
                        <span className="text-primary">{formatMoney(price)}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-2">
                        <span>Số lượng: {quantity}</span>
                        <span>Tổng tiền: {formatMoney(price * quantity)}</span>
                    </div>
                    <span className="text-primary">
                        {paid === "Paid" ? "Đã thanh toán" : "Chưa thanh toán"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FoodItem2;
