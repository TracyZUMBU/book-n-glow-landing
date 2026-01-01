import { cn } from '@/lib/utils';

type BadgeVariant = 'success' | 'warning' | 'error' | 'neutral' | 'info';

interface StatusBadgeProps {
  status: string;
  variant?: BadgeVariant;
  className?: string;
}

const statusVariantMap: Record<string, BadgeVariant> = {
  // Payment status
  paid: 'success',
  partially_refunded: 'warning',
  refunded: 'error',
  
  // Transfer status
  pending: 'warning',
  completed: 'success',
  reversed: 'error',
  partially_reversed: 'warning',
  
  // Booking status
  confirmed: 'success',
  cancelled: 'error',
  
  // Refund status
  failed: 'error',
};

const statusLabelMap: Record<string, string> = {
  // Payment status
  paid: 'Payé',
  partially_refunded: 'Partiellement remboursé',
  refunded: 'Remboursé',
  
  // Transfer status
  pending: 'En attente',
  completed: 'Effectué',
  reversed: 'Annulé',
  partially_reversed: 'Partiellement annulé',
  
  // Booking status
  confirmed: 'Confirmé',
  cancelled: 'Annulé',
  
  // Refund status
  failed: 'Échoué',
  
  // Payment type
  deposit: 'Acompte',
  full: 'Total',
  
  // Initiated by
  client: 'Client',
  provider: 'Prestataire',
  admin: 'Admin',
};

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-orange-100 text-orange-800 border-orange-200',
  error: 'bg-red-100 text-red-800 border-red-200',
  neutral: 'bg-gray-100 text-gray-800 border-gray-200',
  info: 'bg-blue-100 text-blue-800 border-blue-200',
};

export function StatusBadge({ status, variant, className }: StatusBadgeProps) {
  const resolvedVariant = variant || statusVariantMap[status] || 'neutral';
  const label = statusLabelMap[status] || status;

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variantStyles[resolvedVariant],
        className
      )}
    >
      {label}
    </span>
  );
}
