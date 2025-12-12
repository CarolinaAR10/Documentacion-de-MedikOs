import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] bg-gray-50">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner animado con múltiples capas */}
        <div className="relative w-20 h-20">
          {/* Círculo exterior - rotación lenta */}
          <motion.div
            className="absolute inset-0 border-4 border-blue-100 border-t-blue-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Círculo medio - rotación media */}
          <motion.div
            className="absolute inset-2 border-4 border-blue-50 border-r-blue-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Círculo interior - rotación rápida */}
          <motion.div
            className="absolute inset-4 border-3 border-transparent border-b-blue-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Punto central pulsante */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Texto de carga con animación */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="text-blue-600">
            Cargando...
          </p>
          
          {/* Puntos animados */}
          <div className="flex gap-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}