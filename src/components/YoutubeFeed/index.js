import React, {useEffect, useState} from 'react'

const YouFeed = () => {
    const [youTubeRSS, setYouTubeRSS] = useState([])

    // useEffect( () => {
    //     getYouTube()  
    // },[] )

    // cors-anywhere.herokuapp.com/
    const getYouTube = async () => {
        
        const myChannel = await fetch('https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw'
        ,{
            mode:'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
        }).catch(error =>
            console.log("error", error)
        )
 
        myChannel.text().then(res02 => {
            var parser02 = new DOMParser();
            var xmlDoc02 = parser02.parseFromString(res02, "text/xml");
            let y = xmlDoc02.getElementsByTagName("entry");
            // console.log('youtube children',y[0].children[4].attributes[1].value)
            for (let j = 0; j < y.length; j++) {
                var youtubeLink = y[j].children[4].attributes[1].value
                var embed = youtubeLink.split('watch?v=',).join('embed/')
                // console.log('youtube title',y[j].children[3].innerHTML)
                // console.log('youtube href',y[j].children[4].attributes[1].value)
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
        <div style={sytles.uParent}>
        <h4>Watch Now</h4>
        <div style={sytles.youtube}>
        {/* youTube episodes */}
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
        </div>
    )
}

const sytles = {
    youtube: {
        flex:1, 
        display:'flex',
        flexDirection:'row',
        position:'relative',
        flexWrap:'nowrap',
        maxWidth: '100%',
        overflowX: 'scroll',
        overflowY: 'hidden',
        marginLeft: '3%',
        marginTop:'3%',
    },
    uParent: {
        overflow:'hidden',
        maxWidth: '100%',
        overflowY: 'hidden',
    }
}
// below is the youtube rss feed
// https://www.youtube.com/feeds/videos.xml?channel_id=UCcwUaz-osDMbVHZAKoIuBPw
export default YouFeed