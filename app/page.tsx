import Link from "next/link"
import { CalendarIcon, Clock3Icon, UserIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Mi Blog
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="font-medium hover:text-gray-600">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-medium hover:text-gray-600">
                    Artículos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-medium hover:text-gray-600">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-medium hover:text-gray-600">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            {/* Título principal con imagen destacada */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop"
                alt="El Impacto de la Inteligencia Artificial en Nuestra Vida Cotidiana"
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                <h1 className="text-4xl font-bold text-white p-6">
                  El Impacto de la Inteligencia Artificial en Nuestra Vida Cotidiana
                </h1>
              </div>
            </div>

            <div className="flex items-center text-gray-500 text-sm mb-6">
              <div className="flex items-center mr-4">
                <UserIcon className="h-4 w-4 mr-1" />
                <span>Por Jonathan Contreras</span>
              </div>
              <div className="flex items-center mr-4">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>11 de Mayo, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock3Icon className="h-4 w-4 mr-1" />
                <span>5 minutos de lectura</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              La inteligencia artificial (IA) ha dejado de ser un concepto futurista para convertirse en una realidad
              que influye en casi todos los aspectos de nuestra vida diaria. Desde los asistentes virtuales en nuestros
              teléfonos hasta los algoritmos que determinan lo que vemos en redes sociales, la IA está transformando
              silenciosamente nuestra forma de vivir.
            </p>

            <h2>Asistentes Virtuales: Nuestros Nuevos Compañeros</h2>
            <p>
              Los asistentes virtuales como Siri, Alexa y Google Assistant se han convertido en parte integral de muchos
              hogares. Estos sistemas, impulsados por algoritmos de aprendizaje automático, pueden responder preguntas,
              controlar dispositivos domésticos inteligentes, reproducir música y hasta contar chistes. Su capacidad
              para entender el lenguaje natural y aprender de las interacciones los hace cada vez más útiles y
              personalizados.
            </p>

            {/* Imagen adicional dentro del contenido */}
            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop"
                alt="Asistente virtual interactuando con usuario"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Asistentes virtuales transformando nuestra interacción con la tecnología
              </p>
            </div>

            <blockquote>
              <p>
                "La verdadera revolución de la IA no está en la tecnología en sí, sino en cómo está cambiando nuestra
                relación con las máquinas, haciéndolas más accesibles y humanas."
              </p>
            </blockquote>

            <h2>Recomendaciones Personalizadas</h2>
            <p>
              Los algoritmos de IA analizan nuestros hábitos de consumo para ofrecernos recomendaciones personalizadas.
              Netflix sugiere series basadas en lo que hemos visto, Spotify crea listas de reproducción adaptadas a
              nuestros gustos musicales, y Amazon nos muestra productos que podrían interesarnos. Esta personalización
              mejora nuestra experiencia como usuarios, aunque también plantea preguntas sobre privacidad y filtros
              burbuja.
            </p>

            {/* Otra imagen dentro del contenido */}
            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop"
                alt="Algoritmos de recomendación personalizados"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Sistemas de recomendación basados en IA mejoran nuestra experiencia digital
              </p>
            </div>

            <h2>Salud y Bienestar</h2>
            <p>
              En el ámbito de la salud, la IA está revolucionando el diagnóstico médico, el desarrollo de medicamentos y
              el cuidado personalizado. Aplicaciones de salud utilizan algoritmos para analizar datos y ofrecer
              recomendaciones sobre ejercicio, nutrición y hábitos de sueño. Además, sistemas avanzados de IA pueden
              detectar enfermedades como el cáncer en etapas tempranas con una precisión comparable o superior a la de
              los médicos.
            </p>

            <h2>El Futuro de la IA en Nuestra Vida</h2>
            <p>
              A medida que la IA continúa evolucionando, su integración en nuestra vida cotidiana será aún más profunda.
              Vehículos autónomos, hogares inteligentes completamente integrados y asistentes virtuales más sofisticados
              son solo algunas de las innovaciones que podemos esperar. Sin embargo, este avance también trae consigo
              desafíos éticos, sociales y económicos que debemos abordar como sociedad.
            </p>

            <p>
              La inteligencia artificial no es solo una herramienta tecnológica, sino un agente de cambio que está
              redefiniendo nuestra relación con la tecnología y entre nosotros mismos. Comprender su impacto y
              participar en conversaciones sobre su desarrollo responsable es esencial para aprovechar sus beneficios
              mientras mitigamos sus riesgos.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">&copy; 2025 Mi Blog. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Facebook
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Instagram
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
