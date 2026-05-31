# 🏢 Payroll Management System

Sistem manajemen payroll terintegrasi dengan fitur lengkap untuk mengelola data karyawan, absensi, perizinan, cuti, dan slip gaji.

## 📋 Fitur Utama

### Role-Based Access
- **Superadmin**: Manajemen keseluruhan sistem
- **Admin Departemen**: Manajemen jadwal, lembur, perizinan departemen
- **Karyawan**: Self-service dashboard dan pengajuan

### Dashboard Karyawan
- 📊 Data Diri (Nama, NIK, Jabatan, Line Manager, dll)
- 👨‍👩‍👧‍👦 Informasi Keluarga & Anak
- 📱 Responsive & Mobile-Friendly

### Menu Utama
- **Absensi & Slip Gaji**: Riwayat kehadiran dan dokumen gaji
- **Perizinan**: Ijin Keluar, Dispensasi, Khusus, Pulang
- **Cuti**: Cuti Tahunan & Cuti Khusus
- **Jadwal & Lembur**: (Admin Departemen)

### Integrasi
- 🔗 Mesin Absensi Fingerprint (Auto Record)
- 📲 Mobile-Responsive
- 🌙 Dark Mode Support

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Tailwind CSS
- Zustand (State Management)
- Axios (HTTP Client)
- React Router v6

### Backend
- Node.js + Express
- MongoDB / PostgreSQL
- JWT Authentication
- Multer (File Upload)

## 📂 Project Structure

```
Payroll_BS/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── styles/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   ├── .env
│   └── package.json
├── docs/
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm atau yarn
- MongoDB atau PostgreSQL

### Installation

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run dev
```

## 📄 License

MIT License - 2026

---

**Created by**: buddysan47-cloud
**Last Updated**: 2026-05-31
