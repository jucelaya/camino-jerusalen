
import { InteractionType, ChapterData } from '../types';

export const chapter7Data: ChapterData = {
  title: "Camino a Jerusalén: Capítulo 7",
  pages: [
    {
      id: 93,
      title: "Rumbo a Jerusalén",
      subtitle: "Determinación y Sacrificio",
      centralIdea: "Jesús afirmó su rostro para ir a la cruz sabiendo que era el camino a la gloria.",
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
      title: "Valiente para Pensarlo (I)",
      subtitle: "Prioridades Familiares",
      centralIdea: "Honrar a la familia es vital, pero no debe ser una excusa para la desobediencia.",
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
    },
    {
      id: 102,
      title: "Valiente para Pensarlo (II)",
      subtitle: "Riqueza y Corazón",
      centralIdea: "El apego a las cosas materiales hace imposible entrar al Reino.",
      teachingPoints: [
        "Evaluar el 'apretón': ¿Qué tanto te poseen tus bienes?",
        "Simplificar: Estar dispuesto a soltar por Cristo.",
        "Mateo 6:24: Dios o el Dinero."
      ],
      interactions: [
        {
          type: InteractionType.QUIZ,
          question: "¿Qué es lo más necesario respecto a nuestras posesiones?",
          options: [
            { text: "Acumularlas para el futuro", isCorrect: false },
            { text: "Ordenarlas bajo el señorío de Jesús", isCorrect: true },
            { text: "Venderlas todas hoy mismo", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 103,
      title: "Valiente para Actuar",
      subtitle: "Pasos Prácticos",
      centralIdea: "El conocimiento del Reino debe traducirse en acciones de generosidad.",
      teachingPoints: [
        "Evaluación: ¿A quién amo más?",
        "Acción: Practicar la generosidad sin esperar recompensa.",
        "Tesoro: Invertir en lo eterno."
      ],
      interactions: [
        {
          type: InteractionType.REFLECTION,
          question: "¿Qué paso concreto de generosidad darás esta semana?",
          placeholder: "Escribe tu compromiso de acción..."
        }
      ]
    }
  ]
};
