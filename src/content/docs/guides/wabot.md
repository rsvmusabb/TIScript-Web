---
title: Neural WA Bot (Failover AI)
description: Skrip Bot WhatsApp berbasis AI dengan integrasi Gemini (fallback Pollinations) dan ElevenLabs.
---

import { Tabs, TabItem } from '@astrojs/starlight/components';
import { Aside } from '@astrojs/starlight/components';

<Aside type="danger" title="Cosmic Security Standard (Zero Trust)">
  Skrip ini dirancang untuk produksi tingkat tinggi. **DILARANG KERAS** melakukan hardcode pada API Key Gemini maupun ElevenLabs. Gunakan file \.env\ untuk menyimpan kredensial Anda.
</Aside>

## Arsitektur Sistem

Bot WhatsApp ini bukan sekadar auto-reply biasa. Ini adalah sistem automasi modular yang memisahkan *concern* antara logika AI, fungsionalitas RPG, dan *Utilities*.

### Fitur Utama:
1. **Modular Routing:** Arsitektur bersih (Clean Code) tanpa *spaghetti code*.
2. **Failover AI Engine:** Jika satu AI *down*, sistem otomatis melakukan *fallback*.
3. **Neural Voice Integration:** Konversi teks ke suara menggunakan *codec Opus*.
4. **Sliding Window Rate-Limiter:** Sistem anti-DDoS untuk mencegah *spamming* pesan.

---

## Cara Instalasi

<Tabs>
  <TabItem label="Prasyarat" icon="setting">
    Pastikan Anda telah menginstal:
    - Node.js (Minimal v22)
    - FFMPEG (Untuk konversi audio)
  </TabItem>
  <TabItem label="Kloning Repositori" icon="github">
    ```bash
    git clone https://github.com/rsvmusabb/dhoells-wabot.git
    cd dhoells-wabot
    ```
  </TabItem>
</Tabs>

## Pengaturan Environment

Buat file bernama \.env\ di direktori *root*, lalu isi dengan standar keamanan berikut:

```env
# Kredensial AI
GEMINI_API_KEY=YOUR_GEMINI_KEY_HERE
ELEVENLABS_API_KEY=YOUR_ELEVENLABS_KEY_HERE

# Pengaturan Limit
RATE_LIMIT_MS=5000
MAX_REQUESTS_PER_MINUTE=10
```

## Memulai Mesin

Jalankan skrip penyalaan berikut. Sistem akan membangkitkan QR Code di terminal Anda.

```bash
npm install
npm run start
```

<Aside type="tip">
  Pindai QR Code menggunakan aplikasi WhatsApp di ponsel Anda. Sistem memory *Rolling Window* akan otomatis aktif setelah perangkat terhubung.
</Aside>
