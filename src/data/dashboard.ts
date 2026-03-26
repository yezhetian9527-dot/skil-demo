export type Metric = {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  live?: boolean
}

export type RevenuePoint = {
  day: string
  value: number
}

export type ActivityItem = {
  id: number
  title: string
  subtitle: string
  status: 'completed' | 'pending'
  value: string
}

export type AnalyticsRow = {
  customer: string
  revenue: string
  status: 'active' | 'pending' | 'offline'
  lastSync: string
}

export type Product = {
  name: string
  code: string
  description: string
}

export const metrics: Metric[] = [
  { label: 'TOTAL_REVENUE', value: '$284,590', change: '+12.5%', trend: 'up', live: true },
  { label: 'ACTIVE_USERS', value: '12,847', change: '+8.2%', trend: 'up' },
  { label: 'CONVERSION_RATE', value: '3.24%', change: '-2.1%', trend: 'down' },
  { label: 'AVG_ORDER_VALUE', value: '$127.40', change: '+4.8%', trend: 'up' },
]

export const revenue: RevenuePoint[] = [
  { day: 'MON', value: 56 },
  { day: 'TUE', value: 96 },
  { day: 'WED', value: 42 },
  { day: 'THU', value: 112 },
  { day: 'FRI', value: 72 },
  { day: 'SAT', value: 36 },
  { day: 'SUN', value: 28 },
]

export const activities: ActivityItem[] = [
  {
    id: 1,
    title: 'Enterprise Plan Subscription',
    subtitle: '2026-01-05 14:34:22 UTC',
    status: 'completed',
    value: '+$2,400.00',
  },
  {
    id: 2,
    title: 'Payout to Bank Account',
    subtitle: '2026-01-04 11:20:45 UTC',
    status: 'pending',
    value: '-$18,500.00',
  },
  {
    id: 3,
    title: 'New Customer: Acme Corp',
    subtitle: '2026-01-03 16:15:08 UTC',
    status: 'completed',
    value: '+$890.00',
  },
]

export const analyticsRows: AnalyticsRow[] = [
  { customer: 'ACME_CORP', revenue: '$45,230', status: 'active', lastSync: '2h ago' },
  { customer: 'GLOBEX_INC', revenue: '$32,100', status: 'active', lastSync: '5h ago' },
  { customer: 'INITECH_LLC', revenue: '$28,450', status: 'pending', lastSync: '1d ago' },
  { customer: 'WAYNE_ENT', revenue: '$19,800', status: 'offline', lastSync: '3d ago' },
  { customer: 'STARK_IND', revenue: '$67,890', status: 'active', lastSync: '30m ago' },
]

export const products: Product[] = [
  {
    name: 'Analytics Dashboard Pro',
    code: 'PROD_001',
    description: 'Real-time data visualization',
  },
  {
    name: 'Revenue Tracker',
    code: 'PROD_002',
    description: 'Automated financial reporting',
  },
  {
    name: 'Customer Insights',
    code: 'PROD_003',
    description: 'Behavioral analysis tools',
  },
]

export const sidebarSections: {
  system: [string, string][]
  nav: string[]
} = {
  system: [
    ['UPTIME:', '99.97%'],
    ['LATENCY:', '12ms'],
    ['VERSION:', 'v3.2.1'],
  ],
  nav: ['OVERVIEW', 'ANALYTICS', 'CUSTOMERS', 'PRODUCTS', 'REPORTS', 'SETTINGS'],
}
