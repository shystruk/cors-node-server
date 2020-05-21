'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
    WEATHER_BASE_URL: 'https://www.metaweather.com',

    COSSACKS_EN: [
        {
            id: uuidv4(),
            name: 'Bohdan Khmelnytsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/BChmielnicki.jpg/220px-BChmielnicki.jpg',
            title: 'Ukrainian Hetman of the Zaporozhian Host, then in the Polish Crown of the Polish–Lithuanian Commonwealth.',
            born: 1595,
            died: 1657
        },
        {
            id: uuidv4(),
            name: 'Petro Doroshenko',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Petro_Doroshenko_19.jpg/220px-Petro_Doroshenko_19.jpg',
            title: 'Cossack political and military leader, Hetman of Right-bank Ukraine and a Russian voyevoda.',
            born: 1627,
            died: 1698
        },
        {
            id: uuidv4(),
            name: 'Ivan Vyhovsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Iwan_Wyhowski.PNG/220px-Iwan_Wyhowski.PNG',
            title: 'Hetman of the Ukrainian Cossacks during three years of the Russo-Polish War. He was the successor to the famous hetman and rebel leader Bohdan Khmelnytsky.',
            born: 1608,
            died: 1664
        },
        {
            id: uuidv4(),
            name: 'Yuri Khmelnytsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Yurii_Khmelnytsky.png/220px-Yurii_Khmelnytsky.png',
            title: 'Younger son of the famous Ukrainian Hetman Bohdan Khmelnytsky and brother of Tymofiy Khmelnytsky, was a Zaporozhian Cossack political and military leader.',
            born: 1641,
            died: 1685
        },
        {
            id: uuidv4(),
            name: 'Count Kirill Grigoryevich Razumovsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kirill_Razumovsky_Tokke.jpg/220px-Kirill_Razumovsky_Tokke.jpg',
            title: 'Ukrainian Cossack-born Russian Imperial state figure, who served as the last Hetman of Zaporizhian Host on both sides of the Dnieper.',
            born: 1728,
            died: 1803
        },
        {
            id: uuidv4(),
            name: 'Pavlo Teteria',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pavlo_Teterya.jpg/220px-Pavlo_Teterya.jpg',
            title: 'Hetman of Right-bank Ukraine. His real name is Pavlo Morzhkovsky. Before his hetmancy he served in a number of high positions under Bohdan Khmelnytsky, and Ivan Vyhovsky.',
            born: 1620,
            died: 1670
        },
        {
            id: uuidv4(),
            name: 'Mykhailo Stepanovych Khanenko',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mykhailo_Khanenko.jpg/220px-Mykhailo_Khanenko.jpg',
            title: 'Ukrainian Cossack military leader, and nominal hetman of Right-bank Ukraine from 1669-74 in rivalry with Petro Doroshenko during The Ruin.',
            born: 1620,
            died: 1680
        },
        {
            id: uuidv4(),
            name: 'Tymofiy Bohdanovych Khmelnytsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Xm_Tym.jpg/190px-Xm_Tym.jpg',
            title: 'The eldest son of Cossack hetman Bohdan Khmelnytsky. Married to Moldavian princess Ruxandra, daughter of Prince Vasile Lupu, he took part in the Battle of Finta as commander of a Cossack force.',
            born: 1632,
            died: 1653
        },
        {
            id: uuidv4(),
            name: 'Count Alexei Grigorievich Razumovsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alexei_Grigorievich_Razumovskiy.PNG/220px-Alexei_Grigorievich_Razumovskiy.PNG',
            title: 'Ukrainian-born Russian Registered Cossack who rose to become the lover and, it was even suggested, the morganatic spouse of the Russian Empress Elizaveta Petrovna.',
            born: 1709,
            died: 1771
        },
        {
            id: uuidv4(),
            name: 'Ivan Briukhovetsky',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ivan_Briukhovetsky.jpg/220px-Ivan_Briukhovetsky.jpg',
            title: 'Hetman of Left-bank Ukraine from 1663 to 1668. In the early years of rule his was positioned as pro-Russian policies incited a rebellion which he later joined in an attempt to salvage his reputation and authority. Later leader of the Anti-Moscow uprising.',
            born: 1623,
            died: 1668
        },
        {
            id: uuidv4(),
            name: 'Pavlo Polubotok',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nash_polubotok.jpg/220px-Nash_polubotok.jpg',
            title: 'Cossack political and military leader and Acting Hetman of Left-bank Ukraine between 1722 and 1724.',
            born: 1660,
            died: 1724
        }
    ],

    CITIES_EN: [
        {
            id: uuidv4(),
            name: 'Kyiv',
            population: '2.884 million',
            description: 'Kiev or Kyiv is the capital and most populous city of Ukraine. It is in north-central Ukraine along the Dnieper River. Its population in July 2015 was 2,887,974, making Kiev the sixth-most populous city in Europe. Kiev is an important industrial, scientific, educational and cultural center of Eastern Europe.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kyiv_Montage_2016.png/270px-Kyiv_Montage_2016.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Kyiv_Kurovskyi.svg/100px-Flag_of_Kyiv_Kurovskyi.svg.png',
            website: 'https://kyivcity.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Odesa',
            population: '993,120',
            description: 'Odessa is a port city on the Black Sea in southern Ukraine. It’s known for its beaches and 19th-century architecture, including the Odessa Opera and Ballet Theater. The monumental Potemkin Stairs, immortalized in "The Battleship Potemkin," lead down to the waterfront with its Vorontsov Lighthouse. Running parallel to the water, the grand Primorsky Boulevard is a popular promenade lined with mansions and monuments.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Odessa-Montage-2016.png/250px-Odessa-Montage-2016.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_Odessa.svg/100px-Flag_of_Odessa.svg.png',
            website: 'https://omr.gov.ua/ua/'
        },
        {
            id: uuidv4(),
            name: 'Kharkiv',
            population: '1.419 million',
            description: 'Kharkiv is a city in northeast Ukraine. Sprawling Freedom Square is home to the constructivist Derzhprom building. Shevchenko Park features botanic gardens and a zoo. Kharkiv State Academic Opera and Ballet Theatre stages regular performances. Southwest is the huge Annunciation Cathedral, with 5 domes and a bell tower. Northeast, Maxim Gorky Central Park has a giant Ferris wheel and a cable car.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Kharkiv_montage_%282015%29.png/250px-Kharkiv_montage_%282015%29.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kharkiv-town-flag.svg/100px-Kharkiv-town-flag.svg.png',
            website: 'https://www.city.kharkov.ua/en/'
        },
        {
            id: uuidv4(),
            name: 'Lviv',
            population: '721,301',
            description: 'Lviv is a city in western Ukraine, around 70 kilometers from the border with Poland. Traces of its Polish and Austro-Hungarian heritage are evident in its architecture, which blends Central and Eastern European styles with those of Italy and Germany. In High Castle Park, the mountaintop ruins of a 14th-century castle provide panoramic views of the city’s green-domed churches and the surrounding hills.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%BE%D0%BF%D0%B5%D1%80%D0%B8_%D1%82%D0%B0_%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D1%83_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%97_%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D1%97_13.jpg/290px-thumbnail.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Lviv.svg/100px-Flag_of_Lviv.svg.png',
            website: 'https://city-adm.lviv.ua/'
        },
        {
            id: uuidv4(),
            name: 'Ivano-Frankivsk',
            population: '230,507',
            description: 'Ivano-Frankivsk is a historic city located in Western Ukraine. It is the administrative centre of Ivano-Frankivsk Oblast. Administratively, it is designated as a city of regional significance within the oblast, and together with a number of rural localities, is incorporated as Ivano-Frankivsk Municipality.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ratush-01.jpg/270px-Ratush-01.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ivano-Frankivsk_flag.svg/100px-Ivano-Frankivsk_flag.svg.png',
            website: 'http://mvk.if.ua/'
        },
        {
            id: uuidv4(),
            name: 'Dnipro',
            population: '966,400',
            description: 'Dnipro is a city on the Dnieper River in central Ukraine. Missiles in Rocket Park mark the city\'s role in the Soviet-era space and defense industries. The Jewish Memory and Holocaust in Ukraine Museum is part of the Menorah Center, a Jewish cultural and business complex. The Art Museum includes paintings and sculptures. Nearby, the D.I. Yavornytsky National History Museum explores archaeology and Cossack history.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Collage_of_Dnipro_city_images.jpg/275px-Collage_of_Dnipro_city_images.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Dnipro_prapor.png/120px-Dnipro_prapor.png',
            website: 'http://dniprorada.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Mariupol',
            population: '446,103',
            description: 'Mariupol is a city of regional significance in south eastern Ukraine, situated on the north coast of the Sea of Azov at the mouth of the Kalmius river, in the Pryazovia region. It is the tenth-largest city in Ukraine, and the second largest in the Donetsk Oblast with a population of 449,498.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mariupol_collage.png/250px-Mariupol_collage.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mariupol_prapor.png/100px-Mariupol_prapor.png',
            website: 'http://mariupolrada.gov.ua/en'
        },
        {
            id: uuidv4(),
            name: 'Chernivtsi',
            population: '262,276',
            description: 'Chernivtsi is a city in western Ukraine. It\'s known for the 1875-founded Chernivtsi National University, which features Romanesque and Byzantine architecture and the Chernivtsi University Botanical Garden. At the heart of the old town is Central Square, with the blue, neoclassical City Hall. Nearby, the Chernivtsi Museum of Art exhibits 17th- to 20th-century art from the historic region of Bukovina in a former bank.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Architecture-of-Chernivtsi-4.jpg/139px-Architecture-of-Chernivtsi-4.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_Czernovcov_L.JPG/100px-Flag_Czernovcov_L.JPG',
            website: 'http://chernivtsy.eu/'
        },
        {
            id: uuidv4(),
            name: 'Zaporizhzhia',
            population: '746,749',
            description: 'Zaporizhia is a city on the Dnieper River in southeastern Ukraine. It\'s home to Khortytsia Island, a former Cossack stronghold with the Khortytsia National Reserve and the open-air Museum of Zaporizhian Cossacks. Riverside Dubovy Gai park has children’s rides and a lake. Nearby, the Regional Lore Museum explores Cossack, Scythian and medieval history. Boguslayev Museum of Technology has jet engines and motorbikes.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%D0%9F%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0_%D0%A1%D1%96%D1%87%D1%96.jpg/275px-%D0%9F%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0_%D0%A1%D1%96%D1%87%D1%96.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/%D0%9F%D1%80%D0%B0%D0%BF%D0%BE%D1%80_%D0%BC%D1%96%D1%81%D1%82%D0%B0_%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F_%282003%29.svg/100px-%D0%9F%D1%80%D0%B0%D0%BF%D0%BE%D1%80_%D0%BC%D1%96%D1%81%D1%82%D0%B0_%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F_%282003%29.svg.png',
            website: ''
        },
        {
            id: uuidv4(),
            name: 'Mykolaiv',
            population: '486,267',
            description: 'Mykolaiv, or Nikolaev, is a city near the Black Sea in southern Ukraine. Displays at the Mykolaiv Regional Museum of Local History include prehistoric artifacts, ceramics and photographs. The Mykolaiv Observatory, founded in 1821, includes a museum with antique astronomical instruments. The Mykolaiv Zoo has tigers and polar bears. The Museum of Shipbuilding and Fleet traces the history of the city\'s main industry.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D0%97%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%93%D0%BE%D1%80%D0%BA%D0%BE%D0%BC%D0%B0_%D0%B2_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B5.jpg/139px-%D0%97%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%93%D0%BE%D1%80%D0%BA%D0%BE%D0%BC%D0%B0_%D0%B2_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B5.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Nikolayev.svg/100px-Flag_of_Nikolayev.svg.png',
            website: 'http://mkrada.gov.ua/en/'
        },
        {
            id: uuidv4(),
            name: 'Donetsk',
            population: '486,267',
            description: 'Donetsk, formerly known as Aleksandrovka, Hughesovka, Yuzovka, Stalin and Stalino, is an industrial city located on the Kalmius River in the disputed Donestk region. It is claimed by Ukraine and by the unrecognized Donetsk People\'s Republic which claims it as its capital city. ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Donetsk_montage_%282015%29.png/250px-Donetsk_montage_%282015%29.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Donetsk.svg/100px-Flag_of_Donetsk.svg.png',
            website: ''
        },
        {
            id: uuidv4(),
            name: 'Uzhhorod',
            population: '112,447',
            description: 'Uzhhorod is a city in western Ukraine. Medieval Uzhhorod Castle is home to the Museum of Regional History, with artifacts from the 14th–20th centuries including coins and weapons. The open-air Museum of Folk Architecture and Life features reconstructed traditional buildings with folk art. The turreted Catholic Church of St. George dates from the 17th century. To the west, Bozdos\'kyi Park has children\'s play areas.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aerial_view_Uzhhorod_-Amphitheatre-0308.jpg/280px-Aerial_view_Uzhhorod_-Amphitheatre-0308.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Uzhhorod.png/100px-Flag_of_Uzhhorod.png',
            website: 'https://rada-uzhgorod.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Ternopil',
            population: '216,384',
            description: 'Ternopil is a city in western Ukraine, located on the banks of the Seret River. Until 1944, it was known mostly as Tarnopol. Ternopil is one of the major cities of Western Ukraine and the historical regions of Galicia and Podolia. It is served by Ternopil Airport.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/UA-TE_Ternopil_Buran_18-06-16.JPG/270px-UA-TE_Ternopil_Buran_18-06-16.JPG',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_Ternopil.svg/100px-Flag_of_Ternopil.svg.png',
            website: 'http://rada.te.ua/en'
        },
        {
            id: uuidv4(),
            name: 'Lutsk',
            population: '213,950',
            description: 'Lutsk is a city on the Styr River in northwestern Ukraine. It is the administrative center of the Volyn Oblast and the administrative center of the surrounding Lutsk Raion within the oblast, though it is not a part of the raion. Lutsk has the status of a city of oblast significance, equivalent to that of a raion.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%D0%92%27%D1%97%D0%B7%D0%BD%D0%B0_%28%D0%9D%D0%B0%D0%B4%D0%B1%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%29_%D0%B1%D0%B0%D1%88%D1%82%D0%B0_%D0%B7%D0%B0%D0%BC%D0%BA%D1%83_%D0%9B%D1%83%D1%86%D1%8C%D0%BA.jpg/270px-%D0%92%27%D1%97%D0%B7%D0%BD%D0%B0_%28%D0%9D%D0%B0%D0%B4%D0%B1%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%29_%D0%B1%D0%B0%D1%88%D1%82%D0%B0_%D0%B7%D0%B0%D0%BC%D0%BA%D1%83_%D0%9B%D1%83%D1%86%D1%8C%D0%BA.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Prapor_Lutsk.svg/100px-Prapor_Lutsk.svg.png',
            website: 'http://lutskrada.gov.ua/en'
        },
        {
            id: uuidv4(),
            name: 'Vinnytsia',
            population: '370,834',
            description: 'Vinnytsia is a city on the Southern Bug River, in west-central Ukraine. Set in the river, the large Multimedia Fountain Roshen emits sound and colored light. The landscaped Gorky Park has a skate park, sports stadium and planetarium. The Pirogov Estate Museum complex, commemorating surgeon Nikolay Pirogov, includes a house, pharmacy and burial vault. The vast Friendship of Peoples Park has a lake and forested areas.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Old_Tower_night_winter_2011_G1.jpg/250px-Old_Tower_night_winter_2011_G1.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Vinnycia.svg/100px-Flag_of_Vinnycia.svg.png',
            website: 'http://vmr.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Kamianets-Podilskyi',
            population: '99,758',
            description: 'Kamianets-Podilskyi is a city in western Ukraine. It\'s known for its well-preserved Old Town and Kamianets-Podilskyi Castle, a medieval fortress featuring several original towers. Castle Bridge, which leads to the city proper, also dates from the Middle Ages. The open-air Museum of Miniatures presents replicas of Ukrainian castles. Podilski Tovtry National Park is a huge nature preserve home to historical monuments.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zamek_w_Kamie%C5%84cu_Podolskim_2019.jpg/280px-Zamek_w_Kamie%C5%84cu_Podolskim_2019.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kamjantec-Podilsky_flag.svg/100px-Kamjantec-Podilsky_flag.svg.png',
            website: 'http://vmr.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Kryvyi Rih',
            population: '634,780',
            description: 'Kryvyi Rih or Krivoy Rog is a city in the Dnipropetrovsk Oblast of Ukraine; it is the 7th-most populous city in the country. It lies within a large urban area, administratively incorporated with Kryvyi Rih Municipality as a city of regional significance.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/KR_City_collage.png/250px-KR_City_collage.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Banner_of_Kryvyi_Rih.svg/100px-Banner_of_Kryvyi_Rih.svg.png',
            website: 'https://kr.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Sumy',
            population: '264,753',
            description: 'Sumy is a city in north-eastern Ukraine, and the capital of Sumy Oblast. Sumy also serves as the administrative center of Sumy Raion of Sumy oblast. Sumy is administratively incorporated as a city of oblast significance and does not belong to the raion. As of 2019 its population is estimated at 265,140.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/UkrainianAcademyOfBanking.JPG/280px-UkrainianAcademyOfBanking.JPG',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Sumy.gif/100px-Flag_of_Sumy.gif',
            website: 'http://www.meria.sumy.ua/'
        },
        {
            id: uuidv4(),
            name: 'Chernihiv',
            population: '285,821',
            description: 'Chernihiv is a city in northern Ukraine. In its historic center, Dytynets Park is home to churches like the 11th-century Transfiguration Cathedral. The Cathedral of Boris and Gleb features silver Royal Doors, and St. Catherine\'s Church is topped with gold cupolas. Near central Red Square is red-brick Pyatnytska Church. Southwest, near Trinity Monastery, the tunnels of Anthony Caves hold centuries-old monks’ tombs.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/%D0%A2%D1%80%D0%BE%D1%97%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80.jpg/303px-%D0%A2%D1%80%D0%BE%D1%97%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alex_K_Chernihiv_prapor_1992.svg/100px-Alex_K_Chernihiv_prapor_1992.svg.png',
            website: 'http://www.chernigiv-rada.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Luhansk',
            population: '409,895',
            description: 'Luhansk or Lugansk, formerly known as Voroshilovgrad, is internationally recognized as a city in eastern Ukraine, but effectively, Luhansk is the capital and administrative center of the Luhansk People\'s Republic, an unrecognized state that was established in 2014.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/%D0%9E%D1%82%D0%B5%D0%BB%D1%8C_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0.jpg/250px-%D0%9E%D1%82%D0%B5%D0%BB%D1%8C_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Luhansk.svg/100px-Flag_of_Luhansk.svg.png',
            website: 'http://gorod-lugansk.com/'
        },
        {
            id: uuidv4(),
            name: 'Drohobych',
            population: '76,686',
            description: 'Drohobych is a city of regional significance in Lviv Oblast, Ukraine. It is the administrative center of Drohobych district. In 1939–1941 and 1944–1959 it was the center of Drohobych Oblast.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%AE%D1%80%D1%96%D1%8F_%D1%83_%D0%94%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D0%B8%D1%87%D1%96.jpg/270px-%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%AE%D1%80%D1%96%D1%8F_%D1%83_%D0%94%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D0%B8%D1%87%D1%96.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Drohobych.svg/100px-Flag_of_Drohobych.svg.png',
            website: 'http://www.drohobych-rada.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Kherson',
            population: '289,697',
            description: 'Kherson is a city in southern Ukraine. It functions as the administrative center of Kherson Oblast. Designated as a city of oblast significance. Kherson is an important port on the Black Sea and on the Dnieper River, and the home of a major ship-building industry. As of 2015 it had a population of 294,941.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Khersonkollage.jpg/250px-Khersonkollage.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flag_of_Kherson.svg/100px-Flag_of_Kherson.svg.png',
            website: 'http://city.kherson.ua/'
        },
        {
            id: uuidv4(),
            name: 'Mukachevo',
            population: '86,339',
            description: 'Mukachevo is a city located in the valley of the Latorica river in Zakarpattia Oblast, in Western Ukraine. Serving as the administrative center of Mukachevo Raion, the city itself does not belong to the raion and is designated as a city of oblast significance, with the status equal to that of a separate raion.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D1%96%D0%B7_%D0%B2%D0%B8%D1%81%D0%BE%D1%82%D0%B8_%D0%BF%D1%82%D0%B0%D1%88%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BE%D0%BB%D1%8C%D0%BE%D1%82%D1%83_3.JPG/280px-%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D1%96%D0%B7_%D0%B2%D0%B8%D1%81%D0%BE%D1%82%D0%B8_%D0%BF%D1%82%D0%B0%D1%88%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BE%D0%BB%D1%8C%D0%BE%D1%82%D1%83_3.JPG',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Flag_of_Mukacheve.svg/100px-Flag_of_Mukacheve.svg.png',
            website: 'http://mukachevo-rada.gov.ua/'
        },
        {
            id: uuidv4(),
            name: 'Zhytomyr',
            population: '266,106',
            description: 'Zhytomyr is a city in the north of the western half of Ukraine. It is the administrative center of Zhytomyr Oblast, as well as the administrative center of the surrounding Zhytomyr Raion.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Zhytomyr_Montage_2019.jpg/210px-Zhytomyr_Montage_2019.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_Zhytomyr.svg/100px-Flag_of_Zhytomyr.svg.png',
            website: 'http://zt-rada.gov.ua/index.php'
        },
        {
            id: uuidv4(),
            name: 'Poltava',
            population: '284,942',
            description: 'Poltava is a city in central Ukraine. The landscaped Korpusny Sad square, or Round Square, is home to the Monument of Glory commemorating the 1709 Battle of Poltava. The Poltava Art Museum offers regional art and a children\'s gallery. The Museum of Local Lore displays folk art and Cossack relics. The Botanical Garden has an arboretum and a flower museum. To the northeast is the Holy Cross Convent, founded in 1650.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Collage_of_Poltava.jpg/250px-Collage_of_Poltava.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Poltava.svg/100px-Flag_of_Poltava.svg.png',
            website: 'http://rada-poltava.gov.ua/foreign/'
        },
        {
            id: uuidv4(),
            name: 'Sevastopol',
            population: '340,735',
            description: 'Sevastopol is the largest city on the Crimean Peninsula and a major Black Sea port. Since annexing Crimea in 2014, the Russian Federation has administered Sevastopol as a federal city. Nevertheless, Ukraine and most of the UN member countries continue to regard Sevastopol as a city with special status within Ukraine.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sevastopol_Collage_2015.png/250px-Sevastopol_Collage_2015.png',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_Sevastopol.svg/100px-Flag_of_Sevastopol.svg.png',
            website: 'http://sevastopol.gov.ru/'
        },
        {
            id: uuidv4(),
            name: 'Khmelnytskyi',
            population: '265,693',
            description: 'Khmelnytskyi, until 1954 Proskuriv, is a city in western Ukraine, the administrative center for the Khmelnytskyi Oblast and the Khmelnytskyi Raion. Khmelnytskyi is located in the historic region of Podolia on the banks of the Buh River. The city received its current local government designation in 1941.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%D0%A5%D1%80%D0%B0%D0%BC_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D1%8F_%D0%9F%D0%BE%D0%B1%D1%96%D0%B4%D0%BE%D0%BD%D0%BE%D1%81%D1%86%D1%8F._2017%D1%80.jpg/139px-%D0%A5%D1%80%D0%B0%D0%BC_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D1%8F_%D0%9F%D0%BE%D0%B1%D1%96%D0%B4%D0%BE%D0%BD%D0%BE%D1%81%D1%86%D1%8F._2017%D1%80.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Khmelnytskyi.svg/100px-Flag_of_Khmelnytskyi.svg.png',
            website: 'http://www.khmelnytsky.com/'
        },
        {
            id: uuidv4(),
            name: 'Rivne',
            population: '243,934',
            description: 'Rivne is a historic city in western Ukraine and the historical region of Volhynia. It is the administrative center of Rivne Oblast, as well as the surrounding Rivne Raion within the oblast. Administratively, Rivne is incorporated as a city of oblast significance and does not belong to the raion.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/%D0%A0%D0%BE%D0%B2%D0%BD%D0%BE._%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80..JPG/250px-%D0%A0%D0%BE%D0%B2%D0%BD%D0%BE._%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80..JPG',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Rivne.svg/100px-Flag_of_Rivne.svg.png',
            website: 'http://city-adm.rv.ua/'
        },
        {
            id: uuidv4(),
            name: 'Cherkasy',
            population: '279,074',
            description: 'Cherkasy, or Cherkassy, is a city in central Ukraine. Cherkasy is the capital of Cherkasy Oblast, as well as the administrative center of surrounding Cherkasky Raion within the oblast. The city itself is designated as a city of oblast significance and does not belong to the raion.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/71-101-0016_Cherkasy_DSC_9928.jpg/280px-71-101-0016_Cherkasy_DSC_9928.jpg',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/FLA_Cherkasy%2C_Cherkaska%2C_Ukraine.svg/100px-FLA_Cherkasy%2C_Cherkaska%2C_Ukraine.svg.png',
            website: 'http://chmr.gov.ua/ua/'
        }
    ]
};
