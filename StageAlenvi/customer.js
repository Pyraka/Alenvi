const event = {
  startDate: '2019-04-11T09:00:00',
  endDate: '2019-04-11T11:30:00',
  customer: '1234567890',
};

const customer = {
  _id: '1234567890',
  identity : { lastname : 'X' },
  subscription: {
    _id: 'qwertyuio',
    service: {
      name: 'Aide a lautonomie',
      saturdaySurcharge: 10,
      sundaySurcharge: 15,
    },
    versions: [
      { startDate: '2019-02-01T00:00:00', unitTTCPrice: 24 },
      { startDate: '2019-04-15T00:00:00', unitTTCPrice: 22 },
    ],
  },
};

function priceDate (date,subscription){
  if(subscription == 'qwertyuio' ){
        if (date < '2019-04-15T00:00:00' ){ // condition de prix en fonction de la date
        return 24;
      }
      return 22;
  }
}

function moneyEarned (startT,endT){
    var startT = new Date(startT);
    var endT = new Date(endT);
    if(startT.getDay() == 0){ // 0 = dimanche
      if(priceDate()==24){
        return("Facture de " + 24*hourDiff(startT,endT)*1,10 + "€");
      }
      return("Facture de " + 22*hourDiff(startT,endT)*1,10 + "€");
    }
    else if(startT.getDay()==6){ // 6 = samedi
      if(priceDate()==24){
        return("Facture de " + 24*hourDiff(startT,endT)*1,15 + "€");
      }
      return("Facture de " + 22*hourDiff(startT,endT)*1,15 + "€");
    }
    else{
      if(priceDate()==24){
        return("Facture de " + 24*hourDiff(startT,endT) + "€");
      }
      return("Facture de " + 22*hourDiff(startT,endT) + "€");
  }
}

function satOrSun (date){
  if (date.getDay() == 5){
    return 'saturday';
  }
  return 'sunday';
}

//exemple pour vérifier
//console.log(priceDate('2019-04-15T00:00:00','qwertyuio'));

alert(moneyEarned('2019-04-11T09:00:00','2019-04-11T11:30:00'))


//fonction permettant d'obtenir le nombre d'heures écoulé entre 2 dates entrées
function hourDiff(h1, h2)
{
  var t1 = new Date(h1);
  var t2 = new Date(h2);
  var diff = (t2-t1) / 3600000
  return diff;
}
