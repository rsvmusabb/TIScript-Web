# TIScriptBE Portal

Portal dokumentasi script automasi & bot — dibangun dengan [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

Isi portal ini sekarang:

- **Neural WA Bot** (`/guides/wabot/`) — dokumentasi bot WhatsApp berbasis AI (Gemini + ElevenLabs) dari repo [dhoells-wabot](https://github.com/rsvmusabb/dhoells-wabot).

## Struktur

```
.
├── public/            # aset statis (favicon, dll)
├── src/
│   ├── assets/        # gambar untuk halaman
│   ├── content/
│   │   └── docs/      # halaman dokumentasi (.mdx)
│   └── content.config.ts
├── astro.config.mjs   # judul, sidebar, link GitHub
├── package.json
└── tsconfig.json
```

Halaman baru tinggal ditambah sebagai file `.mdx` di `src/content/docs/`, lalu didaftarkan di `sidebar` pada `astro.config.mjs`.

## Perintah

| Perintah          | Fungsi                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependensi                          |
| `npm run dev`     | Jalankan dev server di `localhost:4321`     |
| `npm run build`   | Build situs statis ke `./dist/`             |
| `npm run preview` | Lihat hasil build sebelum di-deploy         |
| `npm run astro`   | Jalankan perintah Astro CLI                 |

Butuh Node.js minimal v20 untuk portal ini. Bot WhatsApp yang didokumentasikan butuh Node.js minimal v22 (lihat panduan Neural WA Bot).
