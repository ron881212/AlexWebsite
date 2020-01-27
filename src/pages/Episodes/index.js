import React, {useEffect, useState} from 'react';
import Nav from '../../components/Nav';
import YouFeed from '../../components/YoutubeFeed';
import Hero from '../../components/Hero'
import PodcastFeed from '../../components/PodcastFeed';

const Episodes = () => {

    return(
        <>
        <Nav />
        <Hero />
        <PodcastFeed />
        <YouFeed />
        </>
    )
}



// below is the youtube rss feed 
// https://www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw

// https://anchor.fm/femme-collectively/embed/episodes/Ep--21--Fierce-Femme-Astrology-e36hi7/a-aacn7c
// https://anchor.fm/femme-collectively/episodes/Ep--23-Imagining-A-New-Future-e36r1j
export default Episodes