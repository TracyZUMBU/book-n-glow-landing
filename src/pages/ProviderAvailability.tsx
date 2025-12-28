import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Copy, CalendarDays, List, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MonthTabs } from '@/components/availability/MonthTabs';
import { WeeklyModeView } from '@/components/availability/WeeklyModeView';
import { CalendarModeView } from '@/components/availability/CalendarModeView';
import type { TimeSlot, MockReservation } from '@/components/availability/types';

// Mock reservations data
const generateMockReservations = (): Record<string, MockReservation[]> => {
  const today = new Date();
  const reservations: Record<string, MockReservation[]> = {};
  
  // Add some mock reservations for the current month
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

// Generate initial mock data for weekly mode
const generateInitialWeeklySlots = (): Record<number, TimeSlot[]> => ({
  1: [{ id: 'mon-1', startTime: '09:00', endTime: '12:00' }, { id: 'mon-2', startTime: '14:00', endTime: '18:00' }],
  2: [{ id: 'tue-1', startTime: '09:00', endTime: '18:00' }],
  3: [{ id: 'wed-1', startTime: '09:00', endTime: '12:00' }],
  4: [{ id: 'thu-1', startTime: '09:00', endTime: '18:00' }],
  5: [{ id: 'fri-1', startTime: '09:00', endTime: '19:00' }],
  6: [{ id: 'sat-1', startTime: '10:00', endTime: '16:00' }],
  0: [], // Sunday closed
});

export default function ProviderAvailability() {
  const { toast } = useToast();
  const today = new Date();
  
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [mode, setMode] = useState<'weekly' | 'calendar'>('weekly');
  
  // State for weekly mode
  const [weeklySlots, setWeeklySlots] = useState<Record<number, TimeSlot[]>>(generateInitialWeeklySlots());
  
  // State for calendar mode
  const [calendarSlots, setCalendarSlots] = useState<Record<string, TimeSlot[]>>({});
  
  const mockReservations = generateMockReservations();

  const currentMonthDate = new Date(selectedYear, selectedMonth, 1);

  const handleMonthChange = (month: number, year: number) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  const handleModeChange = (newMode: 'weekly' | 'calendar') => {
    setMode(newMode);
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b">
        <div className="container-mobile py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/prestataire/parametres">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">Disponibilités</h1>
              <p className="text-sm text-muted-foreground">Gérez vos horaires de travail</p>
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

        {/* Mode Selection */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Mode de saisie</h3>
            <RadioGroup
              value={mode}
              onValueChange={(value) => handleModeChange(value as 'weekly' | 'calendar')}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="weekly"
                  id="mode-weekly"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="mode-weekly"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                >
                  <List className="h-6 w-6 mb-2 text-primary" />
                  <span className="font-medium">Par jour de la semaine</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">
                    Mêmes horaires chaque semaine
                  </span>
                </Label>
              </div>
              
              <div>
                <RadioGroupItem
                  value="calendar"
                  id="mode-calendar"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="mode-calendar"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                >
                  <CalendarDays className="h-6 w-6 mb-2 text-primary" />
                  <span className="font-medium">Par jour calendaire</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">
                    Horaires personnalisés par jour
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Unavailability Info */}
        <Alert className="bg-secondary/10 border-secondary/30">
          <Info className="h-4 w-4 text-secondary" />
          <AlertDescription className="text-sm text-foreground/80">
            Les indisponibilités exceptionnelles doivent être ajoutées dans l'onglet "Indisponibilités".
            Elles écrasent les disponibilités définies ici.
          </AlertDescription>
        </Alert>

        {/* Mode-specific view */}
        {mode === 'weekly' ? (
          <WeeklyModeView
            weeklySlots={weeklySlots}
            onUpdateSlots={(dayId, slots) => {
              setWeeklySlots(prev => ({ ...prev, [dayId]: slots }));
            }}
          />
        ) : (
          <CalendarModeView
            currentMonth={currentMonthDate}
            calendarSlots={calendarSlots}
            onUpdateSlots={(dateKey, slots) => {
              setCalendarSlots(prev => ({ ...prev, [dateKey]: slots }));
            }}
            onDuplicateToWeekdays={handleDuplicateToWeekdays}
            mockReservations={mockReservations}
          />
        )}
      </div>
    </div>
  );
}
