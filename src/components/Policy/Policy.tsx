import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

import "./Policy.scss";
import Link from "next/link";

const Policy = () => {
  return (
    <section className="policy" id="policy">
      <div className="container-fluid">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="policy-content">
            <h2 className="heading">CHÍNH SÁCH BÁN HÀNG MỚI NHẤT CHỦ ĐẦU TƯ SUN GROUP</h2>
            <div className="policy-description">
              <p>
                Chính sách, bảng giá, hồ sơ pháp lý, mặt bằng, hình ảnh, bảng tính dòng tiền đầu tư
              </p>
              <p>Thông tin đầy đủ, chi tiết, chính xác nhất. Trực tiếp từ Chủ đầu tư SUNGROUP</p>
              <p>Tham quan dự án, nhà mẫu hoàn toàn miễn phí</p>
              <p>Tư vấn đầu tư chuyên nghiệp, uy tín. Hỗ trợ khách hàng lâu dài sau bán hàng</p>
              <p>Cam kết phản hồi khách hàng sau 5 phút đăng ký</p>
              <p>Thông tin khách hàng cung cấp sẽ được bảo mật tuyệt đối theo chính sách công ty</p>
            </div>
            <button className="dowload-button">Tải chính sách bán hàng</button>
          </div>

          <div className="policy-images">
            <div>
              <Image src="/images/policy-1.jpg" fill alt="" />
            </div>
            <div>
              <Image src="/images/policy-2.jpg" fill alt="" />
            </div>
            <div>
              <Image src="/images/policy-3.jpg" fill alt="" />
            </div>
          </div>

          <div className="warning">
            <div className="warning-wrapper">
              <div className="warning-icon">
                <div className="warning-icon__image">
                  <Image src="/images/warning-icon.png" fill alt="" />
                </div>
                <div className="warning-icon__text">Chú Ý !</div>
              </div>
              <div className="warning-content">
                <p className="warning-text">
                  Ngoài những thông tin chung, tôi còn 2 tin &quot;tuyệt mật&quot;, đặc biệt có lợi
                  cho khách hàng. Tuy nhiên không thể public công khai cho tất cả mọi người. Nếu
                  quan tâm thực sự, quý khách vui lòng gọi trực tiếp để trao đổi chi tiết. Xin cảm
                  ơn!
                </p>
                <a href="tel:0866444072" className="warning-button">
                  <div className="warning-button__icon">
                    <FaPhone />
                  </div>
                  <span>0866.444072</span>
                </a>
              </div>
            </div>
          </div>

          <div className="policy-notice">
            <h4>
              BẢNG HÀNG ĐỘC QUYỀN, GIÁ GỐC TỪ CHỦ ĐẦU TƯ SUN GROUP <br /> CHIẾT KHẤU CAO NHẤT THỊ
              TRƯỜNG
            </h4>
          </div>
        </div>

        <div className="social">
          <h3>NHẤN ĐỂ FLOW ĐỂ BIẾT THÊM VIDEO GIỚI THIỆU CHI TIẾT CÁC DỰ ÁN</h3>
          <div className="social-list">
            <Link
              href={"https://www.tiktok.com/@dinhtan_bds?is_from_webapp=1&sender_device=pc"}
              rel="noopener noreferrer"
              target="_blank"
              className="social-item"
            >
              <Image src="/images/tiktok.jpg" alt="" width={64} height={64} />
            </Link>

            <Link
              href={"https://www.youtube.com/@Dinhtanbds"}
              rel="noopener noreferrer"
              target="_blank"
              className="social-item"
            >
              <Image src="/images/youtube.png" fill alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
