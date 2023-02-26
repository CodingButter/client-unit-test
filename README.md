# Client Side Unit Test

This library provides a clear pathway for unit testing a client side project.

A unit testing system such as this is great for making sure functionality is working as expected and that any new functionalities do not negatively impact prior ones

As my needs increase withing the scope of unit testing my own projects this small library may grow and become more customizable and effitiant.

## Installation

Because this is just a client side implementation of a unit testing system it can be included in the same ways as other client side scripts

### Normal Script Include

`<script language="text/javascript" src="./client-unit-test/Test.js"/>`

### Import Statement

`import Test from "./client-unit-test/Test.js"`

## Usage

### Creating a Unit Test

To create a new unit test we must include the library and create a new instance of the Test class.

The constructor takes the Suite and subsuite the test is a part of, as well as the name of the test and the test functions to run.

```js

import Test from "./client-unit-test/Test.js

const suite = "CPU"
const subSuite = "LDA"
new Test(suite,subSuite,"One is One",function(){
    this.EXPECT_TRUE(1===1);
});

Test.run()
```

In this example we are setting the Suite of the test to a Suite called CPU and a Subsuite of "LDA", Then giving it a descriptive name of One is One. this will give us an idea of what the expectations will be within the test itself.
Also we are passing in the test function we want to run.

NOTE: The function is a normal function block and not an arrow function. This allows us to pass the correct "this" context to the function durring execution.
