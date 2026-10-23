---
icon: images
order: 5
date: 2026-10-23
category:
  - Guides
tag:
  - wallpapers
  - library
---

# Managing Your Wallpaper Library

Open your library from **Resources** > **WALLPAPERS**.

::: details 🖼️ Screenshot placeholder: `library/01-wallpaper-library.png`
The Wallpapers page with the search bar, filters and a grid of wallpapers.
:::

## Local, cloud and custom wallpapers

The library has three sources. Use the selector at the top to switch:

- **Local**: wallpapers on your device.
- **Cloud**: wallpapers in your connected Google Drive. See [Cloud Storage](cloud-storage.md).
- **Custom**: search a public wallpaper API and download from it. See [Custom Repositories](custom-repositories.md).

Each wallpaper can show a badge:

| Badge | Meaning |
|---|---|
| **Local** | A normal wallpaper stored on your device. |
| **Subscribed** | A cloud wallpaper that is downloaded and kept on your device. |
| **Cached** / **Cached locally** | A cloud wallpaper that is temporarily stored on your device. |
| **Ephemeral (Dynamic Playlist)** | A temporary cloud wallpaper that a [Dynamic Playlist](dynamic-playlists.md) downloaded. The app manages it for you. |
| **Animated / Video** | A video or animated wallpaper. |

## View a wallpaper

- **Tap** a wallpaper to see it full screen, with its details and tags. Tap **Copy Tags** to copy its tags, then paste them into another wallpaper with **Copy from...** > **Clipboard** in the [wallpaper editor](importing-wallpapers.md#the-wallpaper-editor).
- **Long-press** a wallpaper to see its details and the actions you can do with it.

## Search and filter

- **Search**: type a tag or a file name. To find one wallpaper by its number, type `#id:` and the number, for example `#id:123`.
- **Tag filter**: add tags to show only wallpapers that have them. You can also exclude a tag.
- **File Size**: show only wallpapers smaller than 2, 10, 20 or 50 MB, or tap **Custom...** to set a minimum and maximum size.
- **Filter Local Wallpapers**: show **Subscribed**, **Local** or **Ephemeral** wallpapers.
- **Filter Cloud Wallpapers**: show **Subscribed**, **Cached** or **No Subscription** wallpapers.

To clear a filter, tap **Clear**.

## Select many wallpapers

1. Long-press a wallpaper and tap **Begin Selection**.
2. Tap more wallpapers to add them to the selection.
3. To select more at once, open the select options:
   - **Select all**: selects the wallpapers that are loaded on screen.
   - **Super Select All (All DB)**: selects every wallpaper in your library that matches the current search and filters.
4. Open **Wallpaper Actions** to act on all selected wallpapers.
5. Tap **Cancel Selection** to stop selecting.

## Wallpaper actions

Some actions are available only for some wallpapers. If an action is not available, the app shows the reason.

| Action | What it does |
|---|---|
| **Configure** | Edit tags and settings of a local wallpaper. |
| **Configure (Override)** | Change the settings of a subscribed or temporary cloud wallpaper without changing the original on the cloud. |
| **Export** | Save a copy of the wallpaper file to your Downloads folder. |
| **Calculate Hashes** | Compute a picture "fingerprint". The app uses it to find duplicates. |
| **Calculate Dimensions** | Read the width and height of the wallpaper again. |
| **Clear Caches** | Delete thumbnails and temporary files for the wallpaper. They are created again when needed. |
| **Delete** | Remove the wallpaper from Scrolla. |
| **Migrate to Cloud** | Upload a local wallpaper to your Google Drive. See [Cloud Storage](cloud-storage.md#move-local-wallpapers-to-the-cloud). |
| **Subscribe** / **Unsubscribe** | Keep, or stop keeping, a cloud wallpaper on your device. |
| **Refresh from Cloud** | Download the latest tags and settings of a subscribed wallpaper. |
| **Migrate to Local** | Download a cloud wallpaper and turn it into a normal local wallpaper. |

::: warning
**Delete** and **Delete Permanently** cannot be undone. A deleted wallpaper no longer plays in any playlist.
:::

::: details 🖼️ Screenshot placeholder: `library/02-wallpaper-actions.png`
The Wallpaper Actions list for a selection of wallpapers.
:::

## Export a wallpaper

1. Long-press the wallpaper, or select several.
2. Tap **Export**.

The app saves the files to your **Downloads** folder. On some Android versions, direct writes to Downloads are not allowed. Then the app saves to its own external files folder and shows **Export Location Notice** with the path.

## Next steps

- [Tags & Datasets](tags-and-datasets.md)
- [Playlists](playlists.md)
