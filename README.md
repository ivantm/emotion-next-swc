This project shows a bug using the `Global` component from `@emotion/react` when used with next.js and `swcMinify: true`. In short, the component does not unmount when its parent unmounts, leading to unwanted CSS hanging around as you navigate the rest of the site.

## To reproduce the bug

Run `yarn build && yarn start`.

Visit `http://localhost:3000`. The background is purple. Click the link. The background stays purple. Refresh the page. The background is blue. This is the bug.

Now, open `next.config.js` and set the `swcMinify` flag to `false`. Repeat the above: run `yarn build && yarn start`. Visit `http://localhost:3000`. The background is purple. Click the link. The background will be blue. This is the expected behaviour as the background color of the `body` is overridden on the index page via a CSS variable set through Emotion's `Global` component.
