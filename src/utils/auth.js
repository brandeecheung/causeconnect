import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

export const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

export function signToken({ email, name, _id }) {
  const payload = { email, name, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

