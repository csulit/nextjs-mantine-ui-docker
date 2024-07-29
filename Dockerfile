# Stage 1: Base image
FROM node:20-slim AS base
 
# Stage 2: Builder
FROM base AS builder
 
WORKDIR /app
 
# Copy package files first to leverage Docker caching
COPY package.json yarn.lock ./
RUN corepack enable && yarn install

ARG DOCKER_BUILD=0
ARG SKIP_ENV_VALIDATION=0
ARG PUSHER_APP_ID=1539622
ARG PUSHER_APP_KEY=affa5695ab0f6d72e6b5
ARG PUSHER_APP_SECRET=4008678bf5f5e6978376
ARG PUSHER_APP_CLUSTER=ap1
ARG NEXT_PUBLIC_PUSHER_APP_KEY=$PUSHER_APP_KEY
ARG NEXT_PUBLIC_PUSHER_APP_CLUSTER=$PUSHER_APP_CLUSTER
 
# Copy the rest of the application code
COPY . .
 
# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
 
# Ensure dependencies are installed correctly
RUN yarn install --frozen-lockfile
 
# Build the application
RUN yarn build
 
# Stage 3: Runner
FROM base AS runner
WORKDIR /app
 
# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000
 
# Create user and group for running the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 --ingroup nodejs nextjs
 
# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
 
# Adjust permissions; avoid errors if directory already exists
RUN mkdir -p .next && chown nextjs:nodejs .next
 
USER nextjs
 
# Expose the application port
EXPOSE 3000
 
# Command to run the application
CMD ["node", "server.js"]