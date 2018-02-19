import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

import seasonsService from './Service'

class SeasonsList extends Component {
    render() {
        let seasons = null
        if (this.props.data.loading) {
            return <h1>Loading Seasons</h1>
        }

        if (this.props.data.allSeasons) {
            seasons = this.props.data.allSeasons
        }

        return (
        <ListGroup>
            <ListGroupItemHeading>Seasons List</ListGroupItemHeading>
            <ListGroupItem>
            {seasons.map((season) => {
                return <li>{season.name}</li>
            })}
            </ListGroupItem>
        </ListGroup>
        )
    }
}

const withAllSeasonsQuery = graphql(seasonsService.allSeasons, {options: {fetchPolicy: 'network-only'}})(SeasonsList)

export default withAllSeasonsQuery