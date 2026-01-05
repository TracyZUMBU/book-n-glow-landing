import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { fakeClients } from '@/data/fakeClientsData';

type SortOption = 'recent' | 'oldest' | 'alphabetical';

const ProviderClients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('recent');

  const filteredAndSortedClients = useMemo(() => {
    let clients = [...fakeClients];

    // Filtrage par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      clients = clients.filter(
        (client) =>
          client.firstName.toLowerCase().includes(query) ||
          client.lastName.toLowerCase().includes(query) ||
          client.phone.includes(query)
      );
    }

    // Tri
    switch (sortOption) {
      case 'recent':
        clients.sort(
          (a, b) =>
            new Date(b.lastAppointmentDate).getTime() -
            new Date(a.lastAppointmentDate).getTime()
        );
        break;
      case 'oldest':
        clients.sort(
          (a, b) =>
            new Date(a.firstAppointmentDate).getTime() -
            new Date(b.firstAppointmentDate).getTime()
        );
        break;
      case 'alphabetical':
        clients.sort((a, b) => a.lastName.localeCompare(b.lastName));
        break;
    }

    return clients;
  }, [searchQuery, sortOption]);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
            Mes clients
          </h1>
          <p className="text-sm text-muted-foreground">
            {fakeClients.length} clients enregistrés
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, prénom ou téléphone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={sortOption}
          onValueChange={(value: SortOption) => setSortOption(value)}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Plus récents</SelectItem>
            <SelectItem value="oldest">Plus anciens</SelectItem>
            <SelectItem value="alphabetical">Ordre alphabétique</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">
                      {client.lastName}
                    </TableCell>
                    <TableCell>{client.firstName}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/prestataire/clients/${client.id}`}>
                          Voir le détail
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredAndSortedClients.map((client) => (
          <Card key={client.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">
                    {client.lastName} {client.firstName}
                  </p>
                  <p className="text-sm text-muted-foreground">{client.phone}</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/prestataire/clients/${client.id}`}>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedClients.length === 0 && (
        <div className="text-center py-12">
          <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium text-foreground">
            Aucun client trouvé
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Essayez de modifier votre recherche.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProviderClients;
