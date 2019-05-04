// ------+--------------------+------------+----------------+----------
// +
// | 1000 | Fish Fingers | 2.55 | 500 gram | 1500
// |
// | 1001 | Fish Fingers | 5.00 | 1000 gram | 750
// |
// | 1002 | Hamburger Patties | 2.35 | Pack 10 | 1200
// |
// | 1003 | Shelled Prawns | 6.90 | 250 gram | 300
// |
// | 1004 | Tub Ice Cream | 1.80 | I Litre | 800
// |
// | 1005 | Tub Ice Cream | 3.40 | 2 Litre | 1200
// |
// | 2000 | Panadol | 3.00 | Pack 24 | 2000
// |
// | 2001 | Panadol | 5.50 | Bottle 50 | 1000
// |
// | 2002 | Bath Soap | 2.60 | Pack 6 | 500
// |
// | 2003 | Garbage Bags Small | 1.50 | Pack 10 | 500
// |
// | 2004 | Garbage Bags Large | 5.00 | Pack 50 | 300
// |
// | 2005 | Washing Powder | 4.00 | 1000 gram | 800
// |
// | 2006 | Laundry Bleach | 3.55 | 2 Litre bottle | 250
// |
// | 3000 | Cheddar Cheese | 8.00 | 500 gram | 1000
// |
// | 3001 | Cheddar Cheese | 15.00 | 1000 gram | 1000
// |
// | 3002 | T'Bone Steak | 7.00 | 1000 gram | 200
// |
// | 3003 | Navel Oranges | 3.99 | Bag 20 | 200
// |
// | 3004 | Bananas | 1.49 | Kilo | 400
// |
// | 3005 | Peaches | 2.99 | Kilo | 500
// |
// | 3006 | Grapes | 3.50 | Kilo | 200
// |
// | 3007 | Apples | 1.99 | Kilo | 500
// |
// | 4000 | Earl Grey Tea Bags | 2.49 | Pack 25 | 1200
// |
// | 4001 | Earl Grey Tea Bags | 7.25 | Pack 100 | 1200
// |
// | 4002 | Earl Grey Tea Bags | 13.00 | Pack 200 | 800
// |
// | 4003 | Instant Coffee | 2.89 | 200 gram | 500
// |
// | 4004 | Instant Coffee | 5.10 | 500 gram | 500
// |
// | 4005 | Chocolate Bar | 2.50 | 500 gram | 300
// |
// | 5000 | Dry Dog Food | 5.95 | 5 kg Pack | 400
// |
// | 5001 | Dry Dog Food | 1.95 | 1 kg Pack | 400
// |
// | 5002 | Bird Food | 3.99 | 500g packet | 200
// |
// | 5003 | Cat Food | 2.00 | 500g | 200
// |
// | 5004 | Fish Food | 3.00 | 500g | 200 

const mapFresh =
`
<area onclick="onChose(3002)" coords="12,192,130,252" shape="rect">
<area onclick="onChose(3000)" coords="64,366,214,429" shape="0">
<area onclick="onChose(3001)" coords="237,367,387,428" shape="0">
<area onclick="onChose(3003)" coords="263,193,381,251" shape="0">
<area onclick="onChose(3004)" coords="392,192,508,250" shape="0">
<area onclick="onChose(3006)" coords="517,192,638,251" shape="0">
<area onclick="onChose(3007)" coords="648,192,765,249" shape="0">
<area onclick="onChose(3005)" coords="771,188,892,250" shape="0">

`


const mapFrozen = 
`
<area onclick="onChose(1002)" coords="11,232,161,302" shape="rect">
<area onclick="onChose(1000)" coords="113,441,262,510" shape="0">
<area onclick="onChose(1001)" coords="287,442,437,513" shape="0">
<area onclick="onChose(1003)" coords="361,233,513,306" shape="0">
<area onclick="onChose(1004)" coords="468,439,618,509" shape="0">
<area onclick="onChose(1005)" coords="641,435,792,510" shape="0">
`

const mapBer =
`
<area onclick="onChose(122)" coords="37,433,154,500" shape="rect">
<area onclick="onChose(122)" coords="166,432,282,502" shape="0">
<area onclick="onChose(122)" coords="293,432,412,503" shape="0">
<area onclick="onChose(122)" coords="420,432,539,502" shape="0">
<area onclick="onChose(122)" coords="552,432,668,501" shape="0">
<area onclick="onChose(122)" coords="723,242,874,313" shape="0">

`







const mapHome =
`
<area onclick="onChose(2)" coords="9,232,163,300" shape="rect">
<area onclick="onChose(2)" coords="110,441,264,513" shape="0">
<area onclick="onChose(2)" coords="284,437,439,513" shape="0">
<area onclick="onChose(2)" coords="361,229,514,304" shape="0">
<area onclick="onChose(2)" coords="468,440,622,511" shape="0">
<area onclick="onChose(2)" coords="642,440,797,510" shape="0">
<area onclick="onChose(2)" coords="714,230,867,300" shape="0">

`




const mapPet =
`
<area onclick="onChose(2)" coords="187,231,338,301" shape="rect">
<area onclick="onChose(2)" coords="362,230,513,301" shape="0">
<area onclick="onChose(2)" coords="466,438,620,509" shape="0">
<area onclick="onChose(2)" coords="641,439,796,509" shape="0">
<area onclick="onChose(2)" coords="715,231,865,302" shape="0">

`

