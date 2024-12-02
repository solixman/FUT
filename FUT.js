async function CallAPI() {
    let url = "/FUT.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    // console.log(json);
    DisplayList(json);
    const form = document.getElementById('addPlayerForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData); 

  const newPlayer = {
    name: obj.name,       
    photo: obj.photo,      
    position: obj.position, 
    flag: obj.flag,         
    logo: obj.logo,       
    rating: obj.rating,  
    pace: obj.pace,      
    shooting: obj.shooting, 
    passing: obj.passing,   
    dribbling: obj.dribbling,
    defending: obj.defending, 
    physical: obj.physical 
  };
  json.players.push(newPlayer);
   document.getElementById("addPlayerForm").reset();


  DisplayList(json);
   console.log(json);
});


}

function DisplayList(json) {
    let ListContainer = document.querySelector(".Thelist");
    ListContainer.innerHTML = "";


    json.players.forEach(players => {
        if (players.position == "GK") {
            ListContainer.innerHTML += `
            <div class="row">
       <div class="row">
           <div class="col-md-1"></div>
           <div class="col-md-11"> 
       
            <div class="container-fluid">
           
           <div class="BareOfTitles">
           <div class="row">
               <div class="col-md-4">
                       <div class="col-md-12">
                       <div class="row">
                           <div class="col-md-4">
                           <img src="${players.photo}" class="img-fluid" alt="Player Photo" /></div>
                           <div class="col-md-8">
                           <p>${players.name}(GK)</p>
                           <div class=" col-md-2"><img src="${players.flag}" class="img-fluid py-lg-2" alt="country" /></div>
                            <div class=" col-md-2"><img src="${players.logo}" class="img-fluid py-lg-0" alt="club" /></div>
                           
                           </div>
                           </div>
                       </div>
                       </div>
                       <div class="col-md-8 py-lg-5">
                           <div class="row">
                           <div class="col-md-6">
                               <div class="row">
                               <div class="col-md-3 d-flex justify-content-center"><p>${players.rating}</p></div>
                               <div class="col-md-3 d-flex justify-content-center"><p>${players.position}</p></div>
                               <div class="col-md-3 d-flex justify-content-center"><p>${players.diving}</div>
                               <div class="col-md-3 d-flex justify-content-center"><p>${players.kicking}</div>
                               </div>
                           </div>
                           <div class="col-md-6">
                               <div class="row">
                               <div class="col-md-11">
                                   <div class="row  d-flex justify-content-center">
                                   <div class="col-md-3 d-flex justify-content-center"><p>${players.reflexes}</div>
                                   <div class="col-md-3 d-flex justify-content-center"><p>${players.speed}</div>
                                   <div class="col-md-3 d-flex justify-content-center"><p>${players.positioning}</div>
                                   <div class="col-md-3 d-flex justify-content-center"><p>${players.handling}</div>
                               </div>
                               </div>
                               </div>
                           </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
       </div>
   </div>
   </div>
</div>
       `} else {
            ListContainer.innerHTML += `
             <div class="row">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-11"> 
        
             <div class="container-fluid">
            
            <div class="BareOfTitles">
            <div class="row">
                <div class="col-md-4">
                        <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4">
                            <img src="${players.photo}" class="img-fluid" alt="Player Photo" /></div>
                            <div class="col-md-8">
                            <p>${players.name}</p>
                            <div class=" col-md-2"><img src="${players.flag}" class="img-fluid py-lg-2" alt="country" /></div>
                             <div class=" col-md-2"><img src="${players.logo}" class="img-fluid py-lg-0" alt="club" /></div>
                            
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-8 py-lg-5">
                            <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                <div class="col-md-3 d-flex justify-content-center"><p>${players.rating}</p></div>
                                <div class="col-md-3 d-flex justify-content-center"><p>${players.position}</p></div>
                                <div class="col-md-3 d-flex justify-content-center"><p>${players.pace}</div>
                                <div class="col-md-3 d-flex justify-content-center"><p>${players.shooting}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                <div class="col-md-11">
                                    <div class="row  d-flex justify-content-center">
                                    <div class="col-md-3 d-flex justify-content-center"><p>${players.passing}</div>
                                    <div class="col-md-3 d-flex justify-content-center"><p>${players.dribbling}</div>
                                    <div class="col-md-3 d-flex justify-content-center"><p>${players.defending}</div>
                                    <div class="col-md-3 d-flex justify-content-center"><p>${players.physical}</div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
</div>
        `}
    });
}
// function DisplayCard(json) {
//     let SquadContainer = document.querySelectorAll(".PlayerCard");
//     SquadContainer.innerHTML = "";
//     console.log(SquadContainer);
//     for (let i = 0; i < SquadContainer.length; i++) {

//         SquadContainer[i].innerHTML = `
//        <div id="player${i}">
//        <div>
//         <button id="button${i}" type="button" class="btn  bg-transparent" onclick="DisplayPlayerCard(json)">+</button>
//         </div>
//         </div>
//         `
//     }
// }


function DisplayPlayerCard(json,i) {

    let SingleContainer = document.getElementById(`button${i}`)
    SingleContainer.innerHTML = "";
    SingleContainer.innerHTML = `
    skjbkbtgkhgbkgthgbtkghbtg
    `;
  
}


// const form = document.getElementById('addPèlayerForm');

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); 
//   const formData = new FormData(form);
//   const obj = Object.fromEntries(formData); 
// });

CallAPI()