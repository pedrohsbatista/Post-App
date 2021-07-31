import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { CardTitleStyled, CardFooterStyled } from '../StyleComponent';
import moment from 'moment';
import like from '../images/like.png';
import dislike from '../images/dislike.png';

class CardPost extends React.Component{

    setReaction(id, tipo){
       this.props.setReaction(id, tipo);
    }

    render(){
        return(
        <>
            <Card.Body>
                <CardTitleStyled> 
                        <span>{this.props.post.titulo} <small>{moment(this.props.post.data, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD/MM/YYYY HH:mm')}</small></span>                                                               
                </CardTitleStyled>
                <Card.Text>
                    {this.props.post.texto}
                </Card.Text>                                                    
            </Card.Body>
            <CardFooterStyled>           
                <Image src={dislike} width="55" height="30" onClick={() => this.setReaction(this.props.post.id, 2)}></Image>
                <label>{this.props.post.dislike}</label>
                <Image src={like} width="55" height="30" onClick={() => this.setReaction(this.props.post.id, 1)}></Image>
                <label>{this.props.post.like}</label>                       
            </CardFooterStyled>              
        </>
        )
    }
}

export default CardPost;