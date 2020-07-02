# The Brewery Problem

## Instructions to run and test

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

## Notes

### Architectural decisions

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Therefore, the structure is based on the creation of components in different parts of the app.

- For simplicity, this application is a single page application. So, there is just one page (App.js) that contains the list of beers. To see the detail of a listed beer, you can click on "See details", which will show the complete list of details on the same page.

- There is just one API call to retrieve the complete list of beers, this let us filter the list after processing the input file. This way, there is always some information showing to the user.

- There is an input field where the user can select the input file to be processed. Also, a reset button in case that the user would like to process different files.

- It was used [Styled Components](https://styled-components.com/) for easy implementation of React component styles.

### Known issues
- In case that the end-point retrieves a large amount of beer, the filtering of the beers after processing the input file could impact the performance of the application.

### Future implementation/improvements
- Add routing of the main pages (list and details).
- Animations and more style details.
- Unit test for every component.


