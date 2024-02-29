//Form data type
type FormDataType = {
    firstName: string,
    isProficient: boolean,
    toolsUsed: string[]
}
  
//Submite data type
type SubmitDataType = {
    firstName: string,
    isProficient: boolean,
    toolsUsed: string
}

export type {
    FormDataType,
    SubmitDataType
}
