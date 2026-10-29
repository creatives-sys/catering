/**
 * FRANK & HARRI â€” ULTRA-MINIMAL LUXURY ATELIER
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
      desc: 'Melbourneâ€™s most coveted cakes and morning pastries â€” from the legendary 5-layer Bruce Chocolate Cake to cultured Lescure croissants and burnt Basque cheesecake.'
    },
    'birthday-cakes': {
      title: 'Birthday Cakes',
      eyebrow: 'Celebrations & Milestones',
      crumb: 'Birthday Cakes',
      desc: 'Tall celebratory masterpieces, nostalgic funfetti sponges, bespoke sablÃ© numbers, floral buttercream, and complimentary chocolate message plaques.'
    },
    'gluten-free': {
      title: 'Gluten-Free Atelier',
      eyebrow: 'Naturally Gluten-Free',
      crumb: 'Gluten-Free',
      desc: 'Exquisite flourless citrus tortes, Italian almond ricotta cakes, San SebastiÃ¡n burnt cheesecake, and airy chantilly pavlovas crafted with dedicated gluten-free procedures.'
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
      desc: 'Generous charcuterie grazing platters, handmade warm quiches, flaky pork & fennel sausage rolls, poached chicken ribbon sandwiches, and kidâ€™s party packages.'
    }
  };

  const products = [
    {
      id: 'audrey-vintage-cake',
      name: 'Audrey â€” Vintage Lambeth Cake',
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
        { name: '6" Petite', serves: 'Serves 8â€“10', price: 149.00 },
        { name: '8" Grand', serves: 'Serves 16â€“20', price: 219.00 },
        { name: '10" Banquet', serves: 'Serves 28â€“32', price: 310.00 }
      ]
    },
    {
      id: 'jane-layer-cake',
      name: 'Jane â€” Pastel Buttercream Rosette Cake',
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
        { name: '6" Petite', serves: 'Serves 8â€“10', price: 145.00 },
        { name: '8" Grand', serves: 'Serves 18â€“20', price: 225.00 },
        { name: '10" Banquet', serves: 'Serves 28â€“30', price: 329.00 }
      ]
    },
    {
      id: 'hazel-layer-cake',
      name: 'Hazel â€” Ferrero Rocher & Praline Cake',
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
        { name: '6" Petite', serves: 'Serves 8â€“10', price: 159.00 },
        { name: '8" Grand', serves: 'Serves 18â€“20', price: 249.00 },
        { name: '10" Banquet', serves: 'Serves 28â€“30', price: 339.00 }
      ]
    },
    {
      id: 'focaccia-pesto',
      name: 'House Focaccia â€” Pesto, Mozzarella & Stracciatella',
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
      name: 'House Focaccia â€” Harissa, Salami & Roast Peppers',
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
      description: 'Our most iconic chocolate cake. Five whisper-thin layers of rich buttermilk chocolate cake bound by luscious Belgian chocolate fudge frosting. Decadent, balanced, and Melbourneâ€™s most beloved celebration layer cake.',
      flavours: 'Chocolate buttermilk sponge, Belgian dark chocolate fudge, single origin cocoa',
      allergens: 'Contains gluten, dairy, egg. Facility handles nuts.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: '6" Petite', serves: 'Serves 7â€“8', price: 109.00 },
        { name: '9" Grand', serves: 'Serves 12â€“14', price: 159.00 },
        { name: '12" Banquet', serves: 'Serves 20â€“22', price: 209.00 }
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
        { name: '6" Petite', serves: 'Serves 7â€“8', price: 109.00 },
        { name: '9" Grand', serves: 'Serves 12â€“14', price: 159.00 },
        { name: '12" Banquet', serves: 'Serves 20â€“22', price: 259.00 }
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
        { name: '6" Petite', serves: 'Serves 7â€“8', price: 100.00 },
        { name: '8" Classic', serves: 'Serves 10â€“12', price: 145.00 }
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
      description: 'Custom number or monogram cake constructed with crisp almond sablÃ© layers, piped vanilla bean Swiss meringue buttercream, macarons, fresh raspberries, meringue kisses, and fresh florals.',
      flavours: 'Vanilla bean sablÃ© biscuit, Swiss buttercream, raspberries, macarons',
      allergens: 'Contains gluten, dairy, egg, almonds.',
      leadTime: '72h Pre-order',
      sizes: [
        { name: 'Single Digit', serves: 'Serves 12â€“15', price: 159.00 },
        { name: 'Double Digit', serves: 'Serves 24â€“30', price: 289.00 }
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
        { name: '5" Three-Layer', serves: 'Serves 6â€“8', price: 109.00 }
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
      description: 'Caramelised, deeply browned exterior with a molten, ultra-creamy vanilla centre. Baked fresh daily following traditional San SebastiÃ¡n techniques. Naturally gluten-free.',
      flavours: 'Cream cheese, Madagascar vanilla, organic eggs',
      allergens: 'Contains dairy, egg. Naturally gluten-free.',
      leadTime: '24h Pre-order',
      sizes: [
        { name: '8" Whole', serves: 'Serves 8â€“10', price: 78.00 }
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
        { name: '8" Whole', serves: 'Serves 8â€“10', price: 72.90 }
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
        { name: '8" Whole', serves: 'Serves 8â€“10', price: 72.90 }
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
        { name: '8" Whole', serves: 'Serves 8â€“10', price: 72.90 }
      ]
    },
    {
      id: 'pavlova-dessert',
      name: 'Pavlova with Mascarpone CrÃ¨me & Berries',
      category: 'cakes',
      categoryLabel: 'Traditional Australian Desserts (GF)',
      collections: ['birthday-cakes', 'gluten-free'],
      dietary: ['gluten-free', 'vegetarian', 'nut-free'],
      leadTimeKey: '48h',
      price: 39.00,
      image: 'assets/images/real/pavlova-dessert.jpg',
      description: 'Crisp marshmallow meringue shell piled high with whipped vanilla mascarpone crÃ¨me, tangy passionfruit curd, and fresh seasonal Australian berries.',
      flavours: 'Meringue, mascarpone crÃ¨me, passionfruit, fresh berries',
      allergens: 'Contains dairy, egg. Naturally gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Whole Pavlova', serves: 'Serves 6â€“8', price: 39.00 }
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
      description: 'Crisp sweet shortcrust sablÃ© pastry filled with sharp Meyer lemon curd and crowned with torched Swiss meringue peaks.',
      flavours: 'Meyer lemon curd, all-butter sablÃ©, Swiss meringue',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '24h Pre-order',
      sizes: [
        { name: '7" Tart', serves: 'Serves 6â€“8', price: 38.00 }
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
        { name: 'Box of 12', serves: 'Serves 10â€“12', price: 60.00 }
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
        { name: 'Box of 12', serves: 'Serves 10â€“12', price: 74.40 }
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
        { name: 'Half Slab', serves: 'Serves 4â€“6', price: 25.00 },
        { name: 'Whole Slab', serves: 'Serves 8â€“12', price: 45.00 }
      ]
    },
    {
      id: 'focaccia-pesto',
      name: 'Focaccia â€” Pesto, Mozzarella & Stracciatella',
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
        { name: 'Whole Slab', serves: 'Serves 8â€“12', price: 65.00 }
      ]
    },
    {
      id: 'focaccia-harissa',
      name: 'Focaccia â€” Harissa, Salami & Roast Peppers',
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
        { name: 'Whole Slab', serves: 'Serves 8â€“12', price: 65.00 }
      ]
    },
    {
      id: 'ham-cheese-croissant',
      name: 'Leg Ham & GruyÃ¨re Croissant',
      category: 'savoury',
      categoryLabel: 'All-Day Brunch',
      collections: ['pastries'],
      dietary: ['nut-free'],
      leadTimeKey: 'today',
      price: 14.50,
      image: 'assets/images/hero-catering.png',
      description: 'Stuffed with artisan free-range shaved leg ham, aged GruyÃ¨re and Swiss cheese, finished with our house honey-mustard mayonnaise.',
      flavours: 'Free-range leg ham, GruyÃ¨re, honey mustard mayo',
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
        { name: 'Platter Bowl', serves: 'Serves 6â€“8', price: 55.00 }
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
        { name: 'Platter Bowl', serves: 'Serves 6â€“8', price: 55.00 }
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
        { name: 'Small (Serves 6â€“8)', serves: 'Serves 6â€“8', price: 65.00 },
        { name: 'Medium (Serves 10â€“15)', serves: 'Serves 10â€“15', price: 115.00 },
        { name: 'Large (Serves 20â€“25)', serves: 'Serves 20â€“25', price: 170.00 }
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
      description: 'Slow-baked honey-glazed Tasmanian Atlantic salmon served with dill crÃ¨me fraÃ®che, pomegranate seeds, toasted almonds, and fresh garden herb salsa.',
      flavours: 'Atlantic salmon, dill crÃ¨me fraÃ®che, pomegranate, herb salsa',
      allergens: 'Contains fish (salmon), dairy, tree nuts (almonds). Gluten-free.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter (Serves 8â€“10)', serves: 'Serves 8â€“10', price: 180.00 }
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
        { name: 'Medium Box', serves: 'Serves 8â€“10', price: 175.00 },
        { name: 'Grand Box', serves: 'Serves 15â€“20', price: 265.00 }
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
      description: 'Twenty bite-sized quiches in buttery shortcrust pastry: Lorraine with smoky bacon & GruyÃ¨re, and Forest mushroom with thyme & goats curd.',
      flavours: 'Free-range eggs, cream, bacon, mushrooms, herbs',
      allergens: 'Contains gluten, dairy, egg.',
      leadTime: '48h Notice',
      sizes: [
        { name: 'Platter of 20', serves: 'Serves 10â€“15', price: 120.00 }
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
        { name: 'Platter of 20', serves: 'Serves 10â€“15', price: 80.00 }
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
        { name: 'Platter of 20', serves: 'Serves 10â€“12', price: 99.00 }
      ]
    },
    {
      id: 'fairy-bread-platter',
      name: 'Classic Artisan Fairy Bread (50 pc)',
      category: 'kids',
      categoryLabel: 'Kidâ€™s Party Fun',
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
        { name: 'Platter of 50', serves: 'Serves 15â€“20', price: 49.00 }
      ]
    },
    {
      id: 'mini-sprinkles-cupcakes',
      name: 'Mini Celebration Cupcakes (12 pk)',
      category: 'kids',
      categoryLabel: 'Kidâ€™s Party Sweets',
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
        { name: 'Platter of 20', serves: 'Serves 15â€“20', price: 75.00 }
      ]
    },
    {
      id: 'kids-party-grande-package',
      name: 'Kidâ€™s Party Catering Package â€” Grande',
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
        { name: 'Grande Package (15-20 Kids)', serves: '15â€“20 Kids', price: 670.00 },
        { name: 'Petite Package (8-10 Kids)', serves: '8â€“10 Kids', price: 350.00 }
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
        meterDiff.innerHTML = '<span class="cart-meter-unlocked">âœ“ Free Melbourne Metro Delivery Unlocked!</span>';
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
              <button type="button" class="cart-item-remove-btn" onclick="window.fhApp.removeFromCart(${index})" style="background: none; border: none; font-size: 0.85rem; color: #888; cursor: pointer; padding: 2px 6px; border-radius: 4px;" title="Remove creation" aria-label="Remove item">âœ•</button>
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
                <button class="qty-btn" onclick="window.fhApp.changeQty(${index}, -1)" aria-label="Decrease quantity">âˆ’</button>
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
      '50to100': 'Price: $50â€“$100',
      '100to150': 'Price: $100â€“$150',
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
          <div style="font-size: 2.2rem; margin-bottom: 0.75rem; color: var(--fh-primary-dark);">âœ¦</div>
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
              <span class="product-card-dot">Â·</span>
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
            <button class="chip-remove-btn" onclick="window.fhApp.clearFilter('${c.key}')" aria-label="Remove filter ${c.label}">âœ•</button>
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
  // 5. Pierre HermÃ© Paris Style Category Navigation & Search Handlers
  // --------------------------------------------------------------------------
  const headerCatLinks = document.querySelectorAll('.ph-cat-link');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchSubmitBtn = document.getElementById('searchSubmitBtn');
  const headerSearchToggleBtn = document.getElementById('headerSearchToggleBtn');
  const phSearchDrawer = document.getElementById('phSearchDrawer');
  const phSearchCloseBtn = document.getElementById('phSearchCloseBtn');

  // Pierre HermÃ© Category Navigation Bar Click Events
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
    { name: '6"', serves: 'Serves 7â€“8', price: 109.00 },
    { name: '9"', serves: 'Serves 12â€“14', price: 159.00 },
    { name: '12"', serves: 'Serves 20â€“22', price: 209.00 }
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
      if (recDetail) recDetail.textContent = 'Comfortably serves 7â€“8 generous dessert portions (1" Ã— 2" Ã— 6"). Perfect for intimate dinners and family gatherings.';
    } else if (guests <= 14) {
      if (recSize) recSize.textContent = '9" Signature Cake';
      if (recDetail) recDetail.textContent = 'Our most popular celebration size! Yields 12â€“14 dessert portions or up to 25 coffee/canape serves. Ideal for milestone celebrations.';
    } else if (guests <= 22) {
      if (recSize) recSize.textContent = '12" Celebration Cake';
      if (recDetail) recDetail.textContent = 'A centerpiece cake delivering 20â€“22 full dessert slices or 40+ cocktail event portions. Handcrafted in five exquisite tall layers.';
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
      if (journeyStep === 1) journeyBtnNext.innerHTML = '<span>Continue to Fulfillment</span><span>â†’</span>';
      else if (journeyStep === 2) journeyBtnNext.innerHTML = '<span>Continue to Gift Note</span><span>â†’</span>';
      else if (journeyStep === 3) journeyBtnNext.innerHTML = '<span>Review & Confirm</span><span>â†’</span>';
      else if (journeyStep === 4) journeyBtnNext.innerHTML = '<span>Confirm & Complete Reservation ðŸ”’</span>';
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
      const slotStr = firstItem.timeSlot || 'Morning Â· 8:00am â€“ 10:30am';
      const methodStr = journeyFulfillment === 'pickup' ? 'Boutique Pickup at 259 High St Kew' : 'Refrigerated Metro Courier';
      confirmedDateTime.textContent = `${dateStr} Â· ${slotStr} (${methodStr})`;
    }

    const reviewList = document.getElementById('journeyReviewItemsList');
    if (reviewList) {
      reviewList.innerHTML = cart.map(item => `
        <div class="journey-review-row">
          <div>
            <div class="journey-review-item-name">${item.qty}Ã— ${item.name}</div>
            <div class="journey-review-item-meta">
              ${item.size ? `<span>Format: ${item.size}</span>` : ''}
              ${item.flavour ? ` Â· <span>Flavour: ${item.flavour}</span>` : ''}
              ${item.hasPlaque ? `<br><span style="color: var(--fh-primary-dark); font-style: italic;">Plaque: "${item.plaqueText || 'Included'}"</span>` : ''}
              ${item.date ? `<br><small style="color: var(--fh-charcoal-muted);">${item.date} Â· ${item.timeSlot || ''}</small>` : ''}
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
        const eventTitle = encodeURIComponent(`Frank & Harri Kew â€” ${journeyOccasion} Celebration Order`);
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
      <span class="toast-icon">âœ“</span>
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
        if (cinemaPlayIcon) cinemaPlayIcon.textContent = 'â¸ Pause';
      } else {
        atelierVideo.pause();
        if (cinemaPlayIcon) cinemaPlayIcon.textContent = 'â–¶ Play';
      }
    });

    cinemaMuteBtn?.addEventListener('click', () => {
      atelierVideo.muted = !atelierVideo.muted;
      if (cinemaMuteIcon) {
        cinemaMuteIcon.textContent = atelierVideo.muted ? 'ðŸ”‡ Unmute' : 'ðŸ”Š Mute';
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
    document.title = `${product.name} â€” Frank & Harri Patisserie Kew Â· Melbourne`;
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

    // Selection state (defaults to valid size and flavour, no popup required)
    const mockupSelections = {
      size: true,
      flavour: true,
      plaque: true
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
    let selectedSlot = 'Morning Â· 8:00am â€“ 10:30am';
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
        sumSize.textContent = `${selectedSize.name} Â· ${selectedSize.serves}`;
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
      if (addBtnPrice) addBtnPrice.textContent = `â€” $${total.toFixed(2)}`;
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
        if (pdpSumSize) pdpSumSize.textContent = `${selectedSize.name} Â· ${selectedSize.serves}`;
        if (modalNavSize) modalNavSize.classList.add('done');
        if (modalDotSize) modalDotSize.textContent = 'âœ“';
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
        if (modalDotFlavour) modalDotFlavour.textContent = 'âœ“';
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
        if (modalDotPlaque) modalDotPlaque.textContent = 'âœ“';
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
        if (modalDotTouch) modalDotTouch.textContent = 'âœ“';
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
        if (modalDotNotes) modalDotNotes.textContent = 'âœ“';
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

      // Add to Bag Button State - always enabled for instant purchase
      const addBtn = document.getElementById('pdpAddToCartBtn');
      const addBtnText = document.getElementById('pdpAddBtnText');
      if (addBtn) {
        addBtn.classList.remove('disabled');
        addBtn.setAttribute('aria-disabled', 'false');
      }
      if (addBtnText) {
        addBtnText.textContent = 'Add to Shopping Bag';
      }
    }

    const sizesGrid = document.getElementById('pdpSizesGrid');
    if (sizesGrid) {
      if (product.sizes && product.sizes.length > 0) {
        sizesGrid.innerHTML = product.sizes.map((s, idx) => `
          <button class="pdp-size-btn ${idx === 0 ? 'active' : ''}" type="button" data-size-idx="${idx}">
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
          <button class="pdp-size-btn active" type="button">
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

    // Step 2: Direct Flavour Dropdown & Pills
    const flavourGroup = document.getElementById('pdpFlavourGroup');
    if (flavourGroup) {
      flavourGroup.style.display = isCakeCreation ? 'flex' : 'none';
    }
    const flavourSelect = document.getElementById('pdpFlavourSelect');
    if (flavourSelect) {
      flavourSelect.addEventListener('change', (e) => {
        selectedFlavour = e.target.value;
        mockupSelections.flavour = true;
        updateCreationSummary();
        updatePriceDisplay();
      });
    }

    const flavourPills = document.querySelectorAll('#pdpFlavourPills .pdp-flavour-pill-card, #pdpFlavourPills .pdp-min-pill, #toolPanelFlavour .pdp-min-pill, .pdp-options-minimal-row .pdp-min-pill');
    flavourPills.forEach(pill => {
      pill.addEventListener('click', () => {
        flavourPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedFlavour = pill.getAttribute('data-flavour') || pill.textContent.trim();
        if (flavourSelect) flavourSelect.value = selectedFlavour;
        mockupSelections.flavour = true;
        updateCreationSummary();
        updateMockupProgress();
      });
    });

    // Step 3: Complimentary Chocolate Inscription Plaque (Sleek Collapsible Toggle)
    const plaqueSection = document.getElementById('pdpPlaqueGroup') || document.getElementById('pdpPlaqueSection');
    const plaqueToggle = document.getElementById('pdpPlaqueToggle');
    const plaqueDrawer = document.getElementById('pdpPlaqueDrawer');
    const plaqueInput = document.getElementById('pdpPlaqueInput');
    const plaqueCount = document.getElementById('pdpPlaqueCount');
    const plaqueLiveText = document.getElementById('pdpPlaqueLiveText');
    const plaqueLiveOverlay = document.getElementById('pdpPlaqueLiveOverlay');

    if (plaqueSection) {
      plaqueSection.style.display = (isCakeCreation || (product.collections && product.collections.includes('birthday-cakes'))) ? 'flex' : 'none';
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
        showStudioToast('âœ“ All 3 Mockups Selected! Ready to Add to Bag');
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
    // Direct Selection Configurator (Frictionless, no popups)
    // --------------------------------------------------------------------------
    window.openSelectionPopup = function() {
      const sizeGroup = document.getElementById('pdpSizeGroup') || document.getElementById('pdpAddToCartBtn');
      if (sizeGroup) sizeGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    window.closeSelectionPopup = function() {};
    window.switchPopupTab = function() {};
    window.selectSketchTab = window.openSelectionPopup;

    // Notes textarea input sync
    const notesInput = document.getElementById('pdpOrderNotes');

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

    // Direct Add to Bag Action (Instant, frictionless, no blocking popup)
    function handleAddToCart() {
      const hasPlaque = !!(plaqueToggle && plaqueToggle.checked);
      const plaqueText = hasPlaque ? (plaqueInput?.value.trim() || 'Happy Birthday!') : 'Classic Atelier Finish';
      const totalAmount = calculateTotal();
      const orderNotes = notesInput ? notesInput.value.trim() : '';

      addToCart({
        id: product.id,
        name: `${product.name} (${selectedSize.name})`,
        price: totalAmount / quantity,
        image: product.image,
        size: `${selectedSize.name} Â· ${selectedSize.serves}`,
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

      showStudioToast(`âœ“ ${product.name} added to Shopping Bag!`);

      // Visual micro-interaction feedback on Add to Bag button
      const addBtn = document.getElementById('pdpAddToCartBtn');
      const addBtnText = document.getElementById('pdpAddBtnText');
      if (addBtn && addBtnText) {
        const origText = addBtnText.textContent;
        addBtn.classList.add('added');
        addBtnText.textContent = 'âœ“ Added to Shopping Bag!';
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

      // Automatically open shopping bag drawer for instant clarity
      const cartDrawer = document.getElementById('cartDrawer');
      const modalBackdrop = document.getElementById('modalBackdrop') || document.getElementById('cartBackdrop');
      if (cartDrawer) {
        cartDrawer.classList.add('open');
        if (modalBackdrop) modalBackdrop.classList.add('active');
      }
    }

    document.getElementById('pdpAddToCartBtn')?.addEventListener('click', handleAddToCart);
    document.getElementById('pdpStickyBtn')?.addEventListener('click', handleAddToCart);

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
              <span class="product-card-dot">Â·</span>
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
    // ==========================================================================
  // 17. COMPLETE FRANK & HARRI CATERING WORKFLOW & 3D OPTION ORDER BUILDER
  // ==========================================================================
  function initCateringWorkflow() {
    const studioSection = document.getElementById('cateringStudioSection');
    if (!studioSection) return;

    const DIET_FULL_NAMES = {
      'V': 'Vegetarian',
      'VG': 'Vegan',
      'DF': 'Dairy free',
      'GF': 'Gluten free',
      'GFO': 'Gluten free option available',
      'VO': 'Vegetarian option available',
      'VGO': 'Vegan option available'
    };

    // Full 13-Page Catering Menu Dataset
    const cateringDishes = [
      // 1. PATISSERIE
      {
        id: 'pat-pastries',
        name: 'Mini assorted pastries (pain au chocolat, almond croissant, traditional croissant, seasonal danish)',
        category: 'patisserie',
        categoryLabel: 'Housemade Pâtisserie',
        dietary: 'V',
        price: 6.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Warm flaky all-butter French viennoiseries with chocolate batons, almond frangipane, and seasonal fruit danish.',
        options: []
      },
      {
        id: 'pat-scones',
        name: 'Housemade scones, raspberry jam, cream',
        category: 'patisserie',
        categoryLabel: 'Afternoon Tea',
        dietary: 'V',
        price: 8.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Traditional fluffy English scones served with Frank & Harri house-cooked raspberry jam and double cream.',
        options: []
      },
      {
        id: 'pat-melting-moment',
        name: 'Passionfruit melting moment',
        category: 'patisserie',
        categoryLabel: 'Artisan Biscuit',
        dietary: 'V',
        price: 4.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Tender buttery shortbread biscuits sandwiched with tangy fresh passionfruit buttercream.',
        options: []
      },
      {
        id: 'pat-house-cakes',
        name: 'Assorted house made cakes (flourless orange, carrot, coconut & berry)',
        category: 'patisserie',
        categoryLabel: 'Cake Slices',
        dietary: 'V/GFO',
        price: 7.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per slice',
        image: 'assets/images/real/flourless-orange-cake.png',
        description: 'Indulgent cake slices including flourless whole Valencia orange, spiced carrot cake, and coconut berry slice.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 0, min: 6 }
        ]
      },
      {
        id: 'pat-cupcakes',
        name: 'Assorted cupcakes',
        category: 'patisserie',
        categoryLabel: 'Boutique Cupcakes',
        dietary: 'V/VO/GFO',
        price: 7.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/vanilla-raspberry-cupcakes.png',
        description: 'Delicate vanilla bean and Belgian chocolate sponge topped with swirled buttercream rosettes and edible petals.',
        options: [
          { key: 'vo', label: 'Vegetarian option', priceAdd: 0, min: 6 },
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'pat-cinnamon-scrolls',
        name: 'Cinnamon scrolls',
        category: 'patisserie',
        categoryLabel: 'Warm Brioche',
        dietary: 'V',
        price: 8.70,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Soft layered brioche rolled with Korintje cinnamon, brown sugar glaze, and vanilla cream cheese icing.',
        options: []
      },
      {
        id: 'pat-choc-cookie',
        name: 'Salted choc chip cookie',
        category: 'patisserie',
        categoryLabel: 'Handmade Cookie',
        dietary: 'V',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Chewy brown-butter cookie dough studded with 70% dark Belgian chocolate chunks and Maldon sea salt flakes.',
        options: []
      },
      {
        id: 'pat-pecan-cookie',
        name: 'Chocolate pecan cookie',
        category: 'patisserie',
        categoryLabel: 'Vegan & Gluten-Free Cookie',
        dietary: 'VG/GF',
        price: 7.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: '100% plant-based and gluten-free cookie rich in cocoa, roasted Australian pecans, and dark chocolate drops.',
        options: []
      },
      {
        id: 'pat-doughnut-jam',
        name: 'Brioche doughnut, crÃ¨me pÃ¢tissiere, raspberry jam',
        category: 'patisserie',
        categoryLabel: 'Handcrafted Doughnut',
        dietary: 'V',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Slow-proved sugar-dusted brioche filled with silky vanilla bean custard and tart raspberry preserves.',
        options: []
      },
      {
        id: 'pat-doughnut-stuffed',
        name: 'Brioche stuffed doughnuts (Lemon curd / Nutella / Passionfruit or Raspberry)',
        category: 'patisserie',
        categoryLabel: 'Flavour Doughnuts',
        dietary: 'V',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Selection of our signature filled brioche doughnuts with citrus curd, rich Nutella hazelnut, and fruit purÃ©es.',
        options: []
      },
      {
        id: 'pat-muffins',
        name: 'Assorted house made muffins (sweet or savoury)',
        category: 'patisserie',
        categoryLabel: 'Morning Muffins',
        dietary: 'V',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Freshly baked blueberry buttermilk or pumpkin, feta and rosemary savoury muffins.',
        options: []
      },
      {
        id: 'pat-banana-bread',
        name: 'Banana bread, cream cheese icing, berries, banana chips',
        category: 'patisserie',
        categoryLabel: 'Artisan Loaf Slice',
        dietary: 'V',
        price: 9.80,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per slice',
        image: 'assets/images/real/cake-tasting-box.png',
        description: 'Toasted spiced Cavendish banana bread crowned with whipped cream cheese, dried fruit, and crunchy banana chips.',
        options: []
      },
      {
        id: 'pat-cheesymite',
        name: 'Cheesymite scroll',
        category: 'patisserie',
        categoryLabel: 'Savoury Brioche',
        dietary: 'V',
        price: 11.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Fluffy golden spiraled dough packed with vintage Victorian cheddar and savory Vegemite butter.',
        options: []
      },

      // 2. BRUNCH
      {
        id: 'brunch-avo-toast',
        name: 'Avo on toast, salsa verde, roasted tomatoes & feta',
        category: 'brunch',
        categoryLabel: 'Signature Brunch',
        dietary: 'V/GFO/VGO',
        price: 10.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per portion',
        image: 'assets/images/real/focaccia-pesto.png',
        description: 'Crushed ripe Hass avocado on house sourdough with herbed salsa verde, slow roasted truss tomatoes, and Danish feta.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 },
          { key: 'vgo', label: 'Vegan option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'brunch-salmon-tartine',
        name: 'Smoked salmon tartine, dill creme fraiche, capers, lemon, rocket',
        category: 'brunch',
        categoryLabel: 'Artisan Tartine',
        dietary: 'GFO',
        price: 12.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per portion',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Tasmanian cold-smoked salmon ribbons on seeded rye sourdough with dill creme fraiche and crispy fried capers.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'brunch-pea-fritter',
        name: 'Pea & halloumi fritter, whipped ricotta, slow roasted tomatoes, micro herbs',
        category: 'brunch',
        categoryLabel: 'Warm Fritters',
        dietary: 'V/GFO',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Crispy green pea and Cypriot halloumi patties topped with whipped lemon ricotta and baby herbs.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'brunch-slider-bacon',
        name: 'Brioche slider, fried egg, bacon, cheddar, relish',
        category: 'brunch',
        categoryLabel: 'Warm Sliders',
        dietary: '',
        price: 9.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per slider',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Warm glazed brioche bun filled with free-range egg, crispy bacon rasher, aged cheddar, and house relish.',
        options: []
      },
      {
        id: 'brunch-slider-halloumi',
        name: 'Brioche slider, halloumi, relish, avocado, tomato, cos',
        category: 'brunch',
        categoryLabel: 'Warm Sliders',
        dietary: 'V',
        price: 9.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per slider',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Seared halloumi cheese with crushed avocado, vine tomato, baby cos lettuce, and spiced tomato relish.',
        options: []
      },
      {
        id: 'brunch-granola',
        name: 'Granola, coconut yoghurt, seasonal fruit',
        category: 'brunch',
        categoryLabel: 'Breakfast Pots',
        dietary: 'VGO/GFO',
        price: 8.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per cup',
        image: 'assets/images/real/cypriot-grain-salad.png',
        description: 'Oven-toasted seed and nut granola layered with creamy probiotic coconut yoghurt and poached seasonal fruits.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 },
          { key: 'vgo', label: 'Vegan option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'brunch-quiche-bacon',
        name: 'Mini quiche, streaky bacon, cheddar, parmesan, chives',
        category: 'brunch',
        categoryLabel: 'Individual Tartlets',
        dietary: 'GFO',
        price: 6.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per quiche',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Flaky shortcrust pastry cups filled with savoury egg custard, crisp smoked bacon, and fresh chives.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 0.60, min: 6 }
        ]
      },
      {
        id: 'brunch-quiche-feta',
        name: 'Mini quiche, cherry tomatoes, feta, caramelised onion',
        category: 'brunch',
        categoryLabel: 'Individual Tartlets',
        dietary: 'V/GFO',
        price: 6.20,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per quiche',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Butter shortcrust filled with sweet slow-cooked balsamic onions, semi-dried cherry tomatoes, and crumbly feta.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 0.60, min: 6 }
        ]
      },
      {
        id: 'brunch-croissants-box',
        name: 'Mini Housemade Croissants (Ham / Tomato / Mushroom)',
        category: 'brunch',
        categoryLabel: 'Filled Croissants',
        dietary: 'V',
        price: 9.50,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per croissant',
        image: 'assets/images/real/mini-croissants-box.png',
        description: 'Warm French butter mini croissants filled with ham & mustard; tomato & cheddar (V); or wild mushroom & goat cheese (V).',
        options: []
      },
      {
        id: 'brunch-bagels-box',
        name: 'Mini Bagels (Smoked Salmon / Egg Salad / Halloumi / Bacon)',
        category: 'brunch',
        categoryLabel: 'Petite Bagels',
        dietary: 'V',
        price: 10.50,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per bagel',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Toasted seeded mini bagels filled with gourmet choices: Smoked salmon ($11.90), Egg salad, Halloumi, or BLT.',
        options: []
      },
      {
        id: 'brunch-fruit-platter',
        name: 'Seasonal Fruit Platter',
        category: 'brunch',
        categoryLabel: 'Gourmet Fruit Platter',
        dietary: 'GF/VG',
        price: 65.00,
        min: 1,
        serves: 8,
        unitName: 'Small Platter',
        image: 'assets/images/hero-catering.png',
        description: 'Sliced seasonal melon, dragonfruit, berries, Australian grapes, and passionfruit halves beautifully arranged.',
        options: [
          { key: 'med', label: 'Medium (Serves 10â€“15)', priceAdd: 50.00, min: 1 },
          { key: 'large', label: 'Large (Serves 20â€“25)', priceAdd: 100.00, min: 1 }
        ]
      },
      {
        id: 'brunch-fruit-cups',
        name: 'Individual Fresh Fruit Cups',
        category: 'brunch',
        categoryLabel: 'Fresh Fruit',
        dietary: 'GF/VG',
        price: 8.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per cup',
        image: 'assets/images/hero-catering.png',
        description: 'Individual cups filled with fresh diced seasonal melon, berries, kiwi, and grapes with wooden forks.',
        options: []
      },

      // 3. SANDWICHES
      {
        id: 'sand-chicken',
        name: 'Poached chicken, honey mustard mayo, toasted almonds, greens',
        category: 'sandwiches',
        categoryLabel: 'Sandwiches & Ribbons',
        dietary: 'DF',
        price: 13.90,
        min: 3,
        serves: 2,
        unitName: 'per round',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Tender poached free-range chicken breast with honey-dijon aioli, toasted sliced almonds, and baby spinach.',
        options: [
          { key: 'ciabatta', label: 'Mini ciabatta or baguette ($6.60)', priceAdd: -7.30, min: 5 },
          { key: 'wrap', label: 'Rolled wrap halved ($13.90)', priceAdd: 0, min: 4 },
          { key: 'gf', label: 'Gluten-free ribbons ($14.90)', priceAdd: 1.00, min: 4 }
        ]
      },
      {
        id: 'sand-ham',
        name: 'Free range leg ham, swiss, tomato, honey mustard mayo',
        category: 'sandwiches',
        categoryLabel: 'Sandwiches & Ribbons',
        dietary: '',
        price: 13.90,
        min: 3,
        serves: 2,
        unitName: 'per round',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Shaved Victorian leg ham, Swiss cheese, vine-ripened tomatoes, and house mustard dressing.',
        options: [
          { key: 'ciabatta', label: 'Mini ciabatta or baguette ($6.60)', priceAdd: -7.30, min: 5 },
          { key: 'wrap', label: 'Rolled wrap halved ($13.90)', priceAdd: 0, min: 4 },
          { key: 'gf', label: 'Gluten-free ribbons ($14.90)', priceAdd: 1.00, min: 4 }
        ]
      },
      {
        id: 'sand-salad',
        name: 'Salad: tomato, cucumber, carrot, alfalfa, beetroot, swiss, mayo',
        category: 'sandwiches',
        categoryLabel: 'Sandwiches & Ribbons',
        dietary: 'V',
        price: 13.90,
        min: 3,
        serves: 2,
        unitName: 'per round',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crisp market vegetables, pickled baby beets, sliced cucumber, alfalfa sprouts, and swiss cheese.',
        options: [
          { key: 'ciabatta', label: 'Mini ciabatta or baguette ($6.60)', priceAdd: -7.30, min: 5 },
          { key: 'wrap', label: 'Rolled wrap halved ($13.90)', priceAdd: 0, min: 4 },
          { key: 'gf', label: 'Gluten-free ribbons ($14.90)', priceAdd: 1.00, min: 4 }
        ]
      },
      {
        id: 'sand-salmon',
        name: 'Smoked salmon, crÃ¨me fraÃ®che, tomato, rocket, pickled onion',
        category: 'sandwiches',
        categoryLabel: 'Sandwiches & Ribbons',
        dietary: '',
        price: 13.90,
        min: 3,
        serves: 2,
        unitName: 'per round',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Tasmanian smoked salmon with lemon dill spread, baby rocket, vine tomatoes, and quick-pickled eschalots.',
        options: [
          { key: 'ciabatta', label: 'Mini ciabatta or baguette ($6.60)', priceAdd: -7.30, min: 5 },
          { key: 'wrap', label: 'Rolled wrap halved ($13.90)', priceAdd: 0, min: 4 },
          { key: 'gf', label: 'Gluten-free ribbons ($14.90)', priceAdd: 1.00, min: 4 }
        ]
      },
      {
        id: 'sand-pumpkin',
        name: 'Roast pumpkin, hummus, halloumi, spinach, roasted peppers',
        category: 'sandwiches',
        categoryLabel: 'Sandwiches & Ribbons',
        dietary: 'V',
        price: 13.90,
        min: 3,
        serves: 2,
        unitName: 'per round',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Caramelized roast pumpkin, spiced chickpea hummus, seared halloumi cheese, and wood-roasted red bell peppers.',
        options: [
          { key: 'ciabatta', label: 'Mini ciabatta or baguette ($6.60)', priceAdd: -7.30, min: 5 },
          { key: 'wrap', label: 'Rolled wrap halved ($13.90)', priceAdd: 0, min: 4 },
          { key: 'gf', label: 'Gluten-free ribbons ($14.90)', priceAdd: 1.00, min: 4 }
        ]
      },
      {
        id: 'sand-egg',
        name: 'Egg salad, mayo, chives, avocado, lettuce',
        category: 'sandwiches',
        categoryLabel: 'Sandwiches & Ribbons',
        dietary: 'V',
        price: 13.90,
        min: 3,
        serves: 2,
        unitName: 'per round',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crushed free-range eggs with whole egg mayonnaise, fresh garden chives, sliced avocado, and tender butter lettuce.',
        options: [
          { key: 'ciabatta', label: 'Mini ciabatta or baguette ($6.60)', priceAdd: -7.30, min: 5 },
          { key: 'wrap', label: 'Rolled wrap halved ($13.90)', priceAdd: 0, min: 4 },
          { key: 'gf', label: 'Gluten-free ribbons ($14.90)', priceAdd: 1.00, min: 4 }
        ]
      },

      // 4. HOUSEMADE FOCACCIA
      {
        id: 'foc-rosemary',
        name: 'Rosemary, olive oil & sea salt focaccia',
        category: 'focaccia',
        categoryLabel: 'Artisan Focaccia',
        dietary: 'VG',
        price: 45.00,
        min: 1,
        serves: 14,
        unitName: 'Whole Slab (12â€“16 serves)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Naturally leavened sourdough focaccia with cold-pressed olive oil, rosemary needles, and Maldon flake sea salt.',
        options: [
          { key: 'mini', label: 'Mini focaccia individual ($7.90 ea)', priceAdd: -37.10, min: 10 }
        ]
      },
      {
        id: 'foc-pesto',
        name: 'Pesto, mozzarella, stracciatella focaccia',
        category: 'focaccia',
        categoryLabel: 'Artisan Focaccia',
        dietary: 'V',
        price: 65.00,
        min: 1,
        serves: 14,
        unitName: 'Whole Slab (12â€“16 serves)',
        image: 'assets/images/real/focaccia-pesto.png',
        description: 'House pine nut pesto, melted fior di latte mozzarella, and creamy cold Victorian stracciatella curd on warm focaccia.',
        options: [
          { key: 'mini', label: 'Mini focaccia individual ($8.90 ea)', priceAdd: -56.10, min: 10 }
        ]
      },
      {
        id: 'foc-harissa',
        name: 'Harissa, salami, roast peppers, mozzarella focaccia',
        category: 'focaccia',
        categoryLabel: 'Artisan Focaccia',
        dietary: '',
        price: 65.00,
        min: 1,
        serves: 14,
        unitName: 'Whole Slab (12â€“16 serves)',
        image: 'assets/images/real/focaccia-harissa.png',
        description: 'Smoky mild harissa paste, aged cured salami, wood-roasted red bell peppers, and melted mozzarella.',
        options: [
          { key: 'mini', label: 'Mini focaccia individual ($8.90 ea)', priceAdd: -56.10, min: 10 }
        ]
      },
      {
        id: 'foc-potato',
        name: 'Potato, goat cheese, rosemary focaccia',
        category: 'focaccia',
        categoryLabel: 'Artisan Focaccia',
        dietary: 'V',
        price: 65.00,
        min: 1,
        serves: 14,
        unitName: 'Whole Slab (12â€“16 serves)',
        image: 'assets/images/real/focaccia-classic.png',
        description: 'Wafer-thin mandoline-sliced golden potatoes, whipped goat curd, and fresh rosemary sprigs on golden crust.',
        options: [
          { key: 'mini', label: 'Mini focaccia individual ($8.90 ea)', priceAdd: -56.10, min: 10 }
        ]
      },

      // 5. SALADS
      {
        id: 'salad-cypriot',
        name: 'Cypriot grain salad: Farro, lentils, almonds, pine nuts, pumpkin seeds, herbs, pomegranate, labneh',
        category: 'salads',
        categoryLabel: 'Gourmet Salad Bowls',
        dietary: 'V',
        price: 55.00,
        min: 1,
        serves: 6,
        unitName: 'Small Bowl (4â€“6 serves)',
        image: 'assets/images/real/cypriot-grain-salad.png',
        description: 'Ancient farro and French lentils tossed with toasted almonds, pine nuts, fresh coriander, parsley, and lemon dressing.',
        options: [
          { key: 'med', label: 'Medium Bowl (Serves 10â€“15)', priceAdd: 57.00, min: 1 },
          { key: 'large', label: 'Large Bowl (Serves 15â€“22)', priceAdd: 110.00, min: 1 }
        ]
      },
      {
        id: 'salad-potato',
        name: 'Twice cooked potato salad with salsa verde mayo & crispy pancetta',
        category: 'salads',
        categoryLabel: 'Gourmet Salad Bowls',
        dietary: 'DF/GF',
        price: 55.00,
        min: 1,
        serves: 6,
        unitName: 'Small Bowl (4â€“6 serves)',
        image: 'assets/images/real/potato-salad.png',
        description: 'Twice-cooked chat potatoes in herbaceous green salsa verde aioli with crisp golden pancetta strips.',
        options: [
          { key: 'med', label: 'Medium Bowl (Serves 10â€“15)', priceAdd: 57.00, min: 1 },
          { key: 'large', label: 'Large Bowl (Serves 15â€“22)', priceAdd: 110.00, min: 1 }
        ]
      },
      {
        id: 'salad-supergreen',
        name: 'Green salad: kale, edamame, quinoa, cranberries, almonds, goat\'s feta, green goddess dressing',
        category: 'salads',
        categoryLabel: 'Gourmet Salad Bowls',
        dietary: 'GF/V/VGO',
        price: 55.00,
        min: 1,
        serves: 6,
        unitName: 'Small Bowl (4â€“6 serves)',
        image: 'assets/images/collection-salads.png',
        description: 'Tuscan kale and tricolour quinoa with creamy goat cheese, pepitas, edamame beans, and green goddess dressing.',
        options: [
          { key: 'med', label: 'Medium Bowl (Serves 10â€“15)', priceAdd: 57.00, min: 1 },
          { key: 'large', label: 'Large Bowl (Serves 15â€“22)', priceAdd: 110.00, min: 1 },
          { key: 'vgo', label: 'Vegan option (dairy-free)', priceAdd: 0, min: 1 }
        ]
      },

      // 6. PROTEINS & MAINS
      {
        id: 'prot-salmon',
        name: 'Atlantic baked salmon: honey glaze, dill crÃ¨me fraÃ®che, almonds, pomegranate, herb salsa',
        category: 'proteins',
        categoryLabel: 'Main Protein',
        dietary: 'GF',
        price: 25.90,
        min: 6,
        optMin: 6,
        serves: 1,
        unitName: 'per serve (110g)',
        image: 'assets/images/hero-catering.png',
        description: 'Oven-roasted Tasmanian salmon fillets glazed with raw clover honey, dill crÃ¨me fraÃ®che, and toasted almonds.',
        options: []
      },
      {
        id: 'prot-lamb',
        name: 'Slow cooked lamb: cranberry, onion & thyme w. pickled onion, herb salad',
        category: 'proteins',
        categoryLabel: 'Main Protein',
        dietary: 'GF',
        price: 27.90,
        min: 6,
        optMin: 6,
        serves: 1,
        unitName: 'per serve (150g)',
        image: 'assets/images/hero-catering.png',
        description: '12-hour braised Victorian lamb shoulder with tart cranberries, fresh thyme jus, and sumac pickled eschalots.',
        options: []
      },
      {
        id: 'prot-chicken-goujon',
        name: 'Parmesan crumbed chicken goujon, honey mustard aioli',
        category: 'proteins',
        categoryLabel: 'Warm Protein',
        dietary: 'GF',
        price: 7.90,
        min: 6,
        optMin: 6,
        serves: 1,
        unitName: 'per serve',
        image: 'assets/images/collection-kids.jpg',
        description: 'Free-range chicken breast strips coated in aged reggiano cheese crumb and fried until golden. 100% Gluten-free.',
        options: []
      },
      {
        id: 'prot-eggplant',
        name: 'Eggplant schnitzel, aioli, lemon',
        category: 'proteins',
        categoryLabel: 'Warm Protein',
        dietary: 'V/GF',
        price: 9.90,
        min: 6,
        optMin: 6,
        serves: 1,
        unitName: 'per serve',
        image: 'assets/images/collection-salads.png',
        description: 'Thick-cut roasted eggplant steaks crumbed in gluten-free panko with whole egg garlic aioli and lemon wedges.',
        options: []
      },
      {
        id: 'prot-tofu',
        name: 'Sticky tofu w. sweet\'n\'sour sauce, sesame & lime',
        category: 'proteins',
        categoryLabel: 'Warm Protein',
        dietary: 'VG/GF',
        price: 9.90,
        min: 6,
        optMin: 6,
        serves: 1,
        unitName: 'per serve (100g)',
        image: 'assets/images/collection-salads.png',
        description: 'Crispy pressed organic tofu cubes glazed in ginger sweet and sour reduction with toasted sesame seeds.',
        options: []
      },

      // 7. CANAPÃ‰S SAVOURY
      {
        id: 'can-rice-paper',
        name: 'Supergreen rice paper roll (avocado, mint, vermicelli, cucumber)',
        category: 'canapes',
        categoryLabel: 'Cold CanapÃ©',
        dietary: 'GF/VG',
        price: 6.50,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per roll',
        image: 'assets/images/collection-salads.png',
        description: 'Vietnamese rice paper wrap packed with crisp herbs, avocado, cucumber, and lime hoisin dipping sauce.',
        options: []
      },
      {
        id: 'can-arancini',
        name: 'Roast pumpkin, sage & mozzarella arancini, roasted garlic aioli',
        category: 'canapes',
        categoryLabel: 'Warm Canapé',
        dietary: 'V',
        price: 7.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Golden Italian risotto croquettes stuffed with sweet butternut pumpkin, sage butter, and melted mozzarella.',
        options: []
      },
      {
        id: 'can-truffle-croquette',
        name: 'Potato & truffle croquette, parmesan, aioli',
        category: 'canapes',
        categoryLabel: 'Warm Canapé',
        dietary: 'V',
        price: 7.50,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per piece',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Smooth truffled mashed potato croquettes rolled in crisp panko and dusted with grated aged parmesan.',
        options: []
      },
      {
        id: 'can-sausage-roll',
        name: 'Continental sausage roll, tomato relish',
        category: 'canapes',
        categoryLabel: 'Warm Canapé',
        dietary: '',
        price: 5.50,
        min: 10,
        optMin: 6,
        serves: 1,
        unitName: 'per roll',
        image: 'assets/images/real/mini-sausage-rolls.jpg',
        description: 'Signature all-butter puff pastry rolls stuffed with pork and fennel sausage meat and roasted onion.',
        options: []
      },
      {
        id: 'can-mini-tart-mushroom',
        name: 'Mini tart w. mushrooms, onion jam, goat\'s curd',
        category: 'canapes',
        categoryLabel: 'Savoury Tartlets',
        dietary: 'V/GFO',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per tart',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Petite shortcrust cases filled with sautÃ©ed wild forest mushrooms, caramelized onion, and soft goat cheese.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 0.50, min: 6 }
        ]
      },
      {
        id: 'can-mini-tart-ricotta',
        name: 'Mini tart w. whipped ricotta, roasted tomato, rosemary',
        category: 'canapes',
        categoryLabel: 'Savoury Tartlets',
        dietary: 'V/GFO',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per tart',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Whipped lemon ricotta tartlet topped with slow-roasted cherry tomatoes, garlic oil, and rosemary needles.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 0.50, min: 6 }
        ]
      },
      {
        id: 'can-pikelet-salmon',
        name: 'Dill pikelet, smoked salmon, pickled onion, crÃ¨me fraÃ®che, dill',
        category: 'canapes',
        categoryLabel: 'Boutique CanapÃ©s',
        dietary: 'GFO',
        price: 8.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per pikelet',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Fluffy house-made dill blini crowned with Tasmanian smoked salmon, crÃ¨me fraÃ®che, and pickled baby onions.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'can-bao-chicken',
        name: 'Fried chicken karaage bao, white slaw, pickled onion, coriander',
        category: 'canapes',
        categoryLabel: 'Steamed Bao Buns',
        dietary: 'GFO',
        price: 7.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per bao',
        image: 'assets/images/real/mini-pastries-box.png',
        description: 'Steamed lotus bao bun stuffed with crispy karaage chicken, creamy cabbage slaw, and sriracha kewpie mayo.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'can-tart-caprese',
        name: 'Caprese tart; blistered cherry tomatoes, burrata, house pesto',
        category: 'canapes',
        categoryLabel: 'Boutique CanapÃ©s',
        dietary: 'V/GFO',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per tart',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Crisp pastry shell filled with creamy torn burrata, sweet oven-blistered tomatoes, and basil pine nut pesto.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },

      // 8. SWEETS & DESSERT CUPS
      {
        id: 'sweet-raspberry-tart',
        name: 'Raspberry tart: short pastry, crÃ¨me pÃ¢tissiÃ¨re, fresh raspberries, white chocolate',
        category: 'desserts',
        categoryLabel: 'Pastry Tartlets',
        dietary: 'V/GFO',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per tart',
        image: 'assets/images/real/pavlova-dessert.jpg',
        description: 'Butter shortbread shell filled with vanilla bean pastry cream and piled with fresh local raspberries.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'sweet-mini-pavlova',
        name: 'Mini pavlova, summer berries, mascarpone, raspberry dust',
        category: 'desserts',
        categoryLabel: 'Australian Classic',
        dietary: 'V/GF',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per pavlova',
        image: 'assets/images/real/pavlova-dessert.jpg',
        description: 'Crisp marshmallow meringue base with whipped vanilla mascarpone, berries, and freeze-dried raspberry powder.',
        options: []
      },
      {
        id: 'sweet-lemon-meringue',
        name: 'Lemon meringue tart',
        category: 'desserts',
        categoryLabel: 'Pastry Tartlets',
        dietary: 'V/GFO',
        price: 7.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per tart',
        image: 'assets/images/real/lemon-ricotta-cake.png',
        description: 'Tangy citrus lemon curd in sweet crust crowned with torched French meringue peaks.',
        options: [
          { key: 'gfo', label: 'Gluten free option', priceAdd: 1.00, min: 6 }
        ]
      },
      {
        id: 'sweet-brownie-square',
        name: 'Callebaut & rye brownie square, milk chocolate ganache, raspberries',
        category: 'desserts',
        categoryLabel: 'Chocolate Treats',
        dietary: 'V',
        price: 6.90,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per square',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Ultra-fudgy Belgian dark chocolate brownie topped with milk chocolate ganache and fresh berries.',
        options: []
      },
      {
        id: 'cup-tiramisu',
        name: 'Tiramisu dessert cup: espresso soaked sponge, mascarpone, chocolate dusting',
        category: 'desserts',
        categoryLabel: 'Dessert Cup',
        dietary: 'V',
        price: 9.50,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per cup',
        image: 'assets/images/real/pavlova-dessert.jpg',
        description: 'Individual dessert glass layered with espresso savoiardi biscuits, whipped mascarpone zabaione, and cocoa.',
        options: []
      },
      {
        id: 'cup-biscoff',
        name: 'Layered Biscoff dessert cup: raspberries, berry compote, coconut yoghurt & Biscoff spread',
        category: 'desserts',
        categoryLabel: 'Vegan Dessert Cup',
        dietary: 'VG',
        price: 9.50,
        min: 12,
        optMin: 6,
        serves: 1,
        unitName: 'per cup',
        image: 'assets/images/real/pavlova-dessert.jpg',
        description: '100% plant-based dessert cup layered with Lotus speculoos spread, creamy coconut yoghurt, and berry compote.',
        options: []
      },

      // 9. CATERING BOXES
      {
        id: 'box-mini-sausage-rolls-20',
        name: 'Mini Sausage Rolls Box (20 pk)',
        category: 'boxes',
        categoryLabel: 'Ready-to-Serve Box (20 pk)',
        dietary: '',
        serves: 15,
        price: 70.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/real/mini-sausage-rolls.jpg',
        description: 'Warm flaky all-butter puff pastry rolls with seasoned pork & fennel mince and toasted sesame. Served with house relish.',
        options: []
      },
      {
        id: 'box-mini-pies-20',
        name: 'Mini Beef Pie Box (20 pk)',
        category: 'boxes',
        categoryLabel: 'Ready-to-Serve Box (20 pk)',
        dietary: '',
        serves: 15,
        price: 80.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Slow-braised Victorian beef mince in rich savory gravy enveloped in golden shortcrust and puff pastry lid.',
        options: []
      },
      {
        id: 'box-chicken-nuggets-20',
        name: 'Housemade Chicken Nuggets Box (20 pk Â· GF)',
        category: 'boxes',
        categoryLabel: 'Handcrafted Nuggets (20 pk)',
        dietary: 'GF',
        serves: 12,
        price: 80.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/collection-kids.jpg',
        description: 'Tender free-range chicken breast bites coated in crunchy gluten-free seasoned crumb. Served with artisan tomato sauce.',
        options: []
      },
      {
        id: 'box-ribbon-sandwiches-20',
        name: 'Ribbon Sandwiches Box: Poached Chicken, Almonds & Greens (20 pk Â· DF)',
        category: 'boxes',
        categoryLabel: 'Gourmet Ribbons (20 pk)',
        dietary: 'DF/GFO',
        serves: 12,
        price: 99.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crustless soft white ribbon sandwiches layered with poached chicken breast, honey mustard mayo, toasted almonds, and greens.',
        options: [
          { key: 'gfo', label: 'Gluten free option (+$10.00)', priceAdd: 10.00, min: 1 }
        ]
      },
      {
        id: 'box-mini-quiches-20',
        name: 'Mini Quiche Box: Bacon, Cheddar & Chives (20 pk)',
        category: 'boxes',
        categoryLabel: 'Warm Savoury Box (20 pk)',
        dietary: 'GFO',
        serves: 15,
        price: 120.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/real/mini-quiche.jpg',
        description: 'Bite-sized butter shortcrust tartlets with crispy streaky bacon, vintage cheddar, aged parmesan, and garden chives.',
        options: [
          { key: 'gfo', label: 'Gluten free option (+$10.00)', priceAdd: 10.00, min: 1 }
        ]
      },
      {
        id: 'box-charcuterie-grazing',
        name: 'Charcuterie Grazing Box',
        category: 'boxes',
        categoryLabel: 'Artisan Grazing Box',
        dietary: '',
        serves: 10,
        price: 175.00,
        min: 1,
        unitName: 'Small Box (Serves 10)',
        image: 'assets/images/hero-catering.png',
        description: 'Prosciutto di San Daniele, mild salami, vintage cheddar, double brie, house focaccia crisps, honeycomb, muscatels, and berries.',
        options: [
          { key: 'large', label: 'Large Grazing Box (Serves 15â€“20)', priceAdd: 175.00, min: 1 }
        ]
      },

      // 10. KID'S PARTIES
      {
        id: 'kids-fairy-bread-50',
        name: 'Fairy bread triangles (50 pc Â· V)',
        category: 'kids',
        categoryLabel: 'Party Tradition (50 pc)',
        dietary: 'V',
        serves: 18,
        price: 49.00,
        min: 1,
        unitName: 'Platter of 50',
        image: 'assets/images/real/fairy-bread.jpg',
        description: 'Classic soft white bread crusts trimmed, spread with whipped butter and coated in vibrant 100s & 1000s sprinkles.',
        options: []
      },
      {
        id: 'kids-ribbon-ham-cheese',
        name: 'Ribbon sandwiches: leg ham, cheese, butter (20 pk)',
        category: 'kids',
        categoryLabel: 'Kid\'s Ribbons (20 pk)',
        dietary: 'GFO',
        serves: 12,
        price: 85.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/real/ribbon-sandwiches.jpg',
        description: 'Crustless soft sandwich ribbons filled with shaved leg ham, mild cheddar cheese, and cultured butter.',
        options: [
          { key: 'gfo', label: 'Gluten free option (+$5.50)', priceAdd: 5.50, min: 1 }
        ]
      },
      {
        id: 'kids-cookies-20',
        name: 'Mini choc chip cookies (20 pk Â· V)',
        category: 'kids',
        categoryLabel: 'Party Treats (20 pk)',
        dietary: 'V',
        serves: 15,
        price: 75.00,
        min: 1,
        unitName: 'Box of 20',
        image: 'assets/images/real/choc-chip-cookies.jpg',
        description: 'Bite-sized vanilla cookies packed with milk chocolate chips and baked to golden chewy perfection.',
        options: []
      },
      {
        id: 'kids-honey-joys-12',
        name: 'Honey Joys (12 pk Â· V)',
        category: 'kids',
        categoryLabel: 'Party Treats (12 pk)',
        dietary: 'V',
        price: 60.00,
        min: 1,
        serves: 12,
        unitName: 'Platter of 12',
        image: 'assets/images/collection-kids.jpg',
        description: 'Crunchy golden cornflakes baked with pure Australian honey, melted butter, and sugar in pastel paper cups.',
        options: []
      },
      {
        id: 'kids-sprinkles-cupcakes-12',
        name: 'Mini sprinkles cupcakes (12 pk)',
        category: 'kids',
        categoryLabel: 'Party Cupcakes (12 pk)',
        dietary: 'GFO',
        serves: 12,
        price: 50.00,
        min: 1,
        unitName: 'Box of 12',
        image: 'assets/images/real/mini-cupcakes.jpg',
        description: 'Vanilla sponge cupcakes with rainbow buttercream swirls and festive confetti sprinkles.',
        options: [
          { key: 'gfo', label: 'Gluten free option (+$5.00)', priceAdd: 5.00, min: 1 }
        ]
      },
      {
        id: 'kids-pkg-petite',
        name: 'Kid\'s Party Package â€” PETITE (Serves 10)',
        category: 'kids',
        categoryLabel: 'All-Inclusive Package',
        dietary: '',
        serves: 10,
        price: 350.00,
        min: 1,
        unitName: 'Package for 10',
        image: 'assets/images/collection-kids.jpg',
        description: 'Includes per child: Honey joy, lolly bag, fruit cup, ham/cheese ribbon, chicken nugget, mini cupcake, 2x fairy bread, and juice.',
        options: []
      },
      {
        id: 'kids-pkg-grande',
        name: 'Kid\'s Party Package â€” GRANDE (Serves 20)',
        category: 'kids',
        categoryLabel: 'All-Inclusive Package',
        dietary: '',
        serves: 20,
        price: 680.00,
        min: 1,
        unitName: 'Package for 20',
        image: 'assets/images/collection-kids.jpg',
        description: 'Complete 20-child feast: honey joys, lolly bags, fruit cups, ribbon sandwiches, nuggets, cupcakes, fairy bread, and bottled drinks.',
        options: []
      }
    ];

    // State
    let totalGuests = 25;
    let fulfillment = 'delivery'; // 'delivery' or 'pickup'
    let timeSlot = 'Standard Midday Delivery (11:00am â€“ 1:30pm)';
    let activeCategory = 'all';
    let searchQuery = '';
    let activeDietFilter = '';
    const orderAllocations = {}; // { dishId: { std: X, [optKey]: Y, totalQty: Z, totalCost: W } }
    const cardTempQty = {}; // { dishId: { std: X, [optKey]: Y } }

    // DOM Elements
    const dishesGrid = document.getElementById('catDishesGrid');
    const quickGuestsVal = document.getElementById('catQuickGuestsVal');
    const quickGuestsInc = document.getElementById('catQuickGuestsInc');
    const quickGuestsDec = document.getElementById('catQuickGuestsDec');
    const quickEventDate = document.getElementById('catQuickEventDate');
    const quickPickupPill = document.getElementById('catQuickPickupPill');
    const quickDeliveryPill = document.getElementById('catQuickDeliveryPill');
    const quickTimeWindow = document.getElementById('catQuickTimeWindow');
    const searchInput = document.getElementById('catDishSearchInput');

    // Date setup: minimum 4 business days notice
    if (quickEventDate) {
      const minDate = new Date();
      minDate.setDate(minDate.getDate() + 4);
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 5);

      const toDateInputStr = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
      };

      quickEventDate.min = toDateInputStr(minDate);
      quickEventDate.value = toDateInputStr(defaultDate);
    }

    // Guests adjustment
    function setGuests(val) {
      totalGuests = Math.max(5, Math.min(500, parseInt(val, 10) || 25));
      if (quickGuestsVal) quickGuestsVal.textContent = totalGuests;

      document.querySelectorAll('.cat-quick-chip').forEach(chip => {
        const cVal = parseInt(chip.getAttribute('data-val'), 10);
        chip.classList.toggle('active', cVal === totalGuests);
      });

      renderLiveOrderSummary();
    }

    quickGuestsInc?.addEventListener('click', () => setGuests(totalGuests + 5));
    quickGuestsDec?.addEventListener('click', () => setGuests(totalGuests - 5));

    document.querySelectorAll('.cat-quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = parseInt(chip.getAttribute('data-val'), 10);
        if (val) setGuests(val);
      });
    });

    // Fulfillment toggles
    quickPickupPill?.addEventListener('click', () => {
      fulfillment = 'pickup';
      quickPickupPill.classList.add('active');
      quickDeliveryPill?.classList.remove('active');
      renderLiveOrderSummary();
    });

    quickDeliveryPill?.addEventListener('click', () => {
      fulfillment = 'delivery';
      quickDeliveryPill.classList.add('active');
      quickPickupPill?.classList.remove('active');
      renderLiveOrderSummary();
    });

    quickTimeWindow?.addEventListener('change', (e) => {
      timeSlot = e.target.value;
      renderLiveOrderSummary();
    });

    // Category Tabs
    document.querySelectorAll('.cat-menu-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.cat-menu-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-cat') || 'all';

        const titleEl = document.getElementById('catCategoryTitle');
        const descEl = document.getElementById('catCategoryDesc');
        if (titleEl) {
          titleEl.textContent = activeCategory === 'all' ? 'All Catering Dishes' : pill.textContent;
        }
        if (descEl) {
          descEl.textContent = 'Handcrafted from scratch daily in our Kew patisserie atelier. Select your quantities and dietary options below.';
        }

        renderDishesDeck();
      });
    });

    // Dietary Filter Chips
    document.querySelectorAll('.cat-diet-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.cat-diet-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeDietFilter = chip.getAttribute('data-diet') || '';
        renderDishesDeck();
      });
    });

    // Search input
    searchInput?.addEventListener('input', (e) => {
      searchQuery = (e.target.value || '').trim().toLowerCase();
      renderDishesDeck();
    });

    // Helper: render dietary circular badges with full tooltip
    function renderDietaryBadges(dietaryStr) {
      if (!dietaryStr) return '';
      // parse tags like "V/GFO/VGO" or "V/VO/GFO +$1"
      const cleaned = dietaryStr.replace(/\s*\+\$[0-9.]+/g, '');
      const rawTags = cleaned.split('/');

      return rawTags.map(tag => {
        const trimmed = tag.trim();
        if (!trimmed) return '';
        const isOpt = trimmed.endsWith('O') || trimmed.includes('OPT');
        const fullName = DIET_FULL_NAMES[trimmed] || trimmed;
        const cls = isOpt ? 'cat-diet-circle diet-opt' : 'cat-diet-circle diet-solid';
        const displayLabel = isOpt ? trimmed : trimmed;

        return `
          <div class="cat-diet-badge-wrap">
            <span class="${cls}" tabindex="0" aria-label="${fullName}">${displayLabel}</span>
            <div class="cat-diet-tip">${fullName}</div>
          </div>
        `;
      }).join('');
    }

    // Helper: compute dish back validation & totals
    function evaluateDishQuantities(dish, qtyState) {
      const stdQty = parseInt(qtyState.std, 10) || 0;
      let totalQty = stdQty;
      let totalCost = stdQty * dish.price;
      const optionErrors = [];

      (dish.options || []).forEach(opt => {
        const optQty = parseInt(qtyState[opt.key], 10) || 0;
        totalQty += optQty;
        totalCost += optQty * (dish.price + opt.priceAdd);

        if (optQty > 0 && opt.min && optQty < opt.min) {
          optionErrors.push(`Minimum ${opt.min} required for ${opt.label}.`);
        }
      });

      let minOrderError = '';
      if (dish.min && totalQty > 0 && totalQty < dish.min) {
        minOrderError = `Minimum order quantity is ${dish.min} ${dish.unitName}. (You have ${totalQty}, please add ${dish.min - totalQty} more)`;
      } else if (totalQty === 0) {
        minOrderError = `Please select at least ${dish.min || 1} ${dish.unitName} to add.`;
      }

      const isValid = (totalQty >= (dish.min || 1)) && (optionErrors.length === 0);

      return {
        totalQty,
        totalCost: Math.round(totalCost * 100) / 100,
        optionErrors,
        minOrderError,
        isValid
      };
    }

    // Render Dishes Grid
    function renderDishesDeck() {
      if (!dishesGrid) return;

      const filtered = cateringDishes.filter(dish => {
        // Category check
        if (activeCategory !== 'all' && dish.category !== activeCategory) {
          return false;
        }
        // Dietary filter check
        if (activeDietFilter) {
          if (!dish.dietary || !dish.dietary.includes(activeDietFilter)) {
            return false;
          }
        }
        // Search query check
        if (searchQuery) {
          const matchName = dish.name.toLowerCase().includes(searchQuery);
          const matchDesc = dish.description.toLowerCase().includes(searchQuery);
          const matchDiet = (dish.dietary || '').toLowerCase().includes(searchQuery);
          if (!matchName && !matchDesc && !matchDiet) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        dishesGrid.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: #717171; font-family: var(--font-brand);">
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No dishes match your filter criteria.</p>
            <button type="button" class="btn-outline-pill" onclick="window.fhApp.resetCatFilters()">Reset Filters</button>
          </div>
        `;
        return;
      }

      dishesGrid.innerHTML = filtered.map(dish => {
        const orderData = orderAllocations[dish.id];
        const isAllocated = !!orderData && orderData.totalQty > 0;
        const dietHtml = renderDietaryBadges(dish.dietary);

        // Current temporary state for back inputs
        const currentQ = cardTempQty[dish.id] || {
          std: orderData ? orderData.std : (dish.min || 1),
          ...(dish.options || []).reduce((acc, opt) => {
            acc[opt.key] = orderData ? (orderData[opt.key] || 0) : 0;
            return acc;
          }, {})
        };

        const evalState = evaluateDishQuantities(dish, currentQ);

        // Options rows HTML for back of card
        const optionsHtml = (dish.options || []).map(opt => {
          const optQty = currentQ[opt.key] || 0;
          const priceLine = opt.priceAdd > 0 ? `+$${opt.priceAdd.toFixed(2)} ea` : 'No surcharge';

          return `
            <div class="cat-back-option-row">
              <div class="cat-back-option-left">
                <span class="cat-back-option-label">
                  ${opt.label}
                  ${opt.min ? `<span class="cat-back-min-badge">Min ${opt.min}</span>` : ''}
                </span>
                <span class="cat-back-option-price">${priceLine}</span>
              </div>
              <div class="cat-back-stepper">
                <button type="button" onclick="window.fhApp.adjustBackQty('${dish.id}', '${opt.key}', -1)">-</button>
                <input type="number" min="0" value="${optQty}" onchange="window.fhApp.setBackQty('${dish.id}', '${opt.key}', this.value)" aria-label="${opt.label} count">
                <button type="button" onclick="window.fhApp.adjustBackQty('${dish.id}', '${opt.key}', 1)">+</button>
              </div>
            </div>
          `;
        }).join('');

        const alertHtml = evalState.minOrderError || evalState.optionErrors.length > 0 ? `
          <div class="cat-back-alert">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <div>${evalState.minOrderError || evalState.optionErrors.join('<br>')}</div>
          </div>
        ` : '';

        return `
          <div class="cat-dish-card ${isAllocated ? 'is-allocated' : ''}" id="catCard_${dish.id}">
            <div class="cat-card-flip-inner">
              
              <!-- FRONT FACE -->
              <div class="cat-card-face cat-face-front">
                <div class="cat-dish-media">
                  <img src="${dish.image}" alt="${dish.name}" class="cat-dish-img" loading="lazy">
                  <div class="cat-diet-pills-row">
                    ${dietHtml}
                  </div>
                </div>
                <div class="cat-dish-body">
                  <span class="cat-dish-kicker">${dish.categoryLabel}</span>
                  <h3 class="cat-dish-name">${dish.name}</h3>
                  <p class="cat-dish-desc">${dish.description}</p>
                  
                  <div class="cat-dish-footer">
                    <div class="cat-dish-pricing">
                      <span class="cat-dish-price-main">$${dish.price.toFixed(2)}</span>
                      <span class="cat-dish-min-note">${dish.unitName}${dish.min > 1 ? ` &middot; Min ${dish.min}` : ''}</span>
                    </div>
                    <button type="button" class="cat-open-flip-btn" onclick="window.fhApp.flipCard('${dish.id}')">
                      ${isAllocated ? `Edit (${orderData.totalQty})` : 'Add to order'}
                    </button>
                  </div>
                </div>
              </div>

              <!-- BACK FACE: CONFIGURATION & QUANTITIES -->
              <div class="cat-card-face cat-face-back">
                <div class="cat-back-header">
                  <h4 class="cat-back-title">${dish.name}</h4>
                  <p class="cat-back-rule">
                    ${dish.min > 1 ? `Minimum ${dish.min} ${dish.unitName}` : 'Select your portions'}
                  </p>
                </div>

                <div class="cat-back-options-list">
                  <!-- Standard Option Row -->
                  <div class="cat-back-option-row">
                    <div class="cat-back-option-left">
                      <span class="cat-back-option-label">Standard Option</span>
                      <span class="cat-back-option-price">$${dish.price.toFixed(2)} each</span>
                    </div>
                    <div class="cat-back-stepper">
                      <button type="button" onclick="window.fhApp.adjustBackQty('${dish.id}', 'std', -1)">-</button>
                      <input type="number" min="0" value="${currentQ.std}" onchange="window.fhApp.setBackQty('${dish.id}', 'std', this.value)" aria-label="Standard option quantity">
                      <button type="button" onclick="window.fhApp.adjustBackQty('${dish.id}', 'std', 1)">+</button>
                    </div>
                  </div>

                  <!-- Modification Options Rows (GFO, VO, VGO) -->
                  ${optionsHtml}
                </div>

                <!-- Validation Alerts -->
                <div id="catAlert_${dish.id}">
                  ${alertHtml}
                </div>

                <div class="cat-back-footer">
                  <div class="cat-back-total-line">
                    <span class="cat-back-total-label" id="catTotalLabel_${dish.id}">${evalState.totalQty} items</span>
                    <span class="cat-back-total-price" id="catTotalPrice_${dish.id}">$${evalState.totalCost.toFixed(2)}</span>
                  </div>
                  <div class="cat-back-actions">
                    <button type="button" class="cat-back-cancel-btn" onclick="window.fhApp.unflipCard('${dish.id}')">Cancel</button>
                    <button type="button" class="cat-back-submit-btn" id="catConfirmBtn_${dish.id}" ${!evalState.isValid ? 'disabled' : ''} onclick="window.fhApp.confirmDishOrder('${dish.id}')">
                      Confirm &amp; Add
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        `;
      }).join('');
    }

    // Interactive Card Flip Functions
    window.fhApp.flipCard = (dishId) => {
      const card = document.getElementById(`catCard_${dishId}`);
      if (!card) return;

      const dish = cateringDishes.find(d => d.id === dishId);
      if (!dish) return;

      // Initialize temp state if not exists
      if (!cardTempQty[dishId]) {
        const existing = orderAllocations[dishId];
        cardTempQty[dishId] = {
          std: existing ? existing.std : (dish.min || 1),
          ...(dish.options || []).reduce((acc, opt) => {
            acc[opt.key] = existing ? (existing[opt.key] || 0) : 0;
            return acc;
          }, {})
        };
      }

      card.classList.add('is-flipped');
    };

    window.fhApp.unflipCard = (dishId) => {
      const card = document.getElementById(`catCard_${dishId}`);
      if (card) card.classList.remove('is-flipped');
    };

    // Live update for back face steppers
    function updateBackFaceLive(dishId) {
      const dish = cateringDishes.find(d => d.id === dishId);
      if (!dish) return;

      const qState = cardTempQty[dishId] || { std: dish.min || 1 };
      const evalState = evaluateDishQuantities(dish, qState);

      const alertEl = document.getElementById(`catAlert_${dishId}`);
      const totalLabelEl = document.getElementById(`catTotalLabel_${dishId}`);
      const totalPriceEl = document.getElementById(`catTotalPrice_${dishId}`);
      const confirmBtn = document.getElementById(`catConfirmBtn_${dishId}`);

      if (alertEl) {
        if (evalState.minOrderError || evalState.optionErrors.length > 0) {
          alertEl.innerHTML = `
            <div class="cat-back-alert">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <div>${evalState.minOrderError || evalState.optionErrors.join('<br>')}</div>
            </div>
          `;
        } else {
          alertEl.innerHTML = '';
        }
      }

      if (totalLabelEl) totalLabelEl.textContent = `${evalState.totalQty} items`;
      if (totalPriceEl) totalPriceEl.textContent = `$${evalState.totalCost.toFixed(2)}`;
      if (confirmBtn) confirmBtn.disabled = !evalState.isValid;
    }

    window.fhApp.adjustBackQty = (dishId, key, delta) => {
      if (!cardTempQty[dishId]) cardTempQty[dishId] = { std: 0 };
      const curr = parseInt(cardTempQty[dishId][key], 10) || 0;
      cardTempQty[dishId][key] = Math.max(0, curr + delta);

      // Re-render that card's inputs or update inputs directly
      renderDishesDeck();
      // Keep flipped
      const card = document.getElementById(`catCard_${dishId}`);
      if (card) card.classList.add('is-flipped');
    };

    window.fhApp.setBackQty = (dishId, key, val) => {
      if (!cardTempQty[dishId]) cardTempQty[dishId] = { std: 0 };
      cardTempQty[dishId][key] = Math.max(0, parseInt(val, 10) || 0);
      updateBackFaceLive(dishId);
    };

    window.fhApp.confirmDishOrder = (dishId) => {
      const dish = cateringDishes.find(d => d.id === dishId);
      if (!dish) return;

      const qState = cardTempQty[dishId] || { std: dish.min || 1 };
      const evalState = evaluateDishQuantities(dish, qState);

      if (!evalState.isValid) {
        showToast('Please ensure minimum order quantities are met before confirming.');
        return;
      }

      orderAllocations[dishId] = {
        ...qState,
        totalQty: evalState.totalQty,
        totalCost: evalState.totalCost
      };

      window.fhApp.unflipCard(dishId);
      renderDishesDeck();
      renderLiveOrderSummary();
      showToast(`Added ${evalState.totalQty}x ${dish.name} to order.`);
    };

    window.fhApp.removeCatOrderLine = (dishId) => {
      delete orderAllocations[dishId];
      delete cardTempQty[dishId];
      renderDishesDeck();
      renderLiveOrderSummary();
      showToast('Item removed from order.');
    };

    window.fhApp.resetCatFilters = () => {
      activeCategory = 'all';
      activeDietFilter = '';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('.cat-menu-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-cat') === 'all'));
      document.querySelectorAll('.cat-diet-chip').forEach(c => c.classList.toggle('active', c.getAttribute('data-diet') === ''));
      renderDishesDeck();
    };

    // Live Order Summary Receipt & Headcount Tracker
    function renderLiveOrderSummary() {
      const receiptItemsList = document.getElementById('catReceiptItemsList');
      const subtotalDisplay = document.getElementById('catSubtotalDisplay');
      const addonsRow = document.getElementById('catAddonsRow');
      const addonsDisplay = document.getElementById('catAddonsDisplay');
      const deliveryFeeDisplay = document.getElementById('catDeliveryFeeDisplay');
      const grandTotalDisplay = document.getElementById('catGrandTotalDisplay');
      const btnTotalBadge = document.getElementById('catBtnTotalBadge');
      const allocatedTally = document.getElementById('catOrderAllocatedTally');
      const targetTally = document.getElementById('catOrderTargetTally');
      const progressFill = document.getElementById('catOrderProgressFill');
      const statusBadge = document.getElementById('catOrderStatusBadge');
      const paramsSummary = document.getElementById('catOrderParamsSummary');

      let foodSubtotal = 0;
      let totalPortions = 0;
      const orderKeys = Object.keys(orderAllocations);

      const itemsHtml = orderKeys.map(dishId => {
        const dish = cateringDishes.find(d => d.id === dishId);
        const alloc = orderAllocations[dishId];
        if (!dish || !alloc || alloc.totalQty <= 0) return '';

        foodSubtotal += alloc.totalCost;
        totalPortions += (alloc.totalQty * (dish.serves || 1));

        // Sub-breakdown details
        const details = [];
        if (alloc.std > 0) details.push(`${alloc.std}x Standard ($${dish.price.toFixed(2)} ea)`);
        (dish.options || []).forEach(opt => {
          if (alloc[opt.key] > 0) {
            const extraStr = opt.priceAdd > 0 ? ` (+$${opt.priceAdd.toFixed(2)} ea)` : '';
            details.push(`${alloc[opt.key]}x ${opt.label}${extraStr}`);
          }
        });

        return `
          <div class="cat-receipt-item" style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
              <strong style="font-family: var(--font-brand); font-size: 0.92rem; color: #ffffff;">${dish.name}</strong>
              <span style="font-family: var(--font-brand); font-weight: 600; color: #a7b2a3;">$${alloc.totalCost.toFixed(2)}</span>
            </div>
            <div style="font-family: var(--font-brand); font-size: 0.74rem; color: #a7b2a3; line-height: 1.4;">
              ${details.join(' &middot; ')}
            </div>
            <div style="display: flex; gap: 12px; margin-top: 4px;">
              <button type="button" style="background: none; border: 0; padding: 0; color: #ffffff; text-decoration: underline; font-family: var(--font-brand); font-size: 0.72rem; cursor: pointer;" onclick="window.fhApp.flipCard('${dish.id}')">Edit</button>
              <button type="button" style="background: none; border: 0; padding: 0; color: #e57373; text-decoration: underline; font-family: var(--font-brand); font-size: 0.72rem; cursor: pointer;" onclick="window.fhApp.removeCatOrderLine('${dish.id}')">Remove</button>
            </div>
          </div>
        `;
      }).join('');

      if (receiptItemsList) {
        if (orderKeys.length === 0) {
          receiptItemsList.innerHTML = `
            <div class="cat-order-empty-state" id="catReceiptEmpty">
              <div class="cat-order-empty-title">Nothing added yet</div>
              <div class="cat-order-empty-text">Click <strong>Add to order</strong> on any dish to choose standard and dietary counts.</div>
            </div>
          `;
        } else {
          receiptItemsList.innerHTML = itemsHtml;
        }
      }

      // Addons calculation
      const hasLunchboxes = document.getElementById('catAddonLunchboxes')?.checked || false;
      const hasCutlery = document.getElementById('catAddonCutlery')?.checked || false;
      const lunchboxCost = hasLunchboxes ? (totalGuests * 1.50) : 0;
      const cutleryCost = hasCutlery ? (totalGuests * 1.00) : 0;
      const addonsTotal = lunchboxCost + cutleryCost;

      // Delivery fee
      const deliveryFee = fulfillment === 'delivery' ? 60.00 : 0.00;
      const grandTotal = foodSubtotal + addonsTotal + deliveryFee;

      // Display sync
      if (subtotalDisplay) subtotalDisplay.textContent = `$${foodSubtotal.toFixed(2)}`;
      if (addonsRow) addonsRow.style.display = addonsTotal > 0 ? 'flex' : 'none';
      if (addonsDisplay) addonsDisplay.textContent = `$${addonsTotal.toFixed(2)}`;
      if (deliveryFeeDisplay) deliveryFeeDisplay.textContent = fulfillment === 'delivery' ? '$60.00' : 'FREE';
      if (grandTotalDisplay) grandTotalDisplay.textContent = `$${grandTotal.toFixed(2)}`;
      if (btnTotalBadge) btnTotalBadge.textContent = `$${grandTotal.toFixed(2)}`;

      // Tally & Progress
      if (allocatedTally) allocatedTally.textContent = totalPortions;
      if (targetTally) targetTally.textContent = totalGuests;
      const pct = Math.min(100, Math.round((totalPortions / totalGuests) * 100));
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (statusBadge) statusBadge.textContent = `${pct}%`;

      // Event Parameters Line
      let evDateFormatted = 'Min 4 days notice';
      if (quickEventDate && quickEventDate.value) {
        const parts = quickEventDate.value.split('-');
        if (parts.length === 3) {
          const dObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
          evDateFormatted = dObj.toLocaleDateString('en-AU', { weekday: 'short', month: 'short', day: 'numeric' });
        }
      }

      if (paramsSummary) {
        paramsSummary.innerHTML = `${totalGuests} guests &middot; ${evDateFormatted} &middot; ${fulfillment === 'delivery' ? 'Delivery ($60)' : 'Kew Pickup (Free)'}`;
      }
    }

    // Checkout Modal Setup
    const checkoutModal = document.getElementById('catCheckoutModal');
    const checkoutBackdrop = document.getElementById('catCheckoutModalBackdrop');
    const checkoutBtn = document.getElementById('catCheckoutBtn');
    const closeCheckoutBtn = document.getElementById('catCheckoutModalCloseBtn');

    function openCheckout() {
      const orderCount = Object.keys(orderAllocations).length;
      if (orderCount === 0) {
        showToast('Please add at least one dish to your catering order before checking out.');
        return;
      }
      checkoutModal?.classList.add('open');
      checkoutBackdrop?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCheckout() {
      checkoutModal?.classList.remove('open');
      checkoutBackdrop?.classList.remove('open');
      document.body.style.overflow = '';
    }

    checkoutBtn?.addEventListener('click', openCheckout);
    closeCheckoutBtn?.addEventListener('click', closeCheckout);
    checkoutBackdrop?.addEventListener('click', closeCheckout);

    // Initial Render
    renderDishesDeck();
    renderLiveOrderSummary();
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

  // --------------------------------------------------------------------------
  // 19. Product-3: Minimalist Direct PDP (Live Frank & Harri Matching Layout)
  // --------------------------------------------------------------------------
  function initProduct3Page() {
    const pdp3Main = document.getElementById('pdp3Main');
    if (!pdp3Main && document.body.getAttribute('data-page') !== 'product-3') return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'bruce-chocolate-cake';
    const product = products.find(p => p.id === productId) || products[0];

    // Page Title & Headings
    document.title = `${product.name} â€” Frank & Harri Patisserie Kew Â· Melbourne`;
    const bcTitle = document.getElementById('pdp3BreadcrumbTitle');
    if (bcTitle) bcTitle.textContent = product.name;
    const bcCat = document.getElementById('pdp3BreadcrumbCategory');
    if (bcCat) {
      bcCat.textContent = product.categoryLabel || 'Birthday Cakes';
      bcCat.href = product.collections && product.collections.length ? `${product.collections[0]}.html` : 'birthday-cakes.html';
    }

    const titleEl = document.getElementById('pdp3Title');
    if (titleEl) titleEl.textContent = product.name;

    const dockTitle = document.getElementById('pdp3DockTitle');
    if (dockTitle) dockTitle.textContent = product.name;

    // Gallery & Hero setup
    const heroImg = document.getElementById('pdp3HeroImg');
    const dockImg = document.getElementById('pdp3DockImg');
    if (heroImg && product.image) {
      heroImg.src = product.image;
      heroImg.alt = product.name;
    }
    if (dockImg && product.image) {
      dockImg.src = product.image;
    }

    // Perspective Thumbnails
    const thumbBtns = document.querySelectorAll('.pdp3-thumb-btn');
    thumbBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetSrc = btn.getAttribute('data-src');
        if (heroImg && targetSrc) {
          heroImg.style.opacity = '0.5';
          setTimeout(() => {
            heroImg.src = targetSrc;
            heroImg.style.opacity = '1';
          }, 120);
        }
      });
    });

    // Sizing Options
    const bruceSizes = [
      { name: '6"', label: '6" - (serves 7â€“8)', serves: 'serves 7â€“8', price: 109.00 },
      { name: '9"', label: '9" - (serves 12-14)', serves: 'serves 12-14', price: 159.00 },
      { name: '12"', label: '12" - (serves 20-22)', serves: 'serves 20-22', price: 209.00 }
    ];

    // Use custom product sizes if defined, otherwise default to bruceSizes
    const sizes = (product.sizes && product.sizes.length > 0) ? product.sizes.map((s) => ({
      name: s.name,
      label: `${s.name} - (${s.serves})`,
      serves: s.serves,
      price: s.price
    })) : bruceSizes;

    let selectedSize = sizes[0];
    let hasPlaque = false;
    let plaqueText = '';
    let quantity = 1;
    let selectedDate = 'Fri, 31 Oct';
    let selectedTime = '11:00am â€“ 1:00pm';
    let selectedAddons = [];

    // DOM Elements
    const priceDisplay = document.getElementById('pdp3PriceDisplay');
    const selectedSizeLabel = document.getElementById('pdp3SelectedSizeLabel');
    const selectedPlaqueLabel = document.getElementById('pdp3SelectedPlaqueLabel');
    const selectedDateLabel = document.getElementById('pdp3SelectedDateLabel');
    const plaqueInputWrap = document.getElementById('pdp3PlaqueInputWrap');
    const plaqueInput = document.getElementById('pdp3PlaqueInput');
    const plaqueCounter = document.getElementById('pdp3CharCount');
    const plaqueOverlay = document.getElementById('pdp3PlaqueOverlay');
    const plaquePreviewText = document.getElementById('pdp3PlaquePreviewText');
    const qtyInput = document.getElementById('pdp3QtyInput');
    const qtyMinus = document.getElementById('pdp3QtyMinus');
    const qtyPlus = document.getElementById('pdp3QtyPlus');
    const addBtn = document.getElementById('pdp3AddToCartBtn');
    const addBtnText = document.getElementById('pdp3AddBtnText');
    const expressBtn = document.getElementById('pdp3ExpressBtn');
    const dockPrice = document.getElementById('pdp3DockPrice');
    const dockVariant = document.getElementById('pdp3DockVariant');
    const dockAddBtn = document.getElementById('pdp3DockAddBtn');

    // Calculate dynamic pricing
    function calculateUnitPrice() {
      const sizePrice = selectedSize.price || 109.00;
      const plaquePrice = hasPlaque ? 7.90 : 0;
      const addonsPrice = selectedAddons.reduce((sum, item) => sum + item.price, 0);
      return sizePrice + plaquePrice + addonsPrice;
    }

    function updateView() {
      const unitPrice = calculateUnitPrice();
      const total = unitPrice * quantity;

      if (priceDisplay) priceDisplay.textContent = `$${unitPrice.toFixed(2)}`;
      if (addBtnText) addBtnText.textContent = `Add to Bag â€” $${total.toFixed(2)} AUD`;
      if (selectedSizeLabel) selectedSizeLabel.textContent = `${selectedSize.name} - (${selectedSize.serves})`;
      if (selectedPlaqueLabel) selectedPlaqueLabel.textContent = hasPlaque ? 'Plaque (+$7.90)' : 'No plaque';
      if (selectedDateLabel) selectedDateLabel.textContent = `${selectedDate} Â· ${selectedTime}`;
      if (dockPrice) dockPrice.textContent = `$${unitPrice.toFixed(2)}`;
      if (dockVariant) dockVariant.textContent = `${selectedSize.name} (${selectedSize.serves})`;
    }

    // ------------------------------------------------------------------------
    // 1. Size Pill Buttons
    // ------------------------------------------------------------------------
    const sizePillBtns = document.querySelectorAll('.pdp3-sizes-list .pdp3-pill-btn');
    sizePillBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        sizePillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (sizes[idx]) {
          selectedSize = sizes[idx];
        } else {
          const parsedPrice = parseFloat(btn.getAttribute('data-price')) || 109.00;
          selectedSize = {
            name: btn.getAttribute('data-size') || '6"',
            label: `${btn.getAttribute('data-size')} - (${btn.getAttribute('data-serves')})`,
            serves: btn.getAttribute('data-serves') || 'serves 7â€“8',
            price: parsedPrice
          };
        }
        updateView();
      });
    });

    // ------------------------------------------------------------------------
    // 2. Plaque Toggle Buttons & Live Overlay Sync
    // ------------------------------------------------------------------------
    const plaqueBtns = document.querySelectorAll('.pdp3-plaque-btn');
    plaqueBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        plaqueBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const isYes = btn.getAttribute('data-plaque') === 'yes';
        hasPlaque = isYes;

        if (hasPlaque) {
          if (plaqueInputWrap) plaqueInputWrap.style.display = 'flex';
          if (plaqueOverlay) plaqueOverlay.classList.add('visible');
          if (plaqueInput && !plaqueInput.value.trim()) {
            plaqueInput.value = 'Happy Birthday!';
            plaqueText = 'Happy Birthday!';
          } else if (plaqueInput) {
            plaqueText = plaqueInput.value.trim();
          }
          if (plaquePreviewText) plaquePreviewText.textContent = plaqueText || 'Happy Birthday!';
          if (plaqueCounter && plaqueInput) plaqueCounter.textContent = `${plaqueInput.value.length} / 28`;
        } else {
          if (plaqueInputWrap) plaqueInputWrap.style.display = 'none';
          if (plaqueOverlay) plaqueOverlay.classList.remove('visible');
        }
        updateView();
      });
    });

    // Plaque custom text input live preview
    if (plaqueInput) {
      plaqueInput.addEventListener('input', (e) => {
        plaqueText = e.target.value;
        if (plaqueCounter) plaqueCounter.textContent = `${plaqueText.length} / 28`;
        if (plaquePreviewText) plaquePreviewText.textContent = plaqueText.trim() || 'Happy Birthday!';
      });
    }

    // ------------------------------------------------------------------------
    // 3. Pick-Up / Delivery Date & Time Window Selector
    // ------------------------------------------------------------------------
    const datePills = document.querySelectorAll('.pdp3-date-pill');
    datePills.forEach(pill => {
      pill.addEventListener('click', () => {
        datePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedDate = pill.getAttribute('data-date') || 'Fri, 31 Oct';
        updateView();
      });
    });

    const customDateInput = document.getElementById('pdp3CustomDateInput');
    if (customDateInput) {
      // Set minimum date to 72h from now
      const minDate = new Date();
      minDate.setDate(minDate.getDate() + 3);
      customDateInput.min = minDate.toISOString().split('T')[0];

      customDateInput.addEventListener('change', (e) => {
        if (!e.target.value) return;
        const pickedDate = new Date(e.target.value + 'T00:00:00');
        const formatted = pickedDate.toLocaleDateString('en-AU', {
          weekday: 'short',
          day: 'numeric',
          month: 'short'
        });
        selectedDate = formatted;
        datePills.forEach(p => p.classList.remove('active'));
        const calLabel = customDateInput.closest('.pdp3-date-picker-btn');
        if (calLabel) {
          const numSpan = calLabel.querySelector('.pdp3-date-num');
          if (numSpan) numSpan.textContent = formatted;
        }
        updateView();
        showToast(`Celebration date set: ${formatted}`);
      });
    }

    const slotBtns = document.querySelectorAll('.pdp3-slot-btn');
    slotBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        slotBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = btn.getAttribute('data-slot') || '11:00am â€“ 1:00pm';
        updateView();
      });
    });

    // ------------------------------------------------------------------------
    // 4. Celebration Party Add-ons & Handwritten Gift Note
    // ------------------------------------------------------------------------
    const addonCheckboxes = document.querySelectorAll('.pdp3-addon-checkbox');
    const giftNoteWrap = document.getElementById('pdp3GiftNoteWrap');
    const giftNoteInput = document.getElementById('pdp3GiftNoteText');
    const giftNoteCount = document.getElementById('pdp3GiftNoteCount');

    addonCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const card = checkbox.closest('.pdp3-addon-card');
        const name = checkbox.getAttribute('data-addon-name') || '';
        const price = parseFloat(checkbox.getAttribute('data-addon-price')) || 0;

        if (checkbox.checked) {
          if (card) card.classList.add('selected');
          if (!selectedAddons.some(a => a.name === name)) {
            selectedAddons.push({ name, price });
          }
          if (checkbox.id === 'addonGiftCard' && giftNoteWrap) {
            giftNoteWrap.style.display = 'flex';
          }
        } else {
          if (card) card.classList.remove('selected');
          selectedAddons = selectedAddons.filter(a => a.name !== name);
          if (checkbox.id === 'addonGiftCard' && giftNoteWrap) {
            giftNoteWrap.style.display = 'none';
          }
        }
        updateView();
      });
    });

    if (giftNoteInput && giftNoteCount) {
      giftNoteInput.addEventListener('input', (e) => {
        giftNoteCount.textContent = `${e.target.value.length} / 160 characters`;
      });
    }

    // ------------------------------------------------------------------------
    // 5. Quantity Stepper
    // ------------------------------------------------------------------------
    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          if (qtyInput) qtyInput.value = quantity;
          updateView();
        }
      });
    }

    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        if (quantity < 20) {
          quantity++;
          if (qtyInput) qtyInput.value = quantity;
          updateView();
        }
      });
    }

    if (qtyInput) {
      qtyInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        if (val > 20) val = 20;
        quantity = val;
        e.target.value = quantity;
        updateView();
      });
    }

    // ------------------------------------------------------------------------
    // 6. Add to Bag & Express Checkout Actions
    // ------------------------------------------------------------------------
    function executeAddToCart() {
      const unitPrice = calculateUnitPrice();
      const activeImg = heroImg ? heroImg.src : (product.image || 'assets/images/bruce-cake-1.png');
      const customNote = giftNoteInput ? giftNoteInput.value.trim() : '';

      const addonsPayload = selectedAddons.map(a => {
        if (a.name.includes('Gift Card') && customNote) {
          return `${a.name} (Note: "${customNote}")`;
        }
        return a.name;
      });

      addToCart({
        id: product.id,
        name: `${product.name} (${selectedSize.name})`,
        price: unitPrice,
        image: activeImg,
        size: `${selectedSize.name} - (${selectedSize.serves})`,
        hasPlaque: hasPlaque,
        plaqueText: hasPlaque ? (plaqueText || 'Happy Birthday!') : '',
        fulfillment: 'pickup',
        date: selectedDate,
        timeSlot: selectedTime,
        addons: addonsPayload,
        qty: quantity
      });
    }

    if (addBtn) {
      addBtn.addEventListener('click', executeAddToCart);
    }

    if (dockAddBtn) {
      dockAddBtn.addEventListener('click', executeAddToCart);
    }

    if (expressBtn) {
      expressBtn.addEventListener('click', () => {
        executeAddToCart();
        showToast('Proceeding to Express 1-Click Checkout...');
      });
    }

    // ------------------------------------------------------------------------
    // 7. VERY HIGHLY INTERACTIVE TESTIMONIALS SYSTEM (#pdp3Reviews)
    // ------------------------------------------------------------------------
    
    // (a) Category Filter Tabs
    const filterTabs = document.querySelectorAll('#pdp3ReviewFilterTabs .pdp3-tab-pill');
    const reviewCards = document.querySelectorAll('#pdp3ReviewsGrid .pdp3-review-card');
    const barRows = document.querySelectorAll('.pdp3-breakdown-col .pdp3-bar-row');
    const reviewsGrid = document.getElementById('pdp3ReviewsGrid');

    function applyReviewFilter(categoryFilter = 'all', starsFilter = null) {
      let visibleCount = 0;
      reviewCards.forEach(card => {
        const cats = (card.getAttribute('data-category') || '').toLowerCase().split(' ');
        const cardStars = card.getAttribute('data-stars');

        let matchCategory = (categoryFilter === 'all') || cats.includes(categoryFilter);
        let matchStars = (!starsFilter || starsFilter === 'all') || (cardStars === starsFilter);

        if (matchCategory && matchStars) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      // Smoothly re-center carousel track on filter change
      if (reviewsGrid) {
        reviewsGrid.scrollTo({ left: 0, behavior: 'smooth' });
        updateCarouselProgress();
      }
      return visibleCount;
    }

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        barRows.forEach(r => r.classList.remove('active'));
        const filter = tab.getAttribute('data-filter') || 'all';
        applyReviewFilter(filter, null);
      });
    });

    // (b) Rating Breakdown Interactive Filter Rows
    barRows.forEach(row => {
      row.addEventListener('click', () => {
        const isCurrentActive = row.classList.contains('active');
        barRows.forEach(r => r.classList.remove('active'));
        filterTabs.forEach(t => t.classList.remove('active'));

        const starsFilter = row.getAttribute('data-filter-stars');
        if (isCurrentActive && starsFilter !== 'all') {
          // Reset filter
          const allTab = document.querySelector('#pdp3ReviewFilterTabs [data-filter="all"]');
          if (allTab) allTab.classList.add('active');
          applyReviewFilter('all', null);
        } else {
          row.classList.add('active');
          applyReviewFilter('all', starsFilter);
        }
      });
    });

    // (c) Horizontal Scroll Carousel Controls, Progress & Auto-Glide
    const scrollPrevBtn = document.getElementById('pdp3ScrollPrevBtn');
    const scrollNextBtn = document.getElementById('pdp3ScrollNextBtn');
    const autoScrollToggle = document.getElementById('pdp3AutoScrollToggle');
    const carouselProgressBar = document.getElementById('pdp3CarouselProgress');

    function updateCarouselProgress() {
      if (!reviewsGrid || !carouselProgressBar) return;
      const maxScroll = reviewsGrid.scrollWidth - reviewsGrid.clientWidth;
      if (maxScroll <= 0) {
        carouselProgressBar.style.width = '100%';
        return;
      }
      const pct = Math.max(15, Math.min(100, Math.round(((reviewsGrid.scrollLeft + 10) / maxScroll) * 100)));
      carouselProgressBar.style.width = `${pct}%`;
    }

    if (scrollPrevBtn && reviewsGrid) {
      scrollPrevBtn.addEventListener('click', () => {
        reviewsGrid.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }

    if (scrollNextBtn && reviewsGrid) {
      scrollNextBtn.addEventListener('click', () => {
        reviewsGrid.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }

    if (reviewsGrid) {
      reviewsGrid.addEventListener('scroll', updateCarouselProgress, { passive: true });
      window.addEventListener('resize', updateCarouselProgress);
      setTimeout(updateCarouselProgress, 300);
    }

    // Continuous auto-glide timer
    let isAutoScrollActive = true;
    let isUserHovering = false;
    let autoScrollInterval = null;

    function startAutoScroll() {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(() => {
        if (!isAutoScrollActive || isUserHovering || !reviewsGrid) return;
        const maxScroll = reviewsGrid.scrollWidth - reviewsGrid.clientWidth;
        if (reviewsGrid.scrollLeft >= maxScroll - 25) {
          reviewsGrid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          reviewsGrid.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }, 3600);
    }

    if (reviewsGrid) {
      reviewsGrid.addEventListener('mouseenter', () => { isUserHovering = true; });
      reviewsGrid.addEventListener('mouseleave', () => { isUserHovering = false; });
      reviewsGrid.addEventListener('touchstart', () => { isUserHovering = true; }, { passive: true });
      reviewsGrid.addEventListener('touchend', () => { setTimeout(() => { isUserHovering = false; }, 2500); }, { passive: true });
      startAutoScroll();
    }

    if (autoScrollToggle) {
      autoScrollToggle.addEventListener('click', () => {
        isAutoScrollActive = !isAutoScrollActive;
        if (isAutoScrollActive) {
          autoScrollToggle.classList.add('active');
          autoScrollToggle.innerHTML = '<span class="pdp3-auto-dot"></span><span class="pdp3-auto-text">Auto-Glide</span>';
          showToast('Reviews auto-glide enabled');
        } else {
          autoScrollToggle.classList.remove('active');
          autoScrollToggle.innerHTML = '<span class="pdp3-auto-text">â–¶ Resume Glide</span>';
          showToast('Reviews auto-glide paused');
        }
      });
    }

    // Drag-to-scroll implementation for smooth mouse drag
    if (reviewsGrid) {
      let isDown = false;
      let startX;
      let scrollLeft;

      reviewsGrid.addEventListener('mousedown', (e) => {
        if (e.target.closest('button') || e.target.closest('a')) return;
        isDown = true;
        startX = e.pageX - reviewsGrid.offsetLeft;
        scrollLeft = reviewsGrid.scrollLeft;
      });

      reviewsGrid.addEventListener('mouseleave', () => { isDown = false; });
      reviewsGrid.addEventListener('mouseup', () => { isDown = false; });
      reviewsGrid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - reviewsGrid.offsetLeft;
        const walk = (x - startX) * 1.5;
        reviewsGrid.scrollLeft = scrollLeft - walk;
      });
    }

    // (d) Sort Reviews Dropdown
    const sortSelect = document.getElementById('pdp3SortSelect');

    if (sortSelect && reviewsGrid) {
      sortSelect.addEventListener('change', (e) => {
        const sortMode = e.target.value;
        const cardsArray = Array.from(reviewsGrid.querySelectorAll('.pdp3-review-card'));

        cardsArray.sort((a, b) => {
          if (sortMode === 'helpful') {
            const hA = parseInt(a.getAttribute('data-helpful') || '0', 10);
            const hB = parseInt(b.getAttribute('data-helpful') || '0', 10);
            return hB - hA;
          } else if (sortMode === 'highest') {
            const sA = parseInt(a.getAttribute('data-stars') || '5', 10);
            const sB = parseInt(b.getAttribute('data-stars') || '5', 10);
            return sB - sA;
          } else if (sortMode === 'recent') {
            const dA = new Date(a.getAttribute('data-date') || '2026-01-01').getTime();
            const dB = new Date(b.getAttribute('data-date') || '2026-01-01').getTime();
            return dB - dA;
          }
          return 0;
        });

        cardsArray.forEach(card => reviewsGrid.appendChild(card));
        reviewsGrid.scrollTo({ left: 0, behavior: 'smooth' });
        updateCarouselProgress();
      });
    }

    // (d) Interactive Helpful Vote Buttons (with LocalStorage persistence)
    function setupHelpfulButtons(container = document) {
      const helpfulBtns = container.querySelectorAll('.pdp3-helpful-btn');
      helpfulBtns.forEach(btn => {
        const revId = btn.getAttribute('data-review-id');
        const countSpan = btn.querySelector('.pdp3-helpful-count');

        // Check if already voted
        if (revId && localStorage.getItem(`fh_helpful_voted_${revId}`)) {
          btn.classList.add('voted');
        }

        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (btn.classList.contains('voted')) {
            showToast('You found this review helpful.');
            return;
          }

          let currentCount = parseInt(countSpan ? countSpan.textContent : '0', 10) || 0;
          currentCount++;
          if (countSpan) countSpan.textContent = currentCount;
          btn.classList.add('voted');

          // Update card data attribute for sorting
          const parentCard = btn.closest('.pdp3-review-card');
          if (parentCard) parentCard.setAttribute('data-helpful', currentCount);

          if (revId) {
            localStorage.setItem(`fh_helpful_voted_${revId}`, 'true');
          }
          showToast('Thank you for your feedback! Marked as helpful.');
        });
      });
    }
    setupHelpfulButtons();

    // (e) Customer Photo Spotlight Lightbox Modal
    const spotlightBackdrop = document.getElementById('pdp3SpotlightBackdrop');
    const spotlightImg = document.getElementById('pdp3SpotlightImg');
    const spotlightAuthor = document.getElementById('pdp3SpotlightAuthor');
    const spotlightQuote = document.getElementById('pdp3SpotlightQuote');
    const spotlightOccasion = document.getElementById('pdp3SpotlightOccasion');
    const closeSpotlightBtn = document.getElementById('pdp3CloseSpotlightBtn');

    window.pdp3OpenSpotlight = function(imgSrc, author, quote, occasion) {
      if (!spotlightBackdrop) return;
      if (spotlightImg && imgSrc) spotlightImg.src = imgSrc;
      if (spotlightAuthor) spotlightAuthor.textContent = author || 'Verified Customer';
      if (spotlightQuote) spotlightQuote.textContent = quote ? `"${quote}"` : '';
      if (spotlightOccasion) spotlightOccasion.textContent = occasion || 'Celebration Spotlight';
      spotlightBackdrop.classList.add('open');
      spotlightBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    function closeSpotlightModal() {
      if (!spotlightBackdrop) return;
      spotlightBackdrop.classList.remove('open');
      spotlightBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (closeSpotlightBtn) {
      closeSpotlightBtn.addEventListener('click', closeSpotlightModal);
    }

    if (spotlightBackdrop) {
      spotlightBackdrop.addEventListener('click', (e) => {
        if (e.target === spotlightBackdrop) closeSpotlightModal();
      });
    }

    // Reel cards click triggers spotlight
    const reelCards = document.querySelectorAll('.pdp3-reel-card');
    reelCards.forEach(card => {
      card.addEventListener('click', () => {
        const photo = card.getAttribute('data-photo');
        const author = card.getAttribute('data-author');
        const caption = card.getAttribute('data-caption');
        const occasion = card.getAttribute('data-occasion');
        window.pdp3OpenSpotlight(photo, author, caption, occasion);
      });
    });

    // (f) "Write an Atelier Review" Modal & Interactive 5-Star Picker
    const reviewModalBackdrop = document.getElementById('pdp3ReviewModalBackdrop');
    const openReviewModalBtn = document.getElementById('pdp3OpenReviewModalBtn');
    const closeReviewModalBtn = document.getElementById('pdp3CloseReviewModalBtn');
    const reviewForm = document.getElementById('pdp3ReviewForm');
    const starPicker = document.getElementById('pdp3StarPicker');
    const starLabel = document.getElementById('pdp3StarRatingText');
    let reviewRating = 5;

    const starDescriptions = {
      1: '1 Star Â· Poor Experience',
      2: '2 Stars Â· Fair Experience',
      3: '3 Stars Â· Good & Enjoyable',
      4: '4 Stars Â· Wonderful Experience',
      5: '5 Stars Â· Exceptional Celebration'
    };

    function openReviewModal() {
      if (!reviewModalBackdrop) return;
      reviewModalBackdrop.classList.add('open');
      reviewModalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeReviewModal() {
      if (!reviewModalBackdrop) return;
      reviewModalBackdrop.classList.remove('open');
      reviewModalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (openReviewModalBtn) {
      openReviewModalBtn.addEventListener('click', openReviewModal);
    }

    if (closeReviewModalBtn) {
      closeReviewModalBtn.addEventListener('click', closeReviewModal);
    }

    if (reviewModalBackdrop) {
      reviewModalBackdrop.addEventListener('click', (e) => {
        if (e.target === reviewModalBackdrop) closeReviewModal();
      });
    }

    // Keyboard ESC listener for all pdp3 modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSpotlightModal();
        closeReviewModal();
      }
    });

    // Interactive Star Picker
    if (starPicker) {
      const starBtns = starPicker.querySelectorAll('.pdp3-star-btn');
      
      function renderStars(count) {
        starBtns.forEach(btn => {
          const val = parseInt(btn.getAttribute('data-val'), 10);
          if (val <= count) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        if (starLabel && starDescriptions[count]) {
          starLabel.textContent = starDescriptions[count];
        }
      }

      starBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          const val = parseInt(btn.getAttribute('data-val'), 10);
          renderStars(val);
        });

        btn.addEventListener('mouseleave', () => {
          renderStars(reviewRating);
        });

        btn.addEventListener('click', () => {
          reviewRating = parseInt(btn.getAttribute('data-val'), 10);
          renderStars(reviewRating);
        });
      });
    }

    // Submit New Review Form
    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const author = document.getElementById('revAuthor') ? document.getElementById('revAuthor').value.trim() : 'Guest';
        const loc = document.getElementById('revLoc') ? document.getElementById('revLoc').value.trim() : 'Melbourne';
        const occasion = document.getElementById('revOccasion') ? document.getElementById('revOccasion').value : 'Milestone Celebration';
        const sizeChosen = document.getElementById('revSize') ? document.getElementById('revSize').value : '9" Classic';
        const headline = document.getElementById('revTitle') ? document.getElementById('revTitle').value.trim() : 'Spectacular chocolate cake';
        const body = document.getElementById('revBody') ? document.getElementById('revBody').value.trim() : '';

        // Generate initials
        const nameParts = author.split(' ');
        const initials = (nameParts[0] ? nameParts[0][0] : 'G') + (nameParts[1] ? nameParts[1][0] : '');

        const starGoldIcons = 'â˜…'.repeat(reviewRating) + 'â˜†'.repeat(5 - reviewRating);
        const newRevId = `rev_user_${Date.now()}`;

        // Create new article card
        const newCard = document.createElement('article');
        newCard.className = 'pdp3-review-card';
        newCard.setAttribute('data-category', 'milestone dinner');
        newCard.setAttribute('data-stars', reviewRating.toString());
        newCard.setAttribute('data-helpful', '1');
        newCard.setAttribute('data-date', new Date().toISOString().split('T')[0]);
        newCard.style.animation = 'pdp3ModalZoom 0.35s ease';

        newCard.innerHTML = `
          <div class="pdp3-review-top">
            <div class="pdp3-reviewer-profile">
              <div class="pdp3-avatar-circle" style="background: rgba(58, 71, 54, 0.15); color: #3a4736;">${initials.toUpperCase()}</div>
              <div class="pdp3-reviewer-meta">
                <div class="pdp3-reviewer-name-row">
                  <strong class="pdp3-reviewer-name">${author}</strong>
                  <span class="pdp3-verified-badge" title="Verified Frank & Harri Boutique Customer">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified Order
                  </span>
                </div>
                <span class="pdp3-reviewer-loc">${loc} Â· Ordered ${sizeChosen}</span>
              </div>
            </div>
            <span class="pdp3-review-date">Just now</span>
          </div>

          <div class="pdp3-review-stars-row">
            <span class="pdp3-stars-gold">${starGoldIcons}</span>
            <span class="pdp3-badge-pill">${occasion}</span>
          </div>

          <h3 class="pdp3-review-headline">"${headline}"</h3>
          <p class="pdp3-review-body">${body}</p>

          <div class="pdp3-review-foot">
            <button type="button" class="pdp3-helpful-btn voted" data-review-id="${newRevId}" aria-label="Mark review as helpful">
              <span class="pdp3-thumb-icon">ðŸ‘</span>
              <span>Helpful (<span class="pdp3-helpful-count">1</span>)</span>
            </button>
            <span class="pdp3-purchased-variant">Format: ${sizeChosen}</span>
          </div>
        `;

        if (reviewsGrid) {
          reviewsGrid.insertBefore(newCard, reviewsGrid.firstChild);
        }

        // Wire helpful button on new card
        setupHelpfulButtons(newCard);

        // Update total review count displays (128 -> 129)
        const ratingCounts = document.querySelectorAll('.pdp3-rating-count, .pdp3-score-caption');
        ratingCounts.forEach(el => {
          el.textContent = el.textContent.replace('128', '129');
        });

        const allTabBtn = document.querySelector('#pdp3ReviewFilterTabs [data-filter="all"]');
        if (allTabBtn) allTabBtn.textContent = 'All Reviews (129)';

        // Close modal, reset form and notify user
        closeReviewModal();
        reviewForm.reset();
        reviewRating = 5;
        if (starPicker) {
          const starBtns = starPicker.querySelectorAll('.pdp3-star-btn');
          starBtns.forEach(btn => btn.classList.add('active'));
          if (starLabel) starLabel.textContent = starDescriptions[5];
        }

        showToast(`Thank you, ${author}! Your verified celebration review has been published.`);
      });
    }

    // (g) Load More Reviews Button
    const loadMoreBtn = document.getElementById('pdp3LoadMoreReviewsBtn');
    if (loadMoreBtn && reviewsGrid) {
      loadMoreBtn.addEventListener('click', () => {
        const extraCard1 = document.createElement('article');
        extraCard1.className = 'pdp3-review-card';
        extraCard1.setAttribute('data-category', 'milestone dinner');
        extraCard1.setAttribute('data-stars', '5');
        extraCard1.setAttribute('data-helpful', '14');
        extraCard1.setAttribute('data-date', '2026-09-28');
        extraCard1.innerHTML = `
          <div class="pdp3-review-top">
            <div class="pdp3-reviewer-profile">
              <div class="pdp3-avatar-circle">AK</div>
              <div class="pdp3-reviewer-meta">
                <div class="pdp3-reviewer-name-row">
                  <strong class="pdp3-reviewer-name">Amelia K.</strong>
                  <span class="pdp3-verified-badge">âœ“ Verified Order</span>
                </div>
                <span class="pdp3-reviewer-loc">Armadale VIC Â· Ordered 9" Classic</span>
              </div>
            </div>
            <span class="pdp3-review-date">4 weeks ago</span>
          </div>
          <div class="pdp3-review-stars-row">
            <span class="pdp3-stars-gold">â˜…â˜…â˜…â˜…â˜…</span>
            <span class="pdp3-badge-pill">Milestone 21st Birthday</span>
          </div>
          <h3 class="pdp3-review-headline">"The texture of the buttermilk layers is sublime."</h3>
          <p class="pdp3-review-body">We have ordered celebration cakes from several top Melbourne patisseries, but Frank & Harri's chocolate fudge frosting remains unmatched. Elegant, not overly sugary, and looked gorgeous in photos.</p>
          <div class="pdp3-review-foot">
            <button type="button" class="pdp3-helpful-btn" data-review-id="rev_extra_1">
              <span class="pdp3-thumb-icon">ðŸ‘</span>
              <span>Helpful (<span class="pdp3-helpful-count">14</span>)</span>
            </button>
            <span class="pdp3-purchased-variant">Format: 9" - (serves 12-14)</span>
          </div>
        `;

        const extraCard2 = document.createElement('article');
        extraCard2.className = 'pdp3-review-card';
        extraCard2.setAttribute('data-category', 'plaque dinner');
        extraCard2.setAttribute('data-stars', '5');
        extraCard2.setAttribute('data-helpful', '11');
        extraCard2.setAttribute('data-date', '2026-09-20');
        extraCard2.innerHTML = `
          <div class="pdp3-review-top">
            <div class="pdp3-reviewer-profile">
              <div class="pdp3-avatar-circle">TS</div>
              <div class="pdp3-reviewer-meta">
                <div class="pdp3-reviewer-name-row">
                  <strong class="pdp3-reviewer-name">Tom & Sarah H.</strong>
                  <span class="pdp3-verified-badge">âœ“ Verified Order</span>
                </div>
                <span class="pdp3-reviewer-loc">Malvern VIC Â· Ordered 6" Petite</span>
              </div>
            </div>
            <span class="pdp3-review-date">1 month ago</span>
          </div>
          <div class="pdp3-review-stars-row">
            <span class="pdp3-stars-gold">â˜…â˜…â˜…â˜…â˜…</span>
            <span class="pdp3-badge-pill">Family Gathering</span>
          </div>
          <h3 class="pdp3-review-headline">"Devoured within 10 minutes at the dinner table."</h3>
          <p class="pdp3-review-body">The chocolate plaque was so meticulously piped. Picked up smoothly on Saturday morning in Kew. Will definitely order again for Christmas!</p>
          <div class="pdp3-review-foot">
            <button type="button" class="pdp3-helpful-btn" data-review-id="rev_extra_2">
              <span class="pdp3-thumb-icon">ðŸ‘</span>
              <span>Helpful (<span class="pdp3-helpful-count">11</span>)</span>
            </button>
            <span class="pdp3-purchased-variant">Format: 6" - (serves 7â€“8)</span>
          </div>
        `;

        reviewsGrid.appendChild(extraCard1);
        reviewsGrid.appendChild(extraCard2);
        setupHelpfulButtons(extraCard1);
        setupHelpfulButtons(extraCard2);

        loadMoreBtn.innerHTML = '<span>All 128 Verified Reviews Loaded âœ“</span>';
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = '0.6';
        loadMoreBtn.style.cursor = 'default';
        showToast('All customer celebration reviews loaded.');
      });
    }

    // Sync right details height with left gallery on desktop to eliminate white space
    function syncPdp3ColumnHeights() {
      const gallery = document.querySelector('.pdp3-gallery');
      const details = document.querySelector('.pdp3-details');
      const grid = document.querySelector('.pdp3-grid');
      if (!gallery || !details) return;

      if (window.innerWidth >= 993) {
        const galleryHeight = Math.round(gallery.getBoundingClientRect().height);
        if (galleryHeight > 250) {
          details.style.maxHeight = `${galleryHeight}px`;
          details.style.setProperty('--pdp3-gallery-height', `${galleryHeight}px`);
          if (grid) grid.style.setProperty('--pdp3-gallery-height', `${galleryHeight}px`);
        }
      } else {
        details.style.maxHeight = '';
        details.style.removeProperty('--pdp3-gallery-height');
      }
    }

    syncPdp3ColumnHeights();
    window.addEventListener('resize', syncPdp3ColumnHeights);
    window.addEventListener('load', syncPdp3ColumnHeights);
    if (heroImg) {
      if (heroImg.complete) {
        syncPdp3ColumnHeights();
      } else {
        heroImg.addEventListener('load', syncPdp3ColumnHeights);
      }
    }

    // ResizeObserver watches gallery height changes (image load, dynamic resize)
    if (window.ResizeObserver) {
      const gallery = document.querySelector('.pdp3-gallery');
      if (gallery) {
        const ro = new ResizeObserver(() => {
          syncPdp3ColumnHeights();
        });
        ro.observe(gallery);
      }
    }

    // Scroll hint fade logic
    const detailsConsole = document.querySelector('.pdp3-details');
    const scrollHintBar = document.getElementById('pdp3ScrollHintBar');
    if (detailsConsole && scrollHintBar) {
      detailsConsole.addEventListener('scroll', () => {
        if (detailsConsole.scrollTop > 35) {
          scrollHintBar.classList.add('hidden');
        } else {
          scrollHintBar.classList.remove('hidden');
        }
      }, { passive: true });
    }

    // Test scroll param support
    const scrollParam = urlParams.get('scroll');
    if (scrollParam && detailsConsole) {
      setTimeout(() => {
        detailsConsole.scrollTop = parseInt(scrollParam, 10) || 500;
      }, 300);
    }

    // Initial View Sync
    updateView();
  }

  // --------------------------------------------------------------------------
  // 20. Product-4: Studio Card Reference PDP Layout (Frank & Harri Authentic)
  // --------------------------------------------------------------------------
  function initProduct4Page() {
    const pdp4Main = document.getElementById('pdp4Main');
    if (!pdp4Main && document.body.getAttribute('data-page') !== 'product-4') return;

    // Gallery Elements
    const heroImg = document.getElementById('pdp4HeroImg');
    const photoBadge = document.getElementById('pdp4PhotoBadge');
    const prevBtn = document.getElementById('pdp4PrevBtn');
    const nextBtn = document.getElementById('pdp4NextBtn');
    const counterPill = document.getElementById('pdp4Counter');
    const thumbBtns = Array.from(document.querySelectorAll('.pdp4-thumb-btn'));

    // Plaque Elements
    const plaqueOverlay = document.getElementById('pdp4PlaqueOverlay');
    const plaqueLiveText = document.getElementById('pdp4PlaqueLiveText');
    const plaqueToggleBox = document.getElementById('pdp4PlaqueToggleBox');
    const plaqueCheckbox = document.getElementById('pdp4PlaqueCheckbox');
    const plaqueInputWrap = document.getElementById('pdp4PlaqueInputWrap');
    const plaqueInput = document.getElementById('pdp4PlaqueInput');
    const charCounter = document.getElementById('pdp4CharCounter');

    // Controls
    const sizeCards = Array.from(document.querySelectorAll('.pdp4-size-card'));
    const portionLink = document.getElementById('pdp4PortionLink');
    const dateBtns = Array.from(document.querySelectorAll('.pdp4-date-btn'));
    const timeBtns = Array.from(document.querySelectorAll('.pdp4-time-btn'));
    const addonCards = Array.from(document.querySelectorAll('.pdp4-addon-card'));

    // Stepper & Add to Bag
    const qtyMinus = document.getElementById('pdp4QtyMinus');
    const qtyPlus = document.getElementById('pdp4QtyPlus');
    const qtyValue = document.getElementById('pdp4QtyValue');
    const addToCartBtn = document.getElementById('pdp4AddToCartBtn');
    const totalBtnPrice = document.getElementById('pdp4TotalBtnPrice');
    const orderSummaryText = document.getElementById('pdp4OrderSummaryText');

    // Express Checkout
    const applePayBtn = document.getElementById('pdp4ApplePayBtn');
    const googlePayBtn = document.getElementById('pdp4GooglePayBtn');
    const shopPayBtn = document.getElementById('pdp4ShopPayBtn');
    const conciergeTrigger = document.getElementById('pdp4ConciergeTrigger');

    // Tab buttons & panes
    const tabBtns = Array.from(document.querySelectorAll('.pdp4-tab-pill'));
    const tabPanes = Array.from(document.querySelectorAll('.pdp4-tab-pane'));

    // Photos data
    const photos = [
      { src: 'assets/images/bruce-cake-1.png', badge: 'PHOTO: WHOLE CAKE, FRONT VIEW' },
      { src: 'assets/images/bruce-cake-2.png', badge: 'PHOTO: 5-LAYER SLICE DETAIL' },
      { src: 'assets/images/bruce-cake-3.png', badge: 'PHOTO: GIFT BOX & PLAQUE' }
    ];
    let currentPhotoIdx = 0;

    function setPhoto(idx) {
      if (idx < 0) idx = photos.length - 1;
      if (idx >= photos.length) idx = 0;
      currentPhotoIdx = idx;

      if (heroImg) {
        heroImg.src = photos[idx].src;
      }
      if (photoBadge) {
        photoBadge.textContent = photos[idx].badge;
      }
      if (counterPill) {
        counterPill.textContent = `${idx + 1} / ${photos.length}`;
      }
      thumbBtns.forEach((tb, i) => {
        tb.classList.toggle('active', i === idx);
      });
    }

    thumbBtns.forEach((tb, i) => {
      tb.addEventListener('click', () => setPhoto(i));
    });
    if (prevBtn) {
      prevBtn.addEventListener('click', () => setPhoto(currentPhotoIdx - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => setPhoto(currentPhotoIdx + 1));
    }

    // State
    let selectedSize = 12;
    let selectedSizeName = '12" Grand Banquet';
    let selectedSizePrice = 209;
    let plaqueEnabled = true;
    const plaqueFee = 7.90;
    let plaqueText = plaqueInput ? plaqueInput.value.trim() : 'Happy 30th, Leo';
    let selectedDate = 'Thu 5 Nov';
    let selectedTime = '11:00am - 1:00pm';
    let quantity = 1;

    // Size card click
    sizeCards.forEach(card => {
      card.addEventListener('click', () => {
        sizeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedSize = parseInt(card.getAttribute('data-size'), 10);
        selectedSizeName = card.getAttribute('data-name');
        selectedSizePrice = parseFloat(card.getAttribute('data-price'));
        updatePricing();
      });
    });

    // Plaque toggle
    function updatePlaqueState(enabled) {
      plaqueEnabled = enabled;
      if (plaqueCheckbox) plaqueCheckbox.checked = enabled;
      if (plaqueToggleBox) plaqueToggleBox.classList.toggle('active', enabled);
      if (plaqueInputWrap) plaqueInputWrap.classList.toggle('visible', enabled);
      if (plaqueOverlay) plaqueOverlay.classList.toggle('visible', enabled);
      updatePricing();
    }

    if (plaqueCheckbox) {
      plaqueCheckbox.addEventListener('change', (e) => {
        updatePlaqueState(e.target.checked);
      });
    }
    if (plaqueToggleBox) {
      plaqueToggleBox.addEventListener('click', (e) => {
        if (e.target === plaqueCheckbox || e.target.closest('.pdp4-switch') || e.target.closest('.pdp4-slider')) return;
        updatePlaqueState(!plaqueEnabled);
      });
    }

    // Plaque text input
    if (plaqueInput) {
      plaqueInput.addEventListener('input', () => {
        plaqueText = plaqueInput.value;
        const count = plaqueText.length;
        if (charCounter) charCounter.textContent = `${count} / 28`;
        if (plaqueLiveText) {
          plaqueLiveText.textContent = plaqueText.trim() ? plaqueText : 'Your words here';
        }
      });
    }

    // Date buttons
    dateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dateBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDate = btn.getAttribute('data-date');
        updatePricing();
      });
    });

    // Time buttons
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = btn.getAttribute('data-time');
        updatePricing();
      });
    });

    // Addon cards
    addonCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
        const checkDot = card.querySelector('.pdp4-addon-check-dot');
        if (checkDot) {
          checkDot.textContent = card.classList.contains('active') ? 'âœ“' : '';
        }
        updatePricing();
      });
    });

    // Stepper
    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          if (qtyValue) qtyValue.textContent = quantity;
          updatePricing();
        }
      });
    }
    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        if (quantity < 10) {
          quantity++;
          if (qtyValue) qtyValue.textContent = quantity;
          updatePricing();
        }
      });
    }

    // Pricing calculation
    function getSelectedAddons() {
      const selected = [];
      addonCards.forEach(c => {
        if (c.classList.contains('active')) {
          selected.push({
            id: c.getAttribute('data-addon'),
            name: c.getAttribute('data-name'),
            price: parseFloat(c.getAttribute('data-price'))
          });
        }
      });
      return selected;
    }

    function updatePricing() {
      const addons = getSelectedAddons();
      const addonsTotal = addons.reduce((sum, item) => sum + item.price, 0);
      const plaqueCost = plaqueEnabled ? plaqueFee : 0;
      const unitTotal = selectedSizePrice + plaqueCost + addonsTotal;
      const overallTotal = unitTotal * quantity;

      if (totalBtnPrice) {
        totalBtnPrice.textContent = `$${overallTotal.toFixed(2)} AUD`;
      }
      if (orderSummaryText) {
        orderSummaryText.textContent = `${selectedSizeName} Â· ${selectedDate}, ${selectedTime}`;
      }
    }

    // Add to Cart
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        const addons = getSelectedAddons();
        const addonsTotal = addons.reduce((sum, item) => sum + item.price, 0);
        const plaqueCost = plaqueEnabled ? plaqueFee : 0;
        const unitPrice = selectedSizePrice + plaqueCost + addonsTotal;

        addToCart({
          id: 'bruce-chocolate-cake',
          name: 'Bruce Chocolate Cake',
          price: unitPrice,
          image: photos[0].src,
          size: selectedSizeName,
          flavour: 'Signature Belgian Fudge',
          hasPlaque: plaqueEnabled,
          plaqueText: plaqueEnabled ? plaqueText : '',
          fulfillment: 'Boutique Pickup',
          date: selectedDate,
          timeSlot: selectedTime,
          addons: addons.map(a => a.name),
          qty: quantity
        });
      });
    }

    // Express pay
    function handleExpressPay(method) {
      if (addToCartBtn) {
        addToCartBtn.click();
      }
      showToast(`Initiating ${method} Checkout...`);
    }
    if (applePayBtn) applePayBtn.addEventListener('click', () => handleExpressPay('Apple Pay'));
    if (googlePayBtn) googlePayBtn.addEventListener('click', () => handleExpressPay('Google Pay'));
    if (shopPayBtn) shopPayBtn.addEventListener('click', () => handleExpressPay('Shop Pay'));

    // Concierge
    if (conciergeTrigger) {
      conciergeTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const cateringModal = document.getElementById('cateringInquiryModal');
        if (cateringModal) {
          cateringModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    }

    // Portion guide link to tab
    if (portionLink) {
      portionLink.addEventListener('click', (e) => {
        e.preventDefault();
        tabBtns.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-tab') === 'portion');
        });
        tabPanes.forEach(pane => {
          pane.classList.toggle('active', pane.id === 'panePortion');
        });
        const bottomCard = document.getElementById('pdp4BottomCard');
        if (bottomCard) {
          bottomCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Bottom tab switching
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabTarget = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.toggle('active', b === btn));
        tabPanes.forEach(p => {
          if (tabTarget === 'collection' && p.id === 'paneCollection') p.classList.add('active');
          else if (tabTarget === 'allergens' && p.id === 'paneAllergens') p.classList.add('active');
          else if (tabTarget === 'portion' && p.id === 'panePortion') p.classList.add('active');
          else p.classList.remove('active');
        });
      });
    });

    // Initial calculation
    updatePricing();
  }

  // --------------------------------------------------------------------------
  // 21. Homepage Boutique Catering & Events Feature Showcase
  // --------------------------------------------------------------------------
  function initCateringFeatureSection() {
    const catSection = document.getElementById('cateringFeatureSection');
    if (!catSection) return;

    const catItems = Array.from(catSection.querySelectorAll('.fh-cat-item'));
    const cardImg = document.getElementById('fhCatCardImg');
    const photoBadge = document.getElementById('fhCatPhotoBadge');
    const countNum = document.getElementById('fhCatCountNum');
    const floatTitle = document.getElementById('fhCatFloatTitle');
    const floatDesc = document.getElementById('fhCatFloatDesc');
    const visualCard = document.getElementById('fhCatVisualCard');

    function setActiveCategory(item) {
      if (!item) return;
      catItems.forEach(it => it.classList.remove('active'));
      item.classList.add('active');

      const photo = item.getAttribute('data-photo');
      const badge = item.getAttribute('data-badge');
      const count = item.getAttribute('data-count');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      const href = item.getAttribute('data-href');

      if (cardImg && photo && cardImg.getAttribute('src') !== photo) {
        cardImg.style.opacity = '0.4';
        setTimeout(() => {
          cardImg.src = photo;
          cardImg.style.opacity = '1';
        }, 100);
      }
      if (photoBadge && badge) photoBadge.textContent = badge;
      if (countNum && count) countNum.textContent = count;
      if (floatTitle && title) floatTitle.textContent = title;
      if (floatDesc && desc) floatDesc.textContent = desc;
      if (visualCard && href) visualCard.setAttribute('href', href);
    }

    catItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        setActiveCategory(item);
      });
      item.addEventListener('focus', () => {
        setActiveCategory(item);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 22. Boutique Opening Hours & Good To Know FAQ Accordion
  // --------------------------------------------------------------------------
  function initBoutiqueSection() {
    const hoursCard = document.getElementById('fhHoursCard');
    if (hoursCard) {
      const todayDay = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const rows = hoursCard.querySelectorAll('.fh-hours-row');
      rows.forEach(row => {
        const dayVal = row.getAttribute('data-day');
        const daySpan = row.querySelector('.fh-hours-day');
        if (daySpan) {
          // Remove any existing " Â· today"
          daySpan.textContent = daySpan.textContent.replace(/\s*Â·\s*today/gi, '');
          if (dayVal !== null && parseInt(dayVal, 10) === todayDay) {
            row.classList.add('is-today');
            daySpan.textContent = daySpan.textContent.trim() + ' Â· today';
          } else {
            row.classList.remove('is-today');
          }
        }
      });
    }

    const faqAccordion = document.getElementById('fhFaqAccordion');
    if (faqAccordion) {
      const items = faqAccordion.querySelectorAll('.fh-faq-item');
      items.forEach(item => {
        const trigger = item.querySelector('.fh-faq-trigger');
        if (trigger) {
          trigger.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');
            items.forEach(it => {
              it.classList.remove('active');
              const tr = it.querySelector('.fh-faq-trigger');
              if (tr) tr.setAttribute('aria-expanded', 'false');
            });
            if (!isCurrentlyActive) {
              item.classList.add('active');
              trigger.setAttribute('aria-expanded', 'true');
            }
          });
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 23. PDP4 Rotating Celebration Testimonials Card Deck
  // --------------------------------------------------------------------------
  async function initPdp4TestimonialsDeck() {
    const deckStage = document.getElementById('pdp4DeckStage');
    if (!deckStage) return;

    // Optional: dynamically hydrate latest synced reviews from data/google-reviews.json
    try {
      const resp = await fetch('data/google-reviews.json');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.place_info) {
          const scoreEl = document.querySelector('.pdp4-deck-rating-score');
          const countEl = document.querySelector('.pdp4-deck-count');
          if (scoreEl && data.place_info.rating) {
            scoreEl.textContent = `${data.place_info.rating} â˜…â˜…â˜…â˜…â˜†`;
          }
          if (countEl && data.place_info.user_ratings_total) {
            countEl.textContent = `(${data.place_info.user_ratings_total}+ Verified Reviews)`;
          }
        }
        if (data && Array.isArray(data.reviews) && data.reviews.length > 0) {
          const existingCards = deckStage.querySelectorAll('.pdp4-deck-card');
          data.reviews.slice(0, existingCards.length).forEach((rev, i) => {
            const card = existingCards[i];
            if (!card) return;
            const headlineEl = card.querySelector('.pdp4-card-headline');
            const bodyEl = card.querySelector('.pdp4-card-body-text');
            const authorEl = card.querySelector('.pdp4-card-author-name');
            const subEl = card.querySelector('.pdp4-card-author-sub');
            const imgEl = card.querySelector('.pdp4-clover-frame img');
            const linkEl = card.querySelector('.pdp4-card-google-link');

            if (headlineEl && rev.headline) headlineEl.textContent = `"${rev.headline.replace(/^"|"$/g, '')}"`;
            if (bodyEl && rev.text) bodyEl.textContent = rev.text;
            if (authorEl && rev.author_name) {
              authorEl.innerHTML = `${rev.author_name} <span class="pdp4-verified-tick" title="Verified Google Reviewer">âœ“</span>`;
            }
            if (subEl && rev.relative_time) {
              const badge = rev.author_badge ? `${rev.author_badge} Â· ` : '';
              subEl.textContent = `${badge}${rev.relative_time}`;
            }
            if (imgEl && rev.photo_url) {
              imgEl.src = rev.photo_url;
              if (rev.photo_alt) imgEl.alt = rev.photo_alt;
            }
            if (linkEl && rev.google_maps_url) {
              linkEl.href = rev.google_maps_url;
            }
          });
        }
      }
    } catch (e) {
      // Quietly fall back to server-rendered cards
    }

    const cards = Array.from(deckStage.querySelectorAll('.pdp4-deck-card'));
    const dots = Array.from(document.querySelectorAll('.pdp4-deck-dot'));
    const nextBtn = document.getElementById('pdp4DeckNextBtn');
    const prevBtn = document.getElementById('pdp4DeckPrevBtn');
    const counter = document.getElementById('pdp4DeckCounter');
    const autoplayBtn = document.getElementById('pdp4DeckAutoplayBtn');
    const autoplayIcon = document.getElementById('pdp4DeckAutoplayIcon');
    const autoplayLabel = document.getElementById('pdp4DeckAutoplayLabel');

    if (!cards.length) return;

    const total = cards.length;
    let activeIndex = 0;
    let isAutoplaying = true;
    let autoplayTimer = null;
    const intervalMs = 5500;

    function updateDeck() {
      cards.forEach((card, idx) => {
        const pos = (idx - activeIndex + total) % total;
        card.setAttribute('data-pos', pos);
        card.setAttribute('aria-hidden', pos === 0 ? 'false' : 'true');
      });

      dots.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      if (counter) {
        counter.textContent = String(activeIndex + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
      }
    }

    function nextCard() {
      activeIndex = (activeIndex + 1) % total;
      updateDeck();
    }

    function prevCard() {
      activeIndex = (activeIndex - 1 + total) % total;
      updateDeck();
    }

    function goToCard(idx) {
      if (idx >= 0 && idx < total) {
        activeIndex = idx;
        updateDeck();
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (isAutoplaying) {
        autoplayTimer = setInterval(nextCard, intervalMs);
      }
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    // Direct card click: bringing peeking background card to the front
    cards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        // If clicking a link/button inside card, don't trigger rotation
        if (e.target.closest('a') || e.target.closest('button')) return;
        if (idx !== activeIndex) {
          goToCard(idx);
          if (isAutoplaying) startAutoplay();
        }
      });
    });

    // Arrow navigation
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextCard();
        if (isAutoplaying) startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevCard();
        if (isAutoplaying) startAutoplay();
      });
    }

    // Pagination dots
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          goToCard(idx);
          if (isAutoplaying) startAutoplay();
        }
      });
    });

    // Pause on hover
    deckStage.addEventListener('mouseenter', stopAutoplay);
    deckStage.addEventListener('mouseleave', () => {
      if (isAutoplaying) startAutoplay();
    });

    // Autoplay toggle button
    if (autoplayBtn) {
      autoplayBtn.addEventListener('click', () => {
        isAutoplaying = !isAutoplaying;
        if (isAutoplaying) {
          startAutoplay();
          if (autoplayIcon) autoplayIcon.textContent = 'â¸';
          if (autoplayLabel) autoplayLabel.textContent = 'Auto';
          autoplayBtn.setAttribute('aria-label', 'Pause automatic rotation');
        } else {
          stopAutoplay();
          if (autoplayIcon) autoplayIcon.textContent = 'â–¶';
          if (autoplayLabel) autoplayLabel.textContent = 'Paused';
          autoplayBtn.setAttribute('aria-label', 'Resume automatic rotation');
        }
      });
    }

    // Touch swipe support for mobile
    let touchStartX = 0;
    deckStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    deckStage.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].screenX - touchStartX;
      if (diffX < -40) {
        nextCard();
      } else if (diffX > 40) {
        prevCard();
      }
      if (isAutoplaying) startAutoplay();
    }, { passive: true });

    // Initial setup
    updateDeck();
    startAutoplay();
  }

  initProductDetailPage();
  initProduct3Page();
  initProduct4Page();
  initPdp4TestimonialsDeck();
  initCateringFeatureSection();
  initBoutiqueSection();
  initSalesDepartmentPage();
  initCateringWorkflow();
  updateCartUI();
});


