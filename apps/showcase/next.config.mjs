//@ts-check

import { composePlugins, withNx } from '@nx/next';
import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
import { createDefaultTheme } from '@arctic-kit/snow';
import path from 'path';

const lightTheme = createDefaultTheme();
const darkTheme = createDefaultTheme(true);

const theme = extendTheme({
  colorSchemes: {
    light: lightTheme,
    dark: darkTheme,
  },
  cssVarPrefix: 'snow',
  getSelector: (colorScheme) =>
    colorScheme ? `.theme-${colorScheme}` : ':root',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // });

    // config.module.rules.push({
    //   test: /\.(ts|tsx|jsx|js)$/, // Use asset/source for text content
    //   resourceQuery: /source/,
    //   type: 'asset/source',
    // });

    config.module.rules.push({
      test: /\.(ts|tsx|jsx|js|css)$/,
      resourceQuery: /raw/, // Applies only to imports with ?raw
      use: path.resolve('./rawFileLoader.mjs'), // Use the custom loader
    });

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
};

// const nextConfig = {

// };

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

const composedNextConfig = composePlugins(...plugins)(nextConfig);

export default withPigment(composedNextConfig, {
  theme,
});
