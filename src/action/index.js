export const incNumber = (num) => {
    return {
        type:"INCREMENT",
        payloads:num,
    }
}

export const decNumber = () => {
    return {
        type:"DECREMENT"
    }
}