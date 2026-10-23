---
icon: gear
order: 19
date: 2026-10-23
category:
  - Guides
tag:
  - settings
  - reference
---

# Settings Reference

Tap **Settings** in the bottom bar to open **Preferences**. **Engine Control** is at the top. Below it, the settings are grouped into pages. This page explains each one.

::: details 🖼️ Screenshot placeholder: `settings/01-preferences.png`
The Preferences page with Engine Control and the list of settings pages.
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

::: info Wi-Fi name not shown?
On Android 10 and newer, the app can only read the Wi-Fi name when **Location (GPS)** is on in Quick Settings and the app has **Precise** location permission.
:::

## Playback {#playback}

### Playlists

**Multiple Playlists Strategy**: what happens when more than one playlist is active.

| Option | Result |
|---|---|
| **Flatten & Merge** | All wallpapers from the active playlists play as one big playlist. The settings of each playlist are not used. |
| **Round-robin** | One wallpaper from each active playlist, in turn. |
| **Sequential** | All wallpapers of one playlist, then all wallpapers of the next playlist. |

**Default Playlist Settings**: switch interval, shuffle, and switch on lock or unlock, for all playlists. See [Playlists](playlists.md#playlist-settings).

### Wallpapers

- **Default Wallpaper Settings**: Screen Fit, Base Color, Pre-Transform, Animations, Audio and 3D settings for all wallpapers. See [Wallpaper Settings](wallpaper-settings.md).
- **Scene**: layers, clock, audio visualizer and shapes around your wallpapers, for the profile you are editing. See [Scenes](scenes.md).
- **Loading Wallpaper** and **Fallback Wallpaper**: what shows while wallpapers are being prepared, and when no wallpaper is available. See [Wallpaper Settings](wallpaper-settings.md#loading-and-fallback-wallpapers).

### Rendering

**Frame Rate Limit**: a lower frame rate uses less battery and makes the phone less warm.

- **15 FPS — Battery saver**
- **30 FPS — Balanced**
- **60 FPS — Standard**
- **Custom** (10 to 120)

### Preloading

- **Preload Next Wallpapers**: prepare the next 0 to 3 wallpapers in advance, so switches are smoother. More uses more memory.
- **Enable Video Preloading**: also prepare videos in advance. This can cause stutter or battery drain on slower phones. The app limits it to 1 video.

## Cloud & Storage {#cloud-storage}

### Cloud

| Item | What it does |
|---|---|
| **Cloud Storage Manager** | Connect and manage Google Drive and [Custom Repositories](custom-repositories.md). See [Cloud Storage](cloud-storage.md). |
| **Backup & Restore** | Cloud and ZIP backups. See [Backup & Restore](backup-restore.md). |

### Transfers

| Item | What it does |
|---|---|
| **Max Concurrent Cloud Transfers** | How many cloud uploads or downloads run at the same time. |
| **Cloud Transfer Network** | **Any Network** (Wi-Fi or mobile data) or **Wi-Fi Only**. |
| **When Wi-Fi Is Lost** | Only with **Wi-Fi Only**. **Pause** stops running downloads and resumes them later. **Continue** lets them finish. |
| **Unrestrict network for Dynamic Playlist Batches** | Only with **Wi-Fi Only**. [Dynamic Playlist](dynamic-playlists.md) batches download on any connection, including mobile data. |

### Cache

- **Cloud Cache Persistence Limit**: the maximum space for cloud thumbnails and downloads (100 MB to 10 GB).
- **Background Cache Eviction**: deletes old cached cloud wallpapers every N days (0 to 30). Set it to **Never** to keep them.

### Misc

Only for signed-in users. **Maximize Compatibility (experimental)** changes how [Custom Repositories](custom-repositories.md) work. Use it at your own risk.

## Performance {#performance}

### Thumbnails

- **Thumbnails Generation**: **Unified (minimal storage)** uses less space. **Differ by Frame Size (best performance)** loads faster. Changing it clears the thumbnail caches.
- **Animated Thumbnails**: show moving thumbnails for animated wallpapers. To apply a change to existing thumbnails, tap **Clear Thumbnail Caches**.
- **Clear Thumbnail Caches**: deletes all thumbnails. The app makes them again when needed.

### Processing

**Max Concurrent Processes**: how many thumbnails the app makes at the same time in the background. Lower it if the app is slow while you scroll through a big library.

## Appearance & Content {#appearance-content}

### Appearance

- **Theme**: the colors of the app, per profile. See [App Themes](themes.md).
- **Home Screen Widget**: colors, opacity and wallpaper tags of the widget. See [Home Screen Widget](home-screen-widget.md).

### Content

**NSFW Content Visibility**: how wallpapers with the **NSFW** tag show in the app: **Hidden**, **Blur** or **Show**. See [Content Safety Tag](../legals/content-safety-tag.md).

## Privacy & Permissions {#privacy-permissions}

| Item | What it does |
|---|---|
| **Ad Privacy Options** | Change your ad consent choices. Shown only where the law asks for it. |
| **Non-personalized Ads** | Ads are not based on your interests. Ads still show. Always on, and locked, while **Telemetry** is **Off**. |
| **Telemetry** | What the app sends to the developer when something goes wrong: **Default**, **Minimal** or **Off**. See [Telemetry levels](#telemetry). |
| **Permissions Manager** | Allow or check **Alarms & Reminders**, **Location Access (Precise)** and **Microphone Access**. See [First Launch Setup](first-launch-setup.md#permissions). |

### Telemetry levels {#telemetry}

Telemetry means crash and error reports. They help the developer find and fix bugs. **Default** is on until you change it.

| | Default | Minimal | Off |
|---|---|---|---|
| Crashes and errors, with the place in the code | ✓ | ✓ | – |
| Device model, Android version, app version | ✓ | ✓ | – |
| Recent app events before an error (screen changes, wallpaper engine log lines) | ✓ | ✓ | – |
| Taps before an error | ✓ | – | – |
| IP address | ✓ | – | – |
| Screenshot and screen layout at the error | ✓ | – | – |
| Screen replay (some sessions, and sessions with an error) | ✓ | – | – |
| Performance data, app logs, session counts | ✓ | – | – |
| Non-personalized Ads | Your choice | Your choice | Always on |

Your wallpapers, playlists, tags and settings are never sent.

- A **lower** level applies at once.
- A **higher** level applies after you restart the app. The app tells you so.

## Advanced

| Item | What it does |
|---|---|
| **Wallpaper Engine Logs** | Shows service events, wallpaper switches and errors. Logs are deleted after 3 days. |
| **Show Debug Info** | Shows technical information on the wallpaper. It can slow down the wallpaper. |
| **Export Database** | Saves a copy of the app database to your Downloads folder. The developer can ask for it to find a bug. |
| **Restore Default Settings** | Resets all settings to their defaults. Your wallpapers, playlists and tasks are not deleted. |

The **App Version** is at the bottom of the Preferences page. Include it when you report a bug.

## Account

To sign in, tap **Sign in with Google** at the top of the Preferences page. When you are signed in, tap your picture to open your **User Profile**, with **View Purchase History** and **Sign out**.
