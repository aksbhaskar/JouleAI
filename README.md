# JouleAI

Coming-soon landing page with a waitlist. Plain static HTML — no build step.

## Deploy (Vercel)

1. Go to https://vercel.com/new and import this GitHub repo.
2. Set the **Project Name** to `jouleai` → the site will be at https://jouleai.vercel.app.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.

Every push to the production branch redeploys automatically.

## How the waitlist works

The form posts signups to [FormSubmit](https://formsubmit.co), a free service that
emails each submission to **tryjoule.ai@gmail.com**. No server or database needed.

**One-time activation:** the first time someone submits the form, FormSubmit sends an
activation email to tryjoule.ai@gmail.com. Click the link in it — until then, signups
are not delivered (that first submission shows an error on the page). Submit your own
email once after deploying to trigger it.

After that, every signup arrives as an email titled "New JouleAI waitlist signup".
Tip: create a Gmail filter/label for that subject to keep the list in one place.

## Survey

After someone joins the waitlist, an optional one-question-at-a-time survey appears
(6 multiple-choice questions, each with skip and an optional write-in "other").
Single-choice questions advance on tap; letter keys pick options and Enter moves on.
Answers arrive as one email titled "New JouleAI survey response", tagged with the
person's email.

To add, remove or reword questions, edit the `QUESTIONS` list near the bottom of
`index.html`.
