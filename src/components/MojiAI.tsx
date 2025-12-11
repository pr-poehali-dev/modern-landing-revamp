import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const examples = [
  { text: 'Космический закат на Марсе', gradient: 'from-orange-600 via-purple-900 to-black' },
  { text: 'Неоновый киберпанк город', gradient: 'from-cyan-500 via-purple-600 to-pink-500' },
  { text: 'Тропический рай с пальмами', gradient: 'from-green-400 via-blue-500 to-purple-600' },
  { text: 'Северное сияние в горах', gradient: 'from-blue-400 via-green-300 to-purple-500' },
];

export default function MojiAI() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Опиши фон, который хочешь увидеть..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-gray-800/50 border-purple-500/30 focus:border-purple-500 text-white placeholder:text-gray-500"
                  />
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6"
                  >
                    {isGenerating ? (
                      <Icon name="Loader2" className="animate-spin" size={20} />
                    ) : (
                      <Icon name="Wand2" size={20} />
                    )}
                  </Button>
                </div>
                
                <div className="text-sm text-gray-400">
                  <Icon name="Zap" size={16} className="inline mr-1 text-purple-400" />
                  Генерация занимает 5-10 секунд
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Icon name="Lightbulb" size={20} className="text-purple-400" />
                Попробуй примеры:
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example.text)}
                    className="group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 hover:scale-105"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
                    <p className="relative text-sm font-semibold text-white">{example.text}</p>
                  </button>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30 p-4">
              <div className="flex gap-3">
                <Icon name="Info" size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <strong className="text-blue-300">Безлимитная генерация</strong> доступна в подписке Pro
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
            
            <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10" />
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <Icon name="Sparkles" size={20} />
                    </div>
                    <span className="font-bold">AI Generated</span>
                  </div>
                  <Icon name="Check" size={20} className="text-green-400" />
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-purple-900 to-black opacity-80" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Icon name="Image" size={48} className="mx-auto text-white/50" />
                      <p className="text-sm text-white/70">Космический закат на Марсе</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gray-800 hover:bg-gray-700">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                    <Icon name="Check" size={16} className="mr-2" />
                    Применить
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
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
            <h3 className="text-lg font-bold mb-2">Безграничные варианты</h3>
            <p className="text-sm text-gray-400">Миллионы уникальных комбинаций на выбор</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
