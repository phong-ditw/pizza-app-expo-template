# Repository Guidelines

## Project Structure & Module Organization

This is an Expo/Ignite React Native app with this main layout:

```text
app/
  components/       shared UI components
  screens/          app screens and demo screens
  navigators/       React Navigation setup
  services/api/     API clients, types, and tests
  config/           environment-specific config
  theme/            colors, spacing, typography, theme context
  context/          app-level React contexts
  utils/            reusable helpers and hooks
assets/
  icons/            icon assets
  images/           image assets
android/            native Android project
ios/                native iOS project
test/               Jest setup, mocks, and shared tests
```

Colocate focused tests as `*.test.ts`/`*.test.tsx`; keep demo-only assets in `assets/**/demo`.

## Build, Test, and Development Commands

- `npm run start`: start Expo with the dev client.
- `npm run android` / `npm run ios`: run on a device or simulator.
- `npm run web`: start the web target.
- `npm run compile`: type-check with `tsc --noEmit`.
- `npm run lint:check`: check ESLint and Prettier rules.
- `npm run lint`: run ESLint with automatic fixes.
- `npm test` or `npm run test:watch`: run Jest once or in watch mode.
- `npm run build:android:prod` / `npm run build:ios:prod`: run local EAS production builds.

## Coding Style & Naming Conventions

- Use TypeScript and React Native functional components.
- Keep TypeScript strict: avoid implicit `any` and unchecked returns.
- Follow Prettier: 100-character lines, double quotes, no semicolons, and trailing commas.
- Keep imports alphabetized and grouped by ESLint.
- Prefer aliases such as `@/components/Button` and `@assets/images/...`.
- Use PascalCase for components and screens, for example `LoginScreen.tsx`.
- Use camelCase for hooks and utilities.

## Testing Guidelines

- Jest uses `jest-expo` with setup from `test/setup.ts`.
- Add focused unit or component tests next to the code they cover, for example `app/components/Text.test.tsx`.
- Keep shared setup and broader integration tests in `test/`.
- Run `npm test`, `npm run compile`, and `npm run lint:check` before opening a PR.
- Put Maestro flows under `.maestro/flows` and run them with `npm run test:maestro` when available.

## Commit & Pull Request Guidelines

- Recent history uses concise commits, including Conventional Commit style such as `feat(config): deps for native app`.
- Prefer `type(scope): summary` for new work.
- Include a short description, linked issue or task, and test results in each pull request.
- Add screenshots or recordings for UI changes.
- Note native, Expo, EAS, or dependency changes because they can affect local build setup.

## Agent-Specific Instructions

- Keep generated changes scoped to the requested task.
- Do not edit `android/`, `ios/`, or lockfiles unless the task requires native or dependency changes.
- Follow existing Ignite patterns before adding new abstractions.
