/* Intestazione, piè di pagina e traduzioni comuni a tutte le pagine del sito */
(function(){
  var PAGES = [
    {id:'home', href:'index.html', key:'nav_home', it:'Home'},
    {id:'percorso', href:'percorso.html', key:'nav_percorso', it:'Percorso 360°'},
    {id:'storia', href:'storia.html', key:'nav_storia', it:'Storia per bambini'},
    {id:'racconto', href:'racconto.html', key:'nav_racconto', it:'Racconto'},
    {id:'artista', href:'artista.html', key:'nav_artista', it:"Scheda sull'artista"}
  ];
  var BASE_IT = {
    menu:'Menu',
    eu_slot:"Emblema UE · Cofinanziato dall'Unione europea",
    disc:"Finanziato dall'Unione europea. Le opinioni espresse appartengono, tuttavia, al solo o ai soli autori e non riflettono necessariamente le opinioni dell'Unione europea o dell'Agenzia nazionale Erasmus+ INDIRE. Né l'Unione europea né l'autorità erogatrice possono esserne ritenute responsabili.",
    cred:'Contenuti realizzati dagli studenti dei due istituti',
    st_illo_c:'Illustrazione di copertina', st_illo:'Illustrazione', st_page:'Pagina',
    st_ph:'Qui va il testo di questa pagina della storia, scritto dagli studenti.'
  };
  PAGES.forEach(function(p){ BASE_IT[p.key] = p.it; });

  var T = {
    fr:{ p_p2:"Les élèves des deux établissements travaillent ensemble pour faire connaître l'œuvre à ceux qui ne peuvent pas s'y rendre ou qui la découvrent pour la première fois : un parcours à 360°, une histoire illustrée pour les plus jeunes, un récit enregistré sur l'artiste et une fiche d'approfondissement. Ce travail commun se déroule pendant deux mobilités, à Lannion en novembre 2026 et à Nuoro en avril 2027.", chap:"Titre du chapitre", fill:"À compléter", ar_tl:"Frise chronologique : les dates principales de la vie et des œuvres de Maria Lai, chacune avec une courte description.",
      nav_home:'Accueil', nav_percorso:'Parcours 360°', nav_storia:'Histoire pour enfants', nav_racconto:'Récit', nav_artista:"Fiche de l'artiste", nav_donne:'Les femmes', menu:'Menu',
      eu_slot:"Emblème UE · Cofinancé par l'Union européenne",
      disc:"Financé par l'Union européenne. Les points de vue et avis exprimés n'engagent toutefois que leur(s) auteur(s) et ne reflètent pas nécessairement ceux de l'Union européenne ou de l'Agence nationale Erasmus+ INDIRE. Ni l'Union européenne ni l'autorité chargée de l'octroi ne peuvent en être tenues pour responsables.",
      cred:'Contenus réalisés par les élèves des deux établissements',
      wip:'En cours', go:'Ouvrir la page →', tbc:'Dates à confirmer', prev:'Page précédente', next:'Page suivante', back:"Retour à l'accueil",
      h_lead:"Présentation du site : de quoi il parle et qui l'a réalisé (2–3 lignes).",
      h_cta1:'Entrer dans le parcours 360°', h_cta2:"Découvrir l'artiste", h_quote:"« Serrons-nous bien fort, comme quand on a peur et qu'on se prend par la main. »",
      o_k:"L'œuvre", o_h:'« Andando via »',
      o_p1:"Description de l'œuvre « Andando via » : où elle se trouve, quand elle a été réalisée, comment elle est faite et son lien avec Grazia Deledda.",
      o_p2:"On entre par un portail cubique et ouvert, surmonté d'une géographie astrale en fer forgé. Au-delà s'élèvent des colonnes blanches portant des silhouettes noires de figures féminines et de chèvres. Ces figures évoquent les héroïnes des romans de Deledda.",
      o_p3:"Sur les côtés du portail et sur les colonnes courent des écritures illisibles, signature de l'artiste : chacun est invité à imaginer sa propre histoire.",
      o_f1:'année de réalisation', o_f5:'Les figures des colonnes', o_n1:'les dames Pintor', o_n2:'la Mère',
      r_k:'Art performatif et social', r_h:"Quand tout un village devient l'œuvre",
      r_p1:"Texte sur l'art performatif et social de Maria Lai, à partir de « Legarsi alla montagna » (1981).",
      r_p2:"Cette œuvre est considérée comme une anticipation de l'art relationnel : son sens réside dans les liens qu'elle crée entre les personnes. Les contenus de ce site naissent de la même façon, du travail commun de vingt-quatre élèves de deux pays.",
      c_k:'Les pages des élèves', c_h:'Quatre façons de raconter « Andando via »',
      c1_t:'Parcours 360°', c1_p:"Une visite immersive entre le portail et les colonnes, avec des points d'approfondissement.",
      c2_t:'Histoire pour enfants', c2_p:"Un conte illustré qui fait entrer les plus petits dans l'œuvre.",
      c3_t:'Récit sur Maria Lai', c3_p:'Une narration enregistrée par les voix des élèves, avec sa transcription.',
      c4_t:"Fiche de l'artiste", c4_p:"Vie, œuvres et idées de Maria Lai, du tissage à l'art dans l'espace public.",
      p_k:'Le projet Erasmus+', p_p:"« Arts, Tech and Us » est un projet Erasmus+ qui réunit l'IIS Francesco Ciusa de Nuoro et le Lycée Félix le Dantec de Lannion, en Bretagne. Son objectif est de rendre plus accessible, grâce aux outils numériques, un lieu d'art et de culture : « Andando via », la dernière œuvre publique de Maria Lai, à Nuoro.",
      map_cap:'à vol d’oiseau, reliées par un ruban bleu ciel', n1:'élèves', n2:'groupes mixtes', n3:'par groupe', s1:'5 – 12 novembre 2026', s2:'8 – 15 avril 2027', s3t:'Événement final', s3:'Mai – juin 2027, dans les deux écoles',
      pc_h:'Parcours 360°', pc_lead:"Brève introduction au parcours 360° : lieux traversés et comment l'explorer.",
      pc_player:'Visite virtuelle', pc_sample:'Version provisoire', pc_btn:'Lancer le parcours',
      pc_note:"Cinq scènes à 360°, photographiées par les élèves : de l'église de la Solitudine, le long de l'allée et du sentier, jusqu'au portail et aux colonnes d'« Andando via ».",
      pc_h1:'Faites glisser pour regarder autour de vous', pc_h2:'Cliquez sur les flèches pour changer de scène', pc_h3:'Ouvrez les icônes pour lire les approfondissements',
      pc_k:'Les étapes', pc_h2t:'Ce que l’on rencontre au fil du parcours', pc_sp:'Chaque étape correspond à un point interactif de la visite. Les textes définitifs sont rédigés par les groupes.',
      t1:'Le portail et la géographie astrale', t2:'Les colonnes', t3:'Les femmes des romans de Grazia Deledda', t4:'Les écritures à imaginer',
      todo_stop:"Espace pour le texte de l'étape, rédigé par le groupe de travail.", pc_flat:"Ce navigateur n'affiche pas la 3D : vous voyez la version simplifiée du parcours. Pour la vue à 360°, activez l'accélération matérielle dans Chrome.", pc_flat_hint:'Faites glisser l’image vers la droite ou la gauche ; cliquez sur les flèches pour changer de scène.', close:'Fermer', pc_err:"Le parcours ne s'est pas chargé. Rechargez la page.",
      st_h:'Histoire pour enfants', st_lead:"Présentation de l'histoire : titre, public et sujet.",
      st_prev:'← Retour', st_next:'Suivant →', st_k:'Qui a fait le livre', st_h2:'Textes, dessins et voix', st_c1:'Texte', st_c2:'Illustrations', st_c3:'Traductions',
      st_todo:'Espace pour les noms du groupe, rédigé par les élèves.', st_cover:'Couverture', st_title:"Titre de l'histoire",
      st_cover_p:"Sous-titre et noms des auteurs.",
      st_illo_c:'Illustration de couverture', st_illo:'Illustration', st_page:'Page', st_ph:"Ici, le texte de cette page de l'histoire, écrit par les élèves.",
      ra_h:'Récit sur Maria Lai', ra_lead:"Présentation du récit enregistré : sujet, voix et durée.",
      ra_k:'Narration enregistrée', ra_title:'Titre de la narration', ra_missing:"L'enregistrement n'a pas encore été chargé. Il apparaîtra ici dès qu'il sera prêt.",
      ra_ck:'Chapitres', ra_c1:'Une enfance à Ulassai', ra_c2:'Le fil, le métier à tisser, les livres cousus', ra_c3:'Se lier à la montagne', ra_c4:'Andando via, à Nuoro',
      ra_cnote:'Les titres et durées des chapitres sont provisoires : les élèves les fixent lors du montage final.',
      ra_tk:'Transcription', ra_th:'Le texte du récit', ra_tp:"La transcription rend le récit accessible à ceux qui ne peuvent pas l'écouter et aide ceux qui étudient dans une autre langue.",
      ra_todo:'Espace pour la transcription complète de la narration, rédigée par les élèves.', ra_voices:'Les voix', ra_todo2:"Espace pour les noms de ceux qui ont écrit, lu et monté l'enregistrement.",
      ar_motto:'« Être, c’est tisser »', ar_lead:"Brève présentation de l'artiste (2–3 lignes).",
      ar_id:"Carte d'identité", ar_photo:"Espace pour un portrait de l'artiste (droits d'utilisation vérifiés)",
      ar_born:'Naissance', ar_born_v:'27 septembre 1919, Ulassai', ar_died:'Décès', ar_died_v:'16 avril 2013, Cardedu',
      ar_study:'Études', ar_study_v:"Lycée artistique à Rome ; Académie des beaux-arts de Venise avec Arturo Martini",
      ar_mat:'Matériaux', ar_mat_v:'Fils, tissus, métiers à tisser, livres cousus', ar_mus:'Musée', ar_mus_v:"Stazione dell'Arte, Ulassai",
      ar_tlk:'Les dates principales', ar_t1:'Naissance à Ulassai, en Ogliastra.', ar_t2:"Elle commence ses études au lycée artistique de Rome, puis les poursuit à l'Académie de Venise avec le sculpteur Arturo Martini.",
      ar_t3:'Années de recherche silencieuse : naissent les premiers livres cousus.', ar_t4:'Elle expose ses Métiers à tisser à la Galleria Schneider de Rome.',
      ar_t5:"Elle réalise « Legarsi alla montagna » avec les habitants d'Ulassai.", ar_t6:"À Ulassai ouvre la Stazione dell'Arte, musée consacré à ses œuvres.",
      ar_t7:'À Nuoro, elle réalise « Andando via », sa dernière œuvre publique.', ar_t8:'Décès à Cardedu.',
      ar_note:'Dates de référence vérifiées par les enseignants. Le reste de la fiche est rédigé par les élèves.',
      ar_s1:'Qui était Maria Lai', ar_s2:'Le fil, le métier à tisser et les livres cousus', ar_s3:"L'art qui implique les personnes", ar_s4:'« Andando via » et Grazia Deledda', ar_s5:'Sources',
      ar_todo:'Espace pour le texte des élèves.', ar_todo_src:'Espace pour la liste des sources consultées par les élèves.'
    },
    en:{ p_p2:"Students from both schools work together to bring the artwork to people who cannot visit it in person or are discovering it for the first time: a 360° tour, an illustrated story for young children, a recorded story about the artist and an in-depth profile. The joint work takes place during two mobilities, in Lannion in November 2026 and in Nuoro in April 2027.", chap:"Chapter title", fill:"To be filled in", ar_tl:"Timeline: the key dates in Maria Lai's life and work, each with a short description.",
      nav_home:'Home', nav_percorso:'360° tour', nav_storia:"Children's story", nav_racconto:'Audio story', nav_artista:'Artist profile', nav_donne:'The women', menu:'Menu',
      eu_slot:'EU emblem · Co-funded by the European Union',
      disc:'Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Erasmus+ National Agency INDIRE. Neither the European Union nor the granting authority can be held responsible for them.',
      cred:'Content created by students of both schools',
      wip:'In progress', go:'Open the page →', tbc:'Dates to be confirmed', prev:'Previous page', next:'Next page', back:'Back to the start',
      h_lead:"Introduction to the site: what it is about and who made it (2–3 lines).",
      h_cta1:'Enter the 360° tour', h_cta2:'Meet the artist', h_quote:'“Let us hold on tight to each other, as we do when we are afraid and take each other by the hand.”',
      o_k:'The artwork', o_h:'“Andando via”',
      o_p1:"Description of the artwork “Andando via”: where it is, when it was made, what it looks like and its link with Grazia Deledda.",
      o_p2:'Visitors enter through an open cubic gateway topped by an astral geography in wrought iron. Beyond it rise white columns bearing black silhouettes of women and goats. The figures recall the heroines of Deledda\'s novels.',
      o_p3:'Along the sides of the gateway and on the columns run illegible writings, the artist\'s signature: everyone is invited to imagine their own story.',
      o_f1:'year completed', o_f5:'The figures on the columns', o_n1:'the Pintor ladies', o_n2:'the Mother',
      r_k:'Performative and social art', r_h:'When a whole village becomes the artwork',
      r_p1:"Text on Maria Lai's performative and social art, starting from “Legarsi alla montagna” (1981).",
      r_p2:'The work is seen as a forerunner of relational art: its meaning lies in the bonds it creates between people. The content of this site comes about in the same way, through the shared work of twenty-four students from two countries.',
      c_k:"The students' pages", c_h:'Four ways to tell the story of "Andando via"',
      c1_t:'360° tour', c1_p:'An immersive visit between the gateway and the columns, with points to explore.',
      c2_t:"Children's story", c2_p:'An illustrated tale that takes the youngest readers inside the artwork.',
      c3_t:'Audio story on Maria Lai', c3_p:"A narration recorded in the students' voices, with a transcript.",
      c4_t:'Artist profile', c4_p:"Maria Lai's life, works and ideas, from weaving to art in public space.",
      p_k:'The Erasmus+ project', p_p:"“Arts, Tech and Us” is an Erasmus+ project linking IIS Francesco Ciusa in Nuoro and Lycée Félix le Dantec in Lannion, Brittany. Its aim is to use digital tools to make a place of art and culture more accessible: “Andando via”, Maria Lai's last public artwork, in Nuoro.",
      map_cap:'as the crow flies, joined by a sky-blue ribbon', n1:'students', n2:'mixed teams', n3:'per team', s1:'5 – 12 November 2026', s2:'8 – 15 April 2027', s3t:'Final event', s3:'May – June 2027, in both schools',
      pc_h:'360° tour', pc_lead:"Short introduction to the 360° tour: the places it covers and how to explore it.",
      pc_player:'Virtual tour', pc_sample:'Draft version', pc_btn:'Start the tour',
      pc_note:'Five 360° scenes, photographed by the students: from the church of the Solitudine, along the avenue and the path, to the gateway and the columns of “Andando via”.',
      pc_h1:'Drag to look around', pc_h2:'Click the arrows to change scene', pc_h3:'Open the icons to read more',
      pc_k:'The stops', pc_h2t:'What you meet along the way', pc_sp:'Each stop matches an interactive point in the tour. The final texts are written by the teams.',
      t1:'The gateway and the astral geography', t2:'The columns', t3:"The women of Grazia Deledda's novels", t4:'The writings to imagine',
      todo_stop:'Space for the text of this stop, written by the team.', pc_flat:'This browser cannot show 3D graphics: you are seeing the simplified version of the tour. For the 360° view, turn on hardware acceleration in Chrome.', pc_flat_hint:'Drag the image left and right; click the arrows to change scene.', close:'Close', pc_err:'The tour did not load. Please reload the page.',
      st_h:"Children's story", st_lead:"Introduction to the story: title, intended readers and what it is about.",
      st_prev:'← Back', st_next:'Next →', st_k:'Who made the book', st_h2:'Words, drawings and voices', st_c1:'Text', st_c2:'Illustrations', st_c3:'Translations',
      st_todo:"Space for the team members' names, filled in by the students.", st_cover:'Cover', st_title:'Title of the story',
      st_cover_p:"Subtitle and authors' names.",
      st_illo_c:'Cover illustration', st_illo:'Illustration', st_page:'Page', st_ph:'The text of this page of the story, written by the students, goes here.',
      ra_h:'Audio story on Maria Lai', ra_lead:"Introduction to the recorded story: topic, voices and length.",
      ra_k:'Recorded narration', ra_title:'Title of the narration', ra_missing:'The recording has not been uploaded yet. It will appear here as soon as it is ready.',
      ra_ck:'Chapters', ra_c1:'A childhood in Ulassai', ra_c2:'Thread, loom and sewn books', ra_c3:'Tying oneself to the mountain', ra_c4:'Andando via, in Nuoro',
      ra_cnote:'Chapter titles and lengths are provisional: the students set them during the final edit.',
      ra_tk:'Transcript', ra_th:'The text of the story', ra_tp:'The transcript makes the story accessible to people who cannot listen to it and helps those studying in another language.',
      ra_todo:'Space for the full transcript of the narration, written by the students.', ra_voices:'The voices', ra_todo2:'Space for the names of those who wrote, read and edited the recording.',
      ar_motto:'“To be is to weave”', ar_lead:"Short introduction to the artist (2–3 lines).",
      ar_id:'Identity card', ar_photo:'Space for a portrait of the artist (with usage rights checked)',
      ar_born:'Born', ar_born_v:'27 September 1919, Ulassai', ar_died:'Died', ar_died_v:'16 April 2013, Cardedu',
      ar_study:'Studies', ar_study_v:'Art high school in Rome; Academy of Fine Arts in Venice with Arturo Martini',
      ar_mat:'Materials', ar_mat_v:'Thread, fabric, looms, sewn books', ar_mus:'Museum', ar_mus_v:"Stazione dell'Arte, Ulassai",
      ar_tlk:'Key dates', ar_t1:'Born in Ulassai, in Ogliastra.', ar_t2:'Begins studying at the art high school in Rome, then continues at the Venice Academy with the sculptor Arturo Martini.',
      ar_t3:'Years of quiet research: the first sewn books appear.', ar_t4:'Shows her Looms at Galleria Schneider in Rome.',
      ar_t5:'Creates "Legarsi alla montagna" with the people of Ulassai.', ar_t6:"The Stazione dell'Arte, a museum devoted to her work, opens in Ulassai.",
      ar_t7:'Creates "Andando via" in Nuoro, her last public artwork.', ar_t8:'Dies in Cardedu.',
      ar_note:'Reference dates checked by the teachers. The rest of the profile is written by the students.',
      ar_s1:'Who was Maria Lai', ar_s2:'Thread, loom and sewn books', ar_s3:'Art that involves people', ar_s4:'"Andando via" and Grazia Deledda', ar_s5:'Sources',
      ar_todo:'Space for the students\' text.', ar_todo_src:'Space for the list of sources consulted by the students.'
    }
  };

  if (window.PAGE_T) { ['fr','en'].forEach(function(l){ Object.assign(T[l], window.PAGE_T[l] || {}); }); }

  /* ---------- intestazione ---------- */
  var hdr = document.getElementById('site-header');
  var current = hdr ? hdr.dataset.page : '';
  if (hdr) {
    var links = PAGES.map(function(p){
      return '<a href="' + p.href + '"' + (p.id === current ? ' aria-current="page"' : '') + ' data-i18n="' + p.key + '">' + p.it + '</a>';
    }).join('');
    hdr.outerHTML =
      '<header class="topbar"><div class="wrap">' +
      '<a class="logo-erasmus" href="index.html"><img src="assets/erasmus-plus.png" alt="Erasmus+" width="141" height="38"></a>' +
      '<a class="brand" href="index.html">Arts, Tech and Us<small>Maria Lai · Andando via</small></a>' +
      '<button type="button" class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="site-nav" data-i18n="menu">Menu</button>' +
      '<nav class="nav" id="site-nav" aria-label="Pagine del sito">' + links + '</nav>' +
      '<div class="lang" role="group" aria-label="Lingua">' +
      '<button type="button" data-lang="it" aria-pressed="true">IT</button>' +
      '<button type="button" data-lang="fr" aria-pressed="false">FR</button>' +
      '<button type="button" data-lang="en" aria-pressed="false">EN</button></div>' +
      '</div></header>';
    var mb = document.getElementById('menu-btn'), nav = document.getElementById('site-nav');
    mb.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------- piè di pagina ---------- */
  var ftr = document.getElementById('site-footer');
  if (ftr) {
    ftr.outerHTML =
      '<footer><div class="wrap">' +
      '<div class="eu"><span class="logo-erasmus"><img src="assets/erasmus-plus.png" alt="Erasmus+" width="141" height="38"></span></div>' +
      '<p class="disclaimer" data-i18n="disc">' + BASE_IT.disc + '</p>' +
      '<div class="credits"><span>IIS Francesco Ciusa · Nuoro</span><span>Lycée Félix le Dantec · Lannion</span><span data-i18n="cred">' + BASE_IT.cred + '</span></div>' +
      '</div></footer>';
  }


  /* ---------- decorazioni: punto cucito sui fili e coriandoli di stoffa nelle testate ---------- */
  document.querySelectorAll('.thread path').forEach(function(p){
    if (p.classList.contains('stitch')) return;
    p.setAttribute('opacity', '.95');
    var c = p.cloneNode(); c.setAttribute('class', 'stitch'); c.removeAttribute('stroke'); c.removeAttribute('opacity');
    p.parentNode.insertBefore(c, p.nextSibling);
  });
  var COLORS = ['var(--coral)','var(--sun)','var(--lagoon)','var(--violet)','var(--rose)','var(--leaf)','var(--sky)'];
  var SHAPES = {
    dot: '<circle cx="12" cy="12" r="9" fill="C"/>',
    ring: '<circle cx="12" cy="12" r="8" fill="none" stroke="C" stroke-width="4"/>',
    cross: '<path d="M5 5L19 19M19 5L5 19" stroke="C" stroke-width="4" stroke-linecap="round"/>',
    button: '<circle cx="12" cy="12" r="10" fill="C"/><circle cx="9" cy="9" r="1.7" fill="#fff"/><circle cx="15" cy="9" r="1.7" fill="#fff"/><circle cx="9" cy="15" r="1.7" fill="#fff"/><circle cx="15" cy="15" r="1.7" fill="#fff"/>',
    star: '<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" fill="C"/>',
    zig: '<path d="M2 16l5-8 5 8 5-8 5 8" fill="none" stroke="C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  var SPOTS = [
    [92,14,'button',30,0],[84,30,'star',26,1],[96,46,'cross',18,2],[78,10,'dot',12,3],[88,64,'ring',22,4],
    [71,22,'zig',30,5],[66,8,'dot',9,6],[97,78,'star',18,0],[80,50,'dot',10,2],[60,4,'cross',14,4],
    [4,8,'dot',10,1],[12,4,'cross',13,3],[2,30,'ring',16,5]
  ];
  document.querySelectorAll('.pagehead').forEach(function(h, k){
    var box = document.createElement('div'); box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
    SPOTS.forEach(function(s, i){
      var col = COLORS[(s[4] + k * 2) % COLORS.length];
      var el = document.createElement('span');
      el.style.cssText = 'position:absolute;left:' + s[0] + '%;top:' + s[1] + '%;width:' + s[3] + 'px;height:' + s[3] + 'px;transform:rotate(' + ((i * 37 + k * 11) % 50 - 25) + 'deg)';
      el.innerHTML = '<svg viewBox="0 0 24 24" width="100%" height="100%">' + SHAPES[s[2]].replace(/C/g, col) + '</svg>';
      box.appendChild(el);
    });
    h.insertBefore(box, h.firstChild);
  });

  /* ---------- testi del gruppo 1 ---------- */
  Object.assign(T.fr, {"h_lead": "Ce site présente Maria Lai, ses œuvres et ses idées, en particulier l'œuvre « Andando via » et sa conception de l'art social. Il a été réalisé par les élèves de l'IIS Francesco Ciusa de Nuoro et du lycée Félix Le Dantec de Lannion dans le cadre du projet Erasmus+ Arts, Tech and Us.", "o_p1": "« Andando via » est une installation environnementale réalisée par Maria Lai en 2011 à Nuoro, au pied du mont Ortobene, près de l'église de la Solitudine, où repose Grazia Deledda. Dédiée à l'écrivaine et aux femmes de ses romans, c'est la dernière œuvre publique de l'artiste. Elle se compose d'un grand portail en béton surmonté d'une géographie astrale en fer forgé et de onze piliers en béton blanc portant des silhouettes en métal noir et des écritures gravées.", "o_p2": "L'art de Maria Lai repose sur le fil, le tissu et le métier à tisser, utilisés comme outils pour explorer la mémoire, la poésie et les relations humaines. L'artiste a su allier l'art contemporain international aux anciennes traditions artisanales et aux légendes populaires de sa terre natale.", "r_p1": "L'art social de Maria Lai est une façon de faire de l'art qui ne vise pas à créer des tableaux ou des statues pour les musées, mais à rassembler les gens et à leur donner le sentiment d'appartenir à une communauté.", "r_p2": "Selon ses mots, « toute œuvre d'art doit devenir du pain à offrir à une table commune » : chacun en a besoin pour mieux vivre et ne pas se sentir seul. Maria Lai savait impliquer des communautés entières, comme dans la performance « Legarsi alla montagna » (Ulassai, 1981), où les habitants ont relié les maisons du village entre elles et à la montagne par une longue bande de tissu bleu.", "pc_lead": "Voici une visite virtuelle à 360° de l'œuvre « Andando via » de Maria Lai et de l'église de la Solitudine à Nuoro.", "st1a": "« Andando via » est un hommage à Grazia Deledda et aux femmes de ses romans. Le parcours s'ouvre sur un grand portail en béton, un cadre vide qui accueille le visiteur ; au-dessus se détache sur le ciel une géographie astrale en fer forgé. Maria Lai décrivait le portail comme « une invitation à laisser ses angoisses et à s'élancer dans une autre dimension ».", "st1b": "La géographie astrale rappelle les « Geografie » de Maria Lai, une série développée surtout à partir des années 1980 : de grandes toiles où les fils et les broderies dessinent des cartes imaginaires, des ciels étoilés et des constellations plutôt que des territoires réels. En 2020, l'installation a été réinterprétée en 22 tapisseries tissées par 25 ateliers textiles sardes et exposées au musée Mudec de Milan.", "st2a": "Le titre « Andando via » signifie « s'en aller ». C'est le dernier projet public de Maria Lai, un hommage en plein air à Grazia Deledda, la seule Italienne à avoir reçu le prix Nobel de littérature.", "st2b": "Plutôt qu'un monument traditionnel, Maria Lai a choisi un langage moderne : onze piliers en béton blanc dressés dans la verdure, non loin de l'église de la Solitudine. En marchant parmi eux, on a l'impression de traverser un labyrinthe ou un sanctuaire en plein air, où ce sont surtout les arbres et le vent qui parlent.", "st3a": "Sur les piliers se détachent des silhouettes en métal noir de femmes, de bergers, de chèvres et de métiers à tisser, qui évoquent les héroïnes des romans de Grazia Deledda et leur univers. Dans la présentation de l'œuvre, Maria Lai écrivait : « Dans chaque image, il y a l'homme avec toutes ses questions et sa soif d'infini. »", "st3b": "Maria Lai rapprochait le travail artistique des activités quotidiennes des femmes de sa terre natale – mères, tantes et grands-mères qui se consacraient au tissage, à la broderie et au crochet. Pour elle, le fil n'était pas un simple outil ménager, mais un élément symbolique capable de réparer les déchirures, de rapprocher les gens et de donner forme aux pensées.", "st4a": "Dans le béton des piliers sont gravées des écritures illisibles : des signes qui ressemblent à des hiéroglyphes ou au tracé d'un électrocardiogramme.", "st4b": "Les écritures illisibles, ou asémantiques, traversent l'œuvre de Maria Lai à partir des années 1970, par exemple dans ses livres cousus. Libérée du sens littéral, l'écriture manuscrite devient un signe visuel et tactile : l'artiste cherchait ainsi un langage universel qui laisse libre la pensée de celui qui regarde."});
  Object.assign(T.en, {"h_lead": "This website presents Maria Lai, her works and her ideas, focusing in particular on “Andando via” and on her idea of social art. It was created by the students of IIS Francesco Ciusa in Nuoro and Lycée Félix Le Dantec in Lannion as part of the Erasmus+ project Arts, Tech and Us.", "o_p1": "“Andando via” is an environmental installation created by Maria Lai in 2011 in Nuoro, at the foot of Mount Ortobene, near the church of the Solitudine, where Grazia Deledda is buried. Dedicated to the writer and to the women in her novels, it is the artist's last public work. It consists of a large concrete gateway topped by an astral geography in wrought iron, and of eleven white concrete pillars with black metal silhouettes and engraved writings.", "o_p2": "Maria Lai's art is based on thread, fabric and the loom, used as tools to explore memory, poetry and human relationships. The artist succeeded in combining international contemporary art with the ancient crafts and folk legends of her native land.", "r_p1": "Maria Lai's social art is a way of making art that does not aim to produce paintings or statues for museums, but to bring people together and make them feel part of a community.", "r_p2": "In her words, \"every work of art must become bread to be offered at a common table\": everyone needs art to live better and not feel alone. Maria Lai was able to involve whole communities, as in the performance “Legarsi alla montagna” (Ulassai, 1981), in which the inhabitants tied the houses of the village to one another and to the mountain with a long strip of blue fabric.", "pc_lead": "This is a 360° virtual tour of Maria Lai's artwork “Andando via” and of the church of the Solitudine in Nuoro.", "st1a": "“Andando via” is a tribute to Grazia Deledda and to the women in her novels. The path begins with a large concrete gateway, an empty frame that welcomes visitors; above it, an astral geography in wrought iron stands out against the sky. Maria Lai described the gateway as \"an invitation to leave anxieties behind and roam into another dimension\".", "st1b": "The astral geography recalls Maria Lai's “Geografie”, a series developed mainly from the 1980s onwards: large pieces of fabric in which threads and embroidery draw imaginary maps, starry skies and constellations instead of real territories. In 2020 the installation was reinterpreted in 22 tapestries woven by 25 Sardinian textile workshops and exhibited at the Mudec museum in Milan.", "st2a": "The title “Andando via” means \"going away\". The work is Maria Lai's last public project, an open-air tribute to Grazia Deledda, the only Italian woman to have won the Nobel Prize in Literature.", "st2b": "Instead of a traditional monument, Maria Lai chose a modern language: eleven white concrete pillars standing in the greenery, not far from the church of the Solitudine. Walking among them feels like crossing a labyrinth or an open-air sanctuary, where the trees and the wind do most of the talking.", "st3a": "On the pillars there are black metal silhouettes of women, shepherds, goats and looms, which recall the heroines of Grazia Deledda's novels and the world they lived in. In the presentation of the work Maria Lai wrote: \"In every image there is man, with all his questions and his longing for the infinite.\"", "st3b": "Maria Lai compared artistic work to the everyday activities of the women of her homeland – mothers, aunts and grandmothers devoted to weaving, embroidery and crochet. For her, thread was not just a household tool but a symbolic element, able to mend tears, bring people together and give shape to thoughts.", "st4a": "Writings that cannot be read are engraved in the concrete of the pillars: signs that look like hieroglyphs or the lines of an electrocardiogram.", "st4b": "Illegible, or asemantic, writings run through Maria Lai's work from the 1970s onwards, for example in her sewn books. Freed from literal meaning, handwriting becomes a visual and tactile sign: in this way the artist sought a universal language that leaves the viewer's thoughts free."});
  /* fine testi gruppo 1 */
  /* scheda gruppo 4 */
  Object.assign(T.fr, {"ar_lead": "Maria Lai était une femme innovante, une artiste capable de parler à toutes les générations. Femme réservée qui aimait la solitude, elle a créé ses œuvres à partir de matériaux du quotidien. Elle aimait représenter la vie quotidienne des femmes, pour la mettre en valeur.", "ar_born_v": "27 septembre 1919, Ulassai", "ar_died_v": "16 avril 2013, Cardedu", "ar_study_v": "l’art à Rome, puis la sculpture à Venise", "ar_mat_v": "la terre cuite, le bois, le pain, le tissu et d’autres matériaux humbles", "ar_mus_v": "Museo a cielo aperto « Maria Lai » et Stazione dell’arte, à Ulassai", "g4src0": "panneaux introductifs du musée", "g4s1": "Maria Lai fut une célèbre artiste italienne, comptant parmi les figures les plus originales et poétiques de l’art contemporain du XXe siècle. Née en Ogliastra, elle y vécut une enfance solitaire, en contact étroit avec la nature et les traditions de sa terre. Maria fréquenta l’Académie des beaux-arts de Venise et vécut longtemps à Rome. Elle était guidée par une profonde spiritualité laïque, une sensibilité très aiguë à l’invisible et une quête constante de liberté intérieure.", "g4s2": "Elle a réalisé de nombreuses œuvres, comme des livres qui représentent les personnes qui tissent, c’est-à-dire les femmes : leurs pages, pleines de fils, racontent l’histoire du tissage tout au long d’une vie.", "g4s3": "Elle représente le visible et l’invisible et cherche à rassembler les gens. Elle était souvent malade quand elle était petite : elle voulait donc que les personnes marginalisées soient mises en valeur. Il existe plusieurs formes d’invisibilité, qui touchent par exemple les personnes handicapées ou les femmes.", "g4s4": "Elle a créé « Andando via », une œuvre réalisée en hommage à Grazia Deledda. Près de l’église de la Solitudine, où se trouve la tombe de Grazia Deledda, se dresse son œuvre, qui se distingue par de nombreux piliers ; à travers eux, Maria Lai invite à se détacher des angoisses quotidiennes pour entrer dans une dimension de paix et de réflexion spirituelle.", "g4t0": "Elle entre à l’Istituto Magistrale de Cagliari, où elle rencontre Salvatore Cambosu.", "g4t1": "Elle entre au lycée artistique de Rome.", "g4t2": "Elle enseigne à l’Istituto Tecnico femminile de Cagliari, où elle expose ses œuvres.", "g4t3": "Elle expérimente une nouvelle forme d’art : naissent les séries « Telai » et « Pani ».", "g4t4": "Elle réalise sa première intervention environnementale, « La casa cucita », à Selargius.", "g4t5": "Elle crée à Orotelli « L’alveare del poeta », une œuvre dédiée à Salvatore Cambosu.", "g4t6": "Exposition majeure aux Scuderie de Palazzo Ruspoli, à Rome : « Inventare altri spazi ». Elle quitte ensuite Rome.", "g4t7": "Série d’œuvres : « I pensieri sull’arte » à Ulassai (2002), « Il muro del groviglio » à Porto Frailis (2004), « La casa delle inquietudini » à Ulassai (2005).", "g4t8": "Elle reçoit un doctorat honoris causa en lettres de l’université de Cagliari.", "ar_s2": "Le métier à tisser, les livres cousus et le fil", "ar_s3": "Un art qui implique les gens"});
  Object.assign(T.en, {"ar_lead": "Maria Lai was an innovative woman and an artist who speaks to every generation. A reserved woman who liked being alone, she created artworks from everyday materials. She liked to represent women’s daily lives, to bring them to light.", "ar_born_v": "27 September 1919, Ulassai", "ar_died_v": "16 April 2013, Cardedu", "ar_study_v": "Cagliari, Rome and Venice", "ar_mat_v": "fabric, thread, bread, wood, terracotta and other humble materials", "ar_mus_v": "Museo a cielo aperto “Maria Lai” and Stazione dell’arte, in Ulassai", "g4src0": "introductory panels in the museum", "g4s1": "Maria Lai was a renowned Italian artist and one of the most original and poetic figures in 20th-century contemporary art. Born in the Ogliastra region, she spent a solitary childhood in close contact with nature and the traditions of her homeland. She attended the Academy of Fine Arts in Venice and lived for many years in Rome. She was guided by a profound, secular spirituality, an acute sensitivity to the invisible, and a constant pursuit of inner freedom.", "g4s2": "The Sardinian artist reinterpreted textile traditions, transforming threads, looms and stitched books into universal symbols: tools to mend the world, bring people together and weave thoughts, fairy tales and memories through art.", "g4s3": "Her work explores both the visible and the invisible, aiming to bring people together. Having often been ill as a child, she wanted marginalised people to be valued and recognised. There are many forms of invisibility, affecting, for instance, people with disabilities or women.", "g4s4": "She created “Andando via” (“Going away”) in honour of Grazia Deledda. Near the church of the Solitudine, where Grazia Deledda is buried, stands her work, made up of a series of pillars; through them, Maria Lai invites us to step away from daily anxieties and enter a realm of peace and spiritual reflection.", "g4t0": "She attends the “Istituto Magistrale” in Cagliari, where she meets Salvatore Cambosu.", "g4t1": "She attends the art high school in Rome.", "g4t2": "She teaches at the “Istituto Tecnico femminile” in Cagliari, where she exhibits her artworks.", "g4t3": "She experiments with a new kind of art: the “Telai” (Looms) and the “Pani” (Breads) are born.", "g4t4": "She makes her first environmental intervention, “La casa cucita”, in Selargius.", "g4t5": "She creates “L’alveare del poeta” in Orotelli, dedicated to Salvatore Cambosu.", "g4t6": "Her most important exhibition, “Inventare altri spazi”, at the Scuderie di Palazzo Ruspoli in Rome; afterwards she leaves Rome.", "g4t7": "She creates a series of artworks: “I pensieri sull’arte” in Ulassai (2002), “Il muro del groviglio” in Porto Frailis (2004), “La casa delle inquietudini” in Ulassai (2005).", "g4t8": "She receives an honorary doctorate in Literature from the University of Cagliari.", "ar_s2": "Threads, looms and stitched books", "ar_s3": "Art that engages people"});
  /* racconto gruppo 3 */
  Object.assign(T.fr, {"ra_lead": "Un récit enregistré par les élèves en italien, en français et en anglais : la vie de Maria Lai, ses études, son art et « Legarsi alla montagna ». Il dure environ quatre minutes.", "ra_title": "Maria Lai : la vie, l'art, la montagne", "ra_c1": "Vie", "ra_c2": "Parcours", "ra_c3": "Art", "ra_c4": "Legarsi alla montagna", "ra_cnote": "Cliquez sur un chapitre pour l'écouter à partir de là.", "ra_en1": "L'enregistrement anglais du chapitre 1 n'est pas encore disponible.", "ra_cred": "Textes et voix : élèves du groupe 3 du projet Erasmus+ Arts, Tech and Us (IIS Francesco Ciusa, Nuoro – lycée Félix Le Dantec, Lannion)."});
  Object.assign(T.en, {"ra_lead": "A story recorded by the students in Italian, French and English: Maria Lai's life, her studies, her art and “Legarsi alla montagna”. It lasts about four minutes.", "ra_title": "Maria Lai: life, art and the mountain", "ra_c1": "Life", "ra_c2": "Career", "ra_c3": "Art", "ra_c4": "Legarsi alla montagna", "ra_cnote": "Click on a chapter to listen from there.", "ra_en1": "The English recording of chapter 1 is not available yet.", "ra_cred": "Texts and voices: students of group 3 of the Erasmus+ project Arts, Tech and Us (IIS Francesco Ciusa, Nuoro – Lycée Félix Le Dantec, Lannion)."});
  Object.assign(T.fr, {"v_k":"Vidéo","v_h":"Le documentaire : « Legarsi alla montagna »","v_link":"Ouvrir la vidéo sur YouTube ↗","v_cap":"Documentaire sur la performance de Maria Lai à Ulassai, en 1981."});
  Object.assign(T.en, {"v_k":"Video","v_h":"The documentary: “Legarsi alla montagna”","v_link":"Open the video on YouTube ↗","v_cap":"A documentary on Maria Lai's performance in Ulassai in 1981."});
  /* ---------- traduzioni ---------- */
  var IT = Object.assign({}, BASE_IT);
  document.querySelectorAll('[data-i18n]').forEach(function(n){ if (!(n.dataset.i18n in IT) || n.closest('main')) IT[n.dataset.i18n] = n.textContent; });
  T.it = IT;
  var lang = 'it';
  function t(k){ return (T[lang] && T[lang][k]) || IT[k] || ''; }
  function apply(root){
    (root || document).querySelectorAll('[data-i18n]').forEach(function(n){
      var v = t(n.dataset.i18n); if (v) n.textContent = v;
    });
  }
  function setLang(l){
    lang = T[l] ? l : 'it';
    apply(document);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    try { localStorage.setItem('andando-via-lang', lang); } catch(e) {}
    document.dispatchEvent(new CustomEvent('site:lang', {detail:lang}));
  }
  document.querySelectorAll('.lang button').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.dataset.lang); }); });
  window.SiteI18n = { t:t, apply:apply, setLang:setLang, lang:function(){ return lang; } };
  var saved = null; try { saved = localStorage.getItem('andando-via-lang'); } catch(e) {}
  if (saved && saved !== 'it' && T[saved]) setLang(saved);
})();
