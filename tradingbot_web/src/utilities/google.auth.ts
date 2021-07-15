import {
  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL, SERVER_ROOT_URI
} from '../config';
import querystring from "querystring";
import axios from 'axios';

const url = "https://oauth2.googleapis.com/token";

export const getGoogleAuthURL = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: `${SERVER_ROOT_URI}/${GOOGLE_REDIRECT_URL}`,
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  return `${rootUrl}?${querystring.stringify(options)}`;
};


export const getTokens = (code: string):
  Promise<{
    access_token: string;
    expires_in: Number;
    refresh_token: string;
    scope: string;
    id_token: string;
  }> => {

  console.info('getTokens code:', code)
  const values = {
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: `${SERVER_ROOT_URI}/${GOOGLE_REDIRECT_URL}`,
    grant_type: "authorization_code",
  };

  return axios
    .post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
};

export type GoogleUser = {
  "id": string,
  "email": string,
  "verified_email": boolean,
  "name": string,
  "given_name": string,
  "family_name": string,
  "picture": string,
  "locale": string,
};

export const getUser = async (code: string):
  Promise<GoogleUser> => {

  const { id_token, access_token } = await getTokens(code);
  return await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });
};
