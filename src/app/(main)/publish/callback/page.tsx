"use client";
import YoutubePost from "@/components/create/YoutubePost";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [authCode, setAuthCode] = useState<string | null>(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");
    setAuthCode(authorizationCode || ""); // Set an empty string as the default value instead of null
  }, [authCode]);
  return (
    <div>
      <YoutubePost code={authCode || ""} />
    </div>
  );
};

export default Page;
