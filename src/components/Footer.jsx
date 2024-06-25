import { Link } from "react-router-dom";

function Footer() {
    return (
        <div
            className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.2s"
        >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Company
                        </h4>
                        <Link className="btn btn-link" href="">
                            About Us
                        </Link>
                        <Link className="btn btn-link" href="">
                            Contact Us
                        </Link>
                        <Link className="btn btn-link" href="">
                            Reservation
                        </Link>
                        <Link className="btn btn-link" href="">
                            Privacy Policy
                        </Link>
                        <Link className="btn btn-link" href="">
                            Terms & Condition
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Contact
                        </h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3"></i>123 Tây
                            Sơn, tp Quy Nhơn, Bình Định
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt me-3"></i>+0396268055
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3"></i>
                            quan281810@gmail.com
                        </p>
                        <div className="d-flex pt-2">
                            <Link
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                                className="btn btn-outline-light btn-social"
                                href=""
                            >
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Opening
                        </h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                            Newsletter
                        </h4>
                        <p>
                            "Nhà hàng EateryEase giảm 20% khi đặt bàn trước từ
                            1/6 đến 30/6. Thưởng thức thực đơn mùa hè mới!"
                        </p>
                        <div
                            className="position-relative mx-auto"
                            style={{ maxWidth: "400px" }}
                        >
                            <input
                                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
