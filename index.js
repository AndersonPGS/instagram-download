(async() => {

    //open data archives (json)
    const response = await fetch('./instagram.json');
    const data = await response.json();

    //transform data to send to html
    const htmlList = data.map( ({src}) => `<li><img src="${src}"></li>`).join('');
    document.querySelector('.container').innerHTML = htmlList;
})();