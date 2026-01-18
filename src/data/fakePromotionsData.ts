// Fake data for promotions UI prototyping
// No business logic - UI only

export interface ServicePromotion {
  id: string;
  name: string;
  originalPrice: number;
  promotionActive: boolean;
  discountPercent: number;
}

export const fakeServices: ServicePromotion[] = [
  {
    id: 'srv-001',
    name: 'Coupe femme',
    originalPrice: 45,
    promotionActive: true,
    discountPercent: 20,
  },
  {
    id: 'srv-002',
    name: 'Coupe homme',
    originalPrice: 30,
    promotionActive: false,
    discountPercent: 0,
  },
  {
    id: 'srv-003',
    name: 'Coloration',
    originalPrice: 70,
    promotionActive: true,
    discountPercent: 15,
  },
  {
    id: 'srv-004',
    name: 'Soin capillaire',
    originalPrice: 25,
    promotionActive: false,
    discountPercent: 0,
  },
  {
    id: 'srv-005',
    name: 'Balayage',
    originalPrice: 90,
    promotionActive: true,
    discountPercent: 10,
  },
  {
    id: 'srv-006',
    name: 'Brushing',
    originalPrice: 20,
    promotionActive: false,
    discountPercent: 0,
  },
];

// Calculate discounted price
export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercent: number
): number => {
  return originalPrice - (originalPrice * discountPercent) / 100;
};
