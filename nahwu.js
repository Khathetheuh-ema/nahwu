//daftar fungsi
const fungsi = [
            "About()",
       "Help()"
      ]
      
const Kfungsi = [
            "alert tentang aplikasi, versi dan kontak pengembang",
       "alert bantuan menampilkan fungsi ataw featur yang tersedia"
      ]
   
Function About(){
alert("Kumpulan rumus-rumus dan kaidah dalam ilmu bahasa arab (ilmu nahwu) \n
      Version : 001.00 create by bebegig118 || 081220206315 || Bandung")
}
function Help(){
      let alr = fungsi.map(function(e, i){return(e + " => " + Kfungsi[i])});
      alert(alr.join("\n"));
}
