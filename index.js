function convertToRoman(num) {
        var number=[1,2,3,4,5,6,7,8,9];
        var quotient= Math.floor(num/1000);
        var remainder= num%1000;

       
        if(quotient==0){
            num1="";

        }else{
            var num1=quotient;
            var thousands=["M", "MM", "MMM"];
            
            for(var i=0;i<number.length;i++){
                if(num1==number[i]){
                    num1=thousands[i];
                
                }
            }
        console.log(num1);
        
        }
    
      var quotient2=Math.floor(remainder/100);
      var remainder2= remainder%100;

      if(quotient2==0){
        var num2="";
      }else{
          var hundreds=["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
          for(var i=0; i<number.length;i++){
              if(quotient2==number[i]){
                  console.log(number[i]);
                  num2=hundreds[i];
          }
      }
console.log(num2);
}

var quotient3=Math.floor(remainder2/10);
var remainder3=remainder2%10;

var tens=["X","XX","XXX","XL","L","LX","LXX", "LXXX","XC"]
if(quotient3==0){
    var num3="";
}else{
    for(var i=0;i<number.length;i++){
        if(quotient3==number[i]){
     var num3=tens[i];
        }
    }
    console.log(num3);
    console.log(remainder3);
}
var quotient4= remainder3;
var units=["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
if(quotient4==0){
    var num4="";
}else{
for(var i=0;i<number.length;i++){
    if(quotient4==number[i]){
        num4=units[i];
}
    }
   
   
    
    }
    num=(num1+num2+num3+num4);
    return num;
}

convertToRoman(986);
