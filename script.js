
const allCards = [
    {"Superstar":"Adam Cole","Gender":"Male","POW":269.96,"TGH":270.46,"SPD":268.4,"CHA":272.1,"Total":1080.92,"Group":"WM"},
    {"Superstar":"Akam","Gender":"Male","POW":269.85,"TGH":268.93,"SPD":265.62,"CHA":265.29,"Total":1069.69,"Group":"WM"},
    {"Superstar":"Aleister Black","Gender":"Male","POW":269.03,"TGH":271.2,"SPD":269.62,"CHA":267.33,"Total":1077.18,"Group":"WM"},
    {"Superstar":"Alexa Bliss","Gender":"Female","POW":268.08,"TGH":265.62,"SPD":269.55,"CHA":267.1,"Total":1070.35,"Group":"WM"},
    {"Superstar":"Alexander Wolfe","Gender":"Male","POW":268.17,"TGH":266.86,"SPD":262.53,"CHA":264.63,"Total":1062.19,"Group":"WM"},
    {"Superstar":"Andrade","Gender":"Male","POW":270.72,"TGH":267.44,"SPD":273.02,"CHA":269.74,"Total":1080.92,"Group":"WM"},
    {"Superstar":"Angelo Dawkins","Gender":"Male","POW":270.15,"TGH":268.73,"SPD":265.12,"CHA":267.55,"Total":1071.55,"Group":"WM"},
    {"Superstar":"Asuka","Gender":"Female","POW":271.3,"TGH":270.31,"SPD":265.98,"CHA":266.84,"Total":1074.43,"Group":"WM"},
    {"Superstar":"Bayley","Gender":"Female","POW":266.49,"TGH":267.81,"SPD":270.43,"CHA":271.74,"Total":1076.47,"Group":"WM"},
    {"Superstar":"Becky Lynch","Gender":"Female","POW":268.5,"TGH":269.81,"SPD":270.46,"CHA":271.78,"Total":1080.55,"Group":"WM"},
    {"Superstar":"Bianca Belair","Gender":"Female","POW":268.53,"TGH":267.22,"SPD":265.91,"CHA":264.6,"Total":1066.26,"Group":"WM"},
    {"Superstar":"Big E","Gender":"Male","POW":271.92,"TGH":270.61,"SPD":266.67,"CHA":267.98,"Total":1077.18,"Group":"WM"},
    {"Superstar":"Bobby Fish","Gender":"Male","POW":269.87,"TGH":267.45,"SPD":270.96,"CHA":267.02,"Total":1075.3,"Group":"WM"},
    {"Superstar":"Braun Strowman","Gender":"Male","POW":273.18,"TGH":271.84,"SPD":267.8,"CHA":268.1,"Total":1080.92,"Group":"WM"},
    {"Superstar":"Bray Wyatt","Gender":"Male","POW":272.49,"TGH":270.91,"SPD":269.41,"CHA":273.73,"Total":1086.54,"Group":"WM"},
    {"Superstar":"Brock Lesnar","Gender":"Male","POW":275.38,"TGH":272.76,"SPD":271.12,"CHA":268.83,"Total":1088.09,"Group":"WM"},
    {"Superstar":"Carmella","Gender":"Female","POW":266.42,"TGH":265.27,"SPD":268.88,"CHA":267.73,"Total":1068.3,"Group":"WM"},
    {"Superstar":"Cesaro","Gender":"Male","POW":269.66,"TGH":268.41,"SPD":267.43,"CHA":266.05,"Total":1071.55,"Group":"WM"},
    {"Superstar":"Charlotte Flair","Gender":"Female","POW":271.6,"TGH":270.87,"SPD":267.65,"CHA":268.38,"Total":1078.5,"Group":"WM"},
    {"Superstar":"Damien Priest","Gender":"Male","POW":271.25,"TGH":267.71,"SPD":266.73,"CHA":269.61,"Total":1075.3,"Group":"WM"},
    {"Superstar":"Daniel Bryan","Gender":"Male","POW":267.75,"TGH":269.55,"SPD":271.52,"CHA":273.98,"Total":1082.8,"Group":"WM"},
    {"Superstar":"Dolph Ziggler","Gender":"Male","POW":265.03,"TGH":267.03,"SPD":269.16,"CHA":268.47,"Total":1069.69,"Group":"WM"},
    {"Superstar":"Drew McIntyre","Gender":"Male","POW":271.99,"TGH":268.79,"SPD":269.64,"CHA":270.5,"Total":1080.92,"Group":"WM"},
    {"Superstar":"Fabian Aichner","Gender":"Male","POW":267.59,"TGH":265.49,"SPD":267.06,"CHA":263.92,"Total":1064.06,"Group":"WM"},
    {"Superstar":"Humberto Carrillo","Gender":"Male","POW":266.09,"TGH":268.61,"SPD":270.02,"CHA":266.84,"Total":1071.56,"Group":"WM"},
    {"Superstar":"Joe Coffey","Gender":"Male","POW":269.68,"TGH":270.6,"SPD":267.19,"CHA":267.84,"Total":1075.31,"Group":"WM"},
    {"Superstar":"John Morrison","Gender":"Male","POW":268.94,"TGH":267.47,"SPD":272.55,"CHA":270.09,"Total":1079.05,"Group":"WM"},
    {"Superstar":"Johnny Gargano","Gender":"Male","POW":269.07,"TGH":271.66,"SPD":270.39,"CHA":267.93,"Total":1079.05,"Group":"WM"},
    {"Superstar":"Jordan Devlin","Gender":"Male","POW":268.7,"TGH":270.34,"SPD":271.2,"CHA":266.93,"Total":1077.17,"Group":"WM"},
    {"Superstar":"Kairi Sane","Gender":"Female","POW":268.24,"TGH":269.52,"SPD":264.89,"CHA":263.62,"Total":1066.27,"Group":"WM"},
    {"Superstar":"Kay Lee Ray","Gender":"Female","POW":267.51,"TGH":269.93,"SPD":268.69,"CHA":266.26,"Total":1072.39,"Group":"WM"},
    {"Superstar":"Keith Lee","Gender":"Male","POW":272.33,"TGH":268.39,"SPD":270.76,"CHA":269.44,"Total":1080.92,"Group":"WM"},
    {"Superstar":"Kevin Owens","Gender":"Male","POW":271.87,"TGH":270.89,"SPD":267.94,"CHA":270.22,"Total":1080.92,"Group":"WM"},
    {"Superstar":"King Corbin","Gender":"Male","POW":269.61,"TGH":270.91,"SPD":265.87,"CHA":267.05,"Total":1073.44,"Group":"WM"},
    {"Superstar":"Kofi Kingston","Gender":"Male","POW":267.24,"TGH":270.59,"SPD":272.22,"CHA":269.01,"Total":1079.06,"Group":"WM"},
    {"Superstar":"Kushida","Gender":"Male","POW":266.66,"TGH":270.07,"SPD":270.86,"CHA":267.71,"Total":1075.3,"Group":"WM"},
    {"Superstar":"Kyle O'Reilly","Gender":"Male","POW":267.37,"TGH":270.0,"SPD":269.34,"CHA":266.72,"Total":1073.43,"Group":"WM"},
    {"Superstar":"Lacey Evans","Gender":"Female","POW":269.12,"TGH":268.38,"SPD":265.04,"CHA":265.77,"Total":1068.31,"Group":"WM"},
    {"Superstar":"Lio Rush","Gender":"Male","POW":266.71,"TGH":267.04,"SPD":270.65,"CHA":269.03,"Total":1073.43,"Group":"WM"},
    {"Superstar":"Marcel Barthel","Gender":"Male","POW":267.27,"TGH":265.7,"SPD":268.32,"CHA":264.65,"Total":1065.94,"Group":"WM"},
    {"Superstar":"Mark Coffey","Gender":"Male","POW":267.82,"TGH":269.13,"SPD":267.95,"CHA":266.64,"Total":1071.54,"Group":"WM"},
    {"Superstar":"Matt Riddle","Gender":"Male","POW":268.24,"TGH":271.2,"SPD":267.39,"CHA":270.34,"Total":1077.17,"Group":"WM"},
    {"Superstar":"Montez Ford","Gender":"Male","POW":266.39,"TGH":268.03,"SPD":270.0,"CHA":269.01,"Total":1073.43,"Group":"WM"},
    {"Superstar":"Murphy","Gender":"Male","POW":271.06,"TGH":270.15,"SPD":268.48,"CHA":267.48,"Total":1077.17,"Group":"WM"},
    {"Superstar":"Mustafa Ali","Gender":"Male","POW":265.72,"TGH":269.97,"SPD":270.96,"CHA":268.66,"Total":1075.31,"Group":"WM"},
    {"Superstar":"Naomi","Gender":"Female","POW":267.96,"TGH":265.4,"SPD":263.76,"CHA":267.11,"Total":1064.23,"Group":"WM"},
    {"Superstar":"Otis","Gender":"Male","POW":269.08,"TGH":266.95,"SPD":264.92,"CHA":266.85,"Total":1067.8,"Group":"WM"},
    {"Superstar":"Pete Dunne","Gender":"Male","POW":268.71,"TGH":272.06,"SPD":267.47,"CHA":270.81,"Total":1079.05,"Group":"WM"},
    {"Superstar":"Randy Orton","Gender":"Male","POW":271.49,"TGH":270.17,"SPD":272.53,"CHA":268.6,"Total":1082.79,"Group":"WM"},
    {"Superstar":"Randy Savage","Gender":"Male","POW":268.82,"TGH":269.58,"SPD":271.59,"CHA":272.8,"Total":1082.79,"Group":"WM"},
    {"Superstar":"Rey Mysterio","Gender":"Male","POW":266.55,"TGH":268.28,"SPD":273.04,"CHA":271.24,"Total":1079.11,"Group":"WM"},
    {"Superstar":"Rezar","Gender":"Male","POW":268.33,"TGH":269.61,"SPD":265.51,"CHA":264.36,"Total":1067.81,"Group":"WM"},
    {"Superstar":"Rhea Ripley","Gender":"Female","POW":271.15,"TGH":269.58,"SPD":267.22,"CHA":268.53,"Total":1076.48,"Group":"WM"},
    {"Superstar":"Ric Flair","Gender":"Male","POW":272.95,"TGH":270.32,"SPD":269.01,"CHA":274.26,"Total":1086.54,"Group":"WM"},
    {"Superstar":"Ricochet","Gender":"Male","POW":266.67,"TGH":269.29,"SPD":271.26,"CHA":269.95,"Total":1077.17,"Group":"WM"},
    {"Superstar":"Robert Roode","Gender":"Male","POW":270.0,"TGH":265.47,"SPD":266.72,"CHA":271.24,"Total":1073.43,"Group":"WM"},
    {"Superstar":"Roderick Strong","Gender":"Male","POW":271.27,"TGH":268.57,"SPD":269.95,"CHA":267.39,"Total":1077.18,"Group":"WM"},
    {"Superstar":"Roman Reigns","Gender":"Male","POW":272.67,"TGH":271.55,"SPD":268.73,"CHA":269.85,"Total":1082.8,"Group":"WM"},
    {"Superstar":"Samoa Joe","Gender":"Male","POW":272.21,"TGH":268.61,"SPD":270.59,"CHA":267.63,"Total":1079.04,"Group":"WM"},
    {"Superstar":"Seth Rollins","Gender":"Male","POW":269.2,"TGH":270.51,"SPD":273.13,"CHA":271.82,"Total":1084.66,"Group":"WM"},
    {"Superstar":"Shayna Bazler","Gender":"Female","POW":270.9,"TGH":268.93,"SPD":268.28,"CHA":266.31,"Total":1074.42,"Group":"WM"},
    {"Superstar":"Sheamus","Gender":"Male","POW":271.36,"TGH":269.69,"SPD":267.16,"CHA":268.97,"Total":1077.18,"Group":"WM"},
    {"Superstar":"Shinsuke Nakamura","Gender":"Male","POW":266.08,"TGH":270.54,"SPD":269.1,"CHA":271.46,"Total":1077.18,"Group":"WM"},
    {"Superstar":"Sting","Gender":"Male","POW":271.87,"TGH":268.36,"SPD":269.48,"CHA":271.21,"Total":1080.92,"Group":"WM"},
    {"Superstar":"The Miz","Gender":"Male","POW":269.81,"TGH":265.88,"SPD":268.17,"CHA":271.44,"Total":1075.3,"Group":"WM"},
    {"Superstar":"Tommaso Ciampa","Gender":"Male","POW":271.07,"TGH":272.39,"SPD":267.14,"CHA":268.45,"Total":1079.05,"Group":"WM"},
    {"Superstar":"Toni Storm","Gender":"Female","POW":268.18,"TGH":265.42,"SPD":267.0,"CHA":269.75,"Total":1070.35,"Group":"WM"},
    {"Superstar":"Trent Seven","Gender":"Male","POW":267.31,"TGH":270.32,"SPD":266.78,"CHA":269.01,"Total":1073.42,"Group":"WM"},
    {"Superstar":"Tucker","Gender":"Male","POW":268.45,"TGH":266.55,"SPD":266.61,"CHA":264.32,"Total":1065.93,"Group":"WM"},
    {"Superstar":"Tyler Bate","Gender":"Male","POW":270.83,"TGH":266.86,"SPD":269.45,"CHA":268.17,"Total":1075.31,"Group":"WM"},
    {"Superstar":"Velveteen Dream","Gender":"Male","POW":271.08,"TGH":266.48,"SPD":269.1,"CHA":272.39,"Total":1079.05,"Group":"WM"},
    {"Superstar":"Walter","Gender":"Male","POW":272.35,"TGH":270.72,"SPD":268.44,"CHA":269.41,"Total":1080.92,"Group":"WM"},
    {"Superstar":"Wolfgang","Gender":"Male","POW":270.26,"TGH":266.32,"SPD":269.08,"CHA":267.77,"Total":1073.43,"Group":"WM"},
    {"Superstar":"Xavier Woods","Gender":"Male","POW":267.54,"TGH":265.87,"SPD":270.65,"CHA":269.37,"Total":1073.43,"Group":"WM"},
    {"Superstar":"Zelina Vega","Gender":"Female","POW":263.65,"TGH":264.83,"SPD":267.58,"CHA":266.14,"Total":1062.2,"Group":"WM"},
    {"Superstar":"AJ Styles","Gender":"Male","POW":348.87,"TGH":343.56,"SPD":350.91,"CHA":346.76,"Total":1390.1,"Group":"Elemental"},
    {"Superstar":"Aleister Black","Gender":"Male","POW":345.38,"TGH":348.16,"SPD":346.14,"CHA":343.19,"Total":1382.87,"Group":"Elemental"},
    {"Superstar":"Andrade","Gender":"Male","POW":347.55,"TGH":343.34,"SPD":350.51,"CHA":346.29,"Total":1387.69,"Group":"Elemental"},
    {"Superstar":"Angel Garza","Gender":"Male","POW":342.65,"TGH":340.96,"SPD":346.86,"CHA":345.18,"Total":1375.65,"Group":"Elemental"},
    {"Superstar":"Angelo Dawkins","Gender":"Male","POW":348.02,"TGH":346.2,"SPD":341.56,"CHA":344.68,"Total":1380.46,"Group":"Elemental"},
    {"Superstar":"Asuka","Gender":"Female","POW":350.21,"TGH":348.94,"SPD":343.37,"CHA":344.47,"Total":1386.99,"Group":"Elemental"},
    {"Superstar":"Batista","Gender":"Male","POW":351.43,"TGH":349.74,"SPD":346.37,"CHA":347.38,"Total":1394.92,"Group":"Elemental"},
    {"Superstar":"Bayley","Gender":"Female","POW":342.72,"TGH":344.41,"SPD":347.78,"CHA":349.47,"Total":1384.38,"Group":"Elemental"},
    {"Superstar":"Becky Lynch","Gender":"Female","POW":345.3,"TGH":346.98,"SPD":347.83,"CHA":349.51,"Total":1389.62,"Group":"Elemental"},
    {"Superstar":"Big E","Gender":"Male","POW":349.09,"TGH":347.4,"SPD":342.34,"CHA":344.03,"Total":1382.86,"Group":"Elemental"},
    {"Superstar":"Bobby Lashley","Gender":"Male","POW":346.87,"TGH":344.97,"SPD":342.64,"CHA":341.16,"Total":1375.64,"Group":"Elemental"},
    {"Superstar":"Braun Strowman","Gender":"Male","POW":352.52,"TGH":350.79,"SPD":345.61,"CHA":345.99,"Total":1394.91,"Group":"Elemental"},
    {"Superstar":"Cesaro","Gender":"Male","POW":345.58,"TGH":343.98,"SPD":342.72,"CHA":340.95,"Total":1373.23,"Group":"Elemental"},
    {"Superstar":"Charlotte Flair","Gender":"Female","POW":348.63,"TGH":347.69,"SPD":343.55,"CHA":344.49,"Total":1384.36,"Group":"Elemental"},
    {"Superstar":"Dakota Kai","Gender":"Female","POW":338.97,"TGH":340.66,"SPD":343.95,"CHA":342.43,"Total":1366.01,"Group":"Elemental"},
    {"Superstar":"Damian Priest","Gender":"Male","POW":348.24,"TGH":343.68,"SPD":342.42,"CHA":346.13,"Total":1380.47,"Group":"Elemental"},
    {"Superstar":"Daniel Bryan","Gender":"Male","POW":343.13,"TGH":345.45,"SPD":347.98,"CHA":351.14,"Total":1387.7,"Group":"Elemental"},
    {"Superstar":"Dolph Ziggler","Gender":"Male","POW":340.23,"TGH":342.8,"SPD":345.54,"CHA":344.66,"Total":1373.23,"Group":"Elemental"},
    {"Superstar":"Drew McIntyre","Gender":"Male","POW":351.6,"TGH":348.57,"SPD":347.48,"CHA":349.68,"Total":1397.33,"Group":"Elemental"},
    {"Superstar":"Eddie Guerrero","Gender":"Male","POW":346.01,"TGH":344.49,"SPD":349.97,"CHA":349.63,"Total":1390.1,"Group":"Elemental"},
    {"Superstar":"Edge","Gender":"Male","POW":349.6,"TGH":344.12,"SPD":347.41,"CHA":351.37,"Total":1392.5,"Group":"Elemental"},
    {"Superstar":"Erik","Gender":"Male","POW":348.22,"TGH":346.62,"SPD":341.94,"CHA":341.27,"Total":1378.05,"Group":"Elemental"},
    {"Superstar":"Finn Balor","Gender":"Male","POW":347.77,"TGH":344.31,"SPD":349.62,"CHA":345.99,"Total":1387.69,"Group":"Elemental"},
    {"Superstar":"Goldberg","Gender":"Male","POW":350.63,"TGH":346.41,"SPD":347.25,"CHA":350.63,"Total":1394.92,"Group":"Elemental"},
    {"Superstar":"Io Shirai","Gender":"Female","POW":340.26,"TGH":344.99,"SPD":346.34,"CHA":342.29,"Total":1373.88,"Group":"Elemental"},
    {"Superstar":"Ivar","Gender":"Male","POW":348.91,"TGH":347.09,"SPD":343.56,"CHA":340.9,"Total":1380.46,"Group":"Elemental"},
    {"Superstar":"Jeff Hardy","Gender":"Male","POW":343.38,"TGH":348.78,"SPD":350.46,"CHA":345.07,"Total":1387.69,"Group":"Elemental"},
    {"Superstar":"Jey Uso","Gender":"Male","POW":343.79,"TGH":343.0,"SPD":344.93,"CHA":346.33,"Total":1378.05,"Group":"Elemental"},
    {"Superstar":"Jimmy Uso","Gender":"Male","POW":343.56,"TGH":343.89,"SPD":346.72,"CHA":346.3,"Total":1380.47,"Group":"Elemental"},
    {"Superstar":"Jinder Mahal","Gender":"Male","POW":349.43,"TGH":347.91,"SPD":341.59,"CHA":343.95,"Total":1382.88,"Group":"Elemental"},
    {"Superstar":"John Morrison","Gender":"Male","POW":345.27,"TGH":343.37,"SPD":349.9,"CHA":346.74,"Total":1385.28,"Group":"Elemental"},
    {"Superstar":"Johnny Gargano","Gender":"Male","POW":345.43,"TGH":348.77,"SPD":347.12,"CHA":343.96,"Total":1385.28,"Group":"Elemental"},
    {"Superstar":"Jordan Devlin","Gender":"Male","POW":344.36,"TGH":346.46,"SPD":347.56,"CHA":342.08,"Total":1380.46,"Group":"Elemental"},
    {"Superstar":"Kairi Sane","Gender":"Female","POW":344.96,"TGH":346.61,"SPD":340.66,"CHA":339.02,"Total":1371.25,"Group":"Elemental"},
    {"Superstar":"Kane","Gender":"Male","POW":347.8,"TGH":348.64,"SPD":342.1,"CHA":346.74,"Total":1385.28,"Group":"Elemental"},
    {"Superstar":"Keith Lee","Gender":"Male","POW":349.02,"TGH":343.96,"SPD":346.99,"CHA":345.31,"Total":1385.28,"Group":"Elemental"},
    {"Superstar":"Kevin Owens","Gender":"Male","POW":349.03,"TGH":347.77,"SPD":343.97,"CHA":346.91,"Total":1387.68,"Group":"Elemental"},
    {"Superstar":"King Corbin","Gender":"Male","POW":345.52,"TGH":347.19,"SPD":340.71,"CHA":342.22,"Total":1375.64,"Group":"Elemental"},
    {"Superstar":"Kofi Kingston","Gender":"Male","POW":343.07,"TGH":347.38,"SPD":349.47,"CHA":345.35,"Total":1385.27,"Group":"Elemental"},
    {"Superstar":"Kushida","Gender":"Male","POW":341.73,"TGH":346.12,"SPD":347.13,"CHA":343.08,"Total":1378.06,"Group":"Elemental"},
    {"Superstar":"Lita","Gender":"Female","POW":345.88,"TGH":348.25,"SPD":349.49,"CHA":343.38,"Total":1387.0,"Group":"Elemental"},
    {"Superstar":"Matt Riddle","Gender":"Male","POW":344.37,"TGH":348.16,"SPD":343.27,"CHA":347.07,"Total":1382.87,"Group":"Elemental"},
    {"Superstar":"Mercedes Martinez","Gender":"Female","POW":341.74,"TGH":344.52,"SPD":339.21,"CHA":343.17,"Total":1368.64,"Group":"Elemental"},
    {"Superstar":"Mia Yim","Gender":"Female","POW":344.52,"TGH":343.17,"SPD":340.64,"CHA":340.3,"Total":1368.63,"Group":"Elemental"},
    {"Superstar":"Montez Ford","Gender":"Male","POW":343.19,"TGH":345.3,"SPD":347.83,"CHA":346.56,"Total":1382.88,"Group":"Elemental"},
    {"Superstar":"Murphy","Gender":"Male","POW":347.99,"TGH":346.82,"SPD":344.67,"CHA":343.39,"Total":1382.87,"Group":"Elemental"},
    {"Superstar":"Nia Jax","Gender":"Female","POW":347.03,"TGH":344.58,"SPD":338.6,"CHA":341.04,"Total":1371.25,"Group":"Elemental"},
    {"Superstar":"Otis","Gender":"Male","POW":347.25,"TGH":344.51,"SPD":341.9,"CHA":344.39,"Total":1378.05,"Group":"Elemental"},
    {"Superstar":"Pete Dunne","Gender":"Male","POW":345.57,"TGH":349.87,"SPD":343.97,"CHA":348.27,"Total":1387.68,"Group":"Elemental"},
    {"Superstar":"R-Truth","Gender":"Male","POW":342.83,"TGH":341.14,"SPD":346.2,"CHA":347.89,"Total":1378.06,"Group":"Elemental"},
    {"Superstar":"Randy Orton","Gender":"Male","POW":349.74,"TGH":348.05,"SPD":351.09,"CHA":346.03,"Total":1394.91,"Group":"Elemental"},
    {"Superstar":"Rey Mysterio","Gender":"Male","POW":342.19,"TGH":344.41,"SPD":350.54,"CHA":348.22,"Total":1385.36,"Group":"Elemental"},
    {"Superstar":"Rhea Ripley","Gender":"Female","POW":346.74,"TGH":344.72,"SPD":341.68,"CHA":343.37,"Total":1376.51,"Group":"Elemental"},
    {"Superstar":"Ricochet","Gender":"Male","POW":341.74,"TGH":345.12,"SPD":347.64,"CHA":345.96,"Total":1380.46,"Group":"Elemental"},
    {"Superstar":"Roman Reigns","Gender":"Male","POW":350.66,"TGH":349.22,"SPD":345.6,"CHA":347.03,"Total":1392.51,"Group":"Elemental"},
    {"Superstar":"Sami Zayn","Gender":"Male","POW":342.77,"TGH":344.24,"SPD":348.67,"CHA":347.19,"Total":1382.87,"Group":"Elemental"},
    {"Superstar":"Samoa Joe","Gender":"Male","POW":350.07,"TGH":345.45,"SPD":347.99,"CHA":344.18,"Total":1387.69,"Group":"Elemental"},
    {"Superstar":"Sasha Banks","Gender":"Female","POW":344.16,"TGH":346.49,"SPD":342.92,"CHA":348.18,"Total":1381.75,"Group":"Elemental"},
    {"Superstar":"Seth Rollins","Gender":"Male","POW":345.6,"TGH":347.28,"SPD":350.66,"CHA":348.97,"Total":1392.51,"Group":"Elemental"},
    {"Superstar":"Shayna Baszler","Gender":"Female","POW":347.73,"TGH":345.2,"SPD":344.36,"CHA":341.83,"Total":1379.12,"Group":"Elemental"},
    {"Superstar":"Sheamus","Gender":"Male","POW":348.98,"TGH":346.83,"SPD":343.58,"CHA":345.9,"Total":1385.29,"Group":"Elemental"},
    {"Superstar":"Shinsuke Nakamura","Gender":"Male","POW":341.59,"TGH":347.32,"SPD":345.46,"CHA":348.5,"Total":1382.87,"Group":"Elemental"},
    {"Superstar":"Shorty G","Gender":"Male","POW":340.21,"TGH":344.0,"SPD":338.94,"CHA":345.27,"Total":1368.42,"Group":"Elemental"},
    {"Superstar":"Stone Cold Steve Austin","Gender":"Male","POW":347.82,"TGH":352.47,"SPD":345.93,"CHA":353.52,"Total":1399.74,"Group":"Elemental"},
    {"Superstar":"The Berzerker","Gender":"Male","POW":347.42,"TGH":345.6,"SPD":340.95,"CHA":344.07,"Total":1378.04,"Group":"Elemental"},
    {"Superstar":"The Miz","Gender":"Male","POW":346.98,"TGH":341.93,"SPD":344.87,"CHA":349.08,"Total":1382.86,"Group":"Elemental"},
    {"Superstar":"The Rock","Gender":"Male","POW":351.2,"TGH":346.77,"SPD":348.04,"CHA":353.73,"Total":1399.74,"Group":"Elemental"},
    {"Superstar":"Tommaso Ciampa","Gender":"Male","POW":348.61,"TGH":350.29,"SPD":343.55,"CHA":345.24,"Total":1387.69,"Group":"Elemental"},
    {"Superstar":"Toni Storm","Gender":"Female","POW":344.23,"TGH":340.69,"SPD":342.71,"CHA":346.25,"Total":1373.88,"Group":"Elemental"},
    {"Superstar":"Triple H","Gender":"Male","POW":352.91,"TGH":347.64,"SPD":345.54,"CHA":351.23,"Total":1397.32,"Group":"Elemental"},
    {"Superstar":"Trish Stratus","Gender":"Female","POW":349.17,"TGH":343.95,"SPD":346.22,"CHA":350.27,"Total":1389.61,"Group":"Elemental"},
    {"Superstar":"Tucker","Gender":"Male","POW":345.24,"TGH":342.79,"SPD":342.87,"CHA":339.92,"Total":1370.82,"Group":"Elemental"},
    {"Superstar":"Undertaker","Gender":"Male","POW":352.88,"TGH":354.15,"SPD":345.89,"CHA":346.81,"Total":1399.73,"Group":"Elemental"},
    {"Superstar":"Velveteen Dream","Gender":"Male","POW":348.62,"TGH":342.71,"SPD":346.07,"CHA":350.29,"Total":1387.69,"Group":"Elemental"},
    {"Superstar":"Walter","Gender":"Male","POW":350.25,"TGH":348.16,"SPD":345.22,"CHA":346.47,"Total":1390.1,"Group":"Elemental"},
    {"Superstar":"Xavier Woods","Gender":"Male","POW":344.06,"TGH":341.91,"SPD":348.07,"CHA":346.42,"Total":1380.46,"Group":"Elemental"},
    {"Superstar":"Adam Cole","Gender":"Male","POW":189.39,"TGH":190.17,"SPD":186.94,"CHA":192.74,"Total":759.24,"Group":"Royal Rumble"},
    {"Superstar":"AJ Styles","Gender":"Male","POW":191.46,"TGH":184.97,"SPD":193.94,"CHA":188.87,"Total":759.24,"Group":"Royal Rumble"},
    {"Superstar":"Akam","Gender":"Male","POW":189.21,"TGH":187.77,"SPD":182.57,"CHA":182.06,"Total":741.61,"Group":"Royal Rumble"},
    {"Superstar":"Aleister Black","Gender":"Male","POW":188.66,"TGH":192.06,"SPD":189.59,"CHA":185.99,"Total":756.3,"Group":"Royal Rumble"},
    {"Superstar":"Alexa Bliss","Gender":"Female","POW":186.43,"TGH":182.57,"SPD":188.75,"CHA":184.89,"Total":742.64,"Group":"Royal Rumble"},
    {"Superstar":"Andre the Giant","Gender":"Male","POW":194.95,"TGH":192.07,"SPD":185.03,"CHA":187.19,"Total":759.24,"Group":"Royal Rumble"},
    {"Superstar":"Asuka","Gender":"Female","POW":189.09,"TGH":187.54,"SPD":180.74,"CHA":182.08,"Total":739.45,"Group":"Royal Rumble"},
    {"Superstar":"Batista","Gender":"Male","POW":193.84,"TGH":191.78,"SPD":187.66,"CHA":188.9,"Total":762.18,"Group":"Royal Rumble"},
    {"Superstar":"Becky Lynch","Gender":"Female","POW":186.29,"TGH":188.35,"SPD":189.38,"CHA":191.43,"Total":755.45,"Group":"Royal Rumble"},
    {"Superstar":"Beth Phoenix","Gender":"Female","POW":187.36,"TGH":190.66,"SPD":185.31,"CHA":185.72,"Total":749.05,"Group":"Royal Rumble"},
    {"Superstar":"Big E","Gender":"Male","POW":192.46,"TGH":190.4,"SPD":184.22,"CHA":186.28,"Total":753.36,"Group":"Royal Rumble"},
    {"Superstar":"Big Show","Gender":"Male","POW":192.25,"TGH":189.47,"SPD":184.74,"CHA":186.9,"Total":753.36,"Group":"Royal Rumble"},
    {"Superstar":"Bobby Fish","Gender":"Male","POW":189.25,"TGH":185.44,"SPD":190.95,"CHA":184.78,"Total":750.42,"Group":"Royal Rumble"},
    {"Superstar":"Braun Strowman","Gender":"Male","POW":192.97,"TGH":190.86,"SPD":184.53,"CHA":185.0,"Total":753.36,"Group":"Royal Rumble"},
    {"Superstar":"Bray Wyatt","Gender":"Male","POW":193.35,"TGH":190.88,"SPD":188.52,"CHA":195.31,"Total":768.06,"Group":"Royal Rumble"},
    {"Superstar":"Brock Lesnar","Gender":"Male","POW":197.16,"TGH":193.04,"SPD":190.47,"CHA":186.87,"Total":767.54,"Group":"Royal Rumble"},
    {"Superstar":"Cedric Alexander","Gender":"Male","POW":185.74,"TGH":188.0,"SPD":190.37,"CHA":183.37,"Total":747.48,"Group":"Royal Rumble"},
    {"Superstar":"Charlotte Flair","Gender":"Female","POW":191.16,"TGH":190.02,"SPD":184.97,"CHA":186.11,"Total":752.26,"Group":"Royal Rumble"},
    {"Superstar":"Chyna","Gender":"Female","POW":194.04,"TGH":191.77,"SPD":185.55,"CHA":187.3,"Total":758.66,"Group":"Royal Rumble"},
    {"Superstar":"Daniel Bryan","Gender":"Male","POW":185.91,"TGH":188.75,"SPD":191.83,"CHA":195.69,"Total":762.18,"Group":"Royal Rumble"},
    {"Superstar":"Dash Wilder","Gender":"Male","POW":185.64,"TGH":187.74,"SPD":183.99,"CHA":190.11,"Total":747.48,"Group":"Royal Rumble"},
    {"Superstar":"Diesel","Gender":"Male","POW":188.82,"TGH":189.33,"SPD":186.19,"CHA":191.96,"Total":756.3,"Group":"Royal Rumble"},
    {"Superstar":"Drew McIntyre","Gender":"Male","POW":191.11,"TGH":187.41,"SPD":186.08,"CHA":188.76,"Total":753.36,"Group":"Royal Rumble"},
    {"Superstar":"Erik","Gender":"Male","POW":191.4,"TGH":189.44,"SPD":183.73,"CHA":182.91,"Total":747.48,"Group":"Royal Rumble"},
    {"Superstar":"Finn Balor","Gender":"Male","POW":189.86,"TGH":187.78,"SPD":192.43,"CHA":186.23,"Total":756.3,"Group":"Royal Rumble"},
    {"Superstar":"Hulk Hogan","Gender":"Male","POW":194.09,"TGH":190.49,"SPD":188.74,"CHA":197.69,"Total":771.01,"Group":"Royal Rumble"},
    {"Superstar":"Ivar","Gender":"Male","POW":192.24,"TGH":190.02,"SPD":185.71,"CHA":182.46,"Total":750.43,"Group":"Royal Rumble"},
    {"Superstar":"John Cena","Gender":"Male","POW":194.04,"TGH":190.95,"SPD":188.63,"CHA":197.38,"Total":771.0,"Group":"Royal Rumble"},
    {"Superstar":"Johnny Gargano","Gender":"Male","POW":186.52,"TGH":190.59,"SPD":188.58,"CHA":184.72,"Total":750.41,"Group":"Royal Rumble"},
    {"Superstar":"Kairi Sane","Gender":"Female","POW":187.48,"TGH":189.49,"SPD":182.24,"CHA":180.23,"Total":739.44,"Group":"Royal Rumble"},
    {"Superstar":"Kane","Gender":"Male","POW":190.14,"TGH":191.17,"SPD":183.2,"CHA":188.85,"Total":753.36,"Group":"Royal Rumble"},
    {"Superstar":"Karl Anderson","Gender":"Male","POW":186.34,"TGH":188.5,"SPD":182.79,"CHA":186.91,"Total":744.54,"Group":"Royal Rumble"},
    {"Superstar":"Kassius Ohno","Gender":"Male","POW":185.55,"TGH":178.86,"SPD":185.03,"CHA":180.4,"Total":729.84,"Group":"Royal Rumble"},
    {"Superstar":"Kevin Owens","Gender":"Male","POW":191.65,"TGH":190.11,"SPD":185.47,"CHA":189.06,"Total":756.29,"Group":"Royal Rumble"},
    {"Superstar":"King Corbin","Gender":"Male","POW":189.57,"TGH":191.61,"SPD":183.69,"CHA":185.55,"Total":750.42,"Group":"Royal Rumble"},
    {"Superstar":"Kofi Kingston","Gender":"Male","POW":185.11,"TGH":190.37,"SPD":192.92,"CHA":187.89,"Total":756.29,"Group":"Royal Rumble"},
    {"Superstar":"Kyle O'Reilly","Gender":"Male","POW":185.33,"TGH":189.44,"SPD":188.41,"CHA":184.3,"Total":747.48,"Group":"Royal Rumble"},
    {"Superstar":"Luke Gallows","Gender":"Male","POW":191.71,"TGH":189.69,"SPD":183.28,"CHA":182.81,"Total":747.49,"Group":"Royal Rumble"},
    {"Superstar":"Matt Riddle","Gender":"Male","POW":186.69,"TGH":191.32,"SPD":185.36,"CHA":189.99,"Total":753.36,"Group":"Royal Rumble"},
    {"Superstar":"Otis","Gender":"Male","POW":188.01,"TGH":184.67,"SPD":181.48,"CHA":184.51,"Total":738.67,"Group":"Royal Rumble"},
    {"Superstar":"Randy Orton","Gender":"Male","POW":191.04,"TGH":188.99,"SPD":192.69,"CHA":186.52,"Total":759.24,"Group":"Royal Rumble"},
    {"Superstar":"Rey Mysterio","Gender":"Male","POW":184.77,"TGH":187.48,"SPD":194.95,"CHA":192.12,"Total":759.32,"Group":"Royal Rumble"},
    {"Superstar":"Rezar","Gender":"Male","POW":186.83,"TGH":188.83,"SPD":182.4,"CHA":180.6,"Total":738.66,"Group":"Royal Rumble"},
    {"Superstar":"Rhea Ripley","Gender":"Female","POW":188.85,"TGH":186.38,"SPD":182.68,"CHA":184.74,"Total":742.65,"Group":"Royal Rumble"},
    {"Superstar":"Ricochet","Gender":"Male","POW":184.96,"TGH":189.07,"SPD":192.16,"CHA":190.1,"Total":756.29,"Group":"Royal Rumble"},
    {"Superstar":"Rikishi","Gender":"Male","POW":188.85,"TGH":189.52,"SPD":185.51,"CHA":189.47,"Total":753.35,"Group":"Royal Rumble"},
    {"Superstar":"Roderick Strong","Gender":"Male","POW":191.44,"TGH":187.21,"SPD":189.37,"CHA":185.35,"Total":753.37,"Group":"Royal Rumble"},
    {"Superstar":"Roman Reigns","Gender":"Male","POW":194.37,"TGH":192.62,"SPD":188.19,"CHA":189.94,"Total":765.12,"Group":"Royal Rumble"},
    {"Superstar":"Ronda Rousey","Gender":"Female","POW":188.37,"TGH":190.38,"SPD":184.46,"CHA":189.04,"Total":752.25,"Group":"Royal Rumble"},
    {"Superstar":"Ruby Riott","Gender":"Female","POW":181.77,"TGH":188.46,"SPD":185.38,"CHA":183.83,"Total":739.44,"Group":"Royal Rumble"},
    {"Superstar":"Sami Zayn","Gender":"Male","POW":182.53,"TGH":184.33,"SPD":189.74,"CHA":187.94,"Total":744.54,"Group":"Royal Rumble"},
    {"Superstar":"Samoa Joe","Gender":"Male","POW":193.65,"TGH":188.01,"SPD":191.12,"CHA":186.47,"Total":759.25,"Group":"Royal Rumble"},
    {"Superstar":"Sarah Logan","Gender":"Female","POW":185.27,"TGH":182.89,"SPD":180.11,"CHA":178.37,"Total":726.64,"Group":"Royal Rumble"},
    {"Superstar":"Sasha Banks","Gender":"Female","POW":184.91,"TGH":187.75,"SPD":183.39,"CHA":189.81,"Total":745.86,"Group":"Royal Rumble"},
    {"Superstar":"Scott Dawson","Gender":"Male","POW":189.35,"TGH":191.62,"SPD":183.69,"CHA":185.75,"Total":750.41,"Group":"Royal Rumble"},
    {"Superstar":"Seth Rollins","Gender":"Male","POW":187.46,"TGH":189.52,"SPD":193.63,"CHA":191.57,"Total":762.18,"Group":"Royal Rumble"},
    {"Superstar":"Shawn Michaels","Gender":"Male","POW":185.91,"TGH":189.77,"SPD":192.35,"CHA":194.15,"Total":762.18,"Group":"Royal Rumble"},
    {"Superstar":"Shayna Baszler","Gender":"Female","POW":190.06,"TGH":186.98,"SPD":185.95,"CHA":182.86,"Total":745.85,"Group":"Royal Rumble"},
    {"Superstar":"Sheamus","Gender":"Male","POW":191.58,"TGH":188.96,"SPD":185.0,"CHA":187.83,"Total":753.37,"Group":"Royal Rumble"},
    {"Superstar":"Shinsuke Nakamura","Gender":"Male","POW":184.03,"TGH":191.03,"SPD":188.77,"CHA":192.47,"Total":756.3,"Group":"Royal Rumble"},
    {"Superstar":"Stone Cold Steve Austin","Gender":"Male","POW":189.43,"TGH":195.11,"SPD":187.13,"CHA":196.39,"Total":768.06,"Group":"Royal Rumble"},
    {"Superstar":"The Rock","Gender":"Male","POW":194.29,"TGH":188.89,"SPD":190.43,"CHA":197.38,"Total":770.99,"Group":"Royal Rumble"},
    {"Superstar":"Titus O'Neil","Gender":"Male","POW":187.53,"TGH":184.24,"SPD":181.36,"CHA":182.59,"Total":735.72,"Group":"Royal Rumble"},
    {"Superstar":"Toni Storm","Gender":"Female","POW":186.59,"TGH":182.27,"SPD":184.74,"CHA":189.06,"Total":742.66,"Group":"Royal Rumble"},
    {"Superstar":"Triple H","Gender":"Male","POW":195.65,"TGH":189.22,"SPD":186.65,"CHA":193.59,"Total":765.11,"Group":"Royal Rumble"},
    {"Superstar":"Tucker","Gender":"Male","POW":186.28,"TGH":183.3,"SPD":183.4,"CHA":179.8,"Total":732.78,"Group":"Royal Rumble"},
    {"Superstar":"Ultimate Warrior","Gender":"Male","POW":192.68,"TGH":185.47,"SPD":189.59,"CHA":188.56,"Total":756.3,"Group":"Royal Rumble"},
    {"Superstar":"Undertaker","Gender":"Male","POW":196.35,"TGH":197.89,"SPD":187.81,"CHA":188.94,"Total":770.99,"Group":"Royal Rumble"},
    {"Superstar":"Walter","Gender":"Male","POW":192.4,"TGH":189.85,"SPD":186.27,"CHA":187.79,"Total":756.31,"Group":"Royal Rumble"},
    ];

// Initialize player and CPU scores and round counter
let playerCards = [];
let cpuCards = [];
let playerScore = 0;
let cpuScore = 0;
let roundCount = 0;

// Shuffle cards and allot them to player and CPU
function shuffleAndDealCards() {
  const shuffledCards = [...allCards].sort(() => Math.random() - 0.5); // Shuffle the cards
  playerCards = shuffledCards.slice(0, 5); // First 5 cards to the player
  cpuCards = shuffledCards.slice(5, 10); // Next 5 cards to the CPU
}

// Update the game interface with card details
function updateGameInterface() {
  if (roundCount < 5 && roundCount < playerCards.length && roundCount < cpuCards.length) {
    // Display the player's current card (must be selected)
    const playerCard = playerCards[roundCount];
    document.getElementById("player-card-info").textContent = `Name: ${playerCard.Superstar}\nPOW: ${playerCard.POW}\nTGH: ${playerCard.TGH}\nSPD: ${playerCard.SPD}\nCHA: ${playerCard.CHA}`;

    // Display the CPU's current card (just name)
    const cpuCard = cpuCards[roundCount];
    document.getElementById("cpu-card-info").textContent = `Name: ${cpuCard.Superstar}`;
  }
}

// Handle the Play button click to start the game
document.getElementById("playButton").addEventListener("click", function() {
  shuffleAndDealCards(); //
  document.getElementById("playButton").style.display = "none";
  document.querySelector(".game-container").style.display = "block"; 
  updateGameInterface(); 
  document.querySelectorAll(".feature-button").forEach(button => {
    button.style.display = "inline-block";
  });
});

// Handle the feature button click for comparison
document.querySelectorAll(".feature-button").forEach(button => {
  button.addEventListener("click", function() {
    const feature = this.getAttribute("data-feature");

    // Check if the game has finished or if the player and CPU cards are still available
    if (roundCount < 5 && roundCount < playerCards.length && roundCount < cpuCards.length) {
      const playerCard = playerCards[roundCount];
      const cpuCard = cpuCards[roundCount];

      const playerFeature = playerCard[feature];
      const cpuFeature = cpuCard[feature];

      // Compare the feature and update the score
      let resultMessage = '';
      if (playerFeature > cpuFeature) {
        playerScore++;
        resultMessage = "You win this round!";
      } else if (playerFeature < cpuFeature) {
        cpuScore++;
        resultMessage = "CPU wins this round!";
      } else {
        resultMessage = "It's a Draw!";
      }

      //Updating the score:
      document.getElementById("player-score").textContent = playerScore;
      document.getElementById("cpu-score").textContent = cpuScore;

      //Display the result message:
      document.getElementById("result-container").textContent = resultMessage;

      
      roundCount++;
      if (roundCount >= 5) {
        // Once all rounds are completed, announce the final winner clearly
        let finalResult = '';
        if (playerScore > cpuScore) {
          finalResult = "Congratulations! You are the overall winner!";
        } else if (playerScore < cpuScore) {
          finalResult = "CPU Wins the game! Better luck next time.";
        } else {
          finalResult = "It's a tie overall! Well played!";
        }

        // Append final result message in a separate way
        const finalResultElement = document.createElement("p");
        finalResultElement.textContent = finalResult;
        document.getElementById("result-container").appendChild(finalResultElement);

        // Show the Play Again button after the game is finished
        document.getElementById("playAgainButton").style.display = "block";
      } else {
        // Update the game interface for the next round
        updateGameInterface();
      }
    }
  });
});

// Handling the Play Button:
document.getElementById("playAgainButton").addEventListener("click", function() {
  
  // Resetting the game state:
  playerScore = 0;
  cpuScore = 0;
  roundCount = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("cpu-score").textContent = cpuScore;

  
  document.getElementById("result-container").textContent = "";
  document.getElementById("playAgainButton").style.display = "none";

  //Shuffling the cards:
  shuffleAndDealCards();

  //Resetting Game Interface:
  document.querySelector(".game-container").style.display = "none";
  document.getElementById("playButton").style.display = "block";
});