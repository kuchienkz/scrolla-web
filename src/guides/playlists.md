---
icon: list
order: 7
date: 2026-10-05
category:
  - Guides
tag:
  - playlists
---

# Playlists

A playlist is a list of wallpapers that play one after another, like songs in a music playlist. The live wallpaper plays wallpapers only from **active** playlists.

There are two kinds of playlist:

- **Standard Playlist**: you select the wallpapers yourself. This page explains it.
- **Dynamic Playlist**: the app selects wallpapers for you based on tags. See [Dynamic Playlists](dynamic-playlists.md).

## Create a playlist

1. Tap **Playlists** in the bottom bar.
2. Tap the **+** button at the top.
3. Tap **Standard Playlist**.
4. Enter a name, for example "Morning Vibes".
5. Tap **Create**.

Each playlist name must be unique. If the name is already in use, the app shows **A playlist with that name already exists.**

## Add wallpapers

1. Tap the playlist to open it.
2. Tap **Add wallpapers**.
3. Tap the wallpapers you want. Wallpapers that are already in the playlist show **Already in playlist**.
4. Tap **CONFIRM (SELECT WALLPAPERS)**.

::: details 🖼️ Screenshot placeholder: `playlists/01-select-wallpapers.png`
The wallpaper selection page with several wallpapers selected and the confirm button.
:::

You can also add cloud wallpapers. The app downloads them first (see [Cloud Storage](cloud-storage.md)).

## Turn a playlist on or off

On the **Playlists** tab, use the **switch** on the playlist card.

- A new playlist is **off**.
- An empty playlist has no switch. It shows **Tap to add wallpapers**.
- You can turn on more than one playlist. **Settings** > **Playback Behavior** > **Multiple Playlists Strategy** decides how they play together. See [Settings Reference](settings.md#playback-behavior).

## Inside a playlist

A playlist has two tabs: **Wallpapers** and **Settings**.

### Wallpapers tab

Long-press a wallpaper to open its menu:

| Option | What it does |
|---|---|
| **Begin selection** | Start selecting several wallpapers. |
| **Set as Cover** / **Unset Cover** | Use this wallpaper as the picture of the playlist card. |
| **Override Config** | Give this wallpaper different settings **only in this playlist**. See [Wallpaper Settings](wallpaper-settings.md#where-settings-apply). |
| **Export** | Save a copy of the file to Downloads. |
| **Calculate Dimension** | Read the width and height again. |
| **Remove from playlist** | Remove it from this playlist. The wallpaper stays in your library. |

A wallpaper with its own settings shows **Has custom configuration**.

The menu at the top has more options:

- **Shuffle Order**: mix the order of the wallpapers once.
- **Rename**
- **Move to Folder**
- **Reorder**: drag wallpapers into a new order. Tap **Done** when finished.
- **Clear Playlist**: remove all wallpapers from the playlist.
- **Delete Playlist**: delete the playlist. **Wallpapers are not deleted.**

::: details 🖼️ Screenshot placeholder: `playlists/02-playlist-wallpapers-tab.png`
An open playlist on the Wallpapers tab, with the top menu open.
:::

### Settings tab

- **Folder**: put the playlist in a folder, or in **Root**.
- **Assigned Profile**: which [profile](profiles.md) the playlist belongs to. **All Profiles (Shared)** shows it in every profile that uses shared resources.
- **Dynamic Playlist Mode**: turn this playlist into a [Dynamic Playlist](dynamic-playlists.md).
- **Override Playlist Configuration**: use custom shuffle and interval settings for this playlist, instead of the default in Settings. See [Playlist settings](#playlist-settings) below.
- **Clear Playlist** and **Delete Playlist**.

## Playlist settings {#playlist-settings}

These settings control **when** the wallpaper changes. Set the default for all playlists in **Settings** > **Playback Behavior** > **Default Playlist Settings**. To use different values for one playlist, turn on **Override Playlist Configuration** in that playlist's Settings tab.

| Setting | What it does |
|---|---|
| **Periodic Switch Interval** | Change the wallpaper every N seconds. Set it to `0` to turn it off. |
| **Shuffle Wallpaper** | Play wallpapers in random order. |
| **Switch on Screen Unlock** | Change the wallpaper when you unlock your phone. |
| **Switch on Screen Lock** | Change the wallpaper when the screen turns off. |
| **Postpone switch until playback finished** | For videos and animated wallpapers: wait until the video ends before you change it. |

::: details 🖼️ Screenshot placeholder: `playlists/03-playlist-settings.png`
The Playlist Settings section with all switches visible.
:::

## Organize playlists

### Folders

1. On the **Playlists** tab, tap the view button to switch to **Folders View**.
2. To move playlists, long-press a playlist to select it, select more if you want, then tap **Bulk Actions** > **Move to Folder**.

### Select many playlists

Long-press a playlist to start selecting. Then use **Bulk Actions**:

- **Set Profile**: assign the selected playlists to a profile, or to **All Profiles (Shared)**.
- **Move to Folder**

Tap the **X** to stop selecting.

## Next steps

- [Wallpaper Settings](wallpaper-settings.md)
- [Animations](animations.md)
- [Dynamic Playlists](dynamic-playlists.md)
