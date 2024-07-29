import bundleAnalyzer from '@next/bundle-analyzer';
import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
const jiti = createJiti(fileURLToPath(import.meta.url));

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

jiti('./utils/env');

export default withBundleAnalyzer({
  output: process.env.DOCKER_BUILD === '1' ? 'standalone' : undefined,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
});
