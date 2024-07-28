import * as esbuild from 'esbuild';

const BUILD_DIRECTORY = 'dist';
const ENTRY_POINTS = ['./src/index.ts'];
const PRODUCTION = process.env.NODE_ENV === 'production';
const LIVE_RELOAD = !PRODUCTION;
const SERVE_PORT = 3000;
const SERVE_ORIGIN = `http://localhost:${SERVE_PORT}`;

const context = await esbuild.context({
  bundle: true,
  entryPoints: ENTRY_POINTS,
  outdir: BUILD_DIRECTORY,
  sourcemap: !PRODUCTION,
  target: PRODUCTION ? 'es2020' : 'esnext',
  inject: LIVE_RELOAD ? ['./bin/liveReload.js'] : undefined,
  define: {
    SERVE_ORIGIN: JSON.stringify(SERVE_ORIGIN),
  },
  loader: {
    '.ts': 'ts',
  },
  format: 'esm',
  banner: {
    js: '/* Teetime Reservations by Shane M. Ross */',
  },
  footer: {
    js: '/* Follow @shanedroid on X! */',
  },
  minify: true,
});

if (PRODUCTION) {
  await context.rebuild();
  context.dispose();
} else {
  await context.watch();
  await context
    .serve({
      servedir: BUILD_DIRECTORY,
      port: SERVE_PORT,
    })
    .then(console.log('Watching and rebuilding files...'));
}
