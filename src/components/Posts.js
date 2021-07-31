import React from 'react';
import PostApi from '../api/PostApi';
import { toast } from 'react-toastify';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardStyled,  ListGroupStyled, ListGroupItemStyled } from '../StyleComponent';
import CardPost from '../components/CardPost';
import NewComment from '../components/NewComment';
import Comments from '../components/Comments';

class Posts extends React.Component {
    state = {
      posts: []  
    };
 
    componentDidMount() {
        this.getAll();
    }     

    getAll(){
        PostApi.getAll().then((success) =>{
            this.setState({posts: success.data});
        }).catch((error) => {
            toast.error(error.toString());
        });  
    }

    setReaction(id, tipo){
        PostApi.setReaction(id, tipo).then((success) => {
            this.getAll();
        }).catch((error) => {
            toast.error(error.toString());
        })
    }

    addComment(id, comentario){
        PostApi.addComment(id, comentario).then((success) => {
            this.getAll();            
        }).catch((error) => {
            toast.error(error.toString());
        });
    }

    render() {  
        return (
            <>
                {this.state.posts.map(element => (
                    <CardStyled key={element.id}>
                        <CardPost post={element} setReaction={this.setReaction.bind(this)}></CardPost>
                        <ListGroupStyled>
                            <ListGroup.Item>
                                <NewComment id={element.id} addComment={this.addComment.bind(this)}></NewComment>
                            </ListGroup.Item>   
                            <Comments comentarios={element.comentarios.slice(0, 3)}></Comments>
                            <ListGroupItemStyled><Link to={`/detailPost/${element.id}`}>Ver todos os comentários</Link> </ListGroupItemStyled>                                   
                        </ListGroupStyled> 
                    </CardStyled>                   
                ))}    
            </>      
        )
    }    
}

export default Posts;