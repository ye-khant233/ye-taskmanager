import { updateTaskTotal, updateDoneTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer =  () => {
    // console.log("I'm observer");
    //I will watch this group

    const job = () => { 
         console.log("U change in list group");
         updateTaskTotal();
         updateDoneTaskTotal();
        
    }
    const observerOptions = {
        childList: true,
        subtree: true, 
        attributes : true,
    };

    const listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup,observerOptions);

    
};
export default observer;