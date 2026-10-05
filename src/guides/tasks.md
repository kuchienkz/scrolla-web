---
icon: clock
order: 12
date: 2026-10-05
category:
  - Guides
tag:
  - tasks
  - automation
---

# Tasks

A task changes your wallpaper setup automatically. Each task has three parts:

1. **Triggers**: **when** the task runs. For example, every day at 07:00, or when you connect to your home Wi-Fi.
2. **Preconditions (Guards)**: extra checks. The task runs only if they are all true. For example, only if the phone is charging.
3. **Actions**: **what** the task does. For example, turn on the "Night" playlist.

::: tip Example
"Every weekday at 22:00, if the phone is charging, switch to my Night playlist."
:::

::: warning Permissions
For exact times, allow **Alarms & Reminders**. For Wi-Fi names, allow **Location Access (Precise)** and turn on Location (GPS). See **Settings** > **System & Integration** > **Permissions Manager**.
:::

## Create a task

1. Tap **Tasks** in the bottom bar.
2. Tap **New Task**.
3. Fill in **Basic Info** (see below).
4. Tap **Add Trigger** and set at least one trigger.
5. Optional: tap **Add Precondition** to add checks.
6. Tap **Add Action** and set at least one action.
7. Tap **Save**.

The app checks the task before it saves. For example, it shows **No Actions Defined** if you forgot the action, or **Missing Playlist** if an action has no playlist.

::: details 🖼️ Screenshot placeholder: `tasks/01-create-task.png`
The Create Task page with Basic Info, Triggers, Preconditions and Actions sections.
:::

## Basic Info

| Setting | What it does |
|---|---|
| **Task Name / Summary** | A name with at least 2 characters. Each name must be unique. |
| **Folder** | Put the task in a folder, or in **Root**. |
| **Assigned Profile** | The [profile](profiles.md) the task belongs to, or **All Profiles (Shared)**. |
| **Enabled** | Turn the task on or off. |
| **Recurring** | The task can run again and again. |
| **Usage Count (0 = unlimited)** | Run the task only this many times. `0` means no limit. |

## Triggers

### Cron (time) trigger

Runs the task at set times. Use the helper tabs:

- **Weekly**: select **Everyday** or **Select Days**, then set the **Time of Day**.
- **Monthly**: select **Days of Month**, then set the time.
- **Manual**: write a cron expression yourself.

In **Manual** mode, the format is:

```
second  minute  hour  day-of-month  month  day-of-week  year
```

Tap **Validate & Apply** to check the expression. If you are not sure, use the **Weekly** or **Monthly** helper and look at the expression it makes.

::: details 🖼️ Screenshot placeholder: `tasks/02-cron-weekly.png`
The Cron editor on the Weekly tab with some days and a time selected.
:::

### Network trigger

Runs the task when your network changes.

| Setting | Options |
|---|---|
| **Network Type** | **Any**, **WiFi** or **Mobile Data**. |
| **WiFi Name (SSID)** | Leave empty for any Wi-Fi. Enter a name to match only that network. |
| **Airplane Mode** | **Don't Care**, **Airplane Mode ON** or **Airplane Mode OFF**. |
| **Trigger** | **On Match**: run when the condition becomes true (for example, you connect). **On Unmatch**: run when it becomes false (for example, you disconnect). |

::: tip
To do something when you **arrive** home, use **On Match** with your home Wi-Fi name. To do something when you **leave**, make a second task with **On Unmatch**.
:::

## Preconditions (Guards)

Preconditions are checked when a trigger fires. If one is false, the actions do not run.

| Precondition | Checks |
|---|---|
| **Network State / SSID** | Network type, Wi-Fi name (**SSID ==**, **SSID !=** or **Contains**) and Airplane mode. |
| **Screen State (Locked/Unlocked)** | **Device is Locked**, **Device is Unlocked**, **Screen is Turned Off** or **Screen is Turned On**. |
| **Battery & Power** | Battery level range and charging state: **Any (Charging or Battery)**, **Must be Charging / Plugged in** or **Must NOT be Charging (On Battery)**. |
| **Active Playlist** | A playlist **Must Be Active** or **Must NOT Be Active**. |
| **Time Window & Days** | A time range and the days of the week. Tap the day buttons to toggle them. |
| **Active Profile** | A profile **Must Be Active** or **Must NOT Be Active**. |

## Actions

| Action | What it does |
|---|---|
| **Activate Playlist** | Changes which playlists are active. **Action Mode**: **Switch to Playlist** (turn on only these playlists), **Enable Playlist** (turn these on too) or **Disable Playlist**. Tap **Select Playlists...** to select them. |
| **Activate Lockscreen Playlist** | The same, for the lock screen [profile](profiles.md). |
| **Next Wallpaper** | Switches to the next wallpaper in the active playlist. |
| **Activate Task** | Controls another task: **Execute Task**, **Enable Task** or **Disable Task**. |
| **Set Image Wallpaper** | Sets a normal (not live) image wallpaper from a file path. |

You can add more than one action. They run in order.

## The task list

- Each task card shows the next time it will run, for example **Next: ...**, or **No next occurrence**.
- Tap the card menu to **Edit**, **Duplicate** or **Delete** a task.
- Long-press tasks to select several. Then use **Bulk Actions** > **Set Profile** or **Move to Folder**.
- Tap **Validate tasks** to check all tasks for problems.

::: details 🖼️ Screenshot placeholder: `tasks/03-task-list.png`
The Tasks tab with some task cards and their next run time.
:::

## Execution Logs

To see what your tasks did, tap **Execution Logs** on the Tasks tab.

- Each entry shows the task, the time and the result.
- Filter by **Status** and **Type** (**Action**, **Trigger** or **Precondition**), or by one task.
- Tap an entry to see details: **Message**, **Trigger Type**, **Condition Details** and **Error & Cause**.
- Tap **Clear Logs** to delete all logs.

The app keeps logs for 7 days.

::: tip Task did not run?
Open **Execution Logs** first. It shows whether the trigger fired and which precondition stopped the task.
:::

## Example recipes

### Night wallpapers at 22:00, day wallpapers at 07:00

1. Create a playlist "Night" and a playlist "Day".
2. Task 1: **Cron**, Weekly, Everyday, 22:00. Action: **Activate Playlist**, **Switch to Playlist**, "Night".
3. Task 2: **Cron**, Weekly, Everyday, 07:00. Action: **Activate Playlist**, **Switch to Playlist**, "Day".

### New wallpaper at 23:00, only while charging

1. Trigger: **Cron**, Weekly, Everyday, 23:00.
2. Precondition: **Battery & Power**, **Must be Charging / Plugged in**.
3. Action: **Next Wallpaper**.

::: info
To change the wallpaper at a fixed interval, the **Periodic Switch Interval** in [playlist settings](playlists.md#playlist-settings) is simpler than a task.
:::

### Work wallpapers on office Wi-Fi

1. Trigger: **Network**, WiFi, SSID "Office-WiFi", **On Match**.
2. Action: **Activate Playlist**, **Switch to Playlist**, "Work".
3. Make a second task with **On Unmatch** that switches back to your normal playlist.
