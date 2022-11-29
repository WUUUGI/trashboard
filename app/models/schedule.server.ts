// import awb from "./awb-abfuhrtermine.ics";

const ical = require('node-ical');   

const ics2223 = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ZContent.net//ZapCalLib 1.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220201
DTEND;VALUE=DATE:20220202
UID:2022-02-01-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220301
DTEND;VALUE=DATE:20220302
UID:2022-03-01-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230801
DTEND;VALUE=DATE:20230802
UID:2023-08-01-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220901
DTEND;VALUE=DATE:20220902
UID:2022-09-01-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20221201
DTEND;VALUE=DATE:20221202
UID:2022-12-01-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230202
DTEND;VALUE=DATE:20230203
UID:2023-02-02-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230302
DTEND;VALUE=DATE:20230303
UID:2023-03-02-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220602
DTEND;VALUE=DATE:20220603
UID:2022-06-02-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230602
DTEND;VALUE=DATE:20230603
UID:2023-06-02-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220802
DTEND;VALUE=DATE:20220803
UID:2022-08-02-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221102
DTEND;VALUE=DATE:20221103
UID:2022-11-02-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230103
DTEND;VALUE=DATE:20230104
UID:2023-01-03-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220203
DTEND;VALUE=DATE:20220204
UID:2022-02-03-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220303
DTEND;VALUE=DATE:20220304
UID:2022-03-03-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230403
DTEND;VALUE=DATE:20230404
UID:2023-04-03-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220503
DTEND;VALUE=DATE:20220504
UID:2022-05-03-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230503
DTEND;VALUE=DATE:20230504
UID:2023-05-03-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230803
DTEND;VALUE=DATE:20230804
UID:2023-08-03-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231103
DTEND;VALUE=DATE:20231104
UID:2023-11-03-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220104
DTEND;VALUE=DATE:20220105
UID:2022-01-04-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230704
DTEND;VALUE=DATE:20230705
UID:2023-07-04-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220804
DTEND;VALUE=DATE:20220805
UID:2022-08-04-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231004
DTEND;VALUE=DATE:20231005
UID:2023-10-04-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20221104
DTEND;VALUE=DATE:20221105
UID:2022-11-04-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230105
DTEND;VALUE=DATE:20230106
UID:2023-01-05-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220405
DTEND;VALUE=DATE:20220406
UID:2022-04-05-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230405
DTEND;VALUE=DATE:20230406
UID:2023-04-05-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220505
DTEND;VALUE=DATE:20220506
UID:2022-05-05-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230505
DTEND;VALUE=DATE:20230506
UID:2023-05-05-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220705
DTEND;VALUE=DATE:20220706
UID:2022-07-05-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230905
DTEND;VALUE=DATE:20230906
UID:2023-09-05-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221005
DTEND;VALUE=DATE:20221006
UID:2022-10-05-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20231205
DTEND;VALUE=DATE:20231206
UID:2023-12-05-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220106
DTEND;VALUE=DATE:20220107
UID:2022-01-06-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230606
DTEND;VALUE=DATE:20230607
UID:2023-06-06-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230706
DTEND;VALUE=DATE:20230707
UID:2023-07-06-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220906
DTEND;VALUE=DATE:20220907
UID:2022-09-06-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231006
DTEND;VALUE=DATE:20231007
UID:2023-10-06-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20221206
DTEND;VALUE=DATE:20221207
UID:2022-12-06-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230207
DTEND;VALUE=DATE:20230208
UID:2023-02-07-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230307
DTEND;VALUE=DATE:20230308
UID:2023-03-07-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220407
DTEND;VALUE=DATE:20220408
UID:2022-04-07-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220707
DTEND;VALUE=DATE:20220708
UID:2022-07-07-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230907
DTEND;VALUE=DATE:20230908
UID:2023-09-07-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221007
DTEND;VALUE=DATE:20221008
UID:2022-10-07-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20231107
DTEND;VALUE=DATE:20231108
UID:2023-11-07-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231207
DTEND;VALUE=DATE:20231208
UID:2023-12-07-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220208
DTEND;VALUE=DATE:20220209
UID:2022-02-08-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220308
DTEND;VALUE=DATE:20220309
UID:2022-03-08-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220608
DTEND;VALUE=DATE:20220609
UID:2022-06-08-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230808
DTEND;VALUE=DATE:20230809
UID:2023-08-08-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220908
DTEND;VALUE=DATE:20220909
UID:2022-09-08-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20221108
DTEND;VALUE=DATE:20221109
UID:2022-11-08-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221208
DTEND;VALUE=DATE:20221209
UID:2022-12-08-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20230209
DTEND;VALUE=DATE:20230210
UID:2023-02-09-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230309
DTEND;VALUE=DATE:20230310
UID:2023-03-09-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230509
DTEND;VALUE=DATE:20230510
UID:2023-05-09-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230609
DTEND;VALUE=DATE:20230610
UID:2023-06-09-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220809
DTEND;VALUE=DATE:20220810
UID:2022-08-09-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231109
DTEND;VALUE=DATE:20231110
UID:2023-11-09-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230110
DTEND;VALUE=DATE:20230111
UID:2023-01-10-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220310
DTEND;VALUE=DATE:20220311
UID:2022-03-10-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220510
DTEND;VALUE=DATE:20220511
UID:2022-05-10-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220610
DTEND;VALUE=DATE:20220611
UID:2022-06-10-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230810
DTEND;VALUE=DATE:20230811
UID:2023-08-10-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20231010
DTEND;VALUE=DATE:20231011
UID:2023-10-10-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221110
DTEND;VALUE=DATE:20221111
UID:2022-11-10-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220111
DTEND;VALUE=DATE:20220112
UID:2022-01-11-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220411
DTEND;VALUE=DATE:20220412
UID:2022-04-11-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230511
DTEND;VALUE=DATE:20230512
UID:2023-05-11-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230711
DTEND;VALUE=DATE:20230712
UID:2023-07-11-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220811
DTEND;VALUE=DATE:20220812
UID:2022-08-11-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20221011
DTEND;VALUE=DATE:20221012
UID:2022-10-11-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20230112
DTEND;VALUE=DATE:20230113
UID:2023-01-12-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230412
DTEND;VALUE=DATE:20230413
UID:2023-04-12-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220512
DTEND;VALUE=DATE:20220513
UID:2022-05-12-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220712
DTEND;VALUE=DATE:20220713
UID:2022-07-12-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230912
DTEND;VALUE=DATE:20230913
UID:2023-09-12-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231012
DTEND;VALUE=DATE:20231013
UID:2023-10-12-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231212
DTEND;VALUE=DATE:20231213
UID:2023-12-12-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220413
DTEND;VALUE=DATE:20220414
UID:2022-04-13-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230613
DTEND;VALUE=DATE:20230614
UID:2023-06-13-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230713
DTEND;VALUE=DATE:20230714
UID:2023-07-13-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220913
DTEND;VALUE=DATE:20220914
UID:2022-09-13-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221013
DTEND;VALUE=DATE:20221014
UID:2022-10-13-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221213
DTEND;VALUE=DATE:20221214
UID:2022-12-13-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230214
DTEND;VALUE=DATE:20230215
UID:2023-02-14-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230314
DTEND;VALUE=DATE:20230315
UID:2023-03-14-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230414
DTEND;VALUE=DATE:20230415
UID:2023-04-14-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220614
DTEND;VALUE=DATE:20220615
UID:2022-06-14-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220714
DTEND;VALUE=DATE:20220715
UID:2022-07-14-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230914
DTEND;VALUE=DATE:20230915
UID:2023-09-14-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231114
DTEND;VALUE=DATE:20231115
UID:2023-11-14-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20231214
DTEND;VALUE=DATE:20231215
UID:2023-12-14-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220215
DTEND;VALUE=DATE:20220216
UID:2022-02-15-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220315
DTEND;VALUE=DATE:20220316
UID:2022-03-15-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230615
DTEND;VALUE=DATE:20230616
UID:2023-06-15-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230815
DTEND;VALUE=DATE:20230816
UID:2023-08-15-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220915
DTEND;VALUE=DATE:20220916
UID:2022-09-15-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221115
DTEND;VALUE=DATE:20221116
UID:2022-11-15-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20221215
DTEND;VALUE=DATE:20221216
UID:2022-12-15-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230216
DTEND;VALUE=DATE:20230217
UID:2023-02-16-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230316
DTEND;VALUE=DATE:20230317
UID:2023-03-16-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230516
DTEND;VALUE=DATE:20230517
UID:2023-05-16-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220816
DTEND;VALUE=DATE:20220817
UID:2022-08-16-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231116
DTEND;VALUE=DATE:20231117
UID:2023-11-16-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230117
DTEND;VALUE=DATE:20230118
UID:2023-01-17-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220217
DTEND;VALUE=DATE:20220218
UID:2022-02-17-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220317
DTEND;VALUE=DATE:20220318
UID:2022-03-17-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220517
DTEND;VALUE=DATE:20220518
UID:2022-05-17-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220617
DTEND;VALUE=DATE:20220618
UID:2022-06-17-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230817
DTEND;VALUE=DATE:20230818
UID:2023-08-17-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231017
DTEND;VALUE=DATE:20231018
UID:2023-10-17-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20221117
DTEND;VALUE=DATE:20221118
UID:2022-11-17-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220118
DTEND;VALUE=DATE:20220119
UID:2022-01-18-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230418
DTEND;VALUE=DATE:20230419
UID:2023-04-18-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230718
DTEND;VALUE=DATE:20230719
UID:2023-07-18-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220818
DTEND;VALUE=DATE:20220819
UID:2022-08-18-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221018
DTEND;VALUE=DATE:20221019
UID:2022-10-18-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230119
DTEND;VALUE=DATE:20230120
UID:2023-01-19-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220519
DTEND;VALUE=DATE:20220520
UID:2022-05-19-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230519
DTEND;VALUE=DATE:20230520
UID:2023-05-19-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220719
DTEND;VALUE=DATE:20220720
UID:2022-07-19-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230919
DTEND;VALUE=DATE:20230920
UID:2023-09-19-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231019
DTEND;VALUE=DATE:20231020
UID:2023-10-19-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20231219
DTEND;VALUE=DATE:20231220
UID:2023-12-19-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220120
DTEND;VALUE=DATE:20220121
UID:2022-01-20-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220420
DTEND;VALUE=DATE:20220421
UID:2022-04-20-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230420
DTEND;VALUE=DATE:20230421
UID:2023-04-20-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230620
DTEND;VALUE=DATE:20230621
UID:2023-06-20-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230720
DTEND;VALUE=DATE:20230721
UID:2023-07-20-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220920
DTEND;VALUE=DATE:20220921
UID:2022-09-20-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221020
DTEND;VALUE=DATE:20221021
UID:2022-10-20-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20221220
DTEND;VALUE=DATE:20221221
UID:2022-12-20-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230321
DTEND;VALUE=DATE:20230322
UID:2023-03-21-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220621
DTEND;VALUE=DATE:20220622
UID:2022-06-21-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220721
DTEND;VALUE=DATE:20220722
UID:2022-07-21-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230921
DTEND;VALUE=DATE:20230922
UID:2023-09-21-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20231121
DTEND;VALUE=DATE:20231122
UID:2023-11-21-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231221
DTEND;VALUE=DATE:20231222
UID:2023-12-21-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220222
DTEND;VALUE=DATE:20220223
UID:2022-02-22-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230222
DTEND;VALUE=DATE:20230223
UID:2023-02-22-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220322
DTEND;VALUE=DATE:20220323
UID:2022-03-22-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220422
DTEND;VALUE=DATE:20220423
UID:2022-04-22-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230622
DTEND;VALUE=DATE:20230623
UID:2023-06-22-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230822
DTEND;VALUE=DATE:20230823
UID:2023-08-22-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220922
DTEND;VALUE=DATE:20220923
UID:2022-09-22-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20221122
DTEND;VALUE=DATE:20221123
UID:2022-11-22-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221222
DTEND;VALUE=DATE:20221223
UID:2022-12-22-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230323
DTEND;VALUE=DATE:20230324
UID:2023-03-23-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230523
DTEND;VALUE=DATE:20230524
UID:2023-05-23-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220623
DTEND;VALUE=DATE:20220624
UID:2022-06-23-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220823
DTEND;VALUE=DATE:20220824
UID:2022-08-23-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231123
DTEND;VALUE=DATE:20231124
UID:2023-11-23-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230124
DTEND;VALUE=DATE:20230125
UID:2023-01-24-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20230224
DTEND;VALUE=DATE:20230225
UID:2023-02-24-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220324
DTEND;VALUE=DATE:20220325
UID:2022-03-24-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220524
DTEND;VALUE=DATE:20220525
UID:2022-05-24-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230824
DTEND;VALUE=DATE:20230825
UID:2023-08-24-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20231024
DTEND;VALUE=DATE:20231025
UID:2023-10-24-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221124
DTEND;VALUE=DATE:20221125
UID:2022-11-24-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220125
DTEND;VALUE=DATE:20220126
UID:2022-01-25-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230425
DTEND;VALUE=DATE:20230426
UID:2023-04-25-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230525
DTEND;VALUE=DATE:20230526
UID:2023-05-25-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230725
DTEND;VALUE=DATE:20230726
UID:2023-07-25-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220825
DTEND;VALUE=DATE:20220826
UID:2022-08-25-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20221025
DTEND;VALUE=DATE:20221026
UID:2022-10-25-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20230126
DTEND;VALUE=DATE:20230127
UID:2023-01-26-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220426
DTEND;VALUE=DATE:20220427
UID:2022-04-26-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220726
DTEND;VALUE=DATE:20220727
UID:2022-07-26-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230926
DTEND;VALUE=DATE:20230927
UID:2023-09-26-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231026
DTEND;VALUE=DATE:20231027
UID:2023-10-26-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230427
DTEND;VALUE=DATE:20230428
UID:2023-04-27-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220527
DTEND;VALUE=DATE:20220528
UID:2022-05-27-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230627
DTEND;VALUE=DATE:20230628
UID:2023-06-27-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230727
DTEND;VALUE=DATE:20230728
UID:2023-07-27-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220927
DTEND;VALUE=DATE:20220928
UID:2022-09-27-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20221027
DTEND;VALUE=DATE:20221028
UID:2022-10-27-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231227
DTEND;VALUE=DATE:20231228
UID:2023-12-27-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230228
DTEND;VALUE=DATE:20230301
UID:2023-02-28-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230328
DTEND;VALUE=DATE:20230329
UID:2023-03-28-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220428
DTEND;VALUE=DATE:20220429
UID:2022-04-28-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220628
DTEND;VALUE=DATE:20220629
UID:2022-06-28-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220728
DTEND;VALUE=DATE:20220729
UID:2022-07-28-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230928
DTEND;VALUE=DATE:20230929
UID:2023-09-28-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231128
DTEND;VALUE=DATE:20231129
UID:2023-11-28-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221228
DTEND;VALUE=DATE:20221229
UID:2022-12-28-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220329
DTEND;VALUE=DATE:20220330
UID:2022-03-29-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230629
DTEND;VALUE=DATE:20230630
UID:2023-06-29-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230829
DTEND;VALUE=DATE:20230830
UID:2023-08-29-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220929
DTEND;VALUE=DATE:20220930
UID:2022-09-29-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20221129
DTEND;VALUE=DATE:20221130
UID:2022-11-29-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20231229
DTEND;VALUE=DATE:20231230
UID:2023-12-29-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230330
DTEND;VALUE=DATE:20230331
UID:2023-03-30-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220630
DTEND;VALUE=DATE:20220701
UID:2022-06-30-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20220830
DTEND;VALUE=DATE:20220831
UID:2022-08-30-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau), Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20231130
DTEND;VALUE=DATE:20231201
UID:2023-11-30-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nWeitere Informationen zur Biotonne finden S
 ie unter https://www.awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekom
 men oder defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln
 .de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Papier (blau) AWB Köln
DTSTART;VALUE=DATE:20221230
DTEND;VALUE=DATE:20221231
UID:2022-12-30-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Papiertonne finden Sie unter https://
 www.awbkoeln.de/papiertonne. \nIhre Tonne ist abhanden gekommen oder defek
 t? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonn
 e aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau) AWB Köln
DTSTART;VALUE=DATE:20230131
DTEND;VALUE=DATE:20230201
UID:2023-01-31-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nIhre Tonne ist abhanden gekommen oder
  defekt? Bitte füllen Sie das Formular unter https://www.awbkoeln.de/ersa
 tztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20220331
DTEND;VALUE=DATE:20220401
UID:2022-03-31-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20220531
DTEND;VALUE=DATE:20220601
UID:2022-05-31-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20230531
DTEND;VALUE=DATE:20230601
UID:2023-05-31-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Bio (braun) AWB Köln
DTSTART;VALUE=DATE:20230831
DTEND;VALUE=DATE:20230901
UID:2023-08-31-0@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Biotonne finden Sie unter https://www
 .awbkoeln.de/biotonne. \nIhre Tonne ist abhanden gekommen oder defekt? Bit
 te füllen Sie das Formular unter https://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restmüll (grau), Wertstoff (gelb) AWB Köln
DTSTART;VALUE=DATE:20231031
DTEND;VALUE=DATE:20231101
UID:2023-10-31-1@awbkoeln.de
DTSTAMP:20221127T111648
DESCRIPTION:Weitere Informationen zur Restmülltonne finden Sie unter https
 ://www.awbkoeln.de/restmuelltonne. \nWeitere Informationen zur Wertstoffto
 nne finden Sie unter https://www.awbkoeln.de/wertstofftonne. \nIhre Tonne 
 ist abhanden gekommen oder defekt? Bitte füllen Sie das Formular unter ht
 tps://www.awbkoeln.de/ersatztonne aus.
END:VEVENT
END:VCALENDAR
`

type TrashEvent = {
    summary: string
    description: string
    date: string
    daysRemaining: Number
}

function getDaysRemaining(dateString: string, current: Date): number {
    const date = new Date(dateString)
    const difference = date.getTime() - current.getTime()
    return Math.floor(difference / (1000 * 3600 * 24));
}

function compareDates(a: TrashEvent, b: TrashEvent) {
    return a.daysRemaining > b.daysRemaining ? 1 : (a.daysRemaining < b.daysRemaining ? -1 : 0)
}

export async function getEvents(): Promise<Array<TrashEvent>> {
    // use the sync function parseFile() to parse this ics file
    const events = ical.sync.parseICS(ics2223);

    const current = new Date();
    return Object.values((events as Array<any>)).filter((event) => {
        return (new Date(event.start) > current)
    }).map((event: any) => {
        return { summary: event.summary, description: event.description, date: event.start, daysRemaining: getDaysRemaining(event.start, current) }
    }).sort(compareDates).slice(0, 6)
}