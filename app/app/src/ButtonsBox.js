import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .padding-bottom {
        padding-bottom: 16px;
    }

    .center {
        width: fit-content;
        text-align: center;
        margin: 1em auto;
        display: table;
    }

    .left {
        width: fit-content;
        text-align: left;
        margin: 0;
        display: block;
    }

    .answer_button {
        width: 128px;
        height: 128px;
        margin: 16px;
    }
`

export class ButtonsBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Styles>
                <Container>
                    <Row className="padding-bottom">
                        <Col lg={{ span: 12 }} className="center">
                            <Button className="answer_button">Hello</Button>
                            <Button className="answer_button">Thank you</Button>
                            <Button className="answer_button">Yes</Button>
                            <Button className="answer_button">No</Button>
                            <Button className="answer_button">Have a nice day !</Button>
                            <Button className="answer_button">Will you pay by card or cash ?</Button>
                            <Button className="answer_button">Would you like a receipt ?</Button>
                            <Button className="answer_button">Have you the loyalty card ?</Button>
                        </Col>
                        <Col lg={{ span: 9 }} className="center">
                            <input placeholder="Say something..." type="text" className="form-control"/>
                        </Col>
                        <Col lg={{ span: 3 }} className="center">
                            <Button style={{ width: "100%" }}>Talk</Button>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

}

export default ButtonsBox;