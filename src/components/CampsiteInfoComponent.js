import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({comments}){
    if (comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comments => <li key={comments.id}> {comments.text}</li>)}
                {comments.map(comments => <li key={comments.id}> {comments.author}
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </li>)}
            </div>
        );
    }
    return <div/>;
}

function RenderCampsite({campsite}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name}/>
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function CampsiteInfo(props){
    if (props.campsite){
        return (
            <div className="containter">
                <div className="row">
                <RenderCampsite campsite={props.campsite}></RenderCampsite>
                <RenderComments comments={props.campsite.comments}></RenderComments>
                </div>
            </div>
        );
    }
    return <div/>;
}


export default CampsiteInfo;