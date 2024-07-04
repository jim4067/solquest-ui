/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

};

export default nextConfig;


/* 
 const nextConfig = {
    images: {
        domains: ["s3-alpha-sig.figma.com"]
    },
 
};

module.exports = nextConfig;
*/