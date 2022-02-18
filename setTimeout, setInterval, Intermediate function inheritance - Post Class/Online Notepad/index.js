const textArea = document.getElementById('textarea');
const featureFlag = document.getElementById('feature-flag');
(function getDataFromStorage(){
     let data = localStorage.getItem('autosave-data');
     textArea.value = data;
})()
featureFlag.addEventListener('change', () => {
     let autoSave;
     if(featureFlag.checked){
          autoSave = setInterval(() => {
               localStorage.setItem('autosave-data', textArea.value);
          }, 1000);
     }else clearInterval(autoSave);
})
