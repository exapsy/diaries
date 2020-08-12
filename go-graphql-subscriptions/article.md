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

## Wait, how the dynamic between server GraphQL and client works again?

The confussion is that GraphQL isn't "supposed" to create a websocket connection for you. The implementation is up to you or another library to solve it, to allow as much freedom on the infastructure as possible.

So, **either you implement the websocket handling, or use another library to do the heavy work for you**.

GraphQL server just says that

> Hey,
>
> I have this subscription type "**userAdded**"
>
> I wont handle it, server custom websocket handler will, but you can subscribe to `/subscriptions` as that's the standard for graphql subscriptions

**So basically GraphQL only offers the type of the subscription and the fact that the subscription exists.** The rest is up to the websocket implementation to handle.

```go
// Library for GraphQL websocket subscription handling
import "github.com/functionalfoundry/graphqlws"

var graphqlWSHandler = graphqlws.NewHandler(graphqlws.HandlerConfig{
  SubscriptionManager: SubscriptionManager,
})

http.Handle("/subscriptions", graphqlWSHandler)
```

As stated, the assumption is that the websocket connection uses **"graphql-ws" protocol**, or else, graphql wont be able to understand the connection at all. Its like trying to write `JavaScript` on a `C++` compiler. The protocol must be precisly followed on the custom implementation.

So that's where you could use this library `github.com/functionalfoundry/graphqlws` to avoid writing your own custom websocket graphql subscription handler.
Here's a great read if you wanna use this library.

[Medium - Functional-Foundry - Building Graphql servers with subscriptions in go](https://medium.com/functional-foundry/building-graphql-servers-with-subscriptions-in-go-2a60f11dc9f5)
