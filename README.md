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
- Access to simple, modular and accessible component based on [Chakra UI](https://chakra-ui.com/) (todo).
- Demo app (todo).

# How to use

Clone this repo depending on the selected version.

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
