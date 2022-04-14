USE peopleEatery_db;

INSERT INTO category (name)
VALUES ("Appetizers"),
       ("Bar Classics"),
       ("Signature Dishes"),
       ("Lighter Fare"),
       ("Desserts");

INSERT INTO menu_item (category_id, name, description, price)
VALUES (1, "Mini Meatballs", "Soft, slow-cooked mounds of meat seasoned and sauced to perfection.", 5.99),
       (1, "Loaded Potato Skins", "Crispy skins, cheese, bacon, chives.", 4.99),
       (1, "Steak and Cheese Eggrolls", "American spin on a Far-East classic.", 6.99),
       (1, "Big-Time Brussels", "Brussels packed with enough flavor to make you forget it's not meat", 4.99),
       (1, "All of the Above", "Can't decide? How about a small portion of all our apps!", 14.99),
       (2, "Chicken Wings", "Arguably the best dish on the planet. Served bone-in with your choice of sauce and tots", 13.99),
       (2, "Bar Burger", "Half-pounder with onions, bacon, pepper-jack. Fries or tots to pair", 9.99),
       (2, "Nachos", "Ground steak, pico, 3 cheeses, spicy salsa", 10.99),
       (2, "Simple Caesar", "The classic. Add your choice of protein for an additional fee", 8.99),
       (3, "Combination Fried Rice", "Stop reading. Just order this. Please.", 12.99),
       (3, "Cajun Penne", "Penne, andouille, chicken, bacon bits, spinach, red onion, cajun sauce blend.", 16.99),
       (3, "Teriyaki Bento", "Your choice of protein served over white rice and sauteed broccoli. sesame seeds for garnish.", 14.99),
       (3, "Head Chef Heroics", "For the adventurous. A freestyled dish from our kitchen commander. Rotates frequently.", 19.99),
       (4, "Superb Salmon", "Pan-seared salmon served with parmesean garlic asparagus", 10.99),
       (4, "Supergreens Bowl", "Mix of all the buzzword health plants you've heard. Served with your choice of protein.", 9.99),
       (4, "Succulent Skewers", "Grilled chicken kebabs with mixed vegetables. Served with a tangy vinaigrette", 11.99),
       (4, "Chef Salad", "NOT THE USUAL. Lighter equivalent of Head Chef Heroics. 500 cal total.", 15.99),
       (5, "Skillet Cookie", "Pan fried cookie with whipped cream", 4.99),
       (5, "Brownie Sundae", "Creamy french-vanilla served with a warm brownie. Eat quickly!", 5.99),
       (5, "Strawberry Cheesecake", "Hefty slice of the classic cheesecake", 6.99);

-- INSERT INTO administrator (alias, pass)
-- VALUES ("nick", "pass"),
--        ("kirk", "pass"),
--        ("venkata", "pass"),
--        ("xuyang", "pass");