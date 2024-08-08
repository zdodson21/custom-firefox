/* 
Utilized preferences and comments from:
  * https://github.com/pyllyukko/user.js/blob/master/user.js 
*/

// Enable HTTPS-only mode
user_pref("dom.security.https_only_mode", true);

// Disable Pocket
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Only Active Tab Has Close Button
user_pref(browser.tabs.tabClipWidth, 999);

// Disable Middle Mouse Paste
user_pref(middlemouse.paste, false);

// Show Compact Mode Setting
user_pref("browser.compactmode.show", true);

// Disable Notification
user_pref("dom.webnotifications.enabled", false);

// Disable Tabs after 30 Seconds
user_pref("browser.tabs.min_inactive_duration_before_unload", 30000);

// Disable Unneccessary Suggestions


// Allow custom CSS
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Load MMB Tab in Background
user_pref("browser.tabs.loadInBackground", true);

// Do Not Check if Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable Telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("experiments.supported", false)
user_pref("experiments.enabled", false)
user_pref("experiments.manifest.uri",	"");

// Disable Crash Reporting
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// Tracking Protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// Anti-Fingerprinting
user_pref("privacy.resistFingerprinting", true);

// Disable Sending of Health Report
user_pref("datareporting.healthreport.uploadEnabled",	false);
user_pref("datareporting.healthreport.service.enabled",	false);
user_pref("datareporting.policy.dataSubmissionEnabled",	false);

// Disable Personalized Extension Recommendations
user_pref("browser.discovery.enabled", false);