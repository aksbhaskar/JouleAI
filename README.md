# JouleAI

Coming-soon landing page with a waitlist. Plain static HTML — no build step.

## Deploy (Vercel)

1. Go to https://vercel.com/new and import this GitHub repo.
2. Set the **Project Name** to `jouleai` → the site will be at https://jouleai.vercel.app.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.

Every push to the production branch redeploys automatically.

## How the waitlist works

Signups and survey answers are sent to a Google Apps Script web app that appends
them to a Google Sheet ("waitlist" and "survey" tabs). Setup, once:

1. Create a Google Sheet (e.g. "joule AI waitlist") → **Extensions → Apps Script**.
2. Replace the code with `google-apps-script.js` from this repo and save.
3. **Deploy → New deployment** → type **Web app**; Execute as **Me**; Who has access
   **Anyone** → Deploy, authorise, and copy the web app URL (ends in `/exec`).
4. Put that URL in `ENDPOINT` in `index.html`.

Each signup also emails `NOTIFY_EMAIL` (set in the script).

## Survey

After someone joins the waitlist, an optional one-question-at-a-time survey appears
(6 multiple-choice questions, each with skip and an optional write-in "other").
Single-choice questions advance on tap; letter keys pick options and Enter moves on.
Answers land as one row in the "survey" tab, tagged with the person's email.

To add, remove or reword questions, edit the `QUESTIONS` list near the bottom of
`index.html`.
