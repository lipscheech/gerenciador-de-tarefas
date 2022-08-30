export const removeDatasRepetidas = (datas) => {
    const datasunicas = [];
    datas.forEach(data => {
        if(datasunicas.indexOf(data.dataFormatada) === -1) {
            datasunicas.push(data.dataFormatada);
        }
    })

    return datasunicas;
}

export const ordenaDatas = (data) => {
    data.sort((a,b)=> {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');

        return primeiraData-segundaData;
    })

}