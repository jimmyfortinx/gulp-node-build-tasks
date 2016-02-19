# gulp-node-build-tasks
This module will add standard gulp tasks to start building a node server.

## Minimum npm version
The minimum npm version required is 3 because they started supporting the flat dependencies structure.

## Gulp Tasks
| Main tasks                | Description |
|---                        |---          |
| **build**                 | Generate a dist folder with all the project built |
| **serve**                 | Run the project and watch files modifications |
| **serve:dist**            | Generate a dist folder, run the project and watch files modifications |
| **serve:e2e**             | Run the project and launch e2e tests |
| **serve:e2e-dist**        | Generate a dist folder, run the project, watch files modifications, launch e2e tests |
| **start**                 | [alias **serve**] Used by **Visual Studio Code** |
| **test**                  | Run unit tests once |
| **test:auto**             | Run unit tests on each files modifications |

## File structure
| Path                                           | Description |
|---                                             |---          |
| /src/\*\*/*.{supported file formats}       | Application related code    |
| /src/\*\*/*.spec.js                        | [Optional] Application related unit tests |
| /.jscsrc                                   | [Optional] This is the only place where .jscsrc is supported for now |
| /.jshintrc                                 | [Optional] This is the only place where .jshintrc is supported for now |


## Supported programming languages
Some languages are currently supported on this project and other will be supported
later. They can be used under the **/src/app** and **/src/components** folders.

- **Javascript**: .js

### Coming soon

- **Typescript**: .ts

## Unit Tests
[Jasmine 2.3](http://jasmine.github.io/2.3/introduction.html) is used as framework
and [Karma](https://github.com/karma-runner/karma) is used to run tests in different browsers.