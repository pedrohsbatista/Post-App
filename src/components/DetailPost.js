import React from 'react';
import PostApi from '../api/PostApi';
import { toast } from 'react-toastify';
import { ListGroup } from 'react-bootstrap';
import { CardStyled, ListGroupStyled } from '../StyleComponent';
import NewComment from './NewComment';
import Comments from './Comments';
import CardPost from './CardPost';

class DetailPost extends React.Component{
    state = {
       post: {
           comentarios: []
       }
    };

    componentDidMount(){
       this.getById(this.props.match.params.id);
    }

    getById(id){
        PostApi.getById(id).then((success) => {
            this.setState({post: success.data});
        }).catch((error) => {
            toast.error(error.toString());
        });
    }

    setReaction(id, tipo) {
        PostApi.setReaction(id, tipo).then((success) => {
           this.getById(id);           
        }).catch((error) => {
            toast.error(error.toString());
        })
    }

    addComment(id, comentario){
        PostApi.addComment(id, comentario).then((success) => {
            this.getById(id);            
        }).catch((error) => {
            toast.error(error.toString());
        });
    }

    render(){
        return(
            <>
               <CardStyled key={this.state.post.id}>
                    <CardPost post={this.state.post} setReaction={this.setReaction.bind(this)}></CardPost>
                    <ListGroupStyled>
                        <ListGroup.Item>
                            <NewComment id={this.state.post.id} addComment={this.addComment.bind(this)}></NewComment>
                        </ListGroup.Item>   
                        <Comments comentarios={this.state.post.comentarios}></Comments>                        
                    </ListGroupStyled> 
                </CardStyled>                        
            </>
        )
    }
}

export default DetailPost;