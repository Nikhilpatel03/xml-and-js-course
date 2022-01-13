function display(){
    
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var comment = document.getElementById("comment").value;
 
    document.getElementById("output").innerHTML = "You Entered: <br><ul><li>Email: "+email+"</li><li>Date: "+date+"</li><li>Comment: "+comment+"</li></ul>"
    document.getElementById("form").reset();

}   