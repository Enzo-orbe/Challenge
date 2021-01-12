# Challenge 🚀🚀

### First steps 🧐:

- Download the repo **git clone https://github.com/Enzo-orbe/Challenge.git**.
- In the project directory /api, you can run: _npm install_
- Create the MongoDB database and connect, you can follow [tutorial.](https://www.youtube.com/watch?v=97FfXEy1zas&t=39s "tutorial.")
- Create a file named .env, in the project directory, that contains the following:

  > DB_MONGO=mongodb+srv://<user>:<password>@cluster0.5mbnf.mongodb.net/Admin

  > SECRET_WORD=supersecretword

### Routes:

I used [postman](https://www.postman.com/ "postman") for routes testing.

#### _Movie Route_ 🎞:

**get**`/movies` Get all the movies.

**post** `/movies` Create a movie.

**get by id** `/movies/:id` Get specific movies.

#### _Director Route_ 🎬:

**get**`/director` Get all the directors.

**post** `/director` Create a director.

**get by id** `/director/:id` Get specific director.

#### _Tv Show Route_ 📺:

**get**`/tvshow` Get all the Tv Shows.

**post** `/tvshow` Create a Tv Show.

**get by id** `/tvshow/:id` Get a specific Tv Show, with the director's information.

#### *Actors Route*🦸 :

**post** `/actors/:_id` Create an actor in the database and link and save it directly to a specific movie, the ** \_ id ** passed as a parameter is a movie.

#### _Jwt Routes_ 🔒:

The routes created for the jwt are test only, are not stored in the DB, and dont have models.

**Generate Jwt**:

**post** `/auth` One should send in the body object, an **id, name, email, password**, and then copy the response token.

**Testing Token**:

**post** `/auth/test` To test the token one should go to the Headers section of the postman, set as key Authorization and set value Bearer "token", as shown in the following example:
[![Jwt Test](https://i.ibb.co/PgpcBSd/Captura-de-pantalla-de-2021-01-12-09-06-29.png "Jwt Test")](https://i.ibb.co/PgpcBSd/Captura-de-pantalla-de-2021-01-12-09-06-29.png "Jwt Test")

---

Developer: **Enzo Facundo Orbe**

Linkedin: [Enzo Facundo Orbe](https://www.linkedin.com/in/enzo-facundo-orbe-302657178/ "Enzo Facundo Orbe")
