import React from "react";

import styles from "./Location.module.scss";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

const Location = () => {
  return (
    <section
      className={styles["location"]}
      id="location"
      style={{
        backgroundImage: getImagePublicPath({
          dir: PROJECT_SLUG.SUN_SYMPHONY,
          path: "background-section",
        }),
      }}
    >
      <div className="container-fluid">
        <div className={styles["location-wrapper"]}>
          <div className={styles["location-content"]}>
            <h2 className={styles["location-title"]}>
              VỊ TRÍ DỰ ÁN SUN SYMPHONY RESIDENCE ĐÀ NẴNG
            </h2>
            <p className={styles["location-description"]}>
              Cư dân Sun Symphony Residences có thể tự hào vì được tận hưởng một phong cách sống
              sang trọng và tiện nghi bậc nhất, với mọi tiện ích đều trong tầm tay. Chỉ vài phút di
              chuyển, bạn có thể thỏa sức mua sắm tại các trung tâm thương mại sầm uất, thư giãn tại
              công viên Sun World Asia Park, hay dễ dàng kết nối với thế giới qua sân bay quốc tế.
              Sun Symphony Residences không chỉ đơn thuần là một nơi để sống, mà còn là nơi mang đến
              trải nghiệm sống đỉnh cao, đậm chất tinh hoa cho cộng đồng cư dân.
            </p>

            <div className={styles["nearby"]}>
              <div className={styles["nearby-group"]}>
                <div className={styles["nearby-item"]}>
                  <div className={styles["time"]}>2 phút</div>
                  <div className={styles["dot"]}></div>
                  <ul className={styles["places"]}>
                    <li className={styles["place"]}>Ga đường sắt</li>
                    <li className={styles["place"]}>Bệnh viện đa khoa Đà Nẵng</li>
                    <li className={styles["place"]}>Sân khấu pháo hoa DIFF</li>
                    <div className={styles["place"]}>Mega, BicC, Vincom, Lotte</div>
                  </ul>
                </div>
                <div className={styles["nearby-item"]}>
                  <div className={styles["time"]}>5 phút</div>
                  <div className={styles["dot"]}></div>
                  <ul className={styles["places"]}>
                    <li className={styles["place"]}>Công viên APEC</li>
                    <li className={styles["place"]}>Trường đại học Kinh Tế</li>
                    <li className={styles["place"]}>Sân bay quốc tế Đà Nẵng</li>
                    <div className={styles["place"]}>Bãi biển Mỹ Khê, Công viên Biển Đông</div>
                  </ul>
                </div>
                <div className={styles["nearby-item"]}>
                  <div className={styles["time"]}>10 phút</div>
                  <div className={styles["dot"]}></div>
                  <ul className={styles["places"]}>
                    <li className={styles["place"]}>Trung tâm hành chính Đà Nẵng</li>
                    <li className={styles["place"]}>Trường chuyên Lê Quý Đôn</li>
                    <li className={styles["place"]}>Cao tốc Đà Nẵng - Quảng Ngãi</li>
                    <div className={styles["place"]}>
                      Sân Golf BRG Đà Nẵng, Sân Golf Montgomerie Links
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles["line"]}></div>
            </div>
          </div>

          <div className={styles["location-map"]}>
            <h3>Google Map</h3>
            <iframe src="https://www.google.com/maps/d/embed?mid=1Bu-80Qrr7EQGMPO0x7XCJ_25LAKN-So&ehbc=2E312F"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
