const jonas = {
    fistname: 'mehta',
    lastname: 'hirva',
    class: 'h',
    std: 'ce',
    hooby: 'reading',
    friens: ['hirva', 'miloni', 'dhruvi'],
    birthyear: 2004,
    calcage: function () {
        //return 2037 - this.birthyear;
        this.age = 2037 - this.birthyear;
        return this.age();
    }

};
console.log(jonas.calcage());
console.log(jonas);
//consolr.log
