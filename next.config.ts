import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:path",
                has: [
                    {
                        type: 'host',
                        value: 'novaprotocols.com'
                    }
                ],
                destination: 'https://www.novaprotocols.com/',
                permanent: true
            }
        ]
    }
}

export default nextConfig
