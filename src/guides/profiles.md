---
icon: layer-group
order: 12
date: 2026-10-23
category:
  - Guides
tag:
  - profiles
  - lock-screen
---

# Profiles (Home & Lock Screen)

A profile is a separate set of playlists, tasks and folders, with its own [scene](scenes.md) and app [theme](themes.md). Use profiles to show different wallpapers on your **Home Screen** and your **Lock Screen**, or to keep several setups that you can switch between.

## Default profiles

The app starts with two profiles:

| Profile | Screen | Status |
|---|---|---|
| **Home** | Home Screen | On |
| **Locked** | Lock Screen | Off |

When no Lock Screen profile is on, the lock screen shows the same wallpaper as the home screen.

::: info
To show Scrolla on the lock screen at all, select **Home screen and lock screen** when you set the live wallpaper. Some phones do not allow live wallpapers on the lock screen.
:::

## Which profile am I editing?

The **Playlists** tab title shows the name of the profile you are editing. Playlists, tasks and folders that you create belong to this profile.

To edit another profile:

1. Tap **Profile** in the bottom bar.
2. Tap a profile in the list. It is now marked **Active**.

The app color theme changes to the theme of the profile, so you can see which profile you are in. Change a profile's theme in **Settings** > **Appearance & Content** > **Theme**. See [App Themes](themes.md).

::: details 🖼️ Screenshot placeholder: `profiles/01-profile-panel.png`
The profile panel with Home Screen and Lock Screen sections, one profile marked Active.
:::

::: tip
Selecting a profile in the panel only changes what you **edit**: its playlists, tasks, folders, [scene](scenes.md) and theme. To change which profile **plays** on a screen, turn it on in **Configure Profiles**.
:::

## Use a different wallpaper on the lock screen

1. Tap **Profile** in the bottom bar, then tap **Configure Profiles**.
2. Under **Lock Screen Profiles**, turn on the switch of the **Locked** profile.
3. Go back. Open the profile panel and tap **Locked** to edit it.
4. On the **Playlists** tab, create a playlist, add wallpapers and turn it on.
5. Set the live wallpaper for **Home screen and lock screen** if you did not do it before.

## Configure Profiles

Open it from the profile panel: **Configure Profiles**. It lists **Home Screen Profiles** and **Lock Screen Profiles**.

### Create a profile

1. Tap **Create Profile**.
2. Enter a **Profile Name**.
3. Select the **Location**: **Home Screen** or **Lock Screen**.
4. Select a **Theme**.
5. Tap **Create**.

### Turn a profile on

Use the switch next to the profile. Only **one profile per screen** can be on. When you turn one on, the other profile for that screen turns off.

### Edit or delete a profile

- Tap the **edit** (pencil) icon to change the name and theme.
- Tap the red **delete** icon to delete the profile.

Profiles marked **Default Profile** have no delete icon. You cannot delete them.

### Use Shared Resources

**Use Shared Resources** lets a profile also show playlists, tasks and folders that are assigned to **All Profiles (Shared)**. Turn it off if you want this profile to show only its own items.

::: details 🖼️ Screenshot placeholder: `profiles/02-configure-profiles.png`
The Configure Profiles page with the profile switches.
:::

## Assign playlists and tasks to a profile

- **One playlist**: open it, go to **Settings**, and change **Assigned Profile**.
- **Many playlists or tasks**: long-press to select them, then tap **Bulk Actions** > **Set Profile**.

Select **All Profiles (Shared)** to show the item in every profile that uses shared resources. Shared items show a **Shared** label.

## Switch profiles automatically

Use [Tasks](tasks.md) with the **Active Profile** condition, and the **Activate Lockscreen Playlist** action, to automate your lock screen.
