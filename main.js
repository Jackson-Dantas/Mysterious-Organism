/*
  Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. 
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and 
frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot 
survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate 
the DNA of P. aequor for your research team to study.
*/



/*
  Tasks:
  1 - Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
  The first parameter is a number (no two organisms should have the same number).
  The second parameter is an array of 15 DNA bases.
  pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
  
  2 - Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
  To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
  .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. 
  Then .mutate() will return the object’s dna. For example, if the randomly selected base is the 1st base and it is 'A', 
  the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

  3 - Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method ]
  (.compareDNA()) to the returned object of the factory function .compareDNA() has one parameter, another pAequor object.
  The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are 
  identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the 
  two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
  For example:
    ex1 = ['A', 'C', 'T', 'G']
    ex2 = ['C', 'A', 'T', 'T']
  
  ex1 and ex2 only have the 3rd element in common ('T') and therefore, 
  have 25% (1/4) of their DNA in common. The resulting message would read something along the lines 
  of: specimen #1 and specimen #2 have 25% DNA in common.
  
  4 - P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
   In the returned object of pAequorFactory(), add another method .willLikelySurvive().
  .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, 
  .willLikelySurvive() returns false.
  
  5 - With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in 
  their natural environment. Store these instances in an array for your team to study later.

  */


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
  
//create a pAequorFactory:

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        mutate(){
            let random = Math.floor(Math.random() * 4)
            let selectedBase = this.dna[random];
            let newBase = returnRandBase();
            console.log(`The selected base was ${selectedBase} in position ${random}`);
            while(selectedBase === newBase){
                newBase = returnRandBase();
            }
            this.dna[random] = newBase;
            return this.dna;
            // let newDna = mockUpStrand();
            // let historyDna = [this.dna];
            // // while(this.dna.includes(newDna)){
            // //     newDna = mockUpStrand();
            // // }

            // while(historyDna.includes(newDna)){
            //     newDna = mockUpStrand();
            // }
            // this.dna = newDna;
            // historyDna.push(newDna); 
        },

        compareDna(pAequor){
            
            let iterator = this.dna.values()
            let commonBases = pAequor.dna.filter(base => base === iterator.next().value);
            //console.log(commonBases)

            let commonDna = commonBases.length > 0 ? (commonBases.length/this.dna.length) * 100 : commonBases.length;
            let commonDnaFormated = commonDna % 10 != 0 ? commonDna.toFixed(2) : commonDna; 
            
            //return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonDnaFormated}% DNA in common`;
            return commonDnaFormated; 
        },

        willLikelySurvive(){
          
          let count = 0;
          let length = this.dna.length;

          this.dna.forEach(base => {
            if(base == 'C' || base == 'G'){
              count++
            }  
          });
          
          return count/length >= 0.6; 
        }
    }
}

const pAequors = [];

for (let index = 0; index < 30; index++) {

 pAequors.push(pAequorFactory(index, mockUpStrand())) 

}


/**
 * Use the .compareDNA() to find the two most related instances of pAequor.
 */

let related = [];

for (let i = 0; i < pAequors.length; i++) {

  let pAequorOne = pAequors[i];
    
  for(let j = i + 1; j < pAequors.length -1; j++){

    let pAequorTwo = pAequors[j];
    let relatedDNA = pAequorOne.compareDna(pAequorTwo);
    //console.log(`i é: ${i} e o j: ${j} e o related DNA é ${relatedDNA}`);

    if(relatedDNA > 60){
      
      related.push({
        specimenID: [pAequorOne.specimenNum, pAequorTwo.specimenNum], 
        DNA: [pAequorOne.dna, pAequorTwo.dna], 
       'Relatade DNA': relatedDNA
      });

    } 
  }
  
}

related.forEach(element => {
  console.log(`
  Paequor ${element.specimenID[0]} and ${element.specimenID[1]} are parents with ${element["Relatade DNA"]}% similar DNA \n
  Paequor ${element.specimenID[0]}: ${element.DNA[0]} 
  \n 
  Paequor ${element.specimenID[1]}: ${element.DNA[0]}`); 
})




