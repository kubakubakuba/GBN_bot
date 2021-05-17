const Discord = require("discord.js");

module.exports = {
  skalarniSoucin: function(u1, u2, u3, v1, v2, v3){
  let velikost = u1*v1 + u2*v2 + u3*v3;
  let out = new Discord.MessageEmbed()
      .setColor("#2fd6c8")
      .setTitle("Skalární součin")
      .addField("=", velikost)
  return out;
},
  odchylka: function(u1, u2, u3, v1, v2 , v3){
  let velu = Math.sqrt(u1*u1 + u2*u2 + u3*u3);
  let velv = Math.sqrt(v1*v1 + v2*v2 + v3*v3);
  let skalSoucin = u1*v1 + u2*v2 + u3*v3;
  let zlomek = skalSoucin / (velu * velv);
  let odchylka = Math.acos(zlomek) * (180 / Math.PI);
      
  let out = new Discord.MessageEmbed()
      .setColor("#2fd6c8")
      .setTitle("Odchylka")
      .addField("=", odchylka + "°")
  return out;
},
  velikostVektoru: function(u1, u2, u3, text){
  let soucin = u1*u1 + u2*u2 + u3*u3;
  let velikost = Math.sqrt(soucin);
  let out = new Discord.MessageEmbed()
      .setColor("#2fd6c8")
      .setTitle(text)
      .addField("=", velikost)
  return out;
},
  vektsouc: function(u1, u2, u3, v1, v2, v3){
  let w1 = u2*v3 - u3*v2;
  let w2 = u3*v1 - u1*v3;
  let w3 = u1*v2 - u2*v1;
  let out = new Discord.MessageEmbed()
      .setColor("#2fd6c8")
      .setTitle(`Výsledný vektor`)
      .addField('𝓌₁', w1)
      .addField('𝓌₂', w2)
      .addField('𝓌₃', w3)
  
      return out;
}
};