module.exports = {
    // задаем пути. если есть слэш - для сервера. если нет - для октрытия на компе
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : '/',
        // помещает все папки в ассет
    assetsDir: 'assets',
    // позволяет не добавлять в дист скрипты js.map\
    productionSourceMap: false,
    // хэш. лучше ТРУ чтоб не заставлять пользователей чистить кэш. добавляются к скриптам символы хэша
    filenameHashing: true
}