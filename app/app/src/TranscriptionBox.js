import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Sentence from './Sentence';
import SpeechRecognition from 'react-speech-recognition'

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
`

export class TranscriptionBox extends Component {

    render() {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return <p>Please enable your microphone. Speech recognition disabled.</p>
        }
        return (
            <Styles>
                <Container>
                    <Row className="padding-bottom">
                        <Col lg={{ span: 12 }} className="center">
                            <b><p className="left">Client's speech</p></b>
                            <hr/>
                            {
                                (this.props.messages && this.props.messages.length)
                                ?
                                    this.props.messages.map((value, index) => {
                                        return <Sentence
                                            key={index}
                                            type={value.type}
                                            message={value.message}
                                            time={value.time}
                                        />
                                    })
                                :
                                    <></>
                            }
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

}

export default TranscriptionBox;