"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // Cache static data for 4 minutes
          amenities: {
            merge: false,
          },
          levelsOfCare: {
            merge: false,
          },
          conditions: {
            merge: false,
          },
          treatments: {
            merge: false,
          },
          insuranceProviders: {
            merge: false,
          },
          clienteles: {
            merge: false,
          },
          settings: {
            merge: false,
          },
          approaches: {
            merge: false,
          },
          priceRanges: {
            merge: false,
          },
          countries: {
            merge: false,
          },
          states: {
            merge: false,
          },
          // Cache rehabs based on filter arguments
          rehabs: {
            keyArgs: ["filter"],
            merge: false,
          },
        },
      },
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    },
    watchQuery: {
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    },
  },
  connectToDevTools: true,
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
