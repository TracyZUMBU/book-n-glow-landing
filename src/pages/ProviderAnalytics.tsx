import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Euro,
  Calendar,
  Users,
  ShoppingCart,
  BarChart3,
  Info,
} from "lucide-react";
import {
  kpiData,
  monthlyRevenueData,
  clientsData,
  clientStats,
  servicesDistribution,
  basketData,
  basketStats,
  monthlySummary,
} from "@/data/fakeAnalyticsData";

const KPICard = ({
  title,
  value,
  variation,
  trend,
  icon: Icon,
  suffix = "",
}: {
  title: string;
  value: number;
  variation: number;
  trend: "up" | "down";
  icon: React.ElementType;
  suffix?: string;
}) => (
  <Card className="relative overflow-hidden">
    <CardContent className="p-4 sm:p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
            {value.toLocaleString("fr-FR")}
            {suffix}
          </p>
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
            )}
            <span
              className={`text-xs sm:text-sm font-medium ${
                trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend === "up" ? "+" : ""}
              {variation}%
            </span>
            <span className="text-xs text-muted-foreground">vs mois précédent</span>
          </div>
        </div>
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const revenueChartConfig = {
  revenue: {
    label: "CA (€)",
    color: "hsl(var(--primary))",
  },
};

const clientsChartConfig = {
  nouveaux: {
    label: "Nouveaux clients",
    color: "hsl(var(--primary))",
  },
  recurrents: {
    label: "Clients récurrents",
    color: "hsl(var(--chart-2))",
  },
};

const basketChartConfig = {
  panier: {
    label: "Panier moyen (€)",
    color: "hsl(var(--chart-3))",
  },
};

const ProviderAnalytics = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            Analyses
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Aperçu de votre activité — Ces données vous aident à mieux comprendre votre performance
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Chiffre d'affaires (année)"
          value={kpiData.revenue.value}
          variation={kpiData.revenue.variation}
          trend={kpiData.revenue.trend}
          icon={Euro}
          suffix=" €"
        />
        <KPICard
          title="Réservations"
          value={kpiData.bookings.value}
          variation={kpiData.bookings.variation}
          trend={kpiData.bookings.trend}
          icon={Calendar}
        />
        <KPICard
          title="Clients uniques"
          value={kpiData.uniqueClients.value}
          variation={Math.abs(kpiData.uniqueClients.variation)}
          trend={kpiData.uniqueClients.trend}
          icon={Users}
        />
        <KPICard
          title="Panier moyen"
          value={kpiData.averageBasket.value}
          variation={kpiData.averageBasket.variation}
          trend={kpiData.averageBasket.trend}
          icon={ShoppingCart}
          suffix=" €"
        />
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader className="pb-2 sm:pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Chiffre d'affaires par mois
            </CardTitle>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Info className="h-3 w-3" />
              Données estimatives — année en cours
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={revenueChartConfig} className="h-[250px] sm:h-[300px] w-full">
            <BarChart data={monthlyRevenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11 }} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 11 }} 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}€`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar 
                dataKey="revenue" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Clients & Services Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Clients Chart */}
        <Card>
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Clients nouveaux vs récurrents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ChartContainer config={clientsChartConfig} className="h-[200px] sm:h-[250px] w-full">
              <BarChart data={clientsData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 10 }} 
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 11 }} 
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="nouveaux" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="recurrents" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-4 pt-2 border-t">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">{clientStats.recurringPercentage}%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Clients récurrents</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">{clientStats.avgBookingsPerClient}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Réservations / client</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Distribution */}
        <Card>
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-lg sm:text-xl">Répartition des prestations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="h-[180px] sm:h-[220px] w-[180px] sm:w-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={servicesDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {servicesDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      formatter={(value) => [`${value}%`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-2 sm:space-y-3 w-full">
                {servicesDistribution.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-sm">{service.name}</span>
                    </div>
                    <span className="text-sm font-medium">{service.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Basket Analysis */}
      <Card>
        <CardHeader className="pb-2 sm:pb-4">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Analyse du panier moyen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartContainer config={basketChartConfig} className="h-[200px] sm:h-[250px] w-full">
            <LineChart data={basketData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11 }} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 11 }} 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}€`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="panier"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="grid grid-cols-3 gap-4 pt-2 border-t">
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">{basketStats.min} €</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Panier minimum</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-primary">{basketStats.average} €</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Panier moyen</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">{basketStats.max} €</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Panier maximum</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Table */}
      <Card>
        <CardHeader className="pb-2 sm:pb-4">
          <CardTitle className="text-lg sm:text-xl">Tableau récapitulatif</CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Statistiques basées sur vos réservations
          </p>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[100px]">Mois</TableHead>
                <TableHead className="text-right">CA (€)</TableHead>
                <TableHead className="text-right">Réservations</TableHead>
                <TableHead className="text-right">Clients</TableHead>
                <TableHead className="text-right">Panier moyen (€)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthlySummary.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.month}</TableCell>
                  <TableCell className="text-right">{row.ca.toLocaleString("fr-FR")}</TableCell>
                  <TableCell className="text-right">{row.reservations}</TableCell>
                  <TableCell className="text-right">{row.clients}</TableCell>
                  <TableCell className="text-right">{row.panier}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProviderAnalytics;
