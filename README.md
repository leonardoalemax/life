# Game of Life

This is my implementation in react using react hooks of [John Conway's game of life](https://pt.wikipedia.org/wiki/John_Conway).

Each step runs a set of 3 simple rules:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

[![life](/life.gif "life")]

## To Run It

Clone project, install the dependencies and run it.

```bash
$ yarn install
$ yarn start

```
