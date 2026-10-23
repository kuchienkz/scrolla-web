---
icon: location-dot
date: 2026-10-23
category:
  - Legal
tag:
  - privacy
  - location
---

# Location Access: Usage Statement

**Last updated: October 23, 2026**

This statement explains why Scrolla Wallpaper asks for location permission, and what it does with it.

## Short answer

Scrolla Wallpaper uses location permission **only to read the name of the Wi-Fi network you are connected to** (the SSID). It **never** reads your GPS position, your coordinates or your location history. The Wi-Fi name **never leaves your device**.

## Why a wallpaper app needs this

Android shows the Wi-Fi network name only to apps that have location permission, because a Wi-Fi name can hint at where you are. Scrolla Wallpaper needs the name for **Tasks** that you create yourself, for example:

- "When I connect to my home Wi-Fi, switch to my Home playlist."
- "Run this task only when I am connected to Office-WiFi."

## When the Wi-Fi name is read

- **Only while a task uses the Wi-Fi name**: a Network trigger or a Network condition with a Wi-Fi name. If none of your tasks use a Wi-Fi name, the App has no reason to read it.
- **Also while the App is closed.** The live wallpaper runs as an Android wallpaper service, even when the App itself is closed. Your tasks run inside that service, so it can read the Wi-Fi name when your network changes or when a task runs.
- The App reads the Wi-Fi name when the network changes. It does not track your movement.

On Android 12 and newer, select **Precise** location when Android asks, and keep **Location** turned on in Quick Settings. Android does not give the Wi-Fi name otherwise.

## What happens to the Wi-Fi name

- It is used on your device to decide whether a task should run.
- It is shown to you in **Settings** > **Engine Control**, and it can appear in your task logs on your device (kept for 7 days).
- It is **not** sent to the developer or to any other party, and it is **not** used for ads.

## It is optional

Location permission is optional. Without it, everything works except Wi-Fi name triggers and conditions in Tasks. You can allow or remove the permission at any time in **Settings** > **Privacy & Permissions** > **Permissions Manager**, or in your Android settings.

## Questions

Contact the developer at **wahyupamengas.developer@gmail.com**. See also the [Privacy Policy](privacy_policy.md).
