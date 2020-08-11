# How to structure your project

## Disclaimer

Who is this for? People who structure medium to big sized projects. If you're doing a school project, or just a hobby project, this is probably not for you unless you're just educating yourself.

As famously **Donald Knuth** had said

> The root of all evil, is premature optimization

You don't wanna spend more time optimizing your application, than actually start making it work. So, if your `LOC (lines of code) / Hours Spent Optimizing` ratio is pretty low, dont bother. This article is not forwarded to 1000 LOC hobby projects.

## Ok what now

I've spent countless hours trying to decide on an architecture blueprint to use on my future projects. My goal was to have a structure, which in the future would allow for **extensibility**, **flexibility** and **scalability**.

Yeah yeah, fancy cliché buzzwords, what do they mean in reality.

## Extensibility

**Plugins**. That's what I'm thinking when I think of the word "extensibility".

Obviously, I don't mean to structure your whole application around external plugins. I mean it in a more abstract way.

What is a plugin? It's something that you plug-in in your app's codebase, and it just works! I know, I'm amazing with words, right? You simply dont have to structure your codebase around your code or vica versa.

You want that plugin out? Good. You just delete the code.

By the time you start spaghettifying your code, it just starts being less extensible. Everything starts to relate with everything, so removing one piece of code feels like a jenga block being pulled out. No spaghetti no regretti.

![Jenga block](https://www.wilko.com/assets/bWFzdGVyfHJvb3R8NzQwNzF8aW1hZ2UvanBlZ3xoMzcvaGRhLzkwNTY5NDE0NDEwNTQuanBnfDllZWRlNmJjNjBhZDQ1YmYzZGM4NzgxZTI0YjNjNDAzZTEzODhmNjAzZDEwN2QwOWUwODNiZDkzNTlhOGFiMTc=/0497753-3.jpg)

We dont want that. We want simple code structures which shouldn't interfeer with the rest of the code base or vica versa.

## Flexibility

Your boss comes tomorrow, and tells you that your app about gooses, shouldn't be about gooses anymore. But about every animal.
And, that you should gather analytics. And that your goose analytics should interact with the company's ERP system. And that we should support HTTP and have a CLI communication with our backend for our sysadmins. Oh, also, we're changing from MongoDB to Mysql :D Happy holidays.

Can you do everything without having to restructure your whole application from scratch? Are you able to withstand these big but very trivial on first sight changes? Is this a 2 week task or a 1 year task? How much of your own time and money will you waste to complete that task?

That's what flexibility is about. Being able to support new features that the application just predicted they could potentially co-exist with your current ones.

Always, try to predict the most possible changes in your application and make an architecture that can provide future support without having to remake the whole project from scratch. It's easy, and possible.

## Scalability

Well, I'm not going to be incredibly verbose. Scalability is just how much big your code base can get, with your current architecture.

## Ok, what's the plan?

![What's the plan?](https://media1.tenor.com/images/ec49dfd142fb92f6609d907ff308dac8/tenor.gif?itemid=8816023)

Well, for first, we gotta make some divisions. Our goal is to divide and conquer. So, what is there to divide? 

A very nice way to divide things in Software Engineering, is by reverse engineering. Which means, you gotta realize all the possible levels of abstractions.

- Drivers such as a database driver, Frameworks and very technical external factors
- Repositories: communication channel for 