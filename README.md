# Asset Management Application | Test Case
Mini SPA to fetch assets, infinite scroll, CRUD app...

## Live Demo
Visit the link: [Asset Management Application - https://asset-management.isari.me/](https://asset-management.isari.me/)

## Tech Stack

### Backend
- PHP v8.2
- Composer v2.6
- Laravel v10.x
- MySQL v8

### Frontend
- Frontend Bundler: [Vite](https://vitejs.dev/)
- Frontend Framework: [React 18](https://react.dev/)
- API by me
- UI: [new JoyUI v5.0.0-beta.10 by MUI](https://mui.com/joy-ui/getting-started/)
- Data Fetching Lib: [TanStack Query v4 (formerly React Query)](https://tanstack.com/query/v4/)
- Chart: [ChartJS](https://react-chartjs-2.js.org/)
- Time Format: [DayJS](https://day.js.org/)
- Form Lib: [Formik](https://day.js.org/)
- Form Validation: [Yup](https://day.js.org/)
- Custom Styling: [TSS - CSS in TS](https://www.tss-react.dev/)
- Linting Utility: [ESLint](https://eslint.org/)
- Code Formatter: [Prettier](https://prettier.io/)
- VCS: Git
- Deployment: [Vercel](https://vercel.com/)
- NodeJS version: 18.17.0
- Package Manager: Yarn v1.22


## FE Test in local environment With PRODUCTION API
CORS policy is configured on production API to test only FE of this project with the Vite's localhost configuration.
In other saying: Production API allows the requests from http://localhost:5173/

But you need to get `.env` variables from me to test.

- **Clone repo:**
```bash
git clone https://github.com/pribrahimsari/asset-management-app.git
```

- **Terminal: Open the web-client folder:**
```bash
cd web-client
```

- **Install dependencies:**
```bash
yarn install
```

- **Create `.env.local` file at root:**
    - You can copy or rename `.env.local.example` file already available


- **Get Your `env` variables from me and paste it to your `.env.local` file**
    - Final .env.local file should look like:
```.env.local
VITE_API_URL=<<API_URL>>
VITE_API_VERSION=<<API_VERSION>>
```

- **Run:**
```bash
yarn start
```

- **Visit the link on your favorite browser:** http://localhost:5173/
    - Note: Vite uses port `5173` port

## Fullstack Test in local:
Backend architecture was not in the scope of this task case.
Please meet the requirements for Backend Tech Stack written above on your local pc
Please follow the instructions on Laravel 10.x documentation pages for the commands: `composer install` and `php artisan serve`


## Project Requirements
1. Asset Addition:

- [x] ~~Create an interface that allows users to add new assets.~~
- [x] ~~Include fields for attributes such as name, description, type, and addition date.~~
- [x] ~~Use an "Add" button to add assets.~~

2. Asset Viewing:
- [x] ~~Display the added assets as a list.~~
- [x] ~~Each asset should include attributes like name, description, type, addition date, and "View" or "Delete" buttons.~~
- [x] ~~A home screen to list the first 20 assets and when the user scrolls down to the end of the list it loads automatically the next 20 assets.~~

3. Asset Deletion:
- [x] ~~Implement functionality that allows users to remove assets from the list.~~
- [x] ~~Deleted assets should be removed from the list.~~

4. Asset List Status:
- [x] ~~Show users the total number of assets and the count of each asset type.~~

5. Data Management:
- [x] ~~Use an appropriate data management strategy to store assets.~~
- [x] ~~Ensure that assets are saved and can be retrieved when the application is reloaded. Consider options like local storage, browser storage, or a database.~~

6. User-Friendly Interface:
- [x] ~~Create a clean, well-organized user interface to enhance the user experience.~~
- [x] ~~Style your application using CSS or a CSS framework, such as Bootstrap.~~

7. Optional Advanced Features:
- [x] ~~Enable assets to be sorted by type, addition date, or priority.~~
- [ ] Allow users to add tags or notes to assets for customization.
- [ ] Write tests to ensure the functionality of the application.