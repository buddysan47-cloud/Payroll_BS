import { Users, Briefcase, FileText, TrendingUp, BarChart3 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const chartData = [
  { dept: 'IT', count: 35 },
  { dept: 'HR', count: 12 },
  { dept: 'Sales', count: 28 },
  { dept: 'Marketing', count: 18 },
  { dept: 'Finance', count: 15 },
]

export default function SuperAdminDashboard() {
  const stats = [
    { label: 'Total Departemen', value: '5', icon: Briefcase, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Karyawan', value: '250', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Payroll Aktif', value: '25', icon: FileText, color: 'from-purple-500 to-purple-600' },
    { label: 'Pertumbuhan YoY', value: '+12%', icon: TrendingUp, color: 'from-yellow-500 to-yellow-600' },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="section-title">Dashboard Superadmin</h1>
        <p className="text-gray-500">Kelola seluruh sistem payroll perusahaan</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </div>
              <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg text-white`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 card">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Distribusi Karyawan per Departemen
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dept" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary */}
        <div className="card">
          <h3 className="font-bold text-lg mb-4">Ringkasan</h3>
          <div className="space-y-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Status Sistem</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="font-semibold text-sm">Aktif</p>
              </div>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Payroll Bulan Ini</p>
              <p className="font-semibold">Rp. 2.5M</p>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Periode Aktif</p>
              <p className="font-semibold text-sm">Mei 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Departments */}
        <div className="card">
          <h3 className="font-bold text-lg mb-4">Departemen</h3>
          <div className="space-y-2">
            {['IT', 'HR', 'Sales', 'Marketing', 'Finance'].map((dept, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition cursor-pointer"
              >
                <span className="font-medium text-sm">{dept}</span>
                <span className="badge badge-primary">Aktif</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="card">
          <h3 className="font-bold text-lg mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-3">
            {[
              { action: 'Payroll Diproses', date: '30 Mei 2026' },
              { action: 'Karyawan Baru Ditambahkan', date: '28 Mei 2026' },
              { action: 'Schedule Jadwal Dibuat', date: '25 Mei 2026' },
              { action: 'Backup Data Selesai', date: '20 Mei 2026' },
            ].map((activity, i) => (
              <div key={i} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
                <p className="font-medium text-sm">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="card-hover">
          <div className="text-3xl mb-2">🏢</div>
          <p className="font-semibold text-sm">Departemen</p>
          <p className="text-xs text-gray-500">Kelola</p>
        </button>
        <button className="card-hover">
          <div className="text-3xl mb-2">👥</div>
          <p className="font-semibold text-sm">Karyawan</p>
          <p className="text-xs text-gray-500">Semua</p>
        </button>
        <button className="card-hover">
          <div className="text-3xl mb-2">💰</div>
          <p className="font-semibold text-sm">Payroll</p>
          <p className="text-xs text-gray-500">Proses</p>
        </button>
        <button className="card-hover">
          <div className="text-3xl mb-2">⚙️</div>
          <p className="font-semibold text-sm">Setting</p>
          <p className="text-xs text-gray-500">Konfigurasi</p>
        </button>
      </div>
    </div>
  )
}
