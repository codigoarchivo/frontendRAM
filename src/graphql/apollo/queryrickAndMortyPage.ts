import { initializeApollo } from "@/apollo";
import { listTrickandmorty } from "../queries";

export const queryrickAndMortyPage = async (page: number, species: string) => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query({
      query: listTrickandmorty,
      variables: {
        page,
        species,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};
