---
icon: code
order: 11.5
date: 2026-11-02
category:
  - Guides
tag:
  - variables
  - text
  - clock
  - scenes
---

# Variables

A **variable** is a live value from your phone, such as the time, the date or the battery level. Put a variable in a [text component](scenes.md#text), and the text changes on its own when the value changes.

A variable shows as a short code in square brackets, for example `$[time]`. On the wallpaper, the code is replaced by its value, for example **14:05**.

## Insert a variable

1. Open the [Scene Editor](scenes.md#open-the-scene-editor) and select a text component.
2. Tap **Style**. In the **Text** field, put the cursor where the value must go.
3. Tap **Insert variable**.
4. Pick a variable. The list shows its current value. If the variable has options, set them and tap **Insert**.

The code goes into the text at the cursor. The preview shows the live value at once.

::: details 🖼️ Screenshot placeholder: `variables/01-insert-variable.png`
The Insert variable list with the Time, Battery and Network groups.
:::

## All variables

| Variable | Code | Shows | Options |
|---|---|---|---|
| **Time** | `$[time]` | The time. | [format](#time-and-date-formats), seconds |
| **Date** | `$[date]` | The date. | [format](#time-and-date-formats) |
| **AM / PM** | `$[ampm]` | AM or PM. | |
| **Battery level** | `$[battery.level]` | The battery level, from 0 to 100. | |
| **Charging** | `$[battery.charging]` | **Charging** or **Not charging**. | on, off |
| **Volume** | `$[volume]` | The volume, from 0 to 100. | stream |
| **Network type** | `$[network.type]` | **Wi-Fi**, **Mobile**, **Ethernet**, **VPN** or **Offline**. | |
| **Network name** | `$[network.name]` | The Wi-Fi name, or the mobile carrier. | |
| **Airplane mode** | `$[airplane]` | **On** or **Off**. | on, off |
| **Screen locked** | `$[screen.locked]` | **Yes** or **No**. | on, off |
| **Screen on** | `$[screen.on]` | **Yes** or **No**. | on, off |

Every variable also has the option **Text when unavailable** (`fallback`): the text that shows when the value cannot be read. It is empty by default.

## Options

Options change what a variable shows. In the **Insert variable** list, tap a variable with options to set them. In the code, options go in round brackets, as `name:value`, separated by commas:

```
$[time(format:"h:mm a")]
$[battery.charging(on:"⚡", off:"")]
$[volume(stream:"alarm", fallback:"-")]
```

| Option | Variables | What it does |
|---|---|---|
| **format** | Time, Date | The pattern of the time or date. See [Time and date formats](#time-and-date-formats). |
| **seconds** | Time | `true` adds the seconds to the **System 12 / 24 h** format. |
| **on**, **off** | Charging, Airplane mode, Screen locked, Screen on | The text for each state. |
| **stream** | Volume | `"media"` (default), `"ring"`, `"alarm"` or `"notification"`. |
| **fallback** | All | The text when the value cannot be read. |

Text values go in double quotes. To put a quote in the text, write `\"`. To write a literal `$[` in your text, type `$$[`.

## Time and date formats {#time-and-date-formats}

The **Insert variable** dialog offers common formats. You can also type your own pattern with these letters:

| Letters | Meaning | Example |
|---|---|---|
| `HH` | Hour, 00 to 23 | `14` |
| `h` / `hh` | Hour, 1 to 12 / 01 to 12 | `2` / `02` |
| `mm` | Minutes | `05` |
| `ss` | Seconds | `09` |
| `a` | AM or PM | `PM` |
| `EEE` / `EEEE` | Day of the week, short / long | `Mon` / `Monday` |
| `d` / `dd` | Day of the month | `2` / `02` |
| `MMM` / `MMMM` / `MM` | Month, short / long / number | `Nov` / `November` / `11` |
| `yyyy` | Year | `2026` |

Other characters, such as `:`, `,` and spaces, show as they are. To show letters as text, put them in single quotes: `'at' HH:mm` shows **at 14:05**.

- **Time** without a format follows your phone's **12 / 24-hour** setting.
- **Date** without a format shows the short date, for example **Mon, 2 Nov**.
- Names of days and months follow your phone's language.

## Examples

| Text | Shows |
|---|---|
| `$[time]` | **14:05** |
| `$[time(format:"h:mm")] $[ampm]` | **2:05 PM** |
| `$[date(format:"EEEE, d MMMM")]` | **Monday, 2 November** |
| `Battery $[battery.level]%$[battery.charging(on:" ⚡", off:"")]` | **Battery 85% ⚡** while charging |
| `$[network.type] · $[network.name(fallback:"no network")]` | **Wi-Fi · Home** |
| `Volume $[volume]%` | **Volume 40%** |

## When values update

The text changes as soon as the value changes:

- **Time** and **Date**: every minute, or every second when the format shows seconds. Also right after you change the time, the time zone or the 12 / 24-hour setting.
- **Battery**, **Volume**, **Network** and **Airplane mode**: when they change.

While the wallpaper is not visible, for example inside another app, Scrolla does not follow the values. This saves battery. The text is up to date again when the wallpaper shows.

## Permissions

Only **Network name** needs a permission: Android gives the Wi-Fi name only to apps with **location access**, and only while location is on. Your location is never read or stored.

Without that access, **Network name** is greyed out in the list, with the reason. Tap **Allow** to open the **Permissions Manager**. When you come back, the variable is available. If you take the permission away later, the wallpaper shows the **Text when unavailable** of the variable.

## Mistakes in a code

A code that Scrolla cannot read shows in **red** in the **Text** field, with the reason below it:

- **Unknown variable**: the name is wrong, for example `$[battry.level]`.
- **Unknown argument**: the option name is wrong.
- **Invalid value**: the option has a wrong value, for example `stream:"bass"`.
- **Cannot read**: the brackets or quotes are not complete.

On the wallpaper, a wrong code shows exactly as you typed it, so you can see what to fix.
