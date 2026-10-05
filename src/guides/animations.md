---
icon: film
order: 10
date: 2026-10-05
category:
  - Guides
tag:
  - configuration
  - animation
---

# Animations

Each wallpaper plays in three parts:

1. **Enter**: how the wallpaper appears.
2. **Loop**: what the wallpaper does while it is on screen. The scroll happens here.
3. **Exit**: how the wallpaper leaves when the next one comes.

Open the animation editor from any **Wallpaper Settings** section: tap **Animations**. See [Wallpaper Settings](wallpaper-settings.md#where-settings-apply) for where settings apply.

At the top of the editor, select a mode:

- **Manual**: one set of Enter, Loop and Exit animations for every wallpaper.
- **IFTT (Auto)**: different animations depending on the wallpaper, for example its shape or file type. See [Automatic rules (IFTT)](#automatic-rules-iftt).

Tap **Save** when you are done. Tap **Restore Initial Values** to undo your changes.

::: details 🖼️ Screenshot placeholder: `animations/01-animation-editor-loop.png`
The Animations editor in Manual mode, on the Loop tab.
:::

## Enter

| Setting | What it does |
|---|---|
| **Animation Types** | **Fade In**, **Slide In** or **Fall Bounce**. You can select more than one. |
| **Randomize Animation Type** | Play a random type from your selection. If it is off, the types play in turn. |
| **Slide-in Properties** | For **Slide In**: the direction the wallpaper comes from. Turn on **Randomize Slide Direction** to use a random direction from your selection. |
| **Wait for Exit Animation** | Wait until the previous wallpaper has finished its exit before this one enters. |
| **Duration Seconds** | How long the enter animation takes. |
| **Easing Mode** | The speed curve: **Linear**, **Ease In**, **Ease Out** or **Ease In Out**. |

## Loop

### Loop types

| Type | What it does |
|---|---|
| **Single Axis Scroll** | Moves the wallpaper from a start position to a finish position. This is the classic Scrolla scroll. |
| **Static** | The wallpaper does not move. |
| **Panorama360** | Shows a 3D panorama. Use it for wallpapers with **3D Rendering** turned on. |

### Single Axis Scroll settings

**Timing**: select one:

- **Moving Speed (Pixels/s)**: the scroll moves at a constant speed. Big images take longer.
- **Fixed Duration**: one scroll always takes the same number of seconds.

**Starting Coordinate** and **Finish Coordinate**: where the scroll starts and ends.

- **Relative Position**: a point such as **Top Left**, **Center** or **Bottom Right**.
- **Offset X (Pixels)** and **Offset Y (Pixels)**: move that point by a number of pixels.

The default scroll goes from **Top Left** to **Bottom Right**. With **COVER** screen fit, the picture only extends past the screen in one direction, so it scrolls along that direction.

**Cycle Behavior**:

- **Max Cycle (0 = Unlimited)**: how many times the scroll repeats. `0` repeats forever.
- **Reverse Animation**: when the scroll reaches the end, it goes back to the start. If this is off, it jumps back to the start.

**Interactive Pan & Zoom**:

- **Enable Pan & Zoom (Opt-in)**: lets you drag and pinch the wallpaper on your home screen while it scrolls.
- **Auto-restore Delay (Seconds)** and **Restore Duration (Seconds)**: after you stop touching it, the wallpaper waits, then moves back smoothly.

::: tip Make the scroll slower or faster
Change **Moving Speed (Pixels/s)**. A lower number is slower. Try values between 20 and 100.
:::

### Static settings

**Timing**:

- **Inherit**: use the normal timing.
- **Forever**: the wallpaper does not end on its own.
- **Custom Duration**: the wallpaper ends after **Max Duration Seconds**.

**Interactive Pan & Zoom**:

- **Enable Pan & Zoom**: drag and pinch the wallpaper on your home screen.
- **Auto-restore Position**: after you stop touching it, the wallpaper moves back to its starting position.

## Exit

| Setting | What it does |
|---|---|
| **Animation Types** | **Fade Out**, **Slide Out**, **Bounce Fly** or **Reverse**. If you select nothing, there is no exit animation. |
| **Randomize Animation Type** | Play a random type from your selection. |
| **Slide-out Properties** | For **Slide Out**: the direction the wallpaper leaves to. |
| **Duration Seconds** | How long the exit animation takes. |
| **Easing Mode** | The speed curve. |

## Automatic rules (IFTT) {#automatic-rules-iftt}

IFTT means "If This, Then That". You make rules such as: **if** the wallpaper is very wide, **then** use a panorama scroll.

The app checks the rules **from top to bottom**. It uses the **first rule that matches**. If no rule matches, it uses **ELSE (Fallback)**.

### Create a rule

1. Select **IFTT (Auto)** at the top of the Animations editor.
2. Tap **Add Rule**. The **Edit IFTT Rule** page opens.
3. Under **IF (Conditions)**, add a condition:
   1. Select a variable, for example **Aspect Ratio**.
   2. Select an operator, for example "greater than".
   3. Enter a value, for example `2.0`.
4. Under **THEN (Animations)**, tap **Configure Animations** and set the animations for this rule.
5. Save the rule.
6. Tap **ELSE (Fallback)** to set the animations for all other wallpapers.
7. Tap **Save**.

::: details 🖼️ Screenshot placeholder: `animations/02-iftt-rule-editor.png`
The Edit IFTT Rule page with one condition and the THEN section.
:::

### Variables you can use

| Variable | Meaning |
|---|---|
| **Width** / **Height** | The size of the wallpaper in pixels. |
| **Width Ratio** / **Height Ratio** | The wallpaper size compared to your screen size. A Width Ratio of `2` means the wallpaper is twice as wide as the screen. |
| **Aspect Ratio** | Width divided by height. More than `1` is wide. Less than `1` is tall. |
| **File Size** | In KB or MB. |
| **Extension** | The file type, for example `mp4` or `png`. |

### AND and OR

- Conditions in the **same group** must **all** be true (AND).
- Use **Add OR Group** for another group. The rule matches if **any** group is true (OR).

### Example rules

| Rule | Condition | Then |
|---|---|---|
| 1 | **Extension** equals `mp4` | Loop: **Static** (let the video play) |
| 2 | **Aspect Ratio** greater than `2.0` | Loop: **Single Axis Scroll**, slow speed |
| ELSE | (no condition) | Your normal animations |
