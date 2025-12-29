import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Plus, Trash2, CalendarOff, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

export interface UnavailabilityPeriod {
  id: string;
  startDate: string;
  endDate: string;
  reason?: string;
}

interface UnavailabilitySectionProps {
  periods: UnavailabilityPeriod[];
  onAddPeriod: (period: Omit<UnavailabilityPeriod, 'id'>) => void;
  onRemovePeriod: (id: string) => void;
}

export function UnavailabilitySection({ 
  periods, 
  onAddPeriod, 
  onRemovePeriod 
}: UnavailabilitySectionProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleAdd = () => {
    if (startDate && endDate) {
      onAddPeriod({
        startDate,
        endDate,
        reason: reason || undefined,
      });
      setStartDate('');
      setEndDate('');
      setReason('');
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setStartDate('');
    setEndDate('');
    setReason('');
    setIsAdding(false);
  };

  const formatDateRange = (start: string, end: string) => {
    const startFormatted = format(new Date(start), 'd MMMM yyyy', { locale: fr });
    const endFormatted = format(new Date(end), 'd MMMM yyyy', { locale: fr });
    return start === end ? startFormatted : `${startFormatted} → ${endFormatted}`;
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarOff className="h-5 w-5 text-destructive" />
            <CardTitle className="text-lg">Indisponibilités</CardTitle>
          </div>
          {!isAdding && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsAdding(true)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Ajouter
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="bg-muted/50 border-muted">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-sm">
            Les indisponibilités écrasent les disponibilités définies. 
            Utilisez cette section pour vos congés, absences exceptionnelles, etc.
          </AlertDescription>
        </Alert>

        {/* Add form */}
        {isAdding && (
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Date de début</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">Date de fin</Label>
                <Input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Motif (optionnel)</Label>
              <Textarea
                id="reason"
                placeholder="Ex: Vacances, formation, congé maladie..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={2}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                Annuler
              </Button>
              <Button 
                size="sm" 
                onClick={handleAdd}
                disabled={!startDate || !endDate}
              >
                Ajouter l'indisponibilité
              </Button>
            </div>
          </div>
        )}

        {/* List of periods */}
        {periods.length > 0 ? (
          <div className="space-y-2">
            {periods.map((period) => (
              <div
                key={period.id}
                className="flex items-start justify-between p-3 bg-destructive/5 border border-destructive/20 rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium text-sm text-destructive">
                    {formatDateRange(period.startDate, period.endDate)}
                  </p>
                  {period.reason && (
                    <p className="text-xs text-muted-foreground">{period.reason}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:bg-destructive/10"
                  onClick={() => onRemovePeriod(period.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          !isAdding && (
            <p className="text-sm text-muted-foreground text-center py-4">
              Aucune indisponibilité définie
            </p>
          )
        )}
      </CardContent>
    </Card>
  );
}
