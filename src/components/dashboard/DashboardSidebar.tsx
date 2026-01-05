import { CalendarDays, Settings, Store, Euro, BarChart3, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: 'Revenus & Paiements',
    url: '/prestataire/revenus',
    icon: Euro,
  },
  {
    title: 'Analyses',
    url: '/prestataire/analyses',
    icon: BarChart3,
  },
  {
    title: 'Clients',
    url: '/prestataire/clients',
    icon: Users,
  },
  {
    title: 'Profil salon',
    url: '/prestataire/profil',
    icon: Store,
  },
  {
    title: 'Disponibilités',
    url: '/prestataire/disponibilites',
    icon: CalendarDays,
  },
  {
    title: 'Paramètres',
    url: '/prestataire/parametres',
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          {!isCollapsed && (
            <span className="font-display font-semibold text-foreground">
              Espace Pro
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
