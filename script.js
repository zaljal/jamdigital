function updateClock() {
    const now = new Date();

    // Jam
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

    // Hari Masehi
    const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const dayName = days[now.getDay()];

    // Tanggal Masehi
    const date = now.getDate();
    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    // Pasaran Jawa (Legi, Pahing, Pon, Wage, Kliwon)
    const pasaran = ["Legi","Pahing","Pon","Wage","Kliwon"];
    const baseDate = new Date(1945, 7, 17); // acuan
    const diffDays = Math.floor((now - baseDate) / (1000 * 60 * 60 * 24));
    const pasaranIndex = diffDays % 5;
    const pasaranName = pasaran[pasaranIndex];

    document.getElementById("date").textContent =
        `${dayName} ${pasaranName}, ${date} ${monthName} ${year}`;
}

// Update tiap detik
setInterval(updateClock, 1000);

// Jalankan pertama kali
updateClock();
