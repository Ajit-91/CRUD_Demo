export const fetchThunkApi = async (route, options, rejectWithValue)=>{
    try {
        const res = await fetch(route, options)
        const result = await res.json()
        if(res.status===200){
            return result;
        }else{
            console.log("api",result);
            if(result.errors){
                return rejectWithValue(result?.errors[0]?.msg) || result
            }
            return rejectWithValue(result?.message || "process failed") || result?.message
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
        if(res.status===200){
            return result;
        }else{
            console.log("api",result);
            alert(result?.message || "something went wrong")
            return result
        }
    } catch (err) {
        console.log("error",err)
        alert(err.message || "something went wrong")
        // return err
    }
}