# Findings

## Target observations

No target-device capture has been received as of 2026-11-11.

| ID | Claim | Evidence level | Evidence |
| --- | --- | --- | --- |
| SETUP-001 | Research will use an Android phone; the PC has no Bluetooth adapter. | Owner-reported setup | Project setup discussion |
| SETUP-002 | The Segway app will not be used. | Research constraint | Owner request |
| EXT-001 | ha-ninebot reports F3 support using its Encryption2 implementation. | Reported by another project | See sources |
| F3-001 | Target advertisement fields and GATT layout | Unknown | Capture pending |
| F3-002 | Target authentication requirements | Unknown | Experiment pending |
| F3-003 | Telemetry frame format, field offsets, units, checksums | Unknown | Experiment pending |

## Working hypotheses

An existing Ninebot implementation may provide relevant protocol details, but exact applicability depends on the target's firmware and hardware. Service UUID similarity does not establish compatibility. An encrypted protocol name does not establish that app-free authentication is possible on this unit.

## Next experiment

Run F3-001 using the Android capture procedure. Preserve the raw capture privately and add a reviewed service table with full UUIDs and characteristic properties.

## Change log

- 2026-11-11: Created research structure and Android capture procedure. No hardware findings yet.
