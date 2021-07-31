import styled from "styled-components";
import { Card, ListGroup } from 'react-bootstrap';

const CardStyled = styled(Card)`
    width: 600px;
    margin-left: 400px;
    margin-top: 15px;  
    margin-bottom: 15px;  

    ${Card} > .list-group {
        border-top: unset;
        border-bottom: unset; 
    }
`

const CardFooterStyled = styled(Card.Footer)`
    background-color: unset;
    border-top: none;
    
    ${Card.Footer} >  *{     
        float: right;   
        padding-left: 5px;
    }

    ${Card.Footer} > img:first-of-type{
        margin-top: 5px;
    }

    ${Card.Footer} > img:last-of-type{
        margin-top: -5px;
    }
`
const CardTitleStyled = styled(Card.Title)`
   ${Card.Title} span > small {
       float: right;
   }    
`
const ListGroupStyled = styled(ListGroup)`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: unset;

    ${ListGroup} > .list-group-item {
        border-right: unset;
        border-left: unset;
    }

    ${ListGroup} > .list-group-item:last-of-type{
        border-bottom: unset;       
    }
`

const ListGroupItemStyled = styled(ListGroup.Item)`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
   
    ${ListGroup.Item} > small {
       float: right;
    }  
`
export { CardStyled, CardFooterStyled, CardTitleStyled, ListGroupStyled, ListGroupItemStyled };