import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import { RefundModal } from '@/components/dashboard/RefundModal';
import { getBookingById } from '@/data/fakeBookingData';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Store,
  CreditCard, 
  ArrowRightLeft, 
  RefreshCcw,
  Clock
} from 'lucide-react';

export default function AdminBookingDetail() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [refundModalOpen, setRefundModalOpen] = useState(false);

  const booking = getBookingById(bookingId || '');

  if (!booking) {
    return (
      <div className="p-6">
        <Button variant="outline" onClick={() => navigate('/admin/bookings')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">Réservation non trouvée</p>
        </div>
      </div>
    );
  }

  const refundableAmount = booking.amountPaid - booking.refunds.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate('/admin/bookings')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <div>
            <h1 className="text-2xl font-display font-bold">Détail réservation</h1>
            <p className="text-muted-foreground font-mono">{booking.id}</p>
          </div>
        </div>
        <StatusBadge status={booking.bookingStatus} className="text-sm px-3 py-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 1 - Informations booking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Informations booking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Booking ID</p>
                <p className="font-mono font-medium">{booking.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Statut</p>
                <StatusBadge status={booking.bookingStatus} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <User className="h-4 w-4" /> Client
                </p>
                <p className="font-medium">{booking.clientName}</p>
                <p className="text-sm text-muted-foreground">{booking.clientEmail}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Store className="h-4 w-4" /> Prestataire
                </p>
                <p className="font-medium">{booking.providerName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Date
                </p>
                <p className="font-medium">
                  {new Date(booking.appointmentDate).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Heure
                </p>
                <p className="font-medium">{booking.appointmentTime}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Service</p>
              <p className="font-medium">{booking.service}</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Paiement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-green-600" />
              Paiement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Montant total payé</p>
                <p className="text-2xl font-bold text-green-600">{booking.amountPaid.toFixed(2)} €</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Type de paiement</p>
                <StatusBadge status={booking.paymentType} variant="info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Statut paiement</p>
                <StatusBadge status={booking.paymentStatus} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stripe PaymentIntent ID</p>
                <p className="font-mono text-xs break-all">{booking.stripePaymentIntentId}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Transfert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-blue-600" />
              Transfert
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Montant transféré</p>
                <p className="text-2xl font-bold text-blue-600">
                  {booking.transferAmount.toFixed(2)} €
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Statut transfert</p>
                <StatusBadge status={booking.transferStatus} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date du transfert</p>
                <p className="font-medium">
                  {booking.transferDate 
                    ? new Date(booking.transferDate).toLocaleDateString('fr-FR')
                    : '—'
                  }
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stripe Transfer ID</p>
                <p className="font-mono text-xs break-all">
                  {booking.stripeTransferId || '—'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Actions admin */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCcw className="h-5 w-5 text-orange-600" />
              Actions admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="destructive"
                onClick={() => setRefundModalOpen(true)}
                disabled={refundableAmount <= 0}
              >
                <RefreshCcw className="h-4 w-4 mr-2" />
                Rembourser
              </Button>
              {refundableAmount <= 0 && (
                <p className="text-sm text-muted-foreground self-center">
                  Aucun montant remboursable
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 4 - Remboursements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCcw className="h-5 w-5 text-red-600" />
            Historique des remboursements
          </CardTitle>
        </CardHeader>
        <CardContent>
          {booking.refunds.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Aucun remboursement pour cette réservation
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Montant</TableHead>
                  <TableHead>Initié par</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Raison</TableHead>
                  <TableHead>Stripe Refund ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {booking.refunds.map((refund) => (
                  <TableRow key={refund.id}>
                    <TableCell>
                      {new Date(refund.date).toLocaleDateString('fr-FR')}
                    </TableCell>
                    <TableCell className="text-right font-medium text-red-600">
                      -{refund.amount.toFixed(2)} €
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={refund.initiatedBy} variant="neutral" />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={refund.status} />
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {refund.reason}
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      {refund.stripeRefundId}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Refund Modal */}
      <RefundModal
        open={refundModalOpen}
        onOpenChange={setRefundModalOpen}
        maxAmount={refundableAmount}
        title="Rembourser le client"
        description="Cette action créera un remboursement Stripe et annulera le transfert si nécessaire."
        submitLabel="Confirmer le remboursement"
      />
    </div>
  );
}
