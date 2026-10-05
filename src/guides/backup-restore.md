---
icon: box-archive
order: 14
date: 2026-10-05
category:
  - Guides
tag:
  - backup
  - restore
---

# Backup & Restore

Make a backup before you uninstall the app, reset your phone or move to a new phone.

Go to **Settings** > **System & Integration** > **Backup & Restore**. There are two kinds of backup:

| | Cloud backup | Offline backup (ZIP) |
|---|---|---|
| **Where** | Your connected Google Drive | A ZIP file on your device |
| **Contains** | Playlists, tasks and settings | Wallpaper files, playlists, tasks and settings |
| **Wallpaper files** | Not included. Wallpapers that are in your cloud repository are downloaded again when you restore. | Included |
| **Size** | Small | Can be very big |
| **Automatic** | Yes, with **Auto Cloud Sync** | No |

::: details 🖼️ Screenshot placeholder: `backup/01-backup-restore-page.png`
The Backup & Restore page with the Cloud and Offline (ZIP) sections.
:::

## Cloud backup

You need a connected, writable Google Drive. If you have none, tap **Connect**. See [Cloud Storage](cloud-storage.md#connect-google-drive).

### Back up

1. Under **Cloud Backup & Restore**, select the **Target Cloud Drive**.
2. Tap **Backup to Cloud**.

To keep the cloud backup up to date automatically, turn on **Auto Cloud Sync**.

### Restore

1. Select the **Target Cloud Drive**. The page shows **Cloud backup found** and the date of the last backup.
2. Tap **Restore**, then confirm.

The app restores your playlists, tasks and settings. Wallpapers that the playlists need are **subscribed automatically**, which means the app downloads them from your cloud repository.

::: warning
Only wallpapers that are in your cloud repository can come back with a cloud backup. Local wallpapers that you never migrated to the cloud are **not** in a cloud backup. Use an offline ZIP backup for them.
:::

## Offline backup (ZIP)

### Back up

1. Under **Offline Backup & Restore (ZIP)**, tap **Export ZIP**.
2. Wait until the app shows **Backup completed successfully!**
3. Copy the ZIP file to a safe place, for example your computer or cloud storage.

::: tip
The ZIP contains all your wallpaper files, so it can be big. Make sure you have enough free space.
:::

### Restore

There are two ways:

- **In the app**: tap **Import ZIP**, select the ZIP file, then confirm **Restore from Offline ZIP?**.
- **On a new installation**: in the Setup Wizard, on the Working Directory step, tap **Select ZIP Backup File**. See [First Launch Setup](first-launch-setup.md#restore-from-backup-optional).

The app unpacks the wallpaper files and restores your playlists, tasks and settings.

## Move to a new phone

1. On the old phone, make an **offline ZIP backup** and copy the file to the new phone.
2. Install Scrolla Wallpaper on the new phone.
3. In the Setup Wizard, select the ZIP file on the Working Directory step.
4. Finish the wizard.
5. Set the live wallpaper again. See [Quick Start](quick-start.md#step-4-set-scrolla-wallpaper-as-your-live-wallpaper).

If all your wallpapers are in your Google Drive, you can use a **cloud backup** instead: connect the same Drive on the new phone, then restore.
