export const p = (message?: any, ...optionalParams: any[]) => {
  if (__DEV__) {
    console.log(message, ...optionalParams)
  }
}

export const pe = (message?: any, ...optionalParams: any[]) => {
  if (__DEV__) {
    console.error(message, ...optionalParams)
  }
}
