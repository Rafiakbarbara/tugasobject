//contoh membuat OBJECT di dalam js
//1,contoh Object sederhana
let karyawan ={
    nip: '123',
   nama: 'amir mahpud',
   alamat: 'pamulang',
};

console.log('nip   :'+karyawan.nip);
console.log('nama   :'+karyawan.nama);
console.log('alamat   :'+karyawan.alamat);

//2. contoh object yang kompleks
let pegawai= {
    nip:'111',
    nama:'budi mahmud',
    alamat:{
        jalan:'jl kesedihan 8-2',
        keluarahan:'pondok benda',
        kecamatan:'pamulang',
        kota:'tangerang selatan'
    }
}
console.log('nip  :'+pegawai.nip);
console.log('nama  :'+pegawai.nama);
console.log('alamat jalan  :'+pegawai.alamat.jalan);
console.log('alamat kelurahan :'+pegawai.alamat.kelurahan);
console.log('alamat kecamatan  :'+pegawai.alamat.kecamatan);
console.log('alamat kota :'+pegawai.alamat.kota);
