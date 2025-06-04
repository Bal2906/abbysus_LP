export interface Character {
  id: string
  name: string
  role: string
  description: string
  imageUrl: string
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
      connectionToMortiSabbat: string
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
    id: "elena",
    name: "Elena Blackwood",
    role: "Protagonista",
    description: "Una psicóloga forense que investiga una serie de desapariciones misteriosas en un pequeño pueblo.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    personality: ["Analítica", "Determinada", "Empática", "Cautelosa"],
    backstory:
      "Elena perdió a su hermana menor en circunstancias misteriosas hace 10 años. Ahora, como psicóloga forense, usa su experiencia para ayudar a otros, pero cuando llega a MortiSabbat, los recuerdos de su pasado comienzan a atormentarla.",
    detailedInfo: {
      overview: {
        generalDescription:
          "Elena Blackwood es una psicóloga forense reconocida por su capacidad excepcional para desentrañar los misterios más complejos de la mente humana. Su llegada a MortiSabbat no es casualidad: está siguiendo pistas que podrían revelar la verdad sobre la desaparición de su hermana menor hace una década.",
        roleInStory:
          "Como protagonista, Elena guía al jugador a través del misterio de MortiSabbat. Sus decisiones no solo afectarán el curso de la investigación, sino que determinarán su estabilidad mental y su capacidad para distinguir entre la realidad y las alucinaciones que comienzan a atormentarla.",
        keyCharacteristics: [
          "Capacidad analítica excepcional para resolver casos complejos",
          "Trauma personal que la impulsa a buscar justicia para otros",
          "Vulnerabilidad psicológica que la hace susceptible a los horrores de MortiSabbat",
          "Determinación inquebrantable que a veces la lleva a tomar riesgos peligrosos",
        ],
      },
      psychology: {
        motivations:
          "Elena está impulsada principalmente por la búsqueda de la verdad sobre su hermana desaparecida y un fuerte sentido de justicia. Su trabajo como psicóloga forense le ha dado propósito, pero también la ha expuesto a los aspectos más oscuros de la naturaleza humana, creando una dualidad entre su deseo de ayudar y su creciente cinismo.",
        internalConflicts:
          "A pesar de su exterior analítico, Elena lucha internamente con el trauma de su pasado y el miedo a descubrir una verdad insoportable sobre su hermana. Su profesionalismo choca constantemente con sus emociones personales, y debe enfrentar la posibilidad de que su búsqueda de respuestas pueda destruir lo poco que le queda de estabilidad mental.",
        personalityTraits: {
          Analítica: "Examina cada detalle con precisión científica, buscando patrones donde otros ven caos.",
          Determinada: "Persigue sus objetivos sin descanso, incluso cuando el costo personal es alto.",
          Empática: "Conecta profundamente con el sufrimiento de otros, lo que la hace vulnerable emocionalmente.",
          Cautelosa: "Evalúa riesgos cuidadosamente, aunque su trauma personal a veces nubla su juicio.",
        },
      },
      history: {
        origins:
          "Antes de los eventos de MortiSabbat, Elena trabajaba como psicóloga forense en casos de alto perfil en la ciudad, ganando reconocimiento por su capacidad para entender la mente criminal. Su reputación se construyó sobre su habilidad para mantener la objetividad profesional incluso en los casos más perturbadores.",
        definingTrauma:
          "La desaparición de su hermana menor, Lily, hace 10 años la ha perseguido cada día desde entonces. Lily desapareció sin dejar rastro durante una excursión familiar, y a pesar de una búsqueda exhaustiva, nunca se encontró evidencia de lo que le ocurrió. Este evento transformó a Elena de una joven optimista en una profesional obsesionada con encontrar respuestas.",
        connectionToMortiSabbat:
          "Elena descubre que la desaparición de su hermana podría estar conectada con los eventos actuales en MortiSabbat cuando encuentra similitudes inquietantes en los patrones de desaparición. Un testimonio anónimo la lleva a este pueblo remoto, donde espera encontrar finalmente las respuestas que ha buscado durante una década.",
        hiddenSecrets:
          "Elena oculta el hecho de que ha estado experimentando alucinaciones relacionadas con su hermana desde hace años. También mantiene en secreto que ha estado tomando medicación para la ansiedad y que su licencia profesional está bajo revisión debido a su comportamiento errático en casos recientes.",
      },
      relationships: {
        marcus: {
          relationshipType: "Antagonista Principal",
          description:
            "Una relación tensa llena de desconfianza y peligro. Marcus parece conocer más sobre el pasado de Elena de lo que debería, y sus encuentros están cargados de una tensión psicológica que hace que Elena cuestione su propia cordura.",
        },
        sarah: {
          relationshipType: "Aliada Crucial",
          description:
            "Una alianza crucial basada en objetivos compartidos. Sarah se convierte en la única persona en quien Elena puede confiar en MortiSabbat, aunque ambas mujeres guardan secretos que podrían cambiar la naturaleza de su amistad.",
        },
        "dr-hayes": {
          relationshipType: "Mentor Complejo",
          description:
            "Una relación de aprendizaje y guía en momentos críticos. El Dr. Hayes parece genuinamente preocupado por el bienestar de Elena, pero sus consejos a menudo vienen acompañados de advertencias crípticas que sugieren que sabe más de lo que revela.",
        },
      },
    },
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Antagonista",
    description:
      "Un enigmático residente del pueblo con secretos oscuros y una conexión perturbadora con las desapariciones.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    personality: ["Carismático", "Manipulador", "Inteligente", "Peligroso"],
    backstory:
      "Marcus ha vivido en MortiSabbat toda su vida. Conoce todos los secretos del pueblo y parece estar siempre un paso adelante de Elena. Su sonrisa encantadora oculta intenciones siniestras.",
    detailedInfo: {
      overview: {
        generalDescription:
          "Marcus Thorne es una figura enigmática que ha vivido en MortiSabbat durante décadas, convirtiéndose en una especie de historiador no oficial del pueblo. Su conocimiento íntimo de los secretos locales y su capacidad para aparecer en los momentos más inoportunos lo convierten en una presencia constante y perturbadora en la investigación de Elena.",
        roleInStory:
          "Como antagonista principal, Marcus representa el principal obstáculo y amenaza para Elena. No es un villano tradicional, sino una fuerza más sutil y psicológicamente compleja que manipula eventos desde las sombras, siempre manteniéndose un paso adelante de quienes intentan desentrañar sus verdaderas intenciones.",
        keyCharacteristics: [
          "Conocimiento enciclopédico de la historia oculta de MortiSabbat",
          "Habilidad sobrenatural para manipular situaciones y personas",
          "Presencia magnética que atrae y repele simultáneamente",
          "Conexión misteriosa con los eventos sobrenaturales del pueblo",
        ],
      },
      psychology: {
        motivations:
          "Marcus está impulsado por objetivos ocultos relacionados con los secretos más oscuros de MortiSabbat. Su motivación parece estar arraigada en eventos traumáticos de su pasado que lo han llevado a ver el pueblo como su dominio personal, donde él controla el flujo de información y el destino de quienes se atreven a investigar demasiado profundamente.",
        internalConflicts:
          "A pesar de su exterior carismático, Marcus lucha internamente con conflictos morales que ocasionalmente revelan destellos de humanidad. Hay momentos donde su máscara se desliza, mostrando a un hombre atormentado por decisiones pasadas y atrapado en un ciclo de comportamiento que ya no puede controlar completamente.",
        personalityTraits: {
          Carismático: "Atrae e influencia a otros naturalmente, usando su encanto como herramienta de manipulación.",
          Manipulador: "Controla situaciones para su beneficio, orquestando eventos con precisión calculada.",
          Inteligente: "Posee agudeza mental excepcional y comprensión profunda de la psicología humana.",
          Peligroso: "Representa una amenaza constante, no solo física sino psicológica y emocional.",
        },
      },
      history: {
        origins:
          "Marcus ha estado involucrado en los eventos misteriosos de MortiSabbat desde mucho antes de la llegada de Elena. Ha vivido en el pueblo durante la mayor parte de su vida adulta, estableciendo conexiones con prácticamente todos los residentes y convirtiéndose en una figura central en la comunidad, aunque siempre desde las sombras.",
        definingTrauma:
          "Un evento traumático en su juventud, posiblemente relacionado con una pérdida personal devastadora, transformó a Marcus y moldeó su visión distorsionada del mundo. Este trauma lo llevó a desarrollar una filosofía nihilista que justifica sus acciones más oscuras como parte de un orden natural inevitable.",
        connectionToMortiSabbat:
          "Marcus tiene raíces profundas en MortiSabbat y conoce secretos ancestrales del lugar que se remontan a generaciones. Su familia ha estado conectada con los eventos sobrenaturales del pueblo durante décadas, y él ha heredado tanto el conocimiento como la responsabilidad de mantener ciertos secretos ocultos.",
        hiddenSecrets:
          "Marcus guarda secretos sobre la verdadera naturaleza de las desapariciones en MortiSabbat y su papel en ellas. También oculta una conexión personal con la hermana desaparecida de Elena, así como conocimiento sobre rituales antiguos que podrían estar relacionados con los eventos sobrenaturales del pueblo.",
      },
      relationships: {
        elena: {
          relationshipType: "Adversario Psicológico",
          description:
            "Un juego del gato y el ratón donde Marcus siempre parece estar un paso adelante. Su relación con Elena está cargada de tensión sexual y psicológica, con Marcus usando su conocimiento sobre el pasado de ella para mantenerla desequilibrada emocionalmente.",
        },
        sarah: {
          relationshipType: "Enemigo Oculto",
          description:
            "Una relación compleja donde las verdaderas intenciones permanecen ocultas. Marcus ve a Sarah como una amenaza a sus planes y trabaja sutilmente para socavar su investigación, aunque respeta su tenacidad y habilidades periodísticas.",
        },
        "dr-hayes": {
          relationshipType: "Aliado Incómodo",
          description:
            "Una historia compartida con secretos que podrían cambiar todo. Marcus y el Dr. Hayes tienen un pasado común que los une en una alianza incómoda, donde ambos guardan secretos que podrían destruir al otro si fueran revelados.",
        },
      },
    },
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Aliada",
    description: "Una periodista investigativa que llegó al pueblo siguiendo la misma pista que Elena.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    personality: ["Valiente", "Curiosa", "Leal", "Impulsiva"],
    backstory:
      "Sarah ha estado investigando una red de desapariciones que se extiende por varios pueblos pequeños. Su llegada a MortiSabbat no es coincidencia, y pronto se convierte en la única persona en quien Elena puede confiar.",
    detailedInfo: {
      overview: {
        generalDescription:
          "Sarah Chen es una periodista investigativa independiente especializada en casos sin resolver y fenómenos inexplicables. Su llegada a MortiSabbat es el resultado de meses de investigación meticulosa que la ha llevado a descubrir patrones inquietantes en desapariciones que se extienden por varios estados.",
        roleInStory:
          "Como aliada principal de Elena, Sarah ofrece apoyo crucial en momentos de necesidad y aporta habilidades complementarias a la investigación. Su perspectiva externa y sus contactos en el mundo del periodismo proporcionan recursos valiosos, aunque su naturaleza impulsiva a veces pone en peligro tanto su seguridad como la de Elena.",
        keyCharacteristics: [
          "Red extensa de contactos en fuerzas del orden y medios de comunicación",
          "Habilidades excepcionales de investigación y documentación",
          "Valentía que a veces roza la imprudencia",
          "Intuición periodística para detectar mentiras y encubrimientos",
        ],
      },
      psychology: {
        motivations:
          "Sarah está impulsada por el deseo de exponer la verdad y ayudar a quienes están en peligro. Su motivación personal surge de la pérdida de su mejor amiga en circunstancias misteriosas, lo que la llevó a especializarse en casos de personas desaparecidas. Ve cada caso como una oportunidad de obtener justicia para las víctimas y sus familias.",
        internalConflicts:
          "Sarah lucha internamente con dudas sobre quién merece realmente su confianza. Su experiencia como periodista la ha vuelto naturalmente escéptica, pero su naturaleza empática la lleva a querer creer en las personas. Esta dualidad crea tensión cuando debe decidir cuánta información compartir y con quién.",
        personalityTraits: {
          Valiente: "Enfrenta el peligro sin temor, a menudo subestimando las amenazas reales.",
          Curiosa: "Busca constantemente respuestas, incluso cuando sería más seguro ignorar ciertas preguntas.",
          Leal: "Mantiene firme su compromiso con quienes considera aliados verdaderos.",
          Impulsiva: "Actúa rápido sin pensar completamente en las consecuencias de sus acciones.",
        },
      },
      history: {
        origins:
          "Sarah ha seguido una serie de desapariciones similares a través de varios pueblos pequeños durante los últimos tres años, estableciendo conexiones que las autoridades locales han pasado por alto. Su trabajo independiente la ha llevado a desarrollar teorías sobre una red más amplia de actividad criminal o sobrenatural.",
        definingTrauma:
          "Sarah perdió a su mejor amiga, Jessica, en circunstancias misteriosas durante su último año de universidad. Jessica desapareció después de investigar rumores sobre actividades extrañas en un pueblo rural, y su cuerpo nunca fue encontrado. Este evento transformó a Sarah de estudiante de comunicaciones en una periodista obsesionada con casos sin resolver.",
        connectionToMortiSabbat:
          "Las investigaciones de Sarah la llevaron a MortiSabbat cuando descubrió patrones inquietantes similares a otros casos en los que ha trabajado. Su llegada al pueblo coincide con la de Elena, pero Sarah ha estado rastreando estas conexiones durante mucho más tiempo y tiene información que podría ser crucial para resolver el misterio.",
        hiddenSecrets:
          "Sarah oculta el hecho de que ha estado en contacto con un informante anónimo que le ha proporcionado información sobre MortiSabbat. También mantiene en secreto que ha encontrado evidencia de que las desapariciones podrían estar conectadas con una organización más grande, pero no está segura de en quién puede confiar con esta información.",
      },
      relationships: {
        elena: {
          relationshipType: "Aliada Confiable",
          description:
            "Una amistad forjada en la adversidad y la búsqueda de la verdad. Sarah y Elena desarrollan una confianza mutua basada en objetivos compartidos, aunque ambas guardan secretos que podrían complicar su alianza si fueran revelados.",
        },
        marcus: {
          relationshipType: "Adversario Cauteloso",
          description:
            "Una relación de sospecha y confrontación constante. Sarah desconfía instintivamente de Marcus y ve a través de su fachada encantadora, lo que la convierte en una amenaza para sus planes y hace que él la vea como un obstáculo que debe ser neutralizado.",
        },
        "dr-hayes": {
          relationshipType: "Fuente de Información",
          description:
            "Una relación de respeto mutuo y colaboración cautelosa. Sarah reconoce la experiencia del Dr. Hayes y su conocimiento del pueblo, pero también sospecha que él sabe más de lo que está dispuesto a revelar sobre los eventos misteriosos de MortiSabbat.",
        },
      },
    },
  },
  {
    id: "dr-hayes",
    name: "Dr. Jonathan Hayes",
    role: "Mentor",
    description: "El médico del pueblo que ha sido testigo de eventos extraños durante décadas.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    personality: ["Sabio", "Protector", "Misterioso", "Atormentado"],
    backstory:
      "El Dr. Hayes ha sido el médico de MortiSabbat por más de 30 años. Ha visto cosas que no puede explicar y lleva el peso de secretos que podrían destruir el pueblo... o salvarlo.",
    detailedInfo: {
      overview: {
        generalDescription:
          "El Dr. Jonathan Hayes es una figura paternal en MortiSabbat, respetado por su dedicación médica y su conocimiento profundo de la historia del pueblo. Durante más de tres décadas, ha sido testigo de eventos que desafían la explicación racional, convirtiéndolo en un guardián reluctante de secretos que podrían cambiar la comprensión de la realidad misma.",
        roleInStory:
          "Como mentor, el Dr. Hayes proporciona sabiduría y conocimiento esencial para avanzar en la investigación, aunque sus consejos a menudo vienen envueltos en advertencias crípticas. Su papel es complejo: quiere proteger tanto a Elena como al pueblo, pero debe equilibrar la revelación de verdades peligrosas con la preservación de vidas inocentes.",
        keyCharacteristics: [
          "Conocimiento médico y científico que le permite entender aspectos únicos del misterio",
          "Memoria vivida de eventos históricos que otros han olvidado o negado",
          "Red de confianza con los residentes más antiguos del pueblo",
          "Carga emocional de decisiones pasadas que continúan atormentándolo",
        ],
      },
      psychology: {
        motivations:
          "El Dr. Hayes está motivado por el deseo de proteger al pueblo y enmendar errores del pasado. Su experiencia como médico le ha enseñado el valor de la vida humana, pero también ha sido testigo de horrores que lo han llevado a tomar decisiones moralmente ambiguas para el 'bien mayor'. Su motivación principal es encontrar una manera de romper el ciclo de eventos sobrenaturales sin causar más daño.",
        internalConflicts:
          "El Dr. Hayes lucha con secretos que ha guardado durante décadas y que ahora amenazan con salir a la luz. Debe decidir constantemente entre revelar verdades que podrían ayudar a Elena pero poner en peligro al pueblo, o mantener el silencio y permitir que los eventos sigan su curso natural. Su juramento hipocrático choca con la realidad sobrenatural que ha presenciado.",
        personalityTraits: {
          Sabio: "Posee conocimiento y experiencia acumulados durante décadas de servicio médico y observación.",
          Protector: "Defiende a quienes valora, incluso cuando eso significa tomar decisiones difíciles.",
          Misterioso: "Oculta secretos importantes, no por malicia sino por necesidad percibida.",
          Atormentado: "Carga con traumas del pasado y el peso de decisiones que han tenido consecuencias duraderas.",
        },
      },
      history: {
        origins:
          "El Dr. Hayes ha dedicado su vida a proteger a los habitantes de MortiSabbat, aunque esto ha significado ocultar verdades terribles y tomar decisiones que han pesado en su conciencia durante décadas. Llegó al pueblo como un joven médico idealista, pero los eventos que presenció lo transformaron en un guardián cauteloso de secretos peligrosos.",
        definingTrauma:
          "Un incidente catastrófico ocurrido hace 30 años en MortiSabbat cambió para siempre al Dr. Hayes. Durante este evento, se vio obligado a tomar decisiones que salvaron vidas pero también establecieron un patrón de encubrimiento que ha continuado hasta el presente. Las consecuencias de sus acciones durante esta crisis continúan atormentándolo.",
        connectionToMortiSabbat:
          "El Dr. Hayes ha sido el médico de MortiSabbat por más de 30 años, convirtiéndose en una institución en el pueblo. Su posición le ha dado acceso a información médica y personal sobre prácticamente todos los residentes, así como conocimiento de primera mano sobre eventos que otros han elegido olvidar.",
        hiddenSecrets:
          "El Dr. Hayes guarda secretos sobre experimentos médicos no autorizados que se realizaron en el pueblo décadas atrás, así como conocimiento sobre la verdadera naturaleza de las desapariciones. También oculta su papel en el encubrimiento de eventos sobrenaturales y su conexión con organizaciones externas que han estado monitoreando MortiSabbat.",
      },
      relationships: {
        elena: {
          relationshipType: "Mentor Protector",
          description:
            "Una relación paternal que esconde verdades dolorosas. El Dr. Hayes ve en Elena tanto una oportunidad para finalmente resolver los misterios del pueblo como un peligro para su estabilidad. Su deseo de protegerla choca con su necesidad de usar su experiencia para desentrañar la verdad.",
        },
        marcus: {
          relationshipType: "Aliado Complejo",
          description:
            "Un pasado compartido que podría ser la clave de todo el misterio. El Dr. Hayes y Marcus tienen una historia común que los une en una alianza incómoda, donde ambos conocen secretos del otro que podrían ser mutuamente destructivos si fueran revelados.",
        },
        sarah: {
          relationshipType: "Colaborador Cauteloso",
          description:
            "Una relación de respeto mutuo y colaboración cautelosa. El Dr. Hayes aprecia la dedicación de Sarah a la verdad, pero también teme que su naturaleza investigativa pueda desenterrar secretos que es mejor dejar enterrados.",
        },
      },
    },
  },
]
