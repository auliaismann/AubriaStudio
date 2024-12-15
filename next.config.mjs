// next.config.mjs
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/register',
          destination: 'http://localhost:8000/api/register',
        },
        {
          source: '/api/login',
          destination: 'http://localhost:8000/api/login',
        },
        {
          source: '/api/logout',
          destination: 'http://localhost:8000/api/logout',
        },
      ];
    },
  };
  
  export default nextConfig;
  