import React, {useEffect, useState} from 'react'
import Nav from '../../components/Nav';

const Episodes = () => {
    const [podcastRSS, setPodcastRSS] = useState([])

    useEffect( () => {
        getPodcast()  
    },[] )

    const getPodcast = async () => {
        const info = await fetch('https://anchor.fm/s/92b5e90/podcast/rss')
        let newArr = []
        info.text().then(res => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(res, "text/xml");
            let x = xmlDoc.getElementsByTagName("item");
            for (let i = 0; i < x.length; i++) {
                console.log(x[i].children)
                podcastRSS.push({
                    episode: x[i].children[0].textContent,
                    description: x[i].children[1].textContent,
                    link: x[i].children[2].textContent + '/embed',
                    image: x[i].children[10].attributes[0].value 
                })
            }
            console.log(xmlDoc)
            console.log(newArr)
            console.log('RSS.JSON() = ',podcastRSS)
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
                title={player.title}
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

export default Episodes