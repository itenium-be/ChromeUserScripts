Password Revealer
=================

Add a "Show" button next to each `<input type="password">` to turn it into regular input text.
So you can more easily recover any stored password.

Activate this script clicking the <img src="https://github.com/Laoujin/ChromeUserScripts/raw/master/password-revealer/favicon.png" alt="Eye"  width="25"> extension icon after the address bar.

Default shortcut: `Alt + P` ([configurable](chrome://extensions/shortcuts)).

## How it looks

![How it looks](marketing-example.png)


## Content-Script Shortcut

Some shortcuts cannot be configured as a Chrome extension shortcut
(ex: Control + Alt + x). One could work around this with doing it
in a Content-Script instead:

```javascript
document.addEventListener('keydown', function(zEvent) {
  if (zEvent.ctrlKey && zEvent.altKey && zEvent.code === 'KeyP') {
    enhancePasswordInputs();
  }
});
```
