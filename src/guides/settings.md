---
icon: gear
order: 15
date: 2026-10-05
category:
  - Guides
tag:
  - settings
  - reference
---

# Settings Reference

Tap **Settings** in the bottom bar. This page explains each section.

::: details 🖼️ Screenshot placeholder: `settings/01-settings-top.png`
The top of the Settings tab, showing the Engine Control section with the service status.
:::

## Engine Control

The status of the live wallpaper.

| Item | What it does |
|---|---|
| **Service Running** / **Service Not Running** | Shows whether Scrolla is your live wallpaper now. When it runs, it also shows the active playlist, the current wallpaper and the network state. |
| **Set Wallpaper** | Opens the Android live wallpaper preview, so you can set Scrolla as your wallpaper. |
| **Stop** | Stops the wallpaper service. Your phone goes back to the system default wallpaper. |
| **Restart Engine** | Restarts the wallpaper engine. Try this first when the wallpaper looks wrong or does not move. |
| **Refresh Status & Telemetry** | Reads the current network and playback state again. |
| **Wallpaper Engine Logs** | Shows service events, wallpaper switches and errors. Logs are deleted after 3 days. |

::: info Wi-Fi name not shown?
On Android 10 and newer, the app can only read the Wi-Fi name when **Location (GPS)** is on in Quick Settings and the app has **Precise** location permission.
:::

## System & Integration

| Item | What it does |
|---|---|
| **Permissions Manager** | Allow or check **Alarms & Reminders** and **Location Access (Precise)**. |
| **Cloud Storage Manager** | Connect and manage Google Drive. See [Cloud Storage](cloud-storage.md). |
| **Backup & Restore** | Cloud and ZIP backups. See [Backup & Restore](backup-restore.md). |
| **Max Concurrent Cloud Transfers** | How many cloud uploads or downloads run at the same time. |
| **Cloud Transfer Network** | **Any Network** (Wi-Fi or mobile data) or **Wi-Fi Only**. |

## Playback Behavior {#playback-behavior}

### Multiple Playlists Strategy

What happens when more than one playlist is active:

| Option | Result |
|---|---|
| **Flatten & Merge** | All wallpapers from the active playlists play as one big playlist. The settings of each playlist are not used. |
| **Round-robin** | One wallpaper from each active playlist, in turn. |
| **Sequential** | All wallpapers of one playlist, then all wallpapers of the next playlist. |

### Default Playlist Settings

Switch interval, shuffle, and switch on lock or unlock, for all playlists. See [Playlists](playlists.md#playlist-settings).

### Default Wallpaper Settings

Screen Fit, Base Color, Pre-Transform, Animations and 3D settings for all wallpapers. See [Wallpaper Settings](wallpaper-settings.md).

## Performance & Caching {#performance-caching}

### Rendering

**Frame Rate Limit**: a lower frame rate uses less battery and makes the phone less warm.

- **15 FPS — Battery saver**
- **30 FPS — Balanced**
- **60 FPS — Standard**
- **Custom**

### Thumbnails

- **Thumbnails Generation**: **Unified (minimal storage)** uses less space. **Differ by Frame Size (best performance)** loads faster.
- **Animated Thumbnails**: show moving thumbnails for animated wallpapers. To apply a change to existing thumbnails, tap **Clear Thumbnail Caches**.
- **Clear Thumbnail Caches**: deletes all thumbnails. The app makes them again when needed.

### Background Cache Eviction

Deletes old cached cloud wallpapers every N days (0 to 30). Set it to **Never** to keep them.

### Preloading

- **Preload Next Wallpapers**: prepare the next 0 to 3 wallpapers in advance, so switches are smoother. More uses more memory.
- **Enable Video Preloading**: also prepare videos in advance. This can cause stutter or battery drain on slower phones. The app limits it to 1 video.

### Processing

**Max Concurrent Processes**: how many thumbnails the app makes at the same time in the background (1 to 20). Lower it if the app is slow while you scroll through a big library.

## Appearance

**Theme**: select the color theme of the app. Each [profile](profiles.md) can also have its own theme.

## Content Preferences

- **NSFW Content Visibility**: how wallpapers with the **NSFW** tag show in the app: **Hidden**, **Blur** or **Show**. See [Content Safety Tag](../legals/content-safety-tag.md).
- **Cloud Cache Persistence Limit**: the maximum space for cloud thumbnails and downloads (100 MB to 10 GB).

## Advanced

| Item | What it does |
|---|---|
| **App Version** | The installed version. Include it when you report a bug. |
| **Show Debug Info** | Shows technical information on the wallpaper. It can slow down the wallpaper. |
| **Export Database** | Saves a copy of the app database to your Downloads folder. The developer can ask for it to find a bug. |
| **Restore Default Settings** | Resets all settings on this page to their defaults. Your wallpapers, playlists and tasks are not deleted. |

## Account

To sign in, tap **Sign in with Google** at the top of the Settings tab. When you are signed in, tap your picture to open your **User Profile** and **Purchase History**.
