# Ionic Videochat - Installazione Manuale

## 1. Requisiti
- Node.js ≥ 18
- MySQL (es. freesqldatabase.com)
- Render.com (opzionale)
- Git (opzionale)

## 2. Configurazione .env
Rinomina `.env.example` in `.env` sia in `server/` che in `client/` e compila i campi necessari (host DB, JWT, ecc.).

## 3. Setup Database
Importa il file `sql/mysql_schema.sql` nel tuo database MySQL.

## 4. Avvio progetto

### Backend
```bash
cd server
npm install
npm run dev


# 📦 Ionic Videochat - Guida all'Installazione

Benvenuto nel sistema **Ionic Videochat**!  
Questa guida ti accompagnerà nell'installazione e configurazione della piattaforma multiroom per videochat via browser.

---

## 🧱 Requisiti

- Node.js (v18+ consigliato)
- MySQL **oppure** PostgreSQL
- Hosting compatibile con Node.js (es: [Render.com](https://render.com))
- Un database gratuito (es: [freesqldatabase.com](https://www.freesqldatabase.com))

---

## 📂 Struttura delle cartelle

- `client/` → Applicazione frontend (React + Vite)
- `server/` → Backend Express + WebSocket (socket.io)
- `install/` → Installatore web
- `sql/` → Script DB MySQL/PostgreSQL

---

## 🔧 Installazione

### 1️⃣ Preparare il database

**MySQL:**
1. Accedi al tuo phpMyAdmin (es. freesqldatabase.com)
2. Crea un database
3. Importa `sql/mysql_schema.sql`

**PostgreSQL:**
1. Usa pgAdmin o CLI
2. Crea il DB
3. Importa `sql/postgresql_schema.sql`

---

### 2️⃣ Configurare il server

1. Rinomina `server/.env.example` in `.env`
2. Inserisci:

