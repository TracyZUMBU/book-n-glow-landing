// Types for loyalty system
export interface LoyaltySettings {
  enabled: boolean;
  pointsPerEuro: number;
  pointsForReward: number;
  rewardType: 'fixed_discount' | 'percentage_discount' | 'free_service' | 'free_product';
  rewardValue: number;
  rewardServiceName?: string;
  rewardProductName?: string;
  pointsValidityMonths: number;
}

export interface LoyaltyReward {
  id: string;
  type: 'fixed_discount' | 'percentage_discount' | 'free_service' | 'free_product';
  value: number;
  serviceName?: string;
  productName?: string;
  status: 'available' | 'used' | 'expired';
  earnedAt: string;
  validUntil: string;
  usedAt?: string;
}

export interface LoyaltyPointHistory {
  id: string;
  date: string;
  type: 'earned' | 'used' | 'expired';
  points: number;
  description: string;
  bookingId?: string;
}

export interface ClientLoyaltyData {
  currentPoints: number;
  totalPointsEarned: number;
  pointsExpirationDate: string;
  rewards: LoyaltyReward[];
  history: LoyaltyPointHistory[];
  providerSettings: LoyaltySettings;
}

// Default provider loyalty settings
export const defaultLoyaltySettings: LoyaltySettings = {
  enabled: true,
  pointsPerEuro: 1,
  pointsForReward: 100,
  rewardType: 'percentage_discount',
  rewardValue: 10,
  pointsValidityMonths: 12,
};

// Fake client loyalty data
export const fakeClientLoyaltyData: ClientLoyaltyData = {
  currentPoints: 85,
  totalPointsEarned: 235,
  pointsExpirationDate: '2025-06-15',
  providerSettings: {
    enabled: true,
    pointsPerEuro: 1,
    pointsForReward: 100,
    rewardType: 'percentage_discount',
    rewardValue: 10,
    pointsValidityMonths: 12,
  },
  rewards: [
    {
      id: 'reward-1',
      type: 'percentage_discount',
      value: 10,
      status: 'available',
      earnedAt: '2024-12-01',
      validUntil: '2025-03-01',
    },
    {
      id: 'reward-2',
      type: 'fixed_discount',
      value: 15,
      status: 'used',
      earnedAt: '2024-09-15',
      validUntil: '2024-12-15',
      usedAt: '2024-11-20',
    },
    {
      id: 'reward-3',
      type: 'free_service',
      value: 0,
      serviceName: 'Brushing',
      status: 'expired',
      earnedAt: '2024-06-01',
      validUntil: '2024-09-01',
    },
  ],
  history: [
    {
      id: 'hist-1',
      date: '2025-01-10',
      type: 'earned',
      points: 45,
      description: 'Balayage + Coupe',
      bookingId: 'booking-123',
    },
    {
      id: 'hist-2',
      date: '2024-12-20',
      type: 'earned',
      points: 30,
      description: 'Coloration racines',
      bookingId: 'booking-122',
    },
    {
      id: 'hist-3',
      date: '2024-12-01',
      type: 'used',
      points: -100,
      description: 'Récompense obtenue : -10%',
    },
    {
      id: 'hist-4',
      date: '2024-11-15',
      type: 'earned',
      points: 55,
      description: 'Lissage brésilien',
      bookingId: 'booking-121',
    },
    {
      id: 'hist-5',
      date: '2024-10-01',
      type: 'earned',
      points: 25,
      description: 'Coupe + Brushing',
      bookingId: 'booking-120',
    },
    {
      id: 'hist-6',
      date: '2024-09-01',
      type: 'expired',
      points: -20,
      description: 'Points expirés',
    },
    {
      id: 'hist-7',
      date: '2024-08-15',
      type: 'earned',
      points: 35,
      description: 'Mèches + Soin',
      bookingId: 'booking-119',
    },
    {
      id: 'hist-8',
      date: '2024-07-20',
      type: 'earned',
      points: 65,
      description: 'Coloration complète',
      bookingId: 'booking-118',
    },
  ],
};

// Empty state data for clients with no loyalty
export const emptyClientLoyaltyData: ClientLoyaltyData = {
  currentPoints: 0,
  totalPointsEarned: 0,
  pointsExpirationDate: '',
  providerSettings: {
    enabled: true,
    pointsPerEuro: 1,
    pointsForReward: 100,
    rewardType: 'percentage_discount',
    rewardValue: 10,
    pointsValidityMonths: 12,
  },
  rewards: [],
  history: [],
};

// Helper functions
export const getRewardTypeLabel = (type: LoyaltySettings['rewardType']): string => {
  const labels: Record<LoyaltySettings['rewardType'], string> = {
    fixed_discount: 'Réduction fixe (€)',
    percentage_discount: 'Réduction en %',
    free_service: 'Prestation gratuite',
    free_product: 'Produit offert',
  };
  return labels[type];
};

export const getRewardDescription = (reward: LoyaltyReward): string => {
  switch (reward.type) {
    case 'fixed_discount':
      return `-${reward.value}€ sur votre prochaine prestation`;
    case 'percentage_discount':
      return `-${reward.value}% sur votre prochaine prestation`;
    case 'free_service':
      return `${reward.serviceName || 'Prestation'} offert(e)`;
    case 'free_product':
      return `${reward.productName || 'Produit'} offert`;
    default:
      return 'Récompense';
  }
};

export const getStatusLabel = (status: LoyaltyReward['status']): string => {
  const labels: Record<LoyaltyReward['status'], string> = {
    available: 'Disponible',
    used: 'Utilisée',
    expired: 'Expirée',
  };
  return labels[status];
};
