import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    let current = 0;
    let end = items.length;
    let swap = false;
    let ordered_list = false;

for(current=0; current< end; current++){
    
    if(current == end){
        end = items.length - 1;
    }

}
  



    


    // Your code here

    return items;
}

export default bubbleSort;