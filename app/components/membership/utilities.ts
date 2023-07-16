const findData = ((name: string, source: any) => {
    const data = (source.find((v:any) => v.name == name)) 
    return data ? data: "" ;
})
export default findData;

export const setNewError = (name: string, error: string, setter:any) => {
    setter((prevErrors:any) => {
        // Check if an error with the same name already exists in the state
        const errorExists = findData(name, prevErrors);

        if (errorExists) {
            // If an error with the same name exists, update its error message
            return prevErrors.map((err:any) => (err.name === name ? { ...err, error } : err));
        } else {
            // If the error doesn't exist, add it to the state
            return [...prevErrors, { name, error }];
        }
    });
}

export const setNewData = (name: string, value: any, setter: any) => {
    setter((prevValues: any) => {
        const errorExists = findData(name, prevValues);
        if (errorExists) {
            return prevValues.map((err: any) => (err.name === name ? { ...err, value } : err));
        } else {
            return [...prevValues, { name, value }];
        }
    });
}
