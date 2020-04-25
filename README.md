# Angular 9 Starter
This project starts you off with the latest stable version of Angular 9. Storybook has been setup and StoryShots has been configured.

- [Angular 9 Starter](#angular-9-starter)
  - [Testing Application](#testing-application)
    - [Running tests](#running-tests)
  - [Testing Isolated Components](#testing-isolated-components)
  - [Storybook](#storybook)
    - [Running Storybook](#running-storybook)
    - [Included Addons](#included-addons)
  - [Progressive Wep App (PWA)](#progressive-wep-app-pwa)
  - [Development server](#development-server)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)

## Testing Application
Even though Jest has been installed for the Storybook StoryShots snapshot testing. I've left the default testing framework Jasmine as the main testing tool. If you are new to testing you'll have more community support for the default Angular testing setup to help out.

### Running tests
`npm run test`

## Testing Isolated Components

## Storybook
[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation. Being able to build, render and debug your components in isolation can save you a lot of time.

### Running Storybook
`npm run storybook`

### Included Addons
| Addon | Description |
| ------------- |-------------:|
|[Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)| Knobs allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories|
|[Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)| Actions can be used to display data received by event handlers|
|[Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)| Viewport allows your stories to be displayed in different sizes and layouts|
|[StoryShots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core)|StoryShots adds automatic Jest Snapshot Testing|


## Progressive Wep App (PWA)
The starter has been configured to enable Service Workers when the application has been built for production. You can disable this behaviour in [`app.module.ts:17`](./src/app/app.module.ts).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).