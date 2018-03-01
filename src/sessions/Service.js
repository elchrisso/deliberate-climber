import gql from 'graphql-tag'

class sessionsService {
    addSession = gql`
        mutation (
            $date: DateTime!, 
            $type: String!, 
            $location: String!,
            $description: String!,
            $comments: String!,
            $seasonId: ID!,
            $authorId: ID!
            ) {
            createPracticeSession (
                date: $date,
                type: $type,
                location: $location,
                description: $description,
                comments: $comments,
                seasonId: $seasonId,
                authorId: $authorId
            ) {
                id
            }
        }
    `
}

export default new sessionsService()