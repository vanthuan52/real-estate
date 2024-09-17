import React from "react";
import Slider from "../Slider/Slider";
import "./Amenity.scss";

const images = [
  {
    src: "/images/amenity-4.png",
    alt: "",
  },
  {
    src: "/images/amenity-1.png",
    alt: "",
  },
  {
    src: "/images/amenity-2.png",
    alt: "",
  },
  {
    src: "/images/amenity-3.png",
    alt: "",
  },
];
const Amenity = () => {
  return (
    <section className="amenity">
      <h2 className="heading">CHUỖI TIỆN ÍCH ĐẲNG CẤP 5 SAO</h2>
      <div className="container-fluid">
        <div className="amenity-content">
          <div className="amenity-content__left">
            <p>
              Được quản lý và vận hành bởi thương hiệu quản lý 5 sao quốc tế
            </p>
            <p>
              Sun Property Management đảm bảo một không gian tiện ích phong phú,
              đa dạng với tiêu chuẩn quốc tế cho.
            </p>
            <ul>
              <li>Bể bơi vô cực</li>
              <li>Bể bơi trẻ em</li>
              <li>Bể bơi trong nhà</li>
              <li>Pool bar</li>
              <li>Sky Lounge</li>
              <li>Khu tiệc gia đình</li>
              <li>Bistro Glasshouse</li>
              <li>Rooftop City Bar</li>
              <li>Quảng trường trung tâm</li>
              <li>Đài vọng cảnh</li>
              <li>Đường dạo bộ</li>
              <li>Sân bóng</li>
              <li>Vườn thiền</li>
              <li>Đài phun nước</li>
              <li>Yoga, Sona, Gym...</li>
              <li>Kid Club</li>{" "}
            </ul>
          </div>
          <div className="amenity-content__right">
            <div className="amenity-slider">
              <Slider data={images} />
            </div>
            <div className="subscribe">
              <h3>ĐĂNG KÝ THAM QUAN NHÀ MẪU</h3>
              <p>HỖ TRỢ 100% VÉ MÁY BAY VÀ CHI PHÍ THAM QUAN</p>
              <form className="subscribe-form">
                <input type="text" placeholder="*Số điện thoại*" />
                <button>Gửi ngay</button>
              </form>
              <span>
                (*) Chúng tôi cam kết thông tin của quý khách hàng sẽ được bảo
                mật tuyệt đối!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenity;
