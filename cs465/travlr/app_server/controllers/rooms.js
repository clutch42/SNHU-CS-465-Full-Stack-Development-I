/* GET rooms page */
const index = (req, res) => {
    console.log('Inside app_server, controllers, rooms.js, index fuction.');
    res.render('rooms', { title: 'Travlr Getaways' });
}
module.exports = {
    index
};