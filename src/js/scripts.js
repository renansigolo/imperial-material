var app = new Vue({
  el: '#app',
  data: {
    imperialMaterial: 'Imperial Material',
    imperialPlus: 'Imperial Plus',
    services: [
      {
        imageUrl: '',
        title: 'Understanding your requirements',
        subtitle: 'Brainstorm & sourcing',
        description: 'Discuss your project and exchange ideas.',
        direction: 'order-md-2'
      },
      {
        imageUrl: '',
        title: 'Collect bids from suppliers',
        subtitle: 'Evaluation & quotation',
        description: 'Targeted manufacturers are evaluated.',
        direction: ''
      },
      {
        imageUrl: '',
        title: 'Provide Samples',
        subtitle: 'Sample & production',
        description: 'Pre-production sample will be delivered.',
        direction: 'order-md-2'
      },
      {
        imageUrl: '',
        title: 'Production',
        subtitle: 'Inspection & delivery',
        description: 'Your products are delivered after quality inspections.',
        direction: ''
      },
      {
        imageUrl: '',
        title: 'Shipping',
        subtitle: 'Brainstorm & sourcing',
        description: 'Discuss your project and exchange ideas.',
        direction: 'order-md-2'
      },
      {
        imageUrl: '',
        title: 'Goods delivered to your location',
        subtitle: 'Brainstorm & sourcing',
        description: 'Discuss your project and exchange ideas.',
        direction: ''
      }
    ],
    products: [
      {
        thumbnail: '',
        title: 'Real Wear HMT-1 EBT',
        description:
          'Head Mounted Android Table with FLIR Thermal Imaging Camera for the early detection of Elevated Body Temperature caused by the onset of Covid-19. Used for quickly accessing large crowds.',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Non - Contact Thermometer',
        description:
          'Infra-red Thermometer used to verify the body temperature of a person.',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Covid - 19 Anti- Body test kit',
        description:
          'Medical Grade Detection Kit Test blood of serum for the presence of CoVid-19 anti-bodies',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Sepray Non - Invasive Ventilator',
        description: 'Sepray Non - Invasive Ventilator',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Humidified High Flow Nasal Cannula Oxygen Ventilator',
        description: 'Humidified High Flow Nasal Cannula Oxygen Ventilator',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'KN95 Face Mask',
        description:
          'Face mask filtering 95% of particulates with a mass mean diameter of 0.3 micrometres or more. Certified to EN149:2001+A1:2009 (Equivalent to NIOSH N95)',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'General Face Mask',
        description: '3 Ply face mask FFP2',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Surgical Face Mask',
        description: '3 Ply Surgical Face Mask Certified to EN14683:2005',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Full Body Protective Suit',
        description:
          'Single - use full body protective PPE including Safety Glasses (Bio Surgical)',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Boot Covers',
        description: 'Disposable Boot / Shoe covers',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Safety Glasses',
        description: 'Clear Safety Glasses',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Face Shield',
        description: 'Clear Full Face Shield',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Face Shield',
        description: 'Clear Full Face Shield option 2',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Nitrile Gloves',
        description: 'Nitrile Gloves (Box of 100)',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Hand Sanitiser Gel 60ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Hand Sanitiser Gel 125ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Hand Sanitiser Gel 250ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        country: 'China',
        category: 'sanitisers'
      },
      {
        thumbnail: '',
        title: 'Hand Sanitiser Gel 500ml',
        description:
          'Medical Grade Hand Sanitizer containing no less than 70% Alcohol. For quick disinfection of hands and skin',
        country: 'China',
        category: 'sanitisers'
      }
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
          'Other Doors &amp; Windows',
          'Shutter Doors'
        ],
        country: '',
        category: 'construction'
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Tiles and Accessories',
        list: ['Tile Accessories', 'Floor Tiles', 'Roof Tile', 'Wall Tiles'],
        country: '',
        category: 'construction'
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
          'Squat Pans'
        ],
        country: '',
        category: 'construction'
      }
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
          'Bookcases'
        ],
        country: '',
        category: 'furniture'
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
          ' Dressers'
        ],
        country: '',
        category: 'furniture'
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
          ' Dressers'
        ],
        country: '',
        category: 'furniture'
      }
    ],
    packaging: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Packaging Products',
        list: [
          'Blister Cards',
          'Bottles',
          'Cans &amp; Tins',
          'Jars',
          'Lids, Bottle Caps, Closures',
          'Packaging Tubes',
          'Packaging Bags',
          'Packaging Boxes',
          'Plastic Packaging',
          'Packaging Trays',
          'Other Packaging Products'
        ],
        country: '',
        category: 'packaging'
      },
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Packaging Accessories',
        list: [
          'Blister Cards',
          'Bottles',
          'Cans &amp; Tins',
          'Jars',
          'Lids, Bottle Caps, Closures',
          'Packaging Tubes',
          'Packaging Bags',
          'Packaging Boxes',
          'Plastic Packaging',
          'Packaging Trays',
          'Other Packaging Products'
        ],
        country: '',
        category: 'packaging'
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
          'Other Packaging Materials'
        ],
        country: '',
        category: 'packaging'
      }
    ],
    other: [
      {
        thumbnail: 'images/products/product-0.png',
        title: 'Other',
        list: [
          'Manufacturing Equipment ',
          'Agricultural Equipment',
          'Motor Vehicle Spare parts',
          'Fashion'
        ],
        country: '',
        category: 'packaging'
      }
    ]
  }
})

$('body').scrollspy({ target: '#navbar' })

$(document).ready(function() {
  var allCards = document.querySelectorAll('.card')
  var footer = document.querySelector('footer')

  allCards.forEach(function(card) {
    card.addEventListener('click', function() {
      window.scrollTo(0, footer.offsetTop)
    })
  })
})

$('#contact-form').submit(function(event) {
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
      message: message
    }
  }).then(function(response) {
    console.log('sendForm -> response', response)
    $('#form').toggle('fast')
    $('#form-response').toggle('fast')
  })
})
