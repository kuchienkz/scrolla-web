---
icon: cloud
order: 13
date: 2026-10-05
category:
  - Guides
tag:
  - cloud
  - google-drive
---

# Cloud Storage (Google Drive)

Connect your Google Drive to:

- keep big wallpaper collections on the cloud instead of on your phone,
- use the same wallpapers on more than one device,
- back up your playlists, tasks and settings (see [Backup & Restore](backup-restore.md)).

## Words used on this page

| Word | Meaning |
|---|---|
| **Cloud repository** | A folder in your Google Drive that Scrolla uses, for example `scrolla-wp`. |
| **Migrate to Cloud** | Upload a local wallpaper to the cloud repository. |
| **Subscribe** | Download a cloud wallpaper and **keep** it on your device, so it works offline. |
| **Cached** | A cloud wallpaper or thumbnail that is stored on your device **temporarily**. The app can delete it to free space. |
| **Ephemeral** | A temporary cloud wallpaper that a [Dynamic Playlist](dynamic-playlists.md) downloaded. |

## Connect Google Drive

1. Go to **Settings** > **System & Integration** > **Cloud Storage Manager**.
2. Tap **Connect Cloud Drive** (or **Add Cloud Storage**).
3. Tap **Sign in with Google** and sign in. Allow access to Google Drive.
4. When you see **Account authorized**, tap **Next**.
5. Enter the **Folder Path** in your Drive, for example `scrolla-wp`. If the folder does not exist, the app creates it.
6. Check the summary and tap **Save Configuration**.

::: details 🖼️ Screenshot placeholder: `cloud/01-connect-wizard.png`
The Connect Cloud Drive wizard on the "Select Cloud Sync Path" step.
:::

## Browse cloud wallpapers

1. Go to **Resources** > **WALLPAPERS**.
2. Switch the source to **Cloud Storage**.
3. Select the drive and **Root Folder** if you have more than one.

The app downloads thumbnails as you scroll. To reload the list from the cloud, tap **Refresh Cloud Items**. This also clears the cloud browsing cache.

::: tip Faster browsing
For big collections, create an index first. See [Maintenance](#maintenance). Then search and paging are faster and also work offline.
:::

## Move local wallpapers to the cloud {#move-local-wallpapers-to-the-cloud}

1. In the library, select wallpapers on **Local Storage**.
2. Open **Wallpaper Actions** and tap **Migrate to Cloud**.
3. On **Prepare Migration**, under **Select Destination(s)**, select the cloud drive.
4. Optional, under **Tag Syncing**:
   - **Export Tags**: also upload full tag details. Tag names are always uploaded with the wallpaper.
   - **Overwrite existing tags on cloud**: upload tags even if they already exist on the cloud.
5. Tap **Confirm & Migrate**.

A progress sheet shows the upload. When it finishes, a **Migration Report** shows how many wallpapers were migrated, how many failed, and the elapsed time. Tap **Retry Failed Items** to try the failed ones again.

## Use cloud wallpapers on your device

| Action | Result |
|---|---|
| **Subscribe** | Downloads the wallpaper and keeps it. It stays linked to the cloud. You can add it to playlists. |
| **Unsubscribe** | Removes the downloaded copy from your device. The cloud copy stays. |
| **Refresh from Cloud** | Downloads the newest tags and settings of a subscribed wallpaper. |
| **Migrate to Local** | Downloads the wallpaper and turns it into a normal local wallpaper. |

You can also add cloud wallpapers directly to a playlist. The app subscribes them for you.

On **Prepare Subscription**, the **Tag Syncing** option **Overwrite existing local tags** replaces your local tags with the tags from the cloud.

## Manage a connected drive

Open **Cloud Storage Manager** and tap the drive.

### Account and status

- **Account Details**: email, folder path and whether the drive is writable.
- **Usage & Subscriptions**: how many wallpapers from this drive are kept on your device.
- **Refresh Auth**: sign in again. Use it when the app shows **Auth Required** or **Saved Credential Invalid**.
- **Edit Path**: change the folder in your Drive.
- **Remove**: disconnect the drive. Select what happens to subscribed wallpapers:
  - **Retain as local wallpapers**: keep them on your device as normal wallpapers.
  - **Unsubscribe & delete from device**: delete the downloaded copies.

### Maintenance {#maintenance}

| Tool | What it does |
|---|---|
| **Create Index** / **Sync Index** | Downloads the details of all cloud wallpapers to your device. Search, sorting and paging become faster and work offline. Run **Sync Index** after you add wallpapers from another device. |
| **Find Duplicates** | Finds wallpapers that look the same. Needs an index. For each set, tap **Keep Best** to keep the best quality copy, or **Leave As Is**. You can also delete single copies. |
| **Run Integrity Check** | Finds incomplete wallpapers on the cloud (missing thumbnail or metadata files) and can repair them. |

::: warning
Deleting a duplicate from the cloud deletes the file from your Google Drive. You cannot undo this.
:::

::: details 🖼️ Screenshot placeholder: `cloud/02-drive-details.png`
The drive details page with Account Details, Usage & Subscriptions and Maintenance.
:::

## Transfer history and settings {#transfer-history-and-settings}

Open the profile panel (**Profile** in the bottom bar), then tap **Transfer & Migration History**.

- **Batch Reports**: the report of each migration.
- **Transfer Log**: each single upload and download.
- **Settings**:
  - **Concurrency**: how many wallpapers upload or download at the same time (1 to 10, default 2).
  - **Max Retries**: how many times the app tries a failed transfer again (1 to 10, default 10). `1` means no retry.
  - **Network Restriction**: **Any Network** or **Wi-Fi Only**.
  - **Cancel Remaining Queued Jobs**: removes waiting transfers. Transfers that already started finish normally.

You can also set **Max Concurrent Cloud Transfers** and **Cloud Transfer Network** in **Settings** > **System & Integration**.

### Mobile data

If transfers are set to **Wi-Fi Only** and you start a transfer on mobile data, the app asks **Cellular Data Detected**. Tap **Continue on Cellular** to use mobile data this time, or **Cancel**.

### Unfinished transfers

If the app closed during a transfer, it asks **Unfinished Cloud Transfers** the next time you open it:

- **Resume Transfers**: continue in the background.
- **Discard All**: cancel them.

## Storage used by the cloud cache

Thumbnails and temporary downloads use space on your device. Set the limit in **Settings** > **Content Preferences** > **Cloud Cache Persistence Limit** (100 MB to 10 GB). See also **Background Cache Eviction** in the [Settings Reference](settings.md#performance-caching).
