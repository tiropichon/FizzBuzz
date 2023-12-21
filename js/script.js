function fizzbuzz(num){
    for(let i=1; i<num+1; i++){
        if( i%3==0 && i%5==0){
            console.log('fizzbuzz');
            document.write('fizzbuzz <br>');
        }else if (i%3==0) {
            console.log('fizz');
            document.write('fizz <br>');
        }else if(i%5==0){
            console.log('buzz');
            document.write('buzz <br>');
        }else{
            console.log(i);
            document.write(i+'<br>')
        }
    }
}


fizzbuzz(30);