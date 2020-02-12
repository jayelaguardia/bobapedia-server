INSERT INTO UserLogin (user_name, user_pass)
VALUES
  ('dunder', 'mifflin');

INSERT INTO BobaTea (tea_name, tea_recipe)
VALUES 
  ('green tea', 'INSERT RECIPE HERE'),
  ('black tea', 'INSERT RECIPE HERE'),
  ('thai tea', 'INSERT RECIPE HERE'),
  ('chai tea', 'INSERT RECIPE HERE'),
  ('oolong tea', 'INSERT RECIPE HERE'),
  ('milk tea', 'INSERT RECIPE HERE'),
  ('earl grey tea', 'INSERT RECIPE HERE');

INSERT INTO BobaAddOns (addon_name, addon_recipe)
VALUES
  ('boba', 'INSERT RECIPE HERE'),
  ('crystal boba', 'INSERT RECIPE HERE'),
  ('egg pudding', 'INSERT RECIPE HERE'),
  ('aloe vera', 'INSERT RECIPE HERE'),
  ('rainbow jelly', 'INSERT RECIPE HERE'),
  ('red bean', 'INSERT RECIPE HERE'),
  ('vanilla ice cream', 'INSERT RECIPE HERE'),
  ('cheese foam', 'INSERT RECIPE HERE'),
  ('whipped cream', 'INSERT RECIPE HERE'),
  ('grass jelly', 'INSERT RECIPE HERE'),
  ('crystal jelly', 'INSERT RECIPE HERE'),
  ('almond pudding', 'INSERT RECIPE HERE'),
  ('popping boba', 'INSERT RECIPE HERE'),
  ('strawberry bits', 'INSERT RECIPE HERE'),
  ('peach bits', 'INSERT RECIPE HERE'),
  ('pineapple bits', 'INSERT RECIPE HERE');

INSERT INTO Classic (
  classic_name,
  classic_tea,
  classic_flavor1,	
  classic_flavor2,
  classic_addons1,	
  classic_addons2,	
  classic_milk,	
  classic_sweetener
  )
VALUES
  ('Matcha Red Bean Love', 
  6, 
  'matcha', 
  NULL, 
  6, 
  7, 
  NULL, 
  NULL),
  ('Honey Green Tea', 
  1, 
  NULL, 
  NULL, 
  3, 
  NULL, 
  'fresh milk', 
  'honey'),
  ('Wintermelon Black Tea', 
  2, 
  'wintermelon', 
  NULL, 
  1, 
  NULL, 
  NULL, 
  'simple syrup'),
  ('Peach Black Tea', 
  2, 
  'peach', 
  NULL, 
  15, 
  NULL, 
  NULL, 
  'simple syrup'),
  ('BB Fall', 
  2, 
  'caramel', 
  'pumpkin spice', 
  9, 
  NULL, 
  'oat milk', 
  'condensed milk'),
  ('Pina Colada', 
  1, 
  'pineapple', 
  NULL, 
  5, 
  NULL, 
  'coconut milk', 
  'simple syrup'),
  ('Neopalitan', 
  2, 
  'chocolate', 
  'strawberry', 
  7, 
  1, 
  'fresh milk', 
  NULL),
  ('The Taste of Chartreuse', 
  1, 
  'passion fruit', 
  'mango', 
  13, 
  NULL, 
  NULL, 
  'simple syrup'),
  ('Caramel Milk Tea', 
  6, 
  'caramel', 
  NULL, 
  1, 
  NULL, 
  NULL, 
  'brown sugar syrup'),
  ('Honey Oolong Tea', 
  5, 
  NULL, 
  NULL, 
  1, 
  NULL, 
  'fresh milk', 
  'honey'),
  ('Berry Strawberry', 
  2, 
  'strawberry', 
  NULL, 
  14, 
  NULL, 
  NULL, 
  'brown sugar syrup'),
  ('Melona Mania', 
  1, 
  'honeydew', 
  'watermelon', 
  2, 
  NULL, 
  NULL, 
  'condensed milk'),
  ('The Cheese', 
  1, 
  NULL, 
  NULL, 
  8, 
  1, 
  NULL, 
  'simple syrup'),
  ('Honey Lavender Earl Grey', 
  7, 
  'lavender', 
  NULL, 
  NULL, 
  NULL, 
  'soy milk', 
  'honey'),
  ('3 Bean Soup', 
  2, 
  'coffee', 
  NULL, 
  6, 
  NULL, 
  'soy milk', 
  'condensed milk');

INSERT INTO UserCreation (
  creation_user,	
  creation_id,	
  creation_name,	
  creation_tea, 
  creation_flavor1,
  creation_flavor2, 
  creation_addons1, 
  creation_addons2, 
  creation_milk,
  creation_sweetener
  )
VALUES
  (1, 1, 'THIS IS A TEST 1', 1, null, null, null, null, null, null);