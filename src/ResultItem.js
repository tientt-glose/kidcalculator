import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody, CardTitle, CardText
} from 'reactstrap';
import './ResultItem.css'

class ResultItem extends Component {
    render() {
        return (
            <div className="ResultItem" onClick={this.props.onDelete}>
                <Card outline color="primary">
                    <CardHeader>{this.props.exp}</CardHeader>
                    <CardBody>
                        <CardTitle tag="h1">{this.props.res}</CardTitle>
                        <CardText className="text-muted">Click to delete.</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ResultItem;