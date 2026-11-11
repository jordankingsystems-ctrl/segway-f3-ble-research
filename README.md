# Segway F3 BLE research

Independent research into the Segway F3 Bluetooth Low Energy interface using an Android phone, without the Segway app.

**Status:** research setup. No advertisements, GATT services, authentication exchanges, or telemetry have yet been captured from the target scooter. No protocol compatibility is claimed.

## Start here

- [Android capture procedure](docs/android-capture.md)
- [Findings and open questions](docs/findings.md)
- [Experiment template](docs/experiment-template.md)
- [Sources](docs/sources.md)

## Research approach

1. Identify the owner's scooter by comparing scans with it powered off and on.
2. Record advertisements and enumerate GATT services, characteristics, properties, and descriptors.
3. Determine which data is readable before authentication.
4. Investigate the session protocol using reproducible experiments and attributed prior research.
5. Decode telemetry only when observations support field meanings.

The Android phone is the BLE central. The PC is used for analysis and documentation; it needs no Bluetooth adapter. USB alone does not expose Android's Bluetooth adapter to PC BLE libraries.

Keep the scooter stationary during experiments. Initial discovery does not require arbitrary characteristic writes, firmware updates, or control commands. Notification subscriptions, when tested later, involve a descriptor write and will be recorded explicitly.

## Evidence and publication

Label each claim **observed**, **reported by another project**, **hypothesis**, or **unknown**. Record hardware/region and firmware when available; unknown versions stay unknown.

Raw captures stay local under `private/`. Publish only reviewed excerpts under `evidence/`, with serial numbers, Bluetooth addresses, account data, keys, and unrelated nearby devices removed. Hex payloads can contain identifiers too. Ignoring a file in Git is not a substitute for reviewing what is published.

This is an independent project, unaffiliated with Segway or Ninebot.
