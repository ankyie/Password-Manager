
# Password Manager with Themes

This is a Password Manager made using React + MongoDB and majorly styled using Tailwind CSS.

It contains 3 Themes by default
- Light Theme (default)
- Dark Theme
- Cherry Theme

## Two seperate versions

#### I have made 2 versions of it:
- One uses local storage to store passwords.
    - (Works inside 1 browser only)
- Other uses MongoDB database to store passwords.
    - (Works throughout every popular browser in a single device)
# Run Locally

## Local Storage version

Open the Local Storage version in VS Code and run:

```powershell
  npm install
  npm run dev
```
Then Open "http://localhost:5173/" (default) in any browser of your choice

Note: Choose the browser where you want to store the passwords.

## MongoDB version

Open the MongoDB version in VS Code and run:

```powershell
  npm install
  npm run dev
```

Open the backend folder present inside the MongoDB version seperately in another instance of VS Code.

run:
```powershell
  nodemon .\index.js
```

Then Open "http://localhost:5173/" (default) in any browser of your choice

Note: This will only work on devices with MongoDB installed.
## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB

