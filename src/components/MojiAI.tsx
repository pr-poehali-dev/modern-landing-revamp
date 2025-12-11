import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const backgroundPatterns = [
  {
    name: 'Паттерн 1',
    gradient: 'from-purple-600 via-pink-600 to-orange-500',
    image: 'https://cdn.poehali.dev/projects/51246eb4-219e-4f21-843b-1984ff5c8192/files/0bed4afa-f068-4e17-a7d9-a5ac4bafc225.jpg',
    prompt: 'Космический закат с плавными фиолетовыми и оранжевыми переходами'
  },
  {
    name: 'Паттерн 2',
    gradient: 'from-blue-600 via-cyan-500 to-green-500',
    image: 'https://cdn.poehali.dev/projects/51246eb4-219e-4f21-843b-1984ff5c8192/files/d52405a7-0843-4ef0-95ba-dc06fcd4685c.jpg',
    prompt: 'Абстрактные геометрические фигуры в сине-зеленых тонах'
  },
  {
    name: 'Паттерн 3',
    gradient: 'from-pink-600 via-purple-600 to-indigo-600',
    image: 'https://cdn.poehali.dev/projects/51246eb4-219e-4f21-843b-1984ff5c8192/files/e70cc14b-bc70-4c36-8d54-bbfb18256ed8.jpg',
    prompt: 'Мягкие облака в розово-фиолетовых тонах, dreamy aesthetic'
  },
  {
    name: 'Паттерн 4',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    image: 'https://cdn.poehali.dev/projects/51246eb4-219e-4f21-843b-1984ff5c8192/files/dc837c8c-c9e8-40a8-af22-20b41372dec1.jpg',
    prompt: 'Энергичные волны огненных оттенков с яркими переходами'
  },
];

export default function MojiAI() {
  const [currentPattern, setCurrentPattern] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentPrompt = backgroundPatterns[currentPattern].prompt;
    let currentIndex = 0;
    let isDeleting = false;
    const typingSpeed = 50;

    const typeText = () => {
      if (!isDeleting) {
        if (currentIndex < currentPrompt.length) {
          setDisplayedText(currentPrompt.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeText, typingSpeed);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            isDeleting = true;
            setIsTyping(true);
            typeText();
          }, 5000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentPrompt.substring(0, currentIndex - 1));
          currentIndex--;
          setTimeout(typeText, 30);
        } else {
          setCurrentPattern((prev) => (prev + 1) % backgroundPatterns.length);
          isDeleting = false;
          setIsTyping(true);
        }
      }
    };

    typeText();
  }, [currentPattern]);

  return (
    <section className="py-20 px-4 relative overflow-hidden scroll-animate">
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${backgroundPatterns[currentPattern].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Sparkles" size={20} className="text-purple-300" />
            <span className="text-sm font-semibold text-purple-200">Новая функция</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
              Moji AI
            </span>
            {' '}— твой дизайнер
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Сгенерируй уникальный фон для своей страницы с помощью ИИ по любому запросу, даже самому невероятному
          </p>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 p-4">
              <div className="flex items-start gap-3">
                <Icon name="MessageSquare" size={20} className="text-purple-300 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1 font-semibold">Пример промпта:</p>
                  <p className="text-sm text-gray-200 font-mono min-h-[40px]">
                    {displayedText}
                    {showCursor && <span className="inline-block w-0.5 h-4 bg-purple-400 ml-0.5 align-middle" />}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Icon name="Palette" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Любой стиль</h3>
            <p className="text-sm text-white/80">Реализм, абстракция, минимализм — что угодно</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">За секунды</h3>
            <p className="text-sm text-white/80">Нейросеть создаёт фон за 5-10 секунд</p>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Icon name="Infinity" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Безлимит</h3>
            <p className="text-sm text-white/80">Генерируй сколько хочешь на Pro</p>
          </Card>
        </div>
      </div>
    </section>
  );
}