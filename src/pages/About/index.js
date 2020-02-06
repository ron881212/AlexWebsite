import React, {useEffect} from 'react'
import Nav from '../../components/Nav'
import aboutme from './aboutPic.jpeg'
import './aboutStyles.css'
import { CardBody } from 'reactstrap'
import { render } from '@testing-library/react'

class About extends React.Component {

    // componentWillMount(){
    //     document.body.style.backgroundColor = "#660850";
    // }
    
    // componentWillUnmount(){
    //     document.body.style.backgroundColor = null;
    // }

    render(){

    return(
        <>
        <Nav />
        <div className="jumbotron jumbotron-fluid text-center pb-5" style={{backgroundColor:'#001a30'}}>
            <img src={aboutme} alt='code' style={{width:'350px'}} className="img-fluid rounded-circle mt-5"/>        
        </div>
        <div className="container">
        <div className="card text-white mb-3 mx-auto" style={{backgroundColor:'#67054e'}}>
            <div className="card-body">
            <p className="card-text text-center" style={{fontSize:'25px'}}>
            My name is Alex and I love discussing crime and television! I make videos every week that review and analyze my favorite films and TV shows with a focus on women, scifi, LGBTQ, and the black community. I also post videos that discuss crime, culture, and vlog sometimes!
            </p>
            </div>
        </div>
        </div>
        </>
    )
    } 
}

export default About