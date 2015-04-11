var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

for(var i = 0; i < chars.length; i++){
	var vowel = 'no es consonante: ' + chars[i];
	for(var i = 0; i < chars.length; i++){
		if(vowels[i] === chars[j]){
			vowel = 'si es consonante: ' + chars[i];
		}
	}
	alert("Las consonantes del abecedario son: " + chars);
}