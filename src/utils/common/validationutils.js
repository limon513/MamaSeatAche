const validstringcode = ['ja','jha','ba','sa'];
const busCodeforBD = 11;
const lastcoderange = 9999;

function busNamePlateValidate(nameplate){
    const newstring = nameplate.toLowerCase()
    .split('-')
    .map((w)=>w.trim())
    .filter((w)=>w.length > 0 && w.match(/^[a-zA-Z0-9]+$/));
    if(newstring.length == 4 && 
        validstringcode.includes(newstring[1]) &&
        Number(newstring[2]) === busCodeforBD &&
        Number(newstring[3]) <= lastcoderange
    ){
        let formatedstr = "";
        newstring.forEach(str=>formatedstr+=str);
        return formatedstr;
    }
    else if(newstring.length == 1) return newstring[0];
    
    return false;
}

module.exports = busNamePlateValidate;