
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run">Run</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#comments">Some comments</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This simple program calculates the final position of a Mower in a green grass plateau using the input provided.

Here is an example with 2 mowers:
- 1st Mower starts in cell 1,2 direction North
- 2nd Mower starts in cell 3,3 direction East

![Mowers challenge](/screenshots/example.png?raw=true "Mowers challenge")

This is the corresponding input file:
![Mowers challenge](/screenshots/case_001.png?raw=true "Mowers challenge")
- Input: consists of 2 blocks
  - plateau size: first line of file (5 x 5 in the sample)
  - mower data: 2 lines per mower containing (2 mowers in the sample)
    - initial position: based on
      - initial X position (1 and 3 in the sample)
      - initial Y position (2 and 3 in the sample)
      - direction: can be one of the compass points (N and E in the sample)
    - commands: a char sequence of single commands:
      - L: turn left
      - R: turn right
      - M: move forward

- Output: the final position and direction of each mower. In our sample, we have
  - 1st mower stopped in position 1,3 and direction N
  - 2nd mower stopped in position 5,1 and direction E


### Built With

* [Node JS](https://nodejs.org/) as the core engine
* [NPM](https://www.npmjs.com/) as the package manager
* [Jest](https://jestjs.io/) as the test handler
* [Typescript](https://www.typescriptlang.org/) adding static type definitions


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have a node engine installed in your system (see [how to install](https://nodejs.org/en/download/))


### Installation

1. Clone the repo
  ```sh
  git clone https://github.com/dtodo1paco/mowers-challenge.git
  ```
2. Change to the new created directory
  ```
  cd mowers-challenge
  ```
3. Install NPM packages
  ```sh
  npm install
  ```

### Run
To run the program directly, just type
```sh
  npm start
```
it will run the program using the default input case `/inputs/case_001.txt` (the example shown above)

<!-- USAGE EXAMPLES -->
## Usage

You can provide any input file as an argument, just add an extra argument
```sh
  npm start -- ../inputs/case_002.txt
```
*NOTE: Make sure you respect the syntax of the input files*

_For more examples, please contact the owner of the repository_

<!-- Testing EXAMPLES -->
## Testing
You can run all the tests by typing
```sh
  npm test
```
![3 suites, 16 tests passed](/screenshots/test.png?raw=true "Test results")

You can also run them in verbose mode to get a more detailed output
```sh
  npm test:verbose
```
And get a coverage report by 
```sh
  npm test:coverage
```

<!-- extra comments -->
## Comments
I'd like to add some comments regarding some interesting topics:
- Simplicity
The solution is easy to understand. It keeps the process simple trying to minimize the number of iterations and complexity in each part of the process.
- Readability of the overall code
As always, I've tried my best to do clean code, keeping files small, short functions and so on. I've also took care of variable names trying to improve readability.
All code entities are separated in their own folder with the same structure (`index.ts` for the main code, `types.ts` for types if needed), so it keeps files small and focused.
- Encapsulation and decoupling
As you can see, I've made an abstract `MowerInputDataReader` and an Adapter for File inputs `MowerInputDataReaderFileAdapter`. It makes easier to create a new Adapter (let's say, `GraphQLAdapter` or `RESTAdapter`) to read the input from a different source. As long as it extends the abstract `MowerInputDataReader`, everything shoud work like a charm :)
- Software architecture:
Besides the Adapter pattern used in the DataReader the system is quite simple from the architectural point of view.
- Separation of responsibilities: 
There are several units of code with separated responsabilities. Using this approach, you can see:
  - `Mower` is responsible of keeping data and do the required changes in it based on rotation or movements.
  - `MowerHandler` is the responsible of translating commands to moves and handle the overall command line

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Paco Alías - [@dtodo1paco](https://dtodo1paco.github.io/)
