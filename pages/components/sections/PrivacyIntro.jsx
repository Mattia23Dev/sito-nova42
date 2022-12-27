
import Image from "next/image";
import { useEffect, useState } from "react";
import FadeIn from "../custom/FadeIn";
import FadeLeft from "../custom/FadeLeft";
import FadeRight from "../custom/FadeRight";
import Bouble from "../custom/Bouble";
import Footer from "../Footer";
import Card from "../custom/Card";

const PrivacyIntro = () => {



    return (

        <>
            <div className="row bg-nova-dark p-2 p-md-5"> 
                <div className="col-12 col-md-10 mx-auto bg-white p-4">
                    <h1 className="size-30 weight-600 text-center mt-3">PRIVACY POLICY</h1>
                    <h4 className="size-24 weight-600 text-center">(ai sensi D. Lgs. 196/03 e del regolamento UE 2016/679)</h4>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-5">&quot;Titolare&quot;, Responsabile e incaricati del trattamento</h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        In merito alla Privacy, la consultazione di questo sito da parte dell&apos;utente, comporta l&apos;assunzione di
                        informazioni aventi natura di dati personali.
                        Per tali finalità il Titolare del trattamento dei dati personali da Lei conferiti è <strong>NOVA42 Srl</strong> nella
                        persona del legale rappresentante, con sede legale in Largo Giuseppe Veratti, 17 - 00146 - Roma.
                        All&apos;interno della Società stessa i dati personali raccolti sono trattati da dipendenti che operano in
                        qualità di “Incaricati”, attenendosi alle relative specifiche istruzioni ed indicazioni loro impartite. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Luogo di trattamento dei dati 
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                    I trattamenti connessi ai servizi web del sito www.nova42.it hanno luogo presso la sede aziendale in Roma 
                    e sono curati solo da personale tecnico dell'Ufficio incaricato del trattamento, oppure da eventuali incaricati 
                    di occasionali operazioni di manutenzione. Nessun dato derivante dal servizio web viene comunicato o diffuso (art. 90 GDPR). 
                    I dati personali forniti dagli utenti che inoltrano richieste di invio di materiale informativo sono utilizzati al solo fine 
                    di eseguire il servizio o la prestazione richiesta e sono comunicati a terzi nel solo caso in cui ciò sia a tal fine necessario (art. 3 GDPR).
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Privacy Policy per i visitatori del sito
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                    La presente Privacy Policy ha lo scopo di descrivere le modalità di gestione di questo sito, in riferimento al trattamento dei 
                    dati personali degli utenti/visitatori che lo consultano. Si tratta di un'informativa che è resa anche ai sensi dell'art. 13 del D. 
                    Lgs. 196/03 - Codice in materia di protezione dei dati personali - a coloro che si collegano al sito web aziendale di Nova42 srl ed 
                    usufruiscono dei relativi servizi web a partire dall'indirizzo [https://www.nova42.it]. Il sito [https://www.nova42.it] è 
                    di proprietà e gestione di Nova42 srl, che garantisce il rispetto della normativa in materia di protezione dei dati personali (D.Lgs 196/03).
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Cosa si intende per dati personali e trattamento dei dati personali
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Costituisce trattamento dei dati personali qualsiasi operazione o complesso di operazioni, effettuati
                        anche senza l&apos;ausilio di strumenti elettronici, concernenti la raccolta, la registrazione,
                        l&apos;organizzazione, la conservazione, la consultazione, l&apos;elaborazione, la modificazione, la selezione,
                        l&apos;estrazione, il raffronto, l&apos;utilizzo, l&apos;interconnessione, il blocco, la comunicazione, la diffusione, la
                        cancellazione e la distruzione di dati, anche se non registrati in una banca di dati. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Tipologia di dati trattati e finalità del trattamento
                    </h3>
                    <h3 className="size-18 weight-600 text-left lh-35 mt-4">
                        1) Dati di navigazione
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        I sistemi informatici e le procedure software preposte al funzionamento di
                        questo sito acquisiscono, nel normale esercizio, alcuni dati personali che vengono poi trasmessi
                        implicitamente nelll&apos;uso dei protocolli di comunicazione Internet.
                        Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che
                        per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi,
                        permettere di identificare gli utenti.
                        Tutte le nostre attività sono regolate da principi etici severi e ci siamo impegnati a proteggere la
                        privacy di tutti i visitatori del nostro sito web. Per questa ragione il modo in cui rileviamo e
                        memorizziamo i dati è strettamente collegato alle modalità di utilizzo del nostro sito web e dei
                        relativi servizi. 
                    </p>
                    <h3 className="size-18 weight-600 text-left lh-35 mt-4">
                        2) Dati forniti volontariamente dagli utenti/visitatori
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                    Qualora gli utenti/visitatori, collegandosi a questo sito, inviino propri dati personali per accedere a determinati servizi, 
                    ovvero per effettuare richieste in posta elettronica, ciò comporta l'acquisizione da parte di Nova42 srl dell'indirizzo del 
                    mittente e/o di altri eventuali dati personali che verranno trattati esclusivamente per rispondere alla richiesta. 
                    I dati personali forniti dagli utenti/visitatori verranno comunicati a terzi solo nel caso in cui la comunicazione sia 
                    necessaria per ottemperare alle richieste degli utenti/visitatori medesimi.
                    </p>
                    <h3 className="size-18 weight-600 text-left lh-35 mt-4">
                        3) Cookies
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Il presente sito fa uso di cookie, file di testo che vengono registrati sul terminale dell&apos;utente
                        oppure che consentono l&apos;accesso ad informazioni sul terminale dell&apos;utente. I cookie permettono
                        di conservare informazioni sulle preferenze dei visitatori, sono utilizzati al fine di verificare il
                        corretto funzionamento del sito e di migliorarne le funzionalità, personalizzando il contenuto
                        delle pagine in base al tipo del browser utilizzato, oppure per semplificarne la navigazione
                        automatizzando le procedure (es. Login, lingua sito), ed infine per l&apos;analisi dell&apos;uso del sito da
                        parte dei visitatori.
                        Il presente sito fa uso delle seguenti categorie di cookie:
                        <br/><strong>- cookie tecnici</strong>, utilizzati al solo fine di effettuare la trasmissione di una comunicazione
                        elettronica, per garantire la corretta visualizzazione del sito e la navigazione all&apos;interno di esso.
                        Inoltre, consentono di distinguere tra i vari utenti collegati al fine di fornire un servizio richiesto
                        all&apos;utente giusto (Login), e per motivi di sicurezza del sito. Alcuni di questi cookie sono
                        eliminati alla chiusura del browser (cookie di sessione), altri hanno una durata maggiore (come
                        ad esempio il cookie necessario per conservare il consenso dell&apos;utente in relazione all&apos;uso dei
                        cookie, che dura 1 anno). Per questi cookie non occorre consenso;
                        <br/><strong>- cookie di analisi</strong>, utilizzati direttamente dal gestore del sito per raccogliere informazioni, in
                        forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso. Sono assimilati
                        ai cookie tecnici se il servizio è anonimizzato.
                        <br/><strong>- cookie di profilazione e marketing</strong>, utilizzati esclusivamente da terze parti diverse dal
                        titolare del presente sito per raccogliere informazioni sul comportamento degli utenti durante la
                        navigazione, e sugli interessi e abitudini di consumo, anche al fine di fornire pubblicità
                        personalizzata.
                        Cliccando <strong>OK sul banner</strong> presente al primo accesso al sito, oppure <strong>navigando il sito</strong>, il
                        visitatore acconsente espressamente all&apos;uso dei cookie e delle tecnologie similari, e in
                        particolare alla registrazione di tali cookie sul suo terminale per le
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Dati da Lei forniti
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Oltre ai dati rilevati automaticamente elaboriamo anche i dati da Lei forniti. Di seguito un elenco
                        esemplificativo ma non esaustivo:
                        <br/>- i Suoi dati di contatto, tra cui ragione sociale e partita iva o per le persone fisiche nome e
                        cognome e codice fiscale, indirizzo, indirizzo e-mail e, fax, sito web e data di nascita, il Suo
                        numero di telefono o il numero di cellulare per le persone fisiche, qualora ci fosse la
                        necessità di farle delle domande o per eventuali richieste di informazioni in merito al Suo
                        ordine/acquisto;
                        <br/>- altre informazioni necessarie per evadere il Suo ordine/acquisto: per esempio informazioni
                        sui corsi che ha acquistato, informazioni sul conto bancario, iban e swift;
                        <br/>- se ha contattato il servizio assistenza alla clientela “customer care” o la segreteria della
                        Direzione Didattica, le informazioni relative e la storia di questi contatti.
                        Tutti i predetti dati hanno in comune il fatto che sono stati da Lei forniti. Queste informazioni
                        saranno utilizzate per i fini descritti nella presente Informativa.
                        Lei ha il diritto di rettificare, in qualsiasi momento, i Suoi dati personali o di impedire la loro
                        elaborazione (vedasi Sezione Diritti degli Interessati). 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Come vengono utilizzati i dati rilevati: finalità 
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Useremo i Suoi dati personali per scopi collegati alla frequenza dei corsi ai quali è iscritto: per
                        esempio, per comunicarle qualsivoglia variazione in relazione al calendario delle lezioni e/o alle
                        date di svolgimento delle verifiche e degli esami e, comunque, qualsiasi altra notizia relativa alla
                        frequenza dei corsi e/o all&apos;organizzazione degli eventi. 
                    </p>


                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        È possibile che usiamo i Suoi dati per verificare, avvalendoci delle informazioni di terzi, la Sua
                        affidabilità creditizia. Se Lei ci ha fornito Suoi dati personali, per esempio in occasione di
                        un&apos;iniziativa promozionale, di un evento, è possibile che riceva da noi e-mail o altri messaggi
                        pertinenti al servizio da Lei richiesto. Se ha contattato il servizio assistenza alla clientela “customer
                        care” o la Direzione Didattica useremo i Suoi dati personali in modo da agevolare l&apos;evasione delle
                        Sue richieste e fornirle il servizio migliore possibile. Se ha comunicato Suoi dati personali in
                        occasione dell&apos;iscrizione ad uno dei nostri corsi, La informeremo su corsi ed eventi analoghi.
                        Eventualmente La contatteremo, ovvero la faremo contattare da Nostri incaricati, dopo l&apos;iscrizione
                        ad un corso o la partecipazione ad un evento per sapere che cosa ne pensa. In caso di interruzione di
                        un corso e/o di esclusione, Le invieremo una e-mail per avvisarla.
                        Lei si può cancellare in qualsiasi momento, gratuitamente e con effetto immediato, dalla lista dei
                        destinatari di queste comunicazioni: basta inviare una e-mail (v. Sezione Diritti degli Interessati).
                        Previo il Suo esplicito consenso, possiamo contattarla tramite i dati di contatto da Lei forniti (a
                        mezzo posta ordinaria, e-mail, SMS, telefono o altri mezzi elettronici) a fini di marketing,
                        pubblicità e sondaggi svolti da terze parti per conto della Nova42 srl. Si tratterà, per esempio, di
                        informazioni su corsi, eventi, attività di commercio elettronico relativi all&apos;offerta sottoscritta, offerte
                        speciali ed iniziative promozionali.
                        Per essere in grado di comunicarle informazioni di Suo interesse, saranno analizzati, utilizzati e
                        combinati, i dati sulla Sua interazione con Nova42 srl (per esempio la tipologia dei corsi acquistati,
                        la partecipazione alla Community di Nova42, le Sue valutazioni e recensioni sui corsi seguiti, la
                        storia dei Suoi contatti con l&apos;assistenza alla clientela “customer care” o con la Direzione Didattica,
                        quello che ha cliccato/aperto a partire dalla newsletter, i tipi di newsletter che ha chiesto di ricevere,
                        la Sua partecipazione a promozioni o eventi).
                        Possiamo fornire i Suoi dati di contatto a terzi a fini di marketing, pubblicità e sondaggio
                        d&apos;opinione.
                        Nella Sezione Diritti dell&apos;interessato può leggere informazioni sui Suoi diritti, per esempio su come
                        revocare il Suo consenso o come correggere i Suoi dati personali. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        I dati personali saranno trattati per le seguenti finalità:
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        1. funzionali all&apos;adempimento di obblighi di legge, regolamento o previsti dalla normativa
                        comunitaria;
                        <br/>2. esecuzione del contratto o per adempiere, prima dell&apos;esecuzione del contratto, a Sue specifiche
                        richieste in relazione all&apos;iscrizione ad uno o più corsi;
                        <br/>3. gestione degli studenti/clienti e delle iscrizioni ai corsi organizzati e delle connesse attività
                        amministrative, con relativo trattamento, in conformità alla normativa vigente in materia,
                        fatturazione degli acquisti effettuati;
                        <br/>4. predisposizione di misure finalizzate alla tutela contro il rischio di credito, incluse attività
                        finalizzate ad identificare l&apos;affidabilità economica/solvibilità del Cliente, anteriormente o nel corso
                        del rapporto contrattuale, Nova42 srl potrà verificare che i dati bancari/postali forniti siano corretti;
                        <br/>5. relative allo svolgimento di attività finalizzate all&apos;elaborazione di studi e ricerche di mercato, al
                        compimento di attività dirette di vendita, anche telefonica, per l&apos;invio di informazioni commerciali,
                        nonché per l&apos;invio di materiale pubblicitario/informativo, effettuate con modalità “tradizionali” (a
                        titolo esemplificativo, posta cartacea e/o chiamata con operatore) o mediante sistemi
                        “automatizzati” di contatto (a titolo esemplificativo SMS e/o MMS, chiamate telefoniche e-mail,
                        fax) ai sensi dell&apos;art. 130, c. 1 e 2, Codice Privacy e del regolamento (UE) 2016/679 . L&apos;interessato
                        potrà in ogni momento opporsi al trattamento inviando una richiesta alla casella di posta dedicata di
                        cui alla mail: info@nova42.it;
                        <br/>6. relative allo svolgimento, da parte di terzi soggetti, partner commerciali, ai quali Nova42 srl potrà
                        comunicare/cedere i dati acquisiti, per lo svolgimento di attività finalizzate all&apos;elaborazione di studi
                        e ricerche di mercato, al compimento di attività dirette di vendita, anche telefonica, o di
                        collocamento di prodotti, per l&apos;invio di informazioni commerciali anche interattive, nonché per
                        l&apos;invio di materiale pubblicitario/informativo, effettuate con modalità “tradizionali” (a titolo esemplificativo, posta cartacea e/o chiamata con operatore) o mediante sistemi “automatizzati” di
                        contatto (a titolo esemplificativo SMS e/o MMS, chiamate telefoniche, e-mail, fax) ai sensi dell&apos;art.
                        130, c. 1 e 2, Codice Privacy” e del regolamento (UE) 2016/679;
                        7. Gestione del contenzioso (inadempimenti contrattuali, diffide, transazioni, recupero crediti,
                        arbitrati, controversie giudiziarie).
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Trattamento dei dati personali: consenso obbligatorio e consenso facoltativo
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Il trattamento dei dati personali è di regola ammesso solo con il consenso degli interessati, che deve
                        essere libero, informato, espresso in forma specifica e documentato per iscritto. L&apos;interessato è
                        libero di fornire i dati personali di volta in volta richiesti; il loro mancato, parziale o inesatto
                        conferimento potrebbe comportare l&apos;impossibilità di fornire i servizi richiesti (art 7 GDPR).
                        L&apos;acquisizione del consenso al trattamento dei dati personali è necessaria per tutti i trattamenti
                        sopra indicati connessi e/o necessari ad adempiere ad obblighi di legge, alla normativa comunitaria,
                        per eseguire obblighi derivanti da un contratto di cui è parte l&apos;interessato o per adempiere, prima
                        della conclusione del contratto, a specifiche richieste di quest&apos;ultimo (finalità: punti 1-2-3-4-7). Il
                        consenso al trattamento dei dati personali per le finalità di cui ai punti 5 e 6 è invece facoltativo e
                        potrà essere revocato in ogni momento secondo le modalità descritte nella sezione “Diritti degli
                        Interessati” della presente informativa. L&apos;eventuale rifiuto dell&apos;interessato a rispondere per i punti 5
                        e 6 comporterà la nostra impossibilità di inviare materiale pubblicitario e svolgere attività
                        promozionali. In qualsiasi momento potrà revocare il consenso alla ricezione di comunicazioni
                        commerciali precedentemente rilasciato, sia da parte di Nova42 srl che da parte di società terze,
                        secondo le seguenti modalità: Inviando una richiesta a info@nova42.it. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Modalità del trattamento e conservazione
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        I dati personali sono trattati con strumenti cartacei, informatici, telematici, automatizzati
                        comprendenti profilazione (art 22 GDPR); La profilazione può avvenire utilizzando dati individuali
                        o identificativi (es. dati anagrafici), oppure dati aggregati derivanti da dati personali individuali. Il
                        tutto nel rispetto delle garanzie di riservatezza e delle misure di sicurezza previste dalla normativa
                        vigente, con logiche strettamente correlate alle finalità del trattamento. Specifiche misure di
                        sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non
                        autorizzati.
                        Il periodo di conservazione dei dati è legato alla finalità del trattamento in corso. Nova42 srl non
                        tratterrà le informazioni personali più di quanto non sia necessario per adempiere alle finalità per
                        cui tali informazioni sono state elaborate, inclusa la sicurezza della nostra procedura di elaborazione
                        in conformità con gli obblighi normativi e legali (ad es. controllo, contabilità e termini di
                        conservazione legale), la gestione delle controversie e la difesa di diritti legali in quei paesi in cui
                        svolgiamo attività di business. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Rivelazione di informazioni
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Uno dei nostri principi fondamentali è il nostro impegno a trattare i Suoi dati con cautela e
                        riservatezza. Non venderemo mai i Suoi dati a terzi. I Suoi dati potranno essere rivelati a terzi
                        soltanto nell&apos;eventualità che lo imponga la legge e sotto condizione che sia consentito dalle leggi
                        vigenti.
                        È possibile che ci serviamo di fornitori e/o partners di servizi e incaricati del trattamento dati che
                        lavorano su commessa di Nova42 srl. Sono operatori che prestano servizi di hosting e
                        manutenzione, servizi di analisi, servizi di messaggistica e-mail, servizi di consegna, gestione di
                        pagamenti, verifica della solvibilità, verifica dell&apos;indirizzo, ecc..
                        A tali terzi è consentito l&apos;accesso a quei dati personali di cui hanno bisogno ai fini dei loro servizi
                        specifici. I fornitori di servizi e gli incaricati del trattamento dati hanno un obbligo contrattuale di
                        trattare tali informazioni nel modo più strettamente confidenziale. 
                        Il contratto proibisce a loro di usare i dati a fini diversi da quelli previsti dal contratto. Nova42 srl
                        ha posto in essere quanto necessario affinché i nostri fornitori di servizi e gli incaricati del
                        trattamento che lavorano per Nova42 srl tutelino la riservatezza dei Suoi dati.
                    </p>

                    <h2 className="size-22 weight-600 text-left lh-35 mt-4 text-uppercase">
                        CATEGORIE DI SOGGETTI CHE POTREBBERO VENIRE A CONOSCENZA DEI DATI DELL&apos;UTENTE
                    </h2>

                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Oltre che dai dipendenti di Nova42 srl alcuni trattamenti dei dati personali dell&apos;utente possono
                        essere trattati anche da soggetti terzi, ivi incluse le società cui Nova42 srl affida o potrebbe affidare
                        talune attività funzionali alla consultazione del sito.
                        Detti soggetti opereranno come Titolari autonomi o come Responsabili del trattamento.
                        In quest&apos;ultimo caso il Titolare impartirà ai Responsabili adeguate istruzioni operative con
                        particolare riferimento all&apos;adozione delle misure minime di sicurezza, al fine di poter garantire la
                        riservatezza, integrità e la sicurezza dei dati. I dati dell&apos;utente potranno altresì essere comunicati
                        all&apos;Autorità Giudiziaria, amministrativa o ad altro soggetto pubblico legittimato a richiederli, nei
                        casi previsti dalla legge.
                        Per il perseguimento delle finalità sopra indicate, Nova42 srl potrà comunicare e far trattare i dati
                        personali dell&apos;interessato, in Italia e all&apos;estero (compresi Paesi non appartenenti all&apos;Unione
                        Europea), a soggetti terzi con i quali abbia rapporti: quest&apos;ultima fornirà loro solo le informazioni
                        necessarie ad effettuare i servizi richiesti prendendo tutte le misure necessarie per tutelare i Suoi
                        dati personali (art 44 GDPR).
                        I dati personali potranno, inoltre, essere conosciuti dai dipendenti, lavoratori autonomi, a progetto,
                        occasionali, consulenti, interinali, collaboratori di Nova42 srl i quali sono stati appositamente
                        nominati/designati Responsabili o Incaricati del trattamento. Gli addetti alla contabilità e alla
                        fatturazione; gli addetti alla commercializzazione dei beni/servizi; agenti e rappresentanti, venditori
                        di prodotti (corsi e/o eventi);
                        I dati di cui sopra potranno essere trasferiti e comunicati alla categoria di soggetti di seguito
                        indicate: aziende operanti nel settore del trasporto, nostri fornitori, nostri affiliati, nostri Sponsor,
                        Poste Italiane e altre società di recapito della corrispondenza (anche private), banche ed istituti di
                        credito, società di recupero crediti, studi legali, imprese di assicurazione, studi professionali e/o
                        società e/o associazioni di imprese e di Imprenditori che erogano a noi determinati servizi contabili
                        e/o fiscali, Istituti di previdenza ecc; 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Diritti degli interessati
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Nova42 srl ricorda all&apos;interessato che, ai sensi dell&apos;art. 7 del Codice Privacy, D.Lgs. 196/03 e del
                        regolamento 2016/679, è possibile, in qualunque momento, ottenere la conferma dell&apos;esistenza o
                        meno dei dati e conoscerne il contenuto e l&apos;origine nonché la logica su cui si basa il trattamento,
                        verificarne l&apos;esattezza o chiederne l&apos;integrazione o l&apos;aggiornamento, oppure la rettifica.
                        Ai sensi del medesimo articolo l&apos;interessato ha il diritto di chiedere la cancellazione, la
                        trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, nonché di
                        opporsi in ogni caso, per motivi legittimi, al loro trattamento.
                        Per i trattamenti relativi al marketing diretto (in forma “tradizionale” e “automatizzata”) sarà
                        sempre possibile revocare il consenso ed esercitare il diritto di opposizione.
                        L&apos;opposizione, in assenza di indicazione contraria, verrà riferita tanto alle comunicazioni
                        tradizionali quanto a quelle automatizzate.
                        Ai fini dell&apos;esercizio dei diritti di cui sopra occorre inviare una richiesta alla casella di posta
                        dedicata info@nova42.it. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        I Suoi diritti
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Se Lei ci fornisce Suoi dati personali tramite i nostri siti web o altri canali, ciò avviene in maniera
                        assolutamente volontaria.
                        Se Lei sceglie di non fornire le informazioni richieste, può perdere diverse opportunità disponibili
                        per i nostri clienti/studenti. Ci sono casi in cui soltanto chi ci ha inviato i dati personali necessari può iscriversi e partecipare ai corsi da noi organizzati, usufruire di determinati servizi e approfittare
                        di attività e offerte disponibili sul nostro sito web.
                        Data l&apos;importanza che rivestono per noi la trasparenza e la correttezza, offriamo diverse opzioni,
                        adeguate alle circostanze, per aiutarla a mantenere il controllo dei Suoi dati. Tra queste opzioni può
                        essere presente la visualizzazione e modifica dei Suoi dati in linea. Può esistere anche la possibilità
                        di cancellarsi o di ricevere informazioni sui dati da noi conservati scrivendo alla e-mail:
                        info@nova42.it. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Diritto di chiedere informazioni
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Lei ha il diritto di ricevere in qualsiasi momento informazioni sui dati personali conservati che La
                        riguardano, sulla loro origine e sui destinatari, nonché sugli scopi per i quali sono stati conservati.
                        Informazioni su dati personali conservati si possono ottenere contattandoci all&apos;indirizzo e-mail:
                        info@nova42.it.
                        I soggetti cui si riferiscono i dati personali hanno il diritto in qualunque momento di ottenere la
                        conferma dell&apos;esistenza o meno dei medesimi dati e di conoscerne il contenuto e l&apos;origine,
                        verificarne l&apos;esattezza o chiederne l&apos;integrazione o l&apos;aggiornamento (art. 7 del D. Lgs. 196/03 e del
                        regolamento 2016/679). 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Diritto di rettifica
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Lei ha il diritto di rettificare, integrare, aggiornare, cancellare i Suoi dati personali conservati o di
                        farne bloccare la conservazione.
                        Entro 30 (trenta) giorni dal ricevimento della Sua richiesta Le comunicheremo se, e, in caso
                        affermativo, in che misura soddisferemo la Sua richiesta. In casi di particolare complessità Le
                        comunicheremo, entro 30 (trenta) giorni dal ricevimento della richiesta, il termine entro cui
                        soddisferemo la Sua richiesta che, in ogni caso, non potrà essere superiore a 3 (tre) mesi. Se, per
                        qualche motivo, non fossimo in grado di soddisfare la Sua richiesta, sarà nostra premura
                        comunicarle i motivi (art. 7 del D. Lgs. 196/03 e art 12 e 16 GDPR). 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Diritto di opporsi e di cancellare la propria iscrizione
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Ai sensi del medesimo articolo 7 del D. Lgs. 196/03, si ha il diritto di chiedere la cancellazione, la
                        trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, nonché di
                        opporsi in ogni caso, per motivi legittimi, al loro trattamento (art 21 GDPR). Le e-mail inviate da
                        Nova42 srl che contengano, per esempio, una newsletter o messaggi di marketing, offrono la
                        possibilità di far cessare il ricevimento di tali e-mail tramite apposita opzione presente nel
                        medesimo testo (tasto “unsubscribe” con automatica creazione del messaggio di cancellazione). Se
                        non vuole più ricevere le nostre e-mail le basta cliccare sul tasto “unsubscribe” ed il suo contatto
                        verrà rimosso con l&apos;effetto che non riceverà più alcuna e-mail. Se non desidera più ricevere
                        informazioni promozionali e offerte di vendita in generale, nemmeno a mezzo posta ordinaria, email, SMS, telefono o altro mezzo elettronico, ovvero Lei voglia revocare il Suo consenso, lo può
                        fare anche, in qualsiasi momento, scrivendo a Nova42 srl, Viale dell&apos;Arte 19/A, 00144 - Roma,
                        indicando come riferimento: “data protection”, oppure inviando una e-mail a info@nova42.it.
                        In caso di dubbio sulla Sua identità è possibile che Le venga richiesto un documento di
                        riconoscimento (fotocopia fronte/retro di un Suo documento di riconoscimento in corso di validità)
                        (art 17 GDPR). 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Sicurezza delle informazioni e integrità dei dati
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Abbiamo adottato misure tecniche e organizzative idonee a proteggere i dati personali da fatti
                        accidentali o illeciti che ne provochino la distruzione, perdita, alterazione, e da uso, rivelazione o
                        accesso non autorizzati, in particolare dove il trattamento prevede la trasmissione di dati tramite una
                        rete e contro qualsiasi altra forma di trattamento illecito e abuso. 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Protezione dei dati personali dei minori
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        La protezione dei dati personali dei minori è di estrema importanza. Nova42 srl è consapevole della
                        propria obbligazione di proteggere la privacy dei minori, e si rifiuta di rilevare dati di minori di 16
                        anni. Invitiamo i genitori e altri tutori a navigare su Internet ed inviare e-mail insieme ai loro figli e
                        a fruire di Internet in modo responsabile.
                        Se un minore di 16 anni tenta di fornire fin dal principio le informazioni relativi a propri dati deve
                        chiedere il consenso del genitore. I dati inviati dal minore, o che comunque lo riguardano, rilevati
                        durante la sua visita (p. es. tramite cookie) possono essere usati come sopra descritto. Se un minore
                        di 16 anni tenta di inviare propri dati tramite scheda/modulo, questa/o sarà rigettata/o, con la
                        comunicazione che non si accettano tali richieste da minori di 16 anni. Per questo motivo chiediamo
                        che i genitori e gli altri tutori verifichino e seguano l&apos;utilizzo della rete Internet da parte dei minori,
                        per la loro sicurezza (art 8 GDPR). 
                    </p>

                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Come contattarci
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Il titolare del trattamento dei dati personali è: Nova42 srl con sede in Viale dell&apos;Arte 19/A, 00144 -
                        Roma – e-mail: info@nova42.it.
                        E&apos; possibile conoscere una versione aggiornata di questo documento e l&apos;elenco aggiornato dei
                        responsabili del trattamento, rivolgendosi direttamente al titolare. 
                    </p>


                    <h3 className="size-20 weight-600 text-left lh-35 mt-4">
                        Modifiche della presente informativa
                    </h3>
                    <p className="size-16 weight-400 text-left lh-35 mt-2">
                        Nova42 srl si è impegnata a fare propri i principi fondamentali della protezione dei dati e considera
                        la tutela dei dati personali come un dovere naturale.
                        Pertanto sottoponiamo a frequente revisione le nostre linee di condotta in materia di tutela dei dati
                        personali per assicurarci che siano esenti da errori, chiaramente visibili sul nostro sito web e
                        comprensive di tutte le informazioni necessarie, e per verificare che siano osservate rigorosamente,
                        e conformi ai principi della normativa su questa materia. La presente informativa sulla tutela dei
                        dati personali può subire nel corso del tempo modifiche intese a mantenerla al passo con
                        l&apos;evoluzione e le nuove opportunità della rete Internet e a garantire la sua conformità alla normativa
                        vigente.
                        Senza il Suo consenso esplicito non applicheremo mai disposizioni restrittive dei diritti che Le
                        vengono riconosciuti nella presente informativa.
                        Modifiche rilevanti della presente informativa saranno annunciate sul nostro sito web
                        contemporaneamente alla pubblicazione della versione aggiornata dell&apos;Informativa sulla tutela dei
                        dati personali.
                    </p>




                </div>      
            </div>

            <Footer />

        </>
    )

}

export default PrivacyIntro


