// GoogleAuth.tsx

import React from "react";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import fs from 'fs';
import readline from "readline";

interface GoogleAuthProps {
  onAuthSuccess: (authClient: OAuth2Client) => void;
}

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload'];
const TOKEN_PATH = 'token.json';

const GoogleAuth: React.FC<GoogleAuthProps> = ({ onAuthSuccess }) => {
  const authorize = (credentials: any, callback: any) => {
    const { client_secret, client_id, redirect_uris } = credentials;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token: any) => {
      if (err) return getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  const getAccessToken = (oAuth2Client: OAuth2Client, callback: any) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code: any) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token: any) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  fs.readFile('client_secrets.json', (err, content: any) => {
    if (err) {
      return console.log('Error loading client secret file:', err);
    }
    authorize(JSON.parse(content), onAuthSuccess);
  });

  return null; // No UI for this component
};

export default GoogleAuth;
