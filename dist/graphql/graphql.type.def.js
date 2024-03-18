export const graphqlTypeDef = `#graphql


type Query {
moviesByGenre(genre: String): [Movie]
moviesByCountry(country: String): [Movie]
moviesByTitle(title: String): [Movie]
movieById(id: Int): Movie
getUserByUsername(username: String): User
userWatchHistory(username: String): [Movie]
userWatchList(username: String): [Movie]
}


type Mutation {
addMovieToWatchList(username: String, movieId: Int): [Movie]
removeMovieFromWatchList(username: String, movieId: Int): [Movie]
updateUserWatchHistory(username: String, movieId: Int): [Movie]
}

type User {
  id: Int!
  username: String!
  passwordHash: String!
  salt: String!
  role: String!
  watchList: [Movie]
  watchHistory: [Movie]

}

type Movie {
  id: Int
  title: String
  summary: String
  videoUrl: String
  coverImageUrl: String
  numberOfStreams: Int
  genres: [String]
  mainCasts: [String]
  releaseYear: String
  countryOfOrigin: String
  savedBy: [User]
  watchedBy: [User]

}
`;
