export interface ImageType {
    imgID:string,
    alt:string,
    fileName:string
}
export interface ConsType {
    id:string,
    titleMain:string,
    titleSub:string,
    link:string,
    note:string,
    images:ImageType[],
    layoutForDesktop:string,
    layoutForMobile:string,
}