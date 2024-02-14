#!/bin/bash

# Start MongoDB
mongod --dbpath /path/to/your/mongodb/data &

# Start Backend
cd backend && node server.js &

# Start Frontend
cd frontend/add-liquidity-app && npm run dev
