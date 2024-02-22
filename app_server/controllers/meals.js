/* GET meals page */
const index = (req, res) => {
    console.log('Inside app_server, controllers, meals.js, index fuction.');
    res.render('meals', { title: 'Travlr Getaways' });
}
module.exports = {
    index
};
