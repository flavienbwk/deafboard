import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Speech from 'react-speech';
import styled from 'styled-components';
import TranscriptionBox from './TranscriptionBox';
import ButtonsBox from './ButtonsBox';
import AnswersBox from './AnswersBox';
import Dictaphone from './Dictaphone';

const Styles = styled.div`
    .paddind-bottom {
        padding-bottom: 16px;
    }

    .center {
        width: fit-content;
        text-align: center;
        margin: 1em auto;
        display: table;
    }

    .borders-no-bottom {
        width: 100%;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        border-top: 1px solid gray;
    }

    .borders-no-top {
        width: 100%;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
    }

    .borders {
        width: 100%;
        border: 1px solid gray;
    }
`

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client_messages: [],
            answer_messages: [],
            speaking: false,
            listening: false,
            isClientTalking: false,
            playSound: false
        }
    }

    setSpeaking = (boolean) => {
        this.setState({
            speaking: boolean
        })
    }

    setListening = (boolean) => {
        this.setState({
            listening: boolean
        })
    }

    addClientMessage = (message) => {
        this.setState({
            client_messages: [{
                message: message,
                time: new Date()
            }].concat(this.state.client_messages)
        })
    }

    addAnswerMessage = (message) => {
        this.setState({
            answer_messages: [{
                type: "button",
                message: message,
                time: new Date()
            }].concat(this.state.answer_messages)
        });
        this.setState({playSound: true});
    }

    setClientTalking = (status) => {
        if (this.state.isClientTalking == status)
            return;
        this.setState({isClientTalking: status})
    }

    render() {
        return (
            <Styles>
                <Container fluid>
                    <Row className="paddind-bottom">
                        <Col lg={{ span: 8 }}>
                            <Row className="paddind-bottom">
                                <Col lg={{ span: 12 }} className="borders-no-bottom" style={{
                                    height: "40vh",
                                    overflowY: "scroll"
                                }}>
                                    <TranscriptionBox messages={this.state.client_messages} isClientTalking={this.state.isClientTalking} />
                                    <Dictaphone
                                        onAddClientMessage={this.addClientMessage}
                                        onClientTalking={this.setClientTalking}
                                    />
                                </Col>
                                <Col lg={{ span: 12 }} className="borders-no-top borders-no-bottom">
                                    <ButtonsBox
                                        speaking={this.state.speaking}
                                        listening={this.state.listening}
                                        onAddAnswerMessage={this.addAnswerMessage}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 4 }} className="borders" style={{
                            height: "90vh",
                            overflowY: "scroll"
                        }}>
                            <AnswersBox messages={this.state.answer_messages}/>
                            <div hidden>
                                <Speech
                                    text={this.state.answer_messages.length > 0 ? this.state.answer_messages[0].message : ""}
                                    textAsButton={true}
                                    lang="en-US"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

    componentDidMount() {
        document.title = "Home - DeafBoard";
    }

    componentDidUpdate() {
        if (this.state.playSound) {
            document.getElementsByClassName("rs-play")[0].click();
            this.setState({playSound: false});
        }
    }
}

export default Home;