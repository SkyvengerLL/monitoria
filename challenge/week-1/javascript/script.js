const state = () => {
   let language = false;
   const english = document.getElementById("english");
   const portuguese = document.getElementById("portuguese");
   const bnt = document.getElementById('changer');
   const change = () => {
      if (language){
         portuguese.className = "hidden";
         english.className = "";
         bnt.innerHTML = "Change";
      }else{
         portuguese.className = "";
         english.className = "hidden";
         bnt.innerHTML = "Mudar";
      }
      language = !language;
   }
   bnt.addEventListener('click', change);
   change ();
}

state();