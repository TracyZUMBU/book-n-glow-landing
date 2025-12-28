export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
}

export interface DayAvailability {
  dayOfWeek?: number; // 0 = Sunday, 1 = Monday, etc.
  date?: string; // For calendar mode
  timeSlots: TimeSlot[];
}

export interface MonthAvailability {
  month: number; // 0-11
  year: number;
  mode: 'weekly' | 'calendar';
  weeklyAvailability: DayAvailability[];
  calendarAvailability: Record<string, DayAvailability>;
}

export interface MockReservation {
  id: string;
  clientName: string;
  time: string;
  service: string;
}

export const DAYS_OF_WEEK = [
  { id: 1, name: 'Lundi', shortName: 'Lun' },
  { id: 2, name: 'Mardi', shortName: 'Mar' },
  { id: 3, name: 'Mercredi', shortName: 'Mer' },
  { id: 4, name: 'Jeudi', shortName: 'Jeu' },
  { id: 5, name: 'Vendredi', shortName: 'Ven' },
  { id: 6, name: 'Samedi', shortName: 'Sam' },
  { id: 0, name: 'Dimanche', shortName: 'Dim' },
];

export const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];
