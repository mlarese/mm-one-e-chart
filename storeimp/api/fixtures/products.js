import _filter from 'lodash/filter'

export const products = [
  {
    'id': '2168',
    'order': '6',
    'sku': 'BU01',
    'name': 'INGR.PISC.+ WELLNESS GIORNALIERO (anche giorni fest.) - BU01',
    'description': 'Questo buono comprende l’ingresso GIORNALIERO alle piscine termali e all’area wellness.\r\nLa piscina termale coperta ha una temperatura di 32°-33°C e prosegue anche all\'esterno, cosicché anche nelle fredde giornate d\'inverno si può uscire, rimanendo immersi nell\'acqua calda.\r\nL’ingresso all’Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\n \r\nInformarsi al n° 0431-441400 per gli orari e giorni di apertura.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\n \r\ncod. BU01\r\n ',
    'shortdescription': '',
    'type': 'specialservice',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/bu01_sauna.jpg',
    'finalPrice': '100',
    'price': '27.00',
    'priceFrom': '200',
    'discount': '10'
  },
  {
    'id': '121843',
    'order': '7',
    'sku': 'BU80',
    'name': 'MASS. SPA OLIO CANDELA  + INGR. GIORN. PISC. E WELL. - BU80',
    'description': 'Questo buono comprende i seguenti trattamenti: Massaggio SPA Olio Candela e l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness. \r\nMassaggio SPA Olio CandelaMassaggio benessere aromatico.\r\nRilassanti e avvolgenti manualit&agrave; con candela cosmetica composta da olio di argan, burro di karit&egrave; e olio di mandorle in forma solida che fondono a bassa temperatura creando un caldo olio da massaggio completamente naturale, altamente nutriente, dall\'esclusiva fragranza a base di note fresche marine con accenti di sale.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nE\' necessaria la prenotazione del trattamento telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU80',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/_8389.jpg',
    'finalPrice': '',
    'price': '75.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92321',
    'order': '9',
    'sku': 'BU62',
    'name': 'TRATTAMENTO SALINO + INGR. GIORN. PISC. E WELL.+PROD. - BU62',
    'description': 'Questo buono comprende i seguenti trattamenti: Specialit&agrave; E Trattamento salino, l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness. COMPRESO NEL PACCHETTO LA CREMA CORPO ALL\'ACIDO YALURONICO \r\n&nbsp;\r\nSPECIALITA&rsquo; E TRATTAMENTO SALINOIl rituale completo in un trattamento-massaggio detossinante e levigante.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nCrema corpo all\'acido yaluronico - cod. BCC10\r\nIL PRODOTTO VERRA\' CONSEGNATO DIRETTAMENTE IN SPA ALL\'ARRIVO\r\nE\' necessaria la prenotazione dei trattamenti telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU62',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/bu62.jpg',
    'finalPrice': '',
    'price': '99.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92299',
    'order': '10',
    'sku': 'BU55',
    'name': 'PROGR. DI COPPIA - COD. BU55',
    'description': 'Questo buono comprende i seguenti trattamenti per due persone: Massaggio SPA olio solido + il pediluvio salino + l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness.\r\nIl Massaggio SPA olio solido, esclusivo massaggio antistress aromatico.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nE\' necessaria la prenotazione dei massaggi telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU55',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/coppia_massaggio_1.jpg',
    'finalPrice': '',
    'price': '150.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92302',
    'order': '11',
    'sku': 'BU56',
    'name': 'PROGR. DI COPPIA - COD. BU56',
    'description': 'Questo buono comprende i seguenti trattamenti per due persone: Specialit&agrave; E Trattamento salino + il pediluvio salino + l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness.\r\nSPECIALITA&rsquo; E TRATTAMENTO SALINOIl rituale completo in un trattamento-massaggio detossinante e levigante.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nE\' necessaria la prenotazione dei trattamenti telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU56',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/bu56natale.jpg',
    'finalPrice': '',
    'price': '163.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92306',
    'order': '12',
    'sku': 'BU57',
    'name': 'PROGR. DI COPPIA - COD. BU57',
    'description': 'Questo buono comprende i seguenti trattamenti per due persone: l\'HAMMAM peeling e saponatura testa + l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness.\r\nHAMMAM PEELING E SAPONATURA TESTA, Il rituale della rigenerazione per esfoliare, levigare e rinnovare la pelle in un ambiente ideale per esaltarne gli effetti.\r\nMassaggio-peeling corpo e lavaggio capelli in relax sul marmo riscaldato nell\'ambiente dell\'Hammam immersi in un caldo vapore all\'aroma marino con accenti di sale.Le textures morbide di sapone e olio, appositamente concepiti in esclusive e naturali formulazioni, esaltano avvolgenti manualit&agrave; che abbinate a polveri di conchiglia di ostrica e microgranuli di alga lithothamnium purificano la pelle.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nE\' necessaria la prenotazione dei trattamenti telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU57',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/coppia_hammam.jpg',
    'finalPrice': '',
    'price': '170.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92309',
    'order': '13',
    'sku': 'BU58',
    'name': 'PROGR. DI COPPIA - COD. BU58',
    'description': 'Questo buono comprende i seguenti trattamenti per due persone: l\'idromassaggio di coppia, SPECIALITA\' E AVVOLGIMENTO ALGA BLU, l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness, il pranzo presso il Lounge Bar della SPA Bibione Thermae.\r\nL\'idromassaggio aromatizzato di coppia:Bagno caldo rigenerante con compressa effervescente all&rsquo;esclusiva fragranza di agrumi e note &ldquo;metalliche&rdquo;.\r\nSPECIALITA\' E AVVOLGIMENTO ALGA BLU Il rituale completo in un trattamento-massaggio ossigenante e riducente.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nPranzo per due persone nel nuovissimo Lounge Bar della SPA Bibione Thermae.Freschissime materie prime vengono selezionate per creare sfiziose composizioni in piatti unici.\r\n&nbsp;\r\nIN OMAGGIO IL PEDILUVIO SALINO E IL NOLEGGIO DEL KIT SPA (accappatoio, ciabattine e telo spugna).\r\nE\' necessaria la prenotazione dei trattamenti telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU58',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/coppia_bu58.jpg',
    'finalPrice': '',
    'price': '250.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92313',
    'order': '14',
    'sku': 'BU59',
    'name': 'PROGR. DI COPPIA - COD. BU59',
    'description': 'Questo buono comprende i seguenti trattamenti per due persone: la cabina salina secca, il pediluvio salino, l\'Hammam peeling, il massaggio benessere, l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness, il pranzo presso il Lounge Bar della SPA Bibione Thermae.\r\nHammam peeling Il rituale della rigenerazione per esfoliare, levigare e rinnovare la pelle in un ambiente ideale per esaltarne gli effetti.\r\nMassaggio-peeling in relax sul marmo riscaldato nell\'ambiente dell\'Hammam immersi in un caldo vapore all\'aroma marino con accenti di sale.Le textures morbide di sapone e olio, appositamente concepiti in esclusive e naturali formulazioni, esaltano avvolgenti manualit&agrave; che abbinate a polveri di conchiglia di ostrica e microgranuli di alga lithothamnium purificano la pelle.\r\nMassaggio benessereIl massaggio benessere relax &egrave; un massaggio anti-stress, decontratturante e riequilibrante che agisce sulla muscolatura e a livello circolatorio. Per rivitalizzare, rassodare e tonificare i tessuti con il risultato di far loro recuperare la naturale elasticit&agrave;.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nPranzo per due persone nel nuovissimo Lounge Bar della SPA Bibione Thermae.Freschissime materie prime vengono selezionate per creare sfiziose composizioni in piatti unici.\r\nNOLEGGIO DEL KIT SPA (accappatoio, ciabattine e telo spugna).\r\nE\' necessaria la prenotazione dei trattamenti telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU59',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/bu59.jpg',
    'finalPrice': '',
    'price': '270.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92317',
    'order': '15',
    'sku': 'BU61',
    'name': 'HAMMAM PEELING + MASS.BEN.+ INGR. GIOR.PISC. E WELL. - BU61',
    'description': 'Questo buono comprende i seguenti trattamenti: Hammam peeling, il massaggio benessere e l\'ingresso GIORNALIERO alle piscine termali e all&rsquo;Area Wellness. \r\nHammam peelingIl rituale della rigenerazione per esfoliare, levigare e rinnovare la pelle in un ambiente ideale per esaltarne gli effetti.\r\nMassaggio-peeling in relax sul marmo riscaldato nell\'ambiente dell\'Hammam immersi in un caldo vapore all\'aroma marino con accenti di sale.Le textures morbide di sapone e olio, appositamente concepiti in esclusive e naturali formulazioni, esaltano avvolgenti manualit&agrave; che abbinate a polveri di conchiglia di ostrica e microgranuli di alga lithothamnium purificano la pelle.\r\nMassaggio benessereIl massaggio benessere relax &egrave; un massaggio anti-stress, decontratturante e riequilibrante che agisce sulla muscolatura e a livello circolatorio. Per rivitalizzare, rassodare e tonificare i tessuti con il risultato di far loro recuperare la naturale elasticit&agrave;.\r\nLa piscina termale coperta ha una temperatura di 32&deg;-33&deg;C e prosegue anche all\'esterno, cosicch&eacute; anche nelle fredde giornate d\'inverno si pu&ograve; uscire, rimanendo immersi nell\'acqua calda.\r\nL&rsquo; Area Wellness comprende la sauna finlandese, la biosauna alle erbe, il bagno alle erbe, il bagno ipersalino, il polarium, le docce emozionali, la piscina termale con idromassaggi e la cabina salina secca.\r\nE\' necessaria la prenotazione dei trattamenti telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU61',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/bu61.jpg',
    'finalPrice': '',
    'price': '120.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '92323',
    'order': '16',
    'sku': 'BU63',
    'name': 'TRATT. VISO ANTI-AGE (RADIOFREQUENZA) + FLUIDO VISO - BU63',
    'description': 'Questo buono comprende: trattamento Viso ANTI-AGE (RADIOFREQUENZA) + il Fluido Viso Pino marittimo (IL PRODOTTO VERRA\' CONSEGNATO DIRETTAMENTE IN SPA ALL\'ARRIVO)\r\n&nbsp;\r\nRADIO FREQUENZA MULTIPOLARE VISOAzione Anti-Age\r\nUtilizzata per ottenere il ringiovanimento cutaneo, grazie all&rsquo;aumento della temperatura sottocutanea che causa una denaturazione delle proteine del collagene, le quali si restringono e si ispessiscono (effetto lifting), portando ad un aumento della consistenza del derma.L&rsquo;insulto termico causato dalla radio frequenza attiva anche i fibroblasti con conseguente aumento del tempo di collagene, elastina e quindi anche un aumento della densit&agrave; dermica, generando una maggiore distensione dei tessuti.\r\nFluido Viso Pino MarittimoEMULSIONE-GEL RIGENERANTE esercita un\'azione intensiva antiossidante e protettiva. Concentrato ad alta penetrazione di fitoestratto di corteccia di PINO MARITTIMO dalla potente azione antiradicalica e rigeneratrice delle sostanze naturali presenti nell\'organismo che svolgono la stessa funzione. La presenza dell\'estratto di SALVIA contribuisce a contrastare la perdita di tono e svolgere un\'azione stimolante.\r\nE\' necessaria la prenotazione del trattamento telefonando allo 0431/441200.\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. BU63',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/per_lei_bu45.jpg',
    'finalPrice': '',
    'price': '97.00',
    'priceFrom': '',
    'discount': ''
  },
  {
    'id': '6334',
    'order': '17',
    'sku': 'ZB15',
    'name': 'PRANZO NEL LOUNGE BAR DELLA SPA BIBIONE THERMAE - COD. ZB15',
    'description': 'Questo buono comprende un pranzo nel nuovissimo Lounge Bar della SPA Bibione Thermae (a persona):\r\n- un piatto a scelta;- 1/2 lt. di acqua;- dolce e caff&egrave;.\r\nFreschissime materie prime vengono selezionate per creare sfiziose composizioni in piatti unici.E\' necessaria la prenotazione telefonando allo 0431/441200.\r\n&nbsp;\r\nBUONO VALIDO 12 MESI DALLA DATA DELL\' ORDINE\r\ncod. ZB15',
    'shortdescription': '',
    'type': 'simple',
    'photo': 'http://ecommerce.abs-one.com/photobook/eShops_2/spa_lounge_pranzo.jpg',
    'finalPrice': '',
    'price': '15.00',
    'priceFrom': '',
    'discount': ''
  }
]

export const productsFn = c => {
  let selectedProducts = _filter(products, p => p.type !== 'specialservice')
  console.log('---- Headers ----')
  console.dir(c.headers)
  return [200, selectedProducts]
}

export const servicesFn = c => {
  let selectedProducts = _filter(products, p => p.type === 'specialservice')
  console.log('---- Headers ----')
  console.dir(c.headers)
  return [200, selectedProducts]
}
