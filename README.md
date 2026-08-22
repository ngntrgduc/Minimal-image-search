> [!IMPORTANT]
> No longer mantained because I've switched to use bookmarklet.
> 
> Update: Around release 144.0 (October 14, 2025), Firefox integrated the ["Search Image with Google Lens" feature](https://www.firefox.com/en-US/firefox/144.0/releasenotes/#:~:text=Visual%20search%20powered%20by%20Google%20Lens), so we don't need an add-on to search images anymore ;).

# Minimal image search
Minimal Firefox extension to search images painlessly.

## Why?
Firefox has no built-in search for image feature, and other extensions are not as minimal as I want, so I built one.

## How to use?
When you open the image in the browser, use keyboard shortcut `Alt + Shift + S` (default), or you can set a different shortcut.

## Installation
Extension available on [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/minimal-image-search/).


### Install from source
1. Clone this repository/[download zip](https://github.com/ngntrgduc/Minimal-image-search/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Minimal-image-search.git
```

2. Load extension on Firefox:
Go to `about:debugging`, click `Load Temporary Add-on...`, then select `manifest.json` in the `src` folder.
