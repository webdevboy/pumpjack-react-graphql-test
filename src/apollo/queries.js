import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
  {
    allPeople {
      totalCount,
      people {
        id,
        name,
        birthYear,
        gender,
        homeworld {
          id,
          name
        },
        species {
          id,
          name,
        },
      }
    }
  }
`;