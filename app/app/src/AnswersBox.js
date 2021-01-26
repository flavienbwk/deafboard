import React, { Component } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import styled from 'styled-components'
import Sentence from './Sentence';
import Webcam from "react-webcam";

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

    .right {
        width: fit-content;
        float: right;
        margin: 0;
        display: block;
    }
`

export class AnswersBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            webcamWorks: false
        }
    }

    onWebcamWorks = () => {
        this.setState({
            webcamWorks: true
        })
    }

    onWebcamNotWorks = () => {
        this.setState({
            webcamWorks: false
        })
    }

    render() {
        return (
            <Styles>
                <Container>
                    <Row className="padding-bottom">
                        <Col lg={{ span: 12 }} className="center">
                            <b><p className="right">My speech</p></b>
                            <br/>
                            <hr/>
                            <Webcam audio={false} onUserMedia={this.onWebcamWorks} onUserMediaError={this.onWebcamNotWorks} style={{ 
                                width: "100%",
                                display: (this.state.webcamWorks) ? "inherit" : "none"
                            }}/>
                            {
                                (this.state.webcamWorks === false)
                                ? <Alert className="alert alert-warning">No webcam was detected, can't use sign recognition.</Alert> : <></>
                            }
                            <br/>
                            <div>
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

}

export default AnswersBox;