# Contributing to http-response-text

Thank you for your interest in contributing to `http-response-text`! This is a lightweight utility that converts HTTP status codes into human-readable text responses.

## How to Report Issues

If you find a bug or have a feature suggestion, please first search the existing [Issues](https://github.com/kamaslau/http-response-text/issues) to avoid duplicates.

When creating a new issue, please include:

- **Bug reports**: Steps to reproduce, the HTTP status code you used, the expected output, and the actual output.
- **Feature requests**: A clear description of the feature you would like to add and its use case (e.g., supporting a new language or custom text).

## How to Submit Code

1. **Fork** this repository.
2. Create your feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**. Since this project involves multilingual text, please ensure your changes do not break compatibility with existing language packs.
4. **Commit your changes**:

   ```bash
   git commit -m "feat: add support for xx language"
   ```

5. **Push** to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a **Pull Request** against this repository.

## Development Environment

This project is built on Node.js. **Please use [pnpm](https://pnpm.io/) as the package manager for this project. Do not use `npm` or `yarn`** — this ensures consistent dependency resolution and lockfile behavior across all contributors.

### Prerequisites

- Node.js (LTS version recommended)
- pnpm (install via `npm install -g pnpm` or follow the [official guide](https://pnpm.io/installation))

### Setup

```bash
# Install dependencies (pnpm only)
pnpm install

# Run linting (if available)
pnpm lint

# Run tests (if available)
pnpm test

```

> **Important**: If you accidentally run `npm install` or `yarn`, please delete the generated `package-lock.json` / `yarn.lock` and re-run `pnpm install` before committing. Only `pnpm-lock.yaml` should be tracked in version control.

## Capitalisation of Dictionary Entries

Dictionary strings are not UI labels that a designer can restyle — they are localized reason phrases, so each one follows the spelling rules of its own language rather than a single shared capitalisation style:

- **English (`en`)** — Title Case, copied from the [IANA HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml): `Not Found`, `Too Early`. Match the registry spelling exactly, including abbreviations.
- **French (`fr`), German (`de`), Spanish (`es`)** — sentence case: capitalise the first word plus proper nouns and acronyms. German additionally capitalises every noun (`Methode nicht erlaubt`), because lower-casing them is a spelling error rather than a style choice.
- **Chinese (`zh`), Japanese (`ja`)** — no letter case. Keep acronyms such as `URI` and `HTTP` uppercase, separated from CJK text by a single ASCII space.

Two entries look wrong but are not:

- `418` is `I'm a teapot`, lowercase, because that is how [RFC 2324](https://www.rfc-editor.org/rfc/rfc2324) writes it.
- Do not transpose one language's convention onto another. French Title Case (`Non Trouvé`) and German Title Case (`Methode Nicht Erlaubt`) were both removed in favour of the native rules above; a uniform Title Case across all dictionaries would make the German and Spanish ones ungrammatical.

When rewording an entry, use the localized [MDN status code reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) as the semantic guide — it translates the descriptions rather than the phrases themselves, so it constrains meaning, not spelling.

## Commit Message Convention

We recommend using the [Conventional Commits](https://www.conventionalcommits.org/) format, for example:

- `feat: add new feature`
- `fix: correct text for a status code`
- `docs: update documentation`

## License

By contributing code, you agree that your contributions will be licensed under the project's [MIT License](https://github.com/kamaslau/http-response-text/blob/main/LICENSE).
