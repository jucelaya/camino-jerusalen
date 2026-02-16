
import { InteractionType, ChapterData } from '../types';

export const chapter7Data: ChapterData = {
  title: "Camino a Jerusalén: Capítulo 7",
  pages: [
    {
      id: 93,
      title: "Rumbo a Jerusalén",
      subtitle: "Determinación y Sacrificio",
      centralIdea: "Jesús afirmó su rostro para ir a la cruz sabiendo que era el camino a la gloria.",
      mainMessage: "El liderazgo con propósito camina firme hacia el sacrificio porque conoce su gloria futura; Jesús no es una víctima, es un Redentor decidido.",
      verses: [
        { reference: "Lucas 9:51", insight: "Representa la 'Determinación Resoluta' de Jesús al afirmar su rostro hacia la cruz." },
        { reference: "Hebreos 12:2", insight: "Muestra a Jesús como el autor y consumador de la fe, quien por el gozo puesto delante de él sufrió la cruz." }
      ],
      teachingPoints: [
        "Resolución firme: Puso su rostro hacia el horror de Jerusalén.",
        "Propósito claro: Morir y resucitar para la redención.",
        "Soledad del liderazgo: Avanzó en un camino que nadie más comprendía."
      ],
      interactions: [
        {
          type: InteractionType.WORD_PUZZLE,
          question: "Ordena el concepto clave de la Pág. 93:",
          puzzleWord: "DETERMINACION",
          puzzleHint: "Actitud de Jesús al poner su rostro hacia Jerusalén."
        }
      ]
    },
    {
      id: 94,
      title: "Poder y Popularidad",
      subtitle: "El peligro del abuso de autoridad",
      centralIdea: "La autoridad delegada es un asunto delicado que exige humildad y madurez.",
      mainMessage: "La autoridad delegada por Dios es una herramienta de servicio al Reino, nunca un arma para la venganza personal o el control.",
      verses: [
        { reference: "Lucas 10:1–2", insight: "Trata sobre la misión de los setenta y la urgencia de obreros para la mies del Reino." },
        { reference: "Lucas 9:54–55", insight: "Muestra el contraste entre el espíritu de los discípulos (venganza) y el de Jesús (salvación)." }
      ],
      teachingPoints: [
        "Éxito y multitudes: Jesús envía a los setenta para preparar el camino.",
        "El incidente del fuego: Jacobo y Juan quieren castigar a los samaritanos.",
        "Reprensión del Maestro: No se usa el poder para vengarse."
      ],
      interactions: [
        {
          type: InteractionType.MATCHING,
          question: "Une la actitud con su verdadera motivación:",
          pairs: [
            { id: '1', left: "Pedir fuego", right: "Orgullo" },
            { id: '2', left: "Reprimenda", right: "Gracia" },
            { id: '3', left: "Setenta", right: "Misión" }
          ]
        }
      ]
    },
    {
      id: 95,
      title: "Exigencias Radicales",
      subtitle: "Prioridades del Discipulado",
      centralIdea: "Seguir a Jesús exige que incluso las relaciones más preciadas ocupen un segundo plano.",
      mainMessage: "El discipulado no tiene \"letra menuda\": seguir a Jesús reordena nuestras lealtades, poniendo al Maestro por encima de las relaciones más preciadas.",
      verses: [
        { reference: "Lucas 9:57–62", insight: "Explica el alto costo del seguimiento y la necesidad de no mirar atrás." },
        { reference: "1 Timoteo 5:8", insight: "Contextualiza la prioridad del Reino sin negar la responsabilidad de proveer para los suyos." }
      ],
      teachingPoints: [
        "Sin letras menudas: Jesús es honesto sobre las dificultades.",
        "Urgencia del Reino: El llamado supera los compromisos sociales.",
        "Lealtad absoluta: No mirar atrás después de poner la mano en el arado."
      ],
      interactions: [
        {
          type: InteractionType.SORTING,
          question: "Ordena las prioridades del Reino (1-3):",
          sortingItems: [
            { id: 'a', text: "Llamado de Dios", order: 1 },
            { id: 'b', text: "Lazos Familiares", order: 2 },
            { id: 'c', text: "Bienes Materiales", order: 3 }
          ]
        }
      ]
    },
    {
      id: 96,
      title: "El Joven Rico",
      subtitle: "Moralidad vs Rendición",
      centralIdea: "Se puede ser moralmente correcto y aún así estar atrapado por el corazón.",
      mainMessage: "La barrera para el Reino no es el dinero, sino el señorío; lo que no eres capaz de soltar es lo que realmente te posee.",
      verses: [
        { reference: "Lucas 18:18–27", insight: "Analiza al joven rico y revela que lo que no puedes soltar es tu verdadero señor." },
        { reference: "1 Timoteo 6:10", insight: "Advierte que la raíz de todos los males es el amor al dinero." }
      ],
      teachingPoints: [
        "Fervor aparente: 'Maestro bueno, ¿qué debo hacer?'.",
        "El diagnóstico de Jesús: El dinero era su verdadero señor.",
        "La barrera del camello: Lo difícil de soltar lo terrenal."
      ],
      interactions: [
        {
          type: InteractionType.REFLECTION,
          question: "¿Qué 'tesoro' terrenal te impide seguir a Jesús con total libertad?",
          placeholder: "Identifica tus ídolos materiales..."
        }
      ]
    },
    {
      id: 97,
      title: "Imposibilidad Humana",
      subtitle: "Salvación por Gracia",
      centralIdea: "La salvación no es una recompensa; es una dádiva gratuita de Dios.",
      mainMessage: "El Evangelio destruye el orgullo del éxito y del mérito: la salvación es una dádiva imposible para el hombre, pero posible para Dios.",
      verses: [
        { reference: "Lucas 18:26–30", insight: "Confirma que lo que es imposible para los hombres, es posible para Dios." },
        { reference: "Efesios 2:8–9", insight: "El fundamento de la Gracia: la salvación es un regalo inmerecido, no por obras." }
      ],
      teachingPoints: [
        "Desesperación: '¿Quién, pues, podrá ser salvo?'.",
        "Respuesta: 'Para Dios todo es posible'.",
        "La pregunta de Pedro: ¿Qué recibiremos por dejarlo todo?"
      ],
      interactions: [
        {
          type: InteractionType.TRUE_FALSE,
          question: "¿La salvación se puede alcanzar por mérito propio?",
          correctValue: false,
          instruction: "La salvación es un regalo inmerecido."
        }
      ]
    },
    {
      id: 98,
      title: "Gracia vs Justicia",
      subtitle: "Obreros de la Viña",
      centralIdea: "Dios tiene el derecho soberano de ser generoso con quien Él quiera.",
      mainMessage: "La justicia nos da lo que merecemos, pero la gracia nos da lo que no merecemos; el corazón del discípulo se alegra en la generosidad de Dios hacia otros.",
      verses: [
        { reference: "Mateo 20:1–16", insight: "La parábola de los obreros de la viña que ilustra la soberana generosidad de la Gracia." }
      ],
      teachingPoints: [
        "La parábola: Pago igual por horas distintas.",
        "El 'ojo malo': Envidiar la bondad de Dios hacia otros.",
        "Gratitud: El motor del servicio en el Reino."
      ],
      interactions: [
        {
          type: InteractionType.WORD_PUZZLE,
          question: "Descifra el motor del Reino (Pág. 98):",
          puzzleWord: "GRACIA",
          puzzleHint: "Recibir lo que no merecemos por la bondad de Dios."
        }
      ]
    },
    {
      id: 99,
      title: "Liderazgo de Servicio",
      subtitle: "Ambición en el camino",
      centralIdea: "En el Reino, la grandeza se mide por la capacidad de servir.",
      mainMessage: "En el Reino de Dios, la grandeza no se mide por quién está arriba mandando, sino por quién está abajo sirviendo.",
      verses: [
        { reference: "Marcos 10:35–45", insight: "Jesús establece el modelo: el Hijo del Hombre no vino para ser servido, sino para servir." },
        { reference: "Juan 13:3–5", insight: "El acto profético de lavar los pies como demostración máxima de humildad." }
      ],
      teachingPoints: [
        "Petición de honor: Cargos a derecha e izquierda.",
        "Indignación: Todos los discípulos buscaban prestigio.",
        "Modelo de Jesús: El que quiera ser grande, sea siervo."
      ],
      interactions: [
        {
          type: InteractionType.QUIZ,
          question: "¿Cuál es la medida de grandeza en el Reino?",
          options: [
            { text: "Tener autoridad sobre otros", isCorrect: false },
            { text: "Ser el servidor de todos", isCorrect: true },
            { text: "Estar a la derecha de Jesús", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 100,
      title: "Desafío al Molde",
      subtitle: "La vida del seguidor",
      centralIdea: "El discipulado exige evaluar ambiciones y dejar que Cristo nos moldee.",
      mainMessage: "El discipulado es un reto al molde de nuestra cultura; exige una reprogramación mental para aceptar que el camino de la cruz es el camino a la vida.",
      verses: [
        { reference: "Romanos 12:2", insight: "Llamado a la transformación mediante la renovación de nuestro entendimiento." },
        { reference: "Marcos 8:33–35", insight: "La necesidad de negarse a uno mismo y tomar la cruz para seguir a Cristo." }
      ],
      teachingPoints: [
        "Dirección inesperada: Seguir cuando el camino se vuelve áspero.",
        "Desarrollo del corazón: La meta es el cambio interno.",
        "Frente a lo nuevo: Romper con patrones culturales antiguos."
      ],
      interactions: [
        {
          type: InteractionType.TRAFFIC_LIGHT,
          question: "¿Qué tanto permites que Jesús cambie tus esquemas mentales?",
          instruction: "Rojo: Resistente, Amarillo: En proceso, Verde: Abierto"
        }
      ]
    },
    {
      id: 101,
      title: "Lealtad en la Confusión",
      subtitle: "Prioridades Finales",
      centralIdea: "La perseverancia se basa en mirar la soberanía de Dios.",
      mainMessage: "El discipulado no es la ausencia de confusión, sino la presencia de lealtad en medio de ella; perseveramos mirando Su sacrificio (pasado) y Su soberanía (futuro).",
      verses: [
        { reference: "Hebreos 12:1–3", insight: "Exhortación a perseverar corriendo con paciencia la carrera, puestos los ojos en Jesús." },
        { reference: "Juan 6:67–69", insight: "La confesión de Pedro sobre las 'palabras de vida eterna' en momentos de crisis." }
      ],
      teachingPoints: [
        "1 Timoteo 5:8 vs Lucas 9:59.",
        "Poner la mano en el arado: Sin mirar atrás.",
        "Prioridad de Dios: La verdadera forma de bendecir a la familia."
      ],
      interactions: [
        {
          type: InteractionType.REFLECTION,
          question: "¿Cómo concilias tu responsabilidad familiar con tu llamado ministerial?",
          placeholder: "Analiza tus prioridades..."
        }
      ]
    }
  ]
};
