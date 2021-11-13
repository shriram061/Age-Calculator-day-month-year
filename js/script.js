function calculate()
{

var userinput = document.getElementById("dob").value;
    var dob = new Date(userinput);

    if(userinput==null || userinput==''){
      alert("Choose a date please!");
    } 

    else 
    {
    var mdate = userinput.toString();
    var dobYear = parseInt(mdate.substring(0,4), 10);
    var dobMonth = parseInt(mdate.substring(5,7), 10);
    var dobDate = parseInt(mdate.substring(8,10), 10);
    
    var today = new Date();

    var birthday = new Date(dobYear, dobMonth-1, dobDate);
    
    var ms = today.valueOf() - birthday.valueOf();

        
    var yrage = Math.floor(ms / 31536000000);
    var dage = Math.floor((ms % 31536000000) / 86400000);
     
    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy Birthday!");
        }
        
     var mage = Math.floor(dage/30);        
     dage = dage % 30;
        
     var tMnt= (mage + (yrage*12));
  
     if (dob>today) {
        alert("Invalid date input - Please try again!");
      }
      else {
        document.getElementById("ans1").innerHTML = ("You are " + yrage + " years " +"\n" 
        + "You are " + mage + " months " + "\n"
         + "You are " + dage + " days")
      }
   }
}