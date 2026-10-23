---
icon: shapes
order: 11
date: 2026-10-23
category:
  - Guides
tag:
  - scenes
  - clock
  - visualizer
  - customization
---

# Scenes (Clock, Visualizer, Shapes)

A **scene** puts extra things on top of your live wallpaper: a **digital clock**, an **audio visualizer** that moves with your music, and **shapes**. These things are called **components**. Components sit in **layers**, in front of or behind the wallpaper.

There are two kinds of scene:

| Scene | Where it shows | Where to edit it |
|---|---|---|
| **Profile scene** | Around every wallpaper of a [profile](profiles.md). | **Settings** > **Playback** > **Scene** |
| **Wallpaper scene** | Only while one wallpaper is on screen. | The wallpaper editor > **Wallpaper scene** |

::: tip Example
Put a big clock in the profile scene, so it is always there. Give one sunset picture a wallpaper scene with a thin shape that frames the sun.
:::

## Open the Scene Editor

- **Profile scene**: tap **Settings** in the bottom bar, then **Playback** > **Scene**. You edit the scene of the profile that you selected in the profile panel. See [Profiles](profiles.md).
- **Wallpaper scene**: long-press a wallpaper in your library, tap **Configure**, then tap **Wallpaper scene**. A new import gets this option after you save it.
- **Wallpaper scene in one playlist**: open the playlist, long-press the wallpaper, tap **Override Config**, then tap **Override Scene**. See [Playlists](playlists.md#wallpapers-tab).

The editor shows a live preview of your screen. The preview is drawn by the real wallpaper engine, so it looks the same as your live wallpaper.

::: details 🖼️ Screenshot placeholder: `scenes/01-scene-editor.png`
The Scene Editor with a clock on the preview and the dock at the bottom.
:::

## The dock

The dock is the button bar at the bottom of the editor (on the right side in landscape). Its buttons change with what you select.

**Nothing selected:**

| Button | What it does |
|---|---|
| **Layers** | Opens the list of layers and components. |
| **Add** | Adds a **Digital clock**, an **Audio visualizer** or a **Shape**. |
| **Preview wallpaper** | Picks another library wallpaper to preview the scene with. Profile scenes only. |
| **Play** / **Pause** | Plays or pauses a video or animated preview wallpaper. |
| **Show the whole wallpaper** | Zooms out to show the whole wallpaper, with your screen as a box. Wallpaper scenes only. |
| **Orientation** | Previews the scene in **Portrait** or **Landscape**. |

**Component selected:** **Position**, **Style**, **Layer** (move it to another layer) and **Delete**. A visualizer also has **Audio** and **Animation**.

On the right side of the dock: **Undo**, **Redo** and **Save**. Changes apply only after you tap **Save**.

## Select and edit components

- **Tap** a component on the preview to select it. A moving dashed line shows the selection.
- **Tap empty space** to deselect.
- **Long-press empty space** to hide the dock and panels, so you see the full screen. Tap again to show them.

Settings open in a panel. Settings are in groups; tap a group to open it.

If you delete a component by mistake, tap **Undo** in the message at the bottom.

## Layers

Tap **Layers** in the dock. Here you can:

- drag layers to change their order (top of the list = front),
- show or hide a layer, and change its opacity,
- delete a layer, or tap **Add layer**,
- tap a component to select it.

The **Wallpaper** row is your wallpaper. You cannot select or delete it. Put components in a layer above it to show them in front of the wallpaper.

## Position

Tap **Position** to place the selected component.

- **Docked**: the component sticks to one screen edge (**Top**, **Bottom**, **Left** or **Right**) and fills that edge. Set its **Thickness**.
- **Custom**: you set the **Anchor** point, **Offset X** / **Offset Y**, and **Width** / **Height**.

Lengths use **dp** (a fixed size) or **%** (a part of the screen). Tap the unit to switch.

In a wallpaper scene, **Relative to** decides what the position follows:

- **Screen**: the component stays at the same place on your screen.
- **Media**: the component sticks to the picture, and moves with it when the wallpaper scrolls or zooms.

The **Transform** group has **Zoom**, **Offset X** / **Offset Y**, **Rotation** and the flips.

### Free transform

For direct editing on the preview, tap **Position** > **Free transform**. The dock hides and the preview fills the screen.

- **Drag** the component with one finger to move it. It snaps to the screen center lines and edges.
- **Pinch** to zoom and **twist** to rotate it (rotation snaps to right angles).
- Drag a **corner handle** to scale it, or the **round handle on top** to rotate it.
- A docked component moves to the nearest screen edge when you let go.

The bar at the top has **Confirm**, **Discard**, **Flip horizontal**, **Flip vertical**, **Undo**, **Redo** and **Fine-tune**. **Fine-tune** opens a small panel with exact values and 1 dp arrows. You can move and resize that panel.

::: tip Wallpaper scenes: two fingers move the wallpaper
In a wallpaper scene, **two fingers** move the wallpaper picture instead of zooming the component. Use it to reach the parts of the picture that are off screen, then drag the component there with one finger. This preview move is not saved.
:::

### Portrait and landscape

Tap **Orientation** in the dock to preview the other orientation.

By default a component uses the same position in both orientations. To give it its own position in landscape, open **Position** > **Orientation** and turn on **Own landscape layout**. Use **Copy layout** and **Paste** to copy a position between components or orientations. In the dock, **Orientation** > **Copy all layouts to landscape** (or **to portrait**) copies every component at once.

## Digital clock

Tap **Style** to change the clock:

| Setting | What it does |
|---|---|
| **Show seconds** | Adds seconds. |
| **System** / **12-hour** / **24-hour** | The time format. **System** follows your phone. |
| **Font size**, **Weight** | The size and thickness of the digits. |
| **Shadow** | A soft shadow, so the clock stays readable on light pictures. |
| **Color** | The color, with transparency. |

## Audio visualizer

The visualizer shows bars that move with the music your phone plays.

::: info Microphone permission
To react to music from any app, the visualizer reads the sound levels of what your phone plays. Android calls this **microphone access**. Nothing is recorded or stored. Without this permission, the visualizer only reacts to video wallpapers with sound.
:::

- **Style**: **Bars** (number, spacing, height, corner radius, color), **Shape** (**Radial**: bars around a circle, its **Diameter** and **Direction**), **Mirror** (vertical, and horizontal **From middle** or **From edge**).
- **Audio**: shows whether the visualizer can hear your music. Tap **Allow** to grant access. Turn on **Test signal** to see the bars move without music (preview only). **Sensitivity** has **Dynamic range**, **Punch**, **Treble boost** and the **Frequency range** (**Full**, **Bass**, **Vocals** or **Treble**). **Sync** sets a delay, for example for Bluetooth headphones. **When audio cannot be read**: **Hidden** or **Simulated motion**.
- **Animation**: **Fade in**, **Fade out** and **Stay visible through silence**.

## Shapes

Shapes are flat figures: triangles, rectangles, stars, circles, or your own.

- **Shape**: tap a preset (**Triangle**, **Rectangle**, **Pentagon**, **Hexagon**, **Star** or **Circle**).
- **Fill**: turn the fill on or off, and set its color. When the fill is off, the shape shows only its border. A border is added for you if it had none.
- **Border**: **Thickness** and color. The border is drawn inside the shape.
- **Corners**: **Radius** rounds the corners between straight sides.

### Edit points

To draw your own shape, open **Free transform** and tap **Edit points**.

- **Drag a point** to move it. You can drag it outside the box. The box grows or shrinks to fit the shape.
- **Tap a small dot** between two points to add a point.
- **Long-press a point** to delete it. A shape needs at least 3 points.
- Tap a point to select it. Then use **Corner** (sharp point), **Curve** (smooth point with two handles), **Mirror handles** and **Delete point**.

## Wallpaper scenes

A wallpaper scene belongs to one wallpaper. It comes and goes with that wallpaper.

- The profile scene shows faded in the preview, so you can place things around it.
- **Style** > **Overwrite same component**: while this wallpaper is shown, the profile scene's components of the same kind are hidden. For example, a wallpaper with its own clock hides the profile clock.
- The **⋮** menu has **Remove scene**. For a cloud wallpaper it has **Reset to cloud scene** and **Update cloud scene**. See [Cloud Storage](cloud-storage.md#change-cloud-wallpapers).
- A scene made with **Override Scene** in a playlist applies only in that playlist. **Remove scene** there brings back the wallpaper's own scene.

## Save and leave

Tap **Save** in the dock. If you go back with unsaved changes, the app asks **Discard changes?**.

Scenes are part of your [backups](backup-restore.md).

::: warning Newer app version
A scene saved by a newer version of the app shows a red notice. The editor shows the default scene and cannot save over it. Update the app.
:::
