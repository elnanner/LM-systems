# LM Systems

Plataforma de **normativa financiera y prevención de lavado de activos**, construida como un monorepo con
frontend en microfrontends y una API propia. Centraliza en un solo producto la consulta de normativa,
alertas regulatorias y verificación de listas de PEPs/sujetos de interés, con cada dominio desacoplado en
su propio microfrontend y su propio servicio de backend.

## Arquitectura

- **Shell** (host): layout compartido y montaje en tiempo de ejecución de los microfrontends vía Module
  Federation.
- **Remote — Normas Financieras**: normativa, alertas, textos ordenados, análisis, regímenes informativos.
- **Remote — Prevención de Lavado**: PEPs y listas de interés, normativa argentina, estándares
  internacionales.
- **API**: servicio propio en NestJS, con un módulo por dominio, consumido por ambos remotes vía REST.

Cada remote y la API se desarrollan, testean y deployan de forma independiente entre sí.

## Tecnologías

| Capa | Tecnología |
|---|---|
| Framework frontend | Next.js 14 (Pages Router) |
| UI | React 18 |
| Lenguaje | TypeScript |
| Estado global (por remote) | Redux + Redux-Saga |
| Microfrontends | Module Federation (`@module-federation/nextjs-mf`) |
| API | NestJS (Node.js) |
| Validación | Zod |
| Comunicación frontend ↔ API | REST |
| Testing | Jest + React Testing Library (frontend), Jest + Supertest (API) |

## Cómo levantar el proyecto

### Requisitos

- Node.js 20+
- npm 10+

### Instalación y arranque

Cada paquete del monorepo (`shell`, `normas-financieras`, `prevencion-lavado`, `api`) se instala y levanta
de forma independiente:

```bash
cd <paquete>
npm install
npm run dev
```

El shell corre en `http://localhost:3000`; cada remote y la API exponen su propio puerto, configurado por
variables de entorno al momento de integrarlos.

## Licencia

Proyecto privado, sin fines comerciales por el momento.
