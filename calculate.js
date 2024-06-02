let resultChina = document.querySelector(".taobaores")
let resultTurkish = document.querySelector(".turkishres")
// RESULTS FOR H1 , CHINA AND TURKISH
let inputChina = document.getElementById("taobao")
let inputTurkish = document.getElementById("turkish")
// INPUT for China And Turkey


function chinaConventer()
{
  let value1 = inputChina.value;
  value1 = Number(value1)
  if (isNaN(value1))
    {
      document.querySelector(".taobaores").innerHTML = "შეიყვანეთ მხოლოდ რიცხვები"
      resultChina.classList.add("error")
      throw new Error("Please Enter Valid Number")
      
    }

  if (value1<0)
    {
      value1=value1*-1
    }

  resultChina.classList.remove("error")
  resultChina.innerHTML = `თქვენი შეყვანილი თანხა არის ${(value1*0.38).toFixed(2)} ლარი`
  inputChina.value = ""
}

function turkishConventer()
{
  let value2 = inputTurkish.value;
  value2 = Number(value2)


  if (isNaN(value2))
    {
      document.querySelector(".turkishres").innerHTML = "შეიყვანეთ მხოლოდ რიცხვები"
      resultTurkish.classList.add("error")
      throw new Error("Please Enter Valid Number")
      
    }

  if (value2<0)
    {
      value2=value2*-1
    }

  resultTurkish.classList.remove("error")
  resultTurkish.innerHTML = `თქვენი შეყვანილი თანხა არის ${(value2*0.086).toFixed(2)} ლარი`
  inputTurkish.value = ""
}




