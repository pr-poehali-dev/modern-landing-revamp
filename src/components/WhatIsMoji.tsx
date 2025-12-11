import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const features = [
  { icon: 'Zap', text: 'Создание страницы за 3 минуты' },
  { icon: 'Smile', text: 'Уникальный адрес с emoji' },
  { icon: 'UserCheck', text: 'Без регистрации' },
];

export default function WhatIsMoji() {
  return (
    <section className="py-20 px-4 relative overflow-hidden scroll-animate">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Что такое <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Moji</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Moji — это простой конструктор микролендингов, который работает прямо в Telegram и не требует регистрации и знания программирования.
            <br /><br />
            Создай страницу с ссылками на свои соцсети, добавь баннеры, видео и текстовые блоки всего за пару минут.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon} size={24} />
                </div>
                <p className="text-lg font-semibold text-gray-200 leading-tight pt-2">
                  {feature.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}