async function CallAPI() {
    let url = "/FUT.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    DisplayList(json);
    DisplaySquad(json);

}

function DisplayList(json) {
    let ListContainer = document.querySelector(".Thelist");
    ListContainer.innerHTML = "";


    json.players.forEach(players => {
        if(players.position == "GK"){
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
       `} else{
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
function DisplaySquad(json) {
    let SquadContainer = document.querySelector(".PlayerCard");
    SquadContainer.innerHTML = "";
    ListContainer.innerHTML += `

     

    `



}





CallAPI()