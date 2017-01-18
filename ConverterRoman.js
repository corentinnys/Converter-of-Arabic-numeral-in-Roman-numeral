/**
 * Created by corentin on 17/01/17.
 */


function convertRomain(nombre){

    this.nombre = nombre;


    this.converteur=function(){
        var nombre;
        if(isNaN(this.nombre)){
            console.error( this.nombre+" is not a number");
        }
        else{
            if(this.nombre<10){

                nombre = this.convertUnite(this.nombre);
            }
            else if((this.nombre>=10)&&(this.nombre<100)){

                nombre = this.convertNombreEntier(this.nombre);
            }
            else if((this.nombre>=100)&&(this.nombre<1000)) {

                nombre = this.convertCentaine(this.nombre);
            }
            else{
                nombre = this.convertMille(this.nombre);
            }
            return nombre
        }


    }



    this.convertMille=function(nb)
    {
        var resultat = [];
        var difference ;
        var unite;
        for(var i = 1000;i<=nb;i+=1000){
            difference = nb-i;
            if((difference>100)&&(difference<1000)){
                unite = this.convertCentaine(difference);

            }else{
                resultat.push('M');

            }
        }
        resultat = resultat.concat(unite);
        return resultat.join('');
    } ;




    //converti les centaines les nombre jusqu'a 1000 en chiffre romain
    //@ return ARRAY joiner
    
    this.convertCentaine = function (nb) {
        var resultat =[];
        if(nb==100){
            return "C";
        }
        else if(nb== 500){
            return "D";
        }
        else if(nb == 900){
            return "CM"
        }
        else if(nb == 400){
            return "CD";
        }
        else if((nb>500)&&(nb<900)){

            var difference ;
            var unite;
            resultat = ["D"];
            for(var i = 500;i<this.nombre;i+=100){
                difference = this.nombre-i;
                if((difference>0)&&(difference<100)){
                    unite = this.convertNombreEntier(difference);

                }else{
                    resultat.push('C');

                }
            }
            resultat = resultat.concat(unite);
            return resultat.join('');
        }
        else{
            var difference ;
            var unite;
            if((nb>400)&&(nb<500)){
                resultat.push('CD');
            }
            if(nb>900){
                resultat.push('CM');
            }
            for(var i = 0;i<nb;i+=100){
                difference = nb-i;
                if((difference>0)&&(difference<100)){
                    unite = this.convertNombreEntier(difference);


                }else if(nb<400){
                    resultat.push('C');

                }
            }
            resultat = resultat.concat(unite);
            return resultat.join('');
        }

    }


    //converti les chiffres les nombre jusqu'a 100 en chiffre romain
    //@ return ARRAY joiner



    this.convertNombreEntier = function (nb) {
        var resultat =[];
        if(nb==10){
            return "X";
        }
        else if(nb == 50){
            return "L";
        }
        else if(nb == 90){
            return "XC"
        }
        else if(nb == 40){
            return "XL";
        }
        else if((nb>50)&&(nb<90)){

            var difference ;
            var unite;
            resultat = ["L"];
            for(var i = 50;i<nb;i+=10){
                difference = nb-i;
                if((difference>0)&&(difference<10)){
                    unite = this.convertUnite(difference);

                }else{
                    resultat.push('X');

                }
            }
            resultat = resultat.concat(unite);
            return resultat.join('');
        }
        else{
            var difference ;
            var unite;
            if((nb>40)&&(nb<50)){
                resultat.push('XL');
            }
            if(nb>90){
                resultat.push('XC');
            }
            for(var i = 0;i<nb;i+=10){
                difference = nb-i;
                if((difference>0)&&(difference<10)){
                    unite = this.convertUnite(difference);

                }else if(nb<40){
                    resultat.push('X');

                }
            }
            resultat = resultat.concat(unite);
            return resultat.join('');
        }
    }





    //converti les chiffres en chiffre romain
    //@ return ARRAY joiner

    this.convertUnite =function (monbre) {
        var resultat=[];

        if((monbre>5)&&(monbre<9)){

            resultat.push('V');
            for(var i = 5;i<monbre;i++){
                resultat.push('I');
            }
        }
        else if(monbre==5){
            resultat.push('V')
        }
        else if (monbre==9){
            resultat.push('IX');
        }
        else{
            if(monbre==4){
                resultat.push('IV');
            }else{
                for(var i = 0;i<monbre;i++){
                    resultat.push('I');
                }
            }

        }
        return resultat.join('');
    }

}