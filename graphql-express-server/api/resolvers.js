const { data } = require('./data')
const {
  getMovies,
  getMovie,
  getPeople,
  getPerson,
  newPerson,
  getDirector,
  getStars,
  getFilmography
} = require('./helpers')

const resolvers = {
  Query: {
    movies() {
      return getMovies()
    },
    movie(root, { id }) {
      return getMovie(id)
    },
    people() {
      return getPeople()
    },
    person(root, { id }) {
      return getPerson(id)
    }
  },
  Mutation: {
    addPerson(root, args) {
      return newPerson(args)
    }
  },
  Movie: {
    director(movie) {
      return getDirector(movie)
    },
    stars(movie) {
      return getStars(movie)
    }
  },
  Person: {
    filmography(person) {
      return getFilmography(person)
    }
  }
}
// Resolvers go here...
module.exports = resolvers
