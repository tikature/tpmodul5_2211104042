<<<<<<< HEAD
class HaloGeneric {
    SapaUser(user) {
      console.log(`Halo user ${user}`);
=======
class DataGeneric {
    constructor(data) {
      this.data = data;
    }
    PrintData() {
      console.log(`${this.data}`);
>>>>>>> generic-class
    }
  }
  
  function main() {
<<<<<<< HEAD
    const halo = new HaloGeneric();
    const nama = "Tika";
    halo.SapaUser(nama);
=======
    const nama = "Dewi Atika Muthi";
    const nim = "2211104042"; // Ganti dengan NIM praktikan
    const data = new DataGeneric(`${nama} dengan nim : ${nim}`);
    
    data.PrintData();
>>>>>>> generic-class
  }
  
  main();
  