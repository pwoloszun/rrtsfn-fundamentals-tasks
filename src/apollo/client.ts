import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: `http://localhost:6100`,
  cache: new InMemoryCache()
});
