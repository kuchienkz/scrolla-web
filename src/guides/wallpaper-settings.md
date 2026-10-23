---
icon: sliders
order: 9
date: 2026-10-23
category:
  - Guides
tag:
  - configuration
  - customization
---

# Wallpaper Settings

Wallpaper settings control **how a wallpaper looks** on your screen: its size, background color, position and animation.

## Where settings apply {#where-settings-apply}

You can set wallpaper settings in three places. When a wallpaper plays, the app uses the **most specific** settings that exist:

1. **One wallpaper in one playlist** (most specific). Open the playlist, long-press the wallpaper, tap **Override Config**, then turn on **Override Config** and tap **Save**. These settings apply only when the wallpaper plays from that playlist.
2. **One wallpaper everywhere**. In the wallpaper editor, turn on **Override Default Configuration**.
3. **All wallpapers** (default). Go to **Settings** > **Playback** > **Default Wallpaper Settings**.

If no settings exist at any level, the app uses built-in defaults: **COVER** screen fit and a slow scroll.

::: tip Example
Your default is a slow scroll. One very tall artwork scrolls too slowly. Give only that wallpaper a faster speed with **Override Default Configuration**. All other wallpapers keep the default.
:::

::: info Cloud wallpapers
A cloud wallpaper comes with settings from the cloud. When you change them on step 2, your settings stay on this device until you upload them. See [Change a cloud wallpaper's settings or scene](cloud-storage.md#change-cloud-wallpapers).
:::

::: details 🖼️ Screenshot placeholder: `wallpaper-settings/01-wallpaper-settings-section.png`
The Wallpaper Settings section with Base Color, Screen Fit, Pre-Transform, Animations and Audio.
:::

## Base Color

The color behind the wallpaper. You see it when the image does not cover the full screen, for example with **CONTAIN**, or in transparent areas of PNG images.

## Screen Fit

Screen Fit decides how the app scales the wallpaper to your screen.

| Option | Result |
|---|---|
| **COVER** | The wallpaper fills the whole screen. The longer side extends past the screen edges, and the **scroll animation shows the hidden part**. This is the usual choice. |
| **CONTAIN** | The whole wallpaper is visible. Empty space is filled with the Base Color. |
| **STRETCH** | The wallpaper is stretched to the exact screen size. The picture can look distorted. |

## Pre-Transform {#pre-transform}

Pre-Transform changes the wallpaper **before** it animates. Use it to zoom in, move the picture, rotate it or flip it.

Tap **Pre-Transform** to open the editor.

::: details 🖼️ Screenshot placeholder: `wallpaper-settings/02-pre-transform-editor.png`
The Pre-Transform editor: the screen frame, the wallpaper behind it, and the controls at the bottom.
:::

### How the editor works

The rectangle in the middle is your phone screen. The wallpaper behind it shows exactly where the live wallpaper will place it.

- **Drag** to move the wallpaper (offset), or to move the start point.
- **Pinch** to zoom.
- **Twist** with two fingers to rotate. Rotation snaps to 90°.
- Tap a value to type an exact number.

### Controls

| Control | What it does |
|---|---|
| **Portrait** / **Landscape** | Edit the settings for each screen orientation. They are separate. |
| **Copy from Portrait** / **Copy from Landscape** | Copy the settings from the other orientation. |
| **Scroll start** / **Scroll finish** | Show where the scroll animation starts or ends, so you can check both ends. |
| **Flip horizontally** / **Flip vertically** | Mirror the image. |
| **Rotate -90°** / **Rotate +90°** | Turn the image. |
| **Zoom** | Make the image bigger than the Screen Fit size. |
| **Offset X** / **Offset Y** | Move the image left, right, up or down. |
| **Start point** | Only for one specific wallpaper: select which part of the image is in the center of the screen when the wallpaper starts. Tap **Use animation start position** to go back to the normal start. |
| **Reset This Orientation** | Reset the settings of the orientation you see now. |
| **Restore Initial Values** | Undo all changes since you opened the editor. |

### Preview a wallpaper for default settings

When you edit the **default** settings, there is no specific wallpaper. Tap **Choose Wallpaper** (or **Change**) under **Preview wallpaper** to select one from your library. The preview only helps you see the result. The settings apply to every wallpaper that uses them.

::: info
3D (panorama) wallpapers ignore Pre-Transform.
:::

## Animations

Tap **Animations** to set the Enter, Loop and Exit behavior. See [Animations](animations.md).

## Audio {#audio}

Video wallpapers can play their sound. Tap **Audio** in a Wallpaper Settings section. The settings apply to video wallpapers only.

| Setting | What it does |
|---|---|
| **Silenced** / **Enabled** | Plays the video without or with sound. **Silenced** is the default. |
| **Volume** | The volume, relative to your phone's media volume. |
| **Fade** | The sound fades in while the wallpaper is visible, and fades out when it is not (for example when you open an app). |
| **Silent on background layer** | During a switch to the next wallpaper, the old wallpaper goes silent at once. |

::: tip
The [Home Screen Widget](home-screen-widget.md) can turn the sound of the current video on or off, and change its volume, without changing these settings.
:::

## Loading and Fallback wallpapers {#loading-and-fallback-wallpapers}

Two special wallpapers fill the gaps. Find them in **Settings** > **Playback**, in the **Wallpapers** section:

| Wallpaper | When it shows |
|---|---|
| **Loading Wallpaper** | While wallpapers are being prepared. |
| **Fallback Wallpaper** | When no wallpaper is available. |

Both are **Built-in** at first. Tap one to change it:

- **Choose Media** / **Change Media**: an image or a video of up to 10 MB. **Use Built-in** goes back to the default.
- **Placement**: **Keep Aspect Ratio** (off stretches the media to the screen), **Fit** (**Cover** or **Contain**) and **Align** (also the start of the scroll).
- **Animations**: Enter, Loop and Exit, as in [Animations](animations.md). Automatic (IFTT) rules are not available here.
- **Reset Placement & Animation** goes back to the defaults.

## 3D Renderer Settings

These settings are for wallpapers that use **3D Rendering** (360° panoramas). To use 3D rendering, turn on **3D Rendering** for the wallpaper in the wallpaper editor.

| Setting | What it does |
|---|---|
| **3D Projection Mode** | **Sphere (360°×180°)** for full spherical panoramas. **Cylinder (360° Panorama)** for wide horizontal panoramas. |
| **Auto-Panning** | The view turns slowly around 360°. Select the **Orbit Direction**: **Left → Right** or **Right → Left**. |
| **Gyroscope Tracking** | Look around by moving your phone. Not available while Auto-Panning is on. |
| **Interactive Touch Panning** | Drag with your finger to look around. |

The settings in **Default Wallpaper Settings** apply to all 3D wallpapers. You can change them for one wallpaper or one playlist, the same as other settings.
