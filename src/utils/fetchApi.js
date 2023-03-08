export const fetchThunkApi = async (route, options, rejectWithValue)=>{
    try {
        const res = await fetch(route, options)
        const result = await res.json()
        console.log({res})
        if(res.ok){
            return result;
        }else{
            console.log("api",result);
            if(result?.errors){
                throw new Error(result?.errors[0]?.msg)
            }
            throw new Error(result?.message || "process failed")
        }
    } catch (err) {
        console.log("error",err)
        return rejectWithValue(err?.message || "process failed")
    }
}

export const fetchApi = async (route, options) => {
    try {
        const res = await fetch(route, options)
        const result = await res.json()
        if(res.ok){
            return result;
        }else{
            throw new Error(result?.message || "something went wrong")
        }
    } catch (err) {
        console.log("error",err)
        alert(err.message || "something went wrong")
    }
}