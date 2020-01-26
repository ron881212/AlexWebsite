import React, {useEffect, useState} from 'react'
import Nav from '../../components/Nav';

const Episodes = () => {
    const [podcastRSS, setPodcastRSS] = useState([])
    const [youTubeRSS, setYouTubeRSS] = useState([])

    useEffect( () => {
        getPodcast()  
    },[] )
    // cors-anywhere.herokuapp.com/
    const getPodcast = async () => {
        const myPodcast = await fetch('https://anchor.fm/s/92b5e90/podcast/rss')
        const myChannel = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw'
        ,{
            mode:'cors',
            cache: 'no-cache',
            // credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }
        ).catch(error =>
            console.log("error", error)
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

        // console.log('My Channel => ',myChannel)
        console.log('My podcast => ',myPodcast)
        myChannel.text().then(res02 => {
            var parser02 = new DOMParser();
            var xmlDoc02 = parser02.parseFromString(res02, "text/xml");
            let y = xmlDoc02.getElementsByTagName("entry");
            // console.log('youtube children',y[0].children[4].attributes[1].value)
            for (let j = 0; j < y.length; j++) {
                var youtubeLink = y[j].children[4].attributes[1].value
                var embed = youtubeLink.split('watch?v=',).join('embed/')
                console.log('youtube title',y[j].children[3].innerHTML)
                console.log('youtube href',y[j].children[4].attributes[1].value)
                youTubeRSS.push({
                    title: y[j].children[3].innerHTML,
                    // description: x[i].children[1].textContent,
                    link: embed,
                    // image: x[i].children[10].attributes[0].value 
                })
            }
            // console.log('youtube xml=> ',xmlDoc02)
            // console.log('youtube entry=> ',y)
            // console.log('youTubeRSS.JSON() = ',youTubeRSS)
        }).catch(err => console.log(err))

    }

    return(
        <>
        <div style={{flex:1}}>
        <Nav />
        </div>

        {/* podcast eposides */}
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

        {/* youTube episodes */}
        <div style={sytles.youtube}>
        {youTubeRSS.map((tube, i) => (
            <iframe 
                key={i}
                title={tube.title}
                // width="360" 
                // height="115" 
                src={tube.link}
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

const sytles = {
    youtube: {
        flex:1, 
        position:'relative',
        marginTop:'5%',
        justifyContent: 'center'
    }
}
// below is the youtube rss feed 
// https://www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw
export default Episodes