FROM node:lts-alpine

RUN apk add --no-cache \
    git \
    bash \
    curl \
    python3 \
    make \
    g++ \
    chromium \
    chromium-chromedriver

ENV CHROME_BIN=/usr/bin/chromium-browser \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN npm install -g \
    @angular/cli \
    typescript \
    ts-node

WORKDIR /app/frontend

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "500"]
# CMD ["npm", "start"]
