"use client";

import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronRight, BsChevronLeft, BsPlayFill } from "react-icons/bs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

type SliderItem = {
  src: string;
  type: "image" | "video";
  alt?: string;
  thumbnail?: string;
};

type SliderProps = {
  data: SliderItem[];
};

const Slider = ({ data }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Swiper
      grabCursor
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        disabledClass: "swiper-button-disabled",
      }}
      className="slider"
      onSlideChange={(swiper) => {
        setCurrentIndex(swiper.activeIndex);
      }}
    >
      <button
        role="button"
        id="previous-banner"
        arial-label="Previous banner"
        className="swiper-button-prev"
      >
        <BsChevronLeft aria-label="Chevron Left" />
      </button>
      <button
        role="button"
        id="next-banner"
        aria-label="Next banner"
        className="swiper-button-next"
      >
        <BsChevronRight aria-label="Chevron Right" />
      </button>
      {data.map((item, index) => (
        <SwiperSlide className="slide" key={index}>
          {item.type === "image" && <Image src={item.src} fill alt={item.alt || ""} />}
          {item.type === "video" && (
            <YoutubeVideo
              src={item.src}
              thumbnail={item.thumbnail}
              isActive={index === currentIndex}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

const YoutubeVideo = ({
  src,
  thumbnail,
  isActive,
}: {
  src: string;
  thumbnail?: string;
  isActive: boolean;
}) => {
  const containerRef = useRef(null);
  const playerRef = useRef<any>(null);
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  const videoId = useMemo(() => {
    const regex = /embed\/([a-zA-Z0-9_-]{11})/;
    const match = src.match(regex);
    return match ? match[1] : null;
  }, [src]);

  useEffect(() => {
    if (window.YT && render && containerRef.current) {
      if (!videoId) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: { autoplay: 1, rel: 0 },
        events: {
          onReady: (event: any) => event.target.playVideo(),
        },
      });
    }
  }, [render, src]);

  useEffect(() => {
    if (!playerRef.current) return;
    if (!isActive) {
      playerRef.current.pauseVideo();
      setShow(false);
    }
  }, [isActive]);

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
    };
  }, []);

  const handlePlay = () => {
    if (!playerRef.current) {
      setRender(true);
    } else {
      playerRef.current.playVideo();
    }
    setShow(true);
  };

  const renderIframe = (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );

  return (
    <Fragment>
      {render && renderIframe}
      {!show && (
        <div style={{ position: "relative", width: "100%", height: "100%" }} onClick={handlePlay}>
          <Image src={thumbnail || ""} fill alt="" />
          <BsPlayFill className="play-button" />
        </div>
      )}
    </Fragment>
  );
  //     {item.type === "image" && <Image src={item.src} fill alt={item.alt || ""} />}
  //     {item.type === "video" && (
  //       <iframe
  //         src={item.src}
  //         title="YouTube video"
  //         frameBorder={0}
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //         style={{
  //           position: "absolute",
  //           top: 0,
  //           left: 0,
  //           width: "100%",
  //           height: "100%",
  //         }}
  //       ></iframe>
  //     )}
  //   </SwiperSlide>;
};
