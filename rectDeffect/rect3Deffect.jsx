﻿//MIT License//pau.bielsa@gmail.com#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";function draw() {  // code goes here -----------  var doc = b.doc(); // to clean the last document  b.clear(doc);   doc.documentPreferences.properties = {     };  b.rotate(30); // to rotate the shape only one time //b.stroke(b.random(255), b.random(255),b.random(255)) //uncomment that if you want strokes with random colors //b.noFill(); // uncomment that if you do not what to fill the shape b.fill(b.random(255), b.random(200),b.random(60)); // to fill the shape with the same random color  for ( var i=1; i <= 30; i++ ){          //b.stroke(b.random(75), b.random(201),b.random(80)); // uncomment that if you want a random color for each stroke     //b.fill(b.random(75), b.random(201),b.random(80)); //uncomment that if you want a random color for each shape     //b.rotate(30); //uncomment that for a loop rotation  var rectWithShadow = b.rect(i+200, i+200, 100, 100); //shape values, also possible with b.ellipse    rectWithShadow.transparencySettings.dropShadowSettings.properties = {    mode: ShadowMode.DROP, //shadow properties    noise: 0.5,    xOffset: 20,    yOffset: 50,    opacity: 4,    spread: 60,  }}}b.go();