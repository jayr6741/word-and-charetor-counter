change = () => {
  let str = document.getElementById("txt").value;
  let ans = str.trim();
  let ary = str.split(" ");
  let x = ary.filter((x) => x);
  let arylength = x.length;
  let strlen = str.length;
    document.getElementById("out").innerHTML=`${arylength} word ${strlen} charetor`
};
