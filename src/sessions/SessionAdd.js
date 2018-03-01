import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Form, FormGroup, Label, Input, Row, Button } from 'reactstrap'

import sessionService from './Service'

class SessionAdd extends Component {
    state = {
        type: '',
        description: ''
    }

    handleAddSession = (evt) => {
        alert("this is the handleAddSession function!")
    }

    render() { 
        return (
            <div>
                <Form onSubmit={this.handleAddSession}>
                    <FormGroup>
                        <Label for="session-name">Session Name</Label>
                        <Input id="session-name" type="text" onChange={(evt) => this.setState({ type: evt.target.value })}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Session Description</Label>
                        <Input id="description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value })}/>
                    </FormGroup>
                    <Button type="submit" id="add-food-button" color="success">Create Food</Button>
                </Form>
            </div>
        )
    }
}

const withAddSessionMutation = graphql(sessionService.addSession)(SessionAdd)

export default withAddSessionMutation