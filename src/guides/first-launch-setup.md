---
icon: wand-magic-sparkles
order: 2
date: 2026-10-05
category:
  - Guides
tag:
  - first-time
  - setup
---

# First Launch Setup

The **Setup Wizard** opens the first time you start Scrolla Wallpaper. This page explains each step.

Use **Back** to return to an earlier step. Some steps have a **Skip Step** button.

## 1. Welcome

This screen introduces the two main parts of the app:

- **Wallpaper Manager**: organize wallpapers with tags, filters and playlists.
- **Wallpaper Changer**: change wallpapers automatically with scheduled tasks.

Tap **Get Started**.

::: details 🖼️ Screenshot placeholder: `first-launch/01-welcome.png`
The Welcome step.
:::

## 2. Permissions {#permissions}

All permissions are **optional**. If you deny them, the app still works, but some features are not available.

| Permission | What it is for |
|---|---|
| **Alarms & Reminders** | Lets [Tasks](tasks.md) run at exact times in the background. Without it, scheduled tasks can run late. |
| **Location Access (Precise)** | Lets the app read the name (SSID) of your Wi-Fi network. Tasks use it for Wi-Fi based triggers and conditions. |

Tap **Grant Permission** next to a permission to allow it. If Android does not show a prompt, tap **Open App Settings** and allow it there.

::: tip Wi-Fi names on Android 12 and newer
To read Wi-Fi names, Android needs **Precise** location. When Android asks, select **Precise**. Also make sure **Location (GPS)** is turned on in your Quick Settings.
:::

You can change permissions later in **Settings** > **System & Integration** > **Permissions Manager**.

::: details 🖼️ Screenshot placeholder: `first-launch/02-permissions.png`
The permissions step with both permission cards.
:::

## 3. Working Directory {#working-directory}

Select the folder where Scrolla keeps its settings, database and wallpaper files. The list shows the folders that are available on your device.

::: warning
App-specific folders are private to Scrolla, but **Android deletes them when you uninstall the app**. Make a [backup](backup-restore.md) before you uninstall.
:::

See [Working Directory](configurations/working-directory.md) for more information.

### Restore from Backup (optional)

On the same step you can restore an earlier offline backup:

1. Tap **Select ZIP Backup File**.
2. Select a ZIP file that you made with **Export ZIP** in an earlier installation.
3. The app checks the file. If it is valid, it shows it as **Selected Backup Archive**.

The restore runs when you finish the wizard. If the app shows **Invalid Backup Archive**, the ZIP file is not a Scrolla backup.

::: details 🖼️ Screenshot placeholder: `first-launch/03-working-directory.png`
The working directory list and the "Restore from Backup (Optional)" section.
:::

## 4. Legal statements

Read each document, then tap **Accept & Continue**:

1. Terms and Conditions
2. Privacy Policy
3. Background Location Access (Usage Statement & Rationale). This explains why the app can read your Wi-Fi name in the background.

## 5. Review Configurations

This step shows a summary of your choices:

- Working Directory Path
- Backup File to Restore (if you selected one)
- Location Access and Alarms & Reminders status
- Legal statements that you accepted

If something is wrong, tap **Back** and change it.

## 6. Account Registration (optional)

You can register with a Google Account. You do not need an account to use the app. Tap **Skip Step** to continue without one.

## 7. Setup Completed

The app is ready. Tap **Open Guides & Tutorials** to open this website, or tap **Continue** to start using the app.

Next step: [Quick Start](quick-start.md#step-2-import-wallpapers).
