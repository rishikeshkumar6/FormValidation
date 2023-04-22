spaceCheck=(data1 )=>{
    //s modifiers is used to check the space inside the pattern
    //g modifiers is used to global match in string
            var isSpace=/\s/g
            var lowerCase=new RegExp('(?=.*[a-z])')
             var number=new RegExp('(?=.*[0-9])')
             var specialCharacter=new RegExp('(?=.*[!@#$%^&*])')
            if(  lowerCase.test(data1) && specialCharacter.test(data1)  && number.test(data1)){
                document.getElementById('spaceCheck').innerHTML=''
                  
            }
            

            
            else{
                document.getElementById('spaceCheck').innerHTML='Invalid Username'
            }
        }
 


//this is method of password
passChek=(data)=>{
       var lowerCase=new RegExp('(?=.*[a-z])')
       var upperCase=new RegExp('(?=.*[A-Z])')
       var number=new RegExp('(?=.*[0-9])')
       var specialCharacter=new RegExp('(?=.*[!@#$%^&*])')
       var eightCharacter=new RegExp('(?=.{8,})')

       if(data.length>0){
       //lowerCase
       if(lowerCase.test(data)){
        document.getElementById('lower').innerHTML=' Must contain alteast one lower case cahracter'
        document.getElementById('lower').style.color='green'
       }
       else{
        document.getElementById('lower').style.color='red'
       }
       //upperCase
       if(upperCase.test(data)){
        document.getElementById('upper').innerHTML=' Must contain alteast one upper case cahracter'
        document.getElementById('upper').style.color='green'
       }
       else{
        document.getElementById('upper').style.color='red'
       }
       //number
       if(number.test(data)){
        document.getElementById('number').innerHTML=' Must contain alteast one number'
        document.getElementById('number').style.color='green'
       }
       else{
        document.getElementById('number').style.color='red'
       }
       //specialCharacter
       if(specialCharacter.test(data)){
        document.getElementById('speChar').innerHTML=' Must contain alteast one special cahracter'
        document.getElementById('speChar').style.color='green'
       }
       else{
        document.getElementById('speChar').style.color='red'
       }
       //eightCharacter
       if(eightCharacter.test(data)){
        document.getElementById('eightChar').innerHTML=' Must contain minimum eight cahracter'
        document.getElementById('eightChar').style.color='green'
       }
       else{
        document.getElementById('eightChar').style.color='red'
       }
    }
    //these else condition is basically defined if the password
    // length will zero then replace the html content using innerHTML 
   else{
    let char=document.getElementsByClassName('char')
    for(let i=0;i<=4;i++){
        char[i].innerHTML=''
    }
   } 
}


//this method will work when key will be down
Check=()=>{
    let char=document.getElementsByClassName('char')
   for(let i=0;i<=4;i++){
        char[i].innerHTML=''
    }

   

}

Check1=()=>{
    let char1=document.getElementById('conformPassCheck').innerHTML=''
    
}


//this method of conform password
conformPassCheck=(data2)=>{
   let pass2= document.getElementById('pass').value;
   if(data2.length>0){
    if(data2!=pass2){
           document.getElementById('conformPassCheck').innerHTML='Password does not match'
           document.getElementById('conformPassCheck').style.color='red'
    }
    else{
        document.getElementById('conformPassCheck').innerHTML=''
    }
   }
   else{
    document.getElementById('conformPassCheck').innerHTML='Please enter the confirm password'
   }

}



