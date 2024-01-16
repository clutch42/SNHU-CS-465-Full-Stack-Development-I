/* GET homepage */
const index = (req, res) => {
    console.log('Inside app_server, controllers, main.js, index fuction.');
    res.render('index', { title: 'Travlr Getaways' });
}
module.exports = {
    index
};