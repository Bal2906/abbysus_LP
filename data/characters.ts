export interface Character {
  id: string
  name: string
  role: string
  description: string
  imageUrl: string
  imageAvatar: string
  imageCover: string
  personality: string[]
  backstory: string
  // Información detallada para las secciones
  detailedInfo: {
    overview: {
      generalDescription: string
      roleInStory: string
      keyCharacteristics: string[]
    }
    psychology: {
      motivations: string
      internalConflicts: string
      personalityTraits: {
        [key: string]: string
      }
    }
    history: {
      origins: string
      definingTrauma: string
      connectionToRavenshollow: string
      hiddenSecrets: string
    }
    relationships: {
      [characterId: string]: {
        relationshipType: string
        description: string
      }
    }
  }
}

export const characters: Character[] = [
  {
    id: "lilith",
    name: "Lilith Montesdelvalle",
    role: "Protagonista / Exorcista en formación",
    description:
      "Una joven monja novicia con un oscuro pasado y habilidades espirituales heredadas, que se ve envuelta en una serie de eventos sobrenaturales en los Andes ecuatorianos.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    imageAvatar: "/placeholder.svg?height=200&width=200",
    imageCover: "/placeholder.svg?height=800&width=1200",
    personality: ["Empática", "Resiliente", "Espiritualmente Sensible", "Curiosa"],
    backstory:
      "Lilith Montesdelvalle es una novicia con sangre indígena que ha sentido presencias desde niña. Tras un evento trágico en su adolescencia, fue llevada por la Iglesia al convento de Quito, donde se entrena como exorcista. Su conexión con lo oculto y su linaje espiritual andino la hacen única, pero también un blanco de fuerzas oscuras que habitan en los rincones olvidados del país.",
    detailedInfo: {
      overview: {
        generalDescription:
          "Lilith es una figura central en la historia: una joven dividida entre la fe católica que la acogió y sus raíces espirituales indígenas. Vive atormentada por visiones, sueños lúcidos y ecos del pasado que solo ella parece percibir. Su historia se desarrolla mientras desentraña el secreto de su familia, el convento y su rol en un conflicto ancestral.",
        roleInStory:
          "Como protagonista, Lilith es el hilo conductor de los eventos. A través de sus ojos descubrimos el horror que acecha entre las montañas. Su rol es activar la verdad dormida en el pueblo y enfrentarse a un mal antiguo. Su conexión con lo sobrenatural es tanto una bendición como una carga.",
        keyCharacteristics: [
          "Heredera de una sensibilidad espiritual poco común",
          "Capacidad empática con lo espiritual y lo humano",
          "Enfrenta constantemente dudas internas sobre su fe",
          "Capacidad de sacrificio y gran fortaleza interior",
        ],
      },
      psychology: {
        motivations:
          "Lilith busca respuestas sobre su pasado, sobre las visiones que la persiguen, y quiere comprender su rol en el mundo. Está motivada por el deseo de ayudar a otros, pero también por una inquietud existencial: ¿Está ella salvando a las almas... o condenándolas?",
        internalConflicts:
          "Su conflicto interno gira en torno a la dualidad de su identidad: fe religiosa versus herencia espiritual ancestral. La tensión entre lo que le han enseñado a creer y lo que su intuición le dice que es real la lleva a enfrentamientos internos y externos.",
        personalityTraits: {
          Empática: "Siente profundamente el dolor y las emociones de otros, tanto vivos como muertos.",
          Resiliente: "Ha enfrentado muchas pruebas emocionales y espirituales, y siempre encuentra fuerza para continuar.",
          Sensible: "Percibe presencias, símbolos y energías más allá del entendimiento ordinario.",
          Curiosa: "A pesar del miedo, siempre quiere descubrir la verdad detrás de lo que la rodea.",
        },
      },
      history: {
        origins:
          "Lilith nació en una comunidad rural en los Andes ecuatorianos. Desde niña manifestó habilidades espirituales que causaron miedo y admiración. Tras la muerte de su madre en circunstancias extrañas, fue llevada a Quito por una orden eclesiástica para ser protegida y entrenada.",
        definingTrauma:
          "Presenció la posesión y posterior muerte de su madre, un hecho que la marcó profundamente. Durante años, creyó que fue su culpa por 'no rezar lo suficiente'. Esto moldeó su necesidad de entender el mal y cómo enfrentarlo.",
        connectionToRavenshollow:
          "Aunque no es originaria del pueblo, Lilith es enviada allí como parte de una misión eclesiástica. Pronto descubre que sus raíces están conectadas con la historia oscura del lugar.",
        hiddenSecrets:
          "Lilith es descendiente directa de una línea espiritual andina que combatió fuerzas malignas siglos atrás. Ella posee un sello espiritual en su cuerpo que actúa como protección… o como puerta para algo más.",
      },
      relationships: {
        balberith: {
          relationshipType: "Guía Espiritual / Entidad Ambigua",
          description:
            "Balberith actúa como su guía entre mundos, pero sus intenciones son dudosas. Lilith lo respeta, pero no sabe si puede confiar completamente en él. Él representa tanto la llave como la trampa.",
        },
        nick: {
          relationshipType: "Amigo con Potencial Emotivo",
          description:
            "Nick y Lilith comparten momentos de vulnerabilidad. Él es uno de los pocos que la hace reír en medio del horror. Lilith siente que puede confiar en él, aunque sabe que su presencia podría ponerlo en peligro.",
        },
        kruster: {
          relationshipType: "Antagonista Inicial / Reflejo Oscuro",
          description:
            "Kruster representa lo que Lilith podría llegar a ser si cae en la oscuridad. Su relación está marcada por enfrentamientos místicos y filosóficos. Él la respeta, pero busca doblegarla a su causa.",
        },
        sheldon: {
          relationshipType: "Testigo Protegido",
          description:
            "Lilith se siente responsable por la salud mental de Sheldon. Ve en él una víctima del mal que intenta detener, y su deseo de salvarlo se convierte en uno de sus motores emocionales.",
        },
      },
    },
  },
  {
    id: "balberith",
    name: "Balberith",
    role: "Guía espiritual / Entidad ambigua",
    description: "Una antigua entidad espiritual que guía a Lilith en su camino, oscilando entre protector enigmático y posible tentador.",
    imageUrl: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298375/assets-MortiSabbat/characters/assets-MortiSabbat/characters/balberith.jpg",
    imageAvatar: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298373/assets-MortiSabbat/characters/assets-MortiSabbat/characters/balberith-castellano.jpg",
    imageCover: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750298872/assets-MortiSabbat/characters/assets-MortiSabbat/characters/balberithCover.jpg",
    personality: ["Críptico", "Antiguo", "Seductor", "Ambivalente"],
    backstory: "Balberith es una entidad de origen precolombino cuyo nombre ha sido demonizado por interpretaciones cristianas. Se manifiesta en sueños, visiones o rituales, hablando en parábolas y fragmentos de lenguas antiguas. Aunque afirma guiar a Lilith hacia la verdad, sus métodos y motivaciones generan desconfianza.",
    detailedInfo: {
      overview: {
        generalDescription: "Balberith es una figura etérea que no se alinea completamente con el bien ni el mal. Representa la sabiduría olvidada, las verdades prohibidas, y el conocimiento espiritual profundo que puede liberar... o condenar. Su forma nunca es del todo fija: aparece como anciano, niño, sombra o incluso reflejo. A veces es voz, a veces es cuerpo.",
        roleInStory: "Balberith cumple la función de guía místico, ayudando a Lilith y otros personajes a comprender los patrones ocultos detrás de los eventos. Sin embargo, su ambigüedad constante añade tensión: nunca queda claro si su objetivo es liberar a Lilith de su destino... o precipitarla hacia él.",
        keyCharacteristics: [
          "Puede manifestarse solo en estados alterados de conciencia",
          "Accede a recuerdos olvidados y conocimiento ancestral",
          "Capacidad de leer almas y revelar deseos profundos",
          "Habla en acertijos y metáforas rituales"
        ]
      },
      psychology: {
        motivations: "Balberith desea restaurar un equilibrio espiritual que fue roto por la llegada del dogma cristiano y la negación de lo ancestral. Cree que Lilith es la llave para reconciliar ambos mundos. Pero también parece tener un interés propio en que el velo entre lo humano y lo espiritual se rompa.",
        internalConflicts: "Oscila entre su rol de protector y su naturaleza como entidad que representa verdades oscuras. Está atado por antiguas promesas y sellos, lo que le impide actuar plenamente. Esta frustración lo lleva a manipular emocionalmente a quienes busca ayudar.",
        personalityTraits: {
          Críptico: "Rara vez dice algo de forma directa. Su lenguaje obliga a la reflexión o la interpretación espiritual.",
          Antiguo: "Habla con una perspectiva que trasciende el tiempo humano. Conoce eventos y secretos de eras olvidadas.",
          Seductor: "Posee un aura magnética, no sexual, sino espiritual. Su forma de hablar atrae y fascina.",
          Ambivalente: "No es ni bueno ni malo, sino una síntesis de ambos. Funciona como espejo de las intenciones humanas."
        }
      },
      history: {
        origins: "Balberith nació de la conjunción entre la espiritualidad andina y la memoria colectiva del territorio. Fue considerado un 'ushai' o espíritu guía, pero con la colonización fue renombrado como demonio y encerrado simbólicamente por la Iglesia.",
        definingTrauma: "Fue traicionado por un linaje de guardianes humanos que decidieron sellarlo para proteger a los suyos. Desde entonces, ha quedado atrapado entre planos, dependiendo de anfitriones espiritualmente abiertos para manifestarse.",
        connectionToRavenshollow: "Aunque no pertenece al pueblo, se manifiesta intensamente en esa zona por la convergencia de energía espiritual contenida en los antiguos rituales indígenas y los actos atroces cometidos en épocas posteriores.",
        hiddenSecrets: "Conoce la verdad sobre el linaje de Lilith, la corrupción del convento y el pacto realizado por ciertos miembros del clero con entidades prohibidas. También sabe cómo romper el ciclo, aunque a un alto costo."
      },
      relationships: {
        lilith: {
          relationshipType: "Guía y Tentador",
          description: "Balberith protege y guía a Lilith, pero constantemente pone a prueba su fe y moral. Representa tanto la voz de su instinto ancestral como la sombra de sus temores. Él desea liberarla, pero también la empuja hacia decisiones peligrosas."
        },
        kruster: {
          relationshipType: "Fragmento Corrupto",
          description: "Kruster fue alguna vez un recipiente fallido para Balberith. La conexión dejó secuelas: visiones, locura y habilidades parciales. Balberith lo desprecia por su inestabilidad, pero lo sigue usando como peón indirecto en el juego espiritual."
        },
        sheldon: {
          relationshipType: "Eco Espiritual",
          description: "Sheldon, en su delirio, es uno de los pocos humanos sensibles a Balberith. Percibe sus susurros como poesía, cánticos o alucinaciones. Balberith no puede controlarlo, pero lo observa como oráculo involuntario."
        },
      },
    },
  },
  {
    id: "nick",
    name: "Nick Cazas",
    role: "Aliado Dudoso",
    description: "Un joven con un pasado turbio y una conexión emocional intensa con Lilith. Su lealtad está constantemente en duda.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    imageAvatar: "https://res.cloudinary.com/dismyuce7/image/upload/f_auto,q_auto/v1750224098/assets-MortiSabbat/avatars/assets-MortiSabbat/avatars/nick-cazas.jpg",
    imageCover: "/placeholder.svg?height=800&width=1200",
    personality: ["Leal", "Impulsivo", "Inestable", "Apasionado"],
    backstory: "Nick es un exconvicto que regresó a Quito tras la muerte de su madre en circunstancias misteriosas. Conoció a Lilith en una misión pastoral donde buscaba redención, pero pronto se vio arrastrado a los fenómenos paranormales que rodean al convento y a su pasado familiar.",
    detailedInfo: {
      overview: {
        generalDescription: "Nick es un joven de corazón noble pero pasado oscuro. Su búsqueda de redención choca constantemente con la violencia que lo rodea. Aunque trata de actuar como el protector de Lilith, su propia oscuridad interna lo convierte en un riesgo tanto para ella como para sí mismo.",
        roleInStory: "Nick funciona como contraparte emocional de Lilith. Es su escudo, pero también su reflejo distorsionado: él representa lo que Lilith podría convertirse si se dejara consumir por la rabia y el dolor. A menudo se debate entre la violencia y el sacrificio, lo que crea tensiones constantes.",
        keyCharacteristics: [
          "Experto en defensa personal y entornos urbanos peligrosos",
          "Posee información callejera valiosa sobre lugares ocultos o abandonados",
          "Capaz de actos heroicos, pero también de arrebatos incontrolables",
          "Su trauma lo convierte en blanco fácil para entidades como Balberith"
        ]
      },
      psychology: {
        motivations: "Nick quiere proteger a Lilith a toda costa, incluso si eso significa sacrificar su vida o volver a la violencia. También anhela redimirse de errores del pasado que lo atormentan, relacionados con su madre, su barrio y un acto que nunca ha confesado.",
        internalConflicts: "Lucha entre su deseo de ser un hombre mejor y los impulsos destructivos que lo arrastran a la violencia. En ocasiones, teme más a sí mismo que al mundo sobrenatural. Le aterra decepcionar a Lilith, pero también desconfía del entorno religioso que ella representa.",
        personalityTraits: {
          Leal: "Haría cualquier cosa por proteger a quienes ama, incluso si eso significa romper la ley.",
          Impulsivo: "Actúa sin pensar cuando siente que hay una amenaza cercana, lo que puede arruinar planes cuidadosamente trazados.",
          Inestable: "Su pasado emocional y sus traumas lo hacen vulnerable a crisis repentinas.",
          Apasionado: "Su intensidad emocional lo convierte en un ser magnético, pero también volátil."
        }
      },
      history: {
        origins: "Nació en el sur de Quito en un entorno lleno de violencia doméstica y pandillas. A los 17 fue arrestado por un delito que aún no se ha revelado completamente. Cumplió condena en un centro juvenil. Su acercamiento a la religión fue inicialmente forzado, pero luego se tornó en genuina búsqueda de sentido.",
        definingTrauma: "Presenció la muerte de su madre a manos de una figura desconocida durante un rito en una casa abandonada. Desde entonces, sufre pesadillas recurrentes y lagunas mentales sobre esa noche. Sospecha que la muerte no fue normal.",
        connectionToRavenshollow: "Nick sigue a Lilith hasta los sectores rurales al descubrir conexiones entre las visiones de ella y las últimas palabras delirantes de su madre antes de morir. En el pueblo, se convierte en una figura de tensión: es visto como un forastero peligroso.",
        hiddenSecrets: "Esconde que, en su juventud, fue parte de un culto urbano menor que realizaba 'rituales de iniciación'. Tiene marcas físicas (tatuajes ocultos) y visiones provocadas por aquello. No sabe si Balberith fue una ilusión o una aparición real en esa época."
      },
      relationships: {
        lilith: {
          relationshipType: "Protector Enamorado",
          description: "Nick siente un amor profundo por Lilith, pero su impulso por protegerla puede convertirse en posesividad. Ella es su faro y su tentación, lo único que le da esperanza... pero también el punto más débil de su estabilidad emocional."
        },
        balberith: {
          relationshipType: "Tensión Psíquica",
          description: "Balberith se ha manifestado en los sueños de Nick en forma de fuego y sombra. Nick siente que esta entidad lo conoce desde su niñez. Aunque lo rechaza, a veces se ve tentado por el poder y la liberación que Balberith ofrece."
        },
        kruster: {
          relationshipType: "Antagonismo Instintivo",
          description: "Nick odia a Kruster casi inmediatamente: siente que hay algo profundamente erróneo en él, algo inhumano. Kruster, por su parte, lo ve como una amenaza al equilibrio espiritual que intenta preservar con Sheldon."
        },
        sheldon: {
          relationshipType: "Curiosidad Ambigua",
          description: "Nick no entiende a Sheldon, pero a veces siente que habla verdades en medio de su delirio. En un momento clave, Sheldon le ofrece un consejo que cambia el rumbo de su historia."
        },
      },
    },
  },
  {
    id: "kruster",
    name: "Kruster",
    role: "Guardián del Umbral",
    description: "Un ermitaño que vive entre los páramos de Quito. Guarda secretos que protegen —o amenazan— la realidad.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    imageAvatar: "/placeholder.svg?height=200&width=200",
    imageCover: "/placeholder.svg?height=800&width=1200",
    personality: ["Críptico", "Espiritual", "Frío", "Ambiguo"],
    backstory: "Kruster apareció en los registros de la región hace más de dos décadas, sin identificación ni pasado conocido. Vive en los páramos al este de Quito, cerca de un sitio ceremonial indígena donde ocurren fenómenos extraños. Algunos lo llaman chamán, otros loco. La verdad es mucho más compleja.",
    detailedInfo: {
      overview: {
        generalDescription: "Kruster es una figura ancestral que parece conocer los límites entre el mundo físico y el espiritual. No responde a las leyes del tiempo de forma común: su percepción parece abarcar más allá de lo lineal. Sabe cosas que no debería saber. Habla en parábolas y sus actos están guiados por una lógica espiritual incomprensible para la mayoría.",
        roleInStory: "Kruster es un antagonista y aliado según el momento. Su presencia advierte que todo lo que ocurre ya ha pasado antes, en ciclos invisibles. Sirve como el Guardián del Umbral entre lo humano y lo innombrable, lo consciente y lo subconsciente. Es quien pone a prueba la voluntad de los personajes y su capacidad para romper con el destino impuesto.",
        keyCharacteristics: [
          "Portador de saberes ocultos ancestrales",
          "Vive entre ruinas y sitios ceremoniales olvidados",
          "No actúa por emociones, sino por equilibrios cósmicos",
          "Capaz de desaparecer o aparecer en sitios remotos sin explicación"
        ]
      },
      psychology: {
        motivations: "Kruster busca preservar el equilibrio entre el mundo visible y las fuerzas subterráneas que desean romperlo. No actúa por moralidad, sino por armonía espiritual. En su visión, todo sacrificio tiene un propósito si se mantiene el equilibrio natural entre los mundos.",
        internalConflicts: "Aunque actúa como agente de equilibrio, Kruster es consciente de que su humanidad se está erosionando. A veces duda si sigue siendo un ser humano o una extensión de algo más antiguo. En esos momentos de fisura espiritual, muestra angustia silenciosa.",
        personalityTraits: {
          Críptico: "Habla con metáforas y enigmas, lo que impide saber si ayuda o manipula.",
          Espiritual: "Opera con códigos y principios que trascienden lo material o religioso.",
          Frío: "No demuestra empatía por el sufrimiento individual si va en contra del equilibrio universal.",
          Ambiguo: "Sus acciones pueden salvar o condenar, dependiendo del punto de vista."
        }
      },
      history: {
        origins: "Nadie sabe de dónde vino Kruster. Algunas leyendas urbanas lo describen como un niño perdido durante los desalojos rurales de los 70, otros lo asocian con un espíritu de la montaña que tomó forma humana. Él afirma haber sido 'invocado por necesidad, no por deseo'.",
        definingTrauma: "Durante un eclipse en los años 90, Kruster fue el único testigo de un evento en el páramo que rompió la frontera entre el mundo natural y lo oculto. Desde entonces, fue 'tocado' por algo externo. Ya no envejece de forma normal.",
        connectionToRavenshollow: "Aunque vive fuera del pueblo, Kruster conoce todos sus secretos. A veces aparece sin ser llamado en momentos clave. Tiene acceso a túneles, símbolos y mapas que otros no pueden interpretar. Es temido por los ancianos y negado por las autoridades.",
        hiddenSecrets: "Kruster fue uno de los responsables indirectos de liberar la presencia que ahora intenta poseer a Lilith. Lo hizo para evitar una catástrofe mayor, pero su decisión tuvo consecuencias. Oculta que fue mentor espiritual de Sheldon en su juventud."
      },
      relationships: {
        lilith: {
          relationshipType: "Sujeto de Prueba Espiritual",
          description: "Kruster observa a Lilith como un elemento de ruptura en el ciclo eterno. Cree que puede ser la llave para liberar o sellar el equilibrio ancestral. Intenta guiarla sin intervenir, pero se ve obligado a actuar cuando las reglas del otro lado se rompen."
        },
        balberith: {
          relationshipType: "Antiguo Oponente",
          description: "Kruster y Balberith tienen un conflicto espiritual ancestral. Uno busca la preservación del equilibrio cósmico, el otro la transformación del mundo humano mediante el fuego y la verdad impía. Ambos se reconocen como fuerzas contrarias necesarias."
        },
        nick: {
          relationshipType: "Presencia Amenazante",
          description: "Kruster percibe a Nick como una chispa caótica. No lo odia, pero teme lo que podría liberar si se rompe emocionalmente. Lo provoca para ponerlo a prueba, casi como un oráculo."
        },
        sheldon: {
          relationshipType: "Discípulo Caído",
          description: "Sheldon fue entrenado por Kruster en prácticas rituales cuando era niño, pero perdió el equilibrio mental. Kruster no lo detuvo, pues creía que debía seguir su destino. Sin embargo, aún siente cierta responsabilidad y aparece ocasionalmente para protegerlo."
        },
      },
    },
  },
  {
    id: "sheldon",
    name: "Sheldon R. Torres",
    role: "Testigo Fragmentado",
    description: "Un joven perturbado que habla en acertijos y dibujos. Su mente rota esconde claves para descifrar el horror.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    imageAvatar: "/placeholder.svg?height=200&width=200",
    imageCover: "/placeholder.svg?height=800&width=1200",
    personality: ["Inestable", "Visionario", "Sensitivo", "Infantil"],
    backstory: "Sheldon creció en la periferia de Quito, en una comunidad marginada donde las creencias ancestrales aún persistían. De niño fue encontrado hablando con piedras y árboles. Internado varias veces, nadie logró 'curarlo'. Fue discípulo de Kruster brevemente, hasta que un evento rompió su mente en fragmentos. Desde entonces, dibuja compulsivamente símbolos, figuras y rostros que coinciden con entidades que nadie más ha visto.",
    detailedInfo: {
      overview: {
        generalDescription: "Sheldon es un personaje liminal, atrapado entre la realidad consensuada y una dimensión alternativa que percibe constantemente. Considerado loco por los demás, actúa como un oráculo distorsionado. Su arte y sus murmullos contienen pistas que, si se interpretan correctamente, revelan los secretos que todos temen nombrar.",
        roleInStory: "Sheldon representa la memoria oculta del pueblo. Su comportamiento errático y aparentemente sin sentido esconde mensajes codificados sobre el origen de los eventos paranormales. Ayuda a los personajes principales de forma indirecta, y a veces, involuntaria. Es una figura trágica cuyo sufrimiento da acceso a la verdad.",
        keyCharacteristics: [
          "Comunicación simbólica a través de dibujos obsesivos",
          "Capacidad extrasensorial para percibir entidades y eventos futuros",
          "Trastornos mentales severos que dificultan su expresión verbal",
          "Relación espiritual inconclusa con el mundo oculto"
        ]
      },
      psychology: {
        motivations: "Aunque su mente está fragmentada, Sheldon busca desesperadamente proteger lo poco que entiende como real. Su motivación más profunda es evitar que los demás sufran lo que él vivió. A través de sus visiones intenta advertir de peligros futuros, aunque nadie siempre lo entienda.",
        internalConflicts: "Sheldon no sabe cuándo está soñando y cuándo está despierto. Confunde a los vivos con los muertos, y los objetos con entidades. Sufre crisis existenciales constantes, luchando por mantener su identidad entre recuerdos que no le pertenecen. Tiene miedo de sí mismo y de lo que podría liberar sin querer.",
        personalityTraits: {
          Inestable: "Sus emociones cambian bruscamente. Puede pasar de la calma al pánico en segundos.",
          Visionario: "Sus percepciones distorsionadas contienen verdades ocultas que otros no pueden ver.",
          Sensitivo: "Reacciona a presencias invisibles y espacios con carga espiritual sin necesidad de contacto físico.",
          Infantil: "Su manera de hablar, moverse y relacionarse conserva rasgos de su infancia traumática."
        }
      },
      history: {
        origins: "Sheldon nació en un entorno de pobreza y abandono. Desde muy temprana edad comenzó a tener visiones y episodios de trance. Su familia lo rechazó y fue acogido por Kruster, quien intentó canalizar sus dones. Sin embargo, durante un ritual de alineación espiritual, Sheldon sufrió una ruptura psíquica irreparable.",
        definingTrauma: "A los 9 años, Sheldon presenció (o fue parte de) un portal abierto en los páramos. Las formas que emergieron de allí lo persiguen desde entonces. Lo que vio lo marcó de por vida, y lo dejó con recuerdos fragmentarios de otro mundo que lucha por entrar en el suyo.",
        connectionToRavenshollow: "Aunque no vive en el centro del pueblo, Sheldon deambula por sus límites. A veces aparece en momentos clave, como si sintiera los cambios de energía. Sus dibujos han comenzado a coincidir con eventos recientes en el lugar, lo que lo convierte en un objetivo de interés para todos los involucrados.",
        hiddenSecrets: "Sheldon ha dibujado a Lilith antes de conocerla, en escenas que no han ocurrido aún. Tiene recuerdos que pertenecen al Dr. Hayes, y símbolos que Balberith considera 'prohibidos'. Él mismo no comprende lo que su mente canaliza, pero parece estar a punto de 'romper la barrera' entre ambos mundos si se lo fuerza demasiado."
      },
      relationships: {
        lilith: {
          relationshipType: "Conexión Espiritual Inexplicable",
          description: "Sheldon reconoce a Lilith como 'la que rompe los sellos'. Le teme y la adora al mismo tiempo. Le deja dibujos con advertencias, algunos de los cuales muestran escenas de su futuro. Lilith es una figura clave en sus visiones."
        },
        kruster: {
          relationshipType: "Mentor Perdido",
          description: "Kruster intentó instruir a Sheldon en las artes del equilibrio espiritual, pero el niño era demasiado sensible. La ruptura mental de Sheldon hizo que Kruster se alejara, aunque aún lo protege desde las sombras. Sheldon lo llama 'el que sabe'."
        },
        nick: {
          relationshipType: "Vínculo de Dolor",
          description: "Nick intenta ayudar a Sheldon y protegerlo, pero Sheldon ve en Nick un fuego que 'devora puertas'. A veces lo ataca sin razón aparente, y otras lo sigue en silencio. Ambos comparten sueños que no pueden explicar."
        },
        balberith: {
          relationshipType: "Canal de Manifestación",
          description: "Balberith observa a Sheldon como un portal latente. Aunque no puede poseerlo, utiliza sus visiones para comunicarse. Sheldon dibuja sin saberlo símbolos que pertenecen al dominio de Balberith. Esto lo debilita mentalmente más cada día."
        },
      },
    },
  },
  {
    id: "agnus",
    name: "Agnus Segoya",
    role: "Antagonista",
    description: "Un granjero de aspecto imponente que esconde una mente maquiavélica detrás de su fachada rústica.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    imageAvatar: "/placeholder.svg?height=200&width=200",
    imageCover: "/placeholder.svg?height=800&width=1200",
    personality: ["Manipulador", "Carismático", "Rencoroso", "Visionario"],
    backstory:
      "Agnus Segoya ha vivido toda su vida en las tierras áridas al borde de Quito rural. Conocido como un granjero dedicado, su pasado está marcado por tragedias familiares y un misterioso legado oculto. Con el tiempo, desarrolló un profundo resentimiento hacia la comunidad por lo que considera una traición ancestral, y desde entonces ha planeado meticulosamente su venganza espiritual y simbólica.",
    detailedInfo: {
      overview: {
        generalDescription:
          "Agnus Segoya aparenta ser un hombre simple, un granjero de rostro curtido por el sol y manos endurecidas por el trabajo. Pero tras su fachada se oculta un individuo extremadamente inteligente, con creencias esotéricas heredadas de sus ancestros y un plan a largo plazo para desatar una purificación oscura en la región. Se mueve entre lo mundano y lo místico con facilidad, ganándose la confianza de los incautos.",
        roleInStory:
          "Como antagonista central, Agnus representa la amenaza real y simbólica para los protagonistas. Su influencia se extiende más allá de lo físico, infiltrando los sueños, la memoria colectiva y los rituales locales. Es el eje del misterio, un hombre que ha cruzado la línea entre lo humano y lo inhumano, creyendo que su visión es necesaria para 'sanar' el mundo.",
        keyCharacteristics: [
          "Carisma peligroso que le permite manipular a otros sutilmente",
          "Conocimientos arcanos heredados de grimorios familiares",
          "Conexión con entidades antiguas a través de rituales ancestrales",
          "Capacidad para inspirar miedo o devoción en quienes lo rodean",
        ],
      },
      psychology: {
        motivations:
          "Agnus desea restablecer lo que considera el equilibrio natural entre el mundo espiritual y el humano, cueste lo que cueste. Cree que la corrupción moderna debe ser erradicada y que solo a través del dolor y la oscuridad puede renacer una nueva verdad. Su motivación no es meramente malvada: cree profundamente en la justicia mística, aunque su interpretación de esta sea distorsionada.",
        internalConflicts:
          "Lucha internamente entre su sed de venganza personal y su creencia de que está cumpliendo un destino espiritual. Aunque se presenta como frío y calculador, hay momentos en los que la culpa por lo que ha hecho lo desestabiliza emocionalmente. Está obsesionado con evitar el fracaso, ya que eso significaría la irrelevancia de su vida y legado.",
        personalityTraits: {
          Manipulador: "Sabe leer a las personas y explotar sus debilidades emocionales con palabras precisas.",
          Carismático: "Tiene una presencia magnética que genera respeto o sumisión inmediata.",
          Rencoroso: "No olvida las humillaciones pasadas y construye su venganza lentamente y en silencio.",
          Visionario: "Cree firmemente en una nueva era que solo él puede desencadenar, aunque deba destruir todo para lograrlo.",
        },
      },
      history: {
        origins:
          "Agnus nació en una familia marcada por rumores de brujería y antiguos pactos olvidados. Criado entre rezos, tierra húmeda y rituales prohibidos, absorbió desde joven la idea de que estaba destinado a algo más grande. Nunca abandonó su finca ancestral, convertida hoy en un nido de secretos y portales hacia lo desconocido.",
        definingTrauma:
          "Cuando era joven, su madre fue ejecutada en un linchamiento público acusado de brujería. Este acto lo marcó profundamente, sembrando un odio en su alma que transformó su vida en una cruzada por la venganza contra quienes niegan lo oculto.",
        connectionToRavenshollow:
          "Aunque vive en las afueras, Agnus tiene lazos profundos con familias y linajes de Ravenshollow. Es un testigo silencioso de la decadencia moral del pueblo y ha ido tejiendo redes de influencia espiritual y psicológica durante décadas.",
        hiddenSecrets:
          "Guarda un grimorio familiar encuadernado en cuero humano con profecías oscuras. Ha realizado sacrificios ocultos y tiene conexiones con entidades extradimensionales. También fue quien selló el destino de varios personajes claves, manipulando sus decisiones desde las sombras.",
      },
      relationships: {
        lilith: {
          relationshipType: "Obsesión Espiritual",
          description:
            "Ve en Lilith a una figura sagrada destinada a desempeñar un papel clave en su ritual final. La admira y teme, deseando doblegar su voluntad sin destruir su esencia.",
        },
        balberith: {
          relationshipType: "Rival Espiritual",
          description:
            "Agnus y Balberith comparten conocimientos ocultos, pero se enfrentan por sus visiones opuestas del equilibrio. Ambos representan polos enfrentados del poder ancestral.",
        },
        nick: {
          relationshipType: "Peón Rechazado",
          description:
            "Intentó manipular a Nick durante años a través de sueños y promesas de redención, pero al fracasar, lo ve ahora como una amenaza que debe ser silenciada.",
        },
        kruster: {
          relationshipType: "Cómplice Inestable",
          description:
            "Kruster, aunque inestable, ha sido útil para los planes de Agnus. Le permite hacer el trabajo sucio sin exponerse, pero lo desprecia profundamente.",
        },
        sheldon: {
          relationshipType: "Sombra de un Pasado",
          description:
            "Agnus y Sheldon comparten un lazo ancestral. Sheldon desconoce su vínculo familiar oscuro, pero Agnus lo vigila con lástima y desprecio, sabiendo que podría ser la clave para sellar o liberar la oscuridad final.",
        },
      },
    },
  },
]
