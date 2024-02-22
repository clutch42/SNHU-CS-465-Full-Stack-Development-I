/* GET contact page */
const index = (req, res) => {
    console.log('Inside app_server, controllers, contact.js, index fuction.');
    res.render('contact', { title: 'Travlr Getaways' });
}
module.exports = {
    index
};
