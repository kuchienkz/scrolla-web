---
icon: magnifying-glass
order: 17
date: 2026-10-23
category:
  - Guides
tag:
  - cloud
  - custom-repository
---

# Custom Repositories

A **Custom Repository** (in the app: **Custom Cloud Wallpaper Repository** or **Custom API**) is a public wallpaper website with an API that you can search by tags. Add it by its URL, search it inside Scrolla, and download the pictures you like into your library.

Custom Repositories are **read-only**: Scrolla never uploads anything to them. Downloaded pictures become normal local wallpapers.

::: warning You choose the source
Scrolla does not come with a list of websites, and the developer does not review them. Custom Repositories are run by other people. You are responsible for what you download. See the [Terms and Conditions](../legals/terms_conditions.md).
:::

## Add a Custom Repository

1. Go to **Settings** > **Cloud & Storage** > **Cloud Storage Manager**.
2. Tap **+**, then tap **Custom API**.
3. Enter the **Repository URL**, for example `https://example.org`.
4. Optional: enter a **Name**.
5. Optional, under **Login**: your **User name or user ID** and your **API key or password hash**. Some websites give more results to users who log in.
6. Tap **Test Connection**. The app finds out which kind of API the website uses, then runs one test search.
7. Tap **Save**.

Your key is stored encrypted on this device only. It is never part of a backup.

::: details 🖼️ Screenshot placeholder: `custom-repositories/01-add-repository.png`
The Custom Cloud Wallpaper Repository page with the URL, login fields and the Test Connection button.
:::

### Advanced

| Setting | What it does |
|---|---|
| **API format** | The kind of API. Tap **Detect** to let the app find it, or select it yourself when detection fails. |
| **User agent (optional)** | The name the app sends to the website. Change it only when the website asks for it. |
| **Password hash helper** | Some websites log in with a salted hash of your password. Enter your password and the **Salt template** the website documents (with `{password}` where the password goes), then tap **Fill Hash**. The password itself is not stored. |

If the app says that no supported API answered, check the URL, or select the **API format** under **Advanced**.

## Browse and search

1. Go to **Resources** > **WALLPAPERS**.
2. At the top, switch the source to **Custom**.
3. Select the repository in the list at the top.
4. Type tags in the search bar, with spaces between them. Put `-` before a tag to exclude it, for example `sunset -city`.

Filters:

- **Fits Screen**: only pictures with about the same shape as your screen.
- **Shape**: **Portrait**, **Landscape** or **Wide (panorama)**.
- **Minimum Size**: hide small pictures.

Pictures that are already in your library show **IN YOUR COLLECTION**. Scroll down to load more, or tap **Load More**.

::: info Content filter
Some results are hidden by a content filter. Pictures that are not rated for all ages get the [NSFW tag](../legals/content-safety-tag.md) when you download them.
:::

## Look at a picture

Tap a picture to open it.

- **Screen Crop Preview** shows which part of the picture fits your screen.
- Its tags are listed by category. Tap a tag to search for it.
- **Open Source** opens the picture's page on the website.
- **DOWNLOAD** adds it to your library.

## Download many pictures

1. Long-press a picture to start selecting. Tap more pictures to add them. **Select Loaded** selects every loaded picture.
2. Tap **DOWNLOAD**.

The pictures become local wallpapers, with their tags. You can use them in playlists like any other wallpaper.

If cloud transfers are set to **Wi-Fi Only** and you are on mobile data, the app asks first.

## Add pictures to a playlist directly

When you add wallpapers to a playlist, the **Custom** source is also there. Select pictures and confirm: the app downloads them and adds them to the playlist.

## Edit or remove a repository

Open **Cloud Storage Manager** and tap the repository, or tap **Edit Repository** in the browser.

- **Forget Saved Key** removes your stored key.
- **Remove Repository** removes it from the app. Wallpapers that you downloaded stay in your library.

Custom Repositories are part of your [backups](backup-restore.md), without their keys. After a restore, enter the key again.
