import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

function App() {
  const [bannerSettings, setBannerSettings] = useState({
    id: null,
    bannerOn: false,
    heading: '',
    description: '',
    link: '',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    fetchBannerSettings();
  }, []);

  const fetchBannerSettings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/banner');
      setBannerSettings(response.data);
    } catch (error) {
      console.error('Error fetching banner settings:', error);
    }
  };

  const updateBannerSettings = async (newSettings) => {
    try {
        let response;
        if (bannerSettings.id) {
          // If we have an ID, update the existing record
          response = await axios.put(`http://localhost:5000/api/banner/${bannerSettings.id}`, newSettings);
        } else {
          // If we don't have an ID, create a new record
          response = await axios.post('http://localhost:5000/api/banner', newSettings);
        }
        setBannerSettings(response.data);
    } catch (error) {
      console.error('Error updating banner settings:', error);
    }
  };

  const handleCloseBanner = () => {
        setShowBanner(false);
      };

  return (
    <div className="App">
      {bannerSettings.bannerOn && (
        <Banner
          heading={bannerSettings.heading}
          description={bannerSettings.description}
          link={bannerSettings.link}
          days={bannerSettings.days}
          hours={bannerSettings.hours}
          minutes={bannerSettings.minutes}
          seconds={bannerSettings.seconds}
          onClose={handleCloseBanner}
          bannerSettings={bannerSettings}
          updateBannerSettings={updateBannerSettings}
        />
      )}
      <Dashboard
        bannerSettings={bannerSettings}
        updateBannerSettings={updateBannerSettings}
      />
    </div>
  );
}

export default App;