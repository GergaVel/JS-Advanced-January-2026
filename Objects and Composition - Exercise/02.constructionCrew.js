function constructionCrew(worker) {
    if(!worker.dizziness){
        return worker; // if we have a function to be excecuted in only 1 special case === early return
    } 
        worker.levelOfHydrated += worker.experience * worker.weight * 0.1; 
        worker.dizziness = false
        return worker;
}

const res = constructionCrew(
    { weight: 80,
      experience: 1,
      levelOfHydrated: 0,
      dizziness: true 
    });

    console.log(res);
    