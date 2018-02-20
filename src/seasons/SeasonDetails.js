import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'

import seasonsService from './Service'

class SeasonDetails extends Component {
    
    render() {
        if (this.props.data.loading)
            return <h1>Loading Season Details</h1>
         
        return ( 
            <div>
                <h1>{this.props.data.Season.name}</h1>
                {this.props.data.Season.sessions.map((session) => {
                    return (
                        <p>{session.date}, {session.type}</p>
                    )
                })}
            </div>
         )
    }
}

const withSeasonById = graphql(seasonsService.seasonById, {
    options: (ownProps) => ({
        variables: { id: ownProps.match.params.id },
        fetchPolicy: 'network-only'
    })
})(SeasonDetails)

export default withSeasonById
