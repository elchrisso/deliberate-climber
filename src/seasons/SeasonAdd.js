import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Button } from 'reactstrap'
import { graphql } from 'react-apollo'

import seasonsService from './Service'

class SeasonAdd extends Component {
    constructor() {
        super()
        this.state = {
            activity: '',
            description: '',
            startDate: '',
            numberOfWeeks: '',
            name: ''
        }
    }

    handleAddSeason = (evt) => {
        evt.preventDefault()
        this.props.mutate({
            variables: {
                activity: this.state.activity,
                description: this.state.description,
                startDate: this.state.startDate,
                numberOfWeeks: this.state.numberOfWeeks,
                name: this.state.name
            }
        }).then(() => {
            alert("Season Added!")
        }).catch((err) => {
            alert("season not added, what did you break?!? " + err)
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleAddSeason}>
                <FormGroup>
                    <Label for="season-name">Season Name</Label>
                    <Input id="season-name" type="text" onChange={(evt) => this.setState({ name: evt.target.value })}/>
                </FormGroup>
                <FormGroup>
                    <Label for="activity-name">Activity Name</Label>
                    <Input id="activity-name" type="text" onChange={(evt) => this.setState({ activity: evt.target.value })}/>
                </FormGroup>
                <Row>
                    <FormGroup>
                        <Label for="start-date">Start Date</Label>
                        <Input id="start-date" type="date" onChange={(evt) => this.setState({ startDate: evt.target.value })}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="number-of-weeks">Number Of Weeks</Label>
                        <Input id="number-of-weeks" type="number" onChange={(evt) => this.setState({ numberOfWeeks: parseInt(evt.target.value) })}/>
                    </FormGroup>
                </Row>
                <FormGroup>
                    <Label for="description">Season Description</Label>
                    <Input id="description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value })}/>
                </FormGroup>
                <Button type="submit" id="add-food-button" color="success">Create Food</Button>
                </Form>
            </div>
        )
    }
}

const SeasonAddWithQuery = graphql(seasonsService.addSeason)(SeasonAdd)

export default SeasonAddWithQuery