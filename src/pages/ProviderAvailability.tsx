import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import { Copy, Info, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { MonthTabs } from '@/components/availability/MonthTabs';
import { CalendarModeView } from '@/components/availability/CalendarModeView';
import { UnavailabilitySection, UnavailabilityPeriod } from '@/components/availability/UnavailabilitySection';
import type { TimeSlot, MockReservation } from '@/components/availability/types';

// Mock reservations data
const generateMockReservations = (): Record<string, MockReservation[]> => {
  const today = new Date();
  const reservations: Record<string, MockReservation[]> = {};
  
  const day5 = new Date(today.getFullYear(), today.getMonth(), 5);
  const day12 = new Date(today.getFullYear(), today.getMonth(), 12);
  const day20 = new Date(today.getFullYear(), today.getMonth(), 20);
  
  reservations[format(day5, 'yyyy-MM-dd')] = [
    { id: '1', clientName: 'Marie Dupont', time: '10:00', service: 'Coupe femme' },
    { id: '2', clientName: 'Sophie Martin', time: '14:30', service: 'Coloration' },
  ];
  
  reservations[format(day12, 'yyyy-MM-dd')] = [
    { id: '3', clientName: 'Claire Bernard', time: '11:00', service: 'Brushing' },
  ];
  
  reservations[format(day20, 'yyyy-MM-dd')] = [
    { id: '4', clientName: 'Julie Petit', time: '09:30', service: 'Coupe + Brushing' },
    { id: '5', clientName: 'Camille Roux', time: '15:00', service: 'Balayage' },
    { id: '6', clientName: 'Emma Blanc', time: '17:00', service: 'Coupe femme' },
  ];
  
  return reservations;
};

// Mock initial unavailability periods
const generateMockUnavailabilities = (): UnavailabilityPeriod[] => {
  const today = new Date();
  return [
    {
      id: '1',
      startDate: format(new Date(today.getFullYear(), today.getMonth() + 1, 24), 'yyyy-MM-dd'),
      endDate: format(new Date(today.getFullYear(), today.getMonth() + 1, 31), 'yyyy-MM-dd'),
      reason: 'Vacances de Noël',
    },
  ];
};

export default function ProviderAvailability() {
  const { toast } = useToast();
  const today = new Date();
  
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  
  // State for calendar mode
  const [calendarSlots, setCalendarSlots] = useState<Record<string, TimeSlot[]>>({});
  
  // State for unavailability periods
  const [unavailabilities, setUnavailabilities] = useState<UnavailabilityPeriod[]>(
    generateMockUnavailabilities()
  );
  
  const mockReservations = generateMockReservations();
  const currentMonthDate = new Date(selectedYear, selectedMonth, 1);

  const handleMonthChange = (month: number, year: number) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  const handleDuplicatePreviousMonth = () => {
    toast({
      title: "Disponibilités dupliquées",
      description: "Les disponibilités du mois précédent ont été copiées.",
    });
  };

  const handleDuplicateToWeekdays = (sourceDate: string, weekdays: number[]) => {
    const monthStart = startOfMonth(currentMonthDate);
    const monthEnd = endOfMonth(currentMonthDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    
    const sourceSlots = calendarSlots[sourceDate] || [];
    const newCalendarSlots = { ...calendarSlots };
    
    let count = 0;
    daysInMonth.forEach(day => {
      const dayOfWeek = getDay(day);
      if (weekdays.includes(dayOfWeek)) {
        const dateKey = format(day, 'yyyy-MM-dd');
        newCalendarSlots[dateKey] = sourceSlots.map(slot => ({
          ...slot,
          id: `${dateKey}-${slot.id}`,
        }));
        count++;
      }
    });
    
    setCalendarSlots(newCalendarSlots);
    
    toast({
      title: "Horaires dupliqués",
      description: `Les horaires ont été appliqués à ${count} jour${count > 1 ? 's' : ''}.`,
    });
  };

  const handleAddUnavailability = (period: Omit<UnavailabilityPeriod, 'id'>) => {
    const newPeriod: UnavailabilityPeriod = {
      ...period,
      id: Date.now().toString(),
    };
    setUnavailabilities(prev => [...prev, newPeriod]);
    toast({
      title: "Indisponibilité ajoutée",
      description: "La période d'indisponibilité a été enregistrée.",
    });
  };

  const handleRemoveUnavailability = (id: string) => {
    setUnavailabilities(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Indisponibilité supprimée",
      description: "La période d'indisponibilité a été retirée.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 md:top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
        <div className="container-mobile py-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <CalendarDays className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Disponibilités
            </h1>
            <p className="text-muted-foreground">
              Gérez vos horaires de travail
            </p>
          </div>
        </div>
          
          {/* Month Tabs */}
          <MonthTabs
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            onSelectMonth={handleMonthChange}
          />
        </div>
      </div>

      <div className="container-mobile py-6 space-y-6">
        {/* Duplicate Previous Month Button */}
        <Button
          variant="outline"
          onClick={handleDuplicatePreviousMonth}
          className="w-full sm:w-auto"
        >
          <Copy className="h-4 w-4 mr-2" />
          Dupliquer les disponibilités du mois précédent
        </Button>

        {/* Calendar View */}
        <CalendarModeView
          currentMonth={currentMonthDate}
          calendarSlots={calendarSlots}
          onUpdateSlots={(dateKey, slots) => {
            setCalendarSlots(prev => ({ ...prev, [dateKey]: slots }));
          }}
          onDuplicateToWeekdays={handleDuplicateToWeekdays}
          mockReservations={mockReservations}
        />

        {/* Unavailability Section */}
        <UnavailabilitySection
          periods={unavailabilities}
          onAddPeriod={handleAddUnavailability}
          onRemovePeriod={handleRemoveUnavailability}
        />

        {/* Info about unavailabilities */}
        <Alert className="bg-secondary/10 border-secondary/30">
          <Info className="h-4 w-4 text-secondary" />
          <AlertDescription className="text-sm text-foreground/80">
            Les indisponibilités définies ci-dessus écrasent les disponibilités. 
            Pour une date donnée, si une indisponibilité existe, vous ne serez pas réservable.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
