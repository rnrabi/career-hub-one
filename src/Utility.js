 const getLs = ()=>{
    const getLsDataStr = localStorage.getItem('applied-job');
    const getLsDataParse = JSON.parse(getLsDataStr);
    if(getLsDataParse){
        return getLsDataParse;
    }
    return [];
}


 const setLs = (id)=>{
    const existLsData = getLs();
    const existData = existLsData.find(existId =>existId===id);
    if(!existData){
        existLsData.push(id);
        const lsStr = JSON.stringify(existLsData);
        localStorage.setItem('applied-job' , lsStr);
    }
    
}

export {getLs , setLs};