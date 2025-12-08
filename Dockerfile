FROM node:22-slim

# 1. Instalamos dependencias de sistema. 
# Añadimos 'pkg-config' y librerías comunes que a veces sharp necesita en versiones slim.
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 2. Copiamos los archivos de dependencias
COPY package.json yarn.lock ./

# 3. Instalamos todo según el lockfile
RUN yarn install --frozen-lockfile --non-interactive

# 4. SOLUCIÓN CLAVE: Forzamos la reconstrucción de sharp para Linux
# Esto descarga el binario correcto 'sharp-linux-x64.node' ignorando el lockfile previo
RUN npm rebuild sharp --verbose

# 5. Copiamos el resto del código
# Al hacerlo AHORA, no rompemos la instalación de sharp
COPY . .

ENV GATSBY_TELEMETRY_DISABLED=1 \
    NODE_ENV=development \
    TSC_COMPILE_ON_ERROR=true \
    NODE_OPTIONS="--trace-warnings --trace-uncaught --max-old-space-size=6144"

EXPOSE 8000 8001

CMD ["yarn", "run", "develop", "-H", "0.0.0.0"]