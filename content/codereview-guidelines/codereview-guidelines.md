
# Codereview Guidelines

Twijfelt u aan het niveau van uw kandidaat? Vermoed u dat uw kandidaat zich beter voordoet of misschien zichzelf onderschat? Het is mogelijk om door Hensen IT Solutions een niveau bepaling uit laten uitvoeren door middel van een codereview.


## Voor Recruiters

Aan u als recruiter is het de taak om duidelijk te formuleren wat er van de codereview verwacht wordt. Voorbeeld vragen zijn:

- graag een niveau bepaling u wilt enkel (en dus ook sneller dan met feedback) het niveau weten
- graag een niveau bepaling met uitgebreide feedback
- graag een codecheck doen dit interpreteer ik als "graag een niveaubepaling"
- graag bevestigen of het niveau van kandidaat X inderdaad Y is kandidaat X is senior intechniek/taal/stack Y maar wat is zijn niveau voor techniek/taal/stack Z, hij wilt zijn carriere een andere richting opsturen

## Voor Kandidaten

Om dit proces te bespoedigen volgen een aantal richtlijnen waaraan de door uw kandidaat aangeleverde broncode moet voldoen:

1. manier van aanleveren broncode:
   1. via een code hosting platform zoals bijvoorbeeld Github, Gitlab, Bitbucket, etc
   2. via een gecompresseerd archief, noem het een zip-file, (.zip, .tar.gz, .rar)  die niet groter is dan 5MB
2. quantiteit:
   1. OF één link naar één specifieke broncode repository op één code hosting platform zoals bijvoorbeeld Github, Gitlab, Bitbucket, etc
   2. OF zip archief als attachments (andere archief formaten zijn ook welkom, zoals bijv .tar.gz, .rar, etc...)
   3. OF één download link naar eenzip-file, maar liever niet i.v.m. snel verlopen van de link en kandidaten sturen soms overbodige grote zip-files
3. de inhoud van de code repository moet:
   1. een duidelijke readme bevatten waarin staat wat het project doet (of wat het zou moeten doen) en hoe je het draaiend krijgt
4. géén derde partij source code bevatten
   1. elke serieuze ontwikkelaar behoort een dependency management systeem te kunnen hanteren en dependencies/afhankelijkheden buiten  zijn/haar VCS systeem
   2. wanneer het niet mogelijk is derde partij source code buiten het project te houden moet een duidelijke lijst aanwezig zijn waarop staat welke code WEL door kandidaat gemaakt
5. geen gecompilede binaries bevatten
6. geen bestanden bevatten die voor de codereview irrelevant zijn
7. geen broncode bevatten waarin slecht taalgebruik/scheldwoorden staan
   1. dit is per definitie niet professioneel en hieruit blijkt frustratie en onkunde(gaan schelden als het je niet lukt omdat je eigen   niveau te laag is?) - geen broncode bevatten waarin live credentials (host/port/username/password) staan (logisch toch? maar dit gebeurt te vaak)
8. geen broncode bevatten waar kandidaat geen rechten op heeft, zoals wanneer een kandidaat een NDA heeft getekend

Bovenstaande zijn richtlijnen, geen harde regels. Als recruiter is het onmogelijk om dit voor het indienen te controleren, deze verantwoordelijkheid ligt bij de kandidaat.

## De ideale codereview

De ideale code review is wanneer een kandidaat enkele files aanwijst/opstuurt(op een repository of zipt) waar hij/zij het meest trots op is en het uiteraard zijn of haar eigen code is.

Voorbeeld:

- Een PHP ontwikkelaar die met een MVC framework werkt stuurt mij een FooModel.php, FooView.php en FooController.php (met testcode) op.
- Een Python ontwikkelaar die met django mij één app uit een django project op.
- Een ontwikkelaar die de puntjes op de i heeft gezet levert een github repository link waarin een heel project zit dat met docker of docker-compose o.i.d. up-te-brengen is.
