import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: 'Smartphone',
    title: 'Работает в Telegram',
    description: 'Не нужно открывать браузер или разбираться в хостингах',
  },
  {
    icon: 'Link',
    title: 'Готовая ссылка сразу',
    description: 'После создания получаешь ссылку для отправки клиентам',
  },
  {
    icon: 'Palette',
    title: 'Тёмный стиль, современный UI',
    description: 'Стильный интерфейс, который нравится пользователям',
  },
  {
    icon: 'CreditCard',
    title: 'Оплата через Telegram Stars',
    description: 'Удобная оплата и через ЮKassa для пользователей',
  },
  {
    icon: 'Crown',
    title: 'Премиум-функции Pro',
    description: 'Расширенные блоки по подписке для профессионалов',
  },
  {
    icon: 'Blocks',
    title: 'Платные блоки',
    description: 'Баннер, слайдер, видео — всё для крутого лендинга',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 relative scroll-animate">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Преимущества <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Moji</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-8 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name={benefit.icon} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}