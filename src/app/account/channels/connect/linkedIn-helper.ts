import api from "@/lib/utils/api";
import { getCookie, setCookie } from "cookies-next";

const exchangeAuthorizationCodeForToken = async (
    authorizationCode: string | null,
    returnedState: string | null
  ) => {
    try {
      // Get authorization code and state from URL query parameters
      console.log("State:", returnedState, authorizationCode);
      const authState = localStorage.getItem("state");
      console.log("auth:", authState);
      if (authorizationCode && returnedState === authState) {
        // Make a POST request to exchange authorization code for access token
        const response = await api.post("linkedIn/generate-access-token", {
          authorizationCode,
        });
        console.log(response);
        // Get access token from response data
        if (response.status === 200) {
          const accessToken = response.data.message.access_token;
          // Store authorization code and access token as cookies
          setCookie("linkedInAccessToken", accessToken);
          console.log("authorisation", authorizationCode);
          console.log("accessToken", accessToken);

          // Calling post request to DB for access token channel name
          const createChannelResponse = await createChannel("LinkedIn",accessToken);

          if (
            createChannelResponse?.status === 201 ||
            createChannelResponse?.status === 200
          ) {
            const linkedInData = await getLinkedInUser();
            const data = linkedInData.message;

            const updateChannelResponse = await api.put(
              "users/channel/update-channel",
              {
                channelName: "LinkedIn",
                sub: data.sub,
                userName: data.name,
                userEmail: data.email,
                profilePicture: data.picture,
              }
            );
            console.log(updateChannelResponse);
            if (updateChannelResponse.status === 200) {
              console.log("Channel updated:", updateChannelResponse.data);
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
};

// Sending access token and channelName to DB
const createChannel = async (channelName:string ,accessToken: string) => {
        try {
          const response = await api.post("users/channel/create-channel", {
            channelName: channelName,
            accessToken: accessToken,
          });
          console.log("Channel created:", response.data);
          return response;
        } catch (error) {
          console.error("Error creating channel:", error);
        }
};
    
const getLinkedInUser = async () => {
        //  make authenticated requests to LinkedIn API
        const accessToken = getCookie("linkedInAccessToken");
        const linkedInProfile = await api.post("linkedIn/get-user-info", {
          linkedInAccessToken: accessToken,
        });
    
        console.log(linkedInProfile.data);
        return linkedInProfile.data;
};

export { exchangeAuthorizationCodeForToken, createChannel, getLinkedInUser };