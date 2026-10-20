/**
 * FRANK & HARRI — ULTRA-MINIMAL LUXURY ATELIER
 * Application Logic & Interactive State
 * Inspired directly by the user's reference layout
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Data Store: Collections & Enhanced Product Repertoire
  // --------------------------------------------------------------------------
  const collectionMeta = {
    'all': {
      title: 'Curated Collections',
      eyebrow: 'Atelier Repertoire',
      crumb: 'All Creations',
      desc: 'Handcrafted daily in our Kew boutique atelier using cultured Lescure butter, seasonal Victorian berries, and single-origin Belgian chocolate.'
    },
    'bestsellers': {
      title: 'Best Sellers',
      eyebrow: 'Atelier Icons',
      crumb: 'Best Sellers',
      desc: 'Melbourne’s most coveted cakes and morning pastries — from the legendary 5-layer Bruce Chocolate Cake to cultured Lescure croissants and burnt Basque cheesecake.'
    },
    'birthday-cakes': {
      title: 'Birthday Cakes',
      eyebrow: 'Celebrations & Milestones',
      crumb: 'Birthday Cakes',
      desc: 'Tall celebratory masterpieces, nostalgic funfetti sponges, bespoke sablé numbers, floral buttercream, and complimentary chocolate message plaques.'
    },
    'gluten-free': {
      title: 'Gluten-Free Atelier',
      eyebrow: 'Naturally Gluten-Free',
      crumb: 'Gluten-Free',
      desc: 'Exquisite flourless citrus tortes, Italian almond ricotta cakes, San Sebastián burnt cheesecake, and airy chantilly pavlovas crafted with dedicated gluten-free procedures.'
    },
    'pastries': {
      title: 'Tarts & Pastries',
      eyebrow: 'French Viennoiserie',
      crumb: 'Tarts & Pastries',
      desc: 'Hand-laminated over 72 hours using cultured Lescure butter for shatteringly crisp layers, house frangipane almond croissants, and artisanal tarts.'
    },
    'catering': {
      title: 'Catering & Banquets',
      eyebrow: 'Events & Grazing',
      crumb: 'Catering',
      desc: 'Generous charcuterie grazing platters, handmade warm quiches, flaky pork & fennel sausage rolls, poached chicken ribbon sandwiches, and kid’s party packages.'
    }
  };

  const products = [
    {
      id: 'audrey-vintage-cake',
      name: 'Audrey — Vintage Lambeth Cake',
      category: 'signature',
      categoryGroup: 'celebration',
      categoryLabel: 'Vintage Lambeth Masterpiece',
      collections: ['bestsellers', 'birthday-cakes'],
      dietary: ['vegetarian'],
      leadTimeKey: '72h',
      price: 149.00,
      image: 'assets/images/real/audrey-vintage-cake.jpg',
      description: 'The iconic Frank & Harri celebration centerpiece. Intricate French Lambeth-style shell drop piping, luscious vanilla Swiss meringue buttercream, ruby maraschino cherries, and a complimentary hand-piped chocolate message medallion.',
      flavours: 'Vanilla bean sponge, raspberry coulis, silky Swiss meringue buttercream, maraschino cherries',
      allergens: 'Contains gluten, dairy, egg. Facility handles nuts.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 8–10', price: 149.00 },
        { name: '8" Grand', serves: 'Serves 16–20', price: 219.00 },
        { name: '10" Banquet', serves: 'Serves 28–32', price: 310.00 }
      ]
    },
    {
      id: 'jane-layer-cake',
      name: 'Jane — Pastel Buttercream Rosette Cake',
      category: 'cakes',
      categoryGroup: 'celebration',
      categoryLabel: 'Celebration Layer Cake',
      collections: ['birthday-cakes'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '72h',
      price: 145.00,
      image: 'https://cdn.shopify.com/s/files/1/0361/5172/2028/products/FrankandHarriCakesJune2022_48of155.jpg?v=1664938246',
      description: 'Elegantly adorned with pastel buttercream rosettes, delicate palette knife texture, and edible 24k gold leaf. A timeless favorite for Melbourne birthdays, weddings, and celebrations.',
      flavours: 'Victorian butter cake, raspberry curd, Swiss meringue buttercream',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 8–10', price: 145.00 },
        { name: '8" Grand', serves: 'Serves 18–20', price: 225.00 },
        { name: '10" Banquet', serves: 'Serves 28–30', price: 329.00 }
      ]
    },
    {
      id: 'hazel-layer-cake',
      name: 'Hazel — Ferrero Rocher & Praline Cake',
      category: 'cakes',
      categoryGroup: 'celebration',
      categoryLabel: 'Celebration Layer Cake',
      collections: ['bestsellers', 'birthday-cakes'],
      dietary: ['vegetarian'],
      leadTimeKey: '72h',
      price: 159.00,
      image: 'https://cdn.shopify.com/s/files/1/0361/5172/2028/products/custom_resized_73c4308a-bc8a-4264-b441-39a51fbd2b9d.jpg?v=1669095416',
      description: 'Decadent chocolate buttermilk cake filled with roasted hazelnut praline crunch, Nutella ganache, and topped with golden Ferrero Rochers and dark chocolate drip.',
      flavours: 'Belgian chocolate fudge, hazelnut praline crunch, Gianduja ganache',
      allergens: 'Contains gluten, dairy, egg, tree nuts (hazelnuts).',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 8–10', price: 159.00 },
        { name: '8" Grand', serves: 'Serves 18–20', price: 249.00 },
        { name: '10" Banquet', serves: 'Serves 28–30', price: 339.00 }
      ]
    },
    {
      id: 'focaccia-pesto',
      name: 'House Focaccia — Pesto, Mozzarella & Stracciatella',
      category: 'catering',
      categoryGroup: 'focaccias',
      categoryLabel: 'House Artisanal Focaccia',
      collections: ['catering'],
      dietary: ['vegetarian'],
      leadTimeKey: '4-days',
      price: 65.00,
      image: 'https://cdn.shopify.com/s/files/1/0361/5172/2028/files/20_615bb574-8605-4ccf-9c2a-23a14f41d88f.png?v=1763095865',
      description: 'Handcrafted slow-fermented olive oil focaccia topped with fresh basil pesto, fior di latte mozzarella, and creamy Victorian stracciatella.',
      flavours: 'Cold-pressed olive oil, basil pesto, fresh mozzarella, stracciatella, Maldon sea salt',
      allergens: 'Contains gluten, dairy.',
      leadTime: '4 days notice',
      sizes: [
        { name: 'Half Sheet (Serves ~20)', serves: '20 portions', price: 65.00 }
      ]
    },
    {
      id: 'focaccia-harissa',
      name: 'House Focaccia — Harissa, Salami & Roast Peppers',
      category: 'catering',
      categoryGroup: 'focaccias',
      categoryLabel: 'House Artisanal Focaccia',
      collections: ['catering'],
      dietary: [],
      leadTimeKey: '4-days',
      price: 65.00,
      image: 'https://cdn.shopify.com/s/files/1/0361/5172/2028/files/34_1b1d36c9-e166-4a66-b3d7-30e30e71ce7a.png?v=1763095907',
      description: 'Slow-fermented focaccia seasoned with house smoky harissa, thinly sliced artisan salami, wood-roasted peppers, and melted mozzarella.',
      flavours: 'House harissa, artisanal salami, sweet roast capsicum, mozzarella',
      allergens: 'Contains gluten, dairy, pork.',
      leadTime: '4 days notice',
      sizes: [
        { name: 'Half Sheet (Serves ~20)', serves: '20 portions', price: 65.00 }
      ]
    },
    {
      id: 'bruce-chocolate-cake',
      name: 'Bruce Chocolate Cake',
      category: 'signature',
      categoryGroup: 'celebration',
      categoryLabel: 'Signature 5-Layer Masterpiece',
      collections: ['bestsellers', 'birthday-cakes'],
      dietary: ['vegetarian'],
      leadTimeKey: '72h',
      price: 109.00,
      image: 'assets/images/real/bruce-layer-cake.png',
      description: 'Our most iconic chocolate cake. Five whisper-thin layers of rich buttermilk chocolate cake bound by luscious Belgian chocolate fudge frosting. Decadent, balanced, and Melbourne’s most beloved celebration layer cake.',
      flavours: 'Chocolate buttermilk sponge, Belgian dark chocolate fudge, single origin cocoa',
      allergens: 'Contains gluten, dairy, egg. Facility handles nuts.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 7–8', price: 109.00 },
        { name: '9" Grand', serves: 'Serves 12–14', price: 159.00 },
        { name: '12" Banquet', serves: 'Serves 20–22', price: 209.00 }
      ]
    },
    {
      id: 'sprinkles-celebration-cake',
      name: 'The Signature Sprinkles / Funfetti',
      category: 'cakes',
      categoryLabel: 'Celebration Layer Cake',
      collections: ['bestsellers', 'birthday-cakes', 'gluten-free'],
      dietary: ['gluten-free', 'vegetarian'],
      leadTimeKey: '72h',
      price: 109.00,
      image: 'assets/images/real/sprinkles-cake.png',
      description: 'A delicate Victorian sponge layered with Swiss vanilla buttercream, house-made raspberry jam, seasonal berries, and encrusted with joyful artisanal sprinkles. "Deserving of a Hollywood handshake on the Great British Bake Off."',
      flavours: 'Victorian sponge, lemon curd, raspberry jam, vanilla Swiss buttercream (GFO)',
      allergens: 'Contains gluten, dairy, egg. Gluten-free option available.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 7–8', price: 109.00 },
        { name: '9" Grand', serves: 'Serves 12–14', price: 159.00 },
        { name: '12" Banquet', serves: 'Serves 20–22', price: 259.00 }
      ]
    },
    {
      id: 'cake-tasting-box',
      name: 'Cake Tasting Box (6 Signature Flavours)',
      category: 'cakes',
      categoryLabel: 'Curated Tasting Box',
      collections: ['bestsellers', 'birthday-cakes'],
      dietary: ['vegetarian'],
      leadTimeKey: '48h',
      price: 79.00,
      image: 'assets/images/real/cake-tasting-box.png',
      description: 'The ultimate sampler box featuring six generous slices: Victorian Sponge, Coconut & Cherry, Berry Chocolate, Lemon & Passionfruit, Biscoff, and Caramel Espresso. Ideal for wedding planning or weekend indulgence.',
      flavours: '6 signature handmade cake flavours crafted fresh in Kew',
      allergens: 'Contains dairy, gluten, egg, nuts.',
      leadTime: 'Friday Collection Window',
      sizes: [
        { name: '6 Slices Box', serves: 'Serves 6', price: 79.00 }
      ]
    },
    {
      id: 'rose-celebration-cake',
      name: 'Rose Celebration Cake',
      category: 'cakes',
      categoryLabel: 'Floral Celebration Cake',
      collections: ['birthday-cakes'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '72h',
      price: 100.00,
      image: 'assets/images/real/rose-cake.jpg',
      description: 'Elegantly adorned with handcrafted pastel buttercream rosettes, edible 24k gold leaf, and delicate organic dried petals. Perfect for birthdays, engagements, and baby showers.',
      flavours: 'Madagascar vanilla bean sponge, strawberry compote, Swiss buttercream',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 7–8', price: 100.00 },
        { name: '8" Classic', serves: 'Serves 10–12', price: 145.00 }
      ]
    },
    {
      id: 'number-milestone-cake',
      name: 'Bespoke Number Milestone Cake',
      category: 'cakes',
      categoryLabel: 'Milestone Layer Cake',
      collections: ['birthday-cakes'],
      dietary: ['vegetarian'],
      leadTimeKey: '72h',
      price: 159.00,
      image: 'assets/images/real/number-cake.jpg',
      description: 'Custom number or monogram cake constructed with crisp almond sablé layers, piped vanilla bean Swiss meringue buttercream, macarons, fresh raspberries, meringue kisses, and fresh florals.',
      flavours: 'Vanilla bean sablé biscuit, Swiss buttercream, raspberries, macarons',
      allergens: 'Contains gluten, dairy, egg, almonds.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: 'Single Digit', serves: 'Serves 12–15', price: 159.00 },
        { name: 'Double Digit', serves: 'Serves 24–30', price: 289.00 }
      ]
    },
    {
      id: 'gender-reveal-cake',
      name: 'Gender Reveal Surprise Cake',
      category: 'cakes',
      categoryLabel: 'Celebration Surprise Cake',
      collections: ['birthday-cakes'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '72h',
      price: 109.00,
      image: 'assets/images/real/sprinkles-cake.png',
      description: 'A sweet milestone surprise: 5" three-layer vanilla butter cake filled with baby blue or baby pink Belgian ganache, finished in silky pastel Swiss buttercream with soft floral piping.',
      flavours: 'Vanilla butter sponge, secret tinted ganache, Swiss buttercream',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '5" Three-Layer', serves: 'Serves 6–8', price: 109.00 }
      ]
    },
    {
      id: 'basque-cheesecake',
      name: 'Burnt Basque Cheesecake',
      category: 'cakes',
      categoryLabel: 'Traditional Cakes (GF)',
      collections: ['bestsellers', 'gluten-free'],
      dietary: ['gluten-free', 'vegetarian', 'nut-free'],
      leadTimeKey: '24h',
      price: 78.00,
      image: 'assets/images/collection-traditional.jpg',
      description: 'Caramelised, deeply browned exterior with a molten, ultra-creamy vanilla centre. Baked fresh daily following traditional San Sebastián techniques. Naturally gluten-free.',
      flavours: 'Cream cheese, Madagascar vanilla, organic eggs',
      allergens: 'Contains dairy, egg. Naturally gluten-free.',
      leadTime: '24h Pre-order',
      sizes: [
        { name: '8" Whole', serves: 'Serves 8–10', price: 78.00 }
      ]
    },
    {
      id: 'eton-mess-cake',
      name: 'Eton Mess Cake (Gluten-Free)',
      category: 'cakes',
      categoryLabel: 'Traditional Cakes (GF)',
      collections: ['birthday-cakes', 'gluten-free'],
      dietary: ['gluten-free', 'vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 72.90,
      image: 'assets/images/real/eton-mess-cake.png',
      description: 'Airy meringue and vanilla sponge cake crowned with fresh seasonal strawberries, house raspberry coulis, and chantilly cream. Light, refreshing, and gluten-free.',
      flavours: 'Crisp meringue, berries, vanilla bean chantilly',
      allergens: 'Contains dairy, egg. Naturally gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: '8" Whole', serves: 'Serves 8–10', price: 72.90 }
      ]
    },
    {
      id: 'lemon-ricotta-cake',
      name: 'Lemon, Ricotta & Pistachio Cake (GF)',
      category: 'cakes',
      categoryLabel: 'Traditional Cakes (GF)',
      collections: ['gluten-free'],
      dietary: ['gluten-free', 'vegetarian'],
      leadTimeKey: '48h',
      price: 72.90,
      image: 'assets/images/real/lemon-ricotta-cake.png',
      description: 'Moist Italian-style whole ricotta and almond cake fragrant with fresh Meyer lemon zest, topped with toasted Bronte pistachios and lemon glaze.',
      flavours: 'Fresh ricotta, lemon zest, Bronte pistachio, almond',
      allergens: 'Contains dairy, egg, tree nuts (almonds, pistachios). Gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: '8" Whole', serves: 'Serves 8–10', price: 72.90 }
      ]
    },
    {
      id: 'flourless-orange-cake',
      name: 'Flourless Orange & Poppyseed (GF)',
      category: 'cakes',
      categoryLabel: 'Traditional Cakes (GF)',
      collections: ['gluten-free'],
      dietary: ['gluten-free', 'dairy-free'],
      leadTimeKey: '48h',
      price: 72.90,
      image: 'assets/images/real/flourless-orange-cake.png',
      description: 'Whole boiled Australian navel oranges pureed with almond meal and organic poppy seeds. Deeply citrusy, incredibly moist, and finished with candied citrus.',
      flavours: 'Whole navel oranges, almond meal, poppy seeds',
      allergens: 'Contains egg, tree nuts (almonds). Gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: '8" Whole', serves: 'Serves 8–10', price: 72.90 }
      ]
    },
    {
      id: 'pavlova-dessert',
      name: 'Pavlova with Mascarpone Crème & Berries',
      category: 'cakes',
      categoryLabel: 'Traditional Australian Desserts (GF)',
      collections: ['birthday-cakes', 'gluten-free'],
      dietary: ['gluten-free', 'vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 39.00,
      image: 'assets/images/real/pavlova-dessert.jpg',
      description: 'Crisp marshmallow meringue shell piled high with whipped vanilla mascarpone crème, tangy passionfruit curd, and fresh seasonal Australian berries.',
      flavours: 'Meringue, mascarpone crème, passionfruit, fresh berries',
      allergens: 'Contains dairy, egg. Naturally gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Whole Pavlova', serves: 'Serves 6–8', price: 39.00 }
      ]
    },
    {
      id: 'traditional-croissant',
      name: 'French Butter Croissant',
      category: 'patisserie',
      categoryLabel: 'French Viennoiserie',
      collections: ['bestsellers', 'pastries'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: 'today',
      price: 6.80,
      image: 'assets/images/collection-patisserie.png',
      description: 'Hand-laminated using cultured Lescure butter over 72 hours. Delicate honeycomb crumb, shatteringly crisp exterior, and rich aroma.',
      flavours: 'Lescure butter, unbleached flour, pinch of sea salt',
      allergens: 'Contains gluten, dairy.',
      leadTime: 'Daily in-store',
      sizes: [
        { name: 'Individual', serves: '1 person', price: 6.80 },
        { name: '4-Pack', serves: '4 persons', price: 26.00 }
      ]
    },
    {
      id: 'almond-croissant',
      name: 'Twice-Baked Almond Croissant',
      category: 'patisserie',
      categoryLabel: 'French Viennoiserie',
      collections: ['bestsellers', 'pastries'],
      dietary: ['vegetarian'],
      leadTimeKey: 'today',
      price: 9.50,
      image: 'assets/images/hero-patisserie.png',
      description: 'Soaked in house vanilla-sugar syrup, generously filled with fragrant almond frangipane, and topped with toasted flaked almonds and a dusting of snow sugar.',
      flavours: 'Almond frangipane, toasted almonds, vanilla bean',
      allergens: 'Contains gluten, dairy, egg, tree nuts (almonds).',
      leadTime: 'Daily in-store',
      sizes: [
        { name: 'Individual', serves: '1 person', price: 9.50 }
      ]
    },
    {
      id: 'lemon-meringue-tart',
      name: 'French Lemon Meringue Tart',
      category: 'patisserie',
      categoryLabel: 'Artisan Patisserie Tarts',
      collections: ['bestsellers', 'pastries'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '24h',
      price: 38.00,
      image: 'assets/images/collection-patisserie.png',
      description: 'Crisp sweet shortcrust sablé pastry filled with sharp Meyer lemon curd and crowned with torched Swiss meringue peaks.',
      flavours: 'Meyer lemon curd, all-butter sablé, Swiss meringue',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '24h Pre-order',
      sizes: [
        { name: '7" Tart', serves: 'Serves 6–8', price: 38.00 }
      ]
    },
    {
      id: 'box-of-mini-croissants',
      name: 'Box of Mini Croissants (12 pk)',
      category: 'patisserie',
      categoryLabel: 'Pastry Catering Box',
      collections: ['pastries', 'catering'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 60.00,
      image: 'assets/images/real/mini-croissants-box.png',
      description: 'A dozen golden petite French croissants baked fresh each morning. Perfect for morning teas, breakfast meetings, and celebrations.',
      flavours: 'Classic French cultured butter',
      allergens: 'Contains gluten, dairy.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Box of 12', serves: 'Serves 10–12', price: 60.00 }
      ]
    },
    {
      id: 'box-of-mini-pastries',
      name: 'Box of Mini Pastries (12 pk)',
      category: 'patisserie',
      categoryLabel: 'Pastry Catering Box',
      collections: ['pastries', 'catering'],
      dietary: ['vegetarian'],
      leadTimeKey: '48h',
      price: 74.40,
      image: 'assets/images/real/mini-pastries-box.png',
      description: 'Assorted petite morning pastries including mini pain au chocolat, almond croissants, fruit danishes, and escargot.',
      flavours: 'Assorted French viennoiserie',
      allergens: 'Contains gluten, dairy, egg, nuts.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Box of 12', serves: 'Serves 10–12', price: 74.40 }
      ]
    },
    {
      id: 'focaccia-classic',
      name: 'House Rosemary & Sea Salt Focaccia',
      category: 'savoury',
      categoryLabel: 'House Sourdough Bread',
      collections: ['catering'],
      dietary: ['vegan', 'vegetarian', 'dairy-free', 'nut-free'],
      leadTimeKey: '48h',
      price: 45.00,
      image: 'assets/images/real/focaccia-classic.png',
      description: 'Slow-fermented artisan sourdough focaccia generously dimpled with Australian extra virgin olive oil, fresh Kew garden rosemary, and flaky Maldon sea salt.',
      flavours: 'EVOO, fresh rosemary, Maldon sea salt crystals',
      allergens: 'Contains gluten. Vegan friendly.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Half Slab', serves: 'Serves 4–6', price: 25.00 },
        { name: 'Whole Slab', serves: 'Serves 8–12', price: 45.00 }
      ]
    },
    {
      id: 'focaccia-pesto',
      name: 'Focaccia — Pesto, Mozzarella & Stracciatella',
      category: 'savoury',
      categoryLabel: 'Gourmet Focaccia',
      collections: ['catering'],
      dietary: ['vegetarian'],
      leadTimeKey: '48h',
      price: 65.00,
      image: 'assets/images/real/focaccia-pesto.png',
      description: 'Artisan slab focaccia topped with house basil pine-nut pesto, melted fior di latte mozzarella, and creamy cold-curd stracciatella.',
      flavours: 'Basil pesto, fior di latte, stracciatella, cold-pressed olive oil',
      allergens: 'Contains gluten, dairy, pine nuts.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Whole Slab', serves: 'Serves 8–12', price: 65.00 }
      ]
    },
    {
      id: 'focaccia-harissa',
      name: 'Focaccia — Harissa, Salami & Roast Peppers',
      category: 'savoury',
      categoryLabel: 'Gourmet Focaccia',
      collections: ['catering'],
      dietary: ['nut-free'],
      leadTimeKey: '48h',
      price: 65.00,
      image: 'assets/images/real/focaccia-harissa.png',
      description: 'Slow-proved focaccia layered with smoky mild harissa, aged cured salami, fire-roasted red bell peppers, and melted mozzarella.',
      flavours: 'Harissa, artisanal salami, roast peppers, mozzarella',
      allergens: 'Contains gluten, dairy, pork.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Whole Slab', serves: 'Serves 8–12', price: 65.00 }
      ]
    },
    {
      id: 'ham-cheese-croissant',
      name: 'Leg Ham & Gruyère Croissant',
      category: 'savoury',
      categoryLabel: 'All-Day Brunch',
      collections: ['pastries'],
      dietary: ['nut-free'],
      leadTimeKey: 'today',
      price: 14.50,
      image: 'assets/images/hero-catering.png',
      description: 'Stuffed with artisan free-range shaved leg ham, aged Gruyère and Swiss cheese, finished with our house honey-mustard mayonnaise.',
      flavours: 'Free-range leg ham, Gruyère, honey mustard mayo',
      allergens: 'Contains gluten, dairy, egg, mustard.',
      leadTime: 'All-Day Cafe',
      sizes: [
        { name: 'Warm Toasted', serves: '1 person', price: 14.50 }
      ]
    },
    {
      id: 'cypriot-grain-salad',
      name: 'Cypriot Grain Salad Platter',
      category: 'savoury',
      categoryLabel: 'Salads & Sides',
      collections: ['catering'],
      dietary: ['vegetarian'],
      leadTimeKey: '48h',
      price: 55.00,
      image: 'assets/images/real/cypriot-grain-salad.png',
      description: 'Freekeh, lentils, and quinoa tossed with toasted pumpkin seeds, coriander, parsley, pomegranate jewels, and creamy Greek yogurt dressing.',
      flavours: 'Grains, pomegranate, herbs, seeds, honey-cumin yogurt',
      allergens: 'Contains gluten, dairy, seeds. Vegetarian.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter Bowl', serves: 'Serves 6–8', price: 55.00 }
      ]
    },
    {
      id: 'potato-salad',
      name: 'Twice-Cooked Herb Potato Salad',
      category: 'savoury',
      categoryLabel: 'Salads & Sides (GF)',
      collections: ['gluten-free', 'catering'],
      dietary: ['gluten-free', 'dairy-free', 'vegan', 'vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 55.00,
      image: 'assets/images/real/potato-salad.png',
      description: 'Crispy roasted kipfler potatoes tossed with shallots, capers, cornichons, fresh dill, and whole-grain Dijon mustard vinaigrette.',
      flavours: 'Kipfler potatoes, capers, dill, whole-grain mustard',
      allergens: 'Contains mustard. Gluten-free, dairy-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter Bowl', serves: 'Serves 6–8', price: 55.00 }
      ]
    },
    {
      id: 'seasonal-fruit-platter',
      name: 'Peak-Season Fresh Fruit Platter',
      category: 'catering',
      categoryLabel: 'Fresh Catering Platters (GF)',
      collections: ['catering', 'gluten-free'],
      dietary: ['gluten-free', 'vegan', 'vegetarian', 'dairy-free', 'nut-free'],
      leadTimeKey: '48h',
      price: 65.00,
      image: 'assets/images/collection-salads.png',
      description: 'A vibrant selection of freshly cut peak-season Victorian fruit, beautifully arranged and ready to serve for breakfasts, corporate morning teas, and weddings.',
      flavours: 'Melons, berries, grapes, citrus, stone fruit',
      allergens: 'Naturally vegan, gluten-free, dairy-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Small (Serves 6–8)', serves: 'Serves 6–8', price: 65.00 },
        { name: 'Medium (Serves 10–15)', serves: 'Serves 10–15', price: 115.00 },
        { name: 'Large (Serves 20–25)', serves: 'Serves 20–25', price: 170.00 }
      ]
    },
    {
      id: 'atlantic-baked-salmon',
      name: 'Honey-Glazed Atlantic Baked Salmon',
      category: 'catering',
      categoryLabel: 'Banquet Main Platter (GF)',
      collections: ['catering', 'gluten-free'],
      dietary: ['gluten-free'],
      leadTimeKey: '48h',
      price: 180.00,
      image: 'assets/images/collection-salads.png',
      description: 'Slow-baked honey-glazed Tasmanian Atlantic salmon served with dill crème fraîche, pomegranate seeds, toasted almonds, and fresh garden herb salsa.',
      flavours: 'Atlantic salmon, dill crème fraîche, pomegranate, herb salsa',
      allergens: 'Contains fish (salmon), dairy, tree nuts (almonds). Gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter (Serves 8–10)', serves: 'Serves 8–10', price: 180.00 }
      ]
    },
    {
      id: 'charcuterie-grazing-box',
      name: 'Charcuterie & Grazing Platter Box',
      category: 'catering',
      categoryLabel: 'Banquet Catering',
      collections: ['bestsellers', 'catering'],
      dietary: [],
      leadTimeKey: '48h',
      price: 175.00,
      image: 'assets/images/collection-salads.png',
      description: 'Artfully styled banquet box with local artisanal cheeses, prosciutto di San Daniele, house focaccia crisps, honeycomb, muscatels, and seasonal fresh berries.',
      flavours: 'Artisan cheeses, cured meats, house preserves, crackers',
      allergens: 'Contains dairy, gluten, sulfites.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Medium Box', serves: 'Serves 8–10', price: 175.00 },
        { name: 'Grand Box', serves: 'Serves 15–20', price: 265.00 }
      ]
    },
    {
      id: 'mini-quiches-box',
      name: 'House Mini Quiches (20 pk)',
      category: 'catering',
      categoryLabel: 'Warm Savoury Catering',
      collections: ['catering'],
      dietary: ['nut-free'],
      leadTimeKey: '48h',
      price: 120.00,
      image: 'assets/images/real/mini-quiche.jpg',
      description: 'Twenty bite-sized quiches in buttery shortcrust pastry: Lorraine with smoky bacon & Gruyère, and Forest mushroom with thyme & goats curd.',
      flavours: 'Free-range eggs, cream, bacon, mushrooms, herbs',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter of 20', serves: 'Serves 10–15', price: 120.00 }
      ]
    },
    {
      id: 'mini-sausage-rolls-box',
      name: 'Artisan Mini Sausage Rolls (20 pk)',
      category: 'catering',
      categoryLabel: 'Warm Savoury Catering',
      collections: ['catering'],
      dietary: ['nut-free'],
      leadTimeKey: '48h',
      price: 80.00,
      image: 'assets/images/real/mini-sausage-rolls.jpg',
      description: 'Golden puff pastry rolled around seasoned free-range pork and fennel mince, topped with toasted sesame seeds and served with house tomato chutney.',
      flavours: 'Free-range pork, fennel seeds, all-butter puff pastry',
      allergens: 'Contains gluten, dairy, egg, sesame.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter of 20', serves: 'Serves 10–15', price: 80.00 }
      ]
    },
    {
      id: 'chicken-ribbon-sandwiches',
      name: 'Poached Chicken Ribbon Sandwiches (20 pk)',
      category: 'catering',
      categoryLabel: 'Gourmet Finger Sandwiches',
      collections: ['catering'],
      dietary: ['dairy-free'],
      leadTimeKey: '48h',
      price: 99.00,
      image: 'assets/images/real/ribbon-sandwiches.jpg',
      description: 'Crustless soft white ribbon sandwiches filled with poached free-range chicken breast, celery, tarragon, toasted walnuts, and house aioli.',
      flavours: 'Poached chicken, tarragon, celery, walnuts, aioli',
      allergens: 'Contains gluten, egg, nuts (walnuts).',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter of 20', serves: 'Serves 10–12', price: 99.00 }
      ]
    },
    {
      id: 'fairy-bread-platter',
      name: 'Classic Artisan Fairy Bread (50 pc)',
      category: 'kids',
      categoryLabel: 'Kid’s Party Fun',
      collections: ['birthday-cakes', 'catering'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 49.00,
      image: 'assets/images/real/fairy-bread.jpg',
      description: 'A nostalgic Australian birthday party tradition elevated with artisanal brioche triangles, whipped cultured butter, and vibrant 100s and 1000s sprinkles.',
      flavours: 'Sweet brioche, cultured butter, sprinkles',
      allergens: 'Contains gluten, dairy.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter of 50', serves: 'Serves 15–20', price: 49.00 }
      ]
    },
    {
      id: 'mini-sprinkles-cupcakes',
      name: 'Mini Celebration Cupcakes (12 pk)',
      category: 'kids',
      categoryLabel: 'Kid’s Party Sweets',
      collections: ['birthday-cakes', 'catering'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 55.00,
      image: 'assets/images/real/mini-cupcakes.jpg',
      description: 'Dozen bite-sized fluffy vanilla sponge cupcakes swirled with silky pastel Swiss buttercream and topped with joyful sprinkles.',
      flavours: 'Vanilla bean sponge, Swiss buttercream, sprinkles',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Box of 12', serves: 'Serves 12', price: 55.00 },
        { name: 'Box of 24', serves: 'Serves 24', price: 98.00 }
      ]
    },
    {
      id: 'vanilla-raspberry-cupcakes',
      name: 'Vanilla & Raspberry Cupcakes (6 pk)',
      category: 'cakes',
      categoryLabel: 'Artisan Cupcakes',
      collections: ['birthday-cakes', 'pastries'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 53.40,
      image: 'assets/images/real/vanilla-raspberry-cupcakes.png',
      description: 'Fluffy Madagascar vanilla sponge topped with raspberry compote and swirled with rich two-tone Swiss buttercream.',
      flavours: 'Vanilla bean, raspberry compote, Swiss buttercream',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Box of 6', serves: 'Serves 6', price: 53.40 }
      ]
    },
    {
      id: 'choc-chip-cookies-box',
      name: 'Mini Choc Chip Cookies (20 pk)',
      category: 'patisserie',
      categoryLabel: 'Bakery Cookies',
      collections: ['pastries', 'catering'],
      dietary: ['vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 75.00,
      image: 'assets/images/real/choc-chip-cookies.jpg',
      description: 'Twenty chewy, golden brown cookies loaded with Belgian Callebaut chocolate chunks and sprinkled with Maldon sea salt crystals.',
      flavours: 'Callebaut dark chocolate, brown sugar butter, sea salt',
      allergens: 'Contains gluten, dairy, egg, soy.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter of 20', serves: 'Serves 15–20', price: 75.00 }
      ]
    },
    {
      id: 'kids-party-grande-package',
      name: 'Kid’s Party Catering Package — Grande',
      category: 'kids',
      categoryLabel: 'Party Packages',
      collections: ['birthday-cakes', 'catering'],
      dietary: [],
      leadTimeKey: '72h',
      price: 670.00,
      image: 'assets/images/collection-kids.jpg',
      description: 'The ultimate hassle-free celebration package for 15-20 kids: 20 mini sausage rolls, 20 chicken ribbons, 50 fairy bread pieces, 20 fruit cups, 12 mini cupcakes, and 12 honey joys.',
      flavours: 'Complete party selection: savoury and sweet',
      allergens: 'Contains gluten, dairy, egg, sesame.',
      leadTime: '72h Notice',
      sizes: [
        { name: 'Grande Package (15-20 Kids)', serves: '15–20 Kids', price: 670.00 },
        { name: 'Petite Package (8-10 Kids)', serves: '8–10 Kids', price: 350.00 }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Shopping Bag State & LocalStorage
  // --------------------------------------------------------------------------
  let cart = JSON.parse(localStorage.getItem('fh_cart') || '[]');

  function saveCart() {
    localStorage.setItem('fh_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function addToCart(item) {
    const existingIndex = cart.findIndex(c => 
      c.id === item.id && 
      c.size === item.size && 
      c.flavour === item.flavour && 
      c.hasPlaque === item.hasPlaque && 
      c.plaqueText === item.plaqueText &&
      JSON.stringify(c.addons || []) === JSON.stringify(item.addons || [])
    );

    if (existingIndex > -1) {
      cart[existingIndex].qty += (item.qty || 1);
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        size: item.size || 'Standard',
        flavour: item.flavour || '',
        hasPlaque: !!item.hasPlaque,
        plaqueText: item.plaqueText || '',
        fulfillment: item.fulfillment || '',
        date: item.date || '',
        timeSlot: item.timeSlot || '',
        addons: item.addons || [],
        qty: item.qty || 1
      });
    }

    saveCart();
    openCartDrawer();
    showToast(`Added "${item.name}" to your bag.`);
  }

  function removeFromCart(index) {
    const removed = cart.splice(index, 1);
    saveCart();
    if (removed[0]) {
      showToast(`Removed from bag.`);
    }
  }

  function changeCartQty(index, delta) {
    if (cart[index]) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        removeFromCart(index);
      } else {
        saveCart();
      }
    }
  }

  function updateCartUI() {
    const badge = document.getElementById('cartCountBadge');
    const drawerCount = document.getElementById('cartDrawerCount');
    const itemsContainer = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('cartSubtotal');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (badge) badge.textContent = totalQty;
    if (drawerCount) drawerCount.textContent = `(${totalQty} items)`;
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    // Free Melbourne Metro Delivery Progress Meter ($150 threshold)
    const meterFill = document.getElementById('cartMeterFill');
    const meterDiff = document.getElementById('cartMeterDiff');
    if (meterFill && meterDiff) {
      const pct = Math.min(100, Math.round((subtotal / 150) * 100));
      meterFill.style.width = `${pct}%`;
      if (subtotal >= 150) {
        meterDiff.innerHTML = '<span class="cart-meter-unlocked">✓ Free Melbourne Metro Delivery Unlocked!</span>';
      } else {
        meterDiff.innerHTML = `Add <strong>$${(150 - subtotal).toFixed(2)}</strong> more to unlock FREE delivery`;
      }
    }

    if (!itemsContainer) return;

    if (cart.length === 0) {
      emptyState.style.display = 'flex';
      itemsContainer.style.display = 'none';
      if (footer) footer.style.display = 'none';
    } else {
      emptyState.style.display = 'none';
      itemsContainer.style.display = 'block';
      if (footer) footer.style.display = 'block';

      itemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details" style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
              <h4 class="cart-item-title" style="margin: 0; font-size: 0.88rem; font-weight: 600;">${item.name}</h4>
              <button type="button" class="cart-item-remove-btn" onclick="window.fhApp.removeFromCart(${index})" style="background: none; border: none; font-size: 0.85rem; color: #888; cursor: pointer; padding: 2px 6px; border-radius: 4px;" title="Remove creation" aria-label="Remove item">✕</button>
            </div>

            <div class="cart-item-custom-tags">
              ${item.size ? `<span class="cart-item-tag">Format: ${item.size}</span>` : ''}
              ${item.flavour ? `<span class="cart-item-tag">Flavour: ${item.flavour}</span>` : ''}
              ${item.hasPlaque ? `<span class="cart-item-tag cart-item-plaque">Plaque: "${item.plaqueText}"</span>` : ''}
              ${item.fulfillment ? `<span class="cart-item-tag">Fulfillment: ${item.fulfillment === 'delivery' ? 'Metro Courier' : 'Kew Boutique Pickup'}</span>` : ''}
              ${item.date ? `<span class="cart-item-tag">Date: ${item.date} (${item.timeSlot || 'Morning'})</span>` : ''}
              ${item.addons && item.addons.length ? `<span class="cart-item-tag">Finishing: ${item.addons.join(', ')}</span>` : ''}
            </div>

            <div class="cart-item-footer" style="margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
              <div class="qty-control">
                <button class="qty-btn" onclick="window.fhApp.changeQty(${index}, -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-display">${item.qty}</span>
                <button class="qty-btn" onclick="window.fhApp.changeQty(${index}, 1)" aria-label="Increase quantity">+</button>
              </div>
              <div class="cart-item-price" style="font-weight: 700;">$${(item.price * item.qty).toFixed(2)}</div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // 3. Cart Drawer & Modal Controls
  // --------------------------------------------------------------------------
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('modalBackdrop');
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');

  function openCartDrawer() {
    cartDrawer?.classList.add('open');
    cartBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    cartDrawer?.classList.remove('open');
    document.getElementById('phNavDrawer')?.classList.remove('open');
    document.getElementById('quickViewModal')?.classList.remove('open');
    document.getElementById('checkoutModal')?.classList.remove('open');
    document.getElementById('pdfMenuModal')?.classList.remove('open');
    document.getElementById('cateringInquiryModal')?.classList.remove('open');
    cartBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartOpenBtn?.addEventListener('click', openCartDrawer);
  cartCloseBtn?.addEventListener('click', closeAllModals);
  cartBackdrop?.addEventListener('click', closeAllModals);

  // --------------------------------------------------------------------------
  // 4. Products Grid & Collection Filter System
  // --------------------------------------------------------------------------
  const productsGrid = document.getElementById('productsGrid');
  const catalogTitle = document.getElementById('catalogTitle');
  const collectionEyebrow = document.getElementById('collectionEyebrow');
  const collectionDescription = document.getElementById('collectionDescription');
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  const productsCountBadge = document.getElementById('productsCountBadge');
  const resetAllFiltersTopBtn = document.getElementById('resetAllFiltersTopBtn');
  const activeFiltersBar = document.getElementById('activeFiltersBar');
  const activeChipsContainer = document.getElementById('activeChipsContainer');
  const clearAllChipsBtn = document.getElementById('clearAllChipsBtn');
  const viewAllBtn = document.getElementById('viewAllBtn');

  // Filter Dropdown Buttons & Labels
  const dietaryFilterBtn = document.getElementById('dietaryFilterBtn');
  const dietaryDropdown = document.getElementById('dietaryDropdown');
  const selectedDietaryLabel = document.getElementById('selectedDietaryLabel');

  const leadTimeFilterBtn = document.getElementById('leadTimeFilterBtn');
  const leadTimeDropdown = document.getElementById('leadTimeDropdown');
  const selectedLeadTimeLabel = document.getElementById('selectedLeadTimeLabel');

  const priceFilterBtn = document.getElementById('priceFilterBtn');
  const priceDropdown = document.getElementById('priceDropdown');
  const selectedPriceLabel = document.getElementById('selectedPriceLabel');

  const sortPillBtn = document.getElementById('sortPillBtn');
  const sortDropdown = document.getElementById('sortDropdown');
  const selectedSortLabel = document.getElementById('selectedSortLabel');

  // Global Filter & Collection State
  const filterState = {
    collection: 'all',    // 'all' | 'bestsellers' | 'birthday-cakes' | 'gluten-free' | 'pastries' | 'catering'
    dietary: 'all',       // 'all' | 'gluten-free' | 'vegetarian' | 'nut-free' | 'dairy-free'
    leadTime: 'all',      // 'all' | 'today' | '24h' | '48h' | '72h'
    price: 'all',         // 'all' | 'under50' | '50to100' | '100to150' | 'over150'
    sort: 'default',      // 'default' | 'price-low' | 'price-high' | 'name'
    search: ''
  };

  const filterLabelMaps = {
    dietary: {
      'all': 'Dietary: All',
      'gluten-free': 'Dietary: Gluten-Free',
      'vegetarian': 'Dietary: Vegetarian',
      'nut-free': 'Dietary: Nut-Free',
      'dairy-free': 'Dietary: Dairy-Free'
    },
    leadTime: {
      'all': 'Notice: All',
      'today': 'Notice: Today',
      '24h': 'Notice: 24h',
      '48h': 'Notice: 48h',
      '72h': 'Notice: 72h'
    },
    price: {
      'all': 'Price: All',
      'under50': 'Price: <$50',
      '50to100': 'Price: $50–$100',
      '100to150': 'Price: $100–$150',
      'over150': 'Price: >$150'
    },
    sort: {
      'default': 'Sort: Featured',
      'price-low': 'Price: Low to High',
      'price-high': 'Price: High to Low',
      'name': 'Name: A to Z'
    }
  };

  function getFilteredAndSortedProducts() {
    let list = [...products];

    // 1. Collection Filter
    if (filterState.collection !== 'all') {
      list = list.filter(p => p.collections && p.collections.includes(filterState.collection));
    }

    // 2. Dietary Requirements Filter
    if (filterState.dietary !== 'all') {
      list = list.filter(p => p.dietary && p.dietary.includes(filterState.dietary));
    }

    // 3. Notice / Lead Time Filter
    if (filterState.leadTime !== 'all') {
      list = list.filter(p => p.leadTimeKey === filterState.leadTime);
    }

    // 4. Price Range Filter
    if (filterState.price === 'under50') {
      list = list.filter(p => p.price < 50);
    } else if (filterState.price === '50to100') {
      list = list.filter(p => p.price >= 50 && p.price <= 100);
    } else if (filterState.price === '100to150') {
      list = list.filter(p => p.price > 100 && p.price <= 150);
    } else if (filterState.price === 'over150') {
      list = list.filter(p => p.price > 150);
    }

    // 5. Global Search Filter
    if (filterState.search) {
      const q = filterState.search.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.flavours.toLowerCase().includes(q) ||
        (p.categoryLabel && p.categoryLabel.toLowerCase().includes(q))
      );
    }

    // 6. Sorting Order
    if (filterState.sort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (filterState.sort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (filterState.sort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }

  function renderProducts(items) {
    if (!productsGrid) return;

    if (items.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1.5rem; color: var(--fh-charcoal-muted); background: var(--fh-surface); border: 1px dashed var(--fh-border); border-radius: var(--radius-card);">
          <div style="font-size: 2.2rem; margin-bottom: 0.75rem; color: var(--fh-primary-dark);">✦</div>
          <h3 style="font-family: var(--font-brand); font-size: 1.15rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fh-charcoal); margin-bottom: 0.5rem;">
            No creations match your filter criteria
          </h3>
          <p style="font-size: 0.88rem; max-width: 440px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
            We could not find any items matching your selected criteria in this collection. Broaden your dietary, notice, or price filters.
          </p>
          <button class="btn-primary" onclick="window.fhApp.clearAllFilters()" style="margin: 0 auto; display: inline-flex;">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = items.map(p => {
      const isGf = p.dietary && p.dietary.includes('gluten-free');
      const badgeHtml = isGf ? '<span class="product-dietary-badge">100% GF</span>' : '';

      return `
        <div class="product-card" data-category="${p.category}" onclick="window.location.href='product.html?id=${encodeURIComponent(p.id)}'" style="cursor: pointer;">
          <!-- Pure Unobscured Image Frame -->
          <div class="product-card-media">
            ${badgeHtml}
            <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
            
            <!-- Ultra-Minimal Slide-Up Quick Action -->
            <div class="product-card-overlay">
              <button class="product-quick-btn" onclick="event.stopPropagation(); window.fhApp.quickAdd('${p.id}')" title="Quick Add to Bag" aria-label="Add ${p.name}">
                <span>+ Quick Add</span>
              </button>
            </div>
          </div>

          <!-- Editorial Info Below Image -->
          <div class="product-card-info">
            <div class="product-card-cat">${p.categoryLabel || 'Boutique Collection'}</div>
            <h3 class="product-card-title"><a href="product.html?id=${encodeURIComponent(p.id)}" style="color: inherit; text-decoration: none;">${p.name}</a></h3>
            <div class="product-card-meta">
              <span class="product-card-price">$${p.price.toFixed(2)}</span>
              <span class="product-card-dot">·</span>
              <span class="product-card-lead">${p.leadTime || 'Handcrafted'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function updateActiveChips() {
    const chips = [];

    if (filterState.dietary !== 'all') {
      const label = filterLabelMaps.dietary[filterState.dietary] || filterState.dietary;
      chips.push({ key: 'dietary', label });
    }
    if (filterState.leadTime !== 'all') {
      const label = filterLabelMaps.leadTime[filterState.leadTime] || filterState.leadTime;
      chips.push({ key: 'leadTime', label });
    }
    if (filterState.price !== 'all') {
      const label = filterLabelMaps.price[filterState.price] || filterState.price;
      chips.push({ key: 'price', label });
    }
    if (filterState.search) {
      chips.push({ key: 'search', label: `Search: "${filterState.search}"` });
    }

    if (chips.length > 0) {
      if (activeFiltersBar) activeFiltersBar.style.display = 'flex';
      if (resetAllFiltersTopBtn) resetAllFiltersTopBtn.style.display = 'inline-block';
      if (activeChipsContainer) {
        activeChipsContainer.innerHTML = chips.map(c => `
          <span class="active-filter-chip">
            <span>${c.label}</span>
            <button class="chip-remove-btn" onclick="window.fhApp.clearFilter('${c.key}')" aria-label="Remove filter ${c.label}">✕</button>
          </span>
        `).join('');
      }
    } else {
      if (activeFiltersBar) activeFiltersBar.style.display = 'none';
      if (resetAllFiltersTopBtn) resetAllFiltersTopBtn.style.display = 'none';
      if (activeChipsContainer) activeChipsContainer.innerHTML = '';
    }
  }

  function updateHeaderAndControls() {
    const meta = collectionMeta[filterState.collection] || collectionMeta['all'];

    if (collectionEyebrow) collectionEyebrow.textContent = meta.eyebrow;
    if (catalogTitle) catalogTitle.textContent = filterState.search ? `Search: "${filterState.search}"` : meta.title;
    if (collectionDescription) collectionDescription.textContent = meta.desc;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = meta.crumb;

    // Sync Collection Switcher button pills
    document.querySelectorAll('.col-switch-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-col') === filterState.collection);
    });

    // Sync Collection Showcase Tiles
    document.querySelectorAll('.collection-tile').forEach(tile => {
      tile.classList.toggle('active', tile.getAttribute('data-collection') === filterState.collection);
    });

    // Sync Header Category links
    document.querySelectorAll('.ph-cat-link').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === filterState.collection);
    });

    // Sync Dropdown active classes & button labels
    document.querySelectorAll('#dietaryDropdown .filter-menu-opt').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-dietary') === filterState.dietary);
    });
    if (selectedDietaryLabel) selectedDietaryLabel.textContent = filterLabelMaps.dietary[filterState.dietary];
    dietaryFilterBtn?.classList.toggle('has-filter', filterState.dietary !== 'all');

    document.querySelectorAll('#leadTimeDropdown .filter-menu-opt').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lead') === filterState.leadTime);
    });
    if (selectedLeadTimeLabel) selectedLeadTimeLabel.textContent = filterLabelMaps.leadTime[filterState.leadTime];
    leadTimeFilterBtn?.classList.toggle('has-filter', filterState.leadTime !== 'all');

    document.querySelectorAll('#priceDropdown .filter-menu-opt').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-price') === filterState.price);
    });
    if (selectedPriceLabel) selectedPriceLabel.textContent = filterLabelMaps.price[filterState.price];
    priceFilterBtn?.classList.toggle('has-filter', filterState.price !== 'all');

    document.querySelectorAll('#sortDropdown .filter-menu-opt').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-sort') === filterState.sort);
    });
    if (selectedSortLabel) selectedSortLabel.textContent = filterLabelMaps.sort[filterState.sort];
    sortPillBtn?.classList.toggle('has-filter', filterState.sort !== 'default');
  }

  function refreshCatalog() {
    const list = getFilteredAndSortedProducts();
    if (productsCountBadge) {
      productsCountBadge.textContent = `${list.length} Creation${list.length === 1 ? '' : 's'}`;
    }
    updateHeaderAndControls();
    updateActiveChips();
    renderProducts(list);
  }

  function setCollection(colKey, shouldScroll = false) {
    if (!collectionMeta[colKey] && colKey !== 'all') {
      colKey = 'all';
    }
    filterState.collection = colKey;
    refreshCatalog();

    if (shouldScroll) {
      document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function clearFilter(key) {
    if (key === 'dietary') filterState.dietary = 'all';
    if (key === 'leadTime') filterState.leadTime = 'all';
    if (key === 'price') filterState.price = 'all';
    if (key === 'search') {
      filterState.search = '';
      if (globalSearchInput) globalSearchInput.value = '';
    }
    refreshCatalog();
  }

  function clearAllFilters() {
    filterState.dietary = 'all';
    filterState.leadTime = 'all';
    filterState.price = 'all';
    filterState.sort = 'default';
    filterState.search = '';
    if (globalSearchInput) globalSearchInput.value = '';
    refreshCatalog();
    showToast('All filters have been reset.');
  }

  // Close all open filter dropdown menus
  function closeAllFilterDropdowns() {
    dietaryDropdown?.classList.remove('open');
    leadTimeDropdown?.classList.remove('open');
    priceDropdown?.classList.remove('open');
    sortDropdown?.classList.remove('open');
    dietaryFilterBtn?.setAttribute('aria-expanded', 'false');
    leadTimeFilterBtn?.setAttribute('aria-expanded', 'false');
    priceFilterBtn?.setAttribute('aria-expanded', 'false');
    sortPillBtn?.setAttribute('aria-expanded', 'false');
  }

  // Dropdown Toggle Handlers
  dietaryFilterBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dietaryDropdown?.classList.contains('open');
    closeAllFilterDropdowns();
    if (!isOpen) {
      dietaryDropdown?.classList.add('open');
      dietaryFilterBtn?.setAttribute('aria-expanded', 'true');
    }
  });

  leadTimeFilterBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = leadTimeDropdown?.classList.contains('open');
    closeAllFilterDropdowns();
    if (!isOpen) {
      leadTimeDropdown?.classList.add('open');
      leadTimeFilterBtn?.setAttribute('aria-expanded', 'true');
    }
  });

  priceFilterBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = priceDropdown?.classList.contains('open');
    closeAllFilterDropdowns();
    if (!isOpen) {
      priceDropdown?.classList.add('open');
      priceFilterBtn?.setAttribute('aria-expanded', 'true');
    }
  });

  sortPillBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = sortDropdown?.classList.contains('open');
    closeAllFilterDropdowns();
    if (!isOpen) {
      sortDropdown?.classList.add('open');
      sortPillBtn?.setAttribute('aria-expanded', 'true');
    }
  });

  // Dropdown Option Selection Handlers
  document.querySelectorAll('#dietaryDropdown .filter-menu-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-dietary') || 'all';
      filterState.dietary = val;
      closeAllFilterDropdowns();
      refreshCatalog();
    });
  });

  document.querySelectorAll('#leadTimeDropdown .filter-menu-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-lead') || 'all';
      filterState.leadTime = val;
      closeAllFilterDropdowns();
      refreshCatalog();
    });
  });

  document.querySelectorAll('#priceDropdown .filter-menu-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-price') || 'all';
      filterState.price = val;
      closeAllFilterDropdowns();
      refreshCatalog();
    });
  });

  document.querySelectorAll('#sortDropdown .filter-menu-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-sort') || 'default';
      filterState.sort = val;
      closeAllFilterDropdowns();
      refreshCatalog();
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    closeAllFilterDropdowns();
  });

  // Showcase Section Collection Tiles Click
  document.querySelectorAll('.collection-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const col = tile.getAttribute('data-collection');
      if (col) {
        setCollection(col, true);
        showToast(`Viewing ${collectionMeta[col]?.title || 'Collection'}`);
      }
    });

    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tile.click();
      }
    });
  });

  // Collection Quick Switcher Pills Click
  document.querySelectorAll('.col-switch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (href && (href.endsWith('.html') || href.includes('.html#'))) {
        return; // Allow standard page navigation
      }
      const col = btn.getAttribute('data-col') || 'all';
      setCollection(col, false);
    });
  });

  // Breadcrumb Clicks
  document.getElementById('breadcrumbHome')?.addEventListener('click', (e) => {
    const isSubpage = window.location.pathname.endsWith('.html') && !window.location.pathname.endsWith('index.html');
    if (!isSubpage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.getElementById('breadcrumbCollections')?.addEventListener('click', (e) => {
    const isSubpage = window.location.pathname.endsWith('.html') && !window.location.pathname.endsWith('index.html');
    if (!isSubpage) {
      e.preventDefault();
      document.getElementById('collectionsShowcaseSection')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Melbourne's Favourites Horizontal Scroll Arrows
  const favsTrack = document.getElementById('melbourneFavsTrack');
  const favsScrollPrev = document.getElementById('favsScrollPrev');
  const favsScrollNext = document.getElementById('favsScrollNext');

  if (favsTrack) {
    favsScrollPrev?.addEventListener('click', () => {
      const card = favsTrack.querySelector('.product-card');
      const step = card ? (card.offsetWidth + 24) * 2 : 460;
      favsTrack.scrollBy({ left: -step, behavior: 'smooth' });
    });

    favsScrollNext?.addEventListener('click', () => {
      const card = favsTrack.querySelector('.product-card');
      const step = card ? (card.offsetWidth + 24) * 2 : 460;
      favsTrack.scrollBy({ left: step, behavior: 'smooth' });
    });
  }

  // View All / Clear Chips / Reset Buttons
  viewAllBtn?.addEventListener('click', () => {
    const bodyPage = document.body.getAttribute('data-collection-page');
    filterState.collection = bodyPage || 'all';
    clearAllFilters();
    document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  clearAllChipsBtn?.addEventListener('click', clearAllFilters);
  resetAllFiltersTopBtn?.addEventListener('click', clearAllFilters);

  // Check if current page is a dedicated collection page (e.g. bestsellers.html)
  const pageCollection = document.body.getAttribute('data-collection-page');
  if (pageCollection && collectionMeta[pageCollection]) {
    filterState.collection = pageCollection;
  }

  // Initial catalog render
  refreshCatalog();

  // --------------------------------------------------------------------------
  // 5. Pierre Hermé Paris Style Category Navigation & Search Handlers
  // --------------------------------------------------------------------------
  const headerCatLinks = document.querySelectorAll('.ph-cat-link');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchSubmitBtn = document.getElementById('searchSubmitBtn');
  const headerSearchToggleBtn = document.getElementById('headerSearchToggleBtn');
  const phSearchDrawer = document.getElementById('phSearchDrawer');
  const phSearchCloseBtn = document.getElementById('phSearchCloseBtn');

  // Pierre Hermé Category Navigation Bar Click Events
  headerCatLinks.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (href && (href.endsWith('.html') || href.includes('.html#'))) {
        return; // Allow browser navigation to dedicated collection page
      }

      const cat = btn.getAttribute('data-cat');

      if (cat === 'signature') {
        e.preventDefault();
        document.getElementById('signatureSection')?.scrollIntoView({ behavior: 'smooth' });
        showToast('Viewing Signature Masterpiece: The Bruce Cake');
        return;
      }

      if (cat === 'tasting') {
        e.preventDefault();
        openQuickView('cake-tasting-box');
        return;
      }

      if (cat) {
        setCollection(cat, true);
      }
    });
  });

  // Search Drawer Toggle
  function openSearchDrawer() {
    phSearchDrawer?.classList.add('open');
    phSearchDrawer?.setAttribute('aria-hidden', 'false');
    setTimeout(() => globalSearchInput?.focus(), 150);
  }

  function closeSearchDrawer() {
    phSearchDrawer?.classList.remove('open');
    phSearchDrawer?.setAttribute('aria-hidden', 'true');
  }

  headerSearchToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (phSearchDrawer?.classList.contains('open')) {
      closeSearchDrawer();
    } else {
      openSearchDrawer();
    }
  });

  phSearchCloseBtn?.addEventListener('click', closeSearchDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && phSearchDrawer?.classList.contains('open')) {
      closeSearchDrawer();
    }
  });

  // Currency Selector (Header Dropdown & Drawer Switcher)
  const currencyToggleBtn = document.getElementById('currencyToggleBtn');
  const currencyDropdown = document.getElementById('currencyDropdown');
  const currentCurrencyLabel = document.getElementById('currentCurrencyLabel');
  const accountBtn = document.getElementById('accountBtn');

  function updateCurrency(curr) {
    if (currentCurrencyLabel) currentCurrencyLabel.textContent = curr;
    document.querySelectorAll('.ph-curr-opt').forEach(o => {
      o.classList.toggle('active', o.getAttribute('data-curr') === curr);
    });
    document.querySelectorAll('.ph-curr-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-curr') === curr);
    });
    currencyDropdown?.classList.remove('open');
    showToast(`Boutique region & pricing currency set to ${curr}`);
  }

  currencyToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currencyDropdown?.classList.toggle('open');
  });

  document.querySelectorAll('.ph-curr-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const curr = opt.getAttribute('data-curr');
      if (curr) updateCurrency(curr);
    });
  });

  document.querySelectorAll('.ph-curr-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const curr = pill.getAttribute('data-curr');
      if (curr) updateCurrency(curr);
    });
  });

  accountBtn?.addEventListener('click', () => {
    showToast('Boutique Account: Sign in or manage your pickup reservations.');
  });

  document.addEventListener('click', () => {
    currencyDropdown?.classList.remove('open');
  });

  // Mobile Slide-Out Navigation Drawer
  const phNavToggle = document.getElementById('phNavToggle');
  const phNavDrawer = document.getElementById('phNavDrawer');
  const phNavBackdrop = document.getElementById('phNavBackdrop');
  const phNavCloseBtn = document.getElementById('phNavCloseBtn');

  function openNavDrawer() {
    phNavDrawer?.classList.add('open');
    phNavBackdrop?.classList.add('open');
    phNavDrawer?.setAttribute('aria-hidden', 'false');
    phNavBackdrop?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeNavDrawer() {
    phNavDrawer?.classList.remove('open');
    phNavBackdrop?.classList.remove('open');
    phNavDrawer?.setAttribute('aria-hidden', 'true');
    phNavBackdrop?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  phNavToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    openNavDrawer();
  });

  phNavCloseBtn?.addEventListener('click', closeNavDrawer);
  phNavBackdrop?.addEventListener('click', closeNavDrawer);

  document.querySelectorAll('[data-drawer-link]').forEach(link => {
    link.addEventListener('click', () => {
      const drawerCat = link.getAttribute('data-drawer-cat');
      if (drawerCat) {
        setCollection(drawerCat, true);
      }
      closeNavDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (phNavDrawer?.classList.contains('open')) closeNavDrawer();
      if (phSearchDrawer?.classList.contains('open')) closeSearchDrawer();
    }
  });

  function performSearch() {
    const q = globalSearchInput?.value.trim() || '';
    filterState.search = q;
    refreshCatalog();
    if (q) {
      document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  globalSearchInput?.addEventListener('input', performSearch);
  searchSubmitBtn?.addEventListener('click', performSearch);

  // --------------------------------------------------------------------------
  // 6. The Bruce Chocolate Cake Configurator
  // --------------------------------------------------------------------------
  const bruceSizes = [
    { name: '6"', serves: 'Serves 7–8', price: 109.00 },
    { name: '9"', serves: 'Serves 12–14', price: 159.00 },
    { name: '12"', serves: 'Serves 20–22', price: 209.00 }
  ];

  let selectedBruceSize = bruceSizes[0];
  let hasBrucePlaque = false;
  let brucePlaqueText = '';

  const brucePriceDisplay = document.getElementById('brucePriceDisplay');
  const plaqueCheckbox = document.getElementById('plaqueCheckbox');
  const plaqueInputRow = document.getElementById('plaqueInputRow');
  const plaqueTextInput = document.getElementById('plaqueTextInput');
  const plaqueLiveOverlay = document.getElementById('plaqueLiveOverlay');
  const plaqueLiveText = document.getElementById('plaqueLiveText');
  const bruceAddBtn = document.getElementById('bruceAddToCartBtn');

  function updateBrucePrice() {
    let total = selectedBruceSize.price;
    if (hasBrucePlaque) total += 7.90;
    if (brucePriceDisplay) {
      brucePriceDisplay.textContent = `$${total.toFixed(2)}`;
    }
  }

  document.querySelectorAll('.bruce-size-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.bruce-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBruceSize = bruceSizes[idx];
      updateBrucePrice();
    });
  });

  plaqueCheckbox?.addEventListener('change', (e) => {
    hasBrucePlaque = e.target.checked;
    if (hasBrucePlaque) {
      plaqueInputRow?.classList.add('open');
      plaqueLiveOverlay?.classList.add('visible');
      if (plaqueTextInput && !plaqueTextInput.value) {
        plaqueTextInput.value = 'Happy Birthday!';
        brucePlaqueText = 'Happy Birthday!';
        if (plaqueLiveText) plaqueLiveText.textContent = 'Happy Birthday!';
      }
    } else {
      plaqueInputRow?.classList.remove('open');
      plaqueLiveOverlay?.classList.remove('visible');
    }
    updateBrucePrice();
  });

  plaqueTextInput?.addEventListener('input', (e) => {
    brucePlaqueText = e.target.value;
    if (plaqueLiveText) {
      plaqueLiveText.textContent = brucePlaqueText || 'Your Message';
    }
  });

  bruceAddBtn?.addEventListener('click', () => {
    let finalPrice = selectedBruceSize.price;
    if (hasBrucePlaque) finalPrice += 7.90;

    addToCart({
      id: 'bruce-chocolate-cake',
      name: `Bruce Chocolate Cake (${selectedBruceSize.name})`,
      price: finalPrice,
      image: 'assets/images/bruce-cake-1.png',
      size: `${selectedBruceSize.name} - ${selectedBruceSize.serves}`,
      hasPlaque: hasBrucePlaque,
      plaqueText: hasBrucePlaque ? brucePlaqueText : ''
    });
  });

  const bruceMainImg = document.getElementById('bruceMainImg');
  document.querySelectorAll('.bruce-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.bruce-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const targetSrc = thumb.getAttribute('data-img');
      if (bruceMainImg && targetSrc) {
        bruceMainImg.src = targetSrc;
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Cake Portion Sizing Calculator
  // --------------------------------------------------------------------------
  const guestSlider = document.getElementById('guestSlider');
  const guestCountVal = document.getElementById('guestCountVal');
  const recSize = document.getElementById('recSize');
  const recDetail = document.getElementById('recDetail');
  const recFilterBtn = document.getElementById('recFilterBtn');

  function updatePortionGuide(guests) {
    if (guestCountVal) guestCountVal.textContent = `${guests} Guests`;

    if (guests <= 8) {
      if (recSize) recSize.textContent = '6" Signature Cake';
      if (recDetail) recDetail.textContent = 'Comfortably serves 7–8 generous dessert portions (1" × 2" × 6"). Perfect for intimate dinners and family gatherings.';
    } else if (guests <= 14) {
      if (recSize) recSize.textContent = '9" Signature Cake';
      if (recDetail) recDetail.textContent = 'Our most popular celebration size! Yields 12–14 dessert portions or up to 25 coffee/canape serves. Ideal for milestone celebrations.';
    } else if (guests <= 22) {
      if (recSize) recSize.textContent = '12" Celebration Cake';
      if (recDetail) recDetail.textContent = 'A centerpiece cake delivering 20–22 full dessert slices or 40+ cocktail event portions. Handcrafted in five exquisite tall layers.';
    } else {
      if (recSize) recSize.textContent = 'Two Cakes or Multi-Tier';
      if (recDetail) recDetail.textContent = 'For parties of 25+, we suggest pairing a 9" and a 6" cake to offer guests flavour variety, or contacting our concierge for a bespoke multi-tier.';
    }
  }

  guestSlider?.addEventListener('input', (e) => {
    updatePortionGuide(parseInt(e.target.value, 10));
  });

  recFilterBtn?.addEventListener('click', () => {
    currentFilter = 'cakes';
    if (selectedCategoryLabel) selectedCategoryLabel.textContent = 'Celebration Cakes';
    refreshCatalog();
    document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Showing whole celebration cakes suitable for your party size.');
  });

  // --------------------------------------------------------------------------
  // 8. Quick View Modal
  // --------------------------------------------------------------------------
  const quickViewModal = document.getElementById('quickViewModal');

  function openQuickView(productId) {
    const item = products.find(p => p.id === productId);
    if (!item || !quickViewModal) return;

    document.getElementById('qvImage').src = item.image;
    document.getElementById('qvCategory').textContent = item.categoryLabel;
    document.getElementById('qvTitle').textContent = item.name;
    document.getElementById('qvPrice').textContent = `from $${item.price.toFixed(2)}`;
    document.getElementById('qvDescription').textContent = item.description;
    document.getElementById('qvFlavours').textContent = item.flavours;
    document.getElementById('qvAllergens').textContent = item.allergens;
    document.getElementById('qvLeadTime').textContent = item.leadTime;

    const sizesContainer = document.getElementById('qvSizesList');
    if (sizesContainer) {
      sizesContainer.innerHTML = item.sizes.map((s, idx) => `
        <button class="size-pill-btn ${idx === 0 ? 'active' : ''}" onclick="window.fhApp.selectQvSize(${idx}, ${s.price})">
          <div class="size-pill-name">${s.name}</div>
          <div class="size-pill-serves">${s.serves}</div>
          <div class="size-pill-price">$${s.price.toFixed(2)}</div>
        </button>
      `).join('');
    }

    window.currentQvItem = {
      product: item,
      selectedSize: item.sizes[0]
    };

    const detailLink = document.getElementById('qvDetailLink');
    if (detailLink) {
      detailLink.href = `product.html?id=${item.id}`;
    }

    quickViewModal.classList.add('open');
    cartBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.selectQvSize = (idx, price) => {
    document.querySelectorAll('#qvSizesList .size-pill-btn').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
    if (window.currentQvItem) {
      window.currentQvItem.selectedSize = window.currentQvItem.product.sizes[idx];
      document.getElementById('qvPrice').textContent = `$${price.toFixed(2)}`;
    }
  };

  document.getElementById('qvAddToCartBtn')?.addEventListener('click', () => {
    if (!window.currentQvItem) return;
    const { product, selectedSize } = window.currentQvItem;
    addToCart({
      id: product.id,
      name: `${product.name} (${selectedSize.name})`,
      price: selectedSize.price,
      image: product.image,
      size: `${selectedSize.name} - ${selectedSize.serves}`
    });
    closeAllModals();
  });

  document.getElementById('qvCloseBtn')?.addEventListener('click', closeAllModals);

  // --------------------------------------------------------------------------
  // 9. Multi-Step Celebration Checkout Journey & Live Order Tracker
  // --------------------------------------------------------------------------
  let journeyStep = 1;
  let journeyOccasion = 'Birthday';
  let journeyFulfillment = 'pickup';
  let journeyPayment = 'card';

  const checkoutBtn = document.getElementById('checkoutBtn');
  const journeyModal = document.getElementById('journeyModal');
  const journeyBackdrop = document.getElementById('journeyBackdrop');
  const journeyCloseBtn = document.getElementById('journeyCloseBtn');
  const journeyBtnBack = document.getElementById('journeyBtnBack');
  const journeyBtnNext = document.getElementById('journeyBtnNext');

  const orderConfirmModal = document.getElementById('orderConfirmModal');
  const orderConfirmBackdrop = document.getElementById('orderConfirmBackdrop');
  const orderConfirmDoneBtn = document.getElementById('orderConfirmDoneBtn');

  function openCheckoutJourney() {
    if (cart.length === 0) {
      showToast('Your shopping bag is currently empty.');
      return;
    }
    closeAllModals();
    journeyStep = 1;
    updateJourneyStepUI();
    updateJourneySummary();
    journeyModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutJourney() {
    journeyModal?.classList.remove('open');
    orderConfirmModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateJourneyStepUI() {
    for (let i = 1; i <= 4; i++) {
      const indicator = document.getElementById(`stepIndicator${i}`);
      const panel = document.getElementById(`journeyPanel${i}`);
      if (indicator) {
        indicator.classList.toggle('active', i === journeyStep);
        indicator.classList.toggle('completed', i < journeyStep);
      }
      if (panel) {
        panel.classList.toggle('active', i === journeyStep);
      }
    }

    if (journeyBtnBack) {
      journeyBtnBack.style.visibility = journeyStep === 1 ? 'hidden' : 'visible';
    }

    if (journeyBtnNext) {
      if (journeyStep === 1) journeyBtnNext.innerHTML = '<span>Continue to Fulfillment</span><span>→</span>';
      else if (journeyStep === 2) journeyBtnNext.innerHTML = '<span>Continue to Gift Note</span><span>→</span>';
      else if (journeyStep === 3) journeyBtnNext.innerHTML = '<span>Review & Confirm</span><span>→</span>';
      else if (journeyStep === 4) journeyBtnNext.innerHTML = '<span>Confirm & Complete Reservation 🔒</span>';
    }
  }

  function updateJourneySummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const isFreeDelivery = subtotal >= 150;
    const deliveryFee = journeyFulfillment === 'delivery' ? (isFreeDelivery ? 0 : 15.00) : 0;
    const grandTotal = subtotal + deliveryFee;

    const feeLabel = document.getElementById('journeyDeliveryFeeLabel');
    if (feeLabel) {
      feeLabel.textContent = isFreeDelivery ? 'Free (Orders > $150)' : '$15.00';
    }

    const firstItem = cart[0] || {};
    const confirmedDateTime = document.getElementById('journeyConfirmedDateTime');
    if (confirmedDateTime) {
      const dateStr = firstItem.date || 'Earliest Atelier Date (72h Notice)';
      const slotStr = firstItem.timeSlot || 'Morning · 8:00am – 10:30am';
      const methodStr = journeyFulfillment === 'pickup' ? 'Boutique Pickup at 259 High St Kew' : 'Refrigerated Metro Courier';
      confirmedDateTime.textContent = `${dateStr} · ${slotStr} (${methodStr})`;
    }

    const reviewList = document.getElementById('journeyReviewItemsList');
    if (reviewList) {
      reviewList.innerHTML = cart.map(item => `
        <div class="journey-review-row">
          <div>
            <div class="journey-review-item-name">${item.qty}× ${item.name}</div>
            <div class="journey-review-item-meta">
              ${item.size ? `<span>Format: ${item.size}</span>` : ''}
              ${item.flavour ? ` · <span>Flavour: ${item.flavour}</span>` : ''}
              ${item.hasPlaque ? `<br><span style="color: var(--fh-primary-dark); font-style: italic;">Plaque: "${item.plaqueText || 'Included'}"</span>` : ''}
              ${item.date ? `<br><small style="color: var(--fh-charcoal-muted);">${item.date} · ${item.timeSlot || ''}</small>` : ''}
            </div>
          </div>
          <div class="journey-review-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
      `).join('') + `
        <div class="journey-review-row" style="border-top: 1px solid var(--fh-border); margin-top: 0.5rem; padding-top: 0.5rem;">
          <div>Fulfillment (${journeyFulfillment === 'pickup' ? 'Kew Boutique Pickup' : 'Melbourne Metro Courier'})</div>
          <div style="font-weight: 600;">${deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</div>
        </div>
        <div class="journey-review-total-row">
          <span>Total Investment</span>
          <span>$${grandTotal.toFixed(2)}</span>
        </div>
      `;
    }
  }

  // Hook Step 1 Occasion Buttons
  document.querySelectorAll('.journey-occasion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.journey-occasion-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      journeyOccasion = btn.getAttribute('data-occasion') || 'Birthday';
      const liveCard = document.getElementById('journeyLiveCardText');
      if (liveCard) {
        if (journeyOccasion.includes('Birthday')) {
          liveCard.textContent = 'Wishing you the most wonderful and joyous birthday celebration!';
        } else if (journeyOccasion.includes('Wedding')) {
          liveCard.textContent = 'Warmest congratulations on your wedding and beautiful new chapter!';
        } else if (journeyOccasion.includes('Anniversary')) {
          liveCard.textContent = 'Happy Anniversary! Celebrating your enduring love and milestones together.';
        } else if (journeyOccasion.includes('Corporate')) {
          liveCard.textContent = 'With warm appreciation and gratitude from our team to yours.';
        } else {
          liveCard.textContent = 'A handcrafted creation made with love for your special gathering.';
        }
      }
    });
  });

  // Hook Step 2 Fulfillment Cards
  const cardPickup = document.getElementById('journeyMethodCardPickup');
  const cardDelivery = document.getElementById('journeyMethodCardDelivery');
  const pickupBox = document.getElementById('journeyPickupDetailsBox');
  const deliveryBox = document.getElementById('journeyDeliveryAddressBox');

  if (cardPickup && cardDelivery) {
    cardPickup.addEventListener('click', () => {
      journeyFulfillment = 'pickup';
      cardPickup.classList.add('active');
      cardDelivery.classList.remove('active');
      if (pickupBox) pickupBox.style.display = 'flex';
      if (deliveryBox) deliveryBox.style.display = 'none';
      updateJourneySummary();
    });

    cardDelivery.addEventListener('click', () => {
      journeyFulfillment = 'delivery';
      cardDelivery.classList.add('active');
      cardPickup.classList.remove('active');
      if (pickupBox) pickupBox.style.display = 'none';
      if (deliveryBox) deliveryBox.style.display = 'block';
      updateJourneySummary();
    });
  }

  // Hook Step 3 Gift Note Live Preview
  const giftNoteInput = document.getElementById('journeyGiftNoteInput');
  const liveCardText = document.getElementById('journeyLiveCardText');
  if (giftNoteInput && liveCardText) {
    giftNoteInput.addEventListener('input', () => {
      const val = giftNoteInput.value.trim();
      liveCardText.textContent = val || 'Wishing you the most wonderful and joyous celebration!';
    });
  }

  // Hook Step 4 Payment Method Buttons
  document.querySelectorAll('.journey-pay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.journey-pay-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      journeyPayment = btn.getAttribute('data-pay') || 'card';
    });
  });

  // Next & Back Navigation
  journeyBtnBack?.addEventListener('click', () => {
    if (journeyStep > 1) {
      journeyStep--;
      updateJourneyStepUI();
    }
  });

  journeyBtnNext?.addEventListener('click', () => {
    // Validate Step 1
    if (journeyStep === 1) {
      const firstName = document.getElementById('journeyFirstName')?.value.trim();
      const lastName = document.getElementById('journeyLastName')?.value.trim();
      const email = document.getElementById('journeyEmail')?.value.trim();
      const phone = document.getElementById('journeyPhone')?.value.trim();

      if (!firstName || !lastName || !email || !phone) {
        showToast('Please fill in your name, email, and mobile phone to continue.');
        return;
      }
      journeyStep = 2;
      updateJourneyStepUI();
      updateJourneySummary();
      return;
    }

    // Validate Step 2
    if (journeyStep === 2) {
      if (journeyFulfillment === 'delivery') {
        const street = document.getElementById('journeyStreetAddress')?.value.trim();
        const suburb = document.getElementById('journeySuburb')?.value.trim();
        const postcode = document.getElementById('journeyPostcode')?.value.trim();
        if (!street || !suburb || !postcode) {
          showToast('Please enter your street address, suburb, and postcode for courier transit.');
          return;
        }
      }
      journeyStep = 3;
      updateJourneyStepUI();
      return;
    }

    // Step 3 -> Step 4
    if (journeyStep === 3) {
      journeyStep = 4;
      updateJourneyStepUI();
      updateJourneySummary();
      return;
    }

    // Step 4: Final Confirmation Execution
    if (journeyStep === 4) {
      const orderNum = 'FH-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);
      const confirmRef = document.getElementById('orderConfirmNumber');
      if (confirmRef) {
        confirmRef.textContent = `ORDER #${orderNum}`;
      }

      // Configure Google Calendar Link
      const calBtn = document.getElementById('addToCalendarBtn');
      if (calBtn) {
        const firstItem = cart[0] || {};
        const eventTitle = encodeURIComponent(`Frank & Harri Kew — ${journeyOccasion} Celebration Order`);
        const eventDesc = encodeURIComponent(`Frank & Harri Order #${orderNum}\nItems: ${cart.map(i => `${i.qty}x ${i.name}`).join(', ')}\nFulfillment: ${journeyFulfillment === 'pickup' ? 'Boutique Pickup at Kew' : 'Melbourne Metro Courier'}`);
        const eventLoc = encodeURIComponent(journeyFulfillment === 'pickup' ? '259 High Street, Kew VIC 3101' : (document.getElementById('journeyStreetAddress')?.value || 'Melbourne'));
        calBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDesc}&location=${eventLoc}`;
      }

      // Clear Shopping Bag
      cart = [];
      saveCart();
      updateCartUI();

      // Switch Modals
      journeyModal?.classList.remove('open');
      orderConfirmModal?.classList.add('open');

      showToast(`Celebration Order #${orderNum} Confirmed! We look forward to baking for your celebration.`, 7000);
    }
  });

  checkoutBtn?.addEventListener('click', openCheckoutJourney);
  journeyCloseBtn?.addEventListener('click', closeCheckoutJourney);
  journeyBackdrop?.addEventListener('click', closeCheckoutJourney);
  orderConfirmDoneBtn?.addEventListener('click', closeCheckoutJourney);
  orderConfirmBackdrop?.addEventListener('click', closeCheckoutJourney);

  // --------------------------------------------------------------------------
  // 10. Toast Notification Engine
  // --------------------------------------------------------------------------
  function showToast(message, duration = 3500) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">✓</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  // --------------------------------------------------------------------------
  // 11. Atelier Cinema Video Player Logic
  // --------------------------------------------------------------------------
  const atelierVideo = document.getElementById('atelierVideo');
  const cinemaPlayBtn = document.getElementById('cinemaPlayBtn');
  const cinemaMuteBtn = document.getElementById('cinemaMuteBtn');
  const cinemaFullscreenBtn = document.getElementById('cinemaFullscreenBtn');
  const cinemaPlayIcon = document.getElementById('cinemaPlayIcon');
  const cinemaMuteIcon = document.getElementById('cinemaMuteIcon');

  if (atelierVideo) {
    cinemaPlayBtn?.addEventListener('click', () => {
      if (atelierVideo.paused) {
        atelierVideo.play();
        if (cinemaPlayIcon) cinemaPlayIcon.textContent = '⏸ Pause';
      } else {
        atelierVideo.pause();
        if (cinemaPlayIcon) cinemaPlayIcon.textContent = '▶ Play';
      }
    });

    cinemaMuteBtn?.addEventListener('click', () => {
      atelierVideo.muted = !atelierVideo.muted;
      if (cinemaMuteIcon) {
        cinemaMuteIcon.textContent = atelierVideo.muted ? '🔇 Unmute' : '🔊 Mute';
      }
    });

    cinemaFullscreenBtn?.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        if (atelierVideo.requestFullscreen) {
          atelierVideo.requestFullscreen();
        } else if (atelierVideo.webkitRequestFullscreen) {
          atelierVideo.webkitRequestFullscreen();
        }
      } else {
        document.exitFullscreen?.();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 12. PDF Menu Viewer Modal Logic
  // --------------------------------------------------------------------------
  const pdfModal = document.getElementById('pdfMenuModal');
  const pdfCloseBtn = document.getElementById('pdfModalCloseBtn');

  function openPdfModal() {
    closeAllModals();
    pdfModal?.classList.add('open');
    cartBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  pdfCloseBtn?.addEventListener('click', closeAllModals);
  document.querySelectorAll('.open-pdf-menu-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPdfModal();
    });
  });

  // --------------------------------------------------------------------------
  // 13. Catering Concierge Modal Logic
  // --------------------------------------------------------------------------
  const cateringModal = document.getElementById('cateringInquiryModal');
  const cateringCloseBtn = document.getElementById('cateringModalCloseBtn');
  const cateringForm = document.getElementById('cateringInquiryForm');

  function openCateringModal() {
    const studioSection = document.getElementById('cateringStudioSection');
    if (studioSection) {
      closeAllModals();
      studioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const guestInput = document.getElementById('catTotalGuestsInput');
      setTimeout(() => guestInput?.focus(), 300);
      return;
    }
    if (!window.location.pathname.endsWith('catering.html')) {
      window.location.href = 'catering.html#cateringStudioSection';
      return;
    }
    closeAllModals();
    cateringModal?.classList.add('open');
    cartBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  cateringCloseBtn?.addEventListener('click', closeAllModals);
  document.querySelectorAll('.open-catering-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCateringModal();
    });
  });

  cateringForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    closeAllModals();
    showToast('Thank you! Your catering inquiry has been received. Our Kew team will contact you shortly.', 6000);
  });

  // --------------------------------------------------------------------------
  // 14. Global Helper API
  // --------------------------------------------------------------------------
  window.fhApp = {
    addToCart,
    changeQty: changeCartQty,
    removeFromCart,
    openCheckoutJourney,
    closeCheckoutJourney,
    quickAdd: (productId) => {
      const p = products.find(x => x.id === productId);
      if (p) {
        addToCart({
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.image,
          size: p.sizes[0].name
        });
      }
    },
    setCollection,
    clearFilter,
    clearAllFilters,
    openQuickView,
    openPdfModal,
    openCateringModal,
    openNavDrawer,
    selectQvSize: window.selectQvSize,
    showToast,
    openConciergeModal: () => {
      openCateringModal();
    }
  };

  // --------------------------------------------------------------------------
  // 15. Product Detail Page (PDP) Dynamic Handler
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // 15. Product Detail Page (PDP) Luxury Atelier Configurator
  // --------------------------------------------------------------------------
  function initProductDetailPage() {
    if (document.body.getAttribute('data-page') !== 'product-detail') return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'bruce-chocolate-cake';
    const product = products.find(p => p.id === productId) || products[0];

    // Page title and breadcrumbs
    document.title = `${product.name} — Frank & Harri Patisserie Kew · Melbourne`;
    const breadcrumbTitle = document.getElementById('pdpBreadcrumbTitle');
    if (breadcrumbTitle) breadcrumbTitle.textContent = product.name;
    const breadcrumbCat = document.getElementById('pdpBreadcrumbCategory');
    if (breadcrumbCat) {
      breadcrumbCat.textContent = product.categoryLabel || 'Creations';
      breadcrumbCat.href = product.collections && product.collections.length ? `${product.collections[0]}.html` : 'index.html#catalogSection';
    }

    // Media
    // Media & 3 Mockups Setup
    const mainImg = document.getElementById('pdpMainImage');
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }
    const thumb1 = document.getElementById('pdpThumb1');
    if (thumb1) thumb1.src = product.image;
    const thumbImg1 = document.getElementById('thumbImg1');
    if (thumbImg1) thumbImg1.src = product.image;

    const mockupImg1 = document.getElementById('mockupImg1');
    const mockupImg2 = document.getElementById('mockupImg2');
    const mockupImg3 = document.getElementById('mockupImg3');
    if (mockupImg1) mockupImg1.src = product.image;
    if (mockupImg2) mockupImg2.src = 'assets/images/real/cake-tasting-box.png';
    if (mockupImg3) mockupImg3.src = 'assets/images/bruce-cake-3.png';

    // 3 Mockups Progress Selection State ("without selection no add to cart")
    const mockupSelections = {
      size: false,
      flavour: false,
      plaque: false
    };

    // Dietary Badge
    const dietaryBadge = document.getElementById('pdpDietaryBadge');
    if (dietaryBadge) {
      if (product.dietary && product.dietary.includes('gluten-free')) {
        dietaryBadge.style.display = 'block';
        dietaryBadge.textContent = '100% GF';
      } else {
        dietaryBadge.style.display = 'none';
      }
    }

    // Details
    const eyebrow = document.getElementById('pdpEyebrow');
    if (eyebrow) eyebrow.textContent = product.categoryLabel.toUpperCase();
    
    const titleEl = document.getElementById('pdpTitle');
    if (titleEl) titleEl.textContent = product.name;

    const descEl = document.getElementById('pdpDescription');
    if (descEl) descEl.textContent = product.description;

    const leadEl = document.getElementById('pdpLeadTime');
    if (leadEl) leadEl.textContent = `${product.leadTime} required`;

    const leadBadge = document.getElementById('pdpLeadBadge');
    if (leadBadge) leadBadge.textContent = `${product.leadTime} Notice Required`;

    // Category Nav Pills & Quick Switcher
    const catPills = document.querySelectorAll('.pdp-cat-pill');
    const productSelect = document.getElementById('pdpProductSelect');

    function populateSwitcher(items) {
      if (!productSelect) return;
      productSelect.innerHTML = items.map(p => `
        <option value="${p.id}" ${p.id === product.id ? 'selected' : ''}>
          ${p.name} ($${p.price.toFixed(2)})
        </option>
      `).join('');
    }

    populateSwitcher(products);

    if (productSelect) {
      productSelect.addEventListener('change', (e) => {
        window.location.href = `product.html?id=${encodeURIComponent(e.target.value)}`;
      });
    }

    catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.getAttribute('data-cat');
        if (cat === 'all') {
          populateSwitcher(products);
        } else {
          const filtered = products.filter(p => {
            if (cat === 'celebration') return p.categoryGroup === 'celebration' || (p.collections && p.collections.includes('birthday-cakes'));
            if (cat === 'gluten-free') return p.categoryGroup === 'gluten-free' || (p.dietary && p.dietary.includes('gluten-free'));
            if (cat === 'tarts-pastries') return p.categoryGroup === 'tarts-pastries' || (p.collections && p.collections.includes('pastries'));
            if (cat === 'catering') return p.categoryGroup === 'catering' || (p.collections && p.collections.includes('catering'));
            if (cat === 'focaccias') return p.categoryGroup === 'focaccias' || p.id.includes('focaccia');
            if (cat === 'kids') return p.categoryGroup === 'kids' || p.id.includes('cupcake') || p.id.includes('funfetti') || p.id.includes('fairy');
            return true;
          });
          populateSwitcher(filtered.length > 0 ? filtered : products);
        }
      });
    });

    // Editorial Tabs text
    const craftText = document.getElementById('pdpTabCraftText');
    if (craftText) {
      craftText.innerHTML = `
        Crafted daily in our Kew boutique atelier, <strong>${product.name}</strong> represents the pinnacle of classical French technique harmonized with modern Melbourne taste. 
        ${product.description} 
        Every component is handcrafted from scratch using cultured Lescure butter, Victorian farm dairy, and single-origin chocolate.
      `;
    }
    const flavoursText = document.getElementById('pdpTabFlavoursText');
    if (flavoursText) flavoursText.textContent = product.flavours || 'Single-origin ingredients, Madagascar vanilla, cultured Lescure butter, sea salt flakes.';

    const allergensText = document.getElementById('pdpTabAllergensText');
    if (allergensText) allergensText.textContent = product.allergens || 'Contains dairy, egg, unbleached flour. Facility handles tree nuts, soy, and sesame.';

    // Size / Portion Selection & Dynamic Price Aggregation
    let selectedSize = product.sizes ? product.sizes[0] : { name: 'Standard', serves: 'Generous', price: product.price };
    let quantity = 1;
    let fulfillmentMethod = 'pickup';
    let selectedDate = '';
    let selectedSlot = 'Morning · 8:00am – 10:30am';
    let checkedAddons = [];

    // Product Type Classification
    const isCakeCreation = product.categoryGroup === 'celebration' || product.category === 'cakes' || product.category === 'signature';
    let selectedFlavour = 'Belgian Dark Chocolate Fudge';

    function calculateTotal() {
      const addonsSum = checkedAddons.reduce((sum, item) => sum + item.price, 0);
      return (selectedSize.price * quantity) + addonsSum;
    }

    function updateCreationSummary() {
      const sumSize = document.getElementById('pdpSumSize');
      const sumFlavour = document.getElementById('pdpSumFlavour');
      const sumFlavourRow = document.getElementById('pdpSumFlavourRow');
      const sumPlaque = document.getElementById('pdpSumPlaque');
      const sumPlaqueRow = document.getElementById('pdpSumPlaqueRow');
      const sumAddons = document.getElementById('pdpSumAddons');
      const sumAddonsRow = document.getElementById('pdpSumAddonsRow');

      if (sumSize && selectedSize) {
        sumSize.textContent = `${selectedSize.name} · ${selectedSize.serves}`;
      }

      if (sumFlavourRow && sumFlavour) {
        if (isCakeCreation && selectedFlavour) {
          sumFlavourRow.style.display = 'flex';
          sumFlavour.textContent = selectedFlavour;
        } else {
          sumFlavourRow.style.display = 'none';
        }
      }

      if (sumPlaqueRow && sumPlaque) {
        if (plaqueToggle && plaqueToggle.checked) {
          sumPlaqueRow.style.display = 'flex';
          const msg = plaqueInput?.value.trim() || 'Happy Birthday!';
          sumPlaque.textContent = `"${msg}"`;
        } else {
          sumPlaqueRow.style.display = 'none';
        }
      }

      if (sumAddonsRow && sumAddons) {
        if (checkedAddons.length > 0) {
          sumAddonsRow.style.display = 'flex';
          sumAddons.textContent = checkedAddons.map(a => a.name.replace(/^[^\w\s]+\s*/, '')).join(', ');
        } else {
          sumAddonsRow.style.display = 'none';
        }
      }

      // Step indicators sync
      const jStep3 = document.getElementById('journeyStep3');
      const jStep4 = document.getElementById('journeyStep4');
      if (jStep3) {
        if (plaqueToggle && plaqueToggle.checked) jStep3.classList.add('active');
        else jStep3.classList.remove('active');
      }
      if (jStep4) {
        if (checkedAddons.length > 0) jStep4.classList.add('active');
        else jStep4.classList.remove('active');
      }
    }

    function updatePriceDisplay() {
      const priceEl = document.getElementById('pdpPrice');
      const addBtnPrice = document.getElementById('pdpAddBtnPrice');
      const stickyPrice = document.getElementById('pdpStickyPrice');
      const stickyTitle = document.getElementById('pdpStickyTitle');
      const topQty = document.getElementById('pdpTopQty');
      const modalPrice = document.getElementById('pdpModalPrice');
      const total = calculateTotal();

      if (priceEl) priceEl.textContent = `$${(total).toFixed(2)}`;
      if (addBtnPrice) addBtnPrice.textContent = `— $${total.toFixed(2)}`;
      if (stickyPrice) stickyPrice.textContent = `$${total.toFixed(2)}`;
      if (stickyTitle) stickyTitle.textContent = `${product.name} (${selectedSize.name})`;
      if (topQty) topQty.textContent = `3 Mockups`;
      if (modalPrice) modalPrice.textContent = `$${total.toFixed(2)}`;

      updateCreationSummary();
      if (typeof updateMockupProgress === 'function') {
        updateMockupProgress();
      }
    }

    function updateMockupProgress() {
      let count = 0;
      if (mockupSelections.size) count++;
      if (mockupSelections.flavour) count++;
      if (mockupSelections.plaque) count++;

      // Tab 1: Size
      const stepBoxSize = document.getElementById('stepBoxSize');
      const tabSummarySize = document.getElementById('tabSummarySize');
      const chipSize = document.getElementById('chipSize');
      const pdpSumSize = document.getElementById('pdpSumSize');
      const modalNavSize = document.getElementById('modalNavSize');
      const modalDotSize = document.getElementById('modalDotSize');

      if (mockupSelections.size && selectedSize) {
        if (stepBoxSize) stepBoxSize.classList.add('has-check');
        if (tabSummarySize) tabSummarySize.textContent = selectedSize.name;
        if (chipSize) chipSize.classList.add('has-val');
        if (pdpSumSize) pdpSumSize.textContent = `${selectedSize.name} · ${selectedSize.serves}`;
        if (modalNavSize) modalNavSize.classList.add('done');
        if (modalDotSize) modalDotSize.textContent = '✓';
      } else {
        if (stepBoxSize) stepBoxSize.classList.remove('has-check');
        if (tabSummarySize) tabSummarySize.textContent = 'Select';
        if (chipSize) chipSize.classList.remove('has-val');
        if (pdpSumSize) pdpSumSize.textContent = 'Select format';
        if (modalNavSize) modalNavSize.classList.remove('done');
        if (modalDotSize) modalDotSize.textContent = '01';
      }

      // Tab 2: Flavour
      const stepBoxFlavour = document.getElementById('stepBoxFlavour');
      const tabSummaryFlavour = document.getElementById('tabSummaryFlavour');
      const chipFlavour = document.getElementById('chipFlavour');
      const pdpSumFlavour = document.getElementById('pdpSumFlavour');
      const modalNavFlavour = document.getElementById('modalNavFlavour');
      const modalDotFlavour = document.getElementById('modalDotFlavour');

      if (mockupSelections.flavour && selectedFlavour) {
        if (stepBoxFlavour) stepBoxFlavour.classList.add('has-check');
        const shortName = selectedFlavour.split(' ')[0] + ' ' + (selectedFlavour.split(' ')[1] || '');
        if (tabSummaryFlavour) tabSummaryFlavour.textContent = shortName;
        if (chipFlavour) chipFlavour.classList.add('has-val');
        if (pdpSumFlavour) pdpSumFlavour.textContent = selectedFlavour;
        if (modalNavFlavour) modalNavFlavour.classList.add('done');
        if (modalDotFlavour) modalDotFlavour.textContent = '✓';
      } else {
        if (stepBoxFlavour) stepBoxFlavour.classList.remove('has-check');
        if (tabSummaryFlavour) tabSummaryFlavour.textContent = 'Select';
        if (chipFlavour) chipFlavour.classList.remove('has-val');
        if (pdpSumFlavour) pdpSumFlavour.textContent = 'Select flavour';
        if (modalNavFlavour) modalNavFlavour.classList.remove('done');
        if (modalDotFlavour) modalDotFlavour.textContent = '02';
      }

      // Tab 3: Plaque
      const stepBoxPlaque = document.getElementById('stepBoxPlaque');
      const tabSummaryPlaque = document.getElementById('tabSummaryPlaque');
      const chipPlaque = document.getElementById('chipPlaque');
      const pdpSumPlaque = document.getElementById('pdpSumPlaque');
      const modalNavPlaque = document.getElementById('modalNavPlaque');
      const modalDotPlaque = document.getElementById('modalDotPlaque');

      if (mockupSelections.plaque) {
        const hasPlaque = !!(plaqueToggle && plaqueToggle.checked);
        if (stepBoxPlaque) stepBoxPlaque.classList.add('has-check');
        if (tabSummaryPlaque) tabSummaryPlaque.textContent = hasPlaque ? 'Custom' : 'Classic';
        if (chipPlaque) chipPlaque.classList.add('has-val');
        if (pdpSumPlaque) pdpSumPlaque.textContent = hasPlaque ? (plaqueInput?.value.trim() || 'Happy Birthday!') : 'Classic Atelier';
        if (modalNavPlaque) modalNavPlaque.classList.add('done');
        if (modalDotPlaque) modalDotPlaque.textContent = '✓';
      } else {
        if (stepBoxPlaque) stepBoxPlaque.classList.remove('has-check');
        if (tabSummaryPlaque) tabSummaryPlaque.textContent = 'Choose';
        if (chipPlaque) chipPlaque.classList.remove('has-val');
        if (pdpSumPlaque) pdpSumPlaque.textContent = 'Choose finish';
        if (modalNavPlaque) modalNavPlaque.classList.remove('done');
        if (modalDotPlaque) modalDotPlaque.textContent = '03';
      }

      // Tab 4: Touches (Optional)
      const stepBoxTouch = document.getElementById('stepBoxTouch');
      const tabSummaryTouch = document.getElementById('tabSummaryTouch');
      const chipAddons = document.getElementById('chipAddons');
      const pdpSumAddons = document.getElementById('pdpSumAddons');
      const modalNavTouch = document.getElementById('modalNavTouch');
      const modalDotTouch = document.getElementById('modalDotTouch');

      if (checkedAddons.length > 0) {
        if (stepBoxTouch) stepBoxTouch.classList.add('has-check');
        if (tabSummaryTouch) tabSummaryTouch.textContent = `${checkedAddons.length} added`;
        if (chipAddons) chipAddons.style.display = 'inline-flex';
        if (pdpSumAddons) pdpSumAddons.textContent = checkedAddons.map(a => a.name.replace(/^[^\w\s]+\s*/, '').split('(')[0].trim()).join(', ');
        if (modalNavTouch) modalNavTouch.classList.add('done');
        if (modalDotTouch) modalDotTouch.textContent = '✓';
      } else {
        if (stepBoxTouch) stepBoxTouch.classList.remove('has-check');
        if (tabSummaryTouch) tabSummaryTouch.textContent = 'Extras';
        if (chipAddons) chipAddons.style.display = 'none';
        if (modalNavTouch) modalNavTouch.classList.remove('done');
        if (modalDotTouch) modalDotTouch.textContent = '04';
      }

      // Tab 5: Notes
      const stepBoxNotes = document.getElementById('stepBoxNotes');
      const notesInput = document.getElementById('pdpOrderNotes');
      const modalNavNotes = document.getElementById('modalNavNotes');
      const modalDotNotes = document.getElementById('modalDotNotes');

      if (notesInput && notesInput.value.trim().length > 0) {
        if (stepBoxNotes) stepBoxNotes.classList.add('has-check');
        if (modalNavNotes) modalNavNotes.classList.add('done');
        if (modalDotNotes) modalDotNotes.textContent = '✓';
      } else {
        if (stepBoxNotes) stepBoxNotes.classList.remove('has-check');
        if (modalNavNotes) modalNavNotes.classList.remove('done');
        if (modalDotNotes) modalDotNotes.textContent = '05';
      }

      // Progress Fraction Badge
      const fraction = document.getElementById('pdpProgressFraction');
      if (fraction) {
        fraction.textContent = `${count} / 3 Required Selected`;
        if (count === 3) fraction.classList.add('completed');
        else fraction.classList.remove('completed');
      }

      // Add to Bag Button State
      const addBtn = document.getElementById('pdpAddToCartBtn');
      const addBtnText = document.getElementById('pdpAddBtnText');

      if (count === 3) {
        if (addBtn) {
          addBtn.classList.remove('disabled');
          addBtn.setAttribute('aria-disabled', 'false');
        }
        if (addBtnText) addBtnText.textContent = '✓ Add to Shopping Bag';
      } else {
        if (addBtn) {
          addBtn.classList.add('disabled');
          addBtn.setAttribute('aria-disabled', 'true');
        }
        if (addBtnText) addBtnText.textContent = `Complete Selections to Add to Bag (${count}/3)`;
      }
    }

    const sizesGrid = document.getElementById('pdpSizesGrid');
    if (sizesGrid) {
      if (product.sizes && product.sizes.length > 0) {
        sizesGrid.innerHTML = product.sizes.map((s, idx) => `
          <button class="pdp-size-btn" type="button" data-size-idx="${idx}">
            <span class="pdp-size-name">${s.name}</span>
            <span class="pdp-size-serves">${s.serves}</span>
            <span class="pdp-size-price">$${s.price.toFixed(2)}</span>
          </button>
        `).join('');

        sizesGrid.querySelectorAll('.pdp-size-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            sizesGrid.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const idx = parseInt(btn.getAttribute('data-size-idx'), 10);
            selectedSize = product.sizes[idx];
            mockupSelections.size = true;
            updatePriceDisplay();
            updateMockupProgress();
          });
        });
      } else {
        selectedSize = { name: 'Standard Format', serves: 'Daily Artisan Batch', price: product.price };
        sizesGrid.innerHTML = `
          <button class="pdp-size-btn" type="button">
            <span class="pdp-size-name">Standard Atelier Format</span>
            <span class="pdp-size-serves">Freshly Prepared Daily</span>
            <span class="pdp-size-price">$${product.price.toFixed(2)}</span>
          </button>
        `;
        sizesGrid.querySelector('.pdp-size-btn')?.addEventListener('click', (e) => {
          e.currentTarget.classList.add('active');
          mockupSelections.size = true;
          updatePriceDisplay();
          updateMockupProgress();
        });
      }
    }

    // Step 2: Sponge & Flavour Harmony Selection
    const flavourPills = document.querySelectorAll('#pdpFlavourPills .pdp-flavour-pill-card, #pdpFlavourPills .pdp-min-pill, #toolPanelFlavour .pdp-min-pill, .pdp-options-minimal-row .pdp-min-pill');
    flavourPills.forEach(pill => {
      pill.addEventListener('click', () => {
        flavourPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedFlavour = pill.getAttribute('data-flavour') || pill.textContent.trim();
        mockupSelections.flavour = true;
        updateCreationSummary();
        updateMockupProgress();
      });
    });

    // Step 3: Complimentary Chocolate Inscription Plaque (Sleek Collapsible Toggle)
    const plaqueSection = document.getElementById('pdpPlaqueSection');
    const plaqueToggle = document.getElementById('pdpPlaqueToggle');
    const plaqueDrawer = document.getElementById('pdpPlaqueDrawer');
    const plaqueInput = document.getElementById('pdpPlaqueInput');
    const plaqueCount = document.getElementById('pdpPlaqueCount');
    const plaqueLiveText = document.getElementById('pdpPlaqueLiveText');
    const plaqueLiveOverlay = document.getElementById('pdpPlaqueLiveOverlay');

    if (plaqueSection) {
      plaqueSection.style.display = (isCakeCreation || (product.collections && product.collections.includes('birthday-cakes'))) ? 'block' : 'none';
    }

    function updatePlaqueLive(val) {
      const clean = val.trim();
      if (plaqueLiveText) {
        plaqueLiveText.textContent = clean ? clean : 'Happy Birthday!';
      }
      if (plaqueCount && plaqueInput) {
        plaqueCount.textContent = `${plaqueInput.value.length}/32`;
      }
      updateCreationSummary();
    }

    if (plaqueToggle && plaqueDrawer) {
      plaqueToggle.addEventListener('change', () => {
        if (plaqueToggle.checked) {
          plaqueDrawer.classList.add('open');
          if (plaqueLiveOverlay) plaqueLiveOverlay.style.display = 'block';
          if (plaqueInput) {
            if (!plaqueInput.value) {
              plaqueInput.value = 'Happy Birthday!';
            }
            updatePlaqueLive(plaqueInput.value);
            plaqueInput.focus();
          }
          mockupSelections.plaque = true;
          document.getElementById('pdpClassicFinishBtn')?.classList.remove('active');
        } else {
          plaqueDrawer.classList.remove('open');
          if (plaqueLiveOverlay) plaqueLiveOverlay.style.display = 'none';
        }
        updateCreationSummary();
        updateMockupProgress();
      });
    }

    if (plaqueInput) {
      plaqueInput.addEventListener('input', () => {
        updatePlaqueLive(plaqueInput.value);
        mockupSelections.plaque = true;
        document.getElementById('pdpClassicFinishBtn')?.classList.remove('active');
        updateMockupProgress();
      });
    }

    window.fhApp = window.fhApp || {};
    window.fhApp.setPlaquePreset = function(presetText) {
      if (plaqueInput) {
        plaqueInput.value = presetText;
        updatePlaqueLive(presetText);
      }
      if (plaqueToggle && !plaqueToggle.checked) {
        plaqueToggle.checked = true;
        plaqueDrawer?.classList.add('open');
        if (plaqueLiveOverlay) plaqueLiveOverlay.style.display = 'block';
      }
      mockupSelections.plaque = true;
      document.getElementById('pdpClassicFinishBtn')?.classList.remove('active');
      updateCreationSummary();
      updateMockupProgress();
    };

    window.confirmClassicFinish = function() {
      if (plaqueToggle) plaqueToggle.checked = false;
      if (plaqueDrawer) plaqueDrawer.classList.remove('open');
      if (plaqueLiveOverlay) plaqueLiveOverlay.style.display = 'none';
      mockupSelections.plaque = true;
      isClassicFinish = true;
      const classicBtn = document.getElementById('pdpClassicFinishBtn');
      if (classicBtn) classicBtn.classList.add('active');
      showStudioToast('Mockup 3 Confirmed: Classic Atelier Finish');
      updateMockupProgress();
    };

    window.closeShelfAndCheckReady = function() {
      if (mockupSelections.size && mockupSelections.flavour && mockupSelections.plaque) {
        studioShelf?.classList.remove('open');
        showStudioToast('✓ All 3 Mockups Selected! Ready to Add to Bag');
      } else {
        if (!mockupSelections.size) window.selectMockup(1);
        else if (!mockupSelections.flavour) window.selectMockup(2);
        else if (!mockupSelections.plaque) window.selectMockup(3);
      }
    };

    // Step 4: Celebration Finishing Touches (Quick-Add 1-Click Pills)
    const quickAddonBtns = document.querySelectorAll('.pdp-quick-addon-btn');
    quickAddonBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        checkedAddons = Array.from(quickAddonBtns)
          .filter(b => b.classList.contains('active'))
          .map(b => ({
            name: b.getAttribute('data-name'),
            price: parseFloat(b.getAttribute('data-price')) || 0
          }));
        updatePriceDisplay();
      });
    });

    // Quantity Selector
    const qtyVal = document.getElementById('pdpQtyVal');
    document.getElementById('pdpQtyDec')?.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        if (qtyVal) qtyVal.textContent = quantity;
        updatePriceDisplay();
      }
    });

    document.getElementById('pdpQtyInc')?.addEventListener('click', () => {
      if (quantity < 10) {
        quantity++;
        if (qtyVal) qtyVal.textContent = quantity;
        updatePriceDisplay();
      }
    });

    // Portion & Sizing Guide Modal Handlers
    const portionModal = document.getElementById('portionGuideModal');
    const openPortionBtn = document.getElementById('openPortionGuideBtn');
    const closePortionBtn = document.getElementById('closePortionGuideBtn');

    if (openPortionBtn && portionModal) {
      openPortionBtn.addEventListener('click', () => {
        portionModal.classList.add('open');
      });
    }

    if (closePortionBtn && portionModal) {
      closePortionBtn.addEventListener('click', () => {
        portionModal.classList.remove('open');
      });
    }

    if (portionModal) {
      portionModal.addEventListener('click', (e) => {
        if (e.target === portionModal) {
          portionModal.classList.remove('open');
        }
      });
    }

    // Sticky Mobile Add to Bag Bar Scroll Behavior
    const stickyBar = document.getElementById('pdpStickyBar');
    const stickyBtn = document.getElementById('pdpStickyBtn');

    function checkStickyVisibility() {
      if (!stickyBar) return;
      if (window.innerWidth <= 900) {
        const titleRect = titleEl ? titleEl.getBoundingClientRect() : { bottom: 0 };
        if (titleRect.bottom < 0) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      } else {
        stickyBar.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', checkStickyVisibility, { passive: true });
    window.addEventListener('resize', checkStickyVisibility);

    // --------------------------------------------------------------------------
    // Sketch Wireframe Handlers (Matching user's notebook sketch)
    // --------------------------------------------------------------------------
    
    // 1. Clickable Thumbnails Switcher ([ ] [ ] [ ])
    window.selectSketchThumb = function(idx, src) {
      const mainImg = document.getElementById('pdpMainImage');
      if (mainImg) {
        mainImg.style.opacity = '0.35';
        mainImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImg.src = src;
          mainImg.style.opacity = '1';
          mainImg.style.transform = 'scale(1)';
        }, 150);
      }
      document.querySelectorAll('.pdp-sketch-thumb, .pdp2-mockup-btn').forEach((b, i) => {
        if (i + 1 === idx) b.classList.add('active');
        else b.classList.remove('active');
      });
    };

    // --------------------------------------------------------------------------
    // Popup Modal Configurator Logic (Selection comes as popup)
    // --------------------------------------------------------------------------
    const selectionModal = document.getElementById('pdpSelectionModal');

    window.openSelectionPopup = function(tabKey) {
      if (selectionModal) {
        selectionModal.classList.add('open');
        selectionModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
      window.switchPopupTab(tabKey || 'size');
    };

    window.closeSelectionPopup = function() {
      if (selectionModal) {
        selectionModal.classList.remove('open');
        selectionModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      updateCreationSummary();
      updateMockupProgress();
    };

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && selectionModal && selectionModal.classList.contains('open')) {
        window.closeSelectionPopup();
      }
    });

    const tabMeta = {
      'size': { kicker: 'STEP 1 OF 3 REQUIRED', title: 'Select Format & Servings' },
      'flavour': { kicker: 'STEP 2 OF 3 REQUIRED', title: 'Select Flavour Recipe & Ganache' },
      'plaque': { kicker: 'STEP 3 OF 3 REQUIRED', title: 'Personalised Inscription & Plaque' },
      'touch': { kicker: 'OPTIONAL CELEBRATION TOUCHES', title: 'Candles, Cake Knife & Macarons' },
      'notes': { kicker: 'ATELIER CHEF NOTES', title: 'Dietary & Delivery Instructions' }
    };

    window.switchPopupTab = function(tabKey) {
      const targetKey = tabKey || 'size';
      const capKey = targetKey.charAt(0).toUpperCase() + targetKey.slice(1);

      // 1. Update Main Page Tabs in Right Column
      document.querySelectorAll('.pdp-sketch-tab').forEach(tab => {
        const step = tab.getAttribute('data-step');
        if (step === targetKey) {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
        } else {
          tab.classList.remove('active');
          tab.setAttribute('aria-selected', 'false');
        }
      });

      // 2. Update Popup Modal Step Navigation Ribbon
      document.querySelectorAll('.pdp-modal-nav-tab').forEach(tab => {
        if (tab.id === `modalNav${capKey}`) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      // 3. Show Corresponding Popup Panel
      document.querySelectorAll('.pdp-popup-body').forEach(panel => {
        if (panel.id === `popupPanel${capKey}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      // 4. Update Modal Header Kicker and Title
      const meta = tabMeta[targetKey] || tabMeta['size'];
      const popupKicker = document.getElementById('popupKicker');
      const popupTitle = document.getElementById('popupTitle');
      if (popupKicker) popupKicker.textContent = meta.kicker;
      if (popupTitle) popupTitle.textContent = meta.title;

      // Scroll modal body to top smoothly
      const modalScroll = document.querySelector('.pdp-modal-body-scroll');
      if (modalScroll) modalScroll.scrollTop = 0;
    };

    // Alias for backwards compatibility
    window.selectSketchTab = window.openSelectionPopup;

    // Notes textarea input sync with checkmark
    const notesInput = document.getElementById('pdpOrderNotes');
    if (notesInput) {
      notesInput.addEventListener('input', () => {
        updateMockupProgress();
      });
    }

    // Floating Studio Toast
    function showStudioToast(msg) {
      const toast = document.getElementById('pdpStudioToast');
      const toastMsg = document.getElementById('pdpToastMsg');
      if (toast && toastMsg) {
        toastMsg.textContent = msg;
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), 2800);
      }
    }

    // 3. Main Add to Bag Action (CRITICAL REQUIREMENT: Without selection no add to cart)
    function handleAddToCart() {
      // Guard: Check if required selections (size, flavour, plaque) are completed
      if (!mockupSelections.size || !mockupSelections.flavour || !mockupSelections.plaque) {
        let missingTab = 'size';
        let missingName = 'Size & Format';
        let missingBtnId = 'stepBoxSize';

        if (!mockupSelections.size) {
          missingTab = 'size';
          missingName = 'Format & Size';
          missingBtnId = 'stepBoxSize';
        } else if (!mockupSelections.flavour) {
          missingTab = 'flavour';
          missingName = 'Flavour Recipe';
          missingBtnId = 'stepBoxFlavour';
        } else if (!mockupSelections.plaque) {
          missingTab = 'plaque';
          missingName = 'Inscription or Classic Finish';
          missingBtnId = 'stepBoxPlaque';
        }

        // Open popup modal immediately to the missing step
        window.openSelectionPopup(missingTab);

        // Visual shake feedback on the button and missing tab
        const addBtn = document.getElementById('pdpAddToCartBtn');
        const missingTabBtn = document.getElementById(missingBtnId);
        const popupPanel = document.getElementById('pdpPopupPanel');

        addBtn?.classList.add('shake-card');
        missingTabBtn?.classList.add('shake-card');
        popupPanel?.classList.add('shake-card');

        setTimeout(() => {
          addBtn?.classList.remove('shake-card');
          missingTabBtn?.classList.remove('shake-card');
          popupPanel?.classList.remove('shake-card');
        }, 500);

        showStudioToast(`⚠️ Please complete ${missingName} before adding to bag!`);
        return; // Guard active! Strictly block addition
      }

      // If all selections completed, proceed to add to shopping bag!
      const hasPlaque = !!(plaqueToggle && plaqueToggle.checked);
      const plaqueText = hasPlaque ? (plaqueInput?.value.trim() || 'Happy Birthday!') : 'Classic Atelier Finish';
      const totalAmount = calculateTotal();
      const orderNotes = notesInput ? notesInput.value.trim() : '';

      addToCart({
        id: product.id,
        name: `${product.name} (${selectedSize.name})`,
        price: totalAmount / quantity,
        image: product.image,
        size: `${selectedSize.name} · ${selectedSize.serves}`,
        flavour: isCakeCreation ? selectedFlavour : '',
        hasPlaque: hasPlaque,
        plaqueText: plaqueText,
        notes: orderNotes,
        fulfillment: 'pickup',
        date: '',
        timeSlot: '',
        addons: checkedAddons.map(a => a.name),
        qty: quantity
      });

      showStudioToast(`✓ ${product.name} added to Shopping Bag!`);

      // Visual micro-interaction feedback on Add to Bag button
      const addBtn = document.getElementById('pdpAddToCartBtn');
      const addBtnText = document.getElementById('pdpAddBtnText');
      if (addBtn && addBtnText) {
        const origText = addBtnText.textContent;
        addBtn.classList.add('added');
        addBtnText.textContent = '✓ Added to Shopping Bag!';
        setTimeout(() => {
          addBtn.classList.remove('added');
          addBtnText.textContent = origText;
        }, 1500);
      }

      // Bag counter button bounce
      const bagBtn = document.getElementById('cartOpenBtn');
      if (bagBtn) {
        bagBtn.style.transform = 'scale(1.15)';
        setTimeout(() => bagBtn.style.transform = '', 250);
      }
    }

    document.getElementById('pdpAddToCartBtn')?.addEventListener('click', handleAddToCart);

    // Initial price, plaque, and 3-mockup selection display
    updatePriceDisplay();
    updatePlaqueLive('');
    updateMockupProgress();

    // Curated Pairings ("You May Also Desire")
    const pairingsGrid = document.getElementById('pdpPairingsGrid');
    if (pairingsGrid) {
      const otherProducts = products.filter(p => p.id !== product.id).slice(0, 4);
      pairingsGrid.innerHTML = otherProducts.map(p => `
        <div class="product-card" data-category="${p.category}">
          <div class="product-card-media" onclick="window.location.href='product.html?id=${p.id}'" style="cursor: pointer;">
            ${p.dietary && p.dietary.includes('gluten-free') ? '<span class="product-dietary-badge">100% GF</span>' : ''}
            <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
            <div class="product-card-overlay">
              <button class="product-quick-btn" onclick="event.stopPropagation(); window.fhApp.quickAdd('${p.id}')" title="Quick Add to Bag">
                <span>+ Quick Add</span>
              </button>
            </div>
          </div>
          <div class="product-card-info">
            <div class="product-card-cat">${p.categoryLabel}</div>
            <h3 class="product-card-title"><a href="product.html?id=${p.id}" style="color: inherit; text-decoration: none;">${p.name}</a></h3>
            <div class="product-card-meta">
              <span class="product-card-price">$${p.price.toFixed(2)}</span>
              <span class="product-card-dot">·</span>
              <span class="product-card-lead">${p.leadTime}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // --------------------------------------------------------------------------
  // 16. Sales Department Quote Request Logic
  // --------------------------------------------------------------------------
  function initSalesDepartmentPage() {
    const quoteForm = document.getElementById('salesQuoteForm');
    if (!quoteForm) return;

    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('sqFirstName')?.value || '';
      showToast(`Thank you ${firstName}! Your quote request has been received by our Sales Department. Our Kew concierge will respond within 24 business hours.`, 7000);
      quoteForm.reset();
      document.getElementById('sqFirstName')?.focus();
    });
  }

  // --------------------------------------------------------------------------
  // 17. 1-Minute Single-Page Catering & Guest Allocator Studio
  // (Adapted directly from the restaurant design workflow reference)
  // --------------------------------------------------------------------------
  function initCateringWorkflow() {
    const studioSection = document.getElementById('cateringStudioSection');
    if (!studioSection) return;

    // Comprehensive Frank & Harri Catering Menu Dataset (Exact match to 13-Page PDF)
    const cateringDishes = [
      // ======================================================================
      // 1. BOXES — Ready-to-Serve Boxes of 20 & Grazing (Page 9)
      // ======================================================================
      {
        id: 'box-mini-sausage-rolls-20',
        name: 'Mini Sausage Rolls Box (20 pk)',
        category: 'boxes',
        categoryLabel: 'Ready-to-Serve Box (20 pk)',
        dietary: [],
        serves: 15,
        price: 70.00,
        unitName: 'Box of 20',
        image: 'assets/images/real/mini-sausage-rolls.jpg',
        description: 'Warm flaky all-butter puff pastry rolls with seasoned pork & fennel mince and toasted sesame. Served with house tomato relish.'
      },
      {
        id: 'box-mini-pies-20',
        name: 'Mini Beef Pie Box (20 pk)',
        category: 'boxes',
        categoryLabel: 'Ready-to-Serve Box (20 pk)',
        dietary: [],
        serves: 15,
        price: 80.00,
        unitName: 'Box of 20',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Slow-braised Victorian beef mince in rich savory gravy enveloped in golden shortcrust and puff pastry lid. Served with tomato relish.'
      },
      {
        id: 'box-chicken-nuggets-20',
        name: 'Housemade Chicken Nuggets Box (20 pk · GF)',
        category: 'boxes',
        categoryLabel: 'Handcrafted Nuggets (20 pk)',
        dietary: ['gluten-free'],
        serves: 12,
        price: 80.00,
        unitName: 'Box of 20',
        image: 'assets/images/collection-kids.jpg',
        description: 'Tender free-range chicken breast bites coated in crunchy gluten-free seasoned crumb. Served with artisan tomato sauce.'
      },
      {
        id: 'box-ribbon-sandwiches-20',
        name: 'Poached Chicken Ribbon Sandwiches (20 pk · DF)',
        category: 'boxes',
        categoryLabel: 'Gourmet Ribbons (20 pk)',
        dietary: ['dairy-free'],
        serves: 12,
        price: 99.00,
        unitName: 'Box of 20',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crustless soft white ribbon sandwiches layered with poached chicken breast, honey mustard mayo, toasted almonds, and mixed greens.'
      },
      {
        id: 'box-mini-quiches-20',
        name: 'Mini Quiche Box — Bacon, Cheddar & Chives (20 pk)',
        category: 'boxes',
        categoryLabel: 'Warm Savoury Box (20 pk)',
        dietary: [],
        serves: 15,
        price: 120.00,
        unitName: 'Box of 20',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Bite-sized butter shortcrust tartlets with crispy streaky bacon, vintage cheddar, aged parmesan, and snipped garden chives.'
      },
      {
        id: 'box-brownie-squares-20',
        name: 'Callebaut Chocolate Brownie Squares (20 pk · V)',
        category: 'boxes',
        categoryLabel: 'Fudge Brownie Box (20 pk)',
        dietary: ['vegetarian'],
        serves: 18,
        price: 85.00,
        unitName: 'Box of 20',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Rich 6cm fudge brownie squares made with Callebaut Belgian chocolate, milk chocolate ganache drizzle, and sea salt flakes.'
      },
      {
        id: 'charcuterie-grazing-small',
        name: 'Charcuterie Grazing Box (Small · Serves 10)',
        category: 'boxes',
        categoryLabel: 'Artisan Grazing Box',
        dietary: [],
        serves: 10,
        price: 175.00,
        unitName: 'Small Box (Serves 10)',
        image: 'assets/images/hero-catering.png',
        description: 'Prosciutto di San Daniele, mild salami, vintage cheddar, double brie, house focaccia crisps, honeycomb, muscatels, and fresh berries.'
      },
      {
        id: 'charcuterie-grazing-large',
        name: 'Charcuterie Grazing Box (Large · Serves 15–20)',
        category: 'boxes',
        categoryLabel: 'Grand Banquet Grazing',
        dietary: [],
        serves: 18,
        price: 350.00,
        unitName: 'Large Box (Serves 15–20)',
        image: 'assets/images/hero-catering.png',
        description: 'Grand corporate banquet display: premium charcuterie, farmhouse cheeses, house dips, olives, artisan crisps, and seasonal Victorian fruit.'
      },

      // ======================================================================
      // 2. PATISSERIE — Housemade (min order 12 per item · Page 1)
      // ======================================================================
      {
        id: 'pat-mini-pastries-12',
        name: 'Mini Assorted French Pastries (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 74.40,
        unitName: 'Dozen (12 pk · $6.20 ea)',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Lescure butter viennoiserie: pain au chocolat, almond croissant, traditional butter croissant, and seasonal fruit danish.'
      },
      {
        id: 'pat-scones-jam-cream-12',
        name: 'Housemade Scones, Jam & Cream (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 98.40,
        unitName: 'Dozen (12 pk · $8.20 ea)',
        image: 'assets/images/real/mini-croissants-box.png',
        description: 'Golden fluffy buttermilk scones served with house-simmered raspberry jam and thick Victorian double cream.'
      },
      {
        id: 'pat-passionfruit-melting-moment-12',
        name: 'Passionfruit Melting Moments (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 58.80,
        unitName: 'Dozen (12 pk · $4.90 ea)',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Traditional melt-in-the-mouth butter shortbread sandwiches filled with tangy house-whipped passionfruit curd buttercream.'
      },
      {
        id: 'pat-assorted-cakes-12',
        name: 'Assorted Housemade Cake Slices (12 pk · V/GFO)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian', 'gluten-free'],
        serves: 12,
        price: 94.80,
        unitName: 'Dozen (12 pk · $7.90 ea)',
        image: 'assets/images/real/flourless-orange-cake.png',
        description: 'Generous slices of flourless orange almond cake, spiced carrot cake with cream cheese frosting, and coconut berry cake.'
      },
      {
        id: 'pat-cupcakes-12',
        name: 'Assorted Handcrafted Cupcakes (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 94.80,
        unitName: 'Dozen (12 pk · $7.90 ea)',
        image: 'assets/images/real/mini-cupcakes.jpg',
        description: 'Fluffy sponge cupcakes piped with pastel Swiss meringue buttercream and artisan cake garnishes.'
      },
      {
        id: 'pat-cinnamon-scrolls-12',
        name: 'Glazed Cinnamon Scrolls (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 104.40,
        unitName: 'Dozen (12 pk · $8.70 ea)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Buttery brioche swirled with fragrant Ceylon cinnamon sugar and drizzled with vanilla cream cheese glaze.'
      },
      {
        id: 'pat-cookies-choc-chip-12',
        name: 'Salted Chocolate Chip Cookies (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 82.80,
        unitName: 'Dozen (12 pk · $6.90 ea)',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Crispy edges and chewy centres packed with Callebaut 54% dark chocolate chunks, finished with Maldon sea salt.'
      },
      {
        id: 'pat-cookies-choc-pecan-gf-12',
        name: 'Chocolate Pecan Cookies (12 pk · VG/GF)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegan', 'gluten-free', 'dairy-free'],
        serves: 12,
        price: 86.40,
        unitName: 'Dozen (12 pk · $7.20 ea)',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Rich dark cocoa and roasted pecan cookies. 100% naturally gluten-free and vegan friendly.'
      },
      {
        id: 'pat-doughnuts-creme-pat-12',
        name: 'Brioche Doughnuts — Crème Pâtissière (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 82.80,
        unitName: 'Dozen (12 pk · $6.90 ea)',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Sugar-rolled brioche spheres generously filled with vanilla bean crème pâtissière and house raspberry jam.'
      },
      {
        id: 'pat-banana-bread-12',
        name: 'Banana Bread w. Cream Cheese Icing (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 117.60,
        unitName: 'Dozen (12 pk · $9.80 ea)',
        image: 'assets/images/real/flourless-orange-cake.png',
        description: 'Spiced roasted banana loaf slices topped with cream cheese icing, fresh berries, and crispy banana chips.'
      },
      {
        id: 'pat-cheesymite-scroll-12',
        name: 'Cheesymite Brioche Scrolls (12 pk · V)',
        category: 'patisserie',
        categoryLabel: 'Housemade Patisserie (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 142.80,
        unitName: 'Dozen (12 pk · $11.90 ea)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Warm buttery brioche scrolls layered with savoury Vegemite and melted sharp Victorian vintage cheddar.'
      },

      // ======================================================================
      // 3. BRUNCH & SLIDERS — (min order 12 per item · Page 2)
      // ======================================================================
      {
        id: 'brunch-avo-toast-12',
        name: 'Avo on Sourdough Toast (12 pk · V/GFO)',
        category: 'brunch',
        categoryLabel: 'Brunch Canapé (12 pk)',
        dietary: ['vegetarian', 'gluten-free'],
        serves: 12,
        price: 130.80,
        unitName: 'Dozen (12 pk · $10.90 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Smashed Hass avocado, herbaceous salsa verde, slow-roasted cherry tomatoes, and crumbled feta on sourdough.'
      },
      {
        id: 'brunch-salmon-tartine-12',
        name: 'Smoked Salmon Tartine (12 pk · GFO)',
        category: 'brunch',
        categoryLabel: 'Brunch Canapé (12 pk)',
        dietary: ['gluten-free'],
        serves: 12,
        price: 154.80,
        unitName: 'Dozen (12 pk · $12.90 ea)',
        image: 'assets/images/hero-catering.png',
        description: 'Tasmanian smoked salmon ribbons, crème fraîche, baby capers, fresh lemon zest, and wild rocket on sourdough.'
      },
      {
        id: 'brunch-pea-halloumi-fritter-12',
        name: 'Pea & Halloumi Fritters (12 pk · V/GFO)',
        category: 'brunch',
        categoryLabel: 'Brunch Canapé (12 pk)',
        dietary: ['vegetarian', 'gluten-free'],
        serves: 12,
        price: 82.80,
        unitName: 'Dozen (12 pk · $6.90 ea)',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Golden pan-crisped sweet pea & salty halloumi fritters served with whipped ricotta, slow-roasted tomatoes, and micro herbs.'
      },
      {
        id: 'brunch-slider-egg-bacon-12',
        name: 'Brioche Sliders — Fried Egg, Bacon & Cheddar (12 pk)',
        category: 'brunch',
        categoryLabel: 'Brunch Slider (12 pk)',
        dietary: [],
        serves: 12,
        price: 110.40,
        unitName: 'Dozen (12 pk · $9.20 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Milk brioche slider buns with free-range fried egg, crispy bacon, melted cheddar, and house tomato relish.'
      },
      {
        id: 'brunch-slider-halloumi-12',
        name: 'Brioche Sliders — Halloumi, Avocado & Cos (12 pk · V)',
        category: 'brunch',
        categoryLabel: 'Brunch Slider (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 110.40,
        unitName: 'Dozen (12 pk · $9.20 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Grilled halloumi, sliced Hass avocado, ripe vine tomato, crisp cos lettuce, and house relish on brioche.'
      },
      {
        id: 'brunch-croissants-ham-cheese-12',
        name: 'Mini Croissants — Leg Ham & Cheddar (12 pk)',
        category: 'brunch',
        categoryLabel: 'House Croissants (12 pk)',
        dietary: [],
        serves: 12,
        price: 114.00,
        unitName: 'Dozen (12 pk · $9.50 ea)',
        image: 'assets/images/real/mini-croissants-box.png',
        description: 'Mini housemade butter croissants toasted with free-range leg ham, cheddar, and honey mustard mayonnaise.'
      },
      {
        id: 'brunch-croissants-mushroom-goat-12',
        name: 'Mini Croissants — Mushroom & Goat Cheese (12 pk · V)',
        category: 'brunch',
        categoryLabel: 'House Croissants (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 114.00,
        unitName: 'Dozen (12 pk · $9.50 ea)',
        image: 'assets/images/real/mini-croissants-box.png',
        description: 'Mini butter croissants with garlic-sautéed forest mushrooms, creamy goat cheese, and fresh salsa verde.'
      },
      {
        id: 'brunch-bagel-salmon-12',
        name: 'Mini Bagels — Smoked Salmon & Dill (12 pk)',
        category: 'brunch',
        categoryLabel: 'Mini Bagels (12 pk)',
        dietary: [],
        serves: 12,
        price: 142.80,
        unitName: 'Dozen (12 pk · $11.90 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Petite seeded bagels filled with cured smoked salmon, herbed crème fraîche, capers, and fresh baby dill.'
      },
      {
        id: 'brunch-bagel-egg-salad-12',
        name: 'Mini Bagels — Egg Salad & Avocado (12 pk · V)',
        category: 'brunch',
        categoryLabel: 'Mini Bagels (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 126.00,
        unitName: 'Dozen (12 pk · $10.50 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Mini seeded bagels with free-range boiled egg salad, Dijon chive mayonnaise, and ripe sliced avocado.'
      },
      {
        id: 'brunch-fruit-platter-med',
        name: 'Seasonal Fresh Fruit Platter (Medium · GF/VG)',
        category: 'brunch',
        categoryLabel: 'Fruit Grazing Platter',
        dietary: ['gluten-free', 'vegan', 'dairy-free'],
        serves: 12,
        price: 115.00,
        unitName: 'Medium Platter (Serves 10–15)',
        image: 'assets/images/collection-salads.png',
        description: 'Vibrant freshly cut seasonal Victorian melons, strawberries, blueberries, grapes, kiwi, and citrus.'
      },
      {
        id: 'brunch-fruit-cups-12',
        name: 'Individual Seasonal Fruit Cups (12 pk · GF/VG)',
        category: 'brunch',
        categoryLabel: 'Individual Fruit Cups (12 pk)',
        dietary: ['gluten-free', 'vegan', 'dairy-free'],
        serves: 12,
        price: 106.80,
        unitName: 'Pack of 12 ($8.90 ea)',
        image: 'assets/images/collection-salads.png',
        description: 'Individual eco-cups packed with freshly diced Victorian melons, seasonal berries, grapes, and garden mint.'
      },

      // ======================================================================
      // 4. SANDWICHES, WRAPS & BAGUETTES (Page 3)
      // ======================================================================
      {
        id: 'sand-artisan-triangles-rounds',
        name: 'Artisan Triangle Sandwiches Platter (24 Triangles)',
        category: 'sandwiches',
        categoryLabel: 'Finger Sandwiches (6 Rounds)',
        dietary: ['dairy-free'],
        serves: 12,
        price: 83.40,
        unitName: 'Platter of 24 ($13.90/round)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Baker loaf sandwiches cut into 24 triangles: Poached chicken honey mustard mayo; Leg ham & swiss; and Salami roasted peppers & pesto.'
      },
      {
        id: 'sand-ribbon-gourmet-rounds',
        name: 'Gourmet Ribbon Sandwiches Platter (18 Ribbons)',
        category: 'sandwiches',
        categoryLabel: 'Crustless Ribbons (6 Rounds)',
        dietary: [],
        serves: 10,
        price: 83.40,
        unitName: 'Platter of 18 ($13.90/round)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crustless soft ribbons: Smoked salmon & crème fraîche; Egg salad & chives (V); Greens avocado goat cheese & cucumber (V).'
      },
      {
        id: 'sand-baguettes-ciabatta-10',
        name: 'Mini Baguettes & Crusty Ciabatta (10 pk)',
        category: 'sandwiches',
        categoryLabel: 'Artisan Rolls (10 pk)',
        dietary: [],
        serves: 10,
        price: 66.00,
        unitName: 'Platter of 10 ($6.60 ea)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Crusty mini French baguettes and ciabatta rolls filled with prosciutto, tomato mozzarella, and poached chicken salad.'
      },
      {
        id: 'sand-wraps-platter-8',
        name: 'Gourmet Soft Wraps Platter (8 Halves)',
        category: 'sandwiches',
        categoryLabel: 'Rolled Wraps (4 Wraps)',
        dietary: [],
        serves: 8,
        price: 55.60,
        unitName: 'Platter of 8 Halves ($13.90/wrap)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Fresh rolled wraps halved for grazing: Tuna sriracha mayo & pickled onion; Roast pumpkin hummus & haloumi (V); Poached chicken.'
      },
      {
        id: 'sand-gf-ribbons-8',
        name: 'Gluten-Free Ribbon Sandwiches Platter (8 Ribbons · GF)',
        category: 'sandwiches',
        categoryLabel: 'Gluten-Free Sandwiches',
        dietary: ['gluten-free'],
        serves: 8,
        price: 59.60,
        unitName: 'Platter of 8 GF Ribbons',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: '100% gluten-free bread ribbons with poached chicken & greens, egg salad with chives, and roast pumpkin with hummus.'
      },

      // ======================================================================
      // 5. HOUSE MADE FOCACCIA (Slabs & Minis · Page 4)
      // ======================================================================
      {
        id: 'focaccia-sharing-classic',
        name: 'Focaccia Sharing Slab — Rosemary & Sea Salt (VG)',
        category: 'focaccia',
        categoryLabel: 'Sharing Slab (Serves 12–16)',
        dietary: ['vegan', 'dairy-free'],
        serves: 14,
        price: 45.00,
        unitName: 'Whole Slab (Serves 12–16)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Slow-fermented artisan sourdough focaccia with cold-pressed Victorian EVOO, fresh rosemary, and Maldon flake sea salt.'
      },
      {
        id: 'focaccia-sharing-pesto',
        name: 'Focaccia Sharing Slab — Pesto & Straciatella (V)',
        category: 'focaccia',
        categoryLabel: 'Sharing Slab (Serves 12–16)',
        dietary: ['vegetarian'],
        serves: 14,
        price: 65.00,
        unitName: 'Whole Slab (Serves 12–16)',
        image: 'assets/images/real/focaccia-pesto.png',
        description: 'House pine nut pesto, melted fior di latte mozzarella, and cold creamy Victorian straciatella curd on warm focaccia.'
      },
      {
        id: 'focaccia-sharing-harissa',
        name: 'Focaccia Sharing Slab — Harissa, Salami & Peppers',
        category: 'focaccia',
        categoryLabel: 'Sharing Slab (Serves 12–16)',
        dietary: [],
        serves: 14,
        price: 65.00,
        unitName: 'Whole Slab (Serves 12–16)',
        image: 'assets/images/real/focaccia-harissa.png',
        description: 'Smoky mild harissa, aged cured salami, wood-roasted red bell peppers, and melted mozzarella on golden sourdough.'
      },
      {
        id: 'focaccia-sharing-pumpkin',
        name: 'Focaccia Sharing Slab — Pumpkin, Pesto & Mozzarella (V)',
        category: 'focaccia',
        categoryLabel: 'Sharing Slab (Serves 12–16)',
        dietary: ['vegetarian'],
        serves: 14,
        price: 65.00,
        unitName: 'Whole Slab (Serves 12–16)',
        image: 'assets/images/real/focaccia-pesto.png',
        description: 'Caramelised roast butternut pumpkin, basil pesto, blistered cherry tomatoes, and mozzarella on artisan focaccia.'
      },
      {
        id: 'focaccia-mini-box-10',
        name: 'Assorted Mini Focaccias Box (10 pk · V)',
        category: 'focaccia',
        categoryLabel: 'Mini Focaccia Box (10 pk)',
        dietary: ['vegetarian'],
        serves: 10,
        price: 89.00,
        unitName: 'Box of 10 ($8.90 ea)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Petite focaccias: Pesto & Straciatella; Potato & Goat\'s Cheese; Ham & Cheddar; and Margarita tomato basil.'
      },

      // ======================================================================
      // 6. GOURMET SALADS — Bowls (Page 5)
      // ======================================================================
      {
        id: 'salad-cypriot-grain-med',
        name: 'Cypriot Grain Salad Bowl (Medium · V)',
        category: 'salads',
        categoryLabel: 'Salad Bowl (Serves 10–15)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 112.00,
        unitName: 'Medium Bowl (Serves 10–15)',
        image: 'assets/images/real/cypriot-grain-salad.png',
        description: 'Farro, lentils, toasted almonds, pine nuts, pumpkin seeds, fresh herbs, jewel pomegranate seeds, labneh, and lemon dressing.'
      },
      {
        id: 'salad-potato-pancetta-med',
        name: 'Twice Cooked Potato Salad (Medium · DF/GF)',
        category: 'salads',
        categoryLabel: 'Salad Bowl (Serves 10–15)',
        dietary: ['gluten-free', 'dairy-free'],
        serves: 12,
        price: 112.00,
        unitName: 'Medium Bowl (Serves 10–15)',
        image: 'assets/images/real/potato-salad.png',
        description: 'Twice cooked golden potatoes, salsa verde mayonnaise, and crispy pancetta. 100% gluten and dairy free.'
      },
      {
        id: 'salad-green-kale-quinoa-med',
        name: 'Supergreen Kale & Quinoa Salad (Medium · GF/V)',
        category: 'salads',
        categoryLabel: 'Salad Bowl (Serves 10–15)',
        dietary: ['gluten-free', 'vegetarian'],
        serves: 12,
        price: 112.00,
        unitName: 'Medium Bowl (Serves 10–15)',
        image: 'assets/images/collection-salads.png',
        description: 'Tuscan kale, edamame, tri-colour quinoa, cranberries, toasted almonds, goat\'s feta, pepitas, and green goddess dressing.'
      },
      {
        id: 'salad-roasted-cauliflower-med',
        name: 'Spiced Roasted Cauliflower Salad (Medium · VG)',
        category: 'salads',
        categoryLabel: 'Salad Bowl (Serves 10–15)',
        dietary: ['vegan', 'dairy-free'],
        serves: 12,
        price: 112.00,
        unitName: 'Medium Bowl (Serves 10–15)',
        image: 'assets/images/collection-salads.png',
        description: 'Cumin-roasted cauliflower florets, green tahini drizzle, crisp chickpeas, fluffy couscous, pickled onion, and toasted almonds.'
      },
      {
        id: 'salad-shaved-broccoli-med',
        name: 'Shaved Broccoli & Cashew Cream (Medium · VG/GF)',
        category: 'salads',
        categoryLabel: 'Salad Bowl (Serves 10–15)',
        dietary: ['vegan', 'gluten-free', 'dairy-free'],
        serves: 12,
        price: 112.00,
        unitName: 'Medium Bowl (Serves 10–15)',
        image: 'assets/images/collection-salads.png',
        description: 'Raw shaved broccoli, velvety house cashew cream, roasted almonds, dried cranberries, sweet apricot, and fresh lemon.'
      },

      // ======================================================================
      // 7. PROTEINS & MAINS — (min 6 serves per type · Page 6)
      // ======================================================================
      {
        id: 'protein-atlantic-baked-salmon-6',
        name: 'Atlantic Baked Salmon Portions (6 serves · GF)',
        category: 'proteins',
        categoryLabel: 'Main Protein Platter (6 serves)',
        dietary: ['gluten-free'],
        serves: 6,
        price: 155.40,
        unitName: 'Platter of 6 ($25.90 ea)',
        image: 'assets/images/hero-catering.png',
        description: 'Slow-baked Tasmanian Atlantic salmon fillets (110g) with honey glaze, dill crème fraîche, toasted almonds, pomegranate, and herb salsa.'
      },
      {
        id: 'protein-slow-lamb-cranberry-6',
        name: 'Slow Cooked Lamb Cranberry & Thyme (6 serves · GF)',
        category: 'proteins',
        categoryLabel: 'Main Protein Platter (6 serves)',
        dietary: ['gluten-free'],
        serves: 6,
        price: 167.40,
        unitName: 'Platter of 6 ($27.90 ea)',
        image: 'assets/images/hero-catering.png',
        description: '12-hour slow-cooked Victorian lamb (150g serves) infused with cranberry, onion, and thyme. Served with pickled onion and herb salad.'
      },
      {
        id: 'protein-parmesan-chicken-goujon-10',
        name: 'Parmesan Crumbed Chicken Goujons (10 serves · GF)',
        category: 'proteins',
        categoryLabel: 'Warm Protein Platter',
        dietary: ['gluten-free'],
        serves: 10,
        price: 79.00,
        unitName: 'Platter of 10 ($7.90 ea)',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Tender chicken breast goujons crusted in aged parmesan and gluten-free crumb. Served warm with honey mustard aioli.'
      },
      {
        id: 'protein-eggplant-schnitzel-6',
        name: 'Eggplant Schnitzel with Aioli (6 serves · V/GF)',
        category: 'proteins',
        categoryLabel: 'Vegetarian Protein Platter',
        dietary: ['vegetarian', 'gluten-free'],
        serves: 6,
        price: 59.40,
        unitName: 'Platter of 6 ($9.90 ea)',
        image: 'assets/images/real/potato-salad.png',
        description: 'Crispy golden eggplant cutlets in gluten-free crumb, served with garlic aioli and fresh lemon wedges.'
      },
      {
        id: 'protein-karaage-chicken-10',
        name: 'Karaage Crispy Chicken (10 serves · GF)',
        category: 'proteins',
        categoryLabel: 'Warm Protein Platter',
        dietary: ['gluten-free'],
        serves: 10,
        price: 72.00,
        unitName: 'Platter of 10 ($7.20 ea)',
        image: 'assets/images/real/mini-sausage-rolls.jpg',
        description: 'Japanese-style crispy fried chicken bites with tamari, ginger, and garlic marinade. Served with sriracha lime mayo.'
      },
      {
        id: 'protein-sticky-tofu-6',
        name: 'Sticky Sweet\'n\'Sour Tofu (6 serves · VG/GF)',
        category: 'proteins',
        categoryLabel: 'Vegan Protein Platter',
        dietary: ['vegan', 'gluten-free', 'dairy-free'],
        serves: 6,
        price: 59.40,
        unitName: 'Platter of 6 ($9.90 ea)',
        image: 'assets/images/collection-salads.png',
        description: 'Crispy organic tofu cubes (100g) tossed in sticky sweet and sour reduction with toasted sesame seeds and fresh lime.'
      },

      // ======================================================================
      // 8. CANAPÉS SAVOURY — (min order 12 per item · Page 7)
      // ======================================================================
      {
        id: 'canape-arancini-pumpkin-12',
        name: 'Roast Pumpkin & Mozzarella Arancini (12 pk · V)',
        category: 'canapes',
        categoryLabel: 'Warm Canapé (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 94.80,
        unitName: 'Dozen (12 pk · $7.90 ea)',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Crispy arborio risotto spheres with roasted pumpkin, fresh sage, and melted mozzarella. Served with roasted garlic aioli.'
      },
      {
        id: 'canape-potato-truffle-croquette-12',
        name: 'Potato & Truffle Croquettes (12 pk · V)',
        category: 'canapes',
        categoryLabel: 'Warm Canapé (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 90.00,
        unitName: 'Dozen (12 pk · $7.50 ea)',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Crispy panko croquettes filled with velvety truffle-infused mashed potato and parmesan. Served with truffle aioli.'
      },
      {
        id: 'canape-rice-paper-rolls-12',
        name: 'Assorted Rice Paper Rolls (12 pk · GF)',
        category: 'canapes',
        categoryLabel: 'Fresh Canapé (12 pk)',
        dietary: ['gluten-free'],
        serves: 12,
        price: 78.00,
        unitName: 'Dozen (12 pk · $6.50 ea)',
        image: 'assets/images/collection-salads.png',
        description: 'Fresh Vietnamese rice paper rolls: Supergreen avocado (VG), BBQ pork with hoisin, and coconut chicken with nuoc cham.'
      },
      {
        id: 'canape-mini-cheeseburgers-12',
        name: 'Mini Angus Cheeseburgers (12 pk)',
        category: 'canapes',
        categoryLabel: 'Warm Canapé (12 pk)',
        dietary: [],
        serves: 12,
        price: 94.80,
        unitName: 'Dozen (12 pk · $7.90 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Milk brioche slider buns with grass-fed Angus beef patties, melted cheddar, house pickles, ketchup, and mayo.'
      },
      {
        id: 'canape-peking-duck-pancake-12',
        name: 'Peking Duck Pancakes (12 pk)',
        category: 'canapes',
        categoryLabel: 'Handmade Canapé (12 pk)',
        dietary: [],
        serves: 12,
        price: 82.80,
        unitName: 'Dozen (12 pk · $6.90 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Tender shredded Peking duck rolled in mandarin pancakes with spiced hoisin glaze and crisp fresh cucumber.'
      },
      {
        id: 'canape-satay-beef-skewers-12',
        name: 'Satay Beef & Onion Skewers (12 pk)',
        category: 'canapes',
        categoryLabel: 'Warm Skewers (12 pk)',
        dietary: [],
        serves: 12,
        price: 102.00,
        unitName: 'Dozen (12 pk · $8.50 ea)',
        image: 'assets/images/real/mini-sausage-rolls.jpg',
        description: 'Char-grilled marinated beef rump and charred onion skewers served with salsa verde mayo and fresh lime.'
      },
      {
        id: 'canape-fried-chicken-bao-12',
        name: 'Karaage Chicken Bao Buns (12 pk · GFO)',
        category: 'canapes',
        categoryLabel: 'Steamed Bao (12 pk)',
        dietary: ['gluten-free'],
        serves: 12,
        price: 94.80,
        unitName: 'Dozen (12 pk · $7.90 ea)',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Steamed fluffy lotus bao buns with crispy fried chicken karaage, crunchy white slaw, pickled red onion, and coriander.'
      },

      // ======================================================================
      // 9. SWEETS & DESSERT CUPS — (min order 12 per item · Page 8)
      // ======================================================================
      {
        id: 'dessert-raspberry-tart-12',
        name: 'Raspberry Shortcrust Tarts (12 pk · V/GFO)',
        category: 'desserts',
        categoryLabel: 'Sweet Tartlets (12 pk)',
        dietary: ['vegetarian', 'gluten-free'],
        serves: 12,
        price: 82.80,
        unitName: 'Dozen (12 pk · $6.90 ea)',
        image: 'assets/images/real/vanilla-raspberry-cupcakes.png',
        description: 'Crisp short pastry tarts filled with vanilla crème pâtissière, fresh raspberries, and white chocolate shavings.'
      },
      {
        id: 'dessert-mini-pavlova-12',
        name: 'Mini Pavlovas with Summer Berries (12 pk · V/GF)',
        category: 'desserts',
        categoryLabel: 'Sweet Canapé (12 pk)',
        dietary: ['gluten-free', 'vegetarian'],
        serves: 12,
        price: 82.80,
        unitName: 'Dozen (12 pk · $6.90 ea)',
        image: 'assets/images/real/pavlova-dessert.jpg',
        description: 'Crisp marshmallow meringue nests crowned with whipped mascarpone cream, fresh summer berries, and raspberry dust.'
      },
      {
        id: 'dessert-lemon-meringue-tart-12',
        name: 'Torched Lemon Meringue Tarts (12 pk · V/GFO)',
        category: 'desserts',
        categoryLabel: 'Sweet Tartlets (12 pk)',
        dietary: ['vegetarian', 'gluten-free'],
        serves: 12,
        price: 94.80,
        unitName: 'Dozen (12 pk · $7.90 ea)',
        image: 'assets/images/real/lemon-ricotta-cake.png',
        description: 'Shortcrust pastry with sharp Meyer lemon curd crowned with golden-torched Italian meringue swirls.'
      },
      {
        id: 'dessert-cup-eton-mess-12',
        name: 'Dessert Cups — Eton Mess (12 pk · V/GF)',
        category: 'desserts',
        categoryLabel: 'Individual Dessert Cups (12 pk)',
        dietary: ['gluten-free', 'vegetarian'],
        serves: 12,
        price: 114.00,
        unitName: 'Pack of 12 ($9.50 ea)',
        image: 'assets/images/real/eton-mess-cake.png',
        description: 'Layers of crushed vanilla meringue, macerated Victorian strawberries and raspberries, and vanilla Chantilly cream.'
      },
      {
        id: 'dessert-cup-tiramisu-12',
        name: 'Dessert Cups — Tiramisu (12 pk · V)',
        category: 'desserts',
        categoryLabel: 'Individual Dessert Cups (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 114.00,
        unitName: 'Pack of 12 ($9.50 ea)',
        image: 'assets/images/collection-traditional.jpg',
        description: 'Espresso-soaked Savoiardi sponge fingers layered with creamy mascarpone sabayon and dusted with Dutch cocoa.'
      },
      {
        id: 'dessert-cup-biscoff-12',
        name: 'Dessert Cups — Layered Biscoff (12 pk · VG)',
        category: 'desserts',
        categoryLabel: 'Individual Dessert Cups (12 pk)',
        dietary: ['vegan', 'dairy-free'],
        serves: 12,
        price: 114.00,
        unitName: 'Pack of 12 ($9.50 ea)',
        image: 'assets/images/real/cake-tasting-box.png',
        description: 'Speculoos Biscoff biscuit crunch, coconut yoghurt, raspberry compote, and melted creamy Biscoff spread.'
      },

      // ======================================================================
      // 10. KID\'S PARTIES & PACKAGES — (Pages 9 & 10)
      // ======================================================================
      {
        id: 'kids-package-petite-10',
        name: 'Kid\'s Party Package — PETITE (Serves 10)',
        category: 'kids',
        categoryLabel: 'All-Inclusive Package (10 Kids)',
        dietary: [],
        serves: 10,
        price: 350.00,
        unitName: 'Package for 10 ($35/child)',
        image: 'assets/images/collection-kids.jpg',
        description: 'Includes per child: Honey joy, lolly bag, fruit cup, ham/cheese ribbon, chicken nugget, mini sprinkles cupcake, 2x fairy bread, and mini water/juice.'
      },
      {
        id: 'kids-package-grande-20',
        name: 'Kid\'s Party Package — GRANDE (Serves 20)',
        category: 'kids',
        categoryLabel: 'All-Inclusive Package (20 Kids)',
        dietary: [],
        serves: 20,
        price: 680.00,
        unitName: 'Package for 20 ($34/child)',
        image: 'assets/images/collection-kids.jpg',
        description: 'Complete 20-child banquet feast with honey joys, lolly bags, fruit cups, ribbon sandwiches, nuggets, cupcakes, fairy bread, and drinks.'
      },
      {
        id: 'kids-fairy-bread-50',
        name: 'Fairy Bread Triangles Platter (50 pc · V)',
        category: 'kids',
        categoryLabel: 'Party Tradition (50 pc)',
        dietary: ['vegetarian'],
        serves: 18,
        price: 49.00,
        unitName: 'Platter of 50 Triangles',
        image: 'assets/images/real/fairy-bread.jpg',
        description: 'Classic soft white bread crusts trimmed, spread with whipped butter and coated in vibrant 100s & 1000s sprinkles.'
      },
      {
        id: 'kids-ribbon-ham-cheese-20',
        name: 'Kid\'s Ham & Cheese Ribbon Sandwiches (20 pk · GFO)',
        category: 'kids',
        categoryLabel: 'Kid\'s Ribbons (20 pk)',
        dietary: [],
        serves: 12,
        price: 85.00,
        unitName: 'Platter of 20',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crustless soft sandwich ribbons filled with shaved leg ham, mild cheddar cheese, and cultured butter.'
      },
      {
        id: 'kids-honey-joys-12',
        name: 'Honey Joys (12 pk · V)',
        category: 'kids',
        categoryLabel: 'Party Treats (12 pk)',
        dietary: ['vegetarian'],
        serves: 12,
        price: 60.00,
        unitName: 'Platter of 12 ($5.00 ea)',
        image: 'assets/images/collection-kids.jpg',
        description: 'Crunchy golden cornflakes baked with pure Australian honey, melted butter, and sugar in pastel paper cups.'
      },
      {
        id: 'kids-giant-number-cake',
        name: 'Giant Number Celebration Cake (Serves 15–20)',
        category: 'kids',
        categoryLabel: 'Bespoke Milestone Cake',
        dietary: ['vegetarian'],
        serves: 20,
        price: 165.00,
        unitName: 'Serves 15–20',
        image: 'assets/images/real/number-cake.jpg',
        description: 'Custom dual-layer sponge carved into any number (0–9), piped with vanilla buttercream, macarons, fresh strawberries, and treats.'
      }
    ];

    // State Variables
    let totalGuests = 25;
    let fulfillment = 'delivery'; // 'delivery' or 'pickup'
    let timeSlot = 'Standard Midday Delivery (11:00am – 1:30pm)';
    let paymentMethod = 'card';
    let activeCategory = 'boxes';
    const allocations = {}; // { dishId: quantity }

    // DOM Elements
    const guestsInput = document.getElementById('catTotalGuestsInput');
    const guestsIncBtn = document.getElementById('catGuestsInc');
    const guestsDecBtn = document.getElementById('catGuestsDec');
    const dateInput = document.getElementById('catEventDateInput');
    const fulfillDeliveryBtn = document.getElementById('catFulfillDeliveryBtn');
    const fulfillPickupBtn = document.getElementById('catFulfillPickupBtn');
    const deliveryFieldsWrap = document.getElementById('catDeliveryFieldsWrap');
    const timeSlotSelect = document.getElementById('catTimeSlotSelect');
    const tabModeBuilder = document.getElementById('tabModeBuilder');
    const tabModeCatalog = document.getElementById('tabModeCatalog');
    const studioContainer = document.getElementById('cateringStudioContainer');
    const dishesGrid = document.getElementById('catDishesGrid');
    const receiptItemsList = document.getElementById('catReceiptItemsList');
    const bookingForm = document.getElementById('catInstantBookingForm');
    const resetAllocBtn = document.getElementById('catResetAllocationsBtn');
    const addonLunchboxesCheck = document.getElementById('catAddonLunchboxes');
    const addonCutleryCheck = document.getElementById('catAddonCutlery');

    // Strictly enforce minimum 4 business days notice as per F&H Policy (Page 11)
    if (dateInput) {
      const minDate = new Date();
      minDate.setDate(minDate.getDate() + 4);
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 5);

      const formatDateStr = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
      };

      dateInput.min = formatDateStr(minDate);
      dateInput.value = formatDateStr(defaultDate);
    }

    // Mode Switcher (1-Minute Builder vs Catalog Grid)
    tabModeBuilder?.addEventListener('click', () => {
      tabModeBuilder.classList.add('active');
      tabModeCatalog?.classList.remove('active');
      if (studioContainer) studioContainer.style.display = 'block';
    });

    tabModeCatalog?.addEventListener('click', () => {
      tabModeCatalog.classList.add('active');
      tabModeBuilder?.classList.remove('active');
      const catalogEl = document.getElementById('productsGrid');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // Guests Stepper Controls
    function setGuests(newVal) {
      totalGuests = Math.max(5, Math.min(500, parseInt(newVal, 10) || 5));
      if (guestsInput) guestsInput.value = totalGuests;

      document.querySelectorAll('.cat-guest-chip').forEach(chip => {
        const cVal = parseInt(chip.getAttribute('data-guests'), 10);
        if (cVal === totalGuests) chip.classList.add('active');
        else chip.classList.remove('active');
      });

      renderCateringStudio();
    }

    guestsIncBtn?.addEventListener('click', () => setGuests(totalGuests + 5));
    guestsDecBtn?.addEventListener('click', () => setGuests(totalGuests - 5));
    guestsInput?.addEventListener('change', (e) => setGuests(e.target.value));

    document.querySelectorAll('.cat-guest-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = parseInt(chip.getAttribute('data-guests'), 10);
        setGuests(val);
      });
    });

    // Fulfillment Switcher
    fulfillDeliveryBtn?.addEventListener('click', () => {
      fulfillment = 'delivery';
      fulfillDeliveryBtn.classList.add('active');
      fulfillPickupBtn?.classList.remove('active');
      if (deliveryFieldsWrap) deliveryFieldsWrap.style.display = 'block';
      renderCateringStudio();
    });

    fulfillPickupBtn?.addEventListener('click', () => {
      fulfillment = 'pickup';
      fulfillPickupBtn.classList.add('active');
      fulfillDeliveryBtn?.classList.remove('active');
      if (deliveryFieldsWrap) deliveryFieldsWrap.style.display = 'none';
      renderCateringStudio();
    });

    timeSlotSelect?.addEventListener('change', (e) => {
      timeSlot = e.target.value;
    });

    // Add-on checkboxes
    addonLunchboxesCheck?.addEventListener('change', () => renderCateringStudio());
    addonCutleryCheck?.addEventListener('change', () => renderCateringStudio());

    // Category Filter Pills & Dynamic Descriptions (Linen & Ladle Reference)
    const categoryInfoMap = {
      'all': {
        title: 'All Catering Items',
        desc: 'Guests build their own spread. Handcrafted in our Kew bakery daily for boardroom lunches and celebration banquets.'
      },
      'boxes': {
        title: 'Catering Boxes',
        desc: 'Signature warm pastries, handcrafted sausage rolls, quiches, and gourmet sandwich ribbons packed ready-to-serve.'
      },
      'patisserie': {
        title: 'Patisserie & Baked',
        desc: 'Lescure butter viennoiseries, artisan scones with house raspberry jam, pain au chocolat, and breakfast treats.'
      },
      'brunch': {
        title: 'Brunch & Sliders',
        desc: 'Warm breakfast sliders, baked egg bowls, seasonal Victorian fruit platters, and wholesome morning spreads.'
      },
      'sandwiches': {
        title: 'Sandwiches & Wraps',
        desc: 'Crustless soft white ribbon sandwiches, artisan baguettes, poached chicken, and seasonal vegetarian fillings.'
      },
      'focaccia': {
        title: 'Housemade Focaccia',
        desc: 'Slow-fermented artisan focaccia slabs topped with rosemary, sea salt, stracciatella, mortadella, and pestos.'
      },
      'salads': {
        title: 'Gourmet Salads',
        desc: 'Fresh seasonal banquet bowls including Cypriot grain, heirloom tomato burrata, roasted cauliflower & spiced chickpeas.'
      },
      'proteins': {
        title: 'Proteins & Mains',
        desc: 'Slow-roasted Victorian meats, herb-crusted salmon, tender free-range chicken fillets, and substantial event platters.'
      },
      'canapes': {
        title: 'Savoury Canapés',
        desc: 'Bite-sized cocktail party delights: golden arancini, caramelised onion tartlets, and skewers.'
      },
      'desserts': {
        title: 'Sweets & Desserts',
        desc: 'Atelier petite tarts, mini pavlovas, espresso tiramisu dessert cups, and French macarons.'
      },
      'kids': {
        title: "Kid's Packages",
        desc: 'Complete feast packages with nostalgic fairy bread, handcrafted nuggets, sausage rolls, and sprinkle cupcakes.'
      }
    };

    document.querySelectorAll('.cat-menu-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.cat-menu-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-cat') || 'boxes';

        const info = categoryInfoMap[activeCategory] || categoryInfoMap['boxes'];
        const catTitleEl = document.getElementById('catCategoryTitle');
        const catDescEl = document.getElementById('catCategoryDesc');
        if (catTitleEl) catTitleEl.textContent = info.title;
        if (catDescEl) catDescEl.textContent = info.desc;

        renderDishesDeck();
      });
    });

    // Event Parameters Modal Wiring
    const paramsModal = document.getElementById('catParamsModal');
    const paramsBackdrop = document.getElementById('catParamsModalBackdrop');
    const openParamsBtn = document.getElementById('catOpenParamsModalBtn');
    const changeParamsBtn = document.getElementById('catChangeOrderParamsBtn');
    const closeParamsBtn = document.getElementById('catParamsModalCloseBtn');
    const saveParamsBtn = document.getElementById('catSaveParamsBtn');

    function openParamsModal() {
      paramsModal?.classList.add('open');
      paramsBackdrop?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeParamsModal() {
      paramsModal?.classList.remove('open');
      paramsBackdrop?.classList.remove('open');
      document.body.style.overflow = '';
    }

    openParamsBtn?.addEventListener('click', openParamsModal);
    changeParamsBtn?.addEventListener('click', openParamsModal);
    closeParamsBtn?.addEventListener('click', closeParamsModal);
    paramsBackdrop?.addEventListener('click', closeParamsModal);

    saveParamsBtn?.addEventListener('click', () => {
      if (guestsInput) totalGuests = Math.max(5, parseInt(guestsInput.value, 10) || 25);
      closeParamsModal();
      renderCateringStudio();
      showToast(`✓ Updated: ${totalGuests} Guests · ${fulfillment === 'pickup' ? 'Kew Pickup' : 'Delivery'}`);
    });

    // Checkout Modal Wiring
    const checkoutModal = document.getElementById('catCheckoutModal');
    const checkoutBackdrop = document.getElementById('catCheckoutModalBackdrop');
    const checkoutTriggerBtn = document.getElementById('catCheckoutBtn');
    const closeCheckoutBtn = document.getElementById('catCheckoutModalCloseBtn');

    function openCheckoutModal() {
      const allocatedGuests = Object.entries(allocations).reduce((sum, [id, qty]) => {
        const item = cateringDishes.find(d => d.id === id);
        return sum + (item ? item.serves * qty : 0);
      }, 0);

      if (allocatedGuests === 0) {
        showToast('⚠️ Please tap Add on dishes to add them to your order before checkout!');
        return;
      }
      checkoutModal?.classList.add('open');
      checkoutBackdrop?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCheckoutModal() {
      checkoutModal?.classList.remove('open');
      checkoutBackdrop?.classList.remove('open');
      document.body.style.overflow = '';
    }

    checkoutTriggerBtn?.addEventListener('click', openCheckoutModal);
    closeCheckoutBtn?.addEventListener('click', closeCheckoutModal);
    checkoutBackdrop?.addEventListener('click', closeCheckoutModal);

    // Payment Method Buttons
    document.querySelectorAll('.cat-pay-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.cat-pay-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        paymentMethod = tab.getAttribute('data-pay') || 'card';
      });
    });

    // Allocation Adjusters
    function changeAllocation(dishId, delta) {
      const curr = allocations[dishId] || 0;
      const next = Math.max(0, curr + delta);
      if (next === 0) {
        delete allocations[dishId];
      } else {
        allocations[dishId] = next;
      }
      renderCateringStudio();
    }

    function feedRemaining(dishId) {
      const dish = cateringDishes.find(d => d.id === dishId);
      if (!dish) return;

      const currentAllocated = Object.entries(allocations).reduce((sum, [id, qty]) => {
        const item = cateringDishes.find(d => d.id === id);
        return sum + (item ? item.serves * qty : 0);
      }, 0);

      const remaining = Math.max(0, totalGuests - currentAllocated);
      if (remaining > 0) {
        const unitsNeeded = Math.ceil(remaining / dish.serves);
        allocations[dishId] = (allocations[dishId] || 0) + unitsNeeded;
        renderCateringStudio();
        showToast(`✓ Added ${unitsNeeded}x ${dish.name} (Feeds ${unitsNeeded * dish.serves} guests)`);
      } else {
        allocations[dishId] = (allocations[dishId] || 0) + 1;
        renderCateringStudio();
        showToast(`✓ Added 1x ${dish.name} (+${dish.serves} extra guest portions)`);
      }
    }

    // Core Render Engine
    function renderCateringStudio() {
      renderDishesDeck();
      renderLiveReceiptAndTracker();
    }

    function renderDishesDeck() {
      if (!dishesGrid) return;

      const filtered = activeCategory === 'all'
        ? cateringDishes
        : cateringDishes.filter(d => d.category === activeCategory);

      dishesGrid.innerHTML = filtered.map(dish => {
        const qty = allocations[dish.id] || 0;
        const isAllocated = qty > 0;
        const perGuestCost = (dish.price / dish.serves).toFixed(2);

        const dietBadges = (dish.dietary || []).map(d => {
          let label = d.toUpperCase();
          if (d === 'gluten-free') label = 'GF';
          if (d === 'vegetarian') label = 'VEG';
          if (d === 'vegan') label = 'VEGAN';
          if (d === 'dairy-free') label = 'DF';
          return `<span class="cat-dish-diet-tag">${label}</span>`;
        }).join('');

        return `
          <div class="cat-dish-card ${isAllocated ? 'is-allocated' : ''}" id="catCard_${dish.id}">
            <div class="cat-dish-media">
              <img src="${dish.image}" alt="${dish.name}" class="cat-dish-img" loading="lazy">
              <div class="cat-dish-diet-pills">
                ${dietBadges}
              </div>
            </div>
            <div class="cat-dish-body">
              <span class="cat-dish-kicker">${dish.categoryLabel}</span>
              <h4 class="cat-dish-name">${dish.name}</h4>
              <p class="cat-dish-desc">${dish.description}</p>
              
              <div class="cat-dish-footer">
                <div class="cat-dish-pricing">
                  <div class="cat-dish-price-per-guest">$${perGuestCost} <span class="per-guest-label">per guest</span></div>
                  <div class="cat-dish-price-total">$${dish.price.toFixed(2)} total · ${dish.unitName} (feeds ${dish.serves})</div>
                </div>

                <div class="cat-dish-action">
                  ${qty === 0 ? `
                    <button type="button" class="cat-add-btn" onclick="window.fhApp.changeCatDish('${dish.id}', 1)" aria-label="Add ${dish.name}">
                      <span>Add</span>
                    </button>
                  ` : `
                    <div class="cat-card-stepper">
                      <button type="button" class="cat-stepper-mini-btn" onclick="window.fhApp.changeCatDish('${dish.id}', -1)" aria-label="Decrease quantity">−</button>
                      <span class="cat-stepper-mini-val">${qty}</span>
                      <button type="button" class="cat-stepper-mini-btn" onclick="window.fhApp.changeCatDish('${dish.id}', 1)" aria-label="Increase quantity">+</button>
                    </div>
                  `}
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function renderLiveReceiptAndTracker() {
      // 1. Calculate Allocations and Categories
      let allocatedGuests = 0;
      let subtotal = 0;
      let gfGuests = 0;
      let vegGuests = 0;
      let savouryGuests = 0;
      let sweetGuests = 0;

      let morningGuests = 0;
      let savouriesGuests = 0;
      let plattersGuests = 0;
      let dietaryGuests = 0;
      let sweetsGuests = 0;

      const itemsSelected = [];

      Object.entries(allocations).forEach(([dishId, qty]) => {
        if (qty <= 0) return;
        const dish = cateringDishes.find(d => d.id === dishId);
        if (!dish) return;

        const count = qty * dish.serves;
        const cost = qty * dish.price;
        allocatedGuests += count;
        subtotal += cost;

        // Dietary tags
        if (dish.dietary?.includes('gluten-free')) gfGuests += count;
        if (dish.dietary?.includes('vegetarian') || dish.dietary?.includes('vegan')) vegGuests += count;
        
        // Savoury vs Sweet classification
        if (['boxes', 'brunch', 'sandwiches', 'focaccia', 'salads', 'proteins', 'canapes'].includes(dish.category)) {
          savouryGuests += count;
        }
        if (['patisserie', 'desserts', 'kids'].includes(dish.category)) {
          sweetGuests += count;
        }

        // Multi-segment progress bar classification
        if (dish.category === 'patisserie' || dish.category === 'brunch') morningGuests += count;
        if (dish.category === 'canapes' || dish.category === 'proteins') savouriesGuests += count;
        if (dish.category === 'boxes' || dish.category === 'focaccia' || dish.category === 'sandwiches') plattersGuests += count;
        if (dish.category === 'salads' || dish.dietary?.includes('gluten-free')) dietaryGuests += count;
        if (dish.category === 'desserts' || dish.category === 'kids') sweetsGuests += count;

        itemsSelected.push({ dish, qty, count, cost });
      });

      // Add-ons calculations (Page 13 FAQ: Lunchboxes $1.50 ea, Cutlery $1.00 ea)
      const hasLunchboxes = document.getElementById('catAddonLunchboxes')?.checked || false;
      const hasCutlery = document.getElementById('catAddonCutlery')?.checked || false;
      const lunchboxCost = hasLunchboxes ? (totalGuests * 1.50) : 0;
      const cutleryCost = hasCutlery ? (totalGuests * 1.00) : 0;
      const addonsTotal = lunchboxCost + cutleryCost;

      // Delivery Fee calculation (Page 12: Delivery starts from $60.00 inc GST; Pickup is free)
      const deliveryFee = fulfillment === 'delivery' ? 60.00 : 0.00;
      const grandTotal = subtotal + addonsTotal + deliveryFee;
      const costPerGuest = totalGuests > 0 ? ((subtotal + addonsTotal) / totalGuests) : 0;
      const remainingGuests = totalGuests - allocatedGuests;

      // 2. Sync Event Summary Ribbon (Top Bar)
      const ribbonGuests = document.getElementById('catRibbonGuests');
      const ribbonDate = document.getElementById('catRibbonDate');
      const ribbonFulfill = document.getElementById('catRibbonFulfillment');
      if (ribbonGuests) ribbonGuests.textContent = `${totalGuests} Guests`;

      let eventDateFormatted = '4 Business Days Pre-Order';
      let eventDateShort = 'Scheduled date';
      if (dateInput && dateInput.value) {
        const parts = dateInput.value.split('-');
        if (parts.length === 3) {
          const dObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
          eventDateFormatted = dObj.toLocaleDateString('en-AU', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
          eventDateShort = dObj.toLocaleDateString('en-AU', { weekday: 'short', month: 'short', day: 'numeric' });
        }
      }

      if (ribbonDate) ribbonDate.textContent = eventDateFormatted;
      if (ribbonFulfill) ribbonFulfill.textContent = fulfillment === 'pickup' ? 'Kew Boutique Pickup (Free)' : 'Metro Courier Delivery ($60)';

      // 3. Sync "Your order" Header Line
      const orderParamsSummary = document.getElementById('catOrderParamsSummary');
      if (orderParamsSummary) {
        const timeLabel = timeSlot.includes('(') ? timeSlot.split('(')[1].replace(')', '') : timeSlot;
        orderParamsSummary.textContent = `${totalGuests} guests · ${eventDateShort} · ${timeLabel}`;
      }

      // 4. Update Guest Allocation Progress Bar & Tally
      const orderAllocTally = document.getElementById('catOrderAllocatedTally');
      const orderTargetTally = document.getElementById('catOrderTargetTally');
      const orderStatusBadge = document.getElementById('catOrderStatusBadge');
      const orderProgressFill = document.getElementById('catOrderProgressFill');

      if (orderAllocTally) orderAllocTally.textContent = allocatedGuests;
      if (orderTargetTally) orderTargetTally.textContent = totalGuests;

      const fedPct = Math.round((allocatedGuests / Math.max(1, totalGuests)) * 100);
      if (orderStatusBadge) {
        if (allocatedGuests === 0) {
          orderStatusBadge.textContent = '0%';
        } else if (allocatedGuests < totalGuests) {
          orderStatusBadge.textContent = `${fedPct}%`;
        } else if (allocatedGuests === totalGuests) {
          orderStatusBadge.textContent = '100% Fed';
        } else {
          orderStatusBadge.textContent = `${fedPct}% (+${allocatedGuests - totalGuests})`;
        }
      }
      if (orderProgressFill) {
        orderProgressFill.style.width = `${Math.min(100, fedPct)}%`;
      }

      // 5. Update Selected Items List (Empty state vs Selected rows)
      if (receiptItemsList) {
        if (itemsSelected.length === 0) {
          receiptItemsList.innerHTML = `
            <div class="cat-order-empty-state" id="catReceiptEmpty">
              <div class="cat-order-empty-title">Nothing added yet</div>
              <div class="cat-order-empty-text">Tap <strong>Add</strong> on any dish and it will appear here.</div>
            </div>
          `;
        } else {
          let rowsHtml = itemsSelected.map(item => `
            <div class="cat-receipt-item-row">
              <div class="cat-receipt-item-info">
                <div class="cat-receipt-item-name">${item.dish.name}</div>
                <div class="cat-receipt-item-sub">${item.qty}x ${item.dish.unitName} · Feeds ${item.count} guests</div>
              </div>
              <div class="cat-receipt-item-cost">$${item.cost.toFixed(2)}</div>
              <button type="button" class="cat-receipt-item-remove" onclick="window.fhApp.removeCatDish('${item.dish.id}')" title="Remove dish" aria-label="Remove ${item.dish.name}">✕</button>
            </div>
          `).join('');

          receiptItemsList.innerHTML = rowsHtml;
        }
      }

      // 6. Totals & Financial Breakdown
      const subtotalEl = document.getElementById('catSubtotalDisplay');
      const addonsRowEl = document.getElementById('catAddonsRow');
      const addonsDisplayEl = document.getElementById('catAddonsDisplay');
      const deliveryTitleEl = document.getElementById('catDeliveryTitle');
      const deliveryEl = document.getElementById('catDeliveryFeeDisplay');
      const gstEl = document.getElementById('catGstDisplay');
      const grandTotalEl = document.getElementById('catGrandTotalDisplay');
      const btnTotalBadge = document.getElementById('catBtnTotalBadge');
      const checkoutSummaryText = document.getElementById('catCheckoutSummaryText');

      if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

      if (addonsRowEl && addonsDisplayEl) {
        if (addonsTotal > 0) {
          addonsRowEl.style.display = 'flex';
          addonsDisplayEl.textContent = `$${addonsTotal.toFixed(2)}`;
        } else {
          addonsRowEl.style.display = 'none';
        }
      }

      if (deliveryTitleEl) deliveryTitleEl.textContent = fulfillment === 'pickup' ? 'Boutique Pickup' : 'Delivery and setup';
      if (deliveryEl) deliveryEl.textContent = fulfillment === 'pickup' ? 'Free (Pickup)' : `$${deliveryFee.toFixed(2)}`;
      if (gstEl) gstEl.textContent = `$${(grandTotal / 11).toFixed(2)}`;
      if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
      if (btnTotalBadge) btnTotalBadge.textContent = `$${grandTotal.toFixed(2)}`;

      if (checkoutSummaryText) {
        checkoutSummaryText.textContent = `${totalGuests} Guests · ${eventDateShort} · ${fulfillment === 'pickup' ? 'Pickup' : 'Delivery'} · Total $${grandTotal.toFixed(2)}`;
      }

      // Mobile Floating Action Bar & Top Tracker Cart updates
      const mfbFedTally = document.getElementById('catMfbFedTally');
      const mfbTotalDisplay = document.getElementById('catMfbTotalDisplay');
      const trackerCartTotal = document.getElementById('catTrackerCartTotal');
      if (mfbFedTally) mfbFedTally.textContent = `${allocatedGuests} / ${totalGuests} Fed`;
      if (mfbTotalDisplay) mfbTotalDisplay.textContent = `$${grandTotal.toFixed(2)}`;
      if (trackerCartTotal) trackerCartTotal.textContent = `$${grandTotal.toFixed(2)}`;
    }

    // Fast 1-Minute Booking Submission (Zero Email Back-and-Forth)
    bookingForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      const allocatedGuests = Object.entries(allocations).reduce((sum, [id, qty]) => {
        const item = cateringDishes.find(d => d.id === id);
        return sum + (item ? item.serves * qty : 0);
      }, 0);

      if (allocatedGuests === 0) {
        showToast('⚠️ Please allocate at least one dish for your guests before reserving!');
        return;
      }

      const firstName = document.getElementById('catClientFirstName')?.value.trim() || '';
      const lastName = document.getElementById('catClientLastName')?.value.trim() || '';
      const email = document.getElementById('catClientEmail')?.value.trim() || '';
      const phone = document.getElementById('catClientPhone')?.value.trim() || '';
      const street = document.getElementById('catDeliveryStreet')?.value.trim() || '';
      const suburb = document.getElementById('catDeliverySuburb')?.value.trim() || '';
      const evDate = dateInput?.value || 'Scheduled Date';

      const hasLunchboxes = document.getElementById('catAddonLunchboxes')?.checked || false;
      const hasCutlery = document.getElementById('catAddonCutlery')?.checked || false;
      const lunchboxCost = hasLunchboxes ? (totalGuests * 1.50) : 0;
      const cutleryCost = hasCutlery ? (totalGuests * 1.00) : 0;
      const addonsTotal = lunchboxCost + cutleryCost;

      const bookingRef = 'FH-CAT-2026-' + Math.floor(10000 + Math.random() * 90000);

      // Populate Manifest Modal Slip
      const refEl = document.getElementById('manifestRefNum');
      const clientNameEl = document.getElementById('manifestClientName');
      const clientContactEl = document.getElementById('manifestClientContact');
      const dateTimeEl = document.getElementById('manifestDateTime');
      const fulfillTypeEl = document.getElementById('manifestFulfillType');
      const itemsListEl = document.getElementById('manifestItemsList');
      const guestSummaryEl = document.getElementById('manifestGuestSummary');
      const grandTotalEl = document.getElementById('manifestGrandTotal');
      const notesTextEl = document.getElementById('manifestNotesText');

      if (refEl) refEl.textContent = `#${bookingRef}`;
      if (clientNameEl) clientNameEl.textContent = `${firstName} ${lastName}`;
      if (clientContactEl) clientContactEl.textContent = `${email} · ${phone}`;
      if (dateTimeEl) dateTimeEl.textContent = `${evDate} · ${timeSlot}`;
      if (fulfillTypeEl) fulfillTypeEl.textContent = fulfillment === 'delivery' ? `Refrigerated Metro Courier (${street ? `${street}, ${suburb}` : 'Melbourne Metro'})` : 'Boutique Collection (259 High St, Kew · After 11:00am)';

      let subtotal = 0;
      let itemsHtml = Object.entries(allocations).map(([id, qty]) => {
        const dish = cateringDishes.find(d => d.id === id);
        if (!dish || qty <= 0) return '';
        const cost = qty * dish.price;
        subtotal += cost;
        return `
          <div style="display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px dashed #eee;">
            <span>${qty}x ${dish.name} (Feeds ${qty * dish.serves} guests)</span>
            <strong>$${cost.toFixed(2)}</strong>
          </div>
        `;
      }).join('');

      if (hasLunchboxes) {
        itemsHtml += `
          <div style="display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px dashed #eee;">
            <span>Individual Eco Lunch Boxes (${totalGuests} guests @ $1.50 ea)</span>
            <strong>$${lunchboxCost.toFixed(2)}</strong>
          </div>
        `;
      }
      if (hasCutlery) {
        itemsHtml += `
          <div style="display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px dashed #eee;">
            <span>Eco Serviettes & Cutlery Sets (${totalGuests} guests @ $1.00 ea)</span>
            <strong>$${cutleryCost.toFixed(2)}</strong>
          </div>
        `;
      }

      const deliveryFee = fulfillment === 'delivery' ? 60.00 : 0.00;
      const totalAmount = subtotal + addonsTotal + deliveryFee;

      if (itemsListEl) {
        itemsListEl.innerHTML = itemsHtml + (fulfillment === 'delivery' ? `
          <div style="display: flex; justify-content: space-between; padding: 0.35rem 0; color: #555;">
            <span>Refrigerated Metro Courier Delivery (8:30am – 3:30pm Window)</span>
            <span>$60.00</span>
          </div>
        ` : `
          <div style="display: flex; justify-content: space-between; padding: 0.35rem 0; color: #2e7d32;">
            <span>Boutique Collection at 259 High St, Kew</span>
            <span>FREE</span>
          </div>
        `);
      }

      if (guestSummaryEl) guestSummaryEl.textContent = `${allocatedGuests} Portions Allocated (${totalGuests} Guests Total)`;
      if (grandTotalEl) grandTotalEl.textContent = `$${totalAmount.toFixed(2)} AUD (GST Incl)`;
      if (notesTextEl) notesTextEl.innerHTML = `Frank & Harri Kew Atelier Policy confirmed. Min 4 business days notice. Tel: 0476669616 | info@frankandharri.com.au. Payment: ${paymentMethod.toUpperCase()}.`;

      // Google Calendar Link
      const calBtn = document.getElementById('catAddToCalendarBtn');
      if (calBtn) {
        const evTitle = encodeURIComponent(`Frank & Harri Kew — Catering Reservation #${bookingRef} (${totalGuests} Guests)`);
        const evDetails = encodeURIComponent(`Booking Ref: #${bookingRef}\nOrganizer: ${firstName} ${lastName}\nGuests: ${totalGuests}\nTime: ${timeSlot}\nPayment: ${paymentMethod.toUpperCase()}\nTotal: $${totalAmount.toFixed(2)} AUD`);
        const evLoc = encodeURIComponent(fulfillment === 'delivery' ? `${street}, ${suburb}` : '259 High Street, Kew VIC 3101');
        calBtn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${evTitle}&details=${evDetails}&location=${evLoc}`;
      }

      // Close Checkout Modal & Catering Cart Drawer
      closeCheckoutModal();
      closeCateringDrawer();

      // Open Manifest Modal
      const manifestModal = document.getElementById('catManifestModal');
      if (manifestModal) {
        manifestModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      showToast(`✓ Banquet #${bookingRef} Confirmed in 60s! Zero email back-and-forth required.`, 7000);
    });

    // Close Manifest Modal
    const manifestCloseBtn = document.getElementById('catManifestCloseBtn');
    const manifestDoneBtn = document.getElementById('catManifestDoneBtn');
    const manifestBackdrop = document.getElementById('catManifestBackdrop');
    const manifestModal = document.getElementById('catManifestModal');

    function closeManifest() {
      manifestModal?.classList.remove('open');
      document.body.style.overflow = '';
    }

    manifestCloseBtn?.addEventListener('click', closeManifest);
    manifestDoneBtn?.addEventListener('click', closeManifest);
    manifestBackdrop?.addEventListener('click', closeManifest);

    // Global Expositions for onclick handlers
    window.fhApp.changeCatDish = (dishId, delta) => changeAllocation(dishId, delta);
    window.fhApp.feedCatRemaining = (dishId) => feedRemaining(dishId);
    window.fhApp.removeCatDish = (dishId) => {
      delete allocations[dishId];
      renderCateringStudio();
    };

    // Cart Drawer Toggle Logic (Mobile & Tablet)
    const receiptDock = document.getElementById('catReceiptDock');
    const receiptBackdrop = document.getElementById('catReceiptBackdrop');
    const receiptCloseBtn = document.getElementById('catReceiptCloseBtn');

    function openCateringDrawer() {
      if (window.innerWidth <= 1040) {
        receiptDock?.classList.add('open');
        receiptBackdrop?.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        receiptDock?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function closeCateringDrawer() {
      receiptDock?.classList.remove('open');
      receiptBackdrop?.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('catMfbScrollBtn')?.addEventListener('click', openCateringDrawer);
    document.getElementById('catTrackerCartBtn')?.addEventListener('click', openCateringDrawer);
    receiptCloseBtn?.addEventListener('click', closeCateringDrawer);
    receiptBackdrop?.addEventListener('click', closeCateringDrawer);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1040) {
        closeCateringDrawer();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && receiptDock?.classList.contains('open')) {
        closeCateringDrawer();
      }
    });

    // Initial Render
    renderCateringStudio();
  }

  // --------------------------------------------------------------------------
  // 18. URL Hash Support for Direct Collection Deep-Linking & Initialization
  // --------------------------------------------------------------------------
  function handleHashNavigation() {
    const rawHash = window.location.hash.replace('#', '').trim();
    if (rawHash && collectionMeta[rawHash]) {
      setCollection(rawHash, true);
    }
  }

  window.addEventListener('hashchange', handleHashNavigation);

  // Check initial hash on load
  if (window.location.hash) {
    const initHash = window.location.hash.replace('#', '').trim();
    if (collectionMeta[initHash]) {
      setCollection(initHash, false);
    }
  }

  initProductDetailPage();
  initSalesDepartmentPage();
  initCateringWorkflow();
  updateCartUI();
});

