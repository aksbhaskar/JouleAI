// joule AI waitlist backend — paste this into Extensions → Apps Script of your Google Sheet.
// Signups go to a "waitlist" tab, survey answers to a "survey" tab (both created automatically).

const NOTIFY_EMAIL = "tryjoule.ai@gmail.com"; // set to "" to stop the email per signup

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const type = data.type === "survey" ? "survey" : "waitlist";
    delete data.type;
    if (!data.email) throw new Error("missing email");

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(type) || ss.insertSheet(type);
    const headers = sheet.getLastRow()
      ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
      : ["timestamp"];
    Object.keys(data).forEach((k) => { if (!headers.includes(k)) headers.push(k); });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");

    // prefix ' so nobody can inject a spreadsheet formula
    const clean = (v) => { v = String(v ?? "").slice(0, 2000); return /^[=+\-@]/.test(v) ? "'" + v : v; };
    sheet.appendRow(headers.map((h) => (h === "timestamp" ? new Date() : clean(data[h]))));

    if (NOTIFY_EMAIL && type === "waitlist") {
      MailApp.sendEmail(NOTIFY_EMAIL, "New joule AI waitlist signup", data.email + " just joined the waitlist.");
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
