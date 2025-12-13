let indexEditLapangan = null;

function loadLapangan() {
    const data = JSON.parse(localStorage.getItem("lapangan")) || [];
    const tbody = document.getElementById("tableLapangan");
    tbody.innerHTML = "";

    data.forEach((l, i) => {
        tbody.innerHTML += `
        <tr>
            <td>${l.jenis}</td>
            <td>${l.tipe}</td>
            <td>${l.harga}</td>
            <td>
                <button class="btn-warning" onclick="editLapangan(${i})">Edit</button>
                <button class="btn-danger" onclick="hapusLapangan(${i})">Hapus</button>
            </td>
        </tr>`;
    });
}

function addLapangan() {
    const jenis = document.getElementById("namaLapangan").value;
    const tipe = document.getElementById("tipeLapangan").value;
    const harga = document.getElementById("hargaLapangan").value;

    if (!jenis || !tipe || !harga) {
        alert("Lengkapi data!");
        return;
    }

    let data = JSON.parse(localStorage.getItem("lapangan")) || [];

    if (indexEditLapangan === null) {
        data.push({ jenis, tipe, harga });
    } else {
        data[indexEditLapangan] = { jenis, tipe, harga };
        indexEditLapangan = null;
    }

    localStorage.setItem("lapangan", JSON.stringify(data));
    loadLapangan();
    resetLapangan();
}

function editLapangan(i) {
    const data = JSON.parse(localStorage.getItem("lapangan")) || [];
    const l = data[i];

    document.getElementById("namaLapangan").value = l.jenis;
    document.getElementById("tipeLapangan").value = l.tipe;
    document.getElementById("hargaLapangan").value = l.harga;

    indexEditLapangan = i;
}

function hapusLapangan(i) {
    if (!confirm("Hapus data lapangan ini?")) return;

    const data = JSON.parse(localStorage.getItem("lapangan")) || [];
    data.splice(i, 1);
    localStorage.setItem("lapangan", JSON.stringify(data));
    loadLapangan();
}

function resetLapangan() {
    document.getElementById("namaLapangan").value = "";
    document.getElementById("tipeLapangan").value = "";
    document.getElementById("hargaLapangan").value = "";
}
