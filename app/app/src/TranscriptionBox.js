import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Sentence from './Sentence';

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

    constructor(props) {
        super(props);
        this.state = {
            messages: props.messages
        }
    }

    render() {
        return (
            <Styles>
                <Container>
                    <Row className="padding-bottom">
                        <Col lg={{ span: 12 }} className="center">
                            <b><p className="left">Client's speech</p></b>
                            <hr/>
                            {
                                (this.state.messages && this.state.messages.length)
                                ?
                                    this.state.messages.map((value, _) => {
                                        return <Sentence
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