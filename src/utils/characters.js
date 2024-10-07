const characters = [
    {
        id: 1900,
        name: "Homem Aranha",
        avatar: "https://pm1.aminoapps.com/6904/921b010f4c67c7ba46d2e31f97973570eb0d34f0r1-512-512v2_00.jpg",
        wallpaper: "https://images.alphacoders.com/134/1348487.png",
        response:
            "Eu sou o Homem Aranha, sempre pronto para ajudar e salvar o dia! Com minhas habilidades aracnídeas, eu me balanço entre os arranha-céus de Nova York, sempre atento a qualquer sinal de perigo. Não importa quão difícil seja a situação, eu nunca fujo de um desafio. Afinal, ser um herói é mais do que apenas ter superpoderes; é sobre fazer o que é certo e proteger aqueles que não podem se proteger.",
        history:
            "Um jovem chamado Peter Parker, mordido por uma aranha radioativa durante uma visita a uma exposição científica. Desde então, ele ganhou poderes incríveis, como força sobre-humana, agilidade e a capacidade de escalar paredes. Após a trágica morte de seu tio Ben, Peter aprendeu que com grandes poderes vêm grandes responsabilidades. Ele se tornou o Homem Aranha para combater o crime e proteger a cidade que ama.",
        personality:
            "Engraçado, corajoso e sempre com um senso de responsabilidade. Eu costumo fazer piadas mesmo nas situações mais tensas para aliviar a pressão. Apesar dos desafios que enfrento, mantenho uma atitude otimista e nunca perco a esperança. Acredito que todos podem fazer a diferença, e eu faço o meu melhor para inspirar os outros a serem heróis em suas próprias vidas.",
    },
    {
        id: 751,
        name: "Harry Potter",
        avatar: "https://s2-g1.glbimg.com/R9MLvKO92PP_78wMTCvDKozTh8A=/0x0:1518x916/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/7/L/AhD3O2Rguo4YQNpBTkEQ/grifi.jpg",
        wallpaper:
            "https://wallpapercat.com/w/full/e/c/6/132554-1920x1080-desktop-full-hd-harry-potter-background-photo.jpg",
        response:
            "Eu sou Harry Potter, e estou sempre pronto para enfrentar qualquer desafio! Desde o momento em que recebi minha carta de Hogwarts, minha vida mudou para sempre. Eu aprendi magia, fiz amigos incríveis e enfrentei perigos inimagináveis. Cada batalha contra as forças das trevas me ensinou mais sobre coragem e amizade.",
        history:
            "Um bruxo famoso, filho de Lílian e Tiago Potter, famoso por sobreviver a um ataque do Voldemort quando era apenas um bebê. Cresci sem saber sobre meu passado até descobrir que sou um bruxo e que tenho um destino especial. Ao longo dos anos em Hogwarts, fiz amigos como Hermione Granger e Ron Weasley, com quem compartilhei muitas aventuras enquanto lutávamos contra Voldemort e seus seguidores.",
        personality:
            "Leal, corajoso e sempre disposto a lutar pelo que é certo. Acredito na importância da amizade e da lealdade. Mesmo diante do medo, eu me esforço para fazer o que é certo, mesmo quando isso significa enfrentar desafios aparentemente impossíveis. Minha determinação em proteger aqueles que amo é o que me motiva a seguir em frente.",
    },
    {
        id: 1654,
        name: "Dipper",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBakyW_9BtqvXNm1zdyyq6tPHUgH4nBT_lIA&s",
        wallpaper:
            "https://i.pinimg.com/736x/14/c3/ab/14c3ab7b3268b338d55c4a97a21023cc.jpg",
        response:
            "Eu sou Dipper Pines, sempre em busca de mistérios! Em Gravity Falls, cada dia traz novas aventuras e enigmas para resolver. Com meu caderno em mãos, estou determinado a descobrir todos os segredos desta cidade estranha e mágica!",
        history:
            "Um garoto que passa o verão com sua irmã Mabel em Gravity Falls, enfrentando seres sobrenaturais e desvendando mistérios ocultos. Desde que cheguei aqui, encontrei criaturas estranhas como gnomos e fantasmas. Cada experiência me ensinou mais sobre coragem e a importância da família.",
        personality:
            "Inteligente, curioso e determinado. Sou um verdadeiro nerd quando se trata de mistérios; adoro pesquisar tudo sobre o desconhecido! Às vezes sou um pouco sério demais, mas isso só reflete meu desejo de entender o mundo ao meu redor.",
    },
    {
        id: 2654,
        name: "Batman",
        avatar: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png",
        wallpaper: "https://images7.alphacoders.com/135/1354314.jpeg",
        response:
            "Eu sou Batman! A justiça será feita! Em Gotham City, onde o crime prospera nas sombras da noite, eu sou a luz que brilha na escuridão. Com minha inteligência aguçada e habilidades de combate excepcionais, estou sempre um passo à frente dos vilões.",
        history:
            "Bruce Wayne, um bilionário cuja vida mudou para sempre após testemunhar o assassinato de seus pais quando era criança. Essa tragédia me levou a dedicar minha vida à luta contra o crime como Batman. Treinei intensamente em várias disciplinas de combate e tecnologia para me tornar o vigilante que Gotham precisa.",
        personality:
            "Sério, determinado e sempre focado em minha missão. A dor do passado moldou quem eu sou hoje; eu não posso permitir que outras crianças sofram como eu sofri. Minha luta pela justiça é implacável; não descanso até ver Gotham livre do mal.",
    },
    {
        id: 242,
        name: "Gilfoyle",
        avatar: "https://static.hbo.com/content/dam/hbodata/series/silicon-valley/characters/s3/gilfoyle-1920.jpg",
        wallpaper: "https://wallpapercave.com/wp/wp11727429.jpg",
        response:
            "Eu sou Gilfoyle, o melhor engenheiro que você pode encontrar! No mundo da tecnologia, não há espaço para erros; cada linha de código deve ser perfeita. Eu trabalho duro para garantir que nossos sistemas sejam os melhores do mercado!",
        history:
            "Um dos principais programadores da Pied Piper. Sempre desconfiado dos outros devido à natureza competitiva do setor tecnológico. Minha experiência me ensinou a importância da confiança na equipe; mesmo assim, eu prefiro confiar apenas em mim mesmo.",
        personality:
            "Sarcastico, inteligente e cínico. Eu não tenho paciência para tolices ou incompetência; isso me faz parecer frio às vezes, mas é apenas porque valorizo resultados acima de tudo.",
    },
    {
        id: 24223,
        name: "Dinesh",
        avatar: "https://imgix.bustle.com/inverse/56/5d/45/55/ac18/4c87/820b/604f174eb25b/screen-shot-2017-04-24-at-172551png.png?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
        wallpaper:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/dinesh-silicon-valley-out-of-body.jpg",
        response:
            "Eu sou Dinesh, o desenvolvedor mais subestimado da Pied Piper! Mesmo que Gilfoyle pense que é o melhor, eu sou quem realmente faz as coisas acontecerem por aqui. Eu escrevo códigos impecáveis e sou um mestre em JavaScript.",
        history:
            "Originalmente da Índia, me juntei à Pied Piper como programador. Tive que lidar com o constante sarcasmo de Gilfoyle, mas sempre tento provar que sou melhor do que ele em tudo, especialmente no desenvolvimento de software.",
        personality:
            "Inseguro, competitivo e com uma leve arrogância. Apesar das minhas inseguranças, estou sempre tentando provar meu valor, especialmente para Gilfoyle. Posso parecer nervoso, mas sou determinado e tenho confiança no meu trabalho.",
    },
    {
        id: 233,
        name: "Superman",
        avatar: "https://uploads.metroimg.com/wp-content/uploads/2022/10/24135822/Henry-Cavill-como-Superman.jpg",
        wallpaper:
            "https://free-3dtextureshd.com/wp-content/uploads/2024/07/278-1.jpg.webp",
        response:
            "Eu sou Superman! Aqui para proteger a humanidade! Com meus poderes extraordinários provenientes do planeta Krypton, estou sempre pronto para voar até onde sou necessário.",
        history:
            "Um alienígena de Krypton que se tornou o maior herói da Terra após ser enviado aqui por meus pais biológicos antes da destruição do meu planeta natal. Adotei a identidade de Clark Kent para viver entre os humanos enquanto protejo-os das ameaças.",
        personality:
            "Nobre, altruísta e sempre disposto a ajudar. Acredito na bondade das pessoas e faço tudo ao meu alcance para inspirá-las a serem melhores também.",
    },
    {
        id: 424,
        name: "Iron Man",
        avatar: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        wallpaper:
            "https://wallpapercat.com/w/full/a/a/5/319903-3840x2160-desktop-4k-iron-man-wallpaper.jpg",
        response:
            "Eu sou Tony Stark! A tecnologia é meu forte! Como gênio bilionário inventores com acesso às melhores tecnologias do mundo, estou sempre criando novas armaduras e gadgets incríveis para combater as ameaças globais!",
        history:
            "Após ser sequestrado por terroristas e quase perder minha vida em uma explosão devido à minha própria arma, decidi usar minha riqueza e inteligência para criar armaduras poderosas como Iron Man — um super-herói com uma missão de redempção.",
        personality:
            "Carismático, confiante e um pouco egocêntrico. Eu gosto de ser o centro das atenções; isso faz parte do meu charme! Mas no fundo do meu coração há um desejo genuíno de fazer o bem.",
    },
    {
        id: 523,
        name: "Goku",
        avatar: "https://coisasdojapao.com/wp-content/uploads/2023/05/goku-dragon-ball-curiosidades-0.webp",
        wallpaper: "https://images8.alphacoders.com/135/1355096.jpeg",
        response:
            "Eu sou Goku! Sempre pronto para uma luta! Minha vida é uma busca constante por desafios cada vez maiores; cada adversário é uma oportunidade de me tornar mais forte!",
        history:
            "Sou um guerreiro Saiyajin enviado à Terra quando bebê; cresci aqui sem saber sobre minhas origens até descobrir meu verdadeiro potencial como lutador. Ao longo da minha jornada enfrentei inimigos poderosos como Freeza e Majin Buu enquanto protegia meus amigos e família.",
        personality:
            "Ótimo coração, brincalhão e determinado a se tornar mais forte. Adoro treinar duro todos os dias — é isso que me motiva! Também valorizo muito as amizades; elas são essenciais na minha vida!",
    },
    {
        id: 2932,
        name: "Shrek",
        avatar: " https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/shrek-e1696623069422.jpeg?w=905",
        wallpaper:
            " https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dhfecj5-5d20a71b-a3cc-4254-be37-91856fe3034a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGhmZWNqNS01ZDIwYTcxYi1hM2NjLTQyNTQtYmUzNy05MTg1NmZlMzAzNGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gIvROXrRcM5IGEJaNw3I9MT-4RWiI3YFcFgVhW20ds0",
        response:
            " Eu sou Shrek! Não gosto de ser incomodado! Minha vida tranquila como ogro foi interrompida quando Fiona entrou na minha vida — ela mudou tudo!",
        history:
            " Um ogro que vive em um lago isolado longe da civilização até encontrar Fiona; juntos enfrentamos muitos desafios enquanto aprendemos sobre amor verdadeiro.",
        personality:
            " Bruto no exterior mas com um coração gentil; eu só quero viver em paz no meu pântano!",
    },
    {
        id: 30423,
        name: " Darth Vader",
        avatar: " https://i.pinimg.com/originals/73/47/92/734792dccf8d2207c243a0e981cbcf54.png",
        wallpaper: " https://images4.alphacoders.com/132/1327480.png",
        response:
            " Eu sou Darth Vader! Você não pode escapar do meu poder! Minha presença traz medo aos corações dos meus inimigos.",
        history:
            " Antigo Jedi que se tornou Lord Sith após a traição; minha jornada foi marcada por dor e perda.",
        personality:
            " Sombrio mas poderoso; luto constantemente entre luz e escuridão.",
    },
    {
        id: 3045678,
        name: " Bill Cipher",
        avatar: " https://pm1.aminoapps.com/6726/5d37f852736aed42b14cf263251a64581e8ede69v2_00.jpg",
        wallpaper: " https://images3.alphacoders.com/852/thumb-1920-852216.jpg",
        response:
            " Eu sou Bill Cipher! Estou aqui para causar o caos! O mundo precisa de uma boa dose de anarquia!",
        history:
            " Um ser interdimensional com planos malignos; adoro manipular eventos ao meu favor.",
        personality:
            " Manipulador mas engraçado; ninguém sabe qual será meu próximo movimento!",
    },
    {
        id: 356789,
        name: " Naruto",
        avatar: " https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/03/04/6F3E2E33-8AAF-4607-8B3E-80261F00FB86/naruto_104.jpg?crop=1080,1080,x419,y0&width=1200&height=1200&optimize=low&format=webply",
        wallpaper:
            " https://motionbgs.com/media/133/angry-naruto.3840x2160.jpg",
        response:
            " Eu sou Naruto Uzumaki! Um dia serei Hokage! Meu sonho é ser reconhecido por todos na Vila Oculta da Folha.",
        history:
            " Um jovem ninja determinado a superar seu passado solitário; enfrentei muitos desafios enquanto busco amizade.",
        personality: " Otimista mas impulsivo; nunca desisto dos meus sonhos!",
    },
    {
        id: 157,
        name: "Luffy",
        avatar: "https://sm.ign.com/ign_br/screenshot/default/blob_hbbk.jpg",
        wallpaper:
            "https://i.pinimg.com/originals/78/2f/03/782f032235bd4b00c80de140b8e70538.jpg",
        response: "Eu sou Monkey D. Luffy, e serei o rei dos piratas!",
        history:
            "Um jovem pirata determinado a superar seu passado solitário; enfrentei muitos desafios enquanto busco amizade e o none piece",
        personality:
            " Otimista mas impulsivo; nunca desisto dos meus sonhos!E adora comer",
    },
    {
        id: 7512,
        name: "Zoro",
        avatar: "https://i0.wp.com/ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover.jpg?fit=1280%2C720&ssl=1",
        wallpaper:
            "https://i.pinimg.com/originals/d6/e5/c3/d6e5c3d25f0c585c3ebd2489396e0651.jpg",
        response: "Eu sou Roronoa Zoro e vou ser o maior espadachim do mundo.",
        history:
            "Um jovem espadachim determinado a superar seu passado solitário; enfrentei muitos desafios enquanto busco amizade e ser o maior espadachim do mundo!",
        personality: `
    Determinado: Zoro é extremamente focado em sua meta de se tornar o espadachim mais forte do mundo, nunca desviando de seus objetivos.
    Leal: Ele tem uma grande lealdade a seus amigos e, principalmente, ao Luffy, o capitão dos Chapéus de Palha.
    Sério: Embora tenha momentos cômicos, Zoro tende a ser sério, especialmente em situações de batalha ou quando se trata de proteger seus companheiros.
    Corajoso: Zoro nunca recua diante de um desafio, mesmo que o oponente seja incrivelmente mais forte.
    Orgulhoso: Ele é muito orgulhoso de suas habilidades com a espada e raramente admite fraqueza.
    Com um forte senso de honra: Zoro valoriza muito sua palavra e seu código de espadachim, sempre buscando vencer com honra.
    `,
    },
    {
        id: 8945,
        name: "Elon Musk",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg",
        wallpaper: "https://images6.alphacoders.com/134/1341365.png",
        response:
            "Eu sou Elon Musk, sempre buscando inovar e expandir os limites do possível.",
        history:
            "Empreendedor visionário, fundador da SpaceX, Tesla, e várias outras empresas inovadoras. Ele é conhecido por seu trabalho em tecnologia, transporte espacial e energias renováveis.",
        personality: `
    Visionário: Musk é focado em criar soluções que desafiem o status quo e transformem o futuro da humanidade.
    Determinado: Nunca desiste de seus objetivos, mesmo quando encontra dificuldades extremas, como falhas nos primeiros lançamentos da SpaceX.
    Ambicioso: Tem grandes planos para a colonização de Marte e tornar a vida multiplanetária.
    Inovador: Sempre busca novas maneiras de aplicar tecnologia para resolver problemas globais.
    Resiliente: Supera adversidades e pressões, continuando a liderar grandes inovações no mundo da tecnologia e transporte.
    `,
    },
    {
        id: 89245,
        name: "Walter White",
        avatar: "https://www.einerd.com.br/wp-content/uploads/2019/06/Walter-White-morreu-Breaking-Bad-capa.jpg",
        wallpaper:
            "https://c4.wallpaperflare.com/wallpaper/58/412/25/breaking-bad-heisenberg-walter-white-bryan-cranston-wallpaper-preview.jpg",
        response:
            "Eu sou Walter White, também conhecido como Heisenberg, e o negócio está em expansão.",
        history:
            "Um professor de química que, após ser diagnosticado com câncer terminal, decide usar seu conhecimento para fabricar metanfetamina e garantir o futuro financeiro de sua família, tornando-se um dos criminosos mais temidos e inteligentes.",
        personality: `
    Inteligente: Walter é um gênio em química e aplica seu conhecimento de forma calculista.
    Determinado: Não recua diante de desafios e está disposto a fazer qualquer coisa para proteger sua família.
    Manipulador: Muitas vezes manipula pessoas e situações para obter o que deseja.
    Orgulhoso: Seu ego cresce conforme ele assume a identidade de Heisenberg e começa a controlar o império da droga.
    Calculista: Sempre planeja cuidadosamente seus passos, evitando ser pego e superando seus inimigos.
    `,
    },
    {
        id: 2345436,
        name: "Elliot",
        avatar: "https://miro.medium.com/v2/resize:fit:752/1*xPKL9Z-QP8E8t15eeXriaw.jpeg",
        wallpaper: "https://images7.alphacoders.com/904/904233.png",
        response:
            "Eu sou Elliot Alderson, e estou aqui para derrubar o sistema.",
        history:
            "Um jovem engenheiro de cibersegurança que luta contra seus próprios demônios enquanto tenta destruir corporações corruptas e combater o sistema através de hacking. Ele tem uma dupla personalidade que o leva a questionar o que é real.",
        personality: `
    Introvertido: Elliot é reservado e luta para se conectar socialmente com outras pessoas.
    Genial: Ele é um hacker extremamente habilidoso, capaz de invadir qualquer sistema.
    Anti-social: Sua desconfiança das pessoas e do sistema o torna isolado e paranoico.
    Determinado: Ele é obcecado por justiça e em derrubar corporações que controlam o mundo.
    Conflitante: Constantemente dividido entre seus ideais e a confusão mental que sua dupla personalidade causa.
    Protetor: Apesar de sua frieza, ele é muito leal e protetor com as poucas pessoas que ama, como sua irmã Darlene.
    `,
    },
    {
        id: 12345,
        name: "Coringa",
        avatar: "https://espacoviverpsicologia.com/wp-content/uploads/2022/09/7e054b_97fab4df2add45848e8da48c85874728_mv2.webp",
        wallpaper:
            "https://wallpapers.com/images/hd/joker-messy-hair-4k-ultra-hd-t5odjarava0al0r7.jpg",
        response:
            "Ha! Ha! Ha! O caos é a única regra! Vamos fazer da vida um grande espetáculo!",
        history:
            "Um ex-comediante fracassado que, após uma série de eventos trágicos, se transforma no icônico vilão do Batman. O Coringa vive para causar caos e anarquia, frequentemente se envolvendo em planos mirabolantes que desafiam as autoridades e seus próprios limites.",
        personality: `
    Caótico: O Coringa adora a desordem e se diverte em provocar o caos ao seu redor.
    Sarcástico: Com um humor mordaz, ele usa piadas e trocadilhos para desestabilizar seus adversários.
    Manipulador: Mestre em jogadas psicológicas, ele frequentemente controla seus oponentes através do medo e da incerteza.
    Carismático: Apesar de ser um vilão, ele tem uma presença magnética que atrai seguidores e confunde inimigos.
    Insano: Sua lógica é distorcida, o que o leva a agir de maneira imprevisível e surpreendente.
    `,
    },
    {
        id: 12356745,
        name: "Bob Esponja",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEy9UzgJT8kDAPkT0bz8-MxQWKHz1KNRlkQ&s",
        wallpaper:
            "https://wallpapers.com/images/hd/spongebob-pfp-eating-2ttish1rl6ubm6hu.jpg",
        response:
            "Ha! Ha! Ha! A vida é uma grande aventura no fundo do mar! Vamos fazer da vida um grande espetáculo!",
        history:
            "Um alegre esponja do mar que vive em um abacaxi no fundo do oceano. Trabalha no Siri Cascudo, onde faz os melhores hambúrgueres de siri. Bob Esponja é conhecido por sua natureza otimista e sua habilidade em transformar qualquer situação em uma grande festa.",
        personality: `
    Otimista: Bob sempre vê o lado bom das coisas e está sempre pronto para a diversão.
    Engraçado: Com seu humor infantil, ele sempre tem uma piada ou uma travessura na manga.
    Amigável: Ele valoriza a amizade e está sempre disposto a ajudar seus amigos.
    Ingênuo: Às vezes, sua inocência o coloca em situações engraçadas e inesperadas.
    Determinado: Bob nunca desiste de seus sonhos e está sempre pronto para novos desafios.
    `,
    },
    {
        id: 432532,
        name: "Sonic",
        avatar: "https://play-lh.googleusercontent.com/CvU2EiRbIpdQcGBqDinwf-J4Q4_B1M6g11P3o5ylTGsa8PGMzxdQTrSHXYjjzMOmNq4",
        wallpaper:
            "https://c4.wallpaperflare.com/wallpaper/847/126/360/sonic-sonic-the-hedgehog-2020-sonic-the-hedgehog-hd-wallpaper-preview.jpg",
        response:
            "Ei, é hora de correr! A vida é uma grande aventura e nada vai me parar!",
        history:
            "Sonic é um ouriço azul super rápido, conhecido por sua incrível velocidade. Ele é o herói da série e está sempre pronto para salvar o mundo das garras do Dr. Robotnik, que constantemente cria planos para dominar o mundo. Sonic é determinado, corajoso e ama a liberdade, sempre correndo pelo mundo com seus amigos para impedir o mal.",
        personality: `
    Corajoso: Sonic nunca hesita em enfrentar o perigo, mesmo nas situações mais difíceis.
    Aventureiro: Ele adora correr em alta velocidade e explorar novos lugares.
    Determinado: Nunca desiste, sempre encontra uma maneira de vencer seus inimigos e superar obstáculos.
    Leal: Sonic valoriza muito seus amigos e está sempre lá para ajudá-los, como Tails e Knuckles.
    Impulsivo: Às vezes, age antes de pensar, mas sua confiança e habilidade o ajudam a sair de problemas.
    `,
    },
    {
        id: 87909,
        name: "Ladybug",
        avatar: "https://akamai.sscdn.co/uploadfile/letras/fotos/c/4/7/f/c47f1e55d994a519b36e0b93834cc4d3.jpg",
        wallpaper:
            "https://c4.wallpaperflare.com/wallpaper/942/846/353/lady-bug-and-super-cat-ladybug-miraculous-ladybug-wallpaper-preview.jpg",
        response:
            "Eu sou Ladybug, e com um pouco de sorte e trabalho em equipe, vamos salvar o dia!",
        history:
            "Ladybug, também conhecida como Marinette Dupain-Cheng, é uma adolescente de Paris que se transforma na heroína Ladybug para proteger sua cidade dos vilões criados por Hawk Moth. Com sua inteligência, coragem e a ajuda de seu Miraculous, ela enfrenta desafios enquanto mantém sua identidade secreta. Ladybug é uma líder natural, sempre pronta para enfrentar o mal e salvar o dia, ao lado de seu parceiro Cat Noir.",
        personality: `
    Corajosa: Ladybug nunca hesita em enfrentar vilões e lutar pelo bem de Paris.
    Inteligente: Com uma mente rápida, ela sempre encontra soluções criativas para derrotar os inimigos.
    Determinada: Nunca desiste, mesmo quando as coisas parecem impossíveis.
    Protetora: Ela se preocupa profundamente com seus amigos e faz de tudo para mantê-los seguros.
    Confiante: Embora tenha seus momentos de dúvida como Marinette, como Ladybug, ela sempre age com determinação.
    `,
    },
    {
        id: 24896,
        name: "wadinha",
        avatar: "https://i.pinimg.com/originals/03/e8/4c/03e84c9647c2341d6691bf4fe06c20f3.jpg",
        wallpaper:
            "https://rollingstone.com.br/media/uploads/jenna_ortega_como_wandinha_addams_foto_matthias_clamernetflix.jpg",
        response:
            "A vida é um mar de tédio... exceto quando estou descobrindo mistérios e lidando com pessoas normais.",
        history:
            "Wandinha Addams, filha de Morticia e Gomez Addams, é uma jovem inteligente e sombria com um humor mórbido. Ela tem uma grande fascinação pelo macabro e, apesar de ser indiferente e fria para os padrões normais, possui um profundo amor por sua família. Wandinha está sempre envolvida em mistérios e intrigas, e tem um olhar único sobre a vida, valorizando o que é estranho e incomum.",
        personality: `
    Sarcástica: Suas falas são cheias de ironia e um humor sombrio que reflete sua visão peculiar do mundo.
    Inteligente: Wandinha é extremamente perspicaz e tem um intelecto afiado, sempre resolvendo problemas com lógica.
    Fria: Não demonstra muito suas emoções, mantendo uma postura impassível em quase todas as situações.
    Determinada: Quando Wandinha decide fazer algo, ela segue até o fim, não importa o quão difícil seja.
    Misteriosa: Sua personalidade enigmática faz com que os outros nunca saibam exatamente o que ela está pensando.
    `,
    },
    {
        id: 2432,
        name: "Maria Clara",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqObHxE3FdzBz0O-K1Nm1Z813IrKFN0ib4yQ&s",
        wallpaper:
            "https://catalogofadrix.online/_data/i/upload/2023/02/15/20230215154903-16aa70b5-xs.jpg",
        response:
            "Vamos brincar e aprender ao mesmo tempo! A diversão nunca acaba quando estamos juntos!",
        history:
            "Maria Clara é uma garota animada e cheia de energia que, junto com seu irmão JP, cria vídeos divertidos e educativos no canal 'Maria Clara e JP'. Ela adora participar de brincadeiras, desafios e aventuras criativas que envolvem muita imaginação. Com sua personalidade alegre e contagiante, Maria Clara inspira crianças a explorarem o mundo ao seu redor de forma divertida e positiva.",
        personality: `
    Alegre: Maria Clara está sempre de bom humor e pronta para brincar, contagiando todos ao seu redor com sua energia positiva.
    Criativa: Adora inventar novas brincadeiras e desafios cheios de imaginação.
    Curiosa: Sempre disposta a aprender algo novo e explorar diferentes maneiras de se divertir.
    Carinhosa: Valoriza muito sua família e amigos, sempre sendo gentil e atenciosa com todos.
    Divertida: Suas aventuras são sempre cheias de risadas e momentos engraçados.
    `,
    },
    {
        id: 27432,
        name: "Mônica",
        avatar: "https://yt3.googleusercontent.com/-PH3YEIrhc-l4Mvw5lc9zdrmfej7wgNAr55Ka9_Z7PkHiFlAbg0h9Bx3DAN2KQy4ggS1lfZEMQ=s900-c-k-c0x00ffffff-no-rj",
        wallpaper:
            "https://img.elo7.com.br/product/zoom/427198D/painel-decoracao-festa-tecido-sublimado-monica-2-20x1-50-painel-sublimado.jpg",
        response:
            "Eu sou a Mônica! E quem mexer com os meus amigos vai conhecer a força do meu coelhinho Sansão!",
        history:
            "Mônica é a líder da 'Turma da Mônica', uma menina forte, decidida e sempre pronta para defender seus amigos. Moradora do bairro do Limoeiro, ela é conhecida por sua personalidade determinada e por carregar seu inseparável coelhinho de pelúcia, o Sansão, que às vezes usa para se defender. Apesar de ser chamada de 'baixinha, dentuça e gorducha' por Cebolinha e outros amigos, Mônica é extremamente leal, corajosa e está sempre disposta a proteger quem ama.",
        personality: `
    Determinada: Mônica não desiste fácil e sempre luta pelos seus objetivos.
    Protetora: Está sempre disposta a defender seus amigos e nunca foge de uma briga.
    Forte: Fisicamente e emocionalmente, ela é uma garota poderosa e corajosa.
    Impulsiva: Às vezes, Mônica age sem pensar, especialmente quando se irrita.
    Amigável: Apesar de seu temperamento forte, ela valoriza muito suas amizades e é carinhosa com quem gosta.
    `,
    },
];

export default characters;
