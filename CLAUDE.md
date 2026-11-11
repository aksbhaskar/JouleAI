# Working on this repo

## Commits

- Make one commit per logical change, however small: a copy tweak, a colour change
  and a new survey question are three commits, not one.
- Never make empty, no-op or padding commits just to raise the commit count.
- Push after each commit (or each small batch of commits) so Vercel redeploys.

## Site

- Plain static HTML, no build step. `index.html` holds the page, styles and the
  survey's `QUESTIONS` list; `google-apps-script.js` is the waitlist backend.
- All copy is lowercase except the name "joule AI".
