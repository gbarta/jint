// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The scope chain is initialised to contain the same objects,
 * in the same order, as the calling context's scope chain
 *
 * @path ch10/10.4/10.4.2/S10.4.2_A1.2_T4.js
 * @description eval within global execution context
 */

function f(){
  var i;
  var j;
  str1 = '';
  str2 = '';
  x = 1;
  
  for(i in this){
    str1+=i;
  }
  
  eval('for(j in this){\nstr2+=j;\n}');

  return (str1 === str2); 

  y = 2;
}

if(!f()){
  $ERROR("#1: scope chain must contain same objects in the same order as the calling context");
}

