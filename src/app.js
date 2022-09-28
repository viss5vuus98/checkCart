const nextBtn = document.getElementById('next-step')
const backBtn = document.getElementById('back-step')
const steps = document.querySelectorAll('.step')
const forms = document.querySelectorAll('.form')
const btnSection = document.querySelector('.btn-section')
const cardWrapper = document.querySelector('.cart-list-wrapper')

let step = 0
const productList = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    count: 1,
    price: 3999
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    count: 1,
    price: 1299    
  }
]


function Step (e){

  const nowStep = steps[step]

  console.log(e.target.matches('.next-step'))
  console.log(e.target.innerHTML === '下一步')
  if (e.target.matches('.next-step')){
    if (step === 2) {
      return
    }
      console.log(nowStep)
    const nextStep = steps[step + 1]
    nextStep.classList.add('active')
    forms[step].classList.toggle('d-none')
    forms[step + 1].classList.toggle('d-none')
    step += 1
    if(step > 0 && step !== 2){
      backBtn.classList.toggle('d-none')
    }
  } else if (e.target.matches('.back-step')){
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.add('active')
    forms[step].classList.toggle('d-none')
    forms[step - 1].classList.toggle('d-none')
    step -= 1
    if (step === 0) {
      backBtn.classList.toggle('d-none')
    } 
  } 
}

function updateCount(e){
  if (e.target.matches('.reduce')) {
    const targetId = Number(e.target.parentElement.dataset.pid)
    const product = productList.find(_product => _product.id === targetId)
    if(product.count === 0)return
    product.count -= 1
    e.target.nextElementSibling.innerHTML = product.count    
  } else if (e.target.matches('.add')) {
    const targetId = Number(e.target.parentElement.dataset.pid)
    const product = productList.find(_product => { return _product.id === targetId })
    product.count += 1
    e.target.previousElementSibling.innerHTML = product.count
  }
  price = 0
  productList.forEach((_product) => {
    price += (_product.count * _product.price)
  })
  document.querySelector('.total-penal').innerHTML = `$${price}`
}

btnSection.addEventListener('click', Step)
cardWrapper.addEventListener('click', updateCount)
