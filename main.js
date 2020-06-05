// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



const pAquorFactory = (number,dnaBase) =>{
    return {
        _specimenNum:number,
        _dna: dnaBase,
        get dna(){
            return this._dna;
        },
        set dna(dnaIn){
            this._dna = dnaIn;
        }
        mutate(){
            const dnaBases = ['A', 'T', 'C', 'G'];
            const len = this.dna.length;
            const randInx = Math.floor(Math.random() * len);
            const base = this.dna[randInx]; 
            const mutatedBase = dnaBases.filter(b => b !== base);
            console.log('selected base: '+base)
            console.log('remaining bases: '+mutatedBase);
            const ind = Math.floor(Math.random() * 3);
            this.dna = 

        }
    }

}


const specimen = pAquorFactory(1524,mockUpStrand());

specimen.mutate()