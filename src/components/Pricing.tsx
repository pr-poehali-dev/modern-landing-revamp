import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const proFeatures = [
  'Баннер для промо-акций',
  'Слайдер изображений',
  'Встроенное видео',
  'Приоритетная поддержка',
  'Расширенная аналитика',
  'Без рекламы Moji',
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 relative scroll-animate">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Подписка <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Pro</span>
          </h2>
          <p className="text-xl text-gray-300">
            Открой доступ к расширенным блокам и профессиональным функциям
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-purple-500/50 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="Crown" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black">Moji Pro</h3>
                <p className="text-gray-400">Профессиональная подписка</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black">499₽</span>
                <span className="text-gray-400 text-xl">/месяц</span>
              </div>
              <p className="text-sm text-gray-400">Автоматическое продление, отмена в один клик</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-6 rounded-xl shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Crown" className="mr-2" size={24} />
              Подключить Pro
            </Button>
            
            <p className="text-sm text-gray-500 text-center mt-6">
              Подписка автоматически продлевается. Возвратов нет — все оплаченные периоды активны до конца.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
