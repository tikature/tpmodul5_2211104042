class DataGeneric {
    constructor(data) {
      this.data = data;
    }
    PrintData() {
      console.log(`${this.data}`);
    }
  }
  
  function main() {
    const nama = "Dewi Atika Muthi";
    const nim = "2211104042"; // Ganti dengan NIM praktikan
    const data = new DataGeneric(`${nama} dengan nim : ${nim}`);
    
    data.PrintData();
  }
  
  main();
  