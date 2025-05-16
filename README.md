# playwright-cucumber example for https://www.saucedemo.com/ page, based on https://github.com/Tallyb/

A starter repo for writing E2E tests based on Cucumber(7) with Playwright using Typescript.

## The Why
[Read](https://tally-b.medium.com/e2e-testing-with-cucumber-and-playwright-9584d3ef3360) or [watch](https://www.youtube.com/watch?v=PUVFmhYJNJA&list=PLwwCtx3xQxlVMZzS4oi2TafVRngQ1wF_0&index=2). 

## Can we use XXX from playwright in the playwright-cucumber project? 

The playwright-cucumber project started when playwright was a browser automation library. It did not have a test runner, hence cucumber-js was used as the test runner and PW used for the automation.
Since then PW added their amazing PW test library which is a test runner. But, sadly, it overlaps the functionality provided by cucumber-js. Therefore you need to make the decision now of which runner you want to run: cucumber for BDD style tests or PW test for “normal” tests. 
Some of the features provided by PW test are also available in cucumber-js, such as parallel run and different configurations (profiles in cucumber-js terms), but may require a different configuration. 

## Usage

Create a repo based on this template and start writing your tests.

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run test <feature name>` or `npx cucumber-js <feature name>` run the single feature

## Browser selection

By default we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:

`BROWSER=firefox npm run test` or `BROWSER=firefox npx cucumber-js` runs all tests using Firefox

One Windows you need to write

```
set BROWSER=firefox
npm run test
```

## Working with Page Objects

I am not fond of the Page Object Model (POM) for testing. It feels like a leftover from Java world, and I do not think it fits the Javascript world. However, you can check [this PR](https://github.com/Tallyb/cucumber-playwright/pull/95/files) to see POM implementation. 

## Debugging Features

## In Visual Studio Code

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.