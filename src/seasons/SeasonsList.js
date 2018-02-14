import React, { Component } from 'react'
import { graphql } from 'react-apollo'

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
        <div>
            <h1>Seasons List</h1>
            <ul>
            {seasons.map((season) => {
                return <li>{season.name}</li>
            })}
            </ul>
        </div>
        )
    }
}

const withAllSeasonsQuery = graphql(seasonsService.allSeasons, {options: {fetchPolicy: 'network-only'}})(SeasonsList)

export default withAllSeasonsQuery