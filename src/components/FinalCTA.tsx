import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden scroll-animate">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Готов начать?<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Создай свой мини-лендинг
          </span>
          <br />
          за минуту
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Запусти продажи прямо сейчас. Без доменов, без хостинга, без головной боли.
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
          onClick={() => window.open('https://t.me/GetMojiBot', '_blank')}
        >
          <Icon name="Send" className="mr-3" size={28} />
          Открыть в Telegram
        </Button>
        
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div>
              <Icon name="Shield" className="mx-auto mb-2" size={24} />
              <p>Данные хранятся в РФ</p>
            </div>
            <div>
              <Icon name="Mail" className="mx-auto mb-2" size={24} />
              <p>Поддержка: abuse@moji.vc</p>
            </div>
            <div>
              <Icon name="Smartphone" className="mx-auto mb-2" size={24} />
              <p>Работает на всех устройствах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}