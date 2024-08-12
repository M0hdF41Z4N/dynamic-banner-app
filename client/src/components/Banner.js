import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = ({ heading, description, link, days, hours, minutes, seconds , onClose , bannerSettings ,updateBannerSettings  }) => {
  const [countdown, setCountdown] = useState({ days, hours, minutes, seconds });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevTime) => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(interval);
          bannerSettings.bannerOn = false;
          updateBannerSettings(bannerSettings);
          return prevTime;
        }
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="banner">
      {/* <button className="close-btn" onClick={onClose}>
         ×       </button> */}
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="countdown">
        <div className="time-unit">
          <span className="time">{countdown.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-unit">
          <span className="time">{countdown.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-unit">
          <span className="time">{countdown.minutes}</span>
          <span className="label">Min</span>
        </div>
        <div className="time-unit">
          <span className="time">{countdown.seconds}</span>
          <span className="label">Sec</span>
        </div>
      </div>
      <button className="cta-btn" onClick={() => window.location.href = link}>
        Show me
      </button>
    </div>
  );
};

export default Banner;