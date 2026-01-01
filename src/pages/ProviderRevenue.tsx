import { useState } from 'react';
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
import { StatCard } from '@/components/dashboard/StatCard';
import { getProviderBookings, providerStats } from '@/data/fakeBookingData';
import { Euro, Clock, CheckCircle, Eye, XCircle } from 'lucide-react';

export default function ProviderRevenue() {
  const navigate = useNavigate();
  // Fake provider ID for demo
  const providerId = 'PRV-001';
  const bookings = getProviderBookings(providerId);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Revenus & Paiements</h1>
        <p className="text-muted-foreground mt-1">
          Suivez vos revenus et l'état de vos paiements
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total gagné ce mois"
          value={`${providerStats.totalEarnedThisMonth.toFixed(2)} €`}
          icon={Euro}
          iconColor="text-green-600"
        />
        <StatCard
          title="En attente de transfert"
          value={`${providerStats.pendingTransfer.toFixed(2)} €`}
          icon={Clock}
          iconColor="text-orange-600"
        />
        <StatCard
          title="Déjà transféré"
          value={`${providerStats.alreadyTransferred.toFixed(2)} €`}
          icon={CheckCircle}
          iconColor="text-blue-600"
        />
      </div>

      {/* Bookings table */}
      <Card>
        <CardHeader>
          <CardTitle>Mes réservations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead className="text-right">Montant payé</TableHead>
                  <TableHead>Statut paiement</TableHead>
                  <TableHead>Statut transfert</TableHead>
                  <TableHead>Remboursement</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      {new Date(booking.appointmentDate).toLocaleDateString('fr-FR')}
                    </TableCell>
                    <TableCell>{booking.clientName}</TableCell>
                    <TableCell className="max-w-[150px] truncate">
                      {booking.service}
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
                      {booking.refunds.length > 0 ? (
                        <StatusBadge status="partially_refunded" />
                      ) : (
                        <span className="text-muted-foreground text-sm">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/prestataire/reservations/${booking.id}`)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          disabled={booking.bookingStatus === 'cancelled'}
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
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
