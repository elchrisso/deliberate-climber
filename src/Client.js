import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cjdjjwkbl1xbo01657ko8d9n7'}),
  cache: new InMemoryCache()
});

export default client