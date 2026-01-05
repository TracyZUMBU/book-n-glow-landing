export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  firstAppointmentDate: string;
  lastAppointmentDate: string;
  reservationFrequency: number;
  notes: string;
  appointments: Appointment[];
}

export interface Appointment {
  id: string;
  date: string;
  service: string;
  amount: number;
}

export const fakeClients: Client[] = [
  {
    id: "1",
    firstName: "Sophie",
    lastName: "Martin",
    phone: "06 12 34 56 78",
    firstAppointmentDate: "2024-01-15",
    lastAppointmentDate: "2024-12-10",
    reservationFrequency: 2.1,
    notes: "Cliente fidèle, préfère les créneaux du matin.",
    appointments: [
      { id: "a1", date: "2024-12-10", service: "Pose gel", amount: 55 },
      { id: "a2", date: "2024-11-12", service: "Remplissage", amount: 40 },
      { id: "a3", date: "2024-10-08", service: "Pose gel + Nail art", amount: 75 },
      { id: "a4", date: "2024-09-05", service: "Remplissage", amount: 40 },
    ]
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Dubois",
    phone: "06 23 45 67 89",
    firstAppointmentDate: "2024-03-22",
    lastAppointmentDate: "2024-12-08",
    reservationFrequency: 1.5,
    notes: "",
    appointments: [
      { id: "a5", date: "2024-12-08", service: "Manucure classique", amount: 30 },
      { id: "a6", date: "2024-10-20", service: "Pose gel", amount: 55 },
      { id: "a7", date: "2024-08-15", service: "Pose gel", amount: 55 },
    ]
  },
  {
    id: "3",
    firstName: "Camille",
    lastName: "Bernard",
    phone: "06 34 56 78 90",
    firstAppointmentDate: "2024-02-10",
    lastAppointmentDate: "2024-11-28",
    reservationFrequency: 1.8,
    notes: "Allergique à certains produits, vérifier avant chaque pose.",
    appointments: [
      { id: "a8", date: "2024-11-28", service: "Remplissage", amount: 40 },
      { id: "a9", date: "2024-10-15", service: "Pose gel", amount: 55 },
      { id: "a10", date: "2024-09-01", service: "Nail art", amount: 25 },
    ]
  },
  {
    id: "4",
    firstName: "Emma",
    lastName: "Petit",
    phone: "06 45 67 89 01",
    firstAppointmentDate: "2024-05-18",
    lastAppointmentDate: "2024-12-05",
    reservationFrequency: 2.3,
    notes: "Aime les couleurs pastel.",
    appointments: [
      { id: "a11", date: "2024-12-05", service: "Pose gel", amount: 55 },
      { id: "a12", date: "2024-11-01", service: "Pose gel + Nail art", amount: 75 },
      { id: "a13", date: "2024-10-02", service: "Remplissage", amount: 40 },
    ]
  },
  {
    id: "5",
    firstName: "Léa",
    lastName: "Moreau",
    phone: "06 56 78 90 12",
    firstAppointmentDate: "2024-06-01",
    lastAppointmentDate: "2024-11-20",
    reservationFrequency: 1.2,
    notes: "",
    appointments: [
      { id: "a14", date: "2024-11-20", service: "Manucure classique", amount: 30 },
      { id: "a15", date: "2024-09-18", service: "Pose gel", amount: 55 },
    ]
  },
  {
    id: "6",
    firstName: "Chloé",
    lastName: "Laurent",
    phone: "06 67 89 01 23",
    firstAppointmentDate: "2024-01-08",
    lastAppointmentDate: "2024-12-12",
    reservationFrequency: 2.5,
    notes: "Cliente VIP, offrir un soin supplémentaire de temps en temps.",
    appointments: [
      { id: "a16", date: "2024-12-12", service: "Pose gel + Nail art", amount: 75 },
      { id: "a17", date: "2024-11-08", service: "Remplissage", amount: 40 },
      { id: "a18", date: "2024-10-05", service: "Pose gel", amount: 55 },
      { id: "a19", date: "2024-09-02", service: "Remplissage", amount: 40 },
      { id: "a20", date: "2024-08-01", service: "Pose gel", amount: 55 },
    ]
  },
  {
    id: "7",
    firstName: "Julie",
    lastName: "Simon",
    phone: "06 78 90 12 34",
    firstAppointmentDate: "2024-04-12",
    lastAppointmentDate: "2024-10-25",
    reservationFrequency: 1.0,
    notes: "",
    appointments: [
      { id: "a21", date: "2024-10-25", service: "Pose gel", amount: 55 },
      { id: "a22", date: "2024-07-15", service: "Manucure classique", amount: 30 },
    ]
  },
  {
    id: "8",
    firstName: "Laura",
    lastName: "Michel",
    phone: "06 89 01 23 45",
    firstAppointmentDate: "2024-02-28",
    lastAppointmentDate: "2024-12-01",
    reservationFrequency: 1.7,
    notes: "Préfère les créneaux en fin de journée.",
    appointments: [
      { id: "a23", date: "2024-12-01", service: "Remplissage", amount: 40 },
      { id: "a24", date: "2024-10-18", service: "Pose gel", amount: 55 },
      { id: "a25", date: "2024-08-22", service: "Nail art", amount: 25 },
    ]
  },
  {
    id: "9",
    firstName: "Manon",
    lastName: "Garcia",
    phone: "06 90 12 34 56",
    firstAppointmentDate: "2024-07-05",
    lastAppointmentDate: "2024-11-15",
    reservationFrequency: 1.4,
    notes: "",
    appointments: [
      { id: "a26", date: "2024-11-15", service: "Pose gel", amount: 55 },
      { id: "a27", date: "2024-09-10", service: "Pose gel + Nail art", amount: 75 },
    ]
  },
  {
    id: "10",
    firstName: "Clara",
    lastName: "David",
    phone: "06 01 23 45 67",
    firstAppointmentDate: "2024-03-15",
    lastAppointmentDate: "2024-12-08",
    reservationFrequency: 2.0,
    notes: "Toujours ponctuelle.",
    appointments: [
      { id: "a28", date: "2024-12-08", service: "Remplissage", amount: 40 },
      { id: "a29", date: "2024-11-05", service: "Pose gel", amount: 55 },
      { id: "a30", date: "2024-10-01", service: "Remplissage", amount: 40 },
    ]
  },
  {
    id: "11",
    firstName: "Alice",
    lastName: "Bertrand",
    phone: "06 11 22 33 44",
    firstAppointmentDate: "2024-08-20",
    lastAppointmentDate: "2024-11-30",
    reservationFrequency: 1.3,
    notes: "",
    appointments: [
      { id: "a31", date: "2024-11-30", service: "Pose gel", amount: 55 },
      { id: "a32", date: "2024-10-12", service: "Manucure classique", amount: 30 },
    ]
  },
  {
    id: "12",
    firstName: "Inès",
    lastName: "Roux",
    phone: "06 22 33 44 55",
    firstAppointmentDate: "2024-01-25",
    lastAppointmentDate: "2024-12-10",
    reservationFrequency: 2.2,
    notes: "Aime les designs complexes.",
    appointments: [
      { id: "a33", date: "2024-12-10", service: "Pose gel + Nail art", amount: 75 },
      { id: "a34", date: "2024-11-08", service: "Nail art", amount: 25 },
      { id: "a35", date: "2024-10-05", service: "Pose gel", amount: 55 },
      { id: "a36", date: "2024-09-01", service: "Remplissage", amount: 40 },
    ]
  },
  {
    id: "13",
    firstName: "Océane",
    lastName: "Fournier",
    phone: "06 33 44 55 66",
    firstAppointmentDate: "2024-05-10",
    lastAppointmentDate: "2024-10-20",
    reservationFrequency: 0.8,
    notes: "",
    appointments: [
      { id: "a37", date: "2024-10-20", service: "Pose gel", amount: 55 },
      { id: "a38", date: "2024-07-15", service: "Manucure classique", amount: 30 },
    ]
  },
  {
    id: "14",
    firstName: "Pauline",
    lastName: "Girard",
    phone: "06 44 55 66 77",
    firstAppointmentDate: "2024-04-02",
    lastAppointmentDate: "2024-12-05",
    reservationFrequency: 1.6,
    notes: "Souvent accompagnée d'une amie.",
    appointments: [
      { id: "a39", date: "2024-12-05", service: "Remplissage", amount: 40 },
      { id: "a40", date: "2024-10-28", service: "Pose gel", amount: 55 },
      { id: "a41", date: "2024-08-18", service: "Pose gel + Nail art", amount: 75 },
    ]
  },
  {
    id: "15",
    firstName: "Sarah",
    lastName: "Bonnet",
    phone: "06 55 66 77 88",
    firstAppointmentDate: "2024-06-18",
    lastAppointmentDate: "2024-11-25",
    reservationFrequency: 1.1,
    notes: "",
    appointments: [
      { id: "a42", date: "2024-11-25", service: "Pose gel", amount: 55 },
      { id: "a43", date: "2024-09-05", service: "Remplissage", amount: 40 },
    ]
  },
];
