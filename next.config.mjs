// Remove or comment out the import and withPWA usage
// import nextpwa from "next-pwa";
// const withPWA = nextpwa({ ... });

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig; // <--- Export plain config

// /** @type {import('next').NextConfig} */

// import nextpwa from "next-pwa";

// const withPWA = nextpwa({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV === "development"
// });

// const nextConfig = {
//   /* config options here */
// };

// export default withPWA(nextConfig);
