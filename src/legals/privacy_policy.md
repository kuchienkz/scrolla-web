---
icon: pen-to-square
date: 2026-10-23
category:
  - Legal
tag:
  - privacy
  - data
  - safety
---

# Privacy Policy

**Last updated: October 23, 2026**

This Privacy Policy explains what happens to your information when you use the **Scrolla Wallpaper** app for Android (the "App"). Please read it together with the [Terms and Conditions](terms_conditions.md).

## Who I am

Scrolla Wallpaper is made by **Kuchienkz** ("I", "me", "the developer"), one independent developer. There is no company and no team behind the App. I am the person responsible for your information under this policy.

Contact: **wahyupamengas.developer@gmail.com**

## The short version

- The App is built to work **offline, on your own device**. Your wallpapers, playlists, tags, tasks, scenes and settings stay on your device. I never receive them.
- I **do not sell** your information, and I do not use it to build advertising profiles.
- Some information leaves your device only in these cases:
  1. **Crash and error reports**, so I can fix bugs (Sentry). You can send less, or nothing, with the **Telemetry** setting.
  2. **Advertising**, shown by Google AdMob, with your consent where the law requires it. You can ask for non-personalized ads.
  3. **An optional account**, if you choose to sign in with Google.
  4. **Services you connect yourself**: your Google Drive, and any Custom Repository website you add.
- You can use the App without an account.

The sections below explain each case.

## Information that stays on your device

The App stores these things **only on your device**, in the folder you choose as the Working Directory and in the App's private storage:

- the images and videos you import, and their tags and settings,
- your playlists, tasks, profiles, scenes, themes and preferences,
- task and engine logs (kept for a few days),
- keys or passwords you enter for a Custom Repository, encrypted with a key that never leaves your device.

I cannot see, access or recover any of this. If you uninstall the App, Android may delete it. Make a backup first (see [Backup & Restore](../guides/backup-restore.md)).

## Information that leaves your device

### 1. Crash and error reports (Sentry)

When the App crashes or hits an error, it can send a report to **Sentry**, a service that I use to find and fix bugs. You choose how much it sends with the **Telemetry** setting, in the first-launch setup and in **Settings** > **Privacy & Permissions** > **Telemetry**:

| | Default | Minimal | Off |
|---|---|---|---|
| Error messages and where in the code they happened | Yes | Yes | No |
| Device model, Android version, App version | Yes | Yes | No |
| Recent App events before an error (screen names, wallpaper engine log lines) | Yes | Yes | No |
| The buttons you tapped before an error | Yes | No | No |
| Your IP address | Yes | No | No |
| A screenshot and a description of the App screen at the error | Yes | No | No |
| A replay of recent App screens (some sessions, and sessions with an error) | Yes | No | No |
| Performance data, App logs, session counts | Yes | No | No |

**Default** is on until you change it. With **Off**, the App sends nothing to Sentry. Text and images in replays are masked by default, but a screenshot can show what was on the App screen, which may include your wallpapers. With **Minimal**, the App does not attach your IP address to reports.

I use these reports **only** to fix problems and improve stability. They are kept for a limited time and are deleted automatically by Sentry's retention rules. See [Sentry's Privacy Policy](https://sentry.io/privacy/).

### 2. Advertising (Google AdMob) {#advertising}

The free App shows ads from **Google AdMob**. To show and measure ads, and to prevent fraud, Google may collect your device's advertising ID, IP address, approximate location derived from the IP address, device information, and how you interact with ads.

- Where the law requires it (for example in the European Economic Area, the United Kingdom and Switzerland), the App asks for your **consent** before ads are personalized, using Google's consent tool. You can change your choice at any time in **Settings** > **Privacy & Permissions** > **Ad Privacy Options**.
- Turn on **Non-personalized Ads** in **Settings** > **Privacy & Permissions** to ask for ads that are not based on your interests. Ads still show, and Google still receives the information it needs to serve them and to prevent fraud. With **Telemetry** set to **Off**, Non-personalized Ads is always on.
- You can reset or delete your advertising ID in your Android settings.
- Ads are never shown inside the live wallpaper itself.

See [How Google uses information from apps that use its services](https://policies.google.com/technologies/partner-sites).

### 3. Optional account (Google Sign-In and Firebase)

You can sign in with your Google Account. Signing in is **optional**. If you sign in:

- **Google Sign-In** and **Firebase Authentication** confirm who you are.
- **Cloud Firestore** (a Firebase database that I run) stores a small user profile: your account ID, email address, display name and profile photo link, your App limits and unlocked features, and a record of your purchases.

I use this profile only to run your account, apply your purchases and features, and answer support requests. If you sign out, the profile stays until you ask me to delete it (see [Your choices and rights](#your-choices-and-rights)).

### 4. Purchases (Google Play)

Purchases are handled by **Google Play**. I do not receive your payment details. I receive a record of what you bought (product, date, order status) so the App can unlock it.

### 5. Google Drive (if you connect it)

If you connect a Google Drive, the App uploads and downloads your wallpapers, metadata and backups **directly between your device and your own Drive**, with the access you grant. I do not receive this data, and I have no access to your Drive. You can remove the App's access at any time in your [Google Account settings](https://myaccount.google.com/permissions).

### 6. Custom Repositories (if you add one)

If you add a Custom Repository, the App connects **directly** to the website you entered, to search and download pictures. That website receives your requests, your IP address, the App's user agent and the login details you entered for it. That website is run by someone else, under its own privacy policy. I do not receive these requests.

### 7. Links and Google Play Services

When you open a link (for example to this guide or a picture's source page), it opens in your browser or another app, under that website's own policy. The App also relies on **Google Play Services**, which works under [Google's Privacy Policy](https://policies.google.com/privacy).

## Permissions

The App asks only for the permissions below. All of them are optional. You can turn them off at any time in Android settings or in **Settings** > **Privacy & Permissions** > **Permissions Manager**.

| Permission | Why the App uses it | Leaves your device? |
|---|---|---|
| **Location (Precise)** | Android shows the name (SSID) of your Wi-Fi network only to apps with location permission. Tasks use the Wi-Fi name, for example "change the wallpaper when I connect to my home Wi-Fi". The App does **not** read your GPS position. See [Location Access](location_access.md). | No |
| **Nearby Wi-Fi devices** | Same purpose as above, on newer Android versions. | No |
| **Microphone** | The audio visualizer reads the **sound levels** of what your phone is playing, so its bars move with your music. Android calls this "microphone access". Nothing is recorded, stored or sent. | No |
| **Alarms & Reminders** | Lets tasks run at exact times. | No |
| **Notifications** | Shows the progress of cloud transfers and other background work. | No |
| **Storage / media** (older Android versions) | Reads the files you choose to import, and saves exports to your Downloads folder. | No |

## Why I may use your information (legal bases)

If the EU or UK General Data Protection Regulation (GDPR) applies to you, I rely on:

- **your consent** for personalized ads, and for the microphone and location permissions;
- **performing our agreement** (the Terms) to run your optional account and your purchases;
- **my legitimate interest** in keeping the App working and secure, for crash and error reports. You can object at any time by setting **Telemetry** to **Off**.

I am based in Indonesia, so I also follow Indonesia's **Personal Data Protection Law** (Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, "UU PDP"). It allows the same bases: consent, performing an agreement, and legitimate interest. Under the UU PDP you can, among other things, get information about and access to your data, correct it, ask me to delete it, withdraw your consent, and object to or limit its processing. To use these rights, see [Your choices and rights](#your-choices-and-rights). If a data breach affects your information, I will tell you as the UU PDP requires.

## Sharing

I do not sell or rent your information. I share it only:

- with the service providers named above (Sentry, Google AdMob, Google Firebase, Google Play), who process it to provide their service;
- if the law requires it, or to protect the rights and safety of users or of the developer.

These providers may process information in countries other than yours, including the United States, under their own safeguards (such as standard contractual clauses).

## How long information is kept

- Information on your device: until you delete it or uninstall the App.
- Crash and error reports: for a limited time, then deleted automatically by Sentry. Reports sent before you chose **Off** stay until then; to have them deleted sooner, contact me.
- Account profile and purchase records: while your account exists. When you ask me to delete your account, I delete the profile within 30 days. Purchase records may be kept longer where tax or accounting law requires it.
- Advertising data: as described in Google's policies.

## Your choices and rights

- **Use the App without an account.** Most features work without signing in.
- **Control crash reports.** Set **Telemetry** to **Minimal** or **Off** in **Settings** > **Privacy & Permissions**.
- **Control ads.** Turn on **Non-personalized Ads**, change your consent in **Ad Privacy Options**, or reset your advertising ID in Android settings.
- **Control permissions** in Android settings at any time.
- **Remove Google Drive access** in your Google Account settings.
- **Access, correct or delete your data.** Email **wahyupamengas.developer@gmail.com** from the address of your account, with the subject "Data request". I will answer within 30 days. To delete your account, write "Delete my account".
- Depending on where you live (for example under the GDPR, the UK GDPR, the UU PDP, or the California Consumer Privacy Act), you may also have the right to object to or restrict processing, to data portability, and to complain to your local data protection authority.

## Children

The App is **not directed at children**. It is not meant for anyone under 13, or under the minimum age for consent to data processing in your country (for example 16 in some EU countries). Users can import any media they like, so some content in the App may not suit children. I do not knowingly collect information from children. If you believe a child has given me information, contact me and I will delete it.

## Security

I use reasonable measures to protect information: connections to the services above are encrypted, and saved repository keys are encrypted on your device. No method of storage or transfer is 100% secure, so I cannot guarantee absolute security. Keep your device and your Google Account secure.

## Changes to this policy

I may update this policy when the App changes. I will post the new version on this page and change the "Last updated" date. If a change is important, I will also announce it in the App's changelog.

## Contact

Questions or requests about privacy: **wahyupamengas.developer@gmail.com**.
