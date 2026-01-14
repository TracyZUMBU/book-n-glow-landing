// Types for stamp card loyalty system

export interface LoyaltyCardSettings {
  enabled: boolean;
  stampsRequired: number; // Number of services needed for reward
  rewardType: 'fixed_discount' | 'percentage_discount' | 'free_product' | 'free_service';
  rewardValue: number; // Value for discounts
  rewardServiceId?: string; // Service ID if free service
  rewardServiceName?: string; // Service name if free service
  rewardProductName?: string; // Product name if free product
  eligibleServices?: { id: string; name: string }[]; // Services eligible for free service reward
  validityMonths: number; // Validity of reward once earned
}

export interface LoyaltyReward {
  id: string;
  providerId: string;
  providerName: string;
  type: 'fixed_discount' | 'percentage_discount' | 'free_service' | 'free_product';
  value: number;
  serviceName?: string;
  productName?: string;
  status: 'available' | 'used' | 'expired';
  earnedAt: string;
  validUntil: string;
  usedAt?: string;
}

export interface StampHistory {
  id: string;
  date: string;
  serviceName: string;
  bookingId: string;
}

export interface ClientLoyaltyCard {
  providerId: string;
  providerName: string;
  providerImage: string;
  currentStamps: number;
  stampsRequired: number;
  rewardType: LoyaltyCardSettings['rewardType'];
  rewardValue: number;
  rewardServiceName?: string;
  rewardProductName?: string;
  hasRewardAvailable: boolean;
  stampHistory: StampHistory[];
}

export interface ClientLoyaltyData {
  loyaltyCards: ClientLoyaltyCard[];
  rewards: LoyaltyReward[];
}

// Default provider loyalty settings
export const defaultLoyaltySettings: LoyaltyCardSettings = {
  enabled: false,
  stampsRequired: 10,
  rewardType: 'percentage_discount',
  rewardValue: 10,
  validityMonths: 3,
};

// Fake available services for free service selection
export const fakeAvailableServices = [
  { id: 'service-1', name: 'Brushing' },
  { id: 'service-2', name: 'Coupe femme' },
  { id: 'service-3', name: 'Coupe homme' },
  { id: 'service-4', name: 'Soin hydratant' },
  { id: 'service-5', name: 'Manucure simple' },
  { id: 'service-6', name: 'Pose de vernis' },
];

// Fake client loyalty data with multiple providers
export const fakeClientLoyaltyData: ClientLoyaltyData = {
  loyaltyCards: [
    {
      providerId: 'provider-1',
      providerName: 'Beauty Salon Paris',
      providerImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200',
      currentStamps: 7,
      stampsRequired: 10,
      rewardType: 'percentage_discount',
      rewardValue: 15,
      hasRewardAvailable: false,
      stampHistory: [
        { id: 'stamp-1', date: '2025-01-10', serviceName: 'Manucure complète', bookingId: 'booking-1' },
        { id: 'stamp-2', date: '2024-12-20', serviceName: 'Soin du visage', bookingId: 'booking-2' },
        { id: 'stamp-3', date: '2024-12-05', serviceName: 'Maquillage soirée', bookingId: 'booking-3' },
        { id: 'stamp-4', date: '2024-11-18', serviceName: 'Manucure complète', bookingId: 'booking-4' },
        { id: 'stamp-5', date: '2024-11-02', serviceName: 'Rehaussement cils', bookingId: 'booking-5' },
        { id: 'stamp-6', date: '2024-10-15', serviceName: 'Soin du visage', bookingId: 'booking-6' },
        { id: 'stamp-7', date: '2024-09-28', serviceName: 'Maquillage marié', bookingId: 'booking-7' },
      ],
    },
    {
      providerId: 'provider-2',
      providerName: 'Coiffure Élégance',
      providerImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200',
      currentStamps: 10,
      stampsRequired: 10,
      rewardType: 'free_service',
      rewardValue: 0,
      rewardServiceName: 'Brushing',
      hasRewardAvailable: true,
      stampHistory: [
        { id: 'stamp-8', date: '2025-01-08', serviceName: 'Coupe + Brushing', bookingId: 'booking-8' },
        { id: 'stamp-9', date: '2024-12-22', serviceName: 'Coloration', bookingId: 'booking-9' },
        { id: 'stamp-10', date: '2024-12-08', serviceName: 'Coupe femme', bookingId: 'booking-10' },
        { id: 'stamp-11', date: '2024-11-25', serviceName: 'Brushing', bookingId: 'booking-11' },
        { id: 'stamp-12', date: '2024-11-10', serviceName: 'Mèches', bookingId: 'booking-12' },
        { id: 'stamp-13', date: '2024-10-28', serviceName: 'Coupe + Brushing', bookingId: 'booking-13' },
        { id: 'stamp-14', date: '2024-10-12', serviceName: 'Soin kératine', bookingId: 'booking-14' },
        { id: 'stamp-15', date: '2024-09-26', serviceName: 'Coloration', bookingId: 'booking-15' },
        { id: 'stamp-16', date: '2024-09-10', serviceName: 'Coupe femme', bookingId: 'booking-16' },
        { id: 'stamp-17', date: '2024-08-28', serviceName: 'Brushing', bookingId: 'booking-17' },
      ],
    },
    {
      providerId: 'provider-3',
      providerName: 'Nail Art Studio',
      providerImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200',
      currentStamps: 3,
      stampsRequired: 8,
      rewardType: 'fixed_discount',
      rewardValue: 20,
      hasRewardAvailable: false,
      stampHistory: [
        { id: 'stamp-18', date: '2025-01-05', serviceName: 'Pose gel', bookingId: 'booking-18' },
        { id: 'stamp-19', date: '2024-12-15', serviceName: 'Nail art', bookingId: 'booking-19' },
        { id: 'stamp-20', date: '2024-11-28', serviceName: 'Manucure russe', bookingId: 'booking-20' },
      ],
    },
  ],
  rewards: [
    {
      id: 'reward-1',
      providerId: 'provider-2',
      providerName: 'Coiffure Élégance',
      type: 'free_service',
      value: 0,
      serviceName: 'Brushing',
      status: 'available',
      earnedAt: '2025-01-08',
      validUntil: '2025-04-08',
    },
    {
      id: 'reward-2',
      providerId: 'provider-1',
      providerName: 'Beauty Salon Paris',
      type: 'percentage_discount',
      value: 15,
      status: 'used',
      earnedAt: '2024-09-15',
      validUntil: '2024-12-15',
      usedAt: '2024-11-20',
    },
    {
      id: 'reward-3',
      providerId: 'provider-3',
      providerName: 'Nail Art Studio',
      type: 'fixed_discount',
      value: 20,
      status: 'expired',
      earnedAt: '2024-05-01',
      validUntil: '2024-08-01',
    },
  ],
};

// Empty state data
export const emptyClientLoyaltyData: ClientLoyaltyData = {
  loyaltyCards: [],
  rewards: [],
};

// Helper functions
export const getRewardTypeLabel = (type: LoyaltyCardSettings['rewardType']): string => {
  const labels: Record<LoyaltyCardSettings['rewardType'], string> = {
    fixed_discount: 'Réduction fixe (€)',
    percentage_discount: 'Réduction en %',
    free_service: 'Prestation offerte',
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

export const getRewardShortDescription = (card: ClientLoyaltyCard): string => {
  switch (card.rewardType) {
    case 'fixed_discount':
      return `-${card.rewardValue}€`;
    case 'percentage_discount':
      return `-${card.rewardValue}%`;
    case 'free_service':
      return card.rewardServiceName || 'Prestation offerte';
    case 'free_product':
      return card.rewardProductName || 'Produit offert';
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
