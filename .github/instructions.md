# Blogpost-Checkliste

Diese Checkliste gilt fuer neue oder aktualisierte Blogbeitraege in diesem Repository.

## 1) Datei und Slug

- Datei im Ordner src/content/blog anlegen
- Dateiname als kebab-case halten, z. B. 08-pv-auf-dem-garagenhof.md
- Titel und Dateiname sollen thematisch zusammenpassen

## 2) Frontmatter

- title gesetzt
- date auf das reale Veroeffentlichungsdatum setzen
- description kurz und praezise formulieren
- tags als sinnvolle Stichwoerter pflegen
- image nur setzen, wenn die Datei wirklich vorhanden ist

## 3) Bildablage

- Bilder in public/img ablegen
- Im Frontmatter nur den Dateinamen referenzieren, z. B. image: "mein-bild.png"
- Nach dem Hinzufuegen pruefen, ob die Bilddatei git-getrackt ist

## 4) Inhalt

- Kernaussage klar am Anfang
- Pro und Contra sauber trennen
- Fazit mit konkreter persoenlicher Einordnung abschliessen
- Bei Zahlen/Leistung/Dimensionierung realistische Groessenordnungen verwenden

## 5) Technischer Check

- Lokal bauen: npm run build
- Pruefen, ob die neue Route erzeugt wird
- Keine kaputten Bildreferenzen oder fehlerhaften Links

## 6) Git-Check vor Push

- git status pruefen
- Beitrag und zugehoerige Assets gemeinsam committen
- Commit-Message kurz und konkret halten

## 7) Nach Deployment

- GitHub Pages Build abwarten
- Beitrag im Browser hart neu laden
- Bei fehlenden Bildern zuerst pruefen, ob Asset wirklich committed und deployed wurde
