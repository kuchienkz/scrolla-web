---
icon: shapes
order: 11
date: 2026-11-02
category:
  - Guides
tag:
  - scenes
  - clock
  - text
  - presets
  - visualizer
  - customization
---

# Scenes (Text, Clock, Visualizer, Shapes)

A **scene** puts extra things on top of your live wallpaper: **text** (a clock, the date, your battery level or any words), an **audio visualizer** that moves with your music, and **shapes**. These things are called **components**. Components sit in **layers**, in front of or behind the wallpaper.

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
| **Add** | Adds a **Preset** (for example **Clock**), **Text**, an **Audio visualizer** or a **Shape**. See [Presets](#presets). |
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

## Text and variables {#text}

A text component shows any text. It can also show live values, such as the time or your battery level. These live values are called [variables](variables.md).

To add a clock, tap **Add** > **Presets** > **Clock**. To add your own text, tap **Add** > **Text**.

Tap **Style** to change the text:

| Group | Settings |
|---|---|
| **Text** | The text, and **Uppercase**. |
| **Font** | **Family** (each font shows in its own style), **Font size**, **Weight**, **Italic**, **Same width digits** (numbers do not shift while they change). |
| **Lines** | Alignment, **Line height**, **Letter spacing**. |
| **Color & effects** | **Color**, **Shadow** (color, blur, offset), **Outline** (color, width). |

A text with a **Width** in [Position](#position) wraps its lines to that width. Without a width, it takes the size of its text.

### Insert a variable

1. In the **Text** field, put the cursor where the value must go.
2. Tap **Insert variable** and pick a variable, for example **Time** or **Battery level**.

The variable shows in the field as a code in square brackets, for example `$[time]`. The preview shows the live value at once. A wrong code shows in red, with the reason below it.

All variables, their options and the time and date formats are on the [Variables](variables.md) page.

::: info Clocks from an older version
A digital clock that you made before this version becomes a text component with `$[time]`. It looks the same as before.
:::

## Presets {#presets}

A **preset** is a saved set of components with their settings. Tap **Add** > **Presets** to add one.

- **Built-in presets**: **Clock**, **Clock and date**, **Battery**.
- **Your presets**: open a layer in **Layers**, then tap **Save as preset**. All components of the layer go into the preset. You can give them a [replace group](#replace-groups) at the same time.

Adding a preset adds copies of its components next to the selected component. Later changes to the preset do not change scenes that already use it.

To rename or delete one of your presets, tap **⋮** next to it in the preset list. Built-in presets cannot be changed. Your presets are part of your [backups](backup-restore.md).

## Audio visualizer

The visualizer shows bars that move with the music your phone plays.

::: info Microphone permission
To react to music from any app, the visualizer reads the sound levels of what your phone plays. Android calls this **microphone access**. Nothing is recorded or stored. Without this permission, the visualizer only reacts to video wallpapers with sound.
:::

- **Style**: **Bars** (number, spacing, height, corner radius, color), **Shape** (**Radial**: bars around a circle, its **Diameter** and **Direction**), **Mirror** (vertical, and horizontal **From middle** or **From edge**).
- **Audio**: shows whether the visualizer can hear your music. Tap **Allow** to grant access. Turn on **Test signal** to see the bars move without music (preview only). **Sensitivity** has **Dynamic range**, **Punch**, **Treble boost** and the **Frequency range** (**Full**, **Bass**, **Vocals** or **Treble**). **Calibrate audio sync** lines the bars up with the sound. See [Calibrate audio sync](#calibrate-audio-sync). **When audio cannot be read**: **Hidden** or **Simulated motion**.
- **Animation**: **Fade in**, **Fade out** and **Stay visible through silence**.

### Calibrate audio sync {#calibrate-audio-sync}

Sound takes time to reach your ears. Bluetooth headphones can add almost half a second. Calibration measures this delay and moves the bars to match the sound.

The delay is saved for each output: the phone speaker, and each pair of headphones or speaker. It applies to all visualizers. The app uses the delay of the output that plays.

Open it from the visualizer's **Audio** panel > **Calibrate audio sync**, or from **Settings** > **Playback** > **Audio Visualizer** > **Calibrate Audio Sync**.

1. Connect the output you want to calibrate, and set a comfortable volume.
2. Pause other audio. It disturbs the measurement.
3. Tap **Measure**. A test sound plays for about 20 seconds.
4. The app shows **Measured** and puts the slider there. Watch the bars: they must flash with the clicks.
5. If needed, move the slider, or tap **-** (**Earlier**) and **+** (**Later**). Each step is 5 ms, from -300 to +1000 ms. If you are not sure, choose slightly early: late bars stand out more.
6. Tap **Save**.

- **Could not measure reliably**: turn the volume up, pause other audio and tap **Measure again**. Or set the delay by eye with the slider.
- **The audio output changed**: you connected or disconnected an output during the test. Calibrate the new output, or switch back.
- **No audio access**: without [microphone access](#audio-visualizer), the calibration covers only the sound of video wallpapers.
- **Diagnostics** shows the measured values. Tap **Copy** to add them to a bug report.

::: info Not in backups
Calibration results stay on this phone. They are not part of your [backups](backup-restore.md), because the delay depends on the phone and its audio hardware. After you restore a backup on a new phone, calibrate again.
:::

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
- **Replace group**: hides profile scene components while this wallpaper shows. See [Replace groups](#replace-groups).
- The **⋮** menu has **Remove scene**. For a cloud wallpaper it has **Reset to cloud scene** and **Update cloud scene**. See [Cloud Storage](cloud-storage.md#change-cloud-wallpapers).
- A scene made with **Override Scene** in a playlist applies only in that playlist. **Remove scene** there brings back the wallpaper's own scene.

## Replace groups {#replace-groups}

A **replace group** is a name that you give to components, for example `clock`. While a wallpaper scene shows a component of a group, the profile scene's components of the same group are hidden.

For example: your profile scene has a clock in the group `clock`. One wallpaper has its own clock, also in the group `clock`. While that wallpaper shows, only its own clock shows.

- Set the group in **Style** > **Replace group**. Type a name, or tap one of the names that you already use.
- The **Clock** presets use the group `clock`. A new audio visualizer uses the group `visualizer`.
- In a wallpaper scene, the panel tells you how many profile components the group hides.
- Groups have no effect inside one scene.

## Save and leave

Tap **Save** in the dock. If you go back with unsaved changes, the app asks **Discard changes?**.

Scenes are part of your [backups](backup-restore.md).

::: warning Newer app version
A scene saved by a newer version of the app shows a red notice. The editor shows the default scene and cannot save over it. Update the app.
:::
