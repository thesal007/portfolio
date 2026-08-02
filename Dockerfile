# ---- Base ----
FROM node:20-alpine AS base

# ---- Dev ----
FROM base AS dev
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only dependency files first (for better caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install   # installs all deps (including dev)

# Copy the rest of the source code (but we'll mount it anyway)
COPY . .

EXPOSE 3000

# Start the development server with hot reload
CMD ["pnpm", "dev"]