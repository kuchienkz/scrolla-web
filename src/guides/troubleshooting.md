---
icon: life-ring
order: 20
date: 2026-10-23
category:
  - Guides
tag:
  - troubleshooting
  - faq
---

# Troubleshooting & FAQ

## The wallpaper does not change or does not move

1. Go to **Settings** > **Engine Control**. Check that it shows **Service Running**. If not, tap **Set Wallpaper**.
2. Check that at least one playlist is **on** (switch on the playlist card) and has wallpapers.
3. Check that you are looking at the right [profile](profiles.md). The Playlists tab title shows the profile you are editing.
4. Tap **Restart Engine**.
5. Open **Settings** > **Advanced** > **Wallpaper Engine Logs** and look for errors.

## The wallpaper does not switch

- Check that automatic switching is not paused on the [Home Screen Widget](home-screen-widget.md).
- Check the **Periodic Switch Interval** of the playlist. `0` turns it off. See [Playlists](playlists.md#playlist-settings).

## The wallpaper does not scroll

- With **CONTAIN** screen fit, the full image is already visible, so there is nothing to scroll. Use **COVER**.
- If the image has the same shape as your screen, there is nothing to scroll. Use a wider or taller image, or use **Zoom** in [Pre-Transform](wallpaper-settings.md#pre-transform).
- Check the Loop animation type. **Static** does not move. Use **Single Axis Scroll**.
- Check the switch timing. With **Max Cycle** or **Fixed Duration**, the wallpaper switches after its cycles. See [Animations](animations.md#single-axis-scroll-settings).
- Check that the scroll animation is not paused on the [Home Screen Widget](home-screen-widget.md).

## The scroll is too fast or too slow

Change **Moving Speed (Pixels/s)** in the Loop animation. See [Animations](animations.md#single-axis-scroll-settings).

## The wallpaper is cut off, too big or in the wrong place

Use [Pre-Transform](wallpaper-settings.md#pre-transform) to zoom, move or rotate it. You can set different values for portrait and landscape.

## The wallpaper stops after I restart my phone

Some phones stop live wallpapers after a restart, or stop apps in the background to save battery.

- Set Scrolla again with **Settings** > **Engine Control** > **Set Wallpaper**.
- In your phone's settings, turn off battery optimization for Scrolla Wallpaper. The name of this setting is different on each phone brand.

## Tasks do not run, or run late

1. Open **Tasks** > **Execution Logs**. Check if the trigger fired, and which precondition stopped the task.
2. Allow **Alarms & Reminders** in **Settings** > **Privacy & Permissions** > **Permissions Manager**.
3. Check that the task is **Enabled** and its **Usage Count** is not used up.
4. Turn off battery optimization for Scrolla Wallpaper.

## Wi-Fi tasks do not work

- Allow **Location Access (Precise)** in **Permissions Manager**.
- Turn on **Location (GPS)** in your Quick Settings. Android needs it to read the Wi-Fi name.
- Check the Wi-Fi name in **Settings** > **Engine Control**. Use exactly that name in the task.

## The lock screen shows the same wallpaper as the home screen

- Turn on a Lock Screen profile in **Configure Profiles**. See [Profiles](profiles.md#use-a-different-wallpaper-on-the-lock-screen).
- Set the live wallpaper for **Home screen and lock screen**.
- Some phones do not allow live wallpapers on the lock screen.

## The phone gets warm or the battery drains fast

- Lower **Frame Rate Limit** to **30 FPS — Balanced** or **15 FPS — Battery saver**.
- Turn off **Enable Video Preloading**.
- Lower **Preload Next Wallpapers**.
- Use images instead of videos, or use the **Static** loop for very big images.
- Turn off **Show Debug Info**.

## The audio visualizer does not move

- Open the visualizer's **Audio** panel in the [Scene Editor](scenes.md#audio-visualizer). It shows whether the visualizer can hear your music.
- If it says there is no audio access, tap **Allow**, or allow **Microphone Access** in **Settings** > **Privacy & Permissions** > **Permissions Manager**.
- The bars stay hidden until music plays. Turn on **Test signal** to check the look without music.
- Some phones give no sound levels for some outputs. Set **When audio cannot be read** to **Simulated motion** to show a generic rhythm instead.

## A video wallpaper has no sound

Video sound is off by default. Turn on **Audio** > **Enabled** in the wallpaper's settings. See [Wallpaper Settings](wallpaper-settings.md#audio).

## Some wallpapers are blurred or hidden

They have the **NSFW** tag. Change **Settings** > **Appearance & Content** > **NSFW Content Visibility**. See [Content Safety Tag](../legals/content-safety-tag.md).

## Cloud wallpapers do not download

- Check your network. If **Cloud Transfer Network** is **Wi-Fi Only**, transfers wait for Wi-Fi.
- Open **Cloud Storage Manager**. If the drive shows **Auth Required** or **Saved Credential Invalid**, tap **Refresh Auth**.
- Open **Transfer & Migration History** > **Transfer Log** to see failed transfers.

## I need more free storage

- Lower **Cloud Cache Persistence Limit** in **Settings** > **Cloud & Storage**.
- Set **Background Cache Eviction** to a small number of days.
- Use **Clear Caches** on wallpapers you do not use often.
- Move wallpapers to the cloud with **Migrate to Cloud**, then **Unsubscribe** the ones you do not need offline.

## Report a bug

This app is still in development. When you find a bug, please email the developer with:

1. **Steps to reproduce**: what you did, step by step, before the problem happened. This is the most important part.
2. **Phone model** and **Android version** (required).
3. **App version**: see **Settings** > **Advanced** > **App Version**.
4. Your launcher or custom ROM, if you use one.
5. Optional: screenshots, and logs from **Wallpaper Engine Logs** or **Execution Logs**. If the developer asks for it, use **Export Database** in **Settings** > **Advanced**.
