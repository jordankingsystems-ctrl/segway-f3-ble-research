# Android capture procedure

Use **nRF Connect for Mobile by Nordic Semiconductor** on Android. This is a general BLE inspection tool; the Segway app is not required. Official project and download links: https://github.com/nordicsemi/Android-nRF-Connect

## Experiment F3-001: advertisements and service discovery

1. Keep the scooter stationary and power it off. Enable Bluetooth on the phone and grant nRF Connect the Android permissions it needs for scanning.
2. Scan nearby devices. Power on the scooter and scan again. Compare repeated off/on scans and proximity before identifying the target; a familiar name alone is insufficient.
3. Record the candidate's advertised name, service UUIDs, manufacturer/service data, and RSSI locally. Do not publish the raw name or address if they contain identifying data.
4. Connect to the confirmed target. Let service discovery finish. Record connection success or the exact error.
5. Expand each service and record full UUIDs, characteristic properties, and descriptor UUIDs. Capture screenshots if an export is unavailable.
6. Save or share the session log locally. nRF Connect also supports cloning a remote service layout to its GATT server configuration, which can be exported as XML. Menu labels vary by version. A cloned layout is a schema, not a complete packet capture.
7. Disconnect. Record the phone model, Android version, nRF Connect version, scooter variant/region, and firmware if known.

For this initial experiment, do not use Write, Read all, Enable all notifications, DFU, or imported macros. First review the discovered layout so subsequent requests have a specific purpose.

## What to bring back

- The expanded service and characteristic list (screenshots or XML).
- The connection/service-discovery log.
- Whether power cycling consistently identified the same target.
- Any authentication or bonding prompt, without entering or publishing secrets.

## Subsequent experiments

Read selected documented standard characteristics individually. Record request, response, and errors. For custom UART-like services, properties alone do not establish protocol or encryption. Review each proposed request before sending it.

Android Bluetooth HCI snoop logging can later help capture this phone's own BLE connection, subject to phone/OS support. It is not an over-the-air sniffer for arbitrary other connections. Treat any full bug report or HCI capture as private because it may contain unrelated device activity.
