// Fake data for dashboard UI prototyping
// No business logic - UI only

export interface FakeBooking {
  id: string;
  clientName: string;
  clientEmail: string;
  providerName: string;
  providerId: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  amountPaid: number;
  paymentType: 'deposit' | 'full';
  paymentStatus: 'paid' | 'partially_refunded' | 'refunded';
  transferStatus: 'pending' | 'completed' | 'reversed' | 'partially_reversed';
  bookingStatus: 'confirmed' | 'cancelled';
  stripePaymentIntentId: string;
  stripeTransferId: string | null;
  transferAmount: number;
  transferDate: string | null;
  refunds: FakeRefund[];
}

export interface FakeRefund {
  id: string;
  date: string;
  amount: number;
  initiatedBy: 'client' | 'provider' | 'admin';
  status: 'pending' | 'completed' | 'failed';
  reason: string;
  stripeRefundId: string;
}

export interface ProviderStats {
  totalEarnedThisMonth: number;
  pendingTransfer: number;
  alreadyTransferred: number;
}

export const fakeBookings: FakeBooking[] = [
  {
    id: 'BK-2024-001',
    clientName: 'Marie Dupont',
    clientEmail: 'marie.dupont@email.com',
    providerName: 'Beauty Lounge Paris',
    providerId: 'PRV-001',
    service: 'Manucure semi-permanente',
    appointmentDate: '2024-12-15',
    appointmentTime: '14:00',
    amountPaid: 45.00,
    paymentType: 'full',
    paymentStatus: 'paid',
    transferStatus: 'completed',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxY7z2eZvKYlo2C1234abcd',
    stripeTransferId: 'tr_3PxY7z2eZvKYlo2C5678efgh',
    transferAmount: 40.50,
    transferDate: '2024-12-16',
    refunds: []
  },
  {
    id: 'BK-2024-002',
    clientName: 'Sophie Martin',
    clientEmail: 'sophie.martin@email.com',
    providerName: 'Beauty Lounge Paris',
    providerId: 'PRV-001',
    service: 'Soin du visage hydratant',
    appointmentDate: '2024-12-18',
    appointmentTime: '10:30',
    amountPaid: 75.00,
    paymentType: 'deposit',
    paymentStatus: 'paid',
    transferStatus: 'pending',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxY8a2eZvKYlo2C2345bcde',
    stripeTransferId: null,
    transferAmount: 0,
    transferDate: null,
    refunds: []
  },
  {
    id: 'BK-2024-003',
    clientName: 'Léa Bernard',
    clientEmail: 'lea.bernard@email.com',
    providerName: 'Glam Studio Lyon',
    providerId: 'PRV-002',
    service: 'Extension de cils',
    appointmentDate: '2024-12-10',
    appointmentTime: '16:00',
    amountPaid: 120.00,
    paymentType: 'full',
    paymentStatus: 'partially_refunded',
    transferStatus: 'partially_reversed',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxY9b2eZvKYlo2C3456cdef',
    stripeTransferId: 'tr_3PxY9b2eZvKYlo2C7890ghij',
    transferAmount: 90.00,
    transferDate: '2024-12-11',
    refunds: [
      {
        id: 'RF-001',
        date: '2024-12-12',
        amount: 30.00,
        initiatedBy: 'client',
        status: 'completed',
        reason: 'Service partiellement non réalisé',
        stripeRefundId: 're_3PxYAc2eZvKYlo2C1111aaaa'
      }
    ]
  },
  {
    id: 'BK-2024-004',
    clientName: 'Emma Petit',
    clientEmail: 'emma.petit@email.com',
    providerName: 'Beauty Lounge Paris',
    providerId: 'PRV-001',
    service: 'Massage relaxant 60min',
    appointmentDate: '2024-12-08',
    appointmentTime: '11:00',
    amountPaid: 80.00,
    paymentType: 'full',
    paymentStatus: 'refunded',
    transferStatus: 'reversed',
    bookingStatus: 'cancelled',
    stripePaymentIntentId: 'pi_3PxYBd2eZvKYlo2C4567defg',
    stripeTransferId: 'tr_3PxYBd2eZvKYlo2C8901ijkl',
    transferAmount: 0,
    transferDate: null,
    refunds: [
      {
        id: 'RF-002',
        date: '2024-12-09',
        amount: 80.00,
        initiatedBy: 'provider',
        status: 'completed',
        reason: 'Annulation prestataire - maladie',
        stripeRefundId: 're_3PxYCe2eZvKYlo2C2222bbbb'
      }
    ]
  },
  {
    id: 'BK-2024-005',
    clientName: 'Chloé Moreau',
    clientEmail: 'chloe.moreau@email.com',
    providerName: 'Nails & Beauty Marseille',
    providerId: 'PRV-003',
    service: 'Pose gel complète',
    appointmentDate: '2024-12-20',
    appointmentTime: '09:00',
    amountPaid: 55.00,
    paymentType: 'deposit',
    paymentStatus: 'paid',
    transferStatus: 'pending',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxYDf2eZvKYlo2C5678efgh',
    stripeTransferId: null,
    transferAmount: 0,
    transferDate: null,
    refunds: []
  },
  {
    id: 'BK-2024-006',
    clientName: 'Julie Roux',
    clientEmail: 'julie.roux@email.com',
    providerName: 'Beauty Lounge Paris',
    providerId: 'PRV-001',
    service: 'Épilation jambes complètes',
    appointmentDate: '2024-12-22',
    appointmentTime: '15:30',
    amountPaid: 35.00,
    paymentType: 'full',
    paymentStatus: 'paid',
    transferStatus: 'pending',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxYEg2eZvKYlo2C6789fghi',
    stripeTransferId: null,
    transferAmount: 0,
    transferDate: null,
    refunds: []
  },
  {
    id: 'BK-2024-007',
    clientName: 'Camille Leroy',
    clientEmail: 'camille.leroy@email.com',
    providerName: 'Glam Studio Lyon',
    providerId: 'PRV-002',
    service: 'Maquillage événement',
    appointmentDate: '2024-12-05',
    appointmentTime: '13:00',
    amountPaid: 95.00,
    paymentType: 'full',
    paymentStatus: 'paid',
    transferStatus: 'completed',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxYFh2eZvKYlo2C7890ghij',
    stripeTransferId: 'tr_3PxYFh2eZvKYlo2C0123klmn',
    transferAmount: 85.50,
    transferDate: '2024-12-06',
    refunds: []
  },
  {
    id: 'BK-2024-008',
    clientName: 'Laura Simon',
    clientEmail: 'laura.simon@email.com',
    providerName: 'Beauty Lounge Paris',
    providerId: 'PRV-001',
    service: 'Balayage + Coupe',
    appointmentDate: '2024-12-25',
    appointmentTime: '10:00',
    amountPaid: 150.00,
    paymentType: 'deposit',
    paymentStatus: 'paid',
    transferStatus: 'pending',
    bookingStatus: 'confirmed',
    stripePaymentIntentId: 'pi_3PxYGi2eZvKYlo2C8901hijk',
    stripeTransferId: null,
    transferAmount: 0,
    transferDate: null,
    refunds: []
  }
];

export const providerStats: ProviderStats = {
  totalEarnedThisMonth: 485.00,
  pendingTransfer: 305.00,
  alreadyTransferred: 180.00
};

// Get bookings for a specific provider
export const getProviderBookings = (providerId: string): FakeBooking[] => {
  return fakeBookings.filter(b => b.providerId === providerId);
};

// Get a single booking by ID
export const getBookingById = (bookingId: string): FakeBooking | undefined => {
  return fakeBookings.find(b => b.id === bookingId);
};
