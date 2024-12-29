/* GET about page */
const index = (req, res) => {
    console.log('Inside app_server, controllers, about.js, index fuction.');
    res.render('about', { title: 'Travlr Getaways' });
}
module.exports = {
    index
};
