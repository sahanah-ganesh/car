# Car

Car pool app

## Setup

### Config

- Create a `.env` file using `.env.template`

### iOS & anroid

- run `yarn`
- run `cd ios && pod install`
- in terminal #1 run `yarn start`
- in terminal #2 run `yarn ios`
- in terminal #2 run `yarn android`

## Technologies

- _[i18n](https://i18njs.com/)_ - Used for string localisation
- _[Styled Components](https://styled-components.com/docs/basics)_ - Strictly used for all non-animated styles
- _[GraphQL Code Generator](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo)_ - Use `yarn codegen` to generate typescript types for the API's schema and typed Apollo hooks for any operations in `src/graphql/operations/`

## Practices

- See the [file structure docs](docs/file-structure.md) for an explanation of how components are organised in this repository.
