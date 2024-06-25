
const formatPrice = (price) => {
    // format as x.xxx.xxx VND
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

function ItemCart(props) {
    const { name, quantity, image, price, unit } = props;

    return (
        <>
            <div className="flex items-center my-2">
                <img src={image} alt="LOGO" className="h-20 w-20" />
                <div className="ml-5 flex flex-col">
                    <span>{name}</span>
                    <span>Số lượng: {quantity} {unit}</span>
                    <span>Giá món: {formatPrice(price)} VNĐ</span>
                </div>
            </div>
        </>
    );
}

export default ItemCart;
