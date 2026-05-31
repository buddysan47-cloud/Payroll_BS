#!/bin/bash

# Setup script untuk Payroll_BS

echo "🚀 Starting Payroll Management System Setup..."

# Frontend setup
echo ""
echo "📦 Setting up Frontend..."
cd frontend
npm install
cp .env.example .env.local
echo "✅ Frontend setup complete"

# Backend setup
echo ""
echo "📦 Setting up Backend..."
cd ../backend
npm install
cp .env.example .env
echo "✅ Backend setup complete"

# Summary
echo ""
echo "=========================================="
echo "✅ Setup Complete!"
echo "=========================================="
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Frontend Development Server:"
echo "   cd frontend && npm run dev"
echo "   Open: http://localhost:5173"
echo ""
echo "2. Backend Development Server:"
echo "   cd backend && npm run dev"
echo "   Open: http://localhost:5000"
echo ""
echo "3. Demo Credentials:"
echo "   Email: emp@example.com (Employee)"
echo "   Email: admin@example.com (Admin)"
echo "   Email: super@example.com (Superadmin)"
echo "   Password: password"
echo ""
echo "=========================================="
