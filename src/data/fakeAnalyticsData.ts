// Fake analytics data for UI prototype

export const kpiData = {
  revenue: {
    value: 12450,
    variation: 8.5,
    trend: 'up' as const,
  },
  bookings: {
    value: 148,
    variation: 12,
    trend: 'up' as const,
  },
  uniqueClients: {
    value: 96,
    variation: -3,
    trend: 'down' as const,
  },
  averageBasket: {
    value: 84,
    variation: 5.2,
    trend: 'up' as const,
  },
};

export const monthlyRevenueData = [
  { month: 'Jan', revenue: 980 },
  { month: 'Fév', revenue: 1150 },
  { month: 'Mar', revenue: 1320 },
  { month: 'Avr', revenue: 1080 },
  { month: 'Mai', revenue: 1450 },
  { month: 'Juin', revenue: 1620 },
  { month: 'Juil', revenue: 1380 },
  { month: 'Août', revenue: 890 },
  { month: 'Sep', revenue: 1540 },
  { month: 'Oct', revenue: 1280 },
  { month: 'Nov', revenue: 1420 },
  { month: 'Déc', revenue: 1340 },
];

export const clientsData = [
  { month: 'Jan', nouveaux: 8, recurrents: 12 },
  { month: 'Fév', nouveaux: 10, recurrents: 14 },
  { month: 'Mar', nouveaux: 12, recurrents: 16 },
  { month: 'Avr', nouveaux: 7, recurrents: 15 },
  { month: 'Mai', nouveaux: 14, recurrents: 18 },
  { month: 'Juin', nouveaux: 11, recurrents: 20 },
  { month: 'Juil', nouveaux: 9, recurrents: 17 },
  { month: 'Août', nouveaux: 5, recurrents: 10 },
  { month: 'Sep', nouveaux: 13, recurrents: 19 },
  { month: 'Oct', nouveaux: 10, recurrents: 16 },
  { month: 'Nov', nouveaux: 12, recurrents: 18 },
  { month: 'Déc', nouveaux: 8, recurrents: 15 },
];

export const clientStats = {
  recurringPercentage: 62,
  avgBookingsPerClient: 1.54,
};

export const servicesDistribution = [
  { name: 'Pose gel', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Remplissage', value: 30, color: 'hsl(var(--chart-2))' },
  { name: 'Nail art', value: 15, color: 'hsl(var(--chart-3))' },
  { name: 'Autres', value: 10, color: 'hsl(var(--chart-4))' },
];

export const basketData = [
  { month: 'Jan', panier: 72 },
  { month: 'Fév', panier: 78 },
  { month: 'Mar', panier: 85 },
  { month: 'Avr', panier: 76 },
  { month: 'Mai', panier: 88 },
  { month: 'Juin', panier: 92 },
  { month: 'Juil', panier: 84 },
  { month: 'Août', panier: 70 },
  { month: 'Sep', panier: 89 },
  { month: 'Oct', panier: 82 },
  { month: 'Nov', panier: 86 },
  { month: 'Déc', panier: 80 },
];

export const basketStats = {
  min: 35,
  max: 145,
  average: 84,
};

export const monthlySummary = [
  { month: 'Janvier', ca: 980, reservations: 12, clients: 10, panier: 72 },
  { month: 'Février', ca: 1150, reservations: 14, clients: 12, panier: 78 },
  { month: 'Mars', ca: 1320, reservations: 16, clients: 14, panier: 85 },
  { month: 'Avril', ca: 1080, reservations: 13, clients: 11, panier: 76 },
  { month: 'Mai', ca: 1450, reservations: 17, clients: 15, panier: 88 },
  { month: 'Juin', ca: 1620, reservations: 18, clients: 16, panier: 92 },
  { month: 'Juillet', ca: 1380, reservations: 15, clients: 13, panier: 84 },
  { month: 'Août', ca: 890, reservations: 10, clients: 8, panier: 70 },
  { month: 'Septembre', ca: 1540, reservations: 17, clients: 14, panier: 89 },
  { month: 'Octobre', ca: 1280, reservations: 14, clients: 12, panier: 82 },
  { month: 'Novembre', ca: 1420, reservations: 16, clients: 14, panier: 86 },
  { month: 'Décembre', ca: 1340, reservations: 15, clients: 13, panier: 80 },
];
