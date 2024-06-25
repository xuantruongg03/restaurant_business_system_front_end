import { Link } from "react-router-dom";
import image_about_1 from "../access/image/about-1.jpg";
import image_about_2 from "../access/image/about-2.jpg";
import image_about_3 from "../access/image/about-3.jpg";
import image_about_4 from "../access/image/about-4.jpg";
import image_team_1 from "../access/image/team-1.jpg";
import image_team_2 from "../access/image/team-2.jpg";
import image_team_3 from "../access/image/team-3.jpg";
import image_team_4 from "../access/image/team-4.jpg";

function Home() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-3 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                                    <h5>Master Chefs</h5>
                                    <p>
                                        Diam elitr kasd sed at elitr sed ipsum
                                        justo dolor sed clita amet diam
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-utensils text-primary mb-4" />
                                    <h5>Quality Food</h5>
                                    <p>
                                        Diam elitr kasd sed at elitr sed ipsum
                                        justo dolor sed clita amet diam
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
                                    <h5>Online Order</h5>
                                    <p>
                                        Diam elitr kasd sed at elitr sed ipsum
                                        justo dolor sed clita amet diam
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-sm-6 wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-headset text-primary mb-4" />
                                    <h5>24/7 Service</h5>
                                    <p>
                                        Diam elitr kasd sed at elitr sed ipsum
                                        justo dolor sed clita amet diam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img
                                        alt=""
                                        className="img-fluid rounded w-100 wow zoomIn"
                                        data-wow-delay="0.1s"
                                        src={image_about_1}
                                    />
                                </div>
                                <div className="col-6 text-start">
                                    <img
                                        alt=""
                                        className="img-fluid rounded w-75 wow zoomIn"
                                        data-wow-delay="0.3s"
                                        src={image_about_2}
                                        style={{ marginTop: "25%" }}
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img
                                        alt=""
                                        className="img-fluid rounded w-75 wow zoomIn"
                                        data-wow-delay="0.5s"
                                        src={image_about_3}
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img
                                        alt=""
                                        className="img-fluid rounded w-100 wow zoomIn"
                                        data-wow-delay="0.7s"
                                        src={image_about_4}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                                About Us
                            </h5>
                            <h1 className="mb-4">
                                Welcome to{" "}
                                <i className="fa fa-utensils text-primary me-2" />
                                EateryEase
                            </h1>
                            <p className="mb-4">
                                Chào mừng quý khách đến với nhà hàng EateryEase!
                                Chúng tôi rất hân hạnh được phục vụ quý khách
                                trong không gian ấm cúng và sang trọng của chúng
                                tôi. Tại EateryEase, chúng tôi luôn cam kết mang
                                đến cho quý khách những trải nghiệm ẩm thực
                                tuyệt vời với các món ăn ngon miệng và dịch vụ
                                chuyên nghiệp.
                            </p>
                            <p className="mb-4">
                                Xin mời quý khách tận hưởng bữa ăn của mình và
                                nếu có bất kỳ yêu cầu nào, đừng ngần ngại liên
                                hệ với nhân viên của chúng tôi. Chúc quý khách
                                có một bữa ăn thật ngon miệng và những phút giây
                                thư giãn thoải mái tại EateryEase!
                            </p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1
                                            className="flex-shrink-0 display-5 text-primary mb-0"
                                            data-toggle="counter-up"
                                        >
                                            15
                                        </h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Years of</p>
                                            <h6 className="text-uppercase mb-0">
                                                Experience
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1
                                            className="flex-shrink-0 display-5 text-primary mb-0"
                                            data-toggle="counter-up"
                                        >
                                            50
                                        </h1>
                                        <div className="ps-4">
                                            <p clasasName="mb-0">Popular</p>
                                            <h6 className="text-uppercase mb-0">
                                                Master Chefs
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link
                                className="btn btn-primary py-3 px-5 mt-2"
                                href=""
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Reservation Start */}
            <div
                className="container-xxl py-5 px-0 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="video">
                            <button
                                type="button"
                                className="btn-play"
                                data-bs-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                data-bs-target="#videoModal"
                            >
                                <span />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                                Reservation
                            </h5>
                            <h1 className="text-white mb-4">
                                Book A Table Online
                            </h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <label htmlFor="name">
                                                Your Name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <label htmlFor="email">
                                                Your Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div
                                            className="form-floating date"
                                            id="date3"
                                            data-target-input="nearest"
                                        >
                                            <input
                                                type="text"
                                                className="form-control datetimepicker-input"
                                                id="datetime"
                                                placeholder="Date & Time"
                                                data-target="#date3"
                                                data-toggle="datetimepicker"
                                            />
                                            <label htmlFor="datetime">
                                                Date &amp; Time
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select
                                                className="form-select"
                                                id="select1"
                                            >
                                                <option value={1}>
                                                    People 1
                                                </option>
                                                <option value={2}>
                                                    People 2
                                                </option>
                                                <option value={3}>
                                                    People 3
                                                </option>
                                            </select>
                                            <label htmlFor="select1">
                                                No Of People
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                placeholder="Special Request"
                                                id="message"
                                                style={{ height: 100 }}
                                                defaultValue={""}
                                            />
                                            <label htmlFor="message">
                                                Special Request
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary w-100 py-3"
                                            type="submit"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="videoModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Youtube Video
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {/* 16:9 aspect ratio */}
                            <div className="ratio ratio-16x9">
                                <iframe
                                    className="embed-responsive-item"
                                    src=""
                                    id="video"
                                    title="Restaurant Video"
                                    allowFullScreen=""
                                    allowscriptaccess="always"
                                    allow="autoplay"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reservation Start */}
            {/* Team Start */}
            <div className="container-xxl pt-5 pb-3">
                <div className="container">
                    <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                            Team Members
                        </h5>
                        <h1 className="mb-5">Our Master Chefs</h1>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img
                                        className="img-fluid"
                                        src={image_team_1}
                                        alt=""
                                    />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img
                                        className="img-fluid"
                                        src={image_team_2}
                                        alt=""
                                    />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img
                                        className="img-fluid"
                                        src={image_team_3}
                                        alt=""
                                    />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img
                                        className="img-fluid"
                                        src={image_team_4}
                                        alt=""
                                    />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link
                                        className="btn btn-square btn-primary mx-1"
                                        href=""
                                    >
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            {/* Testimonial Start */}
            <div
                className="container-xxl py-5 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="text-center">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                            Testimonial
                        </h5>
                        <h1 className="mb-5">Our Clients Say!!!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Nhà hàng EateryEase thật tuyệt vời! Món ăn ngon
                                miệng và bày trí đẹp mắt, không gian thì ấm cúng
                                và rất thoải mái.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-circle"
                                    src="img/testimonial-1.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Tôi rất ấn tượng với thực đơn đa dạng và chất
                                lượng món ăn tại EateryEase. Đặc biệt là món
                                tráng miệng, ngon tuyệt!
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-circle"
                                    src="img/testimonial-2.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Tôi đã có một bữa ăn tuyệt vời tại EateryEase.
                                Đồ ăn tươi ngon, hương vị tuyệt hảo, và cách
                                phục vụ rất tận tình. Chắc chắn sẽ giới thiệu
                                cho bạn bè và người thân.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-circle"
                                    src="img/testimonial-3.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>
                                Món ăn tại EateryEase được chế biến rất tinh tế
                                và hợp khẩu vị. Không gian nhà hàng cũng rất dễ
                                chịu, thích hợp để hẹn hò hay gặp gỡ bạn bè.
                            </p>
                            <div className="d-flex align-items-center">
                                <img
                                    alt=""
                                    className="img-fluid flex-shrink-0 rounded-circle"
                                    src="img/testimonial-4.jpg"
                                    style={{ width: 50, height: 50 }}
                                />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
