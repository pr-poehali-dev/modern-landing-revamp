import Icon from '@/components/ui/icon';

const steps = [
  {
    number: '1',
    icon: 'MessageSquare',
    title: 'Открываешь Moji в Telegram',
    description: 'Просто запускаешь WebApp прямо из мессенджера',
  },
  {
    number: '2',
    icon: 'Plus',
    title: 'Добавляешь блоки и контент',
    description: 'Текст, изображения, кнопки — всё в пару кликов',
  },
  {
    number: '3',
    icon: 'Send',
    title: 'Получаешь ссылку',
    description: 'Отправляешь её клиентам и начинаешь продавать',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 relative overflow-hidden scroll-animate">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Как это <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">работает</span>?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-black shadow-xl">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mx-auto">
                    <Icon name={step.icon} size={32} className="text-purple-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
