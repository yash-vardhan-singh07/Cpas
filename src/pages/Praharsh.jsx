import React, { useEffect, useRef, useState } from "react";
import "./style.css"

export default function RewardsPage() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll(".chat-slide");

    let autoScroll = setInterval(() => {
      let next = currentIndex + 1;
      if (next >= slides.length) next = 0;
      scrollToSlide(next);
    }, 3000);

    function scrollToSlide(i) {
      const width = slides[0].offsetWidth;
      carousel.scrollTo({ left: width * i, behavior: "smooth" });
      setCurrentIndex(i);
    }

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header-section">
        <div className="header-img-wrap">
          <img
            src="dp beacons111.png"
            alt="Reward Graphic"
            className="header-img"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/160x160/0c2f10/17e84a?text=$";
            }}
          />
        </div>
      </header>

      {/* Reward Survey */}
      <section className="survey-wrapper">
        <h1 className="survey-title">✨ Reward Survey ✨</h1>
        <p className="survey-subtitle">💸⬇ Choose Your Rewards ⬇💸</p>

        <div className="reward-buttons">
          {/* Amazon */}
          <a
            href="https://glctrk.org/aff_c?offer_id=3334&aff_id=153841"
            className="reward-button amazon-dance"
          >
            <img src="amazon.jpg" alt="" className="reward-icon" />
            <div>
              <p className="reward-main">$750 Amazon 🎁</p>
              <p className="reward-sub">(Complete survey and deals)</p>
            </div>
          </a>

          {/* Cash */}
          <a
            href="https://glctrk.org/aff_c?offer_id=3308&aff_id=153841"
            className="reward-button"
          >
            <img src="cashapp.jpg" alt="" className="reward-icon" />
            <div>
              <p className="reward-main">$750 Cash 💵</p>
              <p className="reward-sub">(Complete survey and deals)</p>
            </div>
          </a>
        </div>
      </section>

      {/* Carousel */}
      <h2 className="carousel-title">
        Top Claims <span className="money-icon">💰</span>
      </h2>

      <section className="carousel-wrapper">
        <div className="chat-carousel-container" ref={carouselRef}>
          <div className="chat-slide">
            <img src="1232.jpg" alt="" />
          </div>
          <div className="chat-slide">
            <img src="1233.jpg" alt="" />
          </div>
          <div className="chat-slide">
            <img src="1234.jpg" alt="" />
          </div>
          <div className="chat-slide">
            <img src="1235.jpg" alt="" />
          </div>
        </div>

        <div className="carousel-dots">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              className={`dot ${currentIndex === i ? "active" : ""}`}
            ></button>
          ))}
        </div>
      </section>

      {/* How To Claim */}
      <section className="claim-section">
        <div className="claim-card">
          <h3 className="claim-title">HOW TO CLAIM YOUR GIFT CARD</h3>

          <ol className="claim-list">
            <li>
              <span>1)</span> Click one of the offers above 👆
            </li>
            <li>
              <span>2)</span> Enter Your Email & Basic Info ✉️
            </li>
            <li>
              <span>3)</span> Complete majority of the recommended offers ❗
            </li>
            <li>
              <span>4)</span> More the offers you complete, higher the rewards 💵
            </li>
            <li>
              <span>5)</span> Claim Your Gift Card 🎁
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
