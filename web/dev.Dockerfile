FROM node:21.1-alpine3.18

# Set working directory
WORKDIR /usr/src/buy-me-pares/web

# Copy package files only (to leverage Docker's layer caching)
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies based on lockfile, if available
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi

# Copy the rest of the project files (except node_modules)
COPY . .

# Set environment variable to prevent telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set up a command to start Next.js in development mode
CMD \
    if [ -f yarn.lock ]; then yarn dev; \
    elif [ -f package-lock.json ]; then npm run dev; \
    elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
    else yarn dev; \
    fi