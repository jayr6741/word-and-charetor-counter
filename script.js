// change = () => {
//   let str = document.getElementById("txt").value;
//   let ans = str.trim();
//   let ary = str.split(" ");
//   let x = ary.filter((x) => x);
//   let arylength = x.length;
//   let strlen = str.length;
//     document.getElementById("out").innerHTML=`${arylength} word ${strlen} charetor`
// };

change = () => {
  let str = document.getElementById("txt").value;
  let ans = str.trim();
  let ary = str.split(" ");
  let arylength = ary.length;
  let strlen = str.length;
    if(ary.length===""){
        return;
    }
    
    document.getElementById("out").innerHTML=`${arylength} word ${strlen} charetor`
};
