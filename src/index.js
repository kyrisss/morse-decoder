const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr =[];
    let res ='';
    for(let i =0; i < expr.length; i += 10){
        arr.push(expr.slice(i,i+10))
    }
    
    arr.forEach(item => {
        //console.log(item)
        if(item == "**********"){
            res += ' ';
        }
        else{
            let str = '';
            for(let j = 0; j<10; j+=2){
                
                switch(item.slice(j,j+2)){
                    case "00":
                        //str += "";
                        break;
                    case "10":
                        str += ".";
                        break;
                    case "11":
                        str += "-"
                        break;
                }
            }
            res += MORSE_TABLE[str]
        }
    }) 
    return res;

}
module.exports = {
    decode
}