import React from "react";
import "./Layout.scss";
import Image from "next/image";

const Layout = () => {
  return (
    <section className="layout" id="layout">
      <div className="container">
        <h3 className="heading">LAYOUT BÓC MÁI CĂN HỘ SUN SYMPHONY ĐÀ NẴNG</h3>
        <div className="layout-list">
          <div className="layout-item">
            <Image src="/images/layout-1.jpg" fill alt="" />
          </div>
          <div className="layout-item">
            <Image src="/images/layout-2.jpg" fill alt="" />
          </div>
          <div className="layout-item">
            <Image src="/images/layout-3.jpg" fill alt="" />
          </div>
          <div className="layout-item">
            <Image src="/images/layout-4.jpg" fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
