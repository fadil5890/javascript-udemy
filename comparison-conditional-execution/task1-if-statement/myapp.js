var jam = 2000,
    barubangun = false,
    belajarJs = Boolean, 
    durasi = 0;

if( jam === 1300 || jam === 2000){
    belajarJs = true;
    durasi = 2;
    console.log("Fadil mulai belajar javascript selama " + durasi + " jam");
} else if (barubangun === true){
    belajarJs = true;
    durasi = 2;
    console.log("Fadil tetap mulai belajar javascript selama " + durasi + " jam");
} else {
    belajarJs = false;
    console.log("Fadil belum mau belajar javascript lagi");
}