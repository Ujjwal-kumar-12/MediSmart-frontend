import type { Hospital } from "../types.ts";

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: "City Hospital",
    address: "123 Main Street, Delhi",
    phone: "+91 9876543210",
    rating: 4.5,
    distance: "2 km",
    image: "https://via.placeholder.com/100x100.png?text=City+Hospital",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
  },
  {
    id: 2,
    name: "Apollo Clinic",
    address: "456 Park Avenue, Mumbai",
    phone: "+91 9123456789",
    rating: 4.7,
    distance: "5 km",
    image: "https://via.placeholder.com/100x100.png?text=Apollo+Clinic",
    specialties: ["Pediatrics", "Dermatology", "General Medicine"],
  },
];
