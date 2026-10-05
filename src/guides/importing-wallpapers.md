---
icon: file-import
order: 4
date: 2026-10-05
category:
  - Guides
tag:
  - wallpapers
  - import
---

# Importing Wallpapers

Before you can use an image or video, you import it into Scrolla Wallpaper. The app copies the file into its [Working Directory](configurations/working-directory.md), so you can delete or move the original later.

## Supported files

- **Images**: PNG, JPG/JPEG, BMP, WEBP and GIF.
- **Videos and animations**: MP4, MKV, WEBM and animated GIF.

Images can have any size. Wide and tall images work best, because Scrolla scrolls across them instead of cropping.

## Import wallpapers

1. Tap **Resources** in the bottom bar.
2. Tap the round menu button in the bottom-right corner.
3. Tap **Add Wallpapers**.
4. Select the files. You can select many files at once.
5. The app asks **Check Duplicates?** See [Duplicate check](#duplicate-check) below.
6. The **New Wallpaper(s)** editor opens. Add tags and settings if you want. See [The wallpaper editor](#the-wallpaper-editor).
7. Tap **Save**.

A progress window shows while the app copies the files. Large imports can take some time. Keep the app open until it finishes.

::: details 🖼️ Screenshot placeholder: `import/01-add-wallpapers-menu.png`
The Resources tab with the bottom-right menu open.
:::

## Import wallpapers with metadata files

Some download tools save a JSON "sidecar" file next to each image. The sidecar file contains tags. Scrolla can read these tags for you.

1. On the **Resources** tab, open the bottom-right menu.
2. Tap **Add Wallpapers + Metadata**.
3. Select the media files **and** their JSON files together.
4. Continue as in a normal import.

### How Scrolla matches a JSON file to a wallpaper

For a wallpaper named `sunset.jpg`, Scrolla looks for one of these files:

- `sunset.jpg.json`
- `sunset.json`
- `sunset.info.json`
- `sunset.meta.json`
- `sunset_metadata.json`

It first looks in the files that you selected, then in the same folder as the wallpaper. If you select exactly one wallpaper and one JSON file, Scrolla uses that JSON file.

### What Scrolla reads from the JSON file

- **Tags** from a field such as `tags`, `tag_string`, `tag_string_general`, `keywords`, `categories` or `labels`. A tag list can be a list of words, or one text with commas or spaces between the tags.
- **Settings** from a `configuration` or `config` field, if the file was made by Scrolla.
- **3D mode** from an `is_3d` field.

### Unmapped tags

If the JSON files contain tags that do not exist in your library yet, the app shows **Unmapped Sidecar Tags**:

- **Import Directly**: keeps the tags as plain text on the wallpapers.
- **Map Tags**: opens **Missing Tag Mapping**. For each new tag, select one option:
  - **New**: create it as a new tag in a dataset and category.
  - **Alias**: link it to a tag that already exists, so both names mean the same tag.
  - **Discard**: remove the tag from the imported wallpapers.

  To handle many tags at once, use **Batch Assign All New Tags** and **Apply To All (Create)**. Tap **Confirm & Save** when you are done.

More about tags: [Tags & Datasets](tags-and-datasets.md).

::: details 🖼️ Screenshot placeholder: `import/02-missing-tag-mapping.png`
The Missing Tag Mapping dialog with the New / Alias / Discard options for one tag.
:::

## Duplicate check {#duplicate-check}

When the app asks **Check Duplicates?**, it can compare the new files with your library. It compares the picture content, so it finds copies even if the file names are different.

If it finds duplicates, a list opens. For each pair you can select:

- **Keep Existing (Discard Incoming)**: keep the copy that is already in your library.
- **Keep Incoming (Replace Existing)**: replace the library copy with the new file.
- **Keep Both**: import the new file as an extra copy.

Buttons at the top apply one choice to all pairs: **Keep Existing Wallpapers**, **Keep Incoming Wallpapers** or **Keep All Wallpapers**.

If you discard all new files, the app shows **Import Skip**. Nothing was imported.

## The wallpaper editor {#the-wallpaper-editor}

The editor opens after every import. It also opens when you edit wallpapers later.

| Option | What it does |
|---|---|
| **Edit Tags** | Add or remove tags for this wallpaper. |
| **Copy from...** | Copy the tags of wallpapers that are already in your library. |
| **3D Rendering** | Show this wallpaper as a 360° panorama. Use it only for equirectangular or panorama images and videos. |
| **Override Default Configuration** | Give this wallpaper its own [Wallpaper Settings](wallpaper-settings.md) and [Animations](animations.md). |

### Edit many wallpapers at once

If you import many wallpapers, tap **Switch to Bulk Editor**. In bulk mode, the tags and settings that you set apply to all wallpapers in the import.

- **Add Tag to all...** adds a tag to every wallpaper.
- **Edit Bulk Tags** changes the shared tag list.

::: warning
Switching to the bulk editor resets the tags and settings that you already set for each wallpaper.
:::

::: details 🖼️ Screenshot placeholder: `import/03-wallpaper-editor.png`
The New Wallpaper(s) editor with the tag section, 3D Rendering switch and Override Default Configuration.
:::

To cancel the whole import, tap **Cancel Import**.

## Next steps

- [Managing Your Wallpaper Library](managing-wallpapers.md)
- [Playlists](playlists.md)
