const zindexManager={
    zIndex:2000,
    nextZIndex(zIndex){
        if(zIndex&&parseInt(zIndex,10)>this.zIndex){
            return zIndex;
        }
        return this.zIndex++;
    }
};

export default zindexManager;
