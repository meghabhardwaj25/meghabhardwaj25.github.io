var names=new Array();
names[0]="yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jonson";
names[4]="poul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";
// console.log(names[0].charAt(0));

for(var i=0; i<names.length; i++){
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
        console.log("GOODBEY"+names[i]);
    }
    else
    {
        console.log("hello"+names[i]);
    }
   
}