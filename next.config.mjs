/** @type {import('next').NextConfig} */

import nextpwa from "next-pwa";

const withPWA = nextpwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development"
});

const nextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);
