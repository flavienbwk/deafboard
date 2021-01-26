import React, { Component } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
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
        float: left;
        margin: 0;
        display: block;
    }

    .timestamp {
        font-family: monospace;
    }

    .border-left {
        border-left: 1px solid gray;
    }
`

export class Sentence extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            time_ago: this.getTimeAgo(props.time),
            message_color: this.getMessageColor(props.time),
        }
    }

    epochs = [
        ['year', 31536000],
        ['month', 2592000],
        ['day', 86400],
        ['hour', 3600],
        ['minute', 60],
        ['second', 1]
    ];

    colors = [
        [30, "black"],
        [60, "gray"],
        [90, "#e0e0e0"]
    ]

    getDuration = (timeAgoInSeconds) => {
        if (timeAgoInSeconds === 0)
            return {
                interval: 0,
                epoch: "second"
            };
        for (let [name, seconds] of this.epochs) {
            const interval = Math.floor(timeAgoInSeconds / seconds);
            if (interval >= 1) {
                return {
                    interval: interval,
                    epoch: name
                };
            }
        }
    };

    getTimeAgo = (date) => {
        const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
        const {interval, epoch} = this.getDuration(timeAgoInSeconds);
        const suffix = interval === 1 ? '' : 's';
        return `${interval} ${epoch}${suffix} ago`;
    };

    getMessageColor(date) {
        const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
        for (let color of this.colors)
            if (timeAgoInSeconds <= color[0])
                return color[1]
        return "whitesmoke"
    }

    renderType()
    {
        if (this.props.type === "button") {
            return <Badge className="badge badge-info">Button answer</Badge>
        } else if (this.props.type === "sign") {
            return <Badge className="badge badge-danger">Sign answer</Badge>
        } else {
            return <></>
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const timeAgoInSeconds = Math.floor((new Date() - new Date(this.props.time)) / 1000);
            const time_ago = this.getTimeAgo(this.props.time)
            const message_color = this.getMessageColor(this.props.time)
            this.setState({
                time_ago: time_ago,
                message_color: message_color,
                render: (timeAgoInSeconds > 120) ? false : true
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.render === false) return null;
        return (
            <Styles>
                <Container>
                    <Row className="padding-bottom">
                        <Col lg={{ span: 3 }} className="timestamp">
                            <p>{ this.state.time_ago }</p>
                        </Col>
                        <Col lg={{ span: 9 }} className="left border-left">
                            { this.renderType() }
                            <p style={{ color: this.state.message_color }}>{ this.props.message }</p>
                        </Col>
                    </Row>
                </Container>
            </Styles>
        )
    }

}

export default Sentence;