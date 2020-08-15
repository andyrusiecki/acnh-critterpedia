# ACNH Critterpedia

A quick React web app for tracking critter donations and availability in Animal Crossing: New Horizons. All the animals in the game have pre-determined availability, which makes filtering based on the current time easy.

This web app allows a user to track which critters have been donated by marking each one as it's caught. Each section is able to be filtered by the current time and which critters have been donated already. The main page shows a combined list of which critters are yet to be caught for the current hour, as well as the changes to the current available critters for the next time window and the next month.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built out quickly as a prototype using [Redux](https://redux.js.org/). It's missing many necessary features if I were to deploy it outside of Github pages.

## Current Limitations

Due to it's deployment using Github pages, user data cannot be stored outside of the user's immediate browser. All critter donation data is stored in local storage.

## TODO

- [ ] mixins, variables for button styles
- [ ] remeove dependency on react bootstrap for dropdowns
- [ ] update UI for Todo list view
- [ ] remove create-react-app
- [ ] critter view page
- [ ] error reporting
- [ ] google analytics support
- [ ] settings page
  - donated json import/export
  - donated clear all/set all
  - northern/southern hemisphere selection
- [ ] southern hemisphere times


_Note: The rest of this README is boilerplate from "Create React App"_

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
