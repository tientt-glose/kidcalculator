import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormDu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termA: '',
            termB: ''
        }
        this.handleTermA = this.handleTermA.bind(this);
        this.handleTermB = this.handleTermB.bind(this);
        this.handleDiv = this.handleDiv.bind(this);
    }

    handleTermA(event) {
        this.setState({ termA: event.target.value });
    }

    handleTermB(event) {
        this.setState({ termB: event.target.value });
    }

    handleDiv(event) {
        if (this.state.termA === '' || this.state.termB === '') {
            alert('Please type a number!');
        }
        if (this.state.termB === '0') {
            alert('ERROR!');
        }
        else {
            this.props.doDiv(this.state);
            this.setState({
                termA: '',
                termB: ''
            })
        }
        // console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="text-center">
                <Form>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Input type="number" name="number" value={this.state.termA} placeholder="Type a number!" onChange={this.handleTermA} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <Button type="submit" color="primary" onClick={this.handleDiv}>'/'</Button>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Input type="number" name="number" value={this.state.termB} placeholder="Type a number!" onChange={this.handleTermB} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default FormDu;
