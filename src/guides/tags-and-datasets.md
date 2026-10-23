---
icon: tags
order: 6
date: 2026-10-23
category:
  - Guides
tag:
  - wallpapers
  - tags
---

# Tags & Datasets

Tags are labels on your wallpapers, for example `landscape`, `night` or `anime`. Use tags to:

- find wallpapers quickly with search and filters,
- build [Dynamic Playlists](dynamic-playlists.md) that fill themselves,
- hide sensitive images with the [NSFW tag](../legals/content-safety-tag.md).

## How tags are organized

| Level | What it is | Example |
|---|---|---|
| **Dataset** | A collection of tags. | "Art Tags", "My Custom Dataset" |
| **Tag Category** | A group of tags inside a dataset. | "CHARACTER", "STYLE", "GENERAL" |
| **Tag** | One label. A tag can have **aliases**, which are other names for the same tag. | `sunset` (alias `dusk`) |

Some datasets, categories and tags are **built-in**. You cannot rename or delete them.

## Add tags to a wallpaper

1. Open the wallpaper editor. It opens after an import. For an existing wallpaper, long-press it in the library and tap **Configure**.
2. Tap **Edit Tags**.
3. In **Select Tags**, type at least 3 letters to search.
4. Tap a tag in **Search Results** to add it. It moves to **Selected Tags**.
5. If the tag does not exist, tap **Add Search Text as New Tag**.
6. Confirm, then tap **Save** in the editor.

::: details 🖼️ Screenshot placeholder: `tags/01-select-tags.png`
The Select Tags dialog with search results and selected tags.
:::

::: tip Copy tags
Tap **Copy from...** to copy all tags from wallpapers that are already in your library, or from the **Clipboard**. To put tags on the clipboard, open a wallpaper full screen and tap **Copy Tags**.
:::

### Required and single-choice categories

A tag category can have rules:

- **Mandatory**: every wallpaper must have at least one tag from this category. The editor marks it as **Required**.
- **Single** (singleton): a wallpaper can have only **one** tag from this category. The editor shows it as **SINGLE SELECT**.

## Browse and edit all tags

Go to **Resources** > **TAGS**. Here you can search, edit and delete tags.

::: warning
When you delete a tag, the app also removes it from all wallpapers.
:::

### Create or edit a tag

In the tag editor (**NEW TAG** or **EDIT TAG**):

- **Tag Label**: the name of the tag.
- **Tag Category**: select a category, or tap **Create New Category**.
- **Tag Description** (optional).

## Datasets

Tap the **dataset button** in the top-right corner of the **Resources** tab to open **Resource Dataset**.

### Create a dataset

1. Tap the button to create a dataset.
2. Enter a **Dataset Name** and an optional **Description**.
3. Optional: set **Tag Extraction JSON Path**. This tells the app where to find tags in sidecar JSON files.
4. Save.

### Manage a dataset

Open a dataset to see its **TAG CATEGORIES** and tags.

- **Import Tags**: import many tags from a JSON file. Tap **Download Tag dataset example** to see the expected format. During import, the **CONFIGURE TAG CATEGORIES** step lets you set each category's name, **View Priority** and rules.
- **View Priority**: categories with a higher priority show first. The [Home Screen Widget](home-screen-widget.md) can show the tags of the categories you select.
- **DELETE THIS DATASET**: deletes the dataset with all its categories and tags.

::: warning
Deleting a category deletes all its tags. Deleting a dataset deletes everything in it. These actions cannot be undone.
:::

::: details 🖼️ Screenshot placeholder: `tags/02-dataset-editor.png`
A dataset opened, with its tag categories and the Import Tags button.
:::
