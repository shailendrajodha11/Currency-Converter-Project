//let FlagaUrl = "https://flagsapi.com/IN/flat/64.png";

let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let select = document.getElementById("countryFlag")
let select2 = document.getElementById("countryFlag2")
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let para = document.getElementById("para1")
let option = document.querySelectorAll("option")


for (let i in countryList) {
  // console.log(countryList[i])
  let option = document.createElement("option");
  let optionAppend = select.appendChild(option);
  optionAppend.value = i;
  optionAppend.innerText = countryList[i];


  let option2 = document.createElement("option");
  let optionAppend2 = select2.appendChild(option2);
  optionAppend2.value = i;
  optionAppend2.innerText = countryList[i];


  document.addEventListener("click", function () {

    img1.src = `https://flagsapi.com/${select.options[select.selectedIndex].innerText}/flat/64.png`;
    img2.src = `https://flagsapi.com/${select2.options[select2.selectedIndex].innerText}/flat/64.png`;
  })
}

btn.addEventListener("click", () => {

  let inpVal = inp.value;
  let baseCurrency = select.value;
  let CurrencyUrl = fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)

  let CurrencyConv = async () => {
    let prom1 = await CurrencyUrl;

    let prom2 = await prom1.json();
    //console.log(prom2.rates)
    let finalRes = prom2.rates;
    let x = select2.value;
    //   console.log(x)
    //  console.log(finalRes.INR)
    console.log(finalRes[x])
    let rate = finalRes[x] * inpVal;

    //  console.log(rate)
    para.innerHTML = `${inpVal} ${select.value} = ${rate} ${select2.value}`;
  }
  CurrencyConv();
})