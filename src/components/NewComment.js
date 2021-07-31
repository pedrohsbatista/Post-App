import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class NewComment extends React.Component{
    state = {        
        comentario: ""
    };

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addComment(){
        this.props.addComment(this.props.id, this.state.comentario);
        this.setState({comentario: ""});
    }

    render(){
        return (
            <>
                <Form>
                    <Form.Row>
                        <Col md="10">
                            <Form.Control type="text" name="comentario" placeholder="Adicione um comentário" onChange={this.onChange} value={this.state.comentario}></Form.Control>
                        </Col>
                        <Col md="1">
                            <Button variant={this.state.comentario ? "success" : "light"}  disabled={this.state.comentario ? false : true} onClick={() => this.addComment()}>Adicionar</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </>
        )
    }
}

export default NewComment;