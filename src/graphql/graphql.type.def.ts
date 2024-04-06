export const graphqlTypeDef = `#graphql


type Query {
getMoviesByGenre(genre: String!): [Movie]
getMoviesByCountry(country: String!): [Movie]
getMoviesByTitle(title: String!): [Movie]
getMovieById(id: Int!): Movie
getUserByUsername(username: String!): User
getUserWatchHistory(username: String!): [Movie]
getUserWatchList(username: String!): [Movie]
isMovieOnUserWatchList(username: String!, movieId: Int!): Boolean
}


type Mutation {
addMovieToWatchList(username: String!, movieId: Int!): [Movie]
removeMovieFromWatchList(username: String!, movieId: Int!): [Movie]
updateUserWatchHistory(username: String!, movieId: Int!): [Movie]
}

type User {
  id: Int!
  username: String!
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
