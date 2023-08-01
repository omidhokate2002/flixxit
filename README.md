
# Flixxit - OTT Platform App

Flixxit is an OTT (Over The Top Platform) app that allows users to browse and watch their favorite movies and TV series. This app is built using React for the frontend and Node.js for the backend. The app is deployed on Vercel for easy and scalable hosting.


![Flixxit](https://i.postimg.cc/t4ZB8C1C/Flixxit.png)


## Features

- Home Page: Displays a curated list of featured movies and TV series.
- Movies Page: Browse through a collection of movies with details like title, release year, and genres.
- TV Series Page: Explore TV series with information about the title, release year, and seasons.
- Search: Users can search for specific movies and TV series based on keywords.
- About Page: Provides information about the app and its creators.
- Favorites: Registered users can add movies and TV series to their favorites list.
- Reviews: Registered users can provide reviews and ratings for movies and TV series.
- User Authentication: Signup and Login functionality for users to access personalized features.
- Change Password: Registered users can change their account passwords.

## Tech Stack

**Client:** React, Redux, Material UI, React Toastify

**Server:** Node, Express, Axios, Mongoose, Razor Pay

**Database:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/omidhokate2002/flixxit
```

Go to the project directory

**For Client**
```bash
  cd ./flixxit/client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

**For Server**
```bash
  cd ./flixxit/server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```

## Vercel Deployment

To deploy this project run

```bash
  vercel deploy
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

`PORT`

`TOKEN_SECRET`

`TMDB_BASE_URL`

`TMDB_KEY`

`RAZORPAY_SECRET_KEY`
## License

[MIT](https://choosealicense.com/licenses/mit/)



## Authors

- [@omidhokate2002](https://github.com/omidhokate2002)

  
## Contributors
- Vishnu Divakaran ([@vishnumd91](https://github.com/vishnumd91)): Razorpay Integration
