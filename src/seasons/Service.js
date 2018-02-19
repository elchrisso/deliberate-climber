import gql from 'graphql-tag'

class seasonsService {
    allSeasons = gql`
        query {
            allSeasons{
                name
                id
            }
        }
    `

    addSeason = gql`
        mutation ($name: String!, $activity: String!, $description: String!, $startDate: DateTime!, $numberOfWeeks: Int!) {
            createSeason (
                name: $name,
                activity: $activity, 
                description: $description,
                startDate: $startDate,
                numberOfWeeks: $numberOfWeeks
            ) {
                id
            }
        }
    `
}

export default new seasonsService()