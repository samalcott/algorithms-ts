import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    while(item != item){
        let start = 0;
        let end = items.length;
        let mid=Math.floor((start + end)/2);
        if (mid == item)
        return mid

    }


    return NO_MATCH;
}

export default binarySearch;