import { gql } from '@apollo/client'

const LOAD_POST = gql`
    query MyQuery {
        posts(where: {uid: {_eq: 14}}) {
            id
            title
            body
            creaetedAt
            user {
                name
            }
        }
    }
`;

export { LOAD_POST }