export const graphqlTypeDef = `#graphql


type Query {
  moviesByGenre(genre: String): [Movie]
}

type User {
  id: Int!
  username: String!
  password_hash: String! 
  role: String!
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
  watchedBy: [User]

}
`;
