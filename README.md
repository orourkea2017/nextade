# Nextade

Get started in Next.js, with Typescript, using Redux with Saga for async/side effecting. Jest is for testing, with Enzyme for DOM tests.

## Project Structure

Next.js uses convention based routing, with each file in the `pages` directory corresponding to a route. Each page uses reusable React components defined in `src/components`.

State is managed by Redux/Saga. New reducers, sagas and actions can be defined by creating the relevant file in the respective directory in `src/store`.

Styling is defined as SCSS in `src/styles`. Ultimately `main.scss` acts as the stylesheet for the application. Styling specific to individual pages or components should be under the relevant subdirectory.

## Run it

### Development

To run in dev mode with hot-reloading and linting, run `yarn dev`.

### Testing

To execute the Jest test suite, run `yarn test`. Tests are defined in `test` under the same subdirectory structure as the corresponding source code.

### Production

To run in a production environment, build using `yarn build`, and start with `yarn start`.