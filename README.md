# Notenbuch - created by Markus Seitz

Digitales Notenbuch mit integriertem Notenschlüssel-Rechner – eine einzelne HTML-Datei, die ohne Installation und ohne Internetverbindung im Browser läuft.

## Starten

`index.html` herunterladen und im Browser öffnen (Chrome, Edge, Firefox oder Safari).

## Funktionen

### Notenbuch
- Klassen (Mittelstufe, Noten 1–6) und Kurse (Kursstufe, 0–15 VP)
- frei erstellbare Kategorien mit Gewichtung als Verhältnis (z. B. 2:1 oder 4:5)
- **Klassenarbeiten / Tests** mit drei Arten der Eintragung:
  - Note direkt eintragen
  - Gesamtpunktzahl eintragen (Eingabefenster für die ganze Klasse, Note aus dem Notenschlüssel)
  - Punkte für die einzelnen Aufgaben eintragen (Summe, Note und Auswertung je Aufgabe)
- **Mündliche Noten** mit Nummern (Mündlich 1, 2, …) und Terminen; Eingabe per farbigem Smiley für alle Schüler·innen gleichzeitig
- Noten farbig nach Notenstufe (1 dunkelgrün … 6 rot)
- Schnitte je Kategorie, Gesamtschnitt, Klassenschnitt, Zeugnisspalte
- **Auswertung** einer Arbeit: Notenbild, Gesamtpunkteverteilung, Schnitt und Punkteverteilung je Aufgabe – als Balkendiagramm oder Zahlen, Export als **PDF** (eine Seite, farbig) und **CSV**

### Notenschlüssel-Rechner
- Mittelstufe (ganze, halbe oder Viertelnoten) und Kursstufe (00–15 VP)
- Gesamtpunktzahl, Punkteschritte, Sockel, Bestnote
- linear oder nichtlinear (geknickt, Kurve, frei einstellbar, Abitur-Standard)
- Schnellrechner, Notenspiegel, Auswertung nach Aufgaben
- Übernahme von Schlüssel und Ergebnissen ins Notenbuch

## Datenspeicherung & Sicherung

Alle Daten werden nur lokal im Browser des jeweiligen Geräts gespeichert (localStorage). Es werden keine Daten an einen Server übertragen – auch nicht an GitHub.

**Sicherung speichern …** erstellt eine Sicherungsdatei – auf Wunsch **mit Passwort verschlüsselt** (AES-256-GCM, PBKDF2). Auf iPad und Mac kann sie über das Teilen-Menü direkt in **iCloud Drive** abgelegt werden. Das Notenbuch erinnert an eine Sicherung, sobald es ungesicherte Änderungen gibt (Intervall einstellbar).

**Abgleich zwischen Geräten (z. B. MacBook ↔ iPad):** Sicherung auf dem einen Gerät in iCloud Drive ablegen, auf dem anderen **„Sicherung laden …“** wählen. Das Notenbuch zeigt an, ob die Sicherung neuer oder älter ist als der Stand auf dem Gerät.

Tipps:
- **iPad:** Notenbuch über die Web-Adresse öffnen und mit *Teilen → Zum Home-Bildschirm* als App ablegen – so bleiben die Daten dauerhaft gespeichert.
- **Mac (Safari):** *Ablage → Zum Dock hinzufügen*; unter *Safari → Einstellungen → Allgemein* kann der Download-Ordner auf iCloud Drive gestellt werden.
- **DuckDuckGo:** Die Seite als „feuerfest“ (Fireproof) markieren, sonst löscht der Feuer-Knopf alle Daten.
- Sicherungsdateien mit Noten **niemals** in dieses (öffentliche) Repository hochladen.
