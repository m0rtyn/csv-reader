[![Total time via Wakatime](https://wakatime.com/badge/user/4d609996-b80c-43ee-91da-7bc046ee4216/project/289a6e96-84ba-446b-b564-380afef7070d.svg)](https://wakatime.com/badge/user/4d609996-b80c-43ee-91da-7bc046ee4216/project/289a6e96-84ba-446b-b564-380afef7070d)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5f0f3625-186a-4431-86bb-d8bdc8948e48/deploy-status)](https://app.netlify.com/sites/martyn-vilantis/deploys)

# Test project for Vilantis

## Usage

Just visit https://martyn-vilantis.netlify.app or run localy by
```bash
yarn && yarn start
```

<!-- TODO: add screenshot -->

## Tech stack

- React
- Redux Toolkit
- TypeScript
- eslint, prettier, husky, standard-version

## To be done

### First release
- [x] Allow the user to select and upload multiple .csv files (the file example is shown above).
- [x] List all the uploaded files along with their filenames
- [x] Add a "Submit" button that collects users from the uploaded files
- [x] Submit button sends them to the API endpoint.

### Second release
- [x] Add a Readme file with the instructions on how to set up and start your website.
- [x] Add an option to remove any file from the list.
- [x] Count of users stored in the each file.
- [x] Show the average age of all the users.

### Third release
- [x] Show a loading state while the API request is in progress.
- [x] If the API call succeeds - show a success message and clear all uploaded files.
- [x] If the API call fails - show an error message and let the user retry manually.

### Rest releases
- [ ] Use any component UI library that you like
- [ ] If the API call fails - retry 3 times automatically. If all the retries fail - show an error message and let the user retry manually.
- [ ] Add a separate tab that shows API calls logs - failed/succeeded, user count, timestamp

<!--
## Questions
TODO: ask this questions
- какая библиотека для стилей/компонентов?
  - tailwind
  - theme-ui
  - ???
- какие стили?
  - styled components
  - post-css
  - sass
- как обрабатывать асинхронные запросы?
  - rxjs
  - Promises chaining 
-->
