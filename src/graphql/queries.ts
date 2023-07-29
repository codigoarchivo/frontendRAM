import { gql } from "@apollo/client";

export const listTrickandmorty = gql`
    query Characters($page: Int, $species: String!) {
      characters(filter: {species: $species}, page: $page) {
          info {
              count
              pages
              next
              prev
          }
          results {
              id
              name
              status
              species
              type
              gender
              image
              created
          }
      }
    }
`;
