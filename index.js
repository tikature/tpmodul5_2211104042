class HaloGeneric {
    SapaUser(user) {
      console.log(`Halo user ${user}`);
    }
  }
  
  function main() {
    const halo = new HaloGeneric();
    const nama = "Tika";
    halo.SapaUser(nama);
  }
  
  main();
  