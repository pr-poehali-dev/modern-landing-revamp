import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const backgroundPatterns = [
  {
    name: 'Паттерн 1',
    gradient: 'from-purple-600 via-pink-600 to-orange-500',
    image: '/patterns/pattern1.jpeg'
  },
  {
    name: 'Паттерн 2',
    gradient: 'from-blue-600 via-cyan-500 to-green-500',
    image: '/patterns/pattern2.jpeg'
  },
  {
    name: 'Паттерн 3',
    gradient: 'from-pink-600 via-purple-600 to-indigo-600',
    image: '/patterns/pattern3.jpeg'
  },
  {
    name: 'Паттерн 4',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    image: '/patterns/pattern4.jpeg'
  },
];

export default function MojiAI() {
  const [currentPattern, setCurrentPattern] = useState(0);

  const nextPattern = () => {
    setCurrentPattern((prev) => (prev + 1) % backgroundPatterns.length);
  };

  const prevPattern = () => {
    setCurrentPattern((prev) => (prev - 1 + backgroundPatterns.length) % backgroundPatterns.length);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden scroll-animate">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Icon name="Sparkles" size={20} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Новая функция</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Moji AI
            </span>
            {' '}— твой дизайнер
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Сгенерируй уникальный фон для своей страницы с помощью ИИ по любому запросу, даже самому невероятному
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
            
            <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-8 overflow-hidden">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${backgroundPatterns[currentPattern].gradient} transition-all duration-500`}
                  style={{
                    backgroundImage: `url(${backgroundPatterns[currentPattern].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                      <Icon name="Sparkles" size={32} className="text-white" />
                    </div>
                    <p className="text-xl font-bold text-white drop-shadow-lg">
                      {backgroundPatterns[currentPattern].name}
                    </p>
                  </div>
                </div>

                <button
                  onClick={prevPattern}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                  <Icon name="ChevronLeft" size={24} className="text-white" />
                </button>

                <button
                  onClick={nextPattern}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                >
                  <Icon name="ChevronRight" size={24} className="text-white" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {backgroundPatterns.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPattern(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPattern ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-gray-800 hover:bg-gray-700">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="Check" size={16} className="mr-2" />
                  Применить
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 p-6 max-w-2xl mx-auto mb-16">
          <div className="flex gap-3">
            <Icon name="Crown" size={24} className="text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-300">
              <strong className="text-purple-300">Генерация фонов с помощью ИИ</strong> доступна в подписке Moji Pro
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="Palette" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Любой стиль</h3>
            <p className="text-sm text-gray-400">Реализм, абстракция, минимализм — что угодно</p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">За секунды</h3>
            <p className="text-sm text-gray-400">Нейросеть создаёт фон за 5-10 секунд</p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <Icon name="Infinity" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Безлимит</h3>
            <p className="text-sm text-gray-400">Генерируй сколько хочешь на Pro</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
