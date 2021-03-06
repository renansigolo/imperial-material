var app = new Vue({
  el: '#app',
  data: {
    imperialMaterial: 'Imperial Material',
    imperialPlus: 'Imperial Plus',
    services: [
      {
        title: 'Understanding your requirements',
        subtitle: 'Brainstorm & sourcing',
        description: 'Discuss your project and exchange ideas.',
      },
      {
        title: 'Collect bids from suppliers',
        subtitle: 'Evaluation & quotation',
        description: 'Targeted manufacturers are evaluated.',
      },
      {
        title: 'Provide Samples',
        subtitle: 'Sample & production',
        description: 'Pre-production sample will be delivered.',
      },
      {
        title: 'Production',
        subtitle: 'Inspection & delivery',
        description: 'Products delivered after quality inspections.',
      },
      {
        title: 'Shipping',
        subtitle: 'Brainstorm & sourcing',
        description: 'Discuss your project and exchange ideas.',
      },
      {
        title: 'Goods delivered to your location',
        subtitle: 'Brainstorm & sourcing',
        description: 'Discuss your project and exchange ideas.',
      },
    ],
    products: [
      {
        title: 'KN95 Face Mask (Maximun Filtration)',
        description:
          'Indicated for use when treating patients with airborne diseases such as TB or influenza. \n NIOSH Approved N95 Particulate Respirator \n High Fluid Resistance: 160 mmHg \n Filtration Efficiency: PFE = 99.9% @ 0.1 micron \n Breathability - Delta P: > 5.0 mm H2O/cm2 \n Flame Spread: Class 1',
        category: 'sanitisers',
      },
      {
        title: 'N95 Face Mask (Maximun Filtration)',
        description:
          'Indicated for use when treating patients with airborne diseases such as TB or influenza. \n NIOSH Approved N95 Particulate Respirator \n High Fluid Resistance: 160 mmHg \n Filtration Efficiency: PFE = 99.9% @ 0.1 micron \n Breathability - Delta P: > 5.0 mm H2O/cm2 \n Flame Spread: Class 1',
        category: 'sanitisers',
      },
      {
        title: 'General Face Mask',
        description:
          'Ideal for procedures where low amounts of fluid, spray and/or aerosols are produced. Ideal as a comfortable substitute for earloop face masks, this mask is a simple physical barrier ideal for exams and visitations or for dry, short procedures that do not produce fluid, spray or aerosols.',
        category: 'sanitisers',
      },
      {
        title: 'Hand Sanitiser Gel 60ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        category: 'sanitisers',
      },
      {
        title: 'Hand Sanitiser Gel 250ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        category: 'sanitisers',
      },
      {
        title: 'Hand Sanitiser Gel 500ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        category: 'sanitisers',
      },
      {
        title: 'Hand Sanitiser Gel 1L',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        category: 'sanitisers',
      },
      {
        title: 'Real Wear HMT-1 EBT',
        description:
          'Head Mounted Android Table with FLIR Thermal Imaging Camera for the early detection of Elevated Body Temperature caused by the onset of Covid-19. Used for quickly accessing large crowds.',
        category: 'sanitisers',
      },
      {
        title: 'Non - Contact Thermometer',
        description:
          'Infra-red Thermometer used to verify the body temperature of a person.',
        category: 'sanitisers',
      },
      {
        title: 'Full Body Protective Suit',
        description:
          'Single - use full body protective PPE including Safety Glasses',
        category: 'sanitisers',
      },
      {
        title: 'Boot Covers',
        description: 'Disposable Boot / Shoe covers',
        category: 'sanitisers',
      },
      {
        title: 'Safety Glasses',
        description: 'Clear Safety Glasses',
        category: 'sanitisers',
      },
      {
        title: 'Face Shield',
        description: 'Clear Full Face Shield',
        category: 'sanitisers',
      },
      {
        title: 'Face Shield',
        description: 'Clear Full Face Shield option 2',
        category: 'sanitisers',
      },
      {
        title: 'Nitrile Gloves',
        description: 'Nitrile Gloves (Box of 100)',
        category: 'sanitisers',
      },
      {
        title: 'Lincon Gloves',
        description: 'Lincon Gloves Medium',
        category: 'sanitisers',
      },
      {
        title: 'Lincon Gloves',
        description: 'Lincon Gloves Large',
        category: 'sanitisers',
      },
      {
        title: 'Alcohol Wipes',
        description: 'Alcohol Wipes',
        category: 'sanitisers',
      },
      {
        title: 'Simply Active',
        description: 'Simply Active Wipes',
        category: 'sanitisers',
      },
      {
        title: 'Infrared Thermometer',
        description: 'Infrared Thermometer',
        category: 'sanitisers',
      },
    ],
    construction: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Doors and Windows',
        list: [
          'Gates',
          'Entry Doors',
          'Casement Windows',
          'Sliding Windows',
          'Security Doors',
          'Sliding Doors',
          'Garage Doors',
          'Garden Windows',
          'Interior Doors',
          'Other Doors & Windows',
          'Shutter Doors',
        ],
        category: 'construction',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Tiles and Accessories',
        list: ['Tile Accessories', 'Floor Tiles', 'Roof Tile', 'Wall Tiles'],
        category: 'construction',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Bathroom Fixtures',
        list: [
          'Toilet Bowls',
          'Toilet Seats',
          'Toilet cistern',
          'Bath Tubs',
          'Bathroom Sinks',
          'Urinals',
          'Bidets',
          'Squat Pans',
        ],
        category: 'construction',
      },
    ],
    food: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Meat',
        category: 'food',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Non-Alcoholic Beverages',
        category: 'food',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Dry Fruit and Nuts',
        category: 'food',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Confectionery',
        category: 'food',
      },
    ],
    furniture: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Living Room Furniture',
        list: [
          'Living Room Sofas',
          'Living Room Chairs',
          'TV Stands',
          'Shoe Racks',
          'Living Room Sets',
          'Console Tables',
          'Coffee Tables',
          'Living Room Cabinets',
          'Stool & Ottomans',
          'Bookcases',
        ],
        category: 'furniture',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Bedroom Furniture',
        list: [
          'Wardrobe',
          'Beds',
          'Mattresses',
          'Bedroom Sets',
          'Nightstands',
          ' Dressers',
        ],
        category: 'furniture',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Dining Room Furniture',
        list: [
          'Wardrobe',
          'Beds',
          'Mattresses',
          'Bedroom Sets',
          'Nightstands',
          ' Dressers',
        ],
        category: 'furniture',
      },
    ],
    packaging: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Packaging Products',
        list: [
          'Blister Cards',
          'Bottles',
          'Cans & Tins',
          'Jars',
          'Lids, Bottle Caps, Closures',
          'Packaging Tubes',
          'Packaging Bags',
          'Packaging Boxes',
          'Plastic Packaging',
          'Packaging Trays',
          'Other Packaging Products',
        ],
        category: 'packaging',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Packaging Accessories',
        list: [
          'Blister Cards',
          'Bottles',
          'Cans & Tins',
          'Jars',
          'Lids, Bottle Caps, Closures',
          'Packaging Tubes',
          'Packaging Bags',
          'Packaging Boxes',
          'Plastic Packaging',
          'Packaging Trays',
          'Other Packaging Products',
        ],
        category: 'packaging',
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Packaging Materials',
        list: [
          'Aluminum Foil',
          'Composite Packaging Materials',
          'Hot Stamping Foil',
          'Metallized Film',
          'Plastic Film',
          'Shrink Film',
          'Steel Strips',
          'Stretch Film',
          'Tinplate',
          'Other Packaging Materials',
        ],
        category: 'packaging',
      },
    ],
    other: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Other',
        list: [
          'Manufacturing Equipment ',
          'Agricultural Equipment',
          'Motor Vehicle Spare parts',
          'Fashion',
        ],
        category: 'packaging',
      },
    ],
  },
})

$('body').scrollspy({ target: '#navbar' })

$(document).ready(function () {
  var allCards = document.querySelectorAll('.card')
  var footer = document.querySelector('footer')

  allCards.forEach(function (card) {
    card.addEventListener('click', function () {
      window.scrollTo(0, footer.offsetTop)
    })
  })
})

$('#contact-form').submit(function (event) {
  event.preventDefault()

  var name = document.querySelector('[name="name"]').value
  var email = document.querySelector('[name="email"]').value
  var phone = document.querySelector('[name="phone"]').value
  var message = document.querySelector('[name="message"]').value

  // Send a POST request
  axios({
    method: 'post',
    url: 'https://us-central1-imperial-material.cloudfunctions.net/sendEmail',
    data: {
      name: name,
      email: email,
      phone: phone,
      message: message,
    },
  }).then(function (response) {
    $('#form').toggle('fast')
    $('#form-response').toggle('fast')
  })
})
