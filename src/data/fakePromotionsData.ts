// Fake data for promotions UI prototyping
// No business logic - UI only

export interface ServicePromotion {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  promotionActive: boolean;
  discountPercent: number;
}

export const fakeServices: ServicePromotion[] = [
  // Coupe
  {
    id: 'srv-001',
    name: 'Coupe femme',
    category: 'Coupe',
    originalPrice: 45,
    promotionActive: true,
    discountPercent: 20,
  },
  {
    id: 'srv-002',
    name: 'Coupe homme',
    category: 'Coupe',
    originalPrice: 30,
    promotionActive: false,
    discountPercent: 0,
  },
  {
    id: 'srv-007',
    name: 'Coupe enfant',
    category: 'Coupe',
    originalPrice: 20,
    promotionActive: false,
    discountPercent: 0,
  },
  // Coloration
  {
    id: 'srv-003',
    name: 'Coloration',
    category: 'Coloration',
    originalPrice: 70,
    promotionActive: true,
    discountPercent: 15,
  },
  {
    id: 'srv-005',
    name: 'Balayage',
    category: 'Coloration',
    originalPrice: 90,
    promotionActive: true,
    discountPercent: 10,
  },
  {
    id: 'srv-008',
    name: 'Mèches',
    category: 'Coloration',
    originalPrice: 65,
    promotionActive: false,
    discountPercent: 0,
  },
  // Soins
  {
    id: 'srv-004',
    name: 'Soin capillaire',
    category: 'Soins',
    originalPrice: 25,
    promotionActive: false,
    discountPercent: 0,
  },
  {
    id: 'srv-009',
    name: 'Soin kératine',
    category: 'Soins',
    originalPrice: 120,
    promotionActive: false,
    discountPercent: 0,
  },
  // Coiffage
  {
    id: 'srv-006',
    name: 'Brushing',
    category: 'Coiffage',
    originalPrice: 20,
    promotionActive: false,
    discountPercent: 0,
  },
  {
    id: 'srv-010',
    name: 'Chignon',
    category: 'Coiffage',
    originalPrice: 50,
    promotionActive: false,
    discountPercent: 0,
  },
  {
    id: 'srv-011',
    name: 'Lissage',
    category: 'Coiffage',
    originalPrice: 35,
    promotionActive: false,
    discountPercent: 0,
  },
];

// Get unique categories sorted alphabetically
export const getCategories = (): string[] => {
  const categories = [...new Set(fakeServices.map((s) => s.category))];
  return categories.sort((a, b) => a.localeCompare(b, 'fr'));
};

// Calculate discounted price
export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercent: number
): number => {
  return originalPrice - (originalPrice * discountPercent) / 100;
};
