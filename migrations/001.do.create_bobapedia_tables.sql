CREATE TYPE boba_flavor AS ENUM (
  'wintermelon',
  'peach',
  'honeydew',
  'rose',
  'green apple',
  'guava',
  'lemon',
  'lychee',
  'mango',
  'passion fruit',
  'pineapple',
  'strawberry',
  'taro',
  'chocolate',
  'caramel',
  'black sesame',
  'lavender',
  'hazelnut',
  'pumpkin spice',
  'kiwi',
  'cherry',
  'blueberry',
  'watermelon',
  'pomegranate',
  'raspberry',
  'coffee',
  'matcha'
);

CREATE TYPE boba_milk AS ENUM (
  'fresh milk',
  'oat milk',
  'soy milk',
  'almond milk',
  'coconut milk'
);

CREATE TYPE boba_sweetener AS ENUM (
  'simple syrup',
  'honey',
  'condensed milk',
  'brown sugar syrup'
);

CREATE TYPE boba_tea AS ENUM (
  'green tea',
  'black tea',
  'thai tea',
  'chai tea',
  'oolong tea',
  'milk tea',
  'earl grey tea'
);

CREATE TYPE boba_addons AS ENUM (
  'boba',
  'crystal boba',
  'egg pudding',
  'aloe vera',
  'rainbow jelly',
  'red bean',
  'vanilla ice cream',
  'cheese foam',
  'whipped cream',
  'grass jelly',
  'crystal jelly',
  'almond pudding',
  'popping boba',
  'strawberry bits',
  'peach bits',
  'pineapple bits'
);

CREATE TABLE BobaAddOns (
  addon_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  addon_name boba_addons NOT NULL,
  addon_recipe TEXT NOT NULL
);

CREATE TABLE BobaTea (
  tea_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  tea_name boba_tea NOT NULL,
  tea_recipe TEXT NOT NULL
);

CREATE TABLE UserLogin (
  user_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_name TEXT NOT NULL,	
  user_pass TEXT NOT NULL
);

CREATE TABLE UserCreation (
  creation_user	INTEGER REFERENCES UserLogin(user_id) ON DELETE CASCADE,
  creation_id	INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  creation_name	TEXT NOT NULL,
  creation_tea INTEGER NOT NULL REFERENCES BobaTea(tea_id) ON DELETE CASCADE,
  creation_flavor1 boba_flavor,
  creation_flavor2 boba_flavor,
  creation_addons1 INTEGER REFERENCES BobaAddOns(addon_id) ON DELETE CASCADE,
  creation_addons2 INTEGER REFERENCES BobaAddOns(addon_id) ON DELETE CASCADE,
  creation_milk	boba_milk,
  creation_sweetener boba_sweetener
);

CREATE TABLE Classic (
  classic_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  classic_name TEXT NOT NULL,
  classic_tea INTEGER NOT NULL REFERENCES BobaTea(tea_id) ON DELETE CASCADE,
  classic_flavor1 boba_flavor,
  classic_flavor2 boba_flavor,
  classic_addons1	INTEGER REFERENCES BobaAddOns(addon_id) ON DELETE CASCADE,
  classic_addons2 INTEGER REFERENCES BobaAddOns(addon_id) ON DELETE CASCADE,
  classic_milk	boba_milk,
  classic_sweetener boba_sweetener 
);
