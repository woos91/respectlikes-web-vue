export default function randomID(letterLength:number=8):string {
    let str:string ="", key:number;
    const sample:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for(let i=0; i<letterLength; i++) {
        if (i===0) key = Math.floor(Math.random()*26);
        else key = Math.floor(Math.random()*sample.length);
        str += sample.charAt(key);
    }
    return str;
}