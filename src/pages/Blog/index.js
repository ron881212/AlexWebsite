import React, {useEffect, useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Nav from '../../components/Nav'
import blogger from './blogger.png'

const Blog = (props) => {
    const [addBlog, setAddBlog] = useState(false)
    const [author, setAuthor] = useState(null)
    const [title, setTitle] = useState(null)
    const [blogPost, setBlogPost] = useState(null)
    const [image, setimage] = useState(null)

    const authorChange = (event) => {
        setAuthor(event.target.value)
    }
    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    const imageChange = (event) => {
        setimage(event.target.value)
    }
    const blogChange = (event) => {
        setBlogPost(event.target.value)
    }
    const firebasePost = () => {
        // post blog to firebase
    }

  return (


    <>
    <Nav />
    <div className='container d-flex flex-wrap align-items-center' style={{marginTop:80}}>
    {!addBlog ? 
    <div>
        <button onClick={()=>setAddBlog(!addBlog)} 
            style={{position: 'relative',backgroundColor:'#ff6e00'}} type="button" className="rounded-circle dark-btn d-flex justify-content-center btn-sm">
            <img src={blogger}/>
        </button>
    </div>
    :
    <Form>
      <FormGroup row>
        <Label for="author" sm={2}>Author</Label>
        <Col sm={10}>
          <Input type="name" name="name" id="name" placeholder="Author Name"
            value={author} onChange={(e)=> authorChange(e)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="title" sm={2}>Title</Label>
        <Col sm={10}>
          <Input type="title" name="title" id="title" placeholder="Title of blog"
            value={title} onChange={(e)=> titleChange(e)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="blog" sm={2}>Blog</Label>
        <Col sm={10}>
          <Input style={{height:300}} type="textarea" name="blog" id="blog" placeholder="Make it exciting" 
              value={blogPost} onChange={(e)=> blogChange(e)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>Image</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="authorPic" 
              value={image} onChange={(e)=> imageChange(e)}
          />
          <FormText color="muted">
            Select a avatar image to go along with your blog 
          </FormText>
        </Col>
      </FormGroup>
      
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={()=> firebasePost()}>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    }
    </div>
    </>
  );
}

export default Blog;