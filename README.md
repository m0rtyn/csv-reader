## Questions
- какая библиотека для стилей/компонентов?
  - tailwind
  - theme-ui
  - ???
- какие стили?
  - styled components
  - post-css
  - sass
- как будет устроено состояние приложения?
  - react context
  - redux / redux toolkit
- как обрабатывать асинхронные запросы?
  - rxjs
  - Promises chaining

## First release
- [x] Allow the user to select and upload multiple .csv files (the file example is shown above).
- [x] List all the uploaded files along with their filenames
- [x] Add a "Submit" button that collects users from the uploaded files
- [x] Submit button sends them to the API endpoint.

## Second release
- [] Count of users stored in the file each file.
- [] Add an option to remove any file from the list.
- [] Show the average age of all the users.
- [] Show a loading state while the API request is in progress.
- [] If the API call succeeds - show a success message and clear all uploaded files.
- [] If the API call fails - show an error message and let the user retry manually.

## Rest releases
- [] Add a Readme file with the instructions on how to set up and start your website.
- [] If the API call fails - retry 3 times automatically. If all the retries fail - show an error message and let the user retry manually.
- [] Add a separate tab that shows API calls logs - failed/succeeded, user count, timestamp
- [] Use any component UI library that you like