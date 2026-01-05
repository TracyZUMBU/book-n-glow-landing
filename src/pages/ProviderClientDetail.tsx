import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, TrendingUp, FileText, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';
import { fakeClients } from '@/data/fakeClientsData';

const ProviderClientDetail = () => {
  const { clientId } = useParams();
  const client = fakeClients.find((c) => c.id === clientId);
  const [notes, setNotes] = useState(client?.notes || '');

  if (!client) {
    return (
      <div className="space-y-6">
        <Link
          to="/prestataire/clients"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la liste
        </Link>
        <div className="text-center py-12">
          <User className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium text-foreground">
            Client non trouvé
          </h3>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleSaveNotes = () => {
    // UI only - no real save
    toast.success('Note enregistrée avec succès');
  };

  const totalSpent = client.appointments.reduce((sum, apt) => sum + apt.amount, 0);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Back Link */}
      <Link
        to="/prestataire/clients"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour à la liste
      </Link>

      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <User className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
            {client.firstName} {client.lastName}
          </h1>
          <p className="text-sm text-muted-foreground">{client.phone}</p>
        </div>
      </div>

      {/* Info Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base md:text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Informations client
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground">
                Premier rendez-vous
              </p>
              <p className="font-medium text-sm md:text-base">
                {formatDate(client.firstAppointmentDate)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground">
                Dernier rendez-vous
              </p>
              <p className="font-medium text-sm md:text-base">
                {formatDate(client.lastAppointmentDate)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground">
                Fréquence de réservation
              </p>
              <p className="font-medium text-sm md:text-base flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                {client.reservationFrequency.toFixed(1)} résa / mois
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground">
                Total dépensé
              </p>
              <p className="font-medium text-sm md:text-base text-primary">
                {totalSpent} €
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base md:text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Note personnelle
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm">
              Ajouter une note sur ce client
            </Label>
            <Textarea
              id="notes"
              placeholder="Ex: Préfère les créneaux du matin, allergique à certains produits..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-24 resize-none"
            />
          </div>
          <Button onClick={handleSaveNotes} className="w-full sm:w-auto">
            Enregistrer la note
          </Button>
        </CardContent>
      </Card>

      {/* Appointments History */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base md:text-lg flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            Historique des rendez-vous
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Prestation</TableHead>
                  <TableHead className="text-right">Montant payé</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.appointments.map((apt) => (
                  <TableRow key={apt.id}>
                    <TableCell>{formatDate(apt.date)}</TableCell>
                    <TableCell>{apt.service}</TableCell>
                    <TableCell className="text-right font-medium">
                      {apt.amount} €
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {client.appointments.map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium text-sm">{apt.service}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(apt.date)}
                  </p>
                </div>
                <p className="font-semibold text-primary">{apt.amount} €</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProviderClientDetail;
