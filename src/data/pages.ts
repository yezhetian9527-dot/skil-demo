export type TrafficSource = {
  source: string
  visitors: number
  percentage: number
  trend: 'up' | 'down'
}

export type ConversionStep = {
  label: string
  value: number
  percentage: number
}

export type Customer = {
  id: string
  name: string
  email: string
  plan: 'free' | 'pro' | 'enterprise'
  revenue: string
  status: 'active' | 'churned' | 'trial'
  joinDate: string
}

export type Report = {
  id: string
  title: string
  type: 'financial' | 'usage' | 'audit' | 'performance'
  generated: string
  size: string
  status: 'ready' | 'generating' | 'scheduled'
}

export type SettingItem = {
  label: string
  value: string
  type: 'text' | 'toggle' | 'select'
  options?: string[]
}

export type SettingSection = {
  title: string
  items: SettingItem[]
}

export const trafficSources: TrafficSource[] = [
  { source: 'DIRECT', visitors: 4521, percentage: 34, trend: 'up' },
  { source: 'ORGANIC_SEARCH', visitors: 3218, percentage: 24, trend: 'up' },
  { source: 'SOCIAL_MEDIA', visitors: 2105, percentage: 16, trend: 'down' },
  { source: 'EMAIL_CAMPAIGN', visitors: 1876, percentage: 14, trend: 'up' },
  { source: 'REFERRAL', visitors: 982, percentage: 8, trend: 'down' },
  { source: 'PAID_ADS', visitors: 645, percentage: 4, trend: 'up' },
]

export const conversionFunnel: ConversionStep[] = [
  { label: 'PAGE_VIEWS', value: 48250, percentage: 100 },
  { label: 'SIGN_UPS', value: 8430, percentage: 17.5 },
  { label: 'ACTIVATED', value: 4215, percentage: 8.7 },
  { label: 'SUBSCRIBED', value: 1264, percentage: 2.6 },
  { label: 'RETAINED_30D', value: 948, percentage: 2.0 },
]

export const weeklyTraffic = [
  { day: 'MON', value: 4200 },
  { day: 'TUE', value: 5800 },
  { day: 'WED', value: 4900 },
  { day: 'THU', value: 7200 },
  { day: 'FRI', value: 6100 },
  { day: 'SAT', value: 3400 },
  { day: 'SUN', value: 2900 },
]

export const analyticsMetrics = [
  { label: 'PAGE_VIEWS', value: '48,250', change: '+18.3%', trend: 'up' as const },
  { label: 'BOUNCE_RATE', value: '34.2%', change: '-5.1%', trend: 'up' as const },
  { label: 'AVG_SESSION', value: '4m 32s', change: '+12.8%', trend: 'up' as const },
  { label: 'UNIQUE_VISITORS', value: '12,430', change: '+9.4%', trend: 'up' as const },
]

export const customers: Customer[] = [
  {
    id: 'CUS_001',
    name: 'Acme Corporation',
    email: 'admin@acme.co',
    plan: 'enterprise',
    revenue: '$45,230',
    status: 'active',
    joinDate: '2024-03-15',
  },
  {
    id: 'CUS_002',
    name: 'Globex Industries',
    email: 'ops@globex.io',
    plan: 'pro',
    revenue: '$32,100',
    status: 'active',
    joinDate: '2024-06-22',
  },
  {
    id: 'CUS_003',
    name: 'Initech LLC',
    email: 'bill@initech.com',
    plan: 'pro',
    revenue: '$28,450',
    status: 'trial',
    joinDate: '2025-11-08',
  },
  {
    id: 'CUS_004',
    name: 'Wayne Enterprises',
    email: 'cto@wayne.ent',
    plan: 'enterprise',
    revenue: '$19,800',
    status: 'churned',
    joinDate: '2024-01-10',
  },
  {
    id: 'CUS_005',
    name: 'Stark Industries',
    email: 'tech@stark.ind',
    plan: 'enterprise',
    revenue: '$67,890',
    status: 'active',
    joinDate: '2023-09-04',
  },
  {
    id: 'CUS_006',
    name: 'Umbrella Corp',
    email: 'lab@umbrella.co',
    plan: 'pro',
    revenue: '$15,320',
    status: 'active',
    joinDate: '2025-02-18',
  },
  {
    id: 'CUS_007',
    name: 'Cyberdyne Systems',
    email: 'ai@cyberdyne.net',
    plan: 'free',
    revenue: '$0',
    status: 'trial',
    joinDate: '2026-01-02',
  },
  {
    id: 'CUS_008',
    name: 'Weyland-Yutani',
    email: 'corp@wy.com',
    plan: 'enterprise',
    revenue: '$89,100',
    status: 'active',
    joinDate: '2023-05-20',
  },
]

export const customerMetrics = [
  { label: 'TOTAL_CUSTOMERS', value: '2,847', change: '+14.2%', trend: 'up' as const },
  { label: 'ACTIVE_RATE', value: '87.3%', change: '+3.1%', trend: 'up' as const },
  { label: 'AVG_LTV', value: '$4,230', change: '+8.7%', trend: 'up' as const },
  { label: 'CHURN_RATE', value: '2.4%', change: '-1.2%', trend: 'up' as const },
]

export const productMetrics = [
  { label: 'TOTAL_PRODUCTS', value: '24', change: '+3', trend: 'up' as const },
  { label: 'ACTIVE_SUBS', value: '8,420', change: '+12.1%', trend: 'up' as const },
  { label: 'MRR', value: '$142,800', change: '+9.3%', trend: 'up' as const },
  { label: 'AVG_RATING', value: '4.8/5', change: '+0.2', trend: 'up' as const },
]

export const productInventory = [
  { code: 'PROD_001', name: 'Analytics Dashboard Pro', stock: 'UNLIMITED', price: '$49/mo', status: 'active' as const },
  { code: 'PROD_002', name: 'Revenue Tracker', stock: 'UNLIMITED', price: '$29/mo', status: 'active' as const },
  { code: 'PROD_003', name: 'Customer Insights', stock: 'UNLIMITED', price: '$39/mo', status: 'active' as const },
  { code: 'PROD_004', name: 'API Gateway Module', stock: '500 KEYS', price: '$99/mo', status: 'active' as const },
  { code: 'PROD_005', name: 'Data Export Suite', stock: 'UNLIMITED', price: '$19/mo', status: 'pending' as const },
  { code: 'PROD_006', name: 'ML Prediction Engine', stock: 'BETA', price: '$149/mo', status: 'pending' as const },
]

export const reports: Report[] = [
  {
    id: 'RPT_001',
    title: 'Q4 2025 Financial Summary',
    type: 'financial',
    generated: '2026-01-05 09:00',
    size: '2.4 MB',
    status: 'ready',
  },
  {
    id: 'RPT_002',
    title: 'Monthly Active Users Report',
    type: 'usage',
    generated: '2026-01-04 14:30',
    size: '1.1 MB',
    status: 'ready',
  },
  {
    id: 'RPT_003',
    title: 'Security Audit Log',
    type: 'audit',
    generated: '2026-01-03 18:00',
    size: '4.7 MB',
    status: 'ready',
  },
  {
    id: 'RPT_004',
    title: 'System Performance Benchmark',
    type: 'performance',
    generated: '2026-01-06 06:00',
    size: '—',
    status: 'generating',
  },
  {
    id: 'RPT_005',
    title: 'Annual Revenue Breakdown',
    type: 'financial',
    generated: '2026-01-07 00:00',
    size: '—',
    status: 'scheduled',
  },
  {
    id: 'RPT_006',
    title: 'Customer Retention Analysis',
    type: 'usage',
    generated: '2026-01-02 11:15',
    size: '890 KB',
    status: 'ready',
  },
]

export const reportMetrics = [
  { label: 'TOTAL_REPORTS', value: '156', change: '+12', trend: 'up' as const },
  { label: 'GENERATED_TODAY', value: '8', change: '+3', trend: 'up' as const },
  { label: 'SCHEDULED', value: '14', change: '+2', trend: 'up' as const },
  { label: 'STORAGE_USED', value: '2.4 GB', change: '+340 MB', trend: 'down' as const },
]

export const settingSections: SettingSection[] = [
  {
    title: 'PROFILE',
    items: [
      { label: 'DISPLAY_NAME', value: 'M. Reynolds', type: 'text' },
      { label: 'EMAIL', value: 'reynolds@acme.co', type: 'text' },
      { label: 'ROLE', value: 'ADMIN::L3', type: 'text' },
      { label: 'TIMEZONE', value: 'UTC-5 (EST)', type: 'select', options: ['UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+1 (CET)', 'UTC+8 (CST)', 'UTC+9 (JST)'] },
    ],
  },
  {
    title: 'NOTIFICATIONS',
    items: [
      { label: 'EMAIL_ALERTS', value: 'ON', type: 'toggle' },
      { label: 'SYSTEM_ALERTS', value: 'ON', type: 'toggle' },
      { label: 'MARKETING', value: 'OFF', type: 'toggle' },
      { label: 'WEEKLY_DIGEST', value: 'ON', type: 'toggle' },
    ],
  },
  {
    title: 'SYSTEM',
    items: [
      { label: 'THEME', value: 'DARK', type: 'select', options: ['DARK', 'LIGHT', 'SYSTEM'] },
      { label: 'LANGUAGE', value: 'EN-US', type: 'select', options: ['EN-US', 'ZH-CN', 'JA-JP', 'DE-DE', 'FR-FR'] },
      { label: 'DATA_RETENTION', value: '90 DAYS', type: 'select', options: ['30 DAYS', '60 DAYS', '90 DAYS', '180 DAYS', '365 DAYS'] },
      { label: 'AUTO_REFRESH', value: 'ON', type: 'toggle' },
    ],
  },
]

export const apiKeys = [
  {
    name: 'PRODUCTION_KEY',
    key: 'sk_live_••••••••••••7f3a',
    created: '2025-08-12',
    lastUsed: '2h ago',
    status: 'active' as const,
  },
  {
    name: 'STAGING_KEY',
    key: 'sk_test_••••••••••••b2c1',
    created: '2025-10-03',
    lastUsed: '1d ago',
    status: 'active' as const,
  },
  {
    name: 'LEGACY_KEY',
    key: 'sk_live_••••••••••••9e4d',
    created: '2024-02-18',
    lastUsed: '45d ago',
    status: 'expired' as const,
  },
]
