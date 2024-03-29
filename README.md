# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

### Node version

Note: this project uses the [experimental native fetch](https://github.com/nodejs/node/commit/6ec225392675c92b102d3caad02ee3a157c9d1b7) in Node 17.

```
$ nvm install 17.8.0 --experimental-fetch
```

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## ENV Vars

Create a `.envrc` file with the following keys:

- `ALCHEMY_API_KEY`

Allow the change:

```
$ direnv allow
```
