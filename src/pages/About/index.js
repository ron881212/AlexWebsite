import React, {useEffect} from 'react'
import Nav from '../../components/Nav'
import aboutme from './aboutPic.jpeg'
import './aboutStyles.css'
import { CardBody } from 'reactstrap'
import { render } from '@testing-library/react'

class About extends React.Component {

    componentWillMount(){
        document.body.style.backgroundColor = "#660850";
    }
    
    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }

    render(){

    return(
        <>
        <Nav />
        <div style={{
            backgroundColor:'#660850',
            display:'flex',
            flexDirection:'row',
            flexFlow: 'row wrap',
            marginTop:80,
            alignItems:'center',
            justifyContent:'space-evenly'
        }}>
            <img 
                className="img-fluid" 
                style={{
                    borderRadius:'50%',
                    position:'relative', 
                    display:'flex',
                    // margin: 0,
                    margin:10,
                    height:500,
                    width:500
                }}
                alt="Collectively-image" 
                src={aboutme} />
            <p 
            className="mx-5" 
            style={{display:'flex', fontSize:45, width:'40%',flexGrow:2,color:'#f4f4f4'}}>
            My name is Alex and I love discussing crime and television! I make videos every week that review and analyze my favorite films and TV shows with a focus on women, scifi, LGBTQ, and the black community. I also post videos that discuss crime, culture, and vlog sometimes!
            </p>
        </div>
        </>
    )
    } 
}

export default About