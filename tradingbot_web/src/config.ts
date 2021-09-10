console.log('process.env', process.env);


export const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID ||
  "156454099348-iq9bk5bsdfn2rt6n1vv48344r9hoseot.apps.googleusercontent.com"
export const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || "4YpsWVhOF8qyM4w0_7H7iTX-";
export const GOOGLE_REDIRECT_URL = "auth/google";
export const SERVER_ROOT_URI =
  process.env.SERVER_ROOT_URI || "http://localhost:3000";

export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || 
  "mongodb+srv://dbUser:dbUserPassword@m0.cyj7x.mongodb.net/tradingbot?retryWrites=true&w=majority";
