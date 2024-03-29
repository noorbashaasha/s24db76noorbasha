const express = require('express');
const router = express.Router();
 
const fords = [
  { name: 'Mustang', price: '2214000', year: 2021 },
  { name: ' Fusion', price: '1968000', year: 2022 },
  { name: 'Fiesta', price: '1312000', year: 2023 },
];
 
router.get('/', (req, res) => {
  res.render('fords', { title: 'Search Results', fords });
});
 
module.exports = router;
