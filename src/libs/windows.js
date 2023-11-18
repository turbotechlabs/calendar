/**
 * window width
 */
export const windowWidth = ()=> {
    (typeof window !== undefined)
        ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        : {}
}


/**
 * window height
 */
export const windowHeight = () => {
    (typeof window !== undefined)
        ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        : {}
}
