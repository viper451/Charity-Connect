import React from 'react';
import Announcement from 'react-announcement'
import logo from './logos/logo.png'
const Home = () => {

        return (
            <Announcement
              title="Here is your component"
              subtitle="The best announcement component for React is finally here. Install it in all your projects."
              link="https://github.com/kristofferandreasen/react-announcement"
               imageSource={logo}
              daysToLive={3}
              secondsBeforeBannerShows={20}
              closeIconSize={30}
              animateInDuration={2000}
              animateOutDuration={500}
            />
    );
};

export default Home;