// Define the interface for both materials and equipment with the same structure
interface Material {
  id: number;
  MatN: string;
  qty: number;
  status: string;
}

interface Equipment {
  id: number;
  EqpmntN: string;
  qty: number;
  status: string;
}
// Correctly annotate the array types with Material[]
export const materialsData: Material[] = [
  { id: 1, MatN: "Photovoltaic Panels", qty: 25, status: "Sambag 1, Cebu City" },
  { id: 2, MatN: "Solar Inverters", qty: 30, status: "Sambag 1, Cebu City" },
  { id: 3, MatN: "Panel Mounting Systems", qty: 35, status: "Sambag 1, Cebu City" },
  { id: 4, MatN: "Energy Storage Batteries", qty: 20, status: "Sambag 1, Cebu City" },
  { id: 5, MatN: "MPPT Charge Controllers", qty: 40, status: "Sambag 1, Cebu City" },
  { id: 6, MatN: "DC/AC Wiring Cables", qty: 50, status: "Sambag 1, Cebu City" },
  { id: 7, MatN: "Solar Combiner Boxes", qty: 15, status: "Sambag 1, Cebu City" },
  { id: 8, MatN: "Grounding Rods & Accessories", qty: 60, status: "Sambag 1, Cebu City" },
  { id: 9, MatN: "Solar Thermal Water Heaters", qty: 10, status: "Sambag 1, Cebu City" },
  { id: 10, MatN: "Backup Battery Chargers", qty: 45, status: "Sambag 1, Cebu City" },
];

export const equipmentData: Equipment[] = [
  { id: 1, EqpmntN: "Solar Panel Installation Kit", qty: 10, status: "Available" },
  { id: 2, EqpmntN: "Digital Multimeter", qty: 15, status: "In Use" },
  { id: 3, EqpmntN: "MC4 Crimping Tool", qty: 20, status: "Available" },
  { id: 4, EqpmntN: "Cable Stripper", qty: 25, status: "Available" },
  { id: 5, EqpmntN: "PV Wire Cutter", qty: 30, status: "Available" },
  { id: 6, EqpmntN: "Battery Lug Crimper", qty: 12, status: "In Maintenance" },
  { id: 7, EqpmntN: "Safety Harness", qty: 50, status: "Available" },
  { id: 8, EqpmntN: "Solar Panel Cleaning Kit", qty: 20, status: "In Use" },
  { id: 9, EqpmntN: "Infrared Thermometer", qty: 10, status: "Available" },
  { id: 10, EqpmntN: "Voltage Tester", qty: 25, status: "Available" },
  { id: 11, EqpmntN: "Torque Wrench", qty: 35, status: "In Use" },
  { id: 12, EqpmntN: "Drill and Driver Set", qty: 40, status: "Available" },
];