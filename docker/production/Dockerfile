FROM node:20-alpine as base

# create backend directory
RUN mkdir -p /home/nextjs/app
WORKDIR /home/nextjs/app

#COPY ["package.json", "package-lock.json*", "./"]
#RUN npm install --loglevel=warn;

RUN apk add --update vim
RUN addgroup -g 1005 nodejs
RUN adduser -D -u 1005 nextjs -G nodejs
RUN chown -R nextjs:nodejs /home/nextjs/app
ENV USER=nextjs

RUN mkdir -p /home/nextjs/app/.next
RUN chown -R nextjs:nodejs /home/nextjs/app/.next

COPY --chown=nextjs:nodejs ["package.json", "package-lock.json*", "./"]

# Install dependencies
RUN npm install --loglevel=warn;

# Copy source directory
COPY --chown=nextjs:nodejs . .

RUN npm run build

RUN mkdir /home/nextjs/.npm-global
RUN chown -R nextjs:nodejs /home/nextjs/.npm-global

ENV PATH=$PATH:/home/nextjs/.npm-global/bin
ENV NPM_CONFIG_PREFIX=/home/nextjs/.npm-global
ENV NODE_ENV=production

USER nextjs

RUN npm i --location=global pm2

CMD [ "pm2-runtime", "--no-autorestart", "npm", "--", "run", "start:prod"]