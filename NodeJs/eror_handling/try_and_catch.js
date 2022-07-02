try {
  console.log(awd);
} catch (error) {
  console.log("Terjadi eror");
  console.log(`Nama error :${error.name}`);
  console.log(`Pesan :${error.message}`);
  console.log(`stack \n \n ${error.stack}`);
} finally {
  console.log("Akan tetap dieksekusi");
}
