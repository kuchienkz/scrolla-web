---
icon: wand-sparkles
order: 8
date: 2026-10-23
category:
  - Guides
tag:
  - playlists
  - tags
---

# Dynamic Playlists

A Dynamic Playlist fills itself. You do not select wallpapers. You set **criteria**, such as tags, and the app finds matching wallpapers in your library and in your cloud storage.

Use a Dynamic Playlist when:

- you have a big collection and want "all `night` wallpapers, but no `city` ones",
- you want fresh wallpapers from your Google Drive without downloading everything.

## How it works

The app does not load all matching wallpapers at once. It prepares small groups called **batches**.

- One batch is **In Use**: the live wallpaper plays from it.
- Other batches are **In Queue**: they are ready for later.
- When a batch is used up, the app prepares a new one.

Cloud wallpapers in a batch are downloaded as **temporary** (Ephemeral) copies. The app deletes them later, so they do not fill your storage.

## Create a Dynamic Playlist

1. Tap **Playlists** in the bottom bar.
2. Tap **+**, then tap **Dynamic Playlist**.
3. Enter a **Playlist Name**.
4. Set at least one search criterion (see below). The dialog shows how many wallpapers match.
5. Tap **Create Playlist**.
6. Turn on the playlist's switch on the Playlists tab.

::: details 🖼️ Screenshot placeholder: `dynamic-playlists/01-create-dialog.png`
The Create Dynamic Playlist dialog with tags in Must Include Tags and the matching count.
:::

## Criteria

| Setting | What it does |
|---|---|
| **Must Include Tags** | A wallpaper must have **all** of these tags. |
| **Excluded Tags** | A wallpaper with **any** of these tags is not used. |
| **Min Size (MB)** / **Max Size (MB)** | Use only files in this size range. Optional. |
| **Wallpaper Source** | **All (Local & Cloud)**, **Local Only**, or **Cloud Repository (CWR) Only**. |

You must set at least one tag or one size limit.

## Batch & Queue Settings

| Setting | Default | What it does |
|---|---|---|
| **Wallpapers per Batch** | 5 | How many wallpapers are in each batch. |
| **Max Batches to Maintain** | 2 | How many batches the app prepares ahead of time. |
| **Random Picks** | Off | Pick wallpapers at random from all matches, instead of in order. |

## Change the criteria later

1. Open the playlist.
2. Go to the **Settings** tab.
3. Tap **Edit Criteria & Batches**.

The playlist page shows the **Dynamic Playlist Queue**: your **Criteria & Parameters** and the current batches.

- **Edit Criteria**: change the tags, size or source.
- **Recreate Batches**: delete the current batches and make new ones. Use it after you import new wallpapers.

### Change one wallpaper in this playlist

Long-press a wallpaper in a batch and tap **Override Config**. You can give it its own [scene](scenes.md) (**Override Scene**) and its own [settings](wallpaper-settings.md#where-settings-apply) (**Override Config**) in this playlist. A wallpaper with changes shows a badge. Your changes come back when the playlist downloads the same wallpaper again.

::: details 🖼️ Screenshot placeholder: `dynamic-playlists/02-queue.png`
The Dynamic Playlist Queue with one batch In Use and one In Queue.
:::

## Turn a Dynamic Playlist into a standard playlist

In the playlist's **Settings** tab, turn off **Dynamic Playlist Mode**. This removes the criteria and batches.

## Tips

- **No wallpapers matched criteria**: check your tags. Make sure the wallpapers have all the **Must Include Tags**.
- Cloud wallpapers download only when the network is allowed. If you set cloud transfers to **Wi-Fi Only**, new cloud wallpapers arrive only on Wi-Fi. The app tries again when an allowed network connects. To let batches download on mobile data anyway, turn on **Unrestrict network for Dynamic Playlist Batches** in **Settings** > **Cloud & Storage**. See [Cloud Storage](cloud-storage.md#transfer-history-and-settings).
- If the app lost access to your Google Drive, sign in again with **Refresh Auth**. The playlist fills its batches right after.
- A Dynamic Playlist can also be turned on in normal playlist ways: with its switch, or with a [Task](tasks.md).
