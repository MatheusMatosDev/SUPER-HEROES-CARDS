
const state = {
 cards: [
  {"response":"success","id":"63","name":"Batgirl","powerstats":{"intelligence":"88","strength":"11","speed":"33","durability":"40","power":"34","combat":"90"},"biography":{"full-name":"Barbara Gordon","alter-egos":"Oracle","aliases":["Oracle","Bluebelle"],"place-of-birth":"-","first-appearance":"Detective Comics #359","publisher":"Oracle","alignment":"good"},"appearance":{"gender":"Female","race":"Human","height":["5'7","170 cm"],"weight":["126 lb","57 kg"],"eye-color":"Green","hair-color":"Red"},"work":{"occupation":"-","base":"Gotham City, formerly Metropolis, Platinum Flats"},"connections":{"group-affiliation":"-","relatives":"James Gordon (father) \ufffd Barbara Eileen (mother) \ufffd James Gordon, Jr. (brother)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//1111.jpg"}},
  {"response":"success","id":"70","name":"Batman","powerstats":{"intelligence":"100","strength":"26","speed":"27","durability":"50","power":"47","combat":"100"},"biography":{"full-name":"Bruce Wayne","alter-egos":"No alter egos found.","aliases":["Insider","Matches Malone"],"place-of-birth":"Crest Hill, Bristol Township; Gotham County","first-appearance":"Detective Comics #27","publisher":"DC Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'2","188 cm"],"weight":["210 lb","95 kg"],"eye-color":"blue","hair-color":"black"},"work":{"occupation":"Businessman","base":"Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"},"connections":{"group-affiliation":"Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps","relatives":"Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//639.jpg"}},
  {"response":"success","id":"97","name":"Black Canary","powerstats":{"intelligence":"63","strength":"8","speed":"33","durability":"20","power":"52","combat":"80"},"biography":{"full-name":"Laurel Lance","alter-egos":"No alter egos found.","aliases":["Dinah Laurel Lance Queen; Dinah Laurel Lance-Windrow"],"place-of-birth":"-","first-appearance":"Justice League of America (Volume 1) #75","publisher":"DC Comics","alignment":"good"},"appearance":{"gender":"Female","race":"Metahuman","height":["5'7","170 cm"],"weight":["130 lb","59 kg"],"eye-color":"Blue","hair-color":"Blond"},"work":{"occupation":"Detective//Crime-fighter, Chairperson of the Justice League of America; former florist, judo instructor","base":"Formerly Oracle's clock tower in Gotham City; formerly Seattle, Washington; formerly Star City, California; formerly New York City, New York (as a member of the JSA); currently mobile"},"connections":{"group-affiliation":"Birds of Prey; formerly Justice League of America, Justice Society of America, Justice League Task Force, Justice League International, Team Arrow","relatives":"Larry Lance (father, deceased), Dinah Drake Lance (Black Canary, mother, deceased); Oliver Queen (Green Arrow, husband); Craig Windrow (ex-husband); Sin (adoptive daughter)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//1005.jpg"}},
  {"response":"success","id":"106","name":"Black Panther","powerstats":{"intelligence":"88","strength":"16","speed":"30","durability":"60","power":"41","combat":"100"},"biography":{"full-name":"T'Challa","alter-egos":"No alter egos found.","aliases":["Mr. Okonkwo","The Man Without Fear","Luke Charles","Black Leopard","the Client","Coal Tiger","has impersonated Daredevil and others on occasion"],"place-of-birth":"Wakanda, Africa","first-appearance":"Fantastic Four Vol. 1 #52 (1966)","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'0","183 cm"],"weight":["200 lb","90 kg"],"eye-color":"Brown","hair-color":"Black"},"work":{"occupation":"King and Chieftain of Wakanda, scientist; former school teacher","base":"Wakanda, Mobile"},"connections":{"group-affiliation":"Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier","relatives":"Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T\ufffdChaka (father, deceased), S'Yan (uncle, deceased), N\ufffdYami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//247.jpg"}},
  {"response":"success","id":"107","name":"Black Widow","powerstats":{"intelligence":"75","strength":"13","speed":"33","durability":"30","power":"36","combat":"100"},"biography":{"full-name":"Natasha Romanoff","alter-egos":"No alter egos found.","aliases":["Yelena Belova","Natasha Romanoff","Natasha","Tasha","Madame Natasha","Nancy Rushman","Laura Matthers","Nadine Roman","\"Oktober\"","Black Pearl","Ebon Flame"],"place-of-birth":"-","first-appearance":"Tales of Suspense #52","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Female","race":"Human","height":["5'7","170 cm"],"weight":["131 lb","59 kg"],"eye-color":"Green","hair-color":"Auburn"},"work":{"occupation":"Adventurer, Intelligence agent, former ballerina","base":"Mobile"},"connections":{"group-affiliation":"Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, \"Marvel Knights\", partner of Daredevil, Hawkeye, Boris Turgenov, Logan","relatives":"Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//248.jpg"}},    
  {"response":"success","id":"149","name":"Captain America","powerstats":{"intelligence":"69","strength":"19","speed":"38","durability":"55","power":"60","combat":"100"},"biography":{"full-name":"Steve Rogers","alter-egos":"No alter egos found.","aliases":["Nomad","The Captain"],"place-of-birth":"Manhattan, New York City, New York","first-appearance":"Captain America Comics #1 (March 1941)","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'2","188 cm"],"weight":["240 lb","108 kg"],"eye-color":"blue","hair-color":"blond"},"work":{"occupation":"Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.","base":"New York City"},"connections":{"group-affiliation":"Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)","relatives":"Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//274.jpg"}},
  {"response":"success","id":"156","name":"Captain Marvel","powerstats":{"intelligence":"88","strength":"100","speed":"88","durability":"95","power":"100","combat":"75"},"biography":{"full-name":"Billy Batson","alter-egos":"No alter egos found.","aliases":["The World's Mightiest Mortal","The Big Red Cheese","Captain Thunder","Shazam"],"place-of-birth":"Fawcett City, United States","first-appearance":"Whiz Comics no. 2 (1940)","publisher":"DC Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'4","193 cm"],"weight":["225 lb","101 kg"],"eye-color":"Blue","hair-color":"Black"},"work":{"occupation":"-","base":"-"},"connections":{"group-affiliation":"Marvel Family, Justice Society of America","relatives":"C.C. Batson (father, deceased), Marilyn Batson (mother, deceased), Ebenezer Batson (uncle), Mary Batson (Mary Marvel, sister)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits//10//100//278.jpg"}},
  {"response":"success","id":"204","name":"Darkseid","powerstats":{"intelligence":"88","strength":"100","speed":"83","durability":"100","power":"100","combat":"95"},"biography":{"full-name":"Uxas","alter-egos":"No alter egos found.","aliases":["Dark God"],"place-of-birth":"-","first-appearance":"Superman's Pal Jimmy Olsen #134 (November 1970)","publisher":"DC Comics","alignment":"bad"},"appearance":{"gender":"Male","race":"New God","height":["8'9","267 cm"],"weight":["1815 lb","817 kg"],"eye-color":"Red","hair-color":"No Hair"},"work":{"occupation":"Dictator of Apokolips","base":"-"},"connections":{"group-affiliation":"New Gods of Apokolips(ruler), Secret Society of Supervillains","relatives":"Zonuz (father), Izaya (brother), Avia (sister, deceased), Grail (daughter), Kalibak (son), Orion (son), Deathspawn (son), Scot (nephew/adopted son)"},"image":{"url":"https://www.superherodb.com//pictures2//portraits/10//100//668.jpg"}},
  {"response":"success","id":"213","name":"Deadpool","powerstats":{"intelligence":"69","strength":"32","speed":"50","durability":"100","power":"100","combat":"100"},"biography":{"full-name":"Wade Wilson","alter-egos":"Evil Deadpool, Venompool","aliases":["Wade Wilson","Jack","Chiyonosake (\"the Wolf of the Rice Wine\")","Rhodes","Corpus","Lopez","Hobgoblin","Thom Cruz","Peter Parker"],"place-of-birth":"Canada","first-appearance":"New Mutants #98 (February, 1991)","publisher":"Evil Deadpool","alignment":"neutral"},"appearance":{"gender":"Male","race":"Mutant","height":["6'2","188 cm"],"weight":["210 lb","95 kg"],"eye-color":"Brown","hair-color":"No Hair"},"work":{"occupation":"Mercenary; former enforcer, government operative, sumo wrestler, soldier, assassin, anti-hero, others","base":"Cavern-X, Sedona, Arizona, Mobile"},"connections":{"group-affiliation":"Thunderbolts (Strike Team), shares body with Agent Preston; formerly X-Force, Deadpool Corps, Agency X, S.H.I.E.L.D.; Code Red, Six Pack, One World Church, DP Inc., Weapon X, Weapon Plus, Heroes for Hire, Secret Defenders, Frightful Four, Team Deadpool, L","relatives":"Thomas \"Mickey\" Wilson (father, deceased); Hailey Wilson (mother, deceased); Gretchen Wilson, Orksa (ex-wives); Evil Deadpool (clone); Widdle Wade (clone)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/835.jpg"}},
  {"response":"success","id":"226","name":"Doctor Strange","powerstats":{"intelligence":"100","strength":"10","speed":"12","durability":"84","power":"100","combat":"60"},"biography":{"full-name":"Stephen Strange","alter-egos":"No alter egos found.","aliases":["Sorcerer Supreme","Master of the Mystic Arts","Stephen Sanders","Captain Universe","Vincent Stevens"],"place-of-birth":"Philadelphia, Pennsylvania","first-appearance":"Strange Tales #110 (July, 1963)","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"Human","height":["6'2","188 cm"],"weight":["180 lb","81 kg"],"eye-color":"Grey","hair-color":"Black"},"work":{"occupation":"Sorcerer Supreme, retired neurosurgeon","base":"-"},"connections":{"group-affiliation":"Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One","relatives":"Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/55.jpg"}},
  {"response":"success","id":"265","name":"Flash II","powerstats":{"intelligence":"88","strength":"48","speed":"100","durability":"60","power":"100","combat":"60"},"biography":{"full-name":"Barry Allen","alter-egos":"Black Racer","aliases":["The Scarlet Speedster","the Fastest Man Alive","the Monarch of Motion","the Sultan of Speed"],"place-of-birth":"Fallville, Iowa","first-appearance":"Showcase #4 (October, 1956)","publisher":"Black Racer","alignment":"good"},"appearance":{"gender":"Male","race":"Black Racer","height":["6'0","183 cm"],"weight":["195 lb","88 kg"],"eye-color":"Blue","hair-color":"Blond"},"work":{"occupation":"Forensic Scientist","base":"Central City, Missouri"},"connections":{"group-affiliation":"Flash Family, Justice League of America; formerly Blue Lantern Corps","relatives":"Henry and Nora (parents), Malcolm Thawne (twin), Iris West Allen (wife), Wally West (Flash III, nephew), Don and Dawn Allen (son and daughter), Bart Allen (Flash IV, grandson), Jenni Ognats (granddaughter)"},"image":{"url":"https://www.superherodb.com/pictures2/portraits/10/100/892.jpg"}}
]
};
const getters = {
  allCards: state => state.cards
};
const actions = {
  fetchCards({ commit }) {
      commit("setCards");
  },

  
  
};
const mutations = {
  setCards: (state) => state.cards ,
  
};

export default {
  state,
  actions,
  getters,
  mutations
};