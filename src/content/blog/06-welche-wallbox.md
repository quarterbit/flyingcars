---
title: "Welche Wallbox im Garagenhof?"
date: 2022-04-12
description: "Die Auswahl einer Wallbox für den Garagenhof muss einige Randbedingungen erfüllen. Unsere Hauptkriterien und warum wir uns für Keba entschieden haben."
image: "keba-offen.jpg"
tags: ["Wallbox", "Keba", "Lademanagement"]
---

Die Auswahl einer Wallbox für den Garagenhof muss einige Randbedingungen erfüllen. Hier kurz unsere Hauptkriterien und auch für welches System wir uns entschieden haben.

- Integrierbar als Verbund mit **Lademanagement** bis zur maximalen Garagenanzahl. Ihr habt 50 oder 80 A beim Stromanbieter bestellt und müsst sicherstellen, dass die Wallboxen in Summe nicht die Leistung überschreiten. Entweder lassen sie sich von außen durch ein zentrales Lastmanagement steuern oder die Wallboxen sind bereits mit einem integrierten Lastmanagement über LAN oder ModBus ausgestattet.
- **Verfügbarkeit**, so dass auch eine hohe Chance besteht, dass Nachbarn, die erst später eine Wallbox installieren, auch das System des Herstellers noch kaufen können. Hier hat man natürlich immer ein gewisses Risiko aber durch einen namenhaften, großen Hersteller zumindest ein geringeres.
- Modelle, die es erlauben Ladevorgänge geeicht zu **dokumentieren** und zu exportieren, ggf. sogar ein privates eKfz und einen Firmenwagen voneinander getrennt zu laden und das dokumentiert zur Abrechnung mit dem Arbeitgeber zu exportieren. Die Unterscheidung mehrerer Fahrzeuge erfolgt oft per **RFID**. Ihr werdet aber auch Nachbarn haben, denen dieses Feature und der Aufpreis der Wallbox nicht wichtig ist. Eine Lösung, die im Verbund beides (RFID/Dokumentation vs. einfachere Lösung) erlaubt ist somit das abgeleitete Ziel.
- **Qualität** und ggf. Support – wenn ihr nur eine Wallbox bei euch installiert ist das vielleicht nicht ganz so wichtig. Wenn ihr aber ca. 15 Stück als System für die gesamte Nachbarschaft anschafft, dann ist ein Kontakt zum Hersteller zur Klärung eurer Detailfragen sehr wertvoll.

## Unsere Auswahl: Keba P30-C und P30-X

Wir haben uns für das System von Keba entschieden. Die Keba Wallbox P30 der C-Serie erlaubt es, dass sich bis zu 15 Wallboxen durch eine Keba P30-X Wallbox in ein LAN zusammenschließen und steuern lassen.

Ein paar Details aus unseren Rückfragen direkt beim Hersteller:

| Unsere Frage | Antwort von Keba |
|---|---|
| Kann die Keba P30-X auch 18 Wallboxen steuern? | Nein, die Anzahl der Clients ist auf 15 begrenzt. Ohne Gewähr: Später 2022 ist ggf. ein sog. Large Scale-Controller bis zu 256 oder mehr Clients (C-Serie) geplant. |
| Können P30-C mit und ohne eichrechtskonformen Zähler/RFID gemischt werden? | Nein, dafür sind dann zwei LAN-Segmente und auch zwei P30-X Wallboxen nötig. *Das passte uns sogar noch, weil dann keine künstliche Begrenzung auf 15 mehr gegeben ist.* |
| Die Wallboxen haben zwei Ethernet-Anschlüsse (RJ45 und LSA+). Welcher ist zu verwenden? | Zum Anschluss im Verbund ist der LSA+ Anschluss zu verwenden. RJ45 ist vor allem als Debug-Port vorhanden. *Deshalb haben wir sternförmig in jede Garage ein CAT7 LAN-Kabel verlegt und im Schaltschrank zwei kleine Switches für die zwei LAN-Segmente.* |
| Wie kann man die Ladevorgänge exportieren? | Die P30-X hat einen WLAN-Hotspot und Webinterface und exportiert (x509/signierte) und geeichte Ladevorgänge. Export für maximal 3 Monate. |

Es folgen später noch ein paar Details zur Nutzung der Wallbox für dynamisches Lastmanagement zusammen mit einem Siemens 7KM2200 Zähler. Dieser kann über Modbus oder TCP den aktuell gemessenen Gesamtstrom einer P30-X melden.

Die Installation der Wallboxen mit Stockschrauben/Bohrschablone und der Anschluss verlief einwandfrei. Die Hotspot-Webseite der P30-X ist noch etwas langsam aber bisher ausreichend.

*Disclaimer: Wir bekommen keine Vergünstigung/Vorteile von Keba und sind nur ganz normaler Kunde.*

![Die Keba P30-C mit M&E hat eine Art DotMatrix Display](/flyingcars/img/keba-offen.jpg)
