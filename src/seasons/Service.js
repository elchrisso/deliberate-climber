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
}

export default new seasonsService()