# 🏸 Rental Lapangan Bulutangkis Dipendesu

Aplikasi **manajemen rental lapangan bulutangkis** berbasis web sederhana.  
Project ini dibuat **tanpa backend & tanpa database**, seluruh data disimpan menggunakan **LocalStorage** di browser.

Aplikasi ini **khusus admin**, tidak ada role customer.

## 📋 Deskripsi
Sistem ini memungkinkan admin untuk mengelola data lapangan, jadwal penggunaan, dan pemesanan rental lapangan bulutangkis secara efisien. Semua operasi dilakukan melalui antarmuka web yang mudah digunakan.

## 📌 Fitur Utama

### 🔐 Autentikasi
- Login Admin
- Logout
- Proteksi halaman (harus login)

### 🏸 Kelola Lapangan
- Tambah lapangan baru (jenis, tipe, harga per jam)
- Edit data lapangan
- Hapus lapangan
- Data tersimpan di LocalStorage

### 📅 Kelola Jadwal
- Tambah jadwal penggunaan lapangan
- Input jam mulai dan selesai
- Edit jadwal
- Hapus jadwal
- Tabel menampilkan format `Jam Mulai - Jam Selesai`

### 📝 Kelola Pemesanan
- Tambah pemesanan baru
- Edit pemesanan
- Hapus pemesanan
- Input lengkap: Nama Penyewa, Jenis Lapangan, Tanggal, Jam Masuk/Keluar, Nomor Telepon, Total Harga (dihitung otomatis)

## 🛠️ Persyaratan Sistem
- Browser web modern dengan dukungan JavaScript
- Tidak memerlukan server atau database eksternal

## 🚀 Cara Menjalankan Project

1. Download atau clone repository ini
2. Buka folder `rental-lapangan-bulutangkis final`
3. Jalankan dengan **double-click pada file `index.html`**
4. Login menggunakan akun admin default

> ⚠️ **Catatan**: Aplikasi berjalan langsung di browser tanpa perlu instalasi server.

## 🔑 Akun Admin Default
- **Username**: `admin`
- **Password**: `admin123`

## 📖 Manual Pengguna
Untuk panduan lengkap cara menggunakan aplikasi, lihat file [`manual.md`](manual.md) yang berisi langkah-langkah detail, tips, dan troubleshooting.

## 📂 Struktur Proyek
```
rental-lapangan-bulutangkis final/
├── index.html          # Halaman login
├── dashboard.html      # Dashboard admin
├── lapangan.html       # Kelola lapangan
├── jadwal.html         # Kelola jadwal
├── pemesanan.html      # Kelola pemesanan
├── readme.md           # Dokumentasi ini
├── manual.md           # Manual pengguna lengkap
├── css/
│   └── style.css       # Styling aplikasi
├── js/
│   ├── auth.js         # Logika autentikasi
│   ├── lapangan.js     # Logika kelola lapangan
│   ├── jadwal.js       # Logika kelola jadwal
│   └── pemesanan.js    # Logika kelola pemesanan
└── img/                # Folder gambar (jika ada)
```

## 💡 Tips
- Data disimpan di LocalStorage browser, jadi akan hilang jika cache dihapus.
- Pastikan JavaScript diaktifkan di browser Anda.
- Untuk pengembangan lebih lanjut, lihat kode sumber di folder `js/`.

---

**Versi**: 1.0  
**Tanggal**: Desember 2025  
**Pengembang**: [Nama Anda]