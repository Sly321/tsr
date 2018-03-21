export const initialTime = {
    isLoading: false,
    title: "This is a Default Title in the FirstReducer.ts File"
}

const FirstReducer = (state = initialTime, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default FirstReducer