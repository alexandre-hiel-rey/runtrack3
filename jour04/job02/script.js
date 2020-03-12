function jsonValueKey(json, key) 
{
    var value = JSON.parse(json);
    return value[key];
	
}

console.log(
	jsonValueKey('{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}' , "city")
);