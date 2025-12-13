let indexEditJadwal = null;

function loadJadwal() {
    const data = JSON.parse(localStorage.getItem("jadwal")) || [];
    const tbody = document.getElementById("tableJadwal");
    tbody.innerHTML = "";

    data.forEach((j, i) => {
        tbody.innerHTML += `
        <tr>
            <td>${j.penyewa}</td>
            <td>${j.lapangan}</td>
            <td>${j.tanggal}</td>
            <td>${j.mulai} - ${j.selesai}</td>
            <td>
                <button class="btn-warning" onclick="editJadwal(${i})">Edit</button>
                <button class="btn-danger" onclick="hapusJadwal(${i})">Hapus</button>
            </td>
        </tr>`;
    });
}

function addJadwal() {
    const penyewa = document.getElementById("penyewaJadwal").value;
    const lap = document.getElementById("lapangan").value;
    const tgl = document.getElementById("tanggal").value;
    const mulai = document.getElementById("mulai").value;
    const selesai = document.getElementById("selesai").value;

    if (!penyewa || !lap || !tgl || !mulai || !selesai) {
        alert("Lengkapi data!");
        return;
    }

    let data = JSON.parse(localStorage.getItem("jadwal")) || [];

    if (indexEditJadwal === null) {
        data.push({ penyewa, lapangan: lap, tanggal: tgl, mulai, selesai });
    } else {
        data[indexEditJadwal] = { penyewa, lapangan: lap, tanggal: tgl, mulai, selesai };
        indexEditJadwal = null;
    }

    localStorage.setItem("jadwal", JSON.stringify(data));
    loadJadwal();
    resetJadwal();
}

function editJadwal(i) {
    const data = JSON.parse(localStorage.getItem("jadwal")) || [];
    const j = data[i];

    document.getElementById("penyewaJadwal").value = j.penyewa;
    document.getElementById("lapangan").value = j.lapangan;
    document.getElementById("tanggal").value = j.tanggal;
    document.getElementById("mulai").value = j.mulai;
    document.getElementById("selesai").value = j.selesai;

    indexEditJadwal = i;
}

function hapusJadwal(i) {
    if (!confirm("Hapus jadwal ini?")) return;

    const data = JSON.parse(localStorage.getItem("jadwal")) || [];
    data.splice(i, 1);
    localStorage.setItem("jadwal", JSON.stringify(data));
    loadJadwal();
}

function resetJadwal() {
    document.getElementById("penyewaJadwal").value = "";
    document.getElementById("lapangan").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("mulai").value = "";
    document.getElementById("selesai").value = "";
}
