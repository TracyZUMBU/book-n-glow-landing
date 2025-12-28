import { useState } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { X, AlertTriangle, Copy, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { TimeSlotEditor } from './TimeSlotEditor';
import { DAYS_OF_WEEK, type TimeSlot, type MockReservation } from './types';

interface DayEditorPanelProps {
  date: Date;
  timeSlots: TimeSlot[];
  reservations: MockReservation[];
  onUpdateSlots: (slots: TimeSlot[]) => void;
  onDuplicateToWeekdays: (weekdays: number[]) => void;
  onClose: () => void;
  currentMonth: Date;
}

export function DayEditorPanel({
  date,
  timeSlots,
  reservations,
  onUpdateSlots,
  onDuplicateToWeekdays,
  onClose,
  currentMonth,
}: DayEditorPanelProps) {
  const [selectedWeekdays, setSelectedWeekdays] = useState<number[]>([]);

  const handleAddSlot = () => {
    const newSlot: TimeSlot = {
      id: `slot-${Date.now()}`,
      startTime: '09:00',
      endTime: '17:00',
    };
    onUpdateSlots([...timeSlots, newSlot]);
  };

  const handleRemoveSlot = (slotId: string) => {
    onUpdateSlots(timeSlots.filter(s => s.id !== slotId));
  };

  const handleUpdateSlot = (slotId: string, field: 'startTime' | 'endTime', value: string) => {
    onUpdateSlots(timeSlots.map(s => 
      s.id === slotId ? { ...s, [field]: value } : s
    ));
  };

  const toggleWeekday = (dayId: number) => {
    setSelectedWeekdays(prev =>
      prev.includes(dayId)
        ? prev.filter(id => id !== dayId)
        : [...prev, dayId]
    );
  };

  const handleDuplicate = () => {
    if (selectedWeekdays.length > 0) {
      onDuplicateToWeekdays(selectedWeekdays);
    }
  };

  // Count how many days would be affected by duplication
  const countAffectedDays = () => {
    if (selectedWeekdays.length === 0) return 0;
    
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    
    return daysInMonth.filter(d => {
      const dayOfWeek = getDay(d);
      return selectedWeekdays.includes(dayOfWeek);
    }).length;
  };

  const dayOfWeek = getDay(date);
  const currentDayName = DAYS_OF_WEEK.find(d => d.id === dayOfWeek)?.name || '';

  return (
    <Card className="mt-4 border-primary/30 shadow-lg animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">
              {format(date, 'EEEE d MMMM', { locale: fr })}
            </CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Warning if there are reservations */}
        {reservations.length > 0 && (
          <Alert className="bg-highlight/10 border-highlight/30">
            <AlertTriangle className="h-4 w-4 text-highlight" />
            <AlertDescription className="text-sm text-foreground/80">
              Les réservations existantes ce jour-là seront conservées.
              Vous devrez vérifier et gérer les conflits manuellement.
            </AlertDescription>
          </Alert>
        )}

        {/* Time Slots Section */}
        <div>
          <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            Plages horaires
          </h4>
          <TimeSlotEditor
            timeSlots={timeSlots}
            onAdd={handleAddSlot}
            onRemove={handleRemoveSlot}
            onUpdate={handleUpdateSlot}
          />
        </div>

        <Separator />

        {/* Duplication Section */}
        <div>
          <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
            <Copy className="h-4 w-4 text-muted-foreground" />
            Dupliquer vers d'autres jours
          </h4>
          
          <p className="text-xs text-muted-foreground mb-3">
            Appliquer ces horaires à tous les jours sélectionnés du mois
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {DAYS_OF_WEEK.map((day) => (
              <div key={day.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`weekday-${day.id}`}
                  checked={selectedWeekdays.includes(day.id)}
                  onCheckedChange={() => toggleWeekday(day.id)}
                />
                <Label 
                  htmlFor={`weekday-${day.id}`} 
                  className="text-sm cursor-pointer"
                >
                  {day.shortName}
                </Label>
              </div>
            ))}
          </div>

          {selectedWeekdays.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                <span className="font-medium">Exemple :</span> Définir les horaires du {currentDayName.toLowerCase()} {format(date, 'd')} → 
                dupliquer vers {countAffectedDays()} jour{countAffectedDays() > 1 ? 's' : ''} du mois
              </p>
              <Button 
                onClick={handleDuplicate}
                disabled={timeSlots.length === 0}
                className="w-full"
              >
                <Copy className="h-4 w-4 mr-2" />
                Appliquer à {countAffectedDays()} jour{countAffectedDays() > 1 ? 's' : ''}
              </Button>
            </div>
          )}
        </div>

        {/* Existing Reservations */}
        {reservations.length > 0 && (
          <>
            <Separator />
            <div>
              <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                Réservations existantes ({reservations.length})
              </h4>
              <div className="space-y-2">
                {reservations.map((res) => (
                  <div 
                    key={res.id} 
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg text-sm"
                  >
                    <div>
                      <span className="font-medium">{res.clientName}</span>
                      <span className="text-muted-foreground mx-2">•</span>
                      <span className="text-muted-foreground">{res.service}</span>
                    </div>
                    <span className="text-primary font-medium">{res.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
