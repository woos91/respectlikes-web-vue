export type DeviceType = "dt" | "mb"; 
export type CategoryType = "all"|"web"|"print"|"cibi"|"";
export interface ImageType {
    imgID:string,
    alt:string,
    fileName:string
}
export interface ConsType {
    id:string,
    titleMain:string,
    titleSub:string,
    category:CategoryType,
    link:string,
    note:string,
    images:ImageType[],
    layoutForDesktop:string,
    layoutForMobile:string,
}