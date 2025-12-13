let indexEdit = null;

function loadPemesanan() {
    loadLapanganOptions();
    const data = JSON.parse(localStorage.getItem("pemesanan")) || [];
    const tbody = document.getElementById("tablePemesanan");
    tbody.innerHTML = "";

    data.forEach((p, i) => {
        tbody.innerHTML += `
        <tr>
            <td>${p.nama}</td>
            <td>${p.jenis}</td>
            <td>${p.tanggal}</td>
            <td>${p.jamMasuk} - ${p.jamKeluar}</td>
            <td>${p.telepon}</td>
            <td>${p.harga}</td>
            <td>
                <button class="btn-warning" onclick="editPemesanan(${i})">
                    Edit
                </button>
                <button class="btn-danger" onclick="hapusPemesanan(${i})">
                    Hapus
                </button>
            </td>
        </tr>`;
    });
}

function addPemesanan() {
    const nama = document.getElementById("nama").value;
    const jenis = document.getElementById("lapangan").value;
    const tanggal = document.getElementById("tanggal").value;
    const jamMasuk = document.getElementById("jamMasuk").value;
    const jamKeluar = document.getElementById("jamKeluar").value;
    const telepon = document.getElementById("telepon").value;
    const harga = document.getElementById("harga").value;

    if (!nama || !jenis || !tanggal || !jamMasuk || !jamKeluar || !telepon) {
        alert("Lengkapi semua data!");
        return;
    }

    let data = JSON.parse(localStorage.getItem("pemesanan")) || [];

    if (indexEdit === null) {
        // TAMBAH
        data.push({ nama, jenis, tanggal, jamMasuk, jamKeluar, telepon, harga });
    } else {
        // UPDATE
        data[indexEdit] = { nama, jenis, tanggal, jamMasuk, jamKeluar, telepon, harga };
        indexEdit = null;
    }

    localStorage.setItem("pemesanan", JSON.stringify(data));
    loadPemesanan();
    resetForm();
}

function editPemesanan(i) {
    const data = JSON.parse(localStorage.getItem("pemesanan")) || [];
    const p = data[i];

    document.getElementById("nama").value = p.nama;
    document.getElementById("lapangan").value = p.jenis;
    document.getElementById("tanggal").value = p.tanggal;
    document.getElementById("jamMasuk").value = p.jamMasuk;
    document.getElementById("jamKeluar").value = p.jamKeluar;
    document.getElementById("telepon").value = p.telepon;
    document.getElementById("harga").value = p.harga;

    indexEdit = i;
    updateHarga(); // Update harga otomatis saat edit
}

function hapusPemesanan(i) {
    if (!confirm("Yakin ingin menghapus data ini?")) return;

    const data = JSON.parse(localStorage.getItem("pemesanan")) || [];
    data.splice(i, 1);
    localStorage.setItem("pemesanan", JSON.stringify(data));
    loadPemesanan();
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("lapangan").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("jamMasuk").value = "";
    document.getElementById("jamKeluar").value = "";
    document.getElementById("telepon").value = "";
    document.getElementById("harga").value = "";
}

function loadLapanganOptions() {
    const lapanganData = JSON.parse(localStorage.getItem("lapangan")) || [];
    const select = document.getElementById("lapangan");
    select.innerHTML = '<option value="">Pilih Jenis Lapangan</option>';
    lapanganData.forEach(l => {
        select.innerHTML += `<option value="${l.jenis}">${l.jenis} - ${l.tipe}</option>`;
    });
}

function updateHarga() {
    const jenis = document.getElementById("lapangan").value;
    const jamMasuk = document.getElementById("jamMasuk").value;
    const jamKeluar = document.getElementById("jamKeluar").value;

    if (!jenis || !jamMasuk || !jamKeluar) {
        document.getElementById("harga").value = "";
        return;
    }

    const lapanganData = JSON.parse(localStorage.getItem("lapangan")) || [];
    const lapangan = lapanganData.find(l => l.jenis === jenis);
    if (!lapangan) {
        document.getElementById("harga").value = "";
        return;
    }

    const hargaPerJam = parseInt(lapangan.harga);
    const durasi = hitungDurasi(jamMasuk, jamKeluar);
    const total = hargaPerJam * durasi;
    document.getElementById("harga").value = total;
}

function hitungDurasi(jamMasuk, jamKeluar) {
    const masuk = new Date(`1970-01-01T${jamMasuk}:00`);
    const keluar = new Date(`1970-01-01T${jamKeluar}:00`);
    const diff = (keluar - masuk) / (1000 * 60 * 60); // jam
    return diff > 0 ? diff : 0;
}
