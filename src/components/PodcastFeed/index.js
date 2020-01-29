import React, {useEffect, useState} from 'react';

const PodcastFeed = () => {
    const [podcastRSS, setPodcastRSS] = useState([])
    const [completedPod, setCompletedPod] = useState(false)

    // useEffect( () => {
    //     getPodcast()  
    // },[] )

     const getPodcast = async () => {
        const myPodcast = await fetch('https://anchor.fm/s/92b5e90/podcast/rss')
    
        myPodcast.text().then(res => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(res, "text/xml");
            let x = xmlDoc.getElementsByTagName("item");
            for (let i = 0; i < x.length; i++) {
                var podcastFeed = x[i].children[2].textContent
                var embedFeed = podcastFeed.replace('collectively', 'collectively/embed')
                // console.log('embedFeed here =>', podcastFeed)
                // console.log('embedFeed',embedFeed)
                podcastRSS.push({
                    episode: x[i].children[0].textContent,
                    // description: x[i].children[1].textContent,
                    link: embedFeed,
                    // image: x[i].children[10].attributes[0].value 
                })
            }
            setCompletedPod(!completedPod)
        }).catch(err => console.log(err))
    }
    

        return (
            <div style={sytles.podParent}>
            <h4 className='ml-5 mt-3'>Collectively Podcast</h4>
            <div style={sytles.podcast}>

            {   completedPod ?
                podcastRSS.map((player, i) => (
                <iframe 
                    key={i}
                    title={player.episode}
                    // width="460" 
                    // height="115" 
                    src={player.link}
                    frameBorder="0" 
                    scrolling="no"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            ))
            :
                null
            }
            </div>
            </div>
        )
}

const sytles = {
    podcast: {
        flex:1, 
        display:'flex',
        flexDirection:'row',
        position:'relative',
        marginTop:'3%',
        flexWrap: 'nowrap',
        maxWidth: '100%',
        overflowX: 'scroll',
        overflowY: 'hidden',
        marginLeft: '3%'
    },
    podParent: {
        overflow:'hidden',
        maxWidth: '100%',
        overflowY: 'hidden',
    }
}

export default PodcastFeed
