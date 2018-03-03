import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { NavLink } from 'react-router-dom'

import seasonsService from './Service'
import SessionAdd from '../sessions/SessionAdd'
import SessionList from '../sessions/SessionList'

class SeasonDetails extends Component {
    
    render() {
        if (this.props.data.loading)
            return <h1>Loading Season Details</h1>
         
        return ( 
            <div>
                <h1>{this.props.data.Season.name}</h1>
                {this.props.data.Season.sessions.map((session) => {
                    const myDate = Date.parse(session.date)
                    return (
                        <p>{new Intl.DateTimeFormat('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: '2-digit' 
                        }).format(myDate)}, {session.type}</p>
                    )
                })}
                <SessionList/>
                <p/>
                <SessionAdd/>
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
