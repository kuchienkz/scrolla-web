---
icon: person
order: 11.7
date: 2026-11-24
category:
  - Guides
tag:
  - avatar
  - vrm
  - scenes
  - motion sets
---

# Avatars (VRM models and motions)

An **avatar** is a 3D character on your wallpaper. It breathes, blinks, looks at you, and moves when you touch it or when something happens on your phone. Avatars use two kinds of files:

| File | What it is | Where to get one |
|---|---|---|
| **`.vrm`** | A **model**: the character itself. | Make one in VRoid Studio, or download one, for example from VRoid Hub. Check that its license allows your use. |
| **`.vrma`** | A **motion**: a wave, a dance, a nod. | Export one from a VRM animation tool, or download one. The app comes with one default idle motion. |

An avatar is a [scene](scenes.md) component, like text or a clock. You can put one in a profile scene or in the scene of one wallpaper.

## The avatar library

Open **Resources** and tap the **Avatars** card. The library has three tabs:

- **Models**: your `.vrm` files.
- **Motions**: your `.vrma` files and the built-in default idle motion.
- **Sets**: your [motion sets](#motion-sets).

Tap **Import** to add `.vrm` or `.vrma` files. A file can be up to 200 MB. Files that use Draco or meshopt compression can't be read; export them again without compression.

- Tap an item to see who made it, its version and, for a model, **Try motions**. You can also **Rename** it, move it to a folder, or delete it.
- Long-press items to select several. Then move them to a folder or delete them together.
- An item that a scene or a task still uses can't be deleted. The app lists where it's used, so you can remove it there first.
- **Built in** items ship with the app. **From the cloud** items came with a [cloud wallpaper](cloud-storage.md) and go away with it.

## Add an avatar

There are two ways:

- **A new VRM wallpaper**: on the **Resources** tab, tap the menu button, then **Create VRM wallpaper**. You get a wallpaper of one color with an avatar on it.
- **Into a scene**: in the [Scene Editor](scenes.md#open-the-scene-editor), tap **Add** > **Avatar**.

Select the avatar and tap **Style**. Under **Model**, tap **Choose a model**.

## Avatar settings

| Group | Settings |
|---|---|
| **Model** | The `.vrm` model. **Not on this phone** means the file is missing: import it again. |
| **Motion set** | The motions the avatar plays and when. See [Motion sets](#motion-sets). |
| **Camera** | **Full body**, **Upper body** or **Face**, then **Turn**, **Tilt**, **Zoom** and **Field of view**. **Keep inside the box** cuts off any part of the model that reaches past its box. It's off by default, so a turn, a zoom or a wide motion can go past the box. |
| **Light** | **Light from the side**, **Light from above**, **Brightness**, **Shadow lightness**, the light color, and **Outline**. |
| **Hair and clothes** | **Hair and clothes move** (the model's own physics; turn it off to save battery), **Hair and clothes speed**, and **Follow phone tilt**. |
| **Touch and music** | **Looks at**: **Straight ahead**, **You** or **Your touch**. **Drag to turn**: drag across the avatar to see it from another side. **Move to music**: the mouth and head move with music playing on the phone. |
| **Performance** | **Frame rate limit**, **Resolution**, and **Pause when idle**, which stops the avatar after a while without a touch. |

::: info Microphone permission
**Move to music** reads the sound levels of what your phone plays, as the [audio visualizer](scenes.md#audio-visualizer) does. Android calls this **microphone access**. Nothing is recorded or stored.
:::

While the avatar plays a motion, it stops looking at your touch or at you. The motion's own head and eye movements show as they were made. When the motion ends, the avatar looks again.

## Motion sets {#motion-sets}

A **motion set** decides what your avatar does. It has an **idle motion** (what it does when nothing happens) and **rules**. Each rule has a trigger and one or more motions.

**Gestures** are started by the app or the phone:

| Gesture | When it plays |
|---|---|
| **Avatar appears** | The avatar comes on screen. Pick when it counts: **You unlock the phone**, **You come back to the wallpaper**, or **The wallpaper switches to this one**. Good for a "hello" wave. |
| **Wallpaper changes** | Before the next wallpaper. The switch waits for the motion, up to 10 seconds. Good for a "goodbye". |
| **Now and then** | Every so often, on its own. Set how often, and whether the motions play in order or at random. |
| **Battery low** | The battery drops under the level you set. Good for a sleepy motion. |
| **Charging** | You plug in the phone. |

**Reactions** are started by you:

| Reaction | When it plays |
|---|---|
| **Touch** | You touch the avatar. Pick **Where** (**Anywhere**, **Head**, **Chest**, **Hips**, **Hands** or **Legs**) and **How** (**Tap**, **Double tap**, **Long press** or **Stroke**). A stroke is a back-and-forth rub, like a head pat. A page swipe doesn't count. |
| **Phone shake** | You shake the phone. |
| **Music playing** | Music plays on the phone. Good for a dance. |

Each rule also has:

- **Motions**: with more than one, a different one plays each time.
- **How it plays**: **Once**, or **While it lasts**. A "while it lasts" rule loops its motion instead of the idle motion, for example a dance for as long as music plays or a sleepy pose while the battery is low.
- **Wait before it plays again**: a pause after the rule plays, so it doesn't repeat too fast.

**Blend between motions** sets how smoothly one motion turns into the next.

::: tip Example
Idle motion: a calm breathing loop. **Avatar appears** (unlock): a wave. **Touch** > **Head** > **Stroke**: a shy motion. **Music playing**, **While it lasts**: a dance. **Wallpaper changes**: a goodbye bow.
:::

### Make and reuse a set

- In the library, open **Sets** and tap **New set**. Give it a **Name** and, if you like, a **Description**.
- In the Scene Editor, open the avatar's **Motion set** group:
  - **Use a saved set**: pick a set, then **Keep in sync** (changes to the set show up here too) or **Copy into this wallpaper** (this wallpaper gets its own copy to change as you like).
  - **Edit motions**: change this avatar's motions. If the avatar follows a set, the app asks first, because editing here makes a copy that stops syncing.
  - **Save as a set**: keeps this avatar's motions in your library.
  - **Stop syncing**: the avatar keeps a copy and no longer follows the set.

When you edit a set in the library, every wallpaper that follows it changes too, also the one on your screen. When you delete a set, each wallpaper that used it keeps its own copy.

Motion sets are free. They are part of your [backups](backup-restore.md).

## Try motions {#try-motions}

In the library, tap a model, then **Try motions**. The page shows the model and a row of motions below it.

- **Tap a motion** to play it.
- **Touch the model** as you would on your wallpaper: it looks at your finger, and the reactions of a motion set play.
- **Drag with two fingers** to turn the model. **Reset view** turns it back to the front.

Tap **Preview settings** to set up the page: **Light**, **Touch and music**, **Hair and clothes**, and **Playback**.

- **Motion set**: play a saved set on the model, to try its rules before you use it. The set's own idle motion and blend time apply. After you play a motion from the row, tap the set's chip at the start of the row to run the set again.
- Without a set, pick an **Idle motion** and **Blend between motions** for the page.
- **Repeat motions**: a motion you pick keeps playing until you pick another.

These settings belong to the page and apply to every model you try there. They never change your wallpapers.

## Play a motion from a task

A [task](tasks.md#actions) can make the avatar move: add the action **Play avatar motion** and choose a motion. Every avatar on the screen plays it once.

## Troubleshooting

- **This file isn't a VRM model or VRMA motion**: the file has another format. Check that it ends in `.vrm` or `.vrma`.
- **This file uses compression Scrolla can't read**: export it again without Draco or meshopt compression.
- **The avatar is cut off at an edge**: turn off **Keep inside the box** under **Camera**, or make the avatar's box bigger.
- **The avatar stands still**: **Pause when idle** may be on. Touch the screen to wake it.
- **A touch reaction doesn't play**: check **Where** and **How** of the rule, and its **Wait before it plays again**. A touch must land on the avatar.
