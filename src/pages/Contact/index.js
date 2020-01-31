import React from 'react'
import Nav from '../../components/Nav'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardColumns, Button
} from 'reactstrap'
// import './styles.css'
import face from './facebook.png'
import tweet from './twitter.png'
import gram from './instagram.png'
import reddit from './reddit.png'
import coffee from './coffee.png'
import gmail from './gmail.png'

const Contact = () => {
    // const infoCards = useRef(null)
    return(
        <>
        <Nav />
        <h1>Contact</h1>
        <div>
        <div className='container d-flex flex-wrap align-items-center' >

        <Card body inverse className='m-3' style={{ 
            backgroundColor: '#333', 
            borderColor: '#333', 
            width:200 
        }}>
        <a href="https://www.w3schools.com" style={{
            textDecoration:'none',
            color:'white',
            alignSelf:'center'
        }}>
        <CardImg src={face} alt="Card image cap" style={{
            width:100, 
            height:100, 
            alignSelf:'center'
        }}/>
        <CardTitle className='text-center'>Facebook</CardTitle>
        </a>
        </Card>

        <Card body inverse className='m-3' style={{ 
            backgroundColor: '#333', 
            borderColor: '#333', 
            width:200 
        }}>
        <a href="https://www.w3schools.com" style={{
            textDecoration:'none',
            color:'white',
            alignSelf:'center'
        }}>
        <CardImg src={tweet} alt="Card image cap" style={{
            width:100, 
            height:100, 
            alignSelf:'center'
        }}/>
        <CardTitle className='text-center'>Twitter</CardTitle>
        </a>
        </Card>

        <Card body inverse className='m-3' style={{ 
            backgroundColor: '#333', 
            borderColor: '#333', 
            width:200 
        }}>
        <a href="https://www.w3schools.com" style={{
            textDecoration:'none',
            color:'white',
            alignSelf:'center'
        }}>
        <CardImg src={gram} alt="Card image cap" style={{
            width:100, 
            height:100, 
            alignSelf:'center'
        }}/>
        <CardTitle className='text-center'>Instagram</CardTitle>
        </a>
        </Card>

        <Card body inverse className='m-3' style={{ 
            backgroundColor: '#333', 
            borderColor: '#333', 
            width:200
        }}>
        <a href="https://www.w3schools.com" style={{
            textDecoration:'none',
            color:'white',
            alignSelf:'center'
        }}>
        <CardImg src={reddit} alt="Card image cap" style={{
            width:100, 
            height:100, 
            alignSelf:'center'
        }}/>
        <CardTitle className='text-center'>Reddit</CardTitle>
        </a>
        </Card>

        <Card body inverse className='m-3' style={{ 
            backgroundColor: '#333', 
            borderColor: '#333', 
            width:200
        }}>
        <a href="https://www.w3schools.com" style={{
            textDecoration:'none',
            color:'white',
            alignSelf:'center'
        }}>
        <CardImg src={gmail} alt="Card image cap" style={{
            width:100, 
            height:100, 
        }}/>
        <CardTitle className='text-center'>Gmails</CardTitle>
        </a>
        </Card>

        
        <Card body inverse className='m-3' style={{ 
            backgroundColor: '#333', 
            borderColor: '#333', 
            width:200
        }}>
        <a href="https://www.w3schools.com" style={{
            textDecoration:'none',
            color:'white',
            alignSelf:'center'
        }}>
        <CardImg src={coffee} alt="Card image cap" style={{
            width:100, 
            height:100, 
        }}/>
        <CardTitle className='text-center'>Buy Me Coffee</CardTitle>
        </a>
        </Card>
        

        </div>
        </div>
        </>
    )
}

export default Contact