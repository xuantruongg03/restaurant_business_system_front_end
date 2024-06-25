import { useEffect, useState } from "react";
import ordersApi from "../api/order";
import FoodItem from "../components/FoodItem/FoodItem";
import FoodItem2 from "../components/FoodItem/FoodItem2";
import restaurantApi from "../api/restaurant";
import { Link } from "react-router-dom";

function Menu() {
    //Get params from URL
    const urlParams = new URLSearchParams(window.location.search);
    const idMenu = urlParams.get("a");
    const idRestaurant = urlParams.get("b");
    const idTable = urlParams.get("c");

    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState([]);
    const [order, setOrder] = useState([]);
    const [nameRestaurant, setNameRestaurant] = useState("");

    useEffect(() => {
        try {
            const fetchNameRestaurant = async () => {
                const res = await restaurantApi.getNameRestaurant({
                    restaurant_id: idRestaurant,
                });
                if (res) {
                    console.log(res);
                    setNameRestaurant(res);
                }
            }
            fetchNameRestaurant();

            //Check bill
            const checkBill = async () => {
                const res = await ordersApi.checkBill({
                    idTable: idTable,
                    idRestaurant: idRestaurant,
                });
                if (!res) {
                    // if bill not exist, remove idBill in localStorage
                    localStorage.removeItem("idBill");
                }
            };
            checkBill();

            const fetchFood = async () => {
                const res = await ordersApi.getFoodByMenu({ idMenu: idMenu });
                if (res) {
                    setFood(res);
                }
            };

            const fetchOrderClient = async () => {
                const res = await ordersApi.getAllOrderClient({
                    idTable: idTable,
                });
                if (res) {
                    setOrder(res[0]);
                }
            };
            fetchFood();
            fetchOrderClient();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [idTable, idMenu, idRestaurant]);

    if(loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                            Menu
                        </h5>
                        <h1 className="mb-5">{nameRestaurant}</h1>
                    </div>
                    <div
                        className="tab-className text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a
                                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                                    data-bs-toggle="pill"
                                    href="#tab-1"
                                >
                                    <i className="fa fa-coffee fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">
                                            Popular
                                        </small>
                                        <h6 className="mt-n1 mb-0">
                                            Breakfast
                                        </h6>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="d-flex align-items-center text-start mx-3 pb-3"
                                    data-bs-toggle="pill"
                                    href="#tab-2"
                                >
                                    <i className="fa fa-hamburger fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">
                                            Special
                                        </small>
                                        <h6 className="mt-n1 mb-0">Launch</h6>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                                    data-bs-toggle="pill"
                                    href="#tab-3"
                                >
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">
                                            Lovely
                                        </small>
                                        <h6 className="mt-n1 mb-0">Dinner</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div
                                id="tab-1"
                                className="tab-pane fade show p-0 active"
                            >
                                <div className="row g-4" id="menuItems">
                                    {food.map((item, index) => (
                                        <FoodItem
                                            key={index}
                                            idFood={item.idFood}
                                            idRestaurant={idRestaurant}
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                            Danh sách món đã gọi
                        </h5>
                    </div>
                    <div
                        className="tab-className text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="tab-content">
                            <div
                                id="tab-1"
                                className="tab-pane fade show p-0 active"
                            >
                                <div className="row g-4" id="orderItemsBook">
                                    {(() => {
                                        if(order.length !== 0 && order !== undefined) {
                                            console.log(order);
                                            return order.foodDetails.map((item, index) => (
                                                <FoodItem2
                                                    key={index}
                                                    name={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    paid={item.paid}
                                                />
                                            )
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
