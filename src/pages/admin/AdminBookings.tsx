import { useNavigate } from 'react-router-dom';
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
import { fakeBookings } from '@/data/fakeBookingData';
import { Eye, CreditCard, ArrowRightLeft, RefreshCcw } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';

export default function AdminBookings() {
  const navigate = useNavigate();

  const totalBookings = fakeBookings.length;
  const totalPaid = fakeBookings.reduce((sum, b) => sum + b.amountPaid, 0);
  const pendingTransfers = fakeBookings.filter(b => b.transferStatus === 'pending').length;
  const refundedCount = fakeBookings.filter(b => b.paymentStatus !== 'paid').length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Réservations</h1>
        <p className="text-muted-foreground mt-1">
          Vue financière de toutes les réservations
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total réservations"
          value={totalBookings.toString()}
          icon={CreditCard}
          iconColor="text-primary"
        />
        <StatCard
          title="Montant total payé"
          value={`${totalPaid.toFixed(2)} €`}
          icon={CreditCard}
          iconColor="text-green-600"
        />
        <StatCard
          title="Transferts en attente"
          value={pendingTransfers.toString()}
          icon={ArrowRightLeft}
          iconColor="text-orange-600"
        />
        <StatCard
          title="Remboursements"
          value={refundedCount.toString()}
          icon={RefreshCcw}
          iconColor="text-red-600"
        />
      </div>

      {/* Bookings table */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des réservations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Prestataire</TableHead>
                  <TableHead>Date RDV</TableHead>
                  <TableHead className="text-right">Montant payé</TableHead>
                  <TableHead>Statut paiement</TableHead>
                  <TableHead>Statut transfert</TableHead>
                  <TableHead>Statut booking</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fakeBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-mono text-sm">
                      {booking.id}
                    </TableCell>
                    <TableCell>{booking.clientName}</TableCell>
                    <TableCell>{booking.providerName}</TableCell>
                    <TableCell>
                      {new Date(booking.appointmentDate).toLocaleDateString('fr-FR')}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {booking.amountPaid.toFixed(2)} €
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={booking.paymentStatus} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={booking.transferStatus} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={booking.bookingStatus} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/admin/bookings/${booking.id}`)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir détail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
