# What is NextJS Template

This project provides the basic dev configuration designated for developing the NextJS app. It contains crucial tooling and settings allowing for a quick start with suitable developer experience (DX).

The template provides flexibility and the ability to customize depending on your needs. Thus, it contains two different versions that differ in complexity and spectrum of solved problems.

# Main features

## Basic version - `basic`

- Next.js.
- TypeScript support.
- Static code analysis: eslint, prettier, husky.
- Testing environment based on [Vitest](https://vitest.dev/) and [Storybook](https://storybook.js.org/)

## Extended version - `core`

- Everything that included in the `basic` version.
- Internalization based on [React Intl](https://formatjs.io/docs/getting-started/installation/).
- Data fetching and external state synchronization based on [React Query](https://tanstack.com/query/v4/).
- Access to simple, modular and accessible component based on [Chakra UI](https://chakra-ui.com/).
- Demo app (todo).

# Guideline

## How to use

_You may simply download a ZIP Directory and start with a clean git repository using a command_ `git init`...

... or clone this repo through git CLI depending on the selected version.

```
git clone -b basic --depth 1 --single-branch https://github.com/bartstc/nextjs-template.git [project_name]
```

```
git clone -b core --depth 1 --single-branch https://github.com/bartstc/nextjs-template.git [project_name]
```

Link cloned repo with your own remote repository.

```
git remote set-url origin git@github.com:username/project.git
```

Create and push your own branch designated for development.

```
git checkout -b [branch_name]
```

```
git push --set-upstream origin [branch_name]
```

Set your newly created and pushed branch as default. You may do this in `Settings` -> `Branches` -> `Default Branch`.

## Basic commands

| Komenda                | Opis                                                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn dev`             | Runs dev server with the [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh) locally on port `3000`                                        |
| `yarn build`           | Builds optimized app package                                                                                                                               |
| `yarn start`           | Runs the production-ready app                                                                                                                              |
| `yarn test`            | Runs unit tests                                                                                                                                            |
| `yarn storybook`       | Runs a Storybook locally on port `6006`                                                                                                                    |
| `yarn test-storybook`  | Runs integration tests (requires a running Storybook on port `6006` - more info [here](https://storybook.js.org/blog/interaction-testing-with-storybook/)) |
| `yarn build-storybook` | Builds static app with [a Storybook's content](https://storybook.js.org/docs/react/sharing/publish-storybook)                                              |

# Contributing

It is publicly open for any contribution. Bugfixes, new features, and extra modules are welcome.

- To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
- To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/bartstc/nextjs-template/issues).
