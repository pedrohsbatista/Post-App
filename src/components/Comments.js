import React from 'react';
import { ListGroupItemStyled } from '../StyleComponent';
import moment from 'moment';

class Comments extends React.Component{
    render(){
        return(
            <>
             {this.props.comentarios.map(element => (  
                <ListGroupItemStyled key={element.id}><p>{element.texto}</p><small>{moment(element.data, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('DD/MM/YYYY HH:mm')}</small></ListGroupItemStyled>            
             ))}  
            </>
        )
    }
}

export default Comments;