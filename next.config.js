module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ]
  },
  webpack: (config, { isServer }) => {
        if (!isServer) {
             config.resolve.fallback.fs = false
             config.resolve.fallback.dns = false
             config.resolve.fallback.net = false
             config.resolve.fallback.tls = false
        }

        return config;
    }
}
