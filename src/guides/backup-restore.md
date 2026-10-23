---
icon: box-archive
order: 18
date: 2026-10-23
category:
  - Guides
tag:
  - backup
  - restore
---

# Backup & Restore

Make a backup before you uninstall the app, reset your phone or move to a new phone.

Go to **Settings** > **Cloud & Storage** > **Backup & Restore**. There are two kinds of backup:

| | Cloud backup | Offline backup (ZIP) |
|---|---|---|
| **Where** | Your connected Google Drive | A ZIP file on your device |
| **Local wallpapers** | Those used by playlists are uploaded to the drive | Included, with their files |
| **Subscribed cloud wallpapers** | As links; they download again from their drive | As links; they download again from their drive |
| **Playlists, tasks, settings, scenes, themes** | Included | Included |
| **Size** | Small | Can be very big |
| **Automatic** | Yes, with **Auto Cloud Sync** | No |

::: details 🖼️ Screenshot placeholder: `backup/01-backup-restore-page.png`
The Backup & Restore page with the Cloud and Offline (ZIP) sections.
:::

## What is in a backup

- Your playlists (with their folders and in-playlist changes), tasks, profiles and settings.
- Your [scenes](scenes.md), custom [themes](themes.md) and [Custom Repositories](custom-repositories.md) (without their keys).
- **Local wallpapers**: the files, tags, settings and wallpaper scene.
- **Subscribed wallpapers**: only a link to the cloud file. When you restore, they download again from their drive.

Not in a backup:

- Temporary (Ephemeral) wallpapers of Dynamic Playlists. The playlists download them again.
- **Device overrides** of cloud wallpapers. See [Cloud Storage](cloud-storage.md#backups).
- The keys of Custom Repositories, and the downloads of the cloud cache.

## Backup options

When you tap **Backup to Cloud** or **Export ZIP**, the app asks what to include:

- **Local wallpapers**: in a ZIP, their media, settings and scene. In a cloud backup, the ones that playlists use are uploaded to the drive.
- **Subscribed wallpapers**: links only. They download again from their drive.

Tap **Back up** to start.

## Cloud backup

You need a connected, writable Google Drive. If you have none, tap **Connect**. See [Cloud Storage](cloud-storage.md#connect-google-drive).

### Back up

1. Under **Cloud Backup & Restore**, select the **Target Cloud Drive**.
2. Tap **Backup to Cloud**, select the options, then tap **Back up**.

To keep the cloud backup up to date automatically, turn on **Auto Cloud Sync**.

### Restore

1. Select the **Target Cloud Drive**. The page shows **Cloud backup found** and the date of the last backup.
2. Tap **Restore**, then confirm.

The app restores your playlists, tasks and settings. Subscribed wallpapers come back as subscriptions and download when they are used.

## Offline backup (ZIP)

### Back up

1. Under **Offline Backup & Restore (ZIP)**, tap **Export ZIP**.
2. Select the options, then tap **Back up**.
3. Wait until the app shows **Backup completed successfully!**
4. Copy the ZIP file to a safe place, for example your computer or cloud storage.

::: tip
The ZIP contains your local wallpaper files, so it can be big. Make sure you have enough free space.
:::

### Restore

There are two ways:

- **In the app**: tap **Import ZIP**, select the ZIP file, then confirm **Restore from Offline ZIP?**.
- **On a new installation**: in the Setup Wizard, on the Working Directory step, tap **Select ZIP Backup File**. See [First Launch Setup](first-launch-setup.md#restore-from-backup-optional). This way does not restore Custom Repositories.

The app unpacks the wallpaper files and restores your playlists, tasks and settings.

## Drives that are not connected

A backup can link to cloud wallpapers from more than one Google Drive. If one of those drives is not connected when you restore, the app warns **Some cloud drives are not connected** and lists them. Their wallpapers, and the playlist entries that use them, are skipped.

- Tap **Cancel**, connect the drives in [Cloud Storage Manager](cloud-storage.md#connect-google-drive), then restore again.
- Or tap **Restore anyway** to restore everything else.

## Move to a new phone

1. On the old phone, make an **offline ZIP backup** and copy the file to the new phone.
2. Install Scrolla Wallpaper on the new phone.
3. In the Setup Wizard, select the ZIP file on the Working Directory step.
4. Finish the wizard.
5. Set the live wallpaper again. See [Quick Start](quick-start.md#step-4-set-scrolla-wallpaper-as-your-live-wallpaper).

If all your wallpapers are in your Google Drive, you can use a **cloud backup** instead: connect the same Drive on the new phone, then restore.
