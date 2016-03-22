'use strict';

function isInTeenRange(age) 
{
  return (age > 12 && age < 20);
}

function basicTeenager(age) 
{
  if (isInTeenRange(age)) {
    return "You are a teenager!";
  }
}

function teenager(age) 
{
  if (isInTeenRange(age)) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) 
{
  if (isInTeenRange(age)) {
    return "You are a teenager!";
  } else if(age >= 20) {
    return "You are a grownup";
  } else {
    return "You are a kid";
  }
}

function ternaryTeenager(age) 
{
  var statement = isInTeenRange(age) ? "You are a teenager" : "You are not a teenager";
  return statement;
}

function switchAge(age)
{
  switch (age) 
  {
  case 13:
      return "You are a teenager";
  case 14:
      return "You are a teenager";
  case 15:
      return "You are a teenager";
  case 16:
      return "You are a teenager";
  case 17:
      return "You are a teenager";
  case 18:
      return "You are a teenager";
  case 19:
      return "You are a teenager"; 
  default: 
      return "You have an age";
  }
}

