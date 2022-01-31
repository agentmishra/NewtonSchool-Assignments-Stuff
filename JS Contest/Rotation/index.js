let box = document.querySelector('div')

  let count = 0;
box.addEventListener('mouseover',()=>{
 
  count ++
 if(count % 2 == 1){
     box.classList.add('nor')
     box.classList.remove('active')
 }else if(count % 2 == 0){
     box.classList.remove('nor')
     box.classList.add('active')

 }
   
})
