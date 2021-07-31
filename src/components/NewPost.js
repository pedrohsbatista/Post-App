import React from 'react';
import { Form, Card, Col, Button } from 'react-bootstrap';
import PostApi from '../api/PostApi';
import { toast } from 'react-toastify';

class NewPost extends React.Component{
    state = {
       titulo: undefined,
       mensagem: undefined
    };

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    submit(){
        PostApi.post(this.state).then((success) => {
              this.props.history.push(`/`);
            }).catch((error) => {
                toast.error(error.toString());
            });        
    }

    render(){
        return(
            <Card>
                <Card.Body>
                    <h3>Novo Post</h3>
                    <Form>
                        <Form.Row>
                            <Col md="5">
                                <Form.Group>
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control type="text" name="titulo" onChange={this.onChange}></Form.Control>
                                </Form.Group>
                            </Col>                    
                        </Form.Row>
                        <Form.Row>
                            <Col md="12">
                                <Form.Group>
                                        <Form.Label>Texto</Form.Label>
                                        <Form.Control as="textarea" rows="10" name="texto" onChange={this.onChange}></Form.Control>
                                </Form.Group>
                            </Col>                    
                        </Form.Row>   
                        <Form.Row>
                           <Button variant={this.state.titulo && this.state.texto ? "success" : "light"}  disabled={this.state.titulo && this.state.texto ? false : true} onClick={() => this.submit()}>Publicar</Button>
                        </Form.Row>                
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}   

export default NewPost;