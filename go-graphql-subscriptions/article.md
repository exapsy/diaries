# Golang, GraphQL subscriptions & websockets

NodeJS has already all the tools to use GraphQL and web development at its full power like Apollo server. Golang though, as a language whos ecosystem still matures and grows, doesn't has all the tools yet to make the GraphQL experience really smooth. But the community does a great job to keep up and is always improving something, even though as a developer who really wants to use these stuff ASAP I feel like it could be faster.

## How the subscriptions work

When a subscription query is used in GraphQL client, it has to connect to `/subscriptions` with the assumption that it supports `graphql-ws` protocol.

![Diagram of subscription flow](https://i.imgur.com/97kmidh.png)

The graphql-ws protocol requires

1. Connection init

```js
// ws://localhost/subscriptions

{type: "connection_init", payload: {}}
```

2. Start - Query description and relative subscription details

```js
// ws://localhost/subscriptions
{
  id: "1",
  type: "start",
  payload: {
    variables: {},
    extensions: {},
    operationName: null,
    query:  "subscription {↵  collectionAdded {↵ fullname↵ } ↵}↵"
  }
}
```

3. Acknowledgement - Everything went smoothly

```js
// ws://localhost/subscriptions

{id: "", type: "connection_ack", payload: null}
```

## Don't use GraphiQL for subscriptions, use Playground

Unless you're sure that your version/implementation of GraphiQL supports subscriptions that is.

That was my first bamboozle. I thought GraphiQL was supposed to support subscriptions in graphql-go, so I thought there was something wrong in my Golang GraphQL setup and I spend like 4 hours trying to fix this and searching in the wrong places.

**How to check if your version supports subscriptions?**

- Have a subscription query

  ```graphql
  subscription {
    userAdded {
      fullname
    }
  }
  ```

- Run it
- Your browser's **network inspector** should have an outgoing websocket connection to `<host:port>/subscriptions`
