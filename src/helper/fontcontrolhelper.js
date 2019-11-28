export const fsc = (media, fontSize) => {
    if (media.mobile)
        return fontSize > 16
            ? Math.ceil(fontSize * 3 / 5) : Math.ceil(fontSize * 4 / 5)
    else return fontSize
}

export const numberFormat = (data) => data === undefined ? null : data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')