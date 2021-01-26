import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import TranscriptionBox from './TranscriptionBox';
import ButtonsBox from './ButtonsBox';
import AnswersBox from './AnswersBox';

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
            answer_messages: []
        }
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
                                    <TranscriptionBox messages={this.state.client_messages}/>
                                </Col>
                                <Col lg={{ span: 12 }} className="borders-no-top borders-no-bottom">
                                    <ButtonsBox />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 4 }} className="borders">
                            <AnswersBox messages={this.state.answer_messages} />
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

    componentDidMount() {
        document.title = "Home - DeafBoard";
    }

}

export default Home;