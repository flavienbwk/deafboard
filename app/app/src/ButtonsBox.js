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
        this.state = {
            speaking: props.speaking,
            listening: props.listening,
            onAddAnswerMessage: props.onAddAnswerMessage
        }
    }

    addMessage = (message) => {
        this.state.onAddAnswerMessage(message)
    }

    addBtnMessage = (e) => {
        const message = e.target.innerHTML
        this.addMessage(message)
    }

    onEnterAddCustomMessage = (e) => {
        if (e.key === 'Enter') {
            this.addCustomMessage()
        }
    }

    addCustomMessage = () => {
        if (this.state.speaking === false) {
            const message = this.talkinput.value
            if (message.length) {
                this.addMessage(message)
            }
        }
    }

    render() {
        return (
            <Styles>
                <Container>
                    <Row className="padding-bottom">
                        <Col lg={{ span: 12 }} className="center">
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Hello</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Thank you</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Yes</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>No</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Have a nice day !</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Will you pay by card or cash ?</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Would you like a receipt ?</Button>
                            <Button className="answer_button" onClick={ this.addBtnMessage } disabled={ this.state.speaking }>Have you the loyalty card ?</Button>
                        </Col>
                        <Col lg={{ span: 9 }} className="center">
                            <input ref={ref => this.talkinput = ref} placeholder="Say something..." type="text" className="form-control" onKeyDown={this.onEnterAddCustomMessage} autoFocus/>
                        </Col>
                        <Col lg={{ span: 3 }} className="center">
                            <Button style={{ width: "100%" }} disabled={ this.state.speaking } onClick={this.addCustomMessage} >Talk</Button>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

}

export default ButtonsBox;