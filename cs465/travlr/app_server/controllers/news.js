/* GET news page */
const index = (req, res) => {
    console.log('Inside app_server, controllers, news.js, index fuction.');
    res.render('news', { title: 'Travlr Getaways' });
}
module.exports = {
    index
};
