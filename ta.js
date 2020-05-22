function isDigit(thisString) {
  return /^\d+$/.test(thisString);
};
function isMacAddress(thisString) {
  match=thisString.match(/[a-fA-F0-9]{1,2}([:-]?[a-fA-F0-9]{2}){0,5}/gm)
  if (!(match)) { return false }
  if (match.length > 1) { return false }
  if (match[0].length != thisString.length) { return false }
  return true
}
function findIndex(thisNode) {
  return Array.prototype.indexOf.call(thisNode.parentNode.children, thisNode);
};
function findIdsInClass(className) {
  idsInClass = document.getElementsByClassName(className);
  var output = [];
  for (i = 0; i < idsInClass.length; i++) {
    output.push(idsInClass[i]['id'])
  }
  return output
};
function findClass (elementId, className) {
  classFound = false;
  elementClasses = document.getElementById(elementId).getAttribute('class').split(' ');
  for (var i = 0; i < elementClasses.length; i++) {
    if (elementClasses[i] == className) {
      classFound = true;
    }
  }
  return classFound;
}
function findObjectClass (object, className) {
  console.log(object);
  classFound = false;
  objectClasses = object.getAttribute('class').split(' ');
  for (var i = 0; i < objectClasses.length; i++) {
    if (objectClasses[i] == className) {
      classFound = true;
    }
  }
  return classFound;
}
function addClass(elementId, className) {
  classFound = findClass(elementId, className);
  if (!classFound) {
    document.getElementById(elementId).setAttribute("class", (document.getElementById(elementId).getAttribute('class') + " " + className))
  }
};
function addObjectClass(object, className) {
  classFound = findObjectClass(object, className);
  if (!classFound) {
    object.setAttribute("class", (object.getAttribute('class') + " " + className))
  }
};
function removeClass(elementId, className) {
  elementClasses = document.getElementById(elementId).getAttribute('class').split(' ');
  newClasses = "";
  for (var i = 0; i < elementClasses.length; i++) {
    if (elementClasses[i] != className) {
      newClasses = newClasses + " " + elementClasses[i];
    }
  }
  document.getElementById(elementId).setAttribute('class', newClasses);
}
function removeObjectClass(object, className) {
  objectClasses = object.getAttribute('class').split(' ');
  newClasses = "";
  for (var i = 0; i < objectClasses.length; i++) {
    if (objectClasses[i] != className) {
      newClasses = newClasses + " " + objectClasses[i];
    }
  }
  object.setAttribute("class", newClasses)
};
function toggleClass(elementId, className) {
  classFound = findClass(elementId, className);
  if (classFound) {
    removeClass(elementId, className);
  } else {
    document.getElementById(elementId).setAttribute("class", (document.getElementById(elementId).getAttribute('class') + " " + className))
  }
}
function toggleObjectClass(object, className) {
  classFound = findObjectClass(object, className);
  if (classFound) {
    removeObjectClass(object, className);
  } else {
    object.setAttribute("class", (object.getAttribute('class') + " " + className))
  }
}
function ajax(outputDiv, url, method='GET', data) {
  var request = new XMLHttpRequest;
  request.open(method, url);
  request.onload = function(){document.getElementById(outputDiv).innerHTML=this.response;};
  request.send(data)
};
function ajaxNext(outputDiv, url, method='GET', data, nextCommand) {
  var request = new XMLHttpRequest;
  request.open(method, url);
  request.onload = function(){
    document.getElementById(outputDiv).innerHTML=this.response;
    eval(nextCommand);
  };
  request.send(data)
};
// simpleAjax ideal usage:
// function myFunc(data) {
//   if (data === undefined) {
//     simpleAjax(document.location['origin'] + '/api/myendpoint', 'myFunc(output);');
//     return
//   }
//   doStuff();
// }
function simpleAjax(url, nextCommand) {
  var request = new XMLHttpRequest;
  request.open('GET', url);
  request.onload = function(){
    try { output = JSON.parse(this.response) }
    catch(err) {output = null}
    eval(nextCommand);
  };
  request.send()
};
function copyToClipboard(text) {
  const tempElement = document.createElement('textarea');
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);
};
function isoDate() {
  var today = new Date();
  return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
function htmlUnescape(str) {
  // return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  return str.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, "\"");
}
function cookieCheck(key) {
  // Iterate through the cookie file
  for (i = 0; i < document.cookie.split(';').length; i++) {
    if (document.cookie.split('; ')[i].split('=')[0] == key) {
      return document.cookie.split('; ')[i].split('=')[1]
    }
  }
}
function cookieRemove(key) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function cookieSet(key, value) {
  document.cookie = key + "=" + value + ';' ;
}
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function templateString(string, dictionary, strict = false) {
  variables = string.match(/{(?:[^\{]*)}/gi)
  for (let i = 0; i < variables.length; i++) {
    varName = variables[i].replace('{', '').replace('}', '');
    if (!(Object.keys(dictionary).includes(varName))) { console.log("templateString: key not found: " + varName); return false }
    if (!(dictionary[varName]) && strict) { console.log("templateString: Empty or null value: " + varName); return false }
    thisReplace = new RegExp(variables[i], "g");
    string = string.replace(thisReplace, dictionary[varName]);
  }
  return string
};
function LightenDarkenColor(col, amt) {
  var usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
