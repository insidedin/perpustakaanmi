//form kunjungan
document.addEventListener('DOMContentLoaded', function () {
    setDateTime();
    setInterval(setDateTime, 1000); 

    const kunjunganForm = document.getElementById('kunjunganForm');
    kunjunganForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        setSuccessMessage();
        resetForm();
    });
});

function setDateTime() {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().split(' ')[0];

    document.getElementById('tanggal').value = currentDate;
    document.getElementById('waktu').value = currentTime;
}

function setSuccessMessage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
}

function resetForm() {
    document.getElementById('kunjunganForm').reset();
}

function closeSuccessMessage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';
}

//daftar buku
const dataBuku = [
    { noBuku: 1, judul: 'Buku Mata Kuliah 1', pengarang: 'Pengarang 1', jenis: 'Mata Kuliah', detail: 'Kelas: A' },
    { noBuku: 2, judul: 'Buku Laporan 1', pengarang: 'Pengarang 2', jenis: 'Laporan', detail: 'Jenis Laporan: Jenis A, Penyusun: Penyusun 1' },
];

const bukuPendukungData = [
    { noBuku: 1, judul: 'Buku Pendukung 1', pengarang: 'Pengarang Pendukung 1', jenis: 'Pendukung', detail: 'Kategori: A' },
    { noBuku: 2, judul: 'Buku Pendukung 2', pengarang: 'Pengarang Pendukung 2', jenis: 'Pendukung', detail: 'Kategori: B' },
];

const bukuLaporanKP = [
    { noBuku: 1, judul: 'Buku Laporan KP 1', pengarang: 'Pengarang Laporan KP 1', jenis: 'Laporan KP', detail: 'Jenis Laporan DIII: Jenis X, Penyusun: Penyusun X' },
    { noBuku: 2, judul: 'Buku Laporan KP 2', pengarang: 'Pengarang Laporan KP 2', jenis: 'Laporan KP', detail: 'Jenis Laporan DIII: Jenis Y, Penyusun: Penyusun Y' },
];

const bukuLaporanDIII = [
    { noBuku: 1, judul: 'Buku Laporan DIII 1', pengarang: 'Pengarang Laporan DIII 1', jenis: 'Laporan DIII', detail: 'Jenis Laporan DIII: Jenis X, Penyusun: Penyusun X' },
    { noBuku: 2, judul: 'Buku Laporan DIII 2', pengarang: 'Pengarang Laporan DIII 2', jenis: 'Laporan DIII', detail: 'Jenis Laporan DIII: Jenis Y, Penyusun: Penyusun Y' },
];

const bukuLaporanDIV = [
    { noBuku: 1, judul: 'Buku Laporan DIV 1', pengarang: 'Pengarang Laporan DIV 1', jenis: 'Laporan DIV', detail: 'Jenis Laporan DIV: Jenis P, Penyusun: Penyusun P' },
    { noBuku: 2, judul: 'Buku Laporan DIV 2', pengarang: 'Pengarang Laporan DIV 2', jenis: 'Laporan DIV', detail: 'Jenis Laporan DIV: Jenis Q, Penyusun: Penyusun Q' },
];

let currentData = dataBuku; 

function populateTable(bookData) {
    const tableBody = document.getElementById('tabel-buku-body');
    tableBody.innerHTML = '';

    bookData.forEach(book => {
        const row = document.createElement('tr');

        const noBukuCell = document.createElement('td');
        noBukuCell.textContent = book.noBuku;
        row.appendChild(noBukuCell);

        const judulCell = document.createElement('td');
        judulCell.textContent = book.judul;
        row.appendChild(judulCell);

        const pengarangCell = document.createElement('td');
        pengarangCell.textContent = book.pengarang;
        row.appendChild(pengarangCell);

        const jenisBukuCell = document.createElement('td');
        jenisBukuCell.textContent = book.jenis;
        row.appendChild(jenisBukuCell);

        const detailCell = document.createElement('td');
        detailCell.textContent = book.detail;
        row.appendChild(detailCell);

        tableBody.appendChild(row);
    });
}

function showContent(contentId) {
    if (contentId === 'buku-pendukung') {
        currentData = bukuPendukungData;
    } else if (contentId === 'buku-laporan-kp') {
        currentData = bukuLaporanKP;
    } else if (contentId === 'buku-laporan-diii') {
        currentData = bukuLaporanDIII;
    } else if (contentId === 'buku-laporan-div') {
        currentData = bukuLaporanDIV;
    }

    populateTable(currentData);
}

function searchTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = currentData.filter(book => {
        return book.judul.toLowerCase().includes(searchInput) ||
            book.pengarang.toLowerCase().includes(searchInput) ||
            book.jenis.toLowerCase().includes(searchInput) ||
            book.detail.toLowerCase().includes(searchInput);
    });

    populateTable(filteredData);
}

function navigatePage(page) {

}

populateTable(currentData);