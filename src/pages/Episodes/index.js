import React, {useEffect, useState} from 'react'
import Nav from '../../components/Nav';

const Episodes = () => {
    const [podcastRSS, setPodcastRSS] = useState([])
    const [youTubeRSS, setYouTubeRSS] = useState([])

    useEffect( () => {
        getPodcast()  
    },[] )

    const getPodcast = async () => {
        const myPodcast = await fetch('https://anchor.fm/s/92b5e90/podcast/rss')
        const myChannel = await fetch('https://cors-anywhere.herokuapp.com/www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw'
        ,{mode:'cors',cache: 'no-cache',credentials: 'same-origin'}
        )
        // let podcastArr = []
        // let youTubeArr = []
        myPodcast.text().then(res => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(res, "text/xml");
            let x = xmlDoc.getElementsByTagName("item");
            for (let i = 0; i < x.length; i++) {
                // console.log(x[i].children)
                podcastRSS.push({
                    episode: x[i].children[0].textContent,
                    // description: x[i].children[1].textContent,
                    link: x[i].children[2].textContent + '/embed',
                    // image: x[i].children[10].attributes[0].value 
                })
            }
            // console.log(xmlDoc)
            // console.log('podCastRSS.JSON() = ',podcastRSS)
        }).catch(err => console.log(err))

        console.log('My Channel => ',myChannel)
        console.log('My podcost => ',myPodcast)
        myChannel.text().then(res02 => {
            var parser02 = new DOMParser();
            var xmlDoc02 = parser02.parseFromString(res02, "text/xml");
            let y = xmlDoc02.getElementsByTagName("entry");
            // for (let j = 0; j < y.length; j++) {
            //     console.log('youtube children',y.children)
            //     youTubeRSS.push({
            //         episode: x[i].children[0].textContent,
            //         description: x[i].children[1].textContent,
            //         link: x[i].children[2].textContent + '/embed',
            //         image: x[i].children[10].attributes[0].value 
            //     })
            // }
            console.log('youtube xml=> ',xmlDoc02)
            console.log('youtube entry=> ',y)
            // console.log('youTubeRSS.JSON() = ',youTubeRSS)
        }).catch(err => console.log(err))

    }

    return(
        <>
        <div style={{flex:1}}>
        <Nav />
        </div>
        <div style={{flex:1, position:'relative',marginTop:'5%'}}>
        {podcastRSS.map((player, i) => (
            <iframe 
                key={i}
                title={player.episode}
                // width="360" 
                // height="115" 
                src={player.link}
                frameBorder="0" 
                scrolling="no"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        ))}
        </div>
        </>
    )
}

// below is the youtube rss feed 
// https://www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw
export default Episodes