export const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID ||
  "156454099348-iq9bk5bsdfn2rt6n1vv48344r9hoseot.apps.googleusercontent.com"
export const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || "4YpsWVhOF8qyM4w0_7H7iTX-";
export const GOOGLE_REDIRECT_URL = "auth/google";
export const SERVER_ROOT_URI =
  process.env.SERVER_ROOT_URI || "http://localhost:3000";

export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "dbuser:dbpassword@127.0.0.1:27017/tradingbot_db";
