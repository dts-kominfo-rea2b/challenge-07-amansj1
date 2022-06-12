const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const counter = (data, hasil) =>{
  var count =  0;
  data.forEach(film => {
    if(film.hasil == hasil)
    count++;
  });
  return count;
}

const promiseOutput = (hasil) =>{
  return new Promise((p) =>{
    promiseTheaterIXX().then((IXX)=>{
      var countIxx = counter(IXX, hasil);

      promiseTheaterVGC().then((VGC)=>{
        var countVgc = counter(VGC, hasil);
        p(countIxx + countVgc)
      })
    })
  });
};



module.exports = {
  promiseOutput,
};
