import React, { useEffect, useState } from 'react';
import "./Dashboard.css"; // We'll create this CSS file for styling

const Dashboard = ({ bannerSettings, updateBannerSettings }) => {
  const [localSettings, setLocalSettings] = useState(bannerSettings);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBannerSettings(localSettings);
  };

  useEffect(() => {
    return setLocalSettings(bannerSettings);
  }, [bannerSettings]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <form className="banner-form" onSubmit={handleSubmit}>
        <label>
          <span>Banner On/Off:</span>
          <input
            type="checkbox"
            name="bannerOn"
            checked={localSettings.bannerOn}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        <span>Heading:</span>
          <input
            type="text"
            name="heading"
            value={localSettings.heading}
            onChange={handleChange}
          />
        </label>
        <br />
        <label><span>
          Description:
        </span>
          <input
            type="text"
            name="description"
            value={localSettings.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label><span>

          Link:
        </span>
          <input
            type="url"
            name="link"
            value={localSettings.link}
            onChange={handleChange}
          />
        </label>
        <br />
        <label><span>

          Days:
        </span>
          <input
            type="number"
            name="days"
            value={localSettings.days}
            onChange={handleChange}
            min="0"
          />
        </label>
        <label><span>

          Hours:
        </span>
          <input
            type="number"
            name="hours"
            value={localSettings.hours}
            onChange={handleChange}
            min="0"
            max="23"
          />
        </label>
        <label><span>

          Minutes:
        </span>
          <input
            type="number"
            name="minutes"
            value={localSettings.minutes}
            onChange={handleChange}
            min="0"
            max="59"
          />
        </label>
        <label><span>

          Seconds:
        </span>
          <input
            type="number"
            name="seconds"
            value={localSettings.seconds}
            onChange={handleChange}
            min="0"
            max="59"
          />
        </label>
        <br />
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;