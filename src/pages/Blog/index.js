import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Nav from '../../components/Nav'


const Blog = (props) => {


  return (

    <>
    <Nav />
    <div className='container d-flex flex-wrap align-items-center' style={{marginTop:80}}>
    <Form>
      <FormGroup row>
        <Label for="author" sm={2}>Author</Label>
        <Col sm={10}>
          <Input type="name" name="name" id="name" placeholder="Author Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="title" sm={2}>Title</Label>
        <Col sm={10}>
          <Input type="title" name="title" id="title" placeholder="Title of blog" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="blog" sm={2}>Blog</Label>
        <Col sm={10}>
          <Input style={{height:300}} type="textarea" name="blog" id="blog" placeholder="Make it exciting" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>Image</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="authorPic" />
          <FormText color="muted">
            Select a avatar image to go along with your blog 
          </FormText>
        </Col>
      </FormGroup>
      
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    </>
  );
}

export default Blog;