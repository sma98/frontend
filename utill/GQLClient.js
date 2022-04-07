import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const PRIMARY_GQL_ENDPOINT = process.env.NEXT_PUBLIC_PRIMARY_GQL_EPR;
const TOKEN = process.env.TOKEN;

const httpLink = createHttpLink({
    uri: PRIMARY_GQL_ENDPOINT,
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = TOKEN
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

export const createGQLClient = (endpoint) => {
    const EPR = endpoint ? endpoint : PRIMARY_GQL_ENDPOINT;
    return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};