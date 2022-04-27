const products = [
  {
    name: 'Kingston Cabinet And Drawers - White',
    image: 'https://www.therange.co.uk/_m4/6/6/1510574535_8369.jpg',
    price: 550,
    discount: 0,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Happilo 100% Natural Premium California Almonds 500g Value Pack Pouch',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41-uUmseGIL._AC_SX184_.jpg',
    price: 350,
    discount: 50,
    inStock: true,
    category: 'Groceries',
  },
  {
    name: 'Tata Tea Gold, 1kg',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/414-GPjGREL._AC_SX184_.jpg',
    price: 520,
    discount: 0,
    inStock: false,
    category: 'Groceries',
  },
  {
    name: 'Oxford Storage Cabinet - White',
    image: 'https://www.therange.co.uk/_m3/6/0/1489745941_705.jpg',
    price: 650,
    discount: 25,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Double Door Bathroom Mirrored Cabinet - Light Walnut',
    image: 'https://www.therange.co.uk/_m3/9/3/1611816871_12_3518.jpg',
    price: 470,
    discount: 6,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Wall Mounted Bathroom Mirror - Silver',
    image: 'https://www.therange.co.uk/_m5/2/0/1611630532_12_5839.jpg',
    price: 700,
    discount: 0,
    inStock: false,
    category: 'Household Products',
  },
  {
    name: 'Nutraj 100% Pure Premium Raw California Inshell Walnuts 1 Kg Pack, Latest Crop Inshell Walnut',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/51RXW0-UXzL._AC_SX184_.jpg',
    price: 700,
    discount: 0,
    inStock: true,
    category: 'Groceries',
  },
  {
    name: 'Quaker Oats Porridge -2 kg Pack',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/51Q94sDZCFL._AC_SX184_.jpg',
    price: 330,
    discount: 7,
    inStock: true,
    category: 'Groceries',
  },
  {
    name: 'Borges Extra Virgin Olive Oil, 2L',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/31e0lZOrxcL._AC_SX184_.jpg',
    price: 2600,
    discount: 48,
    inStock: true,
    category: 'Groceries',
  },
  {
    name: 'Slurrp Farm High Protein Turmeric Punch Milk Mix, No Sugar, 250g',
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41ADLUQMJzL._AC_SX184_.jpg',
    price: 449,
    discount: 9,
    inStock: true,
    category: 'Groceries',
  },
  {
    name: 'Stainless Steel Lid Pedal Bin - 12l',
    image: 'https://www.therange.co.uk/_m5/9/5/1595516880_2_9025.jpg',
    price: 150,
    discount: 7,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Fairy Non Bio Pods - 57',
    image: 'https://www.therange.co.uk/_m5/4/1/1599210056_12_1028.jpg',
    price: 100,
    discount: 2,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Ariel Oxi Stain Remover All-In-One Pods - 22',
    image: 'https://www.therange.co.uk/_m5/5/7/1616060573_12_2383.jpg',
    price: 50,
    discount: 0,
    inStock: false,
    category: 'Household Products',
  },
  {
    name: 'Bold All-In-1 Pods - 25 / Exotic Bloom',
    image: 'https://www.therange.co.uk/_m4/6/5/1612366564_12_5879.jpg',
    price: 50,
    discount: 0,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Fairy Wash Up Liquid - Apple / 780ml',
    image: 'https://www.therange.co.uk/_m5/5/3/1472556070_240.jpg',
    price: 25,
    discount: 0,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Fairy Wash Up Liquid - Original / 383ml',
    image: 'https://www.therange.co.uk/_m5/2/9/1472551453_641.jpg',
    price: 25,
    discount: 0,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Original Scrub Mommy Cleaning Sponge',
    image: 'https://www.therange.co.uk/_m3/7/4/1560864428_7371.jpg',
    price: 15,
    discount: 0,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: 'Pack of 20 Spontex Economic Scourers',
    image: 'https://www.therange.co.uk/_m3/2/1/1459920202_442.jpg',
    price: 40,
    discount: 6,
    inStock: true,
    category: 'Household Products',
  },
  {
    name: "Dr. Elsey's Precious Cat Ultra Cat Litter, 18 pound bag",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71qNtlFCpiL._AC_UL604_SR604,400_.jpg',
    price: 160,
    discount: 31,
    inStock: true,
    category: 'Animals Supplies',
  },
  {
    name: 'GREENIES Original TEENIE Natural Dog Dental Treats, 3 oz. Pack (11 Treats)',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81rHNWQYZ3L._AC_UL604_SR604,400_.jpg',
    price: 200,
    discount: 0,
    inStock: false,
    category: 'Animals Supplies',
  },
  {
    name: 'Fresh Step Advanced Clean Paws Multi Cat 18.5lb',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81NRl+JKFuL._AC_UL604_SR604,400_.jpg',
    price: 170,
    discount: 0,
    inStock: true,
    category: 'Animals Supplies',
  },
  {
    name: 'Nutramax Cosequin Maximum Strength Joint Health Supplement for Dogs',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81Y98AdEPBL._AC_UL604_SR604,400_.jpg',
    price: 350,
    discount: 10,
    inStock: true,
    category: 'Animals Supplies',
  },
  {
    name: "Good'N'Fun Triple Flavored Rawhide Kabobs For Dogs",
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71YVTeCWdVL._AC_UL604_SR604,400_.jpg',
    price: 230,
    discount: 10,
    inStock: true,
    category: 'Animals Supplies',
  },
  {
    name: 'Calvin Klein - Contradiction For Women Eau de Parfum 100ml Spray',
    image:
      'https://www.beautybase.com/images/contradiction-for-women-eau-de-parfum-100ml-spray-p1226-798_thumb.jpg',
    price: 740,
    discount: 61,
    inStock: true,
    category: 'Perfumes',
  },
  {
    name: 'Viktor & Rolf - Viktor & Rolf Flowerbomb Eau De Parfum 30ml Spray',
    image:
      'https://www.beautybase.com/images/viktor-rolf-flowerbomb-eau-de-parfum-30ml-spray-p46210-18556_thumb.jpg',
    price: 570,
    discount: 4,
    inStock: true,
    category: 'Perfumes',
  },
  {
    name: 'Ghost - Ghost - Deep Night Eau de Toilette 75ml Spray',
    image:
      'https://www.beautybase.com/images/ghost-deep-night-eau-de-toilette-75ml-spray-p4779-18627_thumb.jpg',
    price: 480,
    discount: 50,
    inStock: true,
    category: 'Perfumes',
  },
];
