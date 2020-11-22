var name="JoHn";
var namesplit=name.split("");
var nuprcase=0,nlwrcase=0,output;
for(var i=0;i<namesplit.length;i++){
    if(namesplit[i]===namesplit[i].toUpperCase()){
        nuprcase++;
        
    }
    else 
        nlwrcase++;
}
if(nuprcase===nlwrcase)
output=name.toLowerCase();
else if(nlwrcase>nuprcase)
output=name.toLowerCase();
else 
output=name.toUpperCase();
console.log(output);


    

