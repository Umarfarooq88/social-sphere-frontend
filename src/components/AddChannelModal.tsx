"use client";
import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import api from "@/lib/api";

const AddChannelModal = () => {
  const [authState, setAuthState] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");

  const generateRandomState = () => {
    // Generate a random string to use as the state parameter
    return Math.random().toString(36).substring(2);
  };

  const handleLinkedInClick = async () => {
    try {
      const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
      const redirectUri = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI;
      const scope = process.env.NEXT_PUBLIC_LINKEDIN_SCOPE;

      // Generate a random state value
      const state = generateRandomState();
      setAuthState(state);

      const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

      // Redirect the user to the LinkedIn authorization URL
      window.location.href = authorizationUrl;

      await exchangeAuthorizationCodeForToken();
    } catch (error) {
      console.log(error);
    }
  };

  const exchangeAuthorizationCodeForToken = async () => {
    // Get authorization code and state from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");
    const returnedState = urlParams.get("state");

    // Check if state values match
    if (authorizationCode && returnedState === authState) {
      // Make a POST request to exchange authorization code for access token
      const response = await axios.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        {
          grant_type: "authorization_code",
          code: authorizationCode,
          client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
          redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI,
        }
      );

      // Get access token from response data
      const accessToken = response.data.access_token;
      // Set access token
      setAccessToken(accessToken);

      // Store authorization code and access token in session storage
      setCookie("authorizationCode", authorizationCode);
      setCookie("accessToken", accessToken);
      console.log("authorisation", authorizationCode);
      console.log("accessToken", accessToken);

      // Calling post request to DB for access token channel name
      await createChannel();

      //  make authenticated requests
      const linkedinProfile = await axios.get(
        "https://api.linkedin.com/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(linkedinProfile.data);
    }
  };

  // Sending access token and channelName to DB
  const createChannel = async () => {
    try {
      const response = await api.post("users/channel/create-channel", {
        channelName: "LinkedIn",
        accessToken: accessToken,
      });

      console.log("Channel created:", response.data);
    } catch (error) {
      console.error("Error creating channel:", error);
    }
  };

  const handleYouTubeClick = () => {
    console.log("YouTube button clicked");
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Add New Social Account</h2>
      <div className="flex justify-center pt-56">
        <button
          onClick={handleLinkedInClick}
          className="bg-blue-500 hover:bg-blue-700 text-white ml-2 px-4 py-2 rounded-lg transition duration-300"
        >
          LinkedIn
        </button>
        <button
          onClick={handleYouTubeClick}
          className="bg-red-500 hover:bg-red-600 text-white ml-2 px-4 py-2 rounded-lg transition duration-300"
        >
          YouTube
        </button>
      </div>
    </div>
  );
};

export default AddChannelModal;