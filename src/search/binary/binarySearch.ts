import { NO_MATCH } from "../common"




const binarySearch = (items: any[], item: any): number => {
 let start = 0;
 let end = items.length - 1;
 let found = false;
 
while(found = false && start > end){
    let mid=Math.floor((start + end)/2);
 if (items[mid] == item){
    let found = true;
}else if (items[mid] > item){
    start = mid + 1;
}else if (items[mid] < item){
    end = mid -1;
}
return mid

}



    return NO_MATCH;
}

export default binarySearch;