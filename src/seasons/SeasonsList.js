import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { ListGroup, ListGroupItem, ListGroupItemHeading, Badge } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
            {seasons.map((season) => {
                return (
                    <ListGroupItem className="justify-content-between">
                        <NavLink className="nav-link" to={`/seasons/details/${season.id}`}>{season.name}</NavLink>
                    </ListGroupItem>
                )
            })}
        </ListGroup>
        )
    }
}

const withAllSeasonsQuery = graphql(seasonsService.allSeasons, {options: {fetchPolicy: 'network-only'}})(SeasonsList)

export default withAllSeasonsQuery