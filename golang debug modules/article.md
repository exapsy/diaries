# Debugging Golang Modules

Not gonna bore you with details. You most probably know why you're here, so let's head right into it.

## Manual shitty way

The **wrong** way to go with this, which you probably may have tried already as we all go desperate when we dont find another way, is by replacing the repository name of the module on each file that contains it

```go

// From this
import (
    "github.com/gorilla/mux"
)

// To this
import (
    "github.com/username/mux"
)

// on each file

```

This is obviously bad, you know it, I know it. If you don't, the reason is because

1. You have to do it on each file individually
2. It's not a standard way of doing things
3. It's kinda brute forcy since you have to do the same thing over and over again, which tends to **almost always** be a bad practice unless it's not
4. You have to revert the 1000 gazillion changes after you're done and mistakes always happen. You always have to bet that a mistake **will happen** if you're going to be a good software engineer.


## Golang's standard way

When you're working with `go mod`, it offers you a command to replace the module with another one

### Module is in **local directory**

```sh
go mod edit -replace github.com/gorilla/mux=../debugging_mux
```

You can see this command only edited the `go.mod` file

```go
// go.mod
replace github.com/gorilla/mux => ../debugging_mux
```

### Module is in **another remote repository**

```sh
go mod edit -replace github.com/gorilla/mux@v1.4.2=github.com/someoneelse/mux@v1.4.8
```

Same as before, this edited the `go.mod` in the following way

```go.mod
replace github.com/gorilla/mux v1.4.2 => github.com/someoneelse/mux v1.4.8
```

### Final step

**Run** 

```
go mod vendor
```

and you're done