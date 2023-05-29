

//switch para horoscopos:
var opcion =prompt ("Introduce el numero de tu signo zodiacal para consultar el horoscopo. Aries(1), Tauro(2), Géminis(3), Cáncer(4), Leo(5), Virgo(6), Libra(7), Escorpio(8), Sagitario(9), Capricornio(10), Acuario(11) y Piscis(12)")


switch (opcion){

    case "1":
        console.log("Aries, Te has pasado la vida corriendo, ¡pero cuidado! Encontrarás tu verdadero amor cuando aprendas a frenar y no pases de largo. Recuerda que el romance no es una carrera de velocidad, sino una caminata placentera.");
        break;
    
    case "2":
        console.log("Tauro, Eres tan terco que podrías discutir con un espejo. Pero este año, deja que tu terquedad te lleve a nuevas alturas. Si alguien te dice que no puedes volar, ¡demuéstrales que están equivocados y salta de un trampolín!");
        break;

    case "3":
        console.log("Geminis, Tienes la habilidad de hablar por los codos, pero recuerda que también debes escuchar. Esta temporada, intenta escuchar más y hablar menos. ¡Quién sabe, podrías descubrir que el silencio también puede ser de oro!");
        break;

    case "4":
        console.log("Cancer,Eres el signo más sentimental, pero a veces te aferras demasiado al pasado. Este año, suelta esa vieja caja de cartas de tu ex y haz espacio para cosas nuevas. Quizás encuentres una postal de amor en el buzón que sea mucho más emocionante.");
        break;

    case "5":
        console.log("Leo, Te encanta ser el centro de atención, ¡y quién puede culparte! Pero no olvides que tus amigos también tienen vidas emocionantes. Deja de contar tus historias grandiosas por un momento y escucha lo que los demás tienen que decir. ¡Podrías aprender algo nuevo!");
        break;

    case "6":
        console.log("Virgo, Eres tan perfeccionista que te vuelves loco por los detalles. Pero, ¿sabes qué? A veces, la belleza está en los errores. ¡Rompe una regla hoy y diviértete! Sal a bailar bajo la lluvia (con un paraguas, por supuesto).");
        break;

    case "7":
        console.log("Libra, Te encanta el equilibrio y la armonía, pero este año es hora de sacudir las cosas. Salta en un pie, camina hacia atrás o toma decisiones al azar. ¡El desequilibrio puede ser divertido!");
        break;

    case "8":
        console.log("Escorpio, Eres un signo misterioso y profundo, pero no tienes que llevar esa seriedad todo el tiempo. Haz una broma, ríe en voz alta y suelta tu lado divertido. El humor negro puede ser tu mejor aliado.");
        break;
    case "9":
        console.log("Sagitario, Eres aventurero y siempre estás en busca de nuevas experiencias. Pero a veces, la mejor aventura está justo frente a ti. Prueba una nueva receta de cocina o juega a las cartas con tus amigos. ¡El hogar también puede ser emocionante!");
        break;
    case "10":
        console.log("Capricornio, Eres trabajador y ambicioso, pero también necesitas tiempo para relajarte. Deja ese informe por un momento y tómate un descanso. Haz un poco de yoga o siéntate a ver una buena película. Recuerda: el ocio también es importante");
        break;
    case "11":
        console.log("Acuario, Eres el signo más excéntrico del zodíaco, pero a veces tus ideas pueden ser demasiado extravagantes. Este año, intenta una idea menos loca y más práctica. ¡Puedes sorprenderte con los resultados!");
        break;
    case "12":
        console.log("Piscis, Eres el signo más imaginativo y sensible, pero a veces te pierdes en tus propias fantasías. Es hora de regenerar esa energía creativa y canalizarla en proyectos tangibles. ");
        break;
    default:
        console.log("valor invalido");

}