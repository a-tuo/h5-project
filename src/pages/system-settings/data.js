export const basicColumns = [
    new Array(24).toString().split(',').reduce((pre, cur, index) => {
        pre.push({
            label: `${index + 1}`,
            value: `${index + 1}`
        })
        return pre
    }, []),
    new Array(60).toString().split(',').reduce((pre, cur, index) => {
        if (index.toString()?.length === 1) {
            pre.push({
                label: `0${index}`,
                value: `0${index}`
            })
        }
        else {
            pre.push({
                label: index,
                value: index
            })
        }
        return pre
    }, []),
    new Array(60).toString().split(',').reduce((pre, cur, index) => {
        if (index.toString()?.length === 1) {
            pre.push({
                label: `0${index}`,
                value: `0${index}`
            })
        }
        else {
            pre.push({
                label: index,
                value: index
            })
        }
        return pre
    }, [])
]
