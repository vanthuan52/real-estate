import React from "react";
import "./Feature.scss";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="feature" id="feature">
      <div className="container">
        <h2 className="heading">CÁC LOẠI HÌNH SẢN PHẨM TỔ HỢP SUN SYMPHONY</h2>
        <div className="feature-item">
          <div className="feature-content">
            <h3 className="feature-title">3 TOÀ CĂN HỘ CAO CẤP</h3>
            <p className="feature-description">
              <span>
                Căn hộ cực đẹp nằm sát dòng sông thơ mộng, đối diện điểm bắn pháo hoa DIFF 100% căn
                hộ không bị khuất view, tầm nhìn Panorama 360 độ. Dự án sở hữu tầm view 3 trong 1
                đẳng cấp: View Sông Hàn, View biển &amp; View thành phố.
              </span>
              <br />
              <br />
              <span>
                3 tòa tháp cao từ 24 - 30 tầng bao gồm:
                <br />3 Tầng hầm để xe
                <br />
                Tầng nổi: Khoảng 1313 Căn hộ cao cấp
                <br />
                Loại hình: Studio, 1Br +1, 2Br, 3Br, Penthouse, Duplex , Dual Front...
                <br />
                Diện tích: từ 25,8m² đến 112,1m² (không bao gồm Penthouse)
                <br />
                Hình thức sở hữu: Sổ hồng lâu dài
                <br />
                <br />
              </span>
            </p>
            <button>Báo giá</button>
          </div>
          <div className="feature-image">
            <Image src={"/images/banner-4.jpg"} alt="" fill />
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <h3 className="feature-title">20 CĂN VILLA MẶT SÔNG</h3>
            <p className="feature-description">
              Một khu đô thị năng động &amp; hiện đại của Đà Nẵng đang trên đà phát triển mạnh mẽ,
              giúp nâng tầm diện mạo Đà thành, đóng góp vào mục tiêu phát triển hội nhập toàn cầu
              của thành phố.
              <br />
              Số lượng căn: 20 căn
              <br />
              Chiều cao: 3,5 Tầng
              <br />
              Thông số dự kiến:
              <br />⚬ Diện tích lô đất: 180m² – 369,3m²
              <br />⚬ Mặt tiền: 10m
              <br />⚬ Chiều sâu: 18m
              <br />
              Hình thức sở hữu: Sổ hồng lâu dài
            </p>
            <button>Báo giá</button>
          </div>
          <div className="feature-image">
            <Image src={"/images/banner-3.jpg"} alt="" fill />
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <h3 className="feature-title">180 CĂN TOWNHOUSE</h3>
            <p className="feature-description">
              Khu vực tập trung dân cư chất lượng cao, một nơi hội tụ nhiều chuyên gia quốc tế,
              doanh nhân thành đạt, cộng đồng người nước ngoài (Hàn, Nhật, Trung…).
              <br />
              Số lượng căn: 180 căn
              <br />
              Chiều cao: Townhouse 3 Tầng - Townhouse 5 Tầng
              <br />
              Thông số :
              <br />⚬ Diện tích lô đất: 108 m2 - 135m² – 245,8m²
              <br />⚬ Mặt tiền: 6m-7,5m
              <br />⚬ Chiều sâu: 18 – 19m
              <br />
              Hình thức sở hữu: Sổ hồng lâu dài
            </p>
            <button>Báo giá</button>
          </div>
          <div className="feature-image">
            <Image src={"/images/banner-5.jpg"} alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
