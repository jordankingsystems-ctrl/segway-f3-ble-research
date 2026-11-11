// Device picker adapted from tezitec-png/Vexora, MIT © 2026 ignition.
export const SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
export const DEFAULT_SERVICES = [SERVICE_UUID, '6e400001-0000-0000-006e-696e65626f74', '0000180a-0000-1000-8000-00805f9b34fb', '0000180f-0000-1000-8000-00805f9b34fb'];
const NAME_PREFIXES = ['1CG','1CM','1K1','N4G','NBMax','NBG30D','NBSc','MISc','NB','Segway','NINEBOT','Ninebot','N2G','S2','S3','ZT','1TE'];
export function serviceList(text = '') {
  const extra = text.split(/[\s,;]+/).filter(Boolean).map(x => {
    if (/^[0-9a-f]{4}$/i.test(x)) return '0000' + x.toLowerCase() + '-0000-1000-8000-00805f9b34fb';
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x)) throw new Error('Enter 4-digit or full 128-bit service UUIDs, separated by commas.');
    return x.toLowerCase();
  });
  return [...new Set([...DEFAULT_SERVICES, ...extra])];
}
export function requestScooter(bluetooth, anyDevice, services) {
  return bluetooth.requestDevice(anyDevice ? {acceptAllDevices:true, optionalServices:services} : {filters:NAME_PREFIXES.map(namePrefix => ({namePrefix})), optionalServices:services});
}
export function hex(value) {return Array.from(new Uint8Array(value.buffer, value.byteOffset, value.byteLength), x=>x.toString(16).padStart(2,'0')).join(' ');}
export function report(snapshot, events, includeValues = false) {
  return {application:'Vexora Diagnostics',version:1,scope:'Browser-permitted GATT services only; not a complete BLE advertisement capture.',device:'research-device',services:snapshot.map(s=>({uuid:s.uuid,characteristics:s.characteristics.map(c=>({uuid:c.uuid,properties:c.properties,descriptors:c.descriptors,discoveryError:c.discoveryError}))})),events:events.map(e=>({time:e.time,kind:e.kind,uuid:e.uuid,...(includeValues&&e.hex?{hex:e.hex}:{})})),rawValuesIncluded:includeValues};
}
