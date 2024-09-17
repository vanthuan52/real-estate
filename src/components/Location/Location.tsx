import React from "react";
import "./Location.scss";

const Location = () => {
  return (
    <section className="location">
      <div className="container-fluid">
        <div className="location-wrapper">
          <div className="location-content">
            <h3 className="location-title">VỊ TRÍ DỰ ÁN SUN SYMPHONY RESIDENCE ĐÀ NẴNG</h3>
            <p className="location-description">
              Cư dân Sun Symphony Residences có thể tự hào vì được tận hưởng một phong cách sống
              sang trọng và tiện nghi bậc nhất, với mọi tiện ích đều trong tầm tay. Chỉ vài phút di
              chuyển, bạn có thể thỏa sức mua sắm tại các trung tâm thương mại sầm uất, thư giãn tại
              công viên Sun World Asia Park, hay dễ dàng kết nối với thế giới qua sân bay quốc tế.
              Sun Symphony Residences không chỉ đơn thuần là một nơi để sống, mà còn là nơi mang đến
              trải nghiệm sống đỉnh cao, đậm chất tinh hoa cho cộng đồng cư dân.
            </p>

            <div className="nearby">
              <div className="nearby-group">
                <div className="nearby-item">
                  <div className="time">2 phút</div>
                  <div className="dot"></div>
                  <ul className="places">
                    <li className="place">Ga đường sắt</li>
                    <li className="place">Bệnh viện đa khoa Đà Nẵng</li>
                    <li className="place">Sân khấu pháo hoa DIFF</li>
                    <div className="place">Mega, BicC, Vincom, Lotte</div>
                  </ul>
                </div>
                <div className="nearby-item">
                  <div className="time">5 phút</div>
                  <div className="dot"></div>
                  <ul className="places">
                    <li className="place">Công viên APEC</li>
                    <li className="place">Trường đại học Kinh Tế</li>
                    <li className="place">Sân bay quốc tế Đà Nẵng</li>
                    <div className="place">Bãi biển Mỹ Khê, Công viên Biển Đông</div>
                  </ul>
                </div>
                <div className="nearby-item">
                  <div className="time">10 phút</div>
                  <div className="dot"></div>
                  <ul className="places">
                    <li className="place">Trung tâm hành chính Đà Nẵng</li>
                    <li className="place">Trường chuyên Lê Quý Đôn</li>
                    <li className="place">Cao tốc Đà Nẵng - Quảng Ngãi</li>
                    <div className="place">Sân Golf BRG Đà Nẵng, Sân Golf Montgomerie Links</div>
                  </ul>
                </div>
              </div>

              <div className="line"></div>
            </div>
          </div>

          <div className="location-map">
            <h3>Google Map</h3>
            <iframe src="https://www.google.com/maps/d/embed?mid=1Bu-80Qrr7EQGMPO0x7XCJ_25LAKN-So&ehbc=2E312F"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
